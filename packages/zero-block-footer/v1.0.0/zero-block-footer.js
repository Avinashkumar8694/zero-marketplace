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
var Fe;
(function(r) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(y, A) {
      return function(w, $) {
        Object.defineProperty(y, w, { configurable: !0, writable: !0, value: $ }), A && A(w, $);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !m && !y, w = {
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
    }, $ = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : xt(), T = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : kt(), I = typeof WeakMap == "function" ? WeakMap : Tt(), F = o ? Symbol.for("@reflect-metadata:registry") : void 0, le = Mt(), Oe = Pt(le);
    function ut(i, s, a, c) {
      if (g(a)) {
        if (!De(i))
          throw new TypeError();
        if (!Ie(s))
          throw new TypeError();
        return _t(i, s);
      } else {
        if (!De(i))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !g(c) && !V(c))
          throw new TypeError();
        return V(c) && (c = void 0), a = D(a), bt(i, s, a, c);
      }
    }
    e("decorate", ut);
    function ct(i, s) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!g(v) && !St(v))
          throw new TypeError();
        xe(i, s, c, v);
      }
      return a;
    }
    e("metadata", ct);
    function ht(i, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return g(c) || (c = D(c)), xe(i, s, a, c);
    }
    e("defineMetadata", ht);
    function ft(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return g(a) || (a = D(a)), Me(i, s, a);
    }
    e("hasMetadata", ft);
    function dt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return g(a) || (a = D(a)), pe(i, s, a);
    }
    e("hasOwnMetadata", dt);
    function pt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return g(a) || (a = D(a)), Pe(i, s, a);
    }
    e("getMetadata", pt);
    function yt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return g(a) || (a = D(a)), Ce(i, s, a);
    }
    e("getOwnMetadata", yt);
    function vt(i, s) {
      if (!O(i))
        throw new TypeError();
      return g(s) || (s = D(s)), ke(i, s);
    }
    e("getMetadataKeys", vt);
    function mt(i, s) {
      if (!O(i))
        throw new TypeError();
      return g(s) || (s = D(s)), Te(i, s);
    }
    e("getOwnMetadataKeys", mt);
    function gt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      if (g(a) || (a = D(a)), !O(s))
        throw new TypeError();
      g(a) || (a = D(a));
      var c = Y(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", gt);
    function _t(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(s);
        if (!g(v) && !V(v)) {
          if (!Ie(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function bt(i, s, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], M = P(s, a, c);
        if (!g(M) && !V(M)) {
          if (!O(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Me(i, s, a) {
      var c = pe(i, s, a);
      if (c)
        return !0;
      var v = ve(s);
      return V(v) ? !1 : Me(i, v, a);
    }
    function pe(i, s, a) {
      var c = Y(
        s,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Ne(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Pe(i, s, a) {
      var c = pe(i, s, a);
      if (c)
        return Ce(i, s, a);
      var v = ve(s);
      if (!V(v))
        return Pe(i, v, a);
    }
    function Ce(i, s, a) {
      var c = Y(
        s,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function xe(i, s, a, c) {
      var v = Y(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function ke(i, s) {
      var a = Te(i, s), c = ve(i);
      if (c === null)
        return a;
      var v = ke(c, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new T(), M = [], _ = 0, h = a; _ < h.length; _++) {
        var f = h[_], d = P.has(f);
        d || (P.add(f), M.push(f));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var f = b[p], d = P.has(f);
        d || (P.add(f), M.push(f));
      }
      return M;
    }
    function Te(i, s) {
      var a = Y(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
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
    function V(i) {
      return i === null;
    }
    function $t(i) {
      return typeof i == "symbol";
    }
    function O(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function wt(i, s) {
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
      var a = "string", c = je(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return At(i);
    }
    function At(i, s) {
      var a, c;
      {
        var v = i.toString;
        if (ue(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (ue(a)) {
          var c = a.call(i);
          if (!O(c))
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
      var s = wt(i);
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
    function je(i, s) {
      var a = i[s];
      if (a != null) {
        if (!ue(a))
          throw new TypeError();
        return a;
      }
    }
    function Ue(i) {
      var s = je(i, u);
      if (!ue(s))
        throw new TypeError();
      var a = s.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
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
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var v = c.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Ot() {
      var i;
      !g(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Ct(t.Reflect));
      var s, a, c, v = new I(), P = {
        registerProvider: M,
        getProvider: h,
        setProvider: d
      };
      return P;
      function M(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(s):
            s = p;
            break;
          case s === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new T()), c.add(p);
            break;
        }
      }
      function _(p, b) {
        if (!g(s)) {
          if (s.isProviderFor(p, b))
            return s;
          if (!g(a)) {
            if (a.isProviderFor(p, b))
              return s;
            if (!g(c))
              for (var E = Ue(c); ; ) {
                var S = Le(E);
                if (!S)
                  return;
                var R = He(S);
                if (R.isProviderFor(p, b))
                  return ze(E), R;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, b))
          return i;
      }
      function h(p, b) {
        var E = v.get(p), S;
        return g(E) || (S = E.get(b)), g(S) && (S = _(p, b), g(S) || (g(E) && (E = new x(), v.set(p, E)), E.set(b, S))), S;
      }
      function f(p) {
        if (g(p))
          throw new TypeError();
        return s === p || a === p || !g(c) && c.has(p);
      }
      function d(p, b, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, b);
        if (S !== E) {
          if (!g(S))
            return !1;
          var R = v.get(p);
          g(R) && (R = new x(), v.set(p, R)), R.set(b, E);
        }
        return !0;
      }
    }
    function Mt() {
      var i;
      return !g(F) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), g(i) && (i = Ot()), !g(F) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var s = new I(), a = {
        isProviderFor: function(f, d) {
          var p = s.get(f);
          return g(p) ? !1 : p.has(d);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: h
      };
      return le.registerProvider(a), a;
      function c(f, d, p) {
        var b = s.get(f), E = !1;
        if (g(b)) {
          if (!p)
            return;
          b = new x(), s.set(f, b), E = !0;
        }
        var S = b.get(d);
        if (g(S)) {
          if (!p)
            return;
          if (S = new x(), b.set(d, S), !i.setProvider(f, d, a))
            throw b.delete(d), E && s.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(f, d, p) {
        var b = c(
          d,
          p,
          /*Create*/
          !1
        );
        return g(b) ? !1 : Ne(b.has(f));
      }
      function P(f, d, p) {
        var b = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(f);
      }
      function M(f, d, p, b) {
        var E = c(
          p,
          b,
          /*Create*/
          !0
        );
        E.set(f, d);
      }
      function _(f, d) {
        var p = [], b = c(
          f,
          d,
          /*Create*/
          !1
        );
        if (g(b))
          return p;
        for (var E = b.keys(), S = Ue(E), R = 0; ; ) {
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
      function h(f, d, p) {
        var b = c(
          d,
          p,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(f))
          return !1;
        if (b.size === 0) {
          var E = s.get(d);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Ct(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, M = new I(), _ = {
        isProviderFor: function(h, f) {
          var d = M.get(h);
          return !g(d) && d.has(f) ? !0 : v(h, f).length ? (g(d) && (d = new T(), M.set(h, d)), d.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return _;
    }
    function Y(i, s, a) {
      var c = le.getProvider(i, s);
      if (!g(c))
        return c;
      if (a) {
        if (le.setProvider(i, s, Oe))
          return Oe;
        throw new Error("Illegal state.");
      }
    }
    function xt() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function _(h, f, d) {
            this._index = 0, this._keys = h, this._values = f, this._selector = d;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var f = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, _.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
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
          }), _.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, _.prototype.set = function(h, f) {
            var d = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[d] = f, this;
          }, _.prototype.delete = function(h) {
            var f = this._find(
              h,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var d = this._keys.length, p = f + 1; p < d; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, ye(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(h, f) {
            if (!ye(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var d = 0; d < this._keys.length; d++)
                if (ye(this._keys[d], h)) {
                  this._cacheIndex = d;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return c;
      function v(_, h) {
        return _;
      }
      function P(_, h) {
        return h;
      }
      function M(_, h) {
        return [_, h];
      }
    }
    function kt() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new x();
          }
          return Object.defineProperty(s.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), s.prototype.has = function(a) {
            return this._map.has(a);
          }, s.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, s.prototype.delete = function(a) {
            return this._map.delete(a);
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
    function Tt() {
      var i = 16, s = w.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? w.has(d, this._key) : !1;
          }, h.prototype.get = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? w.get(d, this._key) : void 0;
          }, h.prototype.set = function(f, d) {
            var p = v(
              f,
              /*create*/
              !0
            );
            return p[this._key] = d, this;
          }, h.prototype.delete = function(f) {
            var d = v(
              f,
              /*create*/
              !1
            );
            return d !== void 0 ? delete d[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + _();
        while (w.has(s, h));
        return s[h] = !0, h;
      }
      function v(h, f) {
        if (!n.call(h, a)) {
          if (!f)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function P(h, f) {
        for (var d = 0; d < f; ++d)
          h[d] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, h), f;
        }
        return P(new Array(h), h);
      }
      function _() {
        var h = M(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var f = "", d = 0; d < i; ++d) {
          var p = h[d];
          (d === 4 || d === 6 || d === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function me(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Fe || (Fe = {}));
function jt(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ut(r) {
  return function(e) {
    if (jt(r)) {
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
  return Ut(r);
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
          const w = new CSSStyleSheet(), $ = (A = l.sheet) == null ? void 0 : A.cssRules;
          $ && (Array.from($).forEach((x) => w.insertRule(x.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          y.appendChild(w);
        }
        u.forEach((w) => {
          const $ = w.cloneNode(!0);
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
      let o = !0;
      if (typeof t == "string") {
        try {
          o = typeof e[t] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function oe(r) {
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
const ce = globalThis, we = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ae = Symbol(), Ve = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ae) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Ve.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Ve.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (r) => new it(typeof r == "string" ? r : r + "", void 0, Ae), Wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new it(t, r, Ae);
}, Ft = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ce.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = t.cssText, r.appendChild(n);
  }
}, Je = we ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const n of e.cssRules) t += n.cssText;
  return Gt(t);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Jt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Yt, getPrototypeOf: Xt } = Object, U = globalThis, qe = U.trustedTypes, Qt = qe ? qe.emptyScript : "", ge = U.reactiveElementPolyfillSupport, K = (r, e) => r, he = { toAttribute(r, e) {
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
} }, Ee = (r, e) => !Vt(r, e), Ze = { attribute: !0, type: String, converter: he, reflect: !1, useDefault: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(e) && ((t = Object.create(t)).wrapped = !0), this.elementProperties.set(e, t), !t.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(e, n, t);
      o !== void 0 && Jt(this.prototype, e, o);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: o, set: l } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: o, set(u) {
      const m = o == null ? void 0 : o.call(this);
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
      for (const o of n) this.createProperty(o, t[o]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, o] of t) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const o = this._$Eu(t, n);
      o !== void 0 && this._$Eh.set(o, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const o of n) t.unshift(Je(o));
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
    return Ft(e, this.constructor.elementStyles), e;
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
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : he).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const m = n.getPropertyOptions(o), y = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : he;
      this._$Em = o;
      const A = y.fromAttribute(t, m.type);
      this[o] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const m = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = m.getPropertyOptions(e)), !((n.hasChanged ?? Ee)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(m._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), o === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: m } = u, y = this[l];
        m !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(t)) : this._$EM();
    } catch (o) {
      throw e = !1, this._$EM(), o;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[K("elementProperties")] = /* @__PURE__ */ new Map(), J[K("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: J }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, Ye = (r) => r, fe = ee.trustedTypes, Xe = fe ? fe.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ot = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + j, Kt = `<${st}>`, W = document, re = () => W.createComment(""), ne = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, er = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, H = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, at = /^(?:script|style|textarea|title)$/i, tr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), Q = tr(1), q = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), L = W.createTreeWalker(W, 129);
function lt(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const rr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = X;
  for (let m = 0; m < t; m++) {
    const y = r[m];
    let A, w, $ = -1, x = 0;
    for (; x < y.length && (u.lastIndex = x, w = u.exec(y), w !== null); ) x = u.lastIndex, u === X ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (at.test(w[2]) && (o = RegExp("</" + w[2], "g")), u = H) : w[3] !== void 0 && (u = H) : u === H ? w[0] === ">" ? (u = o ?? X, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? H : w[3] === '"' ? tt : et) : u === tt || u === et ? u = H : u === Qe || u === Ke ? u = X : (u = H, o = void 0);
    const T = u === H && r[m + 1].startsWith("/>") ? " " : "";
    l += u === X ? y + Kt : $ >= 0 ? (n.push(A), y.slice(0, $) + ot + y.slice($) + j + T) : y + j + ($ === -2 ? m : T);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ie {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const m = e.length - 1, y = this.parts, [A, w] = rr(e, t);
    if (this.el = ie.createElement(A, n), L.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = L.nextNode()) !== null && y.length < m; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(ot)) {
          const x = w[u++], T = o.getAttribute($).split(j), I = /([.?@])?(.*)/.exec(x);
          y.push({ type: 1, index: l, name: I[2], strings: T, ctor: I[1] === "." ? ir : I[1] === "?" ? or : I[1] === "@" ? sr : de }), o.removeAttribute($);
        } else $.startsWith(j) && (y.push({ type: 6, index: l }), o.removeAttribute($));
        if (at.test(o.tagName)) {
          const $ = o.textContent.split(j), x = $.length - 1;
          if (x > 0) {
            o.textContent = fe ? fe.emptyScript : "";
            for (let T = 0; T < x; T++) o.append($[T], re()), L.nextNode(), y.push({ type: 2, index: ++l });
            o.append($[x], re());
          }
        }
      } else if (o.nodeType === 8) if (o.data === st) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(j, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += j.length - 1;
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
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ne(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((m = o == null ? void 0 : o._$AO) == null || m.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = Z(r, o._$AS(r, e.values), o, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, o = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    L.currentNode = o;
    let l = L.nextNode(), u = 0, m = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let A;
        y.type === 2 ? A = new se(l, l.nextSibling, this, e) : y.type === 1 ? A = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (A = new ar(l, this, e)), this._$AV.push(A), y = n[++m];
      }
      u !== (y == null ? void 0 : y.index) && (l = L.nextNode(), u++);
    }
    return L.currentNode = W, o;
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
  constructor(e, t, n, o) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ie.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new nr(o, this), m = u.u(this.options);
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
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new se(this.O(re()), this.O(re()), this, this.options)) : n = t[o], n._$AI(l), o++;
    o < t.length && (this._$AR(n && n._$AB.nextSibling, o), t.length = o);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const o = Ye(e).nextSibling;
      Ye(e).remove(), e = o;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class de {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, o, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = Z(this, e, t, 0), u = !ne(e) || e !== this._$AH && e !== q, u && (this._$AH = e);
    else {
      const m = e;
      let y, A;
      for (e = l[0], y = 0; y < l.length - 1; y++) A = Z(this, m[n + y], t, y), A === q && (A = this._$AH[y]), u || (u = !ne(A) || A !== this._$AH[y]), A === C ? e = C : e !== C && (e += (A ?? "") + l[y + 1]), this._$AH[y] = A;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === C ? void 0 : e;
  }
}
class or extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== C);
  }
}
class sr extends de {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? C) === q) return;
    const n = this._$AH, o = e === C && n !== C || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== C && (n === C || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class ar {
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
const be = ee.litHtmlPolyfillSupport;
be == null || be(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.3.3");
const lr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(re(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
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
const ur = { attribute: !0, type: String, converter: he, reflect: !1, hasChanged: Ee }, cr = (r = ur, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
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
function ae(r) {
  return (e, t) => typeof t == "object" ? cr(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var hr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, N = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && hr(e, t, o), o;
};
const dr = {
  kind: "generic",
  templateHtml: [
    "<footer style='padding:32px 24px;background:#ffffff;border-top:1px solid #e5e7eb;font-family:inherit;box-sizing:border-box;'>",
    "<div style='display:flex;justify-content:space-between;align-items:center;'>",
    "<div style='font-size:14px;color:#9ca3af;'>© 2026 {{props:logo}} Inc. All rights reserved.</div>",
    "<div style='display:flex;gap:12px;font-size:14px;color:#4b5563;'>",
    "<span>Privacy</span><span>Terms</span>",
    "</div>",
    "</div>",
    "</footer>"
  ].join(""),
  labelProp: "logo",
  badges: ["Block", "Footer"]
};
let k = class extends te {
  constructor() {
    super(...arguments), this.logo = "BrandName", this.copyright = "© 2026 BrandName Inc. All rights reserved.", this.columnsJson = '[{"title":"Product","links":[{"label":"Features","href":"#"},{"label":"Pricing","href":"#"},{"label":"Releases","href":"#"}]},{"title":"Resources","links":[{"label":"Blog","href":"#"},{"label":"Support","href":"#"},{"label":"Docs","href":"#"}]},{"title":"Legal","links":[{"label":"Privacy","href":"#"},{"label":"Terms","href":"#"},{"label":"Cookies","href":"#"}]}]', this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    return dr;
  }
  get logoConfig() {
    return this.logo;
  }
  set logoConfig(r) {
    this.logo = r;
  }
  get copyrightConfig() {
    return this.copyright;
  }
  set copyrightConfig(r) {
    this.copyright = r;
  }
  get columnsJsonConfig() {
    return this.columnsJson;
  }
  set columnsJsonConfig(r) {
    this.columnsJson = r;
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
  parseColumns() {
    try {
      return JSON.parse(this.columnsJson);
    } catch {
      return [];
    }
  }
  render() {
    const r = this.parseColumns();
    return Q`
      <footer class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="container">
          ${this.layout === "layout-1" ? Q`
            <div class="columns-row">
              <div class="brand-section">
                <div class="brand-title">${this.logo}</div>
                <div class="brand-desc">Constructing beautiful web component layout systems dynamically with visual studio interface integrations.</div>
              </div>
              <div class="links-section">
                ${r.map((e) => Q`
                  <div>
                    <h4>${e.title}</h4>
                    <ul class="link-list">
                      ${e.links.map((t) => Q`
                        <li><a href="${t.href}">${t.label}</a></li>
                      `)}
                    </ul>
                  </div>
                `)}
              </div>
            </div>
            <div class="bottom-row">
              <div>${this.copyright}</div>
              <div class="social-links">
                <a class="social-link" href="#">Twitter</a>
                <a class="social-link" href="#">GitHub</a>
                <a class="social-link" href="#">Discord</a>
              </div>
            </div>
          ` : Q`
            <div class="inline-row">
              <div>${this.copyright}</div>
              <div class="social-links">
                <a class="social-link" href="#">Privacy Policy</a>
                <a class="social-link" href="#">Terms of Use</a>
                <a class="social-link" href="#">Socials</a>
              </div>
            </div>
          `}
        </div>
      </footer>
    `;
  }
};
k.styles = Wt`
    :host {
      display: block;
      width: 100%;
      --footer-bg: var(--uiv-surface-color, #ffffff);
      --footer-text: var(--uiv-text-color, #1f2937);
      --footer-lead: #4b5563;
      --footer-border: var(--uiv-border-color, #e5e7eb);
      --footer-accent: var(--uiv-primary-color, #6366f1);
    }

    footer {
      padding: 60px 5% 40px 5%;
      background: var(--footer-bg);
      color: var(--footer-text);
      border-top: 1px solid var(--footer-border);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    footer.theme-dark {
      --footer-bg: #111827;
      --footer-text: #f9fafb;
      --footer-border: #374151;
      --footer-lead: #9ca3af;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    /* ─── Layout 1: Multi-Column ─── */
    .columns-row {
      display: flex;
      justify-content: space-between;
      gap: 40px;
      margin-bottom: 50px;
    }

    .brand-section {
      flex: 1.5;
      max-width: 320px;
    }

    .brand-title {
      font-size: 1.35rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin-bottom: 12px;
    }

    .brand-desc {
      font-size: 0.9rem;
      line-height: 1.5;
      color: var(--footer-lead);
    }

    .links-section {
      flex: 2.5;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(130px, 1fr));
      gap: 30px;
    }

    h4 {
      font-size: 0.88rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      margin: 0 0 16px 0;
      color: var(--footer-accent);
    }

    .link-list {
      list-style: none;
      padding: 0;
      margin: 0;
      display: flex;
      flex-direction: column;
      gap: 10px;
    }

    .link-list a {
      font-size: 0.9rem;
      color: var(--footer-lead);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .link-list a:hover {
      color: var(--footer-text);
    }

    .bottom-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding-top: 30px;
      border-top: 1px solid var(--footer-border);
      font-size: 0.88rem;
      color: var(--footer-lead);
    }

    /* ─── Layout 2: Simple Inline ─── */
    .inline-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }

    .social-links {
      display: flex;
      gap: 16px;
    }

    .social-link {
      font-size: 0.94rem;
      font-weight: 600;
      color: var(--footer-lead);
      text-decoration: none;
      transition: color 0.2s ease;
    }

    .social-link:hover {
      color: var(--footer-accent);
    }

    @media (max-width: 768px) {
      .columns-row {
        flex-direction: column;
        gap: 30px;
      }
      .inline-row, .bottom-row {
        flex-direction: column;
        gap: 16px;
        text-align: center;
      }
    }
  `;
N([
  ae({ type: String })
], k.prototype, "logo", 2);
N([
  ae({ type: String })
], k.prototype, "copyright", 2);
N([
  ae({ type: String, attribute: "columns-json" })
], k.prototype, "columnsJson", 2);
N([
  ae({ type: String })
], k.prototype, "layout", 2);
N([
  ae({ type: String, attribute: "theme-style" })
], k.prototype, "themeStyle", 2);
N([
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Brand Text",
    fieldMappings: "logo"
  })
], k.prototype, "logoConfig", 1);
N([
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Copyright Statement",
    fieldMappings: "copyright"
  })
], k.prototype, "copyrightConfig", 1);
N([
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Footer Directory JSON",
    fieldMappings: "columnsJson"
  })
], k.prototype, "columnsJsonConfig", 1);
N([
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: B.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Multi-Column Links Directory", value: "layout-1" },
      { label: "Minimalist Inline Banner", value: "layout-2" }
    ]
  })
], k.prototype, "layoutConfig", 1);
N([
  oe({
    attributeType: G.PROPERTY,
    uiComponentType: B.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], k.prototype, "themeStyleConfig", 1);
k = N([
  Ht({
    name: "zero-block-footer",
    version: "1.0.0",
    title: "Footer Block",
    elementSelector: "zero-block-footer",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Lt()
], k);
export {
  k as ZeroBlockFooter,
  dr as studioTemplate
};
