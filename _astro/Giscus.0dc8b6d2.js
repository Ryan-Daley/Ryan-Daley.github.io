import{o as c,l as n,g as u,t as d}from"./web.e1e97fab.js";import{a as p}from"./index.744a707f.js";const g={website:"https://ryan-daley.github.io/",title:"Ryan Daley",desc:"Ryan's Porfolio.",author:"Ryan Daley"},e={repo:"This-is-an-Apple/giscus-ryandaleyanalytics.com",repoId:"R_kgDOGl2SjQ",category:"Announcements",categoryId:"DIC_kwDOGl2Sjc4CAcxK",light:"light",dark:`${g.website}/css/giscus-dark.css`},l=d('<div class="giscus">'),b=()=>{const[r]=p(),a=()=>r()?e.dark:e.light,i=s=>{const t=document.createElement("script");return t.setAttribute("src","https://giscus.app/client.js"),t.setAttribute("data-repo",e.repo),t.setAttribute("data-repo-id",e.repoId),t.setAttribute("data-category",e.category),t.setAttribute("data-category-id",e.categoryId),t.setAttribute("data-theme",s),t.setAttribute("data-lang","en"),t.setAttribute("data-mapping","pathname"),t.setAttribute("data-reactions-enabled","1"),t.setAttribute("data-emit-metadata","0"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("async","true"),t},o=s=>{document.querySelector("iframe.giscus-frame")?.contentWindow?.postMessage({giscus:{setConfig:{theme:s}}},"https://giscus.app")};return c(()=>{document.head.appendChild(i(a()))}),n(()=>o(a())),u(l)};export{b as default};
