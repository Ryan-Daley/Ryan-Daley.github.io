import{a as d}from"./index.6f047490.js";import{_ as m}from"./_plugin-vue_export-helper.c27b6911.js";import{d as f,r as u,o as p,a as c,f as T,h as r}from"./runtime-core.esm-bundler.4fe5da3a.js";const g=f({__name:"ToggleToc",setup(_,{expose:a}){a();const{width:t}=d(),e=u(t.value>1200),n=u(!1);p(()=>{const o=document.querySelector(".table-of-contents");n.value=!!o,s()});const l=()=>{e.value=!e.value,s()},s=()=>{const o=document.querySelector("html");e.value?o.classList.add("toc-open"):o.classList.remove("toc-open")},i={width:t,isTocOpen:e,isToc:n,toggleToc:l,handleClass:s};return Object.defineProperty(i,"__isScriptSetup",{enumerable:!1,value:!0}),i}}),v={key:0,"i-ri:menu-3-line":""},h={key:1,"i-ri:menu-fold-line":""};function k(_,a,t,e,n,l){return e.isToc?(r(),c("button",{key:0,class:"nav-item ml-4",title:"Toggle toc",onClick:e.toggleToc},[e.isTocOpen?(r(),c("div",v)):(r(),c("div",h))])):T("",!0)}const C=m(g,[["render",k]]);export{C as default};