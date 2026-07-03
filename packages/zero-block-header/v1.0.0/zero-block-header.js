var Nt = Object.defineProperty;
var Ht = (r, e, t) => e in r ? Nt(r, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : r[e] = t;
var Ge = (r, e, t) => Ht(r, typeof e != "symbol" ? e + "" : e, t);
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
    var t = typeof globalThis == "object" ? globalThis : typeof We == "object" ? We : typeof self == "object" ? self : typeof this == "object" ? this : g(), n = o(r);
    typeof t.Reflect < "u" && (n = o(t.Reflect, n)), e(n, t), typeof t.Reflect > "u" && (t.Reflect = r);
    function o(y, E) {
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
    var n = Object.prototype.hasOwnProperty, o = typeof Symbol == "function", l = o && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", u = o && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", g = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, E = !g && !y, w = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: g ? function() {
        return ve(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ve({ __proto__: null });
      } : function() {
        return ve({});
      },
      has: E ? function(i, s) {
        return n.call(i, s);
      } : function(i, s) {
        return s in i;
      },
      get: E ? function(i, s) {
        return n.call(i, s) ? i[s] : void 0;
      } : function(i, s) {
        return i[s];
      }
    }, $ = Object.getPrototypeOf(Function), P = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Pt(), R = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : xt(), j = typeof WeakMap == "function" ? WeakMap : kt(), J = o ? Symbol.for("@reflect-metadata:registry") : void 0, ae = Ct(), Oe = Mt(ae);
    function ut(i, s, a, c) {
      if (_(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!He(s))
          throw new TypeError();
        return mt(i, s);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!O(s))
          throw new TypeError();
        if (!O(c) && !_(c) && !q(c))
          throw new TypeError();
        return q(c) && (c = void 0), a = N(a), bt(i, s, a, c);
      }
    }
    e("decorate", ut);
    function ct(i, s) {
      function a(c, v) {
        if (!O(c))
          throw new TypeError();
        if (!_(v) && !St(v))
          throw new TypeError();
        Pe(i, s, c, v);
      }
      return a;
    }
    e("metadata", ct);
    function ht(i, s, a, c) {
      if (!O(a))
        throw new TypeError();
      return _(c) || (c = N(c)), Pe(i, s, a, c);
    }
    e("defineMetadata", ht);
    function dt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Ce(i, s, a);
    }
    e("hasMetadata", dt);
    function ft(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = N(a)), fe(i, s, a);
    }
    e("hasOwnMetadata", ft);
    function pt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Me(i, s, a);
    }
    e("getMetadata", pt);
    function yt(i, s, a) {
      if (!O(s))
        throw new TypeError();
      return _(a) || (a = N(a)), Te(i, s, a);
    }
    e("getOwnMetadata", yt);
    function vt(i, s) {
      if (!O(i))
        throw new TypeError();
      return _(s) || (s = N(s)), xe(i, s);
    }
    e("getMetadataKeys", vt);
    function gt(i, s) {
      if (!O(i))
        throw new TypeError();
      return _(s) || (s = N(s)), ke(i, s);
    }
    e("getOwnMetadataKeys", gt);
    function _t(i, s, a) {
      if (!O(s))
        throw new TypeError();
      if (_(a) || (a = N(a)), !O(s))
        throw new TypeError();
      _(a) || (a = N(a));
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : c.OrdinaryDeleteMetadata(i, s, a);
    }
    e("deleteMetadata", _t);
    function mt(i, s) {
      for (var a = i.length - 1; a >= 0; --a) {
        var c = i[a], v = c(s);
        if (!_(v) && !q(v)) {
          if (!He(v))
            throw new TypeError();
          s = v;
        }
      }
      return s;
    }
    function bt(i, s, a, c) {
      for (var v = i.length - 1; v >= 0; --v) {
        var M = i[v], C = M(s, a, c);
        if (!_(C) && !q(C)) {
          if (!O(C))
            throw new TypeError();
          c = C;
        }
      }
      return c;
    }
    function Ce(i, s, a) {
      var c = fe(i, s, a);
      if (c)
        return !0;
      var v = ye(s);
      return q(v) ? !1 : Ce(i, v, a);
    }
    function fe(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      return _(c) ? !1 : Ue(c.OrdinaryHasOwnMetadata(i, s, a));
    }
    function Me(i, s, a) {
      var c = fe(i, s, a);
      if (c)
        return Te(i, s, a);
      var v = ye(s);
      if (!q(v))
        return Me(i, v, a);
    }
    function Te(i, s, a) {
      var c = Q(
        s,
        a,
        /*Create*/
        !1
      );
      if (!_(c))
        return c.OrdinaryGetOwnMetadata(i, s, a);
    }
    function Pe(i, s, a, c) {
      var v = Q(
        a,
        c,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, s, a, c);
    }
    function xe(i, s) {
      var a = ke(i, s), c = ye(i);
      if (c === null)
        return a;
      var v = xe(c, s);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var M = new R(), C = [], m = 0, h = a; m < h.length; m++) {
        var d = h[m], f = M.has(d);
        f || (M.add(d), C.push(d));
      }
      for (var p = 0, b = v; p < b.length; p++) {
        var d = b[p], f = M.has(d);
        f || (M.add(d), C.push(d));
      }
      return C;
    }
    function ke(i, s) {
      var a = Q(
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
    function _(i) {
      return i === void 0;
    }
    function q(i) {
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
      var a = "string", c = Ie(i, l);
      if (c !== void 0) {
        var v = c.call(i, a);
        if (O(v))
          throw new TypeError();
        return v;
      }
      return Et(i);
    }
    function Et(i, s) {
      var a, c;
      {
        var v = i.toString;
        if (le(v)) {
          var c = v.call(i);
          if (!O(c))
            return c;
        }
        var a = i.valueOf;
        if (le(a)) {
          var c = a.call(i);
          if (!O(c))
            return c;
        }
      }
      throw new TypeError();
    }
    function Ue(i) {
      return !!i;
    }
    function At(i) {
      return "" + i;
    }
    function N(i) {
      var s = wt(i);
      return $t(s) ? s : At(s);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function le(i) {
      return typeof i == "function";
    }
    function He(i) {
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
    function pe(i, s) {
      return i === s || i !== i && s !== s;
    }
    function Ie(i, s) {
      var a = i[s];
      if (a != null) {
        if (!le(a))
          throw new TypeError();
        return a;
      }
    }
    function je(i) {
      var s = Ie(i, u);
      if (!le(s))
        throw new TypeError();
      var a = s.call(i);
      if (!O(a))
        throw new TypeError();
      return a;
    }
    function De(i) {
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
    function ye(i) {
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
      !_(J) && typeof t.Reflect < "u" && !(J in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = Tt(t.Reflect));
      var s, a, c, v = new j(), M = {
        registerProvider: C,
        getProvider: h,
        setProvider: f
      };
      return M;
      function C(p) {
        if (!Object.isExtensible(M))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === p:
            break;
          case _(s):
            s = p;
            break;
          case s === p:
            break;
          case _(a):
            a = p;
            break;
          case a === p:
            break;
          default:
            c === void 0 && (c = new R()), c.add(p);
            break;
        }
      }
      function m(p, b) {
        if (!_(s)) {
          if (s.isProviderFor(p, b))
            return s;
          if (!_(a)) {
            if (a.isProviderFor(p, b))
              return s;
            if (!_(c))
              for (var A = je(c); ; ) {
                var S = Le(A);
                if (!S)
                  return;
                var U = De(S);
                if (U.isProviderFor(p, b))
                  return ze(A), U;
              }
          }
        }
        if (!_(i) && i.isProviderFor(p, b))
          return i;
      }
      function h(p, b) {
        var A = v.get(p), S;
        return _(A) || (S = A.get(b)), _(S) && (S = m(p, b), _(S) || (_(A) && (A = new P(), v.set(p, A)), A.set(b, S))), S;
      }
      function d(p) {
        if (_(p))
          throw new TypeError();
        return s === p || a === p || !_(c) && c.has(p);
      }
      function f(p, b, A) {
        if (!d(A))
          throw new Error("Metadata provider not registered.");
        var S = h(p, b);
        if (S !== A) {
          if (!_(S))
            return !1;
          var U = v.get(p);
          _(U) && (U = new P(), v.set(p, U)), U.set(b, A);
        }
        return !0;
      }
    }
    function Ct() {
      var i;
      return !_(J) && O(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[J]), _(i) && (i = Ot()), !_(J) && O(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, J, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Mt(i) {
      var s = new j(), a = {
        isProviderFor: function(d, f) {
          var p = s.get(d);
          return _(p) ? !1 : p.has(f);
        },
        OrdinaryDefineOwnMetadata: C,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: M,
        OrdinaryOwnMetadataKeys: m,
        OrdinaryDeleteMetadata: h
      };
      return ae.registerProvider(a), a;
      function c(d, f, p) {
        var b = s.get(d), A = !1;
        if (_(b)) {
          if (!p)
            return;
          b = new P(), s.set(d, b), A = !0;
        }
        var S = b.get(f);
        if (_(S)) {
          if (!p)
            return;
          if (S = new P(), b.set(f, S), !i.setProvider(d, f, a))
            throw b.delete(f), A && s.delete(d), new Error("Wrong provider for target.");
        }
        return S;
      }
      function v(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        return _(b) ? !1 : Ue(b.has(d));
      }
      function M(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (!_(b))
          return b.get(d);
      }
      function C(d, f, p, b) {
        var A = c(
          p,
          b,
          /*Create*/
          !0
        );
        A.set(d, f);
      }
      function m(d, f) {
        var p = [], b = c(
          d,
          f,
          /*Create*/
          !1
        );
        if (_(b))
          return p;
        for (var A = b.keys(), S = je(A), U = 0; ; ) {
          var Be = Le(S);
          if (!Be)
            return p.length = U, p;
          var Rt = De(Be);
          try {
            p[U] = Rt;
          } catch (Ut) {
            try {
              ze(S);
            } finally {
              throw Ut;
            }
          }
          U++;
        }
      }
      function h(d, f, p) {
        var b = c(
          f,
          p,
          /*Create*/
          !1
        );
        if (_(b) || !b.delete(d))
          return !1;
        if (b.size === 0) {
          var A = s.get(f);
          _(A) || (A.delete(p), A.size === 0 && s.delete(A));
        }
        return !0;
      }
    }
    function Tt(i) {
      var s = i.defineMetadata, a = i.hasOwnMetadata, c = i.getOwnMetadata, v = i.getOwnMetadataKeys, M = i.deleteMetadata, C = new j(), m = {
        isProviderFor: function(h, d) {
          var f = C.get(h);
          return !_(f) && f.has(d) ? !0 : v(h, d).length ? (_(f) && (f = new R(), C.set(h, f)), f.add(d), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: s,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: c,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: M
      };
      return m;
    }
    function Q(i, s, a) {
      var c = ae.getProvider(i, s);
      if (!_(c))
        return c;
      if (a) {
        if (ae.setProvider(i, s, Oe))
          return Oe;
        throw new Error("Illegal state.");
      }
    }
    function Pt() {
      var i = {}, s = [], a = (
        /** @class */
        function() {
          function m(h, d, f) {
            this._index = 0, this._keys = h, this._values = d, this._selector = f;
          }
          return m.prototype["@@iterator"] = function() {
            return this;
          }, m.prototype[u] = function() {
            return this;
          }, m.prototype.next = function() {
            var h = this._index;
            if (h >= 0 && h < this._keys.length) {
              var d = this._selector(this._keys[h], this._values[h]);
              return h + 1 >= this._keys.length ? (this._index = -1, this._keys = s, this._values = s) : this._index++, { value: d, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, m.prototype.throw = function(h) {
            throw this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), h;
          }, m.prototype.return = function(h) {
            return this._index >= 0 && (this._index = -1, this._keys = s, this._values = s), { value: h, done: !0 };
          }, m;
        }()
      ), c = (
        /** @class */
        function() {
          function m() {
            this._keys = [], this._values = [], this._cacheKey = i, this._cacheIndex = -2;
          }
          return Object.defineProperty(m.prototype, "size", {
            get: function() {
              return this._keys.length;
            },
            enumerable: !0,
            configurable: !0
          }), m.prototype.has = function(h) {
            return this._find(
              h,
              /*insert*/
              !1
            ) >= 0;
          }, m.prototype.get = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            return d >= 0 ? this._values[d] : void 0;
          }, m.prototype.set = function(h, d) {
            var f = this._find(
              h,
              /*insert*/
              !0
            );
            return this._values[f] = d, this;
          }, m.prototype.delete = function(h) {
            var d = this._find(
              h,
              /*insert*/
              !1
            );
            if (d >= 0) {
              for (var f = this._keys.length, p = d + 1; p < f; p++)
                this._keys[p - 1] = this._keys[p], this._values[p - 1] = this._values[p];
              return this._keys.length--, this._values.length--, pe(h, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, m.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, m.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, m.prototype.values = function() {
            return new a(this._keys, this._values, M);
          }, m.prototype.entries = function() {
            return new a(this._keys, this._values, C);
          }, m.prototype["@@iterator"] = function() {
            return this.entries();
          }, m.prototype[u] = function() {
            return this.entries();
          }, m.prototype._find = function(h, d) {
            if (!pe(this._cacheKey, h)) {
              this._cacheIndex = -1;
              for (var f = 0; f < this._keys.length; f++)
                if (pe(this._keys[f], h)) {
                  this._cacheIndex = f;
                  break;
                }
            }
            return this._cacheIndex < 0 && d && (this._cacheIndex = this._keys.length, this._keys.push(h), this._values.push(void 0)), this._cacheIndex;
          }, m;
        }()
      );
      return c;
      function v(m, h) {
        return m;
      }
      function M(m, h) {
        return h;
      }
      function C(m, h) {
        return [m, h];
      }
    }
    function xt() {
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
    function kt() {
      var i = 16, s = w.create(), a = c();
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
            return f !== void 0 ? w.has(f, this._key) : !1;
          }, h.prototype.get = function(d) {
            var f = v(
              d,
              /*create*/
              !1
            );
            return f !== void 0 ? w.get(f, this._key) : void 0;
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
          h = "@@WeakMap@@" + m();
        while (w.has(s, h));
        return s[h] = !0, h;
      }
      function v(h, d) {
        if (!n.call(h, a)) {
          if (!d)
            return;
          Object.defineProperty(h, a, { value: w.create() });
        }
        return h[a];
      }
      function M(h, d) {
        for (var f = 0; f < d; ++f)
          h[f] = Math.random() * 255 | 0;
        return h;
      }
      function C(h) {
        if (typeof Uint8Array == "function") {
          var d = new Uint8Array(h);
          return typeof crypto < "u" ? crypto.getRandomValues(d) : typeof msCrypto < "u" ? msCrypto.getRandomValues(d) : M(d, h), d;
        }
        return M(new Array(h), h);
      }
      function m() {
        var h = C(i);
        h[6] = h[6] & 79 | 64, h[8] = h[8] & 191 | 128;
        for (var d = "", f = 0; f < i; ++f) {
          var p = h[f];
          (f === 4 || f === 6 || f === 8) && (d += "-"), p < 16 && (d += "0"), d += p.toString(16).toLowerCase();
        }
        return d;
      }
    }
    function ve(i) {
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
function Dt(r) {
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
        var E;
        const l = document.querySelector('style.global-style[type="text/css"]'), u = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), g = "adoptedStyleSheets" in Document.prototype, y = this.shadowRoot;
        if (!y) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (l && g) {
          const w = new CSSStyleSheet(), $ = (E = l.sheet) == null ? void 0 : E.cssRules;
          $ && (Array.from($).forEach((P) => w.insertRule(P.cssText)), y.adoptedStyleSheets = [...y.adoptedStyleSheets, w]);
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
function V(r) {
  return Bt(r);
}
var H;
(function(r) {
  r.TEXT_INPUT = "text-input", r.PASSWORD_INPUT = "password-input", r.DROPDOWN = "dropdown", r.CHECKBOX = "checkbox", r.RADIO_BUTTON = "radio-button", r.RANGE_SLIDER = "range-slider", r.FILE_INPUT = "file-input", r.DATE_PICKER = "date-picker", r.COLOR_PICKER = "color-picker", r.NUMBER_INPUT = "number-input", r.TEXTAREA = "textarea", r.MULTI_SELECT = "multi-select", r.POPUP_DROPDOWN = "popup-dropdown", r.LAYOUT_PICKER = "layout-picker", r.RESPONSIVE_OVERRIDE = "responsive-override", r.IMAGE_PICKER = "image-picker", r.CHIPS = "chips";
})(H || (H = {}));
var I;
(function(r) {
  r.PROPERTY = "property", r.EVENT = "event", r.ACTION = "action";
})(I || (I = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ue = globalThis, we = ue.ShadowRoot && (ue.ShadyCSS === void 0 || ue.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, Ee = Symbol(), Fe = /* @__PURE__ */ new WeakMap();
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
  const t = r.length === 1 ? r[0] : e.reduce((n, o, l) => n + ((u) => {
    if (u._$cssResult$ === !0) return u.cssText;
    if (typeof u == "number") return u;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + u + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(o) + r[l + 1], r[0]);
  return new it(t, r, Ee);
}, Vt = (r, e) => {
  if (we) r.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const n = document.createElement("style"), o = ue.litNonce;
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
const { is: Ft, defineProperty: Jt, getOwnPropertyDescriptor: qt, getOwnPropertyNames: Zt, getOwnPropertySymbols: Yt, getPrototypeOf: Xt } = Object, L = globalThis, qe = L.trustedTypes, Qt = qe ? qe.emptyScript : "", ge = L.reactiveElementPolyfillSupport, ee = (r, e) => r, ce = { toAttribute(r, e) {
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
} }, Ae = (r, e) => !Ft(r, e), Ze = { attribute: !0, type: String, converter: ce, reflect: !1, useDefault: !1, hasChanged: Ae };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), L.litPropertyMetadata ?? (L.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
let Z = class extends HTMLElement {
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
      const g = o == null ? void 0 : o.call(this);
      l == null || l.call(this, u), this.requestUpdate(e, g, n);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(ee("elementProperties"))) return;
    const e = Xt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(ee("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(ee("properties"))) {
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
    const n = this.constructor.elementProperties.get(e), o = this.constructor._$Eu(e, n);
    if (o !== void 0 && n.reflect === !0) {
      const u = (((l = n.converter) == null ? void 0 : l.toAttribute) !== void 0 ? n.converter : ce).toAttribute(t, n.type);
      this._$Em = e, u == null ? this.removeAttribute(o) : this.setAttribute(o, u), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var l, u;
    const n = this.constructor, o = n._$Eh.get(e);
    if (o !== void 0 && this._$Em !== o) {
      const g = n.getPropertyOptions(o), y = typeof g.converter == "function" ? { fromAttribute: g.converter } : ((l = g.converter) == null ? void 0 : l.fromAttribute) !== void 0 ? g.converter : ce;
      this._$Em = o;
      const E = y.fromAttribute(t, g.type);
      this[o] = E ?? ((u = this._$Ej) == null ? void 0 : u.get(o)) ?? E, this._$Em = null;
    }
  }
  requestUpdate(e, t, n, o = !1, l) {
    var u;
    if (e !== void 0) {
      const g = this.constructor;
      if (o === !1 && (l = this[e]), n ?? (n = g.getPropertyOptions(e)), !((n.hasChanged ?? Ae)(l, t) || n.useDefault && n.reflect && l === ((u = this._$Ej) == null ? void 0 : u.get(e)) && !this.hasAttribute(g._$Eu(e, n)))) return;
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
        const { wrapped: g } = u, y = this[l];
        g !== !0 || this._$AL.has(l) || y === void 0 || this.C(l, void 0, u, y);
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
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[ee("elementProperties")] = /* @__PURE__ */ new Map(), Z[ee("finalized")] = /* @__PURE__ */ new Map(), ge == null || ge({ ReactiveElement: Z }), (L.reactiveElementVersions ?? (L.reactiveElementVersions = [])).push("2.1.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const te = globalThis, Ye = (r) => r, he = te.trustedTypes, Xe = he ? he.createPolicy("lit-html", { createHTML: (r) => r }) : void 0, ot = "$lit$", D = `lit$${Math.random().toFixed(9).slice(2)}$`, st = "?" + D, Kt = `<${st}>`, W = document, ne = () => W.createComment(""), ie = (r) => r === null || typeof r != "object" && typeof r != "function", Se = Array.isArray, er = (r) => Se(r) || typeof (r == null ? void 0 : r[Symbol.iterator]) == "function", _e = `[ 	
\f\r]`, K = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Qe = /-->/g, Ke = />/g, z = RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), et = /'/g, tt = /"/g, at = /^(?:script|style|textarea|title)$/i, tr = (r) => (e, ...t) => ({ _$litType$: r, strings: e, values: t }), me = tr(1), Y = Symbol.for("lit-noChange"), T = Symbol.for("lit-nothing"), rt = /* @__PURE__ */ new WeakMap(), B = W.createTreeWalker(W, 129);
function lt(r, e) {
  if (!Se(r) || !r.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Xe !== void 0 ? Xe.createHTML(e) : e;
}
const rr = (r, e) => {
  const t = r.length - 1, n = [];
  let o, l = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", u = K;
  for (let g = 0; g < t; g++) {
    const y = r[g];
    let E, w, $ = -1, P = 0;
    for (; P < y.length && (u.lastIndex = P, w = u.exec(y), w !== null); ) P = u.lastIndex, u === K ? w[1] === "!--" ? u = Qe : w[1] !== void 0 ? u = Ke : w[2] !== void 0 ? (at.test(w[2]) && (o = RegExp("</" + w[2], "g")), u = z) : w[3] !== void 0 && (u = z) : u === z ? w[0] === ">" ? (u = o ?? K, $ = -1) : w[1] === void 0 ? $ = -2 : ($ = u.lastIndex - w[2].length, E = w[1], u = w[3] === void 0 ? z : w[3] === '"' ? tt : et) : u === tt || u === et ? u = z : u === Qe || u === Ke ? u = K : (u = z, o = void 0);
    const R = u === z && r[g + 1].startsWith("/>") ? " " : "";
    l += u === K ? y + Kt : $ >= 0 ? (n.push(E), y.slice(0, $) + ot + y.slice($) + D + R) : y + D + ($ === -2 ? g : R);
  }
  return [lt(r, l + (r[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), n];
};
class oe {
  constructor({ strings: e, _$litType$: t }, n) {
    let o;
    this.parts = [];
    let l = 0, u = 0;
    const g = e.length - 1, y = this.parts, [E, w] = rr(e, t);
    if (this.el = oe.createElement(E, n), B.currentNode = this.el.content, t === 2 || t === 3) {
      const $ = this.el.content.firstChild;
      $.replaceWith(...$.childNodes);
    }
    for (; (o = B.nextNode()) !== null && y.length < g; ) {
      if (o.nodeType === 1) {
        if (o.hasAttributes()) for (const $ of o.getAttributeNames()) if ($.endsWith(ot)) {
          const P = w[u++], R = o.getAttribute($).split(D), j = /([.?@])?(.*)/.exec(P);
          y.push({ type: 1, index: l, name: j[2], strings: R, ctor: j[1] === "." ? ir : j[1] === "?" ? or : j[1] === "@" ? sr : de }), o.removeAttribute($);
        } else $.startsWith(D) && (y.push({ type: 6, index: l }), o.removeAttribute($));
        if (at.test(o.tagName)) {
          const $ = o.textContent.split(D), P = $.length - 1;
          if (P > 0) {
            o.textContent = he ? he.emptyScript : "";
            for (let R = 0; R < P; R++) o.append($[R], ne()), B.nextNode(), y.push({ type: 2, index: ++l });
            o.append($[P], ne());
          }
        }
      } else if (o.nodeType === 8) if (o.data === st) y.push({ type: 2, index: l });
      else {
        let $ = -1;
        for (; ($ = o.data.indexOf(D, $ + 1)) !== -1; ) y.push({ type: 7, index: l }), $ += D.length - 1;
      }
      l++;
    }
  }
  static createElement(e, t) {
    const n = W.createElement("template");
    return n.innerHTML = e, n;
  }
}
function X(r, e, t = r, n) {
  var u, g;
  if (e === Y) return e;
  let o = n !== void 0 ? (u = t._$Co) == null ? void 0 : u[n] : t._$Cl;
  const l = ie(e) ? void 0 : e._$litDirective$;
  return (o == null ? void 0 : o.constructor) !== l && ((g = o == null ? void 0 : o._$AO) == null || g.call(o, !1), l === void 0 ? o = void 0 : (o = new l(r), o._$AT(r, t, n)), n !== void 0 ? (t._$Co ?? (t._$Co = []))[n] = o : t._$Cl = o), o !== void 0 && (e = X(r, o._$AS(r, e.values), o, n)), e;
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
    B.currentNode = o;
    let l = B.nextNode(), u = 0, g = 0, y = n[0];
    for (; y !== void 0; ) {
      if (u === y.index) {
        let E;
        y.type === 2 ? E = new se(l, l.nextSibling, this, e) : y.type === 1 ? E = new y.ctor(l, y.name, y.strings, this, e) : y.type === 6 && (E = new ar(l, this, e)), this._$AV.push(E), y = n[++g];
      }
      u !== (y == null ? void 0 : y.index) && (l = B.nextNode(), u++);
    }
    return B.currentNode = W, o;
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
    this.type = 2, this._$AH = T, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = n, this.options = o, this._$Cv = (o == null ? void 0 : o.isConnected) ?? !0;
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
    e = X(this, e, t), ie(e) ? e === T || e == null || e === "" ? (this._$AH !== T && this._$AR(), this._$AH = T) : e !== this._$AH && e !== Y && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : er(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== T && ie(this._$AH) ? this._$AA.nextSibling.data = e : this.T(W.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var l;
    const { values: t, _$litType$: n } = e, o = typeof n == "number" ? this._$AC(e) : (n.el === void 0 && (n.el = oe.createElement(lt(n.h, n.h[0]), this.options)), n);
    if (((l = this._$AH) == null ? void 0 : l._$AD) === o) this._$AH.p(t);
    else {
      const u = new nr(o, this), g = u.u(this.options);
      u.p(t), this.T(g), this._$AH = u;
    }
  }
  _$AC(e) {
    let t = rt.get(e.strings);
    return t === void 0 && rt.set(e.strings, t = new oe(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let n, o = 0;
    for (const l of e) o === t.length ? t.push(n = new se(this.O(ne()), this.O(ne()), this, this.options)) : n = t[o], n._$AI(l), o++;
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
    this.type = 1, this._$AH = T, this._$AN = void 0, this.element = e, this.name = t, this._$AM = o, this.options = l, n.length > 2 || n[0] !== "" || n[1] !== "" ? (this._$AH = Array(n.length - 1).fill(new String()), this.strings = n) : this._$AH = T;
  }
  _$AI(e, t = this, n, o) {
    const l = this.strings;
    let u = !1;
    if (l === void 0) e = X(this, e, t, 0), u = !ie(e) || e !== this._$AH && e !== Y, u && (this._$AH = e);
    else {
      const g = e;
      let y, E;
      for (e = l[0], y = 0; y < l.length - 1; y++) E = X(this, g[n + y], t, y), E === Y && (E = this._$AH[y]), u || (u = !ie(E) || E !== this._$AH[y]), E === T ? e = T : e !== T && (e += (E ?? "") + l[y + 1]), this._$AH[y] = E;
    }
    u && !o && this.j(e);
  }
  j(e) {
    e === T ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class ir extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === T ? void 0 : e;
  }
}
class or extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== T);
  }
}
class sr extends de {
  constructor(e, t, n, o, l) {
    super(e, t, n, o, l), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = X(this, e, t, 0) ?? T) === Y) return;
    const n = this._$AH, o = e === T && n !== T || e.capture !== n.capture || e.once !== n.once || e.passive !== n.passive, l = e !== T && (n === T || o);
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
    X(this, e);
  }
}
const be = te.litHtmlPolyfillSupport;
be == null || be(oe, se), (te.litHtmlVersions ?? (te.litHtmlVersions = [])).push("3.3.3");
const lr = (r, e, t) => {
  const n = (t == null ? void 0 : t.renderBefore) ?? e;
  let o = n._$litPart$;
  if (o === void 0) {
    const l = (t == null ? void 0 : t.renderBefore) ?? null;
    n._$litPart$ = o = new se(e.insertBefore(ne(), l), l, void 0, t ?? {});
  }
  return o._$AI(r), o;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const G = globalThis;
class re extends Z {
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
    return Y;
  }
}
var nt;
re._$litElement$ = !0, re.finalized = !0, (nt = G.litElementHydrateSupport) == null || nt.call(G, { LitElement: re });
const $e = G.litElementPolyfillSupport;
$e == null || $e({ LitElement: re });
(G.litElementVersions ?? (G.litElementVersions = [])).push("4.2.2");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ur = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ae }, cr = (r = ur, e, t) => {
  const { kind: n, metadata: o } = t;
  let l = globalThis.litPropertyMetadata.get(o);
  if (l === void 0 && globalThis.litPropertyMetadata.set(o, l = /* @__PURE__ */ new Map()), n === "setter" && ((r = Object.create(r)).wrapped = !0), l.set(t.name, r), n === "accessor") {
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
function F(r) {
  return (e, t) => typeof t == "object" ? cr(r, e, t) : ((n, o, l) => {
    const u = o.hasOwnProperty(l);
    return o.constructor.createProperty(l, n), u ? Object.getOwnPropertyDescriptor(o, l) : void 0;
  })(r, e, t);
}
var hr = Object.defineProperty, dr = Object.getOwnPropertyDescriptor, k = (r, e, t, n) => {
  for (var o = n > 1 ? void 0 : n ? dr(e, t) : e, l = r.length - 1, u; l >= 0; l--)
    (u = r[l]) && (o = (n ? u(e, t, o) : u(o)) || o);
  return n && o && hr(e, t, o), o;
};
const fr = {
  kind: "generic",
  templateHtml: [
    "<header style='display:flex;align-items:center;justify-content:between;padding:16px 24px;border-bottom:1px solid #e5e7eb;background:#ffffff;font-family:inherit;'>",
    "<div style='font-weight:bold;font-size:18px;'>{{props:logo}}</div>",
    "<div style='display:flex;gap:20px;font-size:14px;color:#4b5563;'>",
    "<span>Home</span><span>Features</span><span>Pricing</span>",
    "</div>",
    "<div style='padding:8px 16px;background:var(--uiv-primary-color,#6366f1);color:#ffffff;border-radius:6px;font-size:13px;font-weight:600;'>Get Started</div>",
    "</header>"
  ].join(""),
  labelProp: "logo",
  badges: ["Block", "Navigation"]
};
let x = class extends re {
  constructor() {
    super(...arguments), this.logo = "BrandName", this.logoUrl = "", this.linksJson = '[{"label":"Home","href":"#"},{"label":"Features","href":"#"},{"label":"Pricing","href":"#"}]', this.ctaText = "Get Started", this.ctaUrl = "#", this.layout = "layout-1", this.themeStyle = "light";
  }
  static getStudioTemplate(r) {
    return fr;
  }
  get logoConfig() {
    return this.logo;
  }
  set logoConfig(r) {
    this.logo = r;
  }
  get logoUrlConfig() {
    return this.logoUrl;
  }
  set logoUrlConfig(r) {
    this.logoUrl = r;
  }
  get linksJsonConfig() {
    return this.linksJson;
  }
  set linksJsonConfig(r) {
    this.linksJson = r;
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
  parseLinks() {
    try {
      return JSON.parse(this.linksJson);
    } catch {
      return [];
    }
  }
  render() {
    const r = [
      `theme-${this.themeStyle}`,
      `layout-${this.layout}`
    ].join(" "), e = this.parseLinks();
    return me`
      <header class="${r}">
        <a href="#" class="brand">
          ${this.logoUrl ? me`<img class="logo-img" src="${this.logoUrl}" alt="logo">` : ""}
          <span class="logo-text">${this.logo}</span>
        </a>

        <div class="nav-links">
          ${e.map((t) => me`
            <a class="nav-link" href="${t.href}">${t.label}</a>
          `)}
        </div>

        <a class="action-btn" href="${this.ctaUrl}">${this.ctaText}</a>
      </header>
    `;
  }
};
x.styles = Wt`
    :host {
      display: block;
      width: 100%;
      --header-bg: var(--uiv-surface-color, #ffffff);
      --header-text: var(--uiv-text-color, #1f2937);
      --header-border: var(--uiv-border-color, #e5e7eb);
      --header-accent: var(--uiv-primary-color, #6366f1);
    }

    header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 5%;
      background: var(--header-bg);
      color: var(--header-text);
      border-bottom: 1px solid var(--header-border);
      transition: all 0.3s ease;
      box-sizing: border-box;
    }

    /* Theme Variants */
    header.theme-dark {
      --header-bg: #111827;
      --header-text: #f9fafb;
      --header-border: #374151;
    }

    header.theme-transparent {
      background: transparent;
      border-bottom-color: rgba(255, 255, 255, 0.15);
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 10px;
      text-decoration: none;
      color: inherit;
    }

    .logo-img {
      max-height: 38px;
    }

    .logo-text {
      font-size: 1.45rem;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 28px;
    }

    .nav-link {
      font-size: 0.94rem;
      font-weight: 500;
      color: inherit;
      opacity: 0.85;
      text-decoration: none;
      transition: opacity 0.2s ease, color 0.2s ease;
    }

    .nav-link:hover {
      opacity: 1;
      color: var(--header-accent);
    }

    .action-btn {
      padding: 9px 20px;
      font-size: 0.88rem;
      font-weight: 600;
      color: #ffffff;
      background: var(--header-accent);
      border: none;
      border-radius: 6px;
      cursor: pointer;
      text-decoration: none;
      transition: opacity 0.2s ease;
    }

    .action-btn:hover {
      opacity: 0.9;
    }

    /* ─── Layouts ─── */
    header.layout-layout-2 .action-btn {
      display: none;
    }

    header.layout-layout-3 {
      flex-direction: column;
      gap: 16px;
      text-align: center;
    }

    header.layout-layout-3 .nav-links {
      justify-content: center;
      width: 100%;
    }
  `;
k([
  F({ type: String })
], x.prototype, "logo", 2);
k([
  F({ type: String, attribute: "logo-url" })
], x.prototype, "logoUrl", 2);
k([
  F({ type: String, attribute: "links-json" })
], x.prototype, "linksJson", 2);
k([
  F({ type: String, attribute: "cta-text" })
], x.prototype, "ctaText", 2);
k([
  F({ type: String, attribute: "cta-url" })
], x.prototype, "ctaUrl", 2);
k([
  F({ type: String })
], x.prototype, "layout", 2);
k([
  F({ type: String, attribute: "theme-style" })
], x.prototype, "themeStyle", 2);
k([
  V({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Logo Text",
    fieldMappings: "logo"
  })
], x.prototype, "logoConfig", 1);
k([
  V({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Logo Image URL",
    fieldMappings: "logoUrl"
  })
], x.prototype, "logoUrlConfig", 1);
k([
  V({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "Links JSON",
    fieldMappings: "linksJson"
  })
], x.prototype, "linksJsonConfig", 1);
k([
  V({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "CTA Button Text",
    fieldMappings: "ctaText"
  })
], x.prototype, "ctaTextConfig", 1);
k([
  V({
    attributeType: I.PROPERTY,
    uiComponentType: H.TEXT_INPUT,
    displayLabel: "CTA Redirect URL",
    fieldMappings: "ctaUrl"
  })
], x.prototype, "ctaUrlConfig", 1);
k([
  V({
    attributeType: I.PROPERTY,
    uiComponentType: H.DROPDOWN,
    displayLabel: "Navigation Layout",
    fieldMappings: "layout",
    optionItems: [
      { label: "Standard Navigation", value: "layout-1" },
      { label: "Minimalist Menu (No CTA)", value: "layout-2" },
      { label: "Centered Logo Column", value: "layout-3" }
    ]
  })
], x.prototype, "layoutConfig", 1);
k([
  V({
    attributeType: I.PROPERTY,
    uiComponentType: H.DROPDOWN,
    displayLabel: "Theme Style",
    fieldMappings: "themeStyle",
    optionItems: [
      { label: "Light Header", value: "light" },
      { label: "Dark Header", value: "dark" },
      { label: "Transparent Header", value: "transparent" }
    ]
  })
], x.prototype, "themeStyleConfig", 1);
x = k([
  Dt({
    name: "zero-block-header",
    version: "1.0.0",
    title: "Block Header",
    elementSelector: "zero-block-header",
    group: "Design Blocks",
    iconName: "layout-icon.png"
  }),
  Lt()
], x);
export {
  x as ZeroBlockHeader,
  fr as studioTemplate
};
