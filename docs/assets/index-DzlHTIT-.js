!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials="use-credentials"===e.crossOrigin?"include":"anonymous"===e.crossOrigin?"omit":"same-origin",t}(e);fetch(e.href,t)}}();let e=null,t=0;const n=new Set;function a(a){let o=a;const i=new Set;function r(){if(0===arguments.length)return e&&(i.add(e),e.t.add(i)),o;const a="function"==typeof arguments[0]?arguments[0](o):arguments[0];if(Object.is(a,o))return o;if(o=a,t>0)for(const e of i)n.add(e);else for(const e of[...i])e.o();return o}return r.peek=()=>o,r.toString=()=>String(o),r[Symbol.toPrimitive]=()=>o,r}function o(e){const t=a(void 0);i(()=>t(e()));const n=()=>t();return n.peek=t.peek,n}function i(t){const n={i:t,t:new Set,l:!1,o(){if(n.l)return;for(const e of n.t)e.delete(n);n.t.clear();const a=e;e=n;try{t()}finally{e=a}}};return n.o(),()=>{n.l=!0;for(const e of n.t)e.delete(n);n.t.clear()}}function r(e){t++;try{return e()}finally{if(t--,0===t){const e=[...n];n.clear();for(const t of e)t.o()}}}function s(t){const n=e;e=null;try{return t()}finally{e=n}}const l=Symbol("reactive"),d=Symbol("raw"),c=new WeakMap,p=new Set([l,d,Symbol.toPrimitive,Symbol.toStringTag,Symbol.iterator,Symbol.asyncIterator,Symbol.isConcatSpreadable,"__proto__","constructor","prototype","toJSON"]),u=new Set(["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"]),m=new Set(["indexOf","lastIndexOf","includes"]);function h(e){return null==e||"object"!=typeof e||e instanceof Date||e instanceof RegExp||e instanceof Error||e instanceof Node||e instanceof Map||e instanceof Set?e:g(e)}function g(e){if(null==e||"object"!=typeof e)return e;if(e[l])return e;if(c.has(e))return c.get(e);const t=new Map;function n(n){return t.has(n)||t.set(n,a(h(e[n]))),t.get(n)}const o=new Proxy(e,{get(e,a,o){if(a===l)return!0;if(a===d)return e;if("symbol"==typeof a&&p.has(a))return Reflect.get(e,a,o);if(p.has(a))return Reflect.get(e,a,o);if(Array.isArray(e)&&"string"==typeof a){if(u.has(a))return(...n)=>{let o;return r(()=>{const i=n.map(e=>e&&e[d]?e[d]:e);o=Array.prototype[a].apply(e,i),function(e,t){for(let n=0;n<e.length;n++){const a=String(n);t.has(a)&&t.get(a)(h(e[n]))}t.has("length")&&t.get("length")(e.length)}(e,t)}),o};if(m.has(a))return(...t)=>(n("length")(),Array.prototype[a].apply(e,[t[0]&&t[0][d]?t[0][d]:t[0],...t.slice(1)]))}return n(a)()},set(e,n,a){const o=a&&a[d]?a[d]:a;return e[n]=o,t.has(n)&&t.get(n)(h(o)),Array.isArray(e)&&t.has("length")&&t.get("length")(e.length),!0},deleteProperty:(e,n)=>(delete e[n],t.has(n)&&(t.get(n)(void 0),t.delete(n)),!0),has:(e,t)=>t===l||t===d||("string"==typeof t&&n(t)(),t in e),ownKeys:e=>(Array.isArray(e)&&n("length")(),Reflect.ownKeys(e)),getPrototypeOf:e=>Reflect.getPrototypeOf(e),getOwnPropertyDescriptor:(e,t)=>Reflect.getOwnPropertyDescriptor(e,t)});return c.set(e,o),o}function v(e){return null!=e&&!0===e[l]}function f(e){if(null==e||"object"!=typeof e)return e;if(v(e)){const t=e[d];if(Array.isArray(t)){const t=e.length,n=[];for(let a=0;a<t;a++)n.push(f(e[a]));return n}const n={};for(const a of Object.keys(t))n[a]=f(e[a]);return n}if(Array.isArray(e))return e.map(f);const t={};for(const n of Object.keys(e))t[n]=f(e[n]);return t}let b=0;function y(e,...t){const n=b++;let a="";const o=[];for(let p=0;p<e.length;p++)if(a+=e[p],p<t.length)if(k(a)){const e=a.match(/(\S+)\s*=\s*["']?$/);if(e){const t=e[1],i=`data-v-${n}-${p}`;a=a.slice(0,-e[0].length),a+=`${i}="" `,o.push({index:p,attrName:t,elemMarker:i})}else a+=`v${n}_${p}`}else a+=`\x3c!--v${n}-${p}--\x3e`;const i=document.createElement("template");i.innerHTML=a;const r=i.content,s=[];for(const{index:p,attrName:u,elemMarker:m}of o){const e=r.querySelector(`[${m}]`);e&&(e.removeAttribute(m),x(e,u,t[p],s))}const l=document.createTreeWalker(r,NodeFilter.SHOW_COMMENT),d=[];for(;l.nextNode();){const e=l.currentNode;e.data.startsWith(`v${n}-`)&&d.push({node:e,index:parseInt(e.data.slice(`v${n}-`.length))})}for(const{node:p,index:u}of d)w(p,t[u],s);r.p=()=>{for(const e of s)e();s.length=0};const c=[...r.childNodes];return c.length>0&&(c[0].u||(c[0].u=[])).push(r.p),1===r.childNodes.length?r.childNodes[0]:r}function k(e){for(let t=e.length-1;t>=0;t--){if(">"===e[t])return!1;if("<"===e[t])return!0}return!1}function x(e,t,n,a){t.startsWith("on")?e.addEventListener(t.slice(2).toLowerCase(),"function"==typeof n?n:()=>{}):"ref"!==t||"function"!=typeof n?"function"!=typeof n?$(e,t,n):a.push(i(()=>$(e,t,n()))):n(e)}function $(e,t,n){"class"===t||"className"===t?e.className=n??"":"style"===t&&"object"==typeof n?Object.assign(e.style,n):"style"===t&&"string"==typeof n?e.setAttribute("style",n):"checked"===t?e.checked=!!n:"value"===t&&"value"in e?e.value=n??"":"disabled"===t||"readonly"===t||"hidden"===t?n?e.setAttribute(t,""):e.removeAttribute(t):!1===n||null==n?e.removeAttribute(t):e.setAttribute(t,!0===n?"":String(n))}function w(e,t,n){if(null!=t&&t.m)n.push(function(e,{listFn:t,keyFn:n,renderFn:o}){const r=document.createComment("/each");e.parentNode?.insertBefore(r,e.nextSibling);const l=new Map,d=i(()=>{const i=t(),r=Array.isArray(i)?i:[],d=e.parentNode;if(!d)return;const c=r.map(n),p=new Set(c);for(const[e,t]of l)if(!p.has(e)){for(const e of t.disposers)e();for(const e of t.nodes)F(e),e.remove();l.delete(e)}let u=e.nextSibling;for(let e=0;e<r.length;e++){const t=c[e];let n=l.get(t);if(n){if(n.itemSig(r[e]),n.indexSig(e),n.nodes.length>0&&n.nodes[0]!==u)for(const e of n.nodes)d.insertBefore(e,u);u=n.nodes.length>0?n.nodes[n.nodes.length-1].nextSibling:u}else{const i=a(r[e]),c=a(e),p=[];let m;const h=s(()=>(m=o(i,c),m?.p||null)),g=m instanceof DocumentFragment?[...m.childNodes]:[m instanceof Node?m:document.createTextNode(String(m))];h&&p.push(h),n={nodes:g,disposers:p,itemSig:i,indexSig:c},l.set(t,n);const v=document.createDocumentFragment();for(const e of g)v.append(e);d.insertBefore(v,u),u=n.nodes[n.nodes.length-1]?.nextSibling??u}}});return()=>{d();for(const[,e]of l){for(const t of e.disposers)t();for(const t of e.nodes)F(t),t.remove()}l.clear(),r.parentNode&&r.remove()}}(e,t));else{if("function"==typeof t){let a=null;return void n.push(i(()=>{a=S(e,a,t())}))}S(e,null,t)}}function S(e,t,n){const a=e.parentNode;if(!a)return t;if(t){const e=Array.isArray(t)?t:[t];for(const t of e)t.parentNode&&(F(t),t.remove())}if(null==n||!1===n||!0===n)return null;if(Array.isArray(n)){const t=document.createDocumentFragment(),o=[];for(const e of n.flat(1/0)){const n=A(e);n&&(t.append(n),o.push(n))}return a.insertBefore(t,e),o}const o=A(n);return o&&a.insertBefore(o,e),o}function A(e){return null==e||!1===e||!0===e?null:e instanceof Node?e:document.createTextNode(String(e))}function F(e){if(e.u){for(const t of e.u)t();e.u=null}if(e.childNodes)for(const t of e.childNodes)F(t)}function C(e,t,n){return{m:!0,listFn:e,keyFn:t,renderFn:n}}let T=0;const R=new CSSStyleSheet;function D(){return"v-"+(T++).toString(36)}function P(e){for(const n of e){const e=n.trim();if(e)try{R.insertRule(e,R.cssRules.length)}catch(t){}}}function E(e,...t){let n="";for(let o=0;o<e.length;o++)n+=e[o],o<t.length&&(n+=t[o]);const a=D();return P(function(e,t){const n=function(e){const t={declarations:"",children:[],selector:""},n=[t];let a="",o=!1,i="";for(let s=0;s<e.length;s++){const t=e[s];if(o)a+=t,t===i&&"\\"!==e[s-1]&&(o=!1);else if('"'!==t&&"'"!==t)if("{"===t){const e=a.trim();a="";const t=e.lastIndexOf(";");let o;if(-1!==t){const a=e.slice(0,t+1).trim();if(a){const e=n[n.length-1];e.declarations+=(e.declarations?" ":"")+a}o=e.slice(t+1).trim()}else o=e;const i={selector:o,declarations:"",children:[]};n[n.length-1].children.push(i),n.push(i)}else if("}"===t){const e=a.trim();if(e){const t=n[n.length-1];t.declarations+=(t.declarations?" ":"")+e}a="",n.pop()}else a+=t;else o=!0,i=t,a+=t}const r=a.trim();return r&&(t.declarations+=(t.declarations?" ":"")+r),t}(e),a=[];return I(n,t,a),a}(n,`.${a}`)),a}function O(e,...t){let n="";for(let o=0;o<e.length;o++)n+=e[o],o<t.length&&(n+=t[o]);const a=D();return P([`@keyframes ${a} { ${n} }`]),a}function _(e,...t){let n="";for(let i=0;i<e.length;i++)n+=e[i],i<t.length&&(n+=t[i]);const a=n.split("\n"),o=[];for(const i of a){const e=i.trim();if(e.startsWith("@import ")){const t=e.match(/@import\s+url\(\s*['"]?([^'")\s]+)['"]?\s*\)/)||e.match(/@import\s+['"]([^'"]+)['"]/);if(t){const e=document.createElement("link");e.rel="stylesheet",e.href=t[1],document.head.appendChild(e)}}else o.push(i)}P(function(e){const t=[];let n=0,a="",o=!1,i="";for(let r=0;r<e.length;r++){const s=e[r];o?(a+=s,s===i&&"\\"!==e[r-1]&&(o=!1)):'"'!==s&&"'"!==s?"{"===s?(n++,a+=s):"}"===s?(n--,a+=s,0===n&&(a.trim()&&t.push(a.trim()),a="")):a+=s:(o=!0,i=s,a+=s)}return t}(o.join("\n")))}function z(...e){return e.filter(Boolean).join(" ")}function I(e,t,n){e.declarations&&n.push(`${t} { ${e.declarations} }`);for(const a of e.children){const e=a.selector;if(e)if(/^@(media|supports|container|layer)\b/.test(e)){const o=[];a.declarations&&o.push(`${t} { ${a.declarations} }`);for(const e of a.children)I(e,t,o);o.length&&n.push(`${e} { ${o.join(" ")} }`)}else if(e.includes("&")){const o=e.split(",").map(e=>e.trim().replace(/&/g,t)).join(", ");a.declarations&&n.push(`${o} { ${a.declarations} }`);for(const e of a.children)I(e,o,n)}else{const o=`${t} ${e}`;a.declarations&&n.push(`${o} { ${a.declarations} }`);for(const e of a.children)I(e,o,n)}else{a.declarations&&n.push(`${t} { ${a.declarations} }`);for(const e of a.children)I(e,t,n)}}}document.adoptedStyleSheets=[...document.adoptedStyleSheets,R];const M=a(window.location.hash.slice(1)||"/"),L=a({});function j(e){window.location.hash=e}function N(e,t){const n=document.createElement("a");return n.href="#"+e,n.textContent=t,i(()=>{("/"===e?"/"===M():M().startsWith(e))?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")}),n.addEventListener("click",t=>{t.preventDefault(),j(e)}),n}window.addEventListener("hashchange",()=>{M(window.location.hash.slice(1)||"/")});const B="vanillacss-theme",H=E`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--vk-color-accent);
  font-family: var(--vk-font-mono);
`,G=E`
  margin-bottom: 2rem;
`,U=E`
  border-top: none;
  border-radius: 0 0 var(--vk-radius-md) var(--vk-radius-md);
  max-height: 400px;
  overflow-y: auto;
`,V=E`
  margin-bottom: 20px;
  & .group-label {
    font-family: var(--vk-font-mono);
    font-size: 0.68rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: var(--vk-color-text-muted);
    margin-bottom: 6px;
    padding-left: 8px;
  }
`,q=E`
  display: block;
  font-size: 0.82rem;
  color: var(--vk-color-text-muted);
  text-decoration: none;
  padding: 4px 8px;
  border-radius: 6px;
  border-left: 2px solid transparent;
  transition: all 0.12s ease;
  cursor: pointer;
  &:hover {
    color: var(--vk-color-text);
    background: var(--vk-color-surface);
  }
  &[aria-current="page"] {
    color: var(--vk-color-accent);
    border-left-color: var(--vk-color-accent);
    background: var(--vk-color-accent-dim);
    font-weight: 600;
  }
`,W=window;var J=function(){return J=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},J.apply(this,arguments)},Y="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Z(e){return e&&e.v&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var K,X={exports:{}},Q=(K||(K=1,function(e){var t=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,a={},o={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof i?new i(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.k||Object.defineProperty(e,"k",{value:++n}),e.k},clone:function e(t,n){var a,i;switch(n=n||{},o.util.type(t)){case"Object":if(i=o.util.objId(t),n[i])return n[i];for(var r in n[i]=a={},t)t.hasOwnProperty(r)&&(a[r]=e(t[r],n));return a;case"Array":return i=o.util.objId(t),n[i]?n[i]:(n[i]=a=[],t.forEach(function(t,o){a[o]=e(t,n)}),a);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var a="no-"+t;e;){var o=e.classList;if(o.contains(t))return!0;if(o.contains(a))return!1;e=e.parentElement}return!!n}},languages:{plain:a,plaintext:a,text:a,txt:a,extend:function(e,t){var n=o.util.clone(o.languages[e]);for(var a in t)n[a]=t[a];return n},insertBefore:function(e,t,n,a){var i=(a=a||o.languages)[e],r={};for(var s in i)if(i.hasOwnProperty(s)){if(s==t)for(var l in n)n.hasOwnProperty(l)&&(r[l]=n[l]);n.hasOwnProperty(s)||(r[s]=i[s])}var d=a[e];return a[e]=r,o.languages.DFS(o.languages,function(t,n){n===d&&t!=e&&(this[t]=r)}),r},DFS:function e(t,n,a,i){i=i||{};var r=o.util.objId;for(var s in t)if(t.hasOwnProperty(s)){n.call(t,s,t[s],a||s);var l=t[s],d=o.util.type(l);"Object"!==d||i[r(l)]?"Array"!==d||i[r(l)]||(i[r(l)]=!0,e(l,n,s,i)):(i[r(l)]=!0,e(l,n,null,i))}}},plugins:{},highlightAll:function(e,t){o.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var a={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",a),a.elements=Array.prototype.slice.apply(a.container.querySelectorAll(a.selector)),o.hooks.run("before-all-elements-highlight",a);for(var i,r=0;i=a.elements[r++];)o.highlightElement(i,!0===t,a.callback)},highlightElement:function(t,n,a){var i=o.util.getLanguage(t),r=o.languages[i];o.util.setLanguage(t,i);var s=t.parentElement;s&&"pre"===s.nodeName.toLowerCase()&&o.util.setLanguage(s,i);var l={element:t,language:i,grammar:r,code:t.textContent};function d(e){l.highlightedCode=e,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),a&&a.call(l.element)}if(o.hooks.run("before-sanity-check",l),(s=l.element.parentElement)&&"pre"===s.nodeName.toLowerCase()&&!s.hasAttribute("tabindex")&&s.setAttribute("tabindex","0"),!l.code)return o.hooks.run("complete",l),void(a&&a.call(l.element));if(o.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var c=new Worker(o.filename);c.onmessage=function(e){d(e.data)},c.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else d(o.highlight(l.code,l.grammar,l.language));else d(o.util.encode(l.code))},highlight:function(e,t,n){var a={code:e,grammar:t,language:n};if(o.hooks.run("before-tokenize",a),!a.grammar)throw new Error('The language "'+a.language+'" has no grammar.');return a.tokens=o.tokenize(a.code,a.grammar),o.hooks.run("after-tokenize",a),i.stringify(o.util.encode(a.tokens),a.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var a in n)t[a]=n[a];delete t.rest}var o=new l;return d(o,o.head,e),s(e,o,t,o.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(o)},hooks:{all:{},add:function(e,t){var n=o.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=o.hooks.all[e];if(n&&n.length)for(var a,i=0;a=n[i++];)a(t)}},Token:i};function i(e,t,n,a){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length}function r(e,t,n,a){e.lastIndex=t;var o=e.exec(n);if(o&&a&&o[1]){var i=o[1].length;o.index+=i,o[0]=o[0].slice(i)}return o}function s(e,t,n,a,l,p){for(var u in n)if(n.hasOwnProperty(u)&&n[u]){var m=n[u];m=Array.isArray(m)?m:[m];for(var h=0;h<m.length;++h){if(p&&p.cause==u+","+h)return;var g=m[h],v=g.inside,f=!!g.lookbehind,b=!!g.greedy,y=g.alias;if(b&&!g.pattern.global){var k=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,k+"g")}for(var x=g.pattern||g,$=a.next,w=l;$!==t.tail&&!(p&&w>=p.reach);w+=$.value.length,$=$.next){var S=$.value;if(t.length>e.length)return;if(!(S instanceof i)){var A,F=1;if(b){if(!(A=r(x,w,e,f))||A.index>=e.length)break;var C=A.index,T=A.index+A[0].length,R=w;for(R+=$.value.length;C>=R;)R+=($=$.next).value.length;if(w=R-=$.value.length,$.value instanceof i)continue;for(var D=$;D!==t.tail&&(R<T||"string"==typeof D.value);D=D.next)F++,R+=D.value.length;F--,S=e.slice(w,R),A.index-=w}else if(!(A=r(x,0,S,f)))continue;var P=A[0],E=S.slice(0,C=A.index),O=S.slice(C+P.length),_=w+S.length;p&&_>p.reach&&(p.reach=_);var z=$.prev;if(E&&(z=d(t,z,E),w+=E.length),c(t,z,F),$=d(t,z,new i(u,v?o.tokenize(P,v):P,y,P)),O&&d(t,$,O),F>1){var I={cause:u+","+h,reach:_};s(e,t,n,$.prev,w,I),p&&I.reach>p.reach&&(p.reach=I.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function d(e,t,n){var a=t.next,o={value:n,prev:t,next:a};return t.next=o,a.prev=o,e.length++,o}function c(e,t,n){for(var a=t.next,o=0;o<n&&a!==e.tail;o++)a=a.next;t.next=a,a.prev=t,e.length-=o}if(e.Prism=o,i.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var a="";return t.forEach(function(t){a+=e(t,n)}),a}var i={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},r=t.alias;r&&(Array.isArray(r)?Array.prototype.push.apply(i.classes,r):i.classes.push(r)),o.hooks.run("wrap",i);var s="";for(var l in i.attributes)s+=" "+l+'="'+(i.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+i.tag+' class="'+i.classes.join(" ")+'"'+s+">"+i.content+"</"+i.tag+">"},!e.document)return e.addEventListener?(o.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),a=n.language,i=n.immediateClose;e.postMessage(o.highlight(n.code,o.languages[a],a)),i&&e.close()},!1),o):o;var p=o.util.currentScript();function u(){o.manual||o.highlightAll()}if(p&&(o.filename=p.src,p.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var m=document.readyState;"loading"===m||"interactive"===m&&p&&p.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==Y&&(Y.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var a={};a["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},a.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:a}};o["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var i={};i[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:o},t.languages.insertBefore("markup","cdata",i)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(e,n){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:t.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(void 0!==t&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",a="loading",o="loaded",i="pre[data-src]:not(["+n+'="'+o+'"]):not(['+n+'="'+a+'"])';t.hooks.add("before-highlightall",function(e){e.selector+=", "+i}),t.hooks.add("before-sanity-check",function(r){var s=r.element;if(s.matches(i)){r.code="",s.setAttribute(n,a);var l=s.appendChild(document.createElement("CODE"));l.textContent="Loading…";var d=s.getAttribute("data-src"),c=r.language;if("none"===c){var p=(/\.(\w+)$/.exec(d)||[,"none"])[1];c=e[p]||p}t.util.setLanguage(l,c),t.util.setLanguage(s,c);var u=t.plugins.autoloader;u&&u.loadLanguages(c),function(e){var a=new XMLHttpRequest;a.open("GET",e,!0),a.onreadystatechange=function(){var e;4==a.readyState&&(a.status<400&&a.responseText?function(e){s.setAttribute(n,o);var a=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var n=Number(t[1]),a=t[3];return t[2]?a?[n,Number(a)]:[n,void 0]:[n,n]}}(s.getAttribute("data-range"));if(a){var i=e.split(/\r\n?|\n/g),r=a[0],d=null==a[1]?i.length:a[1];r<0&&(r+=i.length),r=Math.max(0,Math.min(r-1,i.length)),d<0&&(d+=i.length),d=Math.max(0,Math.min(d,i.length)),e=i.slice(r,d).join("\n"),s.hasAttribute("data-start")||s.setAttribute("data-start",String(r+1))}l.textContent=e,t.highlightElement(l)}(a.responseText):(e=a.status>=400?"✖ Error "+a.status+" while fetching file: "+a.statusText:"✖ Error: File does not exist or is empty",s.setAttribute(n,"failed"),l.textContent=e))},a.send(null)}(d)}}),t.plugins.fileHighlight={highlight:function(e){for(var n,a=(e||document).querySelectorAll(i),o=0;n=a[o++];)t.highlightElement(n)}};var r=!1;t.fileHighlight=function(){r||(r=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}(X)),X.exports);const ee=Z(Q),te=E`
  margin: 8px 0 24px;
`;_`
  :root {
    --editor-bg: #111118;
    --editor-text: #d4d4d8;
    --editor-line-nr: #4a4a5a;
    --editor-gutter: rgba(255,255,255,0.04);
  }
  [data-theme="light"] {
    --editor-bg: #f5f5f8;
    --editor-text: #2a2a3e;
    --editor-line-nr: #a0a0b0;
    --editor-gutter: rgba(0,0,0,0.04);
  }
`,_`
  @media (prefers-color-scheme: light) {
    :root:not([data-theme]) {
      --editor-bg: #f5f5f8;
      --editor-text: #2a2a3e;
      --editor-line-nr: #a0a0b0;
      --editor-gutter: rgba(0,0,0,0.04);
    }
  }
`,_`
  /* CodeJar editor overrides */
  .codejar-wrap {
    border-radius: var(--vk-radius-md) var(--vk-radius-md) 0 0;
    border: 1px solid var(--vk-color-border);
    background: var(--editor-bg);
  }
  .codejar-wrap:focus-within {
    border-color: var(--vk-color-accent);
  }
  .codejar-linenumbers-inner-wrap {
    background: var(--editor-bg) !important;
  }
  .codejar-linenumbers {
    background-color: var(--editor-gutter) !important;
  }
  .codejar-linenumber {
    color: var(--editor-line-nr) !important;
  }
`;const ne=E`
  display: block;
  width: 100%;
  min-height: 60px;
  font-family: var(--vk-font-mono);
  font-size: 0.82rem;
  line-height: 1.6;
  background: var(--editor-bg);
  color: var(--editor-text);
  padding: 16px;
  tab-size: 2;
  white-space: pre;
  overflow-x: auto;
  outline: none;
  box-sizing: border-box;
  border: none;
  border-radius: var(--vk-radius-md) var(--vk-radius-md) 0 0;
`,ae=E`
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-top: none;
  border-radius: 0 0 var(--vk-radius-md) var(--vk-radius-md);
  padding: 20px;
`,oe=E`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,ie=E`
  font-family: var(--vk-font-mono);
  font-size: 0.68rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--vk-color-accent);
  display: flex;
  align-items: center;
  gap: 6px;
  &::before {
    content: "▶";
    font-size: 0.55rem;
  }
`,re=E`
  font-family: var(--vk-font-mono);
  font-size: 0.68rem;
  background: none;
  border: none;
  color: var(--vk-color-text-muted);
  cursor: pointer;
  padding: 2px 6px;
  &:hover {
    color: var(--vk-color-accent);
  }
`,se=E`
  color: #e45;
  font-family: var(--vk-font-mono);
  font-size: 0.8rem;
  white-space: pre-wrap;
  margin: 0;
`,le=["signal","computed","effect","batch","untrack","reactive","toRaw","isReactive","snapshot","html","each","css","keyframes","globalCss","cx"],de=[a,o,i,r,s,g,function(e){return e&&e[d]?e[d]:e},v,f,y,C,E,O,_,z];function ce({source:e,label:t="Live output"}){const n=e.trim(),o=a(""),r=a(!1),s=document.createElement("div");let l=[];function d(e){l.forEach(e=>e()),l=[],s.innerHTML="",o("");const t=e.replace(/^import\s+.*$/gm,"").trim();if(t)try{const e=[],n=(...t)=>{for(const n of t)e.push("string"==typeof n?document.createTextNode(n):n)},a=new Proxy(document.body,{get:(t,a)=>"append"===a?n:"appendChild"===a?t=>(e.push(t),t):Reflect.get(t,a)}),o=new Proxy(document,{get(e,t){if("body"===t)return a;if("getElementById"===t)return()=>{const e=document.createElement("div");return e.append=n,e};const o=Reflect.get(e,t);return"function"==typeof o?o.bind(e):o}}),r=[],d=e=>{const t=i(e);return r.push(t),t};new Function(...le,"document",t)(...de.map((e,t)=>"effect"===le[t]?d:e),o),e.forEach(e=>s.append(e)),l=r}catch(n){o(n?.message??String(n))}}d(n);const c=document.createElement("div");c.className=`${ne} language-typescript`;const p=function(e,t){void 0===t&&(t={});var n,a=J({class:"codejar-linenumbers",wrapClass:"codejar-wrap",width:"35px",backgroundColor:"rgba(128, 128, 128, 0.15)",color:""},t);return function(e){var t;(t=e).innerHTML=ee.highlight(t.textContent||"",ee.languages.typescript,"typescript"),n||(n=function(e,t){var n=getComputedStyle(e),a=document.createElement("div");a.className=t.wrapClass,a.style.position="relative";var o=document.createElement("div");o.className="codejar-linenumbers-inner-wrap",o.style.background=n.background,o.style.marginTop=n.borderTopWidth,o.style.marginBottom=n.borderBottomWidth,o.style.marginLeft=n.borderLeftWidth,o.style.borderTopLeftRadius=n.borderTopLeftRadius,o.style.borderBottomLeftRadius=n.borderBottomLeftRadius;var i=document.createElement("div");i.className=t.class,o.appendChild(i),a.appendChild(o),i.style.width=t.width,i.style.overflow="hidden",i.style.backgroundColor=t.backgroundColor,i.style.fontFamily=n.fontFamily,i.style.fontSize=n.fontSize,i.style.lineHeight=n.lineHeight,i.style.paddingTop="calc("+n.paddingTop+")",i.style.paddingLeft=n.paddingLeft,i.style.borderTopLeftRadius=n.borderTopLeftRadius,i.style.borderBottomLeftRadius=n.borderBottomLeftRadius;var r=document.createElement("div");return r.setAttribute("class","codejar-linenumber"),r.style.color=t.color||n.color,r.style.setProperty("mix-blend-mode","unset"),i.appendChild(r),e.style.paddingLeft="calc("+t.width+" + "+i.style.paddingLeft+" + 5px)",e.style.whiteSpace="pre",e.parentNode.insertBefore(a,e),a.appendChild(e),r}(e,a),e.addEventListener("scroll",function(){return n.style.top="-"+e.scrollTop+"px"}));for(var o=(e.textContent||"").replace(/\n$/g,"").split("\n").length,i="",r=0;r<o;r++)i+=r+1+"\n";n.innerText=i}}(0,{color:"#4a4a5a",backgroundColor:"rgba(255,255,255,0.04)"});function u(){const e=c.$;e&&e.updateCode(n),r(!1),d(n)}return requestAnimationFrame(()=>{const e=function(e,t,n={}){const a={tab:"\t",indentOn:/[({\[]$/,moveToNewLine:/^[)}\]]/,spellcheck:!1,catchTab:!0,preserveIdent:!0,addClosing:!0,history:!0,window:W,autoclose:{open:"([{'\"",close:")]}'\""},...n},o=a.window,i=o.document,r=[],s=[];let l,d=-1,c=!1,p=()=>{};e.setAttribute("contenteditable","plaintext-only"),e.setAttribute("spellcheck",a.spellcheck?"true":"false"),e.style.outline="none",e.style.overflowWrap="break-word",e.style.overflowY="auto",e.style.whiteSpace="pre-wrap";const u=(e,n)=>{t(e,n)},m=o.navigator.userAgent.match(/Firefox\/([0-9]+)\./),h=m?parseInt(m[1]):0;let g=!1;("plaintext-only"!==e.contentEditable||h>=136)&&(g=!0),g&&e.setAttribute("contenteditable","true");const v=_(()=>{const t=x();u(e,t),$(t)},30);let f=!1;const b=e=>!D(e)&&!P(e)&&"Meta"!==e.key&&"Control"!==e.key&&"Alt"!==e.key&&!e.key.startsWith("Arrow"),y=_(e=>{b(e)&&(C(),f=!1)},300),k=(t,n)=>{r.push([t,n]),e.addEventListener(t,n)};function x(){const t=L(),n={start:0,end:0,dir:void 0};let{anchorNode:a,anchorOffset:o,focusNode:r,focusOffset:s}=t;if(!a||!r)throw"error1";if(a===e&&r===e)return n.start=o>0&&e.textContent?e.textContent.length:0,n.end=s>0&&e.textContent?e.textContent.length:0,n.dir=s>=o?"->":"<-",n;if(a.nodeType===Node.ELEMENT_NODE){const e=i.createTextNode("");a.insertBefore(e,a.childNodes[o]),a=e,o=0}if(r.nodeType===Node.ELEMENT_NODE){const e=i.createTextNode("");r.insertBefore(e,r.childNodes[s]),r=e,s=0}return T(e,e=>{if(e===a&&e===r)return n.start+=o,n.end+=s,n.dir=o<=s?"->":"<-","stop";if(e===a){if(n.start+=o,n.dir)return"stop";n.dir="->"}else if(e===r){if(n.end+=s,n.dir)return"stop";n.dir="<-"}e.nodeType===Node.TEXT_NODE&&("->"!=n.dir&&(n.start+=e.nodeValue.length),"<-"!=n.dir&&(n.end+=e.nodeValue.length))}),e.normalize(),n}function $(t){const n=L();let a,o,r=0,s=0;if(t.dir||(t.dir="->"),t.start<0&&(t.start=0),t.end<0&&(t.end=0),"<-"==t.dir){const{start:e,end:n}=t;t.start=n,t.end=e}let l=0;T(e,e=>{if(e.nodeType!==Node.TEXT_NODE)return;const n=(e.nodeValue||"").length;if(l+n>t.start&&(a||(a=e,r=t.start-l),l+n>t.end))return o=e,s=t.end-l,"stop";l+=n}),a||(a=e,r=e.childNodes.length),o||(o=e,s=e.childNodes.length),"<-"==t.dir&&([a,r,o,s]=[o,s,a,r]);{const e=w(a);if(e){const t=i.createTextNode("");e.parentNode?.insertBefore(t,e),a=t,r=0}const t=w(o);if(t){const e=i.createTextNode("");t.parentNode?.insertBefore(e,t),o=e,s=0}}n.setBaseAndExtent(a,r,o,s),e.normalize()}function w(t){for(;t&&t!==e;){if(t.nodeType===Node.ELEMENT_NODE){const e=t;if("false"==e.getAttribute("contenteditable"))return e}t=t.parentNode}}function S(){const t=L().getRangeAt(0),n=i.createRange();return n.selectNodeContents(e),n.setEnd(t.startContainer,t.startOffset),n.toString()}function A(){const t=L().getRangeAt(0),n=i.createRange();return n.selectNodeContents(e),n.setStart(t.endContainer,t.endOffset),n.toString()}function F(e){if(g&&"Enter"===e.key)if(M(e),e.stopPropagation(),""==A()){O("\n ");const e=x();e.start=--e.end,$(e)}else O("\n")}function C(){if(!c)return;const t=e.innerHTML,n=x(),a=s[d];a&&a.html===t&&a.pos.start===n.start&&a.pos.end===n.end||(d++,s[d]={html:t,pos:n},s.splice(d+1),d>300&&(d=300,s.splice(0,1)))}function T(e,t){const n=[];e.firstChild&&n.push(e.firstChild);let a=n.pop();for(;a&&"stop"!==t(a);)a.nextSibling&&n.push(a.nextSibling),a.firstChild&&n.push(a.firstChild),a=n.pop()}function R(e){return e.metaKey||e.ctrlKey}function D(e){return R(e)&&!e.shiftKey&&"Z"===E(e)}function P(e){return R(e)&&e.shiftKey&&"Z"===E(e)}function E(e){let t=e.key||e.keyCode||e.which;if(t)return("string"==typeof t?t:String.fromCharCode(t)).toUpperCase()}function O(e){e=e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),i.execCommand("insertHTML",!1,e)}function _(e,t){let n=0;return(...a)=>{clearTimeout(n),n=o.setTimeout(()=>e(...a),t)}}function z(e){let t=e.length-1;for(;t>=0&&"\n"!==e[t];)t--;t++;let n=t;for(;n<e.length&&/[ \t]/.test(e[n]);)n++;return[e.substring(t,n)||"",t,n]}function I(){return e.textContent||""}function M(e){e.preventDefault()}function L(){return e.getRootNode().getSelection()}return k("keydown",t=>{t.defaultPrevented||(l=I(),a.preserveIdent?function(e){if("Enter"===e.key){const t=S(),n=A();let[o]=z(t),i=o;if(a.indentOn.test(t)&&(i+=a.tab),i.length>0?(M(e),e.stopPropagation(),O("\n"+i)):F(e),i!==o&&a.moveToNewLine.test(n)){const e=x();O("\n"+o),$(e)}}}(t):F(t),a.catchTab&&function(e){if("Tab"===e.key)if(M(e),e.shiftKey){const e=S();let[t,n]=z(e);if(t.length>0){const e=x(),o=Math.min(a.tab.length,t.length);$({start:n,end:n+o}),i.execCommand("delete"),e.start-=o,e.end-=o,$(e)}}else O(a.tab)}(t),a.addClosing&&function(e){const t=a.autoclose.open,n=a.autoclose.close;if(t.includes(e.key)){M(e);const a=x(),o=a.start==a.end?"":L().toString();O(e.key+o+(n[t.indexOf(e.key)]??"")),a.start++,a.end++,$(a)}}(t),a.history&&(function(t){if(D(t)){M(t),d--;const n=s[d];n&&(e.innerHTML=n.html,$(n.pos)),d<0&&(d=0)}if(P(t)){M(t),d++;const n=s[d];n&&(e.innerHTML=n.html,$(n.pos)),d>=s.length&&d--}}(t),b(t)&&!f&&(C(),f=!0)),g&&!function(e){return R(e)&&"C"===E(e)}(t)&&$(x()))}),k("keyup",e=>{e.defaultPrevented||e.isComposing||(l!==I()&&v(),y(e),p(I()))}),k("focus",e=>{c=!0}),k("blur",e=>{c=!1}),k("paste",t=>{C(),function(t){if(t.defaultPrevented)return;M(t);const n=(t.originalEvent??t).clipboardData.getData("text/plain").replace(/\r\n?/g,"\n"),a=x();O(n),u(e),$({start:Math.min(a.start,a.end)+n.length,end:Math.min(a.start,a.end)+n.length,dir:"<-"})}(t),C(),p(I())}),k("cut",t=>{C(),function(t){const n=x(),a=L();(t.originalEvent??t).clipboardData.setData("text/plain",a.toString()),i.execCommand("delete"),u(e),$({start:Math.min(n.start,n.end),end:Math.min(n.start,n.end),dir:"<-"}),M(t)}(t),C(),p(I())}),{updateOptions(e){Object.assign(a,e)},updateCode(t,n=!0){e.textContent=t,u(e),n&&p(t)},onUpdate(e){p=e},toString:I,save:x,restore:$,recordHistory:C,destroy(){for(let[t,n]of r)e.removeEventListener(t,n)}}}(c,p,{tab:"  ",catchTab:!0,preserveIdent:!0,addClosing:!0});e.updateCode(n),e.onUpdate(e=>{r(e!==n),d(e)}),c.$=e}),y`<div class=${te}>
    ${c}
    <div class=${ae}>
      <div class=${oe}>
        <div class=${ie}>${t}</div>
        ${()=>r()?y`<button class=${re} onclick=${u}>
                ↺ reset
              </button>`:""}
      </div>
      ${()=>o()?y`<pre class=${se}>${o()}</pre>`:""}
      ${s}
    </div>
  </div>`}const pe='\nimport { signal, html } from "vanillakit";\n\nconst Counter = (props = { initial: 0 }) => {\n  const count = signal(props.initial);\n  return html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      Count: ${count}\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n    </div>\n  `\n};\n\ndocument.body.append(Counter({ initial: 10 }));\n',ue=a([{dd:"<7",dt:"kB"},{dd:"0",dt:"Deps"},{dd:"5",dt:"Modules"}]);var me,he,ge;function ve(e,t="typescript"){const n=e.trim(),a=ee.highlight(n,ee.languages[t]||ee.languages.typescript,t),o=document.createElement("pre");return o.className=U,o.innerHTML=a,o}Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var o={};o[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(Prism),function(e){var t,n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css.selector={pattern:e.languages.css.selector.pattern,lookbehind:!0,inside:t={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp("\\[(?:[^[\\]\"']|"+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},e.languages.css.atrule.inside["selector-function-argument"].inside=t,e.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var a={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};e.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:a,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:a,number:o})}(Prism),Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,me||(me=1,function(e){var t=e.languages.javascript["template-string"],n=t.pattern.source,a=t.inside.interpolation,o=a.inside["interpolation-punctuation"],i=a.pattern.source;function r(t,a){if(e.languages[t])return{pattern:RegExp("((?:"+a+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:t}}}}function s(e,t){return"___"+t.toUpperCase()+"_"+e+"___"}function l(t,n,a){var o={code:t,grammar:n,language:a};return e.hooks.run("before-tokenize",o),o.tokens=e.tokenize(o.code,o.grammar),e.hooks.run("after-tokenize",o),o.tokens}function d(t){var n={};n["interpolation-punctuation"]=o;var i=e.tokenize(t,n);if(3===i.length){var r=[1,1];r.push.apply(r,l(i[1],e.languages.javascript,"javascript")),i.splice.apply(i,r)}return new e.Token("interpolation",i,a.alias,t)}function c(t,n,a){var o=e.tokenize(t,{interpolation:{pattern:RegExp(i),lookbehind:!0}}),r=0,c={},p=l(o.map(function(e){if("string"==typeof e)return e;for(var n,o=e.content;-1!==t.indexOf(n=s(r++,a)););return c[n]=o,n}).join(""),n,a),u=Object.keys(c);return r=0,function e(t){for(var n=0;n<t.length;n++){if(r>=u.length)return;var a=t[n];if("string"==typeof a||"string"==typeof a.content){var o=u[r],i="string"==typeof a?a:a.content,s=i.indexOf(o);if(-1!==s){++r;var l=i.substring(0,s),p=d(c[o]),m=i.substring(s+o.length),h=[];if(l&&h.push(l),h.push(p),m){var g=[m];e(g),h.push.apply(h,g)}"string"==typeof a?(t.splice.apply(t,[n,1].concat(h)),n+=h.length-1):a.content=h}}else{var v=a.content;Array.isArray(v)?e(v):e([v])}}}(p),new e.Token(a,p,"language-"+a,t)}e.languages.javascript["template-string"]=[r("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),r("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),r("svg",/\bsvg/.source),r("markdown",/\b(?:markdown|md)/.source),r("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),r("sql",/\bsql/.source),t].filter(Boolean);var p={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function u(e){return"string"==typeof e?e:Array.isArray(e)?e.map(u).join(""):u(e.content)}e.hooks.add("after-tokenize",function(t){t.language in p&&function t(n){for(var a=0,o=n.length;a<o;a++){var i=n[a];if("string"!=typeof i){var r=i.content;if(Array.isArray(r))if("template-string"===i.type){var s=r[1];if(3===r.length&&"string"!=typeof s&&"embedded-code"===s.type){var l=u(s),d=s.alias,p=Array.isArray(d)?d[0]:d,m=e.languages[p];if(!m)continue;r[1]=c(l,m,p)}}else t(r);else"string"!=typeof r&&t([r])}}}(t.tokens)})}(Prism)),he||(he=1,function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(Prism)),function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},a={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:a},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:a},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:a.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:a.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],i=a.variable[1].inside,r=0;r<o.length;r++)i[o[r]]=e.languages.bash[o[r]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism),ge||(ge=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),_`
  .token.comment, .token.prolog, .token.doctype, .token.cdata {
    color: var(--code-comment, #6a6a7a);
  }
  .token.punctuation {
    color: var(--vk-color-text-muted);
  }
  .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {
    color: var(--vk-color-danger);
  }
  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
    color: var(--vk-color-success);
  }
  .token.operator, .token.entity, .token.url {
    color: var(--vk-color-accent);
  }
  .token.atrule, .token.attr-value, .token.keyword {
    color: var(--vk-color-info);
  }
  .token.function, .token.class-name {
    color: var(--vk-color-accent);
  }
  .token.regex, .token.important, .token.variable {
    color: var(--vk-color-accent);
  }
  .token.template-string .token.interpolation {
    color: var(--vk-color-accent);
  }
  .token.template-string .token.string {
    color: var(--vk-color-success);
  }
`;const fe=E`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: var(--vk-radius-md);
  margin-bottom: 8px;
  transition: all 0.15s ease;
  &:hover {
    border-color: var(--vk-color-text-muted);
  }
`,be=E`
  flex: 1;
  text-decoration: line-through;
  opacity: 0.45;
`,ye={high:"danger",medium:"primary",low:"success"};let ke=4;const xe=a([{id:1,text:"Build signal-based reactivity",done:!0,priority:"high"},{id:2,text:"Implement tagged template DOM engine",done:!0,priority:"high"},{id:3,text:"Add keyed list reconciliation",done:!1,priority:"medium"}]),$e=a("all"),we=o(()=>{const e=$e(),t=xe();return"active"===e?t.filter(e=>!e.done):"done"===e?t.filter(e=>e.done):t}),Se=o(()=>{const e=xe();return{total:e.length,done:e.filter(e=>e.done).length,active:e.filter(e=>!e.done).length}}),Ae=E`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-radius: 8px;
  margin-bottom: 6px;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;
  &:hover {
    border-color: var(--vk-color-accent);
  }
  .idx {
    font-family: var(--vk-font-mono);
    font-size: 0.75rem;
    color: var(--vk-color-text-muted);
    min-width: 24px;
  }
  .name {
    flex: 1;
    font-weight: 500;
  }
  .score {
    font-family: var(--vk-font-mono);
    font-size: 0.9rem;
  }
  input {
    width: 60px;
  }
`,Fe=E`
  font-family: var(--vk-font-mono);
  font-size: 0.72rem;
  background: var(--vk-color-surface-2);
  border: 1px solid var(--vk-color-border);
  border-radius: 8px;
  padding: 12px;
  max-height: 200px;
  overflow-y: auto;
  color: var(--vk-color-text-muted);
  line-height: 1.8;
`,Ce=a([]);function Te(e){Ce(t=>[`${performance.now().toFixed(1)}ms — ${e}`,...t.slice(0,19)])}let Re=1;const De=["Alice","Bob","Carol","Dan","Eve","Frank","Grace","Hank","Iris","Jack","Kara","Leo","Mia","Nico","Olga","Pete"];function Pe(){return{id:Re++,name:De[Math.floor(Math.random()*De.length)],score:Math.floor(100*Math.random())}}const Ee=a(Array.from({length:8},Pe));function Oe(e){const t=[...e];for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}function _e(e,t){return y`<li class=${Ae}>
    <span class="idx">${()=>t()}</span>
    <span class="name">${()=>e().name}</span>
    <span
      class="score"
      style=${()=>"color: "+(e().score>70?"var(--vk-color-success)":e().score>40?"var(--vk-color-accent)":"var(--vk-color-danger)")}
      >${()=>e().score}</span
    >
    <input data-size="sm" style="width:80px;" placeholder="type here…" />
    <button
      data-variant="danger"
      data-size="sm"
      onclick=${()=>Ee(t=>t.filter(t=>t.id!==e().id))}
    >
      ✕
    </button>
  </li>`}const ze=E`
  font-family: var(--vk-font-mono);
  font-size: 0.82rem;
  background: var(--vk-color-surface-2);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--vk-color-border);
  white-space: pre-wrap;
  line-height: 1.7;
  color: var(--vk-color-text-muted);
  strong {
    color: var(--vk-color-accent);
    font-weight: 500;
  }
`,Ie=[{label:"Demos",items:[{id:"snippets",label:"Code Examples"},{id:"sandbox",label:"Playground"},{id:"todo",label:"Todo App"},{id:"playground",label:"Reactive Demos"},{id:"stress",label:"Stress Test"}]}],Me={snippets:function(){return y`<section>
    <h2>Code Examples</h2>

    <h3>Counter</h3>
    <p>The simplest possible app — a signal and a button.</p>
    ${ce({source:'import { signal, html } from "vanillakit";\n\nconst count = signal(0);\n\ndocument.body.append(html`\n  <button onclick=${() => count(n => n + 1)}>\n    Clicked ${count} times\n  </button>\n`);',label:"Counter"})}

    <h3>Two-way binding</h3>
    <p>Bind an input to a signal. The heading updates as you type.</p>
    ${ce({source:'import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\ndocument.body.append(html`\n  <div>\n    <p style="font-size:1.2rem; font-weight:700;">Hello, ${name}!</p>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)}\n      style="max-width:240px;" />\n  </div>\n`);',label:"Two-way binding"})}

    <h3>Derived state</h3>
    ${ce({source:'import { signal, computed, html } from "vanillakit";\n\nconst price    = signal(10);\nconst quantity = signal(3);\nconst total    = computed(() => price() * quantity());\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label>Price:\n      <input type="number" value=${() => price()}\n        oninput=${(e) => price(+e.target.value)} style="width:80px;" />\n    </label>\n    <label>Qty:\n      <input type="number" value=${() => quantity()}\n        oninput=${(e) => quantity(+e.target.value)} style="width:80px;" />\n    </label>\n    <span style="font-weight:700;">Total: $${total}</span>\n  </div>\n`);',label:"Derived state — change price or qty"})}

    <h3>Reactive object</h3>
    ${ve('import { reactive, snapshot, effect } from "vanillakit";\n\nconst state = reactive({\n  todos: [\n    { text: "Learn signals", done: true },\n    { text: "Build an app",  done: false },\n  ],\n});\n\neffect(() => console.log(JSON.stringify(snapshot(state), null, 2)));\n\nstate.todos.push({ text: "Ship it", done: false });\nstate.todos[0].done = false;')}

    <h3>Scoped styles + routing</h3>
    ${ve('import { html, css, globalCss, createRouter, navLink } from "vanillakit";\n\nglobalCss`body { margin: 0; font-family: system-ui; }`;\n\nconst page = css`padding: 24px;`;\nconst active = css`color: gold; font-weight: 700;`;\nconst base = css`color: gray; text-decoration: none;`;\n\nconst Router = createRouter({\n  "/":      () => html`<div class=${page}><h1>Home</h1></div>`,\n  "/about": () => html`<div class=${page}><h1>About</h1></div>`,\n  "*":      () => html`<div class=${page}><h1>404</h1></div>`,\n});\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);')}
  </section>`},sandbox:function(){return y`<section>
    <h2>Playground</h2>
    <p>
      Write vanillakit code and see results live. Edit the code below — output
      updates instantly.
    </p>

    ${ce({source:'import { signal, computed, html, css } from "vanillakit";\n\nconst count = signal(0);\nconst double = computed(() => count() * 2);\n\nconst badge = css`\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-family: monospace;\n  font-weight: 600;\n  background: var(--vk-color-accent-dim);\n  color: var(--vk-color-accent);\n`;\n\ndocument.body.append(html`\n  <div>\n    <h3>Counter: ${count}</h3>\n    <p>Double: <span class=${badge}>${double}</span></p>\n    <div style="display:flex; gap:8px; margin-top:12px;">\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n      <button onclick=${() => count(n => n - 1)}>-1</button>\n      <button onclick=${() => count(0)}>Reset</button>\n    </div>\n  </div>\n`);',label:"Sandbox — edit freely"})}
  </section>`},todo:function(){return y`<section>
    <h2>Todo App</h2>
    <p class=${G}>
      A fully reactive todo app — signals, computed, each().
    </p>
    <div data-grid data-cols="3" style="margin-bottom:28px;">
      <article data-card style="text-align:center;">
        <dl>
          <dd>${()=>Se().total}</dd>
          <dt>Total</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-accent">${()=>Se().active}</dd>
          <dt>Active</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-success">${()=>Se().done}</dd>
          <dt>Done</dt>
        </dl>
      </article>
    </div>
    ${function(){const e=a(""),t=a("medium"),n=()=>{const n=e().trim();n&&(xe(e=>[...e,{id:ke++,text:n,done:!1,priority:t()}]),e(""))};return y`<div style="display:flex;gap:8px;margin-bottom:24px;">
    <input
      placeholder="What needs doing?"
      value=${()=>e()}
      oninput=${t=>e(t.target.value)}
      onkeydown=${e=>{"Enter"===e.key&&n()}}
    />
    <select
      onchange=${e=>t(e.target.value)}
    >
      <option value="low">Low</option>
      <option value="medium" selected>Med</option>
      <option value="high">High</option>
    </select>
    <button onclick=${n}>Add</button>
  </div>`}()} ${y`<div role="group" style="margin-bottom:20px;">
    ${["all","active","done"].map(e=>y`<button
          aria-pressed=${()=>$e()===e?"true":"false"}
          onclick=${()=>$e(e)}
        >
          ${e[0].toUpperCase()+e.slice(1)}
          ${()=>{const t=Se();return`(${"all"===e?t.total:"active"===e?t.active:t.done})`}}
        </button>`)}
  </div>`}
    <ul style="list-style:none;padding:0;">
      ${C(we,e=>e.id,e=>function(e){const t=e();return y`<li class=${fe}>
    <input type="checkbox" checked=${t.done} onclick=${()=>xe(e=>e.map(e=>e.id===t.id?{...e,done:!e.done}:e))} />
    <span class=${t.done?be:""} style="flex:1;"
      >${t.text}</span
    >
    <span data-badge data-variant=${ye[t.priority]}
      >${t.priority}</span
    >
    <button data-variant="danger" data-size="sm" onclick=${()=>xe(e=>e.filter(e=>e.id!==t.id))}>✕</button>
  </li>`}(e))}
      ${()=>0===we().length?y`<div data-empty>No tasks match this filter.</div>`:null}
    </ul>
    <details>
      <summary>View source — signals, computed, each()</summary>
      ${ve('// Reactive state\nconst todos = signal([...]);\nconst filter = signal("all");\nconst filteredTodos = computed(() => {\n  const f = filter();\n  const l = todos();\n  return f === "active" ? l.filter(t => !t.done)\n       : f === "done"   ? l.filter(t => t.done)\n       : l;\n});\nconst stats = computed(() => {\n  const l = todos();\n  return {\n    total: l.length,\n    done: l.filter(t => t.done).length,\n    active: l.filter(t => !t.done).length,\n  };\n});\n\n// Keyed list rendering — DOM nodes reused by id\nhtml`<div>\n  ${each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))}\n</div>`;\n\n// Adding a todo — just push to the signal\nfunction add() {\n  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);\n}\n\n// TodoItem reads from itemSig — updates when that item changes\nfunction TodoItem(itemSig) {\n  const todo = itemSig();\n  const toggle = () => todos(l => l.map(t =>\n    t.id === todo.id ? { ...t, done: !t.done } : t\n  ));\n  return html`<div>\n    <input type="checkbox" checked=${todo.done} onclick=${toggle} />\n    <span>${todo.text}</span>\n  </div>`;\n}')}
    </details>
  </section>`},playground:function(){const e=g({user:{name:"Ada Lovelace",settings:{theme:"dark",notifications:{email:!0,push:!1,frequency:"daily"}},scores:[95,87,92]}}),t=o(()=>JSON.stringify(f(e),null,2)),n=E`
    padding: 20px;
    border: 2px solid var(--vk-color-border);
    border-radius: var(--vk-radius-md);
    margin-bottom: 16px;

    &:hover {
      border-color: var(--vk-color-accent);
    }

    & > .title {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 12px;
      color: var(--vk-color-accent);
    }

    & .nested-box {
      background: var(--vk-color-surface-2);
      padding: 12px;
      border-radius: 6px;
      margin-bottom: 8px;
    }

    & .nested-box > .inner {
      font-size: 0.85rem;
      color: var(--vk-color-text-muted);
    }

    &::before {
      content: "✦";
      margin-right: 8px;
      color: var(--vk-color-accent);
    }

    & .tag {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    & .tag.green {
      background: var(--vk-color-success-dim);
      color: var(--vk-color-success);
    }

    & .tag.yellow {
      background: var(--vk-color-accent-dim);
      color: var(--vk-color-accent);
    }

    &:hover,
    &:focus-within {
      box-shadow: 0 0 0 2px var(--vk-color-accent-dim);
    }

    @media (max-width: 600px) {
      padding: 12px;

      & > .title {
        font-size: 0.9rem;
      }
    }
  `,i=E`
    padding: 16px;

    & .level1 {
      border-left: 3px solid var(--vk-color-danger);
      padding-left: 12px;
      margin-bottom: 8px;

      & .level2 {
        border-left: 3px solid var(--vk-color-accent);
        padding-left: 12px;
        margin-bottom: 8px;

        & .level3 {
          border-left: 3px solid var(--vk-color-success);
          padding-left: 12px;
          font-family: var(--vk-font-mono);
          font-size: 0.8rem;
        }
      }
    }
  `,r=E`
    & .item + .item {
      margin-top: 8px;
      border-top: 1px dashed var(--vk-color-border);
      padding-top: 8px;
    }

    & .item:first-child {
      color: var(--vk-color-accent);
      font-weight: 600;
    }

    & .item:last-child {
      color: var(--vk-color-success);
    }

    & .item:nth-child(even) {
      opacity: 0.7;
    }
  `,s=E`
    padding: 16px 20px;
    border-radius: var(--vk-radius-md);
    border: 2px solid var(--vk-color-border);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 12px;
    font-weight: 500;

    & .icon {
      width: 36px;
      height: 36px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.1rem;
      flex-shrink: 0;
      transition: all 0.3s ease;
    }

    & .text {
      flex: 1;
    }

    & .label {
      font-size: 0.7rem;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-weight: 600;
      opacity: 0.8;
    }

    & .message {
      font-size: 0.92rem;
      margin-top: 2px;
    }
  `,l={success:E`
    border-color: var(--vk-color-success);
    background: var(--vk-color-success-dim);
    color: var(--vk-color-success);
    & .icon {
      background: var(--vk-color-success);
      color: var(--vk-color-bg);
    }
  `,warning:E`
    border-color: var(--vk-color-accent);
    background: var(--vk-color-accent-dim);
    color: var(--vk-color-accent);
    & .icon {
      background: var(--vk-color-accent);
      color: var(--vk-color-bg);
    }
  `,error:E`
    border-color: var(--vk-color-danger);
    background: var(--vk-color-danger-dim);
    color: var(--vk-color-danger);
    & .icon {
      background: var(--vk-color-danger);
      color: var(--vk-color-bg);
    }
  `,info:E`
    border-color: var(--vk-color-info);
    background: var(--vk-color-info-dim);
    color: var(--vk-color-info);
    & .icon {
      background: var(--vk-color-info);
      color: var(--vk-color-bg);
    }
  `},d={success:"✓",warning:"!",error:"✕",info:"i"},c={success:"All systems operational. Deployment completed.",warning:"High memory usage detected. Consider scaling.",error:"Connection lost. Retrying in 5 seconds…",info:"New version available. Update when ready."},p=E`
    border-radius: 24px !important;
    & .icon {
      border-radius: 12px;
    }
  `,u=E`
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.3);
  `,m=E`
    border-width: 3px;
    border-style: dashed;
  `,h=E`
    transform: scale(1.02);
  `,v=E`
    box-shadow:
      0 0 20px currentColor,
      0 0 40px currentColor;
    &:hover {
      box-shadow:
        0 0 30px currentColor,
        0 0 60px currentColor;
    }
  `,b=a("success"),k=a(!1),x=a(!1),$=a(!1),w=a(!1),S=a(!1),A=a(100),F=a(10),C=a(100),T=E`
    width: 100%;
    background: var(--vk-color-surface-2);
    border: 2px solid var(--vk-color-border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--vk-font-mono);
    font-weight: 600;
    transition: all 0.3s ease;
    overflow: hidden;
    color: var(--vk-color-text);
  `;return y`<section>
    <h2>Reactive Playground</h2>
    <p class=${G}>
      Deeply nested reactive objects, complex CSS selectors, and signal
      chains.
    </p>

    <div
      style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;"
    >
      <article>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:16px;">
          Deep Reactive Object
        </h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label>
            user.name
            <input
              style="margin-top:4px;"
              value=${()=>e.user.name}
              oninput=${t=>{e.user.name=t.target.value}}
            />
          </label>
          <label>
            user.settings.theme
            <select
              style="width:100%;margin-top:4px;"
              onchange=${t=>{e.user.settings.theme=t.target.value}}
            >
              <option value="dark" selected>dark</option>
              <option value="light">light</option>
              <option value="auto">auto</option>
            </select>
          </label>
          <div style="display:flex;gap:12px;align-items:center;">
            <label
              style="display:flex;gap:6px;align-items:center;"
            >
              <input
                type="checkbox"
                checked=${()=>e.user.settings.notifications.email}
                onclick=${()=>{e.user.settings.notifications.email=!e.user.settings.notifications.email}}
              />
              email
            </label>
            <label
              style="display:flex;gap:6px;align-items:center;"
            >
              <input
                type="checkbox"
                checked=${()=>e.user.settings.notifications.push}
                onclick=${()=>{e.user.settings.notifications.push=!e.user.settings.notifications.push}}
              />
              push
            </label>
          </div>
          <label>
            user.settings.notifications.frequency
            <select
              style="width:100%;margin-top:4px;"
              onchange=${t=>{e.user.settings.notifications.frequency=t.target.value}}
            >
              <option value="daily" selected>daily</option>
              <option value="weekly">weekly</option>
              <option value="never">never</option>
            </select>
          </label>
          <div style="display:flex;gap:6px;margin-top:4px;">
            <button
              data-variant="success"
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${()=>{e.user.scores.push(Math.floor(100*Math.random()))}}
            >
              Push score
            </button>
            <button
              data-variant="danger"
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${()=>{e.user.scores.length&&e.user.scores.pop()}}
            >
              Pop score
            </button>
          </div>
        </div>
      </div>

      <article>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:16px;">
          Live State (auto-updates)
        </h3>
        <div
          class=${ze}
          style="font-size:0.75rem;max-height:320px;overflow-y:auto;"
        >
          ${()=>t()}
        </div>
      </article>
    </div>

    <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
      Conditional Styling
    </h2>

    <div
      style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;"
    >
      <article>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:14px;">
          Status Variant + Property Toggles
        </h3>
        <p
          style="font-size:0.82rem;color:var(--vk-color-text-muted);margin-bottom:14px;"
        >
          Entire class swapped via
          <code>class=${"${"}() => statusMap[status()]}</code>, extras layered with
          <code>cx()</code>.
        </p>

        <div style="display:flex;gap:6px;margin-bottom:14px;">
          ${["success","warning","error","info"].map(e=>y`
              <button
                data-ghost=${()=>b()===e?null:""}
                style="font-size:0.75rem;padding:6px 12px;flex:1;"
                onclick=${()=>b(e)}
              >
                ${e}
              </button>
            `)}
        </div>

        <div role="group"
          style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;"
        >
          <button
            aria-pressed=${()=>k()?"true":"false"}
            onclick=${()=>k(e=>!e)}
          >
            rounded
          </button>
          <button
            aria-pressed=${()=>x()?"true":"false"}
            onclick=${()=>x(e=>!e)}
          >
            shadow
          </button>
          <button
            aria-pressed=${()=>$()?"true":"false"}
            onclick=${()=>$(e=>!e)}
          >
            dashed
          </button>
          <button
            aria-pressed=${()=>w()?"true":"false"}
            onclick=${()=>w(e=>!e)}
          >
            scale
          </button>
          <button
            aria-pressed=${()=>S()?"true":"false"}
            onclick=${()=>S(e=>!e)}
          >
            glow
          </button>
        </div>

        <div
          class=${()=>z(s,l[b()],k()&&p,x()&&u,$()&&m,w()&&h,S()&&v)}
        >
          <div class="icon">${()=>d[b()]}</div>
          <div class="text">
            <div class="label">${()=>b()}</div>
            <div class="message">${()=>c[b()]}</div>
          </div>
        </div>

        <div
          class=${ze}
          style="margin-top:12px;font-size:0.7rem;line-height:1.6;"
        >
          cx(statusBase,
          <strong
            >${()=>"status"+b()[0].toUpperCase()+b().slice(1)}</strong
          >${()=>k()?", propRounded":""}${()=>x()?", propShadow":""}${()=>$()?", propBorder":""}${()=>w()?", propScale":""}${()=>S()?", propGlow":""})
        </div>
      </article>

      <article>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:14px;">
          Reactive Inline Styles
        </h3>
        <p
          style="font-size:0.82rem;color:var(--vk-color-text-muted);margin-bottom:14px;"
        >
          Computed
          <code>style=${"${"}() => string}</code>
          bound to signals. Each slider updates exactly one CSS property —
          no re-renders.
        </p>

        <div
          style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;"
        >
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--vk-color-text-muted);"
          >
            <span style="min-width:60px;">Size</span>
            <input
              type="range"
              min="50"
              max="200"
              value=${()=>A()}
              oninput=${e=>A(+e.target.value)}
            />
            <code style="min-width:38px;"
              >${()=>A()}%</code
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--vk-color-text-muted);"
          >
            <span style="min-width:60px;">Radius</span>
            <input
              type="range"
              min="0"
              max="50"
              value=${()=>F()}
              oninput=${e=>F(+e.target.value)}
            />
            <code style="min-width:38px;"
              >${()=>F()}px</code
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--vk-color-text-muted);"
          >
            <span style="min-width:60px;">Opacity</span>
            <input
              type="range"
              min="10"
              max="100"
              value=${()=>C()}
              oninput=${e=>C(+e.target.value)}
            />
            <code style="min-width:38px;"
              >${()=>C()}%</code
            >
          </label>
        </div>

        <div style="display:flex;justify-content:center;padding:20px 0;">
          <div
            class=${T}
            style=${()=>`height: ${A()}px; border-radius: ${F()}px; opacity: ${C()/100}; font-size: ${Math.max(10,.14*A())}px;`}
          >
            ${()=>`${A()}% · ${F()}px · ${C()}%`}
          </div>
        </div>

        <div class=${ze} style="font-size:0.7rem;line-height:1.6;">
          style=${"${"}() => ${"`"} height:
          <strong>${()=>A()}px</strong>; border-radius:
          <strong>${()=>F()}px</strong>; opacity:
          <strong>${()=>(C()/100).toFixed(2)}</strong>; ${"`"}}
        </div>
      </article>
    </div>

    <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
      CSS Stress Tests
    </h2>

    <div class=${n}>
      <div class="title">Complex Selectors Test</div>
      <div class="nested-box">
        <div class="inner">
          This is nested-box > inner (descendant combinator)
        </div>
      </div>
      <span class="tag green">Green Tag</span>
      <span class="tag yellow">Yellow Tag</span>
      <input
        style="margin-top:12px;width:200px;"
        placeholder="Focus me for :focus-within"
      />
    </div>

    <article class=${i}>
      <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:12px;">
        Three-Level CSS Nesting
      </h3>
      <div class="level1">
        Level 1 (red border)
        <div class="level2">
          Level 2 (yellow border)
          <div class="level3">Level 3 (green border, mono font)</div>
        </div>
      </div>
      <div class="level1">
        Another Level 1
        <div class="level2">
          Another Level 2
          <div class="level3">Another Level 3</div>
        </div>
      </div>
    </article>

    <article class=${r}>
      <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:12px;">
        Combinator Selectors (+, :first-child, :last-child, :nth-child)
      </h3>
      <div class="item">First item (accent, bold — :first-child)</div>
      <div class="item">Second item (dimmed — :nth-child(even))</div>
      <div class="item">Third item</div>
      <div class="item">Fourth item (dimmed — :nth-child(even))</div>
      <div class="item">Fifth item (green — :last-child)</div>
    </article>
    <details>
      <summary>View source — reactive(), css\`\`, cx()</summary>
      ${ve('// Deep reactive proxy — mutate normally, changes propagate\nconst state = reactive({\n  user: {\n    name: "Ada Lovelace",\n    settings: {\n      theme: "dark",\n      notifications: { email: true, push: false, frequency: "daily" },\n    },\n    scores: [95, 87, 92],\n  },\n});\n\n// Computed snapshot for display — auto-updates\nconst jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));\n\n// Direct mutation triggers effects\nstate.user.name = "Grace Hopper";\nstate.user.scores.push(99);\n\n// Scoped CSS with nesting, pseudo-classes, @media\nconst card = css`\n  padding: 20px;\n  border: 2px solid var(--vk-color-border);\n  &:hover { border-color: var(--vk-color-accent); }\n  & > .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 12px; }\n`;\n\n// cx() merges class names, skipping falsy values\nconst classes = cx(\n  statusBase,\n  statusMap[status()],\n  rounded() && propRounded,\n  shadow() && propShadow,\n);')}
    </details>
  </section>`},stress:function(){return y`<section>
    <h2>List Stress Test</h2>
    <p class=${G}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type in the
      inputs to verify DOM preservation.
    </p>

    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
      <button
        onclick=${()=>{Ee(Oe),Te("Shuffled")}}
      >
        Shuffle
      </button>
      <button
        data-variant="info"
        onclick=${()=>{Ee(e=>[...e].reverse()),Te("Reversed")}}
      >
        Reverse
      </button>
      <button
        data-variant="success"
        onclick=${()=>{Ee(e=>[...e,Pe()]),Te("Added 1")}}
      >
        + Add 1
      </button>
      <button
        data-variant="success"
        onclick=${()=>{const e=Array.from({length:5},Pe);Ee(t=>[...t,...e]),Te("Added 5")}}
      >
        + Add 5
      </button>
      <button
        data-variant="danger"
        onclick=${()=>{Ee(e=>{if(!e.length)return e;const t=Math.floor(Math.random()*e.length);return e.filter((e,n)=>n!==t)}),Te("Removed random")}}
      >
        - Remove random
      </button>
      <button
        data-ghost
        onclick=${()=>{Ee(e=>e.map(e=>({...e,score:Math.floor(100*Math.random())}))),Te("Randomized scores")}}
      >
        Randomize scores
      </button>
      <button
        data-ghost
        onclick=${()=>{Ee(e=>[...e].sort((e,t)=>e.name.localeCompare(t.name))),Te("Sorted by name")}}
      >
        Sort A→Z
      </button>
      <button
        data-ghost
        onclick=${()=>{Ee(e=>[...e].sort((e,t)=>t.score-e.score)),Te("Sorted by score")}}
      >
        Sort by score
      </button>
      <button
        data-variant="danger"
        onclick=${()=>{Ee([]),Te("Cleared all")}}
      >
        Clear
      </button>
      <button
        onclick=${()=>{Ee(Array.from({length:50},Pe)),Te("Reset to 50 items")}}
      >
        Reset 50
      </button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;align-items:center;">
      <span data-badge data-variant="primary"
        >${()=>Ee().length} items</span
      >
      <small
        >Type in any input, then shuffle — your text stays because each() reuses
        DOM nodes by key.</small
      >
    </div>

    <ul style="list-style:none;padding:0;margin-bottom:24px;">
      ${C(Ee,e=>e.id,_e)}
      ${()=>0===Ee().length?y`<div data-empty>List is empty. Add some items!</div>`:null}
    </ul>

    <h3>Operation Log</h3>
    <div class=${Fe}>
      ${()=>0===Ce().length?"No operations yet…":Ce().join("\n")}
    </div>
    <details>
      <summary>View source — each() keyed reconciliation</summary>
      ${ve('// each() reuses DOM nodes by key across mutations\nconst items = signal(Array.from({ length: 8 }, randItem));\n\n// Render — each item gets a Signal<T> and ReadonlySignal<number>\nhtml`<div>\n  ${each(items, item => item.id, (itemSig, indexSig) =>\n    html`<div>\n      <span>${() => indexSig()}</span>\n      <span>${() => itemSig().name}</span>\n      <span>${() => itemSig().score}</span>\n      <input placeholder="type here…" />\n    </div>`\n  )}\n</div>`;\n\n// Mutations — DOM nodes with matching keys are reused, not recreated.\n// Text typed into inputs persists across shuffle/reverse/sort.\nitems(shuffle);                              // reorder\nitems(l => [...l].reverse());                // reverse\nitems(l => [...l, randItem()]);              // append\nitems(l => l.filter(x => x.id !== target));  // remove\nitems(l => [...l].sort((a, b) =>             // sort\n  a.name.localeCompare(b.name)\n));')}
    </details>
  </section>`}},Le=E`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,je=[{name:"signal.js",icon:"⚡",color:"var(--vk-color-accent)",lines:"~90",desc:"signal, computed, effect, batch, untrack"},{name:"reactive.js",icon:"🔮",color:"#a78bfa",lines:"~130",desc:"Proxy-based deep reactivity, identity cache, array methods"},{name:"html.js",icon:"🧩",color:"#60a5fa",lines:"~210",desc:"Tagged templates → live DOM, keyed each() reconciliation"},{name:"component.js",icon:"📦",color:"var(--vk-color-success)",lines:"~95",desc:"mount, onMount, onCleanup, provide/inject"},{name:"router.js",icon:"🧭",color:"#f472b6",lines:"~105",desc:"History-based SPA routing, reactive params"},{name:"css.js",icon:"🎨",color:"#fb923c",lines:"~130",desc:"Scoped CSS-in-JS with deep nesting, @media, combinators"}];function Ne(e,t,n){return y`<tr>
    <td><code>${e}</code></td>
    <td><code>${t}</code></td>
    <td>${n}</td>
  </tr>`}const Be=[{label:"Guide",items:[{id:"getting-started",label:"Getting Started"},{id:"typescript",label:"TypeScript & Tooling"}]},{label:"Concepts",items:[{id:"components",label:"Components"},{id:"reactivity",label:"Reactivity"},{id:"data-fetching",label:"Data Fetching"},{id:"conditional",label:"Conditional Rendering"},{id:"lists",label:"Lists & Keys"},{id:"forms",label:"Forms"},{id:"styling",label:"Styling"},{id:"routing-concepts",label:"Routing"}]},{label:"VanillaCSS",items:[{id:"vanillacss",label:"Overview"},{id:"vanillacss-theming",label:"Theming"},{id:"vanillacss-components",label:"Components"},{id:"vanillacss-tokens",label:"Token Reference"}]},{label:"Integrations",items:[{id:"htmx",label:"htmx"},{id:"tailwind",label:"Tailwind CSS"},{id:"hono",label:"Hono"},{id:"fastapi",label:"FastAPI"}]},{label:"API Reference",items:[{id:"signal",label:"signal.js"},{id:"reactive",label:"reactive.js"},{id:"html-module",label:"html.js"},{id:"css-module",label:"css.js"},{id:"router",label:"router.js"}]}],He={"getting-started":function(){return y`<section>
    <h2>Getting Started</h2>
    <p>
      vanillakit is a collection of standalone ES modules. No build step
      required — import from source and go. Works with any bundler (Vite,
      esbuild, etc.) or direct
      <code>&lt;script type="module"&gt;</code>.
    </p>

    <h3>Install</h3>
    <p>
      Grab the source from GitHub directly, or use a CDN like jsDelivr or
      esm.sh:
    </p>
    ${ve("# clone the repo\ngit clone https://github.com/nisuxyz/vanillakit.git\ncp -r vanillakit/src ./vanillakit","bash")}

    <p>Or import straight from a CDN — no install needed:</p>
    ${ve('<script type="module">\n  import { signal, html, css } from "https://esm.sh/gh/nisuxyz/vanillakit/src/index.js";\n\n  // ready to go\n<\/script>',"markup")}

    <h3>Quick setup</h3>
    <p>Create an <code>index.html</code> and a module entry point:</p>
    ${ve('<!doctype html>\n<html>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}
    ${ve(`// app.js\n${pe}`,"javascript")}

    <h3>Project structure</h3>
    <p>There's no required structure. The library is five files:</p>
    ${ve("src/\n  signal.js    — signal, computed, effect, batch, untrack\n  reactive.js  — reactive, toRaw, isReactive, snapshot\n  html.js      — html, each\n  css.js       — css, keyframes, globalCss, cx\n  router.js    — createRouter, navigate, navLink, currentPath, routeParams\n  index.js     — re-exports everything","bash")}

    <p>
      Import what you need. Each module (except <code>reactive.js</code> and
      <code>html.js</code>) only depends on <code>signal.js</code>.
    </p>
  </section>`},typescript:function(){return y`<section>
    <h2>TypeScript &amp; Tooling</h2>

    <h3>TypeScript</h3>
    <p>
      The source is plain JS with JSDoc type annotations, so it works out of the
      box with TypeScript — no <code>@types</code> package needed. Import the
      types directly:
    </p>
    ${ve('import { signal } from "vanillakit";\nimport type { Signal, ReadonlySignal } from "vanillakit/signal.js";\n\nconst count: Signal<number> = signal(0);',"typescript")}

    <p>
      If you're writing <code>.ts</code> files, make sure your
      <code>tsconfig.json</code> has
      <code>"moduleResolution": "bundler"</code> and
      <code>"allowImportingTsExtensions": true</code> (already the default with
      Vite).
    </p>
    ${ve('{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "allowJs": true,\n    "checkJs": true,\n    "noEmit": true,\n    "allowImportingTsExtensions": true,\n    "strict": true,\n    "lib": ["ESNext", "DOM", "DOM.Iterable"]\n  }\n}',"javascript")}

    <h3>HMR with Vite</h3>
    <p>A minimal <code>vite.config.js</code>:</p>
    ${ve('import { defineConfig } from "vite";\n\nexport default defineConfig({\n  root: "demo",\n  base: "./",\n});')}

    <h3>Production builds</h3>
    <p>
      <code>vite build</code> produces a single minified JS bundle. The entire
      library plus this full demo app compiles to ~25 KB gzipped.
    </p>
    ${ve("npx vite build\n# output in dist/ (or wherever outDir points)","bash")}
  </section>`},vanillacss:function(){return y`<section>
    <h2>VanillaCSS</h2>
    <p>
      VanillaCSS is a classless CSS framework included with vanillakit. It
      styles semantic HTML automatically — no class names needed. Use optional
      <code>data-*</code> attributes and ARIA roles to access components,
      variants, and interactive patterns.
    </p>
    <p>
      VanillaCSS ships as plain CSS files. You can use it with or without the
      vanillakit JavaScript library.
    </p>

    <h3>With vanillakit</h3>
    <p>
      Call <code>initVanillaCss()</code> once at app startup. It injects the
      CSS into the page via an adopted stylesheet.
    </p>
    ${ve('import { initVanillaCss, themeToggle } from "vanillakit";\nimport { html } from "vanillakit";\n\ninitVanillaCss();  // inject VanillaCSS\n\n// Optional: reactive dark/light toggle\nconst { theme, toggle } = themeToggle();\n\ndocument.body.append(html`\n  <button onclick=${toggle}>\n    ${() => theme() === "dark" ? "☀️ Light" : "🌙 Dark"}\n  </button>\n`);',"typescript")}

    <h3>Standalone — no JavaScript required</h3>
    <p>
      Copy <code>src/vanillacss/</code> to your project and link
      <code>vanilla.css</code>. The entire framework is plain CSS — no build
      step, no JavaScript dependency.
    </p>
    ${ve('<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./vanillacss/vanilla.css" />\n  </head>\n  <body>\n    <header>\n      <a href="/">MySite</a>\n      <nav>\n        <a href="/about">About</a>\n        <a href="/blog">Blog</a>\n      </nav>\n    </header>\n    <main>\n      <h1>Hello</h1>\n      <p>Styled automatically — no class names needed.</p>\n      <button data-color-variant="primary">Get started</button>\n    </main>\n  </body>\n</html>',"markup")}

    <p>Or import in your own CSS:</p>
    ${ve('/* styles.css */\n@import "./vanillacss/vanilla.css";\n\n/* Your styles here — unlayered rules always beat @layer rules */\n:root {\n  --vk-color-accent: hsl(220 80% 60%);  /* swap to blue */\n}',"css")}

    <h3>Layer architecture</h3>
    <p>
      Every VanillaCSS rule lives inside a named <code>@layer</code> sub-layer.
      Your own styles — even ones with low specificity — automatically override
      VanillaCSS because unlayered declarations beat layered ones at equal
      specificity. No <code>!important</code>, no specificity fights.
    </p>
    ${ve("/* Sub-layer cascade order — lowest to highest priority */\n@layer vanillacss.reset,       /* minireset.css foundation      */\n       vanillacss.tokens,      /* custom properties & theme     */\n       vanillacss.base,        /* html, body, img, input reset  */\n       vanillacss.typography,  /* headings, links, lists, code  */\n       vanillacss.layout,      /* main, header, cards, grid     */\n       vanillacss.nav,         /* nav, breadcrumb, pagination   */\n       vanillacss.buttons,     /* buttons, hover effects        */\n       vanillacss.forms,       /* inputs, checkbox, switch      */\n       vanillacss.feedback,    /* alerts, progress, toast       */\n       vanillacss.data,        /* tables, tags, avatars         */\n       vanillacss.components,  /* dialog, tabs, accordion       */\n       vanillacss.utilities;   /* badges, sr-only, keyframes    */","css")}

    <p>Override any individual layer precisely:</p>
    ${ve("/* Any selector outside a @layer beats everything inside one */\n:root {\n  --vk-color-accent: hsl(220 80% 60%);\n}\n\n/* Or target a specific sub-layer */\n@layer vanillacss.typography {\n  h1 { letter-spacing: -0.05em; }\n}","css")}
  </section>`},"vanillacss-theming":function(){return y`<section>
    <h2>Theming</h2>
    <p>
      VanillaCSS ships with a complete dark and light theme built from CSS
      custom properties. It auto-selects based on
      <code>prefers-color-scheme</code> and can be overridden manually or
      toggled at runtime with the vanillakit <code>themeToggle()</code> helper.
    </p>

    <h3>Automatic dark mode</h3>
    <p>
      No setup required. VanillaCSS detects the OS preference via a media query
      inside <code>@layer vanillacss.tokens</code>:
    </p>
    ${ve('@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    --vk-color-bg:      hsl(var(--vk-gray-9));\n    --vk-color-surface: hsl(var(--vk-gray-8));\n    --vk-color-text:    hsl(var(--vk-gray-0));\n    color-scheme: dark;\n  }\n}',"css")}

    <h3>Manual override</h3>
    <p>
      Force a specific theme by setting <code>data-theme</code> on
      <code>&lt;html&gt;</code> or any ancestor element. This overrides the
      system preference.
    </p>
    ${ve('\x3c!-- Force dark --\x3e\n<html data-theme="dark">\n\n\x3c!-- Force light --\x3e\n<html data-theme="light">\n\n\x3c!-- Scope dark to a specific section --\x3e\n<div data-theme="dark">\n  <article data-card>Always dark card</article>\n</div>',"markup")}

    <h3>themeToggle() — with vanillakit</h3>
    <p>
      <code>themeToggle()</code> returns a reactive signal bound to
      <code>document.documentElement.dataset.theme</code>. It reads from
      <code>localStorage</code> on init, falls back to the system preference,
      and persists every user choice.
    </p>
    ${ve('import { initVanillaCss, themeToggle } from "vanillakit";\nimport { html } from "vanillakit";\n\ninitVanillaCss();\n\nconst { theme, toggle, set } = themeToggle();\n\n// theme()  → "dark" | "light"   (reactive signal)\n// toggle() → switch dark ↔ light, persist to localStorage\n// set()    → explicit control\n\nconst btn = html`\n  <button onclick=${toggle}>\n    ${() => theme() === "dark" ? "☀️ Switch to light" : "🌙 Switch to dark"}\n  </button>\n`;\n\n// Explicit control\nset("dark");   // force dark — saved to localStorage\nset("light");  // force light — saved to localStorage\nset("auto");   // follow system — clears localStorage',"typescript")}

    <h3>Customizing the accent color</h3>
    <p>
      Override <code>--vk-color-accent</code> and
      <code>--vk-color-accent-dim</code> to rebrand the framework to any color.
      Add it to your own stylesheet — unlayered declarations beat
      <code>@layer vanillacss.tokens</code> at equal specificity.
    </p>
    ${ve("/* styles.css — swap gold accent for indigo */\n:root {\n  --vk-color-accent:     hsl(240 60% 60%);\n  --vk-color-accent-dim: hsl(240 60% 60% / 0.15);\n}","css")}

    <p>For separate light and dark accents:</p>
    ${ve('/* Light mode accent */\n:root {\n  --vk-color-accent:     hsl(240 60% 55%);\n  --vk-color-accent-dim: hsl(240 60% 55% / 0.12);\n}\n\n/* Dark mode accent */\n[data-theme="dark"],\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    --vk-color-accent:     hsl(240 80% 70%);\n    --vk-color-accent-dim: hsl(240 80% 70% / 0.18);\n  }\n}',"css")}

    <h3>Config variables</h3>
    <p>
      These variables propagate through the entire framework. Change one to
      update every component that uses it.
    </p>

    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Controls</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><code>--vk-font-size-root</code></td>
          <td><code>100%</code></td>
          <td>
            <code>font-size</code> on <code>&lt;html&gt;</code> — scales all
            <code>rem</code> values
          </td>
        </tr>
        <tr>
          <td><code>--vk-transition-speed</code></td>
          <td><code>0.15s</code></td>
          <td>All hover and focus transitions</td>
        </tr>
        <tr>
          <td><code>--vk-transition-speed-slow</code></td>
          <td><code>0.2s</code></td>
          <td>Switch toggle, progress bar, accordion icon</td>
        </tr>
        <tr>
          <td><code>--vk-animation-speed</code></td>
          <td><code>0.2s</code></td>
          <td>Dialog and overlay entrance animations</td>
        </tr>
        <tr>
          <td><code>--vk-container-max-width</code></td>
          <td><code>72rem</code></td>
          <td><code>&lt;main&gt;</code> element max-width</td>
        </tr>
        <tr>
          <td><code>--vk-sidebar-width</code></td>
          <td><code>200px</code></td>
          <td>
            <code>[data-layout="sidebar"]</code> first column width
          </td>
        </tr>
      </tbody>
    </table>

    ${ve("/* Tighten transitions, widen container, adjust rem base */\n:root {\n  --vk-transition-speed: 0.1s;\n  --vk-container-max-width: 80rem;\n  --vk-font-size-root: 112.5%;  /* 18px base → scales all rem values */\n}","css")}
  </section>`},"vanillacss-components":function(){return y`<section>
    <h2>Components</h2>
    <p>
      VanillaCSS styles native HTML elements and ARIA patterns automatically.
      Each example is fully editable — try changing the code!
    </p>

    <!-- ── TYPOGRAPHY ───────────────────────────────── -->
    <h3>Typography</h3>
    <p>Headings, body text, and inline elements are styled out of the box.</p>

    ${ce({source:"document.body.append(html`\n  <div>\n    <h1>Heading 1</h1>\n    <h2>Heading 2</h2>\n    <h3>Heading 3</h3>\n    <h4>Heading 4</h4>\n    <h5>Heading 5</h5>\n    <h6>Heading 6</h6>\n  </div>\n`);"})}

    ${ce({source:'document.body.append(html`\n  <div>\n    <p>\n      A paragraph with <strong>bold</strong>, <em>italic</em>,\n      <small>small</small>, <mark>highlighted</mark>,\n      <code>inline code</code>, <kbd>Ctrl+K</kbd>,\n      and <a href="#">a link</a>.\n    </p>\n    <blockquote>A blockquote for pull quotes and callouts.</blockquote>\n  </div>\n`);'})}

    ${ce({source:"document.body.append(html`\n  <div>\n    <ul>\n      <li>Unordered item one</li>\n      <li>Unordered item two</li>\n      <li>Unordered item three</li>\n    </ul>\n    <ol>\n      <li>Ordered item one</li>\n      <li>Ordered item two</li>\n      <li>Ordered item three</li>\n    </ol>\n  </div>\n`);"})}

    ${ce({source:'document.body.append(html`\n  <pre><code>const greeting = "Hello, world!";\nconsole.log(greeting);\n// → Hello, world!</code></pre>\n`);'})}

    <!-- ── BUTTONS ───────────────────────────────────── -->
    <h3>Buttons</h3>
    <p>
      Use <code>data-color-variant</code> for semantic color,
      <code>data-style-variant</code> for hollow styles,
      <code>data-size</code> for scale.
    </p>

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button>Default</button>\n    <button data-color-variant="primary">Primary</button>\n    <button data-color-variant="danger">Danger</button>\n    <button data-color-variant="success">Success</button>\n    <button data-color-variant="warning">Warning</button>\n    <button data-color-variant="info">Info</button>\n  </div>\n`);',label:"Color variants"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:.5rem">\n    <button data-size="sm">Small</button>\n    <button>Default</button>\n    <button data-size="lg">Large</button>\n    <button data-size="xl">XL</button>\n  </div>\n`);',label:"Sizes"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-style-variant="ghost">Ghost</button>\n    <button data-style-variant="outline">Outline</button>\n  </div>\n`);',label:"Style variants"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-style-variant="ghost" data-color-variant="primary">Ghost primary</button>\n    <button data-style-variant="ghost" data-color-variant="danger">Ghost danger</button>\n    <button data-style-variant="outline" data-color-variant="primary">Outline primary</button>\n    <button data-style-variant="outline" data-color-variant="danger">Outline danger</button>\n  </div>\n`);',label:"Style + color combos"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-loading>Saving…</button>\n    <button data-color-variant="primary" data-loading>Loading</button>\n  </div>\n`);',label:"Loading state"})}

    ${ce({source:'document.body.append(html`\n  <div role="group">\n    <button>Left</button>\n    <button aria-pressed="true">Center</button>\n    <button>Right</button>\n  </div>\n`);',label:"Button group"})}

    <p>Hover effects work on any element — cards, images, links, etc.</p>
    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-hover="lift">Lift</button>\n    <button data-hover="scale">Scale</button>\n    <button data-hover="glow">Glow</button>\n    <button data-hover="pop">Pop</button>\n    <button data-hover="dim">Dim</button>\n    <button data-hover="bright">Bright</button>\n  </div>\n`);',label:"Hover effects"})}

    <!-- ── FORMS ─────────────────────────────────────── -->
    <h3>Forms</h3>
    <p>
      All form controls are full-width by default.
      Wrap in a <code>&lt;label&gt;</code> for accessible pairing.
    </p>

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.75rem;max-width:400px">\n    <label>Username<input type="text" placeholder="Enter username" /></label>\n    <label>Email<input type="email" placeholder="you@example.com" /></label>\n    <label>Bio<textarea placeholder="Tell us about yourself"></textarea></label>\n    <label>Country\n      <select>\n        <option>United States</option>\n        <option>Canada</option>\n        <option>United Kingdom</option>\n      </select>\n    </label>\n  </div>\n`);',label:"Text inputs"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <input type="text" data-size="sm" placeholder="Small input" />\n    <input type="text" placeholder="Default input" />\n    <input type="text" data-size="lg" placeholder="Large input" />\n  </div>\n`);',label:"Input sizes"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <label><input type="checkbox" checked /> Remember me</label>\n    <label><input type="checkbox" /> Subscribe to newsletter</label>\n    <label><input type="radio" name="plan" checked /> Free</label>\n    <label><input type="radio" name="plan" /> Pro</label>\n  </div>\n`);',label:"Checkboxes & radios"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <label><input type="checkbox" role="switch" checked /> Enable notifications</label>\n    <label><input type="checkbox" role="switch" /> Dark mode</label>\n    <label>Volume<input type="range" min="0" max="100" value="60" /></label>\n  </div>\n`);',label:"Switches & ranges"})}

    ${ce({source:'document.body.append(html`\n  <fieldset style="max-width:400px">\n    <legend>Preferences</legend>\n    <label><input type="checkbox" checked /> Email notifications</label>\n    <label><input type="checkbox" /> Weekly digest</label>\n  </fieldset>\n`);',label:"Fieldset"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <label>\n      Email (invalid)\n      <input type="email" aria-invalid="true" value="not-an-email" />\n    </label>\n    <label>\n      Username (disabled)\n      <input type="text" disabled value="admin" />\n    </label>\n  </div>\n`);',label:"Validation states"})}

    <!-- ── CARDS ─────────────────────────────────────── -->
    <h3>Cards</h3>
    <p>
      <code>article[data-card]</code> creates card layout. Add a
      <code>&lt;header&gt;</code> or <code>&lt;footer&gt;</code> for structured cards.
    </p>

    ${ce({source:'document.body.append(html`\n  <article data-card style="max-width:280px">\n    <h4>Simple card</h4>\n    <p>Card content with some descriptive text goes here.</p>\n    <button data-color-variant="primary">Action</button>\n  </article>\n`);'})}

    ${ce({source:'document.body.append(html`\n  <article data-card style="max-width:320px">\n    <header><h5>Card with header &amp; footer</h5></header>\n    <p>Content area of the card. Padding is applied automatically.</p>\n    <footer>\n      <button data-style-variant="ghost">Cancel</button>\n      <button data-color-variant="primary">Save</button>\n    </footer>\n  </article>\n`);'})}

    <p>Use a <code>&lt;dl&gt;</code> inside a card for stat displays:</p>
    ${ce({source:'document.body.append(html`\n  <div data-grid style="max-width:420px">\n    <article data-card><dl><dt>Users</dt><dd>12,048</dd></dl></article>\n    <article data-card><dl><dt>Revenue</dt><dd>$4,200</dd></dl></article>\n  </div>\n`);',label:"Stat cards"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;gap:1rem;flex-wrap:wrap">\n    <article data-card data-hover="lift" style="padding:1rem;min-width:140px">\n      <h6>Lift</h6><p>Hover me</p>\n    </article>\n    <article data-card data-hover="glow" style="padding:1rem;min-width:140px">\n      <h6>Glow</h6><p>Hover me</p>\n    </article>\n    <article data-card data-hover="scale" style="padding:1rem;min-width:140px">\n      <h6>Scale</h6><p>Hover me</p>\n    </article>\n  </div>\n`);',label:"Card hover effects"})}

    <!-- ── LAYOUT ────────────────────────────────────── -->
    <h3>Layout</h3>

    ${ce({source:'document.body.append(html`\n  <div data-grid>\n    <article data-card style="padding:1rem"><p>Column 1</p></article>\n    <article data-card style="padding:1rem"><p>Column 2</p></article>\n    <article data-card style="padding:1rem"><p>Column 3</p></article>\n  </div>\n`);',label:"Auto grid"})}

    ${ce({source:'document.body.append(html`\n  <div data-grid data-cols="2">\n    <article data-card style="padding:1rem"><p>Col A</p></article>\n    <article data-card style="padding:1rem"><p>Col B</p></article>\n  </div>\n`);',label:"2-column grid"})}

    ${ce({source:'document.body.append(html`\n  <div data-layout="sidebar" style="min-height:100px">\n    <aside style="background:var(--vk-color-surface-2);padding:1rem"><p>Sidebar</p></aside>\n    <main style="background:var(--vk-color-surface);padding:1rem"><p>Main content</p></main>\n  </div>\n`);',label:"Sidebar layout"})}

    <!-- ── NAVIGATION ────────────────────────────────── -->
    <h3>Navigation</h3>

    ${ce({source:'document.body.append(html`\n  <nav>\n    <a href="#" aria-current="page">Home</a>\n    <a href="#">Docs</a>\n    <a href="#">Examples</a>\n    <a href="#">About</a>\n  </nav>\n`);',label:"Nav bar"})}

    ${ce({source:'document.body.append(html`\n  <nav aria-label="breadcrumb">\n    <ol>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">Docs</a></li>\n      <li><a href="#">VanillaCSS</a></li>\n    </ol>\n  </nav>\n`);',label:"Breadcrumb"})}

    ${ce({source:'document.body.append(html`\n  <nav aria-label="pagination">\n    <ul>\n      <li><a href="#">‹</a></li>\n      <li><a href="#">1</a></li>\n      <li><a href="#" aria-current="page">2</a></li>\n      <li><a href="#">3</a></li>\n      <li><a href="#">›</a></li>\n    </ul>\n  </nav>\n`);',label:"Pagination"})}

    <!-- ── ALERTS & FEEDBACK ─────────────────────────── -->
    <h3>Alerts &amp; Feedback</h3>

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <div role="alert">Default — informational message</div>\n    <div role="alert" data-color-variant="danger">Danger: something went wrong</div>\n    <div role="alert" data-color-variant="success">Success: changes saved</div>\n    <div role="alert" data-color-variant="warning">Warning: action cannot be undone</div>\n    <div role="alert" data-color-variant="info">Info: a new version is available</div>\n    <div role="alert" data-color-variant="primary">Primary: featured announcement</div>\n  </div>\n`);',label:"Alert variants"})}

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <progress value="35" max="100"></progress>\n    <progress value="70" max="100"></progress>\n  </div>\n`);',label:"Progress bars"})}

    <p>Skeleton loading — apply <code>data-skeleton</code> to any element:</p>
    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <p data-skeleton style="width:60%;height:1em"></p>\n    <p data-skeleton style="width:40%;height:1em"></p>\n    <p data-skeleton style="width:80%;height:1em"></p>\n  </div>\n`);',label:"Skeleton loading"})}

    <!-- ── BADGES & TAGS ─────────────────────────────── -->
    <h3>Badges &amp; Tags</h3>

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center">\n    <span data-badge>Default</span>\n    <span data-badge data-color-variant="primary">Primary</span>\n    <span data-badge data-color-variant="danger">Danger</span>\n    <span data-badge data-color-variant="success">Success</span>\n    <span data-badge data-color-variant="warning">Warning</span>\n    <span data-badge data-color-variant="info">Info</span>\n  </div>\n`);',label:"Badge variants"})}

    ${ce({source:"document.body.append(html`\n  <ul data-tags>\n    <li>TypeScript</li>\n    <li>CSS</li>\n    <li>Vanilla JS</li>\n    <li>HTML</li>\n    <li>Progressive enhancement</li>\n  </ul>\n`);",label:"Tags"})}

    <!-- ── TABLES ────────────────────────────────────── -->
    <h3>Tables</h3>

    ${ce({source:'document.body.append(html`\n  <table>\n    <thead>\n      <tr>\n        <th aria-sort="ascending">Name</th>\n        <th>Role</th>\n        <th>Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Alice Chen</td><td>Engineer</td>\n        <td><span data-badge data-color-variant="success">Active</span></td>\n      </tr>\n      <tr>\n        <td>Bob Smith</td><td>Designer</td>\n        <td><span data-badge data-color-variant="success">Active</span></td>\n      </tr>\n      <tr>\n        <td>Carol White</td><td>Manager</td>\n        <td><span data-badge data-color-variant="warning">Away</span></td>\n      </tr>\n    </tbody>\n  </table>\n`);'})}

    <!-- ── TIMELINE ──────────────────────────────────── -->
    <h3>Timeline</h3>

    ${ce({source:"document.body.append(html`\n  <ol data-timeline>\n    <li>\n      <strong>Project kickoff</strong>\n      <p>Team assembled, requirements defined</p>\n    </li>\n    <li>\n      <strong>Design phase</strong>\n      <p>Wireframes and prototypes completed</p>\n    </li>\n    <li>\n      <strong>Development</strong>\n      <p>Implementation in progress</p>\n    </li>\n  </ol>\n`);"})}

    <!-- ── TABS ──────────────────────────────────────── -->
    <h3>Tabs</h3>
    <p>
      Styled via <code>role="tablist"</code> and <code>role="tab"</code>.
      Use <code>aria-selected="true"</code> on the active tab.
    </p>

    ${ce({source:'document.body.append(html`\n  <div>\n    <div role="tablist">\n      <button role="tab" aria-selected="true">Overview</button>\n      <button role="tab" aria-selected="false">API</button>\n      <button role="tab" aria-selected="false">Examples</button>\n    </div>\n    <div role="tabpanel"><p>Active panel content shown here.</p></div>\n  </div>\n`);'})}

    <!-- ── ACCORDION ─────────────────────────────────── -->
    <h3>Accordion</h3>
    <p>
      Uses native <code>&lt;details&gt;</code> — no JavaScript needed.
      Stack adjacently to merge borders automatically.
    </p>

    ${ce({source:"document.body.append(html`\n  <div>\n    <details>\n      <summary>What is VanillaCSS?</summary>\n      <p>A classless CSS framework that styles semantic HTML without class names.</p>\n    </details>\n    <details open>\n      <summary>How do I customize it?</summary>\n      <p>Override <code>--vk-*</code> custom properties in your own stylesheet.</p>\n    </details>\n    <details>\n      <summary>Does it need JavaScript?</summary>\n      <p>No — CSS-only usage is fully functional.</p>\n    </details>\n  </div>\n`);"})}

    <!-- ── DROPDOWN ──────────────────────────────────── -->
    <h3>Dropdown</h3>
    <p>
      Add <code>data-dropdown</code> to a <code>&lt;details&gt;</code>
      for absolute-positioned menus.
    </p>

    ${ce({source:'document.body.append(html`\n  <details data-dropdown>\n    <summary><button>Options ▾</button></summary>\n    <ul>\n      <li><a href="#">Profile</a></li>\n      <li><a href="#">Settings</a></li>\n      <li><a href="#">Sign out</a></li>\n    </ul>\n  </details>\n`);'})}

    <!-- ── DIALOG ────────────────────────────────────── -->
    <h3>Dialog</h3>
    <p>
      Styled via the native <code>&lt;dialog&gt;</code> element.
      Open with <code>dialogEl.showModal()</code> for a modal with backdrop,
      or <code>.show()</code> for modeless.
    </p>

    ${ce({source:'document.body.append(html`\n  <dialog open style="position:relative;inset:auto;margin:0;max-width:100%">\n    <header><h4>Confirm delete</h4></header>\n    <p>This will permanently delete the item. This action cannot be undone.</p>\n    <footer>\n      <button data-style-variant="ghost">Cancel</button>\n      <button data-color-variant="danger">Delete</button>\n    </footer>\n  </dialog>\n`);',label:"Static preview (open)"})}

    ${ve('// Open as modal (with backdrop)\nconst dialog = document.querySelector("dialog");\ndialog.showModal();\n\n// Close\ndialog.close();',"javascript")}

    <!-- ── TOOLTIP ───────────────────────────────────── -->
    <h3>Tooltip</h3>
    <p>
      CSS-only tooltips via <code>data-tooltip</code>.
      Appears above the element on hover or focus.
    </p>

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-tooltip="Copy to clipboard">Copy</button>\n    <button data-tooltip="Open in a new tab" data-color-variant="primary">Open</button>\n    <abbr data-tooltip="HyperText Markup Language">HTML</abbr>\n  </div>\n`);'})}

    <!-- ── POPOVER ───────────────────────────────────── -->
    <h3>Popover</h3>
    <p>
      Styled via the <code>[popover]</code> attribute. Uses the native Popover
      API — no extra JavaScript needed for basic show/hide.
    </p>

    ${ce({source:'document.body.append(html`\n  <div style="display:flex;gap:.75rem;align-items:center">\n    <button popovertarget="vk-pop-demo">Show tip ▾</button>\n    <div popover id="vk-pop-demo" style="margin:0;top:auto;left:auto">\n      <strong>Quick tip</strong>\n      <p>Use CSS sub-layers to override styles without specificity battles.</p>\n    </div>\n    <small style="opacity:.6">Click the button to open</small>\n  </div>\n`);',label:"Popover"})}

  </section>`},"vanillacss-tokens":function(){return y`<section>
    <h2>Token Reference</h2>
    <p>
      All <code>--vk-*</code> custom properties. Override any token in your own
      stylesheet — unlayered declarations automatically beat
      <code>@layer vanillacss.tokens</code>.
    </p>
    ${ve(":root {\n  --vk-color-accent: hsl(220 80% 60%);  /* override a single token */\n}","css")}

    <h3>Palette</h3>
    <p>
      Raw HSL channels — use with <code>hsl(var(--vk-*)).</code> This lets you
      apply arbitrary opacity: <code>hsl(var(--vk-gold) / 0.5)</code>.
    </p>
    <table>
      <thead>
        <tr><th>Variable</th><th>Value</th><th>Description</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-gray-0","36 10% 98%","Near-white warm gray")}
        ${Ne("--vk-gray-1","36 8% 94%","Light surface")}
        ${Ne("--vk-gray-2","240 6% 85%","Borders (light)")}
        ${Ne("--vk-gray-3","240 4% 70%","Muted surface")}
        ${Ne("--vk-gray-4","255 2% 55%","Muted text")}
        ${Ne("--vk-gray-5","240 4% 35%","Mid gray")}
        ${Ne("--vk-gray-6","240 8% 22%","Dark surface")}
        ${Ne("--vk-gray-7","240 8% 14%","Deeper surface")}
        ${Ne("--vk-gray-8","240 8% 10%","Near-black (body text, light)")}
        ${Ne("--vk-gray-9","240 8% 5%","True dark background")}
        ${Ne("--vk-gold","47 78% 59%","Default accent hue")}
        ${Ne("--vk-green","151 76% 62%","Success hue")}
        ${Ne("--vk-yellow","45 90% 58%","Warning hue")}
        ${Ne("--vk-red","0 76% 62%","Danger hue")}
        ${Ne("--vk-blue","225 76% 62%","Info hue")}
        ${Ne("--vk-purple","270 60% 62%","Purple hue")}
      </tbody>
    </table>

    <h3>Semantic colors</h3>
    <p>
      These are the values you should override for theming. They are aliased
      from the palette and switch automatically between dark and light mode.
    </p>
    <table>
      <thead>
        <tr><th>Variable</th><th>Light default</th><th>Usage</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-color-bg","hsl(--vk-gray-0)","Page background")}
        ${Ne("--vk-color-surface","hsl(--vk-gray-1)","Card / panel background")}
        ${Ne("--vk-color-surface-2","hsl(--vk-gray-2)","Nested surface, code block bg")}
        ${Ne("--vk-color-surface-3","hsl(--vk-gray-3)","kbd, switch track, deep nested")}
        ${Ne("--vk-color-border","hsl(--vk-gray-2)","All borders")}
        ${Ne("--vk-color-text","hsl(--vk-gray-8)","Body text")}
        ${Ne("--vk-color-text-muted","hsl(--vk-gray-4)","Subtext, placeholders, labels")}
        ${Ne("--vk-color-link","hsl(--vk-gold)","Link color (alias of accent)")}
        ${Ne("--vk-color-accent","hsl(--vk-gold)","Primary accent — links, active states, focus rings")}
        ${Ne("--vk-color-accent-dim","hsl(--vk-gold / 0.18)","Accent tint for backgrounds")}
        ${Ne("--vk-color-danger","hsl(--vk-red)","Error / destructive")}
        ${Ne("--vk-color-danger-dim","hsl(--vk-red / 0.12)","Danger tint")}
        ${Ne("--vk-color-success","hsl(--vk-green)","Positive / confirmed")}
        ${Ne("--vk-color-success-dim","hsl(--vk-green / 0.12)","Success tint")}
        ${Ne("--vk-color-warning","hsl(--vk-yellow)","Caution / in-progress")}
        ${Ne("--vk-color-warning-dim","hsl(--vk-yellow / 0.12)","Warning tint")}
        ${Ne("--vk-color-info","hsl(--vk-blue)","Neutral informational")}
        ${Ne("--vk-color-info-dim","hsl(--vk-blue / 0.12)","Info tint")}
      </tbody>
    </table>

    <h3>Typography</h3>
    <table>
      <thead>
        <tr><th>Variable</th><th>Default</th><th>Usage</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-font-body","system-ui, -apple-system, 'Segoe UI', sans-serif","Body font stack")}
        ${Ne("--vk-font-mono","ui-monospace, 'Cascadia Code', 'Fira Code', monospace","Code / mono font stack")}
        ${Ne("--vk-font-size-sm","0.875rem","Small text, labels, nav")}
        ${Ne("--vk-font-size-base","1rem","Body text")}
        ${Ne("--vk-font-size-lg","1.125rem","Large text, hero subtitle")}
        ${Ne("--vk-font-size-xl","1.25rem","h4")}
        ${Ne("--vk-font-size-2xl","1.5rem","h3")}
        ${Ne("--vk-font-size-3xl","2rem","h2, card stat dd")}
        ${Ne("--vk-font-size-4xl","2.5rem","h1")}
        ${Ne("--vk-line-height","1.6","Body line height")}
        ${Ne("--vk-line-height-tight","1.2","Heading line height")}
      </tbody>
    </table>

    <h3>Spacing</h3>
    <table>
      <thead>
        <tr><th>Variable</th><th>Default</th><th>Usage</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-space-xs","0.25rem","Tight gaps, marker margins")}
        ${Ne("--vk-space-sm","0.5rem","Component inner padding")}
        ${Ne("--vk-space-md","1rem","Standard spacing, paragraph margin")}
        ${Ne("--vk-space-lg","1.5rem","Section padding, card padding")}
        ${Ne("--vk-space-xl","2.5rem","Section margin, header block")}
        ${Ne("--vk-space-2xl","4rem","Hero padding, top-level gaps")}
      </tbody>
    </table>

    <h3>Radii</h3>
    <table>
      <thead>
        <tr><th>Variable</th><th>Default</th><th>Usage</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-radius-sm","4px","Tags, badges, marks, kbd, small inputs")}
        ${Ne("--vk-radius-md","8px","Buttons, inputs, cards, dialogs")}
        ${Ne("--vk-radius-lg","12px","Dialog, large surfaces")}
        ${Ne("--vk-radius-full","9999px","Pill buttons, switches, avatars, progress")}
      </tbody>
    </table>

    <h3>Shadows</h3>
    <table>
      <thead>
        <tr><th>Variable</th><th>Default</th><th>Usage</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-shadow-sm","0 1px 3px hsl(0 0% 0% / 0.08)","Subtle elevation — range thumb")}
        ${Ne("--vk-shadow-md","0 4px 12px hsl(0 0% 0% / 0.1)","Dropdowns, popovers, lifted cards")}
        ${Ne("--vk-shadow-lg","0 8px 30px hsl(0 0% 0% / 0.12)","Dialogs, toasts")}
      </tbody>
    </table>

    <h3>Easing</h3>
    <table>
      <thead>
        <tr><th>Variable</th><th>Default</th><th>Usage</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-ease-default","cubic-bezier(0.4, 0, 0.2, 1)","Standard motion — all transitions")}
        ${Ne("--vk-ease-bounce","cubic-bezier(0.34, 1.56, 0.64, 1)","Playful entrance — available for custom use")}
      </tbody>
    </table>

    <h3>Z-index scale</h3>
    <table>
      <thead>
        <tr><th>Variable</th><th>Default</th><th>Usage</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-z-dropdown","100","Dropdown menus, tooltips")}
        ${Ne("--vk-z-sticky","200","Sticky headers, floating elements")}
        ${Ne("--vk-z-modal","300","Modals, overlays")}
        ${Ne("--vk-z-toast","400","Toast notifications — always on top")}
      </tbody>
    </table>

    <h3>Config</h3>
    <p>
      Config variables propagate globally — changing one updates every
      component that uses it.
    </p>
    <table>
      <thead>
        <tr><th>Variable</th><th>Default</th><th>Controls</th></tr>
      </thead>
      <tbody>
        ${Ne("--vk-font-size-root","100%","font-size on <html> — scales all rem values across the page")}
        ${Ne("--vk-transition-speed","0.15s","All hover, focus, and color transitions")}
        ${Ne("--vk-transition-speed-slow","0.2s","Switch toggle slide, progress bar fill, accordion icon rotation")}
        ${Ne("--vk-animation-speed","0.2s","Dialog and overlay entrance keyframe duration")}
        ${Ne("--vk-container-max-width","72rem","<main> max-width")}
        ${Ne("--vk-sidebar-width","200px",'[data-layout="sidebar"] first column width')}
      </tbody>
    </table>
  </section>`},components:function(){return y`<section>
    <h2>Components</h2>
    <p>
      There's no special component API. A component is just a function that
      returns a DOM node. Call it, get a node, append it wherever you want.
    </p>

    ${ce({source:pe,label:"Counter component"})}

    <h3>Passing data (props)</h3>
    <p>
      Props are just function arguments. Pass signals for reactive data, or
      plain values for static data.
    </p>

    ${ce({source:'\nimport { html, css } from "vanillakit";\n\nconst UserComponent = ({ name, role }) => {\n  return html`\n    <article>\n      <h3 style="margin:0 0 4px; font-size:0.95rem;">${name}</h3>\n      <p>${role}</p>\n    </article>\n  `;\n}\n\ndocument.body.append(html`\n  <div style="display:flex; gap: 1rem; flex-wrap:wrap;">\n    ${UserComponent({ name: "Ada", role: "Engineer" })}\n    ${UserComponent({ name: "Grace", role: "Admiral" })}\n    ${UserComponent({ name: "Alan", role: "Mathematician" })}\n  </div>\n`);',label:"UserCard component"})}

    <h3>Reactive props</h3>
    <p>
      Pass signals as props for reactive data flow. The child component updates
      automatically when the parent signal changes — no re-rendering, no prop
      diffing.
    </p>

    ${ce({source:'\nimport { signal, html } from "vanillakit";\n\nconst Greeting = ({ name, color }) => {\n  return html`\n    <p style=${() => `color: ${color()};`}>\n      Hello, ${name}!\n    </p>\n  `;\n}\n\nconst userName = signal("Ada");\nconst userColor = signal("#e8c547");\n\ndocument.body.append(html`\n  <div>\n    ${Greeting({ name: userName, color: userColor })}\n    <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">\n      <input value=${userName} oninput=${(e) => userName(e.target.value)}\n        placeholder="Name" style="max-width:200px;" />\n      <input type="color" value=${userColor} oninput=${(e) => userColor(e.target.value)}\n        style="width:40px; height:34px; border:none; cursor:pointer;" />\n    </div>\n  </div>\n`);\n',label:"Reactive props — type a name or pick a color"})}

    <h3>Children / composition</h3>
    <p>
      Since components return DOM nodes, compose them by nesting in
      <code>html\`\`</code>:
    </p>

    ${ce({source:'\nimport { html } from "vanillakit";\n\nconst ChildComponent = () => html`<p>This is a child component.</p>`;\n\ndocument.body.append(html`\n  <div>\n    <h1>Parent Component</h1>\n    ${ChildComponent()}\n  </div>\n`);\n',label:"Layout component with children"})}

    <p>Or pass children as arguments:</p>

    ${ce({source:'\nimport { html, css } from "vanillakit";\n\nconst Layout = (title, ...children) => {\n  return html`\n    <div class=${css`max-width: 800px; margin: 0 auto; padding: 24px;`}>\n      <h1>${title}</h1>\n      ${children}\n    </div>\n  `;\n}\n\nconst Child1 = () => html`<p>This is the first child component.</p>`;\nconst Child2 = () => html`<p>This is the second child component.</p>`;\n\nconst App = () => {\n  return Layout("My App",\n    Child1(),\n    Child2(),\n    html`<p>This is a child passed directly as an argument.</p>`\n  );\n}\n\ndocument.body.append(App());\n',label:"Direct children via arguments"})}
  </section>`},reactivity:function(){return y`<section>
    <h2>Reactivity</h2>
    <p>
      Reactivity in vanillakit is built on signals — tiny observable values that
      automatically track which effects and computations depend on them.
    </p>

    <h3>Signals</h3>
    <p>
      A signal holds a value. Read it by calling with no args (and subscribe to
      changes). Write by calling with a value or updater function.
    </p>
    ${ve('import { signal, effect } from "vanillakit";\n\nconst count = signal(0);\n\n// Reading inside an effect creates a subscription\neffect(() => {\n  console.log("count is", count());\n});\n\ncount(1);          // effect re-runs → "count is 1"\ncount(n => n + 1); // effect re-runs → "count is 2"')} ${ce({source:'import { signal, effect, html, css, cx } from "vanillakit";\n\nconst count = signal(0);\nconst log = signal([]);\n\neffect(() => {\n  const v = count();\n  log(l => [...l.slice(-4), `count is ${v}`]);\n});\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n      <button onclick=${() => count(0)}>Reset</button>\n      <span style="font-family:monospace;">count = ${count}</span>\n    </div>\n    <div style="font-family:monospace; font-size:0.8rem; color:gray; line-height:1.6;">\n      ${() => log().map(l => html`<div>→ ${l}</div>`)}\n    </div>\n  </div>\n`);',label:"Signal — click to update, watch the effect log"})}

    <h3>Computed values</h3>
    <p>
      <code>computed</code> derives a read-only signal from others. It only
      recalculates when its dependencies change.
    </p>
    ${ve('import { signal, computed } from "vanillakit";\n\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ntotal(); // 30\nqty(5);\ntotal(); // 50')} ${ce({source:'import { signal, computed, html } from "vanillakit";\n\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label>Price:\n      <input type="number" value=${() => price()}\n        oninput=${(e) => price(+e.target.value)} style="width:80px;" />\n    </label>\n    <label>Qty:\n      <input type="number" value=${() => qty()}\n        oninput=${(e) => qty(+e.target.value)} style="width:80px;" />\n    </label>\n    <span style="font-weight:700;">Total: $${total}</span>\n  </div>\n`);',label:"Computed — derived value updates automatically"})}

    <h3>Batching</h3>
    <p>
      Multiple signal writes inside <code>batch()</code> are grouped — effects
      run once at the end, not after each write.
    </p>
    ${ve('import { signal, effect, batch } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + b()));\n// logs: 3\n\nbatch(() => { a(10); b(20); });\n// logs: 30 (once, not twice)')} ${ce({source:'import { signal, computed, batch, html } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\nconst runCount = signal(0);\nconst sum = computed(() => { runCount(n => n + 1); return a() + b(); });\n\ndocument.body.append(html`\n  <div>\n    <div style="margin-bottom:10px; font-family:monospace;">\n      a=${a} b=${b} sum=${sum} (computed ran ${runCount}×)\n    </div>\n    <button onclick=${() => { a(n => n + 1); b(n => n + 1); }}>\n      a++ b++ (no batch, 2 runs)\n    </button>\n    <button onclick=${() => batch(() => { a(n => n + 1); b(n => n + 1); })}>\n      a++ b++ (batched, 1 run)\n    </button>\n    <button onclick=${() => { a(1); b(2); runCount(0); }}>Reset</button>\n  </div>\n`);',label:"Batch — grouped writes, single recomputation"})}

    <h3>Reactive proxies</h3>
    <p>
      For complex state, <code>reactive()</code> wraps objects in deep proxies.
      Mutate normally — changes propagate automatically.
    </p>
    ${ve('import { reactive, effect, snapshot } from "vanillakit";\n\nconst state = reactive({\n  user: { name: "Ada", scores: [95, 87] },\n});\n\neffect(() => console.log(state.user.name));\n// logs: "Ada"\n\nstate.user.name = "Grace";\n// logs: "Grace"\n\nstate.user.scores.push(92); // also tracked')}

    <h3>vs. React / Vue / Solid</h3>
    <p>
      If you're coming from React, signals replace <code>useState</code> and
      <code>useMemo</code>. From Vue, they replace <code>ref</code> and
      <code>computed</code>. The key difference: signals are standalone values,
      not tied to a component lifecycle. They work anywhere — module scope,
      inside functions, in event handlers.
    </p>
  </section>`},"data-fetching":function(){return y`<section>
    <h2>Data Fetching</h2>
    <p>
      There's no special data fetching API. Use <code>fetch</code> (or any HTTP
      client) and store results in signals. Effects react to loading/error/data
      state changes.
    </p>

    <h3>Basic fetch</h3>
    ${ve('import { signal, html } from "vanillakit";\n\nconst users = signal([]);\nconst loading = signal(true);\nconst error = signal(null);\n\nfetch("/api/users")\n  .then(r => r.json())\n  .then(data => { users(data); loading(false); })\n  .catch(err => { error(err.message); loading(false); });\n\ndocument.body.append(html`\n  <div>\n    ${() => {\n      if (loading()) return html`<p>Loading...</p>`;\n      if (error()) return html`<p style="color:red">${error()}</p>`;\n      return html`<ul>${() => users().map(u => html`<li>${u.name}</li>`)}</ul>`;\n    }}\n  </div>\n`);')}

    <h3>Reusable fetch helper</h3>
    <p>
      Wrap fetch logic in a function that returns signals — the vanillakit
      equivalent of a custom hook.
    </p>
    ${ve('function useFetch(url) {\n  const data = signal(null);\n  const loading = signal(true);\n  const error = signal(null);\n\n  fetch(url)\n    .then(r => r.json())\n    .then(d => { data(d); loading(false); })\n    .catch(e => { error(e.message); loading(false); });\n\n  return { data, loading, error };\n}\n\n// Use it anywhere\nconst { data: todos, loading } = useFetch("/api/todos");\n\ndocument.body.append(html`\n  <div>\n    ${() => loading()\n      ? html`<p>Loading...</p>`\n      : html`<ul>\n          ${() => todos().map(t => html`<li>${t.text}</li>`)}\n        </ul>`\n    }\n  </div>\n`);')}

    <h3>Reactive refetch</h3>
    <p>Use <code>effect</code> to refetch when a signal changes:</p>
    ${ve('import { signal, effect } from "vanillakit";\n\nconst page = signal(1);\nconst items = signal([]);\n\neffect(() => {\n  const p = page();\n  fetch(`/api/items?page=${p}`)\n    .then(r => r.json())\n    .then(data => items(data));\n});\n\n// Changing page triggers a refetch\npage(2);')}
  </section>`},conditional:function(){return y`<section>
    <h2>Conditional Rendering</h2>
    <p>
      In <code>html\`\`</code>, use a function that returns different nodes (or
      <code>null</code>) based on signal values. The DOM updates surgically when
      conditions change.
    </p>

    <h3>Show / hide</h3>
    ${ce({source:'import { signal, html } from "vanillakit";\n\nconst loggedIn = signal(false);\n\ndocument.body.append(html`\n  <div>\n    ${() => loggedIn()\n      ? html`<div style="display:flex; align-items:center; gap:12px;">\n          <span style="color:gold; font-weight:600;">Welcome back!</span>\n          <button onclick=${() => loggedIn(false)}>Log out</button>\n        </div>`\n      : html`<button onclick=${() => loggedIn(true)}>Log in</button>`\n    }\n  </div>\n`);',label:"Show/hide — toggle login state"})}

    <h3>Multiple conditions</h3>
    ${ce({source:'import { signal, html } from "vanillakit";\n\nconst status = signal("idle"); // "idle" | "loading" | "error" | "done"\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; margin-bottom:12px;">\n      <button onclick=${() => status("idle")}>Idle</button>\n      <button onclick=${() => status("loading")}>Loading</button>\n      <button onclick=${() => status("error")}>Error</button>\n      <button onclick=${() => status("done")}>Done</button>\n    </div>\n    <div style="font-size:1rem; font-weight:600;">\n      ${() => {\n        switch (status()) {\n          case "loading": return html`<span>Loading...</span>`;\n          case "error":   return html`<span style="color:red;">Error!</span>`;\n          case "done":    return html`<span style="color:green;">Done ✓</span>`;\n          default:        return html`<span>Ready.</span>`;\n        }\n      }}\n    </div>\n  </div>\n`);',label:"Switch — click buttons to change status"})}

    <h3>vs. React / Vue</h3>
    <p>
      React uses JSX ternaries or early returns. Vue uses <code>v-if</code> /
      <code>v-else</code>. vanillakit uses plain JS functions — return a DOM
      node or <code>null</code>. There's no template syntax to learn.
    </p>
  </section>`},lists:function(){return y`<section>
    <h2>Lists &amp; Keys</h2>
    <p>
      Use <code>each()</code> for keyed list rendering. DOM nodes are reused by
      key across updates — input state, scroll position, and focus are
      preserved.
    </p>

    <h3>Basic list</h3>
    ${ce({source:'import { signal, each, html, css } from "vanillakit";\n\nlet nextId = 4;\nconst items = signal([\n  { id: 1, label: "Alpha" },\n  { id: 2, label: "Bravo" },\n  { id: 3, label: "Charlie" },\n]);\n\nconst itemStyle = css`\n  display: flex; align-items: center; gap: 8px;\n  padding: 6px 10px; border-radius: 6px;\n  background: var(--vk-color-bg); border: 1px solid var(--vk-color-border);\n  font-size: 0.85rem; font-family: monospace;\n`;\n\nconst names = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"];\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; margin-bottom:12px;">\n      <button onclick=${() => items(l =>\n        [...l, { id: nextId++, label: names[(nextId - 5) % names.length] }]\n      )}>Add item</button>\n      <button onclick=${() => items(l => [...l].reverse())}>Reverse</button>\n      <button onclick=${() => items(l => l.slice(0, -1))}>Remove last</button>\n    </div>\n    <div style="display:flex; flex-direction:column; gap:6px;">\n      ${each(items, i => i.id, (itemSig, indexSig) =>\n        html`<div class=${itemStyle}>\n          <span style="color:gray;">#${indexSig}</span>\n          <span>${() => itemSig().label}</span>\n          <button style="margin-left:auto; background:none; border:none; color:gray; cursor:pointer;"\n            onclick=${() => items(l => l.filter(i => i.id !== itemSig().id))}>✕</button>\n        </div>`,\n      )}\n    </div>\n  </div>\n`);',label:"Keyed list — add, remove, reverse"})}

    <h3>Adding, removing, reordering</h3>
    <p>
      Mutate the signal array — <code>each()</code> diffs by key and
      moves/creates/removes DOM nodes efficiently.
    </p>
    ${ve('// Add\nitems(list => [...list, { id: 4, label: "Delta" }]);\n\n// Remove\nitems(list => list.filter(i => i.id !== 2));\n\n// Reorder (DOM nodes are moved, not recreated)\nitems(list => [...list].reverse());\n\n// Update an item (the itemSig in the render function updates)\nitems(list => list.map(i =>\n  i.id === 1 ? { ...i, label: "Updated" } : i\n));')}

    <h3>Why keys matter</h3>
    <p>
      Without keys, reordering a list destroys and recreates every DOM node.
      With keys, <code>each()</code> matches old and new items by key and reuses
      existing nodes — preserving input values, focus, animations, etc.
    </p>

    <h3>vs. React / Vue</h3>
    <p>
      React's <code>key</code> prop on <code>map()</code> and Vue's
      <code>:key</code> on <code>v-for</code> serve the same purpose.
      <code>each()</code> combines the list rendering and key matching into one
      call. Each item is passed as a signal, so individual item updates don't
      re-run the render for other items.
    </p>
  </section>`},forms:function(){return y`<section>
    <h2>Forms</h2>
    <p>
      Bind form inputs to signals for two-way data binding. Use
      <code>value</code> with a reactive function and <code>oninput</code> to
      write back.
    </p>

    <h3>Text input</h3>
    ${ce({source:'import { signal, html } from "vanillakit";\n\nconst name = signal("");\n\ndocument.body.append(html`\n  <div>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)}\n      placeholder="Your name" style="max-width:240px; margin-bottom:10px;" />\n    <p style="font-size:1rem; font-weight:600;">Hello, ${() => name() || "…"}!</p>\n  </div>\n`);',label:"Two-way binding — type to see it update"})}

    <h3>Checkbox</h3>
    ${ce({source:'import { signal, html } from "vanillakit";\n\nconst agreed = signal(false);\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">\n      <input type="checkbox" checked=${() => agreed()}\n        onchange=${(e) => agreed(e.target.checked)} />\n      I agree to the terms\n    </label>\n    <button disabled=${() => !agreed()}\n      style=${() => !agreed() ? "opacity:0.4; cursor:not-allowed;" : ""}>\n      Submit\n    </button>\n  </div>\n`);',label:"Checkbox — toggle to enable the button"})}

    <h3>Select</h3>
    ${ce({source:'import { signal, html } from "vanillakit";\n\nconst color = signal("blue");\nconst colorMap = { red: "#e45", blue: "#48f", green: "#4c8" };\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px;">\n    <select onchange=${(e) => color(e.target.value)}>\n      <option value="red">Red</option>\n      <option value="blue" selected>Blue</option>\n      <option value="green">Green</option>\n    </select>\n    <span style=${() => `font-weight:700; color:${colorMap[color()]};`}>\n      Chosen: ${color}\n    </span>\n  </div>\n`);',label:"Select — pick a color"})}

    <h3>Form submission</h3>
    ${ve('const form = { name: signal(""), email: signal("") };\n\nhtml`\n  <form onsubmit=${(e) => {\n    e.preventDefault();\n    console.log({ name: form.name(), email: form.email() });\n  }}>\n    <input value=${() => form.name()} oninput=${(e) => form.name(e.target.value)} />\n    <input value=${() => form.email()} oninput=${(e) => form.email(e.target.value)} type="email" />\n    <button type="submit">Submit</button>\n  </form>\n`;')}

    <h3>vs. React / Vue</h3>
    <p>
      React needs <code>useState</code> + <code>onChange</code> for controlled
      inputs. Vue has <code>v-model</code>. vanillakit uses
      <code>value=\${() => sig()}</code> +
      <code>oninput=\${(e) => sig(e.target.value)}</code> — explicit and
      transparent.
    </p>
  </section>`},styling:function(){return y`<section>
    <h2>Styling</h2>
    <p>
      vanillakit includes a CSS-in-JS engine. <code>css\`\`</code> generates
      scoped class names, <code>keyframes\`\`</code> creates animations, and
      <code>globalCss\`\`</code> injects global styles. You can also use
      external CSS, Tailwind, or any other approach.
    </p>

    <h3>Scoped styles</h3>
    ${ce({source:'import { css, html } from "vanillakit";\n\nconst card = css`\n  padding: 16px; background: var(--vk-color-bg);\n  border: 1px solid var(--vk-color-border); border-radius: 8px;\n  transition: border-color 0.15s ease;\n  &:hover { border-color: var(--vk-color-accent); }\n  & .title { font-weight: 700; color: var(--vk-color-accent); }\n  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }\n`;\n\ndocument.body.append(html`\n  <div class=${card}>\n    <span class="title">Styled card</span>\n    <div class="desc">Hover me — the border changes color.</div>\n  </div>\n`);',label:"Scoped CSS — hover the card"})}

    <h3>Dynamic styles</h3>
    <p>
      For styles that change based on signals, use a reactive
      <code>class</code> attribute or inline <code>style</code>:
    </p>
    ${ve('import { signal, html, css } from "vanillakit";\n\nconst active = signal(false);\n\nconst base = css`padding: 8px; border-radius: 6px;`;\nconst highlight = css`background: gold; color: #111;`;\n\n// Reactive class\nhtml`<div class=${() => active() ? cx(base, highlight) : base}>Click me</div>`;\n\n// Reactive inline style\nconst size = signal(16);\nhtml`<p style=${() => `font-size: ${size()}px`}>Resizable text</p>`;')} ${ce({source:'import { signal, html } from "vanillakit";\n\nconst size = signal(16);\n\ndocument.body.append(html`\n  <div>\n    <input type="range" min="10" max="40" value=${() => size()}\n      oninput=${(e) => size(+e.target.value)}\n      style="width:200px; margin-bottom:10px;" />\n    <span style="font-family:monospace; font-size:0.8rem; margin-left:8px;">\n      ${size}px\n    </span>\n    <p style=${() => `font-size: ${size()}px; font-weight: 600; transition: font-size 0.1s;`}>\n      Resizable text\n    </p>\n  </div>\n`);',label:"Dynamic styles — drag the slider"})}

    <h3>Animations</h3>
    ${ve('import { css, keyframes } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`animation: ${spin} 1s linear infinite;`;')} ${ce({source:'import { css, keyframes, html } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`\n  display: inline-block; width: 24px; height: 24px;\n  border: 3px solid var(--vk-color-border); border-top-color: var(--vk-color-accent);\n  border-radius: 50%; animation: ${spin} 0.8s linear infinite;\n`;\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:12px;">\n    <div class=${spinner}></div>\n    <span style="font-size:0.85rem; color:gray;">Spinning via keyframes\\`\\`</span>\n  </div>\n`);',label:"Keyframes animation"})}

    <h3>Combining class names</h3>
    <p><code>cx()</code> joins class names, filtering out falsy values:</p>
    ${ve('import { cx, css } from "vanillakit";\n\nconst base = css`padding: 8px;`;\nconst active = css`color: gold;`;\nconst disabled = false;\n\ncx(base, isActive && active, disabled && "disabled");\n// falsy values are skipped')}

    <h3>vs. React / Vue</h3>
    <p>
      React uses CSS modules, styled-components, or Tailwind. Vue has
      <code>&lt;style scoped&gt;</code>. vanillakit's <code>css\`\`</code> is
      closest to styled-components but returns a class name string instead of
      wrapping components.
    </p>
  </section>`},"routing-concepts":function(){return y`<section>
    <h2>Routing</h2>
    <p>
      vanillakit includes a hash-based SPA router. Routes map path patterns to
      functions that return DOM nodes. The router swaps content reactively when
      the hash changes.
    </p>

    <h3>Basic setup</h3>
    ${ve('import { html, createRouter, navLink, css } from "vanillakit";\n\nconst Router = createRouter({\n  "/":      () => html`<h1>Home</h1>`,\n  "/about": () => html`<h1>About</h1>`,\n  "*":      () => html`<h1>404</h1>`,\n});\n\nconst active = css`color: gold;`;\nconst base = css`color: gray;`;\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);')}

    <h3>Route parameters</h3>
    ${ve('import { createRouter, routeParams, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/user/:id": () => html`\n    <div>\n      <h1>User ${() => routeParams().id}</h1>\n    </div>\n  `,\n});')}

    <h3>Programmatic navigation</h3>
    ${ve('import { navigate } from "vanillakit";\n\n// Navigate from code\nnavigate("/user/42");\n\n// In a click handler\nhtml`<button onclick=${() => navigate("/settings")}>Settings</button>`;')}

    <h3>vs. React Router / Vue Router</h3>
    <p>
      React Router uses <code>&lt;Route&gt;</code> components and hooks. Vue
      Router uses a plugin and <code>&lt;router-view&gt;</code>. vanillakit's
      router is ~60 lines: a plain object mapping paths to functions. No
      providers, no hooks, no wrapping — just call
      <code>createRouter()</code> and drop the result into the DOM.
    </p>
  </section>`},htmx:function(){const e=a(null),t=a(!1),n=a(0),o=a(!1),r=E`
    background: var(--vk-color-surface-2);
    border: 1px solid var(--vk-color-border);
    border-radius: 8px;
    padding: 16px;
    margin: 12px 0;
    font-family: var(--vk-font-mono);
    font-size: 0.82rem;
    line-height: 1.8;
    & .server-row {
      padding: 4px 0;
      color: var(--vk-color-text-muted);
      border-bottom: 1px solid var(--vk-color-border);
      &:last-of-type {
        border-bottom: none;
      }
      & strong {
        color: var(--vk-color-text);
      }
      & em {
        color: var(--vk-color-accent);
        font-style: normal;
      }
    }
    & .island-slot {
      margin-top: 12px;
      padding: 10px;
      border: 1px dashed var(--vk-color-accent);
      border-radius: 6px;
      color: var(--vk-color-accent);
      text-align: center;
    }
  `,s=E`
    margin-top: 12px;
    padding: 16px;
    background: var(--vk-color-accent-dim);
    border: 1px solid var(--vk-color-accent);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  `,l=E`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid var(--vk-color-border);
    border-top-color: var(--vk-color-accent);
    border-radius: 50%;
    animation: ${O`to { transform: rotate(360deg); }`} 0.6s linear infinite;
  `;return y`<section>
    <h2>htmx</h2>
    <p>
      Fetch HTML partials and mount vanillakit reactive islands inside swapped
      content.
    </p>

    <article data-card>
      <h6 class="text-accent">Live demo</h6>
      <p>
        Fetches a real HTML partial from <code>partials/dashboard.html</code>,
        swaps it in, then mounts a vanillakit reactive island inside.
      </p>

      <div style="display:flex;gap:8px;margin:16px 0;flex-wrap:wrap;">
        <span
          data-badge
          ${()=>null!==e()||t()?"":'data-variant="primary"'}
          >1. Click load</span
        >
        <span data-badge ${()=>t()?'data-variant="primary"':""}
          >2. Fetching partial</span
        >
        <span
          data-badge
          ${()=>null===e()||t()?"":'data-variant="primary"'}
          >3. HTML swapped</span
        >
        <span
          data-badge
          ${()=>o()?'data-variant="primary"':""}
          >4. Island mounted</span
        >
      </div>

      <button onclick=${function(){t(!0),o(!1),n(0),fetch("./partials/dashboard.html").then(e=>{if(!e.ok)throw new Error(e.statusText);return e.text()}).then(n=>{e(n),t(!1),o(!0)}).catch(()=>{e('<div class="server-row" style="color:#e45;">Failed to fetch partial — build &amp; serve first</div>'),t(!1)})}}>
        ${()=>t()?y`<span class=${l}></span>`:null!==e()?"Reload from server":'hx-get="/partials/dashboard.html"'}
      </button>

      ${(()=>{const t=document.createElement("div");return t.className=r,t.style.display="none",i(()=>{const n=e();null===n?(t.style.display="none",t.innerHTML=""):(t.innerHTML=n,t.style.display="")}),t})()}

      <div style=${()=>o()?"":"display:none;"}>
        <div class=${s}>
          <span
            style="font-size:0.82rem; color:var(--vk-color-accent); font-family:var(--vk-font-mono);"
          >
            vanillakit island →
          </span>
          <button
            data-variant="primary"
            onclick=${()=>n(e=>e+1)}
          >
            Clicked ${n} times
          </button>
        </div>
      </div>
    </article>

    <section>
      <h3>The partial</h3>
      <p>
        A plain HTML file served as a static asset — on GitHub Pages, a CDN, or
        any server. It contains a <code>[data-vanillakit]</code> mount point for
        the reactive island.
      </p>
      ${ve('\x3c!-- partials/dashboard.html --\x3e\n<div class="server-row"><strong>Dashboard</strong> — loaded via htmx</div>\n<div class="server-row">User: <em>Ada Lovelace</em> | Role: Admin</div>\n<div class="server-row">Last login: <span id="login-time"></span></div>\n<div data-vanillakit="counter"></div>\n<script>\n  document.getElementById("login-time").textContent = new Date().toLocaleTimeString();\n<\/script>',"markup")}

      <h3>Setup</h3>
      ${ve('<!doctype html>\n<html>\n  <head>\n    <script src="https://unpkg.com/htmx.org@2"><\/script>\n  </head>\n  <body>\n    <div hx-get="/partials/dashboard.html" hx-trigger="click" hx-target="#content">\n      Load dashboard\n    </div>\n    <div id="content"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}

      <h3>Reactive islands inside swapped content</h3>
      <p>
        After htmx swaps in HTML, mount vanillakit components on
        <code>[data-vanillakit]</code> elements.
      </p>
      ${ve('import { signal, html, css } from "vanillakit";\n\nfunction LiveCounter(el) {\n  const count = signal(0);\n  el.replaceChildren(html`\n    <button\n      class=${css`padding: 6px 14px; cursor: pointer;`}\n      onclick=${() => count(n => n + 1)}\n    >\n      Clicked ${count} times\n    </button>\n  `);\n}\n\ndocument.body.addEventListener("htmx:afterSwap", (e) => {\n  e.detail.target\n    .querySelectorAll("[data-vanillakit]")\n    .forEach((el) => {\n      if (el.dataset.vanillakit === "counter") LiveCounter(el);\n    });\n});')}
    </section>
  </section>`},tailwind:function(){const e=a(!1),t=a(!1),n=a("blue"),o={blue:{bg:"#3b82f6",hover:"#2563eb",glow:"rgba(59,130,246,0.5)"},green:{bg:"#22c55e",hover:"#16a34a",glow:"rgba(34,197,94,0.5)"},purple:{bg:"#a855f7",hover:"#9333ea",glow:"rgba(168,85,247,0.5)"},red:{bg:"#ef4444",hover:"#dc2626",glow:"rgba(239,68,68,0.5)"}},i=E`
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 8px 0;
    font-size: 0.85rem;
    color: var(--vk-color-text-muted);
    & input {
      accent-color: var(--vk-color-accent);
    }
  `;return y`<section>
    <h2>Tailwind CSS</h2>
    <p>
      Use Tailwind utilities alongside vanillakit's reactive DOM and
      <code>css\`\`</code> scoped styles.
    </p>

    <article data-card>
      <h6 class="text-accent">Interactive demo</h6>
      <p>
        Demonstrates reactive class switching — the pattern you'd use with
        Tailwind utilities. Colors and effects update reactively via signals.
      </p>

      <div class=${E`
    display: flex;
    gap: 6px;
    margin: 16px 0;
    align-items: center;
  `}>
        <span
          style="font-size:0.82rem; font-family:var(--vk-font-mono); color:var(--vk-color-text-muted);"
          >Theme:</span
        >
        ${Object.entries(o).map(([e,t])=>y`<button
              class=${()=>{return a=e,o=t.bg,E`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid
      ${n()===a?"var(--vk-color-text)":"transparent"};
    background: ${o};
    cursor: pointer;
    transition: all 0.15s ease;
    &:hover {
      transform: scale(1.15);
    }
  `;var a,o}}
              onclick=${()=>n(e)}
            ></button>`)}
      </div>

      <label class=${i}>
        <input
          type="checkbox"
          checked=${()=>t()}
          onchange=${e=>t(e.target.checked)}
        />
        Glow effect (css\`\` scoped style)
      </label>

      <div style="margin-top:16px; display:flex; gap:8px; flex-wrap:wrap;">
        <button class=${()=>(()=>{const e=o[n()];return E`
      background: ${e.bg};
      color: #fff;
      padding: 8px 16px;
      border-radius: 6px;
      border: none;
      font-family: var(--vk-font-body);
      font-size: 0.85rem;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.15s ease;
      &:hover {
        background: ${e.hover};
        transform: translateY(-1px);
      }
      &:active {
        transform: translateY(0);
      }
    `})()} onclick=${()=>e(e=>!e)}>
          ${()=>e()?"Hide panel":"Show panel"}
        </button>
      </div>

      <div style=${()=>e()?"":"display:none;"}>
        <div class=${()=>(()=>{const e=o[n()];return E`
      margin-top: 12px;
      padding: 16px;
      background: var(--vk-color-surface-2);
      border-radius: 8px;
      border: 1px solid var(--vk-color-border);
      transition: all 0.2s ease;
      ${t()?`box-shadow: 0 0 30px ${e.glow};`:""}
    `})()}>
          <p
            style="color:var(--vk-color-text); margin-bottom:8px; font-weight:600;"
          >
            Reactive panel
          </p>
          <p style="color:var(--vk-color-text-muted); font-size:0.85rem;">
            This panel is reactively shown/hidden. The button color, glow
            effect, and panel styles all change dynamically — the same pattern
            as toggling Tailwind classes with signals.
          </p>
        </div>
      </div>
    </article>

    <section>
      <h3>Using Tailwind classes directly</h3>
      <p>
        Since <code>html\`\`</code> produces real DOM nodes, Tailwind utilities
        work as-is. Use signal-derived class strings for reactive styles.
      </p>
      ${ve('import { signal, html } from "vanillakit";\n\nconst open = signal(false);\n\ndocument.body.append(html`\n  <div class="max-w-md mx-auto p-6">\n    <button\n      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"\n      onclick=${() => open(v => !v)}\n    >\n      Toggle\n    </button>\n    <div class=${() => open()\n      ? "mt-4 p-4 bg-gray-800 rounded border border-gray-700"\n      : "hidden"\n    }>\n      Reactively shown/hidden via signals.\n    </div>\n  </div>\n`);')}

      <h3>Mixing Tailwind + css\`\`</h3>
      <p>
        Use <code>cx()</code> to combine Tailwind utility classes with scoped
        styles.
      </p>
      ${ve('import { html, css, cx } from "vanillakit";\n\nconst glowEffect = css`\n  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);\n  transition: box-shadow 0.3s ease;\n  &:hover { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }\n`;\n\ndocument.body.append(html`\n  <div class=${cx("p-6 rounded-lg bg-gray-900 border border-gray-700", glowEffect)}>\n    Best of both worlds.\n  </div>\n`);')}

      <h3>Tailwind config</h3>
      ${ve('// tailwind.config.js\nexport default {\n  content: [\n    "./demo/**/*.{html,ts,js}",\n    "./src/**/*.js",\n  ],\n};')}
    </section>
  </section>`},hono:function(){return y`<section>
    <h2>Hono</h2>
    <p>
      Hono is a fast, lightweight web framework for Bun, Deno, Cloudflare
      Workers, and Node. Serve a vanillakit frontend as static files and use
      Hono for the API layer.
    </p>

    <h3>API server + static frontend</h3>
    ${ve('// server.ts (Hono on Bun)\nimport { Hono } from "hono";\nimport { serveStatic } from "hono/bun";\nimport { cors } from "hono/cors";\n\nconst app = new Hono();\napp.use("/api/*", cors());\n\napp.get("/api/todos", (c) => {\n  return c.json([\n    { id: 1, text: "Build with vanillakit", done: false },\n    { id: 2, text: "Deploy to edge", done: true },\n  ]);\n});\n\napp.post("/api/todos", async (c) => {\n  const body = await c.req.json();\n  return c.json({ id: Date.now(), ...body }, 201);\n});\n\n// Serve the Vite build as static files\napp.use("/*", serveStatic({ root: "./docs" }));\n\nexport default app;',"typescript")}

    <h3>Fetching data into signals</h3>
    ${ve('import { signal, html } from "vanillakit";\n\nconst todos = signal([]);\nconst loading = signal(true);\n\nfetch("/api/todos")\n  .then(r => r.json())\n  .then(data => { todos(data); loading(false); });\n\ndocument.body.append(html`\n  <div>\n    ${() => loading()\n      ? html`<p>Loading...</p>`\n      : html`<ul>\n          ${() => todos().map(t => html`<li>${t.text}</li>`)}\n        </ul>`\n    }\n  </div>\n`);')}
  </section>`},fastapi:function(){return y`<section>
    <h2>FastAPI</h2>
    <p>
      FastAPI serves as a Python backend. Build the vanillakit app with Vite,
      then serve the static output from FastAPI or use it purely as a JSON API.
    </p>

    <h3>Project layout</h3>
    ${ve("project/\n  backend/\n    main.py\n    requirements.txt\n  frontend/\n    demo/\n      index.html\n      app.ts\n    src/        # vanillakit source\n    vite.config.js","bash")}

    <h3>FastAPI backend</h3>
    ${ve('# backend/main.py\nfrom fastapi import FastAPI\nfrom fastapi.staticfiles import StaticFiles\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import BaseModel\n\napp = FastAPI()\napp.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])\n\nclass Todo(BaseModel):\n    id: int\n    text: str\n    done: bool = False\n\ntodos: list[Todo] = [\n    Todo(id=1, text="Learn vanillakit", done=True),\n    Todo(id=2, text="Build something", done=False),\n]\n\n@app.get("/api/todos")\ndef get_todos():\n    return todos\n\n@app.post("/api/todos")\ndef add_todo(todo: Todo):\n    todos.append(todo)\n    return todo\n\napp.mount("/", StaticFiles(directory="../frontend/docs", html=True))',"python")}

    <h3>Frontend fetching</h3>
    ${ve('import { signal, html, each } from "vanillakit";\n\nconst todos = signal([]);\n\nasync function loadTodos() {\n  const res = await fetch("/api/todos");\n  todos(await res.json());\n}\n\nasync function addTodo(text) {\n  const res = await fetch("/api/todos", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ id: Date.now(), text, done: false }),\n  });\n  todos(list => [...list, await res.json()]);\n}\n\nloadTodos();\n\nconst input = signal("");\n\ndocument.body.append(html`\n  <div>\n    <input\n      value=${() => input()}\n      oninput=${(e) => input(e.target.value)}\n      onkeydown=${(e) => {\n        if (e.key === "Enter") { addTodo(input()); input(""); }\n      }}\n      placeholder="New todo..."\n    />\n    <ul>\n      ${each(todos, t => t.id,\n        (itemSig) => html`<li>${() => itemSig().text}</li>`\n      )}\n    </ul>\n  </div>\n`);')}
  </section>`},signal:function(){return y`<section>
    <h2>signal.js</h2>
    <p>
      Fine-grained reactivity primitives. Every other module builds on this.
    </p>

    <h3>signal(initial)</h3>
    <p>
      Creates a read/write signal. Call with no args to read (and track), call
      with a value to write.
    </p>
    ${ve('import { signal } from "vanillakit";\n\nconst count = signal(0);\ncount();           // read → 0\ncount(5);          // write → 5\ncount(n => n + 1); // update via function → 6\ncount.peek();      // read without tracking')}

    <h3>computed(fn)</h3>
    <p>
      Derives a read-only signal. Re-evaluates only when dependencies change.
    </p>
    ${ve('import { signal, computed } from "vanillakit";\n\nconst a = signal(2), b = signal(3);\nconst sum = computed(() => a() + b());\nsum(); // 5\na(10);\nsum(); // 13')}

    <h3>effect(fn)</h3>
    <p>
      Runs a side effect whenever dependencies change. Returns a dispose
      function.
    </p>
    ${ve('import { signal, effect } from "vanillakit";\n\nconst name = signal("world");\nconst dispose = effect(() => console.log("Hello, " + name() + "!"));\n// logs: Hello, world!\nname("vanillakit");\n// logs: Hello, vanillakit!\ndispose(); // stops tracking')}

    <h3>batch(fn)</h3>
    <p>Groups writes — effects run once at the end.</p>
    ${ve('import { signal, effect, batch } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + b())); // 3\nbatch(() => { a(10); b(20); });       // 30 (once)')}

    <h3>untrack(fn)</h3>
    <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
    ${ve('import { signal, effect, untrack } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + untrack(() => b())));\nb(99); // does NOT re-run\na(10); // re-runs, reads b\'s current value')}
  </section>`},reactive:function(){return y`<section>
    <h2>reactive.js</h2>
    <p>
      Deep reactive proxies backed by signals. Mutate normally — changes
      propagate automatically.
    </p>

    <h3>reactive(target)</h3>
    <p>Wraps a plain object/array in a deep reactive proxy.</p>
    ${ve('import { reactive, effect } from "vanillakit";\n\nconst state = reactive({\n  user: { name: "Ada", scores: [95, 87] },\n});\n\neffect(() => console.log(state.user.name)); // "Ada"\nstate.user.name = "Grace";                  // "Grace"\nstate.user.scores.push(92);                 // tracked')}

    <h3>snapshot(obj)</h3>
    <p>Returns a deep plain-object copy. Useful for serialization.</p>

    <h3>toRaw(obj) / isReactive(obj)</h3>
    <p>Get the underlying raw object, or check if an object is reactive.</p>
  </section>`},"html-module":function(){return y`<section>
    <h2>html.js</h2>
    <p>
      Tagged template producing live DOM nodes with reactive bindings. No
      virtual DOM.
    </p>

    <h3>html\`...\`</h3>
    <p>
      Interpolations can be static values, signals, or functions. Functions are
      wrapped in effects.
    </p>
    ${ve('import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\nconst el = html`\n  <div>\n    <h1>Hello, ${name}!</h1>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)} />\n  </div>\n`;\ndocument.body.append(el);')}

    <p>Supported attribute bindings:</p>
    <ul
      style="color:var(--vk-color-text-muted);font-size:0.88rem;margin-bottom:10px;padding-left:20px;line-height:1.8;"
    >
      <li><code>class</code> — sets className</li>
      <li><code>style</code> — string or object</li>
      <li>
        <code>checked</code>, <code>value</code> — synced to DOM properties
      </li>
      <li><code>on*</code> — event listeners</li>
      <li><code>ref</code> — called with the element</li>
    </ul>

    <h3>each(listFn, keyFn, renderFn)</h3>
    <p>Keyed list reconciliation. Each item is passed as a signal.</p>
    ${ve('import { signal, each, html } from "vanillakit";\n\nconst items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);\n\nhtml`<ul>\n  ${each(items, i => i.id, (itemSig) => html`<li>${() => itemSig().text}</li>`)}\n</ul>`;')}
  </section>`},"css-module":function(){return y`<section>
    <h2>css.js</h2>
    <p>
      Scoped CSS-in-JS using <code>CSSStyleSheet</code>. Supports nesting,
      <code>@media</code>, <code>@keyframes</code>.
    </p>

    <h3>css\`...\`</h3>
    <p>
      Returns a unique class name. <code>&amp;</code> is replaced by the
      generated selector.
    </p>
    ${ve('import { css } from "vanillakit";\n\nconst card = css`\n  padding: 16px;\n  background: #1a1a1a;\n  &:hover { border-color: gold; }\n  & .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 8px; }\n`;')}

    <h3>keyframes\`...\`</h3>
    <p>Creates a scoped <code>@keyframes</code> rule.</p>
    ${ve('import { css, keyframes } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\nconst spinner = css`animation: ${spin} 1s linear infinite;`;')}

    <h3>globalCss\`...\` / cx(...classes)</h3>
    <p>Inject unscoped CSS or join class names (filtering falsy values).</p>
    ${ve('import { globalCss, cx, css } from "vanillakit";\n\nglobalCss`body { margin: 0; }`;\n\nconst base = css`padding: 8px;`;\nconst active = css`color: gold;`;\ncx(base, isActive && active); // falsy values skipped')}
  </section>`},router:function(){return y`<section>
    <h2>router.js</h2>
    <p>Hash-based SPA router. Routes are functions returning DOM nodes.</p>

    <h3>createRouter(routeMap)</h3>
    <p>
      Maps path patterns to handlers. Supports <code>:param</code> and
      <code>*</code> catch-all.
    </p>
    ${ve('import { createRouter, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/":         () => html`<h1>Home</h1>`,\n  "/user/:id": () => html`<h1>User page</h1>`,\n  "*":         () => html`<h1>404</h1>`,\n});\ndocument.body.append(Router());')}

    <h3>navigate(path)</h3>
    <p>Programmatic navigation.</p>

    <h3>currentPath / routeParams</h3>
    <p>
      Signals holding the current hash path and extracted
      <code>:param</code> values.
    </p>

    <h3>navLink(path, text, activeClass, baseClass)</h3>
    <p>
      Creates an <code>&lt;a&gt;</code> that swaps classes based on the current
      route.
    </p>
    ${ve('import { navLink, css } from "vanillakit";\n\nconst active = css`color: gold; font-weight: 700;`;\nconst base   = css`color: gray;`;\n\ndocument.body.append(navLink("/about", "About", active, base));')}
  </section>`}},{theme:Ge,toggle:Ue}=function(){const e=localStorage.getItem(B),t=window.matchMedia("(prefers-color-scheme: dark)"),n=()=>t.matches?"dark":"light",o=a(e||n());function r(e){document.documentElement.dataset.theme=e}return r(o()),i(()=>{r(o())}),t.addEventListener("change",()=>{localStorage.getItem(B)||o(n())}),{theme:o,toggle(){const e="dark"===o()?"light":"dark";o(e),localStorage.setItem(B,e)},set(e){"auto"===e?(localStorage.removeItem(B),o(n())):(o(e),localStorage.setItem(B,e))}}}(),Ve=E`
  background: none;
  border: 1px solid var(--vk-color-border);
  border-radius: 8px;
  padding: 6px 10px;
  cursor: pointer;
  font-size: 1rem;
  line-height: 1;
  transition: all 0.15s ease;
  color: var(--vk-color-text-muted);
  &:hover {
    color: var(--vk-color-accent);
    border-color: var(--vk-color-accent);
    transform: none;
    filter: none;
  }
`,qe=function(e){const t=Object.entries(e).sort((e,t)=>"*"===e[0]?1:"*"===t[0]?-1:t[0].split("/").length-e[0].split("/").length);return()=>{const e=document.createElement("div");return i(()=>{const n=M();let a=null;for(const[e,o]of t){const{regex:t,keys:i}=(()=>{if("*"===e)return{regex:/.*/,keys:[]};const t=[],n=e.replace(/:([^/]+)/g,(e,n)=>(t.push(n),"([^/]+)"));return{regex:new RegExp(`^${n}$`),keys:t}})(),r=n.match(t);if(r){const e={};i.forEach((t,n)=>{e[t]=decodeURIComponent(r[n+1])}),a={handler:o,params:e};break}}if(L(a?a.params:{}),e.innerHTML="",a){const t=a.handler();t instanceof Node&&e.append(t)}}),e}}({"/":function(){return y`<div class="animate-in">
    <section data-hero>
      <h1>Build UIs with <span class="text-accent">plain JavaScript.</span></h1>
      <p>
        Minimal and expressive utilities that complement vanilla JS to build
        modern, reactive websites.
      </p>
      <div>
        <a href="#/docs" role="button" data-color-variant="primary"> Get started </a>
        <a
          href="https://github.com/nisuxyz/vanillakit"
          target="_blank"
          role="button"
          data-style-variant="outline"
        >
          GitHub ↗
        </a>
      </div>
    </section>

    <div data-grid data-cols="3">
      ${C(ue,e=>e.dd,e=>((e={dd:"1 billion",dt:"That's big!"})=>y` <article data-card style="text-align:center;">
    <dl>
      <dd class="text-accent">${e.dd}</dd>
      <dt>${e.dt}</dt>
    </dl>
  </article>`)(e()))}
    </div>
    <br />
    <div data-grid>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">⚡ signal.js</h5>
        <p>
          Fine-grained reactivity — signal, computed, effect, batch. Everything
          else builds on this.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">🔄 reactive.js</h5>
        <p>
          Deep reactive proxies via Proxy. Mutate objects and arrays normally —
          changes propagate automatically.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">📝 html.js</h5>
        <p>
          Tagged templates producing live DOM nodes. Reactive bindings, event
          handlers, keyed lists — no virtual DOM.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">🎨 css.js</h5>
        <p>
          Scoped CSS-in-JS using CSSStyleSheet. Supports nesting, @keyframes,
          @media, and cx() for composition.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">🧭 router.js</h5>
        <p>
          Hash-based SPA router. Pattern matching with :params, navLink with
          active classes, zero config.
        </p>
      </article>
      <article data-card data-hover="glow">
        <h5 style="font-family:var(--vk-font-mono);">📦 No build step</h5>
        <p>
          Works with a plain &lt;script type="module"&gt;. Use a bundler if you
          want — but you don't have to.
        </p>
      </article>
    </div>
    <hr />
    <h4 class="text-accent">Quick example</h4>
    <p>A counter in 9 lines. Driven by signals — no re-renders or diffing.</p>
    ${ce({source:pe,label:"Try editing the code!"})}
    <hr />
    <h4 class="text-accent">See it in action</h4>
    <p>
      Check out the interactive demos — a full todo app, reactive object
      explorer, and stress tests for signals and keyed lists.
    </p>
    <div data-grid data-cols="3">
      <a href="#/tasks" role="button" data-style-variant="outline"> Todo app </a>
      <a href="#/playground" role="button" data-style-variant="outline"> Playground </a>
      <a href="#/stress" role="button" data-style-variant="outline"> Stress test </a>
    </div>
  </div>`},"/examples":function(){const e=a("snippets");return y`<div class="animate-in">
    <h1>Examples</h1>
    <p class=${G}>
      Interactive demos, code snippets, and stress tests.
    </p>

    <div data-layout="sidebar">
      <aside>
        <nav>
          ${Ie.map(t=>y`
              <div class=${V}>
                <div class="group-label">${t.label}</div>
                ${t.items.map(t=>y`
                    <a
                      class=${q}
                      aria-current=${()=>e()===t.id?"page":null}
                      onclick=${n=>{n.preventDefault(),e(t.id)}}
                      href="#"
                      >${t.label}</a
                    >
                  `)}
              </div>
            `)}
        </nav>
      </aside>

      <div>${()=>Me[e()]()}</div>
    </div>
  </div>`},"/docs":function(){const e=a("getting-started");return y`<div class="animate-in">
    <h1>Docs</h1>
    <p class=${G}>API reference, concepts, and guides.</p>

    <div data-layout="sidebar">
      <aside>
        <nav>
          ${Be.map(t=>y`
              <div class=${V}>
                <div class="group-label">${t.label}</div>
                ${t.items.map(t=>y`
                    <a
                      class=${q}
                      aria-current=${()=>e()===t.id?"page":null}
                      onclick=${n=>{n.preventDefault(),e(t.id)}}
                      href="#"
                      >${t.label}</a
                    >
                  `)}
              </div>
            `)}
        </nav>
      </aside>

      <div>${()=>He[e()]()}</div>
    </div>
  </div>`},"/about":function(){return y`<div class="animate-in">
    <h1>Architecture</h1>
    <p class=${G}>
      Six standalone modules. ~760 lines total. Zero dependencies.
    </p>
    <article>
      <h3>Design Principles</h3>
      <ul>
        <li>Functions are components. No classes, no magic strings.</li>
        <li>
          <code>() =></code> means reactive. Everything else is static. That's
          the only rule.
        </li>
        <li>
          Fine-grained updates. Each reactive expression updates exactly one DOM
          node.
        </li>
        <li>Modules are independent. Only <code>signal.js</code> is shared.</li>
      </ul>
    </article>
    <div>
      ${je.map(e=>y`<article
            data-card
            style="display:flex;align-items:center;gap:16px;margin-bottom:10px;"
          >
            <div
              class=${Le}
              style=${`background: ${e.color}20; color: ${e.color};`}
            >
              ${e.icon}
            </div>
            <div style="flex:1;">
              <strong style="font-family:var(--vk-font-mono);font-size:0.9rem;"
                >${e.name}</strong
              >
              <small>${e.desc}</small>
            </div>
            <span data-badge>${e.lines}</span>
          </article>`)}
    </div>
  </div>`},"*":()=>y`<div class="animate-in">
      <h1>404</h1>
      <p>Not found.</p>
    </div>`});window.location.hash||(window.location.hash="/"),document.getElementById("app").append(y`
    <header>
      <a
        class=${H}
        href="/"
        onclick=${e=>{e.preventDefault(),j("/")}}
        >vanillakit_</a
      >
      <div style="display:flex;align-items:center;gap:8px;">
        <nav>
          ${N("/","Home")} ${N("/docs","Docs")}
          ${N("/examples","Examples")} ${N("/about","About")}
        </nav>
        <button class=${Ve} onclick=${Ue} title="Toggle theme">
          ${()=>"dark"===Ge()?"☀️":"🌙"}
        </button>
      </div>
    </header>
    <main>${qe()}</main>
    <footer>
      Built with <span class="text-accent">vanillakit</span> — zero deps, ~760
      lines of JS
    </footer>
  `);
