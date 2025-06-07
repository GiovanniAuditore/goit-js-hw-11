import{a as m,S as p,i as a}from"./assets/vendor-Ms93UICv.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="50728089-41b308bdec84da4d1a4e6886f",g="https://pixabay.com/api/";async function h(o){return(await m.get(g,{params:{key:y,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}let b=new p(".gallery a");const c=document.querySelector(".gallery"),l=document.querySelector(".loader");function L(o){console.log("⛳ Rendering images:",o);const t=o.map(({webformatURL:s,largeImageURL:i,tags:e,likes:r,views:n,comments:d,downloads:f})=>`<li class="gallery-item">
          <a href="${i}">
            <img src="${s}" alt="${e}" />
          </a>
          <div class="info">
            <p><b>Likes:</b> ${r}</p>
            <p><b>Views:</b> ${n}</p>
            <p><b>Comments:</b> ${d}</p>
            <p><b>Downloads:</b> ${f}</p>
          </div>
        </li>`).join("");c.insertAdjacentHTML("beforeend",t),b.refresh()}function S(){c.innerHTML=""}function v(){l.classList.remove("is-hidden")}function w(){l.classList.add("is-hidden")}const u=document.querySelector(".form"),q=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async o=>{o.preventDefault();const t=q.value.trim();if(!t){a.warning({message:"Please enter a search term!"});return}S(),v();try{const s=await h(t);s.hits.length===0?a.info({message:"Sorry, no images match your search."}):L(s.hits)}catch{a.error({message:"Error fetching images."})}finally{w()}});
//# sourceMappingURL=index.js.map
