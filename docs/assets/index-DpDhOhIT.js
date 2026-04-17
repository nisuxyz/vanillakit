(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const p of s.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&r(p)}).observe(document,{childList:!0,subtree:!0});function t(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(a){if(a.ep)return;a.ep=!0;const s=t(a);fetch(a.href,s)}})();let H=null,ge=0;const Pe=new Set;function T(e){let n=e;const t=new Set;function r(){if(arguments.length===0)return H&&(t.add(H),H._deps.add(t)),n;const a=typeof arguments[0]=="function"?arguments[0](n):arguments[0];if(Object.is(a,n))return n;if(n=a,ge>0)for(const s of t)Pe.add(s);else for(const s of[...t])s._run();return n}return r.peek=()=>n,r}function Me(e){const n=T(void 0);Y(()=>n(e()));const t=()=>n();return t.peek=n.peek,t}function Y(e){const n={_fn:e,_deps:new Set,_disposed:!1,_run(){if(n._disposed)return;for(const r of n._deps)r.delete(n);n._deps.clear();const t=H;H=n;try{e()}finally{H=t}}};return n._run(),()=>{n._disposed=!0;for(const t of n._deps)t.delete(n);n._deps.clear()}}function lt(e){ge++;try{return e()}finally{if(ge--,ge===0){const n=[...Pe];Pe.clear();for(const t of n)t._run()}}}function ct(e){const n=H;H=null;try{return e()}finally{H=n}}const se=Symbol("reactive"),B=Symbol("raw"),Se=new WeakMap,Ue=new Set([se,B,Symbol.toPrimitive,Symbol.toStringTag,Symbol.iterator,Symbol.asyncIterator,Symbol.isConcatSpreadable,"__proto__","constructor","prototype","toJSON"]),dt=new Set(["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"]),ut=new Set(["indexOf","lastIndexOf","includes"]);function Ie(e){return e==null||typeof e!="object"||e instanceof Date||e instanceof RegExp||e instanceof Error||e instanceof Node||e instanceof Map||e instanceof Set?e:tt(e)}function pt(e,n){for(let t=0;t<e.length;t++){const r=String(t);n.has(r)&&n.get(r)(Ie(e[t]))}n.has("length")&&n.get("length")(e.length)}function tt(e){if(e==null||typeof e!="object"||e[se])return e;if(Se.has(e))return Se.get(e);const n=new Map;function t(a){return n.has(a)||n.set(a,T(Ie(e[a]))),n.get(a)}const r=new Proxy(e,{get(a,s,p){if(s===se)return!0;if(s===B)return a;if(typeof s=="symbol"&&Ue.has(s)||Ue.has(s))return Reflect.get(a,s,p);if(Array.isArray(a)&&typeof s=="string"){if(dt.has(s))return((...l)=>{let h;return lt(()=>{const y=l.map(k=>k&&k[B]?k[B]:k);h=Array.prototype[s].apply(a,y),pt(a,n)}),h});if(ut.has(s))return((...l)=>{t("length")();const h=l[0]&&l[0][B]?l[0][B]:l[0];return Array.prototype[s].apply(a,[h,...l.slice(1)])})}return t(s)()},set(a,s,p){const l=p&&p[B]?p[B]:p;return a[s]=l,n.has(s)&&n.get(s)(Ie(l)),Array.isArray(a)&&n.has("length")&&n.get("length")(a.length),!0},deleteProperty(a,s){return delete a[s],n.has(s)&&(n.get(s)(void 0),n.delete(s)),!0},has(a,s){return s===se||s===B?!0:(typeof s=="string"&&t(s)(),s in a)},ownKeys(a){return Array.isArray(a)&&t("length")(),Reflect.ownKeys(a)},getPrototypeOf(a){return Reflect.getPrototypeOf(a)},getOwnPropertyDescriptor(a,s){return Reflect.getOwnPropertyDescriptor(a,s)}});return Se.set(e,r),r}function gt(e){return e!=null&&e[se]===!0}function re(e){if(e==null||typeof e!="object")return e;if(gt(e)){const t=e[B];if(Array.isArray(t)){const a=e.length,s=[];for(let p=0;p<a;p++)s.push(re(e[p]));return s}const r={};for(const a of Object.keys(t))r[a]=re(e[a]);return r}if(Array.isArray(e))return e.map(re);const n={};for(const t of Object.keys(e))n[t]=re(e[t]);return n}let ft=0;const mt="data-v-";function z(e,...n){const t=ft++;let r="";const a=[];for(let x=0;x<e.length;x++)if(r+=e[x],x<n.length)if(ht(r)){const _=r.match(/(\S+)\s*=\s*["']?$/);if(_){const E=_[1],P=`${mt}${t}-${x}`;r=r.slice(0,-_[0].length),r+=`${P}="" `,a.push({index:x,attrName:E,elemMarker:P})}else r+=`v${t}_${x}`}else r+=`<!--v${t}-${x}-->`;const s=document.createElement("template");s.innerHTML=r;const p=s.content,l=[];for(const{index:x,attrName:_,elemMarker:E}of a){const P=p.querySelector(`[${E}]`);P&&(P.removeAttribute(E),vt(P,_,n[x],l))}const h=document.createTreeWalker(p,NodeFilter.SHOW_COMMENT),y=[];for(;h.nextNode();){const x=h.currentNode;x.data.startsWith(`v${t}-`)&&y.push({node:x,index:parseInt(x.data.slice(`v${t}-`.length))})}for(const{node:x,index:_}of y)bt(x,n[_],l);p.__v_dispose=()=>{for(const x of l)x();l.length=0};const k=[...p.childNodes];return k.length>0&&(k[0].__v_disposers||(k[0].__v_disposers=[])).push(p.__v_dispose),p.childNodes.length===1?p.childNodes[0]:p}function ht(e){for(let n=e.length-1;n>=0;n--){if(e[n]===">")return!1;if(e[n]==="<")return!0}return!1}function vt(e,n,t,r){if(n.startsWith("on")){e.addEventListener(n.slice(2).toLowerCase(),typeof t=="function"?t:()=>{});return}if(n==="ref"&&typeof t=="function"){t(e);return}if(typeof t=="function"){r.push(Y(()=>qe(e,n,t())));return}qe(e,n,t)}function qe(e,n,t){n==="class"||n==="className"?e.className=t??"":n==="style"&&typeof t=="object"?Object.assign(e.style,t):n==="style"&&typeof t=="string"?e.setAttribute("style",t):n==="checked"?e.checked=!!t:n==="value"&&"value"in e?e.value=t??"":n==="disabled"||n==="readonly"||n==="hidden"?t?e.setAttribute(n,""):e.removeAttribute(n):t===!1||t==null?e.removeAttribute(n):e.setAttribute(n,t===!0?"":String(t))}function bt(e,n,t){if(n!=null&&n.__v_each){t.push(xt(e,n));return}if(typeof n=="function"){let r=null;t.push(Y(()=>{r=Ze(e,r,n())}));return}Ze(e,null,n)}function Ze(e,n,t){const r=e.parentNode;if(!r)return n;if(n){const s=Array.isArray(n)?n:[n];for(const p of s)p.parentNode&&(ve(p),p.remove())}if(t==null||t===!1||t===!0)return null;if(Array.isArray(t)){const s=document.createDocumentFragment(),p=[];for(const l of t.flat(1/0)){const h=We(l);h&&(s.append(h),p.push(h))}return r.insertBefore(s,e),p}const a=We(t);return a&&r.insertBefore(a,e),a}function We(e){return e==null||e===!1||e===!0?null:e instanceof Node?e:document.createTextNode(String(e))}function ve(e){if(e.__v_disposers){for(const n of e.__v_disposers)n();e.__v_disposers=null}if(e.childNodes)for(const n of e.childNodes)ve(n)}function nt(e,n,t){return{__v_each:!0,listFn:e,keyFn:n,renderFn:t}}function xt(e,{listFn:n,keyFn:t,renderFn:r}){var l;const a=document.createComment("/each");(l=e.parentNode)==null||l.insertBefore(a,e.nextSibling);const s=new Map,p=Y(()=>{var P;const h=n(),y=Array.isArray(h)?h:[],k=e.parentNode;if(!k)return;const x=y.map(t),_=new Set(x);for(const[w,$]of s)if(!_.has(w)){for(const b of $.disposers)b();for(const b of $.nodes)ve(b),b.remove();s.delete(w)}let E=e.nextSibling;for(let w=0;w<y.length;w++){const $=x[w];let b=s.get($);if(b){if(b.itemSig(y[w]),b.indexSig(w),b.nodes.length>0&&b.nodes[0]!==E)for(const i of b.nodes)k.insertBefore(i,E);E=b.nodes.length>0?b.nodes[b.nodes.length-1].nextSibling:E}else{const i=T(y[w]),o=T(w),d=[];let c;const u=ct(()=>(c=r(i,o),(c==null?void 0:c.__v_dispose)||null)),f=c instanceof DocumentFragment?[...c.childNodes]:[c instanceof Node?c:document.createTextNode(String(c))];u&&d.push(u),b={nodes:f,disposers:d,itemSig:i,indexSig:o},s.set($,b);const v=document.createDocumentFragment();for(const g of f)v.append(g);k.insertBefore(v,E),E=((P=b.nodes[b.nodes.length-1])==null?void 0:P.nextSibling)??E}}});return()=>{p();for(const[,h]of s){for(const y of h.disposers)y();for(const y of h.nodes)ve(y),y.remove()}s.clear(),a.parentNode&&a.remove()}}let yt=0;const Oe=new CSSStyleSheet;document.adoptedStyleSheets=[...document.adoptedStyleSheets,Oe];function rt(){return"v-"+(yt++).toString(36)}function je(e){for(const n of e){const t=n.trim();if(t)try{Oe.insertRule(t,Oe.cssRules.length)}catch(r){console.warn("[css] Invalid rule:",r.message,"→",t.slice(0,120))}}}function m(e,...n){let t="";for(let a=0;a<e.length;a++)t+=e[a],a<n.length&&(t+=n[a]);const r=rt();return je(wt(t,`.${r}`)),r}function $t(e,...n){let t="";for(let a=0;a<e.length;a++)t+=e[a],a<n.length&&(t+=n[a]);const r=rt();return je([`@keyframes ${r} { ${t} }`]),r}function X(e,...n){let t="";for(let s=0;s<e.length;s++)t+=e[s],s<n.length&&(t+=n[s]);const r=t.split(`
`),a=[];for(const s of r){const p=s.trim();if(p.startsWith("@import ")){const l=p.match(/@import\s+url\(\s*['"]?([^'")\s]+)['"]?\s*\)/)||p.match(/@import\s+['"]([^'"]+)['"]/);if(l){const h=document.createElement("link");h.rel="stylesheet",h.href=l[1],document.head.appendChild(h)}}else a.push(s)}je(kt(a.join(`
`)))}function R(...e){return e.filter(Boolean).join(" ")}function kt(e){const n=[];let t=0,r="",a=!1,s="";for(let p=0;p<e.length;p++){const l=e[p];if(a){r+=l,l===s&&e[p-1]!=="\\"&&(a=!1);continue}if(l==='"'||l==="'"){a=!0,s=l,r+=l;continue}l==="{"?(t++,r+=l):l==="}"?(t--,r+=l,t===0&&(r.trim()&&n.push(r.trim()),r="")):r+=l}return n}function wt(e,n){const t=St(e),r=[];return ae(t,n,r),r}function St(e){const n={declarations:"",children:[],selector:""},t=[n];let r="",a=!1,s="";for(let l=0;l<e.length;l++){const h=e[l];if(a){r+=h,h===s&&e[l-1]!=="\\"&&(a=!1);continue}if(h==='"'||h==="'"){a=!0,s=h,r+=h;continue}if(h==="{"){const y=r.trim();r="";const k=y.lastIndexOf(";");let x;if(k!==-1){const E=y.slice(0,k+1).trim();if(E){const P=t[t.length-1];P.declarations+=(P.declarations?" ":"")+E}x=y.slice(k+1).trim()}else x=y;const _={selector:x,declarations:"",children:[]};t[t.length-1].children.push(_),t.push(_)}else if(h==="}"){const y=r.trim();if(y){const k=t[t.length-1];k.declarations+=(k.declarations?" ":"")+y}r="",t.pop()}else r+=h}const p=r.trim();return p&&(n.declarations+=(n.declarations?" ":"")+p),n}function ae(e,n,t){e.declarations&&t.push(`${n} { ${e.declarations} }`);for(const r of e.children){const a=r.selector;if(a)if(/^@(media|supports|container|layer)\b/.test(a)){const s=[];r.declarations&&s.push(`${n} { ${r.declarations} }`);for(const p of r.children)ae(p,n,s);s.length&&t.push(`${a} { ${s.join(" ")} }`)}else if(a.includes("&")){const s=a.split(",").map(p=>p.trim().replace(/&/g,n)).join(", ");r.declarations&&t.push(`${s} { ${r.declarations} }`);for(const p of r.children)ae(p,s,t)}else{const s=`${n} ${a}`;r.declarations&&t.push(`${s} { ${r.declarations} }`);for(const p of r.children)ae(p,s,t)}else{r.declarations&&t.push(`${n} { ${r.declarations} }`);for(const s of r.children)ae(s,n,t)}}}const be=T(window.location.hash.slice(1)||"/"),At=T({});window.addEventListener("hashchange",()=>{be(window.location.hash.slice(1)||"/")});function Ft(e){window.location.hash=e}function _t(e){const n=Object.entries(e).sort((t,r)=>t[0]==="*"?1:r[0]==="*"?-1:r[0].split("/").length-t[0].split("/").length);return()=>{const t=document.createElement("div");return Y(()=>{const r=be();let a=null;for(const[s,p]of n){const{regex:l,keys:h}=(()=>{if(s==="*")return{regex:/.*/,keys:[]};const k=[],x=s.replace(/:([^/]+)/g,(_,E)=>(k.push(E),"([^/]+)"));return{regex:new RegExp(`^${x}$`),keys:k}})(),y=r.match(l);if(y){const k={};h.forEach((x,_)=>{k[x]=decodeURIComponent(y[_+1])}),a={handler:p,params:k};break}}if(At(a?a.params:{}),t.innerHTML="",a){const s=a.handler();s instanceof Node&&t.append(s)}}),t}}function ee(e,n,t,r){const a=document.createElement("a");return a.href="#"+e,a.textContent=n,Y(()=>{a.className=(e==="/"?be()==="/":be().startsWith(e))?t:r}),a.addEventListener("click",s=>{s.preventDefault(),Ft(e)}),a}X`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&display=swap')
`;X`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
`;X`
  :root {
    --bg: #0c0c0e; --surface: #16161a; --surface-2: #1e1e24; --surface-3: #26262e;
    --border: #2a2a35; --text: #e8e6e3; --text-muted: #8b8a8e;
    --accent: #e8c547; --accent-dim: #e8c54730;
    --danger: #e85454; --danger-dim: #e8545420;
    --success: #54e8a0; --success-dim: #54e8a020;
    --info: #5478e8; --info-dim: #5478e820;
    --radius: 10px; --font: 'DM Sans', system-ui, sans-serif; --mono: 'JetBrains Mono', monospace;
  }
`;X`
  body { background: var(--bg); color: var(--text); font-family: var(--font); line-height: 1.6; min-height: 100vh; }
`;X`
  #app { max-width: 820px; margin: 0 auto; padding: 0 24px; }
`;const te=m`
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
`,ne=m`
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--accent-dim);
  letter-spacing: 0.02em;
`,Et=m`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 36px;
`,Ct=m`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--accent);
  font-family: var(--mono);
`,Tt=m`
  display: flex;
  gap: 4px;
`,Rt=$t`from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); }`,K=m`
  animation: ${Rt} 0.25s ease-out;
