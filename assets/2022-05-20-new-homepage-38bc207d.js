import{_ as t,B as a,o,m as n,C as r}from"./app-62faa599.js";const i={class:"prose prose-lg m-auto text-left"},s=r('<p>It seems that I always spend a lot of time on building my homepage.</p><p>My first homepage (or blog) was built with <a href="https://jekyllrb.com/" target="_blank" rel="noopener">Jekyll</a> in 2018. I wrote a <a href="https://github.com/Renovamen/jekyll-theme-gungnir" target="_blank" rel="noopener">theme</a> named Gungnir for it, since I found out none of the existing Jekyll themes are good enough for me. At that time, I knew almost nothing about FE and struggled a lot with JavaScript, CSS and the <a href="https://shopify.github.io/liquid/" target="_blank" rel="noopener">Liquid</a> templating language, leading to messy code that is difficult to maintain. In 2020, I migrated <a href="https://github.com/Renovamen/vuepress-theme-gungnir/tree/v0" target="_blank" rel="noopener">Gungnir</a> to <a href="https://vuepress.vuejs.org" target="_blank" rel="noopener">VuePress</a>, a more powerful static website generator. And last year, I rewrote the <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank" rel="noopener">theme</a> in <a href="https://v2.vuepress.vuejs.org" target="_blank" rel="noopener">VuePress 2</a> to take advantage of Vue 3 and Vite, which is still actively maintained.</p><p>Yeah, it took me so much time to develop my own blog themes that I almost forgot about writing the blog lol.</p><p>These days, again, I turned to another new homepage, which I hope is the last one (before I begin to be fed up with it again in about 2-3 years).</p><h2 id="style" tabindex="-1">Style <a class="header-anchor" href="#style" aria-hidden="true">#</a></h2><p>I want my homepage to be more “research” and “serious”. My <a href="https://blog.zxh.io" target="_blank" rel="noopener">old homepage</a> looks more like a blog with a bunch of fancy images rather than a “reacher’s homepage”. Meanwhile, I wearied of looking for cover images for posts and became obsessed with simple website designs.</p><p>I don’t want to modify my blog theme directly since I still love its style and it already has a certain number of users. Thus I wrote a new one.</p><h2 id="tech-stack" tabindex="-1">Tech stack <a class="header-anchor" href="#tech-stack" aria-hidden="true">#</a></h2><p>Gradually I found I got so caught up with atomic CSS frameworks like <a href="https://tailwindcss.com/" target="_blank" rel="noopener">Tailwind CSS</a>, <a href="https://windicss.org/" target="_blank" rel="noopener">Windi CSS</a> and <a href="https://github.com/antfu/unocss" target="_blank" rel="noopener">UnoCSS</a>. I’m using UnoCSS in almost all of my recent projects and I can say that I never want to write semantic class names and regular CSS anymore. Actually I was even thinking about applying UnoCSS on VuePress blog theme <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank" rel="noopener">Gungnir</a>, but it sounds a heavy work and I’m not sure if it is a right choice. But starting a new site with UnoCSS could be much eaiser - that’s what I’m doing.</p><p>I built my new homepage on top of <a href="https://github.com/antfu/vitesse" target="_blank" rel="noopener">Vitesse</a>. With the power of <a href="https://github.com/antfu/vite-ssg" target="_blank" rel="noopener">vite-ssg</a> and several <a href="https://github.com/vitejs/vite" target="_blank" rel="noopener">Vite</a> plugins like <a href="https://github.com/hannoeru/vite-plugin-pages" target="_blank" rel="noopener">vite-plugin-pages</a>, <a href="https://github.com/JohnCampionJr/vite-plugin-vue-layouts" target="_blank" rel="noopener">vite-plugin-vue-layouts</a> and <a href="https://github.com/antfu/vite-plugin-md" target="_blank" rel="noopener">vite-plugin-md</a>, a personal website with a blog section can now be done in a really short time. For me, this solution is lightweight and fast, making the development experience smooth and sweet. If you just want a simple personal website or blog and don’t care about maintaining a theme, I guess Vitesse could be a nice choice.</p><hr><p>Anyway, this is site is still WIP, hoping to see what it will eventually become.</p>',12),h=[s],b="New homepage",f=[{property:"og:title",content:"New homepage"}],l={__name:"2022-05-20-new-homepage",setup(g,{expose:e}){return e({frontmatter:{title:"New homepage",meta:[{property:"og:title",content:"New homepage"}]}}),a({title:"New homepage",meta:[{property:"og:title",content:"New homepage"}]}),(u,c)=>(o(),n("div",i,h))}},w=t(l,[["__file","/home/runner/work/renovamen.github.io/renovamen.github.io/pages/posts/2022-05-20-new-homepage.md"]]);export{w as default,f as meta,b as title};
