import{a as d,s as y,i as n}from"./assets/vendor-D4wPjL-h.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function l(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const f="49170248-1681c7614cb0540d906e8c034",m="https://pixabay.com/api/";async function g(s){try{return(await d.get(m,{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}})).data.hits}catch(r){console.error("Ошибка:",r)}}const h=document.querySelector(".gallery");let b=new y(".gallery a",{captionsData:"alt",daptionDelay:250});function L(s){if(!s||s.length===0){n.warning({title:"oops",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}const r=s.map(t=>`
    <li class="gallery-item">
    <a href="${t.largeImgURL}">
    <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy"/>
    </a>
    <div class="info">
    <p><b>Likes:</b>${t.likes}</p>
    <p><b>Views:</b>${t.views}</p>
    <p><b>Comments:</b>${t.comments}</p>
    <p><b>Downloads:</b>${t.downloads}</p>
    </div>
    </li>
    `).join("");h.innerHTML=r,b.refresh()}const c=document.querySelector(".form"),u=document.querySelector("#search-input"),i=document.querySelector("#loader"),p=document.querySelector(".gallery");(!c||!u||!i||!p)&&console.error("Error");i.style.display="none";c.addEventListener("submit",async s=>{s.preventDefault();const r=u.value.trim();if(!r){n.error({title:"error",message:"Enter a search query",position:"topRight"});return}p.innerHTML="",i.style.display="block";try{const t=await g(r);if(!t||t.length===0){n.warning({title:"No Results",message:"No images found",position:"topRight"});return}L(t)}catch{n.error({title:"Error",message:"Failed to fetch images. Try again.",position:"topRight"})}finally{i.style.display="none"}});
//# sourceMappingURL=index.js.map
