!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)}).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),e.credentials="use-credentials"===t.crossOrigin?"include":"anonymous"===t.crossOrigin?"omit":"same-origin",e}(t);fetch(t.href,e)}}();let t=null,e=0;const n=new Set;function i(i){let o=i;const r=new Set;function s(...i){if(0===i.length)return t&&(r.add(t),t.t.add(r)),o;const s="function"==typeof i[0]?i[0](o):i[0];if(Object.is(s,o))return o;if(o=s,e>0)for(const t of r)n.add(t);else for(const t of[...r])t.i();return o}return s.peek=()=>o,s.toString=()=>String(o),s[Symbol.toPrimitive]=()=>o,s}function o(t){const e=i(void 0);r(()=>e(t()));const n=()=>e();return n.peek=e.peek,n}function r(e){const n={o:e,t:new Set,l:!1,i(){if(n.l)return;for(const t of n.t)t.delete(n);n.t.clear();const i=t;t=n;try{e()}finally{t=i}}};return n.i(),()=>{n.l=!0;for(const t of n.t)t.delete(n);n.t.clear()}}function s(t){e++;try{return t()}finally{if(e--,0===e){const t=[...n];n.clear();for(const e of t)e.i()}}}function a(e){const n=t;t=null;try{return e()}finally{t=n}}const c=Symbol("reactive"),l=Symbol("raw"),d=new WeakMap,u=new Set([c,l,Symbol.toPrimitive,Symbol.toStringTag,Symbol.iterator,Symbol.asyncIterator,Symbol.isConcatSpreadable,"__proto__","constructor","prototype","toJSON"]),h=new Set(["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"]),p=new Set(["indexOf","lastIndexOf","includes"]);function f(t){return null==t||"object"!=typeof t||t instanceof Date||t instanceof RegExp||t instanceof Error||t instanceof Node||t instanceof Map||t instanceof Set?t:m(t)}function m(t){if(null==t||"object"!=typeof t)return t;if(t[c])return t;if(d.has(t))return d.get(t);const e=new Map;function n(n){return e.has(n)||e.set(n,i(f(t[n]))),e.get(n)}const o=new Proxy(t,{get(t,i,o){if(i===c)return!0;if(i===l)return t;if("symbol"==typeof i&&u.has(i))return Reflect.get(t,i,o);if(u.has(i))return Reflect.get(t,i,o);if(Array.isArray(t)&&"string"==typeof i){if(h.has(i))return(...n)=>{let o;return s(()=>{const r=n.map(t=>null!=t&&t[l]?t[l]:t);o=Array.prototype[i].apply(t,r),function(t,e){for(let n=0;n<t.length;n++){const i=String(n);e.has(i)&&e.get(i)(f(t[n]))}e.has("length")&&e.get("length")(t.length)}(t,e)}),o};if(p.has(i))return(...e)=>(n("length")(),Array.prototype[i].apply(t,[null!=e[0]&&e[0][l]?e[0][l]:e[0],...e.slice(1)]))}return n(i)()},set(t,n,i){const o=null!=i&&i[l]?i[l]:i;return t[n]=o,e.has(n)&&e.get(n)(f(o)),Array.isArray(t)&&e.has("length")&&e.get("length")(t.length),!0},deleteProperty:(t,n)=>(delete t[n],e.has(n)&&(e.get(n)(void 0),e.delete(n)),!0),has:(t,e)=>e===c||e===l||("string"==typeof e&&n(e)(),e in t),ownKeys:t=>(Array.isArray(t)&&n("length")(),Reflect.ownKeys(t)),getPrototypeOf:t=>Reflect.getPrototypeOf(t),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t,e)});return d.set(t,o),o}function v(t){return null!=t&&!0===t[c]}function g(t){if(null==t||"object"!=typeof t)return t;if(v(t)){const e=t[l];if(Array.isArray(e)){const e=t.length,n=[];for(let i=0;i<e;i++)n.push(g(t[i]));return n}const n={};for(const i of Object.keys(e))n[i]=g(t[i]);return n}if(Array.isArray(t))return t.map(g);const e={};for(const n of Object.keys(t))e[n]=g(t[n]);return e}let b=0;function y(t,...e){const n=b++;let i="";const o=[];for(let u=0;u<t.length;u++)if(i+=t[u],u<e.length)if(k(i)){const t=i.match(/(\S+)\s*=\s*["']?$/);if(t){const e=t[1],r=`data-v-${n}-${u}`;i=i.slice(0,-t[0].length),i+=`${r}="" `,o.push({index:u,attrName:e,elemMarker:r})}else i+=`v${n}_${u}`}else i+=`\x3c!--v${n}-${u}--\x3e`;const r=document.createElement("template");r.innerHTML=i;const s=r.content,a=[];for(const{index:u,attrName:h,elemMarker:p}of o){const t=s.querySelector(`[${p}]`);t&&(t.removeAttribute(p),x(t,h,e[u],a))}const c=document.createTreeWalker(s,NodeFilter.SHOW_COMMENT),l=[];for(;c.nextNode();){const t=c.currentNode;t.data.startsWith(`v${n}-`)&&l.push({node:t,index:parseInt(t.data.slice(`v${n}-`.length))})}for(const{node:u,index:h}of l)$(u,e[h],a);s.u=()=>{for(const t of a)t();a.length=0};const d=[...s.childNodes];if(d.length>0){const t=d[0];(t.p||(t.p=[])).push(s.u)}return 1===s.childNodes.length?s.childNodes[0]:s}function k(t){for(let e=t.length-1;e>=0;e--){if(">"===t[e])return!1;if("<"===t[e])return!0}return!1}function x(t,e,n,i){e.startsWith("on")?t.addEventListener(e.slice(2).toLowerCase(),"function"==typeof n?n:()=>{}):"ref"!==e||"function"!=typeof n?"function"!=typeof n?w(t,e,n):i.push(r(()=>w(t,e,n()))):n(t)}function w(t,e,n){"class"===e||"className"===e?t.className=n??"":"style"===e&&"object"==typeof n?Object.assign(t.style,n):"style"===e&&"string"==typeof n?t.setAttribute("style",n):"checked"===e?t.checked=!!n:"value"===e&&"value"in t?t.value=n??"":"disabled"===e||"readonly"===e||"hidden"===e?n?t.setAttribute(e,""):t.removeAttribute(e):!1===n||null==n?t.removeAttribute(e):t.setAttribute(e,!0===n?"":String(n))}function $(t,e,n){if(null!=e&&e.m)n.push(function(t,{listFn:e,keyFn:n,renderFn:o}){const s=document.createComment("/each");t.parentNode?.insertBefore(s,t.nextSibling);const c=new Map,l=r(()=>{const r=e(),s=Array.isArray(r)?r:[],l=t.parentNode;if(!l)return;const d=s.map(n),u=new Set(d);for(const[t,e]of c)if(!u.has(t)){for(const t of e.disposers)t();for(const t of e.nodes)E(t),t.remove();c.delete(t)}let h=t.nextSibling;for(let t=0;t<s.length;t++){const e=d[t];let n=c.get(e);if(n){if(n.itemSig(s[t]),n.indexSig(t),n.nodes.length>0&&n.nodes[0]!==h)for(const t of n.nodes)l.insertBefore(t,h);h=n.nodes.length>0?n.nodes[n.nodes.length-1].nextSibling:h}else{const r=i(s[t]),d=i(t),u=[];let p;const f=a(()=>(p=o(r,d),p.u??null)),m=p instanceof DocumentFragment?[...p.childNodes]:[p instanceof Node?p:document.createTextNode(String(p))];f&&u.push(f),n={nodes:m,disposers:u,itemSig:r,indexSig:d},c.set(e,n);const v=document.createDocumentFragment();for(const t of m)v.append(t);l.insertBefore(v,h),h=n.nodes[n.nodes.length-1]?.nextSibling??h}}});return()=>{l();for(const[,t]of c){for(const e of t.disposers)e();for(const e of t.nodes)E(e),e.remove()}c.clear(),s.parentNode&&s.remove()}}(t,e));else{if("function"==typeof e){let i=null;return void n.push(r(()=>{i=S(t,i,e())}))}S(t,null,e)}}function S(t,e,n){const i=t.parentNode;if(!i)return e;if(e){const t=Array.isArray(e)?e:[e];for(const e of t)e.parentNode&&(E(e),e.remove())}if(null==n||!1===n||!0===n)return null;if(Array.isArray(n)){const e=document.createDocumentFragment(),o=[];for(const t of n.flat(1/0)){const n=A(t);n&&(e.append(n),o.push(n))}return i.insertBefore(e,t),o}const o=A(n);return o&&i.insertBefore(o,t),o}function A(t){return null==t||!1===t||!0===t?null:t instanceof Node?t:document.createTextNode(String(t))}function E(t){const e=t;if(e.p){for(const t of e.p)t();e.p=null}if(t.childNodes)for(const n of t.childNodes)E(n)}function _(t,e,n){return{m:!0,listFn:t,keyFn:e,renderFn:n}}let C=0;const F=new CSSStyleSheet;function T(){return"v-"+(C++).toString(36)}function I(t){for(const n of t){const t=n.trim();if(t)try{F.insertRule(t,F.cssRules.length)}catch(e){}}}function O(t,...e){let n="";for(let o=0;o<t.length;o++)n+=t[o],o<e.length&&(n+=e[o]);const i=T();return I(function(t,e){const n=function(t){const e={declarations:"",children:[],selector:""},n=[e];let i="",o=!1,r="";for(let a=0;a<t.length;a++){const e=t[a];if(o)i+=e,e===r&&"\\"!==t[a-1]&&(o=!1);else if('"'!==e&&"'"!==e)if("{"===e){const t=i.trim();i="";const e=t.lastIndexOf(";");let o;if(-1!==e){const i=t.slice(0,e+1).trim();if(i){const t=n[n.length-1];t.declarations+=(t.declarations?" ":"")+i}o=t.slice(e+1).trim()}else o=t;const r={selector:o,declarations:"",children:[]};n[n.length-1].children.push(r),n.push(r)}else if("}"===e){const t=i.trim();if(t){const e=n[n.length-1];e.declarations+=(e.declarations?" ":"")+t}i="",n.pop()}else i+=e;else o=!0,r=e,i+=e}const s=i.trim();return s&&(e.declarations+=(e.declarations?" ":"")+s),e}(t),i=[];return j(n,e,i),i}(n,`.${i}`)),i}function R(t,...e){let n="";for(let o=0;o<t.length;o++)n+=t[o],o<e.length&&(n+=e[o]);const i=T();return I([`@keyframes ${i} { ${n} }`]),i}function D(t,...e){let n="";for(let r=0;r<t.length;r++)n+=t[r],r<e.length&&(n+=e[r]);const i=n.split("\n"),o=[];for(const r of i){const t=r.trim();if(t.startsWith("@import ")){const e=t.match(/@import\s+url\(\s*['"]?([^'")\s]+)['"]?\s*\)/)||t.match(/@import\s+['"]([^'"]+)['"]/);if(e){const t=document.createElement("link");t.rel="stylesheet",t.href=e[1],document.head.appendChild(t)}}else o.push(r)}I(function(t){const e=[];let n=0,i="",o=!1,r="";for(let s=0;s<t.length;s++){const a=t[s];o?(i+=a,a===r&&"\\"!==t[s-1]&&(o=!1)):'"'!==a&&"'"!==a?"{"===a?(n++,i+=a):"}"===a?(n--,i+=a,0===n&&(i.trim()&&e.push(i.trim()),i="")):i+=a:(o=!0,r=a,i+=a)}return e}(o.join("\n")))}function P(...t){return t.filter(Boolean).join(" ")}function j(t,e,n){t.declarations&&n.push(`${e} { ${t.declarations} }`);for(const i of t.children){const t=i.selector;if(t)if(/^@(media|supports|container|layer)\b/.test(t)){const o=[];i.declarations&&o.push(`${e} { ${i.declarations} }`);for(const t of i.children)j(t,e,o);o.length&&n.push(`${t} { ${o.join(" ")} }`)}else if(t.includes("&")){const o=t.split(",").map(t=>t.trim().replace(/&/g,e)).join(", ");i.declarations&&n.push(`${o} { ${i.declarations} }`);for(const t of i.children)j(t,o,n)}else{const o=`${e} ${t}`;i.declarations&&n.push(`${o} { ${i.declarations} }`);for(const t of i.children)j(t,o,n)}else{i.declarations&&n.push(`${e} { ${i.declarations} }`);for(const t of i.children)j(t,e,n)}}}document.adoptedStyleSheets=[...document.adoptedStyleSheets,F];let N="hash",M="";const L=i(window.location.hash.slice(1)||"/"),z=i({});function B(){L(window.location.hash.slice(1)||"/")}function H(){L(window.location.pathname.slice(M.length)||"/")}function q(t){"history"===N?(window.history.pushState({},"",M+t),L(t)):window.location.hash=t}function U(t,e){const n=document.createElement("a");return n.href="history"===N?M+t:"#"+t,n.textContent=e,r(()=>{("/"===t?"/"===L():L().startsWith(t))?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")}),n.addEventListener("click",e=>{e.preventDefault(),q(t)}),n}window.addEventListener("hashchange",B);const G="vanillacss-theme",V=O`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--vk-color-accent);
  font-family: var(--vk-font-mono);
`,W=O`
  margin-bottom: 2rem;
`,J=O`
  border-top: none;
  border-radius: 0 0 var(--vk-radius-md) var(--vk-radius-md);
  max-height: 400px;
  overflow-y: auto;
`,Y=O`
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
`,X=O`
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
`,Z=window;var K=function(){return K=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},K.apply(this,arguments)},Q="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function tt(t){return t&&t.v&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var et,nt={exports:{}},it=(et||(et=1,function(t){var e=function(t){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},o={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof r?new r(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.k||Object.defineProperty(t,"k",{value:++n}),t.k},clone:function t(e,n){var i,r;switch(n=n||{},o.util.type(e)){case"Object":if(r=o.util.objId(e),n[r])return n[r];for(var s in n[r]=i={},e)e.hasOwnProperty(s)&&(i[s]=t(e[s],n));return i;case"Array":return r=o.util.objId(e),n[r]?n[r]:(n[r]=i=[],e.forEach(function(e,o){i[o]=t(e,n)}),i);default:return e}},getLanguage:function(t){for(;t;){var n=e.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,n){t.className=t.className.replace(RegExp(e,"gi"),""),t.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var i="no-"+e;t;){var o=t.classList;if(o.contains(e))return!0;if(o.contains(i))return!1;t=t.parentElement}return!!n}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(t,e){var n=o.util.clone(o.languages[t]);for(var i in e)n[i]=e[i];return n},insertBefore:function(t,e,n,i){var r=(i=i||o.languages)[t],s={};for(var a in r)if(r.hasOwnProperty(a)){if(a==e)for(var c in n)n.hasOwnProperty(c)&&(s[c]=n[c]);n.hasOwnProperty(a)||(s[a]=r[a])}var l=i[t];return i[t]=s,o.languages.DFS(o.languages,function(e,n){n===l&&e!=t&&(this[e]=s)}),s},DFS:function t(e,n,i,r){r=r||{};var s=o.util.objId;for(var a in e)if(e.hasOwnProperty(a)){n.call(e,a,e[a],i||a);var c=e[a],l=o.util.type(c);"Object"!==l||r[s(c)]?"Array"!==l||r[s(c)]||(r[s(c)]=!0,t(c,n,a,r)):(r[s(c)]=!0,t(c,n,null,r))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var i={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),o.hooks.run("before-all-elements-highlight",i);for(var r,s=0;r=i.elements[s++];)o.highlightElement(r,!0===e,i.callback)},highlightElement:function(e,n,i){var r=o.util.getLanguage(e),s=o.languages[r];o.util.setLanguage(e,r);var a=e.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&o.util.setLanguage(a,r);var c={element:e,language:r,grammar:s,code:e.textContent};function l(t){c.highlightedCode=t,o.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o.hooks.run("after-highlight",c),o.hooks.run("complete",c),i&&i.call(c.element)}if(o.hooks.run("before-sanity-check",c),(a=c.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!c.code)return o.hooks.run("complete",c),void(i&&i.call(c.element));if(o.hooks.run("before-highlight",c),c.grammar)if(n&&t.Worker){var d=new Worker(o.filename);d.onmessage=function(t){l(t.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(o.highlight(c.code,c.grammar,c.language));else l(o.util.encode(c.code))},highlight:function(t,e,n){var i={code:t,grammar:e,language:n};if(o.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),r.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var i in n)e[i]=n[i];delete e.rest}var o=new c;return l(o,o.head,t),a(t,o,e,o.head,0),function(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}(o)},hooks:{all:{},add:function(t,e){var n=o.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=o.hooks.all[t];if(n&&n.length)for(var i,r=0;i=n[r++];)i(e)}},Token:r};function r(t,e,n,i){this.type=t,this.content=e,this.alias=n,this.length=0|(i||"").length}function s(t,e,n,i){t.lastIndex=e;var o=t.exec(n);if(o&&i&&o[1]){var r=o[1].length;o.index+=r,o[0]=o[0].slice(r)}return o}function a(t,e,n,i,c,u){for(var h in n)if(n.hasOwnProperty(h)&&n[h]){var p=n[h];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(u&&u.cause==h+","+f)return;var m=p[f],v=m.inside,g=!!m.lookbehind,b=!!m.greedy,y=m.alias;if(b&&!m.pattern.global){var k=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,k+"g")}for(var x=m.pattern||m,w=i.next,$=c;w!==e.tail&&!(u&&$>=u.reach);$+=w.value.length,w=w.next){var S=w.value;if(e.length>t.length)return;if(!(S instanceof r)){var A,E=1;if(b){if(!(A=s(x,$,t,g))||A.index>=t.length)break;var _=A.index,C=A.index+A[0].length,F=$;for(F+=w.value.length;_>=F;)F+=(w=w.next).value.length;if($=F-=w.value.length,w.value instanceof r)continue;for(var T=w;T!==e.tail&&(F<C||"string"==typeof T.value);T=T.next)E++,F+=T.value.length;E--,S=t.slice($,F),A.index-=$}else if(!(A=s(x,0,S,g)))continue;var I=A[0],O=S.slice(0,_=A.index),R=S.slice(_+I.length),D=$+S.length;u&&D>u.reach&&(u.reach=D);var P=w.prev;if(O&&(P=l(e,P,O),$+=O.length),d(e,P,E),w=l(e,P,new r(h,v?o.tokenize(I,v):I,y,I)),R&&l(e,w,R),E>1){var j={cause:h+","+f,reach:D};a(t,e,n,w.prev,$,j),u&&j.reach>u.reach&&(u.reach=j.reach)}}}}}}function c(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function l(t,e,n){var i=e.next,o={value:n,prev:e,next:i};return e.next=o,i.prev=o,t.length++,o}function d(t,e,n){for(var i=e.next,o=0;o<n&&i!==t.tail;o++)i=i.next;e.next=i,i.prev=e,t.length-=o}if(t.Prism=o,r.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var i="";return e.forEach(function(e){i+=t(e,n)}),i}var r={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(r.classes,s):r.classes.push(s)),o.hooks.run("wrap",r);var a="";for(var c in r.attributes)a+=" "+c+'="'+(r.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+a+">"+r.content+"</"+r.tag+">"},!t.document)return t.addEventListener?(o.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,r=n.immediateClose;t.postMessage(o.highlight(n.code,o.languages[i],i)),r&&t.close()},!1),o):o;var u=o.util.currentScript();function h(){o.manual||o.highlightAll()}if(u&&(o.filename=u.src,u.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var p=document.readyState;"loading"===p||"interactive"===p&&u&&u.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});t.exports&&(t.exports=e),void 0!==Q&&(Q.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+n]={pattern:/[\s\S]+/,inside:e.languages[n]};var r={};r[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(void 0!==e&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",o="loaded",r="pre[data-src]:not(["+n+'="'+o+'"]):not(['+n+'="'+i+'"])';e.hooks.add("before-highlightall",function(t){t.selector+=", "+r}),e.hooks.add("before-sanity-check",function(s){var a=s.element;if(a.matches(r)){s.code="",a.setAttribute(n,i);var c=a.appendChild(document.createElement("CODE"));c.textContent="Loading…";var l=a.getAttribute("data-src"),d=s.language;if("none"===d){var u=(/\.(\w+)$/.exec(l)||[,"none"])[1];d=t[u]||u}e.util.setLanguage(c,d),e.util.setLanguage(a,d);var h=e.plugins.autoloader;h&&h.loadLanguages(d),function(t){var i=new XMLHttpRequest;i.open("GET",t,!0),i.onreadystatechange=function(){var t;4==i.readyState&&(i.status<400&&i.responseText?function(t){a.setAttribute(n,o);var i=function(t){var e=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t||"");if(e){var n=Number(e[1]),i=e[3];return e[2]?i?[n,Number(i)]:[n,void 0]:[n,n]}}(a.getAttribute("data-range"));if(i){var r=t.split(/\r\n?|\n/g),s=i[0],l=null==i[1]?r.length:i[1];s<0&&(s+=r.length),s=Math.max(0,Math.min(s-1,r.length)),l<0&&(l+=r.length),l=Math.max(0,Math.min(l,r.length)),t=r.slice(s,l).join("\n"),a.hasAttribute("data-start")||a.setAttribute("data-start",String(s+1))}c.textContent=t,e.highlightElement(c)}(i.responseText):(t=i.status>=400?"✖ Error "+i.status+" while fetching file: "+i.statusText:"✖ Error: File does not exist or is empty",a.setAttribute(n,"failed"),c.textContent=t))},i.send(null)}(l)}}),e.plugins.fileHighlight={highlight:function(t){for(var n,i=(t||document).querySelectorAll(r),o=0;n=i[o++];)e.highlightElement(n)}};var s=!1;e.fileHighlight=function(){s||(s=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}(nt)),nt.exports);const ot=tt(it);var rt,st,at;!function(t){t[t.NONE=0]="NONE",t[t.$=1]="_abstract",t[t.S=2]="_accessor",t[t.A=3]="_as",t[t._=4]="_assert",t[t.C=5]="_asserts",t[t.F=6]="_async",t[t.T=7]="_await",t[t.I=8]="_checks",t[t.O=9]="_constructor",t[t.R=10]="_declare",t[t.D=11]="_enum",t[t.P=12]="_exports",t[t.j=13]="_from",t[t.N=14]="_get",t[t.M=15]="_global",t[t.L=16]="_implements",t[t.B=17]="_infer",t[t.H=18]="_interface",t[t.q=19]="_is",t[t.U=20]="_keyof",t[t.G=21]="_mixins",t[t.V=22]="_module",t[t.W=23]="_namespace",t[t.J=24]="_of",t[t.Y=25]="_opaque",t[t.X=26]="_out",t[t.Z=27]="_override",t[t.K=28]="_private",t[t.tt=29]="_protected",t[t.et=30]="_proto",t[t.nt=31]="_public",t[t.it=32]="_readonly",t[t.ot=33]="_require",t[t.rt=34]="_satisfies",t[t.st=35]="_set",t[t.ct=36]="_static",t[t.lt=37]="_symbol",t[t.ut=38]="_type",t[t.ht=39]="_unique",t[t.ft=40]="_using"}(rt||(rt={})),function(t){t[t.PRECEDENCE_MASK=15]="PRECEDENCE_MASK",t[t.IS_KEYWORD=16]="IS_KEYWORD",t[t.IS_ASSIGN=32]="IS_ASSIGN",t[t.IS_RIGHT_ASSOCIATIVE=64]="IS_RIGHT_ASSOCIATIVE",t[t.IS_PREFIX=128]="IS_PREFIX",t[t.IS_POSTFIX=256]="IS_POSTFIX",t[t.IS_EXPRESSION_START=512]="IS_EXPRESSION_START",t[t.num=512]="num",t[t.bigint=1536]="bigint",t[t.decimal=2560]="decimal",t[t.regexp=3584]="regexp",t[t.string=4608]="string",t[t.name=5632]="name",t[t.eof=6144]="eof",t[t.bracketL=7680]="bracketL",t[t.bracketR=8192]="bracketR",t[t.braceL=9728]="braceL",t[t.braceBarL=10752]="braceBarL",t[t.braceR=11264]="braceR",t[t.braceBarR=12288]="braceBarR",t[t.parenL=13824]="parenL",t[t.parenR=14336]="parenR",t[t.comma=15360]="comma",t[t.semi=16384]="semi",t[t.colon=17408]="colon",t[t.doubleColon=18432]="doubleColon",t[t.dot=19456]="dot",t[t.question=20480]="question",t[t.questionDot=21504]="questionDot",t[t.arrow=22528]="arrow",t[t.template=23552]="template",t[t.ellipsis=24576]="ellipsis",t[t.backQuote=25600]="backQuote",t[t.dollarBraceL=27136]="dollarBraceL",t[t.at=27648]="at",t[t.hash=29184]="hash",t[t.eq=29728]="eq",t[t.assign=30752]="assign",t[t.preIncDec=32640]="preIncDec",t[t.postIncDec=33664]="postIncDec",t[t.bang=34432]="bang",t[t.tilde=35456]="tilde",t[t.pipeline=35841]="pipeline",t[t.nullishCoalescing=36866]="nullishCoalescing",t[t.logicalOR=37890]="logicalOR",t[t.logicalAND=38915]="logicalAND",t[t.bitwiseOR=39940]="bitwiseOR",t[t.bitwiseXOR=40965]="bitwiseXOR",t[t.bitwiseAND=41990]="bitwiseAND",t[t.equality=43015]="equality",t[t.lessThan=44040]="lessThan",t[t.greaterThan=45064]="greaterThan",t[t.relationalOrEqual=46088]="relationalOrEqual",t[t.bitShiftL=47113]="bitShiftL",t[t.bitShiftR=48137]="bitShiftR",t[t.plus=49802]="plus",t[t.minus=50826]="minus",t[t.modulo=51723]="modulo",t[t.star=52235]="star",t[t.slash=53259]="slash",t[t.exponent=54348]="exponent",t[t.jsxName=55296]="jsxName",t[t.jsxText=56320]="jsxText",t[t.jsxEmptyText=57344]="jsxEmptyText",t[t.jsxTagStart=58880]="jsxTagStart",t[t.jsxTagEnd=59392]="jsxTagEnd",t[t.typeParameterStart=60928]="typeParameterStart",t[t.nonNullAssertion=61440]="nonNullAssertion",t[t.vt=62480]="_break",t[t.gt=63504]="_case",t[t.bt=64528]="_catch",t[t.yt=65552]="_continue",t[t.kt=66576]="_debugger",t[t.xt=67600]="_default",t[t.wt=68624]="_do",t[t.$t=69648]="_else",t[t.St=70672]="_finally",t[t.At=71696]="_for",t[t.Et=73232]="_function",t[t._t=73744]="_if",t[t.Ct=74768]="_return",t[t.Ft=75792]="_switch",t[t.Tt=77456]="_throw",t[t.It=77840]="_try",t[t.Ot=78864]="_var",t[t.Rt=79888]="_let",t[t.Dt=80912]="_const",t[t.Pt=81936]="_while",t[t.jt=82960]="_with",t[t.Nt=84496]="_new",t[t.Mt=85520]="_this",t[t.Lt=86544]="_super",t[t.zt=87568]="_class",t[t.Bt=88080]="_extends",t[t.Ht=89104]="_export",t[t.qt=90640]="_import",t[t.Ut=91664]="_yield",t[t.Gt=92688]="_null",t[t.Vt=93712]="_true",t[t.Wt=94736]="_false",t[t.Jt=95256]="_in",t[t.Yt=96280]="_instanceof",t[t.Xt=97936]="_typeof",t[t.Zt=98960]="_void",t[t.Kt=99984]="_delete",t[t.F=100880]="_async",t[t.N=101904]="_get",t[t.st=102928]="_set",t[t.R=103952]="_declare",t[t.it=104976]="_readonly",t[t.$=106e3]="_abstract",t[t.ct=107024]="_static",t[t.nt=107536]="_public",t[t.K=108560]="_private",t[t.tt=109584]="_protected",t[t.Z=110608]="_override",t[t.A=112144]="_as",t[t.D=113168]="_enum",t[t.ut=114192]="_type",t[t.L=115216]="_implements"}(st||(st={}));class ct{constructor(t,e,n){this.startTokenIndex=t,this.endTokenIndex=e,this.isFunctionScope=n}}class lt{constructor(t,e,n,i,o,r,s,a,c,l,d,u,h){this.potentialArrowAt=t,this.noAnonFunctionType=e,this.inDisallowConditionalTypesContext=n,this.tokensLength=i,this.scopesLength=o,this.pos=r,this.type=s,this.contextualKeyword=a,this.start=c,this.end=l,this.isType=d,this.scopeDepth=u,this.error=h}}class dt{constructor(){dt.prototype.Qt.call(this),dt.prototype.te.call(this),dt.prototype.ee.call(this),dt.prototype.ne.call(this),dt.prototype.ie.call(this),dt.prototype.oe.call(this),dt.prototype.re.call(this),dt.prototype.se.call(this),dt.prototype.ae.call(this),dt.prototype.ce.call(this),dt.prototype.le.call(this),dt.prototype.de.call(this),dt.prototype.ue.call(this)}Qt(){this.potentialArrowAt=-1}te(){this.noAnonFunctionType=!1}ee(){this.inDisallowConditionalTypesContext=!1}ne(){this.tokens=[]}ie(){this.scopes=[]}oe(){this.pos=0}re(){this.type=st.eof}se(){this.contextualKeyword=rt.NONE}ae(){this.start=0}ce(){this.end=0}le(){this.isType=!1}de(){this.scopeDepth=0}ue(){this.error=null}snapshot(){return new lt(this.potentialArrowAt,this.noAnonFunctionType,this.inDisallowConditionalTypesContext,this.tokens.length,this.scopes.length,this.pos,this.type,this.contextualKeyword,this.start,this.end,this.isType,this.scopeDepth,this.error)}restoreFromSnapshot(t){this.potentialArrowAt=t.potentialArrowAt,this.noAnonFunctionType=t.noAnonFunctionType,this.inDisallowConditionalTypesContext=t.inDisallowConditionalTypesContext,this.tokens.length=t.tokensLength,this.scopes.length=t.scopesLength,this.pos=t.pos,this.type=t.type,this.contextualKeyword=t.contextualKeyword,this.start=t.start,this.end=t.end,this.isType=t.isType,this.scopeDepth=t.scopeDepth,this.error=t.error}}let ut,ht,pt,ft,mt,vt;function gt(){return vt++}function bt(t){if("pos"in t){const e=function(t){let e=1,n=1;for(let i=0;i<t;i++)mt.charCodeAt(i)===at.lineFeed?(e++,n=1):n++;return new yt(e,n)}(t.pos);t.message+=` (${e.line}:${e.column})`,t.loc=e}return t}!function(t){t[t.backSpace=8]="backSpace",t[t.lineFeed=10]="lineFeed",t[t.tab=9]="tab",t[t.carriageReturn=13]="carriageReturn",t[t.shiftOut=14]="shiftOut",t[t.space=32]="space",t[t.exclamationMark=33]="exclamationMark",t[t.quotationMark=34]="quotationMark",t[t.numberSign=35]="numberSign",t[t.dollarSign=36]="dollarSign",t[t.percentSign=37]="percentSign",t[t.ampersand=38]="ampersand",t[t.apostrophe=39]="apostrophe",t[t.leftParenthesis=40]="leftParenthesis",t[t.rightParenthesis=41]="rightParenthesis",t[t.asterisk=42]="asterisk",t[t.plusSign=43]="plusSign",t[t.comma=44]="comma",t[t.dash=45]="dash",t[t.dot=46]="dot",t[t.slash=47]="slash",t[t.digit0=48]="digit0",t[t.digit1=49]="digit1",t[t.digit2=50]="digit2",t[t.digit3=51]="digit3",t[t.digit4=52]="digit4",t[t.digit5=53]="digit5",t[t.digit6=54]="digit6",t[t.digit7=55]="digit7",t[t.digit8=56]="digit8",t[t.digit9=57]="digit9",t[t.colon=58]="colon",t[t.semicolon=59]="semicolon",t[t.lessThan=60]="lessThan",t[t.equalsTo=61]="equalsTo",t[t.greaterThan=62]="greaterThan",t[t.questionMark=63]="questionMark",t[t.atSign=64]="atSign",t[t.uppercaseA=65]="uppercaseA",t[t.uppercaseB=66]="uppercaseB",t[t.uppercaseC=67]="uppercaseC",t[t.uppercaseD=68]="uppercaseD",t[t.uppercaseE=69]="uppercaseE",t[t.uppercaseF=70]="uppercaseF",t[t.uppercaseG=71]="uppercaseG",t[t.uppercaseH=72]="uppercaseH",t[t.uppercaseI=73]="uppercaseI",t[t.uppercaseJ=74]="uppercaseJ",t[t.uppercaseK=75]="uppercaseK",t[t.uppercaseL=76]="uppercaseL",t[t.uppercaseM=77]="uppercaseM",t[t.uppercaseN=78]="uppercaseN",t[t.uppercaseO=79]="uppercaseO",t[t.uppercaseP=80]="uppercaseP",t[t.uppercaseQ=81]="uppercaseQ",t[t.uppercaseR=82]="uppercaseR",t[t.uppercaseS=83]="uppercaseS",t[t.uppercaseT=84]="uppercaseT",t[t.uppercaseU=85]="uppercaseU",t[t.uppercaseV=86]="uppercaseV",t[t.uppercaseW=87]="uppercaseW",t[t.uppercaseX=88]="uppercaseX",t[t.uppercaseY=89]="uppercaseY",t[t.uppercaseZ=90]="uppercaseZ",t[t.leftSquareBracket=91]="leftSquareBracket",t[t.backslash=92]="backslash",t[t.rightSquareBracket=93]="rightSquareBracket",t[t.caret=94]="caret",t[t.underscore=95]="underscore",t[t.graveAccent=96]="graveAccent",t[t.lowercaseA=97]="lowercaseA",t[t.lowercaseB=98]="lowercaseB",t[t.lowercaseC=99]="lowercaseC",t[t.lowercaseD=100]="lowercaseD",t[t.lowercaseE=101]="lowercaseE",t[t.lowercaseF=102]="lowercaseF",t[t.lowercaseG=103]="lowercaseG",t[t.lowercaseH=104]="lowercaseH",t[t.lowercaseI=105]="lowercaseI",t[t.lowercaseJ=106]="lowercaseJ",t[t.lowercaseK=107]="lowercaseK",t[t.lowercaseL=108]="lowercaseL",t[t.lowercaseM=109]="lowercaseM",t[t.lowercaseN=110]="lowercaseN",t[t.lowercaseO=111]="lowercaseO",t[t.lowercaseP=112]="lowercaseP",t[t.lowercaseQ=113]="lowercaseQ",t[t.lowercaseR=114]="lowercaseR",t[t.lowercaseS=115]="lowercaseS",t[t.lowercaseT=116]="lowercaseT",t[t.lowercaseU=117]="lowercaseU",t[t.lowercaseV=118]="lowercaseV",t[t.lowercaseW=119]="lowercaseW",t[t.lowercaseX=120]="lowercaseX",t[t.lowercaseY=121]="lowercaseY",t[t.lowercaseZ=122]="lowercaseZ",t[t.leftCurlyBrace=123]="leftCurlyBrace",t[t.verticalBar=124]="verticalBar",t[t.rightCurlyBrace=125]="rightCurlyBrace",t[t.tilde=126]="tilde",t[t.nonBreakingSpace=160]="nonBreakingSpace",t[t.oghamSpaceMark=5760]="oghamSpaceMark",t[t.lineSeparator=8232]="lineSeparator",t[t.paragraphSeparator=8233]="paragraphSeparator"}(at||(at={}));class yt{constructor(t,e){this.line=t,this.column=e}}function kt(t,e,n,i){mt=t,ft=new dt,vt=1,ut=e,ht=n,pt=i}function xt(t){return ft.contextualKeyword===t}function wt(t){const e=ie();return e.type===st.name&&e.contextualKeyword===t}function $t(t){return ft.contextualKeyword===t&&Kt(st.name)}function St(t){$t(t)||It()}function At(){return te(st.eof)||te(st.braceR)||Et()}function Et(){const t=ft.tokens[ft.tokens.length-1];for(let e=t?t.end:0;e<ft.start;e++){const t=mt.charCodeAt(e);if(t===at.lineFeed||t===at.carriageReturn||8232===t||8233===t)return!0}return!1}function _t(){const t=oe();for(let e=ft.end;e<t;e++){const t=mt.charCodeAt(e);if(t===at.lineFeed||t===at.carriageReturn||8232===t||8233===t)return!0}return!1}function Ct(){return Kt(st.semi)||At()}function Ft(){Ct()||It('Unexpected token, expected ";"')}function Tt(t){Kt(t)||It(`Unexpected token, expected "${function(t){switch(t){case st.num:return"num";case st.bigint:return"bigint";case st.decimal:return"decimal";case st.regexp:return"regexp";case st.string:return"string";case st.name:return"name";case st.eof:return"eof";case st.bracketL:return"[";case st.bracketR:return"]";case st.braceL:return"{";case st.braceBarL:return"{|";case st.braceR:return"}";case st.braceBarR:return"|}";case st.parenL:return"(";case st.parenR:return")";case st.comma:return",";case st.semi:return";";case st.colon:return":";case st.doubleColon:return"::";case st.dot:return".";case st.question:return"?";case st.questionDot:return"?.";case st.arrow:return"=>";case st.template:return"template";case st.ellipsis:return"...";case st.backQuote:return"`";case st.dollarBraceL:return"${";case st.at:return"@";case st.hash:return"#";case st.eq:return"=";case st.assign:return"_=";case st.preIncDec:case st.postIncDec:return"++/--";case st.bang:return"!";case st.tilde:return"~";case st.pipeline:return"|>";case st.nullishCoalescing:return"??";case st.logicalOR:return"||";case st.logicalAND:return"&&";case st.bitwiseOR:return"|";case st.bitwiseXOR:return"^";case st.bitwiseAND:return"&";case st.equality:return"==/!=";case st.lessThan:return"<";case st.greaterThan:return">";case st.relationalOrEqual:return"<=/>=";case st.bitShiftL:return"<<";case st.bitShiftR:return">>/>>>";case st.plus:return"+";case st.minus:return"-";case st.modulo:return"%";case st.star:return"*";case st.slash:return"/";case st.exponent:return"**";case st.jsxName:return"jsxName";case st.jsxText:return"jsxText";case st.jsxEmptyText:return"jsxEmptyText";case st.jsxTagStart:return"jsxTagStart";case st.jsxTagEnd:return"jsxTagEnd";case st.typeParameterStart:return"typeParameterStart";case st.nonNullAssertion:return"nonNullAssertion";case st.vt:return"break";case st.gt:return"case";case st.bt:return"catch";case st.yt:return"continue";case st.kt:return"debugger";case st.xt:return"default";case st.wt:return"do";case st.$t:return"else";case st.St:return"finally";case st.At:return"for";case st.Et:return"function";case st._t:return"if";case st.Ct:return"return";case st.Ft:return"switch";case st.Tt:return"throw";case st.It:return"try";case st.Ot:return"var";case st.Rt:return"let";case st.Dt:return"const";case st.Pt:return"while";case st.jt:return"with";case st.Nt:return"new";case st.Mt:return"this";case st.Lt:return"super";case st.zt:return"class";case st.Bt:return"extends";case st.Ht:return"export";case st.qt:return"import";case st.Ut:return"yield";case st.Gt:return"null";case st.Vt:return"true";case st.Wt:return"false";case st.Jt:return"in";case st.Yt:return"instanceof";case st.Xt:return"typeof";case st.Zt:return"void";case st.Kt:return"delete";case st.F:return"async";case st.N:return"get";case st.st:return"set";case st.R:return"declare";case st.it:return"readonly";case st.$:return"abstract";case st.ct:return"static";case st.nt:return"public";case st.K:return"private";case st.tt:return"protected";case st.Z:return"override";case st.A:return"as";case st.D:return"enum";case st.ut:return"type";case st.L:return"implements";default:return""}}(t)}"`)}function It(t="Unexpected token",e=ft.start){if(ft.error)return;const n=new SyntaxError(t);n.pos=e,ft.error=n,ft.pos=mt.length,ue(st.eof)}const Ot=[9,11,12,at.space,at.nonBreakingSpace,at.oghamSpaceMark,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],Rt=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,Dt=new Uint8Array(65536);for(const Fs of Ot)Dt[Fs]=1;function Pt(t){if(t<48)return 36===t;if(t<58)return!0;if(t<65)return!1;if(t<91)return!0;if(t<97)return 95===t;if(t<123)return!0;if(t<128)return!1;throw new Error("Should not be called with non-ASCII char code.")}const jt=new Uint8Array(65536);for(let Fs=0;Fs<128;Fs++)jt[Fs]=Pt(Fs)?1:0;for(let Fs=128;Fs<65536;Fs++)jt[Fs]=1;for(const Fs of Ot)jt[Fs]=0;jt[8232]=0,jt[8233]=0;const Nt=jt.slice();for(let Fs=at.digit0;Fs<=at.digit9;Fs++)Nt[Fs]=0;const Mt=new Int32Array([-1,27,783,918,1755,2376,2862,3483,-1,3699,-1,4617,4752,4833,5130,5508,5940,-1,6480,6939,7749,8181,8451,8613,-1,8829,-1,-1,-1,54,243,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,432,-1,-1,-1,675,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,81,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,108,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,135,-1,-1,-1,-1,-1,-1,-1,-1,-1,162,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,189,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,216,-1,-1,-1,-1,-1,-1,rt.$<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,270,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,297,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,324,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,351,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,378,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,405,-1,-1,-1,-1,-1,-1,-1,-1,rt.S<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.A<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,459,-1,-1,-1,-1,-1,594,-1,-1,-1,-1,-1,-1,486,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,513,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,540,-1,-1,-1,-1,-1,-1,rt._<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,567,-1,-1,-1,-1,-1,-1,-1,rt.C<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,621,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,648,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.F<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,702,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,729,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,756,-1,-1,-1,-1,-1,-1,rt.T<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,810,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,837,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,864,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,891,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.vt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,945,-1,-1,-1,-1,-1,-1,1107,-1,-1,-1,1242,-1,-1,1350,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,972,1026,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,999,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.gt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1053,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1080,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.bt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1134,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1161,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1188,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1215,-1,-1,-1,-1,-1,-1,-1,rt.I<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1269,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1296,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1323,-1,-1,-1,-1,-1,-1,-1,1+(st.zt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1377,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1404,1620,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1431,-1,-1,-1,-1,-1,-1,1+(st.Dt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1458,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1485,-1,-1,-1,-1,-1,-1,-1,-1,1512,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1539,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1566,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1593,-1,-1,-1,-1,-1,-1,-1,-1,rt.O<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1647,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1674,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1701,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1728,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.yt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1782,-1,-1,-1,-1,-1,-1,-1,-1,-1,2349,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1809,1971,-1,-1,2106,-1,-1,-1,-1,-1,2241,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1836,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1863,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1917,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1944,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.kt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1998,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2025,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2052,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2079,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.R<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2133,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2160,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2187,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2214,-1,-1,-1,-1,-1,-1,1+(st.xt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2268,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2295,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2322,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Kt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.wt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2403,-1,2484,-1,-1,-1,-1,-1,-1,-1,-1,-1,2565,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2430,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2457,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.$t<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2511,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2538,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.D<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2592,-1,-1,-1,2727,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2619,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2646,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2673,-1,-1,-1,-1,-1,-1,1+(st.Ht<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2700,-1,-1,-1,-1,-1,-1,-1,rt.P<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2754,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2781,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2808,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2835,-1,-1,-1,-1,-1,-1,-1,1+(st.Bt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2889,-1,-1,-1,-1,-1,-1,-1,2997,-1,-1,-1,-1,-1,3159,-1,-1,3213,-1,-1,3294,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2916,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2943,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2970,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Wt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3024,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3051,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3078,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3105,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3132,-1,1+(st.St<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3186,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.At<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3240,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3267,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.j<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3321,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3348,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3375,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3402,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3429,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3456,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Et<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3510,-1,-1,-1,-1,-1,-1,3564,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3537,-1,-1,-1,-1,-1,-1,rt.N<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3591,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3618,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3645,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3672,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.M<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3726,-1,-1,-1,-1,-1,-1,3753,4077,-1,-1,-1,-1,4590,-1,-1,-1,-1,-1,-1,-1,1+(st._t<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3780,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3807,-1,-1,3996,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3834,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3861,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3888,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3915,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3942,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3969,-1,-1,-1,-1,-1,-1,-1,rt.L<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4023,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4050,-1,-1,-1,-1,-1,-1,1+(st.qt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Jt<<1),-1,-1,-1,-1,-1,4104,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4185,4401,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4131,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4158,-1,-1,-1,-1,-1,-1,-1,-1,rt.B<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4212,-1,-1,-1,-1,-1,-1,-1,4239,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4266,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4293,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4320,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4347,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4374,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Yt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4428,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4455,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4482,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4509,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4536,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4563,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.H<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.q<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4644,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4671,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4698,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4725,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.U<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4779,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4806,-1,-1,-1,-1,-1,-1,1+(st.Rt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4860,-1,-1,-1,-1,-1,4995,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4887,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4914,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4941,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4968,-1,-1,-1,-1,-1,-1,-1,rt.G<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5022,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5049,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5076,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5103,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.V<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5157,-1,-1,-1,5373,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5427,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5184,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5211,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5238,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5265,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5292,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5319,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5346,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.W<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5400,-1,-1,-1,1+(st.Nt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5454,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5481,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Gt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5535,-1,-1,-1,-1,-1,-1,-1,-1,-1,5562,-1,-1,-1,-1,5697,5751,-1,-1,-1,-1,rt.J<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5589,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5616,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5643,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5670,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.Y<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5724,-1,-1,-1,-1,-1,-1,rt.X<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5778,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5805,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5832,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5859,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5886,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5913,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.Z<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5967,-1,-1,6345,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5994,-1,-1,-1,-1,-1,6129,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6021,-1,-1,-1,-1,-1,6048,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6075,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6102,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.K<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6156,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6183,-1,-1,-1,-1,-1,-1,-1,-1,-1,6318,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6210,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6237,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6264,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6291,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.tt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.et<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6426,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.nt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6507,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6534,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6696,-1,-1,6831,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6561,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6588,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6615,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6642,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6669,-1,rt.it<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6723,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6750,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6777,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6804,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.ot<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6858,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6885,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6912,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Ct<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6966,-1,-1,-1,7182,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7236,7371,-1,7479,-1,7614,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6993,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7020,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7047,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7074,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7101,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7128,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7155,-1,-1,-1,-1,-1,-1,-1,rt.rt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7209,-1,-1,-1,-1,-1,-1,rt.st<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7263,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7290,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7317,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7344,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.ct<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7398,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7425,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7452,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Lt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7506,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7533,-1,-1,-1,-1,-1,-1,-1,-1,-1,7560,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7587,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Ft<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7641,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7668,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7695,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7722,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.lt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7776,-1,-1,-1,-1,-1,-1,-1,-1,-1,7938,-1,-1,-1,-1,-1,-1,8046,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7803,-1,-1,-1,-1,-1,-1,-1,-1,7857,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7830,-1,-1,-1,-1,-1,-1,-1,1+(st.Mt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7884,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7911,-1,-1,-1,1+(st.Tt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7965,-1,-1,-1,8019,-1,-1,-1,-1,-1,-1,7992,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Vt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.It<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8073,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8100,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.ut<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8127,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8154,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Xt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8208,-1,-1,-1,-1,8343,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8235,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8262,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8289,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8316,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.ht<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8370,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8397,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8424,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,rt.ft<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8532,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8505,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Ot<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8559,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8586,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Zt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8640,8748,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8667,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8694,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8721,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Pt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8775,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8802,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.jt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8856,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8883,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8910,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8937,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(st.Ut<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Lt,zt;function Bt(t){const e=t.identifierRole;return e===Lt.TopLevelDeclaration||e===Lt.FunctionScopedDeclaration||e===Lt.BlockScopedDeclaration||e===Lt.ObjectShorthandTopLevelDeclaration||e===Lt.ObjectShorthandFunctionScopedDeclaration||e===Lt.ObjectShorthandBlockScopedDeclaration}function Ht(t){const e=t.identifierRole;return e===Lt.FunctionScopedDeclaration||e===Lt.BlockScopedDeclaration||e===Lt.ObjectShorthandFunctionScopedDeclaration||e===Lt.ObjectShorthandBlockScopedDeclaration}function qt(t){const e=t.identifierRole;return e===Lt.TopLevelDeclaration||e===Lt.ObjectShorthandTopLevelDeclaration||e===Lt.ImportDeclaration}function Ut(t){const e=t.identifierRole;return e===Lt.TopLevelDeclaration||e===Lt.BlockScopedDeclaration||e===Lt.ObjectShorthandTopLevelDeclaration||e===Lt.ObjectShorthandBlockScopedDeclaration}function Gt(t){const e=t.identifierRole;return e===Lt.FunctionScopedDeclaration||e===Lt.ObjectShorthandFunctionScopedDeclaration}function Vt(t){return t.identifierRole===Lt.ObjectShorthandTopLevelDeclaration||t.identifierRole===Lt.ObjectShorthandBlockScopedDeclaration||t.identifierRole===Lt.ObjectShorthandFunctionScopedDeclaration}!function(t){t[t.Access=0]="Access",t[t.ExportAccess=1]="ExportAccess",t[t.TopLevelDeclaration=2]="TopLevelDeclaration",t[t.FunctionScopedDeclaration=3]="FunctionScopedDeclaration",t[t.BlockScopedDeclaration=4]="BlockScopedDeclaration",t[t.ObjectShorthandTopLevelDeclaration=5]="ObjectShorthandTopLevelDeclaration",t[t.ObjectShorthandFunctionScopedDeclaration=6]="ObjectShorthandFunctionScopedDeclaration",t[t.ObjectShorthandBlockScopedDeclaration=7]="ObjectShorthandBlockScopedDeclaration",t[t.ObjectShorthand=8]="ObjectShorthand",t[t.ImportDeclaration=9]="ImportDeclaration",t[t.ObjectKey=10]="ObjectKey",t[t.ImportAccess=11]="ImportAccess"}(Lt||(Lt={})),function(t){t[t.NoChildren=0]="NoChildren",t[t.OneChild=1]="OneChild",t[t.StaticChildren=2]="StaticChildren",t[t.KeyAfterPropSpread=3]="KeyAfterPropSpread"}(zt||(zt={}));class Wt{constructor(){this.type=ft.type,this.contextualKeyword=ft.contextualKeyword,this.start=ft.start,this.end=ft.end,this.scopeDepth=ft.scopeDepth,this.isType=ft.isType,this.identifierRole=null,this.jsxRole=null,this.shadowsGlobal=!1,this.isAsyncOperation=!1,this.contextId=null,this.rhsEndIndex=null,this.isExpression=!1,this.numNullishCoalesceStarts=0,this.numNullishCoalesceEnds=0,this.isOptionalChainStart=!1,this.isOptionalChainEnd=!1,this.subscriptStartIndex=null,this.nullishStartIndex=null}}function Jt(){ft.tokens.push(new Wt),ae()}function Yt(){ft.tokens.push(new Wt),ft.start=ft.pos,function(){for(;;){if(ft.pos>=mt.length)return void It("Unterminated template");const t=mt.charCodeAt(ft.pos);if(t===at.graveAccent||t===at.dollarSign&&mt.charCodeAt(ft.pos+1)===at.leftCurlyBrace)return ft.pos===ft.start&&te(st.template)?t===at.dollarSign?(ft.pos+=2,void ue(st.dollarBraceL)):(++ft.pos,void ue(st.backQuote)):void ue(st.template);t===at.backslash&&ft.pos++,ft.pos++}}()}function Xt(t){for(let n=ft.tokens.length-t;n<ft.tokens.length;n++)ft.tokens[n].isType=!0;const e=ft.isType;return ft.isType=!0,e}function Zt(t){ft.isType=t}function Kt(t){return!!te(t)&&(Jt(),!0)}function Qt(t){const e=ft.isType;ft.isType=!0,Kt(t),ft.isType=e}function te(t){return ft.type===t}function ee(){const t=ft.snapshot();Jt();const e=ft.type;return ft.restoreFromSnapshot(t),e}class ne{constructor(t,e){this.type=t,this.contextualKeyword=e}}function ie(){const t=ft.snapshot();Jt();const e=ft.type,n=ft.contextualKeyword;return ft.restoreFromSnapshot(t),new ne(e,n)}function oe(){return re(ft.pos)}function re(t){return Rt.lastIndex=t,t+Rt.exec(mt)[0].length}function se(){return mt.charCodeAt(oe())}function ae(){if(de(),ft.start=ft.pos,ft.pos>=mt.length){const t=ft.tokens;return t.length>=2&&t[t.length-1].start>=mt.length&&t[t.length-2].start>=mt.length&&It("Unexpectedly reached the end of input."),void ue(st.eof)}!function(t){Nt[t]||t===at.backslash||t===at.atSign&&mt.charCodeAt(ft.pos+1)===at.atSign?function(){let t=0,e=0,n=ft.pos;for(;n<mt.length&&(e=mt.charCodeAt(n),!(e<at.lowercaseA||e>at.lowercaseZ));){const i=Mt[t+(e-at.lowercaseA)+1];if(-1===i)break;t=i,n++}const i=Mt[t];if(i>-1&&!jt[e])return ft.pos=n,void(1&i?ue(i>>>1):ue(st.name,i>>>1));for(;n<mt.length;){const t=mt.charCodeAt(n);if(jt[t])n++;else if(t===at.backslash){if(n+=2,mt.charCodeAt(n)===at.leftCurlyBrace){for(;n<mt.length&&mt.charCodeAt(n)!==at.rightCurlyBrace;)n++;n++}}else{if(t!==at.atSign||mt.charCodeAt(n+1)!==at.atSign)break;n+=2}}ft.pos=n,ue(st.name)}():fe(t)}(mt.charCodeAt(ft.pos))}function ce(){for(;mt.charCodeAt(ft.pos)!==at.asterisk||mt.charCodeAt(ft.pos+1)!==at.slash;)if(ft.pos++,ft.pos>mt.length)return void It("Unterminated comment",ft.pos-2);ft.pos+=2}function le(t){let e=mt.charCodeAt(ft.pos+=t);if(ft.pos<mt.length)for(;e!==at.lineFeed&&e!==at.carriageReturn&&e!==at.lineSeparator&&e!==at.paragraphSeparator&&++ft.pos<mt.length;)e=mt.charCodeAt(ft.pos)}function de(){for(;ft.pos<mt.length;){const t=mt.charCodeAt(ft.pos);switch(t){case at.carriageReturn:mt.charCodeAt(ft.pos+1)===at.lineFeed&&++ft.pos;case at.lineFeed:case at.lineSeparator:case at.paragraphSeparator:++ft.pos;break;case at.slash:switch(mt.charCodeAt(ft.pos+1)){case at.asterisk:ft.pos+=2,ce();break;case at.slash:le(2);break;default:return}break;default:if(!Dt[t])return;++ft.pos}}}function ue(t,e=rt.NONE){ft.end=ft.pos,ft.type=t,ft.contextualKeyword=e}function he(){if(ft.isType)return void me(st.greaterThan,1);const t=mt.charCodeAt(ft.pos+1);if(t===at.greaterThan){const t=mt.charCodeAt(ft.pos+2)===at.greaterThan?3:2;return mt.charCodeAt(ft.pos+t)===at.equalsTo?void me(st.assign,t+1):void me(st.bitShiftR,t)}t===at.equalsTo?me(st.relationalOrEqual,2):me(st.greaterThan,1)}function pe(){ft.type===st.greaterThan&&(ft.pos-=1,he())}function fe(t){switch(t){case at.numberSign:return++ft.pos,void ue(st.hash);case at.dot:return void function(){const t=mt.charCodeAt(ft.pos+1);t>=at.digit0&&t<=at.digit9?ge(!0):t===at.dot&&mt.charCodeAt(ft.pos+2)===at.dot?(ft.pos+=3,ue(st.ellipsis)):(++ft.pos,ue(st.dot))}();case at.leftParenthesis:return++ft.pos,void ue(st.parenL);case at.rightParenthesis:return++ft.pos,void ue(st.parenR);case at.semicolon:return++ft.pos,void ue(st.semi);case at.comma:return++ft.pos,void ue(st.comma);case at.leftSquareBracket:return++ft.pos,void ue(st.bracketL);case at.rightSquareBracket:return++ft.pos,void ue(st.bracketR);case at.leftCurlyBrace:return void(pt&&mt.charCodeAt(ft.pos+1)===at.verticalBar?me(st.braceBarL,2):(++ft.pos,ue(st.braceL)));case at.rightCurlyBrace:return++ft.pos,void ue(st.braceR);case at.colon:return void(mt.charCodeAt(ft.pos+1)===at.colon?me(st.doubleColon,2):(++ft.pos,ue(st.colon)));case at.questionMark:return void function(){const t=mt.charCodeAt(ft.pos+1),e=mt.charCodeAt(ft.pos+2);t!==at.questionMark||pt&&ft.isType?t!==at.dot||e>=at.digit0&&e<=at.digit9?(++ft.pos,ue(st.question)):(ft.pos+=2,ue(st.questionDot)):e===at.equalsTo?me(st.assign,3):me(st.nullishCoalescing,2)}();case at.atSign:return++ft.pos,void ue(st.at);case at.graveAccent:return++ft.pos,void ue(st.backQuote);case at.digit0:{const t=mt.charCodeAt(ft.pos+1);if(t===at.lowercaseX||t===at.uppercaseX||t===at.lowercaseO||t===at.uppercaseO||t===at.lowercaseB||t===at.uppercaseB)return void function(){for(ft.pos+=2;;){const t=mt.charCodeAt(ft.pos);if(!(t>=at.digit0&&t<=at.digit9||t>=at.lowercaseA&&t<=at.lowercaseF||t>=at.uppercaseA&&t<=at.uppercaseF||t===at.underscore))break;ft.pos++}mt.charCodeAt(ft.pos)===at.lowercaseN?(++ft.pos,ue(st.bigint)):ue(st.num)}()}case at.digit1:case at.digit2:case at.digit3:case at.digit4:case at.digit5:case at.digit6:case at.digit7:case at.digit8:case at.digit9:return void ge(!1);case at.quotationMark:case at.apostrophe:return void function(t){for(ft.pos++;;){if(ft.pos>=mt.length)return void It("Unterminated string constant");const e=mt.charCodeAt(ft.pos);if(e===at.backslash)ft.pos++;else if(e===t)break;ft.pos++}ft.pos++,ue(st.string)}(t);case at.slash:return void(mt.charCodeAt(ft.pos+1)===at.equalsTo?me(st.assign,2):me(st.slash,1));case at.percentSign:case at.asterisk:return void function(t){let e=t===at.asterisk?st.star:st.modulo,n=1,i=mt.charCodeAt(ft.pos+1);t===at.asterisk&&i===at.asterisk&&(n++,i=mt.charCodeAt(ft.pos+2),e=st.exponent),i===at.equalsTo&&mt.charCodeAt(ft.pos+2)!==at.greaterThan&&(n++,e=st.assign),me(e,n)}(t);case at.verticalBar:case at.ampersand:return void function(t){const e=mt.charCodeAt(ft.pos+1);if(e!==t){if(t===at.verticalBar){if(e===at.greaterThan)return void me(st.pipeline,2);if(e===at.rightCurlyBrace&&pt)return void me(st.braceBarR,2)}e!==at.equalsTo?me(t===at.verticalBar?st.bitwiseOR:st.bitwiseAND,1):me(st.assign,2)}else mt.charCodeAt(ft.pos+2)===at.equalsTo?me(st.assign,3):me(t===at.verticalBar?st.logicalOR:st.logicalAND,2)}(t);case at.caret:return void(mt.charCodeAt(ft.pos+1)===at.equalsTo?me(st.assign,2):me(st.bitwiseXOR,1));case at.plusSign:case at.dash:return void function(t){const e=mt.charCodeAt(ft.pos+1);e!==t?e===at.equalsTo?me(st.assign,2):me(t===at.plusSign?st.plus:st.minus,1):me(st.preIncDec,2)}(t);case at.lessThan:return void function(){const t=mt.charCodeAt(ft.pos+1);if(t===at.lessThan)return mt.charCodeAt(ft.pos+2)===at.equalsTo?void me(st.assign,3):void(ft.isType?me(st.lessThan,1):me(st.bitShiftL,2));t===at.equalsTo?me(st.relationalOrEqual,2):me(st.lessThan,1)}();case at.greaterThan:return void he();case at.equalsTo:case at.exclamationMark:return void function(t){const e=mt.charCodeAt(ft.pos+1);if(e!==at.equalsTo)return t===at.equalsTo&&e===at.greaterThan?(ft.pos+=2,void ue(st.arrow)):void me(t===at.equalsTo?st.eq:st.bang,1);me(st.equality,mt.charCodeAt(ft.pos+2)===at.equalsTo?3:2)}(t);case at.tilde:return void me(st.tilde,1)}It(`Unexpected character '${String.fromCharCode(t)}'`,ft.pos)}function me(t,e){ft.pos+=e,ue(t)}function ve(){for(;;){const t=mt.charCodeAt(ft.pos);if(!(t>=at.digit0&&t<=at.digit9||t===at.underscore))break;ft.pos++}}function ge(t){let e=!1,n=!1;t||ve();let i=mt.charCodeAt(ft.pos);i===at.dot&&(++ft.pos,ve(),i=mt.charCodeAt(ft.pos)),i!==at.uppercaseE&&i!==at.lowercaseE||(i=mt.charCodeAt(++ft.pos),i!==at.plusSign&&i!==at.dash||++ft.pos,ve(),i=mt.charCodeAt(ft.pos)),i===at.lowercaseN?(++ft.pos,e=!0):i===at.lowercaseM&&(++ft.pos,n=!0),ue(e?st.bigint:n?st.decimal:st.num)}function be(t,e=t.currentIndex()){let n=e+1;if(ye(t,n)){const i=t.identifierNameAtIndex(e);return{isType:!1,leftName:i,rightName:i,endIndex:n}}if(n++,ye(t,n))return{isType:!0,leftName:null,rightName:null,endIndex:n};if(n++,ye(t,n))return{isType:!1,leftName:t.identifierNameAtIndex(e),rightName:t.identifierNameAtIndex(e+2),endIndex:n};if(n++,ye(t,n))return{isType:!0,leftName:null,rightName:null,endIndex:n};throw new Error(`Unexpected import/export specifier at ${e}`)}function ye(t,e){const n=t.tokens[e];return n.type===st.braceR||n.type===st.comma}const ke=new Map([["quot",'"'],["amp","&"],["apos","'"],["lt","<"],["gt",">"],["nbsp"," "],["iexcl","¡"],["cent","¢"],["pound","£"],["curren","¤"],["yen","¥"],["brvbar","¦"],["sect","§"],["uml","¨"],["copy","©"],["ordf","ª"],["laquo","«"],["not","¬"],["shy","­"],["reg","®"],["macr","¯"],["deg","°"],["plusmn","±"],["sup2","²"],["sup3","³"],["acute","´"],["micro","µ"],["para","¶"],["middot","·"],["cedil","¸"],["sup1","¹"],["ordm","º"],["raquo","»"],["frac14","¼"],["frac12","½"],["frac34","¾"],["iquest","¿"],["Agrave","À"],["Aacute","Á"],["Acirc","Â"],["Atilde","Ã"],["Auml","Ä"],["Aring","Å"],["AElig","Æ"],["Ccedil","Ç"],["Egrave","È"],["Eacute","É"],["Ecirc","Ê"],["Euml","Ë"],["Igrave","Ì"],["Iacute","Í"],["Icirc","Î"],["Iuml","Ï"],["ETH","Ð"],["Ntilde","Ñ"],["Ograve","Ò"],["Oacute","Ó"],["Ocirc","Ô"],["Otilde","Õ"],["Ouml","Ö"],["times","×"],["Oslash","Ø"],["Ugrave","Ù"],["Uacute","Ú"],["Ucirc","Û"],["Uuml","Ü"],["Yacute","Ý"],["THORN","Þ"],["szlig","ß"],["agrave","à"],["aacute","á"],["acirc","â"],["atilde","ã"],["auml","ä"],["aring","å"],["aelig","æ"],["ccedil","ç"],["egrave","è"],["eacute","é"],["ecirc","ê"],["euml","ë"],["igrave","ì"],["iacute","í"],["icirc","î"],["iuml","ï"],["eth","ð"],["ntilde","ñ"],["ograve","ò"],["oacute","ó"],["ocirc","ô"],["otilde","õ"],["ouml","ö"],["divide","÷"],["oslash","ø"],["ugrave","ù"],["uacute","ú"],["ucirc","û"],["uuml","ü"],["yacute","ý"],["thorn","þ"],["yuml","ÿ"],["OElig","Œ"],["oelig","œ"],["Scaron","Š"],["scaron","š"],["Yuml","Ÿ"],["fnof","ƒ"],["circ","ˆ"],["tilde","˜"],["Alpha","Α"],["Beta","Β"],["Gamma","Γ"],["Delta","Δ"],["Epsilon","Ε"],["Zeta","Ζ"],["Eta","Η"],["Theta","Θ"],["Iota","Ι"],["Kappa","Κ"],["Lambda","Λ"],["Mu","Μ"],["Nu","Ν"],["Xi","Ξ"],["Omicron","Ο"],["Pi","Π"],["Rho","Ρ"],["Sigma","Σ"],["Tau","Τ"],["Upsilon","Υ"],["Phi","Φ"],["Chi","Χ"],["Psi","Ψ"],["Omega","Ω"],["alpha","α"],["beta","β"],["gamma","γ"],["delta","δ"],["epsilon","ε"],["zeta","ζ"],["eta","η"],["theta","θ"],["iota","ι"],["kappa","κ"],["lambda","λ"],["mu","μ"],["nu","ν"],["xi","ξ"],["omicron","ο"],["pi","π"],["rho","ρ"],["sigmaf","ς"],["sigma","σ"],["tau","τ"],["upsilon","υ"],["phi","φ"],["chi","χ"],["psi","ψ"],["omega","ω"],["thetasym","ϑ"],["upsih","ϒ"],["piv","ϖ"],["ensp"," "],["emsp"," "],["thinsp"," "],["zwnj","‌"],["zwj","‍"],["lrm","‎"],["rlm","‏"],["ndash","–"],["mdash","—"],["lsquo","‘"],["rsquo","’"],["sbquo","‚"],["ldquo","“"],["rdquo","”"],["bdquo","„"],["dagger","†"],["Dagger","‡"],["bull","•"],["hellip","…"],["permil","‰"],["prime","′"],["Prime","″"],["lsaquo","‹"],["rsaquo","›"],["oline","‾"],["frasl","⁄"],["euro","€"],["image","ℑ"],["weierp","℘"],["real","ℜ"],["trade","™"],["alefsym","ℵ"],["larr","←"],["uarr","↑"],["rarr","→"],["darr","↓"],["harr","↔"],["crarr","↵"],["lArr","⇐"],["uArr","⇑"],["rArr","⇒"],["dArr","⇓"],["hArr","⇔"],["forall","∀"],["part","∂"],["exist","∃"],["empty","∅"],["nabla","∇"],["isin","∈"],["notin","∉"],["ni","∋"],["prod","∏"],["sum","∑"],["minus","−"],["lowast","∗"],["radic","√"],["prop","∝"],["infin","∞"],["ang","∠"],["and","∧"],["or","∨"],["cap","∩"],["cup","∪"],["int","∫"],["there4","∴"],["sim","∼"],["cong","≅"],["asymp","≈"],["ne","≠"],["equiv","≡"],["le","≤"],["ge","≥"],["sub","⊂"],["sup","⊃"],["nsub","⊄"],["sube","⊆"],["supe","⊇"],["oplus","⊕"],["otimes","⊗"],["perp","⊥"],["sdot","⋅"],["lceil","⌈"],["rceil","⌉"],["lfloor","⌊"],["rfloor","⌋"],["lang","〈"],["rang","〉"],["loz","◊"],["spades","♠"],["clubs","♣"],["hearts","♥"],["diams","♦"]]);function xe(t){const[e,n]=we(t.jsxPragma||"React.createElement"),[i,o]=we(t.jsxFragmentPragma||"React.Fragment");return{base:e,suffix:n,fragmentBase:i,fragmentSuffix:o}}function we(t){let e=t.indexOf(".");return-1===e&&(e=t.length),[t.slice(0,e),t.slice(e)]}class $e{getPrefixCode(){return""}getHoistedCode(){return""}getSuffixCode(){return""}}class Se extends $e{Qt(){this.lastLineNumber=1}te(){this.lastIndex=0}ee(){this.filenameVarName=null}ne(){this.esmAutomaticImportNameResolutions={}}ie(){this.cjsAutomaticModuleNameResolutions={}}constructor(t,e,n,i,o){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.nameManager=i,this.options=o,Se.prototype.Qt.call(this),Se.prototype.te.call(this),Se.prototype.ee.call(this),Se.prototype.ne.call(this),Se.prototype.ie.call(this),this.jsxPragmaInfo=xe(o),this.isAutomaticRuntime="automatic"===o.jsxRuntime,this.jsxImportSource=o.jsxImportSource||"react"}process(){return!!this.tokens.matches1(st.jsxTagStart)&&(this.processJSXTag(),!0)}getPrefixCode(){let t="";if(this.filenameVarName&&(t+=`const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath||"")};`),this.isAutomaticRuntime)if(this.importProcessor)for(const[e,n]of Object.entries(this.cjsAutomaticModuleNameResolutions))t+=`var ${n} = require("${e}");`;else{const{createElement:e,...n}=this.esmAutomaticImportNameResolutions;e&&(t+=`import {createElement as ${e}} from "${this.jsxImportSource}";`);const i=Object.entries(n).map(([t,e])=>`${t} as ${e}`).join(", ");i&&(t+=`import {${i}} from "${this.jsxImportSource+(this.options.production?"/jsx-runtime":"/jsx-dev-runtime")}";`)}return t}processJSXTag(){const{jsxRole:t,start:e}=this.tokens.currentToken(),n=this.options.production?null:this.getElementLocationCode(e);this.isAutomaticRuntime&&t!==zt.KeyAfterPropSpread?this.transformTagToJSXFunc(n,t):this.transformTagToCreateElement(n)}getElementLocationCode(t){return`lineNumber: ${this.getLineNumberForIndex(t)}`}getLineNumberForIndex(t){const e=this.tokens.code;for(;this.lastIndex<t&&this.lastIndex<e.length;)"\n"===e[this.lastIndex]&&this.lastLineNumber++,this.lastIndex++;return this.lastLineNumber}transformTagToJSXFunc(t,e){const n=e===zt.StaticChildren;this.tokens.replaceToken(this.getJSXFuncInvocationCode(n));let i=null;if(this.tokens.matches1(st.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, {`),this.processAutomaticChildrenAndEndProps(e);else{if(this.processTagIntro(),this.tokens.appendCode(", {"),i=this.processProps(!0),this.tokens.matches2(st.slash,st.jsxTagEnd))this.tokens.appendCode("}");else{if(!this.tokens.matches1(st.jsxTagEnd))throw new Error("Expected either /> or > at the end of the tag.");this.tokens.removeToken(),this.processAutomaticChildrenAndEndProps(e)}i&&this.tokens.appendCode(`, ${i}`)}for(this.options.production||(null===i&&this.tokens.appendCode(", void 0"),this.tokens.appendCode(`, ${n}, ${this.getDevSource(t)}, this`)),this.tokens.removeInitialToken();!this.tokens.matches1(st.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}transformTagToCreateElement(t){if(this.tokens.replaceToken(this.getCreateElementInvocationCode()),this.tokens.matches1(st.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, null`),this.processChildren(!0);else if(this.processTagIntro(),this.processPropsObjectWithDevInfo(t),this.tokens.matches2(st.slash,st.jsxTagEnd));else{if(!this.tokens.matches1(st.jsxTagEnd))throw new Error("Expected either /> or > at the end of the tag.");this.tokens.removeToken(),this.processChildren(!0)}for(this.tokens.removeInitialToken();!this.tokens.matches1(st.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}getJSXFuncInvocationCode(t){return this.options.production?this.claimAutoImportedFuncInvocation(t?"jsxs":"jsx","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsxDEV","/jsx-dev-runtime")}getCreateElementInvocationCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedFuncInvocation("createElement","");{const{jsxPragmaInfo:t}=this;return`${this.importProcessor&&this.importProcessor.getIdentifierReplacement(t.base)||t.base}${t.suffix}(`}}getFragmentCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedName("Fragment",this.options.production?"/jsx-runtime":"/jsx-dev-runtime");{const{jsxPragmaInfo:t}=this;return(this.importProcessor&&this.importProcessor.getIdentifierReplacement(t.fragmentBase)||t.fragmentBase)+t.fragmentSuffix}}claimAutoImportedFuncInvocation(t,e){const n=this.claimAutoImportedName(t,e);return this.importProcessor?`${n}.call(void 0, `:`${n}(`}claimAutoImportedName(t,e){if(this.importProcessor){const n=this.jsxImportSource+e;return this.cjsAutomaticModuleNameResolutions[n]||(this.cjsAutomaticModuleNameResolutions[n]=this.importProcessor.getFreeIdentifierForPath(n)),`${this.cjsAutomaticModuleNameResolutions[n]}.${t}`}return this.esmAutomaticImportNameResolutions[t]||(this.esmAutomaticImportNameResolutions[t]=this.nameManager.claimFreeName(`_${t}`)),this.esmAutomaticImportNameResolutions[t]}processTagIntro(){let t=this.tokens.currentIndex()+1;for(;this.tokens.tokens[t].isType||!this.tokens.matches2AtIndex(t-1,st.jsxName,st.jsxName)&&!this.tokens.matches2AtIndex(t-1,st.greaterThan,st.jsxName)&&!this.tokens.matches1AtIndex(t,st.braceL)&&!this.tokens.matches1AtIndex(t,st.jsxTagEnd)&&!this.tokens.matches2AtIndex(t,st.slash,st.jsxTagEnd);)t++;if(t===this.tokens.currentIndex()+1){const t=this.tokens.identifierName();Ae(t)&&this.tokens.replaceToken(`'${t}'`)}for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken()}processPropsObjectWithDevInfo(t){const e=this.options.production?"":`__self: this, __source: ${this.getDevSource(t)}`;this.tokens.matches1(st.jsxName)||this.tokens.matches1(st.braceL)?(this.tokens.appendCode(", {"),this.processProps(!1),this.tokens.appendCode(e?` ${e}}`:"}")):this.tokens.appendCode(e?`, {${e}}`:", null")}processProps(t){let e=null;for(;;){if(this.tokens.matches2(st.jsxName,st.eq)){const n=this.tokens.identifierName();if(t&&"key"===n){null!==e&&this.tokens.appendCode(e.replace(/[^\n]/g,"")),this.tokens.removeToken(),this.tokens.removeToken();const t=this.tokens.snapshot();this.processPropValue(),e=this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(t);continue}this.processPropName(n),this.tokens.replaceToken(": "),this.processPropValue()}else if(this.tokens.matches1(st.jsxName)){const t=this.tokens.identifierName();this.processPropName(t),this.tokens.appendCode(": true")}else{if(!this.tokens.matches1(st.braceL))break;this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")}this.tokens.appendCode(",")}return e}processPropName(t){t.includes("-")?this.tokens.replaceToken(`'${t}'`):this.tokens.copyToken()}processPropValue(){this.tokens.matches1(st.braceL)?(this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")):this.tokens.matches1(st.jsxTagStart)?this.processJSXTag():this.processStringPropValue()}processStringPropValue(){const t=this.tokens.currentToken(),e=this.tokens.code.slice(t.start+1,t.end-1),n=Ee(e),i=function(t){let e="";for(let n=0;n<t.length;n++){const i=t[n];if("\n"===i)if(/\s/.test(t[n+1]))for(e+=" ";n<t.length&&/\s/.test(t[n+1]);)n++;else e+="\n";else if("&"===i){const{entity:i,newI:o}=_e(t,n+1);e+=i,n=o-1}else e+=i}return JSON.stringify(e)}(e);this.tokens.replaceToken(i+n)}processAutomaticChildrenAndEndProps(t){t===zt.StaticChildren?(this.tokens.appendCode(" children: ["),this.processChildren(!1),this.tokens.appendCode("]}")):(t===zt.OneChild&&this.tokens.appendCode(" children: "),this.processChildren(!1),this.tokens.appendCode("}"))}processChildren(t){let e=t;for(;;){if(this.tokens.matches2(st.jsxTagStart,st.slash))return;let t=!1;if(this.tokens.matches1(st.braceL))this.tokens.matches2(st.braceL,st.braceR)?(this.tokens.replaceToken(""),this.tokens.replaceToken("")):(this.tokens.replaceToken(e?", ":""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken(""),t=!0);else if(this.tokens.matches1(st.jsxTagStart))this.tokens.appendCode(e?", ":""),this.processJSXTag(),t=!0;else{if(!this.tokens.matches1(st.jsxText)&&!this.tokens.matches1(st.jsxEmptyText))throw new Error("Unexpected token when processing JSX children.");t=this.processChildTextElement(e)}t&&(e=!0)}}processChildTextElement(t){const e=this.tokens.currentToken(),n=this.tokens.code.slice(e.start,e.end),i=Ee(n),o=function(t){let e="",n="",i=!1,o=!1;for(let r=0;r<t.length;r++){const s=t[r];if(" "===s||"\t"===s||"\r"===s)i||(n+=s);else if("\n"===s)n="",i=!0;else{if(o&&i&&(e+=" "),e+=n,n="","&"===s){const{entity:n,newI:i}=_e(t,r+1);r=i-1,e+=n}else e+=s;o=!0,i=!1}}return i||(e+=n),JSON.stringify(e)}(n);return'""'===o?(this.tokens.replaceToken(i),!1):(this.tokens.replaceToken(`${t?", ":""}${o}${i}`),!0)}getDevSource(t){return`{fileName: ${this.getFilenameVarName()}, ${t}}`}getFilenameVarName(){return this.filenameVarName||(this.filenameVarName=this.nameManager.claimFreeName("_jsxFileName")),this.filenameVarName}}function Ae(t){const e=t.charCodeAt(0);return e>=at.lowercaseA&&e<=at.lowercaseZ}function Ee(t){let e=0,n=0;for(const i of t)"\n"===i?(e++,n=0):" "===i&&n++;return"\n".repeat(e)+" ".repeat(n)}function _e(t,e){let n,i="",o=0,r=e;if("#"===t[r]){let e,i=10;if(r++,"x"===t[r])for(i=16,r++,e=r;r<t.length&&Fe(t.charCodeAt(r));)r++;else for(e=r;r<t.length&&Ce(t.charCodeAt(r));)r++;if(";"===t[r]){const o=t.slice(e,r);o&&(r++,n=String.fromCodePoint(parseInt(o,i)))}}else for(;r<t.length&&o++<10;){const e=t[r];if(r++,";"===e){n=ke.get(i);break}i+=e}return n?{entity:n,newI:r}:{entity:"&",newI:e}}function Ce(t){return t>=at.digit0&&t<=at.digit9}function Fe(t){return t>=at.digit0&&t<=at.digit9||t>=at.lowercaseA&&t<=at.lowercaseF||t>=at.uppercaseA&&t<=at.uppercaseF}function Te(t,e){const n=xe(e),i=new Set;for(let o=0;o<t.tokens.length;o++){const e=t.tokens[o];e.type!==st.name||e.isType||e.identifierRole!==Lt.Access&&e.identifierRole!==Lt.ObjectShorthand&&e.identifierRole!==Lt.ExportAccess||e.shadowsGlobal||i.add(t.identifierNameForToken(e)),e.type===st.jsxTagStart&&i.add(n.base),e.type===st.jsxTagStart&&o+1<t.tokens.length&&t.tokens[o+1].type===st.jsxTagEnd&&(i.add(n.base),i.add(n.fragmentBase)),e.type===st.jsxName&&e.identifierRole===Lt.Access&&(Ae(t.identifierNameForToken(e))&&t.tokens[o+1].type!==st.dot||i.add(t.identifierNameForToken(e)))}return i}class Ie{Qt(){this.nonTypeIdentifiers=new Set}te(){this.importInfoByPath=new Map}ee(){this.importsToReplace=new Map}ne(){this.identifierReplacements=new Map}ie(){this.exportBindingsByLocalName=new Map}constructor(t,e,n,i,o,r,s){this.nameManager=t,this.tokens=e,this.enableLegacyTypeScriptModuleInterop=n,this.options=i,this.isTypeScriptTransformEnabled=o,this.keepUnusedImports=r,this.helperManager=s,Ie.prototype.Qt.call(this),Ie.prototype.te.call(this),Ie.prototype.ee.call(this),Ie.prototype.ne.call(this),Ie.prototype.ie.call(this)}preprocessTokens(){for(let t=0;t<this.tokens.tokens.length;t++)this.tokens.matches1AtIndex(t,st.qt)&&!this.tokens.matches3AtIndex(t,st.qt,st.name,st.eq)&&this.preprocessImportAtIndex(t),this.tokens.matches1AtIndex(t,st.Ht)&&!this.tokens.matches2AtIndex(t,st.Ht,st.eq)&&this.preprocessExportAtIndex(t);this.generateImportReplacements()}pruneTypeOnlyImports(){this.nonTypeIdentifiers=Te(this.tokens,this.options);for(const[t,e]of this.importInfoByPath.entries())e.hasBareImport||e.hasStarExport||e.exportStarNames.length>0||e.namedExports.length>0||[...e.defaultNames,...e.wildcardNames,...e.namedImports.map(({localName:t})=>t)].every(t=>this.shouldAutomaticallyElideImportedName(t))&&this.importsToReplace.set(t,"")}shouldAutomaticallyElideImportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(t)}generateImportReplacements(){for(const[t,e]of this.importInfoByPath.entries()){const{defaultNames:n,wildcardNames:i,namedImports:o,namedExports:r,exportStarNames:s,hasStarExport:a}=e;if(0===n.length&&0===i.length&&0===o.length&&0===r.length&&0===s.length&&!a){this.importsToReplace.set(t,`require('${t}');`);continue}const c=this.getFreeIdentifierForPath(t);let l;l=this.enableLegacyTypeScriptModuleInterop?c:i.length>0?i[0]:this.getFreeIdentifierForPath(t);let d=`var ${c} = require('${t}');`;if(i.length>0)for(const t of i)d+=` var ${t} = ${this.enableLegacyTypeScriptModuleInterop?c:`${this.helperManager.getHelperName("interopRequireWildcard")}(${c})`};`;else s.length>0&&l!==c?d+=` var ${l} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${c});`:n.length>0&&l!==c&&(d+=` var ${l} = ${this.helperManager.getHelperName("interopRequireDefault")}(${c});`);for(const{importedName:t,localName:e}of r)d+=` ${this.helperManager.getHelperName("createNamedExportFrom")}(${c}, '${e}', '${t}');`;for(const t of s)d+=` exports.${t} = ${l};`;a&&(d+=` ${this.helperManager.getHelperName("createStarExport")}(${c});`),this.importsToReplace.set(t,d);for(const t of n)this.identifierReplacements.set(t,`${l}.default`);for(const{importedName:t,localName:e}of o)this.identifierReplacements.set(e,`${c}.${t}`)}}getFreeIdentifierForPath(t){const e=t.split("/"),n=e[e.length-1].replace(/\W/g,"");return this.nameManager.claimFreeName(`_${n}`)}preprocessImportAtIndex(t){const e=[],n=[],i=[];if(t++,(this.tokens.matchesContextualAtIndex(t,rt.ut)||this.tokens.matches1AtIndex(t,st.Xt))&&!this.tokens.matches1AtIndex(t+1,st.comma)&&!this.tokens.matchesContextualAtIndex(t+1,rt.j))return;if(this.tokens.matches1AtIndex(t,st.parenL))return;if(this.tokens.matches1AtIndex(t,st.name)&&(e.push(this.tokens.identifierNameAtIndex(t)),t++,this.tokens.matches1AtIndex(t,st.comma)&&t++),this.tokens.matches1AtIndex(t,st.star)&&(n.push(this.tokens.identifierNameAtIndex(t+=2)),t++),this.tokens.matches1AtIndex(t,st.braceL)){const n=this.getNamedImports(t+1);t=n.newIndex;for(const t of n.namedImports)"default"===t.importedName?e.push(t.localName):i.push(t)}if(this.tokens.matchesContextualAtIndex(t,rt.j)&&t++,!this.tokens.matches1AtIndex(t,st.string))throw new Error("Expected string token at the end of import statement.");const o=this.tokens.stringValueAtIndex(t),r=this.getImportInfo(o);r.defaultNames.push(...e),r.wildcardNames.push(...n),r.namedImports.push(...i),0===e.length&&0===n.length&&0===i.length&&(r.hasBareImport=!0)}preprocessExportAtIndex(t){if(this.tokens.matches2AtIndex(t,st.Ht,st.Ot)||this.tokens.matches2AtIndex(t,st.Ht,st.Rt)||this.tokens.matches2AtIndex(t,st.Ht,st.Dt))this.preprocessVarExportAtIndex(t);else if(this.tokens.matches2AtIndex(t,st.Ht,st.Et)||this.tokens.matches2AtIndex(t,st.Ht,st.zt)){const e=this.tokens.identifierNameAtIndex(t+2);this.addExportBinding(e,e)}else if(this.tokens.matches3AtIndex(t,st.Ht,st.name,st.Et)){const e=this.tokens.identifierNameAtIndex(t+3);this.addExportBinding(e,e)}else this.tokens.matches2AtIndex(t,st.Ht,st.braceL)?this.preprocessNamedExportAtIndex(t):this.tokens.matches2AtIndex(t,st.Ht,st.star)&&this.preprocessExportStarAtIndex(t)}preprocessVarExportAtIndex(t){let e=0;for(let n=t+2;;n++)if(this.tokens.matches1AtIndex(n,st.braceL)||this.tokens.matches1AtIndex(n,st.dollarBraceL)||this.tokens.matches1AtIndex(n,st.bracketL))e++;else if(this.tokens.matches1AtIndex(n,st.braceR)||this.tokens.matches1AtIndex(n,st.bracketR))e--;else{if(0===e&&!this.tokens.matches1AtIndex(n,st.name))break;if(this.tokens.matches1AtIndex(1,st.eq)){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");n=t-1}else if(Bt(this.tokens.tokens[n])){const t=this.tokens.identifierNameAtIndex(n);this.identifierReplacements.set(t,`exports.${t}`)}}}preprocessNamedExportAtIndex(t){t+=2;const{newIndex:e,namedImports:n}=this.getNamedImports(t);if(!this.tokens.matchesContextualAtIndex(t=e,rt.j)){for(const{importedName:t,localName:e}of n)this.addExportBinding(t,e);return}if(t++,!this.tokens.matches1AtIndex(t,st.string))throw new Error("Expected string token at the end of import statement.");const i=this.tokens.stringValueAtIndex(t);this.getImportInfo(i).namedExports.push(...n)}preprocessExportStarAtIndex(t){let e=null;if(this.tokens.matches3AtIndex(t,st.Ht,st.star,st.A)?(e=this.tokens.identifierNameAtIndex(t+=3),t+=2):t+=3,!this.tokens.matches1AtIndex(t,st.string))throw new Error("Expected string token at the end of star export statement.");const n=this.tokens.stringValueAtIndex(t),i=this.getImportInfo(n);null!==e?i.exportStarNames.push(e):i.hasStarExport=!0}getNamedImports(t){const e=[];for(;;){if(this.tokens.matches1AtIndex(t,st.braceR)){t++;break}const n=be(this.tokens,t);if(t=n.endIndex,n.isType||e.push({importedName:n.leftName,localName:n.rightName}),this.tokens.matches2AtIndex(t,st.comma,st.braceR)){t+=2;break}if(this.tokens.matches1AtIndex(t,st.braceR)){t++;break}if(!this.tokens.matches1AtIndex(t,st.comma))throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[t])}`);t++}return{newIndex:t,namedImports:e}}getImportInfo(t){const e=this.importInfoByPath.get(t);if(e)return e;const n={defaultNames:[],wildcardNames:[],namedImports:[],namedExports:[],hasBareImport:!1,exportStarNames:[],hasStarExport:!1};return this.importInfoByPath.set(t,n),n}addExportBinding(t,e){this.exportBindingsByLocalName.has(t)||this.exportBindingsByLocalName.set(t,[]),this.exportBindingsByLocalName.get(t).push(e)}claimImportCode(t){const e=this.importsToReplace.get(t);return this.importsToReplace.set(t,""),e||""}getIdentifierReplacement(t){return this.identifierReplacements.get(t)||null}resolveExportBinding(t){const e=this.exportBindingsByLocalName.get(t);return e&&0!==e.length?e.map(t=>`exports.${t}`).join(" = "):null}getGlobalNames(){return new Set([...this.identifierReplacements.keys(),...this.exportBindingsByLocalName.keys()])}}var Oe=",".charCodeAt(0),Re=";".charCodeAt(0),De=new Uint8Array(64),Pe=new Uint8Array(128);for(let Fs=0;Fs<64;Fs++){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(Fs);De[Fs]=t,Pe[t]=Fs}function je(t,e,n){let i=e-n;i=i<0?-i<<1|1:i<<1;do{let e=31&i;i>>>=5,i>0&&(e|=32),t.write(De[e])}while(i>0);return e}var Ne,Me="undefined"!=typeof TextDecoder?new TextDecoder:"undefined"!=typeof Buffer?{decode:t=>Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString()}:{decode(t){let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}},Le=class{constructor(){this.pos=0,this.out="",this.buffer=new Uint8Array(16384)}write(t){const{buffer:e}=this;e[this.pos++]=t,16384===this.pos&&(this.out+=Me.decode(e),this.pos=0)}flush(){const{buffer:t,out:e,pos:n}=this;return n>0?e+Me.decode(t.subarray(0,n)):e}};function ze(t){const e=new Le;let n=0,i=0,o=0,r=0;for(let s=0;s<t.length;s++){const a=t[s];if(s>0&&e.write(Re),0===a.length)continue;let c=0;for(let t=0;t<a.length;t++){const s=a[t];t>0&&e.write(Oe),c=je(e,s[0],c),1!==s.length&&(n=je(e,s[1],n),i=je(e,s[2],i),o=je(e,s[3],o),4!==s.length&&(r=je(e,s[4],r)))}}return e.flush()}Ne||(Ne=1);var Be=class{constructor(){this.he={__proto__:null},this.array=[]}},He=class{constructor({file:t,sourceRoot:e}={}){this.pe=new Be,this.fe=new Be,this.me=[],this.ve=[],this.file=t,this.sourceRoot=e,this.ge=new Be}},qe=(t,e,n,i,o,r,s,a)=>function(t,e,n,i,o,r,s){const{ve:a,fe:c,me:l}=e,d=function(t,e){for(let n=t.length;n<=e;n++)t[n]=[];return t[e]}(a,n),u=function(t,e){let n=t.length;for(let i=n-1;i>=0&&!(e>=t[i][0]);n=i--);return n}(d,i);if(!o){if(function(t,e){return 0===e||1===t[e-1].length}(d,u))return;return Ue(d,u,[i])}const h=function(t,e){const n=function(t,e){return t.he[e]}(t,e);if(void 0!==n)return n;const{array:i,he:o}=t,r=i.push(e);return o[e]=r-1}(c,o);if(h===l.length&&(l[h]=null),!function(t,e,n,i,o){if(0===e)return!1;const r=t[e-1];return 1!==r.length&&n===r[1]&&i===r[2]&&o===r[3]&&-1===(5===r.length?r[4]:-1)}(d,u,h,r,s))return Ue(d,u,[i,h,r,s])}(0,t,e,n,i,o,r);function Ue(t,e,n){for(let i=t.length;i>e;i--)t[i]=t[i-1];t[e]=n}function Ge({code:t,mappings:e},n,i,o,r){const s=function(t,e){const n=new Array(e.length);let i=0,o=e[i].start,r=0;for(let s=0;s<t.length;s++)s===o&&(n[i]=o-r,i++,o=e[i].start),t.charCodeAt(s)===at.lineFeed&&(r=s+1);return n}(o,r),a=new He({file:i.compiledFilename});let c=0,l=e[0];for(;void 0===l&&c<e.length-1;)c++,l=e[c];let d=0,u=0;l!==u&&qe(a,d,0,n,d,0);for(let m=0;m<t.length;m++){if(m===l)for(qe(a,d,l-u,n,d,s[c]);(l===m||void 0===l)&&c<e.length-1;)c++,l=e[c];t.charCodeAt(m)===at.lineFeed&&(d++,u=m+1,l!==u&&qe(a,d,0,n,d,0))}const{sourceRoot:h,sourcesContent:p,...f}=function(t){const e=function(t){const{ve:e,fe:n,me:i,pe:o,ge:r}=t;return function(t){const{length:e}=t;let n=e;for(let i=n-1;i>=0&&!(t[i].length>0);n=i,i--);n<e&&(t.length=n)}(e),{version:3,file:t.file||void 0,names:o.array,sourceRoot:t.sourceRoot||void 0,sources:n.array,sourcesContent:i,mappings:e,ignoreList:r.array}}(t);return Object.assign({},e,{mappings:ze(e.mappings)})}(a);return f}const Ve={require:'\n    import {createRequire as CREATE_REQUIRE_NAME} from "module";\n    const require = CREATE_REQUIRE_NAME(import.meta.url);\n  ',interopRequireWildcard:"\n    function interopRequireWildcard(obj) {\n      if (obj && obj.__esModule) {\n        return obj;\n      } else {\n        var newObj = {};\n        if (obj != null) {\n          for (var key in obj) {\n            if (Object.prototype.hasOwnProperty.call(obj, key)) {\n              newObj[key] = obj[key];\n            }\n          }\n        }\n        newObj.default = obj;\n        return newObj;\n      }\n    }\n  ",interopRequireDefault:"\n    function interopRequireDefault(obj) {\n      return obj && obj.__esModule ? obj : { default: obj };\n    }\n  ",createNamedExportFrom:"\n    function createNamedExportFrom(obj, localName, importedName) {\n      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});\n    }\n  ",createStarExport:'\n    function createStarExport(obj) {\n      Object.keys(obj)\n        .filter((key) => key !== "default" && key !== "__esModule")\n        .forEach((key) => {\n          if (exports.hasOwnProperty(key)) {\n            return;\n          }\n          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});\n        });\n    }\n  ',nullishCoalesce:"\n    function nullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return rhsFn();\n      }\n    }\n  ",asyncNullishCoalesce:"\n    async function asyncNullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return await rhsFn();\n      }\n    }\n  ",optionalChain:"\n    function optionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",asyncOptionalChain:"\n    async function asyncOptionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = await fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = await fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",optionalChainDelete:"\n    function optionalChainDelete(ops) {\n      const result = OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  ",asyncOptionalChainDelete:"\n    async function asyncOptionalChainDelete(ops) {\n      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  "};class We{Qt(){this.helperNames={}}te(){this.createRequireName=null}constructor(t){this.nameManager=t,We.prototype.Qt.call(this),We.prototype.te.call(this)}getHelperName(t){let e=this.helperNames[t];return e||(e=this.nameManager.claimFreeName(`_${t}`),this.helperNames[t]=e,e)}emitHelpers(){let t="";this.helperNames.optionalChainDelete&&this.getHelperName("optionalChain"),this.helperNames.asyncOptionalChainDelete&&this.getHelperName("asyncOptionalChain");for(const[e,n]of Object.entries(Ve)){const i=this.helperNames[e];let o=n;"optionalChainDelete"===e?o=o.replace("OPTIONAL_CHAIN_NAME",this.helperNames.optionalChain):"asyncOptionalChainDelete"===e?o=o.replace("ASYNC_OPTIONAL_CHAIN_NAME",this.helperNames.asyncOptionalChain):"require"===e&&(null===this.createRequireName&&(this.createRequireName=this.nameManager.claimFreeName("_createRequire")),o=o.replace(/CREATE_REQUIRE_NAME/g,this.createRequireName)),i&&(t+=" ",t+=o.replace(e,i).replace(/\s+/g," ").trim())}return t}}function Je(t,e,n){(function(t,e){for(const n of t.tokens)if(n.type===st.name&&!n.isType&&Ht(n)&&e.has(t.identifierNameForToken(n)))return!0;return!1})(t,n)&&function(t,e,n){const i=[];let o=e.length-1;for(let r=t.tokens.length-1;;r--){for(;i.length>0&&i[i.length-1].startTokenIndex===r+1;)i.pop();for(;o>=0&&e[o].endTokenIndex===r+1;)i.push(e[o]),o--;if(r<0)break;const s=t.tokens[r],a=t.identifierNameForToken(s);if(i.length>1&&!s.isType&&s.type===st.name&&n.has(a))if(Ut(s))Ye(i[i.length-1],t,a);else if(Gt(s)){let e=i.length-1;for(;e>0&&!i[e].isFunctionScope;)e--;if(e<0)throw new Error("Did not find parent function scope.");Ye(i[e],t,a)}}if(i.length>0)throw new Error("Expected empty scope stack after processing file.")}(t,e,n)}function Ye(t,e,n){for(let i=t.startTokenIndex;i<t.endTokenIndex;i++){const t=e.tokens[i];t.type!==st.name&&t.type!==st.jsxName||e.identifierNameForToken(t)!==n||(t.shadowsGlobal=!0)}}class Xe{Qt(){this.usedNames=new Set}constructor(t,e){Xe.prototype.Qt.call(this),this.usedNames=new Set(function(t,e){const n=[];for(const i of e)i.type===st.name&&n.push(t.slice(i.start,i.end));return n}(t,e))}claimFreeName(t){const e=this.findFreeName(t);return this.usedNames.add(e),e}findFreeName(t){if(!this.usedNames.has(t))return t;let e=2;for(;this.usedNames.has(t+String(e));)e++;return t+String(e)}}var Ze,Ke,Qe,tn={},en={},nn={};function on(){if(Ze)return nn;Ze=1;var t,e=nn&&nn.be||(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},t(e,n)},function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(nn,"v",{value:!0}),nn.DetailContext=nn.NoopContext=nn.VError=void 0;var n=function(t){function n(e,i){var o=t.call(this,i)||this;return o.path=e,Object.setPrototypeOf(o,n.prototype),o}return e(n,t),n}(Error);nn.VError=n;var i=function(){function t(){}return t.prototype.fail=function(t,e,n){return!1},t.prototype.unionResolver=function(){return this},t.prototype.createContext=function(){return this},t.prototype.resolveUnion=function(t){},t}();nn.NoopContext=i;var o=function(){function t(){this.ye=[""],this.ke=[null],this.xe=0}return t.prototype.fail=function(t,e,n){return this.ye.push(t),this.ke.push(e),this.xe+=n,!1},t.prototype.unionResolver=function(){return new r},t.prototype.resolveUnion=function(t){for(var e,n,i=null,o=0,r=t.contexts;o<r.length;o++){var s=r[o];(!i||s.xe>=i.xe)&&(i=s)}i&&i.xe>0&&((e=this.ye).push.apply(e,i.ye),(n=this.ke).push.apply(n,i.ke))},t.prototype.getError=function(t){for(var e=[],i=this.ye.length-1;i>=0;i--){var o=this.ye[i];t+="number"==typeof o?"["+o+"]":o?"."+o:"";var r=this.ke[i];r&&e.push(t+" "+r)}return new n(t,e.join("; "))},t.prototype.getErrorDetail=function(t){for(var e=[],n=this.ye.length-1;n>=0;n--){var i=this.ye[n];t+="number"==typeof i?"["+i+"]":i?"."+i:"";var o=this.ke[n];o&&e.push({path:t,message:o})}var r=null;for(n=e.length-1;n>=0;n--)r&&(e[n].nested=[r]),r=e[n];return r},t}();nn.DetailContext=o;var r=function(){function t(){this.contexts=[]}return t.prototype.createContext=function(){var t=new o;return this.contexts.push(t),t},t}();return nn}function rn(){return Ke||(Ke=1,function(t){var e,n=en&&en.be||(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},e(t,n)},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(t,"v",{value:!0}),t.basicTypes=t.BasicType=t.TParamList=t.TParam=t.param=t.TFunc=t.func=t.TProp=t.TOptional=t.opt=t.TIface=t.iface=t.TEnumLiteral=t.enumlit=t.TEnumType=t.enumtype=t.TIntersection=t.intersection=t.TUnion=t.union=t.TTuple=t.tuple=t.TArray=t.array=t.TLiteral=t.lit=t.TName=t.name=t.TType=void 0;var i=on(),o=function(){};function r(t){return"string"==typeof t?a(t):t}function s(t,e){var n=t[e];if(!n)throw new Error("Unknown type "+e);return n}function a(t){return new c(t)}t.TType=o,t.name=a;var c=function(t){function e(e){var n=t.call(this)||this;return n.name=e,n.we="is not a "+e,n}return n(e,t),e.prototype.getChecker=function(t,n,i){var o=this,r=s(t,this.name),a=r.getChecker(t,n,i);return r instanceof w||r instanceof e?a:function(t,e){return!!a(t,e)||e.fail(null,o.we,0)}},e}(o);t.TName=c,t.lit=function(t){return new l(t)};var l=function(t){function e(e){var n=t.call(this)||this;return n.value=e,n.name=JSON.stringify(e),n.we="is not "+n.name,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return t===n.value||e.fail(null,n.we,-1)}},e}(o);t.TLiteral=l,t.array=function(t){return new d(r(t))};var d=function(t){function e(e){var n=t.call(this)||this;return n.ttype=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttype.getChecker(t,e);return function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<t.length;i++)if(!n(t[i],e))return e.fail(i,null,1);return!0}},e}(o);t.TArray=d,t.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new u(t.map(function(t){return r(t)}))};var u=function(t){function e(e){var n=t.call(this)||this;return n.ttypes=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttypes.map(function(n){return n.getChecker(t,e)}),i=function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<n.length;i++)if(!n[i](t[i],e))return e.fail(i,null,1);return!0};return e?function(t,e){return!!i(t,e)&&(t.length<=n.length||e.fail(n.length,"is extraneous",2))}:i},e}(o);t.TTuple=u,t.union=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new h(t.map(function(t){return r(t)}))};var h=function(t){function e(e){var n=t.call(this)||this;n.ttypes=e;var i=e.map(function(t){return t instanceof c||t instanceof l?t.name:null}).filter(function(t){return t}),o=e.length-i.length;return i.length?(o>0&&i.push(o+" more"),n.we="is none of "+i.join(", ")):n.we="is none of "+o+" types",n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,i=this.ttypes.map(function(n){return n.getChecker(t,e)});return function(t,e){for(var o=e.unionResolver(),r=0;r<i.length;r++)if(i[r](t,o.createContext()))return!0;return e.resolveUnion(o),e.fail(null,n.we,0)}},e}(o);t.TUnion=h,t.intersection=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new p(t.map(function(t){return r(t)}))};var p=function(t){function e(e){var n=t.call(this)||this;return n.ttypes=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=new Set,i=this.ttypes.map(function(i){return i.getChecker(t,e,n)});return function(t,e){return!!i.every(function(n){return n(t,e)})||e.fail(null,null,0)}},e}(o);t.TIntersection=p,t.enumtype=function(t){return new f(t)};var f=function(t){function e(e){var n=t.call(this)||this;return n.members=e,n.validValues=new Set,n.we="is not a valid enum value",n.validValues=new Set(Object.keys(e).map(function(t){return e[t]})),n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return!!n.validValues.has(t)||e.fail(null,n.we,0)}},e}(o);t.TEnumType=f,t.enumlit=function(t,e){return new m(t,e)};var m=function(t){function e(e,n){var i=t.call(this)||this;return i.enumName=e,i.prop=n,i.we="is not "+e+"."+n,i}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,i=s(t,this.enumName);if(!(i instanceof f))throw new Error("Type "+this.enumName+" used in enumlit is not an enum type");var o=i.members[this.prop];if(!i.members.hasOwnProperty(this.prop))throw new Error("Unknown value "+this.enumName+"."+this.prop+" used in enumlit");return function(t,e){return t===o||e.fail(null,n.we,-1)}},e}(o);t.TEnumLiteral=m,t.iface=function(t,e){return new v(t,function(t){return Object.keys(t).map(function(e){return function(t,e){return e instanceof g?new b(t,e.ttype,!0):new b(t,r(e),!1)}(e,t[e])})}(e))};var v=function(t){function e(e,n){var i=t.call(this)||this;return i.bases=e,i.props=n,i.propSet=new Set(n.map(function(t){return t.name})),i}return n(e,t),e.prototype.getChecker=function(t,e,n){var o=this,r=this.bases.map(function(n){return s(t,n).getChecker(t,e)}),a=this.props.map(function(n){return n.ttype.getChecker(t,e)}),c=new i.NoopContext,l=this.props.map(function(t,e){return!t.isOpt&&!a[e](void 0,c)}),d=function(t,e){if("object"!=typeof t||null===t)return e.fail(null,"is not an object",0);for(var n=0;n<r.length;n++)if(!r[n](t,e))return!1;for(n=0;n<a.length;n++){var i=o.props[n].name,s=t[i];if(void 0===s){if(l[n])return e.fail(i,"is missing",1)}else if(!a[n](s,e))return e.fail(i,null,1)}return!0};if(!e)return d;var u=this.propSet;return n&&(this.propSet.forEach(function(t){return n.add(t)}),u=n),function(t,e){if(!d(t,e))return!1;for(var n in t)if(!u.has(n))return e.fail(n,"is extraneous",2);return!0}},e}(o);t.TIface=v,t.opt=function(t){return new g(r(t))};var g=function(t){function e(e){var n=t.call(this)||this;return n.ttype=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttype.getChecker(t,e);return function(t,e){return void 0===t||n(t,e)}},e}(o);t.TOptional=g;var b=function(t,e,n){this.name=t,this.ttype=e,this.isOpt=n};t.TProp=b,t.func=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new y(new x(e),r(t))};var y=function(t){function e(e,n){var i=t.call(this)||this;return i.paramList=e,i.result=n,i}return n(e,t),e.prototype.getChecker=function(t,e){return function(t,e){return"function"==typeof t||e.fail(null,"is not a function",0)}},e}(o);t.TFunc=y,t.param=function(t,e,n){return new k(t,r(e),Boolean(n))};var k=function(t,e,n){this.name=t,this.ttype=e,this.isOpt=n};t.TParam=k;var x=function(t){function e(e){var n=t.call(this)||this;return n.params=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,o=this.params.map(function(n){return n.ttype.getChecker(t,e)}),r=new i.NoopContext,s=this.params.map(function(t,e){return!t.isOpt&&!o[e](void 0,r)}),a=function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<o.length;i++){var r=n.params[i];if(void 0===t[i]){if(s[i])return e.fail(r.name,"is missing",1)}else if(!o[i](t[i],e))return e.fail(r.name,null,1)}return!0};return e?function(t,e){return!!a(t,e)&&(t.length<=o.length||e.fail(o.length,"is extraneous",2))}:a},e}(o);t.TParamList=x;var w=function(t){function e(e,n){var i=t.call(this)||this;return i.validator=e,i.message=n,i}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return!!n.validator(t)||e.fail(null,n.message,0)}},e}(o);t.BasicType=w,t.basicTypes={any:new w(function(t){return!0},"is invalid"),number:new w(function(t){return"number"==typeof t},"is not a number"),object:new w(function(t){return"object"==typeof t&&t},"is not an object"),boolean:new w(function(t){return"boolean"==typeof t},"is not a boolean"),string:new w(function(t){return"string"==typeof t},"is not a string"),symbol:new w(function(t){return"symbol"==typeof t},"is not a symbol"),void:new w(function(t){return null==t},"is not void"),undefined:new w(function(t){return void 0===t},"is not undefined"),null:new w(function(t){return null===t},"is not null"),never:new w(function(t){return!1},"is unexpected"),Date:new w(S("[object Date]"),"is not a Date"),RegExp:new w(S("[object RegExp]"),"is not a RegExp")};var $=Object.prototype.toString;function S(t){return function(e){return"object"==typeof e&&e&&$.call(e)===t}}"undefined"!=typeof Buffer&&(t.basicTypes.Buffer=new w(function(t){return Buffer.isBuffer(t)},"is not a Buffer"));for(var A=function(e){t.basicTypes[e.name]=new w(function(t){return t instanceof e},"is not a "+e.name)},E=0,_=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,ArrayBuffer];E<_.length;E++)A(_[E])}(en)),en}var sn=(Qe||(Qe=1,function(t){var e=tn&&tn.$e||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),o=0;for(e=0;e<n;e++)for(var r=arguments[e],s=0,a=r.length;s<a;s++,o++)i[o]=r[s];return i};Object.defineProperty(t,"v",{value:!0}),t.Checker=t.createCheckers=void 0;var n=rn(),i=on(),o=rn();Object.defineProperty(t,"TArray",{enumerable:!0,get:function(){return o.TArray}}),Object.defineProperty(t,"TEnumType",{enumerable:!0,get:function(){return o.TEnumType}}),Object.defineProperty(t,"TEnumLiteral",{enumerable:!0,get:function(){return o.TEnumLiteral}}),Object.defineProperty(t,"TFunc",{enumerable:!0,get:function(){return o.TFunc}}),Object.defineProperty(t,"TIface",{enumerable:!0,get:function(){return o.TIface}}),Object.defineProperty(t,"TLiteral",{enumerable:!0,get:function(){return o.TLiteral}}),Object.defineProperty(t,"TName",{enumerable:!0,get:function(){return o.TName}}),Object.defineProperty(t,"TOptional",{enumerable:!0,get:function(){return o.TOptional}}),Object.defineProperty(t,"TParam",{enumerable:!0,get:function(){return o.TParam}}),Object.defineProperty(t,"TParamList",{enumerable:!0,get:function(){return o.TParamList}}),Object.defineProperty(t,"TProp",{enumerable:!0,get:function(){return o.TProp}}),Object.defineProperty(t,"TTuple",{enumerable:!0,get:function(){return o.TTuple}}),Object.defineProperty(t,"TType",{enumerable:!0,get:function(){return o.TType}}),Object.defineProperty(t,"TUnion",{enumerable:!0,get:function(){return o.TUnion}}),Object.defineProperty(t,"TIntersection",{enumerable:!0,get:function(){return o.TIntersection}}),Object.defineProperty(t,"array",{enumerable:!0,get:function(){return o.array}}),Object.defineProperty(t,"enumlit",{enumerable:!0,get:function(){return o.enumlit}}),Object.defineProperty(t,"enumtype",{enumerable:!0,get:function(){return o.enumtype}}),Object.defineProperty(t,"func",{enumerable:!0,get:function(){return o.func}}),Object.defineProperty(t,"iface",{enumerable:!0,get:function(){return o.iface}}),Object.defineProperty(t,"lit",{enumerable:!0,get:function(){return o.lit}}),Object.defineProperty(t,"name",{enumerable:!0,get:function(){return o.name}}),Object.defineProperty(t,"opt",{enumerable:!0,get:function(){return o.opt}}),Object.defineProperty(t,"param",{enumerable:!0,get:function(){return o.param}}),Object.defineProperty(t,"tuple",{enumerable:!0,get:function(){return o.tuple}}),Object.defineProperty(t,"union",{enumerable:!0,get:function(){return o.union}}),Object.defineProperty(t,"intersection",{enumerable:!0,get:function(){return o.intersection}}),Object.defineProperty(t,"BasicType",{enumerable:!0,get:function(){return o.BasicType}});var r=on();Object.defineProperty(t,"VError",{enumerable:!0,get:function(){return r.VError}}),t.createCheckers=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var o=Object.assign.apply(Object,e([{},n.basicTypes],t)),r={},a=0,c=t;a<c.length;a++)for(var l=c[a],d=0,u=Object.keys(l);d<u.length;d++){var h=u[d];r[h]=new s(o,l[h])}return r};var s=function(){function t(t,e,i){if(void 0===i&&(i="value"),this.suite=t,this.ttype=e,this.Se=i,this.props=new Map,e instanceof n.TIface)for(var o=0,r=e.props;o<r.length;o++){var s=r[o];this.props.set(s.name,s.ttype)}this.checkerPlain=this.ttype.getChecker(t,!1),this.checkerStrict=this.ttype.getChecker(t,!0)}return t.prototype.setReportedPath=function(t){this.Se=t},t.prototype.check=function(t){return this.Ae(this.checkerPlain,t)},t.prototype.test=function(t){return this.checkerPlain(t,new i.NoopContext)},t.prototype.validate=function(t){return this.Ee(this.checkerPlain,t)},t.prototype.strictCheck=function(t){return this.Ae(this.checkerStrict,t)},t.prototype.strictTest=function(t){return this.checkerStrict(t,new i.NoopContext)},t.prototype.strictValidate=function(t){return this.Ee(this.checkerStrict,t)},t.prototype.getProp=function(e){var n=this.props.get(e);if(!n)throw new Error("Type has no property "+e);return new t(this.suite,n,this.Se+"."+e)},t.prototype.methodArgs=function(e){var n=this._e(e);return new t(this.suite,n.paramList)},t.prototype.methodResult=function(e){var n=this._e(e);return new t(this.suite,n.result)},t.prototype.getArgs=function(){if(!(this.ttype instanceof n.TFunc))throw new Error("getArgs() applied to non-function");return new t(this.suite,this.ttype.paramList)},t.prototype.getResult=function(){if(!(this.ttype instanceof n.TFunc))throw new Error("getResult() applied to non-function");return new t(this.suite,this.ttype.result)},t.prototype.getType=function(){return this.ttype},t.prototype.Ae=function(t,e){if(!t(e,new i.NoopContext)){var n=new i.DetailContext;throw t(e,n),n.getError(this.Se)}},t.prototype.Ee=function(t,e){if(t(e,new i.NoopContext))return null;var n=new i.DetailContext;return t(e,n),n.getErrorDetail(this.Se)},t.prototype._e=function(t){var e=this.props.get(t);if(!e)throw new Error("Type has no property "+t);if(!(e instanceof n.TFunc))throw new Error("Property "+t+" is not a method");return e},t}();t.Checker=s}(tn)),tn);const an={Transform:sn.union(sn.lit("jsx"),sn.lit("typescript"),sn.lit("flow"),sn.lit("imports"),sn.lit("react-hot-loader"),sn.lit("jest")),SourceMapOptions:sn.iface([],{compiledFilename:"string"}),Options:sn.iface([],{transforms:sn.array("Transform"),disableESTransforms:sn.opt("boolean"),jsxRuntime:sn.opt(sn.union(sn.lit("classic"),sn.lit("automatic"),sn.lit("preserve"))),production:sn.opt("boolean"),jsxImportSource:sn.opt("string"),jsxPragma:sn.opt("string"),jsxFragmentPragma:sn.opt("string"),keepUnusedImports:sn.opt("boolean"),preserveDynamicImport:sn.opt("boolean"),injectCreateRequireForImportRequire:sn.opt("boolean"),enableLegacyTypeScriptModuleInterop:sn.opt("boolean"),enableLegacyBabel5ModuleInterop:sn.opt("boolean"),sourceMapOptions:sn.opt("SourceMapOptions"),filePath:sn.opt("string")})},{Options:cn}=sn.createCheckers(an);function ln(){Jt(),gi(!1)}function dn(t){Jt(),fn(t)}function un(t){Wi(),pn(t)}function hn(){Wi(),ft.tokens[ft.tokens.length-1].identifierRole=Lt.ImportDeclaration}function pn(t){let e;e=0===ft.scopeDepth?Lt.TopLevelDeclaration:t?Lt.BlockScopedDeclaration:Lt.FunctionScopedDeclaration,ft.tokens[ft.tokens.length-1].identifierRole=e}function fn(t){switch(ft.type){case st.Mt:{const t=Xt(0);return Jt(),void Zt(t)}case st.Ut:case st.name:return ft.type=st.name,void un(t);case st.bracketL:return Jt(),void mn(st.bracketR,t,!0);case st.braceL:return void Mi(!0,t);default:It()}}function mn(t,e,n=!1,i=!1,o=0){let r=!0,s=!1;const a=ft.tokens.length;for(;!Kt(t)&&!ft.error;)if(r?r=!1:(Tt(st.comma),ft.tokens[ft.tokens.length-1].contextId=o,!s&&ft.tokens[a].isType&&(ft.tokens[ft.tokens.length-1].isType=!0,s=!0)),n&&te(st.comma));else{if(Kt(t))break;if(te(st.ellipsis)){dn(e),gn(),Kt(st.comma),Tt(t);break}vn(i,e)}}function vn(t,e){t&&xn([rt.nt,rt.tt,rt.K,rt.it,rt.Z]),bn(e),gn(),bn(e,!0)}function gn(){pt?function(){const t=Xt(0);Kt(st.question),te(st.colon)&&So(),Zt(t)}():ht&&function(){const t=Xt(0);Kt(st.question),Bn(),Zt(t)}()}function bn(t,e=!1){if(e||fn(t),!Kt(st.eq))return;const n=ft.tokens.length-1;gi(),ft.tokens[n].rhsEndIndex=ft.tokens.length}function yn(){return te(st.name)}function kn(){const t=ft.snapshot();return Jt(),!(!(te(st.bracketL)||te(st.braceL)||te(st.star)||te(st.ellipsis)||te(st.hash)||te(st.name)||Boolean(ft.type&st.IS_KEYWORD)||te(st.string)||te(st.num)||te(st.bigint)||te(st.decimal))||Et())||(ft.restoreFromSnapshot(t),!1)}function xn(t){for(;null!==wn(t););}function wn(t){if(!te(st.name))return null;const e=ft.contextualKeyword;if(-1!==t.indexOf(e)&&kn()){switch(e){case rt.it:ft.tokens[ft.tokens.length-1].type=st.it;break;case rt.$:ft.tokens[ft.tokens.length-1].type=st.$;break;case rt.ct:ft.tokens[ft.tokens.length-1].type=st.ct;break;case rt.nt:ft.tokens[ft.tokens.length-1].type=st.nt;break;case rt.K:ft.tokens[ft.tokens.length-1].type=st.K;break;case rt.tt:ft.tokens[ft.tokens.length-1].type=st.tt;break;case rt.Z:ft.tokens[ft.tokens.length-1].type=st.Z;break;case rt.R:ft.tokens[ft.tokens.length-1].type=st.R}return e}return null}function $n(){for(Wi();Kt(st.dot);)Wi()}function Sn(){Tt(st.qt),Tt(st.parenL),Tt(st.string),Tt(st.parenR),Kt(st.dot)&&$n(),te(st.lessThan)&&ii()}function An(){Kt(st.Dt);const t=Kt(st.Jt),e=$t(rt.X);Kt(st.Dt),!t&&!e||te(st.name)?Wi():ft.tokens[ft.tokens.length-1].type=st.name,Kt(st.Bt)&&qn(),Kt(st.eq)&&qn()}function En(){te(st.lessThan)&&_n()}function _n(){const t=Xt(0);for(te(st.lessThan)||te(st.typeParameterStart)?Jt():It();!Kt(st.greaterThan)&&!ft.error;)An(),Kt(st.comma);Zt(t)}function Cn(t){const e=t===st.arrow;En(),Tt(st.parenL),ft.scopeDepth++,mn(st.parenR,!1),ft.scopeDepth--,(e||te(t))&&zn(t)}function Fn(){Kt(st.comma)||Ft()}function Tn(){Cn(st.colon),Fn()}function In(){if(!te(st.bracketL)||!function(){const t=ft.snapshot();Jt();const e=Kt(st.name)&&te(st.colon);return ft.restoreFromSnapshot(t),e}())return!1;const t=Xt(0);return Tt(st.bracketL),Wi(),Hn(),Tt(st.bracketR),Bn(),Fn(),Zt(t),!0}function On(t){Kt(st.question),t||!te(st.parenL)&&!te(st.lessThan)?(Bn(),Fn()):(Cn(st.colon),Fn())}function Rn(){if(te(st.parenL)||te(st.lessThan))return void Tn();if(te(st.Nt))return Jt(),void(te(st.parenL)||te(st.lessThan)?Tn():On(!1));const t=!!wn([rt.it]);In()||((xt(rt.N)||xt(rt.st))&&kn(),zi(-1),On(t))}function Dn(){for(Tt(st.braceL);!Kt(st.braceR)&&!ft.error;)Rn()}function Pn(){Kt(st.ellipsis)?qn():(qn(),Kt(st.question)),Kt(st.colon)&&qn()}var jn;function Nn(t){t===jn.TSAbstractConstructorType&&St(rt.$),t!==jn.TSConstructorType&&t!==jn.TSAbstractConstructorType||Tt(st.Nt);const e=ft.inDisallowConditionalTypesContext;ft.inDisallowConditionalTypesContext=!1,Cn(st.arrow),ft.inDisallowConditionalTypesContext=e}function Mn(){if(xt(rt.U)||xt(rt.ht)||xt(rt.it))Jt(),Mn();else if(xt(rt.B))!function(){if(St(rt.B),Wi(),te(st.Bt)){const t=ft.snapshot();Tt(st.Bt);const e=ft.inDisallowConditionalTypesContext;ft.inDisallowConditionalTypesContext=!0,qn(),ft.inDisallowConditionalTypesContext=e,(ft.error||!ft.inDisallowConditionalTypesContext&&te(st.question))&&ft.restoreFromSnapshot(t)}}();else{const t=ft.inDisallowConditionalTypesContext;ft.inDisallowConditionalTypesContext=!1,function(){for(function(){switch(ft.type){case st.name:return $n(),void(!Et()&&te(st.lessThan)&&ii());case st.Zt:case st.Gt:return void Jt();case st.string:case st.num:case st.bigint:case st.decimal:case st.Vt:case st.Wt:return void Oi();case st.minus:return Jt(),void Oi();case st.Mt:return Jt(),void(xt(rt.q)&&!Et()&&(Jt(),Hn()));case st.Xt:return Tt(st.Xt),te(st.qt)?Sn():$n(),void(!Et()&&te(st.lessThan)&&ii());case st.qt:return void Sn();case st.braceL:return void(function(){const t=ft.snapshot(),e=(Jt(),Kt(st.plus)||Kt(st.minus)?xt(rt.it):(xt(rt.it)&&Jt(),!!te(st.bracketL)&&(Jt(),!!yn()&&(Jt(),te(st.Jt)))));return ft.restoreFromSnapshot(t),e}()?(Tt(st.braceL),te(st.plus)||te(st.minus)?(Jt(),St(rt.it)):$t(rt.it),Tt(st.bracketL),Wi(),Tt(st.Jt),qn(),$t(rt.A)&&qn(),Tt(st.bracketR),te(st.plus)||te(st.minus)?(Jt(),Tt(st.question)):Kt(st.question),Kt(st.colon)&&qn(),Ft(),Tt(st.braceR)):Dn());case st.bracketL:return void function(){for(Tt(st.bracketL);!Kt(st.bracketR)&&!ft.error;)Pn(),Kt(st.comma)}();case st.parenL:return Tt(st.parenL),qn(),void Tt(st.parenR);case st.backQuote:return void function(){for(Yt(),Yt();!te(st.backQuote)&&!ft.error;)Tt(st.dollarBraceL),qn(),Yt(),Yt();Jt()}();default:if(ft.type&st.IS_KEYWORD)return Jt(),void(ft.tokens[ft.tokens.length-1].type=st.name)}It()}();!Et()&&Kt(st.bracketL);)Kt(st.bracketR)||(qn(),Tt(st.bracketR))}(),ft.inDisallowConditionalTypesContext=t}}function Ln(){if(Kt(st.bitwiseAND),Mn(),te(st.bitwiseAND))for(;Kt(st.bitwiseAND);)Mn()}function zn(t){const e=Xt(0);Tt(t);const n=function(){const t=ft.snapshot();return xt(rt.C)?(Jt(),$t(rt.q)?(qn(),!0):yn()||te(st.Mt)?(Jt(),$t(rt.q)&&qn(),!0):(ft.restoreFromSnapshot(t),!1)):!(!yn()&&!te(st.Mt)||(Jt(),xt(rt.q)&&!Et()?(Jt(),qn(),0):(ft.restoreFromSnapshot(t),1)))}();n||qn(),Zt(e)}function Bn(){te(st.colon)&&Hn()}function Hn(){const t=Xt(0);Tt(st.colon),qn(),Zt(t)}function qn(){if(Un(),ft.inDisallowConditionalTypesContext||Et()||!Kt(st.Bt))return;const t=ft.inDisallowConditionalTypesContext;ft.inDisallowConditionalTypesContext=!0,Un(),ft.inDisallowConditionalTypesContext=t,Tt(st.question),qn(),Tt(st.colon),qn()}function Un(){te(st.lessThan)||te(st.parenL)&&function(){const t=ft.snapshot(),e=function(){if(Jt(),te(st.parenR)||te(st.ellipsis))return!0;if(function(){if(te(st.name)||te(st.Mt))return Jt(),!0;if(te(st.braceL)||te(st.bracketL)){let t=1;for(Jt();t>0&&!ft.error;)te(st.braceL)||te(st.bracketL)?t++:(te(st.braceR)||te(st.bracketR))&&t--,Jt();return!0}return!1}()){if(te(st.colon)||te(st.comma)||te(st.question)||te(st.eq))return!0;if(te(st.parenR)&&(Jt(),te(st.arrow)))return!0}return!1}();return ft.restoreFromSnapshot(t),e}()?Nn(jn.TSFunctionType):te(st.Nt)?Nn(jn.TSConstructorType):xt(rt.$)&&ee()===st.Nt?Nn(jn.TSAbstractConstructorType):function(){if(Kt(st.bitwiseOR),Ln(),te(st.bitwiseOR))for(;Kt(st.bitwiseOR);)Ln()}()}function Gn(){for(;!te(st.braceL)&&!ft.error;)Vn(),Kt(st.comma)}function Vn(){$n(),te(st.lessThan)&&ii()}function Wn(){if(te(st.string)?Oi():Wi(),Kt(st.eq)){const t=ft.tokens.length-1;gi(),ft.tokens[t].rhsEndIndex=ft.tokens.length}}function Jn(){for(un(!1),Tt(st.braceL);!Kt(st.braceR)&&!ft.error;)Wn(),Kt(st.comma)}function Yn(){Tt(st.braceL),jo(st.braceR)}function Xn(){un(!1),Kt(st.dot)?Xn():Yn()}function Zn(){xt(rt.M)?Wi():te(st.string)?Ti():It(),te(st.braceL)?Yn():Ft()}function Kn(){hn(),Tt(st.eq),xt(rt.ot)&&ee()===st.parenL?(St(rt.ot),Tt(st.parenL),te(st.string)||It(),Oi(),Tt(st.parenR)):$n(),Ft()}function Qn(){return ti(ft.contextualKeyword,!0)}function ti(t,e){switch(t){case rt.$:if(ei(e)&&te(st.zt))return ft.tokens[ft.tokens.length-1].type=st.$,qo(!0,!1),!0;break;case rt.D:if(ei(e)&&te(st.name))return ft.tokens[ft.tokens.length-1].type=st.D,Jn(),!0;break;case rt.H:if(ei(e)&&te(st.name)){const t=Xt(e?2:1);return un(!1),En(),Kt(st.Bt)&&Gn(),Dn(),Zt(t),!0}break;case rt.V:if(ei(e)){if(te(st.string)){const t=Xt(e?2:1);return Zn(),Zt(t),!0}if(te(st.name)){const t=Xt(e?2:1);return Xn(),Zt(t),!0}}break;case rt.W:if(ei(e)&&te(st.name)){const t=Xt(e?2:1);return Xn(),Zt(t),!0}break;case rt.ut:if(ei(e)&&te(st.name)){const t=Xt(e?2:1);return un(!1),En(),Tt(st.eq),qn(),Ft(),Zt(t),!0}}return!1}function ei(t){return t?(Jt(),!0):!Ct()}function ni(){ft.type===st.bitShiftL&&(ft.pos-=1,ue(st.lessThan)),ii()}function ii(){const t=Xt(0);for(Tt(st.lessThan);!te(st.greaterThan)&&!ft.error;)qn(),Kt(st.comma);t?(Tt(st.greaterThan),Zt(t)):(Zt(t),pe(),Tt(st.greaterThan),ft.tokens[ft.tokens.length-1].isType=!0)}function oi(){if(te(st.name))switch(ft.contextualKeyword){case rt.$:case rt.R:case rt.D:case rt.H:case rt.V:case rt.W:case rt.ut:return!0}return!1}function ri(){pi()}function si(t){ri(),Kt(st.colon)?ri():ft.tokens[ft.tokens.length-1].identifierRole=t}function ai(){const t=ft.tokens.length;si(Lt.Access);let e=!1;for(;te(st.dot);)e=!0,pi(),ri();if(!e){const e=ft.tokens[t],n=mt.charCodeAt(e.start);n>=at.lowercaseA&&n<=at.lowercaseZ&&(e.identifierRole=null)}}function ci(){switch(ft.type){case st.braceL:return Jt(),vi(),void pi();case st.jsxTagStart:return hi(),void pi();case st.string:return void pi();default:It("JSX value should be either an expression or a quoted JSX text")}}function li(){Tt(st.ellipsis),vi()}function di(){te(st.jsxTagEnd)||ai()}function ui(){const t=ft.tokens.length-1;ft.tokens[t].jsxRole=zt.NoChildren;let e=0;if(!function(t){if(te(st.jsxTagEnd))return!1;ai(),ht&&function(){if(Kt(st.jsxTagStart)){ft.tokens[ft.tokens.length-1].type=st.typeParameterStart;const t=Xt(1);for(;!te(st.greaterThan)&&!ft.error;)qn(),Kt(st.comma);pi(),Zt(t)}}();let e=!1;for(;!te(st.slash)&&!te(st.jsxTagEnd)&&!ft.error;)Kt(st.braceL)?(e=!0,Tt(st.ellipsis),gi(),pi()):(e&&ft.end-ft.start===3&&mt.charCodeAt(ft.start)===at.lowercaseK&&mt.charCodeAt(ft.start+1)===at.lowercaseE&&mt.charCodeAt(ft.start+2)===at.lowercaseY&&(ft.tokens[t].jsxRole=zt.KeyAfterPropSpread),si(Lt.ObjectKey),te(st.eq)&&(pi(),ci()));const n=te(st.slash);return n&&pi(),n}(t))for(fi();;)switch(ft.type){case st.jsxTagStart:if(pi(),te(st.slash))return pi(),di(),void(ft.tokens[t].jsxRole!==zt.KeyAfterPropSpread&&(1===e?ft.tokens[t].jsxRole=zt.OneChild:e>1&&(ft.tokens[t].jsxRole=zt.StaticChildren)));e++,ui(),fi();break;case st.jsxText:e++,fi();break;case st.jsxEmptyText:fi();break;case st.braceL:Jt(),te(st.ellipsis)?(li(),fi(),e+=2):(te(st.braceR)||(e++,vi()),fi());break;default:return void It()}}function hi(){pi(),ui()}function pi(){ft.tokens.push(new Wt),de(),ft.start=ft.pos;const t=mt.charCodeAt(ft.pos);if(Nt[t])!function(){let t;do{if(ft.pos>mt.length)return void It("Unexpectedly reached the end of input.");t=mt.charCodeAt(++ft.pos)}while(jt[t]||t===at.dash);ue(st.jsxName)}();else if(t===at.quotationMark||t===at.apostrophe)!function(t){for(ft.pos++;;){if(ft.pos>=mt.length)return void It("Unterminated string constant");if(mt.charCodeAt(ft.pos)===t){ft.pos++;break}ft.pos++}ue(st.string)}(t);else switch(++ft.pos,t){case at.greaterThan:ue(st.jsxTagEnd);break;case at.lessThan:ue(st.jsxTagStart);break;case at.slash:ue(st.slash);break;case at.equalsTo:ue(st.eq);break;case at.leftCurlyBrace:ue(st.braceL);break;case at.dot:ue(st.dot);break;case at.colon:ue(st.colon);break;default:It()}}function fi(){ft.tokens.push(new Wt),ft.start=ft.pos,function(){let t=!1,e=!1;for(;;){if(ft.pos>=mt.length)return void It("Unterminated JSX contents");const n=mt.charCodeAt(ft.pos);if(n===at.lessThan||n===at.leftCurlyBrace)return ft.pos===ft.start?n===at.lessThan?(ft.pos++,void ue(st.jsxTagStart)):void fe(n):void ue(t&&!e?st.jsxEmptyText:st.jsxText);n===at.lineFeed?t=!0:n!==at.space&&n!==at.carriageReturn&&n!==at.tab&&(e=!0),ft.pos++}}()}!function(t){t[t.TSFunctionType=0]="TSFunctionType",t[t.TSConstructorType=1]="TSConstructorType",t[t.TSAbstractConstructorType=2]="TSAbstractConstructorType"}(jn||(jn={}));class mi{constructor(t){this.stop=t}}function vi(t=!1){if(gi(t),te(st.comma))for(;Kt(st.comma);)gi(t)}function gi(t=!1,e=!1){return ht?function(t,e){return ut?function(t,e){if(!te(st.lessThan))return bi(t,e);const n=ft.snapshot();let i=bi(t,e);return ft.error?(ft.restoreFromSnapshot(n),ft.type=st.typeParameterStart,_n(),i=bi(t,e),i||It(),i):i}(t,e):function(t,e){if(!te(st.lessThan))return bi(t,e);const n=ft.snapshot();_n();const i=bi(t,e);return i||It(),ft.error?(ft.restoreFromSnapshot(n),bi(t,e)):i}(t,e)}(t,e):pt?function(t,e){if(te(st.lessThan)){const n=ft.snapshot();let i=bi(t,e);if(!ft.error)return i;ft.restoreFromSnapshot(n),ft.type=st.typeParameterStart;const o=Xt(0);if(ro(),Zt(o),i=bi(t,e),i)return!0;It()}return bi(t,e)}(t,e):bi(t,e)}function bi(t,e){if(te(st.Ut))return Jt(),te(st.semi)||At()||(Kt(st.star),gi()),!1;(te(st.parenL)||te(st.name)||te(st.Ut))&&(ft.potentialArrowAt=ft.start);const n=function(t){const e=function(t){const e=ft.tokens.length;return!!xi()||(ki(e,-1,t),!1)}(t);return!!e||(function(t){ht||pt?function(t){if(te(st.question)){const t=ee();if(t===st.colon||t===st.comma||t===st.parenR)return}yi(t)}(t):yi(t)}(t),!1)}(t);return e&&ji(),ft.type&st.IS_ASSIGN?(Jt(),gi(t),!1):n}function yi(t){Kt(st.question)&&(gi(),Tt(st.colon),gi(t))}function ki(t,e,n){if(ht&&(st.Jt&st.PRECEDENCE_MASK)>e&&!Et()&&($t(rt.A)||$t(rt.rt))){const i=Xt(1);return qn(),Zt(i),pe(),void ki(t,e,n)}const i=ft.type&st.PRECEDENCE_MASK;if(i>0&&(!n||!te(st.Jt))&&i>e){const o=ft.type;Jt(),o===st.nullishCoalescing&&(ft.tokens[ft.tokens.length-1].nullishStartIndex=t);const r=ft.tokens.length;xi(),ki(r,o&st.IS_RIGHT_ASSOCIATIVE?i-1:i,n),o===st.nullishCoalescing&&(ft.tokens[t].numNullishCoalesceStarts++,ft.tokens[ft.tokens.length-1].numNullishCoalesceEnds++),ki(t,e,n)}}function xi(){if(ht&&!ut&&Kt(st.lessThan))return function(){const t=Xt(1);qn(),Tt(st.greaterThan),Zt(t),xi()}(),!1;if(xt(rt.V)&&se()===at.leftCurlyBrace&&!_t())return St(rt.V),Tt(st.braceL),jo(st.braceR),!1;if(ft.type&st.IS_PREFIX)return Jt(),xi(),!1;if(wi())return!0;for(;ft.type&st.IS_POSTFIX&&!At();)ft.type===st.preIncDec&&(ft.type=st.postIncDec),Jt();return!1}function wi(){const t=ft.tokens.length;return!!Ti()||($i(t),ft.tokens.length>t&&ft.tokens[t].isOptionalChainStart&&(ft.tokens[ft.tokens.length-1].isOptionalChainEnd=!0),!1)}function $i(t,e=!1){pt?function(t,e=!1){if(ft.tokens[ft.tokens.length-1].contextualKeyword===rt.F&&te(st.lessThan)){const t=ft.snapshot(),e=function(){ft.scopeDepth++;const t=ft.tokens.length;return Ho(),!!Pi()&&(Hi(t),!0)}();if(e&&!ft.error)return;ft.restoreFromSnapshot(t)}Si(t,e)}(t,e):Si(t,e)}function Si(t,e=!1){const n=new mi(!1);do{Ai(t,e,n)}while(!n.stop&&!ft.error)}function Ai(t,e,n){ht?function(t,e,n){if(Et()||!Kt(st.bang)){if(te(st.lessThan)||te(st.bitShiftL)){const n=ft.snapshot();if(!e&&_i()&&function(){const t=ft.snapshot();return _n(),Ho(),te(st.colon)&&zn(st.colon),Tt(st.arrow),ft.error?(ft.restoreFromSnapshot(t),!1):(Ui(!0),!0)}())return;if(ni(),!e&&Kt(st.parenL)?(ft.tokens[ft.tokens.length-1].subscriptStartIndex=t,Ci()):te(st.backQuote)?Ni():(ft.type===st.greaterThan||ft.type!==st.parenL&&Boolean(ft.type&st.IS_EXPRESSION_START)&&!Et())&&It(),!ft.error)return;ft.restoreFromSnapshot(n)}else!e&&te(st.questionDot)&&ee()===st.lessThan&&(Jt(),ft.tokens[t].isOptionalChainStart=!0,ft.tokens[ft.tokens.length-1].subscriptStartIndex=t,ii(),Tt(st.parenL),Ci());Ei(t,e,n)}else ft.tokens[ft.tokens.length-1].type=st.nonNullAssertion}(t,e,n):pt?function(t,e,n){if(te(st.questionDot)&&ee()===st.lessThan)return e?void(n.stop=!0):(Jt(),so(),Tt(st.parenL),void Ci());if(!e&&te(st.lessThan)){const t=ft.snapshot();if(so(),Tt(st.parenL),Ci(),!ft.error)return;ft.restoreFromSnapshot(t)}Ei(t,e,n)}(t,e,n):Ei(t,e,n)}function Ei(t,e,n){if(!e&&Kt(st.doubleColon))Fi(),n.stop=!0,$i(t,e);else if(te(st.questionDot)){if(ft.tokens[t].isOptionalChainStart=!0,e&&ee()===st.parenL)return void(n.stop=!0);Jt(),ft.tokens[ft.tokens.length-1].subscriptStartIndex=t,Kt(st.bracketL)?(vi(),Tt(st.bracketR)):Kt(st.parenL)?Ci():Ii()}else if(Kt(st.dot))ft.tokens[ft.tokens.length-1].subscriptStartIndex=t,Ii();else if(Kt(st.bracketL))ft.tokens[ft.tokens.length-1].subscriptStartIndex=t,vi(),Tt(st.bracketR);else if(!e&&te(st.parenL))if(_i()){const e=ft.snapshot(),i=ft.tokens.length;Jt(),ft.tokens[ft.tokens.length-1].subscriptStartIndex=t;const o=gt();ft.tokens[ft.tokens.length-1].contextId=o,Ci(),ft.tokens[ft.tokens.length-1].contextId=o,(te(st.colon)||te(st.arrow))&&(ft.restoreFromSnapshot(e),n.stop=!0,ft.scopeDepth++,Ho(),function(t){ht?te(st.colon)&&Hn():pt&&function(){if(te(st.colon)){const t=ft.noAnonFunctionType;ft.noAnonFunctionType=!0,So(),ft.noAnonFunctionType=t}}(),Tt(st.arrow),Hi(t)}(i))}else{Jt(),ft.tokens[ft.tokens.length-1].subscriptStartIndex=t;const e=gt();ft.tokens[ft.tokens.length-1].contextId=e,Ci(),ft.tokens[ft.tokens.length-1].contextId=e}else te(st.backQuote)?Ni():n.stop=!0}function _i(){return ft.tokens[ft.tokens.length-1].contextualKeyword===rt.F&&!At()}function Ci(){let t=!0;for(;!Kt(st.parenR)&&!ft.error;){if(t)t=!1;else if(Tt(st.comma),Kt(st.parenR))break;Vi(!1)}}function Fi(){const t=ft.tokens.length;Ti(),$i(t,!0)}function Ti(){if(Kt(st.modulo))return Wi(),!1;if(te(st.jsxText)||te(st.jsxEmptyText))return Oi(),!1;if(te(st.lessThan)&&ut)return ft.type=st.jsxTagStart,hi(),Jt(),!1;const t=ft.potentialArrowAt===ft.start;switch(ft.type){case st.slash:case st.assign:ft.type===st.assign&&--ft.pos,function(){const t=ft.pos;let e=!1,n=!1;for(;;){if(ft.pos>=mt.length)return void It("Unterminated regular expression",t);const i=mt.charCodeAt(ft.pos);if(e)e=!1;else{if(i===at.leftSquareBracket)n=!0;else if(i===at.rightSquareBracket&&n)n=!1;else if(i===at.slash&&!n)break;e=i===at.backslash}++ft.pos}++ft.pos,function(){for(;ft.pos<mt.length;){const t=mt.charCodeAt(ft.pos);if(jt[t])ft.pos++;else{if(t!==at.backslash)break;if(ft.pos+=2,mt.charCodeAt(ft.pos)===at.leftCurlyBrace){for(;ft.pos<mt.length&&mt.charCodeAt(ft.pos)!==at.rightCurlyBrace;)ft.pos++;ft.pos++}}}}(),ue(st.regexp)}();case st.Lt:case st.Mt:case st.regexp:case st.num:case st.bigint:case st.decimal:case st.string:case st.Gt:case st.Vt:case st.Wt:return Jt(),!1;case st.qt:return Jt(),te(st.dot)&&(ft.tokens[ft.tokens.length-1].type=st.name,Jt(),Wi()),!1;case st.name:{const e=ft.tokens.length,n=ft.start,i=ft.contextualKeyword;return Wi(),i===rt.T?(xi(),!1):i===rt.F&&te(st.Et)&&!At()?(Jt(),Bo(n,!1),!1):t&&i===rt.F&&!At()&&te(st.name)?(ft.scopeDepth++,un(!1),Tt(st.arrow),Hi(e),!0):te(st.wt)&&!At()?(Jt(),Po(),!1):t&&!At()&&te(st.arrow)?(ft.scopeDepth++,pn(!1),Tt(st.arrow),Hi(e),!0):(ft.tokens[ft.tokens.length-1].identifierRole=Lt.Access,!1)}case st.wt:return Jt(),Po(),!1;case st.parenL:return Di(t);case st.bracketL:return Jt(),Gi(st.bracketR,!0),!1;case st.braceL:return Mi(!1,!1),!1;case st.Et:return function(){const t=ft.start;Wi(),Kt(st.dot)&&Wi(),Bo(t,!1)}(),!1;case st.at:Io();case st.zt:return qo(!1),!1;case st.Nt:return Tt(st.Nt),Kt(st.dot)?Wi():(Fi(),Kt(st.questionDot),pt&&function(){if(te(st.lessThan)){const t=ft.snapshot();so(),ft.error&&ft.restoreFromSnapshot(t)}}(),Kt(st.parenL)&&Gi(st.parenR)),!1;case st.backQuote:return Ni(),!1;case st.doubleColon:return Jt(),Fi(),!1;case st.hash:{const t=se();return Nt[t]||t===at.backslash?Ii():Jt(),!1}default:return It(),!1}}function Ii(){Kt(st.hash),Wi()}function Oi(){Jt()}function Ri(){Tt(st.parenL),vi(),Tt(st.parenR)}function Di(t){const e=ft.snapshot(),n=ft.tokens.length;Tt(st.parenL);let i=!0;for(;!te(st.parenR)&&!ft.error;){if(i)i=!1;else if(Tt(st.comma),te(st.parenR))break;if(te(st.ellipsis)){dn(!1),ji();break}gi(!1,!0)}return Tt(st.parenR),!(!t||!te(st.colon)&&At()||!Pi()||(ft.restoreFromSnapshot(e),ft.scopeDepth++,Ho(),Pi(),Hi(n),ft.error&&(ft.restoreFromSnapshot(e),Di(!1),1)))}function Pi(){return ht?function(){if(te(st.colon)){const t=ft.snapshot();zn(st.colon),At()&&It(),te(st.arrow)||It(),ft.error&&ft.restoreFromSnapshot(t)}return Kt(st.arrow)}():pt?function(){if(te(st.colon)){const t=Xt(0),e=ft.snapshot(),n=ft.noAnonFunctionType;ft.noAnonFunctionType=!0,Xi(),ft.noAnonFunctionType=n,At()&&It(),te(st.arrow)||It(),ft.error&&ft.restoreFromSnapshot(e),Zt(t)}return Kt(st.arrow)}():Kt(st.arrow)}function ji(){(ht||pt)&&(Qt(st.question),te(st.colon)&&(ht?Hn():pt&&So()))}function Ni(){for(Yt(),Yt();!te(st.backQuote)&&!ft.error;)Tt(st.dollarBraceL),vi(),Yt(),Yt();Jt()}function Mi(t,e){const n=gt();let i=!0;for(Jt(),ft.tokens[ft.tokens.length-1].contextId=n;!Kt(st.braceR)&&!ft.error;){if(i)i=!1;else if(Tt(st.comma),Kt(st.braceR))break;let o=!1;if(te(st.ellipsis)){const n=ft.tokens.length;if(ln(),t&&(ft.tokens.length===n+2&&pn(e),Kt(st.braceR)))break;continue}t||(o=Kt(st.star)),!t&&xt(rt.F)?(o&&It(),Wi(),te(st.colon)||te(st.parenL)||te(st.braceR)||te(st.eq)||te(st.comma)||(te(st.star)&&(Jt(),o=!0),zi(n))):zi(n),Li(t,e,n)}ft.tokens[ft.tokens.length-1].contextId=n}function Li(t,e,n){ht?En():pt&&te(st.lessThan)&&(ro(),te(st.parenL)||It()),function(t,e){const n=ft.start;return te(st.parenL)?(t&&It(),Bi(n,!1),!0):!!function(t){return!t&&(te(st.string)||te(st.num)||te(st.bracketL)||te(st.name)||!!(ft.type&st.IS_KEYWORD))}(t)&&(zi(e),Bi(n,!1),!0)}(t,n)||function(t,e){if(Kt(st.colon))return void(t?bn(e):gi(!1));let n;n=t?0===ft.scopeDepth?Lt.ObjectShorthandTopLevelDeclaration:e?Lt.ObjectShorthandBlockScopedDeclaration:Lt.ObjectShorthandFunctionScopedDeclaration:Lt.ObjectShorthand,ft.tokens[ft.tokens.length-1].identifierRole=n,bn(e,!0)}(t,e)}function zi(t){pt&&Eo(),Kt(st.bracketL)?(ft.tokens[ft.tokens.length-1].contextId=t,gi(),Tt(st.bracketR),ft.tokens[ft.tokens.length-1].contextId=t):(te(st.num)||te(st.string)||te(st.bigint)||te(st.decimal)?Ti():Ii(),ft.tokens[ft.tokens.length-1].identifierRole=Lt.ObjectKey,ft.tokens[ft.tokens.length-1].contextId=t)}function Bi(t,e){const n=gt();ft.scopeDepth++;const i=ft.tokens.length;Ho(e,n),qi(t,n),ft.scopes.push(new ct(i,ft.tokens.length,!0)),ft.scopeDepth--}function Hi(t){Ui(!0),ft.scopes.push(new ct(t,ft.tokens.length,!0)),ft.scopeDepth--}function qi(t,e=0){ht?function(t,e){if(te(st.colon)&&zn(st.colon),!te(st.braceL)&&Ct()){let e=ft.tokens.length-1;for(;e>=0&&(ft.tokens[e].start>=t||ft.tokens[e].type===st.xt||ft.tokens[e].type===st.Ht);)ft.tokens[e].isType=!0,e--;return}Ui(!1,e)}(t,e):pt?function(t){te(st.colon)&&Xi(),Ui(!1,t)}(e):Ui(!1,e)}function Ui(t,e=0){t&&!te(st.braceL)?gi():Po(!0,e)}function Gi(t,e=!1){let n=!0;for(;!Kt(t)&&!ft.error;){if(n)n=!1;else if(Tt(st.comma),Kt(t))break;Vi(e)}}function Vi(t){t&&te(st.comma)||(te(st.ellipsis)?(ln(),ji()):te(st.question)?Jt():gi(!1,!0))}function Wi(){Jt(),ft.tokens[ft.tokens.length-1].type=st.name}function Ji(t){const e=Xt(0);Tt(t||st.colon),$o(),Zt(e)}function Yi(){Tt(st.modulo),St(rt.I),Kt(st.parenL)&&(vi(),Tt(st.parenR))}function Xi(){const t=Xt(0);Tt(st.colon),te(st.modulo)?Yi():($o(),te(st.modulo)&&Yi()),Zt(t)}function Zi(){te(st.zt)?(Jt(),Ki(!0)):te(st.Et)?(Jt(),Wi(),te(st.lessThan)&&ro(),Tt(st.parenL),bo(),Tt(st.parenR),Xi(),Ft()):te(st.Ot)?(Jt(),Ao(),Ft()):$t(rt.V)?Kt(st.dot)?(St(rt.P),So(),Ft()):function(){for(te(st.string)?Ti():Wi(),Tt(st.braceL);!te(st.braceR)&&!ft.error;)te(st.qt)?(Jt(),ir()):It();Tt(st.braceR)}():xt(rt.ut)?(Jt(),no()):xt(rt.Y)?(Jt(),io(!0)):xt(rt.H)?(Jt(),Ki()):te(st.Ht)?(Tt(st.Ht),Kt(st.xt)?te(st.Et)||te(st.zt)?Zi():($o(),Ft()):te(st.Ot)||te(st.Et)||te(st.zt)||xt(rt.Y)?Zi():te(st.star)||te(st.braceL)||xt(rt.H)||xt(rt.ut)||xt(rt.Y)?Zo():It()):It()}function Ki(t=!1){if(eo(),te(st.lessThan)&&ro(),Kt(st.Bt))do{Qi()}while(!t&&Kt(st.comma));if(xt(rt.G)){Jt();do{Qi()}while(Kt(st.comma))}if(xt(rt.L)){Jt();do{Qi()}while(Kt(st.comma))}po(t,!1,t)}function Qi(){vo(!1),te(st.lessThan)&&so()}function to(){Ki()}function eo(){Wi()}function no(){eo(),te(st.lessThan)&&ro(),Ji(st.eq),Ft()}function io(t){St(rt.ut),eo(),te(st.lessThan)&&ro(),te(st.colon)&&Ji(st.colon),t||Ji(st.eq),Ft()}function oo(){Eo(),Ao(),Kt(st.eq)&&$o()}function ro(){const t=Xt(0);te(st.lessThan)||te(st.typeParameterStart)?Jt():It();do{oo(),te(st.greaterThan)||Tt(st.comma)}while(!te(st.greaterThan)&&!ft.error);Tt(st.greaterThan),Zt(t)}function so(){const t=Xt(0);for(Tt(st.lessThan);!te(st.greaterThan)&&!ft.error;)$o(),te(st.greaterThan)||Tt(st.comma);Tt(st.greaterThan),Zt(t)}function ao(){te(st.num)||te(st.string)?Ti():Wi()}function co(){ee()===st.colon?(ao(),Ji()):$o(),Tt(st.bracketR),Ji()}function lo(){ao(),Tt(st.bracketR),Tt(st.bracketR),te(st.lessThan)||te(st.parenL)?uo():(Kt(st.question),Ji())}function uo(){for(te(st.lessThan)&&ro(),Tt(st.parenL);!te(st.parenR)&&!te(st.ellipsis)&&!ft.error;)go(),te(st.parenR)||Tt(st.comma);Kt(st.ellipsis)&&go(),Tt(st.parenR),Ji()}function ho(){uo()}function po(t,e,n){let i;for(e&&te(st.braceBarL)?(Tt(st.braceBarL),i=st.braceBarR):(Tt(st.braceL),i=st.braceR);!te(i)&&!ft.error;){if(n&&xt(rt.et)){const e=ee();e!==st.colon&&e!==st.question&&(Jt(),t=!1)}if(t&&xt(rt.ct)){const t=ee();t!==st.colon&&t!==st.question&&Jt()}if(Eo(),Kt(st.bracketL))Kt(st.bracketL)?lo():co();else if(te(st.parenL)||te(st.lessThan))ho();else{if(xt(rt.N)||xt(rt.st)){const t=ee();t!==st.name&&t!==st.string&&t!==st.num||Jt()}fo()}mo()}Tt(i)}function fo(){if(te(st.ellipsis)){if(Tt(st.ellipsis),Kt(st.comma)||Kt(st.semi),te(st.braceR))return;$o()}else ao(),te(st.lessThan)||te(st.parenL)?uo():(Kt(st.question),Ji())}function mo(){Kt(st.semi)||Kt(st.comma)||te(st.braceR)||te(st.braceBarR)||It()}function vo(t){for(t||Wi();Kt(st.dot);)Wi()}function go(){const t=ee();t===st.colon||t===st.question?(Wi(),Kt(st.question),Ji()):$o()}function bo(){for(;!te(st.parenR)&&!te(st.ellipsis)&&!ft.error;)go(),te(st.parenR)||Tt(st.comma);Kt(st.ellipsis)&&go()}function yo(){let t=!1;const e=ft.noAnonFunctionType;switch(ft.type){case st.name:return xt(rt.H)?void function(){if(St(rt.H),Kt(st.Bt))do{Qi()}while(Kt(st.comma));po(!1,!1,!1)}():(Wi(),vo(!0),void(te(st.lessThan)&&so()));case st.braceL:return void po(!1,!1,!1);case st.braceBarL:return void po(!1,!0,!1);case st.bracketL:return void function(){for(Tt(st.bracketL);ft.pos<mt.length&&!te(st.bracketR)&&($o(),!te(st.bracketR));)Tt(st.comma);Tt(st.bracketR)}();case st.lessThan:return ro(),Tt(st.parenL),bo(),Tt(st.parenR),Tt(st.arrow),void $o();case st.parenL:if(Jt(),!te(st.parenR)&&!te(st.ellipsis))if(te(st.name)){const e=ee();t=e!==st.question&&e!==st.colon}else t=!0;if(t){if(ft.noAnonFunctionType=!1,$o(),ft.noAnonFunctionType=e,ft.noAnonFunctionType||!(te(st.comma)||te(st.parenR)&&ee()===st.arrow))return void Tt(st.parenR);Kt(st.comma)}return bo(),Tt(st.parenR),Tt(st.arrow),void $o();case st.minus:return Jt(),void Oi();case st.string:case st.num:case st.Vt:case st.Wt:case st.Gt:case st.Mt:case st.Zt:case st.star:return void Jt();default:if(ft.type===st.Xt)return Tt(st.Xt),void yo();if(ft.type&st.IS_KEYWORD)return Jt(),void(ft.tokens[ft.tokens.length-1].type=st.name)}It()}function ko(){Kt(st.question)?ko():function(){for(yo();!At()&&(te(st.bracketL)||te(st.questionDot));)Kt(st.questionDot),Tt(st.bracketL),Kt(st.bracketR)||($o(),Tt(st.bracketR))}()}function xo(){ko(),!ft.noAnonFunctionType&&Kt(st.arrow)&&$o()}function wo(){for(Kt(st.bitwiseAND),xo();Kt(st.bitwiseAND);)xo()}function $o(){!function(){for(Kt(st.bitwiseOR),wo();Kt(st.bitwiseOR);)wo()}()}function So(){Ji()}function Ao(){Wi(),te(st.colon)&&So()}function Eo(){(te(st.plus)||te(st.minus))&&(Jt(),ft.tokens[ft.tokens.length-1].isType=!0)}function _o(){St(rt.D),ft.tokens[ft.tokens.length-1].type=st.D,Wi(),$t(rt.J)&&Jt(),Tt(st.braceL),function(){for(;!te(st.braceR)&&!ft.error&&!Kt(st.ellipsis);)Co(),te(st.braceR)||Tt(st.comma)}(),Tt(st.braceR)}function Co(){Wi(),Kt(st.eq)&&Jt()}function Fo(t){pt&&function(){if(te(st.name)&&ft.contextualKeyword===rt.H){const t=Xt(0);return Jt(),to(),Zt(t),!0}return!!xt(rt.D)&&(_o(),!0)}()||(te(st.at)&&Io(),function(t){if(ht&&function(){if(ft.type===st.Dt){const t=ie();if(t.type===st.name&&t.contextualKeyword===rt.D)return Tt(st.Dt),St(rt.D),ft.tokens[ft.tokens.length-1].type=st.D,Jn(),!0}return!1}())return;const e=ft.type;switch(e){case st.vt:case st.yt:return Jt(),void(Ct()||(Wi(),Ft()));case st.kt:return Jt(),void Ft();case st.wt:return Jt(),Fo(!1),Tt(st.Pt),Ri(),void Kt(st.semi);case st.At:return void function(){ft.scopeDepth++;const t=ft.tokens.length;!function(){Jt();let t=!1;if(xt(rt.T)&&(t=!0,Jt()),Tt(st.parenL),te(st.semi))return t&&It(),void No();const e=To();if(e||te(st.Ot)||te(st.Rt)||te(st.Dt)||xt(rt.ft)&&!wt(rt.J))return e&&St(rt.T),Jt(),Lo(!0,ft.type!==st.Ot),te(st.Jt)||xt(rt.J)?void Mo(t):void No();vi(!0),te(st.Jt)||xt(rt.J)?Mo(t):(t&&It(),No())}(),ft.scopes.push(new ct(t,ft.tokens.length,!1)),ft.scopeDepth--}();case st.Et:if(ee()===st.dot)break;return t||It(),void function(){const t=ft.start;Jt(),Bo(t,!0)}();case st.zt:return t||It(),void qo(!0);case st._t:return Jt(),Ri(),Fo(!1),void(Kt(st.$t)&&Fo(!1));case st.Ct:return Jt(),void(Ct()||(vi(),Ft()));case st.Ft:return void function(){Jt(),Ri(),ft.scopeDepth++;const t=ft.tokens.length;for(Tt(st.braceL);!te(st.braceR)&&!ft.error;)if(te(st.gt)||te(st.xt)){const t=te(st.gt);Jt(),t&&vi(),Tt(st.colon)}else Fo(!0);Jt(),ft.scopes.push(new ct(t,ft.tokens.length,!1)),ft.scopeDepth--}();case st.Tt:return Jt(),vi(),void Ft();case st.It:return void function(){if(Jt(),Po(),te(st.bt)){Jt();let t=null;te(st.parenL)&&(ft.scopeDepth++,t=ft.tokens.length,Tt(st.parenL),fn(!0),ht&&Bn(),Tt(st.parenR)),Po(),null!=t&&(ft.scopes.push(new ct(t,ft.tokens.length,!1)),ft.scopeDepth--)}Kt(st.St)&&Po()}();case st.Rt:case st.Dt:t||It();case st.Ot:return void Do(e!==st.Ot);case st.Pt:return Jt(),Ri(),void Fo(!1);case st.braceL:return void Po();case st.semi:return void Jt();case st.Ht:case st.qt:{const t=ee();if(t===st.parenL||t===st.dot)break;return Jt(),void(e===st.qt?ir():Zo())}case st.name:if(ft.contextualKeyword===rt.F){const t=ft.start,e=ft.snapshot();if(Jt(),te(st.Et)&&!At())return Tt(st.Et),void Bo(t,!0);ft.restoreFromSnapshot(e)}else{if(ft.contextualKeyword===rt.ft&&!_t()&&ee()===st.name)return void Do(!0);if(To())return St(rt.T),void Do(!0)}}const n=ft.tokens.length;vi();let i=null;if(ft.tokens.length===n+1){const t=ft.tokens[ft.tokens.length-1];t.type===st.name&&(i=t.contextualKeyword)}var o;null!=i?Kt(st.colon)?Fo(!0):(o=i,ht?function(t){(function(t){switch(t){case rt.R:{const t=ft.tokens.length-1,e=function(){if(Ct())return!1;switch(ft.type){case st.Et:{const t=Xt(1);return Jt(),Bo(ft.start,!0),Zt(t),!0}case st.zt:{const t=Xt(1);return qo(!0,!1),Zt(t),!0}case st.Dt:if(te(st.Dt)&&wt(rt.D)){const t=Xt(1);return Tt(st.Dt),St(rt.D),ft.tokens[ft.tokens.length-1].type=st.D,Jn(),Zt(t),!0}case st.Ot:case st.Rt:{const t=Xt(1);return Do(ft.type!==st.Ot),Zt(t),!0}case st.name:{const t=Xt(1),e=ft.contextualKeyword;let n=!1;return e===rt.M?(Zn(),n=!0):n=ti(e,!0),Zt(t),n}default:return!1}}();if(e)return ft.tokens[t].type=st.R,!0;break}case rt.M:if(te(st.braceL))return Yn(),!0;break;default:return ti(t,!1)}return!1})(t)||Ft()}(o):pt?function(t){if(t===rt.R){if(te(st.zt)||te(st.name)||te(st.Et)||te(st.Ot)||te(st.Ht)){const t=Xt(1);Zi(),Zt(t)}}else if(te(st.name))if(t===rt.H){const t=Xt(1);to(),Zt(t)}else if(t===rt.ut){const t=Xt(1);no(),Zt(t)}else if(t===rt.Y){const t=Xt(1);io(!1),Zt(t)}Ft()}(o):Ft()):Ft()}(t))}function To(){if(!xt(rt.T))return!1;const t=ft.snapshot();return Jt(),!xt(rt.ft)||Et()?(ft.restoreFromSnapshot(t),!1):(Jt(),!te(st.name)||Et()?(ft.restoreFromSnapshot(t),!1):(ft.restoreFromSnapshot(t),!0))}function Io(){for(;te(st.at);)Oo()}function Oo(){if(Jt(),Kt(st.parenL))vi(),Tt(st.parenR);else{for(Wi();Kt(st.dot);)Wi();ht?((te(st.lessThan)||te(st.bitShiftL))&&ni(),Ro()):Ro()}}function Ro(){Kt(st.parenL)&&Ci()}function Do(t){Jt(),Lo(!1,t),Ft()}function Po(t=!1,e=0){const n=ft.tokens.length;ft.scopeDepth++,Tt(st.braceL),e&&(ft.tokens[ft.tokens.length-1].contextId=e),jo(st.braceR),e&&(ft.tokens[ft.tokens.length-1].contextId=e),ft.scopes.push(new ct(n,ft.tokens.length,t)),ft.scopeDepth--}function jo(t){for(;!Kt(t)&&!ft.error;)Fo(!0)}function No(){Tt(st.semi),te(st.semi)||vi(),Tt(st.semi),te(st.parenR)||vi(),Tt(st.parenR),Fo(!1)}function Mo(t){t?$t(rt.J):Jt(),vi(),Tt(st.parenR),Fo(!1)}function Lo(t,e){for(;;){if(zo(e),Kt(st.eq)){const e=ft.tokens.length-1;gi(t),ft.tokens[e].rhsEndIndex=ft.tokens.length}if(!Kt(st.comma))break}}function zo(t){fn(t),ht?function(){const t=Xt(0);Et()||Kt(st.bang),Bn(),Zt(t)}():pt&&te(st.colon)&&So()}function Bo(t,e,n=!1){te(st.star)&&Jt(),!e||n||te(st.name)||te(st.Ut)||It();let i=null;te(st.name)&&(e||(i=ft.tokens.length,ft.scopeDepth++),un(!1));const o=ft.tokens.length;ft.scopeDepth++,Ho(),qi(t);const r=ft.tokens.length;ft.scopes.push(new ct(o,r,!0)),ft.scopeDepth--,null!==i&&(ft.scopes.push(new ct(i,r,!0)),ft.scopeDepth--)}function Ho(t=!1,e=0){ht?En():pt&&function(){if(te(st.lessThan)){const t=Xt(0);ro(),Zt(t)}}(),Tt(st.parenL),e&&(ft.tokens[ft.tokens.length-1].contextId=e),mn(st.parenR,!1,!1,t,e),e&&(ft.tokens[ft.tokens.length-1].contextId=e)}function qo(t,e=!1){const n=gt();Jt(),ft.tokens[ft.tokens.length-1].contextId=n,ft.tokens[ft.tokens.length-1].isExpression=!t;let i=null;t||(i=ft.tokens.length,ft.scopeDepth++),function(t,e=!1){ht&&(!t||e)&&xt(rt.L)||(te(st.name)&&un(!0),ht?En():pt&&te(st.lessThan)&&ro())}(t,e),function(){let t=!1;Kt(st.Bt)?(wi(),t=!0):t=!1,ht?function(t){if(t&&(te(st.lessThan)||te(st.bitShiftL))&&ni(),$t(rt.L)){ft.tokens[ft.tokens.length-1].type=st.L;const t=Xt(1);Gn(),Zt(t)}}(t):pt&&function(t){if(t&&te(st.lessThan)&&so(),xt(rt.L)){const t=Xt(0);Jt(),ft.tokens[ft.tokens.length-1].type=st.L;do{eo(),te(st.lessThan)&&so()}while(Kt(st.comma));Zt(t)}}(t)}();const o=ft.tokens.length;(function(t){for(Tt(st.braceL);!Kt(st.braceR)&&!ft.error;)Kt(st.semi)||(te(st.at)?Oo():Vo(ft.start,t))})(n),ft.error||(ft.tokens[o].contextId=n,ft.tokens[ft.tokens.length-1].contextId=n,null===i)||(ft.scopes.push(new ct(i,ft.tokens.length,!1)),ft.scopeDepth--)}function Uo(){return te(st.eq)||te(st.semi)||te(st.braceR)||te(st.bang)||te(st.colon)}function Go(){return te(st.parenL)||te(st.lessThan)}function Vo(t,e){ht&&xn([rt.R,rt.nt,rt.tt,rt.K,rt.Z]);let n=!1;if(te(st.name)&&ft.contextualKeyword===rt.ct){if(Wi(),Go())return void Wo(t,!1);if(Uo())return void Xo();if(ft.tokens[ft.tokens.length-1].type=st.ct,n=!0,te(st.braceL))return ft.tokens[ft.tokens.length-1].contextId=e,void Po()}!function(t,e,n){if(ht&&function(t){const e=ft.tokens.length;xn([rt.$,rt.it,rt.R,rt.ct,rt.Z]);const n=ft.tokens.length;if(In()){for(let i=t?e-1:e;i<n;i++)ft.tokens[i].isType=!0;return!0}return!1}(e))return;if(Kt(st.star))return Jo(n),void Wo(t,!1);Jo(n);let i=!1;const o=ft.tokens[ft.tokens.length-1];o.contextualKeyword===rt.O&&(i=!0),Yo(),Go()?Wo(t,i):Uo()?Xo():o.contextualKeyword!==rt.F||Ct()?o.contextualKeyword!==rt.N&&o.contextualKeyword!==rt.st||Ct()&&te(st.star)?o.contextualKeyword!==rt.S||Ct()?Ct()?Xo():It():(Jo(n),Xo()):(ft.tokens[ft.tokens.length-1].type=o.contextualKeyword===rt.N?st.N:st.st,Jo(n),Wo(t,!1)):(ft.tokens[ft.tokens.length-1].type=st.F,te(st.star)&&Jt(),Jo(n),Yo(),Wo(t,!1))}(t,n,e)}function Wo(t,e){ht?En():pt&&te(st.lessThan)&&ro(),Bi(t,e)}function Jo(t){zi(t)}function Yo(){if(ht){const t=Xt(0);Kt(st.question),Zt(t)}}function Xo(){if(ht?(Qt(st.bang),Bn()):pt&&te(st.colon)&&So(),te(st.eq)){const t=ft.tokens.length;Jt(),gi(),ft.tokens[t].rhsEndIndex=ft.tokens.length}Ft()}function Zo(){const t=ft.tokens.length-1;ht&&function(){if(Kt(st.qt))return xt(rt.ut)&&ee()!==st.eq&&St(rt.ut),Kn(),!0;if(Kt(st.eq))return vi(),Ft(),!0;if($t(rt.A))return St(rt.W),Wi(),Ft(),!0;if(xt(rt.ut)){const t=ee();t!==st.braceL&&t!==st.star||Jt()}return!1}()||((pt?te(st.star)||xt(rt.ut)&&ee()===st.star:te(st.star))?pt?function(){if($t(rt.ut)){const t=Xt(2);tr(),Zt(t)}else tr()}():tr():function(){if(ht&&oi())return!1;if(pt&&te(st.name)&&(ft.contextualKeyword===rt.ut||ft.contextualKeyword===rt.H||ft.contextualKeyword===rt.Y||ft.contextualKeyword===rt.D))return!1;if(te(st.name))return ft.contextualKeyword!==rt.F;if(!te(st.xt))return!1;const t=oe(),e=ie();if(e.type===st.comma)return!0;if(e.type===st.name&&e.contextualKeyword===rt.j){const e=mt.charCodeAt(re(t+4));return e===at.quotationMark||e===at.apostrophe}return!1}()?(Wi(),te(st.comma)&&ee()===st.star?(Tt(st.comma),Tt(st.star),St(rt.A),Wi()):Ko(),Qo()):Kt(st.xt)?function(){if(ht&&function(){if(xt(rt.$)&&ee()===st.zt)return ft.type=st.$,Jt(),qo(!0,!0),!0;if(xt(rt.H)){const t=Xt(2);return ti(rt.H,!0),Zt(t),!0}return!1}())return;if(pt&&xt(rt.D)&&(_o(),1))return;const t=ft.start;Kt(st.Et)?Bo(t,!0,!0):xt(rt.F)&&ee()===st.Et?($t(rt.F),Kt(st.Et),Bo(t,!0,!0)):te(st.zt)?qo(!0,!0):te(st.at)?(Io(),qo(!0,!0)):(gi(),Ft())}():ht&&oi()||pt&&(xt(rt.ut)||xt(rt.H)||xt(rt.Y)||xt(rt.D))||ft.type===st.Ot||ft.type===st.Dt||ft.type===st.Rt||ft.type===st.Et||ft.type===st.zt||xt(rt.F)||te(st.at)?ht?function(){const t=$t(rt.R);t&&(ft.tokens[ft.tokens.length-1].type=st.R);let e=!1;if(te(st.name))if(t){const t=Xt(2);e=Qn(),Zt(t)}else e=Qn();if(!e)if(t){const t=Xt(2);Fo(!0),Zt(t)}else Fo(!0)}():pt?function(){if(xt(rt.ut)){const t=Xt(1);Jt(),te(st.braceL)?(er(),Qo()):no(),Zt(t)}else if(xt(rt.Y)){const t=Xt(1);Jt(),io(!1),Zt(t)}else if(xt(rt.H)){const t=Xt(1);Jt(),to(),Zt(t)}else Fo(!0)}():Fo(!0):(er(),Qo()),ft.tokens[t].rhsEndIndex=ft.tokens.length)}function Ko(){Kt(st.comma)&&er()}function Qo(){$t(rt.j)&&(Ti(),sr()),Ft()}function tr(){Tt(st.star),xt(rt.A)?(Jt(),ft.tokens[ft.tokens.length-1].type=st.A,Wi(),Ko(),Qo()):Qo()}function er(){let t=!0;for(Tt(st.braceL);!Kt(st.braceR)&&!ft.error;){if(t)t=!1;else if(Tt(st.comma),Kt(st.braceR))break;nr()}}function nr(){ht?function(){if(Wi(),te(st.comma)||te(st.braceR))ft.tokens[ft.tokens.length-1].identifierRole=Lt.ExportAccess;else{if(Wi(),te(st.comma)||te(st.braceR))return ft.tokens[ft.tokens.length-1].identifierRole=Lt.ExportAccess,ft.tokens[ft.tokens.length-2].isType=!0,void(ft.tokens[ft.tokens.length-1].isType=!0);Wi(),te(st.comma)||te(st.braceR)?ft.tokens[ft.tokens.length-3].identifierRole=Lt.ExportAccess:(Wi(),ft.tokens[ft.tokens.length-3].identifierRole=Lt.ExportAccess,ft.tokens[ft.tokens.length-4].isType=!0,ft.tokens[ft.tokens.length-3].isType=!0,ft.tokens[ft.tokens.length-2].isType=!0,ft.tokens[ft.tokens.length-1].isType=!0)}}():(Wi(),ft.tokens[ft.tokens.length-1].identifierRole=Lt.ExportAccess,$t(rt.A)&&Wi())}function ir(){if(ht&&te(st.name)&&ee()===st.eq)Kn();else{if(ht&&xt(rt.ut)){const t=ie();if(t.type===st.name&&t.contextualKeyword!==rt.j){if(St(rt.ut),ee()===st.eq)return void Kn()}else t.type!==st.star&&t.type!==st.braceL||St(rt.ut)}te(st.string)||(xt(rt.V)&&function(){const t=ft.snapshot();return St(rt.V),$t(rt.j)?xt(rt.j)?(ft.restoreFromSnapshot(t),!0):(ft.restoreFromSnapshot(t),!1):te(st.comma)?(ft.restoreFromSnapshot(t),!1):(ft.restoreFromSnapshot(t),!0)}()&&Jt(),function(){pt&&function(){if(te(st.Xt)||xt(rt.ut)){const e=ie();(((t=e).type===st.name||t.type&st.IS_KEYWORD)&&t.contextualKeyword!==rt.j||e.type===st.braceL||e.type===st.star)&&Jt()}var t}();let t=!0;if(!te(st.name)||(or(),Kt(st.comma))){if(te(st.star))return Jt(),St(rt.A),void or();for(Tt(st.braceL);!Kt(st.braceR)&&!ft.error;){if(t)t=!1;else if(Kt(st.colon)&&It("ES2015 named imports do not destructure. Use another statement for destructuring after the import."),Tt(st.comma),Kt(st.braceR))break;rr()}}}(),St(rt.j)),Ti(),sr(),Ft()}}function or(){hn()}function rr(){ht?function(){if(Wi(),te(st.comma)||te(st.braceR))ft.tokens[ft.tokens.length-1].identifierRole=Lt.ImportDeclaration;else{if(Wi(),te(st.comma)||te(st.braceR))return ft.tokens[ft.tokens.length-1].identifierRole=Lt.ImportDeclaration,ft.tokens[ft.tokens.length-2].isType=!0,void(ft.tokens[ft.tokens.length-1].isType=!0);if(Wi(),te(st.comma)||te(st.braceR))return ft.tokens[ft.tokens.length-3].identifierRole=Lt.ImportAccess,void(ft.tokens[ft.tokens.length-1].identifierRole=Lt.ImportDeclaration);Wi(),ft.tokens[ft.tokens.length-3].identifierRole=Lt.ImportAccess,ft.tokens[ft.tokens.length-1].identifierRole=Lt.ImportDeclaration,ft.tokens[ft.tokens.length-4].isType=!0,ft.tokens[ft.tokens.length-3].isType=!0,ft.tokens[ft.tokens.length-2].isType=!0,ft.tokens[ft.tokens.length-1].isType=!0}}():pt?function(){const t=ft.contextualKeyword===rt.ut||ft.type===st.Xt;t?Jt():Wi(),xt(rt.A)&&!wt(rt.A)?(Wi(),(!t||te(st.name)||ft.type&st.IS_KEYWORD)&&Wi()):(t&&(te(st.name)||ft.type&st.IS_KEYWORD)&&Wi(),$t(rt.A)&&Wi())}():(hn(),xt(rt.A)&&(ft.tokens[ft.tokens.length-1].identifierRole=Lt.ImportAccess,Jt(),hn()))}function sr(){(te(st.jt)||xt(rt._)&&!Et())&&(Jt(),Mi(!1,!1))}function ar(){return 0===ft.pos&&mt.charCodeAt(0)===at.numberSign&&mt.charCodeAt(1)===at.exclamationMark&&le(2),ae(),function(){if(jo(st.eof),ft.scopes.push(new ct(0,ft.tokens.length,!0)),0!==ft.scopeDepth)throw new Error(`Invalid scope depth at end of file: ${ft.scopeDepth}`);return new cr(ft.tokens,ft.scopes)}()}class cr{constructor(t,e){this.tokens=t,this.scopes=e}}class lr{Qt(){this.resultCode=""}te(){this.resultMappings=new Array(this.tokens.length)}ee(){this.tokenIndex=0}constructor(t,e,n,i,o){this.code=t,this.tokens=e,this.isFlowEnabled=n,this.disableESTransforms=i,this.helperManager=o,lr.prototype.Qt.call(this),lr.prototype.te.call(this),lr.prototype.ee.call(this)}snapshot(){return{resultCode:this.resultCode,tokenIndex:this.tokenIndex}}restoreToSnapshot(t){this.resultCode=t.resultCode,this.tokenIndex=t.tokenIndex}dangerouslyGetAndRemoveCodeSinceSnapshot(t){const e=this.resultCode.slice(t.resultCode.length);return this.resultCode=t.resultCode,e}reset(){this.resultCode="",this.resultMappings=new Array(this.tokens.length),this.tokenIndex=0}matchesContextualAtIndex(t,e){return this.matches1AtIndex(t,st.name)&&this.tokens[t].contextualKeyword===e}identifierNameAtIndex(t){return this.identifierNameForToken(this.tokens[t])}identifierNameAtRelativeIndex(t){return this.identifierNameForToken(this.tokenAtRelativeIndex(t))}identifierName(){return this.identifierNameForToken(this.currentToken())}identifierNameForToken(t){return this.code.slice(t.start,t.end)}rawCodeForToken(t){return this.code.slice(t.start,t.end)}stringValueAtIndex(t){return this.stringValueForToken(this.tokens[t])}stringValue(){return this.stringValueForToken(this.currentToken())}stringValueForToken(t){return this.code.slice(t.start+1,t.end-1)}matches1AtIndex(t,e){return this.tokens[t].type===e}matches2AtIndex(t,e,n){return this.tokens[t].type===e&&this.tokens[t+1].type===n}matches3AtIndex(t,e,n,i){return this.tokens[t].type===e&&this.tokens[t+1].type===n&&this.tokens[t+2].type===i}matches1(t){return this.tokens[this.tokenIndex].type===t}matches2(t,e){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e}matches3(t,e,n){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n}matches4(t,e,n,i){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n&&this.tokens[this.tokenIndex+3].type===i}matches5(t,e,n,i,o){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n&&this.tokens[this.tokenIndex+3].type===i&&this.tokens[this.tokenIndex+4].type===o}matchesContextual(t){return this.matchesContextualAtIndex(this.tokenIndex,t)}matchesContextIdAndLabel(t,e){return this.matches1(t)&&this.currentToken().contextId===e}previousWhitespaceAndComments(){let t=this.code.slice(this.tokenIndex>0?this.tokens[this.tokenIndex-1].end:0,this.tokenIndex<this.tokens.length?this.tokens[this.tokenIndex].start:this.code.length);return this.isFlowEnabled&&(t=t.replace(/@flow/g,"")),t}replaceToken(t){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=t,this.appendTokenSuffix(),this.tokenIndex++}replaceTokenTrimmingLeftWhitespace(t){this.resultCode+=this.previousWhitespaceAndComments().replace(/[^\r\n]/g,""),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=t,this.appendTokenSuffix(),this.tokenIndex++}removeInitialToken(){this.replaceToken("")}removeToken(){this.replaceTokenTrimmingLeftWhitespace("")}removeBalancedCode(){let t=0;for(;!this.isAtEnd();){if(this.matches1(st.braceL))t++;else if(this.matches1(st.braceR)){if(0===t)return;t--}this.removeToken()}}copyExpectedToken(t){if(this.tokens[this.tokenIndex].type!==t)throw new Error(`Expected token ${t}`);this.copyToken()}copyToken(){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}copyTokenWithPrefix(t){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultCode+=t,this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}appendTokenPrefix(){const t=this.currentToken();if((t.numNullishCoalesceStarts||t.isOptionalChainStart)&&(t.isAsyncOperation=function(t){let e=t.currentIndex(),n=0;const i=t.currentToken();do{const o=t.tokens[e];if(o.isOptionalChainStart&&n++,o.isOptionalChainEnd&&n--,n+=o.numNullishCoalesceStarts,n-=o.numNullishCoalesceEnds,o.contextualKeyword===rt.T&&null==o.identifierRole&&o.scopeDepth===i.scopeDepth)return!0;e+=1}while(n>0&&e<t.tokens.length);return!1}(this)),!this.disableESTransforms){if(t.numNullishCoalesceStarts)for(let e=0;e<t.numNullishCoalesceStarts;e++)t.isAsyncOperation?(this.resultCode+="await ",this.resultCode+=this.helperManager.getHelperName("asyncNullishCoalesce")):this.resultCode+=this.helperManager.getHelperName("nullishCoalesce"),this.resultCode+="(";t.isOptionalChainStart&&(t.isAsyncOperation&&(this.resultCode+="await "),this.tokenIndex>0&&this.tokenAtRelativeIndex(-1).type===st.Kt?this.resultCode+=this.helperManager.getHelperName(t.isAsyncOperation?"asyncOptionalChainDelete":"optionalChainDelete"):this.resultCode+=this.helperManager.getHelperName(t.isAsyncOperation?"asyncOptionalChain":"optionalChain"),this.resultCode+="([")}}appendTokenSuffix(){const t=this.currentToken();if(t.isOptionalChainEnd&&!this.disableESTransforms&&(this.resultCode+="])"),t.numNullishCoalesceEnds&&!this.disableESTransforms)for(let e=0;e<t.numNullishCoalesceEnds;e++)this.resultCode+="))"}appendCode(t){this.resultCode+=t}currentToken(){return this.tokens[this.tokenIndex]}currentTokenCode(){const t=this.currentToken();return this.code.slice(t.start,t.end)}tokenAtRelativeIndex(t){return this.tokens[this.tokenIndex+t]}currentIndex(){return this.tokenIndex}nextToken(){if(this.tokenIndex===this.tokens.length)throw new Error("Unexpectedly reached end of input.");this.tokenIndex++}previousToken(){this.tokenIndex--}finish(){if(this.tokenIndex!==this.tokens.length)throw new Error("Tried to finish processing tokens before reaching the end.");return this.resultCode+=this.previousWhitespaceAndComments(),{code:this.resultCode,mappings:this.resultMappings}}isAtEnd(){return this.tokenIndex===this.tokens.length}}function dr(t,e){for(t.nextToken();t.currentToken().contextId!==e;)t.nextToken();for(;hr(t.tokenAtRelativeIndex(-1));)t.previousToken()}function ur(t){const e=[];t.nextToken();const n=t.currentToken().contextId;if(null==n)throw new Error("Expected context ID on open-paren starting constructor params.");for(;!t.matchesContextIdAndLabel(st.parenR,n);)if(t.currentToken().contextId===n){if(t.nextToken(),hr(t.currentToken())){for(t.nextToken();hr(t.currentToken());)t.nextToken();const n=t.currentToken();if(n.type!==st.name)throw new Error("Expected identifier after access modifiers in constructor arg.");const i=t.identifierNameForToken(n);e.push(`this.${i} = ${i}`)}}else t.nextToken();for(t.nextToken();t.currentToken().isType;)t.nextToken();let i=t.currentIndex(),o=!1;for(;!t.matchesContextIdAndLabel(st.braceR,n);){if(!o&&t.matches2(st.Lt,st.parenL)){t.nextToken();const e=t.currentToken().contextId;if(null==e)throw new Error("Expected a context ID on the super call");for(;!t.matchesContextIdAndLabel(st.parenR,e);)t.nextToken();i=t.currentIndex(),o=!0}t.nextToken()}return t.nextToken(),{constructorInitializerStatements:e,constructorInsertPos:i}}function hr(t){return[st.F,st.N,st.st,st.plus,st.minus,st.it,st.ct,st.nt,st.K,st.tt,st.Z,st.$,st.star,st.R,st.hash].includes(t.type)}function pr(t){if(t.matches1(st.bracketL)){const e=t.currentToken().contextId;if(null==e)throw new Error("Expected class context ID on computed name open bracket.");for(;!t.matchesContextIdAndLabel(st.bracketR,e);)t.nextToken();t.nextToken()}else t.nextToken()}function fr(t){if(t.removeInitialToken(),t.removeToken(),t.removeToken(),t.removeToken(),t.matches1(st.parenL))t.removeToken(),t.removeToken(),t.removeToken();else for(;t.matches1(st.dot);)t.removeToken(),t.removeToken()}const mr={typeDeclarations:new Set,valueDeclarations:new Set};function vr(t){const e=new Set,n=new Set;for(let i=0;i<t.tokens.length;i++){const o=t.tokens[i];o.type===st.name&&qt(o)&&(o.isType?e.add(t.identifierNameForToken(o)):n.add(t.identifierNameForToken(o)))}return{typeDeclarations:e,valueDeclarations:n}}function gr(t){let e=t.currentIndex();for(;!t.matches1AtIndex(e,st.braceR);)e++;return t.matchesContextualAtIndex(e+1,rt.j)&&t.matches1AtIndex(e+2,st.string)}function br(t){(t.matches2(st.jt,st.braceL)||t.matches2(st.name,st.braceL)&&t.matchesContextual(rt._))&&(t.removeToken(),t.removeToken(),t.removeBalancedCode(),t.removeToken())}function yr(t,e,n,i){if(!t||e)return!1;const o=n.currentToken();if(null==o.rhsEndIndex)throw new Error("Expected non-null rhsEndIndex on export token.");const r=o.rhsEndIndex-n.currentIndex();if(3!==r&&(4!==r||!n.matches1AtIndex(o.rhsEndIndex-1,st.semi)))return!1;const s=n.tokenAtRelativeIndex(2);if(s.type!==st.name)return!1;const a=n.identifierNameForToken(s);return i.typeDeclarations.has(a)&&!i.valueDeclarations.has(a)}class kr extends $e{Qt(){this.hadExport=!1}te(){this.hadNamedExport=!1}ee(){this.hadDefaultExport=!1}constructor(t,e,n,i,o,r,s,a,c,l,d,u){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.nameManager=i,this.helperManager=o,this.reactHotLoaderTransformer=r,this.enableLegacyBabel5ModuleInterop=s,this.enableLegacyTypeScriptModuleInterop=a,this.isTypeScriptTransformEnabled=c,this.isFlowTransformEnabled=l,this.preserveDynamicImport=d,this.keepUnusedImports=u,kr.prototype.Qt.call(this),kr.prototype.te.call(this),kr.prototype.ee.call(this),this.declarationInfo=c?vr(e):mr}getPrefixCode(){let t="";return this.hadExport&&(t+='Object.defineProperty(exports, "__esModule", {value: true});'),t}getSuffixCode(){return this.enableLegacyBabel5ModuleInterop&&this.hadDefaultExport&&!this.hadNamedExport?"\nmodule.exports = exports.default;\n":""}process(){return this.tokens.matches3(st.qt,st.name,st.eq)?this.processImportEquals():this.tokens.matches1(st.qt)?(this.processImport(),!0):this.tokens.matches2(st.Ht,st.eq)?(this.tokens.replaceToken("module.exports"),!0):this.tokens.matches1(st.Ht)&&!this.tokens.currentToken().isType?(this.hadExport=!0,this.processExport()):!(!this.tokens.matches2(st.name,st.postIncDec)||!this.processPostIncDec())||(this.tokens.matches1(st.name)||this.tokens.matches1(st.jsxName)?this.processIdentifier():this.tokens.matches1(st.eq)?this.processAssignment():this.tokens.matches1(st.assign)?this.processComplexAssignment():!!this.tokens.matches1(st.preIncDec)&&this.processPreIncDec())}processImportEquals(){const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.importProcessor.shouldAutomaticallyElideImportedName(t)?fr(this.tokens):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(st.qt,st.parenL)){if(this.preserveDynamicImport)return void this.tokens.copyToken();const t=this.enableLegacyTypeScriptModuleInterop?"":`${this.helperManager.getHelperName("interopRequireWildcard")}(`;this.tokens.replaceToken(`Promise.resolve().then(() => ${t}require`);const e=this.tokens.currentToken().contextId;if(null==e)throw new Error("Expected context ID on dynamic import invocation.");for(this.tokens.copyToken();!this.tokens.matchesContextIdAndLabel(st.parenR,e);)this.rootTransformer.processToken();return void this.tokens.replaceToken(t?")))":"))")}if(this.removeImportAndDetectIfShouldElide())this.tokens.removeToken();else{const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),this.tokens.appendCode(this.importProcessor.claimImportCode(t))}br(this.tokens),this.tokens.matches1(st.semi)&&this.tokens.removeToken()}removeImportAndDetectIfShouldElide(){if(this.tokens.removeInitialToken(),this.tokens.matchesContextual(rt.ut)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,st.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,rt.j))return this.removeRemainingImport(),!0;if(this.tokens.matches1(st.name)||this.tokens.matches1(st.star))return this.removeRemainingImport(),!1;if(this.tokens.matches1(st.string))return!1;let t=!1,e=!1;for(;!this.tokens.matches1(st.string);)(!t&&this.tokens.matches1(st.braceL)||this.tokens.matches1(st.comma))&&(this.tokens.removeToken(),this.tokens.matches1(st.braceR)||(e=!0),(this.tokens.matches2(st.name,st.comma)||this.tokens.matches2(st.name,st.braceR)||this.tokens.matches4(st.name,st.name,st.name,st.comma)||this.tokens.matches4(st.name,st.name,st.name,st.braceR))&&(t=!0)),this.tokens.removeToken();return!this.keepUnusedImports&&(this.isTypeScriptTransformEnabled||!!this.isFlowTransformEnabled&&e)&&!t}removeRemainingImport(){for(;!this.tokens.matches1(st.string);)this.tokens.removeToken()}processIdentifier(){const t=this.tokens.currentToken();if(t.shadowsGlobal)return!1;if(t.identifierRole===Lt.ObjectShorthand)return this.processObjectShorthand();if(t.identifierRole!==Lt.Access)return!1;const e=this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(t));if(!e)return!1;let n=this.tokens.currentIndex()+1;for(;n<this.tokens.tokens.length&&this.tokens.tokens[n].type===st.parenR;)n++;return this.tokens.tokens[n].type===st.parenL?this.tokens.tokenAtRelativeIndex(1).type===st.parenL&&this.tokens.tokenAtRelativeIndex(-1).type!==st.Nt?(this.tokens.replaceToken(`${e}.call(void 0, `),this.tokens.removeToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(st.parenR)):this.tokens.replaceToken(`(0, ${e})`):this.tokens.replaceToken(e),!0}processObjectShorthand(){const t=this.tokens.identifierName(),e=this.importProcessor.getIdentifierReplacement(t);return!!e&&(this.tokens.replaceToken(`${t}: ${e}`),!0)}processExport(){if(this.tokens.matches2(st.Ht,st.D)||this.tokens.matches3(st.Ht,st.Dt,st.D))return this.hadNamedExport=!0,!1;if(this.tokens.matches2(st.Ht,st.xt))return this.tokens.matches3(st.Ht,st.xt,st.D)?(this.hadDefaultExport=!0,!1):(this.processExportDefault(),!0);if(this.tokens.matches2(st.Ht,st.braceL))return this.processExportBindings(),!0;if(this.tokens.matches2(st.Ht,st.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,rt.ut)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(st.braceL)){for(;!this.tokens.matches1(st.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(st.A)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(rt.j)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,st.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),br(this.tokens)),!0}if(this.hadNamedExport=!0,this.tokens.matches2(st.Ht,st.Ot)||this.tokens.matches2(st.Ht,st.Rt)||this.tokens.matches2(st.Ht,st.Dt))return this.processExportVar(),!0;if(this.tokens.matches2(st.Ht,st.Et)||this.tokens.matches3(st.Ht,st.name,st.Et))return this.processExportFunction(),!0;if(this.tokens.matches2(st.Ht,st.zt)||this.tokens.matches3(st.Ht,st.$,st.zt)||this.tokens.matches2(st.Ht,st.at))return this.processExportClass(),!0;if(this.tokens.matches2(st.Ht,st.star))return this.processExportStar(),!0;throw new Error("Unrecognized export syntax.")}processAssignment(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t-1];if(e.isType||e.type!==st.name)return!1;if(e.shadowsGlobal)return!1;if(t>=2&&this.tokens.matches1AtIndex(t-2,st.dot))return!1;if(t>=2&&[st.Ot,st.Rt,st.Dt].includes(this.tokens.tokens[t-2].type))return!1;const n=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(e));return!!n&&(this.tokens.copyToken(),this.tokens.appendCode(` ${n} =`),!0)}processComplexAssignment(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t-1];if(e.type!==st.name)return!1;if(e.shadowsGlobal)return!1;if(t>=2&&this.tokens.matches1AtIndex(t-2,st.dot))return!1;const n=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(e));return!!n&&(this.tokens.appendCode(` = ${n}`),this.tokens.copyToken(),!0)}processPreIncDec(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t+1];if(e.type!==st.name)return!1;if(e.shadowsGlobal)return!1;if(t+2<this.tokens.tokens.length&&(this.tokens.matches1AtIndex(t+2,st.dot)||this.tokens.matches1AtIndex(t+2,st.bracketL)||this.tokens.matches1AtIndex(t+2,st.parenL)))return!1;const n=this.tokens.identifierNameForToken(e),i=this.importProcessor.resolveExportBinding(n);return!!i&&(this.tokens.appendCode(`${i} = `),this.tokens.copyToken(),!0)}processPostIncDec(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t],n=this.tokens.tokens[t+1];if(e.type!==st.name)return!1;if(e.shadowsGlobal)return!1;if(t>=1&&this.tokens.matches1AtIndex(t-1,st.dot))return!1;const i=this.tokens.identifierNameForToken(e),o=this.importProcessor.resolveExportBinding(i);if(!o)return!1;const r=this.tokens.rawCodeForToken(n),s=this.importProcessor.getIdentifierReplacement(i)||i;if("++"===r)this.tokens.replaceToken(`(${s} = ${o} = ${s} + 1, ${s} - 1)`);else{if("--"!==r)throw new Error(`Unexpected operator: ${r}`);this.tokens.replaceToken(`(${s} = ${o} = ${s} - 1, ${s} + 1)`)}return this.tokens.removeToken(),!0}processExportDefault(){let t=!0;if(this.tokens.matches4(st.Ht,st.xt,st.Et,st.name)||this.tokens.matches5(st.Ht,st.xt,st.name,st.Et,st.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,rt.F)){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.processNamedFunction();this.tokens.appendCode(` exports.default = ${t};`)}else if(this.tokens.matches4(st.Ht,st.xt,st.zt,st.name)||this.tokens.matches5(st.Ht,st.xt,st.$,st.zt,st.name)||this.tokens.matches3(st.Ht,st.xt,st.at)){this.tokens.removeInitialToken(),this.tokens.removeToken(),this.copyDecorators(),this.tokens.matches1(st.$)&&this.tokens.removeToken();const t=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.default = ${t};`)}else if(yr(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))t=!1,this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken();else if(this.reactHotLoaderTransformer){const t=this.nameManager.claimFreeName("_default");this.tokens.replaceToken(`let ${t}; exports.`),this.tokens.copyToken(),this.tokens.appendCode(` = ${t} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(t)}else this.tokens.replaceToken("exports."),this.tokens.copyToken(),this.tokens.appendCode(" =");t&&(this.hadDefaultExport=!0)}copyDecorators(){for(;this.tokens.matches1(st.at);)if(this.tokens.copyToken(),this.tokens.matches1(st.parenL))this.tokens.copyExpectedToken(st.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(st.parenR);else{for(this.tokens.copyExpectedToken(st.name);this.tokens.matches1(st.dot);)this.tokens.copyExpectedToken(st.dot),this.tokens.copyExpectedToken(st.name);this.tokens.matches1(st.parenL)&&(this.tokens.copyExpectedToken(st.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(st.parenR))}}processExportVar(){this.isSimpleExportVar()?this.processSimpleExportVar():this.processComplexExportVar()}isSimpleExportVar(){let t=this.tokens.currentIndex();if(t++,t++,!this.tokens.matches1AtIndex(t,st.name))return!1;for(t++;t<this.tokens.tokens.length&&this.tokens.tokens[t].isType;)t++;return!!this.tokens.matches1AtIndex(t,st.eq)}processSimpleExportVar(){this.tokens.removeInitialToken(),this.tokens.copyToken();const t=this.tokens.identifierName();for(;!this.tokens.matches1(st.eq);)this.rootTransformer.processToken();const e=this.tokens.currentToken().rhsEndIndex;if(null==e)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<e;)this.rootTransformer.processToken();this.tokens.appendCode(`; exports.${t} = ${t}`)}processComplexExportVar(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.tokens.matches1(st.braceL);t&&this.tokens.appendCode("(");let e=0;for(;;)if(this.tokens.matches1(st.braceL)||this.tokens.matches1(st.dollarBraceL)||this.tokens.matches1(st.bracketL))e++,this.tokens.copyToken();else if(this.tokens.matches1(st.braceR)||this.tokens.matches1(st.bracketR))e--,this.tokens.copyToken();else{if(0===e&&!this.tokens.matches1(st.name)&&!this.tokens.currentToken().isType)break;if(this.tokens.matches1(st.eq)){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken()}else{const t=this.tokens.currentToken();if(Bt(t)){const e=this.tokens.identifierName();let n=this.importProcessor.getIdentifierReplacement(e);if(null===n)throw new Error(`Expected a replacement for ${e} in \`export var\` syntax.`);Vt(t)&&(n=`${e}: ${n}`),this.tokens.replaceToken(n)}else this.rootTransformer.processToken()}}if(t){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken();this.tokens.appendCode(")")}}processExportFunction(){this.tokens.replaceToken("");const t=this.processNamedFunction();this.tokens.appendCode(` exports.${t} = ${t};`)}processNamedFunction(){if(this.tokens.matches1(st.Et))this.tokens.copyToken();else if(this.tokens.matches2(st.name,st.Et)){if(!this.tokens.matchesContextual(rt.F))throw new Error("Expected async keyword in function export.");this.tokens.copyToken(),this.tokens.copyToken()}if(this.tokens.matches1(st.star)&&this.tokens.copyToken(),!this.tokens.matches1(st.name))throw new Error("Expected identifier for exported function name.");const t=this.tokens.identifierName();if(this.tokens.copyToken(),this.tokens.currentToken().isType)for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return this.tokens.copyExpectedToken(st.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(st.parenR),this.rootTransformer.processPossibleTypeRange(),this.tokens.copyExpectedToken(st.braceL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(st.braceR),t}processExportClass(){this.tokens.removeInitialToken(),this.copyDecorators(),this.tokens.matches1(st.$)&&this.tokens.removeToken();const t=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.${t} = ${t};`)}processExportBindings(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=gr(this.tokens),e=[];for(;;){if(this.tokens.matches1(st.braceR)){this.tokens.removeToken();break}const n=be(this.tokens);for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();if(!(n.isType||!t&&this.shouldElideExportedIdentifier(n.leftName))){const t=n.rightName;"default"===t?this.hadDefaultExport=!0:this.hadNamedExport=!0;const i=n.leftName,o=this.importProcessor.getIdentifierReplacement(i);e.push(`exports.${t} = ${o||i};`)}if(this.tokens.matches1(st.braceR)){this.tokens.removeToken();break}if(this.tokens.matches2(st.comma,st.braceR)){this.tokens.removeToken(),this.tokens.removeToken();break}if(!this.tokens.matches1(st.comma))throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);this.tokens.removeToken()}if(this.tokens.matchesContextual(rt.j)){this.tokens.removeToken();const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),br(this.tokens)}else this.tokens.appendCode(e.join(" "));this.tokens.matches1(st.semi)&&this.tokens.removeToken()}processExportStar(){for(this.tokens.removeInitialToken();!this.tokens.matches1(st.string);)this.tokens.removeToken();const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),br(this.tokens),this.tokens.matches1(st.semi)&&this.tokens.removeToken()}shouldElideExportedIdentifier(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.declarationInfo.valueDeclarations.has(t)}}class xr extends $e{constructor(t,e,n,i,o,r,s,a){super(),this.tokens=t,this.nameManager=e,this.helperManager=n,this.reactHotLoaderTransformer=i,this.isTypeScriptTransformEnabled=o,this.isFlowTransformEnabled=r,this.keepUnusedImports=s,this.nonTypeIdentifiers=o&&!s?Te(t,a):new Set,this.declarationInfo=o&&!s?vr(t):mr,this.injectCreateRequireForImportRequire=Boolean(a.injectCreateRequireForImportRequire)}process(){if(this.tokens.matches3(st.qt,st.name,st.eq))return this.processImportEquals();if(this.tokens.matches4(st.qt,st.name,st.name,st.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,rt.ut)){this.tokens.removeInitialToken();for(let t=0;t<7;t++)this.tokens.removeToken();return!0}if(this.tokens.matches2(st.Ht,st.eq))return this.tokens.replaceToken("module.exports"),!0;if(this.tokens.matches5(st.Ht,st.qt,st.name,st.name,st.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,rt.ut)){this.tokens.removeInitialToken();for(let t=0;t<8;t++)this.tokens.removeToken();return!0}if(this.tokens.matches1(st.qt))return this.processImport();if(this.tokens.matches2(st.Ht,st.xt))return this.processExportDefault();if(this.tokens.matches2(st.Ht,st.braceL))return this.processNamedExports();if(this.tokens.matches2(st.Ht,st.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,rt.ut)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(st.braceL)){for(;!this.tokens.matches1(st.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(st.A)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(rt.j)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,st.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),br(this.tokens)),!0}return!1}processImportEquals(){const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.shouldAutomaticallyElideImportedName(t)?fr(this.tokens):this.injectCreateRequireForImportRequire?(this.tokens.replaceToken("const"),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.replaceToken(this.helperManager.getHelperName("require"))):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(st.qt,st.parenL))return!1;const t=this.tokens.snapshot();if(this.removeImportTypeBindings()){for(this.tokens.restoreToSnapshot(t);!this.tokens.matches1(st.string);)this.tokens.removeToken();this.tokens.removeToken(),br(this.tokens),this.tokens.matches1(st.semi)&&this.tokens.removeToken()}return!0}removeImportTypeBindings(){if(this.tokens.copyExpectedToken(st.qt),this.tokens.matchesContextual(rt.ut)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,st.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,rt.j))return!0;if(this.tokens.matches1(st.string))return this.tokens.copyToken(),!1;this.tokens.matchesContextual(rt.V)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,rt.j)&&this.tokens.copyToken();let t=!1,e=!1,n=!1;if(this.tokens.matches1(st.name)&&(this.shouldAutomaticallyElideImportedName(this.tokens.identifierName())?(this.tokens.removeToken(),this.tokens.matches1(st.comma)&&this.tokens.removeToken()):(t=!0,this.tokens.copyToken(),this.tokens.matches1(st.comma)&&(n=!0,this.tokens.removeToken()))),this.tokens.matches1(st.star))this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2))?(this.tokens.removeToken(),this.tokens.removeToken(),this.tokens.removeToken()):(n&&this.tokens.appendCode(","),t=!0,this.tokens.copyExpectedToken(st.star),this.tokens.copyExpectedToken(st.name),this.tokens.copyExpectedToken(st.name));else if(this.tokens.matches1(st.braceL)){for(n&&this.tokens.appendCode(","),this.tokens.copyToken();!this.tokens.matches1(st.braceR);){e=!0;const n=be(this.tokens);if(n.isType||this.shouldAutomaticallyElideImportedName(n.rightName)){for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();this.tokens.matches1(st.comma)&&this.tokens.removeToken()}else{for(t=!0;this.tokens.currentIndex()<n.endIndex;)this.tokens.copyToken();this.tokens.matches1(st.comma)&&this.tokens.copyToken()}}this.tokens.copyExpectedToken(st.braceR)}return!this.keepUnusedImports&&(this.isTypeScriptTransformEnabled||!!this.isFlowTransformEnabled&&e)&&!t}shouldAutomaticallyElideImportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(t)}processExportDefault(){if(yr(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))return this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken(),!0;if(!(this.tokens.matches4(st.Ht,st.xt,st.Et,st.name)||this.tokens.matches5(st.Ht,st.xt,st.name,st.Et,st.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,rt.F)||this.tokens.matches4(st.Ht,st.xt,st.zt,st.name)||this.tokens.matches5(st.Ht,st.xt,st.$,st.zt,st.name))&&this.reactHotLoaderTransformer){const t=this.nameManager.claimFreeName("_default");return this.tokens.replaceToken(`let ${t}; export`),this.tokens.copyToken(),this.tokens.appendCode(` ${t} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(t),!0}return!1}processNamedExports(){if(!this.isTypeScriptTransformEnabled)return!1;this.tokens.copyExpectedToken(st.Ht),this.tokens.copyExpectedToken(st.braceL);const t=gr(this.tokens);let e=!1;for(;!this.tokens.matches1(st.braceR);){const n=be(this.tokens);if(n.isType||!t&&this.shouldElideExportedName(n.leftName)){for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();this.tokens.matches1(st.comma)&&this.tokens.removeToken()}else{for(e=!0;this.tokens.currentIndex()<n.endIndex;)this.tokens.copyToken();this.tokens.matches1(st.comma)&&this.tokens.copyToken()}}return this.tokens.copyExpectedToken(st.braceR),this.keepUnusedImports||!t||e||(this.tokens.removeToken(),this.tokens.removeToken(),br(this.tokens)),!0}shouldElideExportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&this.declarationInfo.typeDeclarations.has(t)&&!this.declarationInfo.valueDeclarations.has(t)}}class wr extends $e{constructor(t,e,n){super(),this.rootTransformer=t,this.tokens=e,this.isImportsTransformEnabled=n}process(){return!(!(this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange())&&(this.tokens.matches1(st.D)?(this.processEnum(),0):this.tokens.matches2(st.Ht,st.D)?(this.processNamedExportEnum(),0):!this.tokens.matches3(st.Ht,st.xt,st.D)||(this.processDefaultExportEnum(),0)))}processNamedExportEnum(){if(this.isImportsTransformEnabled){this.tokens.removeInitialToken();const t=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.tokens.appendCode(` exports.${t} = ${t};`)}else this.tokens.copyToken(),this.processEnum()}processDefaultExportEnum(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.tokens.appendCode(this.isImportsTransformEnabled?` exports.default = ${t};`:` export default ${t};`)}processEnum(){this.tokens.replaceToken("const"),this.tokens.copyExpectedToken(st.name);let t=!1;this.tokens.matchesContextual(rt.J)&&(this.tokens.removeToken(),t=this.tokens.matchesContextual(rt.lt),this.tokens.removeToken());const e=this.tokens.matches3(st.braceL,st.name,st.eq);this.tokens.appendCode(' = require("flow-enums-runtime")');const n=!t&&!e;for(this.tokens.replaceTokenTrimmingLeftWhitespace(n?".Mirrored([":"({");!this.tokens.matches1(st.braceR);){if(this.tokens.matches1(st.ellipsis)){this.tokens.removeToken();break}this.processEnumElement(t,e),this.tokens.matches1(st.comma)&&this.tokens.copyToken()}this.tokens.replaceToken(n?"]);":"});")}processEnumElement(t,e){if(t){const t=this.tokens.identifierName();this.tokens.copyToken(),this.tokens.appendCode(`: Symbol("${t}")`)}else e?(this.tokens.copyToken(),this.tokens.replaceTokenTrimmingLeftWhitespace(":"),this.tokens.copyToken()):this.tokens.replaceToken(`"${this.tokens.identifierName()}"`)}}const $r="jest",Sr=["mock","unmock","enableAutomock","disableAutomock"];class Ar extends $e{Qt(){this.hoistedFunctionNames=[]}constructor(t,e,n,i){super(),this.rootTransformer=t,this.tokens=e,this.nameManager=n,this.importProcessor=i,Ar.prototype.Qt.call(this)}process(){return!(0!==this.tokens.currentToken().scopeDepth||!this.tokens.matches4(st.name,st.dot,st.name,st.parenL)||this.tokens.identifierName()!==$r)&&!function(t){let e,n=t[0],i=1;for(;i<t.length;){const o=t[i],r=t[i+1];if(i+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(e=n,n=r(n)):"call"!==o&&"optionalCall"!==o||(n=r((...t)=>n.call(e,...t)),e=void 0)}return n}([this,"access",t=>t.importProcessor,"optionalAccess",t=>t.getGlobalNames,"call",t=>t(),"optionalAccess",t=>t.has,"call",t=>t($r)])&&this.extractHoistedCalls()}getHoistedCode(){return this.hoistedFunctionNames.length>0?this.hoistedFunctionNames.map(t=>`${t}();`).join(""):""}extractHoistedCalls(){this.tokens.removeToken();let t=!1;for(;this.tokens.matches3(st.dot,st.name,st.parenL);){const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);if(Sr.includes(e)){const e=this.nameManager.claimFreeName("__jestHoist");this.hoistedFunctionNames.push(e),this.tokens.replaceToken(`function ${e}(){${$r}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(st.parenR),this.tokens.appendCode(";}"),t=!1}else t?this.tokens.copyToken():this.tokens.replaceToken(`${$r}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(st.parenR),t=!0}return!0}}class Er extends $e{constructor(t){super(),this.tokens=t}process(){if(this.tokens.matches1(st.num)){const t=this.tokens.currentTokenCode();if(t.includes("_"))return this.tokens.replaceToken(t.replace(/_/g,"")),!0}return!1}}class _r extends $e{constructor(t,e){super(),this.tokens=t,this.nameManager=e}process(){return!!this.tokens.matches2(st.bt,st.braceL)&&(this.tokens.copyToken(),this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`),!0)}}class Cr extends $e{constructor(t,e){super(),this.tokens=t,this.nameManager=e}process(){if(this.tokens.matches1(st.nullishCoalescing)){const t=this.tokens.currentToken();return this.tokens.replaceTokenTrimmingLeftWhitespace(this.tokens.tokens[t.nullishStartIndex].isAsyncOperation?", async () => (":", () => ("),!0}if(this.tokens.matches1(st.Kt)&&this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)return this.tokens.removeInitialToken(),!0;const t=this.tokens.currentToken().subscriptStartIndex;if(null!=t&&this.tokens.tokens[t].isOptionalChainStart&&this.tokens.tokenAtRelativeIndex(-1).type!==st.Lt){const e=this.nameManager.claimFreeName("_");let n;if(n=t>0&&this.tokens.matches1AtIndex(t-1,st.Kt)&&this.isLastSubscriptInChain()?`${e} => delete ${e}`:`${e} => ${e}`,this.tokens.tokens[t].isAsyncOperation&&(n=`async ${n}`),this.tokens.matches2(st.questionDot,st.parenL)||this.tokens.matches2(st.questionDot,st.lessThan))this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${n}`);else if(this.tokens.matches2(st.questionDot,st.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}`);else if(this.tokens.matches1(st.questionDot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}.`);else if(this.tokens.matches1(st.dot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}.`);else if(this.tokens.matches1(st.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}[`);else{if(!this.tokens.matches1(st.parenL))throw new Error("Unexpected subscript operator in optional chain.");this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${n}(`)}return!0}return!1}isLastSubscriptInChain(){let t=0;for(let e=this.tokens.currentIndex()+1;;e++){if(e>=this.tokens.tokens.length)throw new Error("Reached the end of the code while finding the end of the access chain.");if(this.tokens.tokens[e].isOptionalChainStart?t++:this.tokens.tokens[e].isOptionalChainEnd&&t--,t<0)return!0;if(0===t&&null!=this.tokens.tokens[e].subscriptStartIndex)return!1}}justSkippedSuper(){let t=0,e=this.tokens.currentIndex()-1;for(;;){if(e<0)throw new Error("Reached the start of the code while finding the start of the access chain.");if(this.tokens.tokens[e].isOptionalChainStart?t--:this.tokens.tokens[e].isOptionalChainEnd&&t++,t<0)return!1;if(0===t&&null!=this.tokens.tokens[e].subscriptStartIndex)return this.tokens.tokens[e-1].type===st.Lt;e--}}}class Fr extends $e{constructor(t,e,n,i){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.options=i}process(){const t=this.tokens.currentIndex();if("createReactClass"===this.tokens.identifierName()){const e=this.importProcessor&&this.importProcessor.getIdentifierReplacement("createReactClass");return e?this.tokens.replaceToken(`(0, ${e})`):this.tokens.copyToken(),this.tryProcessCreateClassCall(t),!0}if(this.tokens.matches3(st.name,st.dot,st.name)&&"React"===this.tokens.identifierName()&&"createClass"===this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+2)){const e=this.importProcessor&&this.importProcessor.getIdentifierReplacement("React")||"React";return this.tokens.replaceToken(e),this.tokens.copyToken(),this.tokens.copyToken(),this.tryProcessCreateClassCall(t),!0}return!1}tryProcessCreateClassCall(t){const e=this.findDisplayName(t);e&&this.classNeedsDisplayName()&&(this.tokens.copyExpectedToken(st.parenL),this.tokens.copyExpectedToken(st.braceL),this.tokens.appendCode(`displayName: '${e}',`),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(st.braceR),this.tokens.copyExpectedToken(st.parenR))}findDisplayName(t){return t<2?null:this.tokens.matches2AtIndex(t-2,st.name,st.eq)||t>=2&&this.tokens.tokens[t-2].identifierRole===Lt.ObjectKey?this.tokens.identifierNameAtIndex(t-2):this.tokens.matches2AtIndex(t-2,st.Ht,st.xt)?this.getDisplayNameFromFilename():null}getDisplayNameFromFilename(){const t=(this.options.filePath||"unknown").split("/"),e=t[t.length-1],n=e.lastIndexOf("."),i=-1===n?e:e.slice(0,n);return"index"===i&&t[t.length-2]?t[t.length-2]:i}classNeedsDisplayName(){let t=this.tokens.currentIndex();if(!this.tokens.matches2(st.parenL,st.braceL))return!1;const e=this.tokens.tokens[t+1].contextId;if(null==e)throw new Error("Expected non-null context ID on object open-brace.");for(;t<this.tokens.tokens.length;t++){const n=this.tokens.tokens[t];if(n.type===st.braceR&&n.contextId===e){t++;break}if("displayName"===this.tokens.identifierNameAtIndex(t)&&this.tokens.tokens[t].identifierRole===Lt.ObjectKey&&n.contextId===e)return!1}if(t===this.tokens.tokens.length)throw new Error("Unexpected end of input when processing React class.");return this.tokens.matches1AtIndex(t,st.parenR)||this.tokens.matches2AtIndex(t,st.comma,st.parenR)}}class Tr extends $e{Qt(){this.extractedDefaultExportName=null}constructor(t,e){super(),this.tokens=t,this.filePath=e,Tr.prototype.Qt.call(this)}setExtractedDefaultExportName(t){this.extractedDefaultExportName=t}getPrefixCode(){return"\n      (function () {\n        var enterModule = require('react-hot-loader').enterModule;\n        enterModule && enterModule(module);\n      })();".replace(/\s+/g," ").trim()}getSuffixCode(){const t=new Set;for(const n of this.tokens.tokens)!n.isType&&qt(n)&&n.identifierRole!==Lt.ImportDeclaration&&t.add(this.tokens.identifierNameForToken(n));const e=Array.from(t).map(t=>({variableName:t,uniqueLocalName:t}));return this.extractedDefaultExportName&&e.push({variableName:this.extractedDefaultExportName,uniqueLocalName:"default"}),`\n;(function () {\n  var reactHotLoader = require('react-hot-loader').default;\n  var leaveModule = require('react-hot-loader').leaveModule;\n  if (!reactHotLoader) {\n    return;\n  }\n${e.map(({variableName:t,uniqueLocalName:e})=>`  reactHotLoader.register(${t}, "${e}", ${JSON.stringify(this.filePath||"")});`).join("\n")}\n  leaveModule(module);\n})();`}process(){return!1}}const Ir=new Set(["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield","enum","implements","interface","let","package","private","protected","public","static","await","false","null","true"]);function Or(t){if(0===t.length)return!1;if(!Nt[t.charCodeAt(0)])return!1;for(let e=1;e<t.length;e++)if(!jt[t.charCodeAt(e)])return!1;return!Ir.has(t)}class Rr extends $e{constructor(t,e,n){super(),this.rootTransformer=t,this.tokens=e,this.isImportsTransformEnabled=n}process(){return!(!(this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange())&&(this.tokens.matches1(st.nt)||this.tokens.matches1(st.tt)||this.tokens.matches1(st.K)||this.tokens.matches1(st.$)||this.tokens.matches1(st.it)||this.tokens.matches1(st.Z)||this.tokens.matches1(st.nonNullAssertion)?(this.tokens.removeInitialToken(),0):this.tokens.matches1(st.D)||this.tokens.matches2(st.Dt,st.D)?(this.processEnum(),0):!this.tokens.matches2(st.Ht,st.D)&&!this.tokens.matches3(st.Ht,st.Dt,st.D)||(this.processEnum(!0),0)))}processEnum(t=!1){for(this.tokens.removeInitialToken();this.tokens.matches1(st.Dt)||this.tokens.matches1(st.D);)this.tokens.removeToken();const e=this.tokens.identifierName();this.tokens.removeToken(),t&&!this.isImportsTransformEnabled&&this.tokens.appendCode("export "),this.tokens.appendCode(`var ${e}; (function (${e})`),this.tokens.copyExpectedToken(st.braceL),this.processEnumBody(e),this.tokens.copyExpectedToken(st.braceR),this.tokens.appendCode(t&&this.isImportsTransformEnabled?`)(${e} || (exports.${e} = ${e} = {}));`:`)(${e} || (${e} = {}));`)}processEnumBody(t){let e=null;for(;!this.tokens.matches1(st.braceR);){const{nameStringCode:n,variableName:i}=this.extractEnumKeyInfo(this.tokens.currentToken());this.tokens.removeInitialToken(),this.tokens.matches3(st.eq,st.string,st.comma)||this.tokens.matches3(st.eq,st.string,st.braceR)?this.processStringLiteralEnumMember(t,n,i):this.tokens.matches1(st.eq)?this.processExplicitValueEnumMember(t,n,i):this.processImplicitValueEnumMember(t,n,i,e),this.tokens.matches1(st.comma)&&this.tokens.removeToken(),e=null!=i?i:`${t}[${n}]`}}extractEnumKeyInfo(t){if(t.type===st.name){const e=this.tokens.identifierNameForToken(t);return{nameStringCode:`"${e}"`,variableName:Or(e)?e:null}}if(t.type===st.string){const e=this.tokens.stringValueForToken(t);return{nameStringCode:this.tokens.code.slice(t.start,t.end),variableName:Or(e)?e:null}}throw new Error("Expected name or string at beginning of enum element.")}processStringLiteralEnumMember(t,e,n){null!=n?(this.tokens.appendCode(`const ${n}`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(`; ${t}[${e}] = ${n};`)):(this.tokens.appendCode(`${t}[${e}]`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(";"))}processExplicitValueEnumMember(t,e,n){const i=this.tokens.currentToken().rhsEndIndex;if(null==i)throw new Error("Expected rhsEndIndex on enum assign.");if(null!=n){for(this.tokens.appendCode(`const ${n}`),this.tokens.copyToken();this.tokens.currentIndex()<i;)this.rootTransformer.processToken();this.tokens.appendCode(`; ${t}[${t}[${e}] = ${n}] = ${e};`)}else{for(this.tokens.appendCode(`${t}[${t}[${e}]`),this.tokens.copyToken();this.tokens.currentIndex()<i;)this.rootTransformer.processToken();this.tokens.appendCode(`] = ${e};`)}}processImplicitValueEnumMember(t,e,n,i){let o=null!=i?`${i} + 1`:"0";null!=n&&(this.tokens.appendCode(`const ${n} = ${o}; `),o=n),this.tokens.appendCode(`${t}[${t}[${e}] = ${o}] = ${e};`)}}class Dr{Qt(){this.transformers=[]}te(){this.generatedVariables=[]}constructor(t,e,n,i){Dr.prototype.Qt.call(this),Dr.prototype.te.call(this),this.nameManager=t.nameManager,this.helperManager=t.helperManager;const{tokenProcessor:o,importProcessor:r}=t;this.tokens=o,this.isImportsTransformEnabled=e.includes("imports"),this.isReactHotLoaderTransformEnabled=e.includes("react-hot-loader"),this.disableESTransforms=Boolean(i.disableESTransforms),i.disableESTransforms||(this.transformers.push(new Cr(o,this.nameManager)),this.transformers.push(new Er(o)),this.transformers.push(new _r(o,this.nameManager))),e.includes("jsx")&&("preserve"!==i.jsxRuntime&&this.transformers.push(new Se(this,o,r,this.nameManager,i)),this.transformers.push(new Fr(this,o,r,i)));let s=null;if(e.includes("react-hot-loader")){if(!i.filePath)throw new Error("filePath is required when using the react-hot-loader transform.");s=new Tr(o,i.filePath),this.transformers.push(s)}if(e.includes("imports")){if(null===r)throw new Error("Expected non-null importProcessor with imports transform enabled.");this.transformers.push(new kr(this,o,r,this.nameManager,this.helperManager,s,n,Boolean(i.enableLegacyTypeScriptModuleInterop),e.includes("typescript"),e.includes("flow"),Boolean(i.preserveDynamicImport),Boolean(i.keepUnusedImports)))}else this.transformers.push(new xr(o,this.nameManager,this.helperManager,s,e.includes("typescript"),e.includes("flow"),Boolean(i.keepUnusedImports),i));e.includes("flow")&&this.transformers.push(new wr(this,o,e.includes("imports"))),e.includes("typescript")&&this.transformers.push(new Rr(this,o,e.includes("imports"))),e.includes("jest")&&this.transformers.push(new Ar(this,o,this.nameManager,r))}transform(){this.tokens.reset(),this.processBalancedCode();let t=this.isImportsTransformEnabled?'"use strict";':"";for(const o of this.transformers)t+=o.getPrefixCode();t+=this.helperManager.emitHelpers(),t+=this.generatedVariables.map(t=>` var ${t};`).join("");for(const o of this.transformers)t+=o.getHoistedCode();let e="";for(const o of this.transformers)e+=o.getSuffixCode();const n=this.tokens.finish();let{code:i}=n;if(i.startsWith("#!")){let o=i.indexOf("\n");return-1===o&&(o=i.length,i+="\n"),{code:i.slice(0,o+1)+t+i.slice(o+1)+e,mappings:this.shiftMappings(n.mappings,t.length)}}return{code:t+i+e,mappings:this.shiftMappings(n.mappings,t.length)}}processBalancedCode(){let t=0,e=0;for(;!this.tokens.isAtEnd();){if(this.tokens.matches1(st.braceL)||this.tokens.matches1(st.dollarBraceL))t++;else if(this.tokens.matches1(st.braceR)){if(0===t)return;t--}if(this.tokens.matches1(st.parenL))e++;else if(this.tokens.matches1(st.parenR)){if(0===e)return;e--}this.processToken()}}processToken(){if(this.tokens.matches1(st.zt))this.processClass();else{for(const t of this.transformers)if(t.process())return;this.tokens.copyToken()}}processNamedClass(){if(!this.tokens.matches2(st.zt,st.name))throw new Error("Expected identifier for exported class name.");const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.processClass(),t}processClass(){const t=function(t,e,n,i){const o=e.snapshot(),r=function(t){const e=t.currentToken(),n=e.contextId;if(null==n)throw new Error("Expected context ID on class token.");const i=e.isExpression;if(null==i)throw new Error("Expected isExpression on class token.");let o=null,r=!1;for(t.nextToken(),t.matches1(st.name)&&(o=t.identifierName());!t.matchesContextIdAndLabel(st.braceL,n);)t.matches1(st.Bt)&&!t.currentToken().isType&&(r=!0),t.nextToken();return{isExpression:i,className:o,hasSuperclass:r}}(e);let s=[];const a=[],c=[];let l=null;const d=[],u=[],h=e.currentToken().contextId;if(null==h)throw new Error("Expected non-null class context ID on class open-brace.");for(e.nextToken();!e.matchesContextIdAndLabel(st.braceR,h);)if(e.matchesContextual(rt.O)&&!e.currentToken().isType)({constructorInitializerStatements:s,constructorInsertPos:l}=ur(e));else if(e.matches1(st.semi))i||u.push({start:e.currentIndex(),end:e.currentIndex()+1}),e.nextToken();else if(e.currentToken().isType)e.nextToken();else{const o=e.currentIndex();let r=!1,p=!1,f=!1;for(;hr(e.currentToken());)e.matches1(st.ct)&&(r=!0),e.matches1(st.hash)&&(p=!0),(e.matches1(st.R)||e.matches1(st.$))&&(f=!0),e.nextToken();if(r&&e.matches1(st.braceL)){dr(e,h);continue}if(p){dr(e,h);continue}if(e.matchesContextual(rt.O)&&!e.currentToken().isType){({constructorInitializerStatements:s,constructorInsertPos:l}=ur(e));continue}const m=e.currentIndex();if(pr(e),e.matches1(st.lessThan)||e.matches1(st.parenL)){dr(e,h);continue}for(;e.currentToken().isType;)e.nextToken();if(e.matches1(st.eq)){const i=e.currentIndex(),o=e.currentToken().rhsEndIndex;if(null==o)throw new Error("Expected rhsEndIndex on class field assignment.");for(e.nextToken();e.currentIndex()<o;)t.processToken();let s;r?(s=n.claimFreeName("__initStatic"),c.push(s)):(s=n.claimFreeName("__init"),a.push(s)),d.push({initializerName:s,equalsIndex:i,start:m,end:e.currentIndex()})}else i&&!f||u.push({start:o,end:e.currentIndex()})}return e.restoreToSnapshot(o),i?{headerInfo:r,constructorInitializerStatements:s,instanceInitializerNames:[],staticInitializerNames:[],constructorInsertPos:l,fields:[],rangesToRemove:u}:{headerInfo:r,constructorInitializerStatements:s,instanceInitializerNames:a,staticInitializerNames:c,constructorInsertPos:l,fields:d,rangesToRemove:u}}(this,this.tokens,this.nameManager,this.disableESTransforms),e=(t.headerInfo.isExpression||!t.headerInfo.className)&&t.staticInitializerNames.length+t.instanceInitializerNames.length>0;let n=t.headerInfo.className;e&&(n=this.nameManager.claimFreeName("_class"),this.generatedVariables.push(n),this.tokens.appendCode(` (${n} =`));const i=this.tokens.currentToken().contextId;if(null==i)throw new Error("Expected class to have a context ID.");for(this.tokens.copyExpectedToken(st.zt);!this.tokens.matchesContextIdAndLabel(st.braceL,i);)this.processToken();this.processClassBody(t,n);const o=t.staticInitializerNames.map(t=>`${n}.${t}()`);e?this.tokens.appendCode(`, ${o.map(t=>`${t}, `).join("")}${n})`):t.staticInitializerNames.length>0&&this.tokens.appendCode(` ${o.map(t=>`${t};`).join(" ")}`)}processClassBody(t,e){const{headerInfo:n,constructorInsertPos:i,constructorInitializerStatements:o,fields:r,instanceInitializerNames:s,rangesToRemove:a}=t;let c=0,l=0;const d=this.tokens.currentToken().contextId;if(null==d)throw new Error("Expected non-null context ID on class.");this.tokens.copyExpectedToken(st.braceL),this.isReactHotLoaderTransformEnabled&&this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");const u=o.length+s.length>0;if(null===i&&u){const t=this.makeConstructorInitCode(o,s,e);if(n.hasSuperclass){const e=this.nameManager.claimFreeName("args");this.tokens.appendCode(`constructor(...${e}) { super(...${e}); ${t}; }`)}else this.tokens.appendCode(`constructor() { ${t}; }`)}for(;!this.tokens.matchesContextIdAndLabel(st.braceR,d);)if(c<r.length&&this.tokens.currentIndex()===r[c].start){let t=!1;for(this.tokens.matches1(st.bracketL)?this.tokens.copyTokenWithPrefix(`${r[c].initializerName}() {this`):this.tokens.matches1(st.string)||this.tokens.matches1(st.num)?(this.tokens.copyTokenWithPrefix(`${r[c].initializerName}() {this[`),t=!0):this.tokens.copyTokenWithPrefix(`${r[c].initializerName}() {this.`);this.tokens.currentIndex()<r[c].end;)t&&this.tokens.currentIndex()===r[c].equalsIndex&&this.tokens.appendCode("]"),this.processToken();this.tokens.appendCode("}"),c++}else if(l<a.length&&this.tokens.currentIndex()>=a[l].start){for(this.tokens.currentIndex()<a[l].end&&this.tokens.removeInitialToken();this.tokens.currentIndex()<a[l].end;)this.tokens.removeToken();l++}else this.tokens.currentIndex()===i?(this.tokens.copyToken(),u&&this.tokens.appendCode(`;${this.makeConstructorInitCode(o,s,e)};`),this.processToken()):this.processToken();this.tokens.copyExpectedToken(st.braceR)}makeConstructorInitCode(t,e,n){return[...t,...e.map(t=>`${n}.prototype.${t}.call(this)`)].join(";")}processPossibleArrowParamEnd(){if(this.tokens.matches2(st.parenR,st.colon)&&this.tokens.tokenAtRelativeIndex(1).isType){let t=this.tokens.currentIndex()+1;for(;this.tokens.tokens[t].isType;)t++;if(this.tokens.matches1AtIndex(t,st.arrow)){for(this.tokens.removeInitialToken();this.tokens.currentIndex()<t;)this.tokens.removeToken();return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"),!0}}return!1}processPossibleAsyncArrowWithTypeParams(){if(!this.tokens.matchesContextual(rt.F)&&!this.tokens.matches1(st.F))return!1;const t=this.tokens.tokenAtRelativeIndex(1);if(t.type!==st.lessThan||!t.isType)return!1;let e=this.tokens.currentIndex()+1;for(;this.tokens.tokens[e].isType;)e++;if(this.tokens.matches1AtIndex(e,st.parenL)){for(this.tokens.replaceToken("async ("),this.tokens.removeInitialToken();this.tokens.currentIndex()<e;)this.tokens.removeToken();return this.tokens.removeToken(),this.processBalancedCode(),this.processToken(),!0}return!1}processPossibleTypeRange(){if(this.tokens.currentToken().isType){for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return!0}return!1}shiftMappings(t,e){for(let n=0;n<t.length;n++){const i=t[n];void 0!==i&&(t[n]=i+e)}return t}}var Pr;function jr(t,e,n){e++,t.matches1AtIndex(e,st.parenL)||(t.matches1AtIndex(e,st.name)&&(n.add(t.identifierNameAtIndex(e)),e++,t.matches1AtIndex(e,st.comma)&&e++),t.matches1AtIndex(e,st.star)&&(n.add(t.identifierNameAtIndex(e+=2)),e++),t.matches1AtIndex(e,st.braceL)&&function(t,e,n){for(;;){if(t.matches1AtIndex(e,st.braceR))return;const i=be(t,e);if(e=i.endIndex,i.isType||n.add(i.rightName),t.matches2AtIndex(e,st.comma,st.braceR))return;if(t.matches1AtIndex(e,st.braceR))return;if(!t.matches1AtIndex(e,st.comma))throw new Error(`Unexpected token: ${JSON.stringify(t.tokens[e])}`);e++}}(t,++e,n))}Pr||(Pr=1,function(t){t.v=!0,t.LinesAndColumns=void 0;var e=function(){function t(t){this.string=t;for(var e=[0],n=0;n<t.length;)switch(t[n]){case"\n":e.push(n+=1);break;case"\r":"\n"===t[n+=1]&&(n+=1),e.push(n);break;default:n++}this.offsets=e}return t.prototype.locationForIndex=function(t){if(t<0||t>this.string.length)return null;for(var e=0,n=this.offsets;n[e+1]<=t;)e++;return{line:e,column:t-n[e]}},t.prototype.indexForLocation=function(t){var e=t.line,n=t.column;return e<0||e>=this.offsets.length||n<0||n>this.lengthOfLine(e)?null:this.offsets[e]+n},t.prototype.lengthOfLine=function(t){return(t===this.offsets.length-1?this.string.length:this.offsets[t+1])-this.offsets[t]},t}();t.LinesAndColumns=e,t.default=e}({}));const Nr=O`
  margin: 8px 0 24px;
`;D`
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
`,D`
  @media (prefers-color-scheme: light) {
    :root:not([data-theme]) {
      --editor-bg: #f5f5f8;
      --editor-text: #2a2a3e;
      --editor-line-nr: #a0a0b0;
      --editor-gutter: rgba(0,0,0,0.04);
    }
  }
`,D`
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
`;const Mr=O`
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
`,Lr=O`
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-top: none;
  border-radius: 0 0 var(--vk-radius-md) var(--vk-radius-md);
  padding: 20px;
`,zr=O`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,Br=O`
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
`,Hr=O`
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
`,qr=O`
  color: #e45;
  font-family: var(--vk-font-mono);
  font-size: 0.8rem;
  white-space: pre-wrap;
  margin: 0;
`,Ur=["signal","computed","effect","batch","untrack","reactive","toRaw","isReactive","snapshot","html","each","css","keyframes","globalCss","cx"],Gr=[i,o,r,s,a,m,function(t){return null!=t&&t[l]?t[l]:t},v,g,y,_,O,R,D,P];function Vr({source:t,label:e="Live output"}){const n=t.trim(),o=i(""),s=i(!1),a=document.createElement("div");let c=[];function l(t){c.forEach(t=>t()),c=[],a.innerHTML="",o("");const e=t.replace(/^import\s+.*$/gm,"").trim();if(!e)return;let n;try{n=function(t,e){!function(t){cn.strictCheck(t)}(e);try{const n=function(t,e){const n=e.transforms.includes("jsx"),i=e.transforms.includes("typescript"),o=e.transforms.includes("flow"),r=!0===e.disableESTransforms,s=function(t,e,n,i){if(i&&n)throw new Error("Cannot combine flow and typescript plugins.");kt(t,e,n,i);const o=ar();if(ft.error)throw bt(ft.error);return o}(t,n,i,o),a=s.tokens,c=s.scopes,l=new Xe(t,a),d=new We(l),u=new lr(t,a,o,r,d),h=Boolean(e.enableLegacyTypeScriptModuleInterop);let p=null;return e.transforms.includes("imports")?(p=new Ie(l,u,h,e,e.transforms.includes("typescript"),Boolean(e.keepUnusedImports),d),p.preprocessTokens(),Je(u,c,p.getGlobalNames()),e.transforms.includes("typescript")&&!e.keepUnusedImports&&p.pruneTypeOnlyImports()):e.transforms.includes("typescript")&&!e.keepUnusedImports&&Je(u,c,function(t){const e=new Set;for(let n=0;n<t.tokens.length;n++)t.matches1AtIndex(n,st.qt)&&!t.matches3AtIndex(n,st.qt,st.name,st.eq)&&jr(t,n,e);return e}(u)),{tokenProcessor:u,scopes:c,nameManager:l,importProcessor:p,helperManager:d}}(t,e),i=new Dr(n,e.transforms,Boolean(e.enableLegacyBabel5ModuleInterop),e).transform();let o={code:i.code};if(e.sourceMapOptions){if(!e.filePath)throw new Error("filePath must be specified when generating a source map.");o={...o,sourceMap:Ge(i,e.filePath,e.sourceMapOptions,t,n.tokenProcessor.tokens)}}return o}catch(n){throw e.filePath&&(n.message=`Error transforming ${e.filePath}: ${n.message}`),n}}(e,{transforms:["typescript"],disableESTransforms:!0}).code}catch(i){return void o(i?.message??String(i))}try{const t=[],e=(...e)=>{for(const n of e)t.push("string"==typeof n?document.createTextNode(n):n)},i=new Proxy(document.body,{get:(n,i)=>"append"===i?e:"appendChild"===i?e=>(t.push(e),e):Reflect.get(n,i)}),o=new Proxy(document,{get(t,n){if("body"===n)return i;if("getElementById"===n)return()=>{const t=document.createElement("div");return t.append=e,t};const o=Reflect.get(t,n);return"function"==typeof o?o.bind(t):o}}),s=[],l=t=>{const e=r(t);return s.push(e),e};new Function(...Ur,"document",n)(...Gr.map((t,e)=>"effect"===Ur[e]?l:t),o),t.forEach(t=>a.append(t)),c=s}catch(i){o(i?.message??String(i))}}l(n);const d=document.createElement("div");d.className=`${Mr} language-typescript`;const u=function(t,e){void 0===e&&(e={});var n,i=K({class:"codejar-linenumbers",wrapClass:"codejar-wrap",width:"35px",backgroundColor:"rgba(128, 128, 128, 0.15)",color:""},e);return function(t){var e;(e=t).innerHTML=ot.highlight(e.textContent||"",ot.languages.typescript,"typescript"),n||(n=function(t,e){var n=getComputedStyle(t),i=document.createElement("div");i.className=e.wrapClass,i.style.position="relative";var o=document.createElement("div");o.className="codejar-linenumbers-inner-wrap",o.style.background=n.background,o.style.marginTop=n.borderTopWidth,o.style.marginBottom=n.borderBottomWidth,o.style.marginLeft=n.borderLeftWidth,o.style.borderTopLeftRadius=n.borderTopLeftRadius,o.style.borderBottomLeftRadius=n.borderBottomLeftRadius;var r=document.createElement("div");r.className=e.class,o.appendChild(r),i.appendChild(o),r.style.width=e.width,r.style.overflow="hidden",r.style.backgroundColor=e.backgroundColor,r.style.fontFamily=n.fontFamily,r.style.fontSize=n.fontSize,r.style.lineHeight=n.lineHeight,r.style.paddingTop="calc("+n.paddingTop+")",r.style.paddingLeft=n.paddingLeft,r.style.borderTopLeftRadius=n.borderTopLeftRadius,r.style.borderBottomLeftRadius=n.borderBottomLeftRadius;var s=document.createElement("div");return s.setAttribute("class","codejar-linenumber"),s.style.color=e.color||n.color,s.style.setProperty("mix-blend-mode","unset"),r.appendChild(s),t.style.paddingLeft="calc("+e.width+" + "+r.style.paddingLeft+" + 5px)",t.style.whiteSpace="pre",t.parentNode.insertBefore(i,t),i.appendChild(t),s}(t,i),t.addEventListener("scroll",function(){return n.style.top="-"+t.scrollTop+"px"}));for(var o=(t.textContent||"").replace(/\n$/g,"").split("\n").length,r="",s=0;s<o;s++)r+=s+1+"\n";n.innerText=r}}(0,{color:"#4a4a5a",backgroundColor:"rgba(255,255,255,0.04)"});function h(){const t=d.Ce;t&&t.updateCode(n),s(!1),l(n)}return requestAnimationFrame(()=>{const t=function(t,e,n={}){const i={tab:"\t",indentOn:/[({\[]$/,moveToNewLine:/^[)}\]]/,spellcheck:!1,catchTab:!0,preserveIdent:!0,addClosing:!0,history:!0,window:Z,autoclose:{open:"([{'\"",close:")]}'\""},...n},o=i.window,r=o.document,s=[],a=[];let c,l=-1,d=!1,u=()=>{};t.setAttribute("contenteditable","plaintext-only"),t.setAttribute("spellcheck",i.spellcheck?"true":"false"),t.style.outline="none",t.style.overflowWrap="break-word",t.style.overflowY="auto",t.style.whiteSpace="pre-wrap";const h=(t,n)=>{e(t,n)},p=o.navigator.userAgent.match(/Firefox\/([0-9]+)\./),f=p?parseInt(p[1]):0;let m=!1;("plaintext-only"!==t.contentEditable||f>=136)&&(m=!0),m&&t.setAttribute("contenteditable","true");const v=D(()=>{const e=x();h(t,e),w(e)},30);let g=!1;const b=t=>!T(t)&&!I(t)&&"Meta"!==t.key&&"Control"!==t.key&&"Alt"!==t.key&&!t.key.startsWith("Arrow"),y=D(t=>{b(t)&&(_(),g=!1)},300),k=(e,n)=>{s.push([e,n]),t.addEventListener(e,n)};function x(){const e=M(),n={start:0,end:0,dir:void 0};let{anchorNode:i,anchorOffset:o,focusNode:s,focusOffset:a}=e;if(!i||!s)throw"error1";if(i===t&&s===t)return n.start=o>0&&t.textContent?t.textContent.length:0,n.end=a>0&&t.textContent?t.textContent.length:0,n.dir=a>=o?"->":"<-",n;if(i.nodeType===Node.ELEMENT_NODE){const t=r.createTextNode("");i.insertBefore(t,i.childNodes[o]),i=t,o=0}if(s.nodeType===Node.ELEMENT_NODE){const t=r.createTextNode("");s.insertBefore(t,s.childNodes[a]),s=t,a=0}return C(t,t=>{if(t===i&&t===s)return n.start+=o,n.end+=a,n.dir=o<=a?"->":"<-","stop";if(t===i){if(n.start+=o,n.dir)return"stop";n.dir="->"}else if(t===s){if(n.end+=a,n.dir)return"stop";n.dir="<-"}t.nodeType===Node.TEXT_NODE&&("->"!=n.dir&&(n.start+=t.nodeValue.length),"<-"!=n.dir&&(n.end+=t.nodeValue.length))}),t.normalize(),n}function w(e){const n=M();let i,o,s=0,a=0;if(e.dir||(e.dir="->"),e.start<0&&(e.start=0),e.end<0&&(e.end=0),"<-"==e.dir){const{start:t,end:n}=e;e.start=n,e.end=t}let c=0;C(t,t=>{if(t.nodeType!==Node.TEXT_NODE)return;const n=(t.nodeValue||"").length;if(c+n>e.start&&(i||(i=t,s=e.start-c),c+n>e.end))return o=t,a=e.end-c,"stop";c+=n}),i||(i=t,s=t.childNodes.length),o||(o=t,a=t.childNodes.length),"<-"==e.dir&&([i,s,o,a]=[o,a,i,s]);{const t=$(i);if(t){const e=r.createTextNode("");t.parentNode?.insertBefore(e,t),i=e,s=0}const e=$(o);if(e){const t=r.createTextNode("");e.parentNode?.insertBefore(t,e),o=t,a=0}}n.setBaseAndExtent(i,s,o,a),t.normalize()}function $(e){for(;e&&e!==t;){if(e.nodeType===Node.ELEMENT_NODE){const t=e;if("false"==t.getAttribute("contenteditable"))return t}e=e.parentNode}}function S(){const e=M().getRangeAt(0),n=r.createRange();return n.selectNodeContents(t),n.setEnd(e.startContainer,e.startOffset),n.toString()}function A(){const e=M().getRangeAt(0),n=r.createRange();return n.selectNodeContents(t),n.setStart(e.endContainer,e.endOffset),n.toString()}function E(t){if(m&&"Enter"===t.key)if(N(t),t.stopPropagation(),""==A()){R("\n ");const t=x();t.start=--t.end,w(t)}else R("\n")}function _(){if(!d)return;const e=t.innerHTML,n=x(),i=a[l];i&&i.html===e&&i.pos.start===n.start&&i.pos.end===n.end||(l++,a[l]={html:e,pos:n},a.splice(l+1),l>300&&(l=300,a.splice(0,1)))}function C(t,e){const n=[];t.firstChild&&n.push(t.firstChild);let i=n.pop();for(;i&&"stop"!==e(i);)i.nextSibling&&n.push(i.nextSibling),i.firstChild&&n.push(i.firstChild),i=n.pop()}function F(t){return t.metaKey||t.ctrlKey}function T(t){return F(t)&&!t.shiftKey&&"Z"===O(t)}function I(t){return F(t)&&t.shiftKey&&"Z"===O(t)}function O(t){let e=t.key||t.keyCode||t.which;if(e)return("string"==typeof e?e:String.fromCharCode(e)).toUpperCase()}function R(t){t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),r.execCommand("insertHTML",!1,t)}function D(t,e){let n=0;return(...i)=>{clearTimeout(n),n=o.setTimeout(()=>t(...i),e)}}function P(t){let e=t.length-1;for(;e>=0&&"\n"!==t[e];)e--;e++;let n=e;for(;n<t.length&&/[ \t]/.test(t[n]);)n++;return[t.substring(e,n)||"",e,n]}function j(){return t.textContent||""}function N(t){t.preventDefault()}function M(){return t.getRootNode().getSelection()}return k("keydown",e=>{e.defaultPrevented||(c=j(),i.preserveIdent?function(t){if("Enter"===t.key){const e=S(),n=A();let[o]=P(e),r=o;if(i.indentOn.test(e)&&(r+=i.tab),r.length>0?(N(t),t.stopPropagation(),R("\n"+r)):E(t),r!==o&&i.moveToNewLine.test(n)){const t=x();R("\n"+o),w(t)}}}(e):E(e),i.catchTab&&function(t){if("Tab"===t.key)if(N(t),t.shiftKey){const t=S();let[e,n]=P(t);if(e.length>0){const t=x(),o=Math.min(i.tab.length,e.length);w({start:n,end:n+o}),r.execCommand("delete"),t.start-=o,t.end-=o,w(t)}}else R(i.tab)}(e),i.addClosing&&function(t){const e=i.autoclose.open,n=i.autoclose.close;if(e.includes(t.key)){N(t);const i=x(),o=i.start==i.end?"":M().toString();R(t.key+o+(n[e.indexOf(t.key)]??"")),i.start++,i.end++,w(i)}}(e),i.history&&(function(e){if(T(e)){N(e),l--;const n=a[l];n&&(t.innerHTML=n.html,w(n.pos)),l<0&&(l=0)}if(I(e)){N(e),l++;const n=a[l];n&&(t.innerHTML=n.html,w(n.pos)),l>=a.length&&l--}}(e),b(e)&&!g&&(_(),g=!0)),m&&!function(t){return F(t)&&"C"===O(t)}(e)&&w(x()))}),k("keyup",t=>{t.defaultPrevented||t.isComposing||(c!==j()&&v(),y(t),u(j()))}),k("focus",t=>{d=!0}),k("blur",t=>{d=!1}),k("paste",e=>{_(),function(e){if(e.defaultPrevented)return;N(e);const n=(e.originalEvent??e).clipboardData.getData("text/plain").replace(/\r\n?/g,"\n"),i=x();R(n),h(t),w({start:Math.min(i.start,i.end)+n.length,end:Math.min(i.start,i.end)+n.length,dir:"<-"})}(e),_(),u(j())}),k("cut",e=>{_(),function(e){const n=x(),i=M();(e.originalEvent??e).clipboardData.setData("text/plain",i.toString()),r.execCommand("delete"),h(t),w({start:Math.min(n.start,n.end),end:Math.min(n.start,n.end),dir:"<-"}),N(e)}(e),_(),u(j())}),{updateOptions(t){Object.assign(i,t)},updateCode(e,n=!0){t.textContent=e,h(t),n&&u(e)},onUpdate(t){u=t},toString:j,save:x,restore:w,recordHistory:_,destroy(){for(let[e,n]of s)t.removeEventListener(e,n)}}}(d,u,{tab:"  ",catchTab:!0,preserveIdent:!0,addClosing:!0});t.updateCode(n),t.onUpdate(t=>{s(t!==n),l(t)}),d.Ce=t}),y`<div class=${Nr}>
    ${d}
    <div class=${Lr}>
      <div class=${zr}>
        <div class=${Br}>${e}</div>
        ${()=>s()?y`<button class=${Hr} onclick=${h}>
                ↺ reset
              </button>`:""}
      </div>
      ${()=>o()?y`<pre class=${qr}>${o()}</pre>`:""}
      ${a}
    </div>
  </div>`}const Wr='\nimport { signal, html, type VanillaElement } from "vanillakit";\n\ninterface CounterProps {\n  initial: number;\n}\n\nconst Counter = (props: CounterProps = { initial: 0 }): VanillaElement => {\n  const count = signal(props.initial); // Signal<number>\n  return html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      Count: ${count}\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n    </div>\n  `;\n};\n\ndocument.body.append(Counter({ initial: 10 }));\n',Jr=i([{dd:"5.55",dt:"kB (brotli)"},{dd:"0",dt:"Deps"},{dd:"5",dt:"Modules"}]);var Yr,Xr,Zr;function Kr(t,e="typescript"){const n=t.trim(),i=ot.highlight(n,ot.languages[e]||ot.languages.typescript,e),o=document.createElement("pre");return o.className=J,o.innerHTML=i,o}Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,e){var n={};n["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(t,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(Prism),function(t){var e,n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:e={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp("\\[(?:[^[\\]\"']|"+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=e,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var i={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:i,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:i,number:o})}(Prism),Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,Yr||(Yr=1,function(t){var e=t.languages.javascript["template-string"],n=e.pattern.source,i=e.inside.interpolation,o=i.inside["interpolation-punctuation"],r=i.pattern.source;function s(e,i){if(t.languages[e])return{pattern:RegExp("((?:"+i+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}function a(t,e){return"___"+e.toUpperCase()+"_"+t+"___"}function c(e,n,i){var o={code:e,grammar:n,language:i};return t.hooks.run("before-tokenize",o),o.tokens=t.tokenize(o.code,o.grammar),t.hooks.run("after-tokenize",o),o.tokens}function l(e){var n={};n["interpolation-punctuation"]=o;var r=t.tokenize(e,n);if(3===r.length){var s=[1,1];s.push.apply(s,c(r[1],t.languages.javascript,"javascript")),r.splice.apply(r,s)}return new t.Token("interpolation",r,i.alias,e)}function d(e,n,i){var o=t.tokenize(e,{interpolation:{pattern:RegExp(r),lookbehind:!0}}),s=0,d={},u=c(o.map(function(t){if("string"==typeof t)return t;for(var n,o=t.content;-1!==e.indexOf(n=a(s++,i)););return d[n]=o,n}).join(""),n,i),h=Object.keys(d);return s=0,function t(e){for(var n=0;n<e.length;n++){if(s>=h.length)return;var i=e[n];if("string"==typeof i||"string"==typeof i.content){var o=h[s],r="string"==typeof i?i:i.content,a=r.indexOf(o);if(-1!==a){++s;var c=r.substring(0,a),u=l(d[o]),p=r.substring(a+o.length),f=[];if(c&&f.push(c),f.push(u),p){var m=[p];t(m),f.push.apply(f,m)}"string"==typeof i?(e.splice.apply(e,[n,1].concat(f)),n+=f.length-1):i.content=f}}else{var v=i.content;Array.isArray(v)?t(v):t([v])}}}(u),new t.Token(i,u,"language-"+i,e)}t.languages.javascript["template-string"]=[s("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),s("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),s("svg",/\bsvg/.source),s("markdown",/\b(?:markdown|md)/.source),s("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),s("sql",/\bsql/.source),e].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function h(t){return"string"==typeof t?t:Array.isArray(t)?t.map(h).join(""):h(t.content)}t.hooks.add("after-tokenize",function(e){e.language in u&&function e(n){for(var i=0,o=n.length;i<o;i++){var r=n[i];if("string"!=typeof r){var s=r.content;if(Array.isArray(s))if("template-string"===r.type){var a=s[1];if(3===s.length&&"string"!=typeof a&&"embedded-code"===a.type){var c=h(a),l=a.alias,u=Array.isArray(l)?l[0]:l,p=t.languages[u];if(!p)continue;s[1]=d(c,p,u)}}else e(s);else"string"!=typeof s&&e([s])}}}(e.tokens)})}(Prism)),Xr||(Xr=1,function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var e=t.languages.extend("typescript",{});delete e["class-name"],t.languages.typescript["class-name"].inside=e,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),t.languages.ts=t.languages.typescript}(Prism)),function(t){var e="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},i={bash:n,environment:{pattern:RegExp("\\$"+e),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+e),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+e),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:i},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:i},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:i.entity}}],environment:{pattern:RegExp("\\$?"+e),alias:"constant"},variable:i.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=i.variable[1].inside,s=0;s<o.length;s++)r[o[s]]=t.languages.bash[o[s]];t.languages.sh=t.languages.bash,t.languages.shell=t.languages.bash}(Prism),Zr||(Zr=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),D`
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
`;const Qr=O`
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
`,ts=O`
  flex: 1;
  text-decoration: line-through;
  opacity: 0.45;
`,es={high:"danger",medium:"primary",low:"success"};let ns=4;const is=i([{id:1,text:"Build signal-based reactivity",done:!0,priority:"high"},{id:2,text:"Implement tagged template DOM engine",done:!0,priority:"high"},{id:3,text:"Add keyed list reconciliation",done:!1,priority:"medium"}]),os=i("all"),rs=o(()=>{const t=os(),e=is();return"active"===t?e.filter(t=>!t.done):"done"===t?e.filter(t=>t.done):e}),ss=o(()=>{const t=is();return{total:t.length,done:t.filter(t=>t.done).length,active:t.filter(t=>!t.done).length}}),as=O`
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
`,cs=O`
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
`,ls=i([]);function ds(t){ls(e=>[`${performance.now().toFixed(1)}ms — ${t}`,...e.slice(0,19)])}let us=1;const hs=["Alice","Bob","Carol","Dan","Eve","Frank","Grace","Hank","Iris","Jack","Kara","Leo","Mia","Nico","Olga","Pete"];function ps(){return{id:us++,name:hs[Math.floor(Math.random()*hs.length)],score:Math.floor(100*Math.random())}}const fs=i(Array.from({length:8},ps));function ms(t){const e=[...t];for(let n=e.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}function vs(t,e){return y`<li class=${as}>
    <span class="idx">${()=>e()}</span>
    <span class="name">${()=>t().name}</span>
    <span
      class="score"
      style=${()=>"color: "+(t().score>70?"var(--vk-color-success)":t().score>40?"var(--vk-color-accent)":"var(--vk-color-danger)")}
      >${()=>t().score}</span
    >
    <input data-size="sm" style="width:80px;" placeholder="type here…" />
    <button
      data-variant="danger"
      data-size="sm"
      onclick=${()=>fs(e=>e.filter(e=>e.id!==t().id))}
    >
      ✕
    </button>
  </li>`}const gs=O`
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
`,bs=[{label:"Demos",items:[{id:"snippets",label:"Code Examples"},{id:"sandbox",label:"Playground"},{id:"todo",label:"Todo App"},{id:"playground",label:"Reactive Demos"},{id:"stress",label:"Stress Test"}]}],ys={snippets:function(){return y`<section>
    <h2>Code Examples</h2>

    <h3>Counter</h3>
    <p>The simplest possible app — a signal and a button.</p>
    ${Vr({source:'import { signal, html } from "vanillakit";\n\nconst count = signal(0);\n\ndocument.body.append(html`\n  <button onclick=${() => count(n => n + 1)}>\n    Clicked ${count} times\n  </button>\n`);',label:"Counter"})}

    <h3>Two-way binding</h3>
    <p>Bind an input to a signal. The heading updates as you type.</p>
    ${Vr({source:'import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\ndocument.body.append(html`\n  <div>\n    <p style="font-size:1.2rem; font-weight:700;">Hello, ${name}!</p>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)}\n      style="max-width:240px;" />\n  </div>\n`);',label:"Two-way binding"})}

    <h3>Derived state</h3>
    ${Vr({source:'import { signal, computed, html } from "vanillakit";\n\nconst price    = signal(10);\nconst quantity = signal(3);\nconst total    = computed(() => price() * quantity());\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label>Price:\n      <input type="number" value=${() => price()}\n        oninput=${(e) => price(+e.target.value)} style="width:80px;" />\n    </label>\n    <label>Qty:\n      <input type="number" value=${() => quantity()}\n        oninput=${(e) => quantity(+e.target.value)} style="width:80px;" />\n    </label>\n    <span style="font-weight:700;">Total: $${total}</span>\n  </div>\n`);',label:"Derived state — change price or qty"})}

    <h3>Reactive object</h3>
    ${Kr('import { reactive, snapshot, effect } from "vanillakit";\n\nconst state = reactive({\n  todos: [\n    { text: "Learn signals", done: true },\n    { text: "Build an app",  done: false },\n  ],\n});\n\neffect(() => console.log(JSON.stringify(snapshot(state), null, 2)));\n\nstate.todos.push({ text: "Ship it", done: false });\nstate.todos[0].done = false;')}

    <h3>Scoped styles + routing</h3>
    ${Kr('import { html, css, globalCss, createRouter, navLink } from "vanillakit";\n\nglobalCss`body { margin: 0; font-family: system-ui; }`;\n\nconst page = css`padding: 24px;`;\nconst active = css`color: gold; font-weight: 700;`;\nconst base = css`color: gray; text-decoration: none;`;\n\nconst Router = createRouter({\n  "/":      () => html`<div class=${page}><h1>Home</h1></div>`,\n  "/about": () => html`<div class=${page}><h1>About</h1></div>`,\n  "*":      () => html`<div class=${page}><h1>404</h1></div>`,\n});\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);')}
  </section>`},sandbox:function(){return y`<section>
    <h2>Playground</h2>
    <p>
      Write vanillakit code and see results live. Edit the code below — output
      updates instantly.
    </p>

    ${Vr({source:'import { signal, computed, html, css } from "vanillakit";\n\nconst count = signal(0);\nconst double = computed(() => count() * 2);\n\nconst badge = css`\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-family: monospace;\n  font-weight: 600;\n  background: var(--vk-color-accent-dim);\n  color: var(--vk-color-accent);\n`;\n\ndocument.body.append(html`\n  <div>\n    <h3>Counter: ${count}</h3>\n    <p>Double: <span class=${badge}>${double}</span></p>\n    <div style="display:flex; gap:8px; margin-top:12px;">\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n      <button onclick=${() => count(n => n - 1)}>-1</button>\n      <button onclick=${() => count(0)}>Reset</button>\n    </div>\n  </div>\n`);',label:"Sandbox — edit freely"})}
  </section>`},todo:function(){return y`<section>
    <h2>Todo App</h2>
    <p class=${W}>
      A fully reactive todo app — signals, computed, each().
    </p>
    <div data-grid data-cols="3" style="margin-bottom:28px;">
      <article data-card style="text-align:center;">
        <dl>
          <dd>${()=>ss().total}</dd>
          <dt>Total</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-accent">${()=>ss().active}</dd>
          <dt>Active</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-success">${()=>ss().done}</dd>
          <dt>Done</dt>
        </dl>
      </article>
    </div>
    ${function(){const t=i(""),e=i("medium"),n=()=>{const n=t().trim();n&&(is(t=>[...t,{id:ns++,text:n,done:!1,priority:e()}]),t(""))};return y`<div style="display:flex;gap:8px;margin-bottom:24px;">
    <input
      placeholder="What needs doing?"
      value=${()=>t()}
      oninput=${e=>t(e.target.value)}
      onkeydown=${t=>{"Enter"===t.key&&n()}}
    />
    <select
      onchange=${t=>e(t.target.value)}
    >
      <option value="low">Low</option>
      <option value="medium" selected>Med</option>
      <option value="high">High</option>
    </select>
    <button onclick=${n}>Add</button>
  </div>`}()} ${y`<div role="group" style="margin-bottom:20px;">
    ${["all","active","done"].map(t=>y`<button
          aria-pressed=${()=>os()===t?"true":"false"}
          onclick=${()=>os(t)}
        >
          ${t[0].toUpperCase()+t.slice(1)}
          ${()=>{const e=ss();return`(${"all"===t?e.total:"active"===t?e.active:e.done})`}}
        </button>`)}
  </div>`}
    <ul style="list-style:none;padding:0;">
      ${_(rs,t=>t.id,t=>function(t){const e=t();return y`<li class=${Qr}>
    <input type="checkbox" checked=${e.done} onclick=${()=>is(t=>t.map(t=>t.id===e.id?{...t,done:!t.done}:t))} />
    <span class=${e.done?ts:""} style="flex:1;"
      >${e.text}</span
    >
    <span data-badge data-variant=${es[e.priority]}
      >${e.priority}</span
    >
    <button data-variant="danger" data-size="sm" onclick=${()=>is(t=>t.filter(t=>t.id!==e.id))}>✕</button>
  </li>`}(t))}
      ${()=>0===rs().length?y`<div data-empty>No tasks match this filter.</div>`:null}
    </ul>
    <details>
      <summary>View source — signals, computed, each()</summary>
      ${Kr('// Reactive state\nconst todos = signal([...]);\nconst filter = signal("all");\nconst filteredTodos = computed(() => {\n  const f = filter();\n  const l = todos();\n  return f === "active" ? l.filter(t => !t.done)\n       : f === "done"   ? l.filter(t => t.done)\n       : l;\n});\nconst stats = computed(() => {\n  const l = todos();\n  return {\n    total: l.length,\n    done: l.filter(t => t.done).length,\n    active: l.filter(t => !t.done).length,\n  };\n});\n\n// Keyed list rendering — DOM nodes reused by id\nhtml`<div>\n  ${each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))}\n</div>`;\n\n// Adding a todo — just push to the signal\nfunction add() {\n  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);\n}\n\n// TodoItem reads from itemSig — updates when that item changes\nfunction TodoItem(itemSig) {\n  const todo = itemSig();\n  const toggle = () => todos(l => l.map(t =>\n    t.id === todo.id ? { ...t, done: !t.done } : t\n  ));\n  return html`<div>\n    <input type="checkbox" checked=${todo.done} onclick=${toggle} />\n    <span>${todo.text}</span>\n  </div>`;\n}')}
    </details>
  </section>`},playground:function(){const t=m({user:{name:"Ada Lovelace",settings:{theme:"dark",notifications:{email:!0,push:!1,frequency:"daily"}},scores:[95,87,92]}}),e=o(()=>JSON.stringify(g(t),null,2)),n=O`
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
  `,r=O`
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
  `,s=O`
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
  `,a=O`
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
  `,c={success:O`
    border-color: var(--vk-color-success);
    background: var(--vk-color-success-dim);
    color: var(--vk-color-success);
    & .icon {
      background: var(--vk-color-success);
      color: var(--vk-color-bg);
    }
  `,warning:O`
    border-color: var(--vk-color-accent);
    background: var(--vk-color-accent-dim);
    color: var(--vk-color-accent);
    & .icon {
      background: var(--vk-color-accent);
      color: var(--vk-color-bg);
    }
  `,error:O`
    border-color: var(--vk-color-danger);
    background: var(--vk-color-danger-dim);
    color: var(--vk-color-danger);
    & .icon {
      background: var(--vk-color-danger);
      color: var(--vk-color-bg);
    }
  `,info:O`
    border-color: var(--vk-color-info);
    background: var(--vk-color-info-dim);
    color: var(--vk-color-info);
    & .icon {
      background: var(--vk-color-info);
      color: var(--vk-color-bg);
    }
  `},l={success:"✓",warning:"!",error:"✕",info:"i"},d={success:"All systems operational. Deployment completed.",warning:"High memory usage detected. Consider scaling.",error:"Connection lost. Retrying in 5 seconds…",info:"New version available. Update when ready."},u=O`
    border-radius: 24px !important;
    & .icon {
      border-radius: 12px;
    }
  `,h=O`
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.3);
  `,p=O`
    border-width: 3px;
    border-style: dashed;
  `,f=O`
    transform: scale(1.02);
  `,v=O`
    box-shadow:
      0 0 20px currentColor,
      0 0 40px currentColor;
    &:hover {
      box-shadow:
        0 0 30px currentColor,
        0 0 60px currentColor;
    }
  `,b=i("success"),k=i(!1),x=i(!1),w=i(!1),$=i(!1),S=i(!1),A=i(100),E=i(10),_=i(100),C=O`
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
    <p class=${W}>
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
              value=${()=>t.user.name}
              oninput=${e=>{t.user.name=e.target.value}}
            />
          </label>
          <label>
            user.settings.theme
            <select
              style="width:100%;margin-top:4px;"
              onchange=${e=>{t.user.settings.theme=e.target.value}}
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
                checked=${()=>t.user.settings.notifications.email}
                onclick=${()=>{t.user.settings.notifications.email=!t.user.settings.notifications.email}}
              />
              email
            </label>
            <label
              style="display:flex;gap:6px;align-items:center;"
            >
              <input
                type="checkbox"
                checked=${()=>t.user.settings.notifications.push}
                onclick=${()=>{t.user.settings.notifications.push=!t.user.settings.notifications.push}}
              />
              push
            </label>
          </div>
          <label>
            user.settings.notifications.frequency
            <select
              style="width:100%;margin-top:4px;"
              onchange=${e=>{t.user.settings.notifications.frequency=e.target.value}}
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
              onclick=${()=>{t.user.scores.push(Math.floor(100*Math.random()))}}
            >
              Push score
            </button>
            <button
              data-variant="danger"
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${()=>{t.user.scores.length&&t.user.scores.pop()}}
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
          class=${gs}
          style="font-size:0.75rem;max-height:320px;overflow-y:auto;"
        >
          ${()=>e()}
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
          ${["success","warning","error","info"].map(t=>y`
              <button
                data-ghost=${()=>b()===t?null:""}
                style="font-size:0.75rem;padding:6px 12px;flex:1;"
                onclick=${()=>b(t)}
              >
                ${t}
              </button>
            `)}
        </div>

        <div role="group"
          style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;"
        >
          <button
            aria-pressed=${()=>k()?"true":"false"}
            onclick=${()=>k(t=>!t)}
          >
            rounded
          </button>
          <button
            aria-pressed=${()=>x()?"true":"false"}
            onclick=${()=>x(t=>!t)}
          >
            shadow
          </button>
          <button
            aria-pressed=${()=>w()?"true":"false"}
            onclick=${()=>w(t=>!t)}
          >
            dashed
          </button>
          <button
            aria-pressed=${()=>$()?"true":"false"}
            onclick=${()=>$(t=>!t)}
          >
            scale
          </button>
          <button
            aria-pressed=${()=>S()?"true":"false"}
            onclick=${()=>S(t=>!t)}
          >
            glow
          </button>
        </div>

        <div
          class=${()=>P(a,c[b()],k()&&u,x()&&h,w()&&p,$()&&f,S()&&v)}
        >
          <div class="icon">${()=>l[b()]}</div>
          <div class="text">
            <div class="label">${()=>b()}</div>
            <div class="message">${()=>d[b()]}</div>
          </div>
        </div>

        <div
          class=${gs}
          style="margin-top:12px;font-size:0.7rem;line-height:1.6;"
        >
          cx(statusBase,
          <strong
            >${()=>"status"+b()[0].toUpperCase()+b().slice(1)}</strong
          >${()=>k()?", propRounded":""}${()=>x()?", propShadow":""}${()=>w()?", propBorder":""}${()=>$()?", propScale":""}${()=>S()?", propGlow":""})
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
              oninput=${t=>A(+t.target.value)}
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
              value=${()=>E()}
              oninput=${t=>E(+t.target.value)}
            />
            <code style="min-width:38px;"
              >${()=>E()}px</code
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
              value=${()=>_()}
              oninput=${t=>_(+t.target.value)}
            />
            <code style="min-width:38px;"
              >${()=>_()}%</code
            >
          </label>
        </div>

        <div style="display:flex;justify-content:center;padding:20px 0;">
          <div
            class=${C}
            style=${()=>`height: ${A()}px; border-radius: ${E()}px; opacity: ${_()/100}; font-size: ${Math.max(10,.14*A())}px;`}
          >
            ${()=>`${A()}% · ${E()}px · ${_()}%`}
          </div>
        </div>

        <div class=${gs} style="font-size:0.7rem;line-height:1.6;">
          style=${"${"}() => ${"`"} height:
          <strong>${()=>A()}px</strong>; border-radius:
          <strong>${()=>E()}px</strong>; opacity:
          <strong>${()=>(_()/100).toFixed(2)}</strong>; ${"`"}}
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

    <article class=${r}>
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

    <article class=${s}>
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
      ${Kr('// Deep reactive proxy — mutate normally, changes propagate\nconst state = reactive({\n  user: {\n    name: "Ada Lovelace",\n    settings: {\n      theme: "dark",\n      notifications: { email: true, push: false, frequency: "daily" },\n    },\n    scores: [95, 87, 92],\n  },\n});\n\n// Computed snapshot for display — auto-updates\nconst jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));\n\n// Direct mutation triggers effects\nstate.user.name = "Grace Hopper";\nstate.user.scores.push(99);\n\n// Scoped CSS with nesting, pseudo-classes, @media\nconst card = css`\n  padding: 20px;\n  border: 2px solid var(--vk-color-border);\n  &:hover { border-color: var(--vk-color-accent); }\n  & > .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 12px; }\n`;\n\n// cx() merges class names, skipping falsy values\nconst classes = cx(\n  statusBase,\n  statusMap[status()],\n  rounded() && propRounded,\n  shadow() && propShadow,\n);')}
    </details>
  </section>`},stress:function(){return y`<section>
    <h2>List Stress Test</h2>
    <p class=${W}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type in the
      inputs to verify DOM preservation.
    </p>

    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
      <button
        onclick=${()=>{fs(ms),ds("Shuffled")}}
      >
        Shuffle
      </button>
      <button
        data-variant="info"
        onclick=${()=>{fs(t=>[...t].reverse()),ds("Reversed")}}
      >
        Reverse
      </button>
      <button
        data-variant="success"
        onclick=${()=>{fs(t=>[...t,ps()]),ds("Added 1")}}
      >
        + Add 1
      </button>
      <button
        data-variant="success"
        onclick=${()=>{const t=Array.from({length:5},ps);fs(e=>[...e,...t]),ds("Added 5")}}
      >
        + Add 5
      </button>
      <button
        data-variant="danger"
        onclick=${()=>{fs(t=>{if(!t.length)return t;const e=Math.floor(Math.random()*t.length);return t.filter((t,n)=>n!==e)}),ds("Removed random")}}
      >
        - Remove random
      </button>
      <button
        data-ghost
        onclick=${()=>{fs(t=>t.map(t=>({...t,score:Math.floor(100*Math.random())}))),ds("Randomized scores")}}
      >
        Randomize scores
      </button>
      <button
        data-ghost
        onclick=${()=>{fs(t=>[...t].sort((t,e)=>t.name.localeCompare(e.name))),ds("Sorted by name")}}
      >
        Sort A→Z
      </button>
      <button
        data-ghost
        onclick=${()=>{fs(t=>[...t].sort((t,e)=>e.score-t.score)),ds("Sorted by score")}}
      >
        Sort by score
      </button>
      <button
        data-variant="danger"
        onclick=${()=>{fs([]),ds("Cleared all")}}
      >
        Clear
      </button>
      <button
        onclick=${()=>{fs(Array.from({length:50},ps)),ds("Reset to 50 items")}}
      >
        Reset 50
      </button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;align-items:center;">
      <span data-badge data-variant="primary"
        >${()=>fs().length} items</span
      >
      <small
        >Type in any input, then shuffle — your text stays because each() reuses
        DOM nodes by key.</small
      >
    </div>

    <ul style="list-style:none;padding:0;margin-bottom:24px;">
      ${_(fs,t=>t.id,vs)}
      ${()=>0===fs().length?y`<div data-empty>List is empty. Add some items!</div>`:null}
    </ul>

    <h3>Operation Log</h3>
    <div class=${cs}>
      ${()=>0===ls().length?"No operations yet…":ls().join("\n")}
    </div>
    <details>
      <summary>View source — each() keyed reconciliation</summary>
      ${Kr('// each() reuses DOM nodes by key across mutations\nconst items = signal(Array.from({ length: 8 }, randItem));\n\n// Render — each item gets a Signal<T> and ReadonlySignal<number>\nhtml`<div>\n  ${each(items, item => item.id, (itemSig, indexSig) =>\n    html`<div>\n      <span>${() => indexSig()}</span>\n      <span>${() => itemSig().name}</span>\n      <span>${() => itemSig().score}</span>\n      <input placeholder="type here…" />\n    </div>`\n  )}\n</div>`;\n\n// Mutations — DOM nodes with matching keys are reused, not recreated.\n// Text typed into inputs persists across shuffle/reverse/sort.\nitems(shuffle);                              // reorder\nitems(l => [...l].reverse());                // reverse\nitems(l => [...l, randItem()]);              // append\nitems(l => l.filter(x => x.id !== target));  // remove\nitems(l => [...l].sort((a, b) =>             // sort\n  a.name.localeCompare(b.name)\n));')}
    </details>
  </section>`}},ks=O`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,xs=[{name:"signal.js",icon:"⚡",color:"var(--vk-color-accent)",lines:"~90",desc:"signal, computed, effect, batch, untrack"},{name:"reactive.js",icon:"🔮",color:"#a78bfa",lines:"~130",desc:"Proxy-based deep reactivity, identity cache, array methods"},{name:"html.js",icon:"🧩",color:"#60a5fa",lines:"~210",desc:"Tagged templates → live DOM, keyed each() reconciliation"},{name:"component.js",icon:"📦",color:"var(--vk-color-success)",lines:"~95",desc:"mount, onMount, onCleanup, provide/inject"},{name:"router.js",icon:"🧭",color:"#f472b6",lines:"~105",desc:"History-based SPA routing, reactive params"},{name:"css.js",icon:"🎨",color:"#fb923c",lines:"~130",desc:"Scoped CSS-in-JS with deep nesting, @media, combinators"}];function ws(t,e,n){return y`<tr>
    <td><code>${t}</code></td>
    <td><code>${e}</code></td>
    <td>${n}</td>
  </tr>`}const $s=[{label:"Guide",items:[{id:"getting-started",label:"Getting Started"},{id:"typescript",label:"TypeScript & Tooling"}]},{label:"Concepts",items:[{id:"components",label:"Components"},{id:"reactivity",label:"Reactivity"},{id:"data-fetching",label:"Data Fetching"},{id:"conditional",label:"Conditional Rendering"},{id:"lists",label:"Lists & Keys"},{id:"forms",label:"Forms"},{id:"styling",label:"Styling"},{id:"routing-concepts",label:"Routing"}]},{label:"VanillaCSS",items:[{id:"vanillacss",label:"Overview"},{id:"vanillacss-theming",label:"Theming"},{id:"vanillacss-components",label:"Components"},{id:"vanillacss-tokens",label:"Token Reference"}]},{label:"Integrations",items:[{id:"htmx",label:"htmx"},{id:"tailwind",label:"Tailwind CSS"},{id:"hono",label:"Hono"},{id:"fastapi",label:"FastAPI"}]},{label:"API Reference",items:[{id:"signal",label:"signal.js"},{id:"reactive",label:"reactive.js"},{id:"html-module",label:"html.js"},{id:"css-module",label:"css.js"},{id:"router",label:"router.js"}]}],Ss={"getting-started":function(){return y`<section>
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
    ${Kr("# clone the repo\ngit clone https://github.com/nisuxyz/vanillakit.git\ncp -r vanillakit/src ./vanillakit","bash")}

    <p>Or import straight from a CDN — no install needed:</p>
    ${Kr('<script type="module">\n  import { signal, html, css } from "https://esm.sh/gh/nisuxyz/vanillakit/src/index.js";\n\n  // ready to go\n<\/script>',"markup")}

    <h3>Quick setup</h3>
    <p>Create an <code>index.html</code> and a module entry point:</p>
    ${Kr('<!doctype html>\n<html>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}
    ${Vr({source:`// app.js${Wr}`,label:"app.js"})}

    <h3>Project structure</h3>
    <p>There's no required structure. The library is five files:</p>
    ${Kr("src/\n  signal.js    — signal, computed, effect, batch, untrack\n  reactive.js  — reactive, toRaw, isReactive, snapshot\n  html.js      — html, each\n  css.js       — css, keyframes, globalCss, cx\n  router.js    — createRouter, navigate, navLink, currentPath, routeParams\n  index.js     — re-exports everything","bash")}

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
    ${Vr({source:Wr,label:"Counter component with TypeScript types"})}
    ${Kr('import { signal } from "vanillakit";\nimport type { Signal, ReadonlySignal } from "vanillakit/signal.js";\n\nconst count: Signal<number> = signal(0);',"typescript")}

    <p>
      If you're writing <code>.ts</code> files, make sure your
      <code>tsconfig.json</code> has
      <code>"moduleResolution": "bundler"</code> and
      <code>"allowImportingTsExtensions": true</code> (already the default with
      Vite).
    </p>
    ${Kr('{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "allowJs": true,\n    "checkJs": true,\n    "noEmit": true,\n    "allowImportingTsExtensions": true,\n    "strict": true,\n    "lib": ["ESNext", "DOM", "DOM.Iterable"]\n  }\n}',"javascript")}

    <h3>HMR with Vite</h3>
    <p>A minimal <code>vite.config.js</code>:</p>
    ${Kr('import { defineConfig } from "vite";\n\nexport default defineConfig({\n  root: "demo",\n  base: "./",\n});')}

    <h3>Production builds</h3>
    <p>
      <code>vite build</code> produces a single minified JS bundle. The entire
      library plus this full demo app compiles to ~25 KB gzipped.
    </p>
    ${Kr("npx vite build\n# output in dist/ (or wherever outDir points)","bash")}
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
      Call <code>initVanillaCss()</code> once at app startup. It injects the CSS
      into the page via an adopted stylesheet.
    </p>
    ${Kr('import { initVanillaCss, themeToggle } from "vanillakit";\nimport { html } from "vanillakit";\n\ninitVanillaCss();  // inject VanillaCSS\n\n// Optional: reactive dark/light toggle\nconst { theme, toggle } = themeToggle();\n\ndocument.body.append(html`\n  <button onclick=${toggle}>\n    ${() => theme() === "dark" ? "☀️ Light" : "🌙 Dark"}\n  </button>\n`);',"typescript")}

    <h3>Standalone — no JavaScript required</h3>
    <p>
      Copy <code>src/vanillacss/</code> to your project and link
      <code>vanilla.css</code>. The entire framework is plain CSS — no build
      step, no JavaScript dependency.
    </p>
    ${Kr('<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./vanillacss/vanilla.css" />\n  </head>\n  <body>\n    <header>\n      <a href="/">MySite</a>\n      <nav>\n        <a href="/about">About</a>\n        <a href="/blog">Blog</a>\n      </nav>\n    </header>\n    <main>\n      <h1>Hello</h1>\n      <p>Styled automatically — no class names needed.</p>\n      <button data-color-variant="primary">Get started</button>\n    </main>\n  </body>\n</html>',"markup")}

    <p>Or import in your own CSS:</p>
    ${Kr('/* styles.css */\n@import "./vanillacss/vanilla.css";\n\n/* Your styles here — unlayered rules always beat @layer rules */\n:root {\n  --vk-color-accent: hsl(220 80% 60%);  /* swap to blue */\n}',"css")}

    <h3>Layer architecture</h3>
    <p>
      Every VanillaCSS rule lives inside a named <code>@layer</code> sub-layer.
      Your own styles — even ones with low specificity — automatically override
      VanillaCSS because unlayered declarations beat layered ones at equal
      specificity. No <code>!important</code>, no specificity fights.
    </p>
    ${Kr("/* Sub-layer cascade order — lowest to highest priority */\n@layer vanillacss.reset,       /* minireset.css foundation      */\n       vanillacss.tokens,      /* custom properties & theme     */\n       vanillacss.base,        /* html, body, img, input reset  */\n       vanillacss.typography,  /* headings, links, lists, code  */\n       vanillacss.layout,      /* main, header, cards, grid     */\n       vanillacss.nav,         /* nav, breadcrumb, pagination   */\n       vanillacss.buttons,     /* buttons, hover effects        */\n       vanillacss.forms,       /* inputs, checkbox, switch      */\n       vanillacss.feedback,    /* alerts, progress, toast       */\n       vanillacss.data,        /* tables, tags, avatars         */\n       vanillacss.components,  /* dialog, tabs, accordion       */\n       vanillacss.utilities;   /* badges, sr-only, keyframes    */","css")}

    <p>Override any individual layer precisely:</p>
    ${Kr("/* Any selector outside a @layer beats everything inside one */\n:root {\n  --vk-color-accent: hsl(220 80% 60%);\n}\n\n/* Or target a specific sub-layer */\n@layer vanillacss.typography {\n  h1 { letter-spacing: -0.05em; }\n}","css")}
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
    ${Kr('@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    --vk-color-bg:      hsl(var(--vk-gray-9));\n    --vk-color-surface: hsl(var(--vk-gray-8));\n    --vk-color-text:    hsl(var(--vk-gray-0));\n    color-scheme: dark;\n  }\n}',"css")}

    <h3>Manual override</h3>
    <p>
      Force a specific theme by setting <code>data-theme</code> on
      <code>&lt;html&gt;</code> or any ancestor element. This overrides the
      system preference.
    </p>
    ${Kr('\x3c!-- Force dark --\x3e\n<html data-theme="dark">\n\n\x3c!-- Force light --\x3e\n<html data-theme="light">\n\n\x3c!-- Scope dark to a specific section --\x3e\n<div data-theme="dark">\n  <article data-card>Always dark card</article>\n</div>',"markup")}

    <h3>themeToggle() — with vanillakit</h3>
    <p>
      <code>themeToggle()</code> returns a reactive signal bound to
      <code>document.documentElement.dataset.theme</code>. It reads from
      <code>localStorage</code> on init, falls back to the system preference,
      and persists every user choice.
    </p>
    ${Kr('import { initVanillaCss, themeToggle } from "vanillakit";\nimport { html } from "vanillakit";\n\ninitVanillaCss();\n\nconst { theme, toggle, set } = themeToggle();\n\n// theme()  → "dark" | "light"   (reactive signal)\n// toggle() → switch dark ↔ light, persist to localStorage\n// set()    → explicit control\n\nconst btn = html`\n  <button onclick=${toggle}>\n    ${() => theme() === "dark" ? "☀️ Switch to light" : "🌙 Switch to dark"}\n  </button>\n`;\n\n// Explicit control\nset("dark");   // force dark — saved to localStorage\nset("light");  // force light — saved to localStorage\nset("auto");   // follow system — clears localStorage',"typescript")}

    <h3>Customizing the accent color</h3>
    <p>
      Override <code>--vk-color-accent</code> and
      <code>--vk-color-accent-dim</code> to rebrand the framework to any color.
      Add it to your own stylesheet — unlayered declarations beat
      <code>@layer vanillacss.tokens</code> at equal specificity.
    </p>
    ${Kr("/* styles.css — swap gold accent for indigo */\n:root {\n  --vk-color-accent:     hsl(240 60% 60%);\n  --vk-color-accent-dim: hsl(240 60% 60% / 0.15);\n}","css")}

    <p>For separate light and dark accents:</p>
    ${Kr('/* Light mode accent */\n:root {\n  --vk-color-accent:     hsl(240 60% 55%);\n  --vk-color-accent-dim: hsl(240 60% 55% / 0.12);\n}\n\n/* Dark mode accent */\n[data-theme="dark"],\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    --vk-color-accent:     hsl(240 80% 70%);\n    --vk-color-accent-dim: hsl(240 80% 70% / 0.18);\n  }\n}',"css")}

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
          <td><code>[data-layout="sidebar"]</code> first column width</td>
        </tr>
      </tbody>
    </table>

    ${Kr("/* Tighten transitions, widen container, adjust rem base */\n:root {\n  --vk-transition-speed: 0.1s;\n  --vk-container-max-width: 80rem;\n  --vk-font-size-root: 112.5%;  /* 18px base → scales all rem values */\n}","css")}
  </section>`},"vanillacss-components":function(){return y`<section>
    <h2>Components</h2>
    <p>
      VanillaCSS styles native HTML elements and ARIA patterns automatically.
      Each example is fully editable — try changing the code!
    </p>

    <!-- ── TYPOGRAPHY ───────────────────────────────── -->
    <h3>Typography</h3>
    <p>Headings, body text, and inline elements are styled out of the box.</p>

    ${Vr({source:"document.body.append(html`\n  <div>\n    <h1>Heading 1</h1>\n    <h2>Heading 2</h2>\n    <h3>Heading 3</h3>\n    <h4>Heading 4</h4>\n    <h5>Heading 5</h5>\n    <h6>Heading 6</h6>\n  </div>\n`);"})}
    ${Vr({source:'document.body.append(html`\n  <div>\n    <p>\n      A paragraph with <strong>bold</strong>, <em>italic</em>,\n      <small>small</small>, <mark>highlighted</mark>,\n      <code>inline code</code>, <kbd>Ctrl+K</kbd>,\n      and <a href="#">a link</a>.\n    </p>\n    <blockquote>A blockquote for pull quotes and callouts.</blockquote>\n  </div>\n`);'})}
    ${Vr({source:"document.body.append(html`\n  <div>\n    <ul>\n      <li>Unordered item one</li>\n      <li>Unordered item two</li>\n      <li>Unordered item three</li>\n    </ul>\n    <ol>\n      <li>Ordered item one</li>\n      <li>Ordered item two</li>\n      <li>Ordered item three</li>\n    </ol>\n  </div>\n`);"})}
    ${Vr({source:'document.body.append(html`\n  <pre><code>const greeting = "Hello, world!";\nconsole.log(greeting);\n// → Hello, world!</code></pre>\n`);'})}

    <!-- ── BUTTONS ───────────────────────────────────── -->
    <h3>Buttons</h3>
    <p>
      Use <code>data-color-variant</code> for semantic color,
      <code>data-style-variant</code> for hollow styles,
      <code>data-size</code> for scale.
    </p>

    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button>Default</button>\n    <button data-color-variant="primary">Primary</button>\n    <button data-color-variant="danger">Danger</button>\n    <button data-color-variant="success">Success</button>\n    <button data-color-variant="warning">Warning</button>\n    <button data-color-variant="info">Info</button>\n  </div>\n`);',label:"Color variants"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:.5rem">\n    <button data-size="sm">Small</button>\n    <button>Default</button>\n    <button data-size="lg">Large</button>\n    <button data-size="xl">XL</button>\n  </div>\n`);',label:"Sizes"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-style-variant="ghost">Ghost</button>\n    <button data-style-variant="outline">Outline</button>\n  </div>\n`);',label:"Style variants"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-style-variant="ghost" data-color-variant="primary">Ghost primary</button>\n    <button data-style-variant="ghost" data-color-variant="danger">Ghost danger</button>\n    <button data-style-variant="outline" data-color-variant="primary">Outline primary</button>\n    <button data-style-variant="outline" data-color-variant="danger">Outline danger</button>\n  </div>\n`);',label:"Style + color combos"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-loading>Saving…</button>\n    <button data-color-variant="primary" data-loading>Loading</button>\n  </div>\n`);',label:"Loading state"})}
    ${Vr({source:'document.body.append(html`\n  <div role="group">\n    <button>Left</button>\n    <button aria-pressed="true">Center</button>\n    <button>Right</button>\n  </div>\n`);',label:"Button group"})}

    <p>Hover effects work on any element — cards, images, links, etc.</p>
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-hover="lift">Lift</button>\n    <button data-hover="scale">Scale</button>\n    <button data-hover="glow">Glow</button>\n    <button data-hover="pop">Pop</button>\n    <button data-hover="dim">Dim</button>\n    <button data-hover="bright">Bright</button>\n  </div>\n`);',label:"Hover effects"})}

    <!-- ── FORMS ─────────────────────────────────────── -->
    <h3>Forms</h3>
    <p>
      All form controls are full-width by default. Wrap in a
      <code>&lt;label&gt;</code> for accessible pairing.
    </p>

    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.75rem;max-width:400px">\n    <label>Username<input type="text" placeholder="Enter username" /></label>\n    <label>Email<input type="email" placeholder="you@example.com" /></label>\n    <label>Bio<textarea placeholder="Tell us about yourself"></textarea></label>\n    <label>Country\n      <select>\n        <option>United States</option>\n        <option>Canada</option>\n        <option>United Kingdom</option>\n      </select>\n    </label>\n  </div>\n`);',label:"Text inputs"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <input type="text" data-size="sm" placeholder="Small input" />\n    <input type="text" placeholder="Default input" />\n    <input type="text" data-size="lg" placeholder="Large input" />\n  </div>\n`);',label:"Input sizes"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <label><input type="checkbox" checked /> Remember me</label>\n    <label><input type="checkbox" /> Subscribe to newsletter</label>\n    <label><input type="radio" name="plan" checked /> Free</label>\n    <label><input type="radio" name="plan" /> Pro</label>\n  </div>\n`);',label:"Checkboxes & radios"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <label><input type="checkbox" role="switch" checked /> Enable notifications</label>\n    <label><input type="checkbox" role="switch" /> Dark mode</label>\n    <label>Volume<input type="range" min="0" max="100" value="60" /></label>\n  </div>\n`);',label:"Switches & ranges"})}
    ${Vr({source:'document.body.append(html`\n  <fieldset style="max-width:400px">\n    <legend>Preferences</legend>\n    <label><input type="checkbox" checked /> Email notifications</label>\n    <label><input type="checkbox" /> Weekly digest</label>\n  </fieldset>\n`);',label:"Fieldset"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <label>\n      Email (invalid)\n      <input type="email" aria-invalid="true" value="not-an-email" />\n    </label>\n    <label>\n      Username (disabled)\n      <input type="text" disabled value="admin" />\n    </label>\n  </div>\n`);',label:"Validation states"})}

    <!-- ── CARDS ─────────────────────────────────────── -->
    <h3>Cards</h3>
    <p>
      <code>article[data-card]</code> creates card layout. Add a
      <code>&lt;header&gt;</code> or <code>&lt;footer&gt;</code> for structured
      cards.
    </p>

    ${Vr({source:'document.body.append(html`\n  <article data-card style="max-width:280px">\n    <h4>Simple card</h4>\n    <p>Card content with some descriptive text goes here.</p>\n    <button data-color-variant="primary">Action</button>\n  </article>\n`);'})}
    ${Vr({source:'document.body.append(html`\n  <article data-card style="max-width:320px">\n    <header><h5>Card with header &amp; footer</h5></header>\n    <p>Content area of the card. Padding is applied automatically.</p>\n    <footer>\n      <button data-style-variant="ghost">Cancel</button>\n      <button data-color-variant="primary">Save</button>\n    </footer>\n  </article>\n`);'})}

    <p>Use a <code>&lt;dl&gt;</code> inside a card for stat displays:</p>
    ${Vr({source:'document.body.append(html`\n  <div data-grid style="max-width:420px">\n    <article data-card><dl><dt>Users</dt><dd>12,048</dd></dl></article>\n    <article data-card><dl><dt>Revenue</dt><dd>$4,200</dd></dl></article>\n  </div>\n`);',label:"Stat cards"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;gap:1rem;flex-wrap:wrap">\n    <article data-card data-hover="lift" style="padding:1rem;min-width:140px">\n      <h6>Lift</h6><p>Hover me</p>\n    </article>\n    <article data-card data-hover="glow" style="padding:1rem;min-width:140px">\n      <h6>Glow</h6><p>Hover me</p>\n    </article>\n    <article data-card data-hover="scale" style="padding:1rem;min-width:140px">\n      <h6>Scale</h6><p>Hover me</p>\n    </article>\n  </div>\n`);',label:"Card hover effects"})}

    <!-- ── LAYOUT ────────────────────────────────────── -->
    <h3>Layout</h3>

    ${Vr({source:'document.body.append(html`\n  <div data-grid>\n    <article data-card style="padding:1rem"><p>Column 1</p></article>\n    <article data-card style="padding:1rem"><p>Column 2</p></article>\n    <article data-card style="padding:1rem"><p>Column 3</p></article>\n  </div>\n`);',label:"Auto grid"})}
    ${Vr({source:'document.body.append(html`\n  <div data-grid data-cols="2">\n    <article data-card style="padding:1rem"><p>Col A</p></article>\n    <article data-card style="padding:1rem"><p>Col B</p></article>\n  </div>\n`);',label:"2-column grid"})}
    ${Vr({source:'document.body.append(html`\n  <div data-layout="sidebar" style="min-height:100px">\n    <aside style="background:var(--vk-color-surface-2);padding:1rem"><p>Sidebar</p></aside>\n    <main style="background:var(--vk-color-surface);padding:1rem"><p>Main content</p></main>\n  </div>\n`);',label:"Sidebar layout"})}

    <!-- ── NAVIGATION ────────────────────────────────── -->
    <h3>Navigation</h3>

    ${Vr({source:'document.body.append(html`\n  <nav>\n    <a href="#" aria-current="page">Home</a>\n    <a href="#">Docs</a>\n    <a href="#">Examples</a>\n    <a href="#">About</a>\n  </nav>\n`);',label:"Nav bar"})}
    ${Vr({source:'document.body.append(html`\n  <nav aria-label="breadcrumb">\n    <ol>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">Docs</a></li>\n      <li><a href="#">VanillaCSS</a></li>\n    </ol>\n  </nav>\n`);',label:"Breadcrumb"})}
    ${Vr({source:'document.body.append(html`\n  <nav aria-label="pagination">\n    <ul>\n      <li><a href="#">‹</a></li>\n      <li><a href="#">1</a></li>\n      <li><a href="#" aria-current="page">2</a></li>\n      <li><a href="#">3</a></li>\n      <li><a href="#">›</a></li>\n    </ul>\n  </nav>\n`);',label:"Pagination"})}

    <!-- ── ALERTS & FEEDBACK ─────────────────────────── -->
    <h3>Alerts &amp; Feedback</h3>

    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <div role="alert">Default — informational message</div>\n    <div role="alert" data-color-variant="danger">Danger: something went wrong</div>\n    <div role="alert" data-color-variant="success">Success: changes saved</div>\n    <div role="alert" data-color-variant="warning">Warning: action cannot be undone</div>\n    <div role="alert" data-color-variant="info">Info: a new version is available</div>\n    <div role="alert" data-color-variant="primary">Primary: featured announcement</div>\n  </div>\n`);',label:"Alert variants"})}
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <progress value="35" max="100"></progress>\n    <progress value="70" max="100"></progress>\n  </div>\n`);',label:"Progress bars"})}

    <p>Skeleton loading — apply <code>data-skeleton</code> to any element:</p>
    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <p data-skeleton style="width:60%;height:1em"></p>\n    <p data-skeleton style="width:40%;height:1em"></p>\n    <p data-skeleton style="width:80%;height:1em"></p>\n  </div>\n`);',label:"Skeleton loading"})}

    <!-- ── BADGES & TAGS ─────────────────────────────── -->
    <h3>Badges &amp; Tags</h3>

    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center">\n    <span data-badge>Default</span>\n    <span data-badge data-color-variant="primary">Primary</span>\n    <span data-badge data-color-variant="danger">Danger</span>\n    <span data-badge data-color-variant="success">Success</span>\n    <span data-badge data-color-variant="warning">Warning</span>\n    <span data-badge data-color-variant="info">Info</span>\n  </div>\n`);',label:"Badge variants"})}
    ${Vr({source:"document.body.append(html`\n  <ul data-tags>\n    <li>TypeScript</li>\n    <li>CSS</li>\n    <li>Vanilla JS</li>\n    <li>HTML</li>\n    <li>Progressive enhancement</li>\n  </ul>\n`);",label:"Tags"})}

    <!-- ── TABLES ────────────────────────────────────── -->
    <h3>Tables</h3>

    ${Vr({source:'document.body.append(html`\n  <table>\n    <thead>\n      <tr>\n        <th aria-sort="ascending">Name</th>\n        <th>Role</th>\n        <th>Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Alice Chen</td><td>Engineer</td>\n        <td><span data-badge data-color-variant="success">Active</span></td>\n      </tr>\n      <tr>\n        <td>Bob Smith</td><td>Designer</td>\n        <td><span data-badge data-color-variant="success">Active</span></td>\n      </tr>\n      <tr>\n        <td>Carol White</td><td>Manager</td>\n        <td><span data-badge data-color-variant="warning">Away</span></td>\n      </tr>\n    </tbody>\n  </table>\n`);'})}

    <!-- ── TIMELINE ──────────────────────────────────── -->
    <h3>Timeline</h3>

    ${Vr({source:"document.body.append(html`\n  <ol data-timeline>\n    <li>\n      <strong>Project kickoff</strong>\n      <p>Team assembled, requirements defined</p>\n    </li>\n    <li>\n      <strong>Design phase</strong>\n      <p>Wireframes and prototypes completed</p>\n    </li>\n    <li>\n      <strong>Development</strong>\n      <p>Implementation in progress</p>\n    </li>\n  </ol>\n`);"})}

    <!-- ── TABS ──────────────────────────────────────── -->
    <h3>Tabs</h3>
    <p>
      Styled via <code>role="tablist"</code> and <code>role="tab"</code>. Use
      <code>aria-selected="true"</code> on the active tab.
    </p>

    ${Vr({source:'document.body.append(html`\n  <div>\n    <div role="tablist">\n      <button role="tab" aria-selected="true">Overview</button>\n      <button role="tab" aria-selected="false">API</button>\n      <button role="tab" aria-selected="false">Examples</button>\n    </div>\n    <div role="tabpanel"><p>Active panel content shown here.</p></div>\n  </div>\n`);'})}

    <!-- ── ACCORDION ─────────────────────────────────── -->
    <h3>Accordion</h3>
    <p>
      Uses native <code>&lt;details&gt;</code> — no JavaScript needed. Stack
      adjacently to merge borders automatically.
    </p>

    ${Vr({source:"document.body.append(html`\n  <div>\n    <details>\n      <summary>What is VanillaCSS?</summary>\n      <p>A classless CSS framework that styles semantic HTML without class names.</p>\n    </details>\n    <details open>\n      <summary>How do I customize it?</summary>\n      <p>Override <code>--vk-*</code> custom properties in your own stylesheet.</p>\n    </details>\n    <details>\n      <summary>Does it need JavaScript?</summary>\n      <p>No — CSS-only usage is fully functional.</p>\n    </details>\n  </div>\n`);"})}

    <!-- ── DROPDOWN ──────────────────────────────────── -->
    <h3>Dropdown</h3>
    <p>
      Add <code>data-dropdown</code> to a <code>&lt;details&gt;</code>
      for absolute-positioned menus.
    </p>

    ${Vr({source:'document.body.append(html`\n  <details data-dropdown>\n    <summary><button>Options ▾</button></summary>\n    <ul>\n      <li><a href="javascript:void(0)">Profile</a></li>\n      <li><a href="javascript:void(0)">Settings</a></li>\n      <li><a href="javascript:void(0)">Sign out</a></li>\n    </ul>\n  </details>\n`);'})}

    <!-- ── DIALOG ────────────────────────────────────── -->
    <h3>Dialog</h3>
    <p>
      Styled via the native <code>&lt;dialog&gt;</code> element. Open with
      <code>dialogEl.showModal()</code> for a modal with backdrop, or
      <code>.show()</code> for modeless.
    </p>

    ${Vr({source:'\n  const openDialog = () =>\n    document.querySelector<HTMLDialogElement>("#dialogTest")?.showModal();\n  const closeDialog = () =>\n    document.querySelector<HTMLDialogElement>("#dialogTest")?.close();\n\n  const Dialog = () => html`\n    <dialog id="dialogTest">\n      <header><h4>Confirm delete</h4></header>\n      <p>\n        This will permanently delete the item. This action cannot be undone.\n      </p>\n      <footer>\n        <button data-style-variant="ghost" onclick=${closeDialog}>\n          Cancel\n        </button>\n        <button data-color-variant="danger" onclick=${closeDialog}>\n          Delete\n        </button>\n      </footer>\n    </dialog>\n\n    <button onclick=${openDialog}>Open</button>\n  `;\ndocument.body.append(Dialog());',label:"Modal dialog"})}
    ${Kr('// Open as modal (with backdrop)\nconst dialog = document.querySelector("dialog");\ndialog.showModal();\n\n// Close\ndialog.close();',"javascript")}

    <!-- ── TOOLTIP ───────────────────────────────────── -->
    <h3>Tooltip</h3>
    <p>
      CSS-only tooltips via <code>data-tooltip</code>. Appears above the element
      on hover or focus.
    </p>

    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-tooltip="Copy to clipboard">Copy</button>\n    <button data-tooltip="Open in a new tab" data-color-variant="primary">Open</button>\n    <abbr data-tooltip="HyperText Markup Language">HTML</abbr>\n  </div>\n`);'})}

    <!-- ── POPOVER ───────────────────────────────────── -->
    <h3>Popover</h3>
    <p>
      Styled via the <code>[popover]</code> attribute. Uses the native Popover
      API — no extra JavaScript needed for basic show/hide.
    </p>

    ${Vr({source:'document.body.append(html`\n  <div style="display:flex;gap:.75rem;align-items:center">\n    <button popovertarget="vk-pop-demo" style="anchor-name:--vk-pop-demo">Show tip ▾</button>\n    <div popover id="vk-pop-demo" style="margin:4px 0 0;position:fixed;position-anchor:--vk-pop-demo;top:anchor(bottom);left:anchor(left)">\n      <strong>Quick tip</strong>\n      <p>Use CSS sub-layers to override styles without specificity battles.</p>\n    </div>\n    <small style="opacity:.6">Click the button to open</small>\n  </div>\n`);',label:"Popover"})}
  </section>`},"vanillacss-tokens":function(){return y`<section>
    <h2>Token Reference</h2>
    <p>
      All <code>--vk-*</code> custom properties. Override any token in your own
      stylesheet — unlayered declarations automatically beat
      <code>@layer vanillacss.tokens</code>.
    </p>
    ${Kr(":root {\n  --vk-color-accent: hsl(220 80% 60%);  /* override a single token */\n}","css")}

    <h3>Palette</h3>
    <p>
      Raw HSL channels — use with <code>hsl(var(--vk-*)).</code> This lets you
      apply arbitrary opacity: <code>hsl(var(--vk-gold) / 0.5)</code>.
    </p>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Value</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        ${ws("--vk-gray-0","36 10% 98%","Near-white warm gray")}
        ${ws("--vk-gray-1","36 8% 94%","Light surface")}
        ${ws("--vk-gray-2","240 6% 85%","Borders (light)")}
        ${ws("--vk-gray-3","240 4% 70%","Muted surface")}
        ${ws("--vk-gray-4","255 2% 55%","Muted text")}
        ${ws("--vk-gray-5","240 4% 35%","Mid gray")}
        ${ws("--vk-gray-6","240 8% 22%","Dark surface")}
        ${ws("--vk-gray-7","240 8% 14%","Deeper surface")}
        ${ws("--vk-gray-8","240 8% 10%","Near-black (body text, light)")}
        ${ws("--vk-gray-9","240 8% 5%","True dark background")}
        ${ws("--vk-gold","47 78% 59%","Default accent hue")}
        ${ws("--vk-green","151 76% 62%","Success hue")}
        ${ws("--vk-yellow","45 90% 58%","Warning hue")}
        ${ws("--vk-red","0 76% 62%","Danger hue")}
        ${ws("--vk-blue","225 76% 62%","Info hue")}
        ${ws("--vk-purple","270 60% 62%","Purple hue")}
      </tbody>
    </table>

    <h3>Semantic colors</h3>
    <p>
      These are the values you should override for theming. They are aliased
      from the palette and switch automatically between dark and light mode.
    </p>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Light default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${ws("--vk-color-bg","hsl(--vk-gray-0)","Page background")}
        ${ws("--vk-color-surface","hsl(--vk-gray-1)","Card / panel background")}
        ${ws("--vk-color-surface-2","hsl(--vk-gray-2)","Nested surface, code block bg")}
        ${ws("--vk-color-surface-3","hsl(--vk-gray-3)","kbd, switch track, deep nested")}
        ${ws("--vk-color-border","hsl(--vk-gray-2)","All borders")}
        ${ws("--vk-color-text","hsl(--vk-gray-8)","Body text")}
        ${ws("--vk-color-text-muted","hsl(--vk-gray-4)","Subtext, placeholders, labels")}
        ${ws("--vk-color-link","hsl(--vk-gold)","Link color (alias of accent)")}
        ${ws("--vk-color-accent","hsl(--vk-gold)","Primary accent — links, active states, focus rings")}
        ${ws("--vk-color-accent-dim","hsl(--vk-gold / 0.18)","Accent tint for backgrounds")}
        ${ws("--vk-color-danger","hsl(--vk-red)","Error / destructive")}
        ${ws("--vk-color-danger-dim","hsl(--vk-red / 0.12)","Danger tint")}
        ${ws("--vk-color-success","hsl(--vk-green)","Positive / confirmed")}
        ${ws("--vk-color-success-dim","hsl(--vk-green / 0.12)","Success tint")}
        ${ws("--vk-color-warning","hsl(--vk-yellow)","Caution / in-progress")}
        ${ws("--vk-color-warning-dim","hsl(--vk-yellow / 0.12)","Warning tint")}
        ${ws("--vk-color-info","hsl(--vk-blue)","Neutral informational")}
        ${ws("--vk-color-info-dim","hsl(--vk-blue / 0.12)","Info tint")}
      </tbody>
    </table>

    <h3>Typography</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${ws("--vk-font-body","system-ui, -apple-system, 'Segoe UI', sans-serif","Body font stack")}
        ${ws("--vk-font-mono","ui-monospace, 'Cascadia Code', 'Fira Code', monospace","Code / mono font stack")}
        ${ws("--vk-font-size-sm","0.875rem","Small text, labels, nav")}
        ${ws("--vk-font-size-base","1rem","Body text")}
        ${ws("--vk-font-size-lg","1.125rem","Large text, hero subtitle")}
        ${ws("--vk-font-size-xl","1.25rem","h4")}
        ${ws("--vk-font-size-2xl","1.5rem","h3")}
        ${ws("--vk-font-size-3xl","2rem","h2, card stat dd")}
        ${ws("--vk-font-size-4xl","2.5rem","h1")}
        ${ws("--vk-line-height","1.6","Body line height")}
        ${ws("--vk-line-height-tight","1.2","Heading line height")}
      </tbody>
    </table>

    <h3>Spacing</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${ws("--vk-space-xs","0.25rem","Tight gaps, marker margins")}
        ${ws("--vk-space-sm","0.5rem","Component inner padding")}
        ${ws("--vk-space-md","1rem","Standard spacing, paragraph margin")}
        ${ws("--vk-space-lg","1.5rem","Section padding, card padding")}
        ${ws("--vk-space-xl","2.5rem","Section margin, header block")}
        ${ws("--vk-space-2xl","4rem","Hero padding, top-level gaps")}
      </tbody>
    </table>

    <h3>Radii</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${ws("--vk-radius-sm","4px","Tags, badges, marks, kbd, small inputs")}
        ${ws("--vk-radius-md","8px","Buttons, inputs, cards, dialogs")}
        ${ws("--vk-radius-lg","12px","Dialog, large surfaces")}
        ${ws("--vk-radius-full","9999px","Pill buttons, switches, avatars, progress")}
      </tbody>
    </table>

    <h3>Shadows</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${ws("--vk-shadow-sm","0 1px 3px hsl(0 0% 0% / 0.08)","Subtle elevation — range thumb")}
        ${ws("--vk-shadow-md","0 4px 12px hsl(0 0% 0% / 0.1)","Dropdowns, popovers, lifted cards")}
        ${ws("--vk-shadow-lg","0 8px 30px hsl(0 0% 0% / 0.12)","Dialogs, toasts")}
      </tbody>
    </table>

    <h3>Easing</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${ws("--vk-ease-default","cubic-bezier(0.4, 0, 0.2, 1)","Standard motion — all transitions")}
        ${ws("--vk-ease-bounce","cubic-bezier(0.34, 1.56, 0.64, 1)","Playful entrance — available for custom use")}
      </tbody>
    </table>

    <h3>Z-index scale</h3>
    <table>
      <thead>
        <tr>
          <th>Variable</th>
          <th>Default</th>
          <th>Usage</th>
        </tr>
      </thead>
      <tbody>
        ${ws("--vk-z-dropdown","100","Dropdown menus, tooltips")}
        ${ws("--vk-z-sticky","200","Sticky headers, floating elements")}
        ${ws("--vk-z-modal","300","Modals, overlays")}
        ${ws("--vk-z-toast","400","Toast notifications — always on top")}
      </tbody>
    </table>

    <h3>Config</h3>
    <p>
      Config variables propagate globally — changing one updates every component
      that uses it.
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
        ${ws("--vk-font-size-root","100%","font-size on <html> — scales all rem values across the page")}
        ${ws("--vk-transition-speed","0.15s","All hover, focus, and color transitions")}
        ${ws("--vk-transition-speed-slow","0.2s","Switch toggle slide, progress bar fill, accordion icon rotation")}
        ${ws("--vk-animation-speed","0.2s","Dialog and overlay entrance keyframe duration")}
        ${ws("--vk-container-max-width","72rem","<main> max-width")}
        ${ws("--vk-sidebar-width","200px",'[data-layout="sidebar"] first column width')}
      </tbody>
    </table>
  </section>`},components:function(){return y`<section>
    <h2>Components</h2>
    <p>
      There's no special component API. A component is just a function that
      returns a DOM node. Call it, get a node, append it wherever you want.
    </p>

    ${Vr({source:Wr,label:"Counter component"})}

    <h3>Passing data (props)</h3>
    <p>
      Props are just function arguments. Pass signals for reactive data, or
      plain values for static data.
    </p>

    ${Vr({source:'\nimport { html, css, type VanillaElement } from "vanillakit";\n\ninterface UserComponentProps {\n  name: string;\n  role: string;\n}\n\nconst UserComponent = ({ name, role }: UserComponentProps): VanillaElement => {\n  return html`\n    <article>\n      <h3 style="margin:0 0 4px; font-size:0.95rem;">${name}</h3>\n      <p>${role}</p>\n    </article>\n  `;\n}\n\ndocument.body.append(html`\n  <div style="display:flex; gap: 1rem; flex-wrap:wrap;">\n    ${UserComponent({ name: "Ada", role: "Engineer" })}\n    ${UserComponent({ name: "Grace", role: "Admiral" })}\n    ${UserComponent({ name: "Alan", role: "Mathematician" })}\n  </div>\n`);',label:"UserCard component"})}

    <h3>Reactive props</h3>
    <p>
      Pass signals as props for reactive data flow. The child component updates
      automatically when the parent signal changes — no re-rendering, no prop
      diffing.
    </p>

    ${Vr({source:'\nimport { signal, html } from "vanillakit";\n\nconst Greeting = ({ name, color }) => {\n  return html`\n    <p style=${() => `color: ${color()};`}>\n      Hello, ${name}!\n    </p>\n  `;\n}\n\nconst userName = signal("Ada");\nconst userColor = signal("#e8c547");\n\ndocument.body.append(html`\n  <div>\n    ${Greeting({ name: userName, color: userColor })}\n    <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">\n      <input value=${userName} oninput=${(e) => userName(e.target.value)}\n        placeholder="Name" style="max-width:200px;" />\n      <input type="color" value=${userColor} oninput=${(e) => userColor(e.target.value)}\n        style="width:40px; height:34px; border:none; cursor:pointer;" />\n    </div>\n  </div>\n`);\n',label:"Reactive props — type a name or pick a color"})}

    <h3>Children / composition</h3>
    <p>
      Since components return DOM nodes, compose them by nesting in
      <code>html\`\`</code>:
    </p>

    ${Vr({source:'\nimport { html } from "vanillakit";\n\nconst ChildComponent = () => html`<p>This is a child component.</p>`;\n\ndocument.body.append(html`\n  <div>\n    <h1>Parent Component</h1>\n    ${ChildComponent()}\n  </div>\n`);\n',label:"Layout component with children"})}

    <p>Or pass children as arguments:</p>

    ${Vr({source:'\nimport { html, css } from "vanillakit";\n\nconst Layout = (title, ...children) => {\n  return html`\n    <div class=${css`max-width: 800px; margin: 0 auto; padding: 24px;`}>\n      <h1>${title}</h1>\n      ${children}\n    </div>\n  `;\n}\n\nconst Child1 = () => html`<p>This is the first child component.</p>`;\nconst Child2 = () => html`<p>This is the second child component.</p>`;\n\nconst App = () => {\n  return Layout("My App",\n    Child1(),\n    Child2(),\n    html`<p>This is a child passed directly as an argument.</p>`\n  );\n}\n\ndocument.body.append(App());\n',label:"Direct children via arguments"})}
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
    ${Kr('import { signal, effect } from "vanillakit";\n\nconst count = signal(0);\n\n// Reading inside an effect creates a subscription\neffect(() => {\n  console.log("count is", count());\n});\n\ncount(1);          // effect re-runs → "count is 1"\ncount(n => n + 1); // effect re-runs → "count is 2"')} ${Vr({source:'import { signal, effect, html, css, cx } from "vanillakit";\n\nconst count = signal(0);\nconst log = signal([]);\n\neffect(() => {\n  const v = count();\n  log(l => [...l.slice(-4), `count is ${v}`]);\n});\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n      <button onclick=${() => count(0)}>Reset</button>\n      <span style="font-family:monospace;">count = ${count}</span>\n    </div>\n    <div style="font-family:monospace; font-size:0.8rem; color:gray; line-height:1.6;">\n      ${() => log().map(l => html`<div>→ ${l}</div>`)}\n    </div>\n  </div>\n`);',label:"Signal — click to update, watch the effect log"})}

    <h3>Computed values</h3>
    <p>
      <code>computed</code> derives a read-only signal from others. It only
      recalculates when its dependencies change.
    </p>
    ${Kr('import { signal, computed } from "vanillakit";\n\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ntotal(); // 30\nqty(5);\ntotal(); // 50')} ${Vr({source:'import { signal, computed, html } from "vanillakit";\n\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label>Price:\n      <input type="number" value=${() => price()}\n        oninput=${(e) => price(+e.target.value)} style="width:80px;" />\n    </label>\n    <label>Qty:\n      <input type="number" value=${() => qty()}\n        oninput=${(e) => qty(+e.target.value)} style="width:80px;" />\n    </label>\n    <span style="font-weight:700;">Total: $${total}</span>\n  </div>\n`);',label:"Computed — derived value updates automatically"})}

    <h3>Batching</h3>
    <p>
      Multiple signal writes inside <code>batch()</code> are grouped — effects
      run once at the end, not after each write.
    </p>
    ${Kr('import { signal, effect, batch } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + b()));\n// logs: 3\n\nbatch(() => { a(10); b(20); });\n// logs: 30 (once, not twice)')} ${Vr({source:'import { signal, computed, batch, html } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\nconst runCount = signal(0);\nconst sum = computed(() => { runCount(n => n + 1); return a() + b(); });\n\ndocument.body.append(html`\n  <div>\n    <div style="margin-bottom:10px; font-family:monospace;">\n      a=${a} b=${b} sum=${sum} (computed ran ${runCount}×)\n    </div>\n    <button onclick=${() => { a(n => n + 1); b(n => n + 1); }}>\n      a++ b++ (no batch, 2 runs)\n    </button>\n    <button onclick=${() => batch(() => { a(n => n + 1); b(n => n + 1); })}>\n      a++ b++ (batched, 1 run)\n    </button>\n    <button onclick=${() => { a(1); b(2); runCount(0); }}>Reset</button>\n  </div>\n`);',label:"Batch — grouped writes, single recomputation"})}

    <h3>Reactive proxies</h3>
    <p>
      For complex state, <code>reactive()</code> wraps objects in deep proxies.
      Mutate normally — changes propagate automatically.
    </p>
    ${Kr('import { reactive, effect, snapshot } from "vanillakit";\n\nconst state = reactive({\n  user: { name: "Ada", scores: [95, 87] },\n});\n\neffect(() => console.log(state.user.name));\n// logs: "Ada"\n\nstate.user.name = "Grace";\n// logs: "Grace"\n\nstate.user.scores.push(92); // also tracked')}

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
    ${Kr('import { signal, html } from "vanillakit";\n\nconst users = signal([]);\nconst loading = signal(true);\nconst error = signal(null);\n\nfetch("/api/users")\n  .then(r => r.json())\n  .then(data => { users(data); loading(false); })\n  .catch(err => { error(err.message); loading(false); });\n\ndocument.body.append(html`\n  <div>\n    ${() => {\n      if (loading()) return html`<p>Loading...</p>`;\n      if (error()) return html`<p style="color:red">${error()}</p>`;\n      return html`<ul>${() => users().map(u => html`<li>${u.name}</li>`)}</ul>`;\n    }}\n  </div>\n`);')}

    <h3>Reusable fetch helper</h3>
    <p>
      Wrap fetch logic in a function that returns signals — the vanillakit
      equivalent of a custom hook.
    </p>
    ${Kr('function useFetch(url) {\n  const data = signal(null);\n  const loading = signal(true);\n  const error = signal(null);\n\n  fetch(url)\n    .then(r => r.json())\n    .then(d => { data(d); loading(false); })\n    .catch(e => { error(e.message); loading(false); });\n\n  return { data, loading, error };\n}\n\n// Use it anywhere\nconst { data: todos, loading } = useFetch("/api/todos");\n\ndocument.body.append(html`\n  <div>\n    ${() => loading()\n      ? html`<p>Loading...</p>`\n      : html`<ul>\n          ${() => todos().map(t => html`<li>${t.text}</li>`)}\n        </ul>`\n    }\n  </div>\n`);')}

    <h3>Reactive refetch</h3>
    <p>Use <code>effect</code> to refetch when a signal changes:</p>
    ${Kr('import { signal, effect } from "vanillakit";\n\nconst page = signal(1);\nconst items = signal([]);\n\neffect(() => {\n  const p = page();\n  fetch(`/api/items?page=${p}`)\n    .then(r => r.json())\n    .then(data => items(data));\n});\n\n// Changing page triggers a refetch\npage(2);')}
  </section>`},conditional:function(){return y`<section>
    <h2>Conditional Rendering</h2>
    <p>
      In <code>html\`\`</code>, use a function that returns different nodes (or
      <code>null</code>) based on signal values. The DOM updates surgically when
      conditions change.
    </p>

    <h3>Show / hide</h3>
    ${Vr({source:'import { signal, html } from "vanillakit";\n\nconst loggedIn = signal(false);\n\ndocument.body.append(html`\n  <div>\n    ${() => loggedIn()\n      ? html`<div style="display:flex; align-items:center; gap:12px;">\n          <span style="color:gold; font-weight:600;">Welcome back!</span>\n          <button onclick=${() => loggedIn(false)}>Log out</button>\n        </div>`\n      : html`<button onclick=${() => loggedIn(true)}>Log in</button>`\n    }\n  </div>\n`);',label:"Show/hide — toggle login state"})}

    <h3>Multiple conditions</h3>
    ${Vr({source:'import { signal, html } from "vanillakit";\n\nconst status = signal("idle"); // "idle" | "loading" | "error" | "done"\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; margin-bottom:12px;">\n      <button onclick=${() => status("idle")}>Idle</button>\n      <button onclick=${() => status("loading")}>Loading</button>\n      <button onclick=${() => status("error")}>Error</button>\n      <button onclick=${() => status("done")}>Done</button>\n    </div>\n    <div style="font-size:1rem; font-weight:600;">\n      ${() => {\n        switch (status()) {\n          case "loading": return html`<span>Loading...</span>`;\n          case "error":   return html`<span style="color:red;">Error!</span>`;\n          case "done":    return html`<span style="color:green;">Done ✓</span>`;\n          default:        return html`<span>Ready.</span>`;\n        }\n      }}\n    </div>\n  </div>\n`);',label:"Switch — click buttons to change status"})}

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
    ${Vr({source:'import { signal, each, html, css } from "vanillakit";\n\nlet nextId = 4;\nconst items = signal([\n  { id: 1, label: "Alpha" },\n  { id: 2, label: "Bravo" },\n  { id: 3, label: "Charlie" },\n]);\n\nconst itemStyle = css`\n  display: flex; align-items: center; gap: 8px;\n  padding: 6px 10px; border-radius: 6px;\n  background: var(--vk-color-bg); border: 1px solid var(--vk-color-border);\n  font-size: 0.85rem; font-family: monospace;\n`;\n\nconst names = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"];\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; margin-bottom:12px;">\n      <button onclick=${() => items(l =>\n        [...l, { id: nextId++, label: names[(nextId - 5) % names.length] }]\n      )}>Add item</button>\n      <button onclick=${() => items(l => [...l].reverse())}>Reverse</button>\n      <button onclick=${() => items(l => l.slice(0, -1))}>Remove last</button>\n    </div>\n    <div style="display:flex; flex-direction:column; gap:6px;">\n      ${each(items, i => i.id, (itemSig, indexSig) =>\n        html`<div class=${itemStyle}>\n          <span style="color:gray;">#${indexSig}</span>\n          <span>${() => itemSig().label}</span>\n          <button style="margin-left:auto; background:none; border:none; color:gray; cursor:pointer;"\n            onclick=${() => items(l => l.filter(i => i.id !== itemSig().id))}>✕</button>\n        </div>`,\n      )}\n    </div>\n  </div>\n`);',label:"Keyed list — add, remove, reverse"})}

    <h3>Adding, removing, reordering</h3>
    <p>
      Mutate the signal array — <code>each()</code> diffs by key and
      moves/creates/removes DOM nodes efficiently.
    </p>
    ${Kr('// Add\nitems(list => [...list, { id: 4, label: "Delta" }]);\n\n// Remove\nitems(list => list.filter(i => i.id !== 2));\n\n// Reorder (DOM nodes are moved, not recreated)\nitems(list => [...list].reverse());\n\n// Update an item (the itemSig in the render function updates)\nitems(list => list.map(i =>\n  i.id === 1 ? { ...i, label: "Updated" } : i\n));')}

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
    ${Vr({source:'import { signal, html } from "vanillakit";\n\nconst name = signal("");\n\ndocument.body.append(html`\n  <div>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)}\n      placeholder="Your name" style="max-width:240px; margin-bottom:10px;" />\n    <p style="font-size:1rem; font-weight:600;">Hello, ${() => name() || "…"}!</p>\n  </div>\n`);',label:"Two-way binding — type to see it update"})}

    <h3>Checkbox</h3>
    ${Vr({source:'import { signal, html } from "vanillakit";\n\nconst agreed = signal(false);\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">\n      <input type="checkbox" checked=${() => agreed()}\n        onchange=${(e) => agreed(e.target.checked)} />\n      I agree to the terms\n    </label>\n    <button disabled=${() => !agreed()}\n      style=${() => !agreed() ? "opacity:0.4; cursor:not-allowed;" : ""}>\n      Submit\n    </button>\n  </div>\n`);',label:"Checkbox — toggle to enable the button"})}

    <h3>Select</h3>
    ${Vr({source:'import { signal, html } from "vanillakit";\n\nconst color = signal("blue");\nconst colorMap = { red: "#e45", blue: "#48f", green: "#4c8" };\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px;">\n    <select onchange=${(e) => color(e.target.value)}>\n      <option value="red">Red</option>\n      <option value="blue" selected>Blue</option>\n      <option value="green">Green</option>\n    </select>\n    <span style=${() => `font-weight:700; color:${colorMap[color()]};`}>\n      Chosen: ${color}\n    </span>\n  </div>\n`);',label:"Select — pick a color"})}

    <h3>Form submission</h3>
    ${Kr('const form = { name: signal(""), email: signal("") };\n\nhtml`\n  <form onsubmit=${(e) => {\n    e.preventDefault();\n    console.log({ name: form.name(), email: form.email() });\n  }}>\n    <input value=${() => form.name()} oninput=${(e) => form.name(e.target.value)} />\n    <input value=${() => form.email()} oninput=${(e) => form.email(e.target.value)} type="email" />\n    <button type="submit">Submit</button>\n  </form>\n`;')}

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
    ${Vr({source:'import { css, html } from "vanillakit";\n\nconst card = css`\n  padding: 16px; background: var(--vk-color-bg);\n  border: 1px solid var(--vk-color-border); border-radius: 8px;\n  transition: border-color 0.15s ease;\n  &:hover { border-color: var(--vk-color-accent); }\n  & .title { font-weight: 700; color: var(--vk-color-accent); }\n  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }\n`;\n\ndocument.body.append(html`\n  <div class=${card}>\n    <span class="title">Styled card</span>\n    <div class="desc">Hover me — the border changes color.</div>\n  </div>\n`);',label:"Scoped CSS — hover the card"})}

    <h3>Dynamic styles</h3>
    <p>
      For styles that change based on signals, use a reactive
      <code>class</code> attribute or inline <code>style</code>:
    </p>
    ${Kr('import { signal, html, css } from "vanillakit";\n\nconst active = signal(false);\n\nconst base = css`padding: 8px; border-radius: 6px;`;\nconst highlight = css`background: gold; color: #111;`;\n\n// Reactive class\nhtml`<div class=${() => active() ? cx(base, highlight) : base}>Click me</div>`;\n\n// Reactive inline style\nconst size = signal(16);\nhtml`<p style=${() => `font-size: ${size()}px`}>Resizable text</p>`;')} ${Vr({source:'import { signal, html } from "vanillakit";\n\nconst size = signal(16);\n\ndocument.body.append(html`\n  <div>\n    <input type="range" min="10" max="40" value=${() => size()}\n      oninput=${(e) => size(+e.target.value)}\n      style="width:200px; margin-bottom:10px;" />\n    <span style="font-family:monospace; font-size:0.8rem; margin-left:8px;">\n      ${size}px\n    </span>\n    <p style=${() => `font-size: ${size()}px; font-weight: 600; transition: font-size 0.1s;`}>\n      Resizable text\n    </p>\n  </div>\n`);',label:"Dynamic styles — drag the slider"})}

    <h3>Animations</h3>
    ${Kr('import { css, keyframes } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`animation: ${spin} 1s linear infinite;`;')} ${Vr({source:'import { css, keyframes, html } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`\n  display: inline-block; width: 24px; height: 24px;\n  border: 3px solid var(--vk-color-border); border-top-color: var(--vk-color-accent);\n  border-radius: 50%; animation: ${spin} 0.8s linear infinite;\n`;\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:12px;">\n    <div class=${spinner}></div>\n    <span style="font-size:0.85rem; color:gray;">Spinning via keyframes\\`\\`</span>\n  </div>\n`);',label:"Keyframes animation"})}

    <h3>Combining class names</h3>
    <p><code>cx()</code> joins class names, filtering out falsy values:</p>
    ${Kr('import { cx, css } from "vanillakit";\n\nconst base = css`padding: 8px;`;\nconst active = css`color: gold;`;\nconst disabled = false;\n\ncx(base, isActive && active, disabled && "disabled");\n// falsy values are skipped')}

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
      vanillakit includes an SPA router with two modes: <strong>hash</strong>{" "}
      (default, e.g. <code>/#/about</code>) and <strong>history</strong> (clean
      URLs via the History API, e.g. <code>/about</code>). Routes map path
      patterns to functions that return DOM nodes. The router swaps content
      reactively when the location changes.
    </p>

    <h3>Choosing a mode</h3>
    <p>
      Call <code>initRouter</code> once at startup before rendering. Omit it to
      use the default hash mode.
    </p>
    ${Kr('import { initRouter } from "vanillakit";\n\n// Hash mode (default) — no server config needed\ninitRouter({ mode: "hash" });\n\n// History mode — requires the server to serve index.html for all routes\ninitRouter({ mode: "history" });')}

    <h3>Basic setup</h3>
    ${Kr('import { html, createRouter, navLink, css } from "vanillakit";\n\nconst Router = createRouter({\n  "/":      () => html`<h1>Home</h1>`,\n  "/about": () => html`<h1>About</h1>`,\n  "*":      () => html`<h1>404</h1>`,\n});\n\nconst active = css`color: gold;`;\nconst base = css`color: gray;`;\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);')}

    <h3>Route parameters</h3>
    ${Kr('import { createRouter, routeParams, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/user/:id": () => html`\n    <div>\n      <h1>User ${() => routeParams().id}</h1>\n    </div>\n  `,\n});')}

    <h3>Programmatic navigation</h3>
    ${Kr('import { navigate } from "vanillakit";\n\n// Navigate from code\nnavigate("/user/42");\n\n// In a click handler\nhtml`<button onclick=${() => navigate("/settings")}>Settings</button>`;')}

    <h3>vs. React Router / Vue Router</h3>
    <p>
      React Router uses <code>&lt;Route&gt;</code> components and hooks. Vue
      Router uses a plugin and <code>&lt;router-view&gt;</code>. vanillakit's
      router is ~60 lines: a plain object mapping paths to functions. No
      providers, no hooks, no wrapping — just call
      <code>createRouter()</code> and drop the result into the DOM.
    </p>
  </section>`},htmx:function(){const t=i(null),e=i(!1),n=i(0),o=i(!1),s=O`
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
  `,a=O`
    margin-top: 12px;
    padding: 16px;
    background: var(--vk-color-accent-dim);
    border: 1px solid var(--vk-color-accent);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  `,c=O`
    display: inline-block;
    width: 16px;
    height: 16px;
    border: 2px solid var(--vk-color-border);
    border-top-color: var(--vk-color-accent);
    border-radius: 50%;
    animation: ${R`to { transform: rotate(360deg); }`} 0.6s linear infinite;
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
          ${()=>null!==t()||e()?"":'data-variant="primary"'}
          >1. Click load</span
        >
        <span data-badge ${()=>e()?'data-variant="primary"':""}
          >2. Fetching partial</span
        >
        <span
          data-badge
          ${()=>null===t()||e()?"":'data-variant="primary"'}
          >3. HTML swapped</span
        >
        <span
          data-badge
          ${()=>o()?'data-variant="primary"':""}
          >4. Island mounted</span
        >
      </div>

      <button onclick=${function(){e(!0),o(!1),n(0),fetch("./partials/dashboard.html").then(t=>{if(!t.ok)throw new Error(t.statusText);return t.text()}).then(n=>{t(n),e(!1),o(!0)}).catch(()=>{t('<div class="server-row" style="color:#e45;">Failed to fetch partial — build &amp; serve first</div>'),e(!1)})}}>
        ${()=>e()?y`<span class=${c}></span>`:null!==t()?"Reload from server":'hx-get="/partials/dashboard.html"'}
      </button>

      ${(()=>{const e=document.createElement("div");return e.className=s,e.style.display="none",r(()=>{const n=t();null===n?(e.style.display="none",e.innerHTML=""):(e.innerHTML=n,e.style.display="")}),e})()}

      <div style=${()=>o()?"":"display:none;"}>
        <div class=${a}>
          <span
            style="font-size:0.82rem; color:var(--vk-color-accent); font-family:var(--vk-font-mono);"
          >
            vanillakit island →
          </span>
          <button
            data-variant="primary"
            onclick=${()=>n(t=>t+1)}
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
      ${Kr('\x3c!-- partials/dashboard.html --\x3e\n<div class="server-row"><strong>Dashboard</strong> — loaded via htmx</div>\n<div class="server-row">User: <em>Ada Lovelace</em> | Role: Admin</div>\n<div class="server-row">Last login: <span id="login-time"></span></div>\n<div data-vanillakit="counter"></div>\n<script>\n  document.getElementById("login-time").textContent = new Date().toLocaleTimeString();\n<\/script>',"markup")}

      <h3>Setup</h3>
      ${Kr('<!doctype html>\n<html>\n  <head>\n    <script src="https://unpkg.com/htmx.org@2"><\/script>\n  </head>\n  <body>\n    <div hx-get="/partials/dashboard.html" hx-trigger="click" hx-target="#content">\n      Load dashboard\n    </div>\n    <div id="content"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}

      <h3>Reactive islands inside swapped content</h3>
      <p>
        After htmx swaps in HTML, mount vanillakit components on
        <code>[data-vanillakit]</code> elements.
      </p>
      ${Kr('import { signal, html, css } from "vanillakit";\n\nfunction LiveCounter(el) {\n  const count = signal(0);\n  el.replaceChildren(html`\n    <button\n      class=${css`padding: 6px 14px; cursor: pointer;`}\n      onclick=${() => count(n => n + 1)}\n    >\n      Clicked ${count} times\n    </button>\n  `);\n}\n\ndocument.body.addEventListener("htmx:afterSwap", (e) => {\n  e.detail.target\n    .querySelectorAll("[data-vanillakit]")\n    .forEach((el) => {\n      if (el.dataset.vanillakit === "counter") LiveCounter(el);\n    });\n});')}
    </section>
  </section>`},tailwind:function(){const t=i(!1),e=i(!1),n=i("blue"),o={blue:{bg:"#3b82f6",hover:"#2563eb",glow:"rgba(59,130,246,0.5)"},green:{bg:"#22c55e",hover:"#16a34a",glow:"rgba(34,197,94,0.5)"},purple:{bg:"#a855f7",hover:"#9333ea",glow:"rgba(168,85,247,0.5)"},red:{bg:"#ef4444",hover:"#dc2626",glow:"rgba(239,68,68,0.5)"}},r=O`
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

      <div class=${O`
    display: flex;
    gap: 6px;
    margin: 16px 0;
    align-items: center;
  `}>
        <span
          style="font-size:0.82rem; font-family:var(--vk-font-mono); color:var(--vk-color-text-muted);"
          >Theme:</span
        >
        ${Object.entries(o).map(([t,e])=>y`<button
              class=${()=>{return i=t,o=e.bg,O`
    width: 28px;
    height: 28px;
    border-radius: 50%;
    border: 2px solid
      ${n()===i?"var(--vk-color-text)":"transparent"};
    background: ${o};
    cursor: pointer;
    transition: all 0.15s ease;
    &:hover {
      transform: scale(1.15);
    }
  `;var i,o}}
              onclick=${()=>n(t)}
            ></button>`)}
      </div>

      <label class=${r}>
        <input
          type="checkbox"
          checked=${()=>e()}
          onchange=${t=>e(t.target.checked)}
        />
        Glow effect (css\`\` scoped style)
      </label>

      <div style="margin-top:16px; display:flex; gap:8px; flex-wrap:wrap;">
        <button class=${()=>(()=>{const t=o[n()];return O`
      background: ${t.bg};
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
        background: ${t.hover};
        transform: translateY(-1px);
      }
      &:active {
        transform: translateY(0);
      }
    `})()} onclick=${()=>t(t=>!t)}>
          ${()=>t()?"Hide panel":"Show panel"}
        </button>
      </div>

      <div style=${()=>t()?"":"display:none;"}>
        <div class=${()=>(()=>{const t=o[n()];return O`
      margin-top: 12px;
      padding: 16px;
      background: var(--vk-color-surface-2);
      border-radius: 8px;
      border: 1px solid var(--vk-color-border);
      transition: all 0.2s ease;
      ${e()?`box-shadow: 0 0 30px ${t.glow};`:""}
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
      ${Kr('import { signal, html } from "vanillakit";\n\nconst open = signal(false);\n\ndocument.body.append(html`\n  <div class="max-w-md mx-auto p-6">\n    <button\n      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"\n      onclick=${() => open(v => !v)}\n    >\n      Toggle\n    </button>\n    <div class=${() => open()\n      ? "mt-4 p-4 bg-gray-800 rounded border border-gray-700"\n      : "hidden"\n    }>\n      Reactively shown/hidden via signals.\n    </div>\n  </div>\n`);')}

      <h3>Mixing Tailwind + css\`\`</h3>
      <p>
        Use <code>cx()</code> to combine Tailwind utility classes with scoped
        styles.
      </p>
      ${Kr('import { html, css, cx } from "vanillakit";\n\nconst glowEffect = css`\n  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);\n  transition: box-shadow 0.3s ease;\n  &:hover { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }\n`;\n\ndocument.body.append(html`\n  <div class=${cx("p-6 rounded-lg bg-gray-900 border border-gray-700", glowEffect)}>\n    Best of both worlds.\n  </div>\n`);')}

      <h3>Tailwind config</h3>
      ${Kr('// tailwind.config.js\nexport default {\n  content: [\n    "./demo/**/*.{html,ts,js}",\n    "./src/**/*.js",\n  ],\n};')}
    </section>
  </section>`},hono:function(){return y`<section>
    <h2>Hono</h2>
    <p>
      Hono is a fast, lightweight web framework for Bun, Deno, Cloudflare
      Workers, and Node. Serve a vanillakit frontend as static files and use
      Hono for the API layer.
    </p>

    <h3>API server + static frontend</h3>
    ${Kr('// server.ts (Hono on Bun)\nimport { Hono } from "hono";\nimport { serveStatic } from "hono/bun";\nimport { cors } from "hono/cors";\n\nconst app = new Hono();\napp.use("/api/*", cors());\n\napp.get("/api/todos", (c) => {\n  return c.json([\n    { id: 1, text: "Build with vanillakit", done: false },\n    { id: 2, text: "Deploy to edge", done: true },\n  ]);\n});\n\napp.post("/api/todos", async (c) => {\n  const body = await c.req.json();\n  return c.json({ id: Date.now(), ...body }, 201);\n});\n\n// Serve the Vite build as static files\napp.use("/*", serveStatic({ root: "./docs" }));\n\nexport default app;',"typescript")}

    <h3>Fetching data into signals</h3>
    ${Kr('import { signal, html } from "vanillakit";\n\nconst todos = signal([]);\nconst loading = signal(true);\n\nfetch("/api/todos")\n  .then(r => r.json())\n  .then(data => { todos(data); loading(false); });\n\ndocument.body.append(html`\n  <div>\n    ${() => loading()\n      ? html`<p>Loading...</p>`\n      : html`<ul>\n          ${() => todos().map(t => html`<li>${t.text}</li>`)}\n        </ul>`\n    }\n  </div>\n`);')}
  </section>`},fastapi:function(){return y`<section>
    <h2>FastAPI</h2>
    <p>
      FastAPI serves as a Python backend. Build the vanillakit app with Vite,
      then serve the static output from FastAPI or use it purely as a JSON API.
    </p>

    <h3>Project layout</h3>
    ${Kr("project/\n  backend/\n    main.py\n    requirements.txt\n  frontend/\n    demo/\n      index.html\n      app.ts\n    src/        # vanillakit source\n    vite.config.js","bash")}

    <h3>FastAPI backend</h3>
    ${Kr('# backend/main.py\nfrom fastapi import FastAPI\nfrom fastapi.staticfiles import StaticFiles\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import BaseModel\n\napp = FastAPI()\napp.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])\n\nclass Todo(BaseModel):\n    id: int\n    text: str\n    done: bool = False\n\ntodos: list[Todo] = [\n    Todo(id=1, text="Learn vanillakit", done=True),\n    Todo(id=2, text="Build something", done=False),\n]\n\n@app.get("/api/todos")\ndef get_todos():\n    return todos\n\n@app.post("/api/todos")\ndef add_todo(todo: Todo):\n    todos.append(todo)\n    return todo\n\napp.mount("/", StaticFiles(directory="../frontend/docs", html=True))',"python")}

    <h3>Frontend fetching</h3>
    ${Kr('import { signal, html, each } from "vanillakit";\n\nconst todos = signal([]);\n\nasync function loadTodos() {\n  const res = await fetch("/api/todos");\n  todos(await res.json());\n}\n\nasync function addTodo(text) {\n  const res = await fetch("/api/todos", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ id: Date.now(), text, done: false }),\n  });\n  todos(list => [...list, await res.json()]);\n}\n\nloadTodos();\n\nconst input = signal("");\n\ndocument.body.append(html`\n  <div>\n    <input\n      value=${() => input()}\n      oninput=${(e) => input(e.target.value)}\n      onkeydown=${(e) => {\n        if (e.key === "Enter") { addTodo(input()); input(""); }\n      }}\n      placeholder="New todo..."\n    />\n    <ul>\n      ${each(todos, t => t.id,\n        (itemSig) => html`<li>${() => itemSig().text}</li>`\n      )}\n    </ul>\n  </div>\n`);')}
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
    ${Kr('import { signal } from "vanillakit";\n\nconst count = signal(0);\ncount();           // read → 0\ncount(5);          // write → 5\ncount(n => n + 1); // update via function → 6\ncount.peek();      // read without tracking')}

    <h3>computed(fn)</h3>
    <p>
      Derives a read-only signal. Re-evaluates only when dependencies change.
    </p>
    ${Kr('import { signal, computed } from "vanillakit";\n\nconst a = signal(2), b = signal(3);\nconst sum = computed(() => a() + b());\nsum(); // 5\na(10);\nsum(); // 13')}

    <h3>effect(fn)</h3>
    <p>
      Runs a side effect whenever dependencies change. Returns a dispose
      function.
    </p>
    ${Kr('import { signal, effect } from "vanillakit";\n\nconst name = signal("world");\nconst dispose = effect(() => console.log("Hello, " + name() + "!"));\n// logs: Hello, world!\nname("vanillakit");\n// logs: Hello, vanillakit!\ndispose(); // stops tracking')}

    <h3>batch(fn)</h3>
    <p>Groups writes — effects run once at the end.</p>
    ${Kr('import { signal, effect, batch } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + b())); // 3\nbatch(() => { a(10); b(20); });       // 30 (once)')}

    <h3>untrack(fn)</h3>
    <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
    ${Kr('import { signal, effect, untrack } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + untrack(() => b())));\nb(99); // does NOT re-run\na(10); // re-runs, reads b\'s current value')}
  </section>`},reactive:function(){return y`<section>
    <h2>reactive.js</h2>
    <p>
      Deep reactive proxies backed by signals. Mutate normally — changes
      propagate automatically.
    </p>

    <h3>reactive(target)</h3>
    <p>Wraps a plain object/array in a deep reactive proxy.</p>
    ${Kr('import { reactive, effect } from "vanillakit";\n\nconst state = reactive({\n  user: { name: "Ada", scores: [95, 87] },\n});\n\neffect(() => console.log(state.user.name)); // "Ada"\nstate.user.name = "Grace";                  // "Grace"\nstate.user.scores.push(92);                 // tracked')}

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
    ${Kr('import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\nconst el = html`\n  <div>\n    <h1>Hello, ${name}!</h1>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)} />\n  </div>\n`;\ndocument.body.append(el);')}

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
    ${Kr('import { signal, each, html } from "vanillakit";\n\nconst items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);\n\nhtml`<ul>\n  ${each(items, i => i.id, (itemSig) => html`<li>${() => itemSig().text}</li>`)}\n</ul>`;')}
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
    ${Kr('import { css } from "vanillakit";\n\nconst card = css`\n  padding: 16px;\n  background: #1a1a1a;\n  &:hover { border-color: gold; }\n  & .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 8px; }\n`;')}

    <h3>keyframes\`...\`</h3>
    <p>Creates a scoped <code>@keyframes</code> rule.</p>
    ${Kr('import { css, keyframes } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\nconst spinner = css`animation: ${spin} 1s linear infinite;`;')}

    <h3>globalCss\`...\` / cx(...classes)</h3>
    <p>Inject unscoped CSS or join class names (filtering falsy values).</p>
    ${Kr('import { globalCss, cx, css } from "vanillakit";\n\nglobalCss`body { margin: 0; }`;\n\nconst base = css`padding: 8px;`;\nconst active = css`color: gold;`;\ncx(base, isActive && active); // falsy values skipped')}
  </section>`},router:function(){return y`<section>
    <h2>router.js</h2>
    <p>
      SPA router supporting both hash and History API modes. Routes are
      functions returning DOM nodes.
    </p>

    <h3>initRouter(config)</h3>
    <p>
      Configures the routing mode. Call once before rendering. Defaults to
      <code>"hash"</code> mode if not called.
    </p>
    ${Kr('import { initRouter } from "vanillakit";\n\n// Hash mode (default): URLs like /#/about\ninitRouter({ mode: "hash" });\n\n// History mode: URLs like /about (requires server-side fallback)\ninitRouter({ mode: "history" });')}

    <h3>createRouter(routeMap)</h3>
    <p>
      Maps path patterns to handlers. Supports <code>:param</code> and
      <code>*</code> catch-all.
    </p>
    ${Kr('import { createRouter, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/":         () => html`<h1>Home</h1>`,\n  "/user/:id": () => html`<h1>User page</h1>`,\n  "*":         () => html`<h1>404</h1>`,\n});\ndocument.body.append(Router());')}

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
    ${Kr('import { navLink, css } from "vanillakit";\n\nconst active = css`color: gold; font-weight: 700;`;\nconst base   = css`color: gray;`;\n\ndocument.body.append(navLink("/about", "About", active, base));')}
  </section>`}};!function(t={}){const e=t.mode??"hash";M=(t.base??"").replace(/\/$/,"").replace(/^\/$/,""),e!==N&&("hash"===N?window.removeEventListener("hashchange",B):window.removeEventListener("popstate",H),N=e,"hash"===e?(L(window.location.hash.slice(1)||"/"),window.addEventListener("hashchange",B)):(L(window.location.pathname.slice(M.length)||"/"),window.addEventListener("popstate",H)))}({mode:"history",base:"/vanillakit/"});const{theme:As,toggle:Es}=function(){const t=localStorage.getItem(G),e=window.matchMedia("(prefers-color-scheme: dark)"),n=()=>e.matches?"dark":"light",o=i(t||n());function s(t){document.documentElement.dataset.theme=t}return s(o()),r(()=>{s(o())}),e.addEventListener("change",()=>{localStorage.getItem(G)||o(n())}),{theme:o,toggle(){const t="dark"===o()?"light":"dark";o(t),localStorage.setItem(G,t)},set(t){"auto"===t?(localStorage.removeItem(G),o(n())):(o(t),localStorage.setItem(G,t))}}}(),_s=O`
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
`,Cs=function(t){const e=Object.entries(t).sort((t,e)=>"*"===t[0]?1:"*"===e[0]?-1:e[0].split("/").length-t[0].split("/").length);return()=>{const t=document.createElement("div");return r(()=>{const n=L();let i=null;for(const[t,o]of e){const{regex:e,keys:r}=(()=>{if("*"===t)return{regex:/.*/,keys:[]};const e=[],n=t.replace(/:([^/]+)/g,(t,n)=>(e.push(n),"([^/]+)"));return{regex:new RegExp(`^${n}$`),keys:e}})(),s=n.match(e);if(s){const t={};r.forEach((e,n)=>{t[e]=decodeURIComponent(s[n+1])}),i={handler:o,params:t};break}}if(z(i?i.params:{}),t.innerHTML="",i){const e=i.handler();e instanceof Node&&t.append(e)}}),t}}({"/":function(){return y`<div class="animate-in">
    <section data-hero>
      <h1>Build UIs with <span class="text-accent">plain JavaScript.</span></h1>
      <p>
        Minimal and expressive utilities that complement vanilla JS to build
        modern, reactive websites. Typescript-friendly, zero dependencies, no
        build step required.
      </p>
      <div>
        <a href="#/docs" role="button" data-color-variant="primary">
          Get started
        </a>
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

    <hr />
    <h4 class="text-accent">See it in action</h4>
    <p>
      Check out the interactive demos — a full todo app, reactive object
      explorer, and stress tests for signals and keyed lists.
    </p>
    <div data-grid data-cols="3">
      <a href="#/tasks" role="button" data-style-variant="outline">
        Todo app
      </a>
      <a href="#/playground" role="button" data-style-variant="outline">
        Playground
      </a>
      <a href="#/stress" role="button" data-style-variant="outline">
        Stress test
      </a>
    </div>

    <hr />

    <div data-grid data-cols="3">
      ${_(Jr,t=>t.dd,t=>((t={dd:"1 billion",dt:"That's big!"})=>y` <article data-card style="text-align:center;">
    <dl>
      <dd class="text-accent">${t.dd}</dd>
      <dt>${t.dt}</dt>
    </dl>
  </article>`)(t()))}
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
    </div>
    <hr />
    <h4 class="text-accent">Quick example</h4>
    <p>A counter in 9 lines. Driven by signals — no re-renders or diffing.</p>
    ${Vr({source:Wr,label:"Try editing the code!"})}
  </div>`},"/examples":function(){const t=i("snippets");return y`<div class="animate-in">
    <h1>Examples</h1>
    <p class=${W}>
      Interactive demos, code snippets, and stress tests.
    </p>

    <div data-layout="sidebar">
      <aside>
        <nav>
          ${bs.map(e=>y`
              <div class=${Y}>
                <div class="group-label">${e.label}</div>
                ${e.items.map(e=>y`
                    <a
                      class=${X}
                      aria-current=${()=>t()===e.id?"page":null}
                      onclick=${n=>{n.preventDefault(),t(e.id)}}
                      href="#"
                      >${e.label}</a
                    >
                  `)}
              </div>
            `)}
        </nav>
      </aside>

      <div>${()=>ys[t()]()}</div>
    </div>
  </div>`},"/docs":function(){const t=i("getting-started");return y`<div class="animate-in">
    <h1>Docs</h1>
    <p class=${W}>API reference, concepts, and guides.</p>

    <div data-layout="sidebar">
      <aside>
        <nav>
          ${$s.map(e=>y`
              <div class=${Y}>
                <div class="group-label">${e.label}</div>
                ${e.items.map(e=>y`
                    <a
                      class=${X}
                      aria-current=${()=>t()===e.id?"page":null}
                      onclick=${n=>{n.preventDefault(),t(e.id)}}
                      href="#"
                      >${e.label}</a
                    >
                  `)}
              </div>
            `)}
        </nav>
      </aside>

      <div>${()=>Ss[t()]()}</div>
    </div>
  </div>`},"/about":function(){return y`<div class="animate-in">
    <h1>Architecture</h1>
    <p class=${W}>
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
      ${xs.map(t=>y`<article data-card style="margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:16px;">
              <div
                class=${ks}
                style=${`background: ${t.color}20; color: ${t.color};`}
              >
                ${t.icon}
              </div>
              <div style="flex:1;display:flex;flex-direction:column;gap:2px;">
                <strong style="font-family:var(--vk-font-mono);font-size:0.9rem;"
                  >${t.name}</strong
                >
                <small>${t.desc}</small>
              </div>
              <span data-badge>${t.lines}</span>
            </div>
          </article>`)}
    </div>
  </div>`},"*":()=>y`<div class="animate-in">
      <h1>404</h1>
      <p>Not found.</p>
    </div>`});document.getElementById("app").append(y`
    <header>
      <a
        class=${V}
        href="/"
        onclick=${t=>{t.preventDefault(),q("/")}}
        >vanillakit_</a
      >
      <div style="display:flex;align-items:center;gap:8px;">
        <nav>
          ${U("/","Home")} ${U("/docs","Docs")}
          ${U("/examples","Examples")} ${U("/about","About")}
        </nav>
        <button class=${_s} onclick=${Es} title="Toggle theme">
          ${()=>"dark"===As()?"☀️":"🌙"}
        </button>
      </div>
    </header>
    <main>${Cs()}</main>
    <footer>
      Built with <span class="text-accent">vanillakit</span> — zero deps, ~760
      lines of JS
    </footer>
  `);
