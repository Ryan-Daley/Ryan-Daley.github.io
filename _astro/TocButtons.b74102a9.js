import{d as T,c as N,g as i,f as d,i as o,a as m,e as _,r as P,s as b,t as l}from"./web.7eadcb02.js";const B=l('<div class="table-of-contents-btns fixed z-20"><div hstack justify-end pt-18 pb-2 bg-c><!#><!/><!#><!/><!#><!/><button flex-center hover:opacity-60><span i-ic:round-keyboard-arrow-up text-xl></span></button><button class="flex-center hover:opacity-60 ml-1.5"><span i-mi:print text-sm></span></button></div></div>',18),C=l('<span text="sm c-light" italic mr-3></span>',2),I=l('<a class="flex-center !text-c hover:opacity-60"><span i-ic:round-keyboard-arrow-left text-xl></span></a>',4),M=l('<a class="flex-center !text-c hover:opacity-60"><span i-ic:round-keyboard-arrow-right text-xl></span></a>',4),z=s=>{const f=["Last Post","Next Post","Back to Top","Print"],[p,t]=N(0),g=()=>window.scrollTo({top:0,behavior:"smooth"}),h=()=>window.print();return(()=>{const u=i(B),r=u.firstChild,E=r.firstChild,[x,k]=d(E.nextSibling),y=x.nextSibling,[$,L]=d(y.nextSibling),S=$.nextSibling,[v,w]=d(S.nextSibling),a=v.nextSibling,c=a.nextSibling;return o(r,p&&(()=>{const n=i(C);return o(n,()=>f[p()-1]),n})(),x,k),o(r,(()=>{const n=m(()=>!!s.prev);return()=>n()&&(()=>{const e=i(I);return e.addEventListener("mouseleave",()=>t(0)),e.addEventListener("mouseenter",()=>t(1)),_(()=>b(e,"href",`/posts/${s.prev}`)),e})()})(),$,L),o(r,(()=>{const n=m(()=>!!s.next);return()=>n()&&(()=>{const e=i(M);return e.addEventListener("mouseleave",()=>t(0)),e.addEventListener("mouseenter",()=>t(2)),_(()=>b(e,"href",`/posts/${s.next}`)),e})()})(),v,w),a.addEventListener("mouseleave",()=>t(0)),a.addEventListener("mouseenter",()=>t(3)),a.$$click=g,c.addEventListener("mouseleave",()=>t(0)),c.addEventListener("mouseenter",()=>t(4)),c.$$click=h,P(),u})()};T(["click"]);export{z as TocButtons,z as default};
