/**
 * Template marketplace routes + file store.
 *
 * Unlike components (which are SCANNED from `packages/` on the fly), published
 * project templates are STORED as one JSON file per template under
 * `zero-marketplace/templates/<id>.json`. This gives the marketplace a simple,
 * dependency-light (fs/path only) durable store that the platform-api pushes
 * PUBLIC templates into on publish and reads back when building its listing.
 *
 * Endpoints (mounted the same way as the component routes, ESM):
 *   POST   /marketplace/publish-template   → write/overwrite the store file
 *   GET    /marketplace/templates          → list (public only, optional ?search=)
 *   GET    /marketplace/templates/:id       → one, 404 if absent
 *   DELETE /marketplace/templates/:id       → remove (unpublish), 204/404
 *
 * The component routes in marketplace.js are intentionally left untouched.
 */
import path from 'path';
import { promises as fsp } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// zero-marketplace/templates  (…/server/src/routes → ../../../templates)
const TEMPLATES_DIR = process.env.TEMPLATES_DIR
    ? (path.isAbsolute(process.env.TEMPLATES_DIR)
        ? process.env.TEMPLATES_DIR
        : path.resolve(__dirname, `../../../${process.env.TEMPLATES_DIR}`))
    : path.resolve(__dirname, '../../../templates');

/** Ensure the store directory exists (created on demand). */
const ensureTemplatesDir = async () => {
    await fsp.mkdir(TEMPLATES_DIR, { recursive: true });
};

/**
 * Turn an arbitrary template id into a safe `<id>.json` path INSIDE the store
 * dir. Returns null for ids that are empty or would escape the directory (path
 * traversal defense). Only [A-Za-z0-9._-] survive; ".." sequences are neutralized.
 */
const safeTemplateFilePath = (rawId) => {
    if (rawId === undefined || rawId === null) return null;
    let id = String(rawId).trim();
    if (!id) return null;
    // Collapse to a safe charset, then neutralize any ".." runs.
    id = id.replace(/[^a-zA-Z0-9._-]/g, '_').replace(/\.\.+/g, '_');
    if (!id || id === '.' ) return null;
    const filePath = path.join(TEMPLATES_DIR, `${id}.json`);
    // Defense in depth: the resolved path must stay within TEMPLATES_DIR.
    const rel = path.relative(TEMPLATES_DIR, filePath);
    if (rel.startsWith('..') || path.isAbsolute(rel)) return null;
    return filePath;
};

/** Read + parse every *.json in the store, skipping unreadable/bad files. */
const readAllTemplates = async () => {
    let entries;
    try {
        entries = await fsp.readdir(TEMPLATES_DIR, { withFileTypes: true });
    } catch (err) {
        if (err && err.code === 'ENOENT') return []; // store not created yet
        throw err;
    }

    const templates = [];
    for (const entry of entries) {
        if (!entry.isFile() || !entry.name.endsWith('.json')) continue;
        try {
            const raw = await fsp.readFile(path.join(TEMPLATES_DIR, entry.name), 'utf8');
            templates.push(JSON.parse(raw));
        } catch (err) {
            console.warn(`[templates] skipping unreadable template file ${entry.name}:`, err.message);
        }
    }
    return templates;
};

const matchesSearch = (template, search) => {
    if (!search) return true;
    const haystack = [
        template.id,
        template.name,
        template.description,
        ...(Array.isArray(template.tags) ? template.tags : []),
    ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();
    return haystack.includes(search);
};

const setupTemplateRoutes = (router) => {
    // STORE: write/overwrite templates/<id>.json with the posted template object.
    router.post('/marketplace/publish-template', async (req, res) => {
        try {
            const template = req.body || {};
            const filePath = safeTemplateFilePath(template.id);
            if (!filePath) {
                res.status(400).json({ error: 'Template id is required (and must resolve to a safe filename)' });
                return;
            }

            await ensureTemplatesDir();
            // Store whatever is sent (the platform-api curates the payload).
            await fsp.writeFile(filePath, JSON.stringify(template, null, 2), 'utf8');
            res.status(201).json({ accepted: true, id: template.id });
        } catch (error) {
            console.error('[templates] Failed to publish template:', error);
            res.status(500).json({ error: 'Failed to publish template' });
        }
    });

    // LIST: only public templates (the marketplace is a public catalog), with an
    // optional ?search= substring filter over id/name/description/tags.
    router.get('/marketplace/templates', async (req, res) => {
        try {
            const search = (req.query.search || '').toString().toLowerCase().trim();
            const all = await readAllTemplates();
            const publicTemplates = all
                .filter((t) => t && t.visibility === 'public')
                .filter((t) => matchesSearch(t, search));
            res.json(publicTemplates);
        } catch (error) {
            console.error('[templates] Failed to list templates:', error);
            res.status(500).json({ error: 'Failed to list templates' });
        }
    });

    // ONE: return a single stored template by id, 404 if absent.
    router.get('/marketplace/templates/:id', async (req, res) => {
        try {
            const filePath = safeTemplateFilePath(req.params.id);
            if (!filePath) {
                res.status(400).json({ error: 'Invalid template id' });
                return;
            }
            let raw;
            try {
                raw = await fsp.readFile(filePath, 'utf8');
            } catch (err) {
                if (err && err.code === 'ENOENT') {
                    res.status(404).json({ error: 'Template not found' });
                    return;
                }
                throw err;
            }
            res.json(JSON.parse(raw));
        } catch (error) {
            console.error('[templates] Failed to get template:', error);
            res.status(500).json({ error: 'Failed to get template' });
        }
    });

    // UNPUBLISH: delete the store file. 204 on success, 404 if it was not present.
    router.delete('/marketplace/templates/:id', async (req, res) => {
        try {
            const filePath = safeTemplateFilePath(req.params.id);
            if (!filePath) {
                res.status(400).json({ error: 'Invalid template id' });
                return;
            }
            try {
                await fsp.unlink(filePath);
            } catch (err) {
                if (err && err.code === 'ENOENT') {
                    res.status(404).json({ error: 'Template not found' });
                    return;
                }
                throw err;
            }
            res.status(204).end();
        } catch (error) {
            console.error('[templates] Failed to delete template:', error);
            res.status(500).json({ error: 'Failed to delete template' });
        }
    });

    return router;
};

export { setupTemplateRoutes, TEMPLATES_DIR };
