import{S as m,i as c}from"./assets/vendor-5b791d57.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();class u{constructor(r){this.BASE_URL="https://pixabay.com",this.ENDPOINT="/api/",this.KEY="key=42471766-4e6ef41ee0191e88bcacb27c7",this.parameters={q:`&q=${r}`,image_type:"&image_type=photo",orientation:"&orientation=horizontal",safesearch:"&safesearch=true"},this.PARAMS="";for(const a of Object.values(this.parameters))this.PARAMS+=a;const o=`${this.BASE_URL}${this.ENDPOINT}?${this.KEY}${this.PARAMS}`;this.URL=o}getImages(){return fetch(this.URL).then(r=>r.json())}}const p=document.querySelector(".gallery");function d(t){return`<li class="gallery-card">
  <div class="gallery-card-wrapper">
    <div class="thumb">
      <a href="${t.largeImageURL}" class="gallery-link-image"><img class="gallery-img" src="${t.webformatURL}" data-original-size="${t.largeImageURL}" alt="${t.tags}" /></a>
    </div>
    <ul class="statistic-list">
      <li class="statistic-item">
        <p class="statistic-name">Likes</p>
        <p class="statistic-numbers">${t.likes}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-name">Views</p>
        <p class="statistic-numbers">${t.views}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-name">Comments</p>
        <p class="statistic-numbers">${t.comments}</p>
      </li>
      <li class="statistic-item">
        <p class="statistic-name">Downloads</p>
        <p class="statistic-numbers">${t.downloads}</p>
      </li>
    </ul>
  </div>
</li>`}function h(t){const o=t.map(a=>d(a)).join("");f(o)}function f(t){p.insertAdjacentHTML("afterbegin",t)}const n={message:"The search field must be filled!",messageColor:"white",backgroundColor:"red",close:!1,position:"topRight",progressBar:!1,animateInside:!1,timeout:3e3},i={form:document.querySelector(".form"),inputSearch:document.querySelector('[type="search"]'),searchButton:document.querySelector('[type="submit"]'),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.form.addEventListener("submit",g);function g(t){t.preventDefault(),i.gallery.innerHTML="",i.loader.classList.remove("hidden");const r=i.inputSearch.value.trim(),o=r.split(" ").join("+");if(r!==""){const a=new u(o);i.loader.classList.remove("hidden"),a.getImages().then(e=>{if(e.hits.length!==0){h(e.hits);let s=new m(".gallery a",{captionSelector:"img",captionsData:"alt",captionDelay:250});s.on("show.simplelightbox"),s.refresh(),i.form.reset()}else c.show({...n,message:"Sorry, there are no images matching your search query. Please try again!"})}).catch(e=>{console.log(e)}).finally(()=>{i.loader.classList.add("hidden"),i.form.reset()})}else i.loader.classList.add("hidden"),c.show(n)}
//# sourceMappingURL=commonHelpers.js.map
