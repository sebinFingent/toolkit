"use strict";(self.webpackChunkslider_app=self.webpackChunkslider_app||[]).push([[374],{95:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(791),a=n(184);const s=e=>{const t=()=>{},{dropContainerRef:n,slectedRows:r,deleteSelectedItems:s=t,drop:o=t,allowDrop:d=t,onEnter:l=t,onLeave:c=t}=e,i={onDrop:e=>o(e),onDragOver:e=>d(e),onDragEnter:e=>l(e),onDragLeave:e=>c(e)};return(0,a.jsx)("div",{className:"drag-box",ref:n,onMouseUp:o,...i,children:r.map(((e,t)=>(0,a.jsxs)("div",{className:"selected-items prevent-select",onClick:()=>s(t),style:{marginLeft:"calc(".concat(t," * 60px)"),zIndex:"100"},children:[e,(0,a.jsx)("div",{className:"arrow"})]},t+"select-key")))})},o=r.memo(s);const d=function(e){const{draggingItem:t}=e;return(0,a.jsx)("div",{className:"drag-item",id:"move-box",children:t})},l=e=>{const{children:t}=e,[n,s]=(0,r.useState)([]),[l,c]=(0,r.useState)(null);function i(){c(null),document.removeEventListener("mouseup",i),document.removeEventListener("mousemove",g)}function g(e){const t=document.getElementById("move-box");t&&e.pageX>0&&e.pageY>0&&e.pageX<window.innerWidth-t.clientWidth&&e.pageY<window.innerHeight-t.clientHeight&&(t.style.left=e.pageX+10+"px",t.style.top=e.pageY+"px")}return(0,a.jsxs)("div",{children:[(0,a.jsx)(o,{slectedRows:n,deleteSelectedItems:e=>{const t=[...n];t.splice(e,1),s(t)},drop:()=>{l&&s([...n,l])}}),t({slectedRows:n,onDragStart:(e,t)=>{c(t),e.preventDefault(),document.addEventListener("mouseup",i),document.addEventListener("mousemove",g)}}),l&&(0,a.jsx)(d,{draggingItem:l})]})};const c=function(e){const{slectedRows:t,onDragStart:n,onDrag:r,onDragEnd:s}=e,o={tableHeader:["One","Two","Three"],tableBody:[{One:1.1,Two:1.2,Three:1.3},{One:2.1,Two:2.2,Three:2.3},{One:3.1,Two:3.2,Three:3.3},{One:4.1,Two:4.2,Three:4.3}]};return(0,a.jsxs)("table",{className:"table-wrapper ",id:"draggableTable",children:[(0,a.jsx)("thead",{children:(0,a.jsx)("tr",{children:o.tableHeader.filter((e=>!t.includes(e))).map(((e,t)=>(0,a.jsx)("th",{draggable:!0,onDragStart:t=>n(t,e),onDrag:r,onDragEnd:s,children:e},e+"table"+t)))})}),(0,a.jsx)("tbody",{children:o.tableBody.map(((e,n)=>(0,a.jsx)("tr",{children:o.tableHeader.filter((e=>!t.includes(e))).map(((t,n)=>(0,a.jsx)("td",{children:e[t]},t+""+n)))},e+"bd"+n)))})]})};function i(){return(0,a.jsx)(l,{children:e=>{let{slectedRows:t,onDragStart:n,onDrag:r,onDragEnd:s}=e;return(0,a.jsx)(c,{slectedRows:t,onDragStart:n})}})}}}]);
//# sourceMappingURL=374.7139f87a.chunk.js.map