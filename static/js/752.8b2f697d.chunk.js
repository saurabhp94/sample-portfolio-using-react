"use strict";(self.webpackChunkself_learn_react=self.webpackChunkself_learn_react||[]).push([[752,660,571],{971:(e,t,l)=>{l.r(t),l.d(t,{default:()=>o});var i=l(43),r=l(724),n=l(331),c=l(660),a=l(318),s=l(579);const o=e=>{const[t,l]=(0,i.useState)(null),{header:o}=e;return(0,i.useEffect)((()=>{(async()=>{try{const e=await fetch(r.A.experiences,{method:"GET"}),t=await e.json();l(t)}catch(e){console.error("Experience fetch Error",e)}})()}),[]),t?(0,s.jsxs)("div",{id:"/experience",children:[(0,s.jsx)(c.default,{title:o}),(0,s.jsx)("div",{className:"eachSection_height",children:(0,s.jsx)(a.default,{sectionType:t.experiences})})]}):(0,s.jsx)(n.default,{})}},660:(e,t,l)=>{l.r(t),l.d(t,{default:()=>r});l(43),l(50);var i=l(579);const r=function(e){const{title:t}=e;return(0,i.jsx)("div",{className:"header",children:t})}},318:(e,t,l)=>{l.r(t),l.d(t,{default:()=>c});var i=l(43),r=l(120),n=(l(459),l(579));const c=e=>{const{sectionType:t}=e,[l,c]=(0,i.useState)({});return(0,n.jsx)(r.VerticalTimeline,{animate:!0,lineColor:"black",children:null===t||void 0===t?void 0:t.map(((e,t)=>{var i;const a=e.workDescription&&e.workDescription.length>0,s=l[t]||!1;return(0,n.jsxs)(r.VerticalTimelineElement,{className:"vertical-timeline-element--education",contentStyle:{background:"#f7f7f7",color:"black",boxShadow:"0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",borderRadius:"10px"},contentArrowStyle:{borderRight:"7px solid  #f7f7f7"},date:null===e||void 0===e?void 0:e.dateText,iconStyle:{background:"#f7f7f7",color:"black"},icon:(0,n.jsx)("img",{src:e.Imgsrc,alt:"",className:"vertical-timeline-element-icon"}),children:[(0,n.jsx)("h3",{className:"vertical-timeline-element-title",children:e.cardtitle}),(0,n.jsx)("h4",{className:"vertical-timeline-element-subtitle",children:e.cardsubtitle}),(0,n.jsx)("p",{children:e.subtitle}),a&&s&&(0,n.jsx)("ul",{children:null===(i=e.workDescription)||void 0===i?void 0:i.map(((e,t)=>(0,n.jsx)("li",{children:e},t)))}),a&&(0,n.jsx)("button",{onClick:()=>{return e=t,void c((t=>({...t,[e]:!t[e]})));var e},children:s?"- Collapse":"+ Expand"})]},t)}))})}}}]);
//# sourceMappingURL=752.8b2f697d.chunk.js.map