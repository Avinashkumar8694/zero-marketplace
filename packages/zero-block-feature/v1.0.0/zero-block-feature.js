var Ne = Object.defineProperty;
var De = (r, t, e) => t in r ? Ne(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Bt = (r, t, e) => De(r, typeof t != "symbol" ? t + "" : t, e);
var Gt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Wt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Gt == "object" ? Gt : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(y, A) {
      return function(w, b) {
        Object.defineProperty(y, w, { configurable: !0, writable: !0, value: b }), A && A(w, b);
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
    function g() {
      return l() || u();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !g && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return gt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return gt({ __proto__: null });
      } : function() {
        return gt({});
      },
      has: A ? function(i, a) {
        return n.call(i, a);
      } : function(i, a) {
        return a in i;
      },
      get: A ? function(i, a) {
        return n.call(i, a) ? i[a] : void 0;
      } : function(i, a) {
        return i[a];
      }
    }, b = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), D = typeof WeakMap == "function" ? WeakMap : Re(), V = s ? Symbol.for("@reflect-metadata:registry") : void 0, lt = Oe(), xt = Ce(lt);
    function ue(i, a, o, c) {
      if (m(o)) {
        if (!Nt(i))
          throw new TypeError();
        if (!Dt(a))
          throw new TypeError();
        return _e(i, a);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!x(a))
          throw new TypeError();
        if (!x(c) && !m(c) && !J(c))
          throw new TypeError();
        return J(c) && (c = void 0), o = N(o), $e(i, a, o, c);
      }
    }
    t("decorate", ue);
    function ce(i, a) {
      function o(c, v) {
        if (!x(c))
          throw new TypeError();
        if (!m(v) && !Se(v))
          throw new TypeError();
        Pt(i, a, c, v);
      }
      return o;
    }
    t("metadata", ce);
    function de(i, a, o, c) {
      if (!x(o))
        throw new TypeError();
      return m(c) || (c = N(c)), Pt(i, a, o, c);
    }
    t("defineMetadata", de);
    function fe(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return m(o) || (o = N(o)), Ot(i, a, o);
    }
    t("hasMetadata", fe);
    function he(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return m(o) || (o = N(o)), pt(i, a, o);
    }
    t("hasOwnMetadata", he);
    function pe(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return m(o) || (o = N(o)), Ct(i, a, o);
    }
    t("getMetadata", pe);
    function ye(i, a, o) {
      if (!x(a))
        throw new TypeError();
      return m(o) || (o = N(o)), Mt(i, a, o);
    }
    t("getOwnMetadata", ye);
    function ve(i, a) {
      if (!x(i))
        throw new TypeError();
      return m(a) || (a = N(a)), Tt(i, a);
    }
    t("getMetadataKeys", ve);
    function ge(i, a) {
      if (!x(i))
        throw new TypeError();
      return m(a) || (a = N(a)), Rt(i, a);
    }
    t("getOwnMetadataKeys", ge);
    function me(i, a, o) {
      if (!x(a))
        throw new TypeError();
      if (m(o) || (o = N(o)), !x(a))
        throw new TypeError();
      m(o) || (o = N(o));
      var c = K(
        a,
        o,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, a, o);
    }
    t("deleteMetadata", me);
    function _e(i, a) {
      for (var o = i.length - 1; o >= 0; --o) {
        var c = i[o], v = c(a);
        if (!m(v) && !J(v)) {
          if (!Dt(v))
            throw new TypeError();
          a = v;
        }
      }
      return a;
    }
    function $e(i, a, o, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var C = i[v], O = C(a, o, c);
        if (!m(O) && !J(O)) {
          if (!x(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Ot(i, a, o) {
      var c = pt(i, a, o);
      if (c)
        return !0;
      var v = vt(a);
      return J(v) ? !1 : Ot(i, v, o);
    }
    function pt(i, a, o) {
      var c = K(
        a,
        o,
        /*Create*/
        !1
      );
      return m(c) ? !1 : It(c.OrdinaryHasOwnMetadata(i, a, o));
    }
    function Ct(i, a, o) {
      var c = pt(i, a, o);
      if (c)
        return Mt(i, a, o);
      var v = vt(a);
      if (!J(v))
        return Ct(i, v, o);
    }
    function Mt(i, a, o) {
      var c = K(
        a,
        o,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, a, o);
    }
    function Pt(i, a, o, c) {
      var v = K(
        o,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, a, o, c);
    }
    function Tt(i, a) {
      var o = Rt(i, a), c = vt(i);
      if (c === null)
        return o;
      var v = Tt(c, a);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var C = new k(), O = [], _ = 0, d = o; _ < d.length; _++) {
        var f = d[_], h = C.has(f);
        h || (C.add(f), O.push(f));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var f = $[p], h = C.has(f);
        h || (C.add(f), O.push(f));
      }
      return O;
    }
    function Rt(i, a) {
      var o = K(
        i,
        a,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, a) : [];
    }
    function kt(i) {
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
    function m(i) {
      return i === void 0;
    }
    function J(i) {
      return i === null;
    }
    function be(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function we(i, a) {
      switch (kt(i)) {
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
      var o = "string", c = Ut(i, l);
      if (c !== void 0) {
        var v = c.call(i, o);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return Ae(i);
    }
    function Ae(i, a) {
      var o, c;
      {
        var v = i.toString;
        if (ut(v)) {
          var c = v.call(i);
          if (!x(c))
            return c;
        }
        var o = i.valueOf;
        if (ut(o)) {
          var c = o.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function It(i) {
      return !!i;
    }
    function Ee(i) {
      return "" + i;
    }
    function N(i) {
      var a = we(i);
      return be(a) ? a : Ee(a);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ut(i) {
      return typeof i == "function";
    }
    function Dt(i) {
      return typeof i == "function";
    }
    function Se(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function yt(i, a) {
      return i === a || i !== i && a !== a;
    }
    function Ut(i, a) {
      var o = i[a];
      if (o != null) {
        if (!ut(o))
          throw new TypeError();
        return o;
      }
    }
    function jt(i) {
      var a = Ut(i, u);
      if (!ut(a))
        throw new TypeError();
      var o = a.call(i);
      if (!x(o))
        throw new TypeError();
      return o;
    }
    function Ht(i) {
      return i.value;
    }
    function Lt(i) {
      var a = i.next();
      return a.done ? !1 : a;
    }
    function zt(i) {
      var a = i.return;
      a && a.call(i);
    }
    function vt(i) {
      var a = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === b || a !== b)
        return a;
      var o = i.prototype, c = o && Object.getPrototypeOf(o);
      if (c == null || c === Object.prototype)
        return a;
      var v = c.constructor;
      return typeof v != "function" || v === i ? a : v;
    }
    function xe() {
      var i;
      !m(V) && typeof e.Reflect < "u" && !(V in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Me(e.Reflect));
      var a, o, c, v = new D(), C = {
        registerProvider: O,
        getProvider: d,
        setProvider: h
      };
      return C;
      function O(p) {
        if (!Object.isExtensible(C))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          case m(o):
            o = p;
            break;
          case o === p:
            break;
          default:
            c === void 0 && (c = new k()), c.add(p);
            break;
        }
      }
      function _(p, $) {
        if (!m(a)) {
          if (a.isProviderFor(p, $))
            return a;
          if (!m(o)) {
            if (o.isProviderFor(p, $))
              return a;
            if (!m(c))
              for (var E = jt(c); ; ) {
                var S = Lt(E);
                if (!S)
                  return;
                var I = Ht(S);
                if (I.isProviderFor(p, $))
                  return zt(E), I;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, $))
          return i;
      }
      function d(p, $) {
        var E = v.get(p), S;
        return m(E) || (S = E.get($)), m(S) && (S = _(p, $), m(S) || (m(E) && (E = new P(), v.set(p, E)), E.set($, S))), S;
      }
      function f(p) {
        if (m(p))
          throw new TypeError();
        return a === p || o === p || !m(c) && c.has(p);
      }
      function h(p, $, E) {
        if (!f(E))
          throw new Error("Metadata provider not registered.");
        var S = d(p, $);
        if (S !== E) {
          if (!m(S))
            return !1;
          var I = v.get(p);
          m(I) && (I = new P(), v.set(p, I)), I.set($, E);
        }
        return !0;
      }
    }
    function Oe() {
      var i;
      return !m(V) && x(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[V]), m(i) && (i = xe()), !m(V) && x(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, V, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ce(i) {
      var a = new D(), o = {
        isProviderFor: function(f, h) {
          var p = a.get(f);
          return m(p) ? !1 : p.has(h);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: C,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: d
      };
      return lt.registerProvider(o), o;
      function c(f, h, p) {
        var $ = a.get(f), E = !1;
        if (m($)) {
          if (!p)
            return;
          $ = new P(), a.set(f, $), E = !0;
        }
        var S = $.get(h);
        if (m(S)) {
          if (!p)
            return;
          if (S = new P(), $.set(h, S), !i.setProvider(f, h, o))
            throw $.delete(h), E && a.delete(f), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(f, h, p) {
        var $ = c(
          h,
          p,
          /*Create*/
          !1
        );
        return m($) ? !1 : It($.has(f));
      }
      function C(f, h, p) {
        var $ = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (!m($))
          return $.get(f);
      }
      function O(f, h, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(f, h);
      }
      function _(f, h) {
        var p = [], $ = c(
          f,
          h,
          /*Create*/
          !1
        );
        if (m($))
          return p;
        for (var E = $.keys(), S = jt(E), I = 0; ; ) {
          var Ft = Lt(S);
          if (!Ft)
            return p.length = I, p;
          var ke = Ht(Ft);
          try {
            p[I] = ke;
          } catch (Ie) {
            try {
              zt(S);
            } finally {
              throw Ie;
            }
          }
          I++;
        }
      }
      function d(f, h, p) {
        var $ = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (m($) || !$.delete(f))
          return !1;
        if ($.size === 0) {
          var E = a.get(h);
          m(E) || (E.delete(p), E.size === 0 && a.delete(E));
        }
        return !0;
      }
    }
    function Me(i) {
      var a = i.defineMetadata, o = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, C = i.deleteMetadata, O = new D(), _ = {
        isProviderFor: function(d, f) {
          var h = O.get(d);
          return !m(h) && h.has(f) ? !0 : v(d, f).length ? (m(h) && (h = new k(), O.set(d, h)), h.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: a,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: C
      };
      return _;
    }
    function K(i, a, o) {
      var c = lt.getProvider(i, a);
      if (!m(c))
        return c;
      if (o) {
        if (lt.setProvider(i, a, xt))
          return xt;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var i = {}, a = [], o = (
        /** @class */
        function() {
          function _(d, f, h) {
            this._index = 0, this._keys = d, this._values = f, this._selector = h;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var f = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = a, this._values = a) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), d;
          }, _.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = a, this._values = a), { value: d, done: !0 };
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
            var f = this._find(
              d,
              /*insert*/
              !1
            );
            return f >= 0 ? this._values[f] : void 0;
          }, _.prototype.set = function(d, f) {
            var h = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[h] = f, this;
          }, _.prototype.delete = function(d) {
            var f = this._find(
              d,
              /*insert*/
              !1
            );
            if (f >= 0) {
              for (var h = this._keys.length, p = f + 1; p < h; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, yt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new o(this._keys, this._values, C);
          }, _.prototype.entries = function() {
            return new o(this._keys, this._values, O);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(d, f) {
            if (!yt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (yt(this._keys[h], d)) {
                  this._cacheIndex = h;
                  break;
                }
            }
            return this._cacheIndex < 0 && f && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return c;
      function v(_, d) {
        return _;
      }
      function C(_, d) {
        return d;
      }
      function O(_, d) {
        return [_, d];
      }
    }
    function Te() {
      var i = (
        /** @class */
        function() {
          function a() {
            this._map = new P();
          }
          return Object.defineProperty(a.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), a.prototype.has = function(o) {
            return this._map.has(o);
          }, a.prototype.add = function(o) {
            return this._map.set(o, o), this;
          }, a.prototype.delete = function(o) {
            return this._map.delete(o);
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
          }, a.prototype[u] = function() {
            return this.keys();
          }, a;
        }()
      );
      return i;
    }
    function Re() {
      var i = 16, a = w.create(), o = c();
      return (
        /** @class */
        function() {
          function d() {
            this._key = c();
          }
          return d.prototype.has = function(f) {
            var h = v(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? w.has(h, this._key) : !1;
          }, d.prototype.get = function(f) {
            var h = v(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? w.get(h, this._key) : void 0;
          }, d.prototype.set = function(f, h) {
            var p = v(
              f,
              /*create*/
              !0
            );
            return p[this._key] = h, this;
          }, d.prototype.delete = function(f) {
            var h = v(
              f,
              /*create*/
              !1
            );
            return h !== void 0 ? delete h[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = c();
          }, d;
        }()
      );
      function c() {
        var d;
        do
          d = "@@WeakMap@@" + _();
        while (w.has(a, d));
        return a[d] = !0, d;
      }
      function v(d, f) {
        if (!n.call(d, o)) {
          if (!f)
            return;
          Object.defineProperty(d, o, { value: w.create() });
        }
        return d[o];
      }
      function C(d, f) {
        for (var h = 0; h < f; ++h)
          d[h] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : C(f, d), f;
        }
        return C(new Array(d), d);
      }
      function _() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var f = "", h = 0; h < i; ++h) {
          var p = d[h];
          (h === 4 || h === 6 || h === 8) && (f += "-"), p < 16 && (f += "0"), f += p.toString(16).toLowerCase();
        }
        return f;
      }
    }
    function gt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Wt || (Wt = {}));
function Ue(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function je(r) {
  return function(t) {
    if (Ue(r)) {
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
function He(r) {
  return je(r);
}
function Le(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Bt(this, "_stylesApplied", !1);
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), b = (A = l.sheet) == null ? void 0 : A.cssRules;
          b && (Array.from(b).forEach((P) => w.insertRule(P.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          y.appendChild(w);
        }
        u.forEach((w) => {
          const b = w.cloneNode(!0);
          y.appendChild(b);
        });
      }
    }
    return e;
  };
}
function ze(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Fe(r) {
  return function(t, e) {
    try {
      ze(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function X(r) {
  return Fe(r);
}
var H;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(H || (H = {}));
var L;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(L || (L = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, wt = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (wt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Be = (r) => new ie(typeof r == "string" ? r : r + "", void 0, At), Ge = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ie(e, r, At);
}, We = (r, t) => {
  if (wt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = ct.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Jt = wt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Be(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: Je, getOwnPropertyDescriptor: qe, getOwnPropertyNames: Ze, getOwnPropertySymbols: Ye, getPrototypeOf: Xe } = Object, j = globalThis, qt = j.trustedTypes, Qe = qt ? qt.emptyScript : "", mt = j.reactiveElementPolyfillSupport, et = (r, t) => r, dt = { toAttribute(r, t) {
  switch (t) {
    case Boolean:
      r = r ? Qe : null;
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
} }, Et = (r, t) => !Ve(r, t), Zt = { attribute: !0, type: String, converter: dt, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let q = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Je(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = qe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const g = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(et("elementProperties"))) return;
    const t = Xe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(et("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(et("properties"))) {
      const e = this.properties, n = [...Ze(e), ...Ye(e)];
      for (const s of n) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, s] of e) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const s = this._$Eu(e, n);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const s of n) e.unshift(Jt(s));
    } else t !== void 0 && e.push(Jt(t));
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
    return We(t, this.constructor.elementStyles), t;
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
    const n = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : dt).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : dt;
      this._$Em = s;
      const A = y.fromAttribute(e, g.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? Et)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [l, u] of this._$Ep) this[l] = u;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(e)) : this._$EM();
    } catch (s) {
      throw t = !1, this._$EM(), s;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[et("elementProperties")] = /* @__PURE__ */ new Map(), q[et("finalized")] = /* @__PURE__ */ new Map(), mt == null || mt({ ReactiveElement: q }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const rt = globalThis, Yt = (r) => r, ft = rt.trustedTypes, Xt = ft ? ft.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, se = "$lit$", U = `lit$${Math.random().toFixed(9).slice(2)}$`, ae = "?" + U, Ke = `<${ae}>`, W = document, it = () => W.createComment(""), st = (r) => r === null || typeof r != "object" && typeof r != "function", St = Array.isArray, tr = (r) => St(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, tt = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, z = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, oe = /^(?:script|style|textarea|title)$/i, er = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), F = er(1), Z = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), B = W.createTreeWalker(W, 129);
function le(r, t) {
  if (!St(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const rr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = tt;
  for (let g = 0; g < e; g++) {
    const y = r[g];
    let A, w, b = -1, P = 0;
    for (; P < y.length && (u.lastIndex = P, w = u.exec(y), w !== null); ) P = u.lastIndex, u === tt ? w[1] === "!--" ? u = Qt : w[1] !== void 0 ? u = Kt : w[2] !== void 0 ? (oe.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = z) : w[3] !== void 0 && (u = z) : u === z ? w[0] === ">" ? (u = s ?? tt, b = -1) : w[1] === void 0 ? b = -2 : (b = u.lastIndex - w[2].length, A = w[1], u = w[3] === void 0 ? z : w[3] === '"' ? ee : te) : u === ee || u === te ? u = z : u === Qt || u === Kt ? u = tt : (u = z, s = void 0);
    const k = u === z && r[g + 1].startsWith("/>") ? " " : "";
    l += u === tt ? y + Ke : b >= 0 ? (n.push(A), y.slice(0, b) + se + y.slice(b) + U + k) : y + U + (b === -2 ? g : k);
  }
  return [le(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class at {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const g = t.length - 1, y = this.parts, [A, w] = rr(t, e);
    if (this.el = at.createElement(A, n), B.currentNode = this.el.content, e === 2 || e === 3) {
      const b = this.el.content.firstChild;
      b.replaceWith(...b.childNodes);
    }
    for (; (s = B.nextNode()) !== null && y.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const b of s.getAttributeNames()) if (b.endsWith(se)) {
          const P = w[u++], k = s.getAttribute(b).split(U), D = /([.?@])?(.*)/.exec(P);
          y.push({ type: 1, index: l, name: D[2], strings: k, ctor: D[1] === "." ? ir : D[1] === "?" ? sr : D[1] === "@" ? ar : ht }), s.removeAttribute(b);
        } else b.startsWith(U) && (y.push({ type: 6, index: l }), s.removeAttribute(b));
        if (oe.test(s.tagName)) {
          const b = s.textContent.split(U), P = b.length - 1;
          if (P > 0) {
            s.textContent = ft ? ft.emptyScript : "";
            for (let k = 0; k < P; k++) s.append(b[k], it()), B.nextNode(), y.push({ type: 2, index: ++l });
            s.append(b[P], it());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ae) y.push({ type: 2, index: l });
      else {
        let b = -1;
        for (; (b = s.data.indexOf(U, b + 1)) !== -1; ) y.push({ type: 7, index: l }), b += U.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = W.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Y(r, t, e = r, n) {
  var u, g;
  if (t === Z) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = st(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Y(r, s._$AS(r, t.values), s, n)), t;
}
class nr {
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
    const { el: { content: e }, parts: n } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? W).importNode(e, !0);
    B.currentNode = s;
    let l = B.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let A;
        y.type === 2 ? A = new ot(l, l.nextSibling, this, t) : y.type === 1 ? A = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (A = new or(l, this, t)), this._$AV.push(A), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = B.nextNode(), u++);
    }
    return B.currentNode = W, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class ot {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Y(this, t, e), st(t) ? t === M || t == null || t === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== M && st(this._$AH) ? this._$AA.nextSibling.data = t : this.T(W.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = at.createElement(le(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new nr(s, this), g = u.u(this.options);
      u.p(e), this.T(g), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new at(t)), e;
  }
  k(t) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new ot(this.O(it()), this.O(it()), this, this.options)) : n = e[s], n._$AI(l), s++;
    s < e.length && (this._$AR(n && n._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Yt(t).nextSibling;
      Yt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Y(this, t, e, 0), u = !st(t) || t !== this._$AH && t !== Z, u && (this._$AH = t);
    else {
      const g = t;
      let y, A;
      for (t = l[0], y = 0; y < l.length - 1; y++) A = Y(this, g[n + y], e, y), A === Z && (A = this._$AH[y]), u || (u = !st(A) || A !== this._$AH[y]), A === M ? t = M : t !== M && (t += (A ?? "") + l[y + 1]), this._$AH[y] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ir extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === M ? void 0 : t;
  }
}
class sr extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== M);
  }
}
class ar extends ht {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Y(this, t, e, 0) ?? M) === Z) return;
    const n = this._$AH, s = t === M && n !== M || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== M && (n === M || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class or {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Y(this, t);
  }
}
const $t = rt.litHtmlPolyfillSupport;
$t == null || $t(at, ot), (rt.litHtmlVersions ?? (rt.litHtmlVersions = [])).push("3.3.3");
const lr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new ot(t.insertBefore(it(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class nt extends q {
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = lr(e, this.renderRoot, this.renderOptions);
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
    return Z;
  }
}
var ne;
nt._$litElement$ = !0, nt.finalized = !0, (ne = G.litElementHydrateSupport) == null || ne.call(G, { LitElement: nt });
const bt = G.litElementPolyfillSupport;
bt == null || bt({ LitElement: nt });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: dt, reflect: !1, hasChanged: Et }, cr = (r = ur, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(g) {
      const y = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(u, y, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(g) {
      const y = this[u];
      t.call(this, g), this.requestUpdate(u, y, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function Q(r) {
  return (t, e) => typeof e == "object" ? cr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, R = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && dr(t, e, s), s;
};
const hr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:8px auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;padding:20px;border:1px solid #e5e7eb;border-radius:8px;'>",
    "<div style='font-size:24px;margin-bottom:8px;'>⚡</div>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:4px;'>Feature 1</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Short feature description goes here.</p>",
    "</div>",
    "<div style='flex:1;padding:20px;border:1px solid #e5e7eb;border-radius:8px;'>",
    "<div style='font-size:24px;margin-bottom:8px;'>🛡️</div>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:4px;'>Feature 2</h3>",
    "<p style='font-size:13px;color:#6b7280;margin:0;'>Short feature description goes here.</p>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Features"]
};
let T = class extends nt {
  constructor() {
    super(...arguments), this.title = "Core Highlights", this.lead = "Discover the main technical advantages and features of our platform.", this.featuresJson = '[{"icon":"⚡","title":"High Performance","desc":"Lightning fast speeds and response cycles."},{"icon":"🛡️","title":"Secure Vault","desc":"Bank-grade encryption by default."},{"icon":"⚙️","title":"Custom Flows","desc":"Automate anything with modular scripting."}]', this.splitImage = "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=60", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    return hr;
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
  get featuresJsonConfig() {
    return this.featuresJson;
  }
  set featuresJsonConfig(r) {
    this.featuresJson = r;
  }
  get splitImageConfig() {
    return this.splitImage;
  }
  set splitImageConfig(r) {
    this.splitImage = r;
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
  parseFeatures() {
    try {
      return JSON.parse(this.featuresJson);
    } catch {
      return [];
    }
  }
  render() {
    const r = this.parseFeatures();
    return F`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? F`
          <div class="grid-3col">
            ${r.map((t) => F`
              <div class="feat-card">
                <div class="feat-icon">${t.icon}</div>
                <h3>${t.title}</h3>
                <p class="feat-desc">${t.desc}</p>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? F`
          <div class="split-layout">
            <div class="split-col">
              <img class="split-img" src="${this.splitImage}" alt="featured graphics">
            </div>
            <div class="split-col">
              <div class="list-vertical">
                ${r.map((t) => F`
                  <div class="list-item">
                    <span class="list-icon">${t.icon}</span>
                    <div>
                      <h3>${t.title}</h3>
                      <p class="feat-desc">${t.desc}</p>
                    </div>
                  </div>
                `)}
              </div>
            </div>
          </div>
        ` : ""}

        ${this.layout === "layout-3" ? F`
          <div class="grid-4col">
            ${r.map((t) => F`
              <div class="flat-card">
                <h3>${t.icon} ${t.title}</h3>
                <p class="feat-desc">${t.desc}</p>
              </div>
            `)}
          </div>
        ` : ""}
      </section>
    `;
  }
};
T.styles = Ge`
    :host {
      display: block;
      width: 100%;
      --feat-bg: var(--uiv-surface-color, #ffffff);
      --feat-title-color: var(--uiv-text-color, #111827);
      --feat-lead-color: #4b5563;
      --feat-card-bg: var(--uiv-surface-color, #ffffff);
      --feat-card-border: var(--uiv-border-color, #e5e7eb);
      --feat-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--feat-bg);
      color: var(--feat-title-color);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --feat-bg: #111827;
      --feat-title-color: #f9fafb;
      --feat-lead-color: #9ca3af;
      --feat-card-bg: #1f2937;
      --feat-card-border: #374151;
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
      color: var(--feat-lead-color);
      margin: 0;
    }

    /* ─── Layout 1: 3-Column Card Grid ─── */
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
    }

    .feat-card {
      padding: 35px 25px;
      background: var(--feat-card-bg);
      border: 1px solid var(--feat-card-border);
      border-radius: 8px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
    }

    .feat-card:hover {
      transform: translateY(-2px);
      box-shadow: var(--uiv-shadow-depth, 0 10px 20px rgba(0,0,0,0.05));
    }

    .feat-icon {
      font-size: 2rem;
      color: var(--feat-accent);
      margin-bottom: 20px;
    }

    h3 {
      font-size: 1.25rem;
      font-weight: 700;
      margin: 0 0 8px 0;
    }

    .feat-desc {
      font-size: 0.94rem;
      line-height: 1.5;
      color: var(--feat-lead-color);
      margin: 0;
    }

    /* ─── Layout 2: Split Image-Left ─── */
    .split-layout {
      display: flex;
      align-items: center;
      gap: 50px;
    }

    .split-col {
      flex: 1;
    }

    .split-img {
      max-width: 100%;
      height: auto;
      border-radius: 12px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.06);
    }

    .list-vertical {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .list-item {
      display: flex;
      gap: 16px;
      align-items: flex-start;
      text-align: left;
    }

    .list-icon {
      font-size: 1.5rem;
      margin-top: 2px;
    }

    /* ─── Layout 3: 4-Column List ─── */
    .grid-4col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 24px;
    }

    .flat-card {
      padding: 16px;
      text-align: left;
      border-left: 3px solid var(--feat-accent);
    }

    .flat-card h3 {
      font-size: 1.1rem;
      margin-bottom: 4px;
    }

    /* Responsive */
    @media (max-width: 768px) {
      .split-layout {
        flex-direction: column !important;
      }
    }
  `;
R([
  Q({ type: String })
], T.prototype, "title", 2);
R([
  Q({ type: String })
], T.prototype, "lead", 2);
R([
  Q({ type: String, attribute: "features-json" })
], T.prototype, "featuresJson", 2);
R([
  Q({ type: String, attribute: "split-image" })
], T.prototype, "splitImage", 2);
R([
  Q({ type: String })
], T.prototype, "layout", 2);
R([
  Q({ type: String, attribute: "theme-style" })
], T.prototype, "themeStyle", 2);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Section Lead Copy",
    fieldMappings: "lead"
  })
], T.prototype, "leadConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Features JSON",
    fieldMappings: "featuresJson"
  })
], T.prototype, "featuresJsonConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Split Layout Image URL",
    fieldMappings: "splitImage"
  })
], T.prototype, "splitImageConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "3-Column Card Grid", value: "layout-1" },
      { label: "Split Image-Left Feature List", value: "layout-2" },
      { label: "4-Column Accent Bullet Cards", value: "layout-3" }
    ]
  })
], T.prototype, "layoutConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], T.prototype, "themeStyleConfig", 1);
T = R([
  He({
    name: "zero-block-feature",
    version: "1.0.0",
    title: "Feature Block",
    elementSelector: "zero-block-feature",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Le()
], T);
export {
  T as ZeroBlockFeature,
  hr as studioTemplate
};
