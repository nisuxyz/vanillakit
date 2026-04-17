(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();let N=null,ee=0;const me=new Set;function m(e){let t=e;const o=new Set;function s(){if(arguments.length===0)return N&&(o.add(N),N._deps.add(o)),t;const n=typeof arguments[0]=="function"?arguments[0](t):arguments[0];if(Object.is(n,t))return t;if(t=n,ee>0)for(const r of o)me.add(r);else for(const r of[...o])r._run();return t}return s.peek=()=>t,s}function $e(e){const t=m(void 0);D(()=>t(e()));const o=()=>t();return o.peek=t.peek,o}function D(e){const t={_fn:e,_deps:new Set,_disposed:!1,_run(){if(t._disposed)return;for(const s of t._deps)s.delete(t);t._deps.clear();const o=N;N=t;try{e()}finally{N=o}}};return t._run(),()=>{t._disposed=!0;for(const o of t._deps)o.delete(t);t._deps.clear()}}function Ie(e){ee++;try{return e()}finally{if(ee--,ee===0){const t=[...me];me.clear();for(const o of t)o._run()}}}function Ee(e){const t=N;N=null;try{return e()}finally{N=t}}const J=Symbol("reactive"),C=Symbol("raw"),ce=new WeakMap,ke=new Set([J,C,Symbol.toPrimitive,Symbol.toStringTag,Symbol.iterator,Symbol.asyncIterator,Symbol.isConcatSpreadable,"__proto__","constructor","prototype","toJSON"]),Pe=new Set(["push","pop","shift","unshift","splice","sort","reverse","fill","copyWithin"]),Be=new Set(["indexOf","lastIndexOf","includes"]);function ge(e){return e==null||typeof e!="object"||e instanceof Date||e instanceof RegExp||e instanceof Error||e instanceof Node||e instanceof Map||e instanceof Set?e:Me(e)}function De(e,t){for(let o=0;o<e.length;o++){const s=String(o);t.has(s)&&t.get(s)(ge(e[o]))}t.has("length")&&t.get("length")(e.length)}function Me(e){if(e==null||typeof e!="object"||e[J])return e;if(ce.has(e))return ce.get(e);const t=new Map;function o(n){return t.has(n)||t.set(n,m(ge(e[n]))),t.get(n)}const s=new Proxy(e,{get(n,r,i){if(r===J)return!0;if(r===C)return n;if(typeof r=="symbol"&&ke.has(r)||ke.has(r))return Reflect.get(n,r,i);if(Array.isArray(n)&&typeof r=="string"){if(Pe.has(r))return((...c)=>{let l;return Ie(()=>{const p=c.map(f=>f&&f[C]?f[C]:f);l=Array.prototype[r].apply(n,p),De(n,t)}),l});if(Be.has(r))return((...c)=>{o("length")();const l=c[0]&&c[0][C]?c[0][C]:c[0];return Array.prototype[r].apply(n,[l,...c.slice(1)])})}return o(r)()},set(n,r,i){const c=i&&i[C]?i[C]:i;return n[r]=c,t.has(r)&&t.get(r)(ge(c)),Array.isArray(n)&&t.has("length")&&t.get("length")(n.length),!0},deleteProperty(n,r){return delete n[r],t.has(r)&&(t.get(r)(void 0),t.delete(r)),!0},has(n,r){return r===J||r===C?!0:(typeof r=="string"&&o(r)(),r in n)},ownKeys(n){return Array.isArray(n)&&o("length")(),Reflect.ownKeys(n)},getPrototypeOf(n){return Reflect.getPrototypeOf(n)},getOwnPropertyDescriptor(n,r){return Reflect.getOwnPropertyDescriptor(n,r)}});return ce.set(e,s),s}function Fe(e){return e!=null&&e[J]===!0}function j(e){if(e==null||typeof e!="object")return e;if(Fe(e)){const o=e[C];if(Array.isArray(o)){const n=e.length,r=[];for(let i=0;i<n;i++)r.push(j(e[i]));return r}const s={};for(const n of Object.keys(o))s[n]=j(e[n]);return s}if(Array.isArray(e))return e.map(j);const t={};for(const o of Object.keys(e))t[o]=j(e[o]);return t}let We=0;const je="data-v-";function y(e,...t){const o=We++;let s="";const n=[];for(let d=0;d<e.length;d++)if(s+=e[d],d<t.length)if(He(s)){const x=s.match(/(\S+)\s*=\s*["']?$/);if(x){const v=x[1],$=`${je}${o}-${d}`;s=s.slice(0,-x[0].length),s+=`${$}="" `,n.push({index:d,attrName:v,elemMarker:$})}else s+=`v${o}_${d}`}else s+=`<!--v${o}-${d}-->`;const r=document.createElement("template");r.innerHTML=s;const i=r.content,c=[];for(const{index:d,attrName:x,elemMarker:v}of n){const $=i.querySelector(`[${v}]`);$&&($.removeAttribute(v),Je($,x,t[d],c))}const l=document.createTreeWalker(i,NodeFilter.SHOW_COMMENT),p=[];for(;l.nextNode();){const d=l.currentNode;d.data.startsWith(`v${o}-`)&&p.push({node:d,index:parseInt(d.data.slice(`v${o}-`.length))})}for(const{node:d,index:x}of p)Ke(d,t[x],c);i.__v_dispose=()=>{for(const d of c)d();c.length=0};const f=[...i.childNodes];return f.length>0&&(f[0].__v_disposers||(f[0].__v_disposers=[])).push(i.__v_dispose),i.childNodes.length===1?i.childNodes[0]:i}function He(e){for(let t=e.length-1;t>=0;t--){if(e[t]===">")return!1;if(e[t]==="<")return!0}return!1}function Je(e,t,o,s){if(t.startsWith("on")){e.addEventListener(t.slice(2).toLowerCase(),typeof o=="function"?o:()=>{});return}if(t==="ref"&&typeof o=="function"){o(e);return}if(typeof o=="function"){s.push(D(()=>Se(e,t,o())));return}Se(e,t,o)}function Se(e,t,o){t==="class"||t==="className"?e.className=o??"":t==="style"&&typeof o=="object"?Object.assign(e.style,o):t==="style"&&typeof o=="string"?e.setAttribute("style",o):t==="checked"?e.checked=!!o:t==="value"&&"value"in e?e.value=o??"":t==="disabled"||t==="readonly"||t==="hidden"?o?e.setAttribute(t,""):e.removeAttribute(t):o===!1||o==null?e.removeAttribute(t):e.setAttribute(t,o===!0?"":String(o))}function Ke(e,t,o){if(t!=null&&t.__v_each){o.push(qe(e,t));return}if(typeof t=="function"){let s=null;o.push(D(()=>{s=ze(e,s,t())}));return}ze(e,null,t)}function ze(e,t,o){const s=e.parentNode;if(!s)return t;if(t){const r=Array.isArray(t)?t:[t];for(const i of r)i.parentNode&&(re(i),i.remove())}if(o==null||o===!1||o===!0)return null;if(Array.isArray(o)){const r=document.createDocumentFragment(),i=[];for(const c of o.flat(1/0)){const l=_e(c);l&&(r.append(l),i.push(l))}return s.insertBefore(r,e),i}const n=_e(o);return n&&s.insertBefore(n,e),n}function _e(e){return e==null||e===!1||e===!0?null:e instanceof Node?e:document.createTextNode(String(e))}function re(e){if(e.__v_disposers){for(const t of e.__v_disposers)t();e.__v_disposers=null}if(e.childNodes)for(const t of e.childNodes)re(t)}function Oe(e,t,o){return{__v_each:!0,listFn:e,keyFn:t,renderFn:o}}function qe(e,{listFn:t,keyFn:o,renderFn:s}){var c;const n=document.createComment("/each");(c=e.parentNode)==null||c.insertBefore(n,e.nextSibling);const r=new Map,i=D(()=>{var $;const l=t(),p=Array.isArray(l)?l:[],f=e.parentNode;if(!f)return;const d=p.map(o),x=new Set(d);for(const[S,M]of r)if(!x.has(S)){for(const g of M.disposers)g();for(const g of M.nodes)re(g),g.remove();r.delete(S)}let v=e.nextSibling;for(let S=0;S<p.length;S++){const M=d[S];let g=r.get(M);if(g){if(g.itemSig(p[S]),g.indexSig(S),g.nodes.length>0&&g.nodes[0]!==v)for(const E of g.nodes)f.insertBefore(E,v);v=g.nodes.length>0?g.nodes[g.nodes.length-1].nextSibling:v}else{const E=m(p[S]),z=m(S),O=[];let w;const R=Ee(()=>(w=s(E,z),(w==null?void 0:w.__v_dispose)||null)),L=w instanceof DocumentFragment?[...w.childNodes]:[w instanceof Node?w:document.createTextNode(String(w))];R&&O.push(R),g={nodes:L,disposers:O,itemSig:E,indexSig:z},r.set(M,g);const T=document.createDocumentFragment();for(const A of L)T.append(A);f.insertBefore(T,v),v=(($=g.nodes[g.nodes.length-1])==null?void 0:$.nextSibling)??v}}});return()=>{i();for(const[,l]of r){for(const p of l.disposers)p();for(const p of l.nodes)re(p),p.remove()}r.clear(),n.parentNode&&n.remove()}}let Ge=0;const he=new CSSStyleSheet;document.adoptedStyleSheets=[...document.adoptedStyleSheets,he];function Re(){return"v-"+(Ge++).toString(36)}function we(e){for(const t of e){const o=t.trim();if(o)try{he.insertRule(o,he.cssRules.length)}catch(s){console.warn("[css] Invalid rule:",s.message,"→",o.slice(0,120))}}}function a(e,...t){let o="";for(let n=0;n<e.length;n++)o+=e[n],n<t.length&&(o+=t[n]);const s=Re();return we(Ve(o,`.${s}`)),s}function Ye(e,...t){let o="";for(let n=0;n<e.length;n++)o+=e[n],n<t.length&&(o+=t[n]);const s=Re();return we([`@keyframes ${s} { ${o} }`]),s}function G(e,...t){let o="";for(let r=0;r<e.length;r++)o+=e[r],r<t.length&&(o+=t[r]);const s=o.split(`
`),n=[];for(const r of s){const i=r.trim();if(i.startsWith("@import ")){const c=i.match(/@import\s+url\(\s*['"]?([^'")\s]+)['"]?\s*\)/)||i.match(/@import\s+['"]([^'"]+)['"]/);if(c){const l=document.createElement("link");l.rel="stylesheet",l.href=c[1],document.head.appendChild(l)}}else n.push(r)}we(Ue(n.join(`
`)))}function h(...e){return e.filter(Boolean).join(" ")}function Ue(e){const t=[];let o=0,s="",n=!1,r="";for(let i=0;i<e.length;i++){const c=e[i];if(n){s+=c,c===r&&e[i-1]!=="\\"&&(n=!1);continue}if(c==='"'||c==="'"){n=!0,r=c,s+=c;continue}c==="{"?(o++,s+=c):c==="}"?(o--,s+=c,o===0&&(s.trim()&&t.push(s.trim()),s="")):s+=c}return t}function Ve(e,t){const o=Ze(e),s=[];return H(o,t,s),s}function Ze(e){const t={declarations:"",children:[],selector:""},o=[t];let s="",n=!1,r="";for(let c=0;c<e.length;c++){const l=e[c];if(n){s+=l,l===r&&e[c-1]!=="\\"&&(n=!1);continue}if(l==='"'||l==="'"){n=!0,r=l,s+=l;continue}if(l==="{"){const p=s.trim();s="";const f=p.lastIndexOf(";");let d;if(f!==-1){const v=p.slice(0,f+1).trim();if(v){const $=o[o.length-1];$.declarations+=($.declarations?" ":"")+v}d=p.slice(f+1).trim()}else d=p;const x={selector:d,declarations:"",children:[]};o[o.length-1].children.push(x),o.push(x)}else if(l==="}"){const p=s.trim();if(p){const f=o[o.length-1];f.declarations+=(f.declarations?" ":"")+p}s="",o.pop()}else s+=l}const i=s.trim();return i&&(t.declarations+=(t.declarations?" ":"")+i),t}function H(e,t,o){e.declarations&&o.push(`${t} { ${e.declarations} }`);for(const s of e.children){const n=s.selector;if(n)if(/^@(media|supports|container|layer)\b/.test(n)){const r=[];s.declarations&&r.push(`${t} { ${s.declarations} }`);for(const i of s.children)H(i,t,r);r.length&&o.push(`${n} { ${r.join(" ")} }`)}else if(n.includes("&")){const r=n.split(",").map(i=>i.trim().replace(/&/g,t)).join(", ");s.declarations&&o.push(`${r} { ${s.declarations} }`);for(const i of s.children)H(i,r,o)}else{const r=`${t} ${n}`;s.declarations&&o.push(`${r} { ${s.declarations} }`);for(const i of s.children)H(i,r,o)}else{s.declarations&&o.push(`${t} { ${s.declarations} }`);for(const r of s.children)H(r,t,o)}}}const se=m(window.location.hash.slice(1)||"/"),Qe=m({});window.addEventListener("hashchange",()=>{se(window.location.hash.slice(1)||"/")});function Xe(e){window.location.hash=e}function et(e){const t=Object.entries(e).sort((o,s)=>o[0]==="*"?1:s[0]==="*"?-1:s[0].split("/").length-o[0].split("/").length);return()=>{const o=document.createElement("div");return D(()=>{const s=se();let n=null;for(const[r,i]of t){const{regex:c,keys:l}=(()=>{if(r==="*")return{regex:/.*/,keys:[]};const f=[],d=r.replace(/:([^/]+)/g,(x,v)=>(f.push(v),"([^/]+)"));return{regex:new RegExp(`^${d}$`),keys:f}})(),p=s.match(c);if(p){const f={};l.forEach((d,x)=>{f[d]=decodeURIComponent(p[x+1])}),n={handler:i,params:f};break}}if(Qe(n?n.params:{}),o.innerHTML="",n){const r=n.handler();r instanceof Node&&o.append(r)}}),o}}function Z(e,t,o,s){const n=document.createElement("a");return n.href="#"+e,n.textContent=t,D(()=>{n.className=(e==="/"?se()==="/":se().startsWith(e))?o:s}),n.addEventListener("click",r=>{r.preventDefault(),Xe(e)}),n}G`
  @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700&family=JetBrains+Mono:wght@400;500&display=swap')
`;G`
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
`;G`
  :root {
    --bg: #0c0c0e; --surface: #16161a; --surface-2: #1e1e24; --surface-3: #26262e;
    --border: #2a2a35; --text: #e8e6e3; --text-muted: #8b8a8e;
    --accent: #e8c547; --accent-dim: #e8c54730;
    --danger: #e85454; --danger-dim: #e8545420;
    --success: #54e8a0; --success-dim: #54e8a020;
    --info: #5478e8; --info-dim: #5478e820;
    --radius: 10px; --font: 'DM Sans', system-ui, sans-serif; --mono: 'JetBrains Mono', monospace;
  }
`;G`
  body { background: var(--bg); color: var(--text); font-family: var(--font); line-height: 1.6; min-height: 100vh; }
`;G`
  #app { max-width: 820px; margin: 0 auto; padding: 0 24px; }
`;const Q=a`
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
`,X=a`
  color: var(--accent);
  text-decoration: none;
  font-weight: 600;
  font-size: 0.85rem;
  padding: 6px 12px;
  border-radius: 8px;
  background: var(--accent-dim);
  letter-spacing: 0.02em;
`,tt=a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 28px 0;
  border-bottom: 1px solid var(--border);
  margin-bottom: 36px;
`,ot=a`
  font-weight: 700;
  font-size: 1.15rem;
  letter-spacing: -0.04em;
  color: var(--accent);
  font-family: var(--mono);
`,nt=a`
  display: flex;
  gap: 4px;
`,rt=Ye`from { opacity: 0; transform: translateY(8px); } to { opacity: 1; transform: translateY(0); }`,Y=a`
  animation: ${rt} 0.25s ease-out;
`,U=a`
  font-size: 1.7rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  margin-bottom: 8px;
`,V=a`
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 32px;
`,I=a`
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  margin-bottom: 12px;
`,b=a`
  font-family: var(--font);
  font-size: 0.85rem;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 8px 16px;
  cursor: pointer;
  transition: all 0.12s ease;
  letter-spacing: 0.01em;
`,ie=a`
  background: var(--accent);
  color: var(--bg);
  &:hover {
    filter: brightness(1.1);
    transform: translateY(-1px);
  }
  &:active {
    transform: translateY(0);
  }
`,te=a`
  background: transparent;
  color: var(--text-muted);
  border: 1px solid var(--border);
  &:hover {
    color: var(--text);
    border-color: var(--text-muted);
  }
`,K=a`
  background: var(--danger-dim);
  color: var(--danger);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--danger);
  }
`,st=a`
  background: var(--info-dim);
  color: var(--info);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--info);
  }
`,ve=a`
  background: var(--success-dim);
  color: var(--success);
  border: 1px solid transparent;
  &:hover {
    border-color: var(--success);
  }
`,ae=a`
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
`,xe=a`
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
`,Le=a`
  font-size: 0.7rem;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 20px;
  text-transform: uppercase;
  letter-spacing: 0.06em;
`,le=a`
  font-family: var(--mono);
  font-size: 0.8rem;
`,de=a`
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
`,it=a`
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
`,at=a`
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
`,ct=a`
  flex: 1;
  font-size: 0.95rem;
  transition: all 0.15s;
`,lt=a`
  flex: 1;
  font-size: 0.95rem;
  text-decoration: line-through;
  opacity: 0.45;
`,dt=a`
  display: flex;
  gap: 4px;
  margin-bottom: 20px;
  background: var(--surface);
  border-radius: var(--radius);
  padding: 4px;
  border: 1px solid var(--border);
`,pt=a`
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
`,ft=a`
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
`,ut=a`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px;
  background: var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  margin-bottom: 28px;
  border: 1px solid var(--border);
`,pe=a`
  background: var(--surface);
  text-align: center;
  padding: 20px;
  span {
    display: block;
  }
`,fe=a`
  font-size: 2rem;
  font-weight: 700;
  font-family: var(--mono);
  letter-spacing: -0.04em;
`,ue=a`
  font-size: 0.8rem;
  color: var(--text-muted);
  margin-top: 4px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
`,Ce={high:"var(--danger)",medium:"var(--accent)",low:"var(--success)"};let mt=4;const q=m([{id:1,text:"Build signal-based reactivity",done:!0,priority:"high"},{id:2,text:"Implement tagged template DOM engine",done:!0,priority:"high"},{id:3,text:"Add keyed list reconciliation",done:!1,priority:"medium"}]),be=m("all"),Ae=$e(()=>{const e=be(),t=q();return e==="active"?t.filter(o=>!o.done):e==="done"?t.filter(o=>o.done):t}),oe=$e(()=>{const e=q();return{total:e.length,done:e.filter(t=>t.done).length,active:e.filter(t=>!t.done).length}});function gt(e){const t=e(),o=()=>q(n=>n.map(r=>r.id===t.id?{...r,done:!r.done}:r)),s=()=>q(n=>n.filter(r=>r.id!==t.id));return y`<div class=${at}>
    <input
      type="checkbox"
      class=${it}
      checked=${t.done}
      onclick=${o}
    />
    <span class=${t.done?lt:ct}
      >${t.text}</span
    >
    <span
      class=${Le}
      style=${`background: ${Ce[t.priority]}20; color: ${Ce[t.priority]}`}
      >${t.priority}</span
    >
    <button
      class=${h(b,K)}
      onclick=${s}
      style="padding: 4px 10px; font-size: 0.75rem;"
    >
      ✕
    </button>
  </div>`}function ht(){const e=m(""),t=m("medium"),o=()=>{const s=e().trim();s&&(q(n=>[...n,{id:mt++,text:s,done:!1,priority:t()}]),e(""))};return y`<div style="display:flex;gap:8px;margin-bottom:24px;">
    <input
      class=${ae}
      placeholder="What needs doing?"
      value=${()=>e()}
      oninput=${s=>e(s.target.value)}
      onkeydown=${s=>{s.key==="Enter"&&o()}}
    />
    <select
      class=${xe}
      onchange=${s=>t(s.target.value)}
    >
      <option value="low">Low</option>
      <option value="medium" selected>Med</option>
      <option value="high">High</option>
    </select>
    <button class=${h(b,ie)} onclick=${o}>Add</button>
  </div>`}function vt(){return y`<div class=${dt}>
    ${["all","active","done"].map(e=>y`<button
          class=${()=>be()===e?ft:pt}
          onclick=${()=>be(e)}
        >
          ${e[0].toUpperCase()+e.slice(1)}
          ${()=>{const t=oe();return`(${e==="all"?t.total:e==="active"?t.active:t.done})`}}
        </button>`)}
  </div>`}function xt(){return y`<div class=${Y}>
    <h1 class=${U}>Tasks</h1>
    <p class=${V}>
      A fully reactive todo app — zero frameworks, zero build tools.
    </p>
    <div class=${ut}>
      <div class=${pe}>
        <span class=${fe} style="color:var(--text)"
          >${()=>oe().total}</span
        ><span class=${ue}>Total</span>
      </div>
      <div class=${pe}>
        <span class=${fe} style="color:var(--accent)"
          >${()=>oe().active}</span
        ><span class=${ue}>Active</span>
      </div>
      <div class=${pe}>
        <span class=${fe} style="color:var(--success)"
          >${()=>oe().done}</span
        ><span class=${ue}>Done</span>
      </div>
    </div>
    ${ht()} ${vt()}
    <div>
      ${Oe(Ae,e=>e.id,e=>gt(e))}
      ${()=>Ae().length===0?y`<div
              style="text-align:center;padding:48px 20px;color:var(--text-muted);font-style:italic;"
            >
              No tasks match this filter.
            </div>`:null}
    </div>
  </div>`}const bt=a`
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
`,yt=a`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-bottom: 20px;
`,$t=a`
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
`,ye=m([]);function _(e){ye(t=>[`${performance.now().toFixed(1)}ms — ${e}`,...t.slice(0,19)])}let wt=1;const Ne=["Alice","Bob","Carol","Dan","Eve","Frank","Grace","Hank","Iris","Jack","Kara","Leo","Mia","Nico","Olga","Pete"];function ne(){return{id:wt++,name:Ne[Math.floor(Math.random()*Ne.length)],score:Math.floor(Math.random()*100)}}const k=m(Array.from({length:8},ne));function kt(e){const t=[...e];for(let o=t.length-1;o>0;o--){const s=Math.floor(Math.random()*(o+1));[t[o],t[s]]=[t[s],t[o]]}return t}function St(e,t){return y`<div class=${bt}>
    <span class="idx">${()=>t()}</span>
    <span class="name">${()=>e().name}</span>
    <span
      class="score"
      style=${()=>`color: ${e().score>70?"var(--success)":e().score>40?"var(--accent)":"var(--danger)"}`}
      >${()=>e().score}</span
    >
    <input
      class=${ae}
      style="width:80px;padding:6px 8px;font-size:0.8rem;"
      placeholder="type here…"
    />
    <button
      class=${h(b,K)}
      style="padding:4px 8px;font-size:0.7rem;"
      onclick=${()=>k(o=>o.filter(s=>s.id!==e().id))}
    >
      ✕
    </button>
  </div>`}function zt(){return y`<div class=${Y}>
    <h1 class=${U}>List Stress Test</h1>
    <p class=${V}>
      Exercises keyed reconciliation: shuffle, reverse, add, remove. Type
      in the inputs to verify DOM preservation.
    </p>

    <div class=${yt}>
      <button
        class=${h(b,ie)}
        onclick=${()=>{k(kt),_("Shuffled")}}
      >
        Shuffle
      </button>
      <button
        class=${h(b,st)}
        onclick=${()=>{k(e=>[...e].reverse()),_("Reversed")}}
      >
        Reverse
      </button>
      <button
        class=${h(b,ve)}
        onclick=${()=>{k(e=>[...e,ne()]),_("Added 1")}}
      >
        + Add 1
      </button>
      <button
        class=${h(b,ve)}
        onclick=${()=>{const e=Array.from({length:5},ne);k(t=>[...t,...e]),_("Added 5")}}
      >
        + Add 5
      </button>
      <button
        class=${h(b,K)}
        onclick=${()=>{k(e=>{if(!e.length)return e;const t=Math.floor(Math.random()*e.length);return e.filter((o,s)=>s!==t)}),_("Removed random")}}
      >
        - Remove random
      </button>
      <button
        class=${h(b,te)}
        onclick=${()=>{k(e=>e.map(t=>({...t,score:Math.floor(Math.random()*100)}))),_("Randomized scores")}}
      >
        Randomize scores
      </button>
      <button
        class=${h(b,te)}
        onclick=${()=>{k(e=>[...e].sort((t,o)=>t.name.localeCompare(o.name))),_("Sorted by name")}}
      >
        Sort A→Z
      </button>
      <button
        class=${h(b,te)}
        onclick=${()=>{k(e=>[...e].sort((t,o)=>o.score-t.score)),_("Sorted by score")}}
      >
        Sort by score
      </button>
      <button
        class=${h(b,K)}
        onclick=${()=>{k([]),_("Cleared all")}}
      >
        Clear
      </button>
      <button
        class=${h(b,ie)}
        onclick=${()=>{k(Array.from({length:50},ne)),_("Reset to 50 items")}}
      >
        Reset 50
      </button>
    </div>

    <div
      style="display:flex;gap:8px;margin-bottom:16px;align-items:center;"
    >
      <span
        class=${Le}
        style="background:var(--accent-dim);color:var(--accent);"
        >${()=>k().length} items</span
      >
      <span style="font-size:0.8rem;color:var(--text-muted);"
        >Type in any input, then shuffle — your text stays because each()
        reuses DOM nodes by key.</span
      >
    </div>

    <div style="margin-bottom: 24px;">
      ${Oe(k,e=>e.id,St)}
      ${()=>k().length===0?y`<div
              style="text-align:center;padding:32px;color:var(--text-muted);font-style:italic;"
            >
              List is empty. Add some items!
            </div>`:null}
    </div>

    <h3 style="font-size:0.9rem;font-weight:600;margin-bottom:8px;">
      Operation Log
    </h3>
    <div class=${$t}>
      ${()=>ye().length===0?"No operations yet…":ye().join(`
`)}
    </div>
  </div>`}function _t(){const e=Me({user:{name:"Ada Lovelace",settings:{theme:"dark",notifications:{email:!0,push:!1,frequency:"daily"}},scores:[95,87,92]}}),t=$e(()=>JSON.stringify(j(e),null,2)),o=a`
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
  `,s=a`
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
  `,n=a`
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
  `,r=a`
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
  `,i=a`
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
  `,c=a`
    border-color: var(--success);
    background: var(--success-dim);
    color: var(--success);
    & .icon {
      background: var(--success);
      color: var(--bg);
    }
  `,l=a`
    border-color: var(--accent);
    background: var(--accent-dim);
    color: var(--accent);
    & .icon {
      background: var(--accent);
      color: var(--bg);
    }
  `,p=a`
    border-color: var(--danger);
    background: var(--danger-dim);
    color: var(--danger);
    & .icon {
      background: var(--danger);
      color: var(--bg);
    }
  `,f=a`
    border-color: var(--info);
    background: var(--info-dim);
    color: var(--info);
    & .icon {
      background: var(--info);
      color: var(--bg);
    }
  `,d={success:c,warning:l,error:p,info:f},x={success:"✓",warning:"!",error:"✕",info:"i"},v={success:"All systems operational. Deployment completed.",warning:"High memory usage detected. Consider scaling.",error:"Connection lost. Retrying in 5 seconds…",info:"New version available. Update when ready."},$=a`
    border-radius: 24px !important;
    & .icon { border-radius: 12px; }
  `,S=a`
    box-shadow:
      0 8px 32px rgba(0, 0, 0, 0.4),
      0 2px 8px rgba(0, 0, 0, 0.3);
  `,M=a`
    border-width: 3px;
    border-style: dashed;
  `,g=a`
    transform: scale(1.02);
  `,E=a`
    box-shadow:
      0 0 20px currentColor,
      0 0 40px currentColor;
    &:hover {
      box-shadow:
        0 0 30px currentColor,
        0 0 60px currentColor;
    }
  `,z=m("success"),O=m(!1),w=m(!1),R=m(!1),L=m(!1),T=m(!1),A=m(100),P=m(10),B=m(100),F=a`
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
  `,W=a`
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
  `,Te=a`
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
  `;return y`<div class=${Y}>
    <h1 class=${U}>Playground</h1>
    <p class=${V}>
      Deeply nested reactive objects, complex CSS selectors, and signal
      chains.
    </p>

    <div
      style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:24px;"
    >
      <div class=${I}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:16px;">
          Deep Reactive Object
        </h3>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.name
            <input
              class=${ae}
              style="margin-top:4px;"
              value=${()=>e.user.name}
              oninput=${u=>{e.user.name=u.target.value}}
            />
          </label>
          <label style="font-size:0.85rem;color:var(--text-muted);">
            user.settings.theme
            <select
              class=${xe}
              style="width:100%;margin-top:4px;"
              onchange=${u=>{e.user.settings.theme=u.target.value}}
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
              class=${xe}
              style="width:100%;margin-top:4px;"
              onchange=${u=>{e.user.settings.notifications.frequency=u.target.value}}
            >
              <option value="daily" selected>daily</option>
              <option value="weekly">weekly</option>
              <option value="never">never</option>
            </select>
          </label>
          <div style="display:flex;gap:6px;margin-top:4px;">
            <button
              class=${h(b,ve)}
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${()=>{e.user.scores.push(Math.floor(Math.random()*100))}}
            >
              Push score
            </button>
            <button
              class=${h(b,K)}
              style="font-size:0.75rem;padding:6px 10px;"
              onclick=${()=>{e.user.scores.length&&e.user.scores.pop()}}
            >
              Pop score
            </button>
          </div>
        </div>
      </div>

      <div class=${I}>
        <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:16px;">
          Live State (auto-updates)
        </h3>
        <div
          class=${de}
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
      <div class=${I}>
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
          ${["success","warning","error","info"].map(u=>y`
              <button
                class=${()=>z()===u?h(b,ie):h(b,te)}
                style="font-size:0.75rem;padding:6px 12px;flex:1;"
                onclick=${()=>z(u)}
              >
                ${u}
              </button>
            `)}
        </div>

        <div
          style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:16px;"
        >
          <button
            class=${()=>O()?W:F}
            onclick=${()=>O(u=>!u)}
          >
            rounded
          </button>
          <button
            class=${()=>w()?W:F}
            onclick=${()=>w(u=>!u)}
          >
            shadow
          </button>
          <button
            class=${()=>R()?W:F}
            onclick=${()=>R(u=>!u)}
          >
            dashed
          </button>
          <button
            class=${()=>L()?W:F}
            onclick=${()=>L(u=>!u)}
          >
            scale
          </button>
          <button
            class=${()=>T()?W:F}
            onclick=${()=>T(u=>!u)}
          >
            glow
          </button>
        </div>

        <div
          class=${()=>h(i,d[z()],O()&&$,w()&&S,R()&&M,L()&&g,T()&&E)}
        >
          <div class="icon">${()=>x[z()]}</div>
          <div class="text">
            <div class="label">${()=>z()}</div>
            <div class="message">${()=>v[z()]}</div>
          </div>
        </div>

        <div
          class=${de}
          style="margin-top:12px;font-size:0.7rem;line-height:1.6;"
        >
          cx(statusBase,
          <strong
            >${()=>"status"+z()[0].toUpperCase()+z().slice(1)}</strong
          >${()=>O()?", propRounded":""}${()=>w()?", propShadow":""}${()=>R()?", propBorder":""}${()=>L()?", propScale":""}${()=>T()?", propGlow":""})
        </div>
      </div>

      <div class=${I}>
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
              class=${r}
              min="50"
              max="200"
              value=${()=>A()}
              oninput=${u=>A(+u.target.value)}
            />
            <span class=${le} style="min-width:38px;"
              >${()=>A()}%</span
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Radius</span>
            <input
              type="range"
              class=${r}
              min="0"
              max="50"
              value=${()=>P()}
              oninput=${u=>P(+u.target.value)}
            />
            <span class=${le} style="min-width:38px;"
              >${()=>P()}px</span
            >
          </label>
          <label
            style="display:flex;align-items:center;gap:10px;font-size:0.8rem;color:var(--text-muted);"
          >
            <span style="min-width:60px;">Opacity</span>
            <input
              type="range"
              class=${r}
              min="10"
              max="100"
              value=${()=>B()}
              oninput=${u=>B(+u.target.value)}
            />
            <span class=${le} style="min-width:38px;"
              >${()=>B()}%</span
            >
          </label>
        </div>

        <div style="display:flex;justify-content:center;padding:20px 0;">
          <div
            class=${Te}
            style=${()=>`height: ${A()}px; border-radius: ${P()}px; opacity: ${B()/100}; font-size: ${Math.max(10,A()*.14)}px;`}
          >
            ${()=>`${A()}% · ${P()}px · ${B()}%`}
          </div>
        </div>

        <div class=${de} style="font-size:0.7rem;line-height:1.6;">
          style=${"${"}() => ${"`"} height:
          <strong>${()=>A()}px</strong>; border-radius:
          <strong>${()=>P()}px</strong>; opacity:
          <strong>${()=>(B()/100).toFixed(2)}</strong>; ${"`"}}
        </div>
      </div>
    </div>

    <h2 style="font-size:1.1rem;font-weight:700;margin-bottom:16px;">
      CSS Stress Tests
    </h2>

    <div class=${o}>
      <div class="title">Complex Selectors Test</div>
      <div class="nested-box">
        <div class="inner">
          This is nested-box > inner (descendant combinator)
        </div>
      </div>
      <span class="tag green">Green Tag</span>
      <span class="tag yellow">Yellow Tag</span>
      <input
        class=${ae}
        style="margin-top:12px;width:200px;"
        placeholder="Focus me for :focus-within"
      />
    </div>

    <div class=${h(I,s)}>
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

    <div class=${h(I,n)}>
      <h3 style="font-size:0.95rem;font-weight:600;margin-bottom:12px;">
        Combinator Selectors (+, :first-child, :last-child, :nth-child)
      </h3>
      <div class="item">First item (accent, bold — :first-child)</div>
      <div class="item">Second item (dimmed — :nth-child(even))</div>
      <div class="item">Third item</div>
      <div class="item">Fourth item (dimmed — :nth-child(even))</div>
      <div class="item">Fifth item (green — :last-child)</div>
    </div>
  </div>`}const Ct=a`
  display: flex;
  align-items: center;
  gap: 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 16px 20px;
  margin-bottom: 10px;
`,At=a`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.1rem;
  flex-shrink: 0;
`,Nt=a`
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
`,Mt=a`
  font-family: var(--mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  background: var(--surface-2);
  padding: 3px 10px;
  border-radius: 20px;
`,Ot=[{name:"signal.js",icon:"⚡",color:"var(--accent)",lines:"~90",desc:"signal, computed, effect, batch, untrack"},{name:"reactive.js",icon:"🔮",color:"#a78bfa",lines:"~130",desc:"Proxy-based deep reactivity, identity cache, array methods"},{name:"html.js",icon:"🧩",color:"#60a5fa",lines:"~210",desc:"Tagged templates → live DOM, keyed each() reconciliation"},{name:"component.js",icon:"📦",color:"var(--success)",lines:"~95",desc:"mount, onMount, onCleanup, provide/inject"},{name:"router.js",icon:"🧭",color:"#f472b6",lines:"~105",desc:"History-based SPA routing, reactive params"},{name:"css.js",icon:"🎨",color:"#fb923c",lines:"~130",desc:"Scoped CSS-in-JS with deep nesting, @media, combinators"}];function Rt(){return y`<div class=${Y}>
    <h1 class=${U}>Architecture</h1>
    <p class=${V}>
      Six standalone modules. ~760 lines total. Zero dependencies.
    </p>
    <div class=${I}>
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
      ${Ot.map(e=>y`<div class=${Ct}>
            <div
              class=${At}
              style=${`background: ${e.color}20; color: ${e.color};`}
            >
              ${e.icon}
            </div>
            <div class=${Nt}>
              <strong>${e.name}</strong><span>${e.desc}</span>
            </div>
            <span class=${Mt}>${e.lines}</span>
          </div>`)}
    </div>
  </div>`}const Lt=et({"/":xt,"/stress":zt,"/playground":_t,"/about":Rt,"*":()=>y`<div class=${Y}>
      <h1 class=${U}>404</h1>
      <p class=${V}>Not found.</p>
    </div>`});function Tt(){return y`
    <header class=${tt}>
      <span class=${ot}>vanillakit_</span>
      <nav class=${nt}>
        ${Z("/","Tasks",X,Q)}
        ${Z("/stress","List Stress",X,Q)}
        ${Z("/playground","Playground",X,Q)}
        ${Z("/about","About",X,Q)}
      </nav>
    </header>
    <main>${Lt()}</main>
    <footer
      style="text-align:center;padding:48px 0 32px;color:var(--text-muted);font-size:0.78rem;letter-spacing:0.03em;"
    >
      Built with <span style="color:var(--accent);">vanillakit</span> —
      zero deps, ~760 lines of JS
    </footer>
  `}window.location.hash||(window.location.hash="/");document.getElementById("app").append(Tt());