`,J=m`
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
`,V=m`
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 32px;
`,Z=m`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 12px;
`,I=m`
  font-family: var(--font);
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.12s ease;
  letter-spacing: 0.01em;
`,xe=m`
  background: var(--accent);
  color: var(--bg);
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`,fe=m`
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  &:hover {
    color: var(--text);
    border-color: var(--text-muted);
  }
`,oe=m`
  background: var(--danger-dim);
  color: var(--danger);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--danger);
  }
`,Pt=m`
  background: var(--info-dim);
  color: var(--info);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--info);
  }
`,ze=m`
  background: var(--success-dim);
  color: var(--success);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--success);
  }
`,ye=m`
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
`,De=m`
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
`,at=m`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,Ae=m`
  font-family: var(--mono);
  font-size: 0.8rem;
`,Fe=m`
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
`,It=m`
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
`,Be=m`
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
`,q=m`
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
`;var Ye=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ot(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var _e={exports:{}},Xe;function zt(){return Xe||(Xe=1,(function(e){var n=typeof window<"u"?window:typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var t=(function(r){var a=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,s=0,p={},l={manual:r.Prism&&r.Prism.manual,disableWorkerMessageHandler:r.Prism&&r.Prism.disableWorkerMessageHandler,util:{encode:function i(o){return o instanceof h?new h(o.type,i(o.content),o.alias):Array.isArray(o)?o.map(i):o.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(i){return Object.prototype.toString.call(i).slice(8,-1)},objId:function(i){return i.__id||Object.defineProperty(i,"__id",{value:++s}),i.__id},clone:function i(o,d){d=d||{};var c,u;switch(l.util.type(o)){case"Object":if(u=l.util.objId(o),d[u])return d[u];c={},d[u]=c;for(var f in o)o.hasOwnProperty(f)&&(c[f]=i(o[f],d));return c;case"Array":return u=l.util.objId(o),d[u]?d[u]:(c=[],d[u]=c,o.forEach(function(v,g){c[g]=i(v,d)}),c);default:return o}},getLanguage:function(i){for(;i;){var o=a.exec(i.className);if(o)return o[1].toLowerCase();i=i.parentElement}return"none"},setLanguage:function(i,o){i.className=i.className.replace(RegExp(a,"gi"),""),i.classList.add("language-"+o)},currentScript:function(){if(typeof document>"u")return null;if(document.currentScript&&document.currentScript.tagName==="SCRIPT")return document.currentScript;try{throw new Error}catch(c){var i=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(c.stack)||[])[1];if(i){var o=document.getElementsByTagName("script");for(var d in o)if(o[d].src==i)return o[d]}return null}},isActive:function(i,o,d){for(var c="no-"+o;i;){var u=i.classList;if(u.contains(o))return!0;if(u.contains(c))return!1;i=i.parentElement}return!!d}},languages:{plain:p,plaintext:p,text:p,txt:p,extend:function(i,o){var d=l.util.clone(l.languages[i]);for(var c in o)d[c]=o[c];return d},insertBefore:function(i,o,d,c){c=c||l.languages;var u=c[i],f={};for(var v in u)if(u.hasOwnProperty(v)){if(v==o)for(var g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);d.hasOwnProperty(v)||(f[v]=u[v])}var S=c[i];return c[i]=f,l.languages.DFS(l.languages,function(C,D){D===S&&C!=i&&(this[C]=f)}),f},DFS:function i(o,d,c,u){u=u||{};var f=l.util.objId;for(var v in o)if(o.hasOwnProperty(v)){d.call(o,v,o[v],c||v);var g=o[v],S=l.util.type(g);S==="Object"&&!u[f(g)]?(u[f(g)]=!0,i(g,d,null,u)):S==="Array"&&!u[f(g)]&&(u[f(g)]=!0,i(g,d,v,u))}}},plugins:{},highlightAll:function(i,o){l.highlightAllUnder(document,i,o)},highlightAllUnder:function(i,o,d){var c={callback:d,container:i,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};l.hooks.run("before-highlightall",c),c.elements=Array.prototype.slice.apply(c.container.querySelectorAll(c.selector)),l.hooks.run("before-all-elements-highlight",c);for(var u=0,f;f=c.elements[u++];)l.highlightElement(f,o===!0,c.callback)},highlightElement:function(i,o,d){var c=l.util.getLanguage(i),u=l.languages[c];l.util.setLanguage(i,c);var f=i.parentElement;f&&f.nodeName.toLowerCase()==="pre"&&l.util.setLanguage(f,c);var v=i.textContent,g={element:i,language:c,grammar:u,code:v};function S(D){g.highlightedCode=D,l.hooks.run("before-insert",g),g.element.innerHTML=g.highlightedCode,l.hooks.run("after-highlight",g),l.hooks.run("complete",g),d&&d.call(g.element)}if(l.hooks.run("before-sanity-check",g),f=g.element.parentElement,f&&f.nodeName.toLowerCase()==="pre"&&!f.hasAttribute("tabindex")&&f.setAttribute("tabindex","0"),!g.code){l.hooks.run("complete",g),d&&d.call(g.element);return}if(l.hooks.run("before-highlight",g),!g.grammar){S(l.util.encode(g.code));return}if(o&&r.Worker){var C=new Worker(l.filename);C.onmessage=function(D){S(D.data)},C.postMessage(JSON.stringify({language:g.language,code:g.code,immediateClose:!0}))}else S(l.highlight(g.code,g.grammar,g.language))},highlight:function(i,o,d){var c={code:i,grammar:o,language:d};if(l.hooks.run("before-tokenize",c),!c.grammar)throw new Error('The language "'+c.language+'" has no grammar.');return c.tokens=l.tokenize(c.code,c.grammar),l.hooks.run("after-tokenize",c),h.stringify(l.util.encode(c.tokens),c.language)},tokenize:function(i,o){var d=o.rest;if(d){for(var c in d)o[c]=d[c];delete o.rest}var u=new x;return _(u,u.head,i),k(i,u,o,u.head,0),P(u)},hooks:{all:{},add:function(i,o){var d=l.hooks.all;d[i]=d[i]||[],d[i].push(o)},run:function(i,o){var d=l.hooks.all[i];if(!(!d||!d.length))for(var c=0,u;u=d[c++];)u(o)}},Token:h};r.Prism=l;function h(i,o,d,c){this.type=i,this.content=o,this.alias=d,this.length=(c||"").length|0}h.stringify=function i(o,d){if(typeof o=="string")return o;if(Array.isArray(o)){var c="";return o.forEach(function(S){c+=i(S,d)}),c}var u={type:o.type,content:i(o.content,d),tag:"span",classes:["token",o.type],attributes:{},language:d},f=o.alias;f&&(Array.isArray(f)?Array.prototype.push.apply(u.classes,f):u.classes.push(f)),l.hooks.run("wrap",u);var v="";for(var g in u.attributes)v+=" "+g+'="'+(u.attributes[g]||"").replace(/"/g,"&quot;")+'"';return"<"+u.tag+' class="'+u.classes.join(" ")+'"'+v+">"+u.content+"</"+u.tag+">"};function y(i,o,d,c){i.lastIndex=o;var u=i.exec(d);if(u&&c&&u[1]){var f=u[1].length;u.index+=f,u[0]=u[0].slice(f)}return u}function k(i,o,d,c,u,f){for(var v in d)if(!(!d.hasOwnProperty(v)||!d[v])){var g=d[v];g=Array.isArray(g)?g:[g];for(var S=0;S<g.length;++S){if(f&&f.cause==v+","+S)return;var C=g[S],D=C.inside,G=!!C.lookbehind,le=!!C.greedy,F=C.alias;if(le&&!C.pattern.global){var st=C.pattern.toString().match(/[imsuy]*$/)[0];C.pattern=RegExp(C.pattern.source,st+"g")}for(var He=C.pattern||C,O=c.next,M=u;O!==o.tail&&!(f&&M>=f.reach);M+=O.value.length,O=O.next){var W=O.value;if(o.length>i.length)return;if(!(W instanceof h)){var ce=1,L;if(le){if(L=y(He,M,i,G),!L||L.index>=i.length)break;var de=L.index,ot=L.index+L[0].length,U=M;for(U+=O.value.length;de>=U;)O=O.next,U+=O.value.length;if(U-=O.value.length,M=U,O.value instanceof h)continue;for(var Q=O;Q!==o.tail&&(U<ot||typeof Q.value=="string");Q=Q.next)ce++,U+=Q.value.length;ce--,W=i.slice(M,U),L.index-=M}else if(L=y(He,0,W,G),!L)continue;var de=L.index,ue=L[0],$e=W.slice(0,de),Ge=W.slice(de+ue.length),ke=M+W.length;f&&ke>f.reach&&(f.reach=ke);var pe=O.prev;$e&&(pe=_(o,pe,$e),M+=$e.length),E(o,pe,ce);var it=new h(v,D?l.tokenize(ue,D):ue,F,ue);if(O=_(o,pe,it),Ge&&_(o,O,Ge),ce>1){var we={cause:v+","+S,reach:ke};k(i,o,d,O.prev,M,we),f&&we.reach>f.reach&&(f.reach=we.reach)}}}}}}function x(){var i={value:null,prev:null,next:null},o={value:null,prev:i,next:null};i.next=o,this.head=i,this.tail=o,this.length=0}function _(i,o,d){var c=o.next,u={value:d,prev:o,next:c};return o.next=u,c.prev=u,i.length++,u}function E(i,o,d){for(var c=o.next,u=0;u<d&&c!==i.tail;u++)c=c.next;o.next=c,c.prev=o,i.length-=u}function P(i){for(var o=[],d=i.head.next;d!==i.tail;)o.push(d.value),d=d.next;return o}if(!r.document)return r.addEventListener&&(l.disableWorkerMessageHandler||r.addEventListener("message",function(i){var o=JSON.parse(i.data),d=o.language,c=o.code,u=o.immediateClose;r.postMessage(l.highlight(c,l.languages[d],d)),u&&r.close()},!1)),l;var w=l.util.currentScript();w&&(l.filename=w.src,w.hasAttribute("data-manual")&&(l.manual=!0));function $(){l.manual||l.highlightAll()}if(!l.manual){var b=document.readyState;b==="loading"||b==="interactive"&&w&&w.defer?document.addEventListener("DOMContentLoaded",$):window.requestAnimationFrame?window.requestAnimationFrame($):window.setTimeout($,16)}return l})(n);e.exports&&(e.exports=t),typeof Ye<"u"&&(Ye.Prism=t),t.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},t.languages.markup.tag.inside["attr-value"].inside.entity=t.languages.markup.entity,t.languages.markup.doctype.inside["internal-subset"].inside=t.languages.markup,t.hooks.add("wrap",function(r){r.type==="entity"&&(r.attributes.title=r.content.replace(/&amp;/,"&"))}),Object.defineProperty(t.languages.markup.tag,"addInlined",{value:function(a,s){var p={};p["language-"+s]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:t.languages[s]},p.cdata=/^<!\[CDATA\[|\]\]>$/i;var l={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:p}};l["language-"+s]={pattern:/[\s\S]+/,inside:t.languages[s]};var h={};h[a]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return a}),"i"),lookbehind:!0,greedy:!0,inside:l},t.languages.insertBefore("markup","cdata",h)}}),Object.defineProperty(t.languages.markup.tag,"addAttribute",{value:function(r,a){t.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+r+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[a,"language-"+a],inside:t.languages[a]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),t.languages.html=t.languages.markup,t.languages.mathml=t.languages.markup,t.languages.svg=t.languages.markup,t.languages.xml=t.languages.extend("markup",{}),t.languages.ssml=t.languages.xml,t.languages.atom=t.languages.xml,t.languages.rss=t.languages.xml,(function(r){var a=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;r.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+a.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+a.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+a.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+a.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:a,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},r.languages.css.atrule.inside.rest=r.languages.css;var s=r.languages.markup;s&&(s.tag.addInlined("style","css"),s.tag.addAttribute("style","css"))})(t),t.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},t.languages.javascript=t.languages.extend("clike",{"class-name":[t.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),t.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,t.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:t.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:t.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:t.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:t.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:t.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),t.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:t.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),t.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),t.languages.markup&&(t.languages.markup.tag.addInlined("script","javascript"),t.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),t.languages.js=t.languages.javascript,(function(){if(typeof t>"u"||typeof document>"u")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var r="Loading…",a=function(w,$){return"✖ Error "+w+" while fetching file: "+$},s="✖ Error: File does not exist or is empty",p={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},l="data-src-status",h="loading",y="loaded",k="failed",x="pre[data-src]:not(["+l+'="'+y+'"]):not(['+l+'="'+h+'"])';function _(w,$,b){var i=new XMLHttpRequest;i.open("GET",w,!0),i.onreadystatechange=function(){i.readyState==4&&(i.status<400&&i.responseText?$(i.responseText):i.status>=400?b(a(i.status,i.statusText)):b(s))},i.send(null)}function E(w){var $=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(w||"");if($){var b=Number($[1]),i=$[2],o=$[3];return i?o?[b,Number(o)]:[b,void 0]:[b,b]}}t.hooks.add("before-highlightall",function(w){w.selector+=", "+x}),t.hooks.add("before-sanity-check",function(w){var $=w.element;if($.matches(x)){w.code="",$.setAttribute(l,h);var b=$.appendChild(document.createElement("CODE"));b.textContent=r;var i=$.getAttribute("data-src"),o=w.language;if(o==="none"){var d=(/\.(\w+)$/.exec(i)||[,"none"])[1];o=p[d]||d}t.util.setLanguage(b,o),t.util.setLanguage($,o);var c=t.plugins.autoloader;c&&c.loadLanguages(o),_(i,function(u){$.setAttribute(l,y);var f=E($.getAttribute("data-range"));if(f){var v=u.split(/\r\n?|\n/g),g=f[0],S=f[1]==null?v.length:f[1];g<0&&(g+=v.length),g=Math.max(0,Math.min(g-1,v.length)),S<0&&(S+=v.length),S=Math.max(0,Math.min(S,v.length)),u=v.slice(g,S).join(`
`),$.hasAttribute("data-start")||$.setAttribute("data-start",String(g+1))}b.textContent=u,t.highlightElement(b)},function(u){$.setAttribute(l,k),b.textContent=u})}}),t.plugins.fileHighlight={highlight:function($){for(var b=($||document).querySelectorAll(x),i=0,o;o=b[i++];)t.highlightElement(o)}};var P=!1;t.fileHighlight=function(){P||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),P=!0),t.plugins.fileHighlight.highlight.apply(this,arguments)}})()})(_e)),_e.exports}var Dt=zt();const Ee=Ot(Dt);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;var Ke={},Je;function Nt(){return Je||(Je=1,(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var n=e.languages.extend("typescript",{});delete n["class-name"],e.languages.typescript["class-name"].inside=n,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:n}}}}),e.languages.ts=e.languages.typescript})(Prism)),Ke}Nt();(function(e){var n=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+n.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+n.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+n.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+n.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:n,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var t=e.languages.markup;t&&(t.tag.addInlined("style","css"),t.tag.addAttribute("style","css"))})(Prism);Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(n,t){var r={};r["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[t]},r.cdata=/^<!\[CDATA\[|\]\]>$/i;var a={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:r}};a["language-"+t]={pattern:/[\s\S]+/,inside:Prism.languages[t]};var s={};s[n]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return n}),"i"),lookbehind:!0,greedy:!0,inside:a},Prism.languages.insertBefore("markup","cdata",s)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,n){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[n,"language-"+n],inside:Prism.languages[n]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var n="\\b(?:BASH|BASHOPTS|BASH_ALIASES|BASH_ARGC|BASH_ARGV|BASH_CMDS|BASH_COMPLETION_COMPAT_DIR|BASH_LINENO|BASH_REMATCH|BASH_SOURCE|BASH_VERSINFO|BASH_VERSION|COLORTERM|COLUMNS|COMP_WORDBREAKS|DBUS_SESSION_BUS_ADDRESS|DEFAULTS_PATH|DESKTOP_SESSION|DIRSTACK|DISPLAY|EUID|GDMSESSION|GDM_LANG|GNOME_KEYRING_CONTROL|GNOME_KEYRING_PID|GPG_AGENT_INFO|GROUPS|HISTCONTROL|HISTFILE|HISTFILESIZE|HISTSIZE|HOME|HOSTNAME|HOSTTYPE|IFS|INSTANCE|JOB|LANG|LANGUAGE|LC_ADDRESS|LC_ALL|LC_IDENTIFICATION|LC_MEASUREMENT|LC_MONETARY|LC_NAME|LC_NUMERIC|LC_PAPER|LC_TELEPHONE|LC_TIME|LESSCLOSE|LESSOPEN|LINES|LOGNAME|LS_COLORS|MACHTYPE|MAILCHECK|MANDATORY_PATH|NO_AT_BRIDGE|OLDPWD|OPTERR|OPTIND|ORBIT_SOCKETDIR|OSTYPE|PAPERSIZE|PATH|PIPESTATUS|PPID|PS1|PS2|PS3|PS4|PWD|RANDOM|REPLY|SECONDS|SELINUX_INIT|SESSION|SESSIONTYPE|SESSION_MANAGER|SHELL|SHELLOPTS|SHLVL|SSH_AUTH_SOCK|TERM|UID|UPSTART_EVENTS|UPSTART_INSTANCE|UPSTART_JOB|UPSTART_SESSION|USER|WINDOWID|XAUTHORITY|XDG_CONFIG_DIRS|XDG_CURRENT_DESKTOP|XDG_DATA_DIRS|XDG_GREETER_DATA_DIR|XDG_MENU_PREFIX|XDG_RUNTIME_DIR|XDG_SEAT|XDG_SEAT_PATH|XDG_SESSION_DESKTOP|XDG_SESSION_ID|XDG_SESSION_PATH|XDG_SESSION_TYPE|XDG_VTNR|XMODIFIERS)\\b",t={pattern:/(^(["']?)\w+\2)[ \t]+\S.*/,lookbehind:!0,alias:"punctuation",inside:null},r={bash:t,environment:{pattern:RegExp("\\$"+n),alias:"constant"},variable:[{pattern:/\$?\(\([\s\S]+?\)\)/,greedy:!0,inside:{variable:[{pattern:/(^\$\(\([\s\S]+)\)\)/,lookbehind:!0},/^\$\(\(/],number:/\b0x[\dA-Fa-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:[Ee]-?\d+)?/,operator:/--|\+\+|\*\*=?|<<=?|>>=?|&&|\|\||[=!+\-*/%<>^&|]=?|[?~:]/,punctuation:/\(\(?|\)\)?|,|;/}},{pattern:/\$\((?:\([^)]+\)|[^()])+\)|`[^`]+`/,greedy:!0,inside:{variable:/^\$\(|^`|\)$|`$/}},{pattern:/\$\{[^}]+\}/,greedy:!0,inside:{operator:/:[-=?+]?|[!\/]|##?|%%?|\^\^?|,,?/,punctuation:/[\[\]]/,environment:{pattern:RegExp("(\\{)"+n),lookbehind:!0,alias:"constant"}}},/\$(?:\w+|[#?*!@$])/],entity:/\\(?:[abceEfnrtv\\"]|O?[0-7]{1,3}|U[0-9a-fA-F]{8}|u[0-9a-fA-F]{4}|x[0-9a-fA-F]{1,2})/};e.languages.bash={shebang:{pattern:/^#!\s*\/.*/,alias:"important"},comment:{pattern:/(^|[^"{\\$])#.*/,lookbehind:!0},"function-name":[{pattern:/(\bfunction\s+)[\w-]+(?=(?:\s*\(?:\s*\))?\s*\{)/,lookbehind:!0,alias:"function"},{pattern:/\b[\w-]+(?=\s*\(\s*\)\s*\{)/,alias:"function"}],"for-or-select":{pattern:/(\b(?:for|select)\s+)\w+(?=\s+in\s)/,alias:"variable",lookbehind:!0},"assign-left":{pattern:/(^|[\s;|&]|[<>]\()\w+(?:\.\w+)*(?=\+?=)/,inside:{environment:{pattern:RegExp("(^|[\\s;|&]|[<>]\\()"+n),lookbehind:!0,alias:"constant"}},alias:"variable",lookbehind:!0},parameter:{pattern:/(^|\s)-{1,2}(?:\w+:[+-]?)?\w+(?:\.\w+)*(?=[=\s]|$)/,alias:"variable",lookbehind:!0},string:[{pattern:/((?:^|[^<])<<-?\s*)(\w+)\s[\s\S]*?(?:\r?\n|\r)\2/,lookbehind:!0,greedy:!0,inside:r},{pattern:/((?:^|[^<])<<-?\s*)(["'])(\w+)\2\s[\s\S]*?(?:\r?\n|\r)\3/,lookbehind:!0,greedy:!0,inside:{bash:t}},{pattern:/(^|[^\\](?:\\\\)*)"(?:\\[\s\S]|\$\([^)]+\)|\$(?!\()|`[^`]+`|[^"\\`$])*"/,lookbehind:!0,greedy:!0,inside:r},{pattern:/(^|[^$\\])'[^']*'/,lookbehind:!0,greedy:!0},{pattern:/\$'(?:[^'\\]|\\[\s\S])*'/,greedy:!0,inside:{entity:r.entity}}],environment:{pattern:RegExp("\\$?"+n),alias:"constant"},variable:r.variable,function:{pattern:/(^|[\s;|&]|[<>]\()(?:add|apropos|apt|apt-cache|apt-get|aptitude|aspell|automysqlbackup|awk|basename|bash|bc|bconsole|bg|bzip2|cal|cargo|cat|cfdisk|chgrp|chkconfig|chmod|chown|chroot|cksum|clear|cmp|column|comm|composer|cp|cron|crontab|csplit|curl|cut|date|dc|dd|ddrescue|debootstrap|df|diff|diff3|dig|dir|dircolors|dirname|dirs|dmesg|docker|docker-compose|du|egrep|eject|env|ethtool|expand|expect|expr|fdformat|fdisk|fg|fgrep|file|find|fmt|fold|format|free|fsck|ftp|fuser|gawk|git|gparted|grep|groupadd|groupdel|groupmod|groups|grub-mkconfig|gzip|halt|head|hg|history|host|hostname|htop|iconv|id|ifconfig|ifdown|ifup|import|install|ip|java|jobs|join|kill|killall|less|link|ln|locate|logname|logrotate|look|lpc|lpr|lprint|lprintd|lprintq|lprm|ls|lsof|lynx|make|man|mc|mdadm|mkconfig|mkdir|mke2fs|mkfifo|mkfs|mkisofs|mknod|mkswap|mmv|more|most|mount|mtools|mtr|mutt|mv|nano|nc|netstat|nice|nl|node|nohup|notify-send|npm|nslookup|op|open|parted|passwd|paste|pathchk|ping|pkill|pnpm|podman|podman-compose|popd|pr|printcap|printenv|ps|pushd|pv|quota|quotacheck|quotactl|ram|rar|rcp|reboot|remsync|rename|renice|rev|rm|rmdir|rpm|rsync|scp|screen|sdiff|sed|sendmail|seq|service|sftp|sh|shellcheck|shuf|shutdown|sleep|slocate|sort|split|ssh|stat|strace|su|sudo|sum|suspend|swapon|sync|sysctl|tac|tail|tar|tee|time|timeout|top|touch|tr|traceroute|tsort|tty|umount|uname|unexpand|uniq|units|unrar|unshar|unzip|update-grub|uptime|useradd|userdel|usermod|users|uudecode|uuencode|v|vcpkg|vdir|vi|vim|virsh|vmstat|wait|watch|wc|wget|whereis|which|who|whoami|write|xargs|xdg-open|yarn|yes|zenity|zip|zsh|zypper)(?=$|[)\s;|&])/,lookbehind:!0},keyword:{pattern:/(^|[\s;|&]|[<>]\()(?:case|do|done|elif|else|esac|fi|for|function|if|in|select|then|until|while)(?=$|[)\s;|&])/,lookbehind:!0},builtin:{pattern:/(^|[\s;|&]|[<>]\()(?:\.|:|alias|bind|break|builtin|caller|cd|command|continue|declare|echo|enable|eval|exec|exit|export|getopts|hash|help|let|local|logout|mapfile|printf|pwd|read|readarray|readonly|return|set|shift|shopt|source|test|times|trap|type|typeset|ulimit|umask|unalias|unset)(?=$|[)\s;|&])/,lookbehind:!0,alias:"class-name"},boolean:{pattern:/(^|[\s;|&]|[<>]\()(?:false|true)(?=$|[)\s;|&])/,lookbehind:!0},"file-descriptor":{pattern:/\B&\d\b/,alias:"important"},operator:{pattern:/\d?<>|>\||\+=|=[=~]?|!=?|<<[<-]?|[&\d]?>>|\d[<>]&?|[<>][&=]?|&[>&]?|\|[&|]?/,inside:{"file-descriptor":{pattern:/^\d/,alias:"important"}}},punctuation:/\$?\(\(?|\)\)?|\.\.|[{}[\];\\]/,number:{pattern:/(^|\s)(?:[1-9]\d*|0)(?:[.,]\d+)?\b/,lookbehind:!0}},t.inside=e.languages.bash;for(var a=["comment","function-name","for-or-select","assign-left","parameter","string","environment","function","keyword","builtin","boolean","file-descriptor","operator","punctuation","number"],s=r.variable[1].inside,p=0;p<a.length;p++)s[a[p]]=e.languages.bash[a[p]];e.languages.sh=e.languages.bash,e.languages.shell=e.languages.bash})(Prism);X`
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
`;function A(e,n="javascript"){const t=e.trim(),r=Ee.highlight(t,Ee.languages[n]||Ee.languages.javascript,n),a=document.createElement("pre");return a.className=It,a.innerHTML=r,a}const Lt=m`
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
`,Mt=m`
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
`,jt=m`
  flex: 1;
  font-size: 0.95rem;
  transition: all 0.15s;
`,Bt=m`
  flex: 1;
  font-size: 0.95rem;
  text-decoration: line-through;
  opacity: 0.45;
`,Ht=m`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  background: var(--surface);
  border-radius: var(--radius);
  padding: 4px;
  border: 1px solid var(--border);
`,Gt=m`
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
`,Ut=m`
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
`,qt=m`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 28px;
  border: 1px solid var(--border);
`,Ce=m`
  background: var(--surface);
  text-align: center;
  padding: 20px;
  span {
    display: block;
  }
`,Te=m`
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--mono);
  letter-spacing: -0.04em;
`,Re=m`
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,Ve={high:"var(--danger)",medium:"var(--accent)",low:"var(--success)"};let Zt=4;const ie=T([{id:1,text:"Build signal-based reactivity",done:!0,priority:"high"},{id:2,text:"Implement tagged template DOM engine",done:!0,priority:"high"},{id:3,text:"Add keyed list reconciliation",done:!1,priority:"medium"}]),Ne=T("all"),Qe=Me(()=>{const e=Ne(),n=ie();return e==="active"?n.filter(t=>!t.done):e==="done"?n.filter(t=>t.done):n}),me=Me(()=>{const e=ie();return{total:e.length,done:e.filter(n=>n.done).length,active:e.filter(n=>!n.done).length}});function Wt(e){const n=e(),t=()=>ie(a=>a.map(s=>s.id===n.id?{...s,done:!s.done}:s)),r=()=>ie(a=>a.filter(s=>s.id!==n.id));return z`<div class=${Mt}>
    <input
      type="checkbox"
      class=${Lt}
      checked=${n.done}
      onclick=${t}
    />
    <span class=${n.done?Bt:jt}
      >${n.text}</span
    >
    <span
      class=${at}
      style=${`background: ${Ve[n.priority]}20; color: ${Ve[n.priority]}`}
      >${n.priority}</span
    >
    <button
      class=${R(I,oe)}
      onclick=${r}
      style="padding: 4px 10px; font-size: 0.75rem;"
    >
      ✕
    </button>
  </div>`}function Yt(){const e=T(""),n=T("medium"),t=()=>{const r=e().trim();r&&(ie(a=>[...a,{id:Zt++,text:r,done:!1,priority:n()}]),e(""))};return z`<div style="display:flex;gap:8px;margin-bottom:24px;">
    <input
      class=${ye}
      placeholder="What needs doing?"
      value=${()=>e()}
      oninput=${r=>e(r.target.value)}
      onkeydown=${r=>{r.key==="Enter"&&t()}}
    />
    <select
      class=${De}
      onchange=${r=>n(r.target.value)}
    >
      <option value="low">Low</option>
      <option value="medium" selected>Med</option>
      <option value="high">High</option>
    </select>
    <button class=${R(I,xe)} onclick=${t}>Add</button>
  </div>`}function Xt(){return z`<div class=${Ht}>
    ${["all","active","done"].map(e=>z`<button
          class=${()=>Ne()===e?Ut:Gt}
          onclick=${()=>Ne(e)}
        >
          ${e[0].toUpperCase()+e.slice(1)}
          ${()=>{const n=me();return`(${e==="all"?n.total:e==="active"?n.active:n.done})`}}
        </button>`)}
  </div>`}function Kt(){return z`<div class=${K}>
    <h1 class=${J}>Tasks</h1>
    <p class=${V}>
      A fully reactive todo app — zero frameworks, zero build tools.
    </p>
    <div class=${qt}>
      <div class=${Ce}>
        <span class=${Te} style="color:var(--text)"
          >${()=>me().total}</span
        ><span class=${Re}>Total</span>
      </div>
      <div class=${Ce}>
        <span class=${Te} style="color:var(--accent)"
          >${()=>me().active}</span
        ><span class=${Re}>Active</span>
      </div>
      <div class=${Ce}>
        <span class=${Te} style="color:var(--success)"
          >${()=>me().done}</span
        ><span class=${Re}>Done</span>
      </div>
    </div>
    ${Yt()} ${Xt()}
    <div>
      ${nt(Qe,e=>e.id,e=>Wt(e))}
      ${()=>Qe().length===0?z`<div
              style="text-align:center;padding:48px 20px;color:var(--text-muted);font-style:italic;"
            >
              No tasks match this filter.
            </div>`:null}
    </div>
    <details>
      <summary class=${Be}>View source — signals, computed, each()</summary>
      ${A(`// Reactive state
const todos = signal([...]);
const filter = signal("all");
const filteredTodos = computed(() => {
  const f = filter();
  const l = todos();
  return f === "active" ? l.filter(t => !t.done)
       : f === "done"   ? l.filter(t => t.done)
       : l;
});
const stats = computed(() => {
  const l = todos();
  return {
    total: l.length,
    done: l.filter(t => t.done).length,
    active: l.filter(t => !t.done).length,
  };
});

// Keyed list rendering — DOM nodes reused by id
html\`<div>
  \${each(filteredTodos, t => t.id, (itemSig) => TodoItem(itemSig))}
</div>\`;

// Adding a todo — just push to the signal
function add() {
  todos(l => [...l, { id: nextId++, text: text().trim(), done: false, priority: priority() }]);
}

// TodoItem reads from itemSig — updates when that item changes
function TodoItem(itemSig) {
  const todo = itemSig();
  const toggle = () => todos(l => l.map(t =>
    t.id === todo.id ? { ...t, done: !t.done } : t
  ));
  return html\`<div>
    <input type="checkbox" checked=\${todo.done} onclick=\${toggle} />
    <span>\${todo.text}</span>
  </div>\`;
}`)}
    </details>
  </div>`}const Jt=m`
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
`,Vt=m`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`,Qt=m`
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
`,Le=T([]);function j(e){Le(n=>[`${performance.now().toFixed(1)}ms — ${e}`,...n.slice(0,19)])}let en=1;const et=["Alice","Bob","Carol","Dan","Eve","Frank","Grace","Hank","Iris","Jack","Kara","Leo","Mia","Nico","Olga","Pete"];function he(){return{id:en++,name:et[Math.floor(Math.random()*et.length)],score:Math.floor(Math.random()*100)}}const N=T(Array.from({length:8},he));function tn(e){const n=[...e];for(let t=n.length-1;t>0;t--){const r=Math.floor(Math.random()*(t+1));[n[t],n[r]]=[n[r],n[t]]}return n}function nn(e,n){return z`<div class=${Jt}>
    <span class="idx">${()=>n()}</span>
    <span class="name">${()=>e().name}</span>
    <span
      class="score"
      style=${()=>`color: ${e().score>70?"var(--success)":e().score>40?"var(--accent)":"var(--danger)"}`}
      >${()=>e().score}</span
    >
    <input
      class=${ye}
      style="width:80px;padding:6px 8px;font-size:0.8rem;"
      placeholder="type here…"
    />
    <button
      class=${R(I,oe)}
      style="padding:4px 8px;font-size:0.7rem;"
      onclick=${()=>N(t=>t.filter(r=>r.id!==e().id))}
    >
      ✕
    </button>
  </div>`}function rn(){return z`<div class=${K}>
    <h1 class=${J}>List Stress Test</h1>
    <p class=${V}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type
      in the inputs to verify DOM preservation.
    </p>

    <div class=${Vt}>
      <button
        class=${R(I,xe)}
        onclick=${()=>{N(tn),j("Shuffled")}}
      >
        Shuffle
      </button>
      <button
        class=${R(I,Pt)}
        onclick=${()=>{N(e=>[...e].reverse()),j("Reversed")}}
      >
        Reverse
      </button>
      <button
        class=${R(I,ze)}
        onclick=${()=>{N(e=>[...e,he()]),j("Added 1")}}
      >
        + Add 1
      </button>
      <button
        class=${R(I,ze)}
        onclick=${()=>{const e=Array.from({length:5},he);N(n=>[...n,...e]),j("Added 5")}}
      >
        + Add 5
      </button>
      <button
        class=${R(I,oe)}
        onclick=${()=>{N(e=>{if(!e.length)return e;const n=Math.floor(Math.random()*e.length);return e.filter((t,r)=>r!==n)}),j("Removed random")}}
      >
        - Remove random
      </button>
      <button
        class=${R(I,fe)}
        onclick=${()=>{N(e=>e.map(n=>({...n,score:Math.floor(Math.random()*100)}))),j("Randomized scores")}}
      >
        Randomize scores
      </button>
      <button
        class=${R(I,fe)}
        onclick=${()=>{N(e=>[...e].sort((n,t)=>n.name.localeCompare(t.name))),j("Sorted by name")}}
      >
        Sort A→Z
      </button>
      <button
        class=${R(I,fe)}
        onclick=${()=>{N(e=>[...e].sort((n,t)=>t.score-n.score)),j("Sorted by score")}}
      >
        Sort by score
      </button>
      <button
        class=${R(I,oe)}
        onclick=${()=>{N([]),j("Cleared all")}}
      >
        Clear
      </button>
      <button
        class=${R(I,xe)}
        onclick=${()=>{N(Array.from({length:50},he)),j("Reset to 50 items")}}
      >
        Reset 50
      </button>
    </div>

    <div
      style="display:flex;gap:8px;margin-bottom:16px;align-items:center;"
    >
      <span
        class=${at}
        style="background:var(--accent-dim);color:var(--accent);"
        >${()=>N().length} items</span
      >
      <span style="font-size:0.8rem;color:var(--text-muted);"
        >Type in any input, then shuffle — your text stays because each()
        reuses DOM nodes by key.</span
      >
    </div>

    <div style="margin-bottom: 24px;">
      ${nt(N,e=>e.id,nn)}
      ${()=>N().length===0?z`<div
              style="text-align:center;padding:32px;color:var(--text-muted);font-style:italic;"
            >
              List is empty. Add some items!
            </div>`:null}
    </div>

    <h3 style="font-size:0.9rem;font-weight:600;margin-bottom:8px;">
      Operation Log
    </h3>
    <div class=${Qt}>
      ${()=>Le().length===0?"No operations yet…":Le().join(`
`)}
    </div>
    <details>
      <summary class=${Be}>View source — each() keyed reconciliation</summary>
      ${A(`// each() reuses DOM nodes by key across mutations
const items = signal(Array.from({ length: 8 }, randItem));

// Render — each item gets a Signal<T> and ReadonlySignal<number>
html\`<div>
  \${each(items, item => item.id, (itemSig, indexSig) =>
    html\`<div>
      <span>\${() => indexSig()}</span>
      <span>\${() => itemSig().name}</span>
      <span>\${() => itemSig().score}</span>
      <input placeholder="type here…" />
    </div>\`
  )}
</div>\`;

// Mutations — DOM nodes with matching keys are reused, not recreated.
// Text typed into inputs persists across shuffle/reverse/sort.
items(shuffle);                              // reorder
items(l => [...l].reverse());                // reverse
items(l => [...l, randItem()]);              // append
items(l => l.filter(x => x.id !== target));  // remove
items(l => [...l].sort((a, b) =>             // sort
  a.name.localeCompare(b.name)
));`)}
    </details>
  </div>`}function an(){const e=tt({user:{name:"Ada Lovelace",settings:{theme:"dark",notifications:{email:!0,push:!1,frequency:"daily"}},scores:[95,87,92]}}),n=Me(()=>JSON.stringify(re(e),null,2)),t=m`
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
  `,r=m`
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
  `,a=m`
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
  `,s=m`
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
  `,p=m`
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
  `,l=m`
    border-color: var(--success);
    background: var(--success-dim);
    color: var(--success);
    & .icon {
      background: var(--success);
      color: var(--bg);
    }
  `,h=m`
    border-color: var(--accent);
    background: var(--accent-dim);
    color: var(--accent);
    & .icon {
      background: var(--accent);
      color: var(--bg);
    }
  `,y=m`
    border-color: var(--danger);
    background: var(--danger-dim);
    color: var(--danger);
    & .icon {
      background: var(--danger);
      color: var(--bg);
    }
  `,k=m`
    border-color: var(--info);
    background: var(--info-dim);
    color: var(--info);
    & .icon {
      background: var(--info);
      color: var(--bg);
    }
  `,x={success:l,warning:h,error:y,info:k},_={success:"✓",warning:"!",error:"✕",info:"i"},E={success:"All systems operational. Deployment completed.",warning:"High memory usage detected. Consider scaling.",error:"Connection lost. Retrying in 5 seconds…",info:"New version available. Update when ready."},P=m`
    border-radius: 24px !important;
    & .icon { border-radius: 12px; }
  `,w=m`
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.3);
  `,$=m`
    border-width: 3px;
    border-style: dashed;
  `,b=m`
    transform: scale(1.02);
  `,i=m`
    box-shadow:
      0 0 20px currentColor,
      0 0 40px currentColor;
    &:hover {
      box-shadow:
        0 0 30px currentColor,
        0 0 60px currentColor;
    }
  `,o=T("success"),d=T(!1),c=T(!1),u=T(!1),f=T(!1),v=T(!1),g=T(100),S=T(10),C=T(100),D=m`
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
  `,G=m`
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
  `,le=m`
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
  `;return z`<div class=${K}>
    <h1 class=${J}>Playground</h1>
    <p class=${V}>
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
              class=${ye}
              style="margin-top:4px;"
              value=${()=>e.user.name}
              oninput=${F=>{e.user.name=F.target.value}}
            />
          </label>
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.settings.theme
            <select
              class=${De}
              style="width:100%;margin-top:4px;"
              onchange=${F=>{e.user.settings.theme=F.target.value}}
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
              class=${De}
              style="width:100%;margin-top:4px;"
              onchange=${F=>{e.user.settings.notifications.frequency=F.target.value}}
            >
              <option value="daily" selected>daily</option>
              <option value="weekly">weekly</option>
              <option value="never">never</option>
            </select>
          </label>
          <div style="display:flex;gap:6px;margin-top:4px;">
            <button
              class=${R(I,ze)}
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${()=>{e.user.scores.push(Math.floor(Math.random()*100))}}
            >
              Push score
            </button>
            <button
              class=${R(I,oe)}
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
          class=${Fe}
          style="font-size:0.75rem;max-height:320px;overflow-y:auto;"
        >
          ${()=>n()}
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
          ${["success","warning","error","info"].map(F=>z`
              <button
                class=${()=>o()===F?R(I,xe):R(I,fe)}
                style="font-size:0.75rem;padding:6px 12px;flex:1;"
                onclick=${()=>o(F)}
              >
                ${F}
              </button>
            `)}
        </div>

        <div
          style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;"
        >
          <button
            class=${()=>d()?G:D}
            onclick=${()=>d(F=>!F)}
          >
            rounded
          </button>
          <button
            class=${()=>c()?G:D}
            onclick=${()=>c(F=>!F)}
          >
            shadow
          </button>
          <button
            class=${()=>u()?G:D}
            onclick=${()=>u(F=>!F)}
          >
            dashed
          </button>
          <button
            class=${()=>f()?G:D}
            onclick=${()=>f(F=>!F)}
          >
            scale
          </button>
          <button
            class=${()=>v()?G:D}
            onclick=${()=>v(F=>!F)}
          >
            glow
          </button>
        </div>

        <div
          class=${()=>R(p,x[o()],d()&&P,c()&&w,u()&&$,f()&&b,v()&&i)}
        >
          <div class="icon">${()=>_[o()]}</div>
          <div class="text">
            <div class="label">${()=>o()}</div>
            <div class="message">${()=>E[o()]}</div>
          </div>
        </div>

        <div
          class=${Fe}
          style="margin-top:12px;font-size:0.7rem;line-height:1.6;"
        >
          cx(statusBase,
          <strong
            >${()=>"status"+o()[0].toUpperCase()+o().slice(1)}</strong
          >${()=>d()?", propRounded":""}${()=>c()?", propShadow":""}${()=>u()?", propBorder":""}${()=>f()?", propScale":""}${()=>v()?", propGlow":""})
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
              class=${s}
              min="50"
              max="200"
              value=${()=>g()}
              oninput=${F=>g(+F.target.value)}
            />
            <span class=${Ae} style="min-width:38px;"
              >${()=>g()}%</span
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Radius</span>
            <input
              type="range"
              class=${s}
              min="0"
              max="50"
              value=${()=>S()}
              oninput=${F=>S(+F.target.value)}
            />
            <span class=${Ae} style="min-width:38px;"
              >${()=>S()}px</span
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Opacity</span>
            <input
              type="range"
              class=${s}
              min="10"
              max="100"
              value=${()=>C()}
              oninput=${F=>C(+F.target.value)}
            />
            <span class=${Ae} style="min-width:38px;"
              >${()=>C()}%</span
            >
          </label>
        </div>

        <div style="display:flex;justify-content:center;padding:20px 0;">
          <div
            class=${le}
            style=${()=>`height: ${g()}px; border-radius: ${S()}px; opacity: ${C()/100}; font-size: ${Math.max(10,g()*.14)}px;`}
          >
            ${()=>`${g()}% · ${S()}px · ${C()}%`}
          </div>
        </div>

        <div class=${Fe} style="font-size:0.7rem;line-height:1.6;">
          style=${"${"}() => ${"`"} height:
          <strong>${()=>g()}px</strong>; border-radius:
          <strong>${()=>S()}px</strong>; opacity:
          <strong>${()=>(C()/100).toFixed(2)}</strong>; ${"`"}}
        </div>
      </div>
    </div>

    <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
      CSS Stress Tests
    </h2>

    <div class=${t}>
      <div class="title">Complex Selectors Test</div>
      <div class="nested-box">
        <div class="inner">
          This is nested-box > inner (descendant combinator)
        </div>
      </div>
      <span class="tag green">Green Tag</span>
      <span class="tag yellow">Yellow Tag</span>
      <input
        class=${ye}
        style="margin-top:12px;width:200px;"
        placeholder="Focus me for :focus-within"
      />
    </div>

    <div class=${R(Z,r)}>
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

    <div class=${R(Z,a)}>
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
      <summary class=${Be}>View source — reactive(), css\`\`, cx()</summary>
      ${A(`// Deep reactive proxy — mutate normally, changes propagate
const state = reactive({
  user: {
    name: "Ada Lovelace",
    settings: {
      theme: "dark",
      notifications: { email: true, push: false, frequency: "daily" },
    },
    scores: [95, 87, 92],
  },
});

// Computed snapshot for display — auto-updates
const jsonView = computed(() => JSON.stringify(snapshot(state), null, 2));

// Direct mutation triggers effects
state.user.name = "Grace Hopper";
state.user.scores.push(99);

// Scoped CSS with nesting, pseudo-classes, @media
const card = css\`
  padding: 20px;
  border: 2px solid var(--border);
  &:hover { border-color: var(--accent); }
  & > .title { font-weight: 700; }
  @media (max-width: 600px) { padding: 12px; }
\`;

// cx() merges class names, skipping falsy values
const classes = cx(
  statusBase,
  statusMap[status()],
  rounded() && propRounded,
  shadow() && propShadow,
);`)}
    </details>
  </div>`}const sn=m`
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 10px;
`,on=m`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,ln=m`
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
`,cn=m`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--surface-2);
  padding: 3px 10px;
  border-radius: 20px;
`,dn=[{name:"signal.js",icon:"⚡",color:"var(--accent)",lines:"~90",desc:"signal, computed, effect, batch, untrack"},{name:"reactive.js",icon:"🔮",color:"#a78bfa",lines:"~130",desc:"Proxy-based deep reactivity, identity cache, array methods"},{name:"html.js",icon:"🧩",color:"#60a5fa",lines:"~210",desc:"Tagged templates → live DOM, keyed each() reconciliation"},{name:"component.js",icon:"📦",color:"var(--success)",lines:"~95",desc:"mount, onMount, onCleanup, provide/inject"},{name:"router.js",icon:"🧭",color:"#f472b6",lines:"~105",desc:"History-based SPA routing, reactive params"},{name:"css.js",icon:"🎨",color:"#fb923c",lines:"~130",desc:"Scoped CSS-in-JS with deep nesting, @media, combinators"}];function un(){return z`<div class=${K}>
    <h1 class=${J}>Architecture</h1>
    <p class=${V}>
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
      ${dn.map(e=>z`<div class=${sn}>
            <div
              class=${on}
              style=${`background: ${e.color}20; color: ${e.color};`}
            >
              ${e.icon}
            </div>
            <div class=${ln}>
              <strong>${e.name}</strong><span>${e.desc}</span>
            </div>
            <span class=${cn}>${e.lines}</span>
          </div>`)}
    </div>
  </div>`}function pn(){return z`<div class=${K}>
    <h1 class=${J}>Docs</h1>
    <p class=${V}>
      API reference for each module. ~760 lines total, zero dependencies.
    </p>

    <!-- Getting Started -->
    <div class=${q}>
      <h2>Getting Started</h2>
      <p>
        vanillakit is a collection of standalone ES modules. No build step required —
        import from source and go. Works with any bundler (Vite, esbuild, etc.) or direct
        <code>&lt;script type="module"&gt;</code>.
      </p>

      <h3>Install</h3>
      ${A("npm install vanillakit","bash")}

      <h3>Quick setup</h3>
      <p>Create an <code>index.html</code> and a module entry point:</p>
      ${A(`<!doctype html>
<html>
  <body>
    <div id="app"></div>
    <script type="module" src="./app.js"><\/script>
  </body>
</html>`,"markup")}

      ${A(`// app.js
import { signal, html, css, globalCss } from "vanillakit";

globalCss\`
  body { margin: 0; font-family: system-ui; background: #111; color: #eee; }
\`;

const count = signal(0);

const btn = css\`
  padding: 8px 20px;
  border: none;
  border-radius: 6px;
  background: gold;
  color: #111;
  font-weight: 600;
  cursor: pointer;
\`;

const app = html\`
  <div style="padding: 40px; text-align: center;">
    <h1>Count: \${count}</h1>
    <button class=\${btn} onclick=\${() => count(n => n + 1)}>
      Increment
    </button>
  </div>
\`;

document.getElementById("app").append(app);`)}

      <h3>Project structure</h3>
      <p>There's no required structure. The library is five files:</p>
      ${A(`src/
  signal.js    — signal, computed, effect, batch, untrack
  reactive.js  — reactive, toRaw, isReactive, snapshot
  html.js      — html, each
  css.js       — css, keyframes, globalCss, cx
  router.js    — createRouter, navigate, navLink, currentPath, routeParams
  index.js     — re-exports everything`,"bash")}

      <p>Import what you need. Each module (except <code>reactive.js</code> and <code>html.js</code>) only depends on <code>signal.js</code>.</p>
      <hr />
    </div>

    <!-- Examples -->
    <div class=${q}>
      <h2>Examples</h2>

      <h3>Counter</h3>
      <p>The simplest possible app — a signal and a button.</p>
      ${A(`import { signal, html } from "vanillakit";

const count = signal(0);

document.body.append(html\`
  <button onclick=\${() => count(n => n + 1)}>
    Clicked \${count} times
  </button>
\`);`)}

      <h3>Two-way binding</h3>
      <p>Bind an input to a signal. The heading updates as you type.</p>
      ${A(`import { signal, html } from "vanillakit";

const name = signal("world");

document.body.append(html\`
  <div>
    <h1>Hello, \${name}!</h1>
    <input
      value=\${() => name()}
      oninput=\${(e) => name(e.target.value)}
    />
  </div>
\`);`)}

      <h3>Derived state</h3>
      <p><code>computed</code> derives values. <code>batch</code> groups writes so effects fire once.</p>
      ${A(`import { signal, computed, effect, batch } from "vanillakit";

const price    = signal(10);
const quantity = signal(3);
const total    = computed(() => price() * quantity());

effect(() => console.log("Total: $" + total()));
// logs: Total: $30

batch(() => {
  price(20);
  quantity(5);
});
// logs: Total: $100 (once)`)}

      <h3>Reactive object</h3>
      <p>Deeply nested mutations tracked automatically via Proxy.</p>
      ${A(`import { reactive, snapshot, effect } from "vanillakit";

const state = reactive({
  todos: [
    { text: "Learn signals", done: true },
    { text: "Build an app",  done: false },
  ],
});

effect(() => console.log(JSON.stringify(snapshot(state), null, 2)));

state.todos.push({ text: "Ship it", done: false });
state.todos[0].done = false;`)}

      <h3>Keyed list</h3>
      <p><code>each()</code> reconciles DOM nodes by key. Nodes persist across reorders — input state, focus, etc. are preserved.</p>
      ${A(`import { signal, each, html } from "vanillakit";

const items = signal([
  { id: 1, label: "Alpha" },
  { id: 2, label: "Bravo" },
  { id: 3, label: "Charlie" },
]);

document.body.append(html\`
  <ul>
    \${each(
      items,
      (item) => item.id,
      (itemSig, indexSig) => html\`
        <li>#\${indexSig} — \${() => itemSig().label}</li>
      \`,
    )}
  </ul>
  <button onclick=\${() => items(l => [...l].reverse())}>
    Reverse
  </button>
\`);`)}

      <h3>Scoped styles + routing</h3>
      <p>Full mini-app with CSS-in-JS and hash routing.</p>
      ${A('import { html, css, globalCss, createRouter, navLink } from "vanillakit";\n\nglobalCss`body { margin: 0; font-family: system-ui; }`;\n\nconst page = css`padding: 24px;`;\nconst active = css`color: gold; font-weight: 700;`;\nconst base = css`color: gray; text-decoration: none;`;\n\nconst Router = createRouter({\n  "/":      () => html`<div class=${page}><h1>Home</h1></div>`,\n  "/about": () => html`<div class=${page}><h1>About</h1></div>`,\n  "*":      () => html`<div class=${page}><h1>404</h1></div>`,\n});\n\ndocument.body.append(html`\n  <nav>\n    ${navLink("/", "Home", active, base)}\n    ${navLink("/about", "About", active, base)}\n  </nav>\n  ${Router()}\n`);')}
      <hr />
    </div>

    <!-- signal.js -->
    <div class=${q}>
      <h2>signal.js</h2>
      <p>Fine-grained reactivity primitives. Every other module builds on this.</p>

      <h3>signal(initial)</h3>
      <p>Creates a read/write signal. Call with no args to read (and track), call with a value to write.</p>
      ${A(`
import { signal } from "vanillakit";

const count = signal(0);
count();           // read → 0
count(5);          // write → 5
count(n => n + 1); // update via function → 6
count.peek();      // read without tracking
`)}

      <h3>computed(fn)</h3>
      <p>Derives a read-only signal from other signals. Re-evaluates only when dependencies change.</p>
      ${A(`
import { signal, computed } from "vanillakit";

const a = signal(2);
const b = signal(3);
const sum = computed(() => a() + b());

sum(); // 5
a(10);
sum(); // 13
`)}

      <h3>effect(fn)</h3>
      <p>Runs a side effect whenever its dependencies change. Returns a dispose function.</p>
      ${A(`
import { signal, effect } from "vanillakit";

const name = signal("world");
const dispose = effect(() => {
  console.log("Hello, " + name() + "!");
});
// logs: Hello, world!

name("vanillakit");
// logs: Hello, vanillakit!

dispose(); // stops tracking
`)}

      <h3>batch(fn)</h3>
      <p>Groups multiple signal writes — effects run once at the end, not after each write.</p>
      ${A(`
import { signal, effect, batch } from "vanillakit";

const a = signal(1);
const b = signal(2);
effect(() => console.log(a() + b()));
// logs: 3

batch(() => {
  a(10);
  b(20);
});
// logs: 30 (once, not twice)
`)}

      <h3>untrack(fn)</h3>
      <p>Reads signals inside <code>fn</code> without creating a dependency.</p>
      ${A(`
import { signal, effect, untrack } from "vanillakit";

const a = signal(1);
const b = signal(2);

effect(() => {
  // tracks a, ignores b
  console.log(a() + untrack(() => b()));
});

b(99); // effect does NOT re-run
a(10); // effect re-runs, reads b's current value
`)}
      <hr />
    </div>

    <!-- reactive.js -->
    <div class=${q}>
      <h2>reactive.js</h2>
      <p>Deep reactive proxies backed by signals. Mutate normally — changes propagate automatically.</p>

      <h3>reactive(target)</h3>
      <p>Wraps a plain object (or array) in a deep reactive proxy. Nested objects are wrapped lazily.</p>
      ${A(`
import { reactive, effect } from "vanillakit";

const state = reactive({
  user: { name: "Ada", scores: [95, 87] },
});

effect(() => console.log(state.user.name));
// logs: Ada

state.user.name = "Grace";
// logs: Grace

state.user.scores.push(92);
// tracked — any effect reading scores will re-run
`)}

      <h3>snapshot(obj)</h3>
      <p>Returns a deep plain-object copy of a reactive proxy. Useful for serialization or debugging.</p>
      ${A(`
import { reactive, snapshot } from "vanillakit";

const state = reactive({ x: 1, nested: { y: 2 } });
const plain = snapshot(state);
// { x: 1, nested: { y: 2 } } — no proxies
`)}

      <h3>toRaw(obj)</h3>
      <p>Returns the underlying raw object from a reactive proxy.</p>

      <h3>isReactive(obj)</h3>
      <p>Returns <code>true</code> if the object is a reactive proxy.</p>
      <hr />
    </div>

    <!-- html.js -->
    <div class=${q}>
      <h2>html.js</h2>
      <p>Tagged template that produces live DOM nodes with reactive bindings. No virtual DOM — updates are surgical.</p>

      <h3>html\`...\`</h3>
      <p>Interpolations can be static values, signals, or functions. Functions are wrapped in effects and update their DOM node automatically.</p>
      ${A(`
import { signal, html } from "vanillakit";

const name = signal("world");

const el = html\`
  <div>
    <h1>Hello, \${name}!</h1>
    <input
      value=\${() => name()}
      oninput=\${(e) => name(e.target.value)}
    />
  </div>
\`;

document.body.append(el);
`)}

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
      ${A(`
import { signal, each, html } from "vanillakit";

const items = signal([
  { id: 1, text: "first" },
  { id: 2, text: "second" },
]);

const list = html\`
  <ul>
    \${each(
      items,
      (item) => item.id,
      (itemSig) => html\`<li>\${() => itemSig().text}</li>\`,
    )}
  </ul>
\`;
`)}
      <hr />
    </div>

    <!-- css.js -->
    <div class=${q}>
      <h2>css.js</h2>
      <p>Scoped CSS-in-JS using <code>CSSStyleSheet</code>. No style tags injected into the DOM. Supports nesting, <code>@media</code>, <code>@keyframes</code>, and combinators.</p>

      <h3>css\`...\`</h3>
      <p>Returns a unique class name. Styles are scoped — the template body is compiled with <code>&amp;</code> replaced by the generated selector.</p>
      ${A(`
