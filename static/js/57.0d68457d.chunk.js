"use strict";(self.webpackChunkself_learn_react=self.webpackChunkself_learn_react||[]).push([[57,660,352],{660:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});t(43),t(50);var r=t(579);const n=function(e){const{title:a}=e;return(0,r.jsx)("div",{className:"header",children:a})}},57:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var r=t(43),n=t(660),l=t(724),s=t(331),o=t(352),i=t(579);const c=e=>{const[a,t]=(0,r.useState)(null),{header:c}=e;return(0,r.useEffect)((()=>{(async()=>{try{const e=await fetch(l.A.projects,{method:"GET"}),a=await e.json();t(a)}catch(e){console.error("Projects fetch Error",e)}})()}),[]),a?(0,i.jsxs)("div",{id:"/projects",children:[(0,i.jsx)(n.default,{title:c}),(0,i.jsx)("div",{className:"parent-container",children:a&&a.projects.map(((e,a)=>(0,i.jsx)(o.default,{sectionType:e},a)))})]}):(0,i.jsx)(s.default,{})}},352:(e,a,t)=>{t.r(a),t.d(a,{default:()=>j});var r=t(43),n=t(139),l=t.n(n),s=t(579);const o=["as","disabled"];function i(e){let{tagName:a,disabled:t,href:r,target:n,rel:l,role:s,onClick:o,tabIndex:i=0,type:c}=e;a||(a=null!=r||null!=n||null!=l?"a":"button");const d={tagName:a};if("button"===a)return[{type:c||"button",disabled:t},d];const u=e=>{(t||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==o||o(e)};return"a"===a&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===a?n:void 0,"aria-disabled":t||void 0,rel:"a"===a?l:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const c=r.forwardRef(((e,a)=>{let{as:t,disabled:r}=e,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,o);const[l,{tagName:c}]=i(Object.assign({tagName:t,disabled:r},n));return(0,s.jsx)(c,Object.assign({},n,l,{ref:a}))}));c.displayName="Button";var d=t(852);const u=r.forwardRef(((e,a)=>{let{as:t,bsPrefix:r,variant:n="primary",size:o,active:c=!1,disabled:u=!1,className:h,...f}=e;const v=(0,d.oU)(r,"btn"),[x,{tagName:j}]=i({tagName:t,disabled:u,...f}),b=j;return(0,s.jsx)(b,{...x,...f,ref:a,disabled:u,className:l()(h,v,c&&"active",n&&"".concat(v,"-").concat(n),o&&"".concat(v,"-").concat(o),f.href&&u&&"disabled")})}));u.displayName="Button";const h=u;var f=t(910),v=t(892),x=t(84);const j=e=>{var a,t;const{sectionType:n}=e,l=n&&n.bodyText?n.bodyText.split(/\r\n|\r|\n/):[],[o,i]=(0,r.useState)(!1),{theme:c}=(0,x.D)();return(0,s.jsxs)("div",{className:"container",children:[(null===n||void 0===n?void 0:n.image)&&(0,s.jsx)("img",{className:"image",src:null===n||void 0===n?void 0:n.image,alt:"ProjectImage"}),(0,s.jsx)("h3",{children:n.title}),n.bodyText&&(l.length>2?(0,s.jsxs)("div",{className:"button",children:[o?l.map(((e,a)=>(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:e})},a))):(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:l[0]}),(0,s.jsxs)("li",{children:[l[1],"...."]})]}),(0,s.jsx)(h,{variant:"primary",onClick:()=>{i(!o)},children:o?"Show Less":"Show More"})]}):(0,s.jsx)("div",{className:"regularText",children:(0,s.jsx)("p",{children:l})})),n.links&&(0,s.jsx)("div",{className:"links",children:null===n||void 0===n||null===(a=n.links)||void 0===a?void 0:a.map(((e,a)=>(0,s.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",style:{color:c.color,border:"1px solid ".concat(c.color)},children:[(0,s.jsx)(f.g,{style:{marginRight:"5px",color:c.socialIconBgColor},icon:v.Vz1}),e.text]},a)))}),(0,s.jsx)("div",{className:"tags-container",style:{background:c.tagContainerBg},children:null===n||void 0===n||null===(t=n.tags)||void 0===t?void 0:t.map(((e,a)=>(0,s.jsx)("span",{className:"badge",children:e},a)))}),(0,s.jsx)("div",{className:"footerUrl",style:{background:c.tagContainerBg},children:n.credentialUrl&&(0,s.jsx)("a",{href:null===n||void 0===n?void 0:n.credentialUrl,target:"_blank",rel:"noopener noreferrer",style:{color:c.color,border:"1px solid ".concat(c.color)},children:"Verify Credential"})})]})}}}]);
//# sourceMappingURL=57.0d68457d.chunk.js.map