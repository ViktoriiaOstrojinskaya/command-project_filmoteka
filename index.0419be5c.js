function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},l={},a=t.parcelRequired7c6;null==a&&((a=function(e){if(e in n)return n[e].exports;if(e in l){var t=l[e];delete l[e];var a={id:e,exports:{}};return n[e]=a,t.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){l[e]=t},t.parcelRequired7c6=a);var o=e(a("amrNH")).template({1:function(e,t,n,l,a){var o,i,r=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"  <li class='list-card__item film-card'>\n    <div class='film-card__thumb'>\n\n      <button\n        class='button__trailer'\n        aria-label='watch the trailer'\n        data-id='"+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:s)===c?i.call(r,{name:"id",hash:{},data:a,loc:{start:{line:8,column:17},end:{line:8,column:23}}}):i)+"'\n      >Trailer</button>\n\n"+(null!=(o=d(n,"if").call(r,null!=t?d(t,"poster_path"):t,{name:"if",hash:{},fn:e.program(2,a,0),inverse:e.program(4,a,0),data:a,loc:{start:{line:11,column:6},end:{line:24,column:13}}}))?o:"")+"    </div>\n    <h2 class='film-card__title' data-id='"+u(typeof(i=null!=(i=d(n,"id")||(null!=t?d(t,"id"):t))?i:s)===c?i.call(r,{name:"id",hash:{},data:a,loc:{start:{line:26,column:42},end:{line:26,column:48}}}):i)+"'>"+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:a,loc:{start:{line:26,column:50},end:{line:26,column:68}}}):i)+"</h2>\n    <div class='film-card__description'>\n      <ul>\n"+(null!=(o=d(n,"each").call(r,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(6,a,0),inverse:e.noop,data:a,loc:{start:{line:29,column:8},end:{line:31,column:17}}}))?o:"")+"      </ul>\n      <p class='film-card__year'>"+u(typeof(i=null!=(i=d(n,"year")||(null!=t?d(t,"year"):t))?i:s)===c?i.call(r,{name:"year",hash:{},data:a,loc:{start:{line:33,column:33},end:{line:33,column:41}}}):i)+"</p>\n      <p class='film-card__rating visually-hidden'>"+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:s)===c?i.call(r,{name:"vote_average",hash:{},data:a,loc:{start:{line:34,column:51},end:{line:34,column:67}}}):i)+"</p>\n    </div>\n  </li>\n"},2:function(e,t,n,l,a){var o,i=null!=t?t:e.nullContext||{},r=e.hooks.helperMissing,s="function",c=e.escapeExpression,u=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"        <img\n          src='https://image.tmdb.org/t/p/w400"+c(typeof(o=null!=(o=u(n,"poster_path")||(null!=t?u(t,"poster_path"):t))?o:r)===s?o.call(i,{name:"poster_path",hash:{},data:a,loc:{start:{line:13,column:46},end:{line:13,column:61}}}):o)+"'\n          alt='"+c(typeof(o=null!=(o=u(n,"original_title")||(null!=t?u(t,"original_title"):t))?o:r)===s?o.call(i,{name:"original_title",hash:{},data:a,loc:{start:{line:14,column:15},end:{line:14,column:33}}}):o)+"'\n          loading='lazy'\n          data-id='"+c(typeof(o=null!=(o=u(n,"id")||(null!=t?u(t,"id"):t))?o:r)===s?o.call(i,{name:"id",hash:{},data:a,loc:{start:{line:16,column:19},end:{line:16,column:25}}}):o)+"'\n        />\n"},4:function(e,t,n,l,a){return"        <img\n          src='https://sd.keepcalms.com/i/keep-calm-poster-not-found.png'\n          alt='poster not found'\n          class='lazyload'\n        />\n"},6:function(e,t,n,l,a){var o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return"          <li>"+e.escapeExpression(e.lambda(null!=t?o(t,"name"):t,t))+"</li>\n"},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o;return null!=(o=(e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]})(n,"each").call(null!=t?t:e.nullContext||{},t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:1,column:0},end:{line:37,column:9}}}))?o:""},useData:!0});var i=a("krGWQ"),r=a("kPX5w"),s=a("jqwYo");let c="";i.refs.form.addEventListener("submit",(function(e){u.classList.remove("done"),e.preventDefault(),c=e.target.elements.serch_film.value.trim().toLowerCase(),c.length<1||""===c?(i.refs.divError.classList.remove("visually-hidden"),i.refs.homeGallery.classList.add("visually-hidden"),i.refs.filterForm.classList.add("visually-hidden"),u.classList.add("done"),i.refs.form.reset(),s.localStorageAPI.save("query-pg",c)):p(c).then((e=>{i.refs.form.reset(),i.refs.divError.classList.add("visually-hidden"),i.refs.homeGallery.classList.remove("visually-hidden"),i.refs.filterForm.classList.remove("visually-hidden");const t=(0,r.getGenres)(),n=e.results,l=(0,r.dataRevize)(n,t);i.refs.homeGallery.innerHTML=o(l),s.localStorageAPI.save("query-pg",c),u.classList.add("done")}))}));const u=document.querySelector(".preloader"),d=document.querySelector(".to_main__link");d&&d.addEventListener("click",(e=>{u.classList.remove("done"),page=1,s.localStorageAPI.save("page-pg",page)})),i.refs.logo.addEventListener("click",(function(e){u.classList.remove("done"),amountOfPages=1e3,page=1,genre="",year="",query="",sort="",s.localStorageAPI.save("page-pg",page),s.localStorageAPI.save("genre-pg",""),s.localStorageAPI.save("year-pg",""),s.localStorageAPI.save("total-pages",1e3),s.localStorageAPI.save("query-pg",""),s.localStorageAPI.save("sort-pg","")})),i.refs.home.addEventListener("click",(function(e){u.classList.remove("done")}));let m=0;async function p(e){try{const t=await fetch(`https://api.themoviedb.org/3/search/movie?api_key=27a76f0869afd59eafccef7d6d986c20&query=${e}&language=en-US&page=1&include_adult=false&page=1`),n=await t.json();return m=n.total_pages,console.log(m),n}catch(e){}}async function f(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie//${e}?api_key=27a76f0869afd59eafccef7d6d986c20&language=en-US`);return await t.json()}catch(e){}}async function h(e){try{const t=await fetch(`https://api.themoviedb.org/3/movie//${e}/videos?api_key=27a76f0869afd59eafccef7d6d986c20&language=en-US`),n=await t.json();return console.log("resp :>> ",n.results[0].key),n.results[0].key}catch(e){}}i=a("krGWQ"),r=a("kPX5w");(async function(){try{const e=await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=27a76f0869afd59eafccef7d6d986c20&page=1"),t=await e.json();return m=t.total_pages,t}catch(e){}})().then((e=>{const t=(0,r.getGenres)(),n=e.results,l=(0,r.dataRevize)(n,t);console.log(l),i.refs.homeGallery.innerHTML=o(l)}));var v=e(a("amrNH")).template({1:function(e,t,n,l,a){var o=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return e.escapeExpression(e.lambda(null!=t?o(t,"name"):t,t))+"\n          "},compiler:[8,">= 4.3.0"],main:function(e,t,n,l,a){var o,i,r=null!=t?t:e.nullContext||{},s=e.hooks.helperMissing,c="function",u=e.escapeExpression,d=e.lookupProperty||function(e,t){if(Object.prototype.hasOwnProperty.call(e,t))return e[t]};return'<div class=\'modal\'>\n  <div class=\'modal__img\'><button type="button" class="modal__button-rotate"><svg width="30" height="30" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 461.001 461.001" style="enable-background:new 0 0 461.001 461.001;" xml:space="preserve">\n<g>\n\t<path style="fill:#F61C0D;" d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728\n\t\tc0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137\n\t\tC461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607\n\t\tc0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>\n</g>\n</svg> Watch trailer</button><img\n      class=\'modal__poster\'\n      src=\'https://image.tmdb.org/t/p/w500'+u(typeof(i=null!=(i=d(n,"poster_path")||(null!=t?d(t,"poster_path"):t))?i:s)===c?i.call(r,{name:"poster_path",hash:{},data:a,loc:{start:{line:12,column:42},end:{line:12,column:57}}}):i)+"'\n      alt="+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:a,loc:{start:{line:13,column:10},end:{line:13,column:28}}}):i)+"\n      loading='lazy'\n    /></div>\n  <div class='modal__content'><h2 class='modal__title'>"+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:a,loc:{start:{line:16,column:55},end:{line:16,column:73}}}):i)+"</h2>\n    <div class='modal__info'>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Vote / Votes</li>\n        <li class='modal__list-value-item'><span\n            class='modal__list-vote'\n          >"+u(typeof(i=null!=(i=d(n,"vote_average")||(null!=t?d(t,"vote_average"):t))?i:s)===c?i.call(r,{name:"vote_average",hash:{},data:a,loc:{start:{line:22,column:11},end:{line:22,column:27}}}):i)+"</span>\n          /\n          <span class='modal__list-value-item'>"+u(typeof(i=null!=(i=d(n,"vote_count")||(null!=t?d(t,"vote_count"):t))?i:s)===c?i.call(r,{name:"vote_count",hash:{},data:a,loc:{start:{line:24,column:47},end:{line:24,column:61}}}):i)+"</span>\n        </li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Popularity</li>\n        <li class='modal__list-value-item'>"+u(typeof(i=null!=(i=d(n,"popularity")||(null!=t?d(t,"popularity"):t))?i:s)===c?i.call(r,{name:"popularity",hash:{},data:a,loc:{start:{line:29,column:43},end:{line:29,column:57}}}):i)+"</li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Original Title</li>\n        <li class='modal__list-value-item'>"+u(typeof(i=null!=(i=d(n,"original_title")||(null!=t?d(t,"original_title"):t))?i:s)===c?i.call(r,{name:"original_title",hash:{},data:a,loc:{start:{line:33,column:43},end:{line:33,column:61}}}):i)+"</li>\n      </ul>\n      <ul class='modal__list-key'>\n        <li class='modal__list-key-item'>Genre</li>\n        <li class='modal__list-value-item'>"+(null!=(o=d(n,"each").call(r,null!=t?d(t,"genres"):t,{name:"each",hash:{},fn:e.program(1,a,0),inverse:e.noop,data:a,loc:{start:{line:37,column:43},end:{line:38,column:19}}}))?o:"")+"</li>\n      </ul>\n\n    </div>\n    <p class='modal__about'>ABOUT</p>\n    <p class='modal__about-text'>"+u(typeof(i=null!=(i=d(n,"overview")||(null!=t?d(t,"overview"):t))?i:s)===c?i.call(r,{name:"overview",hash:{},data:a,loc:{start:{line:43,column:33},end:{line:43,column:45}}}):i)+'</p>\n    <div class=\'modal__buttons\'>\n      <button class=\'modal__button--watched\' type=\'submit\'>ADD TO WATCHED</button>\n      <button class=\'modal__button--queue\' type=\'submit\'>ADD TO QUEUE</button></div>\n  </div>\n \n  <button type=\'button\' class=\'modal__button-close\'></button>\n  \n  \n</div>\n <div class="modal__backside">\n    <button type="button" class="modal__button-backtoinfo">Back to movie info\n<svg width="20" height="20" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"\n\t viewBox="0 0 499.2 499.2" style="enable-background:new 0 0 499.2 499.2;" xml:space="preserve">\n<path style="fill:#4F0404;" d="M489.6,229.6c-10.4,20.8-29.6,37.6-52.8,44c19.2,45.6,21.6,96.8,2.4,142.4c34.4-11.2,60-43.2,60-81.6\n\tv-68.8C499.2,253.6,495.2,241.6,489.6,229.6z"/>\n<path style="fill:#C42014;" d="M413.6,177.6h-228c-47.2,0-86.4,38.4-86.4,85.6v58.4h232l0,0h82.4c33.6,0,64,20.8,77.6,49.6\n\tc6.4-14.4,8-25.6,8-39.2v-68.8C499.2,216,460.8,177.6,413.6,177.6z"/>\n<polygon style="fill:#EA2D28;" points="123.2,249.6 219.2,153.6 219.2,30.4 0,249.6 219.2,468.8 219.2,345.6 "/>\n<polyline style="fill:#C42014;" points="1.6,249.6 219.2,468.8 219.2,345.6 124.8,249.6 219.2,153.6 "/>\n</svg>\n</button>\n    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/Zq_zgig9DqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n  </div>'},useData:!0}),g=(i=a("krGWQ"),a("eWCmQ"));s=a("jqwYo");let y=[],_=[];function b(e,t){let n=localStorage.getItem(e);y.includes(t)?g.Notify.failure("we have alredy added that movie"):null===n?(y.push(t),s.localStorageAPI.save(e,y)):(y=JSON.parse(n),y.push(t),s.localStorageAPI.save(e,y))}function w(e,t){let n=localStorage.getItem(e);_.includes(t)?g.Notify.failure("we have alredy added that movie"):null===n?(_.push(t),s.localStorageAPI.save(e,_)):(_=JSON.parse(n),_.push(t),s.localStorageAPI.save(e,_))}document.querySelector(".list-card__item");let L;function k(){const e=document.querySelector(".modal"),t=document.querySelector(".modal__backside");e.classList.remove("rotated"),t.classList.remove("rotated360")}function x(){const e=document.querySelector(".modal"),t=document.querySelector(".modal__backside");e.classList.add("rotated"),t.classList.add("rotated360")}function E(){document.body.classList.remove("modal-open"),i.refs.filmBox.classList.add("visually-hidden"),document.body.removeEventListener("click",P),document.body.removeEventListener("keydown",S)}function S(e){"Escape"===e.code&&E()}function P(e){"modal__button--watched"===e.target.className&&(b("watched",L),E()),"modal__button--queue"===e.target.className&&(w("queue",L),E()),e.target===i.refs.filmBox&&E()}i.refs.homeGallery.addEventListener("click",(async function(e){if(e.preventDefault(),"IMG"!==e.target.nodeName&&"H2"!==e.target.nodeName)return;f(e.target.dataset.id).then((e=>{L=e,i.refs.filmBox.innerHTML=v(e),function(){const e=document.querySelector(".modal__button-close"),t=document.querySelector(".modal__button-rotate");document.querySelector(".modal__button-backtoinfo").addEventListener("click",k),t.addEventListener("click",x),document.body.addEventListener("keydown",S),document.body.classList.add("modal-open"),i.refs.filmBox.classList.remove("visually-hidden"),document.body.addEventListener("click",P),e.addEventListener("click",E)}()}))})),a("brr8Z"),a("cddKH");var O={};O=function e(t,n,l){function a(i,r){if(!n[i]){if(!t[i]){var s=void 0;if(!r&&s)return s(i,!0);if(o)return o(i,!0);var c=new Error("Cannot find module '"+i+"'");throw c.code="MODULE_NOT_FOUND",c}var u=n[i]={exports:{}};t[i][0].call(u.exports,(function(e){return a(t[i][1][e]||e)}),u,u.exports,e,t,n,l)}return n[i].exports}for(var o=void 0,i=0;i<l.length;i++)a(l[i]);return a}({1:[function(e,t,n){Object.defineProperty(n,"__esModule",{value:!0}),n.create=n.visible=void 0;var l=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.createElement("div");return n.innerHTML=e.trim(),!0===t?n.children:n.firstChild},a=function(e,t){var n=e.children;return 1===n.length&&n[0].tagName===t},o=function(e){return null!=(e=e||document.querySelector(".basicLightbox"))&&!0===e.ownerDocument.body.contains(e)};n.visible=o,n.create=function(e,t){var n=function(e,t){var n=l('\n\t\t<div class="basicLightbox '.concat(t.className,'">\n\t\t\t<div class="basicLightbox__placeholder" role="dialog"></div>\n\t\t</div>\n\t')),o=n.querySelector(".basicLightbox__placeholder");e.forEach((function(e){return o.appendChild(e)}));var i=a(o,"IMG"),r=a(o,"VIDEO"),s=a(o,"IFRAME");return!0===i&&n.classList.add("basicLightbox--img"),!0===r&&n.classList.add("basicLightbox--video"),!0===s&&n.classList.add("basicLightbox--iframe"),n}(e=function(e){var t="string"==typeof e,n=e instanceof HTMLElement==1;if(!1===t&&!1===n)throw new Error("Content must be a DOM element/node or string");return!0===t?Array.from(l(e,!0)):"TEMPLATE"===e.tagName?[e.content.cloneNode(!0)]:Array.from(e.children)}(e),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(null==(e=Object.assign({},e)).closable&&(e.closable=!0),null==e.className&&(e.className=""),null==e.onShow&&(e.onShow=function(){}),null==e.onClose&&(e.onClose=function(){}),"boolean"!=typeof e.closable)throw new Error("Property `closable` must be a boolean");if("string"!=typeof e.className)throw new Error("Property `className` must be a string");if("function"!=typeof e.onShow)throw new Error("Property `onShow` must be a function");if("function"!=typeof e.onClose)throw new Error("Property `onClose` must be a function");return e}(t)),i=function(e){return!1!==t.onClose(r)&&function(e,t){return e.classList.remove("basicLightbox--visible"),setTimeout((function(){return!1===o(e)||e.parentElement.removeChild(e),t()}),410),!0}(n,(function(){if("function"==typeof e)return e(r)}))};!0===t.closable&&n.addEventListener("click",(function(e){e.target===n&&i()}));var r={element:function(){return n},visible:function(){return o(n)},show:function(e){return!1!==t.onShow(r)&&function(e,t){return document.body.appendChild(e),setTimeout((function(){requestAnimationFrame((function(){return e.classList.add("basicLightbox--visible"),t()}))}),10),!0}(n,(function(){if("function"==typeof e)return e(r)}))},close:i};return r}},{}]},{},[1])(1),document.addEventListener("click",(function(e){const t=e.target;if(t.classList.contains("button__trailer")||t.classList.contains("modal__button--trailer")){const e=t.dataset.id;console.log("movieID :>> ",e),h(e).then((e=>{var t;t=e,O.create(`\n    <iframe src='https://www.youtube.com/embed/${t}' width="640" height="480" frameborder="0" allowfullscreen origin></iframe>\n`).show()}))}}));
//# sourceMappingURL=index.0419be5c.js.map
