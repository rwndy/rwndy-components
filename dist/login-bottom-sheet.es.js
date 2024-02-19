import we, { useRef as sr, useEffect as lr } from "react";
import cr from "react-dom";
var X = { exports: {} }, I = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function fr() {
  if (Ce)
    return I;
  Ce = 1;
  var C = we, g = Symbol.for("react.element"), j = Symbol.for("react.fragment"), b = Object.prototype.hasOwnProperty, P = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, T = { key: !0, ref: !0, __self: !0, __source: !0 };
  function w(m, s, E) {
    var f, y = {}, x = null, N = null;
    E !== void 0 && (x = "" + E), s.key !== void 0 && (x = "" + s.key), s.ref !== void 0 && (N = s.ref);
    for (f in s)
      b.call(s, f) && !T.hasOwnProperty(f) && (y[f] = s[f]);
    if (m && m.defaultProps)
      for (f in s = m.defaultProps, s)
        y[f] === void 0 && (y[f] = s[f]);
    return { $$typeof: g, type: m, key: x, ref: N, props: y, _owner: P.current };
  }
  return I.Fragment = j, I.jsx = w, I.jsxs = w, I;
}
var L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Te;
function dr() {
  return Te || (Te = 1, process.env.NODE_ENV !== "production" && function() {
    var C = we, g = Symbol.for("react.element"), j = Symbol.for("react.portal"), b = Symbol.for("react.fragment"), P = Symbol.for("react.strict_mode"), T = Symbol.for("react.profiler"), w = Symbol.for("react.provider"), m = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), E = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), N = Symbol.for("react.offscreen"), Z = Symbol.iterator, Oe = "@@iterator";
    function je(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = Z && e[Z] || e[Oe];
      return typeof r == "function" ? r : null;
    }
    var S = C.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        Pe("error", e, t);
      }
    }
    function Pe(e, r, t) {
      {
        var n = S.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var u = t.map(function(o) {
          return String(o);
        });
        u.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, u);
      }
    }
    var Se = !1, ke = !1, De = !1, Fe = !1, Ae = !1, Q;
    Q = Symbol.for("react.module.reference");
    function Ie(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === b || e === T || Ae || e === P || e === E || e === f || Fe || e === N || Se || ke || De || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === y || e.$$typeof === w || e.$$typeof === m || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === Q || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function ee(e) {
      return e.displayName || "Context";
    }
    function R(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case b:
          return "Fragment";
        case j:
          return "Portal";
        case T:
          return "Profiler";
        case P:
          return "StrictMode";
        case E:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case m:
            var r = e;
            return ee(r) + ".Consumer";
          case w:
            var t = e;
            return ee(t._context) + ".Provider";
          case s:
            return Le(e, e.render, "ForwardRef");
          case y:
            var n = e.displayName || null;
            return n !== null ? n : R(e.type) || "Memo";
          case x: {
            var i = e, u = i._payload, o = i._init;
            try {
              return R(o(u));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var O = Object.assign, F = 0, re, te, ne, ae, oe, ie, ue;
    function se() {
    }
    se.__reactDisabledLog = !0;
    function Ne() {
      {
        if (F === 0) {
          re = console.log, te = console.info, ne = console.warn, ae = console.error, oe = console.group, ie = console.groupCollapsed, ue = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: se,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        F++;
      }
    }
    function $e() {
      {
        if (F--, F === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: O({}, e, {
              value: re
            }),
            info: O({}, e, {
              value: te
            }),
            warn: O({}, e, {
              value: ne
            }),
            error: O({}, e, {
              value: ae
            }),
            group: O({}, e, {
              value: oe
            }),
            groupCollapsed: O({}, e, {
              value: ie
            }),
            groupEnd: O({}, e, {
              value: ue
            })
          });
        }
        F < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var U = S.ReactCurrentDispatcher, B;
    function $(e, r, t) {
      {
        if (B === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            B = n && n[1] || "";
          }
        return `
` + B + e;
      }
    }
    var q = !1, W;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      W = new We();
    }
    function le(e, r) {
      if (!e || q)
        return "";
      {
        var t = W.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var u;
      u = U.current, U.current = null, Ne();
      try {
        if (r) {
          var o = function() {
            throw Error();
          };
          if (Object.defineProperty(o.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(o, []);
            } catch (_) {
              n = _;
            }
            Reflect.construct(e, [], o);
          } else {
            try {
              o.call();
            } catch (_) {
              n = _;
            }
            e.call(o.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (_) {
            n = _;
          }
          e();
        }
      } catch (_) {
        if (_ && n && typeof _.stack == "string") {
          for (var a = _.stack.split(`
`), v = n.stack.split(`
`), l = a.length - 1, c = v.length - 1; l >= 1 && c >= 0 && a[l] !== v[c]; )
            c--;
          for (; l >= 1 && c >= 0; l--, c--)
            if (a[l] !== v[c]) {
              if (l !== 1 || c !== 1)
                do
                  if (l--, c--, c < 0 || a[l] !== v[c]) {
                    var h = `
` + a[l].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && W.set(e, h), h;
                  }
                while (l >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        q = !1, U.current = u, $e(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", _e = D ? $(D) : "";
      return typeof e == "function" && W.set(e, _e), _e;
    }
    function Ye(e, r, t) {
      return le(e, !1);
    }
    function Me(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, Me(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case E:
          return $("Suspense");
        case f:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ye(e.render);
          case y:
            return Y(e.type, r, t);
          case x: {
            var n = e, i = n._payload, u = n._init;
            try {
              return Y(u(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, ce = {}, fe = S.ReactDebugCurrentFrame;
    function V(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        fe.setExtraStackFrame(t);
      } else
        fe.setExtraStackFrame(null);
    }
    function Ve(e, r, t, n, i) {
      {
        var u = Function.call.bind(M);
        for (var o in e)
          if (u(e, o)) {
            var a = void 0;
            try {
              if (typeof e[o] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + o + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[o] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              a = e[o](r, o, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (l) {
              a = l;
            }
            a && !(a instanceof Error) && (V(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, o, typeof a), V(null)), a instanceof Error && !(a.message in ce) && (ce[a.message] = !0, V(i), d("Failed %s type: %s", t, a.message), V(null));
          }
      }
    }
    var Ue = Array.isArray;
    function J(e) {
      return Ue(e);
    }
    function Be(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function qe(e) {
      try {
        return de(e), !1;
      } catch {
        return !0;
      }
    }
    function de(e) {
      return "" + e;
    }
    function ve(e) {
      if (qe(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Be(e)), de(e);
    }
    var A = S.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, pe, me, G;
    G = {};
    function Ge(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = R(A.current.type);
        G[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', R(A.current.type), e.ref), G[t] = !0);
      }
    }
    function He(e, r) {
      {
        var t = function() {
          pe || (pe = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          me || (me = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Ze = function(e, r, t, n, i, u, o) {
      var a = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: g,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: o,
        // Record the component responsible for creating this element.
        _owner: u
      };
      return a._store = {}, Object.defineProperty(a._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(a, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: n
      }), Object.defineProperty(a, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(a.props), Object.freeze(a)), a;
    };
    function Qe(e, r, t, n, i) {
      {
        var u, o = {}, a = null, v = null;
        t !== void 0 && (ve(t), a = "" + t), ze(r) && (ve(r.key), a = "" + r.key), Ge(r) && (v = r.ref, Ke(r, i));
        for (u in r)
          M.call(r, u) && !Je.hasOwnProperty(u) && (o[u] = r[u]);
        if (e && e.defaultProps) {
          var l = e.defaultProps;
          for (u in l)
            o[u] === void 0 && (o[u] = l[u]);
        }
        if (a || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          a && He(o, c), v && Xe(o, c);
        }
        return Ze(e, a, v, i, n, A.current, o);
      }
    }
    var z = S.ReactCurrentOwner, he = S.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        he.setExtraStackFrame(t);
      } else
        he.setExtraStackFrame(null);
    }
    var K;
    K = !1;
    function H(e) {
      return typeof e == "object" && e !== null && e.$$typeof === g;
    }
    function ge() {
      {
        if (z.current) {
          var e = R(z.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function er(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var be = {};
    function rr(e) {
      {
        var r = ge();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ee(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = rr(r);
        if (be[t])
          return;
        be[t] = !0;
        var n = "";
        e && e._owner && e._owner !== z.current && (n = " It was passed a child from " + R(e._owner.type) + "."), k(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (J(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            H(n) && Ee(n, r);
          }
        else if (H(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = je(e);
          if (typeof i == "function" && i !== e.entries)
            for (var u = i.call(e), o; !(o = u.next()).done; )
              H(o.value) && Ee(o.value, r);
        }
      }
    }
    function tr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === y))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = R(r);
          Ve(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !K) {
          K = !0;
          var i = R(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function nr(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            k(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
      }
    }
    function Re(e, r, t, n, i, u) {
      {
        var o = Ie(e);
        if (!o) {
          var a = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (a += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = er(i);
          v ? a += v : a += ge();
          var l;
          e === null ? l = "null" : J(e) ? l = "array" : e !== void 0 && e.$$typeof === g ? (l = "<" + (R(e.type) || "Unknown") + " />", a = " Did you accidentally export a JSX literal instead of a component?") : l = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", l, a);
        }
        var c = Qe(e, r, t, i, u);
        if (c == null)
          return c;
        if (o) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (J(h)) {
                for (var D = 0; D < h.length; D++)
                  ye(h[D], e);
                Object.freeze && Object.freeze(h);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(h, e);
        }
        return e === b ? nr(c) : tr(c), c;
      }
    }
    function ar(e, r, t) {
      return Re(e, r, t, !0);
    }
    function or(e, r, t) {
      return Re(e, r, t, !1);
    }
    var ir = or, ur = ar;
    L.Fragment = b, L.jsx = ir, L.jsxs = ur;
  }()), L;
}
process.env.NODE_ENV === "production" ? X.exports = fr() : X.exports = dr();
var p = X.exports;
const xe = (C) => {
  const { section: g, id: j, className: b, children: P, ...T } = C, w = document.createElement(g), m = sr(w);
  return lr(() => {
    const s = m.current;
    if (s)
      return s.setAttribute("id", j), s.setAttribute("class", b), Object.keys(T).forEach((E) => {
        const f = T[E];
        s.setAttribute(E, f);
      }), document.body.appendChild(s), () => {
        document.body.removeChild(s);
      };
  }, [m, j, b]), m.current ? cr.createPortal(P, m.current) : /* @__PURE__ */ p.jsx(p.Fragment, { children: null });
};
xe.defaultProps = {
  section: "section"
};
const vr = () => /* @__PURE__ */ p.jsx("svg", { className: "modal-icon", xmlns: "http://www.w3.org/2000/svg", width: "24", height: "25", viewBox: "0 0 24 25", fill: "none", children: /* @__PURE__ */ p.jsx("path", { d: "M19.5469 18.4531C19.6518 18.5576 19.735 18.6818 19.7918 18.8186C19.8485 18.9553 19.8778 19.1019 19.8778 19.25C19.8778 19.3981 19.8485 19.5447 19.7918 19.6814C19.735 19.8182 19.6518 19.9424 19.5469 20.0469C19.3346 20.2564 19.0483 20.3739 18.75 20.3739C18.4517 20.3739 18.1654 20.2564 17.9531 20.0469L12 14.0937L6.04689 20.0469C5.8346 20.2564 5.54831 20.3739 5.25002 20.3739C4.95172 20.3739 4.66544 20.2564 4.45314 20.0469C4.34826 19.9424 4.26504 19.8182 4.20826 19.6814C4.15148 19.5447 4.12225 19.3981 4.12225 19.25C4.12225 19.1019 4.15148 18.9553 4.20826 18.8186C4.26504 18.6818 4.34826 18.5576 4.45314 18.4531L10.4063 12.5L4.45314 6.54687C4.2418 6.33553 4.12306 6.04888 4.12306 5.75C4.12306 5.60201 4.15221 5.45546 4.20885 5.31873C4.26548 5.182 4.34849 5.05777 4.45314 4.95312C4.55779 4.84848 4.68202 4.76547 4.81875 4.70883C4.95548 4.6522 5.10202 4.62305 5.25002 4.62305C5.5489 4.62305 5.83555 4.74178 6.04689 4.95312L12 10.9062L17.9531 4.95312C18.1645 4.74178 18.4511 4.62305 18.75 4.62305C19.0489 4.62305 19.3355 4.74178 19.5469 4.95312C19.7582 5.16447 19.877 5.45111 19.877 5.75C19.877 6.04888 19.7582 6.33553 19.5469 6.54687L13.5938 12.5L19.5469 18.4531Z", fill: "white" }) }), hr = ({ onLogin: C, onClose: g }) => /* @__PURE__ */ p.jsxs(xe, { id: "modal", className: "modal", section: "section", children: [
  /* @__PURE__ */ p.jsx("div", { className: "modal-overlay", onClick: g }),
  /* @__PURE__ */ p.jsx("div", { className: "modal-content", children: /* @__PURE__ */ p.jsxs("div", { className: "modal-content-container", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "modal-content-wrapper", children: [
      /* @__PURE__ */ p.jsx("h4", { children: "Please Log In" }),
      /* @__PURE__ */ p.jsx("button", { className: "modal-button-close", onClick: g, children: /* @__PURE__ */ p.jsx(vr, {}) })
    ] }),
    /* @__PURE__ */ p.jsx("p", { className: "modal-text-description", children: "You must log in first before use comment in this section" }),
    /* @__PURE__ */ p.jsx("button", { className: "modal-button-login", onClick: C, children: "Log In" })
  ] }) })
] });
export {
  hr as LoginBottomSheet
};
