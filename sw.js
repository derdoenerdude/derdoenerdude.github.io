if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,o)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let l={};const t=e=>i(e,r),d={module:{uri:r},exports:l,require:t};s[r]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(o(...e),l)))}}define(["./workbox-74eda642"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"404.html",revision:"9829327e2b372c7b6b5b288e1f4bc28b"},{url:"assets/Home.0385eaa8.js",revision:null},{url:"assets/Home.315dd09b.css",revision:null},{url:"assets/index.54f19299.js",revision:null},{url:"assets/index.74118a7e.css",revision:null},{url:"assets/NotFound.6c6a4930.js",revision:null},{url:"assets/workbox-window.prod.es5.6954f450.js",revision:null},{url:"index.html",revision:"1c2d3c0de7563ca317a1e4a972fb9799"},{url:"favicon.ico",revision:"d6a5a38e36f2405f498844fcae86fae3"},{url:"img/icons/android-icon-144x144.png",revision:"8cd54fa9828ffe3b83d8343f674dd414"},{url:"img/icons/maskable_icon_x128.png",revision:"a96e239f25575b1d596411e56182a722"},{url:"manifest.webmanifest",revision:"5ad0194837d694da26bf5c52e1ccdee2"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
