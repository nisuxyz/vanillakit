!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if("childList"===n.type)for(const e of n.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),t.credentials="use-credentials"===e.crossOrigin?"include":"anonymous"===e.crossOrigin?"omit":"same-origin",t}(e);fetch(e.href,t)}}();let e=null,t=0;const n=new Set;function o(o){let r=o;const a=new Set;function s(){if(0===arguments.length)return e&&(a.add(e),e.t.add(a)),r;const o="function"==typeof arguments[0]?arguments[0](r):arguments[0];if(Object.is(o,r))return r;if(r=o,t>0)for(const e of a)n.add(e);else for(const e of[...a])e.o();return r}return s.peek=()=>r,s}function r(e){const t=o(void 0);a(()=>t(e()));const n=()=>t();return n.peek=t.peek,n}function a(t){const n={i:t,t:new Set,l:!1,o(){if(n.l)return;for(const e of n.t)e.delete(n);n.t.clear();const o=e;e=n;try{t()}finally{e=o}}};return n.o(),()=>{n.l=!0;for(const e of n.t)e.delete(n);n.t.clear()}}function s(t){const n=e;e=null;try{return t()}finally{e=n}}const i=Symbol("reactive"),l=Symbol("raw"),c=new WeakMap,d=new Set([i,l,Symbol.toPrimitive,Symbol.toStringTag,Symbol.iterator,Symbol.asyncIterator,Symbol.isConcatSpreadable,"__proto__","constructor","prototype","toJSON"]),p=new Set(["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"]),u=new Set(["indexOf","lastIndexOf","includes"]);function m(e){return null==e||"object"!=typeof e||e instanceof Date||e instanceof RegExp||e instanceof Error||e instanceof Node||e instanceof Map||e instanceof Set?e:f(e)}function f(e){if(null==e||"object"!=typeof e)return e;if(e[i])return e;if(c.has(e))return c.get(e);const r=new Map;function a(t){return r.has(t)||r.set(t,o(m(e[t]))),r.get(t)}const s=new Proxy(e,{get(e,o,s){if(o===i)return!0;if(o===l)return e;if("symbol"==typeof o&&d.has(o))return Reflect.get(e,o,s);if(d.has(o))return Reflect.get(e,o,s);if(Array.isArray(e)&&"string"==typeof o){if(p.has(o))return(...a)=>{let s;return function(){t++;try{return(()=>{const t=a.map(e=>e&&e[l]?e[l]:e);s=Array.prototype[o].apply(e,t),function(e,t){for(let n=0;n<e.length;n++){const o=String(n);t.has(o)&&t.get(o)(m(e[n]))}t.has("length")&&t.get("length")(e.length)}(e,r)})()}finally{if(t--,0===t){const e=[...n];n.clear();for(const t of e)t.o()}}}(),s};if(u.has(o))return(...t)=>(a("length")(),Array.prototype[o].apply(e,[t[0]&&t[0][l]?t[0][l]:t[0],...t.slice(1)]))}return a(o)()},set(e,t,n){const o=n&&n[l]?n[l]:n;return e[t]=o,r.has(t)&&r.get(t)(m(o)),Array.isArray(e)&&r.has("length")&&r.get("length")(e.length),!0},deleteProperty:(e,t)=>(delete e[t],r.has(t)&&(r.get(t)(void 0),r.delete(t)),!0),has:(e,t)=>t===i||t===l||("string"==typeof t&&a(t)(),t in e),ownKeys:e=>(Array.isArray(e)&&a("length")(),Reflect.ownKeys(e)),getPrototypeOf:e=>Reflect.getPrototypeOf(e),getOwnPropertyDescriptor:(e,t)=>Reflect.getOwnPropertyDescriptor(e,t)});return c.set(e,s),s}function g(e){if(null==e||"object"!=typeof e)return e;if(function(e){return null!=e&&!0===e[i]}(e)){const t=e[l];if(Array.isArray(t)){const t=e.length,n=[];for(let o=0;o<t;o++)n.push(g(e[o]));return n}const n={};for(const o of Object.keys(t))n[o]=g(e[o]);return n}if(Array.isArray(e))return e.map(g);const t={};for(const n of Object.keys(e))t[n]=g(e[n]);return t}let h=0;function v(e,...t){const n=h++;let o="";const r=[];for(let p=0;p<e.length;p++)if(o+=e[p],p<t.length)if(b(o)){const e=o.match(/(\S+)\s*=\s*["']?$/);if(e){const t=e[1],a=`data-v-${n}-${p}`;o=o.slice(0,-e[0].length),o+=`${a}="" `,r.push({index:p,attrName:t,elemMarker:a})}else o+=`v${n}_${p}`}else o+=`\x3c!--v${n}-${p}--\x3e`;const a=document.createElement("template");a.innerHTML=o;const s=a.content,i=[];for(const{index:p,attrName:u,elemMarker:m}of r){const e=s.querySelector(`[${m}]`);e&&(e.removeAttribute(m),x(e,u,t[p],i))}const l=document.createTreeWalker(s,NodeFilter.SHOW_COMMENT),c=[];for(;l.nextNode();){const e=l.currentNode;e.data.startsWith(`v${n}-`)&&c.push({node:e,index:parseInt(e.data.slice(`v${n}-`.length))})}for(const{node:p,index:u}of c)$(p,t[u],i);s.p=()=>{for(const e of i)e();i.length=0};const d=[...s.childNodes];return d.length>0&&(d[0].u||(d[0].u=[])).push(s.p),1===s.childNodes.length?s.childNodes[0]:s}function b(e){for(let t=e.length-1;t>=0;t--){if(">"===e[t])return!1;if("<"===e[t])return!0}return!1}function x(e,t,n,o){t.startsWith("on")?e.addEventListener(t.slice(2).toLowerCase(),"function"==typeof n?n:()=>{}):"ref"!==t||"function"!=typeof n?"function"!=typeof n?y(e,t,n):o.push(a(()=>y(e,t,n()))):n(e)}function y(e,t,n){"class"===t||"className"===t?e.className=n??"":"style"===t&&"object"==typeof n?Object.assign(e.style,n):"style"===t&&"string"==typeof n?e.setAttribute("style",n):"checked"===t?e.checked=!!n:"value"===t&&"value"in e?e.value=n??"":"disabled"===t||"readonly"===t||"hidden"===t?n?e.setAttribute(t,""):e.removeAttribute(t):!1===n||null==n?e.removeAttribute(t):e.setAttribute(t,!0===n?"":String(n))}function $(e,t,n){if(null!=t&&t.m)n.push(function(e,{listFn:t,keyFn:n,renderFn:r}){const i=document.createComment("/each");e.parentNode?.insertBefore(i,e.nextSibling);const l=new Map,c=a(()=>{const a=t(),i=Array.isArray(a)?a:[],c=e.parentNode;if(!c)return;const d=i.map(n),p=new Set(d);for(const[e,t]of l)if(!p.has(e)){for(const e of t.disposers)e();for(const e of t.nodes)S(e),e.remove();l.delete(e)}let u=e.nextSibling;for(let e=0;e<i.length;e++){const t=d[e];let n=l.get(t);if(n){if(n.itemSig(i[e]),n.indexSig(e),n.nodes.length>0&&n.nodes[0]!==u)for(const e of n.nodes)c.insertBefore(e,u);u=n.nodes.length>0?n.nodes[n.nodes.length-1].nextSibling:u}else{const a=o(i[e]),d=o(e),p=[];let m;const f=s(()=>(m=r(a,d),m?.p||null)),g=m instanceof DocumentFragment?[...m.childNodes]:[m instanceof Node?m:document.createTextNode(String(m))];f&&p.push(f),n={nodes:g,disposers:p,itemSig:a,indexSig:d},l.set(t,n);const h=document.createDocumentFragment();for(const e of g)h.append(e);c.insertBefore(h,u),u=n.nodes[n.nodes.length-1]?.nextSibling??u}}});return()=>{c();for(const[,e]of l){for(const t of e.disposers)t();for(const t of e.nodes)S(t),t.remove()}l.clear(),i.parentNode&&i.remove()}}(e,t));else{if("function"==typeof t){let o=null;return void n.push(a(()=>{o=k(e,o,t())}))}k(e,null,t)}}function k(e,t,n){const o=e.parentNode;if(!o)return t;if(t){const e=Array.isArray(t)?t:[t];for(const t of e)t.parentNode&&(S(t),t.remove())}if(null==n||!1===n||!0===n)return null;if(Array.isArray(n)){const t=document.createDocumentFragment(),r=[];for(const e of n.flat(1/0)){const n=w(e);n&&(t.append(n),r.push(n))}return o.insertBefore(t,e),r}const r=w(n);return r&&o.insertBefore(r,e),r}function w(e){return null==e||!1===e||!0===e?null:e instanceof Node?e:document.createTextNode(String(e))}function S(e){if(e.u){for(const t of e.u)t();e.u=null}if(e.childNodes)for(const t of e.childNodes)S(t)}function F(e,t,n){return{m:!0,listFn:e,keyFn:t,renderFn:n}}let A=0;const E=new CSSStyleSheet;function _(){return"v-"+(A++).toString(36)}function R(e){for(const n of e){const e=n.trim();if(e)try{E.insertRule(e,E.cssRules.length)}catch(t){}}}function T(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],r<t.length&&(n+=t[r]);const o=_();return R(function(e,t){const n=function(e){const t={declarations:"",children:[],selector:""},n=[t];let o="",r=!1,a="";for(let i=0;i<e.length;i++){const t=e[i];if(r)o+=t,t===a&&"\\"!==e[i-1]&&(r=!1);else if('"'!==t&&"'"!==t)if("{"===t){const e=o.trim();o="";const t=e.lastIndexOf(";");let r;if(-1!==t){const o=e.slice(0,t+1).trim();if(o){const e=n[n.length-1];e.declarations+=(e.declarations?" ":"")+o}r=e.slice(t+1).trim()}else r=e;const a={selector:r,declarations:"",children:[]};n[n.length-1].children.push(a),n.push(a)}else if("}"===t){const e=o.trim();if(e){const t=n[n.length-1];t.declarations+=(t.declarations?" ":"")+e}o="",n.pop()}else o+=t;else r=!0,a=t,o+=t}const s=o.trim();return s&&(t.declarations+=(t.declarations?" ":"")+s),t}(e),o=[];return P(n,t,o),o}(n,`.${o}`)),o}function z(e,...t){let n="";for(let a=0;a<e.length;a++)n+=e[a],a<t.length&&(n+=t[a]);const o=n.split("\n"),r=[];for(const a of o){const e=a.trim();if(e.startsWith("@import ")){const t=e.match(/@import\s+url\(\s*['"]?([^'")\s]+)['"]?\s*\)/)||e.match(/@import\s+['"]([^'"]+)['"]/);if(t){const e=document.createElement("link");e.rel="stylesheet",e.href=t[1],document.head.appendChild(e)}}else r.push(a)}R(function(e){const t=[];let n=0,o="",r=!1,a="";for(let s=0;s<e.length;s++){const i=e[s];r?(o+=i,i===a&&"\\"!==e[s-1]&&(r=!1)):'"'!==i&&"'"!==i?"{"===i?(n++,o+=i):"}"===i?(n--,o+=i,0===n&&(o.trim()&&t.push(o.trim()),o="")):o+=i:(r=!0,a=i,o+=i)}return t}(r.join("\n")))}function O(...e){return e.filter(Boolean).join(" ")}function P(e,t,n){e.declarations&&n.push(`${t} { ${e.declarations} }`);for(const o of e.children){const e=o.selector;if(e)if(/^@(media|supports|container|layer)\b/.test(e)){const r=[];o.declarations&&r.push(`${t} { ${o.declarations} }`);for(const e of o.children)P(e,t,r);r.length&&n.push(`${e} { ${r.join(" ")} }`)}else if(e.includes("&")){const r=e.split(",").map(e=>e.trim().replace(/&/g,t)).join(", ");o.declarations&&n.push(`${r} { ${o.declarations} }`);for(const e of o.children)P(e,r,n)}else{const r=`${t} ${e}`;o.declarations&&n.push(`${r} { ${o.declarations} }`);for(const e of o.children)P(e,r,n)}else{o.declarations&&n.push(`${t} { ${o.declarations} }`);for(const e of o.children)P(e,t,n)}}}document.adoptedStyleSheets=[...document.adoptedStyleSheets,E];const D=o(window.location.hash.slice(1)||"/"),C=o({});function I(e,t,n,o){const r=document.createElement("a");return r.href="#"+e,r.textContent=t,a(()=>{r.className=("/"===e?"/"===D():D().startsWith(e))?n:o}),r.addEventListener("click",t=>{t.preventDefault(),function(e){window.location.hash=e}(e)}),r}window.addEventListener("hashchange",()=>{D(window.location.hash.slice(1)||"/")}),z`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&display=swap')
`,z`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
`,z`
  :root {
    --bg: #0c0c0e; --surface: #16161a; --surface-2: #1e1e24; --surface-3: #26262e;
    --border: #2a2a35; --text: #e8e6e3; --text-muted: #8b8a8e;
    --accent: #e8c547; --accent-dim: #e8c54730;
    --danger: #e85454; --danger-dim: #e8545420;
    --success: #54e8a0; --success-dim: #54e8a020;
    --info: #5478e8; --info-dim: #5478e820;
    --radius: 10px; --font: 'DM Sans', system-ui, sans-serif; --mono: 'JetBrains Mono', monospace;
  }
`,z`
  body { background: var(--bg); color: var(--text); font-family: var(--font); line-height: 1.6; min-height: 100vh; }
`,z`
  #app { max-width: 820px; margin: 0 auto; padding: 0 24px; }
`;const N=T`
  color: var(--text-muted);
  text-decoration: none;
  font-weight: 500;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
  transition: all 0.15s ease;
  letter-spacing: 0.02em;
  &:hover {
    color: var(--text);
    background: var(--surface-2);
  }
`,j=T`
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--accent-dim);
  letter-spacing: 0.02em;
`,M=T`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 36px;
`,L=T`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--accent);
  font-family: var(--mono);
`,H=T`
  display: flex;
  gap: 4px;
`,G=T`
  animation: ${(function(e,...t){let n="";for(let r=0;r<e.length;r++)n+=e[r],r<t.length&&(n+=t[r]);const o=_();return R([`@keyframes ${o} { ${n} }`]),o})`from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); }`} 0.25s ease-out;
`,B=T`
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
`,U=T`
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 32px;
`,Z=T`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 12px;
`,q=T`
  font-family: var(--font);
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.12s ease;
  letter-spacing: 0.01em;
`,J=T`
  background: var(--accent);
  color: var(--bg);
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`,Y=T`
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  &:hover {
    color: var(--text);
    border-color: var(--text-muted);
  }
`,X=T`
  background: var(--danger-dim);
  color: var(--danger);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--danger);
  }
`,K=T`
  background: var(--info-dim);
  color: var(--info);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--info);
  }
