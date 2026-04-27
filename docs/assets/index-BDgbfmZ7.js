!function(){const t=document.createElement("link").relList;if(!(t&&t.supports&&t.supports("modulepreload"))){for(const t of document.querySelectorAll('link[rel="modulepreload"]'))e(t);new MutationObserver(t=>{for(const n of t)if("childList"===n.type)for(const t of n.addedNodes)"LINK"===t.tagName&&"modulepreload"===t.rel&&e(t)}).observe(document,{childList:!0,subtree:!0})}function e(t){if(t.ep)return;t.ep=!0;const e=function(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),e.credentials="use-credentials"===t.crossOrigin?"include":"anonymous"===t.crossOrigin?"omit":"same-origin",e}(t);fetch(t.href,e)}}();let t=null,e=0;const n=new Set;function i(i){let o=i;const r=new Set;function s(...i){if(0===i.length)return t&&(r.add(t),t.t.add(r)),o;const s="function"==typeof i[0]?i[0](o):i[0];if(Object.is(s,o))return o;if(o=s,e>0)for(const t of r)n.add(t);else for(const t of[...r])t.o();return o}return s.peek=()=>o,s.toString=()=>String(o),s[Symbol.toPrimitive]=()=>o,s}function o(t){const e=i(void 0);r(()=>e(t()));const n=()=>e();return n.peek=e.peek,n}function r(e){const n={l:e,t:new Set,m:!1,o(){if(n.m)return;for(const t of n.t)t.delete(n);n.t.clear();const i=t;t=n;try{e()}finally{t=i}}};return n.o(),()=>{n.m=!0;for(const t of n.t)t.delete(n);n.t.clear()}}function s(t){e++;try{return t()}finally{if(e--,0===e){const t=[...n];n.clear();for(const e of t)e.o()}}}function a(e){const n=t;t=null;try{return e()}finally{t=n}}const l=Symbol("reactive"),c=Symbol("raw"),d=new WeakMap,u=new Set([l,c,Symbol.toPrimitive,Symbol.toStringTag,Symbol.iterator,Symbol.asyncIterator,Symbol.isConcatSpreadable,"__proto__","constructor","prototype","toJSON"]),p=new Set(["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"]),h=new Set(["indexOf","lastIndexOf","includes"]);function f(t){return null==t||"object"!=typeof t||t instanceof Date||t instanceof RegExp||t instanceof Error||t instanceof Node||t instanceof Map||t instanceof Set?t:m(t)}function m(t){if(null==t||"object"!=typeof t)return t;if(t[l])return t;if(d.has(t))return d.get(t);const e=new Map;function n(n){return e.has(n)||e.set(n,i(f(t[n]))),e.get(n)}const o=new Proxy(t,{get(t,i,o){if(i===l)return!0;if(i===c)return t;if("symbol"==typeof i&&u.has(i))return Reflect.get(t,i,o);if(u.has(i))return Reflect.get(t,i,o);if(Array.isArray(t)&&"string"==typeof i){if(p.has(i))return(...n)=>{let o;return s(()=>{const r=n.map(t=>null!=t&&t[c]?t[c]:t);o=Array.prototype[i].apply(t,r),function(t,e){for(let n=0;n<t.length;n++){const i=String(n);e.has(i)&&e.get(i)(f(t[n]))}e.has("length")&&e.get("length")(t.length)}(t,e)}),o};if(h.has(i))return(...e)=>(n("length")(),Array.prototype[i].apply(t,[null!=e[0]&&e[0][c]?e[0][c]:e[0],...e.slice(1)]))}return n(i)()},set(t,n,i){const o=null!=i&&i[c]?i[c]:i;return t[n]=o,e.has(n)&&e.get(n)(f(o)),Array.isArray(t)&&e.has("length")&&e.get("length")(t.length),!0},deleteProperty:(t,n)=>(delete t[n],e.has(n)&&(e.get(n)(void 0),e.delete(n)),!0),has:(t,e)=>e===l||e===c||("string"==typeof e&&n(e)(),e in t),ownKeys:t=>(Array.isArray(t)&&n("length")(),Reflect.ownKeys(t)),getPrototypeOf:t=>Reflect.getPrototypeOf(t),getOwnPropertyDescriptor:(t,e)=>Reflect.getOwnPropertyDescriptor(t,e)});return d.set(t,o),o}function g(t){return null!=t&&!0===t[l]}function v(t){if(null==t||"object"!=typeof t)return t;if(g(t)){const e=t[c];if(Array.isArray(e)){const e=t.length,n=[];for(let i=0;i<e;i++)n.push(v(t[i]));return n}const n={};for(const i of Object.keys(e))n[i]=v(t[i]);return n}if(Array.isArray(t))return t.map(v);const e={};for(const n of Object.keys(t))e[n]=v(t[n]);return e}let b=0;function y(t,...e){const n=b++;let i="";const o=[];for(let u=0;u<t.length;u++)if(i+=t[u],u<e.length)if(k(i)){const t=i.match(/(\S+)\s*=\s*["']?$/);if(t){const e=t[1],r=`data-v-${n}-${u}`;i=i.slice(0,-t[0].length),i+=`${r}="" `,o.push({index:u,attrName:e,elemMarker:r})}else i+=`v${n}_${u}`}else i+=`\x3c!--v${n}-${u}--\x3e`;const r=document.createElement("template");r.innerHTML=i;const s=r.content,a=[];for(const{index:u,attrName:p,elemMarker:h}of o){const t=s.querySelector(`[${h}]`);t&&(t.removeAttribute(h),x(t,p,e[u],a))}const l=document.createTreeWalker(s,NodeFilter.SHOW_COMMENT),c=[];for(;l.nextNode();){const t=l.currentNode;t.data.startsWith(`v${n}-`)&&c.push({node:t,index:parseInt(t.data.slice(`v${n}-`.length))})}for(const{node:u,index:p}of c)$(u,e[p],a);s.v=()=>{for(const t of a)t();a.length=0};const d=[...s.childNodes];if(d.length>0){const t=d[0];(t.k||(t.k=[])).push(s.v)}return 1===s.childNodes.length?s.childNodes[0]:s}function k(t){for(let e=t.length-1;e>=0;e--){if(">"===t[e])return!1;if("<"===t[e])return!0}return!1}function x(t,e,n,i){e.startsWith("on")?t.addEventListener(e.slice(2).toLowerCase(),"function"==typeof n?n:()=>{}):"ref"!==e||"function"!=typeof n?"function"!=typeof n?w(t,e,n):i.push(r(()=>w(t,e,n()))):n(t)}function w(t,e,n){"class"===e||"className"===e?t.className=n??"":"style"===e&&"object"==typeof n?Object.assign(t.style,n):"style"===e&&"string"==typeof n?t.setAttribute("style",n):"checked"===e?t.checked=!!n:"value"===e&&"value"in t?t.value=n??"":"disabled"===e||"readonly"===e||"hidden"===e?n?t.setAttribute(e,""):t.removeAttribute(e):!1===n||null==n?t.removeAttribute(e):t.setAttribute(e,!0===n?"":String(n))}function $(t,e,n){if(null!=e&&e.$)n.push(function(t,{listFn:e,keyFn:n,renderFn:o}){const s=document.createComment("/each");t.parentNode?.insertBefore(s,t.nextSibling);const l=new Map,c=r(()=>{const r=e(),s=Array.isArray(r)?r:[],c=t.parentNode;if(!c)return;const d=s.map(n),u=new Set(d);for(const[t,e]of l)if(!u.has(t)){for(const t of e.disposers)t();for(const t of e.nodes)E(t),t.remove();l.delete(t)}let p=t.nextSibling;for(let t=0;t<s.length;t++){const e=d[t];let n=l.get(e);if(n){if(n.itemSig(s[t]),n.indexSig(t),n.nodes.length>0&&n.nodes[0]!==p)for(const t of n.nodes)c.insertBefore(t,p);p=n.nodes.length>0?n.nodes[n.nodes.length-1].nextSibling:p}else{const r=i(s[t]),d=i(t),u=[];let h;const f=a(()=>(h=o(r,d),h.v??null)),m=h instanceof DocumentFragment?[...h.childNodes]:[h instanceof Node?h:document.createTextNode(String(h))];f&&u.push(f),n={nodes:m,disposers:u,itemSig:r,indexSig:d},l.set(e,n);const g=document.createDocumentFragment();for(const t of m)g.append(t);c.insertBefore(g,p),p=n.nodes[n.nodes.length-1]?.nextSibling??p}}});return()=>{c();for(const[,t]of l){for(const e of t.disposers)e();for(const e of t.nodes)E(e),e.remove()}l.clear(),s.parentNode&&s.remove()}}(t,e));else{if("function"==typeof e){let i=null;return void n.push(r(()=>{i=S(t,i,e())}))}S(t,null,e)}}function S(t,e,n){const i=t.parentNode;if(!i)return e;if(e){const t=Array.isArray(e)?e:[e];for(const e of t)e.parentNode&&(E(e),e.remove())}if(null==n||!1===n||!0===n)return null;if(Array.isArray(n)){const e=document.createDocumentFragment(),o=[];for(const t of n.flat(1/0)){const n=A(t);n&&(e.append(n),o.push(n))}return i.insertBefore(e,t),o}const o=A(n);return o&&i.insertBefore(o,t),o}function A(t){return null==t||!1===t||!0===t?null:t instanceof Node?t:document.createTextNode(String(t))}function E(t){const e=t;if(e.k){for(const t of e.k)t();e.k=null}if(t.childNodes)for(const n of t.childNodes)E(n)}function C(t,e,n){return{$:!0,listFn:t,keyFn:e,renderFn:n}}let _=0;const T=new CSSStyleSheet;function F(){return"v-"+(_++).toString(36)}function R(t){for(const n of t){const t=n.trim();if(t)try{T.insertRule(t,T.cssRules.length)}catch(e){}}}function I(t,...e){let n="";for(let o=0;o<t.length;o++)n+=t[o],o<e.length&&(n+=e[o]);const i=F();return R(function(t,e){const n=function(t){const e={declarations:"",children:[],selector:""},n=[e];let i="",o=!1,r="";for(let a=0;a<t.length;a++){const e=t[a];if(o)i+=e,e===r&&"\\"!==t[a-1]&&(o=!1);else if('"'!==e&&"'"!==e)if("{"===e){const t=i.trim();i="";const e=t.lastIndexOf(";");let o;if(-1!==e){const i=t.slice(0,e+1).trim();if(i){const t=n[n.length-1];t.declarations+=(t.declarations?" ":"")+i}o=t.slice(e+1).trim()}else o=t;const r={selector:o,declarations:"",children:[]};n[n.length-1].children.push(r),n.push(r)}else if("}"===e){const t=i.trim();if(t){const e=n[n.length-1];e.declarations+=(e.declarations?" ":"")+t}i="",n.pop()}else i+=e;else o=!0,r=e,i+=e}const s=i.trim();return s&&(e.declarations+=(e.declarations?" ":"")+s),e}(t),i=[];return D(n,e,i),i}(n,`.${i}`)),i}function O(t,...e){let n="";for(let o=0;o<t.length;o++)n+=t[o],o<e.length&&(n+=e[o]);const i=F();return R([`@keyframes ${i} { ${n} }`]),i}function j(t,...e){let n="";for(let r=0;r<t.length;r++)n+=t[r],r<e.length&&(n+=e[r]);const i=n.split("\n"),o=[];for(const r of i){const t=r.trim();if(t.startsWith("@import ")){const e=t.match(/@import\s+url\(\s*['"]?([^'")\s]+)['"]?\s*\)/)||t.match(/@import\s+['"]([^'"]+)['"]/);if(e){const t=document.createElement("link");t.rel="stylesheet",t.href=e[1],document.head.appendChild(t)}}else o.push(r)}R(function(t){const e=[];let n=0,i="",o=!1,r="";for(let s=0;s<t.length;s++){const a=t[s];o?(i+=a,a===r&&"\\"!==t[s-1]&&(o=!1)):'"'!==a&&"'"!==a?"{"===a?(n++,i+=a):"}"===a?(n--,i+=a,0===n&&(i.trim()&&e.push(i.trim()),i="")):i+=a:(o=!0,r=a,i+=a)}return e}(o.join("\n")))}function P(...t){return t.filter(Boolean).join(" ")}function D(t,e,n){t.declarations&&n.push(`${e} { ${t.declarations} }`);for(const i of t.children){const t=i.selector;if(t)if(/^@(media|supports|container|layer)\b/.test(t)){const o=[];i.declarations&&o.push(`${e} { ${i.declarations} }`);for(const t of i.children)D(t,e,o);o.length&&n.push(`${t} { ${o.join(" ")} }`)}else if(t.includes("&")){const o=t.split(",").map(t=>t.trim().replace(/&/g,e)).join(", ");i.declarations&&n.push(`${o} { ${i.declarations} }`);for(const t of i.children)D(t,o,n)}else{const o=`${e} ${t}`;i.declarations&&n.push(`${o} { ${i.declarations} }`);for(const t of i.children)D(t,o,n)}else{i.declarations&&n.push(`${e} { ${i.declarations} }`);for(const t of i.children)D(t,e,n)}}}document.adoptedStyleSheets=[...document.adoptedStyleSheets,T];let N="hash",M="";const L=i(window.location.hash.slice(1)||"/"),z=i({});function V(){L(window.location.hash.slice(1)||"/")}function B(){L(window.location.pathname.slice(M.length)||"/")}function H(t={}){const e=t.mode??"hash";M=(t.base??"").replace(/\/$/,"").replace(/^\/$/,""),e!==N&&("hash"===N?window.removeEventListener("hashchange",V):window.removeEventListener("popstate",B),N=e,"hash"===e?(L(window.location.hash.slice(1)||"/"),window.addEventListener("hashchange",V)):(L(window.location.pathname.slice(M.length)||"/"),window.addEventListener("popstate",B)))}function q(t){"history"===N?(window.history.pushState({},"",M+t),L(t)):window.location.hash=t}function U(t){const e=Object.entries(t).sort((t,e)=>"*"===t[0]?1:"*"===e[0]?-1:e[0].split("/").length-t[0].split("/").length);return()=>{const t=document.createElement("div");return r(()=>{const n=L();let i=null;for(const[t,o]of e){const{regex:e,keys:r}=(()=>{if("*"===t)return{regex:/.*/,keys:[]};const e=[],n=t.replace(/:([^/]+)/g,(t,n)=>(e.push(n),"([^/]+)"));return{regex:new RegExp(`^${n}$`),keys:e}})(),s=n.match(e);if(s){const t={};r.forEach((e,n)=>{t[e]=decodeURIComponent(s[n+1])}),i={handler:o,params:t};break}}if(z(i?i.params:{}),t.innerHTML="",i){const e=i.handler();e instanceof Node&&t.append(e)}}),t}}function G(t,e){const n=document.createElement("a");return n.href="history"===N?M+t:"#"+t,n.textContent=e,r(()=>{("/"===t?"/"===L():L().startsWith(t))?n.setAttribute("aria-current","page"):n.removeAttribute("aria-current")}),n.addEventListener("click",e=>{e.preventDefault(),q(t)}),n}window.addEventListener("hashchange",V);let W=!1;function J(){W||(W=!0)}const Y="vanillacss-theme";function K(){const t=localStorage.getItem(Y),e=window.matchMedia("(prefers-color-scheme: dark)"),n=()=>e.matches?"dark":"light",o=i(t||n());function s(t){document.documentElement.dataset.theme=t}return s(o()),r(()=>{s(o())}),e.addEventListener("change",()=>{localStorage.getItem(Y)||o(n())}),{theme:o,toggle(){const t="dark"===o()?"light":"dark";o(t),localStorage.setItem(Y,t)},set(t){"auto"===t?(localStorage.removeItem(Y),o(n())):(o(t),localStorage.setItem(Y,t))}}}const X=new Set(["svg","path","circle","rect","line","polyline","polygon","text","g","defs","use","image","clipPath","mask","pattern","linearGradient","radialGradient","stop","ellipse"]);function Z(t,e,n){"class"===e||"className"===e?t instanceof SVGElement?t.setAttribute("class",n??""):t.className=n??"":"style"===e&&"object"==typeof n?(t instanceof HTMLElement||t instanceof SVGElement)&&Object.assign(t.style,n):"style"===e&&"string"==typeof n?t.setAttribute("style",n):"checked"===e&&"checked"in t?t.checked=!!n:"value"===e&&"value"in t?t.value=n??"":"disabled"===e||"readonly"===e||"hidden"===e?n?t.setAttribute(e,""):t.removeAttribute(e):!1===n||null==n?t.removeAttribute(e):t.setAttribute(e,!0===n?"":String(n))}function Q(t,e,n,i){e.startsWith("on")?t.addEventListener(e.slice(2).toLowerCase(),"function"==typeof n?n:()=>{}):"ref"!==e||"function"!=typeof n?"function"!=typeof n?Z(t,e,n):i.push(r(()=>Z(t,e,n()))):n(t)}function tt(t){return null==t||!1===t||!0===t?null:t instanceof Node?t:document.createTextNode(String(t))}function et(t){const e=t;if(e.k){for(const t of e.k)t();e.k=null}if(t.childNodes)for(const n of Array.from(t.childNodes))et(n)}function nt(t,e,n){if(null!=e&&e.$){const o=document.createComment("each");return t.append(o),void n.push(function(t,{listFn:e,keyFn:n,renderFn:o}){const s=document.createComment("/each");t.parentNode?.insertBefore(s,t.nextSibling);const l=new Map,c=r(()=>{const r=e(),s=Array.isArray(r)?r:[],c=t.parentNode;if(!c)return;const d=s.map(n),u=new Set(d);for(const[t,e]of l)if(!u.has(t)){for(const t of e.disposers)t();for(const t of e.nodes)et(t),t.remove();l.delete(t)}let p=t.nextSibling;for(let t=0;t<s.length;t++){const e=d[t];let n=l.get(e);if(n){if(n.itemSig(s[t]),n.indexSig(t),n.nodes.length>0&&n.nodes[0]!==p)for(const t of n.nodes)c.insertBefore(t,p);p=n.nodes.length>0?n.nodes[n.nodes.length-1].nextSibling:p}else{const r=i(s[t]),d=i(t),u=[];let h;const f=a(()=>(h=o(r,d),h.v??null)),m=h instanceof DocumentFragment?[...h.childNodes]:[h instanceof Node?h:document.createTextNode(String(h))];f&&u.push(f),n={nodes:m,disposers:u,itemSig:r,indexSig:d},l.set(e,n);const g=document.createDocumentFragment();for(const t of m)g.append(t);c.insertBefore(g,p),p=n.nodes[n.nodes.length-1]?.nextSibling??p}}});return()=>{c();for(const[,t]of l){for(const e of t.disposers)e();for(const e of t.nodes)et(e),e.remove()}l.clear(),s.parentNode&&s.remove()}}(o,e))}if("function"==typeof e){const i=document.createComment("fn");t.append(i);let o=null;return void n.push(r(()=>{o=function(t,e,n){const i=t.parentNode;if(!i)return e;if(e){const t=Array.isArray(e)?e:[e];for(const e of t)e.parentNode&&(et(e),e.remove())}if(null==n||!1===n||!0===n)return null;if(Array.isArray(n)){const e=document.createDocumentFragment(),o=[];for(const t of n.flat(1/0)){const n=tt(t);n&&(e.append(n),o.push(n))}return i.insertBefore(e,t),o}const o=tt(n);return o&&i.insertBefore(o,t),o}(i,o,e())}))}if(Array.isArray(e)){for(const i of e.flat(1/0))nt(t,i,n);return}const o=tt(e);o&&t.append(o)}const it=new Proxy({},{get:(t,e)=>(t,...n)=>{const i=function(t){return X.has(t)?document.createElementNS("http://www.w3.org/2000/svg",t):document.createElement(t)}(e="variable"===e?"var":e),o=[];let r=n;if(null==(s=t)||"object"!=typeof s||Array.isArray(s)||s instanceof Node||s.$)void 0!==t&&(r=[t,...n]);else for(const[e,a]of Object.entries(t))Q(i,e,a,o);var s;for(const e of r)nt(i,e,o);return o.length>0&&(i.k=o,i.v=()=>{for(const t of o)t();i.k=null}),i}}),{a:ot,abbr:rt,address:st,area:at,article:lt,aside:ct,audio:dt,b:ut,base:pt,bdi:ht,bdo:ft,blockquote:mt,body:gt,br:vt,button:bt,canvas:yt,caption:kt,cite:xt,code:wt,col:$t,colgroup:St,data:At,datalist:Et,dd:Ct,del:_t,details:Tt,dfn:Ft,dialog:Rt,dir:It,div:Ot,dl:jt,dt:Pt,em:Dt,embed:Nt,fieldset:Mt,figcaption:Lt,figure:zt,footer:Vt,form:Bt,h1:Ht,h2:qt,h3:Ut,h4:Gt,h5:Wt,h6:Jt,head:Yt,header:Kt,hgroup:Xt,hr:Zt,i:Qt,iframe:te,img:ee,input:ne,ins:ie,kbd:oe,label:re,legend:se,li:ae,link:le,main:ce,map:de,mark:ue,menu:pe,meta:he,meter:fe,nav:me,noscript:ge,object:ve,ol:be,optgroup:ye,option:ke,output:xe,p:we,picture:$e,pre:Se,progress:Ae,q:Ee,rp:Ce,rt:_e,ruby:Te,s:Fe,samp:Re,script:Ie,section:Oe,select:je,small:Pe,source:De,span:Ne,strong:Me,style:Le,sub:ze,summary:Ve,sup:Be,table:He,tbody:qe,td:Ue,template:Ge,textarea:We,tfoot:Je,th:Ye,thead:Ke,time:Xe,title:Ze,tr:Qe,track:tn,u:en,ul:nn,variable:on,video:rn,wbr:sn,circle:an,clipPath:ln,defs:cn,ellipse:dn,g:un,image:pn,line:hn,linearGradient:fn,mask:mn,path:gn,pattern:vn,polygon:bn,polyline:yn,radialGradient:kn,rect:xn,stop:wn,svg:$n,text:Sn,use:An}=it,En=Object.freeze(Object.defineProperty({__proto__:null,a:ot,abbr:rt,address:st,area:at,article:lt,aside:ct,audio:dt,b:ut,base:pt,batch:s,bdi:ht,bdo:ft,blockquote:mt,body:gt,br:vt,button:bt,canvas:yt,caption:kt,circle:an,cite:xt,clipPath:ln,code:wt,col:$t,colgroup:St,computed:o,createRouter:U,css:I,currentPath:L,cx:P,data:At,datalist:Et,dd:Ct,defs:cn,del:_t,details:Tt,dfn:Ft,dialog:Rt,dir:It,div:Ot,dl:jt,dt:Pt,each:C,effect:r,ellipse:dn,em:Dt,embed:Nt,fieldset:Mt,figcaption:Lt,figure:zt,footer:Vt,form:Bt,g:un,globalCss:j,h1:Ht,h2:qt,h3:Ut,h4:Gt,h5:Wt,h6:Jt,head:Yt,header:Kt,hgroup:Xt,hr:Zt,html:y,i:Qt,iframe:te,image:pn,img:ee,initRouter:H,initVanillaCss:J,input:ne,ins:ie,isReactive:g,kbd:oe,keyframes:O,label:re,legend:se,li:ae,line:hn,linearGradient:fn,link:le,main:ce,map:de,mark:ue,mask:mn,menu:pe,meta:he,meter:fe,nav:me,navLink:G,navigate:q,noscript:ge,object:ve,ol:be,optgroup:ye,option:ke,output:xe,p:we,path:gn,pattern:vn,picture:$e,polygon:bn,polyline:yn,pre:Se,progress:Ae,q:Ee,radialGradient:kn,reactive:m,rect:xn,routeParams:z,rp:Ce,rt:_e,ruby:Te,s:Fe,samp:Re,script:Ie,section:Oe,select:je,signal:i,small:Pe,snapshot:v,source:De,span:Ne,stop:wn,strong:Me,style:Le,sub:ze,summary:Ve,sup:Be,svg:$n,table:He,tbody:qe,td:Ue,template:Ge,text:Sn,textarea:We,tfoot:Je,th:Ye,thead:Ke,themeToggle:K,time:Xe,title:Ze,toRaw:function(t){return null!=t&&t[c]?t[c]:t},tr:Qe,track:tn,u:en,ul:nn,untrack:a,use:An,variable:on,video:rn,vkml:it,wbr:sn},Symbol.toStringTag,{value:"Module"}));J();const Cn=I`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--vk-color-accent);
  font-family: var(--vk-font-mono);
`,_n=I`
  margin-bottom: 2rem;
`,Tn=I`
  border-top: none;
  border-radius: 0 0 var(--vk-radius-md) var(--vk-radius-md);
  max-height: 400px;
  overflow-y: auto;
`,Fn=I`
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
`,Rn=I`
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
`,In=window;var On=function(){return On=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},On.apply(this,arguments)},jn="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function Pn(t){return t&&t.S&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var Dn,Nn={exports:{}},Mn=(Dn||(Dn=1,function(t){var e=function(t){var e=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,n=0,i={},o={manual:t.Prism&&t.Prism.manual,disableWorkerMessageHandler:t.Prism&&t.Prism.disableWorkerMessageHandler,util:{encode:function t(e){return e instanceof r?new r(e.type,t(e.content),e.alias):Array.isArray(e)?e.map(t):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(t){return Object.prototype.toString.call(t).slice(8,-1)},objId:function(t){return t.A||Object.defineProperty(t,"A",{value:++n}),t.A},clone:function t(e,n){var i,r;switch(n=n||{},o.util.type(e)){case"Object":if(r=o.util.objId(e),n[r])return n[r];for(var s in n[r]=i={},e)e.hasOwnProperty(s)&&(i[s]=t(e[s],n));return i;case"Array":return r=o.util.objId(e),n[r]?n[r]:(n[r]=i=[],e.forEach(function(e,o){i[o]=t(e,n)}),i);default:return e}},getLanguage:function(t){for(;t;){var n=e.exec(t.className);if(n)return n[1].toLowerCase();t=t.parentElement}return"none"},setLanguage:function(t,n){t.className=t.className.replace(RegExp(e,"gi"),""),t.classList.add("language-"+n)},currentScript:function(){if("undefined"==typeof document)return null;if(document.currentScript&&"SCRIPT"===document.currentScript.tagName)return document.currentScript;try{throw new Error}catch(i){var t=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(i.stack)||[])[1];if(t){var e=document.getElementsByTagName("script");for(var n in e)if(e[n].src==t)return e[n]}return null}},isActive:function(t,e,n){for(var i="no-"+e;t;){var o=t.classList;if(o.contains(e))return!0;if(o.contains(i))return!1;t=t.parentElement}return!!n}},languages:{plain:i,plaintext:i,text:i,txt:i,extend:function(t,e){var n=o.util.clone(o.languages[t]);for(var i in e)n[i]=e[i];return n},insertBefore:function(t,e,n,i){var r=(i=i||o.languages)[t],s={};for(var a in r)if(r.hasOwnProperty(a)){if(a==e)for(var l in n)n.hasOwnProperty(l)&&(s[l]=n[l]);n.hasOwnProperty(a)||(s[a]=r[a])}var c=i[t];return i[t]=s,o.languages.DFS(o.languages,function(e,n){n===c&&e!=t&&(this[e]=s)}),s},DFS:function t(e,n,i,r){r=r||{};var s=o.util.objId;for(var a in e)if(e.hasOwnProperty(a)){n.call(e,a,e[a],i||a);var l=e[a],c=o.util.type(l);"Object"!==c||r[s(l)]?"Array"!==c||r[s(l)]||(r[s(l)]=!0,t(l,n,a,r)):(r[s(l)]=!0,t(l,n,null,r))}}},plugins:{},highlightAll:function(t,e){o.highlightAllUnder(document,t,e)},highlightAllUnder:function(t,e,n){var i={callback:n,container:t,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};o.hooks.run("before-highlightall",i),i.elements=Array.prototype.slice.apply(i.container.querySelectorAll(i.selector)),o.hooks.run("before-all-elements-highlight",i);for(var r,s=0;r=i.elements[s++];)o.highlightElement(r,!0===e,i.callback)},highlightElement:function(e,n,i){var r=o.util.getLanguage(e),s=o.languages[r];o.util.setLanguage(e,r);var a=e.parentElement;a&&"pre"===a.nodeName.toLowerCase()&&o.util.setLanguage(a,r);var l={element:e,language:r,grammar:s,code:e.textContent};function c(t){l.highlightedCode=t,o.hooks.run("before-insert",l),l.element.innerHTML=l.highlightedCode,o.hooks.run("after-highlight",l),o.hooks.run("complete",l),i&&i.call(l.element)}if(o.hooks.run("before-sanity-check",l),(a=l.element.parentElement)&&"pre"===a.nodeName.toLowerCase()&&!a.hasAttribute("tabindex")&&a.setAttribute("tabindex","0"),!l.code)return o.hooks.run("complete",l),void(i&&i.call(l.element));if(o.hooks.run("before-highlight",l),l.grammar)if(n&&t.Worker){var d=new Worker(o.filename);d.onmessage=function(t){c(t.data)},d.postMessage(JSON.stringify({language:l.language,code:l.code,immediateClose:!0}))}else c(o.highlight(l.code,l.grammar,l.language));else c(o.util.encode(l.code))},highlight:function(t,e,n){var i={code:t,grammar:e,language:n};if(o.hooks.run("before-tokenize",i),!i.grammar)throw new Error('The language "'+i.language+'" has no grammar.');return i.tokens=o.tokenize(i.code,i.grammar),o.hooks.run("after-tokenize",i),r.stringify(o.util.encode(i.tokens),i.language)},tokenize:function(t,e){var n=e.rest;if(n){for(var i in n)e[i]=n[i];delete e.rest}var o=new l;return c(o,o.head,t),a(t,o,e,o.head,0),function(t){for(var e=[],n=t.head.next;n!==t.tail;)e.push(n.value),n=n.next;return e}(o)},hooks:{all:{},add:function(t,e){var n=o.hooks.all;n[t]=n[t]||[],n[t].push(e)},run:function(t,e){var n=o.hooks.all[t];if(n&&n.length)for(var i,r=0;i=n[r++];)i(e)}},Token:r};function r(t,e,n,i){this.type=t,this.content=e,this.alias=n,this.length=0|(i||"").length}function s(t,e,n,i){t.lastIndex=e;var o=t.exec(n);if(o&&i&&o[1]){var r=o[1].length;o.index+=r,o[0]=o[0].slice(r)}return o}function a(t,e,n,i,l,u){for(var p in n)if(n.hasOwnProperty(p)&&n[p]){var h=n[p];h=Array.isArray(h)?h:[h];for(var f=0;f<h.length;++f){if(u&&u.cause==p+","+f)return;var m=h[f],g=m.inside,v=!!m.lookbehind,b=!!m.greedy,y=m.alias;if(b&&!m.pattern.global){var k=m.pattern.toString().match(/[imsuy]*$/)[0];m.pattern=RegExp(m.pattern.source,k+"g")}for(var x=m.pattern||m,w=i.next,$=l;w!==e.tail&&!(u&&$>=u.reach);$+=w.value.length,w=w.next){var S=w.value;if(e.length>t.length)return;if(!(S instanceof r)){var A,E=1;if(b){if(!(A=s(x,$,t,v))||A.index>=t.length)break;var C=A.index,_=A.index+A[0].length,T=$;for(T+=w.value.length;C>=T;)T+=(w=w.next).value.length;if($=T-=w.value.length,w.value instanceof r)continue;for(var F=w;F!==e.tail&&(T<_||"string"==typeof F.value);F=F.next)E++,T+=F.value.length;E--,S=t.slice($,T),A.index-=$}else if(!(A=s(x,0,S,v)))continue;var R=A[0],I=S.slice(0,C=A.index),O=S.slice(C+R.length),j=$+S.length;u&&j>u.reach&&(u.reach=j);var P=w.prev;if(I&&(P=c(e,P,I),$+=I.length),d(e,P,E),w=c(e,P,new r(p,g?o.tokenize(R,g):R,y,R)),O&&c(e,w,O),E>1){var D={cause:p+","+f,reach:j};a(t,e,n,w.prev,$,D),u&&D.reach>u.reach&&(u.reach=D.reach)}}}}}}function l(){var t={value:null,prev:null,next:null},e={value:null,prev:t,next:null};t.next=e,this.head=t,this.tail=e,this.length=0}function c(t,e,n){var i=e.next,o={value:n,prev:e,next:i};return e.next=o,i.prev=o,t.length++,o}function d(t,e,n){for(var i=e.next,o=0;o<n&&i!==t.tail;o++)i=i.next;e.next=i,i.prev=e,t.length-=o}if(t.Prism=o,r.stringify=function t(e,n){if("string"==typeof e)return e;if(Array.isArray(e)){var i="";return e.forEach(function(e){i+=t(e,n)}),i}var r={type:e.type,content:t(e.content,n),tag:"span",classes:["token",e.type],attributes:{},language:n},s=e.alias;s&&(Array.isArray(s)?Array.prototype.push.apply(r.classes,s):r.classes.push(s)),o.hooks.run("wrap",r);var a="";for(var l in r.attributes)a+=" "+l+'="'+(r.attributes[l]||"").replace(/"/g,"&quot;")+'"';return"<"+r.tag+' class="'+r.classes.join(" ")+'"'+a+">"+r.content+"</"+r.tag+">"},!t.document)return t.addEventListener?(o.disableWorkerMessageHandler||t.addEventListener("message",function(e){var n=JSON.parse(e.data),i=n.language,r=n.immediateClose;t.postMessage(o.highlight(n.code,o.languages[i],i)),r&&t.close()},!1),o):o;var u=o.util.currentScript();function p(){o.manual||o.highlightAll()}if(u&&(o.filename=u.src,u.hasAttribute("data-manual")&&(o.manual=!0)),!o.manual){var h=document.readyState;"loading"===h||"interactive"===h&&u&&u.defer?document.addEventListener("DOMContentLoaded",p):window.requestAnimationFrame?window.requestAnimationFrame(p):window.setTimeout(p,16)}return o}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});t.exports&&(t.exports=e),void 0!==jn&&(jn.Prism=e),e.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},e.languages.markup.tag.inside["attr-value"].inside.entity=e.languages.markup.entity,e.languages.markup.doctype.inside["internal-subset"].inside=e.languages.markup,e.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(e.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:e.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+n]={pattern:/[\s\S]+/,inside:e.languages[n]};var r={};r[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},e.languages.insertBefore("markup","cdata",r)}}),Object.defineProperty(e.languages.markup.tag,"addAttribute",{value:function(t,n){e.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:e.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),e.languages.html=e.languages.markup,e.languages.mathml=e.languages.markup,e.languages.svg=e.languages.markup,e.languages.xml=e.languages.extend("markup",{}),e.languages.ssml=e.languages.xml,e.languages.atom=e.languages.xml,e.languages.rss=e.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(e),e.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},e.languages.javascript=e.languages.extend("clike",{"class-name":[e.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),e.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,e.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:e.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:e.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:e.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:e.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:e.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),e.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:e.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),e.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),e.languages.markup&&(e.languages.markup.tag.addInlined("script","javascript"),e.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),e.languages.js=e.languages.javascript,function(){if(void 0!==e&&"undefined"!=typeof document){Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},n="data-src-status",i="loading",o="loaded",r="pre[data-src]:not(["+n+'="'+o+'"]):not(['+n+'="'+i+'"])';e.hooks.add("before-highlightall",function(t){t.selector+=", "+r}),e.hooks.add("before-sanity-check",function(s){var a=s.element;if(a.matches(r)){s.code="",a.setAttribute(n,i);var l=a.appendChild(document.createElement("CODE"));l.textContent="Loading…";var c=a.getAttribute("data-src"),d=s.language;if("none"===d){var u=(/\.(\w+)$/.exec(c)||[,"none"])[1];d=t[u]||u}e.util.setLanguage(l,d),e.util.setLanguage(a,d);var p=e.plugins.autoloader;p&&p.loadLanguages(d),function(t){var i=new XMLHttpRequest;i.open("GET",t,!0),i.onreadystatechange=function(){var t;4==i.readyState&&(i.status<400&&i.responseText?function(t){a.setAttribute(n,o);var i=function(t){var e=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(t||"");if(e){var n=Number(e[1]),i=e[3];return e[2]?i?[n,Number(i)]:[n,void 0]:[n,n]}}(a.getAttribute("data-range"));if(i){var r=t.split(/\r\n?|\n/g),s=i[0],c=null==i[1]?r.length:i[1];s<0&&(s+=r.length),s=Math.max(0,Math.min(s-1,r.length)),c<0&&(c+=r.length),c=Math.max(0,Math.min(c,r.length)),t=r.slice(s,c).join("\n"),a.hasAttribute("data-start")||a.setAttribute("data-start",String(s+1))}l.textContent=t,e.highlightElement(l)}(i.responseText):(t=i.status>=400?"✖ Error "+i.status+" while fetching file: "+i.statusText:"✖ Error: File does not exist or is empty",a.setAttribute(n,"failed"),l.textContent=t))},i.send(null)}(c)}}),e.plugins.fileHighlight={highlight:function(t){for(var n,i=(t||document).querySelectorAll(r),o=0;n=i[o++];)e.highlightElement(n)}};var s=!1;e.fileHighlight=function(){s||(s=!0),e.plugins.fileHighlight.highlight.apply(this,arguments)}}}()}(Nn)),Nn.exports);const Ln=Pn(Mn);var zn,Vn,Bn;!function(t){t[t.NONE=0]="NONE",t[t.C=1]="_abstract",t[t._=2]="_accessor",t[t.T=3]="_as",t[t.F=4]="_assert",t[t.R=5]="_asserts",t[t.I=6]="_async",t[t.O=7]="_await",t[t.j=8]="_checks",t[t.P=9]="_constructor",t[t.D=10]="_declare",t[t.N=11]="_enum",t[t.M=12]="_exports",t[t.L=13]="_from",t[t.V=14]="_get",t[t.B=15]="_global",t[t.H=16]="_implements",t[t.U=17]="_infer",t[t.G=18]="_interface",t[t.W=19]="_is",t[t.J=20]="_keyof",t[t.Y=21]="_mixins",t[t.K=22]="_module",t[t.X=23]="_namespace",t[t.Z=24]="_of",t[t.tt=25]="_opaque",t[t.et=26]="_out",t[t.nt=27]="_override",t[t.it=28]="_private",t[t.ot=29]="_protected",t[t.st=30]="_proto",t[t.lt=31]="_public",t[t.ct=32]="_readonly",t[t.ut=33]="_require",t[t.ht=34]="_satisfies",t[t.ft=35]="_set",t[t.gt=36]="_static",t[t.vt=37]="_symbol",t[t.bt=38]="_type",t[t.yt=39]="_unique",t[t.kt=40]="_using"}(zn||(zn={})),function(t){t[t.PRECEDENCE_MASK=15]="PRECEDENCE_MASK",t[t.IS_KEYWORD=16]="IS_KEYWORD",t[t.IS_ASSIGN=32]="IS_ASSIGN",t[t.IS_RIGHT_ASSOCIATIVE=64]="IS_RIGHT_ASSOCIATIVE",t[t.IS_PREFIX=128]="IS_PREFIX",t[t.IS_POSTFIX=256]="IS_POSTFIX",t[t.IS_EXPRESSION_START=512]="IS_EXPRESSION_START",t[t.num=512]="num",t[t.bigint=1536]="bigint",t[t.decimal=2560]="decimal",t[t.regexp=3584]="regexp",t[t.string=4608]="string",t[t.name=5632]="name",t[t.eof=6144]="eof",t[t.bracketL=7680]="bracketL",t[t.bracketR=8192]="bracketR",t[t.braceL=9728]="braceL",t[t.braceBarL=10752]="braceBarL",t[t.braceR=11264]="braceR",t[t.braceBarR=12288]="braceBarR",t[t.parenL=13824]="parenL",t[t.parenR=14336]="parenR",t[t.comma=15360]="comma",t[t.semi=16384]="semi",t[t.colon=17408]="colon",t[t.doubleColon=18432]="doubleColon",t[t.dot=19456]="dot",t[t.question=20480]="question",t[t.questionDot=21504]="questionDot",t[t.arrow=22528]="arrow",t[t.template=23552]="template",t[t.ellipsis=24576]="ellipsis",t[t.backQuote=25600]="backQuote",t[t.dollarBraceL=27136]="dollarBraceL",t[t.at=27648]="at",t[t.hash=29184]="hash",t[t.eq=29728]="eq",t[t.assign=30752]="assign",t[t.preIncDec=32640]="preIncDec",t[t.postIncDec=33664]="postIncDec",t[t.bang=34432]="bang",t[t.tilde=35456]="tilde",t[t.pipeline=35841]="pipeline",t[t.nullishCoalescing=36866]="nullishCoalescing",t[t.logicalOR=37890]="logicalOR",t[t.logicalAND=38915]="logicalAND",t[t.bitwiseOR=39940]="bitwiseOR",t[t.bitwiseXOR=40965]="bitwiseXOR",t[t.bitwiseAND=41990]="bitwiseAND",t[t.equality=43015]="equality",t[t.lessThan=44040]="lessThan",t[t.greaterThan=45064]="greaterThan",t[t.relationalOrEqual=46088]="relationalOrEqual",t[t.bitShiftL=47113]="bitShiftL",t[t.bitShiftR=48137]="bitShiftR",t[t.plus=49802]="plus",t[t.minus=50826]="minus",t[t.modulo=51723]="modulo",t[t.star=52235]="star",t[t.slash=53259]="slash",t[t.exponent=54348]="exponent",t[t.jsxName=55296]="jsxName",t[t.jsxText=56320]="jsxText",t[t.jsxEmptyText=57344]="jsxEmptyText",t[t.jsxTagStart=58880]="jsxTagStart",t[t.jsxTagEnd=59392]="jsxTagEnd",t[t.typeParameterStart=60928]="typeParameterStart",t[t.nonNullAssertion=61440]="nonNullAssertion",t[t.xt=62480]="_break",t[t.wt=63504]="_case",t[t.$t=64528]="_catch",t[t.St=65552]="_continue",t[t.At=66576]="_debugger",t[t.Et=67600]="_default",t[t.Ct=68624]="_do",t[t._t=69648]="_else",t[t.Tt=70672]="_finally",t[t.Ft=71696]="_for",t[t.Rt=73232]="_function",t[t.It=73744]="_if",t[t.Ot=74768]="_return",t[t.jt=75792]="_switch",t[t.Pt=77456]="_throw",t[t.Dt=77840]="_try",t[t.Nt=78864]="_var",t[t.Mt=79888]="_let",t[t.Lt=80912]="_const",t[t.zt=81936]="_while",t[t.Vt=82960]="_with",t[t.Bt=84496]="_new",t[t.Ht=85520]="_this",t[t.qt=86544]="_super",t[t.Ut=87568]="_class",t[t.Gt=88080]="_extends",t[t.Wt=89104]="_export",t[t.Jt=90640]="_import",t[t.Yt=91664]="_yield",t[t.Kt=92688]="_null",t[t.Xt=93712]="_true",t[t.Zt=94736]="_false",t[t.Qt=95256]="_in",t[t.te=96280]="_instanceof",t[t.ee=97936]="_typeof",t[t.ne=98960]="_void",t[t.ie=99984]="_delete",t[t.I=100880]="_async",t[t.V=101904]="_get",t[t.ft=102928]="_set",t[t.D=103952]="_declare",t[t.ct=104976]="_readonly",t[t.C=106e3]="_abstract",t[t.gt=107024]="_static",t[t.lt=107536]="_public",t[t.it=108560]="_private",t[t.ot=109584]="_protected",t[t.nt=110608]="_override",t[t.T=112144]="_as",t[t.N=113168]="_enum",t[t.bt=114192]="_type",t[t.H=115216]="_implements"}(Vn||(Vn={}));class Hn{constructor(t,e,n){this.startTokenIndex=t,this.endTokenIndex=e,this.isFunctionScope=n}}class qn{constructor(t,e,n,i,o,r,s,a,l,c,d,u,p){this.potentialArrowAt=t,this.noAnonFunctionType=e,this.inDisallowConditionalTypesContext=n,this.tokensLength=i,this.scopesLength=o,this.pos=r,this.type=s,this.contextualKeyword=a,this.start=l,this.end=c,this.isType=d,this.scopeDepth=u,this.error=p}}class Un{constructor(){Un.prototype.oe.call(this),Un.prototype.re.call(this),Un.prototype.se.call(this),Un.prototype.ae.call(this),Un.prototype.le.call(this),Un.prototype.ce.call(this),Un.prototype.de.call(this),Un.prototype.ue.call(this),Un.prototype.pe.call(this),Un.prototype.he.call(this),Un.prototype.fe.call(this),Un.prototype.me.call(this),Un.prototype.ge.call(this)}oe(){this.potentialArrowAt=-1}re(){this.noAnonFunctionType=!1}se(){this.inDisallowConditionalTypesContext=!1}ae(){this.tokens=[]}le(){this.scopes=[]}ce(){this.pos=0}de(){this.type=Vn.eof}ue(){this.contextualKeyword=zn.NONE}pe(){this.start=0}he(){this.end=0}fe(){this.isType=!1}me(){this.scopeDepth=0}ge(){this.error=null}snapshot(){return new qn(this.potentialArrowAt,this.noAnonFunctionType,this.inDisallowConditionalTypesContext,this.tokens.length,this.scopes.length,this.pos,this.type,this.contextualKeyword,this.start,this.end,this.isType,this.scopeDepth,this.error)}restoreFromSnapshot(t){this.potentialArrowAt=t.potentialArrowAt,this.noAnonFunctionType=t.noAnonFunctionType,this.inDisallowConditionalTypesContext=t.inDisallowConditionalTypesContext,this.tokens.length=t.tokensLength,this.scopes.length=t.scopesLength,this.pos=t.pos,this.type=t.type,this.contextualKeyword=t.contextualKeyword,this.start=t.start,this.end=t.end,this.isType=t.isType,this.scopeDepth=t.scopeDepth,this.error=t.error}}let Gn,Wn,Jn,Yn,Kn,Xn;function Zn(){return Xn++}function Qn(t){if("pos"in t){const e=function(t){let e=1,n=1;for(let i=0;i<t;i++)Kn.charCodeAt(i)===Bn.lineFeed?(e++,n=1):n++;return new ti(e,n)}(t.pos);t.message+=` (${e.line}:${e.column})`,t.loc=e}return t}!function(t){t[t.backSpace=8]="backSpace",t[t.lineFeed=10]="lineFeed",t[t.tab=9]="tab",t[t.carriageReturn=13]="carriageReturn",t[t.shiftOut=14]="shiftOut",t[t.space=32]="space",t[t.exclamationMark=33]="exclamationMark",t[t.quotationMark=34]="quotationMark",t[t.numberSign=35]="numberSign",t[t.dollarSign=36]="dollarSign",t[t.percentSign=37]="percentSign",t[t.ampersand=38]="ampersand",t[t.apostrophe=39]="apostrophe",t[t.leftParenthesis=40]="leftParenthesis",t[t.rightParenthesis=41]="rightParenthesis",t[t.asterisk=42]="asterisk",t[t.plusSign=43]="plusSign",t[t.comma=44]="comma",t[t.dash=45]="dash",t[t.dot=46]="dot",t[t.slash=47]="slash",t[t.digit0=48]="digit0",t[t.digit1=49]="digit1",t[t.digit2=50]="digit2",t[t.digit3=51]="digit3",t[t.digit4=52]="digit4",t[t.digit5=53]="digit5",t[t.digit6=54]="digit6",t[t.digit7=55]="digit7",t[t.digit8=56]="digit8",t[t.digit9=57]="digit9",t[t.colon=58]="colon",t[t.semicolon=59]="semicolon",t[t.lessThan=60]="lessThan",t[t.equalsTo=61]="equalsTo",t[t.greaterThan=62]="greaterThan",t[t.questionMark=63]="questionMark",t[t.atSign=64]="atSign",t[t.uppercaseA=65]="uppercaseA",t[t.uppercaseB=66]="uppercaseB",t[t.uppercaseC=67]="uppercaseC",t[t.uppercaseD=68]="uppercaseD",t[t.uppercaseE=69]="uppercaseE",t[t.uppercaseF=70]="uppercaseF",t[t.uppercaseG=71]="uppercaseG",t[t.uppercaseH=72]="uppercaseH",t[t.uppercaseI=73]="uppercaseI",t[t.uppercaseJ=74]="uppercaseJ",t[t.uppercaseK=75]="uppercaseK",t[t.uppercaseL=76]="uppercaseL",t[t.uppercaseM=77]="uppercaseM",t[t.uppercaseN=78]="uppercaseN",t[t.uppercaseO=79]="uppercaseO",t[t.uppercaseP=80]="uppercaseP",t[t.uppercaseQ=81]="uppercaseQ",t[t.uppercaseR=82]="uppercaseR",t[t.uppercaseS=83]="uppercaseS",t[t.uppercaseT=84]="uppercaseT",t[t.uppercaseU=85]="uppercaseU",t[t.uppercaseV=86]="uppercaseV",t[t.uppercaseW=87]="uppercaseW",t[t.uppercaseX=88]="uppercaseX",t[t.uppercaseY=89]="uppercaseY",t[t.uppercaseZ=90]="uppercaseZ",t[t.leftSquareBracket=91]="leftSquareBracket",t[t.backslash=92]="backslash",t[t.rightSquareBracket=93]="rightSquareBracket",t[t.caret=94]="caret",t[t.underscore=95]="underscore",t[t.graveAccent=96]="graveAccent",t[t.lowercaseA=97]="lowercaseA",t[t.lowercaseB=98]="lowercaseB",t[t.lowercaseC=99]="lowercaseC",t[t.lowercaseD=100]="lowercaseD",t[t.lowercaseE=101]="lowercaseE",t[t.lowercaseF=102]="lowercaseF",t[t.lowercaseG=103]="lowercaseG",t[t.lowercaseH=104]="lowercaseH",t[t.lowercaseI=105]="lowercaseI",t[t.lowercaseJ=106]="lowercaseJ",t[t.lowercaseK=107]="lowercaseK",t[t.lowercaseL=108]="lowercaseL",t[t.lowercaseM=109]="lowercaseM",t[t.lowercaseN=110]="lowercaseN",t[t.lowercaseO=111]="lowercaseO",t[t.lowercaseP=112]="lowercaseP",t[t.lowercaseQ=113]="lowercaseQ",t[t.lowercaseR=114]="lowercaseR",t[t.lowercaseS=115]="lowercaseS",t[t.lowercaseT=116]="lowercaseT",t[t.lowercaseU=117]="lowercaseU",t[t.lowercaseV=118]="lowercaseV",t[t.lowercaseW=119]="lowercaseW",t[t.lowercaseX=120]="lowercaseX",t[t.lowercaseY=121]="lowercaseY",t[t.lowercaseZ=122]="lowercaseZ",t[t.leftCurlyBrace=123]="leftCurlyBrace",t[t.verticalBar=124]="verticalBar",t[t.rightCurlyBrace=125]="rightCurlyBrace",t[t.tilde=126]="tilde",t[t.nonBreakingSpace=160]="nonBreakingSpace",t[t.oghamSpaceMark=5760]="oghamSpaceMark",t[t.lineSeparator=8232]="lineSeparator",t[t.paragraphSeparator=8233]="paragraphSeparator"}(Bn||(Bn={}));class ti{constructor(t,e){this.line=t,this.column=e}}function ei(t,e,n,i){Kn=t,Yn=new Un,Xn=1,Gn=e,Wn=n,Jn=i}function ni(t){return Yn.contextualKeyword===t}function ii(t){const e=Mi();return e.type===Vn.name&&e.contextualKeyword===t}function oi(t){return Yn.contextualKeyword===t&&Oi(Vn.name)}function ri(t){oi(t)||pi()}function si(){return Pi(Vn.eof)||Pi(Vn.braceR)||ai()}function ai(){const t=Yn.tokens[Yn.tokens.length-1];for(let e=t?t.end:0;e<Yn.start;e++){const t=Kn.charCodeAt(e);if(t===Bn.lineFeed||t===Bn.carriageReturn||8232===t||8233===t)return!0}return!1}function li(){const t=Li();for(let e=Yn.end;e<t;e++){const t=Kn.charCodeAt(e);if(t===Bn.lineFeed||t===Bn.carriageReturn||8232===t||8233===t)return!0}return!1}function ci(){return Oi(Vn.semi)||si()}function di(){ci()||pi('Unexpected token, expected ";"')}function ui(t){Oi(t)||pi(`Unexpected token, expected "${function(t){switch(t){case Vn.num:return"num";case Vn.bigint:return"bigint";case Vn.decimal:return"decimal";case Vn.regexp:return"regexp";case Vn.string:return"string";case Vn.name:return"name";case Vn.eof:return"eof";case Vn.bracketL:return"[";case Vn.bracketR:return"]";case Vn.braceL:return"{";case Vn.braceBarL:return"{|";case Vn.braceR:return"}";case Vn.braceBarR:return"|}";case Vn.parenL:return"(";case Vn.parenR:return")";case Vn.comma:return",";case Vn.semi:return";";case Vn.colon:return":";case Vn.doubleColon:return"::";case Vn.dot:return".";case Vn.question:return"?";case Vn.questionDot:return"?.";case Vn.arrow:return"=>";case Vn.template:return"template";case Vn.ellipsis:return"...";case Vn.backQuote:return"`";case Vn.dollarBraceL:return"${";case Vn.at:return"@";case Vn.hash:return"#";case Vn.eq:return"=";case Vn.assign:return"_=";case Vn.preIncDec:case Vn.postIncDec:return"++/--";case Vn.bang:return"!";case Vn.tilde:return"~";case Vn.pipeline:return"|>";case Vn.nullishCoalescing:return"??";case Vn.logicalOR:return"||";case Vn.logicalAND:return"&&";case Vn.bitwiseOR:return"|";case Vn.bitwiseXOR:return"^";case Vn.bitwiseAND:return"&";case Vn.equality:return"==/!=";case Vn.lessThan:return"<";case Vn.greaterThan:return">";case Vn.relationalOrEqual:return"<=/>=";case Vn.bitShiftL:return"<<";case Vn.bitShiftR:return">>/>>>";case Vn.plus:return"+";case Vn.minus:return"-";case Vn.modulo:return"%";case Vn.star:return"*";case Vn.slash:return"/";case Vn.exponent:return"**";case Vn.jsxName:return"jsxName";case Vn.jsxText:return"jsxText";case Vn.jsxEmptyText:return"jsxEmptyText";case Vn.jsxTagStart:return"jsxTagStart";case Vn.jsxTagEnd:return"jsxTagEnd";case Vn.typeParameterStart:return"typeParameterStart";case Vn.nonNullAssertion:return"nonNullAssertion";case Vn.xt:return"break";case Vn.wt:return"case";case Vn.$t:return"catch";case Vn.St:return"continue";case Vn.At:return"debugger";case Vn.Et:return"default";case Vn.Ct:return"do";case Vn._t:return"else";case Vn.Tt:return"finally";case Vn.Ft:return"for";case Vn.Rt:return"function";case Vn.It:return"if";case Vn.Ot:return"return";case Vn.jt:return"switch";case Vn.Pt:return"throw";case Vn.Dt:return"try";case Vn.Nt:return"var";case Vn.Mt:return"let";case Vn.Lt:return"const";case Vn.zt:return"while";case Vn.Vt:return"with";case Vn.Bt:return"new";case Vn.Ht:return"this";case Vn.qt:return"super";case Vn.Ut:return"class";case Vn.Gt:return"extends";case Vn.Wt:return"export";case Vn.Jt:return"import";case Vn.Yt:return"yield";case Vn.Kt:return"null";case Vn.Xt:return"true";case Vn.Zt:return"false";case Vn.Qt:return"in";case Vn.te:return"instanceof";case Vn.ee:return"typeof";case Vn.ne:return"void";case Vn.ie:return"delete";case Vn.I:return"async";case Vn.V:return"get";case Vn.ft:return"set";case Vn.D:return"declare";case Vn.ct:return"readonly";case Vn.C:return"abstract";case Vn.gt:return"static";case Vn.lt:return"public";case Vn.it:return"private";case Vn.ot:return"protected";case Vn.nt:return"override";case Vn.T:return"as";case Vn.N:return"enum";case Vn.bt:return"type";case Vn.H:return"implements";default:return""}}(t)}"`)}function pi(t="Unexpected token",e=Yn.start){if(Yn.error)return;const n=new SyntaxError(t);n.pos=e,Yn.error=n,Yn.pos=Kn.length,Gi(Vn.eof)}const hi=[9,11,12,Bn.space,Bn.nonBreakingSpace,Bn.oghamSpaceMark,8192,8193,8194,8195,8196,8197,8198,8199,8200,8201,8202,8239,8287,12288,65279],fi=/(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g,mi=new Uint8Array(65536);for(const Xc of hi)mi[Xc]=1;function gi(t){if(t<48)return 36===t;if(t<58)return!0;if(t<65)return!1;if(t<91)return!0;if(t<97)return 95===t;if(t<123)return!0;if(t<128)return!1;throw new Error("Should not be called with non-ASCII char code.")}const vi=new Uint8Array(65536);for(let Xc=0;Xc<128;Xc++)vi[Xc]=gi(Xc)?1:0;for(let Xc=128;Xc<65536;Xc++)vi[Xc]=1;for(const Xc of hi)vi[Xc]=0;vi[8232]=0,vi[8233]=0;const bi=vi.slice();for(let Xc=Bn.digit0;Xc<=Bn.digit9;Xc++)bi[Xc]=0;const yi=new Int32Array([-1,27,783,918,1755,2376,2862,3483,-1,3699,-1,4617,4752,4833,5130,5508,5940,-1,6480,6939,7749,8181,8451,8613,-1,8829,-1,-1,-1,54,243,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,432,-1,-1,-1,675,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,81,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,108,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,135,-1,-1,-1,-1,-1,-1,-1,-1,-1,162,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,189,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,216,-1,-1,-1,-1,-1,-1,zn.C<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,270,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,297,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,324,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,351,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,378,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,405,-1,-1,-1,-1,-1,-1,-1,-1,zn._<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.T<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,459,-1,-1,-1,-1,-1,594,-1,-1,-1,-1,-1,-1,486,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,513,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,540,-1,-1,-1,-1,-1,-1,zn.F<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,567,-1,-1,-1,-1,-1,-1,-1,zn.R<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,621,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,648,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.I<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,702,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,729,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,756,-1,-1,-1,-1,-1,-1,zn.O<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,810,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,837,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,864,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,891,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.xt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,945,-1,-1,-1,-1,-1,-1,1107,-1,-1,-1,1242,-1,-1,1350,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,972,1026,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,999,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.wt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1053,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1080,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.$t<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1134,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1161,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1188,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1215,-1,-1,-1,-1,-1,-1,-1,zn.j<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1269,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1296,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1323,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Ut<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1377,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1404,1620,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1431,-1,-1,-1,-1,-1,-1,1+(Vn.Lt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1458,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1485,-1,-1,-1,-1,-1,-1,-1,-1,1512,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1539,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1566,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1593,-1,-1,-1,-1,-1,-1,-1,-1,zn.P<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1647,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1674,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1701,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1728,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.St<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1782,-1,-1,-1,-1,-1,-1,-1,-1,-1,2349,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1809,1971,-1,-1,2106,-1,-1,-1,-1,-1,2241,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1836,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1863,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1890,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1917,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1944,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.At<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1998,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2025,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2052,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2079,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.D<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2133,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2160,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2187,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2214,-1,-1,-1,-1,-1,-1,1+(Vn.Et<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2268,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2295,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2322,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.ie<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Ct<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2403,-1,2484,-1,-1,-1,-1,-1,-1,-1,-1,-1,2565,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2430,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2457,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn._t<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2511,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2538,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.N<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2592,-1,-1,-1,2727,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2619,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2646,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2673,-1,-1,-1,-1,-1,-1,1+(Vn.Wt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2700,-1,-1,-1,-1,-1,-1,-1,zn.M<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2754,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2781,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2808,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2835,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Gt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2889,-1,-1,-1,-1,-1,-1,-1,2997,-1,-1,-1,-1,-1,3159,-1,-1,3213,-1,-1,3294,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2916,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2943,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,2970,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Zt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3024,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3051,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3078,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3105,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3132,-1,1+(Vn.Tt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3186,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Ft<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3240,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3267,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.L<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3321,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3348,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3375,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3402,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3429,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3456,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Rt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3510,-1,-1,-1,-1,-1,-1,3564,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3537,-1,-1,-1,-1,-1,-1,zn.V<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3591,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3618,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3645,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3672,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.B<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3726,-1,-1,-1,-1,-1,-1,3753,4077,-1,-1,-1,-1,4590,-1,-1,-1,-1,-1,-1,-1,1+(Vn.It<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3780,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3807,-1,-1,3996,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3834,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3861,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3888,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3915,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3942,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,3969,-1,-1,-1,-1,-1,-1,-1,zn.H<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4023,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4050,-1,-1,-1,-1,-1,-1,1+(Vn.Jt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Qt<<1),-1,-1,-1,-1,-1,4104,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4185,4401,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4131,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4158,-1,-1,-1,-1,-1,-1,-1,-1,zn.U<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4212,-1,-1,-1,-1,-1,-1,-1,4239,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4266,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4293,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4320,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4347,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4374,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.te<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4428,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4455,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4482,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4509,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4536,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4563,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.G<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.W<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4644,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4671,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4698,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4725,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.J<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4779,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4806,-1,-1,-1,-1,-1,-1,1+(Vn.Mt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4860,-1,-1,-1,-1,-1,4995,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4887,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4914,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4941,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,4968,-1,-1,-1,-1,-1,-1,-1,zn.Y<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5022,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5049,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5076,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5103,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.K<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5157,-1,-1,-1,5373,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5427,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5184,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5211,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5238,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5265,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5292,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5319,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5346,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.X<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5400,-1,-1,-1,1+(Vn.Bt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5454,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5481,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Kt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5535,-1,-1,-1,-1,-1,-1,-1,-1,-1,5562,-1,-1,-1,-1,5697,5751,-1,-1,-1,-1,zn.Z<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5589,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5616,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5643,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5670,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.tt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5724,-1,-1,-1,-1,-1,-1,zn.et<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5778,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5805,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5832,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5859,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5886,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5913,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.nt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5967,-1,-1,6345,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,5994,-1,-1,-1,-1,-1,6129,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6021,-1,-1,-1,-1,-1,6048,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6075,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6102,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.it<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6156,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6183,-1,-1,-1,-1,-1,-1,-1,-1,-1,6318,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6210,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6237,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6264,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6291,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.ot<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.st<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6372,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6399,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6426,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6453,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.lt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6507,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6534,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6696,-1,-1,6831,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6561,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6588,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6615,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6642,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6669,-1,zn.ct<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6723,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6750,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6777,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6804,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.ut<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6858,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6885,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6912,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Ot<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6966,-1,-1,-1,7182,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7236,7371,-1,7479,-1,7614,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,6993,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7020,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7047,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7074,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7101,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7128,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7155,-1,-1,-1,-1,-1,-1,-1,zn.ht<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7209,-1,-1,-1,-1,-1,-1,zn.ft<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7263,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7290,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7317,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7344,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.gt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7398,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7425,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7452,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.qt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7506,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7533,-1,-1,-1,-1,-1,-1,-1,-1,-1,7560,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7587,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.jt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7641,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7668,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7695,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7722,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.vt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7776,-1,-1,-1,-1,-1,-1,-1,-1,-1,7938,-1,-1,-1,-1,-1,-1,8046,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7803,-1,-1,-1,-1,-1,-1,-1,-1,7857,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7830,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Ht<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7884,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7911,-1,-1,-1,1+(Vn.Pt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,7965,-1,-1,-1,8019,-1,-1,-1,-1,-1,-1,7992,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Xt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Dt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8073,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8100,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.bt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8127,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8154,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.ee<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8208,-1,-1,-1,-1,8343,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8235,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8262,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8289,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8316,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.yt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8370,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8397,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8424,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,zn.kt<<1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8478,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8532,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8505,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Nt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8559,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8586,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.ne<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8640,8748,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8667,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8694,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8721,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.zt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8775,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8802,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Vt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8856,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8883,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8910,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,8937,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,1+(Vn.Yt<<1),-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1,-1]);var ki,xi;function wi(t){const e=t.identifierRole;return e===ki.TopLevelDeclaration||e===ki.FunctionScopedDeclaration||e===ki.BlockScopedDeclaration||e===ki.ObjectShorthandTopLevelDeclaration||e===ki.ObjectShorthandFunctionScopedDeclaration||e===ki.ObjectShorthandBlockScopedDeclaration}function $i(t){const e=t.identifierRole;return e===ki.FunctionScopedDeclaration||e===ki.BlockScopedDeclaration||e===ki.ObjectShorthandFunctionScopedDeclaration||e===ki.ObjectShorthandBlockScopedDeclaration}function Si(t){const e=t.identifierRole;return e===ki.TopLevelDeclaration||e===ki.ObjectShorthandTopLevelDeclaration||e===ki.ImportDeclaration}function Ai(t){const e=t.identifierRole;return e===ki.TopLevelDeclaration||e===ki.BlockScopedDeclaration||e===ki.ObjectShorthandTopLevelDeclaration||e===ki.ObjectShorthandBlockScopedDeclaration}function Ei(t){const e=t.identifierRole;return e===ki.FunctionScopedDeclaration||e===ki.ObjectShorthandFunctionScopedDeclaration}function Ci(t){return t.identifierRole===ki.ObjectShorthandTopLevelDeclaration||t.identifierRole===ki.ObjectShorthandBlockScopedDeclaration||t.identifierRole===ki.ObjectShorthandFunctionScopedDeclaration}!function(t){t[t.Access=0]="Access",t[t.ExportAccess=1]="ExportAccess",t[t.TopLevelDeclaration=2]="TopLevelDeclaration",t[t.FunctionScopedDeclaration=3]="FunctionScopedDeclaration",t[t.BlockScopedDeclaration=4]="BlockScopedDeclaration",t[t.ObjectShorthandTopLevelDeclaration=5]="ObjectShorthandTopLevelDeclaration",t[t.ObjectShorthandFunctionScopedDeclaration=6]="ObjectShorthandFunctionScopedDeclaration",t[t.ObjectShorthandBlockScopedDeclaration=7]="ObjectShorthandBlockScopedDeclaration",t[t.ObjectShorthand=8]="ObjectShorthand",t[t.ImportDeclaration=9]="ImportDeclaration",t[t.ObjectKey=10]="ObjectKey",t[t.ImportAccess=11]="ImportAccess"}(ki||(ki={})),function(t){t[t.NoChildren=0]="NoChildren",t[t.OneChild=1]="OneChild",t[t.StaticChildren=2]="StaticChildren",t[t.KeyAfterPropSpread=3]="KeyAfterPropSpread"}(xi||(xi={}));class _i{constructor(){this.type=Yn.type,this.contextualKeyword=Yn.contextualKeyword,this.start=Yn.start,this.end=Yn.end,this.scopeDepth=Yn.scopeDepth,this.isType=Yn.isType,this.identifierRole=null,this.jsxRole=null,this.shadowsGlobal=!1,this.isAsyncOperation=!1,this.contextId=null,this.rhsEndIndex=null,this.isExpression=!1,this.numNullishCoalesceStarts=0,this.numNullishCoalesceEnds=0,this.isOptionalChainStart=!1,this.isOptionalChainEnd=!1,this.subscriptStartIndex=null,this.nullishStartIndex=null}}function Ti(){Yn.tokens.push(new _i),Bi()}function Fi(){Yn.tokens.push(new _i),Yn.start=Yn.pos,function(){for(;;){if(Yn.pos>=Kn.length)return void pi("Unterminated template");const t=Kn.charCodeAt(Yn.pos);if(t===Bn.graveAccent||t===Bn.dollarSign&&Kn.charCodeAt(Yn.pos+1)===Bn.leftCurlyBrace)return Yn.pos===Yn.start&&Pi(Vn.template)?t===Bn.dollarSign?(Yn.pos+=2,void Gi(Vn.dollarBraceL)):(++Yn.pos,void Gi(Vn.backQuote)):void Gi(Vn.template);t===Bn.backslash&&Yn.pos++,Yn.pos++}}()}function Ri(t){for(let n=Yn.tokens.length-t;n<Yn.tokens.length;n++)Yn.tokens[n].isType=!0;const e=Yn.isType;return Yn.isType=!0,e}function Ii(t){Yn.isType=t}function Oi(t){return!!Pi(t)&&(Ti(),!0)}function ji(t){const e=Yn.isType;Yn.isType=!0,Oi(t),Yn.isType=e}function Pi(t){return Yn.type===t}function Di(){const t=Yn.snapshot();Ti();const e=Yn.type;return Yn.restoreFromSnapshot(t),e}class Ni{constructor(t,e){this.type=t,this.contextualKeyword=e}}function Mi(){const t=Yn.snapshot();Ti();const e=Yn.type,n=Yn.contextualKeyword;return Yn.restoreFromSnapshot(t),new Ni(e,n)}function Li(){return zi(Yn.pos)}function zi(t){return fi.lastIndex=t,t+fi.exec(Kn)[0].length}function Vi(){return Kn.charCodeAt(Li())}function Bi(){if(Ui(),Yn.start=Yn.pos,Yn.pos>=Kn.length){const t=Yn.tokens;return t.length>=2&&t[t.length-1].start>=Kn.length&&t[t.length-2].start>=Kn.length&&pi("Unexpectedly reached the end of input."),void Gi(Vn.eof)}!function(t){bi[t]||t===Bn.backslash||t===Bn.atSign&&Kn.charCodeAt(Yn.pos+1)===Bn.atSign?function(){let t=0,e=0,n=Yn.pos;for(;n<Kn.length&&(e=Kn.charCodeAt(n),!(e<Bn.lowercaseA||e>Bn.lowercaseZ));){const i=yi[t+(e-Bn.lowercaseA)+1];if(-1===i)break;t=i,n++}const i=yi[t];if(i>-1&&!vi[e])return Yn.pos=n,void(1&i?Gi(i>>>1):Gi(Vn.name,i>>>1));for(;n<Kn.length;){const t=Kn.charCodeAt(n);if(vi[t])n++;else if(t===Bn.backslash){if(n+=2,Kn.charCodeAt(n)===Bn.leftCurlyBrace){for(;n<Kn.length&&Kn.charCodeAt(n)!==Bn.rightCurlyBrace;)n++;n++}}else{if(t!==Bn.atSign||Kn.charCodeAt(n+1)!==Bn.atSign)break;n+=2}}Yn.pos=n,Gi(Vn.name)}():Yi(t)}(Kn.charCodeAt(Yn.pos))}function Hi(){for(;Kn.charCodeAt(Yn.pos)!==Bn.asterisk||Kn.charCodeAt(Yn.pos+1)!==Bn.slash;)if(Yn.pos++,Yn.pos>Kn.length)return void pi("Unterminated comment",Yn.pos-2);Yn.pos+=2}function qi(t){let e=Kn.charCodeAt(Yn.pos+=t);if(Yn.pos<Kn.length)for(;e!==Bn.lineFeed&&e!==Bn.carriageReturn&&e!==Bn.lineSeparator&&e!==Bn.paragraphSeparator&&++Yn.pos<Kn.length;)e=Kn.charCodeAt(Yn.pos)}function Ui(){for(;Yn.pos<Kn.length;){const t=Kn.charCodeAt(Yn.pos);switch(t){case Bn.carriageReturn:Kn.charCodeAt(Yn.pos+1)===Bn.lineFeed&&++Yn.pos;case Bn.lineFeed:case Bn.lineSeparator:case Bn.paragraphSeparator:++Yn.pos;break;case Bn.slash:switch(Kn.charCodeAt(Yn.pos+1)){case Bn.asterisk:Yn.pos+=2,Hi();break;case Bn.slash:qi(2);break;default:return}break;default:if(!mi[t])return;++Yn.pos}}}function Gi(t,e=zn.NONE){Yn.end=Yn.pos,Yn.type=t,Yn.contextualKeyword=e}function Wi(){if(Yn.isType)return void Ki(Vn.greaterThan,1);const t=Kn.charCodeAt(Yn.pos+1);if(t===Bn.greaterThan){const t=Kn.charCodeAt(Yn.pos+2)===Bn.greaterThan?3:2;return Kn.charCodeAt(Yn.pos+t)===Bn.equalsTo?void Ki(Vn.assign,t+1):void Ki(Vn.bitShiftR,t)}t===Bn.equalsTo?Ki(Vn.relationalOrEqual,2):Ki(Vn.greaterThan,1)}function Ji(){Yn.type===Vn.greaterThan&&(Yn.pos-=1,Wi())}function Yi(t){switch(t){case Bn.numberSign:return++Yn.pos,void Gi(Vn.hash);case Bn.dot:return void function(){const t=Kn.charCodeAt(Yn.pos+1);t>=Bn.digit0&&t<=Bn.digit9?Zi(!0):t===Bn.dot&&Kn.charCodeAt(Yn.pos+2)===Bn.dot?(Yn.pos+=3,Gi(Vn.ellipsis)):(++Yn.pos,Gi(Vn.dot))}();case Bn.leftParenthesis:return++Yn.pos,void Gi(Vn.parenL);case Bn.rightParenthesis:return++Yn.pos,void Gi(Vn.parenR);case Bn.semicolon:return++Yn.pos,void Gi(Vn.semi);case Bn.comma:return++Yn.pos,void Gi(Vn.comma);case Bn.leftSquareBracket:return++Yn.pos,void Gi(Vn.bracketL);case Bn.rightSquareBracket:return++Yn.pos,void Gi(Vn.bracketR);case Bn.leftCurlyBrace:return void(Jn&&Kn.charCodeAt(Yn.pos+1)===Bn.verticalBar?Ki(Vn.braceBarL,2):(++Yn.pos,Gi(Vn.braceL)));case Bn.rightCurlyBrace:return++Yn.pos,void Gi(Vn.braceR);case Bn.colon:return void(Kn.charCodeAt(Yn.pos+1)===Bn.colon?Ki(Vn.doubleColon,2):(++Yn.pos,Gi(Vn.colon)));case Bn.questionMark:return void function(){const t=Kn.charCodeAt(Yn.pos+1),e=Kn.charCodeAt(Yn.pos+2);t!==Bn.questionMark||Jn&&Yn.isType?t!==Bn.dot||e>=Bn.digit0&&e<=Bn.digit9?(++Yn.pos,Gi(Vn.question)):(Yn.pos+=2,Gi(Vn.questionDot)):e===Bn.equalsTo?Ki(Vn.assign,3):Ki(Vn.nullishCoalescing,2)}();case Bn.atSign:return++Yn.pos,void Gi(Vn.at);case Bn.graveAccent:return++Yn.pos,void Gi(Vn.backQuote);case Bn.digit0:{const t=Kn.charCodeAt(Yn.pos+1);if(t===Bn.lowercaseX||t===Bn.uppercaseX||t===Bn.lowercaseO||t===Bn.uppercaseO||t===Bn.lowercaseB||t===Bn.uppercaseB)return void function(){for(Yn.pos+=2;;){const t=Kn.charCodeAt(Yn.pos);if(!(t>=Bn.digit0&&t<=Bn.digit9||t>=Bn.lowercaseA&&t<=Bn.lowercaseF||t>=Bn.uppercaseA&&t<=Bn.uppercaseF||t===Bn.underscore))break;Yn.pos++}Kn.charCodeAt(Yn.pos)===Bn.lowercaseN?(++Yn.pos,Gi(Vn.bigint)):Gi(Vn.num)}()}case Bn.digit1:case Bn.digit2:case Bn.digit3:case Bn.digit4:case Bn.digit5:case Bn.digit6:case Bn.digit7:case Bn.digit8:case Bn.digit9:return void Zi(!1);case Bn.quotationMark:case Bn.apostrophe:return void function(t){for(Yn.pos++;;){if(Yn.pos>=Kn.length)return void pi("Unterminated string constant");const e=Kn.charCodeAt(Yn.pos);if(e===Bn.backslash)Yn.pos++;else if(e===t)break;Yn.pos++}Yn.pos++,Gi(Vn.string)}(t);case Bn.slash:return void(Kn.charCodeAt(Yn.pos+1)===Bn.equalsTo?Ki(Vn.assign,2):Ki(Vn.slash,1));case Bn.percentSign:case Bn.asterisk:return void function(t){let e=t===Bn.asterisk?Vn.star:Vn.modulo,n=1,i=Kn.charCodeAt(Yn.pos+1);t===Bn.asterisk&&i===Bn.asterisk&&(n++,i=Kn.charCodeAt(Yn.pos+2),e=Vn.exponent),i===Bn.equalsTo&&Kn.charCodeAt(Yn.pos+2)!==Bn.greaterThan&&(n++,e=Vn.assign),Ki(e,n)}(t);case Bn.verticalBar:case Bn.ampersand:return void function(t){const e=Kn.charCodeAt(Yn.pos+1);if(e!==t){if(t===Bn.verticalBar){if(e===Bn.greaterThan)return void Ki(Vn.pipeline,2);if(e===Bn.rightCurlyBrace&&Jn)return void Ki(Vn.braceBarR,2)}e!==Bn.equalsTo?Ki(t===Bn.verticalBar?Vn.bitwiseOR:Vn.bitwiseAND,1):Ki(Vn.assign,2)}else Kn.charCodeAt(Yn.pos+2)===Bn.equalsTo?Ki(Vn.assign,3):Ki(t===Bn.verticalBar?Vn.logicalOR:Vn.logicalAND,2)}(t);case Bn.caret:return void(Kn.charCodeAt(Yn.pos+1)===Bn.equalsTo?Ki(Vn.assign,2):Ki(Vn.bitwiseXOR,1));case Bn.plusSign:case Bn.dash:return void function(t){const e=Kn.charCodeAt(Yn.pos+1);e!==t?e===Bn.equalsTo?Ki(Vn.assign,2):Ki(t===Bn.plusSign?Vn.plus:Vn.minus,1):Ki(Vn.preIncDec,2)}(t);case Bn.lessThan:return void function(){const t=Kn.charCodeAt(Yn.pos+1);if(t===Bn.lessThan)return Kn.charCodeAt(Yn.pos+2)===Bn.equalsTo?void Ki(Vn.assign,3):void(Yn.isType?Ki(Vn.lessThan,1):Ki(Vn.bitShiftL,2));t===Bn.equalsTo?Ki(Vn.relationalOrEqual,2):Ki(Vn.lessThan,1)}();case Bn.greaterThan:return void Wi();case Bn.equalsTo:case Bn.exclamationMark:return void function(t){const e=Kn.charCodeAt(Yn.pos+1);if(e!==Bn.equalsTo)return t===Bn.equalsTo&&e===Bn.greaterThan?(Yn.pos+=2,void Gi(Vn.arrow)):void Ki(t===Bn.equalsTo?Vn.eq:Vn.bang,1);Ki(Vn.equality,Kn.charCodeAt(Yn.pos+2)===Bn.equalsTo?3:2)}(t);case Bn.tilde:return void Ki(Vn.tilde,1)}pi(`Unexpected character '${String.fromCharCode(t)}'`,Yn.pos)}function Ki(t,e){Yn.pos+=e,Gi(t)}function Xi(){for(;;){const t=Kn.charCodeAt(Yn.pos);if(!(t>=Bn.digit0&&t<=Bn.digit9||t===Bn.underscore))break;Yn.pos++}}function Zi(t){let e=!1,n=!1;t||Xi();let i=Kn.charCodeAt(Yn.pos);i===Bn.dot&&(++Yn.pos,Xi(),i=Kn.charCodeAt(Yn.pos)),i!==Bn.uppercaseE&&i!==Bn.lowercaseE||(i=Kn.charCodeAt(++Yn.pos),i!==Bn.plusSign&&i!==Bn.dash||++Yn.pos,Xi(),i=Kn.charCodeAt(Yn.pos)),i===Bn.lowercaseN?(++Yn.pos,e=!0):i===Bn.lowercaseM&&(++Yn.pos,n=!0),Gi(e?Vn.bigint:n?Vn.decimal:Vn.num)}function Qi(t,e=t.currentIndex()){let n=e+1;if(to(t,n)){const i=t.identifierNameAtIndex(e);return{isType:!1,leftName:i,rightName:i,endIndex:n}}if(n++,to(t,n))return{isType:!0,leftName:null,rightName:null,endIndex:n};if(n++,to(t,n))return{isType:!1,leftName:t.identifierNameAtIndex(e),rightName:t.identifierNameAtIndex(e+2),endIndex:n};if(n++,to(t,n))return{isType:!0,leftName:null,rightName:null,endIndex:n};throw new Error(`Unexpected import/export specifier at ${e}`)}function to(t,e){const n=t.tokens[e];return n.type===Vn.braceR||n.type===Vn.comma}const eo=new Map([["quot",'"'],["amp","&"],["apos","'"],["lt","<"],["gt",">"],["nbsp"," "],["iexcl","¡"],["cent","¢"],["pound","£"],["curren","¤"],["yen","¥"],["brvbar","¦"],["sect","§"],["uml","¨"],["copy","©"],["ordf","ª"],["laquo","«"],["not","¬"],["shy","­"],["reg","®"],["macr","¯"],["deg","°"],["plusmn","±"],["sup2","²"],["sup3","³"],["acute","´"],["micro","µ"],["para","¶"],["middot","·"],["cedil","¸"],["sup1","¹"],["ordm","º"],["raquo","»"],["frac14","¼"],["frac12","½"],["frac34","¾"],["iquest","¿"],["Agrave","À"],["Aacute","Á"],["Acirc","Â"],["Atilde","Ã"],["Auml","Ä"],["Aring","Å"],["AElig","Æ"],["Ccedil","Ç"],["Egrave","È"],["Eacute","É"],["Ecirc","Ê"],["Euml","Ë"],["Igrave","Ì"],["Iacute","Í"],["Icirc","Î"],["Iuml","Ï"],["ETH","Ð"],["Ntilde","Ñ"],["Ograve","Ò"],["Oacute","Ó"],["Ocirc","Ô"],["Otilde","Õ"],["Ouml","Ö"],["times","×"],["Oslash","Ø"],["Ugrave","Ù"],["Uacute","Ú"],["Ucirc","Û"],["Uuml","Ü"],["Yacute","Ý"],["THORN","Þ"],["szlig","ß"],["agrave","à"],["aacute","á"],["acirc","â"],["atilde","ã"],["auml","ä"],["aring","å"],["aelig","æ"],["ccedil","ç"],["egrave","è"],["eacute","é"],["ecirc","ê"],["euml","ë"],["igrave","ì"],["iacute","í"],["icirc","î"],["iuml","ï"],["eth","ð"],["ntilde","ñ"],["ograve","ò"],["oacute","ó"],["ocirc","ô"],["otilde","õ"],["ouml","ö"],["divide","÷"],["oslash","ø"],["ugrave","ù"],["uacute","ú"],["ucirc","û"],["uuml","ü"],["yacute","ý"],["thorn","þ"],["yuml","ÿ"],["OElig","Œ"],["oelig","œ"],["Scaron","Š"],["scaron","š"],["Yuml","Ÿ"],["fnof","ƒ"],["circ","ˆ"],["tilde","˜"],["Alpha","Α"],["Beta","Β"],["Gamma","Γ"],["Delta","Δ"],["Epsilon","Ε"],["Zeta","Ζ"],["Eta","Η"],["Theta","Θ"],["Iota","Ι"],["Kappa","Κ"],["Lambda","Λ"],["Mu","Μ"],["Nu","Ν"],["Xi","Ξ"],["Omicron","Ο"],["Pi","Π"],["Rho","Ρ"],["Sigma","Σ"],["Tau","Τ"],["Upsilon","Υ"],["Phi","Φ"],["Chi","Χ"],["Psi","Ψ"],["Omega","Ω"],["alpha","α"],["beta","β"],["gamma","γ"],["delta","δ"],["epsilon","ε"],["zeta","ζ"],["eta","η"],["theta","θ"],["iota","ι"],["kappa","κ"],["lambda","λ"],["mu","μ"],["nu","ν"],["xi","ξ"],["omicron","ο"],["pi","π"],["rho","ρ"],["sigmaf","ς"],["sigma","σ"],["tau","τ"],["upsilon","υ"],["phi","φ"],["chi","χ"],["psi","ψ"],["omega","ω"],["thetasym","ϑ"],["upsih","ϒ"],["piv","ϖ"],["ensp"," "],["emsp"," "],["thinsp"," "],["zwnj","‌"],["zwj","‍"],["lrm","‎"],["rlm","‏"],["ndash","–"],["mdash","—"],["lsquo","‘"],["rsquo","’"],["sbquo","‚"],["ldquo","“"],["rdquo","”"],["bdquo","„"],["dagger","†"],["Dagger","‡"],["bull","•"],["hellip","…"],["permil","‰"],["prime","′"],["Prime","″"],["lsaquo","‹"],["rsaquo","›"],["oline","‾"],["frasl","⁄"],["euro","€"],["image","ℑ"],["weierp","℘"],["real","ℜ"],["trade","™"],["alefsym","ℵ"],["larr","←"],["uarr","↑"],["rarr","→"],["darr","↓"],["harr","↔"],["crarr","↵"],["lArr","⇐"],["uArr","⇑"],["rArr","⇒"],["dArr","⇓"],["hArr","⇔"],["forall","∀"],["part","∂"],["exist","∃"],["empty","∅"],["nabla","∇"],["isin","∈"],["notin","∉"],["ni","∋"],["prod","∏"],["sum","∑"],["minus","−"],["lowast","∗"],["radic","√"],["prop","∝"],["infin","∞"],["ang","∠"],["and","∧"],["or","∨"],["cap","∩"],["cup","∪"],["int","∫"],["there4","∴"],["sim","∼"],["cong","≅"],["asymp","≈"],["ne","≠"],["equiv","≡"],["le","≤"],["ge","≥"],["sub","⊂"],["sup","⊃"],["nsub","⊄"],["sube","⊆"],["supe","⊇"],["oplus","⊕"],["otimes","⊗"],["perp","⊥"],["sdot","⋅"],["lceil","⌈"],["rceil","⌉"],["lfloor","⌊"],["rfloor","⌋"],["lang","〈"],["rang","〉"],["loz","◊"],["spades","♠"],["clubs","♣"],["hearts","♥"],["diams","♦"]]);function no(t){const[e,n]=io(t.jsxPragma||"React.createElement"),[i,o]=io(t.jsxFragmentPragma||"React.Fragment");return{base:e,suffix:n,fragmentBase:i,fragmentSuffix:o}}function io(t){let e=t.indexOf(".");return-1===e&&(e=t.length),[t.slice(0,e),t.slice(e)]}class oo{getPrefixCode(){return""}getHoistedCode(){return""}getSuffixCode(){return""}}class ro extends oo{oe(){this.lastLineNumber=1}re(){this.lastIndex=0}se(){this.filenameVarName=null}ae(){this.esmAutomaticImportNameResolutions={}}le(){this.cjsAutomaticModuleNameResolutions={}}constructor(t,e,n,i,o){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.nameManager=i,this.options=o,ro.prototype.oe.call(this),ro.prototype.re.call(this),ro.prototype.se.call(this),ro.prototype.ae.call(this),ro.prototype.le.call(this),this.jsxPragmaInfo=no(o),this.isAutomaticRuntime="automatic"===o.jsxRuntime,this.jsxImportSource=o.jsxImportSource||"react"}process(){return!!this.tokens.matches1(Vn.jsxTagStart)&&(this.processJSXTag(),!0)}getPrefixCode(){let t="";if(this.filenameVarName&&(t+=`const ${this.filenameVarName} = ${JSON.stringify(this.options.filePath||"")};`),this.isAutomaticRuntime)if(this.importProcessor)for(const[e,n]of Object.entries(this.cjsAutomaticModuleNameResolutions))t+=`var ${n} = require("${e}");`;else{const{createElement:e,...n}=this.esmAutomaticImportNameResolutions;e&&(t+=`import {createElement as ${e}} from "${this.jsxImportSource}";`);const i=Object.entries(n).map(([t,e])=>`${t} as ${e}`).join(", ");i&&(t+=`import {${i}} from "${this.jsxImportSource+(this.options.production?"/jsx-runtime":"/jsx-dev-runtime")}";`)}return t}processJSXTag(){const{jsxRole:t,start:e}=this.tokens.currentToken(),n=this.options.production?null:this.getElementLocationCode(e);this.isAutomaticRuntime&&t!==xi.KeyAfterPropSpread?this.transformTagToJSXFunc(n,t):this.transformTagToCreateElement(n)}getElementLocationCode(t){return`lineNumber: ${this.getLineNumberForIndex(t)}`}getLineNumberForIndex(t){const e=this.tokens.code;for(;this.lastIndex<t&&this.lastIndex<e.length;)"\n"===e[this.lastIndex]&&this.lastLineNumber++,this.lastIndex++;return this.lastLineNumber}transformTagToJSXFunc(t,e){const n=e===xi.StaticChildren;this.tokens.replaceToken(this.getJSXFuncInvocationCode(n));let i=null;if(this.tokens.matches1(Vn.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, {`),this.processAutomaticChildrenAndEndProps(e);else{if(this.processTagIntro(),this.tokens.appendCode(", {"),i=this.processProps(!0),this.tokens.matches2(Vn.slash,Vn.jsxTagEnd))this.tokens.appendCode("}");else{if(!this.tokens.matches1(Vn.jsxTagEnd))throw new Error("Expected either /> or > at the end of the tag.");this.tokens.removeToken(),this.processAutomaticChildrenAndEndProps(e)}i&&this.tokens.appendCode(`, ${i}`)}for(this.options.production||(null===i&&this.tokens.appendCode(", void 0"),this.tokens.appendCode(`, ${n}, ${this.getDevSource(t)}, this`)),this.tokens.removeInitialToken();!this.tokens.matches1(Vn.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}transformTagToCreateElement(t){if(this.tokens.replaceToken(this.getCreateElementInvocationCode()),this.tokens.matches1(Vn.jsxTagEnd))this.tokens.replaceToken(`${this.getFragmentCode()}, null`),this.processChildren(!0);else if(this.processTagIntro(),this.processPropsObjectWithDevInfo(t),this.tokens.matches2(Vn.slash,Vn.jsxTagEnd));else{if(!this.tokens.matches1(Vn.jsxTagEnd))throw new Error("Expected either /> or > at the end of the tag.");this.tokens.removeToken(),this.processChildren(!0)}for(this.tokens.removeInitialToken();!this.tokens.matches1(Vn.jsxTagEnd);)this.tokens.removeToken();this.tokens.replaceToken(")")}getJSXFuncInvocationCode(t){return this.options.production?this.claimAutoImportedFuncInvocation(t?"jsxs":"jsx","/jsx-runtime"):this.claimAutoImportedFuncInvocation("jsxDEV","/jsx-dev-runtime")}getCreateElementInvocationCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedFuncInvocation("createElement","");{const{jsxPragmaInfo:t}=this;return`${this.importProcessor&&this.importProcessor.getIdentifierReplacement(t.base)||t.base}${t.suffix}(`}}getFragmentCode(){if(this.isAutomaticRuntime)return this.claimAutoImportedName("Fragment",this.options.production?"/jsx-runtime":"/jsx-dev-runtime");{const{jsxPragmaInfo:t}=this;return(this.importProcessor&&this.importProcessor.getIdentifierReplacement(t.fragmentBase)||t.fragmentBase)+t.fragmentSuffix}}claimAutoImportedFuncInvocation(t,e){const n=this.claimAutoImportedName(t,e);return this.importProcessor?`${n}.call(void 0, `:`${n}(`}claimAutoImportedName(t,e){if(this.importProcessor){const n=this.jsxImportSource+e;return this.cjsAutomaticModuleNameResolutions[n]||(this.cjsAutomaticModuleNameResolutions[n]=this.importProcessor.getFreeIdentifierForPath(n)),`${this.cjsAutomaticModuleNameResolutions[n]}.${t}`}return this.esmAutomaticImportNameResolutions[t]||(this.esmAutomaticImportNameResolutions[t]=this.nameManager.claimFreeName(`_${t}`)),this.esmAutomaticImportNameResolutions[t]}processTagIntro(){let t=this.tokens.currentIndex()+1;for(;this.tokens.tokens[t].isType||!this.tokens.matches2AtIndex(t-1,Vn.jsxName,Vn.jsxName)&&!this.tokens.matches2AtIndex(t-1,Vn.greaterThan,Vn.jsxName)&&!this.tokens.matches1AtIndex(t,Vn.braceL)&&!this.tokens.matches1AtIndex(t,Vn.jsxTagEnd)&&!this.tokens.matches2AtIndex(t,Vn.slash,Vn.jsxTagEnd);)t++;if(t===this.tokens.currentIndex()+1){const t=this.tokens.identifierName();so(t)&&this.tokens.replaceToken(`'${t}'`)}for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken()}processPropsObjectWithDevInfo(t){const e=this.options.production?"":`__self: this, __source: ${this.getDevSource(t)}`;this.tokens.matches1(Vn.jsxName)||this.tokens.matches1(Vn.braceL)?(this.tokens.appendCode(", {"),this.processProps(!1),this.tokens.appendCode(e?` ${e}}`:"}")):this.tokens.appendCode(e?`, {${e}}`:", null")}processProps(t){let e=null;for(;;){if(this.tokens.matches2(Vn.jsxName,Vn.eq)){const n=this.tokens.identifierName();if(t&&"key"===n){null!==e&&this.tokens.appendCode(e.replace(/[^\n]/g,"")),this.tokens.removeToken(),this.tokens.removeToken();const t=this.tokens.snapshot();this.processPropValue(),e=this.tokens.dangerouslyGetAndRemoveCodeSinceSnapshot(t);continue}this.processPropName(n),this.tokens.replaceToken(": "),this.processPropValue()}else if(this.tokens.matches1(Vn.jsxName)){const t=this.tokens.identifierName();this.processPropName(t),this.tokens.appendCode(": true")}else{if(!this.tokens.matches1(Vn.braceL))break;this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")}this.tokens.appendCode(",")}return e}processPropName(t){t.includes("-")?this.tokens.replaceToken(`'${t}'`):this.tokens.copyToken()}processPropValue(){this.tokens.matches1(Vn.braceL)?(this.tokens.replaceToken(""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken("")):this.tokens.matches1(Vn.jsxTagStart)?this.processJSXTag():this.processStringPropValue()}processStringPropValue(){const t=this.tokens.currentToken(),e=this.tokens.code.slice(t.start+1,t.end-1),n=ao(e),i=function(t){let e="";for(let n=0;n<t.length;n++){const i=t[n];if("\n"===i)if(/\s/.test(t[n+1]))for(e+=" ";n<t.length&&/\s/.test(t[n+1]);)n++;else e+="\n";else if("&"===i){const{entity:i,newI:o}=lo(t,n+1);e+=i,n=o-1}else e+=i}return JSON.stringify(e)}(e);this.tokens.replaceToken(i+n)}processAutomaticChildrenAndEndProps(t){t===xi.StaticChildren?(this.tokens.appendCode(" children: ["),this.processChildren(!1),this.tokens.appendCode("]}")):(t===xi.OneChild&&this.tokens.appendCode(" children: "),this.processChildren(!1),this.tokens.appendCode("}"))}processChildren(t){let e=t;for(;;){if(this.tokens.matches2(Vn.jsxTagStart,Vn.slash))return;let t=!1;if(this.tokens.matches1(Vn.braceL))this.tokens.matches2(Vn.braceL,Vn.braceR)?(this.tokens.replaceToken(""),this.tokens.replaceToken("")):(this.tokens.replaceToken(e?", ":""),this.rootTransformer.processBalancedCode(),this.tokens.replaceToken(""),t=!0);else if(this.tokens.matches1(Vn.jsxTagStart))this.tokens.appendCode(e?", ":""),this.processJSXTag(),t=!0;else{if(!this.tokens.matches1(Vn.jsxText)&&!this.tokens.matches1(Vn.jsxEmptyText))throw new Error("Unexpected token when processing JSX children.");t=this.processChildTextElement(e)}t&&(e=!0)}}processChildTextElement(t){const e=this.tokens.currentToken(),n=this.tokens.code.slice(e.start,e.end),i=ao(n),o=function(t){let e="",n="",i=!1,o=!1;for(let r=0;r<t.length;r++){const s=t[r];if(" "===s||"\t"===s||"\r"===s)i||(n+=s);else if("\n"===s)n="",i=!0;else{if(o&&i&&(e+=" "),e+=n,n="","&"===s){const{entity:n,newI:i}=lo(t,r+1);r=i-1,e+=n}else e+=s;o=!0,i=!1}}return i||(e+=n),JSON.stringify(e)}(n);return'""'===o?(this.tokens.replaceToken(i),!1):(this.tokens.replaceToken(`${t?", ":""}${o}${i}`),!0)}getDevSource(t){return`{fileName: ${this.getFilenameVarName()}, ${t}}`}getFilenameVarName(){return this.filenameVarName||(this.filenameVarName=this.nameManager.claimFreeName("_jsxFileName")),this.filenameVarName}}function so(t){const e=t.charCodeAt(0);return e>=Bn.lowercaseA&&e<=Bn.lowercaseZ}function ao(t){let e=0,n=0;for(const i of t)"\n"===i?(e++,n=0):" "===i&&n++;return"\n".repeat(e)+" ".repeat(n)}function lo(t,e){let n,i="",o=0,r=e;if("#"===t[r]){let e,i=10;if(r++,"x"===t[r])for(i=16,r++,e=r;r<t.length&&uo(t.charCodeAt(r));)r++;else for(e=r;r<t.length&&co(t.charCodeAt(r));)r++;if(";"===t[r]){const o=t.slice(e,r);o&&(r++,n=String.fromCodePoint(parseInt(o,i)))}}else for(;r<t.length&&o++<10;){const e=t[r];if(r++,";"===e){n=eo.get(i);break}i+=e}return n?{entity:n,newI:r}:{entity:"&",newI:e}}function co(t){return t>=Bn.digit0&&t<=Bn.digit9}function uo(t){return t>=Bn.digit0&&t<=Bn.digit9||t>=Bn.lowercaseA&&t<=Bn.lowercaseF||t>=Bn.uppercaseA&&t<=Bn.uppercaseF}function po(t,e){const n=no(e),i=new Set;for(let o=0;o<t.tokens.length;o++){const e=t.tokens[o];e.type!==Vn.name||e.isType||e.identifierRole!==ki.Access&&e.identifierRole!==ki.ObjectShorthand&&e.identifierRole!==ki.ExportAccess||e.shadowsGlobal||i.add(t.identifierNameForToken(e)),e.type===Vn.jsxTagStart&&i.add(n.base),e.type===Vn.jsxTagStart&&o+1<t.tokens.length&&t.tokens[o+1].type===Vn.jsxTagEnd&&(i.add(n.base),i.add(n.fragmentBase)),e.type===Vn.jsxName&&e.identifierRole===ki.Access&&(so(t.identifierNameForToken(e))&&t.tokens[o+1].type!==Vn.dot||i.add(t.identifierNameForToken(e)))}return i}class ho{oe(){this.nonTypeIdentifiers=new Set}re(){this.importInfoByPath=new Map}se(){this.importsToReplace=new Map}ae(){this.identifierReplacements=new Map}le(){this.exportBindingsByLocalName=new Map}constructor(t,e,n,i,o,r,s){this.nameManager=t,this.tokens=e,this.enableLegacyTypeScriptModuleInterop=n,this.options=i,this.isTypeScriptTransformEnabled=o,this.keepUnusedImports=r,this.helperManager=s,ho.prototype.oe.call(this),ho.prototype.re.call(this),ho.prototype.se.call(this),ho.prototype.ae.call(this),ho.prototype.le.call(this)}preprocessTokens(){for(let t=0;t<this.tokens.tokens.length;t++)this.tokens.matches1AtIndex(t,Vn.Jt)&&!this.tokens.matches3AtIndex(t,Vn.Jt,Vn.name,Vn.eq)&&this.preprocessImportAtIndex(t),this.tokens.matches1AtIndex(t,Vn.Wt)&&!this.tokens.matches2AtIndex(t,Vn.Wt,Vn.eq)&&this.preprocessExportAtIndex(t);this.generateImportReplacements()}pruneTypeOnlyImports(){this.nonTypeIdentifiers=po(this.tokens,this.options);for(const[t,e]of this.importInfoByPath.entries())e.hasBareImport||e.hasStarExport||e.exportStarNames.length>0||e.namedExports.length>0||[...e.defaultNames,...e.wildcardNames,...e.namedImports.map(({localName:t})=>t)].every(t=>this.shouldAutomaticallyElideImportedName(t))&&this.importsToReplace.set(t,"")}shouldAutomaticallyElideImportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(t)}generateImportReplacements(){for(const[t,e]of this.importInfoByPath.entries()){const{defaultNames:n,wildcardNames:i,namedImports:o,namedExports:r,exportStarNames:s,hasStarExport:a}=e;if(0===n.length&&0===i.length&&0===o.length&&0===r.length&&0===s.length&&!a){this.importsToReplace.set(t,`require('${t}');`);continue}const l=this.getFreeIdentifierForPath(t);let c;c=this.enableLegacyTypeScriptModuleInterop?l:i.length>0?i[0]:this.getFreeIdentifierForPath(t);let d=`var ${l} = require('${t}');`;if(i.length>0)for(const t of i)d+=` var ${t} = ${this.enableLegacyTypeScriptModuleInterop?l:`${this.helperManager.getHelperName("interopRequireWildcard")}(${l})`};`;else s.length>0&&c!==l?d+=` var ${c} = ${this.helperManager.getHelperName("interopRequireWildcard")}(${l});`:n.length>0&&c!==l&&(d+=` var ${c} = ${this.helperManager.getHelperName("interopRequireDefault")}(${l});`);for(const{importedName:t,localName:e}of r)d+=` ${this.helperManager.getHelperName("createNamedExportFrom")}(${l}, '${e}', '${t}');`;for(const t of s)d+=` exports.${t} = ${c};`;a&&(d+=` ${this.helperManager.getHelperName("createStarExport")}(${l});`),this.importsToReplace.set(t,d);for(const t of n)this.identifierReplacements.set(t,`${c}.default`);for(const{importedName:t,localName:e}of o)this.identifierReplacements.set(e,`${l}.${t}`)}}getFreeIdentifierForPath(t){const e=t.split("/"),n=e[e.length-1].replace(/\W/g,"");return this.nameManager.claimFreeName(`_${n}`)}preprocessImportAtIndex(t){const e=[],n=[],i=[];if(t++,(this.tokens.matchesContextualAtIndex(t,zn.bt)||this.tokens.matches1AtIndex(t,Vn.ee))&&!this.tokens.matches1AtIndex(t+1,Vn.comma)&&!this.tokens.matchesContextualAtIndex(t+1,zn.L))return;if(this.tokens.matches1AtIndex(t,Vn.parenL))return;if(this.tokens.matches1AtIndex(t,Vn.name)&&(e.push(this.tokens.identifierNameAtIndex(t)),t++,this.tokens.matches1AtIndex(t,Vn.comma)&&t++),this.tokens.matches1AtIndex(t,Vn.star)&&(n.push(this.tokens.identifierNameAtIndex(t+=2)),t++),this.tokens.matches1AtIndex(t,Vn.braceL)){const n=this.getNamedImports(t+1);t=n.newIndex;for(const t of n.namedImports)"default"===t.importedName?e.push(t.localName):i.push(t)}if(this.tokens.matchesContextualAtIndex(t,zn.L)&&t++,!this.tokens.matches1AtIndex(t,Vn.string))throw new Error("Expected string token at the end of import statement.");const o=this.tokens.stringValueAtIndex(t),r=this.getImportInfo(o);r.defaultNames.push(...e),r.wildcardNames.push(...n),r.namedImports.push(...i),0===e.length&&0===n.length&&0===i.length&&(r.hasBareImport=!0)}preprocessExportAtIndex(t){if(this.tokens.matches2AtIndex(t,Vn.Wt,Vn.Nt)||this.tokens.matches2AtIndex(t,Vn.Wt,Vn.Mt)||this.tokens.matches2AtIndex(t,Vn.Wt,Vn.Lt))this.preprocessVarExportAtIndex(t);else if(this.tokens.matches2AtIndex(t,Vn.Wt,Vn.Rt)||this.tokens.matches2AtIndex(t,Vn.Wt,Vn.Ut)){const e=this.tokens.identifierNameAtIndex(t+2);this.addExportBinding(e,e)}else if(this.tokens.matches3AtIndex(t,Vn.Wt,Vn.name,Vn.Rt)){const e=this.tokens.identifierNameAtIndex(t+3);this.addExportBinding(e,e)}else this.tokens.matches2AtIndex(t,Vn.Wt,Vn.braceL)?this.preprocessNamedExportAtIndex(t):this.tokens.matches2AtIndex(t,Vn.Wt,Vn.star)&&this.preprocessExportStarAtIndex(t)}preprocessVarExportAtIndex(t){let e=0;for(let n=t+2;;n++)if(this.tokens.matches1AtIndex(n,Vn.braceL)||this.tokens.matches1AtIndex(n,Vn.dollarBraceL)||this.tokens.matches1AtIndex(n,Vn.bracketL))e++;else if(this.tokens.matches1AtIndex(n,Vn.braceR)||this.tokens.matches1AtIndex(n,Vn.bracketR))e--;else{if(0===e&&!this.tokens.matches1AtIndex(n,Vn.name))break;if(this.tokens.matches1AtIndex(1,Vn.eq)){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");n=t-1}else if(wi(this.tokens.tokens[n])){const t=this.tokens.identifierNameAtIndex(n);this.identifierReplacements.set(t,`exports.${t}`)}}}preprocessNamedExportAtIndex(t){t+=2;const{newIndex:e,namedImports:n}=this.getNamedImports(t);if(!this.tokens.matchesContextualAtIndex(t=e,zn.L)){for(const{importedName:t,localName:e}of n)this.addExportBinding(t,e);return}if(t++,!this.tokens.matches1AtIndex(t,Vn.string))throw new Error("Expected string token at the end of import statement.");const i=this.tokens.stringValueAtIndex(t);this.getImportInfo(i).namedExports.push(...n)}preprocessExportStarAtIndex(t){let e=null;if(this.tokens.matches3AtIndex(t,Vn.Wt,Vn.star,Vn.T)?(e=this.tokens.identifierNameAtIndex(t+=3),t+=2):t+=3,!this.tokens.matches1AtIndex(t,Vn.string))throw new Error("Expected string token at the end of star export statement.");const n=this.tokens.stringValueAtIndex(t),i=this.getImportInfo(n);null!==e?i.exportStarNames.push(e):i.hasStarExport=!0}getNamedImports(t){const e=[];for(;;){if(this.tokens.matches1AtIndex(t,Vn.braceR)){t++;break}const n=Qi(this.tokens,t);if(t=n.endIndex,n.isType||e.push({importedName:n.leftName,localName:n.rightName}),this.tokens.matches2AtIndex(t,Vn.comma,Vn.braceR)){t+=2;break}if(this.tokens.matches1AtIndex(t,Vn.braceR)){t++;break}if(!this.tokens.matches1AtIndex(t,Vn.comma))throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.tokens[t])}`);t++}return{newIndex:t,namedImports:e}}getImportInfo(t){const e=this.importInfoByPath.get(t);if(e)return e;const n={defaultNames:[],wildcardNames:[],namedImports:[],namedExports:[],hasBareImport:!1,exportStarNames:[],hasStarExport:!1};return this.importInfoByPath.set(t,n),n}addExportBinding(t,e){this.exportBindingsByLocalName.has(t)||this.exportBindingsByLocalName.set(t,[]),this.exportBindingsByLocalName.get(t).push(e)}claimImportCode(t){const e=this.importsToReplace.get(t);return this.importsToReplace.set(t,""),e||""}getIdentifierReplacement(t){return this.identifierReplacements.get(t)||null}resolveExportBinding(t){const e=this.exportBindingsByLocalName.get(t);return e&&0!==e.length?e.map(t=>`exports.${t}`).join(" = "):null}getGlobalNames(){return new Set([...this.identifierReplacements.keys(),...this.exportBindingsByLocalName.keys()])}}var fo=",".charCodeAt(0),mo=";".charCodeAt(0),go=new Uint8Array(64),vo=new Uint8Array(128);for(let Xc=0;Xc<64;Xc++){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charCodeAt(Xc);go[Xc]=t,vo[t]=Xc}function bo(t,e,n){let i=e-n;i=i<0?-i<<1|1:i<<1;do{let e=31&i;i>>>=5,i>0&&(e|=32),t.write(go[e])}while(i>0);return e}var yo,ko="undefined"!=typeof TextDecoder?new TextDecoder:"undefined"!=typeof Buffer?{decode:t=>Buffer.from(t.buffer,t.byteOffset,t.byteLength).toString()}:{decode(t){let e="";for(let n=0;n<t.length;n++)e+=String.fromCharCode(t[n]);return e}},xo=class{constructor(){this.pos=0,this.out="",this.buffer=new Uint8Array(16384)}write(t){const{buffer:e}=this;e[this.pos++]=t,16384===this.pos&&(this.out+=ko.decode(e),this.pos=0)}flush(){const{buffer:t,out:e,pos:n}=this;return n>0?e+ko.decode(t.subarray(0,n)):e}};function wo(t){const e=new xo;let n=0,i=0,o=0,r=0;for(let s=0;s<t.length;s++){const a=t[s];if(s>0&&e.write(mo),0===a.length)continue;let l=0;for(let t=0;t<a.length;t++){const s=a[t];t>0&&e.write(fo),l=bo(e,s[0],l),1!==s.length&&(n=bo(e,s[1],n),i=bo(e,s[2],i),o=bo(e,s[3],o),4!==s.length&&(r=bo(e,s[4],r)))}}return e.flush()}yo||(yo=1);var $o=class{constructor(){this.ve={__proto__:null},this.array=[]}},So=class{constructor({file:t,sourceRoot:e}={}){this.be=new $o,this.ye=new $o,this.ke=[],this.xe=[],this.file=t,this.sourceRoot=e,this.we=new $o}},Ao=(t,e,n,i,o,r,s,a)=>function(t,e,n,i,o,r,s){const{xe:a,ye:l,ke:c}=e,d=function(t,e){for(let n=t.length;n<=e;n++)t[n]=[];return t[e]}(a,n),u=function(t,e){let n=t.length;for(let i=n-1;i>=0&&!(e>=t[i][0]);n=i--);return n}(d,i);if(!o){if(function(t,e){return 0===e||1===t[e-1].length}(d,u))return;return Eo(d,u,[i])}const p=function(t,e){const n=function(t,e){return t.ve[e]}(t,e);if(void 0!==n)return n;const{array:i,ve:o}=t,r=i.push(e);return o[e]=r-1}(l,o);if(p===c.length&&(c[p]=null),!function(t,e,n,i,o){if(0===e)return!1;const r=t[e-1];return 1!==r.length&&n===r[1]&&i===r[2]&&o===r[3]&&-1===(5===r.length?r[4]:-1)}(d,u,p,r,s))return Eo(d,u,[i,p,r,s])}(0,t,e,n,i,o,r);function Eo(t,e,n){for(let i=t.length;i>e;i--)t[i]=t[i-1];t[e]=n}function Co({code:t,mappings:e},n,i,o,r){const s=function(t,e){const n=new Array(e.length);let i=0,o=e[i].start,r=0;for(let s=0;s<t.length;s++)s===o&&(n[i]=o-r,i++,o=e[i].start),t.charCodeAt(s)===Bn.lineFeed&&(r=s+1);return n}(o,r),a=new So({file:i.compiledFilename});let l=0,c=e[0];for(;void 0===c&&l<e.length-1;)l++,c=e[l];let d=0,u=0;c!==u&&Ao(a,d,0,n,d,0);for(let m=0;m<t.length;m++){if(m===c)for(Ao(a,d,c-u,n,d,s[l]);(c===m||void 0===c)&&l<e.length-1;)l++,c=e[l];t.charCodeAt(m)===Bn.lineFeed&&(d++,u=m+1,c!==u&&Ao(a,d,0,n,d,0))}const{sourceRoot:p,sourcesContent:h,...f}=function(t){const e=function(t){const{xe:e,ye:n,ke:i,be:o,we:r}=t;return function(t){const{length:e}=t;let n=e;for(let i=n-1;i>=0&&!(t[i].length>0);n=i,i--);n<e&&(t.length=n)}(e),{version:3,file:t.file||void 0,names:o.array,sourceRoot:t.sourceRoot||void 0,sources:n.array,sourcesContent:i,mappings:e,ignoreList:r.array}}(t);return Object.assign({},e,{mappings:wo(e.mappings)})}(a);return f}const _o={require:'\n    import {createRequire as CREATE_REQUIRE_NAME} from "module";\n    const require = CREATE_REQUIRE_NAME(import.meta.url);\n  ',interopRequireWildcard:"\n    function interopRequireWildcard(obj) {\n      if (obj && obj.__esModule) {\n        return obj;\n      } else {\n        var newObj = {};\n        if (obj != null) {\n          for (var key in obj) {\n            if (Object.prototype.hasOwnProperty.call(obj, key)) {\n              newObj[key] = obj[key];\n            }\n          }\n        }\n        newObj.default = obj;\n        return newObj;\n      }\n    }\n  ",interopRequireDefault:"\n    function interopRequireDefault(obj) {\n      return obj && obj.__esModule ? obj : { default: obj };\n    }\n  ",createNamedExportFrom:"\n    function createNamedExportFrom(obj, localName, importedName) {\n      Object.defineProperty(exports, localName, {enumerable: true, configurable: true, get: () => obj[importedName]});\n    }\n  ",createStarExport:'\n    function createStarExport(obj) {\n      Object.keys(obj)\n        .filter((key) => key !== "default" && key !== "__esModule")\n        .forEach((key) => {\n          if (exports.hasOwnProperty(key)) {\n            return;\n          }\n          Object.defineProperty(exports, key, {enumerable: true, configurable: true, get: () => obj[key]});\n        });\n    }\n  ',nullishCoalesce:"\n    function nullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return rhsFn();\n      }\n    }\n  ",asyncNullishCoalesce:"\n    async function asyncNullishCoalesce(lhs, rhsFn) {\n      if (lhs != null) {\n        return lhs;\n      } else {\n        return await rhsFn();\n      }\n    }\n  ",optionalChain:"\n    function optionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",asyncOptionalChain:"\n    async function asyncOptionalChain(ops) {\n      let lastAccessLHS = undefined;\n      let value = ops[0];\n      let i = 1;\n      while (i < ops.length) {\n        const op = ops[i];\n        const fn = ops[i + 1];\n        i += 2;\n        if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) {\n          return undefined;\n        }\n        if (op === 'access' || op === 'optionalAccess') {\n          lastAccessLHS = value;\n          value = await fn(value);\n        } else if (op === 'call' || op === 'optionalCall') {\n          value = await fn((...args) => value.call(lastAccessLHS, ...args));\n          lastAccessLHS = undefined;\n        }\n      }\n      return value;\n    }\n  ",optionalChainDelete:"\n    function optionalChainDelete(ops) {\n      const result = OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  ",asyncOptionalChainDelete:"\n    async function asyncOptionalChainDelete(ops) {\n      const result = await ASYNC_OPTIONAL_CHAIN_NAME(ops);\n      return result == null ? true : result;\n    }\n  "};class To{oe(){this.helperNames={}}re(){this.createRequireName=null}constructor(t){this.nameManager=t,To.prototype.oe.call(this),To.prototype.re.call(this)}getHelperName(t){let e=this.helperNames[t];return e||(e=this.nameManager.claimFreeName(`_${t}`),this.helperNames[t]=e,e)}emitHelpers(){let t="";this.helperNames.optionalChainDelete&&this.getHelperName("optionalChain"),this.helperNames.asyncOptionalChainDelete&&this.getHelperName("asyncOptionalChain");for(const[e,n]of Object.entries(_o)){const i=this.helperNames[e];let o=n;"optionalChainDelete"===e?o=o.replace("OPTIONAL_CHAIN_NAME",this.helperNames.optionalChain):"asyncOptionalChainDelete"===e?o=o.replace("ASYNC_OPTIONAL_CHAIN_NAME",this.helperNames.asyncOptionalChain):"require"===e&&(null===this.createRequireName&&(this.createRequireName=this.nameManager.claimFreeName("_createRequire")),o=o.replace(/CREATE_REQUIRE_NAME/g,this.createRequireName)),i&&(t+=" ",t+=o.replace(e,i).replace(/\s+/g," ").trim())}return t}}function Fo(t,e,n){(function(t,e){for(const n of t.tokens)if(n.type===Vn.name&&!n.isType&&$i(n)&&e.has(t.identifierNameForToken(n)))return!0;return!1})(t,n)&&function(t,e,n){const i=[];let o=e.length-1;for(let r=t.tokens.length-1;;r--){for(;i.length>0&&i[i.length-1].startTokenIndex===r+1;)i.pop();for(;o>=0&&e[o].endTokenIndex===r+1;)i.push(e[o]),o--;if(r<0)break;const s=t.tokens[r],a=t.identifierNameForToken(s);if(i.length>1&&!s.isType&&s.type===Vn.name&&n.has(a))if(Ai(s))Ro(i[i.length-1],t,a);else if(Ei(s)){let e=i.length-1;for(;e>0&&!i[e].isFunctionScope;)e--;if(e<0)throw new Error("Did not find parent function scope.");Ro(i[e],t,a)}}if(i.length>0)throw new Error("Expected empty scope stack after processing file.")}(t,e,n)}function Ro(t,e,n){for(let i=t.startTokenIndex;i<t.endTokenIndex;i++){const t=e.tokens[i];t.type!==Vn.name&&t.type!==Vn.jsxName||e.identifierNameForToken(t)!==n||(t.shadowsGlobal=!0)}}class Io{oe(){this.usedNames=new Set}constructor(t,e){Io.prototype.oe.call(this),this.usedNames=new Set(function(t,e){const n=[];for(const i of e)i.type===Vn.name&&n.push(t.slice(i.start,i.end));return n}(t,e))}claimFreeName(t){const e=this.findFreeName(t);return this.usedNames.add(e),e}findFreeName(t){if(!this.usedNames.has(t))return t;let e=2;for(;this.usedNames.has(t+String(e));)e++;return t+String(e)}}var Oo,jo,Po,Do={},No={},Mo={};function Lo(){if(Oo)return Mo;Oo=1;var t,e=Mo&&Mo.$e||(t=function(e,n){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},t(e,n)},function(e,n){function i(){this.constructor=e}t(e,n),e.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(Mo,"S",{value:!0}),Mo.DetailContext=Mo.NoopContext=Mo.VError=void 0;var n=function(t){function n(e,i){var o=t.call(this,i)||this;return o.path=e,Object.setPrototypeOf(o,n.prototype),o}return e(n,t),n}(Error);Mo.VError=n;var i=function(){function t(){}return t.prototype.fail=function(t,e,n){return!1},t.prototype.unionResolver=function(){return this},t.prototype.createContext=function(){return this},t.prototype.resolveUnion=function(t){},t}();Mo.NoopContext=i;var o=function(){function t(){this.Se=[""],this.Ae=[null],this.Ee=0}return t.prototype.fail=function(t,e,n){return this.Se.push(t),this.Ae.push(e),this.Ee+=n,!1},t.prototype.unionResolver=function(){return new r},t.prototype.resolveUnion=function(t){for(var e,n,i=null,o=0,r=t.contexts;o<r.length;o++){var s=r[o];(!i||s.Ee>=i.Ee)&&(i=s)}i&&i.Ee>0&&((e=this.Se).push.apply(e,i.Se),(n=this.Ae).push.apply(n,i.Ae))},t.prototype.getError=function(t){for(var e=[],i=this.Se.length-1;i>=0;i--){var o=this.Se[i];t+="number"==typeof o?"["+o+"]":o?"."+o:"";var r=this.Ae[i];r&&e.push(t+" "+r)}return new n(t,e.join("; "))},t.prototype.getErrorDetail=function(t){for(var e=[],n=this.Se.length-1;n>=0;n--){var i=this.Se[n];t+="number"==typeof i?"["+i+"]":i?"."+i:"";var o=this.Ae[n];o&&e.push({path:t,message:o})}var r=null;for(n=e.length-1;n>=0;n--)r&&(e[n].nested=[r]),r=e[n];return r},t}();Mo.DetailContext=o;var r=function(){function t(){this.contexts=[]}return t.prototype.createContext=function(){var t=new o;return this.contexts.push(t),t},t}();return Mo}function zo(){return jo||(jo=1,function(t){var e,n=No&&No.$e||(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])},e(t,n)},function(t,n){function i(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(i.prototype=n.prototype,new i)});Object.defineProperty(t,"S",{value:!0}),t.basicTypes=t.BasicType=t.TParamList=t.TParam=t.param=t.TFunc=t.func=t.TProp=t.TOptional=t.opt=t.TIface=t.iface=t.TEnumLiteral=t.enumlit=t.TEnumType=t.enumtype=t.TIntersection=t.intersection=t.TUnion=t.union=t.TTuple=t.tuple=t.TArray=t.array=t.TLiteral=t.lit=t.TName=t.name=t.TType=void 0;var i=Lo(),o=function(){};function r(t){return"string"==typeof t?a(t):t}function s(t,e){var n=t[e];if(!n)throw new Error("Unknown type "+e);return n}function a(t){return new l(t)}t.TType=o,t.name=a;var l=function(t){function e(e){var n=t.call(this)||this;return n.name=e,n.Ce="is not a "+e,n}return n(e,t),e.prototype.getChecker=function(t,n,i){var o=this,r=s(t,this.name),a=r.getChecker(t,n,i);return r instanceof w||r instanceof e?a:function(t,e){return!!a(t,e)||e.fail(null,o.Ce,0)}},e}(o);t.TName=l,t.lit=function(t){return new c(t)};var c=function(t){function e(e){var n=t.call(this)||this;return n.value=e,n.name=JSON.stringify(e),n.Ce="is not "+n.name,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return t===n.value||e.fail(null,n.Ce,-1)}},e}(o);t.TLiteral=c,t.array=function(t){return new d(r(t))};var d=function(t){function e(e){var n=t.call(this)||this;return n.ttype=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttype.getChecker(t,e);return function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<t.length;i++)if(!n(t[i],e))return e.fail(i,null,1);return!0}},e}(o);t.TArray=d,t.tuple=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new u(t.map(function(t){return r(t)}))};var u=function(t){function e(e){var n=t.call(this)||this;return n.ttypes=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttypes.map(function(n){return n.getChecker(t,e)}),i=function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<n.length;i++)if(!n[i](t[i],e))return e.fail(i,null,1);return!0};return e?function(t,e){return!!i(t,e)&&(t.length<=n.length||e.fail(n.length,"is extraneous",2))}:i},e}(o);t.TTuple=u,t.union=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new p(t.map(function(t){return r(t)}))};var p=function(t){function e(e){var n=t.call(this)||this;n.ttypes=e;var i=e.map(function(t){return t instanceof l||t instanceof c?t.name:null}).filter(function(t){return t}),o=e.length-i.length;return i.length?(o>0&&i.push(o+" more"),n.Ce="is none of "+i.join(", ")):n.Ce="is none of "+o+" types",n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,i=this.ttypes.map(function(n){return n.getChecker(t,e)});return function(t,e){for(var o=e.unionResolver(),r=0;r<i.length;r++)if(i[r](t,o.createContext()))return!0;return e.resolveUnion(o),e.fail(null,n.Ce,0)}},e}(o);t.TUnion=p,t.intersection=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];return new h(t.map(function(t){return r(t)}))};var h=function(t){function e(e){var n=t.call(this)||this;return n.ttypes=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=new Set,i=this.ttypes.map(function(i){return i.getChecker(t,e,n)});return function(t,e){return!!i.every(function(n){return n(t,e)})||e.fail(null,null,0)}},e}(o);t.TIntersection=h,t.enumtype=function(t){return new f(t)};var f=function(t){function e(e){var n=t.call(this)||this;return n.members=e,n.validValues=new Set,n.Ce="is not a valid enum value",n.validValues=new Set(Object.keys(e).map(function(t){return e[t]})),n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return!!n.validValues.has(t)||e.fail(null,n.Ce,0)}},e}(o);t.TEnumType=f,t.enumlit=function(t,e){return new m(t,e)};var m=function(t){function e(e,n){var i=t.call(this)||this;return i.enumName=e,i.prop=n,i.Ce="is not "+e+"."+n,i}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,i=s(t,this.enumName);if(!(i instanceof f))throw new Error("Type "+this.enumName+" used in enumlit is not an enum type");var o=i.members[this.prop];if(!i.members.hasOwnProperty(this.prop))throw new Error("Unknown value "+this.enumName+"."+this.prop+" used in enumlit");return function(t,e){return t===o||e.fail(null,n.Ce,-1)}},e}(o);t.TEnumLiteral=m,t.iface=function(t,e){return new g(t,function(t){return Object.keys(t).map(function(e){return function(t,e){return e instanceof v?new b(t,e.ttype,!0):new b(t,r(e),!1)}(e,t[e])})}(e))};var g=function(t){function e(e,n){var i=t.call(this)||this;return i.bases=e,i.props=n,i.propSet=new Set(n.map(function(t){return t.name})),i}return n(e,t),e.prototype.getChecker=function(t,e,n){var o=this,r=this.bases.map(function(n){return s(t,n).getChecker(t,e)}),a=this.props.map(function(n){return n.ttype.getChecker(t,e)}),l=new i.NoopContext,c=this.props.map(function(t,e){return!t.isOpt&&!a[e](void 0,l)}),d=function(t,e){if("object"!=typeof t||null===t)return e.fail(null,"is not an object",0);for(var n=0;n<r.length;n++)if(!r[n](t,e))return!1;for(n=0;n<a.length;n++){var i=o.props[n].name,s=t[i];if(void 0===s){if(c[n])return e.fail(i,"is missing",1)}else if(!a[n](s,e))return e.fail(i,null,1)}return!0};if(!e)return d;var u=this.propSet;return n&&(this.propSet.forEach(function(t){return n.add(t)}),u=n),function(t,e){if(!d(t,e))return!1;for(var n in t)if(!u.has(n))return e.fail(n,"is extraneous",2);return!0}},e}(o);t.TIface=g,t.opt=function(t){return new v(r(t))};var v=function(t){function e(e){var n=t.call(this)||this;return n.ttype=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this.ttype.getChecker(t,e);return function(t,e){return void 0===t||n(t,e)}},e}(o);t.TOptional=v;var b=function(t,e,n){this.name=t,this.ttype=e,this.isOpt=n};t.TProp=b,t.func=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];return new y(new x(e),r(t))};var y=function(t){function e(e,n){var i=t.call(this)||this;return i.paramList=e,i.result=n,i}return n(e,t),e.prototype.getChecker=function(t,e){return function(t,e){return"function"==typeof t||e.fail(null,"is not a function",0)}},e}(o);t.TFunc=y,t.param=function(t,e,n){return new k(t,r(e),Boolean(n))};var k=function(t,e,n){this.name=t,this.ttype=e,this.isOpt=n};t.TParam=k;var x=function(t){function e(e){var n=t.call(this)||this;return n.params=e,n}return n(e,t),e.prototype.getChecker=function(t,e){var n=this,o=this.params.map(function(n){return n.ttype.getChecker(t,e)}),r=new i.NoopContext,s=this.params.map(function(t,e){return!t.isOpt&&!o[e](void 0,r)}),a=function(t,e){if(!Array.isArray(t))return e.fail(null,"is not an array",0);for(var i=0;i<o.length;i++){var r=n.params[i];if(void 0===t[i]){if(s[i])return e.fail(r.name,"is missing",1)}else if(!o[i](t[i],e))return e.fail(r.name,null,1)}return!0};return e?function(t,e){return!!a(t,e)&&(t.length<=o.length||e.fail(o.length,"is extraneous",2))}:a},e}(o);t.TParamList=x;var w=function(t){function e(e,n){var i=t.call(this)||this;return i.validator=e,i.message=n,i}return n(e,t),e.prototype.getChecker=function(t,e){var n=this;return function(t,e){return!!n.validator(t)||e.fail(null,n.message,0)}},e}(o);t.BasicType=w,t.basicTypes={any:new w(function(t){return!0},"is invalid"),number:new w(function(t){return"number"==typeof t},"is not a number"),object:new w(function(t){return"object"==typeof t&&t},"is not an object"),boolean:new w(function(t){return"boolean"==typeof t},"is not a boolean"),string:new w(function(t){return"string"==typeof t},"is not a string"),symbol:new w(function(t){return"symbol"==typeof t},"is not a symbol"),void:new w(function(t){return null==t},"is not void"),undefined:new w(function(t){return void 0===t},"is not undefined"),null:new w(function(t){return null===t},"is not null"),never:new w(function(t){return!1},"is unexpected"),Date:new w(S("[object Date]"),"is not a Date"),RegExp:new w(S("[object RegExp]"),"is not a RegExp")};var $=Object.prototype.toString;function S(t){return function(e){return"object"==typeof e&&e&&$.call(e)===t}}"undefined"!=typeof Buffer&&(t.basicTypes.Buffer=new w(function(t){return Buffer.isBuffer(t)},"is not a Buffer"));for(var A=function(e){t.basicTypes[e.name]=new w(function(t){return t instanceof e},"is not a "+e.name)},E=0,C=[Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,ArrayBuffer];E<C.length;E++)A(C[E])}(No)),No}var Vo=(Po||(Po=1,function(t){var e=Do&&Do._e||function(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var i=Array(t),o=0;for(e=0;e<n;e++)for(var r=arguments[e],s=0,a=r.length;s<a;s++,o++)i[o]=r[s];return i};Object.defineProperty(t,"S",{value:!0}),t.Checker=t.createCheckers=void 0;var n=zo(),i=Lo(),o=zo();Object.defineProperty(t,"TArray",{enumerable:!0,get:function(){return o.TArray}}),Object.defineProperty(t,"TEnumType",{enumerable:!0,get:function(){return o.TEnumType}}),Object.defineProperty(t,"TEnumLiteral",{enumerable:!0,get:function(){return o.TEnumLiteral}}),Object.defineProperty(t,"TFunc",{enumerable:!0,get:function(){return o.TFunc}}),Object.defineProperty(t,"TIface",{enumerable:!0,get:function(){return o.TIface}}),Object.defineProperty(t,"TLiteral",{enumerable:!0,get:function(){return o.TLiteral}}),Object.defineProperty(t,"TName",{enumerable:!0,get:function(){return o.TName}}),Object.defineProperty(t,"TOptional",{enumerable:!0,get:function(){return o.TOptional}}),Object.defineProperty(t,"TParam",{enumerable:!0,get:function(){return o.TParam}}),Object.defineProperty(t,"TParamList",{enumerable:!0,get:function(){return o.TParamList}}),Object.defineProperty(t,"TProp",{enumerable:!0,get:function(){return o.TProp}}),Object.defineProperty(t,"TTuple",{enumerable:!0,get:function(){return o.TTuple}}),Object.defineProperty(t,"TType",{enumerable:!0,get:function(){return o.TType}}),Object.defineProperty(t,"TUnion",{enumerable:!0,get:function(){return o.TUnion}}),Object.defineProperty(t,"TIntersection",{enumerable:!0,get:function(){return o.TIntersection}}),Object.defineProperty(t,"array",{enumerable:!0,get:function(){return o.array}}),Object.defineProperty(t,"enumlit",{enumerable:!0,get:function(){return o.enumlit}}),Object.defineProperty(t,"enumtype",{enumerable:!0,get:function(){return o.enumtype}}),Object.defineProperty(t,"func",{enumerable:!0,get:function(){return o.func}}),Object.defineProperty(t,"iface",{enumerable:!0,get:function(){return o.iface}}),Object.defineProperty(t,"lit",{enumerable:!0,get:function(){return o.lit}}),Object.defineProperty(t,"name",{enumerable:!0,get:function(){return o.name}}),Object.defineProperty(t,"opt",{enumerable:!0,get:function(){return o.opt}}),Object.defineProperty(t,"param",{enumerable:!0,get:function(){return o.param}}),Object.defineProperty(t,"tuple",{enumerable:!0,get:function(){return o.tuple}}),Object.defineProperty(t,"union",{enumerable:!0,get:function(){return o.union}}),Object.defineProperty(t,"intersection",{enumerable:!0,get:function(){return o.intersection}}),Object.defineProperty(t,"BasicType",{enumerable:!0,get:function(){return o.BasicType}});var r=Lo();Object.defineProperty(t,"VError",{enumerable:!0,get:function(){return r.VError}}),t.createCheckers=function(){for(var t=[],i=0;i<arguments.length;i++)t[i]=arguments[i];for(var o=Object.assign.apply(Object,e([{},n.basicTypes],t)),r={},a=0,l=t;a<l.length;a++)for(var c=l[a],d=0,u=Object.keys(c);d<u.length;d++){var p=u[d];r[p]=new s(o,c[p])}return r};var s=function(){function t(t,e,i){if(void 0===i&&(i="value"),this.suite=t,this.ttype=e,this.Te=i,this.props=new Map,e instanceof n.TIface)for(var o=0,r=e.props;o<r.length;o++){var s=r[o];this.props.set(s.name,s.ttype)}this.checkerPlain=this.ttype.getChecker(t,!1),this.checkerStrict=this.ttype.getChecker(t,!0)}return t.prototype.setReportedPath=function(t){this.Te=t},t.prototype.check=function(t){return this.Fe(this.checkerPlain,t)},t.prototype.test=function(t){return this.checkerPlain(t,new i.NoopContext)},t.prototype.validate=function(t){return this.Re(this.checkerPlain,t)},t.prototype.strictCheck=function(t){return this.Fe(this.checkerStrict,t)},t.prototype.strictTest=function(t){return this.checkerStrict(t,new i.NoopContext)},t.prototype.strictValidate=function(t){return this.Re(this.checkerStrict,t)},t.prototype.getProp=function(e){var n=this.props.get(e);if(!n)throw new Error("Type has no property "+e);return new t(this.suite,n,this.Te+"."+e)},t.prototype.methodArgs=function(e){var n=this.Ie(e);return new t(this.suite,n.paramList)},t.prototype.methodResult=function(e){var n=this.Ie(e);return new t(this.suite,n.result)},t.prototype.getArgs=function(){if(!(this.ttype instanceof n.TFunc))throw new Error("getArgs() applied to non-function");return new t(this.suite,this.ttype.paramList)},t.prototype.getResult=function(){if(!(this.ttype instanceof n.TFunc))throw new Error("getResult() applied to non-function");return new t(this.suite,this.ttype.result)},t.prototype.getType=function(){return this.ttype},t.prototype.Fe=function(t,e){if(!t(e,new i.NoopContext)){var n=new i.DetailContext;throw t(e,n),n.getError(this.Te)}},t.prototype.Re=function(t,e){if(t(e,new i.NoopContext))return null;var n=new i.DetailContext;return t(e,n),n.getErrorDetail(this.Te)},t.prototype.Ie=function(t){var e=this.props.get(t);if(!e)throw new Error("Type has no property "+t);if(!(e instanceof n.TFunc))throw new Error("Property "+t+" is not a method");return e},t}();t.Checker=s}(Do)),Do);const Bo={Transform:Vo.union(Vo.lit("jsx"),Vo.lit("typescript"),Vo.lit("flow"),Vo.lit("imports"),Vo.lit("react-hot-loader"),Vo.lit("jest")),SourceMapOptions:Vo.iface([],{compiledFilename:"string"}),Options:Vo.iface([],{transforms:Vo.array("Transform"),disableESTransforms:Vo.opt("boolean"),jsxRuntime:Vo.opt(Vo.union(Vo.lit("classic"),Vo.lit("automatic"),Vo.lit("preserve"))),production:Vo.opt("boolean"),jsxImportSource:Vo.opt("string"),jsxPragma:Vo.opt("string"),jsxFragmentPragma:Vo.opt("string"),keepUnusedImports:Vo.opt("boolean"),preserveDynamicImport:Vo.opt("boolean"),injectCreateRequireForImportRequire:Vo.opt("boolean"),enableLegacyTypeScriptModuleInterop:Vo.opt("boolean"),enableLegacyBabel5ModuleInterop:Vo.opt("boolean"),sourceMapOptions:Vo.opt("SourceMapOptions"),filePath:Vo.opt("string")})},{Options:Ho}=Vo.createCheckers(Bo);function qo(){Ti(),Zr(!1)}function Uo(t){Ti(),Yo(t)}function Go(t){_s(),Jo(t)}function Wo(){_s(),Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ImportDeclaration}function Jo(t){let e;e=0===Yn.scopeDepth?ki.TopLevelDeclaration:t?ki.BlockScopedDeclaration:ki.FunctionScopedDeclaration,Yn.tokens[Yn.tokens.length-1].identifierRole=e}function Yo(t){switch(Yn.type){case Vn.Ht:{const t=Ri(0);return Ti(),void Ii(t)}case Vn.Yt:case Vn.name:return Yn.type=Vn.name,void Go(t);case Vn.bracketL:return Ti(),void Ko(Vn.bracketR,t,!0);case Vn.braceL:return void ys(!0,t);default:pi()}}function Ko(t,e,n=!1,i=!1,o=0){let r=!0,s=!1;const a=Yn.tokens.length;for(;!Oi(t)&&!Yn.error;)if(r?r=!1:(ui(Vn.comma),Yn.tokens[Yn.tokens.length-1].contextId=o,!s&&Yn.tokens[a].isType&&(Yn.tokens[Yn.tokens.length-1].isType=!0,s=!0)),n&&Pi(Vn.comma));else{if(Oi(t))break;if(Pi(Vn.ellipsis)){Uo(e),Zo(),Oi(Vn.comma),ui(t);break}Xo(i,e)}}function Xo(t,e){t&&nr([zn.lt,zn.ot,zn.it,zn.ct,zn.nt]),Qo(e),Zo(),Qo(e,!0)}function Zo(){Jn?function(){const t=Ri(0);Oi(Vn.question),Pi(Vn.colon)&&oa(),Ii(t)}():Wn&&function(){const t=Ri(0);Oi(Vn.question),wr(),Ii(t)}()}function Qo(t,e=!1){if(e||Yo(t),!Oi(Vn.eq))return;const n=Yn.tokens.length-1;Zr(),Yn.tokens[n].rhsEndIndex=Yn.tokens.length}function tr(){return Pi(Vn.name)}function er(){const t=Yn.snapshot();return Ti(),!(!(Pi(Vn.bracketL)||Pi(Vn.braceL)||Pi(Vn.star)||Pi(Vn.ellipsis)||Pi(Vn.hash)||Pi(Vn.name)||Boolean(Yn.type&Vn.IS_KEYWORD)||Pi(Vn.string)||Pi(Vn.num)||Pi(Vn.bigint)||Pi(Vn.decimal))||ai())||(Yn.restoreFromSnapshot(t),!1)}function nr(t){for(;null!==ir(t););}function ir(t){if(!Pi(Vn.name))return null;const e=Yn.contextualKeyword;if(-1!==t.indexOf(e)&&er()){switch(e){case zn.ct:Yn.tokens[Yn.tokens.length-1].type=Vn.ct;break;case zn.C:Yn.tokens[Yn.tokens.length-1].type=Vn.C;break;case zn.gt:Yn.tokens[Yn.tokens.length-1].type=Vn.gt;break;case zn.lt:Yn.tokens[Yn.tokens.length-1].type=Vn.lt;break;case zn.it:Yn.tokens[Yn.tokens.length-1].type=Vn.it;break;case zn.ot:Yn.tokens[Yn.tokens.length-1].type=Vn.ot;break;case zn.nt:Yn.tokens[Yn.tokens.length-1].type=Vn.nt;break;case zn.D:Yn.tokens[Yn.tokens.length-1].type=Vn.D}return e}return null}function or(){for(_s();Oi(Vn.dot);)_s()}function rr(){ui(Vn.Jt),ui(Vn.parenL),ui(Vn.string),ui(Vn.parenR),Oi(Vn.dot)&&or(),Pi(Vn.lessThan)&&Mr()}function sr(){Oi(Vn.Lt);const t=Oi(Vn.Qt),e=oi(zn.et);Oi(Vn.Lt),!t&&!e||Pi(Vn.name)?_s():Yn.tokens[Yn.tokens.length-1].type=Vn.name,Oi(Vn.Gt)&&Sr(),Oi(Vn.eq)&&Sr()}function ar(){Pi(Vn.lessThan)&&lr()}function lr(){const t=Ri(0);for(Pi(Vn.lessThan)||Pi(Vn.typeParameterStart)?Ti():pi();!Oi(Vn.greaterThan)&&!Yn.error;)sr(),Oi(Vn.comma);Ii(t)}function cr(t){const e=t===Vn.arrow;ar(),ui(Vn.parenL),Yn.scopeDepth++,Ko(Vn.parenR,!1),Yn.scopeDepth--,(e||Pi(t))&&xr(t)}function dr(){Oi(Vn.comma)||di()}function ur(){cr(Vn.colon),dr()}function pr(){if(!Pi(Vn.bracketL)||!function(){const t=Yn.snapshot();Ti();const e=Oi(Vn.name)&&Pi(Vn.colon);return Yn.restoreFromSnapshot(t),e}())return!1;const t=Ri(0);return ui(Vn.bracketL),_s(),$r(),ui(Vn.bracketR),wr(),dr(),Ii(t),!0}function hr(t){Oi(Vn.question),t||!Pi(Vn.parenL)&&!Pi(Vn.lessThan)?(wr(),dr()):(cr(Vn.colon),dr())}function fr(){if(Pi(Vn.parenL)||Pi(Vn.lessThan))return void ur();if(Pi(Vn.Bt))return Ti(),void(Pi(Vn.parenL)||Pi(Vn.lessThan)?ur():hr(!1));const t=!!ir([zn.ct]);pr()||((ni(zn.V)||ni(zn.ft))&&er(),xs(-1),hr(t))}function mr(){for(ui(Vn.braceL);!Oi(Vn.braceR)&&!Yn.error;)fr()}function gr(){Oi(Vn.ellipsis)?Sr():(Sr(),Oi(Vn.question)),Oi(Vn.colon)&&Sr()}var vr;function br(t){t===vr.TSAbstractConstructorType&&ri(zn.C),t!==vr.TSConstructorType&&t!==vr.TSAbstractConstructorType||ui(Vn.Bt);const e=Yn.inDisallowConditionalTypesContext;Yn.inDisallowConditionalTypesContext=!1,cr(Vn.arrow),Yn.inDisallowConditionalTypesContext=e}function yr(){if(ni(zn.J)||ni(zn.yt)||ni(zn.ct))Ti(),yr();else if(ni(zn.U))!function(){if(ri(zn.U),_s(),Pi(Vn.Gt)){const t=Yn.snapshot();ui(Vn.Gt);const e=Yn.inDisallowConditionalTypesContext;Yn.inDisallowConditionalTypesContext=!0,Sr(),Yn.inDisallowConditionalTypesContext=e,(Yn.error||!Yn.inDisallowConditionalTypesContext&&Pi(Vn.question))&&Yn.restoreFromSnapshot(t)}}();else{const t=Yn.inDisallowConditionalTypesContext;Yn.inDisallowConditionalTypesContext=!1,function(){for(function(){switch(Yn.type){case Vn.name:return or(),void(!ai()&&Pi(Vn.lessThan)&&Mr());case Vn.ne:case Vn.Kt:return void Ti();case Vn.string:case Vn.num:case Vn.bigint:case Vn.decimal:case Vn.Xt:case Vn.Zt:return void hs();case Vn.minus:return Ti(),void hs();case Vn.Ht:return Ti(),void(ni(zn.W)&&!ai()&&(Ti(),$r()));case Vn.ee:return ui(Vn.ee),Pi(Vn.Jt)?rr():or(),void(!ai()&&Pi(Vn.lessThan)&&Mr());case Vn.Jt:return void rr();case Vn.braceL:return void(function(){const t=Yn.snapshot(),e=(Ti(),Oi(Vn.plus)||Oi(Vn.minus)?ni(zn.ct):(ni(zn.ct)&&Ti(),!!Pi(Vn.bracketL)&&(Ti(),!!tr()&&(Ti(),Pi(Vn.Qt)))));return Yn.restoreFromSnapshot(t),e}()?(ui(Vn.braceL),Pi(Vn.plus)||Pi(Vn.minus)?(Ti(),ri(zn.ct)):oi(zn.ct),ui(Vn.bracketL),_s(),ui(Vn.Qt),Sr(),oi(zn.T)&&Sr(),ui(Vn.bracketR),Pi(Vn.plus)||Pi(Vn.minus)?(Ti(),ui(Vn.question)):Oi(Vn.question),Oi(Vn.colon)&&Sr(),di(),ui(Vn.braceR)):mr());case Vn.bracketL:return void function(){for(ui(Vn.bracketL);!Oi(Vn.bracketR)&&!Yn.error;)gr(),Oi(Vn.comma)}();case Vn.parenL:return ui(Vn.parenL),Sr(),void ui(Vn.parenR);case Vn.backQuote:return void function(){for(Fi(),Fi();!Pi(Vn.backQuote)&&!Yn.error;)ui(Vn.dollarBraceL),Sr(),Fi(),Fi();Ti()}();default:if(Yn.type&Vn.IS_KEYWORD)return Ti(),void(Yn.tokens[Yn.tokens.length-1].type=Vn.name)}pi()}();!ai()&&Oi(Vn.bracketL);)Oi(Vn.bracketR)||(Sr(),ui(Vn.bracketR))}(),Yn.inDisallowConditionalTypesContext=t}}function kr(){if(Oi(Vn.bitwiseAND),yr(),Pi(Vn.bitwiseAND))for(;Oi(Vn.bitwiseAND);)yr()}function xr(t){const e=Ri(0);ui(t);const n=function(){const t=Yn.snapshot();return ni(zn.R)?(Ti(),oi(zn.W)?(Sr(),!0):tr()||Pi(Vn.Ht)?(Ti(),oi(zn.W)&&Sr(),!0):(Yn.restoreFromSnapshot(t),!1)):!(!tr()&&!Pi(Vn.Ht)||(Ti(),ni(zn.W)&&!ai()?(Ti(),Sr(),0):(Yn.restoreFromSnapshot(t),1)))}();n||Sr(),Ii(e)}function wr(){Pi(Vn.colon)&&$r()}function $r(){const t=Ri(0);ui(Vn.colon),Sr(),Ii(t)}function Sr(){if(Ar(),Yn.inDisallowConditionalTypesContext||ai()||!Oi(Vn.Gt))return;const t=Yn.inDisallowConditionalTypesContext;Yn.inDisallowConditionalTypesContext=!0,Ar(),Yn.inDisallowConditionalTypesContext=t,ui(Vn.question),Sr(),ui(Vn.colon),Sr()}function Ar(){Pi(Vn.lessThan)||Pi(Vn.parenL)&&function(){const t=Yn.snapshot(),e=function(){if(Ti(),Pi(Vn.parenR)||Pi(Vn.ellipsis))return!0;if(function(){if(Pi(Vn.name)||Pi(Vn.Ht))return Ti(),!0;if(Pi(Vn.braceL)||Pi(Vn.bracketL)){let t=1;for(Ti();t>0&&!Yn.error;)Pi(Vn.braceL)||Pi(Vn.bracketL)?t++:(Pi(Vn.braceR)||Pi(Vn.bracketR))&&t--,Ti();return!0}return!1}()){if(Pi(Vn.colon)||Pi(Vn.comma)||Pi(Vn.question)||Pi(Vn.eq))return!0;if(Pi(Vn.parenR)&&(Ti(),Pi(Vn.arrow)))return!0}return!1}();return Yn.restoreFromSnapshot(t),e}()?br(vr.TSFunctionType):Pi(Vn.Bt)?br(vr.TSConstructorType):ni(zn.C)&&Di()===Vn.Bt?br(vr.TSAbstractConstructorType):function(){if(Oi(Vn.bitwiseOR),kr(),Pi(Vn.bitwiseOR))for(;Oi(Vn.bitwiseOR);)kr()}()}function Er(){for(;!Pi(Vn.braceL)&&!Yn.error;)Cr(),Oi(Vn.comma)}function Cr(){or(),Pi(Vn.lessThan)&&Mr()}function _r(){if(Pi(Vn.string)?hs():_s(),Oi(Vn.eq)){const t=Yn.tokens.length-1;Zr(),Yn.tokens[t].rhsEndIndex=Yn.tokens.length}}function Tr(){for(Go(!1),ui(Vn.braceL);!Oi(Vn.braceR)&&!Yn.error;)_r(),Oi(Vn.comma)}function Fr(){ui(Vn.braceL),ga(Vn.braceR)}function Rr(){Go(!1),Oi(Vn.dot)?Rr():Fr()}function Ir(){ni(zn.B)?_s():Pi(Vn.string)?us():pi(),Pi(Vn.braceL)?Fr():di()}function Or(){Wo(),ui(Vn.eq),ni(zn.ut)&&Di()===Vn.parenL?(ri(zn.ut),ui(Vn.parenL),Pi(Vn.string)||pi(),hs(),ui(Vn.parenR)):or(),di()}function jr(){return Pr(Yn.contextualKeyword,!0)}function Pr(t,e){switch(t){case zn.C:if(Dr(e)&&Pi(Vn.Ut))return Yn.tokens[Yn.tokens.length-1].type=Vn.C,$a(!0,!1),!0;break;case zn.N:if(Dr(e)&&Pi(Vn.name))return Yn.tokens[Yn.tokens.length-1].type=Vn.N,Tr(),!0;break;case zn.G:if(Dr(e)&&Pi(Vn.name)){const t=Ri(e?2:1);return Go(!1),ar(),Oi(Vn.Gt)&&Er(),mr(),Ii(t),!0}break;case zn.K:if(Dr(e)){if(Pi(Vn.string)){const t=Ri(e?2:1);return Ir(),Ii(t),!0}if(Pi(Vn.name)){const t=Ri(e?2:1);return Rr(),Ii(t),!0}}break;case zn.X:if(Dr(e)&&Pi(Vn.name)){const t=Ri(e?2:1);return Rr(),Ii(t),!0}break;case zn.bt:if(Dr(e)&&Pi(Vn.name)){const t=Ri(e?2:1);return Go(!1),ar(),ui(Vn.eq),Sr(),di(),Ii(t),!0}}return!1}function Dr(t){return t?(Ti(),!0):!ci()}function Nr(){Yn.type===Vn.bitShiftL&&(Yn.pos-=1,Gi(Vn.lessThan)),Mr()}function Mr(){const t=Ri(0);for(ui(Vn.lessThan);!Pi(Vn.greaterThan)&&!Yn.error;)Sr(),Oi(Vn.comma);t?(ui(Vn.greaterThan),Ii(t)):(Ii(t),Ji(),ui(Vn.greaterThan),Yn.tokens[Yn.tokens.length-1].isType=!0)}function Lr(){if(Pi(Vn.name))switch(Yn.contextualKeyword){case zn.C:case zn.D:case zn.N:case zn.G:case zn.K:case zn.X:case zn.bt:return!0}return!1}function zr(){Jr()}function Vr(t){zr(),Oi(Vn.colon)?zr():Yn.tokens[Yn.tokens.length-1].identifierRole=t}function Br(){const t=Yn.tokens.length;Vr(ki.Access);let e=!1;for(;Pi(Vn.dot);)e=!0,Jr(),zr();if(!e){const e=Yn.tokens[t],n=Kn.charCodeAt(e.start);n>=Bn.lowercaseA&&n<=Bn.lowercaseZ&&(e.identifierRole=null)}}function Hr(){switch(Yn.type){case Vn.braceL:return Ti(),Xr(),void Jr();case Vn.jsxTagStart:return Wr(),void Jr();case Vn.string:return void Jr();default:pi("JSX value should be either an expression or a quoted JSX text")}}function qr(){ui(Vn.ellipsis),Xr()}function Ur(){Pi(Vn.jsxTagEnd)||Br()}function Gr(){const t=Yn.tokens.length-1;Yn.tokens[t].jsxRole=xi.NoChildren;let e=0;if(!function(t){if(Pi(Vn.jsxTagEnd))return!1;Br(),Wn&&function(){if(Oi(Vn.jsxTagStart)){Yn.tokens[Yn.tokens.length-1].type=Vn.typeParameterStart;const t=Ri(1);for(;!Pi(Vn.greaterThan)&&!Yn.error;)Sr(),Oi(Vn.comma);Jr(),Ii(t)}}();let e=!1;for(;!Pi(Vn.slash)&&!Pi(Vn.jsxTagEnd)&&!Yn.error;)Oi(Vn.braceL)?(e=!0,ui(Vn.ellipsis),Zr(),Jr()):(e&&Yn.end-Yn.start===3&&Kn.charCodeAt(Yn.start)===Bn.lowercaseK&&Kn.charCodeAt(Yn.start+1)===Bn.lowercaseE&&Kn.charCodeAt(Yn.start+2)===Bn.lowercaseY&&(Yn.tokens[t].jsxRole=xi.KeyAfterPropSpread),Vr(ki.ObjectKey),Pi(Vn.eq)&&(Jr(),Hr()));const n=Pi(Vn.slash);return n&&Jr(),n}(t))for(Yr();;)switch(Yn.type){case Vn.jsxTagStart:if(Jr(),Pi(Vn.slash))return Jr(),Ur(),void(Yn.tokens[t].jsxRole!==xi.KeyAfterPropSpread&&(1===e?Yn.tokens[t].jsxRole=xi.OneChild:e>1&&(Yn.tokens[t].jsxRole=xi.StaticChildren)));e++,Gr(),Yr();break;case Vn.jsxText:e++,Yr();break;case Vn.jsxEmptyText:Yr();break;case Vn.braceL:Ti(),Pi(Vn.ellipsis)?(qr(),Yr(),e+=2):(Pi(Vn.braceR)||(e++,Xr()),Yr());break;default:return void pi()}}function Wr(){Jr(),Gr()}function Jr(){Yn.tokens.push(new _i),Ui(),Yn.start=Yn.pos;const t=Kn.charCodeAt(Yn.pos);if(bi[t])!function(){let t;do{if(Yn.pos>Kn.length)return void pi("Unexpectedly reached the end of input.");t=Kn.charCodeAt(++Yn.pos)}while(vi[t]||t===Bn.dash);Gi(Vn.jsxName)}();else if(t===Bn.quotationMark||t===Bn.apostrophe)!function(t){for(Yn.pos++;;){if(Yn.pos>=Kn.length)return void pi("Unterminated string constant");if(Kn.charCodeAt(Yn.pos)===t){Yn.pos++;break}Yn.pos++}Gi(Vn.string)}(t);else switch(++Yn.pos,t){case Bn.greaterThan:Gi(Vn.jsxTagEnd);break;case Bn.lessThan:Gi(Vn.jsxTagStart);break;case Bn.slash:Gi(Vn.slash);break;case Bn.equalsTo:Gi(Vn.eq);break;case Bn.leftCurlyBrace:Gi(Vn.braceL);break;case Bn.dot:Gi(Vn.dot);break;case Bn.colon:Gi(Vn.colon);break;default:pi()}}function Yr(){Yn.tokens.push(new _i),Yn.start=Yn.pos,function(){let t=!1,e=!1;for(;;){if(Yn.pos>=Kn.length)return void pi("Unterminated JSX contents");const n=Kn.charCodeAt(Yn.pos);if(n===Bn.lessThan||n===Bn.leftCurlyBrace)return Yn.pos===Yn.start?n===Bn.lessThan?(Yn.pos++,void Gi(Vn.jsxTagStart)):void Yi(n):void Gi(t&&!e?Vn.jsxEmptyText:Vn.jsxText);n===Bn.lineFeed?t=!0:n!==Bn.space&&n!==Bn.carriageReturn&&n!==Bn.tab&&(e=!0),Yn.pos++}}()}!function(t){t[t.TSFunctionType=0]="TSFunctionType",t[t.TSConstructorType=1]="TSConstructorType",t[t.TSAbstractConstructorType=2]="TSAbstractConstructorType"}(vr||(vr={}));class Kr{constructor(t){this.stop=t}}function Xr(t=!1){if(Zr(t),Pi(Vn.comma))for(;Oi(Vn.comma);)Zr(t)}function Zr(t=!1,e=!1){return Wn?function(t,e){return Gn?function(t,e){if(!Pi(Vn.lessThan))return Qr(t,e);const n=Yn.snapshot();let i=Qr(t,e);return Yn.error?(Yn.restoreFromSnapshot(n),Yn.type=Vn.typeParameterStart,lr(),i=Qr(t,e),i||pi(),i):i}(t,e):function(t,e){if(!Pi(Vn.lessThan))return Qr(t,e);const n=Yn.snapshot();lr();const i=Qr(t,e);return i||pi(),Yn.error?(Yn.restoreFromSnapshot(n),Qr(t,e)):i}(t,e)}(t,e):Jn?function(t,e){if(Pi(Vn.lessThan)){const n=Yn.snapshot();let i=Qr(t,e);if(!Yn.error)return i;Yn.restoreFromSnapshot(n),Yn.type=Vn.typeParameterStart;const o=Ri(0);if(zs(),Ii(o),i=Qr(t,e),i)return!0;pi()}return Qr(t,e)}(t,e):Qr(t,e)}function Qr(t,e){if(Pi(Vn.Yt))return Ti(),Pi(Vn.semi)||si()||(Oi(Vn.star),Zr()),!1;(Pi(Vn.parenL)||Pi(Vn.name)||Pi(Vn.Yt))&&(Yn.potentialArrowAt=Yn.start);const n=function(t){const e=function(t){const e=Yn.tokens.length;return!!ns()||(es(e,-1,t),!1)}(t);return!!e||(function(t){Wn||Jn?function(t){if(Pi(Vn.question)){const t=Di();if(t===Vn.colon||t===Vn.comma||t===Vn.parenR)return}ts(t)}(t):ts(t)}(t),!1)}(t);return e&&vs(),Yn.type&Vn.IS_ASSIGN?(Ti(),Zr(t),!1):n}function ts(t){Oi(Vn.question)&&(Zr(),ui(Vn.colon),Zr(t))}function es(t,e,n){if(Wn&&(Vn.Qt&Vn.PRECEDENCE_MASK)>e&&!ai()&&(oi(zn.T)||oi(zn.ht))){const i=Ri(1);return Sr(),Ii(i),Ji(),void es(t,e,n)}const i=Yn.type&Vn.PRECEDENCE_MASK;if(i>0&&(!n||!Pi(Vn.Qt))&&i>e){const o=Yn.type;Ti(),o===Vn.nullishCoalescing&&(Yn.tokens[Yn.tokens.length-1].nullishStartIndex=t);const r=Yn.tokens.length;ns(),es(r,o&Vn.IS_RIGHT_ASSOCIATIVE?i-1:i,n),o===Vn.nullishCoalescing&&(Yn.tokens[t].numNullishCoalesceStarts++,Yn.tokens[Yn.tokens.length-1].numNullishCoalesceEnds++),es(t,e,n)}}function ns(){if(Wn&&!Gn&&Oi(Vn.lessThan))return function(){const t=Ri(1);Sr(),ui(Vn.greaterThan),Ii(t),ns()}(),!1;if(ni(zn.K)&&Vi()===Bn.leftCurlyBrace&&!li())return ri(zn.K),ui(Vn.braceL),ga(Vn.braceR),!1;if(Yn.type&Vn.IS_PREFIX)return Ti(),ns(),!1;if(is())return!0;for(;Yn.type&Vn.IS_POSTFIX&&!si();)Yn.type===Vn.preIncDec&&(Yn.type=Vn.postIncDec),Ti();return!1}function is(){const t=Yn.tokens.length;return!!us()||(os(t),Yn.tokens.length>t&&Yn.tokens[t].isOptionalChainStart&&(Yn.tokens[Yn.tokens.length-1].isOptionalChainEnd=!0),!1)}function os(t,e=!1){Jn?function(t,e=!1){if(Yn.tokens[Yn.tokens.length-1].contextualKeyword===zn.I&&Pi(Vn.lessThan)){const t=Yn.snapshot(),e=function(){Yn.scopeDepth++;const t=Yn.tokens.length;return wa(),!!gs()&&($s(t),!0)}();if(e&&!Yn.error)return;Yn.restoreFromSnapshot(t)}rs(t,e)}(t,e):rs(t,e)}function rs(t,e=!1){const n=new Kr(!1);do{ss(t,e,n)}while(!n.stop&&!Yn.error)}function ss(t,e,n){Wn?function(t,e,n){if(ai()||!Oi(Vn.bang)){if(Pi(Vn.lessThan)||Pi(Vn.bitShiftL)){const n=Yn.snapshot();if(!e&&ls()&&function(){const t=Yn.snapshot();return lr(),wa(),Pi(Vn.colon)&&xr(Vn.colon),ui(Vn.arrow),Yn.error?(Yn.restoreFromSnapshot(t),!1):(As(!0),!0)}())return;if(Nr(),!e&&Oi(Vn.parenL)?(Yn.tokens[Yn.tokens.length-1].subscriptStartIndex=t,cs()):Pi(Vn.backQuote)?bs():(Yn.type===Vn.greaterThan||Yn.type!==Vn.parenL&&Boolean(Yn.type&Vn.IS_EXPRESSION_START)&&!ai())&&pi(),!Yn.error)return;Yn.restoreFromSnapshot(n)}else!e&&Pi(Vn.questionDot)&&Di()===Vn.lessThan&&(Ti(),Yn.tokens[t].isOptionalChainStart=!0,Yn.tokens[Yn.tokens.length-1].subscriptStartIndex=t,Mr(),ui(Vn.parenL),cs());as(t,e,n)}else Yn.tokens[Yn.tokens.length-1].type=Vn.nonNullAssertion}(t,e,n):Jn?function(t,e,n){if(Pi(Vn.questionDot)&&Di()===Vn.lessThan)return e?void(n.stop=!0):(Ti(),Vs(),ui(Vn.parenL),void cs());if(!e&&Pi(Vn.lessThan)){const t=Yn.snapshot();if(Vs(),ui(Vn.parenL),cs(),!Yn.error)return;Yn.restoreFromSnapshot(t)}as(t,e,n)}(t,e,n):as(t,e,n)}function as(t,e,n){if(!e&&Oi(Vn.doubleColon))ds(),n.stop=!0,os(t,e);else if(Pi(Vn.questionDot)){if(Yn.tokens[t].isOptionalChainStart=!0,e&&Di()===Vn.parenL)return void(n.stop=!0);Ti(),Yn.tokens[Yn.tokens.length-1].subscriptStartIndex=t,Oi(Vn.bracketL)?(Xr(),ui(Vn.bracketR)):Oi(Vn.parenL)?cs():ps()}else if(Oi(Vn.dot))Yn.tokens[Yn.tokens.length-1].subscriptStartIndex=t,ps();else if(Oi(Vn.bracketL))Yn.tokens[Yn.tokens.length-1].subscriptStartIndex=t,Xr(),ui(Vn.bracketR);else if(!e&&Pi(Vn.parenL))if(ls()){const e=Yn.snapshot(),i=Yn.tokens.length;Ti(),Yn.tokens[Yn.tokens.length-1].subscriptStartIndex=t;const o=Zn();Yn.tokens[Yn.tokens.length-1].contextId=o,cs(),Yn.tokens[Yn.tokens.length-1].contextId=o,(Pi(Vn.colon)||Pi(Vn.arrow))&&(Yn.restoreFromSnapshot(e),n.stop=!0,Yn.scopeDepth++,wa(),function(t){Wn?Pi(Vn.colon)&&$r():Jn&&function(){if(Pi(Vn.colon)){const t=Yn.noAnonFunctionType;Yn.noAnonFunctionType=!0,oa(),Yn.noAnonFunctionType=t}}(),ui(Vn.arrow),$s(t)}(i))}else{Ti(),Yn.tokens[Yn.tokens.length-1].subscriptStartIndex=t;const e=Zn();Yn.tokens[Yn.tokens.length-1].contextId=e,cs(),Yn.tokens[Yn.tokens.length-1].contextId=e}else Pi(Vn.backQuote)?bs():n.stop=!0}function ls(){return Yn.tokens[Yn.tokens.length-1].contextualKeyword===zn.I&&!si()}function cs(){let t=!0;for(;!Oi(Vn.parenR)&&!Yn.error;){if(t)t=!1;else if(ui(Vn.comma),Oi(Vn.parenR))break;Cs(!1)}}function ds(){const t=Yn.tokens.length;us(),os(t,!0)}function us(){if(Oi(Vn.modulo))return _s(),!1;if(Pi(Vn.jsxText)||Pi(Vn.jsxEmptyText))return hs(),!1;if(Pi(Vn.lessThan)&&Gn)return Yn.type=Vn.jsxTagStart,Wr(),Ti(),!1;const t=Yn.potentialArrowAt===Yn.start;switch(Yn.type){case Vn.slash:case Vn.assign:Yn.type===Vn.assign&&--Yn.pos,function(){const t=Yn.pos;let e=!1,n=!1;for(;;){if(Yn.pos>=Kn.length)return void pi("Unterminated regular expression",t);const i=Kn.charCodeAt(Yn.pos);if(e)e=!1;else{if(i===Bn.leftSquareBracket)n=!0;else if(i===Bn.rightSquareBracket&&n)n=!1;else if(i===Bn.slash&&!n)break;e=i===Bn.backslash}++Yn.pos}++Yn.pos,function(){for(;Yn.pos<Kn.length;){const t=Kn.charCodeAt(Yn.pos);if(vi[t])Yn.pos++;else{if(t!==Bn.backslash)break;if(Yn.pos+=2,Kn.charCodeAt(Yn.pos)===Bn.leftCurlyBrace){for(;Yn.pos<Kn.length&&Kn.charCodeAt(Yn.pos)!==Bn.rightCurlyBrace;)Yn.pos++;Yn.pos++}}}}(),Gi(Vn.regexp)}();case Vn.qt:case Vn.Ht:case Vn.regexp:case Vn.num:case Vn.bigint:case Vn.decimal:case Vn.string:case Vn.Kt:case Vn.Xt:case Vn.Zt:return Ti(),!1;case Vn.Jt:return Ti(),Pi(Vn.dot)&&(Yn.tokens[Yn.tokens.length-1].type=Vn.name,Ti(),_s()),!1;case Vn.name:{const e=Yn.tokens.length,n=Yn.start,i=Yn.contextualKeyword;return _s(),i===zn.O?(ns(),!1):i===zn.I&&Pi(Vn.Rt)&&!si()?(Ti(),xa(n,!1),!1):t&&i===zn.I&&!si()&&Pi(Vn.name)?(Yn.scopeDepth++,Go(!1),ui(Vn.arrow),$s(e),!0):Pi(Vn.Ct)&&!si()?(Ti(),ma(),!1):t&&!si()&&Pi(Vn.arrow)?(Yn.scopeDepth++,Jo(!1),ui(Vn.arrow),$s(e),!0):(Yn.tokens[Yn.tokens.length-1].identifierRole=ki.Access,!1)}case Vn.Ct:return Ti(),ma(),!1;case Vn.parenL:return ms(t);case Vn.bracketL:return Ti(),Es(Vn.bracketR,!0),!1;case Vn.braceL:return ys(!1,!1),!1;case Vn.Rt:return function(){const t=Yn.start;_s(),Oi(Vn.dot)&&_s(),xa(t,!1)}(),!1;case Vn.at:ua();case Vn.Ut:return $a(!1),!1;case Vn.Bt:return ui(Vn.Bt),Oi(Vn.dot)?_s():(ds(),Oi(Vn.questionDot),Jn&&function(){if(Pi(Vn.lessThan)){const t=Yn.snapshot();Vs(),Yn.error&&Yn.restoreFromSnapshot(t)}}(),Oi(Vn.parenL)&&Es(Vn.parenR)),!1;case Vn.backQuote:return bs(),!1;case Vn.doubleColon:return Ti(),ds(),!1;case Vn.hash:{const t=Vi();return bi[t]||t===Bn.backslash?ps():Ti(),!1}default:return pi(),!1}}function ps(){Oi(Vn.hash),_s()}function hs(){Ti()}function fs(){ui(Vn.parenL),Xr(),ui(Vn.parenR)}function ms(t){const e=Yn.snapshot(),n=Yn.tokens.length;ui(Vn.parenL);let i=!0;for(;!Pi(Vn.parenR)&&!Yn.error;){if(i)i=!1;else if(ui(Vn.comma),Pi(Vn.parenR))break;if(Pi(Vn.ellipsis)){Uo(!1),vs();break}Zr(!1,!0)}return ui(Vn.parenR),!(!t||!Pi(Vn.colon)&&si()||!gs()||(Yn.restoreFromSnapshot(e),Yn.scopeDepth++,wa(),gs(),$s(n),Yn.error&&(Yn.restoreFromSnapshot(e),ms(!1),1)))}function gs(){return Wn?function(){if(Pi(Vn.colon)){const t=Yn.snapshot();xr(Vn.colon),si()&&pi(),Pi(Vn.arrow)||pi(),Yn.error&&Yn.restoreFromSnapshot(t)}return Oi(Vn.arrow)}():Jn?function(){if(Pi(Vn.colon)){const t=Ri(0),e=Yn.snapshot(),n=Yn.noAnonFunctionType;Yn.noAnonFunctionType=!0,Rs(),Yn.noAnonFunctionType=n,si()&&pi(),Pi(Vn.arrow)||pi(),Yn.error&&Yn.restoreFromSnapshot(e),Ii(t)}return Oi(Vn.arrow)}():Oi(Vn.arrow)}function vs(){(Wn||Jn)&&(ji(Vn.question),Pi(Vn.colon)&&(Wn?$r():Jn&&oa()))}function bs(){for(Fi(),Fi();!Pi(Vn.backQuote)&&!Yn.error;)ui(Vn.dollarBraceL),Xr(),Fi(),Fi();Ti()}function ys(t,e){const n=Zn();let i=!0;for(Ti(),Yn.tokens[Yn.tokens.length-1].contextId=n;!Oi(Vn.braceR)&&!Yn.error;){if(i)i=!1;else if(ui(Vn.comma),Oi(Vn.braceR))break;let o=!1;if(Pi(Vn.ellipsis)){const n=Yn.tokens.length;if(qo(),t&&(Yn.tokens.length===n+2&&Jo(e),Oi(Vn.braceR)))break;continue}t||(o=Oi(Vn.star)),!t&&ni(zn.I)?(o&&pi(),_s(),Pi(Vn.colon)||Pi(Vn.parenL)||Pi(Vn.braceR)||Pi(Vn.eq)||Pi(Vn.comma)||(Pi(Vn.star)&&(Ti(),o=!0),xs(n))):xs(n),ks(t,e,n)}Yn.tokens[Yn.tokens.length-1].contextId=n}function ks(t,e,n){Wn?ar():Jn&&Pi(Vn.lessThan)&&(zs(),Pi(Vn.parenL)||pi()),function(t,e){const n=Yn.start;return Pi(Vn.parenL)?(t&&pi(),ws(n,!1),!0):!!function(t){return!t&&(Pi(Vn.string)||Pi(Vn.num)||Pi(Vn.bracketL)||Pi(Vn.name)||!!(Yn.type&Vn.IS_KEYWORD))}(t)&&(xs(e),ws(n,!1),!0)}(t,n)||function(t,e){if(Oi(Vn.colon))return void(t?Qo(e):Zr(!1));let n;n=t?0===Yn.scopeDepth?ki.ObjectShorthandTopLevelDeclaration:e?ki.ObjectShorthandBlockScopedDeclaration:ki.ObjectShorthandFunctionScopedDeclaration:ki.ObjectShorthand,Yn.tokens[Yn.tokens.length-1].identifierRole=n,Qo(e,!0)}(t,e)}function xs(t){Jn&&sa(),Oi(Vn.bracketL)?(Yn.tokens[Yn.tokens.length-1].contextId=t,Zr(),ui(Vn.bracketR),Yn.tokens[Yn.tokens.length-1].contextId=t):(Pi(Vn.num)||Pi(Vn.string)||Pi(Vn.bigint)||Pi(Vn.decimal)?us():ps(),Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ObjectKey,Yn.tokens[Yn.tokens.length-1].contextId=t)}function ws(t,e){const n=Zn();Yn.scopeDepth++;const i=Yn.tokens.length;wa(e,n),Ss(t,n),Yn.scopes.push(new Hn(i,Yn.tokens.length,!0)),Yn.scopeDepth--}function $s(t){As(!0),Yn.scopes.push(new Hn(t,Yn.tokens.length,!0)),Yn.scopeDepth--}function Ss(t,e=0){Wn?function(t,e){if(Pi(Vn.colon)&&xr(Vn.colon),!Pi(Vn.braceL)&&ci()){let e=Yn.tokens.length-1;for(;e>=0&&(Yn.tokens[e].start>=t||Yn.tokens[e].type===Vn.Et||Yn.tokens[e].type===Vn.Wt);)Yn.tokens[e].isType=!0,e--;return}As(!1,e)}(t,e):Jn?function(t){Pi(Vn.colon)&&Rs(),As(!1,t)}(e):As(!1,e)}function As(t,e=0){t&&!Pi(Vn.braceL)?Zr():ma(!0,e)}function Es(t,e=!1){let n=!0;for(;!Oi(t)&&!Yn.error;){if(n)n=!1;else if(ui(Vn.comma),Oi(t))break;Cs(e)}}function Cs(t){t&&Pi(Vn.comma)||(Pi(Vn.ellipsis)?(qo(),vs()):Pi(Vn.question)?Ti():Zr(!1,!0))}function _s(){Ti(),Yn.tokens[Yn.tokens.length-1].type=Vn.name}function Ts(t){const e=Ri(0);ui(t||Vn.colon),ia(),Ii(e)}function Fs(){ui(Vn.modulo),ri(zn.j),Oi(Vn.parenL)&&(Xr(),ui(Vn.parenR))}function Rs(){const t=Ri(0);ui(Vn.colon),Pi(Vn.modulo)?Fs():(ia(),Pi(Vn.modulo)&&Fs()),Ii(t)}function Is(){Pi(Vn.Ut)?(Ti(),Os(!0)):Pi(Vn.Rt)?(Ti(),_s(),Pi(Vn.lessThan)&&zs(),ui(Vn.parenL),Zs(),ui(Vn.parenR),Rs(),di()):Pi(Vn.Nt)?(Ti(),ra(),di()):oi(zn.K)?Oi(Vn.dot)?(ri(zn.M),oa(),di()):function(){for(Pi(Vn.string)?us():_s(),ui(Vn.braceL);!Pi(Vn.braceR)&&!Yn.error;)Pi(Vn.Jt)?(Ti(),Na()):pi();ui(Vn.braceR)}():ni(zn.bt)?(Ti(),Ns()):ni(zn.tt)?(Ti(),Ms(!0)):ni(zn.G)?(Ti(),Os()):Pi(Vn.Wt)?(ui(Vn.Wt),Oi(Vn.Et)?Pi(Vn.Rt)||Pi(Vn.Ut)?Is():(ia(),di()):Pi(Vn.Nt)||Pi(Vn.Rt)||Pi(Vn.Ut)||ni(zn.tt)?Is():Pi(Vn.star)||Pi(Vn.braceL)||ni(zn.G)||ni(zn.bt)||ni(zn.tt)?Ra():pi()):pi()}function Os(t=!1){if(Ds(),Pi(Vn.lessThan)&&zs(),Oi(Vn.Gt))do{js()}while(!t&&Oi(Vn.comma));if(ni(zn.Y)){Ti();do{js()}while(Oi(Vn.comma))}if(ni(zn.H)){Ti();do{js()}while(Oi(Vn.comma))}Ws(t,!1,t)}function js(){Ks(!1),Pi(Vn.lessThan)&&Vs()}function Ps(){Os()}function Ds(){_s()}function Ns(){Ds(),Pi(Vn.lessThan)&&zs(),Ts(Vn.eq),di()}function Ms(t){ri(zn.bt),Ds(),Pi(Vn.lessThan)&&zs(),Pi(Vn.colon)&&Ts(Vn.colon),t||Ts(Vn.eq),di()}function Ls(){sa(),ra(),Oi(Vn.eq)&&ia()}function zs(){const t=Ri(0);Pi(Vn.lessThan)||Pi(Vn.typeParameterStart)?Ti():pi();do{Ls(),Pi(Vn.greaterThan)||ui(Vn.comma)}while(!Pi(Vn.greaterThan)&&!Yn.error);ui(Vn.greaterThan),Ii(t)}function Vs(){const t=Ri(0);for(ui(Vn.lessThan);!Pi(Vn.greaterThan)&&!Yn.error;)ia(),Pi(Vn.greaterThan)||ui(Vn.comma);ui(Vn.greaterThan),Ii(t)}function Bs(){Pi(Vn.num)||Pi(Vn.string)?us():_s()}function Hs(){Di()===Vn.colon?(Bs(),Ts()):ia(),ui(Vn.bracketR),Ts()}function qs(){Bs(),ui(Vn.bracketR),ui(Vn.bracketR),Pi(Vn.lessThan)||Pi(Vn.parenL)?Us():(Oi(Vn.question),Ts())}function Us(){for(Pi(Vn.lessThan)&&zs(),ui(Vn.parenL);!Pi(Vn.parenR)&&!Pi(Vn.ellipsis)&&!Yn.error;)Xs(),Pi(Vn.parenR)||ui(Vn.comma);Oi(Vn.ellipsis)&&Xs(),ui(Vn.parenR),Ts()}function Gs(){Us()}function Ws(t,e,n){let i;for(e&&Pi(Vn.braceBarL)?(ui(Vn.braceBarL),i=Vn.braceBarR):(ui(Vn.braceL),i=Vn.braceR);!Pi(i)&&!Yn.error;){if(n&&ni(zn.st)){const e=Di();e!==Vn.colon&&e!==Vn.question&&(Ti(),t=!1)}if(t&&ni(zn.gt)){const t=Di();t!==Vn.colon&&t!==Vn.question&&Ti()}if(sa(),Oi(Vn.bracketL))Oi(Vn.bracketL)?qs():Hs();else if(Pi(Vn.parenL)||Pi(Vn.lessThan))Gs();else{if(ni(zn.V)||ni(zn.ft)){const t=Di();t!==Vn.name&&t!==Vn.string&&t!==Vn.num||Ti()}Js()}Ys()}ui(i)}function Js(){if(Pi(Vn.ellipsis)){if(ui(Vn.ellipsis),Oi(Vn.comma)||Oi(Vn.semi),Pi(Vn.braceR))return;ia()}else Bs(),Pi(Vn.lessThan)||Pi(Vn.parenL)?Us():(Oi(Vn.question),Ts())}function Ys(){Oi(Vn.semi)||Oi(Vn.comma)||Pi(Vn.braceR)||Pi(Vn.braceBarR)||pi()}function Ks(t){for(t||_s();Oi(Vn.dot);)_s()}function Xs(){const t=Di();t===Vn.colon||t===Vn.question?(_s(),Oi(Vn.question),Ts()):ia()}function Zs(){for(;!Pi(Vn.parenR)&&!Pi(Vn.ellipsis)&&!Yn.error;)Xs(),Pi(Vn.parenR)||ui(Vn.comma);Oi(Vn.ellipsis)&&Xs()}function Qs(){let t=!1;const e=Yn.noAnonFunctionType;switch(Yn.type){case Vn.name:return ni(zn.G)?void function(){if(ri(zn.G),Oi(Vn.Gt))do{js()}while(Oi(Vn.comma));Ws(!1,!1,!1)}():(_s(),Ks(!0),void(Pi(Vn.lessThan)&&Vs()));case Vn.braceL:return void Ws(!1,!1,!1);case Vn.braceBarL:return void Ws(!1,!0,!1);case Vn.bracketL:return void function(){for(ui(Vn.bracketL);Yn.pos<Kn.length&&!Pi(Vn.bracketR)&&(ia(),!Pi(Vn.bracketR));)ui(Vn.comma);ui(Vn.bracketR)}();case Vn.lessThan:return zs(),ui(Vn.parenL),Zs(),ui(Vn.parenR),ui(Vn.arrow),void ia();case Vn.parenL:if(Ti(),!Pi(Vn.parenR)&&!Pi(Vn.ellipsis))if(Pi(Vn.name)){const e=Di();t=e!==Vn.question&&e!==Vn.colon}else t=!0;if(t){if(Yn.noAnonFunctionType=!1,ia(),Yn.noAnonFunctionType=e,Yn.noAnonFunctionType||!(Pi(Vn.comma)||Pi(Vn.parenR)&&Di()===Vn.arrow))return void ui(Vn.parenR);Oi(Vn.comma)}return Zs(),ui(Vn.parenR),ui(Vn.arrow),void ia();case Vn.minus:return Ti(),void hs();case Vn.string:case Vn.num:case Vn.Xt:case Vn.Zt:case Vn.Kt:case Vn.Ht:case Vn.ne:case Vn.star:return void Ti();default:if(Yn.type===Vn.ee)return ui(Vn.ee),void Qs();if(Yn.type&Vn.IS_KEYWORD)return Ti(),void(Yn.tokens[Yn.tokens.length-1].type=Vn.name)}pi()}function ta(){Oi(Vn.question)?ta():function(){for(Qs();!si()&&(Pi(Vn.bracketL)||Pi(Vn.questionDot));)Oi(Vn.questionDot),ui(Vn.bracketL),Oi(Vn.bracketR)||(ia(),ui(Vn.bracketR))}()}function ea(){ta(),!Yn.noAnonFunctionType&&Oi(Vn.arrow)&&ia()}function na(){for(Oi(Vn.bitwiseAND),ea();Oi(Vn.bitwiseAND);)ea()}function ia(){!function(){for(Oi(Vn.bitwiseOR),na();Oi(Vn.bitwiseOR);)na()}()}function oa(){Ts()}function ra(){_s(),Pi(Vn.colon)&&oa()}function sa(){(Pi(Vn.plus)||Pi(Vn.minus))&&(Ti(),Yn.tokens[Yn.tokens.length-1].isType=!0)}function aa(){ri(zn.N),Yn.tokens[Yn.tokens.length-1].type=Vn.N,_s(),oi(zn.Z)&&Ti(),ui(Vn.braceL),function(){for(;!Pi(Vn.braceR)&&!Yn.error&&!Oi(Vn.ellipsis);)la(),Pi(Vn.braceR)||ui(Vn.comma)}(),ui(Vn.braceR)}function la(){_s(),Oi(Vn.eq)&&Ti()}function ca(t){Jn&&function(){if(Pi(Vn.name)&&Yn.contextualKeyword===zn.G){const t=Ri(0);return Ti(),Ps(),Ii(t),!0}return!!ni(zn.N)&&(aa(),!0)}()||(Pi(Vn.at)&&ua(),function(t){if(Wn&&function(){if(Yn.type===Vn.Lt){const t=Mi();if(t.type===Vn.name&&t.contextualKeyword===zn.N)return ui(Vn.Lt),ri(zn.N),Yn.tokens[Yn.tokens.length-1].type=Vn.N,Tr(),!0}return!1}())return;const e=Yn.type;switch(e){case Vn.xt:case Vn.St:return Ti(),void(ci()||(_s(),di()));case Vn.At:return Ti(),void di();case Vn.Ct:return Ti(),ca(!1),ui(Vn.zt),fs(),void Oi(Vn.semi);case Vn.Ft:return void function(){Yn.scopeDepth++;const t=Yn.tokens.length;!function(){Ti();let t=!1;if(ni(zn.O)&&(t=!0,Ti()),ui(Vn.parenL),Pi(Vn.semi))return t&&pi(),void va();const e=da();if(e||Pi(Vn.Nt)||Pi(Vn.Mt)||Pi(Vn.Lt)||ni(zn.kt)&&!ii(zn.Z))return e&&ri(zn.O),Ti(),ya(!0,Yn.type!==Vn.Nt),Pi(Vn.Qt)||ni(zn.Z)?void ba(t):void va();Xr(!0),Pi(Vn.Qt)||ni(zn.Z)?ba(t):(t&&pi(),va())}(),Yn.scopes.push(new Hn(t,Yn.tokens.length,!1)),Yn.scopeDepth--}();case Vn.Rt:if(Di()===Vn.dot)break;return t||pi(),void function(){const t=Yn.start;Ti(),xa(t,!0)}();case Vn.Ut:return t||pi(),void $a(!0);case Vn.It:return Ti(),fs(),ca(!1),void(Oi(Vn._t)&&ca(!1));case Vn.Ot:return Ti(),void(ci()||(Xr(),di()));case Vn.jt:return void function(){Ti(),fs(),Yn.scopeDepth++;const t=Yn.tokens.length;for(ui(Vn.braceL);!Pi(Vn.braceR)&&!Yn.error;)if(Pi(Vn.wt)||Pi(Vn.Et)){const t=Pi(Vn.wt);Ti(),t&&Xr(),ui(Vn.colon)}else ca(!0);Ti(),Yn.scopes.push(new Hn(t,Yn.tokens.length,!1)),Yn.scopeDepth--}();case Vn.Pt:return Ti(),Xr(),void di();case Vn.Dt:return void function(){if(Ti(),ma(),Pi(Vn.$t)){Ti();let t=null;Pi(Vn.parenL)&&(Yn.scopeDepth++,t=Yn.tokens.length,ui(Vn.parenL),Yo(!0),Wn&&wr(),ui(Vn.parenR)),ma(),null!=t&&(Yn.scopes.push(new Hn(t,Yn.tokens.length,!1)),Yn.scopeDepth--)}Oi(Vn.Tt)&&ma()}();case Vn.Mt:case Vn.Lt:t||pi();case Vn.Nt:return void fa(e!==Vn.Nt);case Vn.zt:return Ti(),fs(),void ca(!1);case Vn.braceL:return void ma();case Vn.semi:return void Ti();case Vn.Wt:case Vn.Jt:{const t=Di();if(t===Vn.parenL||t===Vn.dot)break;return Ti(),void(e===Vn.Jt?Na():Ra())}case Vn.name:if(Yn.contextualKeyword===zn.I){const t=Yn.start,e=Yn.snapshot();if(Ti(),Pi(Vn.Rt)&&!si())return ui(Vn.Rt),void xa(t,!0);Yn.restoreFromSnapshot(e)}else{if(Yn.contextualKeyword===zn.kt&&!li()&&Di()===Vn.name)return void fa(!0);if(da())return ri(zn.O),void fa(!0)}}const n=Yn.tokens.length;Xr();let i=null;if(Yn.tokens.length===n+1){const t=Yn.tokens[Yn.tokens.length-1];t.type===Vn.name&&(i=t.contextualKeyword)}var o;null!=i?Oi(Vn.colon)?ca(!0):(o=i,Wn?function(t){(function(t){switch(t){case zn.D:{const t=Yn.tokens.length-1,e=function(){if(ci())return!1;switch(Yn.type){case Vn.Rt:{const t=Ri(1);return Ti(),xa(Yn.start,!0),Ii(t),!0}case Vn.Ut:{const t=Ri(1);return $a(!0,!1),Ii(t),!0}case Vn.Lt:if(Pi(Vn.Lt)&&ii(zn.N)){const t=Ri(1);return ui(Vn.Lt),ri(zn.N),Yn.tokens[Yn.tokens.length-1].type=Vn.N,Tr(),Ii(t),!0}case Vn.Nt:case Vn.Mt:{const t=Ri(1);return fa(Yn.type!==Vn.Nt),Ii(t),!0}case Vn.name:{const t=Ri(1),e=Yn.contextualKeyword;let n=!1;return e===zn.B?(Ir(),n=!0):n=Pr(e,!0),Ii(t),n}default:return!1}}();if(e)return Yn.tokens[t].type=Vn.D,!0;break}case zn.B:if(Pi(Vn.braceL))return Fr(),!0;break;default:return Pr(t,!1)}return!1})(t)||di()}(o):Jn?function(t){if(t===zn.D){if(Pi(Vn.Ut)||Pi(Vn.name)||Pi(Vn.Rt)||Pi(Vn.Nt)||Pi(Vn.Wt)){const t=Ri(1);Is(),Ii(t)}}else if(Pi(Vn.name))if(t===zn.G){const t=Ri(1);Ps(),Ii(t)}else if(t===zn.bt){const t=Ri(1);Ns(),Ii(t)}else if(t===zn.tt){const t=Ri(1);Ms(!1),Ii(t)}di()}(o):di()):di()}(t))}function da(){if(!ni(zn.O))return!1;const t=Yn.snapshot();return Ti(),!ni(zn.kt)||ai()?(Yn.restoreFromSnapshot(t),!1):(Ti(),!Pi(Vn.name)||ai()?(Yn.restoreFromSnapshot(t),!1):(Yn.restoreFromSnapshot(t),!0))}function ua(){for(;Pi(Vn.at);)pa()}function pa(){if(Ti(),Oi(Vn.parenL))Xr(),ui(Vn.parenR);else{for(_s();Oi(Vn.dot);)_s();Wn?((Pi(Vn.lessThan)||Pi(Vn.bitShiftL))&&Nr(),ha()):ha()}}function ha(){Oi(Vn.parenL)&&cs()}function fa(t){Ti(),ya(!1,t),di()}function ma(t=!1,e=0){const n=Yn.tokens.length;Yn.scopeDepth++,ui(Vn.braceL),e&&(Yn.tokens[Yn.tokens.length-1].contextId=e),ga(Vn.braceR),e&&(Yn.tokens[Yn.tokens.length-1].contextId=e),Yn.scopes.push(new Hn(n,Yn.tokens.length,t)),Yn.scopeDepth--}function ga(t){for(;!Oi(t)&&!Yn.error;)ca(!0)}function va(){ui(Vn.semi),Pi(Vn.semi)||Xr(),ui(Vn.semi),Pi(Vn.parenR)||Xr(),ui(Vn.parenR),ca(!1)}function ba(t){t?oi(zn.Z):Ti(),Xr(),ui(Vn.parenR),ca(!1)}function ya(t,e){for(;;){if(ka(e),Oi(Vn.eq)){const e=Yn.tokens.length-1;Zr(t),Yn.tokens[e].rhsEndIndex=Yn.tokens.length}if(!Oi(Vn.comma))break}}function ka(t){Yo(t),Wn?function(){const t=Ri(0);ai()||Oi(Vn.bang),wr(),Ii(t)}():Jn&&Pi(Vn.colon)&&oa()}function xa(t,e,n=!1){Pi(Vn.star)&&Ti(),!e||n||Pi(Vn.name)||Pi(Vn.Yt)||pi();let i=null;Pi(Vn.name)&&(e||(i=Yn.tokens.length,Yn.scopeDepth++),Go(!1));const o=Yn.tokens.length;Yn.scopeDepth++,wa(),Ss(t);const r=Yn.tokens.length;Yn.scopes.push(new Hn(o,r,!0)),Yn.scopeDepth--,null!==i&&(Yn.scopes.push(new Hn(i,r,!0)),Yn.scopeDepth--)}function wa(t=!1,e=0){Wn?ar():Jn&&function(){if(Pi(Vn.lessThan)){const t=Ri(0);zs(),Ii(t)}}(),ui(Vn.parenL),e&&(Yn.tokens[Yn.tokens.length-1].contextId=e),Ko(Vn.parenR,!1,!1,t,e),e&&(Yn.tokens[Yn.tokens.length-1].contextId=e)}function $a(t,e=!1){const n=Zn();Ti(),Yn.tokens[Yn.tokens.length-1].contextId=n,Yn.tokens[Yn.tokens.length-1].isExpression=!t;let i=null;t||(i=Yn.tokens.length,Yn.scopeDepth++),function(t,e=!1){Wn&&(!t||e)&&ni(zn.H)||(Pi(Vn.name)&&Go(!0),Wn?ar():Jn&&Pi(Vn.lessThan)&&zs())}(t,e),function(){let t=!1;Oi(Vn.Gt)?(is(),t=!0):t=!1,Wn?function(t){if(t&&(Pi(Vn.lessThan)||Pi(Vn.bitShiftL))&&Nr(),oi(zn.H)){Yn.tokens[Yn.tokens.length-1].type=Vn.H;const t=Ri(1);Er(),Ii(t)}}(t):Jn&&function(t){if(t&&Pi(Vn.lessThan)&&Vs(),ni(zn.H)){const t=Ri(0);Ti(),Yn.tokens[Yn.tokens.length-1].type=Vn.H;do{Ds(),Pi(Vn.lessThan)&&Vs()}while(Oi(Vn.comma));Ii(t)}}(t)}();const o=Yn.tokens.length;(function(t){for(ui(Vn.braceL);!Oi(Vn.braceR)&&!Yn.error;)Oi(Vn.semi)||(Pi(Vn.at)?pa():Ea(Yn.start,t))})(n),Yn.error||(Yn.tokens[o].contextId=n,Yn.tokens[Yn.tokens.length-1].contextId=n,null===i)||(Yn.scopes.push(new Hn(i,Yn.tokens.length,!1)),Yn.scopeDepth--)}function Sa(){return Pi(Vn.eq)||Pi(Vn.semi)||Pi(Vn.braceR)||Pi(Vn.bang)||Pi(Vn.colon)}function Aa(){return Pi(Vn.parenL)||Pi(Vn.lessThan)}function Ea(t,e){Wn&&nr([zn.D,zn.lt,zn.ot,zn.it,zn.nt]);let n=!1;if(Pi(Vn.name)&&Yn.contextualKeyword===zn.gt){if(_s(),Aa())return void Ca(t,!1);if(Sa())return void Fa();if(Yn.tokens[Yn.tokens.length-1].type=Vn.gt,n=!0,Pi(Vn.braceL))return Yn.tokens[Yn.tokens.length-1].contextId=e,void ma()}!function(t,e,n){if(Wn&&function(t){const e=Yn.tokens.length;nr([zn.C,zn.ct,zn.D,zn.gt,zn.nt]);const n=Yn.tokens.length;if(pr()){for(let i=t?e-1:e;i<n;i++)Yn.tokens[i].isType=!0;return!0}return!1}(e))return;if(Oi(Vn.star))return _a(n),void Ca(t,!1);_a(n);let i=!1;const o=Yn.tokens[Yn.tokens.length-1];o.contextualKeyword===zn.P&&(i=!0),Ta(),Aa()?Ca(t,i):Sa()?Fa():o.contextualKeyword!==zn.I||ci()?o.contextualKeyword!==zn.V&&o.contextualKeyword!==zn.ft||ci()&&Pi(Vn.star)?o.contextualKeyword!==zn._||ci()?ci()?Fa():pi():(_a(n),Fa()):(Yn.tokens[Yn.tokens.length-1].type=o.contextualKeyword===zn.V?Vn.V:Vn.ft,_a(n),Ca(t,!1)):(Yn.tokens[Yn.tokens.length-1].type=Vn.I,Pi(Vn.star)&&Ti(),_a(n),Ta(),Ca(t,!1))}(t,n,e)}function Ca(t,e){Wn?ar():Jn&&Pi(Vn.lessThan)&&zs(),ws(t,e)}function _a(t){xs(t)}function Ta(){if(Wn){const t=Ri(0);Oi(Vn.question),Ii(t)}}function Fa(){if(Wn?(ji(Vn.bang),wr()):Jn&&Pi(Vn.colon)&&oa(),Pi(Vn.eq)){const t=Yn.tokens.length;Ti(),Zr(),Yn.tokens[t].rhsEndIndex=Yn.tokens.length}di()}function Ra(){const t=Yn.tokens.length-1;Wn&&function(){if(Oi(Vn.Jt))return ni(zn.bt)&&Di()!==Vn.eq&&ri(zn.bt),Or(),!0;if(Oi(Vn.eq))return Xr(),di(),!0;if(oi(zn.T))return ri(zn.X),_s(),di(),!0;if(ni(zn.bt)){const t=Di();t!==Vn.braceL&&t!==Vn.star||Ti()}return!1}()||((Jn?Pi(Vn.star)||ni(zn.bt)&&Di()===Vn.star:Pi(Vn.star))?Jn?function(){if(oi(zn.bt)){const t=Ri(2);ja(),Ii(t)}else ja()}():ja():function(){if(Wn&&Lr())return!1;if(Jn&&Pi(Vn.name)&&(Yn.contextualKeyword===zn.bt||Yn.contextualKeyword===zn.G||Yn.contextualKeyword===zn.tt||Yn.contextualKeyword===zn.N))return!1;if(Pi(Vn.name))return Yn.contextualKeyword!==zn.I;if(!Pi(Vn.Et))return!1;const t=Li(),e=Mi();if(e.type===Vn.comma)return!0;if(e.type===Vn.name&&e.contextualKeyword===zn.L){const e=Kn.charCodeAt(zi(t+4));return e===Bn.quotationMark||e===Bn.apostrophe}return!1}()?(_s(),Pi(Vn.comma)&&Di()===Vn.star?(ui(Vn.comma),ui(Vn.star),ri(zn.T),_s()):Ia(),Oa()):Oi(Vn.Et)?function(){if(Wn&&function(){if(ni(zn.C)&&Di()===Vn.Ut)return Yn.type=Vn.C,Ti(),$a(!0,!0),!0;if(ni(zn.G)){const t=Ri(2);return Pr(zn.G,!0),Ii(t),!0}return!1}())return;if(Jn&&ni(zn.N)&&(aa(),1))return;const t=Yn.start;Oi(Vn.Rt)?xa(t,!0,!0):ni(zn.I)&&Di()===Vn.Rt?(oi(zn.I),Oi(Vn.Rt),xa(t,!0,!0)):Pi(Vn.Ut)?$a(!0,!0):Pi(Vn.at)?(ua(),$a(!0,!0)):(Zr(),di())}():Wn&&Lr()||Jn&&(ni(zn.bt)||ni(zn.G)||ni(zn.tt)||ni(zn.N))||Yn.type===Vn.Nt||Yn.type===Vn.Lt||Yn.type===Vn.Mt||Yn.type===Vn.Rt||Yn.type===Vn.Ut||ni(zn.I)||Pi(Vn.at)?Wn?function(){const t=oi(zn.D);t&&(Yn.tokens[Yn.tokens.length-1].type=Vn.D);let e=!1;if(Pi(Vn.name))if(t){const t=Ri(2);e=jr(),Ii(t)}else e=jr();if(!e)if(t){const t=Ri(2);ca(!0),Ii(t)}else ca(!0)}():Jn?function(){if(ni(zn.bt)){const t=Ri(1);Ti(),Pi(Vn.braceL)?(Pa(),Oa()):Ns(),Ii(t)}else if(ni(zn.tt)){const t=Ri(1);Ti(),Ms(!1),Ii(t)}else if(ni(zn.G)){const t=Ri(1);Ti(),Ps(),Ii(t)}else ca(!0)}():ca(!0):(Pa(),Oa()),Yn.tokens[t].rhsEndIndex=Yn.tokens.length)}function Ia(){Oi(Vn.comma)&&Pa()}function Oa(){oi(zn.L)&&(us(),za()),di()}function ja(){ui(Vn.star),ni(zn.T)?(Ti(),Yn.tokens[Yn.tokens.length-1].type=Vn.T,_s(),Ia(),Oa()):Oa()}function Pa(){let t=!0;for(ui(Vn.braceL);!Oi(Vn.braceR)&&!Yn.error;){if(t)t=!1;else if(ui(Vn.comma),Oi(Vn.braceR))break;Da()}}function Da(){Wn?function(){if(_s(),Pi(Vn.comma)||Pi(Vn.braceR))Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ExportAccess;else{if(_s(),Pi(Vn.comma)||Pi(Vn.braceR))return Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ExportAccess,Yn.tokens[Yn.tokens.length-2].isType=!0,void(Yn.tokens[Yn.tokens.length-1].isType=!0);_s(),Pi(Vn.comma)||Pi(Vn.braceR)?Yn.tokens[Yn.tokens.length-3].identifierRole=ki.ExportAccess:(_s(),Yn.tokens[Yn.tokens.length-3].identifierRole=ki.ExportAccess,Yn.tokens[Yn.tokens.length-4].isType=!0,Yn.tokens[Yn.tokens.length-3].isType=!0,Yn.tokens[Yn.tokens.length-2].isType=!0,Yn.tokens[Yn.tokens.length-1].isType=!0)}}():(_s(),Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ExportAccess,oi(zn.T)&&_s())}function Na(){if(Wn&&Pi(Vn.name)&&Di()===Vn.eq)Or();else{if(Wn&&ni(zn.bt)){const t=Mi();if(t.type===Vn.name&&t.contextualKeyword!==zn.L){if(ri(zn.bt),Di()===Vn.eq)return void Or()}else t.type!==Vn.star&&t.type!==Vn.braceL||ri(zn.bt)}Pi(Vn.string)||(ni(zn.K)&&function(){const t=Yn.snapshot();return ri(zn.K),oi(zn.L)?ni(zn.L)?(Yn.restoreFromSnapshot(t),!0):(Yn.restoreFromSnapshot(t),!1):Pi(Vn.comma)?(Yn.restoreFromSnapshot(t),!1):(Yn.restoreFromSnapshot(t),!0)}()&&Ti(),function(){Jn&&function(){if(Pi(Vn.ee)||ni(zn.bt)){const e=Mi();(((t=e).type===Vn.name||t.type&Vn.IS_KEYWORD)&&t.contextualKeyword!==zn.L||e.type===Vn.braceL||e.type===Vn.star)&&Ti()}var t}();let t=!0;if(!Pi(Vn.name)||(Ma(),Oi(Vn.comma))){if(Pi(Vn.star))return Ti(),ri(zn.T),void Ma();for(ui(Vn.braceL);!Oi(Vn.braceR)&&!Yn.error;){if(t)t=!1;else if(Oi(Vn.colon)&&pi("ES2015 named imports do not destructure. Use another statement for destructuring after the import."),ui(Vn.comma),Oi(Vn.braceR))break;La()}}}(),ri(zn.L)),us(),za(),di()}}function Ma(){Wo()}function La(){Wn?function(){if(_s(),Pi(Vn.comma)||Pi(Vn.braceR))Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ImportDeclaration;else{if(_s(),Pi(Vn.comma)||Pi(Vn.braceR))return Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ImportDeclaration,Yn.tokens[Yn.tokens.length-2].isType=!0,void(Yn.tokens[Yn.tokens.length-1].isType=!0);if(_s(),Pi(Vn.comma)||Pi(Vn.braceR))return Yn.tokens[Yn.tokens.length-3].identifierRole=ki.ImportAccess,void(Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ImportDeclaration);_s(),Yn.tokens[Yn.tokens.length-3].identifierRole=ki.ImportAccess,Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ImportDeclaration,Yn.tokens[Yn.tokens.length-4].isType=!0,Yn.tokens[Yn.tokens.length-3].isType=!0,Yn.tokens[Yn.tokens.length-2].isType=!0,Yn.tokens[Yn.tokens.length-1].isType=!0}}():Jn?function(){const t=Yn.contextualKeyword===zn.bt||Yn.type===Vn.ee;t?Ti():_s(),ni(zn.T)&&!ii(zn.T)?(_s(),(!t||Pi(Vn.name)||Yn.type&Vn.IS_KEYWORD)&&_s()):(t&&(Pi(Vn.name)||Yn.type&Vn.IS_KEYWORD)&&_s(),oi(zn.T)&&_s())}():(Wo(),ni(zn.T)&&(Yn.tokens[Yn.tokens.length-1].identifierRole=ki.ImportAccess,Ti(),Wo()))}function za(){(Pi(Vn.Vt)||ni(zn.F)&&!ai())&&(Ti(),ys(!1,!1))}function Va(){return 0===Yn.pos&&Kn.charCodeAt(0)===Bn.numberSign&&Kn.charCodeAt(1)===Bn.exclamationMark&&qi(2),Bi(),function(){if(ga(Vn.eof),Yn.scopes.push(new Hn(0,Yn.tokens.length,!0)),0!==Yn.scopeDepth)throw new Error(`Invalid scope depth at end of file: ${Yn.scopeDepth}`);return new Ba(Yn.tokens,Yn.scopes)}()}class Ba{constructor(t,e){this.tokens=t,this.scopes=e}}class Ha{oe(){this.resultCode=""}re(){this.resultMappings=new Array(this.tokens.length)}se(){this.tokenIndex=0}constructor(t,e,n,i,o){this.code=t,this.tokens=e,this.isFlowEnabled=n,this.disableESTransforms=i,this.helperManager=o,Ha.prototype.oe.call(this),Ha.prototype.re.call(this),Ha.prototype.se.call(this)}snapshot(){return{resultCode:this.resultCode,tokenIndex:this.tokenIndex}}restoreToSnapshot(t){this.resultCode=t.resultCode,this.tokenIndex=t.tokenIndex}dangerouslyGetAndRemoveCodeSinceSnapshot(t){const e=this.resultCode.slice(t.resultCode.length);return this.resultCode=t.resultCode,e}reset(){this.resultCode="",this.resultMappings=new Array(this.tokens.length),this.tokenIndex=0}matchesContextualAtIndex(t,e){return this.matches1AtIndex(t,Vn.name)&&this.tokens[t].contextualKeyword===e}identifierNameAtIndex(t){return this.identifierNameForToken(this.tokens[t])}identifierNameAtRelativeIndex(t){return this.identifierNameForToken(this.tokenAtRelativeIndex(t))}identifierName(){return this.identifierNameForToken(this.currentToken())}identifierNameForToken(t){return this.code.slice(t.start,t.end)}rawCodeForToken(t){return this.code.slice(t.start,t.end)}stringValueAtIndex(t){return this.stringValueForToken(this.tokens[t])}stringValue(){return this.stringValueForToken(this.currentToken())}stringValueForToken(t){return this.code.slice(t.start+1,t.end-1)}matches1AtIndex(t,e){return this.tokens[t].type===e}matches2AtIndex(t,e,n){return this.tokens[t].type===e&&this.tokens[t+1].type===n}matches3AtIndex(t,e,n,i){return this.tokens[t].type===e&&this.tokens[t+1].type===n&&this.tokens[t+2].type===i}matches1(t){return this.tokens[this.tokenIndex].type===t}matches2(t,e){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e}matches3(t,e,n){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n}matches4(t,e,n,i){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n&&this.tokens[this.tokenIndex+3].type===i}matches5(t,e,n,i,o){return this.tokens[this.tokenIndex].type===t&&this.tokens[this.tokenIndex+1].type===e&&this.tokens[this.tokenIndex+2].type===n&&this.tokens[this.tokenIndex+3].type===i&&this.tokens[this.tokenIndex+4].type===o}matchesContextual(t){return this.matchesContextualAtIndex(this.tokenIndex,t)}matchesContextIdAndLabel(t,e){return this.matches1(t)&&this.currentToken().contextId===e}previousWhitespaceAndComments(){let t=this.code.slice(this.tokenIndex>0?this.tokens[this.tokenIndex-1].end:0,this.tokenIndex<this.tokens.length?this.tokens[this.tokenIndex].start:this.code.length);return this.isFlowEnabled&&(t=t.replace(/@flow/g,"")),t}replaceToken(t){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=t,this.appendTokenSuffix(),this.tokenIndex++}replaceTokenTrimmingLeftWhitespace(t){this.resultCode+=this.previousWhitespaceAndComments().replace(/[^\r\n]/g,""),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=t,this.appendTokenSuffix(),this.tokenIndex++}removeInitialToken(){this.replaceToken("")}removeToken(){this.replaceTokenTrimmingLeftWhitespace("")}removeBalancedCode(){let t=0;for(;!this.isAtEnd();){if(this.matches1(Vn.braceL))t++;else if(this.matches1(Vn.braceR)){if(0===t)return;t--}this.removeToken()}}copyExpectedToken(t){if(this.tokens[this.tokenIndex].type!==t)throw new Error(`Expected token ${t}`);this.copyToken()}copyToken(){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}copyTokenWithPrefix(t){this.resultCode+=this.previousWhitespaceAndComments(),this.appendTokenPrefix(),this.resultCode+=t,this.resultMappings[this.tokenIndex]=this.resultCode.length,this.resultCode+=this.code.slice(this.tokens[this.tokenIndex].start,this.tokens[this.tokenIndex].end),this.appendTokenSuffix(),this.tokenIndex++}appendTokenPrefix(){const t=this.currentToken();if((t.numNullishCoalesceStarts||t.isOptionalChainStart)&&(t.isAsyncOperation=function(t){let e=t.currentIndex(),n=0;const i=t.currentToken();do{const o=t.tokens[e];if(o.isOptionalChainStart&&n++,o.isOptionalChainEnd&&n--,n+=o.numNullishCoalesceStarts,n-=o.numNullishCoalesceEnds,o.contextualKeyword===zn.O&&null==o.identifierRole&&o.scopeDepth===i.scopeDepth)return!0;e+=1}while(n>0&&e<t.tokens.length);return!1}(this)),!this.disableESTransforms){if(t.numNullishCoalesceStarts)for(let e=0;e<t.numNullishCoalesceStarts;e++)t.isAsyncOperation?(this.resultCode+="await ",this.resultCode+=this.helperManager.getHelperName("asyncNullishCoalesce")):this.resultCode+=this.helperManager.getHelperName("nullishCoalesce"),this.resultCode+="(";t.isOptionalChainStart&&(t.isAsyncOperation&&(this.resultCode+="await "),this.tokenIndex>0&&this.tokenAtRelativeIndex(-1).type===Vn.ie?this.resultCode+=this.helperManager.getHelperName(t.isAsyncOperation?"asyncOptionalChainDelete":"optionalChainDelete"):this.resultCode+=this.helperManager.getHelperName(t.isAsyncOperation?"asyncOptionalChain":"optionalChain"),this.resultCode+="([")}}appendTokenSuffix(){const t=this.currentToken();if(t.isOptionalChainEnd&&!this.disableESTransforms&&(this.resultCode+="])"),t.numNullishCoalesceEnds&&!this.disableESTransforms)for(let e=0;e<t.numNullishCoalesceEnds;e++)this.resultCode+="))"}appendCode(t){this.resultCode+=t}currentToken(){return this.tokens[this.tokenIndex]}currentTokenCode(){const t=this.currentToken();return this.code.slice(t.start,t.end)}tokenAtRelativeIndex(t){return this.tokens[this.tokenIndex+t]}currentIndex(){return this.tokenIndex}nextToken(){if(this.tokenIndex===this.tokens.length)throw new Error("Unexpectedly reached end of input.");this.tokenIndex++}previousToken(){this.tokenIndex--}finish(){if(this.tokenIndex!==this.tokens.length)throw new Error("Tried to finish processing tokens before reaching the end.");return this.resultCode+=this.previousWhitespaceAndComments(),{code:this.resultCode,mappings:this.resultMappings}}isAtEnd(){return this.tokenIndex===this.tokens.length}}function qa(t,e){for(t.nextToken();t.currentToken().contextId!==e;)t.nextToken();for(;Ga(t.tokenAtRelativeIndex(-1));)t.previousToken()}function Ua(t){const e=[];t.nextToken();const n=t.currentToken().contextId;if(null==n)throw new Error("Expected context ID on open-paren starting constructor params.");for(;!t.matchesContextIdAndLabel(Vn.parenR,n);)if(t.currentToken().contextId===n){if(t.nextToken(),Ga(t.currentToken())){for(t.nextToken();Ga(t.currentToken());)t.nextToken();const n=t.currentToken();if(n.type!==Vn.name)throw new Error("Expected identifier after access modifiers in constructor arg.");const i=t.identifierNameForToken(n);e.push(`this.${i} = ${i}`)}}else t.nextToken();for(t.nextToken();t.currentToken().isType;)t.nextToken();let i=t.currentIndex(),o=!1;for(;!t.matchesContextIdAndLabel(Vn.braceR,n);){if(!o&&t.matches2(Vn.qt,Vn.parenL)){t.nextToken();const e=t.currentToken().contextId;if(null==e)throw new Error("Expected a context ID on the super call");for(;!t.matchesContextIdAndLabel(Vn.parenR,e);)t.nextToken();i=t.currentIndex(),o=!0}t.nextToken()}return t.nextToken(),{constructorInitializerStatements:e,constructorInsertPos:i}}function Ga(t){return[Vn.I,Vn.V,Vn.ft,Vn.plus,Vn.minus,Vn.ct,Vn.gt,Vn.lt,Vn.it,Vn.ot,Vn.nt,Vn.C,Vn.star,Vn.D,Vn.hash].includes(t.type)}function Wa(t){if(t.matches1(Vn.bracketL)){const e=t.currentToken().contextId;if(null==e)throw new Error("Expected class context ID on computed name open bracket.");for(;!t.matchesContextIdAndLabel(Vn.bracketR,e);)t.nextToken();t.nextToken()}else t.nextToken()}function Ja(t){if(t.removeInitialToken(),t.removeToken(),t.removeToken(),t.removeToken(),t.matches1(Vn.parenL))t.removeToken(),t.removeToken(),t.removeToken();else for(;t.matches1(Vn.dot);)t.removeToken(),t.removeToken()}const Ya={typeDeclarations:new Set,valueDeclarations:new Set};function Ka(t){const e=new Set,n=new Set;for(let i=0;i<t.tokens.length;i++){const o=t.tokens[i];o.type===Vn.name&&Si(o)&&(o.isType?e.add(t.identifierNameForToken(o)):n.add(t.identifierNameForToken(o)))}return{typeDeclarations:e,valueDeclarations:n}}function Xa(t){let e=t.currentIndex();for(;!t.matches1AtIndex(e,Vn.braceR);)e++;return t.matchesContextualAtIndex(e+1,zn.L)&&t.matches1AtIndex(e+2,Vn.string)}function Za(t){(t.matches2(Vn.Vt,Vn.braceL)||t.matches2(Vn.name,Vn.braceL)&&t.matchesContextual(zn.F))&&(t.removeToken(),t.removeToken(),t.removeBalancedCode(),t.removeToken())}function Qa(t,e,n,i){if(!t||e)return!1;const o=n.currentToken();if(null==o.rhsEndIndex)throw new Error("Expected non-null rhsEndIndex on export token.");const r=o.rhsEndIndex-n.currentIndex();if(3!==r&&(4!==r||!n.matches1AtIndex(o.rhsEndIndex-1,Vn.semi)))return!1;const s=n.tokenAtRelativeIndex(2);if(s.type!==Vn.name)return!1;const a=n.identifierNameForToken(s);return i.typeDeclarations.has(a)&&!i.valueDeclarations.has(a)}class tl extends oo{oe(){this.hadExport=!1}re(){this.hadNamedExport=!1}se(){this.hadDefaultExport=!1}constructor(t,e,n,i,o,r,s,a,l,c,d,u){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.nameManager=i,this.helperManager=o,this.reactHotLoaderTransformer=r,this.enableLegacyBabel5ModuleInterop=s,this.enableLegacyTypeScriptModuleInterop=a,this.isTypeScriptTransformEnabled=l,this.isFlowTransformEnabled=c,this.preserveDynamicImport=d,this.keepUnusedImports=u,tl.prototype.oe.call(this),tl.prototype.re.call(this),tl.prototype.se.call(this),this.declarationInfo=l?Ka(e):Ya}getPrefixCode(){let t="";return this.hadExport&&(t+='Object.defineProperty(exports, "__esModule", {value: true});'),t}getSuffixCode(){return this.enableLegacyBabel5ModuleInterop&&this.hadDefaultExport&&!this.hadNamedExport?"\nmodule.exports = exports.default;\n":""}process(){return this.tokens.matches3(Vn.Jt,Vn.name,Vn.eq)?this.processImportEquals():this.tokens.matches1(Vn.Jt)?(this.processImport(),!0):this.tokens.matches2(Vn.Wt,Vn.eq)?(this.tokens.replaceToken("module.exports"),!0):this.tokens.matches1(Vn.Wt)&&!this.tokens.currentToken().isType?(this.hadExport=!0,this.processExport()):!(!this.tokens.matches2(Vn.name,Vn.postIncDec)||!this.processPostIncDec())||(this.tokens.matches1(Vn.name)||this.tokens.matches1(Vn.jsxName)?this.processIdentifier():this.tokens.matches1(Vn.eq)?this.processAssignment():this.tokens.matches1(Vn.assign)?this.processComplexAssignment():!!this.tokens.matches1(Vn.preIncDec)&&this.processPreIncDec())}processImportEquals(){const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.importProcessor.shouldAutomaticallyElideImportedName(t)?Ja(this.tokens):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(Vn.Jt,Vn.parenL)){if(this.preserveDynamicImport)return void this.tokens.copyToken();const t=this.enableLegacyTypeScriptModuleInterop?"":`${this.helperManager.getHelperName("interopRequireWildcard")}(`;this.tokens.replaceToken(`Promise.resolve().then(() => ${t}require`);const e=this.tokens.currentToken().contextId;if(null==e)throw new Error("Expected context ID on dynamic import invocation.");for(this.tokens.copyToken();!this.tokens.matchesContextIdAndLabel(Vn.parenR,e);)this.rootTransformer.processToken();return void this.tokens.replaceToken(t?")))":"))")}if(this.removeImportAndDetectIfShouldElide())this.tokens.removeToken();else{const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),this.tokens.appendCode(this.importProcessor.claimImportCode(t))}Za(this.tokens),this.tokens.matches1(Vn.semi)&&this.tokens.removeToken()}removeImportAndDetectIfShouldElide(){if(this.tokens.removeInitialToken(),this.tokens.matchesContextual(zn.bt)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,Vn.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,zn.L))return this.removeRemainingImport(),!0;if(this.tokens.matches1(Vn.name)||this.tokens.matches1(Vn.star))return this.removeRemainingImport(),!1;if(this.tokens.matches1(Vn.string))return!1;let t=!1,e=!1;for(;!this.tokens.matches1(Vn.string);)(!t&&this.tokens.matches1(Vn.braceL)||this.tokens.matches1(Vn.comma))&&(this.tokens.removeToken(),this.tokens.matches1(Vn.braceR)||(e=!0),(this.tokens.matches2(Vn.name,Vn.comma)||this.tokens.matches2(Vn.name,Vn.braceR)||this.tokens.matches4(Vn.name,Vn.name,Vn.name,Vn.comma)||this.tokens.matches4(Vn.name,Vn.name,Vn.name,Vn.braceR))&&(t=!0)),this.tokens.removeToken();return!this.keepUnusedImports&&(this.isTypeScriptTransformEnabled||!!this.isFlowTransformEnabled&&e)&&!t}removeRemainingImport(){for(;!this.tokens.matches1(Vn.string);)this.tokens.removeToken()}processIdentifier(){const t=this.tokens.currentToken();if(t.shadowsGlobal)return!1;if(t.identifierRole===ki.ObjectShorthand)return this.processObjectShorthand();if(t.identifierRole!==ki.Access)return!1;const e=this.importProcessor.getIdentifierReplacement(this.tokens.identifierNameForToken(t));if(!e)return!1;let n=this.tokens.currentIndex()+1;for(;n<this.tokens.tokens.length&&this.tokens.tokens[n].type===Vn.parenR;)n++;return this.tokens.tokens[n].type===Vn.parenL?this.tokens.tokenAtRelativeIndex(1).type===Vn.parenL&&this.tokens.tokenAtRelativeIndex(-1).type!==Vn.Bt?(this.tokens.replaceToken(`${e}.call(void 0, `),this.tokens.removeToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(Vn.parenR)):this.tokens.replaceToken(`(0, ${e})`):this.tokens.replaceToken(e),!0}processObjectShorthand(){const t=this.tokens.identifierName(),e=this.importProcessor.getIdentifierReplacement(t);return!!e&&(this.tokens.replaceToken(`${t}: ${e}`),!0)}processExport(){if(this.tokens.matches2(Vn.Wt,Vn.N)||this.tokens.matches3(Vn.Wt,Vn.Lt,Vn.N))return this.hadNamedExport=!0,!1;if(this.tokens.matches2(Vn.Wt,Vn.Et))return this.tokens.matches3(Vn.Wt,Vn.Et,Vn.N)?(this.hadDefaultExport=!0,!1):(this.processExportDefault(),!0);if(this.tokens.matches2(Vn.Wt,Vn.braceL))return this.processExportBindings(),!0;if(this.tokens.matches2(Vn.Wt,Vn.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,zn.bt)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(Vn.braceL)){for(;!this.tokens.matches1(Vn.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(Vn.T)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(zn.L)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,Vn.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),Za(this.tokens)),!0}if(this.hadNamedExport=!0,this.tokens.matches2(Vn.Wt,Vn.Nt)||this.tokens.matches2(Vn.Wt,Vn.Mt)||this.tokens.matches2(Vn.Wt,Vn.Lt))return this.processExportVar(),!0;if(this.tokens.matches2(Vn.Wt,Vn.Rt)||this.tokens.matches3(Vn.Wt,Vn.name,Vn.Rt))return this.processExportFunction(),!0;if(this.tokens.matches2(Vn.Wt,Vn.Ut)||this.tokens.matches3(Vn.Wt,Vn.C,Vn.Ut)||this.tokens.matches2(Vn.Wt,Vn.at))return this.processExportClass(),!0;if(this.tokens.matches2(Vn.Wt,Vn.star))return this.processExportStar(),!0;throw new Error("Unrecognized export syntax.")}processAssignment(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t-1];if(e.isType||e.type!==Vn.name)return!1;if(e.shadowsGlobal)return!1;if(t>=2&&this.tokens.matches1AtIndex(t-2,Vn.dot))return!1;if(t>=2&&[Vn.Nt,Vn.Mt,Vn.Lt].includes(this.tokens.tokens[t-2].type))return!1;const n=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(e));return!!n&&(this.tokens.copyToken(),this.tokens.appendCode(` ${n} =`),!0)}processComplexAssignment(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t-1];if(e.type!==Vn.name)return!1;if(e.shadowsGlobal)return!1;if(t>=2&&this.tokens.matches1AtIndex(t-2,Vn.dot))return!1;const n=this.importProcessor.resolveExportBinding(this.tokens.identifierNameForToken(e));return!!n&&(this.tokens.appendCode(` = ${n}`),this.tokens.copyToken(),!0)}processPreIncDec(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t+1];if(e.type!==Vn.name)return!1;if(e.shadowsGlobal)return!1;if(t+2<this.tokens.tokens.length&&(this.tokens.matches1AtIndex(t+2,Vn.dot)||this.tokens.matches1AtIndex(t+2,Vn.bracketL)||this.tokens.matches1AtIndex(t+2,Vn.parenL)))return!1;const n=this.tokens.identifierNameForToken(e),i=this.importProcessor.resolveExportBinding(n);return!!i&&(this.tokens.appendCode(`${i} = `),this.tokens.copyToken(),!0)}processPostIncDec(){const t=this.tokens.currentIndex(),e=this.tokens.tokens[t],n=this.tokens.tokens[t+1];if(e.type!==Vn.name)return!1;if(e.shadowsGlobal)return!1;if(t>=1&&this.tokens.matches1AtIndex(t-1,Vn.dot))return!1;const i=this.tokens.identifierNameForToken(e),o=this.importProcessor.resolveExportBinding(i);if(!o)return!1;const r=this.tokens.rawCodeForToken(n),s=this.importProcessor.getIdentifierReplacement(i)||i;if("++"===r)this.tokens.replaceToken(`(${s} = ${o} = ${s} + 1, ${s} - 1)`);else{if("--"!==r)throw new Error(`Unexpected operator: ${r}`);this.tokens.replaceToken(`(${s} = ${o} = ${s} - 1, ${s} + 1)`)}return this.tokens.removeToken(),!0}processExportDefault(){let t=!0;if(this.tokens.matches4(Vn.Wt,Vn.Et,Vn.Rt,Vn.name)||this.tokens.matches5(Vn.Wt,Vn.Et,Vn.name,Vn.Rt,Vn.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,zn.I)){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.processNamedFunction();this.tokens.appendCode(` exports.default = ${t};`)}else if(this.tokens.matches4(Vn.Wt,Vn.Et,Vn.Ut,Vn.name)||this.tokens.matches5(Vn.Wt,Vn.Et,Vn.C,Vn.Ut,Vn.name)||this.tokens.matches3(Vn.Wt,Vn.Et,Vn.at)){this.tokens.removeInitialToken(),this.tokens.removeToken(),this.copyDecorators(),this.tokens.matches1(Vn.C)&&this.tokens.removeToken();const t=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.default = ${t};`)}else if(Qa(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))t=!1,this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken();else if(this.reactHotLoaderTransformer){const t=this.nameManager.claimFreeName("_default");this.tokens.replaceToken(`let ${t}; exports.`),this.tokens.copyToken(),this.tokens.appendCode(` = ${t} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(t)}else this.tokens.replaceToken("exports."),this.tokens.copyToken(),this.tokens.appendCode(" =");t&&(this.hadDefaultExport=!0)}copyDecorators(){for(;this.tokens.matches1(Vn.at);)if(this.tokens.copyToken(),this.tokens.matches1(Vn.parenL))this.tokens.copyExpectedToken(Vn.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(Vn.parenR);else{for(this.tokens.copyExpectedToken(Vn.name);this.tokens.matches1(Vn.dot);)this.tokens.copyExpectedToken(Vn.dot),this.tokens.copyExpectedToken(Vn.name);this.tokens.matches1(Vn.parenL)&&(this.tokens.copyExpectedToken(Vn.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(Vn.parenR))}}processExportVar(){this.isSimpleExportVar()?this.processSimpleExportVar():this.processComplexExportVar()}isSimpleExportVar(){let t=this.tokens.currentIndex();if(t++,t++,!this.tokens.matches1AtIndex(t,Vn.name))return!1;for(t++;t<this.tokens.tokens.length&&this.tokens.tokens[t].isType;)t++;return!!this.tokens.matches1AtIndex(t,Vn.eq)}processSimpleExportVar(){this.tokens.removeInitialToken(),this.tokens.copyToken();const t=this.tokens.identifierName();for(;!this.tokens.matches1(Vn.eq);)this.rootTransformer.processToken();const e=this.tokens.currentToken().rhsEndIndex;if(null==e)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<e;)this.rootTransformer.processToken();this.tokens.appendCode(`; exports.${t} = ${t}`)}processComplexExportVar(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.tokens.matches1(Vn.braceL);t&&this.tokens.appendCode("(");let e=0;for(;;)if(this.tokens.matches1(Vn.braceL)||this.tokens.matches1(Vn.dollarBraceL)||this.tokens.matches1(Vn.bracketL))e++,this.tokens.copyToken();else if(this.tokens.matches1(Vn.braceR)||this.tokens.matches1(Vn.bracketR))e--,this.tokens.copyToken();else{if(0===e&&!this.tokens.matches1(Vn.name)&&!this.tokens.currentToken().isType)break;if(this.tokens.matches1(Vn.eq)){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken()}else{const t=this.tokens.currentToken();if(wi(t)){const e=this.tokens.identifierName();let n=this.importProcessor.getIdentifierReplacement(e);if(null===n)throw new Error(`Expected a replacement for ${e} in \`export var\` syntax.`);Ci(t)&&(n=`${e}: ${n}`),this.tokens.replaceToken(n)}else this.rootTransformer.processToken()}}if(t){const t=this.tokens.currentToken().rhsEndIndex;if(null==t)throw new Error("Expected = token with an end index.");for(;this.tokens.currentIndex()<t;)this.rootTransformer.processToken();this.tokens.appendCode(")")}}processExportFunction(){this.tokens.replaceToken("");const t=this.processNamedFunction();this.tokens.appendCode(` exports.${t} = ${t};`)}processNamedFunction(){if(this.tokens.matches1(Vn.Rt))this.tokens.copyToken();else if(this.tokens.matches2(Vn.name,Vn.Rt)){if(!this.tokens.matchesContextual(zn.I))throw new Error("Expected async keyword in function export.");this.tokens.copyToken(),this.tokens.copyToken()}if(this.tokens.matches1(Vn.star)&&this.tokens.copyToken(),!this.tokens.matches1(Vn.name))throw new Error("Expected identifier for exported function name.");const t=this.tokens.identifierName();if(this.tokens.copyToken(),this.tokens.currentToken().isType)for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return this.tokens.copyExpectedToken(Vn.parenL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(Vn.parenR),this.rootTransformer.processPossibleTypeRange(),this.tokens.copyExpectedToken(Vn.braceL),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(Vn.braceR),t}processExportClass(){this.tokens.removeInitialToken(),this.copyDecorators(),this.tokens.matches1(Vn.C)&&this.tokens.removeToken();const t=this.rootTransformer.processNamedClass();this.tokens.appendCode(` exports.${t} = ${t};`)}processExportBindings(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=Xa(this.tokens),e=[];for(;;){if(this.tokens.matches1(Vn.braceR)){this.tokens.removeToken();break}const n=Qi(this.tokens);for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();if(!(n.isType||!t&&this.shouldElideExportedIdentifier(n.leftName))){const t=n.rightName;"default"===t?this.hadDefaultExport=!0:this.hadNamedExport=!0;const i=n.leftName,o=this.importProcessor.getIdentifierReplacement(i);e.push(`exports.${t} = ${o||i};`)}if(this.tokens.matches1(Vn.braceR)){this.tokens.removeToken();break}if(this.tokens.matches2(Vn.comma,Vn.braceR)){this.tokens.removeToken(),this.tokens.removeToken();break}if(!this.tokens.matches1(Vn.comma))throw new Error(`Unexpected token: ${JSON.stringify(this.tokens.currentToken())}`);this.tokens.removeToken()}if(this.tokens.matchesContextual(zn.L)){this.tokens.removeToken();const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),Za(this.tokens)}else this.tokens.appendCode(e.join(" "));this.tokens.matches1(Vn.semi)&&this.tokens.removeToken()}processExportStar(){for(this.tokens.removeInitialToken();!this.tokens.matches1(Vn.string);)this.tokens.removeToken();const t=this.tokens.stringValue();this.tokens.replaceTokenTrimmingLeftWhitespace(this.importProcessor.claimImportCode(t)),Za(this.tokens),this.tokens.matches1(Vn.semi)&&this.tokens.removeToken()}shouldElideExportedIdentifier(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.declarationInfo.valueDeclarations.has(t)}}class el extends oo{constructor(t,e,n,i,o,r,s,a){super(),this.tokens=t,this.nameManager=e,this.helperManager=n,this.reactHotLoaderTransformer=i,this.isTypeScriptTransformEnabled=o,this.isFlowTransformEnabled=r,this.keepUnusedImports=s,this.nonTypeIdentifiers=o&&!s?po(t,a):new Set,this.declarationInfo=o&&!s?Ka(t):Ya,this.injectCreateRequireForImportRequire=Boolean(a.injectCreateRequireForImportRequire)}process(){if(this.tokens.matches3(Vn.Jt,Vn.name,Vn.eq))return this.processImportEquals();if(this.tokens.matches4(Vn.Jt,Vn.name,Vn.name,Vn.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,zn.bt)){this.tokens.removeInitialToken();for(let t=0;t<7;t++)this.tokens.removeToken();return!0}if(this.tokens.matches2(Vn.Wt,Vn.eq))return this.tokens.replaceToken("module.exports"),!0;if(this.tokens.matches5(Vn.Wt,Vn.Jt,Vn.name,Vn.name,Vn.eq)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,zn.bt)){this.tokens.removeInitialToken();for(let t=0;t<8;t++)this.tokens.removeToken();return!0}if(this.tokens.matches1(Vn.Jt))return this.processImport();if(this.tokens.matches2(Vn.Wt,Vn.Et))return this.processExportDefault();if(this.tokens.matches2(Vn.Wt,Vn.braceL))return this.processNamedExports();if(this.tokens.matches2(Vn.Wt,Vn.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,zn.bt)){if(this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.matches1(Vn.braceL)){for(;!this.tokens.matches1(Vn.braceR);)this.tokens.removeToken();this.tokens.removeToken()}else this.tokens.removeToken(),this.tokens.matches1(Vn.T)&&(this.tokens.removeToken(),this.tokens.removeToken());return this.tokens.matchesContextual(zn.L)&&this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,Vn.string)&&(this.tokens.removeToken(),this.tokens.removeToken(),Za(this.tokens)),!0}return!1}processImportEquals(){const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.shouldAutomaticallyElideImportedName(t)?Ja(this.tokens):this.injectCreateRequireForImportRequire?(this.tokens.replaceToken("const"),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.replaceToken(this.helperManager.getHelperName("require"))):this.tokens.replaceToken("const"),!0}processImport(){if(this.tokens.matches2(Vn.Jt,Vn.parenL))return!1;const t=this.tokens.snapshot();if(this.removeImportTypeBindings()){for(this.tokens.restoreToSnapshot(t);!this.tokens.matches1(Vn.string);)this.tokens.removeToken();this.tokens.removeToken(),Za(this.tokens),this.tokens.matches1(Vn.semi)&&this.tokens.removeToken()}return!0}removeImportTypeBindings(){if(this.tokens.copyExpectedToken(Vn.Jt),this.tokens.matchesContextual(zn.bt)&&!this.tokens.matches1AtIndex(this.tokens.currentIndex()+1,Vn.comma)&&!this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+1,zn.L))return!0;if(this.tokens.matches1(Vn.string))return this.tokens.copyToken(),!1;this.tokens.matchesContextual(zn.K)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,zn.L)&&this.tokens.copyToken();let t=!1,e=!1,n=!1;if(this.tokens.matches1(Vn.name)&&(this.shouldAutomaticallyElideImportedName(this.tokens.identifierName())?(this.tokens.removeToken(),this.tokens.matches1(Vn.comma)&&this.tokens.removeToken()):(t=!0,this.tokens.copyToken(),this.tokens.matches1(Vn.comma)&&(n=!0,this.tokens.removeToken()))),this.tokens.matches1(Vn.star))this.shouldAutomaticallyElideImportedName(this.tokens.identifierNameAtRelativeIndex(2))?(this.tokens.removeToken(),this.tokens.removeToken(),this.tokens.removeToken()):(n&&this.tokens.appendCode(","),t=!0,this.tokens.copyExpectedToken(Vn.star),this.tokens.copyExpectedToken(Vn.name),this.tokens.copyExpectedToken(Vn.name));else if(this.tokens.matches1(Vn.braceL)){for(n&&this.tokens.appendCode(","),this.tokens.copyToken();!this.tokens.matches1(Vn.braceR);){e=!0;const n=Qi(this.tokens);if(n.isType||this.shouldAutomaticallyElideImportedName(n.rightName)){for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();this.tokens.matches1(Vn.comma)&&this.tokens.removeToken()}else{for(t=!0;this.tokens.currentIndex()<n.endIndex;)this.tokens.copyToken();this.tokens.matches1(Vn.comma)&&this.tokens.copyToken()}}this.tokens.copyExpectedToken(Vn.braceR)}return!this.keepUnusedImports&&(this.isTypeScriptTransformEnabled||!!this.isFlowTransformEnabled&&e)&&!t}shouldAutomaticallyElideImportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&!this.nonTypeIdentifiers.has(t)}processExportDefault(){if(Qa(this.isTypeScriptTransformEnabled,this.keepUnusedImports,this.tokens,this.declarationInfo))return this.tokens.removeInitialToken(),this.tokens.removeToken(),this.tokens.removeToken(),!0;if(!(this.tokens.matches4(Vn.Wt,Vn.Et,Vn.Rt,Vn.name)||this.tokens.matches5(Vn.Wt,Vn.Et,Vn.name,Vn.Rt,Vn.name)&&this.tokens.matchesContextualAtIndex(this.tokens.currentIndex()+2,zn.I)||this.tokens.matches4(Vn.Wt,Vn.Et,Vn.Ut,Vn.name)||this.tokens.matches5(Vn.Wt,Vn.Et,Vn.C,Vn.Ut,Vn.name))&&this.reactHotLoaderTransformer){const t=this.nameManager.claimFreeName("_default");return this.tokens.replaceToken(`let ${t}; export`),this.tokens.copyToken(),this.tokens.appendCode(` ${t} =`),this.reactHotLoaderTransformer.setExtractedDefaultExportName(t),!0}return!1}processNamedExports(){if(!this.isTypeScriptTransformEnabled)return!1;this.tokens.copyExpectedToken(Vn.Wt),this.tokens.copyExpectedToken(Vn.braceL);const t=Xa(this.tokens);let e=!1;for(;!this.tokens.matches1(Vn.braceR);){const n=Qi(this.tokens);if(n.isType||!t&&this.shouldElideExportedName(n.leftName)){for(;this.tokens.currentIndex()<n.endIndex;)this.tokens.removeToken();this.tokens.matches1(Vn.comma)&&this.tokens.removeToken()}else{for(e=!0;this.tokens.currentIndex()<n.endIndex;)this.tokens.copyToken();this.tokens.matches1(Vn.comma)&&this.tokens.copyToken()}}return this.tokens.copyExpectedToken(Vn.braceR),this.keepUnusedImports||!t||e||(this.tokens.removeToken(),this.tokens.removeToken(),Za(this.tokens)),!0}shouldElideExportedName(t){return this.isTypeScriptTransformEnabled&&!this.keepUnusedImports&&this.declarationInfo.typeDeclarations.has(t)&&!this.declarationInfo.valueDeclarations.has(t)}}class nl extends oo{constructor(t,e,n){super(),this.rootTransformer=t,this.tokens=e,this.isImportsTransformEnabled=n}process(){return!(!(this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange())&&(this.tokens.matches1(Vn.N)?(this.processEnum(),0):this.tokens.matches2(Vn.Wt,Vn.N)?(this.processNamedExportEnum(),0):!this.tokens.matches3(Vn.Wt,Vn.Et,Vn.N)||(this.processDefaultExportEnum(),0)))}processNamedExportEnum(){if(this.isImportsTransformEnabled){this.tokens.removeInitialToken();const t=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.tokens.appendCode(` exports.${t} = ${t};`)}else this.tokens.copyToken(),this.processEnum()}processDefaultExportEnum(){this.tokens.removeInitialToken(),this.tokens.removeToken();const t=this.tokens.identifierNameAtRelativeIndex(1);this.processEnum(),this.tokens.appendCode(this.isImportsTransformEnabled?` exports.default = ${t};`:` export default ${t};`)}processEnum(){this.tokens.replaceToken("const"),this.tokens.copyExpectedToken(Vn.name);let t=!1;this.tokens.matchesContextual(zn.Z)&&(this.tokens.removeToken(),t=this.tokens.matchesContextual(zn.vt),this.tokens.removeToken());const e=this.tokens.matches3(Vn.braceL,Vn.name,Vn.eq);this.tokens.appendCode(' = require("flow-enums-runtime")');const n=!t&&!e;for(this.tokens.replaceTokenTrimmingLeftWhitespace(n?".Mirrored([":"({");!this.tokens.matches1(Vn.braceR);){if(this.tokens.matches1(Vn.ellipsis)){this.tokens.removeToken();break}this.processEnumElement(t,e),this.tokens.matches1(Vn.comma)&&this.tokens.copyToken()}this.tokens.replaceToken(n?"]);":"});")}processEnumElement(t,e){if(t){const t=this.tokens.identifierName();this.tokens.copyToken(),this.tokens.appendCode(`: Symbol("${t}")`)}else e?(this.tokens.copyToken(),this.tokens.replaceTokenTrimmingLeftWhitespace(":"),this.tokens.copyToken()):this.tokens.replaceToken(`"${this.tokens.identifierName()}"`)}}const il="jest",ol=["mock","unmock","enableAutomock","disableAutomock"];class rl extends oo{oe(){this.hoistedFunctionNames=[]}constructor(t,e,n,i){super(),this.rootTransformer=t,this.tokens=e,this.nameManager=n,this.importProcessor=i,rl.prototype.oe.call(this)}process(){return!(0!==this.tokens.currentToken().scopeDepth||!this.tokens.matches4(Vn.name,Vn.dot,Vn.name,Vn.parenL)||this.tokens.identifierName()!==il)&&!function(t){let e,n=t[0],i=1;for(;i<t.length;){const o=t[i],r=t[i+1];if(i+=2,("optionalAccess"===o||"optionalCall"===o)&&null==n)return;"access"===o||"optionalAccess"===o?(e=n,n=r(n)):"call"!==o&&"optionalCall"!==o||(n=r((...t)=>n.call(e,...t)),e=void 0)}return n}([this,"access",t=>t.importProcessor,"optionalAccess",t=>t.getGlobalNames,"call",t=>t(),"optionalAccess",t=>t.has,"call",t=>t(il)])&&this.extractHoistedCalls()}getHoistedCode(){return this.hoistedFunctionNames.length>0?this.hoistedFunctionNames.map(t=>`${t}();`).join(""):""}extractHoistedCalls(){this.tokens.removeToken();let t=!1;for(;this.tokens.matches3(Vn.dot,Vn.name,Vn.parenL);){const e=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);if(ol.includes(e)){const e=this.nameManager.claimFreeName("__jestHoist");this.hoistedFunctionNames.push(e),this.tokens.replaceToken(`function ${e}(){${il}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(Vn.parenR),this.tokens.appendCode(";}"),t=!1}else t?this.tokens.copyToken():this.tokens.replaceToken(`${il}.`),this.tokens.copyToken(),this.tokens.copyToken(),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(Vn.parenR),t=!0}return!0}}class sl extends oo{constructor(t){super(),this.tokens=t}process(){if(this.tokens.matches1(Vn.num)){const t=this.tokens.currentTokenCode();if(t.includes("_"))return this.tokens.replaceToken(t.replace(/_/g,"")),!0}return!1}}class al extends oo{constructor(t,e){super(),this.tokens=t,this.nameManager=e}process(){return!!this.tokens.matches2(Vn.$t,Vn.braceL)&&(this.tokens.copyToken(),this.tokens.appendCode(` (${this.nameManager.claimFreeName("e")})`),!0)}}class ll extends oo{constructor(t,e){super(),this.tokens=t,this.nameManager=e}process(){if(this.tokens.matches1(Vn.nullishCoalescing)){const t=this.tokens.currentToken();return this.tokens.replaceTokenTrimmingLeftWhitespace(this.tokens.tokens[t.nullishStartIndex].isAsyncOperation?", async () => (":", () => ("),!0}if(this.tokens.matches1(Vn.ie)&&this.tokens.tokenAtRelativeIndex(1).isOptionalChainStart)return this.tokens.removeInitialToken(),!0;const t=this.tokens.currentToken().subscriptStartIndex;if(null!=t&&this.tokens.tokens[t].isOptionalChainStart&&this.tokens.tokenAtRelativeIndex(-1).type!==Vn.qt){const e=this.nameManager.claimFreeName("_");let n;if(n=t>0&&this.tokens.matches1AtIndex(t-1,Vn.ie)&&this.isLastSubscriptInChain()?`${e} => delete ${e}`:`${e} => ${e}`,this.tokens.tokens[t].isAsyncOperation&&(n=`async ${n}`),this.tokens.matches2(Vn.questionDot,Vn.parenL)||this.tokens.matches2(Vn.questionDot,Vn.lessThan))this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalCall', ${n}`);else if(this.tokens.matches2(Vn.questionDot,Vn.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}`);else if(this.tokens.matches1(Vn.questionDot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'optionalAccess', ${n}.`);else if(this.tokens.matches1(Vn.dot))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}.`);else if(this.tokens.matches1(Vn.bracketL))this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'access', ${n}[`);else{if(!this.tokens.matches1(Vn.parenL))throw new Error("Unexpected subscript operator in optional chain.");this.justSkippedSuper()&&this.tokens.appendCode(".bind(this)"),this.tokens.replaceTokenTrimmingLeftWhitespace(`, 'call', ${n}(`)}return!0}return!1}isLastSubscriptInChain(){let t=0;for(let e=this.tokens.currentIndex()+1;;e++){if(e>=this.tokens.tokens.length)throw new Error("Reached the end of the code while finding the end of the access chain.");if(this.tokens.tokens[e].isOptionalChainStart?t++:this.tokens.tokens[e].isOptionalChainEnd&&t--,t<0)return!0;if(0===t&&null!=this.tokens.tokens[e].subscriptStartIndex)return!1}}justSkippedSuper(){let t=0,e=this.tokens.currentIndex()-1;for(;;){if(e<0)throw new Error("Reached the start of the code while finding the start of the access chain.");if(this.tokens.tokens[e].isOptionalChainStart?t--:this.tokens.tokens[e].isOptionalChainEnd&&t++,t<0)return!1;if(0===t&&null!=this.tokens.tokens[e].subscriptStartIndex)return this.tokens.tokens[e-1].type===Vn.qt;e--}}}class cl extends oo{constructor(t,e,n,i){super(),this.rootTransformer=t,this.tokens=e,this.importProcessor=n,this.options=i}process(){const t=this.tokens.currentIndex();if("createReactClass"===this.tokens.identifierName()){const e=this.importProcessor&&this.importProcessor.getIdentifierReplacement("createReactClass");return e?this.tokens.replaceToken(`(0, ${e})`):this.tokens.copyToken(),this.tryProcessCreateClassCall(t),!0}if(this.tokens.matches3(Vn.name,Vn.dot,Vn.name)&&"React"===this.tokens.identifierName()&&"createClass"===this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+2)){const e=this.importProcessor&&this.importProcessor.getIdentifierReplacement("React")||"React";return this.tokens.replaceToken(e),this.tokens.copyToken(),this.tokens.copyToken(),this.tryProcessCreateClassCall(t),!0}return!1}tryProcessCreateClassCall(t){const e=this.findDisplayName(t);e&&this.classNeedsDisplayName()&&(this.tokens.copyExpectedToken(Vn.parenL),this.tokens.copyExpectedToken(Vn.braceL),this.tokens.appendCode(`displayName: '${e}',`),this.rootTransformer.processBalancedCode(),this.tokens.copyExpectedToken(Vn.braceR),this.tokens.copyExpectedToken(Vn.parenR))}findDisplayName(t){return t<2?null:this.tokens.matches2AtIndex(t-2,Vn.name,Vn.eq)||t>=2&&this.tokens.tokens[t-2].identifierRole===ki.ObjectKey?this.tokens.identifierNameAtIndex(t-2):this.tokens.matches2AtIndex(t-2,Vn.Wt,Vn.Et)?this.getDisplayNameFromFilename():null}getDisplayNameFromFilename(){const t=(this.options.filePath||"unknown").split("/"),e=t[t.length-1],n=e.lastIndexOf("."),i=-1===n?e:e.slice(0,n);return"index"===i&&t[t.length-2]?t[t.length-2]:i}classNeedsDisplayName(){let t=this.tokens.currentIndex();if(!this.tokens.matches2(Vn.parenL,Vn.braceL))return!1;const e=this.tokens.tokens[t+1].contextId;if(null==e)throw new Error("Expected non-null context ID on object open-brace.");for(;t<this.tokens.tokens.length;t++){const n=this.tokens.tokens[t];if(n.type===Vn.braceR&&n.contextId===e){t++;break}if("displayName"===this.tokens.identifierNameAtIndex(t)&&this.tokens.tokens[t].identifierRole===ki.ObjectKey&&n.contextId===e)return!1}if(t===this.tokens.tokens.length)throw new Error("Unexpected end of input when processing React class.");return this.tokens.matches1AtIndex(t,Vn.parenR)||this.tokens.matches2AtIndex(t,Vn.comma,Vn.parenR)}}class dl extends oo{oe(){this.extractedDefaultExportName=null}constructor(t,e){super(),this.tokens=t,this.filePath=e,dl.prototype.oe.call(this)}setExtractedDefaultExportName(t){this.extractedDefaultExportName=t}getPrefixCode(){return"\n      (function () {\n        var enterModule = require('react-hot-loader').enterModule;\n        enterModule && enterModule(module);\n      })();".replace(/\s+/g," ").trim()}getSuffixCode(){const t=new Set;for(const n of this.tokens.tokens)!n.isType&&Si(n)&&n.identifierRole!==ki.ImportDeclaration&&t.add(this.tokens.identifierNameForToken(n));const e=Array.from(t).map(t=>({variableName:t,uniqueLocalName:t}));return this.extractedDefaultExportName&&e.push({variableName:this.extractedDefaultExportName,uniqueLocalName:"default"}),`\n;(function () {\n  var reactHotLoader = require('react-hot-loader').default;\n  var leaveModule = require('react-hot-loader').leaveModule;\n  if (!reactHotLoader) {\n    return;\n  }\n${e.map(({variableName:t,uniqueLocalName:e})=>`  reactHotLoader.register(${t}, "${e}", ${JSON.stringify(this.filePath||"")});`).join("\n")}\n  leaveModule(module);\n})();`}process(){return!1}}const ul=new Set(["break","case","catch","class","const","continue","debugger","default","delete","do","else","export","extends","finally","for","function","if","import","in","instanceof","new","return","super","switch","this","throw","try","typeof","var","void","while","with","yield","enum","implements","interface","let","package","private","protected","public","static","await","false","null","true"]);function pl(t){if(0===t.length)return!1;if(!bi[t.charCodeAt(0)])return!1;for(let e=1;e<t.length;e++)if(!vi[t.charCodeAt(e)])return!1;return!ul.has(t)}class hl extends oo{constructor(t,e,n){super(),this.rootTransformer=t,this.tokens=e,this.isImportsTransformEnabled=n}process(){return!(!(this.rootTransformer.processPossibleArrowParamEnd()||this.rootTransformer.processPossibleAsyncArrowWithTypeParams()||this.rootTransformer.processPossibleTypeRange())&&(this.tokens.matches1(Vn.lt)||this.tokens.matches1(Vn.ot)||this.tokens.matches1(Vn.it)||this.tokens.matches1(Vn.C)||this.tokens.matches1(Vn.ct)||this.tokens.matches1(Vn.nt)||this.tokens.matches1(Vn.nonNullAssertion)?(this.tokens.removeInitialToken(),0):this.tokens.matches1(Vn.N)||this.tokens.matches2(Vn.Lt,Vn.N)?(this.processEnum(),0):!this.tokens.matches2(Vn.Wt,Vn.N)&&!this.tokens.matches3(Vn.Wt,Vn.Lt,Vn.N)||(this.processEnum(!0),0)))}processEnum(t=!1){for(this.tokens.removeInitialToken();this.tokens.matches1(Vn.Lt)||this.tokens.matches1(Vn.N);)this.tokens.removeToken();const e=this.tokens.identifierName();this.tokens.removeToken(),t&&!this.isImportsTransformEnabled&&this.tokens.appendCode("export "),this.tokens.appendCode(`var ${e}; (function (${e})`),this.tokens.copyExpectedToken(Vn.braceL),this.processEnumBody(e),this.tokens.copyExpectedToken(Vn.braceR),this.tokens.appendCode(t&&this.isImportsTransformEnabled?`)(${e} || (exports.${e} = ${e} = {}));`:`)(${e} || (${e} = {}));`)}processEnumBody(t){let e=null;for(;!this.tokens.matches1(Vn.braceR);){const{nameStringCode:n,variableName:i}=this.extractEnumKeyInfo(this.tokens.currentToken());this.tokens.removeInitialToken(),this.tokens.matches3(Vn.eq,Vn.string,Vn.comma)||this.tokens.matches3(Vn.eq,Vn.string,Vn.braceR)?this.processStringLiteralEnumMember(t,n,i):this.tokens.matches1(Vn.eq)?this.processExplicitValueEnumMember(t,n,i):this.processImplicitValueEnumMember(t,n,i,e),this.tokens.matches1(Vn.comma)&&this.tokens.removeToken(),e=null!=i?i:`${t}[${n}]`}}extractEnumKeyInfo(t){if(t.type===Vn.name){const e=this.tokens.identifierNameForToken(t);return{nameStringCode:`"${e}"`,variableName:pl(e)?e:null}}if(t.type===Vn.string){const e=this.tokens.stringValueForToken(t);return{nameStringCode:this.tokens.code.slice(t.start,t.end),variableName:pl(e)?e:null}}throw new Error("Expected name or string at beginning of enum element.")}processStringLiteralEnumMember(t,e,n){null!=n?(this.tokens.appendCode(`const ${n}`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(`; ${t}[${e}] = ${n};`)):(this.tokens.appendCode(`${t}[${e}]`),this.tokens.copyToken(),this.tokens.copyToken(),this.tokens.appendCode(";"))}processExplicitValueEnumMember(t,e,n){const i=this.tokens.currentToken().rhsEndIndex;if(null==i)throw new Error("Expected rhsEndIndex on enum assign.");if(null!=n){for(this.tokens.appendCode(`const ${n}`),this.tokens.copyToken();this.tokens.currentIndex()<i;)this.rootTransformer.processToken();this.tokens.appendCode(`; ${t}[${t}[${e}] = ${n}] = ${e};`)}else{for(this.tokens.appendCode(`${t}[${t}[${e}]`),this.tokens.copyToken();this.tokens.currentIndex()<i;)this.rootTransformer.processToken();this.tokens.appendCode(`] = ${e};`)}}processImplicitValueEnumMember(t,e,n,i){let o=null!=i?`${i} + 1`:"0";null!=n&&(this.tokens.appendCode(`const ${n} = ${o}; `),o=n),this.tokens.appendCode(`${t}[${t}[${e}] = ${o}] = ${e};`)}}class fl{oe(){this.transformers=[]}re(){this.generatedVariables=[]}constructor(t,e,n,i){fl.prototype.oe.call(this),fl.prototype.re.call(this),this.nameManager=t.nameManager,this.helperManager=t.helperManager;const{tokenProcessor:o,importProcessor:r}=t;this.tokens=o,this.isImportsTransformEnabled=e.includes("imports"),this.isReactHotLoaderTransformEnabled=e.includes("react-hot-loader"),this.disableESTransforms=Boolean(i.disableESTransforms),i.disableESTransforms||(this.transformers.push(new ll(o,this.nameManager)),this.transformers.push(new sl(o)),this.transformers.push(new al(o,this.nameManager))),e.includes("jsx")&&("preserve"!==i.jsxRuntime&&this.transformers.push(new ro(this,o,r,this.nameManager,i)),this.transformers.push(new cl(this,o,r,i)));let s=null;if(e.includes("react-hot-loader")){if(!i.filePath)throw new Error("filePath is required when using the react-hot-loader transform.");s=new dl(o,i.filePath),this.transformers.push(s)}if(e.includes("imports")){if(null===r)throw new Error("Expected non-null importProcessor with imports transform enabled.");this.transformers.push(new tl(this,o,r,this.nameManager,this.helperManager,s,n,Boolean(i.enableLegacyTypeScriptModuleInterop),e.includes("typescript"),e.includes("flow"),Boolean(i.preserveDynamicImport),Boolean(i.keepUnusedImports)))}else this.transformers.push(new el(o,this.nameManager,this.helperManager,s,e.includes("typescript"),e.includes("flow"),Boolean(i.keepUnusedImports),i));e.includes("flow")&&this.transformers.push(new nl(this,o,e.includes("imports"))),e.includes("typescript")&&this.transformers.push(new hl(this,o,e.includes("imports"))),e.includes("jest")&&this.transformers.push(new rl(this,o,this.nameManager,r))}transform(){this.tokens.reset(),this.processBalancedCode();let t=this.isImportsTransformEnabled?'"use strict";':"";for(const o of this.transformers)t+=o.getPrefixCode();t+=this.helperManager.emitHelpers(),t+=this.generatedVariables.map(t=>` var ${t};`).join("");for(const o of this.transformers)t+=o.getHoistedCode();let e="";for(const o of this.transformers)e+=o.getSuffixCode();const n=this.tokens.finish();let{code:i}=n;if(i.startsWith("#!")){let o=i.indexOf("\n");return-1===o&&(o=i.length,i+="\n"),{code:i.slice(0,o+1)+t+i.slice(o+1)+e,mappings:this.shiftMappings(n.mappings,t.length)}}return{code:t+i+e,mappings:this.shiftMappings(n.mappings,t.length)}}processBalancedCode(){let t=0,e=0;for(;!this.tokens.isAtEnd();){if(this.tokens.matches1(Vn.braceL)||this.tokens.matches1(Vn.dollarBraceL))t++;else if(this.tokens.matches1(Vn.braceR)){if(0===t)return;t--}if(this.tokens.matches1(Vn.parenL))e++;else if(this.tokens.matches1(Vn.parenR)){if(0===e)return;e--}this.processToken()}}processToken(){if(this.tokens.matches1(Vn.Ut))this.processClass();else{for(const t of this.transformers)if(t.process())return;this.tokens.copyToken()}}processNamedClass(){if(!this.tokens.matches2(Vn.Ut,Vn.name))throw new Error("Expected identifier for exported class name.");const t=this.tokens.identifierNameAtIndex(this.tokens.currentIndex()+1);return this.processClass(),t}processClass(){const t=function(t,e,n,i){const o=e.snapshot(),r=function(t){const e=t.currentToken(),n=e.contextId;if(null==n)throw new Error("Expected context ID on class token.");const i=e.isExpression;if(null==i)throw new Error("Expected isExpression on class token.");let o=null,r=!1;for(t.nextToken(),t.matches1(Vn.name)&&(o=t.identifierName());!t.matchesContextIdAndLabel(Vn.braceL,n);)t.matches1(Vn.Gt)&&!t.currentToken().isType&&(r=!0),t.nextToken();return{isExpression:i,className:o,hasSuperclass:r}}(e);let s=[];const a=[],l=[];let c=null;const d=[],u=[],p=e.currentToken().contextId;if(null==p)throw new Error("Expected non-null class context ID on class open-brace.");for(e.nextToken();!e.matchesContextIdAndLabel(Vn.braceR,p);)if(e.matchesContextual(zn.P)&&!e.currentToken().isType)({constructorInitializerStatements:s,constructorInsertPos:c}=Ua(e));else if(e.matches1(Vn.semi))i||u.push({start:e.currentIndex(),end:e.currentIndex()+1}),e.nextToken();else if(e.currentToken().isType)e.nextToken();else{const o=e.currentIndex();let r=!1,h=!1,f=!1;for(;Ga(e.currentToken());)e.matches1(Vn.gt)&&(r=!0),e.matches1(Vn.hash)&&(h=!0),(e.matches1(Vn.D)||e.matches1(Vn.C))&&(f=!0),e.nextToken();if(r&&e.matches1(Vn.braceL)){qa(e,p);continue}if(h){qa(e,p);continue}if(e.matchesContextual(zn.P)&&!e.currentToken().isType){({constructorInitializerStatements:s,constructorInsertPos:c}=Ua(e));continue}const m=e.currentIndex();if(Wa(e),e.matches1(Vn.lessThan)||e.matches1(Vn.parenL)){qa(e,p);continue}for(;e.currentToken().isType;)e.nextToken();if(e.matches1(Vn.eq)){const i=e.currentIndex(),o=e.currentToken().rhsEndIndex;if(null==o)throw new Error("Expected rhsEndIndex on class field assignment.");for(e.nextToken();e.currentIndex()<o;)t.processToken();let s;r?(s=n.claimFreeName("__initStatic"),l.push(s)):(s=n.claimFreeName("__init"),a.push(s)),d.push({initializerName:s,equalsIndex:i,start:m,end:e.currentIndex()})}else i&&!f||u.push({start:o,end:e.currentIndex()})}return e.restoreToSnapshot(o),i?{headerInfo:r,constructorInitializerStatements:s,instanceInitializerNames:[],staticInitializerNames:[],constructorInsertPos:c,fields:[],rangesToRemove:u}:{headerInfo:r,constructorInitializerStatements:s,instanceInitializerNames:a,staticInitializerNames:l,constructorInsertPos:c,fields:d,rangesToRemove:u}}(this,this.tokens,this.nameManager,this.disableESTransforms),e=(t.headerInfo.isExpression||!t.headerInfo.className)&&t.staticInitializerNames.length+t.instanceInitializerNames.length>0;let n=t.headerInfo.className;e&&(n=this.nameManager.claimFreeName("_class"),this.generatedVariables.push(n),this.tokens.appendCode(` (${n} =`));const i=this.tokens.currentToken().contextId;if(null==i)throw new Error("Expected class to have a context ID.");for(this.tokens.copyExpectedToken(Vn.Ut);!this.tokens.matchesContextIdAndLabel(Vn.braceL,i);)this.processToken();this.processClassBody(t,n);const o=t.staticInitializerNames.map(t=>`${n}.${t}()`);e?this.tokens.appendCode(`, ${o.map(t=>`${t}, `).join("")}${n})`):t.staticInitializerNames.length>0&&this.tokens.appendCode(` ${o.map(t=>`${t};`).join(" ")}`)}processClassBody(t,e){const{headerInfo:n,constructorInsertPos:i,constructorInitializerStatements:o,fields:r,instanceInitializerNames:s,rangesToRemove:a}=t;let l=0,c=0;const d=this.tokens.currentToken().contextId;if(null==d)throw new Error("Expected non-null context ID on class.");this.tokens.copyExpectedToken(Vn.braceL),this.isReactHotLoaderTransformEnabled&&this.tokens.appendCode("__reactstandin__regenerateByEval(key, code) {this[key] = eval(code);}");const u=o.length+s.length>0;if(null===i&&u){const t=this.makeConstructorInitCode(o,s,e);if(n.hasSuperclass){const e=this.nameManager.claimFreeName("args");this.tokens.appendCode(`constructor(...${e}) { super(...${e}); ${t}; }`)}else this.tokens.appendCode(`constructor() { ${t}; }`)}for(;!this.tokens.matchesContextIdAndLabel(Vn.braceR,d);)if(l<r.length&&this.tokens.currentIndex()===r[l].start){let t=!1;for(this.tokens.matches1(Vn.bracketL)?this.tokens.copyTokenWithPrefix(`${r[l].initializerName}() {this`):this.tokens.matches1(Vn.string)||this.tokens.matches1(Vn.num)?(this.tokens.copyTokenWithPrefix(`${r[l].initializerName}() {this[`),t=!0):this.tokens.copyTokenWithPrefix(`${r[l].initializerName}() {this.`);this.tokens.currentIndex()<r[l].end;)t&&this.tokens.currentIndex()===r[l].equalsIndex&&this.tokens.appendCode("]"),this.processToken();this.tokens.appendCode("}"),l++}else if(c<a.length&&this.tokens.currentIndex()>=a[c].start){for(this.tokens.currentIndex()<a[c].end&&this.tokens.removeInitialToken();this.tokens.currentIndex()<a[c].end;)this.tokens.removeToken();c++}else this.tokens.currentIndex()===i?(this.tokens.copyToken(),u&&this.tokens.appendCode(`;${this.makeConstructorInitCode(o,s,e)};`),this.processToken()):this.processToken();this.tokens.copyExpectedToken(Vn.braceR)}makeConstructorInitCode(t,e,n){return[...t,...e.map(t=>`${n}.prototype.${t}.call(this)`)].join(";")}processPossibleArrowParamEnd(){if(this.tokens.matches2(Vn.parenR,Vn.colon)&&this.tokens.tokenAtRelativeIndex(1).isType){let t=this.tokens.currentIndex()+1;for(;this.tokens.tokens[t].isType;)t++;if(this.tokens.matches1AtIndex(t,Vn.arrow)){for(this.tokens.removeInitialToken();this.tokens.currentIndex()<t;)this.tokens.removeToken();return this.tokens.replaceTokenTrimmingLeftWhitespace(") =>"),!0}}return!1}processPossibleAsyncArrowWithTypeParams(){if(!this.tokens.matchesContextual(zn.I)&&!this.tokens.matches1(Vn.I))return!1;const t=this.tokens.tokenAtRelativeIndex(1);if(t.type!==Vn.lessThan||!t.isType)return!1;let e=this.tokens.currentIndex()+1;for(;this.tokens.tokens[e].isType;)e++;if(this.tokens.matches1AtIndex(e,Vn.parenL)){for(this.tokens.replaceToken("async ("),this.tokens.removeInitialToken();this.tokens.currentIndex()<e;)this.tokens.removeToken();return this.tokens.removeToken(),this.processBalancedCode(),this.processToken(),!0}return!1}processPossibleTypeRange(){if(this.tokens.currentToken().isType){for(this.tokens.removeInitialToken();this.tokens.currentToken().isType;)this.tokens.removeToken();return!0}return!1}shiftMappings(t,e){for(let n=0;n<t.length;n++){const i=t[n];void 0!==i&&(t[n]=i+e)}return t}}var ml;function gl(t,e,n){e++,t.matches1AtIndex(e,Vn.parenL)||(t.matches1AtIndex(e,Vn.name)&&(n.add(t.identifierNameAtIndex(e)),e++,t.matches1AtIndex(e,Vn.comma)&&e++),t.matches1AtIndex(e,Vn.star)&&(n.add(t.identifierNameAtIndex(e+=2)),e++),t.matches1AtIndex(e,Vn.braceL)&&function(t,e,n){for(;;){if(t.matches1AtIndex(e,Vn.braceR))return;const i=Qi(t,e);if(e=i.endIndex,i.isType||n.add(i.rightName),t.matches2AtIndex(e,Vn.comma,Vn.braceR))return;if(t.matches1AtIndex(e,Vn.braceR))return;if(!t.matches1AtIndex(e,Vn.comma))throw new Error(`Unexpected token: ${JSON.stringify(t.tokens[e])}`);e++}}(t,++e,n))}ml||(ml=1,function(t){t.S=!0,t.LinesAndColumns=void 0;var e=function(){function t(t){this.string=t;for(var e=[0],n=0;n<t.length;)switch(t[n]){case"\n":e.push(n+=1);break;case"\r":"\n"===t[n+=1]&&(n+=1),e.push(n);break;default:n++}this.offsets=e}return t.prototype.locationForIndex=function(t){if(t<0||t>this.string.length)return null;for(var e=0,n=this.offsets;n[e+1]<=t;)e++;return{line:e,column:t-n[e]}},t.prototype.indexForLocation=function(t){var e=t.line,n=t.column;return e<0||e>=this.offsets.length||n<0||n>this.lengthOfLine(e)?null:this.offsets[e]+n},t.prototype.lengthOfLine=function(t){return(t===this.offsets.length-1?this.string.length:this.offsets[t+1])-this.offsets[t]},t}();t.LinesAndColumns=e,t.default=e}({})),j`
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
`,j`
  @media (prefers-color-scheme: light) {
    :root:not([data-theme]) {
      --editor-bg: #f5f5f8;
      --editor-text: #2a2a3e;
      --editor-line-nr: #a0a0b0;
      --editor-gutter: rgba(0,0,0,0.04);
    }
  }
`,j`
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
`;const vl=I`
  display: flex;
  gap: 0;
  border-bottom: 1px solid var(--vk-color-border);
  background: var(--editor-bg);
  margin: 0;
  padding: 0;
`,bl=I`
  flex: 0 1 auto;
  padding: 10px 16px;
  border: none;
  background: transparent;
  color: var(--editor-line-nr);
  font-size: 0.85rem;
  font-weight: 500;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  transition: all 0.2s;
  &:hover {
    color: var(--editor-text);
  }
`,yl=I`
  color: var(--vk-color-accent);
  border-bottom-color: var(--vk-color-accent);
`,kl=I`
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
  margin: 0;
  border-radius: 0;
`,xl=["signal","computed","effect","batch","untrack","reactive","toRaw","isReactive","snapshot","html","vkml","each","css","keyframes","globalCss","cx","a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","dir","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","i","iframe","img","input","ins","kbd","label","legend","li","link","main","map","mark","menu","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","title","tr","track","u","ul","variable","video","wbr","circle","clipPath","defs","ellipse","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","use"],wl=xl.map(t=>En[t]);function $l({sourceVariants:t,label:e="Live output"}){const n=Object.keys(t),o=i(n[0]),s=i(""),a=i(!1),l=document.createElement("div");let c=[];function d(t){c.forEach(t=>t()),c=[],l.innerHTML="",s("");const e=t.replace(/^import\s+.*$/gm,"").trim();if(!e)return;let n;try{n=function(t,e){!function(t){Ho.strictCheck(t)}(e);try{const n=function(t,e){const n=e.transforms.includes("jsx"),i=e.transforms.includes("typescript"),o=e.transforms.includes("flow"),r=!0===e.disableESTransforms,s=function(t,e,n,i){if(i&&n)throw new Error("Cannot combine flow and typescript plugins.");ei(t,e,n,i);const o=Va();if(Yn.error)throw Qn(Yn.error);return o}(t,n,i,o),a=s.tokens,l=s.scopes,c=new Io(t,a),d=new To(c),u=new Ha(t,a,o,r,d),p=Boolean(e.enableLegacyTypeScriptModuleInterop);let h=null;return e.transforms.includes("imports")?(h=new ho(c,u,p,e,e.transforms.includes("typescript"),Boolean(e.keepUnusedImports),d),h.preprocessTokens(),Fo(u,l,h.getGlobalNames()),e.transforms.includes("typescript")&&!e.keepUnusedImports&&h.pruneTypeOnlyImports()):e.transforms.includes("typescript")&&!e.keepUnusedImports&&Fo(u,l,function(t){const e=new Set;for(let n=0;n<t.tokens.length;n++)t.matches1AtIndex(n,Vn.Jt)&&!t.matches3AtIndex(n,Vn.Jt,Vn.name,Vn.eq)&&gl(t,n,e);return e}(u)),{tokenProcessor:u,scopes:l,nameManager:c,importProcessor:h,helperManager:d}}(t,e),i=new fl(n,e.transforms,Boolean(e.enableLegacyBabel5ModuleInterop),e).transform();let o={code:i.code};if(e.sourceMapOptions){if(!e.filePath)throw new Error("filePath must be specified when generating a source map.");o={...o,sourceMap:Co(i,e.filePath,e.sourceMapOptions,t,n.tokenProcessor.tokens)}}return o}catch(n){throw e.filePath&&(n.message=`Error transforming ${e.filePath}: ${n.message}`),n}}(e,{transforms:["typescript"],disableESTransforms:!0}).code}catch(i){return void s(i?.message??String(i))}try{const t=[],e=(...e)=>{for(const n of e)t.push("string"==typeof n?document.createTextNode(n):n)},i=new Proxy(document.body,{get:(n,i)=>"append"===i?e:"appendChild"===i?e=>(t.push(e),e):Reflect.get(n,i)}),o=new Proxy(document,{get(t,n){if("body"===n)return i;if("getElementById"===n)return()=>{const t=document.createElement("div");return t.append=e,t};const o=Reflect.get(t,n);return"function"==typeof o?o.bind(t):o}}),s=[],a=t=>{const e=r(t);return s.push(e),e},d=new Function(...xl,"document",n),u=wl.map((t,e)=>"effect"===xl[e]?a:t);d(...u,o),t.forEach(t=>l.append(t)),c=s}catch(i){s(i?.message??String(i))}}function u(e){const n=document.createElement("div"),o=document.createElement("div");o.className=`${kl} language-typescript`,n.appendChild(o);const r=t[e].trim(),s=i(r),l={wrapper:n,editorEl:o,jar:null,sig:s,initialCode:r};return requestAnimationFrame(()=>{const t=function(t,e){void 0===e&&(e={});var n,i=On({class:"codejar-linenumbers",wrapClass:"codejar-wrap",width:"35px",backgroundColor:"rgba(128, 128, 128, 0.15)",color:""},e);return function(t){var e;(e=t).innerHTML=Ln.highlight(e.textContent||"",Ln.languages.typescript,"typescript"),n||(n=function(t,e){var n=getComputedStyle(t),i=document.createElement("div");i.className=e.wrapClass,i.style.position="relative";var o=document.createElement("div");o.className="codejar-linenumbers-inner-wrap",o.style.background=n.background,o.style.marginTop=n.borderTopWidth,o.style.marginBottom=n.borderBottomWidth,o.style.marginLeft=n.borderLeftWidth,o.style.borderTopLeftRadius=n.borderTopLeftRadius,o.style.borderBottomLeftRadius=n.borderBottomLeftRadius;var r=document.createElement("div");r.className=e.class,o.appendChild(r),i.appendChild(o),r.style.width=e.width,r.style.overflow="hidden",r.style.backgroundColor=e.backgroundColor,r.style.fontFamily=n.fontFamily,r.style.fontSize=n.fontSize,r.style.lineHeight=n.lineHeight,r.style.paddingTop="calc("+n.paddingTop+")",r.style.paddingLeft=n.paddingLeft,r.style.borderTopLeftRadius=n.borderTopLeftRadius,r.style.borderBottomLeftRadius=n.borderBottomLeftRadius;var s=document.createElement("div");return s.setAttribute("class","codejar-linenumber"),s.style.color=e.color||n.color,s.style.setProperty("mix-blend-mode","unset"),r.appendChild(s),t.style.paddingLeft="calc("+e.width+" + "+r.style.paddingLeft+" + 5px)",t.style.whiteSpace="pre",t.parentNode.insertBefore(i,t),i.appendChild(t),s}(t,i),t.addEventListener("scroll",function(){return n.style.top="-"+t.scrollTop+"px"}));for(var o=(t.textContent||"").replace(/\n$/g,"").split("\n").length,r="",s=0;s<o;s++)r+=s+1+"\n";n.innerText=r}}(0,{color:"#4a4a5a",backgroundColor:"rgba(255,255,255,0.04)"}),e=function(t,e,n={}){const i={tab:"\t",indentOn:/[({\[]$/,moveToNewLine:/^[)}\]]/,spellcheck:!1,catchTab:!0,preserveIdent:!0,addClosing:!0,history:!0,window:In,autoclose:{open:"([{'\"",close:")]}'\""},...n},o=i.window,r=o.document,s=[],a=[];let l,c=-1,d=!1,u=()=>{};t.setAttribute("contenteditable","plaintext-only"),t.setAttribute("spellcheck",i.spellcheck?"true":"false"),t.style.outline="none",t.style.overflowWrap="break-word",t.style.overflowY="auto",t.style.whiteSpace="pre-wrap";const p=(t,n)=>{e(t,n)},h=o.navigator.userAgent.match(/Firefox\/([0-9]+)\./),f=h?parseInt(h[1]):0;let m=!1;("plaintext-only"!==t.contentEditable||f>=136)&&(m=!0),m&&t.setAttribute("contenteditable","true");const g=j(()=>{const e=x();p(t,e),w(e)},30);let v=!1;const b=t=>!F(t)&&!R(t)&&"Meta"!==t.key&&"Control"!==t.key&&"Alt"!==t.key&&!t.key.startsWith("Arrow"),y=j(t=>{b(t)&&(C(),v=!1)},300),k=(e,n)=>{s.push([e,n]),t.addEventListener(e,n)};function x(){const e=M(),n={start:0,end:0,dir:void 0};let{anchorNode:i,anchorOffset:o,focusNode:s,focusOffset:a}=e;if(!i||!s)throw"error1";if(i===t&&s===t)return n.start=o>0&&t.textContent?t.textContent.length:0,n.end=a>0&&t.textContent?t.textContent.length:0,n.dir=a>=o?"->":"<-",n;if(i.nodeType===Node.ELEMENT_NODE){const t=r.createTextNode("");i.insertBefore(t,i.childNodes[o]),i=t,o=0}if(s.nodeType===Node.ELEMENT_NODE){const t=r.createTextNode("");s.insertBefore(t,s.childNodes[a]),s=t,a=0}return _(t,t=>{if(t===i&&t===s)return n.start+=o,n.end+=a,n.dir=o<=a?"->":"<-","stop";if(t===i){if(n.start+=o,n.dir)return"stop";n.dir="->"}else if(t===s){if(n.end+=a,n.dir)return"stop";n.dir="<-"}t.nodeType===Node.TEXT_NODE&&("->"!=n.dir&&(n.start+=t.nodeValue.length),"<-"!=n.dir&&(n.end+=t.nodeValue.length))}),t.normalize(),n}function w(e){const n=M();let i,o,s=0,a=0;if(e.dir||(e.dir="->"),e.start<0&&(e.start=0),e.end<0&&(e.end=0),"<-"==e.dir){const{start:t,end:n}=e;e.start=n,e.end=t}let l=0;_(t,t=>{if(t.nodeType!==Node.TEXT_NODE)return;const n=(t.nodeValue||"").length;if(l+n>e.start&&(i||(i=t,s=e.start-l),l+n>e.end))return o=t,a=e.end-l,"stop";l+=n}),i||(i=t,s=t.childNodes.length),o||(o=t,a=t.childNodes.length),"<-"==e.dir&&([i,s,o,a]=[o,a,i,s]);{const t=$(i);if(t){const e=r.createTextNode("");t.parentNode?.insertBefore(e,t),i=e,s=0}const e=$(o);if(e){const t=r.createTextNode("");e.parentNode?.insertBefore(t,e),o=t,a=0}}n.setBaseAndExtent(i,s,o,a),t.normalize()}function $(e){for(;e&&e!==t;){if(e.nodeType===Node.ELEMENT_NODE){const t=e;if("false"==t.getAttribute("contenteditable"))return t}e=e.parentNode}}function S(){const e=M().getRangeAt(0),n=r.createRange();return n.selectNodeContents(t),n.setEnd(e.startContainer,e.startOffset),n.toString()}function A(){const e=M().getRangeAt(0),n=r.createRange();return n.selectNodeContents(t),n.setStart(e.endContainer,e.endOffset),n.toString()}function E(t){if(m&&"Enter"===t.key)if(N(t),t.stopPropagation(),""==A()){O("\n ");const t=x();t.start=--t.end,w(t)}else O("\n")}function C(){if(!d)return;const e=t.innerHTML,n=x(),i=a[c];i&&i.html===e&&i.pos.start===n.start&&i.pos.end===n.end||(c++,a[c]={html:e,pos:n},a.splice(c+1),c>300&&(c=300,a.splice(0,1)))}function _(t,e){const n=[];t.firstChild&&n.push(t.firstChild);let i=n.pop();for(;i&&"stop"!==e(i);)i.nextSibling&&n.push(i.nextSibling),i.firstChild&&n.push(i.firstChild),i=n.pop()}function T(t){return t.metaKey||t.ctrlKey}function F(t){return T(t)&&!t.shiftKey&&"Z"===I(t)}function R(t){return T(t)&&t.shiftKey&&"Z"===I(t)}function I(t){let e=t.key||t.keyCode||t.which;if(e)return("string"==typeof e?e:String.fromCharCode(e)).toUpperCase()}function O(t){t=t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;"),r.execCommand("insertHTML",!1,t)}function j(t,e){let n=0;return(...i)=>{clearTimeout(n),n=o.setTimeout(()=>t(...i),e)}}function P(t){let e=t.length-1;for(;e>=0&&"\n"!==t[e];)e--;e++;let n=e;for(;n<t.length&&/[ \t]/.test(t[n]);)n++;return[t.substring(e,n)||"",e,n]}function D(){return t.textContent||""}function N(t){t.preventDefault()}function M(){return t.getRootNode().getSelection()}return k("keydown",e=>{e.defaultPrevented||(l=D(),i.preserveIdent?function(t){if("Enter"===t.key){const e=S(),n=A();let[o]=P(e),r=o;if(i.indentOn.test(e)&&(r+=i.tab),r.length>0?(N(t),t.stopPropagation(),O("\n"+r)):E(t),r!==o&&i.moveToNewLine.test(n)){const t=x();O("\n"+o),w(t)}}}(e):E(e),i.catchTab&&function(t){if("Tab"===t.key)if(N(t),t.shiftKey){const t=S();let[e,n]=P(t);if(e.length>0){const t=x(),o=Math.min(i.tab.length,e.length);w({start:n,end:n+o}),r.execCommand("delete"),t.start-=o,t.end-=o,w(t)}}else O(i.tab)}(e),i.addClosing&&function(t){const e=i.autoclose.open,n=i.autoclose.close;if(e.includes(t.key)){N(t);const i=x(),o=i.start==i.end?"":M().toString();O(t.key+o+(n[e.indexOf(t.key)]??"")),i.start++,i.end++,w(i)}}(e),i.history&&(function(e){if(F(e)){N(e),c--;const n=a[c];n&&(t.innerHTML=n.html,w(n.pos)),c<0&&(c=0)}if(R(e)){N(e),c++;const n=a[c];n&&(t.innerHTML=n.html,w(n.pos)),c>=a.length&&c--}}(e),b(e)&&!v&&(C(),v=!0)),m&&!function(t){return T(t)&&"C"===I(t)}(e)&&w(x()))}),k("keyup",t=>{t.defaultPrevented||t.isComposing||(l!==D()&&g(),y(t),u(D()))}),k("focus",t=>{d=!0}),k("blur",t=>{d=!1}),k("paste",e=>{C(),function(e){if(e.defaultPrevented)return;N(e);const n=(e.originalEvent??e).clipboardData.getData("text/plain").replace(/\r\n?/g,"\n"),i=x();O(n),p(t),w({start:Math.min(i.start,i.end)+n.length,end:Math.min(i.start,i.end)+n.length,dir:"<-"})}(e),C(),u(D())}),k("cut",e=>{C(),function(e){const n=x(),i=M();(e.originalEvent??e).clipboardData.setData("text/plain",i.toString()),r.execCommand("delete"),p(t),w({start:Math.min(n.start,n.end),end:Math.min(n.start,n.end),dir:"<-"}),N(e)}(e),C(),u(D())}),{updateOptions(t){Object.assign(i,t)},updateCode(e,n=!0){t.textContent=e,p(t),n&&u(e)},onUpdate(t){u=t},toString:D,save:x,restore:w,recordHistory:C,destroy(){for(let[e,n]of s)t.removeEventListener(e,n)}}}(o,t,{tab:"  ",catchTab:!0,preserveIdent:!0,addClosing:!0});l.jar=e,e.updateCode(r),e.onUpdate(t=>{s(t),a(t!==r),d(t)})}),l}const p={};for(const i of n)p[i]=u(i);function h(){const t=p[o()];t.jar.updateCode(t.initialCode),t.sig(t.initialCode),a(!1),d(t.initialCode)}return requestAnimationFrame(()=>{d(p[o()].initialCode)}),lt({"data-card":!0,style:"padding: 0; padding-inline: 0; margin-bottom: 2rem; overflow: hidden;"},n.length>1?Ot({class:vl},...n.map(t=>it.button({class:()=>P(bl,o()===t?yl:void 0),onclick:()=>function(t){if(t===o())return;o(t);const e=p[t];a(e.sig()!==e.initialCode),d(e.sig())}(t),style:"border-radius: var(--vk-radius-md) var(--vk-radius-md) 0 0; text-transform: uppercase;"},t))):null,Ot({class:I`
          padding-inline: 0;
          margin-top: 0;
        `},()=>null,...n.map(t=>{const e=p[t].wrapper;return r(()=>{e.style.display=o()===t?"block":"none"}),e})),Ot(Kt({style:"display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px;"},Ot({style:"font-family: var(--vk-font-mono); font-size: 0.68rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.08em; color: var(--vk-color-accent);"},"▶ "+e),()=>a()?bt({"data-style-variant":"ghost",style:"padding: 2px 8px; font-size: 0.7rem;",onclick:h},"↺ reset"):null),()=>s()?it.pre({style:"color: var(--vk-color-danger, #e45); margin: 0; white-space: pre-wrap; font-family: var(--vk-font-mono); font-size: 0.8rem;"},s()):null,l))}const Sl={html:'\nimport { signal, html, type VanillaElement } from "vanillakit";\n\ninterface CounterProps {\n  initial: number;\n}\n\nconst Counter = (props: CounterProps = { initial: 0 }): VanillaElement => {\n  const count = signal(props.initial);\n  return html`\n    <div style="display: flex; flex-direction: column; gap: 1rem;">\n      Count: ${count}\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n    </div>\n  `;\n};\n\ndocument.body.append(Counter({ initial: 10 }));\n',vkml:'\nimport { signal, div, button, type VanillaElement } from "vanillakit";\n\ninterface CounterProps {\n  initial: number;\n}\n\nconst Counter = (props: CounterProps = { initial: 0 }): VanillaElement => {\n  const count = signal(props.initial);\n  return div({ style: "display: flex; flex-direction: column; gap: 1rem;" },\n    () => "Count: " + count(),\n    button({ onclick: () => count(n => n + 1) }, "+1")\n  );\n};\n\ndocument.body.append(Counter({ initial: 10 }));\n'},Al={html:'\nimport { html, css, type VanillaElement } from "vanillakit";\n\ninterface UserComponentProps {\n  name: string;\n  role: string;\n}\n\nconst UserComponent = ({ name, role }: UserComponentProps): VanillaElement => {\n  return html`\n    <article>\n      <h3 style="margin:0 0 4px; font-size:0.95rem;">${name}</h3>\n      <p>${role}</p>\n    </article>\n  `;\n}\n\ndocument.body.append(html`\n  <div style="display:flex; gap: 1rem; flex-wrap:wrap;">\n    ${UserComponent({ name: "Ada", role: "Engineer" })}\n    ${UserComponent({ name: "Grace", role: "Admiral" })}\n    ${UserComponent({ name: "Alan", role: "Mathematician" })}\n  </div>\n`);',vkml:'\nimport { article, h3, p, div, css, type VanillaElement } from "vanillakit";\n\ninterface UserComponentProps {\n  name: string;\n  role: string;\n}\n\nconst UserComponent = ({ name, role }: UserComponentProps): VanillaElement => {\n  return article(\n    h3({ style: "margin:0 0 4px; font-size:0.95rem;" }, name),\n    p(role)\n  );\n}\n\ndocument.body.append(\n  div({ style: "display:flex; gap: 1rem; flex-wrap:wrap;" },\n    UserComponent({ name: "Ada", role: "Engineer" }),\n    UserComponent({ name: "Grace", role: "Admiral" }),\n    UserComponent({ name: "Alan", role: "Mathematician" })\n  )\n);\n'},El={html:'\nimport { signal, html } from "vanillakit";\n\nconst Greeting = ({ name, color }) => {\n  return html`\n    <p style=${() => `color: ${color()};`}>\n      Hello, ${name}!\n    </p>\n  `;\n}\n\nconst userName = signal("Ada");\nconst userColor = signal("#e8c547");\n\ndocument.body.append(html`\n  <div>\n    ${Greeting({ name: userName, color: userColor })}\n    <div style="display:flex; gap:1rem; align-items:center; flex-wrap:wrap;">\n      <input value=${userName} oninput=${(e) => userName(e.target.value)}\n        placeholder="Name" style="max-width:200px;" />\n      <input type="color" value=${userColor} oninput=${(e) => userColor(e.target.value)}\n        style="width:40px; height:34px; border:none; cursor:pointer;" />\n    </div>\n  </div>\n`);\n',vkml:'\nimport { signal, p, div, input } from "vanillakit";\n\nconst Greeting = ({ name, color }) => {\n  return vkml.p(\n    { style: () => `color: ${color()};` },\n    () => `Hello, ${name()}!`\n  );\n}\n\nconst userName = signal("Ada");\nconst userColor = signal("#e8c547");\n\ndocument.body.append(\n  div(\n    Greeting({ name: userName, color: userColor }),\n    div({ style: "display:flex; gap:1rem; align-items:center; flex-wrap:wrap;" },\n      input({ \n        value: userName, \n        oninput: (e) => userName(e.target.value),\n        placeholder: "Name", \n        style: "max-width:200px;" \n      }),\n      input({ \n        type: "color", \n        value: userColor, \n        oninput: (e) => userColor(e.target.value),\n        style: "width:40px; height:34px; border:none; cursor:pointer;" \n      })\n    )\n  )\n);\n'},Cl={html:'\nimport { html, css } from "vanillakit";\n\nconst Layout = (title, ...children) => {\n  return html`\n    <div class=${css`max-width: 800px; margin: 0 auto; padding: 24px;`}>\n      <h1>${title}</h1>\n      ${children}\n    </div>\n  `;\n}\n\nconst Child1 = () => html`<p>This is the first child component.</p>`;\nconst Child2 = () => html`<p>This is the second child component.</p>`;\n\nconst App = () => {\n  return Layout("My App",\n    Child1(),\n    Child2(),\n    html`<p>This is a child passed directly as an argument.</p>`\n  );\n}\n\ndocument.body.append(App());\n',vkml:'\nimport { div, h1, p, css } from "vanillakit";\n\nconst Layout = (title, ...children) => {\n  return div({ class: css`max-width: 800px; margin: 0 auto; padding: 24px;` },\n    h1(title),\n    ...children\n  );\n}\n\nconst Child1 = () => p("This is the first child component.");\nconst Child2 = () => p("This is the second child component.");\n\nconst App = () => {\n  return Layout("My App",\n    Child1(),\n    Child2(),\n    p("This is a child passed directly as an argument.")\n  );\n}\n\ndocument.body.append(App());\n'},_l={html:'\nimport { html } from "vanillakit";\n\nconst ChildComponent = () => html`<p>This is a child component.</p>`;\n\ndocument.body.append(html`\n  <div>\n    <h1>Parent Component</h1>\n    ${ChildComponent()}\n  </div>\n`);\n',vkml:'\nimport { p, div, h1 } from "vanillakit";\n\nconst ChildComponent = () => p("This is a child component.");\n\ndocument.body.append(\n  div(\n    h1("Parent Component"),\n    ChildComponent()\n  )\n);\n'},Tl={html:'import { signal, html, css } from "vanillakit";\n\nfunction LiveCounter(el) {\n  const count = signal(0);\n  el.replaceChildren(html`\n    <button\n      class=${css`padding: 6px 14px; cursor: pointer;`}\n      onclick=${() => count(n => n + 1)}\n    >\n      Clicked ${count} times\n    </button>\n  `);\n}\n\ndocument.body.addEventListener("htmx:afterSwap", (e) => {\n  e.detail.target\n    .querySelectorAll("[data-vanillakit]")\n    .forEach((el) => {\n      if (el.dataset.vanillakit === "counter") LiveCounter(el);\n    });\n});',vkml:'import { signal, button, css } from "vanillakit";\n\nfunction LiveCounter(el) {\n  const count = signal(0);\n  el.replaceChildren(\n    button({\n        class: css`padding: 6px 14px; cursor: pointer;`,\n        onclick: () => count(n => n + 1)\n      },\n      "Clicked ", count, " times"\n    )\n  );\n}\n\ndocument.body.addEventListener("htmx:afterSwap", (e) => {\n  e.detail.target\n    .querySelectorAll("[data-vanillakit]")\n    .forEach((el) => {\n      if (el.dataset.vanillakit === "counter") LiveCounter(el);\n    });\n});'},Fl={html:'import { signal, html } from "vanillakit";\n\nconst open = signal(false);\n\ndocument.body.append(html`\n  <div class="max-w-md mx-auto p-6">\n    <button\n      class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"\n      onclick=${() => open(v => !v)}\n    >\n      Toggle\n    </button>\n    <div class=${() => open()\n      ? "mt-4 p-4 bg-gray-800 rounded border border-gray-700"\n      : "hidden"\n    }>\n      Reactively shown/hidden via signals.\n    </div>\n  </div>\n`);',vkml:'import { signal, div, button } from "vanillakit";\n\nconst open = signal(false);\n\ndocument.body.append(\n  div({ class: "max-w-md mx-auto p-6" },\n    button({\n        class: "bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700",\n        onclick: () => open(v => !v)\n      },\n      "Toggle"\n    ),\n    div({ class: () => open() \n        ? "mt-4 p-4 bg-gray-800 rounded border border-gray-700" \n        : "hidden" \n      },\n      "Reactively shown/hidden via signals."\n    )\n  )\n);'},Rl={html:'import { html, css, cx } from "vanillakit";\n\nconst glowEffect = css`\n  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);\n  transition: box-shadow 0.3s ease;\n  &:hover { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }\n`;\n\ndocument.body.append(html`\n  <div class=${cx("p-6 rounded-lg bg-gray-900 border border-gray-700", glowEffect)}>\n    Best of both worlds.\n  </div>\n`);',vkml:'import { div, css, cx } from "vanillakit";\n\nconst glowEffect = css`\n  box-shadow: 0 0 20px rgba(59, 130, 246, 0.5);\n  transition: box-shadow 0.3s ease;\n  &:hover { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8); }\n`;\n\ndocument.body.append(\n  div({ class: cx("p-6 rounded-lg bg-gray-900 border border-gray-700", glowEffect) },\n    "Best of both worlds."\n  )\n);'},Il={html:'import { signal, html } from "vanillakit";\n\nconst todos = signal([]);\nconst loading = signal(true);\n\nfetch("/api/todos")\n  .then(r => r.json())\n  .then(data => { todos(data); loading(false); });\n\ndocument.body.append(html`\n  <div>\n    ${() => loading()\n      ? html`<p>Loading...</p>`\n      : html`<ul>\n          ${() => todos().map(t => html`<li>${t.text}</li>`)}\n        </ul>`\n    }\n  </div>\n`);',vkml:'import { signal, div, p, ul, li } from "vanillakit";\n\nconst todos = signal([]);\nconst loading = signal(true);\n\nfetch("/api/todos")\n  .then(r => r.json())\n  .then(data => { todos(data); loading(false); });\n\ndocument.body.append(\n  div(() => loading()\n    ? p("Loading...")\n    : ul(() => todos().map(t => li(t.text)))\n  )\n);'},Ol={html:'import { signal, html, each } from "vanillakit";\n\nconst todos = signal([]);\n\nasync function loadTodos() {\n  const res = await fetch("/api/todos");\n  todos(await res.json());\n}\n\nasync function addTodo(text) {\n  const res = await fetch("/api/todos", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ id: Date.now(), text, done: false }),\n  });\n  todos(list => [...list, await res.json()]);\n}\n\nloadTodos();\n\nconst input = signal("");\n\ndocument.body.append(html`\n  <div>\n    <input\n      value=${() => input()}\n      oninput=${(e) => input(e.target.value)}\n      onkeydown=${(e) => {\n        if (e.key === "Enter") { addTodo(input()); input(""); }\n      }}\n      placeholder="New todo..."\n    />\n    <ul>\n      ${each(todos, t => t.id,\n        (itemSig) => html`<li>${() => itemSig().text}</li>`\n      )}\n    </ul>\n  </div>\n`);',vkml:'import { signal, div, input as inputEl, ul, li, each } from "vanillakit";\n\nconst todos = signal([]);\n\nasync function loadTodos() {\n  const res = await fetch("/api/todos");\n  todos(await res.json());\n}\n\nasync function addTodo(text) {\n  const res = await fetch("/api/todos", {\n    method: "POST",\n    headers: { "Content-Type": "application/json" },\n    body: JSON.stringify({ id: Date.now(), text, done: false }),\n  });\n  todos(list => [...list, await res.json()]);\n}\n\nloadTodos();\n\nconst input = signal("");\n\ndocument.body.append(div(\n  inputEl({\n    value: input,\n    oninput: (e) => input(e.target.value),\n    onkeydown: (e) => {\n      if (e.key === "Enter") { addTodo(input()); input(""); }\n    },\n    placeholder: "New todo..."\n  }),\n  ul(() => each(todos, t => t.id, (itemSig) => li(() => itemSig().text)))\n));'},jl='import { initRouter } from "vanillakit";\n\n// Hash mode (default): URLs like /#/about\ninitRouter({ mode: "hash" });\n\n// History mode: URLs like /about (requires server-side fallback)\ninitRouter({ mode: "history" });',Pl={html:'import { createRouter, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/":         () => html`<h1>Home</h1>`,\n  "/user/:id": () => html`<h1>User page</h1>`,\n  "*":         () => html`<h1>404</h1>`,\n});\ndocument.body.append(Router());',vkml:'import { createRouter, h1 } from "vanillakit";\n\nconst Router = createRouter({\n  "/":         () => h1("Home"),\n  "/user/:id": () => h1("User page"),\n  "*":         () => h1("404"),\n});\ndocument.body.append(Router());'},Dl={html:'import { createRouter, routeParams, html } from "vanillakit";\n\nconst Router = createRouter({\n  "/user/:id": () => html`\n    <div>\n      <h1>User ${() => routeParams().id}</h1>\n    </div>\n  `,\n});',vkml:'import { createRouter, routeParams, div, h1 } from "vanillakit";\n\nconst Router = createRouter({\n  "/user/:id": () => div(\n    h1("User ", () => routeParams().id)\n  ),\n});'},Nl={html:'import { navigate, html } from "vanillakit";\n\n// Navigate from code\nnavigate("/user/42");\n\n// In a click handler\nhtml`<button onclick=${() => navigate("/settings")}>Settings</button>`;',vkml:'import { navigate, button } from "vanillakit";\n\n// Navigate from code\nnavigate("/user/42");\n\n// In a click handler\nbutton({ onclick: () => navigate("/settings") }, "Settings");'},Ml='import { signal, effect, batch } from "vanillakit";\n\nconst x = signal(1), y = signal(2);\neffect(() => console.log(x() + y())); // 3\nbatch(() => { x(10); y(20); });       // 30 (once)',Ll={html:'import { signal, html, css, cx } from "vanillakit";\n\nconst active = signal(false);\n\nconst base = css`padding: 8px; border-radius: 6px;`;\nconst highlight = css`background: gold; color: #111;`;\n\n// Reactive class\nhtml`<div class=${() => active() ? cx(base, highlight) : base}>Click me</div>`;\n\n// Reactive inline style\nconst size = signal(16);\nhtml`<p style=${() => `font-size: ${size()}px`}>Resizable text</p>`;',vkml:'import { signal, div, p, css, cx } from "vanillakit";\n\nconst active = signal(false);\n\nconst base = css`padding: 8px; border-radius: 6px;`;\nconst highlight = css`background: gold; color: #111;`;\n\n// Reactive class\ndiv({ class: () => active() ? cx(base, highlight) : base },\n  "Click me"\n);\n\n// Reactive inline style\nconst size = signal(16);\np({ style: () => `font-size: ${size()}px` },\n  "Resizable text"\n);'},zl='import { css, keyframes } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`animation: ${spin} 1s linear infinite;`;',Vl='import { cx, css } from "vanillakit";\n\nconst base = css`padding: 8px;`;\nconst active = css`color: gold;`;\nconst disabled = false;\nconst isActive = true;\n\ncx(base, isActive && active, disabled && "disabled");\n// falsy values are skipped',Bl={html:'import { signal, html } from "vanillakit";\n\nconst users = signal([]);\nconst loading = signal(true);\nconst error = signal(null);\n\nfetch("/api/users")\n  .then(r => r.json())\n  .then(data => { users(data); loading(false); })\n  .catch(err => { error(err.message); loading(false); });\n\ndocument.body.append(html`\n  <div>\n    ${() => {\n      if (loading()) return html`<p>Loading...</p>`;\n      if (error()) return html`<p style="color:red">${error()}</p>`;\n      return html`<ul>${() => users().map(u => html`<li>${u.name}</li>`)}</ul>`;\n    }}\n  </div>\n`);',vkml:'import { signal, div, p, ul, li } from "vanillakit";\n\nconst users = signal([]);\nconst loading = signal(true);\nconst error = signal(null);\n\nfetch("/api/users")\n  .then(r => r.json())\n  .then(data => { users(data); loading(false); })\n  .catch(err => { error(err.message); loading(false); });\n\ndocument.body.append(\n  div(() => {\n    if (loading()) return p("Loading...");\n    if (error()) return p({ style: "color:red" }, error());\n    return ul(() => users().map(u => li(u.name)));\n  })\n);'},Hl={html:'function useFetch(url) {\n  const data = signal(null);\n  const loading = signal(true);\n  const error = signal(null);\n\n  fetch(url)\n    .then(r => r.json())\n    .then(d => { data(d); loading(false); })\n    .catch(e => { error(e.message); loading(false); });\n\n  return { data, loading, error };\n}\n\n// Use it anywhere\nconst { data: todos, loading } = useFetch("/api/todos");\n\ndocument.body.append(html`\n  <div>\n    ${() => loading()\n      ? html`<p>Loading...</p>`\n      : html`<ul>\n          ${() => todos().map(t => html`<li>${t.text}</li>`)}\n        </ul>`\n    }\n  </div>\n`);',vkml:'function useFetch(url) {\n  const data = signal(null);\n  const loading = signal(true);\n  const error = signal(null);\n\n  fetch(url)\n    .then(r => r.json())\n    .then(d => { data(d); loading(false); })\n    .catch(e => { error(e.message); loading(false); });\n\n  return { data, loading, error };\n}\n\n// Use it anywhere\nconst { data: todos, loading } = useFetch("/api/todos");\n\ndocument.body.append(\n  div(() => loading()\n    ? p("Loading...")\n    : ul(() => todos().map(t => li(t.text)))\n  )\n);'},ql={html:'const form = { name: signal(""), email: signal("") };\n\nhtml`\n  <form onsubmit=${(e) => {\n    e.preventDefault();\n    console.log({ name: form.name(), email: form.email() });\n  }}>\n    <input value=${() => form.name()} oninput=${(e) => form.name(e.target.value)} />\n    <input value=${() => form.email()} oninput=${(e) => form.email(e.target.value)} type="email" />\n    <button type="submit">Submit</button>\n  </form>\n`;',vkml:'import { form as formEl, input, button } from "vanillakit";\n\nconst form = { name: signal(""), email: signal("") };\n\nformEl({\n    onsubmit: (e) => {\n      e.preventDefault();\n      console.log({ name: form.name(), email: form.email() });\n    }\n  },\n  input({ \n    value: form.name, \n    oninput: (e) => form.name(e.target.value) \n  }),\n  input({ \n    value: form.email, \n    oninput: (e) => form.email(e.target.value), \n    type: "email"\n  }),\n  button({ type: "submit" }, "Submit")\n);'},Ul='import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\nconst el = html`\n  <div>\n    <h1>Hello, ${name}!</h1>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)} />\n  </div>\n`;\ndocument.body.append(el);',Gl='import { signal, div, h1, input } from "vanillakit";\n\nconst name = signal("world");\n\nconst el = div(\n  h1("Hello, ", name, "!"),\n  input({ value: name, oninput: (e) => name(e.target.value) })\n);\ndocument.body.append(el);',Wl={html:'import { css, html } from "vanillakit";\n\nconst card = css`\n  padding: 16px; background: var(--vk-color-bg);\n  border: 1px solid var(--vk-color-border); border-radius: 8px;\n  transition: border-color 0.15s ease;\n  &:hover { border-color: var(--vk-color-accent); }\n  & .title { font-weight: 700; color: var(--vk-color-accent); }\n  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }\n`;\n\ndocument.body.append(html`\n  <div class=${card}>\n    <span class="title">Styled card</span>\n    <div class="desc">Hover me — the border changes color.</div>\n  </div>\n`);',vkml:'import { css, div, span } from "vanillakit";\n\nconst card = css`\n  padding: 16px; background: var(--vk-color-bg);\n  border: 1px solid var(--vk-color-border); border-radius: 8px;\n  transition: border-color 0.15s ease;\n  &:hover { border-color: var(--vk-color-accent); }\n  & .title { font-weight: 700; color: var(--vk-color-accent); }\n  & .desc { font-size: 0.85rem; color: gray; margin-top: 4px; }\n`;\n\ndocument.body.append(\n  div({ class: card },\n    span({ class: "title" }, "Styled card"),\n    div({ class: "desc" }, "Hover me — the border changes color.")\n  )\n);'},Jl={html:'import { signal, html } from "vanillakit";\n\nconst size = signal(16);\n\ndocument.body.append(html`\n  <div>\n    <input type="range" min="10" max="40" value=${() => size()}\n      oninput=${(e) => size(+e.target.value)}\n      style="width:200px; margin-bottom:10px;" />\n    <span style="font-family:monospace; font-size:0.8rem; margin-left:8px;">\n      ${size}px\n    </span>\n    <p style=${() => `font-size: ${size()}px; font-weight: 600; transition: font-size 0.1s;`}>\n      Resizable text\n    </p>\n  </div>\n`);',vkml:'import { signal, div, input, span, p } from "vanillakit";\n\nconst size = signal(16);\n\ndocument.body.append(\n  div(\n    input({ \n      type: "range", \n      min: "10", \n      max: "40", \n      value: size,\n      oninput: (e) => size(+e.target.value),\n      style: "width:200px; margin-bottom:10px;" \n    }),\n    span({ style: "font-family:monospace; font-size:0.8rem; margin-left:8px;" },\n      size, "px"\n    ),\n    p({ style: () => `font-size: ${size()}px; font-weight: 600; transition: font-size 0.1s;` },\n      "Resizable text"\n    )\n  )\n);'},Yl={html:'import { css, keyframes, html } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`\n  display: inline-block; width: 24px; height: 24px;\n  border: 3px solid var(--vk-color-border); border-top-color: var(--vk-color-accent);\n  border-radius: 50%; animation: ${spin} 0.8s linear infinite;\n`;\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:12px;">\n    <div class=${spinner}></div>\n    <span style="font-size:0.85rem; color:gray;">Spinning via keyframes\\`\\`</span>\n  </div>\n`);',vkml:'import { css, keyframes, div, span } from "vanillakit";\n\nconst spin = keyframes`\n  from { transform: rotate(0deg); }\n  to   { transform: rotate(360deg); }\n`;\n\nconst spinner = css`\n  display: inline-block; width: 24px; height: 24px;\n  border: 3px solid var(--vk-color-border); border-top-color: var(--vk-color-accent);\n  border-radius: 50%; animation: ${spin} 0.8s linear infinite;\n`;\n\ndocument.body.append(\n  div({ style: "display:flex; align-items:center; gap:12px;" },\n    div({ class: spinner }),\n    span({ style: "font-size:0.85rem; color:gray;" },\n      "Spinning via keyframes``"\n    )\n  )\n);'},Kl={html:'import { initVanillaCss, themeToggle } from "vanillakit";\nimport { html } from "vanillakit";\n\ninitVanillaCss();  // inject VanillaCSS\n\n// Optional: reactive dark/light toggle\nconst { theme, toggle } = themeToggle();\n\ndocument.body.append(html`\n  <button onclick=${toggle}>\n    ${() => theme() === "dark" ? "☀️ Light" : "🌙 Dark"}\n  </button>\n`);',vkml:'import { initVanillaCss, themeToggle } from "vanillakit";\nimport { button } from "vanillakit";\n\ninitVanillaCss();  // inject VanillaCSS\n\n// Optional: reactive dark/light toggle\nconst { theme, toggle } = themeToggle();\n\ndocument.body.append(\n  button({ onclick: toggle },\n    () => theme() === "dark" ? "☀️ Light" : "🌙 Dark"\n  )\n);'},Xl={html:'import { initVanillaCss, themeToggle, html } from "vanillakit";\n\ninitVanillaCss();\n\nconst { theme, toggle, set } = themeToggle();\n\ndocument.body.append(html`\n  <button onclick=${toggle}>\n    ${() => theme() === "dark" ? "☀️ Switch to light" : "🌙 Switch to dark"}\n  </button>\n`);\n\n// Explicit control\nset("dark");   // force dark — saved to localStorage\nset("light");  // force light — saved to localStorage\nset("auto");   // follow system — clears localStorage',vkml:'import { initVanillaCss, themeToggle, button } from "vanillakit";\n\ninitVanillaCss();\n\nconst { theme, toggle, set } = themeToggle();\n\ndocument.body.append(\n  button({ onclick: toggle },\n    () => theme() === "dark" ? "☀️ Switch to light" : "🌙 Switch to dark"\n  )\n);\n\n// Explicit control\nset("dark");   // force dark — saved to localStorage\nset("light");  // force light — saved to localStorage\nset("auto");   // follow system — clears localStorage'},Zl={typescript:'import { reactive, snapshot, effect } from "vanillakit";\n\nconst state = reactive({\n  todos: [\n    { text: "Learn signals", done: true },\n    { text: "Build an app",  done: false },\n  ],\n});\n\neffect(() => console.log(JSON.stringify(snapshot(state), null, 2)));\n\nstate.todos.push({ text: "Ship it", done: false });\nstate.todos[0].done = false;',html:'import { reactive, html } from "vanillakit";\n\nconst state = reactive({\n  count: 0,\n  items: ["Alpha", "Bravo"],\n});\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; align-items:center; margin-bottom:10px;">\n      <button onclick=${() => state.count++}>+1</button>\n      <button onclick=${() => state.count--}>-1</button>\n      <span style="font-family:monospace;">count = ${() => state.count}</span>\n    </div>\n    <div style="display:flex; gap:8px; margin-bottom:8px;">\n      <button onclick=${() => state.items.push("Item " + (state.items.length + 1))}>Add</button>\n      <button onclick=${() => state.items.pop()}>Remove last</button>\n    </div>\n    <ul style="margin:0; padding-left:18px;">\n      ${() => state.items.map(item => html`<li>${item}</li>`)}\n    </ul>\n  </div>\n`);',vkml:'import { reactive, vkml } from "vanillakit";\n\nconst { div, button, span, ul, li } = vkml;\n\nconst state = reactive({\n  count: 0,\n  items: ["Alpha", "Bravo"],\n});\n\ndocument.body.append(div(\n  div({ style: "display:flex; gap:8px; align-items:center; margin-bottom:10px;" },\n    button({ onclick: () => state.count++ }, "+1"),\n    button({ onclick: () => state.count-- }, "-1"),\n    span({ style: "font-family:monospace;" }, "count = ", () => state.count)\n  ),\n  div({ style: "display:flex; gap:8px; margin-bottom:8px;" },\n    button({ onclick: () => state.items.push("Item " + (state.items.length + 1)) }, "Add"),\n    button({ onclick: () => state.items.pop() }, "Remove last")\n  ),\n  ul({ style: "margin:0; padding-left:18px;" },\n    () => state.items.map(item => li(item))\n  )\n));'},Ql={html:'import { html, css, globalCss, createRouter, navLink } from "vanillakit";\n\nglobalCss`body { margin: 0; font-family: system-ui; }`;\n\nconst page = css`padding: 24px;`;\nconst active = css`color: gold; font-weight: 700;`;\nconst base = css`color: gray; text-decoration: none;`;\n\nconst Router = createRouter({\n  "/":      () => html`<div class=${page}><h1>Home</h1></div>`,\n  "/about": () => html`<div class=${page}><h1>About</h1></div>`,\n  "*":      () => html`<div class=${page}><h1>404</h1></div>`,\n});\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);',vkml:'import { div, h1, nav, css, globalCss, createRouter, navLink } from "vanillakit";\n\nglobalCss`body { margin: 0; font-family: system-ui; }`;\n\nconst page = css`padding: 24px;`;\nconst active = css`color: gold; font-weight: 700;`;\nconst base = css`color: gray; text-decoration: none;`;\n\nconst Router = createRouter({\n  "/":      () => div({ class: page }, h1("Home")),\n  "/about": () => div({ class: page }, h1("About")),\n  "*":      () => div({ class: page }, h1("404")),\n});\n\ndocument.body.append(\n  nav(\n    navLink("/", "Home", active, base),\n    navLink("/about", "About", active, base)\n  ),\n  Router()\n);'},tc={html:'// each() reuses DOM nodes by key across mutations\nconst items = signal(Array.from({ length: 8 }, randItem));\n\n// Render — each item gets a Signal<T> and ReadonlySignal<number>\nhtml`<div>\n  ${each(items, item => item.id, (itemSig, indexSig) =>\n    html`<div>\n      <span>${() => indexSig()}</span>\n      <span>${() => itemSig().name}</span>\n      <span>${() => itemSig().score}</span>\n      <input placeholder="type here…" />\n    </div>`\n  )}\n</div>`;\n\n// Mutations — DOM nodes with matching keys are reused, not recreated.\n// Text typed into inputs persists across shuffle/reverse/sort.\nitems(shuffle);                              // reorder\nitems(l => [...l].reverse());                // reverse\nitems(l => [...l, randItem()]);              // append\nitems(l => l.filter(x => x.id !== target));  // remove\nitems(l => [...l].sort((a, b) =>             // sort\n  a.name.localeCompare(b.name)\n));',vkml:'// each() reuses DOM nodes by key across mutations\nconst items = signal(Array.from({ length: 8 }, randItem));\n\n// Render — each item gets a Signal<T> and ReadonlySignal<number>\ndiv(\n  () => each(items, item => item.id, (itemSig, indexSig) =>\n    div(\n      span(() => indexSig()),\n      span(() => itemSig().name),\n      span(() => itemSig().score),\n      input({ placeholder: "type here…" })\n    )\n  )\n);\n\n// Mutations — DOM nodes with matching keys are reused, not recreated.\n// Text typed into inputs persists across shuffle/reverse/sort.\nitems(shuffle);                              // reorder\nitems(l => [...l].reverse());                // reverse\nitems(l => [...l, randItem()]);              // append\nitems(l => l.filter(x => x.id !== target));  // remove\nitems(l => [...l].sort((a, b) =>             // sort\n  a.name.localeCompare(b.name)\n));'},ec={html:'// Reactive state\nconst todos = signal([]);\nconst filter = signal("all");\nconst filteredTodos = computed(() => {\n  const f = filter();\n  const l = todos();\n  return f === "active" ? l.filter(t => !t.done)\n       : f === "done"   ? l.filter(t => t.done)\n       : l;\n});\nconst stats = computed(() => {\n  const l = todos();\n  return {\n    total: l.length,\n    done: l.filter(t => t.done).length,\n    active: l.filter(t => !t.done).length,\n  };\n});\n\n// Keyed list rendering — DOM nodes reused by id\nhtml`<div>\n  ${each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))}\n</div>`;\n\n// Adding a todo — just push to the signal\nfunction add() {\n  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);\n}\n\n// TodoItem reads from itemSig — updates when that item changes\nfunction TodoItem(itemSig) {\n  const todo = itemSig();\n  const toggle = () => todos(l => l.map(t =>\n    t.id === todo.id ? { ...t, done: !t.done } : t\n  ));\n  return html`<div>\n    <input type="checkbox" checked=${todo.done} onclick=${toggle} />\n    <span>${todo.text}</span>\n  </div>`;\n}',vkml:'// Reactive state\nconst todos = signal([]);\nconst filter = signal("all");\nconst filteredTodos = computed(() => {\n  const f = filter();\n  const l = todos();\n  return f === "active" ? l.filter(t => !t.done)\n       : f === "done"   ? l.filter(t => t.done)\n       : l;\n});\nconst stats = computed(() => {\n  const l = todos();\n  return {\n    total: l.length,\n    done: l.filter(t => t.done).length,\n    active: l.filter(t => !t.done).length,\n  };\n});\n\n// Keyed list rendering — DOM nodes reused by id\ndiv(\n  () => each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))\n);\n\n// Adding a todo — just push to the signal\nfunction add() {\n  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);\n}\n\n// TodoItem reads from itemSig — updates when that item changes\nfunction TodoItem(itemSig) {\n  const todo = itemSig();\n  const toggle = () => todos(l => l.map(t =>\n    t.id === todo.id ? { ...t, done: !t.done } : t\n  ));\n  return div(\n    input({ type: "checkbox", checked: todo.done, onclick: toggle }),\n    span(todo.text)\n  );\n}'},nc={html:'import { signal, html } from "vanillakit";\n\nconst name = signal("world");\n\ndocument.body.append(html`\n  <div>\n    <p style="font-size:1.2rem; font-weight:700;">Hello, ${name}!</p>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)}\n      style="max-width:240px;" />\n  </div>\n`);',vkml:'import { signal, vkml } from "vanillakit";\n\nconst { div, p, input } = vkml;\nconst name = signal("world");\n\ndocument.body.append(div(\n  p({ style: "font-size:1.2rem; font-weight:700;" }, "Hello, ", name, "!"),\n  input({ value: () => name(), oninput: (e) => name(e.target.value),\n    style: "max-width:240px;" })\n));'},ic={html:'import { signal, computed, html } from "vanillakit";\n\nconst price    = signal(10);\nconst quantity = signal(3);\nconst total    = computed(() => price() * quantity());\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label>Price:\n      <input type="number" value=${() => price()}\n        oninput=${(e) => price(+e.target.value)} style="width:80px;" />\n    </label>\n    <label>Qty:\n      <input type="number" value=${() => quantity()}\n        oninput=${(e) => quantity(+e.target.value)} style="width:80px;" />\n    </label>\n    <span style="font-weight:700;">Total: $${total}</span>\n  </div>\n`);',vkml:'import { signal, computed, vkml } from "vanillakit";\n\nconst { div, label, input, span } = vkml;\nconst price    = signal(10);\nconst quantity = signal(3);\nconst total    = computed(() => price() * quantity());\n\ndocument.body.append(div(\n  { style: "display:flex; align-items:center; gap:14px; flex-wrap:wrap;" },\n  label("Price: ",\n    input({ type: "number", value: () => price(),\n      oninput: (e) => price(+e.target.value), style: "width:80px;" })\n  ),\n  label("Qty: ",\n    input({ type: "number", value: () => quantity(),\n      oninput: (e) => quantity(+e.target.value), style: "width:80px;" })\n  ),\n  span({ style: "font-weight:700;" }, "Total: $", total)\n));'},oc={html:'import { signal, html } from "vanillakit";\n\nconst loggedIn = signal(false);\n\ndocument.body.append(html`\n  <div>\n    ${() => loggedIn()\n      ? html`<div style="display:flex; align-items:center; gap:12px;">\n          <span style="color:gold; font-weight:600;">Welcome back!</span>\n          <button onclick=${() => loggedIn(false)}>Log out</button>\n        </div>`\n      : html`<button onclick=${() => loggedIn(true)}>Log in</button>`\n    }\n  </div>\n`);',vkml:'import { signal, vkml } from "vanillakit";\n\nconst { div, span, button } = vkml;\nconst loggedIn = signal(false);\n\ndocument.body.append(div(\n  () => loggedIn()\n    ? div({ style: "display:flex; align-items:center; gap:12px;" },\n        span({ style: "color:gold; font-weight:600;" }, "Welcome back!"),\n        button({ onclick: () => loggedIn(false) }, "Log out")\n      )\n    : button({ onclick: () => loggedIn(true) }, "Log in")\n));'},rc={html:'import { signal, html } from "vanillakit";\n\nconst status = signal("idle"); // "idle" | "loading" | "error" | "done"\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; margin-bottom:12px;">\n      <button onclick=${() => status("idle")}>Idle</button>\n      <button onclick=${() => status("loading")}>Loading</button>\n      <button onclick=${() => status("error")}>Error</button>\n      <button onclick=${() => status("done")}>Done</button>\n    </div>\n    <div style="font-size:1rem; font-weight:600;">\n      ${() => {\n        switch (status()) {\n          case "loading": return html`<span>Loading...</span>`;\n          case "error":   return html`<span style="color:red;">Error!</span>`;\n          case "done":    return html`<span style="color:green;">Done ✓</span>`;\n          default:        return html`<span>Ready.</span>`;\n        }\n      }}\n    </div>\n  </div>\n`);',vkml:'import { signal, vkml } from "vanillakit";\n\nconst { div, span, button } = vkml;\nconst status = signal("idle"); // "idle" | "loading" | "error" | "done"\n\ndocument.body.append(div(\n  div({ style: "display:flex; gap:8px; margin-bottom:12px;" },\n    button({ onclick: () => status("idle") }, "Idle"),\n    button({ onclick: () => status("loading") }, "Loading"),\n    button({ onclick: () => status("error") }, "Error"),\n    button({ onclick: () => status("done") }, "Done")\n  ),\n  div({ style: "font-size:1rem; font-weight:600;" },\n    () => {\n      switch (status()) {\n        case "loading": return span("Loading...");\n        case "error":   return span({ style: "color:red;" }, "Error!");\n        case "done":    return span({ style: "color:green;" }, "Done ✓");\n        default:        return span("Ready.");\n      }\n    }\n  )\n));'},sc={html:'import { signal, each, html, css } from "vanillakit";\n\nlet nextId = 4;\nconst items = signal([\n  { id: 1, label: "Alpha" },\n  { id: 2, label: "Bravo" },\n  { id: 3, label: "Charlie" },\n]);\n\nconst itemStyle = css`\n  display: flex; align-items: center; gap: 8px;\n  padding: 6px 10px; border-radius: 6px;\n  background: var(--vk-color-bg); border: 1px solid var(--vk-color-border);\n  font-size: 0.85rem; font-family: monospace;\n`;\n\nconst names = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"];\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; gap:8px; margin-bottom:12px;">\n      <button onclick=${() => items(l =>\n        [...l, { id: nextId++, label: names[(nextId - 5) % names.length] }]\n      )}>Add item</button>\n      <button onclick=${() => items(l => [...l].reverse())}>Reverse</button>\n      <button onclick=${() => items(l => l.slice(0, -1))}>Remove last</button>\n    </div>\n    <div style="display:flex; flex-direction:column; gap:6px;">\n      ${each(items, i => i.id, (itemSig, indexSig) =>\n        html`<div class=${itemStyle}>\n          <span style="color:gray;">#${indexSig}</span>\n          <span>${() => itemSig().label}</span>\n          <button style="margin-left:auto; background:none; border:none; color:gray; cursor:pointer;"\n            onclick=${() => items(l => l.filter(i => i.id !== itemSig().id))}>✕</button>\n        </div>`,\n      )}\n    </div>\n  </div>\n`);',vkml:'import { signal, each, vkml, css } from "vanillakit";\n\nconst { div, span, button } = vkml;\nlet nextId = 4;\nconst items = signal([\n  { id: 1, label: "Alpha" },\n  { id: 2, label: "Bravo" },\n  { id: 3, label: "Charlie" },\n]);\n\nconst itemStyle = css`\n  display: flex; align-items: center; gap: 8px;\n  padding: 6px 10px; border-radius: 6px;\n  background: var(--vk-color-bg); border: 1px solid var(--vk-color-border);\n  font-size: 0.85rem; font-family: monospace;\n`;\n\nconst names = ["Delta", "Echo", "Foxtrot", "Golf", "Hotel", "India"];\n\ndocument.body.append(div(\n  div({ style: "display:flex; gap:8px; margin-bottom:12px;" },\n    button({ onclick: () => items(l =>\n      [...l, { id: nextId++, label: names[(nextId - 5) % names.length] }]\n    ) }, "Add item"),\n    button({ onclick: () => items(l => [...l].reverse()) }, "Reverse"),\n    button({ onclick: () => items(l => l.slice(0, -1)) }, "Remove last")\n  ),\n  div({ style: "display:flex; flex-direction:column; gap:6px;" },\n    each(items, i => i.id, (itemSig, indexSig) =>\n      div({ class: itemStyle },\n        span({ style: "color:gray;" }, "#", indexSig),\n        span(() => itemSig().label),\n        button({\n          style: "margin-left:auto; background:none; border:none; color:gray; cursor:pointer;",\n          onclick: () => items(l => l.filter(i => i.id !== itemSig().id))\n        }, "✕")\n      )\n    )\n  )\n));'},ac={html:'import { signal, html } from "vanillakit";\n\nconst name = signal("");\n\ndocument.body.append(html`\n  <div>\n    <input value=${() => name()} oninput=${(e) => name(e.target.value)}\n      placeholder="Your name" style="max-width:240px; margin-bottom:10px;" />\n    <p style="font-size:1rem; font-weight:600;">Hello, ${() => name() || "…"}!</p>\n  </div>\n`);',vkml:'import { signal, vkml } from "vanillakit";\n\nconst { div, input, p } = vkml;\nconst name = signal("");\n\ndocument.body.append(div(\n  input({ value: () => name(), oninput: (e) => name(e.target.value),\n    placeholder: "Your name", style: "max-width:240px; margin-bottom:10px;" }),\n  p({ style: "font-size:1rem; font-weight:600;" },\n    "Hello, ", () => name() || "…", "!")\n));'},lc={html:'import { signal, html } from "vanillakit";\n\nconst agreed = signal(false);\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label style="display:flex; align-items:center; gap:6px; cursor:pointer;">\n      <input type="checkbox" checked=${() => agreed()}\n        onchange=${(e) => agreed(e.target.checked)} />\n      I agree to the terms\n    </label>\n    <button disabled=${() => !agreed()}\n      style=${() => !agreed() ? "opacity:0.4; cursor:not-allowed;" : ""}>\n      Submit\n    </button>\n  </div>\n`);',vkml:'import { signal, vkml } from "vanillakit";\n\nconst { div, label, input, button } = vkml;\nconst agreed = signal(false);\n\ndocument.body.append(div(\n  { style: "display:flex; align-items:center; gap:14px; flex-wrap:wrap;" },\n  label({ style: "display:flex; align-items:center; gap:6px; cursor:pointer;" },\n    input({ type: "checkbox", checked: () => agreed(),\n      onchange: (e) => agreed(e.target.checked) }),\n    "I agree to the terms"\n  ),\n  button({\n    disabled: () => !agreed(),\n    style: () => !agreed() ? "opacity:0.4; cursor:not-allowed;" : ""\n  }, "Submit")\n));'},cc={html:'import { signal, html } from "vanillakit";\n\nconst color = signal("blue");\nconst colorMap = { red: "#e45", blue: "#48f", green: "#4c8" };\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px;">\n    <select onchange=${(e) => color(e.target.value)}>\n      <option value="red">Red</option>\n      <option value="blue" selected>Blue</option>\n      <option value="green">Green</option>\n    </select>\n    <span style=${() => `font-weight:700; color:${colorMap[color()]};`}>\n      Chosen: ${color}\n    </span>\n  </div>\n`);',vkml:'import { signal, vkml } from "vanillakit";\n\nconst { div, select, option, span } = vkml;\nconst color = signal("blue");\nconst colorMap = { red: "#e45", blue: "#48f", green: "#4c8" };\n\ndocument.body.append(div(\n  { style: "display:flex; align-items:center; gap:14px;" },\n  select({ onchange: (e) => color(e.target.value) },\n    option({ value: "red" }, "Red"),\n    option({ value: "blue", selected: true }, "Blue"),\n    option({ value: "green" }, "Green")\n  ),\n  span({ style: () => `font-weight:700; color:${colorMap[color()]};` },\n    "Chosen: ", color)\n));'},dc={html:'import { signal, effect, html } from "vanillakit";\n\nconst count = signal(0);\nconst log = signal([]);\n\neffect(() => {\n  const v = count();\n  log(l => [...l.slice(-4), `count is ${v}`]);\n});\n\ndocument.body.append(html`\n  <div>\n    <div style="display:flex; align-items:center; gap:12px; margin-bottom:12px;">\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n      <button onclick=${() => count(0)}>Reset</button>\n      <span style="font-family:monospace;">count = ${count}</span>\n    </div>\n    <div style="font-family:monospace; font-size:0.8rem; color:gray; line-height:1.6;">\n      ${() => log().map(l => html`<div>→ ${l}</div>`)}\n    </div>\n  </div>\n`);',vkml:'import { signal, effect, vkml } from "vanillakit";\n\nconst { div, button, span } = vkml;\nconst count = signal(0);\nconst log = signal([]);\n\neffect(() => {\n  const v = count();\n  log(l => [...l.slice(-4), `count is ${v}`]);\n});\n\ndocument.body.append(div(\n  div({ style: "display:flex; align-items:center; gap:12px; margin-bottom:12px;" },\n    button({ onclick: () => count(n => n + 1) }, "+1"),\n    button({ onclick: () => count(0) }, "Reset"),\n    span({ style: "font-family:monospace;" }, "count = ", count)\n  ),\n  div({ style: "font-family:monospace; font-size:0.8rem; color:gray; line-height:1.6;" },\n    () => log().map(l => div("→ ", l))\n  )\n));'},uc={html:'import { signal, computed, html } from "vanillakit";\n\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ndocument.body.append(html`\n  <div style="display:flex; align-items:center; gap:14px; flex-wrap:wrap;">\n    <label>Price:\n      <input type="number" value=${() => price()}\n        oninput=${(e) => price(+e.target.value)} style="width:80px;" />\n    </label>\n    <label>Qty:\n      <input type="number" value=${() => qty()}\n        oninput=${(e) => qty(+e.target.value)} style="width:80px;" />\n    </label>\n    <span style="font-weight:700;">Total: $${total}</span>\n  </div>\n`);',vkml:'import { signal, computed, vkml } from "vanillakit";\n\nconst { div, label, input, span } = vkml;\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ndocument.body.append(div(\n  { style: "display:flex; align-items:center; gap:14px; flex-wrap:wrap;" },\n  label("Price: ",\n    input({ type: "number", value: () => price(),\n      oninput: (e) => price(+e.target.value), style: "width:80px;" })\n  ),\n  label("Qty: ",\n    input({ type: "number", value: () => qty(),\n      oninput: (e) => qty(+e.target.value), style: "width:80px;" })\n  ),\n  span({ style: "font-weight:700;" }, "Total: $", total)\n));'},pc={html:'import { signal, computed, batch, html } from "vanillakit";\n\nconst x = signal(1), y = signal(2);\nconst runCount = signal(0);\nconst sum = computed(() => { runCount(n => n + 1); return x() + y(); });\n\ndocument.body.append(html`\n  <div>\n    <div style="margin-bottom:10px; font-family:monospace;">\n      x=${x} y=${y} sum=${sum} (computed ran ${runCount}×)\n    </div>\n    <button onclick=${() => { x(n => n + 1); y(n => n + 1); }}>\n      x++ y++ (no batch, 2 runs)\n    </button>\n    <button onclick=${() => batch(() => { x(n => n + 1); y(n => n + 1); })}>\n      x++ y++ (batched, 1 run)\n    </button>\n    <button onclick=${() => { x(1); y(2); runCount(0); }}>Reset</button>\n  </div>\n`);',vkml:'import { signal, computed, batch, vkml } from "vanillakit";\n\nconst { div, button, span } = vkml;\nconst x = signal(1), y = signal(2);\nconst runCount = signal(0);\nconst sum = computed(() => { runCount(n => n + 1); return x() + y(); });\n\ndocument.body.append(div(\n  div({ style: "margin-bottom:10px; font-family:monospace;" },\n    "x=", x, " y=", y, " sum=", sum,\n    " (computed ran ", runCount, "×)"\n  ),\n  button({ onclick: () => { x(n => n + 1); y(n => n + 1); } },\n    "x++ y++ (no batch, 2 runs)"),\n  " ",\n  button({ onclick: () => batch(() => { x(n => n + 1); y(n => n + 1); }) },\n    "x++ y++ (batched, 1 run)"),\n  " ",\n  button({ onclick: () => { x(1); y(2); runCount(0); } }, "Reset")\n));'},hc={html:'import { signal, computed, html, css } from "vanillakit";\n\nconst count = signal(0);\nconst double = computed(() => count() * 2);\n\nconst badge = css`\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-family: monospace;\n  font-weight: 600;\n  background: var(--vk-color-accent-dim);\n  color: var(--vk-color-accent);\n`;\n\ndocument.body.append(html`\n  <div>\n    <h3>Counter: ${count}</h3>\n    <p>Double: <span class=${badge}>${double}</span></p>\n    <div style="display:flex; gap:8px; margin-top:12px;">\n      <button onclick=${() => count(n => n + 1)}>+1</button>\n      <button onclick=${() => count(n => n - 1)}>-1</button>\n      <button onclick=${() => count(0)}>Reset</button>\n    </div>\n  </div>\n`);',vkml:'import { signal, computed, vkml, css } from "vanillakit";\n\nconst { div, h3, p, span, button } = vkml;\nconst count = signal(0);\nconst double = computed(() => count() * 2);\n\nconst badge = css`\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  font-family: monospace;\n  font-weight: 600;\n  background: var(--vk-color-accent-dim);\n  color: var(--vk-color-accent);\n`;\n\ndocument.body.append(div(\n  h3("Counter: ", count),\n  p("Double: ", span({ class: badge }, double)),\n  div({ style: "display:flex; gap:8px; margin-top:12px;" },\n    button({ onclick: () => count(n => n + 1) }, "+1"),\n    button({ onclick: () => count(n => n - 1) }, "-1"),\n    button({ onclick: () => count(0) }, "Reset")\n  )\n));'},fc=i([{dd:"5.55",dt:"kB (brotli)"},{dd:"0",dt:"Deps"},{dd:"5",dt:"Modules"}]);var mc,gc,vc;function bc(t,e="typescript"){const n=t.trim(),i=Ln.highlight(n,Ln.languages[e]||Ln.languages.typescript,e),o=document.createElement("pre");return o.className=Tn,o.innerHTML=i,o}Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity,Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup,Prism.hooks.add("wrap",function(t){"entity"===t.type&&(t.attributes.title=t.content.replace(/&amp;/,"&"))}),Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,e){var n={};n["language-"+e]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[e]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var i={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};i["language-"+e]={pattern:/[\s\S]+/,inside:Prism.languages[e]};var o={};o[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:i},Prism.languages.insertBefore("markup","cdata",o)}}),Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(t,e){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+t+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[e,"language-"+e],inside:Prism.languages[e]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),Prism.languages.html=Prism.languages.markup,Prism.languages.mathml=Prism.languages.markup,Prism.languages.svg=Prism.languages.markup,Prism.languages.xml=Prism.languages.extend("markup",{}),Prism.languages.ssml=Prism.languages.xml,Prism.languages.atom=Prism.languages.xml,Prism.languages.rss=Prism.languages.xml,function(t){var e=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;t.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+e.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+e.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+e.source+"$"),alias:"url"}}},selector:{pattern:RegExp("(^|[{}\\s])[^{}\\s](?:[^{};\"'\\s]|\\s+(?![\\s{])|"+e.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:e,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},t.languages.css.atrule.inside.rest=t.languages.css;var n=t.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))}(Prism),function(t){var e,n=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;t.languages.css.selector={pattern:t.languages.css.selector.pattern,lookbehind:!0,inside:e={"pseudo-element":/:(?:after|before|first-letter|first-line|selection)|::[-\w]+/,"pseudo-class":/:[-\w]+/,class:/\.[-\w]+/,id:/#[-\w]+/,attribute:{pattern:RegExp("\\[(?:[^[\\]\"']|"+n.source+")*\\]"),greedy:!0,inside:{punctuation:/^\[|\]$/,"case-sensitivity":{pattern:/(\s)[si]$/i,lookbehind:!0,alias:"keyword"},namespace:{pattern:/^(\s*)(?:(?!\s)[-*\w\xA0-\uFFFF])*\|(?!=)/,lookbehind:!0,inside:{punctuation:/\|$/}},"attr-name":{pattern:/^(\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+/,lookbehind:!0},"attr-value":[n,{pattern:/(=\s*)(?:(?!\s)[-\w\xA0-\uFFFF])+(?=\s*$)/,lookbehind:!0}],operator:/[|~*^$]?=/}},"n-th":[{pattern:/(\(\s*)[+-]?\d*[\dn](?:\s*[+-]\s*\d+)?(?=\s*\))/,lookbehind:!0,inside:{number:/[\dn]+/,operator:/[+-]/}},{pattern:/(\(\s*)(?:even|odd)(?=\s*\))/i,lookbehind:!0}],combinator:/>|\+|~|\|\|/,punctuation:/[(),]/}},t.languages.css.atrule.inside["selector-function-argument"].inside=e,t.languages.insertBefore("css","property",{variable:{pattern:/(^|[^-\w\xA0-\uFFFF])--(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*/i,lookbehind:!0}});var i={pattern:/(\b\d+)(?:%|[a-z]+(?![\w-]))/,lookbehind:!0},o={pattern:/(^|[^\w.-])-?(?:\d+(?:\.\d+)?|\.\d+)/,lookbehind:!0};t.languages.insertBefore("css","function",{operator:{pattern:/(\s)[+\-*\/](?=\s)/,lookbehind:!0},hexcode:{pattern:/\B#[\da-f]{3,8}\b/i,alias:"color"},color:[{pattern:/(^|[^\w-])(?:AliceBlue|AntiqueWhite|Aqua|Aquamarine|Azure|Beige|Bisque|Black|BlanchedAlmond|Blue|BlueViolet|Brown|BurlyWood|CadetBlue|Chartreuse|Chocolate|Coral|CornflowerBlue|Cornsilk|Crimson|Cyan|DarkBlue|DarkCyan|DarkGoldenRod|DarkGr[ae]y|DarkGreen|DarkKhaki|DarkMagenta|DarkOliveGreen|DarkOrange|DarkOrchid|DarkRed|DarkSalmon|DarkSeaGreen|DarkSlateBlue|DarkSlateGr[ae]y|DarkTurquoise|DarkViolet|DeepPink|DeepSkyBlue|DimGr[ae]y|DodgerBlue|FireBrick|FloralWhite|ForestGreen|Fuchsia|Gainsboro|GhostWhite|Gold|GoldenRod|Gr[ae]y|Green|GreenYellow|HoneyDew|HotPink|IndianRed|Indigo|Ivory|Khaki|Lavender|LavenderBlush|LawnGreen|LemonChiffon|LightBlue|LightCoral|LightCyan|LightGoldenRodYellow|LightGr[ae]y|LightGreen|LightPink|LightSalmon|LightSeaGreen|LightSkyBlue|LightSlateGr[ae]y|LightSteelBlue|LightYellow|Lime|LimeGreen|Linen|Magenta|Maroon|MediumAquaMarine|MediumBlue|MediumOrchid|MediumPurple|MediumSeaGreen|MediumSlateBlue|MediumSpringGreen|MediumTurquoise|MediumVioletRed|MidnightBlue|MintCream|MistyRose|Moccasin|NavajoWhite|Navy|OldLace|Olive|OliveDrab|Orange|OrangeRed|Orchid|PaleGoldenRod|PaleGreen|PaleTurquoise|PaleVioletRed|PapayaWhip|PeachPuff|Peru|Pink|Plum|PowderBlue|Purple|RebeccaPurple|Red|RosyBrown|RoyalBlue|SaddleBrown|Salmon|SandyBrown|SeaGreen|SeaShell|Sienna|Silver|SkyBlue|SlateBlue|SlateGr[ae]y|Snow|SpringGreen|SteelBlue|Tan|Teal|Thistle|Tomato|Transparent|Turquoise|Violet|Wheat|White|WhiteSmoke|Yellow|YellowGreen)(?![\w-])/i,lookbehind:!0},{pattern:/\b(?:hsl|rgb)\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*\)\B|\b(?:hsl|rgb)a\(\s*\d{1,3}\s*,\s*\d{1,3}%?\s*,\s*\d{1,3}%?\s*,\s*(?:0|0?\.\d+|1)\s*\)\B/i,inside:{unit:i,number:o,function:/[\w-]+(?=\()/,punctuation:/[(),]/}}],entity:/\\[\da-f]{1,8}/i,unit:i,number:o})}(Prism),Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),Prism.languages.js=Prism.languages.javascript,mc||(mc=1,function(t){var e=t.languages.javascript["template-string"],n=e.pattern.source,i=e.inside.interpolation,o=i.inside["interpolation-punctuation"],r=i.pattern.source;function s(e,i){if(t.languages[e])return{pattern:RegExp("((?:"+i+")\\s*)"+n),lookbehind:!0,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},"embedded-code":{pattern:/[\s\S]+/,alias:e}}}}function a(t,e){return"___"+e.toUpperCase()+"_"+t+"___"}function l(e,n,i){var o={code:e,grammar:n,language:i};return t.hooks.run("before-tokenize",o),o.tokens=t.tokenize(o.code,o.grammar),t.hooks.run("after-tokenize",o),o.tokens}function c(e){var n={};n["interpolation-punctuation"]=o;var r=t.tokenize(e,n);if(3===r.length){var s=[1,1];s.push.apply(s,l(r[1],t.languages.javascript,"javascript")),r.splice.apply(r,s)}return new t.Token("interpolation",r,i.alias,e)}function d(e,n,i){var o=t.tokenize(e,{interpolation:{pattern:RegExp(r),lookbehind:!0}}),s=0,d={},u=l(o.map(function(t){if("string"==typeof t)return t;for(var n,o=t.content;-1!==e.indexOf(n=a(s++,i)););return d[n]=o,n}).join(""),n,i),p=Object.keys(d);return s=0,function t(e){for(var n=0;n<e.length;n++){if(s>=p.length)return;var i=e[n];if("string"==typeof i||"string"==typeof i.content){var o=p[s],r="string"==typeof i?i:i.content,a=r.indexOf(o);if(-1!==a){++s;var l=r.substring(0,a),u=c(d[o]),h=r.substring(a+o.length),f=[];if(l&&f.push(l),f.push(u),h){var m=[h];t(m),f.push.apply(f,m)}"string"==typeof i?(e.splice.apply(e,[n,1].concat(f)),n+=f.length-1):i.content=f}}else{var g=i.content;Array.isArray(g)?t(g):t([g])}}}(u),new t.Token(i,u,"language-"+i,e)}t.languages.javascript["template-string"]=[s("css",/\b(?:styled(?:\([^)]*\))?(?:\s*\.\s*\w+(?:\([^)]*\))*)*|css(?:\s*\.\s*(?:global|resolve))?|createGlobalStyle|keyframes)/.source),s("html",/\bhtml|\.\s*(?:inner|outer)HTML\s*\+?=/.source),s("svg",/\bsvg/.source),s("markdown",/\b(?:markdown|md)/.source),s("graphql",/\b(?:gql|graphql(?:\s*\.\s*experimental)?)/.source),s("sql",/\bsql/.source),e].filter(Boolean);var u={javascript:!0,js:!0,typescript:!0,ts:!0,jsx:!0,tsx:!0};function p(t){return"string"==typeof t?t:Array.isArray(t)?t.map(p).join(""):p(t.content)}t.hooks.add("after-tokenize",function(e){e.language in u&&function e(n){for(var i=0,o=n.length;i<o;i++){var r=n[i];if("string"!=typeof r){var s=r.content;if(Array.isArray(s))if("template-string"===r.type){var a=s[1];if(3===s.length&&"string"!=typeof a&&"embedded-code"===a.type){var l=p(a),c=a.alias,u=Array.isArray(c)?c[0]:c,h=t.languages[u];if(!h)continue;s[1]=d(l,h,u)}}else e(s);else"string"!=typeof s&&e([s])}}}(e.tokens)})}(Prism)),gc||(gc=1,function(t){t.languages.typescript=t.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),t.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete t.languages.typescript.parameter,delete t.languages.typescript["literal-property"];var e=t.languages.extend("typescript",{});delete e["class-name"],t.languages.typescript["class-name"].inside=e,t.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:e}}}}),t.languages.ts=t.languages.typescript}(Prism)),function(t){var e="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",n={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},i={bash:n,environment:{pattern:RegExp("\\$"+e),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+e),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};t.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+e),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:i},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:n}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:i},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:i.entity}}],environment:{pattern:RegExp("\\$?"+e),alias:"constant"},variable:i.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},n.inside=t.languages.bash;for(var o=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],r=i.variable[1].inside,s=0;s<o.length;s++)r[o[s]]=t.languages.bash[o[s]];t.languages.sh=t.languages.bash,t.languages.shell=t.languages.bash}(Prism),vc||(vc=1,Prism.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0,greedy:!0},"string-interpolation":{pattern:/(?:f|fr|rf)(?:("""|''')[\s\S]*?\1|("|')(?:\\.|(?!\2)[^\\\r\n])*\2)/i,greedy:!0,inside:{interpolation:{pattern:/((?:^|[^{])(?:\{\{)*)\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}]|\{(?!\{)(?:[^{}])+\})+\})+\}/,lookbehind:!0,inside:{"format-spec":{pattern:/(:)[^:(){}]+(?=\}$)/,lookbehind:!0},"conversion-option":{pattern:/![sra](?=[:}]$)/,alias:"punctuation"},rest:null}},string:/[\s\S]+/}},"triple-quoted-string":{pattern:/(?:[rub]|br|rb)?("""|''')[\s\S]*?\1/i,greedy:!0,alias:"string"},string:{pattern:/(?:[rub]|br|rb)?("|')(?:\\.|(?!\1)[^\\\r\n])*\1/i,greedy:!0},function:{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_]\w*(?=\s*\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)\w+/i,lookbehind:!0},decorator:{pattern:/(^[\t ]*)@\w+(?:\.\w+)*/m,lookbehind:!0,alias:["annotation","punctuation"],inside:{punctuation:/\./}},keyword:/\b(?:_(?=\s*:)|and|as|assert|async|await|break|case|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|match|nonlocal|not|or|pass|print|raise|return|try|while|with|yield)\b/,builtin:/\b(?:__import__|abs|all|any|apply|ascii|basestring|bin|bool|buffer|bytearray|bytes|callable|chr|classmethod|cmp|coerce|compile|complex|delattr|dict|dir|divmod|enumerate|eval|execfile|file|filter|float|format|frozenset|getattr|globals|hasattr|hash|help|hex|id|input|int|intern|isinstance|issubclass|iter|len|list|locals|long|map|max|memoryview|min|next|object|oct|open|ord|pow|property|range|raw_input|reduce|reload|repr|reversed|round|set|setattr|slice|sorted|staticmethod|str|sum|super|tuple|type|unichr|unicode|vars|xrange|zip)\b/,boolean:/\b(?:False|None|True)\b/,number:/\b0(?:b(?:_?[01])+|o(?:_?[0-7])+|x(?:_?[a-f0-9])+)\b|(?:\b\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\B\.\d+(?:_\d+)*)(?:e[+-]?\d+(?:_\d+)*)?j?(?!\w)/i,operator:/[-+%=]=?|!=|:=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]/,punctuation:/[{}[\];(),.:]/},Prism.languages.python["string-interpolation"].inside.interpolation.inside.rest=Prism.languages.python,Prism.languages.py=Prism.languages.python),j`
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
`;const yc=I`
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
`,kc=I`
  flex: 1;
  text-decoration: line-through;
  opacity: 0.45;
`,xc={high:"danger",medium:"primary",low:"success"};let wc=4;const $c=i([{id:1,text:"Build signal-based reactivity",done:!0,priority:"high"},{id:2,text:"Implement tagged template DOM engine",done:!0,priority:"high"},{id:3,text:"Add keyed list reconciliation",done:!1,priority:"medium"}]),Sc=i("all"),Ac=o(()=>{const t=Sc(),e=$c();return"active"===t?e.filter(t=>!t.done):"done"===t?e.filter(t=>t.done):e}),Ec=o(()=>{const t=$c();return{total:t.length,done:t.filter(t=>t.done).length,active:t.filter(t=>!t.done).length}}),Cc=I`
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
`,_c=I`
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
`,Tc=i([]);function Fc(t){Tc(e=>[`${performance.now().toFixed(1)}ms — ${t}`,...e.slice(0,19)])}let Rc=1;const Ic=["Alice","Bob","Carol","Dan","Eve","Frank","Grace","Hank","Iris","Jack","Kara","Leo","Mia","Nico","Olga","Pete"];function Oc(){return{id:Rc++,name:Ic[Math.floor(Math.random()*Ic.length)],score:Math.floor(100*Math.random())}}const jc=i(Array.from({length:8},Oc));function Pc(t){const e=[...t];for(let n=e.length-1;n>0;n--){const t=Math.floor(Math.random()*(n+1));[e[n],e[t]]=[e[t],e[n]]}return e}function Dc(t,e){return y`<li class=${Cc}>
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
      onclick=${()=>jc(e=>e.filter(e=>e.id!==t().id))}
    >
      ✕
    </button>
  </li>`}const Nc=I`
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
`,Mc=[{label:"Demos",items:[{id:"snippets",label:"Code Examples"},{id:"sandbox",label:"Playground"},{id:"todo",label:"Todo App"},{id:"playground",label:"Reactive Demos"},{id:"stress",label:"Stress Test"},{id:"vkml",label:"VKML"}]},{label:"Integrations",items:[{id:"htmx",label:"htmx"},{id:"tailwind",label:"Tailwind CSS"}]}],Lc={snippets:function(){return it.section(it.h2("Code Examples"),it.h3("Counter"),it.p("The simplest possible app — a signal and a button."),$l({sourceVariants:Sl,label:"Counter"}),it.h3("Two-way binding"),it.p("Bind an input to a signal. The heading updates as you type."),$l({sourceVariants:nc,label:"Two-way binding"}),it.h3("Derived state"),$l({sourceVariants:ic,label:"Derived state — change price or qty"}),it.h3("Reactive object"),$l({sourceVariants:{html:Zl.html,vkml:Zl.vkml},label:"Reactive object"}),it.h3("Scoped styles + routing"),$l({sourceVariants:Ql}))},sandbox:function(){return it.section(it.h2("Playground"),it.p("Write vanillakit code and see results live. Edit the code below — output updates instantly. Switch tabs to compare ",it.code("html``")," and ",it.code("vkml")," syntax."),$l({sourceVariants:hc,label:"Sandbox — edit freely"}))},todo:function(){return y`<section>
    <h2>Todo App</h2>
    <p class=${_n}>
      A fully reactive todo app — signals, computed, each().
    </p>
    <div data-grid data-cols="3" style="margin-bottom:28px;">
      <article data-card style="text-align:center;">
        <dl>
          <dd>${()=>Ec().total}</dd>
          <dt>Total</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-accent">${()=>Ec().active}</dd>
          <dt>Active</dt>
        </dl>
      </article>
      <article data-card style="text-align:center;">
        <dl>
          <dd class="text-success">${()=>Ec().done}</dd>
          <dt>Done</dt>
        </dl>
      </article>
    </div>
    ${function(){const t=i(""),e=i("medium"),n=()=>{const n=t().trim();n&&($c(t=>[...t,{id:wc++,text:n,done:!1,priority:e()}]),t(""))};return y`<div style="display:flex;gap:8px;margin-bottom:24px;">
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
          aria-pressed=${()=>Sc()===t?"true":"false"}
          onclick=${()=>Sc(t)}
        >
          ${t[0].toUpperCase()+t.slice(1)}
          ${()=>{const e=Ec();return`(${"all"===t?e.total:"active"===t?e.active:e.done})`}}
        </button>`)}
  </div>`}
    <ul style="list-style:none;padding:0;">
      ${C(Ac,t=>t.id,t=>function(t){const e=t();return y`<li class=${yc}>
    <input type="checkbox" checked=${e.done} onclick=${()=>$c(t=>t.map(t=>t.id===e.id?{...t,done:!t.done}:t))} />
    <span class=${e.done?kc:""} style="flex:1;"
      >${e.text}</span
    >
    <span data-badge data-variant=${xc[e.priority]}
      >${e.priority}</span
    >
    <button data-variant="danger" data-size="sm" onclick=${()=>$c(t=>t.filter(t=>t.id!==e.id))}>✕</button>
  </li>`}(t))}
      ${()=>0===Ac().length?y`<div data-empty>No tasks match this filter.</div>`:null}
    </ul>
    <details>
      <summary>View source — signals, computed, each()</summary>
      ${$l({sourceVariants:ec,label:"Task app — signals, computed, each()"})}
    </details>
  </section>`},playground:function(){const t=m({user:{name:"Ada Lovelace",settings:{theme:"dark",notifications:{email:!0,push:!1,frequency:"daily"}},scores:[95,87,92]}}),e=o(()=>JSON.stringify(v(t),null,2)),n=I`
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
  `,r=I`
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
  `,s=I`
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
  `,a=I`
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
  `,l={success:I`
    border-color: var(--vk-color-success);
    background: var(--vk-color-success-dim);
    color: var(--vk-color-success);
    & .icon {
      background: var(--vk-color-success);
      color: var(--vk-color-bg);
    }
  `,warning:I`
    border-color: var(--vk-color-accent);
    background: var(--vk-color-accent-dim);
    color: var(--vk-color-accent);
    & .icon {
      background: var(--vk-color-accent);
      color: var(--vk-color-bg);
    }
  `,error:I`
    border-color: var(--vk-color-danger);
    background: var(--vk-color-danger-dim);
    color: var(--vk-color-danger);
    & .icon {
      background: var(--vk-color-danger);
      color: var(--vk-color-bg);
    }
  `,info:I`
    border-color: var(--vk-color-info);
    background: var(--vk-color-info-dim);
    color: var(--vk-color-info);
    & .icon {
      background: var(--vk-color-info);
      color: var(--vk-color-bg);
    }
  `},c={success:"✓",warning:"!",error:"✕",info:"i"},d={success:"All systems operational. Deployment completed.",warning:"High memory usage detected. Consider scaling.",error:"Connection lost. Retrying in 5 seconds…",info:"New version available. Update when ready."},u=I`
    border-radius: 24px !important;
    & .icon {
      border-radius: 12px;
    }
  `,p=I`
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.3);
  `,h=I`
    border-width: 3px;
    border-style: dashed;
  `,f=I`
    transform: scale(1.02);
  `,g=I`
    box-shadow:
      0 0 20px currentColor,
      0 0 40px currentColor;
    &:hover {
      box-shadow:
        0 0 30px currentColor,
        0 0 60px currentColor;
    }
  `,b=i("success"),k=i(!1),x=i(!1),w=i(!1),$=i(!1),S=i(!1),A=i(100),E=i(10),C=i(100),_=I`
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
    <p class=${_n}>
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
          class=${Nc}
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
          class=${()=>P(a,l[b()],k()&&u,x()&&p,w()&&h,$()&&f,S()&&g)}
        >
          <div class="icon">${()=>c[b()]}</div>
          <div class="text">
            <div class="label">${()=>b()}</div>
            <div class="message">${()=>d[b()]}</div>
          </div>
        </div>

        <div
          class=${Nc}
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
              value=${()=>C()}
              oninput=${t=>C(+t.target.value)}
            />
            <code style="min-width:38px;"
              >${()=>C()}%</code
            >
          </label>
        </div>

        <div style="display:flex;justify-content:center;padding:20px 0;">
          <div
            class=${_}
            style=${()=>`height: ${A()}px; border-radius: ${E()}px; opacity: ${C()/100}; font-size: ${Math.max(10,.14*A())}px;`}
          >
            ${()=>`${A()}% · ${E()}px · ${C()}%`}
          </div>
        </div>

        <div class=${Nc} style="font-size:0.7rem;line-height:1.6;">
          style=${"${"}() => ${"`"} height:
          <strong>${()=>A()}px</strong>; border-radius:
          <strong>${()=>E()}px</strong>; opacity:
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
      ${bc('// Deep reactive proxy — mutate normally, changes propagate\nconst state = reactive({\n  user: {\n    name: "Ada Lovelace",\n    settings: {\n      theme: "dark",\n      notifications: { email: true, push: false, frequency: "daily" },\n    },\n    scores: [95, 87, 92],\n  },\n});\n\n// Computed snapshot for display — auto-updates\nconst jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));\n\n// Direct mutation triggers effects\nstate.user.name = "Grace Hopper";\nstate.user.scores.push(99);\n\n// Scoped CSS with nesting, pseudo-classes, @media\nconst card = css`\n  padding: 20px;\n  border: 2px solid var(--vk-color-border);\n  &:hover { border-color: var(--vk-color-accent); }\n  & > .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 12px; }\n`;\n\n// cx() merges class names, skipping falsy values\nconst classes = cx(\n  statusBase,\n  statusMap[status()],\n  rounded() && propRounded,\n  shadow() && propShadow,\n);')}
    </details>
  </section>`},stress:function(){return y`<section>
    <h2>List Stress Test</h2>
    <p class=${_n}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type in the
      inputs to verify DOM preservation.
    </p>

    <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;">
      <button
        onclick=${()=>{jc(Pc),Fc("Shuffled")}}
      >
        Shuffle
      </button>
      <button
        data-variant="info"
        onclick=${()=>{jc(t=>[...t].reverse()),Fc("Reversed")}}
      >
        Reverse
      </button>
      <button
        data-variant="success"
        onclick=${()=>{jc(t=>[...t,Oc()]),Fc("Added 1")}}
      >
        + Add 1
      </button>
      <button
        data-variant="success"
        onclick=${()=>{const t=Array.from({length:5},Oc);jc(e=>[...e,...t]),Fc("Added 5")}}
      >
        + Add 5
      </button>
      <button
        data-variant="danger"
        onclick=${()=>{jc(t=>{if(!t.length)return t;const e=Math.floor(Math.random()*t.length);return t.filter((t,n)=>n!==e)}),Fc("Removed random")}}
      >
        - Remove random
      </button>
      <button
        data-ghost
        onclick=${()=>{jc(t=>t.map(t=>({...t,score:Math.floor(100*Math.random())}))),Fc("Randomized scores")}}
      >
        Randomize scores
      </button>
      <button
        data-ghost
        onclick=${()=>{jc(t=>[...t].sort((t,e)=>t.name.localeCompare(e.name))),Fc("Sorted by name")}}
      >
        Sort A→Z
      </button>
      <button
        data-ghost
        onclick=${()=>{jc(t=>[...t].sort((t,e)=>e.score-t.score)),Fc("Sorted by score")}}
      >
        Sort by score
      </button>
      <button
        data-variant="danger"
        onclick=${()=>{jc([]),Fc("Cleared all")}}
      >
        Clear
      </button>
      <button
        onclick=${()=>{jc(Array.from({length:50},Oc)),Fc("Reset to 50 items")}}
      >
        Reset 50
      </button>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;align-items:center;">
      <span data-badge data-variant="primary"
        >${()=>jc().length} items</span
      >
      <small
        >Type in any input, then shuffle — your text stays because each() reuses
        DOM nodes by key.</small
      >
    </div>

    <ul style="list-style:none;padding:0;margin-bottom:24px;">
      ${C(jc,t=>t.id,Dc)}
      ${()=>0===jc().length?y`<div data-empty>List is empty. Add some items!</div>`:null}
    </ul>

    <h3>Operation Log</h3>
    <div class=${_c}>
      ${()=>0===Tc().length?"No operations yet…":Tc().join("\n")}
    </div>
    <details>
      <summary>View source — each() keyed reconciliation</summary>
      ${$l({sourceVariants:tc})}
    </details>
  </section>`},vkml:function(){const t=i(30),e=i("#60a5fa");return it.section(it.h2("VKML: Vanilla Kit Markup Language"),it.p("This section is built entirely with the new VKML Proxy-based element factory. It demonstrates dynamic SVG properties updating natively without innerHTML parsing."),it.div({style:"display:flex; flex-direction:column; gap:16px; margin-bottom: 24px; padding: 16px; background: var(--vk-color-bg-subtle); border-radius: 8px;"},it.label({style:"display:flex; gap:12px; align-items:center;"},it.strong("Radius: "),it.input({type:"range",min:"5",max:"45",value:()=>t(),oninput:e=>t(+e.target.value)}),it.span(()=>t())),it.label({style:"display:flex; gap:12px; align-items:center;"},it.strong("Color: "),it.input({type:"color",value:()=>e(),oninput:t=>e(t.target.value)}),it.span(()=>e()))),it.div({style:"display:flex; justify-content:center; align-items:center;"},it.svg({viewBox:"0 0 100 100",width:"150",height:"150",style:"border: 1px dashed var(--vk-color-border); border-radius: 8px; overflow: hidden;"},it.rect({width:100,height:100,fill:"var(--vk-color-bg-subtle)"}),it.circle({cx:"50",cy:"50",r:()=>t(),fill:()=>e(),style:"transition: r 0.2s cubic-bezier(0.4, 0, 0.2, 1), fill 0.2s linear;"}),it.text({x:"50",y:"55","text-anchor":"middle",fill:"white","font-size":"14","font-family":"var(--vk-font-sans)","font-weight":"bold","pointer-events":"none"},"VKML"))))},htmx:function(){const t=i(null),e=i(!1),n=i(0),o=i(!1),s=I`
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
  `,a=I`
    margin-top: 12px;
    padding: 16px;
    background: var(--vk-color-accent-dim);
    border: 1px solid var(--vk-color-accent);
    border-radius: 8px;
    display: flex;
    align-items: center;
    gap: 12px;
  `,l=I`
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
        ${()=>e()?y`<span class=${l}></span>`:null!==t()?"Reload from server":'hx-get="/partials/dashboard.html"'}
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
      ${bc('\x3c!-- partials/dashboard.html --\x3e\n<div class="server-row"><strong>Dashboard</strong> — loaded via htmx</div>\n<div class="server-row">User: <em>Ada Lovelace</em> | Role: Admin</div>\n<div class="server-row">Last login: <span id="login-time"></span></div>\n<div data-vanillakit="counter"></div>\n<script>\n  document.getElementById("login-time").textContent = new Date().toLocaleTimeString();\n<\/script>',"markup")}

      <h3>Setup</h3>
      ${bc('<!doctype html>\n<html>\n  <head>\n    <script src="https://unpkg.com/htmx.org@2"><\/script>\n  </head>\n  <body>\n    <div hx-get="/partials/dashboard.html" hx-trigger="click" hx-target="#content">\n      Load dashboard\n    </div>\n    <div id="content"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}

      <h3>Reactive islands inside swapped content</h3>
      <p>
        After htmx swaps in HTML, mount vanillakit components on
        <code>[data-vanillakit]</code> elements.
      </p>
      ${$l({sourceVariants:Tl,label:"Reactive island — mounted after htmx swap"})}
    </section>
  </section>`},tailwind:function(){const t=i(!1),e=i(!1),n=i("blue"),o={blue:{bg:"#3b82f6",hover:"#2563eb",glow:"rgba(59,130,246,0.5)"},green:{bg:"#22c55e",hover:"#16a34a",glow:"rgba(34,197,94,0.5)"},purple:{bg:"#a855f7",hover:"#9333ea",glow:"rgba(168,85,247,0.5)"},red:{bg:"#ef4444",hover:"#dc2626",glow:"rgba(239,68,68,0.5)"}},r=I`
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

      <div class=${I`
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
              class=${()=>{return i=t,o=e.bg,I`
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
        <button class=${()=>(()=>{const t=o[n()];return I`
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
        <div class=${()=>(()=>{const t=o[n()];return I`
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
      ${$l({sourceVariants:Fl,label:"Tailwind classes — reactive class switching"})}

      <h3>Mixing Tailwind + css\`\`</h3>
      <p>
        Use <code>cx()</code> to combine Tailwind utility classes with scoped
        styles.
      </p>
      ${$l({sourceVariants:Rl,label:"Mixing Tailwind + css`` scoped styles"})}

      <h3>Tailwind config</h3>
      ${bc('// tailwind.config.js\nexport default {\n  content: [\n    "./demo/**/*.{html,ts,js}",\n    "./src/**/*.js",\n  ],\n};')}
    </section>
  </section>`}},zc=I`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,Vc=[{name:"signal.js",icon:"⚡",color:"var(--vk-color-accent)",lines:"~90",desc:"signal, computed, effect, batch, untrack"},{name:"reactive.js",icon:"🔮",color:"#a78bfa",lines:"~130",desc:"Proxy-based deep reactivity, identity cache, array methods"},{name:"html.js",icon:"🧩",color:"#60a5fa",lines:"~210",desc:"Tagged templates → live DOM, keyed each() reconciliation"},{name:"component.js",icon:"📦",color:"var(--vk-color-success)",lines:"~95",desc:"mount, onMount, onCleanup, provide/inject"},{name:"router.js",icon:"🧭",color:"#f472b6",lines:"~105",desc:"History-based SPA routing, reactive params"},{name:"css.js",icon:"🎨",color:"#fb923c",lines:"~130",desc:"Scoped CSS-in-JS with deep nesting, @media, combinators"}],Bc=[{label:"Guide",items:[{id:"getting-started",label:"Getting Started"},{id:"typescript",label:"TypeScript & Tooling"}]},{label:"Concepts",items:[{id:"html-vs-vkml",label:"Choosing a Syntax"},{id:"components",label:"Components"},{id:"reactivity",label:"Reactivity"},{id:"data-fetching",label:"Data Fetching"},{id:"conditional",label:"Conditional Rendering"},{id:"lists",label:"Lists & Keys"},{id:"forms",label:"Forms"},{id:"styling",label:"Styling"},{id:"routing-concepts",label:"Routing"}]},{label:"API Reference",items:[{id:"signal",label:"signal.js"},{id:"reactive",label:"reactive.js"},{id:"html-module",label:"html.js"},{id:"vkml-module",label:"vkml.js"},{id:"css-module",label:"css.js"},{id:"router",label:"router.js"}]}],Hc={"getting-started":function(){return y`<section>
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
    ${bc("# clone the repo\ngit clone https://github.com/nisuxyz/vanillakit.git\ncp -r vanillakit/src ./vanillakit","bash")}

    <p>Or import straight from a CDN — no install needed:</p>
    ${bc('<script type="module">\n  import { signal, html, css } from "https://esm.sh/gh/nisuxyz/vanillakit/src/index.js";\n\n  // ready to go\n<\/script>',"markup")}

    <h3>Quick setup</h3>
    <p>Create an <code>index.html</code> and a module entry point:</p>
    ${bc('<!doctype html>\n<html>\n  <body>\n    <div id="app"></div>\n    <script type="module" src="./app.js"><\/script>\n  </body>\n</html>',"markup")}
    ${$l({sourceVariants:{html:`// app.js${Sl.html}`,vkml:`// app.js${Sl.vkml}`},label:"app.js"})}
    <p style="font-size:0.875rem; color:var(--vk-color-text-muted);">
      Both <code>html</code> and <code>vkml</code> produce the same result. See
      <strong>Choosing a Syntax</strong> in the Concepts section for a full
      comparison.
    </p>

    <h3>Project structure</h3>
    <p>There's no required structure. The library is five files:</p>
    ${bc("src/\n  signal.js    — signal, computed, effect, batch, untrack\n  reactive.js  — reactive, toRaw, isReactive, snapshot\n  html.js      — html, each\n  css.js       — css, keyframes, globalCss, cx\n  router.js    — createRouter, navigate, navLink, currentPath, routeParams\n  index.js     — re-exports everything","bash")}

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
    ${$l({sourceVariants:Sl,label:"Counter component with TypeScript types"})}
    ${bc('import { signal } from "vanillakit";\nimport type { Signal, ReadonlySignal } from "vanillakit/signal.js";\n\nconst count: Signal<number> = signal(0);',"typescript")}

    <p>
      If you're writing <code>.ts</code> files, make sure your
      <code>tsconfig.json</code> has
      <code>"moduleResolution": "bundler"</code> and
      <code>"allowImportingTsExtensions": true</code> (already the default with
      Vite).
    </p>
    ${bc('{\n  "compilerOptions": {\n    "target": "ESNext",\n    "module": "ESNext",\n    "moduleResolution": "bundler",\n    "allowJs": true,\n    "checkJs": true,\n    "noEmit": true,\n    "allowImportingTsExtensions": true,\n    "strict": true,\n    "lib": ["ESNext", "DOM", "DOM.Iterable"]\n  }\n}',"javascript")}

    <h3>HMR with Vite</h3>
    <p>A minimal <code>vite.config.js</code>:</p>
    ${bc('import { defineConfig } from "vite";\n\nexport default defineConfig({\n  root: "demo",\n  base: "./",\n});')}

    <h3>Production builds</h3>
    <p>
      <code>vite build</code> produces a single minified JS bundle. The entire
      library plus this full demo app compiles to ~25 KB gzipped.
    </p>
    ${bc("npx vite build\n# output in dist/ (or wherever outDir points)","bash")}
  </section>`},"html-vs-vkml":function(){return it.section(it.h2("Choosing a Syntax"),it.p("vanillakit ships two authoring styles — ",it.code("html``")," and ",it.code("vkml")," — that compile to the same reactive DOM operations. Both share signals, ",it.code("each()"),", CSS-in-JS, and the router. Pick the style that fits your project."),it.h3("html`` — tagged template literals"),it.p("Write HTML as a template string. Interpolate signals, functions, or static values directly. Returns a ",it.code("Node")," or ",it.code("DocumentFragment")," — the same shape you get from ",it.code("innerHTML")," parsing, but live."),it.pre(it.code('import { signal, html } from "vanillakit";\n\nconst count = signal(0);\nconst el = html`<button onclick=${() => count(n => n + 1)}>Clicks: ${count}</button>`;\ndocument.body.append(el);')),it.h3("vkml — function call syntax"),it.p("Build the DOM tree with function calls through the ",it.code("vkml")," Proxy. Every property access returns a tag builder: ",it.code("vkml.div(props?, ...children)"),". Always returns a single ",it.code("Element")," — no fragments."),it.pre(it.code('import { signal, vkml } from "vanillakit";\n\nconst count = signal(0);\nconst el = vkml.button({ onclick: () => count(n => n + 1) }, "Clicks: ", count);\ndocument.body.append(el);')),it.h3("Side by side"),it.p("Both snippets below produce identical output. Use the tabs to switch."),$l({sourceVariants:{html:Sl.html,vkml:Sl.vkml},label:"Counter — html vs vkml"}),it.h3("Key differences"),it.div({style:"overflow-x:auto; margin: 1rem 0;"},it.table({style:"width:100%; border-collapse:collapse; font-size:0.875rem;"},it.thead(it.tr(it.th({style:"text-align:left; padding:8px 12px; border-bottom:2px solid var(--vk-color-border); color:var(--vk-color-text-muted);"},""),it.th({style:"text-align:left; padding:8px 12px; border-bottom:2px solid var(--vk-color-border); color:var(--vk-color-text-muted);"},"html``"),it.th({style:"text-align:left; padding:8px 12px; border-bottom:2px solid var(--vk-color-border); color:var(--vk-color-text-muted);"},"vkml"))),it.tbody(...[["Authoring style","Template string","Function calls"],["Return type","Node | DocumentFragment","Element (always single)"],["SVG support","No","Yes — createElementNS"],["Parsing overhead","innerHTML + TreeWalker","None — direct createElement"],["TypeScript props","Untyped string interpolations","Typed object literal"],["Reserved words","n/a","vkml.variable → <var>"],["Named imports","import { html } from …","import { div, span, … } from …"]].map(([t,e,n],i)=>it.tr({style:i%2==0?"background:var(--vk-color-bg-alt, transparent);":""},it.td({style:"padding:8px 12px; border-bottom:1px solid var(--vk-color-border); font-weight:600; white-space:nowrap;"},t),it.td({style:"padding:8px 12px; border-bottom:1px solid var(--vk-color-border); font-family:monospace;"},e),it.td({style:"padding:8px 12px; border-bottom:1px solid var(--vk-color-border); font-family:monospace;"},n)))))),it.h3("Named exports"),it.p("Every HTML and SVG tag is also available as a named export for cleaner imports:"),it.pre(it.code('import { signal, div, button, span, svg, circle } from "vanillakit";\n\n// html variant\nimport { html } from "vanillakit";\nconst el = html`<div><button>Click</button></div>`;\n\n// vkml equivalent — same result, no parsing\nconst el2 = div(button("Click"));')),it.h3("Reactive bindings — same rules, different syntax"),it.p("Attribute bindings work identically in both. Pass a function to make an attribute reactive:"),$l({sourceVariants:{html:Ul,vkml:Gl},label:"Reactive bindings"}),it.h3("When to use html``"),it.ul(it.li("Porting existing HTML quickly — paste markup directly into the template."),it.li("Templates with lots of static markup and minimal JS logic."),it.li("Prefer visual structure over function signatures.")),it.h3("When to use vkml"),it.ul(it.li("SVG — vkml is the only option that supports SVG tags."),it.li("TypeScript-first projects — prop objects get full type inference."),it.li("Component libraries — function composition is easier to abstract."),it.li("Performance-critical code — no template parse step.")),it.p({style:"color:var(--vk-color-text-muted); font-size:0.875rem; margin-top:1.5rem;"},"See ",it.strong("html.js")," and ",it.strong("vkml.js")," in the API Reference for the full function signatures."))},components:function(){return y`<section>
    <h2>Components</h2>
    <p>
      There's no special component API. A component is just a function that
      returns a DOM node. Call it, get a node, append it wherever you want.
    </p>

    ${$l({sourceVariants:Sl,label:"Counter component"})}

    <h3>Passing data (props)</h3>
    <p>
      Props are just function arguments. Pass signals for reactive data, or
      plain values for static data.
    </p>

    ${$l({sourceVariants:Al,label:"UserCard component"})}

    <h3>Reactive props</h3>
    <p>
      Pass signals as props for reactive data flow. The child component updates
      automatically when the parent signal changes — no re-rendering, no prop
      diffing.
    </p>

    ${$l({sourceVariants:El,label:"Reactive props — type a name or pick a color"})}

    <h3>Children / composition</h3>
    <p>
      Since components return DOM nodes, compose them by nesting in
      <code>html\`\`</code>:
    </p>

    ${$l({sourceVariants:_l,label:"Layout component with children"})}

    <p>Or pass children as arguments:</p>

    ${$l({sourceVariants:Cl,label:"Direct children via arguments"})}
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
    ${bc('import { signal, effect } from "vanillakit";\n\nconst count = signal(0);\n\n// Reading inside an effect creates a subscription\neffect(() => {\n  console.log("count is", count());\n});\n\ncount(1);          // effect re-runs → "count is 1"\ncount(n => n + 1); // effect re-runs → "count is 2"')}
    ${$l({sourceVariants:dc,label:"Signal — click to update, watch the effect log"})}

    <h3>Computed values</h3>
    <p>
      <code>computed</code> derives a read-only signal from others. It only
      recalculates when its dependencies change.
    </p>
    ${bc('import { signal, computed } from "vanillakit";\n\nconst price = signal(10);\nconst qty = signal(3);\nconst total = computed(() => price() * qty());\n\ntotal(); // 30\nqty(5);\ntotal(); // 50')}
    ${$l({sourceVariants:uc,label:"Computed — derived value updates automatically"})}

    <h3>Batching</h3>
    <p>
      Multiple signal writes inside <code>batch()</code> are grouped — effects
      run once at the end, not after each write.
    </p>
    ${bc(Ml)}
    ${$l({sourceVariants:pc,label:"Batch — grouped writes, single recomputation"})}

    <h3>Reactive proxies</h3>
    <p>
      For complex state, <code>reactive()</code> wraps objects in deep proxies.
      Mutate normally — changes propagate automatically.
    </p>
    ${bc(Zl.typescript)}

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
    ${$l({sourceVariants:Bl,label:"Basic fetch — load and display data"})}

    <h3>Reusable fetch helper</h3>
    <p>
      Wrap fetch logic in a function that returns signals — the vanillakit
      equivalent of a custom hook.
    </p>
    ${$l({sourceVariants:Hl,label:"Reusable useFetch helper"})}

    <h3>Reactive refetch</h3>
    <p>Use <code>effect</code> to refetch when a signal changes:</p>
    ${bc('import { signal, effect } from "vanillakit";\n\nconst page = signal(1);\nconst items = signal([]);\n\neffect(() => {\n  const p = page();\n  fetch(`/api/items?page=${p}`)\n    .then(r => r.json())\n    .then(data => items(data));\n});\n\n// Changing page triggers a refetch\npage(2);')}
  </section>`},conditional:function(){return y`<section>
    <h2>Conditional Rendering</h2>
    <p>
      Use a function that returns different nodes (or
      <code>null</code>) based on signal values. The DOM updates surgically when
      conditions change. Works identically with <code>html</code> and
      <code>vkml</code> — switch tabs below to compare.
    </p>

    <h3>Show / hide</h3>
    ${$l({sourceVariants:oc,label:"Show/hide — toggle login state"})}

    <h3>Multiple conditions</h3>
    ${$l({sourceVariants:rc,label:"Switch — click buttons to change status"})}

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
      preserved. Switch tabs to see the <code>html</code> and <code>vkml</code>
      equivalents.
    </p>

    <h3>Basic list</h3>
    ${$l({sourceVariants:sc,label:"Keyed list — add, remove, reverse"})}

    <h3>Adding, removing, reordering</h3>
    <p>
      Mutate the signal array — <code>each()</code> diffs by key and
      moves/creates/removes DOM nodes efficiently.
    </p>
    ${bc('// Add\nitems(list => [...list, { id: 4, label: "Delta" }]);\n\n// Remove\nitems(list => list.filter(i => i.id !== 2));\n\n// Reorder (DOM nodes are moved, not recreated)\nitems(list => [...list].reverse());\n\n// Update an item (the itemSig in the render function updates)\nitems(list => list.map(i =>\n  i.id === 1 ? { ...i, label: "Updated" } : i\n));')}

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
      write back. Switch tabs on any example below to compare
      <code>html</code> and <code>vkml</code> syntax.
    </p>

    <h3>Text input</h3>
    ${$l({sourceVariants:ac,label:"Two-way binding — type to see it update"})}

    <h3>Checkbox</h3>
    ${$l({sourceVariants:lc,label:"Checkbox — toggle to enable the button"})}

    <h3>Select</h3>
    ${$l({sourceVariants:cc,label:"Select — pick a color"})}

    <h3>Form submission</h3>
    ${$l({sourceVariants:ql,label:"Form submission"})}

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
    ${$l({sourceVariants:Wl,label:"Scoped CSS — hover the card"})}

    <h3>Dynamic styles</h3>
    <p>
      For styles that change based on signals, use a reactive
      <code>class</code> attribute or inline <code>style</code>:
    </p>
    ${$l({sourceVariants:Ll,label:"Reactive class and inline style"})}
    ${$l({sourceVariants:Jl,label:"Dynamic styles — drag the slider"})}

    <h3>Animations</h3>
    ${bc(zl)}
    ${$l({sourceVariants:Yl,label:"Keyframes animation"})}

    <h3>Combining class names</h3>
    <p><code>cx()</code> joins class names, filtering out falsy values:</p>
    ${bc(Vl)}

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
      vanillakit includes an SPA router with two modes: <strong>hash</strong>{"
      "} (default, e.g. <code>/#/about</code>) and
      <strong>history</strong> (clean URLs via the History API, e.g.
      <code>/about</code>). Routes map path patterns to functions that return
      DOM nodes. The router swaps content reactively when the location changes.
    </p>

    <h3>Choosing a mode</h3>
    <p>
      Call <code>initRouter</code> once at startup before rendering. Omit it to
      use the default hash mode.
    </p>
    ${bc(jl)}

    <h3>Basic setup</h3>
    ${$l({sourceVariants:Pl,label:"Basic router setup"})}

    <h3>Route parameters</h3>
    ${$l({sourceVariants:Dl,label:"Route parameters — :param capture"})}

    <h3>Programmatic navigation</h3>
    ${$l({sourceVariants:Nl,label:"Programmatic navigation"})}

    <h3>vs. React Router / Vue Router</h3>
    <p>
      React Router uses <code>&lt;Route&gt;</code> components and hooks. Vue
      Router uses a plugin and <code>&lt;router-view&gt;</code>. vanillakit's
      router is ~60 lines: a plain object mapping paths to functions. No
      providers, no hooks, no wrapping — just call
      <code>createRouter()</code> and drop the result into the DOM.
    </p>
  </section>`},hono:function(){return y`<section>
    <h2>Hono</h2>
    <p>
      Hono is a fast, lightweight web framework for Bun, Deno, Cloudflare
      Workers, and Node. Serve a vanillakit frontend as static files and use
      Hono for the API layer.
    </p>

    <h3>API server + static frontend</h3>
    ${bc('// server.ts (Hono on Bun)\nimport { Hono } from "hono";\nimport { serveStatic } from "hono/bun";\nimport { cors } from "hono/cors";\n\nconst app = new Hono();\napp.use("/api/*", cors());\n\napp.get("/api/todos", (c) => {\n  return c.json([\n    { id: 1, text: "Build with vanillakit", done: false },\n    { id: 2, text: "Deploy to edge", done: true },\n  ]);\n});\n\napp.post("/api/todos", async (c) => {\n  const body = await c.req.json();\n  return c.json({ id: Date.now(), ...body }, 201);\n});\n\n// Serve the Vite build as static files\napp.use("/*", serveStatic({ root: "./docs" }));\n\nexport default app;',"typescript")}

    <h3>Fetching data into signals</h3>
    ${$l({sourceVariants:Il,label:"Fetching data — Hono API + signals"})}
  </section>`},fastapi:function(){return y`<section>
    <h2>FastAPI</h2>
    <p>
      FastAPI serves as a Python backend. Build the vanillakit app with Vite,
      then serve the static output from FastAPI or use it purely as a JSON API.
    </p>

    <h3>Project layout</h3>
    ${bc("project/\n  backend/\n    main.py\n    requirements.txt\n  frontend/\n    demo/\n      index.html\n      app.ts\n    src/        # vanillakit source\n    vite.config.js","bash")}

    <h3>FastAPI backend</h3>
    ${bc('# backend/main.py\nfrom fastapi import FastAPI\nfrom fastapi.staticfiles import StaticFiles\nfrom fastapi.middleware.cors import CORSMiddleware\nfrom pydantic import BaseModel\n\napp = FastAPI()\napp.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"])\n\nclass Todo(BaseModel):\n    id: int\n    text: str\n    done: bool = False\n\ntodos: list[Todo] = [\n    Todo(id=1, text="Learn vanillakit", done=True),\n    Todo(id=2, text="Build something", done=False),\n]\n\n@app.get("/api/todos")\ndef get_todos():\n    return todos\n\n@app.post("/api/todos")\ndef add_todo(todo: Todo):\n    todos.append(todo)\n    return todo\n\napp.mount("/", StaticFiles(directory="../frontend/docs", html=True))',"python")}

    <h3>Frontend fetching</h3>
    ${$l({sourceVariants:Ol,label:"Fetching data — FastAPI + signals"})}
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
    ${bc('import { signal } from "vanillakit";\n\nconst count = signal(0);\ncount();           // read → 0\ncount(5);          // write → 5\ncount(n => n + 1); // update via function → 6\ncount.peek();      // read without tracking')}

    <h3>computed(fn)</h3>
    <p>
      Derives a read-only signal. Re-evaluates only when dependencies change.
    </p>
    ${bc('import { signal, computed } from "vanillakit";\n\nconst x = signal(2), y = signal(3);\nconst sum = computed(() => x() + y());\nsum(); // 5\nx(10);\nsum(); // 13')}

    <h3>effect(fn)</h3>
    <p>
      Runs a side effect whenever dependencies change. Returns a dispose
      function.
    </p>
    ${bc('import { signal, effect } from "vanillakit";\n\nconst name = signal("world");\nconst dispose = effect(() => console.log("Hello, " + name() + "!"));\n// logs: Hello, world!\nname("vanillakit");\n// logs: Hello, vanillakit!\ndispose(); // stops tracking')}

    <h3>batch(fn)</h3>
    <p>Groups writes — effects run once at the end.</p>
    ${bc(Ml)}

    <h3>untrack(fn)</h3>
    <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
    ${bc('import { signal, effect, untrack } from "vanillakit";\n\nconst x = signal(1), y = signal(2);\neffect(() => console.log(x() + untrack(() => y())));\ny(99); // does NOT re-run\nx(10); // re-runs, reads y\'s current value')}
  </section>`},reactive:function(){return y`<section>
    <h2>reactive.js</h2>
    <p>
      Deep reactive proxies backed by signals. Mutate normally — changes
      propagate automatically.
    </p>

    <h3>reactive(target)</h3>
    <p>Wraps a plain object/array in a deep reactive proxy.</p>
    ${$l({sourceVariants:Zl,label:"Reactive object — mutate properties and arrays naturally"})}

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
    <p style="font-size:0.875rem; color:var(--vk-color-text-muted);">
      Prefer function-call syntax? See <strong>vkml.js</strong> in the API
      Reference. For a full comparison of both styles see
      <strong>Choosing a Syntax</strong> in Concepts.
    </p>

    <p>
      Returns a <code>Node</code> or <code>DocumentFragment</code>. For SVG
      support or when you need a guaranteed single <code>Element</code>, use
      <strong>vkml.js</strong> instead.
    </p>

    <h3>html\`...\`</h3>
    <p>
      Interpolations can be static values, signals, or functions. Functions are
      wrapped in effects.
    </p>
    ${bc(Ul)}

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
    ${bc('import { signal, each, html } from "vanillakit";\n\nconst items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);\n\nhtml`<ul>\n  ${each(items, i => i.id, (itemSig) => html`<li>${() => itemSig().text}</li>`)}\n</ul>`;')}
  </section>`},"vkml-module":function(){return it.section(it.h2("vkml.js"),it.p("Function-call DOM builder. Every tag is available as a function via the ",it.code("vkml")," Proxy and as named exports. Returns a real ",it.code("Element")," — no virtual DOM, no parsing."),it.p({style:"font-size:0.875rem; color:var(--vk-color-text-muted);"},"Looking for the template-string API? See ",it.strong("html.js"),". For a side-by-side comparison see ",it.strong("Choosing a Syntax")," in the Concepts section."),it.h3("Tag builder — vkml.tagName(props?, ...children)"),it.p("Access any tag through the ",it.code("vkml")," Proxy. The first argument is treated as a props object if it is a plain object (not a Node, not an array, not an ",it.code("each()")," descriptor). Any other first argument is a child."),bc('import { vkml } from "vanillakit";\n\n// props + children\nvkml.div({ class: "card", style: "padding:16px;" }, "Hello");\n\n// children only (no props object)\nvkml.p("Plain text child");\n\n// reactive prop — function is wrapped in an effect\nconst isOpen = signal(false);\nvkml.div({ hidden: () => !isOpen() }, "Panel");\n\n// reactive child\nconst count = signal(0);\nvkml.span(count);           // reads signal; updates on change\nvkml.span(() => count());   // same — function child'),it.h3("Named exports"),it.p("Every HTML and SVG tag is also a named export — no ",it.code("vkml.")," prefix needed:"),bc(Gl),it.h3("Supported prop bindings"),it.ul({style:"color:var(--vk-color-text-muted);font-size:0.88rem;margin-bottom:10px;padding-left:20px;line-height:1.8;"},it.li(it.code("class")," / ",it.code("className")," — sets className (setAttribute on SVGElement)"),it.li(it.code("style")," — string or object (Object.assign to el.style)"),it.li(it.code("checked"),", ",it.code("value")," — synced to DOM properties"),it.li(it.code("disabled"),", ",it.code("readonly"),", ",it.code("hidden")," — presence attributes"),it.li(it.code("on*")," — addEventListener (e.g. ",it.code("onclick"),", ",it.code("oninput"),")"),it.li(it.code("ref")," — called with the element reference")),it.h3("each(listFn, keyFn, renderFn)"),it.p("Pass an ",it.code("each()")," descriptor directly as a child. Do not wrap it in a function — the descriptor itself carries the reactive list function."),bc('import { signal, each, ul, li } from "vanillakit";\n\nconst items = signal([{ id: 1, text: "first" }, { id: 2, text: "second" }]);\n\nul(\n  () => each(items, i => i.id, (itemSig) => li(() => itemSig().text))\n);'),it.h3("SVG support"),it.p("SVG tags are created with ",it.code("createElementNS")," automatically. Use named exports or ",it.code("vkml.svg"),", ",it.code("vkml.circle")," etc.:"),bc('import { signal, svg, circle } from "vanillakit";\n\nconst r = signal(30);\n\ndocument.body.append(\n  svg({ viewBox: "0 0 100 100", width: "100", height: "100" },\n    circle({\n      cx: "50", cy: "50",\n      r: () => String(r()),\n      fill: "var(--vk-color-accent)",\n    })\n  )\n);'),it.p({style:"font-size:0.875rem; color:var(--vk-color-text-muted);"},"Supported SVG tags: ",it.code("svg path circle rect line polyline polygon text g defs use image clipPath mask pattern linearGradient radialGradient stop ellipse"),"."),it.h3("Reserved word — variable"),it.p(it.code("var")," is a reserved word in JavaScript. Use ",it.code("vkml.variable")," (or the named export ",it.code("variable"),") to render a ",it.code("<var>")," element:"),bc('import { variable } from "vanillakit";\n\nconst el = variable("x");  // renders <var>x</var>'),it.h3("Disposal"),it.p("Elements created by vkml carry a ",it.code("__v_dispose()")," method when they have reactive bindings. Call it to stop all effects and clean up event listeners when removing the element from the DOM."))},"css-module":function(){return y`<section>
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
    ${bc('import { css } from "vanillakit";\n\nconst card = css`\n  padding: 16px;\n  background: #1a1a1a;\n  &:hover { border-color: gold; }\n  & .title { font-weight: 700; }\n  @media (max-width: 600px) { padding: 8px; }\n`;')}

    <h3>keyframes\`...\`</h3>
    <p>Creates a scoped <code>@keyframes</code> rule.</p>
    ${bc(zl)}

    <h3>globalCss\`...\` / cx(...classes)</h3>
    <p>Inject unscoped CSS or join class names (filtering falsy values).</p>
    ${bc(Vl)}
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
    ${bc(jl)}

    <h3>createRouter(routeMap)</h3>
    <p>
      Maps path patterns to handlers. Supports <code>:param</code> and
      <code>*</code> catch-all.
    </p>
    ${$l({sourceVariants:Pl,label:"createRouter — define routes"})}

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
    ${bc('import { navLink, css } from "vanillakit";\n\nconst active = css`color: gold; font-weight: 700;`;\nconst base   = css`color: gray;`;\n\ndocument.body.append(navLink("/about", "About", active, base));')}
  </section>`}};function qc(t,e,n){return y`<tr>
    <td><code>${t}</code></td>
    <td><code>${e}</code></td>
    <td>${n}</td>
  </tr>`}const Uc=[{label:"VanillaCSS",items:[{id:"overview",label:"Overview"},{id:"theming",label:"Theming"},{id:"components",label:"Components"},{id:"tokens",label:"Token Reference"}]}],Gc={overview:function(){return y`<section>
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
    ${$l({sourceVariants:Kl,label:"initVanillaCss + themeToggle"})}

    <h3>Standalone — no JavaScript required</h3>
    <p>
      Copy <code>src/vanillacss/</code> to your project and link
      <code>vanilla.css</code>. The entire framework is plain CSS — no build
      step, no JavaScript dependency.
    </p>
    ${bc('<!doctype html>\n<html>\n  <head>\n    <meta charset="utf-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1" />\n    <link rel="stylesheet" href="./vanillacss/vanilla.css" />\n  </head>\n  <body>\n    <header>\n      <a href="/">MySite</a>\n      <nav>\n        <a href="/about">About</a>\n        <a href="/blog">Blog</a>\n      </nav>\n    </header>\n    <main>\n      <h1>Hello</h1>\n      <p>Styled automatically — no class names needed.</p>\n      <button data-color-variant="primary">Get started</button>\n    </main>\n  </body>\n</html>',"markup")}

    <p>Or import in your own CSS:</p>
    ${bc('/* styles.css */\n@import "./vanillacss/vanilla.css";\n\n/* Your styles here — unlayered rules always beat @layer rules */\n:root {\n  --vk-color-accent: hsl(220 80% 60%);  /* swap to blue */\n}',"css")}

    <h3>Layer architecture</h3>
    <p>
      Every VanillaCSS rule lives inside a named <code>@layer</code> sub-layer.
      Your own styles — even ones with low specificity — automatically override
      VanillaCSS because unlayered declarations beat layered ones at equal
      specificity. No <code>!important</code>, no specificity fights.
    </p>
    ${bc("/* Sub-layer cascade order — lowest to highest priority */\n@layer vanillacss.reset,       /* minireset.css foundation      */\n       vanillacss.tokens,      /* custom properties & theme     */\n       vanillacss.base,        /* html, body, img, input reset  */\n       vanillacss.typography,  /* headings, links, lists, code  */\n       vanillacss.layout,      /* main, header, cards, grid     */\n       vanillacss.nav,         /* nav, breadcrumb, pagination   */\n       vanillacss.buttons,     /* buttons, hover effects        */\n       vanillacss.forms,       /* inputs, checkbox, switch      */\n       vanillacss.feedback,    /* alerts, progress, toast       */\n       vanillacss.data,        /* tables, tags, avatars         */\n       vanillacss.components,  /* dialog, tabs, accordion       */\n       vanillacss.utilities;   /* badges, sr-only, keyframes    */","css")}

    <p>Override any individual layer precisely:</p>
    ${bc("/* Any selector outside a @layer beats everything inside one */\n:root {\n  --vk-color-accent: hsl(220 80% 60%);\n}\n\n/* Or target a specific sub-layer */\n@layer vanillacss.typography {\n  h1 { letter-spacing: -0.05em; }\n}","css")}
  </section>`},theming:function(){return y`<section>
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
    ${bc('@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    --vk-color-bg:      hsl(var(--vk-gray-9));\n    --vk-color-surface: hsl(var(--vk-gray-8));\n    --vk-color-text:    hsl(var(--vk-gray-0));\n    color-scheme: dark;\n  }\n}',"css")}

    <h3>Manual override</h3>
    <p>
      Force a specific theme by setting <code>data-theme</code> on
      <code>&lt;html&gt;</code> or any ancestor element. This overrides the
      system preference.
    </p>
    ${bc('\x3c!-- Force dark --\x3e\n<html data-theme="dark">\n\n\x3c!-- Force light --\x3e\n<html data-theme="light">\n\n\x3c!-- Scope dark to a specific section --\x3e\n<div data-theme="dark">\n  <article data-card>Always dark card</article>\n</div>',"markup")}

    <h3>themeToggle() — with vanillakit</h3>
    <p>
      <code>themeToggle()</code> returns a reactive signal bound to
      <code>document.documentElement.dataset.theme</code>. It reads from
      <code>localStorage</code> on init, falls back to the system preference,
      and persists every user choice.
    </p>
    ${$l({sourceVariants:Xl,label:"themeToggle() — reactive dark/light toggle"})}

    <h3>Customizing the accent color</h3>
    <p>
      Override <code>--vk-color-accent</code> and
      <code>--vk-color-accent-dim</code> to rebrand the framework to any color.
      Add it to your own stylesheet — unlayered declarations beat
      <code>@layer vanillacss.tokens</code> at equal specificity.
    </p>
    ${bc("/* styles.css — swap gold accent for indigo */\n:root {\n  --vk-color-accent:     hsl(240 60% 60%);\n  --vk-color-accent-dim: hsl(240 60% 60% / 0.15);\n}","css")}

    <p>For separate light and dark accents:</p>
    ${bc('/* Light mode accent */\n:root {\n  --vk-color-accent:     hsl(240 60% 55%);\n  --vk-color-accent-dim: hsl(240 60% 55% / 0.12);\n}\n\n/* Dark mode accent */\n[data-theme="dark"],\n@media (prefers-color-scheme: dark) {\n  :root:not([data-theme="light"]) {\n    --vk-color-accent:     hsl(240 80% 70%);\n    --vk-color-accent-dim: hsl(240 80% 70% / 0.18);\n  }\n}',"css")}

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

    ${bc("/* Tighten transitions, widen container, adjust rem base */\n:root {\n  --vk-transition-speed: 0.1s;\n  --vk-container-max-width: 80rem;\n  --vk-font-size-root: 112.5%;  /* 18px base → scales all rem values */\n}","css")}
  </section>`},components:function(){return y`<section>
    <h2>Components</h2>
    <p>
      VanillaCSS styles native HTML elements and ARIA patterns automatically.
      Each example is fully editable — try changing the code!
    </p>

    <!-- ── TYPOGRAPHY ───────────────────────────────── -->
    <h3>Typography</h3>
    <p>Headings, body text, and inline elements are styled out of the box.</p>

    ${$l({sourceVariants:{typescript:"document.body.append(html`\n  <div>\n    <h1>Heading 1</h1>\n    <h2>Heading 2</h2>\n    <h3>Heading 3</h3>\n    <h4>Heading 4</h4>\n    <h5>Heading 5</h5>\n    <h6>Heading 6</h6>\n  </div>\n`);"}})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div>\n    <p>\n      A paragraph with <strong>bold</strong>, <em>italic</em>,\n      <small>small</small>, <mark>highlighted</mark>,\n      <code>inline code</code>, <kbd>Ctrl+K</kbd>,\n      and <a href="#">a link</a>.\n    </p>\n    <blockquote>A blockquote for pull quotes and callouts.</blockquote>\n  </div>\n`);'}})}
    ${$l({sourceVariants:{typescript:"document.body.append(html`\n  <div>\n    <ul>\n      <li>Unordered item one</li>\n      <li>Unordered item two</li>\n      <li>Unordered item three</li>\n    </ul>\n    <ol>\n      <li>Ordered item one</li>\n      <li>Ordered item two</li>\n      <li>Ordered item three</li>\n    </ol>\n  </div>\n`);"}})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <pre><code>const greeting = "Hello, world!";\nconsole.log(greeting);\n// → Hello, world!</code></pre>\n`);'}})}

    <!-- ── BUTTONS ───────────────────────────────────── -->
    <h3>Buttons</h3>
    <p>
      Use <code>data-color-variant</code> for semantic color,
      <code>data-style-variant</code> for hollow styles,
      <code>data-size</code> for scale.
    </p>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button>Default</button>\n    <button data-color-variant="primary">Primary</button>\n    <button data-color-variant="danger">Danger</button>\n    <button data-color-variant="success">Success</button>\n    <button data-color-variant="warning">Warning</button>\n    <button data-color-variant="info">Info</button>\n  </div>\n`);'},label:"Color variants"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;align-items:center;gap:.5rem">\n    <button data-size="sm">Small</button>\n    <button>Default</button>\n    <button data-size="lg">Large</button>\n    <button data-size="xl">XL</button>\n  </div>\n`);'},label:"Sizes"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-style-variant="ghost">Ghost</button>\n    <button data-style-variant="outline">Outline</button>\n  </div>\n`);'},label:"Style variants"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-style-variant="ghost" data-color-variant="primary">Ghost primary</button>\n    <button data-style-variant="ghost" data-color-variant="danger">Ghost danger</button>\n    <button data-style-variant="outline" data-color-variant="primary">Outline primary</button>\n    <button data-style-variant="outline" data-color-variant="danger">Outline danger</button>\n  </div>\n`);'},label:"Style + color combos"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-loading>Saving…</button>\n    <button data-color-variant="primary" data-loading>Loading</button>\n  </div>\n`);'},label:"Loading state"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div role="group">\n    <button>Left</button>\n    <button aria-pressed="true">Center</button>\n    <button>Right</button>\n  </div>\n`);'},label:"Button group"})}

    <p>Hover effects work on any element — cards, images, links, etc.</p>
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-hover="lift">Lift</button>\n    <button data-hover="scale">Scale</button>\n    <button data-hover="glow">Glow</button>\n    <button data-hover="pop">Pop</button>\n    <button data-hover="dim">Dim</button>\n    <button data-hover="bright">Bright</button>\n  </div>\n`);'},label:"Hover effects"})}

    <!-- ── FORMS ─────────────────────────────────────── -->
    <h3>Forms</h3>
    <p>
      All form controls are full-width by default. Wrap in a
      <code>&lt;label&gt;</code> for accessible pairing.
    </p>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.75rem;max-width:400px">\n    <label>Username<input type="text" placeholder="Enter username" /></label>\n    <label>Email<input type="email" placeholder="you@example.com" /></label>\n    <label>Bio<textarea placeholder="Tell us about yourself"></textarea></label>\n    <label>Country\n      <select>\n        <option>United States</option>\n        <option>Canada</option>\n        <option>United Kingdom</option>\n      </select>\n    </label>\n  </div>\n`);'},label:"Text inputs"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <input type="text" data-size="sm" placeholder="Small input" />\n    <input type="text" placeholder="Default input" />\n    <input type="text" data-size="lg" placeholder="Large input" />\n  </div>\n`);'},label:"Input sizes"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <label><input type="checkbox" checked /> Remember me</label>\n    <label><input type="checkbox" /> Subscribe to newsletter</label>\n    <label><input type="radio" name="plan" checked /> Free</label>\n    <label><input type="radio" name="plan" /> Pro</label>\n  </div>\n`);'},label:"Checkboxes & radios"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <label><input type="checkbox" role="switch" checked /> Enable notifications</label>\n    <label><input type="checkbox" role="switch" /> Dark mode</label>\n    <label>Volume<input type="range" min="0" max="100" value="60" /></label>\n  </div>\n`);'},label:"Switches & ranges"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <fieldset style="max-width:400px">\n    <legend>Preferences</legend>\n    <label><input type="checkbox" checked /> Email notifications</label>\n    <label><input type="checkbox" /> Weekly digest</label>\n  </fieldset>\n`);'},label:"Fieldset"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem;max-width:400px">\n    <label>\n      Email (invalid)\n      <input type="email" aria-invalid="true" value="not-an-email" />\n    </label>\n    <label>\n      Username (disabled)\n      <input type="text" disabled value="admin" />\n    </label>\n  </div>\n`);'},label:"Validation states"})}

    <!-- ── CARDS ─────────────────────────────────────── -->
    <h3>Cards</h3>
    <p>
      <code>article[data-card]</code> creates card layout. Add a
      <code>&lt;header&gt;</code> or <code>&lt;footer&gt;</code> for structured
      cards.
    </p>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <article data-card style="max-width:280px">\n    <h4>Simple card</h4>\n    <p>Card content with some descriptive text goes here.</p>\n    <button data-color-variant="primary">Action</button>\n  </article>\n`);'}})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <article data-card style="max-width:320px">\n    <header><h5>Card with header &amp; footer</h5></header>\n    <p>Content area of the card. Padding is applied automatically.</p>\n    <footer>\n      <button data-style-variant="ghost">Cancel</button>\n      <button data-color-variant="primary">Save</button>\n    </footer>\n  </article>\n`);'}})}

    <p>Use a <code>&lt;dl&gt;</code> inside a card for stat displays:</p>
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div data-grid style="max-width:420px">\n    <article data-card><dl><dt>Users</dt><dd>12,048</dd></dl></article>\n    <article data-card><dl><dt>Revenue</dt><dd>$4,200</dd></dl></article>\n  </div>\n`);'},label:"Stat cards"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;gap:1rem;flex-wrap:wrap">\n    <article data-card data-hover="lift" style="padding:1rem;min-width:140px">\n      <h6>Lift</h6><p>Hover me</p>\n    </article>\n    <article data-card data-hover="glow" style="padding:1rem;min-width:140px">\n      <h6>Glow</h6><p>Hover me</p>\n    </article>\n    <article data-card data-hover="scale" style="padding:1rem;min-width:140px">\n      <h6>Scale</h6><p>Hover me</p>\n    </article>\n  </div>\n`);'},label:"Card hover effects"})}

    <!-- ── LAYOUT ────────────────────────────────────── -->
    <h3>Layout</h3>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div data-grid>\n    <article data-card style="padding:1rem"><p>Column 1</p></article>\n    <article data-card style="padding:1rem"><p>Column 2</p></article>\n    <article data-card style="padding:1rem"><p>Column 3</p></article>\n  </div>\n`);'},label:"Auto grid"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div data-grid data-cols="2">\n    <article data-card style="padding:1rem"><p>Col A</p></article>\n    <article data-card style="padding:1rem"><p>Col B</p></article>\n  </div>\n`);'},label:"2-column grid"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div data-layout="sidebar" style="min-height:100px">\n    <aside style="background:var(--vk-color-surface-2);padding:1rem"><p>Sidebar</p></aside>\n    <main style="background:var(--vk-color-surface);padding:1rem"><p>Main content</p></main>\n  </div>\n`);'},label:"Sidebar layout"})}

    <!-- ── NAVIGATION ────────────────────────────────── -->
    <h3>Navigation</h3>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <nav>\n    <a href="#" aria-current="page">Home</a>\n    <a href="#">Docs</a>\n    <a href="#">Examples</a>\n    <a href="#">About</a>\n  </nav>\n`);'},label:"Nav bar"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <nav aria-label="breadcrumb">\n    <ol>\n      <li><a href="#">Home</a></li>\n      <li><a href="#">Docs</a></li>\n      <li><a href="#">VanillaCSS</a></li>\n    </ol>\n  </nav>\n`);'},label:"Breadcrumb"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <nav aria-label="pagination">\n    <ul>\n      <li><a href="#">‹</a></li>\n      <li><a href="#">1</a></li>\n      <li><a href="#" aria-current="page">2</a></li>\n      <li><a href="#">3</a></li>\n      <li><a href="#">›</a></li>\n    </ul>\n  </nav>\n`);'},label:"Pagination"})}

    <!-- ── ALERTS & FEEDBACK ─────────────────────────── -->
    <h3>Alerts &amp; Feedback</h3>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <div role="alert">Default — informational message</div>\n    <div role="alert" data-color-variant="danger">Danger: something went wrong</div>\n    <div role="alert" data-color-variant="success">Success: changes saved</div>\n    <div role="alert" data-color-variant="warning">Warning: action cannot be undone</div>\n    <div role="alert" data-color-variant="info">Info: a new version is available</div>\n    <div role="alert" data-color-variant="primary">Primary: featured announcement</div>\n  </div>\n`);'},label:"Alert variants"})}
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <progress value="35" max="100"></progress>\n    <progress value="70" max="100"></progress>\n  </div>\n`);'},label:"Progress bars"})}

    <p>Skeleton loading — apply <code>data-skeleton</code> to any element:</p>
    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-direction:column;gap:.5rem">\n    <p data-skeleton style="width:60%;height:1em"></p>\n    <p data-skeleton style="width:40%;height:1em"></p>\n    <p data-skeleton style="width:80%;height:1em"></p>\n  </div>\n`);'},label:"Skeleton loading"})}

    <!-- ── BADGES & TAGS ─────────────────────────────── -->
    <h3>Badges &amp; Tags</h3>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem;align-items:center">\n    <span data-badge>Default</span>\n    <span data-badge data-color-variant="primary">Primary</span>\n    <span data-badge data-color-variant="danger">Danger</span>\n    <span data-badge data-color-variant="success">Success</span>\n    <span data-badge data-color-variant="warning">Warning</span>\n    <span data-badge data-color-variant="info">Info</span>\n  </div>\n`);'},label:"Badge variants"})}
    ${$l({sourceVariants:{typescript:"document.body.append(html`\n  <ul data-tags>\n    <li>TypeScript</li>\n    <li>CSS</li>\n    <li>Vanilla JS</li>\n    <li>HTML</li>\n    <li>Progressive enhancement</li>\n  </ul>\n`);"},label:"Tags"})}

    <!-- ── TABLES ────────────────────────────────────── -->
    <h3>Tables</h3>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <table>\n    <thead>\n      <tr>\n        <th aria-sort="ascending">Name</th>\n        <th>Role</th>\n        <th>Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr>\n        <td>Alice Chen</td><td>Engineer</td>\n        <td><span data-badge data-color-variant="success">Active</span></td>\n      </tr>\n      <tr>\n        <td>Bob Smith</td><td>Designer</td>\n        <td><span data-badge data-color-variant="success">Active</span></td>\n      </tr>\n      <tr>\n        <td>Carol White</td><td>Manager</td>\n        <td><span data-badge data-color-variant="warning">Away</span></td>\n      </tr>\n    </tbody>\n  </table>\n`);'}})}

    <!-- ── TIMELINE ──────────────────────────────────── -->
    <h3>Timeline</h3>

    ${$l({sourceVariants:{typescript:"document.body.append(html`\n  <ol data-timeline>\n    <li>\n      <strong>Project kickoff</strong>\n      <p>Team assembled, requirements defined</p>\n    </li>\n    <li>\n      <strong>Design phase</strong>\n      <p>Wireframes and prototypes completed</p>\n    </li>\n    <li>\n      <strong>Development</strong>\n      <p>Implementation in progress</p>\n    </li>\n  </ol>\n`);"}})}

    <!-- ── TABS ──────────────────────────────────────── -->
    <h3>Tabs</h3>
    <p>
      Styled via <code>role="tablist"</code> and <code>role="tab"</code>. Use
      <code>aria-selected="true"</code> on the active tab.
    </p>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div>\n    <div role="tablist">\n      <button role="tab" aria-selected="true">Overview</button>\n      <button role="tab" aria-selected="false">API</button>\n      <button role="tab" aria-selected="false">Examples</button>\n    </div>\n    <div role="tabpanel"><p>Active panel content shown here.</p></div>\n  </div>\n`);'}})}

    <!-- ── ACCORDION ─────────────────────────────────── -->
    <h3>Accordion</h3>
    <p>
      Uses native <code>&lt;details&gt;</code> — no JavaScript needed. Stack
      adjacently to merge borders automatically.
    </p>

    ${$l({sourceVariants:{typescript:"document.body.append(html`\n  <div>\n    <details>\n      <summary>What is VanillaCSS?</summary>\n      <p>A classless CSS framework that styles semantic HTML without class names.</p>\n    </details>\n    <details open>\n      <summary>How do I customize it?</summary>\n      <p>Override <code>--vk-*</code> custom properties in your own stylesheet.</p>\n    </details>\n    <details>\n      <summary>Does it need JavaScript?</summary>\n      <p>No — CSS-only usage is fully functional.</p>\n    </details>\n  </div>\n`);"}})}

    <!-- ── DROPDOWN ──────────────────────────────────── -->
    <h3>Dropdown</h3>
    <p>
      Add <code>data-dropdown</code> to a <code>&lt;details&gt;</code>
      for absolute-positioned menus.
    </p>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <details data-dropdown>\n    <summary><button>Options ▾</button></summary>\n    <ul>\n      <li><a href="javascript:void(0)">Profile</a></li>\n      <li><a href="javascript:void(0)">Settings</a></li>\n      <li><a href="javascript:void(0)">Sign out</a></li>\n    </ul>\n  </details>\n`);'}})}

    <!-- ── DIALOG ────────────────────────────────────── -->
    <h3>Dialog</h3>
    <p>
      Styled via the native <code>&lt;dialog&gt;</code> element. Open with
      <code>dialogEl.showModal()</code> for a modal with backdrop, or
      <code>.show()</code> for modeless.
    </p>

    ${$l({sourceVariants:{typescript:'\n  const openDialog = () =>\n    document.querySelector<HTMLDialogElement>("#dialogTest")?.showModal();\n  const closeDialog = () =>\n    document.querySelector<HTMLDialogElement>("#dialogTest")?.close();\n\n  const Dialog = () => html`\n    <dialog id="dialogTest">\n      <header><h4>Confirm delete</h4></header>\n      <p>\n        This will permanently delete the item. This action cannot be undone.\n      </p>\n      <footer>\n        <button data-style-variant="ghost" onclick=${closeDialog}>\n          Cancel\n        </button>\n        <button data-color-variant="danger" onclick=${closeDialog}>\n          Delete\n        </button>\n      </footer>\n    </dialog>\n\n    <button onclick=${openDialog}>Open</button>\n  `;\ndocument.body.append(Dialog());'},label:"Modal dialog"})}
    ${bc('// Open as modal (with backdrop)\nconst dialog = document.querySelector("dialog");\ndialog.showModal();\n\n// Close\ndialog.close();',"javascript")}

    <!-- ── TOOLTIP ───────────────────────────────────── -->
    <h3>Tooltip</h3>
    <p>
      CSS-only tooltips via <code>data-tooltip</code>. Appears above the element
      on hover or focus.
    </p>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;flex-wrap:wrap;gap:.5rem">\n    <button data-tooltip="Copy to clipboard">Copy</button>\n    <button data-tooltip="Open in a new tab" data-color-variant="primary">Open</button>\n    <abbr data-tooltip="HyperText Markup Language">HTML</abbr>\n  </div>\n`);'}})}

    <!-- ── POPOVER ───────────────────────────────────── -->
    <h3>Popover</h3>
    <p>
      Styled via the <code>[popover]</code> attribute. Uses the native Popover
      API — no extra JavaScript needed for basic show/hide.
    </p>

    ${$l({sourceVariants:{typescript:'document.body.append(html`\n  <div style="display:flex;gap:.75rem;align-items:center">\n    <button popovertarget="vk-pop-demo" style="anchor-name:--vk-pop-demo">Show tip ▾</button>\n    <div popover id="vk-pop-demo" style="margin:4px 0 0;position:fixed;position-anchor:--vk-pop-demo;top:anchor(bottom);left:anchor(left)">\n      <strong>Quick tip</strong>\n      <p>Use CSS sub-layers to override styles without specificity battles.</p>\n    </div>\n    <small style="opacity:.6">Click the button to open</small>\n  </div>\n`);'},label:"Popover"})}
  </section>`},tokens:function(){return y`<section>
    <h2>Token Reference</h2>
    <p>
      All <code>--vk-*</code> custom properties. Override any token in your own
      stylesheet — unlayered declarations automatically beat
      <code>@layer vanillacss.tokens</code>.
    </p>
    ${bc(":root {\n  --vk-color-accent: hsl(220 80% 60%);  /* override a single token */\n}","css")}

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
        ${qc("--vk-gray-0","36 10% 98%","Near-white warm gray")}
        ${qc("--vk-gray-1","36 8% 94%","Light surface")}
        ${qc("--vk-gray-2","240 6% 85%","Borders (light)")}
        ${qc("--vk-gray-3","240 4% 70%","Muted surface")}
        ${qc("--vk-gray-4","255 2% 55%","Muted text")}
        ${qc("--vk-gray-5","240 4% 35%","Mid gray")}
        ${qc("--vk-gray-6","240 8% 22%","Dark surface")}
        ${qc("--vk-gray-7","240 8% 14%","Deeper surface")}
        ${qc("--vk-gray-8","240 8% 10%","Near-black (body text, light)")}
        ${qc("--vk-gray-9","240 8% 5%","True dark background")}
        ${qc("--vk-gold","47 78% 59%","Default accent hue")}
        ${qc("--vk-green","151 76% 62%","Success hue")}
        ${qc("--vk-yellow","45 90% 58%","Warning hue")}
        ${qc("--vk-red","0 76% 62%","Danger hue")}
        ${qc("--vk-blue","225 76% 62%","Info hue")}
        ${qc("--vk-purple","270 60% 62%","Purple hue")}
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
        ${qc("--vk-color-bg","hsl(--vk-gray-0)","Page background")}
        ${qc("--vk-color-surface","hsl(--vk-gray-1)","Card / panel background")}
        ${qc("--vk-color-surface-2","hsl(--vk-gray-2)","Nested surface, code block bg")}
        ${qc("--vk-color-surface-3","hsl(--vk-gray-3)","kbd, switch track, deep nested")}
        ${qc("--vk-color-border","hsl(--vk-gray-2)","All borders")}
        ${qc("--vk-color-text","hsl(--vk-gray-8)","Body text")}
        ${qc("--vk-color-text-muted","hsl(--vk-gray-4)","Subtext, placeholders, labels")}
        ${qc("--vk-color-link","hsl(--vk-gold)","Link color (alias of accent)")}
        ${qc("--vk-color-accent","hsl(--vk-gold)","Primary accent — links, active states, focus rings")}
        ${qc("--vk-color-accent-dim","hsl(--vk-gold / 0.18)","Accent tint for backgrounds")}
        ${qc("--vk-color-danger","hsl(--vk-red)","Error / destructive")}
        ${qc("--vk-color-danger-dim","hsl(--vk-red / 0.12)","Danger tint")}
        ${qc("--vk-color-success","hsl(--vk-green)","Positive / confirmed")}
        ${qc("--vk-color-success-dim","hsl(--vk-green / 0.12)","Success tint")}
        ${qc("--vk-color-warning","hsl(--vk-yellow)","Caution / in-progress")}
        ${qc("--vk-color-warning-dim","hsl(--vk-yellow / 0.12)","Warning tint")}
        ${qc("--vk-color-info","hsl(--vk-blue)","Neutral informational")}
        ${qc("--vk-color-info-dim","hsl(--vk-blue / 0.12)","Info tint")}
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
        ${qc("--vk-font-body","system-ui, -apple-system, 'Segoe UI', sans-serif","Body font stack")}
        ${qc("--vk-font-mono","ui-monospace, 'Cascadia Code', 'Fira Code', monospace","Code / mono font stack")}
        ${qc("--vk-font-size-sm","0.875rem","Small text, labels, nav")}
        ${qc("--vk-font-size-base","1rem","Body text")}
        ${qc("--vk-font-size-lg","1.125rem","Large text, hero subtitle")}
        ${qc("--vk-font-size-xl","1.25rem","h4")}
        ${qc("--vk-font-size-2xl","1.5rem","h3")}
        ${qc("--vk-font-size-3xl","2rem","h2, card stat dd")}
        ${qc("--vk-font-size-4xl","2.5rem","h1")}
        ${qc("--vk-line-height","1.6","Body line height")}
        ${qc("--vk-line-height-tight","1.2","Heading line height")}
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
        ${qc("--vk-space-xs","0.25rem","Tight gaps, marker margins")}
        ${qc("--vk-space-sm","0.5rem","Component inner padding")}
        ${qc("--vk-space-md","1rem","Standard spacing, paragraph margin")}
        ${qc("--vk-space-lg","1.5rem","Section padding, card padding")}
        ${qc("--vk-space-xl","2.5rem","Section margin, header block")}
        ${qc("--vk-space-2xl","4rem","Hero padding, top-level gaps")}
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
        ${qc("--vk-radius-sm","4px","Tags, badges, marks, kbd, small inputs")}
        ${qc("--vk-radius-md","8px","Buttons, inputs, cards, dialogs")}
        ${qc("--vk-radius-lg","12px","Dialog, large surfaces")}
        ${qc("--vk-radius-full","9999px","Pill buttons, switches, avatars, progress")}
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
        ${qc("--vk-shadow-sm","0 1px 3px hsl(0 0% 0% / 0.08)","Subtle elevation — range thumb")}
        ${qc("--vk-shadow-md","0 4px 12px hsl(0 0% 0% / 0.1)","Dropdowns, popovers, lifted cards")}
        ${qc("--vk-shadow-lg","0 8px 30px hsl(0 0% 0% / 0.12)","Dialogs, toasts")}
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
        ${qc("--vk-ease-default","cubic-bezier(0.4, 0, 0.2, 1)","Standard motion — all transitions")}
        ${qc("--vk-ease-bounce","cubic-bezier(0.34, 1.56, 0.64, 1)","Playful entrance — available for custom use")}
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
        ${qc("--vk-z-dropdown","100","Dropdown menus, tooltips")}
        ${qc("--vk-z-sticky","200","Sticky headers, floating elements")}
        ${qc("--vk-z-modal","300","Modals, overlays")}
        ${qc("--vk-z-toast","400","Toast notifications — always on top")}
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
        ${qc("--vk-font-size-root","100%","font-size on <html> — scales all rem values across the page")}
        ${qc("--vk-transition-speed","0.15s","All hover, focus, and color transitions")}
        ${qc("--vk-transition-speed-slow","0.2s","Switch toggle slide, progress bar fill, accordion icon rotation")}
        ${qc("--vk-animation-speed","0.2s","Dialog and overlay entrance keyframe duration")}
        ${qc("--vk-container-max-width","72rem","<main> max-width")}
        ${qc("--vk-sidebar-width","200px",'[data-layout="sidebar"] first column width')}
      </tbody>
    </table>
  </section>`}};H({mode:"history",base:"/vanillakit/"});const{theme:Wc,toggle:Jc}=K(),Yc=I`
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
`,Kc=U({"/":function(){return it.div({class:"animate-in"},it.section({"data-hero":!0},it.h1("Build UIs with ",it.span({class:"text-accent"},"plain JavaScript.")),it.p("Minimal and expressive utilities that complement vanilla JS to build modern, reactive websites. Typescript-friendly, zero dependencies, no build step required."),it.div(it.a({href:"#/docs",role:"button","data-color-variant":"primary"},"Get started"),it.a({href:"https://github.com/nisuxyz/vanillakit",target:"_blank",role:"button","data-style-variant":"outline"},"GitHub ↗"))),it.hr(),it.h4({class:"text-accent"},"See it in action"),it.p("Check out the interactive demos — a full todo app, reactive object explorer, and stress tests for signals and keyed lists."),it.div({"data-grid":!0,"data-cols":"3"},it.a({href:"#/tasks",role:"button","data-style-variant":"outline"},"Todo app"),it.a({href:"#/playground",role:"button","data-style-variant":"outline"},"Playground"),it.a({href:"#/stress",role:"button","data-style-variant":"outline"},"Stress test")),it.hr(),it.div({"data-grid":!0,"data-cols":"3"},C(fc,t=>t.dd,t=>((t={dd:"1 billion",dt:"That's big!"})=>it.article({"data-card":!0,style:"text-align:center;"},it.dl(it.dd({class:"text-accent"},t.dd),it.dt(t.dt))))(t()))),it.br(),it.div({"data-grid":!0},it.article({"data-card":!0,"data-hover":"glow"},it.h5({style:"font-family:var(--vk-font-mono);"},"⚡ signal.js"),it.p("Fine-grained reactivity — signal, computed, effect, batch. Everything else builds on this.")),it.article({"data-card":!0,"data-hover":"glow"},it.h5({style:"font-family:var(--vk-font-mono);"},"🔄 reactive.js"),it.p("Deep reactive proxies via Proxy. Mutate objects and arrays normally — changes propagate automatically.")),it.article({"data-card":!0,"data-hover":"glow"},it.h5({style:"font-family:var(--vk-font-mono);"},"📝 html.js"),it.p("Tagged templates producing live DOM nodes. Reactive bindings, event handlers, keyed lists — no virtual DOM.")),it.article({"data-card":!0,"data-hover":"glow"},it.h5({style:"font-family:var(--vk-font-mono);"},"🎨 css.js"),it.p("Scoped CSS-in-JS using CSSStyleSheet. Supports nesting, @keyframes, @media, and cx() for composition.")),it.article({"data-card":!0,"data-hover":"glow"},it.h5({style:"font-family:var(--vk-font-mono);"},"🧭 router.js"),it.p("Hash-based SPA router. Pattern matching with :params, navLink with active classes, zero config."))),it.hr(),it.h4({class:"text-accent"},"Quick example"),it.p("A counter in 9 lines. Driven by signals — no re-renders or diffing."),$l({sourceVariants:Sl,label:"Try editing the code!"}))},"/examples":function(){const t=i("snippets"),{div:e,h1:n,p:o,aside:r,nav:s,a:a}=it;return e({class:"animate-in"},n("Examples"),o({class:_n},"Interactive demos, code snippets, and stress tests."),e({"data-layout":"sidebar"},r(s(Mc.map(n=>e({class:Fn},e({class:"group-label"},n.label),n.items.map(e=>a({class:Rn,"aria-current":()=>t()===e.id?"page":null,onclick:n=>{n.preventDefault(),t(e.id)},href:"#"},e.label)))))),e(()=>Lc[t()]())))},"/docs":function(){const t=i("getting-started");return it.div({class:"animate-in"},it.h1("Docs"),it.p({class:_n},"API reference, concepts, and guides."),it.div({"data-layout":"sidebar"},it.aside(it.nav(Bc.map(e=>it.div({class:Fn},it.div({class:"group-label"},e.label),e.items.map(e=>it.a({class:Rn,"aria-current":()=>t()===e.id?"page":null,onclick:n=>{n.preventDefault(),t(e.id)},href:"#"},e.label)))))),it.div(()=>Hc[t()]())))},"/vanillacss":function(){const t=i("overview");return it.div({class:"animate-in"},it.h1("VanillaCSS"),it.p({class:_n},"Classless styling, theming, tokens, and semantic component patterns."),it.div({"data-layout":"sidebar"},it.aside(it.nav(Uc.map(e=>it.div({class:Fn},it.div({class:"group-label"},e.label),e.items.map(e=>it.a({class:Rn,"aria-current":()=>t()===e.id?"page":null,onclick:n=>{n.preventDefault(),t(e.id)},href:"#"},e.label)))))),it.div(()=>Gc[t()]())))},"/about":function(){return it.div({class:"animate-in"},it.h1("Architecture"),it.p({class:_n},"Six standalone modules. ~760 lines total. Zero dependencies."),it.article(it.h3("Design Principles"),it.ul(it.li("Functions are components. No classes, no magic strings."),it.li(it.code("() =>")," means reactive. Everything else is static. That's the only rule."),it.li("Fine-grained updates. Each reactive expression updates exactly one DOM node."),it.li("Modules are independent. Only ",it.code("signal.js")," is shared."))),it.div(Vc.map(t=>it.article({"data-card":!0,style:"margin-bottom:10px;"},it.div({style:"display:flex;align-items:center;gap:16px;"},it.div({class:zc,style:`background: ${t.color}20; color: ${t.color};`},t.icon),it.div({style:"flex:1;display:flex;flex-direction:column;gap:2px;"},it.strong({style:"font-family:var(--vk-font-mono);font-size:0.9rem;"},t.name),it.small(t.desc)),it.span({"data-badge":!0},t.lines))))))},"*":()=>y`<div class="animate-in">
      <h1>404</h1>
      <p>Not found.</p>
    </div>`});document.getElementById("app").append(y`
    <header>
      <a
        class=${Cn}
        href="/"
        onclick=${t=>{t.preventDefault(),q("/")}}
        >vanillakit_</a
      >
      <div style="display:flex;align-items:center;gap:8px;">
        <nav>
          ${G("/","Home")} ${G("/docs","Docs")}
          ${G("/vanillacss","VanillaCSS")}
          ${G("/examples","Examples")} ${G("/about","About")}
        </nav>
        <button class=${Yc} onclick=${Jc} title="Toggle theme">
          ${()=>"dark"===Wc()?"☀️":"🌙"}
        </button>
      </div>
    </header>
    <main>${Kc()}</main>
    <footer>
      Built with <span class="text-accent">vanillakit</span> — zero deps, ~760
      lines of JS
    </footer>
  `);
