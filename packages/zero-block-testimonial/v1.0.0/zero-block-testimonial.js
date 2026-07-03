var De = Object.defineProperty;
var je = (r, t, e) => t in r ? De(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Gt = (r, t, e) => je(r, typeof t != "symbol" ? t + "" : t, e);
var Wt = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
var Bt;
(function(r) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Wt == "object" ? Wt : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = s(r);
    typeof e.Reflect < "u" && (n = s(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function s(y, A) {
      return function(b, w) {
        Object.defineProperty(y, b, { configurable: !0, writable: !0, value: w }), A && A(b, w);
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
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !m && !y, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return mt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return mt({ __proto__: null });
      } : function() {
        return mt({});
      },
      has: A ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), j = typeof WeakMap == "function" ? WeakMap : Re(), B = s ? Symbol.for("@reflect-metadata:registry") : void 0, at = Oe(), xt = Me(at);
    function ue(i, o, a, c) {
      if (g(a)) {
        if (!Dt(i))
          throw new TypeError();
        if (!jt(o))
          throw new TypeError();
        return _e(i, o);
      } else {
        if (!Dt(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(c) && !g(c) && !V(c))
          throw new TypeError();
        return V(c) && (c = void 0), a = D(a), $e(i, o, a, c);
      }
    }
    t("decorate", ue);
    function ce(i, o) {
      function a(c, v) {
        if (!x(c))
          throw new TypeError();
        if (!g(v) && !Se(v))
          throw new TypeError();
        Pt(i, o, c, v);
      }
      return a;
    }
    t("metadata", ce);
    function he(i, o, a, c) {
      if (!x(a))
        throw new TypeError();
      return g(c) || (c = D(c)), Pt(i, o, a, c);
    }
    t("defineMetadata", he);
    function de(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = D(a)), Ot(i, o, a);
    }
    t("hasMetadata", de);
    function fe(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = D(a)), pt(i, o, a);
    }
    t("hasOwnMetadata", fe);
    function pe(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = D(a)), Mt(i, o, a);
    }
    t("getMetadata", pe);
    function ye(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = D(a)), Ct(i, o, a);
    }
    t("getOwnMetadata", ye);
    function ve(i, o) {
      if (!x(i))
        throw new TypeError();
      return g(o) || (o = D(o)), Tt(i, o);
    }
    t("getMetadataKeys", ve);
    function me(i, o) {
      if (!x(i))
        throw new TypeError();
      return g(o) || (o = D(o)), Rt(i, o);
    }
    t("getOwnMetadataKeys", me);
    function ge(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (g(a) || (a = D(a)), !x(o))
        throw new TypeError();
      g(a) || (a = D(a));
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    t("deleteMetadata", ge);
    function _e(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!g(v) && !V(v)) {
          if (!jt(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $e(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], O = M(o, a, c);
        if (!g(O) && !V(O)) {
          if (!x(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Ot(i, o, a) {
      var c = pt(i, o, a);
      if (c)
        return !0;
      var v = vt(o);
      return V(v) ? !1 : Ot(i, v, a);
    }
    function pt(i, o, a) {
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Nt(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Mt(i, o, a) {
      var c = pt(i, o, a);
      if (c)
        return Ct(i, o, a);
      var v = vt(o);
      if (!V(v))
        return Mt(i, v, a);
    }
    function Ct(i, o, a) {
      var c = Y(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Pt(i, o, a, c) {
      var v = Y(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Tt(i, o) {
      var a = Rt(i, o), c = vt(i);
      if (c === null)
        return a;
      var v = Tt(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var M = new R(), O = [], _ = 0, h = a; _ < h.length; _++) {
        var d = h[_], f = M.has(d);
        f || (M.add(d), O.push(d));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var d = $[p], f = M.has(d);
        f || (M.add(d), O.push(d));
      }
      return O;
    }
    function Rt(i, o) {
      var a = Y(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function g(i) {
      return i === void 0;
    }
    function V(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function be(i, o) {
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
      var a = "string", c = It(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return Ae(i);
    }
    function Ae(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (lt(v)) {
          var c = v.call(i);
          if (!x(c))
            return c;
        }
        var a = i.valueOf;
        if (lt(a)) {
          var c = a.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Nt(i) {
      return !!i;
    }
    function Ee(i) {
      return "" + i;
    }
    function D(i) {
      var o = be(i);
      return we(o) ? o : Ee(o);
    }
    function Dt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function lt(i) {
      return typeof i == "function";
    }
    function jt(i) {
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
    function yt(i, o) {
      return i === o || i !== i && o !== o;
    }
    function It(i, o) {
      var a = i[o];
      if (a != null) {
        if (!lt(a))
          throw new TypeError();
        return a;
      }
    }
    function Ut(i) {
      var o = It(i, u);
      if (!lt(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function Ht(i) {
      return i.value;
    }
    function Lt(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function zt(i) {
      var o = i.return;
      o && o.call(i);
    }
    function vt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function xe() {
      var i;
      !g(B) && typeof e.Reflect < "u" && !(B in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Ce(e.Reflect));
      var o, a, c, v = new j(), M = {
        registerProvider: O,
        getProvider: h,
        setProvider: f
      };
      return M;
      function O(p) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case g(o):
            o = p;
            break;
          case o === p:
            break;
          case g(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new R()), c.add(p);
            break;
        }
      }
      function _(p, $) {
        if (!g(o)) {
          if (o.isProviderFor(p, $))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(p, $))
              return o;
            if (!g(c))
              for (var E = Ut(c); ; ) {
                var S = Lt(E);
                if (!S)
                  return;
                var k = Ht(S);
                if (k.isProviderFor(p, $))
                  return zt(E), k;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, $))
          return i;
      }
      function h(p, $) {
        var E = v.get(p), S;
        return g(E) || (S = E.get($)), g(S) && (S = _(p, $), g(S) || (g(E) && (E = new P(), v.set(p, E)), E.set($, S))), S;
      }
      function d(p) {
        if (g(p))
          throw new TypeError();
        return o === p || a === p || !g(c) && c.has(p);
      }
      function f(p, $, E) {
        if (!d(E))
          throw new Error("Metadata provider not registered.");
        var S = h(p, $);
        if (S !== E) {
          if (!g(S))
            return !1;
          var k = v.get(p);
          g(k) && (k = new P(), v.set(p, k)), k.set($, E);
        }
        return !0;
      }
    }
    function Oe() {
      var i;
      return !g(B) && x(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[B]), g(i) && (i = xe()), !g(B) && x(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, B, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var o = new j(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: h
      };
      return at.registerProvider(a), a;
      function c(d, f, p) {
        var $ = o.get(d), E = !1;
        if (g($)) {
          if (!p)
            return;
          $ = new P(), o.set(d, $), E = !0;
        }
        var S = $.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new P(), $.set(f, S), !i.setProvider(d, f, a))
            throw $.delete(f), E && o.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        return g($) ? !1 : Nt($.has(d));
      }
      function M(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(d);
      }
      function O(d, f, p, $) {
        var E = c(
          p,
          $,
          /*Create*/
          !0
        );
        E.set(d, f);
      }
      function _(d, f) {
        var p = [], $ = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (g($))
          return p;
        for (var E = $.keys(), S = Ut(E), k = 0; ; ) {
          var qt = Lt(S);
          if (!qt)
            return p.length = k, p;
          var ke = Ht(qt);
          try {
            p[k] = ke;
          } catch (Ne) {
            try {
              zt(S);
            } finally {
              throw Ne;
            }
          }
          k++;
        }
      }
      function h(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (g($) || !$.delete(d))
          return !1;
        if ($.size === 0) {
          var E = o.get(f);
          g(E) || (E.delete(p), E.size === 0 && o.delete(E));
        }
        return !0;
      }
    }
    function Ce(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, O = new j(), _ = {
        isProviderFor: function(h, d) {
          var f = O.get(h);
          return !g(f) && f.has(d) ? !0 : v(h, d).length ? (g(f) && (f = new R(), O.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return _;
    }
    function Y(i, o, a) {
      var c = at.getProvider(i, o);
      if (!g(c))
        return c;
      if (a) {
        if (at.setProvider(i, o, xt))
          return xt;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function _(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[u] = function() {
            return this;
          }, _.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), h;
          }, _.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: h, done: !0 };
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
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, _.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, _.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, yt(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(h, d) {
            if (!yt(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (yt(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return c;
      function v(_, h) {
        return _;
      }
      function M(_, h) {
        return h;
      }
      function O(_, h) {
        return [_, h];
      }
    }
    function Te() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new P();
          }
          return Object.defineProperty(o.prototype, "size", {
            get: function() {
              return this._map.size;
            },
            enumerable: !0,
            configurable: !0
          }), o.prototype.has = function(a) {
            return this._map.has(a);
          }, o.prototype.add = function(a) {
            return this._map.set(a, a), this;
          }, o.prototype.delete = function(a) {
            return this._map.delete(a);
          }, o.prototype.clear = function() {
            this._map.clear();
          }, o.prototype.keys = function() {
            return this._map.keys();
          }, o.prototype.values = function() {
            return this._map.keys();
          }, o.prototype.entries = function() {
            return this._map.entries();
          }, o.prototype["@@iterator"] = function() {
            return this.keys();
          }, o.prototype[u] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function Re() {
      var i = 16, o = b.create(), a = c();
      return (
        /** @class */
        function() {
          function h() {
            this._key = c();
          }
          return h.prototype.has = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? b.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? b.get(f, this._key) : void 0;
          }, h.prototype.set = function(d, f) {
            var p = v(
              d,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, h.prototype.delete = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, h.prototype.clear = function() {
            this._key = c();
          }, h;
        }()
      );
      function c() {
        var h;
        do
          h = "@@WeakMap@@" + _();
        while (b.has(o, h));
        return o[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: b.create() });
        }
        return h[a];
      }
      function M(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function O(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : M(d, h), d;
        }
        return M(new Array(h), h);
      }
      function _() {
        var h = O(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function mt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Bt || (Bt = {}));
function Ie(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function Ue(r) {
  return function(t) {
    if (Ie(r)) {
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
  return Ue(r);
}
function Le(r) {
  return function(t) {
    class e extends t {
      constructor() {
        super(...arguments);
        Gt(this, "_stylesApplied", !1);
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
          const b = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((P) => b.insertRule(P.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, b]);
        } else if (l) {
          const b = l.cloneNode(!0);
          y.appendChild(b);
        }
        u.forEach((b) => {
          const w = b.cloneNode(!0);
          y.appendChild(w);
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
function qe(r) {
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
function it(r) {
  return qe(r);
}
var q;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(q || (q = {}));
var G;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(G || (G = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ct = globalThis, bt = ct.ShadowRoot && (ct.ShadyCSS === void 0 || ct.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (bt && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Vt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Vt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const Ge = (r) => new ie(typeof r == "string" ? r : r + "", void 0, At), We = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new ie(e, r, At);
}, Be = (r, t) => {
  if (bt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), s = ct.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = bt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Ge(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: Fe, getOwnPropertyDescriptor: Je, getOwnPropertyNames: Ze, getOwnPropertySymbols: Ye, getPrototypeOf: Xe } = Object, U = globalThis, Jt = U.trustedTypes, Qe = Jt ? Jt.emptyScript : "", gt = U.reactiveElementPolyfillSupport, Q = (r, t) => r, ht = { toAttribute(r, t) {
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
} }, Et = (r, t) => !Ve(r, t), Zt = { attribute: !0, type: String, converter: ht, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), U.litPropertyMetadata ?? (U.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let F = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), s = this.getPropertyDescriptor(t, n, e);
      s !== void 0 && Fe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: s, set: l } = Je(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const t = Xe(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
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
      for (const s of n) e.unshift(Ft(s));
    } else t !== void 0 && e.push(Ft(t));
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
    return Be(t, this.constructor.elementStyles), t;
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ht).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = n.getPropertyOptions(s), y = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ht;
      this._$Em = s;
      const A = y.fromAttribute(e, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? Et)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
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
        const { wrapped: m } = u, y = this[l];
        m !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
F.elementStyles = [], F.shadowRootOptions = { mode: "open" }, F[Q("elementProperties")] = /* @__PURE__ */ new Map(), F[Q("finalized")] = /* @__PURE__ */ new Map(), gt == null || gt({ ReactiveElement: F }), (U.reactiveElementVersions ?? (U.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = globalThis, Yt = (r) => r, dt = K.trustedTypes, Xt = dt ? dt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, se = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, oe = "?" + I, Ke = `<${oe}>`, W = document, et = () => W.createComment(""), rt = (r) => r === null || typeof r != "object" && typeof r != "function", St = Array.isArray, tr = (r) => St(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _t = `[ 	
\f\r]`, X = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, H = RegExp(`>|${_t}(?:([^\\s"'>=/]+)(${_t}*=${_t}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, ae = /^(?:script|style|textarea|title)$/i, er = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), ut = er(1), J = Symbol.for("lit-noChange"), C = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), L = W.createTreeWalker(W, 129);
function le(r, t) {
  if (!St(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xt !== void 0 ? Xt.createHTML(t) : t;
}
const rr = (r, t) => {
  const e = r.length - 1, n = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = X;
  for (let m = 0; m < e; m++) {
    const y = r[m];
    let A, b, w = -1, P = 0;
    for (; P < y.length && (u.lastIndex = P, b = u.exec(y), b !== null); ) P = u.lastIndex, u === X ? b[1] === "!--" ? u = Qt : b[1] !== void 0 ? u = Kt : b[2] !== void 0 ? (ae.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = H) : b[3] !== void 0 && (u = H) : u === H ? b[0] === ">" ? (u = s ?? X, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? H : b[3] === '"' ? ee : te) : u === ee || u === te ? u = H : u === Qt || u === Kt ? u = X : (u = H, s = void 0);
    const R = u === H && r[m + 1].startsWith("/>") ? " " : "";
    l += u === X ? y + Ke : w >= 0 ? (n.push(A), y.slice(0, w) + se + y.slice(w) + I + R) : y + I + (w === -2 ? m : R);
  }
  return [le(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class nt {
  constructor({ strings: t, _$litType$: e }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, y = this.parts, [A, b] = rr(t, e);
    if (this.el = nt.createElement(A, n), L.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = L.nextNode()) !== null && y.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(se)) {
          const P = b[u++], R = s.getAttribute(w).split(I), j = /([.?@])?(.*)/.exec(P);
          y.push({ type: 1, index: l, name: j[2], strings: R, ctor: j[1] === "." ? ir : j[1] === "?" ? sr : j[1] === "@" ? or : ft }), s.removeAttribute(w);
        } else w.startsWith(I) && (y.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ae.test(s.tagName)) {
          const w = s.textContent.split(I), P = w.length - 1;
          if (P > 0) {
            s.textContent = dt ? dt.emptyScript : "";
            for (let R = 0; R < P; R++) s.append(w[R], et()), L.nextNode(), y.push({ type: 2, index: ++l });
            s.append(w[P], et());
          }
        }
      } else if (s.nodeType === 8) if (s.data === oe) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(I, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += I.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = W.createElement("template");
    return n.innerHTML = t, n;
  }
}
function Z(r, t, e = r, n) {
  var u, m;
  if (t === J) return t;
  let s = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = rt(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = s : e._$Cl = s), s !== void 0 && (t = Z(r, s._$AS(r, t.values), s, n)), t;
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
    L.currentNode = s;
    let l = L.nextNode(), u = 0, m = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let A;
        y.type === 2 ? A = new st(l, l.nextSibling, this, t) : y.type === 1 ? A = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (A = new ar(l, this, t)), this._$AV.push(A), y = n[++m];
      }
      u !== (y == null ? void 0 : y.index) && (l = L.nextNode(), u++);
    }
    return L.currentNode = W, s;
  }
  p(t) {
    let e = 0;
    for (const n of this._$AV) n !== void 0 && (n.strings !== void 0 ? (n._$AI(t, n, e), e += n.strings.length - 2) : n._$AI(t[e])), e++;
  }
}
class st {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, n, s) {
    this.type = 2, this._$AH = C, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Z(this, t, e), rt(t) ? t === C || t == null || t === "" ? (this._$AH !== C && this._$AR(), this._$AH = C) : t !== this._$AH && t !== J && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== C && rt(this._$AH) ? this._$AA.nextSibling.data = t : this.T(W.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, s = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = nt.createElement(le(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new nr(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new nt(t)), e;
  }
  k(t) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, s = 0;
    for (const l of t) s === e.length ? e.push(n = new st(this.O(et()), this.O(et()), this, this.options)) : n = e[s], n._$AI(l), s++;
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
class ft {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, s, l) {
    this.type = 1, this._$AH = C, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = C;
  }
  _$AI(t, e = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Z(this, t, e, 0), u = !rt(t) || t !== this._$AH && t !== J, u && (this._$AH = t);
    else {
      const m = t;
      let y, A;
      for (t = l[0], y = 0; y < l.length - 1; y++) A = Z(this, m[n + y], e, y), A === J && (A = this._$AH[y]), u || (u = !rt(A) || A !== this._$AH[y]), A === C ? t = C : t !== C && (t += (A ?? "") + l[y + 1]), this._$AH[y] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === C ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ir extends ft {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === C ? void 0 : t;
  }
}
class sr extends ft {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== C);
  }
}
class or extends ft {
  constructor(t, e, n, s, l) {
    super(t, e, n, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Z(this, t, e, 0) ?? C) === J) return;
    const n = this._$AH, s = t === C && n !== C || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== C && (n === C || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ar {
  constructor(t, e, n) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = n;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Z(this, t);
  }
}
const $t = K.litHtmlPolyfillSupport;
$t == null || $t(nt, st), (K.litHtmlVersions ?? (K.litHtmlVersions = [])).push("3.3.3");
const lr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = s = new st(t.insertBefore(et(), l), l, void 0, e ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const z = globalThis;
class tt extends F {
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
    return J;
  }
}
var ne;
tt._$litElement$ = !0, tt.finalized = !0, (ne = z.litElementHydrateSupport) == null || ne.call(z, { LitElement: tt });
const wt = z.litElementPolyfillSupport;
wt == null || wt({ LitElement: tt });
(z.litElementVersions ?? (z.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: ht, reflect: !1, hasChanged: Et }, cr = (r = ur, t, e) => {
  const { kind: n, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(m) {
      const y = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(u, y, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(m) {
      const y = this[u];
      t.call(this, m), this.requestUpdate(u, y, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function ot(r) {
  return (t, e) => typeof e == "object" ? cr(r, t, e) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, t, e);
}
var hr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, N = (r, t, e, n) => {
  for (var s = n > 1 ? void 0 : n ? dr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(t, e, s) : u(s)) || s);
  return n && s && hr(t, e, s), s;
};
const fr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#f9fafb;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;padding:24px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff;text-align:left;'>",
    "<div style='color:#f59e0b;font-size:18px;margin-bottom:12px;'>★★★★★</div>",
    `<p style='font-size:14px;color:#4b5563;line-height:1.5;font-style:italic;margin-bottom:16px;'>"Outstanding quality and ease of integration."</p>`,
    "<div style='display:flex;align-items:center;gap:10px;'>",
    "<div style='width:40px;height:40px;border-radius:50%;background:#e5e7eb;'></div>",
    "<div>",
    "<h4 style='font-size:14px;font-weight:600;margin:0;'>Jane Miller</h4>",
    "<p style='font-size:12px;color:#6b7280;margin:0;'>Product Owner</p>",
    "</div>",
    "</div>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Testimonials"]
};
let T = class extends tt {
  constructor() {
    super(...arguments), this.title = "What Customers Say", this.lead = "Read reviews from some of our active global product teams.", this.testimonialsJson = '[{"quote":"This component library completely speeds up our layout deployments. Highly customizable and professional.","rating":5,"avatar":"https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150","name":"Sarah Jenkins","role":"Tech Lead, Acme Corp"},{"quote":"Outstanding design aesthetic natively supporting dark themes and variables. Fits our requirements perfectly.","rating":5,"avatar":"https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150","name":"Marcus Aurelius","role":"Lead Architect, Roma Labs"},{"quote":"Very lightweight components that load instantly without layout shifting. Highly recommended!","rating":4,"avatar":"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150","name":"Elena Rostova","role":"Creative Lead, Cybernetics Ltd"}]', this.layout = "layout-1", this.themeStyle = "light";
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
  get testimonialsJsonConfig() {
    return this.testimonialsJson;
  }
  set testimonialsJsonConfig(r) {
    this.testimonialsJson = r;
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
  parseReviews() {
    try {
      return JSON.parse(this.testimonialsJson);
    } catch {
      return [];
    }
  }
  renderStars(r) {
    const t = Math.max(1, Math.min(5, Math.floor(r)));
    return "★".repeat(t) + "☆".repeat(5 - t);
  }
  render() {
    let r = this.parseReviews();
    return this.layout === "layout-2" && r.length > 0 && (r = [r[0]]), ut`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? ut`
          <div class="grid-3col">
            ${r.map((t) => ut`
              <div class="test-card">
                <div class="stars">${this.renderStars(t.rating)}</div>
                <p class="quote-text">"${t.quote}"</p>
                <div class="reviewer">
                  <div class="rev-avatar">
                    <img class="rev-img" src="${t.avatar}" alt="${t.name}">
                  </div>
                  <div>
                    <h4>${t.name}</h4>
                    <p class="rev-role">${t.role}</p>
                  </div>
                </div>
              </div>
            `)}
          </div>
        ` : ""}

        ${this.layout === "layout-2" && r.length > 0 ? ut`
          <div class="spotlight">
            <div class="stars" style="font-size: 1.5rem;">${this.renderStars(r[0].rating)}</div>
            <p class="quote-text">"${r[0].quote}"</p>
            <div class="reviewer">
              <div class="rev-avatar">
                <img class="rev-img" src="${r[0].avatar}" alt="${r[0].name}">
              </div>
              <h4 style="font-size: 1.15rem; margin-top: 8px;">${r[0].name}</h4>
              <p class="rev-role" style="font-size: 0.9rem;">${r[0].role}</p>
            </div>
          </div>
        ` : ""}
      </section>
    `;
  }
};
T.styles = We`
    :host {
      display: block;
      width: 100%;
      --test-bg: var(--uiv-surface-color, #ffffff);
      --test-text: var(--uiv-text-color, #111827);
      --test-lead: #4b5563;
      --test-card-bg: var(--uiv-surface-color, #ffffff);
      --test-card-border: var(--uiv-border-color, #e5e7eb);
      --test-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--test-bg);
      color: var(--test-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --test-bg: #111827;
      --test-text: #f9fafb;
      --test-lead: #9ca3af;
      --test-card-bg: #1f2937;
      --test-card-border: #374151;
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
      color: var(--test-lead);
      margin: 0;
    }

    /* ─── Layout 1: 3-Column Reviews Grid ─── */
    .grid-3col {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(285px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .test-card {
      padding: 30px;
      background: var(--test-card-bg);
      border: 1px solid var(--test-card-border);
      border-radius: 12px;
      text-align: left;
      transition: transform 0.2s ease;
    }

    .test-card:hover {
      transform: translateY(-2px);
    }

    .stars {
      color: #fbbf24;
      font-size: 1.15rem;
      margin-bottom: 15px;
    }

    .quote-text {
      font-size: 0.96rem;
      line-height: 1.6;
      color: var(--test-lead);
      font-style: italic;
      margin: 0 0 24px 0;
    }

    .reviewer {
      display: flex;
      align-items: center;
      gap: 12px;
    }

    .rev-avatar {
      width: 44px;
      height: 44px;
      border-radius: 50%;
      overflow: hidden;
      border: 2px solid var(--test-card-border);
    }

    .rev-img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    h4 {
      font-size: 0.95rem;
      font-weight: 700;
      margin: 0 0 2px 0;
    }

    .rev-role {
      font-size: 0.8rem;
      color: var(--test-lead);
      margin: 0;
    }

    /* ─── Layout 2: Spotlight Quote ─── */
    .spotlight {
      max-width: 800px;
      margin: 0 auto;
      text-align: center;
    }

    .spotlight .quote-text {
      font-size: 1.45rem;
      line-height: 1.6;
      margin-bottom: 30px;
    }

    .spotlight .reviewer {
      justify-content: center;
      flex-direction: column;
      gap: 8px;
    }

    .spotlight .rev-avatar {
      width: 64px;
      height: 64px;
    }
  `;
N([
  ot({ type: String })
], T.prototype, "title", 2);
N([
  ot({ type: String })
], T.prototype, "lead", 2);
N([
  ot({ type: String, attribute: "testimonials-json" })
], T.prototype, "testimonialsJson", 2);
N([
  ot({ type: String })
], T.prototype, "layout", 2);
N([
  ot({ type: String, attribute: "theme-style" })
], T.prototype, "themeStyle", 2);
N([
  it({
    attributeType: G.PROPERTY,
    uiComponentType: q.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 1);
N([
  it({
    attributeType: G.PROPERTY,
    uiComponentType: q.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
], T.prototype, "leadConfig", 1);
N([
  it({
    attributeType: G.PROPERTY,
    uiComponentType: q.TEXT_INPUT,
    displayLabel: "Reviews JSON List",
    fieldMappings: "testimonialsJson"
  })
], T.prototype, "testimonialsJsonConfig", 1);
N([
  it({
    attributeType: G.PROPERTY,
    uiComponentType: q.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "3-Column Review Cards Grid", value: "layout-1" },
      { label: "Single Spotlight Review", value: "layout-2" }
    ]
  })
], T.prototype, "layoutConfig", 1);
N([
  it({
    attributeType: G.PROPERTY,
    uiComponentType: q.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], T.prototype, "themeStyleConfig", 1);
T = N([
  He({
    name: "zero-block-testimonial",
    version: "1.0.0",
    title: "Testimonial Block",
    elementSelector: "zero-block-testimonial",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Le()
], T);
export {
  T as ZeroBlockTestimonial,
  fr as studioTemplate
};