`,V=T`
  background: var(--success-dim);
  color: var(--success);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--success);
  }
`,W=T`
  font-family: var(--font);
  font-size: 0.9rem;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 14px;
  color: var(--text);
  outline: none;
  width: 100%;
  transition: border-color 0.15s ease;
  &:focus {
    border-color: var(--accent);
  }
  &::placeholder {
    color: var(--text-muted);
    opacity: 0.6;
  }
`,Q=T`
  font-family: var(--font);
  font-size: 0.85rem;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 12px;
  color: var(--text);
  outline: none;
  cursor: pointer;
  &:focus {
    border-color: var(--accent);
  }
`,ee=T`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,te=T`
  font-family: var(--mono);
  font-size: 0.8rem;
`,ne=T`
  font-family: var(--mono);
  font-size: 0.82rem;
  background: var(--surface-2);
  padding: 16px;
  border-radius: 8px;
  border: 1px solid var(--border);
  white-space: pre-wrap;
  line-height: 1.7;
  color: var(--text-muted);
  strong {
    color: var(--accent);
    font-weight: 500;
  }
`,oe=T`
  font-family: var(--mono);
  font-size: 0.78rem;
  background: var(--surface-2);
  padding: 16px;
  border-radius: 0 0 8px 8px;
  border: 1px solid var(--border);
  border-top: none;
  white-space: pre;
  overflow-x: auto;
  line-height: 1.7;
  color: var(--text-muted);
  max-height: 400px;
  overflow-y: auto;
`,re=T`
  font-family: var(--font);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-muted);
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 10px 16px;
  cursor: pointer;
  user-select: none;
  transition: all 0.15s ease;
  margin-top: 16px;
  &:hover {
    color: var(--text);
    border-color: var(--text-muted);
  }
  &::marker {
    color: var(--accent);
  }
`,ae=T`
  margin-bottom: 36px;
  & h2 {
    font-size: 1.15rem;
    font-weight: 700;
    margin-bottom: 8px;
    font-family: var(--mono);
    color: var(--accent);
  }
  & h3 {
    font-size: 0.95rem;
    font-weight: 600;
    margin: 16px 0 6px;
    font-family: var(--mono);
  }
  & p {
    color: var(--text-muted);
    font-size: 0.9rem;
    margin-bottom: 10px;
    line-height: 1.6;
  }
  & code {
    font-family: var(--mono);
    background: var(--surface-2);
    padding: 1px 5px;
    border-radius: 3px;
    font-size: 0.85em;
  }
  & hr {
    border: none;
    border-top: 1px solid var(--border);
    margin: 28px 0;
  }
`;var se="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function ie(e){return e&&e.v&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var le,ce={exports:{}},de=(le||(le=1,function(e){var t=function(e){var t=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,o={},r={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function e(t){return t instanceof a?new a(t.type,e(t.content),t.alias):Array.isArray(t)?t.map(e):t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.$||Object.defineProperty(e,"$",{value:++n}),e.$},clone:function e(t,n){var o,a;switch(n=n||{},r.util.type(t)){case"Object":if(a=r.util.objId(t),n[a])return n[a];for(var s in n[a]=o={},t)t.hasOwnProperty(s)&&(o[s]=e(t[s],n));return o;case"Array":return a=r.util.objId(t),n[a]?n[a]:(n[a]=o=[],t.forEach(function(t,r){o[r]=e(t,n)}),o);default:return t}},getLanguage:function(e){for(;e;){var n=t.exec(e.className);if(n)return n[1].toLowerCase();e=e.parentElement}return"none"},setLanguage:function(e,n){e.className=e.className.replace(RegExp(t,"gi"),""),e.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(o){var e=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(o.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}},isActive:function(e,t,n){for(var o="no-"+t;e;){var r=e.classList;if(r.contains(t))return!0;if(r.contains(o))return!1;e=e.parentElement}return!!n}},languages:{plain:o,plaintext:o,text:o,txt:o,extend:function(e,t){var n=r.util.clone(r.languages[e]);for(var o in t)n[o]=t[o];return n},insertBefore:function(e,t,n,o){var a=(o=o||r.languages)[e],s={};for(var i in a)if(a.hasOwnProperty(i)){if(i==t)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(i)||(s[i]=a[i])}var c=o[e];return o[e]=s,r.languages.DFS(r.languages,function(t,n){n===c&&t!=e&&(this[t]=s)}),s},DFS:function e(t,n,o,a){a=a||{};var s=r.util.objId;for(var i in t)if(t.hasOwnProperty(i)){n.call(t,i,t[i],o||i);var l=t[i],c=r.util.type(l);"Object"!==c||a[s(l)]?"Array"!==c||a[s(l)]||(a[s(l)]=!0,e(l,n,i,a)):(a[s(l)]=!0,e(l,n,null,a))}}},plugins:{},highlightAll:function(e,t){r.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var o={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};r.hooks.run("before-highlightall",o),o.elements=Array.prototype.slice.apply(o.container.querySelectorAll(o.selector)),r.hooks.run("before-all-elements-highlight",o);for(var a,s=0;a=o.elements[s++];)r.highlightElement(a,!0===t,o.callback)},highlightElement:function(t,n,o){var a=r.util.getLanguage(t),s=r.languages[a];r.util.setLanguage(t,a);var i=t.parentElement;i&&"pre"===i.nodeName.toLowerCase()&&r.util.setLanguage(i,a);var l={element:t,language:a,grammar:s,code:t.textContent};function c(e){l.highlightedCode=e,r.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,r.hooks.run("after-highlight",l),r.hooks.run("complete",l),o&&o.call(l.element)}if(r.hooks.run("before-sanity-check",l),(i=l.element.parentElement)&&"pre"===i.nodeName.toLowerCase()&&!i.hasAttribute("tabindex")&&i.setAttribute("tabindex","0"),!l.code)return r.hooks.run("complete",l),void(o&&o.call(l.element));if(r.hooks.run("before-highlight",l),l.grammar)if(n&&e.Worker){var d=new Worker(r.filename);d.onmessage=function(e){c(e.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(r.highlight(l.code,l.grammar,l.language));else c(r.util.encode(l.code))},highlight:function(e,t,n){var o={code:e,grammar:t,language:n};if(r.hooks.run("before-tokenize",o),!o.grammar)throw new Error('The language "'+o.language+'" has no grammar.');return o.tokens=r.tokenize(o.code,o.grammar),r.hooks.run("after-tokenize",o),a.stringify(r.util.encode(o.tokens),o.language)},tokenize:function(e,t){var n=t.rest;if(n){for(var o in n)t[o]=n[o];delete t.rest}var r=new l;return c(r,r.head,e),i(e,r,t,r.head,0),function(e){for(var t=[],n=e.head.next;n!==e.tail;)t.push(n.value),n=n.next;return t}(r)},hooks:{all:{},add:function(e,t){var n=r.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=r.hooks.all[e];if(n&&n.length)for(var o,a=0;o=n[a++];)o(t)}},Token:a};function a(e,t,n,o){this.type=e,this.content=t,this.alias=n,this.length=0|(o||"").length}function s(e,t,n,o){e.lastIndex=t;var r=e.exec(n);if(r&&o&&r[1]){var a=r[1].length;r.index+=a,r[0]=r[0].slice(a)}return r}function i(e,t,n,o,l,p){for(var u in n)if(n.hasOwnProperty(u)&&n[u]){var m=n[u];m=Array.isArray(m)?m:[m];for(var f=0;f<m.length;++f){if(p&&p.cause==u+","+f)return;var g=m[f],h=g.inside,v=!!g.lookbehind,b=!!g.greedy,x=g.alias;if(b&&!g.pattern.global){var y=g.pattern.toString().match(/[imsuy]*$/)[0];g.pattern=RegExp(g.pattern.source,y+"g")}for(var $=g.pattern||g,k=o.next,w=l;k!==t.tail&&!(p&&w>=p.reach);w+=k.value.length,k=k.next){var S=k.value;if(t.length>e.length)return;if(!(S instanceof a)){var F,A=1;if(b){if(!(F=s($,w,e,v))||F.index>=e.length)break;var E=F.index,_=F.index+F[0].length,R=w;for(R+=k.value.length;E>=R;)R+=(k=k.next).value.length;if(w=R-=k.value.length,k.value instanceof a)continue;for(var T=k;T!==t.tail&&(R<_||"string"==typeof T.value);T=T.next)A++,R+=T.value.length;A--,S=e.slice(w,R),F.index-=w}else if(!(F=s($,0,S,v)))continue;var z=F[0],O=S.slice(0,E=F.index),P=S.slice(E+z.length),D=w+S.length;p&&D>p.reach&&(p.reach=D);var C=k.prev;if(O&&(C=c(t,C,O),w+=O.length),d(t,C,A),k=c(t,C,new a(u,h?r.tokenize(z,h):z,x,z)),P&&c(t,k,P),A>1){var I={cause:u+","+f,reach:D};i(e,t,n,k.prev,w,I),p&&I.reach>p.reach&&(p.reach=I.reach)}}}}}}function l(){var e={value:null,prev:null,next:null},t={value:null,prev:e,next:null};e.next=t,this.head=e,this.tail=t,this.length=0}function c(e,t,n){var o=t.next,r={value:n,prev:t,next:o};return t.next=r,o.prev=r,e.length++,r}function d(e,t,n){for(var o=t.next,r=0;r<n&&o!==e.tail;r++)o=o.next;t.next=o,o.prev=t,e.length-=r}if(e.Prism=r,a.stringify=function e(t,n){if("string"==typeof t)return t;if(Array.isArray(t)){var o="";return t.forEach(function(t){o+=e(t,n)}),o}var a={type:t.type,content:e(t.content,n),tag:"span",classes:["token",t.type],attributes:{},language:n},s=t.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(a.classes,s):a.classes.push(s)),r.hooks.run("wrap",a);var i="";for(var l in a.attributes)i+=" "+l+'="'+(a.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+a.tag+' class="'+a.classes.join(" ")+'"'+i+">"+a.content+"</"+a.tag+">"},!e.document)return e.addEventListener?(r.disableWorkerMessageHandler||e.addEventListener("message",function(t){var n=JSON.parse(t.data),o=n.language,a=n.immediateClose;e.postMessage(r.highlight(n.code,r.languages[o],o)),a&&e.close()},!1),r):r;var p=r.util.currentScript();function u(){r.manual||r.highlightAll()}if(p&&(r.filename=p.src,p.hasAttribute("data-manual")&&(r.manual=!0)),!r.manual){var m=document.readyState;"loading"===m||"interactive"===m&&p&&p.defer?document.addEventListener("DOMContentLoaded",u):window.requestAnimationFrame?window.requestAnimationFrame(u):window.setTimeout(u,16)}return r}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=t),void 0!==se&&(se.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(e,n){var o={};o["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[n]},o.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:o}};r["language-"+n]={pattern:/[\s\S]+/,inside:t.languages[n]};var a={};a[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:r},t.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(e,n){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:t.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,function(){if(void 0!==t&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var e={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",o="loading",r="loaded",a="pre[data-src]:not(["+n+'="'+r+'"]):not(['+n+'="'+o+'"])';t.hooks.add("before-highlightall",function(e){e.selector+=", "+a}),t.hooks.add("before-sanity-check",function(s){var i=s.element;if(i.matches(a)){s.code="",i.setAttribute(n,o);var l=i.appendChild(document.createElement("CODE"));l.textContent="Loading…";var c=i.getAttribute("data-src"),d=s.language;if("none"===d){var p=(/\.(\w+)$/.exec(c)||[,"none"])[1];d=e[p]||p}t.util.setLanguage(l,d),t.util.setLanguage(i,d);var u=t.plugins.autoloader;u&&u.loadLanguages(d),function(e){var o=new XMLHttpRequest;o.open("GET",e,!0),o.onreadystatechange=function(){var e;4==o.readyState&&(o.status<400&&o.responseText?function(e){i.setAttribute(n,r);var o=function(e){var t=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(e||"");if(t){var n=Number(t[1]),o=t[3];return t[2]?o?[n,Number(o)]:[n,void 0]:[n,n]}}(i.getAttribute("data-range"));if(o){var a=e.split(/\r\n?|\n/g),s=o[0],c=null==o[1]?a.length:o[1];s<0&&(s+=a.length),s=Math.max(0,Math.min(s-1,a.length)),c<0&&(c+=a.length),c=Math.max(0,Math.min(c,a.length)),e=a.slice(s,c).join("\n"),i.hasAttribute("data-start")||i.setAttribute("data-start",String(s+1))}l.textContent=e,t.highlightElement(l)}(o.responseText):(e=o.status>=400?"✖ Error "+o.status+" while fetching file: "+o.statusText:"✖ Error: File does not exist or is empty",i.setAttribute(n,"failed"),l.textContent=e))},o.send(null)}(c)}}),t.plugins.fileHighlight={highlight:function(e){for(var n,o=(e||document).querySelectorAll(a),r=0;n=o[r++];)t.highlightElement(n)}};var s=!1;t.fileHighlight=function(){s||(s=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}(ce)),ce.exports);const pe=ie(de);var ue;function me(e,t="javascript"){const n=e.trim(),o=pe.highlight(n,pe.languages[t]||pe.languages.javascript,t),r=document.createElement("pre");return r.className=oe,r.innerHTML=o,r}Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,ue||(ue=1,function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript}(Prism)),function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(Prism),Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};o["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var r={};r[e]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return e}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(e){var t="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},o={bash:n,environment:{pattern:RegExp("\\$"+t),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+t),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+t),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:o},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:o},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:o.entity}}],environment:{pattern:RegExp("\\$?"+t),alias:"constant"},variable:o.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=e.languages.bash;for(var r=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],a=o.variable[1].inside,s=0;s<r.length;s++)a[r[s]]=e.languages.bash[r[s]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash}(Prism),z`
  .token.comment, .token.prolog, .token.doctype, .token.cdata {
    color: #6a6a7a;
  }
  .token.punctuation {
    color: #8b8a8e;
  }
  .token.property, .token.tag, .token.boolean, .token.number, .token.constant, .token.symbol, .token.deleted {
    color: #e85454;
  }
  .token.selector, .token.attr-name, .token.string, .token.char, .token.builtin, .token.inserted {
    color: #54e8a0;
  }
  .token.operator, .token.entity, .token.url {
    color: #e8c547;
  }
  .token.atrule, .token.attr-value, .token.keyword {
    color: #5478e8;
  }
  .token.function, .token.class-name {
    color: #e8c547;
  }
  .token.regex, .token.important, .token.variable {
    color: #e8c547;
  }
  .token.template-string .token.interpolation {
    color: #e8c547;
  }
  .token.template-string .token.string {
    color: #54e8a0;
  }
