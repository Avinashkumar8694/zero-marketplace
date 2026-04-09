var oe = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var ue;
(function(P) {
  (function(l) {
    var c = typeof globalThis == "object" ? globalThis : typeof oe == "object" ? oe : typeof self == "object" ? self : typeof this == "object" ? this : b(), m = _(P);
    typeof c.Reflect < "u" && (m = _(c.Reflect, m)), l(m, c), typeof c.Reflect > "u" && (c.Reflect = P);
    function _(I, R) {
      return function(k, C) {
        Object.defineProperty(I, k, { configurable: !0, writable: !0, value: C }), R && R(k, C);
      };
    }
    function M() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function O() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function b() {
      return M() || O();
    }
  })(function(l, c) {
    var m = Object.prototype.hasOwnProperty, _ = typeof Symbol == "function", M = _ && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", O = _ && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", b = typeof Object.create == "function", I = { __proto__: [] } instanceof Array, R = !b && !I, k = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: b ? function() {
        return H(/* @__PURE__ */ Object.create(null));
      } : I ? function() {
        return H({ __proto__: null });
      } : function() {
        return H({});
      },
      has: R ? function(e, t) {
        return m.call(e, t);
      } : function(e, t) {
        return t in e;
      },
      get: R ? function(e, t) {
        return m.call(e, t) ? e[t] : void 0;
      } : function(e, t) {
        return e[t];
      }
    }, C = Object.getPrototypeOf(Function), x = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Se(), z = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : je(), F = typeof WeakMap == "function" ? WeakMap : Ce(), S = _ ? Symbol.for("@reflect-metadata:registry") : void 0, A = Pe(), L = Ie(A);
    function se(e, t, r, n) {
      if (s(r)) {
        if (!Y(e))
          throw new TypeError();
        if (!K(t))
          throw new TypeError();
        return me(e, t);
      } else {
        if (!Y(e))
          throw new TypeError();
        if (!w(t))
          throw new TypeError();
        if (!w(n) && !s(n) && !j(n))
          throw new TypeError();
        return j(n) && (n = void 0), r = E(r), _e(e, t, r, n);
      }
    }
    l("decorate", se);
    function ce(e, t) {
      function r(n, f) {
        if (!w(n))
          throw new TypeError();
        if (!s(f) && !Te(f))
          throw new TypeError();
        B(e, t, n, f);
      }
      return r;
    }
    l("metadata", ce);
    function de(e, t, r, n) {
      if (!w(r))
        throw new TypeError();
      return s(n) || (n = E(n)), B(e, t, r, n);
    }
    l("defineMetadata", de);
    function le(e, t, r) {
      if (!w(t))
        throw new TypeError();
      return s(r) || (r = E(r)), $(e, t, r);
    }
    l("hasMetadata", le);
    function he(e, t, r) {
      if (!w(t))
        throw new TypeError();
      return s(r) || (r = E(r)), Z(e, t, r);
    }
    l("hasOwnMetadata", he);
    function ve(e, t, r) {
      if (!w(t))
        throw new TypeError();
      return s(r) || (r = E(r)), N(e, t, r);
    }
    l("getMetadata", ve);
    function ye(e, t, r) {
      if (!w(t))
        throw new TypeError();
      return s(r) || (r = E(r)), V(e, t, r);
    }
    l("getOwnMetadata", ye);
    function we(e, t) {
      if (!w(e))
        throw new TypeError();
      return s(t) || (t = E(t)), q(e, t);
    }
    l("getMetadataKeys", we);
    function pe(e, t) {
      if (!w(e))
        throw new TypeError();
      return s(t) || (t = E(t)), J(e, t);
    }
    l("getOwnMetadataKeys", pe);
    function ge(e, t, r) {
      if (!w(t))
        throw new TypeError();
      if (s(r) || (r = E(r)), !w(t))
        throw new TypeError();
      s(r) || (r = E(r));
      var n = G(
        t,
        r,
        /*Create*/
        !1
      );
      return s(n) ? !1 : n.OrdinaryDeleteMetadata(e, t, r);
    }
    l("deleteMetadata", ge);
    function me(e, t) {
      for (var r = e.length - 1; r >= 0; --r) {
        var n = e[r], f = n(t);
        if (!s(f) && !j(f)) {
          if (!K(f))
            throw new TypeError();
          t = f;
        }
      }
      return t;
    }
    function _e(e, t, r, n) {
      for (var f = e.length - 1; f >= 0; --f) {
        var g = e[f], p = g(t, r, n);
        if (!s(p) && !j(p)) {
          if (!w(p))
            throw new TypeError();
          n = p;
        }
      }
      return n;
    }
    function $(e, t, r) {
      var n = Z(e, t, r);
      if (n)
        return !0;
      var f = W(t);
      return j(f) ? !1 : $(e, f, r);
    }
    function Z(e, t, r) {
      var n = G(
        t,
        r,
        /*Create*/
        !1
      );
      return s(n) ? !1 : X(n.OrdinaryHasOwnMetadata(e, t, r));
    }
    function N(e, t, r) {
      var n = Z(e, t, r);
      if (n)
        return V(e, t, r);
      var f = W(t);
      if (!j(f))
        return N(e, f, r);
    }
    function V(e, t, r) {
      var n = G(
        t,
        r,
        /*Create*/
        !1
      );
      if (!s(n))
        return n.OrdinaryGetOwnMetadata(e, t, r);
    }
    function B(e, t, r, n) {
      var f = G(
        r,
        n,
        /*Create*/
        !0
      );
      f.OrdinaryDefineOwnMetadata(e, t, r, n);
    }
    function q(e, t) {
      var r = J(e, t), n = W(e);
      if (n === null)
        return r;
      var f = q(n, t);
      if (f.length <= 0)
        return r;
      if (r.length <= 0)
        return f;
      for (var g = new z(), p = [], d = 0, a = r; d < a.length; d++) {
        var i = a[d], o = g.has(i);
        o || (g.add(i), p.push(i));
      }
      for (var u = 0, h = f; u < h.length; u++) {
        var i = h[u], o = g.has(i);
        o || (g.add(i), p.push(i));
      }
      return p;
    }
    function J(e, t) {
      var r = G(
        e,
        t,
        /*create*/
        !1
      );
      return r ? r.OrdinaryOwnMetadataKeys(e, t) : [];
    }
    function Q(e) {
      if (e === null)
        return 1;
      switch (typeof e) {
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
          return e === null ? 1 : 6;
        default:
          return 6;
      }
    }
    function s(e) {
      return e === void 0;
    }
    function j(e) {
      return e === null;
    }
    function Me(e) {
      return typeof e == "symbol";
    }
    function w(e) {
      return typeof e == "object" ? e !== null : typeof e == "function";
    }
    function be(e, t) {
      switch (Q(e)) {
        case 0:
          return e;
        case 1:
          return e;
        case 2:
          return e;
        case 3:
          return e;
        case 4:
          return e;
        case 5:
          return e;
      }
      var r = "string", n = ee(e, M);
      if (n !== void 0) {
        var f = n.call(e, r);
        if (w(f))
          throw new TypeError();
        return f;
      }
      return Oe(e);
    }
    function Oe(e, t) {
      var r, n;
      {
        var f = e.toString;
        if (D(f)) {
          var n = f.call(e);
          if (!w(n))
            return n;
        }
        var r = e.valueOf;
        if (D(r)) {
          var n = r.call(e);
          if (!w(n))
            return n;
        }
      }
      throw new TypeError();
    }
    function X(e) {
      return !!e;
    }
    function ke(e) {
      return "" + e;
    }
    function E(e) {
      var t = be(e);
      return Me(t) ? t : ke(t);
    }
    function Y(e) {
      return Array.isArray ? Array.isArray(e) : e instanceof Object ? e instanceof Array : Object.prototype.toString.call(e) === "[object Array]";
    }
    function D(e) {
      return typeof e == "function";
    }
    function K(e) {
      return typeof e == "function";
    }
    function Te(e) {
      switch (Q(e)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function U(e, t) {
      return e === t || e !== e && t !== t;
    }
    function ee(e, t) {
      var r = e[t];
      if (r != null) {
        if (!D(r))
          throw new TypeError();
        return r;
      }
    }
    function te(e) {
      var t = ee(e, O);
      if (!D(t))
        throw new TypeError();
      var r = t.call(e);
      if (!w(r))
        throw new TypeError();
      return r;
    }
    function re(e) {
      return e.value;
    }
    function ne(e) {
      var t = e.next();
      return t.done ? !1 : t;
    }
    function ae(e) {
      var t = e.return;
      t && t.call(e);
    }
    function W(e) {
      var t = Object.getPrototypeOf(e);
      if (typeof e != "function" || e === C || t !== C)
        return t;
      var r = e.prototype, n = r && Object.getPrototypeOf(r);
      if (n == null || n === Object.prototype)
        return t;
      var f = n.constructor;
      return typeof f != "function" || f === e ? t : f;
    }
    function Ee() {
      var e;
      !s(S) && typeof c.Reflect < "u" && !(S in c.Reflect) && typeof c.Reflect.defineMetadata == "function" && (e = Re(c.Reflect));
      var t, r, n, f = new F(), g = {
        registerProvider: p,
        getProvider: a,
        setProvider: o
      };
      return g;
      function p(u) {
        if (!Object.isExtensible(g))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case e === u:
            break;
          case s(t):
            t = u;
            break;
          case t === u:
            break;
          case s(r):
            r = u;
            break;
          case r === u:
            break;
          default:
            n === void 0 && (n = new z()), n.add(u);
            break;
        }
      }
      function d(u, h) {
        if (!s(t)) {
          if (t.isProviderFor(u, h))
            return t;
          if (!s(r)) {
            if (r.isProviderFor(u, h))
              return t;
            if (!s(n))
              for (var v = te(n); ; ) {
                var y = ne(v);
                if (!y)
                  return;
                var T = re(y);
                if (T.isProviderFor(u, h))
                  return ae(v), T;
              }
          }
        }
        if (!s(e) && e.isProviderFor(u, h))
          return e;
      }
      function a(u, h) {
        var v = f.get(u), y;
        return s(v) || (y = v.get(h)), s(y) && (y = d(u, h), s(y) || (s(v) && (v = new x(), f.set(u, v)), v.set(h, y))), y;
      }
      function i(u) {
        if (s(u))
          throw new TypeError();
        return t === u || r === u || !s(n) && n.has(u);
      }
      function o(u, h, v) {
        if (!i(v))
          throw new Error("Metadata provider not registered.");
        var y = a(u, h);
        if (y !== v) {
          if (!s(y))
            return !1;
          var T = f.get(u);
          s(T) && (T = new x(), f.set(u, T)), T.set(h, v);
        }
        return !0;
      }
    }
    function Pe() {
      var e;
      return !s(S) && w(c.Reflect) && Object.isExtensible(c.Reflect) && (e = c.Reflect[S]), s(e) && (e = Ee()), !s(S) && w(c.Reflect) && Object.isExtensible(c.Reflect) && Object.defineProperty(c.Reflect, S, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: e
      }), e;
    }
    function Ie(e) {
      var t = new F(), r = {
        isProviderFor: function(i, o) {
          var u = t.get(i);
          return s(u) ? !1 : u.has(o);
        },
        OrdinaryDefineOwnMetadata: p,
        OrdinaryHasOwnMetadata: f,
        OrdinaryGetOwnMetadata: g,
        OrdinaryOwnMetadataKeys: d,
        OrdinaryDeleteMetadata: a
      };
      return A.registerProvider(r), r;
      function n(i, o, u) {
        var h = t.get(i), v = !1;
        if (s(h)) {
          if (!u)
            return;
          h = new x(), t.set(i, h), v = !0;
        }
        var y = h.get(o);
        if (s(y)) {
          if (!u)
            return;
          if (y = new x(), h.set(o, y), !e.setProvider(i, o, r))
            throw h.delete(o), v && t.delete(i), new Error("Wrong provider for target.");
        }
        return y;
      }
      function f(i, o, u) {
        var h = n(
          o,
          u,
          /*Create*/
          !1
        );
        return s(h) ? !1 : X(h.has(i));
      }
      function g(i, o, u) {
        var h = n(
          o,
          u,
          /*Create*/
          !1
        );
        if (!s(h))
          return h.get(i);
      }
      function p(i, o, u, h) {
        var v = n(
          u,
          h,
          /*Create*/
          !0
        );
        v.set(i, o);
      }
      function d(i, o) {
        var u = [], h = n(
          i,
          o,
          /*Create*/
          !1
        );
        if (s(h))
          return u;
        for (var v = h.keys(), y = te(v), T = 0; ; ) {
          var ie = ne(y);
          if (!ie)
            return u.length = T, u;
          var xe = re(ie);
          try {
            u[T] = xe;
          } catch (Ge) {
            try {
              ae(y);
            } finally {
              throw Ge;
            }
          }
          T++;
        }
      }
      function a(i, o, u) {
        var h = n(
          o,
          u,
          /*Create*/
          !1
        );
        if (s(h) || !h.delete(i))
          return !1;
        if (h.size === 0) {
          var v = t.get(o);
          s(v) || (v.delete(u), v.size === 0 && t.delete(v));
        }
        return !0;
      }
    }
    function Re(e) {
      var t = e.defineMetadata, r = e.hasOwnMetadata, n = e.getOwnMetadata, f = e.getOwnMetadataKeys, g = e.deleteMetadata, p = new F(), d = {
        isProviderFor: function(a, i) {
          var o = p.get(a);
          return !s(o) && o.has(i) ? !0 : f(a, i).length ? (s(o) && (o = new z(), p.set(a, o)), o.add(i), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: t,
        OrdinaryHasOwnMetadata: r,
        OrdinaryGetOwnMetadata: n,
        OrdinaryOwnMetadataKeys: f,
        OrdinaryDeleteMetadata: g
      };
      return d;
    }
    function G(e, t, r) {
      var n = A.getProvider(e, t);
      if (!s(n))
        return n;
      if (r) {
        if (A.setProvider(e, t, L))
          return L;
        throw new Error("Illegal state.");
      }
    }
    function Se() {
      var e = {}, t = [], r = (
        /** @class */
        function() {
          function d(a, i, o) {
            this._index = 0, this._keys = a, this._values = i, this._selector = o;
          }
          return d.prototype["@@iterator"] = function() {
            return this;
          }, d.prototype[O] = function() {
            return this;
          }, d.prototype.next = function() {
            var a = this._index;
            if (a >= 0 && a < this._keys.length) {
              var i = this._selector(this._keys[a], this._values[a]);
              return a + 1 >= this._keys.length ? (this._index = -1, this._keys = t, this._values = t) : this._index++, { value: i, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, d.prototype.throw = function(a) {
            throw this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), a;
          }, d.prototype.return = function(a) {
            return this._index >= 0 && (this._index = -1, this._keys = t, this._values = t), { value: a, done: !0 };
          }, d;
        }()
      ), n = (
        /** @class */
        function() {
          function d() {
            this._keys = [], this._values = [], this._cacheKey = e, this._cacheIndex = -2;
          }
          return Object.defineProperty(d.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), d.prototype.has = function(a) {
            return this._find(
              a,
              /*insert*/
              !1
            ) >= 0;
          }, d.prototype.get = function(a) {
            var i = this._find(
              a,
              /*insert*/
              !1
            );
            return i >= 0 ? this._values[i] : void 0;
          }, d.prototype.set = function(a, i) {
            var o = this._find(
              a,
              /*insert*/
              !0
            );
            return this._values[o] = i, this;
          }, d.prototype.delete = function(a) {
            var i = this._find(
              a,
              /*insert*/
              !1
            );
            if (i >= 0) {
              for (var o = this._keys.length, u = i + 1; u < o; u++)
                this._keys[u - 1] = this._keys[u], this._values[u - 1] = this._values[u];
              return this._keys.length--, this._values.length--, U(a, this._cacheKey) && (this._cacheKey = e, this._cacheIndex = -2), !0;
            }
            return !1;
          }, d.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = e, this._cacheIndex = -2;
          }, d.prototype.keys = function() {
            return new r(this._keys, this._values, f);
          }, d.prototype.values = function() {
            return new r(this._keys, this._values, g);
          }, d.prototype.entries = function() {
            return new r(this._keys, this._values, p);
          }, d.prototype["@@iterator"] = function() {
            return this.entries();
          }, d.prototype[O] = function() {
            return this.entries();
          }, d.prototype._find = function(a, i) {
            if (!U(this._cacheKey, a)) {
              this._cacheIndex = -1;
              for (var o = 0; o < this._keys.length; o++)
                if (U(this._keys[o], a)) {
                  this._cacheIndex = o;
                  break;
                }
            }
            return this._cacheIndex < 0 && i && (this._cacheIndex = this._keys.length, this._keys.push(a), this._values.push(void 0)), this._cacheIndex;
          }, d;
        }()
      );
      return n;
      function f(d, a) {
        return d;
      }
      function g(d, a) {
        return a;
      }
      function p(d, a) {
        return [d, a];
      }
    }
    function je() {
      var e = (
        /** @class */
        function() {
          function t() {
            this._map = new x();
          }
          return Object.defineProperty(t.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), t.prototype.has = function(r) {
            return this._map.has(r);
          }, t.prototype.add = function(r) {
            return this._map.set(r, r), this;
          }, t.prototype.delete = function(r) {
            return this._map.delete(r);
          }, t.prototype.clear = function() {
            this._map.clear();
          }, t.prototype.keys = function() {
            return this._map.keys();
          }, t.prototype.values = function() {
            return this._map.keys();
          }, t.prototype.entries = function() {
            return this._map.entries();
          }, t.prototype["@@iterator"] = function() {
            return this.keys();
          }, t.prototype[O] = function() {
            return this.keys();
          }, t;
        }()
      );
      return e;
    }
    function Ce() {
      var e = 16, t = k.create(), r = n();
      return (
        /** @class */
        function() {
          function a() {
            this._key = n();
          }
          return a.prototype.has = function(i) {
            var o = f(
              i,
              /*create*/
              !1
            );
            return o !== void 0 ? k.has(o, this._key) : !1;
          }, a.prototype.get = function(i) {
            var o = f(
              i,
              /*create*/
              !1
            );
            return o !== void 0 ? k.get(o, this._key) : void 0;
          }, a.prototype.set = function(i, o) {
            var u = f(
              i,
              /*create*/
              !0
            );
            return u[this._key] = o, this;
          }, a.prototype.delete = function(i) {
            var o = f(
              i,
              /*create*/
              !1
            );
            return o !== void 0 ? delete o[this._key] : !1;
          }, a.prototype.clear = function() {
            this._key = n();
          }, a;
        }()
      );
      function n() {
        var a;
        do
          a = "@@WeakMap@@" + d();
        while (k.has(t, a));
        return t[a] = !0, a;
      }
      function f(a, i) {
        if (!m.call(a, r)) {
          if (!i)
            return;
          Object.defineProperty(a, r, { value: k.create() });
        }
        return a[r];
      }
      function g(a, i) {
        for (var o = 0; o < i; ++o)
          a[o] = Math.random() * 255 | 0;
        return a;
      }
      function p(a) {
        if (typeof Uint8Array == "function") {
          var i = new Uint8Array(a);
          return typeof crypto < "u" ? crypto.getRandomValues(i) : typeof msCrypto < "u" ? msCrypto.getRandomValues(i) : g(i, a), i;
        }
        return g(new Array(a), a);
      }
      function d() {
        var a = p(e);
        a[6] = a[6] & 79 | 64, a[8] = a[8] & 191 | 128;
        for (var i = "", o = 0; o < e; ++o) {
          var u = a[o];
          (o === 4 || o === 6 || o === 8) && (i += "-"), u < 16 && (i += "0"), i += u.toString(16).toLowerCase();
        }
        return i;
      }
    }
    function H(e) {
      return e.__ = void 0, delete e.__, e;
    }
  });
})(ue || (ue = {}));
class fe {
  constructor() {
    var l, c;
    this.modules = ((l = window.zero) == null ? void 0 : l.modules) || {}, this.components = ((c = window.zero) == null ? void 0 : c.components) || {}, this.attachListeners();
  }
  // Method to register general plugins (logic, modules)
  registerPlugins(l, c) {
    if (!l || !c)
      throw new Error("Key and value are required to register a plugin.");
    this.modules[l] = c, typeof c.onInit == "function" && c.onInit(), console.log(`[Zero] Plugin registered: modules['${l}']`);
  }
  // Explicit method to register UI components/elements
  registerElement(l, c) {
    if (!l || !c) return;
    const m = Reflect.getMetadata("ZeroAttribute", c.prototype) || [], _ = Reflect.getMetadata("ZeroComponent", c);
    this.components[l] = {
      class: c,
      inputs: m.filter((M) => !M.eventTrigger).reduce((M, { fieldMappings: O, ...b }) => (O && (M[O] = { ...b }), M), {}),
      outputs: {
        events: m.filter((M) => M.eventTrigger).map((M) => M.eventTrigger)
      },
      metadata: _
    }, console.log(`[Zero] Element registered: components['${l}']`);
  }
  attachListeners() {
    console.log("[Zero] Registry listener active (zero-element:component-load)"), window.addEventListener("zero-element:component-load", (l) => {
      var M;
      const c = (M = l == null ? void 0 : l.detail) == null ? void 0 : M.element;
      if (!c || !c.selector) return;
      const m = `${c.selector}-${c.version}`, _ = customElements.get(m);
      if (_) {
        const O = Reflect.getMetadata("ZeroAttribute", _.prototype) || [];
        this.components[m] = {
          class: _,
          inputs: O.filter((b) => !b.eventTrigger).reduce((b, { fieldMappings: I, ...R }) => {
            const k = I || R.name;
            return k && (b[k] = { ...R }), b;
          }, {}),
          outputs: {
            events: O.filter((b) => b.eventTrigger).map((b) => b.eventTrigger)
          },
          metadata: c
        }, console.log(`[Zero] Registry: Auto-registered component '${m}' from decorator event.`);
      }
    }), window.addEventListener("element-connected", (l) => {
      var _;
      const c = (_ = l == null ? void 0 : l.detail) == null ? void 0 : _.element;
      if (!(c != null && c.localName)) return;
      const m = customElements.get(c.localName);
      m && this.registerElement(c.localName, m);
    });
  }
}
if (!window.zero || !(window.zero instanceof fe)) {
  const P = window.zero || {}, l = new fe();
  P.modules && Object.assign(l.modules, P.modules), P.components && Object.assign(l.components, P.components), window.zero = l, window.ro = l;
}
