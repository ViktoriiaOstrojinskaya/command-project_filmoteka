function e(e){return e&&e.__esModule?e.default:e}var l="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},a={},t=l.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in a){var l=a[e];delete a[e];var t={id:e,exports:{}};return n[e]=t,l.call(t.exports,t,t.exports),t.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,l){a[e]=l},l.parcelRequired7c6=t);var o=e(t("amrNH")).template({1:function(e,l,n,a,t){var o,i,r=null!=l?l:e.nullContext||{},s=e.hooks.helperMissing,c="function",d=e.escapeExpression,u=e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]};return'<li class="list-card__item film-card">\n<div class="film-card__thumb">\n'+(null!=(o=u(n,"if").call(r,null!=l?u(l,"poster_path"):l,{name:"if",hash:{},fn:e.program(2,t,0),inverse:e.program(4,t,0),data:t,loc:{start:{line:4,column:8},end:{line:10,column:15}}}))?o:"")+'</div>\n    <h2 class="film-card__title" data-id="'+d(typeof(i=null!=(i=u(n,"id")||(null!=l?u(l,"id"):l))?i:s)===c?i.call(r,{name:"id",hash:{},data:t,loc:{start:{line:12,column:42},end:{line:12,column:48}}}):i)+'">'+d(typeof(i=null!=(i=u(n,"original_title")||(null!=l?u(l,"original_title"):l))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:t,loc:{start:{line:12,column:50},end:{line:12,column:68}}}):i)+'</h2>\n        <div class="film-card__description">\n        <ul>\n'+(null!=(o=u(n,"each").call(r,null!=l?u(l,"genres"):l,{name:"each",hash:{},fn:e.program(6,t,0),inverse:e.noop,data:t,loc:{start:{line:15,column:12},end:{line:17,column:21}}}))?o:"")+'        </ul>\n    <p class="film-card__year">'+d(typeof(i=null!=(i=u(n,"year")||(null!=l?u(l,"year"):l))?i:s)===c?i.call(r,{name:"year",hash:{},data:t,loc:{start:{line:19,column:31},end:{line:19,column:39}}}):i)+'</p>\n    <p class="film-card__rating visually-hidden">'+d(typeof(i=null!=(i=u(n,"vote_average")||(null!=l?u(l,"vote_average"):l))?i:s)===c?i.call(r,{name:"vote_average",hash:{},data:t,loc:{start:{line:20,column:49},end:{line:20,column:65}}}):i)+"</p>\n    </div>\n</li>\n"},2:function(e,l,n,a,t){var o,i=null!=l?l:e.nullContext||{},r=e.hooks.helperMissing,s="function",c=e.escapeExpression,d=e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]};return'        <img src="https://image.tmdb.org/t/p/w400'+c(typeof(o=null!=(o=d(n,"poster_path")||(null!=l?d(l,"poster_path"):l))?o:r)===s?o.call(i,{name:"poster_path",hash:{},data:t,loc:{start:{line:5,column:49},end:{line:5,column:64}}}):o)+'"\n            alt="'+c(typeof(o=null!=(o=d(n,"original_title")||(null!=l?d(l,"original_title"):l))?o:r)===s?o.call(i,{name:"original_title",hash:{},data:t,loc:{start:{line:6,column:17},end:{line:6,column:35}}}):o)+'" loading="lazy" data-id="'+c(typeof(o=null!=(o=d(n,"id")||(null!=l?d(l,"id"):l))?o:r)===s?o.call(i,{name:"id",hash:{},data:t,loc:{start:{line:6,column:61},end:{line:6,column:67}}}):o)+'" />\n'},4:function(e,l,n,a,t){return'        <img src="https://sd.keepcalms.com/i/keep-calm-poster-not-found.png"\n            alt="poster not found" class="lazyload" />\n'},6:function(e,l,n,a,t){var o=e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]};return"            <li>"+e.escapeExpression(e.lambda(null!=l?o(l,"name"):l,l))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,l,n,a,t){var o;return(null!=(o=(e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]})(n,"each").call(null!=l?l:e.nullContext||{},l,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t,loc:{start:{line:1,column:0},end:{line:23,column:9}}}))?o:"")+"\n"},useData:!0});var i,r=t("krGWQ");function s(e,l){return e.map((e=>{return{...e,year:(t=e,t.release_date?t.release_date.split("-")[0]:""),genres:(n=e.genre_ids,a=l,n.map((e=>a.filter((l=>l.id===e)))).slice(0,3).flat())};var n,a,t}))}function c(){const{genres:l}=e(i);return l}i=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}');var d=t("jqwYo");let u="";r.refs.form.addEventListener("submit",(function(e){m.classList.remove("done"),e.preventDefault(),page=1,u=e.target.elements.serch_film.value.trim().toLowerCase(),u.length<1||""===u?(r.refs.divError.classList.remove("visually-hidden"),r.refs.homeGallery.classList.add("visually-hidden"),r.refs.filterForm.classList.add("visually-hidden"),m.classList.add("done"),form.reset(),d.localStorageAPI.save("query-pg",u)):f(u).then((e=>{r.refs.divError.classList.add("visually-hidden"),r.refs.homeGallery.classList.remove("visually-hidden"),r.refs.filterForm.classList.remove("visually-hidden");const l=c(),n=s(e.results,l);r.refs.homeGallery.innerHTML=o(n),m.classList.add("done")}))}));const m=document.querySelector(".preloader");let p=0;async function f(e){try{const l=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=27a76f0869afd59eafccef7d6d986c20&query=${e}&language=en-US&page=1&include_adult=false&page=1`),n=await l.json();return p=n.total_pages,console.log(p),n}catch(e){}}async function _(e){try{const l=await fetch(`https://api.themoviedb.org/3/movie//${e}?api_key=27a76f0869afd59eafccef7d6d986c20&language=en-US`);return await l.json()}catch(e){}}r=t("krGWQ");(async function(){try{const e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=27a76f0869afd59eafccef7d6d986c20&page=1"),l=await e.json();return p=l.total_pages,l}catch(e){}})().then((e=>{const l=c(),n=s(e.results,l);console.log(n),r.refs.homeGallery.innerHTML=o(n)}));var h=e(t("amrNH")).template({1:function(e,l,n,a,t){var o=e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]};return e.escapeExpression(e.lambda(null!=l?o(l,"name"):l,l))+"\n          "},compiler:[8,">= 4.3.0"],main:function(e,l,n,a,t){var o,i,r=null!=l?l:e.nullContext||{},s=e.hooks.helperMissing,c="function",d=e.escapeExpression,u=e.lookupProperty||function(e,l){if(Object.prototype.hasOwnProperty.call(e,l))return e[l]};return"<div class='modal'>\n  <div class='modal__img'><img\n      class='modal__poster'\n      src='https://image.tmdb.org/t/p/w500"+d(typeof(i=null!=(i=u(n,"poster_path")||(null!=l?u(l,"poster_path"):l))?i:s)===c?i.call(r,{name:"poster_path",hash:{},data:t,loc:{start:{line:4,column:42},end:{line:4,column:57}}}):i)+"'\n      alt="+d(typeof(i=null!=(i=u(n,"original_title")||(null!=l?u(l,"original_title"):l))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:t,loc:{start:{line:5,column:10},end:{line:5,column:28}}}):i)+"\n      loading='lazy'\n    /></div>\n  <div class='modal__content'><h2 class='modal__title'>"+d(typeof(i=null!=(i=u(n,"original_title")||(null!=l?u(l,"original_title"):l))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:t,loc:{start:{line:8,column:55},end:{line:8,column:73}}}):i)+"</h2>\n    <div class='modal__info'>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Vote / Votes</li>\n        <li class='modal__list-value-item'><span\n            class='modal__list-vote'\n          >"+d(typeof(i=null!=(i=u(n,"vote_average")||(null!=l?u(l,"vote_average"):l))?i:s)===c?i.call(r,{name:"vote_average",hash:{},data:t,loc:{start:{line:14,column:11},end:{line:14,column:27}}}):i)+"</span>\n          /\n          <span class='modal__list-value-item'>"+d(typeof(i=null!=(i=u(n,"vote_count")||(null!=l?u(l,"vote_count"):l))?i:s)===c?i.call(r,{name:"vote_count",hash:{},data:t,loc:{start:{line:16,column:47},end:{line:16,column:61}}}):i)+"</span>\n        </li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Popularity</li>\n        <li class='modal__list-value-item'>"+d(typeof(i=null!=(i=u(n,"popularity")||(null!=l?u(l,"popularity"):l))?i:s)===c?i.call(r,{name:"popularity",hash:{},data:t,loc:{start:{line:21,column:43},end:{line:21,column:57}}}):i)+"</li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Original Title</li>\n        <li class='modal__list-value-item'>"+d(typeof(i=null!=(i=u(n,"original_title")||(null!=l?u(l,"original_title"):l))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:t,loc:{start:{line:25,column:43},end:{line:25,column:61}}}):i)+"</li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Genre</li>\n        <li class='modal__list-value-item'>"+(null!=(o=u(n,"each").call(r,null!=l?u(l,"genres"):l,{name:"each",hash:{},fn:e.program(1,t,0),inverse:e.noop,data:t,loc:{start:{line:29,column:43},end:{line:30,column:19}}}))?o:"")+"</li>\n      </ul>\n\n    </div>\n    <p class='modal__about'>ABOUT</p>\n    <p class='modal__about-text'>"+d(typeof(i=null!=(i=u(n,"overview")||(null!=l?u(l,"overview"):l))?i:s)===c?i.call(r,{name:"overview",hash:{},data:t,loc:{start:{line:35,column:33},end:{line:35,column:45}}}):i)+"</p>\n    <div class='modal__buttons'>\n      <button class='modal__button--watched' type='submit'>ADD TO WATCHED</button>\n      <button class='modal__button--queue' type='submit'>ADD TO QUEUE</button></div>\n  </div>\n  <button type='button' class='modal__button-close'></button>\n</div>"},useData:!0});r=t("krGWQ"),d=t("jqwYo");document.querySelector(".list-card__item");let y;function v(){document.body.classList.remove("modal-open"),r.refs.filmBox.classList.add("visually-hidden"),document.body.removeEventListener("click",g),document.body.removeEventListener("keydown",b)}function g(e){"modal__button--watched"===e.target.className&&d.localStorageAPI.pushWatched("watched",y),"modal__button--queue"===e.target.className&&d.localStorageAPI.pushQueue("queue",y),e.target===r.refs.filmBox&&v()}function b(e){"Escape"===e.code&&v()}r.refs.homeGallery.addEventListener("click",(async function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName&&"H2"!==e.target.nodeName)return;movieId=e.target.dataset.id,_(movieId).then((e=>{y=e,r.refs.filmBox.innerHTML=h(e),function(){const e=document.querySelector(".modal__button-close");document.body.addEventListener("keydown",b),document.body.classList.add("modal-open"),r.refs.filmBox.classList.remove("visually-hidden"),document.body.addEventListener("click",g),e.addEventListener("click",v)}()}))})),t("brr8Z"),t("cddKH"),t("jqwYo");
//# sourceMappingURL=index.79fc6071.js.map
