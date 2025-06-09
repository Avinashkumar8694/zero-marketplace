import fs from 'fs';
import path from 'path';

const packagesDir = './packages';
const packages = fs.readdirSync(packagesDir, { withFileTypes: true })
  .filter(dirent => dirent.isDirectory())
  .map(dirent => dirent.name);

for (const packageName of packages) {
  const packagePath = path.join(packagesDir, packageName);
  const versionDirs = fs.readdirSync(packagePath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory() && dirent.name.startsWith('v'))
    .map(dirent => dirent.name);
  
  for (const versionDir of versionDirs) {
    const readmePath = path.join(packagePath, versionDir, 'README.md');
    
    if (fs.existsSync(readmePath)) {
      console.log(`Updating ${packageName}/${versionDir}/README.md...`);
      
      let content = fs.readFileSync(readmePath, 'utf8');
      const version = versionDir.substring(1); // Remove 'v' prefix
      const newTagName = `${packageName}-${version}`;
      
      // Replace opening tags
      content = content.replace(new RegExp(`<${packageName}\\b([^>]*)>`, 'g'), `<${newTagName}$1>`);
      
      // Replace closing tags
      content = content.replace(new RegExp(`</${packageName}>`, 'g'), `</${newTagName}>`);
      
      // Replace createElement calls
      content = content.replace(new RegExp(`createElement\\('${packageName}'\\)`, 'g'), `createElement('${newTagName}')`);
      
      // Replace querySelector calls
      content = content.replace(new RegExp(`querySelector\\('${packageName}'\\)`, 'g'), `querySelector('${newTagName}')`);
      
      // Replace querySelectorAll calls
      content = content.replace(new RegExp(`querySelectorAll\\('${packageName}'\\)`, 'g'), `querySelectorAll('${newTagName}')`);
      
      // Replace CSS selectors at start of line
      content = content.replace(new RegExp(`^${packageName}\\s*\\{`, 'gm'), `${newTagName} {`);
      
      // Replace CSS selectors with spaces before other selectors
      content = content.replace(new RegExp(`${packageName}\\s+([a-zA-Z])`, 'g'), `${newTagName} $1`);
      
      fs.writeFileSync(readmePath, content, 'utf8');
      console.log(`✅ Updated ${packageName} to use ${newTagName}`);
    }
  }
}

console.log('✅ Completed updating all README.md files!');
