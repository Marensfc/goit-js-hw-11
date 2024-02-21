import{S as m,i as c}from"./assets/vendor-5b791d57.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();class u{constructor(i){this.BASE_URL="https://pixabay.com",this.ENDPOINT="/api/",this.KEY="key=42471766-4e6ef41ee0191e88bcacb27c7",this.parameters={q:`&q=${i}`,image_type:"&image_type=photo",orientation:"&orientation=horizontal",safesearch:"&safesearch=true"},this.PARAMS="";for(const a of Object.values(this.parameters))this.PARAMS+=a;const r=`${this.BASE_URL}${this.ENDPOINT}?${this.KEY}${this.PARAMS}`;this.URL=r}getImages(){return fetch(this.URL).then(i=>i.json())}}function p(t){return`<li class="gallery-card">
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
</li>`}function f(t){const r=t.map(a=>p(a)).join("");h(r)}function h(t){o.gallery.insertAdjacentHTML("afterbegin",t)}const n={message:"The search field must be filled!",messageColor:"white",backgroundColor:"red",close:!1,position:"topRight",progressBar:!1,animateInside:!1,timeout:3e3},o={form:document.querySelector(".form"),inputSearch:document.querySelector('[type="search"]'),searchButton:document.querySelector('[type="submit"]'),gallery:document.querySelector(".gallery")};o.form.addEventListener("submit",g);function g(t){t.preventDefault();const i=o.inputSearch.value.trim(),r=i.split(" ").join("+");i!==""?new u(r).getImages().then(e=>{e.hits.length!==0?(o.gallery.innerHTML="",f(e.hits),new m(".gallery a",{captionSelector:"img",captionsData:"alt",captionDelay:250}).on("show.simplelightbox"),o.form.reset()):c.show({...n,message:"Sorry, there are no images matching your search query. Please try again!"})}).finally(()=>{o.form.reset()}):c.show(n)}
//# sourceMappingURL=commonHelpers.js.map
