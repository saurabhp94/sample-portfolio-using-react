"use strict";(self.webpackChunkself_learn_react=self.webpackChunkself_learn_react||[]).push([[174,660,352],{174:(e,a,t)=>{t.r(a),t.d(a,{default:()=>c});var r=t(43),n=t(660),l=t(724),s=t(331),i=t(352),o=t(579);const c=e=>{const[a,t]=(0,r.useState)(null),{header:c}=e;return(0,r.useEffect)((()=>{(async()=>{try{const e=await fetch(l.A.certifications,{method:"GET"}),a=await e.json();t(a)}catch(e){console.error("Certifications fetch Error",e)}})()}),[]),a?(0,o.jsxs)("div",{id:"/certifications",children:[(0,o.jsx)(n.default,{title:c}),(0,o.jsx)("div",{className:"parent-container",children:a&&a.certifications.map(((e,a)=>(0,o.jsx)(i.default,{sectionType:e},a)))})]}):(0,o.jsx)(s.default,{})}},660:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});t(43),t(50);var r=t(579);const n=function(e){const{title:a}=e;return(0,r.jsx)("div",{className:"header",children:a})}},352:(e,a,t)=>{t.r(a),t.d(a,{default:()=>b});var r=t(43),n=t(139),l=t.n(n),s=t(579);const i=["as","disabled"];function o(e){let{tagName:a,disabled:t,href:r,target:n,rel:l,role:s,onClick:i,tabIndex:o=0,type:c}=e;a||(a=null!=r||null!=n||null!=l?"a":"button");const d={tagName:a};if("button"===a)return[{type:c||"button",disabled:t},d];const u=e=>{(t||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==i||i(e)};return"a"===a&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===a?n:void 0,"aria-disabled":t||void 0,rel:"a"===a?l:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const c=r.forwardRef(((e,a)=>{let{as:t,disabled:r}=e,n=function(e,a){if(null==e)return{};var t,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);const[l,{tagName:c}]=o(Object.assign({tagName:t,disabled:r},n));return(0,s.jsx)(c,Object.assign({},n,l,{ref:a}))}));c.displayName="Button";var d=t(852);const u=r.forwardRef(((e,a)=>{let{as:t,bsPrefix:r,variant:n="primary",size:i,active:c=!1,disabled:u=!1,className:f,...h}=e;const v=(0,d.oU)(r,"btn"),[x,{tagName:b}]=o({tagName:t,disabled:u,...h}),m=b;return(0,s.jsx)(m,{...x,...h,ref:a,disabled:u,className:l()(f,v,c&&"active",n&&"".concat(v,"-").concat(n),i&&"".concat(v,"-").concat(i),h.href&&u&&"disabled")})}));u.displayName="Button";const f=u;var h=t(910),v=t(892),x=t(84);const b=e=>{var a,t;const{sectionType:n}=e,l=n&&n.bodyText?n.bodyText.split(/\r\n|\r|\n/):[],[i,o]=(0,r.useState)(!1),{theme:c}=(0,x.D)();return(0,s.jsxs)("div",{className:"container",children:[(null===n||void 0===n?void 0:n.image)&&(0,s.jsx)("img",{className:"image",src:null===n||void 0===n?void 0:n.image,alt:"ProjectImage"}),(0,s.jsx)("h3",{children:n.title}),n.bodyText&&(l.length>2?(0,s.jsxs)("div",{className:"button",children:[i?l.map(((e,a)=>(0,s.jsx)("ul",{children:(0,s.jsx)("li",{children:e})},a))):(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:l[0]}),(0,s.jsxs)("li",{children:[l[1],"...."]})]}),(0,s.jsx)(f,{variant:"primary",onClick:()=>{o(!i)},children:i?"Show Less":"Show More"})]}):(0,s.jsx)("div",{className:"regularText",children:(0,s.jsx)("p",{children:l})})),n.links&&(0,s.jsx)("div",{className:"links",children:null===n||void 0===n||null===(a=n.links)||void 0===a?void 0:a.map(((e,a)=>(0,s.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",style:{color:c.color,border:"1px solid ".concat(c.color)},children:[(0,s.jsx)(h.g,{style:{marginRight:"5px",color:c.socialIconBgColor},icon:v.Vz1}),e.text]},a)))}),(0,s.jsx)("div",{className:"tags-container",style:{background:c.tagContainerBg},children:null===n||void 0===n||null===(t=n.tags)||void 0===t?void 0:t.map(((e,a)=>(0,s.jsx)("span",{className:"badge",children:e},a)))}),(0,s.jsx)("div",{className:"footerUrl",style:{background:c.tagContainerBg},children:n.credentialUrl&&(0,s.jsx)("a",{href:null===n||void 0===n?void 0:n.credentialUrl,target:"_blank",rel:"noopener noreferrer",style:{color:c.color,border:"1px solid ".concat(c.color)},children:"Verify Credential"})})]})}}}]);
//# sourceMappingURL=174.aeeaa154.chunk.js.map