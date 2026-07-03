var Ie = Object.defineProperty;
var De = (r, t, e) => t in r ? Ie(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
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
    var e = typeof globalThis == "object" ? globalThis : typeof Gt == "object" ? Gt : typeof self == "object" ? self : typeof this == "object" ? this : m(), n = a(r);
    typeof e.Reflect < "u" && (n = a(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function a(y, x) {
      return function(w, $) {
        Object.defineProperty(y, w, { configurable: !0, writable: !0, value: $ }), x && x(w, $);
      };
    }
    function l() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function d() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function m() {
      return l() || d();
    }
  })(function(t, e) {
    var n = Object.prototype.hasOwnProperty, a = typeof Symbol == "function", l = a && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", d = a && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, x = !m && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return vt({ __proto__: null });
      } : function() {
        return vt({});
      },
      has: x ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: x ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, $ = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pe(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Te(), H = typeof WeakMap == "function" ? WeakMap : Re(), F = a ? Symbol.for("@reflect-metadata:registry") : void 0, ot = Ce(), St = Me(ot);
    function de(i, s, o, u) {
      if (g(o)) {
        if (!It(i))
          throw new TypeError();
        if (!Dt(s))
          throw new TypeError();
        return _e(i, s);
      } else {
        if (!It(i))
          throw new TypeError();
        if (!S(s))
          throw new TypeError();
        if (!S(u) && !g(u) && !Y(u))
          throw new TypeError();
        return Y(u) && (u = void 0), o = I(o), be(i, s, o, u);
      }
    }
    t("decorate", de);
    function ue(i, s) {
      function o(u, v) {
        if (!S(u))
          throw new TypeError();
        if (!g(v) && !Ae(v))
          throw new TypeError();
        Pt(i, s, u, v);
      }
      return o;
    }
    t("metadata", ue);
    function ce(i, s, o, u) {
      if (!S(o))
        throw new TypeError();
      return g(u) || (u = I(u)), Pt(i, s, o, u);
    }
    t("defineMetadata", ce);
    function he(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return g(o) || (o = I(o)), Ct(i, s, o);
    }
    t("hasMetadata", he);
    function fe(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return g(o) || (o = I(o)), ft(i, s, o);
    }
    t("hasOwnMetadata", fe);
    function pe(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return g(o) || (o = I(o)), Mt(i, s, o);
    }
    t("getMetadata", pe);
    function ye(i, s, o) {
      if (!S(s))
        throw new TypeError();
      return g(o) || (o = I(o)), Ot(i, s, o);
    }
    t("getOwnMetadata", ye);
    function ve(i, s) {
      if (!S(i))
        throw new TypeError();
      return g(s) || (s = I(s)), Tt(i, s);
    }
    t("getMetadataKeys", ve);
    function me(i, s) {
      if (!S(i))
        throw new TypeError();
      return g(s) || (s = I(s)), Rt(i, s);
    }
    t("getOwnMetadataKeys", me);
    function ge(i, s, o) {
      if (!S(s))
        throw new TypeError();
      if (g(o) || (o = I(o)), !S(s))
        throw new TypeError();
      g(o) || (o = I(o));
      var u = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return g(u) ? !1 : u.OrdinaryDeleteMetadata(i, s, o);
    }
    t("deleteMetadata", ge);
    function _e(i, s) {
      for (var o = i.length - 1; o >= 0; --o) {
        var u = i[o], v = u(s);
        if (!g(v) && !Y(v)) {
          if (!Dt(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function be(i, s, o, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], C = M(s, o, u);
        if (!g(C) && !Y(C)) {
          if (!S(C))
            throw new TypeError();
          u = C;
        }
      }
      return u;
    }
    function Ct(i, s, o) {
      var u = ft(i, s, o);
      if (u)
        return !0;
      var v = yt(s);
      return Y(v) ? !1 : Ct(i, v, o);
    }
    function ft(i, s, o) {
      var u = Q(
        s,
        o,
        /*Create*/
        !1
      );
      return g(u) ? !1 : Nt(u.OrdinaryHasOwnMetadata(i, s, o));
    }
    function Mt(i, s, o) {
      var u = ft(i, s, o);
      if (u)
        return Ot(i, s, o);
      var v = yt(s);
      if (!Y(v))
        return Mt(i, v, o);
    }
    function Ot(i, s, o) {
      var u = Q(
        s,
        o,
        /*Create*/
        !1
      );
      if (!g(u))
        return u.OrdinaryGetOwnMetadata(i, s, o);
    }
    function Pt(i, s, o, u) {
      var v = Q(
        o,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, o, u);
    }
    function Tt(i, s) {
      var o = Rt(i, s), u = yt(i);
      if (u === null)
        return o;
      var v = Tt(u, s);
      if (v.length <= 0)
        return o;
      if (o.length <= 0)
        return v;
      for (var M = new k(), C = [], _ = 0, c = o; _ < c.length; _++) {
        var h = c[_], f = M.has(h);
        f || (M.add(h), C.push(h));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var h = b[p], f = M.has(h);
        f || (M.add(h), C.push(h));
      }
      return C;
    }
    function Rt(i, s) {
      var o = Q(
        i,
        s,
        /*create*/
        !1
      );
      return o ? o.OrdinaryOwnMetadataKeys(i, s) : [];
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
    function Y(i) {
      return i === null;
    }
    function $e(i) {
      return typeof i == "symbol";
    }
    function S(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function we(i, s) {
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
      var o = "string", u = Ut(i, l);
      if (u !== void 0) {
        var v = u.call(i, o);
        if (S(v))
          throw new TypeError();
        return v;
      }
      return xe(i);
    }
    function xe(i, s) {
      var o, u;
      {
        var v = i.toString;
        if (lt(v)) {
          var u = v.call(i);
          if (!S(u))
            return u;
        }
        var o = i.valueOf;
        if (lt(o)) {
          var u = o.call(i);
          if (!S(u))
            return u;
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
    function I(i) {
      var s = we(i);
      return $e(s) ? s : Ee(s);
    }
    function It(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function lt(i) {
      return typeof i == "function";
    }
    function Dt(i) {
      return typeof i == "function";
    }
    function Ae(i) {
      switch (kt(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pt(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ut(i, s) {
      var o = i[s];
      if (o != null) {
        if (!lt(o))
          throw new TypeError();
        return o;
      }
    }
    function Ht(i) {
      var s = Ut(i, d);
      if (!lt(s))
        throw new TypeError();
      var o = s.call(i);
      if (!S(o))
        throw new TypeError();
      return o;
    }
    function jt(i) {
      return i.value;
    }
    function zt(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Lt(i) {
      var s = i.return;
      s && s.call(i);
    }
    function yt(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || s !== $)
        return s;
      var o = i.prototype, u = o && Object.getPrototypeOf(o);
      if (u == null || u === Object.prototype)
        return s;
      var v = u.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Se() {
      var i;
      !g(F) && typeof e.Reflect < "u" && !(F in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Oe(e.Reflect));
      var s, o, u, v = new H(), M = {
        registerProvider: C,
        getProvider: c,
        setProvider: f
      };
      return M;
      function C(p) {
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
            u === void 0 && (u = new k()), u.add(p);
            break;
        }
      }
      function _(p, b) {
        if (!g(s)) {
          if (s.isProviderFor(p, b))
            return s;
          if (!g(o)) {
            if (o.isProviderFor(p, b))
              return s;
            if (!g(u))
              for (var E = Ht(u); ; ) {
                var A = zt(E);
                if (!A)
                  return;
                var N = jt(A);
                if (N.isProviderFor(p, b))
                  return Lt(E), N;
              }
          }
        }
        if (!g(i) && i.isProviderFor(p, b))
          return i;
      }
      function c(p, b) {
        var E = v.get(p), A;
        return g(E) || (A = E.get(b)), g(A) && (A = _(p, b), g(A) || (g(E) && (E = new T(), v.set(p, E)), E.set(b, A))), A;
      }
      function h(p) {
        if (g(p))
          throw new TypeError();
        return s === p || o === p || !g(u) && u.has(p);
      }
      function f(p, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var A = c(p, b);
        if (A !== E) {
          if (!g(A))
            return !1;
          var N = v.get(p);
          g(N) && (N = new T(), v.set(p, N)), N.set(b, E);
        }
        return !0;
      }
    }
    function Ce() {
      var i;
      return !g(F) && S(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[F]), g(i) && (i = Se()), !g(F) && S(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var s = new H(), o = {
        isProviderFor: function(h, f) {
          var p = s.get(h);
          return g(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: c
      };
      return ot.registerProvider(o), o;
      function u(h, f, p) {
        var b = s.get(h), E = !1;
        if (g(b)) {
          if (!p)
            return;
          b = new T(), s.set(h, b), E = !0;
        }
        var A = b.get(f);
        if (g(A)) {
          if (!p)
            return;
          if (A = new T(), b.set(f, A), !i.setProvider(h, f, o))
            throw b.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function v(h, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        return g(b) ? !1 : Nt(b.has(h));
      }
      function M(h, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (!g(b))
          return b.get(h);
      }
      function C(h, f, p, b) {
        var E = u(
          p,
          b,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function _(h, f) {
        var p = [], b = u(
          h,
          f,
          /*Create*/
          !1
        );
        if (g(b))
          return p;
        for (var E = b.keys(), A = Ht(E), N = 0; ; ) {
          var qt = zt(A);
          if (!qt)
            return p.length = N, p;
          var ke = jt(qt);
          try {
            p[N] = ke;
          } catch (Ne) {
            try {
              Lt(A);
            } finally {
              throw Ne;
            }
          }
          N++;
        }
      }
      function c(h, f, p) {
        var b = u(
          f,
          p,
          /*Create*/
          !1
        );
        if (g(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = s.get(f);
          g(E) || (E.delete(p), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Oe(i) {
      var s = i.defineMetadata, o = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, C = new H(), _ = {
        isProviderFor: function(c, h) {
          var f = C.get(c);
          return !g(f) && f.has(h) ? !0 : v(c, h).length ? (g(f) && (f = new k(), C.set(c, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: o,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return _;
    }
    function Q(i, s, o) {
      var u = ot.getProvider(i, s);
      if (!g(u))
        return u;
      if (o) {
        if (ot.setProvider(i, s, St))
          return St;
        throw new Error("Illegal state.");
      }
    }
    function Pe() {
      var i = {}, s = [], o = (
        /** @class */
        function() {
          function _(c, h, f) {
            this._index = 0, this._keys = c, this._values = h, this._selector = f;
          }
          return _.prototype["@@iterator"] = function() {
            return this;
          }, _.prototype[d] = function() {
            return this;
          }, _.prototype.next = function() {
            var c = this._index;
            if (c >= 0 && c < this._keys.length) {
              var h = this._selector(this._keys[c], this._values[c]);
              return c + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(c) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), c;
          }, _.prototype.return = function(c) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: c, done: !0 };
          }, _;
        }()
      ), u = (
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
          }), _.prototype.has = function(c) {
            return this._find(
              c,
              /*insert*/
              !1
            ) >= 0;
          }, _.prototype.get = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            return h >= 0 ? this._values[h] : void 0;
          }, _.prototype.set = function(c, h) {
            var f = this._find(
              c,
              /*insert*/
              !0
            );
            return this._values[f] = h, this;
          }, _.prototype.delete = function(c) {
            var h = this._find(
              c,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var f = this._keys.length, p = h + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, pt(c, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new o(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new o(this._keys, this._values, M);
          }, _.prototype.entries = function() {
            return new o(this._keys, this._values, C);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[d] = function() {
            return this.entries();
          }, _.prototype._find = function(c, h) {
            if (!pt(this._cacheKey, c)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pt(this._keys[f], c)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(c), this._values.push(void 0)), this._cacheIndex;
          }, _;
        }()
      );
      return u;
      function v(_, c) {
        return _;
      }
      function M(_, c) {
        return c;
      }
      function C(_, c) {
        return [_, c];
      }
    }
    function Te() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new T();
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
          }, s.prototype[d] = function() {
            return this.keys();
          }, s;
        }()
      );
      return i;
    }
    function Re() {
      var i = 16, s = w.create(), o = u();
      return (
        /** @class */
        function() {
          function c() {
            this._key = u();
          }
          return c.prototype.has = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, c.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, c.prototype.set = function(h, f) {
            var p = v(
              h,
              /*create*/
              !0
            );
            return p[this._key] = f, this;
          }, c.prototype.delete = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? delete f[this._key] : !1;
          }, c.prototype.clear = function() {
            this._key = u();
          }, c;
        }()
      );
      function u() {
        var c;
        do
          c = "@@WeakMap@@" + _();
        while (w.has(s, c));
        return s[c] = !0, c;
      }
      function v(c, h) {
        if (!n.call(c, o)) {
          if (!h)
            return;
          Object.defineProperty(c, o, { value: w.create() });
        }
        return c[o];
      }
      function M(c, h) {
        for (var f = 0; f < h; ++f)
          c[f] = Math.random() * 255 | 0;
        return c;
      }
      function C(c) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(c);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : M(h, c), h;
        }
        return M(new Array(c), c);
      }
      function _() {
        var c = C(i);
        c[6] = c[6] & 79 | 64, c[8] = c[8] & 191 | 128;
        for (var h = "", f = 0; f < i; ++f) {
          var p = c[f];
          (f === 4 || f === 6 || f === 8) && (h += "-"), p < 16 && (h += "0"), h += p.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function vt(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Wt || (Wt = {}));
function Ue(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function He(r) {
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
function je(r) {
  return He(r);
}
function ze(r) {
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
        var x;
        const l = document.querySelector('style.global-style[type="text/css"]'), d = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && m) {
          const w = new CSSStyleSheet(), $ = (x = l.sheet) == null ? void 0 : x.cssRules;
          $ && (Array.from($).forEach((T) => w.insertRule(T.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          y.appendChild(w);
        }
        d.forEach((w) => {
          const $ = w.cloneNode(!0);
          y.appendChild($);
        });
      }
    }
    return e;
  };
}
function Le(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function qe(r) {
  return function(t, e) {
    try {
      Le(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", t) || []];
      let a = !0;
      if (typeof e == "string") {
        try {
          a = typeof t[e] != "function";
        } catch {
          a = !0;
        }
        a && (r.fieldMappings = r.fieldMappings ?? e);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, t);
    } catch (n) {
      console.log(n);
    }
  };
}
function L(r) {
  return qe(r);
}
var U;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(U || (U = {}));
var D;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(D || (D = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dt = globalThis, wt = dt.ShadowRoot && (dt.ShadyCSS === void 0 || dt.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, xt = Symbol(), Vt = /* @__PURE__ */ new WeakMap();
let ie = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== xt) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
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
const Be = (r) => new ie(typeof r == "string" ? r : r + "", void 0, xt), Ge = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, a, l) => n + ((d) => {
    if (d._$cssResult$ === !0) return d.cssText;
    if (typeof d == "number") return d;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + d + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(a) + r[l + 1], r[0]);
  return new ie(e, r, xt);
}, We = (r, t) => {
  if (wt) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), a = dt.litNonce;
    a !== void 0 && n.setAttribute("nonce", a), n.textContent = e.cssText, r.appendChild(n);
  }
}, Ft = wt ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return Be(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ve, defineProperty: Fe, getOwnPropertyDescriptor: Ye, getOwnPropertyNames: Ze, getOwnPropertySymbols: Xe, getPrototypeOf: Je } = Object, z = globalThis, Yt = z.trustedTypes, Qe = Yt ? Yt.emptyScript : "", mt = z.reactiveElementPolyfillSupport, tt = (r, t) => r, ut = { toAttribute(r, t) {
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
} }, Et = (r, t) => !Ve(r, t), Zt = { attribute: !0, type: String, converter: ut, reflect: !1, useDefault: !1, hasChanged: Et };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Zt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), a = this.getPropertyDescriptor(t, n, e);
      a !== void 0 && Fe(this.prototype, t, a);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: a, set: l } = Ye(this.prototype, t) ?? { get() {
      return this[e];
    }, set(d) {
      this[e] = d;
    } };
    return { get: a, set(d) {
      const m = a == null ? void 0 : a.call(this);
      l == null || l.call(this, d), this.requestUpdate(t, m, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Zt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(tt("elementProperties"))) return;
    const t = Je(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(tt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(tt("properties"))) {
      const e = this.properties, n = [...Ze(e), ...Xe(e)];
      for (const a of n) this.createProperty(a, e[a]);
    }
    const t = this[Symbol.metadata];
    if (t !== null) {
      const e = litPropertyMetadata.get(t);
      if (e !== void 0) for (const [n, a] of e) this.elementProperties.set(n, a);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [e, n] of this.elementProperties) {
      const a = this._$Eu(e, n);
      a !== void 0 && this._$Eh.set(a, e);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(t) {
    const e = [];
    if (Array.isArray(t)) {
      const n = new Set(t.flat(1 / 0).reverse());
      for (const a of n) e.unshift(Ft(a));
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
    const n = this.constructor.elementProperties.get(t), a = this.constructor._$Eu(t, n);
    if (a !== void 0 && n.reflect === !0) {
      const d = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ut).toAttribute(e, n.type);
      this._$Em = t, d == null ? this.removeAttribute(a) : this.setAttribute(a, d), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, d;
    const n = this.constructor, a = n._$Eh.get(t);
    if (a !== void 0 && this._$Em !== a) {
      const m = n.getPropertyOptions(a), y = typeof m.converter == "function" ? { fromAttribute: m.converter } : ((l = m.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? m.converter : ut;
      this._$Em = a;
      const x = y.fromAttribute(e, m.type);
      this[a] = x ?? ((d = this._$Ej) == null ? void 0 : d.get(a)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, a = !1, l) {
    var d;
    if (t !== void 0) {
      const m = this.constructor;
      if (a === !1 && (l = this[t]), n ?? (n = m.getPropertyOptions(t)), !((n.hasChanged ?? Et)(l, e) || n.useDefault && n.reflect && l === ((d = this._$Ej) == null ? void 0 : d.get(t)) && !this.hasAttribute(m._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: a, wrapped: l }, d) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, d ?? e ?? this[t]), l !== !0 || d !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), a === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
        for (const [l, d] of this._$Ep) this[l] = d;
        this._$Ep = void 0;
      }
      const a = this.constructor.elementProperties;
      if (a.size > 0) for (const [l, d] of a) {
        const { wrapped: m } = d, y = this[l];
        m !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, d, y);
      }
    }
    let t = !1;
    const e = this._$AL;
    try {
      t = this.shouldUpdate(e), t ? (this.willUpdate(e), (n = this._$EO) == null || n.forEach((a) => {
        var l;
        return (l = a.hostUpdate) == null ? void 0 : l.call(a);
      }), this.update(e)) : this._$EM();
    } catch (a) {
      throw t = !1, this._$EM(), a;
    }
    t && this._$AE(e);
  }
  willUpdate(t) {
  }
  _$AE(t) {
    var e;
    (e = this._$EO) == null || e.forEach((n) => {
      var a;
      return (a = n.hostUpdated) == null ? void 0 : a.call(n);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[tt("elementProperties")] = /* @__PURE__ */ new Map(), Z[tt("finalized")] = /* @__PURE__ */ new Map(), mt == null || mt({ ReactiveElement: Z }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = globalThis, Xt = (r) => r, ct = et.trustedTypes, Jt = ct ? ct.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ae = "$lit$", j = `lit$${Math.random().toFixed(9).slice(2)}$`, se = "?" + j, Ke = `<${se}>`, W = document, nt = () => W.createComment(""), it = (r) => r === null || typeof r != "object" && typeof r != "function", At = Array.isArray, tr = (r) => At(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", gt = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qt = /-->/g, Kt = />/g, q = RegExp(`>|${gt}(?:([^\\s"'>=/]+)(${gt}*=${gt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), te = /'/g, ee = /"/g, oe = /^(?:script|style|textarea|title)$/i, er = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), _t = er(1), X = Symbol.for("lit-noChange"), O = Symbol.for("lit-nothing"), re = /* @__PURE__ */ new WeakMap(), B = W.createTreeWalker(W, 129);
function le(r, t) {
  if (!At(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Jt !== void 0 ? Jt.createHTML(t) : t;
}
const rr = (r, t) => {
  const e = r.length - 1, n = [];
  let a, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", d = K;
  for (let m = 0; m < e; m++) {
    const y = r[m];
    let x, w, $ = -1, T = 0;
    for (; T < y.length && (d.lastIndex = T, w = d.exec(y), w !== null); ) T = d.lastIndex, d === K ? w[1] === "!--" ? d = Qt : w[1] !== void 0 ? d = Kt : w[2] !== void 0 ? (oe.test(w[2]) && (a = RegExp("</" + w[2], "g")), d = q) : w[3] !== void 0 && (d = q) : d === q ? w[0] === ">" ? (d = a ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = d.lastIndex - w[2].length, x = w[1], d = w[3] === void 0 ? q : w[3] === '"' ? ee : te) : d === ee || d === te ? d = q : d === Qt || d === Kt ? d = K : (d = q, a = void 0);
    const k = d === q && r[m + 1].startsWith("/>") ? " " : "";
    l += d === K ? y + Ke : $ >= 0 ? (n.push(x), y.slice(0, $) + ae + y.slice($) + j + k) : y + j + ($ === -2 ? m : k);
  }
  return [le(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class at {
  constructor({ strings: t, _$litType$: e }, n) {
    let a;
    this.parts = [];
    let l = 0, d = 0;
    const m = t.length - 1, y = this.parts, [x, w] = rr(t, e);
    if (this.el = at.createElement(x, n), B.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (a = B.nextNode()) !== null && y.length < m; ) {
      if (a.nodeType === 1) {
        if (a.hasAttributes()) for (const $ of a.getAttributeNames()) if ($.endsWith(ae)) {
          const T = w[d++], k = a.getAttribute($).split(j), H = /([.?@])?(.*)/.exec(T);
          y.push({ type: 1, index: l, name: H[2], strings: k, ctor: H[1] === "." ? ir : H[1] === "?" ? ar : H[1] === "@" ? sr : ht }), a.removeAttribute($);
        } else $.startsWith(j) && (y.push({ type: 6, index: l }), a.removeAttribute($));
        if (oe.test(a.tagName)) {
          const $ = a.textContent.split(j), T = $.length - 1;
          if (T > 0) {
            a.textContent = ct ? ct.emptyScript : "";
            for (let k = 0; k < T; k++) a.append($[k], nt()), B.nextNode(), y.push({ type: 2, index: ++l });
            a.append($[T], nt());
          }
        }
      } else if (a.nodeType === 8) if (a.data === se) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = a.data.indexOf(j, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += j.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = W.createElement("template");
    return n.innerHTML = t, n;
  }
}
function J(r, t, e = r, n) {
  var d, m;
  if (t === X) return t;
  let a = n !== void 0 ? (d = e._$Co) == null ? void 0 : d[n] : e._$Cl;
  const l = it(t) ? void 0 : t._$litDirective$;
  return (a == null ? void 0 : a.constructor) !== l && ((m = a == null ? void 0 : a._$AO) == null || m.call(a, !1), l === void 0 ? a = void 0 : (a = new l(r), a._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = a : e._$Cl = a), a !== void 0 && (t = J(r, a._$AS(r, t.values), a, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, a = ((t == null ? void 0 : t.creationScope) ?? W).importNode(e, !0);
    B.currentNode = a;
    let l = B.nextNode(), d = 0, m = 0, y = n[0];
    for (; y !== void 0; ) {
      if (d === y.index) {
        let x;
        y.type === 2 ? x = new st(l, l.nextSibling, this, t) : y.type === 1 ? x = new y.ctor(l, y.name, y.strings, this, t) : y.type === 6 && (x = new or(l, this, t)), this._$AV.push(x), y = n[++m];
      }
      d !== (y == null ? void 0 : y.index) && (l = B.nextNode(), d++);
    }
    return B.currentNode = W, a;
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
  constructor(t, e, n, a) {
    this.type = 2, this._$AH = O, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = a, this._$Cv = (a == null ? void 0 : a.isConnected) ?? !0;
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
    t = J(this, t, e), it(t) ? t === O || t == null || t === "" ? (this._$AH !== O && this._$AR(), this._$AH = O) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : tr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== O && it(this._$AH) ? this._$AA.nextSibling.data = t : this.T(W.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, a = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = at.createElement(le(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === a) this._$AH.p(e);
    else {
      const d = new nr(a, this), m = d.u(this.options);
      d.p(e), this.T(m), this._$AH = d;
    }
  }
  _$AC(t) {
    let e = re.get(t.strings);
    return e === void 0 && re.set(t.strings, e = new at(t)), e;
  }
  k(t) {
    At(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, a = 0;
    for (const l of t) a === e.length ? e.push(n = new st(this.O(nt()), this.O(nt()), this, this.options)) : n = e[a], n._$AI(l), a++;
    a < e.length && (this._$AR(n && n._$AB.nextSibling, a), e.length = a);
  }
  _$AR(t = this._$AA.nextSibling, e) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, e); t !== this._$AB; ) {
      const a = Xt(t).nextSibling;
      Xt(t).remove(), t = a;
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
  constructor(t, e, n, a, l) {
    this.type = 1, this._$AH = O, this._$AN = void 0, this.element = t, this.name = e, this._$AM = a, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = O;
  }
  _$AI(t, e = this, n, a) {
    const l = this.strings;
    let d = !1;
    if (l === void 0) t = J(this, t, e, 0), d = !it(t) || t !== this._$AH && t !== X, d && (this._$AH = t);
    else {
      const m = t;
      let y, x;
      for (t = l[0], y = 0; y < l.length - 1; y++) x = J(this, m[n + y], e, y), x === X && (x = this._$AH[y]), d || (d = !it(x) || x !== this._$AH[y]), x === O ? t = O : t !== O && (t += (x ?? "") + l[y + 1]), this._$AH[y] = x;
    }
    d && !a && this.j(t);
  }
  j(t) {
    t === O ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class ir extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === O ? void 0 : t;
  }
}
class ar extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== O);
  }
}
class sr extends ht {
  constructor(t, e, n, a, l) {
    super(t, e, n, a, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = J(this, t, e, 0) ?? O) === X) return;
    const n = this._$AH, a = t === O && n !== O || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== O && (n === O || a);
    a && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
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
    J(this, t);
  }
}
const bt = et.litHtmlPolyfillSupport;
bt == null || bt(at, st), (et.litHtmlVersions ?? (et.litHtmlVersions = [])).push("3.3.3");
const lr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let a = n._$litPart$;
  if (a === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = a = new st(t.insertBefore(nt(), l), l, void 0, e ?? {});
  }
  return a._$AI(r), a;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class rt extends Z {
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
    return X;
  }
}
var ne;
rt._$litElement$ = !0, rt.finalized = !0, (ne = G.litElementHydrateSupport) == null || ne.call(G, { LitElement: rt });
const $t = G.litElementPolyfillSupport;
$t == null || $t({ LitElement: rt });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ut, reflect: !1, hasChanged: Et }, ur = (r = dr, t, e) => {
  const { kind: n, metadata: a } = e;
  let l = globalThis.litPropertyMetadata.get(a);
  if (l === void 0 && globalThis.litPropertyMetadata.set(a, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: d } = e;
    return { set(m) {
      const y = t.get.call(this);
      t.set.call(this, m), this.requestUpdate(d, y, r, !0, m);
    }, init(m) {
      return m !== void 0 && this.C(d, void 0, r, m), m;
    } };
  }
  if (n === "setter") {
    const { name: d } = e;
    return function(m) {
      const y = this[d];
      t.call(this, m), this.requestUpdate(d, y, r, !0, m);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function V(r) {
  return (t, e) => typeof e == "object" ? ur(r, t, e) : ((n, a, l) => {
    const d = a.hasOwnProperty(l);
    return a.constructor.createProperty(l, n), d ? Object.getOwnPropertyDescriptor(a, l) : void 0;
  })(r, t, e);
}
var cr = Object.defineProperty, hr = Object.getOwnPropertyDescriptor, R = (r, t, e, n) => {
  for (var a = n > 1 ? void 0 : n ? hr(t, e) : t, l = r.length - 1, d; l >= 0; l--)
    (d = r[l]) && (a = (n ? d(t, e, a) : d(a)) || a);
  return n && a && cr(t, e, a), a;
};
const fr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#ffffff;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;text-align:left;max-width:350px;'>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:8px;'>Contact Details</h3>",
    "<p style='font-size:13px;color:#4b5563;margin-bottom:4px;'>📧 {{props:email}}</p>",
    "<p style='font-size:13px;color:#4b5563;'>📞 {{props:phone}}</p>",
    "</div>",
    "<div style='flex:1.2;text-align:left;display:flex;flex-direction:column;gap:10px;'>",
    "<input type='text' placeholder='Your Name' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;' disabled>",
    "<input type='email' placeholder='Email Address' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;' disabled>",
    "<textarea placeholder='Message' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;height:60px;' disabled></textarea>",
    "<span style='align-self:flex-start;padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Send Message</span>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Contact"]
};
let P = class extends rt {
  constructor() {
    super(...arguments), this.title = "Get In Touch", this.lead = "Have questions? Fill out our quick inquiry form or reach us directly.", this.email = "contact@example.com", this.phone = "+1 (555) 019-2834", this.address = "100 Silicon Valley, California, USA", this.layout = "layout-1", this.themeStyle = "light";
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
  get emailConfig() {
    return this.email;
  }
  set emailConfig(r) {
    this.email = r;
  }
  get phoneConfig() {
    return this.phone;
  }
  set phoneConfig(r) {
    this.phone = r;
  }
  get addressConfig() {
    return this.address;
  }
  set addressConfig(r) {
    this.address = r;
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
  handleSubmit(r) {
    var a, l, d;
    r.preventDefault();
    const t = (a = this.shadowRoot) == null ? void 0 : a.querySelector('input[placeholder="Your Name"]'), e = (l = this.shadowRoot) == null ? void 0 : l.querySelector('input[placeholder="Email Address"]'), n = (d = this.shadowRoot) == null ? void 0 : d.querySelector("textarea");
    this.dispatchEvent(new CustomEvent("submit", {
      detail: {
        name: t ? t.value : "",
        email: e ? e.value : "",
        message: n ? n.value : ""
      },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return _t`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        ${this.layout === "layout-1" ? _t`
          <div class="split-layout">
            <div class="info-col">
              <h3>Inquiry Info</h3>
              <div class="detail-item">
                <span class="detail-label">Email Address</span>
                <span class="detail-val">${this.email}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Phone Hotline</span>
                <span class="detail-val">${this.phone}</span>
              </div>
              <div class="detail-item">
                <span class="detail-label">Location</span>
                <span class="detail-val">${this.address}</span>
              </div>
            </div>
            <div class="form-col">
              <form @submit=${this.handleSubmit}>
                <div class="input-row">
                  <input type="text" placeholder="Your Name" required>
                  <input type="email" placeholder="Email Address" required>
                </div>
                <textarea placeholder="Your Message..." required></textarea>
                <button type="submit" class="btn-send">Send Message</button>
              </form>
            </div>
          </div>
        ` : ""}

        ${this.layout === "layout-2" ? _t`
          <div class="grid-details">
            <div class="detail-card">
              <div class="detail-label">Email Address</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.email}</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">Phone Hotline</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.phone}</div>
            </div>
            <div class="detail-card">
              <div class="detail-label">Postal Location</div>
              <div class="detail-val" style="font-weight:600;font-size:1.1rem;">${this.address}</div>
            </div>
          </div>
        ` : ""}
      </section>
    `;
  }
};
P.styles = Ge`
    :host {
      display: block;
      width: 100%;
      --contact-bg: var(--uiv-surface-color, #ffffff);
      --contact-text: var(--uiv-text-color, #111827);
      --contact-lead: #4b5563;
      --contact-card-bg: var(--uiv-surface-color, #ffffff);
      --contact-card-border: var(--uiv-border-color, #e5e7eb);
      --contact-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--contact-bg);
      color: var(--contact-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --contact-bg: #111827;
      --contact-text: #f9fafb;
      --contact-lead: #9ca3af;
      --contact-card-bg: #1f2937;
      --contact-card-border: #374151;
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
      color: var(--contact-lead);
      margin: 0;
    }

    /* ─── Layout 1: Split Columns ─── */
    .split-layout {
      display: flex;
      gap: 50px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .info-col {
      flex: 1;
      text-align: left;
    }

    .form-col {
      flex: 1.3;
      text-align: left;
    }

    h3 {
      font-size: 1.45rem;
      font-weight: 700;
      margin: 0 0 20px 0;
    }

    .detail-item {
      margin-bottom: 24px;
      font-size: 1rem;
      color: var(--contact-lead);
      display: flex;
      flex-direction: column;
      gap: 4px;
    }

    .detail-label {
      font-size: 0.8rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--contact-accent);
    }

    .detail-val {
      font-weight: 500;
      color: inherit;
    }

    /* Inquiry Form */
    form {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }

    .input-row {
      display: flex;
      gap: 16px;
    }

    input[type="text"], input[type="email"], textarea {
      width: 100%;
      padding: 12px 16px;
      font-size: 0.95rem;
      border: 1px solid var(--contact-card-border);
      border-radius: 6px;
      outline: none;
      background: var(--contact-card-bg);
      color: inherit;
      box-sizing: border-box;
      transition: border-color 0.25s ease;
    }

    input[type="text"]:focus, input[type="email"]:focus, textarea:focus {
      border-color: var(--contact-accent);
    }

    textarea {
      height: 120px;
      resize: vertical;
    }

    .btn-send {
      align-self: flex-start;
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--contact-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    .btn-send:hover {
      opacity: 0.95;
    }

    /* ─── Layout 2: Centered Details Panel ─── */
    .grid-details {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    .detail-card {
      padding: 30px;
      background: var(--contact-card-bg);
      border: 1px solid var(--contact-card-border);
      border-radius: 8px;
      text-align: center;
    }

    .detail-card .detail-label {
      margin-bottom: 8px;
    }

    @media (max-width: 768px) {
      .split-layout {
        flex-direction: column !important;
      }
      .input-row {
        flex-direction: column;
        gap: 16px;
      }
      .btn-send {
        width: 100%;
      }
    }
  `;
R([
  V({ type: String })
], P.prototype, "title", 2);
R([
  V({ type: String })
], P.prototype, "lead", 2);
R([
  V({ type: String })
], P.prototype, "email", 2);
R([
  V({ type: String })
], P.prototype, "phone", 2);
R([
  V({ type: String })
], P.prototype, "address", 2);
R([
  V({ type: String })
], P.prototype, "layout", 2);
R([
  V({ type: String, attribute: "theme-style" })
], P.prototype, "themeStyle", 2);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], P.prototype, "titleConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
], P.prototype, "leadConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Email Contact",
    fieldMappings: "email"
  })
], P.prototype, "emailConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Phone Contact",
    fieldMappings: "phone"
  })
], P.prototype, "phoneConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: U.TEXT_INPUT,
    displayLabel: "Address Location",
    fieldMappings: "address"
  })
], P.prototype, "addressConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Split Details & Inquiry Form", value: "layout-1" },
      { label: "Centered Details Panel", value: "layout-2" }
    ]
  })
], P.prototype, "layoutConfig", 1);
R([
  L({
    attributeType: D.PROPERTY,
    uiComponentType: U.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" }
    ]
  })
], P.prototype, "themeStyleConfig", 1);
R([
  L({
    attributeType: D.EVENT,
    displayLabel: "On Submit inquiry",
    eventTrigger: "submit"
  })
], P.prototype, "handleSubmit", 1);
P = R([
  je({
    name: "zero-block-contact",
    version: "1.0.0",
    title: "Contact Block",
    elementSelector: "zero-block-contact",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  ze()
], P);
export {
  P as ZeroBlockContact,
  fr as studioTemplate
};
