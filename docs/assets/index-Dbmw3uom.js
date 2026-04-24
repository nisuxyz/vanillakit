!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)}).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),e.credentials="use-credentials"===t.crossOrigin?"include":"anonymous"===t.crossOrigin?"omit":"same-origin",e}(t);fetch(t.href,e)}}();let t=null,e=0;const n=new Set;function i(i){let o=i;const r=new Set;function s(...i){if(0===i.length)return t&&(r.add(t),t.t.add(r)),o;const s="function"==typeof i[0]?i[0](o):i[0];if(Object.is(s,o))return o;if(o=s,e>0)for(const t of r)n.add(t);else for(const t of[...r])t.i();return o}return s.peek=()=>o,s.toString=()=>String(o),s[Symbol.toPrimitive]=()=>o,s}function o(t){const e=i(void 0);r(()=>e(t()));const n=()=>e();return n.peek=e.peek,n}function r(e){const n={o:e,t:new Set,l:!1,i(){if(n.l)return;for(const t of n.t)t.delete(n);n.t.clear();const i=t;t=n;try{e()}finally{t=i}}};return n.i(),()=>{n.l=!0;for(const t of n.t)t.delete(n);n.t.clear()}}function s(t){e++;try{return t()}finally{if(e--,0===e){const t=[...n];n.clear();for(const e of t)e.i()}}}function a(e){const n=t;t=null;try{return e()}finally{t=n}}const c=Symbol("reactive"),l=Symbol("raw"),d=new WeakMap,u=new Set([c,l,Symbol.toPrimitive,Symbol.toStringTag,Symbol.iterator,Symbol.asyncIterator,Symbol.isConcatSpreadable,"__proto__","constructor","prototype","toJSON"]),h=new Set(["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"]),p=new Set(["indexOf","lastIndexOf","includes"]);function f(t){return null==t||"object"!=typeof t||t instanceof Date||t instanceof RegExp||t instanceof Error||t instanceof Node||t instanceof Map||t instanceof Set?t:m(t)}function m(t){if(null==t||"object"!=typeof t)return t;if(t[c])return t;if(d.has(t))return d.get(t);const e=new Map;function n(n){return e.has(n)||e.set(n,i(f(t[n]))),e.get(n)}const o=new Proxy(t,{get(t,i,o){if(i===c)return!0;if(i===l)return t;if("symbol"==typeof i&&u.has(i))return Reflect.get(t,i,o);if(u.has(i))return Reflect.get(t,i,o);if(Array.isArray(t)&&"string"==typeof i){if(h.has(i))return(...n)=>{let o;return s(()=>{const r=n.map(t=>null!=t&&t[l]?t[l]:t);o=Array.prototype[i].apply(t,r),function(t,e){for(let n=0;n<t.length;n++){const i=String(n);e.has(i)&&e.get(i)(f(t[n]))}e.has("length")&&e.get("length")(t.length)}(t,e)}),o};if(p.has(i))return(...e)=>(n("length")(),Array.prototype[i].apply(t,[null!=e[0]&&e[0][l]?e[0][l]:e[0],...e.slice(1)]))}return n(i)()},set(t,n,i){const o=null!=i&&i[l]?i[l]:i;return t[n]=o,e.has(n)&&e.get(n)(f(o)),Array.isArray(t)&&e.has("length")&&e.get("length")(t.length),!0},deleteProperty:(t,n)=>(delete t[n],e.has(n)&&(e.get(n)(void 0),e.delete(n)),!0),has:(t,e)=>e===c||e===l||("string"==typeof e&&n(e)(),e in t),ownKeys:t=>(Array.isArray(t)&&n("length")(),Reflect.ownKeys(t)),getPrototypeOf:t=>Reflect.getPrototypeOf(t),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t,e)});return d.set(t,o),o}function v(t){return null!=t&&!0===t[c]}function g(t){if(null==t||"object"!=typeof t)return t;if(v(t)){const e=t[l];if(Array.isArray(e)){const e=t.length,n=[];for(let i=0;i<e;i++)n.push(g(t[i]));return n}const n={};for(const i of Object.keys(e))n[i]=g(t[i]);return n}if(Array.isArray(t))return t.map(g);const e={};for(const n of Object.keys(t))e[n]=g(t[n]);return e}let b=0;function y(t,...e){const n=b++;let i="";const o=[];for(let u=0;u<t.length;u++)if(i+=t[u],u<e.length)if(k(i)){const t=i.match(/(\S+)\s*=\s*["']?$/);if(t){const e=t[1],r=`data-v-${n}-${u}`;i=i.slice(0,-t[0].length),i+=`${r}="" `,o.push({index:u,attrName:e,elemMarker:r})}else i+=`v${n}_${u}`}else i+=`\x3c!--v${n}-${u}--\x3e`;const r=document.createElement("template");r.innerHTML=i;const s=r.content,a=[];for(const{index:u,attrName:h,elemMarker:p}of o){const t=s.querySelector(`[${p}]`);t&&(t.removeAttribute(p),x(t,h,e[u],a))}const c=document.createTreeWalker(s,NodeFilter.SHOW_COMMENT),l=[];for(;c.nextNode();){const t=c.currentNode;t.data.startsWith(`v${n}-`)&&l.push({node:t,index:parseInt(t.data.slice(`v${n}-`.length))})}for(const{node:u,index:h}of l)$(u,e[h],a);s.u=()=>{for(const t of a)t();a.length=0};const d=[...s.childNodes];if(d.length>0){const t=d[0];(t.p||(t.p=[])).push(s.u)}return 1===s.childNodes.length?s.childNodes[0]:s}function k(t){for(let e=t.length-1;e>=0;e--){if(">"===t[e])return!1;if("<"===t[e])return!0}return!1}function x(t,e,n,i){e.startsWith("on")?t.addEventListener(e.slice(2).toLowerCase(),"function"==typeof n?n:()=>{}):"ref"!==e||"function"!=typeof n?"function"!=typeof n?w(t,e,n):i.push(r(()=>w(t,e,n()))):n(t)}function w(t,e,n){"class"===e||"className"===e?t.className=n??"":"style"===e&&"object"==typeof n?Object.assign(t.style,n):"style"===e&&"string"==typeof n?t.setAttribute("style",n):"checked"===e?t.checked=!!n:"value"===e&&"value"in t?t.value=n??"":"disabled"===e||"readonly"===e||"hidden"===e?n?t.setAttribute(e,""):t.removeAttribute(e):!1===n||null==n?t.removeAttribute(e):t.setAttribute(e,!0===n?"":String(n))}function $(t,e,n){if(null!=e&&e.m)n.push(function(t,{listFn:e,keyFn:n,renderFn:o}){const s=document.createComment("/each");t.parentNode?.insertBefore(s,t.nextSibling);const c=new Map,l=r(()=>{const r=e(),s=Array.isArray(r)?r:[],l=t.parentNode;if(!l)return;const d=s.map(n),u=new Set(d);for(const[t,e]of c)if(!u.has(t)){for(const t of e.disposers)t();for(const t of e.nodes)E(t),t.remove();c.delete(t)}let h=t.nextSibling;for(let t=0;t<s.length;t++){const e=d[t];let n=c.get(e);if(n){if(n.itemSig(s[t]),n.indexSig(t),n.nodes.length>0&&n.nodes[0]!==h)for(const t of n.nodes)l.insertBefore(t,h);h=n.nodes.length>0?n.nodes[n.nodes.length-1].nextSibling:h}else{const r=i(s[t]),d=i(t),u=[];let p;const f=a(()=>(p=o(r,d),p.u??null)),m=p instanceof DocumentFragment?[...p.childNodes]:[p instanceof Node?p:document.createTextNode(String(p))];f&&u.push(f),n={nodes:m,disposers:u,itemSig:r,indexSig:d},c.set(e,n);const v=document.createDocumentFragment();for(const t of m)v.append(t);l.insertBefore(v,h),h=n.nodes[n.nodes.length-1]?.nextSibling??h}}});return()=>{l();for(const[,t]of c){for(const e of t.disposers)e();for(const e of t.nodes)E(e),e.remove()}c.clear(),s.parentNode&&s.remove()}}(t,e));else{if("function"==typeof e){let i=null;return void n.push(r(()=>{i=S(t,i,e())}))}S(t,null,e)}}function S(t,e,n){const i=t.parentNode;if(!i)return e;if(e){const t=Array.isArray(e)?e:[e];for(const e of t)e.parentNode&&(E(e),e.remove())}if(null==n||!1===n||!0===n)return null;if(Array.isArray(n)){const e=document.createDocumentFragment(),o=[];for(const t of n.flat(1/0)){const n=A(t);n&&(e.append(n),o.push(n))}return i.insertBefore(e,t),o}const o=A(n);return o&&i.insertBefore(o,t),o}function A(t){return null==t||!1===t||!0===t?null:t instanceof Node?t:document.createTextNode(String(t))}function E(t){const e=t;if(e.p){for(const t of e.p)t();e.p=null}if(t.childNodes)for(const n of t.childNodes)E(n)}function _(t,e,n){return{m:!0,listFn:t,keyFn:e,renderFn:n}}let C=0;const F=new CSSStyleSheet;function T(){return"v-"+(C++).toString(36)}function I(t){for(const n of t){const t=n.trim();if(t)try{F.insertRule(t,F.cssRules.length)}catch(e){}}}function O(t,...e){let n="";for(let o=0;o<t.length;o++)n+=t[o],o<e.length&&(n+=e[o]);const i=T();return I(function(t,e){const n=function(t){const e={declarations:"",children:[],selector:""},n=[e];let i="",o=!1,r="";for(let a=0;a<t.length;a++){const e=t[a];if(o)i+=e,e===r&&"\\"!==t[a-1]&&(o=!1);else if('"'!==e&&"'"!==e)if("{"===e){const t=i.trim();i="";const e=t.lastIndexOf(";");let o;if(-1!==e){const i=t.slice(0,e+1).trim();if(i){const t=n[n.length-1];t.declarations+=(t.declarations?" ":"")+i}o=t.slice(e+1).trim()}else o=t;const r={selector:o,declarations:"",children:[]};n[n.length-1].children.push(r),n.push(r)}else if("}"===e){const t=i.trim();if(t){const e=n[n.length-1];e.declarations+=(e.declarations?" ":"")+t}i="",n.pop()}else i+=e;else o=!0,r=e,i+=e}const s=i.trim();return s&&(e.declarations+=(e.declarations?" ":"")+s),e}(t),i=[];return j(n,e,i),i}(n,`.${i}`)),i}function R(t,...e){let n="";for(let o=0;o<t.length;o++)n+=t[o],o<e.length&&(n+=e[o]);const i=T();return I([`@keyframes ${i} { ${n} }`]),i}function D(t,...e){let n="";for(let r=0;r<t.length;r++)n+=t[r],r<e.length&&(n+=e[r]);const i=n.split("\n"),o=[];for(const r of i){const t=r.trim();if(t.startsWith("@import ")){const e=t.match(/@import\s+url\(\s*['"]?([^'")\s]+)['"]?\s*\)/)||t.match(/@import\s+['"]([^'"]+)['"]/);if(e){const t=document.createElement("link");t.rel="stylesheet",t.href=e[1],document.head.appendChild(t)}}else o.push(r)}I(function(t){const e=[];let n=0,i="",o=!1,r="";for(let s=0;s<t.length;s++){const a=t[s];o?(i+=a,a===r&&"\\"!==t[s-1]&&(o=!1)):'"'!==a&&"'"!==a?"{"===a?(n++,i+=a):"}"===a?(n--,i+=a,0===n&&(i.trim()&&e.push(i.trim()),i="")):i+=a:(o=!0,r=a,i+=a)}return e}(o.join("\n")))}function P(...t){return t.filter(Boolean).join(" ")}function j(t,e,n){t.declarations&&n.push(`${e} { ${t.declarations} }`);for(const i of t.children){const t=i.selector;if(t)if(/^@(media|supports|container|layer)\b/.test(t)){const o=[];i.declarations&&o.push(`${e} { ${i.declarations} }`);for(const t of i.children)j(t,e,o);o.length&&n.push(`${t} { ${o.join(" ")} }`)}else if(t.includes("&")){const o=t.split(",").map(t=>t.trim().replace(/&/g,e)).join(", ");i.declarations&&n.push(`${o} { ${i.declarations} }`);for(const t of i.children)j(t,o,n)}else{const o=`${e} ${t}`;i.declarations&&n.push(`${o} { ${i.declarations} }`);for(const t of i.children)j(t,o,n)}else{i.declarations&&n.push(`${e} { ${i.declarations} }`);for(const t of i.children)j(t,e,n)}}}document.adoptedStyleSheets=[...document.adoptedStyleSheets,F];let N="hash";const M=i(window.location.hash.slice(1)||"/"),L=i({});function z(){M(window.location.hash.slice(1)||"/")}function B(){M(window.location.pathname||"/")}function H(t){"history"===N?(window.history.pushState({},"",t),M(t)):window.location.hash=t}function q(t,e){const n=document.createElement("a");return n.href="history"===N?t:"#"+t,n.textContent=e,r(()=>{("/"===t?"/"===M():M().startsWith(t))?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")}),n.addEventListener("click",e=>{e.preventDefault(),H(t)}),n}window.addEventListener("hashchange",z);const U="vanillacss-theme",G=O`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--vk-color-accent);
  font-family: var(--vk-font-mono);
`,V=O`
  margin-bottom: 2rem;
`,W=O`
  border-top: none;
  border-radius: 0 0 var(--vk-radius-md) var(--vk-radius-md);
  max-height: 400px;
  overflow-y: auto;
`,J=O`
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
`,Y=O`
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
`,X=window;var Z=function(){return Z=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},Z.apply(this,arguments)},K="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Q(t){return t&&t.v&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var tt,et={exports:{}},nt=(tt||(tt=1,function(t){var e=function(t){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},o={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof r?new r(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.k||Object.defineProperty(t,"k",{value:++n}),t.k},clone:function t(e,n){var i,r;switch(n=n||{},o.util.type(e)){case"Object":if(r=o.util.objId(e),n[r])return n[r];for(var s in n[r]=i={},e)e.hasOwnProperty(s)&&(i[s]=t(e[s],n));return i;case"Array":return r=o.util.objId(e),n[r]?n[r]:(n[r]=i=[],e.forEach(function(e,o){i[o]=t(e,n)}),i);default:return e}},getLanguage:function(t){for(;t;){var n=e.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,n){t.className=t.className.replace(RegExp(e,"gi"),""),t.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var i="no-"+e;t;){var o=t.classList;if(o.contains(e))return!0;if(o.contains(i))return!1;t=t.parentElement}return!!n}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(t,e){var n=o.util.clone(o.languages[t]);for(var i in e)n[i]=e[i];return n},insertBefore:function(t,e,n,i){var r=(i=i||o.languages)[t],s={};for(var a in r)if(r.hasOwnProperty(a)){if(a==e)for(var c in n)n.hasOwnProperty(c)&&(s[c]=n[c]);n.hasOwnProperty(a)||(s[a]=r[a])}var l=i[t];return i[t]=s,o.languages.DFS(o.languages,function(e,n){n===l&&e!=t&&(this[e]=s)}),s},DFS:function t(e,n,i,r){r=r||{};var s=o.util.objId;for(var a in e)if(e.hasOwnProperty(a)){n.call(e,a,e[a],i||a);var c=e[a],l=o.util.type(c);"Object"!==l||r[s(c)]?"Array"!==l||r[s(c)]||(r[s(c)]=!0,t(c,n,a,r)):(r[s(c)]=!0,t(c,n,null,r))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var i={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),o.hooks.run("before-all-elements-highlight",i);for(var r,s=0;r=i.elements[s++];)o.highlightElement(r,!0===e,i.callback)},highlightElement:function(e,n,i){var r=o.util.getLanguage(e),s=o.languages[r];o.util.setLanguage(e,r);var a=e.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&o.util.setLanguage(a,r);var c={element:e,language:r,grammar:s,code:e.textContent};function l(t){c.highlightedCode=t,o.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,o.hooks.run("after-highlight",c),o.hooks.run("complete",c),i&&i.call(c.element)}if(o.hooks.run("before-sanity-check",c),(a=c.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!c.code)return o.hooks.run("complete",c),void(i&&i.call(c.element));if(o.hooks.run("before-highlight",c),c.grammar)if(n&&t.Worker){var d=new Worker(o.filename);d.onmessage=function(t){l(t.data)},d.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else l(o.highlight(c.code,c.grammar,c.language));else l(o.util.encode(c.code))},highlight:function(t,e,n){var i={code:t,grammar:e,language:n};if(o.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),r.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var i in n)e[i]=n[i];delete e.rest}var o=new c;return l(o,o.head,t),a(t,o,e,o.head,0),function(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}(o)},hooks:{all:{},add:function(t,e){var n=o.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=o.hooks.all[t];if(n&&n.length)for(var i,r=0;i=n[r++];)i(e)}},Token:r};function r(t,e,n,i){this.type=t,this.content=e,this.alias=n,this.length=0|(i||"").length}function s(t,e,n,i){t.lastIndex=e;var o=t.exec(n);if(o&&i&&o[1]){var r=o[1].length;o.index+=r,o[0]=o[0].slice(r)}return o}function a(t,e,n,i,c,u){for(var h in n)if(n.hasOwnProperty(h)&&n[h]){var p=n[h];p=Array.isArray(p)?p:[p];for(var f=0;f<p.length;++f){if(u&&u.cause==h+","+f)return;var m=p[f],v=m.inside,g=!!m.lookbehind,b=!!m.greedy,y=m.alias;if(b&&!m.pattern.global){var k=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,k+"g")}for(var x=m.pattern||m,w=i.next,$=c;w!==e.tail&&!(u&&$>=u.reach);$+=w.value.length,w=w.next){var S=w.value;if(e.length>t.length)return;if(!(S instanceof r)){var A,E=1;if(b){if(!(A=s(x,$,t,g))||A.index>=t.length)break;var _=A.index,C=A.index+A[0].length,F=$;for(F+=w.value.length;_>=F;)F+=(w=w.next).value.length;if($=F-=w.value.length,w.value instanceof r)continue;for(var T=w;T!==e.tail&&(F<C||"string"==typeof T.value);T=T.next)E++,F+=T.value.length;E--,S=t.slice($,F),A.index-=$}else if(!(A=s(x,0,S,g)))continue;var I=A[0],O=S.slice(0,_=A.index),R=S.slice(_+I.length),D=$+S.length;u&&D>u.reach&&(u.reach=D);var P=w.prev;if(O&&(P=l(e,P,O),$+=O.length),d(e,P,E),w=l(e,P,new r(h,v?o.tokenize(I,v):I,y,I)),R&&l(e,w,R),E>1){var j={cause:h+","+f,reach:D};a(t,e,n,w.prev,$,j),u&&j.reach>u.reach&&(u.reach=j.reach)}}}}}}function c(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function l(t,e,n){var i=e.next,o={value:n,prev:e,next:i};return e.next=o,i.prev=o,t.length++,o}function d(t,e,n){for(var i=e.next,o=0;o<n&&i!==t.tail;o++)i=i.next;e.next=i,i.prev=e,t.length-=o}if(t.Prism=o,r.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var i="";return e.forEach(function(e){i+=t(e,n)}),i}var r={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(r.classes,s):r.classes.push(s)),o.hooks.run("wrap",r);var a="";for(var c in r.attributes)a+=" "+c+'="'+(r.attributes[c]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+a+">"+r.content+"</"+r.tag+">"},!t.document)return t.addEventListener?(o.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,r=n.immediateClose;t.postMessage(o.highlight(n.code,o.languages[i],i)),r&&t.close()},!1),o):o;var u=o.util.currentScript();function h(){o.manual||o.highlightAll()}if(u&&(o.filename=u.src,u.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var p=document.readyState;"loading"===p||"interactive"===p&&u&&u.defer?document.addEventListener("DOMContentLoaded",h):window.requestAnimationFrame?window.requestAnimationFrame(h):window.setTimeout(h,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});t.exports&&(t.exports=e),void 0!==K&&(K.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+n]={pattern:/[\s\S]+/,inside:e.languages[n]};var r={};r[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(void 0!==e&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",o="loaded",r="pre[data-src]:not(["+n+'="'+o+'"]):not(['+n+'="'+i+'"])';e.hooks.add("before-highlightall",function(t){t.selector+=", "+r}),e.hooks.add("before-sanity-check",function(s){var a=s.element;if(a.matches(r)){s.code="",a.setAttribute(n,i);var c=a.appendChild(document.createElement("CODE"));c.textContent="Loading…";var l=a.getAttribute("data-src"),d=s.language;if("none"===d){var u=(/\.(\w+)$/.exec(l)||[,"none"])[1];d=t[u]||u}e.util.setLanguage(c,d),e.util.setLanguage(a,d);var h=e.plugins.autoloader;h&&h.loadLanguages(d),function(t){var i=new XMLHttpRequest;i.open("GET",t,!0),i.onreadystatechange=function(){var t;4==i.readyState&&(i.status<400&&i.responseText?function(t){a.setAttribute(n,o);var i=function(t){var e=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t||"");if(e){var n=Number(e[1]),i=e[3];return e[2]?i?[n,Number(i)]:[n,void 0]:[n,n]}}(a.getAttribute("data-range"));if(i){var r=t.split(/\r\n?|\n/g),s=i[0],l=null==i[1]?r.length:i[1];s<0&&(s+=r.length),s=Math.max(0,Math.min(s-1,r.length)),l<0&&(l+=r.length),l=Math.max(0,Math.min(l,r.length)),t=r.slice(s,l).join("\n"),a.hasAttribute("data-start")||a.setAttribute("data-start",String(s+1))}c.textContent=t,e.highlightElement(c)}(i.responseText):(t=i.status>=400?"✖ Error "+i.status+" while fetching file: "+i.statusText:"✖ Error: File does not exist or is empty",a.setAttribute(n,"failed"),c.textContent=t))},i.send(null)}(l)}}),e.plugins.fileHighlight={highlight:function(t){for(var n,i=(t||document).querySelectorAll(r),o=0;n=i[o++];)e.highlightElement(n)}};var s=!1;e.fileHighlight=function(){s||(s=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}(et)),et.exports);const it=Q(nt);var ot,rt,st;!function(t){t[t.NONE=0]="NONE",t[t.$=1]="_abstract",t[t.S=2]="_accessor",t[t.A=3]="_as",t[t._=4]="_assert",t[t.C=5]="_asserts",t[t.F=6]="_async",t[t.T=7]="_await",t[t.I=8]="_checks",t[t.O=9]="_constructor",t[t.R=10]="_declare",t[t.D=11]="_enum",t[t.P=12]="_exports",t[t.j=13]="_from",t[t.N=14]="_get",t[t.M=15]="_global",t[t.L=16]="_implements",t[t.B=17]="_infer",t[t.H=18]="_interface",t[t.q=19]="_is",t[t.U=20]="_keyof",t[t.G=21]="_mixins",t[t.V=22]="_module",t[t.W=23]="_namespace",t[t.J=24]="_of",t[t.Y=25]="_opaque",t[t.X=26]="_out",t[t.Z=27]="_override",t[t.K=28]="_private",t[t.tt=29]="_protected",t[t.et=30]="_proto",t[t.nt=31]="_public",t[t.it=32]="_readonly",t[t.ot=33]="_require",t[t.rt=34]="_satisfies",t[t.st=35]="_set",t[t.ct=36]="_static",t[t.lt=37]="_symbol",t[t.ut=38]="_type",t[t.ht=39]="_unique",t[t.ft=40]="_using"}(ot||(ot={})),function(t){t[t.PRECEDENCE_MASK=15]="PRECEDENCE_MASK",t[t.IS_KEYWORD=16]="IS_KEYWORD",t[t.IS_ASSIGN=32]="IS_ASSIGN",t[t.IS_RIGHT_ASSOCIATIVE=64]="IS_RIGHT_ASSOCIATIVE",t[t.IS_PREFIX=128]="IS_PREFIX",t[t.IS_POSTFIX=256]="IS_POSTFIX",t[t.IS_EXPRESSION_START=512]="IS_EXPRESSION_START",t[t.num=512]="num",t[t.bigint=1536]="bigint",t[t.decimal=2560]="decimal",t[t.regexp=3584]="regexp",t[t.string=4608]="string",t[t.name=5632]="name",t[t.eof=6144]="eof",t[t.bracketL=7680]="bracketL",t[t.bracketR=8192]="bracketR",t[t.braceL=9728]="braceL",t[t.braceBarL=10752]="braceBarL",t[t.braceR=11264]="braceR",t[t.braceBarR=12288]="braceBarR",t[t.parenL=13824]="parenL",t[t.parenR=14336]="parenR",t[t.comma=15360]="comma",t[t.semi=16384]="semi",t[t.colon=17408]="colon",t[t.doubleColon=18432]="doubleColon",t[t.dot=19456]="dot",t[t.question=20480]="question",t[t.questionDot=21504]="questionDot",t[t.arrow=22528]="arrow",t[t.template=23552]="template",t[t.ellipsis=24576]="ellipsis",t[t.backQuote=25600]="backQuote",t[t.dollarBraceL=27136]="dollarBraceL",t[t.at=27648]="at",t[t.hash=29184]="hash",t[t.eq=29728]="eq",t[t.assign=30752]="assign",t[t.preIncDec=32640]="preIncDec",t[t.postIncDec=33664]="postIncDec",t[t.bang=34432]="bang",t[t.tilde=35456]="tilde",t[t.pipeline=35841]="pipeline",t[t.nullishCoalescing=36866]="nullishCoalescing",t[t.logicalOR=37890]="logicalOR",t[t.logicalAND=38915]="logicalAND",t[t.bitwiseOR=39940]="bitwiseOR",t[t.bitwiseXOR=40965]="bitwiseXOR",t[t.bitwiseAND=41990]="bitwiseAND",t[t.equality=43015]="equality",t[t.lessThan=44040]="lessThan",t[t.greaterThan=45064]="greaterThan",t[t.relationalOrEqual=46088]="relationalOrEqual",t[t.bitShiftL=47113]="bitShiftL",t[t.bitShiftR=48137]="bitShiftR",t[t.plus=49802]="plus",t[t.minus=50826]="minus",t[t.modulo=51723]="modulo",t[t.star=52235]="star",t[t.slash=53259]="slash",t[t.exponent=54348]="exponent",t[t.jsxName=55296]="jsxName",t[t.jsxText=56320]="jsxText",t[t.jsxEmptyText=57344]="jsxEmptyText",t[t.jsxTagStart=58880]="jsxTagStart",t[t.jsxTagEnd=59392]="jsxTagEnd",t[t.typeParameterStart=60928]="typeParameterStart",t[t.nonNullAssertion=61440]="nonNullAssertion",t[t.vt=62480]="_break",t[t.gt=63504]="_case",t[t.bt=64528]="_catch",t[t.yt=65552]="_continue",t[t.kt=66576]="_debugger",t[t.xt=67600]="_default",t[t.wt=68624]="_do",t[t.$t=69648]="_else",t[t.St=70672]="_finally",t[t.At=71696]="_for",t[t.Et=73232]="_function",t[t._t=73744]="_if",t[t.Ct=74768]="_return",t[t.Ft=75792]="_switch",t[t.Tt=77456]="_throw",t[t.It=77840]="_try",t[t.Ot=78864]="_var",t[t.Rt=79888]="_let",t[t.Dt=80912]="_const",t[t.Pt=81936]="_while",t[t.jt=82960]="_with",t[t.Nt=84496]="_new",t[t.Mt=85520]="_this",t[t.Lt=86544]="_super",t[t.zt=87568]="_class",t[t.Bt=88080]="_extends",t[t.Ht=89104]="_export",t[t.qt=90640]="_import",t[t.Ut=91664]="_yield",t[t.Gt=92688]="_null",t[t.Vt=93712]="_true",t[t.Wt=94736]="_false",t[t.Jt=95256]="_in",t[t.Yt=96280]="_instanceof",t[t.Xt=97936]="_typeof",t[t.Zt=98960]="_void",t[t.Kt=99984]="_delete",t[t.F=100880]="_async",t[t.N=101904]="_get",t[t.st=102928]="_set",t[t.R=103952]="_declare",t[t.it=104976]="_readonly",t[t.$=106e3]="_abstract",t[t.ct=107024]="_static",t[t.nt=107536]="_public",t[t.K=108560]="_private",t[t.tt=109584]="_protected",t[t.Z=110608]="_override",t[t.A=112144]="_as",t[t.D=113168]="_enum",t[t.ut=114192]="_type",t[t.L=115216]="_implements"}(rt||(rt={}));class at{constructor(t,e,n){this.startTokenIndex=t,this.endTokenIndex=e,this.isFunctionScope=n}}class ct{constructor(t,e,n,i,o,r,s,a,c,l,d,u,h){this.potentialArrowAt=t,this.noAnonFunctionType=e,this.inDisallowConditionalTypesContext=n,this.tokensLength=i,this.scopesLength=o,this.pos=r,this.type=s,this.contextualKeyword=a,this.start=c,this.end=l,this.isType=d,this.scopeDepth=u,this.error=h}}class lt{constructor(){lt.prototype.Qt.call(this),lt.prototype.te.call(this),lt.prototype.ee.call(this),lt.prototype.ne.call(this),lt.prototype.ie.call(this),lt.prototype.oe.call(this),lt.prototype.re.call(this),lt.prototype.se.call(this),lt.prototype.ae.call(this),lt.prototype.ce.call(this),lt.prototype.le.call(this),lt.prototype.de.call(this),lt.prototype.ue.call(this)}Qt(){this.potentialArrowAt=-1}te(){this.noAnonFunctionType=!1}ee(){this.inDisallowConditionalTypesContext=!1}ne(){this.tokens=[]}ie(){this.scopes=[]}oe(){this.pos=0}re(){this.type=rt.eof}se(){this.contextualKeyword=ot.NONE}ae(){this.start=0}ce(){this.end=0}le(){this.isType=!1}de(){this.scopeDepth=0}ue(){this.error=null}snapshot(){return new ct(this.potentialArrowAt,this.noAnonFunctionType,this.inDisallowConditionalTypesContext,this.tokens.length,this.scopes.length,this.pos,this.type,this.contextualKeyword,this.start,this.end,this.isType,this.scopeDepth,this.error)}restoreFromSnapshot(t){this.potentialArrowAt=t.potentialArrowAt,this.noAnonFunctionType=t.noAnonFunctionType,this.inDisallowConditionalTypesContext=t.inDisallowConditionalTypesContext,this.tokens.length=t.tokensLength,this.scopes.length=t.scopesLength,this.pos=t.pos,this.type=t.type,this.contextualKeyword=t.contextualKeyword,this.start=t.start,this.end=t.end,this.isType=t.isType,this.scopeDepth=t.scopeDepth,this.error=t.error}}let dt,ut,ht,pt,ft,mt;function vt(){return mt++}function gt(t){if("pos"in t){const e=function(t){let e=1,n=1;for(let i=0;i<t;i++)ft.charCodeAt(i)===st.lineFeed?(e++,n=1):n++;return new bt(e,n)}(t.pos);t.message+=` (${e.line}:${e.column})`,t.loc=e}return t}!function(t){t[t.backSpace=8]="backSpace",t[t.lineFeed=10]="lineFeed",t[t.tab=9]="tab",t[t.carriageReturn=13]="carriageReturn",t[t.shiftOut=14]="shiftOut",t[t.space=32]="space",t[t.exclamationMark=33]="exclamationMark",t[t.quotationMark=34]="quotationMark",t[t.numberSign=35]="numberSign",t[t.dollarSign=36]="dollarSign",t[t.percentSign=37]="percentSign",t[t.ampersand=38]="ampersand",t[t.apostrophe=39]="apostrophe",t[t.leftParenthesis=40]="leftParenthesis",t[t.rightParenthesis=41]="rightParenthesis",t[t.asterisk=42]="asterisk",t[t.plusSign=43]="plusSign",t[t.comma=44]="comma",t[t.dash=45]="dash",t[t.dot=46]="dot",t[t.slash=47]="slash",t[t.digit0=48]="digit0",t[t.digit1=49]="digit1",t[t.digit2=50]="digit2",t[t.digit3=51]="digit3",t[t.digit4=52]="digit4",t[t.digit5=53]="digit5",t[t.digit6=54]="digit6",t[t.digit7=55]="digit7",t[t.digit8=56]="digit8",t[t.digit9=57]="digit9",t[t.colon=58]="colon",t[t.semicolon=59]="semicolon",t[t.lessThan=60]="lessThan",t[t.equalsTo=61]="equalsTo",t[t.greaterThan=62]="greaterThan",t[t.questionMark=63]="questionMark",t[t.atSign=64]="atSign",t[t.uppercaseA=65]="uppercaseA",t[t.uppercaseB=66]="uppercaseB",t[t.uppercaseC=67]="uppercaseC",t[t.uppercaseD=68]="uppercaseD",t[t.uppercaseE=69]="uppercaseE",t[t.uppercaseF=70]="uppercaseF",t[t.uppercaseG=71]="uppercaseG",t[t.uppercaseH=72]="uppercaseH",t[t.uppercaseI=73]="uppercaseI",t[t.uppercaseJ=74]="uppercaseJ",t[t.uppercaseK=75]="uppercaseK",t[t.uppercaseL=76]="uppercaseL",t[t.uppercaseM=77]="uppercaseM",t[t.uppercaseN=78]="uppercaseN",t[t.uppercaseO=79]="uppercaseO",t[t.uppercaseP=80]="uppercaseP",t[t.uppercaseQ=81]="uppercaseQ",t[t.uppercaseR=82]="uppercaseR",t[t.uppercaseS=83]="uppercaseS",t[t.uppercaseT=84]="uppercaseT",t[t.uppercaseU=85]="uppercaseU",t[t.uppercaseV=86]="uppercaseV",t[t.uppercaseW=87]="uppercaseW",t[t.uppercaseX=88]="uppercaseX",t[t.uppercaseY=89]="uppercaseY",t[t.uppercaseZ=90]="uppercaseZ",t[t.leftSquareBracket=91]="leftSquareBracket",t[t.backslash=92]="backslash",t[t.rightSquareBracket=93]="rightSquareBracket",t[t.caret=94]="caret",t[t.underscore=95]="underscore",t[t.graveAccent=96]="graveAccent",t[t.lowercaseA=97]="lowercaseA",t[t.lowercaseB=98]="lowercaseB",t[t.lowercaseC=99]="lowercaseC",t[t.lowercaseD=100]="lowercaseD",t[t.lowercaseE=101]="lowercaseE",t[t.lowercaseF=102]="lowercaseF",t[t.lowercaseG=103]="lowercaseG",t[t.lowercaseH=104]="lowercaseH",t[t.lowercaseI=105]="lowercaseI",t[t.lowercaseJ=106]="lowercaseJ",t[t.lowercaseK=107]="lowercaseK",t[t.lowercaseL=108]="lowercaseL",t[t.lowercaseM=109]="lowercaseM",t[t.lowercaseN=110]="lowercaseN",t[t.lowercaseO=111]="lowercaseO",t[t.lowercaseP=112]="lowercaseP",t[t.lowercaseQ=113]="lowercaseQ",t[t.lowercaseR=114]="lowercaseR",t[t.lowercaseS=115]="lowercaseS",t[t.lowercaseT=116]="lowercaseT",t[t.lowercaseU=117]="lowercaseU",t[t.lowercaseV=118]="lowercaseV",t[t.lowercaseW=119]="lowercaseW",t[t.lowercaseX=120]="lowercaseX",t[t.lowercaseY=121]="lowercaseY",t[t.lowercaseZ=122]="lowercaseZ",t[t.leftCurlyBrace=123]="leftCurlyBrace",t[t.verticalBar=124]="verticalBar",t[t.rightCurlyBrace=125]="rightCurlyBrace",t[t.tilde=126]="tilde",t[t.nonBreakingSpace=160]="nonBreakingSpace",t[t.oghamSpaceMark=5760]="oghamSpaceMark",t[t.lineSeparator=8232]="lineSeparator",t[t.paragraphSeparator=8233]="paragraphSeparator"}(st||(st={}));class bt{constructor(t,e){this.line=t,this.column=e}}function yt(t,e,n,i){ft=t,pt=new lt,mt=1,dt=e,ut=n,ht=i}function kt(t){return pt.contextualKeyword===t}function xt(t){const e=ne();return e.type===rt.name&&e.contextualKeyword===t}function wt(t){return pt.contextualKeyword===t&&Zt(rt.name)}function $t(t){wt(t)||Tt()}function St(){return Qt(rt.eof)||Qt(rt.braceR)||At()}function At(){const t=pt.tokens[pt.tokens.length-1];for(let e=t?t.end:0;e<pt.start;e++){const t=ft.charCodeAt(e);if(t===st.lineFeed||t===st.carriageReturn||8232===t||8233===t)return!0}return!1}function Et(){const t=ie();for(let e=pt.end;e<t;e++){const t=ft.charCodeAt(e);if(t===st.lineFeed||t===st.carriageReturn||8232===t||8233===t)return!0}return!1}function _t(){return Zt(rt.semi)||St()}function Ct(){_t()||Tt('Unexpected token, expected ";"')}function Ft(t){Zt(t)||Tt(`Unexpected token, expected "${function(t){switch(t){case rt.num:return"num";case rt.bigint:return"bigint";case rt.decimal:return"decimal";case rt.regexp:return"regexp";case rt.string:return"string";case rt.name:return"name";case rt.eof:return"eof";case rt.bracketL:return"[";case rt.bracketR:return"]";case rt.braceL:return"{";case rt.braceBarL:return"{|";case rt.braceR:return"}";case rt.braceBarR:return"|}";case rt.parenL:return"(";case rt.parenR:return")";case rt.comma:return",";case rt.semi:return";";case rt.colon:return":";case rt.doubleColon:return"::";case rt.dot:return".";case rt.question:return"?";case rt.questionDot:return"?.";case rt.arrow:return"=>";case rt.template:return"template";case rt.ellipsis:return"...";case rt.backQuote:return"`";case rt.dollarBraceL:return"${";case rt.at:return"@";case rt.hash:return"#";case rt.eq:return"=";case rt.assign:return"_=";case rt.preIncDec:case rt.postIncDec:return"++/--";case rt.bang:return"!";case rt.tilde:return"~";case rt.pipeline:return"|>";case rt.nullishCoalescing:return"??";case rt.logicalOR:return"||";case rt.logicalAND:return"&&";case rt.bitwiseOR:return"|";case rt.bitwiseXOR:return"^";case rt.bitwiseAND:return"&";case rt.equality:return"==/!=";case rt.lessThan:return"<";case rt.greaterThan:return">";case rt.relationalOrEqual:return"<=/>=";case rt.bitShiftL:return"<<";case rt.bitShiftR:return">>/>>>";case rt.plus:return"+";case rt.minus:return"-";case rt.modulo:return"%";case rt.star:return"*";case rt.slash:return"/";case rt.exponent:return"**";case rt.jsxName:return"jsxName";case rt.jsxText:return"jsxText";case rt.jsxEmptyText:return"jsxEmptyText";case rt.jsxTagStart:return"jsxTagStart";case rt.jsxTagEnd:return"jsxTagEnd";case rt.typeParameterStart:return"typeParameterStart";case rt.nonNullAssertion:return"nonNullAssertion";case rt.vt:return"break";case rt.gt:return"case";case rt.bt:return"catch";case rt.yt:return"continue";case rt.kt:return"debugger";case rt.xt:return"default";case rt.wt:return"do";case rt.$t:return"else";case rt.St:return"finally";case rt.At:return"for";case rt.Et:return"function";case rt._t:return"if";case rt.Ct:return"return";case rt.Ft:return"switch";case rt.Tt:return"throw";case rt.It:return"try";case rt.Ot:return"var";case rt.Rt:return"let";case rt.Dt:return"const";case rt.Pt:return"while";case rt.jt:return"with";case rt.Nt:return"new";case rt.Mt:return"this";case rt.Lt:return"super";case rt.zt:return"class";case rt.Bt:return"extends";case rt.Ht:return"export";case rt.qt:return"import";case rt.Ut:return"yield";case rt.Gt:return"null";case rt.Vt:return"true";case rt.Wt:return"false";case rt.Jt:return"in";case rt.Yt:return"instanceof";case rt.Xt:return"typeof";case rt.Zt:return"void";case rt.Kt:return"delete";case rt.F:return"async";case rt.N:return"get";case rt.st:return"set";case rt.R:return"declare";case rt.it:return"readonly";case rt.$:return"abstract";case rt.ct:return"static";case rt.nt:return"public";case rt.K:return"private";case rt.tt:return"protected";case rt.Z:return"override";case rt.A:return"as";case rt.D:return"enum";case rt.ut:return"type";case rt.L:return"implements";default:return""}}(t)}"`)}function Tt(t="Unexpected token",e=pt.start){if(pt.error)return;const n=new SyntaxError(t);n.pos=e,pt.error=n,pt.pos=ft.length,de(rt.eof)}const It=[9,11,12,st.space,st.nonBreakingSpace,st.oghamSpaceMark,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],Ot=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,Rt=new Uint8Array(65536);for(const Cs of It)Rt[Cs]=1;function Dt(t){if(t<48)return 36===t;if(t<58)return!0;if(t<65)return!1;if(t<91)return!0;if(t<97)return 95===t;if(t<123)return!0;if(t<128)return!1;throw new Error("Should not be called with non-ASCII char code.")}const Pt=new Uint8Array(65536);for(let Cs=0;Cs<128;Cs++)Pt[Cs]=Dt(Cs)?1:0;for(let Cs=128;Cs<65536;Cs++)Pt[Cs]=1;for(const Cs of It)Pt[Cs]=0;Pt[8232]=0,Pt[8233]=0;const jt=Pt.slice();for(let Cs=st.digit0;Cs<=st.digit9;Cs++)jt[Cs]=0;const Nt=new Int32Array([-1,27,783,918,1755,2376,2862,3483,-1,3699,-1,4617,4752,4833,5130,5508,5940,-1,6480,6939,7749,8181,8451,8613,-1,8829,-1,-1,-1,54,243,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,432,-1,-1,-1,675,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,81,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,108,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,135,-1,-1,-1,-1,-1,-1,-1,-1,-1,162,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,189,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,216,-1,-1,-1,-1,-1,-1,ot.$<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,270,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,297,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,324,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,351,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,378,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,405,-1,-1,-1,-1,-1,-1,-1,-1,ot.S<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.A<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,459,-1,-1,-1,-1,-1,594,-1,-1,-1,-1,-1,-1,486,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,513,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,540,-1,-1,-1,-1,-1,-1,ot._<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,567,-1,-1,-1,-1,-1,-1,-1,ot.C<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,621,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,648,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.F<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,702,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,729,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,756,-1,-1,-1,-1,-1,-1,ot.T<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,810,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,837,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,864,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,891,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.vt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,945,-1,-1,-1,-1,-1,-1,1107,-1,-1,-1,1242,-1,-1,1350,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,972,1026,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,999,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.gt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1053,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1080,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.bt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1134,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1161,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1188,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1215,-1,-1,-1,-1,-1,-1,-1,ot.I<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1269,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1296,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1323,-1,-1,-1,-1,-1,-1,-1,1+(rt.zt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1377,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1404,1620,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1431,-1,-1,-1,-1,-1,-1,1+(rt.Dt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1458,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1485,-1,-1,-1,-1,-1,-1,-1,-1,1512,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1539,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1566,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1593,-1,-1,-1,-1,-1,-1,-1,-1,ot.O<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1647,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1674,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1701,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1728,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.yt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1782,-1,-1,-1,-1,-1,-1,-1,-1,-1,2349,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1809,1971,-1,-1,2106,-1,-1,-1,-1,-1,2241,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1836,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1863,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1917,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1944,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.kt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1998,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2025,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2052,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2079,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.R<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2133,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2160,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2187,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2214,-1,-1,-1,-1,-1,-1,1+(rt.xt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2268,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2295,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2322,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Kt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.wt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2403,-1,2484,-1,-1,-1,-1,-1,-1,-1,-1,-1,2565,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2430,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2457,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.$t<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2511,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2538,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.D<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2592,-1,-1,-1,2727,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2619,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2646,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2673,-1,-1,-1,-1,-1,-1,1+(rt.Ht<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2700,-1,-1,-1,-1,-1,-1,-1,ot.P<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2754,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2781,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2808,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2835,-1,-1,-1,-1,-1,-1,-1,1+(rt.Bt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2889,-1,-1,-1,-1,-1,-1,-1,2997,-1,-1,-1,-1,-1,3159,-1,-1,3213,-1,-1,3294,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2916,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2943,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2970,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Wt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3024,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3051,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3078,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3105,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3132,-1,1+(rt.St<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3186,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.At<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3240,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3267,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.j<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3321,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3348,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3375,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3402,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3429,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3456,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Et<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3510,-1,-1,-1,-1,-1,-1,3564,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3537,-1,-1,-1,-1,-1,-1,ot.N<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3591,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3618,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3645,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3672,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.M<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3726,-1,-1,-1,-1,-1,-1,3753,4077,-1,-1,-1,-1,4590,-1,-1,-1,-1,-1,-1,-1,1+(rt._t<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3780,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3807,-1,-1,3996,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3834,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3861,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3888,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3915,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3942,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3969,-1,-1,-1,-1,-1,-1,-1,ot.L<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4023,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4050,-1,-1,-1,-1,-1,-1,1+(rt.qt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Jt<<1),-1,-1,-1,-1,-1,4104,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4185,4401,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4131,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4158,-1,-1,-1,-1,-1,-1,-1,-1,ot.B<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4212,-1,-1,-1,-1,-1,-1,-1,4239,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4266,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4293,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4320,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4347,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4374,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Yt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4428,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4455,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4482,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4509,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4536,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4563,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.H<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.q<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4644,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4671,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4698,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4725,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.U<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4779,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4806,-1,-1,-1,-1,-1,-1,1+(rt.Rt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4860,-1,-1,-1,-1,-1,4995,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4887,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4914,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4941,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4968,-1,-1,-1,-1,-1,-1,-1,ot.G<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5022,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5049,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5076,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5103,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.V<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5157,-1,-1,-1,5373,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5427,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5184,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5211,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5238,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5265,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5292,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5319,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5346,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.W<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5400,-1,-1,-1,1+(rt.Nt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5454,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5481,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Gt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5535,-1,-1,-1,-1,-1,-1,-1,-1,-1,5562,-1,-1,-1,-1,5697,5751,-1,-1,-1,-1,ot.J<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5589,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5616,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5643,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5670,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.Y<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5724,-1,-1,-1,-1,-1,-1,ot.X<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5778,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5805,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5832,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5859,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5886,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5913,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.Z<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5967,-1,-1,6345,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5994,-1,-1,-1,-1,-1,6129,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6021,-1,-1,-1,-1,-1,6048,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6075,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6102,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.K<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6156,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6183,-1,-1,-1,-1,-1,-1,-1,-1,-1,6318,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6210,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6237,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6264,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6291,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.tt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.et<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6426,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.nt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6507,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6534,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6696,-1,-1,6831,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6561,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6588,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6615,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6642,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6669,-1,ot.it<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6723,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6750,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6777,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6804,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.ot<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6858,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6885,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6912,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Ct<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6966,-1,-1,-1,7182,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7236,7371,-1,7479,-1,7614,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6993,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7020,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7047,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7074,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7101,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7128,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7155,-1,-1,-1,-1,-1,-1,-1,ot.rt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7209,-1,-1,-1,-1,-1,-1,ot.st<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7263,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7290,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7317,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7344,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.ct<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7398,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7425,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7452,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Lt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7506,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7533,-1,-1,-1,-1,-1,-1,-1,-1,-1,7560,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7587,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Ft<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7641,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7668,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7695,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7722,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.lt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7776,-1,-1,-1,-1,-1,-1,-1,-1,-1,7938,-1,-1,-1,-1,-1,-1,8046,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7803,-1,-1,-1,-1,-1,-1,-1,-1,7857,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7830,-1,-1,-1,-1,-1,-1,-1,1+(rt.Mt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7884,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7911,-1,-1,-1,1+(rt.Tt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7965,-1,-1,-1,8019,-1,-1,-1,-1,-1,-1,7992,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Vt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.It<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8073,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8100,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.ut<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8127,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8154,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Xt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8208,-1,-1,-1,-1,8343,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8235,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8262,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8289,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8316,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.ht<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8370,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8397,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8424,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,ot.ft<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8532,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8505,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Ot<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8559,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8586,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Zt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8640,8748,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8667,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8694,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8721,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Pt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8775,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8802,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.jt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8856,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8883,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8910,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8937,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(rt.Ut<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var Mt,Lt;function zt(t){const e=t.identifierRole;return e===Mt.TopLevelDeclaration||e===Mt.FunctionScopedDeclaration||e===Mt.BlockScopedDeclaration||e===Mt.ObjectShorthandTopLevelDeclaration||e===Mt.ObjectShorthandFunctionScopedDeclaration||e===Mt.ObjectShorthandBlockScopedDeclaration}function Bt(t){const e=t.identifierRole;return e===Mt.FunctionScopedDeclaration||e===Mt.BlockScopedDeclaration||e===Mt.ObjectShorthandFunctionScopedDeclaration||e===Mt.ObjectShorthandBlockScopedDeclaration}function Ht(t){const e=t.identifierRole;return e===Mt.TopLevelDeclaration||e===Mt.ObjectShorthandTopLevelDeclaration||e===Mt.ImportDeclaration}function qt(t){const e=t.identifierRole;return e===Mt.TopLevelDeclaration||e===Mt.BlockScopedDeclaration||e===Mt.ObjectShorthandTopLevelDeclaration||e===Mt.ObjectShorthandBlockScopedDeclaration}function Ut(t){const e=t.identifierRole;return e===Mt.FunctionScopedDeclaration||e===Mt.ObjectShorthandFunctionScopedDeclaration}function Gt(t){return t.identifierRole===Mt.ObjectShorthandTopLevelDeclaration||t.identifierRole===Mt.ObjectShorthandBlockScopedDeclaration||t.identifierRole===Mt.ObjectShorthandFunctionScopedDeclaration}!function(t){t[t.Access=0]="Access",t[t.ExportAccess=1]="ExportAccess",t[t.TopLevelDeclaration=2]="TopLevelDeclaration",t[t.FunctionScopedDeclaration=3]="FunctionScopedDeclaration",t[t.BlockScopedDeclaration=4]="BlockScopedDeclaration",t[t.ObjectShorthandTopLevelDeclaration=5]="ObjectShorthandTopLevelDeclaration",t[t.ObjectShorthandFunctionScopedDeclaration=6]="ObjectShorthandFunctionScopedDeclaration",t[t.ObjectShorthandBlockScopedDeclaration=7]="ObjectShorthandBlockScopedDeclaration",t[t.ObjectShorthand=8]="ObjectShorthand",t[t.ImportDeclaration=9]="ImportDeclaration",t[t.ObjectKey=10]="ObjectKey",t[t.ImportAccess=11]="ImportAccess"}(Mt||(Mt={})),function(t){t[t.NoChildren=0]="NoChildren",t[t.OneChild=1]="OneChild",t[t.StaticChildren=2]="StaticChildren",t[t.KeyAfterPropSpread=3]="KeyAfterPropSpread"}(Lt||(Lt={}));class Vt{constructor(){this.type=pt.type,this.contextualKeyword=pt.contextualKeyword,this.start=pt.start,this.end=pt.end,this.scopeDepth=pt.scopeDepth,this.isType=pt.isType,this.identifierRole=null,this.jsxRole=null,this.shadowsGlobal=!1,this.isAsyncOperation=!1,this.contextId=null,this.rhsEndIndex=null,this.isExpression=!1,this.numNullishCoalesceStarts=0,this.numNullishCoalesceEnds=0,this.isOptionalChainStart=!1,this.isOptionalChainEnd=!1,this.subscriptStartIndex=null,this.nullishStartIndex=null}}function Wt(){pt.tokens.push(new Vt),se()}function Jt(){pt.tokens.push(new Vt),pt.start=pt.pos,function(){for(;;){if(pt.pos>=ft.length)return void Tt("Unterminated template");const t=ft.charCodeAt(pt.pos);if(t===st.graveAccent||t===st.dollarSign&&ft.charCodeAt(pt.pos+1)===st.leftCurlyBrace)return pt.pos===pt.start&&Qt(rt.template)?t===st.dollarSign?(pt.pos+=2,void de(rt.dollarBraceL)):(++pt.pos,void de(rt.backQuote)):void de(rt.template);t===st.backslash&&pt.pos++,pt.pos++}}()}function Yt(t){for(let n=pt.tokens.length-t;n<pt.tokens.length;n++)pt.tokens[n].isType=!0;const e=pt.isType;return pt.isType=!0,e}function Xt(t){pt.isType=t}function Zt(t){return!!Qt(t)&&(Wt(),!0)}function Kt(t){const e=pt.isType;pt.isType=!0,Zt(t),pt.isType=e}function Qt(t){return pt.type===t}function te(){const t=pt.snapshot();Wt();const e=pt.type;return pt.restoreFromSnapshot(t),e}class ee{constructor(t,e){this.type=t,this.contextualKeyword=e}}function ne(){const t=pt.snapshot();Wt();const e=pt.type,n=pt.contextualKeyword;return pt.restoreFromSnapshot(t),new ee(e,n)}function ie(){return oe(pt.pos)}function oe(t){return Ot.lastIndex=t,t+Ot.exec(ft)[0].length}function re(){return ft.charCodeAt(ie())}function se(){if(le(),pt.start=pt.pos,pt.pos>=ft.length){const t=pt.tokens;return t.length>=2&&t[t.length-1].start>=ft.length&&t[t.length-2].start>=ft.length&&Tt("Unexpectedly reached the end of input."),void de(rt.eof)}!function(t){jt[t]||t===st.backslash||t===st.atSign&&ft.charCodeAt(pt.pos+1)===st.atSign?function(){let t=0,e=0,n=pt.pos;for(;n<ft.length&&(e=ft.charCodeAt(n),!(e<st.lowercaseA||e>st.lowercaseZ));){const i=Nt[t+(e-st.lowercaseA)+1];if(-1===i)break;t=i,n++}const i=Nt[t];if(i>-1&&!Pt[e])return pt.pos=n,void(1&i?de(i>>>1):de(rt.name,i>>>1));for(;n<ft.length;){const t=ft.charCodeAt(n);if(Pt[t])n++;else if(t===st.backslash){if(n+=2,ft.charCodeAt(n)===st.leftCurlyBrace){for(;n<ft.length&&ft.charCodeAt(n)!==st.rightCurlyBrace;)n++;n++}}else{if(t!==st.atSign||ft.charCodeAt(n+1)!==st.atSign)break;n+=2}}pt.pos=n,de(rt.name)}():pe(t)}(ft.charCodeAt(pt.pos))}function ae(){for(;ft.charCodeAt(pt.pos)!==st.asterisk||ft.charCodeAt(pt.pos+1)!==st.slash;)if(pt.pos++,pt.pos>ft.length)return void Tt("Unterminated comment",pt.pos-2);pt.pos+=2}function ce(t){let e=ft.charCodeAt(pt.pos+=t);if(pt.pos<ft.length)for(;e!==st.lineFeed&&e!==st.carriageReturn&&e!==st.lineSeparator&&e!==st.paragraphSeparator&&++pt.pos<ft.length;)e=ft.charCodeAt(pt.pos)}function le(){for(;pt.pos<ft.length;){const t=ft.charCodeAt(pt.pos);switch(t){case st.carriageReturn:ft.charCodeAt(pt.pos+1)===st.lineFeed&&++pt.pos;case st.lineFeed:case st.lineSeparator:case st.paragraphSeparator:++pt.pos;break;case st.slash:switch(ft.charCodeAt(pt.pos+1)){case st.asterisk:pt.pos+=2,ae();break;case st.slash:ce(2);break;default:return}break;default:if(!Rt[t])return;++pt.pos}}}function de(t,e=ot.NONE){pt.end=pt.pos,pt.type=t,pt.contextualKeyword=e}function ue(){if(pt.isType)return void fe(rt.greaterThan,1);const t=ft.charCodeAt(pt.pos+1);if(t===st.greaterThan){const t=ft.charCodeAt(pt.pos+2)===st.greaterThan?3:2;return ft.charCodeAt(pt.pos+t)===st.equalsTo?void fe(rt.assign,t+1):void fe(rt.bitShiftR,t)}t===st.equalsTo?fe(rt.relationalOrEqual,2):fe(rt.greaterThan,1)}function he(){pt.type===rt.greaterThan&&(pt.pos-=1,ue())}function pe(t){switch(t){case st.numberSign:return++pt.pos,void de(rt.hash);case st.dot:return void function(){const t=ft.charCodeAt(pt.pos+1);t>=st.digit0&&t<=st.digit9?ve(!0):t===st.dot&&ft.charCodeAt(pt.pos+2)===st.dot?(pt.pos+=3,de(rt.ellipsis)):(++pt.pos,de(rt.dot))}();case st.leftParenthesis:return++pt.pos,void de(rt.parenL);case st.rightParenthesis:return++pt.pos,void de(rt.parenR);case st.semicolon:return++pt.pos,void de(rt.semi);case st.comma:return++pt.pos,void de(rt.comma);case st.leftSquareBracket:return++pt.pos,void de(rt.bracketL);case st.rightSquareBracket:return++pt.pos,void de(rt.bracketR);case st.leftCurlyBrace:return void(ht&&ft.charCodeAt(pt.pos+1)===st.verticalBar?fe(rt.braceBarL,2):(++pt.pos,de(rt.braceL)));case st.rightCurlyBrace:return++pt.pos,void de(rt.braceR);case st.colon:return void(ft.charCodeAt(pt.pos+1)===st.colon?fe(rt.doubleColon,2):(++pt.pos,de(rt.colon)));case st.questionMark:return void function(){const t=ft.charCodeAt(pt.pos+1),e=ft.charCodeAt(pt.pos+2);t!==st.questionMark||ht&&pt.isType?t!==st.dot||e>=st.digit0&&e<=st.digit9?(++pt.pos,de(rt.question)):(pt.pos+=2,de(rt.questionDot)):e===st.equalsTo?fe(rt.assign,3):fe(rt.nullishCoalescing,2)}();case st.atSign:return++pt.pos,void de(rt.at);case st.graveAccent:return++pt.pos,void de(rt.backQuote);case st.digit0:{const t=ft.charCodeAt(pt.pos+1);if(t===st.lowercaseX||t===st.uppercaseX||t===st.lowercaseO||t===st.uppercaseO||t===st.lowercaseB||t===st.uppercaseB)return void function(){for(pt.pos+=2;;){const t=ft.charCodeAt(pt.pos);if(!(t>=st.digit0&&t<=st.digit9||t>=st.lowercaseA&&t<=st.lowercaseF||t>=st.uppercaseA&&t<=st.uppercaseF||t===st.underscore))break;pt.pos++}ft.charCodeAt(pt.pos)===st.lowercaseN?(++pt.pos,de(rt.bigint)):de(rt.num)}()}case st.digit1:case st.digit2:case st.digit3:case st.digit4:case st.digit5:case st.digit6:case st.digit7:case st.digit8:case st.digit9:return void ve(!1);case st.quotationMark:case st.apostrophe:return void function(t){for(pt.pos++;;){if(pt.pos>=ft.length)return void Tt("Unterminated string constant");const e=ft.charCodeAt(pt.pos);if(e===st.backslash)pt.pos++;else if(e===t)break;pt.pos++}pt.pos++,de(rt.string)}(t);case st.slash:return void(ft.charCodeAt(pt.pos+1)===st.equalsTo?fe(rt.assign,2):fe(rt.slash,1));case st.percentSign:case st.asterisk:return void function(t){let e=t===st.asterisk?rt.star:rt.modulo,n=1,i=ft.charCodeAt(pt.pos+1);t===st.asterisk&&i===st.asterisk&&(n++,i=ft.charCodeAt(pt.pos+2),e=rt.exponent),i===st.equalsTo&&ft.charCodeAt(pt.pos+2)!==st.greaterThan&&(n++,e=rt.assign),fe(e,n)}(t);case st.verticalBar:case st.ampersand:return void function(t){const e=ft.charCodeAt(pt.pos+1);if(e!==t){if(t===st.verticalBar){if(e===st.greaterThan)return void fe(rt.pipeline,2);if(e===st.rightCurlyBrace&&ht)return void fe(rt.braceBarR,2)}e!==st.equalsTo?fe(t===st.verticalBar?rt.bitwiseOR:rt.bitwiseAND,1):fe(rt.assign,2)}else ft.charCodeAt(pt.pos+2)===st.equalsTo?fe(rt.assign,3):fe(t===st.verticalBar?rt.logicalOR:rt.logicalAND,2)}(t);case st.caret:return void(ft.charCodeAt(pt.pos+1)===st.equalsTo?fe(rt.assign,2):fe(rt.bitwiseXOR,1));case st.plusSign:case st.dash:return void function(t){const e=ft.charCodeAt(pt.pos+1);e!==t?e===st.equalsTo?fe(rt.assign,2):fe(t===st.plusSign?rt.plus:rt.minus,1):fe(rt.preIncDec,2)}(t);case st.lessThan:return void function(){const t=ft.charCodeAt(pt.pos+1);if(t===st.lessThan)return ft.charCodeAt(pt.pos+2)===st.equalsTo?void fe(rt.assign,3):void(pt.isType?fe(rt.lessThan,1):fe(rt.bitShiftL,2));t===st.equalsTo?fe(rt.relationalOrEqual,2):fe(rt.lessThan,1)}();case st.greaterThan:return void ue();case st.equalsTo:case st.exclamationMark:return void function(t){const e=ft.charCodeAt(pt.pos+1);if(e!==st.equalsTo)return t===st.equalsTo&&e===st.greaterThan?(pt.pos+=2,void de(rt.arrow)):void fe(t===st.equalsTo?rt.eq:rt.bang,1);fe(rt.equality,ft.charCodeAt(pt.pos+2)===st.equalsTo?3:2)}(t);case st.tilde:return void fe(rt.tilde,1)}Tt(`Unexpected character '${String.fromCharCode(t)}'`,pt.pos)}function fe(t,e){pt.pos+=e,de(t)}function me(){for(;;){const t=ft.charCodeAt(pt.pos);if(!(t>=st.digit0&&t<=st.digit9||t===st.underscore))break;pt.pos++}}function ve(t){let e=!1,n=!1;t||me();let i=ft.charCodeAt(pt.pos);i===st.dot&&(++pt.pos,me(),i=ft.charCodeAt(pt.pos)),i!==st.uppercaseE&&i!==st.lowercaseE||(i=ft.charCodeAt(++pt.pos),i!==st.plusSign&&i!==st.dash||++pt.pos,me(),i=ft.charCodeAt(pt.pos)),i===st.lowercaseN?(++pt.pos,e=!0):i===st.lowercaseM&&(++pt.pos,n=!0),de(e?rt.bigint:n?rt.decimal:rt.num)}function ge(t,e=t.currentIndex()){let n=e+1;if(be(t,n)){const i=t.identifierNameAtIndex(e);return{isType:!1,leftName:i,rightName:i,endIndex:n}}if(n++,be(t,n))return{isType:!0,leftName:null,rightName:null,endIndex:n};if(n++,be(t,n))return{isType:!1,leftName:t.identifierNameAtIndex(e),rightName:t.identifierNameAtIndex(e+2),endIndex:n};if(n++,be(t,n))return{isType:!0,leftName:null,rightName:null,endIndex:n};throw new Error(`Unexpected import/export specifier at ${e}`)}function be(t,e){const n=t.tokens[e];return n.type===rt.braceR||n.type===rt.comma}const ye=new Map([["quot",'"'],["amp","&"],["apos","'"],["lt","<"],["gt",">"],["nbsp"," "],["iexcl","¡"],["cent","¢"],["pound","£"],["curren","¤"],["yen","¥"],["brvbar","¦"],["sect","§"],["uml","¨"],["copy","©"],["ordf","ª"],["laquo","«"],["not","¬"],["shy","­"],["reg","®"],["macr","¯"],["deg","°"],["plusmn","±"],["sup2","²"],["sup3","³"],["acute","´"],["micro","µ"],["para","¶"],["middot","·"],["cedil","¸"],["sup1","¹"],["ordm","º"],["raquo","»"],["frac14","¼"],["frac12","½"],["frac34","¾"],["iquest","¿"],["Agrave","À"],["Aacute","Á"],["Acirc","Â"],["Atilde","Ã"],["Auml","Ä"],["Aring","Å"],["AElig","Æ"],["Ccedil","Ç"],["Egrave","È"],["Eacute","É"],["Ecirc","Ê"],["Euml","Ë"],["Igrave","Ì"],["Iacute","Í"],["Icirc","Î"],["Iuml","Ï"],["ETH","Ð"],["Ntilde","Ñ"],["Ograve","Ò"],["Oacute","Ó"],["Ocirc","Ô"],["Otilde","Õ"],["Ouml","Ö"],["times","×"],["Oslash","Ø"],["Ugrave","Ù"],["Uacute","Ú"],["Ucirc","Û"],["Uuml","Ü"],["Yacute","Ý"],["THORN","Þ"],["szlig","ß"],["agrave","à"],["aacute","á"],["acirc","â"],["atilde","ã"],["auml","ä"],["aring","å"],["aelig","æ"],["ccedil","ç"],["egrave","è"],["eacute","é"],["ecirc","ê"],["euml","ë"],["igrave","ì"],["iacute","í"],["icirc","î"],["iuml","ï"],["eth","ð"],["ntilde","ñ"],["ograve","ò"],["oacute","ó"],["ocirc","ô"],["otilde","õ"],["ouml","ö"],["divide","÷"],["oslash","ø"],["ugrave","ù"],["uacute","ú"],["ucirc","û"],["uuml","ü"],["yacute","ý"],["thorn","þ"],["yuml","ÿ"],["OElig","Œ"],["oelig","œ"],["Scaron","Š"],["scaron","š"],["Yuml","Ÿ"],["fnof","ƒ"],["circ","ˆ"],["tilde","˜"],["Alpha","Α"],["Beta","Β"],["Gamma","Γ"],["Delta","Δ"],["Epsilon","Ε"],["Zeta","Ζ"],["Eta","Η"],["Theta","Θ"],["Iota","Ι"],["Kappa","Κ"],["Lambda","Λ"],["Mu","Μ"],["Nu","Ν"],["Xi","Ξ"],["Omicron","Ο"],["Pi","Π"],["Rho","Ρ"],["Sigma","Σ"],["Tau","Τ"],["Upsilon","Υ"],["Phi","Φ"],["Chi","Χ"],["Psi","Ψ"],["Omega","Ω"],["alpha","α"],["beta","β"],["gamma","γ"],["delta","δ"],["epsilon","ε"],["zeta","ζ"],["eta","η"],["theta","θ"],["iota","ι"],["kappa","κ"],["lambda","λ"],["mu","μ"],["nu","ν"],["xi","ξ"],["omicron","ο"],["pi","π"],["rho","ρ"],["sigmaf","ς"],["sigma","σ"],["tau","τ"],["upsilon","υ"],["phi","φ"],["chi","χ"],["psi","ψ"],["omega","ω"],["thetasym","ϑ"],["upsih","ϒ"],["piv","ϖ"],["ensp"," "],["emsp"," "],["thinsp"," "],["zwnj","‌"],["zwj","‍"],["lrm","‎"],["rlm","‏"],["ndash","–"],["mdash","—"],["lsquo","‘"],["rsquo","’"],["sbquo","‚"],["ldquo","“"],["rdquo","”"],["bdquo","„"],["dagger","†"],["Dagger","‡"],["bull","•"],["hellip","…"],["permil","‰"],["prime","′"],["Prime","″"],["lsaquo","‹"],["rsaquo","›"],["oline","‾"],["frasl","⁄"],["euro","€"],["image","ℑ"],["weierp","℘"],["real","ℜ"],["trade","™"],["alefsym","ℵ"],["larr","←"],["uarr","↑"],["rarr","→"],["darr","↓"],["harr","↔"],["crarr","↵"],["lArr","⇐"],["uArr","⇑"],["rArr","⇒"],["dArr","⇓"],["hArr","⇔"],["forall","∀"],["part","∂"],["exist","∃"],["empty","∅"],["nabla","∇"],["isin","∈"],["notin","∉"],["ni","∋"],["prod","∏"],["sum","∑"],["minus","−"],["lowast","∗"],["radic","√"],["prop","∝"],["infin","∞"],["ang","∠"],["and","∧"],["or","∨"],["cap","∩"],["cup","∪"],["int","∫"],["there4","∴"],["sim","∼"],["cong","≅"],["asymp","≈"],["ne","≠"],["equiv","≡"],["le","≤"],["ge","≥"],["sub","⊂"],["sup","⊃"],["nsub","⊄"],["sube","⊆"],["supe","⊇"],["oplus","⊕"],["otimes","⊗"],["perp","⊥"],["sdot","⋅"],["lceil","⌈"],["rceil","⌉"],["lfloor","⌊"],["rfloor","⌋"],["lang","〈"],["rang","〉"],["loz","◊"],["spades","♠"],["clubs","♣"],["hearts","♥"],["diams","♦"]]);function ke(t){const[e,n]=xe(t.jsxPragma||"React.createElement"),[i,o]=xe(t.jsxFragmentPragma||"React.Fragment");return{base:e,suffix:n,fragmentBase:i,fragmentSuffix:o}}function xe(t){let e=t.indexOf(".");return-1===e&&(e=t.length),[t.slice(0,e),t.slice(e)]}class we{getPrefixCode(){return""}getHoistedCode(){return""}getSuffixCode(){return""}}class $e extends we{Qt(){this.lastLineNumber=1}te(){this.lastIndex=0}ee(){this.filenameVarName=null}ne(){this.esmAutomaticImportNameResolutions={}}ie(){this.cjsAutomaticModuleNameResolutions={}}constructor(t,e,n,i,o){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.nameManager=i,this.options=o,$e.prototype.Qt.call(this),$e.prototype.te.call(this),$e.prototype.ee.call(this),$e.prototype.ne.call(this),$e.prototype.ie.call(this),this.jsxPragmaInfo=ke(o),this.isAutomaticRuntime="automatic"===o.jsxRuntime,this.jsxImportSource=o.jsxImportSource||"react"}process(){return!!this.tokens.matches1(rt.jsxTagStart)&&(this.processJSXTag(),!0)}getPrefixCode(){let t="";if(this.filenameVarName&&(t+=`const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath||"")};`),this.isAutomaticRuntime)if(this.importProcessor)for(const[e,n]of Object.entries(this.cjsAutomaticModuleNameResolutions))t+=`var ${n} = require("${e}");`;else{const{createElement:e,...n}=this.esmAutomaticImportNameResolutions;e&&(t+=`import {createElement as ${e}} from "${this.jsxImportSource}";`);const i=Object.entries(n).map(([t,e])=>`${t} as ${e}`).join(", ");i&&(t+=`import {${i}} from "${this.jsxImportSource+(this.options.production?"/jsx-runtime":"/jsx-dev-runtime")}";`)}return t}processJSXTag(){const{jsxRole:t,start:e}=this.tokens.currentToken(),n=this.options.production?null:this.getElementLocationCode(e);this.isAutomaticRuntime&&t!==Lt.KeyAfterPropSpread?this.transformTagToJSXFunc(n,t):this.transformTagToCreateElement(n)}getElementLocationCode(t){return`lineNumber: ${this.getLineNumberForIndex(t)}`}getLineNumberForIndex(t){const e=this.tokens.code;for(;this.lastIndex<t&&this.lastIndex<e.length;)"\n"===e[this.lastIndex]&&this.lastLineNumber++,this.lastIndex++;return this.lastLineNumber}transformTagToJSXFunc(t,e){const n=e===Lt.StaticChildren;this.tokens.replaceToken(this.getJSXFuncInvocationCode(n));let i=null;if(this.tokens.matches1(rt.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, {`),this.processAutomaticChildrenAndEndProps(e);else{if(this.processTagIntro(),this.tokens.appendCode(", {"),i=this.processProps(!0),this.tokens.matches2(rt.slash,rt.jsxTagEnd))this.tokens.appendCode("}");else{if(!this.tokens.matches1(rt.jsxTagEnd))throw new Error("Expected either /> or > at the end of the tag.");this.tokens.removeToken(),this.processAutomaticChildrenAndEndProps(e)}i&&this.tokens.appendCode(`, ${i}`)}for(this.options.production||(null===i&&this.tokens.appendCode(", void 0"),this.tokens.appendCode(`, ${n}, ${this.getDevSource(t)}, this`)),this.tokens.removeInitialToken();!this.tokens.matches1(rt.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}transformTagToCreateElement(t){if(this.tokens.replaceToken(this.getCreateElementInvocationCode()),this.tokens.matches1(rt.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, null`),this.processChildren(!0);else if(this.processTagIntro(),this.processPropsObjectWithDevInfo(t),this.tokens.matches2(rt.slash,rt.jsxTagEnd));else{if(!this.tokens.matches1(rt.jsxTagEnd))throw new Error("Expected either /> or > at the end of the tag.");this.tokens.removeToken(),this.processChildren(!0)}for(this.tokens.removeInitialToken();!this.tokens.matches1(rt.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}getJSXFuncInvocationCode(t){return this.options.production?this.claimAutoImportedFuncInvocation(t?"jsxs":"jsx","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsxDEV","/jsx-dev-runtime")}getCreateElementInvocationCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedFuncInvocation("createElement","");{const{jsxPragmaInfo:t}=this;return`${this.importProcessor&&this.importProcessor.getIdentifierReplacement(t.base)||t.base}${t.suffix}(`}}getFragmentCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedName("Fragment",this.options.production?"/jsx-runtime":"/jsx-dev-runtime");{const{jsxPragmaInfo:t}=this;return(this.importProcessor&&this.importProcessor.getIdentifierReplacement(t.fragmentBase)||t.fragmentBase)+t.fragmentSuffix}}claimAutoImportedFuncInvocation(t,e){const n=this.claimAutoImportedName(t,e);return this.importProcessor?`${n}.call(void 0, `:`${n}(`}claimAutoImportedName(t,e){if(this.importProcessor){const n=this.jsxImportSource+e;return this.cjsAutomaticModuleNameResolutions[n]||(this.cjsAutomaticModuleNameResolutions[n]=this.importProcessor.getFreeIdentifierForPath(n)),`${this.cjsAutomaticModuleNameResolutions[n]}.${t}`}return this.esmAutomaticImportNameResolutions[t]||(this.esmAutomaticImportNameResolutions[t]=this.nameManager.claimFreeName(`_${t}`)),this.esmAutomaticImportNameResolutions[t]}processTagIntro(){let t=this.tokens.currentIndex()+1;for(;this.tokens.tokens[t].isType||!this.tokens.matches2AtIndex(t-1,rt.jsxName,rt.jsxName)&&!this.tokens.matches2AtIndex(t-1,rt.greaterThan,rt.jsxName)&&!this.tokens.matches1AtIndex(t,rt.braceL)&&!this.tokens.matches1AtIndex(t,rt.jsxTagEnd)&&!this.tokens.matches2AtIndex(t,rt.slash,rt.jsxTagEnd);)t++;if(t===this.tokens.currentIndex()+1){const t=this.tokens.identifierName();Se(t)&&this.tokens.replaceToken(`'${t}'`)}for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken()}processPropsObjectWithDevInfo(t){const e=this.options.production?"":`__self: this, __source: ${this.getDevSource(t)}`;this.tokens.matches1(rt.jsxName)||this.tokens.matches1(rt.braceL)?(this.tokens.appendCode(", {"),this.processProps(!1),this.tokens.appendCode(e?` ${e}}`:"}")):this.tokens.appendCode(e?`, {${e}}`:", null")}processProps(t){let e=null;for(;;){if(this.tokens.matches2(rt.jsxName,rt.eq)){const n=this.tokens.identifierName();if(t&&"key"===n){null!==e&&this.tokens.appendCode(e.replace(/[^\n]/g,"")),this.tokens.removeToken(),this.tokens.removeToken();const t=this.tokens.snapshot();this.processPropValue(),e=this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(t);continue}this.processPropName(n),this.tokens.replaceToken(": "),this.processPropValue()}else if(this.tokens.matches1(rt.jsxName)){const t=this.tokens.identifierName();this.processPropName(t),this.tokens.appendCode(": true")}else{if(!this.tokens.matches1(rt.braceL))break;this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")}this.tokens.appendCode(",")}return e}processPropName(t){t.includes("-")?this.tokens.replaceToken(`'${t}'`):this.tokens.copyToken()}processPropValue(){this.tokens.matches1(rt.braceL)?(this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")):this.tokens.matches1(rt.jsxTagStart)?this.processJSXTag():this.processStringPropValue()}processStringPropValue(){const t=this.tokens.currentToken(),e=this.tokens.code.slice(t.start+1,t.end-1),n=Ae(e),i=function(t){let e="";for(let n=0;n<t.length;n++){const i=t[n];if("\n"===i)if(/\s/.test(t[n+1]))for(e+=" ";n<t.length&&/\s/.test(t[n+1]);)n++;else e+="\n";else if("&"===i){const{entity:i,newI:o}=Ee(t,n+1);e+=i,n=o-1}else e+=i}return JSON.stringify(e)}(e);this.tokens.replaceToken(i+n)}processAutomaticChildrenAndEndProps(t){t===Lt.StaticChildren?(this.tokens.appendCode(" children: ["),this.processChildren(!1),this.tokens.appendCode("]}")):(t===Lt.OneChild&&this.tokens.appendCode(" children: "),this.processChildren(!1),this.tokens.appendCode("}"))}processChildren(t){let e=t;for(;;){if(this.tokens.matches2(rt.jsxTagStart,rt.slash))return;let t=!1;if(this.tokens.matches1(rt.braceL))this.tokens.matches2(rt.braceL,rt.braceR)?(this.tokens.replaceToken(""),this.tokens.replaceToken("")):(this.tokens.replaceToken(e?", ":""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken(""),t=!0);else if(this.tokens.matches1(rt.jsxTagStart))this.tokens.appendCode(e?", ":""),this.processJSXTag(),t=!0;else{if(!this.tokens.matches1(rt.jsxText)&&!this.tokens.matches1(rt.jsxEmptyText))throw new Error("Unexpected token when processing JSX children.");t=this.processChildTextElement(e)}t&&(e=!0)}}processChildTextElement(t){const e=this.tokens.currentToken(),n=this.tokens.code.slice(e.start,e.end),i=Ae(n),o=function(t){let e="",n="",i=!1,o=!1;for(let r=0;r<t.length;r++){const s=t[r];if(" "===s||"\t"===s||"\r"===s)i||(n+=s);else if("\n"===s)n="",i=!0;else{if(o&&i&&(e+=" "),e+=n,n="","&"===s){const{entity:n,newI:i}=Ee(t,r+1);r=i-1,e+=n}else e+=s;o=!0,i=!1}}return i||(e+=n),JSON.stringify(e)}(n);return'""'===o?(this.tokens.replaceToken(i),!1):(this.tokens.replaceToken(`${t?", ":""}${o}${i}`),!0)}getDevSource(t){return`{fileName: ${this.getFilenameVarName()}, ${t}}`}getFilenameVarName(){return this.filenameVarName||(this.filenameVarName=this.nameManager.claimFreeName("_jsxFileName")),this.filenameVarName}}function Se(t){const e=t.charCodeAt(0);return e>=st.lowercaseA&&e<=st.lowercaseZ}function Ae(t){let e=0,n=0;for(const i of t)"\n"===i?(e++,n=0):" "===i&&n++;return"\n".repeat(e)+" ".repeat(n)}function Ee(t,e){let n,i="",o=0,r=e;if("#"===t[r]){let e,i=10;if(r++,"x"===t[r])for(i=16,r++,e=r;r<t.length&&Ce(t.charCodeAt(r));)r++;else for(e=r;r<t.length&&_e(t.charCodeAt(r));)r++;if(";"===t[r]){const o=t.slice(e,r);o&&(r++,n=String.fromCodePoint(parseInt(o,i)))}}else for(;r<t.length&&o++<10;){const e=t[r];if(r++,";"===e){n=ye.get(i);break}i+=e}return n?{entity:n,newI:r}:{entity:"&",newI:e}}function _e(t){return t>=st.digit0&&t<=st.digit9}function Ce(t){return t>=st.digit0&&t<=st.digit9||t>=st.lowercaseA&&t<=st.lowercaseF||t>=st.uppercaseA&&t<=st.uppercaseF}function Fe(t,e){const n=ke(e),i=new Set;for(let o=0;o<t.tokens.length;o++){const e=t.tokens[o];e.type!==rt.name||e.isType||e.identifierRole!==Mt.Access&&e.identifierRole!==Mt.ObjectShorthand&&e.identifierRole!==Mt.ExportAccess||e.shadowsGlobal||i.add(t.identifierNameForToken(e)),e.type===rt.jsxTagStart&&i.add(n.base),e.type===rt.jsxTagStart&&o+1<t.tokens.length&&t.tokens[o+1].type===rt.jsxTagEnd&&(i.add(n.base),i.add(n.fragmentBase)),e.type===rt.jsxName&&e.identifierRole===Mt.Access&&(Se(t.identifierNameForToken(e))&&t.tokens[o+1].type!==rt.dot||i.add(t.identifierNameForToken(e)))}return i}class Te{Qt(){this.nonTypeIdentifiers=new Set}te(){this.importInfoByPath=new Map}ee(){this.importsToReplace=new Map}ne(){this.identifierReplacements=new Map}ie(){this.exportBindingsByLocalName=new Map}constructor(t,e,n,i,o,r,s){this.nameManager=t,this.tokens=e,this.enableLegacyTypeScriptModuleInterop=n,this.options=i,this.isTypeScriptTransformEnabled=o,this.keepUnusedImports=r,this.helperManager=s,Te.prototype.Qt.call(this),Te.prototype.te.call(this),Te.prototype.ee.call(this),Te.prototype.ne.call(this),Te.prototype.ie.call(this)}preprocessTokens(){for(let t=0;t<this.tokens.tokens.length;t++)this.tokens.matches1AtIndex(t,rt.qt)&&!this.tokens.matches3AtIndex(t,rt.qt,rt.name,rt.eq)&&this.preprocessImportAtIndex(t),this.tokens.matches1AtIndex(t,rt.Ht)&&!this.tokens.matches2AtIndex(t,rt.Ht,rt.eq)&&this.preprocessExportAtIndex(t);this.generateImportReplacements()}pruneTypeOnlyImports(){this.nonTypeIdentifiers=Fe(this.tokens,this.options);for(const[t,e]of this.importInfoByPath.entries())e.hasBareImport||e.hasStarExport||e.exportStarNames.length>0||e.namedExports.length>0||[...e.defaultNames,...e.wildcardNames,...e.namedImports.map(({localName:t})=>t)].every(t=>this.shouldAutomaticallyElideImportedName(t))&&this.importsToReplace.set(t,"")}shouldAutomaticallyElideImportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(t)}generateImportReplacements(){for(const[t,e]of this.importInfoByPath.entries()){const{defaultNames:n,wildcardNames:i,namedImports:o,namedExports:r,exportStarNames:s,hasStarExport:a}=e;if(0===n.length&&0===i.length&&0===o.length&&0===r.length&&0===s.length&&!a){this.importsToReplace.set(t,`require('${t}');`);continue}const c=this.getFreeIdentifierForPath(t);let l;l=this.enableLegacyTypeScriptModuleInterop?c:i.length>0?i[0]:this.getFreeIdentifierForPath(t);let d=`var ${c} = require('${t}');`;if(i.length>0)for(const t of i)d+=` var ${t} = ${this.enableLegacyTypeScriptModuleInterop?c:`${this.helperManager.getHelperName("interopRequireWildcard")}(${c})`};`;else s.length>0&&l!==c?d+=` var ${l} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${c});`:n.length>0&&l!==c&&(d+=` var ${l} = ${this.helperManager.getHelperName("interopRequireDefault")}(${c});`);for(const{importedName:t,localName:e}of r)d+=` ${this.helperManager.getHelperName("createNamedExportFrom")}(${c}, '${e}', '${t}');`;for(const t of s)d+=` exports.${t} = ${l};`;a&&(d+=` ${this.helperManager.getHelperName("createStarExport")}(${c});`),this.importsToReplace.set(t,d);for(const t of n)this.identifierReplacements.set(t,`${l}.default`);for(const{importedName:t,localName:e}of o)this.identifierReplacements.set(e,`${c}.${t}`)}}getFreeIdentifierForPath(t){const e=t.split("/"),n=e[e.length-1].replace(/\W/g,"");return this.nameManager.claimFreeName(`_${n}`)}preprocessImportAtIndex(t){const e=[],n=[],i=[];if(t++,(this.tokens.matchesContextualAtIndex(t,ot.ut)||this.tokens.matches1AtIndex(t,rt.Xt))&&!this.tokens.matches1AtIndex(t+1,rt.comma)&&!this.tokens.matchesContextualAtIndex(t+1,ot.j))return;if(this.tokens.matches1AtIndex(t,rt.parenL))return;if(this.tokens.matches1AtIndex(t,rt.name)&&(e.push(this.tokens.identifierNameAtIndex(t)),t++,this.tokens.matches1AtIndex(t,rt.comma)&&t++),this.tokens.matches1AtIndex(t,rt.star)&&(n.push(this.tokens.identifierNameAtIndex(t+=2)),t++),this.tokens.matches1AtIndex(t,rt.braceL)){const n=this.getNamedImports(t+1);t=n.newIndex;for(const t of n.namedImports)"default"===t.importedName?e.push(t.localName):i.push(t)}if(this.tokens.matchesContextualAtIndex(t,ot.j)&&t++,!this.tokens.matches1AtIndex(t,rt.string))throw new Error("Expected string token at the end of import statement.");const o=this.tokens.stringValueAtIndex(t),r=this.getImportInfo(o);r.defaultNames.push(...e),r.wildcardNames.push(...n),r.namedImports.push(...i),0===e.length&&0===n.length&&0===i.length&&(r.hasBareImport=!0)}preprocessExportAtIndex(t){if(this.tokens.matches2AtIndex(t,rt.Ht,rt.Ot)||this.tokens.matches2AtIndex(t,rt.Ht,rt.Rt)||this.tokens.matches2AtIndex(t,rt.Ht,rt.Dt))this.preprocessVarExportAtIndex(t);else if(this.tokens.matches2AtIndex(t,rt.Ht,rt.Et)||this.tokens.matches2AtIndex(t,rt.Ht,rt.zt)){const e=this.tokens.identifierNameAtIndex(t+2);this.addExportBinding(e,e)}else if(this.tokens.matches3AtIndex(t,rt.Ht,rt.name,rt.Et)){const e=this.tokens.identifierNameAtIndex(t+3);this.addExportBinding(e,e)}else this.tokens.matches2AtIndex(t,rt.Ht,rt.braceL)?this.preprocessNamedExportAtIndex(t):this.tokens.matches2AtIndex(t,rt.Ht,rt.star)&&this.preprocessExportStarAtIndex(t)}preprocessVarExportAtIndex(t){let e=0;for(let n=t+2;;n++)if(this.tokens.matches1AtIndex(n,rt.braceL)||this.tokens.matches1AtIndex(n,rt.dollarBraceL)||this.tokens.matches1AtIndex(n,rt.bracketL))e++;else if(this.tokens.matches1AtIndex(n,rt.braceR)||this.tokens.matches1AtIndex(n,rt.bracketR))e--;else{if(0===e&&!this.tokens.matches1AtIndex(n,rt.name))break;if(this.tokens.matches1AtIndex(1,rt.eq)){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");n=t-1}else if(zt(this.tokens.tokens[n])){const t=this.tokens.identifierNameAtIndex(n);this.identifierReplacements.set(t,`exports.${t}`)}}}preprocessNamedExportAtIndex(t){t+=2;const{newIndex:e,namedImports:n}=this.getNamedImports(t);if(!this.tokens.matchesContextualAtIndex(t=e,ot.j)){for(const{importedName:t,localName:e}of n)this.addExportBinding(t,e);return}if(t++,!this.tokens.matches1AtIndex(t,rt.string))throw new Error("Expected string token at the end of import statement.");const i=this.tokens.stringValueAtIndex(t);this.getImportInfo(i).namedExports.push(...n)}preprocessExportStarAtIndex(t){let e=null;if(this.tokens.matches3AtIndex(t,rt.Ht,rt.star,rt.A)?(e=this.tokens.identifierNameAtIndex(t+=3),t+=2):t+=3,!this.tokens.matches1AtIndex(t,rt.string))throw new Error("Expected string token at the end of star export statement.");const n=this.tokens.stringValueAtIndex(t),i=this.getImportInfo(n);null!==e?i.exportStarNames.push(e):i.hasStarExport=!0}getNamedImports(t){const e=[];for(;;){if(this.tokens.matches1AtIndex(t,rt.braceR)){t++;break}const n=ge(this.tokens,t);if(t=n.endIndex,n.isType||e.push({importedName:n.leftName,localName:n.rightName}),this.tokens.matches2AtIndex(t,rt.comma,rt.braceR)){t+=2;break}if(this.tokens.matches1AtIndex(t,rt.braceR)){t++;break}if(!this.tokens.matches1AtIndex(t,rt.comma))throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[t])}`);t++}return{newIndex:t,namedImports:e}}getImportInfo(t){const e=this.importInfoByPath.get(t);if(e)return e;const n={defaultNames:[],wildcardNames:[],namedImports:[],namedExports:[],hasBareImport:!1,exportStarNames:[],hasStarExport:!1};return this.importInfoByPath.set(t,n),n}addExportBinding(t,e){this.exportBindingsByLocalName.has(t)||this.exportBindingsByLocalName.set(t,[]),this.exportBindingsByLocalName.get(t).push(e)}claimImportCode(t){const e=this.importsToReplace.get(t);return this.importsToReplace.set(t,""),e||""}getIdentifierReplacement(t){return this.identifierReplacements.get(t)||null}resolveExportBinding(t){const e=this.exportBindingsByLocalName.get(t);return e&&0!==e.length?e.map(t=>`exports.${t}`).join(" = "):null}getGlobalNames(){return new Set([...this.identifierReplacements.keys(),...this.exportBindingsByLocalName.keys()])}}var Ie=",".charCodeAt(0),Oe=";".charCodeAt(0),Re=new Uint8Array(64),De=new Uint8Array(128);for(let Cs=0;Cs<64;Cs++){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(Cs);Re[Cs]=t,De[t]=Cs}function Pe(t,e,n){let i=e-n;i=i<0?-i<<1|1:i<<1;do{let e=31&i;i>>>=5,i>0&&(e|=32),t.write(Re[e])}while(i>0);return e}var je,Ne="undefined"!=typeof TextDecoder?new TextDecoder:"undefined"!=typeof Buffer?{decode:t=>Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString()}:{decode(t){let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}},Me=class{constructor(){this.pos=0,this.out="",this.buffer=new Uint8Array(16384)}write(t){const{buffer:e}=this;e[this.pos++]=t,16384===this.pos&&(this.out+=Ne.decode(e),this.pos=0)}flush(){const{buffer:t,out:e,pos:n}=this;return n>0?e+Ne.decode(t.subarray(0,n)):e}};function Le(t){const e=new Me;let n=0,i=0,o=0,r=0;for(let s=0;s<t.length;s++){const a=t[s];if(s>0&&e.write(Oe),0===a.length)continue;let c=0;for(let t=0;t<a.length;t++){const s=a[t];t>0&&e.write(Ie),c=Pe(e,s[0],c),1!==s.length&&(n=Pe(e,s[1],n),i=Pe(e,s[2],i),o=Pe(e,s[3],o),4!==s.length&&(r=Pe(e,s[4],r)))}}return e.flush()}je||(je=1);var ze=class{constructor(){this.he={__proto__:null},this.array=[]}},Be=class{constructor({file:t,sourceRoot:e}={}){this.pe=new ze,this.fe=new ze,this.me=[],this.ve=[],this.file=t,this.sourceRoot=e,this.ge=new ze}},He=(t,e,n,i,o,r,s,a)=>function(t,e,n,i,o,r,s){const{ve:a,fe:c,me:l}=e,d=function(t,e){for(let n=t.length;n<=e;n++)t[n]=[];return t[e]}(a,n),u=function(t,e){let n=t.length;for(let i=n-1;i>=0&&!(e>=t[i][0]);n=i--);return n}(d,i);if(!o){if(function(t,e){return 0===e||1===t[e-1].length}(d,u))return;return qe(d,u,[i])}const h=function(t,e){const n=function(t,e){return t.he[e]}(t,e);if(void 0!==n)return n;const{array:i,he:o}=t,r=i.push(e);return o[e]=r-1}(c,o);if(h===l.length&&(l[h]=null),!function(t,e,n,i,o){if(0===e)return!1;const r=t[e-1];return 1!==r.length&&n===r[1]&&i===r[2]&&o===r[3]&&-1===(5===r.length?r[4]:-1)}(d,u,h,r,s))return qe(d,u,[i,h,r,s])}(0,t,e,n,i,o,r);function qe(t,e,n){for(let i=t.length;i>e;i--)t[i]=t[i-1];t[e]=n}function Ue({code:t,mappings:e},n,i,o,r){const s=function(t,e){const n=new Array(e.length);let i=0,o=e[i].start,r=0;for(let s=0;s<t.length;s++)s===o&&(n[i]=o-r,i++,o=e[i].start),t.charCodeAt(s)===st.lineFeed&&(r=s+1);return n}(o,r),a=new Be({file:i.compiledFilename});let c=0,l=e[0];for(;void 0===l&&c<e.length-1;)c++,l=e[c];let d=0,u=0;l!==u&&He(a,d,0,n,d,0);for(let m=0;m<t.length;m++){if(m===l)for(He(a,d,l-u,n,d,s[c]);(l===m||void 0===l)&&c<e.length-1;)c++,l=e[c];t.charCodeAt(m)===st.lineFeed&&(d++,u=m+1,l!==u&&He(a,d,0,n,d,0))}const{sourceRoot:h,sourcesContent:p,...f}=function(t){const e=function(t){const{ve:e,fe:n,me:i,pe:o,ge:r}=t;return function(t){const{length:e}=t;let n=e;for(let i=n-1;i>=0&&!(t[i].length>0);n=i,i--);n<e&&(t.length=n)}(e),{version:3,file:t.file||void 0,names:o.array,sourceRoot:t.sourceRoot||void 0,sources:n.array,sourcesContent:i,mappings:e,ignoreList:r.array}}(t);return Object.assign({},e,{mappings:Le(e.mappings)})}(a);return f}const Ge={require:'\n    import {createRequire as CREATE_REQUIRE_NAME} from "module";\n    const require = CREATE_REQUIRE_NAME(import.meta.url);\n  ',interopRequireWildcard:"\n    function interopRequireWildcard(obj) {\n      if (obj && obj.__esModule) {\n        return obj;\n      } else {\n        var newObj = {};\n        if (obj != null) {\n          for (var key in obj) {\n            if (Object.prototype.hasOwnProperty.call(obj, key)) {\n              newObj[key] = obj[key];\n            }\n          }\n        }\n        newObj.default = obj;\n        return newObj;\n      }\n    }\n  ",interopRequireDefault:"\n    function interopRequireDefault(obj) {\n      return obj && obj.__esModule ? obj : { default: obj };\n    }\n  ",createNamedExportFrom:"\n    function createNamedExportFrom(obj, localName, importedName) {\n      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});\n    }\n  ",createStarExport:'\n    function createStarExport(obj) {\n      Object.keys(obj)\n        .filter((key) => key !== "default" && key !== "__esModule")\n        .forEach((key) => {\n          if (exports.hasOwnProperty(key)) {\n            return;\n          }\n          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});\n        });\n    }\n  ',nullishCoalesce:"\n    function nullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return rhsFn();\n      }\n    }\n  ",asyncNullishCoalesce:"\n    async function asyncNullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return await rhsFn();\n      }\n    }\n  ",optionalChain:"\n    function optionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",asyncOptionalChain:"\n    async function asyncOptionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = await fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = await fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",optionalChainDelete:"\n    function optionalChainDelete(ops) {\n      const result = OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  ",asyncOptionalChainDelete:"\n    async function asyncOptionalChainDelete(ops) {\n      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  "};class Ve{Qt(){this.helperNames={}}te(){this.createRequireName=null}constructor(t){this.nameManager=t,Ve.prototype.Qt.call(this),Ve.prototype.te.call(this)}getHelperName(t){let e=this.helperNames[t];return e||(e=this.nameManager.claimFreeName(`_${t}`),this.helperNames[t]=e,e)}emitHelpers(){let t="";this.helperNames.optionalChainDelete&&this.getHelperName("optionalChain"),this.helperNames.asyncOptionalChainDelete&&this.getHelperName("asyncOptionalChain");for(const[e,n]of Object.entries(Ge)){const i=this.helperNames[e];let o=n;"optionalChainDelete"===e?o=o.replace("OPTIONAL_CHAIN_NAME",this.helperNames.optionalChain):"asyncOptionalChainDelete"===e?o=o.replace("ASYNC_OPTIONAL_CHAIN_NAME",this.helperNames.asyncOptionalChain):"require"===e&&(null===this.createRequireName&&(this.createRequireName=this.nameManager.claimFreeName("_createRequire")),o=o.replace(/CREATE_REQUIRE_NAME/g,this.createRequireName)),i&&(t+=" ",t+=o.replace(e,i).replace(/\s+/g," ").trim())}return t}}function We(t,e,n){(function(t,e){for(const n of t.tokens)if(n.type===rt.name&&!n.isType&&Bt(n)&&e.has(t.identifierNameForToken(n)))return!0;return!1})(t,n)&&function(t,e,n){const i=[];let o=e.length-1;for(let r=t.tokens.length-1;;r--){for(;i.length>0&&i[i.length-1].startTokenIndex===r+1;)i.pop();for(;o>=0&&e[o].endTokenIndex===r+1;)i.push(e[o]),o--;if(r<0)break;const s=t.tokens[r],a=t.identifierNameForToken(s);if(i.length>1&&!s.isType&&s.type===rt.name&&n.has(a))if(qt(s))Je(i[i.length-1],t,a);else if(Ut(s)){let e=i.length-1;for(;e>0&&!i[e].isFunctionScope;)e--;if(e<0)throw new Error("Did not find parent function scope.");Je(i[e],t,a)}}if(i.length>0)throw new Error("Expected empty scope stack after processing file.")}(t,e,n)}function Je(t,e,n){for(let i=t.startTokenIndex;i<t.endTokenIndex;i++){const t=e.tokens[i];t.type!==rt.name&&t.type!==rt.jsxName||e.identifierNameForToken(t)!==n||(t.shadowsGlobal=!0)}}class Ye{Qt(){this.usedNames=new Set}constructor(t,e){Ye.prototype.Qt.call(this),this.usedNames=new Set(function(t,e){const n=[];for(const i of e)i.type===rt.name&&n.push(t.slice(i.start,i.end));return n}(t,e))}claimFreeName(t){const e=this.findFreeName(t);return this.usedNames.add(e),e}findFreeName(t){if(!this.usedNames.has(t))return t;let e=2;for(;this.usedNames.has(t+String(e));)e++;return t+String(e)}}var Xe,Ze,Ke,Qe={},tn={},en={};function nn(){if(Xe)return en;Xe=1;var t,e=en&&en.be||(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},t(e,n)},function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(en,"v",{value:!0}),en.DetailContext=en.NoopContext=en.VError=void 0;var n=function(t){function n(e,i){var o=t.call(this,i)||this;return o.path=e,Object.setPrototypeOf(o,n.prototype),o}return e(n,t),n}(Error);en.VError=n;var i=function(){function t(){}return t.prototype.fail=function(t,e,n){return!1},t.prototype.unionResolver=function(){return this},t.prototype.createContext=function(){return this},t.prototype.resolveUnion=function(t){},t}();en.NoopContext=i;var o=function(){function t(){this.ye=[""],this.ke=[null],this.xe=0}return t.prototype.fail=function(t,e,n){return this.ye.push(t),this.ke.push(e),this.xe+=n,!1},t.prototype.unionResolver=function(){return new r},t.prototype.resolveUnion=function(t){for(var e,n,i=null,o=0,r=t.contexts;o<r.length;o++){var s=r[o];(!i||s.xe>=i.xe)&&(i=s)}i&&i.xe>0&&((e=this.ye).push.apply(e,i.ye),(n=this.ke).push.apply(n,i.ke))},t.prototype.getError=function(t){for(var e=[],i=this.ye.length-1;i>=0;i--){var o=this.ye[i];t+="number"==typeof o?"["+o+"]":o?"."+o:"";var r=this.ke[i];r&&e.push(t+" "+r)}return new n(t,e.join("; "))},t.prototype.getErrorDetail=function(t){for(var e=[],n=this.ye.length-1;n>=0;n--){var i=this.ye[n];t+="number"==typeof i?"["+i+"]":i?"."+i:"";var o=this.ke[n];o&&e.push({path:t,message:o})}var r=null;for(n=e.length-1;n>=0;n--)r&&(e[n].nested=[r]),r=e[n];return r},t}();en.DetailContext=o;var r=function(){function t(){this.contexts=[]}return t.prototype.createContext=function(){var t=new o;return this.contexts.push(t),t},t}();return en}function on(){return Ze||(Ze=1,function(t){var e,n=tn&&tn.be||(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},e(t,n)},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(t,"v",{value:!0}),t.basicTypes=t.BasicType=t.TParamList=t.TParam=t.param=t.TFunc=t.func=t.TProp=t.TOptional=t.opt=t.TIface=t.iface=t.TEnumLiteral=t.enumlit=t.TEnumType=t.enumtype=t.TIntersection=t.intersection=t.TUnion=t.union=t.TTuple=t.tuple=t.TArray=t.array=t.TLiteral=t.lit=t.TName=t.name=t.TType=void 0;var i=nn(),o=function(){};function r(t){return"string"==typeof t?a(t):t}function s(t,e){var n=t[e];if(!n)throw new Error("Unknown type "+e);return n}function a(t){return new c(t)}t.TType=o,t.name=a;var c=function(t){function e(e){var n=t.call(this)||this;return n.name=e,n.we="is not a "+e,n}return n(e,t),e.prototype.getChecker=function(t,n,i){var o=this,r=s(t,this.name),a=r.getChecker(t,n,i);return r instanceof w||r instanceof e?a:function(t,e){return!!a(t,e)||e.fail(null,o.we,0)}},e}(o);t.TName=c,t.lit=function(t){return new l(t)};var l=function(t){function e(e){var n=t.call(this)||this;return n.value=e,n.name=JSON.stringify(e),n.we="is not "+n.name,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return t===n.value||e.fail(null,n.we,-1)}},e}(o);t.TLiteral=l,t.array=function(t){return new d(r(t))};var d=function(t){function e(e){var n=t.call(this)||this;return n.ttype=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttype.getChecker(t,e);return function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<t.length;i++)if(!n(t[i],e))return e.fail(i,null,1);return!0}},e}(o);t.TArray=d,t.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new u(t.map(function(t){return r(t)}))};var u=function(t){function e(e){var n=t.call(this)||this;return n.ttypes=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttypes.map(function(n){return n.getChecker(t,e)}),i=function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<n.length;i++)if(!n[i](t[i],e))return e.fail(i,null,1);return!0};return e?function(t,e){return!!i(t,e)&&(t.length<=n.length||e.fail(n.length,"is extraneous",2))}:i},e}(o);t.TTuple=u,t.union=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new h(t.map(function(t){return r(t)}))};var h=function(t){function e(e){var n=t.call(this)||this;n.ttypes=e;var i=e.map(function(t){return t instanceof c||t instanceof l?t.name:null}).filter(function(t){return t}),o=e.length-i.length;return i.length?(o>0&&i.push(o+" more"),n.we="is none of "+i.join(", ")):n.we="is none of "+o+" types",n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,i=this.ttypes.map(function(n){return n.getChecker(t,e)});return function(t,e){for(var o=e.unionResolver(),r=0;r<i.length;r++)if(i[r](t,o.createContext()))return!0;return e.resolveUnion(o),e.fail(null,n.we,0)}},e}(o);t.TUnion=h,t.intersection=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new p(t.map(function(t){return r(t)}))};var p=function(t){function e(e){var n=t.call(this)||this;return n.ttypes=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=new Set,i=this.ttypes.map(function(i){return i.getChecker(t,e,n)});return function(t,e){return!!i.every(function(n){return n(t,e)})||e.fail(null,null,0)}},e}(o);t.TIntersection=p,t.enumtype=function(t){return new f(t)};var f=function(t){function e(e){var n=t.call(this)||this;return n.members=e,n.validValues=new Set,n.we="is not a valid enum value",n.validValues=new Set(Object.keys(e).map(function(t){return e[t]})),n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return!!n.validValues.has(t)||e.fail(null,n.we,0)}},e}(o);t.TEnumType=f,t.enumlit=function(t,e){return new m(t,e)};var m=function(t){function e(e,n){var i=t.call(this)||this;return i.enumName=e,i.prop=n,i.we="is not "+e+"."+n,i}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,i=s(t,this.enumName);if(!(i instanceof f))throw new Error("Type "+this.enumName+" used in enumlit is not an enum type");var o=i.members[this.prop];if(!i.members.hasOwnProperty(this.prop))throw new Error("Unknown value "+this.enumName+"."+this.prop+" used in enumlit");return function(t,e){return t===o||e.fail(null,n.we,-1)}},e}(o);t.TEnumLiteral=m,t.iface=function(t,e){return new v(t,function(t){return Object.keys(t).map(function(e){return function(t,e){return e instanceof g?new b(t,e.ttype,!0):new b(t,r(e),!1)}(e,t[e])})}(e))};var v=function(t){function e(e,n){var i=t.call(this)||this;return i.bases=e,i.props=n,i.propSet=new Set(n.map(function(t){return t.name})),i}return n(e,t),e.prototype.getChecker=function(t,e,n){var o=this,r=this.bases.map(function(n){return s(t,n).getChecker(t,e)}),a=this.props.map(function(n){return n.ttype.getChecker(t,e)}),c=new i.NoopContext,l=this.props.map(function(t,e){return!t.isOpt&&!a[e](void 0,c)}),d=function(t,e){if("object"!=typeof t||null===t)return e.fail(null,"is not an object",0);for(var n=0;n<r.length;n++)if(!r[n](t,e))return!1;for(n=0;n<a.length;n++){var i=o.props[n].name,s=t[i];if(void 0===s){if(l[n])return e.fail(i,"is missing",1)}else if(!a[n](s,e))return e.fail(i,null,1)}return!0};if(!e)return d;var u=this.propSet;return n&&(this.propSet.forEach(function(t){return n.add(t)}),u=n),function(t,e){if(!d(t,e))return!1;for(var n in t)if(!u.has(n))return e.fail(n,"is extraneous",2);return!0}},e}(o);t.TIface=v,t.opt=function(t){return new g(r(t))};var g=function(t){function e(e){var n=t.call(this)||this;return n.ttype=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttype.getChecker(t,e);return function(t,e){return void 0===t||n(t,e)}},e}(o);t.TOptional=g;var b=function(t,e,n){this.name=t,this.ttype=e,this.isOpt=n};t.TProp=b,t.func=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new y(new x(e),r(t))};var y=function(t){function e(e,n){var i=t.call(this)||this;return i.paramList=e,i.result=n,i}return n(e,t),e.prototype.getChecker=function(t,e){return function(t,e){return"function"==typeof t||e.fail(null,"is not a function",0)}},e}(o);t.TFunc=y,t.param=function(t,e,n){return new k(t,r(e),Boolean(n))};var k=function(t,e,n){this.name=t,this.ttype=e,this.isOpt=n};t.TParam=k;var x=function(t){function e(e){var n=t.call(this)||this;return n.params=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,o=this.params.map(function(n){return n.ttype.getChecker(t,e)}),r=new i.NoopContext,s=this.params.map(function(t,e){return!t.isOpt&&!o[e](void 0,r)}),a=function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<o.length;i++){var r=n.params[i];if(void 0===t[i]){if(s[i])return e.fail(r.name,"is missing",1)}else if(!o[i](t[i],e))return e.fail(r.name,null,1)}return!0};return e?function(t,e){return!!a(t,e)&&(t.length<=o.length||e.fail(o.length,"is extraneous",2))}:a},e}(o);t.TParamList=x;var w=function(t){function e(e,n){var i=t.call(this)||this;return i.validator=e,i.message=n,i}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return!!n.validator(t)||e.fail(null,n.message,0)}},e}(o);t.BasicType=w,t.basicTypes={any:new w(function(t){return!0},"is invalid"),number:new w(function(t){return"number"==typeof t},"is not a number"),object:new w(function(t){return"object"==typeof t&&t},"is not an object"),boolean:new w(function(t){return"boolean"==typeof t},"is not a boolean"),string:new w(function(t){return"string"==typeof t},"is not a string"),symbol:new w(function(t){return"symbol"==typeof t},"is not a symbol"),void:new w(function(t){return null==t},"is not void"),undefined:new w(function(t){return void 0===t},"is not undefined"),null:new w(function(t){return null===t},"is not null"),never:new w(function(t){return!1},"is unexpected"),Date:new w(S("[object Date]"),"is not a Date"),RegExp:new w(S("[object RegExp]"),"is not a RegExp")};var $=Object.prototype.toString;function S(t){return function(e){return"object"==typeof e&&e&&$.call(e)===t}}"undefined"!=typeof Buffer&&(t.basicTypes.Buffer=new w(function(t){return Buffer.isBuffer(t)},"is not a Buffer"));for(var A=function(e){t.basicTypes[e.name]=new w(function(t){return t instanceof e},"is not a "+e.name)},E=0,_=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,ArrayBuffer];E<_.length;E++)A(_[E])}(tn)),tn}var rn=(Ke||(Ke=1,function(t){var e=Qe&&Qe.$e||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),o=0;for(e=0;e<n;e++)for(var r=arguments[e],s=0,a=r.length;s<a;s++,o++)i[o]=r[s];return i};Object.defineProperty(t,"v",{value:!0}),t.Checker=t.createCheckers=void 0;var n=on(),i=nn(),o=on();Object.defineProperty(t,"TArray",{enumerable:!0,get:function(){return o.TArray}}),Object.defineProperty(t,"TEnumType",{enumerable:!0,get:function(){return o.TEnumType}}),Object.defineProperty(t,"TEnumLiteral",{enumerable:!0,get:function(){return o.TEnumLiteral}}),Object.defineProperty(t,"TFunc",{enumerable:!0,get:function(){return o.TFunc}}),Object.defineProperty(t,"TIface",{enumerable:!0,get:function(){return o.TIface}}),Object.defineProperty(t,"TLiteral",{enumerable:!0,get:function(){return o.TLiteral}}),Object.defineProperty(t,"TName",{enumerable:!0,get:function(){return o.TName}}),Object.defineProperty(t,"TOptional",{enumerable:!0,get:function(){return o.TOptional}}),Object.defineProperty(t,"TParam",{enumerable:!0,get:function(){return o.TParam}}),Object.defineProperty(t,"TParamList",{enumerable:!0,get:function(){return o.TParamList}}),Object.defineProperty(t,"TProp",{enumerable:!0,get:function(){return o.TProp}}),Object.defineProperty(t,"TTuple",{enumerable:!0,get:function(){return o.TTuple}}),Object.defineProperty(t,"TType",{enumerable:!0,get:function(){return o.TType}}),Object.defineProperty(t,"TUnion",{enumerable:!0,get:function(){return o.TUnion}}),Object.defineProperty(t,"TIntersection",{enumerable:!0,get:function(){return o.TIntersection}}),Object.defineProperty(t,"array",{enumerable:!0,get:function(){return o.array}}),Object.defineProperty(t,"enumlit",{enumerable:!0,get:function(){return o.enumlit}}),Object.defineProperty(t,"enumtype",{enumerable:!0,get:function(){return o.enumtype}}),Object.defineProperty(t,"func",{enumerable:!0,get:function(){return o.func}}),Object.defineProperty(t,"iface",{enumerable:!0,get:function(){return o.iface}}),Object.defineProperty(t,"lit",{enumerable:!0,get:function(){return o.lit}}),Object.defineProperty(t,"name",{enumerable:!0,get:function(){return o.name}}),Object.defineProperty(t,"opt",{enumerable:!0,get:function(){return o.opt}}),Object.defineProperty(t,"param",{enumerable:!0,get:function(){return o.param}}),Object.defineProperty(t,"tuple",{enumerable:!0,get:function(){return o.tuple}}),Object.defineProperty(t,"union",{enumerable:!0,get:function(){return o.union}}),Object.defineProperty(t,"intersection",{enumerable:!0,get:function(){return o.intersection}}),Object.defineProperty(t,"BasicType",{enumerable:!0,get:function(){return o.BasicType}});var r=nn();Object.defineProperty(t,"VError",{enumerable:!0,get:function(){return r.VError}}),t.createCheckers=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var o=Object.assign.apply(Object,e([{},n.basicTypes],t)),r={},a=0,c=t;a<c.length;a++)for(var l=c[a],d=0,u=Object.keys(l);d<u.length;d++){var h=u[d];r[h]=new s(o,l[h])}return r};var s=function(){function t(t,e,i){if(void 0===i&&(i="value"),this.suite=t,this.ttype=e,this.Se=i,this.props=new Map,e instanceof n.TIface)for(var o=0,r=e.props;o<r.length;o++){var s=r[o];this.props.set(s.name,s.ttype)}this.checkerPlain=this.ttype.getChecker(t,!1),this.checkerStrict=this.ttype.getChecker(t,!0)}return t.prototype.setReportedPath=function(t){this.Se=t},t.prototype.check=function(t){return this.Ae(this.checkerPlain,t)},t.prototype.test=function(t){return this.checkerPlain(t,new i.NoopContext)},t.prototype.validate=function(t){return this.Ee(this.checkerPlain,t)},t.prototype.strictCheck=function(t){return this.Ae(this.checkerStrict,t)},t.prototype.strictTest=function(t){return this.checkerStrict(t,new i.NoopContext)},t.prototype.strictValidate=function(t){return this.Ee(this.checkerStrict,t)},t.prototype.getProp=function(e){var n=this.props.get(e);if(!n)throw new Error("Type has no property "+e);return new t(this.suite,n,this.Se+"."+e)},t.prototype.methodArgs=function(e){var n=this._e(e);return new t(this.suite,n.paramList)},t.prototype.methodResult=function(e){var n=this._e(e);return new t(this.suite,n.result)},t.prototype.getArgs=function(){if(!(this.ttype instanceof n.TFunc))throw new Error("getArgs() applied to non-function");return new t(this.suite,this.ttype.paramList)},t.prototype.getResult=function(){if(!(this.ttype instanceof n.TFunc))throw new Error("getResult() applied to non-function");return new t(this.suite,this.ttype.result)},t.prototype.getType=function(){return this.ttype},t.prototype.Ae=function(t,e){if(!t(e,new i.NoopContext)){var n=new i.DetailContext;throw t(e,n),n.getError(this.Se)}},t.prototype.Ee=function(t,e){if(t(e,new i.NoopContext))return null;var n=new i.DetailContext;return t(e,n),n.getErrorDetail(this.Se)},t.prototype._e=function(t){var e=this.props.get(t);if(!e)throw new Error("Type has no property "+t);if(!(e instanceof n.TFunc))throw new Error("Property "+t+" is not a method");return e},t}();t.Checker=s}(Qe)),Qe);const sn={Transform:rn.union(rn.lit("jsx"),rn.lit("typescript"),rn.lit("flow"),rn.lit("imports"),rn.lit("react-hot-loader"),rn.lit("jest")),SourceMapOptions:rn.iface([],{compiledFilename:"string"}),Options:rn.iface([],{transforms:rn.array("Transform"),disableESTransforms:rn.opt("boolean"),jsxRuntime:rn.opt(rn.union(rn.lit("classic"),rn.lit("automatic"),rn.lit("preserve"))),production:rn.opt("boolean"),jsxImportSource:rn.opt("string"),jsxPragma:rn.opt("string"),jsxFragmentPragma:rn.opt("string"),keepUnusedImports:rn.opt("boolean"),preserveDynamicImport:rn.opt("boolean"),injectCreateRequireForImportRequire:rn.opt("boolean"),enableLegacyTypeScriptModuleInterop:rn.opt("boolean"),enableLegacyBabel5ModuleInterop:rn.opt("boolean"),sourceMapOptions:rn.opt("SourceMapOptions"),filePath:rn.opt("string")})},{Options:an}=rn.createCheckers(sn);function cn(){Wt(),vi(!1)}function ln(t){Wt(),pn(t)}function dn(t){Vi(),hn(t)}function un(){Vi(),pt.tokens[pt.tokens.length-1].identifierRole=Mt.ImportDeclaration}function hn(t){let e;e=0===pt.scopeDepth?Mt.TopLevelDeclaration:t?Mt.BlockScopedDeclaration:Mt.FunctionScopedDeclaration,pt.tokens[pt.tokens.length-1].identifierRole=e}function pn(t){switch(pt.type){case rt.Mt:{const t=Yt(0);return Wt(),void Xt(t)}case rt.Ut:case rt.name:return pt.type=rt.name,void dn(t);case rt.bracketL:return Wt(),void fn(rt.bracketR,t,!0);case rt.braceL:return void Ni(!0,t);default:Tt()}}function fn(t,e,n=!1,i=!1,o=0){let r=!0,s=!1;const a=pt.tokens.length;for(;!Zt(t)&&!pt.error;)if(r?r=!1:(Ft(rt.comma),pt.tokens[pt.tokens.length-1].contextId=o,!s&&pt.tokens[a].isType&&(pt.tokens[pt.tokens.length-1].isType=!0,s=!0)),n&&Qt(rt.comma));else{if(Zt(t))break;if(Qt(rt.ellipsis)){ln(e),vn(),Zt(rt.comma),Ft(t);break}mn(i,e)}}function mn(t,e){t&&kn([ot.nt,ot.tt,ot.K,ot.it,ot.Z]),gn(e),vn(),gn(e,!0)}function vn(){ht?function(){const t=Yt(0);Zt(rt.question),Qt(rt.colon)&&$o(),Xt(t)}():ut&&function(){const t=Yt(0);Zt(rt.question),zn(),Xt(t)}()}function gn(t,e=!1){if(e||pn(t),!Zt(rt.eq))return;const n=pt.tokens.length-1;vi(),pt.tokens[n].rhsEndIndex=pt.tokens.length}function bn(){return Qt(rt.name)}function yn(){const t=pt.snapshot();return Wt(),!(!(Qt(rt.bracketL)||Qt(rt.braceL)||Qt(rt.star)||Qt(rt.ellipsis)||Qt(rt.hash)||Qt(rt.name)||Boolean(pt.type&rt.IS_KEYWORD)||Qt(rt.string)||Qt(rt.num)||Qt(rt.bigint)||Qt(rt.decimal))||At())||(pt.restoreFromSnapshot(t),!1)}function kn(t){for(;null!==xn(t););}function xn(t){if(!Qt(rt.name))return null;const e=pt.contextualKeyword;if(-1!==t.indexOf(e)&&yn()){switch(e){case ot.it:pt.tokens[pt.tokens.length-1].type=rt.it;break;case ot.$:pt.tokens[pt.tokens.length-1].type=rt.$;break;case ot.ct:pt.tokens[pt.tokens.length-1].type=rt.ct;break;case ot.nt:pt.tokens[pt.tokens.length-1].type=rt.nt;break;case ot.K:pt.tokens[pt.tokens.length-1].type=rt.K;break;case ot.tt:pt.tokens[pt.tokens.length-1].type=rt.tt;break;case ot.Z:pt.tokens[pt.tokens.length-1].type=rt.Z;break;case ot.R:pt.tokens[pt.tokens.length-1].type=rt.R}return e}return null}function wn(){for(Vi();Zt(rt.dot);)Vi()}function $n(){Ft(rt.qt),Ft(rt.parenL),Ft(rt.string),Ft(rt.parenR),Zt(rt.dot)&&wn(),Qt(rt.lessThan)&&ni()}function Sn(){Zt(rt.Dt);const t=Zt(rt.Jt),e=wt(ot.X);Zt(rt.Dt),!t&&!e||Qt(rt.name)?Vi():pt.tokens[pt.tokens.length-1].type=rt.name,Zt(rt.Bt)&&Hn(),Zt(rt.eq)&&Hn()}function An(){Qt(rt.lessThan)&&En()}function En(){const t=Yt(0);for(Qt(rt.lessThan)||Qt(rt.typeParameterStart)?Wt():Tt();!Zt(rt.greaterThan)&&!pt.error;)Sn(),Zt(rt.comma);Xt(t)}function _n(t){const e=t===rt.arrow;An(),Ft(rt.parenL),pt.scopeDepth++,fn(rt.parenR,!1),pt.scopeDepth--,(e||Qt(t))&&Ln(t)}function Cn(){Zt(rt.comma)||Ct()}function Fn(){_n(rt.colon),Cn()}function Tn(){if(!Qt(rt.bracketL)||!function(){const t=pt.snapshot();Wt();const e=Zt(rt.name)&&Qt(rt.colon);return pt.restoreFromSnapshot(t),e}())return!1;const t=Yt(0);return Ft(rt.bracketL),Vi(),Bn(),Ft(rt.bracketR),zn(),Cn(),Xt(t),!0}function In(t){Zt(rt.question),t||!Qt(rt.parenL)&&!Qt(rt.lessThan)?(zn(),Cn()):(_n(rt.colon),Cn())}function On(){if(Qt(rt.parenL)||Qt(rt.lessThan))return void Fn();if(Qt(rt.Nt))return Wt(),void(Qt(rt.parenL)||Qt(rt.lessThan)?Fn():In(!1));const t=!!xn([ot.it]);Tn()||((kt(ot.N)||kt(ot.st))&&yn(),Li(-1),In(t))}function Rn(){for(Ft(rt.braceL);!Zt(rt.braceR)&&!pt.error;)On()}function Dn(){Zt(rt.ellipsis)?Hn():(Hn(),Zt(rt.question)),Zt(rt.colon)&&Hn()}var Pn;function jn(t){t===Pn.TSAbstractConstructorType&&$t(ot.$),t!==Pn.TSConstructorType&&t!==Pn.TSAbstractConstructorType||Ft(rt.Nt);const e=pt.inDisallowConditionalTypesContext;pt.inDisallowConditionalTypesContext=!1,_n(rt.arrow),pt.inDisallowConditionalTypesContext=e}function Nn(){if(kt(ot.U)||kt(ot.ht)||kt(ot.it))Wt(),Nn();else if(kt(ot.B))!function(){if($t(ot.B),Vi(),Qt(rt.Bt)){const t=pt.snapshot();Ft(rt.Bt);const e=pt.inDisallowConditionalTypesContext;pt.inDisallowConditionalTypesContext=!0,Hn(),pt.inDisallowConditionalTypesContext=e,(pt.error||!pt.inDisallowConditionalTypesContext&&Qt(rt.question))&&pt.restoreFromSnapshot(t)}}();else{const t=pt.inDisallowConditionalTypesContext;pt.inDisallowConditionalTypesContext=!1,function(){for(function(){switch(pt.type){case rt.name:return wn(),void(!At()&&Qt(rt.lessThan)&&ni());case rt.Zt:case rt.Gt:return void Wt();case rt.string:case rt.num:case rt.bigint:case rt.decimal:case rt.Vt:case rt.Wt:return void Ii();case rt.minus:return Wt(),void Ii();case rt.Mt:return Wt(),void(kt(ot.q)&&!At()&&(Wt(),Bn()));case rt.Xt:return Ft(rt.Xt),Qt(rt.qt)?$n():wn(),void(!At()&&Qt(rt.lessThan)&&ni());case rt.qt:return void $n();case rt.braceL:return void(function(){const t=pt.snapshot(),e=(Wt(),Zt(rt.plus)||Zt(rt.minus)?kt(ot.it):(kt(ot.it)&&Wt(),!!Qt(rt.bracketL)&&(Wt(),!!bn()&&(Wt(),Qt(rt.Jt)))));return pt.restoreFromSnapshot(t),e}()?(Ft(rt.braceL),Qt(rt.plus)||Qt(rt.minus)?(Wt(),$t(ot.it)):wt(ot.it),Ft(rt.bracketL),Vi(),Ft(rt.Jt),Hn(),wt(ot.A)&&Hn(),Ft(rt.bracketR),Qt(rt.plus)||Qt(rt.minus)?(Wt(),Ft(rt.question)):Zt(rt.question),Zt(rt.colon)&&Hn(),Ct(),Ft(rt.braceR)):Rn());case rt.bracketL:return void function(){for(Ft(rt.bracketL);!Zt(rt.bracketR)&&!pt.error;)Dn(),Zt(rt.comma)}();case rt.parenL:return Ft(rt.parenL),Hn(),void Ft(rt.parenR);case rt.backQuote:return void function(){for(Jt(),Jt();!Qt(rt.backQuote)&&!pt.error;)Ft(rt.dollarBraceL),Hn(),Jt(),Jt();Wt()}();default:if(pt.type&rt.IS_KEYWORD)return Wt(),void(pt.tokens[pt.tokens.length-1].type=rt.name)}Tt()}();!At()&&Zt(rt.bracketL);)Zt(rt.bracketR)||(Hn(),Ft(rt.bracketR))}(),pt.inDisallowConditionalTypesContext=t}}function Mn(){if(Zt(rt.bitwiseAND),Nn(),Qt(rt.bitwiseAND))for(;Zt(rt.bitwiseAND);)Nn()}function Ln(t){const e=Yt(0);Ft(t);const n=function(){const t=pt.snapshot();return kt(ot.C)?(Wt(),wt(ot.q)?(Hn(),!0):bn()||Qt(rt.Mt)?(Wt(),wt(ot.q)&&Hn(),!0):(pt.restoreFromSnapshot(t),!1)):!(!bn()&&!Qt(rt.Mt)||(Wt(),kt(ot.q)&&!At()?(Wt(),Hn(),0):(pt.restoreFromSnapshot(t),1)))}();n||Hn(),Xt(e)}function zn(){Qt(rt.colon)&&Bn()}function Bn(){const t=Yt(0);Ft(rt.colon),Hn(),Xt(t)}function Hn(){if(qn(),pt.inDisallowConditionalTypesContext||At()||!Zt(rt.Bt))return;const t=pt.inDisallowConditionalTypesContext;pt.inDisallowConditionalTypesContext=!0,qn(),pt.inDisallowConditionalTypesContext=t,Ft(rt.question),Hn(),Ft(rt.colon),Hn()}function qn(){Qt(rt.lessThan)||Qt(rt.parenL)&&function(){const t=pt.snapshot(),e=function(){if(Wt(),Qt(rt.parenR)||Qt(rt.ellipsis))return!0;if(function(){if(Qt(rt.name)||Qt(rt.Mt))return Wt(),!0;if(Qt(rt.braceL)||Qt(rt.bracketL)){let t=1;for(Wt();t>0&&!pt.error;)Qt(rt.braceL)||Qt(rt.bracketL)?t++:(Qt(rt.braceR)||Qt(rt.bracketR))&&t--,Wt();return!0}return!1}()){if(Qt(rt.colon)||Qt(rt.comma)||Qt(rt.question)||Qt(rt.eq))return!0;if(Qt(rt.parenR)&&(Wt(),Qt(rt.arrow)))return!0}return!1}();return pt.restoreFromSnapshot(t),e}()?jn(Pn.TSFunctionType):Qt(rt.Nt)?jn(Pn.TSConstructorType):kt(ot.$)&&te()===rt.Nt?jn(Pn.TSAbstractConstructorType):function(){if(Zt(rt.bitwiseOR),Mn(),Qt(rt.bitwiseOR))for(;Zt(rt.bitwiseOR);)Mn()}()}function Un(){for(;!Qt(rt.braceL)&&!pt.error;)Gn(),Zt(rt.comma)}function Gn(){wn(),Qt(rt.lessThan)&&ni()}function Vn(){if(Qt(rt.string)?Ii():Vi(),Zt(rt.eq)){const t=pt.tokens.length-1;vi(),pt.tokens[t].rhsEndIndex=pt.tokens.length}}function Wn(){for(dn(!1),Ft(rt.braceL);!Zt(rt.braceR)&&!pt.error;)Vn(),Zt(rt.comma)}function Jn(){Ft(rt.braceL),Po(rt.braceR)}function Yn(){dn(!1),Zt(rt.dot)?Yn():Jn()}function Xn(){kt(ot.M)?Vi():Qt(rt.string)?Fi():Tt(),Qt(rt.braceL)?Jn():Ct()}function Zn(){un(),Ft(rt.eq),kt(ot.ot)&&te()===rt.parenL?($t(ot.ot),Ft(rt.parenL),Qt(rt.string)||Tt(),Ii(),Ft(rt.parenR)):wn(),Ct()}function Kn(){return Qn(pt.contextualKeyword,!0)}function Qn(t,e){switch(t){case ot.$:if(ti(e)&&Qt(rt.zt))return pt.tokens[pt.tokens.length-1].type=rt.$,Ho(!0,!1),!0;break;case ot.D:if(ti(e)&&Qt(rt.name))return pt.tokens[pt.tokens.length-1].type=rt.D,Wn(),!0;break;case ot.H:if(ti(e)&&Qt(rt.name)){const t=Yt(e?2:1);return dn(!1),An(),Zt(rt.Bt)&&Un(),Rn(),Xt(t),!0}break;case ot.V:if(ti(e)){if(Qt(rt.string)){const t=Yt(e?2:1);return Xn(),Xt(t),!0}if(Qt(rt.name)){const t=Yt(e?2:1);return Yn(),Xt(t),!0}}break;case ot.W:if(ti(e)&&Qt(rt.name)){const t=Yt(e?2:1);return Yn(),Xt(t),!0}break;case ot.ut:if(ti(e)&&Qt(rt.name)){const t=Yt(e?2:1);return dn(!1),An(),Ft(rt.eq),Hn(),Ct(),Xt(t),!0}}return!1}function ti(t){return t?(Wt(),!0):!_t()}function ei(){pt.type===rt.bitShiftL&&(pt.pos-=1,de(rt.lessThan)),ni()}function ni(){const t=Yt(0);for(Ft(rt.lessThan);!Qt(rt.greaterThan)&&!pt.error;)Hn(),Zt(rt.comma);t?(Ft(rt.greaterThan),Xt(t)):(Xt(t),he(),Ft(rt.greaterThan),pt.tokens[pt.tokens.length-1].isType=!0)}function ii(){if(Qt(rt.name))switch(pt.contextualKeyword){case ot.$:case ot.R:case ot.D:case ot.H:case ot.V:case ot.W:case ot.ut:return!0}return!1}function oi(){hi()}function ri(t){oi(),Zt(rt.colon)?oi():pt.tokens[pt.tokens.length-1].identifierRole=t}function si(){const t=pt.tokens.length;ri(Mt.Access);let e=!1;for(;Qt(rt.dot);)e=!0,hi(),oi();if(!e){const e=pt.tokens[t],n=ft.charCodeAt(e.start);n>=st.lowercaseA&&n<=st.lowercaseZ&&(e.identifierRole=null)}}function ai(){switch(pt.type){case rt.braceL:return Wt(),mi(),void hi();case rt.jsxTagStart:return ui(),void hi();case rt.string:return void hi();default:Tt("JSX value should be either an expression or a quoted JSX text")}}function ci(){Ft(rt.ellipsis),mi()}function li(){Qt(rt.jsxTagEnd)||si()}function di(){const t=pt.tokens.length-1;pt.tokens[t].jsxRole=Lt.NoChildren;let e=0;if(!function(t){if(Qt(rt.jsxTagEnd))return!1;si(),ut&&function(){if(Zt(rt.jsxTagStart)){pt.tokens[pt.tokens.length-1].type=rt.typeParameterStart;const t=Yt(1);for(;!Qt(rt.greaterThan)&&!pt.error;)Hn(),Zt(rt.comma);hi(),Xt(t)}}();let e=!1;for(;!Qt(rt.slash)&&!Qt(rt.jsxTagEnd)&&!pt.error;)Zt(rt.braceL)?(e=!0,Ft(rt.ellipsis),vi(),hi()):(e&&pt.end-pt.start===3&&ft.charCodeAt(pt.start)===st.lowercaseK&&ft.charCodeAt(pt.start+1)===st.lowercaseE&&ft.charCodeAt(pt.start+2)===st.lowercaseY&&(pt.tokens[t].jsxRole=Lt.KeyAfterPropSpread),ri(Mt.ObjectKey),Qt(rt.eq)&&(hi(),ai()));const n=Qt(rt.slash);return n&&hi(),n}(t))for(pi();;)switch(pt.type){case rt.jsxTagStart:if(hi(),Qt(rt.slash))return hi(),li(),void(pt.tokens[t].jsxRole!==Lt.KeyAfterPropSpread&&(1===e?pt.tokens[t].jsxRole=Lt.OneChild:e>1&&(pt.tokens[t].jsxRole=Lt.StaticChildren)));e++,di(),pi();break;case rt.jsxText:e++,pi();break;case rt.jsxEmptyText:pi();break;case rt.braceL:Wt(),Qt(rt.ellipsis)?(ci(),pi(),e+=2):(Qt(rt.braceR)||(e++,mi()),pi());break;default:return void Tt()}}function ui(){hi(),di()}function hi(){pt.tokens.push(new Vt),le(),pt.start=pt.pos;const t=ft.charCodeAt(pt.pos);if(jt[t])!function(){let t;do{if(pt.pos>ft.length)return void Tt("Unexpectedly reached the end of input.");t=ft.charCodeAt(++pt.pos)}while(Pt[t]||t===st.dash);de(rt.jsxName)}();else if(t===st.quotationMark||t===st.apostrophe)!function(t){for(pt.pos++;;){if(pt.pos>=ft.length)return void Tt("Unterminated string constant");if(ft.charCodeAt(pt.pos)===t){pt.pos++;break}pt.pos++}de(rt.string)}(t);else switch(++pt.pos,t){case st.greaterThan:de(rt.jsxTagEnd);break;case st.lessThan:de(rt.jsxTagStart);break;case st.slash:de(rt.slash);break;case st.equalsTo:de(rt.eq);break;case st.leftCurlyBrace:de(rt.braceL);break;case st.dot:de(rt.dot);break;case st.colon:de(rt.colon);break;default:Tt()}}function pi(){pt.tokens.push(new Vt),pt.start=pt.pos,function(){let t=!1,e=!1;for(;;){if(pt.pos>=ft.length)return void Tt("Unterminated JSX contents");const n=ft.charCodeAt(pt.pos);if(n===st.lessThan||n===st.leftCurlyBrace)return pt.pos===pt.start?n===st.lessThan?(pt.pos++,void de(rt.jsxTagStart)):void pe(n):void de(t&&!e?rt.jsxEmptyText:rt.jsxText);n===st.lineFeed?t=!0:n!==st.space&&n!==st.carriageReturn&&n!==st.tab&&(e=!0),pt.pos++}}()}!function(t){t[t.TSFunctionType=0]="TSFunctionType",t[t.TSConstructorType=1]="TSConstructorType",t[t.TSAbstractConstructorType=2]="TSAbstractConstructorType"}(Pn||(Pn={}));class fi{constructor(t){this.stop=t}}function mi(t=!1){if(vi(t),Qt(rt.comma))for(;Zt(rt.comma);)vi(t)}function vi(t=!1,e=!1){return ut?function(t,e){return dt?function(t,e){if(!Qt(rt.lessThan))return gi(t,e);const n=pt.snapshot();let i=gi(t,e);return pt.error?(pt.restoreFromSnapshot(n),pt.type=rt.typeParameterStart,En(),i=gi(t,e),i||Tt(),i):i}(t,e):function(t,e){if(!Qt(rt.lessThan))return gi(t,e);const n=pt.snapshot();En();const i=gi(t,e);return i||Tt(),pt.error?(pt.restoreFromSnapshot(n),gi(t,e)):i}(t,e)}(t,e):ht?function(t,e){if(Qt(rt.lessThan)){const n=pt.snapshot();let i=gi(t,e);if(!pt.error)return i;pt.restoreFromSnapshot(n),pt.type=rt.typeParameterStart;const o=Yt(0);if(oo(),Xt(o),i=gi(t,e),i)return!0;Tt()}return gi(t,e)}(t,e):gi(t,e)}function gi(t,e){if(Qt(rt.Ut))return Wt(),Qt(rt.semi)||St()||(Zt(rt.star),vi()),!1;(Qt(rt.parenL)||Qt(rt.name)||Qt(rt.Ut))&&(pt.potentialArrowAt=pt.start);const n=function(t){const e=function(t){const e=pt.tokens.length;return!!ki()||(yi(e,-1,t),!1)}(t);return!!e||(function(t){ut||ht?function(t){if(Qt(rt.question)){const t=te();if(t===rt.colon||t===rt.comma||t===rt.parenR)return}bi(t)}(t):bi(t)}(t),!1)}(t);return e&&Pi(),pt.type&rt.IS_ASSIGN?(Wt(),vi(t),!1):n}function bi(t){Zt(rt.question)&&(vi(),Ft(rt.colon),vi(t))}function yi(t,e,n){if(ut&&(rt.Jt&rt.PRECEDENCE_MASK)>e&&!At()&&(wt(ot.A)||wt(ot.rt))){const i=Yt(1);return Hn(),Xt(i),he(),void yi(t,e,n)}const i=pt.type&rt.PRECEDENCE_MASK;if(i>0&&(!n||!Qt(rt.Jt))&&i>e){const o=pt.type;Wt(),o===rt.nullishCoalescing&&(pt.tokens[pt.tokens.length-1].nullishStartIndex=t);const r=pt.tokens.length;ki(),yi(r,o&rt.IS_RIGHT_ASSOCIATIVE?i-1:i,n),o===rt.nullishCoalescing&&(pt.tokens[t].numNullishCoalesceStarts++,pt.tokens[pt.tokens.length-1].numNullishCoalesceEnds++),yi(t,e,n)}}function ki(){if(ut&&!dt&&Zt(rt.lessThan))return function(){const t=Yt(1);Hn(),Ft(rt.greaterThan),Xt(t),ki()}(),!1;if(kt(ot.V)&&re()===st.leftCurlyBrace&&!Et())return $t(ot.V),Ft(rt.braceL),Po(rt.braceR),!1;if(pt.type&rt.IS_PREFIX)return Wt(),ki(),!1;if(xi())return!0;for(;pt.type&rt.IS_POSTFIX&&!St();)pt.type===rt.preIncDec&&(pt.type=rt.postIncDec),Wt();return!1}function xi(){const t=pt.tokens.length;return!!Fi()||(wi(t),pt.tokens.length>t&&pt.tokens[t].isOptionalChainStart&&(pt.tokens[pt.tokens.length-1].isOptionalChainEnd=!0),!1)}function wi(t,e=!1){ht?function(t,e=!1){if(pt.tokens[pt.tokens.length-1].contextualKeyword===ot.F&&Qt(rt.lessThan)){const t=pt.snapshot(),e=function(){pt.scopeDepth++;const t=pt.tokens.length;return Bo(),!!Di()&&(Bi(t),!0)}();if(e&&!pt.error)return;pt.restoreFromSnapshot(t)}$i(t,e)}(t,e):$i(t,e)}function $i(t,e=!1){const n=new fi(!1);do{Si(t,e,n)}while(!n.stop&&!pt.error)}function Si(t,e,n){ut?function(t,e,n){if(At()||!Zt(rt.bang)){if(Qt(rt.lessThan)||Qt(rt.bitShiftL)){const n=pt.snapshot();if(!e&&Ei()&&function(){const t=pt.snapshot();return En(),Bo(),Qt(rt.colon)&&Ln(rt.colon),Ft(rt.arrow),pt.error?(pt.restoreFromSnapshot(t),!1):(qi(!0),!0)}())return;if(ei(),!e&&Zt(rt.parenL)?(pt.tokens[pt.tokens.length-1].subscriptStartIndex=t,_i()):Qt(rt.backQuote)?ji():(pt.type===rt.greaterThan||pt.type!==rt.parenL&&Boolean(pt.type&rt.IS_EXPRESSION_START)&&!At())&&Tt(),!pt.error)return;pt.restoreFromSnapshot(n)}else!e&&Qt(rt.questionDot)&&te()===rt.lessThan&&(Wt(),pt.tokens[t].isOptionalChainStart=!0,pt.tokens[pt.tokens.length-1].subscriptStartIndex=t,ni(),Ft(rt.parenL),_i());Ai(t,e,n)}else pt.tokens[pt.tokens.length-1].type=rt.nonNullAssertion}(t,e,n):ht?function(t,e,n){if(Qt(rt.questionDot)&&te()===rt.lessThan)return e?void(n.stop=!0):(Wt(),ro(),Ft(rt.parenL),void _i());if(!e&&Qt(rt.lessThan)){const t=pt.snapshot();if(ro(),Ft(rt.parenL),_i(),!pt.error)return;pt.restoreFromSnapshot(t)}Ai(t,e,n)}(t,e,n):Ai(t,e,n)}function Ai(t,e,n){if(!e&&Zt(rt.doubleColon))Ci(),n.stop=!0,wi(t,e);else if(Qt(rt.questionDot)){if(pt.tokens[t].isOptionalChainStart=!0,e&&te()===rt.parenL)return void(n.stop=!0);Wt(),pt.tokens[pt.tokens.length-1].subscriptStartIndex=t,Zt(rt.bracketL)?(mi(),Ft(rt.bracketR)):Zt(rt.parenL)?_i():Ti()}else if(Zt(rt.dot))pt.tokens[pt.tokens.length-1].subscriptStartIndex=t,Ti();else if(Zt(rt.bracketL))pt.tokens[pt.tokens.length-1].subscriptStartIndex=t,mi(),Ft(rt.bracketR);else if(!e&&Qt(rt.parenL))if(Ei()){const e=pt.snapshot(),i=pt.tokens.length;Wt(),pt.tokens[pt.tokens.length-1].subscriptStartIndex=t;const o=vt();pt.tokens[pt.tokens.length-1].contextId=o,_i(),pt.tokens[pt.tokens.length-1].contextId=o,(Qt(rt.colon)||Qt(rt.arrow))&&(pt.restoreFromSnapshot(e),n.stop=!0,pt.scopeDepth++,Bo(),function(t){ut?Qt(rt.colon)&&Bn():ht&&function(){if(Qt(rt.colon)){const t=pt.noAnonFunctionType;pt.noAnonFunctionType=!0,$o(),pt.noAnonFunctionType=t}}(),Ft(rt.arrow),Bi(t)}(i))}else{Wt(),pt.tokens[pt.tokens.length-1].subscriptStartIndex=t;const e=vt();pt.tokens[pt.tokens.length-1].contextId=e,_i(),pt.tokens[pt.tokens.length-1].contextId=e}else Qt(rt.backQuote)?ji():n.stop=!0}function Ei(){return pt.tokens[pt.tokens.length-1].contextualKeyword===ot.F&&!St()}function _i(){let t=!0;for(;!Zt(rt.parenR)&&!pt.error;){if(t)t=!1;else if(Ft(rt.comma),Zt(rt.parenR))break;Gi(!1)}}function Ci(){const t=pt.tokens.length;Fi(),wi(t,!0)}function Fi(){if(Zt(rt.modulo))return Vi(),!1;if(Qt(rt.jsxText)||Qt(rt.jsxEmptyText))return Ii(),!1;if(Qt(rt.lessThan)&&dt)return pt.type=rt.jsxTagStart,ui(),Wt(),!1;const t=pt.potentialArrowAt===pt.start;switch(pt.type){case rt.slash:case rt.assign:pt.type===rt.assign&&--pt.pos,function(){const t=pt.pos;let e=!1,n=!1;for(;;){if(pt.pos>=ft.length)return void Tt("Unterminated regular expression",t);const i=ft.charCodeAt(pt.pos);if(e)e=!1;else{if(i===st.leftSquareBracket)n=!0;else if(i===st.rightSquareBracket&&n)n=!1;else if(i===st.slash&&!n)break;e=i===st.backslash}++pt.pos}++pt.pos,function(){for(;pt.pos<ft.length;){const t=ft.charCodeAt(pt.pos);if(Pt[t])pt.pos++;else{if(t!==st.backslash)break;if(pt.pos+=2,ft.charCodeAt(pt.pos)===st.leftCurlyBrace){for(;pt.pos<ft.length&&ft.charCodeAt(pt.pos)!==st.rightCurlyBrace;)pt.pos++;pt.pos++}}}}(),de(rt.regexp)}();case rt.Lt:case rt.Mt:case rt.regexp:case rt.num:case rt.bigint:case rt.decimal:case rt.string:case rt.Gt:case rt.Vt:case rt.Wt:return Wt(),!1;case rt.qt:return Wt(),Qt(rt.dot)&&(pt.tokens[pt.tokens.length-1].type=rt.name,Wt(),Vi()),!1;case rt.name:{const e=pt.tokens.length,n=pt.start,i=pt.contextualKeyword;return Vi(),i===ot.T?(ki(),!1):i===ot.F&&Qt(rt.Et)&&!St()?(Wt(),zo(n,!1),!1):t&&i===ot.F&&!St()&&Qt(rt.name)?(pt.scopeDepth++,dn(!1),Ft(rt.arrow),Bi(e),!0):Qt(rt.wt)&&!St()?(Wt(),Do(),!1):t&&!St()&&Qt(rt.arrow)?(pt.scopeDepth++,hn(!1),Ft(rt.arrow),Bi(e),!0):(pt.tokens[pt.tokens.length-1].identifierRole=Mt.Access,!1)}case rt.wt:return Wt(),Do(),!1;case rt.parenL:return Ri(t);case rt.bracketL:return Wt(),Ui(rt.bracketR,!0),!1;case rt.braceL:return Ni(!1,!1),!1;case rt.Et:return function(){const t=pt.start;Vi(),Zt(rt.dot)&&Vi(),zo(t,!1)}(),!1;case rt.at:To();case rt.zt:return Ho(!1),!1;case rt.Nt:return Ft(rt.Nt),Zt(rt.dot)?Vi():(Ci(),Zt(rt.questionDot),ht&&function(){if(Qt(rt.lessThan)){const t=pt.snapshot();ro(),pt.error&&pt.restoreFromSnapshot(t)}}(),Zt(rt.parenL)&&Ui(rt.parenR)),!1;case rt.backQuote:return ji(),!1;case rt.doubleColon:return Wt(),Ci(),!1;case rt.hash:{const t=re();return jt[t]||t===st.backslash?Ti():Wt(),!1}default:return Tt(),!1}}function Ti(){Zt(rt.hash),Vi()}function Ii(){Wt()}function Oi(){Ft(rt.parenL),mi(),Ft(rt.parenR)}function Ri(t){const e=pt.snapshot(),n=pt.tokens.length;Ft(rt.parenL);let i=!0;for(;!Qt(rt.parenR)&&!pt.error;){if(i)i=!1;else if(Ft(rt.comma),Qt(rt.parenR))break;if(Qt(rt.ellipsis)){ln(!1),Pi();break}vi(!1,!0)}return Ft(rt.parenR),!(!t||!Qt(rt.colon)&&St()||!Di()||(pt.restoreFromSnapshot(e),pt.scopeDepth++,Bo(),Di(),Bi(n),pt.error&&(pt.restoreFromSnapshot(e),Ri(!1),1)))}function Di(){return ut?function(){if(Qt(rt.colon)){const t=pt.snapshot();Ln(rt.colon),St()&&Tt(),Qt(rt.arrow)||Tt(),pt.error&&pt.restoreFromSnapshot(t)}return Zt(rt.arrow)}():ht?function(){if(Qt(rt.colon)){const t=Yt(0),e=pt.snapshot(),n=pt.noAnonFunctionType;pt.noAnonFunctionType=!0,Yi(),pt.noAnonFunctionType=n,St()&&Tt(),Qt(rt.arrow)||Tt(),pt.error&&pt.restoreFromSnapshot(e),Xt(t)}return Zt(rt.arrow)}():Zt(rt.arrow)}function Pi(){(ut||ht)&&(Kt(rt.question),Qt(rt.colon)&&(ut?Bn():ht&&$o()))}function ji(){for(Jt(),Jt();!Qt(rt.backQuote)&&!pt.error;)Ft(rt.dollarBraceL),mi(),Jt(),Jt();Wt()}function Ni(t,e){const n=vt();let i=!0;for(Wt(),pt.tokens[pt.tokens.length-1].contextId=n;!Zt(rt.braceR)&&!pt.error;){if(i)i=!1;else if(Ft(rt.comma),Zt(rt.braceR))break;let o=!1;if(Qt(rt.ellipsis)){const n=pt.tokens.length;if(cn(),t&&(pt.tokens.length===n+2&&hn(e),Zt(rt.braceR)))break;continue}t||(o=Zt(rt.star)),!t&&kt(ot.F)?(o&&Tt(),Vi(),Qt(rt.colon)||Qt(rt.parenL)||Qt(rt.braceR)||Qt(rt.eq)||Qt(rt.comma)||(Qt(rt.star)&&(Wt(),o=!0),Li(n))):Li(n),Mi(t,e,n)}pt.tokens[pt.tokens.length-1].contextId=n}function Mi(t,e,n){ut?An():ht&&Qt(rt.lessThan)&&(oo(),Qt(rt.parenL)||Tt()),function(t,e){const n=pt.start;return Qt(rt.parenL)?(t&&Tt(),zi(n,!1),!0):!!function(t){return!t&&(Qt(rt.string)||Qt(rt.num)||Qt(rt.bracketL)||Qt(rt.name)||!!(pt.type&rt.IS_KEYWORD))}(t)&&(Li(e),zi(n,!1),!0)}(t,n)||function(t,e){if(Zt(rt.colon))return void(t?gn(e):vi(!1));let n;n=t?0===pt.scopeDepth?Mt.ObjectShorthandTopLevelDeclaration:e?Mt.ObjectShorthandBlockScopedDeclaration:Mt.ObjectShorthandFunctionScopedDeclaration:Mt.ObjectShorthand,pt.tokens[pt.tokens.length-1].identifierRole=n,gn(e,!0)}(t,e)}function Li(t){ht&&Ao(),Zt(rt.bracketL)?(pt.tokens[pt.tokens.length-1].contextId=t,vi(),Ft(rt.bracketR),pt.tokens[pt.tokens.length-1].contextId=t):(Qt(rt.num)||Qt(rt.string)||Qt(rt.bigint)||Qt(rt.decimal)?Fi():Ti(),pt.tokens[pt.tokens.length-1].identifierRole=Mt.ObjectKey,pt.tokens[pt.tokens.length-1].contextId=t)}function zi(t,e){const n=vt();pt.scopeDepth++;const i=pt.tokens.length;Bo(e,n),Hi(t,n),pt.scopes.push(new at(i,pt.tokens.length,!0)),pt.scopeDepth--}function Bi(t){qi(!0),pt.scopes.push(new at(t,pt.tokens.length,!0)),pt.scopeDepth--}function Hi(t,e=0){ut?function(t,e){if(Qt(rt.colon)&&Ln(rt.colon),!Qt(rt.braceL)&&_t()){let e=pt.tokens.length-1;for(;e>=0&&(pt.tokens[e].start>=t||pt.tokens[e].type===rt.xt||pt.tokens[e].type===rt.Ht);)pt.tokens[e].isType=!0,e--;return}qi(!1,e)}(t,e):ht?function(t){Qt(rt.colon)&&Yi(),qi(!1,t)}(e):qi(!1,e)}function qi(t,e=0){t&&!Qt(rt.braceL)?vi():Do(!0,e)}function Ui(t,e=!1){let n=!0;for(;!Zt(t)&&!pt.error;){if(n)n=!1;else if(Ft(rt.comma),Zt(t))break;Gi(e)}}function Gi(t){t&&Qt(rt.comma)||(Qt(rt.ellipsis)?(cn(),Pi()):Qt(rt.question)?Wt():vi(!1,!0))}function Vi(){Wt(),pt.tokens[pt.tokens.length-1].type=rt.name}function Wi(t){const e=Yt(0);Ft(t||rt.colon),wo(),Xt(e)}function Ji(){Ft(rt.modulo),$t(ot.I),Zt(rt.parenL)&&(mi(),Ft(rt.parenR))}function Yi(){const t=Yt(0);Ft(rt.colon),Qt(rt.modulo)?Ji():(wo(),Qt(rt.modulo)&&Ji()),Xt(t)}function Xi(){Qt(rt.zt)?(Wt(),Zi(!0)):Qt(rt.Et)?(Wt(),Vi(),Qt(rt.lessThan)&&oo(),Ft(rt.parenL),go(),Ft(rt.parenR),Yi(),Ct()):Qt(rt.Ot)?(Wt(),So(),Ct()):wt(ot.V)?Zt(rt.dot)?($t(ot.P),$o(),Ct()):function(){for(Qt(rt.string)?Fi():Vi(),Ft(rt.braceL);!Qt(rt.braceR)&&!pt.error;)Qt(rt.qt)?(Wt(),nr()):Tt();Ft(rt.braceR)}():kt(ot.ut)?(Wt(),eo()):kt(ot.Y)?(Wt(),no(!0)):kt(ot.H)?(Wt(),Zi()):Qt(rt.Ht)?(Ft(rt.Ht),Zt(rt.xt)?Qt(rt.Et)||Qt(rt.zt)?Xi():(wo(),Ct()):Qt(rt.Ot)||Qt(rt.Et)||Qt(rt.zt)||kt(ot.Y)?Xi():Qt(rt.star)||Qt(rt.braceL)||kt(ot.H)||kt(ot.ut)||kt(ot.Y)?Xo():Tt()):Tt()}function Zi(t=!1){if(to(),Qt(rt.lessThan)&&oo(),Zt(rt.Bt))do{Ki()}while(!t&&Zt(rt.comma));if(kt(ot.G)){Wt();do{Ki()}while(Zt(rt.comma))}if(kt(ot.L)){Wt();do{Ki()}while(Zt(rt.comma))}ho(t,!1,t)}function Ki(){mo(!1),Qt(rt.lessThan)&&ro()}function Qi(){Zi()}function to(){Vi()}function eo(){to(),Qt(rt.lessThan)&&oo(),Wi(rt.eq),Ct()}function no(t){$t(ot.ut),to(),Qt(rt.lessThan)&&oo(),Qt(rt.colon)&&Wi(rt.colon),t||Wi(rt.eq),Ct()}function io(){Ao(),So(),Zt(rt.eq)&&wo()}function oo(){const t=Yt(0);Qt(rt.lessThan)||Qt(rt.typeParameterStart)?Wt():Tt();do{io(),Qt(rt.greaterThan)||Ft(rt.comma)}while(!Qt(rt.greaterThan)&&!pt.error);Ft(rt.greaterThan),Xt(t)}function ro(){const t=Yt(0);for(Ft(rt.lessThan);!Qt(rt.greaterThan)&&!pt.error;)wo(),Qt(rt.greaterThan)||Ft(rt.comma);Ft(rt.greaterThan),Xt(t)}function so(){Qt(rt.num)||Qt(rt.string)?Fi():Vi()}function ao(){te()===rt.colon?(so(),Wi()):wo(),Ft(rt.bracketR),Wi()}function co(){so(),Ft(rt.bracketR),Ft(rt.bracketR),Qt(rt.lessThan)||Qt(rt.parenL)?lo():(Zt(rt.question),Wi())}function lo(){for(Qt(rt.lessThan)&&oo(),Ft(rt.parenL);!Qt(rt.parenR)&&!Qt(rt.ellipsis)&&!pt.error;)vo(),Qt(rt.parenR)||Ft(rt.comma);Zt(rt.ellipsis)&&vo(),Ft(rt.parenR),Wi()}function uo(){lo()}function ho(t,e,n){let i;for(e&&Qt(rt.braceBarL)?(Ft(rt.braceBarL),i=rt.braceBarR):(Ft(rt.braceL),i=rt.braceR);!Qt(i)&&!pt.error;){if(n&&kt(ot.et)){const e=te();e!==rt.colon&&e!==rt.question&&(Wt(),t=!1)}if(t&&kt(ot.ct)){const t=te();t!==rt.colon&&t!==rt.question&&Wt()}if(Ao(),Zt(rt.bracketL))Zt(rt.bracketL)?co():ao();else if(Qt(rt.parenL)||Qt(rt.lessThan))uo();else{if(kt(ot.N)||kt(ot.st)){const t=te();t!==rt.name&&t!==rt.string&&t!==rt.num||Wt()}po()}fo()}Ft(i)}function po(){if(Qt(rt.ellipsis)){if(Ft(rt.ellipsis),Zt(rt.comma)||Zt(rt.semi),Qt(rt.braceR))return;wo()}else so(),Qt(rt.lessThan)||Qt(rt.parenL)?lo():(Zt(rt.question),Wi())}function fo(){Zt(rt.semi)||Zt(rt.comma)||Qt(rt.braceR)||Qt(rt.braceBarR)||Tt()}function mo(t){for(t||Vi();Zt(rt.dot);)Vi()}function vo(){const t=te();t===rt.colon||t===rt.question?(Vi(),Zt(rt.question),Wi()):wo()}function go(){for(;!Qt(rt.parenR)&&!Qt(rt.ellipsis)&&!pt.error;)vo(),Qt(rt.parenR)||Ft(rt.comma);Zt(rt.ellipsis)&&vo()}function bo(){let t=!1;const e=pt.noAnonFunctionType;switch(pt.type){case rt.name:return kt(ot.H)?void function(){if($t(ot.H),Zt(rt.Bt))do{Ki()}while(Zt(rt.comma));ho(!1,!1,!1)}():(Vi(),mo(!0),void(Qt(rt.lessThan)&&ro()));case rt.braceL:return void ho(!1,!1,!1);case rt.braceBarL:return void ho(!1,!0,!1);case rt.bracketL:return void function(){for(Ft(rt.bracketL);pt.pos<ft.length&&!Qt(rt.bracketR)&&(wo(),!Qt(rt.bracketR));)Ft(rt.comma);Ft(rt.bracketR)}();case rt.lessThan:return oo(),Ft(rt.parenL),go(),Ft(rt.parenR),Ft(rt.arrow),void wo();case rt.parenL:if(Wt(),!Qt(rt.parenR)&&!Qt(rt.ellipsis))if(Qt(rt.name)){const e=te();t=e!==rt.question&&e!==rt.colon}else t=!0;if(t){if(pt.noAnonFunctionType=!1,wo(),pt.noAnonFunctionType=e,pt.noAnonFunctionType||!(Qt(rt.comma)||Qt(rt.parenR)&&te()===rt.arrow))return void Ft(rt.parenR);Zt(rt.comma)}return go(),Ft(rt.parenR),Ft(rt.arrow),void wo();case rt.minus:return Wt(),void Ii();case rt.string:case rt.num:case rt.Vt:case rt.Wt:case rt.Gt:case rt.Mt:case rt.Zt:case rt.star:return void Wt();default:if(pt.type===rt.Xt)return Ft(rt.Xt),void bo();if(pt.type&rt.IS_KEYWORD)return Wt(),void(pt.tokens[pt.tokens.length-1].type=rt.name)}Tt()}function yo(){Zt(rt.question)?yo():function(){for(bo();!St()&&(Qt(rt.bracketL)||Qt(rt.questionDot));)Zt(rt.questionDot),Ft(rt.bracketL),Zt(rt.bracketR)||(wo(),Ft(rt.bracketR))}()}function ko(){yo(),!pt.noAnonFunctionType&&Zt(rt.arrow)&&wo()}function xo(){for(Zt(rt.bitwiseAND),ko();Zt(rt.bitwiseAND);)ko()}function wo(){!function(){for(Zt(rt.bitwiseOR),xo();Zt(rt.bitwiseOR);)xo()}()}function $o(){Wi()}function So(){Vi(),Qt(rt.colon)&&$o()}function Ao(){(Qt(rt.plus)||Qt(rt.minus))&&(Wt(),pt.tokens[pt.tokens.length-1].isType=!0)}function Eo(){$t(ot.D),pt.tokens[pt.tokens.length-1].type=rt.D,Vi(),wt(ot.J)&&Wt(),Ft(rt.braceL),function(){for(;!Qt(rt.braceR)&&!pt.error&&!Zt(rt.ellipsis);)_o(),Qt(rt.braceR)||Ft(rt.comma)}(),Ft(rt.braceR)}function _o(){Vi(),Zt(rt.eq)&&Wt()}function Co(t){ht&&function(){if(Qt(rt.name)&&pt.contextualKeyword===ot.H){const t=Yt(0);return Wt(),Qi(),Xt(t),!0}return!!kt(ot.D)&&(Eo(),!0)}()||(Qt(rt.at)&&To(),function(t){if(ut&&function(){if(pt.type===rt.Dt){const t=ne();if(t.type===rt.name&&t.contextualKeyword===ot.D)return Ft(rt.Dt),$t(ot.D),pt.tokens[pt.tokens.length-1].type=rt.D,Wn(),!0}return!1}())return;const e=pt.type;switch(e){case rt.vt:case rt.yt:return Wt(),void(_t()||(Vi(),Ct()));case rt.kt:return Wt(),void Ct();case rt.wt:return Wt(),Co(!1),Ft(rt.Pt),Oi(),void Zt(rt.semi);case rt.At:return void function(){pt.scopeDepth++;const t=pt.tokens.length;!function(){Wt();let t=!1;if(kt(ot.T)&&(t=!0,Wt()),Ft(rt.parenL),Qt(rt.semi))return t&&Tt(),void jo();const e=Fo();if(e||Qt(rt.Ot)||Qt(rt.Rt)||Qt(rt.Dt)||kt(ot.ft)&&!xt(ot.J))return e&&$t(ot.T),Wt(),Mo(!0,pt.type!==rt.Ot),Qt(rt.Jt)||kt(ot.J)?void No(t):void jo();mi(!0),Qt(rt.Jt)||kt(ot.J)?No(t):(t&&Tt(),jo())}(),pt.scopes.push(new at(t,pt.tokens.length,!1)),pt.scopeDepth--}();case rt.Et:if(te()===rt.dot)break;return t||Tt(),void function(){const t=pt.start;Wt(),zo(t,!0)}();case rt.zt:return t||Tt(),void Ho(!0);case rt._t:return Wt(),Oi(),Co(!1),void(Zt(rt.$t)&&Co(!1));case rt.Ct:return Wt(),void(_t()||(mi(),Ct()));case rt.Ft:return void function(){Wt(),Oi(),pt.scopeDepth++;const t=pt.tokens.length;for(Ft(rt.braceL);!Qt(rt.braceR)&&!pt.error;)if(Qt(rt.gt)||Qt(rt.xt)){const t=Qt(rt.gt);Wt(),t&&mi(),Ft(rt.colon)}else Co(!0);Wt(),pt.scopes.push(new at(t,pt.tokens.length,!1)),pt.scopeDepth--}();case rt.Tt:return Wt(),mi(),void Ct();case rt.It:return void function(){if(Wt(),Do(),Qt(rt.bt)){Wt();let t=null;Qt(rt.parenL)&&(pt.scopeDepth++,t=pt.tokens.length,Ft(rt.parenL),pn(!0),ut&&zn(),Ft(rt.parenR)),Do(),null!=t&&(pt.scopes.push(new at(t,pt.tokens.length,!1)),pt.scopeDepth--)}Zt(rt.St)&&Do()}();case rt.Rt:case rt.Dt:t||Tt();case rt.Ot:return void Ro(e!==rt.Ot);case rt.Pt:return Wt(),Oi(),void Co(!1);case rt.braceL:return void Do();case rt.semi:return void Wt();case rt.Ht:case rt.qt:{const t=te();if(t===rt.parenL||t===rt.dot)break;return Wt(),void(e===rt.qt?nr():Xo())}case rt.name:if(pt.contextualKeyword===ot.F){const t=pt.start,e=pt.snapshot();if(Wt(),Qt(rt.Et)&&!St())return Ft(rt.Et),void zo(t,!0);pt.restoreFromSnapshot(e)}else{if(pt.contextualKeyword===ot.ft&&!Et()&&te()===rt.name)return void Ro(!0);if(Fo())return $t(ot.T),void Ro(!0)}}const n=pt.tokens.length;mi();let i=null;if(pt.tokens.length===n+1){const t=pt.tokens[pt.tokens.length-1];t.type===rt.name&&(i=t.contextualKeyword)}var o;null!=i?Zt(rt.colon)?Co(!0):(o=i,ut?function(t){(function(t){switch(t){case ot.R:{const t=pt.tokens.length-1,e=function(){if(_t())return!1;switch(pt.type){case rt.Et:{const t=Yt(1);return Wt(),zo(pt.start,!0),Xt(t),!0}case rt.zt:{const t=Yt(1);return Ho(!0,!1),Xt(t),!0}case rt.Dt:if(Qt(rt.Dt)&&xt(ot.D)){const t=Yt(1);return Ft(rt.Dt),$t(ot.D),pt.tokens[pt.tokens.length-1].type=rt.D,Wn(),Xt(t),!0}case rt.Ot:case rt.Rt:{const t=Yt(1);return Ro(pt.type!==rt.Ot),Xt(t),!0}case rt.name:{const t=Yt(1),e=pt.contextualKeyword;let n=!1;return e===ot.M?(Xn(),n=!0):n=Qn(e,!0),Xt(t),n}default:return!1}}();if(e)return pt.tokens[t].type=rt.R,!0;break}case ot.M:if(Qt(rt.braceL))return Jn(),!0;break;default:return Qn(t,!1)}return!1})(t)||Ct()}(o):ht?function(t){if(t===ot.R){if(Qt(rt.zt)||Qt(rt.name)||Qt(rt.Et)||Qt(rt.Ot)||Qt(rt.Ht)){const t=Yt(1);Xi(),Xt(t)}}else if(Qt(rt.name))if(t===ot.H){const t=Yt(1);Qi(),Xt(t)}else if(t===ot.ut){const t=Yt(1);eo(),Xt(t)}else if(t===ot.Y){const t=Yt(1);no(!1),Xt(t)}Ct()}(o):Ct()):Ct()}(t))}function Fo(){if(!kt(ot.T))return!1;const t=pt.snapshot();return Wt(),!kt(ot.ft)||At()?(pt.restoreFromSnapshot(t),!1):(Wt(),!Qt(rt.name)||At()?(pt.restoreFromSnapshot(t),!1):(pt.restoreFromSnapshot(t),!0))}function To(){for(;Qt(rt.at);)Io()}function Io(){if(Wt(),Zt(rt.parenL))mi(),Ft(rt.parenR);else{for(Vi();Zt(rt.dot);)Vi();ut?((Qt(rt.lessThan)||Qt(rt.bitShiftL))&&ei(),Oo()):Oo()}}function Oo(){Zt(rt.parenL)&&_i()}function Ro(t){Wt(),Mo(!1,t),Ct()}function Do(t=!1,e=0){const n=pt.tokens.length;pt.scopeDepth++,Ft(rt.braceL),e&&(pt.tokens[pt.tokens.length-1].contextId=e),Po(rt.braceR),e&&(pt.tokens[pt.tokens.length-1].contextId=e),pt.scopes.push(new at(n,pt.tokens.length,t)),pt.scopeDepth--}function Po(t){for(;!Zt(t)&&!pt.error;)Co(!0)}function jo(){Ft(rt.semi),Qt(rt.semi)||mi(),Ft(rt.semi),Qt(rt.parenR)||mi(),Ft(rt.parenR),Co(!1)}function No(t){t?wt(ot.J):Wt(),mi(),Ft(rt.parenR),Co(!1)}function Mo(t,e){for(;;){if(Lo(e),Zt(rt.eq)){const e=pt.tokens.length-1;vi(t),pt.tokens[e].rhsEndIndex=pt.tokens.length}if(!Zt(rt.comma))break}}function Lo(t){pn(t),ut?function(){const t=Yt(0);At()||Zt(rt.bang),zn(),Xt(t)}():ht&&Qt(rt.colon)&&$o()}function zo(t,e,n=!1){Qt(rt.star)&&Wt(),!e||n||Qt(rt.name)||Qt(rt.Ut)||Tt();let i=null;Qt(rt.name)&&(e||(i=pt.tokens.length,pt.scopeDepth++),dn(!1));const o=pt.tokens.length;pt.scopeDepth++,Bo(),Hi(t);const r=pt.tokens.length;pt.scopes.push(new at(o,r,!0)),pt.scopeDepth--,null!==i&&(pt.scopes.push(new at(i,r,!0)),pt.scopeDepth--)}function Bo(t=!1,e=0){ut?An():ht&&function(){if(Qt(rt.lessThan)){const t=Yt(0);oo(),Xt(t)}}(),Ft(rt.parenL),e&&(pt.tokens[pt.tokens.length-1].contextId=e),fn(rt.parenR,!1,!1,t,e),e&&(pt.tokens[pt.tokens.length-1].contextId=e)}function Ho(t,e=!1){const n=vt();Wt(),pt.tokens[pt.tokens.length-1].contextId=n,pt.tokens[pt.tokens.length-1].isExpression=!t;let i=null;t||(i=pt.tokens.length,pt.scopeDepth++),function(t,e=!1){ut&&(!t||e)&&kt(ot.L)||(Qt(rt.name)&&dn(!0),ut?An():ht&&Qt(rt.lessThan)&&oo())}(t,e),function(){let t=!1;Zt(rt.Bt)?(xi(),t=!0):t=!1,ut?function(t){if(t&&(Qt(rt.lessThan)||Qt(rt.bitShiftL))&&ei(),wt(ot.L)){pt.tokens[pt.tokens.length-1].type=rt.L;const t=Yt(1);Un(),Xt(t)}}(t):ht&&function(t){if(t&&Qt(rt.lessThan)&&ro(),kt(ot.L)){const t=Yt(0);Wt(),pt.tokens[pt.tokens.length-1].type=rt.L;do{to(),Qt(rt.lessThan)&&ro()}while(Zt(rt.comma));Xt(t)}}(t)}();const o=pt.tokens.length;(function(t){for(Ft(rt.braceL);!Zt(rt.braceR)&&!pt.error;)Zt(rt.semi)||(Qt(rt.at)?Io():Go(pt.start,t))})(n),pt.error||(pt.tokens[o].contextId=n,pt.tokens[pt.tokens.length-1].contextId=n,null===i)||(pt.scopes.push(new at(i,pt.tokens.length,!1)),pt.scopeDepth--)}function qo(){return Qt(rt.eq)||Qt(rt.semi)||Qt(rt.braceR)||Qt(rt.bang)||Qt(rt.colon)}function Uo(){return Qt(rt.parenL)||Qt(rt.lessThan)}function Go(t,e){ut&&kn([ot.R,ot.nt,ot.tt,ot.K,ot.Z]);let n=!1;if(Qt(rt.name)&&pt.contextualKeyword===ot.ct){if(Vi(),Uo())return void Vo(t,!1);if(qo())return void Yo();if(pt.tokens[pt.tokens.length-1].type=rt.ct,n=!0,Qt(rt.braceL))return pt.tokens[pt.tokens.length-1].contextId=e,void Do()}!function(t,e,n){if(ut&&function(t){const e=pt.tokens.length;kn([ot.$,ot.it,ot.R,ot.ct,ot.Z]);const n=pt.tokens.length;if(Tn()){for(let i=t?e-1:e;i<n;i++)pt.tokens[i].isType=!0;return!0}return!1}(e))return;if(Zt(rt.star))return Wo(n),void Vo(t,!1);Wo(n);let i=!1;const o=pt.tokens[pt.tokens.length-1];o.contextualKeyword===ot.O&&(i=!0),Jo(),Uo()?Vo(t,i):qo()?Yo():o.contextualKeyword!==ot.F||_t()?o.contextualKeyword!==ot.N&&o.contextualKeyword!==ot.st||_t()&&Qt(rt.star)?o.contextualKeyword!==ot.S||_t()?_t()?Yo():Tt():(Wo(n),Yo()):(pt.tokens[pt.tokens.length-1].type=o.contextualKeyword===ot.N?rt.N:rt.st,Wo(n),Vo(t,!1)):(pt.tokens[pt.tokens.length-1].type=rt.F,Qt(rt.star)&&Wt(),Wo(n),Jo(),Vo(t,!1))}(t,n,e)}function Vo(t,e){ut?An():ht&&Qt(rt.lessThan)&&oo(),zi(t,e)}function Wo(t){Li(t)}function Jo(){if(ut){const t=Yt(0);Zt(rt.question),Xt(t)}}function Yo(){if(ut?(Kt(rt.bang),zn()):ht&&Qt(rt.colon)&&$o(),Qt(rt.eq)){const t=pt.tokens.length;Wt(),vi(),pt.tokens[t].rhsEndIndex=pt.tokens.length}Ct()}function Xo(){const t=pt.tokens.length-1;ut&&function(){if(Zt(rt.qt))return kt(ot.ut)&&te()!==rt.eq&&$t(ot.ut),Zn(),!0;if(Zt(rt.eq))return mi(),Ct(),!0;if(wt(ot.A))return $t(ot.W),Vi(),Ct(),!0;if(kt(ot.ut)){const t=te();t!==rt.braceL&&t!==rt.star||Wt()}return!1}()||((ht?Qt(rt.star)||kt(ot.ut)&&te()===rt.star:Qt(rt.star))?ht?function(){if(wt(ot.ut)){const t=Yt(2);Qo(),Xt(t)}else Qo()}():Qo():function(){if(ut&&ii())return!1;if(ht&&Qt(rt.name)&&(pt.contextualKeyword===ot.ut||pt.contextualKeyword===ot.H||pt.contextualKeyword===ot.Y||pt.contextualKeyword===ot.D))return!1;if(Qt(rt.name))return pt.contextualKeyword!==ot.F;if(!Qt(rt.xt))return!1;const t=ie(),e=ne();if(e.type===rt.comma)return!0;if(e.type===rt.name&&e.contextualKeyword===ot.j){const e=ft.charCodeAt(oe(t+4));return e===st.quotationMark||e===st.apostrophe}return!1}()?(Vi(),Qt(rt.comma)&&te()===rt.star?(Ft(rt.comma),Ft(rt.star),$t(ot.A),Vi()):Zo(),Ko()):Zt(rt.xt)?function(){if(ut&&function(){if(kt(ot.$)&&te()===rt.zt)return pt.type=rt.$,Wt(),Ho(!0,!0),!0;if(kt(ot.H)){const t=Yt(2);return Qn(ot.H,!0),Xt(t),!0}return!1}())return;if(ht&&kt(ot.D)&&(Eo(),1))return;const t=pt.start;Zt(rt.Et)?zo(t,!0,!0):kt(ot.F)&&te()===rt.Et?(wt(ot.F),Zt(rt.Et),zo(t,!0,!0)):Qt(rt.zt)?Ho(!0,!0):Qt(rt.at)?(To(),Ho(!0,!0)):(vi(),Ct())}():ut&&ii()||ht&&(kt(ot.ut)||kt(ot.H)||kt(ot.Y)||kt(ot.D))||pt.type===rt.Ot||pt.type===rt.Dt||pt.type===rt.Rt||pt.type===rt.Et||pt.type===rt.zt||kt(ot.F)||Qt(rt.at)?ut?function(){const t=wt(ot.R);t&&(pt.tokens[pt.tokens.length-1].type=rt.R);let e=!1;if(Qt(rt.name))if(t){const t=Yt(2);e=Kn(),Xt(t)}else e=Kn();if(!e)if(t){const t=Yt(2);Co(!0),Xt(t)}else Co(!0)}():ht?function(){if(kt(ot.ut)){const t=Yt(1);Wt(),Qt(rt.braceL)?(tr(),Ko()):eo(),Xt(t)}else if(kt(ot.Y)){const t=Yt(1);Wt(),no(!1),Xt(t)}else if(kt(ot.H)){const t=Yt(1);Wt(),Qi(),Xt(t)}else Co(!0)}():Co(!0):(tr(),Ko()),pt.tokens[t].rhsEndIndex=pt.tokens.length)}function Zo(){Zt(rt.comma)&&tr()}function Ko(){wt(ot.j)&&(Fi(),rr()),Ct()}function Qo(){Ft(rt.star),kt(ot.A)?(Wt(),pt.tokens[pt.tokens.length-1].type=rt.A,Vi(),Zo(),Ko()):Ko()}function tr(){let t=!0;for(Ft(rt.braceL);!Zt(rt.braceR)&&!pt.error;){if(t)t=!1;else if(Ft(rt.comma),Zt(rt.braceR))break;er()}}function er(){ut?function(){if(Vi(),Qt(rt.comma)||Qt(rt.braceR))pt.tokens[pt.tokens.length-1].identifierRole=Mt.ExportAccess;else{if(Vi(),Qt(rt.comma)||Qt(rt.braceR))return pt.tokens[pt.tokens.length-1].identifierRole=Mt.ExportAccess,pt.tokens[pt.tokens.length-2].isType=!0,void(pt.tokens[pt.tokens.length-1].isType=!0);Vi(),Qt(rt.comma)||Qt(rt.braceR)?pt.tokens[pt.tokens.length-3].identifierRole=Mt.ExportAccess:(Vi(),pt.tokens[pt.tokens.length-3].identifierRole=Mt.ExportAccess,pt.tokens[pt.tokens.length-4].isType=!0,pt.tokens[pt.tokens.length-3].isType=!0,pt.tokens[pt.tokens.length-2].isType=!0,pt.tokens[pt.tokens.length-1].isType=!0)}}():(Vi(),pt.tokens[pt.tokens.length-1].identifierRole=Mt.ExportAccess,wt(ot.A)&&Vi())}function nr(){if(ut&&Qt(rt.name)&&te()===rt.eq)Zn();else{if(ut&&kt(ot.ut)){const t=ne();if(t.type===rt.name&&t.contextualKeyword!==ot.j){if($t(ot.ut),te()===rt.eq)return void Zn()}else t.type!==rt.star&&t.type!==rt.braceL||$t(ot.ut)}Qt(rt.string)||(kt(ot.V)&&function(){const t=pt.snapshot();return $t(ot.V),wt(ot.j)?kt(ot.j)?(pt.restoreFromSnapshot(t),!0):(pt.restoreFromSnapshot(t),!1):Qt(rt.comma)?(pt.restoreFromSnapshot(t),!1):(pt.restoreFromSnapshot(t),!0)}()&&Wt(),function(){ht&&function(){if(Qt(rt.Xt)||kt(ot.ut)){const e=ne();(((t=e).type===rt.name||t.type&rt.IS_KEYWORD)&&t.contextualKeyword!==ot.j||e.type===rt.braceL||e.type===rt.star)&&Wt()}var t}();let t=!0;if(!Qt(rt.name)||(ir(),Zt(rt.comma))){if(Qt(rt.star))return Wt(),$t(ot.A),void ir();for(Ft(rt.braceL);!Zt(rt.braceR)&&!pt.error;){if(t)t=!1;else if(Zt(rt.colon)&&Tt("ES2015 named imports do not destructure. Use another statement for destructuring after the import."),Ft(rt.comma),Zt(rt.braceR))break;or()}}}(),$t(ot.j)),Fi(),rr(),Ct()}}function ir(){un()}function or(){ut?function(){if(Vi(),Qt(rt.comma)||Qt(rt.braceR))pt.tokens[pt.tokens.length-1].identifierRole=Mt.ImportDeclaration;else{if(Vi(),Qt(rt.comma)||Qt(rt.braceR))return pt.tokens[pt.tokens.length-1].identifierRole=Mt.ImportDeclaration,pt.tokens[pt.tokens.length-2].isType=!0,void(pt.tokens[pt.tokens.length-1].isType=!0);if(Vi(),Qt(rt.comma)||Qt(rt.braceR))return pt.tokens[pt.tokens.length-3].identifierRole=Mt.ImportAccess,void(pt.tokens[pt.tokens.length-1].identifierRole=Mt.ImportDeclaration);Vi(),pt.tokens[pt.tokens.length-3].identifierRole=Mt.ImportAccess,pt.tokens[pt.tokens.length-1].identifierRole=Mt.ImportDeclaration,pt.tokens[pt.tokens.length-4].isType=!0,pt.tokens[pt.tokens.length-3].isType=!0,pt.tokens[pt.tokens.length-2].isType=!0,pt.tokens[pt.tokens.length-1].isType=!0}}():ht?function(){const t=pt.contextualKeyword===ot.ut||pt.type===rt.Xt;t?Wt():Vi(),kt(ot.A)&&!xt(ot.A)?(Vi(),(!t||Qt(rt.name)||pt.type&rt.IS_KEYWORD)&&Vi()):(t&&(Qt(rt.name)||pt.type&rt.IS_KEYWORD)&&Vi(),wt(ot.A)&&Vi())}():(un(),kt(ot.A)&&(pt.tokens[pt.tokens.length-1].identifierRole=Mt.ImportAccess,Wt(),un()))}function rr(){(Qt(rt.jt)||kt(ot._)&&!At())&&(Wt(),Ni(!1,!1))}function sr(){return 0===pt.pos&&ft.charCodeAt(0)===st.numberSign&&ft.charCodeAt(1)===st.exclamationMark&&ce(2),se(),function(){if(Po(rt.eof),pt.scopes.push(new at(0,pt.tokens.length,!0)),0!==pt.scopeDepth)throw new Error(`Invalid scope depth at end of file: ${pt.scopeDepth}`);return new ar(pt.tokens,pt.scopes)}()}class ar{constructor(t,e){this.tokens=t,this.scopes=e}}class cr{Qt(){this.resultCode=""}te(){this.resultMappings=new Array(this.tokens.length)}ee(){this.tokenIndex=0}constructor(t,e,n,i,o){this.code=t,this.tokens=e,this.isFlowEnabled=n,this.disableESTransforms=i,this.helperManager=o,cr.prototype.Qt.call(this),cr.prototype.te.call(this),cr.prototype.ee.call(this)}snapshot(){return{resultCode:this.resultCode,tokenIndex:this.tokenIndex}}restoreToSnapshot(t){this.resultCode=t.resultCode,this.tokenIndex=t.tokenIndex}dangerouslyGetAndRemoveCodeSinceSnapshot(t){const e=this.resultCode.slice(t.resultCode.length);return this.resultCode=t.resultCode,e}reset(){this.resultCode="",this.resultMappings=new Array(this.tokens.length),this.tokenIndex=0}matchesContextualAtIndex(t,e){return this.matches1AtIndex(t,rt.name)&&this.tokens[t].contextualKeyword===e}identifierNameAtIndex(t){return this.identifierNameForToken(this.tokens[t])}identifierNameAtRelativeIndex(t){return this.identifierNameForToken(this.tokenAtRelativeIndex(t))}identifierName(){return this.identifierNameForToken(this.currentToken())}identifierNameForToken(t){return this.code.slice(t.start,t.end)}rawCodeForToken(t){return this.code.slice(t.start,t.end)}stringValueAtIndex(t){return this.stringValueForToken(this.tokens[t])}stringValue(){return this.stringValueForToken(this.currentToken())}stringValueForToken(t){return this.code.slice(t.start+1,t.end-1)}matches1AtIndex(t,e){return this.tokens[t].type===e}matches2AtIndex(t,e,n){return this.tokens[t].type===e&&this.tokens[t+1].type===n}matches3AtIndex(t,e,n,i){return this.tokens[t].type===e&&this.tokens[t+1].type===n&&this.tokens[t+2].type===i}matches1(t){return this.tokens[this.tokenIndex].type===t}matches2(t,e){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e}matches3(t,e,n){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n}matches4(t,e,n,i){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n&&this.tokens[this.tokenIndex+3].type===i}matches5(t,e,n,i,o){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n&&this.tokens[this.tokenIndex+3].type===i&&this.tokens[this.tokenIndex+4].type===o}matchesContextual(t){return this.matchesContextualAtIndex(this.tokenIndex,t)}matchesContextIdAndLabel(t,e){return this.matches1(t)&&this.currentToken().contextId===e}previousWhitespaceAndComments(){let t=this.code.slice(this.tokenIndex>0?this.tokens[this.tokenIndex-1].end:0,this.tokenIndex<this.tokens.length?this.tokens[this.tokenIndex].start:this.code.length);return this.isFlowEnabled&&(t=t.replace(/@flow/g,"")),t}replaceToken(t){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=t,this.appendTokenSuffix(),this.tokenIndex++}replaceTokenTrimmingLeftWhitespace(t){this.resultCode+=this.previousWhitespaceAndComments().replace(/[^\r\n]/g,""),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=t,this.appendTokenSuffix(),this.tokenIndex++}removeInitialToken(){this.replaceToken("")}removeToken(){this.replaceTokenTrimmingLeftWhitespace("")}removeBalancedCode(){let t=0;for(;!this.isAtEnd();){if(this.matches1(rt.braceL))t++;else if(this.matches1(rt.braceR)){if(0===t)return;t--}this.removeToken()}}copyExpectedToken(t){if(this.tokens[this.tokenIndex].type!==t)throw new Error(`Expected token ${t}`);this.copyToken()}copyToken(){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}copyTokenWithPrefix(t){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultCode+=t,this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}appendTokenPrefix(){const t=this.currentToken();if((t.numNullishCoalesceStarts||t.isOptionalChainStart)&&(t.isAsyncOperation=function(t){let e=t.currentIndex(),n=0;const i=t.currentToken();do{const o=t.tokens[e];if(o.isOptionalChainStart&&n++,o.isOptionalChainEnd&&n--,n+=o.numNullishCoalesceStarts,n-=o.numNullishCoalesceEnds,o.contextualKeyword===ot.T&&null==o.identifierRole&&o.scopeDepth===i.scopeDepth)return!0;e+=1}while(n>0&&e<t.tokens.length);return!1}(this)),!this.disableESTransforms){if(t.numNullishCoalesceStarts)for(let e=0;e<t.numNullishCoalesceStarts;e++)t.isAsyncOperation?(this.resultCode+="await ",this.resultCode+=this.helperManager.getHelperName("asyncNullishCoalesce")):this.resultCode+=this.helperManager.getHelperName("nullishCoalesce"),this.resultCode+="(";t.isOptionalChainStart&&(t.isAsyncOperation&&(this.resultCode+="await "),this.tokenIndex>0&&this.tokenAtRelativeIndex(-1).type===rt.Kt?this.resultCode+=this.helperManager.getHelperName(t.isAsyncOperation?"asyncOptionalChainDelete":"optionalChainDelete"):this.resultCode+=this.helperManager.getHelperName(t.isAsyncOperation?"asyncOptionalChain":"optionalChain"),this.resultCode+="([")}}appendTokenSuffix(){const t=this.currentToken();if(t.isOptionalChainEnd&&!this.disableESTransforms&&(this.resultCode+="])"),t.numNullishCoalesceEnds&&!this.disableESTransforms)for(let e=0;e<t.numNullishCoalesceEnds;e++)this.resultCode+="))"}appendCode(t){this.resultCode+=t}currentToken(){return this.tokens[this.tokenIndex]}currentTokenCode(){const t=this.currentToken();return this.code.slice(t.start,t.end)}tokenAtRelativeIndex(t){return this.tokens[this.tokenIndex+t]}currentIndex(){return this.tokenIndex}nextToken(){if(this.tokenIndex===this.tokens.length)throw new Error("Unexpectedly reached end of input.");this.tokenIndex++}previousToken(){this.tokenIndex--}finish(){if(this.tokenIndex!==this.tokens.length)throw new Error("Tried to finish processing tokens before reaching the end.");return this.resultCode+=this.previousWhitespaceAndComments(),{code:this.resultCode,mappings:this.resultMappings}}isAtEnd(){return this.tokenIndex===this.tokens.length}}function lr(t,e){for(t.nextToken();t.currentToken().contextId!==e;)t.nextToken();for(;ur(t.tokenAtRelativeIndex(-1));)t.previousToken()}function dr(t){const e=[];t.nextToken();const n=t.currentToken().contextId;if(null==n)throw new Error("Expected context ID on open-paren starting constructor params.");for(;!t.matchesContextIdAndLabel(rt.parenR,n);)if(t.currentToken().contextId===n){if(t.nextToken(),ur(t.currentToken())){for(t.nextToken();ur(t.currentToken());)t.nextToken();const n=t.currentToken();if(n.type!==rt.name)throw new Error("Expected identifier after access modifiers in constructor arg.");const i=t.identifierNameForToken(n);e.push(`this.${i} = ${i}`)}}else t.nextToken();for(t.nextToken();t.currentToken().isType;)t.nextToken();let i=t.currentIndex(),o=!1;for(;!t.matchesContextIdAndLabel(rt.braceR,n);){if(!o&&t.matches2(rt.Lt,rt.parenL)){t.nextToken();const e=t.currentToken().contextId;if(null==e)throw new Error("Expected a context ID on the super call");for(;!t.matchesContextIdAndLabel(rt.parenR,e);)t.nextToken();i=t.currentIndex(),o=!0}t.nextToken()}return t.nextToken(),{constructorInitializerStatements:e,constructorInsertPos:i}}function ur(t){return[rt.F,rt.N,rt.st,rt.plus,rt.minus,rt.it,rt.ct,rt.nt,rt.K,rt.tt,rt.Z,rt.$,rt.star,rt.R,rt.hash].includes(t.type)}function hr(t){if(t.matches1(rt.bracketL)){const e=t.currentToken().contextId;if(null==e)throw new Error("Expected class context ID on computed name open bracket.");for(;!t.matchesContextIdAndLabel(rt.bracketR,e);)t.nextToken();t.nextToken()}else t.nextToken()}function pr(t){if(t.removeInitialToken(),t.removeToken(),t.removeToken(),t.removeToken(),t.matches1(rt.parenL))t.removeToken(),t.removeToken(),t.removeToken();else for(;t.matches1(rt.dot);)t.removeToken(),t.removeToken()}const fr={typeDeclarations:new Set,valueDeclarations:new Set};function mr(t){const e=new Set,n=new Set;for(let i=0;i<t.tokens.length;i++){const o=t.tokens[i];o.type===rt.name&&Ht(o)&&(o.isType?e.add(t.identifierNameForToken(o)):n.add(t.identifierNameForToken(o)))}return{typeDeclarations:e,valueDeclarations:n}}function vr(t){let e=t.currentIndex();for(;!t.matches1AtIndex(e,rt.braceR);)e++;return t.matchesContextualAtIndex(e+1,ot.j)&&t.matches1AtIndex(e+2,rt.string)}function gr(t){(t.matches2(rt.jt,rt.braceL)||t.matches2(rt.name,rt.braceL)&&t.matchesContextual(ot._))&&(t.removeToken(),t.removeToken(),t.removeBalancedCode(),t.removeToken())}function br(t,e,n,i){if(!t||e)return!1;const o=n.currentToken();if(null==o.rhsEndIndex)throw new Error("Expected non-null rhsEndIndex on export token.");const r=o.rhsEndIndex-n.currentIndex();if(3!==r&&(4!==r||!n.matches1AtIndex(o.rhsEndIndex-1,rt.semi)))return!1;const s=n.tokenAtRelativeIndex(2);if(s.type!==rt.name)return!1;const a=n.identifierNameForToken(s);return i.typeDeclarations.has(a)&&!i.valueDeclarations.has(a)}class yr extends we{Qt(){this.hadExport=!1}te(){this.hadNamedExport=!1}ee(){this.hadDefaultExport=!1}constructor(t,e,n,i,o,r,s,a,c,l,d,u){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.nameManager=i,this.helperManager=o,this.reactHotLoaderTransformer=r,this.enableLegacyBabel5ModuleInterop=s,this.enableLegacyTypeScriptModuleInterop=a,this.isTypeScriptTransformEnabled=c,this.isFlowTransformEnabled=l,this.preserveDynamicImport=d,this.keepUnusedImports=u,yr.prototype.Qt.call(this),yr.prototype.te.call(this),yr.prototype.ee.call(this),this.declarationInfo=c?mr(e):fr}getPrefixCode(){let t="";return this.hadExport&&(t+='Object.defineProperty(exports, "__esModule", {value: true});'),t}getSuffixCode(){return this.enableLegacyBabel5ModuleInterop&&this.hadDefaultExport&&!this.hadNamedExport?"\nmodule.exports = exports.default;\n":""}process(){return this.tokens.matches3(rt.qt,rt.name,rt.eq)?this.processImportEquals():this.tokens.matches1(rt.qt)?(this.processImport(),!0):this.tokens.matches2(rt.Ht,rt.eq)?(this.tokens.replaceToken("module.exports"),!0):this.tokens.matches1(rt.Ht)&&!this.tokens.currentToken().isType?(this.hadExport=!0,this.processExport()):!(!this.tokens.matches2(rt.name,rt.postIncDec)||!this.processPostIncDec())||(this.tokens.matches1(rt.name)||this.tokens.matches1(rt.jsxName)?this.processIdentifier():this.tokens.matches1(rt.eq)?this.processAssignment():this.tokens.matches1(rt.assign)?this.processComplexAssignment():!!this.tokens.matches1(rt.preIncDec)&&this.processPreIncDec())}processImportEquals(){const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.importProcessor.shouldAutomaticallyElideImportedName(t)?pr(this.tokens):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(rt.qt,rt.parenL)){if(this.preserveDynamicImport)return void this.tokens.copyToken();const t=this.enableLegacyTypeScriptModuleInterop?"":`${this.helperManager.getHelperName("interopRequireWildcard")}(`;this.tokens.replaceToken(`Promise.resolve().then(() => ${t}require`);const e=this.tokens.currentToken().contextId;if(null==e)throw new Error("Expected context ID on dynamic import invocation.");for(this.tokens.copyToken();!this.tokens.matchesContextIdAndLabel(rt.parenR,e);)this.rootTransformer.processToken();return void this.tokens.replaceToken(t?")))":"))")}if(this.removeImportAndDetectIfShouldElide())this.tokens.removeToken();else{const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),this.tokens.appendCode(this.importProcessor.claimImportCode(t))}gr(this.tokens),this.tokens.matches1(rt.semi)&&this.tokens.removeToken()}removeImportAndDetectIfShouldElide(){if(this.tokens.removeInitialToken(),this.tokens.matchesContextual(ot.ut)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,rt.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,ot.j))return this.removeRemainingImport(),!0;if(this.tokens.matches1(rt.name)||this.tokens.matches1(rt.star))return this.removeRemainingImport(),!1;if(this.tokens.matches1(rt.string))return!1;let t=!1,e=!1;for(;!this.tokens.matches1(rt.string);)(!t&&this.tokens.matches1(rt.braceL)||this.tokens.matches1(rt.comma))&&(this.tokens.removeToken(),this.tokens.matches1(rt.braceR)||(e=!0),(this.tokens.matches2(rt.name,rt.comma)||this.tokens.matches2(rt.name,rt.braceR)||this.tokens.matches4(rt.name,rt.name,rt.name,rt.comma)||this.tokens.matches4(rt.name,rt.name,rt.name,rt.braceR))&&(t=!0)),this.tokens.removeToken();return!this.keepUnusedImports&&(this.isTypeScriptTransformEnabled||!!this.isFlowTransformEnabled&&e)&&!t}removeRemainingImport(){for(;!this.tokens.matches1(rt.string);)this.tokens.removeToken()}processIdentifier(){const t=this.tokens.currentToken();if(t.shadowsGlobal)return!1;if(t.identifierRole===Mt.ObjectShorthand)return this.processObjectShorthand();if(t.identifierRole!==Mt.Access)return!1;const e=this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(t));if(!e)return!1;let n=this.tokens.currentIndex()+1;for(;n<this.tokens.tokens.length&&this.tokens.tokens[n].type===rt.parenR;)n++;return this.tokens.tokens[n].type===rt.parenL?this.tokens.tokenAtRelativeIndex(1).type===rt.parenL&&this.tokens.tokenAtRelativeIndex(-1).type!==rt.Nt?(this.tokens.replaceToken(`${e}.call(void 0, `),this.tokens.removeToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(rt.parenR)):this.tokens.replaceToken(`(0, ${e})`):this.tokens.replaceToken(e),!0}processObjectShorthand(){const t=this.tokens.identifierName(),e=this.importProcessor.getIdentifierReplacement(t);return!!e&&(this.tokens.replaceToken(`${t}: ${e}`),!0)}processExport(){if(this.tokens.matches2(rt.Ht,rt.D)||this.tokens.matches3(rt.Ht,rt.Dt,rt.D))return this.hadNamedExport=!0,!1;if(this.tokens.matches2(rt.Ht,rt.xt))return this.tokens.matches3(rt.Ht,rt.xt,rt.D)?(this.hadDefaultExport=!0,!1):(this.processExportDefault(),!0);if(this.tokens.matches2(rt.Ht,rt.braceL))return this.processExportBindings(),!0;if(this.tokens.matches2(rt.Ht,rt.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,ot.ut)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(rt.braceL)){for(;!this.tokens.matches1(rt.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(rt.A)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(ot.j)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,rt.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),gr(this.tokens)),!0}if(this.hadNamedExport=!0,this.tokens.matches2(rt.Ht,rt.Ot)||this.tokens.matches2(rt.Ht,rt.Rt)||this.tokens.matches2(rt.Ht,rt.Dt))return this.processExportVar(),!0;if(this.tokens.matches2(rt.Ht,rt.Et)||this.tokens.matches3(rt.Ht,rt.name,rt.Et))return this.processExportFunction(),!0;if(this.tokens.matches2(rt.Ht,rt.zt)||this.tokens.matches3(rt.Ht,rt.$,rt.zt)||this.tokens.matches2(rt.Ht,rt.at))return this.processExportClass(),!0;if(this.tokens.matches2(rt.Ht,rt.star))return this.processExportStar(),!0;throw new Error("Unrecognized export syntax.")}processAssignment(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t-1];if(e.isType||e.type!==rt.name)return!1;if(e.shadowsGlobal)return!1;if(t>=2&&this.tokens.matches1AtIndex(t-2,rt.dot))return!1;if(t>=2&&[rt.Ot,rt.Rt,rt.Dt].includes(this.tokens.tokens[t-2].type))return!1;const n=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(e));return!!n&&(this.tokens.copyToken(),this.tokens.appendCode(` ${n} =`),!0)}processComplexAssignment(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t-1];if(e.type!==rt.name)return!1;if(e.shadowsGlobal)return!1;if(t>=2&&this.tokens.matches1AtIndex(t-2,rt.dot))return!1;const n=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(e));return!!n&&(this.tokens.appendCode(` = ${n}`),this.tokens.copyToken(),!0)}processPreIncDec(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t+1];if(e.type!==rt.name)return!1;if(e.shadowsGlobal)return!1;if(t+2<this.tokens.tokens.length&&(this.tokens.matches1AtIndex(t+2,rt.dot)||this.tokens.matches1AtIndex(t+2,rt.bracketL)||this.tokens.matches1AtIndex(t+2,rt.parenL)))return!1;const n=this.tokens.identifierNameForToken(e),i=this.importProcessor.resolveExportBinding(n);return!!i&&(this.tokens.appendCode(`${i} = `),this.tokens.copyToken(),!0)}processPostIncDec(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t],n=this.tokens.tokens[t+1];if(e.type!==rt.name)return!1;if(e.shadowsGlobal)return!1;if(t>=1&&this.tokens.matches1AtIndex(t-1,rt.dot))return!1;const i=this.tokens.identifierNameForToken(e),o=this.importProcessor.resolveExportBinding(i);if(!o)return!1;const r=this.tokens.rawCodeForToken(n),s=this.importProcessor.getIdentifierReplacement(i)||i;if("++"===r)this.tokens.replaceToken(`(${s} = ${o} = ${s} + 1, ${s} - 1)`);else{if("--"!==r)throw new Error(`Unexpected operator: ${r}`);this.tokens.replaceToken(`(${s} = ${o} = ${s} - 1, ${s} + 1)`)}return this.tokens.removeToken(),!0}processExportDefault(){let t=!0;if(this.tokens.matches4(rt.Ht,rt.xt,rt.Et,rt.name)||this.tokens.matches5(rt.Ht,rt.xt,rt.name,rt.Et,rt.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,ot.F)){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.processNamedFunction();this.tokens.appendCode(` exports.default = ${t};`)}else if(this.tokens.matches4(rt.Ht,rt.xt,rt.zt,rt.name)||this.tokens.matches5(rt.Ht,rt.xt,rt.$,rt.zt,rt.name)||this.tokens.matches3(rt.Ht,rt.xt,rt.at)){this.tokens.removeInitialToken(),this.tokens.removeToken(),this.copyDecorators(),this.tokens.matches1(rt.$)&&this.tokens.removeToken();const t=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.default = ${t};`)}else if(br(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))t=!1,this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken();else if(this.reactHotLoaderTransformer){const t=this.nameManager.claimFreeName("_default");this.tokens.replaceToken(`let ${t}; exports.`),this.tokens.copyToken(),this.tokens.appendCode(` = ${t} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(t)}else this.tokens.replaceToken("exports."),this.tokens.copyToken(),this.tokens.appendCode(" =");t&&(this.hadDefaultExport=!0)}copyDecorators(){for(;this.tokens.matches1(rt.at);)if(this.tokens.copyToken(),this.tokens.matches1(rt.parenL))this.tokens.copyExpectedToken(rt.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(rt.parenR);else{for(this.tokens.copyExpectedToken(rt.name);this.tokens.matches1(rt.dot);)this.tokens.copyExpectedToken(rt.dot),this.tokens.copyExpectedToken(rt.name);this.tokens.matches1(rt.parenL)&&(this.tokens.copyExpectedToken(rt.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(rt.parenR))}}processExportVar(){this.isSimpleExportVar()?this.processSimpleExportVar():this.processComplexExportVar()}isSimpleExportVar(){let t=this.tokens.currentIndex();if(t++,t++,!this.tokens.matches1AtIndex(t,rt.name))return!1;for(t++;t<this.tokens.tokens.length&&this.tokens.tokens[t].isType;)t++;return!!this.tokens.matches1AtIndex(t,rt.eq)}processSimpleExportVar(){this.tokens.removeInitialToken(),this.tokens.copyToken();const t=this.tokens.identifierName();for(;!this.tokens.matches1(rt.eq);)this.rootTransformer.processToken();const e=this.tokens.currentToken().rhsEndIndex;if(null==e)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<e;)this.rootTransformer.processToken();this.tokens.appendCode(`; exports.${t} = ${t}`)}processComplexExportVar(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.tokens.matches1(rt.braceL);t&&this.tokens.appendCode("(");let e=0;for(;;)if(this.tokens.matches1(rt.braceL)||this.tokens.matches1(rt.dollarBraceL)||this.tokens.matches1(rt.bracketL))e++,this.tokens.copyToken();else if(this.tokens.matches1(rt.braceR)||this.tokens.matches1(rt.bracketR))e--,this.tokens.copyToken();else{if(0===e&&!this.tokens.matches1(rt.name)&&!this.tokens.currentToken().isType)break;if(this.tokens.matches1(rt.eq)){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken()}else{const t=this.tokens.currentToken();if(zt(t)){const e=this.tokens.identifierName();let n=this.importProcessor.getIdentifierReplacement(e);if(null===n)throw new Error(`Expected a replacement for ${e} in \`export var\` syntax.`);Gt(t)&&(n=`${e}: ${n}`),this.tokens.replaceToken(n)}else this.rootTransformer.processToken()}}if(t){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken();this.tokens.appendCode(")")}}processExportFunction(){this.tokens.replaceToken("");const t=this.processNamedFunction();this.tokens.appendCode(` exports.${t} = ${t};`)}processNamedFunction(){if(this.tokens.matches1(rt.Et))this.tokens.copyToken();else if(this.tokens.matches2(rt.name,rt.Et)){if(!this.tokens.matchesContextual(ot.F))throw new Error("Expected async keyword in function export.");this.tokens.copyToken(),this.tokens.copyToken()}if(this.tokens.matches1(rt.star)&&this.tokens.copyToken(),!this.tokens.matches1(rt.name))throw new Error("Expected identifier for exported function name.");const t=this.tokens.identifierName();if(this.tokens.copyToken(),this.tokens.currentToken().isType)for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return this.tokens.copyExpectedToken(rt.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(rt.parenR),this.rootTransformer.processPossibleTypeRange(),this.tokens.copyExpectedToken(rt.braceL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(rt.braceR),t}processExportClass(){this.tokens.removeInitialToken(),this.copyDecorators(),this.tokens.matches1(rt.$)&&this.tokens.removeToken();const t=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.${t} = ${t};`)}processExportBindings(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=vr(this.tokens),e=[];for(;;){if(this.tokens.matches1(rt.braceR)){this.tokens.removeToken();break}const n=ge(this.tokens);for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();if(!(n.isType||!t&&this.shouldElideExportedIdentifier(n.leftName))){const t=n.rightName;"default"===t?this.hadDefaultExport=!0:this.hadNamedExport=!0;const i=n.leftName,o=this.importProcessor.getIdentifierReplacement(i);e.push(`exports.${t} = ${o||i};`)}if(this.tokens.matches1(rt.braceR)){this.tokens.removeToken();break}if(this.tokens.matches2(rt.comma,rt.braceR)){this.tokens.removeToken(),this.tokens.removeToken();break}if(!this.tokens.matches1(rt.comma))throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);this.tokens.removeToken()}if(this.tokens.matchesContextual(ot.j)){this.tokens.removeToken();const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),gr(this.tokens)}else this.tokens.appendCode(e.join(" "));this.tokens.matches1(rt.semi)&&this.tokens.removeToken()}processExportStar(){for(this.tokens.removeInitialToken();!this.tokens.matches1(rt.string);)this.tokens.removeToken();const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),gr(this.tokens),this.tokens.matches1(rt.semi)&&this.tokens.removeToken()}shouldElideExportedIdentifier(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.declarationInfo.valueDeclarations.has(t)}}class kr extends we{constructor(t,e,n,i,o,r,s,a){super(),this.tokens=t,this.nameManager=e,this.helperManager=n,this.reactHotLoaderTransformer=i,this.isTypeScriptTransformEnabled=o,this.isFlowTransformEnabled=r,this.keepUnusedImports=s,this.nonTypeIdentifiers=o&&!s?Fe(t,a):new Set,this.declarationInfo=o&&!s?mr(t):fr,this.injectCreateRequireForImportRequire=Boolean(a.injectCreateRequireForImportRequire)}process(){if(this.tokens.matches3(rt.qt,rt.name,rt.eq))return this.processImportEquals();if(this.tokens.matches4(rt.qt,rt.name,rt.name,rt.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,ot.ut)){this.tokens.removeInitialToken();for(let t=0;t<7;t++)this.tokens.removeToken();return!0}if(this.tokens.matches2(rt.Ht,rt.eq))return this.tokens.replaceToken("module.exports"),!0;if(this.tokens.matches5(rt.Ht,rt.qt,rt.name,rt.name,rt.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,ot.ut)){this.tokens.removeInitialToken();for(let t=0;t<8;t++)this.tokens.removeToken();return!0}if(this.tokens.matches1(rt.qt))return this.processImport();if(this.tokens.matches2(rt.Ht,rt.xt))return this.processExportDefault();if(this.tokens.matches2(rt.Ht,rt.braceL))return this.processNamedExports();if(this.tokens.matches2(rt.Ht,rt.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,ot.ut)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(rt.braceL)){for(;!this.tokens.matches1(rt.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(rt.A)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(ot.j)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,rt.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),gr(this.tokens)),!0}return!1}processImportEquals(){const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.shouldAutomaticallyElideImportedName(t)?pr(this.tokens):this.injectCreateRequireForImportRequire?(this.tokens.replaceToken("const"),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.replaceToken(this.helperManager.getHelperName("require"))):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(rt.qt,rt.parenL))return!1;const t=this.tokens.snapshot();if(this.removeImportTypeBindings()){for(this.tokens.restoreToSnapshot(t);!this.tokens.matches1(rt.string);)this.tokens.removeToken();this.tokens.removeToken(),gr(this.tokens),this.tokens.matches1(rt.semi)&&this.tokens.removeToken()}return!0}removeImportTypeBindings(){if(this.tokens.copyExpectedToken(rt.qt),this.tokens.matchesContextual(ot.ut)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,rt.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,ot.j))return!0;if(this.tokens.matches1(rt.string))return this.tokens.copyToken(),!1;this.tokens.matchesContextual(ot.V)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,ot.j)&&this.tokens.copyToken();let t=!1,e=!1,n=!1;if(this.tokens.matches1(rt.name)&&(this.shouldAutomaticallyElideImportedName(this.tokens.identifierName())?(this.tokens.removeToken(),this.tokens.matches1(rt.comma)&&this.tokens.removeToken()):(t=!0,this.tokens.copyToken(),this.tokens.matches1(rt.comma)&&(n=!0,this.tokens.removeToken()))),this.tokens.matches1(rt.star))this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2))?(this.tokens.removeToken(),this.tokens.removeToken(),this.tokens.removeToken()):(n&&this.tokens.appendCode(","),t=!0,this.tokens.copyExpectedToken(rt.star),this.tokens.copyExpectedToken(rt.name),this.tokens.copyExpectedToken(rt.name));else if(this.tokens.matches1(rt.braceL)){for(n&&this.tokens.appendCode(","),this.tokens.copyToken();!this.tokens.matches1(rt.braceR);){e=!0;const n=ge(this.tokens);if(n.isType||this.shouldAutomaticallyElideImportedName(n.rightName)){for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();this.tokens.matches1(rt.comma)&&this.tokens.removeToken()}else{for(t=!0;this.tokens.currentIndex()<n.endIndex;)this.tokens.copyToken();this.tokens.matches1(rt.comma)&&this.tokens.copyToken()}}this.tokens.copyExpectedToken(rt.braceR)}return!this.keepUnusedImports&&(this.isTypeScriptTransformEnabled||!!this.isFlowTransformEnabled&&e)&&!t}shouldAutomaticallyElideImportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(t)}processExportDefault(){if(br(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))return this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken(),!0;if(!(this.tokens.matches4(rt.Ht,rt.xt,rt.Et,rt.name)||this.tokens.matches5(rt.Ht,rt.xt,rt.name,rt.Et,rt.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,ot.F)||this.tokens.matches4(rt.Ht,rt.xt,rt.zt,rt.name)||this.tokens.matches5(rt.Ht,rt.xt,rt.$,rt.zt,rt.name))&&this.reactHotLoaderTransformer){const t=this.nameManager.claimFreeName("_default");return this.tokens.replaceToken(`let ${t}; export`),this.tokens.copyToken(),this.tokens.appendCode(` ${t} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(t),!0}return!1}processNamedExports(){if(!this.isTypeScriptTransformEnabled)return!1;this.tokens.copyExpectedToken(rt.Ht),this.tokens.copyExpectedToken(rt.braceL);const t=vr(this.tokens);let e=!1;for(;!this.tokens.matches1(rt.braceR);){const n=ge(this.tokens);if(n.isType||!t&&this.shouldElideExportedName(n.leftName)){for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();this.tokens.matches1(rt.comma)&&this.tokens.removeToken()}else{for(e=!0;this.tokens.currentIndex()<n.endIndex;)this.tokens.copyToken();this.tokens.matches1(rt.comma)&&this.tokens.copyToken()}}return this.tokens.copyExpectedToken(rt.braceR),this.keepUnusedImports||!t||e||(this.tokens.removeToken(),this.tokens.removeToken(),gr(this.tokens)),!0}shouldElideExportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&this.declarationInfo.typeDeclarations.has(t)&&!this.declarationInfo.valueDeclarations.has(t)}}class xr extends we{constructor(t,e,n){super(),this.rootTransformer=t,this.tokens=e,this.isImportsTransformEnabled=n}process(){return!(!(this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange())&&(this.tokens.matches1(rt.D)?(this.processEnum(),0):this.tokens.matches2(rt.Ht,rt.D)?(this.processNamedExportEnum(),0):!this.tokens.matches3(rt.Ht,rt.xt,rt.D)||(this.processDefaultExportEnum(),0)))}processNamedExportEnum(){if(this.isImportsTransformEnabled){this.tokens.removeInitialToken();const t=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.tokens.appendCode(` exports.${t} = ${t};`)}else this.tokens.copyToken(),this.processEnum()}processDefaultExportEnum(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.tokens.appendCode(this.isImportsTransformEnabled?` exports.default = ${t};`:` export default ${t};`)}processEnum(){this.tokens.replaceToken("const"),this.tokens.copyExpectedToken(rt.name);let t=!1;this.tokens.matchesContextual(ot.J)&&(this.tokens.removeToken(),t=this.tokens.matchesContextual(ot.lt),this.tokens.removeToken());const e=this.tokens.matches3(rt.braceL,rt.name,rt.eq);this.tokens.appendCode(' = require("flow-enums-runtime")');const n=!t&&!e;for(this.tokens.replaceTokenTrimmingLeftWhitespace(n?".Mirrored([":"({");!this.tokens.matches1(rt.braceR);){if(this.tokens.matches1(rt.ellipsis)){this.tokens.removeToken();break}this.processEnumElement(t,e),this.tokens.matches1(rt.comma)&&this.tokens.copyToken()}this.tokens.replaceToken(n?"]);":"});")}processEnumElement(t,e){if(t){const t=this.tokens.identifierName();this.tokens.copyToken(),this.tokens.appendCode(`: Symbol("${t}")`)}else e?(this.tokens.copyToken(),this.tokens.replaceTokenTrimmingLeftWhitespace(":"),this.tokens.copyToken()):this.tokens.replaceToken(`"${this.tokens.identifierName()}"`)}}const wr="jest",$r=["mock","unmock","enableAutomock","disableAutomock"];class Sr extends we{Qt(){this.hoistedFunctionNames=[]}constructor(t,e,n,i){super(),this.rootTransformer=t,this.tokens=e,this.nameManager=n,this.importProcessor=i,Sr.prototype.Qt.call(this)}process(){return!(0!==this.tokens.currentToken().scopeDepth||!this.tokens.matches4(rt.name,rt.dot,rt.name,rt.parenL)||this.tokens.identifierName()!==wr)&&!function(t){let e,n=t[0],i=1;for(;i<t.length;){const o=t[i],r=t[i+1];if(i+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(e=n,n=r(n)):"call"!==o&&"optionalCall"!==o||(n=r((...t)=>n.call(e,...t)),e=void 0)}return n}([this,"access",t=>t.importProcessor,"optionalAccess",t=>t.getGlobalNames,"call",t=>t(),"optionalAccess",t=>t.has,"call",t=>t(wr)])&&this.extractHoistedCalls()}getHoistedCode(){return this.hoistedFunctionNames.length>0?this.hoistedFunctionNames.map(t=>`${t}();`).join(""):""}extractHoistedCalls(){this.tokens.removeToken();let t=!1;for(;this.tokens.matches3(rt.dot,rt.name,rt.parenL);){const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);if($r.includes(e)){const e=this.nameManager.claimFreeName("__jestHoist");this.hoistedFunctionNames.push(e),this.tokens.replaceToken(`function ${e}(){${wr}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(rt.parenR),this.tokens.appendCode(";}"),t=!1}else t?this.tokens.copyToken():this.tokens.replaceToken(`${wr}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(rt.parenR),t=!0}return!0}}class Ar extends we{constructor(t){super(),this.tokens=t}process(){if(this.tokens.matches1(rt.num)){const t=this.tokens.currentTokenCode();if(t.includes("_"))return this.tokens.replaceToken(t.replace(/_/g,"")),!0}return!1}}class Er extends we{constructor(t,e){super(),this.tokens=t,this.nameManager=e}process(){return!!this.tokens.matches2(rt.bt,rt.braceL)&&(this.tokens.copyToken(),this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`),!0)}}class _r extends we{constructor(t,e){super(),this.tokens=t,this.nameManager=e}process(){if(this.tokens.matches1(rt.nullishCoalescing)){const t=this.tokens.currentToken();return this.tokens.replaceTokenTrimmingLeftWhitespace(this.tokens.tokens[t.nullishStartIndex].isAsyncOperation?", async () => (":", () => ("),!0}if(this.tokens.matches1(rt.Kt)&&this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)return this.tokens.removeInitialToken(),!0;const t=this.tokens.currentToken().subscriptStartIndex;if(null!=t&&this.tokens.tokens[t].isOptionalChainStart&&this.tokens.tokenAtRelativeIndex(-1).type!==rt.Lt){const e=this.nameManager.claimFreeName("_");let n;if(n=t>0&&this.tokens.matches1AtIndex(t-1,rt.Kt)&&this.isLastSubscriptInChain()?`${e} => delete ${e}`:`${e} => ${e}`,this.tokens.tokens[t].isAsyncOperation&&(n=`async ${n}`),this.tokens.matches2(rt.questionDot,rt.parenL)||this.tokens.matches2(rt.questionDot,rt.lessThan))this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${n}`);else if(this.tokens.matches2(rt.questionDot,rt.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}`);else if(this.tokens.matches1(rt.questionDot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}.`);else if(this.tokens.matches1(rt.dot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}.`);else if(this.tokens.matches1(rt.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}[`);else{if(!this.tokens.matches1(rt.parenL))throw new Error("Unexpected subscript operator in optional chain.");this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${n}(`)}return!0}return!1}isLastSubscriptInChain(){let t=0;for(let e=this.tokens.currentIndex()+1;;e++){if(e>=this.tokens.tokens.length)throw new Error("Reached the end of the code while finding the end of the access chain.");if(this.tokens.tokens[e].isOptionalChainStart?t++:this.tokens.tokens[e].isOptionalChainEnd&&t--,t<0)return!0;if(0===t&&null!=this.tokens.tokens[e].subscriptStartIndex)return!1}}justSkippedSuper(){let t=0,e=this.tokens.currentIndex()-1;for(;;){if(e<0)throw new Error("Reached the start of the code while finding the start of the access chain.");if(this.tokens.tokens[e].isOptionalChainStart?t--:this.tokens.tokens[e].isOptionalChainEnd&&t++,t<0)return!1;if(0===t&&null!=this.tokens.tokens[e].subscriptStartIndex)return this.tokens.tokens[e-1].type===rt.Lt;e--}}}class Cr extends we{constructor(t,e,n,i){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.options=i}process(){const t=this.tokens.currentIndex();if("createReactClass"===this.tokens.identifierName()){const e=this.importProcessor&&this.importProcessor.getIdentifierReplacement("createReactClass");return e?this.tokens.replaceToken(`(0, ${e})`):this.tokens.copyToken(),this.tryProcessCreateClassCall(t),!0}if(this.tokens.matches3(rt.name,rt.dot,rt.name)&&"React"===this.tokens.identifierName()&&"createClass"===this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+2)){const e=this.importProcessor&&this.importProcessor.getIdentifierReplacement("React")||"React";return this.tokens.replaceToken(e),this.tokens.copyToken(),this.tokens.copyToken(),this.tryProcessCreateClassCall(t),!0}return!1}tryProcessCreateClassCall(t){const e=this.findDisplayName(t);e&&this.classNeedsDisplayName()&&(this.tokens.copyExpectedToken(rt.parenL),this.tokens.copyExpectedToken(rt.braceL),this.tokens.appendCode(`displayName: '${e}',`),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(rt.braceR),this.tokens.copyExpectedToken(rt.parenR))}findDisplayName(t){return t<2?null:this.tokens.matches2AtIndex(t-2,rt.name,rt.eq)||t>=2&&this.tokens.tokens[t-2].identifierRole===Mt.ObjectKey?this.tokens.identifierNameAtIndex(t-2):this.tokens.matches2AtIndex(t-2,rt.Ht,rt.xt)?this.getDisplayNameFromFilename():null}getDisplayNameFromFilename(){const t=(this.options.filePath||"unknown").split("/"),e=t[t.length-1],n=e.lastIndexOf("."),i=-1===n?e:e.slice(0,n);return"index"===i&&t[t.length-2]?t[t.length-2]:i}classNeedsDisplayName(){let t=this.tokens.currentIndex();if(!this.tokens.matches2(rt.parenL,rt.braceL))return!1;const e=this.tokens.tokens[t+1].contextId;if(null==e)throw new Error("Expected non-null context ID on object open-brace.");for(;t<this.tokens.tokens.length;t++){const n=this.tokens.tokens[t];if(n.type===rt.braceR&&n.contextId===e){t++;break}if("displayName"===this.tokens.identifierNameAtIndex(t)&&this.tokens.tokens[t].identifierRole===Mt.ObjectKey&&n.contextId===e)return!1}if(t===this.tokens.tokens.length)throw new Error("Unexpected end of input when processing React class.");return this.tokens.matches1AtIndex(t,rt.parenR)||this.tokens.matches2AtIndex(t,rt.comma,rt.parenR)}}class Fr extends we{Qt(){this.extractedDefaultExportName=null}constructor(t,e){super(),this.tokens=t,this.filePath=e,Fr.prototype.Qt.call(this)}setExtractedDefaultExportName(t){this.extractedDefaultExportName=t}getPrefixCode(){return"\n      (function () {\n        var enterModule = require('react-hot-loader').enterModule;\n        enterModule && enterModule(module);\n      })();".replace(/\s+/g," ").trim()}getSuffixCode(){const t=new Set;for(const n of this.tokens.tokens)!n.isType&&Ht(n)&&n.identifierRole!==Mt.ImportDeclaration&&t.add(this.tokens.identifierNameForToken(n));const e=Array.from(t).map(t=>({variableName:t,uniqueLocalName:t}));return this.extractedDefaultExportName&&e.push({variableName:this.extractedDefaultExportName,uniqueLocalName:"default"}),`\n;(function () {\n  var reactHotLoader = require('react-hot-loader').default;\n  var leaveModule = require('react-hot-loader').leaveModule;\n  if (!reactHotLoader) {\n    return;\n  }\n${e.map(({variableName:t,uniqueLocalName:e})=>`  reactHotLoader.register(${t}, "${e}", ${JSON.stringify(this.filePath||"")});`).join("\n")}\n  leaveModule(module);\n})();`}process(){return!1}}const Tr=new Set(["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield","enum","implements","interface","let","package","private","protected","public","static","await","false","null","true"]);function Ir(t){if(0===t.length)return!1;if(!jt[t.charCodeAt(0)])return!1;for(let e=1;e<t.length;e++)if(!Pt[t.charCodeAt(e)])return!1;return!Tr.has(t)}class Or extends we{constructor(t,e,n){super(),this.rootTransformer=t,this.tokens=e,this.isImportsTransformEnabled=n}process(){return!(!(this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange())&&(this.tokens.matches1(rt.nt)||this.tokens.matches1(rt.tt)||this.tokens.matches1(rt.K)||this.tokens.matches1(rt.$)||this.tokens.matches1(rt.it)||this.tokens.matches1(rt.Z)||this.tokens.matches1(rt.nonNullAssertion)?(this.tokens.removeInitialToken(),0):this.tokens.matches1(rt.D)||this.tokens.matches2(rt.Dt,rt.D)?(this.processEnum(),0):!this.tokens.matches2(rt.Ht,rt.D)&&!this.tokens.matches3(rt.Ht,rt.Dt,rt.D)||(this.processEnum(!0),0)))}processEnum(t=!1){for(this.tokens.removeInitialToken();this.tokens.matches1(rt.Dt)||this.tokens.matches1(rt.D);)this.tokens.removeToken();const e=this.tokens.identifierName();this.tokens.removeToken(),t&&!this.isImportsTransformEnabled&&this.tokens.appendCode("export "),this.tokens.appendCode(`var ${e}; (function (${e})`),this.tokens.copyExpectedToken(rt.braceL),this.processEnumBody(e),this.tokens.copyExpectedToken(rt.braceR),this.tokens.appendCode(t&&this.isImportsTransformEnabled?`)(${e} || (exports.${e} = ${e} = {}));`:`)(${e} || (${e} = {}));`)}processEnumBody(t){let e=null;for(;!this.tokens.matches1(rt.braceR);){const{nameStringCode:n,variableName:i}=this.extractEnumKeyInfo(this.tokens.currentToken());this.tokens.removeInitialToken(),this.tokens.matches3(rt.eq,rt.string,rt.comma)||this.tokens.matches3(rt.eq,rt.string,rt.braceR)?this.processStringLiteralEnumMember(t,n,i):this.tokens.matches1(rt.eq)?this.processExplicitValueEnumMember(t,n,i):this.processImplicitValueEnumMember(t,n,i,e),this.tokens.matches1(rt.comma)&&this.tokens.removeToken(),e=null!=i?i:`${t}[${n}]`}}extractEnumKeyInfo(t){if(t.type===rt.name){const e=this.tokens.identifierNameForToken(t);return{nameStringCode:`"${e}"`,variableName:Ir(e)?e:null}}if(t.type===rt.string){const e=this.tokens.stringValueForToken(t);return{nameStringCode:this.tokens.code.slice(t.start,t.end),variableName:Ir(e)?e:null}}throw new Error("Expected name or string at beginning of enum element.")}processStringLiteralEnumMember(t,e,n){null!=n?(this.tokens.appendCode(`const ${n}`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(`; ${t}[${e}] = ${n};`)):(this.tokens.appendCode(`${t}[${e}]`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(";"))}processExplicitValueEnumMember(t,e,n){const i=this.tokens.currentToken().rhsEndIndex;if(null==i)throw new Error("Expected rhsEndIndex on enum assign.");if(null!=n){for(this.tokens.appendCode(`const ${n}`),this.tokens.copyToken();this.tokens.currentIndex()<i;)this.rootTransformer.processToken();this.tokens.appendCode(`; ${t}[${t}[${e}] = ${n}] = ${e};`)}else{for(this.tokens.appendCode(`${t}[${t}[${e}]`),this.tokens.copyToken();this.tokens.currentIndex()<i;)this.rootTransformer.processToken();this.tokens.appendCode(`] = ${e};`)}}processImplicitValueEnumMember(t,e,n,i){let o=null!=i?`${i} + 1`:"0";null!=n&&(this.tokens.appendCode(`const ${n} = ${o}; `),o=n),this.tokens.appendCode(`${t}[${t}[${e}] = ${o}] = ${e};`)}}class Rr{Qt(){this.transformers=[]}te(){this.generatedVariables=[]}constructor(t,e,n,i){Rr.prototype.Qt.call(this),Rr.prototype.te.call(this),this.nameManager=t.nameManager,this.helperManager=t.helperManager;const{tokenProcessor:o,importProcessor:r}=t;this.tokens=o,this.isImportsTransformEnabled=e.includes("imports"),this.isReactHotLoaderTransformEnabled=e.includes("react-hot-loader"),this.disableESTransforms=Boolean(i.disableESTransforms),i.disableESTransforms||(this.transformers.push(new _r(o,this.nameManager)),this.transformers.push(new Ar(o)),this.transformers.push(new Er(o,this.nameManager))),e.includes("jsx")&&("preserve"!==i.jsxRuntime&&this.transformers.push(new $e(this,o,r,this.nameManager,i)),this.transformers.push(new Cr(this,o,r,i)));let s=null;if(e.includes("react-hot-loader")){if(!i.filePath)throw new Error("filePath is required when using the react-hot-loader transform.");s=new Fr(o,i.filePath),this.transformers.push(s)}if(e.includes("imports")){if(null===r)throw new Error("Expected non-null importProcessor with imports transform enabled.");this.transformers.push(new yr(this,o,r,this.nameManager,this.helperManager,s,n,Boolean(i.enableLegacyTypeScriptModuleInterop),e.includes("typescript"),e.includes("flow"),Boolean(i.preserveDynamicImport),Boolean(i.keepUnusedImports)))}else this.transformers.push(new kr(o,this.nameManager,this.helperManager,s,e.includes("typescript"),e.includes("flow"),Boolean(i.keepUnusedImports),i));e.includes("flow")&&this.transformers.push(new xr(this,o,e.includes("imports"))),e.includes("typescript")&&this.transformers.push(new Or(this,o,e.includes("imports"))),e.includes("jest")&&this.transformers.push(new Sr(this,o,this.nameManager,r))}transform(){this.tokens.reset(),this.processBalancedCode();let t=this.isImportsTransformEnabled?'"use strict";':"";for(const o of this.transformers)t+=o.getPrefixCode();t+=this.helperManager.emitHelpers(),t+=this.generatedVariables.map(t=>` var ${t};`).join("");for(const o of this.transformers)t+=o.getHoistedCode();let e="";for(const o of this.transformers)e+=o.getSuffixCode();const n=this.tokens.finish();let{code:i}=n;if(i.startsWith("#!")){let o=i.indexOf("\n");return-1===o&&(o=i.length,i+="\n"),{code:i.slice(0,o+1)+t+i.slice(o+1)+e,mappings:this.shiftMappings(n.mappings,t.length)}}return{code:t+i+e,mappings:this.shiftMappings(n.mappings,t.length)}}processBalancedCode(){let t=0,e=0;for(;!this.tokens.isAtEnd();){if(this.tokens.matches1(rt.braceL)||this.tokens.matches1(rt.dollarBraceL))t++;else if(this.tokens.matches1(rt.braceR)){if(0===t)return;t--}if(this.tokens.matches1(rt.parenL))e++;else if(this.tokens.matches1(rt.parenR)){if(0===e)return;e--}this.processToken()}}processToken(){if(this.tokens.matches1(rt.zt))this.processClass();else{for(const t of this.transformers)if(t.process())return;this.tokens.copyToken()}}processNamedClass(){if(!this.tokens.matches2(rt.zt,rt.name))throw new Error("Expected identifier for exported class name.");const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.processClass(),t}processClass(){const t=function(t,e,n,i){const o=e.snapshot(),r=function(t){const e=t.currentToken(),n=e.contextId;if(null==n)throw new Error("Expected context ID on class token.");const i=e.isExpression;if(null==i)throw new Error("Expected isExpression on class token.");let o=null,r=!1;for(t.nextToken(),t.matches1(rt.name)&&(o=t.identifierName());!t.matchesContextIdAndLabel(rt.braceL,n);)t.matches1(rt.Bt)&&!t.currentToken().isType&&(r=!0),t.nextToken();return{isExpression:i,className:o,hasSuperclass:r}}(e);let s=[];const a=[],c=[];let l=null;const d=[],u=[],h=e.currentToken().contextId;if(null==h)throw new Error("Expected non-null class context ID on class open-brace.");for(e.nextToken();!e.matchesContextIdAndLabel(rt.braceR,h);)if(e.matchesContextual(ot.O)&&!e.currentToken().isType)({constructorInitializerStatements:s,constructorInsertPos:l}=dr(e));else if(e.matches1(rt.semi))i||u.push({start:e.currentIndex(),end:e.currentIndex()+1}),e.nextToken();else if(e.currentToken().isType)e.nextToken();else{const o=e.currentIndex();let r=!1,p=!1,f=!1;for(;ur(e.currentToken());)e.matches1(rt.ct)&&(r=!0),e.matches1(rt.hash)&&(p=!0),(e.matches1(rt.R)||e.matches1(rt.$))&&(f=!0),e.nextToken();if(r&&e.matches1(rt.braceL)){lr(e,h);continue}if(p){lr(e,h);continue}if(e.matchesContextual(ot.O)&&!e.currentToken().isType){({constructorInitializerStatements:s,constructorInsertPos:l}=dr(e));continue}const m=e.currentIndex();if(hr(e),e.matches1(rt.lessThan)||e.matches1(rt.parenL)){lr(e,h);continue}for(;e.currentToken().isType;)e.nextToken();if(e.matches1(rt.eq)){const i=e.currentIndex(),o=e.currentToken().rhsEndIndex;if(null==o)throw new Error("Expected rhsEndIndex on class field assignment.");for(e.nextToken();e.currentIndex()<o;)t.processToken();let s;r?(s=n.claimFreeName("__initStatic"),c.push(s)):(s=n.claimFreeName("__init"),a.push(s)),d.push({initializerName:s,equalsIndex:i,start:m,end:e.currentIndex()})}else i&&!f||u.push({start:o,end:e.currentIndex()})}return e.restoreToSnapshot(o),i?{headerInfo:r,constructorInitializerStatements:s,instanceInitializerNames:[],staticInitializerNames:[],constructorInsertPos:l,fields:[],rangesToRemove:u}:{headerInfo:r,constructorInitializerStatements:s,instanceInitializerNames:a,staticInitializerNames:c,constructorInsertPos:l,fields:d,rangesToRemove:u}}(this,this.tokens,this.nameManager,this.disableESTransforms),e=(t.headerInfo.isExpression||!t.headerInfo.className)&&t.staticInitializerNames.length+t.instanceInitializerNames.length>0;let n=t.headerInfo.className;e&&(n=this.nameManager.claimFreeName("_class"),this.generatedVariables.push(n),this.tokens.appendCode(` (${n} =`));const i=this.tokens.currentToken().contextId;if(null==i)throw new Error("Expected class to have a context ID.");for(this.tokens.copyExpectedToken(rt.zt);!this.tokens.matchesContextIdAndLabel(rt.braceL,i);)this.processToken();this.processClassBody(t,n);const o=t.staticInitializerNames.map(t=>`${n}.${t}()`);e?this.tokens.appendCode(`, ${o.map(t=>`${t}, `).join("")}${n})`):t.staticInitializerNames.length>0&&this.tokens.appendCode(` ${o.map(t=>`${t};`).join(" ")}`)}processClassBody(t,e){const{headerInfo:n,constructorInsertPos:i,constructorInitializerStatements:o,fields:r,instanceInitializerNames:s,rangesToRemove:a}=t;let c=0,l=0;const d=this.tokens.currentToken().contextId;if(null==d)throw new Error("Expected non-null context ID on class.");this.tokens.copyExpectedToken(rt.braceL),this.isReactHotLoaderTransformEnabled&&this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");const u=o.length+s.length>0;if(null===i&&u){const t=this.makeConstructorInitCode(o,s,e);if(n.hasSuperclass){const e=this.nameManager.claimFreeName("args");this.tokens.appendCode(`constructor(...${e}) { super(...${e}); ${t}; }`)}else this.tokens.appendCode(`constructor() { ${t}; }`)}for(;!this.tokens.matchesContextIdAndLabel(rt.braceR,d);)if(c<r.length&&this.tokens.currentIndex()===r[c].start){let t=!1;for(this.tokens.matches1(rt.bracketL)?this.tokens.copyTokenWithPrefix(`${r[c].initializerName}() {this`):this.tokens.matches1(rt.string)||this.tokens.matches1(rt.num)?(this.tokens.copyTokenWithPrefix(`${r[c].initializerName}() {this[`),t=!0):this.tokens.copyTokenWithPrefix(`${r[c].initializerName}() {this.`);this.tokens.currentIndex()<r[c].end;)t&&this.tokens.currentIndex()===r[c].equalsIndex&&this.tokens.appendCode("]"),this.processToken();this.tokens.appendCode("}"),c++}else if(l<a.length&&this.tokens.currentIndex()>=a[l].start){for(this.tokens.currentIndex()<a[l].end&&this.tokens.removeInitialToken();this.tokens.currentIndex()<a[l].end;)this.tokens.removeToken();l++}else this.tokens.currentIndex()===i?(this.tokens.copyToken(),u&&this.tokens.appendCode(`;${this.makeConstructorInitCode(o,s,e)};`),this.processToken()):this.processToken();this.tokens.copyExpectedToken(rt.braceR)}makeConstructorInitCode(t,e,n){return[...t,...e.map(t=>`${n}.prototype.${t}.call(this)`)].join(";")}processPossibleArrowParamEnd(){if(this.tokens.matches2(rt.parenR,rt.colon)&&this.tokens.tokenAtRelativeIndex(1).isType){let t=this.tokens.currentIndex()+1;for(;this.tokens.tokens[t].isType;)t++;if(this.tokens.matches1AtIndex(t,rt.arrow)){for(this.tokens.removeInitialToken();this.tokens.currentIndex()<t;)this.tokens.removeToken();return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"),!0}}return!1}processPossibleAsyncArrowWithTypeParams(){if(!this.tokens.matchesContextual(ot.F)&&!this.tokens.matches1(rt.F))return!1;const t=this.tokens.tokenAtRelativeIndex(1);if(t.type!==rt.lessThan||!t.isType)return!1;let e=this.tokens.currentIndex()+1;for(;this.tokens.tokens[e].isType;)e++;if(this.tokens.matches1AtIndex(e,rt.parenL)){for(this.tokens.replaceToken("async ("),this.tokens.removeInitialToken();this.tokens.currentIndex()<e;)this.tokens.removeToken();return this.tokens.removeToken(),this.processBalancedCode(),this.processToken(),!0}return!1}processPossibleTypeRange(){if(this.tokens.currentToken().isType){for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return!0}return!1}shiftMappings(t,e){for(let n=0;n<t.length;n++){const i=t[n];void 0!==i&&(t[n]=i+e)}return t}}var Dr;function Pr(t,e,n){e++,t.matches1AtIndex(e,rt.parenL)||(t.matches1AtIndex(e,rt.name)&&(n.add(t.identifierNameAtIndex(e)),e++,t.matches1AtIndex(e,rt.comma)&&e++),t.matches1AtIndex(e,rt.star)&&(n.add(t.identifierNameAtIndex(e+=2)),e++),t.matches1AtIndex(e,rt.braceL)&&function(t,e,n){for(;;){if(t.matches1AtIndex(e,rt.braceR))return;const i=ge(t,e);if(e=i.endIndex,i.isType||n.add(i.rightName),t.matches2AtIndex(e,rt.comma,rt.braceR))return;if(t.matches1AtIndex(e,rt.braceR))return;if(!t.matches1AtIndex(e,rt.comma))throw new Error(`Unexpected token: ${JSON.stringify(t.tokens[e])}`);e++}}(t,++e,n))}Dr||(Dr=1,function(t){t.v=!0,t.LinesAndColumns=void 0;var e=function(){function t(t){this.string=t;for(var e=[0],n=0;n<t.length;)switch(t[n]){case"\n":e.push(n+=1);break;case"\r":"\n"===t[n+=1]&&(n+=1),e.push(n);break;default:n++}this.offsets=e}return t.prototype.locationForIndex=function(t){if(t<0||t>this.string.length)return null;for(var e=0,n=this.offsets;n[e+1]<=t;)e++;return{line:e,column:t-n[e]}},t.prototype.indexForLocation=function(t){var e=t.line,n=t.column;return e<0||e>=this.offsets.length||n<0||n>this.lengthOfLine(e)?null:this.offsets[e]+n},t.prototype.lengthOfLine=function(t){return(t===this.offsets.length-1?this.string.length:this.offsets[t+1])-this.offsets[t]},t}();t.LinesAndColumns=e,t.default=e}({}));const jr=O`
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
`;const Nr=O`
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
`,Mr=O`
  background: var(--vk-color-surface);
  border: 1px solid var(--vk-color-border);
  border-top: none;
  border-radius: 0 0 var(--vk-radius-md) var(--vk-radius-md);
  padding: 20px;
`,Lr=O`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
`,zr=O`
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
`,Br=O`
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
`,Hr=O`
  color: #e45;
  font-family: var(--vk-font-mono);
  font-size: 0.8rem;
  white-space: pre-wrap;
  margin: 0;
`,qr=["signal","computed","effect","batch","untrack","reactive","toRaw","isReactive","snapshot","html","each","css","keyframes","globalCss","cx"],Ur=[i,o,r,s,a,m,function(t){return null!=t&&t[l]?t[l]:t},v,g,y,_,O,R,D,P];function Gr({source:t,label:e="Live output"}){const n=t.trim(),o=i(""),s=i(!1),a=document.createElement("div");let c=[];function l(t){c.forEach(t=>t()),c=[],a.innerHTML="",o("");const e=t.replace(/^import\s+.*$/gm,"").trim();if(!e)return;let n;try{n=function(t,e){!function(t){an.strictCheck(t)}(e);try{const n=function(t,e){const n=e.transforms.includes("jsx"),i=e.transforms.includes("typescript"),o=e.transforms.includes("flow"),r=!0===e.disableESTransforms,s=function(t,e,n,i){if(i&&n)throw new Error("Cannot combine flow and typescript plugins.");yt(t,e,n,i);const o=sr();if(pt.error)throw gt(pt.error);return o}(t,n,i,o),a=s.tokens,c=s.scopes,l=new Ye(t,a),d=new Ve(l),u=new cr(t,a,o,r,d),h=Boolean(e.enableLegacyTypeScriptModuleInterop);let p=null;return e.transforms.includes("imports")?(p=new Te(l,u,h,e,e.transforms.includes("typescript"),Boolean(e.keepUnusedImports),d),p.preprocessTokens(),We(u,c,p.getGlobalNames()),e.transforms.includes("typescript")&&!e.keepUnusedImports&&p.pruneTypeOnlyImports()):e.transforms.includes("typescript")&&!e.keepUnusedImports&&We(u,c,function(t){const e=new Set;for(let n=0;n<t.tokens.length;n++)t.matches1AtIndex(n,rt.qt)&&!t.matches3AtIndex(n,rt.qt,rt.name,rt.eq)&&Pr(t,n,e);return e}(u)),{tokenProcessor:u,scopes:c,nameManager:l,importProcessor:p,helperManager:d}}(t,e),i=new Rr(n,e.transforms,Boolean(e.enableLegacyBabel5ModuleInterop),e).transform();let o={code:i.code};if(e.sourceMapOptions){if(!e.filePath)throw new Error("filePath must be specified when generating a source map.");o={...o,sourceMap:Ue(i,e.filePath,e.sourceMapOptions,t,n.tokenProcessor.tokens)}}return o}catch(n){throw e.filePath&&(n.message=`Error transforming ${e.filePath}: ${n.message}`),n}}(e,{transforms:["typescript"],disableESTransforms:!0}).code}catch(i){return void o(i?.message??String(i))}try{const t=[],e=(...e)=>{for(const n of e)t.push("string"==typeof n?document.createTextNode(n):n)},i=new Proxy(document.body,{get:(n,i)=>"append"===i?e:"appendChild"===i?e=>(t.push(e),e):Reflect.get(n,i)}),o=new Proxy(document,{get(t,n){if("body"===n)return i;if("getElementById"===n)return()=>{const t=document.createElement("div");return t.append=e,t};const o=Reflect.get(t,n);return"function"==typeof o?o.bind(t):o}}),s=[],l=t=>{const e=r(t);return s.push(e),e};new Function(...qr,"document",n)(...Ur.map((t,e)=>"effect"===qr[e]?l:t),o),t.forEach(t=>a.append(t)),c=s}catch(i){o(i?.message??String(i))}}l(n);const d=document.createElement("div");d.className=`${Nr} language-typescript`;const u=function(t,e){void 0===e&&(e={});var n,i=Z({class:"codejar-linenumbers",wrapClass:"codejar-wrap",width:"35px",backgroundColor:"rgba(128, 128, 128, 0.15)",color:""},e);return function(t){var e;(e=t).innerHTML=it.highlight(e.textContent||"",it.languages.typescript,"typescript"),n||(n=function(t,e){var n=getComputedStyle(t),i=document.createElement("div");i.className=e.wrapClass,i.style.position="relative";var o=document.createElement("div");o.className="codejar-linenumbers-inner-wrap",o.style.background=n.background,o.style.marginTop=n.borderTopWidth,o.style.marginBottom=n.borderBottomWidth,o.style.marginLeft=n.borderLeftWidth,o.style.borderTopLeftRadius=n.borderTopLeftRadius,o.style.borderBottomLeftRadius=n.borderBottomLeftRadius;var r=document.createElement("div");r.className=e.class,o.appendChild(r),i.appendChild(o),r.style.width=e.width,r.style.overflow="hidden",r.style.backgroundColor=e.backgroundColor,r.style.fontFamily=n.fontFamily,r.style.fontSize=n.fontSize,r.style.lineHeight=n.lineHeight,r.style.paddingTop="calc("+n.paddingTop+")",r.style.paddingLeft=n.paddingLeft,r.style.borderTopLeftRadius=n.borderTopLeftRadius,r.style.borderBottomLeftRadius=n.borderBottomLeftRadius;var s=document.createElement("div");return s.setAttribute("class","codejar-linenumber"),s.style.color=e.color||n.color,s.style.setProperty("mix-blend-mode","unset"),r.appendChild(s),t.style.paddingLeft="calc("+e.width+" + "+r.style.paddingLeft+" + 5px)",t.style.whiteSpace="pre",t.parentNode.insertBefore(i,t),i.appendChild(t),s}(t,i),t.addEventListener("scroll",function(){return n.style.top="-"+t.scrollTop+"px"}));for(var o=(t.textContent||"").replace(/\n$/g,"").split("\n").length,r="",s=0;s<o;s++)r+=s+1+"\n";n.innerText=r}}(0,{color:"#4a4a5a",backgroundColor:"rgba(255,255,255,0.04)"});function h(){const t=d.Ce;t&&t.updateCode(n),s(!1),l(n)}return requestAnimationFrame(()=>{const t=function(t,e,n={}){const i={tab:"\t",indentOn:/[({\[]$/,moveToNewLine:/^[)}\]]/,spellcheck:!1,catchTab:!0,preserveIdent:!0,addClosing:!0,history:!0,window:X,autoclose:{open:"([{'\"",close:")]}'\""},...n},o=i.window,r=o.document,s=[],a=[];let c,l=-1,d=!1,u=()=>{};t.setAttribute("contenteditable","plaintext-only"),t.setAttribute("spellcheck",i.spellcheck?"true":"false"),t.style.outline="none",t.style.overflowWrap="break-word",t.style.overflowY="auto",t.style.whiteSpace="pre-wrap";const h=(t,n)=>{e(t,n)},p=o.navigator.userAgent.match(/Firefox\/([0-9]+)\./),f=p?parseInt(p[1]):0;let m=!1;("plaintext-only"!==t.contentEditable||f>=136)&&(m=!0),m&&t.setAttribute("contenteditable","true");const v=D(()=>{const e=x();h(t,e),w(e)},30);let g=!1;const b=t=>!T(t)&&!I(t)&&"Meta"!==t.key&&"Control"!==t.key&&"Alt"!==t.key&&!t.key.startsWith("Arrow"),y=D(t=>{b(t)&&(_(),g=!1)},300),k=(e,n)=>{s.push([e,n]),t.addEventListener(e,n)};function x(){const e=M(),n={start:0,end:0,dir:void 0};let{anchorNode:i,anchorOffset:o,focusNode:s,focusOffset:a}=e;if(!i||!s)throw"error1";if(i===t&&s===t)return n.start=o>0&&t.textContent?t.textContent.length:0,n.end=a>0&&t.textContent?t.textContent.length:0,n.dir=a>=o?"->":"<-",n;if(i.nodeType===Node.ELEMENT_NODE){const t=r.createTextNode("");i.insertBefore(t,i.childNodes[o]),i=t,o=0}if(s.nodeType===Node.ELEMENT_NODE){const t=r.createTextNode("");s.insertBefore(t,s.childNodes[a]),s=t,a=0}return C(t,t=>{if(t===i&&t===s)return n.start+=o,n.end+=a,n.dir=o<=a?"->":"<-","stop";if(t===i){if(n.start+=o,n.dir)return"stop";n.dir="->"}else if(t===s){if(n.end+=a,n.dir)return"stop";n.dir="<-"}t.nodeType===Node.TEXT_NODE&&("->"!=n.dir&&(n.start+=t.nodeValue.length),"<-"!=n.dir&&(n.end+=t.nodeValue.length))}),t.normalize(),n}function w(e){const n=M();let i,o,s=0,a=0;if(e.dir||(e.dir="->"),e.start<0&&(e.start=0),e.end<0&&(e.end=0),"<-"==e.dir){const{start:t,end:n}=e;e.start=n,e.end=t}let c=0;C(t,t=>{if(t.nodeType!==Node.TEXT_NODE)return;const n=(t.nodeValue||"").length;if(c+n>e.start&&(i||(i=t,s=e.start-c),c+n>e.end))return o=t,a=e.end-c,"stop";c+=n}),i||(i=t,s=t.childNodes.length),o||(o=t,a=t.childNodes.length),"<-"==e.dir&&([i,s,o,a]=[o,a,i,s]);{const t=$(i);if(t){const e=r.createTextNode("");t.parentNode?.insertBefore(e,t),i=e,s=0}const e=$(o);if(e){const t=r.createTextNode("");e.parentNode?.insertBefore(t,e),o=t,a=0}}n.setBaseAndExtent(i,s,o,a),t.normalize()}function $(e){for(;e&&e!==t;){if(e.nodeType===Node.ELEMENT_NODE){const t=e;if("false"==t.getAttribute("contenteditable"))return t}e=e.parentNode}}function S(){const e=M().getRangeAt(0),n=r.createRange();return n.selectNodeContents(t),n.setEnd(e.startContainer,e.startOffset),n.toString()}function A(){const e=M().getRangeAt(0),n=r.createRange();return n.selectNodeContents(t),n.setStart(e.endContainer,e.endOffset),n.toString()}function E(t){if(m&&"Enter"===t.key)if(N(t),t.stopPropagation(),""==A()){R("\n ");const t=x();t.start=--t.end,w(t)}else R("\n")}function _(){if(!d)return;const e=t.innerHTML,n=x(),i=a[l];i&&i.html===e&&i.pos.start===n.start&&i.pos.end===n.end||(l++,a[l]={html:e,pos:n},a.splice(l+1),l>300&&(l=300,a.splice(0,1)))}function C(t,e){const n=[];t.firstChild&&n.push(t.firstChild);let i=n.pop();for(;i&&"stop"!==e(i);)i.nextSibling&&n.push(i.nextSibling),i.firstChild&&n.push(i.firstChild),i=n.pop()}function F(t){return t.metaKey||t.ctrlKey}function T(t){return F(t)&&!t.shiftKey&&"Z"===O(t)}function I(t){return F(t)&&t.shiftKey&&"Z"===O(t)}function O(t){let e=t.key||t.keyCode||t.which;if(e)return("string"==typeof e?e:String.fromCharCode(e)).toUpperCase()}function R(t){t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),r.execCommand("insertHTML",!1,t)}function D(t,e){let n=0;return(...i)=>{clearTimeout(n),n=o.setTimeout(()=>t(...i),e)}}function P(t){let e=t.length-1;for(;e>=0&&"\n"!==t[e];)e--;e++;let n=e;for(;n<t.length&&/[ \t]/.test(t[n]);)n++;return[t.substring(e,n)||"",e,n]}function j(){return t.textContent||""}function N(t){t.preventDefault()}function M(){return t.getRootNode().getSelection()}return k("keydown",e=>{e.defaultPrevented||(c=j(),i.preserveIdent?function(t){if("Enter"===t.key){const e=S(),n=A();let[o]=P(e),r=o;if(i.indentOn.test(e)&&(r+=i.tab),r.length>0?(N(t),t.stopPropagation(),R("\n"+r)):E(t),r!==o&&i.moveToNewLine.test(n)){const t=x();R("\n"+o),w(t)}}}(e):E(e),i.catchTab&&function(t){if("Tab"===t.key)if(N(t),t.shiftKey){const t=S();let[e,n]=P(t);if(e.length>0){const t=x(),o=Math.min(i.tab.length,e.length);w({start:n,end:n+o}),r.execCommand("delete"),t.start-=o,t.end-=o,w(t)}}else R(i.tab)}(e),i.addClosing&&function(t){const e=i.autoclose.open,n=i.autoclose.close;if(e.includes(t.key)){N(t);const i=x(),o=i.start==i.end?"":M().toString();R(t.key+o+(n[e.indexOf(t.key)]??"")),i.start++,i.end++,w(i)}}(e),i.history&&(function(e){if(T(e)){N(e),l--;const n=a[l];n&&(t.innerHTML=n.html,w(n.pos)),l<0&&(l=0)}if(I(e)){N(e),l++;const n=a[l];n&&(t.innerHTML=n.html,w(n.pos)),l>=a.length&&l--}}(e),b(e)&&!g&&(_(),g=!0)),m&&!function(t){return F(t)&&"C"===O(t)}(e)&&w(x()))}),k("keyup",t=>{t.defaultPrevented||t.isComposing||(c!==j()&&v(),y(t),u(j()))}),k("focus",t=>{d=!0}),k("blur",t=>{d=!1}),k("paste",e=>{_(),function(e){if(e.defaultPrevented)return;N(e);const n=(e.originalEvent??e).clipboardData.getData("text/plain").replace(/\r\n?/g,"\n"),i=x();R(n),h(t),w({start:Math.min(i.start,i.end)+n.length,end:Math.min(i.start,i.end)+n.length,dir:"<-"})}(e),_(),u(j())}),k("cut",e=>{_(),function(e){const n=x(),i=M();(e.originalEvent??e).clipboardData.setData("text/plain",i.toString()),r.execCommand("delete"),h(t),w({start:Math.min(n.start,n.end),end:Math.min(n.start,n.end),dir:"<-"}),N(e)}(e),_(),u(j())}),{updateOptions(t){Object.assign(i,t)},updateCode(e,n=!0){t.textContent=e,h(t),n&&u(e)},onUpdate(t){u=t},toString:j,save:x,restore:w,recordHistory:_,destroy(){for(let[e,n]of s)t.removeEventListener(e,n)}}}(d,u,{tab:"  ",catchTab:!0,preserveIdent:!0,addClosing:!0});t.updateCode(n),t.onUpdate(t=>{s(t!==n),l(t)}),d.Ce=t}),y`<div class=${jr}>
    ${d}
    <div class=${Mr}>
      <div class=${Lr}>
        <div class=${zr}>${e}</div>
        ${()=>s()?y`<button class=${Br} onclick=${h}>
                ↺ reset
              </button>`:""}
      </div>
      ${()=>o()?y`<pre class=${Hr}>${o()}</pre>`:""}
      ${a}
    </div>
  </div>`}const Vr='\nimport { signal, html, type VanillaElement } from "vanillakit";\n\ninterface CounterProps {\n  initial: number;\n}\n\nconst Counter = (props: CounterProps = { initial: 0 }): VanillaElement => {\n  const count = signal(props.initial); // Signal<number>\n  return html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      Count: ${count}\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n    </div>\n  `;\n};\n\ndocument.body.append(Counter({ initial: 10 }));\n',Wr=i([{dd:"5.55",dt:"kB (brotli)"},{dd:"0",dt:"Deps"},{dd:"5",dt:"Modules"}]);var Jr,Yr,Xr;function Zr(t,e="typescript"){const n=t.trim(),i=it.highlight(n,it.languages[e]||it.languages.typescript,e),o=document.createElement("pre");return o.className=W,o.innerHTML=i,o}Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,e){var n={};n["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(t,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(Prism),function(t){var e,n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:e={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp("\\[(?:[^[\\]\"']|"+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=e,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var i={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:i,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:i,number:o})}(Prism),Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,Jr||(Jr=1,function(t){var e=t.languages.javascript["template-string"],n=e.pattern.source,i=e.inside.interpolation,o=i.inside["interpolation-punctuation"],r=i.pattern.source;function s(e,i){if(t.languages[e])return{pattern:RegExp("((?:"+i+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}function a(t,e){return"___"+e.toUpperCase()+"_"+t+"___"}function c(e,n,i){var o={code:e,grammar:n,language:i};return t.hooks.run("before-tokenize",o),o.tokens=t.tokenize(o.code,o.grammar),t.hooks.run("after-tokenize",o),o.tokens}function l(e){var n={};n["interpolation-punctuation"]=o;var r=t.tokenize(e,n);if(3===r.length){var s=[1,1];s.push.apply(s,c(r[1],t.languages.javascript,"javascript")),r.splice.apply(r,s)}return new t.Token("interpolation",r,i.alias,e)}function d(e,n,i){var o=t.tokenize(e,{interpolation:{pattern:RegExp(r),lookbehind:!0}}),s=0,d={},u=c(o.map(function(t){if("string"==typeof t)return t;for(var n,o=t.content;-1!==e.indexOf(n=a(s++,i)););return d[n]=o,n}).join(""),n,i),h=Object.keys(d);return s=0,function t(e){for(var n=0;n<e.length;n++){if(s>=h.length)return;var i=e[n];if("string"==typeof i||"string"==typeof i.content){var o=h[s],r="string"==typeof i?i:i.content,a=r.indexOf(o);if(-1!==a){++s;var c=r.substring(0,a),u=l(d[o]),p=r.substring(a+o.length),f=[];if(c&&f.push(c),f.push(u),p){var m=[p];t(m),f.push.apply(f,m)}"string"==typeof i?(e.splice.apply(e,[n,1].concat(f)),n+=f.length-1):i.content=f}}else{var v=i.content;Array.isArray(v)?t(v):t([v])}}}(u),new t.Token(i,u,"language-"+i,e)}t.languages.javascript["template-string"]=[s("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),s("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),s("svg",/\bsvg/.source),s("markdown",/\b(?:markdown|md)/.source),s("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),s("sql",/\bsql/.source),e].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function h(t){return"string"==typeof t?t:Array.isArray(t)?t.map(h).join(""):h(t.content)}t.hooks.add("after-tokenize",function(e){e.language in u&&function e(n){for(var i=0,o=n.length;i<o;i++){var r=n[i];if("string"!=typeof r){var s=r.content;if(Array.isArray(s))if("template-string"===r.type){var a=s[1];if(3===s.length&&"string"!=typeof a&&"embedded-code"===a.type){var c=h(a),l=a.alias,u=Array.isArray(l)?l[0]:l,p=t.languages[u];if(!p)continue;s[1]=d(c,p,u)}}else e(s);else"string"!=typeof s&&e([s])}}}(e.tokens)})}(Prism)),Yr||(Yr=1,function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var e=t.languages.extend("typescript",{});delete e["class-name"],t.languages.typescript["class-name"].inside=e,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),t.languages.ts=t.languages.typescript}(Prism)),function(t){var e="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},i={bash:n,environment:{pattern:RegExp("\\$"+e),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+e),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+e),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:i},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:i},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:i.entity}}],environment:{pattern:RegExp("\\$?"+e),alias:"constant"},variable:i.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=i.variable[1].inside,s=0;s<o.length;s++)r[o[s]]=t.languages.bash[o[s]];t.languages.sh=t.languages.bash,t.languages.shell=t.languages.bash}(Prism),Xr||(Xr=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),D`
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
`;const Kr=O`
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
`,Qr=O`
  flex: 1;
  text-decoration: line-through;
  opacity: 0.45;
`,ts={high:"danger",medium:"primary",low:"success"};let es=4;const ns=i([{id:1,text:"Build signal-based reactivity",done:!0,priority:"high"},{id:2,text:"Implement tagged template DOM engine",done:!0,priority:"high"},{id:3,text:"Add keyed list reconciliation",done:!1,priority:"medium"}]),is=i("all"),os=o(()=>{const t=is(),e=ns();return"active"===t?e.filter(t=>!t.done):"done"===t?e.filter(t=>t.done):e}),rs=o(()=>{const t=ns();return{total:t.length,done:t.filter(t=>t.done).length,active:t.filter(t=>!t.done).length}}),ss=O`
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
`,as=O`
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
`,cs=i([]);function ls(t){cs(e=>[`${performance.now().toFixed(1)}ms — ${t}`,...e.slice(0,19)])}let ds=1;const us=["Alice","Bob","Carol","Dan","Eve","Frank","Grace","Hank","Iris","Jack","Kara","Leo","Mia","Nico","Olga","Pete"];function hs(){return{id:ds++,name:us[Math.floor(Math.random()*us.length)],score:Math.floor(100*Math.random())}}const ps=i(Array.from({length:8},hs));function fs(t){const e=[...t];for(let n=e.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}function ms(t,e){return y`<li class=${ss}>
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
      onclick=${()=>ps(e=>e.filter(e=>e.id!==t().id))}
    >
      ✕
    </button>
  </li>`}const vs=O`
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
`,gs=[{label:"Demos",items:[{id:"snippets",label:"Code Examples"},{id:"sandbox",label:"Playground"},{id:"todo",label:"Todo App"},{id:"playground",label:"Reactive Demos"},{id:"stress",label:"Stress Test"}]}],bs={snippets:function(){return y`<section>
    <h2>Code Examples</h2>

    <h3>Counter</h3>
    <p>The simplest possible app — a signal and a button.</p>
    ${Gr({source:'import { signal, html } from "vanillakit";\n\nconst count = signal(0);\n\ndocument.body.append(html`\n  <button onclick=${() => count(n => n + 1)}>\n    Clicked ${count} times\n  </button>\n`);',label:"Counter"})}

    <h3>Two-way binding</h3>
    <p>Bind an input to a signal. The heading updates as you type.</p>
    ${Gr({source:'import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\ndocument.body.append(html`\n  <div>\n    <p style="font-size:1.2rem; font-weight:700;">Hello, ${name}!</p>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)}\n      style="max-width:240px;" />\n  </div>\n`);',label:"Two-way binding"})}

    <h3>Derived state</h3>
    ${Gr({source:'import { signal, computed, html } from "vanillakit";\n\nconst price    = signal(10);\nconst quantity = signal(3);\nconst total    = computed(() => price() * quantity());\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label>Price:\n      <input type="number" value=${() => price()}\n        oninput=${(e) => price(+e.target.value)} style="width:80px;" />\n    </label>\n    <label>Qty:\n      <input type="number" value=${() => quantity()}\n        oninput=${(e) => quantity(+e.target.value)} style="width:80px;" />\n    </label>\n    <span style="font-weight:700;">Total: $${total}</span>\n  </div>\n`);',label:"Derived state — change price or qty"})}

    <h3>Reactive object</h3>
    ${Zr('import { reactive, snapshot, effect } from "vanillakit";\n\nconst state = reactive({\n  todos: [\n    { text: "Learn signals", done: true },\n    { text: "Build an app",  done: false },\n  ],\n});\n\neffect(() => console.log(JSON.stringify(snapshot(state), null, 2)));\n\nstate.todos.push({ text: "Ship it", done: false });\nstate.todos[0].done = false;')}

    <h3>Scoped styles + routing</h3>
    ${Zr('import { html, css, globalCss, createRouter, navLink } from "vanillakit";\n\nglobalCss`body { margin: 0; font-family: system-ui; }`;\n\nconst page = css`padding: 24px;`;\nconst active = css`color: gold; font-weight: 700;`;\nconst base = css`color: gray; text-decoration: none;`;\n\nconst Router = createRouter({\n  "/":      () => html`<div class=${page}><h1>Home</h1></div>`,\n  "/about": () => html`<div class=${page}><h1>About</h1></div>`,\n  "*":      () => html`<div class=${page}><h1>404</h1></div>`,\n});\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);')}
  </section>`},sandbox:function(){return y`<section>
    <h2>Playground</h2>
    <p>
      Write vanillakit code and see results live. Edit the code below — output
      updates instantly.
    </p>

    ${Gr({source:'import { signal, computed, html, css } from "vanillakit";\n\nconst count = signal(0);\nconst double = computed(() => count() * 2);\n\nconst badge = css`\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-family: monospace;\n  font-weight: 600;\n  background: var(--vk-color-accent-dim);\n  color: var(--vk-color-accent);\n`;\n\ndocument.body.append(html`\n  <div>\n    <h3>Counter: ${count}</h3>\n    <p>Double: <span class=${badge}>${double}</span></p>\n    <div style="display:flex; gap:8px; margin-top:12px;">\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n      <button onclick=${() => count(n => n - 1)}>-1</button>\n      <button onclick=${() => count(0)}>Reset</button>\n    </div>\n  </div>\n`);',label:"Sandbox — edit freely"})}
  </section>`},todo:function(){return y`<section>
    <h2>Todo App</h2>
    <p class=${V}>
      A fully reactive todo app — signals, computed, each().
    </p>
    <div data-grid data-cols="3" style="margin-bottom:28px;">
      <article data-card style="text-align:center;">
        <dl>
          <dd>${()=>rs().total}</dd>
          <dt>Total</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-accent">${()=>rs().active}</dd>
          <dt>Active</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-success">${()=>rs().done}</dd>
          <dt>Done</dt>
        </dl>
      </article>
    </div>
    ${function(){const t=i(""),e=i("medium"),n=()=>{const n=t().trim();n&&(ns(t=>[...t,{id:es++,text:n,done:!1,priority:e()}]),t(""))};return y`<div style="display:flex;gap:8px;margin-bottom:24px;">
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
          aria-pressed=${()=>is()===t?"true":"false"}
          onclick=${()=>is(t)}
        >
          ${t[0].toUpperCase()+t.slice(1)}
          ${()=>{const e=rs();return`(${"all"===t?e.total:"active"===t?e.active:e.done})`}}
        </button>`)}
  </div>`}
    <ul style="list-style:none;padding:0;">
      ${_(os,t=>t.id,t=>function(t){const e=t();return y`<li class=${Kr}>
    <input type="checkbox" checked=${e.done} onclick=${()=>ns(t=>t.map(t=>t.id===e.id?{...t,done:!t.done}:t))} />
    <span class=${e.done?Qr:""} style="flex:1;"
      >${e.text}</span
    >
    <span data-badge data-variant=${ts[e.priority]}
      >${e.priority}</span
    >
    <button data-variant="danger" data-size="sm" onclick=${()=>ns(t=>t.filter(t=>t.id!==e.id))}>✕</button>
  </li>`}(t))}
      ${()=>0===os().length?y`<div data-empty>No tasks match this filter.</div>`:null}
    </ul>
    <details>
      <summary>View source — signals, computed, each()</summary>
      ${Zr('// Reactive state\nconst todos = signal([...]);\nconst filter = signal("all");\nconst filteredTodos = computed(() => {\n  const f = filter();\n  const l = todos();\n  return f === "active" ? l.filter(t => !t.done)\n       : f === "done"   ? l.filter(t => t.done)\n       : l;\n});\nconst stats = computed(() => {\n  const l = todos();\n  return {\n    total: l.length,\n    done: l.filter(t => t.done).length,\n    active: l.filter(t => !t.done).length,\n  };\n});\n\n// Keyed list rendering — DOM nodes reused by id\nhtml`<div>\n  ${each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))}\n</div>`;\n\n// Adding a todo — just push to the signal\nfunction add() {\n  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);\n}\n\n// TodoItem reads from itemSig — updates when that item changes\nfunction TodoItem(itemSig) {\n  const todo = itemSig();\n  const toggle = () => todos(l => l.map(t =>\n    t.id === todo.id ? { ...t, done: !t.done } : t\n  ));\n  return html`<div>\n    <input type="checkbox" checked=${todo.done} onclick=${toggle} />\n    <span>${todo.text}</span>\n  </div>`;\n}')}
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
    <p class=${V}>
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
          class=${vs}
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
          class=${vs}
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

        <div class=${vs} style="font-size:0.7rem;line-height:1.6;">
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
      ${Zr('// Deep reactive proxy — mutate normally, changes propagate\nconst state = reactive({\n  user: {\n    name: "Ada Lovelace",\n    settings: {\n      theme: "dark",\n      notifications: { email: true, push: false, frequency: "daily" },\n    },\n    scores: [95, 87, 92],\n  },\n});\n\n// Computed snapshot for display — auto-updates\nconst jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));\n\n// Direct mutation triggers effects\nstate.user.name = "Grace Hopper";\nstate.user.scores.push(99);\n\n// Scoped CSS with nesting, pseudo-classes, @media\nconst card = css`\n  padding: 20px;\n  border: 2px solid var(--vk-color-border);\n  &:hover { border-color: var(--vk-color-accent); }\n  & > .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 12px; }\n`;\n\n// cx() merges class names, skipping falsy values\nconst classes = cx(\n  statusBase,\n  statusMap[status()],\n  rounded() && propRounded,\n  shadow() && propShadow,\n);')}
    </details>
  </section>`},stress:function(){return y`<section>
    <h2>List Stress Test</h2>
    <p class=${V}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type in the
      inputs to verify DOM preservation.
    </p>

    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
      <button
        onclick=${()=>{ps(fs),ls("Shuffled")}}
      >
        Shuffle
      </button>
      <button
        data-variant="info"
        onclick=${()=>{ps(t=>[...t].reverse()),ls("Reversed")}}
      >
        Reverse
      </button>
      <button
        data-variant="success"
        onclick=${()=>{ps(t=>[...t,hs()]),ls("Added 1")}}
      >
        + Add 1
      </button>
      <button
        data-variant="success"
        onclick=${()=>{const t=Array.from({length:5},hs);ps(e=>[...e,...t]),ls("Added 5")}}
      >
        + Add 5
      </button>
      <button
        data-variant="danger"
        onclick=${()=>{ps(t=>{if(!t.length)return t;const e=Math.floor(Math.random()*t.length);return t.filter((t,n)=>n!==e)}),ls("Removed random")}}
      >
        - Remove random
      </button>
      <button
        data-ghost
        onclick=${()=>{ps(t=>t.map(t=>({...t,score:Math.floor(100*Math.random())}))),ls("Randomized scores")}}
      >
        Randomize scores
      </button>
      <button
        data-ghost
        onclick=${()=>{ps(t=>[...t].sort((t,e)=>t.name.localeCompare(e.name))),ls("Sorted by name")}}
      >
        Sort A→Z
      </button>
      <button
        data-ghost
        onclick=${()=>{ps(t=>[...t].sort((t,e)=>e.score-t.score)),ls("Sorted by score")}}
      >
        Sort by score
      </button>
      <button
        data-variant="danger"
        onclick=${()=>{ps([]),ls("Cleared all")}}
      >
        Clear
      </button>
      <button
        onclick=${()=>{ps(Array.from({length:50},hs)),ls("Reset to 50 items")}}
      >
        Reset 50
      </button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;align-items:center;">
      <span data-badge data-variant="primary"
        >${()=>ps().length} items</span
      >
      <small
        >Type in any input, then shuffle — your text stays because each() reuses
        DOM nodes by key.</small
      >
    </div>

    <ul style="list-style:none;padding:0;margin-bottom:24px;">
      ${_(ps,t=>t.id,ms)}
      ${()=>0===ps().length?y`<div data-empty>List is empty. Add some items!</div>`:null}
    </ul>

    <h3>Operation Log</h3>
    <div class=${as}>
      ${()=>0===cs().length?"No operations yet…":cs().join("\n")}
    </div>
    <details>
      <summary>View source — each() keyed reconciliation</summary>
      ${Zr('// each() reuses DOM nodes by key across mutations\nconst items = signal(Array.from({ length: 8 }, randItem));\n\n// Render — each item gets a Signal<T> and ReadonlySignal<number>\nhtml`<div>\n  ${each(items, item => item.id, (itemSig, indexSig) =>\n    html`<div>\n      <span>${() => indexSig()}</span>\n      <span>${() => itemSig().name}</span>\n      <span>${() => itemSig().score}</span>\n      <input placeholder="type here…" />\n    </div>`\n  )}\n</div>`;\n\n// Mutations — DOM nodes with matching keys are reused, not recreated.\n// Text typed into inputs persists across shuffle/reverse/sort.\nitems(shuffle);                              // reorder\nitems(l => [...l].reverse());                // reverse\nitems(l => [...l, randItem()]);              // append\nitems(l => l.filter(x => x.id !== target));  // remove\nitems(l => [...l].sort((a, b) =>             // sort\n  a.name.localeCompare(b.name)\n));')}
    </details>
  </section>`}},ys=O`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,ks=[{name:"signal.js",icon:"⚡",color:"var(--vk-color-accent)",lines:"~90",desc:"signal, computed, effect, batch, untrack"},{name:"reactive.js",icon:"🔮",color:"#a78bfa",lines:"~130",desc:"Proxy-based deep reactivity, identity cache, array methods"},{name:"html.js",icon:"🧩",color:"#60a5fa",lines:"~210",desc:"Tagged templates → live DOM, keyed each() reconciliation"},{name:"component.js",icon:"📦",color:"var(--vk-color-success)",lines:"~95",desc:"mount, onMount, onCleanup, provide/inject"},{name:"router.js",icon:"🧭",color:"#f472b6",lines:"~105",desc:"History-based SPA routing, reactive params"},{name:"css.js",icon:"🎨",color:"#fb923c",lines:"~130",desc:"Scoped CSS-in-JS with deep nesting, @media, combinators"}];function xs(t,e,n){return y`<tr>
    <td><code>${t}</code></td>
    <td><code>${e}</code></td>
    <td>${n}</td>
  </tr>`}const ws=[{label:"Guide",items:[{id:"getting-started",label:"Getting Started"},{id:"typescript",label:"TypeScript & Tooling"}]},{label:"Concepts",items:[{id:"components",label:"Components"},{id:"reactivity",label:"Reactivity"},{id:"data-fetching",label:"Data Fetching"},{id:"conditional",label:"Conditional Rendering"},{id:"lists",label:"Lists & Keys"},{id:"forms",label:"Forms"},{id:"styling",label:"Styling"},{id:"routing-concepts",label:"Routing"}]},{label:"VanillaCSS",items:[{id:"vanillacss",label:"Overview"},{id:"vanillacss-theming",label:"Theming"},{id:"vanillacss-components",label:"Components"},{id:"vanillacss-tokens",label:"Token Reference"}]},{label:"Integrations",items:[{id:"htmx",label:"htmx"},{id:"tailwind",label:"Tailwind CSS"},{id:"hono",label:"Hono"},{id:"fastapi",label:"FastAPI"}]},{label:"API Reference",items:[{id:"signal",label:"signal.js"},{id:"reactive",label:"reactive.js"},{id:"html-module",label:"html.js"},{id:"css-module",label:"css.js"},{id:"router",label:"router.js"}]}],$s={"getting-started":function(){return y`<section>
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
    ${Zr("# clone the repo\ngit clone https://github.com/nisuxyz/vanillakit.git\ncp -r vanillakit/src ./vanillakit","bash")}

    <p>Or import straight from a CDN — no install needed:</p>
    ${Zr('<script type="module">\n  import { signal, html, css } from "https://esm.sh/gh/nisuxyz/vanillakit/src/index.js";\n\n  // ready to go\n<\/script>',"markup")}

    <h3>Quick setup</h3>
    <p>Create an <code>index.html</code> and a module entry point:</p>
    ${Zr('<!doctype html>\n<html>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}
    ${Gr({source:`// app.js${Vr}`,label:"app.js"})}

    <h3>Project structure</h3>
    <p>There's no required structure. The library is five files:</p>
    ${Zr("src/\n  signal.js    — signal, computed, effect, batch, untrack\n  reactive.js  — reactive, toRaw, isReactive, snapshot\n  html.js      — html, each\n  css.js       — css, keyframes, globalCss, cx\n  router.js    — createRouter, navigate, navLink, currentPath, routeParams\n  index.js     — re-exports everything","bash")}

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
    ${Gr({source:Vr,label:"Counter component with TypeScript types"})}
    ${Zr('import { signal } from "vanillakit";\nimport type { Signal, ReadonlySignal } from "vanillakit/signal.js";\n\nconst count: Signal<number> = signal(0);',"typescript")}

    <p>
      If you're writing <code>.ts</code> files, make sure your
      <code>tsconfig.json</code> has
      <code>"moduleResolution": "bundler"</code> and
      <code>"allowImportingTsExtensions": true</code> (already the default with
      Vite).
    </p>
    ${Zr('{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "allowJs": true,\n    "checkJs": true,\n    "noEmit": true,\n    "allowImportingTsExtensions": true,\n    "strict": true,\n    "lib": ["ESNext", "DOM", "DOM.Iterable"]\n  }\n}',"javascript")}

    <h3>HMR with Vite</h3>
    <p>A minimal <code>vite.config.js</code>:</p>
    ${Zr('import { defineConfig } from "vite";\n\nexport default defineConfig({\n  root: "demo",\n  base: "./",\n});')}

    <h3>Production builds</h3>
    <p>
      <code>vite build</code> produces a single minified JS bundle. The entire
      library plus this full demo app compiles to ~25 KB gzipped.
    </p>
    ${Zr("npx vite build\n# output in dist/ (or wherever outDir points)","bash")}
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
    ${Zr('import { initVanillaCss, themeToggle } from "vanillakit";\nimport { html } from "vanillakit";\n\ninitVanillaCss();  // inject VanillaCSS\n\n// Optional: reactive dark/light toggle\nconst { theme, toggle } = themeToggle();\n\ndocument.body.append(html`\n  <button onclick=${toggle}>\n    ${() => theme() === "dark" ? "☀️ Light" : "🌙 Dark"}\n  </button>\n`);',"typescript")}

    <h3>Standalone — no JavaScript required</h3>
    <p>
      Copy <code>src/vanillacss/</code> to your project and link
      <code>vanilla.css</code>. The entire framework is plain CSS — no build
      step, no JavaScript dependency.
    </p>
    ${Zr('<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./vanillacss/vanilla.css" />\n  </head>\n  <body>\n    <header>\n      <a href="/">MySite</a>\n      <nav>\n        <a href="/about">About</a>\n        <a href="/blog">Blog</a>\n      </nav>\n    </header>\n    <main>\n      <h1>Hello</h1>\n      <p>Styled automatically — no class names needed.</p>\n      <button data-color-variant="primary">Get started</button>\n    </main>\n  </body>\n</html>',"markup")}

    <p>Or import in your own CSS:</p>
    ${Zr('/* styles.css */\n@import "./vanillacss/vanilla.css";\n\n/* Your styles here — unlayered rules always beat @layer rules */\n:root {\n  --vk-color-accent: hsl(220 80% 60%);  /* swap to blue */\n}',"css")}

    <h3>Layer architecture</h3>
    <p>
      Every VanillaCSS rule lives inside a named <code>@layer</code> sub-layer.
      Your own styles — even ones with low specificity — automatically override
      VanillaCSS because unlayered declarations beat layered ones at equal
      specificity. No <code>!important</code>, no specificity fights.
    </p>
    ${Zr("/* Sub-layer cascade order — lowest to highest priority */\n@layer vanillacss.reset,       /* minireset.css foundation      */\n       vanillacss.tokens,      /* custom properties & theme     */\n       vanillacss.base,        /* html, body, img, input reset  */\n       vanillacss.typography,  /* headings, links, lists, code  */\n       vanillacss.layout,      /* main, header, cards, grid     */\n       vanillacss.nav,         /* nav, breadcrumb, pagination   */\n       vanillacss.buttons,     /* buttons, hover effects        */\n       vanillacss.forms,       /* inputs, checkbox, switch      */\n       vanillacss.feedback,    /* alerts, progress, toast       */\n       vanillacss.data,        /* tables, tags, avatars         */\n       vanillacss.components,  /* dialog, tabs, accordion       */\n       vanillacss.utilities;   /* badges, sr-only, keyframes    */","css")}

    <p>Override any individual layer precisely:</p>
    ${Zr("/* Any selector outside a @layer beats everything inside one */\n:root {\n  --vk-color-accent: hsl(220 80% 60%);\n}\n\n/* Or target a specific sub-layer */\n@layer vanillacss.typography {\n  h1 { letter-spacing: -0.05em; }\n}","css")}
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
    ${Zr('@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    --vk-color-bg:      hsl(var(--vk-gray-9));\n    --vk-color-surface: hsl(var(--vk-gray-8));\n    --vk-color-text:    hsl(var(--vk-gray-0));\n    color-scheme: dark;\n  }\n}',"css")}

    <h3>Manual override</h3>
    <p>
      Force a specific theme by setting <code>data-theme</code> on
      <code>&lt;html&gt;</code> or any ancestor element. This overrides the
      system preference.
    </p>
    ${Zr('\x3c!-- Force dark --\x3e\n<html data-theme="dark">\n\n\x3c!-- Force light --\x3e\n<html data-theme="light">\n\n\x3c!-- Scope dark to a specific section --\x3e\n<div data-theme="dark">\n  <article data-card>Always dark card</article>\n</div>',"markup")}

    <h3>themeToggle() — with vanillakit</h3>
    <p>
      <code>themeToggle()</code> returns a reactive signal bound to
      <code>document.documentElement.dataset.theme</code>. It reads from
      <code>localStorage</code> on init, falls back to the system preference,
      and persists every user choice.
    </p>
    ${Zr('import { initVanillaCss, themeToggle } from "vanillakit";\nimport { html } from "vanillakit";\n\ninitVanillaCss();\n\nconst { theme, toggle, set } = themeToggle();\n\n// theme()  → "dark" | "light"   (reactive signal)\n// toggle() → switch dark ↔ light, persist to localStorage\n// set()    → explicit control\n\nconst btn = html`\n  <button onclick=${toggle}>\n    ${() => theme() === "dark" ? "☀️ Switch to light" : "🌙 Switch to dark"}\n  </button>\n`;\n\n// Explicit control\nset("dark");   // force dark — saved to localStorage\nset("light");  // force light — saved to localStorage\nset("auto");   // follow system — clears localStorage',"typescript")}

    <h3>Customizing the accent color</h3>
    <p>
      Override <code>--vk-color-accent</code> and
      <code>--vk-color-accent-dim</code> to rebrand the framework to any color.
      Add it to your own stylesheet — unlayered declarations beat
      <code>@layer vanillacss.tokens</code> at equal specificity.
    </p>
    ${Zr("/* styles.css — swap gold accent for indigo */\n:root {\n  --vk-color-accent:     hsl(240 60% 60%);\n  --vk-color-accent-dim: hsl(240 60% 60% / 0.15);\n}","css")}

    <p>For separate light and dark accents:</p>
    ${Zr('/* Light mode accent */\n:root {\n  --vk-color-accent:     hsl(240 60% 55%);\n  --vk-color-accent-dim: hsl(240 60% 55% / 0.12);\n}\n\n/* Dark mode accent */\n[data-theme="dark"],\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    --vk-color-accent:     hsl(240 80% 70%);\n    --vk-color-accent-dim: hsl(240 80% 70% / 0.18);\n  }\n}',"css")}

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

    ${Zr("/* Tighten transitions, widen container, adjust rem base */\n:root {\n  --vk-transition-speed: 0.1s;\n  --vk-container-max-width: 80rem;\n  --vk-font-size-root: 112.5%;  /* 18px base → scales all rem values */\n}","css")}
  </section>`},"vanillacss-components":function(){return y`<section>
    <h2>Components</h2>
    <p>
      VanillaCSS styles native HTML elements and ARIA patterns automatically.
      Each example is fully editable — try changing the code!
    </p>

    <!-- ── TYPOGRAPHY ───────────────────────────────── -->
    <h3>Typography</h3>
    <p>Headings, body text, and inline elements are styled out of the box.</p>

    ${Gr({source:"document.body.append(html`\n  <div>\n    <h1>Heading 1</h1>\n    <h2>Heading 2</h2>\n    <h3>Heading 3</h3>\n    <h4>Heading 4</h4>\n    <h5>Heading 5</h5>\n    <h6>Heading 6</h6>\n  </div>\n`);"})}
    ${Gr({source:'document.body.append(html`\n  <div>\n    <p>\n      A paragraph with <strong>bold</strong>, <em>italic</em>,\n      <small>small</small>, <mark>highlighted</mark>,\n      <code>inline code</code>, <kbd>Ctrl+K</kbd>,\n      and <a href="#">a link</a>.\n    </p>\n    <blockquote>A blockquote for pull quotes and callouts.</blockquote>\n  </div>\n`);'})}
    ${Gr({source:"document.body.append(html`\n  <div>\n    <ul>\n      <li>Unordered item one</li>\n      <li>Unordered item two</li>\n      <li>Unordered item three</li>\n    </ul>\n    <ol>\n      <li>Ordered item one</li>\n      <li>Ordered item two</li>\n      <li>Ordered item three</li>\n    </ol>\n  </div>\n`);"})}
    ${Gr({source:'document.body.append(html`\n  <pre><code>const greeting = "Hello, world!";\nconsole.log(greeting);\n// → Hello, world!</code></pre>\n`);'})}

    <!-- ── BUTTONS ───────────────────────────────────── -->
    <h3>Buttons</h3>
    <p>
      Use <code>data-color-variant</code> for semantic color,
      <code>data-style-variant</code> for hollow styles,
      <code>data-size</code> for scale.
    </p>

    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button>Default</button>\n    <button data-color-variant="primary">Primary</button>\n    <button data-color-variant="danger">Danger</button>\n    <button data-color-variant="success">Success</button>\n    <button data-color-variant="warning">Warning</button>\n    <button data-color-variant="info">Info</button>\n  </div>\n`);',label:"Color variants"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:.5rem">\n    <button data-size="sm">Small</button>\n    <button>Default</button>\n    <button data-size="lg">Large</button>\n    <button data-size="xl">XL</button>\n  </div>\n`);',label:"Sizes"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-style-variant="ghost">Ghost</button>\n    <button data-style-variant="outline">Outline</button>\n  </div>\n`);',label:"Style variants"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-style-variant="ghost" data-color-variant="primary">Ghost primary</button>\n    <button data-style-variant="ghost" data-color-variant="danger">Ghost danger</button>\n    <button data-style-variant="outline" data-color-variant="primary">Outline primary</button>\n    <button data-style-variant="outline" data-color-variant="danger">Outline danger</button>\n  </div>\n`);',label:"Style + color combos"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-loading>Saving…</button>\n    <button data-color-variant="primary" data-loading>Loading</button>\n  </div>\n`);',label:"Loading state"})}
    ${Gr({source:'document.body.append(html`\n  <div role="group">\n    <button>Left</button>\n    <button aria-pressed="true">Center</button>\n    <button>Right</button>\n  </div>\n`);',label:"Button group"})}

    <p>Hover effects work on any element — cards, images, links, etc.</p>
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-hover="lift">Lift</button>\n    <button data-hover="scale">Scale</button>\n    <button data-hover="glow">Glow</button>\n    <button data-hover="pop">Pop</button>\n    <button data-hover="dim">Dim</button>\n    <button data-hover="bright">Bright</button>\n  </div>\n`);',label:"Hover effects"})}

    <!-- ── FORMS ─────────────────────────────────────── -->
    <h3>Forms</h3>
    <p>
      All form controls are full-width by default. Wrap in a
      <code>&lt;label&gt;</code> for accessible pairing.
    </p>

    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.75rem;max-width:400px">\n    <label>Username<input type="text" placeholder="Enter username" /></label>\n    <label>Email<input type="email" placeholder="you@example.com" /></label>\n    <label>Bio<textarea placeholder="Tell us about yourself"></textarea></label>\n    <label>Country\n      <select>\n        <option>United States</option>\n        <option>Canada</option>\n        <option>United Kingdom</option>\n      </select>\n    </label>\n  </div>\n`);',label:"Text inputs"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <input type="text" data-size="sm" placeholder="Small input" />\n    <input type="text" placeholder="Default input" />\n    <input type="text" data-size="lg" placeholder="Large input" />\n  </div>\n`);',label:"Input sizes"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <label><input type="checkbox" checked /> Remember me</label>\n    <label><input type="checkbox" /> Subscribe to newsletter</label>\n    <label><input type="radio" name="plan" checked /> Free</label>\n    <label><input type="radio" name="plan" /> Pro</label>\n  </div>\n`);',label:"Checkboxes & radios"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <label><input type="checkbox" role="switch" checked /> Enable notifications</label>\n    <label><input type="checkbox" role="switch" /> Dark mode</label>\n    <label>Volume<input type="range" min="0" max="100" value="60" /></label>\n  </div>\n`);',label:"Switches & ranges"})}
    ${Gr({source:'document.body.append(html`\n  <fieldset style="max-width:400px">\n    <legend>Preferences</legend>\n    <label><input type="checkbox" checked /> Email notifications</label>\n    <label><input type="checkbox" /> Weekly digest</label>\n  </fieldset>\n`);',label:"Fieldset"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <label>\n      Email (invalid)\n      <input type="email" aria-invalid="true" value="not-an-email" />\n    </label>\n    <label>\n      Username (disabled)\n      <input type="text" disabled value="admin" />\n    </label>\n  </div>\n`);',label:"Validation states"})}

    <!-- ── CARDS ─────────────────────────────────────── -->
    <h3>Cards</h3>
    <p>
      <code>article[data-card]</code> creates card layout. Add a
      <code>&lt;header&gt;</code> or <code>&lt;footer&gt;</code> for structured
      cards.
    </p>

    ${Gr({source:'document.body.append(html`\n  <article data-card style="max-width:280px">\n    <h4>Simple card</h4>\n    <p>Card content with some descriptive text goes here.</p>\n    <button data-color-variant="primary">Action</button>\n  </article>\n`);'})}
    ${Gr({source:'document.body.append(html`\n  <article data-card style="max-width:320px">\n    <header><h5>Card with header &amp; footer</h5></header>\n    <p>Content area of the card. Padding is applied automatically.</p>\n    <footer>\n      <button data-style-variant="ghost">Cancel</button>\n      <button data-color-variant="primary">Save</button>\n    </footer>\n  </article>\n`);'})}

    <p>Use a <code>&lt;dl&gt;</code> inside a card for stat displays:</p>
    ${Gr({source:'document.body.append(html`\n  <div data-grid style="max-width:420px">\n    <article data-card><dl><dt>Users</dt><dd>12,048</dd></dl></article>\n    <article data-card><dl><dt>Revenue</dt><dd>$4,200</dd></dl></article>\n  </div>\n`);',label:"Stat cards"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;gap:1rem;flex-wrap:wrap">\n    <article data-card data-hover="lift" style="padding:1rem;min-width:140px">\n      <h6>Lift</h6><p>Hover me</p>\n    </article>\n    <article data-card data-hover="glow" style="padding:1rem;min-width:140px">\n      <h6>Glow</h6><p>Hover me</p>\n    </article>\n    <article data-card data-hover="scale" style="padding:1rem;min-width:140px">\n      <h6>Scale</h6><p>Hover me</p>\n    </article>\n  </div>\n`);',label:"Card hover effects"})}

    <!-- ── LAYOUT ────────────────────────────────────── -->
    <h3>Layout</h3>

    ${Gr({source:'document.body.append(html`\n  <div data-grid>\n    <article data-card style="padding:1rem"><p>Column 1</p></article>\n    <article data-card style="padding:1rem"><p>Column 2</p></article>\n    <article data-card style="padding:1rem"><p>Column 3</p></article>\n  </div>\n`);',label:"Auto grid"})}
    ${Gr({source:'document.body.append(html`\n  <div data-grid data-cols="2">\n    <article data-card style="padding:1rem"><p>Col A</p></article>\n    <article data-card style="padding:1rem"><p>Col B</p></article>\n  </div>\n`);',label:"2-column grid"})}
    ${Gr({source:'document.body.append(html`\n  <div data-layout="sidebar" style="min-height:100px">\n    <aside style="background:var(--vk-color-surface-2);padding:1rem"><p>Sidebar</p></aside>\n    <main style="background:var(--vk-color-surface);padding:1rem"><p>Main content</p></main>\n  </div>\n`);',label:"Sidebar layout"})}

    <!-- ── NAVIGATION ────────────────────────────────── -->
    <h3>Navigation</h3>

    ${Gr({source:'document.body.append(html`\n  <nav>\n    <a href="#" aria-current="page">Home</a>\n    <a href="#">Docs</a>\n    <a href="#">Examples</a>\n    <a href="#">About</a>\n  </nav>\n`);',label:"Nav bar"})}
    ${Gr({source:'document.body.append(html`\n  <nav aria-label="breadcrumb">\n    <ol>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">Docs</a></li>\n      <li><a href="#">VanillaCSS</a></li>\n    </ol>\n  </nav>\n`);',label:"Breadcrumb"})}
    ${Gr({source:'document.body.append(html`\n  <nav aria-label="pagination">\n    <ul>\n      <li><a href="#">‹</a></li>\n      <li><a href="#">1</a></li>\n      <li><a href="#" aria-current="page">2</a></li>\n      <li><a href="#">3</a></li>\n      <li><a href="#">›</a></li>\n    </ul>\n  </nav>\n`);',label:"Pagination"})}

    <!-- ── ALERTS & FEEDBACK ─────────────────────────── -->
    <h3>Alerts &amp; Feedback</h3>

    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <div role="alert">Default — informational message</div>\n    <div role="alert" data-color-variant="danger">Danger: something went wrong</div>\n    <div role="alert" data-color-variant="success">Success: changes saved</div>\n    <div role="alert" data-color-variant="warning">Warning: action cannot be undone</div>\n    <div role="alert" data-color-variant="info">Info: a new version is available</div>\n    <div role="alert" data-color-variant="primary">Primary: featured announcement</div>\n  </div>\n`);',label:"Alert variants"})}
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <progress value="35" max="100"></progress>\n    <progress value="70" max="100"></progress>\n  </div>\n`);',label:"Progress bars"})}

    <p>Skeleton loading — apply <code>data-skeleton</code> to any element:</p>
    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <p data-skeleton style="width:60%;height:1em"></p>\n    <p data-skeleton style="width:40%;height:1em"></p>\n    <p data-skeleton style="width:80%;height:1em"></p>\n  </div>\n`);',label:"Skeleton loading"})}

    <!-- ── BADGES & TAGS ─────────────────────────────── -->
    <h3>Badges &amp; Tags</h3>

    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center">\n    <span data-badge>Default</span>\n    <span data-badge data-color-variant="primary">Primary</span>\n    <span data-badge data-color-variant="danger">Danger</span>\n    <span data-badge data-color-variant="success">Success</span>\n    <span data-badge data-color-variant="warning">Warning</span>\n    <span data-badge data-color-variant="info">Info</span>\n  </div>\n`);',label:"Badge variants"})}
    ${Gr({source:"document.body.append(html`\n  <ul data-tags>\n    <li>TypeScript</li>\n    <li>CSS</li>\n    <li>Vanilla JS</li>\n    <li>HTML</li>\n    <li>Progressive enhancement</li>\n  </ul>\n`);",label:"Tags"})}

    <!-- ── TABLES ────────────────────────────────────── -->
    <h3>Tables</h3>

    ${Gr({source:'document.body.append(html`\n  <table>\n    <thead>\n      <tr>\n        <th aria-sort="ascending">Name</th>\n        <th>Role</th>\n        <th>Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Alice Chen</td><td>Engineer</td>\n        <td><span data-badge data-color-variant="success">Active</span></td>\n      </tr>\n      <tr>\n        <td>Bob Smith</td><td>Designer</td>\n        <td><span data-badge data-color-variant="success">Active</span></td>\n      </tr>\n      <tr>\n        <td>Carol White</td><td>Manager</td>\n        <td><span data-badge data-color-variant="warning">Away</span></td>\n      </tr>\n    </tbody>\n  </table>\n`);'})}

    <!-- ── TIMELINE ──────────────────────────────────── -->
    <h3>Timeline</h3>

    ${Gr({source:"document.body.append(html`\n  <ol data-timeline>\n    <li>\n      <strong>Project kickoff</strong>\n      <p>Team assembled, requirements defined</p>\n    </li>\n    <li>\n      <strong>Design phase</strong>\n      <p>Wireframes and prototypes completed</p>\n    </li>\n    <li>\n      <strong>Development</strong>\n      <p>Implementation in progress</p>\n    </li>\n  </ol>\n`);"})}

    <!-- ── TABS ──────────────────────────────────────── -->
    <h3>Tabs</h3>
    <p>
      Styled via <code>role="tablist"</code> and <code>role="tab"</code>. Use
      <code>aria-selected="true"</code> on the active tab.
    </p>

    ${Gr({source:'document.body.append(html`\n  <div>\n    <div role="tablist">\n      <button role="tab" aria-selected="true">Overview</button>\n      <button role="tab" aria-selected="false">API</button>\n      <button role="tab" aria-selected="false">Examples</button>\n    </div>\n    <div role="tabpanel"><p>Active panel content shown here.</p></div>\n  </div>\n`);'})}

    <!-- ── ACCORDION ─────────────────────────────────── -->
    <h3>Accordion</h3>
    <p>
      Uses native <code>&lt;details&gt;</code> — no JavaScript needed. Stack
      adjacently to merge borders automatically.
    </p>

    ${Gr({source:"document.body.append(html`\n  <div>\n    <details>\n      <summary>What is VanillaCSS?</summary>\n      <p>A classless CSS framework that styles semantic HTML without class names.</p>\n    </details>\n    <details open>\n      <summary>How do I customize it?</summary>\n      <p>Override <code>--vk-*</code> custom properties in your own stylesheet.</p>\n    </details>\n    <details>\n      <summary>Does it need JavaScript?</summary>\n      <p>No — CSS-only usage is fully functional.</p>\n    </details>\n  </div>\n`);"})}

    <!-- ── DROPDOWN ──────────────────────────────────── -->
    <h3>Dropdown</h3>
    <p>
      Add <code>data-dropdown</code> to a <code>&lt;details&gt;</code>
      for absolute-positioned menus.
    </p>

    ${Gr({source:'document.body.append(html`\n  <details data-dropdown>\n    <summary><button>Options ▾</button></summary>\n    <ul>\n      <li><a href="javascript:void(0)">Profile</a></li>\n      <li><a href="javascript:void(0)">Settings</a></li>\n      <li><a href="javascript:void(0)">Sign out</a></li>\n    </ul>\n  </details>\n`);'})}

    <!-- ── DIALOG ────────────────────────────────────── -->
    <h3>Dialog</h3>
    <p>
      Styled via the native <code>&lt;dialog&gt;</code> element. Open with
      <code>dialogEl.showModal()</code> for a modal with backdrop, or
      <code>.show()</code> for modeless.
    </p>

    ${Gr({source:'\n  const openDialog = () =>\n    document.querySelector<HTMLDialogElement>("#dialogTest")?.showModal();\n  const closeDialog = () =>\n    document.querySelector<HTMLDialogElement>("#dialogTest")?.close();\n\n  const Dialog = () => html`\n    <dialog id="dialogTest">\n      <header><h4>Confirm delete</h4></header>\n      <p>\n        This will permanently delete the item. This action cannot be undone.\n      </p>\n      <footer>\n        <button data-style-variant="ghost" onclick=${closeDialog}>\n          Cancel\n        </button>\n        <button data-color-variant="danger" onclick=${closeDialog}>\n          Delete\n        </button>\n      </footer>\n    </dialog>\n\n    <button onclick=${openDialog}>Open</button>\n  `;\ndocument.body.append(Dialog());',label:"Modal dialog"})}
    ${Zr('// Open as modal (with backdrop)\nconst dialog = document.querySelector("dialog");\ndialog.showModal();\n\n// Close\ndialog.close();',"javascript")}

    <!-- ── TOOLTIP ───────────────────────────────────── -->
    <h3>Tooltip</h3>
    <p>
      CSS-only tooltips via <code>data-tooltip</code>. Appears above the element
      on hover or focus.
    </p>

    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-tooltip="Copy to clipboard">Copy</button>\n    <button data-tooltip="Open in a new tab" data-color-variant="primary">Open</button>\n    <abbr data-tooltip="HyperText Markup Language">HTML</abbr>\n  </div>\n`);'})}

    <!-- ── POPOVER ───────────────────────────────────── -->
    <h3>Popover</h3>
    <p>
      Styled via the <code>[popover]</code> attribute. Uses the native Popover
      API — no extra JavaScript needed for basic show/hide.
    </p>

    ${Gr({source:'document.body.append(html`\n  <div style="display:flex;gap:.75rem;align-items:center">\n    <button popovertarget="vk-pop-demo" style="anchor-name:--vk-pop-demo">Show tip ▾</button>\n    <div popover id="vk-pop-demo" style="margin:4px 0 0;position:fixed;position-anchor:--vk-pop-demo;top:anchor(bottom);left:anchor(left)">\n      <strong>Quick tip</strong>\n      <p>Use CSS sub-layers to override styles without specificity battles.</p>\n    </div>\n    <small style="opacity:.6">Click the button to open</small>\n  </div>\n`);',label:"Popover"})}
  </section>`},"vanillacss-tokens":function(){return y`<section>
    <h2>Token Reference</h2>
    <p>
      All <code>--vk-*</code> custom properties. Override any token in your own
      stylesheet — unlayered declarations automatically beat
      <code>@layer vanillacss.tokens</code>.
    </p>
    ${Zr(":root {\n  --vk-color-accent: hsl(220 80% 60%);  /* override a single token */\n}","css")}

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
        ${xs("--vk-gray-0","36 10% 98%","Near-white warm gray")}
        ${xs("--vk-gray-1","36 8% 94%","Light surface")}
        ${xs("--vk-gray-2","240 6% 85%","Borders (light)")}
        ${xs("--vk-gray-3","240 4% 70%","Muted surface")}
        ${xs("--vk-gray-4","255 2% 55%","Muted text")}
        ${xs("--vk-gray-5","240 4% 35%","Mid gray")}
        ${xs("--vk-gray-6","240 8% 22%","Dark surface")}
        ${xs("--vk-gray-7","240 8% 14%","Deeper surface")}
        ${xs("--vk-gray-8","240 8% 10%","Near-black (body text, light)")}
        ${xs("--vk-gray-9","240 8% 5%","True dark background")}
        ${xs("--vk-gold","47 78% 59%","Default accent hue")}
        ${xs("--vk-green","151 76% 62%","Success hue")}
        ${xs("--vk-yellow","45 90% 58%","Warning hue")}
        ${xs("--vk-red","0 76% 62%","Danger hue")}
        ${xs("--vk-blue","225 76% 62%","Info hue")}
        ${xs("--vk-purple","270 60% 62%","Purple hue")}
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
        ${xs("--vk-color-bg","hsl(--vk-gray-0)","Page background")}
        ${xs("--vk-color-surface","hsl(--vk-gray-1)","Card / panel background")}
        ${xs("--vk-color-surface-2","hsl(--vk-gray-2)","Nested surface, code block bg")}
        ${xs("--vk-color-surface-3","hsl(--vk-gray-3)","kbd, switch track, deep nested")}
        ${xs("--vk-color-border","hsl(--vk-gray-2)","All borders")}
        ${xs("--vk-color-text","hsl(--vk-gray-8)","Body text")}
        ${xs("--vk-color-text-muted","hsl(--vk-gray-4)","Subtext, placeholders, labels")}
        ${xs("--vk-color-link","hsl(--vk-gold)","Link color (alias of accent)")}
        ${xs("--vk-color-accent","hsl(--vk-gold)","Primary accent — links, active states, focus rings")}
        ${xs("--vk-color-accent-dim","hsl(--vk-gold / 0.18)","Accent tint for backgrounds")}
        ${xs("--vk-color-danger","hsl(--vk-red)","Error / destructive")}
        ${xs("--vk-color-danger-dim","hsl(--vk-red / 0.12)","Danger tint")}
        ${xs("--vk-color-success","hsl(--vk-green)","Positive / confirmed")}
        ${xs("--vk-color-success-dim","hsl(--vk-green / 0.12)","Success tint")}
        ${xs("--vk-color-warning","hsl(--vk-yellow)","Caution / in-progress")}
        ${xs("--vk-color-warning-dim","hsl(--vk-yellow / 0.12)","Warning tint")}
        ${xs("--vk-color-info","hsl(--vk-blue)","Neutral informational")}
        ${xs("--vk-color-info-dim","hsl(--vk-blue / 0.12)","Info tint")}
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
        ${xs("--vk-font-body","system-ui, -apple-system, 'Segoe UI', sans-serif","Body font stack")}
        ${xs("--vk-font-mono","ui-monospace, 'Cascadia Code', 'Fira Code', monospace","Code / mono font stack")}
        ${xs("--vk-font-size-sm","0.875rem","Small text, labels, nav")}
        ${xs("--vk-font-size-base","1rem","Body text")}
        ${xs("--vk-font-size-lg","1.125rem","Large text, hero subtitle")}
        ${xs("--vk-font-size-xl","1.25rem","h4")}
        ${xs("--vk-font-size-2xl","1.5rem","h3")}
        ${xs("--vk-font-size-3xl","2rem","h2, card stat dd")}
        ${xs("--vk-font-size-4xl","2.5rem","h1")}
        ${xs("--vk-line-height","1.6","Body line height")}
        ${xs("--vk-line-height-tight","1.2","Heading line height")}
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
        ${xs("--vk-space-xs","0.25rem","Tight gaps, marker margins")}
        ${xs("--vk-space-sm","0.5rem","Component inner padding")}
        ${xs("--vk-space-md","1rem","Standard spacing, paragraph margin")}
        ${xs("--vk-space-lg","1.5rem","Section padding, card padding")}
        ${xs("--vk-space-xl","2.5rem","Section margin, header block")}
        ${xs("--vk-space-2xl","4rem","Hero padding, top-level gaps")}
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
        ${xs("--vk-radius-sm","4px","Tags, badges, marks, kbd, small inputs")}
        ${xs("--vk-radius-md","8px","Buttons, inputs, cards, dialogs")}
        ${xs("--vk-radius-lg","12px","Dialog, large surfaces")}
        ${xs("--vk-radius-full","9999px","Pill buttons, switches, avatars, progress")}
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
        ${xs("--vk-shadow-sm","0 1px 3px hsl(0 0% 0% / 0.08)","Subtle elevation — range thumb")}
        ${xs("--vk-shadow-md","0 4px 12px hsl(0 0% 0% / 0.1)","Dropdowns, popovers, lifted cards")}
        ${xs("--vk-shadow-lg","0 8px 30px hsl(0 0% 0% / 0.12)","Dialogs, toasts")}
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
        ${xs("--vk-ease-default","cubic-bezier(0.4, 0, 0.2, 1)","Standard motion — all transitions")}
        ${xs("--vk-ease-bounce","cubic-bezier(0.34, 1.56, 0.64, 1)","Playful entrance — available for custom use")}
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
        ${xs("--vk-z-dropdown","100","Dropdown menus, tooltips")}
        ${xs("--vk-z-sticky","200","Sticky headers, floating elements")}
        ${xs("--vk-z-modal","300","Modals, overlays")}
        ${xs("--vk-z-toast","400","Toast notifications — always on top")}
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
        ${xs("--vk-font-size-root","100%","font-size on <html> — scales all rem values across the page")}
        ${xs("--vk-transition-speed","0.15s","All hover, focus, and color transitions")}
        ${xs("--vk-transition-speed-slow","0.2s","Switch toggle slide, progress bar fill, accordion icon rotation")}
        ${xs("--vk-animation-speed","0.2s","Dialog and overlay entrance keyframe duration")}
        ${xs("--vk-container-max-width","72rem","<main> max-width")}
        ${xs("--vk-sidebar-width","200px",'[data-layout="sidebar"] first column width')}
      </tbody>
    </table>
  </section>`},components:function(){return y`<section>
    <h2>Components</h2>
    <p>
      There's no special component API. A component is just a function that
      returns a DOM node. Call it, get a node, append it wherever you want.
    </p>

    ${Gr({source:Vr,label:"Counter component"})}

    <h3>Passing data (props)</h3>
    <p>
      Props are just function arguments. Pass signals for reactive data, or
      plain values for static data.
    </p>

    ${Gr({source:'\nimport { html, css, type VanillaElement } from "vanillakit";\n\ninterface UserComponentProps {\n  name: string;\n  role: string;\n}\n\nconst UserComponent = ({ name, role }: UserComponentProps): VanillaElement => {\n  return html`\n    <article>\n      <h3 style="margin:0 0 4px; font-size:0.95rem;">${name}</h3>\n      <p>${role}</p>\n    </article>\n  `;\n}\n\ndocument.body.append(html`\n  <div style="display:flex; gap: 1rem; flex-wrap:wrap;">\n    ${UserComponent({ name: "Ada", role: "Engineer" })}\n    ${UserComponent({ name: "Grace", role: "Admiral" })}\n    ${UserComponent({ name: "Alan", role: "Mathematician" })}\n  </div>\n`);',label:"UserCard component"})}

    <h3>Reactive props</h3>
    <p>
      Pass signals as props for reactive data flow. The child component updates
      automatically when the parent signal changes — no re-rendering, no prop
      diffing.
    </p>

    ${Gr({source:'\nimport { signal, html } from "vanillakit";\n\nconst Greeting = ({ name, color }) => {\n  return html`\n    <p style=${() => `color: ${color()};`}>\n      Hello, ${name}!\n    </p>\n  `;\n}\n\nconst userName = signal("Ada");\nconst userColor = signal("#e8c547");\n\ndocument.body.append(html`\n  <div>\n    ${Greeting({ name: userName, color: userColor })}\n    <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">\n      <input value=${userName} oninput=${(e) => userName(e.target.value)}\n        placeholder="Name" style="max-width:200px;" />\n      <input type="color" value=${userColor} oninput=${(e) => userColor(e.target.value)}\n        style="width:40px; height:34px; border:none; cursor:pointer;" />\n    </div>\n  </div>\n`);\n',label:"Reactive props — type a name or pick a color"})}

    <h3>Children / composition</h3>
    <p>
      Since components return DOM nodes, compose them by nesting in
      <code>html\`\`</code>:
    </p>

    ${Gr({source:'\nimport { html } from "vanillakit";\n\nconst ChildComponent = () => html`<p>This is a child component.</p>`;\n\ndocument.body.append(html`\n  <div>\n    <h1>Parent Component</h1>\n    ${ChildComponent()}\n  </div>\n`);\n',label:"Layout component with children"})}

    <p>Or pass children as arguments:</p>

    ${Gr({source:'\nimport { html, css } from "vanillakit";\n\nconst Layout = (title, ...children) => {\n  return html`\n    <div class=${css`max-width: 800px; margin: 0 auto; padding: 24px;`}>\n      <h1>${title}</h1>\n      ${children}\n    </div>\n  `;\n}\n\nconst Child1 = () => html`<p>This is the first child component.</p>`;\nconst Child2 = () => html`<p>This is the second child component.</p>`;\n\nconst App = () => {\n  return Layout("My App",\n    Child1(),\n    Child2(),\n    html`<p>This is a child passed directly as an argument.</p>`\n  );\n}\n\ndocument.body.append(App());\n',label:"Direct children via arguments"})}
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
    ${Zr('import { signal, effect } from "vanillakit";\n\nconst count = signal(0);\n\n// Reading inside an effect creates a subscription\neffect(() => {\n  console.log("count is", count());\n});\n\ncount(1);          // effect re-runs → "count is 1"\ncount(n => n + 1); // effect re-runs → "count is 2"')} ${Gr({source:'import { signal, effect, html, css, cx } from "vanillakit";\n\nconst count = signal(0);\nconst log = signal([]);\n\neffect(() => {\n  const v = count();\n  log(l => [...l.slice(-4), `count is ${v}`]);\n});\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n      <button onclick=${() => count(0)}>Reset</button>\n      <span style="font-family:monospace;">count = ${count}</span>\n    </div>\n    <div style="font-family:monospace; font-size:0.8rem; color:gray; line-height:1.6;">\n      ${() => log().map(l => html`<div>→ ${l}</div>`)}\n    </div>\n  </div>\n`);',label:"Signal — click to update, watch the effect log"})}

    <h3>Computed values</h3>
    <p>
      <code>computed</code> derives a read-only signal from others. It only
      recalculates when its dependencies change.
    </p>
    ${Zr('import { signal, computed } from "vanillakit";\n\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ntotal(); // 30\nqty(5);\ntotal(); // 50')} ${Gr({source:'import { signal, computed, html } from "vanillakit";\n\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label>Price:\n      <input type="number" value=${() => price()}\n        oninput=${(e) => price(+e.target.value)} style="width:80px;" />\n    </label>\n    <label>Qty:\n      <input type="number" value=${() => qty()}\n        oninput=${(e) => qty(+e.target.value)} style="width:80px;" />\n    </label>\n    <span style="font-weight:700;">Total: $${total}</span>\n  </div>\n`);',label:"Computed — derived value updates automatically"})}

    <h3>Batching</h3>
    <p>
      Multiple signal writes inside <code>batch()</code> are grouped — effects
      run once at the end, not after each write.
    </p>
    ${Zr('import { signal, effect, batch } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + b()));\n// logs: 3\n\nbatch(() => { a(10); b(20); });\n// logs: 30 (once, not twice)')} ${Gr({source:'import { signal, computed, batch, html } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\nconst runCount = signal(0);\nconst sum = computed(() => { runCount(n => n + 1); return a() + b(); });\n\ndocument.body.append(html`\n  <div>\n    <div style="margin-bottom:10px; font-family:monospace;">\n      a=${a} b=${b} sum=${sum} (computed ran ${runCount}×)\n    </div>\n    <button onclick=${() => { a(n => n + 1); b(n => n + 1); }}>\n      a++ b++ (no batch, 2 runs)\n    </button>\n    <button onclick=${() => batch(() => { a(n => n + 1); b(n => n + 1); })}>\n      a++ b++ (batched, 1 run)\n    </button>\n    <button onclick=${() => { a(1); b(2); runCount(0); }}>Reset</button>\n  </div>\n`);',label:"Batch — grouped writes, single recomputation"})}

    <h3>Reactive proxies</h3>
    <p>
      For complex state, <code>reactive()</code> wraps objects in deep proxies.
      Mutate normally — changes propagate automatically.
    </p>
    ${Zr('import { reactive, effect, snapshot } from "vanillakit";\n\nconst state = reactive({\n  user: { name: "Ada", scores: [95, 87] },\n});\n\neffect(() => console.log(state.user.name));\n// logs: "Ada"\n\nstate.user.name = "Grace";\n// logs: "Grace"\n\nstate.user.scores.push(92); // also tracked')}

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
    ${Zr('import { signal, html } from "vanillakit";\n\nconst users = signal([]);\nconst loading = signal(true);\nconst error = signal(null);\n\nfetch("/api/users")\n  .then(r => r.json())\n  .then(data => { users(data); loading(false); })\n  .catch(err => { error(err.message); loading(false); });\n\ndocument.body.append(html`\n  <div>\n    ${() => {\n      if (loading()) return html`<p>Loading...</p>`;\n      if (error()) return html`<p style="color:red">${error()}</p>`;\n      return html`<ul>${() => users().map(u => html`<li>${u.name}</li>`)}</ul>`;\n    }}\n  </div>\n`);')}

    <h3>Reusable fetch helper</h3>
    <p>
      Wrap fetch logic in a function that returns signals — the vanillakit
      equivalent of a custom hook.
    </p>
    ${Zr('function useFetch(url) {\n  const data = signal(null);\n  const loading = signal(true);\n  const error = signal(null);\n\n  fetch(url)\n    .then(r => r.json())\n    .then(d => { data(d); loading(false); })\n    .catch(e => { error(e.message); loading(false); });\n\n  return { data, loading, error };\n}\n\n// Use it anywhere\nconst { data: todos, loading } = useFetch("/api/todos");\n\ndocument.body.append(html`\n  <div>\n    ${() => loading()\n      ? html`<p>Loading...</p>`\n      : html`<ul>\n          ${() => todos().map(t => html`<li>${t.text}</li>`)}\n        </ul>`\n    }\n  </div>\n`);')}

    <h3>Reactive refetch</h3>
    <p>Use <code>effect</code> to refetch when a signal changes:</p>
    ${Zr('import { signal, effect } from "vanillakit";\n\nconst page = signal(1);\nconst items = signal([]);\n\neffect(() => {\n  const p = page();\n  fetch(`/api/items?page=${p}`)\n    .then(r => r.json())\n    .then(data => items(data));\n});\n\n// Changing page triggers a refetch\npage(2);')}
  </section>`},conditional:function(){return y`<section>
    <h2>Conditional Rendering</h2>
    <p>
      In <code>html\`\`</code>, use a function that returns different nodes (or
      <code>null</code>) based on signal values. The DOM updates surgically when
      conditions change.
    </p>

    <h3>Show / hide</h3>
    ${Gr({source:'import { signal, html } from "vanillakit";\n\nconst loggedIn = signal(false);\n\ndocument.body.append(html`\n  <div>\n    ${() => loggedIn()\n      ? html`<div style="display:flex; align-items:center; gap:12px;">\n          <span style="color:gold; font-weight:600;">Welcome back!</span>\n          <button onclick=${() => loggedIn(false)}>Log out</button>\n        </div>`\n      : html`<button onclick=${() => loggedIn(true)}>Log in</button>`\n    }\n  </div>\n`);',label:"Show/hide — toggle login state"})}

    <h3>Multiple conditions</h3>
    ${Gr({source:'import { signal, html } from "vanillakit";\n\nconst status = signal("idle"); // "idle" | "loading" | "error" | "done"\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; margin-bottom:12px;">\n      <button onclick=${() => status("idle")}>Idle</button>\n      <button onclick=${() => status("loading")}>Loading</button>\n      <button onclick=${() => status("error")}>Error</button>\n      <button onclick=${() => status("done")}>Done</button>\n    </div>\n    <div style="font-size:1rem; font-weight:600;">\n      ${() => {\n        switch (status()) {\n          case "loading": return html`<span>Loading...</span>`;\n          case "error":   return html`<span style="color:red;">Error!</span>`;\n          case "done":    return html`<span style="color:green;">Done ✓</span>`;\n          default:        return html`<span>Ready.</span>`;\n        }\n      }}\n    </div>\n  </div>\n`);',label:"Switch — click buttons to change status"})}

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
    ${Gr({source:'import { signal, each, html, css } from "vanillakit";\n\nlet nextId = 4;\nconst items = signal([\n  { id: 1, label: "Alpha" },\n  { id: 2, label: "Bravo" },\n  { id: 3, label: "Charlie" },\n]);\n\nconst itemStyle = css`\n  display: flex; align-items: center; gap: 8px;\n  padding: 6px 10px; border-radius: 6px;\n  background: var(--vk-color-bg); border: 1px solid var(--vk-color-border);\n  font-size: 0.85rem; font-family: monospace;\n`;\n\nconst names = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"];\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; margin-bottom:12px;">\n      <button onclick=${() => items(l =>\n        [...l, { id: nextId++, label: names[(nextId - 5) % names.length] }]\n      )}>Add item</button>\n      <button onclick=${() => items(l => [...l].reverse())}>Reverse</button>\n      <button onclick=${() => items(l => l.slice(0, -1))}>Remove last</button>\n    </div>\n    <div style="display:flex; flex-direction:column; gap:6px;">\n      ${each(items, i => i.id, (itemSig, indexSig) =>\n        html`<div class=${itemStyle}>\n          <span style="color:gray;">#${indexSig}</span>\n          <span>${() => itemSig().label}</span>\n          <button style="margin-left:auto; background:none; border:none; color:gray; cursor:pointer;"\n            onclick=${() => items(l => l.filter(i => i.id !== itemSig().id))}>✕</button>\n        </div>`,\n      )}\n    </div>\n  </div>\n`);',label:"Keyed list — add, remove, reverse"})}

    <h3>Adding, removing, reordering</h3>
    <p>
      Mutate the signal array — <code>each()</code> diffs by key and
      moves/creates/removes DOM nodes efficiently.
    </p>
    ${Zr('// Add\nitems(list => [...list, { id: 4, label: "Delta" }]);\n\n// Remove\nitems(list => list.filter(i => i.id !== 2));\n\n// Reorder (DOM nodes are moved, not recreated)\nitems(list => [...list].reverse());\n\n// Update an item (the itemSig in the render function updates)\nitems(list => list.map(i =>\n  i.id === 1 ? { ...i, label: "Updated" } : i\n));')}

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
    ${Gr({source:'import { signal, html } from "vanillakit";\n\nconst name = signal("");\n\ndocument.body.append(html`\n  <div>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)}\n      placeholder="Your name" style="max-width:240px; margin-bottom:10px;" />\n    <p style="font-size:1rem; font-weight:600;">Hello, ${() => name() || "…"}!</p>\n  </div>\n`);',label:"Two-way binding — type to see it update"})}

    <h3>Checkbox</h3>
    ${Gr({source:'import { signal, html } from "vanillakit";\n\nconst agreed = signal(false);\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">\n      <input type="checkbox" checked=${() => agreed()}\n        onchange=${(e) => agreed(e.target.checked)} />\n      I agree to the terms\n    </label>\n    <button disabled=${() => !agreed()}\n      style=${() => !agreed() ? "opacity:0.4; cursor:not-allowed;" : ""}>\n      Submit\n    </button>\n  </div>\n`);',label:"Checkbox — toggle to enable the button"})}

    <h3>Select</h3>
    ${Gr({source:'import { signal, html } from "vanillakit";\n\nconst color = signal("blue");\nconst colorMap = { red: "#e45", blue: "#48f", green: "#4c8" };\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px;">\n    <select onchange=${(e) => color(e.target.value)}>\n      <option value="red">Red</option>\n      <option value="blue" selected>Blue</option>\n      <option value="green">Green</option>\n    </select>\n    <span style=${() => `font-weight:700; color:${colorMap[color()]};`}>\n      Chosen: ${color}\n    </span>\n  </div>\n`);',label:"Select — pick a color"})}

    <h3>Form submission</h3>
    ${Zr('const form = { name: signal(""), email: signal("") };\n\nhtml`\n  <form onsubmit=${(e) => {\n    e.preventDefault();\n    console.log({ name: form.name(), email: form.email() });\n  }}>\n    <input value=${() => form.name()} oninput=${(e) => form.name(e.target.value)} />\n    <input value=${() => form.email()} oninput=${(e) => form.email(e.target.value)} type="email" />\n    <button type="submit">Submit</button>\n  </form>\n`;')}

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
    ${Gr({source:'import { css, html } from "vanillakit";\n\nconst card = css`\n  padding: 16px; background: var(--vk-color-bg);\n  border: 1px solid var(--vk-color-border); border-radius: 8px;\n  transition: border-color 0.15s ease;\n  &:hover { border-color: var(--vk-color-accent); }\n  & .title { font-weight: 700; color: var(--vk-color-accent); }\n  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }\n`;\n\ndocument.body.append(html`\n  <div class=${card}>\n    <span class="title">Styled card</span>\n    <div class="desc">Hover me — the border changes color.</div>\n  </div>\n`);',label:"Scoped CSS — hover the card"})}

    <h3>Dynamic styles</h3>
    <p>
      For styles that change based on signals, use a reactive
      <code>class</code> attribute or inline <code>style</code>:
    </p>
    ${Zr('import { signal, html, css } from "vanillakit";\n\nconst active = signal(false);\n\nconst base = css`padding: 8px; border-radius: 6px;`;\nconst highlight = css`background: gold; color: #111;`;\n\n// Reactive class\nhtml`<div class=${() => active() ? cx(base, highlight) : base}>Click me</div>`;\n\n// Reactive inline style\nconst size = signal(16);\nhtml`<p style=${() => `font-size: ${size()}px`}>Resizable text</p>`;')} ${Gr({source:'import { signal, html } from "vanillakit";\n\nconst size = signal(16);\n\ndocument.body.append(html`\n  <div>\n    <input type="range" min="10" max="40" value=${() => size()}\n      oninput=${(e) => size(+e.target.value)}\n      style="width:200px; margin-bottom:10px;" />\n    <span style="font-family:monospace; font-size:0.8rem; margin-left:8px;">\n      ${size}px\n    </span>\n    <p style=${() => `font-size: ${size()}px; font-weight: 600; transition: font-size 0.1s;`}>\n      Resizable text\n    </p>\n  </div>\n`);',label:"Dynamic styles — drag the slider"})}

    <h3>Animations</h3>
    ${Zr('import { css, keyframes } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`animation: ${spin} 1s linear infinite;`;')} ${Gr({source:'import { css, keyframes, html } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`\n  display: inline-block; width: 24px; height: 24px;\n  border: 3px solid var(--vk-color-border); border-top-color: var(--vk-color-accent);\n  border-radius: 50%; animation: ${spin} 0.8s linear infinite;\n`;\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:12px;">\n    <div class=${spinner}></div>\n    <span style="font-size:0.85rem; color:gray;">Spinning via keyframes\\`\\`</span>\n  </div>\n`);',label:"Keyframes animation"})}

    <h3>Combining class names</h3>
    <p><code>cx()</code> joins class names, filtering out falsy values:</p>
    ${Zr('import { cx, css } from "vanillakit";\n\nconst base = css`padding: 8px;`;\nconst active = css`color: gold;`;\nconst disabled = false;\n\ncx(base, isActive && active, disabled && "disabled");\n// falsy values are skipped')}

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
    ${Zr('import { initRouter } from "vanillakit";\n\n// Hash mode (default) — no server config needed\ninitRouter({ mode: "hash" });\n\n// History mode — requires the server to serve index.html for all routes\ninitRouter({ mode: "history" });')}

    <h3>Basic setup</h3>
    ${Zr('import { html, createRouter, navLink, css } from "vanillakit";\n\nconst Router = createRouter({\n  "/":      () => html`<h1>Home</h1>`,\n  "/about": () => html`<h1>About</h1>`,\n  "*":      () => html`<h1>404</h1>`,\n});\n\nconst active = css`color: gold;`;\nconst base = css`color: gray;`;\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);')}

    <h3>Route parameters</h3>
    ${Zr('import { createRouter, routeParams, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/user/:id": () => html`\n    <div>\n      <h1>User ${() => routeParams().id}</h1>\n    </div>\n  `,\n});')}

    <h3>Programmatic navigation</h3>
    ${Zr('import { navigate } from "vanillakit";\n\n// Navigate from code\nnavigate("/user/42");\n\n// In a click handler\nhtml`<button onclick=${() => navigate("/settings")}>Settings</button>`;')}

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
      ${Zr('\x3c!-- partials/dashboard.html --\x3e\n<div class="server-row"><strong>Dashboard</strong> — loaded via htmx</div>\n<div class="server-row">User: <em>Ada Lovelace</em> | Role: Admin</div>\n<div class="server-row">Last login: <span id="login-time"></span></div>\n<div data-vanillakit="counter"></div>\n<script>\n  document.getElementById("login-time").textContent = new Date().toLocaleTimeString();\n<\/script>',"markup")}

      <h3>Setup</h3>
      ${Zr('<!doctype html>\n<html>\n  <head>\n    <script src="https://unpkg.com/htmx.org@2"><\/script>\n  </head>\n  <body>\n    <div hx-get="/partials/dashboard.html" hx-trigger="click" hx-target="#content">\n      Load dashboard\n    </div>\n    <div id="content"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}

      <h3>Reactive islands inside swapped content</h3>
      <p>
        After htmx swaps in HTML, mount vanillakit components on
        <code>[data-vanillakit]</code> elements.
      </p>
      ${Zr('import { signal, html, css } from "vanillakit";\n\nfunction LiveCounter(el) {\n  const count = signal(0);\n  el.replaceChildren(html`\n    <button\n      class=${css`padding: 6px 14px; cursor: pointer;`}\n      onclick=${() => count(n => n + 1)}\n    >\n      Clicked ${count} times\n    </button>\n  `);\n}\n\ndocument.body.addEventListener("htmx:afterSwap", (e) => {\n  e.detail.target\n    .querySelectorAll("[data-vanillakit]")\n    .forEach((el) => {\n      if (el.dataset.vanillakit === "counter") LiveCounter(el);\n    });\n});')}
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
      ${Zr('import { signal, html } from "vanillakit";\n\nconst open = signal(false);\n\ndocument.body.append(html`\n  <div class="max-w-md mx-auto p-6">\n    <button\n      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"\n      onclick=${() => open(v => !v)}\n    >\n      Toggle\n    </button>\n    <div class=${() => open()\n      ? "mt-4 p-4 bg-gray-800 rounded border border-gray-700"\n      : "hidden"\n    }>\n      Reactively shown/hidden via signals.\n    </div>\n  </div>\n`);')}

      <h3>Mixing Tailwind + css\`\`</h3>
      <p>
        Use <code>cx()</code> to combine Tailwind utility classes with scoped
        styles.
      </p>
      ${Zr('import { html, css, cx } from "vanillakit";\n\nconst glowEffect = css`\n  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);\n  transition: box-shadow 0.3s ease;\n  &:hover { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }\n`;\n\ndocument.body.append(html`\n  <div class=${cx("p-6 rounded-lg bg-gray-900 border border-gray-700", glowEffect)}>\n    Best of both worlds.\n  </div>\n`);')}

      <h3>Tailwind config</h3>
      ${Zr('// tailwind.config.js\nexport default {\n  content: [\n    "./demo/**/*.{html,ts,js}",\n    "./src/**/*.js",\n  ],\n};')}
    </section>
  </section>`},hono:function(){return y`<section>
    <h2>Hono</h2>
    <p>
      Hono is a fast, lightweight web framework for Bun, Deno, Cloudflare
      Workers, and Node. Serve a vanillakit frontend as static files and use
      Hono for the API layer.
    </p>

    <h3>API server + static frontend</h3>
    ${Zr('// server.ts (Hono on Bun)\nimport { Hono } from "hono";\nimport { serveStatic } from "hono/bun";\nimport { cors } from "hono/cors";\n\nconst app = new Hono();\napp.use("/api/*", cors());\n\napp.get("/api/todos", (c) => {\n  return c.json([\n    { id: 1, text: "Build with vanillakit", done: false },\n    { id: 2, text: "Deploy to edge", done: true },\n  ]);\n});\n\napp.post("/api/todos", async (c) => {\n  const body = await c.req.json();\n  return c.json({ id: Date.now(), ...body }, 201);\n});\n\n// Serve the Vite build as static files\napp.use("/*", serveStatic({ root: "./docs" }));\n\nexport default app;',"typescript")}

    <h3>Fetching data into signals</h3>
    ${Zr('import { signal, html } from "vanillakit";\n\nconst todos = signal([]);\nconst loading = signal(true);\n\nfetch("/api/todos")\n  .then(r => r.json())\n  .then(data => { todos(data); loading(false); });\n\ndocument.body.append(html`\n  <div>\n    ${() => loading()\n      ? html`<p>Loading...</p>`\n      : html`<ul>\n          ${() => todos().map(t => html`<li>${t.text}</li>`)}\n        </ul>`\n    }\n  </div>\n`);')}
  </section>`},fastapi:function(){return y`<section>
    <h2>FastAPI</h2>
    <p>
      FastAPI serves as a Python backend. Build the vanillakit app with Vite,
      then serve the static output from FastAPI or use it purely as a JSON API.
    </p>

    <h3>Project layout</h3>
    ${Zr("project/\n  backend/\n    main.py\n    requirements.txt\n  frontend/\n    demo/\n      index.html\n      app.ts\n    src/        # vanillakit source\n    vite.config.js","bash")}

    <h3>FastAPI backend</h3>
    ${Zr('# backend/main.py\nfrom fastapi import FastAPI\nfrom fastapi.staticfiles import StaticFiles\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import BaseModel\n\napp = FastAPI()\napp.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])\n\nclass Todo(BaseModel):\n    id: int\n    text: str\n    done: bool = False\n\ntodos: list[Todo] = [\n    Todo(id=1, text="Learn vanillakit", done=True),\n    Todo(id=2, text="Build something", done=False),\n]\n\n@app.get("/api/todos")\ndef get_todos():\n    return todos\n\n@app.post("/api/todos")\ndef add_todo(todo: Todo):\n    todos.append(todo)\n    return todo\n\napp.mount("/", StaticFiles(directory="../frontend/docs", html=True))',"python")}

    <h3>Frontend fetching</h3>
    ${Zr('import { signal, html, each } from "vanillakit";\n\nconst todos = signal([]);\n\nasync function loadTodos() {\n  const res = await fetch("/api/todos");\n  todos(await res.json());\n}\n\nasync function addTodo(text) {\n  const res = await fetch("/api/todos", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ id: Date.now(), text, done: false }),\n  });\n  todos(list => [...list, await res.json()]);\n}\n\nloadTodos();\n\nconst input = signal("");\n\ndocument.body.append(html`\n  <div>\n    <input\n      value=${() => input()}\n      oninput=${(e) => input(e.target.value)}\n      onkeydown=${(e) => {\n        if (e.key === "Enter") { addTodo(input()); input(""); }\n      }}\n      placeholder="New todo..."\n    />\n    <ul>\n      ${each(todos, t => t.id,\n        (itemSig) => html`<li>${() => itemSig().text}</li>`\n      )}\n    </ul>\n  </div>\n`);')}
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
    ${Zr('import { signal } from "vanillakit";\n\nconst count = signal(0);\ncount();           // read → 0\ncount(5);          // write → 5\ncount(n => n + 1); // update via function → 6\ncount.peek();      // read without tracking')}

    <h3>computed(fn)</h3>
    <p>
      Derives a read-only signal. Re-evaluates only when dependencies change.
    </p>
    ${Zr('import { signal, computed } from "vanillakit";\n\nconst a = signal(2), b = signal(3);\nconst sum = computed(() => a() + b());\nsum(); // 5\na(10);\nsum(); // 13')}

    <h3>effect(fn)</h3>
    <p>
      Runs a side effect whenever dependencies change. Returns a dispose
      function.
    </p>
    ${Zr('import { signal, effect } from "vanillakit";\n\nconst name = signal("world");\nconst dispose = effect(() => console.log("Hello, " + name() + "!"));\n// logs: Hello, world!\nname("vanillakit");\n// logs: Hello, vanillakit!\ndispose(); // stops tracking')}

    <h3>batch(fn)</h3>
    <p>Groups writes — effects run once at the end.</p>
    ${Zr('import { signal, effect, batch } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + b())); // 3\nbatch(() => { a(10); b(20); });       // 30 (once)')}

    <h3>untrack(fn)</h3>
    <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
    ${Zr('import { signal, effect, untrack } from "vanillakit";\n\nconst a = signal(1), b = signal(2);\neffect(() => console.log(a() + untrack(() => b())));\nb(99); // does NOT re-run\na(10); // re-runs, reads b\'s current value')}
  </section>`},reactive:function(){return y`<section>
    <h2>reactive.js</h2>
    <p>
      Deep reactive proxies backed by signals. Mutate normally — changes
      propagate automatically.
    </p>

    <h3>reactive(target)</h3>
    <p>Wraps a plain object/array in a deep reactive proxy.</p>
    ${Zr('import { reactive, effect } from "vanillakit";\n\nconst state = reactive({\n  user: { name: "Ada", scores: [95, 87] },\n});\n\neffect(() => console.log(state.user.name)); // "Ada"\nstate.user.name = "Grace";                  // "Grace"\nstate.user.scores.push(92);                 // tracked')}

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
    ${Zr('import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\nconst el = html`\n  <div>\n    <h1>Hello, ${name}!</h1>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)} />\n  </div>\n`;\ndocument.body.append(el);')}

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
    ${Zr('import { signal, each, html } from "vanillakit";\n\nconst items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);\n\nhtml`<ul>\n  ${each(items, i => i.id, (itemSig) => html`<li>${() => itemSig().text}</li>`)}\n</ul>`;')}
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
    ${Zr('import { css } from "vanillakit";\n\nconst card = css`\n  padding: 16px;\n  background: #1a1a1a;\n  &:hover { border-color: gold; }\n  & .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 8px; }\n`;')}

    <h3>keyframes\`...\`</h3>
    <p>Creates a scoped <code>@keyframes</code> rule.</p>
    ${Zr('import { css, keyframes } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\nconst spinner = css`animation: ${spin} 1s linear infinite;`;')}

    <h3>globalCss\`...\` / cx(...classes)</h3>
    <p>Inject unscoped CSS or join class names (filtering falsy values).</p>
    ${Zr('import { globalCss, cx, css } from "vanillakit";\n\nglobalCss`body { margin: 0; }`;\n\nconst base = css`padding: 8px;`;\nconst active = css`color: gold;`;\ncx(base, isActive && active); // falsy values skipped')}
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
    ${Zr('import { initRouter } from "vanillakit";\n\n// Hash mode (default): URLs like /#/about\ninitRouter({ mode: "hash" });\n\n// History mode: URLs like /about (requires server-side fallback)\ninitRouter({ mode: "history" });')}

    <h3>createRouter(routeMap)</h3>
    <p>
      Maps path patterns to handlers. Supports <code>:param</code> and
      <code>*</code> catch-all.
    </p>
    ${Zr('import { createRouter, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/":         () => html`<h1>Home</h1>`,\n  "/user/:id": () => html`<h1>User page</h1>`,\n  "*":         () => html`<h1>404</h1>`,\n});\ndocument.body.append(Router());')}

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
    ${Zr('import { navLink, css } from "vanillakit";\n\nconst active = css`color: gold; font-weight: 700;`;\nconst base   = css`color: gray;`;\n\ndocument.body.append(navLink("/about", "About", active, base));')}
  </section>`}};!function(t={}){const e=t.mode??"hash";e!==N&&("hash"===N?window.removeEventListener("hashchange",z):window.removeEventListener("popstate",B),N=e,"hash"===e?(M(window.location.hash.slice(1)||"/"),window.addEventListener("hashchange",z)):(M(window.location.pathname||"/"),window.addEventListener("popstate",B)))}({mode:"history"});const{theme:Ss,toggle:As}=function(){const t=localStorage.getItem(U),e=window.matchMedia("(prefers-color-scheme: dark)"),n=()=>e.matches?"dark":"light",o=i(t||n());function s(t){document.documentElement.dataset.theme=t}return s(o()),r(()=>{s(o())}),e.addEventListener("change",()=>{localStorage.getItem(U)||o(n())}),{theme:o,toggle(){const t="dark"===o()?"light":"dark";o(t),localStorage.setItem(U,t)},set(t){"auto"===t?(localStorage.removeItem(U),o(n())):(o(t),localStorage.setItem(U,t))}}}(),Es=O`
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
`,_s=function(t){const e=Object.entries(t).sort((t,e)=>"*"===t[0]?1:"*"===e[0]?-1:e[0].split("/").length-t[0].split("/").length);return()=>{const t=document.createElement("div");return r(()=>{const n=M();let i=null;for(const[t,o]of e){const{regex:e,keys:r}=(()=>{if("*"===t)return{regex:/.*/,keys:[]};const e=[],n=t.replace(/:([^/]+)/g,(t,n)=>(e.push(n),"([^/]+)"));return{regex:new RegExp(`^${n}$`),keys:e}})(),s=n.match(e);if(s){const t={};r.forEach((e,n)=>{t[e]=decodeURIComponent(s[n+1])}),i={handler:o,params:t};break}}if(L(i?i.params:{}),t.innerHTML="",i){const e=i.handler();e instanceof Node&&t.append(e)}}),t}}({"/":function(){return y`<div class="animate-in">
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
      ${_(Wr,t=>t.dd,t=>((t={dd:"1 billion",dt:"That's big!"})=>y` <article data-card style="text-align:center;">
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
    ${Gr({source:Vr,label:"Try editing the code!"})}
  </div>`},"/examples":function(){const t=i("snippets");return y`<div class="animate-in">
    <h1>Examples</h1>
    <p class=${V}>
      Interactive demos, code snippets, and stress tests.
    </p>

    <div data-layout="sidebar">
      <aside>
        <nav>
          ${gs.map(e=>y`
              <div class=${J}>
                <div class="group-label">${e.label}</div>
                ${e.items.map(e=>y`
                    <a
                      class=${Y}
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

      <div>${()=>bs[t()]()}</div>
    </div>
  </div>`},"/docs":function(){const t=i("getting-started");return y`<div class="animate-in">
    <h1>Docs</h1>
    <p class=${V}>API reference, concepts, and guides.</p>

    <div data-layout="sidebar">
      <aside>
        <nav>
          ${ws.map(e=>y`
              <div class=${J}>
                <div class="group-label">${e.label}</div>
                ${e.items.map(e=>y`
                    <a
                      class=${Y}
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

      <div>${()=>$s[t()]()}</div>
    </div>
  </div>`},"/about":function(){return y`<div class="animate-in">
    <h1>Architecture</h1>
    <p class=${V}>
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
      ${ks.map(t=>y`<article data-card style="margin-bottom:10px;">
            <div style="display:flex;align-items:center;gap:16px;">
              <div
                class=${ys}
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
        class=${G}
        href="/"
        onclick=${t=>{t.preventDefault(),H("/")}}
        >vanillakit_</a
      >
      <div style="display:flex;align-items:center;gap:8px;">
        <nav>
          ${q("/","Home")} ${q("/docs","Docs")}
          ${q("/examples","Examples")} ${q("/about","About")}
        </nav>
        <button class=${Es} onclick=${As} title="Toggle theme">
          ${()=>"dark"===Ss()?"☀️":"🌙"}
        </button>
      </div>
    </header>
    <main>${_s()}</main>
    <footer>
      Built with <span class="text-accent">vanillakit</span> — zero deps, ~760
      lines of JS
    </footer>
  `);
