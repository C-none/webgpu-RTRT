(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function c(){try{if(!navigator.gpu)throw new Error("Not support WebGPU");const t=await navigator.gpu.requestAdapter();if(!t)throw new Error("No adapter found");console.log(t),t.features.forEach(n=>{console.log(n)}),document.body.innerHTML="<h1>Hello WebGPU</h1>";let o;for(o in t.limits)document.body.innerHTML+=`<p>${o}:${t.limits[o]}</p>`}catch(t){document.body.innerHTML=`<h1>${t.message}</h1>`}}c();
