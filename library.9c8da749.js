function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},t.parcelRequired7c6=a),a("brr8Z"),a("cddKH");var o=a("9B8F0");var i=e(a("amrNH")).template({1:function(e,t,n,l,a){var o,i,s=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,r="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='list-card__item film-card'>\n    <div class='film-card__thumb'>\n\n"+(null!=(o=d(n,"if").call(s,null!=t?d(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:10,column:6},end:{line:23,column:13}}}))?o:"")+"    </div>\n    <h2 class='film-card__title' data-id='"+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:c)===r?i.call(s,{name:"id",hash:{},data:a,loc:{start:{line:25,column:42},end:{line:25,column:48}}}):i)+"'>"+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:c)===r?i.call(s,{name:"original_title",hash:{},data:a,loc:{start:{line:25,column:50},end:{line:25,column:68}}}):i)+"</h2>\n    <div class='film-card__description'>\n      <ul>\n"+(null!=(o=d(n,"each").call(s,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(6,a,0),inverse:e.noop,data:a,loc:{start:{line:28,column:8},end:{line:30,column:17}}}))?o:"")+"      </ul>\n      <p class='film-card__year'>"+u(typeof(i=null!=(i=d(n,"year")||(null!=t?d(t,"year"):t))?i:c)===r?i.call(s,{name:"year",hash:{},data:a,loc:{start:{line:32,column:33},end:{line:32,column:41}}}):i)+"</p>\n      <div class='library__card-rating'>"+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:c)===r?i.call(s,{name:"vote_average",hash:{},data:a,loc:{start:{line:33,column:40},end:{line:33,column:56}}}):i)+"</div>\n    </div>\n  </li>\n"},2:function(e,t,n,l,a){var o,i=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",r=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"        <img\n          src='https://image.tmdb.org/t/p/w400"+r(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:s)===c?o.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:12,column:46},end:{line:12,column:61}}}):o)+"'\n          alt='"+r(typeof(o=null!=(o=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?o:s)===c?o.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:13,column:15},end:{line:13,column:33}}}):o)+"'\n          loading='lazy'\n          data-id='"+r(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:s)===c?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:15,column:19},end:{line:15,column:25}}}):o)+"'\n        />\n"},4:function(e,t,n,l,a){return"        <img\n          src='https://sd.keepcalms.com/i/keep-calm-poster-not-found.png'\n          alt='poster not found'\n          class='lazyload'\n        />\n"},6:function(e,t,n,l,a){var o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"          <li>"+e.escapeExpression(e.lambda(null!=t?o(t,"name"):t,t))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:36,column:9}}}))?o:""},useData:!0});var s=e(a("amrNH")).template({1:function(e,t,n,l,a){var o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression(e.lambda(null!=t?o(t,"name"):t,t))+"\n          "},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o,i,s=null!=t?t:e.nullContext||{},c=e.hooks.helperMissing,r="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"\n<div class='modal background-modal'>\n  <button type='button' class='modal_button-close'>\n   <svg class='modal-close__svg modal__button-close' width='30' height='30' viewBox='0 0 30 30'>\n      <path\n        class='modal-close__svg__path dark-theme-text'\n        d='M8 8L22 22'\n        stroke='black'\n        stroke-width='2'\n      ></path>\n      <path\n        class='modal-close__svg__path dark-theme-text'\n        d='M8 22L22 8'\n        stroke='black'\n        stroke-width='2'\n      ></path>\n    </svg>\n</button>\n  <div class='modal__img'>\n    <img\n      class='modal__poster'\n      src='https://image.tmdb.org/t/p/w500"+u(typeof(i=null!=(i=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?i:c)===r?i.call(s,{name:"poster_path",hash:{},data:a,loc:{start:{line:31,column:42},end:{line:31,column:57}}}):i)+"'\n      alt="+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:c)===r?i.call(s,{name:"original_title",hash:{},data:a,loc:{start:{line:32,column:10},end:{line:32,column:28}}}):i)+"\n      loading='lazy'\n    /></div>\n  <div class='modal__content'><h2 class='modal__title dark-theme-text'>"+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:c)===r?i.call(s,{name:"original_title",hash:{},data:a,loc:{start:{line:35,column:71},end:{line:35,column:89}}}):i)+"</h2>\n    <div class='modal__info'>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Vote / Votes</li>\n        <li class='modal__list-value-item dark-theme-text'><span\n            class='modal__list-vote dark-theme-text'\n          >"+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:c)===r?i.call(s,{name:"vote_average",hash:{},data:a,loc:{start:{line:41,column:11},end:{line:41,column:27}}}):i)+"</span>\n          /\n          <span class='modal__list-value-item dark-theme-text'>"+u(typeof(i=null!=(i=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?i:c)===r?i.call(s,{name:"vote_count",hash:{},data:a,loc:{start:{line:43,column:63},end:{line:43,column:77}}}):i)+"</span>\n        </li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Popularity</li>\n        <li class='modal__list-value-item dark-theme-text'>"+u(typeof(i=null!=(i=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?i:c)===r?i.call(s,{name:"popularity",hash:{},data:a,loc:{start:{line:48,column:59},end:{line:48,column:73}}}):i)+"</li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Original Title</li>\n        <li class='modal__list-value-item dark-theme-text'>"+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:c)===r?i.call(s,{name:"original_title",hash:{},data:a,loc:{start:{line:52,column:59},end:{line:52,column:77}}}):i)+"</li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Genre</li>\n        <li class='modal__list-value-item dark-theme-text'>"+(null!=(o=d(n,"each").call(s,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:56,column:59},end:{line:57,column:19}}}))?o:"")+"</li>\n      </ul>\n\n    </div>\n    <p class='modal__about dark-theme-text'>ABOUT</p>\n    <p class='modal__about-text dark-theme-text'>"+u(typeof(i=null!=(i=d(n,"overview")||(null!=t?d(t,"overview"):t))?i:c)===r?i.call(s,{name:"overview",hash:{},data:a,loc:{start:{line:62,column:49},end:{line:62,column:61}}}):i)+"</p>\n    <div class='modal__buttons'>\n      <button class='modal__button-watched' type='submit'>REMOVE FROM WATCHED</button>\n      <button class='modal__button-queue' type='submit'>REMOVE FROM QUEUE</button></div>\n  </div>\n\n\n</div>\n<div class='modal__backside'>\n  <button type='button' class='modal__button-backtoinfo'>Back to movie info\n    <svg\n      width='20'\n      height='20'\n      version='1.1'\n      id='Layer_1'\n      xmlns='http://www.w3.org/2000/svg'\n      xmlns:xlink='http://www.w3.org/1999/xlink'\n      x='0px'\n      y='0px'\n      viewBox='0 0 499.2 499.2'\n      style='enable-background:new 0 0 499.2 499.2;'\n      xml:space='preserve'\n    >\n      <path\n        style='fill:#4F0404;'\n        d='M489.6,229.6c-10.4,20.8-29.6,37.6-52.8,44c19.2,45.6,21.6,96.8,2.4,142.4c34.4-11.2,60-43.2,60-81.6\n\tv-68.8C499.2,253.6,495.2,241.6,489.6,229.6z'\n      ></path>\n      <path\n        style='fill:#C42014;'\n        d='M413.6,177.6h-228c-47.2,0-86.4,38.4-86.4,85.6v58.4h232l0,0h82.4c33.6,0,64,20.8,77.6,49.6\n\tc6.4-14.4,8-25.6,8-39.2v-68.8C499.2,216,460.8,177.6,413.6,177.6z'\n      ></path>\n      <polygon\n        style='fill:#EA2D28;'\n        points='123.2,249.6 219.2,153.6 219.2,30.4 0,249.6 219.2,468.8 219.2,345.6 '\n      ></polygon>\n      <polyline\n        style='fill:#C42014;'\n        points='1.6,249.6 219.2,468.8 219.2,345.6 124.8,249.6 219.2,153.6 '\n      ></polyline>\n    </svg>\n  </button>\n  <iframe\n    width='100%'\n    height='100%'\n    src='https://www.youtube.com/embed/Zq_zgig9DqQ'\n    title='YouTube video player'\n    frameborder='0'\n    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'\n    allowfullscreen\n  ></iframe>\n</div>"},useData:!0}),c=a("jqwYo"),r=a("kPX5w"),u=a("3QtWM");const d=document.querySelector(".library-gallery"),m=document.querySelector(".js-queue"),p=document.querySelector(".js-watched"),h=document.querySelector(".library-text");m.addEventListener("click",(function(e){e.preventDefault(),m.classList.add("button--accent"),p.classList.remove("button--accent"),w("queue")})),p.addEventListener("click",(function(e){e.preventDefault(),p.classList.add("button--accent"),m.classList.remove("button--accent"),w("watched")}));let _,v,f=[];let y,g,b;function w(e){if(d.innerHTML="",h.classList.remove("is-hidden"),f=c.localStorageAPI.load(e),f.length<1)return;f[0].genres.length>1&&f.map((e=>{e.genres.splice(1),e.vote_average=Number(e.vote_average.toFixed(1))})),_=(0,r.dataToYear)(f),_.length>=1&&h.classList.add("is-hidden"),d.innerHTML=i(_);document.querySelector(".film-list").addEventListener("click",k)}async function k(e){if(e.preventDefault(),"IMG"!==e.target.nodeName)return;v=e.target.dataset.id;const t=await async function(e){try{const t=await fetch(`${u.ID_URL}/${e}?api_key=${u.API_KEY}&language=en-US`),n=await t.json();return n.vote_average=Number(n.vote_average.toFixed(1)),n.popularity=Number(n.popularity.toFixed(1)),n}catch(e){}}(v);b=o.create(s(t),{onShow:e=>{},onClose:e=>{n.classList.remove("modal-open")}}),b.show(),constBtnCloseModal=document.querySelector(".modal_button-close"),constBtnCloseModal.addEventListener("click",(()=>b.close()));const n=document.querySelector("body");n.classList.add("modal-open");document.querySelector(".basicLightbox").classList.add("film-box"),y=document.querySelector(".modal__button-watched"),g=document.querySelector(".modal__button-queue"),y.classList.add("button-accent"),m.classList.contains("button--accent")&&(g.classList.add("button-accent"),y.classList.remove("button-accent")),y.addEventListener("click",x),g.addEventListener("click",L)}function x(e){if(e.preventDefault(),"modal__button-watched button-accent"===e.target.className)return E("watched"),void y.classList.remove("button-accent")}function L(e){if(e.preventDefault(),"modal__button-queue button-accent"===e.target.className)return E("queue"),void g.classList.remove("button-accent")}function E(e){b.close(),normalist=c.localStorageAPI.load(e);const t=normalist;normalist.forEach(((n,l)=>{if(n.id==v){t.splice(l,1),localStorage.removeItem(e);const n=JSON.stringify(t);return localStorage.setItem(e,n),void w(e)}}))}w("watched"),a("3hQof");
//# sourceMappingURL=library.9c8da749.js.map