`;const fe=T`
  appearance: none;
  width: 20px;
  height: 20px;
  border: 2px solid var(--border);
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.15s ease;
  flex-shrink: 0;
  position: relative;
  &:checked {
    background: var(--accent);
    border-color: var(--accent);
  }
  &:checked::after {
    content: "✓";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: var(--bg);
    font-size: 12px;
    font-weight: 700;
  }
  &:hover {
    border-color: var(--accent);
  }
`,ge=T`
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 14px 18px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  margin-bottom: 8px;
  transition: all 0.15s ease;
  &:hover {
    border-color: var(--text-muted);
  }
`,he=T`
  flex: 1;
  font-size: 0.95rem;
  transition: all 0.15s;
`,ve=T`
  flex: 1;
  font-size: 0.95rem;
  text-decoration: line-through;
  opacity: 0.45;
`,be=T`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  background: var(--surface);
  border-radius: var(--radius);
  padding: 4px;
  border: 1px solid var(--border);
`,xe=T`
  font-family: var(--font);
  font-size: 0.8rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  padding: 7px 16px;
  cursor: pointer;
  background: transparent;
  color: var(--text-muted);
  transition: all 0.12s;
  flex: 1;
  &:hover {
    color: var(--text);
  }
`,ye=T`
  font-family: var(--font);
  font-size: 0.8rem;
  font-weight: 600;
  border: none;
  border-radius: 7px;
  padding: 7px 16px;
  cursor: pointer;
  background: var(--surface-3);
  color: var(--text);
  flex: 1;
