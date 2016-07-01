!function(e,t){if("object"==typeof exports&&"object"==typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{var n=t();for(var o in n)("object"==typeof exports?exports:e)[o]=n[o]}}(this,function(){return function(e){function t(o){if(n[o])return n[o].exports;var i=n[o]={exports:{},id:o,loaded:!1};return e[o].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e){e.service("tsModalService",a["default"])};var i=n(1),a=o(i)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=["$rootScope","$document","$compile","$injector","$q","$timeout",function(e,t,n,o,a,l){"ngInject";function u(){O.append(S),j.append(O)}function c(){return k.length?k[k.length-1]:null}function d(e){var t=function(){h(),O[0].style.display="none",k=[],C=!0,E=!1,w.$destroy(),w=null};b(e)?g(e).then(function(e){return t()}):(S[0].style.display="none",w&&t())}function s(e,t){t=t||{},t.tsModalReady=!1,w.data[e._id]=t;var o=angular.copy(z),a=angular.copy(P),r=angular.element("<"+(0,i.dashCase)(e._options.directive)+">\n						 </"+(0,i.dashCase)(e._options.directive)+">");angular.forEach(t,function(t,n){r.attr((0,i.dashCase)(n),"data['"+e._id+"']."+n)}),o.addClass("modal-contain--"+e._options.size),o.addClass("modal-contain--"+e._options.display),o[0].style.zIndex=2*k.length+1,k.push({data:e,containEl:o,el:a}),o[0].addEventListener("click",W),a.append(r),o.append(a),O.append(o),n(o)(w),f(c())}function f(e){S[0].style.zIndex=2*k.length-2,O[0].style.display="block",b(e)?(C&&(h(),m(e)),y(e)):(e.el[0].style.display="block",S[0].style.display="block",_(e.containEl)),C=!1}function p(e){S[0].style.zIndex=2*k.length-2,e.containEl[0].removeEventListener("click",W),l(function(){0==k.length&&(E=!0,$(),d(e))},e.data._options.animateDuration/2),b(e)?v(e):e.containEl.remove()}function y(e){Velocity(e.el,{opacity:[1,.5],translateY:[0,"-120%"]},{display:"block",delay:100,easing:"easeOutCubic",duration:e.data._options.animateDuration,complete:function(){_(e.containEl),w.$applyAsync(function(){return w.data[e.data._id].tsModalReady=!0})}})}function v(e){Velocity(e.el,{opacity:.6,translateY:"-120%"},{display:"none",easing:"easeInOutQuad",duration:e.data._options.animateDuration,complete:function(){return e.containEl.remove()}})}function m(e){Velocity(S,{opacity:[1,0]},{display:"block",easing:"easeOutCubic",duration:e.data._options.animateDuration})}function g(e){return a(function(t,n){Velocity(S,{opacity:0},{display:"none",easing:"easeInOutQuad",duration:e.data._options.animateDuration,complete:function(){return w?t():n()}})})}function h(){j[0].style.paddingRight=(C?(0,i.getScrollbarWidth)(j):0)+"px",j[C?"addClass":"removeClass"](M)}function b(e){return Velocity?e.data._options.animate?!0:void 0:(console.warn(i.label+" Velocity library is not available - cannot animate"),!1)}function x(e,t){var n=c();n&&(k.pop(),p(n),n.data.getPromise()["submit"==t?"resolve":"reject"](e))}function _(e){var t=e[0].querySelector("[autofocus]");t?t.focus():e[0].focus()}var w=void 0,k=[],C=!0,E=!1,j=angular.element(t[0].body),M="__body-modal-active",O=angular.element('<div class="modal-container"></div>'),S=angular.element('<div class="modal-backdrop"></div>'),z=angular.element('<div class="modal-contain" tabindex="0"></div>'),P=angular.element('<div class="modal"></div>'),V=function(){return t[0].addEventListener("keydown",D)},$=function(){return t[0].removeEventListener("keydown",D)},D=function(e){27==e.keyCode&&c().data._options.closeEscape&&x(null,"cancel")},W=function(e){var t=c();e.target==t.containEl[0]&&t.data._options.closeBackdrop&&!C&&x(null,"cancel")};return{open:function(t){w||(w=e.$new(),w.data={},V());var n=new r["default"](t,o);return n.setPromise(a.defer()),C&&u(),t.resolve?(0,i.resolve)(a,t.resolve).then(function(e){return s(n,e)}):s(n),n.getPromise().promise},submit:function(e){x(e,"submit")},cancel:function(e){x(e,"cancel")}}}];var i=n(2),a=n(4),r=o(a)},function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}function i(){return("undefined"!=typeof window.crypto&&"undefined"!=typeof window.crypto.getRandomValues?function(){var e=new Uint16Array(8);window.crypto.getRandomValues(e);var t=function(e){for(var t=e.toString(16);t.length<4;)t="0"+t;return t};return t(e[0])+t(e[1])+"-"+t(e[2])+"-"+t(e[3])+"-"+t(e[4])+"-"+t(e[5])+t(e[6])+t(e[7])}:function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(e){var t=16*Math.random()|0,n="x"==e?t:3&t|8;return n.toString(16)})})()}function a(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function r(e,t){if("object"!==("undefined"==typeof e?"undefined":c(e))||!e.directive)throw f+" directive property is required";if("string"!=typeof e.directive)throw f+" directive must be a string";if(!t.has(e.directive+"Directive"))throw f+" "+e.directive+" is not a valid directive";return e=Object.assign({},s["default"],e),"small"!=e.size&&"medium"!=e.size&&"large"!=e.size&&(console.warn("[Modal Warning] "+(e.size?e.size:"Unknown")+' is not a valid size - defaulting to "medium" (small|medium|large)'),e.size="medium"),"component"!=e.display&"notification"!=e.display&&(console.warn(f+" "+(e.display?e.display:"Unknown")+' is not a valid display type - defaulting to "notification" (component|notification)'),e.display="scroll"),e}function l(e,t){var n=[],o=[],i=function(i){o.push(i),n.push(e(function(e){e("function"==typeof t[i]?t[i]():t[i])}))};for(var a in t)i(a);return e.all(n).then(function(e){for(var t={},n=0;n<e.length;n++)t[o[n]]=e[n];return t})}function u(e){var t=document.createElement("div");t.style.visibility="hidden",t.style.width="100%",document.body.appendChild(t);var n=t.offsetWidth;t.style.overflow="scroll";var o=document.createElement("div");o.style.width="100%",t.appendChild(o);var i=o.offsetWidth;t.parentNode.removeChild(t);window.getComputedStyle(e[0]).width;return e[0].scrollWidth==e[0].clientWidth?0:n-i}Object.defineProperty(t,"__esModule",{value:!0}),t.label=void 0;var c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol?"symbol":typeof e};t.guid=i,t.dashCase=a,t.cleanValidateOptions=r,t.resolve=l,t.getScrollbarWidth=u;var d=n(3),s=o(d),f=t.label="[tsModalService]"},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={size:"medium",display:"notification",backdrop:!0,closeBackdrop:!0,closeEscape:!0,animate:!0,animateDuration:400}},function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}(),a=n(2),r=function(){function e(){var t=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],n=arguments[1];o(this,e),this._options=(0,a.cleanValidateOptions)(t,n),this._id=(0,a.guid)()}return i(e,[{key:"setPromise",value:function(e){this._defer=e}},{key:"getPromise",value:function(){return this._defer}}]),e}();t["default"]=r}])});
//# sourceMappingURL=index.js.map