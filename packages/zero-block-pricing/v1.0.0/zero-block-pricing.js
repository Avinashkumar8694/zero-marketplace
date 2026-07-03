var Ut = Object.defineProperty;
var Dt = (r, e, t) => e in r ? Ut(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => Dt(r, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = s(r);
    typeof t.Reflect < "u" && (n = s(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function s(y, E) {
      return function(w, $) {
        Object.defineProperty(y, w, { configurable: !0, writable: !0, value: $ }), E && E(w, $);
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
  })(function(e, t) {
    var n = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", l = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ge(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ge({ __proto__: null });
      } : function() {
        return ge({});
      },
      has: E ? function(i, o) {
        return n.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: E ? function(i, o) {
        return n.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, $ = Object.getPrototypeOf(Function), C = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ct(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Tt(), D = typeof WeakMap == "function" ? WeakMap : kt(), V = s ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Ot(), xe = Pt(ae);
    function ut(i, o, a, c) {
      if (m(a)) {
        if (!Ue(i))
          throw new TypeError();
        if (!De(o))
          throw new TypeError();
        return _t(i, o);
      } else {
        if (!Ue(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(c) && !m(c) && !F(c))
          throw new TypeError();
        return F(c) && (c = void 0), a = U(a), bt(i, o, a, c);
      }
    }
    e("decorate", ut);
    function ct(i, o) {
      function a(c, v) {
        if (!x(c))
          throw new TypeError();
        if (!m(v) && !At(v))
          throw new TypeError();
        Ce(i, o, c, v);
      }
      return a;
    }
    e("metadata", ct);
    function dt(i, o, a, c) {
      if (!x(a))
        throw new TypeError();
      return m(c) || (c = U(c)), Ce(i, o, a, c);
    }
    e("defineMetadata", dt);
    function ft(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = U(a)), Oe(i, o, a);
    }
    e("hasMetadata", ft);
    function ht(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = U(a)), pe(i, o, a);
    }
    e("hasOwnMetadata", ht);
    function pt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = U(a)), Pe(i, o, a);
    }
    e("getMetadata", pt);
    function yt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return m(a) || (a = U(a)), Me(i, o, a);
    }
    e("getOwnMetadata", yt);
    function vt(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = U(o)), Te(i, o);
    }
    e("getMetadataKeys", vt);
    function gt(i, o) {
      if (!x(i))
        throw new TypeError();
      return m(o) || (o = U(o)), ke(i, o);
    }
    e("getOwnMetadataKeys", gt);
    function mt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (m(a) || (a = U(a)), !x(o))
        throw new TypeError();
      m(a) || (a = U(a));
      var c = X(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : c.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", mt);
    function _t(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(o);
        if (!m(v) && !F(v)) {
          if (!De(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function bt(i, o, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var P = i[v], O = P(o, a, c);
        if (!m(O) && !F(O)) {
          if (!x(O))
            throw new TypeError();
          c = O;
        }
      }
      return c;
    }
    function Oe(i, o, a) {
      var c = pe(i, o, a);
      if (c)
        return !0;
      var v = ve(o);
      return F(v) ? !1 : Oe(i, v, a);
    }
    function pe(i, o, a) {
      var c = X(
        o,
        a,
        /*Create*/
        !1
      );
      return m(c) ? !1 : Ne(c.OrdinaryHasOwnMetadata(i, o, a));
    }
    function Pe(i, o, a) {
      var c = pe(i, o, a);
      if (c)
        return Me(i, o, a);
      var v = ve(o);
      if (!F(v))
        return Pe(i, v, a);
    }
    function Me(i, o, a) {
      var c = X(
        o,
        a,
        /*Create*/
        !1
      );
      if (!m(c))
        return c.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Ce(i, o, a, c) {
      var v = X(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, c);
    }
    function Te(i, o) {
      var a = ke(i, o), c = ve(i);
      if (c === null)
        return a;
      var v = Te(c, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var P = new k(), O = [], _ = 0, d = a; _ < d.length; _++) {
        var f = d[_], h = P.has(f);
        h || (P.add(f), O.push(f));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var f = b[p], h = P.has(f);
        h || (P.add(f), O.push(f));
      }
      return O;
    }
    function ke(i, o) {
      var a = X(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
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
    function m(i) {
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
    function wt(i, o) {
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
      var a = "string", c = Ie(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return Et(i);
    }
    function Et(i, o) {
      var a, c;
      {
        var v = i.toString;
        if (le(v)) {
          var c = v.call(i);
          if (!x(c))
            return c;
        }
        var a = i.valueOf;
        if (le(a)) {
          var c = a.call(i);
          if (!x(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ne(i) {
      return !!i;
    }
    function St(i) {
      return "" + i;
    }
    function U(i) {
      var o = wt(i);
      return $t(o) ? o : St(o);
    }
    function Ue(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function De(i) {
      return typeof i == "function";
    }
    function At(i) {
      switch (Re(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function ye(i, o) {
      return i === o || i !== i && o !== o;
    }
    function Ie(i, o) {
      var a = i[o];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function je(i) {
      var o = Ie(i, u);
      if (!le(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function He(i) {
      return i.value;
    }
    function ze(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function Le(i) {
      var o = i.return;
      o && o.call(i);
    }
    function ve(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === $ || o !== $)
        return o;
      var a = i.prototype, c = a && Object.getPrototypeOf(a);
      if (c == null || c === Object.prototype)
        return o;
      var v = c.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function xt() {
      var i;
      !m(V) && typeof t.Reflect < "u" && !(V in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Mt(t.Reflect));
      var o, a, c, v = new D(), P = {
        registerProvider: O,
        getProvider: d,
        setProvider: h
      };
      return P;
      function O(p) {
        if (!Object.isExtensible(P))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case m(o):
            o = p;
            break;
          case o === p:
            break;
          case m(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new k()), c.add(p);
            break;
        }
      }
      function _(p, b) {
        if (!m(o)) {
          if (o.isProviderFor(p, b))
            return o;
          if (!m(a)) {
            if (a.isProviderFor(p, b))
              return o;
            if (!m(c))
              for (var S = je(c); ; ) {
                var A = ze(S);
                if (!A)
                  return;
                var R = He(A);
                if (R.isProviderFor(p, b))
                  return Le(S), R;
              }
          }
        }
        if (!m(i) && i.isProviderFor(p, b))
          return i;
      }
      function d(p, b) {
        var S = v.get(p), A;
        return m(S) || (A = S.get(b)), m(A) && (A = _(p, b), m(A) || (m(S) && (S = new C(), v.set(p, S)), S.set(b, A))), A;
      }
      function f(p) {
        if (m(p))
          throw new TypeError();
        return o === p || a === p || !m(c) && c.has(p);
      }
      function h(p, b, S) {
        if (!f(S))
          throw new Error("Metadata provider not registered.");
        var A = d(p, b);
        if (A !== S) {
          if (!m(A))
            return !1;
          var R = v.get(p);
          m(R) && (R = new C(), v.set(p, R)), R.set(b, S);
        }
        return !0;
      }
    }
    function Ot() {
      var i;
      return !m(V) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[V]), m(i) && (i = xt()), !m(V) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, V, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Pt(i) {
      var o = new D(), a = {
        isProviderFor: function(f, h) {
          var p = o.get(f);
          return m(p) ? !1 : p.has(h);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: P,
        OrdinaryOwnMetadataKeys: _,
        OrdinaryDeleteMetadata: d
      };
      return ae.registerProvider(a), a;
      function c(f, h, p) {
        var b = o.get(f), S = !1;
        if (m(b)) {
          if (!p)
            return;
          b = new C(), o.set(f, b), S = !0;
        }
        var A = b.get(h);
        if (m(A)) {
          if (!p)
            return;
          if (A = new C(), b.set(h, A), !i.setProvider(f, h, a))
            throw b.delete(h), S && o.delete(f), new Error("Wrong provider for target.");
        }
        return A;
      }
      function v(f, h, p) {
        var b = c(
          h,
          p,
          /*Create*/
          !1
        );
        return m(b) ? !1 : Ne(b.has(f));
      }
      function P(f, h, p) {
        var b = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (!m(b))
          return b.get(f);
      }
      function O(f, h, p, b) {
        var S = c(
          p,
          b,
          /*Create*/
          !0
        );
        S.set(f, h);
      }
      function _(f, h) {
        var p = [], b = c(
          f,
          h,
          /*Create*/
          !1
        );
        if (m(b))
          return p;
        for (var S = b.keys(), A = je(S), R = 0; ; ) {
          var Be = ze(A);
          if (!Be)
            return p.length = R, p;
          var Rt = He(Be);
          try {
            p[R] = Rt;
          } catch (Nt) {
            try {
              Le(A);
            } finally {
              throw Nt;
            }
          }
          R++;
        }
      }
      function d(f, h, p) {
        var b = c(
          h,
          p,
          /*Create*/
          !1
        );
        if (m(b) || !b.delete(f))
          return !1;
        if (b.size === 0) {
          var S = o.get(h);
          m(S) || (S.delete(p), S.size === 0 && o.delete(S));
        }
        return !0;
      }
    }
    function Mt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, P = i.deleteMetadata, O = new D(), _ = {
        isProviderFor: function(d, f) {
          var h = O.get(d);
          return !m(h) && h.has(f) ? !0 : v(d, f).length ? (m(h) && (h = new k(), O.set(d, h)), h.add(f), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: P
      };
      return _;
    }
    function X(i, o, a) {
      var c = ae.getProvider(i, o);
      if (!m(c))
        return c;
      if (a) {
        if (ae.setProvider(i, o, xe))
          return xe;
        throw new Error("Illegal state.");
      }
    }
    function Ct() {
      var i = {}, o = [], a = (
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
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: f, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, _.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, _.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
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
              return this._keys.length--, this._values.length--, ye(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, _.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, _.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, _.prototype.values = function() {
            return new a(this._keys, this._values, P);
          }, _.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, _.prototype["@@iterator"] = function() {
            return this.entries();
          }, _.prototype[u] = function() {
            return this.entries();
          }, _.prototype._find = function(d, f) {
            if (!ye(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var h = 0; h < this._keys.length; h++)
                if (ye(this._keys[h], d)) {
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
      function P(_, d) {
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
          function o() {
            this._map = new C();
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
    function kt() {
      var i = 16, o = w.create(), a = c();
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
        while (w.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, f) {
        if (!n.call(d, a)) {
          if (!f)
            return;
          Object.defineProperty(d, a, { value: w.create() });
        }
        return d[a];
      }
      function P(d, f) {
        for (var h = 0; h < f; ++h)
          d[h] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var f = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(f) : typeof msCrypto < "u" ? msCrypto.getRandomValues(f) : P(f, d), f;
        }
        return P(new Array(d), d);
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
    function ge(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function It(r) {
  return typeof r.name == "string" && typeof r.version == "string" && typeof r.title == "string" && typeof r.elementSelector == "string" && typeof r.group == "string" && typeof r.iconName == "string";
}
function jt(r) {
  return function(e) {
    if (It(r)) {
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
function zt(r) {
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((C) => w.insertRule(C.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
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
function Lt(r) {
  var t;
  if (((t = r == null ? void 0 : r.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Bt(r) {
  return function(e, t) {
    try {
      Lt(r);
      const n = [...Reflect.getMetadata("ZeroAttribute", e) || []];
      let s = !0;
      if (typeof t == "string") {
        try {
          s = typeof e[t] != "function";
        } catch {
          s = !0;
        }
        s && (r.fieldMappings = r.fieldMappings ?? t);
      }
      n.push(r), Reflect.defineMetadata("ZeroAttribute", n, e);
    } catch (n) {
      console.log(n);
    }
  };
}
function ie(r) {
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
const ce = globalThis, we = ce.ShadowRoot && (ce.ShadyCSS === void 0 || ce.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
let it = class {
  constructor(e, t, n) {
    if (this._$cssResult$ = !0, n !== Ee) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const n = t !== void 0 && t.length === 1;
      n && (e = Fe.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), n && Fe.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const Gt = (r) => new it(typeof r == "string" ? r : r + "", void 0, Ee), Wt = (r, ...e) => {
  const t = r.length === 1 ? r[0] : e.reduce((n, s, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + r[l + 1], r[0]);
  return new it(t, r, Ee);
}, Vt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), s = ce.litNonce;
    s !== void 0 && n.setAttribute("nonce", s), n.textContent = t.cssText, r.appendChild(n);
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
const { is: Ft, defineProperty: Jt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Xt, getPrototypeOf: Yt } = Object, j = globalThis, qe = j.trustedTypes, Qt = qe ? qe.emptyScript : "", me = j.reactiveElementPolyfillSupport, Q = (r, e) => r, de = { toAttribute(r, e) {
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
} }, Se = (r, e) => !Ft(r, e), Ze = { attribute: !0, type: String, converter: de, reflect: !1, useDefault: !1, hasChanged: Se };
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
      const n = Symbol(), s = this.getPropertyDescriptor(e, n, t);
      s !== void 0 && Jt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, n) {
    const { get: s, set: l } = qt(this.prototype, e) ?? { get() {
      return this[t];
    }, set(u) {
      this[t] = u;
    } };
    return { get: s, set(u) {
      const g = s == null ? void 0 : s.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(Q("elementProperties"))) return;
    const e = Yt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(Q("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(Q("properties"))) {
      const t = this.properties, n = [...Zt(t), ...Xt(t)];
      for (const s of n) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [n, s] of t) this.elementProperties.set(n, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, n] of this.elementProperties) {
      const s = this._$Eu(t, n);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const n = new Set(e.flat(1 / 0).reverse());
      for (const s of n) t.unshift(Je(s));
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
    const n = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, n);
    if (s !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : de).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(s) : this.setAttribute(s, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, s = n._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const g = n.getPropertyOptions(s), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : de;
      this._$Em = s;
      const E = y.fromAttribute(t, g.type);
      this[s] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(s)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, s = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (s === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Se)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
      this.C(e, t, n);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$EP());
  }
  C(e, t, { useDefault: n, reflect: s, wrapped: l }, u) {
    n && !(this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Map())).has(e) && (this._$Ej.set(e, u ?? t ?? this[e]), l !== !0 || u !== void 0) || (this._$AL.has(e) || (this.hasUpdated || n || (t = void 0), this._$AL.set(e, t)), s === !0 && this._$Em !== e && (this._$Eq ?? (this._$Eq = /* @__PURE__ */ new Set())).add(e));
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
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [l, u] of s) {
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
      }
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (n = this._$EO) == null || n.forEach((s) => {
        var l;
        return (l = s.hostUpdate) == null ? void 0 : l.call(s);
      }), this.update(t)) : this._$EM();
    } catch (s) {
      throw e = !1, this._$EM(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((n) => {
      var s;
      return (s = n.hostUpdated) == null ? void 0 : s.call(n);
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
J.elementStyles = [], J.shadowRootOptions = { mode: "open" }, J[Q("elementProperties")] = /* @__PURE__ */ new Map(), J[Q("finalized")] = /* @__PURE__ */ new Map(), me == null || me({ ReactiveElement: J }), (j.reactiveElementVersions ?? (j.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const K = globalThis, Xe = (r) => r, fe = K.trustedTypes, Ye = fe ? fe.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, st = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, ot = "?" + I, Kt = `<${ot}>`, W = document, te = () => W.createComment(""), re = (r) => r === null || typeof r != "object" && typeof r != "function", Ae = Array.isArray, er = (r) => Ae(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, Y = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, H = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, at = /^(?:script|style|textarea|title)$/i, tr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), ue = tr(1), q = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), z = W.createTreeWalker(W, 129);
function lt(r, e) {
  if (!Ae(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Ye !== void 0 ? Ye.createHTML(e) : e;
}
const rr = (r, e) => {
  const t = r.length - 1, n = [];
  let s, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = Y;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, w, $ = -1, C = 0;
    for (; C < y.length && (u.lastIndex = C, w = u.exec(y), w !== null); ) C = u.lastIndex, u === Y ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (at.test(w[2]) && (s = RegExp("</" + w[2], "g")), u = H) : w[3] !== void 0 && (u = H) : u === H ? w[0] === ">" ? (u = s ?? Y, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? H : w[3] === '"' ? tt : et) : u === tt || u === et ? u = H : u === Qe || u === Ke ? u = Y : (u = H, s = void 0);
    const k = u === H && r[g + 1].startsWith("/>") ? " " : "";
    l += u === Y ? y + Kt : $ >= 0 ? (n.push(E), y.slice(0, $) + st + y.slice($) + I + k) : y + I + ($ === -2 ? g : k);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class ne {
  constructor({ strings: e, _$litType$: t }, n) {
    let s;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, y = this.parts, [E, w] = rr(e, t);
    if (this.el = ne.createElement(E, n), z.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (s = z.nextNode()) !== null && y.length < g; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const $ of s.getAttributeNames()) if ($.endsWith(st)) {
          const C = w[u++], k = s.getAttribute($).split(I), D = /([.?@])?(.*)/.exec(C);
          y.push({ type: 1, index: l, name: D[2], strings: k, ctor: D[1] === "." ? ir : D[1] === "?" ? sr : D[1] === "@" ? or : he }), s.removeAttribute($);
        } else $.startsWith(I) && (y.push({ type: 6, index: l }), s.removeAttribute($));
        if (at.test(s.tagName)) {
          const $ = s.textContent.split(I), C = $.length - 1;
          if (C > 0) {
            s.textContent = fe ? fe.emptyScript : "";
            for (let k = 0; k < C; k++) s.append($[k], te()), z.nextNode(), y.push({ type: 2, index: ++l });
            s.append($[C], te());
          }
        }
      } else if (s.nodeType === 8) if (s.data === ot) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = s.data.indexOf(I, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += I.length - 1;
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
  var u, g;
  if (e === q) return e;
  let s = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = re(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== l && ((g = s == null ? void 0 : s._$AO) == null || g.call(s, !1), l === void 0 ? s = void 0 : (s = new l(r), s._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = s : t._$Cl = s), s !== void 0 && (e = Z(r, s._$AS(r, e.values), s, n)), e;
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
    const { el: { content: t }, parts: n } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? W).importNode(t, !0);
    z.currentNode = s;
    let l = z.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new se(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new ar(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = z.nextNode(), u++);
    }
    return z.currentNode = W, s;
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
  constructor(e, t, n, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = s, this._$Cv = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = Z(this, e, t), re(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== q && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : er(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && re(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, s = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = ne.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === s) this._$AH.p(t);
    else {
      const u = new nr(s, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new ne(e)), t;
  }
  k(e) {
    Ae(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, s = 0;
    for (const l of e) s === t.length ? t.push(n = new se(this.O(te()), this.O(te()), this, this.options)) : n = t[s], n._$AI(l), s++;
    s < t.length && (this._$AR(n && n._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var n;
    for ((n = this._$AP) == null ? void 0 : n.call(this, !1, !0, t); e !== this._$AB; ) {
      const s = Xe(e).nextSibling;
      Xe(e).remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this._$Cv = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class he {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, n, s, l) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = M;
  }
  _$AI(e, t = this, n, s) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = Z(this, e, t, 0), u = !re(e) || e !== this._$AH && e !== q, u && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = Z(this, g[n + y], t, y), E === q && (E = this._$AH[y]), u || (u = !re(E) || E !== this._$AH[y]), E === M ? e = M : e !== M && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends he {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class sr extends he {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class or extends he {
  constructor(e, t, n, s, l) {
    super(e, t, n, s, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Z(this, e, t, 0) ?? M) === q) return;
    const n = this._$AH, s = e === M && n !== M || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== M && (n === M || s);
    s && this.element.removeEventListener(this.name, this, n), l && this.element.addEventListener(this.name, this, e), this._$AH = e;
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
const be = K.litHtmlPolyfillSupport;
be == null || be(ne, se), (K.litHtmlVersions ?? (K.litHtmlVersions = [])).push("3.3.3");
const lr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = n._$litPart$;
  if (s === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = s = new se(e.insertBefore(te(), l), l, void 0, t ?? {});
  }
  return s._$AI(r), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const L = globalThis;
class ee extends J {
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
ee._$litElement$ = !0, ee.finalized = !0, (nt = L.litElementHydrateSupport) == null || nt.call(L, { LitElement: ee });
const $e = L.litElementPolyfillSupport;
$e == null || $e({ LitElement: ee });
(L.litElementVersions ?? (L.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: de, reflect: !1, hasChanged: Se }, cr = (r = ur, e, t) => {
  const { kind: n, metadata: s } = t;
  let l = globalThis.litPropertyMetadata.get(s);
  if (l === void 0 && globalThis.litPropertyMetadata.set(s, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
    const { name: u } = t;
    return { set(g) {
      const y = e.get.call(this);
      e.set.call(this, g), this.requestUpdate(u, y, r, !0, g);
    }, init(g) {
      return g !== void 0 && this.C(u, void 0, r, g), g;
    } };
  }
  if (n === "setter") {
    const { name: u } = t;
    return function(g) {
      const y = this[u];
      e.call(this, g), this.requestUpdate(u, y, r, !0, g);
    };
  }
  throw Error("Unsupported decorator location: " + n);
};
function oe(r) {
  return (e, t) => typeof t == "object" ? cr(r, e, t) : ((n, s, l) => {
    const u = s.hasOwnProperty(l);
    return s.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(s, l) : void 0;
  })(r, e, t);
}
var dr = Object.defineProperty, fr = Object.getOwnPropertyDescriptor, N = (r, e, t, n) => {
  for (var s = n > 1 ? void 0 : n ? fr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (s = (n ? u(e, t, s) : u(s)) || s);
  return n && s && dr(e, t, s), s;
};
const hr = {
  kind: "generic",
  templateHtml: [
    "<section style='padding:48px 24px;background:#f9fafb;text-align:center;font-family:inherit;'>",
    "<h2 style='font-size:28px;font-weight:700;color:#111827;margin-bottom:8px;'>{{props:title}}</h2>",
    "<p style='font-size:15px;color:#4b5563;max-width:500px;margin:0 auto 32px;'>{{props:lead}}</p>",
    "<div style='display:flex;gap:20px;justify-content:center;'>",
    "<div style='flex:1;padding:24px;border:1px solid #e5e7eb;border-radius:12px;background:#ffffff;text-align:center;'>",
    "<h3 style='font-size:16px;font-weight:600;margin-bottom:8px;'>Starter</h3>",
    "<div style='font-size:32px;font-weight:800;margin-bottom:16px;'>$9<span style='font-size:14px;color:#6b7280;'>/mo</span></div>",
    "<ul style='list-style:none;padding:0;font-size:13px;color:#4b5563;margin-bottom:20px;'><li>Basic features</li><li>Single member</li></ul>",
    "<span style='display:block;padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Get Started</span>",
    "</div>",
    "</div>",
    "</section>"
  ].join(""),
  labelProp: "title",
  badges: ["Block", "Pricing"]
};
let T = class extends ee {
  constructor() {
    super(...arguments), this.title = "Flexible Subscriptions", this.lead = "Choose the ideal plan to scale your digital workflow.", this.pricingJson = '[{"title":"Basic","price":"$9","period":"mo","features":["1 User Workspace","Standard Operations","Community Support"],"ctaText":"Choose Basic","ctaUrl":"#"},{"title":"Professional","price":"$29","period":"mo","features":["10 User Workspaces","Priority Operations","24/7 Support"],"ctaText":"Choose Pro","ctaUrl":"#","featured":true},{"title":"Enterprise","price":"$99","period":"mo","features":["Unlimited Workspaces","Dedicated Dedicated Clusters","SLA Gurantee"],"ctaText":"Choose Enterprise","ctaUrl":"#"}]', this.layout = "layout-1", this.themeStyle = "light";
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
  get pricingJsonConfig() {
    return this.pricingJson;
  }
  set pricingJsonConfig(r) {
    this.pricingJson = r;
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
  parsePricing() {
    try {
      return JSON.parse(this.pricingJson);
    } catch {
      return [];
    }
  }
  render() {
    let r = this.parsePricing();
    return this.layout === "layout-2" && r.length > 0 && (r = [r.find((t) => t.featured) || r[0]]), ue`
      <section class="theme-${this.themeStyle} layout-${this.layout}">
        <div class="header-area">
          <h2>${this.title}</h2>
          <p class="lead">${this.lead}</p>
        </div>

        <div class="pricing-grid">
          ${r.map((e) => ue`
            <div class="pricing-card ${e.featured ? "featured" : ""}">
              ${e.featured ? ue`<div class="featured-badge">Popular</div>` : ""}
              <h3>${e.title}</h3>
              <div class="price-value">
                ${e.price}
                <span class="price-period">/${e.period}</span>
              </div>
              <ul class="features-list">
                ${e.features.map((t) => ue`<li>${t}</li>`)}
              </ul>
              <a class="btn-buy" href="${e.ctaUrl}">${e.ctaText}</a>
            </div>
          `)}
        </div>
      </section>
    `;
  }
};
T.styles = Wt`
    :host {
      display: block;
      width: 100%;
      --price-bg: var(--uiv-surface-color, #ffffff);
      --price-text: var(--uiv-text-color, #111827);
      --price-lead: #4b5563;
      --price-card-bg: var(--uiv-surface-color, #ffffff);
      --price-card-border: var(--uiv-border-color, #e5e7eb);
      --price-accent: var(--uiv-primary-color, #6366f1);
    }

    section {
      padding: 80px 5%;
      background: var(--price-bg);
      color: var(--price-text);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    section.theme-dark {
      --price-bg: #111827;
      --price-text: #f9fafb;
      --price-lead: #9ca3af;
      --price-card-bg: #1f2937;
      --price-card-border: #374151;
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
      color: var(--price-lead);
      margin: 0;
    }

    /* ─── Grid layout ─── */
    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 30px;
      max-width: 1100px;
      margin: 0 auto;
      align-items: center;
    }

    .pricing-card {
      padding: 45px 30px;
      background: var(--price-card-bg);
      border: 1px solid var(--price-card-border);
      border-radius: 12px;
      text-align: center;
      transition: transform 0.2s ease, box-shadow 0.2s ease;
      position: relative;
    }

    .pricing-card.featured {
      border-color: var(--price-accent);
      box-shadow: 0 15px 30px rgba(99, 102, 241, 0.08);
      transform: scale(1.03);
      z-index: 2;
    }

    .featured-badge {
      position: absolute;
      top: 15px;
      left: 50%;
      transform: translateX(-50%);
      padding: 4px 12px;
      font-size: 0.72rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: #ffffff;
      background: var(--price-accent);
      border-radius: 100px;
    }

    h3 {
      font-size: 1.4rem;
      font-weight: 700;
      margin: 0 0 15px 0;
    }

    .price-value {
      font-size: 3rem;
      font-weight: 800;
      margin-bottom: 24px;
      letter-spacing: -0.03em;
    }

    .price-period {
      font-size: 0.95rem;
      font-weight: 500;
      color: var(--price-lead);
    }

    ul.features-list {
      list-style: none;
      padding: 0;
      margin: 0 0 35px 0;
      text-align: left;
      display: inline-block;
    }

    ul.features-list li {
      font-size: 0.94rem;
      color: var(--price-lead);
      margin-bottom: 12px;
      display: flex;
      align-items: center;
      gap: 8px;
    }

    ul.features-list li::before {
      content: "✓";
      color: var(--price-accent);
      font-weight: bold;
    }

    .btn-buy {
      display: block;
      padding: 12px 24px;
      font-size: 0.95rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--price-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .pricing-card:not(.featured) .btn-buy {
      background: transparent;
      border: 1px solid var(--price-accent);
      color: var(--price-accent);
    }

    .btn-buy:hover {
      opacity: 0.9;
    }

    /* Mobile */
    @media (max-width: 768px) {
      .pricing-grid {
        grid-template-columns: 1fr;
      }
      .pricing-card.featured {
        transform: scale(1);
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
  oe({ type: String, attribute: "pricing-json" })
], T.prototype, "pricingJson", 2);
N([
  oe({ type: String })
], T.prototype, "layout", 2);
N([
  oe({ type: String, attribute: "theme-style" })
], T.prototype, "themeStyle", 2);
N([
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Section Title",
    fieldMappings: "title"
  })
], T.prototype, "titleConfig", 1);
N([
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Section Subtitle Copy",
    fieldMappings: "lead"
  })
], T.prototype, "leadConfig", 1);
N([
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: B.TEXT_INPUT,
    displayLabel: "Pricing Cards JSON",
    fieldMappings: "pricingJson"
  })
], T.prototype, "pricingJsonConfig", 1);
N([
  ie({
    attributeType: G.PROPERTY,
    uiComponentType: B.DROPDOWN,
    displayLabel: "Layout Display",
    fieldMappings: "layout",
    optionItems: [
      { label: "Standard Columns Grid", value: "layout-1" },
      { label: "Focused Single Spotlight", value: "layout-2" }
    ]
  })
], T.prototype, "layoutConfig", 1);
N([
  ie({
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
    name: "zero-block-pricing",
    version: "1.0.0",
    title: "Pricing Block",
    elementSelector: "zero-block-pricing",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  zt()
], T);
export {
  T as ZeroBlockPricing,
  hr as studioTemplate
};
