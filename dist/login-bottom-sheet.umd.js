(function(C,T){typeof exports=="object"&&typeof module<"u"?T(exports,require("react"),require("react-dom")):typeof define=="function"&&define.amd?define(["exports","react","react-dom"],T):(C=typeof globalThis<"u"?globalThis:C||self,T(C["@rwndy/login-bottom-sheet"]={},C.React,C.ReactDOM))})(this,function(C,T,je){"use strict";var J={exports:{}},I={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function Pe(){if(ee)return I;ee=1;var w=T,g=Symbol.for("react.element"),S=Symbol.for("react.fragment"),b=Object.prototype.hasOwnProperty,k=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,x={key:!0,ref:!0,__self:!0,__source:!0};function O(m,s,y){var f,E={},j=null,Y=null;y!==void 0&&(j=""+y),s.key!==void 0&&(j=""+s.key),s.ref!==void 0&&(Y=s.ref);for(f in s)b.call(s,f)&&!x.hasOwnProperty(f)&&(E[f]=s[f]);if(m&&m.defaultProps)for(f in s=m.defaultProps,s)E[f]===void 0&&(E[f]=s[f]);return{$$typeof:g,type:m,key:j,ref:Y,props:E,_owner:k.current}}return I.Fragment=S,I.jsx=O,I.jsxs=O,I}var L={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function Se(){return re||(re=1,process.env.NODE_ENV!=="production"&&function(){var w=T,g=Symbol.for("react.element"),S=Symbol.for("react.portal"),b=Symbol.for("react.fragment"),k=Symbol.for("react.strict_mode"),x=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),m=Symbol.for("react.context"),s=Symbol.for("react.forward_ref"),y=Symbol.for("react.suspense"),f=Symbol.for("react.suspense_list"),E=Symbol.for("react.memo"),j=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),ne=Symbol.iterator,Fe="@@iterator";function Ae(e){if(e===null||typeof e!="object")return null;var r=ne&&e[ne]||e[Fe];return typeof r=="function"?r:null}var D=w.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function d(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];Ie("error",e,t)}}function Ie(e,r,t){{var n=D.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var Le=!1,Ne=!1,We=!1,Ye=!1,Me=!1,ae;ae=Symbol.for("react.module.reference");function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===b||e===x||Me||e===k||e===y||e===f||Ye||e===Y||Le||Ne||We||typeof e=="object"&&e!==null&&(e.$$typeof===j||e.$$typeof===E||e.$$typeof===O||e.$$typeof===m||e.$$typeof===s||e.$$typeof===ae||e.getModuleId!==void 0))}function $e(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function oe(e){return e.displayName||"Context"}function R(e){if(e==null)return null;if(typeof e.tag=="number"&&d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case b:return"Fragment";case S:return"Portal";case x:return"Profiler";case k:return"StrictMode";case y:return"Suspense";case f:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case m:var r=e;return oe(r)+".Consumer";case O:var t=e;return oe(t._context)+".Provider";case s:return $e(e,e.render,"ForwardRef");case E:var n=e.displayName||null;return n!==null?n:R(e.type)||"Memo";case j:{var i=e,u=i._payload,o=i._init;try{return R(o(u))}catch{return null}}}return null}var P=Object.assign,N=0,ie,ue,se,le,ce,fe,de;function ve(){}ve.__reactDisabledLog=!0;function Ue(){{if(N===0){ie=console.log,ue=console.info,se=console.warn,le=console.error,ce=console.group,fe=console.groupCollapsed,de=console.groupEnd;var e={configurable:!0,enumerable:!0,value:ve,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}N++}}function Be(){{if(N--,N===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:P({},e,{value:ie}),info:P({},e,{value:ue}),warn:P({},e,{value:se}),error:P({},e,{value:le}),group:P({},e,{value:ce}),groupCollapsed:P({},e,{value:fe}),groupEnd:P({},e,{value:de})})}N<0&&d("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var q=D.ReactCurrentDispatcher,G;function M(e,r,t){{if(G===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);G=n&&n[1]||""}return`
`+G+e}}var z=!1,V;{var Je=typeof WeakMap=="function"?WeakMap:Map;V=new Je}function pe(e,r){if(!e||z)return"";{var t=V.get(e);if(t!==void 0)return t}var n;z=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=q.current,q.current=null,Ue();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(_){n=_}Reflect.construct(e,[],o)}else{try{o.call()}catch(_){n=_}e.call(o.prototype)}}else{try{throw Error()}catch(_){n=_}e()}}catch(_){if(_&&n&&typeof _.stack=="string"){for(var a=_.stack.split(`
`),v=n.stack.split(`
`),l=a.length-1,c=v.length-1;l>=1&&c>=0&&a[l]!==v[c];)c--;for(;l>=1&&c>=0;l--,c--)if(a[l]!==v[c]){if(l!==1||c!==1)do if(l--,c--,c<0||a[l]!==v[c]){var h=`
`+a[l].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),typeof e=="function"&&V.set(e,h),h}while(l>=1&&c>=0);break}}}finally{z=!1,q.current=u,Be(),Error.prepareStackTrace=i}var A=e?e.displayName||e.name:"",Oe=A?M(A):"";return typeof e=="function"&&V.set(e,Oe),Oe}function qe(e,r,t){return pe(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function $(e,r,t){if(e==null)return"";if(typeof e=="function")return pe(e,Ge(e));if(typeof e=="string")return M(e);switch(e){case y:return M("Suspense");case f:return M("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case s:return qe(e.render);case E:return $(e.type,r,t);case j:{var n=e,i=n._payload,u=n._init;try{return $(u(i),r,t)}catch{}}}return""}var U=Object.prototype.hasOwnProperty,me={},he=D.ReactDebugCurrentFrame;function B(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);he.setExtraStackFrame(t)}else he.setExtraStackFrame(null)}function ze(e,r,t,n,i){{var u=Function.call.bind(U);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var v=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw v.name="Invariant Violation",v}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(l){a=l}a&&!(a instanceof Error)&&(B(i),d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),B(null)),a instanceof Error&&!(a.message in me)&&(me[a.message]=!0,B(i),d("Failed %s type: %s",t,a.message),B(null))}}}var Ke=Array.isArray;function K(e){return Ke(e)}function He(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Xe(e){try{return ge(e),!1}catch{return!0}}function ge(e){return""+e}function be(e){if(Xe(e))return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",He(e)),ge(e)}var W=D.ReactCurrentOwner,Ze={key:!0,ref:!0,__self:!0,__source:!0},ye,Ee,H;H={};function Qe(e){if(U.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function er(e){if(U.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function rr(e,r){if(typeof e.ref=="string"&&W.current&&r&&W.current.stateNode!==r){var t=R(W.current.type);H[t]||(d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',R(W.current.type),e.ref),H[t]=!0)}}function tr(e,r){{var t=function(){ye||(ye=!0,d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function nr(e,r){{var t=function(){Ee||(Ee=!0,d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var ar=function(e,r,t,n,i,u,o){var a={$$typeof:g,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function or(e,r,t,n,i){{var u,o={},a=null,v=null;t!==void 0&&(be(t),a=""+t),er(r)&&(be(r.key),a=""+r.key),Qe(r)&&(v=r.ref,rr(r,i));for(u in r)U.call(r,u)&&!Ze.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var l=e.defaultProps;for(u in l)o[u]===void 0&&(o[u]=l[u])}if(a||v){var c=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&tr(o,c),v&&nr(o,c)}return ar(e,a,v,i,n,W.current,o)}}var X=D.ReactCurrentOwner,Re=D.ReactDebugCurrentFrame;function F(e){if(e){var r=e._owner,t=$(e.type,e._source,r?r.type:null);Re.setExtraStackFrame(t)}else Re.setExtraStackFrame(null)}var Z;Z=!1;function Q(e){return typeof e=="object"&&e!==null&&e.$$typeof===g}function _e(){{if(X.current){var e=R(X.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ir(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Ce={};function ur(e){{var r=_e();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=ur(r);if(Ce[t])return;Ce[t]=!0;var n="";e&&e._owner&&e._owner!==X.current&&(n=" It was passed a child from "+R(e._owner.type)+"."),F(e),d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),F(null)}}function we(e,r){{if(typeof e!="object")return;if(K(e))for(var t=0;t<e.length;t++){var n=e[t];Q(n)&&Te(n,r)}else if(Q(e))e._store&&(e._store.validated=!0);else if(e){var i=Ae(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Q(o.value)&&Te(o.value,r)}}}function sr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===s||r.$$typeof===E))t=r.propTypes;else return;if(t){var n=R(r);ze(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!Z){Z=!0;var i=R(r);d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function lr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){F(e),d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),F(null);break}}e.ref!==null&&(F(e),d("Invalid attribute `ref` supplied to `React.Fragment`."),F(null))}}function xe(e,r,t,n,i,u){{var o=Ve(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var v=ir(i);v?a+=v:a+=_e();var l;e===null?l="null":K(e)?l="array":e!==void 0&&e.$$typeof===g?(l="<"+(R(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):l=typeof e,d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",l,a)}var c=or(e,r,t,i,u);if(c==null)return c;if(o){var h=r.children;if(h!==void 0)if(n)if(K(h)){for(var A=0;A<h.length;A++)we(h[A],e);Object.freeze&&Object.freeze(h)}else d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else we(h,e)}return e===b?lr(c):sr(c),c}}function cr(e,r,t){return xe(e,r,t,!0)}function fr(e,r,t){return xe(e,r,t,!1)}var dr=fr,vr=cr;L.Fragment=b,L.jsx=dr,L.jsxs=vr}()),L}process.env.NODE_ENV==="production"?J.exports=Pe():J.exports=Se();var p=J.exports;const te=w=>{const{section:g,id:S,className:b,children:k,...x}=w,O=document.createElement(g),m=T.useRef(O);return T.useEffect(()=>{const s=m.current;if(s)return s.setAttribute("id",S),s.setAttribute("class",b),Object.keys(x).forEach(y=>{const f=x[y];s.setAttribute(y,f)}),document.body.appendChild(s),()=>{document.body.removeChild(s)}},[m,S,b]),m.current?je.createPortal(k,m.current):p.jsx(p.Fragment,{children:null})};te.defaultProps={section:"section"};const ke=()=>p.jsx("svg",{className:"modal-icon",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"25",viewBox:"0 0 24 25",fill:"none",children:p.jsx("path",{d:"M19.5469 18.4531C19.6518 18.5576 19.735 18.6818 19.7918 18.8186C19.8485 18.9553 19.8778 19.1019 19.8778 19.25C19.8778 19.3981 19.8485 19.5447 19.7918 19.6814C19.735 19.8182 19.6518 19.9424 19.5469 20.0469C19.3346 20.2564 19.0483 20.3739 18.75 20.3739C18.4517 20.3739 18.1654 20.2564 17.9531 20.0469L12 14.0937L6.04689 20.0469C5.8346 20.2564 5.54831 20.3739 5.25002 20.3739C4.95172 20.3739 4.66544 20.2564 4.45314 20.0469C4.34826 19.9424 4.26504 19.8182 4.20826 19.6814C4.15148 19.5447 4.12225 19.3981 4.12225 19.25C4.12225 19.1019 4.15148 18.9553 4.20826 18.8186C4.26504 18.6818 4.34826 18.5576 4.45314 18.4531L10.4063 12.5L4.45314 6.54687C4.2418 6.33553 4.12306 6.04888 4.12306 5.75C4.12306 5.60201 4.15221 5.45546 4.20885 5.31873C4.26548 5.182 4.34849 5.05777 4.45314 4.95312C4.55779 4.84848 4.68202 4.76547 4.81875 4.70883C4.95548 4.6522 5.10202 4.62305 5.25002 4.62305C5.5489 4.62305 5.83555 4.74178 6.04689 4.95312L12 10.9062L17.9531 4.95312C18.1645 4.74178 18.4511 4.62305 18.75 4.62305C19.0489 4.62305 19.3355 4.74178 19.5469 4.95312C19.7582 5.16447 19.877 5.45111 19.877 5.75C19.877 6.04888 19.7582 6.33553 19.5469 6.54687L13.5938 12.5L19.5469 18.4531Z",fill:"white"})}),De=({onLogin:w,onClose:g})=>p.jsxs(te,{id:"modal",className:"modal",section:"section",children:[p.jsx("div",{className:"modal-overlay",onClick:g}),p.jsx("div",{className:"modal-content",children:p.jsxs("div",{className:"modal-content-container",children:[p.jsxs("div",{className:"modal-content-wrapper",children:[p.jsx("h4",{children:"Please Log In"}),p.jsx("button",{className:"modal-button-close",onClick:g,children:p.jsx(ke,{})})]}),p.jsx("p",{className:"modal-text-description",children:"You must log in first before use comment in this section"}),p.jsx("button",{className:"modal-button-login",onClick:w,children:"Log In"})]})})]});C.LoginBottomSheet=De,Object.defineProperty(C,Symbol.toStringTag,{value:"Module"})});