`,$e=T`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 28px;
  border: 1px solid var(--border);
`,ke=T`
  background: var(--surface);
  text-align: center;
  padding: 20px;
  span {
    display: block;
  }
`,we=T`
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--mono);
  letter-spacing: -0.04em;
`,Se=T`
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,Fe={high:"var(--danger)",medium:"var(--accent)",low:"var(--success)"};let Ae=4;const Ee=o([{id:1,text:"Build signal-based reactivity",done:!0,priority:"high"},{id:2,text:"Implement tagged template DOM engine",done:!0,priority:"high"},{id:3,text:"Add keyed list reconciliation",done:!1,priority:"medium"}]),_e=o("all"),Re=r(()=>{const e=_e(),t=Ee();return"active"===e?t.filter(e=>!e.done):"done"===e?t.filter(e=>e.done):t}),Te=r(()=>{const e=Ee();return{total:e.length,done:e.filter(e=>e.done).length,active:e.filter(e=>!e.done).length}}),ze=T`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 8px;
  margin-bottom: 6px;
  transition:
    transform 0.15s ease,
    opacity 0.15s ease;
  &:hover {
    border-color: var(--accent);
  }
  .idx {
    font-family: var(--mono);
    font-size: 0.75rem;
    color: var(--text-muted);
    min-width: 24px;
  }
  .name {
    flex: 1;
    font-weight: 500;
  }
  .score {
    font-family: var(--mono);
    font-size: 0.9rem;
  }
  input {
    width: 60px;
  }
`,Oe=T`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`,Pe=T`
  font-family: var(--mono);
  font-size: 0.72rem;
  background: var(--surface-2);
  border: 1px solid var(--border);
  border-radius: 8px;
  padding: 12px;
  max-height: 200px;
  overflow-y: auto;
  color: var(--text-muted);
  line-height: 1.8;
`,De=o([]);function Ce(e){De(t=>[`${performance.now().toFixed(1)}ms — ${e}`,...t.slice(0,19)])}let Ie=1;const Ne=["Alice","Bob","Carol","Dan","Eve","Frank","Grace","Hank","Iris","Jack","Kara","Leo","Mia","Nico","Olga","Pete"];function je(){return{id:Ie++,name:Ne[Math.floor(Math.random()*Ne.length)],score:Math.floor(100*Math.random())}}const Me=o(Array.from({length:8},je));function Le(e){const t=[...e];for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}function He(e,t){return v`<div class=${ze}>
    <span class="idx">${()=>t()}</span>
    <span class="name">${()=>e().name}</span>
    <span
      class="score"
      style=${()=>"color: "+(e().score>70?"var(--success)":e().score>40?"var(--accent)":"var(--danger)")}
      >${()=>e().score}</span
    >
    <input
      class=${W}
      style="width:80px;padding:6px 8px;font-size:0.8rem;"
      placeholder="type here…"
    />
    <button
      class=${O(q,X)}
      style="padding:4px 8px;font-size:0.7rem;"
      onclick=${()=>Me(t=>t.filter(t=>t.id!==e().id))}
    >
      ✕
    </button>
  </div>`}const Ge=T`
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 10px;
`,Be=T`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,Ue=T`
  flex: 1;
  strong {
    display: block;
    font-family: var(--mono);
    font-size: 0.9rem;
    margin-bottom: 2px;
  }
  span {
    font-size: 0.82rem;
    color: var(--text-muted);
  }
`,Ze=T`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--surface-2);
  padding: 3px 10px;
  border-radius: 20px;
