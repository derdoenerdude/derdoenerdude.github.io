import{r as h,v as A,n as I,d as v,a as b,o as d,c as f,b as N,w as g,e as y,f as u,t as k,u as w,g as _,h as j,i as E,j as C,k as W,l as V}from"./vendor.f0cec67e.js";const D=function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const t of o.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&n(t)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};D();function T(r={}){const{immediate:a=!1,onNeedRefresh:s,onOfflineReady:n,onRegistered:e,onRegisterError:o}=r;let t,i;const m=async(l=!0)=>{l&&(t==null||t.addEventListener("controlling",O=>{O.isUpdate&&window.location.reload()})),i&&i.waiting&&await I(i.waiting,{type:"SKIP_WAITING"})};if("serviceWorker"in navigator){t=new A("/sw.js",{scope:"/"}),t.addEventListener("activated",l=>{l.isUpdate||n==null||n()});{const l=()=>{s==null||s()};t.addEventListener("waiting",l),t.addEventListener("externalwaiting",l)}t.register({immediate:a}).then(l=>{i=l,e==null||e(l)}).catch(l=>{o==null||o(l)})}return m}function B(r={}){const{immediate:a=!0,onNeedRefresh:s,onOfflineReady:n,onRegistered:e,onRegisterError:o}=r,t=h(!1),i=h(!1);return{updateServiceWorker:T({immediate:a,onNeedRefresh(){t.value=!0,s==null||s()},onOfflineReady(){i.value=!0,n==null||n()},onRegistered:e,onRegisterError:o}),offlineReady:i,needRefresh:t}}var x=(r,a)=>{const s=r.__vccOpts||r;for(const[n,e]of a)s[n]=e;return s};const H=v({name:"Button",props:{to:{type:String,default:null},href:{type:String,default:null},text:{type:String,default:null}}}),M={class:"border-1 hover:border-gray-300 dark:border-gray-400 dark:hover:border-gray-500 rounded p-2 flex justify-center cursor-pointer"},F=["href"],q={key:2,type:"button"};function K(r,a,s,n,e,o){const t=b("router-link");return d(),f("div",M,[r.to?(d(),N(t,{key:0,class:"flex items-center",to:{name:r.to},replace:""},{default:g(()=>[y(r.$slots,"default",{},()=>[u("span",null,k(r.text),1)])]),_:3},8,["to"])):r.href?(d(),f("a",{key:1,href:r.href,target:"_blank",rel:"noopener noreferrer",class:"flex items-center"},[y(r.$slots,"default",{},()=>[u("span",null,k(r.text),1)])],8,F)):(d(),f("button",q,[y(r.$slots,"default",{},()=>[u("span",null,k(r.text),1)])]))])}var R=x(H,[["render",K]]);const U={key:0,class:"fixed left-0 right-0 bottom-0 mx-2 mb-2 flex flex-col rounded-md p-4 items-center justify-center bg-white border-1 border-gray-200 shadow-xl z-20 md:transform md:-translate-x-1/2 md:right-auto md:left-1/2 md:w-96 dark:bg-dark-400 dark:text-gray-300 dark:border-dark-800",role:"alert"},z=u("div",{class:"mb-2 text-xl"},[u("span",null,"Eine neue Version ist verf\xFCgbar.")],-1),G={class:"flex flex-row w-full gap-x-4 justify-center"},J=E("Installieren"),Q=E("Abbrechen"),$=v({setup(r){const{needRefresh:a,updateServiceWorker:s}=B(),n=async()=>{a.value=!1};return(e,o)=>w(a)?(d(),f("div",U,[z,u("div",G,[_(R,{type:"button",onClick:o[0]||(o[0]=t=>w(s)(!0))},{default:g(()=>[J]),_:1}),_(R,{type:"button",onClick:n},{default:g(()=>[Q]),_:1})])])):j("",!0)}});function L(r){r?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")}const c=h(),X=()=>c.value!==void 0?c:window.matchMedia?(c.value=window.matchMedia("(prefers-color-scheme: dark)").matches,L(c.value),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",r=>{c.value=r.matches,L(c.value)}),c):(c.value=!1,c);const Y=v({name:"App",components:{ReloadPrompt:$},setup(){return X(),{}}}),Z={class:"app flex flex-col m-auto w-full h-full bg-gray-100 dark:bg-dark-400 dark:text-gray-300"};function ee(r,a,s,n,e,o){const t=b("router-view"),i=$;return d(),f("div",Z,[_(t),_(i)])}var te=x(Y,[["render",ee],["__scopeId","data-v-194c3974"]]);const re="modulepreload",S={},oe="/",p=function(a,s){return!s||s.length===0?a():Promise.all(s.map(n=>{if(n=`${oe}${n}`,n in S)return;S[n]=!0;const e=n.endsWith(".css"),o=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${n}"]${o}`))return;const t=document.createElement("link");if(t.rel=e?"stylesheet":re,e||(t.as="script",t.crossOrigin=""),t.href=n,document.head.appendChild(t),e)return new Promise((i,m)=>{t.addEventListener("load",i),t.addEventListener("error",m)})})).then(()=>a())},ne=[{path:"/",name:"home",component:()=>p(()=>import("./Home.7325c066.js"),["assets/Home.7325c066.js","assets/Home.9970cdbf.css","assets/vendor.f0cec67e.js"])},{path:"/map/:markerType/:markerId",name:"map-marker",component:()=>p(()=>import("./Home.7325c066.js"),["assets/Home.7325c066.js","assets/Home.9970cdbf.css","assets/vendor.f0cec67e.js"]),props:!0},{path:"/search",name:"search",component:()=>p(()=>import("./Home.7325c066.js"),["assets/Home.7325c066.js","assets/Home.9970cdbf.css","assets/vendor.f0cec67e.js"]),props:!0},{path:"/about",name:"about",component:()=>p(()=>import("./Home.7325c066.js"),["assets/Home.7325c066.js","assets/Home.9970cdbf.css","assets/vendor.f0cec67e.js"]),props:!0},{path:"/:pathMatch(.*)*",name:"not-found",component:()=>p(()=>import("./NotFound.266d3bc1.js"),["assets/NotFound.266d3bc1.js","assets/vendor.f0cec67e.js"])}],se=C({history:W(),routes:ne}),P=V(te);P.use(se);P.mount("#app");export{x as _,R as a,X as u};
