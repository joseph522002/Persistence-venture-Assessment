if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let o={};const l=e=>r(e,t),c={module:{uri:t},exports:o,require:l};s[t]=Promise.all(i.map((e=>c[e]||l(e)))).then((e=>(n(...e),o)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/js/index-B6Ctmj7B.js",revision:null},{url:"assets/js/react-vendor-_tvB39C0.js",revision:null},{url:"assets/js/router-vendor-C7V8s_LS.js",revision:null},{url:"index.html",revision:"9e557cd706b168c192d5585cb2280510"},{url:"registerSW.js",revision:"b83ccc9f9a9c4a72a813970bbcf9c3bb"},{url:"manifest.webmanifest",revision:"22601de290d735049763f8091d6ac05d"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