`,qe=[{name:"signal.js",icon:"⚡",color:"var(--accent)",lines:"~90",desc:"signal, computed, effect, batch, untrack"},{name:"reactive.js",icon:"🔮",color:"#a78bfa",lines:"~130",desc:"Proxy-based deep reactivity, identity cache, array methods"},{name:"html.js",icon:"🧩",color:"#60a5fa",lines:"~210",desc:"Tagged templates → live DOM, keyed each() reconciliation"},{name:"component.js",icon:"📦",color:"var(--success)",lines:"~95",desc:"mount, onMount, onCleanup, provide/inject"},{name:"router.js",icon:"🧭",color:"#f472b6",lines:"~105",desc:"History-based SPA routing, reactive params"},{name:"css.js",icon:"🎨",color:"#fb923c",lines:"~130",desc:"Scoped CSS-in-JS with deep nesting, @media, combinators"}],Je=function(e){const t=Object.entries(e).sort((e,t)=>"*"===e[0]?1:"*"===t[0]?-1:t[0].split("/").length-e[0].split("/").length);return()=>{const e=document.createElement("div");return a(()=>{const n=D();let o=null;for(const[e,r]of t){const{regex:t,keys:a}=(()=>{if("*"===e)return{regex:/.*/,keys:[]};const t=[],n=e.replace(/:([^/]+)/g,(e,n)=>(t.push(n),"([^/]+)"));return{regex:new RegExp(`^${n}$`),keys:t}})(),s=n.match(t);if(s){const e={};a.forEach((t,n)=>{e[t]=decodeURIComponent(s[n+1])}),o={handler:r,params:e};break}}if(C(o?o.params:{}),e.innerHTML="",o){const t=o.handler();t instanceof Node&&e.append(t)}}),e}}({"/":function(){return v`<div class=${G}>
    <h1 class=${B}>Tasks</h1>
    <p class=${U}>
      A fully reactive todo app — zero frameworks, zero build tools required<a href="#/docs">*</a>.
    </p>
    <div class=${$e}>
      <div class=${ke}>
        <span class=${we} style="color:var(--text)"
          >${()=>Te().total}</span
        ><span class=${Se}>Total</span>
      </div>
      <div class=${ke}>
        <span class=${we} style="color:var(--accent)"
          >${()=>Te().active}</span
        ><span class=${Se}>Active</span>
      </div>
      <div class=${ke}>
        <span class=${we} style="color:var(--success)"
          >${()=>Te().done}</span
        ><span class=${Se}>Done</span>
      </div>
    </div>
    ${function(){const e=o(""),t=o("medium"),n=()=>{const n=e().trim();n&&(Ee(e=>[...e,{id:Ae++,text:n,done:!1,priority:t()}]),e(""))};return v`<div style="display:flex;gap:8px;margin-bottom:24px;">
    <input
      class=${W}
      placeholder="What needs doing?"
      value=${()=>e()}
      oninput=${t=>e(t.target.value)}
      onkeydown=${e=>{"Enter"===e.key&&n()}}
    />
    <select
      class=${Q}
      onchange=${e=>t(e.target.value)}
    >
      <option value="low">Low</option>
      <option value="medium" selected>Med</option>
      <option value="high">High</option>
    </select>
    <button class=${O(q,J)} onclick=${n}>Add</button>
  </div>`}()} ${v`<div class=${be}>
    ${["all","active","done"].map(e=>v`<button
          class=${()=>_e()===e?ye:xe}
          onclick=${()=>_e(e)}
        >
          ${e[0].toUpperCase()+e.slice(1)}
          ${()=>{const t=Te();return`(${"all"===e?t.total:"active"===e?t.active:t.done})`}}
        </button>`)}
  </div>`}
    <div>
      ${F(Re,e=>e.id,e=>function(e){const t=e();return v`<div class=${ge}>
    <input
      type="checkbox"
      class=${fe}
      checked=${t.done}
      onclick=${()=>Ee(e=>e.map(e=>e.id===t.id?{...e,done:!e.done}:e))}
    />
    <span class=${t.done?ve:he}
      >${t.text}</span
    >
    <span
      class=${ee}
      style=${`background: ${Fe[t.priority]}20; color: ${Fe[t.priority]}`}
      >${t.priority}</span
    >
    <button
      class=${O(q,X)}
      onclick=${()=>Ee(e=>e.filter(e=>e.id!==t.id))}
      style="padding: 4px 10px; font-size: 0.75rem;"
    >
      ✕
    </button>
  </div>`}(e))}
      ${()=>0===Re().length?v`<div
              style="text-align:center;padding:48px 20px;color:var(--text-muted);font-style:italic;"
            >
              No tasks match this filter.
            </div>`:null}
    </div>
    <details>
      <summary class=${re}>View source — signals, computed, each()</summary>
      ${me('// Reactive state\nconst todos = signal([...]);\nconst filter = signal("all");\nconst filteredTodos = computed(() => {\n  const f = filter();\n  const l = todos();\n  return f === "active" ? l.filter(t => !t.done)\n       : f === "done"   ? l.filter(t => t.done)\n       : l;\n});\nconst stats = computed(() => {\n  const l = todos();\n  return {\n    total: l.length,\n    done: l.filter(t => t.done).length,\n    active: l.filter(t => !t.done).length,\n  };\n});\n\n// Keyed list rendering — DOM nodes reused by id\nhtml`<div>\n  ${each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))}\n</div>`;\n\n// Adding a todo — just push to the signal\nfunction add() {\n  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);\n}\n\n// TodoItem reads from itemSig — updates when that item changes\nfunction TodoItem(itemSig) {\n  const todo = itemSig();\n  const toggle = () => todos(l => l.map(t =>\n    t.id === todo.id ? { ...t, done: !t.done } : t\n  ));\n  return html`<div>\n    <input type="checkbox" checked=${todo.done} onclick=${toggle} />\n    <span>${todo.text}</span>\n  </div>`;\n}')}
    </details>
  </div>`},"/stress":function(){return v`<div class=${G}>
    <h1 class=${B}>List Stress Test</h1>
    <p class=${U}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type
      in the inputs to verify DOM preservation.
    </p>

    <div class=${Oe}>
      <button
        class=${O(q,J)}
        onclick=${()=>{Me(Le),Ce("Shuffled")}}
      >
        Shuffle
      </button>
      <button
        class=${O(q,K)}
        onclick=${()=>{Me(e=>[...e].reverse()),Ce("Reversed")}}
      >
        Reverse
      </button>
      <button
        class=${O(q,V)}
        onclick=${()=>{Me(e=>[...e,je()]),Ce("Added 1")}}
      >
        + Add 1
      </button>
      <button
        class=${O(q,V)}
        onclick=${()=>{const e=Array.from({length:5},je);Me(t=>[...t,...e]),Ce("Added 5")}}
      >
        + Add 5
      </button>
      <button
        class=${O(q,X)}
        onclick=${()=>{Me(e=>{if(!e.length)return e;const t=Math.floor(Math.random()*e.length);return e.filter((e,n)=>n!==t)}),Ce("Removed random")}}
      >
        - Remove random
      </button>
      <button
        class=${O(q,Y)}
        onclick=${()=>{Me(e=>e.map(e=>({...e,score:Math.floor(100*Math.random())}))),Ce("Randomized scores")}}
      >
        Randomize scores
      </button>
      <button
        class=${O(q,Y)}
        onclick=${()=>{Me(e=>[...e].sort((e,t)=>e.name.localeCompare(t.name))),Ce("Sorted by name")}}
      >
        Sort A→Z
      </button>
      <button
        class=${O(q,Y)}
        onclick=${()=>{Me(e=>[...e].sort((e,t)=>t.score-e.score)),Ce("Sorted by score")}}
      >
        Sort by score
      </button>
      <button
        class=${O(q,X)}
        onclick=${()=>{Me([]),Ce("Cleared all")}}
      >
        Clear
      </button>
      <button
        class=${O(q,J)}
        onclick=${()=>{Me(Array.from({length:50},je)),Ce("Reset to 50 items")}}
      >
        Reset 50
      </button>
    </div>

    <div
      style="display:flex;gap:8px;margin-bottom:16px;align-items:center;"
    >
      <span
        class=${ee}
        style="background:var(--accent-dim);color:var(--accent);"
        >${()=>Me().length} items</span
      >
      <span style="font-size:0.8rem;color:var(--text-muted);"
        >Type in any input, then shuffle — your text stays because each()
        reuses DOM nodes by key.</span
      >
    </div>

    <div style="margin-bottom: 24px;">
      ${F(Me,e=>e.id,He)}
      ${()=>0===Me().length?v`<div
              style="text-align:center;padding:32px;color:var(--text-muted);font-style:italic;"
            >
              List is empty. Add some items!
            </div>`:null}
    </div>

    <h3 style="font-size:0.9rem;font-weight:600;margin-bottom:8px;">
      Operation Log
    </h3>
    <div class=${Pe}>
      ${()=>0===De().length?"No operations yet…":De().join("\n")}
    </div>
    <details>
      <summary class=${re}>View source — each() keyed reconciliation</summary>
      ${me('// each() reuses DOM nodes by key across mutations\nconst items = signal(Array.from({ length: 8 }, randItem));\n\n// Render — each item gets a Signal<T> and ReadonlySignal<number>\nhtml`<div>\n  ${each(items, item => item.id, (itemSig, indexSig) =>\n    html`<div>\n      <span>${() => indexSig()}</span>\n      <span>${() => itemSig().name}</span>\n      <span>${() => itemSig().score}</span>\n      <input placeholder="type here…" />\n    </div>`\n  )}\n</div>`;\n\n// Mutations — DOM nodes with matching keys are reused, not recreated.\n// Text typed into inputs persists across shuffle/reverse/sort.\nitems(shuffle);                              // reorder\nitems(l => [...l].reverse());                // reverse\nitems(l => [...l, randItem()]);              // append\nitems(l => l.filter(x => x.id !== target));  // remove\nitems(l => [...l].sort((a, b) =>             // sort\n  a.name.localeCompare(b.name)\n));')}
    </details>
  </div>`},"/playground":function(){const e=f({user:{name:"Ada Lovelace",settings:{theme:"dark",notifications:{email:!0,push:!1,frequency:"daily"}},scores:[95,87,92]}}),t=r(()=>JSON.stringify(g(e),null,2)),n=T`
    padding: 20px;
    border: 2px solid var(--border);
    border-radius: var(--radius);
    margin-bottom: 16px;

    &:hover {
      border-color: var(--accent);
    }

    & > .title {
      font-weight: 700;
      font-size: 1rem;
      margin-bottom: 12px;
      color: var(--accent);
    }

    & .nested-box {
      background: var(--surface-2);
      padding: 12px;
      border-radius: 6px;
      margin-bottom: 8px;
    }

    & .nested-box > .inner {
      font-size: 0.85rem;
      color: var(--text-muted);
    }

    &::before {
      content: "✦";
      margin-right: 8px;
      color: var(--accent);
    }

    & .tag {
      display: inline-block;
      padding: 2px 8px;
      border-radius: 4px;
      font-size: 0.75rem;
      font-weight: 600;
    }

    & .tag.green {
      background: var(--success-dim);
      color: var(--success);
    }

    & .tag.yellow {
      background: var(--accent-dim);
      color: var(--accent);
    }

    &:hover,
    &:focus-within {
      box-shadow: 0 0 0 2px var(--accent-dim);
    }

    @media (max-width: 600px) {
      padding: 12px;

      & > .title {
        font-size: 0.9rem;
      }
    }
  `,a=T`
    padding: 16px;

    & .level1 {
      border-left: 3px solid var(--danger);
      padding-left: 12px;
      margin-bottom: 8px;

      & .level2 {
        border-left: 3px solid var(--accent);
        padding-left: 12px;
        margin-bottom: 8px;

        & .level3 {
          border-left: 3px solid var(--success);
          padding-left: 12px;
          font-family: var(--mono);
          font-size: 0.8rem;
        }
      }
    }
  `,s=T`
    & .item + .item {
      margin-top: 8px;
      border-top: 1px dashed var(--border);
      padding-top: 8px;
    }

    & .item:first-child {
      color: var(--accent);
      font-weight: 600;
    }

    & .item:last-child {
      color: var(--success);
    }

    & .item:nth-child(even) {
      opacity: 0.7;
    }
  `,i=T`
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 6px;
    border-radius: 3px;
    background: var(--surface-3);
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      width: 20px;
      height: 20px;
      border-radius: 50%;
      background: var(--accent);
      cursor: pointer;
    }
  `,l=T`
    padding: 16px 20px;
    border-radius: var(--radius);
    border: 2px solid var(--border);
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
  `,c={success:T`
    border-color: var(--success);
    background: var(--success-dim);
    color: var(--success);
    & .icon {
      background: var(--success);
      color: var(--bg);
    }
  `,warning:T`
    border-color: var(--accent);
    background: var(--accent-dim);
    color: var(--accent);
    & .icon {
      background: var(--accent);
      color: var(--bg);
    }
  `,error:T`
    border-color: var(--danger);
    background: var(--danger-dim);
    color: var(--danger);
    & .icon {
      background: var(--danger);
      color: var(--bg);
    }
  `,info:T`
    border-color: var(--info);
    background: var(--info-dim);
    color: var(--info);
    & .icon {
      background: var(--info);
      color: var(--bg);
    }
  `},d={success:"✓",warning:"!",error:"✕",info:"i"},p={success:"All systems operational. Deployment completed.",warning:"High memory usage detected. Consider scaling.",error:"Connection lost. Retrying in 5 seconds…",info:"New version available. Update when ready."},u=T`
    border-radius: 24px !important;
    & .icon { border-radius: 12px; }
  `,m=T`
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.3);
  `,h=T`
    border-width: 3px;
    border-style: dashed;
  `,b=T`
    transform: scale(1.02);
  `,x=T`
    box-shadow:
      0 0 20px currentColor,
      0 0 40px currentColor;
    &:hover {
      box-shadow:
        0 0 30px currentColor,
        0 0 60px currentColor;
    }
  `,y=o("success"),$=o(!1),k=o(!1),w=o(!1),S=o(!1),F=o(!1),A=o(100),E=o(10),_=o(100),R=T`
    font-family: var(--font);
    font-size: 0.8rem;
    font-weight: 500;
    border: 1px solid var(--border);
    border-radius: 20px;
    padding: 6px 14px;
    cursor: pointer;
    background: var(--surface-2);
    color: var(--text-muted);
    transition: all 0.15s ease;
    user-select: none;
    &:hover {
      border-color: var(--text-muted);
      color: var(--text);
    }
  `,z=T`
    font-family: var(--font);
    font-size: 0.8rem;
    font-weight: 600;
    border: 1px solid var(--accent);
    border-radius: 20px;
    padding: 6px 14px;
    cursor: pointer;
    background: var(--accent-dim);
    color: var(--accent);
    transition: all 0.15s ease;
    user-select: none;
    &:hover {
      filter: brightness(1.15);
    }
  `,P=T`
    width: 100%;
    background: var(--surface-2);
    border: 2px solid var(--border);
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: var(--mono);
    font-weight: 600;
    transition: all 0.3s ease;
    overflow: hidden;
    color: var(--text);
  `;return v`<div class=${G}>
    <h1 class=${B}>Playground</h1>
    <p class=${U}>
      Deeply nested reactive objects, complex CSS selectors, and signal
      chains.
    </p>

    <div
      style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;"
    >
      <div class=${Z}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:16px;">
          Deep Reactive Object
        </h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.name
            <input
              class=${W}
              style="margin-top:4px;"
              value=${()=>e.user.name}
              oninput=${t=>{e.user.name=t.target.value}}
            />
          </label>
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.settings.theme
            <select
              class=${Q}
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
              style="font-size:0.85rem;color:var(--text-muted);display:flex;gap:6px;align-items:center;"
            >
              <input
                type="checkbox"
                checked=${()=>e.user.settings.notifications.email}
                onclick=${()=>{e.user.settings.notifications.email=!e.user.settings.notifications.email}}
              />
              email
            </label>
            <label
              style="font-size:0.85rem;color:var(--text-muted);display:flex;gap:6px;align-items:center;"
            >
              <input
                type="checkbox"
                checked=${()=>e.user.settings.notifications.push}
                onclick=${()=>{e.user.settings.notifications.push=!e.user.settings.notifications.push}}
              />
              push
            </label>
          </div>
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.settings.notifications.frequency
            <select
              class=${Q}
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
              class=${O(q,V)}
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${()=>{e.user.scores.push(Math.floor(100*Math.random()))}}
            >
              Push score
            </button>
            <button
              class=${O(q,X)}
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${()=>{e.user.scores.length&&e.user.scores.pop()}}
            >
              Pop score
            </button>
          </div>
        </div>
      </div>

      <div class=${Z}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:16px;">
          Live State (auto-updates)
        </h3>
        <div
          class=${ne}
          style="font-size:0.75rem;max-height:320px;overflow-y:auto;"
        >
          ${()=>t()}
        </div>
      </div>
    </div>

    <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
      Conditional Styling
    </h2>

    <div
      style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;"
    >
      <div class=${Z}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:14px;">
          Status Variant + Property Toggles
        </h3>
        <p
          style="font-size:0.82rem;color:var(--text-muted);margin-bottom:14px;"
        >
          Entire class swapped via
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:1px 5px;border-radius:3px;"
            >class=${"${"}() => statusMap[status()]}</code
          >, extras layered with
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:1px 5px;border-radius:3px;"
            >cx()</code
          >.
        </p>

        <div style="display:flex;gap:6px;margin-bottom:14px;">
          ${["success","warning","error","info"].map(e=>v`
              <button
                class=${()=>y()===e?O(q,J):O(q,Y)}
                style="font-size:0.75rem;padding:6px 12px;flex:1;"
                onclick=${()=>y(e)}
              >
                ${e}
              </button>
            `)}
        </div>

        <div
          style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;"
        >
          <button
            class=${()=>$()?z:R}
            onclick=${()=>$(e=>!e)}
          >
            rounded
          </button>
          <button
            class=${()=>k()?z:R}
            onclick=${()=>k(e=>!e)}
          >
            shadow
          </button>
          <button
            class=${()=>w()?z:R}
            onclick=${()=>w(e=>!e)}
          >
            dashed
          </button>
          <button
            class=${()=>S()?z:R}
            onclick=${()=>S(e=>!e)}
          >
            scale
          </button>
          <button
            class=${()=>F()?z:R}
            onclick=${()=>F(e=>!e)}
          >
            glow
          </button>
        </div>

        <div
          class=${()=>O(l,c[y()],$()&&u,k()&&m,w()&&h,S()&&b,F()&&x)}
        >
          <div class="icon">${()=>d[y()]}</div>
          <div class="text">
            <div class="label">${()=>y()}</div>
            <div class="message">${()=>p[y()]}</div>
          </div>
        </div>

        <div
          class=${ne}
          style="margin-top:12px;font-size:0.7rem;line-height:1.6;"
        >
          cx(statusBase,
          <strong
            >${()=>"status"+y()[0].toUpperCase()+y().slice(1)}</strong
          >${()=>$()?", propRounded":""}${()=>k()?", propShadow":""}${()=>w()?", propBorder":""}${()=>S()?", propScale":""}${()=>F()?", propGlow":""})
        </div>
      </div>

      <div class=${Z}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:14px;">
          Reactive Inline Styles
        </h3>
        <p
          style="font-size:0.82rem;color:var(--text-muted);margin-bottom:14px;"
        >
          Computed
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:1px 5px;border-radius:3px;"
            >style=${"${"}() => string}</code
          >
          bound to signals. Each slider updates exactly one CSS property —
          no re-renders.
        </p>

        <div
          style="display:flex;flex-direction:column;gap:12px;margin-bottom:16px;"
        >
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Size</span>
            <input
              type="range"
              class=${i}
              min="50"
              max="200"
              value=${()=>A()}
              oninput=${e=>A(+e.target.value)}
            />
            <span class=${te} style="min-width:38px;"
              >${()=>A()}%</span
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Radius</span>
            <input
              type="range"
              class=${i}
              min="0"
              max="50"
              value=${()=>E()}
              oninput=${e=>E(+e.target.value)}
            />
            <span class=${te} style="min-width:38px;"
              >${()=>E()}px</span
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Opacity</span>
            <input
              type="range"
              class=${i}
              min="10"
              max="100"
              value=${()=>_()}
              oninput=${e=>_(+e.target.value)}
            />
            <span class=${te} style="min-width:38px;"
              >${()=>_()}%</span
            >
          </label>
        </div>

        <div style="display:flex;justify-content:center;padding:20px 0;">
          <div
            class=${P}
            style=${()=>`height: ${A()}px; border-radius: ${E()}px; opacity: ${_()/100}; font-size: ${Math.max(10,.14*A())}px;`}
          >
            ${()=>`${A()}% · ${E()}px · ${_()}%`}
          </div>
        </div>

        <div class=${ne} style="font-size:0.7rem;line-height:1.6;">
          style=${"${"}() => ${"`"} height:
          <strong>${()=>A()}px</strong>; border-radius:
          <strong>${()=>E()}px</strong>; opacity:
          <strong>${()=>(_()/100).toFixed(2)}</strong>; ${"`"}}
        </div>
      </div>
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
        class=${W}
        style="margin-top:12px;width:200px;"
        placeholder="Focus me for :focus-within"
      />
    </div>

    <div class=${O(Z,a)}>
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
    </div>

    <div class=${O(Z,s)}>
      <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:12px;">
        Combinator Selectors (+, :first-child, :last-child, :nth-child)
      </h3>
      <div class="item">First item (accent, bold — :first-child)</div>
      <div class="item">Second item (dimmed — :nth-child(even))</div>
      <div class="item">Third item</div>
      <div class="item">Fourth item (dimmed — :nth-child(even))</div>
      <div class="item">Fifth item (green — :last-child)</div>
    </div>
    <details>
      <summary class=${re}>View source — reactive(), css\`\`, cx()</summary>
      ${me('// Deep reactive proxy — mutate normally, changes propagate\nconst state = reactive({\n  user: {\n    name: "Ada Lovelace",\n    settings: {\n      theme: "dark",\n      notifications: { email: true, push: false, frequency: "daily" },\n    },\n    scores: [95, 87, 92],\n  },\n});\n\n// Computed snapshot for display — auto-updates\nconst jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));\n\n// Direct mutation triggers effects\nstate.user.name = "Grace Hopper";\nstate.user.scores.push(99);\n\n// Scoped CSS with nesting, pseudo-classes, @media\nconst card = css`\n  padding: 20px;\n  border: 2px solid var(--border);\n  &:hover { border-color: var(--accent); }\n  & > .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 12px; }\n`;\n\n// cx() merges class names, skipping falsy values\nconst classes = cx(\n  statusBase,\n  statusMap[status()],\n  rounded() && propRounded,\n  shadow() && propShadow,\n);')}
    </details>
  </div>`},"/docs":function(){return v`<div class=${G}>
    <h1 class=${B}>Docs</h1>
    <p class=${U}>
      API reference for each module. ~760 lines total, zero dependencies.
    </p>

    <!-- Getting Started -->
    <div class=${ae}>
      <h2>Getting Started</h2>
      <p>
        vanillakit is a collection of standalone ES modules. No build step required —
        import from source and go. Works with any bundler (Vite, esbuild, etc.) or direct
        <code>&lt;script type="module"&gt;</code>.
      </p>

      <h3>Install</h3>
      ${me("npm install vanillakit","bash")}

      <h3>Quick setup</h3>
      <p>Create an <code>index.html</code> and a module entry point:</p>
      ${me('<!doctype html>\n<html>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}

      ${me('// app.js\nimport { signal, html, css, globalCss } from "vanillakit";\n\nglobalCss`\n  body { margin: 0; font-family: system-ui; background: #111; color: #eee; }\n`;\n\nconst count = signal(0);\n\nconst btn = css`\n  padding: 8px 20px;\n  border: none;\n  border-radius: 6px;\n  background: gold;\n  color: #111;\n  font-weight: 600;\n  cursor: pointer;\n`;\n\nconst app = html`\n  <div style="padding: 40px; text-align: center;">\n    <h1>Count: ${count}</h1>\n    <button class=${btn} onclick=${() => count(n => n + 1)}>\n      Increment\n    </button>\n  </div>\n`;\n\ndocument.getElementById("app").append(app);')}

      <h3>Project structure</h3>
      <p>There's no required structure. The library is five files:</p>
      ${me("src/\n  signal.js    — signal, computed, effect, batch, untrack\n  reactive.js  — reactive, toRaw, isReactive, snapshot\n  html.js      — html, each\n  css.js       — css, keyframes, globalCss, cx\n  router.js    — createRouter, navigate, navLink, currentPath, routeParams\n  index.js     — re-exports everything","bash")}

      <p>Import what you need. Each module (except <code>reactive.js</code> and <code>html.js</code>) only depends on <code>signal.js</code>.</p>
      <hr />
    </div>

    <!-- TypeScript & Tooling -->
    <div class=${ae}>
      <h2>TypeScript &amp; Tooling</h2>

      <h3>TypeScript</h3>
      <p>
        The source is plain JS with JSDoc type annotations, so it works out of the box
        with TypeScript — no <code>@types</code> package needed. Import the types directly:
      </p>
      ${me('import { signal } from "vanillakit";\nimport type { Signal, ReadonlySignal } from "vanillakit/signal.js";\n\nconst count: Signal<number> = signal(0);',"typescript")}

      <p>
        If you're writing <code>.ts</code> files, make sure your <code>tsconfig.json</code>
        has <code>"moduleResolution": "bundler"</code> and
        <code>"allowImportingTsExtensions": true</code> (already the default with Vite).
      </p>
      ${me('{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "allowJs": true,\n    "checkJs": true,\n    "noEmit": true,\n    "allowImportingTsExtensions": true,\n    "strict": true,\n    "lib": ["ESNext", "DOM", "DOM.Iterable"]\n  }\n}',"javascript")}

      <h3>HMR with Vite</h3>
      <p>
        vanillakit works with Vite's HMR out of the box. Since state lives in module-level
        signals, hot-updated modules keep their reactive graph intact — the DOM updates in
        place without a full reload.
      </p>
      <p>
        A minimal <code>vite.config.js</code>:
      </p>
      ${me('import { defineConfig } from "vite";\n\nexport default defineConfig({\n  root: "demo",     // folder with your index.html\n  base: "./",       // relative paths (important for GitHub Pages)\n});')}

      <p>
        Run <code>npx vite</code> (or <code>bun run dev</code>) and edits to your templates,
        styles, and signals will hot-swap instantly. CSS changes via <code>css\`\`</code>
        trigger full reloads since styles are injected via <code>CSSStyleSheet</code> at
        module evaluation time — this is fast enough to feel instant in practice.
      </p>

      <h3>Type checking</h3>
      <p>
        Run <code>tsc --noEmit</code> to type-check without emitting files. The <code>checkJs</code>
        flag ensures the JSDoc-typed source files are validated too.
      </p>
      ${me('# type-check everything\nnpx tsc --noEmit\n\n# or add a script to package.json\n# "check": "tsc --noEmit"',"bash")}

      <h3>Production builds</h3>
      <p>
        <code>vite build</code> produces a single minified JS bundle. The entire library
        plus a full demo app compiles to ~25 KB gzipped.
      </p>
      ${me("npx vite build\n# output in dist/ (or wherever outDir points)","bash")}
      <hr />
    </div>

    <!-- Examples -->
    <div class=${ae}>
      <h2>Examples</h2>

      <h3>Counter</h3>
      <p>The simplest possible app — a signal and a button.</p>
      ${me('import { signal, html } from "vanillakit";\n\nconst count = signal(0);\n\ndocument.body.append(html`\n  <button onclick=${() => count(n => n + 1)}>\n    Clicked ${count} times\n  </button>\n`);')}

      <h3>Two-way binding</h3>
      <p>Bind an input to a signal. The heading updates as you type.</p>
      ${me('import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\ndocument.body.append(html`\n  <div>\n    <h1>Hello, ${name}!</h1>\n    <input\n      value=${() => name()}\n      oninput=${(e) => name(e.target.value)}\n    />\n  </div>\n`);')}

      <h3>Derived state</h3>
      <p><code>computed</code> derives values. <code>batch</code> groups writes so effects fire once.</p>
      ${me('import { signal, computed, effect, batch } from "vanillakit";\n\nconst price    = signal(10);\nconst quantity = signal(3);\nconst total    = computed(() => price() * quantity());\n\neffect(() => console.log("Total: $" + total()));\n// logs: Total: $30\n\nbatch(() => {\n  price(20);\n  quantity(5);\n});\n// logs: Total: $100 (once)')}

      <h3>Reactive object</h3>
      <p>Deeply nested mutations tracked automatically via Proxy.</p>
      ${me('import { reactive, snapshot, effect } from "vanillakit";\n\nconst state = reactive({\n  todos: [\n    { text: "Learn signals", done: true },\n    { text: "Build an app",  done: false },\n  ],\n});\n\neffect(() => console.log(JSON.stringify(snapshot(state), null, 2)));\n\nstate.todos.push({ text: "Ship it", done: false });\nstate.todos[0].done = false;')}

      <h3>Keyed list</h3>
      <p><code>each()</code> reconciles DOM nodes by key. Nodes persist across reorders — input state, focus, etc. are preserved.</p>
      ${me('import { signal, each, html } from "vanillakit";\n\nconst items = signal([\n  { id: 1, label: "Alpha" },\n  { id: 2, label: "Bravo" },\n  { id: 3, label: "Charlie" },\n]);\n\ndocument.body.append(html`\n  <ul>\n    ${each(\n      items,\n      (item) => item.id,\n      (itemSig, indexSig) => html`\n        <li>#${indexSig} — ${() => itemSig().label}</li>\n      `,\n    )}\n  </ul>\n  <button onclick=${() => items(l => [...l].reverse())}>\n    Reverse\n  </button>\n`);')}

      <h3>Scoped styles + routing</h3>
      <p>Full mini-app with CSS-in-JS and hash routing.</p>
      ${me('import { html, css, globalCss, createRouter, navLink } from "vanillakit";\n\nglobalCss`body { margin: 0; font-family: system-ui; }`;\n\nconst page = css`padding: 24px;`;\nconst active = css`color: gold; font-weight: 700;`;\nconst base = css`color: gray; text-decoration: none;`;\n\nconst Router = createRouter({\n  "/":      () => html`<div class=${page}><h1>Home</h1></div>`,\n  "/about": () => html`<div class=${page}><h1>About</h1></div>`,\n  "*":      () => html`<div class=${page}><h1>404</h1></div>`,\n});\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);')}
      <hr />
    </div>

    <!-- signal.js -->
    <div class=${ae}>
      <h2>signal.js</h2>
      <p>Fine-grained reactivity primitives. Every other module builds on this.</p>

      <h3>signal(initial)</h3>
      <p>Creates a read/write signal. Call with no args to read (and track), call with a value to write.</p>
      ${me('\nimport { signal } from "vanillakit";\n\nconst count = signal(0);\ncount();           // read → 0\ncount(5);          // write → 5\ncount(n => n + 1); // update via function → 6\ncount.peek();      // read without tracking\n')}

      <h3>computed(fn)</h3>
      <p>Derives a read-only signal from other signals. Re-evaluates only when dependencies change.</p>
      ${me('\nimport { signal, computed } from "vanillakit";\n\nconst a = signal(2);\nconst b = signal(3);\nconst sum = computed(() => a() + b());\n\nsum(); // 5\na(10);\nsum(); // 13\n')}

      <h3>effect(fn)</h3>
      <p>Runs a side effect whenever its dependencies change. Returns a dispose function.</p>
      ${me('\nimport { signal, effect } from "vanillakit";\n\nconst name = signal("world");\nconst dispose = effect(() => {\n  console.log("Hello, " + name() + "!");\n});\n// logs: Hello, world!\n\nname("vanillakit");\n// logs: Hello, vanillakit!\n\ndispose(); // stops tracking\n')}

      <h3>batch(fn)</h3>
      <p>Groups multiple signal writes — effects run once at the end, not after each write.</p>
      ${me('\nimport { signal, effect, batch } from "vanillakit";\n\nconst a = signal(1);\nconst b = signal(2);\neffect(() => console.log(a() + b()));\n// logs: 3\n\nbatch(() => {\n  a(10);\n  b(20);\n});\n// logs: 30 (once, not twice)\n')}

      <h3>untrack(fn)</h3>
      <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
      ${me('\nimport { signal, effect, untrack } from "vanillakit";\n\nconst a = signal(1);\nconst b = signal(2);\n\neffect(() => {\n  // tracks a, ignores b\n  console.log(a() + untrack(() => b()));\n});\n\nb(99); // effect does NOT re-run\na(10); // effect re-runs, reads b\'s current value\n')}
      <hr />
    </div>

    <!-- reactive.js -->
    <div class=${ae}>
      <h2>reactive.js</h2>
      <p>Deep reactive proxies backed by signals. Mutate normally — changes propagate automatically.</p>

      <h3>reactive(target)</h3>
      <p>Wraps a plain object (or array) in a deep reactive proxy. Nested objects are wrapped lazily.</p>
      ${me('\nimport { reactive, effect } from "vanillakit";\n\nconst state = reactive({\n  user: { name: "Ada", scores: [95, 87] },\n});\n\neffect(() => console.log(state.user.name));\n// logs: Ada\n\nstate.user.name = "Grace";\n// logs: Grace\n\nstate.user.scores.push(92);\n// tracked — any effect reading scores will re-run\n')}

      <h3>snapshot(obj)</h3>
      <p>Returns a deep plain-object copy of a reactive proxy. Useful for serialization or debugging.</p>
      ${me('\nimport { reactive, snapshot } from "vanillakit";\n\nconst state = reactive({ x: 1, nested: { y: 2 } });\nconst plain = snapshot(state);\n// { x: 1, nested: { y: 2 } } — no proxies\n')}

      <h3>toRaw(obj)</h3>
      <p>Returns the underlying raw object from a reactive proxy.</p>

      <h3>isReactive(obj)</h3>
      <p>Returns <code>true</code> if the object is a reactive proxy.</p>
      <hr />
    </div>

    <!-- html.js -->
    <div class=${ae}>
      <h2>html.js</h2>
      <p>Tagged template that produces live DOM nodes with reactive bindings. No virtual DOM — updates are surgical.</p>

      <h3>html\`...\`</h3>
      <p>Interpolations can be static values, signals, or functions. Functions are wrapped in effects and update their DOM node automatically.</p>
      ${me('\nimport { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\nconst el = html`\n  <div>\n    <h1>Hello, ${name}!</h1>\n    <input\n      value=${() => name()}\n      oninput=${(e) => name(e.target.value)}\n    />\n  </div>\n`;\n\ndocument.body.append(el);\n')}

      <p>Supported attribute bindings:</p>
      <ul style="color:var(--text-muted);font-size:0.88rem;margin-bottom:10px;padding-left:20px;line-height:1.8;">
        <li><code>class</code> / <code>className</code> — sets className</li>
        <li><code>style</code> — string or object</li>
        <li><code>checked</code>, <code>value</code> — synced to DOM properties</li>
        <li><code>on*</code> — event listeners (<code>onclick</code>, <code>oninput</code>, etc.)</li>
        <li><code>ref</code> — called with the element: <code>ref=\${(el) => ...}</code></li>
      </ul>

      <h3>each(listFn, keyFn, renderFn)</h3>
      <p>Keyed list reconciliation. Reuses DOM nodes across re-renders by matching keys. Each item is passed as a signal so the render function can react to changes without re-creating the node.</p>
      ${me('\nimport { signal, each, html } from "vanillakit";\n\nconst items = signal([\n  { id: 1, text: "first" },\n  { id: 2, text: "second" },\n]);\n\nconst list = html`\n  <ul>\n    ${each(\n      items,\n      (item) => item.id,\n      (itemSig) => html`<li>${() => itemSig().text}</li>`,\n    )}\n  </ul>\n`;\n')}
      <hr />
    </div>

    <!-- css.js -->
    <div class=${ae}>
      <h2>css.js</h2>
      <p>Scoped CSS-in-JS using <code>CSSStyleSheet</code>. No style tags injected into the DOM. Supports nesting, <code>@media</code>, <code>@keyframes</code>, and combinators.</p>

      <h3>css\`...\`</h3>
      <p>Returns a unique class name. Styles are scoped — the template body is compiled with <code>&amp;</code> replaced by the generated selector.</p>
      ${me('\nimport { css } from "vanillakit";\n\nconst card = css`\n  padding: 16px;\n  background: #1a1a1a;\n  border-radius: 8px;\n\n  &:hover {\n    border-color: gold;\n  }\n\n  & .title {\n    font-weight: 700;\n  }\n\n  @media (max-width: 600px) {\n    padding: 8px;\n  }\n`;\n// card = "v-0" (unique class name)\n')}

      <h3>keyframes\`...\`</h3>
      <p>Creates a scoped <code>@keyframes</code> rule, returns the generated animation name.</p>
      ${me('\nimport { css, keyframes } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`\n  animation: ${spin} 1s linear infinite;\n`;\n')}

      <h3>globalCss\`...\`</h3>
      <p>Injects unscoped CSS rules. <code>@import url(...)</code> lines are converted to <code>&lt;link&gt;</code> tags.</p>
      ${me("\nimport { globalCss } from \"vanillakit\";\n\nglobalCss`\n  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap')\n`;\n\nglobalCss`\n  *, *::before, *::after { box-sizing: border-box; }\n  body { margin: 0; font-family: 'Inter', sans-serif; }\n`;\n")}

      <h3>cx(...classes)</h3>
      <p>Joins class names, filtering out falsy values. Handy for conditional styling.</p>
      ${me('\nimport { css, cx } from "vanillakit";\n\nconst base = css`padding: 8px;`;\nconst active = css`color: gold;`;\n\nel.className = cx(base, isActive && active, null, undefined);\n// falsy values are skipped\n')}
      <hr />
    </div>

    <!-- router.js -->
    <div class=${ae}>
      <h2>router.js</h2>
      <p>Hash-based client-side router. Routes are plain functions that return DOM nodes.</p>

      <h3>createRouter(routeMap)</h3>
      <p>Takes an object mapping path patterns to handler functions. Returns a function that renders the current route into a container div. Supports <code>:param</code> segments and a <code>*</code> catch-all.</p>
      ${me('\nimport { createRouter, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/":         () => html`<h1>Home</h1>`,\n  "/user/:id": () => html`<h1>User page</h1>`,\n  "*":         () => html`<h1>404</h1>`,\n});\n\ndocument.body.append(Router());\n')}

      <h3>navigate(path)</h3>
      <p>Navigates to a hash path.</p>
      ${me('\nimport { navigate } from "vanillakit";\n\nnavigate("/user/42"); // sets window.location.hash\n')}

      <h3>currentPath</h3>
      <p>A signal holding the current hash path (without the <code>#</code>). Updates on <code>hashchange</code>.</p>

      <h3>routeParams</h3>
      <p>A signal holding the extracted <code>:param</code> values from the current route as a <code>Record&lt;string, string&gt;</code>.</p>

      <h3>navLink(path, text, activeClass, baseClass)</h3>
      <p>Creates an <code>&lt;a&gt;</code> element that swaps between <code>activeClass</code> and <code>baseClass</code> reactively based on the current path.</p>
      ${me('\nimport { navLink, css } from "vanillakit";\n\nconst active = css`color: gold; font-weight: 700;`;\nconst base   = css`color: gray;`;\n\ndocument.body.append(navLink("/about", "About", active, base));\n')}
    </div>
  </div>`},"/about":function(){return v`<div class=${G}>
    <h1 class=${B}>Architecture</h1>
    <p class=${U}>
      Six standalone modules. ~760 lines total. Zero dependencies.
    </p>
    <div class=${Z}>
      <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:8px;">
        Design Principles
      </h3>
      <div
        style="color:var(--text-muted);font-size:0.88rem;line-height:1.8;"
      >
        <p style="margin-bottom:8px;">
          → Functions are components. No classes, no magic strings.
        </p>
        <p style="margin-bottom:8px;">
          →
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:2px 6px;border-radius:4px;"
            >() =></code
          >
          means reactive. Everything else is static. That's the only rule.
        </p>
        <p style="margin-bottom:8px;">
          → Fine-grained updates. Each reactive expression updates exactly
          one DOM node.
        </p>
        <p>
          → Modules are independent. Only
          <code
            style="font-family:var(--mono);background:var(--surface-2);padding:2px 6px;border-radius:4px;"
            >signal.js</code
          >
          is shared.
        </p>
      </div>
    </div>
    <div>
      ${qe.map(e=>v`<div class=${Ge}>
            <div
              class=${Be}
              style=${`background: ${e.color}20; color: ${e.color};`}
            >
              ${e.icon}
            </div>
            <div class=${Ue}>
              <strong>${e.name}</strong><span>${e.desc}</span>
            </div>
            <span class=${Ze}>${e.lines}</span>
          </div>`)}
    </div>
  </div>`},"*":()=>v`<div class=${G}>
      <h1 class=${B}>404</h1>
      <p class=${U}>Not found.</p>
    </div>`});window.location.hash||(window.location.hash="/"),document.getElementById("app").append(v`
    <header class=${M}>
      <span class=${L}>vanillakit_</span>
      <nav class=${H}>
        ${I("/","Tasks",j,N)}
        ${I("/stress","List Stress",j,N)}
        ${I("/playground","Playground",j,N)}
        ${I("/docs","Docs",j,N)}
        ${I("/about","About",j,N)}
      </nav>
    </header>
    <main>${Je()}</main>
    <footer
      style="text-align:center;padding:48px 0 32px;color:var(--text-muted);font-size:0.78rem;letter-spacing:0.03em;"
    >
      Built with <span style="color:var(--accent);">vanillakit</span> —
      zero deps, ~760 lines of JS
    </footer>
  `);
