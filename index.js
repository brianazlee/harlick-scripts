parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Nhp6":[function(require,module,exports) {
var e=function(e,t,n){"use strict";if(e.MutationObserver&&"undefined"!=typeof HTMLElement){var r,i=0,o=(r=HTMLElement.prototype.matches||HTMLElement.prototype.webkitMatchesSelector||HTMLElement.prototype.mozMatchesSelector||HTMLElement.prototype.msMatchesSelector,{matchesSelector:function(e,t){return e instanceof HTMLElement&&r.call(e,t)},addMethod:function(e,t,n){var r=e[t];e[t]=function(){return n.length==arguments.length?n.apply(this,arguments):"function"==typeof r?r.apply(this,arguments):void 0}},callCallbacks:function(e,t){t&&t.options.onceOnly&&1==t.firedElems.length&&(e=[e[0]]);for(var n,r=0;n=e[r];r++)n&&n.callback&&n.callback.call(n.elem,n.elem);t&&t.options.onceOnly&&1==t.firedElems.length&&t.me.unbindEventWithSelectorAndCallback.call(t.target,t.selector,t.callback)},checkChildNodesRecursively:function(e,t,n,r){for(var i,l=0;i=e[l];l++)n(i,t,r)&&r.push({callback:t.callback,elem:i}),i.childNodes.length>0&&o.checkChildNodesRecursively(i.childNodes,t,n,r)},mergeArrays:function(e,t){var n,r={};for(n in e)e.hasOwnProperty(n)&&(r[n]=e[n]);for(n in t)t.hasOwnProperty(n)&&(r[n]=t[n]);return r},toElementsArray:function(t){return void 0===t||"number"==typeof t.length&&t!==e||(t=[t]),t}}),l=function(){var e=function(){this._eventsBucket=[],this._beforeAdding=null,this._beforeRemoving=null};return e.prototype.addEvent=function(e,t,n,r){var i={target:e,selector:t,options:n,callback:r,firedElems:[]};return this._beforeAdding&&this._beforeAdding(i),this._eventsBucket.push(i),i},e.prototype.removeEvent=function(e){for(var t,n=this._eventsBucket.length-1;t=this._eventsBucket[n];n--)if(e(t)){this._beforeRemoving&&this._beforeRemoving(t);var r=this._eventsBucket.splice(n,1);r&&r.length&&(r[0].callback=null)}},e.prototype.beforeAdding=function(e){this._beforeAdding=e},e.prototype.beforeRemoving=function(e){this._beforeRemoving=e},e}(),c=function(t,r){var i=new l,c=this,a={fireOnAttributesModification:!1};return i.beforeAdding(function(n){var i,o=n.target;o!==e.document&&o!==e||(o=document.getElementsByTagName("html")[0]),i=new MutationObserver(function(e){r.call(this,e,n)});var l=t(n.options);i.observe(o,l),n.observer=i,n.me=c}),i.beforeRemoving(function(e){e.observer.disconnect()}),this.bindEvent=function(e,t,n){t=o.mergeArrays(a,t);for(var r=o.toElementsArray(this),l=0;l<r.length;l++)i.addEvent(r[l],e,t,n)},this.unbindEvent=function(){var e=o.toElementsArray(this);i.removeEvent(function(t){for(var r=0;r<e.length;r++)if(this===n||t.target===e[r])return!0;return!1})},this.unbindEventWithSelectorOrCallback=function(e){var t,r=o.toElementsArray(this),l=e;t="function"==typeof e?function(e){for(var t=0;t<r.length;t++)if((this===n||e.target===r[t])&&e.callback===l)return!0;return!1}:function(t){for(var i=0;i<r.length;i++)if((this===n||t.target===r[i])&&t.selector===e)return!0;return!1},i.removeEvent(t)},this.unbindEventWithSelectorAndCallback=function(e,t){var r=o.toElementsArray(this);i.removeEvent(function(i){for(var o=0;o<r.length;o++)if((this===n||i.target===r[o])&&i.selector===e&&i.callback===t)return!0;return!1})},this},a=new function(){var e={fireOnAttributesModification:!1,onceOnly:!1,existing:!1};function t(e,t,r){return!(!o.matchesSelector(e,t.selector)||(e._id===n&&(e._id=i++),-1!=t.firedElems.indexOf(e._id))||(t.firedElems.push(e._id),0))}var r=(a=new c(function(e){var t={attributes:!1,childList:!0,subtree:!0};return e.fireOnAttributesModification&&(t.attributes=!0),t},function(e,n){e.forEach(function(e){var r=e.addedNodes,i=e.target,l=[];null!==r&&r.length>0?o.checkChildNodesRecursively(r,n,t,l):"attributes"===e.type&&t(i,n)&&l.push({callback:n.callback,elem:i}),o.callCallbacks(l,n)})})).bindEvent;return a.bindEvent=function(t,n,i){void 0===i?(i=n,n=e):n=o.mergeArrays(e,n);var l=o.toElementsArray(this);if(n.existing){for(var c=[],a=0;a<l.length;a++)for(var s=l[a].querySelectorAll(t),u=0;u<s.length;u++)c.push({callback:i,elem:s[u]});if(n.onceOnly&&c.length)return i.call(c[0].elem,c[0].elem);setTimeout(o.callCallbacks,1,c)}r.call(this,t,n,i)},a},s=new function(){var e={};function t(e,t){return o.matchesSelector(e,t.selector)}var n=(s=new c(function(){return{childList:!0,subtree:!0}},function(e,n){e.forEach(function(e){var r=e.removedNodes,i=[];null!==r&&r.length>0&&o.checkChildNodesRecursively(r,n,t,i),o.callCallbacks(i,n)})})).bindEvent;return s.bindEvent=function(t,r,i){void 0===i?(i=r,r=e):r=o.mergeArrays(e,r),n.call(this,t,r,i)},s};t&&f(t.fn),f(HTMLElement.prototype),f(NodeList.prototype),f(HTMLCollection.prototype),f(HTMLDocument.prototype),f(Window.prototype);var u={};return d(a,u,"unbindAllArrive"),d(s,u,"unbindAllLeave"),u}function d(e,t,n){o.addMethod(t,n,e.unbindEvent),o.addMethod(t,n,e.unbindEventWithSelectorOrCallback),o.addMethod(t,n,e.unbindEventWithSelectorAndCallback)}function f(e){e.arrive=a.bindEvent,d(a,e,"unbindArrive"),e.leave=s.bindEvent,d(s,e,"unbindLeave")}}(window,"undefined"==typeof jQuery?null:jQuery,void 0);
},{}],"f4nn":[function(require,module,exports) {

},{}],"u8ui":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.render=L,exports.hydrate=F,exports.h=exports.createElement=p,exports.Fragment=d,exports.createRef=a,exports.Component=h,exports.cloneElement=H,exports.createContext=O,exports.toChildArray=b,exports.options=exports.isValidElement=void 0;var e,n,t,_,l,o,r={},i=[],u=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function s(e,n){for(var t in n)e[t]=n[t];return e}function c(e){var n=e.parentNode;n&&n.removeChild(e)}function p(e,n,t){var _,l,o,r=arguments,i={};for(o in n)"key"==o?_=n[o]:"ref"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);if(null!=t&&(i.children=t),"function"==typeof e&&null!=e.defaultProps)for(o in e.defaultProps)void 0===i[o]&&(i[o]=e.defaultProps[o]);return f(e,i,_,l,null)}function f(n,t,_,l,o){var r={type:n,props:t,key:_,ref:l,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++e.__v:o};return null!=e.vnode&&e.vnode(r),r}function a(){return{current:null}}function d(e){return e.children}function h(e,n){this.props=e,this.context=n}function v(e,n){if(null==n)return e.__?v(e.__,e.__.__k.indexOf(e)+1):null;for(var t;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e)return t.__e;return"function"==typeof e.type?v(e):null}function y(e){var n,t;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,n=0;n<e.__k.length;n++)if(null!=(t=e.__k[n])&&null!=t.__e){e.__e=e.__c.base=t.__e;break}return y(e)}}function m(n){(!n.__d&&(n.__d=!0)&&t.push(n)&&!k.__r++||l!==e.debounceRendering)&&((l=e.debounceRendering)||_)(k)}function k(){for(var e;k.__r=t.length;)e=t.sort(function(e,n){return e.__v.__b-n.__v.__b}),t=[],e.some(function(e){var n,t,_,l,o,r;e.__d&&(o=(l=(n=e).__v).__e,(r=n.__P)&&(t=[],(_=s({},l)).__v=l.__v+1,D(r,l,_,n.__n,void 0!==r.ownerSVGElement,null!=l.__h?[o]:null,t,null==o?v(l):o,l.__h),T(t,l),l.__e!=o&&y(l)))})}function g(e,n,t,_,l,o,u,s,c,p){var a,h,y,m,k,g,b,P=_&&_.__k||i,S=P.length;for(t.__k=[],a=0;a<n.length;a++)if(null!=(m=t.__k[a]=null==(m=n[a])||"boolean"==typeof m?null:"string"==typeof m||"number"==typeof m||"bigint"==typeof m?f(null,m,null,null,m):Array.isArray(m)?f(d,{children:m},null,null,null):m.__b>0?f(m.type,m.props,m.key,null,m.__v):m)){if(m.__=t,m.__b=t.__b+1,null===(y=P[a])||y&&m.key==y.key&&m.type===y.type)P[a]=void 0;else for(h=0;h<S;h++){if((y=P[h])&&m.key==y.key&&m.type===y.type){P[h]=void 0;break}y=null}D(e,m,y=y||r,l,o,u,s,c,p),k=m.__e,(h=m.ref)&&y.ref!=h&&(b||(b=[]),y.ref&&b.push(y.ref,null,m),b.push(h,m.__c||k,m)),null!=k?(null==g&&(g=k),"function"==typeof m.type&&null!=m.__k&&m.__k===y.__k?m.__d=c=x(m,c,e):c=C(e,m,y,P,k,c),p||"option"!==t.type?"function"==typeof t.type&&(t.__d=c):e.value=""):c&&y.__e==c&&c.parentNode!=e&&(c=v(y))}for(t.__e=g,a=S;a--;)null!=P[a]&&("function"==typeof t.type&&null!=P[a].__e&&P[a].__e==t.__d&&(t.__d=v(_,a+1)),N(P[a],P[a]));if(b)for(a=0;a<b.length;a++)M(b[a],b[++a],b[++a])}function x(e,n,t){var _,l;for(_=0;_<e.__k.length;_++)(l=e.__k[_])&&(l.__=e,n="function"==typeof l.type?x(l,n,t):C(t,l,l,e.__k,l.__e,n));return n}function b(e,n){return n=n||[],null==e||"boolean"==typeof e||(Array.isArray(e)?e.some(function(e){b(e,n)}):n.push(e)),n}function C(e,n,t,_,l,o){var r,i,u;if(void 0!==n.__d)r=n.__d,n.__d=void 0;else if(null==t||l!=o||null==l.parentNode)e:if(null==o||o.parentNode!==e)e.appendChild(l),r=null;else{for(i=o,u=0;(i=i.nextSibling)&&u<_.length;u+=2)if(i==l)break e;e.insertBefore(l,o),r=o}return void 0!==r?r:l.nextSibling}function P(e,n,t,_,l){var o;for(o in t)"children"===o||"key"===o||o in n||E(e,o,null,t[o],_);for(o in n)l&&"function"!=typeof n[o]||"children"===o||"key"===o||"value"===o||"checked"===o||t[o]===n[o]||E(e,o,n[o],t[o],_)}function S(e,n,t){"-"===n[0]?e.setProperty(n,t):e[n]=null==t?"":"number"!=typeof t||u.test(n)?t:t+"px"}function E(e,n,t,_,l){var o;e:if("style"===n)if("string"==typeof t)e.style.cssText=t;else{if("string"==typeof _&&(e.style.cssText=_=""),_)for(n in _)t&&n in t||S(e.style,n,"");if(t)for(n in t)_&&t[n]===_[n]||S(e.style,n,t[n])}else if("o"===n[0]&&"n"===n[1])o=n!==(n=n.replace(/Capture$/,"")),n=n.toLowerCase()in e?n.toLowerCase().slice(2):n.slice(2),e.l||(e.l={}),e.l[n+o]=t,t?_||e.addEventListener(n,o?U:w,o):e.removeEventListener(n,o?U:w,o);else if("dangerouslySetInnerHTML"!==n){if(l)n=n.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==n&&"list"!==n&&"form"!==n&&"tabIndex"!==n&&"download"!==n&&n in e)try{e[n]=null==t?"":t;break e}catch(e){}"function"==typeof t||(null!=t&&(!1!==t||"a"===n[0]&&"r"===n[1])?e.setAttribute(n,t):e.removeAttribute(n))}}function w(n){this.l[n.type+!1](e.event?e.event(n):n)}function U(n){this.l[n.type+!0](e.event?e.event(n):n)}function D(n,t,_,l,o,r,i,u,c){var p,f,a,v,y,m,k,x,b,C,P,S=t.type;if(void 0!==t.constructor)return null;null!=_.__h&&(c=_.__h,u=t.__e=_.__e,t.__h=null,r=[u]),(p=e.__b)&&p(t);try{e:if("function"==typeof S){if(x=t.props,b=(p=S.contextType)&&l[p.__c],C=p?b?b.props.value:p.__:l,_.__c?k=(f=t.__c=_.__c).__=f.__E:("prototype"in S&&S.prototype.render?t.__c=f=new S(x,C):(t.__c=f=new h(x,C),f.constructor=S,f.render=W),b&&b.sub(f),f.props=x,f.state||(f.state={}),f.context=C,f.__n=l,a=f.__d=!0,f.__h=[]),null==f.__s&&(f.__s=f.state),null!=S.getDerivedStateFromProps&&(f.__s==f.state&&(f.__s=s({},f.__s)),s(f.__s,S.getDerivedStateFromProps(x,f.__s))),v=f.props,y=f.state,a)null==S.getDerivedStateFromProps&&null!=f.componentWillMount&&f.componentWillMount(),null!=f.componentDidMount&&f.__h.push(f.componentDidMount);else{if(null==S.getDerivedStateFromProps&&x!==v&&null!=f.componentWillReceiveProps&&f.componentWillReceiveProps(x,C),!f.__e&&null!=f.shouldComponentUpdate&&!1===f.shouldComponentUpdate(x,f.__s,C)||t.__v===_.__v){f.props=x,f.state=f.__s,t.__v!==_.__v&&(f.__d=!1),f.__v=t,t.__e=_.__e,t.__k=_.__k,t.__k.forEach(function(e){e&&(e.__=t)}),f.__h.length&&i.push(f);break e}null!=f.componentWillUpdate&&f.componentWillUpdate(x,f.__s,C),null!=f.componentDidUpdate&&f.__h.push(function(){f.componentDidUpdate(v,y,m)})}f.context=C,f.props=x,f.state=f.__s,(p=e.__r)&&p(t),f.__d=!1,f.__v=t,f.__P=n,p=f.render(f.props,f.state,f.context),f.state=f.__s,null!=f.getChildContext&&(l=s(s({},l),f.getChildContext())),a||null==f.getSnapshotBeforeUpdate||(m=f.getSnapshotBeforeUpdate(v,y)),P=null!=p&&p.type===d&&null==p.key?p.props.children:p,g(n,Array.isArray(P)?P:[P],t,_,l,o,r,i,u,c),f.base=t.__e,t.__h=null,f.__h.length&&i.push(f),k&&(f.__E=f.__=null),f.__e=!1}else null==r&&t.__v===_.__v?(t.__k=_.__k,t.__e=_.__e):t.__e=A(_.__e,t,_,l,o,r,i,c);(p=e.diffed)&&p(t)}catch(n){t.__v=null,(c||null!=r)&&(t.__e=u,t.__h=!!c,r[r.indexOf(u)]=null),e.__e(n,t,_)}}function T(n,t){e.__c&&e.__c(t,n),n.some(function(t){try{n=t.__h,t.__h=[],n.some(function(e){e.call(t)})}catch(n){e.__e(n,t.__v)}})}function A(e,n,t,_,l,o,u,s){var p,f,a,d,h=t.props,v=n.props,y=n.type,m=0;if("svg"===y&&(l=!0),null!=o)for(;m<o.length;m++)if((p=o[m])&&(p===e||(y?p.localName==y:3==p.nodeType))){e=p,o[m]=null;break}if(null==e){if(null===y)return document.createTextNode(v);e=l?document.createElementNS("http://www.w3.org/2000/svg",y):document.createElement(y,v.is&&v),o=null,s=!1}if(null===y)h===v||s&&e.data===v||(e.data=v);else{if(o=o&&i.slice.call(e.childNodes),f=(h=t.props||r).dangerouslySetInnerHTML,a=v.dangerouslySetInnerHTML,!s){if(null!=o)for(h={},d=0;d<e.attributes.length;d++)h[e.attributes[d].name]=e.attributes[d].value;(a||f)&&(a&&(f&&a.__html==f.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(P(e,v,h,l,s),a)n.__k=[];else if(m=n.props.children,g(e,Array.isArray(m)?m:[m],n,t,_,l&&"foreignObject"!==y,o,u,e.firstChild,s),null!=o)for(m=o.length;m--;)null!=o[m]&&c(o[m]);s||("value"in v&&void 0!==(m=v.value)&&(m!==e.value||"progress"===y&&!m)&&E(e,"value",m,h.value,!1),"checked"in v&&void 0!==(m=v.checked)&&m!==e.checked&&E(e,"checked",m,h.checked,!1))}return e}function M(n,t,_){try{"function"==typeof n?n(t):n.current=t}catch(n){e.__e(n,_)}}function N(n,t,_){var l,o,r;if(e.unmount&&e.unmount(n),(l=n.ref)&&(l.current&&l.current!==n.__e||M(l,null,t)),_||"function"==typeof n.type||(_=null!=(o=n.__e)),n.__e=n.__d=void 0,null!=(l=n.__c)){if(l.componentWillUnmount)try{l.componentWillUnmount()}catch(n){e.__e(n,t)}l.base=l.__P=null}if(l=n.__k)for(r=0;r<l.length;r++)l[r]&&N(l[r],t,_);null!=o&&c(o)}function W(e,n,t){return this.constructor(e,t)}function L(n,t,_){var l,o,u;e.__&&e.__(n,t),o=(l="function"==typeof _)?null:_&&_.__k||t.__k,u=[],D(t,n=(!l&&_||t).__k=p(d,null,[n]),o||r,r,void 0!==t.ownerSVGElement,!l&&_?[_]:o?null:t.firstChild?i.slice.call(t.childNodes):null,u,!l&&_?_:o?o.__e:t.firstChild,l),T(u,n)}function F(e,n){L(e,n,F)}function H(e,n,t){var _,l,o,r=arguments,i=s({},e.props);for(o in n)"key"==o?_=n[o]:"ref"==o?l=n[o]:i[o]=n[o];if(arguments.length>3)for(t=[t],o=3;o<arguments.length;o++)t.push(r[o]);return null!=t&&(i.children=t),f(e.type,i,_||e.key,l||e.ref,null)}function O(e,n){var t={__c:n="__cC"+o++,__:e,Consumer:function(e,n){return e.children(n)},Provider:function(e){var t,_;return this.getChildContext||(t=[],(_={})[n]=this,this.getChildContext=function(){return _},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&t.some(m)},this.sub=function(e){t.push(e);var n=e.componentWillUnmount;e.componentWillUnmount=function(){t.splice(t.indexOf(e),1),n&&n.call(e)}}),e.children}};return t.Provider.__=t.Consumer.contextType=t}exports.isValidElement=n,exports.options=e,exports.options=e={__e:function(e,n){for(var t,_,l;n=n.__;)if((t=n.__c)&&!t.__)try{if((_=t.constructor)&&null!=_.getDerivedStateFromError&&(t.setState(_.getDerivedStateFromError(e)),l=t.__d),null!=t.componentDidCatch&&(t.componentDidCatch(e),l=t.__d),l)return t.__E=t}catch(n){e=n}throw e},__v:0},exports.isValidElement=n=function(e){return null!=e&&void 0===e.constructor},h.prototype.setState=function(e,n){var t;t=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=s({},this.state),"function"==typeof e&&(e=e(s({},t),this.props)),e&&s(t,e),null!=e&&this.__v&&(n&&this.__h.push(n),m(this))},h.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),m(this))},h.prototype.render=d,t=[],_="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,k.__r=0,o=0;
},{}],"F9OG":[function(require,module,exports) {
"use strict";var e=this&&this.__read||function(e,r){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var n,l,o=t.call(e),a=[];try{for(;(void 0===r||r-- >0)&&!(n=o.next()).done;)a.push(n.value)}catch(u){l={error:u}}finally{try{n&&!n.done&&(t=o.return)&&t.call(o)}finally{if(l)throw l.error}}return a},r=this&&this.__spreadArray||function(e,r){for(var t=0,n=r.length,l=e.length;t<n;t++,l++)e[l]=r[t];return e};Object.defineProperty(exports,"__esModule",{value:!0}),exports.renderPriceCalculator=exports.PRICE_REGEX=void 0;var t=require("preact");function n(n){var l,o=Array.from(n.querySelectorAll("label")),a=Array.from(n.querySelectorAll("select")),u=Array.from(n.querySelectorAll("option")),i=document.createElement("div");i.classList.add("cost-breakdown");var c=document.createElement("h4");c.classList.add("cost"),i.append(c);var d=n.querySelector(".form-button-wrapper"),s=null===(l=document.querySelector('meta[property="product:price:amount"]'))||void 0===l?void 0:l.getAttribute("content");null!==d&&d.insertAdjacentElement("beforebegin",i);var f=r(r([],e(o)),e(u)).map(function(e){var r=e.innerText.match(exports.PRICE_REGEX);return null===r?null:{el:e,cost:r[1]}}).filter(function(e){return null!==e}),p=function(){var e=f.map(function(e){var r;if(null===e)return 0;if(e.el instanceof HTMLLabelElement)return(null===(r=e.el.querySelector("input"))||void 0===r?void 0:r.checked)?parseInt(e.cost,10):0;var t=e.el.parentElement;return e.el instanceof HTMLOptionElement&&t instanceof HTMLSelectElement&&t.value===e.el.value?parseInt(e.cost,10):0}).reduce(function(e,r){return e+r},0);null!==s&&t.render(t.h("div",{className:"price-breakdown"},t.h("dl",null,t.h("dt",null,"Deposit price"),t.h("dd",null,"$",Number(s).toFixed(2)),t.h("dt",null,"Customizations"),t.h("dd",null,"$",e.toFixed(2))),t.h("dl",{className:"total"},t.h("dt",null,"Estimated total"),t.h("dd",null,"$",(e+Number(s)).toFixed(2)))),c)};o.forEach(function(e){var r;return null===(r=e.querySelector("input"))||void 0===r?void 0:r.addEventListener("change",p)}),a.forEach(function(e){return e.addEventListener("change",p)}),p()}exports.PRICE_REGEX=/\(\+\$?([0-9.]+)\)/,exports.renderPriceCalculator=n;
},{"preact":"u8ui"}],"jFi6":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.applyFormDescriptions=void 0;var e=require("preact"),t=require("./priceCalc"),a=[{section:"Upper boot material options",items:[{name:"Standard elk leather",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053aff21335493aa48532f9/1616097266916/Standard+Elk+Leather.png?format=500w",desc:e.h("div",null,e.h("p",null,"Elk leather is our traditional and most commonly selected boot leather. It offers good stiffness and durability."),e.h("p",null,"Offered in white, black or tan."))},{name:"Pebbled calf",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e4787304435eebbea3/1616054756415/Rectangle+3-2.png?format=750w",desc:e.h("div",null,e.h("p",null,"Pebble calf is a durable yet more supple leather with a unique textured finish."),e.h("p",null,"We offer it in white, black or light tan."))},{name:"Suede leather",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e332f1a3768576bfc9/1616054755829/Rectangle+2-2.png?format=750w",desc:e.h("div",null,e.h("p",null,"Suede leather is available in a variety of colors. It is very durable and holds up well against scrapes and scuffs. Be sure to go up one stiffness level if needed to provide adequate support."),e.h("p",null,"Consult with one of our Harlick’s technicians if more assistance is needed."))},{name:"Additional colored calf",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053aff1cde59d65474fa784/1616097265839/Rectangle+9.png?format=500w",desc:e.h("div",null,e.h("p",null,"Colored calf leather is a softer more supple leather that can at times require going up one level of support."),e.h("p",null,"Offered in a variety of colors aside from our traditional white, black and tan. This option also includes metallic finishes."))},{name:"Specialty Leather",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e55d8f16380e27214c/1616054757123/Rectangle+8.png?format=750w",desc:e.h("p",null,"Specialty leathers have the same structural qualities as the calf leathers but is available as animal print or with embossed treatments.")}]},{section:"Ankle padding options",items:[{name:"Heel hugger padding",desc:e.h("p",null,"Heel hugger padding is additional padding added through the Achilles’ tendon area to help lock the heel in place.")},{name:"Orthopedic ankle pocketing",desc:e.h("p",null,"Orthopaedic ankle pocketing can be added to create a deeper pocket (up to a ¼ inch pocket) for the ankle bones.")}]},{section:"Preferred ankle stiffness level",description:e.h("p",null,"Harlick’s specialists will assist in determining the exact stiffness level based on your needs. Many factors such as your height, weight, skating level, ankle support needs and skating style are assessed.")},{section:"Preferred ankle construction type",description:e.h("p",null,"All boots are available in two layer or three layer construction."),items:[{name:"Two layer construction",desc:e.h("p",null,"Two layer construction boots will be slightly easier to break in and in the softest models offer less support and in the stiffer models you can still get good support while keeping the weight down.")},{name:"Three layer construction",desc:e.h("p",null,"Three layer construction boots are going to have more body and offer more stiffness in the ankle support. The three layer boot will require more break in but will ultimately offer greater support than the two layer boots.")},{name:"Unsure",hideNoCharge:!0}]},{section:"Tongue materials",items:[{name:"Polyurethane foam padded tongues",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e30d9ceb298c7958a5/1616054755943/Rectangle+2-5.png?format=750w",desc:e.h("div",null)},{name:"Lambs wool tongues",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e5b22f244600413ee3/1616054757708/Rectangle+5.png?format=750w",desc:e.h("div",null)},{name:"50/50 (polyurethane and lambs wool)",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053aff26655ff39b2423426/1616097266918/Rectangle+6.png?format=500w",desc:e.h("div",null)},{name:"Leather or clarino covered polyeurethan foam tongues",desc:e.h("div",null)}]},{section:"Tongue options",items:[{name:"Extra wide tongues",desc:e.h("div",null)},{name:"1 or 2 hooks on tongues",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053eb674e4af10aaf0ab743/1616112487679/Rectangle+5.png?format=1000w",desc:e.h("div",null)},{name:"Lace loop holes on tongues",desc:e.h("div",null)}]},{section:"Scallop options",description:e.h("p",null,"A wedge scallop is a small v-cut below the hooks that helps with additional knee and ankle bending. This option is good for all types of skating. The more wedge scallops you add to your boot, the greater the flexibility.")},{section:"Insole options",items:[{name:"None",desc:e.h("div",null)},{name:"Growth insoles",desc:e.h("p",null,"Designed for younger skaters, growth insoles extend the life of a Harlick boot as the skater grows. Simply go up one size and add the growth insole. We also offer boot stretching services up to ½ size.")},{name:"Poron insoles",desc:e.h("p",null,"Poron innersoles are a great shock absorbing solution that offers premium comfort and support. The cushion density allows skaters to still feel their edges.")},{name:"Lambs wool insoles",desc:e.h("p",null,"Lambswool insoles are perfect for coaches that want to keep their feet warm on ice. This option is not recommended for jumping or high level skating.")},{name:"Unsure",hideNoCharge:!0,desc:e.h("div",null)}]},{section:"Boot lining material",items:[{name:"Smooth leather lining",desc:e.h("div",null)},{name:"Clarino lining",desc:e.h("p",null,"Clarino lining is made of microfiber and is our most durable and most popular lining option. It maintains a high level of comfort while skating.")},{name:"Lambs wool lining (includes lambs wool sock liner)",desc:e.h("p",null,"Lambswool lining is perfect for coaches that want to keep their feet warm on ice. This option is not recommended for jumping or high level skating.")}]},{section:"Boot lining options",items:[{name:"Thinsulate material between lining",desc:e.h("p",null,"Thinsulate is a backing material that is added to the lining of the boot. It offers a thin layer of insulation to help keep the feet warm.")}]},{section:"Special height heels",description:e.h("p",null,"Special heel heights range from a low heel (1 ½ inches) up to a high heel (2 ½ inches). Oftentimes, dance skaters prefer a higher heel to provide better posture and more of a pointed toe look.")},{section:"Special soles",items:[{name:"None",desc:e.h("div",null)},{name:"Lightweight carbon graphite soles",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053aff2eaa9a8018c1ee554/1616097266920/Rectangle+8.png?format=500w",desc:e.h("p",null,"Lightweight carbon fiber soles can reduce the boot weight by 20% without sacrificing durability and strength. Harlick only uses genuine carbon fiber.")},{name:"Lightweight leather soles",desc:e.h("div",null)}]},{section:"Additional custom boot options",items:[{name:"Internal double sole insoles for added height",desc:e.h("p",null,"Internal double insoles can give a skater additional height or be an orthopaedic measure used on only one foot.")}]},{section:"Sole finish color",items:[{name:"Natural",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098ffbb7162bd07c0250/1616054671424/Rectangle+7.png?format=500w",desc:e.h("div",null)},{name:"Black",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098ed1b52f422f2bd490/1616054670360/Rectangle+5.png?format=500w",desc:e.h("div",null)}]},{section:"Sole finish options",items:[{name:"No sole finish",desc:e.h("div",null)},{name:"Clear wax finish",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053e9bb66049027a975d6ef/1616112060087/Rectangle+7+%281%29.png?format=1000w",desc:e.h("div",null)},{name:"Black sole finish (on black boots only)",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098ed1b52f422f2bd490/1616054670360/Rectangle+5.png?format=500w",desc:e.h("div",null)},{name:"Wax / sealer",desc:e.h("div",null)},{name:"Chem glaze",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098f85ad213cde310507/1616054671431/Rectangle+6.png?format=500w",desc:e.h("div",null)},{name:"Chem glaze with light to medium glitter",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098df6334f7eb9f00f93/1616054669283/Rectangle+4.png?format=500w",desc:e.h("div",null)},{name:"Chem glaze with heavy glitter",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053098f933c4c201208f104/1616054671439/Rectangle+3.png?format=500w",desc:e.h("div",null)},{name:"Chem glaze with solid coat glitter",desc:e.h("div",null)}]},{section:"Arch support and pronation correction options",items:[{name:"Foot impression kit",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e1d78c072aeb3bebb5/1616054753890/Rectangle+2-4.png?format=750w",desc:e.h("div",null,e.h("p",null,"Foot impression kits are made by Foam Art where skaters step inside a foam filled box in order to replicate the exact measurements and shape of the foot."),e.h("p",null,"A cast is then poured into the foot impression to build the orthopaedic arch support."))},{name:"Cast poured from foot impression kit",desc:e.h("div",null)},{name:"Orthopedic arch support",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e30c017759c5feb2ba/1616054755865/Rectangle+5-2.png?format=750w",desc:e.h("div",null,e.h("p",null,"A custom innersole that is made exactly from the skater’s foot shape. The arch support helps skaters’ feet that pronate (inward rotation) by keeping them in a neutral position. It can also help skaters that have high arches by providing additional support. This is the best way to optimize for a custom fit."),e.h("p",null,"Orthopaedic arch supports can be removed and adjusted over time."))},{name:"Allowance for non-Harlick orthotic correction",desc:e.h("p",null,"Additional depth is added to the foot bed to accommodate the thickness of a doctor’s arch support. The exact allowance may vary.")},{name:"Superfeet or power step orthotics (includes allowance)",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e30d9ceb298c7958a4/1616054755901/Rectangle+3-4.png?format=750w",desc:e.h("div",null,e.h("p",null,"A standardized, off the shelf arch support option. It helps skaters’ feet that pronate (inward rotation) by keeping them in a neutral position. It can also help skaters that have high arches by providing additional support."),e.h("p",null,"This option is not tailored precisely to a skater’s foot shape. In some instances, where skaters have extremely flat or highly arched feet, this option may not be recommended."))},{name:"Inside or outside wedge correction",desc:e.h("div",null,e.h("p",null,"An inside wedge correction is a thin wedge (⅛ to ¼ inch) that helps correct pronation (inward rotation) of the foot."),e.h("p",null,"An outside wedge correction is a thin wedge (⅛ to ¼ inch) that helps correct supination (outward rotation) of the foot."))}]},{section:"Backstays",items:[{name:"No backstay",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053b1eec02ba770d353fa7d/1616097774700/Rectangle+7.png?format=500w",desc:e.h("div",null)},{name:"Low cut backstay",desc:e.h("p",null,"¼ to ½ inch deep cutout to increase toe pointing and range of motion")},{name:"Low cut backstay with insert (lower than height of dance backstay)",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e3d1b52f422f2bd767/1616054755850/Rectangle+2-1.png?format=500w",desc:e.h("p",null,"¼ to ½ inch deep cutout to increase toe pointing and range of motion with an additional padded poron insert")},{name:"Dance backstay",image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053b26f12ac4465104f74f9/1616097903401/Rectangle+8.png?format=500w",desc:e.h("p",null,"½ to ¾ inch deep cutout to increase toe pointing and range of motion. Ideal for dance skaters")},{name:'"BB" backstay (extra padded top collar)',image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053e9b8d50e0a711a468fe6/1616112056730/Rectangle+9+%281%29.png?format=1000w",desc:e.h("p",null,"Low cut sides and back with ¼ inch polyurethane padding that extends above the top edge of the outer leather. It eliminates any discomfort at the top edge of a boot and increases overall range of motion.")}]},{section:"Special design",items:[{name:"Artistic design (inquire about design options) (Starting from $75.00)",hideNoCharge:!0,image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/6053e9bb46333f16efd03249/1616112059242/Rectangle+3.png?format=1000w",desc:e.h("div",null,e.h("p",null,"Standard shapes (star, hearts) and initials can be hand cut into the outer leather of the upper. The standard size ranges from 1 ½ to 3 inches. Artistic designs can be created in calf, suede or elk leather."),e.h("p",null,"Embroidered patches can also be incorporated into the artistic design for more precise detail."),e.h("p",null,"Additional customizations available upon request. Price may vary depending on the final design."))},{name:"Artistic crystals (inquire about design options) (Starting from $50.00)",hideNoCharge:!0,image:"https://static1.squarespace.com/static/600bc6c387812b75eb08fa1a/604df01c8a332d4efd8787f0/605309e3b706164bacffdeaa/1616054755945/Rectangle+2-3.png?format=750w",desc:e.h("div",null,e.h("p",null,"Crystals can be added to the upper near the lace holes."),e.h("p",null,"Standard crystal color options: silver, white, gold, black, orange, green, blue, purple, red Additional crystal options available upon request"))}]}];function o(o){Array.from(o.querySelectorAll(".form-item")).forEach(function(o){var i=o.querySelector(".title");if(null!==i){var n=i.innerText.replace(" *","").trim(),s=a.find(function(e){return e.section===n});if(void 0!==s){var l=document.createElement("div");l.classList.add("desc"),i.insertAdjacentElement("afterend",l),s.description&&e.render(s.description,l),Array.from(o.querySelectorAll(".option")).forEach(function(a){var o,i,n=a.querySelector("label"),l=a.innerText.replace(t.PRICE_REGEX,"").trim(),c=a.innerText.match(t.PRICE_REGEX);if(null!==n){null===(o=n.childNodes[1])||void 0===o||o.remove(),a.querySelector("input").style.display="none";var r=null===(i=s.items)||void 0===i?void 0:i.find(function(e){return e.name===l}),d=e.h("div",null,e.h("h5",null,l,!(null==r?void 0:r.hideNoCharge)&&e.h("div",{className:"price "+(null===c&&"no-cost")},null!==c?e.h(e.Fragment,null,"+$",c[1]):e.h(e.Fragment,null,"No charge"))),null==r?void 0:r.desc),h=(null==r?void 0:r.image)?e.h("div",{className:"with-thumb"},e.h("img",{src:r.image}),d):d,p=document.createElement("div");p.classList.add("desc"),n.insertAdjacentElement("beforeend",p),e.render(h,p)}})}}})}exports.applyFormDescriptions=o;
},{"preact":"u8ui","./priceCalc":"F9OG"}],"zo2T":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("arrive"),require("./styles.less");var e=require("./form"),r=require("./priceCalc");function i(i){r.renderPriceCalculator(i),e.applyFormDescriptions(i)}document.arrive('[data-form-id="600bcf825b984430bfeca409"]',i);
},{"arrive":"Nhp6","./styles.less":"f4nn","./form":"jFi6","./priceCalc":"F9OG"}]},{},["zo2T"], null)
//# sourceMappingURL=/index.js.map