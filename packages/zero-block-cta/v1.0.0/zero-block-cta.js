var De = Object.defineProperty;
var je = (r, t, e) => t in r ? De(r, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : r[t] = e;
var Wt = (r, t, e) => je(r, typeof t != "symbol" ? t + "" : t, e);
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
    var e = typeof globalThis == "object" ? globalThis : typeof Ft == "object" ? Ft : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = o(r);
    typeof e.Reflect < "u" && (n = o(e.Reflect, n)), t(n, e), typeof e.Reflect > "u" && (e.Reflect = r);
    function o(p, x) {
      return function(w, $) {
        Object.defineProperty(p, w, { configurable: !0, writable: !0, value: $ }), x && x(w, $);
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", p = { __proto__: [] } instanceof Array, x = !g && !p, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return vt(/* @__PURE__ */ Object.create(null));
      } : p ? function() {
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
    }, $ = Object.getPrototypeOf(Function), R = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Re(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : ke(), H = typeof WeakMap == "function" ? WeakMap : Ue(), q = o ? Symbol.for("@reflect-metadata:registry") : void 0, at = Oe(), Ct = Me(at);
    function de(i, s, a, c) {
      if (m(a)) {
        if (!Dt(i))
          throw new TypeError();
        if (!jt(s))
          throw new TypeError();
        return we(i, s);
      } else {
        if (!Dt(i))
          throw new TypeError();
        if (!T(s))
          throw new TypeError();
        if (!T(c) && !m(c) && !Y(c))
          throw new TypeError();
        return Y(c) && (c = void 0), a = I(a), $e(i, s, a, c);
      }
    }
    t("decorate", de);
    function he(i, s) {
      function a(c, v) {
        if (!T(c))
          throw new TypeError();
        if (!m(v) && !Te(v))
          throw new TypeError();
        Rt(i, s, c, v);
      }
      return a;
    }
    t("metadata", he);
    function fe(i, s, a, c) {
      if (!T(a))
        throw new TypeError();
      return m(c) || (c = I(c)), Rt(i, s, a, c);
    }
    t("defineMetadata", fe);
    function pe(i, s, a) {
      if (!T(s))
        throw new TypeError();
      return m(a) || (a = I(a)), Ot(i, s, a);
    }
    t("hasMetadata", pe);
    function ye(i, s, a) {
      if (!T(s))
        throw new TypeError();
      return m(a) || (a = I(a)), ft(i, s, a);
    }
    t("hasOwnMetadata", ye);
    function ve(i, s, a) {
      if (!T(s))
        throw new TypeError();
      return m(a) || (a = I(a)), Mt(i, s, a);
    }
    t("getMetadata", ve);
    function ge(i, s, a) {
      if (!T(s))
        throw new TypeError();
      return m(a) || (a = I(a)), Pt(i, s, a);
    }
    t("getOwnMetadata", ge);
    function me(i, s) {
      if (!T(i))
        throw new TypeError();
      return m(s) || (s = I(s)), kt(i, s);
    }
    t("getMetadataKeys", me);
    function _e(i, s) {
      if (!T(i))
        throw new TypeError();
      return m(s) || (s = I(s)), Ut(i, s);
    }
    t("getOwnMetadataKeys", _e);
    function be(i, s, a) {
      if (!T(s))
        throw new TypeError();
      if (m(a) || (a = I(a)), !T(s))
        throw new TypeError();
      m(a) || (a = I(a));
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    t("deleteMetadata", be);
    function we(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(s);
        if (!m(v) && !Y(v)) {
          if (!jt(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function $e(i, s, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var O = i[v], C = O(s, a, c);
        if (!m(C) && !Y(C)) {
          if (!T(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function Ot(i, s, a) {
      var c = ft(i, s, a);
      if (c)
        return !0;
      var v = yt(s);
      return Y(v) ? !1 : Ot(i, v, a);
    }
    function ft(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : It(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Mt(i, s, a) {
      var c = ft(i, s, a);
      if (c)
        return Pt(i, s, a);
      var v = yt(s);
      if (!Y(v))
        return Mt(i, v, a);
    }
    function Pt(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Rt(i, s, a, c) {
      var v = Q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function kt(i, s) {
      var a = Ut(i, s), c = yt(i);
      if (c === null)
        return a;
      var v = kt(c, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var O = new k(), C = [], _ = 0, d = a; _ < d.length; _++) {
        var h = d[_], f = O.has(h);
        f || (O.add(h), C.push(h));
      }
      for (var y = 0, b = v; y < b.length; y++) {
        var h = b[y], f = O.has(h);
        f || (O.add(h), C.push(h));
      }
      return C;
    }
    function Ut(i, s) {
      var a = Q(
        i,
        s,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, s) : [];
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
    function m(i) {
      return i === void 0;
    }
    function Y(i) {
      return i === null;
    }
    function xe(i) {
      return typeof i == "symbol";
    }
    function T(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function Ee(i, s) {
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
      var a = "string", c = Ht(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (T(v))
          throw new TypeError();
        return v;
      }
      return Ae(i);
    }
    function Ae(i, s) {
      var a, c;
      {
        var v = i.toString;
        if (lt(v)) {
          var c = v.call(i);
          if (!T(c))
            return c;
        }
        var a = i.valueOf;
        if (lt(a)) {
          var c = a.call(i);
          if (!T(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function It(i) {
      return !!i;
    }
    function Se(i) {
      return "" + i;
    }
    function I(i) {
      var s = Ee(i);
      return xe(s) ? s : Se(s);
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
    function pt(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ht(i, s) {
      var a = i[s];
      if (a != null) {
        if (!lt(a))
          throw new TypeError();
        return a;
      }
    }
    function Lt(i) {
      var s = Ht(i, u);
      if (!lt(s))
        throw new TypeError();
      var a = s.call(i);
      if (!T(a))
        throw new TypeError();
      return a;
    }
    function zt(i) {
      return i.value;
    }
    function Bt(i) {
      var s = i.next();
      return s.done ? !1 : s;
    }
    function Gt(i) {
      var s = i.return;
      s && s.call(i);
    }
    function yt(i) {
      var s = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || s !== $)
        return s;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return s;
      var v = c.constructor;
      return typeof v != "function" || v === i ? s : v;
    }
    function Ce() {
      var i;
      !m(q) && typeof e.Reflect < "u" && !(q in e.Reflect) && typeof e.Reflect.defineMetadata == "function" && (i = Pe(e.Reflect));
      var s, a, c, v = new H(), O = {
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
          case m(s):
            s = y;
            break;
          case s === y:
            break;
          case m(a):
            a = y;
            break;
          case a === y:
            break;
          default:
            c === void 0 && (c = new k()), c.add(y);
            break;
        }
      }
      function _(y, b) {
        if (!m(s)) {
          if (s.isProviderFor(y, b))
            return s;
          if (!m(a)) {
            if (a.isProviderFor(y, b))
              return s;
            if (!m(c))
              for (var E = Lt(c); ; ) {
                var A = Bt(E);
                if (!A)
                  return;
                var U = zt(A);
                if (U.isProviderFor(y, b))
                  return Gt(E), U;
              }
          }
        }
        if (!m(i) && i.isProviderFor(y, b))
          return i;
      }
      function d(y, b) {
        var E = v.get(y), A;
        return m(E) || (A = E.get(b)), m(A) && (A = _(y, b), m(A) || (m(E) && (E = new R(), v.set(y, E)), E.set(b, A))), A;
      }
      function h(y) {
        if (m(y))
          throw new TypeError();
        return s === y || a === y || !m(c) && c.has(y);
      }
      function f(y, b, E) {
        if (!h(E))
          throw new Error("Metadata provider not registered.");
        var A = d(y, b);
        if (A !== E) {
          if (!m(A))
            return !1;
          var U = v.get(y);
          m(U) && (U = new R(), v.set(y, U)), U.set(b, E);
        }
        return !0;
      }
    }
    function Oe() {
      var i;
      return !m(q) && T(e.Reflect) && Object.isExtensible(e.Reflect) && (i = e.Reflect[q]), m(i) && (i = Ce()), !m(q) && T(e.Reflect) && Object.isExtensible(e.Reflect) && Object.defineProperty(e.Reflect, q, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Me(i) {
      var s = new H(), a = {
        isProviderFor: function(h, f) {
          var y = s.get(h);
          return m(y) ? !1 : y.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: O,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: d
      };
      return at.registerProvider(a), a;
      function c(h, f, y) {
        var b = s.get(h), E = !1;
        if (m(b)) {
          if (!y)
            return;
          b = new R(), s.set(h, b), E = !0;
        }
        var A = b.get(f);
        if (m(A)) {
          if (!y)
            return;
          if (A = new R(), b.set(f, A), !i.setProvider(h, f, a))
            throw b.delete(f), E && s.delete(h), new Error("Wrong provider for target.");
        }
        return A;
      }
      function v(h, f, y) {
        var b = c(
          f,
          y,
          /*Create*/
          !1
        );
        return m(b) ? !1 : It(b.has(h));
      }
      function O(h, f, y) {
        var b = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(h);
      }
      function C(h, f, y, b) {
        var E = c(
          y,
          b,
          /*Create*/
          !0
        );
        E.set(h, f);
      }
      function _(h, f) {
        var y = [], b = c(
          h,
          f,
          /*Create*/
          !1
        );
        if (m(b))
          return y;
        for (var E = b.keys(), A = Lt(E), U = 0; ; ) {
          var Vt = Bt(A);
          if (!Vt)
            return y.length = U, y;
          var Ne = zt(Vt);
          try {
            y[U] = Ne;
          } catch (Ie) {
            try {
              Gt(A);
            } finally {
              throw Ie;
            }
          }
          U++;
        }
      }
      function d(h, f, y) {
        var b = c(
          f,
          y,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(h))
          return !1;
        if (b.size === 0) {
          var E = s.get(f);
          m(E) || (E.delete(y), E.size === 0 && s.delete(E));
        }
        return !0;
      }
    }
    function Pe(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, O = i.deleteMetadata, C = new H(), _ = {
        isProviderFor: function(d, h) {
          var f = C.get(d);
          return !m(f) && f.has(h) ? !0 : v(d, h).length ? (m(f) && (f = new k(), C.set(d, f)), f.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: O
      };
      return _;
    }
    function Q(i, s, a) {
      var c = at.getProvider(i, s);
      if (!m(c))
        return c;
      if (a) {
        if (at.setProvider(i, s, Ct))
          return Ct;
        throw new Error("Illegal state.");
      }
    }
    function Re() {
      var i = {}, s = [], a = (
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
              for (var f = this._keys.length, y = h + 1; y < f; y++)
                this._keys[y - 1] = this._keys[y], this._values[y - 1] = this._values[y];
              return this._keys.length--, this._values.length--, pt(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(d, h) {
            if (!pt(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pt(this._keys[f], d)) {
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
      function O(_, d) {
        return d;
      }
      function C(_, d) {
        return [_, d];
      }
    }
    function ke() {
      var i = (
        /** @class */
        function() {
          function s() {
            this._map = new R();
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
    function Ue() {
      var i = 16, s = w.create(), a = c();
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
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, d.prototype.get = function(h) {
            var f = v(
              h,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
          }, d.prototype.set = function(h, f) {
            var y = v(
              h,
              /*create*/
              !0
            );
            return y[this._key] = f, this;
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
        while (w.has(s, d));
        return s[d] = !0, d;
      }
      function v(d, h) {
        if (!n.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
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
      function _() {
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
function Be(r) {
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
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, p = this.shadowRoot;
        if (!p) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), $ = (x = l.sheet) == null ? void 0 : x.cssRules;
          $ && (Array.from($).forEach((R) => w.insertRule(R.cssText)), p.adoptedStyleSheets = [...p.adoptedStyleSheets, w]);
        } else if (l) {
          const w = l.cloneNode(!0);
          p.appendChild(w);
        }
        u.forEach((w) => {
          const $ = w.cloneNode(!0);
          p.appendChild($);
        });
      }
    }
    return e;
  };
}
function Ge(r) {
  var e;
  if (((e = r == null ? void 0 : r.categoryLabel) == null ? void 0 : e.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Ve(r) {
  return function(t, e) {
    try {
      Ge(r);
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
function j(r) {
  return Ve(r);
}
var D;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(D || (D = {}));
var N;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(N || (N = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ut = globalThis, Et = ut.ShadowRoot && (ut.ShadyCSS === void 0 || ut.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, At = Symbol(), Yt = /* @__PURE__ */ new WeakMap();
let se = class {
  constructor(t, e, n) {
    if (this._$cssResult$ = !0, n !== At) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = t, this.t = e;
  }
  get styleSheet() {
    let t = this.o;
    const e = this.t;
    if (Et && t === void 0) {
      const n = e !== void 0 && e.length === 1;
      n && (t = Yt.get(e)), t === void 0 && ((this.o = t = new CSSStyleSheet()).replaceSync(this.cssText), n && Yt.set(e, t));
    }
    return t;
  }
  toString() {
    return this.cssText;
  }
};
const We = (r) => new se(typeof r == "string" ? r : r + "", void 0, At), Fe = (r, ...t) => {
  const e = r.length === 1 ? r[0] : t.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new se(e, r, At);
}, qe = (r, t) => {
  if (Et) r.adoptedStyleSheets = t.map((e) => e instanceof CSSStyleSheet ? e : e.styleSheet);
  else for (const e of t) {
    const n = document.createElement("style"), o = ut.litNonce;
    o !== void 0 && n.setAttribute("nonce", o), n.textContent = e.cssText, r.appendChild(n);
  }
}, Zt = Et ? (r) => r : (r) => r instanceof CSSStyleSheet ? ((t) => {
  let e = "";
  for (const n of t.cssRules) e += n.cssText;
  return We(e);
})(r) : r;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Ye, defineProperty: Ze, getOwnPropertyDescriptor: Xe, getOwnPropertyNames: Je, getOwnPropertySymbols: Qe, getPrototypeOf: Ke } = Object, z = globalThis, Xt = z.trustedTypes, tr = Xt ? Xt.emptyScript : "", gt = z.reactiveElementPolyfillSupport, tt = (r, t) => r, ct = { toAttribute(r, t) {
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
} }, St = (r, t) => !Ye(r, t), Jt = { attribute: !0, type: String, converter: ct, reflect: !1, useDefault: !1, hasChanged: St };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), z.litPropertyMetadata ?? (z.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
  static addInitializer(t) {
    this._$Ei(), (this.l ?? (this.l = [])).push(t);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(t, e = Jt) {
    if (e.state && (e.attribute = !1), this._$Ei(), this.prototype.hasOwnProperty(t) && ((e = Object.create(e)).wrapped = !0), this.elementProperties.set(t, e), !e.noAccessor) {
      const n = Symbol(), o = this.getPropertyDescriptor(t, n, e);
      o !== void 0 && Ze(this.prototype, t, o);
    }
  }
  static getPropertyDescriptor(t, e, n) {
    const { get: o, set: l } = Xe(this.prototype, t) ?? { get() {
      return this[e];
    }, set(u) {
      this[e] = u;
    } };
    return { get: o, set(u) {
      const g = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(t, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(t) {
    return this.elementProperties.get(t) ?? Jt;
  }
  static _$Ei() {
    if (this.hasOwnProperty(tt("elementProperties"))) return;
    const t = Ke(this);
    t.finalize(), t.l !== void 0 && (this.l = [...t.l]), this.elementProperties = new Map(t.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(tt("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(tt("properties"))) {
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
      for (const o of n) e.unshift(Zt(o));
    } else t !== void 0 && e.push(Zt(t));
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
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ct).toAttribute(e, n.type);
      this._$Em = t, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(t, e) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(t);
    if (o !== void 0 && this._$Em !== o) {
      const g = n.getPropertyOptions(o), p = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : ct;
      this._$Em = o;
      const x = p.fromAttribute(e, g.type);
      this[o] = x ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? x, this._$Em = null;
    }
  }
  requestUpdate(t, e, n, o = !1, l) {
    var u;
    if (t !== void 0) {
      const g = this.constructor;
      if (o === !1 && (l = this[t]), n ?? (n = g.getPropertyOptions(t)), !((n.hasChanged ?? St)(l, e) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(t)) && !this.hasAttribute(g._$Eu(t, n)))) return;
      this.C(t, e, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(t, e, { useDefault: n, reflect: o, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(t) && (this._$Ej.set(t, u ?? e ?? this[t]), l !== !0 || u !== void 0) || (this._$AL.has(t) || (this.hasUpdated || n || (e = void 0), this._$AL.set(t, e)), o === !0 && this._$Em !== t && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(t));
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
      const o = this.constructor.elementProperties;
      if (o.size > 0) for (const [l, u] of o) {
        const { wrapped: g } = u, p = this[l];
        g !== !0 || this._$AL.has(l) || p === void 0 || this.C(l, void 0, u, p);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[tt("elementProperties")] = /* @__PURE__ */ new Map(), Z[tt("finalized")] = /* @__PURE__ */ new Map(), gt == null || gt({ ReactiveElement: Z }), (z.reactiveElementVersions ?? (z.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const et = globalThis, Qt = (r) => r, dt = et.trustedTypes, Kt = dt ? dt.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ae = "$lit$", L = `lit$${Math.random().toFixed(9).slice(2)}$`, le = "?" + L, er = `<${le}>`, F = document, nt = () => F.createComment(""), it = (r) => r === null || typeof r != "object" && typeof r != "function", Tt = Array.isArray, rr = (r) => Tt(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", mt = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, te = /-->/g, ee = />/g, G = RegExp(`>|${mt}(?:([^\\s"'>=/]+)(${mt}*=${mt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), re = /'/g, ne = /"/g, ue = /^(?:script|style|textarea|title)$/i, nr = (r) => (t, ...e) => ({ _$litType$: r, strings: t, values: e }), _t = nr(1), X = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), ie = /* @__PURE__ */ new WeakMap(), V = F.createTreeWalker(F, 129);
function ce(r, t) {
  if (!Tt(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Kt !== void 0 ? Kt.createHTML(t) : t;
}
const ir = (r, t) => {
  const e = r.length - 1, n = [];
  let o, l = t === 2 ? "<svg>" : t === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < e; g++) {
    const p = r[g];
    let x, w, $ = -1, R = 0;
    for (; R < p.length && (u.lastIndex = R, w = u.exec(p), w !== null); ) R = u.lastIndex, u === K ? w[1] === "!--" ? u = te : w[1] !== void 0 ? u = ee : w[2] !== void 0 ? (ue.test(w[2]) && (o = RegExp("</" + w[2], "g")), u = G) : w[3] !== void 0 && (u = G) : u === G ? w[0] === ">" ? (u = o ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, x = w[1], u = w[3] === void 0 ? G : w[3] === '"' ? ne : re) : u === ne || u === re ? u = G : u === te || u === ee ? u = K : (u = G, o = void 0);
    const k = u === G && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? p + er : $ >= 0 ? (n.push(x), p.slice(0, $) + ae + p.slice($) + L + k) : p + L + ($ === -2 ? g : k);
  }
  return [ce(r, l + (r[e] || "<?>") + (t === 2 ? "</svg>" : t === 3 ? "</math>" : "")), n];
};
class ot {
  constructor({ strings: t, _$litType$: e }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const g = t.length - 1, p = this.parts, [x, w] = ir(t, e);
    if (this.el = ot.createElement(x, n), V.currentNode = this.el.content, e === 2 || e === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = V.nextNode()) !== null && p.length < g; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(ae)) {
          const R = w[u++], k = o.getAttribute($).split(L), H = /([.?@])?(.*)/.exec(R);
          p.push({ type: 1, index: l, name: H[2], strings: k, ctor: H[1] === "." ? sr : H[1] === "?" ? ar : H[1] === "@" ? lr : ht }), o.removeAttribute($);
        } else $.startsWith(L) && (p.push({ type: 6, index: l }), o.removeAttribute($));
        if (ue.test(o.tagName)) {
          const $ = o.textContent.split(L), R = $.length - 1;
          if (R > 0) {
            o.textContent = dt ? dt.emptyScript : "";
            for (let k = 0; k < R; k++) o.append($[k], nt()), V.nextNode(), p.push({ type: 2, index: ++l });
            o.append($[R], nt());
          }
        }
      } else if (o.nodeType === 8) if (o.data === le) p.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(L, $ + 1)) !== -1; ) p.push({ type: 7, index: l }), $ += L.length - 1;
      }
      l++;
    }
  }
  static createElement(t, e) {
    const n = F.createElement("template");
    return n.innerHTML = t, n;
  }
}
function J(r, t, e = r, n) {
  var u, g;
  if (t === X) return t;
  let o = n !== void 0 ? (u = e._$Co) == null ? void 0 : u[n] : e._$Cl;
  const l = it(t) ? void 0 : t._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((g = o == null ? void 0 : o._$AO) == null || g.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, e, n)), n !== void 0 ? (e._$Co ?? (e._$Co = []))[n] = o : e._$Cl = o), o !== void 0 && (t = J(r, o._$AS(r, t.values), o, n)), t;
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
    const { el: { content: e }, parts: n } = this._$AD, o = ((t == null ? void 0 : t.creationScope) ?? F).importNode(e, !0);
    V.currentNode = o;
    let l = V.nextNode(), u = 0, g = 0, p = n[0];
    for (; p !== void 0; ) {
      if (u === p.index) {
        let x;
        p.type === 2 ? x = new st(l, l.nextSibling, this, t) : p.type === 1 ? x = new p.ctor(l, p.name, p.strings, this, t) : p.type === 6 && (x = new ur(l, this, t)), this._$AV.push(x), p = n[++g];
      }
      u !== (p == null ? void 0 : p.index) && (l = V.nextNode(), u++);
    }
    return V.currentNode = F, o;
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
  constructor(t, e, n, o) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = t, this._$AB = e, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    t = J(this, t, e), it(t) ? t === M || t == null || t === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : t !== this._$AH && t !== X && this._(t) : t._$litType$ !== void 0 ? this.$(t) : t.nodeType !== void 0 ? this.T(t) : rr(t) ? this.k(t) : this._(t);
  }
  O(t) {
    return this._$AA.parentNode.insertBefore(t, this._$AB);
  }
  T(t) {
    this._$AH !== t && (this._$AR(), this._$AH = this.O(t));
  }
  _(t) {
    this._$AH !== M && it(this._$AH) ? this._$AA.nextSibling.data = t : this.T(F.createTextNode(t)), this._$AH = t;
  }
  $(t) {
    var l;
    const { values: e, _$litType$: n } = t, o = typeof n == "number" ? this._$AC(t) : (n.el === void 0 && (n.el = ot.createElement(ce(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(e);
    else {
      const u = new or(o, this), g = u.u(this.options);
      u.p(e), this.T(g), this._$AH = u;
    }
  }
  _$AC(t) {
    let e = ie.get(t.strings);
    return e === void 0 && ie.set(t.strings, e = new ot(t)), e;
  }
  k(t) {
    Tt(this._$AH) || (this._$AH = [], this._$AR());
    const e = this._$AH;
    let n, o = 0;
    for (const l of t) o === e.length ? e.push(n = new st(this.O(nt()), this.O(nt()), this, this.options)) : n = e[o], n._$AI(l), o++;
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
class ht {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(t, e, n, o, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = t, this.name = e, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(t, e = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) t = J(this, t, e, 0), u = !it(t) || t !== this._$AH && t !== X, u && (this._$AH = t);
    else {
      const g = t;
      let p, x;
      for (t = l[0], p = 0; p < l.length - 1; p++) x = J(this, g[n + p], e, p), x === X && (x = this._$AH[p]), u || (u = !it(x) || x !== this._$AH[p]), x === M ? t = M : t !== M && (t += (x ?? "") + l[p + 1]), this._$AH[p] = x;
    }
    u && !o && this.j(t);
  }
  j(t) {
    t === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t ?? "");
  }
}
class sr extends ht {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(t) {
    this.element[this.name] = t === M ? void 0 : t;
  }
}
class ar extends ht {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(t) {
    this.element.toggleAttribute(this.name, !!t && t !== M);
  }
}
class lr extends ht {
  constructor(t, e, n, o, l) {
    super(t, e, n, o, l), this.type = 5;
  }
  _$AI(t, e = this) {
    if ((t = J(this, t, e, 0) ?? M) === X) return;
    const n = this._$AH, o = t === M && n !== M || t.capture !== n.capture || t.once !== n.once || t.passive !== n.passive, l = t !== M && (n === M || o);
    o && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, t), this._$AH = t;
  }
  handleEvent(t) {
    var e;
    typeof this._$AH == "function" ? this._$AH.call(((e = this.options) == null ? void 0 : e.host) ?? this.element, t) : this._$AH.handleEvent(t);
  }
}
class ur {
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
bt == null || bt(ot, st), (et.litHtmlVersions ?? (et.litHtmlVersions = [])).push("3.3.3");
const cr = (r, t, e) => {
  const n = (e == null ? void 0 : e.renderBefore) ?? t;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (e == null ? void 0 : e.renderBefore) ?? null;
    n._$litPart$ = o = new st(t.insertBefore(nt(), l), l, void 0, e ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const W = globalThis;
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
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t), this._$Do = cr(e, this.renderRoot, this.renderOptions);
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
var oe;
rt._$litElement$ = !0, rt.finalized = !0, (oe = W.litElementHydrateSupport) == null || oe.call(W, { LitElement: rt });
const wt = W.litElementPolyfillSupport;
wt == null || wt({ LitElement: rt });
(W.litElementVersions ?? (W.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const dr = { attribute: !0, type: String, converter: ct, reflect: !1, hasChanged: St }, hr = (r = dr, t, e) => {
  const { kind: n, metadata: o } = e;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(e.name, r), n === "accessor") {
    const { name: u } = e;
    return { set(g) {
      const p = t.get.call(this);
      t.set.call(this, g), this.requestUpdate(u, p, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = e;
    return function(g) {
      const p = this[u];
      t.call(this, g), this.requestUpdate(u, p, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function B(r) {
  return (t, e) => typeof e == "object" ? hr(r, t, e) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, t, e);
}
var fr = Object.defineProperty, pr = Object.getOwnPropertyDescriptor, P = (r, t, e, n) => {
  for (var o = n > 1 ? void 0 : n ? pr(t, e) : t, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(t, e, o) : u(o)) || o);
  return n && o && fr(t, e, o), o;
};
const $t = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#f3f4f6;text-align:center;border-radius:12px;font-family:inherit;'>",
    "<h2 style='font-size:24px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:14px;color:#4b5563;max-width:500px;margin:0 auto 20px;'>{{props:lead}}</p>",
    "<div style='display:flex;justify-content:center;gap:8px;'>",
    "<input type='text' placeholder='Enter your email' style='padding:8px 12px;border:1px solid #d1d5db;border-radius:6px;font-size:13px;outline:none;' disabled>",
    "<span style='padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Subscribe</span>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "CTA"]
};
function xt(r) {
  return r.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}
let S = class extends rt {
  constructor() {
    super(...arguments), this.title = "Stay Updated with Us", this.lead = "Join our newsletter registry and get notifications about product drops.", this.ctaText = "Get Started", this.ctaUrl = "#", this.placeholder = "Enter your email address", this.buttonText = "Subscribe", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    var l, u, g, p, x, w;
    if (!r) return $t;
    const t = xt(((l = r.props) == null ? void 0 : l.title) ?? ((u = r.studio.props) == null ? void 0 : u.title) ?? "Call to Action"), e = xt(((g = r.props) == null ? void 0 : g.lead) ?? ((p = r.studio.props) == null ? void 0 : p.lead) ?? "Ready to try our service?"), n = ((x = r.props) == null ? void 0 : x.layout) ?? "layout-1", o = xt(((w = r.props) == null ? void 0 : w.ctaText) ?? "Get Started");
    return n === "layout-1" ? $t : {
      ...$t,
      templateHtml: [
        "<section style='padding:32px 5%;background:#f3f4f6;display:flex;justify-content:between;align-items:center;font-family:inherit;box-sizing:border-box;'>",
        "<div style='text-align:left;'>",
        `<h2 style='font-size:22px;font-weight:700;color:#111827;margin:0 0 4px 0;'>${t}</h2>`,
        `<p style='font-size:14px;color:#4b5563;margin:0;'>${e}</p>`,
        "</div>",
        `<span style='padding:11px 22px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-weight:600;font-size:14px;'>${o}</span>`,
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
  get ctaTextConfig() {
    return this.ctaText;
  }
  set ctaTextConfig(r) {
    this.ctaText = r;
  }
  get ctaUrlConfig() {
    return this.ctaUrl;
  }
  set ctaUrlConfig(r) {
    this.ctaUrl = r;
  }
  get placeholderConfig() {
    return this.placeholder;
  }
  set placeholderConfig(r) {
    this.placeholder = r;
  }
  get buttonTextConfig() {
    return this.buttonText;
  }
  set buttonTextConfig(r) {
    this.buttonText = r;
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
    var n;
    r.preventDefault();
    const t = (n = this.shadowRoot) == null ? void 0 : n.querySelector('input[type="email"]'), e = t ? t.value : "";
    this.dispatchEvent(new CustomEvent("submit", {
      detail: { email: e },
      bubbles: !0,
      composed: !0
    }));
  }
  render() {
    return _t`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        ${this.layout === "layout-1" ? _t`
          <div class="box-centered">
            <h2>${this.title}</h2>
            <p class="lead">${this.lead}</p>
            <form class="form-group" @submit=${this.handleSubmit}>
              <input type="email" placeholder="${this.placeholder}" required>
              <button type="submit" class="btn-submit">${this.buttonText}</button>
            </form>
          </div>
        ` : _t`
          <div class="box-row">
            <div style="text-align: left;">
              <h2>${this.title}</h2>
              <p class="lead">${this.lead}</p>
            </div>
            <a class="btn-redirect" href="${this.ctaUrl}">${this.ctaText}</a>
          </div>
        `}
      </section>
    `;
  }
};
S.styles = Fe`
    :host {
      display: block;
      width: 100%;
      --cta-bg: var(--uiv-surface-color, #ffffff);
      --cta-text: var(--uiv-text-color, #111827);
      --cta-lead: #4b5563;
      --cta-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 70px 6%;
      background: var(--cta-bg);
      color: var(--cta-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --cta-bg: #111827;
      --cta-text: #f9fafb;
      --cta-lead: #9ca3af;
    }

    section.theme-gradient {
      background: linear-gradient(135deg, rgba(99, 102, 241, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%);
    }

    .box-centered {
      text-align: center;
      max-width: 650px;
      margin: 0 auto;
    }

    .box-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
    }

    h2 {
      font-size: 2.1rem;
      font-weight: 800;
      margin: 0 0 12px 0;
      letter-spacing: -0.02em;
    }

    p.lead {
      font-size: 1.05rem;
      line-height: 1.5;
      color: var(--cta-lead);
      margin: 0 0 28px 0;
    }

    .box-row h2 {
      margin: 0 0 4px 0;
      font-size: 1.85rem;
    }

    .box-row p.lead {
      margin: 0;
    }

    /* Form Styles */
    .form-group {
      display: inline-flex;
      gap: 10px;
      width: 100%;
      max-width: 450px;
    }

    input[type="email"] {
      flex: 1;
      padding: 12px 16px;
      font-size: 0.95rem;
      border: 1px solid var(--uiv-border-color, #d1d5db);
      border-radius: 6px;
      outline: none;
      background: var(--uiv-surface-color, #ffffff);
      color: inherit;
      box-shadow: inset 0 1px 3px rgba(0,0,0,0.05);
    }

    input[type="email"]:focus {
      border-color: var(--cta-accent);
      box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.15);
    }

    .btn-submit {
      padding: 12px 24px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--cta-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: opacity 0.2s ease;
    }

    .btn-submit:hover {
      opacity: 0.95;
    }

    .btn-redirect {
      padding: 13px 28px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--cta-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease, transform 0.15s ease;
    }

    .btn-redirect:hover {
      opacity: 0.95;
      transform: translateY(-1px);
    }

    @media (max-width: 768px) {
      .box-row {
        flex-direction: column !important;
        text-align: center !important;
      }
      .box-row .btn-redirect {
        width: 100%;
        box-sizing: border-box;
      }
    }
  `;
P([
  B({ type: String })
], S.prototype, "title", 2);
P([
  B({ type: String })
], S.prototype, "lead", 2);
P([
  B({ type: String, attribute: "cta-text" })
], S.prototype, "ctaText", 2);
P([
  B({ type: String, attribute: "cta-url" })
], S.prototype, "ctaUrl", 2);
P([
  B({ type: String })
], S.prototype, "placeholder", 2);
P([
  B({ type: String, attribute: "button-text" })
], S.prototype, "buttonText", 2);
P([
  B({ type: String })
], S.prototype, "layout", 2);
P([
  B({ type: String, attribute: "theme-style" })
], S.prototype, "themeStyle", 2);
P([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Headline Title",
    fieldMappings: "title"
  })
], S.prototype, "titleConfig", 1);
P([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Lead Copy Paragraph",
    fieldMappings: "lead"
  })
], S.prototype, "leadConfig", 1);
P([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Redirect Button Label",
    fieldMappings: "ctaText"
  })
], S.prototype, "ctaTextConfig", 1);
P([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Redirect Target URL",
    fieldMappings: "ctaUrl"
  })
], S.prototype, "ctaUrlConfig", 1);
P([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Input Field Placeholder",
    fieldMappings: "placeholder"
  })
], S.prototype, "placeholderConfig", 1);
P([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: D.TEXT_INPUT,
    displayLabel: "Form Button Text",
    fieldMappings: "buttonText"
  })
], S.prototype, "buttonTextConfig", 1);
P([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Centered Newsletter Form", value: "layout-1" },
      { label: "Horizontal Conversion Banner", value: "layout-2" }
    ]
  })
], S.prototype, "layoutConfig", 1);
P([
  j({
    attributeType: N.PROPERTY,
    uiComponentType: D.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Standard Light", value: "light" },
      { label: "Standard Dark", value: "dark" },
      { label: "Gradient Vignette", value: "gradient" }
    ]
  })
], S.prototype, "themeStyleConfig", 1);
P([
  j({
    attributeType: N.EVENT,
    displayLabel: "On Submit",
    eventTrigger: "submit"
  })
], S.prototype, "handleSubmit", 1);
S = P([
  ze({
    name: "zero-block-cta",
    version: "1.0.0",
    title: "CTA Block",
    elementSelector: "zero-block-cta",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Be()
], S);
export {
  S as ZeroBlockCta,
  $t as studioTemplate
};
