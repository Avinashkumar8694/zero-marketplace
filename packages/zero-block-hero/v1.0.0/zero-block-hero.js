var je = Object.defineProperty;
var De = (r, t, e) => t in r ? je(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Wt = (r, t, e) => De(r, typeof t != "symbol" ? t + "" : t, e);
var Ft = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var qt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Ft == "object" ? Ft : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = o(r);
    typeof e.Reflect < "u" && (n = o(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function o(p, x) {
      return function(w, _) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: _ }), x && x(w, _);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function c() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function m() {
      return l() || c();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", c = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, x = !m && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
      },
      has: x ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: x ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, _ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), U = typeof WeakMap == "function" ? WeakMap : Ue(), H = o ? Symbol.for("@reflect-metadata:registry") : void 0, B = Ce(), Pt = Me(B);
    function de(i, a, s, u) {
      if (v(s)) {
        if (!jt(i))
          throw new TypeError();
        if (!Dt(a))
          throw new TypeError();
        return $e(i, a);
      } else {
        if (!jt(i))
          throw new TypeError();
        if (!P(a))
          throw new TypeError();
        if (!P(u) && !v(u) && !Z(u))
          throw new TypeError();
        return Z(u) && (u = void 0), s = D(s), we(i, a, s, u);
      }
    }
    t("decorate", de);
    function he(i, a) {
      function s(u, g) {
        if (!P(u))
          throw new TypeError();
        if (!v(g) && !Te(g))
          throw new TypeError();
        Rt(i, a, u, g);
      }
      return s;
    }
    t("metadata", he);
    function fe(i, a, s, u) {
      if (!P(s))
        throw new TypeError();
      return v(u) || (u = D(u)), Rt(i, a, s, u);
    }
    t("defineMetadata", fe);
    function pe(i, a, s) {
      if (!P(a))
        throw new TypeError();
      return v(s) || (s = D(s)), Ct(i, a, s);
    }
    t("hasMetadata", pe);
    function ye(i, a, s) {
      if (!P(a))
        throw new TypeError();
      return v(s) || (s = D(s)), yt(i, a, s);
    }
    t("hasOwnMetadata", ye);
    function ge(i, a, s) {
      if (!P(a))
        throw new TypeError();
      return v(s) || (s = D(s)), Mt(i, a, s);
    }
    t("getMetadata", ge);
    function me(i, a, s) {
      if (!P(a))
        throw new TypeError();
      return v(s) || (s = D(s)), Ot(i, a, s);
    }
    t("getOwnMetadata", me);
    function ve(i, a) {
      if (!P(i))
        throw new TypeError();
      return v(a) || (a = D(a)), kt(i, a);
    }
    t("getMetadataKeys", ve);
    function _e(i, a) {
      if (!P(i))
        throw new TypeError();
      return v(a) || (a = D(a)), Ut(i, a);
    }
    t("getOwnMetadataKeys", _e);
    function be(i, a, s) {
      if (!P(a))
        throw new TypeError();
      if (v(s) || (s = D(s)), !P(a))
        throw new TypeError();
      v(s) || (s = D(s));
      var u = tt(
        a,
        s,
        /*Create*/
        !1
      );
      return v(u) ? !1 : u.OrdinaryDeleteMetadata(i, a, s);
    }
    t("deleteMetadata", be);
    function $e(i, a) {
      for (var s = i.length - 1; s >= 0; --s) {
        var u = i[s], g = u(a);
        if (!v(g) && !Z(g)) {
          if (!Dt(g))
            throw new TypeError();
          a = g;
        }
      }
      return a;
    }
    function we(i, a, s, u) {
      for (var g = i.length - 1; g >= 0; --g) {
        var O = i[g], C = O(a, s, u);
        if (!v(C) && !Z(C)) {
          if (!P(C))
            throw new TypeError();
          u = C;
        }
      }
      return u;
    }
    function Ct(i, a, s) {
      var u = yt(i, a, s);
      if (u)
        return !0;
      var g = mt(a);
      return Z(g) ? !1 : Ct(i, g, s);
    }
    function yt(i, a, s) {
      var u = tt(
        a,
        s,
        /*Create*/
        !1
      );
      return v(u) ? !1 : It(u.OrdinaryHasOwnMetadata(i, a, s));
    }
    function Mt(i, a, s) {
      var u = yt(i, a, s);
      if (u)
        return Ot(i, a, s);
      var g = mt(a);
      if (!Z(g))
        return Mt(i, g, s);
    }
    function Ot(i, a, s) {
      var u = tt(
        a,
        s,
        /*Create*/
        !1
      );
      if (!v(u))
        return u.OrdinaryGetOwnMetadata(i, a, s);
    }
    function Rt(i, a, s, u) {
      var g = tt(
        s,
        u,
        /*Create*/
        !0
      );
      g.OrdinaryDefineOwnMetadata(i, a, s, u);
    }
    function kt(i, a) {
      var s = Ut(i, a), u = mt(i);
      if (u === null)
        return s;
      var g = kt(u, a);
      if (g.length <= 0)
        return s;
      if (s.length <= 0)
        return g;
      for (var O = new k(), C = [], b = 0, d = s; b < d.length; b++) {
        var h = d[b], f = O.has(h);
        f || (O.add(h), C.push(h));
      }
      for (var y = 0, $ = g; y < $.length; y++) {
        var h = $[y], f = O.has(h);
        f || (O.add(h), C.push(h));
      }
      return C;
    }
    function Ut(i, a) {
      var s = tt(
        i,
        a,
        /*create*/
        !1
      );
      return s ? s.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function Nt(i) {
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
    function v(i) {
      return i === void 0;
    }
    function Z(i) {
      return i === null;
    }
    function xe(i) {
      return typeof i == "symbol";
    }
    function P(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Se(i, a) {
      switch (Nt(i)) {
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
      var s = "string", u = Ht(i, l);
      if (u !== void 0) {
        var g = u.call(i, s);
        if (P(g))
          throw new TypeError();
        return g;
      }
      return Ee(i);
    }
    function Ee(i, a) {
      var s, u;
      {
        var g = i.toString;
        if (ut(g)) {
          var u = g.call(i);
          if (!P(u))
            return u;
        }
        var s = i.valueOf;
        if (ut(s)) {
          var u = s.call(i);
          if (!P(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function It(i) {
      return !!i;
    }
    function Ae(i) {
      return "" + i;
    }
    function D(i) {
      var a = Se(i);
      return xe(a) ? a : Ae(a);
    }
    function jt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ut(i) {
      return typeof i == "function";
    }
    function Dt(i) {
      return typeof i == "function";
    }
    function Te(i) {
      switch (Nt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function gt(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ht(i, a) {
      var s = i[a];
      if (s != null) {
        if (!ut(s))
          throw new TypeError();
        return s;
      }
    }
    function Lt(i) {
      var a = Ht(i, c);
      if (!ut(a))
        throw new TypeError();
      var s = a.call(i);
      if (!P(s))
        throw new TypeError();
      return s;
    }
    function zt(i) {
      return i.value;
    }
    function Gt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function Vt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function mt(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === _ || a !== _)
        return a;
      var s = i.prototype, u = s && Object.getPrototypeOf(s);
      if (u == null || u === Object.prototype)
        return a;
      var g = u.constructor;
      return typeof g != "function" || g === i ? a : g;
    }
    function Pe() {
      var i;
      !v(H) && typeof e.Reflect < "u" && !(H in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Oe(e.Reflect));
      var a, s, u, g = new U(), O = {
        registerProvider: C,
        getProvider: d,
        setProvider: f
      };
      return O;
      function C(y) {
        if (!Object.isExtensible(O))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === y:
            break;
          case v(a):
            a = y;
            break;
          case a === y:
            break;
          case v(s):
            s = y;
            break;
          case s === y:
            break;
          default:
            u === void 0 && (u = new k()), u.add(y);
            break;
        }
      }
      function b(y, $) {
        if (!v(a)) {
          if (a.isProviderFor(y, $))
            return a;
          if (!v(s)) {
            if (s.isProviderFor(y, $))
              return a;
            if (!v(u))
              for (var S = Lt(u); ; ) {
                var E = Gt(S);
                if (!E)
                  return;
                var N = zt(E);
                if (N.isProviderFor(y, $))
                  return Vt(S), N;
              }
          }
        }
        if (!v(i) && i.isProviderFor(y, $))
          return i;
      }
      function d(y, $) {
        var S = g.get(y), E;
        return v(S) || (E = S.get($)), v(E) && (E = b(y, $), v(E) || (v(S) && (S = new T(), g.set(y, S)), S.set($, E))), E;
      }
      function h(y) {
        if (v(y))
          throw new TypeError();
        return a === y || s === y || !v(u) && u.has(y);
      }
      function f(y, $, S) {
        if (!h(S))
          throw new Error("Metadata provider not registered.");
        var E = d(y, $);
        if (E !== S) {
          if (!v(E))
            return !1;
          var N = g.get(y);
          v(N) && (N = new T(), g.set(y, N)), N.set($, S);
        }
        return !0;
      }
    }
    function Ce() {
      var i;
      return !v(H) && P(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[H]), v(i) && (i = Pe()), !v(H) && P(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, H, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var a = new U(), s = {
        isProviderFor: function(h, f) {
          var y = a.get(h);
          return v(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: g,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return B.registerProvider(s), s;
      function u(h, f, y) {
        var $ = a.get(h), S = !1;
        if (v($)) {
          if (!y)
            return;
          $ = new T(), a.set(h, $), S = !0;
        }
        var E = $.get(f);
        if (v(E)) {
          if (!y)
            return;
          if (E = new T(), $.set(f, E), !i.setProvider(h, f, s))
            throw $.delete(f), S && a.delete(h), new Error("Wrong provider for target.");
        }
        return E;
      }
      function g(h, f, y) {
        var $ = u(
          f,
          y,
          /*Create*/
          !1
        );
        return v($) ? !1 : It($.has(h));
      }
      function O(h, f, y) {
        var $ = u(
          f,
          y,
          /*Create*/
          !1
        );
        if (!v($))
          return $.get(h);
      }
      function C(h, f, y, $) {
        var S = u(
          y,
          $,
          /*Create*/
          !0
        );
        S.set(h, f);
      }
      function b(h, f) {
        var y = [], $ = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (v($))
          return y;
        for (var S = $.keys(), E = Lt(S), N = 0; ; ) {
          var Bt = Gt(E);
          if (!Bt)
            return y.length = N, y;
          var Ne = zt(Bt);
          try {
            y[N] = Ne;
          } catch (Ie) {
            try {
              Vt(E);
            } finally {
              throw Ie;
            }
          }
          N++;
        }
      }
      function d(h, f, y) {
        var $ = u(
          f,
          y,
          /*Create*/
          !1
        );
        if (v($) || !$.delete(h))
          return !1;
        if ($.size === 0) {
          var S = a.get(f);
          v(S) || (S.delete(y), S.size === 0 && a.delete(S));
        }
        return !0;
      }
    }
    function Oe(i) {
      var a = i.defineMetadata, s = i.hasOwnMetadata, u = i.getOwnMetadata, g = i.getOwnMetadataKeys, O = i.deleteMetadata, C = new U(), b = {
        isProviderFor: function(d, h) {
          var f = C.get(d);
          return !v(f) && f.has(h) ? !0 : g(d, h).length ? (v(f) && (f = new k(), C.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: s,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: g,
        OrdinaryDeleteMetadata: O
      };
      return b;
    }
    function tt(i, a, s) {
      var u = B.getProvider(i, a);
      if (!v(u))
        return u;
      if (s) {
        if (B.setProvider(i, a, Pt))
          return Pt;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var i = {}, a = [], s = (
        /** @class */
        function() {
          function b(d, h, f) {
            this._index = 0, this._keys = d, this._values = h, this._selector = f;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[c] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
          }, b;
        }()
      ), u = (
        /** @class */
        function() {
          function b() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(b.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), b.prototype.has = function(d) {
            return this._find(
              d,
              /*insert*/
              !1
            ) >= 0;
          }, b.prototype.get = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, b.prototype.set = function(d, h) {
            var f = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, b.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, gt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new s(this._keys, this._values, g);
          }, b.prototype.values = function() {
            return new s(this._keys, this._values, O);
          }, b.prototype.entries = function() {
            return new s(this._keys, this._values, C);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[c] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!gt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (gt(this._keys[f], d)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return u;
      function g(b, d) {
        return b;
      }
      function O(b, d) {
        return d;
      }
      function C(b, d) {
        return [b, d];
      }
    }
    function ke() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new T();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(s) {
            return this._map.has(s);
          }, a.prototype.add = function(s) {
            return this._map.set(s, s), this;
          }, a.prototype.delete = function(s) {
            return this._map.delete(s);
          }, a.prototype.clear = function() {
            this._map.clear();
          }, a.prototype.keys = function() {
            return this._map.keys();
          }, a.prototype.values = function() {
            return this._map.keys();
          }, a.prototype.entries = function() {
            return this._map.entries();
          }, a.prototype["@@iterator"] = function() {
            return this.keys();
          }, a.prototype[c] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Ue() {
      var i = 16, a = w.create(), s = u();
      return (
        /** @class */
        function() {
          function d() {
            this._key = u();
          }
          return d.prototype.has = function(h) {
            var f = g(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = g(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var y = g(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
          }, d.prototype.delete = function(h) {
            var f = g(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = u();
          }, d;
        }()
      );
      function u() {
        var d;
        do
          d = "@@WeakMap@@" + b();
        while (w.has(a, d));
        return a[d] = !0, d;
      }
      function g(d, h) {
        if (!n.call(d, s)) {
          if (!h)
            return;
          Object.defineProperty(d, s, { value: w.create() });
        }
        return d[s];
      }
      function O(d, h) {
        for (var f = 0; f < h; ++f)
          d[f] = Math.random() * 255 | 0;
        return d;
      }
      function C(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : O(h, d), h;
        }
        return O(new Array(d), d);
      }
      function b() {
        var d = C(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var y = d[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), y < 16 && (h += "0"), h += y.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function vt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(qt || (qt = {}));
function He(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Le(r) {
  return function(t) {
    if (He(r)) {
      const e = {
        version: r.version,
        name: r.name,
        title: r.title,
        selector: r.elementSelector,
        category: r.group,
        icon: r.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const n = `${r.elementSelector}-${r.version}`;
        if (!customElements.get(n))
          try {
            customElements.define(n, t);
          } catch {
            try {
              customElements.define(n, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${n}:`, l);
            }
          }
      } else
        console.warn("The customElements API is not supported in this environment. Custom element registration skipped.");
      window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: e
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function ze(r) {
  return Le(r);
}
function Ge(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Wt(this, "_stylesApplied", !1);
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), c = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), _ = (x = l.sheet) == null ? void 0 : x.cssRules;
          _ && (Array.from(_).forEach((T) => w.insertRule(T.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        c.forEach((w) => {
          const _ = w.cloneNode(!0);
          p.appendChild(_);
        });
      }
    }
    return e;
  };
}
function Ve(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(r) {
  return function(t, e) {
    try {
      Ve(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let o = !0;
      if (typeof e == "string") {
        try {
          o = typeof t[e] != "function";
        } catch {
          o = !0;
        }
        o && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function L(r) {
  return Be(r);
}
var I;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(I || (I = {}));
var j;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(j || (j = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = globalThis, St = dt.ShadowRoot && (dt.ShadyCSS === void 0 || dt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Et = Symbol(), Yt = /* @__PURE__ */ new WeakMap();
let ae = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== Et) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (St && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Yt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Yt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (r) => new ae(typeof r == "string" ? r : r + "", void 0, Et), Fe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, o, l) => n + ((c) => {
    if (c._$cssResult$ === !0) return c.cssText;
    if (typeof c == "number") return c;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + c + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new ae(e, r, Et);
}, qe = (r, t) => {
  if (St) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = dt.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, r.appendChild(n);
  }
}, Xt = St ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ye, defineProperty: Xe, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, V = globalThis, Zt = V.trustedTypes, tr = Zt ? Zt.emptyScript : "", _t = V.reactiveElementPolyfillSupport, nt = (r, t) => r, ht = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? tr : null;
      break;
    case Object:
    case Array:
      r = r == null ? r : JSON.stringify(r);
  }
  return r;
}, fromAttribute(r, t) {
  let e = r;
  switch (t) {
    case Boolean:
      e = r !== null;
      break;
    case Number:
      e = r === null ? null : Number(r);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(r);
      } catch {
        e = null;
      }
  }
  return e;
} }, At = (r, t) => !Ye(r, t), Jt = { attribute: !0, type: String, converter: ht, reflect: !1, useDefault: !1, hasChanged: At };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), V.litPropertyMetadata ?? (V.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let J = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Jt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Xe(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: l } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(c) {
      this[e] = c;
    } };
    return { get: o, set(c) {
      const m = o == null ? void 0 : o.call(this);
      l == null || l.call(this, c), this.requestUpdate(t, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Jt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(nt("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(nt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(nt("properties"))) {
      const e = this.properties, n = [...Je(e), ...Qe(e)];
      for (const o of n) this.createProperty(o, e[o]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, o] of e) this.elementProperties.set(n, o);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const o = this._$Eu(e, n);
      o !== void 0 && this._$Eh.set(o, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const o of n) e.unshift(Xt(o));
    } else t !== void 0 && e.push(Xt(t));
    return e;
  }
  static _$Eu(t, e) {
    const n = e.attribute;
    return n === !1 ? void 0 : typeof n == "string" ? n : typeof t == "string" ? t.toLowerCase() : void 0;
  }
  constructor() {
    super(), this._$Ep = void 0, this.isUpdatePending = !1, this.hasUpdated = !1, this._$Em = null, this._$Ev();
  }
  _$Ev() {
    var t;
    this._$ES = new Promise((e) => this.enableUpdating = e), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), (t = this.constructor.l) == null || t.forEach((e) => e(this));
  }
  addController(t) {
    var e;
    (this._$EO ?? (this._$EO = /* @__PURE__ */ new Set())).add(t), this.renderRoot !== void 0 && this.isConnected && ((e = t.hostConnected) == null || e.call(t));
  }
  removeController(t) {
    var e;
    (e = this._$EO) == null || e.delete(t);
  }
  _$E_() {
    const t = /* @__PURE__ */ new Map(), e = this.constructor.elementProperties;
    for (const n of e.keys()) this.hasOwnProperty(n) && (t.set(n, this[n]), delete this[n]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return qe(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostConnected) == null ? void 0 : n.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var n;
      return (n = e.hostDisconnected) == null ? void 0 : n.call(e);
    });
  }
  attributeChangedCallback(t, e, n) {
    this._$AK(t, n);
  }
  _$ET(t, e) {
    var l;
    const n = this.constructor.elementProperties.get(t), o = this.constructor._$Eu(t, n);
    if (o !== void 0 && n.reflect === !0) {
      const c = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ht).toAttribute(e, n.type);
      this._$Em = t, c == null ? this.removeAttribute(o) : this.setAttribute(o, c), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, c;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const m = n.getPropertyOptions(o), p = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ht;
      this._$Em = o;
      const x = p.fromAttribute(e, m.type);
      this[o] = x ?? ((c = this._$Ej) == null ? void 0 : c.get(o)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, o = !1, l) {
    var c;
    if (t !== void 0) {
      const m = this.constructor;
      if (o === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? At)(l, e) || n.useDefault && n.reflect && l === ((c = this._$Ej) == null ? void 0 : c.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: o, wrapped: l }, c) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, c ?? e ?? this[t]), l !== !0 || c !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
  }
  async _$EP() {
    this.isUpdatePending = !0;
    try {
      await this._$ES;
    } catch (e) {
      Promise.reject(e);
    }
    const t = this.scheduleUpdate();
    return t != null && await t, !this.isUpdatePending;
  }
  scheduleUpdate() {
    return this.performUpdate();
  }
  performUpdate() {
    var n;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [l, c] of this._$Ep) this[l] = c;
        this._$Ep = void 0;
      }
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, c] of o) {
        const { wrapped: m } = c, p = this[l];
        m !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, c, p);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((o) => {
        var l;
        return (l = o.hostUpdate) == null ? void 0 : l.call(o);
      }), this.update(e)) : this._$EM();
    } catch (o) {
      throw t = !1, this._$EM(), o;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var o;
      return (o = n.hostUpdated) == null ? void 0 : o.call(n);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(t)), this.updated(t);
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
  shouldUpdate(t) {
    return !0;
  }
  update(t) {
    this._$Eq && (this._$Eq = this._$Eq.forEach((e) => this._$ET(e, this[e]))), this._$EM();
  }
  updated(t) {
  }
  firstUpdated(t) {
  }
};
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[nt("elementProperties")] = /* @__PURE__ */ new Map(), J[nt("finalized")] = /* @__PURE__ */ new Map(), _t == null || _t({ ReactiveElement: J }), (V.reactiveElementVersions ?? (V.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const it = globalThis, Qt = (r) => r, ft = it.trustedTypes, Kt = ft ? ft.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, se = "$lit$", G = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + G, er = `<${le}>`, X = document, at = () => X.createComment(""), st = (r) => r === null || typeof r != "object" && typeof r != "function", Tt = Array.isArray, rr = (r) => Tt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", bt = `[ 	
\f\r]`, et = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, te = /-->/g, ee = />/g, W = RegExp(`>|${bt}(?:([^\\s"'>=/]+)(${bt}*=${bt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), re = /'/g, ne = /"/g, ce = /^(?:script|style|textarea|title)$/i, nr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), F = nr(1), Q = Symbol.for("lit-noChange"), R = Symbol.for("lit-nothing"), ie = /* @__PURE__ */ new WeakMap(), q = X.createTreeWalker(X, 129);
function ue(r, t) {
  if (!Tt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Kt !== void 0 ? Kt.createHTML(t) : t;
}
const ir = (r, t) => {
  const e = r.length - 1, n = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", c = et;
  for (let m = 0; m < e; m++) {
    const p = r[m];
    let x, w, _ = -1, T = 0;
    for (; T < p.length && (c.lastIndex = T, w = c.exec(p), w !== null); ) T = c.lastIndex, c === et ? w[1] === "!--" ? c = te : w[1] !== void 0 ? c = ee : w[2] !== void 0 ? (ce.test(w[2]) && (o = RegExp("</" + w[2], "g")), c = W) : w[3] !== void 0 && (c = W) : c === W ? w[0] === ">" ? (c = o ?? et, _ = -1) : w[1] === void 0 ? _ = -2 : (_ = c.lastIndex - w[2].length, x = w[1], c = w[3] === void 0 ? W : w[3] === '"' ? ne : re) : c === ne || c === re ? c = W : c === te || c === ee ? c = et : (c = W, o = void 0);
    const k = c === W && r[m + 1].startsWith("/>") ? " " : "";
    l += c === et ? p + er : _ >= 0 ? (n.push(x), p.slice(0, _) + se + p.slice(_) + G + k) : p + G + (_ === -2 ? m : k);
  }
  return [ue(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class lt {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let l = 0, c = 0;
    const m = t.length - 1, p = this.parts, [x, w] = ir(t, e);
    if (this.el = lt.createElement(x, n), q.currentNode = this.el.content, e === 2 || e === 3) {
      const _ = this.el.content.firstChild;
      _.replaceWith(..._.childNodes);
    }
    for (; (o = q.nextNode()) !== null && p.length < m; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const _ of o.getAttributeNames()) if (_.endsWith(se)) {
          const T = w[c++], k = o.getAttribute(_).split(G), U = /([.?@])?(.*)/.exec(T);
          p.push({ type: 1, index: l, name: U[2], strings: k, ctor: U[1] === "." ? ar : U[1] === "?" ? sr : U[1] === "@" ? lr : pt }), o.removeAttribute(_);
        } else _.startsWith(G) && (p.push({ type: 6, index: l }), o.removeAttribute(_));
        if (ce.test(o.tagName)) {
          const _ = o.textContent.split(G), T = _.length - 1;
          if (T > 0) {
            o.textContent = ft ? ft.emptyScript : "";
            for (let k = 0; k < T; k++) o.append(_[k], at()), q.nextNode(), p.push({ type: 2, index: ++l });
            o.append(_[T], at());
          }
        }
      } else if (o.nodeType === 8) if (o.data === le) p.push({ type: 2, index: l });
      else {
        let _ = -1;
        for (; (_ = o.data.indexOf(G, _ + 1)) !== -1; ) p.push({ type: 7, index: l }), _ += G.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = X.createElement("template");
    return n.innerHTML = t, n;
  }
}
function K(r, t, e = r, n) {
  var c, m;
  if (t === Q) return t;
  let o = n !== void 0 ? (c = e._$Co) == null ? void 0 : c[n] : e._$Cl;
  const l = st(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((m = o == null ? void 0 : o._$AO) == null || m.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = o : e._$Cl = o), o !== void 0 && (t = K(r, o._$AS(r, t.values), o, n)), t;
}
class or {
  constructor(t, e) {
    this._$AV = [], this._$AN = void 0, this._$AD = t, this._$AM = e;
  }
  get parentNode() {
    return this._$AM.parentNode;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  u(t) {
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? X).importNode(e, !0);
    q.currentNode = o;
    let l = q.nextNode(), c = 0, m = 0, p = n[0];
    for (; p !== void 0; ) {
      if (c === p.index) {
        let x;
        p.type === 2 ? x = new ct(l, l.nextSibling, this, t) : p.type === 1 ? x = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (x = new cr(l, this, t)), this._$AV.push(x), p = n[++m];
      }
      c !== (p == null ? void 0 : p.index) && (l = q.nextNode(), c++);
    }
    return q.currentNode = X, o;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ct {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = R, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
  }
  get parentNode() {
    let t = this._$AA.parentNode;
    const e = this._$AM;
    return e !== void 0 && (t == null ? void 0 : t.nodeType) === 11 && (t = e.parentNode), t;
  }
  get startNode() {
    return this._$AA;
  }
  get endNode() {
    return this._$AB;
  }
  _$AI(t, e = this) {
    t = K(this, t, e), st(t) ? t === R || t == null || t === "" ? (this._$AH !== R && this._$AR(), this._$AH = R) : t !== this._$AH && t !== Q && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== R && st(this._$AH) ? this._$AA.nextSibling.data = t : this.T(X.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = lt.createElement(ue(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(e);
    else {
      const c = new or(o, this), m = c.u(this.options);
      c.p(e), this.T(m), this._$AH = c;
    }
  }
  _$AC(t) {
    let e = ie.get(t.strings);
    return e === void 0 && ie.set(t.strings, e = new lt(t)), e;
  }
  k(t) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const l of t) o === e.length ? e.push(n = new ct(this.O(at()), this.O(at()), this, this.options)) : n = e[o], n._$AI(l), o++;
    o < e.length && (this._$AR(n && n._$AB.nextSibling, o), e.length = o);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const o = Qt(t).nextSibling;
      Qt(t).remove(), t = o;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class pt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, l) {
    this.type = 1, this._$AH = R, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = R;
  }
  _$AI(t, e = this, n, o) {
    const l = this.strings;
    let c = !1;
    if (l === void 0) t = K(this, t, e, 0), c = !st(t) || t !== this._$AH && t !== Q, c && (this._$AH = t);
    else {
      const m = t;
      let p, x;
      for (t = l[0], p = 0; p < l.length - 1; p++) x = K(this, m[n + p], e, p), x === Q && (x = this._$AH[p]), c || (c = !st(x) || x !== this._$AH[p]), x === R ? t = R : t !== R && (t += (x ?? "") + l[p + 1]), this._$AH[p] = x;
    }
    c && !o && this.j(t);
  }
  j(t) {
    t === R ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ar extends pt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === R ? void 0 : t;
  }
}
class sr extends pt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== R);
  }
}
class lr extends pt {
  constructor(t, e, n, o, l) {
    super(t, e, n, o, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = K(this, t, e, 0) ?? R) === Q) return;
    const n = this._$AH, o = t === R && n !== R || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== R && (n === R || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class cr {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    K(this, t);
  }
}
const $t = it.litHtmlPolyfillSupport;
$t == null || $t(lt, ct), (it.litHtmlVersions ?? (it.litHtmlVersions = [])).push("3.3.3");
const ur = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new ct(t.insertBefore(at(), l), l, void 0, e ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const Y = globalThis;
class ot extends J {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
  }
  createRenderRoot() {
    var e;
    const t = super.createRenderRoot();
    return (e = this.renderOptions).renderBefore ?? (e.renderBefore = t.firstChild), t;
  }
  update(t) {
    const e = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = ur(e, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var t;
    super.connectedCallback(), (t = this._$Do) == null || t.setConnected(!0);
  }
  disconnectedCallback() {
    var t;
    super.disconnectedCallback(), (t = this._$Do) == null || t.setConnected(!1);
  }
  render() {
    return Q;
  }
}
var oe;
ot._$litElement$ = !0, ot.finalized = !0, (oe = Y.litElementHydrateSupport) == null || oe.call(Y, { LitElement: ot });
const wt = Y.litElementPolyfillSupport;
wt == null || wt({ LitElement: ot });
(Y.litElementVersions ?? (Y.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ht, reflect: !1, hasChanged: At }, hr = (r = dr, t, e) => {
  const { kind: n, metadata: o } = e;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: c } = e;
    return { set(m) {
      const p = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(c, p, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(c, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: c } = e;
    return function(m) {
      const p = this[c];
      t.call(this, m), this.requestUpdate(c, p, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function z(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, o, l) => {
    const c = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), c ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, t, e);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, M = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? pr(t, e) : t, l = r.length - 1, c; l >= 0; l--)
    (c = r[l]) && (o = (n ? c(t, e, o) : c(o)) || o);
  return n && o && fr(t, e, o), o;
};
const xt = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:60px 24px;background:#f9fafb;text-align:center;border-radius:12px;font-family:inherit;'>",
    "<h1 style='font-size:32px;font-weight:800;color:#111827;margin-bottom:16px;'>{{props:title}}</h1>",
    "<p style='font-size:16px;color:#4b5563;max-width:600px;margin:0 auto 24px;'>{{props:lead}}</p>",
    "<div style='display:flex;justify-content:center;gap:12px;'>",
    "<span style='padding:10px 20px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-weight:600;font-size:14px;'>Get Started</span>",
    "<span style='padding:10px 20px;border:1px solid #d1d5db;color:#4b5563;border-radius:6px;font-weight:600;font-size:14px;'>Learn More</span>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Hero"]
};
function rt(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let A = class extends ot {
  constructor() {
    super(...arguments), this.title = "Design blocks done right", this.lead = "Awesome UI sections for landing page builders. Beautiful, fast, and fully responsive templates.", this.image = "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&auto=format&fit=crop&q=60", this.ctaPrimaryText = "Get Started", this.ctaPrimaryUrl = "#", this.ctaSecondaryText = "Learn More", this.ctaSecondaryUrl = "#", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var x, w, _, T, k, U, H, B;
    if (!r) return xt;
    const t = rt(((x = r.props) == null ? void 0 : x.title) ?? ((w = r.studio.props) == null ? void 0 : w.title) ?? "Design blocks done right"), e = rt(((_ = r.props) == null ? void 0 : _.lead) ?? ((T = r.studio.props) == null ? void 0 : T.lead) ?? "Awesome UI sections for landing page builders."), n = ((k = r.props) == null ? void 0 : k.layout) ?? "layout-1", o = rt(((U = r.props) == null ? void 0 : U.ctaPrimaryText) ?? "Get Started"), l = rt(((H = r.props) == null ? void 0 : H.ctaSecondaryText) ?? "Learn More"), c = rt(((B = r.props) == null ? void 0 : B.image) ?? "");
    if (n === "layout-1" || !c)
      return {
        ...xt,
        templateHtml: [
          "<section style='padding:80px 24px;background:#f9fafb;text-align:center;font-family:inherit;'>",
          `<h1 style='font-size:36px;font-weight:800;color:#111827;margin-bottom:16px;'>${t}</h1>`,
          `<p style='font-size:17px;color:#4b5563;max-width:640px;margin:0 auto 28px;line-height:1.6;'>${e}</p>`,
          "<div style='display:flex;justify-content:center;gap:12px;'>",
          `<span style='padding:11px 22px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-weight:600;font-size:14px;'>${o}</span>`,
          `<span style='padding:11px 22px;border:1px solid #d1d5db;color:#4b5563;border-radius:6px;font-weight:600;font-size:14px;'>${l}</span>`,
          "</div>",
          "</section>"
        ].join("")
      };
    const m = [
      "<div style='flex:1;display:flex;flex-direction:column;justify-content:center;text-align:left;'>",
      `<h1 style='font-size:34px;font-weight:800;color:#111827;margin-bottom:16px;line-height:1.2;'>${t}</h1>`,
      `<p style='font-size:16px;color:#4b5563;margin-bottom:28px;line-height:1.6;'>${e}</p>`,
      "<div style='display:flex;gap:12px;'>",
      `<span style='padding:11px 22px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-weight:600;font-size:14px;'>${o}</span>`,
      `<span style='padding:11px 22px;border:1px solid #d1d5db;color:#4b5563;border-radius:6px;font-weight:600;font-size:14px;'>${l}</span>`,
      "</div>",
      "</div>"
    ].join(""), p = `<div style='flex:1;display:flex;align-items:center;justify-content:center;'><img src='${c}' style='max-width:100%;height:auto;border-radius:12px;box-shadow:0 10px 25px rgba(0,0,0,0.08);' alt='hero image'></div>`;
    return {
      ...xt,
      templateHtml: [
        "<section style='padding:80px 5%;background:#f9fafb;display:flex;gap:40px;align-items:center;font-family:inherit;box-sizing:border-box;'>",
        n === "layout-2" ? m : p,
        n === "layout-2" ? p : m,
        "</section>"
      ].join("")
    };
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
  get imageConfig() {
    return this.image;
  }
  set imageConfig(r) {
    this.image = r;
  }
  get ctaPrimaryTextConfig() {
    return this.ctaPrimaryText;
  }
  set ctaPrimaryTextConfig(r) {
    this.ctaPrimaryText = r;
  }
  get ctaPrimaryUrlConfig() {
    return this.ctaPrimaryUrl;
  }
  set ctaPrimaryUrlConfig(r) {
    this.ctaPrimaryUrl = r;
  }
  get ctaSecondaryTextConfig() {
    return this.ctaSecondaryText;
  }
  set ctaSecondaryTextConfig(r) {
    this.ctaSecondaryText = r;
  }
  get ctaSecondaryUrlConfig() {
    return this.ctaSecondaryUrl;
  }
  set ctaSecondaryUrlConfig(r) {
    this.ctaSecondaryUrl = r;
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
  render() {
    const r = this.layout === "layout-1" || !this.image, t = this.layout === "layout-2", e = F`
      <div class="text-column">
        <h1>${this.title}</h1>
        <p class="lead">${this.lead}</p>
        <div class="button-group">
          <a class="btn-primary" href="${this.ctaPrimaryUrl}">${this.ctaPrimaryText}</a>
          <a class="btn-secondary" href="${this.ctaSecondaryUrl}">${this.ctaSecondaryText}</a>
        </div>
      </div>
    `, n = F`
      <div class="image-column">
        <img class="hero-img" src="${this.image}" alt="hero graphic">
      </div>
    `;
    return F`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        ${r ? F`
          <div class="container-centered">
            <h1>${this.title}</h1>
            <p class="lead">${this.lead}</p>
            <div class="button-group">
              <a class="btn-primary" href="${this.ctaPrimaryUrl}">${this.ctaPrimaryText}</a>
              <a class="btn-secondary" href="${this.ctaSecondaryUrl}">${this.ctaSecondaryText}</a>
            </div>
          </div>
        ` : F`
          <div class="container-split">
            ${t ? F`${e}${n}` : F`${n}${e}`}
          </div>
        `}
      </section>
    `;
  }
};
A.styles = Fe`
    :host {
      display: block;
      width: 100%;
      --hero-bg: var(--uiv-surface-color, #ffffff);
      --hero-title-color: var(--uiv-text-color, #111827);
      --hero-lead-color: #4b5563;
      --hero-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 90px 6%;
      background: var(--hero-bg);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    /* Theme Variants */
    section.theme-dark {
      --hero-bg: #111827;
      --hero-title-color: #f9fafb;
      --hero-lead-color: #9ca3af;
    }

    section.theme-gradient {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.08) 0%, rgba(139, 92, 246, 0.08) 100%);
    }

    .container-centered {
      text-align: center;
      max-width: 800px;
      margin: 0 auto;
    }

    .container-split {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    .text-column {
      flex: 1.2;
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: left;
    }

    .image-column {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .hero-img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: var(--uiv-shadow-depth, 0 15px 35px rgba(0,0,0,0.07));
    }

    h1 {
      font-size: 3rem;
      font-weight: 800;
      color: var(--hero-title-color);
      line-height: 1.15;
      margin: 0 0 20px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.15rem;
      line-height: 1.6;
      color: var(--hero-lead-color);
      margin: 0 0 35px 0;
    }

    .button-group {
      display: flex;
      gap: 16px;
    }

    .container-centered .button-group {
      justify-content: center;
    }

    .btn-primary {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--hero-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease, transform 0.15s ease;
    }

    .btn-secondary {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: var(--hero-title-color);
      background: transparent;
      border: 1px solid var(--uiv-border-color, #d1d5db);
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: background-color 0.2s ease;
    }

    .btn-primary:hover, .btn-secondary:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }

    .btn-secondary:hover {
      background: rgba(0,0,0,0.03);
    }

    /* Mobile Adaptability */
    @media (max-width: 768px) {
      .container-split {
        flex-direction: column !important;
        text-align: center;
      }
      .text-column {
        text-align: center;
      }
      .button-group {
        justify-content: center;
      }
      h1 {
        font-size: 2.25rem;
      }
    }
  `;
M([
  z({ type: String })
], A.prototype, "title", 2);
M([
  z({ type: String })
], A.prototype, "lead", 2);
M([
  z({ type: String })
], A.prototype, "image", 2);
M([
  z({ type: String, attribute: "cta-primary-text" })
], A.prototype, "ctaPrimaryText", 2);
M([
  z({ type: String, attribute: "cta-primary-url" })
], A.prototype, "ctaPrimaryUrl", 2);
M([
  z({ type: String, attribute: "cta-secondary-text" })
], A.prototype, "ctaSecondaryText", 2);
M([
  z({ type: String, attribute: "cta-secondary-url" })
], A.prototype, "ctaSecondaryUrl", 2);
M([
  z({ type: String })
], A.prototype, "layout", 2);
M([
  z({ type: String, attribute: "theme-style" })
], A.prototype, "themeStyle", 2);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Headline Title",
    fieldMappings: "title"
  })
], A.prototype, "titleConfig", 1);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Lead Copy Paragraph",
    fieldMappings: "lead"
  })
], A.prototype, "leadConfig", 1);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Visual Image URL",
    fieldMappings: "image"
  })
], A.prototype, "imageConfig", 1);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Primary CTA Label",
    fieldMappings: "ctaPrimaryText"
  })
], A.prototype, "ctaPrimaryTextConfig", 1);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Primary CTA URL",
    fieldMappings: "ctaPrimaryUrl"
  })
], A.prototype, "ctaPrimaryUrlConfig", 1);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Secondary CTA Label",
    fieldMappings: "ctaSecondaryText"
  })
], A.prototype, "ctaSecondaryTextConfig", 1);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.TEXT_INPUT,
    displayLabel: "Secondary CTA URL",
    fieldMappings: "ctaSecondaryUrl"
  })
], A.prototype, "ctaSecondaryUrlConfig", 1);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Centered Text Content", value: "layout-1" },
      { label: "Split Left-Text (Image Right)", value: "layout-2" },
      { label: "Split Right-Text (Image Left)", value: "layout-3" }
    ]
  })
], A.prototype, "layoutConfig", 1);
M([
  L({
    attributeType: j.PROPERTY,
    uiComponentType: I.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" },
      { label: "Gradient Overlay", value: "gradient" }
    ]
  })
], A.prototype, "themeStyleConfig", 1);
A = M([
  ze({
    name: "zero-block-hero",
    version: "1.0.0",
    title: "Hero Block",
    elementSelector: "zero-block-hero",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Ge()
], A);
export {
  A as ZeroBlockHero,
  xt as studioTemplate
};
