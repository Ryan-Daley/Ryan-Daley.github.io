import{d as T,c as N,g as o,a as d,i as a,b as v,e as _,r as P,s as b,t as l}from"./web.e1e97fab.js";const B=l('<div class="table-of-contents-btns fixed z-20"><div hstack justify-end pt-18 pb-2 bg-c><!#><!/><!#><!/><!#><!/><button flex-center hover:opacity-60><span i-ic:round-keyboard-arrow-up text-xl></span></button><button class="flex-center hover:opacity-60 ml-1.5"><span i-mi:print text-sm>'),C=l('<span text="sm c-light" italic mr-3>'),I=l('<a class="flex-center !text-c hover:opacity-60"><span i-ic:round-keyboard-arrow-left text-xl>'),M=l('<a class="flex-center !text-c hover:opacity-60"><span i-ic:round-keyboard-arrow-right text-xl>'),z=s=>{const f=["Last Post","Next Post","Back to Top","Print"],[x,t]=N(0),g=()=>window.scrollTo({top:0,behavior:"smooth"}),h=()=>window.print();return(()=>{const $=o(B),r=$.firstChild,E=r.firstChild,[p,k]=d(E.nextSibling),y=p.nextSibling,[u,L]=d(y.nextSibling),S=u.nextSibling,[m,w]=d(S.nextSibling),i=m.nextSibling,c=i.nextSibling;return a(r,x&&(()=>{const n=o(C);return a(n,()=>f[x()-1]),n})(),p,k),a(r,(()=>{const n=v(()=>!!s.prev);return()=>n()&&(()=>{const e=o(I);return e.addEventListener("mouseleave",()=>t(0)),e.addEventListener("mouseenter",()=>t(1)),_(()=>b(e,"href",`/posts/${s.prev}`)),e})()})(),u,L),a(r,(()=>{const n=v(()=>!!s.next);return()=>n()&&(()=>{const e=o(M);return e.addEventListener("mouseleave",()=>t(0)),e.addEventListener("mouseenter",()=>t(2)),_(()=>b(e,"href",`/posts/${s.next}`)),e})()})(),m,w),i.addEventListener("mouseleave",()=>t(0)),i.addEventListener("mouseenter",()=>t(3)),i.$$click=g,c.addEventListener("mouseleave",()=>t(0)),c.addEventListener("mouseenter",()=>t(4)),c.$$click=h,P(),$})()};T(["click"]);export{z as default};