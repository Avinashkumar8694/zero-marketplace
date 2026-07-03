var Ne = Object.defineProperty;
var Ie = (n, t, e) => t in n ? Ne(n, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : n[t] = e;
var Wt = (n, t, e) => Ie(n, typeof t != "symbol" ? t + "" : t, e);
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
var Vt;
(function(n) {
  (function(t) {
    var e = typeof globalThis == "object" ? globalThis : typeof Gt == "object" ? Gt : typeof self == "object" ? self : typeof this == "object" ? this : m(), r = s(n);
    typeof e.Reflect < "u" && (r = s(e.Reflect, r)), t(r, e), typeof e.Reflect > "u" && (e.Reflect = n);
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
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, A = !m && !y, b = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
      },
      has: A ? function(i, o) {
        return r.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: A ? function(i, o) {
        return r.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, w = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Te(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xe(), I = typeof WeakMap == "function" ? WeakMap : Re(), V = s ? Symbol.for("@reflect-metadata:registry") : void 0, at = Me(), Ct = Oe(at);
    function ue(i, o, a, c) {
      if (g(a)) {
        if (!Nt(i))
          throw new TypeError();
        if (!It(o))
          throw new TypeError();
        return _e(i, o);
      } else {
        if (!Nt(i))
          throw new TypeError();
        if (!C(o))
          throw new TypeError();
        if (!C(c) && !g(c) && !F(c))
          throw new TypeError();
        return F(c) && (c = void 0), a = N(a), $e(i, o, a, c);
      }
    }
    t("decorate", ue);
    function ce(i, o) {
      function a(c, v) {
        if (!C(c))
          throw new TypeError();
        if (!g(v) && !Se(v))
          throw new TypeError();
        Tt(i, o, c, v);
      }
      return a;
    }
    t("metadata", ce);
    function he(i, o, a, c) {
      if (!C(a))
        throw new TypeError();
      return g(c) || (c = N(c)), Tt(i, o, a, c);
    }
    t("defineMetadata", he);
    function de(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Mt(i, o, a);
    }
    t("hasMetadata", de);
    function fe(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = N(a)), ft(i, o, a);
    }
    t("hasOwnMetadata", fe);
    function pe(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Ot(i, o, a);
    }
    t("getMetadata", pe);
    function ye(i, o, a) {
      if (!C(o))
        throw new TypeError();
      return g(a) || (a = N(a)), Pt(i, o, a);
    }
    t("getOwnMetadata", ye);
    function ve(i, o) {
      if (!C(i))
        throw new TypeError();
      return g(o) || (o = N(o)), xt(i, o);
    }
    t("getMetadataKeys", ve);
    function me(i, o) {
      if (!C(i))
        throw new TypeError();
      return g(o) || (o = N(o)), Rt(i, o);
    }
    t("getOwnMetadataKeys", me);
    function ge(i, o, a) {
      if (!C(o))
        throw new TypeError();
      if (g(a) || (a = N(a)), !C(o))
        throw new TypeError();
      g(a) || (a = N(a));
      var c = Q(
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
        if (!g(v) && !F(v)) {
          if (!It(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function $e(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var O = i[v], M = O(o, a, c);
        if (!g(M) && !F(M)) {
          if (!C(M))
            throw new TypeError();
          c = M;
        }
      }
      return c;
    }
    function Mt(i, o, a) {
      var c = ft(i, o, a);
      if (c)
        return !0;
      var v = yt(o);
      return F(v) ? !1 : Mt(i, v, a);
    }
    function ft(i, o, a) {
      var c = Q(
        o,
        a,
        /*Create*/
        !1
      );
      return g(c) ? !1 : Ut(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Ot(i, o, a) {
      var c = ft(i, o, a);
      if (c)
        return Pt(i, o, a);
      var v = yt(o);
      if (!F(v))
        return Ot(i, v, a);
    }
    function Pt(i, o, a) {
      var c = Q(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Tt(i, o, a, c) {
      var v = Q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function xt(i, o) {
      var a = Rt(i, o), c = yt(i);
      if (c === null)
        return a;
      var v = xt(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var O = new k(), M = [], _ = 0, h = a; _ < h.length; _++) {
        var d = h[_], f = O.has(d);
        f || (O.add(d), M.push(d));
      }
      for (var p = 0, $ = v; p < $.length; p++) {
        var d = $[p], f = O.has(d);
        f || (O.add(d), M.push(d));
      }
      return M;
    }
    function Rt(i, o) {
      var a = Q(
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
    function F(i) {
      return i === null;
    }
    function we(i) {
      return typeof i == "symbol";
    }
    function C(i) {
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
      var a = "string", c = Dt(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (C(v))
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
          if (!C(c))
            return c;
        }
        var a = i.valueOf;
        if (lt(a)) {
          var c = a.call(i);
          if (!C(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ut(i) {
      return !!i;
    }
    function Ee(i) {
      return "" + i;
    }
    function N(i) {
      var o = be(i);
      return we(o) ? o : Ee(o);
    }
    function Nt(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function lt(i) {
      return typeof i == "function";
    }
    function It(i) {
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
    function pt(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Dt(i, o) {
      var a = i[o];
      if (a != null) {
        if (!lt(a))
          throw new TypeError();
        return a;
      }
    }
    function jt(i) {
      var o = Dt(i, u);
      if (!lt(o))
        throw new TypeError();
      var a = o.call(i);
      if (!C(a))
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
    function yt(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === w || o !== w)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function Ce() {
      var i;
      !g(V) && typeof e.Reflect < "u" && !(V in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Pe(e.Reflect));
      var o, a, c, v = new I(), O = {
        registerProvider: M,
        getProvider: h,
        setProvider: f
      };
      return O;
      function M(p) {
        if (!Object.isExtensible(O))
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
            c === void 0 && (c = new k()), c.add(p);
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
              for (var E = jt(c); ; ) {
                var S = Lt(E);
                if (!S)
                  return;
                var U = Ht(S);
                if (U.isProviderFor(p, $))
                  return zt(E), U;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, $))
          return i;
      }
      function h(p, $) {
        var E = v.get(p), S;
        return g(E) || (S = E.get($)), g(S) && (S = _(p, $), g(S) || (g(E) && (E = new T(), v.set(p, E)), E.set($, S))), S;
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
          var U = v.get(p);
          g(U) && (U = new T(), v.set(p, U)), U.set($, E);
        }
        return !0;
      }
    }
    function Me() {
      var i;
      return !g(V) && C(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[V]), g(i) && (i = Ce()), !g(V) && C(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, V, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Oe(i) {
      var o = new I(), a = {
        isProviderFor: function(d, f) {
          var p = o.get(d);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: M,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: h
      };
      return at.registerProvider(a), a;
      function c(d, f, p) {
        var $ = o.get(d), E = !1;
        if (g($)) {
          if (!p)
            return;
          $ = new T(), o.set(d, $), E = !0;
        }
        var S = $.get(f);
        if (g(S)) {
          if (!p)
            return;
          if (S = new T(), $.set(f, S), !i.setProvider(d, f, a))
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
        return g($) ? !1 : Ut($.has(d));
      }
      function O(d, f, p) {
        var $ = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g($))
          return $.get(d);
      }
      function M(d, f, p, $) {
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
        for (var E = $.keys(), S = jt(E), U = 0; ; ) {
          var Bt = Lt(S);
          if (!Bt)
            return p.length = U, p;
          var ke = Ht(Bt);
          try {
            p[U] = ke;
          } catch (Ue) {
            try {
              zt(S);
            } finally {
              throw Ue;
            }
          }
          U++;
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
    function Pe(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, O = i.deleteMetadata, M = new I(), _ = {
        isProviderFor: function(h, d) {
          var f = M.get(h);
          return !g(f) && f.has(d) ? !0 : v(h, d).length ? (g(f) && (f = new k(), M.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: O
      };
      return _;
    }
    function Q(i, o, a) {
      var c = at.getProvider(i, o);
      if (!g(c))
        return c;
      if (a) {
        if (at.setProvider(i, o, Ct))
          return Ct;
        throw new Error("Illegal state.");
      }
    }
    function Te() {
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
              return this._keys.length--, this._values.length--, pt(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, M);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(h, d) {
            if (!pt(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pt(this._keys[f], h)) {
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
      function O(_, h) {
        return h;
      }
      function M(_, h) {
        return [_, h];
      }
    }
    function xe() {
      var i = (
        /** @class */
        function() {
          function o() {
            this._map = new T();
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
        if (!r.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: b.create() });
        }
        return h[a];
      }
      function O(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function M(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : O(d, h), d;
        }
        return O(new Array(h), h);
      }
      function _() {
        var h = M(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function vt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Vt || (Vt = {}));
function De(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function je(n) {
  return function(t) {
    if (De(n)) {
      const e = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      if (Reflect.defineMetadata("ZeroComponent", e, t.prototype), globalThis.customElements) {
        const r = `${n.elementSelector}-${n.version}`;
        if (!customElements.get(r))
          try {
            customElements.define(r, t);
          } catch {
            try {
              customElements.define(r, class extends t {
              });
            } catch (l) {
              console.error(`[ZeroAnnotations] Failed to define custom element ${r}:`, l);
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
function He(n) {
  return je(n);
}
function Le(n) {
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
        var A;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const b = new CSSStyleSheet(), w = (A = l.sheet) == null ? void 0 : A.cssRules;
          w && (Array.from(w).forEach((T) => b.insertRule(T.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, b]);
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
function ze(n) {
  var e;
  if (((e = n == null ? void 0 : n.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Be(n) {
  return function(t, e) {
    try {
      ze(n);
      const r = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let s = !0;
      if (typeof e == "string") {
        try {
          s = typeof t[e] != "function";
        } catch {
          s = !0;
        }
        s && (n.fieldMappings = n.fieldMappings ?? e);
      }
      r.push(n), Reflect.defineMetadata("ZeroAttribute", r, t);
    } catch (r) {
      console.log(r);
    }
  };
}
function X(n) {
  return Be(n);
}
var H;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown", n.LAYOUT_PICKER = "layout-picker", n.RESPONSIVE_OVERRIDE = "responsive-override", n.IMAGE_PICKER = "image-picker", n.CHIPS = "chips";
})(H || (H = {}));
var L;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(L || (L = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = globalThis, bt = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), Ft = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, e, r) {
    if (this._$cssResult$ = !0, r !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (bt && t === void 0) {
      const r = e !== void 0 && e.length === 1;
      r && (t = Ft.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), r && Ft.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (n) => new ie(typeof n == "string" ? n : n + "", void 0, At), Ge = (n, ...t) => {
  const e = n.length === 1 ? n[0] : t.reduce((r, s, l) => r + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[l + 1], n[0]);
  return new ie(e, n, At);
}, Ve = (n, t) => {
  if (bt) n.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const r = document.createElement("style"), s = ut.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = e.cssText, n.appendChild(r);
  }
}, qt = bt ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const r of t.cssRules) e += r.cssText;
  return We(e);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Fe, defineProperty: qe, getOwnPropertyDescriptor: Ze, getOwnPropertyNames: Ye, getOwnPropertySymbols: Xe, getPrototypeOf: Je } = Object, j = globalThis, Zt = j.trustedTypes, Qe = Zt ? Zt.emptyScript : "", mt = j.reactiveElementPolyfillSupport, tt = (n, t) => n, ct = { toAttribute(n, t) {
  switch (t) {
    case Boolean:
      n = n ? Qe : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, t) {
  let e = n;
  switch (t) {
    case Boolean:
      e = n !== null;
      break;
    case Number:
      e = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        e = JSON.parse(n);
      } catch {
        e = null;
      }
  }
  return e;
} }, Et = (n, t) => !Fe(n, t), Yt = { attribute: !0, type: String, converter: ct, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), j.litPropertyMetadata ?? (j.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let q = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Yt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(t, r, e);
      s !== void 0 && qe(this.prototype, t, s);
    }
  }
  static getPropertyDescriptor(t, e, r) {
    const { get: s, set: l } = Ze(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: s, set(u) {
      const m = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, m, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Yt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(tt("elementProperties"))) return;
    const t = Je(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(tt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(tt("properties"))) {
      const e = this.properties, r = [...Ye(e), ...Xe(e)];
      for (const s of r) this.createProperty(s, e[s]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [r, s] of e) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, r] of this.elementProperties) {
      const s = this._$Eu(e, r);
      s !== void 0 && this._$Eh.set(s, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const r = new Set(t.flat(1 / 0).reverse());
      for (const s of r) e.unshift(qt(s));
    } else t !== void 0 && e.push(qt(t));
    return e;
  }
  static _$Eu(t, e) {
    const r = e.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof t == "string" ? t.toLowerCase() : void 0;
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
    for (const r of e.keys()) this.hasOwnProperty(r) && (t.set(r, this[r]), delete this[r]);
    t.size > 0 && (this._$Ep = t);
  }
  createRenderRoot() {
    const t = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Ve(t, this.constructor.elementStyles), t;
  }
  connectedCallback() {
    var t;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostConnected) == null ? void 0 : r.call(e);
    });
  }
  enableUpdating(t) {
  }
  disconnectedCallback() {
    var t;
    (t = this._$EO) == null || t.forEach((e) => {
      var r;
      return (r = e.hostDisconnected) == null ? void 0 : r.call(e);
    });
  }
  attributeChangedCallback(t, e, r) {
    this._$AK(t, r);
  }
  _$ET(t, e) {
    var l;
    const r = this.constructor.elementProperties.get(t), s = this.constructor._$Eu(t, r);
    if (s !== void 0 && r.reflect === !0) {
      const u = (((l = r.converter) == null ? void 0 : l.toAttribute) !== void 0 ? r.converter : ct).toAttribute(e, r.type);
      this._$Em = t, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const r = this.constructor, s = r._$Eh.get(t);
    if (s !== void 0 && this._$Em !== s) {
      const m = r.getPropertyOptions(s), y = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ct;
      this._$Em = s;
      const A = y.fromAttribute(e, m.type);
      this[s] = A ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? A, this._$Em = null;
    }
  }
  requestUpdate(t, e, r, s = !1, l) {
    var u;
    if (t !== void 0) {
      const m = this.constructor;
      if (s === !1 && (l = this[t]), r ?? (r = m.getPropertyOptions(t)), !((r.hasChanged ?? Et)(l, e) || r.useDefault && r.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(m._$Eu(t, r)))) return;
      this.C(t, e, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: r, reflect: s, wrapped: l }, u) {
    r && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || r || (e = void 0), this._$AL.set(t, e)), s === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
    var r;
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
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (r = this._$EO) == null || r.forEach((s) => {
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
    (e = this._$EO) == null || e.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
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
q.elementStyles = [], q.shadowRootOptions = { mode: "open" }, q[tt("elementProperties")] = /* @__PURE__ */ new Map(), q[tt("finalized")] = /* @__PURE__ */ new Map(), mt == null || mt({ ReactiveElement: q }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = globalThis, Xt = (n) => n, ht = et.trustedTypes, Jt = ht ? ht.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, se = "$lit$", D = `lit$${Math.random().toFixed(9).slice(2)}$`, oe = "?" + D, Ke = `<${oe}>`, G = document, rt = () => G.createComment(""), it = (n) => n === null || typeof n != "object" && typeof n != "function", St = Array.isArray, tn = (n) => St(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", gt = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, z = RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, ae = /^(?:script|style|textarea|title)$/i, en = (n) => (t, ...e) => ({ _$litType$: n, strings: t, values: e }), _t = en(1), Z = Symbol.for("lit-noChange"), P = Symbol.for("lit-nothing"), ne = /* @__PURE__ */ new WeakMap(), B = G.createTreeWalker(G, 129);
function le(n, t) {
  if (!St(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Jt !== void 0 ? Jt.createHTML(t) : t;
}
const nn = (n, t) => {
  const e = n.length - 1, r = [];
  let s, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = K;
  for (let m = 0; m < e; m++) {
    const y = n[m];
    let A, b, w = -1, T = 0;
    for (; T < y.length && (u.lastIndex = T, b = u.exec(y), b !== null); ) T = u.lastIndex, u === K ? b[1] === "!--" ? u = Qt : b[1] !== void 0 ? u = Kt : b[2] !== void 0 ? (ae.test(b[2]) && (s = RegExp("</" + b[2], "g")), u = z) : b[3] !== void 0 && (u = z) : u === z ? b[0] === ">" ? (u = s ?? K, w = -1) : b[1] === void 0 ? w = -2 : (w = u.lastIndex - b[2].length, A = b[1], u = b[3] === void 0 ? z : b[3] === '"' ? ee : te) : u === ee || u === te ? u = z : u === Qt || u === Kt ? u = K : (u = z, s = void 0);
    const k = u === z && n[m + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + Ke : w >= 0 ? (r.push(A), y.slice(0, w) + se + y.slice(w) + D + k) : y + D + (w === -2 ? m : k);
  }
  return [le(n, l + (n[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), r];
};
class st {
  constructor({ strings: t, _$litType$: e }, r) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const m = t.length - 1, y = this.parts, [A, b] = nn(t, e);
    if (this.el = st.createElement(A, r), B.currentNode = this.el.content, e === 2 || e === 3) {
      const w = this.el.content.firstChild;
      w.replaceWith(...w.childNodes);
    }
    for (; (s = B.nextNode()) !== null && y.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const w of s.getAttributeNames()) if (w.endsWith(se)) {
          const T = b[u++], k = s.getAttribute(w).split(D), I = /([.?@])?(.*)/.exec(T);
          y.push({ type: 1, index: l, name: I[2], strings: k, ctor: I[1] === "." ? sn : I[1] === "?" ? on : I[1] === "@" ? an : dt }), s.removeAttribute(w);
        } else w.startsWith(D) && (y.push({ type: 6, index: l }), s.removeAttribute(w));
        if (ae.test(s.tagName)) {
          const w = s.textContent.split(D), T = w.length - 1;
          if (T > 0) {
            s.textContent = ht ? ht.emptyScript : "";
            for (let k = 0; k < T; k++) s.append(w[k], rt()), B.nextNode(), y.push({ type: 2, index: ++l });
            s.append(w[T], rt());
          }
        }
      } else if (s.nodeType === 8) if (s.data === oe) y.push({ type: 2, index: l });
      else {
        let w = -1;
        for (; (w = s.data.indexOf(D, w + 1)) !== -1; ) y.push({ type: 7, index: l }), w += D.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const r = G.createElement("template");
    return r.innerHTML = t, r;
  }
}
function Y(n, t, e = n, r) {
  var u, m;
  if (t === Z) return t;
  let s = r !== void 0 ? (u = e._$Co) == null ? void 0 : u[r] : e._$Cl;
  const l = it(t) ? void 0 : t._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), l === void 0 ? s = void 0 : (s = new l(n), s._$AT(n, e, r)), r !== void 0 ? (e._$Co ?? (e._$Co = []))[r] = s : e._$Cl = s), s !== void 0 && (t = Y(n, s._$AS(n, t.values), s, r)), t;
}
class rn {
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
    const { el: { content: e }, parts: r } = this._$AD, s = ((t == null ? void 0 : t.creationScope) ?? G).importNode(e, !0);
    B.currentNode = s;
    let l = B.nextNode(), u = 0, m = 0, y = r[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let A;
        y.type === 2 ? A = new ot(l, l.nextSibling, this, t) : y.type === 1 ? A = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (A = new ln(l, this, t)), this._$AV.push(A), y = r[++m];
      }
      u !== (y == null ? void 0 : y.index) && (l = B.nextNode(), u++);
    }
    return B.currentNode = G, s;
  }
  p(t) {
    let e = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(t, r, e), e += r.strings.length - 2) : r._$AI(t[e])), e++;
  }
}
class ot {
  get _$AU() {
    var t;
    return ((t = this._$AM) == null ? void 0 : t._$AU) ?? this._$Cv;
  }
  constructor(t, e, r, s) {
    this.type = 2, this._$AH = P, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = r, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    t = Y(this, t, e), it(t) ? t === P || t == null || t === "" ? (this._$AH !== P && this._$AR(), this._$AH = P) : t !== this._$AH && t !== Z && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tn(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== P && it(this._$AH) ? this._$AA.nextSibling.data = t : this.T(G.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: r } = t, s = typeof r == "number" ? this._$AC(t) : (r.el === void 0 && (r.el = st.createElement(le(r.h, r.h[0]), this.options)), r);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(e);
    else {
      const u = new rn(s, this), m = u.u(this.options);
      u.p(e), this.T(m), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ne.get(t.strings);
    return e === void 0 && ne.set(t.strings, e = new st(t)), e;
  }
  k(t) {
    St(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let r, s = 0;
    for (const l of t) s === e.length ? e.push(r = new ot(this.O(rt()), this.O(rt()), this, this.options)) : r = e[s], r._$AI(l), s++;
    s < e.length && (this._$AR(r && r._$AB.nextSibling, s), e.length = s);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, e); t !== this._$AB; ) {
      const s = Xt(t).nextSibling;
      Xt(t).remove(), t = s;
    }
  }
  setConnected(t) {
    var e;
    this._$AM === void 0 && (this._$Cv = t, (e = this._$AP) == null || e.call(this, t));
  }
}
class dt {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, r, s, l) {
    this.type = 1, this._$AH = P, this._$AN = void 0, this.element = t, this.name = e, this._$AM = s, this.options = l, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = P;
  }
  _$AI(t, e = this, r, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = Y(this, t, e, 0), u = !it(t) || t !== this._$AH && t !== Z, u && (this._$AH = t);
    else {
      const m = t;
      let y, A;
      for (t = l[0], y = 0; y < l.length - 1; y++) A = Y(this, m[r + y], e, y), A === Z && (A = this._$AH[y]), u || (u = !it(A) || A !== this._$AH[y]), A === P ? t = P : t !== P && (t += (A ?? "") + l[y + 1]), this._$AH[y] = A;
    }
    u && !s && this.j(t);
  }
  j(t) {
    t === P ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sn extends dt {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === P ? void 0 : t;
  }
}
class on extends dt {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== P);
  }
}
class an extends dt {
  constructor(t, e, r, s, l) {
    super(t, e, r, s, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = Y(this, t, e, 0) ?? P) === Z) return;
    const r = this._$AH, s = t === P && r !== P || t.capture !== r.capture || t.once !== r.once || t.passive !== r.passive, l = t !== P && (r === P || s);
    s && this.element.removeEventListener(this.name, this, r), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ln {
  constructor(t, e, r) {
    this.element = t, this.type = 6, this._$AN = void 0, this._$AM = e, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(t) {
    Y(this, t);
  }
}
const $t = et.litHtmlPolyfillSupport;
$t == null || $t(st, ot), (et.litHtmlVersions ?? (et.litHtmlVersions = [])).push("3.3.3");
const un = (n, t, e) => {
  const r = (e == null ? void 0 : e.renderBefore) ?? t;
  let s = r._$litPart$;
  if (s === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    r._$litPart$ = s = new ot(t.insertBefore(rt(), l), l, void 0, e ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = un(e, this.renderRoot, this.renderOptions);
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
var re;
nt._$litElement$ = !0, nt.finalized = !0, (re = W.litElementHydrateSupport) == null || re.call(W, { LitElement: nt });
const wt = W.litElementPolyfillSupport;
wt == null || wt({ LitElement: nt });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const cn = { attribute: !0, type: String, converter: ct, reflect: !1, hasChanged: Et }, hn = (n = cn, t, e) => {
  const { kind: r, metadata: s } = e;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), r === "setter" && ((n = Object.create(n)).wrapped = !0), l.set(e.name, n), r === "accessor") {
    const { name: u } = e;
    return { set(m) {
      const y = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(u, y, n, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(u, void 0, n, m), m;
    } };
  }
  if (r === "setter") {
    const { name: u } = e;
    return function(m) {
      const y = this[u];
      t.call(this, m), this.requestUpdate(u, y, n, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function J(n) {
  return (t, e) => typeof e == "object" ? hn(n, t, e) : ((r, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, r), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(n, t, e);
}
var dn = Object.defineProperty, fn = Object.getOwnPropertyDescriptor, R = (n, t, e, r) => {
  for (var s = r > 1 ? void 0 : r ? fn(t, e) : t, l = n.length - 1, u; l >= 0; l--)
    (u = n[l]) && (s = (r ? u(t, e, s) : u(s)) || s);
  return r && s && dn(t, e, s), s;
};
const pn = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:40px 24px;background:#ffffff;font-family:inherit;'>",
    "<div style='max-width:800px;margin:0 auto;'>",
    "<h2 style='font-size:24px;font-weight:700;color:#111827;margin-bottom:12px;'>{{props:title}}</h2>",
    "<p style='font-size:14px;color:#4b5563;line-height:1.6;'>{{props:content}}</p>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Content"]
};
let x = class extends nt {
  constructor() {
    super(...arguments), this.title = "Beautiful Content Block", this.content = "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.", this.sideContent = "A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.", this.mediaUrl = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=60", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(n) {
    return pn;
  }
  get titleConfig() {
    return this.title;
  }
  set titleConfig(n) {
    this.title = n;
  }
  get contentConfig() {
    return this.content;
  }
  set contentConfig(n) {
    this.content = n;
  }
  get sideContentConfig() {
    return this.sideContent;
  }
  set sideContentConfig(n) {
    this.sideContent = n;
  }
  get mediaUrlConfig() {
    return this.mediaUrl;
  }
  set mediaUrlConfig(n) {
    this.mediaUrl = n;
  }
  get layoutConfig() {
    return this.layout;
  }
  set layoutConfig(n) {
    this.layout = n || "layout-1";
  }
  get themeStyleConfig() {
    return this.themeStyle;
  }
  set themeStyleConfig(n) {
    this.themeStyle = n || "light";
  }
  render() {
    return _t`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="container">
          ${this.layout === "layout-1" ? _t`
            <div class="split-text">
              <div class="split-col-left">
                <h2>${this.title}</h2>
              </div>
              <div class="split-col-right">
                <p>${this.content}</p>
                <p>${this.sideContent}</p>
              </div>
            </div>
          ` : ""}

          ${this.layout === "layout-2" ? _t`
            <div class="split-media">
              <div class="media-col">
                <img class="media-img" src="${this.mediaUrl}" alt="content display graphic">
              </div>
              <div class="text-col">
                <h2>${this.title}</h2>
                <p>${this.content}</p>
                <p>${this.sideContent}</p>
              </div>
            </div>
          ` : ""}
        </div>
      </section>
    `;
  }
};
x.styles = Ge`
    :host {
      display: block;
      width: 100%;
      --content-bg: var(--uiv-surface-color, #ffffff);
      --content-text: var(--uiv-text-color, #1f2937);
      --content-lead: #4b5563;
      --content-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 70px 5%;
      background: var(--content-bg);
      color: var(--content-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --content-bg: #111827;
      --content-text: #f9fafb;
      --content-lead: #9ca3af;
    }

    .container {
      max-width: 1100px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 800;
      letter-spacing: -0.02em;
      margin: 0 0 20px 0;
      line-height: 1.25;
    }

    p {
      font-size: 1.05rem;
      line-height: 1.65;
      color: var(--content-lead);
      margin: 0 0 16px 0;
    }

    /* ─── Layout 1: Split Text Column ─── */
    .split-text {
      display: flex;
      gap: 50px;
      align-items: flex-start;
    }

    .split-col-left {
      flex: 1;
    }

    .split-col-right {
      flex: 1.3;
    }

    /* ─── Layout 2: Side-by-Side Image/Text ─── */
    .split-media {
      display: flex;
      gap: 50px;
      align-items: center;
    }

    .media-col {
      flex: 1;
      display: flex;
      justify-content: center;
    }

    .media-img {
      max-width: 100%;
      height: auto;
      border-radius: 8px;
      box-shadow: 0 8px 25px rgba(0,0,0,0.06);
    }

    .text-col {
      flex: 1.2;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .split-text, .split-media {
        flex-direction: column !important;
      }
    }
  `;
R([
  J({ type: String })
], x.prototype, "title", 2);
R([
  J({ type: String })
], x.prototype, "content", 2);
R([
  J({ type: String, attribute: "side-content" })
], x.prototype, "sideContent", 2);
R([
  J({ type: String, attribute: "media-url" })
], x.prototype, "mediaUrl", 2);
R([
  J({ type: String })
], x.prototype, "layout", 2);
R([
  J({ type: String, attribute: "theme-style" })
], x.prototype, "themeStyle", 2);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Content Title",
    fieldMappings: "title"
  })
], x.prototype, "titleConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Primary Paragraph Copy",
    fieldMappings: "content"
  })
], x.prototype, "contentConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Secondary Copy",
    fieldMappings: "sideContent"
  })
], x.prototype, "sideContentConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Media Image URL",
    fieldMappings: "mediaUrl"
  })
], x.prototype, "mediaUrlConfig", 1);
R([
  X({
    attributeType: L.PROPERTY,
    uiComponentType: H.DROPDOWN,
    displayLabel: "Layout Alignment",
    fieldMappings: "layout",
    optionItems: [
      { label: "Split Text-Columns (Copy Side-by-Side)", value: "layout-1" },
      { label: "Dual Media (Image Left, Copy Right)", value: "layout-2" }
    ]
  })
], x.prototype, "layoutConfig", 1);
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
], x.prototype, "themeStyleConfig", 1);
x = R([
  He({
    name: "zero-block-content",
    version: "1.0.0",
    title: "Content Block",
    elementSelector: "zero-block-content",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Le()
], x);
export {
  x as ZeroBlockContent,
  pn as studioTemplate
};
