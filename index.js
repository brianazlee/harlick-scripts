parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Nhp6":[function(require,module,exports) {
var e=function(e,t,n){"use strict";if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var r,i=0,o=(r=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,{matchesSelector:function(e,t){return e instanceof HTMLElement&&r.call(e,t)},addMethod:function(e,t,n){var r=e[t];e[t]=function(){return n.length==arguments.length?n.apply(this,arguments):"function"==typeof r?r.apply(this,arguments):void 0}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var i,l=0;i=e[l];l++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&o.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return void 0===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}),l=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),c=function(t,r){var i=new l,c=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,o=n.target;o!==e.document&&o!==e||(o=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n)});var l=t(n.options);i.observe(o,l),n.observer=i,n.me=c}),i.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=o.mergeArrays(a,t);for(var r=o.toElementsArray(this),l=0;l<r.length;l++)i.addEvent(r[l],e,t,n)},this.unbindEvent=function(){var e=o.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(e){var t,r=o.toElementsArray(this),l=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===l)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=o.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1})},this},a=new function(){var e={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};function t(e,t,r){return!(!o.matchesSelector(e,t.selector)||(e._id===n&&(e._id=i++),-1!=t.firedElems.indexOf(e._id))||(t.firedElems.push(e._id),0))}var r=(a=new c(function(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t},function(e,n){e.forEach(function(e){var r=e.addedNodes,i=e.target,l=[];null!==r&&r.length>0?o.checkChildNodesRecursively(r,n,t,l):"attributes"===e.type&&t(i,n)&&l.push({callback:n.callback,elem:i}),o.callCallbacks(l,n)})})).bindEvent;return a.bindEvent=function(t,n,i){void 0===i?(i=n,n=e):n=o.mergeArrays(e,n);var l=o.toElementsArray(this);if(n.existing){for(var c=[],a=0;a<l.length;a++)for(var s=l[a].querySelectorAll(t),u=0;u<s.length;u++)c.push({callback:i,elem:s[u]});if(n.onceOnly&&c.length)return i.call(c[0].elem,c[0].elem);setTimeout(o.callCallbacks,1,c)}r.call(this,t,n,i)},a},s=new function(){var e={};function t(e,t){return o.matchesSelector(e,t.selector)}var n=(s=new c(function(){return{childList:!0,subtree:!0}},function(e,n){e.forEach(function(e){var r=e.removedNodes,i=[];null!==r&&r.length>0&&o.checkChildNodesRecursively(r,n,t,i),o.callCallbacks(i,n)})})).bindEvent;return s.bindEvent=function(t,r,i){void 0===i?(i=r,r=e):r=o.mergeArrays(e,r),n.call(this,t,r,i)},s};t&&f(t.fn),f(HTMLElement.prototype),f(NodeList.prototype),f(HTMLCollection.prototype),f(HTMLDocument.prototype),f(Window.prototype);var u={};return d(a,u,"unbindAllArrive"),d(s,u,"unbindAllLeave"),u}function d(e,t,n){o.addMethod(t,n,e.unbindEvent),o.addMethod(t,n,e.unbindEventWithSelectorOrCallback),o.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function f(e){e.arrive=a.bindEvent,d(a,e,"unbindArrive"),e.leave=s.bindEvent,d(s,e,"unbindLeave")}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);
},{}],"F9OG":[function(require,module,exports) {
"use strict";var e=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,l,o=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(i){l={error:i}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(l)throw l.error}}return a},r=this&&this.__spreadArray||function(e,r){for(var t=0,n=r.length,l=e.length;t<n;t++,l++)e[l]=r[t];return e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderPriceCalculator=void 0;var t=/\+\$?([0-9.]+)/;function n(n){var l=Array.from(n.querySelectorAll("label")),o=Array.from(n.querySelectorAll("select")),a=Array.from(n.querySelectorAll("option")),i=document.createElement("div");i.classList.add("cost-breakdown");var c=document.createElement("h4");c.classList.add("cost"),i.append(c);var u=n.querySelector(".form-button-wrapper");null!==u&&u.insertAdjacentElement("beforebegin",i);var d=r(r([],e(l)),e(a)).map(function(e){var r=e.innerText.match(t);return null===r?null:{el:e,cost:r[1]}}).filter(function(e){return null!==e}),s=function(){var e=d.map(function(e){var r;if(null===e)return 0;if(e.el instanceof HTMLLabelElement)return(null===(r=e.el.querySelector("input"))||void 0===r?void 0:r.checked)?parseInt(e.cost,10):0;var t=e.el.parentElement;return e.el instanceof HTMLOptionElement&&t instanceof HTMLSelectElement&&t.value===e.el.value?parseInt(e.cost,10):0}).reduce(function(e,r){return e+r},0);c.innerText="Estimated Additional Cost: $"+e.toFixed(2)};l.forEach(function(e){var r;return null===(r=e.querySelector("input"))||void 0===r?void 0:r.addEventListener("change",s)}),o.forEach(function(e){return e.addEventListener("change",s)}),s()}exports.renderPriceCalculator=n;
},{}],"zo2T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("arrive");var e=require("./priceCalc");function r(r){e.renderPriceCalculator(r),Array.from(r.querySelectorAll("fieldset")).forEach(function(e){var r=e.querySelector(".description");null!==r&&(r.style.display="none",Array.from(e.querySelectorAll(".option")).forEach(function(r){r.querySelector("input").style.display="none";var o=r.innerText.trim(),t=r.querySelector("label"),l=e.querySelector('.description [data-option-for="'+o+'"]');null!==l&&(t.childNodes[1].remove(),t.append(l))}),Array.from(e.querySelectorAll("fieldset legend")).forEach(function(r){var o=r.innerText.trim(),t=e.querySelector('.description [data-description-for="'+o+'"]');null!==t&&r.after(t)}))})}document.arrive('[data-form-id="600bcf825b984430bfeca409"]',r);
},{"arrive":"Nhp6","./priceCalc":"F9OG"}]},{},["zo2T"], null)
//# sourceMappingURL=/index.js.map