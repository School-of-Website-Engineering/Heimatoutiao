(self["webpackChunkHeimatoutiao"]=self["webpackChunkHeimatoutiao"]||[]).push([[796],{1825:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("div",[e._v(" 首页 ")])},o=[],i={},s=i,a=n(1001),c=(0,a.Z)(s,r,o,!1,null,"17eb0acc",null),u=c.exports},5925:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("div",[t("router-view"),t("van-tabbar",{attrs:{route:""},model:{value:e.active,callback:function(t){e.active=t},expression:"active"}},[t("van-tabbar-item",{attrs:{icon:"home-o",to:"/home"}},[e._v("首页")]),t("van-tabbar-item",{attrs:{icon:"comment-o",to:"/qa"}},[e._v("问答")]),t("van-tabbar-item",{attrs:{icon:"video-o",to:"/video"}},[e._v("视频")]),t("van-tabbar-item",{attrs:{icon:"manager-o",to:"/my"}},[e._v("我的")])],1)],1)},o=[],i={name:"Layout",components:{},data(){return{active:0}},computed:{},methods:{},mounted(){},created(){},beforeDestroy(){}},s=i,a=n(1001),c=(0,a.Z)(s,r,o,!1,null,"837437f6",null),u=c.exports},6245:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Ht}});var r=function(){var e=this,t=e._self._c;return t("div",{staticClass:"login-box"},[t("van-nav-bar",{attrs:{title:"登录","left-arrow":""},on:{"click-left":function(t){e.onClickLeft(e.$router.back())}}}),t("van-form",{on:{submit:e.onLogin}},[t("van-field",{attrs:{"icon-prefix":"iconfont icon","left-icon":"shouji","right-icon":"warning-o",placeholder:"请输入手机号",rules:e.formRules.mobile},model:{value:e.user.mobile,callback:function(t){e.$set(e.user,"mobile",t)},expression:"user.mobile"}}),t("van-field",{attrs:{clearabled:"","icon-prefix":"iconfont icon","left-icon":"yanzhengma",placeholder:"请输入验证码",rules:e.formRules.code},scopedSlots:e._u([{key:"button",fn:function(){return[t("van-button",{staticClass:"send-msg",attrs:{size:"small",round:""}},[e._v("获取验证码 ")])]},proxy:!0}]),model:{value:e.user.code,callback:function(t){e.$set(e.user,"code",t)},expression:"user.code"}}),t("div",{staticClass:"login-container"},[t("van-button",{staticClass:"but-login",attrs:{type:"info",block:""},on:{click:e.onLogin}},[e._v("登录 ")])],1)],1),t("span",[e._v("手机号:13911111111")]),t("span",[e._v("验证码:246810")])],1)},o=[];function i(e,t){return function(){return e.apply(t,arguments)}}const{toString:s}=Object.prototype,{getPrototypeOf:a}=Object,c=(e=>t=>{const n=s.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),u=e=>(e=e.toLowerCase(),t=>c(t)===e),l=e=>t=>typeof t===e,{isArray:f}=Array,d=l("undefined");function h(e){return null!==e&&!d(e)&&null!==e.constructor&&!d(e.constructor)&&y(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const p=u("ArrayBuffer");function m(e){let t;return t="undefined"!==typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&p(e.buffer),t}const b=l("string"),y=l("function"),g=l("number"),w=e=>null!==e&&"object"===typeof e,E=e=>!0===e||!1===e,v=e=>{if("object"!==c(e))return!1;const t=a(e);return(null===t||t===Object.prototype||null===Object.getPrototypeOf(t))&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},O=u("Date"),R=u("File"),S=u("Blob"),A=u("FileList"),T=e=>w(e)&&y(e.pipe),x=e=>{const t="[object FormData]";return e&&("function"===typeof FormData&&e instanceof FormData||s.call(e)===t||y(e.toString)&&e.toString()===t)},_=u("URLSearchParams"),j=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function C(e,t,{allOwnKeys:n=!1}={}){if(null===e||"undefined"===typeof e)return;let r,o;if("object"!==typeof e&&(e=[e]),f(e))for(r=0,o=e.length;r<o;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let s;for(r=0;r<i;r++)s=o[r],t.call(null,e[s],s,e)}}function N(e,t){t=t.toLowerCase();const n=Object.keys(e);let r,o=n.length;while(o-- >0)if(r=n[o],t===r.toLowerCase())return r;return null}const P=(()=>"undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:global)(),U=e=>!d(e)&&e!==P;function L(){const{caseless:e}=U(this)&&this||{},t={},n=(n,r)=>{const o=e&&N(t,r)||r;v(t[o])&&v(n)?t[o]=L(t[o],n):v(n)?t[o]=L({},n):f(n)?t[o]=n.slice():t[o]=n};for(let r=0,o=arguments.length;r<o;r++)arguments[r]&&C(arguments[r],n);return t}const F=(e,t,n,{allOwnKeys:r}={})=>(C(t,((t,r)=>{n&&y(t)?e[r]=i(t,n):e[r]=t}),{allOwnKeys:r}),e),k=e=>(65279===e.charCodeAt(0)&&(e=e.slice(1)),e),B=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},D=(e,t,n,r)=>{let o,i,s;const c={};if(t=t||{},null==e)return t;do{o=Object.getOwnPropertyNames(e),i=o.length;while(i-- >0)s=o[i],r&&!r(s,e,t)||c[s]||(t[s]=e[s],c[s]=!0);e=!1!==n&&a(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},q=(e,t,n)=>{e=String(e),(void 0===n||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return-1!==r&&r===n},z=e=>{if(!e)return null;if(f(e))return e;let t=e.length;if(!g(t))return null;const n=new Array(t);while(t-- >0)n[t]=e[t];return n},M=(e=>t=>e&&t instanceof e)("undefined"!==typeof Uint8Array&&a(Uint8Array)),I=(e,t)=>{const n=e&&e[Symbol.iterator],r=n.call(e);let o;while((o=r.next())&&!o.done){const n=o.value;t.call(e,n[0],n[1])}},H=(e,t)=>{let n;const r=[];while(null!==(n=e.exec(t)))r.push(n);return r},J=u("HTMLFormElement"),W=e=>e.toLowerCase().replace(/[_-\s]([a-z\d])(\w*)/g,(function(e,t,n){return t.toUpperCase()+n})),$=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),K=u("RegExp"),V=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};C(n,((n,o)=>{!1!==t(n,o,e)&&(r[o]=n)})),Object.defineProperties(e,r)},Z=e=>{V(e,((t,n)=>{if(y(e)&&-1!==["arguments","caller","callee"].indexOf(n))return!1;const r=e[n];y(r)&&(t.enumerable=!1,"writable"in t?t.writable=!1:t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")}))}))},G=(e,t)=>{const n={},r=e=>{e.forEach((e=>{n[e]=!0}))};return f(e)?r(e):r(String(e).split(t)),n},X=()=>{},Q=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y=e=>{const t=new Array(10),n=(e,r)=>{if(w(e)){if(t.indexOf(e)>=0)return;if(!("toJSON"in e)){t[r]=e;const o=f(e)?[]:{};return C(e,((e,t)=>{const i=n(e,r+1);!d(i)&&(o[t]=i)})),t[r]=void 0,o}}return e};return n(e,0)};var ee={isArray:f,isArrayBuffer:p,isBuffer:h,isFormData:x,isArrayBufferView:m,isString:b,isNumber:g,isBoolean:E,isObject:w,isPlainObject:v,isUndefined:d,isDate:O,isFile:R,isBlob:S,isRegExp:K,isFunction:y,isStream:T,isURLSearchParams:_,isTypedArray:M,isFileList:A,forEach:C,merge:L,extend:F,trim:j,stripBOM:k,inherits:B,toFlatObject:D,kindOf:c,kindOfTest:u,endsWith:q,toArray:z,forEachEntry:I,matchAll:H,isHTMLForm:J,hasOwnProperty:$,hasOwnProp:$,reduceDescriptors:V,freezeMethods:Z,toObjectSet:G,toCamelCase:W,noop:X,toFiniteNumber:Q,findKey:N,global:P,isContextDefined:U,toJSONObject:Y};function te(e,t,n,r,o){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=(new Error).stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),o&&(this.response=o)}ee.inherits(te,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:ee.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const ne=te.prototype,re={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach((e=>{re[e]={value:e}})),Object.defineProperties(te,re),Object.defineProperty(ne,"isAxiosError",{value:!0}),te.from=(e,t,n,r,o,i)=>{const s=Object.create(ne);return ee.toFlatObject(e,s,(function(e){return e!==Error.prototype}),(e=>"isAxiosError"!==e)),te.call(s,e.message,t,n,r,o),s.cause=e,s.name=e.name,i&&Object.assign(s,i),s};var oe=te,ie=n(6230),se=ie;function ae(e){return ee.isPlainObject(e)||ee.isArray(e)}function ce(e){return ee.endsWith(e,"[]")?e.slice(0,-2):e}function ue(e,t,n){return e?e.concat(t).map((function(e,t){return e=ce(e),!n&&t?"["+e+"]":e})).join(n?".":""):t}function le(e){return ee.isArray(e)&&!e.some(ae)}const fe=ee.toFlatObject(ee,{},null,(function(e){return/^is[A-Z]/.test(e)}));function de(e){return e&&ee.isFunction(e.append)&&"FormData"===e[Symbol.toStringTag]&&e[Symbol.iterator]}function he(e,t,n){if(!ee.isObject(e))throw new TypeError("target must be an object");t=t||new(se||FormData),n=ee.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,(function(e,t){return!ee.isUndefined(t[e])}));const r=n.metaTokens,o=n.visitor||l,i=n.dots,s=n.indexes,a=n.Blob||"undefined"!==typeof Blob&&Blob,c=a&&de(t);if(!ee.isFunction(o))throw new TypeError("visitor must be a function");function u(e){if(null===e)return"";if(ee.isDate(e))return e.toISOString();if(!c&&ee.isBlob(e))throw new oe("Blob is not supported. Use a Buffer instead.");return ee.isArrayBuffer(e)||ee.isTypedArray(e)?c&&"function"===typeof Blob?new Blob([e]):Buffer.from(e):e}function l(e,n,o){let a=e;if(e&&!o&&"object"===typeof e)if(ee.endsWith(n,"{}"))n=r?n:n.slice(0,-2),e=JSON.stringify(e);else if(ee.isArray(e)&&le(e)||ee.isFileList(e)||ee.endsWith(n,"[]")&&(a=ee.toArray(e)))return n=ce(n),a.forEach((function(e,r){!ee.isUndefined(e)&&null!==e&&t.append(!0===s?ue([n],r,i):null===s?n:n+"[]",u(e))})),!1;return!!ae(e)||(t.append(ue(o,n,i),u(e)),!1)}const f=[],d=Object.assign(fe,{defaultVisitor:l,convertValue:u,isVisitable:ae});function h(e,n){if(!ee.isUndefined(e)){if(-1!==f.indexOf(e))throw Error("Circular reference detected in "+n.join("."));f.push(e),ee.forEach(e,(function(e,r){const i=!(ee.isUndefined(e)||null===e)&&o.call(t,e,ee.isString(r)?r.trim():r,n,d);!0===i&&h(e,n?n.concat(r):[r])})),f.pop()}}if(!ee.isObject(e))throw new TypeError("data must be an object");return h(e),t}var pe=he;function me(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,(function(e){return t[e]}))}function be(e,t){this._pairs=[],e&&pe(e,this,t)}const ye=be.prototype;ye.append=function(e,t){this._pairs.push([e,t])},ye.toString=function(e){const t=e?function(t){return e.call(this,t,me)}:me;return this._pairs.map((function(e){return t(e[0])+"="+t(e[1])}),"").join("&")};var ge=be;function we(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ee(e,t,n){if(!t)return e;const r=n&&n.encode||we,o=n&&n.serialize;let i;if(i=o?o(t,n):ee.isURLSearchParams(t)?t.toString():new ge(t,n).toString(r),i){const t=e.indexOf("#");-1!==t&&(e=e.slice(0,t)),e+=(-1===e.indexOf("?")?"?":"&")+i}return e}class ve{constructor(){this.handlers=[]}use(e,t,n){return this.handlers.push({fulfilled:e,rejected:t,synchronous:!!n&&n.synchronous,runWhen:n?n.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){ee.forEach(this.handlers,(function(t){null!==t&&e(t)}))}}var Oe=ve,Re={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Se="undefined"!==typeof URLSearchParams?URLSearchParams:ge,Ae=FormData;const Te=(()=>{let e;return("undefined"===typeof navigator||"ReactNative"!==(e=navigator.product)&&"NativeScript"!==e&&"NS"!==e)&&("undefined"!==typeof window&&"undefined"!==typeof document)})(),xe=(()=>"undefined"!==typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope&&"function"===typeof self.importScripts)();var _e={isBrowser:!0,classes:{URLSearchParams:Se,FormData:Ae,Blob:Blob},isStandardBrowserEnv:Te,isStandardBrowserWebWorkerEnv:xe,protocols:["http","https","file","blob","url","data"]};function je(e,t){return pe(e,new _e.classes.URLSearchParams,Object.assign({visitor:function(e,t,n,r){return _e.isNode&&ee.isBuffer(e)?(this.append(t,e.toString("base64")),!1):r.defaultVisitor.apply(this,arguments)}},t))}function Ce(e){return ee.matchAll(/\w+|\[(\w*)]/g,e).map((e=>"[]"===e[0]?"":e[1]||e[0]))}function Ne(e){const t={},n=Object.keys(e);let r;const o=n.length;let i;for(r=0;r<o;r++)i=n[r],t[i]=e[i];return t}function Pe(e){function t(e,n,r,o){let i=e[o++];const s=Number.isFinite(+i),a=o>=e.length;if(i=!i&&ee.isArray(r)?r.length:i,a)return ee.hasOwnProp(r,i)?r[i]=[r[i],n]:r[i]=n,!s;r[i]&&ee.isObject(r[i])||(r[i]=[]);const c=t(e,n,r[i],o);return c&&ee.isArray(r[i])&&(r[i]=Ne(r[i])),!s}if(ee.isFormData(e)&&ee.isFunction(e.entries)){const n={};return ee.forEachEntry(e,((e,r)=>{t(Ce(e),r,n,0)})),n}return null}var Ue=Pe;const Le={"Content-Type":void 0};function Fe(e,t,n){if(ee.isString(e))try{return(t||JSON.parse)(e),ee.trim(e)}catch(r){if("SyntaxError"!==r.name)throw r}return(n||JSON.stringify)(e)}const ke={transitional:Re,adapter:["xhr","http"],transformRequest:[function(e,t){const n=t.getContentType()||"",r=n.indexOf("application/json")>-1,o=ee.isObject(e);o&&ee.isHTMLForm(e)&&(e=new FormData(e));const i=ee.isFormData(e);if(i)return r&&r?JSON.stringify(Ue(e)):e;if(ee.isArrayBuffer(e)||ee.isBuffer(e)||ee.isStream(e)||ee.isFile(e)||ee.isBlob(e))return e;if(ee.isArrayBufferView(e))return e.buffer;if(ee.isURLSearchParams(e))return t.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let s;if(o){if(n.indexOf("application/x-www-form-urlencoded")>-1)return je(e,this.formSerializer).toString();if((s=ee.isFileList(e))||n.indexOf("multipart/form-data")>-1){const t=this.env&&this.env.FormData;return pe(s?{"files[]":e}:e,t&&new t,this.formSerializer)}}return o||r?(t.setContentType("application/json",!1),Fe(e)):e}],transformResponse:[function(e){const t=this.transitional||ke.transitional,n=t&&t.forcedJSONParsing,r="json"===this.responseType;if(e&&ee.isString(e)&&(n&&!this.responseType||r)){const n=t&&t.silentJSONParsing,i=!n&&r;try{return JSON.parse(e)}catch(o){if(i){if("SyntaxError"===o.name)throw oe.from(o,oe.ERR_BAD_RESPONSE,this,null,this.response);throw o}}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:_e.classes.FormData,Blob:_e.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};ee.forEach(["delete","get","head"],(function(e){ke.headers[e]={}})),ee.forEach(["post","put","patch"],(function(e){ke.headers[e]=ee.merge(Le)}));var Be=ke;const De=ee.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var qe=e=>{const t={};let n,r,o;return e&&e.split("\n").forEach((function(e){o=e.indexOf(":"),n=e.substring(0,o).trim().toLowerCase(),r=e.substring(o+1).trim(),!n||t[n]&&De[n]||("set-cookie"===n?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)})),t};const ze=Symbol("internals");function Me(e){return e&&String(e).trim().toLowerCase()}function Ie(e){return!1===e||null==e?e:ee.isArray(e)?e.map(Ie):String(e)}function He(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;while(r=n.exec(e))t[r[1]]=r[2];return t}function Je(e){return/^[-_a-zA-Z]+$/.test(e.trim())}function We(e,t,n,r){return ee.isFunction(r)?r.call(this,t,n):ee.isString(t)?ee.isString(r)?-1!==t.indexOf(r):ee.isRegExp(r)?r.test(t):void 0:void 0}function $e(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,((e,t,n)=>t.toUpperCase()+n))}function Ke(e,t){const n=ee.toCamelCase(" "+t);["get","set","has"].forEach((r=>{Object.defineProperty(e,r+n,{value:function(e,n,o){return this[r].call(this,t,e,n,o)},configurable:!0})}))}class Ve{constructor(e){e&&this.set(e)}set(e,t,n){const r=this;function o(e,t,n){const o=Me(t);if(!o)throw new Error("header name must be a non-empty string");const i=ee.findKey(r,o);(!i||void 0===r[i]||!0===n||void 0===n&&!1!==r[i])&&(r[i||t]=Ie(e))}const i=(e,t)=>ee.forEach(e,((e,n)=>o(e,n,t)));return ee.isPlainObject(e)||e instanceof this.constructor?i(e,t):ee.isString(e)&&(e=e.trim())&&!Je(e)?i(qe(e),t):null!=e&&o(t,e,n),this}get(e,t){if(e=Me(e),e){const n=ee.findKey(this,e);if(n){const e=this[n];if(!t)return e;if(!0===t)return He(e);if(ee.isFunction(t))return t.call(this,e,n);if(ee.isRegExp(t))return t.exec(e);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,t){if(e=Me(e),e){const n=ee.findKey(this,e);return!(!n||t&&!We(this,this[n],n,t))}return!1}delete(e,t){const n=this;let r=!1;function o(e){if(e=Me(e),e){const o=ee.findKey(n,e);!o||t&&!We(n,n[o],o,t)||(delete n[o],r=!0)}}return ee.isArray(e)?e.forEach(o):o(e),r}clear(){return Object.keys(this).forEach(this.delete.bind(this))}normalize(e){const t=this,n={};return ee.forEach(this,((r,o)=>{const i=ee.findKey(n,o);if(i)return t[i]=Ie(r),void delete t[o];const s=e?$e(o):String(o).trim();s!==o&&delete t[o],t[s]=Ie(r),n[s]=!0})),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const t=Object.create(null);return ee.forEach(this,((n,r)=>{null!=n&&!1!==n&&(t[r]=e&&ee.isArray(n)?n.join(", "):n)})),t}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map((([e,t])=>e+": "+t)).join("\n")}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...t){const n=new this(e);return t.forEach((e=>n.set(e))),n}static accessor(e){const t=this[ze]=this[ze]={accessors:{}},n=t.accessors,r=this.prototype;function o(e){const t=Me(e);n[t]||(Ke(r,e),n[t]=!0)}return ee.isArray(e)?e.forEach(o):o(e),this}}Ve.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent"]),ee.freezeMethods(Ve.prototype),ee.freezeMethods(Ve);var Ze=Ve;function Ge(e,t){const n=this||Be,r=t||n,o=Ze.from(r.headers);let i=r.data;return ee.forEach(e,(function(e){i=e.call(n,i,o.normalize(),t?t.status:void 0)})),o.normalize(),i}function Xe(e){return!(!e||!e.__CANCEL__)}function Qe(e,t,n){oe.call(this,null==e?"canceled":e,oe.ERR_CANCELED,t,n),this.name="CanceledError"}ee.inherits(Qe,oe,{__CANCEL__:!0});var Ye=Qe,et=null;function tt(e,t,n){const r=n.config.validateStatus;n.status&&r&&!r(n.status)?t(new oe("Request failed with status code "+n.status,[oe.ERR_BAD_REQUEST,oe.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n)):e(n)}var nt=_e.isStandardBrowserEnv?function(){return{write:function(e,t,n,r,o,i){const s=[];s.push(e+"="+encodeURIComponent(t)),ee.isNumber(n)&&s.push("expires="+new Date(n).toGMTString()),ee.isString(r)&&s.push("path="+r),ee.isString(o)&&s.push("domain="+o),!0===i&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function rt(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function ot(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function it(e,t){return e&&!rt(t)?ot(e,t):t}var st=_e.isStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),t=document.createElement("a");let n;function r(n){let r=n;return e&&(t.setAttribute("href",r),r=t.href),t.setAttribute("href",r),{href:t.href,protocol:t.protocol?t.protocol.replace(/:$/,""):"",host:t.host,search:t.search?t.search.replace(/^\?/,""):"",hash:t.hash?t.hash.replace(/^#/,""):"",hostname:t.hostname,port:t.port,pathname:"/"===t.pathname.charAt(0)?t.pathname:"/"+t.pathname}}return n=r(window.location.href),function(e){const t=ee.isString(e)?r(e):e;return t.protocol===n.protocol&&t.host===n.host}}():function(){return function(){return!0}}();function at(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function ct(e,t){e=e||10;const n=new Array(e),r=new Array(e);let o,i=0,s=0;return t=void 0!==t?t:1e3,function(a){const c=Date.now(),u=r[s];o||(o=c),n[i]=a,r[i]=c;let l=s,f=0;while(l!==i)f+=n[l++],l%=e;if(i=(i+1)%e,i===s&&(s=(s+1)%e),c-o<t)return;const d=u&&c-u;return d?Math.round(1e3*f/d):void 0}}var ut=ct;function lt(e,t){let n=0;const r=ut(50,250);return o=>{const i=o.loaded,s=o.lengthComputable?o.total:void 0,a=i-n,c=r(a),u=i<=s;n=i;const l={loaded:i,total:s,progress:s?i/s:void 0,bytes:a,rate:c||void 0,estimated:c&&s&&u?(s-i)/c:void 0,event:o};l[t?"download":"upload"]=!0,e(l)}}const ft="undefined"!==typeof XMLHttpRequest;var dt=ft&&function(e){return new Promise((function(t,n){let r=e.data;const o=Ze.from(e.headers).normalize(),i=e.responseType;let s;function a(){e.cancelToken&&e.cancelToken.unsubscribe(s),e.signal&&e.signal.removeEventListener("abort",s)}ee.isFormData(r)&&(_e.isStandardBrowserEnv||_e.isStandardBrowserWebWorkerEnv)&&o.setContentType(!1);let c=new XMLHttpRequest;if(e.auth){const t=e.auth.username||"",n=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.set("Authorization","Basic "+btoa(t+":"+n))}const u=it(e.baseURL,e.url);function l(){if(!c)return;const r=Ze.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),o=i&&"text"!==i&&"json"!==i?c.response:c.responseText,s={data:o,status:c.status,statusText:c.statusText,headers:r,config:e,request:c};tt((function(e){t(e),a()}),(function(e){n(e),a()}),s),c=null}if(c.open(e.method.toUpperCase(),Ee(u,e.params,e.paramsSerializer),!0),c.timeout=e.timeout,"onloadend"in c?c.onloadend=l:c.onreadystatechange=function(){c&&4===c.readyState&&(0!==c.status||c.responseURL&&0===c.responseURL.indexOf("file:"))&&setTimeout(l)},c.onabort=function(){c&&(n(new oe("Request aborted",oe.ECONNABORTED,e,c)),c=null)},c.onerror=function(){n(new oe("Network Error",oe.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let t=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const r=e.transitional||Re;e.timeoutErrorMessage&&(t=e.timeoutErrorMessage),n(new oe(t,r.clarifyTimeoutError?oe.ETIMEDOUT:oe.ECONNABORTED,e,c)),c=null},_e.isStandardBrowserEnv){const t=(e.withCredentials||st(u))&&e.xsrfCookieName&&nt.read(e.xsrfCookieName);t&&o.set(e.xsrfHeaderName,t)}void 0===r&&o.setContentType(null),"setRequestHeader"in c&&ee.forEach(o.toJSON(),(function(e,t){c.setRequestHeader(t,e)})),ee.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),i&&"json"!==i&&(c.responseType=e.responseType),"function"===typeof e.onDownloadProgress&&c.addEventListener("progress",lt(e.onDownloadProgress,!0)),"function"===typeof e.onUploadProgress&&c.upload&&c.upload.addEventListener("progress",lt(e.onUploadProgress)),(e.cancelToken||e.signal)&&(s=t=>{c&&(n(!t||t.type?new Ye(null,e,c):t),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(s),e.signal&&(e.signal.aborted?s():e.signal.addEventListener("abort",s)));const f=at(u);f&&-1===_e.protocols.indexOf(f)?n(new oe("Unsupported protocol "+f+":",oe.ERR_BAD_REQUEST,e)):c.send(r||null)}))};const ht={http:et,xhr:dt};ee.forEach(ht,((e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch(n){}Object.defineProperty(e,"adapterName",{value:t})}}));var pt={getAdapter:e=>{e=ee.isArray(e)?e:[e];const{length:t}=e;let n,r;for(let o=0;o<t;o++)if(n=e[o],r=ee.isString(n)?ht[n.toLowerCase()]:n)break;if(!r){if(!1===r)throw new oe(`Adapter ${n} is not supported by the environment`,"ERR_NOT_SUPPORT");throw new Error(ee.hasOwnProp(ht,n)?`Adapter '${n}' is not available in the build`:`Unknown adapter '${n}'`)}if(!ee.isFunction(r))throw new TypeError("adapter is not a function");return r},adapters:ht};function mt(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new Ye(null,e)}function bt(e){mt(e),e.headers=Ze.from(e.headers),e.data=Ge.call(e,e.transformRequest),-1!==["post","put","patch"].indexOf(e.method)&&e.headers.setContentType("application/x-www-form-urlencoded",!1);const t=pt.getAdapter(e.adapter||Be.adapter);return t(e).then((function(t){return mt(e),t.data=Ge.call(e,e.transformResponse,t),t.headers=Ze.from(t.headers),t}),(function(t){return Xe(t)||(mt(e),t&&t.response&&(t.response.data=Ge.call(e,e.transformResponse,t.response),t.response.headers=Ze.from(t.response.headers))),Promise.reject(t)}))}const yt=e=>e instanceof Ze?e.toJSON():e;function gt(e,t){t=t||{};const n={};function r(e,t,n){return ee.isPlainObject(e)&&ee.isPlainObject(t)?ee.merge.call({caseless:n},e,t):ee.isPlainObject(t)?ee.merge({},t):ee.isArray(t)?t.slice():t}function o(e,t,n){return ee.isUndefined(t)?ee.isUndefined(e)?void 0:r(void 0,e,n):r(e,t,n)}function i(e,t){if(!ee.isUndefined(t))return r(void 0,t)}function s(e,t){return ee.isUndefined(t)?ee.isUndefined(e)?void 0:r(void 0,e):r(void 0,t)}function a(n,o,i){return i in t?r(n,o):i in e?r(void 0,n):void 0}const c={url:i,method:i,data:i,baseURL:s,transformRequest:s,transformResponse:s,paramsSerializer:s,timeout:s,timeoutMessage:s,withCredentials:s,adapter:s,responseType:s,xsrfCookieName:s,xsrfHeaderName:s,onUploadProgress:s,onDownloadProgress:s,decompress:s,maxContentLength:s,maxBodyLength:s,beforeRedirect:s,transport:s,httpAgent:s,httpsAgent:s,cancelToken:s,socketPath:s,responseEncoding:s,validateStatus:a,headers:(e,t)=>o(yt(e),yt(t),!0)};return ee.forEach(Object.keys(e).concat(Object.keys(t)),(function(r){const i=c[r]||o,s=i(e[r],t[r],r);ee.isUndefined(s)&&i!==a||(n[r]=s)})),n}const wt="1.2.3",Et={};["object","boolean","number","function","string","symbol"].forEach(((e,t)=>{Et[e]=function(n){return typeof n===e||"a"+(t<1?"n ":" ")+e}}));const vt={};function Ot(e,t,n){if("object"!==typeof e)throw new oe("options must be an object",oe.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let o=r.length;while(o-- >0){const i=r[o],s=t[i];if(s){const t=e[i],n=void 0===t||s(t,i,e);if(!0!==n)throw new oe("option "+i+" must be "+n,oe.ERR_BAD_OPTION_VALUE)}else if(!0!==n)throw new oe("Unknown option "+i,oe.ERR_BAD_OPTION)}}Et.transitional=function(e,t,n){function r(e,t){return"[Axios v"+wt+"] Transitional option '"+e+"'"+t+(n?". "+n:"")}return(n,o,i)=>{if(!1===e)throw new oe(r(o," has been removed"+(t?" in "+t:"")),oe.ERR_DEPRECATED);return t&&!vt[o]&&(vt[o]=!0,console.warn(r(o," has been deprecated since v"+t+" and will be removed in the near future"))),!e||e(n,o,i)}};var Rt={assertOptions:Ot,validators:Et};const St=Rt.validators;class At{constructor(e){this.defaults=e,this.interceptors={request:new Oe,response:new Oe}}request(e,t){"string"===typeof e?(t=t||{},t.url=e):t=e||{},t=gt(this.defaults,t);const{transitional:n,paramsSerializer:r,headers:o}=t;let i;void 0!==n&&Rt.assertOptions(n,{silentJSONParsing:St.transitional(St.boolean),forcedJSONParsing:St.transitional(St.boolean),clarifyTimeoutError:St.transitional(St.boolean)},!1),void 0!==r&&Rt.assertOptions(r,{encode:St.function,serialize:St.function},!0),t.method=(t.method||this.defaults.method||"get").toLowerCase(),i=o&&ee.merge(o.common,o[t.method]),i&&ee.forEach(["delete","get","head","post","put","patch","common"],(e=>{delete o[e]})),t.headers=Ze.concat(i,o);const s=[];let a=!0;this.interceptors.request.forEach((function(e){"function"===typeof e.runWhen&&!1===e.runWhen(t)||(a=a&&e.synchronous,s.unshift(e.fulfilled,e.rejected))}));const c=[];let u;this.interceptors.response.forEach((function(e){c.push(e.fulfilled,e.rejected)}));let l,f=0;if(!a){const e=[bt.bind(this),void 0];e.unshift.apply(e,s),e.push.apply(e,c),l=e.length,u=Promise.resolve(t);while(f<l)u=u.then(e[f++],e[f++]);return u}l=s.length;let d=t;f=0;while(f<l){const e=s[f++],t=s[f++];try{d=e(d)}catch(h){t.call(this,h);break}}try{u=bt.call(this,d)}catch(h){return Promise.reject(h)}f=0,l=c.length;while(f<l)u=u.then(c[f++],c[f++]);return u}getUri(e){e=gt(this.defaults,e);const t=it(e.baseURL,e.url);return Ee(t,e.params,e.paramsSerializer)}}ee.forEach(["delete","get","head","options"],(function(e){At.prototype[e]=function(t,n){return this.request(gt(n||{},{method:e,url:t,data:(n||{}).data}))}})),ee.forEach(["post","put","patch"],(function(e){function t(t){return function(n,r,o){return this.request(gt(o||{},{method:e,headers:t?{"Content-Type":"multipart/form-data"}:{},url:n,data:r}))}}At.prototype[e]=t(),At.prototype[e+"Form"]=t(!0)}));var Tt=At;class xt{constructor(e){if("function"!==typeof e)throw new TypeError("executor must be a function.");let t;this.promise=new Promise((function(e){t=e}));const n=this;this.promise.then((e=>{if(!n._listeners)return;let t=n._listeners.length;while(t-- >0)n._listeners[t](e);n._listeners=null})),this.promise.then=e=>{let t;const r=new Promise((e=>{n.subscribe(e),t=e})).then(e);return r.cancel=function(){n.unsubscribe(t)},r},e((function(e,r,o){n.reason||(n.reason=new Ye(e,r,o),t(n.reason))}))}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){this.reason?e(this.reason):this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const t=this._listeners.indexOf(e);-1!==t&&this._listeners.splice(t,1)}static source(){let e;const t=new xt((function(t){e=t}));return{token:t,cancel:e}}}var _t=xt;function jt(e){return function(t){return e.apply(null,t)}}function Ct(e){return ee.isObject(e)&&!0===e.isAxiosError}const Nt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Nt).forEach((([e,t])=>{Nt[t]=e}));var Pt=Nt;function Ut(e){const t=new Tt(e),n=i(Tt.prototype.request,t);return ee.extend(n,Tt.prototype,t,{allOwnKeys:!0}),ee.extend(n,t,null,{allOwnKeys:!0}),n.create=function(t){return Ut(gt(e,t))},n}const Lt=Ut(Be);Lt.Axios=Tt,Lt.CanceledError=Ye,Lt.CancelToken=_t,Lt.isCancel=Xe,Lt.VERSION=wt,Lt.toFormData=pe,Lt.AxiosError=oe,Lt.Cancel=Lt.CanceledError,Lt.all=function(e){return Promise.all(e)},Lt.spread=jt,Lt.isAxiosError=Ct,Lt.mergeConfig=gt,Lt.AxiosHeaders=Ze,Lt.formToJSON=e=>Ue(ee.isHTMLForm(e)?new FormData(e):e),Lt.HttpStatusCode=Pt,Lt.default=Lt;var Ft=Lt;const kt=Ft.create({baseURL:"http://api-toutiao-web.itheima.net",timeout:7e3});kt.interceptors.request.use((e=>e),(e=>Promise.reject(e))),kt.interceptors.response.use((e=>e.data),(e=>Promise.reject(e)));var Bt=kt;const Dt=e=>Bt({method:"POST",url:"/app/v1_0/authorizations",data:e});var qt={name:"Login",data(){return{user:{mobile:"13911111111",code:"246810"},formRules:{mobile:[{required:!0,message:"请输入手机号"},{pattern:/^1[3456789]\d{9}$/,message:"手机号格式不正确"}],code:[{required:!0,message:"请输入验证码"},{pattern:/^\d{6}$/,message:"验证码格式不正确"}]}}},methods:{async onLogin(){this.$toast.loading({message:"加载中...",forbidClick:!0,duration:0});try{const{data:e}=await Dt(this.user);this.$toast.success("登录成功")}catch(e){this.$toast.fail("登录失败,手机号或验证码错误")}}}},zt=qt,Mt=n(1001),It=(0,Mt.Z)(zt,r,o,!1,null,"2ba68b50",null),Ht=It.exports},1835:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("div",[e._v(" 我的 ")])},o=[],i={},s=i,a=n(1001),c=(0,a.Z)(s,r,o,!1,null,"6abdc82b",null),u=c.exports},8754:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("div",[e._v(" qa ")])},o=[],i={},s=i,a=n(1001),c=(0,a.Z)(s,r,o,!1,null,"e86104ac",null),u=c.exports},2649:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return u}});var r=function(){var e=this,t=e._self._c;return t("div",[e._v(" 视频 ")])},o=[],i={},s=i,a=n(1001),c=(0,a.Z)(s,r,o,!1,null,"27307f88",null),u=c.exports},6230:function(e){e.exports="object"==typeof self?self.FormData:window.FormData}}]);
//# sourceMappingURL=login_home_welcome.bf34795a.js.map