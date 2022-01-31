var Yk=Object.defineProperty,Jk=Object.defineProperties;var Xk=Object.getOwnPropertyDescriptors;var By=Object.getOwnPropertySymbols;var Zk=Object.prototype.hasOwnProperty,eb=Object.prototype.propertyIsEnumerable;var qy=(t,e,n)=>e in t?Yk(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,pd=(t,e)=>{for(var n in e||(e={}))Zk.call(e,n)&&qy(t,n,e[n]);if(By)for(var n of By(e))eb.call(e,n)&&qy(t,n,e[n]);return t},md=(t,e)=>Jk(t,Xk(e));var No=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};function tb(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}function nb(t){if(t.__esModule)return t;var e=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach(function(n){var r=Object.getOwnPropertyDescriptor(t,n);Object.defineProperty(e,n,r.get?r:{enumerable:!0,get:function(){return t[n]}})}),e}var V={exports:{}},Z={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var zy=Object.getOwnPropertySymbols,rb=Object.prototype.hasOwnProperty,ib=Object.prototype.propertyIsEnumerable;function sb(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function ob(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var Wy=ob()?Object.assign:function(t,e){for(var n,r=sb(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)rb.call(n,o)&&(r[o]=n[o]);if(zy){i=zy(n);for(var a=0;a<i.length;a++)ib.call(n,i[a])&&(r[i[a]]=n[i[a]])}}return r};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gd=Wy,Xi=60103,Hy=60106;Z.Fragment=60107;Z.StrictMode=60108;Z.Profiler=60114;var Ky=60109,Gy=60110,Qy=60112;Z.Suspense=60113;var Yy=60115,Jy=60116;if(typeof Symbol=="function"&&Symbol.for){var pn=Symbol.for;Xi=pn("react.element"),Hy=pn("react.portal"),Z.Fragment=pn("react.fragment"),Z.StrictMode=pn("react.strict_mode"),Z.Profiler=pn("react.profiler"),Ky=pn("react.provider"),Gy=pn("react.context"),Qy=pn("react.forward_ref"),Z.Suspense=pn("react.suspense"),Yy=pn("react.memo"),Jy=pn("react.lazy")}var Xy=typeof Symbol=="function"&&Symbol.iterator;function ab(t){return t===null||typeof t!="object"?null:(t=Xy&&t[Xy]||t["@@iterator"],typeof t=="function"?t:null)}function Ao(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Zy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},ev={};function Zi(t,e,n){this.props=t,this.context=e,this.refs=ev,this.updater=n||Zy}Zi.prototype.isReactComponent={};Zi.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(Ao(85));this.updater.enqueueSetState(this,t,e,"setState")};Zi.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function tv(){}tv.prototype=Zi.prototype;function yd(t,e,n){this.props=t,this.context=e,this.refs=ev,this.updater=n||Zy}var vd=yd.prototype=new tv;vd.constructor=yd;gd(vd,Zi.prototype);vd.isPureReactComponent=!0;var wd={current:null},nv=Object.prototype.hasOwnProperty,rv={key:!0,ref:!0,__self:!0,__source:!0};function iv(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)nv.call(e,r)&&!rv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),l=0;l<a;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Xi,type:t,key:s,ref:o,props:i,_owner:wd.current}}function ub(t,e){return{$$typeof:Xi,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function _d(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xi}function lb(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var sv=/\/+/g;function Ed(t,e){return typeof t=="object"&&t!==null&&t.key!=null?lb(""+t.key):e.toString(36)}function Xu(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Xi:case Hy:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Ed(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(sv,"$&/")+"/"),Xu(i,e,n,"",function(l){return l})):i!=null&&(_d(i)&&(i=ub(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(sv,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var a=0;a<t.length;a++){s=t[a];var u=r+Ed(s,a);o+=Xu(s,e,n,u,i)}else if(u=ab(t),typeof u=="function")for(t=u.call(t),a=0;!(s=t.next()).done;)s=s.value,u=r+Ed(s,a++),o+=Xu(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(Ao(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Zu(t,e,n){if(t==null)return t;var r=[],i=0;return Xu(t,r,"","",function(s){return e.call(n,s,i++)}),r}function cb(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var ov={current:null};function zn(){var t=ov.current;if(t===null)throw Error(Ao(321));return t}var hb={ReactCurrentDispatcher:ov,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:wd,IsSomeRendererActing:{current:!1},assign:gd};Z.Children={map:Zu,forEach:function(t,e,n){Zu(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Zu(t,function(){e++}),e},toArray:function(t){return Zu(t,function(e){return e})||[]},only:function(t){if(!_d(t))throw Error(Ao(143));return t}};Z.Component=Zi;Z.PureComponent=yd;Z.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=hb;Z.cloneElement=function(t,e,n){if(t==null)throw Error(Ao(267,t));var r=gd({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wd.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(u in e)nv.call(e,u)&&!rv.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&a!==void 0?a[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var l=0;l<u;l++)a[l]=arguments[l+2];r.children=a}return{$$typeof:Xi,type:t.type,key:i,ref:s,props:r,_owner:o}};Z.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:Gy,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Ky,_context:t},t.Consumer=t};Z.createElement=iv;Z.createFactory=function(t){var e=iv.bind(null,t);return e.type=t,e};Z.createRef=function(){return{current:null}};Z.forwardRef=function(t){return{$$typeof:Qy,render:t}};Z.isValidElement=_d;Z.lazy=function(t){return{$$typeof:Jy,_payload:{_status:-1,_result:t},_init:cb}};Z.memo=function(t,e){return{$$typeof:Yy,type:t,compare:e===void 0?null:e}};Z.useCallback=function(t,e){return zn().useCallback(t,e)};Z.useContext=function(t,e){return zn().useContext(t,e)};Z.useDebugValue=function(){};Z.useEffect=function(t,e){return zn().useEffect(t,e)};Z.useImperativeHandle=function(t,e,n){return zn().useImperativeHandle(t,e,n)};Z.useLayoutEffect=function(t,e){return zn().useLayoutEffect(t,e)};Z.useMemo=function(t,e){return zn().useMemo(t,e)};Z.useReducer=function(t,e,n){return zn().useReducer(t,e,n)};Z.useRef=function(t){return zn().useRef(t)};Z.useState=function(t){return zn().useState(t)};Z.version="17.0.2";V.exports=Z;var el=V.exports,Id={exports:{}},en={},av={exports:{}},uv={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}if(typeof window=="undefined"||typeof MessageChannel!="function"){var u=null,l=null,c=function(){if(u!==null)try{var g=t.unstable_now();u(!0,g),u=null}catch(I){throw setTimeout(c,0),I}};e=function(g){u!==null?setTimeout(e,0,g):(u=g,setTimeout(c,0))},n=function(g,I){l=setTimeout(g,I)},r=function(){clearTimeout(l)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var h=window.setTimeout,d=window.clearTimeout;if(typeof console!="undefined"){var m=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof m!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var _=!1,E=null,p=-1,f=5,y=0;t.unstable_shouldYield=function(){return t.unstable_now()>=y},i=function(){},t.unstable_forceFrameRate=function(g){0>g||125<g?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):f=0<g?Math.floor(1e3/g):5};var S=new MessageChannel,v=S.port2;S.port1.onmessage=function(){if(E!==null){var g=t.unstable_now();y=g+f;try{E(!0,g)?v.postMessage(null):(_=!1,E=null)}catch(I){throw v.postMessage(null),I}}else _=!1},e=function(g){E=g,_||(_=!0,v.postMessage(null))},n=function(g,I){p=h(function(){g(t.unstable_now())},I)},r=function(){d(p),p=-1}}function A(g,I){var w=g.length;g.push(I);e:for(;;){var C=w-1>>>1,L=g[C];if(L!==void 0&&0<j(L,I))g[C]=I,g[w]=L,w=C;else break e}}function k(g){return g=g[0],g===void 0?null:g}function M(g){var I=g[0];if(I!==void 0){var w=g.pop();if(w!==I){g[0]=w;e:for(var C=0,L=g.length;C<L;){var W=2*(C+1)-1,H=g[W],Y=W+1,Pe=g[Y];if(H!==void 0&&0>j(H,w))Pe!==void 0&&0>j(Pe,H)?(g[C]=Pe,g[Y]=w,C=Y):(g[C]=H,g[W]=w,C=W);else if(Pe!==void 0&&0>j(Pe,w))g[C]=Pe,g[Y]=w,C=Y;else break e}}return I}return null}function j(g,I){var w=g.sortIndex-I.sortIndex;return w!==0?w:g.id-I.id}var x=[],ne=[],hn=1,ge=null,ye=3,Ee=!1,Ie=!1,Xe=!1;function Vt(g){for(var I=k(ne);I!==null;){if(I.callback===null)M(ne);else if(I.startTime<=g)M(ne),I.sortIndex=I.expirationTime,A(x,I);else break;I=k(ne)}}function Zt(g){if(Xe=!1,Vt(g),!Ie)if(k(x)!==null)Ie=!0,e(Sn);else{var I=k(ne);I!==null&&n(Zt,I.startTime-g)}}function Sn(g,I){Ie=!1,Xe&&(Xe=!1,r()),Ee=!0;var w=ye;try{for(Vt(I),ge=k(x);ge!==null&&(!(ge.expirationTime>I)||g&&!t.unstable_shouldYield());){var C=ge.callback;if(typeof C=="function"){ge.callback=null,ye=ge.priorityLevel;var L=C(ge.expirationTime<=I);I=t.unstable_now(),typeof L=="function"?ge.callback=L:ge===k(x)&&M(x),Vt(I)}else M(x);ge=k(x)}if(ge!==null)var W=!0;else{var H=k(ne);H!==null&&n(Zt,H.startTime-I),W=!1}return W}finally{ge=null,ye=w,Ee=!1}}var jt=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(g){g.callback=null},t.unstable_continueExecution=function(){Ie||Ee||(Ie=!0,e(Sn))},t.unstable_getCurrentPriorityLevel=function(){return ye},t.unstable_getFirstCallbackNode=function(){return k(x)},t.unstable_next=function(g){switch(ye){case 1:case 2:case 3:var I=3;break;default:I=ye}var w=ye;ye=I;try{return g()}finally{ye=w}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=jt,t.unstable_runWithPriority=function(g,I){switch(g){case 1:case 2:case 3:case 4:case 5:break;default:g=3}var w=ye;ye=g;try{return I()}finally{ye=w}},t.unstable_scheduleCallback=function(g,I,w){var C=t.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?C+w:C):w=C,g){case 1:var L=-1;break;case 2:L=250;break;case 5:L=1073741823;break;case 4:L=1e4;break;default:L=5e3}return L=w+L,g={id:hn++,callback:I,priorityLevel:g,startTime:w,expirationTime:L,sortIndex:-1},w>C?(g.sortIndex=w,A(ne,g),k(x)===null&&g===k(ne)&&(Xe?r():Xe=!0,n(Zt,w-C))):(g.sortIndex=L,A(x,g),Ie||Ee||(Ie=!0,e(Sn))),g},t.unstable_wrapCallback=function(g){var I=ye;return function(){var w=ye;ye=I;try{return g.apply(this,arguments)}finally{ye=w}}}})(uv);av.exports=uv;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=V.exports,ve=Wy,je=av.exports;function O(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!tl)throw Error(O(227));var lv=new Set,Ro={};function ti(t,e){es(t,e),es(t+"Capture",e)}function es(t,e){for(Ro[t]=e,t=0;t<e.length;t++)lv.add(e[t])}var Wn=!(typeof window=="undefined"||typeof window.document=="undefined"||typeof window.document.createElement=="undefined"),db=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,cv=Object.prototype.hasOwnProperty,hv={},dv={};function fb(t){return cv.call(dv,t)?!0:cv.call(hv,t)?!1:db.test(t)?dv[t]=!0:(hv[t]=!0,!1)}function pb(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function mb(t,e,n,r){if(e===null||typeof e=="undefined"||pb(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Tt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ze={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Ze[t]=new Tt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Ze[e]=new Tt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Ze[t]=new Tt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Ze[t]=new Tt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Ze[t]=new Tt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Ze[t]=new Tt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Ze[t]=new Tt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Ze[t]=new Tt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Ze[t]=new Tt(t,5,!1,t.toLowerCase(),null,!1,!1)});var Sd=/[\-:]([a-z])/g;function Td(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Sd,Td);Ze[e]=new Tt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Sd,Td);Ze[e]=new Tt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Sd,Td);Ze[e]=new Tt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Ze[t]=new Tt(t,1,!1,t.toLowerCase(),null,!1,!1)});Ze.xlinkHref=new Tt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Ze[t]=new Tt(t,1,!1,t.toLowerCase(),null,!0,!0)});function kd(t,e,n,r){var i=Ze.hasOwnProperty(e)?Ze[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(mb(e,n,i,r)&&(n=null),r||i===null?fb(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var ni=tl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Oo=60103,ri=60106,fr=60107,bd=60108,Do=60114,Cd=60109,Pd=60110,nl=60112,xo=60113,rl=60120,il=60115,Nd=60116,Ad=60121,Rd=60128,fv=60129,Od=60130,Dd=60131;if(typeof Symbol=="function"&&Symbol.for){var Be=Symbol.for;Oo=Be("react.element"),ri=Be("react.portal"),fr=Be("react.fragment"),bd=Be("react.strict_mode"),Do=Be("react.profiler"),Cd=Be("react.provider"),Pd=Be("react.context"),nl=Be("react.forward_ref"),xo=Be("react.suspense"),rl=Be("react.suspense_list"),il=Be("react.memo"),Nd=Be("react.lazy"),Ad=Be("react.block"),Be("react.scope"),Rd=Be("react.opaque.id"),fv=Be("react.debug_trace_mode"),Od=Be("react.offscreen"),Dd=Be("react.legacy_hidden")}var pv=typeof Symbol=="function"&&Symbol.iterator;function Lo(t){return t===null||typeof t!="object"?null:(t=pv&&t[pv]||t["@@iterator"],typeof t=="function"?t:null)}var xd;function Mo(t){if(xd===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);xd=e&&e[1]||""}return`
`+xd+t}var Ld=!1;function sl(t,e){if(!t||Ld)return"";Ld=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=a);break}}}finally{Ld=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Mo(t):""}function gb(t){switch(t.tag){case 5:return Mo(t.type);case 16:return Mo("Lazy");case 13:return Mo("Suspense");case 19:return Mo("SuspenseList");case 0:case 2:case 15:return t=sl(t.type,!1),t;case 11:return t=sl(t.type.render,!1),t;case 22:return t=sl(t.type._render,!1),t;case 1:return t=sl(t.type,!0),t;default:return""}}function ts(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case fr:return"Fragment";case ri:return"Portal";case Do:return"Profiler";case bd:return"StrictMode";case xo:return"Suspense";case rl:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Pd:return(t.displayName||"Context")+".Consumer";case Cd:return(t._context.displayName||"Context")+".Provider";case nl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case il:return ts(t.type);case Ad:return ts(t._render);case Nd:e=t._payload,t=t._init;try{return ts(t(e))}catch{}}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function mv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function yb(t){var e=mv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n!="undefined"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ol(t){t._valueTracker||(t._valueTracker=yb(t))}function gv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=mv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function al(t){if(t=t||(typeof document!="undefined"?document:void 0),typeof t=="undefined")return null;try{return t.activeElement||t.body}catch{return t.body}}function Md(t,e){var n=e.checked;return ve({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:t._wrapperState.initialChecked})}function yv(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function vv(t,e){e=e.checked,e!=null&&kd(t,"checked",e,!1)}function $d(t,e){vv(t,e);var n=pr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Fd(t,e.type,n):e.hasOwnProperty("defaultValue")&&Fd(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function wv(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Fd(t,e,n){(e!=="number"||al(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function vb(t){var e="";return tl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function Ud(t,e){return t=ve({children:void 0},e),(e=vb(e.children))&&(t.children=e),t}function ns(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Vd(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(O(91));return ve({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function _v(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(O(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(O(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function Ev(t,e){var n=pr(e.value),r=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Iv(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var jd={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Sv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Bd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Sv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var ul,Tv=function(t){return typeof MSApp!="undefined"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==jd.svg||"innerHTML"in t)t.innerHTML=e;else{for(ul=ul||document.createElement("div"),ul.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=ul.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function $o(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Fo={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},wb=["Webkit","ms","Moz","O"];Object.keys(Fo).forEach(function(t){wb.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Fo[e]=Fo[t]})});function kv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Fo.hasOwnProperty(t)&&Fo[t]?(""+e).trim():e+"px"}function bv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=kv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _b=ve({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function qd(t,e){if(e){if(_b[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(O(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(O(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(O(61))}if(e.style!=null&&typeof e.style!="object")throw Error(O(62))}}function zd(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function Wd(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Hd=null,rs=null,is=null;function Cv(t){if(t=ra(t)){if(typeof Hd!="function")throw Error(O(280));var e=t.stateNode;e&&(e=bl(e),Hd(t.stateNode,t.type,e))}}function Pv(t){rs?is?is.push(t):is=[t]:rs=t}function Nv(){if(rs){var t=rs,e=is;if(is=rs=null,Cv(t),e)for(t=0;t<e.length;t++)Cv(e[t])}}function Kd(t,e){return t(e)}function Av(t,e,n,r,i){return t(e,n,r,i)}function Gd(){}var Rv=Kd,ii=!1,Qd=!1;function Yd(){(rs!==null||is!==null)&&(Gd(),Nv())}function Eb(t,e,n){if(Qd)return t(e,n);Qd=!0;try{return Rv(t,e,n)}finally{Qd=!1,Yd()}}function Uo(t,e){var n=t.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(O(231,e,typeof n));return n}var Jd=!1;if(Wn)try{var Vo={};Object.defineProperty(Vo,"passive",{get:function(){Jd=!0}}),window.addEventListener("test",Vo,Vo),window.removeEventListener("test",Vo,Vo)}catch{Jd=!1}function Ib(t,e,n,r,i,s,o,a,u){var l=Array.prototype.slice.call(arguments,3);try{e.apply(n,l)}catch(c){this.onError(c)}}var jo=!1,ll=null,cl=!1,Xd=null,Sb={onError:function(t){jo=!0,ll=t}};function Tb(t,e,n,r,i,s,o,a,u){jo=!1,ll=null,Ib.apply(Sb,arguments)}function kb(t,e,n,r,i,s,o,a,u){if(Tb.apply(this,arguments),jo){if(jo){var l=ll;jo=!1,ll=null}else throw Error(O(198));cl||(cl=!0,Xd=l)}}function si(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,(e.flags&1026)!=0&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ov(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Dv(t){if(si(t)!==t)throw Error(O(188))}function bb(t){var e=t.alternate;if(!e){if(e=si(t),e===null)throw Error(O(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Dv(i),t;if(s===r)return Dv(i),e;s=s.sibling}throw Error(O(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(O(189))}}if(n.alternate!==r)throw Error(O(190))}if(n.tag!==3)throw Error(O(188));return n.stateNode.current===n?t:e}function xv(t){if(t=bb(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Lv(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var Mv,Zd,$v,Fv,ef=!1,bn=[],mr=null,gr=null,yr=null,Bo=new Map,qo=new Map,zo=[],Uv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function tf(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Vv(t,e){switch(t){case"focusin":case"focusout":mr=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":yr=null;break;case"pointerover":case"pointerout":Bo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":qo.delete(e.pointerId)}}function Wo(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=tf(e,n,r,i,s),e!==null&&(e=ra(e),e!==null&&Zd(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Cb(t,e,n,r,i){switch(e){case"focusin":return mr=Wo(mr,t,e,n,r,i),!0;case"dragenter":return gr=Wo(gr,t,e,n,r,i),!0;case"mouseover":return yr=Wo(yr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Bo.set(s,Wo(Bo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,qo.set(s,Wo(qo.get(s)||null,t,e,n,r,i)),!0}return!1}function Pb(t){var e=oi(t.target);if(e!==null){var n=si(e);if(n!==null){if(e=n.tag,e===13){if(e=Ov(n),e!==null){t.blockedOn=e,Fv(t.lanePriority,function(){je.unstable_runWithPriority(t.priority,function(){$v(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function hl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=ra(n),e!==null&&Zd(e),t.blockedOn=n,!1;e.shift()}return!0}function jv(t,e,n){hl(t)&&n.delete(e)}function Nb(){for(ef=!1;0<bn.length;){var t=bn[0];if(t.blockedOn!==null){t=ra(t.blockedOn),t!==null&&Mv(t);break}for(var e=t.targetContainers;0<e.length;){var n=uf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&bn.shift()}mr!==null&&hl(mr)&&(mr=null),gr!==null&&hl(gr)&&(gr=null),yr!==null&&hl(yr)&&(yr=null),Bo.forEach(jv),qo.forEach(jv)}function Ho(t,e){t.blockedOn===e&&(t.blockedOn=null,ef||(ef=!0,je.unstable_scheduleCallback(je.unstable_NormalPriority,Nb)))}function Bv(t){function e(i){return Ho(i,t)}if(0<bn.length){Ho(bn[0],t);for(var n=1;n<bn.length;n++){var r=bn[n];r.blockedOn===t&&(r.blockedOn=null)}}for(mr!==null&&Ho(mr,t),gr!==null&&Ho(gr,t),yr!==null&&Ho(yr,t),Bo.forEach(e),qo.forEach(e),n=0;n<zo.length;n++)r=zo[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<zo.length&&(n=zo[0],n.blockedOn===null);)Pb(n),n.blockedOn===null&&zo.shift()}function dl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var ss={animationend:dl("Animation","AnimationEnd"),animationiteration:dl("Animation","AnimationIteration"),animationstart:dl("Animation","AnimationStart"),transitionend:dl("Transition","TransitionEnd")},nf={},qv={};Wn&&(qv=document.createElement("div").style,"AnimationEvent"in window||(delete ss.animationend.animation,delete ss.animationiteration.animation,delete ss.animationstart.animation),"TransitionEvent"in window||delete ss.transitionend.transition);function fl(t){if(nf[t])return nf[t];if(!ss[t])return t;var e=ss[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in qv)return nf[t]=e[n];return t}var zv=fl("animationend"),Wv=fl("animationiteration"),Hv=fl("animationstart"),Kv=fl("transitionend"),Gv=new Map,rf=new Map,Ab=["abort","abort",zv,"animationEnd",Wv,"animationIteration",Hv,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",Kv,"transitionEnd","waiting","waiting"];function sf(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),rf.set(r,e),Gv.set(r,i),ti(i,[r])}}var Rb=je.unstable_now;Rb();var le=8;function os(t){if((1&t)!=0)return le=15,1;if((2&t)!=0)return le=14,2;if((4&t)!=0)return le=13,4;var e=24&t;return e!==0?(le=12,e):(t&32)!=0?(le=11,32):(e=192&t,e!==0?(le=10,e):(t&256)!=0?(le=9,256):(e=3584&t,e!==0?(le=8,e):(t&4096)!=0?(le=7,4096):(e=4186112&t,e!==0?(le=6,e):(e=62914560&t,e!==0?(le=5,e):t&67108864?(le=4,67108864):(t&134217728)!=0?(le=3,134217728):(e=805306368&t,e!==0?(le=2,e):(1073741824&t)!=0?(le=1,1073741824):(le=8,t))))))}function Ob(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Db(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(O(358,t))}}function Ko(t,e){var n=t.pendingLanes;if(n===0)return le=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,a=t.pingedLanes;if(s!==0)r=s,i=le=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=os(u),i=le):(a&=s,a!==0&&(r=os(a),i=le))}else s=n&~o,s!==0?(r=os(s),i=le):a!==0&&(r=os(a),i=le);if(r===0)return 0;if(r=31-vr(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&(e&o)==0){if(os(e),i<=le)return e;le=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-vr(e),i=1<<n,r|=t[n],e&=~i;return r}function Qv(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function pl(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=as(24&~e),t===0?pl(10,e):t;case 10:return t=as(192&~e),t===0?pl(8,e):t;case 8:return t=as(3584&~e),t===0&&(t=as(4186112&~e),t===0&&(t=512)),t;case 2:return e=as(805306368&~e),e===0&&(e=268435456),e}throw Error(O(358,t))}function as(t){return t&-t}function of(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ml(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-vr(e),t[e]=n}var vr=Math.clz32?Math.clz32:Mb,xb=Math.log,Lb=Math.LN2;function Mb(t){return t===0?32:31-(xb(t)/Lb|0)|0}var $b=je.unstable_UserBlockingPriority,Fb=je.unstable_runWithPriority,gl=!0;function Ub(t,e,n,r){ii||Gd();var i=af,s=ii;ii=!0;try{Av(i,t,e,n,r)}finally{(ii=s)||Yd()}}function Vb(t,e,n,r){Fb($b,af.bind(null,t,e,n,r))}function af(t,e,n,r){if(gl){var i;if((i=(e&4)==0)&&0<bn.length&&-1<Uv.indexOf(t))t=tf(null,t,e,n,r),bn.push(t);else{var s=uf(t,e,n,r);if(s===null)i&&Vv(t,r);else{if(i){if(-1<Uv.indexOf(t)){t=tf(s,t,e,n,r),bn.push(t);return}if(Cb(s,t,e,n,r))return;Vv(t,r)}kw(t,e,r,null,n)}}}}function uf(t,e,n,r){var i=Wd(r);if(i=oi(i),i!==null){var s=si(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Ov(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return kw(t,e,r,i,n),null}var wr=null,lf=null,yl=null;function Yv(){if(yl)return yl;var t,e=lf,n=e.length,r,i="value"in wr?wr.value:wr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return yl=i.slice(t,1<r?1-r:void 0)}function vl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function wl(){return!0}function Jv(){return!1}function qt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?wl:Jv,this.isPropagationStopped=Jv,this}return ve(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=wl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=wl)},persist:function(){},isPersistent:wl}),e}var us={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cf=qt(us),Go=ve({},us,{view:0,detail:0}),jb=qt(Go),hf,df,Qo,_l=ve({},Go,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:pf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Qo&&(Qo&&t.type==="mousemove"?(hf=t.screenX-Qo.screenX,df=t.screenY-Qo.screenY):df=hf=0,Qo=t),hf)},movementY:function(t){return"movementY"in t?t.movementY:df}}),Xv=qt(_l),Bb=ve({},_l,{dataTransfer:0}),qb=qt(Bb),zb=ve({},Go,{relatedTarget:0}),ff=qt(zb),Wb=ve({},us,{animationName:0,elapsedTime:0,pseudoElement:0}),Hb=qt(Wb),Kb=ve({},us,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Gb=qt(Kb),Qb=ve({},us,{data:0}),Zv=qt(Qb),Yb={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Jb={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xb={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Zb(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Xb[t])?!!e[t]:!1}function pf(){return Zb}var eC=ve({},Go,{key:function(t){if(t.key){var e=Yb[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=vl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?Jb[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:pf,charCode:function(t){return t.type==="keypress"?vl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?vl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),tC=qt(eC),nC=ve({},_l,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ew=qt(nC),rC=ve({},Go,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:pf}),iC=qt(rC),sC=ve({},us,{propertyName:0,elapsedTime:0,pseudoElement:0}),oC=qt(sC),aC=ve({},_l,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),uC=qt(aC),lC=[9,13,27,32],mf=Wn&&"CompositionEvent"in window,Yo=null;Wn&&"documentMode"in document&&(Yo=document.documentMode);var cC=Wn&&"TextEvent"in window&&!Yo,tw=Wn&&(!mf||Yo&&8<Yo&&11>=Yo),nw=String.fromCharCode(32),rw=!1;function iw(t,e){switch(t){case"keyup":return lC.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sw(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ls=!1;function hC(t,e){switch(t){case"compositionend":return sw(e);case"keypress":return e.which!==32?null:(rw=!0,nw);case"textInput":return t=e.data,t===nw&&rw?null:t;default:return null}}function dC(t,e){if(ls)return t==="compositionend"||!mf&&iw(t,e)?(t=Yv(),yl=lf=wr=null,ls=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return tw&&e.locale!=="ko"?null:e.data;default:return null}}var fC={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ow(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!fC[t.type]:e==="textarea"}function aw(t,e,n,r){Pv(r),e=Il(e,"onChange"),0<e.length&&(n=new cf("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Jo=null,Xo=null;function pC(t){_w(t,0)}function El(t){var e=ps(t);if(gv(e))return t}function mC(t,e){if(t==="change")return e}var uw=!1;if(Wn){var gf;if(Wn){var yf="oninput"in document;if(!yf){var lw=document.createElement("div");lw.setAttribute("oninput","return;"),yf=typeof lw.oninput=="function"}gf=yf}else gf=!1;uw=gf&&(!document.documentMode||9<document.documentMode)}function cw(){Jo&&(Jo.detachEvent("onpropertychange",hw),Xo=Jo=null)}function hw(t){if(t.propertyName==="value"&&El(Xo)){var e=[];if(aw(e,Xo,t,Wd(t)),t=pC,ii)t(e);else{ii=!0;try{Kd(t,e)}finally{ii=!1,Yd()}}}}function gC(t,e,n){t==="focusin"?(cw(),Jo=e,Xo=n,Jo.attachEvent("onpropertychange",hw)):t==="focusout"&&cw()}function yC(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return El(Xo)}function vC(t,e){if(t==="click")return El(e)}function wC(t,e){if(t==="input"||t==="change")return El(e)}function _C(t,e){return t===e&&(t!==0||1/t==1/e)||t!==t&&e!==e}var tn=typeof Object.is=="function"?Object.is:_C,EC=Object.prototype.hasOwnProperty;function Zo(t,e){if(tn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!EC.call(e,n[r])||!tn(t[n[r]],e[n[r]]))return!1;return!0}function dw(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function fw(t,e){var n=dw(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=dw(n)}}function pw(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?pw(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function mw(){for(var t=window,e=al();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=al(t.document)}return e}function vf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var IC=Wn&&"documentMode"in document&&11>=document.documentMode,cs=null,wf=null,ea=null,_f=!1;function gw(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;_f||cs==null||cs!==al(r)||(r=cs,"selectionStart"in r&&vf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ea&&Zo(ea,r)||(ea=r,r=Il(wf,"onSelect"),0<r.length&&(e=new cf("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=cs)))}sf("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);sf("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);sf(Ab,2);for(var yw="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Ef=0;Ef<yw.length;Ef++)rf.set(yw[Ef],0);es("onMouseEnter",["mouseout","mouseover"]);es("onMouseLeave",["mouseout","mouseover"]);es("onPointerEnter",["pointerout","pointerover"]);es("onPointerLeave",["pointerout","pointerover"]);ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),vw=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function ww(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,kb(r,e,void 0,t),t.currentTarget=null}function _w(t,e){e=(e&4)!=0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],u=a.instance,l=a.currentTarget;if(a=a.listener,u!==s&&i.isPropagationStopped())break e;ww(i,a,l),s=u}else for(o=0;o<r.length;o++){if(a=r[o],u=a.instance,l=a.currentTarget,a=a.listener,u!==s&&i.isPropagationStopped())break e;ww(i,a,l),s=u}}}if(cl)throw t=Xd,cl=!1,Xd=null,t}function he(t,e){var n=Rw(e),r=t+"__bubble";n.has(r)||(Tw(e,t,2,!1),n.add(r))}var Ew="_reactListening"+Math.random().toString(36).slice(2);function Iw(t){t[Ew]||(t[Ew]=!0,lv.forEach(function(e){vw.has(e)||Sw(e,!1,t,null),Sw(e,!0,t,null)}))}function Sw(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&vw.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=Rw(s),a=t+"__"+(e?"capture":"bubble");o.has(a)||(e&&(i|=4),Tw(s,t,i,e),o.add(a))}function Tw(t,e,n,r){var i=rf.get(e);switch(i===void 0?2:i){case 0:i=Ub;break;case 1:i=Vb;break;default:i=af}n=i.bind(null,e,n,t),i=void 0,!Jd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function kw(t,e,n,r,i){var s=r;if((e&1)==0&&(e&2)==0&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;a!==null;){if(o=oi(a),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}a=a.parentNode}}r=r.return}Eb(function(){var l=s,c=Wd(n),h=[];e:{var d=Gv.get(t);if(d!==void 0){var m=cf,_=t;switch(t){case"keypress":if(vl(n)===0)break e;case"keydown":case"keyup":m=tC;break;case"focusin":_="focus",m=ff;break;case"focusout":_="blur",m=ff;break;case"beforeblur":case"afterblur":m=ff;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xv;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=qb;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=iC;break;case zv:case Wv:case Hv:m=Hb;break;case Kv:m=oC;break;case"scroll":m=jb;break;case"wheel":m=uC;break;case"copy":case"cut":case"paste":m=Gb;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=ew}var E=(e&4)!=0,p=!E&&t==="scroll",f=E?d!==null?d+"Capture":null:d;E=[];for(var y=l,S;y!==null;){S=y;var v=S.stateNode;if(S.tag===5&&v!==null&&(S=v,f!==null&&(v=Uo(y,f),v!=null&&E.push(na(y,v,S)))),p)break;y=y.return}0<E.length&&(d=new m(d,_,null,n,c),h.push({event:d,listeners:E}))}}if((e&7)==0){e:{if(d=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",d&&(e&16)==0&&(_=n.relatedTarget||n.fromElement)&&(oi(_)||_[fs]))break e;if((m||d)&&(d=c.window===c?c:(d=c.ownerDocument)?d.defaultView||d.parentWindow:window,m?(_=n.relatedTarget||n.toElement,m=l,_=_?oi(_):null,_!==null&&(p=si(_),_!==p||_.tag!==5&&_.tag!==6)&&(_=null)):(m=null,_=l),m!==_)){if(E=Xv,v="onMouseLeave",f="onMouseEnter",y="mouse",(t==="pointerout"||t==="pointerover")&&(E=ew,v="onPointerLeave",f="onPointerEnter",y="pointer"),p=m==null?d:ps(m),S=_==null?d:ps(_),d=new E(v,y+"leave",m,n,c),d.target=p,d.relatedTarget=S,v=null,oi(c)===l&&(E=new E(f,y+"enter",_,n,c),E.target=S,E.relatedTarget=p,v=E),p=v,m&&_)t:{for(E=m,f=_,y=0,S=E;S;S=hs(S))y++;for(S=0,v=f;v;v=hs(v))S++;for(;0<y-S;)E=hs(E),y--;for(;0<S-y;)f=hs(f),S--;for(;y--;){if(E===f||f!==null&&E===f.alternate)break t;E=hs(E),f=hs(f)}E=null}else E=null;m!==null&&bw(h,d,m,E,!1),_!==null&&p!==null&&bw(h,p,_,E,!0)}}e:{if(d=l?ps(l):window,m=d.nodeName&&d.nodeName.toLowerCase(),m==="select"||m==="input"&&d.type==="file")var A=mC;else if(ow(d))if(uw)A=wC;else{A=yC;var k=gC}else(m=d.nodeName)&&m.toLowerCase()==="input"&&(d.type==="checkbox"||d.type==="radio")&&(A=vC);if(A&&(A=A(t,l))){aw(h,A,n,c);break e}k&&k(t,d,l),t==="focusout"&&(k=d._wrapperState)&&k.controlled&&d.type==="number"&&Fd(d,"number",d.value)}switch(k=l?ps(l):window,t){case"focusin":(ow(k)||k.contentEditable==="true")&&(cs=k,wf=l,ea=null);break;case"focusout":ea=wf=cs=null;break;case"mousedown":_f=!0;break;case"contextmenu":case"mouseup":case"dragend":_f=!1,gw(h,n,c);break;case"selectionchange":if(IC)break;case"keydown":case"keyup":gw(h,n,c)}var M;if(mf)e:{switch(t){case"compositionstart":var j="onCompositionStart";break e;case"compositionend":j="onCompositionEnd";break e;case"compositionupdate":j="onCompositionUpdate";break e}j=void 0}else ls?iw(t,n)&&(j="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(j="onCompositionStart");j&&(tw&&n.locale!=="ko"&&(ls||j!=="onCompositionStart"?j==="onCompositionEnd"&&ls&&(M=Yv()):(wr=c,lf="value"in wr?wr.value:wr.textContent,ls=!0)),k=Il(l,j),0<k.length&&(j=new Zv(j,t,null,n,c),h.push({event:j,listeners:k}),M?j.data=M:(M=sw(n),M!==null&&(j.data=M)))),(M=cC?hC(t,n):dC(t,n))&&(l=Il(l,"onBeforeInput"),0<l.length&&(c=new Zv("onBeforeInput","beforeinput",null,n,c),h.push({event:c,listeners:l}),c.data=M))}_w(h,e)})}function na(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Il(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Uo(t,n),s!=null&&r.unshift(na(t,s,i)),s=Uo(t,e),s!=null&&r.push(na(t,s,i))),t=t.return}return r}function hs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function bw(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,u=a.alternate,l=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&l!==null&&(a=l,i?(u=Uo(n,s),u!=null&&o.unshift(na(n,u,a))):i||(u=Uo(n,s),u!=null&&o.push(na(n,u,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Sl(){}var If=null,Sf=null;function Cw(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Tf(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Pw=typeof setTimeout=="function"?setTimeout:void 0,SC=typeof clearTimeout=="function"?clearTimeout:void 0;function kf(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function ds(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Nw(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var bf=0;function TC(t){return{$$typeof:Rd,toString:t,valueOf:t}}var Tl=Math.random().toString(36).slice(2),_r="__reactFiber$"+Tl,kl="__reactProps$"+Tl,fs="__reactContainer$"+Tl,Aw="__reactEvents$"+Tl;function oi(t){var e=t[_r];if(e)return e;for(var n=t.parentNode;n;){if(e=n[fs]||n[_r]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Nw(t);t!==null;){if(n=t[_r])return n;t=Nw(t)}return e}t=n,n=t.parentNode}return null}function ra(t){return t=t[_r]||t[fs],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(O(33))}function bl(t){return t[kl]||null}function Rw(t){var e=t[Aw];return e===void 0&&(e=t[Aw]=new Set),e}var Cf=[],ms=-1;function Er(t){return{current:t}}function de(t){0>ms||(t.current=Cf[ms],Cf[ms]=null,ms--)}function Se(t,e){ms++,Cf[ms]=t.current,t.current=e}var Ir={},pt=Er(Ir),Ot=Er(!1),ai=Ir;function gs(t,e){var n=t.type.contextTypes;if(!n)return Ir;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Dt(t){return t=t.childContextTypes,t!=null}function Cl(){de(Ot),de(pt)}function Ow(t,e,n){if(pt.current!==Ir)throw Error(O(168));Se(pt,e),Se(Ot,n)}function Dw(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(O(108,ts(e)||"Unknown",i));return ve({},n,r)}function Pl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Ir,ai=pt.current,Se(pt,t),Se(Ot,Ot.current),!0}function xw(t,e,n){var r=t.stateNode;if(!r)throw Error(O(169));n?(t=Dw(t,e,ai),r.__reactInternalMemoizedMergedChildContext=t,de(Ot),de(pt),Se(pt,t)):de(Ot),Se(Ot,n)}var Pf=null,ui=null,kC=je.unstable_runWithPriority,Nf=je.unstable_scheduleCallback,Af=je.unstable_cancelCallback,bC=je.unstable_shouldYield,Lw=je.unstable_requestPaint,Rf=je.unstable_now,CC=je.unstable_getCurrentPriorityLevel,Nl=je.unstable_ImmediatePriority,Mw=je.unstable_UserBlockingPriority,$w=je.unstable_NormalPriority,Fw=je.unstable_LowPriority,Uw=je.unstable_IdlePriority,Of={},PC=Lw!==void 0?Lw:function(){},Hn=null,Al=null,Df=!1,Vw=Rf(),mt=1e4>Vw?Rf:function(){return Rf()-Vw};function ys(){switch(CC()){case Nl:return 99;case Mw:return 98;case $w:return 97;case Fw:return 96;case Uw:return 95;default:throw Error(O(332))}}function jw(t){switch(t){case 99:return Nl;case 98:return Mw;case 97:return $w;case 96:return Fw;case 95:return Uw;default:throw Error(O(332))}}function li(t,e){return t=jw(t),kC(t,e)}function ia(t,e,n){return t=jw(t),Nf(t,e,n)}function Cn(){if(Al!==null){var t=Al;Al=null,Af(t)}Bw()}function Bw(){if(!Df&&Hn!==null){Df=!0;var t=0;try{var e=Hn;li(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Hn=null}catch(n){throw Hn!==null&&(Hn=Hn.slice(t+1)),Nf(Nl,Cn),n}finally{Df=!1}}}var NC=ni.ReactCurrentBatchConfig;function mn(t,e){if(t&&t.defaultProps){e=ve({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Rl=Er(null),Ol=null,vs=null,Dl=null;function xf(){Dl=vs=Ol=null}function Lf(t){var e=Rl.current;de(Rl),t.type._context._currentValue=e}function qw(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function ws(t,e){Ol=t,Dl=vs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&((t.lanes&e)!=0&&(gn=!0),t.firstContext=null)}function nn(t,e){if(Dl!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(Dl=t,e=1073741823),e={context:t,observedBits:e,next:null},vs===null){if(Ol===null)throw Error(O(308));vs=e,Ol.dependencies={lanes:0,firstContext:e,responders:null}}else vs=vs.next=e;return t._currentValue}var Sr=!1;function Mf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function zw(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Tr(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kr(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Ww(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function sa(t,e,n,r){var i=t.updateQueue;Sr=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,l=u.next;u.next=null,o===null?s=l:o.next=l,o=u;var c=t.alternate;if(c!==null){c=c.updateQueue;var h=c.lastBaseUpdate;h!==o&&(h===null?c.firstBaseUpdate=l:h.next=l,c.lastBaseUpdate=u)}}if(s!==null){h=i.baseState,o=0,c=l=u=null;do{a=s.lane;var d=s.eventTime;if((r&a)===a){c!==null&&(c=c.next={eventTime:d,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var m=t,_=s;switch(a=e,d=n,_.tag){case 1:if(m=_.payload,typeof m=="function"){h=m.call(d,h,a);break e}h=m;break e;case 3:m.flags=m.flags&-4097|64;case 0:if(m=_.payload,a=typeof m=="function"?m.call(d,h,a):m,a==null)break e;h=ve({},h,a);break e;case 2:Sr=!0}}s.callback!==null&&(t.flags|=32,a=i.effects,a===null?i.effects=[s]:a.push(s))}else d={eventTime:d,lane:a,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(l=c=d,u=h):c=c.next=d,o|=a;if(s=s.next,s===null){if(a=i.shared.pending,a===null)break;s=a.next,a.next=null,i.lastBaseUpdate=a,i.shared.pending=null}}while(1);c===null&&(u=h),i.baseState=u,i.firstBaseUpdate=l,i.lastBaseUpdate=c,ya|=o,t.lanes=o,t.memoizedState=h}}function Hw(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(O(191,i));i.call(r)}}}var Kw=new tl.Component().refs;function xl(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ve({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ll={isMounted:function(t){return(t=t._reactInternals)?si(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=zt(),i=Pr(t),s=Tr(r,i);s.payload=e,n!=null&&(s.callback=n),kr(t,s),Nr(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=zt(),i=Pr(t),s=Tr(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),kr(t,s),Nr(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=zt(),r=Pr(t),i=Tr(n,r);i.tag=2,e!=null&&(i.callback=e),kr(t,i),Nr(t,r,n)}};function Gw(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Zo(n,r)||!Zo(i,s):!0}function Qw(t,e,n){var r=!1,i=Ir,s=e.contextType;return typeof s=="object"&&s!==null?s=nn(s):(i=Dt(e)?ai:pt.current,r=e.contextTypes,s=(r=r!=null)?gs(t,i):Ir),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ll,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function Yw(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ll.enqueueReplaceState(e,e.state,null)}function $f(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Kw,Mf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nn(s):(s=Dt(e)?ai:pt.current,i.context=gs(t,s)),sa(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(xl(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ll.enqueueReplaceState(i,i.state,null),sa(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var Ml=Array.isArray;function oa(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(O(309));var r=n.stateNode}if(!r)throw Error(O(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Kw&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(O(284));if(!n._owner)throw Error(O(290,t))}return t}function $l(t,e){if(t.type!=="textarea")throw Error(O(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Jw(t){function e(p,f){if(t){var y=p.lastEffect;y!==null?(y.nextEffect=f,p.lastEffect=f):p.firstEffect=p.lastEffect=f,f.nextEffect=null,f.flags=8}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=Or(p,f),p.index=0,p.sibling=null,p}function s(p,f,y){return p.index=y,t?(y=p.alternate,y!==null?(y=y.index,y<f?(p.flags=2,f):y):(p.flags=2,f)):f}function o(p){return t&&p.alternate===null&&(p.flags=2),p}function a(p,f,y,S){return f===null||f.tag!==6?(f=wp(y,p.mode,S),f.return=p,f):(f=i(f,y),f.return=p,f)}function u(p,f,y,S){return f!==null&&f.elementType===y.type?(S=i(f,y.props),S.ref=oa(p,f,y),S.return=p,S):(S=tc(y.type,y.key,y.props,null,p.mode,S),S.ref=oa(p,f,y),S.return=p,S)}function l(p,f,y,S){return f===null||f.tag!==4||f.stateNode.containerInfo!==y.containerInfo||f.stateNode.implementation!==y.implementation?(f=_p(y,p.mode,S),f.return=p,f):(f=i(f,y.children||[]),f.return=p,f)}function c(p,f,y,S,v){return f===null||f.tag!==7?(f=Cs(y,p.mode,S,v),f.return=p,f):(f=i(f,y),f.return=p,f)}function h(p,f,y){if(typeof f=="string"||typeof f=="number")return f=wp(""+f,p.mode,y),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Oo:return y=tc(f.type,f.key,f.props,null,p.mode,y),y.ref=oa(p,null,f),y.return=p,y;case ri:return f=_p(f,p.mode,y),f.return=p,f}if(Ml(f)||Lo(f))return f=Cs(f,p.mode,y,null),f.return=p,f;$l(p,f)}return null}function d(p,f,y,S){var v=f!==null?f.key:null;if(typeof y=="string"||typeof y=="number")return v!==null?null:a(p,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Oo:return y.key===v?y.type===fr?c(p,f,y.props.children,S,v):u(p,f,y,S):null;case ri:return y.key===v?l(p,f,y,S):null}if(Ml(y)||Lo(y))return v!==null?null:c(p,f,y,S,null);$l(p,y)}return null}function m(p,f,y,S,v){if(typeof S=="string"||typeof S=="number")return p=p.get(y)||null,a(f,p,""+S,v);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Oo:return p=p.get(S.key===null?y:S.key)||null,S.type===fr?c(f,p,S.props.children,v,S.key):u(f,p,S,v);case ri:return p=p.get(S.key===null?y:S.key)||null,l(f,p,S,v)}if(Ml(S)||Lo(S))return p=p.get(y)||null,c(f,p,S,v,null);$l(f,S)}return null}function _(p,f,y,S){for(var v=null,A=null,k=f,M=f=0,j=null;k!==null&&M<y.length;M++){k.index>M?(j=k,k=null):j=k.sibling;var x=d(p,k,y[M],S);if(x===null){k===null&&(k=j);break}t&&k&&x.alternate===null&&e(p,k),f=s(x,f,M),A===null?v=x:A.sibling=x,A=x,k=j}if(M===y.length)return n(p,k),v;if(k===null){for(;M<y.length;M++)k=h(p,y[M],S),k!==null&&(f=s(k,f,M),A===null?v=k:A.sibling=k,A=k);return v}for(k=r(p,k);M<y.length;M++)j=m(k,p,M,y[M],S),j!==null&&(t&&j.alternate!==null&&k.delete(j.key===null?M:j.key),f=s(j,f,M),A===null?v=j:A.sibling=j,A=j);return t&&k.forEach(function(ne){return e(p,ne)}),v}function E(p,f,y,S){var v=Lo(y);if(typeof v!="function")throw Error(O(150));if(y=v.call(y),y==null)throw Error(O(151));for(var A=v=null,k=f,M=f=0,j=null,x=y.next();k!==null&&!x.done;M++,x=y.next()){k.index>M?(j=k,k=null):j=k.sibling;var ne=d(p,k,x.value,S);if(ne===null){k===null&&(k=j);break}t&&k&&ne.alternate===null&&e(p,k),f=s(ne,f,M),A===null?v=ne:A.sibling=ne,A=ne,k=j}if(x.done)return n(p,k),v;if(k===null){for(;!x.done;M++,x=y.next())x=h(p,x.value,S),x!==null&&(f=s(x,f,M),A===null?v=x:A.sibling=x,A=x);return v}for(k=r(p,k);!x.done;M++,x=y.next())x=m(k,p,M,x.value,S),x!==null&&(t&&x.alternate!==null&&k.delete(x.key===null?M:x.key),f=s(x,f,M),A===null?v=x:A.sibling=x,A=x);return t&&k.forEach(function(hn){return e(p,hn)}),v}return function(p,f,y,S){var v=typeof y=="object"&&y!==null&&y.type===fr&&y.key===null;v&&(y=y.props.children);var A=typeof y=="object"&&y!==null;if(A)switch(y.$$typeof){case Oo:e:{for(A=y.key,v=f;v!==null;){if(v.key===A){switch(v.tag){case 7:if(y.type===fr){n(p,v.sibling),f=i(v,y.props.children),f.return=p,p=f;break e}break;default:if(v.elementType===y.type){n(p,v.sibling),f=i(v,y.props),f.ref=oa(p,v,y),f.return=p,p=f;break e}}n(p,v);break}else e(p,v);v=v.sibling}y.type===fr?(f=Cs(y.props.children,p.mode,S,y.key),f.return=p,p=f):(S=tc(y.type,y.key,y.props,null,p.mode,S),S.ref=oa(p,f,y),S.return=p,p=S)}return o(p);case ri:e:{for(v=y.key;f!==null;){if(f.key===v)if(f.tag===4&&f.stateNode.containerInfo===y.containerInfo&&f.stateNode.implementation===y.implementation){n(p,f.sibling),f=i(f,y.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=_p(y,p.mode,S),f.return=p,p=f}return o(p)}if(typeof y=="string"||typeof y=="number")return y=""+y,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,y),f.return=p,p=f):(n(p,f),f=wp(y,p.mode,S),f.return=p,p=f),o(p);if(Ml(y))return _(p,f,y,S);if(Lo(y))return E(p,f,y,S);if(A&&$l(p,y),typeof y=="undefined"&&!v)switch(p.tag){case 1:case 22:case 0:case 11:case 15:throw Error(O(152,ts(p.type)||"Component"))}return n(p,f)}}var Fl=Jw(!0),Xw=Jw(!1),aa={},Pn=Er(aa),ua=Er(aa),la=Er(aa);function ci(t){if(t===aa)throw Error(O(174));return t}function Ff(t,e){switch(Se(la,e),Se(ua,t),Se(Pn,aa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Bd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Bd(e,t)}de(Pn),Se(Pn,e)}function _s(){de(Pn),de(ua),de(la)}function Zw(t){ci(la.current);var e=ci(Pn.current),n=Bd(e,t.type);e!==n&&(Se(ua,t),Se(Pn,n))}function Uf(t){ua.current===t&&(de(Pn),de(ua))}var Te=Er(0);function Ul(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if((e.flags&64)!=0)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Kn=null,br=null,Nn=!1;function e0(t,e){var n=on(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function t0(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Vf(t){if(Nn){var e=br;if(e){var n=e;if(!t0(t,e)){if(e=ds(n.nextSibling),!e||!t0(t,e)){t.flags=t.flags&-1025|2,Nn=!1,Kn=t;return}e0(Kn,n)}Kn=t,br=ds(e.firstChild)}else t.flags=t.flags&-1025|2,Nn=!1,Kn=t}}function n0(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Kn=t}function Vl(t){if(t!==Kn)return!1;if(!Nn)return n0(t),Nn=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Tf(e,t.memoizedProps))for(e=br;e;)e0(t,e),e=ds(e.nextSibling);if(n0(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(O(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){br=ds(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}br=null}}else br=Kn?ds(t.stateNode.nextSibling):null;return!0}function jf(){br=Kn=null,Nn=!1}var Es=[];function Bf(){for(var t=0;t<Es.length;t++)Es[t]._workInProgressVersionPrimary=null;Es.length=0}var ca=ni.ReactCurrentDispatcher,rn=ni.ReactCurrentBatchConfig,ha=0,Ne=null,gt=null,et=null,jl=!1,da=!1;function xt(){throw Error(O(321))}function qf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!tn(t[n],e[n]))return!1;return!0}function zf(t,e,n,r,i,s){if(ha=s,Ne=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,ca.current=t===null||t.memoizedState===null?RC:OC,t=n(r,i),da){s=0;do{if(da=!1,!(25>s))throw Error(O(301));s+=1,et=gt=null,e.updateQueue=null,ca.current=DC,t=n(r,i)}while(da)}if(ca.current=Wl,e=gt!==null&&gt.next!==null,ha=0,et=gt=Ne=null,jl=!1,e)throw Error(O(300));return t}function hi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return et===null?Ne.memoizedState=et=t:et=et.next=t,et}function di(){if(gt===null){var t=Ne.alternate;t=t!==null?t.memoizedState:null}else t=gt.next;var e=et===null?Ne.memoizedState:et.next;if(e!==null)et=e,gt=t;else{if(t===null)throw Error(O(310));gt=t,t={memoizedState:gt.memoizedState,baseState:gt.baseState,baseQueue:gt.baseQueue,queue:gt.queue,next:null},et===null?Ne.memoizedState=et=t:et=et.next=t}return et}function An(t,e){return typeof e=="function"?e(t):e}function fa(t){var e=di(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=gt,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var a=o=s=null,u=i;do{var l=u.lane;if((ha&l)===l)a!==null&&(a=a.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var c={lane:l,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};a===null?(o=a=c,s=r):a=a.next=c,Ne.lanes|=l,ya|=l}u=u.next}while(u!==null&&u!==i);a===null?s=r:a.next=o,tn(r,e.memoizedState)||(gn=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=a,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function pa(t){var e=di(),n=e.queue;if(n===null)throw Error(O(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);tn(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function r0(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(ha&t)===t)&&(e._workInProgressVersionPrimary=r,Es.push(e))),t)return n(e._source);throw Es.push(e),Error(O(350))}function i0(t,e,n,r){var i=kt;if(i===null)throw Error(O(349));var s=e._getVersion,o=s(e._source),a=ca.current,u=a.useState(function(){return r0(i,e,n)}),l=u[1],c=u[0];u=et;var h=t.memoizedState,d=h.refs,m=d.getSnapshot,_=h.source;h=h.subscribe;var E=Ne;return t.memoizedState={refs:d,source:e,subscribe:r},a.useEffect(function(){d.getSnapshot=n,d.setSnapshot=l;var p=s(e._source);if(!tn(o,p)){p=n(e._source),tn(c,p)||(l(p),p=Pr(E),i.mutableReadLanes|=p&i.pendingLanes),p=i.mutableReadLanes,i.entangledLanes|=p;for(var f=i.entanglements,y=p;0<y;){var S=31-vr(y),v=1<<S;f[S]|=p,y&=~v}}},[n,e,r]),a.useEffect(function(){return r(e._source,function(){var p=d.getSnapshot,f=d.setSnapshot;try{f(p(e._source));var y=Pr(E);i.mutableReadLanes|=y&i.pendingLanes}catch(S){f(function(){throw S})}})},[e,r]),tn(m,n)&&tn(_,e)&&tn(h,r)||(t={pending:null,dispatch:null,lastRenderedReducer:An,lastRenderedState:c},t.dispatch=l=Gf.bind(null,Ne,t),u.queue=t,u.baseQueue=null,c=r0(i,e,n),u.memoizedState=u.baseState=c),c}function s0(t,e,n){var r=di();return i0(r,t,e,n)}function ma(t){var e=hi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:An,lastRenderedState:t},t=t.dispatch=Gf.bind(null,Ne,t),[e.memoizedState,t]}function Bl(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ne.updateQueue,e===null?(e={lastEffect:null},Ne.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function o0(t){var e=hi();return t={current:t},e.memoizedState=t}function ql(){return di().memoizedState}function Wf(t,e,n,r){var i=hi();Ne.flags|=t,i.memoizedState=Bl(1|e,n,void 0,r===void 0?null:r)}function Hf(t,e,n,r){var i=di();r=r===void 0?null:r;var s=void 0;if(gt!==null){var o=gt.memoizedState;if(s=o.destroy,r!==null&&qf(r,o.deps)){Bl(e,n,s,r);return}}Ne.flags|=t,i.memoizedState=Bl(1|e,n,s,r)}function a0(t,e){return Wf(516,4,t,e)}function zl(t,e){return Hf(516,4,t,e)}function u0(t,e){return Hf(4,2,t,e)}function l0(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function c0(t,e,n){return n=n!=null?n.concat([t]):null,Hf(4,2,l0.bind(null,e,t),n)}function Kf(){}function h0(t,e){var n=di();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function d0(t,e){var n=di();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&qf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function AC(t,e){var n=ys();li(98>n?98:n,function(){t(!0)}),li(97<n?97:n,function(){var r=rn.transition;rn.transition=1;try{t(!1),e()}finally{rn.transition=r}})}function Gf(t,e,n){var r=zt(),i=Pr(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ne||o!==null&&o===Ne)da=jl=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var a=e.lastRenderedState,u=o(a,n);if(s.eagerReducer=o,s.eagerState=u,tn(u,a))return}catch{}finally{}Nr(t,i,r)}}var Wl={readContext:nn,useCallback:xt,useContext:xt,useEffect:xt,useImperativeHandle:xt,useLayoutEffect:xt,useMemo:xt,useReducer:xt,useRef:xt,useState:xt,useDebugValue:xt,useDeferredValue:xt,useTransition:xt,useMutableSource:xt,useOpaqueIdentifier:xt,unstable_isNewReconciler:!1},RC={readContext:nn,useCallback:function(t,e){return hi().memoizedState=[t,e===void 0?null:e],t},useContext:nn,useEffect:a0,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Wf(4,2,l0.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Wf(4,2,t,e)},useMemo:function(t,e){var n=hi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=hi();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=Gf.bind(null,Ne,t),[r.memoizedState,t]},useRef:o0,useState:ma,useDebugValue:Kf,useDeferredValue:function(t){var e=ma(t),n=e[0],r=e[1];return a0(function(){var i=rn.transition;rn.transition=1;try{r(t)}finally{rn.transition=i}},[t]),n},useTransition:function(){var t=ma(!1),e=t[0];return t=AC.bind(null,t[1]),o0(t),[t,e]},useMutableSource:function(t,e,n){var r=hi();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},i0(r,t,e,n)},useOpaqueIdentifier:function(){if(Nn){var t=!1,e=TC(function(){throw t||(t=!0,n("r:"+(bf++).toString(36))),Error(O(355))}),n=ma(e)[1];return(Ne.mode&2)==0&&(Ne.flags|=516,Bl(5,function(){n("r:"+(bf++).toString(36))},void 0,null)),e}return e="r:"+(bf++).toString(36),ma(e),e},unstable_isNewReconciler:!1},OC={readContext:nn,useCallback:h0,useContext:nn,useEffect:zl,useImperativeHandle:c0,useLayoutEffect:u0,useMemo:d0,useReducer:fa,useRef:ql,useState:function(){return fa(An)},useDebugValue:Kf,useDeferredValue:function(t){var e=fa(An),n=e[0],r=e[1];return zl(function(){var i=rn.transition;rn.transition=1;try{r(t)}finally{rn.transition=i}},[t]),n},useTransition:function(){var t=fa(An)[0];return[ql().current,t]},useMutableSource:s0,useOpaqueIdentifier:function(){return fa(An)[0]},unstable_isNewReconciler:!1},DC={readContext:nn,useCallback:h0,useContext:nn,useEffect:zl,useImperativeHandle:c0,useLayoutEffect:u0,useMemo:d0,useReducer:pa,useRef:ql,useState:function(){return pa(An)},useDebugValue:Kf,useDeferredValue:function(t){var e=pa(An),n=e[0],r=e[1];return zl(function(){var i=rn.transition;rn.transition=1;try{r(t)}finally{rn.transition=i}},[t]),n},useTransition:function(){var t=pa(An)[0];return[ql().current,t]},useMutableSource:s0,useOpaqueIdentifier:function(){return pa(An)[0]},unstable_isNewReconciler:!1},xC=ni.ReactCurrentOwner,gn=!1;function Lt(t,e,n,r){e.child=t===null?Xw(e,null,n,r):Fl(e,t.child,n,r)}function f0(t,e,n,r,i){n=n.render;var s=e.ref;return ws(e,i),r=zf(t,e,n,r,s,i),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Gn(t,e,i)):(e.flags|=1,Lt(t,e,r,i),e.child)}function p0(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!yp(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,m0(t,e,o,r,i,s)):(t=tc(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,(i&s)==0&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Zo,n(i,r)&&t.ref===e.ref)?Gn(t,e,s):(e.flags|=1,t=Or(o,r),t.ref=e.ref,t.return=e,e.child=t)}function m0(t,e,n,r,i,s){if(t!==null&&Zo(t.memoizedProps,r)&&t.ref===e.ref)if(gn=!1,(s&i)!=0)(t.flags&16384)!=0&&(gn=!0);else return e.lanes=t.lanes,Gn(t,e,s);return Yf(t,e,n,r,s)}function Qf(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if((e.mode&4)==0)e.memoizedState={baseLanes:0},ec(e,n);else if((n&1073741824)!=0)e.memoizedState={baseLanes:0},ec(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},ec(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ec(e,r);return Lt(t,e,i,n),e.child}function g0(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Yf(t,e,n,r,i){var s=Dt(n)?ai:pt.current;return s=gs(e,s),ws(e,i),n=zf(t,e,n,r,s,i),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Gn(t,e,i)):(e.flags|=1,Lt(t,e,n,i),e.child)}function y0(t,e,n,r,i){if(Dt(n)){var s=!0;Pl(e)}else s=!1;if(ws(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Qw(e,n,r),$f(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var u=o.context,l=n.contextType;typeof l=="object"&&l!==null?l=nn(l):(l=Dt(n)?ai:pt.current,l=gs(e,l));var c=n.getDerivedStateFromProps,h=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";h||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||u!==l)&&Yw(e,o,r,l),Sr=!1;var d=e.memoizedState;o.state=d,sa(e,r,o,i),u=e.memoizedState,a!==r||d!==u||Ot.current||Sr?(typeof c=="function"&&(xl(e,n,c,r),u=e.memoizedState),(a=Sr||Gw(e,n,a,r,d,u,l))?(h||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=l,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,zw(t,e),a=e.memoizedProps,l=e.type===e.elementType?a:mn(e.type,a),o.props=l,h=e.pendingProps,d=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=nn(u):(u=Dt(n)?ai:pt.current,u=gs(e,u));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==h||d!==u)&&Yw(e,o,r,u),Sr=!1,d=e.memoizedState,o.state=d,sa(e,r,o,i);var _=e.memoizedState;a!==h||d!==_||Ot.current||Sr?(typeof m=="function"&&(xl(e,n,m,r),_=e.memoizedState),(l=Sr||Gw(e,n,l,r,d,_,u))?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,_,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,_,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=_),o.props=r,o.state=_,o.context=u,r=l):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&d===t.memoizedState||(e.flags|=256),r=!1)}return Jf(t,e,n,r,s,i)}function Jf(t,e,n,r,i,s){g0(t,e);var o=(e.flags&64)!=0;if(!r&&!o)return i&&xw(e,n,!1),Gn(t,e,s);r=e.stateNode,xC.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Fl(e,t.child,null,s),e.child=Fl(e,null,a,s)):Lt(t,e,a,s),e.memoizedState=r.state,i&&xw(e,n,!0),e.child}function v0(t){var e=t.stateNode;e.pendingContext?Ow(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Ow(t,e.context,!1),Ff(t,e.containerInfo)}var Hl={dehydrated:null,retryLane:0};function w0(t,e,n){var r=e.pendingProps,i=Te.current,s=!1,o;return(o=(e.flags&64)!=0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!=0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),Se(Te,i&1),t===null?(r.fallback!==void 0&&Vf(e),t=r.children,i=r.fallback,s?(t=_0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Hl,t):typeof r.unstable_expectedLoadTime=="number"?(t=_0(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=Hl,e.lanes=33554432,t):(n=vp({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=I0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Hl,r):(n=E0(t,e,r.children,n),e.memoizedState=null,n):s?(r=I0(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=Hl,r):(n=E0(t,e,r.children,n),e.memoizedState=null,n)}function _0(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},(i&2)==0&&s!==null?(s.childLanes=0,s.pendingProps=e):s=vp(e,i,0,null),n=Cs(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function E0(t,e,n,r){var i=t.child;return t=i.sibling,n=Or(i,{mode:"visible",children:n}),(e.mode&2)==0&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function I0(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var a={mode:"hidden",children:n};return(s&2)==0&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=a,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=Or(o,a),t!==null?r=Or(t,r):(r=Cs(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function S0(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),qw(t.return,e)}function Xf(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function T0(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Lt(t,e,r.children,n),r=Te.current,(r&2)!=0)r=r&1|2,e.flags|=64;else{if(t!==null&&(t.flags&64)!=0)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&S0(t,n);else if(t.tag===19)S0(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(Se(Te,r),(e.mode&2)==0)e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Ul(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Xf(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Ul(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Xf(e,!0,n,null,s,e.lastEffect);break;case"together":Xf(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Gn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ya|=e.lanes,(n&e.childLanes)!=0){if(t!==null&&e.child!==t.child)throw Error(O(153));if(e.child!==null){for(t=e.child,n=Or(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Or(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var k0,Zf,b0,C0;k0=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Zf=function(){};b0=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,ci(Pn.current);var s=null;switch(n){case"input":i=Md(t,i),r=Md(t,r),s=[];break;case"option":i=Ud(t,i),r=Ud(t,r),s=[];break;case"select":i=ve({},i,{value:void 0}),r=ve({},r,{value:void 0}),s=[];break;case"textarea":i=Vd(t,i),r=Vd(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Sl)}qd(n,r);var o;n=null;for(l in i)if(!r.hasOwnProperty(l)&&i.hasOwnProperty(l)&&i[l]!=null)if(l==="style"){var a=i[l];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else l!=="dangerouslySetInnerHTML"&&l!=="children"&&l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&l!=="autoFocus"&&(Ro.hasOwnProperty(l)?s||(s=[]):(s=s||[]).push(l,null));for(l in r){var u=r[l];if(a=i!=null?i[l]:void 0,r.hasOwnProperty(l)&&u!==a&&(u!=null||a!=null))if(l==="style")if(a){for(o in a)!a.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&a[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(l,n)),n=u;else l==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(s=s||[]).push(l,u)):l==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(l,""+u):l!=="suppressContentEditableWarning"&&l!=="suppressHydrationWarning"&&(Ro.hasOwnProperty(l)?(u!=null&&l==="onScroll"&&he("scroll",t),s||a===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===Rd?u.toString():(s=s||[]).push(l,u))}n&&(s=s||[]).push("style",n);var l=s;(e.updateQueue=l)&&(e.flags|=4)}};C0=function(t,e,n,r){n!==r&&(e.flags|=4)};function ga(t,e){if(!Nn)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function LC(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return Dt(e.type)&&Cl(),null;case 3:return _s(),de(Ot),de(pt),Bf(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(Vl(e)?e.flags|=4:r.hydrate||(e.flags|=256)),Zf(e),null;case 5:Uf(e);var i=ci(la.current);if(n=e.type,t!==null&&e.stateNode!=null)b0(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(O(166));return null}if(t=ci(Pn.current),Vl(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[_r]=e,r[kl]=s,n){case"dialog":he("cancel",r),he("close",r);break;case"iframe":case"object":case"embed":he("load",r);break;case"video":case"audio":for(t=0;t<ta.length;t++)he(ta[t],r);break;case"source":he("error",r);break;case"img":case"image":case"link":he("error",r),he("load",r);break;case"details":he("toggle",r);break;case"input":yv(r,s),he("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},he("invalid",r);break;case"textarea":_v(r,s),he("invalid",r)}qd(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Ro.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&he("scroll",r));switch(n){case"input":ol(r),wv(r,s,!0);break;case"textarea":ol(r),Iv(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Sl)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===jd.html&&(t=Sv(n)),t===jd.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[_r]=e,t[kl]=r,k0(t,e,!1,!1),e.stateNode=t,o=zd(n,r),n){case"dialog":he("cancel",t),he("close",t),i=r;break;case"iframe":case"object":case"embed":he("load",t),i=r;break;case"video":case"audio":for(i=0;i<ta.length;i++)he(ta[i],t);i=r;break;case"source":he("error",t),i=r;break;case"img":case"image":case"link":he("error",t),he("load",t),i=r;break;case"details":he("toggle",t),i=r;break;case"input":yv(t,r),i=Md(t,r),he("invalid",t);break;case"option":i=Ud(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ve({},r,{value:void 0}),he("invalid",t);break;case"textarea":_v(t,r),i=Vd(t,r),he("invalid",t);break;default:i=r}qd(n,i);var a=i;for(s in a)if(a.hasOwnProperty(s)){var u=a[s];s==="style"?bv(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Tv(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&$o(t,u):typeof u=="number"&&$o(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ro.hasOwnProperty(s)?u!=null&&s==="onScroll"&&he("scroll",t):u!=null&&kd(t,s,u,o))}switch(n){case"input":ol(t),wv(t,r,!1);break;case"textarea":ol(t),Iv(t);break;case"option":r.value!=null&&t.setAttribute("value",""+pr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ns(t,!!r.multiple,s,!1):r.defaultValue!=null&&ns(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Sl)}Cw(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)C0(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(O(166));n=ci(la.current),ci(Pn.current),Vl(e)?(r=e.stateNode,n=e.memoizedProps,r[_r]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[_r]=e,e.stateNode=r)}return null;case 13:return de(Te),r=e.memoizedState,(e.flags&64)!=0?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&Vl(e):n=t.memoizedState!==null,r&&!n&&(e.mode&2)!=0&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||(Te.current&1)!=0?tt===0&&(tt=3):((tt===0||tt===3)&&(tt=4),kt===null||(ya&134217727)==0&&(Ss&134217727)==0||ks(kt,yt))),(r||n)&&(e.flags|=4),null);case 4:return _s(),Zf(e),t===null&&Iw(e.stateNode.containerInfo),null;case 10:return Lf(e),null;case 17:return Dt(e.type)&&Cl(),null;case 19:if(de(Te),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!=0,o=r.rendering,o===null)if(s)ga(r,!1);else{if(tt!==0||t!==null&&(t.flags&64)!=0)for(t=e.child;t!==null;){if(o=Ul(t),o!==null){for(e.flags|=64,ga(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return Se(Te,Te.current&1|2),e.child}t=t.sibling}r.tail!==null&&mt()>cp&&(e.flags|=64,s=!0,ga(r,!1),e.lanes=33554432)}else{if(!s)if(t=Ul(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),ga(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!Nn)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*mt()-r.renderingStartTime>cp&&n!==1073741824&&(e.flags|=64,s=!0,ga(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=mt(),n.sibling=null,e=Te.current,Se(Te,s?e&1|2:e&1),n):null;case 23:case 24:return gp(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(O(156,e.tag))}function MC(t){switch(t.tag){case 1:Dt(t.type)&&Cl();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(_s(),de(Ot),de(pt),Bf(),e=t.flags,(e&64)!=0)throw Error(O(285));return t.flags=e&-4097|64,t;case 5:return Uf(t),null;case 13:return de(Te),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return de(Te),null;case 4:return _s(),null;case 10:return Lf(t),null;case 23:case 24:return gp(),null;default:return null}}function ep(t,e){try{var n="",r=e;do n+=gb(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function tp(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var $C=typeof WeakMap=="function"?WeakMap:Map;function P0(t,e,n){n=Tr(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ql||(Ql=!0,hp=r),tp(t,e)},n}function N0(t,e,n){n=Tr(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return tp(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(Rn===null?Rn=new Set([this]):Rn.add(this),tp(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var FC=typeof WeakSet=="function"?WeakSet:Set;function A0(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){Rr(t,n)}else e.current=null}function UC(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:mn(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&kf(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(O(163))}function VC(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)==3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,(i&4)!=0&&(i&1)!=0&&(W0(n,t),GC(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:mn(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&Hw(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}Hw(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Cw(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&Bv(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(O(163))}function R0(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=kv("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function O0(t,e){if(ui&&typeof ui.onCommitFiberUnmount=="function")try{ui.onCommitFiberUnmount(Pf,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if((r&4)!=0)W0(e,n);else{r=e;try{i()}catch(s){Rr(r,s)}}n=n.next}while(n!==t)}break;case 1:if(A0(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){Rr(e,s)}break;case 5:A0(e);break;case 4:M0(t,e)}}function D0(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function x0(t){return t.tag===5||t.tag===3||t.tag===4}function L0(t){e:{for(var e=t.return;e!==null;){if(x0(e))break e;e=e.return}throw Error(O(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(O(161))}n.flags&16&&($o(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||x0(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?np(t,n,e):rp(t,n,e)}function np(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Sl));else if(r!==4&&(t=t.child,t!==null))for(np(t,e,n),t=t.sibling;t!==null;)np(t,e,n),t=t.sibling}function rp(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(rp(t,e,n),t=t.sibling;t!==null;)rp(t,e,n),t=t.sibling}function M0(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(O(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,a=n,u=a;;)if(O0(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===a)break e;for(;u.sibling===null;){if(u.return===null||u.return===a)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,a=n.stateNode,o.nodeType===8?o.parentNode.removeChild(a):o.removeChild(a)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(O0(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function ip(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)==3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[kl]=r,t==="input"&&r.type==="radio"&&r.name!=null&&vv(n,r),zd(t,i),e=zd(t,r),i=0;i<s.length;i+=2){var o=s[i],a=s[i+1];o==="style"?bv(n,a):o==="dangerouslySetInnerHTML"?Tv(n,a):o==="children"?$o(n,a):kd(n,o,a,e)}switch(t){case"input":$d(n,r);break;case"textarea":Ev(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?ns(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?ns(n,!!r.multiple,r.defaultValue,!0):ns(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(O(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,Bv(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(lp=mt(),R0(e.child,!0)),$0(e);return;case 19:$0(e);return;case 17:return;case 23:case 24:R0(e,e.memoizedState!==null);return}throw Error(O(163))}function $0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new FC),e.forEach(function(r){var i=JC.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function jC(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var BC=Math.ceil,Kl=ni.ReactCurrentDispatcher,sp=ni.ReactCurrentOwner,K=0,kt=null,Le=null,yt=0,fi=0,op=Er(0),tt=0,Gl=null,Is=0,ya=0,Ss=0,ap=0,up=null,lp=0,cp=1/0;function Ts(){cp=mt()+500}var F=null,Ql=!1,hp=null,Rn=null,Cr=!1,va=null,wa=90,dp=[],fp=[],Qn=null,_a=0,pp=null,Yl=-1,Yn=0,Jl=0,Ea=null,Xl=!1;function zt(){return(K&48)!=0?mt():Yl!==-1?Yl:Yl=mt()}function Pr(t){if(t=t.mode,(t&2)==0)return 1;if((t&4)==0)return ys()===99?1:2;if(Yn===0&&(Yn=Is),NC.transition!==0){Jl!==0&&(Jl=up!==null?up.pendingLanes:0),t=Yn;var e=4186112&~Jl;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=ys(),(K&4)!=0&&t===98?t=pl(12,Yn):(t=Ob(t),t=pl(t,Yn)),t}function Nr(t,e,n){if(50<_a)throw _a=0,pp=null,Error(O(185));if(t=Zl(t,e),t===null)return null;ml(t,e,n),t===kt&&(Ss|=e,tt===4&&ks(t,yt));var r=ys();e===1?(K&8)!=0&&(K&48)==0?mp(t):(sn(t,n),K===0&&(Ts(),Cn())):((K&4)==0||r!==98&&r!==99||(Qn===null?Qn=new Set([t]):Qn.add(t)),sn(t,n)),up=t}function Zl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function sn(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var a=31-vr(o),u=1<<a,l=s[a];if(l===-1){if((u&r)==0||(u&i)!=0){l=e,os(u);var c=le;s[a]=10<=c?l+250:6<=c?l+5e3:-1}}else l<=e&&(t.expiredLanes|=u);o&=~u}if(r=Ko(t,t===kt?yt:0),e=le,r===0)n!==null&&(n!==Of&&Af(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Of&&Af(n)}e===15?(n=mp.bind(null,t),Hn===null?(Hn=[n],Al=Nf(Nl,Bw)):Hn.push(n),n=Of):e===14?n=ia(99,mp.bind(null,t)):(n=Db(e),n=ia(n,F0.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function F0(t){if(Yl=-1,Jl=Yn=0,(K&48)!=0)throw Error(O(327));var e=t.callbackNode;if(Ar()&&t.callbackNode!==e)return null;var n=Ko(t,t===kt?yt:0);if(n===0)return null;var r=n,i=K;K|=16;var s=B0();(kt!==t||yt!==r)&&(Ts(),bs(t,r));do try{WC();break}catch(a){j0(t,a)}while(1);if(xf(),Kl.current=s,K=i,Le!==null?r=0:(kt=null,yt=0,r=tt),(Is&Ss)!=0)bs(t,0);else if(r!==0){if(r===2&&(K|=64,t.hydrate&&(t.hydrate=!1,kf(t.containerInfo)),n=Qv(t),n!==0&&(r=Ia(t,n))),r===1)throw e=Gl,bs(t,0),ks(t,n),sn(t,mt()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(O(345));case 2:pi(t);break;case 3:if(ks(t,n),(n&62914560)===n&&(r=lp+500-mt(),10<r)){if(Ko(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){zt(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Pw(pi.bind(null,t),r);break}pi(t);break;case 4:if(ks(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-vr(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=mt()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*BC(n/1960))-n,10<n){t.timeoutHandle=Pw(pi.bind(null,t),n);break}pi(t);break;case 5:pi(t);break;default:throw Error(O(329))}}return sn(t,mt()),t.callbackNode===e?F0.bind(null,t):null}function ks(t,e){for(e&=~ap,e&=~Ss,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-vr(e),r=1<<n;t[n]=-1,e&=~r}}function mp(t){if((K&48)!=0)throw Error(O(327));if(Ar(),t===kt&&(t.expiredLanes&yt)!=0){var e=yt,n=Ia(t,e);(Is&Ss)!=0&&(e=Ko(t,e),n=Ia(t,e))}else e=Ko(t,0),n=Ia(t,e);if(t.tag!==0&&n===2&&(K|=64,t.hydrate&&(t.hydrate=!1,kf(t.containerInfo)),e=Qv(t),e!==0&&(n=Ia(t,e))),n===1)throw n=Gl,bs(t,0),ks(t,e),sn(t,mt()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,pi(t),sn(t,mt()),null}function qC(){if(Qn!==null){var t=Qn;Qn=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,sn(e,mt())})}Cn()}function U0(t,e){var n=K;K|=1;try{return t(e)}finally{K=n,K===0&&(Ts(),Cn())}}function V0(t,e){var n=K;K&=-2,K|=8;try{return t(e)}finally{K=n,K===0&&(Ts(),Cn())}}function ec(t,e){Se(op,fi),fi|=e,Is|=e}function gp(){fi=op.current,de(op)}function bs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,SC(n)),Le!==null)for(n=Le.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&Cl();break;case 3:_s(),de(Ot),de(pt),Bf();break;case 5:Uf(r);break;case 4:_s();break;case 13:de(Te);break;case 19:de(Te);break;case 10:Lf(r);break;case 23:case 24:gp()}n=n.return}kt=t,Le=Or(t.current,null),yt=fi=Is=e,tt=0,Gl=null,ap=Ss=ya=0}function j0(t,e){do{var n=Le;try{if(xf(),ca.current=Wl,jl){for(var r=Ne.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}jl=!1}if(ha=0,et=gt=Ne=null,da=!1,sp.current=null,n===null||n.return===null){tt=1,Gl=e,Le=null;break}e:{var s=t,o=n.return,a=n,u=e;if(e=yt,a.flags|=2048,a.firstEffect=a.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var l=u;if((a.mode&2)==0){var c=a.alternate;c?(a.updateQueue=c.updateQueue,a.memoizedState=c.memoizedState,a.lanes=c.lanes):(a.updateQueue=null,a.memoizedState=null)}var h=(Te.current&1)!=0,d=o;do{var m;if(m=d.tag===13){var _=d.memoizedState;if(_!==null)m=_.dehydrated!==null;else{var E=d.memoizedProps;m=E.fallback===void 0?!1:E.unstable_avoidThisFallback!==!0?!0:!h}}if(m){var p=d.updateQueue;if(p===null){var f=new Set;f.add(l),d.updateQueue=f}else p.add(l);if((d.mode&2)==0){if(d.flags|=64,a.flags|=16384,a.flags&=-2981,a.tag===1)if(a.alternate===null)a.tag=17;else{var y=Tr(-1,1);y.tag=2,kr(a,y)}a.lanes|=1;break e}u=void 0,a=e;var S=s.pingCache;if(S===null?(S=s.pingCache=new $C,u=new Set,S.set(l,u)):(u=S.get(l),u===void 0&&(u=new Set,S.set(l,u))),!u.has(a)){u.add(a);var v=YC.bind(null,s,l,a);l.then(v,v)}d.flags|=4096,d.lanes=e;break e}d=d.return}while(d!==null);u=Error((ts(a.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}tt!==5&&(tt=2),u=ep(u,a),d=o;do{switch(d.tag){case 3:s=u,d.flags|=4096,e&=-e,d.lanes|=e;var A=P0(d,s,e);Ww(d,A);break e;case 1:s=u;var k=d.type,M=d.stateNode;if((d.flags&64)==0&&(typeof k.getDerivedStateFromError=="function"||M!==null&&typeof M.componentDidCatch=="function"&&(Rn===null||!Rn.has(M)))){d.flags|=4096,e&=-e,d.lanes|=e;var j=N0(d,s,e);Ww(d,j);break e}}d=d.return}while(d!==null)}z0(n)}catch(x){e=x,Le===n&&n!==null&&(Le=n=n.return);continue}break}while(1)}function B0(){var t=Kl.current;return Kl.current=Wl,t===null?Wl:t}function Ia(t,e){var n=K;K|=16;var r=B0();kt===t&&yt===e||bs(t,e);do try{zC();break}catch(i){j0(t,i)}while(1);if(xf(),K=n,Kl.current=r,Le!==null)throw Error(O(261));return kt=null,yt=0,tt}function zC(){for(;Le!==null;)q0(Le)}function WC(){for(;Le!==null&&!bC();)q0(Le)}function q0(t){var e=K0(t.alternate,t,fi);t.memoizedProps=t.pendingProps,e===null?z0(t):Le=e,sp.current=null}function z0(t){var e=t;do{var n=e.alternate;if(t=e.return,(e.flags&2048)==0){if(n=LC(n,e,fi),n!==null){Le=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||(fi&1073741824)!=0||(n.mode&4)==0){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&(t.flags&2048)==0&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}else{if(n=MC(e),n!==null){n.flags&=2047,Le=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}if(e=e.sibling,e!==null){Le=e;return}Le=e=t}while(e!==null);tt===0&&(tt=5)}function pi(t){var e=ys();return li(99,HC.bind(null,t,e)),null}function HC(t,e){do Ar();while(va!==null);if((K&48)!=0)throw Error(O(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(O(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,a=t.expirationTimes;0<s;){var u=31-vr(s),l=1<<u;i[u]=0,o[u]=-1,a[u]=-1,s&=~l}if(Qn!==null&&(r&24)==0&&Qn.has(t)&&Qn.delete(t),t===kt&&(Le=kt=null,yt=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=K,K|=32,sp.current=null,If=gl,o=mw(),vf(o)){if("selectionStart"in o)a={start:o.selectionStart,end:o.selectionEnd};else e:if(a=(a=o.ownerDocument)&&a.defaultView||window,(l=a.getSelection&&a.getSelection())&&l.rangeCount!==0){a=l.anchorNode,s=l.anchorOffset,u=l.focusNode,l=l.focusOffset;try{a.nodeType,u.nodeType}catch{a=null;break e}var c=0,h=-1,d=-1,m=0,_=0,E=o,p=null;t:for(;;){for(var f;E!==a||s!==0&&E.nodeType!==3||(h=c+s),E!==u||l!==0&&E.nodeType!==3||(d=c+l),E.nodeType===3&&(c+=E.nodeValue.length),(f=E.firstChild)!==null;)p=E,E=f;for(;;){if(E===o)break t;if(p===a&&++m===s&&(h=c),p===u&&++_===l&&(d=c),(f=E.nextSibling)!==null)break;E=p,p=E.parentNode}E=f}a=h===-1||d===-1?null:{start:h,end:d}}else a=null;a=a||{start:0,end:0}}else a=null;Sf={focusedElem:o,selectionRange:a},gl=!1,Ea=null,Xl=!1,F=r;do try{KC()}catch(x){if(F===null)throw Error(O(330));Rr(F,x),F=F.nextEffect}while(F!==null);Ea=null,F=r;do try{for(o=t;F!==null;){var y=F.flags;if(y&16&&$o(F.stateNode,""),y&128){var S=F.alternate;if(S!==null){var v=S.ref;v!==null&&(typeof v=="function"?v(null):v.current=null)}}switch(y&1038){case 2:L0(F),F.flags&=-3;break;case 6:L0(F),F.flags&=-3,ip(F.alternate,F);break;case 1024:F.flags&=-1025;break;case 1028:F.flags&=-1025,ip(F.alternate,F);break;case 4:ip(F.alternate,F);break;case 8:a=F,M0(o,a);var A=a.alternate;D0(a),A!==null&&D0(A)}F=F.nextEffect}}catch(x){if(F===null)throw Error(O(330));Rr(F,x),F=F.nextEffect}while(F!==null);if(v=Sf,S=mw(),y=v.focusedElem,o=v.selectionRange,S!==y&&y&&y.ownerDocument&&pw(y.ownerDocument.documentElement,y)){for(o!==null&&vf(y)&&(S=o.start,v=o.end,v===void 0&&(v=S),"selectionStart"in y?(y.selectionStart=S,y.selectionEnd=Math.min(v,y.value.length)):(v=(S=y.ownerDocument||document)&&S.defaultView||window,v.getSelection&&(v=v.getSelection(),a=y.textContent.length,A=Math.min(o.start,a),o=o.end===void 0?A:Math.min(o.end,a),!v.extend&&A>o&&(a=o,o=A,A=a),a=fw(y,A),s=fw(y,o),a&&s&&(v.rangeCount!==1||v.anchorNode!==a.node||v.anchorOffset!==a.offset||v.focusNode!==s.node||v.focusOffset!==s.offset)&&(S=S.createRange(),S.setStart(a.node,a.offset),v.removeAllRanges(),A>o?(v.addRange(S),v.extend(s.node,s.offset)):(S.setEnd(s.node,s.offset),v.addRange(S)))))),S=[],v=y;v=v.parentNode;)v.nodeType===1&&S.push({element:v,left:v.scrollLeft,top:v.scrollTop});for(typeof y.focus=="function"&&y.focus(),y=0;y<S.length;y++)v=S[y],v.element.scrollLeft=v.left,v.element.scrollTop=v.top}gl=!!If,Sf=If=null,t.current=n,F=r;do try{for(y=t;F!==null;){var k=F.flags;if(k&36&&VC(y,F.alternate,F),k&128){S=void 0;var M=F.ref;if(M!==null){var j=F.stateNode;switch(F.tag){case 5:S=j;break;default:S=j}typeof M=="function"?M(S):M.current=S}}F=F.nextEffect}}catch(x){if(F===null)throw Error(O(330));Rr(F,x),F=F.nextEffect}while(F!==null);F=null,PC(),K=i}else t.current=n;if(Cr)Cr=!1,va=t,wa=e;else for(F=r;F!==null;)e=F.nextEffect,F.nextEffect=null,F.flags&8&&(k=F,k.sibling=null,k.stateNode=null),F=e;if(r=t.pendingLanes,r===0&&(Rn=null),r===1?t===pp?_a++:(_a=0,pp=t):_a=0,n=n.stateNode,ui&&typeof ui.onCommitFiberRoot=="function")try{ui.onCommitFiberRoot(Pf,n,void 0,(n.current.flags&64)==64)}catch{}if(sn(t,mt()),Ql)throw Ql=!1,t=hp,hp=null,t;return(K&8)!=0||Cn(),null}function KC(){for(;F!==null;){var t=F.alternate;Xl||Ea===null||((F.flags&8)!=0?Lv(F,Ea)&&(Xl=!0):F.tag===13&&jC(t,F)&&Lv(F,Ea)&&(Xl=!0));var e=F.flags;(e&256)!=0&&UC(t,F),(e&512)==0||Cr||(Cr=!0,ia(97,function(){return Ar(),null})),F=F.nextEffect}}function Ar(){if(wa!==90){var t=97<wa?97:wa;return wa=90,li(t,QC)}return!1}function GC(t,e){dp.push(e,t),Cr||(Cr=!0,ia(97,function(){return Ar(),null}))}function W0(t,e){fp.push(e,t),Cr||(Cr=!0,ia(97,function(){return Ar(),null}))}function QC(){if(va===null)return!1;var t=va;if(va=null,(K&48)!=0)throw Error(O(331));var e=K;K|=32;var n=fp;fp=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(O(330));Rr(s,u)}}for(n=dp,dp=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var a=i.create;i.destroy=a()}catch(u){if(s===null)throw Error(O(330));Rr(s,u)}}for(a=t.current.firstEffect;a!==null;)t=a.nextEffect,a.nextEffect=null,a.flags&8&&(a.sibling=null,a.stateNode=null),a=t;return K=e,Cn(),!0}function H0(t,e,n){e=ep(n,e),e=P0(t,e,1),kr(t,e),e=zt(),t=Zl(t,1),t!==null&&(ml(t,1,e),sn(t,e))}function Rr(t,e){if(t.tag===3)H0(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){H0(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r))){t=ep(e,t);var i=N0(n,t,1);if(kr(n,i),i=zt(),n=Zl(n,1),n!==null)ml(n,1,i),sn(n,i);else if(typeof r.componentDidCatch=="function"&&(Rn===null||!Rn.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function YC(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=zt(),t.pingedLanes|=t.suspendedLanes&n,kt===t&&(yt&n)===n&&(tt===4||tt===3&&(yt&62914560)===yt&&500>mt()-lp?bs(t,0):ap|=n),sn(t,e)}function JC(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,(e&2)==0?e=1:(e&4)==0?e=ys()===99?1:2:(Yn===0&&(Yn=Is),e=as(62914560&~Yn),e===0&&(e=4194304))),n=zt(),t=Zl(t,e),t!==null&&(ml(t,e,n),sn(t,n))}var K0;K0=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||Ot.current)gn=!0;else if((n&r)!=0)gn=(t.flags&16384)!=0;else{switch(gn=!1,e.tag){case 3:v0(e),jf();break;case 5:Zw(e);break;case 1:Dt(e.type)&&Pl(e);break;case 4:Ff(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;Se(Rl,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return(n&e.child.childLanes)!=0?w0(t,e,n):(Se(Te,Te.current&1),e=Gn(t,e,n),e!==null?e.sibling:null);Se(Te,Te.current&1);break;case 19:if(r=(n&e.childLanes)!=0,(t.flags&64)!=0){if(r)return T0(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Te,Te.current),r)break;return null;case 23:case 24:return e.lanes=0,Qf(t,e,n)}return Gn(t,e,n)}else gn=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=gs(e,pt.current),ws(e,n),i=zf(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,Dt(r)){var s=!0;Pl(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Mf(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&xl(e,r,o,t),i.updater=Ll,e.stateNode=i,i._reactInternals=e,$f(e,r,t,n),e=Jf(null,e,r,!0,s,n)}else e.tag=0,Lt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=ZC(i),t=mn(i,t),s){case 0:e=Yf(null,e,i,t,n);break e;case 1:e=y0(null,e,i,t,n);break e;case 11:e=f0(null,e,i,t,n);break e;case 14:e=p0(null,e,i,mn(i.type,t),r,n);break e}throw Error(O(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),Yf(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),y0(t,e,r,i,n);case 3:if(v0(e),r=e.updateQueue,t===null||r===null)throw Error(O(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,zw(t,e),sa(e,r,null,n),r=e.memoizedState.element,r===i)jf(),e=Gn(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(br=ds(e.stateNode.containerInfo.firstChild),Kn=e,s=Nn=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],Es.push(s);for(n=Xw(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else Lt(t,e,r,n),jf();e=e.child}return e;case 5:return Zw(e),t===null&&Vf(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Tf(r,i)?o=null:s!==null&&Tf(r,s)&&(e.flags|=16),g0(t,e),Lt(t,e,o,n),e.child;case 6:return t===null&&Vf(e),null;case 13:return w0(t,e,n);case 4:return Ff(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Fl(e,null,r,n):Lt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),f0(t,e,r,i,n);case 7:return Lt(t,e,e.pendingProps,n),e.child;case 8:return Lt(t,e,e.pendingProps.children,n),e.child;case 12:return Lt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var a=e.type._context;if(Se(Rl,a._currentValue),a._currentValue=s,o!==null)if(a=o.value,s=tn(a,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(a,s):1073741823)|0,s===0){if(o.children===i.children&&!Ot.current){e=Gn(t,e,n);break e}}else for(a=e.child,a!==null&&(a.return=e);a!==null;){var u=a.dependencies;if(u!==null){o=a.child;for(var l=u.firstContext;l!==null;){if(l.context===r&&(l.observedBits&s)!=0){a.tag===1&&(l=Tr(-1,n&-n),l.tag=2,kr(a,l)),a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),qw(a.return,n),u.lanes|=n;break}l=l.next}}else o=a.tag===10&&a.type===e.type?null:a.child;if(o!==null)o.return=a;else for(o=a;o!==null;){if(o===e){o=null;break}if(a=o.sibling,a!==null){a.return=o.return,o=a;break}o=o.return}a=o}Lt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,ws(e,n),i=nn(i,s.unstable_observedBits),r=r(i),e.flags|=1,Lt(t,e,r,n),e.child;case 14:return i=e.type,s=mn(i,e.pendingProps),s=mn(i.type,s),p0(t,e,i,s,r,n);case 15:return m0(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:mn(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,Dt(r)?(t=!0,Pl(e)):t=!1,ws(e,n),Qw(e,r,i),$f(e,r,i,n),Jf(null,e,r,!0,t,n);case 19:return T0(t,e,n);case 23:return Qf(t,e,n);case 24:return Qf(t,e,n)}throw Error(O(156,e.tag))};function XC(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function on(t,e,n,r){return new XC(t,e,n,r)}function yp(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ZC(t){if(typeof t=="function")return yp(t)?1:0;if(t!=null){if(t=t.$$typeof,t===nl)return 11;if(t===il)return 14}return 2}function Or(t,e){var n=t.alternate;return n===null?(n=on(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function tc(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")yp(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case fr:return Cs(n.children,i,s,e);case fv:o=8,i|=16;break;case bd:o=8,i|=1;break;case Do:return t=on(12,n,e,i|8),t.elementType=Do,t.type=Do,t.lanes=s,t;case xo:return t=on(13,n,e,i),t.type=xo,t.elementType=xo,t.lanes=s,t;case rl:return t=on(19,n,e,i),t.elementType=rl,t.lanes=s,t;case Od:return vp(n,i,s,e);case Dd:return t=on(24,n,e,i),t.elementType=Dd,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Cd:o=10;break e;case Pd:o=9;break e;case nl:o=11;break e;case il:o=14;break e;case Nd:o=16,r=null;break e;case Ad:o=22;break e}throw Error(O(130,t==null?t:typeof t,""))}return e=on(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function Cs(t,e,n,r){return t=on(7,t,r,e),t.lanes=n,t}function vp(t,e,n,r){return t=on(23,t,r,e),t.elementType=Od,t.lanes=n,t}function wp(t,e,n){return t=on(6,t,null,e),t.lanes=n,t}function _p(t,e,n){return e=on(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function eP(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=of(0),this.expirationTimes=of(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=of(0),this.mutableSourceEagerHydrationData=null}function tP(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ri,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function nc(t,e,n,r){var i=e.current,s=zt(),o=Pr(i);e:if(n){n=n._reactInternals;t:{if(si(n)!==n||n.tag!==1)throw Error(O(170));var a=n;do{switch(a.tag){case 3:a=a.stateNode.context;break t;case 1:if(Dt(a.type)){a=a.stateNode.__reactInternalMemoizedMergedChildContext;break t}}a=a.return}while(a!==null);throw Error(O(171))}if(n.tag===1){var u=n.type;if(Dt(u)){n=Dw(n,u,a);break e}}n=a}else n=Ir;return e.context===null?e.context=n:e.pendingContext=n,e=Tr(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),kr(i,e),Nr(i,o,s),o}function Ep(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function G0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Ip(t,e){G0(t,e),(t=t.alternate)&&G0(t,e)}function nP(){return null}function Sp(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new eP(t,e,n!=null&&n.hydrate===!0),e=on(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,Mf(e),t[fs]=n.current,Iw(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Sp.prototype.render=function(t){nc(t,this._internalRoot,null,null)};Sp.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;nc(null,t,null,function(){e[fs]=null})};function Sa(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function rP(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Sp(t,0,e?{hydrate:!0}:void 0)}function rc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var a=i;i=function(){var l=Ep(o);a.call(l)}}nc(e,o,t,i)}else{if(s=n._reactRootContainer=rP(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var l=Ep(o);u.call(l)}}V0(function(){nc(e,o,t,i)})}return Ep(o)}Mv=function(t){if(t.tag===13){var e=zt();Nr(t,4,e),Ip(t,4)}};Zd=function(t){if(t.tag===13){var e=zt();Nr(t,67108864,e),Ip(t,67108864)}};$v=function(t){if(t.tag===13){var e=zt(),n=Pr(t);Nr(t,n,e),Ip(t,n)}};Fv=function(t,e){return e()};Hd=function(t,e,n){switch(e){case"input":if($d(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bl(r);if(!i)throw Error(O(90));gv(r),$d(r,i)}}}break;case"textarea":Ev(t,n);break;case"select":e=n.value,e!=null&&ns(t,!!n.multiple,e,!1)}};Kd=U0;Av=function(t,e,n,r,i){var s=K;K|=4;try{return li(98,t.bind(null,e,n,r,i))}finally{K=s,K===0&&(Ts(),Cn())}};Gd=function(){(K&49)==0&&(qC(),Ar())};Rv=function(t,e){var n=K;K|=2;try{return t(e)}finally{K=n,K===0&&(Ts(),Cn())}};function Q0(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Sa(e))throw Error(O(200));return tP(t,e,null,n)}var iP={Events:[ra,ps,bl,Pv,Nv,Ar,{current:!1}]},Ta={findFiberByHostInstance:oi,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},sP={bundleType:Ta.bundleType,version:Ta.version,rendererPackageName:Ta.rendererPackageName,rendererConfig:Ta.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ni.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=xv(t),t===null?null:t.stateNode},findFiberByHostInstance:Ta.findFiberByHostInstance||nP,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__!="undefined"){var ic=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ic.isDisabled&&ic.supportsFiber)try{Pf=ic.inject(sP),ui=ic}catch{}}en.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iP;en.createPortal=Q0;en.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(O(188)):Error(O(268,Object.keys(t)));return t=xv(e),t=t===null?null:t.stateNode,t};en.flushSync=function(t,e){var n=K;if((n&48)!=0)return t(e);K|=1;try{if(t)return li(99,t.bind(null,e))}finally{K=n,Cn()}};en.hydrate=function(t,e,n){if(!Sa(e))throw Error(O(200));return rc(null,t,e,!0,n)};en.render=function(t,e,n){if(!Sa(e))throw Error(O(200));return rc(null,t,e,!1,n)};en.unmountComponentAtNode=function(t){if(!Sa(t))throw Error(O(40));return t._reactRootContainer?(V0(function(){rc(null,null,t,!1,function(){t._reactRootContainer=null,t[fs]=null})}),!0):!1};en.unstable_batchedUpdates=U0;en.unstable_createPortal=function(t,e){return Q0(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};en.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Sa(n))throw Error(O(200));if(t==null||t._reactInternals===void 0)throw Error(O(38));return rc(t,e,n,!1,r)};en.version="17.0.2";function Y0(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__=="undefined"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Y0)}catch(t){console.error(t)}}Y0(),Id.exports=en;var YV=Id.exports,J0={exports:{}},oP="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",aP=oP,uP=aP;function X0(){}function Z0(){}Z0.resetWarningCache=X0;var lP=function(){function t(r,i,s,o,a,u){if(u!==uP){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Z0,resetWarningCache:X0};return n.PropTypes=n,n};J0.exports=lP();var e_=el.createContext(null);function cP(t){t()}var t_=cP,hP=function(e){return t_=e},dP=function(){return t_};function fP(){var t=dP(),e=null,n=null;return{clear:function(){e=null,n=null},notify:function(){t(function(){for(var i=e;i;)i.callback(),i=i.next})},get:function(){for(var i=[],s=e;s;)i.push(s),s=s.next;return i},subscribe:function(i){var s=!0,o=n={callback:i,next:null,prev:n};return o.prev?o.prev.next=o:e=o,function(){!s||e===null||(s=!1,o.next?o.next.prev=o.prev:n=o.prev,o.prev?o.prev.next=o.next:e=o.next)}}}}var n_={notify:function(){},get:function(){return[]}};function r_(t,e){var n,r=n_;function i(h){return u(),r.subscribe(h)}function s(){r.notify()}function o(){c.onStateChange&&c.onStateChange()}function a(){return Boolean(n)}function u(){n||(n=e?e.addNestedSub(o):t.subscribe(o),r=fP())}function l(){n&&(n(),n=void 0,r.clear(),r=n_)}var c={addNestedSub:i,notifyNestedSubs:s,handleChangeWrapper:o,isSubscribed:a,trySubscribe:u,tryUnsubscribe:l,getListeners:function(){return r}};return c}var i_=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?V.exports.useLayoutEffect:V.exports.useEffect,Tp={exports:{}},ka={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pP=V.exports,s_=60103;ka.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var o_=Symbol.for;s_=o_("react.element"),ka.Fragment=o_("react.fragment")}var mP=pP.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gP=Object.prototype.hasOwnProperty,yP={key:!0,ref:!0,__self:!0,__source:!0};function a_(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)gP.call(e,r)&&!yP.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:s_,type:t,key:s,ref:o,props:i,_owner:mP.current}}ka.jsx=a_;ka.jsxs=a_;Tp.exports=ka;const sc=Tp.exports.jsx,JV=Tp.exports.jsxs;function XV(t){var e=t.store,n=t.context,r=t.children,i=V.exports.useMemo(function(){var a=r_(e);return a.onStateChange=a.notifyNestedSubs,{store:e,subscription:a}},[e]),s=V.exports.useMemo(function(){return e.getState()},[e]);i_(function(){var a=i.subscription;return a.trySubscribe(),s!==e.getState()&&a.notifyNestedSubs(),function(){a.tryUnsubscribe(),a.onStateChange=null}},[i,s]);var o=n||e_;return sc(o.Provider,{value:i,children:r})}function Dr(){return Dr=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Dr.apply(this,arguments)}function oc(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var u_={exports:{}},oe={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qe=typeof Symbol=="function"&&Symbol.for,kp=qe?Symbol.for("react.element"):60103,bp=qe?Symbol.for("react.portal"):60106,ac=qe?Symbol.for("react.fragment"):60107,uc=qe?Symbol.for("react.strict_mode"):60108,lc=qe?Symbol.for("react.profiler"):60114,cc=qe?Symbol.for("react.provider"):60109,hc=qe?Symbol.for("react.context"):60110,Cp=qe?Symbol.for("react.async_mode"):60111,dc=qe?Symbol.for("react.concurrent_mode"):60111,fc=qe?Symbol.for("react.forward_ref"):60112,pc=qe?Symbol.for("react.suspense"):60113,vP=qe?Symbol.for("react.suspense_list"):60120,mc=qe?Symbol.for("react.memo"):60115,gc=qe?Symbol.for("react.lazy"):60116,wP=qe?Symbol.for("react.block"):60121,_P=qe?Symbol.for("react.fundamental"):60117,EP=qe?Symbol.for("react.responder"):60118,IP=qe?Symbol.for("react.scope"):60119;function Wt(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case kp:switch(t=t.type,t){case Cp:case dc:case ac:case lc:case uc:case pc:return t;default:switch(t=t&&t.$$typeof,t){case hc:case fc:case gc:case mc:case cc:return t;default:return e}}case bp:return e}}}function l_(t){return Wt(t)===dc}oe.AsyncMode=Cp;oe.ConcurrentMode=dc;oe.ContextConsumer=hc;oe.ContextProvider=cc;oe.Element=kp;oe.ForwardRef=fc;oe.Fragment=ac;oe.Lazy=gc;oe.Memo=mc;oe.Portal=bp;oe.Profiler=lc;oe.StrictMode=uc;oe.Suspense=pc;oe.isAsyncMode=function(t){return l_(t)||Wt(t)===Cp};oe.isConcurrentMode=l_;oe.isContextConsumer=function(t){return Wt(t)===hc};oe.isContextProvider=function(t){return Wt(t)===cc};oe.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===kp};oe.isForwardRef=function(t){return Wt(t)===fc};oe.isFragment=function(t){return Wt(t)===ac};oe.isLazy=function(t){return Wt(t)===gc};oe.isMemo=function(t){return Wt(t)===mc};oe.isPortal=function(t){return Wt(t)===bp};oe.isProfiler=function(t){return Wt(t)===lc};oe.isStrictMode=function(t){return Wt(t)===uc};oe.isSuspense=function(t){return Wt(t)===pc};oe.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ac||t===dc||t===lc||t===uc||t===pc||t===vP||typeof t=="object"&&t!==null&&(t.$$typeof===gc||t.$$typeof===mc||t.$$typeof===cc||t.$$typeof===hc||t.$$typeof===fc||t.$$typeof===_P||t.$$typeof===EP||t.$$typeof===IP||t.$$typeof===wP)};oe.typeOf=Wt;u_.exports=oe;var Pp=u_.exports,SP={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},TP={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},kP={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c_={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Np={};Np[Pp.ForwardRef]=kP;Np[Pp.Memo]=c_;function h_(t){return Pp.isMemo(t)?c_:Np[t.$$typeof]||SP}var bP=Object.defineProperty,CP=Object.getOwnPropertyNames,d_=Object.getOwnPropertySymbols,PP=Object.getOwnPropertyDescriptor,NP=Object.getPrototypeOf,f_=Object.prototype;function p_(t,e,n){if(typeof e!="string"){if(f_){var r=NP(e);r&&r!==f_&&p_(t,r,n)}var i=CP(e);d_&&(i=i.concat(d_(e)));for(var s=h_(t),o=h_(e),a=0;a<i.length;++a){var u=i[a];if(!TP[u]&&!(n&&n[u])&&!(o&&o[u])&&!(s&&s[u])){var l=PP(e,u);try{bP(t,u,l)}catch{}}}}return t}var m_=p_,g_={exports:{}},ue={};/** @license React v17.0.2
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=60103,vc=60106,ba=60107,Ca=60108,Pa=60114,Na=60109,Aa=60110,Ra=60112,Oa=60113,Ap=60120,Da=60115,xa=60116,y_=60121,v_=60122,w_=60117,__=60129,E_=60131;if(typeof Symbol=="function"&&Symbol.for){var nt=Symbol.for;yc=nt("react.element"),vc=nt("react.portal"),ba=nt("react.fragment"),Ca=nt("react.strict_mode"),Pa=nt("react.profiler"),Na=nt("react.provider"),Aa=nt("react.context"),Ra=nt("react.forward_ref"),Oa=nt("react.suspense"),Ap=nt("react.suspense_list"),Da=nt("react.memo"),xa=nt("react.lazy"),y_=nt("react.block"),v_=nt("react.server.block"),w_=nt("react.fundamental"),__=nt("react.debug_trace_mode"),E_=nt("react.legacy_hidden")}function yn(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case yc:switch(t=t.type,t){case ba:case Pa:case Ca:case Oa:case Ap:return t;default:switch(t=t&&t.$$typeof,t){case Aa:case Ra:case xa:case Da:case Na:return t;default:return e}}case vc:return e}}}var AP=Na,RP=yc,OP=Ra,DP=ba,xP=xa,LP=Da,MP=vc,$P=Pa,FP=Ca,UP=Oa;ue.ContextConsumer=Aa;ue.ContextProvider=AP;ue.Element=RP;ue.ForwardRef=OP;ue.Fragment=DP;ue.Lazy=xP;ue.Memo=LP;ue.Portal=MP;ue.Profiler=$P;ue.StrictMode=FP;ue.Suspense=UP;ue.isAsyncMode=function(){return!1};ue.isConcurrentMode=function(){return!1};ue.isContextConsumer=function(t){return yn(t)===Aa};ue.isContextProvider=function(t){return yn(t)===Na};ue.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===yc};ue.isForwardRef=function(t){return yn(t)===Ra};ue.isFragment=function(t){return yn(t)===ba};ue.isLazy=function(t){return yn(t)===xa};ue.isMemo=function(t){return yn(t)===Da};ue.isPortal=function(t){return yn(t)===vc};ue.isProfiler=function(t){return yn(t)===Pa};ue.isStrictMode=function(t){return yn(t)===Ca};ue.isSuspense=function(t){return yn(t)===Oa};ue.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ba||t===Pa||t===__||t===Ca||t===Oa||t===Ap||t===E_||typeof t=="object"&&t!==null&&(t.$$typeof===xa||t.$$typeof===Da||t.$$typeof===Na||t.$$typeof===Aa||t.$$typeof===Ra||t.$$typeof===w_||t.$$typeof===y_||t[0]===v_)};ue.typeOf=yn;g_.exports=ue;var VP=["getDisplayName","methodName","renderCountProp","shouldHandleStateChanges","storeKey","withRef","forwardRef","context"],jP=["reactReduxForwardedRef"],BP=[],qP=[null,null];function zP(t,e){var n=t[1];return[e.payload,n+1]}function I_(t,e,n){i_(function(){return t.apply(void 0,e)},n)}function WP(t,e,n,r,i,s,o){t.current=r,e.current=i,n.current=!1,s.current&&(s.current=null,o())}function HP(t,e,n,r,i,s,o,a,u,l){if(!!t){var c=!1,h=null,d=function(){if(!c){var E=e.getState(),p,f;try{p=r(E,i.current)}catch(y){f=y,h=y}f||(h=null),p===s.current?o.current||u():(s.current=p,a.current=p,o.current=!0,l({type:"STORE_UPDATED",payload:{error:f}}))}};n.onStateChange=d,n.trySubscribe(),d();var m=function(){if(c=!0,n.tryUnsubscribe(),n.onStateChange=null,h)throw h};return m}}var KP=function(){return[null,0]};function GP(t,e){e===void 0&&(e={});var n=e,r=n.getDisplayName,i=r===void 0?function(S){return"ConnectAdvanced("+S+")"}:r,s=n.methodName,o=s===void 0?"connectAdvanced":s,a=n.renderCountProp,u=a===void 0?void 0:a,l=n.shouldHandleStateChanges,c=l===void 0?!0:l,h=n.storeKey,d=h===void 0?"store":h;n.withRef;var m=n.forwardRef,_=m===void 0?!1:m,E=n.context,p=E===void 0?e_:E,f=oc(n,VP),y=p;return function(v){var A=v.displayName||v.name||"Component",k=i(A),M=Dr({},f,{getDisplayName:i,methodName:o,renderCountProp:u,shouldHandleStateChanges:c,storeKey:d,displayName:k,wrappedComponentName:A,WrappedComponent:v}),j=f.pure;function x(Ee){return t(Ee.dispatch,M)}var ne=j?V.exports.useMemo:function(Ee){return Ee()};function hn(Ee){var Ie=V.exports.useMemo(function(){var dn=Ee.reactReduxForwardedRef,fn=oc(Ee,jP);return[Ee.context,dn,fn]},[Ee]),Xe=Ie[0],Vt=Ie[1],Zt=Ie[2],Sn=V.exports.useMemo(function(){return Xe&&Xe.Consumer&&g_.exports.isContextConsumer(el.createElement(Xe.Consumer,null))?Xe:y},[Xe,y]),jt=V.exports.useContext(Sn),g=Boolean(Ee.store)&&Boolean(Ee.store.getState)&&Boolean(Ee.store.dispatch);Boolean(jt)&&Boolean(jt.store);var I=g?Ee.store:jt.store,w=V.exports.useMemo(function(){return x(I)},[I]),C=V.exports.useMemo(function(){if(!c)return qP;var dn=r_(I,g?null:jt.subscription),fn=dn.notifyNestedSubs.bind(dn);return[dn,fn]},[I,g,jt]),L=C[0],W=C[1],H=V.exports.useMemo(function(){return g?jt:Dr({},jt,{subscription:L})},[g,jt,L]),Y=V.exports.useReducer(zP,BP,KP),Pe=Y[0],ft=Pe[0],It=Y[1];if(ft&&ft.error)throw ft.error;var Ve=V.exports.useRef(),St=V.exports.useRef(Zt),re=V.exports.useRef(),Tn=V.exports.useRef(!1),Bt=ne(function(){return re.current&&Zt===St.current?re.current:w(I.getState(),Zt)},[I,ft,Zt]);I_(WP,[St,Ve,Tn,Zt,Bt,re,W]),I_(HP,[c,I,L,w,St,Ve,Tn,re,W,It],[I,L,w]);var ce=V.exports.useMemo(function(){return sc(v,md(pd({},Bt),{ref:Vt}))},[Vt,v,Bt]),dr=V.exports.useMemo(function(){return c?sc(Sn.Provider,{value:H,children:ce}):ce},[Sn,ce,H]);return dr}var ge=j?el.memo(hn):hn;if(ge.WrappedComponent=v,ge.displayName=hn.displayName=k,_){var ye=el.forwardRef(function(Ie,Xe){return sc(ge,md(pd({},Ie),{reactReduxForwardedRef:Xe}))});return ye.displayName=k,ye.WrappedComponent=v,m_(ye,v)}return m_(ge,v)}}function S_(t,e){return t===e?t!==0||e!==0||1/t==1/e:t!==t&&e!==e}function Rp(t,e){if(S_(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(var i=0;i<n.length;i++)if(!Object.prototype.hasOwnProperty.call(e,n[i])||!S_(t[n[i]],e[n[i]]))return!1;return!0}function QP(t,e){var n={},r=function(o){var a=t[o];typeof a=="function"&&(n[o]=function(){return e(a.apply(void 0,arguments))})};for(var i in t)r(i);return n}function Op(t){return function(n,r){var i=t(n,r);function s(){return i}return s.dependsOnOwnProps=!1,s}}function T_(t){return t.dependsOnOwnProps!==null&&t.dependsOnOwnProps!==void 0?Boolean(t.dependsOnOwnProps):t.length!==1}function k_(t,e){return function(r,i){i.displayName;var s=function(a,u){return s.dependsOnOwnProps?s.mapToProps(a,u):s.mapToProps(a)};return s.dependsOnOwnProps=!0,s.mapToProps=function(a,u){s.mapToProps=t,s.dependsOnOwnProps=T_(t);var l=s(a,u);return typeof l=="function"&&(s.mapToProps=l,s.dependsOnOwnProps=T_(l),l=s(a,u)),l},s}}function YP(t){return typeof t=="function"?k_(t):void 0}function JP(t){return t?void 0:Op(function(e){return{dispatch:e}})}function XP(t){return t&&typeof t=="object"?Op(function(e){return QP(t,e)}):void 0}var ZP=[YP,JP,XP];function eN(t){return typeof t=="function"?k_(t):void 0}function tN(t){return t?void 0:Op(function(){return{}})}var nN=[eN,tN];function rN(t,e,n){return Dr({},n,t,e)}function iN(t){return function(n,r){r.displayName;var i=r.pure,s=r.areMergedPropsEqual,o=!1,a;return function(l,c,h){var d=t(l,c,h);return o?(!i||!s(d,a))&&(a=d):(o=!0,a=d),a}}}function sN(t){return typeof t=="function"?iN(t):void 0}function oN(t){return t?void 0:function(){return rN}}var aN=[sN,oN],uN=["initMapStateToProps","initMapDispatchToProps","initMergeProps"];function lN(t,e,n,r){return function(s,o){return n(t(s,o),e(r,o),o)}}function cN(t,e,n,r,i){var s=i.areStatesEqual,o=i.areOwnPropsEqual,a=i.areStatePropsEqual,u=!1,l,c,h,d,m;function _(S,v){return l=S,c=v,h=t(l,c),d=e(r,c),m=n(h,d,c),u=!0,m}function E(){return h=t(l,c),e.dependsOnOwnProps&&(d=e(r,c)),m=n(h,d,c),m}function p(){return t.dependsOnOwnProps&&(h=t(l,c)),e.dependsOnOwnProps&&(d=e(r,c)),m=n(h,d,c),m}function f(){var S=t(l,c),v=!a(S,h);return h=S,v&&(m=n(h,d,c)),m}function y(S,v){var A=!o(v,c),k=!s(S,l);return l=S,c=v,A&&k?E():A?p():k?f():m}return function(v,A){return u?y(v,A):_(v,A)}}function hN(t,e){var n=e.initMapStateToProps,r=e.initMapDispatchToProps,i=e.initMergeProps,s=oc(e,uN),o=n(t,s),a=r(t,s),u=i(t,s),l=s.pure?cN:lN;return l(o,a,u,t,s)}var dN=["pure","areStatesEqual","areOwnPropsEqual","areStatePropsEqual","areMergedPropsEqual"];function Dp(t,e,n){for(var r=e.length-1;r>=0;r--){var i=e[r](t);if(i)return i}return function(s,o){throw new Error("Invalid value of type "+typeof t+" for "+n+" argument when connecting component "+o.wrappedComponentName+".")}}function fN(t,e){return t===e}function pN(t){var e=t===void 0?{}:t,n=e.connectHOC,r=n===void 0?GP:n,i=e.mapStateToPropsFactories,s=i===void 0?nN:i,o=e.mapDispatchToPropsFactories,a=o===void 0?ZP:o,u=e.mergePropsFactories,l=u===void 0?aN:u,c=e.selectorFactory,h=c===void 0?hN:c;return function(m,_,E,p){p===void 0&&(p={});var f=p,y=f.pure,S=y===void 0?!0:y,v=f.areStatesEqual,A=v===void 0?fN:v,k=f.areOwnPropsEqual,M=k===void 0?Rp:k,j=f.areStatePropsEqual,x=j===void 0?Rp:j,ne=f.areMergedPropsEqual,hn=ne===void 0?Rp:ne,ge=oc(f,dN),ye=Dp(m,s,"mapStateToProps"),Ee=Dp(_,a,"mapDispatchToProps"),Ie=Dp(E,l,"mergeProps");return r(h,Dr({methodName:"connect",getDisplayName:function(Vt){return"Connect("+Vt+")"},shouldHandleStateChanges:Boolean(m),initMapStateToProps:ye,initMapDispatchToProps:Ee,initMergeProps:Ie,pure:S,areStatesEqual:A,areOwnPropsEqual:M,areStatePropsEqual:x,areMergedPropsEqual:hn},ge))}}var ZV=pN();hP(Id.exports.unstable_batchedUpdates);function wc(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?wc=function(n){return typeof n}:wc=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},wc(t)}function mN(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b_(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function gN(t,e,n){return e&&b_(t.prototype,e),n&&b_(t,n),t}function yN(t,e){return e&&(wc(e)==="object"||typeof e=="function")?e:_c(t)}function xp(t){return xp=Object.setPrototypeOf?Object.getPrototypeOf:function(n){return n.__proto__||Object.getPrototypeOf(n)},xp(t)}function _c(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function vN(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&Lp(t,e)}function Lp(t,e){return Lp=Object.setPrototypeOf||function(r,i){return r.__proto__=i,r},Lp(t,e)}function Ec(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var wN=function(t){vN(e,t);function e(){var n,r;mN(this,e);for(var i=arguments.length,s=new Array(i),o=0;o<i;o++)s[o]=arguments[o];return r=yN(this,(n=xp(e)).call.apply(n,[this].concat(s))),Ec(_c(r),"state",{bootstrapped:!1}),Ec(_c(r),"_unsubscribe",void 0),Ec(_c(r),"handlePersistorState",function(){var a=r.props.persistor,u=a.getState(),l=u.bootstrapped;l&&(r.props.onBeforeLift?Promise.resolve(r.props.onBeforeLift()).finally(function(){return r.setState({bootstrapped:!0})}):r.setState({bootstrapped:!0}),r._unsubscribe&&r._unsubscribe())}),r}return gN(e,[{key:"componentDidMount",value:function(){this._unsubscribe=this.props.persistor.subscribe(this.handlePersistorState),this.handlePersistorState()}},{key:"componentWillUnmount",value:function(){this._unsubscribe&&this._unsubscribe()}},{key:"render",value:function(){return typeof this.props.children=="function"?this.props.children(this.state.bootstrapped):this.state.bootstrapped?this.props.children:this.props.loading}}]),e}(V.exports.PureComponent);Ec(wN,"defaultProps",{children:null,loading:null});var mi,Mp=mi||(mi={});Mp.Pop="POP";Mp.Push="PUSH";Mp.Replace="REPLACE";var C_=function(t){return t};function P_(t){t.preventDefault(),t.returnValue=""}function N_(){var t=[];return{get length(){return t.length},push:function(e){return t.push(e),function(){t=t.filter(function(n){return n!==e})}},call:function(e){t.forEach(function(n){return n&&n(e)})}}}function _N(){return Math.random().toString(36).substr(2,8)}function $p(t){var e=t.pathname;e=e===void 0?"/":e;var n=t.search;return n=n===void 0?"":n,t=t.hash,t=t===void 0?"":t,n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),t&&t!=="#"&&(e+=t.charAt(0)==="#"?t:"#"+t),e}function gi(t){var e={};if(t){var n=t.indexOf("#");0<=n&&(e.hash=t.substr(n),t=t.substr(0,n)),n=t.indexOf("?"),0<=n&&(e.search=t.substr(n),t=t.substr(0,n)),t&&(e.pathname=t)}return e}function EN(t){function e(){var p=u.location,f=l.state||{};return[f.idx,C_({pathname:p.pathname,search:p.search,hash:p.hash,state:f.usr||null,key:f.key||"default"})]}function n(p){return typeof p=="string"?p:$p(p)}function r(p,f){return f===void 0&&(f=null),C_(Dr({pathname:m.pathname,hash:"",search:""},typeof p=="string"?gi(p):p,{state:f,key:_N()}))}function i(p){h=p,p=e(),d=p[0],m=p[1],_.call({action:h,location:m})}function s(p,f){function y(){s(p,f)}var S=mi.Push,v=r(p,f);if(!E.length||(E.call({action:S,location:v,retry:y}),!1)){var A=[{usr:v.state,key:v.key,idx:d+1},n(v)];v=A[0],A=A[1];try{l.pushState(v,"",A)}catch{u.location.assign(A)}i(S)}}function o(p,f){function y(){o(p,f)}var S=mi.Replace,v=r(p,f);E.length&&(E.call({action:S,location:v,retry:y}),1)||(v=[{usr:v.state,key:v.key,idx:d},n(v)],l.replaceState(v[0],"",v[1]),i(S))}function a(p){l.go(p)}t===void 0&&(t={}),t=t.window;var u=t===void 0?document.defaultView:t,l=u.history,c=null;u.addEventListener("popstate",function(){if(c)E.call(c),c=null;else{var p=mi.Pop,f=e(),y=f[0];if(f=f[1],E.length){if(y!=null){var S=d-y;S&&(c={action:p,location:f,retry:function(){a(-1*S)}},a(S))}}else i(p)}});var h=mi.Pop;t=e();var d=t[0],m=t[1],_=N_(),E=N_();return d==null&&(d=0,l.replaceState(Dr({},l.state,{idx:d}),"")),{get action(){return h},get location(){return m},createHref:n,push:s,replace:o,go:a,back:function(){a(-1)},forward:function(){a(1)},listen:function(p){return _.push(p)},block:function(p){var f=E.push(p);return E.length===1&&u.addEventListener("beforeunload",P_),function(){f(),E.length||u.removeEventListener("beforeunload",P_)}}}}/**
 * React Router v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function vn(t,e){if(!t)throw new Error(e)}const Fp=V.exports.createContext(null),Up=V.exports.createContext(null),Ps=V.exports.createContext({outlet:null,matches:[]});function ej(t){let{to:e,replace:n,state:r}=t;Ns()||vn(!1);let i=A_();return V.exports.useEffect(()=>{i(e,{replace:n,state:r})}),null}function IN(t){return CN(t.context)}function SN(t){vn(!1)}function TN(t){let{basename:e="/",children:n=null,location:r,navigationType:i=mi.Pop,navigator:s,static:o=!1}=t;Ns()&&vn(!1);let a=KN(e),u=V.exports.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=gi(r));let{pathname:l="/",search:c="",hash:h="",state:d=null,key:m="default"}=r,_=V.exports.useMemo(()=>{let E=L_(l,a);return E==null?null:{pathname:E,search:c,hash:h,state:d,key:m}},[a,l,c,h,d,m]);return _==null?null:V.exports.createElement(Fp.Provider,{value:u},V.exports.createElement(Up.Provider,{children:n,value:{location:_,navigationType:i}}))}function tj(t){let{children:e,location:n}=t;return PN(Vp(e),n)}function kN(t){Ns()||vn(!1);let{basename:e,navigator:n}=V.exports.useContext(Fp),{hash:r,pathname:i,search:s}=R_(t),o=i;if(e!=="/"){let a=HN(t),u=a!=null&&a.endsWith("/");o=i==="/"?e+(u?"/":""):xr([e,i])}return n.createHref({pathname:o,search:s,hash:r})}function Ns(){return V.exports.useContext(Up)!=null}function Ic(){return Ns()||vn(!1),V.exports.useContext(Up).location}function A_(){Ns()||vn(!1);let{basename:t,navigator:e}=V.exports.useContext(Fp),{matches:n}=V.exports.useContext(Ps),{pathname:r}=Ic(),i=JSON.stringify(n.map(a=>a.pathnameBase)),s=V.exports.useRef(!1);return V.exports.useEffect(()=>{s.current=!0}),V.exports.useCallback(function(a,u){if(u===void 0&&(u={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let l=x_(a,JSON.parse(i),r);t!=="/"&&(l.pathname=xr([t,l.pathname])),(u.replace?e.replace:e.push)(l,u.state)},[t,e,i,r])}const bN=V.exports.createContext(null);function CN(t){let e=V.exports.useContext(Ps).outlet;return e&&V.exports.createElement(bN.Provider,{value:t},e)}function nj(){let{matches:t}=V.exports.useContext(Ps),e=t[t.length-1];return e?e.params:{}}function R_(t){let{matches:e}=V.exports.useContext(Ps),{pathname:n}=Ic(),r=JSON.stringify(e.map(i=>i.pathnameBase));return V.exports.useMemo(()=>x_(t,JSON.parse(r),n),[t,r,n])}function PN(t,e){Ns()||vn(!1);let{matches:n}=V.exports.useContext(Ps),r=n[n.length-1],i=r?r.params:{};r&&r.pathname;let s=r?r.pathnameBase:"/";r&&r.route;let o=Ic(),a;if(e){var u;let d=typeof e=="string"?gi(e):e;s==="/"||((u=d.pathname)==null?void 0:u.startsWith(s))||vn(!1),a=d}else a=o;let l=a.pathname||"/",c=s==="/"?l:l.slice(s.length)||"/",h=NN(t,{pathname:c});return VN(h&&h.map(d=>Object.assign({},d,{params:Object.assign({},i,d.params),pathname:xr([s,d.pathname]),pathnameBase:d.pathnameBase==="/"?s:xr([s,d.pathnameBase])})),n)}function Vp(t){let e=[];return V.exports.Children.forEach(t,n=>{if(!V.exports.isValidElement(n))return;if(n.type===V.exports.Fragment){e.push.apply(e,Vp(n.props.children));return}n.type!==SN&&vn(!1);let r={caseSensitive:n.props.caseSensitive,element:n.props.element,index:n.props.index,path:n.props.path};n.props.children&&(r.children=Vp(n.props.children)),e.push(r)}),e}function NN(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?gi(e):e,i=L_(r.pathname||"/",n);if(i==null)return null;let s=O_(t);AN(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=UN(s[a],i);return o}function O_(t,e,n,r){return e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r=""),t.forEach((i,s)=>{let o={relativePath:i.path||"",caseSensitive:i.caseSensitive===!0,childrenIndex:s,route:i};o.relativePath.startsWith("/")&&(o.relativePath.startsWith(r)||vn(!1),o.relativePath=o.relativePath.slice(r.length));let a=xr([r,o.relativePath]),u=n.concat(o);i.children&&i.children.length>0&&(i.index===!0&&vn(!1),O_(i.children,e,u,a)),!(i.path==null&&!i.index)&&e.push({path:a,score:$N(a,i.index),routesMeta:u})}),e}function AN(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:FN(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const RN=/^:\w+$/,ON=3,DN=2,xN=1,LN=10,MN=-2,D_=t=>t==="*";function $N(t,e){let n=t.split("/"),r=n.length;return n.some(D_)&&(r+=MN),e&&(r+=DN),n.filter(i=>!D_(i)).reduce((i,s)=>i+(RN.test(s)?ON:s===""?xN:LN),r)}function FN(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function UN(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],u=o===n.length-1,l=i==="/"?e:e.slice(i.length)||"/",c=jN({path:a.relativePath,caseSensitive:a.caseSensitive,end:u},l);if(!c)return null;Object.assign(r,c.params);let h=a.route;s.push({params:r,pathname:xr([i,c.pathname]),pathnameBase:xr([i,c.pathnameBase]),route:h}),c.pathnameBase!=="/"&&(i=xr([i,c.pathnameBase]))}return s}function VN(t,e){return e===void 0&&(e=[]),t==null?null:t.reduceRight((n,r,i)=>V.exports.createElement(Ps.Provider,{children:r.route.element!==void 0?r.route.element:V.exports.createElement(IN,null),value:{outlet:n,matches:e.concat(t.slice(0,i+1))}}),null)}function jN(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=BN(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((l,c,h)=>{if(c==="*"){let d=a[h]||"";o=s.slice(0,s.length-d.length).replace(/(.)\/+$/,"$1")}return l[c]=qN(a[h]||""),l},{}),pathname:s,pathnameBase:o,pattern:t}}function BN(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0);let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/:(\w+)/g,(o,a)=>(r.push(a),"([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):i+=n?"\\/*$":"(?:\\b|\\/|$)",[new RegExp(i,e?void 0:"i"),r]}function qN(t,e){try{return decodeURIComponent(t)}catch{return t}}function zN(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?gi(t):t;return{pathname:n?n.startsWith("/")?n:WN(n,e):e,search:GN(r),hash:QN(i)}}function WN(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function x_(t,e,n){let r=typeof t=="string"?gi(t):t,i=t===""||r.pathname===""?"/":r.pathname,s;if(i==null)s=n;else{let a=e.length-1;if(i.startsWith("..")){let u=i.split("/");for(;u[0]==="..";)u.shift(),a-=1;r.pathname=u.join("/")}s=a>=0?e[a]:"/"}let o=zN(r,s);return i&&i!=="/"&&i.endsWith("/")&&!o.pathname.endsWith("/")&&(o.pathname+="/"),o}function HN(t){return t===""||t.pathname===""?"/":typeof t=="string"?gi(t).pathname:t.pathname}function L_(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=t.charAt(e.length);return n&&n!=="/"?null:t.slice(e.length)||"/"}const xr=t=>t.join("/").replace(/\/\/+/g,"/"),KN=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),GN=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,QN=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;/**
 * React Router DOM v6.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function jp(){return jp=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},jp.apply(this,arguments)}function YN(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}const JN=["onClick","reloadDocument","replace","state","target","to"];function rj(t){let{basename:e,children:n,window:r}=t,i=V.exports.useRef();i.current==null&&(i.current=EN({window:r}));let s=i.current,[o,a]=V.exports.useState({action:s.action,location:s.location});return V.exports.useLayoutEffect(()=>s.listen(a),[s]),V.exports.createElement(TN,{basename:e,children:n,location:o.location,navigationType:o.action,navigator:s})}function XN(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}const ij=V.exports.forwardRef(function(e,n){let{onClick:r,reloadDocument:i,replace:s=!1,state:o,target:a,to:u}=e,l=YN(e,JN),c=kN(u),h=ZN(u,{replace:s,state:o,target:a});function d(m){r&&r(m),!m.defaultPrevented&&!i&&h(m)}return V.exports.createElement("a",jp({},l,{href:c,onClick:d,ref:n,target:a}))});function ZN(t,e){let{target:n,replace:r,state:i}=e===void 0?{}:e,s=A_(),o=Ic(),a=R_(t);return V.exports.useCallback(u=>{if(u.button===0&&(!n||n==="_self")&&!XN(u)){u.preventDefault();let l=!!r||$p(o)===$p(a);s(t,{replace:l,state:i})}},[o,s,a,r,i,n,t])}var Sc="NOT_FOUND";function eA(t){var e;return{get:function(r){return e&&t(e.key,r)?e.value:Sc},put:function(r,i){e={key:r,value:i}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}function tA(t,e){var n=[];function r(a){var u=n.findIndex(function(c){return e(a,c.key)});if(u>-1){var l=n[u];return u>0&&(n.splice(u,1),n.unshift(l)),l.value}return Sc}function i(a,u){r(a)===Sc&&(n.unshift({key:a,value:u}),n.length>t&&n.pop())}function s(){return n}function o(){n=[]}return{get:r,put:i,getEntries:s,clear:o}}var nA=function(e,n){return e===n};function rA(t){return function(n,r){if(n===null||r===null||n.length!==r.length)return!1;for(var i=n.length,s=0;s<i;s++)if(!t(n[s],r[s]))return!1;return!0}}function iA(t,e){var n=typeof e=="object"?e:{equalityCheck:e},r=n.equalityCheck,i=r===void 0?nA:r,s=n.maxSize,o=s===void 0?1:s,a=n.resultEqualityCheck,u=rA(i),l=o===1?eA(u):tA(o,u);function c(){var h=l.get(arguments);if(h===Sc){if(h=t.apply(null,arguments),a){var d=l.getEntries(),m=d.find(function(_){return a(_.value,h)});m&&(h=m.value)}l.put(arguments,h)}return h}return c.clearCache=function(){return l.clear()},c}function sA(t){var e=Array.isArray(t[0])?t[0]:t;if(!e.every(function(r){return typeof r=="function"})){var n=e.map(function(r){return typeof r=="function"?"function "+(r.name||"unnamed")+"()":typeof r}).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+n+"]")}return e}function oA(t){for(var e=arguments.length,n=new Array(e>1?e-1:0),r=1;r<e;r++)n[r-1]=arguments[r];var i=function(){for(var o=arguments.length,a=new Array(o),u=0;u<o;u++)a[u]=arguments[u];var l=0,c,h={memoizeOptions:void 0},d=a.pop();if(typeof d=="object"&&(h=d,d=a.pop()),typeof d!="function")throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof d+"]");var m=h,_=m.memoizeOptions,E=_===void 0?n:_,p=Array.isArray(E)?E:[E],f=sA(a),y=t.apply(void 0,[function(){return l++,d.apply(null,arguments)}].concat(p)),S=t(function(){for(var v=[],A=f.length,k=0;k<A;k++)v.push(f[k].apply(null,arguments));return c=y.apply(null,v),c});return Object.assign(S,{resultFunc:d,memoizedResultFunc:y,dependencies:f,lastResult:function(){return c},recomputations:function(){return l},resetRecomputations:function(){return l=0}}),S};return i}var aA=oA(iA),sj=function(e,n){if(n===void 0&&(n=aA),typeof e!="object")throw new Error("createStructuredSelector expects first argument to be an object "+("where each property is a selector, instead received a "+typeof e));var r=Object.keys(e),i=n(r.map(function(s){return e[s]}),function(){for(var s=arguments.length,o=new Array(s),a=0;a<s;a++)o[a]=arguments[a];return o.reduce(function(u,l,c){return u[r[c]]=l,u},{})});return i};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)==55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)==56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},uA=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},$_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,u=i+2<t.length,l=u?t[i+2]:0,c=s>>2,h=(s&3)<<4|a>>4;let d=(a&15)<<2|l>>6,m=l&63;u||(m=64,o||(d=64)),r.push(n[c],n[h],n[d],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(M_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):uA(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const l=i<t.length?n[t.charAt(i)]:64;++i;const h=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||l==null||h==null)throw Error();const d=s<<2|a>>4;if(r.push(d),l!==64){const m=a<<4&240|l>>2;if(r.push(m),h!==64){const _=l<<6&192|h;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},lA=function(t){const e=M_(t);return $_.encodeByteArray(e,!0)},F_=function(t){return lA(t).replace(/\./g,"")},cA=function(t){try{return $_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Tc(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!hA(n)||(t[n]=Tc(t[n],e[n]));return t}function hA(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dA{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fA(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[F_(JSON.stringify(n)),F_(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fe(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function U_(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(fe())}function Bp(){try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function pA(){return typeof self=="object"&&self.self===self}function qp(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function kc(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function mA(){return fe().indexOf("Electron/")>=0}function zp(){const t=fe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function gA(){return fe().indexOf("MSAppHost/")>=0}function yA(){return!Bp()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function bc(){return typeof indexedDB=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vA="FirebaseError";class Ht extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=vA,Object.setPrototypeOf(this,Ht.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,yi.prototype.create)}}class yi{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?wA(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ht(i,a,r)}}function wA(t,e){return t.replace(_A,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const _A=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V_(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function EA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Wp(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(j_(s)&&j_(o)){if(!Wp(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function j_(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Rs(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function La(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function B_(t,e){const n=new IA(t,e);return n.subscribe.bind(n)}class IA{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");SA(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Hp),i.error===void 0&&(i.error=Hp),i.complete===void 0&&(i.complete=Hp);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function SA(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Hp(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new dA;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(bA(e))try{this.getOrInitializeService({instanceIdentifier:vi})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=vi){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=vi){return this.instances.has(e)}getOptions(e=vi){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:kA(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=vi){return this.component?this.component.multipleInstances?e:vi:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function kA(t){return t===vi?void 0:t}function bA(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new TA(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kp=[];var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const q_={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},PA=ee.INFO,NA={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},AA=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=NA[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Cc{constructor(e){this.name=e,this._logLevel=PA,this._logHandler=AA,this._userLogHandler=null,Kp.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?q_[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}function RA(t){Kp.forEach(e=>{e.setLogLevel(t)})}function OA(t,e){for(const n of Kp){let r=null;e&&e.level&&(r=q_[e.level]),t===null?n.userLogHandler=null:n.userLogHandler=(i,s,...o)=>{const a=o.map(u=>{if(u==null)return null;if(typeof u=="string")return u;if(typeof u=="number"||typeof u=="boolean")return u.toString();if(u instanceof Error)return u.message;try{return JSON.stringify(u)}catch{return null}}).filter(u=>u).join(" ");s>=(r!=null?r:i.logLevel)&&t({level:ee[s].toLowerCase(),message:a,args:o,type:i.name})}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(xA(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function xA(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Gp="@firebase/app",z_="0.7.15";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qp=new Cc("@firebase/app"),LA="@firebase/app-compat",MA="@firebase/analytics-compat",$A="@firebase/analytics",FA="@firebase/app-check-compat",UA="@firebase/app-check",VA="@firebase/auth",jA="@firebase/auth-compat",BA="@firebase/database",qA="@firebase/database-compat",zA="@firebase/functions",WA="@firebase/functions-compat",HA="@firebase/installations",KA="@firebase/installations-compat",GA="@firebase/messaging",QA="@firebase/messaging-compat",YA="@firebase/performance",JA="@firebase/performance-compat",XA="@firebase/remote-config",ZA="@firebase/remote-config-compat",eR="@firebase/storage",tR="@firebase/storage-compat",nR="@firebase/firestore",rR="@firebase/firestore-compat",iR="firebase",sR="9.6.5";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",oR={[Gp]:"fire-core",[LA]:"fire-core-compat",[$A]:"fire-analytics",[MA]:"fire-analytics-compat",[UA]:"fire-app-check",[FA]:"fire-app-check-compat",[VA]:"fire-auth",[jA]:"fire-auth-compat",[BA]:"fire-rtdb",[qA]:"fire-rtdb-compat",[zA]:"fire-fn",[WA]:"fire-fn-compat",[HA]:"fire-iid",[KA]:"fire-iid-compat",[GA]:"fire-fcm",[QA]:"fire-fcm-compat",[YA]:"fire-perf",[JA]:"fire-perf-compat",[XA]:"fire-rc",[ZA]:"fire-rc-compat",[eR]:"fire-gcs",[tR]:"fire-gcs-compat",[nR]:"fire-fst",[rR]:"fire-fst-compat","fire-js":"fire-js",[iR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map,Ma=new Map;function Pc(t,e){try{t.container.addComponent(e)}catch(n){Qp.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function W_(t,e){t.container.addOrOverwriteComponent(e)}function _i(t){const e=t.name;if(Ma.has(e))return Qp.debug(`There were multiple attempts to register component ${e}.`),!1;Ma.set(e,t);for(const n of Lr.values())Pc(n,t);return!0}function H_(t,e){return t.container.getProvider(e)}function aR(t,e,n=wi){H_(t,e).clearInstance(n)}function uR(){Ma.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},$a=new yi("app","Firebase",lR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw $a.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=sR;function K_(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:wi,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw $a.create("bad-app-name",{appName:String(r)});const i=Lr.get(r);if(i){if(Wp(t,i.options)&&Wp(n,i.config))return i;throw $a.create("duplicate-app",{appName:r})}const s=new CA(r);for(const a of Ma.values())s.addComponent(a);const o=new cR(t,n,s);return Lr.set(r,o),o}function hR(t=wi){const e=Lr.get(t);if(!e)throw $a.create("no-app",{appName:t});return e}function dR(){return Array.from(Lr.values())}async function G_(t){const e=t.name;Lr.has(e)&&(Lr.delete(e),await Promise.all(t.container.getProviders().map(n=>n.delete())),t.isDeleted=!0)}function On(t,e,n){var r;let i=(r=oR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Qp.warn(a.join(" "));return}_i(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}function Q_(t,e){if(t!==null&&typeof t!="function")throw $a.create("invalid-log-argument");OA(t,e)}function Y_(t){RA(t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fR(t){_i(new Jn("platform-logger",e=>new DA(e),"PRIVATE")),On(Gp,z_,t),On(Gp,z_,"esm2017"),On("fire-js","")}fR("");var pR=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",SDK_VERSION:Ei,_DEFAULT_ENTRY_NAME:wi,_addComponent:Pc,_addOrOverwriteComponent:W_,_apps:Lr,_clearComponents:uR,_components:Ma,_getProvider:H_,_registerComponent:_i,_removeServiceInstance:aR,deleteApp:G_,getApp:hR,getApps:dR,initializeApp:K_,onLog:Q_,registerVersion:On,setLogLevel:Y_,FirebaseError:Ht});/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mR{constructor(e,n){this._delegate=e,this.firebase=n,Pc(e,new Jn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),G_(this._delegate)))}_getService(e,n=wi){var r;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return!i.isInitialized()&&((r=i.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&i.initialize(),i.getImmediate({identifier:n})}_removeServiceInstance(e,n=wi){this._delegate.container.getProvider(e).clearInstance(n)}_addComponent(e){Pc(this._delegate,e)}_addOrOverwriteComponent(e){W_(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},J_=new yi("app-compat","Firebase",gR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yR(t){const e={},n={__esModule:!0,initializeApp:s,app:i,registerVersion:On,setLogLevel:Y_,onLog:Q_,apps:null,SDK_VERSION:Ei,INTERNAL:{registerComponent:a,removeApp:r,useAsService:u,modularAPIs:pR}};n.default=n,Object.defineProperty(n,"apps",{get:o});function r(l){delete e[l]}function i(l){if(l=l||wi,!V_(e,l))throw J_.create("no-app",{appName:l});return e[l]}i.App=t;function s(l,c={}){const h=K_(l,c);if(V_(e,h.name))return e[h.name];const d=new t(h,n);return e[h.name]=d,d}function o(){return Object.keys(e).map(l=>e[l])}function a(l){const c=l.name,h=c.replace("-compat","");if(_i(l)&&l.type==="PUBLIC"){const d=(m=i())=>{if(typeof m[h]!="function")throw J_.create("invalid-app-argument",{appName:c});return m[h]()};l.serviceProps!==void 0&&Tc(d,l.serviceProps),n[h]=d,t.prototype[h]=function(...m){return this._getService.bind(this,c).apply(this,l.multipleInstances?m:[])}}return l.type==="PUBLIC"?n[h]:null}function u(l,c){return c==="serverAuth"?null:c}return n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X_(){const t=yR(mR);t.INTERNAL=Object.assign(Object.assign({},t.INTERNAL),{createFirebaseNamespace:X_,extendNamespace:e,createSubscribe:B_,ErrorFactory:yi,deepExtend:Tc});function e(n){Tc(t,n)}return t}const vR=X_();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Z_=new Cc("@firebase/app-compat"),wR="@firebase/app-compat",_R="0.1.16";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ER(t){On(wR,_R,t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(pA()&&self.firebase!==void 0){Z_.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const t=self.firebase.SDK_VERSION;t&&t.indexOf("LITE")>=0&&Z_.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const Fa=vR;ER();var IR="firebase",SR="9.6.5";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fa.registerVersion(IR,SR,"app-compat");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Yp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}const Ua={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Os={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function eE(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const kR=TR,bR=eE,tE=new yi("auth","Firebase",eE());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nE=new Cc("@firebase/auth");function Nc(t,...e){nE.logLevel<=ee.ERROR&&nE.error(`Auth (${Ei}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rt(t,...e){throw Jp(t,...e)}function it(t,...e){return Jp(t,...e)}function rE(t,e,n){const r=Object.assign(Object.assign({},bR()),{[e]:n});return new yi("auth","Firebase",r).create(e,{appName:t.name})}function Ds(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&rt(t,"argument-error"),rE(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Jp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return tE.create(t,...e)}function N(t,e,...n){if(!t)throw Jp(e,...n)}function Dn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Nc(e),new Error(e)}function wn(t,e){t||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iE=new Map;function Kt(t){wn(t instanceof Function,"Expected a class definition");let e=iE.get(t);return e?(wn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,iE.set(t,e),e)}function CR(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Kt);(e==null?void 0:e.errorMap)&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Va(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Xp(){return sE()==="http:"||sE()==="https:"}function sE(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PR(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Xp()||qp()||"connection"in navigator)?navigator.onLine:!0}function NR(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,n){this.shortDelay=e,this.longDelay=n,wn(n>e,"Short delay should be less than long delay!"),this.isMobile=U_()||kc()}get(){return PR()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e){wn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AR={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RR=new ja(3e4,6e4);function Me(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ze(t,e,n,r,i={}){return aE(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=As(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),oE.fetch()(uE(t,t.config.apiHost,n,a),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function aE(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},AR),e);try{const i=new OR(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Ac(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Ac(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Ac(t,"email-already-in-use",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw rE(t,c,l);rt(t,c)}}catch(i){if(i instanceof Ht)throw i;rt(t,"network-request-failed")}}async function Xn(t,e,n,r,i={}){const s=await ze(t,e,n,r,i);return"mfaPendingCredential"in s&&rt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function uE(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Zp(t.config,i):`${t.config.apiScheme}://${i}`}class OR{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(it(this.auth,"network-request-failed")),RR.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Ac(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=it(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DR(t,e){return ze(t,"POST","/v1/accounts:delete",e)}async function xR(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function LR(t,e){return ze(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ba(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function MR(t,e=!1){const n=q(t),r=await n.getIdToken(e),i=Rc(r);N(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ba(em(i.auth_time)),issuedAtTime:Ba(em(i.iat)),expirationTime:Ba(em(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function em(t){return Number(t)*1e3}function Rc(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Nc("JWT malformed, contained fewer than 3 sections"),null;try{const i=cA(n);return i?JSON.parse(i):(Nc("Failed to decode base64 JWT payload"),null)}catch(i){return Nc("Caught error parsing JWT payload as JSON",i),null}}function $R(t){const e=Rc(t);return N(e,"internal-error"),N(typeof e.exp!="undefined","internal-error"),N(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zn(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ht&&FR(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function FR({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UR{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lE{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ba(this.lastLoginAt),this.creationTime=Ba(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qa(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Zn(t,LR(n,{idToken:r}));N(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=((e=s.providerUserInfo)===null||e===void 0?void 0:e.length)?BR(s.providerUserInfo):[],a=jR(t.providerData,o),u=t.isAnonymous,l=!(t.email&&s.passwordHash)&&!(a==null?void 0:a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new lE(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,h)}async function VR(t){const e=q(t);await qa(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jR(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function BR(t){return t.map(e=>{var{providerId:n}=e,r=Yp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qR(t,e){const n=await aE(t,{},async()=>{const r=As({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=uE(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",oE.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){N(e.idToken,"internal-error"),N(typeof e.idToken!="undefined","internal-error"),N(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):$R(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return N(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await qR(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new za;return r&&(N(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(N(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(N(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new za,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mr(t,e){N(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class Ii{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new UR(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.metadata=new lE(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Zn(this,this.stsTokenManager.getToken(this.auth,e));return N(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return MR(this,e)}reload(){return VR(this)}_assign(e){this!==e&&(N(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new Ii(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){N(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await qa(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Zn(this,DR(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,u,l,c;const h=(r=n.displayName)!==null&&r!==void 0?r:void 0,d=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,p=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,f=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:S,emailVerified:v,isAnonymous:A,providerData:k,stsTokenManager:M}=n;N(S&&M,e,"internal-error");const j=za.fromJSON(this.name,M);N(typeof S=="string",e,"internal-error"),Mr(h,e.name),Mr(d,e.name),N(typeof v=="boolean",e,"internal-error"),N(typeof A=="boolean",e,"internal-error"),Mr(m,e.name),Mr(_,e.name),Mr(E,e.name),Mr(p,e.name),Mr(f,e.name),Mr(y,e.name);const x=new Ii({uid:S,auth:e,email:d,emailVerified:v,displayName:h,isAnonymous:A,photoURL:_,phoneNumber:m,tenantId:E,stsTokenManager:j,createdAt:f,lastLoginAt:y});return k&&Array.isArray(k)&&(x.providerData=k.map(ne=>Object.assign({},ne))),p&&(x._redirectEventId=p),x}static async _fromIdTokenResponse(e,n,r=!1){const i=new za;i.updateFromServerResponse(n);const s=new Ii({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await qa(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cE{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}cE.type="NONE";const xs=cE;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Si(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Si(this.userKey,i.apiKey,s),this.fullPersistenceKey=Si("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Ii._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ls(Kt(xs),e,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Kt(xs);const o=Si(r,e.config.apiKey,e.name);let a=null;for(const l of n)try{const c=await l._get(o);if(c){const h=Ii._fromJSON(e,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new Ls(s,e,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new Ls(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hE(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(pE(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(dE(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(mE(e))return"Blackberry";if(gE(e))return"Webos";if(tm(e))return"Safari";if((e.includes("chrome/")||fE(e))&&!e.includes("edge/"))return"Chrome";if(Wa(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function dE(t=fe()){return/firefox\//i.test(t)}function tm(t=fe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function fE(t=fe()){return/crios\//i.test(t)}function pE(t=fe()){return/iemobile/i.test(t)}function Wa(t=fe()){return/android/i.test(t)}function mE(t=fe()){return/blackberry/i.test(t)}function gE(t=fe()){return/webos/i.test(t)}function Ms(t=fe()){return/iphone|ipad|ipod/i.test(t)}function zR(t=fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(t)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(t)}function WR(t=fe()){var e;return Ms(t)&&!!((e=window.navigator)===null||e===void 0?void 0:e.standalone)}function HR(){return zp()&&document.documentMode===10}function yE(t=fe()){return Ms(t)||Wa(t)||gE(t)||mE(t)||/windows phone/i.test(t)||pE(t)}function KR(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vE(t,e=[]){let n;switch(t){case"Browser":n=hE(fe());break;case"Worker":n=`${hE(fe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ei}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GR{constructor(e,n){this.app=e,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wE(this),this.idTokenSubscription=new wE(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=tE,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Kt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),!this._deleted)){if((r=this._popupRedirectResolver)===null||r===void 0?void 0:r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(N(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await qa(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=NR()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?q(e):null;return n&&N(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&N(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Kt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new yi("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Kt(e)||this._popupRedirectResolver;N(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[Kt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return N(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return N(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=vE(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function We(t){return q(t)}class wE{constructor(e){this.auth=e,this.observer=null,this.addObserver=B_(n=>this.observer=n)}get next(){return N(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function QR(t,e,n){const r=We(t);N(r._canInitEmulator,r,"emulator-config-failed"),N(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n==null?void 0:n.disableWarnings),s=_E(e),{host:o,port:a}=YR(e),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||JR()}function _E(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function YR(t){const e=_E(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:EE(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:EE(o)}}}function EE(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function JR(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console!="undefined"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window!="undefined"&&typeof document!="undefined"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $s{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,n){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function IE(t,e){return ze(t,"POST","/v1/accounts:resetPassword",Me(t,e))}async function SE(t,e){return ze(t,"POST","/v1/accounts:update",e)}async function XR(t,e){return ze(t,"POST","/v1/accounts:update",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZR(t,e){return Xn(t,"POST","/v1/accounts:signInWithPassword",Me(t,e))}async function Oc(t,e){return ze(t,"POST","/v1/accounts:sendOobCode",Me(t,e))}async function eO(t,e){return Oc(t,e)}async function tO(t,e){return Oc(t,e)}async function nO(t,e){return Oc(t,e)}async function rO(t,e){return Oc(t,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function iO(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}async function sO(t,e){return Xn(t,"POST","/v1/accounts:signInWithEmailLink",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ha extends $s{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ha(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ha(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return ZR(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return iO(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return SE(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return sO(e,{idToken:n,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function er(t,e){return Xn(t,"POST","/v1/accounts:signInWithIdp",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oO="http://localhost";class xn extends $s{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):rt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Yp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new xn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}buildRequest(){const e={requestUri:oO,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=As(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function aO(t,e){return ze(t,"POST","/v1/accounts:sendVerificationCode",Me(t,e))}async function uO(t,e){return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e))}async function lO(t,e){const n=await Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,e));if(n.temporaryProof)throw Ac(t,"account-exists-with-different-credential",n);return n}const cO={USER_NOT_FOUND:"user-not-found"};async function hO(t,e){const n=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Xn(t,"POST","/v1/accounts:signInWithPhoneNumber",Me(t,n),cO)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ti extends $s{constructor(e){super("phone","phone");this.params=e}static _fromVerification(e,n){return new Ti({verificationId:e,verificationCode:n})}static _fromTokenResponse(e,n){return new Ti({phoneNumber:e,temporaryProof:n})}_getIdTokenResponse(e){return uO(e,this._makeVerificationRequest())}_linkToIdToken(e,n){return lO(e,Object.assign({idToken:n},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return hO(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:n,verificationId:r,verificationCode:i}=this.params;return e&&n?{temporaryProof:e,phoneNumber:n}:{sessionInfo:r,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s}=e;return!r&&!n&&!i&&!s?null:new Ti({verificationId:n,verificationCode:r,phoneNumber:i,temporaryProof:s})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dO(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function fO(t){const e=Rs(La(t)).link,n=e?Rs(La(e)).deep_link_id:null,r=Rs(La(t)).deep_link_id;return(r?Rs(La(r)).link:null)||r||n||e||t}class Dc{constructor(e){var n,r,i,s,o,a;const u=Rs(La(e)),l=(n=u.apiKey)!==null&&n!==void 0?n:null,c=(r=u.oobCode)!==null&&r!==void 0?r:null,h=dO((i=u.mode)!==null&&i!==void 0?i:null);N(l&&c&&h,"argument-error"),this.apiKey=l,this.operation=h,this.code=c,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=u.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=fO(e);try{return new Dc(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(){this.providerId=$r.PROVIDER_ID}static credential(e,n){return Ha._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Dc.parseLink(n);return N(r,"argument-error"),Ha._fromEmailAndCode(e,r.code,r.tenantId)}}$r.PROVIDER_ID="password";$r.EMAIL_PASSWORD_SIGN_IN_METHOD="password";$r.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs extends tr{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class Us extends Fs{static credentialFromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;return N("providerId"in n&&"signInMethod"in n,"argument-error"),xn._fromParams(n)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return N(e.idToken||e.accessToken,"argument-error"),xn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return Us.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return Us.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r,oauthTokenSecret:i,pendingToken:s,nonce:o,providerId:a}=e;if(!r&&!i&&!n&&!s||!a)return null;try{return new Us(a)._credential({idToken:n,accessToken:r,nonce:o,pendingToken:s})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln extends Fs{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:Ln.PROVIDER_ID,signInMethod:Ln.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ln.credentialFromTaggedObject(e)}static credentialFromError(e){return Ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ln.credential(e.oauthAccessToken)}catch{return null}}}Ln.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ln.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn extends Fs{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return xn._fromParams({providerId:Mn.PROVIDER_ID,signInMethod:Mn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Mn.credentialFromTaggedObject(e)}static credentialFromError(e){return Mn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Mn.credential(n,r)}catch{return null}}}Mn.GOOGLE_SIGN_IN_METHOD="google.com";Mn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends Fs{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:$n.PROVIDER_ID,signInMethod:$n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return $n.credentialFromTaggedObject(e)}static credentialFromError(e){return $n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return $n.credential(e.oauthAccessToken)}catch{return null}}}$n.GITHUB_SIGN_IN_METHOD="github.com";$n.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pO="http://localhost";class Vs extends $s{constructor(e,n){super(e,e);this.pendingToken=n}_getIdTokenResponse(e){const n=this.buildRequest();return er(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,er(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,er(e,n)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i,pendingToken:s}=n;return!r||!i||!s||r!==i?null:new Vs(r,s)}static _create(e,n){return new Vs(e,n)}buildRequest(){return{requestUri:pO,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mO="saml.";class xc extends tr{constructor(e){N(e.startsWith(mO),"argument-error");super(e)}static credentialFromResult(e){return xc.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return xc.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const n=Vs.fromJSON(e);return N(n,"argument-error"),n}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:n,providerId:r}=e;if(!n||!r)return null;try{return Vs._create(r,n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn extends Fs{constructor(){super("twitter.com")}static credential(e,n){return xn._fromParams({providerId:Fn.PROVIDER_ID,signInMethod:Fn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Fn.credentialFromTaggedObject(e)}static credentialFromError(e){return Fn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Fn.credential(n,r)}catch{return null}}}Fn.TWITTER_SIGN_IN_METHOD="twitter.com";Fn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function TE(t,e){return Xn(t,"POST","/v1/accounts:signUp",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class an{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Ii._fromIdTokenResponse(e,r,i),o=kE(r);return new an({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=kE(r);return new an({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function kE(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gO(t){var e;const n=We(t);if(await n._initializationPromise,(e=n.currentUser)===null||e===void 0?void 0:e.isAnonymous)return new an({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await TE(n,{returnSecureToken:!0}),i=await an._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lc extends Ht{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,Lc.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Lc(e,n,r,i)}}function bE(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Lc._fromErrorAndOperation(t,s,e,r):s})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CE(t){return new Set(t.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yO(t,e){const n=q(t);await Mc(!0,n,e);const{providerUserInfo:r}=await xR(n.auth,{idToken:await n.getIdToken(),deleteProvider:[e]}),i=CE(r||[]);return n.providerData=n.providerData.filter(s=>i.has(s.providerId)),i.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function nm(t,e,n=!1){const r=await Zn(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return an._forOperation(t,"link",r)}async function Mc(t,e,n){await qa(e);const r=CE(e.providerData),i=t===!1?"provider-already-linked":"no-such-provider";N(r.has(n)===t,e.auth,i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function PE(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Zn(t,bE(r,i,e,t),n);N(s.idToken,r,"internal-error");const o=Rc(s.idToken);N(o,r,"internal-error");const{sub:a}=o;return N(t.uid===a,r,"user-mismatch"),an._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NE(t,e,n=!1){const r="signIn",i=await bE(t,r,e),s=await an._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function $c(t,e){return NE(We(t),e)}async function AE(t,e){const n=q(t);return await Mc(!1,n,e.providerId),nm(n,e)}async function RE(t,e){return PE(q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vO(t,e){return Xn(t,"POST","/v1/accounts:signInWithCustomToken",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wO(t,e){const n=We(t),r=await vO(n,{token:e,returnSecureToken:!0}),i=await an._fromIdTokenResponse(n,"signIn",r);return await n._updateCurrentUser(i.user),i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fc{constructor(e,n){this.factorId=e,this.uid=n.mfaEnrollmentId,this.enrollmentTime=new Date(n.enrolledAt).toUTCString(),this.displayName=n.displayName}static _fromServerResponse(e,n){return"phoneInfo"in n?rm._fromServerResponse(e,n):rt(e,"internal-error")}}class rm extends Fc{constructor(e){super("phone",e);this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,n){return new rm(n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uc(t,e,n){var r;N(((r=n.url)===null||r===void 0?void 0:r.length)>0,t,"invalid-continue-uri"),N(typeof n.dynamicLinkDomain=="undefined"||n.dynamicLinkDomain.length>0,t,"invalid-dynamic-link-domain"),e.continueUrl=n.url,e.dynamicLinkDomain=n.dynamicLinkDomain,e.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(N(n.iOS.bundleId.length>0,t,"missing-ios-bundle-id"),e.iOSBundleId=n.iOS.bundleId),n.android&&(N(n.android.packageName.length>0,t,"missing-android-pkg-name"),e.androidInstallApp=n.android.installApp,e.androidMinimumVersionCode=n.android.minimumVersion,e.androidPackageName=n.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _O(t,e,n){const r=q(t),i={requestType:"PASSWORD_RESET",email:e};n&&Uc(r,i,n),await tO(r,i)}async function EO(t,e,n){await IE(q(t),{oobCode:e,newPassword:n})}async function IO(t,e){await XR(q(t),{oobCode:e})}async function OE(t,e){const n=q(t),r=await IE(n,{oobCode:e}),i=r.requestType;switch(N(i,n,"internal-error"),i){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":N(r.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":N(r.mfaInfo,n,"internal-error");default:N(r.email,n,"internal-error")}let s=null;return r.mfaInfo&&(s=Fc._fromServerResponse(We(n),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:s},operation:i}}async function SO(t,e){const{data:n}=await OE(q(t),e);return n.email}async function TO(t,e,n){const r=We(t),i=await TE(r,{returnSecureToken:!0,email:e,password:n}),s=await an._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function kO(t,e,n){return $c(q(t),$r.credential(e,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bO(t,e,n){const r=q(t),i={requestType:"EMAIL_SIGNIN",email:e};N(n.handleCodeInApp,r,"argument-error"),n&&Uc(r,i,n),await nO(r,i)}function CO(t,e){const n=Dc.parseLink(e);return(n==null?void 0:n.operation)==="EMAIL_SIGNIN"}async function PO(t,e,n){const r=q(t),i=$r.credentialWithLink(e,n||Va());return N(i._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),$c(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function NO(t,e){return ze(t,"POST","/v1/accounts:createAuthUri",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function AO(t,e){const n=Xp()?Va():"http://localhost",r={identifier:e,continueUri:n},{signinMethods:i}=await NO(q(t),r);return i||[]}async function RO(t,e){const n=q(t),r=await t.getIdToken(),i={requestType:"VERIFY_EMAIL",idToken:r};e&&Uc(n.auth,i,e);const{email:s}=await eO(n.auth,i);s!==t.email&&await t.reload()}async function OO(t,e,n){const r=q(t),i=await t.getIdToken(),s={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:i,newEmail:e};n&&Uc(r.auth,s,n);const{email:o}=await rO(r.auth,s);o!==t.email&&await t.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function DO(t,e){return ze(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xO(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=q(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await Zn(r,DO(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:u})=>u==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function LO(t,e){return DE(q(t),e,null)}function MO(t,e){return DE(q(t),null,e)}async function DE(t,e,n){const{auth:r}=t,s={idToken:await t.getIdToken(),returnSecureToken:!0};e&&(s.email=e),n&&(s.password=n);const o=await Zn(t,SE(r,s));await t._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $O(t){var e,n;if(!t)return null;const{providerId:r}=t,i=t.rawUserInfo?JSON.parse(t.rawUserInfo):{},s=t.isNewUser||t.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(t==null?void 0:t.idToken)){const o=(n=(e=Rc(t.idToken))===null||e===void 0?void 0:e.firebase)===null||n===void 0?void 0:n.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new js(s,a)}}if(!r)return null;switch(r){case"facebook.com":return new FO(s,i);case"github.com":return new UO(s,i);case"google.com":return new VO(s,i);case"twitter.com":return new jO(s,i,t.screenName||null);case"custom":case"anonymous":return new js(s,null);default:return new js(s,r,i)}}class js{constructor(e,n,r={}){this.isNewUser=e,this.providerId=n,this.profile=r}}class xE extends js{constructor(e,n,r,i){super(e,n,r);this.username=i}}class FO extends js{constructor(e,n){super(e,"facebook.com",n)}}class UO extends xE{constructor(e,n){super(e,"github.com",n,typeof(n==null?void 0:n.login)=="string"?n==null?void 0:n.login:null)}}class VO extends js{constructor(e,n){super(e,"google.com",n)}}class jO extends xE{constructor(e,n,r){super(e,"twitter.com",n,r)}}function BO(t){const{user:e,_tokenResponse:n}=t;return e.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:$O(n)}class ki{constructor(e,n){this.type=e,this.credential=n}static _fromIdtoken(e){return new ki("enroll",e)}static _fromMfaPendingCredential(e){return new ki("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var n,r;if(e==null?void 0:e.multiFactorSession){if((n=e.multiFactorSession)===null||n===void 0?void 0:n.pendingCredential)return ki._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if((r=e.multiFactorSession)===null||r===void 0?void 0:r.idToken)return ki._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,r){this.session=e,this.hints=n,this.signInResolver=r}static _fromError(e,n){const r=We(e),i=n.customData._serverResponse,s=(i.mfaInfo||[]).map(a=>Fc._fromServerResponse(r,a));N(i.mfaPendingCredential,r,"internal-error");const o=ki._fromMfaPendingCredential(i.mfaPendingCredential);return new im(o,s,async a=>{const u=await a._process(r,o);delete i.mfaInfo,delete i.mfaPendingCredential;const l=Object.assign(Object.assign({},i),{idToken:u.idToken,refreshToken:u.refreshToken});switch(n.operationType){case"signIn":const c=await an._fromIdTokenResponse(r,n.operationType,l);return await r._updateCurrentUser(c.user),c;case"reauthenticate":return N(n.user,r,"internal-error"),an._forOperation(n.user,n.operationType,l);default:rt(r,"internal-error")}})}async resolveSignIn(e){const n=e;return this.signInResolver(n)}}function qO(t,e){var n;const r=q(t),i=e;return N(e.customData.operationType,r,"argument-error"),N((n=i.customData._serverResponse)===null||n===void 0?void 0:n.mfaPendingCredential,r,"argument-error"),im._fromError(r,i)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zO(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:start",Me(t,e))}function WO(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:finalize",Me(t,e))}function HO(t,e){return ze(t,"POST","/v2/accounts/mfaEnrollment:withdraw",Me(t,e))}class sm{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(n=>{n.mfaInfo&&(this.enrolledFactors=n.mfaInfo.map(r=>Fc._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new sm(e)}async getSession(){return ki._fromIdtoken(await this.user.getIdToken())}async enroll(e,n){const r=e,i=await this.getSession(),s=await Zn(this.user,r._process(this.user.auth,i,n));return await this.user._updateTokensIfNecessary(s),this.user.reload()}async unenroll(e){const n=typeof e=="string"?e:e.uid,r=await this.user.getIdToken(),i=await Zn(this.user,HO(this.user.auth,{idToken:r,mfaEnrollmentId:n}));this.enrolledFactors=this.enrolledFactors.filter(({uid:s})=>s!==n),await this.user._updateTokensIfNecessary(i);try{await this.user.reload()}catch(s){if(s.code!=="auth/user-token-expired")throw s}}}const om=new WeakMap;function KO(t){const e=q(t);return om.has(e)||om.set(e,sm._fromUser(e)),om.get(e)}const Vc="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LE{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Vc,"1"),this.storage.removeItem(Vc),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GO(){const t=fe();return tm(t)||Ms(t)}const QO=1e3,YO=10;class ME extends LE{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=GO()&&KR(),this.fallbackToPolling=yE(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);HR()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,YO):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},QO)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}ME.type="LOCAL";const am=ME;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $E extends LE{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$E.type="SESSION";const bi=$E;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JO(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new jc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o==null?void 0:o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(n.origin,s)),u=await JO(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}jc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ka(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Ka("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:l,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(){return window}function ZO(t){$e().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function um(){return typeof $e().WorkerGlobalScope!="undefined"&&typeof $e().importScripts=="function"}async function eD(){if(!(navigator==null?void 0:navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function tD(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function nD(){return um()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const FE="firebaseLocalStorageDb",rD=1,Bc="firebaseLocalStorage",UE="fbase_key";class Ga{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function qc(t,e){return t.transaction([Bc],e?"readwrite":"readonly").objectStore(Bc)}function iD(){const t=indexedDB.deleteDatabase(FE);return new Ga(t).toPromise()}function lm(){const t=indexedDB.open(FE,rD);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Bc,{keyPath:UE})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Bc)?e(r):(r.close(),await iD(),e(await lm()))})})}async function VE(t,e,n){const r=qc(t,!0).put({[UE]:e,value:n});return new Ga(r).toPromise()}async function sD(t,e){const n=qc(t,!1).get(e),r=await new Ga(n).toPromise();return r===void 0?null:r.value}function jE(t,e){const n=qc(t,!0).delete(e);return new Ga(n).toPromise()}const oD=800,aD=3;class BE{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await lm(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>aD)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return um()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=jc._getInstance(nD()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await eD(),!this.activeServiceWorker)return;this.sender=new XO(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||tD()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await lm();return await VE(e,Vc,"1"),await jE(e,Vc),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>VE(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>sD(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>jE(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=qc(i,!1).getAll();return new Ga(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),oD)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}BE.type="LOCAL";const Qa=BE;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uD(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:start",Me(t,e))}function lD(t,e){return ze(t,"POST","/v2/accounts/mfaSignIn:finalize",Me(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cD(t){return(await ze(t,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hD(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function qE(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=it("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",hD().appendChild(r)})}function zE(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dD=500,fD=6e4,zc=1e12;class pD{constructor(e){this.auth=e,this.counter=zc,this._widgets=new Map}render(e,n){const r=this.counter;return this._widgets.set(r,new mD(e,this.auth.name,n||{})),this.counter++,r}reset(e){var n;const r=e||zc;(n=this._widgets.get(r))===null||n===void 0||n.delete(),this._widgets.delete(r)}getResponse(e){var n;const r=e||zc;return((n=this._widgets.get(r))===null||n===void 0?void 0:n.getResponse())||""}async execute(e){var n;const r=e||zc;return(n=this._widgets.get(r))===null||n===void 0||n.execute(),""}}class mD{constructor(e,n,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i=typeof e=="string"?document.getElementById(e):e;N(i,"argument-error",{appName:n}),this.container=i,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=gD(50);const{callback:e,"expired-callback":n}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,n)try{n()}catch{}this.isVisible&&this.execute()},fD)},dD))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function gD(t){const e=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<t;r++)e.push(n.charAt(Math.floor(Math.random()*n.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cm=zE("rcb"),yD=new ja(3e4,6e4),vD="https://www.google.com/recaptcha/api.js?";class wD{constructor(){this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!$e().grecaptcha}load(e,n=""){return N(_D(n),e,"argument-error"),this.shouldResolveImmediately(n)?Promise.resolve($e().grecaptcha):new Promise((r,i)=>{const s=$e().setTimeout(()=>{i(it(e,"network-request-failed"))},yD.get());$e()[cm]=()=>{$e().clearTimeout(s),delete $e()[cm];const a=$e().grecaptcha;if(!a){i(it(e,"internal-error"));return}const u=a.render;a.render=(l,c)=>{const h=u(l,c);return this.counter++,h},this.hostLanguage=n,r(a)};const o=`${vD}?${As({onload:cm,render:"explicit",hl:n})}`;qE(o).catch(()=>{clearTimeout(s),i(it(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){return!!$e().grecaptcha&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function _D(t){return t.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(t)}class ED{async load(e){return new pD(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WE="recaptcha",ID={theme:"light",type:"image"};class SD{constructor(e,n=Object.assign({},ID),r){this.parameters=n,this.type=WE,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=We(r),this.isInvisible=this.parameters.size==="invisible",N(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment");const i=typeof e=="string"?document.getElementById(e):e;N(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new ED:new wD,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),n=this.getAssertedRecaptcha(),r=n.getResponse(e);return r||new Promise(i=>{const s=o=>{!o||(this.tokenChangeListeners.delete(s),i(o))};this.tokenChangeListeners.add(s),this.isInvisible&&n.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){N(!this.parameters.sitekey,this.auth,"argument-error"),N(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),N(typeof document!="undefined",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return n=>{if(this.tokenChangeListeners.forEach(r=>r(n)),typeof e=="function")e(n);else if(typeof e=="string"){const r=$e()[e];typeof r=="function"&&r(n)}}}assertNotDestroyed(){N(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const n=document.createElement("div");e.appendChild(n),e=n}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){N(Xp()&&!um(),this.auth,"internal-error"),await TD(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await cD(this.auth);N(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return N(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function TD(){let t=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}t=()=>e(),window.addEventListener("load",t)}).catch(e=>{throw t&&window.removeEventListener("load",t),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n){this.verificationId=e,this.onConfirmation=n}confirm(e){const n=Ti._fromVerification(this.verificationId,e);return this.onConfirmation(n)}}async function kD(t,e,n){const r=We(t),i=await Wc(r,e,q(n));return new hm(i,s=>$c(r,s))}async function bD(t,e,n){const r=q(t);await Mc(!1,r,"phone");const i=await Wc(r.auth,e,q(n));return new hm(i,s=>AE(r,s))}async function CD(t,e,n){const r=q(t),i=await Wc(r.auth,e,q(n));return new hm(i,s=>RE(r,s))}async function Wc(t,e,n){var r;const i=await n.verify();try{N(typeof i=="string",t,"argument-error"),N(n.type===WE,t,"argument-error");let s;if(typeof e=="string"?s={phoneNumber:e}:s=e,"session"in s){const o=s.session;if("phoneNumber"in s)return N(o.type==="enroll",t,"internal-error"),(await zO(t,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}})).phoneSessionInfo.sessionInfo;{N(o.type==="signin",t,"internal-error");const a=((r=s.multiFactorHint)===null||r===void 0?void 0:r.uid)||s.multiFactorUid;return N(a,t,"missing-multi-factor-info"),(await uD(t,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:i}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await aO(t,{phoneNumber:s.phoneNumber,recaptchaToken:i});return o}}finally{n._reset()}}async function PD(t,e){await nm(q(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e){this.providerId=_n.PROVIDER_ID,this.auth=We(e)}verifyPhoneNumber(e,n){return Wc(this.auth,e,q(n))}static credential(e,n){return Ti._fromVerification(e,n)}static credentialFromResult(e){const n=e;return _n.credentialFromTaggedObject(n)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:n,temporaryProof:r}=e;return n&&r?Ti._fromTokenResponse(n,r):null}}_n.PROVIDER_ID="phone";_n.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(t,e){return e?Kt(e):(N(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dm extends $s{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return er(e,this._buildIdpRequest())}_linkToIdToken(e,n){return er(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return er(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function ND(t){return NE(t.auth,new dm(t),t.bypassAuthState)}function AD(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),PE(n,new dm(t),t.bypassAuthState)}async function RD(t){const{auth:e,user:n}=t;return N(n,e,"internal-error"),nm(n,new dm(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HE{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return ND;case"linkViaPopup":case"linkViaRedirect":return RD;case"reauthViaPopup":case"reauthViaRedirect":return AD;default:rt(this.auth,"internal-error")}}resolve(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){wn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OD=new ja(2e3,1e4);async function DD(t,e,n){const r=We(t);Ds(t,e,tr);const i=Ci(r,n);return new nr(r,"signInViaPopup",e,i).executeNotNull()}async function xD(t,e,n){const r=q(t);Ds(r.auth,e,tr);const i=Ci(r.auth,n);return new nr(r.auth,"reauthViaPopup",e,i,r).executeNotNull()}async function LD(t,e,n){const r=q(t);Ds(r.auth,e,tr);const i=Ci(r.auth,n);return new nr(r.auth,"linkViaPopup",e,i,r).executeNotNull()}class nr extends HE{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,nr.currentPopupAction&&nr.currentPopupAction.cancel(),nr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return N(e,this.auth,"internal-error"),e}async onExecution(){wn(this.filter.length===1,"Popup operations only handle one event");const e=Ka();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(it(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(it(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,nr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0?void 0:r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(it(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,OD.get())};e()}}nr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MD="pendingRedirect",Hc=new Map;class $D extends HE{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Hc.get(this.auth._key());if(!e){try{const r=await FD(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Hc.set(this.auth._key(),e)}return this.bypassAuthState||Hc.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function FD(t,e){const n=GE(e),r=KE(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}async function fm(t,e){return KE(t)._set(GE(e),"true")}function UD(){Hc.clear()}function KE(t){return Kt(t._redirectPersistence)}function GE(t){return Si(MD,t.config.apiKey,t.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VD(t,e,n){return jD(t,e,n)}async function jD(t,e,n){const r=We(t);Ds(t,e,tr);const i=Ci(r,n);return await fm(i,r),i._openRedirect(r,e,"signInViaRedirect")}function BD(t,e,n){return qD(t,e,n)}async function qD(t,e,n){const r=q(t);Ds(r.auth,e,tr);const i=Ci(r.auth,n);await fm(i,r.auth);const s=await QE(r);return i._openRedirect(r.auth,e,"reauthViaRedirect",s)}function zD(t,e,n){return WD(t,e,n)}async function WD(t,e,n){const r=q(t);Ds(r.auth,e,tr);const i=Ci(r.auth,n);await Mc(!1,r,e.providerId),await fm(i,r.auth);const s=await QE(r);return i._openRedirect(r.auth,e,"linkViaRedirect",s)}async function HD(t,e){return await We(t)._initializationPromise,Kc(t,e,!1)}async function Kc(t,e,n=!1){const r=We(t),i=Ci(r,e),o=await new $D(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function QE(t){const e=Ka(`${t.uid}:::`);return t._redirectEventId=e,await t.auth._setRedirectUser(t),await t.auth._persistUserIfCurrent(t),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KD=10*60*1e3;class YE{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!GD(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!XE(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(it(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=KD&&this.cachedEventUids.clear(),this.cachedEventUids.has(JE(e))}saveEventToCache(e){this.cachedEventUids.add(JE(e)),this.lastProcessedEventTime=Date.now()}}function JE(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function XE({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function GD(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return XE(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e={}){return ze(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const QD=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,YD=/^https?/;async function JD(t){if(t.config.emulator)return;const{authorizedDomains:e}=await ZE(t);for(const n of e)try{if(XD(n))return}catch{}rt(t,"unauthorized-domain")}function XD(t){const e=Va(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!YD.test(n))return!1;if(QD.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZD=new ja(3e4,6e4);function eI(){const t=$e().___jsl;if(t==null?void 0:t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function ex(t){return new Promise((e,n)=>{var r,i,s;function o(){eI(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{eI(),n(it(t,"network-request-failed"))},timeout:ZD.get()})}if((i=(r=$e().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0?void 0:i.Iframe)e(gapi.iframes.getContext());else if((s=$e().gapi)===null||s===void 0?void 0:s.load)o();else{const a=zE("iframefcb");return $e()[a]=()=>{gapi.load?o():n(it(t,"network-request-failed"))},qE(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>n(u))}}).catch(e=>{throw Gc=null,e})}let Gc=null;function tx(t){return Gc=Gc||ex(t),Gc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nx=new ja(5e3,15e3),rx="__/auth/iframe",ix="emulator/auth/iframe",sx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ox=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function ax(t){const e=t.config;N(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Zp(e,ix):`https://${t.config.authDomain}/${rx}`,r={apiKey:e.apiKey,appName:t.name,v:Ei},i=ox.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${As(r).slice(1)}`}async function ux(t){const e=await tx(t),n=$e().gapi;return N(n,t,"internal-error"),e.open({where:document.body,url:ax(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=it(t,"network-request-failed"),a=$e().setTimeout(()=>{s(o)},nx.get());function u(){$e().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cx=500,hx=600,dx="_blank",fx="http://localhost";class tI{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function px(t,e,n,r=cx,i=hx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},lx),{width:r.toString(),height:i.toString(),top:s,left:o}),l=fe().toLowerCase();n&&(a=fE(l)?dx:n),dE(l)&&(e=e||fx,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[m,_])=>`${d}${m}=${_},`,"");if(WR(l)&&a!=="_self")return mx(e||"",a),new tI(null);const h=window.open(e||"",a,c);N(h,t,"popup-blocked");try{h.focus()}catch{}return new tI(h)}function mx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gx="__/auth/handler",yx="emulator/auth/handler";function pm(t,e,n,r,i,s){N(t.config.authDomain,t,"auth-domain-config-required"),N(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ei,eventId:i};if(e instanceof tr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",EA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,l]of Object.entries(s||{}))o[u]=l}if(e instanceof Fs){const u=e.getScopes().filter(l=>l!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];return`${vx(t)}?${As(a).slice(1)}`}function vx({config:t}){return t.emulator?Zp(t,yx):`https://${t.authDomain}/${gx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mm="webStorageSupport";class wx{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bi,this._completeRedirectFn=Kc}async _openPopup(e,n,r,i){var s;wn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=pm(e,n,r,Va(),i);return px(e,o,Ka())}async _openRedirect(e,n,r,i){return await this._originValidation(e),ZO(pm(e,n,r,Va(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await ux(e),r=new YE(e);return n.register("authEvent",i=>(N(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(mm,{type:mm},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[mm];o!==void 0&&n(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=JD(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return yE()||tm()||Ms()}}const _x=wx;class Ex{constructor(e){this.factorId=e}_process(e,n,r){switch(n.type){case"enroll":return this._finalizeEnroll(e,n.credential,r);case"signin":return this._finalizeSignIn(e,n.credential);default:return Dn("unexpected MultiFactorSessionType")}}}class gm extends Ex{constructor(e){super("phone");this.credential=e}static _fromCredential(e){return new gm(e)}_finalizeEnroll(e,n,r){return WO(e,{idToken:n,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,n){return lD(e,{mfaPendingCredential:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class nI{constructor(){}static assertion(e){return gm._fromCredential(e)}}nI.FACTOR_ID="phone";var rI="@firebase/auth",iI="0.19.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ix{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){N(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Tx(t){_i(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(o=>{N(i&&!i.includes(":"),"invalid-api-key",{appName:o.name}),N(!(s==null?void 0:s.includes(":")),"argument-error",{appName:o.name});const a={apiKey:i,authDomain:s,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:vE(t)},u=new GR(o,a);return CR(u,n),u})(r)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),_i(new Jn("auth-internal",e=>{const n=We(e.getProvider("auth").getImmediate());return(r=>new Ix(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),On(rI,iI,Sx(t)),On(rI,iI,"esm2017")}Tx("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pi(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=2e3;async function bx(t,e,n){var r;const{BuildInfo:i}=Pi();wn(e.sessionId,"AuthEvent did not contain a session ID");const s=await Rx(e.sessionId),o={};return Ms()?o.ibi=i.packageName:Wa()?o.apn=i.packageName:rt(t,"operation-not-supported-in-this-environment"),i.displayName&&(o.appDisplayName=i.displayName),o.sessionId=s,pm(t,n,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function Cx(t){const{BuildInfo:e}=Pi(),n={};Ms()?n.iosBundleId=e.packageName:Wa()?n.androidPackageName=e.packageName:rt(t,"operation-not-supported-in-this-environment"),await ZE(t,n)}function Px(t){const{cordova:e}=Pi();return new Promise(n=>{e.plugins.browsertab.isAvailable(r=>{let i=null;r?e.plugins.browsertab.openUrl(t):i=e.InAppBrowser.open(t,zR()?"_blank":"_system","location=yes"),n(i)})})}async function Nx(t,e,n){const{cordova:r}=Pi();let i=()=>{};try{await new Promise((s,o)=>{let a=null;function u(){var h;s();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(n==null?void 0:n.close)=="function"&&n.close()}function l(){a||(a=window.setTimeout(()=>{o(it(t,"redirect-cancelled-by-user"))},kx))}function c(){(document==null?void 0:document.visibilityState)==="visible"&&l()}e.addPassiveListener(u),document.addEventListener("resume",l,!1),Wa()&&document.addEventListener("visibilitychange",c,!1),i=()=>{e.removePassiveListener(u),document.removeEventListener("resume",l,!1),document.removeEventListener("visibilitychange",c,!1),a&&window.clearTimeout(a)}})}finally{i()}}function Ax(t){var e,n,r,i,s,o,a,u,l,c;const h=Pi();N(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),N(typeof((n=h==null?void 0:h.BuildInfo)===null||n===void 0?void 0:n.packageName)!="undefined",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),N(typeof((s=(i=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||i===void 0?void 0:i.browsertab)===null||s===void 0?void 0:s.openUrl)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((u=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||u===void 0?void 0:u.isAvailable)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),N(typeof((c=(l=h==null?void 0:h.cordova)===null||l===void 0?void 0:l.InAppBrowser)===null||c===void 0?void 0:c.open)=="function",t,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function Rx(t){const e=Ox(t),n=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(n)).map(i=>i.toString(16).padStart(2,"0")).join("")}function Ox(t){if(wn(/[0-9a-zA-Z]+/.test(t),"Can only convert alpha-numeric strings"),typeof TextEncoder!="undefined")return new TextEncoder().encode(t);const e=new ArrayBuffer(t.length),n=new Uint8Array(e);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dx=20;class xx extends YE{constructor(){super(...arguments);this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(n=>n(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function Lx(t,e,n=null){return{type:e,eventId:n,urlResponse:null,sessionId:Fx(),postBody:null,tenantId:t.tenantId,error:it(t,"no-auth-event")}}function Mx(t,e){return ym()._set(vm(t),e)}async function sI(t){const e=await ym()._get(vm(t));return e&&await ym()._remove(vm(t)),e}function $x(t,e){var n,r;const i=Vx(e);if(i.includes("/__/auth/callback")){const s=Qc(i),o=s.firebaseError?Ux(decodeURIComponent(s.firebaseError)):null,a=(r=(n=o==null?void 0:o.code)===null||n===void 0?void 0:n.split("auth/"))===null||r===void 0?void 0:r[1],u=a?it(a):null;return u?{type:t.type,eventId:t.eventId,tenantId:t.tenantId,error:u,urlResponse:null,sessionId:null,postBody:null}:{type:t.type,eventId:t.eventId,tenantId:t.tenantId,sessionId:t.sessionId,urlResponse:i,postBody:null}}return null}function Fx(){const t=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<Dx;n++){const r=Math.floor(Math.random()*e.length);t.push(e.charAt(r))}return t.join("")}function ym(){return Kt(am)}function vm(t){return Si("authEvent",t.config.apiKey,t.name)}function Ux(t){try{return JSON.parse(t)}catch{return null}}function Vx(t){const e=Qc(t),n=e.link?decodeURIComponent(e.link):void 0,r=Qc(n).link,i=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Qc(i).link||i||r||n||t}function Qc(t){if(!(t==null?void 0:t.includes("?")))return{};const[e,...n]=t.split("?");return Rs(n.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jx=500;class Bx{constructor(){this._redirectPersistence=bi,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Kc}async _initialize(e){const n=e._key();let r=this.eventManagers.get(n);return r||(r=new xx(e),this.eventManagers.set(n,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,n,r,i){Ax(e);const s=await this._initialize(e);await s.initialized(),s.resetRedirect(),UD(),await this._originValidation(e);const o=Lx(e,r,i);await Mx(e,o);const a=await bx(e,o,n),u=await Px(a);return Nx(e,s,u)}_isIframeWebStorageSupported(e,n){throw new Error("Method not implemented.")}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Cx(e)),this.originValidationPromises[n]}attachCallbackListeners(e,n){const{universalLinks:r,handleOpenURL:i,BuildInfo:s}=Pi(),o=setTimeout(async()=>{await sI(e),n.onEvent(oI())},jx),a=async c=>{clearTimeout(o);const h=await sI(e);let d=null;h&&(c==null?void 0:c.url)&&(d=$x(h,c.url)),n.onEvent(d||oI())};typeof r!="undefined"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const u=i,l=`${s.packageName.toLowerCase()}://`;Pi().handleOpenURL=async c=>{if(c.toLowerCase().startsWith(l)&&a({url:c}),typeof u=="function")try{u(c)}catch(h){console.error(h)}}}}const qx=Bx;function oI(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:it("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zx(t,e){We(t)._logFramework(e)}var Wx="@firebase/auth-compat",Hx="0.2.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kx=1e3;function Yc(){var t;return((t=self==null?void 0:self.location)===null||t===void 0?void 0:t.protocol)||null}function Gx(){return Yc()==="http:"||Yc()==="https:"}function aI(t=fe()){return!!((Yc()==="file:"||Yc()==="ionic:")&&t.toLowerCase().match(/iphone|ipad|ipod|android/))}function Qx(){return kc()||Bp()}function Yx(){return zp()&&(document==null?void 0:document.documentMode)===11}function Jx(t=fe()){return/Edge\/\d+/.test(t)}function Xx(t=fe()){return Yx()||Jx(t)}function uI(){try{const t=self.localStorage,e=Ka();if(t)return t.setItem(e,"1"),t.removeItem(e),Xx()?bc():!0}catch{return wm()&&bc()}return!1}function wm(){return typeof global!="undefined"&&"WorkerGlobalScope"in global&&"importScripts"in global}function _m(){return(Gx()||qp()||aI())&&!Qx()&&uI()&&!wm()}function lI(){return aI()&&typeof document!="undefined"}async function Zx(){return lI()?new Promise(t=>{const e=setTimeout(()=>{t(!1)},Kx);document.addEventListener("deviceready",()=>{clearTimeout(e),t(!0)})}):!1}function eL(){return typeof window!="undefined"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gt={LOCAL:"local",NONE:"none",SESSION:"session"},Ya=N,cI="persistence";function tL(t,e){if(Ya(Object.values(Gt).includes(e),t,"invalid-persistence-type"),kc()){Ya(e!==Gt.SESSION,t,"unsupported-persistence-type");return}if(Bp()){Ya(e===Gt.NONE,t,"unsupported-persistence-type");return}if(wm()){Ya(e===Gt.NONE||e===Gt.LOCAL&&bc(),t,"unsupported-persistence-type");return}Ya(e===Gt.NONE||uI(),t,"unsupported-persistence-type")}async function Em(t){await t._initializationPromise;const e=hI(),n=Si(cI,t.config.apiKey,t.name);e&&e.setItem(n,t._getPersistence())}function nL(t,e){const n=hI();if(!n)return[];const r=Si(cI,t,e);switch(n.getItem(r)){case Gt.NONE:return[xs];case Gt.LOCAL:return[Qa,bi];case Gt.SESSION:return[bi];default:return[]}}function hI(){var t;try{return((t=eL())===null||t===void 0?void 0:t.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rL=N;class Fr{constructor(){this.browserResolver=Kt(_x),this.cordovaResolver=Kt(qx),this.underlyingResolver=null,this._redirectPersistence=bi,this._completeRedirectFn=Kc}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,n,r,i)}async _openRedirect(e,n,r,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,n,r,i)}_isIframeWebStorageSupported(e,n){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,n)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return lI()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return rL(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Zx();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dI(t){return t.unwrap()}function iL(t){return t.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sL(t){return fI(t)}function oL(t,e){var n;const r=(n=e.customData)===null||n===void 0?void 0:n._tokenResponse;if(e.code==="auth/multi-factor-auth-required"){const i=e;i.resolver=new aL(t,qO(t,e))}else if(r){const i=fI(e),s=e;i&&(s.credential=i,s.tenantId=r.tenantId||void 0,s.email=r.email||void 0,s.phoneNumber=r.phoneNumber||void 0)}}function fI(t){const{_tokenResponse:e}=t instanceof Ht?t.customData:t;if(!e)return null;if(!(t instanceof Ht)&&"temporaryProof"in e&&"phoneNumber"in e)return _n.credentialFromResult(t);const n=e.providerId;if(!n||n===Ua.PASSWORD)return null;let r;switch(n){case Ua.GOOGLE:r=Mn;break;case Ua.FACEBOOK:r=Ln;break;case Ua.GITHUB:r=$n;break;case Ua.TWITTER:r=Fn;break;default:const{oauthIdToken:i,oauthAccessToken:s,oauthTokenSecret:o,pendingToken:a,nonce:u}=e;return!s&&!o&&!i&&!a?null:a?n.startsWith("saml.")?Vs._create(n,a):xn._fromParams({providerId:n,signInMethod:n,pendingToken:a,idToken:i,accessToken:s}):new Us(n).credential({idToken:i,accessToken:s,rawNonce:u})}return t instanceof Ht?r.credentialFromError(t):r.credentialFromResult(t)}function Mt(t,e){return e.catch(n=>{throw n instanceof Ht&&oL(t,n),n}).then(n=>{const r=n.operationType,i=n.user;return{operationType:r,credential:sL(n),additionalUserInfo:BO(n),user:rr.getOrCreate(i)}})}async function Im(t,e){const n=await e;return{verificationId:n.verificationId,confirm:r=>Mt(t,n.confirm(r))}}class aL{constructor(e,n){this.resolver=n,this.auth=iL(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Mt(dI(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this._delegate=e,this.multiFactor=KO(e)}static getOrCreate(e){return rr.USER_MAP.has(e)||rr.USER_MAP.set(e,new rr(e)),rr.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Mt(this.auth,AE(this._delegate,e))}async linkWithPhoneNumber(e,n){return Im(this.auth,bD(this._delegate,e,n))}async linkWithPopup(e){return Mt(this.auth,LD(this._delegate,e,Fr))}async linkWithRedirect(e){return await Em(We(this.auth)),zD(this._delegate,e,Fr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Mt(this.auth,RE(this._delegate,e))}reauthenticateWithPhoneNumber(e,n){return Im(this.auth,CD(this._delegate,e,n))}reauthenticateWithPopup(e){return Mt(this.auth,xD(this._delegate,e,Fr))}async reauthenticateWithRedirect(e){return await Em(We(this.auth)),BD(this._delegate,e,Fr)}sendEmailVerification(e){return RO(this._delegate,e)}async unlink(e){return await yO(this._delegate,e),this}updateEmail(e){return LO(this._delegate,e)}updatePassword(e){return MO(this._delegate,e)}updatePhoneNumber(e){return PD(this._delegate,e)}updateProfile(e){return xO(this._delegate,e)}verifyBeforeUpdateEmail(e,n){return OO(this._delegate,e,n)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}rr.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=N;class Sm{constructor(e,n){if(this.app=e,n.isInitialized()){this._delegate=n.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;Ja(r,"invalid-api-key",{appName:e.name}),Ja(r,"invalid-api-key",{appName:e.name});const i=typeof window!="undefined"?Fr:void 0;this._delegate=n.initialize({options:{persistence:uL(r,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(kR),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?rr.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,n){QR(this._delegate,e,n)}applyActionCode(e){return IO(this._delegate,e)}checkActionCode(e){return OE(this._delegate,e)}confirmPasswordReset(e,n){return EO(this._delegate,e,n)}async createUserWithEmailAndPassword(e,n){return Mt(this._delegate,TO(this._delegate,e,n))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return AO(this._delegate,e)}isSignInWithEmailLink(e){return CO(this._delegate,e)}async getRedirectResult(){Ja(_m(),this._delegate,"operation-not-supported-in-this-environment");const e=await HD(this._delegate,Fr);return e?Mt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){zx(this._delegate,e)}onAuthStateChanged(e,n,r){const{next:i,error:s,complete:o}=pI(e,n,r);return this._delegate.onAuthStateChanged(i,s,o)}onIdTokenChanged(e,n,r){const{next:i,error:s,complete:o}=pI(e,n,r);return this._delegate.onIdTokenChanged(i,s,o)}sendSignInLinkToEmail(e,n){return bO(this._delegate,e,n)}sendPasswordResetEmail(e,n){return _O(this._delegate,e,n||void 0)}async setPersistence(e){tL(this._delegate,e);let n;switch(e){case Gt.SESSION:n=bi;break;case Gt.LOCAL:n=await Kt(Qa)._isAvailable()?Qa:am;break;case Gt.NONE:n=xs;break;default:return rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(n)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Mt(this._delegate,gO(this._delegate))}signInWithCredential(e){return Mt(this._delegate,$c(this._delegate,e))}signInWithCustomToken(e){return Mt(this._delegate,wO(this._delegate,e))}signInWithEmailAndPassword(e,n){return Mt(this._delegate,kO(this._delegate,e,n))}signInWithEmailLink(e,n){return Mt(this._delegate,PO(this._delegate,e,n))}signInWithPhoneNumber(e,n){return Im(this._delegate,kD(this._delegate,e,n))}async signInWithPopup(e){return Ja(_m(),this._delegate,"operation-not-supported-in-this-environment"),Mt(this._delegate,DD(this._delegate,e,Fr))}async signInWithRedirect(e){return Ja(_m(),this._delegate,"operation-not-supported-in-this-environment"),await Em(this._delegate),VD(this._delegate,e,Fr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return SO(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}Sm.Persistence=Gt;function pI(t,e,n){let r=t;typeof t!="function"&&({next:r,error:e,complete:n}=t);const i=r;return{next:o=>i(o&&rr.getOrCreate(o)),error:e,complete:n}}function uL(t,e){const n=nL(t,e);if(typeof self!="undefined"&&!n.includes(Qa)&&n.push(Qa),typeof window!="undefined")for(const r of[am,bi])n.includes(r)||n.push(r);return n.includes(xs)||n.push(xs),n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tm{constructor(){this.providerId="phone",this._delegate=new _n(dI(Fa.auth()))}static credential(e,n){return _n.credential(e,n)}verifyPhoneNumber(e,n){return this._delegate.verifyPhoneNumber(e,n)}unwrap(){return this._delegate}}Tm.PHONE_SIGN_IN_METHOD=_n.PHONE_SIGN_IN_METHOD;Tm.PROVIDER_ID=_n.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lL=N;class cL{constructor(e,n,r=Fa.app()){var i;lL((i=r.options)===null||i===void 0?void 0:i.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new SD(e,n,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hL="auth-compat";function dL(t){t.INTERNAL.registerComponent(new Jn(hL,e=>{const n=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new Sm(n,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Os.EMAIL_SIGNIN,PASSWORD_RESET:Os.PASSWORD_RESET,RECOVER_EMAIL:Os.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Os.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Os.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Os.VERIFY_EMAIL}},EmailAuthProvider:$r,FacebookAuthProvider:Ln,GithubAuthProvider:$n,GoogleAuthProvider:Mn,OAuthProvider:Us,SAMLAuthProvider:xc,PhoneAuthProvider:Tm,PhoneMultiFactorGenerator:nI,RecaptchaVerifier:cL,TwitterAuthProvider:Fn,Auth:Sm,AuthCredential:$s,Error:Ht}).setInstantiationMode("LAZY").setMultipleInstances(!1)),t.registerVersion(Wx,Hx)}dL(Fa);var fL=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},$,km=km||{},G=fL||self;function Jc(){}function bm(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Xa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function pL(t){return Object.prototype.hasOwnProperty.call(t,Cm)&&t[Cm]||(t[Cm]=++mL)}var Cm="closure_uid_"+(1e9*Math.random()>>>0),mL=0;function gL(t,e,n){return t.call.apply(t.bind,arguments)}function yL(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function st(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?st=gL:st=yL,st.apply(null,arguments)}function Xc(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ot(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Ur(){this.s=this.s,this.o=this.o}var vL=0,wL={};Ur.prototype.s=!1;Ur.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),vL!=0)){var t=pL(this);delete wL[t]}};Ur.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const mI=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},gI=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){const r=t.length,i=typeof t=="string"?t.split(""):t;for(let s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function _L(t){e:{var e=hM;const n=t.length,r=typeof t=="string"?t.split(""):t;for(let i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break e}e=-1}return 0>e?null:typeof t=="string"?t.charAt(e):t[e]}function yI(t){return Array.prototype.concat.apply([],arguments)}function Pm(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Zc(t){return/^[\s\xa0]*$/.test(t)}var vI=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function bt(t,e){return t.indexOf(e)!=-1}function Nm(t,e){return t<e?-1:t>e?1:0}var Ct;e:{var wI=G.navigator;if(wI){var _I=wI.userAgent;if(_I){Ct=_I;break e}}Ct=""}function Am(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function EI(t){const e={};for(const n in t)e[n]=t[n];return e}var II="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function SI(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<II.length;s++)n=II[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function Rm(t){return Rm[" "](t),t}Rm[" "]=Jc;function EL(t){var e=TL;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var IL=bt(Ct,"Opera"),Bs=bt(Ct,"Trident")||bt(Ct,"MSIE"),TI=bt(Ct,"Edge"),Om=TI||Bs,kI=bt(Ct,"Gecko")&&!(bt(Ct.toLowerCase(),"webkit")&&!bt(Ct,"Edge"))&&!(bt(Ct,"Trident")||bt(Ct,"MSIE"))&&!bt(Ct,"Edge"),SL=bt(Ct.toLowerCase(),"webkit")&&!bt(Ct,"Edge");function bI(){var t=G.document;return t?t.documentMode:void 0}var eh;e:{var Dm="",xm=function(){var t=Ct;if(kI)return/rv:([^\);]+)(\)|;)/.exec(t);if(TI)return/Edge\/([\d\.]+)/.exec(t);if(Bs)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(SL)return/WebKit\/(\S+)/.exec(t);if(IL)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(xm&&(Dm=xm?xm[1]:""),Bs){var Lm=bI();if(Lm!=null&&Lm>parseFloat(Dm)){eh=String(Lm);break e}}eh=Dm}var TL={};function kL(){return EL(function(){let t=0;const e=vI(String(eh)).split("."),n=vI("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Nm(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Nm(i[2].length==0,s[2].length==0)||Nm(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Mm;if(G.document&&Bs){var CI=bI();Mm=CI||parseInt(eh,10)||void 0}else Mm=void 0;var bL=Mm,CL=function(){if(!G.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{G.addEventListener("test",Jc,e),G.removeEventListener("test",Jc,e)}catch{}return t}();function vt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}vt.prototype.h=function(){this.defaultPrevented=!0};function Za(t,e){if(vt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(kI){e:{try{Rm(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:PL[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Za.Z.h.call(this)}}ot(Za,vt);var PL={2:"touch",3:"pen",4:"mouse"};Za.prototype.h=function(){Za.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var eu="closure_listenable_"+(1e6*Math.random()|0),NL=0;function AL(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++NL,this.ca=this.fa=!1}function th(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function nh(t){this.src=t,this.g={},this.h=0}nh.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Fm(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):(e=new AL(e,this.src,s,!!r,i),e.fa=n,t.push(e)),e};function $m(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=mI(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(th(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Fm(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}var Um="closure_lm_"+(1e6*Math.random()|0),Vm={};function PI(t,e,n,r,i){if(r&&r.once)return AI(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)PI(t,e[s],n,r,i);return null}return n=zm(n),t&&t[eu]?t.N(e,n,Xa(r)?!!r.capture:!!r,i):NI(t,e,n,!1,r,i)}function NI(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=Xa(i)?!!i.capture:!!i,a=Bm(t);if(a||(t[Um]=a=new nh(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=RL(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)CL||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(OI(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function RL(){function t(n){return e.call(t.src,t.listener,n)}var e=OL;return t}function AI(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)AI(t,e[s],n,r,i);return null}return n=zm(n),t&&t[eu]?t.O(e,n,Xa(r)?!!r.capture:!!r,i):NI(t,e,n,!0,r,i)}function RI(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)RI(t,e[s],n,r,i);else r=Xa(r)?!!r.capture:!!r,n=zm(n),t&&t[eu]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Fm(s,n,r,i),-1<n&&(th(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Bm(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Fm(e,n,r,i)),(n=-1<t?e[t]:null)&&jm(n))}function jm(t){if(typeof t!="number"&&t&&!t.ca){var e=t.src;if(e&&e[eu])$m(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(OI(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Bm(e))?($m(n,t),n.h==0&&(n.src=null,e[Um]=null)):th(t)}}}function OI(t){return t in Vm?Vm[t]:Vm[t]="on"+t}function OL(t,e){if(t.ca)t=!0;else{e=new Za(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&jm(t),t=n.call(r,e)}return t}function Bm(t){return t=t[Um],t instanceof nh?t:null}var qm="__closure_events_fn_"+(1e9*Math.random()>>>0);function zm(t){return typeof t=="function"?t:(t[qm]||(t[qm]=function(e){return t.handleEvent(e)}),t[qm])}function He(){Ur.call(this),this.i=new nh(this),this.P=this,this.I=null}ot(He,Ur);He.prototype[eu]=!0;He.prototype.removeEventListener=function(t,e,n,r){RI(this,t,e,n,r)};function at(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new vt(e,t);else if(e instanceof vt)e.target=e.target||t;else{var i=e;e=new vt(r,t),SI(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=rh(o,r,!0,e)&&i}if(o=e.g=t,i=rh(o,r,!0,e)&&i,i=rh(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=rh(o,r,!1,e)&&i}He.prototype.M=function(){if(He.Z.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)th(n[r]);delete t.g[e],t.h--}}this.I=null};He.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};He.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function rh(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,u=o.ia||o.src;o.fa&&$m(t.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Wm=G.JSON.stringify;function DL(){var t=xI;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class xL{constructor(){this.h=this.g=null}add(e,n){const r=DI.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var DI=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new LL,t=>t.reset());class LL{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function ML(t){G.setTimeout(()=>{throw t},0)}function Hm(t,e){Km||$L(),Gm||(Km(),Gm=!0),xI.add(t,e)}var Km;function $L(){var t=G.Promise.resolve(void 0);Km=function(){t.then(FL)}}var Gm=!1,xI=new xL;function FL(){for(var t;t=DL();){try{t.h.call(t.g)}catch(n){ML(n)}var e=DI;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Gm=!1}function ih(t,e){He.call(this),this.h=t||1,this.g=e||G,this.j=st(this.kb,this),this.l=Date.now()}ot(ih,He);$=ih.prototype;$.da=!1;$.S=null;$.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),at(this,"tick"),this.da&&(Qm(this),this.start()))}};$.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Qm(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}$.M=function(){ih.Z.M.call(this),Qm(this),delete this.g};function Ym(t,e,n){if(typeof t=="function")n&&(t=st(t,n));else if(t&&typeof t.handleEvent=="function")t=st(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:G.setTimeout(t,e||0)}function LI(t){t.g=Ym(()=>{t.g=null,t.i&&(t.i=!1,LI(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class UL extends Ur{constructor(e,n){super();this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:LI(this)}M(){super.M(),this.g&&(G.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function tu(t){Ur.call(this),this.h=t,this.g={}}ot(tu,Ur);var MI=[];function $I(t,e,n,r){Array.isArray(n)||(n&&(MI[0]=n.toString()),n=MI);for(var i=0;i<n.length;i++){var s=PI(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function FI(t){Am(t.g,function(e,n){this.g.hasOwnProperty(n)&&jm(e)},t),t.g={}}tu.prototype.M=function(){tu.Z.M.call(this),FI(this)};tu.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function sh(){this.g=!0}sh.prototype.Aa=function(){this.g=!1};function VL(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jL(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function qs(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+qL(t,n)+(r?" "+r:"")})}function BL(t,e){t.info(function(){return"TIMEOUT: "+e})}sh.prototype.info=function(){};function qL(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Wm(n)}catch{return e}}var Ni={},UI=null;function oh(){return UI=UI||new He}Ni.Ma="serverreachability";function VI(t){vt.call(this,Ni.Ma,t)}ot(VI,vt);function nu(t){const e=oh();at(e,new VI(e,t))}Ni.STAT_EVENT="statevent";function jI(t,e){vt.call(this,Ni.STAT_EVENT,t),this.stat=e}ot(jI,vt);function Pt(t){const e=oh();at(e,new jI(e,t))}Ni.Na="timingevent";function BI(t,e){vt.call(this,Ni.Na,t),this.size=e}ot(BI,vt);function ru(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return G.setTimeout(function(){t()},e)}var ah={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},qI={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function Jm(){}Jm.prototype.h=null;function zI(t){return t.h||(t.h=t.i())}function WI(){}var iu={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Xm(){vt.call(this,"d")}ot(Xm,vt);function Zm(){vt.call(this,"c")}ot(Zm,vt);var eg;function uh(){}ot(uh,Jm);uh.prototype.g=function(){return new XMLHttpRequest};uh.prototype.i=function(){return{}};eg=new uh;function su(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new tu(this),this.P=zL,t=Om?125:void 0,this.W=new ih(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new HI}function HI(){this.i=null,this.g="",this.h=!1}var zL=45e3,tg={},lh={};$=su.prototype;$.setTimeout=function(t){this.P=t};function ng(t,e,n){t.K=1,t.v=ph(ir(e)),t.s=n,t.U=!0,KI(t,null)}function KI(t,e){t.F=Date.now(),ou(t),t.A=ir(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),nS(n.h,"t",r),t.C=0,n=t.l.H,t.h=new HI,t.g=kS(t.l,n?e:null,!t.s),0<t.O&&(t.L=new UL(st(t.Ia,t,t.g),t.O)),$I(t.V,t.g,"readystatechange",t.gb),e=t.H?EI(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),nu(1),VL(t.j,t.u,t.A,t.m,t.X,t.s)}$.gb=function(t){t=t.target;const e=this.L;e&&sr(t)==3?e.l():this.Ia(t)};$.Ia=function(t){try{if(t==this.g)e:{const c=sr(this.g);var e=this.g.Da();const h=this.g.ba();if(!(3>c)&&(c!=3||Om||this.g&&(this.h.h||this.g.ga()||pS(this.g)))){this.I||c!=4||e==7||(e==8||0>=h?nu(3):nu(2)),ch(this);var n=this.g.ba();this.N=n;t:if(GI(this)){var r=pS(this.g);t="";var i=r.length,s=sr(this.g)==4;if(!this.h.i){if(typeof TextDecoder=="undefined"){Ai(this),au(this);var o="";break t}this.h.i=new G.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=n==200,jL(this.j,this.u,this.A,this.m,this.X,c,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Zc(a)){var l=a;break t}}l=null}if(n=l)qs(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,rg(this,n);else{this.i=!1,this.o=3,Pt(12),Ai(this),au(this);break e}}this.U?(QI(this,c,o),Om&&this.i&&c==3&&($I(this.V,this.W,"tick",this.fb),this.W.start())):(qs(this.j,this.m,o,null),rg(this,o)),c==4&&Ai(this),this.i&&!this.I&&(c==4?ES(this.l,this):(this.i=!1,ou(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Pt(12)):(this.o=0,Pt(13)),Ai(this),au(this)}}}catch{}finally{}};function GI(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Ba:!1}function QI(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=WL(t,n),i==lh){e==4&&(t.o=4,Pt(14),r=!1),qs(t.j,t.m,null,"[Incomplete Response]");break}else if(i==tg){t.o=4,Pt(15),qs(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else qs(t.j,t.m,i,null),rg(t,i);GI(t)&&i!=lh&&i!=tg&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Pt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.aa&&(t.aa=!0,e=t.l,e.g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),pg(e),e.L=!0,Pt(11))):(qs(t.j,t.m,n,"[Invalid Chunked Response]"),Ai(t),au(t))}$.fb=function(){if(this.g){var t=sr(this.g),e=this.g.ga();this.C<e.length&&(ch(this),QI(this,t,e),this.i&&t!=4&&ou(this))}};function WL(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?lh:(n=Number(e.substring(n,r)),isNaN(n)?tg:(r+=1,r+n>e.length?lh:(e=e.substr(r,n),t.C=r+n,e)))}$.cancel=function(){this.I=!0,Ai(this)};function ou(t){t.Y=Date.now()+t.P,YI(t,t.P)}function YI(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=ru(st(t.eb,t),e)}function ch(t){t.B&&(G.clearTimeout(t.B),t.B=null)}$.eb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(BL(this.j,this.A),this.K!=2&&(nu(3),Pt(17)),Ai(this),this.o=2,au(this)):YI(this,this.Y-t)};function au(t){t.l.G==0||t.I||ES(t.l,t)}function Ai(t){ch(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,Qm(t.W),FI(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function rg(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||og(n.i,t))){if(n.I=t.N,!t.J&&og(n.i,t)&&n.G==3){try{var r=n.Ca.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0)e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)_h(n),vh(n);else break e;fg(n),Pt(18)}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&n.A==0&&!n.v&&(n.v=ru(st(n.ab,n),6e3));if(1>=sS(n.i)&&n.ka){try{n.ka()}catch{}n.ka=void 0}}else Di(n,11)}else if((t.J||n.g==t)&&_h(n),!Zc(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){let l=i[e];if(n.U=l[0],l=l[1],n.G==2)if(l[0]=="c"){n.J=l[1],n.la=l[2];const c=l[3];c!=null&&(n.ma=c,n.h.info("VER="+n.ma));const h=l[4];h!=null&&(n.za=h,n.h.info("SVER="+n.za));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const m=t.g;if(m){const _=m.g?m.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(_){var s=r.i;!s.g&&(bt(_,"spdy")||bt(_,"quic")||bt(_,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(ag(s,s.h),s.h=null))}if(r.D){const E=m.g?m.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.sa=E,we(r.F,r.D,E))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=t;if(r.oa=TS(r,r.H?r.la:null,r.W),o.J){oS(r.i,o);var a=o,u=r.K;u&&a.setTimeout(u),a.B&&(ch(a),ou(a)),r.g=o}else wS(r);0<n.l.length&&wh(n)}else l[0]!="stop"&&l[0]!="close"||Di(n,7);else n.G==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?Di(n,7):hg(n):l[0]!="noop"&&n.j&&n.j.wa(l),n.A=0)}}nu(4)}catch{}}function HL(t){if(t.R&&typeof t.R=="function")return t.R();if(typeof t=="string")return t.split("");if(bm(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function ig(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(bm(t)||typeof t=="string")gI(t,e,void 0);else{if(t.T&&typeof t.T=="function")var n=t.T();else if(t.R&&typeof t.R=="function")n=void 0;else if(bm(t)||typeof t=="string"){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;r=HL(t),i=r.length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function zs(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof zs)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}$=zs.prototype;$.R=function(){sg(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t};$.T=function(){return sg(this),this.g.concat()};function sg(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Ri(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)r=t.g[e],Ri(i,r)||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}$.get=function(t,e){return Ri(this.h,t)?this.h[t]:e};$.set=function(t,e){Ri(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e};$.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};function Ri(t,e){return Object.prototype.hasOwnProperty.call(t,e)}var JI=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function KL(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Oi(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof Oi){this.g=e!==void 0?e:t.g,hh(this,t.j),this.s=t.s,dh(this,t.i),fh(this,t.m),this.l=t.l,e=t.h;var n=new cu;n.i=e.i,e.g&&(n.g=new zs(e.g),n.h=e.h),XI(this,n),this.o=t.o}else t&&(n=String(t).match(JI))?(this.g=!!e,hh(this,n[1]||"",!0),this.s=uu(n[2]||""),dh(this,n[3]||"",!0),fh(this,n[4]),this.l=uu(n[5]||"",!0),XI(this,n[6]||"",!0),this.o=uu(n[7]||"")):(this.g=!!e,this.h=new cu(null,this.g))}Oi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(lu(e,ZI,!0),":");var n=this.i;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(lu(e,ZI,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.i&&n.charAt(0)!="/"&&t.push("/"),t.push(lu(n,n.charAt(0)=="/"?XL:JL,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",lu(n,eM)),t.join("")};function ir(t){return new Oi(t)}function hh(t,e,n){t.j=n?uu(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function dh(t,e,n){t.i=n?uu(e,!0):e}function fh(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function XI(t,e,n){e instanceof cu?(t.h=e,tM(t.h,t.g)):(n||(e=lu(e,ZL)),t.h=new cu(e,t.g))}function we(t,e,n){t.h.set(e,n)}function ph(t){return we(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function GL(t){return t instanceof Oi?ir(t):new Oi(t,void 0)}function QL(t,e,n,r){var i=new Oi(null,void 0);return t&&hh(i,t),e&&dh(i,e),n&&fh(i,n),r&&(i.l=r),i}function uu(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function lu(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YL),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YL(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var ZI=/[#\/\?@]/g,JL=/[#\?:]/g,XL=/[#\?]/g,ZL=/[#\?@]/g,eM=/#/g;function cu(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vr(t){t.g||(t.g=new zs,t.h=0,t.i&&KL(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}$=cu.prototype;$.add=function(t,e){Vr(this),this.i=null,t=Ws(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function eS(t,e){Vr(t),e=Ws(t,e),Ri(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,t=t.g,Ri(t.h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&sg(t)))}function tS(t,e){return Vr(t),e=Ws(t,e),Ri(t.g.h,e)}$.forEach=function(t,e){Vr(this),this.g.forEach(function(n,r){gI(n,function(i){t.call(e,i,r,this)},this)},this)};$.T=function(){Vr(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n};$.R=function(t){Vr(this);var e=[];if(typeof t=="string")tS(this,t)&&(e=yI(e,this.g.get(Ws(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=yI(e,t[n])}return e};$.set=function(t,e){return Vr(this),this.i=null,t=Ws(this,t),tS(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};$.get=function(t,e){return t?(t=this.R(t),0<t.length?String(t[0]):e):e};function nS(t,e,n){eS(t,e),0<n.length&&(t.i=null,t.g.set(Ws(t,e),Pm(n)),t.h+=n.length)}$.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;r[s]!==""&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};function Ws(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function tM(t,e){e&&!t.j&&(Vr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(eS(this,r),nS(this,i,n))},t)),t.j=e}var nM=class{constructor(t,e){this.h=t,this.g=e}};function rS(t){this.l=t||rM,G.PerformanceNavigationTiming?(t=G.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(G.g&&G.g.Ea&&G.g.Ea()&&G.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rM=10;function iS(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function sS(t){return t.h?1:t.g?t.g.size:0}function og(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function ag(t,e){t.g?t.g.add(e):t.h=e}function oS(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}rS.prototype.cancel=function(){if(this.i=aS(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function aS(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Pm(t.i)}function ug(){}ug.prototype.stringify=function(t){return G.JSON.stringify(t,void 0)};ug.prototype.parse=function(t){return G.JSON.parse(t,void 0)};function iM(){this.g=new ug}function sM(t,e,n){const r=n||"";try{ig(t,function(i,s){let o=i;Xa(i)&&(o=Wm(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oM(t,e){const n=new sh;if(G.Image){const r=new Image;r.onload=Xc(mh,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Xc(mh,n,r,"TestLoadImage: error",!1,e),r.onabort=Xc(mh,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Xc(mh,n,r,"TestLoadImage: timeout",!1,e),G.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function mh(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function hu(t){this.l=t.$b||null,this.j=t.ib||!1}ot(hu,Jm);hu.prototype.g=function(){return new gh(this.l,this.j)};hu.prototype.i=function(t){return function(){return t}}({});function gh(t,e){He.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=lg,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ot(gh,He);var lg=0;$=gh.prototype;$.open=function(t,e){if(this.readyState!=lg)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,fu(this)};$.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||G).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))};$.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,du(this)),this.readyState=lg};$.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,fu(this)),this.g&&(this.readyState=3,fu(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(typeof G.ReadableStream!="undefined"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;uS(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))};function uS(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}$.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?du(this):fu(this),this.readyState==3&&uS(this)}};$.Ua=function(t){this.g&&(this.response=this.responseText=t,du(this))};$.Ta=function(t){this.g&&(this.response=t,du(this))};$.ha=function(){this.g&&du(this)};function du(t){t.readyState=4,t.l=null,t.j=null,t.A=null,fu(t)}$.setRequestHeader=function(t,e){this.v.append(t,e)};$.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};$.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function fu(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(gh.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aM=G.JSON.parse;function Ae(t){He.call(this),this.headers=new zs,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=lS,this.K=this.L=!1}ot(Ae,He);var lS="",uM=/^https?$/i,lM=["POST","PUT"];$=Ae.prototype;$.ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():eg.g(),this.C=this.u?zI(this.u):zI(eg),this.g.onreadystatechange=st(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){cS(this,s);return}t=n||"";const i=new zs(this.headers);r&&ig(r,function(s,o){i.set(o,s)}),r=_L(i.T()),n=G.FormData&&t instanceof G.FormData,!(0<=mI(lM,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach(function(s,o){this.g.setRequestHeader(o,s)},this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{fS(this),0<this.B&&((this.K=cM(this.g))?(this.g.timeout=this.B,this.g.ontimeout=st(this.pa,this)):this.A=Ym(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){cS(this,s)}};function cM(t){return Bs&&kL()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}function hM(t){return t.toLowerCase()=="content-type"}$.pa=function(){typeof km!="undefined"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,at(this,"timeout"),this.abort(8))};function cS(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,hS(t),yh(t)}function hS(t){t.D||(t.D=!0,at(t,"complete"),at(t,"error"))}$.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,at(this,"complete"),at(this,"abort"),yh(this))};$.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yh(this,!0)),Ae.Z.M.call(this)};$.Fa=function(){this.s||(this.F||this.v||this.l?dS(this):this.cb())};$.cb=function(){dS(this)};function dS(t){if(t.h&&typeof km!="undefined"&&(!t.C[1]||sr(t)!=4||t.ba()!=2)){if(t.v&&sr(t)==4)Ym(t.Fa,0,t);else if(at(t,"readystatechange"),sr(t)==4){t.h=!1;try{const a=t.ba();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(JI)[1]||null;if(!i&&G.self&&G.self.location){var s=G.self.location.protocol;i=s.substr(0,s.length-1)}r=!uM.test(i?i.toLowerCase():"")}n=r}if(n)at(t,"complete"),at(t,"success");else{t.m=6;try{var o=2<sr(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.ba()+"]",hS(t)}}finally{yh(t)}}}}function yh(t,e){if(t.g){fS(t);const n=t.g,r=t.C[0]?Jc:null;t.g=null,t.C=null,e||at(t,"ready");try{n.onreadystatechange=r}catch{}}}function fS(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(G.clearTimeout(t.A),t.A=null)}function sr(t){return t.g?t.g.readyState:0}$.ba=function(){try{return 2<sr(this)?this.g.status:-1}catch{return-1}};$.ga=function(){try{return this.g?this.g.responseText:""}catch{return""}};$.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aM(e)}};function pS(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case lS:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}$.Da=function(){return this.m};$.La=function(){return typeof this.j=="string"?this.j:String(this.j)};function dM(t){let e="";return Am(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function cg(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=dM(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):we(t,e,n))}function pu(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function mS(t){this.za=0,this.l=[],this.h=new sh,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=pu("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=pu("baseRetryDelayMs",5e3,t),this.$a=pu("retryDelaySeedMs",1e4,t),this.Ya=pu("forwardChannelMaxRetries",2,t),this.ra=pu("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new rS(t&&t.concurrentRequestLimit),this.Ca=new iM,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||t.Xb!==!1}$=mS.prototype;$.ma=8;$.G=1;function hg(t){if(gS(t),t.G==3){var e=t.V++,n=ir(t.F);we(n,"SID",t.J),we(n,"RID",e),we(n,"TYPE","terminate"),mu(t,n),e=new su(t,t.h,e,void 0),e.K=2,e.v=ph(ir(n)),n=!1,G.navigator&&G.navigator.sendBeacon&&(n=G.navigator.sendBeacon(e.v.toString(),"")),!n&&G.Image&&(new Image().src=e.v,n=!0),n||(e.g=kS(e.l,null),e.g.ea(e.v)),e.F=Date.now(),ou(e)}SS(t)}$.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch{}};function vh(t){t.g&&(pg(t),t.g.cancel(),t.g=null)}function gS(t){vh(t),t.u&&(G.clearTimeout(t.u),t.u=null),_h(t),t.i.cancel(),t.m&&(typeof t.m=="number"&&G.clearTimeout(t.m),t.m=null)}function dg(t,e){t.l.push(new nM(t.Za++,e)),t.G==3&&wh(t)}function wh(t){iS(t.i)||t.m||(t.m=!0,Hm(t.Ha,t),t.C=0)}function fM(t,e){return sS(t.i)>=t.i.j-(t.m?1:0)?!1:t.m?(t.l=e.D.concat(t.l),!0):t.G==1||t.G==2||t.C>=(t.Xa?0:t.Ya)?!1:(t.m=ru(st(t.Ha,t,e),IS(t,t.C)),t.C++,!0)}$.Ha=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;const i=new su(this,this.h,t,void 0);let s=this.s;if(this.P&&(s?(s=EI(s),SI(s,this.P)):s=this.P),this.o===null&&(i.H=s),this.ja)e:{for(var e=0,n=0;n<this.l.length;n++){t:{var r=this.l[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.l.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=vS(this,i,e),n=ir(this.F),we(n,"RID",t),we(n,"CVER",22),this.D&&we(n,"X-HTTP-Session-Id",this.D),mu(this,n),this.o&&s&&cg(n,this.o,s),ag(this.i,i),this.Ra&&we(n,"TYPE","init"),this.ja?(we(n,"$req",e),we(n,"SID","null"),i.$=!0,ng(i,n,null)):ng(i,n,e),this.G=2}}else this.G==3&&(t?yS(this,t):this.l.length==0||iS(this.i)||yS(this))};function yS(t,e){var n;e?n=e.m:n=t.V++;const r=ir(t.F);we(r,"SID",t.J),we(r,"RID",n),we(r,"AID",t.U),mu(t,r),t.o&&t.s&&cg(r,t.o,t.s),n=new su(t,t.h,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=vS(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),ag(t.i,n),ng(n,r,e)}function mu(t,e){t.j&&ig({},function(n,r){we(e,r,n)})}function vS(t,e,n){n=Math.min(t.l.length,n);var r=t.j?st(t.j.Oa,t.j,t):null;e:{var i=t.l;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<n;u++){let l=i[u].h;const c=i[u].g;if(l-=s,0>l)s=Math.max(0,i[u].h-100),a=!1;else try{sM(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break e}}}return t=t.l.splice(0,n),e.D=t,r}function wS(t){t.g||t.u||(t.Y=1,Hm(t.Ga,t),t.A=0)}function fg(t){return t.g||t.u||3<=t.A?!1:(t.Y++,t.u=ru(st(t.Ga,t),IS(t,t.A)),t.A++,!0)}$.Ga=function(){if(this.u=null,_S(this),this.$&&!(this.L||this.g==null||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=ru(st(this.bb,this),t)}};$.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Pt(10),vh(this),_S(this))};function pg(t){t.B!=null&&(G.clearTimeout(t.B),t.B=null)}function _S(t){t.g=new su(t,t.h,"rpc",t.Y),t.o===null&&(t.g.H=t.s),t.g.O=0;var e=ir(t.oa);we(e,"RID","rpc"),we(e,"SID",t.J),we(e,"CI",t.N?"0":"1"),we(e,"AID",t.U),mu(t,e),we(e,"TYPE","xmlhttp"),t.o&&t.s&&cg(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=ph(ir(e)),n.s=null,n.U=!0,KI(n,t)}$.ab=function(){this.v!=null&&(this.v=null,vh(this),fg(this),Pt(19))};function _h(t){t.v!=null&&(G.clearTimeout(t.v),t.v=null)}function ES(t,e){var n=null;if(t.g==e){_h(t),pg(t),t.g=null;var r=2}else if(og(t.i,e))n=e.D,oS(t.i,e),r=1;else return;if(t.I=e.N,t.G!=0){if(e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=oh(),at(r,new BI(r,n,e,i)),wh(t)}else wS(t);else if(i=e.o,i==3||i==0&&0<t.I||!(r==1&&fM(t,e)||r==2&&fg(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Di(t,5);break;case 4:Di(t,10);break;case 3:Di(t,6);break;default:Di(t,2)}}}function IS(t,e){let n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Di(t,e){if(t.h.info("Error code "+e),e==2){var n=null;t.j&&(n=null);var r=st(t.jb,t);n||(n=new Oi("//www.google.com/images/cleardot.gif"),G.location&&G.location.protocol=="http"||hh(n,"https"),ph(n)),oM(n.toString(),r)}else Pt(2);t.G=0,t.j&&t.j.va(e),SS(t),gS(t)}$.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Pt(2)):(this.h.info("Failed to ping google.com"),Pt(1))};function SS(t){t.G=0,t.I=-1,t.j&&((aS(t.i).length!=0||t.l.length!=0)&&(t.i.i.length=0,Pm(t.l),t.l.length=0),t.j.ua())}function TS(t,e,n){let r=GL(n);if(r.i!="")e&&dh(r,e+"."+r.i),fh(r,r.m);else{const i=G.location;r=QL(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&Am(t.aa,function(i,s){we(r,s,i)}),e=t.D,n=t.sa,e&&n&&we(r,e,n),we(r,"VER",t.ma),mu(t,r),r}function kS(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ba&&!t.qa?new Ae(new hu({ib:!0})):new Ae(t.qa),e.L=t.H,e}function bS(){}$=bS.prototype;$.xa=function(){};$.wa=function(){};$.va=function(){};$.ua=function(){};$.Oa=function(){};function Eh(){if(Bs&&!(10<=Number(bL)))throw Error("Environmental error: no available transport.")}Eh.prototype.g=function(t,e){return new Qt(t,e)};function Qt(t,e){He.call(this),this.g=new mS(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!Zc(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Zc(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Hs(this)}ot(Qt,He);Qt.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Hm(st(t.hb,t,e))),Pt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=TS(t,null,t.W),wh(t)};Qt.prototype.close=function(){hg(this.g)};Qt.prototype.u=function(t){if(typeof t=="string"){var e={};e.__data__=t,dg(this.g,e)}else this.v?(e={},e.__data__=Wm(t),dg(this.g,e)):dg(this.g,t)};Qt.prototype.M=function(){this.g.j=null,delete this.j,hg(this.g),delete this.g,Qt.Z.M.call(this)};function CS(t){Xm.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ot(CS,Xm);function PS(){Zm.call(this),this.status=1}ot(PS,Zm);function Hs(t){this.g=t}ot(Hs,bS);Hs.prototype.xa=function(){at(this.g,"a")};Hs.prototype.wa=function(t){at(this.g,new CS(t))};Hs.prototype.va=function(t){at(this.g,new PS(t))};Hs.prototype.ua=function(){at(this.g,"b")};Eh.prototype.createWebChannel=Eh.prototype.g;Qt.prototype.send=Qt.prototype.u;Qt.prototype.open=Qt.prototype.m;Qt.prototype.close=Qt.prototype.close;ah.NO_ERROR=0;ah.TIMEOUT=8;ah.HTTP_ERROR=6;qI.COMPLETE="complete";WI.EventType=iu;iu.OPEN="a";iu.CLOSE="b";iu.ERROR="c";iu.MESSAGE="d";He.prototype.listen=He.prototype.N;Ae.prototype.listenOnce=Ae.prototype.O;Ae.prototype.getLastError=Ae.prototype.La;Ae.prototype.getLastErrorCode=Ae.prototype.Da;Ae.prototype.getStatus=Ae.prototype.ba;Ae.prototype.getResponseJson=Ae.prototype.Qa;Ae.prototype.getResponseText=Ae.prototype.ga;Ae.prototype.send=Ae.prototype.ea;var pM=function(){return new Eh},mM=function(){return oh()},mg=ah,gM=qI,yM=Ni,NS={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},vM=hu,Ih=WI,wM=Ae;const AS="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ut{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ut.UNAUTHENTICATED=new ut(null),ut.GOOGLE_CREDENTIALS=new ut("google-credentials-uid"),ut.FIRST_PARTY=new ut("first-party-uid"),ut.MOCK_USER=new ut("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ks="9.6.5";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new Cc("@firebase/firestore");function gg(){return jr.logLevel}function _M(t){jr.setLogLevel(t)}function R(t,...e){if(jr.logLevel<=ee.DEBUG){const n=e.map(yg);jr.debug(`Firestore (${Ks}): ${t}`,...n)}}function Re(t,...e){if(jr.logLevel<=ee.ERROR){const n=e.map(yg);jr.error(`Firestore (${Ks}): ${t}`,...n)}}function gu(t,...e){if(jr.logLevel<=ee.WARN){const n=e.map(yg);jr.warn(`Firestore (${Ks}): ${t}`,...n)}}function yg(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(t="Unexpected state"){const e=`FIRESTORE (${Ks}) INTERNAL ASSERTION FAILED: `+t;throw Re(e),new Error(e)}function z(t,e){t||B()}function EM(t,e){t||B()}function D(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const T={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class P extends Ht{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ke{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RS{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class IM{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ut.UNAUTHENTICATED))}shutdown(){}}class SM{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class TM{constructor(e){this.t=e,this.currentUser=ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new Ke;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ke,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ke)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(z(typeof r.accessToken=="string"),new RS(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return z(e===null||typeof e=="string"),new ut(e)}}class kM{constructor(e,n,r){this.type="FirstParty",this.user=ut.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",n);const i=e.auth.getAuthHeaderValueForFirstParty([]);i&&this.headers.set("Authorization",i),r&&this.headers.set("X-Goog-Iam-Authorization-Token",r)}}class bM{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new kM(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class CM{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class PM{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,n){this.o=i=>{e.enqueueRetryable(()=>(s=>(s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`),n(s.token)))(i))};const r=i=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.g.onInit(i=>r(i)),setTimeout(()=>{if(!this.appCheck){const i=this.g.getImmediate({optional:!0});i?r(i):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(z(typeof n.token=="string"),new CM(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.p(r),this.T=r=>n.writeSequenceNumber(r))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function NM(t){const e=typeof self!="undefined"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Yt.I=-1;class OS{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=NM(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function J(t,e){return t<e?-1:t>e?1:0}function Gs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}function DS(t){return t+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new P(T.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new P(T.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?J(this.nanoseconds,e.nanoseconds):J(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Q(e)}static min(){return new Q(new Ge(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xS(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xi(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function LS(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e,n,r){n===void 0?n=0:n>e.length&&B(),r===void 0?r=e.length-n:r>e.length-n&&B(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return yu.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof yu?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class ie extends yu{construct(e,n,r){return new ie(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new P(T.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ie(n)}static emptyPath(){return new ie([])}}const AM=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class lt extends yu{construct(e,n,r){return new lt(e,n,r)}static isValidIdentifier(e){return AM.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),lt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new lt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new P(T.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new P(T.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new P(T.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new lt(n)}static emptyPath(){return new lt([])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qs{constructor(e){this.fields=e,e.sort(lt.comparator)}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Gs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function RM(){return typeof atob!="undefined"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fe{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new Fe(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new Fe(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return J(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Fe.EMPTY_BYTE_STRING=new Fe("");const OM=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Br(t){if(z(!!t),typeof t=="string"){let e=0;const n=OM.exec(t);if(z(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Oe(t.seconds),nanos:Oe(t.nanos)}}function Oe(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ys(t){return typeof t=="string"?Fe.fromBase64String(t):Fe.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function MS(t){const e=t.mapValue.fields.__previous_value__;return vg(e)?MS(e):e}function vu(t){const e=Br(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){return t==null}function Sh(t){return t===0&&1/t==-1/0}function $S(t){return typeof t=="number"&&Number.isInteger(t)&&!Sh(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U{constructor(e){this.path=e}static fromPath(e){return new U(ie.fromString(e))}static fromName(e){return new U(ie.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return e!==null&&ie.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ie.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new U(new ie(e.slice()))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?vg(t)?4:10:B()}function Un(t,e){if(t===e)return!0;const n=Mi(t);if(n!==Mi(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return vu(t).isEqual(vu(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Br(r.timestampValue),o=Br(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return Ys(r.bytesValue).isEqual(Ys(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Oe(r.geoPointValue.latitude)===Oe(i.geoPointValue.latitude)&&Oe(r.geoPointValue.longitude)===Oe(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Oe(r.integerValue)===Oe(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Oe(r.doubleValue),o=Oe(i.doubleValue);return s===o?Sh(s)===Sh(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return Gs(t.arrayValue.values||[],e.arrayValue.values||[],Un);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(xS(s)!==xS(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!Un(s[a],o[a])))return!1;return!0}(t,e);default:return B()}}function wu(t,e){return(t.values||[]).find(n=>Un(n,e))!==void 0}function Js(t,e){if(t===e)return 0;const n=Mi(t),r=Mi(e);if(n!==r)return J(n,r);switch(n){case 0:return 0;case 1:return J(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Oe(i.integerValue||i.doubleValue),a=Oe(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return FS(t.timestampValue,e.timestampValue);case 4:return FS(vu(t),vu(e));case 5:return J(t.stringValue,e.stringValue);case 6:return function(i,s){const o=Ys(i),a=Ys(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let u=0;u<o.length&&u<a.length;u++){const l=J(o[u],a[u]);if(l!==0)return l}return J(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=J(Oe(i.latitude),Oe(s.latitude));return o!==0?o:J(Oe(i.longitude),Oe(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let u=0;u<o.length&&u<a.length;++u){const l=Js(o[u],a[u]);if(l)return l}return J(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){const o=i.fields||{},a=Object.keys(o),u=s.fields||{},l=Object.keys(u);a.sort(),l.sort();for(let c=0;c<a.length&&c<l.length;++c){const h=J(a[c],l[c]);if(h!==0)return h;const d=Js(o[a[c]],u[l[c]]);if(d!==0)return d}return J(a.length,l.length)}(t.mapValue,e.mapValue);default:throw B()}}function FS(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return J(t,e);const n=Br(t),r=Br(e),i=J(n.seconds,r.seconds);return i!==0?i:J(n.nanos,r.nanos)}function wg(t){return _g(t)}function _g(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Br(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ys(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,U.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=_g(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${_g(r.fields[a])}`;return s+"}"}(t.mapValue):B();var e,n}function Th(t,e){return{referenceValue:`projects/${t.projectId}/databases/${t.database}/documents/${e.path.canonicalString()}`}}function Eg(t){return!!t&&"integerValue"in t}function Ig(t){return!!t&&"arrayValue"in t}function US(t){return!!t&&"nullValue"in t}function VS(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function kh(t){return!!t&&"mapValue"in t}function _u(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xi(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=_u(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=_u(t.arrayValue.values[n]);return e}return Object.assign({},t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(e){this.value=e}static empty(){return new wt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!kh(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=_u(n)}setAll(e){let n=lt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=_u(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());kh(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Un(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];kh(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xi(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new wt(_u(this.value))}}function jS(t){const e=[];return xi(t.fields,(n,r)=>{const i=new lt([n]);if(kh(r)){const s=jS(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Qs(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e,n,r,i,s){this.key=e,this.documentType=n,this.version=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new _e(e,0,Q.min(),wt.empty(),0)}static newFoundDocument(e,n,r){return new _e(e,1,n,r,0)}static newNoDocument(e,n){return new _e(e,2,n,wt.empty(),0)}static newUnknownDocument(e,n){return new _e(e,3,n,wt.empty(),2)}convertToFoundDocument(e,n){return this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=wt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=wt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof _e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new _e(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DM{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.R=null}}function BS(t,e=null,n=[],r=[],i=null,s=null,o=null){return new DM(t,e,n,r,i,s,o)}function Eu(t){const e=D(t);if(e.R===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>LM(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Li(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=Ph(e.startAt)),e.endAt&&(n+="|ub:",n+=Ph(e.endAt)),e.R=n}return e.R}function xM(t){let e=t.path.canonicalString();return t.collectionGroup!==null&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(n=>{return`${(r=n).field.canonicalString()} ${r.op} ${wg(r.value)}`;var r}).join(", ")}]`),Li(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(n=>function(r){return`${r.field.canonicalString()} (${r.dir})`}(n)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ph(t.startAt)),t.endAt&&(e+=", endAt: "+Ph(t.endAt)),`Target(${e})`}function bh(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let i=0;i<t.orderBy.length;i++)if(!qM(t.orderBy[i],e.orderBy[i]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Un(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!WS(t.startAt,e.startAt)&&WS(t.endAt,e.endAt)}function Ch(t){return U.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}class Nt extends class{}{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.P(e,n,r):new MM(e,n,r):n==="array-contains"?new UM(e,r):n==="in"?new VM(e,r):n==="not-in"?new jM(e,r):n==="array-contains-any"?new BM(e,r):new Nt(e,n,r)}static P(e,n,r){return n==="in"?new $M(e,r):new FM(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.v(Js(n,this.value)):n!==null&&Mi(this.value)===Mi(n)&&this.v(Js(n,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return B()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function LM(t){return t.field.canonicalString()+t.op.toString()+wg(t.value)}class MM extends Nt{constructor(e,n,r){super(e,n,r),this.key=U.fromName(r.referenceValue)}matches(e){const n=U.comparator(e.key,this.key);return this.v(n)}}class $M extends Nt{constructor(e,n){super(e,"in",n),this.keys=qS("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FM extends Nt{constructor(e,n){super(e,"not-in",n),this.keys=qS("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function qS(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>U.fromName(r.referenceValue))}class UM extends Nt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Ig(n)&&wu(n.arrayValue,this.value)}}class VM extends Nt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&wu(this.value.arrayValue,n)}}class jM extends Nt{constructor(e,n){super(e,"not-in",n)}matches(e){if(wu(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!wu(this.value.arrayValue,n)}}class BM extends Nt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Ig(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>wu(this.value.arrayValue,r))}}class Iu{constructor(e,n){this.position=e,this.before=n}}function Ph(t){return`${t.before?"b":"a"}:${t.position.map(e=>wg(e)).join(",")}`}class Xs{constructor(e,n="asc"){this.field=e,this.dir=n}}function qM(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function zS(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=U.comparator(U.fromName(o.referenceValue),n.key):r=Js(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return t.before?r<=0:r<0}function WS(t,e){if(t===null)return e===null;if(e===null||t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Un(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.S=null,this.D=null,this.startAt,this.endAt}}function HS(t,e,n,r,i,s,o,a){return new or(t,e,n,r,i,s,o,a)}function Zs(t){return new or(t)}function Nh(t){return!Li(t.limit)&&t.limitType==="F"}function Ah(t){return!Li(t.limit)&&t.limitType==="L"}function Sg(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Tg(t){for(const e of t.filters)if(e.V())return e.field;return null}function kg(t){return t.collectionGroup!==null}function eo(t){const e=D(t);if(e.S===null){e.S=[];const n=Tg(e),r=Sg(e);if(n!==null&&r===null)n.isKeyField()||e.S.push(new Xs(n)),e.S.push(new Xs(lt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.S.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.S.push(new Xs(lt.keyField(),s))}}}return e.S}function un(t){const e=D(t);if(!e.D)if(e.limitType==="F")e.D=BS(e.path,e.collectionGroup,eo(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of eo(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Xs(s.field,o))}const r=e.endAt?new Iu(e.endAt.position,!e.endAt.before):null,i=e.startAt?new Iu(e.startAt.position,!e.startAt.before):null;e.D=BS(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e.D}function KS(t,e,n){return new or(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Su(t,e){return bh(un(t),un(e))&&t.limitType===e.limitType}function GS(t){return`${Eu(un(t))}|lt:${t.limitType}`}function bg(t){return`Query(target=${xM(un(t))}; limitType=${t.limitType})`}function Tu(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):U.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of n.explicitOrderBy)if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!zS(n.startAt,eo(n),r)||n.endAt&&zS(n.endAt,eo(n),r))}(t,e)}function QS(t){return(e,n)=>{let r=!1;for(const i of eo(t)){const s=zM(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function zM(t,e,n){const r=t.field.isKeyField()?U.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),u=o.data.field(i);return a!==null&&u!==null?Js(a,u):B()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return B()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YS(t,e){if(t.C){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Sh(e)?"-0":e}}function JS(t){return{integerValue:""+t}}function XS(t,e){return $S(e)?JS(e):YS(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rh{constructor(){this._=void 0}}function WM(t,e,n){return t instanceof to?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof $i?eT(t,e):t instanceof Fi?tT(t,e):function(r,i){const s=ZS(r,i),o=nT(s)+nT(r.N);return Eg(s)&&Eg(r.N)?JS(o):YS(r.k,o)}(t,e)}function HM(t,e,n){return t instanceof $i?eT(t,e):t instanceof Fi?tT(t,e):n}function ZS(t,e){return t instanceof no?Eg(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class to extends Rh{}class $i extends Rh{constructor(e){super(),this.elements=e}}function eT(t,e){const n=rT(e);for(const r of t.elements)n.some(i=>Un(i,r))||n.push(r);return{arrayValue:{values:n}}}class Fi extends Rh{constructor(e){super(),this.elements=e}}function tT(t,e){let n=rT(e);for(const r of t.elements)n=n.filter(i=>!Un(i,r));return{arrayValue:{values:n}}}class no extends Rh{constructor(e,n){super(),this.k=e,this.N=n}}function nT(t){return Oe(t.integerValue||t.doubleValue)}function rT(t){return Ig(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e,n){this.field=e,this.transform=n}}function KM(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof $i&&r instanceof $i||n instanceof Fi&&r instanceof Fi?Gs(n.elements,r.elements,Un):n instanceof no&&r instanceof no?Un(n.N,r.N):n instanceof to&&r instanceof to}(t.transform,e.transform)}class GM{constructor(e,n){this.version=e,this.transformResults=n}}class De{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new De}static exists(e){return new De(void 0,e)}static updateTime(e){return new De(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Oh(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Dh{}function QM(t,e,n){t instanceof bu?function(r,i,s){const o=r.value.clone(),a=aT(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof qr?function(r,i,s){if(!Oh(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=aT(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(oT(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Cg(t,e,n){t instanceof bu?function(r,i,s){if(!Oh(r.precondition,i))return;const o=r.value.clone(),a=uT(r.fieldTransforms,s,i);o.setAll(a),i.convertToFoundDocument(sT(i),o).setHasLocalMutations()}(t,e,n):t instanceof qr?function(r,i,s){if(!Oh(r.precondition,i))return;const o=uT(r.fieldTransforms,s,i),a=i.data;a.setAll(oT(r)),a.setAll(o),i.convertToFoundDocument(sT(i),a).setHasLocalMutations()}(t,e,n):function(r,i){Oh(r.precondition,i)&&i.convertToNoDocument(Q.min())}(t,e)}function YM(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=ZS(r.transform,i||null);s!=null&&(n==null&&(n=wt.empty()),n.set(r.field,s))}return n||null}function iT(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Gs(n,r,(i,s)=>KM(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function sT(t){return t.isFoundDocument()?t.version:Q.min()}class bu extends Dh{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}}class qr extends Dh{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}}function oT(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function aT(t,e,n){const r=new Map;z(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,HM(o,a,n[i]))}return r}function uT(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,WM(s,o,e))}return r}class Cu extends Dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}}class Pg extends Dh{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JM{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xe,X;function lT(t){switch(t){default:return B();case T.CANCELLED:case T.UNKNOWN:case T.DEADLINE_EXCEEDED:case T.RESOURCE_EXHAUSTED:case T.INTERNAL:case T.UNAVAILABLE:case T.UNAUTHENTICATED:return!1;case T.INVALID_ARGUMENT:case T.NOT_FOUND:case T.ALREADY_EXISTS:case T.PERMISSION_DENIED:case T.FAILED_PRECONDITION:case T.ABORTED:case T.OUT_OF_RANGE:case T.UNIMPLEMENTED:case T.DATA_LOSS:return!0}}function cT(t){if(t===void 0)return Re("GRPC error has no .code"),T.UNKNOWN;switch(t){case xe.OK:return T.OK;case xe.CANCELLED:return T.CANCELLED;case xe.UNKNOWN:return T.UNKNOWN;case xe.DEADLINE_EXCEEDED:return T.DEADLINE_EXCEEDED;case xe.RESOURCE_EXHAUSTED:return T.RESOURCE_EXHAUSTED;case xe.INTERNAL:return T.INTERNAL;case xe.UNAVAILABLE:return T.UNAVAILABLE;case xe.UNAUTHENTICATED:return T.UNAUTHENTICATED;case xe.INVALID_ARGUMENT:return T.INVALID_ARGUMENT;case xe.NOT_FOUND:return T.NOT_FOUND;case xe.ALREADY_EXISTS:return T.ALREADY_EXISTS;case xe.PERMISSION_DENIED:return T.PERMISSION_DENIED;case xe.FAILED_PRECONDITION:return T.FAILED_PRECONDITION;case xe.ABORTED:return T.ABORTED;case xe.OUT_OF_RANGE:return T.OUT_OF_RANGE;case xe.UNIMPLEMENTED:return T.UNIMPLEMENTED;case xe.DATA_LOSS:return T.DATA_LOSS;default:return B()}}(X=xe||(xe={}))[X.OK=0]="OK",X[X.CANCELLED=1]="CANCELLED",X[X.UNKNOWN=2]="UNKNOWN",X[X.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",X[X.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",X[X.NOT_FOUND=5]="NOT_FOUND",X[X.ALREADY_EXISTS=6]="ALREADY_EXISTS",X[X.PERMISSION_DENIED=7]="PERMISSION_DENIED",X[X.UNAUTHENTICATED=16]="UNAUTHENTICATED",X[X.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",X[X.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",X[X.ABORTED=10]="ABORTED",X[X.OUT_OF_RANGE=11]="OUT_OF_RANGE",X[X.UNIMPLEMENTED=12]="UNIMPLEMENTED",X[X.INTERNAL=13]="INTERNAL",X[X.UNAVAILABLE=14]="UNAVAILABLE",X[X.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ue{constructor(e,n){this.comparator=e,this.root=n||ct.EMPTY}insert(e,n){return new Ue(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Ue(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new xh(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new xh(this.root,e,this.comparator,!1)}getReverseIterator(){return new xh(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new xh(this.root,e,this.comparator,!0)}}class xh{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r!=null?r:ct.RED,this.left=i!=null?i:ct.EMPTY,this.right=s!=null?s:ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ct(e!=null?e:this.key,n!=null?n:this.value,r!=null?r:this.color,i!=null?i:this.left,s!=null?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ct.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw B();const e=this.left.check();if(e!==this.right.check())throw B();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw B()}get value(){throw B()}get color(){throw B()}get left(){throw B()}get right(){throw B()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ct(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.comparator=e,this.data=new Ue(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new hT(this.data.getIterator())}getIteratorFrom(e){return new hT(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof ke)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new ke(this.comparator);return n.data=e,n}}class hT{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XM=new Ue(U.comparator);function ln(){return XM}const ZM=new Ue(U.comparator);function Ng(){return ZM}const e$=new Ue(U.comparator);function dT(){return e$}const t$=new ke(U.comparator);function ae(...t){let e=t$;for(const n of t)e=e.add(n);return e}const n$=new ke(J);function Lh(){return n$}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n){const r=new Map;return r.set(e,Nu.createSynthesizedTargetChangeForCurrentChange(e,n)),new Pu(Q.min(),r,Lh(),ln(),ae())}}class Nu{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n){return new Nu(Fe.EMPTY_BYTE_STRING,n,ae(),ae(),ae())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(e,n,r,i){this.$=e,this.removedTargetIds=n,this.key=r,this.O=i}}class fT{constructor(e,n){this.targetId=e,this.M=n}}class pT{constructor(e,n,r=Fe.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class mT{constructor(){this.F=0,this.L=yT(),this.B=Fe.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return this.F!==0}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=ae(),n=ae(),r=ae();return this.L.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:B()}}),new Nu(this.B,this.U,e,n,r)}H(){this.q=!1,this.L=yT()}J(e,n){this.q=!0,this.L=this.L.insert(e,n)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.F+=1}Z(){this.F-=1}tt(){this.q=!0,this.U=!0}}class r${constructor(e){this.et=e,this.nt=new Map,this.st=ln(),this.it=gT(),this.rt=new ke(J)}ot(e){for(const n of e.$)e.O&&e.O.isFoundDocument()?this.ct(n,e.O):this.at(n,e.key,e.O);for(const n of e.removedTargetIds)this.at(n,e.key,e.O)}ut(e){this.forEachTarget(e,n=>{const r=this.ht(n);switch(e.state){case 0:this.lt(n)&&r.W(e.resumeToken);break;case 1:r.Z(),r.K||r.H(),r.W(e.resumeToken);break;case 2:r.Z(),r.K||this.removeTarget(n);break;case 3:this.lt(n)&&(r.tt(),r.W(e.resumeToken));break;case 4:this.lt(n)&&(this.ft(n),r.W(e.resumeToken));break;default:B()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.nt.forEach((r,i)=>{this.lt(i)&&n(i)})}dt(e){const n=e.targetId,r=e.M.count,i=this.wt(n);if(i){const s=i.target;if(Ch(s))if(r===0){const o=new U(s.path);this.at(n,o,_e.newNoDocument(o,Q.min()))}else z(r===1);else this._t(n)!==r&&(this.ft(n),this.rt=this.rt.add(n))}}gt(e){const n=new Map;this.nt.forEach((s,o)=>{const a=this.wt(o);if(a){if(s.current&&Ch(a.target)){const u=new U(a.target.path);this.st.get(u)!==null||this.yt(o,u)||this.at(o,u,_e.newNoDocument(u,e))}s.j&&(n.set(o,s.G()),s.H())}});let r=ae();this.it.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.wt(u);return!l||l.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))});const i=new Pu(e,n,this.rt,this.st,r);return this.st=ln(),this.it=gT(),this.rt=new ke(J),i}ct(e,n){if(!this.lt(e))return;const r=this.yt(e,n.key)?2:0;this.ht(e).J(n.key,r),this.st=this.st.insert(n.key,n),this.it=this.it.insert(n.key,this.Tt(n.key).add(e))}at(e,n,r){if(!this.lt(e))return;const i=this.ht(e);this.yt(e,n)?i.J(n,1):i.Y(n),this.it=this.it.insert(n,this.Tt(n).delete(e)),r&&(this.st=this.st.insert(n,r))}removeTarget(e){this.nt.delete(e)}_t(e){const n=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let n=this.nt.get(e);return n||(n=new mT,this.nt.set(e,n)),n}Tt(e){let n=this.it.get(e);return n||(n=new ke(J),this.it=this.it.insert(e,n)),n}lt(e){const n=this.wt(e)!==null;return n||R("WatchChangeAggregator","Detected inactive target",e),n}wt(e){const n=this.nt.get(e);return n&&n.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new mT),this.et.getRemoteKeysForTarget(e).forEach(n=>{this.at(e,n,null)})}yt(e,n){return this.et.getRemoteKeysForTarget(e).has(n)}}function gT(){return new Ue(U.comparator)}function yT(){return new Ue(U.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i$=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),s$=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))();class o${constructor(e,n){this.databaseId=e,this.C=n}}function Au(t,e){return t.C?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function vT(t,e){return t.C?e.toBase64():e.toUint8Array()}function a$(t,e){return Au(t,e.toTimestamp())}function Qe(t){return z(!!t),Q.fromTimestamp(function(e){const n=Br(e);return new Ge(n.seconds,n.nanos)}(t))}function Ag(t,e){return function(n){return new ie(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function wT(t){const e=ie.fromString(t);return z(RT(e)),e}function Ru(t,e){return Ag(t.databaseId,e.path)}function Vn(t,e){const n=wT(e);if(n.get(1)!==t.databaseId.projectId)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new P(T.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new U(ET(n))}function Rg(t,e){return Ag(t.databaseId,e)}function _T(t){const e=wT(t);return e.length===4?ie.emptyPath():ET(e)}function Ou(t){return new ie(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function ET(t){return z(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function IT(t,e,n){return{name:Ru(t,e),fields:n.value.mapValue.fields}}function ST(t,e,n){const r=Vn(t,e.name),i=Qe(e.updateTime),s=new wt({mapValue:{fields:e.fields}}),o=_e.newFoundDocument(r,i,s);return n&&o.setHasCommittedMutations(),n?o.setHasCommittedMutations():o}function u$(t,e){return"found"in e?function(n,r){z(!!r.found),r.found.name,r.found.updateTime;const i=Vn(n,r.found.name),s=Qe(r.found.updateTime),o=new wt({mapValue:{fields:r.found.fields}});return _e.newFoundDocument(i,s,o)}(t,e):"missing"in e?function(n,r){z(!!r.missing),z(!!r.readTime);const i=Vn(n,r.missing),s=Qe(r.readTime);return _e.newNoDocument(i,s)}(t,e):B()}function l$(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(u){return u==="NO_CHANGE"?0:u==="ADD"?1:u==="REMOVE"?2:u==="CURRENT"?3:u==="RESET"?4:B()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(u,l){return u.C?(z(l===void 0||typeof l=="string"),Fe.fromBase64String(l||"")):(z(l===void 0||l instanceof Uint8Array),Fe.fromUint8Array(l||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(u){const l=u.code===void 0?T.UNKNOWN:cT(u.code);return new P(l,u.message||"")}(o);n=new pT(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Vn(t,r.document.name),s=Qe(r.document.updateTime),o=new wt({mapValue:{fields:r.document.fields}}),a=_e.newFoundDocument(i,s,o),u=r.targetIds||[],l=r.removedTargetIds||[];n=new Mh(u,l,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Vn(t,r.document),s=r.readTime?Qe(r.readTime):Q.min(),o=_e.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Mh([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Vn(t,r.document),s=r.removedTargetIds||[];n=new Mh([],s,i,null)}else{if(!("filter"in e))return B();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new JM(i),o=r.targetId;n=new fT(o,s)}}return n}function $h(t,e){let n;if(e instanceof bu)n={update:IT(t,e.key,e.value)};else if(e instanceof Cu)n={delete:Ru(t,e.key)};else if(e instanceof qr)n={update:IT(t,e.key,e.data),updateMask:g$(e.fieldMask)};else{if(!(e instanceof Pg))return B();n={verify:Ru(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof to)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof $i)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Fi)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof no)return{fieldPath:s.field.canonicalString(),increment:o.N};throw B()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:a$(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:B()}(t,e.precondition)),n}function TT(t,e){const n=e.currentDocument?function(i){return i.updateTime!==void 0?De.updateTime(Qe(i.updateTime)):i.exists!==void 0?De.exists(i.exists):De.none()}(e.currentDocument):De.none(),r=e.updateTransforms?e.updateTransforms.map(i=>function(s,o){let a=null;if("setToServerValue"in o)z(o.setToServerValue==="REQUEST_TIME"),a=new to;else if("appendMissingElements"in o){const l=o.appendMissingElements.values||[];a=new $i(l)}else if("removeAllFromArray"in o){const l=o.removeAllFromArray.values||[];a=new Fi(l)}else"increment"in o?a=new no(s,o.increment):B();const u=lt.fromServerFormat(o.fieldPath);return new ku(u,a)}(t,i)):[];if(e.update){e.update.name;const i=Vn(t,e.update.name),s=new wt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const u=a.fieldPaths||[];return new Qs(u.map(l=>lt.fromServerFormat(l)))}(e.updateMask);return new qr(i,s,o,n,r)}return new bu(i,s,n,r)}if(e.delete){const i=Vn(t,e.delete);return new Cu(i,n)}if(e.verify){const i=Vn(t,e.verify);return new Pg(i,n)}return B()}function c$(t,e){return t&&t.length>0?(z(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Qe(r.updateTime):Qe(i);return s.isEqual(Q.min())&&(s=Qe(i)),new GM(s,r.transformResults||[])}(n,e))):[]}function kT(t,e){return{documents:[Rg(t,e.path)]}}function bT(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=Rg(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=Rg(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(a){if(a.length===0)return;const u=a.map(l=>function(c){if(c.op==="=="){if(VS(c.value))return{unaryFilter:{field:ro(c.field),op:"IS_NAN"}};if(US(c.value))return{unaryFilter:{field:ro(c.field),op:"IS_NULL"}}}else if(c.op==="!="){if(VS(c.value))return{unaryFilter:{field:ro(c.field),op:"IS_NOT_NAN"}};if(US(c.value))return{unaryFilter:{field:ro(c.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:ro(c.field),op:f$(c.op),value:c.value}}}(l));return u.length===1?u[0]:{compositeFilter:{op:"AND",filters:u}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(a){if(a.length!==0)return a.map(u=>function(l){return{field:ro(l.field),direction:d$(l.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(a,u){return a.C||Li(u)?u:{value:u}}(t,e.limit);return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=NT(e.startAt)),e.endAt&&(n.structuredQuery.endAt=NT(e.endAt)),n}function CT(t){let e=_T(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){z(r===1);const c=n.from[0];c.allDescendants?i=c.collectionId:e=e.child(c.collectionId)}let s=[];n.where&&(s=PT(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(c=>function(h){return new Xs(io(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(c)));let a=null;n.limit&&(a=function(c){let h;return h=typeof c=="object"?c.value:c,Li(h)?null:h}(n.limit));let u=null;n.startAt&&(u=AT(n.startAt));let l=null;return n.endAt&&(l=AT(n.endAt)),HS(e,i,o,s,a,"F",u,l)}function h$(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return B()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function PT(t){return t?t.unaryFilter!==void 0?[m$(t)]:t.fieldFilter!==void 0?[p$(t)]:t.compositeFilter!==void 0?t.compositeFilter.filters.map(e=>PT(e)).reduce((e,n)=>e.concat(n)):B():[]}function NT(t){return{before:t.before,values:t.position}}function AT(t){const e=!!t.before,n=t.values||[];return new Iu(n,e)}function d$(t){return i$[t]}function f$(t){return s$[t]}function ro(t){return{fieldPath:t.canonicalString()}}function io(t){return lt.fromServerFormat(t.fieldPath)}function p$(t){return Nt.create(io(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return B()}}(t.fieldFilter.op),t.fieldFilter.value)}function m$(t){switch(t.unaryFilter.op){case"IS_NAN":const e=io(t.unaryFilter.field);return Nt.create(e,"==",{doubleValue:NaN});case"IS_NULL":const n=io(t.unaryFilter.field);return Nt.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=io(t.unaryFilter.field);return Nt.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=io(t.unaryFilter.field);return Nt.create(i,"!=",{nullValue:"NULL_VALUE"});default:return B()}}function g$(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function RT(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function En(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=OT(e)),e=y$(t.get(n),e);return OT(e)}function y$(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case"":n+="";break;default:n+=s}}return n}function OT(t){return t+""}function ar(t){const e=t.length;if(z(e>=2),e===2)return z(t.charAt(0)===""&&t.charAt(1)===""),ie.emptyPath();const n=e-2,r=[];let i="";for(let s=0;s<e;){const o=t.indexOf("",s);switch((o<0||o>n)&&B(),t.charAt(o+1)){case"":const a=t.substring(s,o);let u;i.length===0?u=a:(i+=a,u=i,i=""),r.push(u);break;case"":i+=t.substring(s,o),i+="\0";break;case"":i+=t.substring(s,o+1);break;default:B()}s=o+2}return new ie(r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v${constructor(e,n){this.seconds=e,this.nanoseconds=n}}class Jt{constructor(e,n,r){this.ownerId=e,this.allowTabSynchronization=n,this.leaseTimestampMs=r}}Jt.store="owner",Jt.key="owner";class zr{constructor(e,n,r){this.userId=e,this.lastAcknowledgedBatchId=n,this.lastStreamToken=r}}zr.store="mutationQueues",zr.keyPath="userId";class pe{constructor(e,n,r,i,s){this.userId=e,this.batchId=n,this.localWriteTimeMs=r,this.baseMutations=i,this.mutations=s}}pe.store="mutations",pe.keyPath="batchId",pe.userMutationsIndex="userMutationsIndex",pe.userMutationsKeyPath=["userId","batchId"];class _t{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,n){return[e,En(n)]}static key(e,n,r){return[e,En(n),r]}}_t.store="documentMutations",_t.PLACEHOLDER=new _t;class w${constructor(e,n){this.path=e,this.readTime=n}}class _${constructor(e,n){this.path=e,this.version=n}}class be{constructor(e,n,r,i,s,o){this.unknownDocument=e,this.noDocument=n,this.document=r,this.hasCommittedMutations=i,this.readTime=s,this.parentPath=o}}be.store="remoteDocuments",be.readTimeIndex="readTimeIndex",be.readTimeIndexPath="readTime",be.collectionReadTimeIndex="collectionReadTimeIndex",be.collectionReadTimeIndexPath=["parentPath","readTime"];class jn{constructor(e){this.byteSize=e}}jn.store="remoteDocumentGlobal",jn.key="remoteDocumentGlobalKey";class $t{constructor(e,n,r,i,s,o,a){this.targetId=e,this.canonicalId=n,this.readTime=r,this.resumeToken=i,this.lastListenSequenceNumber=s,this.lastLimboFreeSnapshotVersion=o,this.query=a}}$t.store="targets",$t.keyPath="targetId",$t.queryTargetsIndexName="queryTargetsIndex",$t.queryTargetsKeyPath=["canonicalId","targetId"];class ht{constructor(e,n,r){this.targetId=e,this.path=n,this.sequenceNumber=r}}ht.store="targetDocuments",ht.keyPath=["targetId","path"],ht.documentTargetsIndex="documentTargetsIndex",ht.documentTargetsKeyPath=["path","targetId"];class Xt{constructor(e,n,r,i){this.highestTargetId=e,this.highestListenSequenceNumber=n,this.lastRemoteSnapshotVersion=r,this.targetCount=i}}Xt.key="targetGlobalKey",Xt.store="targetGlobal";class Ui{constructor(e,n){this.collectionId=e,this.parent=n}}Ui.store="collectionParents",Ui.keyPath=["collectionId","parent"];class ur{constructor(e,n,r,i){this.clientId=e,this.updateTimeMs=n,this.networkEnabled=r,this.inForeground=i}}ur.store="clientMetadata",ur.keyPath="clientId";class so{constructor(e,n,r){this.bundleId=e,this.createTime=n,this.version=r}}so.store="bundles",so.keyPath="bundleId";class oo{constructor(e,n,r){this.name=e,this.readTime=n,this.bundledQuery=r}}oo.store="namedQueries",oo.keyPath="name";const E$=[zr.store,pe.store,_t.store,be.store,$t.store,Jt.store,Xt.store,ht.store,ur.store,jn.store,Ui.store,so.store,oo.store],DT="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class xT{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&B(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new b((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof b?n:b.resolve(n)}catch(n){return b.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):b.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):b.reject(n)}static resolve(e){return new b((n,r)=>{n(e)})}static reject(e){return new b((n,r)=>{r(e)})}static waitFor(e){return new b((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=b.resolve(!1);for(const r of e)n=n.next(i=>i?b.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fh{constructor(e,n){this.action=e,this.transaction=n,this.aborted=!1,this.It=new Ke,this.transaction.oncomplete=()=>{this.It.resolve()},this.transaction.onabort=()=>{n.error?this.It.reject(new Du(e,n.error)):this.It.resolve()},this.transaction.onerror=r=>{const i=Og(r.target.error);this.It.reject(new Du(e,i))}}static open(e,n,r,i){try{return new Fh(n,e.transaction(i,r))}catch(s){throw new Du(n,s)}}get At(){return this.It.promise}abort(e){e&&this.It.reject(e),this.aborted||(R("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}store(e){const n=this.transaction.objectStore(e);return new S$(n)}}class In{constructor(e,n,r){this.name=e,this.version=n,this.Rt=r,In.bt(fe())===12.2&&Re("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return R("SimpleDb","Removing database:",e),ji(window.indexedDB.deleteDatabase(e)).toPromise()}static Pt(){if(!bc())return!1;if(In.vt())return!0;const e=fe(),n=In.bt(e),r=0<n&&n<10,i=In.Vt(e),s=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||s)}static vt(){var e;return typeof process!="undefined"&&((e=process.env)===null||e===void 0?void 0:e.St)==="YES"}static Dt(e,n){return e.store(n)}static bt(e){const n=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=n?n[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static Vt(e){const n=e.match(/Android ([\d.]+)/i),r=n?n[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async Ct(e){return this.db||(R("SimpleDb","Opening database:",this.name),this.db=await new Promise((n,r)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=s=>{const o=s.target.result;n(o)},i.onblocked=()=>{r(new Du(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=s=>{const o=s.target.error;o.name==="VersionError"?r(new P(T.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new P(T.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new Du(e,o))},i.onupgradeneeded=s=>{R("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',s.oldVersion);const o=s.target.result;this.Rt.Nt(o,i.transaction,s.oldVersion,this.version).next(()=>{R("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.kt&&(this.db.onversionchange=n=>this.kt(n)),this.db}xt(e){this.kt=e,this.db&&(this.db.onversionchange=n=>e(n))}async runTransaction(e,n,r,i){const s=n==="readonly";let o=0;for(;;){++o;try{this.db=await this.Ct(e);const a=Fh.open(this.db,e,s?"readonly":"readwrite",r),u=i(a).catch(l=>(a.abort(l),b.reject(l))).toPromise();return u.catch(()=>{}),await a.At,u}catch(a){const u=a.name!=="FirebaseError"&&o<3;if(R("SimpleDb","Transaction failed with error:",a.message,"Retrying:",u),this.close(),!u)return Promise.reject(a)}}}close(){this.db&&this.db.close(),this.db=void 0}}class I${constructor(e){this.$t=e,this.Ot=!1,this.Mt=null}get isDone(){return this.Ot}get Ft(){return this.Mt}set cursor(e){this.$t=e}done(){this.Ot=!0}Lt(e){this.Mt=e}delete(){return ji(this.$t.delete())}}class Du extends P{constructor(e,n){super(T.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${n}`),this.name="IndexedDbTransactionError"}}function Vi(t){return t.name==="IndexedDbTransactionError"}class S${constructor(e){this.store=e}put(e,n){let r;return n!==void 0?(R("SimpleDb","PUT",this.store.name,e,n),r=this.store.put(n,e)):(R("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),ji(r)}add(e){return R("SimpleDb","ADD",this.store.name,e,e),ji(this.store.add(e))}get(e){return ji(this.store.get(e)).next(n=>(n===void 0&&(n=null),R("SimpleDb","GET",this.store.name,e,n),n))}delete(e){return R("SimpleDb","DELETE",this.store.name,e),ji(this.store.delete(e))}count(){return R("SimpleDb","COUNT",this.store.name),ji(this.store.count())}Bt(e,n){const r=this.cursor(this.options(e,n)),i=[];return this.Ut(r,(s,o)=>{i.push(o)}).next(()=>i)}qt(e,n){R("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,n);r.Kt=!1;const i=this.cursor(r);return this.Ut(i,(s,o,a)=>a.delete())}jt(e,n){let r;n?r=e:(r={},n=e);const i=this.cursor(r);return this.Ut(i,n)}Qt(e){const n=this.cursor({});return new b((r,i)=>{n.onerror=s=>{const o=Og(s.target.error);i(o)},n.onsuccess=s=>{const o=s.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}Ut(e,n){const r=[];return new b((i,s)=>{e.onerror=o=>{s(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void i();const u=new I$(a),l=n(a.primaryKey,a.value,u);if(l instanceof b){const c=l.catch(h=>(u.done(),b.reject(h)));r.push(c)}u.isDone?i():u.Ft===null?a.continue():a.continue(u.Ft)}}).next(()=>b.waitFor(r))}options(e,n){let r;return e!==void 0&&(typeof e=="string"?r=e:n=e),{index:r,range:n}}cursor(e){let n="next";if(e.reverse&&(n="prev"),e.index){const r=this.store.index(e.index);return e.Kt?r.openKeyCursor(e.range,n):r.openCursor(e.range,n)}return this.store.openCursor(e.range,n)}}function ji(t){return new b((e,n)=>{t.onsuccess=r=>{const i=r.target.result;e(i)},t.onerror=r=>{const i=Og(r.target.error);n(i)}})}let LT=!1;function Og(t){const e=In.bt(fe());if(e>=12.2&&e<13){const n="An internal error was encountered in the Indexed Database server";if(t.message.indexOf(n)>=0){const r=new P("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${n}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return LT||(LT=!0,setTimeout(()=>{throw r},0)),r}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MT extends xT{constructor(e,n){super(),this.Wt=e,this.currentSequenceNumber=n}}function Ft(t,e){const n=D(t);return In.Dt(n.Wt,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&QM(s,e,r[i])}}applyToLocalView(e){for(const n of this.baseMutations)n.key.isEqual(e.key)&&Cg(n,e,this.localWriteTime);for(const n of this.mutations)n.key.isEqual(e.key)&&Cg(n,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach(n=>{const r=e.get(n.key),i=r;this.applyToLocalView(i),r.isValidDocument()||i.convertToNoDocument(Q.min())})}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),ae())}isEqual(e){return this.batchId===e.batchId&&Gs(this.mutations,e.mutations,(n,r)=>iT(n,r))&&Gs(this.baseMutations,e.baseMutations,(n,r)=>iT(n,r))}}class xg{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){z(e.mutations.length===r.length);let i=dT();const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new xg(e,n,r,i)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wr{constructor(e,n,r,i,s=Q.min(),o=Q.min(),a=Fe.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new Wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $T{constructor(e){this.Gt=e}}function Lg(t,e){if(e.document)return ST(t.Gt,e.document,!!e.hasCommittedMutations);if(e.noDocument){const n=U.fromSegments(e.noDocument.path),r=uo(e.noDocument.readTime),i=_e.newNoDocument(n,r);return e.hasCommittedMutations?i.setHasCommittedMutations():i}if(e.unknownDocument){const n=U.fromSegments(e.unknownDocument.path),r=uo(e.unknownDocument.version);return _e.newUnknownDocument(n,r)}return B()}function FT(t,e,n){const r=Mg(n),i=e.key.path.popLast().toArray();if(e.isFoundDocument()){const s=function(a,u){return{name:Ru(a,u.key),fields:u.data.value.mapValue.fields,updateTime:Au(a,u.version.toTimestamp())}}(t.Gt,e),o=e.hasCommittedMutations;return new be(null,null,s,o,r,i)}if(e.isNoDocument()){const s=e.key.path.toArray(),o=ao(e.version),a=e.hasCommittedMutations;return new be(null,new w$(s,o),null,a,r,i)}if(e.isUnknownDocument()){const s=e.key.path.toArray(),o=ao(e.version);return new be(new _$(s,o),null,null,!0,r,i)}return B()}function Mg(t){const e=t.toTimestamp();return[e.seconds,e.nanoseconds]}function UT(t){const e=new Ge(t[0],t[1]);return Q.fromTimestamp(e)}function ao(t){const e=t.toTimestamp();return new v$(e.seconds,e.nanoseconds)}function uo(t){const e=new Ge(t.seconds,t.nanoseconds);return Q.fromTimestamp(e)}function lo(t,e){const n=(e.baseMutations||[]).map(s=>TT(t.Gt,s));for(let s=0;s<e.mutations.length-1;++s){const o=e.mutations[s];if(s+1<e.mutations.length&&e.mutations[s+1].transform!==void 0){const a=e.mutations[s+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(s+1,1),++s}}const r=e.mutations.map(s=>TT(t.Gt,s)),i=Ge.fromMillis(e.localWriteTimeMs);return new Dg(e.batchId,i,n,r)}function xu(t){const e=uo(t.readTime),n=t.lastLimboFreeSnapshotVersion!==void 0?uo(t.lastLimboFreeSnapshotVersion):Q.min();let r;var i;return t.query.documents!==void 0?(z((i=t.query).documents.length===1),r=un(Zs(_T(i.documents[0])))):r=function(s){return un(CT(s))}(t.query),new Wr(r,t.targetId,0,t.lastListenSequenceNumber,e,n,Fe.fromBase64String(t.resumeToken))}function VT(t,e){const n=ao(e.snapshotVersion),r=ao(e.lastLimboFreeSnapshotVersion);let i;i=Ch(e.target)?kT(t.Gt,e.target):bT(t.Gt,e.target);const s=e.resumeToken.toBase64();return new $t(e.targetId,Eu(e.target),n,s,e.sequenceNumber,r,i)}function $g(t){const e=CT({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?KS(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T${getBundleMetadata(e,n){return jT(e).get(n).next(r=>{if(r)return{id:(i=r).bundleId,createTime:uo(i.createTime),version:i.version};var i})}saveBundleMetadata(e,n){return jT(e).put({bundleId:(r=n).id,createTime:ao(Qe(r.createTime)),version:r.version});var r}getNamedQuery(e,n){return BT(e).get(n).next(r=>{if(r)return{name:(i=r).name,query:$g(i.bundledQuery),readTime:uo(i.readTime)};var i})}saveNamedQuery(e,n){return BT(e).put(function(r){return{name:r.name,readTime:ao(Qe(r.readTime)),bundledQuery:r.bundledQuery}}(n))}}function jT(t){return Ft(t,so.store)}function BT(t){return Ft(t,oo.store)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k${constructor(){this.zt=new Fg}addToCollectionParentIndex(e,n){return this.zt.add(n),b.resolve()}getCollectionParents(e,n){return b.resolve(this.zt.getEntries(n))}}class Fg{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new ke(ie.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new ke(ie.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b${constructor(){this.Ht=new Fg}addToCollectionParentIndex(e,n){if(!this.Ht.has(n)){const r=n.lastSegment(),i=n.popLast();e.addOnCommittedListener(()=>{this.Ht.add(n)});const s={collectionId:r,parent:En(i)};return qT(e).put(s)}return b.resolve()}getCollectionParents(e,n){const r=[],i=IDBKeyRange.bound([n,""],[DS(n),""],!1,!0);return qT(e).Bt(i).next(s=>{for(const o of s){if(o.collectionId!==n)break;r.push(ar(o.parent))}return r})}}function qT(t){return Ft(t,Ui.store)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zT={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Ut{constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Ut(e,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WT(t,e,n){const r=t.store(pe.store),i=t.store(_t.store),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.jt({range:o},(c,h,d)=>(a++,d.delete()));s.push(u.next(()=>{z(a===1)}));const l=[];for(const c of n.mutations){const h=_t.key(e,c.key.path,n.batchId);s.push(i.delete(h)),l.push(c.key)}return b.waitFor(s).next(()=>l)}function Uh(t){if(!t)return 0;let e;if(t.document)e=t.document;else if(t.unknownDocument)e=t.unknownDocument;else{if(!t.noDocument)throw B();e=t.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ut.DEFAULT_COLLECTION_PERCENTILE=10,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ut.DEFAULT=new Ut(41943040,Ut.DEFAULT_COLLECTION_PERCENTILE,Ut.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ut.DISABLED=new Ut(-1,0,0);class Ug{constructor(e,n,r,i){this.userId=e,this.k=n,this.Jt=r,this.referenceDelegate=i,this.Yt={}}static Xt(e,n,r,i){z(e.uid!=="");const s=e.isAuthenticated()?e.uid:"";return new Ug(s,n,r,i)}checkEmpty(e){let n=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Hr(e).jt({index:pe.userMutationsIndex,range:r},(i,s,o)=>{n=!1,o.done()}).next(()=>n)}addMutationBatch(e,n,r,i){const s=co(e),o=Hr(e);return o.add({}).next(a=>{z(typeof a=="number");const u=new Dg(a,n,r,i),l=function(d,m,_){const E=_.baseMutations.map(f=>$h(d.Gt,f)),p=_.mutations.map(f=>$h(d.Gt,f));return new pe(m,_.batchId,_.localWriteTime.toMillis(),E,p)}(this.k,this.userId,u),c=[];let h=new ke((d,m)=>J(d.canonicalString(),m.canonicalString()));for(const d of i){const m=_t.key(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),c.push(o.put(l)),c.push(s.put(m,_t.PLACEHOLDER))}return h.forEach(d=>{c.push(this.Jt.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.Yt[a]=u.keys()}),b.waitFor(c).next(()=>u)})}lookupMutationBatch(e,n){return Hr(e).get(n).next(r=>r?(z(r.userId===this.userId),lo(this.k,r)):null)}Zt(e,n){return this.Yt[n]?b.resolve(this.Yt[n]):this.lookupMutationBatch(e,n).next(r=>{if(r){const i=r.keys();return this.Yt[n]=i,i}return null})}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=IDBKeyRange.lowerBound([this.userId,r]);let s=null;return Hr(e).jt({index:pe.userMutationsIndex,range:i},(o,a,u)=>{a.userId===this.userId&&(z(a.batchId>=r),s=lo(this.k,a)),u.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const n=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return Hr(e).jt({index:pe.userMutationsIndex,range:n,reverse:!0},(i,s,o)=>{r=s.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Hr(e).Bt(pe.userMutationsIndex,n).next(r=>r.map(i=>lo(this.k,i)))}getAllMutationBatchesAffectingDocumentKey(e,n){const r=_t.prefixForPath(this.userId,n.path),i=IDBKeyRange.lowerBound(r),s=[];return co(e).jt({range:i},(o,a,u)=>{const[l,c,h]=o,d=ar(c);if(l===this.userId&&n.path.isEqual(d))return Hr(e).get(h).next(m=>{if(!m)throw B();z(m.userId===this.userId),s.push(lo(this.k,m))});u.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(J);const i=[];return n.forEach(s=>{const o=_t.prefixForPath(this.userId,s.path),a=IDBKeyRange.lowerBound(o),u=co(e).jt({range:a},(l,c,h)=>{const[d,m,_]=l,E=ar(m);d===this.userId&&s.path.isEqual(E)?r=r.add(_):h.done()});i.push(u)}),b.waitFor(i).next(()=>this.te(e,r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1,s=_t.prefixForPath(this.userId,r),o=IDBKeyRange.lowerBound(s);let a=new ke(J);return co(e).jt({range:o},(u,l,c)=>{const[h,d,m]=u,_=ar(d);h===this.userId&&r.isPrefixOf(_)?_.length===i&&(a=a.add(m)):c.done()}).next(()=>this.te(e,a))}te(e,n){const r=[],i=[];return n.forEach(s=>{i.push(Hr(e).get(s).next(o=>{if(o===null)throw B();z(o.userId===this.userId),r.push(lo(this.k,o))}))}),b.waitFor(i).next(()=>r)}removeMutationBatch(e,n){return WT(e.Wt,this.userId,n).next(r=>(e.addOnCommittedListener(()=>{this.ee(n.batchId)}),b.forEach(r,i=>this.referenceDelegate.markPotentiallyOrphaned(e,i))))}ee(e){delete this.Yt[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(n=>{if(!n)return b.resolve();const r=IDBKeyRange.lowerBound(_t.prefixForUser(this.userId)),i=[];return co(e).jt({range:r},(s,o,a)=>{if(s[0]===this.userId){const u=ar(s[1]);i.push(u)}else a.done()}).next(()=>{z(i.length===0)})})}containsKey(e,n){return HT(e,this.userId,n)}ne(e){return KT(e).get(this.userId).next(n=>n||new zr(this.userId,-1,""))}}function HT(t,e,n){const r=_t.prefixForPath(e,n.path),i=r[1],s=IDBKeyRange.lowerBound(r);let o=!1;return co(t).jt({range:s,Kt:!0},(a,u,l)=>{const[c,h,d]=a;c===e&&h===i&&(o=!0),l.done()}).next(()=>o)}function Hr(t){return Ft(t,pe.store)}function co(t){return Ft(t,_t.store)}function KT(t){return Ft(t,zr.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Bi(0)}static re(){return new Bi(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class C${constructor(e,n){this.referenceDelegate=e,this.k=n}allocateTargetId(e){return this.oe(e).next(n=>{const r=new Bi(n.highestTargetId);return n.highestTargetId=r.next(),this.ce(e,n).next(()=>n.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.oe(e).next(n=>Q.fromTimestamp(new Ge(n.lastRemoteSnapshotVersion.seconds,n.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.oe(e).next(n=>n.highestListenSequenceNumber)}setTargetsMetadata(e,n,r){return this.oe(e).next(i=>(i.highestListenSequenceNumber=n,r&&(i.lastRemoteSnapshotVersion=r.toTimestamp()),n>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=n),this.ce(e,i)))}addTargetData(e,n){return this.ae(e,n).next(()=>this.oe(e).next(r=>(r.targetCount+=1,this.ue(n,r),this.ce(e,r))))}updateTargetData(e,n){return this.ae(e,n)}removeTargetData(e,n){return this.removeMatchingKeysForTargetId(e,n.targetId).next(()=>ho(e).delete(n.targetId)).next(()=>this.oe(e)).next(r=>(z(r.targetCount>0),r.targetCount-=1,this.ce(e,r)))}removeTargets(e,n,r){let i=0;const s=[];return ho(e).jt((o,a)=>{const u=xu(a);u.sequenceNumber<=n&&r.get(u.targetId)===null&&(i++,s.push(this.removeTargetData(e,u)))}).next(()=>b.waitFor(s)).next(()=>i)}forEachTarget(e,n){return ho(e).jt((r,i)=>{const s=xu(i);n(s)})}oe(e){return GT(e).get(Xt.key).next(n=>(z(n!==null),n))}ce(e,n){return GT(e).put(Xt.key,n)}ae(e,n){return ho(e).put(VT(this.k,n))}ue(e,n){let r=!1;return e.targetId>n.highestTargetId&&(n.highestTargetId=e.targetId,r=!0),e.sequenceNumber>n.highestListenSequenceNumber&&(n.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.oe(e).next(n=>n.targetCount)}getTargetData(e,n){const r=Eu(n),i=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let s=null;return ho(e).jt({range:i,index:$t.queryTargetsIndexName},(o,a,u)=>{const l=xu(a);bh(n,l.target)&&(s=l,u.done())}).next(()=>s)}addMatchingKeys(e,n,r){const i=[],s=Kr(e);return n.forEach(o=>{const a=En(o.path);i.push(s.put(new ht(r,a))),i.push(this.referenceDelegate.addReference(e,r,o))}),b.waitFor(i)}removeMatchingKeys(e,n,r){const i=Kr(e);return b.forEach(n,s=>{const o=En(s.path);return b.waitFor([i.delete([r,o]),this.referenceDelegate.removeReference(e,r,s)])})}removeMatchingKeysForTargetId(e,n){const r=Kr(e),i=IDBKeyRange.bound([n],[n+1],!1,!0);return r.delete(i)}getMatchingKeysForTargetId(e,n){const r=IDBKeyRange.bound([n],[n+1],!1,!0),i=Kr(e);let s=ae();return i.jt({range:r,Kt:!0},(o,a,u)=>{const l=ar(o[1]),c=new U(l);s=s.add(c)}).next(()=>s)}containsKey(e,n){const r=En(n.path),i=IDBKeyRange.bound([r],[DS(r)],!1,!0);let s=0;return Kr(e).jt({index:ht.documentTargetsIndex,Kt:!0,range:i},([o,a],u,l)=>{o!==0&&(s++,l.done())}).next(()=>s>0)}Et(e,n){return ho(e).get(n).next(r=>r?xu(r):null)}}function ho(t){return Ft(t,$t.store)}function GT(t){return Ft(t,Xt.store)}function Kr(t){return Ft(t,ht.store)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qi(t){if(t.code!==T.FAILED_PRECONDITION||t.message!==DT)throw t;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QT([t,e],[n,r]){const i=J(t,n);return i===0?J(e,r):i}class P${constructor(e){this.he=e,this.buffer=new ke(QT),this.le=0}fe(){return++this.le}de(e){const n=[e,this.fe()];if(this.buffer.size<this.he)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();QT(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class N${constructor(e,n){this.garbageCollector=e,this.asyncQueue=n,this.we=!1,this._e=null}start(e){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.me(e)}stop(){this._e&&(this._e.cancel(),this._e=null)}get started(){return this._e!==null}me(e){const n=this.we?3e5:6e4;R("LruGarbageCollector",`Garbage collection scheduled in ${n}ms`),this._e=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",n,async()=>{this._e=null,this.we=!0;try{await e.collectGarbage(this.garbageCollector)}catch(r){Vi(r)?R("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",r):await qi(r)}await this.me(e)})}}class A${constructor(e,n){this.ge=e,this.params=n}calculateTargetCount(e,n){return this.ge.ye(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return b.resolve(Yt.I);const r=new P$(n);return this.ge.forEachTarget(e,i=>r.de(i.sequenceNumber)).next(()=>this.ge.pe(e,i=>r.de(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.ge.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.ge.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?(R("LruGarbageCollector","Garbage collection skipped; disabled"),b.resolve(zT)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(R("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),zT):this.Te(e,n))}getCacheSize(e){return this.ge.getCacheSize(e)}Te(e,n){let r,i,s,o,a,u,l;const c=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(R("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),i=this.params.maximumSequenceNumbersToCollect):i=h,o=Date.now(),this.nthSequenceNumber(e,i))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,n))).next(h=>(s=h,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(l=Date.now(),gg()<=ee.DEBUG&&R("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-c}ms
	Determined least recently used ${i} in `+(a-o)+`ms
	Removed ${s} targets in `+(u-a)+`ms
	Removed ${h} documents in `+(l-u)+`ms
Total Duration: ${l-c}ms`),b.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R${constructor(e,n){this.db=e,this.garbageCollector=function(r,i){return new A$(r,i)}(this,n)}ye(e){const n=this.Ee(e);return this.db.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}Ee(e){let n=0;return this.pe(e,r=>{n++}).next(()=>n)}forEachTarget(e,n){return this.db.getTargetCache().forEachTarget(e,n)}pe(e,n){return this.Ie(e,(r,i)=>n(i))}addReference(e,n,r){return Vh(e,r)}removeReference(e,n,r){return Vh(e,r)}removeTargets(e,n,r){return this.db.getTargetCache().removeTargets(e,n,r)}markPotentiallyOrphaned(e,n){return Vh(e,n)}Ae(e,n){return function(r,i){let s=!1;return KT(r).Qt(o=>HT(r,o,i).next(a=>(a&&(s=!0),b.resolve(!a)))).next(()=>s)}(e,n)}removeOrphanedDocuments(e,n){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let s=0;return this.Ie(e,(o,a)=>{if(a<=n){const u=this.Ae(e,o).next(l=>{if(!l)return s++,r.getEntry(e,o).next(()=>(r.removeEntry(o),Kr(e).delete([0,En(o.path)])))});i.push(u)}}).next(()=>b.waitFor(i)).next(()=>r.apply(e)).next(()=>s)}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,n){return Vh(e,n)}Ie(e,n){const r=Kr(e);let i,s=Yt.I;return r.jt({index:ht.documentTargetsIndex},([o,a],{path:u,sequenceNumber:l})=>{o===0?(s!==Yt.I&&n(new U(ar(i)),s),s=l,i=u):s=Yt.I}).next(()=>{s!==Yt.I&&n(new U(ar(i)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Vh(t,e){return Kr(t).put(function(n,r){return new ht(0,En(n.path),r)}(e,t.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fo{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={}}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i!==void 0){for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n])}else this.inner[r]=[[e,n]]}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),!0;return!1}forEach(e){xi(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return LS(this.inner)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YT{constructor(){this.changes=new fo(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}getReadTime(e){const n=this.changes.get(e);return n?n.readTime:Q.min()}addEntry(e,n){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:n})}removeEntry(e,n=null){this.assertNotApplied(),this.changes.set(e,{document:_e.newInvalidDocument(e),readTime:n})}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?b.resolve(r.document):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O${constructor(e,n){this.k=e,this.Jt=n}addEntry(e,n,r){return Gr(e).put(jh(n),r)}removeEntry(e,n){const r=Gr(e),i=jh(n);return r.delete(i)}updateMetadata(e,n){return this.getMetadata(e).next(r=>(r.byteSize+=n,this.Re(e,r)))}getEntry(e,n){return Gr(e).get(jh(n)).next(r=>this.be(n,r))}Pe(e,n){return Gr(e).get(jh(n)).next(r=>({document:this.be(n,r),size:Uh(r)}))}getEntries(e,n){let r=ln();return this.ve(e,n,(i,s)=>{const o=this.be(i,s);r=r.insert(i,o)}).next(()=>r)}Ve(e,n){let r=ln(),i=new Ue(U.comparator);return this.ve(e,n,(s,o)=>{const a=this.be(s,o);r=r.insert(s,a),i=i.insert(s,Uh(o))}).next(()=>({documents:r,Se:i}))}ve(e,n,r){if(n.isEmpty())return b.resolve();const i=IDBKeyRange.bound(n.first().path.toArray(),n.last().path.toArray()),s=n.getIterator();let o=s.getNext();return Gr(e).jt({range:i},(a,u,l)=>{const c=U.fromSegments(a);for(;o&&U.comparator(o,c)<0;)r(o,null),o=s.getNext();o&&o.isEqual(c)&&(r(o,u),o=s.hasNext()?s.getNext():null),o?l.Lt(o.path.toArray()):l.done()}).next(()=>{for(;o;)r(o,null),o=s.hasNext()?s.getNext():null})}getDocumentsMatchingQuery(e,n,r){let i=ln();const s=n.path.length+1,o={};if(r.isEqual(Q.min())){const a=n.path.toArray();o.range=IDBKeyRange.lowerBound(a)}else{const a=n.path.toArray(),u=Mg(r);o.range=IDBKeyRange.lowerBound([a,u],!0),o.index=be.collectionReadTimeIndex}return Gr(e).jt(o,(a,u,l)=>{if(a.length!==s)return;const c=Lg(this.k,u);n.path.isPrefixOf(c.key.path)?Tu(n,c)&&(i=i.insert(c.key,c)):l.done()}).next(()=>i)}newChangeBuffer(e){return new D$(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(n=>n.byteSize)}getMetadata(e){return JT(e).get(jn.key).next(n=>(z(!!n),n))}Re(e,n){return JT(e).put(jn.key,n)}be(e,n){if(n){const r=Lg(this.k,n);if(!(r.isNoDocument()&&r.version.isEqual(Q.min())))return r}return _e.newInvalidDocument(e)}}class D$ extends YT{constructor(e,n){super(),this.De=e,this.trackRemovals=n,this.Ce=new fo(r=>r.toString(),(r,i)=>r.isEqual(i))}applyChanges(e){const n=[];let r=0,i=new ke((s,o)=>J(s.canonicalString(),o.canonicalString()));return this.changes.forEach((s,o)=>{const a=this.Ce.get(s);if(o.document.isValidDocument()){const u=FT(this.De.k,o.document,this.getReadTime(s));i=i.add(s.path.popLast()),r+=Uh(u)-a,n.push(this.De.addEntry(e,s,u))}else if(r-=a,this.trackRemovals){const u=FT(this.De.k,_e.newNoDocument(s,Q.min()),this.getReadTime(s));n.push(this.De.addEntry(e,s,u))}else n.push(this.De.removeEntry(e,s))}),i.forEach(s=>{n.push(this.De.Jt.addToCollectionParentIndex(e,s))}),n.push(this.De.updateMetadata(e,r)),b.waitFor(n)}getFromCache(e,n){return this.De.Pe(e,n).next(r=>(this.Ce.set(n,r.size),r.document))}getAllFromCache(e,n){return this.De.Ve(e,n).next(({documents:r,Se:i})=>(i.forEach((s,o)=>{this.Ce.set(s,o)}),r))}}function JT(t){return Ft(t,jn.store)}function Gr(t){return Ft(t,be.store)}function jh(t){return t.path.toArray()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x${constructor(e){this.k=e}Nt(e,n,r,i){z(r<i&&r>=0&&i<=11);const s=new Fh("createOrUpgrade",n);r<1&&i>=1&&(function(a){a.createObjectStore(Jt.store)}(e),function(a){a.createObjectStore(zr.store,{keyPath:zr.keyPath}),a.createObjectStore(pe.store,{keyPath:pe.keyPath,autoIncrement:!0}).createIndex(pe.userMutationsIndex,pe.userMutationsKeyPath,{unique:!0}),a.createObjectStore(_t.store)}(e),XT(e),function(a){a.createObjectStore(be.store)}(e));let o=b.resolve();return r<3&&i>=3&&(r!==0&&(function(a){a.deleteObjectStore(ht.store),a.deleteObjectStore($t.store),a.deleteObjectStore(Xt.store)}(e),XT(e)),o=o.next(()=>function(a){const u=a.store(Xt.store),l=new Xt(0,0,Q.min().toTimestamp(),0);return u.put(Xt.key,l)}(s))),r<4&&i>=4&&(r!==0&&(o=o.next(()=>function(a,u){return u.store(pe.store).Bt().next(l=>{a.deleteObjectStore(pe.store),a.createObjectStore(pe.store,{keyPath:pe.keyPath,autoIncrement:!0}).createIndex(pe.userMutationsIndex,pe.userMutationsKeyPath,{unique:!0});const c=u.store(pe.store),h=l.map(d=>c.put(d));return b.waitFor(h)})}(e,s))),o=o.next(()=>{(function(a){a.createObjectStore(ur.store,{keyPath:ur.keyPath})})(e)})),r<5&&i>=5&&(o=o.next(()=>this.Ne(s))),r<6&&i>=6&&(o=o.next(()=>(function(a){a.createObjectStore(jn.store)}(e),this.ke(s)))),r<7&&i>=7&&(o=o.next(()=>this.xe(s))),r<8&&i>=8&&(o=o.next(()=>this.$e(e,s))),r<9&&i>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e),function(a){const u=a.objectStore(be.store);u.createIndex(be.readTimeIndex,be.readTimeIndexPath,{unique:!1}),u.createIndex(be.collectionReadTimeIndex,be.collectionReadTimeIndexPath,{unique:!1})}(n)})),r<10&&i>=10&&(o=o.next(()=>this.Oe(s))),r<11&&i>=11&&(o=o.next(()=>{(function(a){a.createObjectStore(so.store,{keyPath:so.keyPath})})(e),function(a){a.createObjectStore(oo.store,{keyPath:oo.keyPath})}(e)})),o}ke(e){let n=0;return e.store(be.store).jt((r,i)=>{n+=Uh(i)}).next(()=>{const r=new jn(n);return e.store(jn.store).put(jn.key,r)})}Ne(e){const n=e.store(zr.store),r=e.store(pe.store);return n.Bt().next(i=>b.forEach(i,s=>{const o=IDBKeyRange.bound([s.userId,-1],[s.userId,s.lastAcknowledgedBatchId]);return r.Bt(pe.userMutationsIndex,o).next(a=>b.forEach(a,u=>{z(u.userId===s.userId);const l=lo(this.k,u);return WT(e,s.userId,l).next(()=>{})}))}))}xe(e){const n=e.store(ht.store),r=e.store(be.store);return e.store(Xt.store).get(Xt.key).next(i=>{const s=[];return r.jt((o,a)=>{const u=new ie(o),l=function(c){return[0,En(c)]}(u);s.push(n.get(l).next(c=>c?b.resolve():(h=>n.put(new ht(0,En(h),i.highestListenSequenceNumber)))(u)))}).next(()=>b.waitFor(s))})}$e(e,n){e.createObjectStore(Ui.store,{keyPath:Ui.keyPath});const r=n.store(Ui.store),i=new Fg,s=o=>{if(i.add(o)){const a=o.lastSegment(),u=o.popLast();return r.put({collectionId:a,parent:En(u)})}};return n.store(be.store).jt({Kt:!0},(o,a)=>{const u=new ie(o);return s(u.popLast())}).next(()=>n.store(_t.store).jt({Kt:!0},([o,a,u],l)=>{const c=ar(a);return s(c.popLast())}))}Oe(e){const n=e.store($t.store);return n.jt((r,i)=>{const s=xu(i),o=VT(this.k,s);return n.put(o)})}}function XT(t){t.createObjectStore(ht.store,{keyPath:ht.keyPath}).createIndex(ht.documentTargetsIndex,ht.documentTargetsKeyPath,{unique:!0}),t.createObjectStore($t.store,{keyPath:$t.keyPath}).createIndex($t.queryTargetsIndexName,$t.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Xt.store)}const Vg="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class jg{constructor(e,n,r,i,s,o,a,u,l,c){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.Me=s,this.window=o,this.document=a,this.Fe=l,this.Le=c,this.Be=null,this.Ue=!1,this.isPrimary=!1,this.networkEnabled=!0,this.qe=null,this.inForeground=!1,this.Ke=null,this.je=null,this.Qe=Number.NEGATIVE_INFINITY,this.We=h=>Promise.resolve(),!jg.Pt())throw new P(T.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new R$(this,i),this.Ge=n+"main",this.k=new $T(u),this.ze=new In(this.Ge,11,new x$(this.k)),this.He=new C$(this.referenceDelegate,this.k),this.Jt=new b$,this.Je=function(h,d){return new O$(h,d)}(this.k,this.Jt),this.Ye=new T$,this.window&&this.window.localStorage?this.Xe=this.window.localStorage:(this.Xe=null,c===!1&&Re("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ze().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new P(T.FAILED_PRECONDITION,Vg);return this.tn(),this.en(),this.nn(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.He.getHighestSequenceNumber(e))}).then(e=>{this.Be=new Yt(e,this.Fe)}).then(()=>{this.Ue=!0}).catch(e=>(this.ze&&this.ze.close(),Promise.reject(e)))}sn(e){return this.We=async n=>{if(this.started)return e(n)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ze.xt(async n=>{n.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Me.enqueueAndForget(async()=>{this.started&&await this.Ze()}))}Ze(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Bh(e).put(new ur(this.clientId,Date.now(),this.networkEnabled,this.inForeground)).next(()=>{if(this.isPrimary)return this.rn(e).next(n=>{n||(this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)))})}).next(()=>this.on(e)).next(n=>this.isPrimary&&!n?this.cn(e).next(()=>!1):!!n&&this.an(e).next(()=>!0))).catch(e=>{if(Vi(e))return R("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return R("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Me.enqueueRetryable(()=>this.We(e)),this.isPrimary=e})}rn(e){return Lu(e).get(Jt.key).next(n=>b.resolve(this.un(n)))}hn(e){return Bh(e).delete(this.clientId)}async ln(){if(this.isPrimary&&!this.fn(this.Qe,18e5)){this.Qe=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",n=>{const r=Ft(n,ur.store);return r.Bt().next(i=>{const s=this.dn(i,18e5),o=i.filter(a=>s.indexOf(a)===-1);return b.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.Xe)for(const n of e)this.Xe.removeItem(this.wn(n.clientId))}}nn(){this.je=this.Me.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ze().then(()=>this.ln()).then(()=>this.nn()))}un(e){return!!e&&e.ownerId===this.clientId}on(e){return this.Le?b.resolve(!0):Lu(e).get(Jt.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)){if(this.un(n)&&this.networkEnabled)return!0;if(!this.un(n)){if(!n.allowTabSynchronization)throw new P(T.FAILED_PRECONDITION,Vg);return!1}}return!(!this.networkEnabled||!this.inForeground)||Bh(e).Bt().next(r=>this.dn(r,5e3).find(i=>{if(this.clientId!==i.clientId){const s=!this.networkEnabled&&i.networkEnabled,o=!this.inForeground&&i.inForeground,a=this.networkEnabled===i.networkEnabled;if(s||o&&a)return!0}return!1})===void 0)}).next(n=>(this.isPrimary!==n&&R("IndexedDbPersistence",`Client ${n?"is":"is not"} eligible for a primary lease.`),n))}async shutdown(){this.Ue=!1,this.mn(),this.je&&(this.je.cancel(),this.je=null),this.gn(),this.yn(),await this.ze.runTransaction("shutdown","readwrite",[Jt.store,ur.store],e=>{const n=new MT(e,Yt.I);return this.cn(n).next(()=>this.hn(n))}),this.ze.close(),this.pn()}dn(e,n){return e.filter(r=>this.fn(r.updateTimeMs,n)&&!this._n(r.clientId))}Tn(){return this.runTransaction("getActiveClients","readonly",e=>Bh(e).Bt().next(n=>this.dn(n,18e5).map(r=>r.clientId)))}get started(){return this.Ue}getMutationQueue(e){return Ug.Xt(e,this.k,this.Jt,this.referenceDelegate)}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getIndexManager(){return this.Jt}getBundleCache(){return this.Ye}runTransaction(e,n,r){R("IndexedDbPersistence","Starting transaction:",e);const i=n==="readonly"?"readonly":"readwrite";let s;return this.ze.runTransaction(e,i,E$,o=>(s=new MT(o,this.Be?this.Be.next():Yt.I),n==="readwrite-primary"?this.rn(s).next(a=>!!a||this.on(s)).next(a=>{if(!a)throw Re(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Me.enqueueRetryable(()=>this.We(!1)),new P(T.FAILED_PRECONDITION,DT);return r(s)}).next(a=>this.an(s).next(()=>a)):this.En(s).next(()=>r(s)))).then(o=>(s.raiseOnCommittedEvent(),o))}En(e){return Lu(e).get(Jt.key).next(n=>{if(n!==null&&this.fn(n.leaseTimestampMs,5e3)&&!this._n(n.ownerId)&&!this.un(n)&&!(this.Le||this.allowTabSynchronization&&n.allowTabSynchronization))throw new P(T.FAILED_PRECONDITION,Vg)})}an(e){const n=new Jt(this.clientId,this.allowTabSynchronization,Date.now());return Lu(e).put(Jt.key,n)}static Pt(){return In.Pt()}cn(e){const n=Lu(e);return n.get(Jt.key).next(r=>this.un(r)?(R("IndexedDbPersistence","Releasing primary lease."),n.delete(Jt.key)):b.resolve())}fn(e,n){const r=Date.now();return!(e<r-n)&&(!(e>r)||(Re(`Detected an update time that is in the future: ${e} > ${r}`),!1))}tn(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Ke=()=>{this.Me.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.Ze()))},this.document.addEventListener("visibilitychange",this.Ke),this.inForeground=this.document.visibilityState==="visible")}gn(){this.Ke&&(this.document.removeEventListener("visibilitychange",this.Ke),this.Ke=null)}en(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.qe=()=>{this.mn(),yA()&&navigator.appVersion.match(/Version\/1[45]/)&&this.Me.enterRestrictedMode(!0),this.Me.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.qe))}yn(){this.qe&&(this.window.removeEventListener("pagehide",this.qe),this.qe=null)}_n(e){var n;try{const r=((n=this.Xe)===null||n===void 0?void 0:n.getItem(this.wn(e)))!==null;return R("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return Re("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}mn(){if(this.Xe)try{this.Xe.setItem(this.wn(this.clientId),String(Date.now()))}catch(e){Re("Failed to set zombie client id.",e)}}pn(){if(this.Xe)try{this.Xe.removeItem(this.wn(this.clientId))}catch{}}wn(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Lu(t){return Ft(t,Jt.store)}function Bh(t){return Ft(t,ur.store)}function Bg(t,e){let n=t.projectId;return t.isDefaultDatabase||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L${constructor(e,n){this.progress=e,this.In=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZT{constructor(e,n,r){this.Je=e,this.An=n,this.Jt=r}Rn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKey(e,n).next(r=>this.bn(e,n,r))}bn(e,n,r){return this.Je.getEntry(e,n).next(i=>{for(const s of r)s.applyToLocalView(i);return i})}Pn(e,n){e.forEach((r,i)=>{for(const s of n)s.applyToLocalView(i)})}vn(e,n){return this.Je.getEntries(e,n).next(r=>this.Vn(e,r).next(()=>r))}Vn(e,n){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,n).next(r=>this.Pn(n,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return U.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.Sn(e,n.path):kg(n)?this.Dn(e,n,r):this.Cn(e,n,r)}Sn(e,n){return this.Rn(e,new U(n)).next(r=>{let i=Ng();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}Dn(e,n,r){const i=n.collectionGroup;let s=Ng();return this.Jt.getCollectionParents(e,i).next(o=>b.forEach(o,a=>{const u=function(l,c){return new or(c,null,l.explicitOrderBy.slice(),l.filters.slice(),l.limit,l.limitType,l.startAt,l.endAt)}(n,a.child(i));return this.Cn(e,u,r).next(l=>{l.forEach((c,h)=>{s=s.insert(c,h)})})}).next(()=>s))}Cn(e,n,r){let i,s;return this.Je.getDocumentsMatchingQuery(e,n,r).next(o=>(i=o,this.An.getAllMutationBatchesAffectingQuery(e,n))).next(o=>(s=o,this.Nn(e,s,i).next(a=>{i=a;for(const u of s)for(const l of u.mutations){const c=l.key;let h=i.get(c);h==null&&(h=_e.newInvalidDocument(c),i=i.insert(c,h)),Cg(l,h,u.localWriteTime),h.isFoundDocument()||(i=i.remove(c))}}))).next(()=>(i.forEach((o,a)=>{Tu(n,a)||(i=i.remove(o))}),i))}Nn(e,n,r){let i=ae();for(const o of n)for(const a of o.mutations)a instanceof qr&&r.get(a.key)===null&&(i=i.add(a.key));let s=r;return this.Je.getEntries(e,i).next(o=>(o.forEach((a,u)=>{u.isFoundDocument()&&(s=s.insert(a,u))}),s))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qg{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.kn=r,this.xn=i}static $n(e,n){let r=ae(),i=ae();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new qg(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1{On(e){this.Mn=e}getDocumentsMatchingQuery(e,n,r,i){return function(s){return s.filters.length===0&&s.limit===null&&s.startAt==null&&s.endAt==null&&(s.explicitOrderBy.length===0||s.explicitOrderBy.length===1&&s.explicitOrderBy[0].field.isKeyField())}(n)||r.isEqual(Q.min())?this.Fn(e,n):this.Mn.vn(e,i).next(s=>{const o=this.Ln(n,s);return(Nh(n)||Ah(n))&&this.Bn(n.limitType,o,i,r)?this.Fn(e,n):(gg()<=ee.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),bg(n)),this.Mn.getDocumentsMatchingQuery(e,n,r).next(a=>(o.forEach(u=>{a=a.insert(u.key,u)}),a)))})}Ln(e,n){let r=new ke(QS(e));return n.forEach((i,s)=>{Tu(e,s)&&(r=r.add(s))}),r}Bn(e,n,r,i){if(r.size!==n.size)return!0;const s=e==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Fn(e,n){return gg()<=ee.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",bg(n)),this.Mn.getDocumentsMatchingQuery(e,n,Q.min())}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M${constructor(e,n,r,i){this.persistence=e,this.Un=n,this.k=i,this.qn=new Ue(J),this.Kn=new fo(s=>Eu(s),bh),this.jn=Q.min(),this.An=e.getMutationQueue(r),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new ZT(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.On(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qn))}}function t1(t,e,n,r){return new M$(t,e,n,r)}async function n1(t,e){const n=D(t);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",o=>{let a;return n.An.getAllMutationBatches(o).next(u=>(a=u,r=n.persistence.getMutationQueue(e),i=new ZT(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(o))).next(u=>{const l=[],c=[];let h=ae();for(const d of a){l.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}for(const d of u){c.push(d.batchId);for(const m of d.mutations)h=h.add(m.key)}return i.vn(o,h).next(d=>({Gn:d,removedBatchIds:l,addedBatchIds:c}))})});return n.An=r,n.Wn=i,n.Un.On(n.Wn),s}function $$(t,e){const n=D(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Qn.newChangeBuffer({trackRemovals:!0});return function(o,a,u,l){const c=u.batch,h=c.keys();let d=b.resolve();return h.forEach(m=>{d=d.next(()=>l.getEntry(a,m)).next(_=>{const E=u.docVersions.get(m);z(E!==null),_.version.compareTo(E)<0&&(c.applyToRemoteDocument(_,u),_.isValidDocument()&&l.addEntry(_,u.commitVersion))})}),d.next(()=>o.An.removeMutationBatch(a,c))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.An.performConsistencyCheck(r)).next(()=>n.Wn.vn(r,i))})}function r1(t){const e=D(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.He.getLastRemoteSnapshotVersion(n))}function F$(t,e){const n=D(t),r=e.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const a=[];e.targetChanges.forEach((l,c)=>{const h=i.get(c);if(!h)return;a.push(n.He.removeMatchingKeys(s,l.removedDocuments,c).next(()=>n.He.addMatchingKeys(s,l.addedDocuments,c)));let d=h.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(c)?d=d.withResumeToken(Fe.EMPTY_BYTE_STRING,Q.min()).withLastLimboFreeSnapshotVersion(Q.min()):l.resumeToken.approximateByteSize()>0&&(d=d.withResumeToken(l.resumeToken,r)),i=i.insert(c,d),function(m,_,E){return m.resumeToken.approximateByteSize()===0||_.snapshotVersion.toMicroseconds()-m.snapshotVersion.toMicroseconds()>=3e8?!0:E.addedDocuments.size+E.modifiedDocuments.size+E.removedDocuments.size>0}(h,d,l)&&a.push(n.He.updateTargetData(s,d))});let u=ln();if(e.documentUpdates.forEach((l,c)=>{e.resolvedLimboDocuments.has(l)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,l))}),a.push(i1(s,o,e.documentUpdates,r,void 0).next(l=>{u=l})),!r.isEqual(Q.min())){const l=n.He.getLastRemoteSnapshotVersion(s).next(c=>n.He.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(l)}return b.waitFor(a).next(()=>o.apply(s)).next(()=>n.Wn.Vn(s,u)).next(()=>u)}).then(s=>(n.qn=i,s))}function i1(t,e,n,r,i){let s=ae();return n.forEach(o=>s=s.add(o)),e.getEntries(t,s).next(o=>{let a=ln();return n.forEach((u,l)=>{const c=o.get(u),h=(i==null?void 0:i.get(u))||r;l.isNoDocument()&&l.version.isEqual(Q.min())?(e.removeEntry(u,h),a=a.insert(u,l)):!c.isValidDocument()||l.version.compareTo(c.version)>0||l.version.compareTo(c.version)===0&&c.hasPendingWrites?(e.addEntry(l,h),a=a.insert(u,l)):R("LocalStore","Ignoring outdated watch update for ",u,". Current version:",c.version," Watch version:",l.version)}),a})}function U$(t,e){const n=D(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.An.getNextMutationBatchAfterBatchId(r,e)))}function po(t,e){const n=D(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.He.getTargetData(r,e).next(s=>s?(i=s,b.resolve(i)):n.He.allocateTargetId(r).next(o=>(i=new Wr(e,o,0,r.currentSequenceNumber),n.He.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qn.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qn=n.qn.insert(r.targetId,r),n.Kn.set(e,r.targetId)),r})}async function mo(t,e,n){const r=D(t),i=r.qn.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Vi(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qn=r.qn.remove(e),r.Kn.delete(i.target)}function qh(t,e,n){const r=D(t);let i=Q.min(),s=ae();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,u,l){const c=D(a),h=c.Kn.get(l);return h!==void 0?b.resolve(c.qn.get(h)):c.He.getTargetData(u,l)}(r,o,un(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.Un.getDocumentsMatchingQuery(o,e,n?i:Q.min(),n?s:ae())).next(a=>({documents:a,zn:s})))}function s1(t,e){const n=D(t),r=D(n.He),i=n.qn.get(e);return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",s=>r.Et(s,e).next(o=>o?o.target:null))}function o1(t){const e=D(t);return e.persistence.runTransaction("Get new document changes","readonly",n=>function(r,i,s){const o=D(r);let a=ln(),u=Mg(s);const l=Gr(i),c=IDBKeyRange.lowerBound(u,!0);return l.jt({index:be.readTimeIndex,range:c},(h,d)=>{const m=Lg(o.k,d);a=a.insert(m.key,m),u=d.readTime}).next(()=>({In:a,readTime:UT(u)}))}(e.Qn,n,e.jn)).then(({In:n,readTime:r})=>(e.jn=r,n))}async function V$(t){const e=D(t);return e.persistence.runTransaction("Synchronize last document change read time","readonly",n=>function(r){const i=Gr(r);let s=Q.min();return i.jt({index:be.readTimeIndex,reverse:!0},(o,a,u)=>{a.readTime&&(s=UT(a.readTime)),u.done()}).next(()=>s)}(n)).then(n=>{e.jn=n})}async function j$(t,e,n,r){const i=D(t);let s=ae(),o=ln(),a=dT();for(const c of n){const h=e.Hn(c.metadata.name);c.document&&(s=s.add(h)),o=o.insert(h,e.Jn(c)),a=a.insert(h,e.Yn(c.metadata.readTime))}const u=i.Qn.newChangeBuffer({trackRemovals:!0}),l=await po(i,function(c){return un(Zs(ie.fromString(`__bundle__/docs/${c}`)))}(r));return i.persistence.runTransaction("Apply bundle documents","readwrite",c=>i1(c,u,o,Q.min(),a).next(h=>(u.apply(c),h)).next(h=>i.He.removeMatchingKeysForTargetId(c,l.targetId).next(()=>i.He.addMatchingKeys(c,s,l.targetId)).next(()=>i.Wn.Vn(c,h)).next(()=>h)))}async function B$(t,e,n=ae()){const r=await po(t,un($g(e.bundledQuery))),i=D(t);return i.persistence.runTransaction("Save named query","readwrite",s=>{const o=Qe(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return i.Ye.saveNamedQuery(s,e);const a=r.withResumeToken(Fe.EMPTY_BYTE_STRING,o);return i.qn=i.qn.insert(a.targetId,a),i.He.updateTargetData(s,a).next(()=>i.He.removeMatchingKeysForTargetId(s,r.targetId)).next(()=>i.He.addMatchingKeys(s,n,r.targetId)).next(()=>i.Ye.saveNamedQuery(s,e))})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q${constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,n){return b.resolve(this.Xn.get(n))}saveBundleMetadata(e,n){var r;return this.Xn.set(n.id,{id:(r=n).id,version:r.version,createTime:Qe(r.createTime)}),b.resolve()}getNamedQuery(e,n){return b.resolve(this.Zn.get(n))}saveNamedQuery(e,n){return this.Zn.set(n.name,function(r){return{name:r.name,query:$g(r.bundledQuery),readTime:Qe(r.readTime)}}(n)),b.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zg{constructor(){this.ts=new ke(Ye.es),this.ns=new ke(Ye.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,n){const r=new Ye(e,n);this.ts=this.ts.add(r),this.ns=this.ns.add(r)}rs(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.os(new Ye(e,n))}cs(e,n){e.forEach(r=>this.removeReference(r,n))}us(e){const n=new U(new ie([])),r=new Ye(n,e),i=new Ye(n,e+1),s=[];return this.ns.forEachInRange([r,i],o=>{this.os(o),s.push(o.key)}),s}hs(){this.ts.forEach(e=>this.os(e))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const n=new U(new ie([])),r=new Ye(n,e),i=new Ye(n,e+1);let s=ae();return this.ns.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Ye(e,0),r=this.ts.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Ye{constructor(e,n){this.key=e,this.fs=n}static es(e,n){return U.comparator(e.key,n.key)||J(e.fs,n.fs)}static ss(e,n){return J(e.fs,n.fs)||U.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z${constructor(e,n){this.Jt=e,this.referenceDelegate=n,this.An=[],this.ds=1,this.ws=new ke(Ye.es)}checkEmpty(e){return b.resolve(this.An.length===0)}addMutationBatch(e,n,r,i){const s=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const o=new Dg(s,n,r,i);this.An.push(o);for(const a of i)this.ws=this.ws.add(new Ye(a.key,s)),this.Jt.addToCollectionParentIndex(e,a.key.path.popLast());return b.resolve(o)}lookupMutationBatch(e,n){return b.resolve(this._s(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.gs(r),s=i<0?0:i;return b.resolve(this.An.length>s?this.An[s]:null)}getHighestUnacknowledgedBatchId(){return b.resolve(this.An.length===0?-1:this.ds-1)}getAllMutationBatches(e){return b.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Ye(n,0),i=new Ye(n,Number.POSITIVE_INFINITY),s=[];return this.ws.forEachInRange([r,i],o=>{const a=this._s(o.fs);s.push(a)}),b.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new ke(J);return n.forEach(i=>{const s=new Ye(i,0),o=new Ye(i,Number.POSITIVE_INFINITY);this.ws.forEachInRange([s,o],a=>{r=r.add(a.fs)})}),b.resolve(this.ys(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;U.isDocumentKey(s)||(s=s.child(""));const o=new Ye(new U(s),0);let a=new ke(J);return this.ws.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.fs)),!0)},o),b.resolve(this.ys(a))}ys(e){const n=[];return e.forEach(r=>{const i=this._s(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){z(this.ps(n.batchId,"removed")===0),this.An.shift();let r=this.ws;return b.forEach(n.mutations,i=>{const s=new Ye(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.ws=r})}ee(e){}containsKey(e,n){const r=new Ye(n,0),i=this.ws.firstAfterOrEqual(r);return b.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.An.length,b.resolve()}ps(e,n){return this.gs(e)}gs(e){return this.An.length===0?0:e-this.An[0].batchId}_s(e){const n=this.gs(e);return n<0||n>=this.An.length?null:this.An[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W${constructor(e,n){this.Jt=e,this.Ts=n,this.docs=new Ue(U.comparator),this.size=0}addEntry(e,n,r){const i=n.key,s=this.docs.get(i),o=s?s.size:0,a=this.Ts(n);return this.docs=this.docs.insert(i,{document:n.mutableCopy(),size:a,readTime:r}),this.size+=a-o,this.Jt.addToCollectionParentIndex(e,i.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return b.resolve(r?r.document.mutableCopy():_e.newInvalidDocument(n))}getEntries(e,n){let r=ln();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():_e.newInvalidDocument(i))}),b.resolve(r)}getDocumentsMatchingQuery(e,n,r){let i=ln();const s=new U(n.path.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:u,readTime:l}}=o.getNext();if(!n.path.isPrefixOf(a.path))break;l.compareTo(r)<=0||Tu(n,u)&&(i=i.insert(u.key,u.mutableCopy()))}return b.resolve(i)}Es(e,n){return b.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new H$(this)}getSize(e){return b.resolve(this.size)}}class H$ extends YT{constructor(e){super(),this.De=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.document.isValidDocument()?n.push(this.De.addEntry(e,i.document,this.getReadTime(r))):this.De.removeEntry(r)}),b.waitFor(n)}getFromCache(e,n){return this.De.getEntry(e,n)}getAllFromCache(e,n){return this.De.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K${constructor(e){this.persistence=e,this.Is=new fo(n=>Eu(n),bh),this.lastRemoteSnapshotVersion=Q.min(),this.highestTargetId=0,this.As=0,this.Rs=new zg,this.targetCount=0,this.bs=Bi.ie()}forEachTarget(e,n){return this.Is.forEach((r,i)=>n(i)),b.resolve()}getLastRemoteSnapshotVersion(e){return b.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return b.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),b.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.As&&(this.As=n),b.resolve()}ae(e){this.Is.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.bs=new Bi(n),this.highestTargetId=n),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,n){return this.ae(n),this.targetCount+=1,b.resolve()}updateTargetData(e,n){return this.ae(n),b.resolve()}removeTargetData(e,n){return this.Is.delete(n.target),this.Rs.us(n.targetId),this.targetCount-=1,b.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Is.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Is.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),b.waitFor(s).next(()=>i)}getTargetCount(e){return b.resolve(this.targetCount)}getTargetData(e,n){const r=this.Is.get(n)||null;return b.resolve(r)}addMatchingKeys(e,n,r){return this.Rs.rs(n,r),b.resolve()}removeMatchingKeys(e,n,r){this.Rs.cs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),b.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Rs.us(n),b.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Rs.ls(n);return b.resolve(r)}containsKey(e,n){return b.resolve(this.Rs.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G${constructor(e,n){this.Ps={},this.Be=new Yt(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new K$(this),this.Jt=new k$,this.Je=function(r,i){return new W$(r,i)}(this.Jt,r=>this.referenceDelegate.vs(r)),this.k=new $T(n),this.Ye=new q$(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let n=this.Ps[e.toKey()];return n||(n=new z$(this.Jt,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,n,r){R("MemoryPersistence","Starting transaction:",e);const i=new Q$(this.Be.next());return this.referenceDelegate.Vs(),r(i).next(s=>this.referenceDelegate.Ss(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ds(e,n){return b.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,n)))}}class Q$ extends xT{constructor(e){super(),this.currentSequenceNumber=e}}class Wg{constructor(e){this.persistence=e,this.Cs=new zg,this.Ns=null}static ks(e){return new Wg(e)}get xs(){if(this.Ns)return this.Ns;throw B()}addReference(e,n,r){return this.Cs.addReference(r,n),this.xs.delete(r.toString()),b.resolve()}removeReference(e,n,r){return this.Cs.removeReference(r,n),this.xs.add(r.toString()),b.resolve()}markPotentiallyOrphaned(e,n){return this.xs.add(n.toString()),b.resolve()}removeTarget(e,n){this.Cs.us(n.targetId).forEach(i=>this.xs.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.xs.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}Vs(){this.Ns=new Set}Ss(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return b.forEach(this.xs,r=>{const i=U.fromPath(r);return this.$s(e,i).next(s=>{s||n.removeEntry(i)})}).next(()=>(this.Ns=null,n.apply(e)))}updateLimboDocument(e,n){return this.$s(e,n).next(r=>{r?this.xs.delete(n.toString()):this.xs.add(n.toString())})}vs(e){return 0}$s(e,n){return b.or([()=>b.resolve(this.Cs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ds(e,n)])}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function a1(t,e){return`firestore_clients_${t}_${e}`}function u1(t,e,n){let r=`firestore_mutations_${t}_${n}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Hg(t,e){return`firestore_targets_${t}_${e}`}class zh{constructor(e,n,r,i){this.user=e,this.batchId=n,this.state=r,this.error=i}static Os(e,n,r){const i=JSON.parse(r);let s,o=typeof i=="object"&&["pending","acknowledged","rejected"].indexOf(i.state)!==-1&&(i.error===void 0||typeof i.error=="object");return o&&i.error&&(o=typeof i.error.message=="string"&&typeof i.error.code=="string",o&&(s=new P(i.error.code,i.error.message))),o?new zh(e,n,i.state,s):(Re("SharedClientState",`Failed to parse mutation state for ID '${n}': ${r}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Mu{constructor(e,n,r){this.targetId=e,this.state=n,this.error=r}static Os(e,n){const r=JSON.parse(n);let i,s=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return s&&r.error&&(s=typeof r.error.message=="string"&&typeof r.error.code=="string",s&&(i=new P(r.error.code,r.error.message))),s?new Mu(e,r.state,i):(Re("SharedClientState",`Failed to parse target state for ID '${e}': ${n}`),null)}Ms(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Wh{constructor(e,n){this.clientId=e,this.activeTargetIds=n}static Os(e,n){const r=JSON.parse(n);let i=typeof r=="object"&&r.activeTargetIds instanceof Array,s=Lh();for(let o=0;i&&o<r.activeTargetIds.length;++o)i=$S(r.activeTargetIds[o]),s=s.add(r.activeTargetIds[o]);return i?new Wh(e,s):(Re("SharedClientState",`Failed to parse client data for instance '${e}': ${n}`),null)}}class Kg{constructor(e,n){this.clientId=e,this.onlineState=n}static Os(e){const n=JSON.parse(e);return typeof n=="object"&&["Unknown","Online","Offline"].indexOf(n.onlineState)!==-1&&typeof n.clientId=="string"?new Kg(n.clientId,n.onlineState):(Re("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Gg{constructor(){this.activeTargetIds=Lh()}Fs(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ms(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Qg{constructor(e,n,r,i,s){this.window=e,this.Me=n,this.persistenceKey=r,this.Bs=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Us=this.qs.bind(this),this.Ks=new Ue(J),this.started=!1,this.js=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Qs=a1(this.persistenceKey,this.Bs),this.Ws=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.Ks=this.Ks.insert(this.Bs,new Gg),this.Gs=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.zs=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.Hs=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.Js=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this.Ys=function(a){return`firestore_bundle_loaded_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.Us)}static Pt(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Tn();for(const r of e){if(r===this.Bs)continue;const i=this.getItem(a1(this.persistenceKey,r));if(i){const s=Wh.Os(r,i);s&&(this.Ks=this.Ks.insert(s.clientId,s))}}this.Xs();const n=this.storage.getItem(this.Js);if(n){const r=this.Zs(n);r&&this.ti(r)}for(const r of this.js)this.qs(r);this.js=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.Ws,JSON.stringify(e))}getAllActiveQueryTargets(){return this.ei(this.Ks)}isActiveQueryTarget(e){let n=!1;return this.Ks.forEach((r,i)=>{i.activeTargetIds.has(e)&&(n=!0)}),n}addPendingMutation(e){this.ni(e,"pending")}updateMutationState(e,n,r){this.ni(e,n,r),this.si(e)}addLocalQueryTarget(e){let n="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Hg(this.persistenceKey,e));if(r){const i=Mu.Os(e,r);i&&(n=i.state)}}return this.ii.Fs(e),this.Xs(),n}removeLocalQueryTarget(e){this.ii.Ls(e),this.Xs()}isLocalQueryTarget(e){return this.ii.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Hg(this.persistenceKey,e))}updateQueryState(e,n,r){this.ri(e,n,r)}handleUserChange(e,n,r){n.forEach(i=>{this.si(i)}),this.currentUser=e,r.forEach(i=>{this.addPendingMutation(i)})}setOnlineState(e){this.oi(e)}notifyBundleLoaded(){this.ci()}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Us),this.removeItem(this.Qs),this.started=!1)}getItem(e){const n=this.storage.getItem(e);return R("SharedClientState","READ",e,n),n}setItem(e,n){R("SharedClientState","SET",e,n),this.storage.setItem(e,n)}removeItem(e){R("SharedClientState","REMOVE",e),this.storage.removeItem(e)}qs(e){const n=e;if(n.storageArea===this.storage){if(R("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Qs)return void Re("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Me.enqueueRetryable(async()=>{if(this.started){if(n.key!==null){if(this.Gs.test(n.key)){if(n.newValue==null){const r=this.ai(n.key);return this.ui(r,null)}{const r=this.hi(n.key,n.newValue);if(r)return this.ui(r.clientId,r)}}else if(this.zs.test(n.key)){if(n.newValue!==null){const r=this.li(n.key,n.newValue);if(r)return this.fi(r)}}else if(this.Hs.test(n.key)){if(n.newValue!==null){const r=this.di(n.key,n.newValue);if(r)return this.wi(r)}}else if(n.key===this.Js){if(n.newValue!==null){const r=this.Zs(n.newValue);if(r)return this.ti(r)}}else if(n.key===this.Ws){const r=function(i){let s=Yt.I;if(i!=null)try{const o=JSON.parse(i);z(typeof o=="number"),s=o}catch(o){Re("SharedClientState","Failed to read sequence number from WebStorage",o)}return s}(n.newValue);r!==Yt.I&&this.sequenceNumberHandler(r)}else if(n.key===this.Ys)return this.syncEngine._i()}}else this.js.push(n)})}}get ii(){return this.Ks.get(this.Bs)}Xs(){this.setItem(this.Qs,this.ii.Ms())}ni(e,n,r){const i=new zh(this.currentUser,e,n,r),s=u1(this.persistenceKey,this.currentUser,e);this.setItem(s,i.Ms())}si(e){const n=u1(this.persistenceKey,this.currentUser,e);this.removeItem(n)}oi(e){const n={clientId:this.Bs,onlineState:e};this.storage.setItem(this.Js,JSON.stringify(n))}ri(e,n,r){const i=Hg(this.persistenceKey,e),s=new Mu(e,n,r);this.setItem(i,s.Ms())}ci(){this.setItem(this.Ys,"value-not-used")}ai(e){const n=this.Gs.exec(e);return n?n[1]:null}hi(e,n){const r=this.ai(e);return Wh.Os(r,n)}li(e,n){const r=this.zs.exec(e),i=Number(r[1]),s=r[2]!==void 0?r[2]:null;return zh.Os(new ut(s),i,n)}di(e,n){const r=this.Hs.exec(e),i=Number(r[1]);return Mu.Os(i,n)}Zs(e){return Kg.Os(e)}async fi(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.mi(e.batchId,e.state,e.error);R("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}wi(e){return this.syncEngine.gi(e.targetId,e.state,e.error)}ui(e,n){const r=n?this.Ks.insert(e,n):this.Ks.remove(e),i=this.ei(this.Ks),s=this.ei(r),o=[],a=[];return s.forEach(u=>{i.has(u)||o.push(u)}),i.forEach(u=>{s.has(u)||a.push(u)}),this.syncEngine.yi(o,a).then(()=>{this.Ks=r})}ti(e){this.Ks.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}ei(e){let n=Lh();return e.forEach((r,i)=>{n=n.unionWith(i.activeTargetIds)}),n}}class l1{constructor(){this.pi=new Gg,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.pi.Fs(e),this.Ti[e]||"not-current"}updateQueryState(e,n,r){this.Ti[e]=n}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Gg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y${Ei(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c1{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.bi(),this.Pi=[],this.vi()}Ei(e){this.Pi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Pi)e(0)}bi(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Pi)e(1)}static Pt(){return typeof window!="undefined"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J$={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X${constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Oi(e){this.ki(e)}Mi(e){this.xi(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z$ extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.Fi=n+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,n,r,i,s){const o=this.Ui(e,n);R("RestConnection","Sending: ",o,r);const a={};return this.qi(a,i,s),this.Ki(e,o,a,r).then(u=>(R("RestConnection","Received: ",u),u),u=>{throw gu("RestConnection",`${e} failed with error: `,u,"url: ",o,"request:",r),u})}ji(e,n,r,i,s){return this.Bi(e,n,r,i,s)}qi(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ks,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}Ui(e,n){const r=J$[e];return`${this.Fi}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,n,r,i){return new Promise((s,o)=>{const a=new wM;a.listenOnce(gM.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case mg.NO_ERROR:const l=a.getResponseJson();R("Connection","XHR received:",JSON.stringify(l)),s(l);break;case mg.TIMEOUT:R("Connection",'RPC "'+e+'" timed out'),o(new P(T.DEADLINE_EXCEEDED,"Request time out"));break;case mg.HTTP_ERROR:const c=a.getStatus();if(R("Connection",'RPC "'+e+'" failed with status:',c,"response text:",a.getResponseText()),c>0){const h=a.getResponseJson().error;if(h&&h.status&&h.message){const d=function(m){const _=m.toLowerCase().replace(/_/g,"-");return Object.values(T).indexOf(_)>=0?_:T.UNKNOWN}(h.status);o(new P(d,h.message))}else o(new P(T.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new P(T.UNAVAILABLE,"Connection failed."));break;default:B()}}finally{R("Connection",'RPC "'+e+'" completed.')}});const u=JSON.stringify(i);a.send(n,"POST",u,r,15)})}Qi(e,n,r){const i=[this.Fi,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=pM(),o=mM(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new vM({})),this.qi(a.initMessageHeaders,n,r),U_()||kc()||mA()||zp()||gA()||qp()||(a.httpHeadersOverwriteParam="$httpHeaders");const u=i.join("");R("Connection","Creating WebChannel: "+u,a);const l=s.createWebChannel(u,a);let c=!1,h=!1;const d=new X$({Vi:_=>{h?R("Connection","Not sending because WebChannel is closed:",_):(c||(R("Connection","Opening WebChannel transport."),l.open(),c=!0),R("Connection","WebChannel sending:",_),l.send(_))},Si:()=>l.close()}),m=(_,E,p)=>{_.listen(E,f=>{try{p(f)}catch(y){setTimeout(()=>{throw y},0)}})};return m(l,Ih.EventType.OPEN,()=>{h||R("Connection","WebChannel transport opened.")}),m(l,Ih.EventType.CLOSE,()=>{h||(h=!0,R("Connection","WebChannel transport closed"),d.Oi())}),m(l,Ih.EventType.ERROR,_=>{h||(h=!0,gu("Connection","WebChannel transport errored:",_),d.Oi(new P(T.UNAVAILABLE,"The operation could not be completed")))}),m(l,Ih.EventType.MESSAGE,_=>{var E;if(!h){const p=_.data[0];z(!!p);const f=p,y=f.error||((E=f[0])===null||E===void 0?void 0:E.error);if(y){R("Connection","WebChannel received error:",y);const S=y.status;let v=function(k){const M=xe[k];if(M!==void 0)return cT(M)}(S),A=y.message;v===void 0&&(v=T.INTERNAL,A="Unknown error status: "+S+" with message "+y.message),h=!0,d.Oi(new P(v,A)),l.close()}else R("Connection","WebChannel received:",p),d.Mi(p)}}),m(o,yM.STAT_EVENT,_=>{_.stat===NS.PROXY?R("Connection","Detected buffering proxy"):_.stat===NS.NOPROXY&&R("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.$i()},0),d}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h1(){return typeof window!="undefined"?window:null}function Hh(){return typeof document!="undefined"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $u(t){return new o$(t,!0)}class Yg{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Me=e,this.timerId=n,this.Wi=r,this.Gi=i,this.zi=s,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const n=Math.floor(this.Hi+this.tr()),r=Math.max(0,Date.now()-this.Yi),i=Math.max(0,n-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Hi} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.Ji=this.Me.enqueueAfterDelay(this.timerId,i,()=>(this.Yi=Date.now(),e())),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){this.Ji!==null&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){this.Ji!==null&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class d1{constructor(e,n,r,i,s,o,a,u){this.Me=e,this.nr=r,this.sr=i,this.ir=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.rr=0,this.cr=null,this.ar=null,this.stream=null,this.ur=new Yg(e,n)}hr(){return this.state===1||this.state===5||this.lr()}lr(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&this.cr===null&&(this.cr=this.Me.enqueueAfterDelay(this.nr,6e4,()=>this.mr()))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.cr&&(this.cr.cancel(),this.cr=null)}pr(){this.ar&&(this.ar.cancel(),this.ar=null)}async close(e,n){this.yr(),this.pr(),this.ur.cancel(),this.rr++,e!==4?this.ur.reset():n&&n.code===T.RESOURCE_EXHAUSTED?(Re(n.toString()),Re("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):n&&n.code===T.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(n)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),n=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.rr===n&&this.Ir(r,i)},r=>{e(()=>{const i=new P(T.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Ar(i)})})}Ir(e,n){const r=this.Er(this.rr);this.stream=this.Rr(e,n),this.stream.Di(()=>{r(()=>(this.state=2,this.ar=this.Me.enqueueAfterDelay(this.sr,1e4,()=>(this.lr()&&(this.state=3),Promise.resolve())),this.listener.Di()))}),this.stream.Ni(i=>{r(()=>this.Ar(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}dr(){this.state=5,this.ur.Zi(async()=>{this.state=0,this.start()})}Ar(e){return R("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return n=>{this.Me.enqueueAndForget(()=>this.rr===e?n():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class eF extends d1{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.k=s}Rr(e,n){return this.ir.Qi("Listen",e,n)}onMessage(e){this.ur.reset();const n=l$(this.k,e),r=function(i){if(!("targetChange"in i))return Q.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?Q.min():s.readTime?Qe(s.readTime):Q.min()}(e);return this.listener.br(n,r)}Pr(e){const n={};n.database=Ou(this.k),n.addTarget=function(i,s){let o;const a=s.target;return o=Ch(a)?{documents:kT(i,a)}:{query:bT(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=vT(i,s.resumeToken):s.snapshotVersion.compareTo(Q.min())>0&&(o.readTime=Au(i,s.snapshotVersion.toTimestamp())),o}(this.k,e);const r=h$(this.k,e);r&&(n.labels=r),this.gr(n)}vr(e){const n={};n.database=Ou(this.k),n.removeTarget=e,this.gr(n)}}class tF extends d1{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.k=s,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,n){return this.ir.Qi("Write",e,n)}onMessage(e){if(z(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const n=c$(e.writeResults,e.commitTime),r=Qe(e.commitTime);return this.listener.Cr(r,n)}return z(!e.writeResults||e.writeResults.length===0),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=Ou(this.k),this.gr(e)}Dr(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>$h(this.k,r))};this.gr(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nF extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.ir=r,this.k=i,this.$r=!1}Or(){if(this.$r)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.Bi(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(T.UNKNOWN,i.toString())})}ji(e,n,r){return this.Or(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.ir.ji(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===T.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new P(T.UNKNOWN,i.toString())})}terminate(){this.$r=!0}}class rF{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.Mr=0,this.Fr=null,this.Lr=!0}Br(){this.Mr===0&&(this.Ur("Unknown"),this.Fr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.Fr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve())))}Kr(e){this.state==="Online"?this.Ur("Unknown"):(this.Mr++,this.Mr>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Mr=0,e==="Online"&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Re(n),this.Lr=!1):R("OnlineStateTracker",n)}jr(){this.Fr!==null&&(this.Fr.cancel(),this.Fr=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iF{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=s,this.Hr.Ei(o=>{r.enqueueAndForget(async()=>{Qr(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(a){const u=D(a);u.Gr.add(4),await go(u),u.Jr.set("Unknown"),u.Gr.delete(4),await Fu(u)}(this))})}),this.Jr=new rF(r,i)}}async function Fu(t){if(Qr(t))for(const e of t.zr)await e(!0)}async function go(t){for(const e of t.zr)await e(!1)}function Kh(t,e){const n=D(t);n.Wr.has(e.targetId)||(n.Wr.set(e.targetId,e),Zg(n)?Xg(n):vo(n).lr()&&Jg(n,e))}function Uu(t,e){const n=D(t),r=vo(n);n.Wr.delete(e),r.lr()&&f1(n,e),n.Wr.size===0&&(r.lr()?r._r():Qr(n)&&n.Jr.set("Unknown"))}function Jg(t,e){t.Yr.X(e.targetId),vo(t).Pr(e)}function f1(t,e){t.Yr.X(e),vo(t).vr(e)}function Xg(t){t.Yr=new r$({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.Wr.get(e)||null}),vo(t).start(),t.Jr.Br()}function Zg(t){return Qr(t)&&!vo(t).hr()&&t.Wr.size>0}function Qr(t){return D(t).Gr.size===0}function p1(t){t.Yr=void 0}async function sF(t){t.Wr.forEach((e,n)=>{Jg(t,e)})}async function oF(t,e){p1(t),Zg(t)?(t.Jr.Kr(e),Xg(t)):t.Jr.set("Unknown")}async function aF(t,e,n){if(t.Jr.set("Online"),e instanceof pT&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.Wr.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.Wr.delete(o),r.Yr.removeTarget(o))}(t,e)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gh(t,r)}else if(e instanceof Mh?t.Yr.ot(e):e instanceof fT?t.Yr.dt(e):t.Yr.ut(e),!n.isEqual(Q.min()))try{const r=await r1(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.Yr.gt(s);return o.targetChanges.forEach((a,u)=>{if(a.resumeToken.approximateByteSize()>0){const l=i.Wr.get(u);l&&i.Wr.set(u,l.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const u=i.Wr.get(a);if(!u)return;i.Wr.set(a,u.withResumeToken(Fe.EMPTY_BYTE_STRING,u.snapshotVersion)),f1(i,a);const l=new Wr(u.target,a,1,u.sequenceNumber);Jg(i,l)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Gh(t,r)}}async function Gh(t,e,n){if(!Vi(e))throw e;t.Gr.add(1),await go(t),t.Jr.set("Offline"),n||(n=()=>r1(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await n(),t.Gr.delete(1),await Fu(t)})}function m1(t,e){return e().catch(n=>Gh(t,n,e))}async function yo(t){const e=D(t),n=Yr(e);let r=e.Qr.length>0?e.Qr[e.Qr.length-1].batchId:-1;for(;uF(e);)try{const i=await U$(e.localStore,r);if(i===null){e.Qr.length===0&&n._r();break}r=i.batchId,lF(e,i)}catch(i){await Gh(e,i)}g1(e)&&y1(e)}function uF(t){return Qr(t)&&t.Qr.length<10}function lF(t,e){t.Qr.push(e);const n=Yr(t);n.lr()&&n.Sr&&n.Dr(e.mutations)}function g1(t){return Qr(t)&&!Yr(t).hr()&&t.Qr.length>0}function y1(t){Yr(t).start()}async function cF(t){Yr(t).kr()}async function hF(t){const e=Yr(t);for(const n of t.Qr)e.Dr(n.mutations)}async function dF(t,e,n){const r=t.Qr.shift(),i=xg.from(r,e,n);await m1(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await yo(t)}async function fF(t,e){e&&Yr(t).Sr&&await async function(n,r){if(i=r.code,lT(i)&&i!==T.ABORTED){const s=n.Qr.shift();Yr(n).wr(),await m1(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await yo(n)}var i}(t,e),g1(t)&&y1(t)}async function v1(t,e){const n=D(t);n.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=Qr(n);n.Gr.add(3),await go(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Gr.delete(3),await Fu(n)}async function ey(t,e){const n=D(t);e?(n.Gr.delete(2),await Fu(n)):e||(n.Gr.add(2),await go(n),n.Jr.set("Unknown"))}function vo(t){return t.Xr||(t.Xr=function(e,n,r){const i=D(e);return i.Or(),new eF(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:sF.bind(null,t),Ni:oF.bind(null,t),br:aF.bind(null,t)}),t.zr.push(async e=>{e?(t.Xr.wr(),Zg(t)?Xg(t):t.Jr.set("Unknown")):(await t.Xr.stop(),p1(t))})),t.Xr}function Yr(t){return t.Zr||(t.Zr=function(e,n,r){const i=D(e);return i.Or(),new tF(n,i.ir,i.authCredentials,i.appCheckCredentials,i.k,r)}(t.datastore,t.asyncQueue,{Di:cF.bind(null,t),Ni:fF.bind(null,t),Nr:hF.bind(null,t),Cr:dF.bind(null,t)}),t.zr.push(async e=>{e?(t.Zr.wr(),await yo(t)):(await t.Zr.stop(),t.Qr.length>0&&(R("RemoteStore",`Stopping write stream with ${t.Qr.length} pending writes`),t.Qr=[]))})),t.Zr}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ty{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ke,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new ty(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new P(T.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function wo(t,e){if(Re("AsyncQueue",`${e}: ${t}`),Vi(t))return new P(T.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _o{constructor(e){this.comparator=e?(n,r)=>e(n,r)||U.comparator(n.key,r.key):(n,r)=>U.comparator(n.key,r.key),this.keyedMap=Ng(),this.sortedSet=new Ue(this.comparator)}static emptySet(e){return new _o(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof _o)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new _o;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class w1{constructor(){this.eo=new Ue(U.comparator)}track(e){const n=e.doc.key,r=this.eo.get(n);r?e.type!==0&&r.type===3?this.eo=this.eo.insert(n,e):e.type===3&&r.type!==1?this.eo=this.eo.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.eo=this.eo.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.eo=this.eo.remove(n):e.type===1&&r.type===2?this.eo=this.eo.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.eo=this.eo.insert(n,{type:2,doc:e.doc}):B():this.eo=this.eo.insert(n,e)}no(){const e=[];return this.eo.inorderTraversal((n,r)=>{e.push(r)}),e}}class Eo{constructor(e,n,r,i,s,o,a,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u}static fromInitialDocuments(e,n,r,i){const s=[];return n.forEach(o=>{s.push({type:0,doc:o})}),new Eo(e,n,_o.emptySet(n),s,r,i,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Su(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pF{constructor(){this.so=void 0,this.listeners=[]}}class mF{constructor(){this.queries=new fo(e=>GS(e),Su),this.onlineState="Unknown",this.io=new Set}}async function ny(t,e){const n=D(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new pF),i)try{s.so=await n.onListen(r)}catch(o){const a=wo(o,`Initialization of query '${bg(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.ro(n.onlineState),s.so&&e.oo(s.so)&&iy(n)}async function ry(t,e){const n=D(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function gF(t,e){const n=D(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.oo(i)&&(r=!0);o.so=i}}r&&iy(n)}function yF(t,e,n){const r=D(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function iy(t){t.io.forEach(e=>{e.next()})}class sy{constructor(e,n,r){this.query=e,this.co=n,this.ao=!1,this.uo=null,this.onlineState="Unknown",this.options=r||{}}oo(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Eo(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let n=!1;return this.ao?this.ho(e)&&(this.co.next(e),n=!0):this.lo(e,this.onlineState)&&(this.fo(e),n=!0),this.uo=e,n}onError(e){this.co.error(e)}ro(e){this.onlineState=e;let n=!1;return this.uo&&!this.ao&&this.lo(this.uo,e)&&(this.fo(this.uo),n=!0),n}lo(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.wo||!r)&&(!e.docs.isEmpty()||n==="Offline")}ho(e){if(e.docChanges.length>0)return!0;const n=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}fo(e){e=Eo.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.ao=!0,this.co.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vF{constructor(e,n){this.payload=e,this.byteLength=n}_o(){return"metadata"in this.payload}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e){this.k=e}Hn(e){return Vn(this.k,e)}Jn(e){return e.metadata.exists?ST(this.k,e.document,!1):_e.newNoDocument(this.Hn(e.metadata.name),this.Yn(e.metadata.readTime))}Yn(e){return Qe(e)}}class wF{constructor(e,n,r){this.mo=e,this.localStore=n,this.k=r,this.queries=[],this.documents=[],this.progress=E1(e)}yo(e){this.progress.bytesLoaded+=e.byteLength;let n=this.progress.documentsLoaded;return e.payload.namedQuery?this.queries.push(e.payload.namedQuery):e.payload.documentMetadata?(this.documents.push({metadata:e.payload.documentMetadata}),e.payload.documentMetadata.exists||++n):e.payload.document&&(this.documents[this.documents.length-1].document=e.payload.document,++n),n!==this.progress.documentsLoaded?(this.progress.documentsLoaded=n,Object.assign({},this.progress)):null}po(e){const n=new Map,r=new _1(this.k);for(const i of e)if(i.metadata.queries){const s=r.Hn(i.metadata.name);for(const o of i.metadata.queries){const a=(n.get(o)||ae()).add(s);n.set(o,a)}}return n}async complete(){const e=await j$(this.localStore,new _1(this.k),this.documents,this.mo.id),n=this.po(this.documents);for(const r of this.queries)await B$(this.localStore,r,n.get(r.name));return this.progress.taskState="Success",new L$(Object.assign({},this.progress),e)}}function E1(t){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:t.totalDocuments,totalBytes:t.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class I1{constructor(e){this.key=e}}class S1{constructor(e){this.key=e}}class T1{constructor(e,n){this.query=e,this.To=n,this.Eo=null,this.current=!1,this.Io=ae(),this.mutatedKeys=ae(),this.Ao=QS(e),this.Ro=new _o(this.Ao)}get bo(){return this.To}Po(e,n){const r=n?n.vo:new w1,i=n?n.Ro:this.Ro;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=Nh(this.query)&&i.size===this.query.limit?i.last():null,l=Ah(this.query)&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((c,h)=>{const d=i.get(c),m=Tu(this.query,h)?h:null,_=!!d&&this.mutatedKeys.has(d.key),E=!!m&&(m.hasLocalMutations||this.mutatedKeys.has(m.key)&&m.hasCommittedMutations);let p=!1;d&&m?d.data.isEqual(m.data)?_!==E&&(r.track({type:3,doc:m}),p=!0):this.Vo(d,m)||(r.track({type:2,doc:m}),p=!0,(u&&this.Ao(m,u)>0||l&&this.Ao(m,l)<0)&&(a=!0)):!d&&m?(r.track({type:0,doc:m}),p=!0):d&&!m&&(r.track({type:1,doc:d}),p=!0,(u||l)&&(a=!0)),p&&(m?(o=o.add(m),s=E?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),Nh(this.query)||Ah(this.query))for(;o.size>this.query.limit;){const c=Nh(this.query)?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{Ro:o,vo:r,Bn:a,mutatedKeys:s}}Vo(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const s=e.vo.no();s.sort((l,c)=>function(h,d){const m=_=>{switch(_){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return B()}};return m(h)-m(d)}(l.type,c.type)||this.Ao(l.doc,c.doc)),this.So(r);const o=n?this.Do():[],a=this.Io.size===0&&this.current?1:0,u=a!==this.Eo;return this.Eo=a,s.length!==0||u?{snapshot:new Eo(this.query,e.Ro,i,s,e.mutatedKeys,a===0,u,!1),Co:o}:{Co:o}}ro(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new w1,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach(n=>this.To=this.To.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.To=this.To.delete(n)),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=ae(),this.Ro.forEach(r=>{this.No(r.key)&&(this.Io=this.Io.add(r.key))});const n=[];return e.forEach(r=>{this.Io.has(r)||n.push(new S1(r))}),this.Io.forEach(r=>{e.has(r)||n.push(new I1(r))}),n}ko(e){this.To=e.zn,this.Io=ae();const n=this.Po(e.documents);return this.applyChanges(n,!0)}xo(){return Eo.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,this.Eo===0)}}class _F{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class EF{constructor(e){this.key=e,this.$o=!1}}class IF{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Oo={},this.Mo=new fo(a=>GS(a),Su),this.Fo=new Map,this.Lo=new Set,this.Bo=new Ue(U.comparator),this.Uo=new Map,this.qo=new zg,this.Ko={},this.jo=new Map,this.Qo=Bi.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return this.Wo===!0}}async function SF(t,e){const n=hy(t);let r,i;const s=n.Mo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const o=await po(n.localStore,un(e)),a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await oy(n,e,r,a==="current"),n.isPrimaryClient&&Kh(n.remoteStore,o)}return i}async function oy(t,e,n,r){t.Go=(c,h,d)=>async function(m,_,E,p){let f=_.view.Po(E);f.Bn&&(f=await qh(m.localStore,_.query,!1).then(({documents:v})=>_.view.Po(v,f)));const y=p&&p.targetChanges.get(_.targetId),S=_.view.applyChanges(f,m.isPrimaryClient,y);return ly(m,_.targetId,S.Co),S.snapshot}(t,c,h,d);const i=await qh(t.localStore,e,!0),s=new T1(e,i.zn),o=s.Po(i.documents),a=Nu.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline"),u=s.applyChanges(o,t.isPrimaryClient,a);ly(t,n,u.Co);const l=new _F(e,n,s);return t.Mo.set(e,l),t.Fo.has(n)?t.Fo.get(n).push(e):t.Fo.set(n,[e]),u.snapshot}async function TF(t,e){const n=D(t),r=n.Mo.get(e),i=n.Fo.get(r.targetId);if(i.length>1)return n.Fo.set(r.targetId,i.filter(s=>!Su(s,e))),void n.Mo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await mo(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Uu(n.remoteStore,r.targetId),Io(n,r.targetId)}).catch(qi)):(Io(n,r.targetId),await mo(n.localStore,r.targetId,!0))}async function kF(t,e,n){const r=dy(t);try{const i=await function(s,o){const a=D(s),u=Ge.now(),l=o.reduce((h,d)=>h.add(d.key),ae());let c;return a.persistence.runTransaction("Locally write mutations","readwrite",h=>a.Wn.vn(h,l).next(d=>{c=d;const m=[];for(const _ of o){const E=YM(_,c.get(_.key));E!=null&&m.push(new qr(_.key,E,jS(E.value.mapValue),De.exists(!0)))}return a.An.addMutationBatch(h,u,m,o)})).then(h=>(h.applyToLocalDocumentSet(c),{batchId:h.batchId,changes:c}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let u=s.Ko[s.currentUser.toKey()];u||(u=new Ue(J)),u=u.insert(o,a),s.Ko[s.currentUser.toKey()]=u}(r,i.batchId,n),await lr(r,i.changes),await yo(r.remoteStore)}catch(i){const s=wo(i,"Failed to persist write");n.reject(s)}}async function k1(t,e){const n=D(t);try{const r=await F$(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Uo.get(s);o&&(z(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.$o=!0:i.modifiedDocuments.size>0?z(o.$o):i.removedDocuments.size>0&&(z(o.$o),o.$o=!1))}),await lr(n,r,e)}catch(r){await qi(r)}}function b1(t,e,n){const r=D(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.Mo.forEach((s,o)=>{const a=o.view.ro(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=D(s);a.onlineState=o;let u=!1;a.queries.forEach((l,c)=>{for(const h of c.listeners)h.ro(o)&&(u=!0)}),u&&iy(a)}(r.eventManager,e),i.length&&r.Oo.br(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function bF(t,e,n){const r=D(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Uo.get(e),s=i&&i.key;if(s){let o=new Ue(U.comparator);o=o.insert(s,_e.newNoDocument(s,Q.min()));const a=ae().add(s),u=new Pu(Q.min(),new Map,new ke(J),o,a);await k1(r,u),r.Bo=r.Bo.remove(s),r.Uo.delete(e),cy(r)}else await mo(r.localStore,e,!1).then(()=>Io(r,e,n)).catch(qi)}async function CF(t,e){const n=D(t),r=e.batch.batchId;try{const i=await $$(n.localStore,e);uy(n,r,null),ay(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await lr(n,i)}catch(i){await qi(i)}}async function PF(t,e,n){const r=D(t);try{const i=await function(s,o){const a=D(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",u=>{let l;return a.An.lookupMutationBatch(u,o).next(c=>(z(c!==null),l=c.keys(),a.An.removeMutationBatch(u,c))).next(()=>a.An.performConsistencyCheck(u)).next(()=>a.Wn.vn(u,l))})}(r.localStore,e);uy(r,e,n),ay(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await lr(r,i)}catch(i){await qi(i)}}async function NF(t,e){const n=D(t);Qr(n.remoteStore)||R("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(s){const o=D(s);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.An.getHighestUnacknowledgedBatchId(a))}(n.localStore);if(r===-1)return void e.resolve();const i=n.jo.get(r)||[];i.push(e),n.jo.set(r,i)}catch(r){const i=wo(r,"Initialization of waitForPendingWrites() operation failed");e.reject(i)}}function ay(t,e){(t.jo.get(e)||[]).forEach(n=>{n.resolve()}),t.jo.delete(e)}function uy(t,e,n){const r=D(t);let i=r.Ko[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.Ko[r.currentUser.toKey()]=i}}function Io(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Fo.get(e))t.Mo.delete(r),n&&t.Oo.zo(r,n);t.Fo.delete(e),t.isPrimaryClient&&t.qo.us(e).forEach(r=>{t.qo.containsKey(r)||C1(t,r)})}function C1(t,e){t.Lo.delete(e.path.canonicalString());const n=t.Bo.get(e);n!==null&&(Uu(t.remoteStore,n),t.Bo=t.Bo.remove(e),t.Uo.delete(n),cy(t))}function ly(t,e,n){for(const r of n)r instanceof I1?(t.qo.addReference(r.key,e),AF(t,r)):r instanceof S1?(R("SyncEngine","Document no longer in limbo: "+r.key),t.qo.removeReference(r.key,e),t.qo.containsKey(r.key)||C1(t,r.key)):B()}function AF(t,e){const n=e.key,r=n.path.canonicalString();t.Bo.get(n)||t.Lo.has(r)||(R("SyncEngine","New document in limbo: "+n),t.Lo.add(r),cy(t))}function cy(t){for(;t.Lo.size>0&&t.Bo.size<t.maxConcurrentLimboResolutions;){const e=t.Lo.values().next().value;t.Lo.delete(e);const n=new U(ie.fromString(e)),r=t.Qo.next();t.Uo.set(r,new EF(n)),t.Bo=t.Bo.insert(n,r),Kh(t.remoteStore,new Wr(un(Zs(n.path)),r,2,Yt.I))}}async function lr(t,e,n){const r=D(t),i=[],s=[],o=[];r.Mo.isEmpty()||(r.Mo.forEach((a,u)=>{o.push(r.Go(u,e,n).then(l=>{if(l){r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l.fromCache?"not-current":"current"),i.push(l);const c=qg.$n(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Oo.br(i),await async function(a,u){const l=D(a);try{await l.persistence.runTransaction("notifyLocalViewChanges","readwrite",c=>b.forEach(u,h=>b.forEach(h.kn,d=>l.persistence.referenceDelegate.addReference(c,h.targetId,d)).next(()=>b.forEach(h.xn,d=>l.persistence.referenceDelegate.removeReference(c,h.targetId,d)))))}catch(c){if(!Vi(c))throw c;R("LocalStore","Failed to update sequence numbers: "+c)}for(const c of u){const h=c.targetId;if(!c.fromCache){const d=l.qn.get(h),m=d.snapshotVersion,_=d.withLastLimboFreeSnapshotVersion(m);l.qn=l.qn.insert(h,_)}}}(r.localStore,s))}async function RF(t,e){const n=D(t);if(!n.currentUser.isEqual(e)){R("SyncEngine","User change. New user:",e.toKey());const r=await n1(n.localStore,e);n.currentUser=e,function(i,s){i.jo.forEach(o=>{o.forEach(a=>{a.reject(new P(T.CANCELLED,s))})}),i.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await lr(n,r.Gn)}}function OF(t,e){const n=D(t),r=n.Uo.get(e);if(r&&r.$o)return ae().add(r.key);{let i=ae();const s=n.Fo.get(e);if(!s)return i;for(const o of s){const a=n.Mo.get(o);i=i.unionWith(a.view.bo)}return i}}async function DF(t,e){const n=D(t),r=await qh(n.localStore,e.query,!0),i=e.view.ko(r);return n.isPrimaryClient&&ly(n,e.targetId,i.Co),i}async function xF(t){const e=D(t);return o1(e.localStore).then(n=>lr(e,n))}async function LF(t,e,n,r){const i=D(t),s=await function(o,a){const u=D(o),l=D(u.An);return u.persistence.runTransaction("Lookup mutation documents","readonly",c=>l.Zt(c,a).next(h=>h?u.Wn.vn(c,h):b.resolve(null)))}(i.localStore,e);s!==null?(n==="pending"?await yo(i.remoteStore):n==="acknowledged"||n==="rejected"?(uy(i,e,r||null),ay(i,e),function(o,a){D(D(o).An).ee(a)}(i.localStore,e)):B(),await lr(i,s)):R("SyncEngine","Cannot apply mutation batch with id: "+e)}async function MF(t,e){const n=D(t);if(hy(n),dy(n),e===!0&&n.Wo!==!0){const r=n.sharedClientState.getAllActiveQueryTargets(),i=await P1(n,r.toArray());n.Wo=!0,await ey(n.remoteStore,!0);for(const s of i)Kh(n.remoteStore,s)}else if(e===!1&&n.Wo!==!1){const r=[];let i=Promise.resolve();n.Fo.forEach((s,o)=>{n.sharedClientState.isLocalQueryTarget(o)?r.push(o):i=i.then(()=>(Io(n,o),mo(n.localStore,o,!0))),Uu(n.remoteStore,o)}),await i,await P1(n,r),function(s){const o=D(s);o.Uo.forEach((a,u)=>{Uu(o.remoteStore,u)}),o.qo.hs(),o.Uo=new Map,o.Bo=new Ue(U.comparator)}(n),n.Wo=!1,await ey(n.remoteStore,!1)}}async function P1(t,e,n){const r=D(t),i=[],s=[];for(const o of e){let a;const u=r.Fo.get(o);if(u&&u.length!==0){a=await po(r.localStore,un(u[0]));for(const l of u){const c=r.Mo.get(l),h=await DF(r,c);h.snapshot&&s.push(h.snapshot)}}else{const l=await s1(r.localStore,o);a=await po(r.localStore,l),await oy(r,N1(l),o,!1)}i.push(a)}return r.Oo.br(s),i}function N1(t){return HS(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function $F(t){const e=D(t);return D(D(e.localStore).persistence).Tn()}async function FF(t,e,n,r){const i=D(t);if(i.Wo)R("SyncEngine","Ignoring unexpected query state notification.");else if(i.Fo.has(e))switch(n){case"current":case"not-current":{const s=await o1(i.localStore),o=Pu.createSynthesizedRemoteEventForCurrentChange(e,n==="current");await lr(i,s,o);break}case"rejected":await mo(i.localStore,e,!0),Io(i,e,r);break;default:B()}}async function UF(t,e,n){const r=hy(t);if(r.Wo){for(const i of e){if(r.Fo.has(i)){R("SyncEngine","Adding an already active target "+i);continue}const s=await s1(r.localStore,i),o=await po(r.localStore,s);await oy(r,N1(s),o.targetId,!1),Kh(r.remoteStore,o)}for(const i of n)r.Fo.has(i)&&await mo(r.localStore,i,!1).then(()=>{Uu(r.remoteStore,i),Io(r,i)}).catch(qi)}}function hy(t){const e=D(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=k1.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=OF.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=bF.bind(null,e),e.Oo.br=gF.bind(null,e.eventManager),e.Oo.zo=yF.bind(null,e.eventManager),e}function dy(t){const e=D(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=CF.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=PF.bind(null,e),e}function VF(t,e,n){const r=D(t);(async function(i,s,o){try{const a=await s.getMetadata();if(await function(h,d){const m=D(h),_=Qe(d.createTime);return m.persistence.runTransaction("hasNewerBundle","readonly",E=>m.Ye.getBundleMetadata(E,d.id)).then(E=>!!E&&E.createTime.compareTo(_)>=0)}(i.localStore,a))return await s.close(),void o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a));o._updateProgress(E1(a));const u=new wF(a,i.localStore,s.k);let l=await s.Ho();for(;l;){const h=await u.yo(l);h&&o._updateProgress(h),l=await s.Ho()}const c=await u.complete();await lr(i,c.In,void 0),await function(h,d){const m=D(h);return m.persistence.runTransaction("Save bundle","readwrite",_=>m.Ye.saveBundleMetadata(_,d))}(i.localStore,a),o._completeWith(c.progress)}catch(a){gu("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a)}})(r,e,n).then(()=>{r.sharedClientState.notifyBundleLoaded()})}class A1{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=$u(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return t1(this.persistence,new e1,e.initialUser,this.k)}Yo(e){return new G$(Wg.ks,this.k)}Jo(e){return new l1}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class R1 extends A1{constructor(e,n,r){super(),this.tc=e,this.cacheSizeBytes=n,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await V$(this.localStore),await this.tc.initialize(this,e),await dy(this.tc.syncEngine),await yo(this.tc.remoteStore),await this.persistence.sn(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(this.localStore),Promise.resolve()))}Zo(e){return t1(this.persistence,new e1,e.initialUser,this.k)}Xo(e){const n=this.persistence.referenceDelegate.garbageCollector;return new N$(n,e.asyncQueue)}Yo(e){const n=Bg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Ut.withCacheSize(this.cacheSizeBytes):Ut.DEFAULT;return new jg(this.synchronizeTabs,n,e.clientId,r,e.asyncQueue,h1(),Hh(),this.k,this.sharedClientState,!!this.forceOwnership)}Jo(e){return new l1}}class jF extends R1{constructor(e,n){super(e,n,!1),this.tc=e,this.cacheSizeBytes=n,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const n=this.tc.syncEngine;this.sharedClientState instanceof Qg&&(this.sharedClientState.syncEngine={mi:LF.bind(null,n),gi:FF.bind(null,n),yi:UF.bind(null,n),Tn:$F.bind(null,n),_i:xF.bind(null,n)},await this.sharedClientState.start()),await this.persistence.sn(async r=>{await MF(this.tc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start(this.localStore):r||this.gcScheduler.stop())})}Jo(e){const n=h1();if(!Qg.Pt(n))throw new P(T.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=Bg(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Qg(n,e.asyncQueue,r,e.clientId,e.initialUser)}}class fy{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>b1(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=RF.bind(null,this.syncEngine),await ey(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new mF}createDatastore(e){const n=$u(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new Z$(i));var i;return function(s,o,a,u){return new nF(s,o,a,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>b1(this.syncEngine,a,0),o=c1.Pt()?new c1:new Y$,new iF(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,u,l){const c=new IF(r,i,s,o,a,u);return l&&(c.Wo=!0),c}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=D(e);R("RemoteStore","RemoteStore shutting down."),n.Gr.add(5),await go(n),n.Hr.shutdown(),n.Jr.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t,e=10240){let n=0;return{async read(){if(n<t.byteLength){const r={value:t.slice(n,n+e),done:!1};return n+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.reject("unimplemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ec(this.observer.next,e)}error(e){this.observer.error?this.ec(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}nc(){this.muted=!0}ec(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BF{constructor(e,n){this.sc=e,this.k=n,this.metadata=new Ke,this.buffer=new Uint8Array,this.ic=new TextDecoder("utf-8"),this.rc().then(r=>{r&&r._o()?this.metadata.resolve(r.payload.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.payload)}`))},r=>this.metadata.reject(r))}close(){return this.sc.cancel()}async getMetadata(){return this.metadata.promise}async Ho(){return await this.getMetadata(),this.rc()}async rc(){const e=await this.oc();if(e===null)return null;const n=this.ic.decode(e),r=Number(n);isNaN(r)&&this.cc(`length string (${n}) is not valid number`);const i=await this.ac(r);return new vF(JSON.parse(i),e.length+r)}uc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async oc(){for(;this.uc()<0&&!await this.hc(););if(this.buffer.length===0)return null;const e=this.uc();e<0&&this.cc("Reached the end of bundle when a length string is expected.");const n=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),n}async ac(e){for(;this.buffer.length<e;)await this.hc()&&this.cc("Reached the end of bundle when more is expected.");const n=this.ic.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),n}cc(e){throw this.sc.cancel(),new Error(`Invalid bundle format: ${e}`)}async hc(){const e=await this.sc.read();if(!e.done){const n=new Uint8Array(this.buffer.length+e.value.length);n.set(this.buffer),n.set(e.value,this.buffer.length),this.buffer=n}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qF{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new P(T.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const n=await async function(r,i){const s=D(r),o=Ou(s.k)+"/documents",a={documents:i.map(h=>Ru(s.k,h))},u=await s.ji("BatchGetDocuments",o,a),l=new Map;u.forEach(h=>{const d=u$(s.k,h);l.set(d.key.toString(),d)});const c=[];return i.forEach(h=>{const d=l.get(h.toString());z(!!d),c.push(d)}),c}(this.datastore,e);return n.forEach(r=>this.recordVersion(r)),n}set(e,n){this.write(n.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,n){try{this.write(n.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Cu(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(n=>{e.delete(n.key.toString())}),e.forEach((n,r)=>{const i=U.fromPath(r);this.mutations.push(new Pg(i,this.precondition(i)))}),await async function(n,r){const i=D(n),s=Ou(i.k)+"/documents",o={writes:r.map(a=>$h(i.k,a))};await i.Bi("Commit",s,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let n;if(e.isFoundDocument())n=e.version;else{if(!e.isNoDocument())throw B();n=Q.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!n.isEqual(r))throw new P(T.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),n)}precondition(e){const n=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&n?De.updateTime(n):De.none()}preconditionForUpdate(e){const n=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&n){if(n.isEqual(Q.min()))throw new P(T.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return De.updateTime(n)}return De.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zF{constructor(e,n,r,i){this.asyncQueue=e,this.datastore=n,this.updateFunction=r,this.deferred=i,this.lc=5,this.ur=new Yg(this.asyncQueue,"transaction_retry")}run(){this.lc-=1,this.fc()}fc(){this.ur.Zi(async()=>{const e=new qF(this.datastore),n=this.dc(e);n&&n.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.wc(i)}))}).catch(r=>{this.wc(r)})})}dc(e){try{const n=this.updateFunction(e);return!Li(n)&&n.catch&&n.then?n:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(n){return this.deferred.reject(n),null}}wc(e){this.lc>0&&this._c(e)?(this.lc-=1,this.asyncQueue.enqueueAndForget(()=>(this.fc(),Promise.resolve()))):this.deferred.reject(e)}_c(e){if(e.name==="FirebaseError"){const n=e.code;return n==="aborted"||n==="failed-precondition"||!lT(n)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WF{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ut.UNAUTHENTICATED,this.clientId=OS.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new P(T.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ke;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=wo(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function D1(t,e){t.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await n1(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function x1(t,e){t.asyncQueue.verifyOperationInProgress();const n=await py(t);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>v1(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>v1(e.remoteStore,s)),t.onlineComponents=e}async function py(t){return t.offlineComponents||(R("FirestoreClient","Using default OfflineComponentProvider"),await D1(t,new A1)),t.offlineComponents}async function Yh(t){return t.onlineComponents||(R("FirestoreClient","Using default OnlineComponentProvider"),await x1(t,new fy)),t.onlineComponents}function L1(t){return py(t).then(e=>e.persistence)}function my(t){return py(t).then(e=>e.localStore)}function M1(t){return Yh(t).then(e=>e.remoteStore)}function gy(t){return Yh(t).then(e=>e.syncEngine)}async function So(t){const e=await Yh(t),n=e.eventManager;return n.onListen=SF.bind(null,e.syncEngine),n.onUnlisten=TF.bind(null,e.syncEngine),n}function HF(t){return t.asyncQueue.enqueue(async()=>{const e=await L1(t),n=await M1(t);return e.setNetworkEnabled(!0),function(r){const i=D(r);return i.Gr.delete(0),Fu(i)}(n)})}function KF(t){return t.asyncQueue.enqueue(async()=>{const e=await L1(t),n=await M1(t);return e.setNetworkEnabled(!1),async function(r){const i=D(r);i.Gr.add(0),await go(i),i.Jr.set("Offline")}(n)})}function GF(t,e){const n=new Ke;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await function(a,u){const l=D(a);return l.persistence.runTransaction("read document","readonly",c=>l.Wn.Rn(c,u))}(r,i);o.isFoundDocument()?s.resolve(o):o.isNoDocument()?s.resolve(null):s.reject(new P(T.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=wo(o,`Failed to get document '${i} from cache`);s.reject(a)}}(await my(t),e,n)),n.promise}function $1(t,e,n={}){const r=new Ke;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Qh({next:h=>{s.enqueueAndForget(()=>ry(i,c));const d=h.docs.has(o);!d&&h.fromCache?u.reject(new P(T.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?u.reject(new P(T.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new sy(Zs(o.path),l,{includeMetadataChanges:!0,wo:!0});return ny(i,c)}(await So(t),t.asyncQueue,e,n,r)),r.promise}function QF(t,e){const n=new Ke;return t.asyncQueue.enqueueAndForget(async()=>async function(r,i,s){try{const o=await qh(r,i,!0),a=new T1(i,o.zn),u=a.Po(o.documents),l=a.applyChanges(u,!1);s.resolve(l.snapshot)}catch(o){const a=wo(o,`Failed to execute query '${i} against cache`);s.reject(a)}}(await my(t),e,n)),n.promise}function F1(t,e,n={}){const r=new Ke;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,u){const l=new Qh({next:h=>{s.enqueueAndForget(()=>ry(i,c)),h.fromCache&&a.source==="server"?u.reject(new P(T.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):u.resolve(h)},error:h=>u.reject(h)}),c=new sy(o,l,{includeMetadataChanges:!0,wo:!0});return ny(i,c)}(await So(t),t.asyncQueue,e,n,r)),r.promise}function YF(t,e){const n=new Qh(e);return t.asyncQueue.enqueueAndForget(async()=>function(r,i){D(r).io.add(i),i.next()}(await So(t),n)),()=>{n.nc(),t.asyncQueue.enqueueAndForget(async()=>function(r,i){D(r).io.delete(i)}(await So(t),n))}}function JF(t,e){const n=new Ke;return t.asyncQueue.enqueueAndForget(async()=>{const r=await function(i){return Yh(i).then(s=>s.datastore)}(t);new zF(t.asyncQueue,r,e,n).run()}),n.promise}function XF(t,e,n,r){const i=function(s,o){let a;return a=typeof s=="string"?new TextEncoder().encode(s):s,function(u,l){return new BF(u,l)}(function(u,l){if(u instanceof Uint8Array)return O1(u,l);if(u instanceof ArrayBuffer)return O1(new Uint8Array(u),l);if(u instanceof ReadableStream)return u.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(n,$u(e));t.asyncQueue.enqueueAndForget(async()=>{VF(await gy(t),i,r)})}function ZF(t,e){return t.asyncQueue.enqueue(async()=>function(n,r){const i=D(n);return i.persistence.runTransaction("Get named query","readonly",s=>i.Ye.getNamedQuery(s,r))}(await my(t),e))}class eU{constructor(e,n,r,i,s,o,a,u){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=u}}class To{constructor(e,n){this.projectId=e,this.database=n||"(default)"}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof To&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U1=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yy(t,e,n){if(!n)throw new P(T.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function V1(t,e,n,r){if(e===!0&&r===!0)throw new P(T.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function j1(t){if(!U.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function B1(t){if(U.isDocumentKey(t))throw new P(T.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function Jh(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":B()}function te(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new P(T.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=Jh(t);throw new P(T.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}function q1(t,e){if(e<=0)throw new P(T.INVALID_ARGUMENT,`Function ${t}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new P(T.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new P(T.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,V1("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e,n,r){this._authCredentials=n,this._appCheckCredentials=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new z1({}),this._settingsFrozen=!1,e instanceof To?this._databaseId=e:(this._app=e,this._databaseId=function(i){if(!Object.prototype.hasOwnProperty.apply(i.options,["projectId"]))throw new P(T.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new To(i.options.projectId)}(e))}get app(){if(!this._app)throw new P(T.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new P(T.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new z1(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new IM;switch(n.type){case"gapi":const r=n.client;return z(!(typeof r!="object"||r===null||!r.auth||!r.auth.getAuthHeaderValueForFirstParty)),new bM(r,n.sessionIndex||"0",n.iamToken||null);case"provider":return n.client;default:throw new P(T.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=U1.get(e);n&&(R("ComponentProvider","Removing Datastore"),U1.delete(e),n.terminate())}(this),Promise.resolve()}}function tU(t,e,n,r={}){var i;const s=(t=te(t,Vu))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&gu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=ut.MOCK_USER;else{o=fA(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const u=r.mockUserToken.sub||r.mockUserToken.user_id;if(!u)throw new P(T.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new ut(u)}t._authCredentials=new SM(new RS(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class me{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Bn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new me(this.firestore,e,this._key)}}class Et{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new Et(this.firestore,e,this._query)}}class Bn extends Et{constructor(e,n,r){super(e,n,Zs(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new me(this.firestore,null,new U(e))}withConverter(e){return new Bn(this.firestore,e,this._path)}}function W1(t,e,...n){if(t=q(t),yy("collection","path",e),t instanceof Vu){const r=ie.fromString(e,...n);return B1(r),new Bn(t,null,r)}{if(!(t instanceof me||t instanceof Bn))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return B1(r),new Bn(t.firestore,null,r)}}function nU(t,e){if(t=te(t,Vu),yy("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new P(T.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Et(t,null,function(n){return new or(ie.emptyPath(),n)}(e))}function Xh(t,e,...n){if(t=q(t),arguments.length===1&&(e=OS.A()),yy("doc","path",e),t instanceof Vu){const r=ie.fromString(e,...n);return j1(r),new me(t,null,new U(r))}{if(!(t instanceof me||t instanceof Bn))throw new P(T.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ie.fromString(e,...n));return j1(r),new me(t.firestore,t instanceof Bn?t.converter:null,new U(r))}}function H1(t,e){return t=q(t),e=q(e),(t instanceof me||t instanceof Bn)&&(e instanceof me||e instanceof Bn)&&t.firestore===e.firestore&&t.path===e.path&&t.converter===e.converter}function K1(t,e){return t=q(t),e=q(e),t instanceof Et&&e instanceof Et&&t.firestore===e.firestore&&Su(t._query,e._query)&&t.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rU{constructor(){this.mc=Promise.resolve(),this.gc=[],this.yc=!1,this.Tc=[],this.Ec=null,this.Ic=!1,this.Ac=!1,this.Rc=[],this.ur=new Yg(this,"async_queue_retry"),this.bc=()=>{const n=Hh();n&&R("AsyncQueue","Visibility state changed to "+n.visibilityState),this.ur.er()};const e=Hh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.bc)}get isShuttingDown(){return this.yc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.vc(e)}enterRestrictedMode(e){if(!this.yc){this.yc=!0,this.Ac=e||!1;const n=Hh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.bc)}}enqueue(e){if(this.Pc(),this.yc)return new Promise(()=>{});const n=new Ke;return this.vc(()=>this.yc&&this.Ac?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.gc.push(e),this.Vc()))}async Vc(){if(this.gc.length!==0){try{await this.gc[0](),this.gc.shift(),this.ur.reset()}catch(e){if(!Vi(e))throw e;R("AsyncQueue","Operation failed with retryable error: "+e)}this.gc.length>0&&this.ur.Zi(()=>this.Vc())}}vc(e){const n=this.mc.then(()=>(this.Ic=!0,e().catch(r=>{this.Ec=r,this.Ic=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Re("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Ic=!1,r))));return this.mc=n,n}enqueueAfterDelay(e,n,r){this.Pc(),this.Rc.indexOf(e)>-1&&(n=0);const i=ty.createAndSchedule(this,e,n,r,s=>this.Sc(s));return this.Tc.push(i),i}Pc(){this.Ec&&B()}verifyOperationInProgress(){}async Dc(){let e;do e=this.mc,await e;while(e!==this.mc)}Cc(e){for(const n of this.Tc)if(n.timerId===e)return!0;return!1}Nc(e){return this.Dc().then(()=>{this.Tc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Tc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Dc()})}kc(e){this.Rc.push(e)}Sc(e){const n=this.Tc.indexOf(e);this.Tc.splice(n,1)}}function vy(t){return function(e,n){if(typeof e!="object"||e===null)return!1;const r=e;for(const i of n)if(i in r&&typeof r[i]=="function")return!0;return!1}(t,["next","error","complete"])}class iU{constructor(){this._progressObserver={},this._taskCompletionResolver=new Ke,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,n,r){this._progressObserver={next:e,error:n,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,n){return this._taskCompletionResolver.promise.then(e,n)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sU=-1;class Ce extends Vu{constructor(e,n,r){super(e,n,r),this.type="firestore",this._queue=new rU,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||G1(this),this._firestoreClient.terminate()}}function Je(t){return t._firestoreClient||G1(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function G1(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new eU(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new WF(t._authCredentials,t._appCheckCredentials,t._queue,r)}function oU(t,e){Y1(t=te(t,Ce));const n=Je(t),r=t._freezeSettings(),i=new fy;return Q1(n,i,new R1(i,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function aU(t){Y1(t=te(t,Ce));const e=Je(t),n=t._freezeSettings(),r=new fy;return Q1(e,r,new jF(r,n.cacheSizeBytes))}function Q1(t,e,n){const r=new Ke;return t.asyncQueue.enqueue(async()=>{try{await D1(t,n),await x1(t,e),r.resolve()}catch(i){if(!function(s){return s.name==="FirebaseError"?s.code===T.FAILED_PRECONDITION||s.code===T.UNIMPLEMENTED:typeof DOMException!="undefined"&&s instanceof DOMException?s.code===22||s.code===20||s.code===11:!0}(i))throw i;console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+i),r.reject(i)}}).then(()=>r.promise)}function uU(t){if(t._initialized&&!t._terminated)throw new P(T.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new Ke;return t._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(n){if(!In.Pt())return Promise.resolve();const r=n+"main";await In.delete(r)}(Bg(t._databaseId,t._persistenceKey)),e.resolve()}catch(n){e.reject(n)}}),e.promise}function lU(t){return function(e){const n=new Ke;return e.asyncQueue.enqueueAndForget(async()=>NF(await gy(e),n)),n.promise}(Je(t=te(t,Ce)))}function cU(t){return HF(Je(t=te(t,Ce)))}function hU(t){return KF(Je(t=te(t,Ce)))}function dU(t,e){const n=Je(t=te(t,Ce)),r=new iU;return XF(n,t._databaseId,e,r),r}function fU(t,e){return ZF(Je(t=te(t,Ce)),e).then(n=>n?new Et(t,null,n.query):null)}function Y1(t){if(t._initialized||t._terminated)throw new P(T.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new P(T.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new lt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new qn(Fe.fromBase64String(e))}catch(n){throw new P(T.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new qn(Fe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zh{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new P(T.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new P(T.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return J(this._lat,e._lat)||J(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pU=/^__.*__$/;class mU{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new qr(e,this.data,this.fieldMask,n,this.fieldTransforms):new bu(e,this.data,n,this.fieldTransforms)}}class J1{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new qr(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function X1(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw B()}}class ed{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.k=r,this.ignoreUndefinedProperties=i,s===void 0&&this.xc(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get $c(){return this.settings.$c}Oc(e){return new ed(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Mc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.Lc(e),i}Bc(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.Oc({path:r,Fc:!1});return i.xc(),i}Uc(e){return this.Oc({path:void 0,Fc:!0})}qc(e){return nd(e,this.settings.methodName,this.settings.Kc||!1,this.path,this.settings.jc)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.Lc(this.path.get(e))}Lc(e){if(e.length===0)throw this.qc("Document fields must not be empty");if(X1(this.$c)&&pU.test(e))throw this.qc('Document fields cannot begin and end with "__"')}}class gU{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.k=r||$u(e)}Qc(e,n,r,i=!1){return new ed({$c:e,methodName:n,jc:r,path:lt.emptyPath(),Fc:!1,Kc:i},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Wi(t){const e=t._freezeSettings(),n=$u(t._databaseId);return new gU(t._databaseId,!!e.ignoreUndefinedProperties,n)}function td(t,e,n,r,i,s={}){const o=t.Qc(s.merge||s.mergeFields?2:0,e,n,i);Iy("Data must be an object, but it was:",o,r);const a=tk(r,o);let u,l;if(s.merge)u=new Qs(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=Sy(e,h,n);if(!o.contains(d))throw new P(T.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);rk(c,d)||c.push(d)}u=new Qs(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new mU(new wt(a),u,l)}class ju extends zi{_toFieldTransform(e){if(e.$c!==2)throw e.$c===1?e.qc(`${this._methodName}() can only appear at the top level of your update data`):e.qc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof ju}}function Z1(t,e,n){return new ed({$c:3,jc:e.settings.jc,methodName:t._methodName,Fc:n},e.databaseId,e.k,e.ignoreUndefinedProperties)}class wy extends zi{_toFieldTransform(e){return new ku(e.path,new to)}isEqual(e){return e instanceof wy}}class yU extends zi{constructor(e,n){super(e),this.Wc=n}_toFieldTransform(e){const n=Z1(this,e,!0),r=this.Wc.map(s=>Hi(s,n)),i=new $i(r);return new ku(e.path,i)}isEqual(e){return this===e}}class vU extends zi{constructor(e,n){super(e),this.Wc=n}_toFieldTransform(e){const n=Z1(this,e,!0),r=this.Wc.map(s=>Hi(s,n)),i=new Fi(r);return new ku(e.path,i)}isEqual(e){return this===e}}class wU extends zi{constructor(e,n){super(e),this.Gc=n}_toFieldTransform(e){const n=new no(e.k,XS(e.k,this.Gc));return new ku(e.path,n)}isEqual(e){return this===e}}function _y(t,e,n,r){const i=t.Qc(1,e,n);Iy("Data must be an object, but it was:",i,r);const s=[],o=wt.empty();xi(r,(u,l)=>{const c=Ty(e,u,n);l=q(l);const h=i.Bc(c);if(l instanceof ju)s.push(c);else{const d=Hi(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new Qs(s);return new J1(o,a,i.fieldTransforms)}function Ey(t,e,n,r,i,s){const o=t.Qc(1,e,n),a=[Sy(e,r,n)],u=[i];if(s.length%2!=0)throw new P(T.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(Sy(e,s[d])),u.push(s[d+1]);const l=[],c=wt.empty();for(let d=a.length-1;d>=0;--d)if(!rk(l,a[d])){const m=a[d];let _=u[d];_=q(_);const E=o.Bc(m);if(_ instanceof ju)l.push(m);else{const p=Hi(_,E);p!=null&&(l.push(m),c.set(m,p))}}const h=new Qs(l);return new J1(c,h,o.fieldTransforms)}function ek(t,e,n,r=!1){return Hi(n,t.Qc(r?4:3,e))}function Hi(t,e){if(nk(t=q(t)))return Iy("Unsupported field value:",e,t),tk(t,e);if(t instanceof zi)return function(n,r){if(!X1(r.$c))throw r.qc(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.qc(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.Fc&&e.$c!==4)throw e.qc("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=Hi(o,r.Uc(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=q(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return XS(r.k,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ge.fromDate(n);return{timestampValue:Au(r.k,i)}}if(n instanceof Ge){const i=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Au(r.k,i)}}if(n instanceof Zh)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof qn)return{bytesValue:vT(r.k,n._byteString)};if(n instanceof me){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.qc(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:Ag(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.qc(`Unsupported field value: ${Jh(n)}`)}(t,e)}function tk(t,e){const n={};return LS(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xi(t,(r,i)=>{const s=Hi(i,e.Mc(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function nk(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof Zh||t instanceof qn||t instanceof me||t instanceof zi)}function Iy(t,e,n){if(!nk(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=Jh(n);throw r==="an object"?e.qc(t+" a custom object"):e.qc(t+" "+r)}}function Sy(t,e,n){if((e=q(e))instanceof Jr)return e._internalPath;if(typeof e=="string")return Ty(t,e);throw nd("Field path arguments must be of type string or ",t,!1,void 0,n)}const _U=new RegExp("[~\\*/\\[\\]]");function Ty(t,e,n){if(e.search(_U)>=0)throw nd(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Jr(...e.split("."))._internalPath}catch{throw nd(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function nd(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new P(T.INVALID_ARGUMENT,a+t+u)}function rk(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bu{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new me(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new EU(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rd("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class EU extends Bu{data(){return super.data()}}function rd(t,e){return typeof e=="string"?Ty(t,e):e instanceof Jr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class cr extends Bu{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new qu(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rd("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class qu extends cr{data(e={}){return super.data(e)}}class Xr{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new Ki(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new qu(this._firestore,this._userDataWriter,r.key,r,new Ki(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new P(T.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(r,i){if(r._snapshot.oldDocs.isEmpty()){let s=0;return r._snapshot.docChanges.map(o=>({type:"added",doc:new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ki(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter),oldIndex:-1,newIndex:s++}))}{let s=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>i||o.type!==3).map(o=>{const a=new qu(r._firestore,r._userDataWriter,o.doc.key,o.doc,new Ki(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let u=-1,l=-1;return o.type!==0&&(u=s.indexOf(o.doc.key),s=s.delete(o.doc.key)),o.type!==1&&(s=s.add(o.doc),l=s.indexOf(o.doc.key)),{type:IU(o.type),doc:a,oldIndex:u,newIndex:l}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function IU(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return B()}}function ik(t,e){return t instanceof cr&&e instanceof cr?t._firestore===e._firestore&&t._key.isEqual(e._key)&&(t._document===null?e._document===null:t._document.isEqual(e._document))&&t._converter===e._converter:t instanceof Xr&&e instanceof Xr&&t._firestore===e._firestore&&K1(t.query,e.query)&&t.metadata.isEqual(e.metadata)&&t._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sk(t){if(Ah(t)&&t.explicitOrderBy.length===0)throw new P(T.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zu{}function Zr(t,...e){for(const n of e)t=n._apply(t);return t}class SU extends zu{constructor(e,n,r){super(),this.zc=e,this.Hc=n,this.Jc=r,this.type="where"}_apply(e){const n=Wi(e.firestore),r=function(i,s,o,a,u,l,c){let h;if(u.isKeyField()){if(l==="array-contains"||l==="array-contains-any")throw new P(T.INVALID_ARGUMENT,`Invalid Query. You can't perform '${l}' queries on documentId().`);if(l==="in"||l==="not-in"){hk(c,l);const m=[];for(const _ of c)m.push(ck(a,i,_));h={arrayValue:{values:m}}}else h=ck(a,i,c)}else l!=="in"&&l!=="not-in"&&l!=="array-contains-any"||hk(c,l),h=ek(o,s,c,l==="in"||l==="not-in");const d=Nt.create(u,l,h);return function(m,_){if(_.V()){const p=Tg(m);if(p!==null&&!p.isEqual(_.field))throw new P(T.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${p.toString()}' and '${_.field.toString()}'`);const f=Sg(m);f!==null&&dk(m,_.field,f)}const E=function(p,f){for(const y of p.filters)if(f.indexOf(y.op)>=0)return y.op;return null}(m,function(p){switch(p){case"!=":return["!=","not-in"];case"array-contains":return["array-contains","array-contains-any","not-in"];case"in":return["array-contains-any","in","not-in"];case"array-contains-any":return["array-contains","array-contains-any","in","not-in"];case"not-in":return["array-contains","array-contains-any","in","not-in","!="];default:return[]}}(_.op));if(E!==null)throw E===_.op?new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${_.op.toString()}' filter.`):new P(T.INVALID_ARGUMENT,`Invalid query. You cannot use '${_.op.toString()}' filters with '${E.toString()}' filters.`)}(i,d),d}(e._query,"where",n,e.firestore._databaseId,this.zc,this.Hc,this.Jc);return new Et(e.firestore,e.converter,function(i,s){const o=i.filters.concat([s]);return new or(i.path,i.collectionGroup,i.explicitOrderBy.slice(),o,i.limit,i.limitType,i.startAt,i.endAt)}(e._query,r))}}function TU(t,e,n){const r=e,i=rd("where",t);return new SU(i,r,n)}class kU extends zu{constructor(e,n){super(),this.zc=e,this.Yc=n,this.type="orderBy"}_apply(e){const n=function(r,i,s){if(r.startAt!==null)throw new P(T.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new P(T.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new Xs(i,s);return function(a,u){if(Sg(a)===null){const l=Tg(a);l!==null&&dk(a,l,u.field)}}(r,o),o}(e._query,this.zc,this.Yc);return new Et(e.firestore,e.converter,function(r,i){const s=r.explicitOrderBy.concat([i]);return new or(r.path,r.collectionGroup,s,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,n))}}function bU(t,e="asc"){const n=e,r=rd("orderBy",t);return new kU(r,n)}class ok extends zu{constructor(e,n,r){super(),this.type=e,this.Xc=n,this.Zc=r}_apply(e){return new Et(e.firestore,e.converter,KS(e._query,this.Xc,this.Zc))}}function CU(t){return q1("limit",t),new ok("limit",t,"F")}function PU(t){return q1("limitToLast",t),new ok("limitToLast",t,"L")}class ak extends zu{constructor(e,n,r){super(),this.type=e,this.ta=n,this.ea=r}_apply(e){const n=lk(e,this.type,this.ta,this.ea);return new Et(e.firestore,e.converter,function(r,i){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,i,r.endAt)}(e._query,n))}}function NU(...t){return new ak("startAt",t,!0)}function AU(...t){return new ak("startAfter",t,!1)}class uk extends zu{constructor(e,n,r){super(),this.type=e,this.ta=n,this.ea=r}_apply(e){const n=lk(e,this.type,this.ta,this.ea);return new Et(e.firestore,e.converter,function(r,i){return new or(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,i)}(e._query,n))}}function RU(...t){return new uk("endBefore",t,!0)}function OU(...t){return new uk("endAt",t,!1)}function lk(t,e,n,r){if(n[0]=q(n[0]),n[0]instanceof Bu)return function(i,s,o,a,u){if(!a)throw new P(T.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const l=[];for(const c of eo(i))if(c.field.isKeyField())l.push(Th(s,a.key));else{const h=a.data.field(c.field);if(vg(h))throw new P(T.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+c.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=c.field.canonicalString();throw new P(T.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}l.push(h)}return new Iu(l,u)}(t._query,t.firestore._databaseId,e,n[0]._document,r);{const i=Wi(t.firestore);return function(s,o,a,u,l,c){const h=s.explicitOrderBy;if(l.length>h.length)throw new P(T.INVALID_ARGUMENT,`Too many arguments provided to ${u}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let m=0;m<l.length;m++){const _=l[m];if(h[m].field.isKeyField()){if(typeof _!="string")throw new P(T.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${u}(), but got a ${typeof _}`);if(!kg(s)&&_.indexOf("/")!==-1)throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${u}() must be a plain document ID, but '${_}' contains a slash.`);const E=s.path.child(ie.fromString(_));if(!U.isDocumentKey(E))throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${u}() must result in a valid document path, but '${E}' is not because it contains an odd number of segments.`);const p=new U(E);d.push(Th(o,p))}else{const E=ek(a,u,_);d.push(E)}}return new Iu(d,c)}(t._query,t.firestore._databaseId,i,e,n,r)}}function ck(t,e,n){if(typeof(n=q(n))=="string"){if(n==="")throw new P(T.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!kg(e)&&n.indexOf("/")!==-1)throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const r=e.path.child(ie.fromString(n));if(!U.isDocumentKey(r))throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Th(t,new U(r))}if(n instanceof me)return Th(t,n._key);throw new P(T.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Jh(n)}.`)}function hk(t,e){if(!Array.isArray(t)||t.length===0)throw new P(T.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`);if(t.length>10)throw new P(T.INVALID_ARGUMENT,`Invalid Query. '${e.toString()}' filters support a maximum of 10 elements in the value array.`)}function dk(t,e,n){if(!n.isEqual(e))throw new P(T.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{convertValue(e,n="none"){switch(Mi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Oe(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(Ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw B()}}convertObject(e,n){const r={};return xi(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new Zh(Oe(e.latitude),Oe(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=MS(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(vu(e));default:return null}}convertTimestamp(e){const n=Br(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ie.fromString(e);z(RT(r));const i=new To(r.get(1),r.get(3)),s=new U(r.popFirst(5));return i.isEqual(n)||Re(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function id(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}class DU extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,n)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xU{constructor(e,n){this._firestore=e,this._commitHandler=n,this._mutations=[],this._committed=!1,this._dataReader=Wi(e)}set(e,n,r){this._verifyNotCommitted();const i=ei(e,this._firestore),s=id(i.converter,n,r),o=td(this._dataReader,"WriteBatch.set",i._key,s,i.converter!==null,r);return this._mutations.push(o.toMutation(i._key,De.none())),this}update(e,n,r,...i){this._verifyNotCommitted();const s=ei(e,this._firestore);let o;return o=typeof(n=q(n))=="string"||n instanceof Jr?Ey(this._dataReader,"WriteBatch.update",s._key,n,r,i):_y(this._dataReader,"WriteBatch.update",s._key,n),this._mutations.push(o.toMutation(s._key,De.exists(!0))),this}delete(e){this._verifyNotCommitted();const n=ei(e,this._firestore);return this._mutations=this._mutations.concat(new Cu(n._key,De.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new P(T.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function ei(t,e){if((t=q(t)).firestore!==e)throw new P(T.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LU(t){t=te(t,me);const e=te(t.firestore,Ce);return $1(Je(e),t._key).then(n=>by(e,t,n))}class Gi extends ky{constructor(e){super(),this.firestore=e}convertBytes(e){return new qn(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new me(this.firestore,null,n)}}function MU(t){t=te(t,me);const e=te(t.firestore,Ce),n=Je(e),r=new Gi(e);return GF(n,t._key).then(i=>new cr(e,r,t._key,i,new Ki(i!==null&&i.hasLocalMutations,!0),t.converter))}function $U(t){t=te(t,me);const e=te(t.firestore,Ce);return $1(Je(e),t._key,{source:"server"}).then(n=>by(e,t,n))}function FU(t){t=te(t,Et);const e=te(t.firestore,Ce),n=Je(e),r=new Gi(e);return sk(t._query),F1(n,t._query).then(i=>new Xr(e,r,t,i))}function UU(t){t=te(t,Et);const e=te(t.firestore,Ce),n=Je(e),r=new Gi(e);return QF(n,t._query).then(i=>new Xr(e,r,t,i))}function VU(t){t=te(t,Et);const e=te(t.firestore,Ce),n=Je(e),r=new Gi(e);return F1(n,t._query,{source:"server"}).then(i=>new Xr(e,r,t,i))}function fk(t,e,n){t=te(t,me);const r=te(t.firestore,Ce),i=id(t.converter,e,n);return Wu(r,[td(Wi(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,De.none())])}function pk(t,e,n,...r){t=te(t,me);const i=te(t.firestore,Ce),s=Wi(i);let o;return o=typeof(e=q(e))=="string"||e instanceof Jr?Ey(s,"updateDoc",t._key,e,n,r):_y(s,"updateDoc",t._key,e),Wu(i,[o.toMutation(t._key,De.exists(!0))])}function jU(t){return Wu(te(t.firestore,Ce),[new Cu(t._key,De.none())])}function BU(t,e){const n=te(t.firestore,Ce),r=Xh(t),i=id(t.converter,e);return Wu(n,[td(Wi(t.firestore),"addDoc",r._key,i,t.converter!==null,{}).toMutation(r._key,De.exists(!1))]).then(()=>r)}function mk(t,...e){var n,r,i;t=q(t);let s={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||vy(e[o])||(s=e[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(vy(e[o])){const h=e[o];e[o]=(n=h.next)===null||n===void 0?void 0:n.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(i=h.complete)===null||i===void 0?void 0:i.bind(h)}let u,l,c;if(t instanceof me)l=te(t.firestore,Ce),c=Zs(t._key.path),u={next:h=>{e[o]&&e[o](by(l,t,h))},error:e[o+1],complete:e[o+2]};else{const h=te(t,Et);l=te(h.firestore,Ce),c=h._query;const d=new Gi(l);u={next:m=>{e[o]&&e[o](new Xr(l,d,h,m))},error:e[o+1],complete:e[o+2]},sk(t._query)}return function(h,d,m,_){const E=new Qh(_),p=new sy(d,E,m);return h.asyncQueue.enqueueAndForget(async()=>ny(await So(h),p)),()=>{E.nc(),h.asyncQueue.enqueueAndForget(async()=>ry(await So(h),p))}}(Je(l),c,a,u)}function qU(t,e){return YF(Je(t=te(t,Ce)),vy(e)?e:{next:e})}function Wu(t,e){return function(n,r){const i=new Ke;return n.asyncQueue.enqueueAndForget(async()=>kF(await gy(n),r,i)),i.promise}(Je(t),e)}function by(t,e,n){const r=n.docs.get(e._key),i=new Gi(t);return new cr(t,i,e._key,r,new Ki(n.hasPendingWrites,n.fromCache),e.converter)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zU extends class{constructor(e,n){this._firestore=e,this._transaction=n,this._dataReader=Wi(e)}get(e){const n=ei(e,this._firestore),r=new DU(this._firestore);return this._transaction.lookup([n._key]).then(i=>{if(!i||i.length!==1)return B();const s=i[0];if(s.isFoundDocument())return new Bu(this._firestore,r,s.key,s,n.converter);if(s.isNoDocument())return new Bu(this._firestore,r,n._key,null,n.converter);throw B()})}set(e,n,r){const i=ei(e,this._firestore),s=id(i.converter,n,r),o=td(this._dataReader,"Transaction.set",i._key,s,i.converter!==null,r);return this._transaction.set(i._key,o),this}update(e,n,r,...i){const s=ei(e,this._firestore);let o;return o=typeof(n=q(n))=="string"||n instanceof Jr?Ey(this._dataReader,"Transaction.update",s._key,n,r,i):_y(this._dataReader,"Transaction.update",s._key,n),this._transaction.update(s._key,o),this}delete(e){const n=ei(e,this._firestore);return this._transaction.delete(n._key),this}}{constructor(e,n){super(e,n),this._firestore=e}get(e){const n=ei(e,this._firestore),r=new Gi(this._firestore);return super.get(e).then(i=>new cr(this._firestore,r,n._key,i._document,new Ki(!1,!1),n.converter))}}function WU(t,e){return JF(Je(t=te(t,Ce)),n=>e(new zU(t,n)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HU(){return new ju("deleteField")}function KU(){return new wy("serverTimestamp")}function GU(...t){return new yU("arrayUnion",t)}function QU(...t){return new vU("arrayRemove",t)}function YU(t){return new wU("increment",t)}(function(t,e=!0){(function(n){Ks=n})(Ei),_i(new Jn("firestore",(n,{options:r})=>{const i=n.getProvider("app").getImmediate(),s=new Ce(i,new TM(n.getProvider("auth-internal")),new PM(n.getProvider("app-check-internal")));return r=Object.assign({useFetchStreams:e},r),s._setSettings(r),s},"PUBLIC")),On(AS,"3.4.4",t),On(AS,"3.4.4","esm2017")})();const JU="@firebase/firestore-compat",XU="0.1.13";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cy(t,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new P("invalid-argument",`Invalid options passed to function ${t}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(){if(typeof Uint8Array=="undefined")throw new P("unimplemented","Uint8Arrays are not available in this environment.")}function yk(){if(!RM())throw new P("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Hu{constructor(e){this._delegate=e}static fromBase64String(e){return yk(),new Hu(qn.fromBase64String(e))}static fromUint8Array(e){return gk(),new Hu(qn.fromUint8Array(e))}toBase64(){return yk(),this._delegate.toBase64()}toUint8Array(){return gk(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Py(t){return ZU(t,["next","error","complete"])}function ZU(t,e){if(typeof t!="object"||t===null)return!1;const n=t;for(const r of e)if(r in n&&typeof n[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eV{enableIndexedDbPersistence(e,n){return oU(e._delegate,{forceOwnership:n})}enableMultiTabIndexedDbPersistence(e){return aU(e._delegate)}clearIndexedDbPersistence(e){return uU(e._delegate)}}class vk{constructor(e,n,r){this._delegate=n,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof To||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const n=this._delegate._getSettings();!e.merge&&n.host!==e.host&&gu("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},n),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,n,r={}){tU(this._delegate,e,n,r)}enableNetwork(){return cU(this._delegate)}disableNetwork(){return hU(this._delegate)}enablePersistence(e){let n=!1,r=!1;return e&&(n=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,V1("synchronizeTabs",n,"experimentalForceOwningTab",r)),n?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return lU(this._delegate)}onSnapshotsInSync(e){return qU(this._delegate,e)}get app(){if(!this._appCompat)throw new P("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new ko(this,W1(this._delegate,e))}catch(n){throw At(n,"collection()","Firestore.collection()")}}doc(e){try{return new cn(this,Xh(this._delegate,e))}catch(n){throw At(n,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Rt(this,nU(this._delegate,e))}catch(n){throw At(n,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return WU(this._delegate,n=>e(new wk(this,n)))}batch(){return Je(this._delegate),new _k(new xU(this._delegate,e=>Wu(this._delegate,e)))}loadBundle(e){return dU(this._delegate,e)}namedQuery(e){return fU(this._delegate,e).then(n=>n?new Rt(this,n):null)}}class sd extends ky{constructor(e){super();this.firestore=e}convertBytes(e){return new Hu(new qn(e))}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return cn.forKey(n,this.firestore,null)}}function tV(t){_M(t)}class wk{constructor(e,n){this._firestore=e,this._delegate=n,this._userDataWriter=new sd(e)}get(e){const n=Yi(e);return this._delegate.get(n).then(r=>new Ku(this._firestore,new cr(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,n.converter)))}set(e,n,r){const i=Yi(e);return r?(Cy("Transaction.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Yi(e);return this._delegate.delete(n),this}}class _k{constructor(e){this._delegate=e}set(e,n,r){const i=Yi(e);return r?(Cy("WriteBatch.set",r),this._delegate.set(i,n,r)):this._delegate.set(i,n),this}update(e,n,r,...i){const s=Yi(e);return arguments.length===2?this._delegate.update(s,n):this._delegate.update(s,n,r,...i),this}delete(e){const n=Yi(e);return this._delegate.delete(n),this}commit(){return this._delegate.commit()}}class Qi{constructor(e,n,r){this._firestore=e,this._userDataWriter=n,this._delegate=r}fromFirestore(e,n){const r=new qu(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Gu(this._firestore,r),n!=null?n:{})}toFirestore(e,n){return n?this._delegate.toFirestore(e,n):this._delegate.toFirestore(e)}static getInstance(e,n){const r=Qi.INSTANCES;let i=r.get(e);i||(i=new WeakMap,r.set(e,i));let s=i.get(n);return s||(s=new Qi(e,new sd(e),n),i.set(n,s)),s}}Qi.INSTANCES=new WeakMap;class cn{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new sd(e)}static forPath(e,n,r){if(e.length%2!=0)throw new P("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new cn(n,new me(n._delegate,r,new U(e)))}static forKey(e,n,r){return new cn(n,new me(n._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new ko(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new ko(this.firestore,W1(this._delegate,e))}catch(n){throw At(n,"collection()","DocumentReference.collection()")}}isEqual(e){return e=q(e),e instanceof me?H1(this._delegate,e):!1}set(e,n){n=Cy("DocumentReference.set",n);try{return n?fk(this._delegate,e,n):fk(this._delegate,e)}catch(r){throw At(r,"setDoc()","DocumentReference.set()")}}update(e,n,...r){try{return arguments.length===1?pk(this._delegate,e):pk(this._delegate,e,n,...r)}catch(i){throw At(i,"updateDoc()","DocumentReference.update()")}}delete(){return jU(this._delegate)}onSnapshot(...e){const n=Ek(e),r=Ik(e,i=>new Ku(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,i._key,i._document,i.metadata,this._delegate.converter)));return mk(this._delegate,n,r)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=MU(this._delegate):(e==null?void 0:e.source)==="server"?n=$U(this._delegate):n=LU(this._delegate),n.then(r=>new Ku(this.firestore,new cr(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new cn(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function At(t,e,n){return t.message=t.message.replace(e,n),t}function Ek(t){for(const e of t)if(typeof e=="object"&&!Py(e))return e;return{}}function Ik(t,e){var n,r;let i;return Py(t[0])?i=t[0]:Py(t[1])?i=t[1]:typeof t[0]=="function"?i={next:t[0],error:t[1],complete:t[2]}:i={next:t[1],error:t[2],complete:t[3]},{next:s=>{i.next&&i.next(e(s))},error:(n=i.error)===null||n===void 0?void 0:n.bind(i),complete:(r=i.complete)===null||r===void 0?void 0:r.bind(i)}}class Ku{constructor(e,n){this._firestore=e,this._delegate=n}get ref(){return new cn(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,n){return this._delegate.get(e,n)}isEqual(e){return ik(this._delegate,e._delegate)}}class Gu extends Ku{data(e){const n=this._delegate.data(e);return EM(n!==void 0),n}}class Rt{constructor(e,n){this.firestore=e,this._delegate=n,this._userDataWriter=new sd(e)}where(e,n,r){try{return new Rt(this.firestore,Zr(this._delegate,TU(e,n,r)))}catch(i){throw At(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,n){try{return new Rt(this.firestore,Zr(this._delegate,bU(e,n)))}catch(r){throw At(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Rt(this.firestore,Zr(this._delegate,CU(e)))}catch(n){throw At(n,"limit()","Query.limit()")}}limitToLast(e){try{return new Rt(this.firestore,Zr(this._delegate,PU(e)))}catch(n){throw At(n,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Rt(this.firestore,Zr(this._delegate,NU(...e)))}catch(n){throw At(n,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Rt(this.firestore,Zr(this._delegate,AU(...e)))}catch(n){throw At(n,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Rt(this.firestore,Zr(this._delegate,RU(...e)))}catch(n){throw At(n,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Rt(this.firestore,Zr(this._delegate,OU(...e)))}catch(n){throw At(n,"endAt()","Query.endAt()")}}isEqual(e){return K1(this._delegate,e._delegate)}get(e){let n;return(e==null?void 0:e.source)==="cache"?n=UU(this._delegate):(e==null?void 0:e.source)==="server"?n=VU(this._delegate):n=FU(this._delegate),n.then(r=>new Ny(this.firestore,new Xr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const n=Ek(e),r=Ik(e,i=>new Ny(this.firestore,new Xr(this.firestore._delegate,this._userDataWriter,this._delegate,i._snapshot)));return mk(this._delegate,n,r)}withConverter(e){return new Rt(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class nV{constructor(e,n){this._firestore=e,this._delegate=n}get type(){return this._delegate.type}get doc(){return new Gu(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Ny{constructor(e,n){this._firestore=e,this._delegate=n}get query(){return new Rt(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new Gu(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(n=>new nV(this._firestore,n))}forEach(e,n){this._delegate.forEach(r=>{e.call(n,new Gu(this._firestore,r))})}isEqual(e){return ik(this._delegate,e._delegate)}}class ko extends Rt{constructor(e,n){super(e,n);this.firestore=e,this._delegate=n}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new cn(this.firestore,e):null}doc(e){try{return e===void 0?new cn(this.firestore,Xh(this._delegate)):new cn(this.firestore,Xh(this._delegate,e))}catch(n){throw At(n,"doc()","CollectionReference.doc()")}}add(e){return BU(this._delegate,e).then(n=>new cn(this.firestore,n))}isEqual(e){return H1(this._delegate,e._delegate)}withConverter(e){return new ko(this.firestore,e?this._delegate.withConverter(Qi.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Yi(t){return te(t,me)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ay{constructor(...e){this._delegate=new Jr(...e)}static documentId(){return new Ay(lt.keyField().canonicalString())}isEqual(e){return e=q(e),e instanceof Jr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(e){this._delegate=e}static serverTimestamp(){const e=KU();return e._methodName="FieldValue.serverTimestamp",new Ji(e)}static delete(){const e=HU();return e._methodName="FieldValue.delete",new Ji(e)}static arrayUnion(...e){const n=GU(...e);return n._methodName="FieldValue.arrayUnion",new Ji(n)}static arrayRemove(...e){const n=QU(...e);return n._methodName="FieldValue.arrayRemove",new Ji(n)}static increment(e){const n=YU(e);return n._methodName="FieldValue.increment",new Ji(n)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rV={Firestore:vk,GeoPoint:Zh,Timestamp:Ge,Blob:Hu,Transaction:wk,WriteBatch:_k,DocumentReference:cn,DocumentSnapshot:Ku,Query:Rt,QueryDocumentSnapshot:Gu,QuerySnapshot:Ny,CollectionReference:ko,FieldPath:Ay,FieldValue:Ji,setLogLevel:tV,CACHE_SIZE_UNLIMITED:sU};function iV(t,e){t.INTERNAL.registerComponent(new Jn("firestore-compat",n=>{const r=n.getProvider("app-compat").getImmediate(),i=n.getProvider("firestore").getImmediate();return e(r,i)},"PUBLIC").setServiceProps(Object.assign({},rV)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sV(t){iV(t,(e,n)=>new vk(e,n,new eV)),t.registerVersion(JU,XU)}sV(Fa);var Sk={};Object.defineProperty(Sk,"__esModule",{value:!0});var Qu=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},oV=function(){function t(e,n){for(var r=0;r<n.length;r++){var i=n[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),aV=V.exports,bo=Tk(aV),uV=J0.exports,se=Tk(uV);function Tk(t){return t&&t.__esModule?t:{default:t}}function Ry(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function lV(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function cV(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function hV(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var Yu=!1,kk=!1,bk=!1,od=function(t){hV(e,t);function e(n){lV(this,e);var r=cV(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,n));return r.onScriptLoaded=function(){e.stripeHandler||(e.stripeHandler=StripeCheckout.configure({key:r.props.stripeKey}),r.hasPendingClick&&r.showStripeDialog())},r.onScriptError=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r.hideLoadingDialog(),r.props.onScriptError&&r.props.onScriptError.apply(r,s)},r.onClosed=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r._isMounted&&r.setState({open:!1}),r.props.closed&&r.props.closed.apply(r,s)},r.onOpened=function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];r.setState({open:!0}),r.props.opened&&r.props.opened.apply(r,s)},r.getConfig=function(){return["token","image","name","description","amount","locale","currency","panelLabel","zipCode","shippingAddress","billingAddress","email","allowRememberMe","bitcoin","alipay","alipayReusable"].reduce(function(i,s){return Qu({},i,r.props.hasOwnProperty(s)&&Ry({},s,r.props[s]))},{opened:r.onOpened,closed:r.onClosed})},r.onClick=function(){if(!r.props.disabled)if(bk)try{throw new Error("Tried to call onClick, but StripeCheckout failed to load")}catch{}else e.stripeHandler?r.showStripeDialog():(r.showLoadingDialog(),r.hasPendingClick=!0)},r.handleOnMouseDown=function(){r.setState({buttonActive:!0})},r.handleOnMouseUp=function(){r.setState({buttonActive:!1})},r.state={open:!1,buttonActive:!1},r}return oV(e,[{key:"componentDidMount",value:function(){var r=this;if(this._isMounted=!0,!kk&&!Yu){Yu=!0;var i=document.createElement("script");typeof this.props.onScriptTagCreated=="function"&&this.props.onScriptTagCreated(i),i.src="https://checkout.stripe.com/checkout.js",i.async=1,this.loadPromise=function(){var s=!1,o=new Promise(function(u,l){i.onload=function(){kk=!0,Yu=!1,u(),r.onScriptLoaded()},i.onerror=function(c){bk=!0,Yu=!1,l(c),r.onScriptError(c)}}),a=new Promise(function(u,l){o.then(function(){return s?l({isCanceled:!0}):u()}),o.catch(function(c){return l(s?{isCanceled:!0}:c)})});return{promise:a,cancel:function(){s=!0}}}(),this.loadPromise.promise.then(this.onScriptLoaded).catch(this.onScriptError),document.body.appendChild(i)}}},{key:"componentDidUpdate",value:function(){Yu||this.updateStripeHandler()}},{key:"componentWillUnmount",value:function(){this._isMounted=!1,this.loadPromise&&this.loadPromise.cancel(),e.stripeHandler&&this.state.open&&e.stripeHandler.close()}},{key:"updateStripeHandler",value:function(){(!e.stripeHandler||this.props.reconfigureOnUpdate)&&(e.stripeHandler=StripeCheckout.configure({key:this.props.stripeKey}))}},{key:"showLoadingDialog",value:function(){if(this.props.showLoadingDialog){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];this.props.showLoadingDialog.apply(this,i)}}},{key:"hideLoadingDialog",value:function(){if(this.props.hideLoadingDialog){for(var r=arguments.length,i=Array(r),s=0;s<r;s++)i[s]=arguments[s];this.props.hideLoadingDialog.apply(this,i)}}},{key:"showStripeDialog",value:function(){this.hideLoadingDialog(),e.stripeHandler.open(this.getConfig())}},{key:"renderDefaultStripeButton",value:function(){return bo.default.createElement("button",Qu({},Ry({},this.props.triggerEvent,this.onClick),{className:this.props.className,onMouseDown:this.handleOnMouseDown,onFocus:this.handleOnMouseDown,onMouseUp:this.handleOnMouseUp,onMouseOut:this.handleOnMouseUp,onBlur:this.handleOnMouseUp,style:Qu({},{overflow:"hidden",display:"inline-block",background:"linear-gradient(#28a0e5,#015e94)",border:0,padding:1,textDecoration:"none",borderRadius:5,boxShadow:"0 1px 0 rgba(0,0,0,0.2)",cursor:"pointer",visibility:"visible",userSelect:"none"},this.state.buttonActive&&{background:"#005d93"},this.props.style)}),bo.default.createElement("span",{style:Qu({},{backgroundImage:"linear-gradient(#7dc5ee,#008cdd 85%,#30a2e4)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",color:"#fff",fontWeight:"bold",boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",textShadow:"0 -1px 0 rgba(0,0,0,0.25)",borderRadius:4},this.state.buttonActive&&{color:"#eee",boxShadow:"inset 0 1px 0 rgba(0,0,0,0.1)",backgroundImage:"linear-gradient(#008cdd,#008cdd 85%,#239adf)"},this.props.textStyle)},this.props.label))}},{key:"renderDisabledButton",value:function(){return bo.default.createElement("button",{disabled:!0,style:{background:"rgba(0,0,0,0.2)",overflow:"hidden",display:"inline-block",border:0,padding:1,textDecoration:"none",borderRadius:5,userSelect:"none"}},bo.default.createElement("span",{style:{boxShadow:"inset 0 1px 0 rgba(255,255,255,0.25)",fontFamily:'"Helvetica Neue",Helvetica,Arial,sans-serif',fontSize:14,position:"relative",padding:"0 12px",display:"block",height:30,lineHeight:"30px",borderRadius:4,color:"#999",background:"#f8f9fa",textShadow:"0 1px 0 rgba(255,255,255,0.5)"}},this.props.label))}},{key:"render",value:function(){this.props.desktopShowModal===!0&&!this.state.open?this.onClick():this.props.desktopShowModal===!1&&this.state.open&&e.stripeHandler.close();var r=this.props.ComponentClass;return this.props.children?bo.default.createElement(r,Qu({},Ry({},this.props.triggerEvent,this.onClick),{children:this.props.children})):this.props.disabled?this.renderDisabledButton():this.renderDefaultStripeButton()}}]),e}(bo.default.Component);od.defaultProps={className:"StripeCheckout",label:"Pay With Card",locale:"auto",ComponentClass:"span",reconfigureOnUpdate:!1,triggerEvent:"onClick"};od.propTypes={desktopShowModal:se.default.bool,triggerEvent:se.default.oneOf(["onClick","onTouchTap","onTouchStart"]),label:se.default.string,style:se.default.object,textStyle:se.default.object,disabled:se.default.bool,ComponentClass:se.default.string,showLoadingDialog:se.default.func,hideLoadingDialog:se.default.func,onScriptError:se.default.func,onScriptTagCreated:se.default.func,reconfigureOnUpdate:se.default.bool,stripeKey:se.default.string.isRequired,token:se.default.func.isRequired,name:se.default.string,description:se.default.string,image:se.default.string,amount:se.default.number,locale:se.default.oneOf(["auto","zh","da","nl","en","fr","de","it","ja","no","es","sv"]),currency:se.default.oneOf(["AED","AFN","ALL","AMD","ANG","AOA","ARS","AUD","AWG","AZN","BAM","BBD","BDT","BGN","BIF","BMD","BND","BOB","BRL","BSD","BWP","BZD","CAD","CDF","CHF","CLP","CNY","COP","CRC","CVE","CZK","DJF","DKK","DOP","DZD","EEK","EGP","ETB","EUR","FJD","FKP","GBP","GEL","GIP","GMD","GNF","GTQ","GYD","HKD","HNL","HRK","HTG","HUF","IDR","ILS","INR","ISK","JMD","JPY","KES","KGS","KHR","KMF","KRW","KYD","KZT","LAK","LBP","LKR","LRD","LSL","LTL","LVL","MAD","MDL","MGA","MKD","MNT","MOP","MRO","MUR","MVR","MWK","MXN","MYR","MZN","NAD","NGN","NIO","NOK","NPR","NZD","PAB","PEN","PGK","PHP","PKR","PLN","PYG","QAR","RON","RSD","RUB","RWF","SAR","SBD","SCR","SEK","SGD","SHP","SLL","SOS","SRD","STD","SVC","SZL","THB","TJS","TOP","TRY","TTD","TWD","TZS","UAH","UGX","USD","UYU","UZS","VND","VUV","WST","XAF","XCD","XOF","XPF","YER","ZAR","ZMW"]),panelLabel:se.default.string,zipCode:se.default.bool,billingAddress:se.default.bool,shippingAddress:se.default.bool,email:se.default.string,allowRememberMe:se.default.bool,bitcoin:se.default.bool,alipay:se.default.oneOf(["auto",!0,!1]),alipayReusable:se.default.bool,opened:se.default.func,closed:se.default.func};od._isMounted=!1;var oj=Sk.default=od;function dV(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ck(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function Pk(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ck(Object(n),!0).forEach(function(r){dV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ck(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function dt(t){return"Minified Redux error #"+t+"; visit https://redux.js.org/Errors?code="+t+" for the full message or use the non-minified dev environment for full errors. "}var Nk=function(){return typeof Symbol=="function"&&Symbol.observable||"@@observable"}(),Oy=function(){return Math.random().toString(36).substring(7).split("").join(".")},Ju={INIT:"@@redux/INIT"+Oy(),REPLACE:"@@redux/REPLACE"+Oy(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+Oy()}};function fV(t){if(typeof t!="object"||t===null)return!1;for(var e=t;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e}function Dy(t,e,n){var r;if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(dt(0));if(typeof e=="function"&&typeof n=="undefined"&&(n=e,e=void 0),typeof n!="undefined"){if(typeof n!="function")throw new Error(dt(1));return n(Dy)(t,e)}if(typeof t!="function")throw new Error(dt(2));var i=t,s=e,o=[],a=o,u=!1;function l(){a===o&&(a=o.slice())}function c(){if(u)throw new Error(dt(3));return s}function h(E){if(typeof E!="function")throw new Error(dt(4));if(u)throw new Error(dt(5));var p=!0;return l(),a.push(E),function(){if(!!p){if(u)throw new Error(dt(6));p=!1,l();var y=a.indexOf(E);a.splice(y,1),o=null}}}function d(E){if(!fV(E))throw new Error(dt(7));if(typeof E.type=="undefined")throw new Error(dt(8));if(u)throw new Error(dt(9));try{u=!0,s=i(s,E)}finally{u=!1}for(var p=o=a,f=0;f<p.length;f++){var y=p[f];y()}return E}function m(E){if(typeof E!="function")throw new Error(dt(10));i=E,d({type:Ju.REPLACE})}function _(){var E,p=h;return E={subscribe:function(y){if(typeof y!="object"||y===null)throw new Error(dt(11));function S(){y.next&&y.next(c())}S();var v=p(S);return{unsubscribe:v}}},E[Nk]=function(){return this},E}return d({type:Ju.INIT}),r={dispatch:d,subscribe:h,getState:c,replaceReducer:m},r[Nk]=_,r}function pV(t){Object.keys(t).forEach(function(e){var n=t[e],r=n(void 0,{type:Ju.INIT});if(typeof r=="undefined")throw new Error(dt(12));if(typeof n(void 0,{type:Ju.PROBE_UNKNOWN_ACTION()})=="undefined")throw new Error(dt(13))})}function mV(t){for(var e=Object.keys(t),n={},r=0;r<e.length;r++){var i=e[r];typeof t[i]=="function"&&(n[i]=t[i])}var s=Object.keys(n),o;try{pV(n)}catch(a){o=a}return function(u,l){if(u===void 0&&(u={}),o)throw o;for(var c=!1,h={},d=0;d<s.length;d++){var m=s[d],_=n[m],E=u[m],p=_(E,l);if(typeof p=="undefined")throw l&&l.type,new Error(dt(14));h[m]=p,c=c||p!==E}return c=c||s.length!==Object.keys(u).length,c?h:u}}function Ak(t,e){return function(){return e(t.apply(this,arguments))}}function gV(t,e){if(typeof t=="function")return Ak(t,e);if(typeof t!="object"||t===null)throw new Error(dt(16));var n={};for(var r in t){var i=t[r];typeof i=="function"&&(n[r]=Ak(i,e))}return n}function Rk(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return e.length===0?function(r){return r}:e.length===1?e[0]:e.reduce(function(r,i){return function(){return r(i.apply(void 0,arguments))}})}function yV(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(r){return function(){var i=r.apply(void 0,arguments),s=function(){throw new Error(dt(15))},o={getState:i.getState,dispatch:function(){return s.apply(void 0,arguments)}},a=e.map(function(u){return u(o)});return s=Rk.apply(void 0,a)(i.dispatch),Pk(Pk({},i),{},{dispatch:s})}}}var vV=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",__DO_NOT_USE__ActionTypes:Ju,applyMiddleware:yV,bindActionCreators:gV,combineReducers:mV,compose:Rk,createStore:Dy}),xy={exports:{}};(function(t,e){(function(n,r){r(e)})(No,function(n){function r(g,I){g.super_=I,g.prototype=Object.create(I.prototype,{constructor:{value:g,enumerable:!1,writable:!0,configurable:!0}})}function i(g,I){Object.defineProperty(this,"kind",{value:g,enumerable:!0}),I&&I.length&&Object.defineProperty(this,"path",{value:I,enumerable:!0})}function s(g,I,w){s.super_.call(this,"E",g),Object.defineProperty(this,"lhs",{value:I,enumerable:!0}),Object.defineProperty(this,"rhs",{value:w,enumerable:!0})}function o(g,I){o.super_.call(this,"N",g),Object.defineProperty(this,"rhs",{value:I,enumerable:!0})}function a(g,I){a.super_.call(this,"D",g),Object.defineProperty(this,"lhs",{value:I,enumerable:!0})}function u(g,I,w){u.super_.call(this,"A",g),Object.defineProperty(this,"index",{value:I,enumerable:!0}),Object.defineProperty(this,"item",{value:w,enumerable:!0})}function l(g,I,w){var C=g.slice((w||I)+1||g.length);return g.length=I<0?g.length+I:I,g.push.apply(g,C),g}function c(g){var I=typeof g=="undefined"?"undefined":Ie(g);return I!=="object"?I:g===Math?"math":g===null?"null":Array.isArray(g)?"array":Object.prototype.toString.call(g)==="[object Date]"?"date":typeof g.toString=="function"&&/^\/.*\//.test(g.toString())?"regexp":"object"}function h(g,I,w,C,L,W,H){L=L||[],H=H||[];var Y=L.slice(0);if(typeof W!="undefined"){if(C){if(typeof C=="function"&&C(Y,W))return;if((typeof C=="undefined"?"undefined":Ie(C))==="object"){if(C.prefilter&&C.prefilter(Y,W))return;if(C.normalize){var Pe=C.normalize(Y,W,g,I);Pe&&(g=Pe[0],I=Pe[1])}}}Y.push(W)}c(g)==="regexp"&&c(I)==="regexp"&&(g=g.toString(),I=I.toString());var ft=typeof g=="undefined"?"undefined":Ie(g),It=typeof I=="undefined"?"undefined":Ie(I),Ve=ft!=="undefined"||H&&H[H.length-1].lhs&&H[H.length-1].lhs.hasOwnProperty(W),St=It!=="undefined"||H&&H[H.length-1].rhs&&H[H.length-1].rhs.hasOwnProperty(W);if(!Ve&&St)w(new o(Y,I));else if(!St&&Ve)w(new a(Y,g));else if(c(g)!==c(I))w(new s(Y,g,I));else if(c(g)==="date"&&g-I!=0)w(new s(Y,g,I));else if(ft==="object"&&g!==null&&I!==null)if(H.filter(function(ce){return ce.lhs===g}).length)g!==I&&w(new s(Y,g,I));else{if(H.push({lhs:g,rhs:I}),Array.isArray(g)){var re;for(g.length,re=0;re<g.length;re++)re>=I.length?w(new u(Y,re,new a(void 0,g[re]))):h(g[re],I[re],w,C,Y,re,H);for(;re<I.length;)w(new u(Y,re,new o(void 0,I[re++])))}else{var Tn=Object.keys(g),Bt=Object.keys(I);Tn.forEach(function(ce,dr){var dn=Bt.indexOf(ce);dn>=0?(h(g[ce],I[ce],w,C,Y,ce,H),Bt=l(Bt,dn)):h(g[ce],void 0,w,C,Y,ce,H)}),Bt.forEach(function(ce){h(void 0,I[ce],w,C,Y,ce,H)})}H.length=H.length-1}else g!==I&&(ft==="number"&&isNaN(g)&&isNaN(I)||w(new s(Y,g,I)))}function d(g,I,w,C){return C=C||[],h(g,I,function(L){L&&C.push(L)},w),C.length?C:void 0}function m(g,I,w){if(w.path&&w.path.length){var C,L=g[I],W=w.path.length-1;for(C=0;C<W;C++)L=L[w.path[C]];switch(w.kind){case"A":m(L[w.path[C]],w.index,w.item);break;case"D":delete L[w.path[C]];break;case"E":case"N":L[w.path[C]]=w.rhs}}else switch(w.kind){case"A":m(g[I],w.index,w.item);break;case"D":g=l(g,I);break;case"E":case"N":g[I]=w.rhs}return g}function _(g,I,w){if(g&&I&&w&&w.kind){for(var C=g,L=-1,W=w.path?w.path.length-1:0;++L<W;)typeof C[w.path[L]]=="undefined"&&(C[w.path[L]]=typeof w.path[L]=="number"?[]:{}),C=C[w.path[L]];switch(w.kind){case"A":m(w.path?C[w.path[L]]:C,w.index,w.item);break;case"D":delete C[w.path[L]];break;case"E":case"N":C[w.path[L]]=w.rhs}}}function E(g,I,w){if(w.path&&w.path.length){var C,L=g[I],W=w.path.length-1;for(C=0;C<W;C++)L=L[w.path[C]];switch(w.kind){case"A":E(L[w.path[C]],w.index,w.item);break;case"D":L[w.path[C]]=w.lhs;break;case"E":L[w.path[C]]=w.lhs;break;case"N":delete L[w.path[C]]}}else switch(w.kind){case"A":E(g[I],w.index,w.item);break;case"D":g[I]=w.lhs;break;case"E":g[I]=w.lhs;break;case"N":g=l(g,I)}return g}function p(g,I,w){if(g&&I&&w&&w.kind){var C,L,W=g;for(L=w.path.length-1,C=0;C<L;C++)typeof W[w.path[C]]=="undefined"&&(W[w.path[C]]={}),W=W[w.path[C]];switch(w.kind){case"A":E(W[w.path[C]],w.index,w.item);break;case"D":W[w.path[C]]=w.lhs;break;case"E":W[w.path[C]]=w.lhs;break;case"N":delete W[w.path[C]]}}}function f(g,I,w){if(g&&I){var C=function(L){w&&!w(g,I,L)||_(g,I,L)};h(g,I,C)}}function y(g){return"color: "+Zt[g].color+"; font-weight: bold"}function S(g){var I=g.kind,w=g.path,C=g.lhs,L=g.rhs,W=g.index,H=g.item;switch(I){case"E":return[w.join("."),C,"\u2192",L];case"N":return[w.join("."),L];case"D":return[w.join(".")];case"A":return[w.join(".")+"["+W+"]",H];default:return[]}}function v(g,I,w,C){var L=d(g,I);try{C?w.groupCollapsed("diff"):w.group("diff")}catch{w.log("diff")}L?L.forEach(function(W){var H=W.kind,Y=S(W);w.log.apply(w,["%c "+Zt[H].text,y(H)].concat(Xe(Y)))}):w.log("\u2014\u2014 no diff \u2014\u2014");try{w.groupEnd()}catch{w.log("\u2014\u2014 diff end \u2014\u2014 ")}}function A(g,I,w,C){switch(typeof g=="undefined"?"undefined":Ie(g)){case"object":return typeof g[C]=="function"?g[C].apply(g,Xe(w)):g[C];case"function":return g(I);default:return g}}function k(g){var I=g.timestamp,w=g.duration;return function(C,L,W){var H=["action"];return H.push("%c"+String(C.type)),I&&H.push("%c@ "+L),w&&H.push("%c(in "+W.toFixed(2)+" ms)"),H.join(" ")}}function M(g,I){var w=I.logger,C=I.actionTransformer,L=I.titleFormatter,W=L===void 0?k(I):L,H=I.collapsed,Y=I.colors,Pe=I.level,ft=I.diff,It=typeof I.titleFormatter=="undefined";g.forEach(function(Ve,St){var re=Ve.started,Tn=Ve.startedTime,Bt=Ve.action,ce=Ve.prevState,dr=Ve.error,dn=Ve.took,fn=Ve.nextState,ld=g[St+1];ld&&(fn=ld.prevState,dn=ld.started-re);var kn=C(Bt),jy=typeof H=="function"?H(function(){return fn},Bt,Ve):H,qk=ye(Tn),zk=Y.title?"color: "+Y.title(kn)+";":"",Co=["color: gray; font-weight: lighter;"];Co.push(zk),I.timestamp&&Co.push("color: gray; font-weight: lighter;"),I.duration&&Co.push("color: gray; font-weight: lighter;");var Po=W(kn,qk,dn);try{jy?Y.title&&It?w.groupCollapsed.apply(w,["%c "+Po].concat(Co)):w.groupCollapsed(Po):Y.title&&It?w.group.apply(w,["%c "+Po].concat(Co)):w.group(Po)}catch{w.log(Po)}var cd=A(Pe,kn,[ce],"prevState"),hd=A(Pe,kn,[kn],"action"),dd=A(Pe,kn,[dr,ce],"error"),fd=A(Pe,kn,[fn],"nextState");if(cd)if(Y.prevState){var Wk="color: "+Y.prevState(ce)+"; font-weight: bold";w[cd]("%c prev state",Wk,ce)}else w[cd]("prev state",ce);if(hd)if(Y.action){var Hk="color: "+Y.action(kn)+"; font-weight: bold";w[hd]("%c action    ",Hk,kn)}else w[hd]("action    ",kn);if(dr&&dd)if(Y.error){var Kk="color: "+Y.error(dr,ce)+"; font-weight: bold;";w[dd]("%c error     ",Kk,dr)}else w[dd]("error     ",dr);if(fd)if(Y.nextState){var Gk="color: "+Y.nextState(fn)+"; font-weight: bold";w[fd]("%c next state",Gk,fn)}else w[fd]("next state",fn);ft&&v(ce,fn,w,jy);try{w.groupEnd()}catch{w.log("\u2014\u2014 log end \u2014\u2014")}})}function j(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=Object.assign({},Sn,g),w=I.logger,C=I.stateTransformer,L=I.errorTransformer,W=I.predicate,H=I.logErrors,Y=I.diffPredicate;if(typeof w=="undefined")return function(){return function(ft){return function(It){return ft(It)}}};if(g.getState&&g.dispatch)return console.error(`[redux-logger] redux-logger not installed. Make sure to pass logger instance as middleware:
// Logger with default options
import { logger } from 'redux-logger'
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
// Or you can create your own logger with custom options http://bit.ly/redux-logger-options
import createLogger from 'redux-logger'
const logger = createLogger({
  // ...options
});
const store = createStore(
  reducer,
  applyMiddleware(logger)
)
`),function(){return function(ft){return function(It){return ft(It)}}};var Pe=[];return function(ft){var It=ft.getState;return function(Ve){return function(St){if(typeof W=="function"&&!W(It,St))return Ve(St);var re={};Pe.push(re),re.started=Ee.now(),re.startedTime=new Date,re.prevState=C(It()),re.action=St;var Tn=void 0;if(H)try{Tn=Ve(St)}catch(ce){re.error=L(ce)}else Tn=Ve(St);re.took=Ee.now()-re.started,re.nextState=C(It());var Bt=I.diff&&typeof Y=="function"?Y(It,St):I.diff;if(M(Pe,Object.assign({},I,{diff:Bt})),Pe.length=0,re.error)throw re.error;return Tn}}}}var x,ne,hn=function(g,I){return new Array(I+1).join(g)},ge=function(g,I){return hn("0",I-g.toString().length)+g},ye=function(g){return ge(g.getHours(),2)+":"+ge(g.getMinutes(),2)+":"+ge(g.getSeconds(),2)+"."+ge(g.getMilliseconds(),3)},Ee=typeof performance!="undefined"&&performance!==null&&typeof performance.now=="function"?performance:Date,Ie=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(g){return typeof g}:function(g){return g&&typeof Symbol=="function"&&g.constructor===Symbol&&g!==Symbol.prototype?"symbol":typeof g},Xe=function(g){if(Array.isArray(g)){for(var I=0,w=Array(g.length);I<g.length;I++)w[I]=g[I];return w}return Array.from(g)},Vt=[];x=(typeof No=="undefined"?"undefined":Ie(No))==="object"&&No?No:typeof window!="undefined"?window:{},ne=x.DeepDiff,ne&&Vt.push(function(){typeof ne!="undefined"&&x.DeepDiff===d&&(x.DeepDiff=ne,ne=void 0)}),r(s,i),r(o,i),r(a,i),r(u,i),Object.defineProperties(d,{diff:{value:d,enumerable:!0},observableDiff:{value:h,enumerable:!0},applyDiff:{value:f,enumerable:!0},applyChange:{value:_,enumerable:!0},revertChange:{value:p,enumerable:!0},isConflict:{value:function(){return typeof ne!="undefined"},enumerable:!0},noConflict:{value:function(){return Vt&&(Vt.forEach(function(g){g()}),Vt=null),d},enumerable:!0}});var Zt={E:{color:"#2196F3",text:"CHANGED:"},N:{color:"#4CAF50",text:"ADDED:"},D:{color:"#F44336",text:"DELETED:"},A:{color:"#2196F3",text:"ARRAY:"}},Sn={level:"log",logger:console,logErrors:!0,collapsed:void 0,predicate:void 0,duration:!1,timestamp:!0,stateTransformer:function(g){return g},actionTransformer:function(g){return g},errorTransformer:function(g){return g},colors:{title:function(){return"inherit"},prevState:function(){return"#9E9E9E"},action:function(){return"#03A9F4"},nextState:function(){return"#4CAF50"},error:function(){return"#F20404"}},diff:!1,diffPredicate:void 0,transformer:void 0},jt=function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},I=g.dispatch,w=g.getState;return typeof I=="function"||typeof w=="function"?j()({dispatch:I,getState:w}):void console.error(`
[redux-logger v3] BREAKING CHANGE
[redux-logger v3] Since 3.0.0 redux-logger exports by default logger with default settings.
[redux-logger v3] Change
[redux-logger v3] import createLogger from 'redux-logger'
[redux-logger v3] to
[redux-logger v3] import { createLogger } from 'redux-logger'
`)};n.defaults=Sn,n.createLogger=j,n.logger=jt,n.default=jt,Object.defineProperty(n,"__esModule",{value:!0})})})(xy,xy.exports);var aj=tb(xy.exports),Ly="persist:",Ok="persist/FLUSH",My="persist/REHYDRATE",Dk="persist/PAUSE",xk="persist/PERSIST",Lk="persist/PURGE",Mk="persist/REGISTER",wV=-1;function ad(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ad=function(n){return typeof n}:ad=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ad(t)}function $k(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function _V(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?$k(n,!0).forEach(function(r){EV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):$k(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function EV(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function IV(t,e,n,r){r.debug;var i=_V({},n);return t&&ad(t)==="object"&&Object.keys(t).forEach(function(s){s!=="_persist"&&e[s]===n[s]&&(i[s]=t[s])}),i}function SV(t){var e=t.blacklist||null,n=t.whitelist||null,r=t.transforms||[],i=t.throttle||0,s="".concat(t.keyPrefix!==void 0?t.keyPrefix:Ly).concat(t.key),o=t.storage,a;t.serialize===!1?a=function(A){return A}:typeof t.serialize=="function"?a=t.serialize:a=TV;var u=t.writeFailHandler||null,l={},c={},h=[],d=null,m=null,_=function(A){Object.keys(A).forEach(function(k){!f(k)||l[k]!==A[k]&&h.indexOf(k)===-1&&h.push(k)}),Object.keys(l).forEach(function(k){A[k]===void 0&&f(k)&&h.indexOf(k)===-1&&l[k]!==void 0&&h.push(k)}),d===null&&(d=setInterval(E,i)),l=A};function E(){if(h.length===0){d&&clearInterval(d),d=null;return}var v=h.shift(),A=r.reduce(function(k,M){return M.in(k,v,l)},l[v]);if(A!==void 0)try{c[v]=a(A)}catch(k){console.error("redux-persist/createPersistoid: error serializing state",k)}else delete c[v];h.length===0&&p()}function p(){Object.keys(c).forEach(function(v){l[v]===void 0&&delete c[v]}),m=o.setItem(s,a(c)).catch(y)}function f(v){return!(n&&n.indexOf(v)===-1&&v!=="_persist"||e&&e.indexOf(v)!==-1)}function y(v){u&&u(v)}var S=function(){for(;h.length!==0;)E();return m||Promise.resolve()};return{update:_,flush:S}}function TV(t){return JSON.stringify(t)}function kV(t){var e=t.transforms||[],n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Ly).concat(t.key),r=t.storage;t.debug;var i;return t.deserialize===!1?i=function(o){return o}:typeof t.deserialize=="function"?i=t.deserialize:i=bV,r.getItem(n).then(function(s){if(s)try{var o={},a=i(s);return Object.keys(a).forEach(function(u){o[u]=e.reduceRight(function(l,c){return c.out(l,u,a)},i(a[u]))}),o}catch(u){throw u}else return})}function bV(t){return JSON.parse(t)}function CV(t){var e=t.storage,n="".concat(t.keyPrefix!==void 0?t.keyPrefix:Ly).concat(t.key);return e.removeItem(n,PV)}function PV(t){}function Fk(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function hr(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Fk(n,!0).forEach(function(r){NV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Fk(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function NV(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function AV(t,e){if(t==null)return{};var n=RV(t,e),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)r=s[i],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,r)||(n[r]=t[r]))}return n}function RV(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}var OV=5e3;function uj(t,e){var n=t.version!==void 0?t.version:wV;t.debug;var r=t.stateReconciler===void 0?IV:t.stateReconciler,i=t.getStoredState||kV,s=t.timeout!==void 0?t.timeout:OV,o=null,a=!1,u=!0,l=function(h){return h._persist.rehydrated&&o&&!u&&o.update(h),h};return function(c,h){var d=c||{},m=d._persist,_=AV(d,["_persist"]),E=_;if(h.type===xk){var p=!1,f=function(j,x){p||(h.rehydrate(t.key,j,x),p=!0)};if(s&&setTimeout(function(){!p&&f(void 0,new Error('redux-persist: persist timed out for persist key "'.concat(t.key,'"')))},s),u=!1,o||(o=SV(t)),m)return hr({},e(E,h),{_persist:m});if(typeof h.rehydrate!="function"||typeof h.register!="function")throw new Error("redux-persist: either rehydrate or register is not a function on the PERSIST action. This can happen if the action is being replayed. This is an unexplored use case, please open an issue and we will figure out a resolution.");return h.register(t.key),i(t).then(function(M){var j=t.migrate||function(x,ne){return Promise.resolve(x)};j(M,n).then(function(x){f(x)},function(x){f(void 0,x)})},function(M){f(void 0,M)}),hr({},e(E,h),{_persist:{version:n,rehydrated:!1}})}else{if(h.type===Lk)return a=!0,h.result(CV(t)),hr({},e(E,h),{_persist:m});if(h.type===Ok)return h.result(o&&o.flush()),hr({},e(E,h),{_persist:m});if(h.type===Dk)u=!0;else if(h.type===My){if(a)return hr({},E,{_persist:hr({},m,{rehydrated:!0})});if(h.key===t.key){var y=e(E,h),S=h.payload,v=r!==!1&&S!==void 0?r(S,c,y,t):y,A=hr({},v,{_persist:hr({},m,{rehydrated:!0})});return l(A)}}}if(!m)return e(c,h);var k=e(E,h);return k===E?c:l(hr({},k,{_persist:m}))}}function Uk(t){return LV(t)||xV(t)||DV()}function DV(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function xV(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function LV(t){if(Array.isArray(t)){for(var e=0,n=new Array(t.length);e<t.length;e++)n[e]=t[e];return n}}function Vk(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(t,i).enumerable})),n.push.apply(n,r)}return n}function $y(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Vk(n,!0).forEach(function(r){MV(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vk(n).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function MV(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var jk={registry:[],bootstrapped:!1},$V=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:jk,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case Mk:return $y({},e,{registry:[].concat(Uk(e.registry),[n.key])});case My:var r=e.registry.indexOf(n.key),i=Uk(e.registry);return i.splice(r,1),$y({},e,{registry:i,bootstrapped:i.length===0});default:return e}};function lj(t,e,n){var r=n||!1,i=Dy($V,jk,e&&e.enhancer?e.enhancer:void 0),s=function(l){i.dispatch({type:Mk,key:l})},o=function(l,c,h){var d={type:My,payload:c,err:h,key:l};t.dispatch(d),i.dispatch(d),r&&a.getState().bootstrapped&&(r(),r=!1)},a=$y({},i,{purge:function(){var l=[];return t.dispatch({type:Lk,result:function(h){l.push(h)}}),Promise.all(l)},flush:function(){var l=[];return t.dispatch({type:Ok,result:function(h){l.push(h)}}),Promise.all(l)},pause:function(){t.dispatch({type:Dk})},persist:function(){t.dispatch({type:xk,register:s,rehydrate:o})}});return e&&e.manualPersist||a.persist(),a}var FV=nb(vV),Bk=FV.compose,cj=typeof window!="undefined"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Bk:Bk.apply(null,arguments)},Fy={},Uy={};Uy.__esModule=!0;Uy.default=jV;function ud(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?ud=function(n){return typeof n}:ud=function(n){return n&&typeof Symbol=="function"&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n},ud(t)}function Vy(){}var UV={getItem:Vy,setItem:Vy,removeItem:Vy};function VV(t){if((typeof self=="undefined"?"undefined":ud(self))!=="object"||!(t in self))return!1;try{var e=self[t],n="redux-persist ".concat(t," test");e.setItem(n,"test"),e.getItem(n),e.removeItem(n)}catch{return!1}return!0}function jV(t){var e="".concat(t,"Storage");return VV(e)?self[e]:UV}Fy.__esModule=!0;Fy.default=zV;var BV=qV(Uy);function qV(t){return t&&t.__esModule?t:{default:t}}function zV(t){var e=(0,BV.default)(t);return{getItem:function(r){return new Promise(function(i,s){i(e.getItem(r))})},setItem:function(r,i){return new Promise(function(s,o){s(e.setItem(r,i))})},removeItem:function(r){return new Promise(function(i,s){i(e.removeItem(r))})}}}var WV=void 0,HV=KV(Fy);function KV(t){return t&&t.__esModule?t:{default:t}}var GV=(0,HV.default)("local");WV=GV;export{rj as B,ij as L,ej as N,XV as P,tj as R,oj as _,sc as a,sj as b,aA as c,ZV as d,nj as e,SN as f,Fa as g,mV as h,WV as i,JV as j,Dy as k,cj as l,yV as m,lj as n,aj as o,uj as p,YV as q,V as r,wN as s,A_ as u};
