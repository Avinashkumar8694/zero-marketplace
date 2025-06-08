var Rt = Object.defineProperty;
var Nt = (n, e, t) => e in n ? Rt(n, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) : n[e] = t;
var We = (n, e, t) => Nt(n, typeof e != "symbol" ? e + "" : e, t);
var Be = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
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
(function(n) {
  (function(e) {
    var t = typeof globalThis == "object" ? globalThis : typeof Be == "object" ? Be : typeof self == "object" ? self : typeof this == "object" ? this : m(), r = s(n);
    typeof t.Reflect < "u" && (r = s(t.Reflect, r)), e(r, t), typeof t.Reflect > "u" && (t.Reflect = n);
    function s(y, $) {
      return function(_, E) {
        Object.defineProperty(y, _, { configurable: !0, writable: !0, value: E }), $ && $(_, E);
      };
    }
    function c() {
      try {
        return Function("return this;")();
      } catch {
      }
    }
    function l() {
      try {
        return (0, eval)("(function() { return this; })()");
      } catch {
      }
    }
    function m() {
      return c() || l();
    }
  })(function(e, t) {
    var r = Object.prototype.hasOwnProperty, s = typeof Symbol == "function", c = s && typeof Symbol.toPrimitive < "u" ? Symbol.toPrimitive : "@@toPrimitive", l = s && typeof Symbol.iterator < "u" ? Symbol.iterator : "@@iterator", m = typeof Object.create == "function", y = { __proto__: [] } instanceof Array, $ = !m && !y, _ = {
      // create an object in dictionary mode (a.k.a. "slow" mode in v8)
      create: m ? function() {
        return ye(/* @__PURE__ */ Object.create(null));
      } : y ? function() {
        return ye({ __proto__: null });
      } : function() {
        return ye({});
      },
      has: $ ? function(i, o) {
        return r.call(i, o);
      } : function(i, o) {
        return o in i;
      },
      get: $ ? function(i, o) {
        return r.call(i, o) ? i[o] : void 0;
      } : function(i, o) {
        return i[o];
      }
    }, E = Object.getPrototypeOf(Function), T = typeof Map == "function" && typeof Map.prototype.entries == "function" ? Map : Ot(), k = typeof Set == "function" && typeof Set.prototype.entries == "function" ? Set : Mt(), H = typeof WeakMap == "function" ? WeakMap : Tt(), F = s ? Symbol.for("@reflect-metadata:registry") : void 0, oe = At(), Ae = Ct(oe);
    function at(i, o, a, u) {
      if (g(a)) {
        if (!Ne(i))
          throw new TypeError();
        if (!Le(o))
          throw new TypeError();
        return gt(i, o);
      } else {
        if (!Ne(i))
          throw new TypeError();
        if (!x(o))
          throw new TypeError();
        if (!x(u) && !g(u) && !q(u))
          throw new TypeError();
        return q(u) && (u = void 0), a = L(a), mt(i, o, a, u);
      }
    }
    e("decorate", at);
    function lt(i, o) {
      function a(u, v) {
        if (!x(u))
          throw new TypeError();
        if (!g(v) && !Et(v))
          throw new TypeError();
        Me(i, o, u, v);
      }
      return a;
    }
    e("metadata", lt);
    function ct(i, o, a, u) {
      if (!x(a))
        throw new TypeError();
      return g(u) || (u = L(u)), Me(i, o, a, u);
    }
    e("defineMetadata", ct);
    function ut(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = L(a)), Ce(i, o, a);
    }
    e("hasMetadata", ut);
    function dt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = L(a)), he(i, o, a);
    }
    e("hasOwnMetadata", dt);
    function ht(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = L(a)), xe(i, o, a);
    }
    e("getMetadata", ht);
    function pt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      return g(a) || (a = L(a)), Oe(i, o, a);
    }
    e("getOwnMetadata", pt);
    function ft(i, o) {
      if (!x(i))
        throw new TypeError();
      return g(o) || (o = L(o)), Te(i, o);
    }
    e("getMetadataKeys", ft);
    function yt(i, o) {
      if (!x(i))
        throw new TypeError();
      return g(o) || (o = L(o)), Pe(i, o);
    }
    e("getOwnMetadataKeys", yt);
    function vt(i, o, a) {
      if (!x(o))
        throw new TypeError();
      if (g(a) || (a = L(a)), !x(o))
        throw new TypeError();
      g(a) || (a = L(a));
      var u = X(
        o,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : u.OrdinaryDeleteMetadata(i, o, a);
    }
    e("deleteMetadata", vt);
    function gt(i, o) {
      for (var a = i.length - 1; a >= 0; --a) {
        var u = i[a], v = u(o);
        if (!g(v) && !q(v)) {
          if (!Le(v))
            throw new TypeError();
          o = v;
        }
      }
      return o;
    }
    function mt(i, o, a, u) {
      for (var v = i.length - 1; v >= 0; --v) {
        var A = i[v], O = A(o, a, u);
        if (!g(O) && !q(O)) {
          if (!x(O))
            throw new TypeError();
          u = O;
        }
      }
      return u;
    }
    function Ce(i, o, a) {
      var u = he(i, o, a);
      if (u)
        return !0;
      var v = fe(o);
      return q(v) ? !1 : Ce(i, v, a);
    }
    function he(i, o, a) {
      var u = X(
        o,
        a,
        /*Create*/
        !1
      );
      return g(u) ? !1 : Re(u.OrdinaryHasOwnMetadata(i, o, a));
    }
    function xe(i, o, a) {
      var u = he(i, o, a);
      if (u)
        return Oe(i, o, a);
      var v = fe(o);
      if (!q(v))
        return xe(i, v, a);
    }
    function Oe(i, o, a) {
      var u = X(
        o,
        a,
        /*Create*/
        !1
      );
      if (!g(u))
        return u.OrdinaryGetOwnMetadata(i, o, a);
    }
    function Me(i, o, a, u) {
      var v = X(
        a,
        u,
        /*Create*/
        !0
      );
      v.OrdinaryDefineOwnMetadata(i, o, a, u);
    }
    function Te(i, o) {
      var a = Pe(i, o), u = fe(i);
      if (u === null)
        return a;
      var v = Te(u, o);
      if (v.length <= 0)
        return a;
      if (a.length <= 0)
        return v;
      for (var A = new k(), O = [], b = 0, d = a; b < d.length; b++) {
        var h = d[b], p = A.has(h);
        p || (A.add(h), O.push(h));
      }
      for (var f = 0, w = v; f < w.length; f++) {
        var h = w[f], p = A.has(h);
        p || (A.add(h), O.push(h));
      }
      return O;
    }
    function Pe(i, o) {
      var a = X(
        i,
        o,
        /*create*/
        !1
      );
      return a ? a.OrdinaryOwnMetadataKeys(i, o) : [];
    }
    function ke(i) {
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
    function q(i) {
      return i === null;
    }
    function bt(i) {
      return typeof i == "symbol";
    }
    function x(i) {
      return typeof i == "object" ? i !== null : typeof i == "function";
    }
    function _t(i, o) {
      switch (ke(i)) {
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
      var a = "string", u = je(i, c);
      if (u !== void 0) {
        var v = u.call(i, a);
        if (x(v))
          throw new TypeError();
        return v;
      }
      return wt(i);
    }
    function wt(i, o) {
      var a, u, v;
      {
        var A = i.toString;
        if (ae(A)) {
          var u = A.call(i);
          if (!x(u))
            return u;
        }
        var a = i.valueOf;
        if (ae(a)) {
          var u = a.call(i);
          if (!x(u))
            return u;
        }
      }
      throw new TypeError();
    }
    function Re(i) {
      return !!i;
    }
    function $t(i) {
      return "" + i;
    }
    function L(i) {
      var o = _t(i);
      return bt(o) ? o : $t(o);
    }
    function Ne(i) {
      return Array.isArray ? Array.isArray(i) : i instanceof Object ? i instanceof Array : Object.prototype.toString.call(i) === "[object Array]";
    }
    function ae(i) {
      return typeof i == "function";
    }
    function Le(i) {
      return typeof i == "function";
    }
    function Et(i) {
      switch (ke(i)) {
        case 3:
          return !0;
        case 4:
          return !0;
        default:
          return !1;
      }
    }
    function pe(i, o) {
      return i === o || i !== i && o !== o;
    }
    function je(i, o) {
      var a = i[o];
      if (a != null) {
        if (!ae(a))
          throw new TypeError();
        return a;
      }
    }
    function Ue(i) {
      var o = je(i, l);
      if (!ae(o))
        throw new TypeError();
      var a = o.call(i);
      if (!x(a))
        throw new TypeError();
      return a;
    }
    function He(i) {
      return i.value;
    }
    function Ie(i) {
      var o = i.next();
      return o.done ? !1 : o;
    }
    function De(i) {
      var o = i.return;
      o && o.call(i);
    }
    function fe(i) {
      var o = Object.getPrototypeOf(i);
      if (typeof i != "function" || i === E || o !== E)
        return o;
      var a = i.prototype, u = a && Object.getPrototypeOf(a);
      if (u == null || u === Object.prototype)
        return o;
      var v = u.constructor;
      return typeof v != "function" || v === i ? o : v;
    }
    function St() {
      var i;
      !g(F) && typeof t.Reflect < "u" && !(F in t.Reflect) && typeof t.Reflect.defineMetadata == "function" && (i = xt(t.Reflect));
      var o, a, u, v = new H(), A = {
        registerProvider: O,
        getProvider: d,
        setProvider: p
      };
      return A;
      function O(f) {
        if (!Object.isExtensible(A))
          throw new Error("Cannot add provider to a frozen registry.");
        switch (!0) {
          case i === f:
            break;
          case g(o):
            o = f;
            break;
          case o === f:
            break;
          case g(a):
            a = f;
            break;
          case a === f:
            break;
          default:
            u === void 0 && (u = new k()), u.add(f);
            break;
        }
      }
      function b(f, w) {
        if (!g(o)) {
          if (o.isProviderFor(f, w))
            return o;
          if (!g(a)) {
            if (a.isProviderFor(f, w))
              return o;
            if (!g(u))
              for (var S = Ue(u); ; ) {
                var C = Ie(S);
                if (!C)
                  return;
                var N = He(C);
                if (N.isProviderFor(f, w))
                  return De(S), N;
              }
          }
        }
        if (!g(i) && i.isProviderFor(f, w))
          return i;
      }
      function d(f, w) {
        var S = v.get(f), C;
        return g(S) || (C = S.get(w)), g(C) && (C = b(f, w), g(C) || (g(S) && (S = new T(), v.set(f, S)), S.set(w, C))), C;
      }
      function h(f) {
        if (g(f))
          throw new TypeError();
        return o === f || a === f || !g(u) && u.has(f);
      }
      function p(f, w, S) {
        if (!h(S))
          throw new Error("Metadata provider not registered.");
        var C = d(f, w);
        if (C !== S) {
          if (!g(C))
            return !1;
          var N = v.get(f);
          g(N) && (N = new T(), v.set(f, N)), N.set(w, S);
        }
        return !0;
      }
    }
    function At() {
      var i;
      return !g(F) && x(t.Reflect) && Object.isExtensible(t.Reflect) && (i = t.Reflect[F]), g(i) && (i = St()), !g(F) && x(t.Reflect) && Object.isExtensible(t.Reflect) && Object.defineProperty(t.Reflect, F, {
        enumerable: !1,
        configurable: !1,
        writable: !1,
        value: i
      }), i;
    }
    function Ct(i) {
      var o = new H(), a = {
        isProviderFor: function(h, p) {
          var f = o.get(h);
          return g(f) ? !1 : f.has(p);
        },
        OrdinaryDefineOwnMetadata: O,
        OrdinaryHasOwnMetadata: v,
        OrdinaryGetOwnMetadata: A,
        OrdinaryOwnMetadataKeys: b,
        OrdinaryDeleteMetadata: d
      };
      return oe.registerProvider(a), a;
      function u(h, p, f) {
        var w = o.get(h), S = !1;
        if (g(w)) {
          if (!f)
            return;
          w = new T(), o.set(h, w), S = !0;
        }
        var C = w.get(p);
        if (g(C)) {
          if (!f)
            return;
          if (C = new T(), w.set(p, C), !i.setProvider(h, p, a))
            throw w.delete(p), S && o.delete(h), new Error("Wrong provider for target.");
        }
        return C;
      }
      function v(h, p, f) {
        var w = u(
          p,
          f,
          /*Create*/
          !1
        );
        return g(w) ? !1 : Re(w.has(h));
      }
      function A(h, p, f) {
        var w = u(
          p,
          f,
          /*Create*/
          !1
        );
        if (!g(w))
          return w.get(h);
      }
      function O(h, p, f, w) {
        var S = u(
          f,
          w,
          /*Create*/
          !0
        );
        S.set(h, p);
      }
      function b(h, p) {
        var f = [], w = u(
          h,
          p,
          /*Create*/
          !1
        );
        if (g(w))
          return f;
        for (var S = w.keys(), C = Ue(S), N = 0; ; ) {
          var ze = Ie(C);
          if (!ze)
            return f.length = N, f;
          var Pt = He(ze);
          try {
            f[N] = Pt;
          } catch (kt) {
            try {
              De(C);
            } finally {
              throw kt;
            }
          }
          N++;
        }
      }
      function d(h, p, f) {
        var w = u(
          p,
          f,
          /*Create*/
          !1
        );
        if (g(w) || !w.delete(h))
          return !1;
        if (w.size === 0) {
          var S = o.get(p);
          g(S) || (S.delete(f), S.size === 0 && o.delete(S));
        }
        return !0;
      }
    }
    function xt(i) {
      var o = i.defineMetadata, a = i.hasOwnMetadata, u = i.getOwnMetadata, v = i.getOwnMetadataKeys, A = i.deleteMetadata, O = new H(), b = {
        isProviderFor: function(d, h) {
          var p = O.get(d);
          return !g(p) && p.has(h) ? !0 : v(d, h).length ? (g(p) && (p = new k(), O.set(d, p)), p.add(h), !0) : !1;
        },
        OrdinaryDefineOwnMetadata: o,
        OrdinaryHasOwnMetadata: a,
        OrdinaryGetOwnMetadata: u,
        OrdinaryOwnMetadataKeys: v,
        OrdinaryDeleteMetadata: A
      };
      return b;
    }
    function X(i, o, a) {
      var u = oe.getProvider(i, o);
      if (!g(u))
        return u;
      if (a) {
        if (oe.setProvider(i, o, Ae))
          return Ae;
        throw new Error("Illegal state.");
      }
    }
    function Ot() {
      var i = {}, o = [], a = (
        /** @class */
        function() {
          function b(d, h, p) {
            this._index = 0, this._keys = d, this._values = h, this._selector = p;
          }
          return b.prototype["@@iterator"] = function() {
            return this;
          }, b.prototype[l] = function() {
            return this;
          }, b.prototype.next = function() {
            var d = this._index;
            if (d >= 0 && d < this._keys.length) {
              var h = this._selector(this._keys[d], this._values[d]);
              return d + 1 >= this._keys.length ? (this._index = -1, this._keys = o, this._values = o) : this._index++, { value: h, done: !1 };
            }
            return { value: void 0, done: !0 };
          }, b.prototype.throw = function(d) {
            throw this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), d;
          }, b.prototype.return = function(d) {
            return this._index >= 0 && (this._index = -1, this._keys = o, this._values = o), { value: d, done: !0 };
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
            var p = this._find(
              d,
              /*insert*/
              !0
            );
            return this._values[p] = h, this;
          }, b.prototype.delete = function(d) {
            var h = this._find(
              d,
              /*insert*/
              !1
            );
            if (h >= 0) {
              for (var p = this._keys.length, f = h + 1; f < p; f++)
                this._keys[f - 1] = this._keys[f], this._values[f - 1] = this._values[f];
              return this._keys.length--, this._values.length--, pe(d, this._cacheKey) && (this._cacheKey = i, this._cacheIndex = -2), !0;
            }
            return !1;
          }, b.prototype.clear = function() {
            this._keys.length = 0, this._values.length = 0, this._cacheKey = i, this._cacheIndex = -2;
          }, b.prototype.keys = function() {
            return new a(this._keys, this._values, v);
          }, b.prototype.values = function() {
            return new a(this._keys, this._values, A);
          }, b.prototype.entries = function() {
            return new a(this._keys, this._values, O);
          }, b.prototype["@@iterator"] = function() {
            return this.entries();
          }, b.prototype[l] = function() {
            return this.entries();
          }, b.prototype._find = function(d, h) {
            if (!pe(this._cacheKey, d)) {
              this._cacheIndex = -1;
              for (var p = 0; p < this._keys.length; p++)
                if (pe(this._keys[p], d)) {
                  this._cacheIndex = p;
                  break;
                }
            }
            return this._cacheIndex < 0 && h && (this._cacheIndex = this._keys.length, this._keys.push(d), this._values.push(void 0)), this._cacheIndex;
          }, b;
        }()
      );
      return u;
      function v(b, d) {
        return b;
      }
      function A(b, d) {
        return d;
      }
      function O(b, d) {
        return [b, d];
      }
    }
    function Mt() {
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
          }, o.prototype[l] = function() {
            return this.keys();
          }, o;
        }()
      );
      return i;
    }
    function Tt() {
      var i = 16, o = _.create(), a = u();
      return (
        /** @class */
        function() {
          function d() {
            this._key = u();
          }
          return d.prototype.has = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? _.has(p, this._key) : !1;
          }, d.prototype.get = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? _.get(p, this._key) : void 0;
          }, d.prototype.set = function(h, p) {
            var f = v(
              h,
              /*create*/
              !0
            );
            return f[this._key] = p, this;
          }, d.prototype.delete = function(h) {
            var p = v(
              h,
              /*create*/
              !1
            );
            return p !== void 0 ? delete p[this._key] : !1;
          }, d.prototype.clear = function() {
            this._key = u();
          }, d;
        }()
      );
      function u() {
        var d;
        do
          d = "@@WeakMap@@" + b();
        while (_.has(o, d));
        return o[d] = !0, d;
      }
      function v(d, h) {
        if (!r.call(d, a)) {
          if (!h)
            return;
          Object.defineProperty(d, a, { value: _.create() });
        }
        return d[a];
      }
      function A(d, h) {
        for (var p = 0; p < h; ++p)
          d[p] = Math.random() * 255 | 0;
        return d;
      }
      function O(d) {
        if (typeof Uint8Array == "function") {
          var h = new Uint8Array(d);
          return typeof crypto < "u" ? crypto.getRandomValues(h) : typeof msCrypto < "u" ? msCrypto.getRandomValues(h) : A(h, d), h;
        }
        return A(new Array(d), d);
      }
      function b() {
        var d = O(i);
        d[6] = d[6] & 79 | 64, d[8] = d[8] & 191 | 128;
        for (var h = "", p = 0; p < i; ++p) {
          var f = d[p];
          (p === 4 || p === 6 || p === 8) && (h += "-"), f < 16 && (h += "0"), h += f.toString(16).toLowerCase();
        }
        return h;
      }
    }
    function ye(i) {
      return i.__ = void 0, delete i.__, i;
    }
  });
})(Ve || (Ve = {}));
function Lt(n) {
  return typeof n.name == "string" && typeof n.version == "string" && typeof n.title == "string" && typeof n.elementSelector == "string" && typeof n.group == "string" && typeof n.iconName == "string";
}
function jt(n) {
  return function(e) {
    if (Lt(n)) {
      const t = {
        version: n.version,
        name: n.name,
        title: n.title,
        selector: n.elementSelector,
        category: n.group,
        icon: n.iconName
      };
      Reflect.defineMetadata("ZeroComponent", t, e.prototype), globalThis.customElements ? customElements.define(`${n.elementSelector}-${n.version}`, e) : console.warn("The customElements API is not supported in this environment. Custom element registration skipped."), window.dispatchEvent(new CustomEvent("zero-element:component-load", {
        detail: {
          element: t
        }
      }));
    } else
      throw new Error("Invalid configuration provided to RendererComponent decorator");
  };
}
function Ut(n) {
  return jt(n);
}
function Ht(n) {
  return function(e) {
    class t extends e {
      constructor() {
        super(...arguments);
        We(this, "_stylesApplied", !1);
      }
      connectedCallback() {
        super.connectedCallback(), this._stylesApplied || (this._injectGlobalStyles(), this._stylesApplied = !0), window.dispatchEvent(new CustomEvent("element-connected", {
          detail: { element: this }
        }));
      }
      update(c) {
        try {
          super.update(c);
        } catch {
        }
      }
      _injectGlobalStyles() {
        var y;
        const c = document.querySelector('style.global-style[type="text/css"]'), l = document.querySelectorAll('link[rel="stylesheet"].global-style[type="text/css"]'), m = "adoptedStyleSheets" in Document.prototype;
        if (!this.shadowRoot) {
          console.error("ShadowRoot is not available.");
          return;
        }
        if (c && m) {
          const $ = new CSSStyleSheet(), _ = (y = c.sheet) == null ? void 0 : y.cssRules;
          _ && (Array.from(_).forEach((E) => $.insertRule(E.cssText)), this.shadowRoot.adoptedStyleSheets = [...this.shadowRoot.adoptedStyleSheets, $]);
        } else if (c) {
          const $ = c.cloneNode(!0);
          this.shadowRoot.appendChild($);
        }
        l.forEach(($) => {
          const _ = $.cloneNode(!0);
          this.shadowRoot.appendChild(_);
        });
      }
    }
    return t;
  };
}
function It(n) {
  var t;
  if (((t = n == null ? void 0 : n.categoryLabel) == null ? void 0 : t.trim()) === "")
    throw new Error("Invalid category for RendererAttributeConfiguration. It cannot be an empty string.");
  return !0;
}
function Dt(n) {
  return function(e, t) {
    try {
      It(n);
      const r = Reflect.getMetadata("ZeroAttribute", e) || [];
      typeof t == "string" && typeof e[t] != "function" && (n.fieldMappings = n.fieldMappings ?? t), r.push(n), Reflect.defineMetadata("ZeroAttribute", r, e);
    } catch (r) {
      console.log(r);
    }
  };
}
function G(n) {
  return Dt(n);
}
var z;
(function(n) {
  n.TEXT_INPUT = "text-input", n.PASSWORD_INPUT = "password-input", n.DROPDOWN = "dropdown", n.CHECKBOX = "checkbox", n.RADIO_BUTTON = "radio-button", n.RANGE_SLIDER = "range-slider", n.FILE_INPUT = "file-input", n.DATE_PICKER = "date-picker", n.COLOR_PICKER = "color-picker", n.NUMBER_INPUT = "number-input", n.TEXTAREA = "textarea", n.MULTI_SELECT = "multi-select", n.POPUP_DROPDOWN = "popup-dropdown";
})(z || (z = {}));
var U;
(function(n) {
  n.PROPERTY = "property", n.EVENT = "event", n.ACTION = "action";
})(U || (U = {}));
/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const le = globalThis, we = le.ShadowRoot && (le.ShadyCSS === void 0 || le.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype, $e = Symbol(), Ge = /* @__PURE__ */ new WeakMap();
let nt = class {
  constructor(e, t, r) {
    if (this._$cssResult$ = !0, r !== $e) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
    this.cssText = e, this.t = t;
  }
  get styleSheet() {
    let e = this.o;
    const t = this.t;
    if (we && e === void 0) {
      const r = t !== void 0 && t.length === 1;
      r && (e = Ge.get(t)), e === void 0 && ((this.o = e = new CSSStyleSheet()).replaceSync(this.cssText), r && Ge.set(t, e));
    }
    return e;
  }
  toString() {
    return this.cssText;
  }
};
const zt = (n) => new nt(typeof n == "string" ? n : n + "", void 0, $e), Wt = (n, ...e) => {
  const t = n.length === 1 ? n[0] : e.reduce((r, s, c) => r + ((l) => {
    if (l._$cssResult$ === !0) return l.cssText;
    if (typeof l == "number") return l;
    throw Error("Value passed to 'css' function must be a 'css' function result: " + l + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
  })(s) + n[c + 1], n[0]);
  return new nt(t, n, $e);
}, Bt = (n, e) => {
  if (we) n.adoptedStyleSheets = e.map((t) => t instanceof CSSStyleSheet ? t : t.styleSheet);
  else for (const t of e) {
    const r = document.createElement("style"), s = le.litNonce;
    s !== void 0 && r.setAttribute("nonce", s), r.textContent = t.cssText, n.appendChild(r);
  }
}, Fe = we ? (n) => n : (n) => n instanceof CSSStyleSheet ? ((e) => {
  let t = "";
  for (const r of e.cssRules) t += r.cssText;
  return zt(t);
})(n) : n;
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const { is: Vt, defineProperty: Gt, getOwnPropertyDescriptor: Ft, getOwnPropertyNames: qt, getOwnPropertySymbols: Zt, getPrototypeOf: Jt } = Object, D = globalThis, qe = D.trustedTypes, Yt = qe ? qe.emptyScript : "", ve = D.reactiveElementPolyfillSupport, K = (n, e) => n, ce = { toAttribute(n, e) {
  switch (e) {
    case Boolean:
      n = n ? Yt : null;
      break;
    case Object:
    case Array:
      n = n == null ? n : JSON.stringify(n);
  }
  return n;
}, fromAttribute(n, e) {
  let t = n;
  switch (e) {
    case Boolean:
      t = n !== null;
      break;
    case Number:
      t = n === null ? null : Number(n);
      break;
    case Object:
    case Array:
      try {
        t = JSON.parse(n);
      } catch {
        t = null;
      }
  }
  return t;
} }, Ee = (n, e) => !Vt(n, e), Ze = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee };
Symbol.metadata ?? (Symbol.metadata = Symbol("metadata")), D.litPropertyMetadata ?? (D.litPropertyMetadata = /* @__PURE__ */ new WeakMap());
class Z extends HTMLElement {
  static addInitializer(e) {
    this._$Ei(), (this.l ?? (this.l = [])).push(e);
  }
  static get observedAttributes() {
    return this.finalize(), this._$Eh && [...this._$Eh.keys()];
  }
  static createProperty(e, t = Ze) {
    if (t.state && (t.attribute = !1), this._$Ei(), this.elementProperties.set(e, t), !t.noAccessor) {
      const r = Symbol(), s = this.getPropertyDescriptor(e, r, t);
      s !== void 0 && Gt(this.prototype, e, s);
    }
  }
  static getPropertyDescriptor(e, t, r) {
    const { get: s, set: c } = Ft(this.prototype, e) ?? { get() {
      return this[t];
    }, set(l) {
      this[t] = l;
    } };
    return { get() {
      return s == null ? void 0 : s.call(this);
    }, set(l) {
      const m = s == null ? void 0 : s.call(this);
      c.call(this, l), this.requestUpdate(e, m, r);
    }, configurable: !0, enumerable: !0 };
  }
  static getPropertyOptions(e) {
    return this.elementProperties.get(e) ?? Ze;
  }
  static _$Ei() {
    if (this.hasOwnProperty(K("elementProperties"))) return;
    const e = Jt(this);
    e.finalize(), e.l !== void 0 && (this.l = [...e.l]), this.elementProperties = new Map(e.elementProperties);
  }
  static finalize() {
    if (this.hasOwnProperty(K("finalized"))) return;
    if (this.finalized = !0, this._$Ei(), this.hasOwnProperty(K("properties"))) {
      const t = this.properties, r = [...qt(t), ...Zt(t)];
      for (const s of r) this.createProperty(s, t[s]);
    }
    const e = this[Symbol.metadata];
    if (e !== null) {
      const t = litPropertyMetadata.get(e);
      if (t !== void 0) for (const [r, s] of t) this.elementProperties.set(r, s);
    }
    this._$Eh = /* @__PURE__ */ new Map();
    for (const [t, r] of this.elementProperties) {
      const s = this._$Eu(t, r);
      s !== void 0 && this._$Eh.set(s, t);
    }
    this.elementStyles = this.finalizeStyles(this.styles);
  }
  static finalizeStyles(e) {
    const t = [];
    if (Array.isArray(e)) {
      const r = new Set(e.flat(1 / 0).reverse());
      for (const s of r) t.unshift(Fe(s));
    } else e !== void 0 && t.push(Fe(e));
    return t;
  }
  static _$Eu(e, t) {
    const r = t.attribute;
    return r === !1 ? void 0 : typeof r == "string" ? r : typeof e == "string" ? e.toLowerCase() : void 0;
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
    for (const r of t.keys()) this.hasOwnProperty(r) && (e.set(r, this[r]), delete this[r]);
    e.size > 0 && (this._$Ep = e);
  }
  createRenderRoot() {
    const e = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
    return Bt(e, this.constructor.elementStyles), e;
  }
  connectedCallback() {
    var e;
    this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this.enableUpdating(!0), (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostConnected) == null ? void 0 : r.call(t);
    });
  }
  enableUpdating(e) {
  }
  disconnectedCallback() {
    var e;
    (e = this._$EO) == null || e.forEach((t) => {
      var r;
      return (r = t.hostDisconnected) == null ? void 0 : r.call(t);
    });
  }
  attributeChangedCallback(e, t, r) {
    this._$AK(e, r);
  }
  _$EC(e, t) {
    var c;
    const r = this.constructor.elementProperties.get(e), s = this.constructor._$Eu(e, r);
    if (s !== void 0 && r.reflect === !0) {
      const l = (((c = r.converter) == null ? void 0 : c.toAttribute) !== void 0 ? r.converter : ce).toAttribute(t, r.type);
      this._$Em = e, l == null ? this.removeAttribute(s) : this.setAttribute(s, l), this._$Em = null;
    }
  }
  _$AK(e, t) {
    var c;
    const r = this.constructor, s = r._$Eh.get(e);
    if (s !== void 0 && this._$Em !== s) {
      const l = r.getPropertyOptions(s), m = typeof l.converter == "function" ? { fromAttribute: l.converter } : ((c = l.converter) == null ? void 0 : c.fromAttribute) !== void 0 ? l.converter : ce;
      this._$Em = s, this[s] = m.fromAttribute(t, l.type), this._$Em = null;
    }
  }
  requestUpdate(e, t, r) {
    if (e !== void 0) {
      if (r ?? (r = this.constructor.getPropertyOptions(e)), !(r.hasChanged ?? Ee)(this[e], t)) return;
      this.P(e, t, r);
    }
    this.isUpdatePending === !1 && (this._$ES = this._$ET());
  }
  P(e, t, r) {
    this._$AL.has(e) || this._$AL.set(e, t), r.reflect === !0 && this._$Em !== e && (this._$Ej ?? (this._$Ej = /* @__PURE__ */ new Set())).add(e);
  }
  async _$ET() {
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
    var r;
    if (!this.isUpdatePending) return;
    if (!this.hasUpdated) {
      if (this.renderRoot ?? (this.renderRoot = this.createRenderRoot()), this._$Ep) {
        for (const [c, l] of this._$Ep) this[c] = l;
        this._$Ep = void 0;
      }
      const s = this.constructor.elementProperties;
      if (s.size > 0) for (const [c, l] of s) l.wrapped !== !0 || this._$AL.has(c) || this[c] === void 0 || this.P(c, this[c], l);
    }
    let e = !1;
    const t = this._$AL;
    try {
      e = this.shouldUpdate(t), e ? (this.willUpdate(t), (r = this._$EO) == null || r.forEach((s) => {
        var c;
        return (c = s.hostUpdate) == null ? void 0 : c.call(s);
      }), this.update(t)) : this._$EU();
    } catch (s) {
      throw e = !1, this._$EU(), s;
    }
    e && this._$AE(t);
  }
  willUpdate(e) {
  }
  _$AE(e) {
    var t;
    (t = this._$EO) == null || t.forEach((r) => {
      var s;
      return (s = r.hostUpdated) == null ? void 0 : s.call(r);
    }), this.hasUpdated || (this.hasUpdated = !0, this.firstUpdated(e)), this.updated(e);
  }
  _$EU() {
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
    this._$Ej && (this._$Ej = this._$Ej.forEach((t) => this._$EC(t, this[t]))), this._$EU();
  }
  updated(e) {
  }
  firstUpdated(e) {
  }
}
Z.elementStyles = [], Z.shadowRootOptions = { mode: "open" }, Z[K("elementProperties")] = /* @__PURE__ */ new Map(), Z[K("finalized")] = /* @__PURE__ */ new Map(), ve == null || ve({ ReactiveElement: Z }), (D.reactiveElementVersions ?? (D.reactiveElementVersions = [])).push("2.0.4");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ee = globalThis, ue = ee.trustedTypes, Je = ue ? ue.createPolicy("lit-html", { createHTML: (n) => n }) : void 0, rt = "$lit$", I = `lit$${Math.random().toFixed(9).slice(2)}$`, it = "?" + I, Xt = `<${it}>`, V = document, ne = () => V.createComment(""), re = (n) => n === null || typeof n != "object" && typeof n != "function", Se = Array.isArray, Qt = (n) => Se(n) || typeof (n == null ? void 0 : n[Symbol.iterator]) == "function", ge = `[ 	
\f\r]`, Q = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g, Ye = /-->/g, Xe = />/g, W = RegExp(`>|${ge}(?:([^\\s"'>=/]+)(${ge}*=${ge}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g"), Qe = /'/g, Ke = /"/g, st = /^(?:script|style|textarea|title)$/i, Kt = (n) => (e, ...t) => ({ _$litType$: n, strings: e, values: t }), me = Kt(1), J = Symbol.for("lit-noChange"), M = Symbol.for("lit-nothing"), et = /* @__PURE__ */ new WeakMap(), B = V.createTreeWalker(V, 129);
function ot(n, e) {
  if (!Se(n) || !n.hasOwnProperty("raw")) throw Error("invalid template strings array");
  return Je !== void 0 ? Je.createHTML(e) : e;
}
const en = (n, e) => {
  const t = n.length - 1, r = [];
  let s, c = e === 2 ? "<svg>" : e === 3 ? "<math>" : "", l = Q;
  for (let m = 0; m < t; m++) {
    const y = n[m];
    let $, _, E = -1, T = 0;
    for (; T < y.length && (l.lastIndex = T, _ = l.exec(y), _ !== null); ) T = l.lastIndex, l === Q ? _[1] === "!--" ? l = Ye : _[1] !== void 0 ? l = Xe : _[2] !== void 0 ? (st.test(_[2]) && (s = RegExp("</" + _[2], "g")), l = W) : _[3] !== void 0 && (l = W) : l === W ? _[0] === ">" ? (l = s ?? Q, E = -1) : _[1] === void 0 ? E = -2 : (E = l.lastIndex - _[2].length, $ = _[1], l = _[3] === void 0 ? W : _[3] === '"' ? Ke : Qe) : l === Ke || l === Qe ? l = W : l === Ye || l === Xe ? l = Q : (l = W, s = void 0);
    const k = l === W && n[m + 1].startsWith("/>") ? " " : "";
    c += l === Q ? y + Xt : E >= 0 ? (r.push($), y.slice(0, E) + rt + y.slice(E) + I + k) : y + I + (E === -2 ? m : k);
  }
  return [ot(n, c + (n[t] || "<?>") + (e === 2 ? "</svg>" : e === 3 ? "</math>" : "")), r];
};
class ie {
  constructor({ strings: e, _$litType$: t }, r) {
    let s;
    this.parts = [];
    let c = 0, l = 0;
    const m = e.length - 1, y = this.parts, [$, _] = en(e, t);
    if (this.el = ie.createElement($, r), B.currentNode = this.el.content, t === 2 || t === 3) {
      const E = this.el.content.firstChild;
      E.replaceWith(...E.childNodes);
    }
    for (; (s = B.nextNode()) !== null && y.length < m; ) {
      if (s.nodeType === 1) {
        if (s.hasAttributes()) for (const E of s.getAttributeNames()) if (E.endsWith(rt)) {
          const T = _[l++], k = s.getAttribute(E).split(I), H = /([.?@])?(.*)/.exec(T);
          y.push({ type: 1, index: c, name: H[2], strings: k, ctor: H[1] === "." ? nn : H[1] === "?" ? rn : H[1] === "@" ? sn : de }), s.removeAttribute(E);
        } else E.startsWith(I) && (y.push({ type: 6, index: c }), s.removeAttribute(E));
        if (st.test(s.tagName)) {
          const E = s.textContent.split(I), T = E.length - 1;
          if (T > 0) {
            s.textContent = ue ? ue.emptyScript : "";
            for (let k = 0; k < T; k++) s.append(E[k], ne()), B.nextNode(), y.push({ type: 2, index: ++c });
            s.append(E[T], ne());
          }
        }
      } else if (s.nodeType === 8) if (s.data === it) y.push({ type: 2, index: c });
      else {
        let E = -1;
        for (; (E = s.data.indexOf(I, E + 1)) !== -1; ) y.push({ type: 7, index: c }), E += I.length - 1;
      }
      c++;
    }
  }
  static createElement(e, t) {
    const r = V.createElement("template");
    return r.innerHTML = e, r;
  }
}
function Y(n, e, t = n, r) {
  var l, m;
  if (e === J) return e;
  let s = r !== void 0 ? (l = t.o) == null ? void 0 : l[r] : t.l;
  const c = re(e) ? void 0 : e._$litDirective$;
  return (s == null ? void 0 : s.constructor) !== c && ((m = s == null ? void 0 : s._$AO) == null || m.call(s, !1), c === void 0 ? s = void 0 : (s = new c(n), s._$AT(n, t, r)), r !== void 0 ? (t.o ?? (t.o = []))[r] = s : t.l = s), s !== void 0 && (e = Y(n, s._$AS(n, e.values), s, r)), e;
}
class tn {
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
    const { el: { content: t }, parts: r } = this._$AD, s = ((e == null ? void 0 : e.creationScope) ?? V).importNode(t, !0);
    B.currentNode = s;
    let c = B.nextNode(), l = 0, m = 0, y = r[0];
    for (; y !== void 0; ) {
      if (l === y.index) {
        let $;
        y.type === 2 ? $ = new se(c, c.nextSibling, this, e) : y.type === 1 ? $ = new y.ctor(c, y.name, y.strings, this, e) : y.type === 6 && ($ = new on(c, this, e)), this._$AV.push($), y = r[++m];
      }
      l !== (y == null ? void 0 : y.index) && (c = B.nextNode(), l++);
    }
    return B.currentNode = V, s;
  }
  p(e) {
    let t = 0;
    for (const r of this._$AV) r !== void 0 && (r.strings !== void 0 ? (r._$AI(e, r, t), t += r.strings.length - 2) : r._$AI(e[t])), t++;
  }
}
class se {
  get _$AU() {
    var e;
    return ((e = this._$AM) == null ? void 0 : e._$AU) ?? this.v;
  }
  constructor(e, t, r, s) {
    this.type = 2, this._$AH = M, this._$AN = void 0, this._$AA = e, this._$AB = t, this._$AM = r, this.options = s, this.v = (s == null ? void 0 : s.isConnected) ?? !0;
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
    e = Y(this, e, t), re(e) ? e === M || e == null || e === "" ? (this._$AH !== M && this._$AR(), this._$AH = M) : e !== this._$AH && e !== J && this._(e) : e._$litType$ !== void 0 ? this.$(e) : e.nodeType !== void 0 ? this.T(e) : Qt(e) ? this.k(e) : this._(e);
  }
  O(e) {
    return this._$AA.parentNode.insertBefore(e, this._$AB);
  }
  T(e) {
    this._$AH !== e && (this._$AR(), this._$AH = this.O(e));
  }
  _(e) {
    this._$AH !== M && re(this._$AH) ? this._$AA.nextSibling.data = e : this.T(V.createTextNode(e)), this._$AH = e;
  }
  $(e) {
    var c;
    const { values: t, _$litType$: r } = e, s = typeof r == "number" ? this._$AC(e) : (r.el === void 0 && (r.el = ie.createElement(ot(r.h, r.h[0]), this.options)), r);
    if (((c = this._$AH) == null ? void 0 : c._$AD) === s) this._$AH.p(t);
    else {
      const l = new tn(s, this), m = l.u(this.options);
      l.p(t), this.T(m), this._$AH = l;
    }
  }
  _$AC(e) {
    let t = et.get(e.strings);
    return t === void 0 && et.set(e.strings, t = new ie(e)), t;
  }
  k(e) {
    Se(this._$AH) || (this._$AH = [], this._$AR());
    const t = this._$AH;
    let r, s = 0;
    for (const c of e) s === t.length ? t.push(r = new se(this.O(ne()), this.O(ne()), this, this.options)) : r = t[s], r._$AI(c), s++;
    s < t.length && (this._$AR(r && r._$AB.nextSibling, s), t.length = s);
  }
  _$AR(e = this._$AA.nextSibling, t) {
    var r;
    for ((r = this._$AP) == null ? void 0 : r.call(this, !1, !0, t); e && e !== this._$AB; ) {
      const s = e.nextSibling;
      e.remove(), e = s;
    }
  }
  setConnected(e) {
    var t;
    this._$AM === void 0 && (this.v = e, (t = this._$AP) == null || t.call(this, e));
  }
}
class de {
  get tagName() {
    return this.element.tagName;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  constructor(e, t, r, s, c) {
    this.type = 1, this._$AH = M, this._$AN = void 0, this.element = e, this.name = t, this._$AM = s, this.options = c, r.length > 2 || r[0] !== "" || r[1] !== "" ? (this._$AH = Array(r.length - 1).fill(new String()), this.strings = r) : this._$AH = M;
  }
  _$AI(e, t = this, r, s) {
    const c = this.strings;
    let l = !1;
    if (c === void 0) e = Y(this, e, t, 0), l = !re(e) || e !== this._$AH && e !== J, l && (this._$AH = e);
    else {
      const m = e;
      let y, $;
      for (e = c[0], y = 0; y < c.length - 1; y++) $ = Y(this, m[r + y], t, y), $ === J && ($ = this._$AH[y]), l || (l = !re($) || $ !== this._$AH[y]), $ === M ? e = M : e !== M && (e += ($ ?? "") + c[y + 1]), this._$AH[y] = $;
    }
    l && !s && this.j(e);
  }
  j(e) {
    e === M ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, e ?? "");
  }
}
class nn extends de {
  constructor() {
    super(...arguments), this.type = 3;
  }
  j(e) {
    this.element[this.name] = e === M ? void 0 : e;
  }
}
class rn extends de {
  constructor() {
    super(...arguments), this.type = 4;
  }
  j(e) {
    this.element.toggleAttribute(this.name, !!e && e !== M);
  }
}
class sn extends de {
  constructor(e, t, r, s, c) {
    super(e, t, r, s, c), this.type = 5;
  }
  _$AI(e, t = this) {
    if ((e = Y(this, e, t, 0) ?? M) === J) return;
    const r = this._$AH, s = e === M && r !== M || e.capture !== r.capture || e.once !== r.once || e.passive !== r.passive, c = e !== M && (r === M || s);
    s && this.element.removeEventListener(this.name, this, r), c && this.element.addEventListener(this.name, this, e), this._$AH = e;
  }
  handleEvent(e) {
    var t;
    typeof this._$AH == "function" ? this._$AH.call(((t = this.options) == null ? void 0 : t.host) ?? this.element, e) : this._$AH.handleEvent(e);
  }
}
class on {
  constructor(e, t, r) {
    this.element = e, this.type = 6, this._$AN = void 0, this._$AM = t, this.options = r;
  }
  get _$AU() {
    return this._$AM._$AU;
  }
  _$AI(e) {
    Y(this, e);
  }
}
const be = ee.litHtmlPolyfillSupport;
be == null || be(ie, se), (ee.litHtmlVersions ?? (ee.litHtmlVersions = [])).push("3.2.0");
const an = (n, e, t) => {
  const r = (t == null ? void 0 : t.renderBefore) ?? e;
  let s = r._$litPart$;
  if (s === void 0) {
    const c = (t == null ? void 0 : t.renderBefore) ?? null;
    r._$litPart$ = s = new se(e.insertBefore(ne(), c), c, void 0, t ?? {});
  }
  return s._$AI(n), s;
};
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
class te extends Z {
  constructor() {
    super(...arguments), this.renderOptions = { host: this }, this.o = void 0;
  }
  createRenderRoot() {
    var t;
    const e = super.createRenderRoot();
    return (t = this.renderOptions).renderBefore ?? (t.renderBefore = e.firstChild), e;
  }
  update(e) {
    const t = this.render();
    this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(e), this.o = an(t, this.renderRoot, this.renderOptions);
  }
  connectedCallback() {
    var e;
    super.connectedCallback(), (e = this.o) == null || e.setConnected(!0);
  }
  disconnectedCallback() {
    var e;
    super.disconnectedCallback(), (e = this.o) == null || e.setConnected(!1);
  }
  render() {
    return J;
  }
}
var tt;
te._$litElement$ = !0, te.finalized = !0, (tt = globalThis.litElementHydrateSupport) == null || tt.call(globalThis, { LitElement: te });
const _e = globalThis.litElementPolyfillSupport;
_e == null || _e({ LitElement: te });
(globalThis.litElementVersions ?? (globalThis.litElementVersions = [])).push("4.1.0");
/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
const ln = { attribute: !0, type: String, converter: ce, reflect: !1, hasChanged: Ee }, cn = (n = ln, e, t) => {
  const { kind: r, metadata: s } = t;
  let c = globalThis.litPropertyMetadata.get(s);
  if (c === void 0 && globalThis.litPropertyMetadata.set(s, c = /* @__PURE__ */ new Map()), c.set(t.name, n), r === "accessor") {
    const { name: l } = t;
    return { set(m) {
      const y = e.get.call(this);
      e.set.call(this, m), this.requestUpdate(l, y, n);
    }, init(m) {
      return m !== void 0 && this.P(l, void 0, n), m;
    } };
  }
  if (r === "setter") {
    const { name: l } = t;
    return function(m) {
      const y = this[l];
      e.call(this, m), this.requestUpdate(l, y, n);
    };
  }
  throw Error("Unsupported decorator location: " + r);
};
function j(n) {
  return (e, t) => typeof t == "object" ? cn(n, e, t) : ((r, s, c) => {
    const l = s.hasOwnProperty(c);
    return s.constructor.createProperty(c, l ? { ...r, wrapped: !0 } : r), l ? Object.getOwnPropertyDescriptor(s, c) : void 0;
  })(n, e, t);
}
var un = Object.defineProperty, dn = Object.getOwnPropertyDescriptor, R = (n, e, t, r) => {
  for (var s = r > 1 ? void 0 : r ? dn(e, t) : e, c = n.length - 1, l; c >= 0; c--)
    (l = n[c]) && (s = (r ? l(e, t, s) : l(s)) || s);
  return r && s && un(e, t, s), s;
};
let P = class extends te {
  constructor() {
    super(...arguments), this.code = `function helloWorld() {
    console.log("Hello, World!");
    return "Welcome to the code editor!";
}

// This is a comment
const message = "Monaco-like editor";
let count = 0;

class CodeEditor {
    constructor() {
        this.initialized = true;
    }
    
    run() {
        helloWorld();
    }
}`, this.language = "javascript", this.theme = "dark", this.showLineNumbers = !0, this.showMinimap = !0, this.wordWrap = !1, this.cursorLine = 1, this.cursorColumn = 1, this.searchVisible = !1, this.searchTerm = "";
  }
  onCodeChanged() {
    this.fireChangeEvent();
  }
  firstUpdated() {
    this.updateLineNumbers(), this.setupKeyboardShortcuts();
  }
  updated(n) {
    n.has("code") && (this.updateLineNumbers(), this.updateCursorPosition()), n.has("showLineNumbers") && this.updateLineNumbers();
  }
  updateLineNumbers() {
    var t;
    const n = this.code.split(`
`), e = (t = this.shadowRoot) == null ? void 0 : t.querySelector(".line-numbers");
    if (e && this.showLineNumbers) {
      const r = n.map((s, c) => `${c + 1}`);
      e.textContent = r.join(`
`);
    }
  }
  updateCursorPosition() {
    var e;
    const n = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".code-input");
    if (n) {
      const t = n.selectionStart, s = this.code.substring(0, t).split(`
`);
      this.cursorLine = s.length, this.cursorColumn = s[s.length - 1].length + 1;
    }
  }
  setupKeyboardShortcuts() {
    var e;
    const n = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".code-input");
    n && (n.addEventListener("keydown", (t) => {
      if (t.ctrlKey && t.key === "f" && (t.preventDefault(), this.toggleSearch()), t.key === "Tab") {
        t.preventDefault();
        const r = n.selectionStart, s = n.selectionEnd;
        t.shiftKey ? this.unindentSelection(n, r, s) : this.indentSelection(n, r, s);
      }
      ["(", "[", "{", '"', "'"].includes(t.key) && this.handleAutoClosing(t, n);
    }), n.addEventListener("input", (t) => {
      this.handleCodeInput(t), this.requestUpdate();
    }), n.addEventListener("click", () => {
      this.updateCursorPosition();
    }), n.addEventListener("scroll", () => {
      var r;
      const t = (r = this.shadowRoot) == null ? void 0 : r.querySelector(".line-numbers");
      t && (t.scrollTop = n.scrollTop);
    }));
  }
  indentSelection(n, e, t) {
    const r = n.value, s = r.substring(e, t);
    if (s.includes(`
`)) {
      const l = s.split(`
`).map((m) => "    " + m).join(`
`);
      n.value = r.substring(0, e) + l + r.substring(t), n.selectionStart = e, n.selectionEnd = e + l.length;
    } else
      n.value = r.substring(0, e) + "    " + r.substring(t), n.selectionStart = n.selectionEnd = e + 4;
    this.code = n.value;
  }
  unindentSelection(n, e, t) {
    const r = n.value, s = r.substring(0, e), c = r.substring(e, t), l = r.substring(t), $ = c.split(`
`).map((_) => _.startsWith("    ") ? _.substring(4) : _.startsWith("	") ? _.substring(1) : _).join(`
`);
    n.value = s + $ + l, n.selectionStart = e, n.selectionEnd = e + $.length, this.code = n.value;
  }
  handleAutoClosing(n, e) {
    const r = {
      "(": ")",
      "[": "]",
      "{": "}",
      '"': '"',
      "'": "'"
    }[n.key];
    if (r) {
      n.preventDefault();
      const s = e.selectionStart, c = e.selectionEnd, l = e.value;
      e.value = l.substring(0, s) + n.key + r + l.substring(c), e.selectionStart = e.selectionEnd = s + 1, this.code = e.value;
    }
  }
  toggleSearch() {
    this.searchVisible = !this.searchVisible, this.searchVisible && setTimeout(() => {
      var e;
      const n = (e = this.shadowRoot) == null ? void 0 : e.querySelector(".search-input");
      n == null || n.focus();
    }, 0);
  }
  highlightSyntax(n) {
    if (!n) return "";
    let e = n;
    return (this.language === "javascript" || this.language === "typescript") && (e = e.replace(
      /\b(function|const|let|var|if|else|for|while|return|class|constructor|import|export|from|default|async|await|try|catch|finally|throw|new|this|super|extends|implements|interface|type|enum|namespace|public|private|protected|static|readonly|abstract)\b/g,
      '<span class="keyword">$1</span>'
    ), e = e.replace(
      /(["'])((?:\\.|(?!\1)[^\\])*?)\1/g,
      '<span class="string">$1$2$1</span>'
    ), e = e.replace(
      /\/\/.*$/gm,
      '<span class="comment">$&</span>'
    ), e = e.replace(
      /\/\*[\s\S]*?\*\//g,
      '<span class="comment">$&</span>'
    ), e = e.replace(
      /\b\d+\.?\d*\b/g,
      '<span class="number">$&</span>'
    ), e = e.replace(
      /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()/g,
      '<span class="function">$1</span>'
    )), e;
  }
  handleCodeInput(n) {
    const e = n.target;
    this.code = e.value, this.updateCursorPosition(), this.onCodeChanged();
  }
  fireChangeEvent() {
    this.dispatchEvent(new CustomEvent("code-changed", {
      detail: {
        code: this.code,
        language: this.language
      },
      bubbles: !0,
      composed: !0
    }));
  }
  handleLanguageChange(n) {
    const e = n.target;
    this.language = e.value;
  }
  handleThemeChange(n) {
    const e = n.target;
    this.theme = e.value;
  }
  handleSearch(n) {
    const e = n.target;
    this.searchTerm = e.value;
  }
  render() {
    return me`
            <div class="editor-container theme-${this.theme}">
                <div class="editor-header">
                    <div class="editor-tabs">
                        <button class="editor-tab active">
                            ${this.language === "javascript" ? "script.js" : this.language === "typescript" ? "script.ts" : this.language === "python" ? "script.py" : this.language === "html" ? "index.html" : this.language === "css" ? "styles.css" : "file." + this.language}
                        </button>
                    </div>
                    <div class="editor-controls">
                        <div class="toolbar">
                            <button class="icon-button" @click="${this.toggleSearch}" title="Search (Ctrl+F)">🔍</button>
                            <select class="language-selector" .value="${this.language}" @change="${this.handleLanguageChange}">
                                <option value="javascript">JavaScript</option>
                                <option value="typescript">TypeScript</option>
                                <option value="python">Python</option>
                                <option value="java">Java</option>
                                <option value="csharp">C#</option>
                                <option value="html">HTML</option>
                                <option value="css">CSS</option>
                                <option value="json">JSON</option>
                            </select>
                            <select class="language-selector" .value="${this.theme}" @change="${this.handleThemeChange}">
                                <option value="dark">Dark</option>
                                <option value="light">Light</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div class="search-box ${this.searchVisible ? "visible" : ""}">
                    <input 
                        type="text" 
                        class="search-input" 
                        placeholder="Find..."
                        .value="${this.searchTerm}"
                        @input="${this.handleSearch}"
                    />
                </div>

                <div class="editor-main">
                    ${this.showLineNumbers ? me`
                        <div class="line-numbers"></div>
                    ` : ""}
                    
                    <div class="editor-content">
                        <textarea
                            class="code-input"
                            .value="${this.code}"
                            @input="${this.handleCodeInput}"
                            placeholder="Start typing your code..."
                            spellcheck="false"
                            style="${this.wordWrap ? "white-space: pre-wrap;" : ""}"
                        ></textarea>
                    </div>

                    ${this.showMinimap ? me`
                        <div class="minimap">
                            <div class="minimap-content">${this.code}</div>
                        </div>
                    ` : ""}
                </div>

                <div class="editor-footer">
                    <div class="status-info">
                        <span>Ln ${this.cursorLine}, Col ${this.cursorColumn}</span>
                        <span>${this.language.toUpperCase()}</span>
                        <span>UTF-8</span>
                    </div>
                    <div class="cursor-position">
                        <span>Lines: ${this.code.split(`
`).length}</span>
                        <span>Characters: ${this.code.length}</span>
                    </div>
                </div>
            </div>
        `;
  }
};
P.styles = Wt`
        :host {
            display: block;
            width: 100%;
            height: 400px;
            border: 1px solid #d1d5db;
            border-radius: 8px;
            overflow: hidden;
            font-family: 'Courier New', monospace;
            background: #1e1e1e;
            position: relative;
        }

        .editor-container {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        .editor-header {
            background: #2d2d30;
            border-bottom: 1px solid #3e3e42;
            padding: 8px 12px;
            display: flex;
            align-items: center;
            justify-content: space-between;
            color: #cccccc;
            font-size: 12px;
        }

        .editor-tabs {
            display: flex;
            gap: 1px;
        }

        .editor-tab {
            background: #2d2d30;
            border: none;
            color: #cccccc;
            padding: 6px 12px;
            cursor: pointer;
            border-radius: 4px 4px 0 0;
            font-size: 12px;
            position: relative;
        }

        .editor-tab.active {
            background: #1e1e1e;
            color: #ffffff;
        }

        .editor-tab:hover {
            background: #3e3e42;
        }

        .editor-controls {
            display: flex;
            gap: 8px;
            align-items: center;
        }

        .language-selector {
            background: #3c3c3c;
            border: 1px solid #464647;
            color: #cccccc;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 11px;
        }

        .editor-main {
            display: flex;
            flex: 1;
            overflow: hidden;
        }        .line-numbers {
            background: #252526;
            color: #6e7681;
            padding: 12px 8px;
            font-size: 13px;
            line-height: 1.4;
            text-align: right;
            min-width: 50px;
            border-right: 1px solid #3e3e42;
            user-select: none;
            overflow: hidden;
            white-space: pre-line;
            font-family: 'Consolas', 'Courier New', monospace;
        }

        .editor-content {
            flex: 1;
            position: relative;
            overflow: auto;
        }

        .code-input {
            width: 100%;
            height: 100%;
            background: transparent;
            color: #d4d4d4;
            border: none;
            outline: none;
            font-family: 'Consolas', 'Courier New', monospace;
            font-size: 13px;
            line-height: 1.4;
            padding: 12px;
            resize: none;
            white-space: pre;
            overflow-wrap: normal;
            overflow-x: auto;
            tab-size: 4;
        }

        .code-highlight {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            font-family: 'Consolas', 'Courier New', monospace;
            font-size: 13px;
            line-height: 1.4;
            padding: 12px;
            white-space: pre;
            overflow: hidden;
            color: transparent;
        }

        .keyword { color: #569cd6; }
        .string { color: #ce9178; }
        .comment { color: #6a9955; font-style: italic; }
        .number { color: #b5cea8; }
        .operator { color: #d4d4d4; }
        .function { color: #dcdcaa; }
        .variable { color: #9cdcfe; }
        .type { color: #4ec9b0; }

        .editor-footer {
            background: #007acc;
            color: white;
            padding: 4px 12px;
            font-size: 11px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .status-info {
            display: flex;
            gap: 16px;
        }

        .cursor-position {
            display: flex;
            gap: 8px;
        }

        .minimap {
            width: 100px;
            background: #252526;
            border-left: 1px solid #3e3e42;
            overflow: hidden;
            position: relative;
        }

        .minimap-content {
            font-size: 2px;
            line-height: 2px;
            color: #d4d4d4;
            padding: 2px;
            white-space: pre;
        }

        .search-box {
            position: absolute;
            top: 50px;
            right: 20px;
            background: #2d2d30;
            border: 1px solid #3e3e42;
            border-radius: 4px;
            padding: 8px;
            color: #cccccc;
            z-index: 10;
            display: none;
        }

        .search-box.visible {
            display: block;
        }

        .search-input {
            background: #3c3c3c;
            border: 1px solid #464647;
            color: #cccccc;
            padding: 4px 8px;
            border-radius: 2px;
            font-size: 11px;
            width: 200px;
        }

        .icon-button {
            background: none;
            border: none;
            color: #cccccc;
            cursor: pointer;
            padding: 4px;
            border-radius: 2px;
            font-size: 12px;
        }

        .icon-button:hover {
            background: #3e3e42;
        }

        .toolbar {
            display: flex;
            gap: 4px;
            align-items: center;
        }

        .theme-dark {
            background: #1e1e1e;
        }

        .theme-light {
            background: #ffffff;
        }

        .theme-light .editor-header {
            background: #f3f3f3;
            color: #333333;
            border-bottom-color: #e1e4e8;
        }

        .theme-light .code-input {
            color: #24292e;
        }        .theme-light .line-numbers {
            background: #fafbfc;
            color: #6a737d;
            border-right-color: #e1e4e8;
        }

        .line-numbers-container {
            display: flex;
            flex-direction: column;
            align-items: flex-end;
        }
    `;
R([
  j({ type: String }),
  G({
    attributeType: U.PROPERTY,
    uiComponentType: z.TEXTAREA,
    displayLabel: "Code Content",
    placeholderText: "Enter your code here...",
    fieldMappings: "code"
  })
], P.prototype, "code", 2);
R([
  j({ type: String }),
  G({
    attributeType: U.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Language",
    optionItems: [
      { value: "javascript", label: "JavaScript" },
      { value: "typescript", label: "TypeScript" },
      { value: "python", label: "Python" },
      { value: "java", label: "Java" },
      { value: "csharp", label: "C#" },
      { value: "html", label: "HTML" },
      { value: "css", label: "CSS" },
      { value: "json", label: "JSON" }
    ],
    fieldMappings: "language"
  })
], P.prototype, "language", 2);
R([
  j({ type: String }),
  G({
    attributeType: U.PROPERTY,
    uiComponentType: z.DROPDOWN,
    displayLabel: "Theme",
    optionItems: [
      { value: "dark", label: "Dark" },
      { value: "light", label: "Light" }
    ],
    fieldMappings: "theme"
  })
], P.prototype, "theme", 2);
R([
  j({ type: Boolean }),
  G({
    attributeType: U.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Show Line Numbers",
    fieldMappings: "showLineNumbers"
  })
], P.prototype, "showLineNumbers", 2);
R([
  j({ type: Boolean }),
  G({
    attributeType: U.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Show Minimap",
    fieldMappings: "showMinimap"
  })
], P.prototype, "showMinimap", 2);
R([
  j({ type: Boolean }),
  G({
    attributeType: U.PROPERTY,
    uiComponentType: z.CHECKBOX,
    displayLabel: "Word Wrap",
    fieldMappings: "wordWrap"
  })
], P.prototype, "wordWrap", 2);
R([
  j({ type: Number })
], P.prototype, "cursorLine", 2);
R([
  j({ type: Number })
], P.prototype, "cursorColumn", 2);
R([
  j({ type: Boolean })
], P.prototype, "searchVisible", 2);
R([
  j({ type: String })
], P.prototype, "searchTerm", 2);
R([
  G({
    attributeType: U.EVENT,
    displayLabel: "On Code Changed",
    eventTrigger: "code-changed"
  })
], P.prototype, "onCodeChanged", 1);
P = R([
  Ut({
    name: "code-editor",
    version: "1.0.0",
    title: "Code Editor",
    elementSelector: "zero-code-editor",
    group: "Editors",
    iconName: "code-icon.png"
  }),
  Ht()
], P);
export {
  P as CodeEditor
};
