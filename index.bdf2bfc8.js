!function(n){var t={};function e(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return n[r].call(o.exports,o,o.exports,e),o.l=!0,o.exports}e.m=n,e.c=t,e.d=function(n,t,r){e.o(n,t)||Object.defineProperty(n,t,{enumerable:!0,get:r})},e.r=function(n){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},e.t=function(n,t){if(1&t&&(n=e(n)),8&t)return n;if(4&t&&"object"==typeof n&&n&&n.__esModule)return n;var r=Object.create(null);if(e.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:n}),2&t&&"string"!=typeof n)for(var o in n)e.d(r,o,function(t){return n[t]}.bind(null,o));return r},e.n=function(n){var t=n&&n.__esModule?function(){return n.default}:function(){return n};return e.d(t,"a",t),t},e.o=function(n,t){return Object.prototype.hasOwnProperty.call(n,t)},e.p="",e(e.s=0)}([function(n,t,e){"use strict";e.r(t);e(1);function r(n,t){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=function(n,t){if(!n)return;if("string"==typeof n)return o(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);"Object"===e&&n.constructor&&(e=n.constructor.name);if("Map"===e||"Set"===e)return Array.from(n);if("Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e))return o(n,t)}(n))||t&&n&&"number"==typeof n.length){e&&(n=e);var r=0,i=function(){};return{s:i,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,s=!0,a=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return s=n.done,n},e:function(n){a=!0,c=n},f:function(){try{s||null==e.return||e.return()}finally{if(a)throw c}}}}function o(n,t){(null==t||t>n.length)&&(t=n.length);for(var e=0,r=new Array(t);e<t;e++)r[e]=n[e];return r}fetch("https://api.github.com/users/kilerynka/repos").then((function(n){return n.json()})).then((function(n){var t,e=document.querySelector(".sectionThree-js"),o=r(n);try{for(o.s();!(t=o.n()).done;){var i=t.value,c=i.name,s=i.html_url,a=i.description,l=i.homepage;console.log(n);var u='<article class="sectionThree__article">\n<div class="sectionThree__article-div">\n  <div class="threeDots"></div>\n</div>\n\n<div class="content">\n  <img class="content-img" src="img/Vector.png" alt="" />\n  <div class="wrap">\n    <section class="sectionGit">\n      <h2 class="sectionGit-h2">project:</h2>\n      <p class="title sectionGit-p name-js">'.concat(c,'</p>\n    </section>\n    <section class="sectionGit">\n      <h2 class="sectionGit-h2">description:</h2>\n      <p class="description sectionGit-p description-js">\n      ').concat(a,'\n      </p>\n    </section>\n  </div>\n  <div class="wrap2">\n    <section class="sectionGit">\n      <h2 class="sectionGit-h2">demo:</h2>\n\n      <a\n        class="link sectionGit-p demo-js"\n        href="').concat(l,'"\n        >see here</a\n      >\n    </section>\n    <section class="sectionGit">\n      <h2 class="sectionGit-h2">github:</h2>\n      <a class="link sectionGit-p src-js" href="').concat(s,'"> source code </a>\n    </section>\n  </div>\n</div>\n</article>');a&&(e.innerHTML+=u)}}catch(n){o.e(n)}finally{o.f()}}))},function(n,t,e){}]);