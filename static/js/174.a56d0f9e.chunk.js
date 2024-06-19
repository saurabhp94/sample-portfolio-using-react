"use strict";(self.webpackChunkself_learn_react=self.webpackChunkself_learn_react||[]).push([[174,660,352],{174:(e,a,t)=>{t.r(a),t.d(a,{default:()=>u});var r=t(43),n=t(660),s=t(724),l=t(331),i=t(352),o=t(84),c=t(715),d=t(579);const u=e=>{const[a,t]=(0,r.useState)(null),{theme:u}=(0,o.D)(),{header:f}=e;return(0,r.useEffect)((()=>{(async()=>{try{const e=await fetch(s.A.certifications,{method:"GET"}),a=await e.json();t(a)}catch(e){console.error("Certifications fetch Error",e)}})()}),[]),a?(0,d.jsxs)("div",{id:"/certifications",children:[(0,d.jsx)("div",{id:u===c.a?"stars":""}),(0,d.jsx)("div",{id:u===c.a?"stars2":""}),(0,d.jsx)("div",{id:u===c.a?"stars3":""}),(0,d.jsx)(n.default,{title:f}),(0,d.jsx)("div",{className:"parent-container",children:a&&a.certifications.map(((e,a)=>(0,d.jsx)(i.default,{sectionType:e},a)))})]}):(0,d.jsx)(l.default,{})}},660:(e,a,t)=>{t.r(a),t.d(a,{default:()=>n});t(43),t(50);var r=t(579);const n=function(e){const{title:a}=e;return(0,r.jsx)("div",{className:"header",children:a})}},352:(e,a,t)=>{t.r(a),t.d(a,{default:()=>m});var r=t(43),n=t(139),s=t.n(n),l=t(579);const i=["as","disabled"];function o(e){let{tagName:a,disabled:t,href:r,target:n,rel:s,role:l,onClick:i,tabIndex:o=0,type:c}=e;a||(a=null!=r||null!=n||null!=s?"a":"button");const d={tagName:a};if("button"===a)return[{type:c||"button",disabled:t},d];const u=e=>{(t||"a"===a&&function(e){return!e||"#"===e.trim()}(r))&&e.preventDefault(),t?e.stopPropagation():null==i||i(e)};return"a"===a&&(r||(r="#"),t&&(r=void 0)),[{role:null!=l?l:"button",disabled:void 0,tabIndex:t?void 0:o,href:r,target:"a"===a?n:void 0,"aria-disabled":t||void 0,rel:"a"===a?s:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},d]}const c=r.forwardRef(((e,a)=>{let{as:t,disabled:r}=e,n=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,i);const[s,{tagName:c}]=o(Object.assign({tagName:t,disabled:r},n));return(0,l.jsx)(c,Object.assign({},n,s,{ref:a}))}));c.displayName="Button";var d=t(852);const u=r.forwardRef(((e,a)=>{let{as:t,bsPrefix:r,variant:n="primary",size:i,active:c=!1,disabled:u=!1,className:f,...h}=e;const v=(0,d.oU)(r,"btn"),[x,{tagName:m}]=o({tagName:t,disabled:u,...h}),b=m;return(0,l.jsx)(b,{...x,...h,ref:a,disabled:u,className:s()(f,v,c&&"active",n&&"".concat(v,"-").concat(n),i&&"".concat(v,"-").concat(i),h.href&&u&&"disabled")})}));u.displayName="Button";const f=u;var h=t(910),v=t(892),x=t(84);const m=e=>{var a,t;const{sectionType:n}=e,s=n&&n.bodyText?n.bodyText.split(/\r\n|\r|\n/):[],[i,o]=(0,r.useState)(!1),{theme:c}=(0,x.D)();return(0,l.jsxs)("div",{className:"container",children:[(null===n||void 0===n?void 0:n.image)&&(0,l.jsx)("img",{className:"image",src:null===n||void 0===n?void 0:n.image,alt:"ProjectImage"}),(0,l.jsx)("h3",{children:n.title}),n.bodyText&&(s.length>2?(0,l.jsxs)("div",{className:"button",children:[i?s.map(((e,a)=>(0,l.jsx)("ul",{children:(0,l.jsx)("li",{children:e})},a))):(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{children:s[0]}),(0,l.jsxs)("li",{children:[s[1],"...."]})]}),(0,l.jsx)(f,{variant:"primary",onClick:()=>{o(!i)},children:i?"Show Less":"Show More"})]}):(0,l.jsx)("div",{className:"regularText",children:(0,l.jsx)("p",{children:s})})),n.links&&(0,l.jsx)("div",{className:"links",children:null===n||void 0===n||null===(a=n.links)||void 0===a?void 0:a.map(((e,a)=>(0,l.jsxs)("a",{href:e.href,target:"_blank",rel:"noopener noreferrer",style:{color:c.color,border:"1px solid ".concat(c.color)},children:[(0,l.jsx)(h.g,{style:{marginRight:"5px",color:c.socialIconBgColor},icon:v.Vz1}),e.text]},a)))}),(0,l.jsx)("div",{className:"tags-container",style:{background:c.tagContainerBg},children:null===n||void 0===n||null===(t=n.tags)||void 0===t?void 0:t.map(((e,a)=>(0,l.jsx)("span",{className:"badge",children:e},a)))}),(0,l.jsx)("div",{className:"footerUrl",style:{background:c.tagContainerBg},children:n.credentialUrl&&(0,l.jsx)("a",{href:null===n||void 0===n?void 0:n.credentialUrl,target:"_blank",rel:"noopener noreferrer",style:{color:c.color,border:"1px solid ".concat(c.color)},children:"Verify Credential"})})]})}}}]);
//# sourceMappingURL=174.a56d0f9e.chunk.js.map