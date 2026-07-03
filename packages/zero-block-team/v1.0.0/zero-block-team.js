var Dt = Object.defineProperty;
var It = (r, e, t) => e in r ? Dt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => It(r, typeof e != "symbol" ? e + "" : e, t);
var We = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
/*! *****************************************************************************
Copyright (C) Microsoft. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
var Ve;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = a(r);
    typeof t.Reflect < "u" && (n = a(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function a(y, A) {
      return function(b, $) {
        Object.defineProperty(y, b, { configurable: !0, writable: !0, value: $ }), A && A(b, $);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function u() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function m() {
      return l() || u();
    }
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !m && !y, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return me(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return me({ __proto__: null });
      } : function() {
        return me({});
      },
      has: A ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: A ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, $ = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), I = typeof WeakMap == "function" ? WeakMap : kt(), V = a ? Symbol.for("@reflect-metadata:registry") : void 0, le = Ot(), xe = Mt(le);
    function ut(i, s, o, c) {
      if (g(o)) {
        if (!De(i))
          throw new TypeError();
        if (!Ie(s))
          throw new TypeError();
        return _t(i, s);
      } else {
        if (!De(i))
          throw new TypeError();
        if (!x(s))
          throw new TypeError();
        if (!x(c) && !g(c) && !F(c))
          throw new TypeError();
        return F(c) && (c = void 0), o = D(o), wt(i, s, o, c);
      }
    }
    e("decorate", ut);
    function ct(i, s) {
      function o(c, v) {
        if (!x(c))
          throw new TypeError();
        if (!g(v) && !St(v))
          throw new TypeError();
        Pe(i, s, c, v);
      }
      return o;
    }
    e("metadata", ct);
    function dt(i, s, o, c) {
      if (!x(o))
        throw new TypeError();
      return g(c) || (c = D(c)), Pe(i, s, o, c);
    }
    e("defineMetadata", dt);
    function ht(i, s, o) {
      if (!x(s))
        throw new TypeError();
      return g(o) || (o = D(o)), Oe(i, s, o);
    }
    e("hasMetadata", ht);
    function ft(i, s, o) {
      if (!x(s))
        throw new TypeError();
      return g(o) || (o = D(o)), pe(i, s, o);
    }
    e("hasOwnMetadata", ft);
    function pt(i, s, o) {
      if (!x(s))
        throw new TypeError();
      return g(o) || (o = D(o)), Me(i, s, o);
    }
    e("getMetadata", pt);
    function yt(i, s, o) {
      if (!x(s))
        throw new TypeError();
      return g(o) || (o = D(o)), Ce(i, s, o);
    }
    e("getOwnMetadata", yt);
    function vt(i, s) {
      if (!x(i))
        throw new TypeError();
      return g(s) || (s = D(s)), Te(i, s);
    }
    e("getMetadataKeys", vt);
    function mt(i, s) {
      if (!x(i))
        throw new TypeError();
      return g(s) || (s = D(s)), ke(i, s);
    }
    e("getOwnMetadataKeys", mt);
    function gt(i, s, o) {
      if (!x(s))
        throw new TypeError();
      if (g(o) || (o = D(o)), !x(s))
        throw new TypeError();
      g(o) || (o = D(o));
      var c = Y(
        s,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, o);
    }
    e("deleteMetadata", gt);
    function _t(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], v = c(s);
        if (!g(v) && !F(v)) {
          if (!Ie(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function wt(i, s, o, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(s, o, c);
        if (!g(O) && !F(O)) {
          if (!x(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Oe(i, s, o) {
      var c = pe(i, s, o);
      if (c)
        return !0;
      var v = ve(s);
      return F(v) ? !1 : Oe(i, v, o);
    }
    function pe(i, s, o) {
      var c = Y(
        s,
        o,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Ne(c.OrdinaryHasOwnMetadata(i, s, o));
    }
    function Me(i, s, o) {
      var c = pe(i, s, o);
      if (c)
        return Ce(i, s, o);
      var v = ve(s);
      if (!F(v))
        return Me(i, v, o);
    }
    function Ce(i, s, o) {
      var c = Y(
        s,
        o,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, o);
    }
    function Pe(i, s, o, c) {
      var v = Y(
        o,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, o, c);
    }
    function Te(i, s) {
      var o = ke(i, s), c = ve(i);
      if (c === null)
        return o;
      var v = Te(c, s);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var M = new k(), O = [], _ = 0, d = o; _ < d.length; _++) {
        var h = d[_], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      for (var p = 0, w = v; p < w.length; p++) {
        var h = w[p], f = M.has(h);
        f || (M.add(h), O.push(h));
      }
      return O;
    }
    function ke(i, s) {
      var o = Y(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
    }
    function Re(i) {
      if (i === null)
        return 1;
      switch (typeof i) {
        case "undefined":
          return 0;
        case "boolean":
          return 2;
        case "string":
          return 3;
        case "symbol":
          return 4;
        case "number":
          return 5;
        case "object":
          return i === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function g(i) {
      return i === void 0;
    }
    function F(i) {
      return i === null;
    }
    function $t(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function bt(i, s) {
      switch (Re(i)) {
        case 0:
          return i;
        case 1:
          return i;
        case 2:
          return i;
        case 3:
          return i;
        case 4:
          return i;
        case 5:
          return i;
      }
      var o = "string", c = Ue(i, l);
      if (c !== void 0) {
        var v = c.call(i, o);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, s) {
      var o, c;
      {
        var v = i.toString;
        if (ue(v)) {
          var c = v.call(i);
          if (!x(c))
            return c;
        }
        var o = i.valueOf;
        if (ue(o)) {
          var c = o.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function Et(i) {
      return "" + i;
    }
    function D(i) {
      var s = bt(i);
      return $t(s) ? s : Et(s);
    }
    function De(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ue(i) {
      return typeof i == "function";
    }
    function Ie(i) {
      return typeof i == "function";
    }
    function St(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ue(i, s) {
      var o = i[s];
      if (o != null) {
        if (!ue(o))
          throw new TypeError();
        return o;
      }
    }
    function je(i) {
      var s = Ue(i, u);
      if (!ue(s))
        throw new TypeError();
      var o = s.call(i);
      if (!x(o))
        throw new TypeError();
      return o;
    }
    function He(i) {
      return i.value;
    }
    function Le(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function ze(i) {
      var s = i.return;
      s && s.call(i);
    }
    function ve(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || s !== $)
        return s;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return s;
      var v = c.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function xt() {
      var i;
      !g(V) && typeof t.Reflect < "u" && !(V in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ct(t.Reflect));
      var s, o, c, v = new I(), M = {
        registerProvider: O,
        getProvider: d,
        setProvider: f
      };
      return M;
      function O(p) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(s):
            s = p;
            break;
          case s === p:
            break;
          case g(o):
            o = p;
            break;
          case o === p:
            break;
          default:
            c === void 0 && (c = new k()), c.add(p);
            break;
        }
      }
      function _(p, w) {
        if (!g(s)) {
          if (s.isProviderFor(p, w))
            return s;
          if (!g(o)) {
            if (o.isProviderFor(p, w))
              return s;
            if (!g(c))
              for (var E = je(c); ; ) {
                var S = Le(E);
                if (!S)
                  return;
                var R = He(S);
                if (R.isProviderFor(p, w))
                  return ze(E), R;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, w))
          return i;
      }
      function d(p, w) {
        var E = v.get(p), S;
        return g(E) || (S = E.get(w)), g(S) && (S = _(p, w), g(S) || (g(E) && (E = new P(), v.set(p, E)), E.set(w, S))), S;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return s === p || o === p || !g(c) && c.has(p);
      }
      function f(p, w, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var S = d(p, w);
        if (S !== E) {
          if (!g(S))
            return !1;
          var R = v.get(p);
          g(R) && (R = new P(), v.set(p, R)), R.set(w, E);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !g(V) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[V]), g(i) && (i = xt()), !g(V) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, V, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Mt(i) {
      var s = new I(), o = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: d
      };
      return le.registerProvider(o), o;
      function c(h, f, p) {
        var w = s.get(h), E = !1;
        if (g(w)) {
          if (!p)
            return;
          w = new P(), s.set(h, w), E = !0;
        }
        var S = w.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new P(), w.set(f, S), !i.setProvider(h, f, o))
            throw w.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(h, f, p) {
        var w = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g(w) ? !1 : Ne(w.has(h));
      }
      function M(h, f, p) {
        var w = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(h);
      }
      function O(h, f, p, w) {
        var E = c(
          p,
          w,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function _(h, f) {
        var p = [], w = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(w))
          return p;
        for (var E = w.keys(), S = je(E), R = 0; ; ) {
          var Be = Le(S);
          if (!Be)
            return p.length = R, p;
          var Rt = He(Be);
          try {
            p[R] = Rt;
          } catch (Nt) {
            try {
              ze(S);
            } finally {
              throw Nt;
            }
          }
          R++;
        }
      }
      function d(h, f, p) {
        var w = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Ct(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new I(), _ = {
        isProviderFor: function(d, h) {
          var f = O.get(d);
          return !g(f) && f.has(h) ? !0 : v(d, h).length ? (g(f) && (f = new k(), O.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return _;
    }
    function Y(i, s, o) {
      var c = le.getProvider(i, s);
      if (!g(c))
        return c;
      if (o) {
        if (le.setProvider(i, s, xe))
          return xe;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function _(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), d;
          }, _.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: d, done: !0 };
          }, _;
        }()
      ), c = (
        /** @class */
        function() {
          function _() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(_.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), _.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, _.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ye(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new o(this._keys, this._values, M);
          }, _.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(d, h) {
            if (!ye(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (ye(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return c;
      function v(_, d) {
        return _;
      }
      function M(_, d) {
        return d;
      }
      function O(_, d) {
        return [_, d];
      }
    }
    function Tt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new P();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(o) {
            return this._map.has(o);
          }, s.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, s.prototype.delete = function(o) {
            return this._map.delete(o);
          }, s.prototype.clear = function() {
            this._map.clear();
          }, s.prototype.keys = function() {
            return this._map.keys();
          }, s.prototype.values = function() {
            return this._map.keys();
          }, s.prototype.entries = function() {
            return this._map.entries();
          }, s.prototype["@@iterator"] = function() {
            return this.keys();
          }, s.prototype[u] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function kt() {
      var i = 16, s = b.create(), o = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + _();
        while (b.has(s, d));
        return s[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, o)) {
          if (!h)
            return;
          Object.defineProperty(d, o, { value: b.create() });
        }
        return d[o];
      }
      function M(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, d), h;
        }
        return M(new Array(d), d);
      }
      function _() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function me(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Ut(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function jt(r) {
  return function(e) {
    if (Ut(r)) {
      const t = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, e);
          } catch {
            try {
              customElements.define(n, class extends e {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ht(r) {
  return jt(r);
}
function Lt(r) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        Ge(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(l) {
        try {
          super.update(l);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const b = new CSSStyleSheet(), $ = (A = l.sheet) == null ? void 0 : A.cssRules;
          $ && (Array.from($).forEach((P) => b.insertRule(P.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          y.appendChild(b);
        }
        u.forEach((b) => {
          const $ = b.cloneNode(!0);
          y.appendChild($);
        });
      }
    }
    return t;
  };
}
function zt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Bt(r) {
  return function(e, t) {
    try {
      zt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let a = !0;
      if (typeof t == "string") {
        try {
          a = typeof e[t] != "function";
        } catch {
          a = !0;
        }
        a && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function ae(r) {
  return Bt(r);
}
var B;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(B || (B = {}));
var G;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(G || (G = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ce = globalThis, be = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ae = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ae) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (be && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (r) => new it(typeof r == "string" ? r : r + "", void 0, Ae), Wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, a, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new it(t, r, Ae);
}, Vt = (r, e) => {
  if (be) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), a = ce.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = t.cssText, r.appendChild(n);
  }
}, Je = be ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Gt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ft, defineProperty: Jt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Yt, getPrototypeOf: Xt } = Object, j = globalThis, qe = j.trustedTypes, Qt = qe ? qe.emptyScript : "", ge = j.reactiveElementPolyfillSupport, K = (r, e) => r, de = { toAttribute(r, e) {
  switch (e) {
    case Boolean:
      r = r ? Qt : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, e) {
  let t = r;
  switch (e) {
    case Boolean:
      t = r !== null;
      break;
    case Number:
      t = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(r);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ee = (r, e) => !Ft(r, e), Ze = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(e, n, t);
      a !== void 0 && Jt(this.prototype, e, a);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: a, set: l } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: a, set(u) {
      const m = a == null ? void 0 : a.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(K("elementProperties"))) return;
    const e = Xt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(K("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
      const t = this.properties, n = [...Zt(t), ...Yt(t)];
      for (const a of n) this.createProperty(a, t[a]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, a] of t) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const a = this._$Eu(t, n);
      a !== void 0 && this._$Eh.set(a, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const a of n) t.unshift(Je(a));
    } else e !== void 0 && t.push(Je(e));
    return t;
  }
  static _$Eu(e, t) {
    const n = t.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof e == "string" ? e.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var e;
    this._$ES = new Promise((t) => this.enableUpdating = t), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (e = this.constructor.l) == null || e.forEach((t) => t(this));
  }
  addController(e) {
    var t;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(e), this.renderRoot !== void 0 && this.isConnected && ((t = e.hostConnected) == null || t.call(e));
  }
  removeController(e) {
    var t;
    (t = this._$EO) == null || t.delete(e);
  }
  _$E_() {
    const e = /* @__PURE__ */ new Map(), t = this.constructor.elementProperties;
    for (const n of t.keys()) this.hasOwnProperty(n) && (e.set(n, this[n]), delete this[n]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Vt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostConnected) == null ? void 0 : n.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var n;
      return (n = t.hostDisconnected) == null ? void 0 : n.call(t);
    });
  }
  attributeChangedCallback(e, t, n) {
    this._$AK(e, n);
  }
  _$ET(e, t) {
    var l;
    const n = this.constructor.elementProperties.get(e), a = this.constructor._$Eu(e, n);
    if (a !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(a) : this.setAttribute(a, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, a = n._$Eh.get(e);
    if (a !== void 0 && this._$Em !== a) {
      const m = n.getPropertyOptions(a), y = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : de;
      this._$Em = a;
      const A = y.fromAttribute(t, m.type);
      this[a] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(a)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, a = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (a === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Ee)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: a, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), a === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (t) {
      Promise.reject(t);
    }
    const e = this.scheduleUpdate();
    return e != null && await e, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [l, u] of a) {
        const { wrapped: m } = u, y = this[l];
        m !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(t)) : this._$EM();
    } catch (a) {
      throw e = !1, this._$EM(), a;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EM() {
    this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = !1;
  }
  get updateComplete() {
    return this.getUpdateComplete();
  }
  getUpdateComplete() {
    return this._$ES;
  }
  shouldUpdate(e) {
    return !0;
  }
  update(e) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((t) => this._$ET(t, this[t]))), this._$EM();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
};
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[K("elementProperties")] = /* @__PURE__ */ new Map(), J[K("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: J }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, Ye = (r) => r, he = ee.trustedTypes, Xe = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, at = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + U, Kt = `<${st}>`, W = document, re = () => W.createComment(""), ne = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, er = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, H = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, ot = /^(?:script|style|textarea|title)$/i, tr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Q = tr(1), q = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), L = W.createTreeWalker(W, 129);
function lt(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const rr = (r, e) => {
  const t = r.length - 1, n = [];
  let a, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let m = 0; m < t; m++) {
    const y = r[m];
    let A, b, $ = -1, P = 0;
    for (; P < y.length && (u.lastIndex = P, b = u.exec(y), b !== null); ) P = u.lastIndex, u === X ? b[1] === "!--" ? u = Qe : b[1] !== void 0 ? u = Ke : b[2] !== void 0 ? (ot.test(b[2]) && (a = RegExp("</" + b[2], "g")), u = H) : b[3] !== void 0 && (u = H) : u === H ? b[0] === ">" ? (u = a ?? X, $ = -1) : b[1] === void 0 ? $ = -2 : ($ = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? H : b[3] === '"' ? tt : et) : u === tt || u === et ? u = H : u === Qe || u === Ke ? u = X : (u = H, a = void 0);
    const k = u === H && r[m + 1].startsWith("/>") ? " " : "";
    l += u === X ? y + Kt : $ >= 0 ? (n.push(A), y.slice(0, $) + at + y.slice($) + U + k) : y + U + ($ === -2 ? m : k);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ie {
  constructor({ strings: e, _$litType$: t }, n) {
    let a;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, y = this.parts, [A, b] = rr(e, t);
    if (this.el = ie.createElement(A, n), L.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (a = L.nextNode()) !== null && y.length < m; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const $ of a.getAttributeNames()) if ($.endsWith(at)) {
          const P = b[u++], k = a.getAttribute($).split(U), I = /([.?@])?(.*)/.exec(P);
          y.push({ type: 1, index: l, name: I[2], strings: k, ctor: I[1] === "." ? ir : I[1] === "?" ? ar : I[1] === "@" ? sr : fe }), a.removeAttribute($);
        } else $.startsWith(U) && (y.push({ type: 6, index: l }), a.removeAttribute($));
        if (ot.test(a.tagName)) {
          const $ = a.textContent.split(U), P = $.length - 1;
          if (P > 0) {
            a.textContent = he ? he.emptyScript : "";
            for (let k = 0; k < P; k++) a.append($[k], re()), L.nextNode(), y.push({ type: 2, index: ++l });
            a.append($[P], re());
          }
        }
      } else if (a.nodeType === 8) if (a.data === st) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = a.data.indexOf(U, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += U.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function Z(r, e, t = r, n) {
  var u, m;
  if (e === q) return e;
  let a = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ne(e) ? void 0 : e._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((m = a == null ? void 0 : a._$AO) == null || m.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = a : t._$Cl = a), a !== void 0 && (e = Z(r, a._$AS(r, e.values), a, n)), e;
}
class nr {
  constructor(e, t) {
    this._$AV = [], this._$AN = void 0, this._$AD = e, this._$AM = t;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(e) {
    const { el: { content: t }, parts: n } = this._$AD, a = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    L.currentNode = a;
    let l = L.nextNode(), u = 0, m = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let A;
        y.type === 2 ? A = new se(l, l.nextSibling, this, e) : y.type === 1 ? A = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (A = new or(l, this, e)), this._$AV.push(A), y = n[++m];
      }
      u !== (y == null ? void 0 : y.index) && (l = L.nextNode(), u++);
    }
    return L.currentNode = W, a;
  }
  p(e) {
    let t = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(e, n, t), t += n.strings.length - 2) : n._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this._$Cv;
  }
  constructor(e, t, n, a) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
  }
  get parentNode() {
    let e = this._$AA.parentNode;
    const t = this._$AM;
    return t !== void 0 && (e == null ? void 0 : e.nodeType) === 11 && (e = t.parentNode), e;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(e, t = this) {
    e = Z(this, e, t), ne(e) ? e === C || e == null || e === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : e !== this._$AH && e !== q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : er(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== C && ne(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, a = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ie.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(t);
    else {
      const u = new nr(a, this), m = u.u(this.options);
      u.p(t), this.T(m), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, a = 0;
    for (const l of e) a === t.length ? t.push(n = new se(this.O(re()), this.O(re()), this, this.options)) : n = t[a], n._$AI(l), a++;
    a < t.length && (this._$AR(n && n._$AB.nextSibling, a), t.length = a);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const a = Ye(e).nextSibling;
      Ye(e).remove(), e = a;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class fe {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, a, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, a) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = Z(this, e, t, 0), u = !ne(e) || e !== this._$AH && e !== q, u && (this._$AH = e);
    else {
      const m = e;
      let y, A;
      for (e = l[0], y = 0; y < l.length - 1; y++) A = Z(this, m[n + y], t, y), A === q && (A = this._$AH[y]), u || (u = !ne(A) || A !== this._$AH[y]), A === C ? e = C : e !== C && (e += (A ?? "") + l[y + 1]), this._$AH[y] = A;
    }
    u && !a && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends fe {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class ar extends fe {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class sr extends fe {
  constructor(e, t, n, a, l) {
    super(e, t, n, a, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? C) === q) return;
    const n = this._$AH, a = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class or {
  constructor(e, t, n) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Z(this, e);
  }
}
const we = ee.litHtmlPolyfillSupport;
we == null || we(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.3.3");
const lr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = a = new se(e.insertBefore(re(), l), l, void 0, t ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis;
class te extends J {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this._$Do = lr(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this._$Do) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this._$Do) == null || e.setConnected(!1);
  }
  render() {
    return q;
  }
}
var nt;
te._$litElement$ = !0, te.finalized = !0, (nt = z.litElementHydrateSupport) == null || nt.call(z, { LitElement: te });
const $e = z.litElementPolyfillSupport;
$e == null || $e({ LitElement: te });
(z.litElementVersions ?? (z.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Ee }, cr = (r = ur, e, t) => {
  const { kind: n, metadata: a } = t;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(m) {
      const y = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(u, y, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(m) {
      const y = this[u];
      e.call(this, m), this.requestUpdate(u, y, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function oe(r) {
  return (e, t) => typeof t == "object" ? cr(r, e, t) : ((n, a, l) => {
    const u = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, N = (r, e, t, n) => {
  for (var a = n > 1 ? void 0 : n ? hr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (a = (n ? u(e, t, a) : u(a)) || a);
  return n && a && dr(e, t, a), a;
};
const fr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;text-align:center;'>",
    "<div style='width:80px;height:80px;border-radius:50%;background:#e5e7eb;margin:0 auto 12px;'></div>",
    "<h3 style='font-size:15px;font-weight:600;margin-bottom:2px;'>John Doe</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Founder</p>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Team"]
};
let T = class extends te {
  constructor() {
    super(...arguments), this.title = "Meet Our Creative Team", this.lead = "A collective of designers, thinkers, and technical developers working on advanced products.", this.teamJson = '[{"avatar":"https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300","name":"Sarah Jenkins","role":"Lead Architect","bio":"Sarah designs scalable visual layouts."},{"avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300","name":"Marcus Aurelius","role":"Backend Engineer","bio":"Marcus handles deep system pipeline setups."},{"avatar":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300","name":"Elena Rostova","role":"Creative Director","bio":"Elena coordinates overall aesthetic tokens."}]', this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    return fr;
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(r) {
    this.title = r;
  }
  get leadConfig() {
    return this.lead;
  }
  set leadConfig(r) {
    this.lead = r;
  }
  get teamJsonConfig() {
    return this.teamJson;
  }
  set teamJsonConfig(r) {
    this.teamJson = r;
  }
  get layoutConfig() {
    return this.layout;
  }
  set layoutConfig(r) {
    this.layout = r || "layout-1";
  }
  get themeStyleConfig() {
    return this.themeStyle;
  }
  set themeStyleConfig(r) {
    this.themeStyle = r || "light";
  }
  parseTeam() {
    try {
      return JSON.parse(this.teamJson);
    } catch {
      return [];
    }
  }
  render() {
    const r = this.parseTeam();
    return Q`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? Q`
          <div class="grid-4col">
            ${r.map((e) => Q`
              <div class="team-card">
                <div class="avatar-wrapper">
                  <img class="avatar-img" src="${e.avatar}" alt="${e.name}">
                </div>
                <h3>${e.name}</h3>
                <span class="role-badge">${e.role}</span>
                <p class="bio-text">${e.bio}</p>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? Q`
          <div class="grid-2col">
            ${r.map((e) => Q`
              <div class="row-card">
                <div class="row-avatar">
                  <img class="avatar-img" src="${e.avatar}" alt="${e.name}">
                </div>
                <div class="row-info">
                  <h3>${e.name}</h3>
                  <span class="role-badge">${e.role}</span>
                  <p class="bio-text">${e.bio}</p>
                </div>
              </div>
            `)}
          </div>
        ` : ""}
      </section>
    `;
  }
};
T.styles = Wt`
    :host {
      display: block;
      width: 100%;
      --team-bg: var(--uiv-surface-color, #ffffff);
      --team-text: var(--uiv-text-color, #111827);
      --team-lead: #4b5563;
      --team-card-bg: var(--uiv-surface-color, #ffffff);
      --team-card-border: var(--uiv-border-color, #e5e7eb);
      --team-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--team-bg);
      color: var(--team-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --team-bg: #111827;
      --team-text: #f9fafb;
      --team-lead: #9ca3af;
      --team-card-bg: #1f2937;
      --team-card-border: #374151;
    }

    .header-area {
      text-align: center;
      max-width: 700px;
      margin: 0 auto 50px auto;
    }

    h2 {
      font-size: 2.25rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.6;
      color: var(--team-lead);
      margin: 0;
    }

    /* ─── Layout 1: 4-Column Grid ─── */
    .grid-4col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .team-card {
      padding: 30px 20px;
      text-align: center;
      background: var(--team-card-bg);
      border: 1px solid var(--team-card-border);
      border-radius: 8px;
      transition: transform 0.2s ease;
    }

    .team-card:hover {
      transform: translateY(-2px);
    }

    .avatar-wrapper {
      width: 110px;
      height: 110px;
      border-radius: 50%;
      overflow: hidden;
      margin: 0 auto 20px auto;
      border: 3px solid var(--team-accent);
      box-shadow: 0 4px 10px rgba(0,0,0,0.06);
    }

    .avatar-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h3 {
      font-size: 1.2rem;
      font-weight: 700;
      margin: 0 0 4px 0;
    }

    .role-badge {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--team-accent);
      margin-bottom: 12px;
      display: inline-block;
    }

    .bio-text {
      font-size: 0.88rem;
      line-height: 1.5;
      color: var(--team-lead);
      margin: 0;
    }

    /* ─── Layout 2: 2-Column Split Rows ─── */
    .grid-2col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(450px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .row-card {
      display: flex;
      gap: 24px;
      align-items: center;
      padding: 24px;
      background: var(--team-card-bg);
      border: 1px solid var(--team-card-border);
      border-radius: 12px;
      text-align: left;
    }

    .row-avatar {
      width: 130px;
      height: 130px;
      border-radius: 12px;
      overflow: hidden;
      flex-shrink: 0;
      border: 2px solid var(--team-card-border);
    }

    .row-info {
      flex: 1;
    }

    @media (max-width: 768px) {
      .grid-2col {
        grid-template-columns: 1fr;
      }
      .row-card {
        flex-direction: column;
        text-align: center;
      }
    }
  `;
N([
  oe({ type: String })
], T.prototype, "title", 2);
N([
  oe({ type: String })
], T.prototype, "lead", 2);
N([
  oe({ type: String, attribute: "team-json" })
], T.prototype, "teamJson", 2);
N([
  oe({ type: String })
], T.prototype, "layout", 2);
N([
  oe({ type: String, attribute: "theme-style" })
], T.prototype, "themeStyle", 2);
N([
  ae({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 1);
N([
  ae({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
], T.prototype, "leadConfig", 1);
N([
  ae({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Team Members JSON",
    fieldMappings: "teamJson"
  })
], T.prototype, "teamJsonConfig", 1);
N([
  ae({
    attributeType: G.PROPERTY,
    uiComponentType: B.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "4-Column Avatar Grid", value: "layout-1" },
      { label: "2-Column Split Row Cards", value: "layout-2" }
    ]
  })
], T.prototype, "layoutConfig", 1);
N([
  ae({
    attributeType: G.PROPERTY,
    uiComponentType: B.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], T.prototype, "themeStyleConfig", 1);
T = N([
  Ht({
    name: "zero-block-team",
    version: "1.0.0",
    title: "Team Block",
    elementSelector: "zero-block-team",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Lt()
], T);
export {
  T as ZeroBlockTeam,
  fr as studioTemplate
};