import { css } from "vanillakit";

const card = css\`
  padding: 16px;
  background: #1a1a1a;
  border-radius: 8px;

  &:hover {
    border-color: gold;
  }

  & .title {
    font-weight: 700;
  }

  @media (max-width: 600px) {
    padding: 8px;
  }
\`;
// card = "v-0" (unique class name)
`)}

      <h3>keyframes\`...\`</h3>
      <p>Creates a scoped <code>@keyframes</code> rule, returns the generated animation name.</p>
      ${A(`
import { css, keyframes } from "vanillakit";

const spin = keyframes\`
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
\`;

const spinner = css\`
  animation: \${spin} 1s linear infinite;
\`;
`)}

      <h3>globalCss\`...\`</h3>
      <p>Injects unscoped CSS rules. <code>@import url(...)</code> lines are converted to <code>&lt;link&gt;</code> tags.</p>
      ${A(`
import { globalCss } from "vanillakit";

globalCss\`
  @import url('https://fonts.googleapis.com/css2?family=Inter&display=swap')
\`;

globalCss\`
  *, *::before, *::after { box-sizing: border-box; }
  body { margin: 0; font-family: 'Inter', sans-serif; }
\`;
`)}

      <h3>cx(...classes)</h3>
      <p>Joins class names, filtering out falsy values. Handy for conditional styling.</p>
      ${A(`
import { css, cx } from "vanillakit";

const base = css\`padding: 8px;\`;
const active = css\`color: gold;\`;

el.className = cx(base, isActive && active, null, undefined);
// falsy values are skipped
`)}
      <hr />
    </div>

    <!-- router.js -->
    <div class=${q}>
      <h2>router.js</h2>
      <p>Hash-based client-side router. Routes are plain functions that return DOM nodes.</p>

      <h3>createRouter(routeMap)</h3>
      <p>Takes an object mapping path patterns to handler functions. Returns a function that renders the current route into a container div. Supports <code>:param</code> segments and a <code>*</code> catch-all.</p>
      ${A(`
import { createRouter, html } from "vanillakit";

const Router = createRouter({
  "/":         () => html\`<h1>Home</h1>\`,
  "/user/:id": () => html\`<h1>User page</h1>\`,
  "*":         () => html\`<h1>404</h1>\`,
});

document.body.append(Router());
`)}

      <h3>navigate(path)</h3>
      <p>Navigates to a hash path.</p>
      ${A(`
import { navigate } from "vanillakit";

navigate("/user/42"); // sets window.location.hash
`)}

      <h3>currentPath</h3>
      <p>A signal holding the current hash path (without the <code>#</code>). Updates on <code>hashchange</code>.</p>

      <h3>routeParams</h3>
      <p>A signal holding the extracted <code>:param</code> values from the current route as a <code>Record&lt;string, string&gt;</code>.</p>

      <h3>navLink(path, text, activeClass, baseClass)</h3>
      <p>Creates an <code>&lt;a&gt;</code> element that swaps between <code>activeClass</code> and <code>baseClass</code> reactively based on the current path.</p>
      ${A(`
import { navLink, css } from "vanillakit";

const active = css\`color: gold; font-weight: 700;\`;
const base   = css\`color: gray;\`;

document.body.append(navLink("/about", "About", active, base));
`)}
    </div>
  </div>`}const gn=_t({"/":Kt,"/stress":rn,"/playground":an,"/docs":pn,"/about":un,"*":()=>z`<div class=${K}>
      <h1 class=${J}>404</h1>
      <p class=${V}>Not found.</p>
    </div>`});function fn(){return z`
    <header class=${Et}>
      <span class=${Ct}>vanillakit_</span>
      <nav class=${Tt}>
        ${ee("/","Tasks",ne,te)}
        ${ee("/stress","List Stress",ne,te)}
        ${ee("/playground","Playground",ne,te)}
        ${ee("/docs","Docs",ne,te)}
        ${ee("/about","About",ne,te)}
      </nav>
    </header>
    <main>${gn()}</main>
    <footer
      style="text-align:center;padding:48px 0 32px;color:var(--text-muted);font-size:0.78rem;letter-spacing:0.03em;"
    >
      Built with <span style="color:var(--accent);">vanillakit</span> —
      zero deps, ~760 lines of JS
    </footer>
  `}window.location.hash||(window.location.hash="/");document.getElementById("app").append(fn());
