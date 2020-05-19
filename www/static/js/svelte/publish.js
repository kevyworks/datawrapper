!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t=t||self).publish=e()}(this,(function(){"use strict";function t(e){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(e)}function e(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function n(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function i(t){for(var i=1;i<arguments.length;i++){var r=null!=arguments[i]?arguments[i]:{};i%2?n(Object(r),!0).forEach((function(n){e(t,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function s(t,e){return(s=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function o(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}function a(t,e,n){return(a=o()?Reflect.construct:function(t,e,n){var i=[null];i.push.apply(i,e);var r=new(Function.bind.apply(t,i));return n&&s(r,n.prototype),r}).apply(null,arguments)}function c(t){var e="function"==typeof Map?new Map:void 0;return(c=function(t){if(null===t||(n=t,-1===Function.toString.call(n).indexOf("[native code]")))return t;var n;if("function"!=typeof t)throw new TypeError("Super expression must either be null or a function");if(void 0!==e){if(e.has(t))return e.get(t);e.set(t,i)}function i(){return a(t,arguments,r(this).constructor)}return i.prototype=Object.create(t.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),s(i,t)})(t)}function u(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},s=Object.keys(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(t);for(i=0;i<s.length;i++)n=s[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}function l(t,e){return!e||"object"!=typeof e&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function d(){}function p(t,e){for(var n in e)t[n]=e[n];return t}function f(t,e){for(var n in e)t[n]=1;return t}function h(t,e){t.appendChild(e)}function b(t,e,n){t.insertBefore(e,n)}function m(t){t.parentNode.removeChild(t)}function g(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)}function v(t,e){for(var n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function _(){return document.createDocumentFragment()}function y(t){return document.createElement(t)}function w(t){return document.createTextNode(t)}function N(){return document.createComment("")}function x(t,e,n,i){t.addEventListener(e,n,i)}function T(t,e,n,i){t.removeEventListener(e,n,i)}function O(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function j(t,e){t.data=""+e}function H(t,e,n){t.style.setProperty(e,n)}function A(t,e,n){t.classList[n?"add":"remove"](e)}function k(){return Object.create(null)}function C(t){t._lock=!0,L(t._beforecreate),L(t._oncreate),L(t._aftercreate),t._lock=!1}function E(t,e){t._handlers=k(),t._slots=k(),t._bind=e._bind,t._staged={},t.options=e,t.root=e.root||t,t.store=e.store||t.root.store,e.root||(t._beforecreate=[],t._oncreate=[],t._aftercreate=[])}function L(t){for(;t&&t.length;)t.shift()()}function M(){this.store._remove(this)}var S={destroy:function(t){this.destroy=d,this.fire("destroy"),this.set=d,this._fragment.d(!1!==t),this._fragment=null,this._state={}},get:function(){return this._state},fire:function(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var i=0;i<n.length;i+=1){var r=n[i];if(!r.__calling)try{r.__calling=!0,r.call(this,e)}finally{r.__calling=!1}}},on:function(t,e){var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}},set:function(t){this._set(p({},t)),this.root._lock||C(this.root)},_recompute:d,_set:function(t){var e=this._state,n={},i=!1;for(var r in t=p(this._staged,t),this._staged={},t)this._differs(t[r],e[r])&&(n[r]=i=!0);i&&(this._state=p(p({},e),t),this._recompute(n,this._state),this._bind&&this._bind(n,this._state),this._fragment&&(this.fire("state",{changed:n,current:this._state,previous:e}),this._fragment.p(n,this._state),this.fire("update",{changed:n,current:this._state,previous:e})))},_stage:function(t){p(this._staged,t)},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_differs:function(e,n){return e!=e?n==n:e!==n||e&&"object"===t(e)||"function"==typeof e}};var U={show:function(){var t=this,e=setTimeout((function(){t.set({visible:!0})}),400);this.set({t:e})},hide:function(){var t=this.get().t;clearTimeout(t),this.set({visible:!1})}};function D(t,e){var n,i,r,s,o=t._slotted.default;return{c:function(){n=y("div"),i=y("i"),r=w("\n        "),i.className="hat-icon im im-graduation-hat svelte-19xfki7",n.className="content svelte-19xfki7"},m:function(t,e){b(t,n,e),h(n,i),h(n,r),o&&(h(n,s||(s=N())),h(n,o))},d:function(t){t&&m(n),o&&function(t,e){for(;t.nextSibling;)e.appendChild(t.nextSibling)}(s,o)}}}function P(t){E(this,t),this._state=p({visible:!1},t.data),this._intro=!0,this._slotted=t.slots||{},this._fragment=function(t,e){var n,i,r,s=e.visible&&D(t);function o(e){t.show()}function a(e){t.hide()}return{c:function(){n=y("div"),(i=y("span")).textContent="?",r=w("\n    "),s&&s.c(),i.className="help-icon svelte-19xfki7",x(n,"mouseenter",o),x(n,"mouseleave",a),n.className="help svelte-19xfki7"},m:function(t,e){b(t,n,e),h(n,i),h(n,r),s&&s.m(n,null)},p:function(e,i){i.visible?s||((s=D(t)).c(),s.m(n,null)):s&&(s.d(1),s=null)},d:function(t){t&&m(n),s&&s.d(),T(n,"mouseenter",o),T(n,"mouseleave",a)}}}(this,this._state),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}p(P.prototype,S),p(P.prototype,U);var I={};function $(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"core";"chart"===t?window.__dw&&window.__dw.vis&&window.__dw.vis.meta&&(I[t]=window.__dw.vis.meta.locale||{}):I[t]="core"===t?dw.backend.__messages.core:Object.assign({},dw.backend.__messages.core,dw.backend.__messages[t])}function G(t){var e=arguments,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"core";if(t=t.trim(),I[n]||$(n),!I[n][t])return"MISSING:"+t;var i=I[n][t];return"string"==typeof i&&arguments.length>2&&(i=i.replace(/\$(\d)/g,(function(t,n){return n=2+Number(n),void 0===e[n]?t:e[n]}))),i}function R(t,e,n,i){window._paq&&window._paq.push(["trackEvent",t,e,n,i])}function F(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=i({payload:null,raw:!1,method:"GET",baseUrl:"//".concat(dw.backend.__api_domain),mode:"cors",credentials:"include"},e,{headers:i({"Content-Type":"application/json"},e.headers)}),r=n.payload,s=n.baseUrl,o=n.raw,a=u(n,["payload","baseUrl","raw"]),c="".concat(s.replace(/\/$/,""),"/").concat(t.replace(/^\//,""));return r&&(a.body=JSON.stringify(r)),window.fetch(c,a).then((function(t){if(o)return t;if(!t.ok)throw new W(t);if(204!==t.status){var e=t.headers.get("content-type").split(";")[0];return"application/json"===e?t.json():"image/png"===e||"application/pdf"===e?t.blob():t.text()}}))}F.get=q("GET"),F.patch=q("PATCH"),F.put=q("PUT"),F.post=q("POST"),F.head=q("HEAD");function q(t){return function(e,n){if(n&&n.method)throw new Error("Setting option.method is not allowed in httpReq.".concat(t.toLowerCase(),"()"));return F(e,i({},n,{method:t}))}}F.delete=q("DELETE");var W=function(t){function e(t){var n;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),(n=l(this,r(e).call(this))).name="HttpReqError",n.status=t.status,n.statusText=t.statusText,n.message="[".concat(t.status,"] ").concat(t.statusText),n.response=t,n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&s(t,e)}(e,t),e}(c(Error));function z(t,e){var n;return{c:function(){(n=y("p")).innerHTML='<i class="fa fa-spinner fa-pulse fa-fw"></i> loading...',n.className="mini-help"},m:function(t,e){b(t,n,e)},d:function(t){t&&m(n)}}}function B(t){var e,n,i;E(this,t),this._state=p({loading:!1},t.data),this._intro=!0,this._fragment=(e=this._state,i=e.loading&&z(),{c:function(){i&&i.c(),n=N()},m:function(t,e){i&&i.m(t,e),b(t,n,e)},p:function(t,e){e.loading?i||((i=z()).c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d:function(t){i&&i.d(t),t&&m(n)}}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor))}p(B.prototype,S);var J=[100,200,300,400,500,700,800,900,1e3];var V=!0;var K={publish:function(){var t=this;this.set({publishing:!0,publishStarted:(new Date).getTime(),now:(new Date).getTime(),progress:[],publish_error:!1});var e,n,i,r,s,o=this.store;o.setMetadata("publish.embed-heights",(this.get().embed_templates,e={},n=window.$,i=n(n("#iframe-vis")[0].contentDocument),r=n("h1",i).height()+n(".chart-intro",i).height()+n(".dw-chart-notes",i).height(),s=n("#iframe-vis").height(),J.forEach((function(t){i.find("h1,.chart-intro,.dw-chart-notes").css("width",t+"px");var o=n("h1",i).height()+n(".chart-intro",i).height()+n(".dw-chart-notes",i).height();e[t]=s+(o-r)})),i.find("h1,.chart-intro,.dw-chart-notes").css("width","auto"),e)),R("Chart Editor","publish");var a=o.get().id;o.store((function(){t.set({statusUrl:"/v3/charts/".concat(a,"/publish/status/").concat(o.get().publicVersion)}),F.post("/v3/charts/".concat(a,"/publish")).then((function(e){t.set({published:!0,progress:["done"]}),F.get("/v3/charts/".concat(a)).then((function(e){R("Chart Editor","publish-success"),t.publishFinished(e)}))})).catch((function(e){t.set({publish_error:e.message}),R("Chart Editor","publish-error",e.message)})),setTimeout((function(){t.get().publishing&&t.updateStatus()}),1e3)}))},updateStatus:function(){var t=this,e=this.get().statusUrl;e&&F.get(e).then((function(e){t.set({progress:e.progress||[],now:(new Date).getTime()}),t.get().publishing&&setTimeout((function(){t.updateStatus()}),500)}))},publishFinished:function(t){var e=this;this.set({progress:["done"],published:!0,publishStarted:0,needs_republish:!1}),this.store.set({lastEditStep:5}),window.parent.postMessage({source:"datawrapper",type:"chart-publish",chartId:t.id},"*"),setTimeout((function(){return e.set({publishing:!1})}),1e3),this.store.set(t)},setEmbedCode:function(){var t=this.store,e=this.get();if(e){var n=e.embed_type?"embed-method-".concat(e.embed_type):null,i=t.get().publicUrl,r=t.getMetadata("publish.embed-codes"),s=t.getMetadata("publish.embed-height");this.set({embedCode:r&&r[n]?r[n]:"custom"===n?"":'<iframe src="'.concat(i,'" width="100%" height="').concat(s,'" scrolling="no" frameborder="0" allowtransparency="true"></iframe>')})}},copy:function(){var t=this;t.refs.embedInput.select();try{document.execCommand("copy")&&(R("Chart Editor","embedcode-copy"),t.set({copy_success:!0}),setTimeout((function(){return t.set({copy_success:!1})}),300))}catch(t){}},select:function(t,e){var n=this;e.preventDefault(),window.location.hash=t.id;var i=this.get().active_action;if(t.id===i)return this.set({active_action:"",Action:B});this.set({active_action:t.id}),t.mod?t.mod.App?this.set({Action:t.mod.App}):(this.set({Action:B}),this.refs.action.set({loading:!0}),t.mod.css&&function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;new Promise((function(n,i){var r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=function(){e&&e(),n()},r.onerror=i,document.head.appendChild(r)}))}(t.mod.css),function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;new Promise((function(n,i){var r=document.createElement("script");r.src=t,r.onload=function(){e&&e(),n()},r.onerror=i,document.body.appendChild(r)}))}(t.mod.src,(function(){setTimeout((function(){require([t.mod.id],(function(e){Object.assign(t.mod,e),n.set({Action:t.mod.App}),e.init&&e.init(n.refs.action),t.mod.data&&n.refs.action.set(t.mod.data)}))}),200)}))):t.action&&this[t.action]?(this.set({Action:B}),this[t.action]()):"function"==typeof t.action&&(this.set({Action:B}),t.action())},duplicate:function(){var t=this.store.get().id;R("Chart Editor","duplicate"),F.post("/api/charts/".concat(t,"/copy"),{baseUrl:"".concat(window.location.protocol,"//").concat(window.location.hostname)}).then((function(t){"ok"===t.status?window.location.href="/edit/".concat(t.data.id,"/visualize"):console.warn(t)}))}};function Q(){var t=this,e=this.store.get().lastEditStep;this.set({published:e>4}),window.dw.backend.fire("edit.publish.oncreate",this),this.setEmbedCode();var n=this.store;n.observeDeep("metadata.publish.embed-codes",(function(){return t.setEmbedCode()})),n.observeDeep("metadata.publish.embed-height",(function(){return t.setEmbedCode()})),n.observeDeep("publicUrl",(function(){return t.setEmbedCode()}))}function X(t){var e=t.changed,n=t.current,i=window.dw&&window.dw.backend&&window.dw.backend.setUserData;if(e.embed_type&&i){var r=window.dw.backend.__userData;if(!n.embed_type||!r)return;r.embed_type=n.embed_type,window.dw.backend.setUserData(r)}if(e.embed_type&&this.setEmbedCode(),e.shareurl_type&&i){var s=window.dw.backend.__userData;if(!n.shareurl_type||!s)return;s.shareurl_type=n.shareurl_type,window.dw.backend.setUserData(s)}if(e.published){var o=window.document.querySelector(".dw-create-publish .publish-step");o&&o.classList[n.published?"add":"remove"]("is-published")}e.auto_publish&&n.auto_publish&&V&&(this.publish(),V=!1,window.history.replaceState("","",window.location.pathname))}function Y(t){var e=this._svelte,n=e.component,i=e.ctx;n.select(i.action,t)}function Z(t,e,n){var i=Object.create(t);return i.action=e[n],i}function tt(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function et(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function nt(t,e,n){var i=Object.create(t);return i.tpl=e[n],i}function it(t,e,n){var i=Object.create(t);return i.step=e[n],i.i=n,i}function rt(t,e){var n;return{c:function(){(n=y("h2")).className="pad-top"},m:function(t,i){b(t,n,i),n.innerHTML=e.publishHed},p:function(t,e){t.publishHed&&(n.innerHTML=e.publishHed)},d:function(t){t&&m(n)}}}function st(t,e){var n,i=G("publish / publish-intro");return{c:function(){H(n=y("p"),"margin-bottom","20px")},m:function(t,e){b(t,n,e),n.innerHTML=i},p:d,d:function(t){t&&m(n)}}}function ot(t,e){var n,i=G("publish / republish-intro");return{c:function(){n=y("p")},m:function(t,e){b(t,n,e),n.innerHTML=i},p:d,d:function(t){t&&m(n)}}}function at(t,e){var n;return{c:function(){n=y("p")},m:function(t,i){b(t,n,i),n.innerHTML=e.publishIntro},p:function(t,e){t.publishIntro&&(n.innerHTML=e.publishIntro)},d:function(t){t&&m(n)}}}function ct(t,e){var n,i,r,s,o,a,c=G("publish / publish-btn");return{c:function(){n=y("span"),i=y("i"),s=w("\n            "),o=y("span"),a=w(c),i.className=r="fa fa-fw "+(e.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-8g6t36",o.className="title svelte-8g6t36",n.className="publish"},m:function(t,e){b(t,n,e),h(n,i),h(n,s),h(n,o),h(o,a)},p:function(t,e){t.publishing&&r!==(r="fa fa-fw "+(e.publishing?"fa-refresh fa-spin":"fa-cloud-upload")+" svelte-8g6t36")&&(i.className=r)},d:function(t){t&&m(n)}}}function ut(t,e){var n,i,r,s,o,a,c=G("publish / republish-btn");return{c:function(){n=y("span"),i=y("i"),s=w(" "),o=y("span"),a=w(c),i.className=r="fa fa-fw fa-refresh "+(e.publishing?"fa-spin":"")+" svelte-8g6t36",o.className="title svelte-8g6t36",n.className="re-publish"},m:function(t,e){b(t,n,e),h(n,i),h(n,s),h(n,o),h(o,a)},p:function(t,e){t.publishing&&r!==(r="fa fa-fw fa-refresh "+(e.publishing?"fa-spin":"")+" svelte-8g6t36")&&(i.className=r)},d:function(t){t&&m(n)}}}function lt(t,e){var n,i,r,s,o=G("publish / publish-btn-intro");return{c:function(){n=y("div"),(i=y("div")).innerHTML='<i class="fa fa-chevron-left"></i>',r=w("\n        "),s=y("div"),i.className="arrow svelte-8g6t36",s.className="text svelte-8g6t36",n.className="publish-intro svelte-8g6t36"},m:function(t,e){b(t,n,e),h(n,i),h(n,r),h(n,s),s.innerHTML=o},d:function(t){t&&m(n)}}}function dt(t,e){var n,i=G("publish / republish-alert");return{c:function(){(n=y("div")).className="btn-aside alert svelte-8g6t36"},m:function(t,e){b(t,n,e),n.innerHTML=i},d:function(t){t&&m(n)}}}function pt(t,e){var n,i=G("publish / publish-success");return{c:function(){(n=y("div")).className="alert alert-success svelte-8g6t36"},m:function(t,e){b(t,n,e),n.innerHTML=i},d:function(t){t&&m(n)}}}function ft(t,e){var n;return{c:function(){(n=y("div")).className="alert alert-error svelte-8g6t36"},m:function(t,i){b(t,n,i),n.innerHTML=e.publish_error},p:function(t,e){t.publish_error&&(n.innerHTML=e.publish_error)},d:function(t){t&&m(n)}}}function ht(t,e){var n,i,r,s=G("publish / progress / please-wait"),o=e.publishWait>3e3&&bt(t,e);return{c:function(){n=y("div"),i=w(s),r=w(" "),o&&o.c(),n.className="alert alert-info publishing svelte-8g6t36"},m:function(t,e){b(t,n,e),h(n,i),h(n,r),o&&o.m(n,null)},p:function(e,i){i.publishWait>3e3?o?o.p(e,i):((o=bt(t,i)).c(),o.m(n,null)):o&&(o.d(1),o=null)},d:function(t){t&&m(n),o&&o.d()}}}function bt(t,e){for(var n,i=e.progress,r=[],s=0;s<i.length;s+=1)r[s]=mt(t,it(e,i,s));return{c:function(){n=y("ul");for(var t=0;t<r.length;t+=1)r[t].c();n.className="publish-progress unstyled svelte-8g6t36"},m:function(t,e){b(t,n,e);for(var i=0;i<r.length;i+=1)r[i].m(n,null)},p:function(e,s){if(e.progress){i=s.progress;for(var o=0;o<i.length;o+=1){var a=it(s,i,o);r[o]?r[o].p(e,a):(r[o]=mt(t,a),r[o].c(),r[o].m(n,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=i.length}},d:function(t){t&&m(n),v(r,t)}}}function mt(t,e){var n,i,r,s,o,a=G("publish / status / "+e.step);return{c:function(){n=y("li"),i=y("i"),s=w(" "),o=y("noscript"),i.className=r="fa fa-fw "+(e.i<e.progress.length-1?"fa-check":"fa-spinner fa-pulse")+" svelte-8g6t36",n.className="svelte-8g6t36",A(n,"done",e.i<e.progress.length-1)},m:function(t,e){b(t,n,e),h(n,i),h(n,s),h(n,o),o.insertAdjacentHTML("afterend",a)},p:function(t,e){t.progress&&r!==(r="fa fa-fw "+(e.i<e.progress.length-1?"fa-check":"fa-spinner fa-pulse")+" svelte-8g6t36")&&(i.className=r),t.progress&&a!==(a=G("publish / status / "+e.step))&&(g(o),o.insertAdjacentHTML("afterend",a)),t.progress&&A(n,"done",e.i<e.progress.length-1)},d:function(t){t&&m(n)}}}function gt(t,e){var n,i,r,s,o,a=e.tpl.name;function c(){t.set({shareurl_type:i.__value})}return{c:function(){n=y("label"),i=y("input"),s=w(" "),o=y("noscript"),t._bindingGroups[0].push(i),x(i,"change",c),i.__value=r=e.tpl.id,i.value=i.__value,O(i,"type","radio"),i.name="url-type",i.className="svelte-8g6t36",n.className="radio"},m:function(t,r){b(t,n,r),h(n,i),i.checked=i.__value===e.shareurl_type,h(n,s),h(n,o),o.insertAdjacentHTML("afterend",a)},p:function(t,e){t.shareurl_type&&(i.checked=i.__value===e.shareurl_type),t.plugin_shareurls&&r!==(r=e.tpl.id)&&(i.__value=r),i.value=i.__value,t.plugin_shareurls&&a!==(a=e.tpl.name)&&(g(o),o.insertAdjacentHTML("afterend",a))},d:function(e){e&&m(n),t._bindingGroups[0].splice(t._bindingGroups[0].indexOf(i),1),T(i,"change",c)}}}function vt(t,e){var n,i,r,s,o,a=e.tpl.title;function c(){t.set({embed_type:i.__value})}return{c:function(){n=y("label"),i=y("input"),s=w(" "),o=y("noscript"),t._bindingGroups[1].push(i),x(i,"change",c),O(i,"type","radio"),i.__value=r=e.tpl.id,i.value=i.__value,i.className="svelte-8g6t36",n.className="radio"},m:function(t,r){b(t,n,r),h(n,i),i.checked=i.__value===e.embed_type,h(n,s),h(n,o),o.insertAdjacentHTML("afterend",a)},p:function(t,e){t.embed_type&&(i.checked=i.__value===e.embed_type),t.embed_templates&&r!==(r=e.tpl.id)&&(i.__value=r),i.value=i.__value,t.embed_templates&&a!==(a=e.tpl.title)&&(g(o),o.insertAdjacentHTML("afterend",a))},d:function(e){e&&m(n),t._bindingGroups[1].splice(t._bindingGroups[1].indexOf(i),1),T(i,"change",c)}}}function _t(t,e){var n,i,r,s,o,a,c=e.tpl.title,u=e.tpl.text;return{c:function(){n=y("div"),i=y("b"),r=w(c),s=w(":"),o=w(" "),a=y("noscript")},m:function(t,e){b(t,n,e),h(n,i),h(i,r),h(i,s),h(n,o),h(n,a),a.insertAdjacentHTML("afterend",u)},p:function(t,e){t.embed_templates&&c!==(c=e.tpl.title)&&j(r,c),t.embed_templates&&u!==(u=e.tpl.text)&&(g(a),a.insertAdjacentHTML("afterend",u))},d:function(t){t&&m(n)}}}function yt(t,e){var n;return{c:function(){n=y("p")},m:function(t,i){b(t,n,i),n.innerHTML=e.exportIntro},p:function(t,e){t.exportIntro&&(n.innerHTML=e.exportIntro)},d:function(t){t&&m(n)}}}function wt(t,e){var n,i,r,s,o,a,c,u,l=e.action.title,d=e.action.banner&&"FALSE"!=e.action.banner.text&&"-"!=e.action.banner.text&&Nt(t,e);return{c:function(){n=y("li"),i=y("a"),r=y("i"),o=y("span"),c=w("\n                "),d&&d.c(),r.className=s="fa fa-"+e.action.icon+" svelte-8g6t36",o.className="title svelte-8g6t36",i._svelte={component:t,ctx:e},x(i,"click",Y),O(i,"role","button"),i.href=a=e.action.url?e.action.url:"#"+e.action.id,n.className=u="action action-"+e.action.id+" "+(e.action.class||"")+" "+(e.action.id==e.active_action?"active":"")+" svelte-8g6t36"},m:function(t,e){b(t,n,e),h(n,i),h(i,r),h(i,o),o.innerHTML=l,h(n,c),d&&d.m(n,null)},p:function(c,p){e=p,c.sortedChartActions&&s!==(s="fa fa-"+e.action.icon+" svelte-8g6t36")&&(r.className=s),c.sortedChartActions&&l!==(l=e.action.title)&&(o.innerHTML=l),i._svelte.ctx=e,c.sortedChartActions&&a!==(a=e.action.url?e.action.url:"#"+e.action.id)&&(i.href=a),e.action.banner&&"FALSE"!=e.action.banner.text&&"-"!=e.action.banner.text?d?d.p(c,e):((d=Nt(t,e)).c(),d.m(n,null)):d&&(d.d(1),d=null),(c.sortedChartActions||c.active_action)&&u!==(u="action action-"+e.action.id+" "+(e.action.class||"")+" "+(e.action.id==e.active_action?"active":"")+" svelte-8g6t36")&&(n.className=u)},d:function(t){t&&m(n),T(i,"click",Y),d&&d.d()}}}function Nt(t,e){var n,i,r,s=e.action.banner.text;return{c:function(){n=y("div"),i=w(s),n.className="banner",n.style.cssText=r=e.action.banner.style},m:function(t,e){b(t,n,e),h(n,i)},p:function(t,e){t.sortedChartActions&&s!==(s=e.action.banner.text)&&j(i,s),t.sortedChartActions&&r!==(r=e.action.banner.style)&&(n.style.cssText=r)},d:function(t){t&&m(n)}}}function xt(t,e){var n,i=e.action&&wt(t,e);return{c:function(){i&&i.c(),n=N()},m:function(t,e){i&&i.m(t,e),b(t,n,e)},p:function(e,r){r.action?i?i.p(e,r):((i=wt(t,r)).c(),i.m(n.parentNode,n)):i&&(i.d(1),i=null)},d:function(t){i&&i.d(t),t&&m(n)}}}function Tt(t){var e=this;E(this,t),this.refs={},this._state=p(p(this.store._init(["id","publicUrl","metadata","actions"]),{active_action:"",embed_templates:[],plugin_shareurls:[],published:!1,publishing:!1,publishStarted:0,needs_republish:!1,publish_error:!1,auto_publish:!1,progress:[],shareurl_type:"default",embed_type:"responsive",copy_success:!1,Action:B,chartActions:[{id:"duplicate",icon:"code-fork",title:G("Duplicate"),order:500,action:"duplicate"}],publishHed:"",publishIntro:"",beforeExport:null,exportHed:G("publish / export-duplicate"),exportIntro:G("publish / export-duplicate / intro"),embedCode:"",statusUrl:!1}),t.data),this.store._add(this,["id","publicUrl","metadata","actions"]),this._recompute({shareurl_type:1,$id:1,$publicUrl:1,$metadata:1,plugin_shareurls:1,published:1,chartActions:1,$actions:1,publishStarted:1,now:1},this._state),this._bindingGroups=[[],[]],this._intro=!0,this._handlers.state=[X],this._handlers.destroy=[M],X.call(this,{changed:f({},this._state),current:this._state}),this._fragment=function(t,e){var n,i,r,s,o,a,c,u,l,d,p,f,g,N,A,k,C,E,L,M,S,U,D,I,$,R,F,q,W,z,B,J,V,K,Q,X,Y,it,bt,mt,wt,Nt,Tt,Ot,jt,Ht,At,kt,Ct,Et,Lt,Mt,St,Ut,Dt,Pt,It,$t,Gt,Rt,Ft,qt,Wt,zt,Bt,Jt,Vt,Kt,Qt=G("publish / share-embed"),Xt=G("publish / share-url"),Yt=G("publish / share-url / fullscreen"),Zt=G("publish / help / share-url"),te=G("publish / embed"),ee=G("publish / copy"),ne=G("publish / copy-success"),ie=G("publish / embed / help"),re=e.publishHed&&rt(t,e);function se(t){return t.publishIntro?at:t.published?ot:st}var oe=se(e),ae=oe(t,e);function ce(t){return t.published?ut:ct}var ue=ce(e),le=ue(t,e);function de(e){t.publish()}var pe=!e.published&&lt(),fe=e.needs_republish&&!e.publishing&&dt(),he=e.published&&!e.needs_republish&&e.progress&&e.progress.includes("done")&&!e.publishing&&pt(),be=e.publish_error&&ft(t,e),me=e.publishing&&ht(t,e);function ge(){t.set({shareurl_type:I.__value})}for(var ve=e.plugin_shareurls,_e=[],ye=0;ye<ve.length;ye+=1)_e[ye]=gt(t,nt(e,ve,ye));var we=new P({root:t.root,store:t.store,slots:{default:_()}}),Ne=e.embed_templates,xe=[];for(ye=0;ye<Ne.length;ye+=1)xe[ye]=vt(t,et(e,Ne,ye));function Te(n){t.copy(e.embedCode)}var Oe=e.embed_templates.slice(2),je=[];for(ye=0;ye<Oe.length;ye+=1)je[ye]=_t(t,tt(e,Oe,ye));var He=new P({root:t.root,store:t.store,slots:{default:_()}}),Ae=e.beforeExport;function ke(e){return{root:t.root,store:t.store}}if(Ae)var Ce=new Ae(ke());var Ee=e.exportIntro&&yt(t,e),Le=e.sortedChartActions,Me=[];for(ye=0;ye<Le.length;ye+=1)Me[ye]=xt(t,Z(e,Le,ye));var Se=e.Action;function Ue(e){return{root:t.root,store:t.store,data:{visible:!0,show:!0}}}if(Se)var De=new Se(Ue());return{c:function(){n=y("div"),re&&re.c(),i=w(" "),ae.c(),r=w("\n\n    "),s=y("button"),le.c(),a=w("\n\n    "),pe&&pe.c(),c=w(" "),fe&&fe.c(),u=w(" "),he&&he.c(),l=w(" "),be&&be.c(),d=w(" "),me&&me.c(),p=w("\n\n    "),f=y("div"),g=y("h2"),N=w("\n        "),A=y("div"),k=y("i"),C=w("\n            "),E=y("div"),L=y("div"),M=y("b"),S=w("\n                    "),U=y("div"),D=y("label"),I=y("input"),$=w("\n                            "),R=y("noscript"),F=w("\n                        ");for(var h=0;h<_e.length;h+=1)_e[h].c();q=w("\n                "),W=y("div"),z=y("a"),B=w(e.shareUrl),J=w("\n            "),V=y("div"),we._fragment.c(),K=w("\n\n        "),Q=y("div"),X=y("i"),Y=w("\n            "),it=y("div"),bt=y("div"),mt=y("b"),wt=w("\n                    "),Nt=y("div");for(h=0;h<xe.length;h+=1)xe[h].c();Tt=w("\n                "),Ot=y("div"),jt=y("textarea"),Ht=w("\n                    "),At=y("button"),kt=y("i"),Ct=w(" "),Et=w(ee),Lt=w("\n                    "),Mt=y("div"),St=w(ne),Dt=w("\n            "),Pt=y("div"),It=y("noscript"),$t=w(" ");for(h=0;h<je.length;h+=1)je[h].c();He._fragment.c(),Rt=w("\n\n    \n    "),Ce&&Ce._fragment.c(),Ft=w("\n\n    \n    "),qt=y("div"),Wt=y("div"),zt=y("h2"),Bt=w("\n            "),Ee&&Ee.c(),Jt=w("\n\n        "),Vt=y("ul");for(h=0;h<Me.length;h+=1)Me[h].c();Kt=w("\n\n        "),De&&De._fragment.c(),x(s,"click",de),s.disabled=e.publishing,s.className=o="btn-publish btn btn-primary btn-large "+(e.published?"":"btn-first-publish")+" svelte-8g6t36",k.className="icon fa fa-link fa-fw",t._bindingGroups[0].push(I),x(I,"change",ge),I.__value="default",I.value=I.__value,O(I,"type","radio"),I.name="url-type",I.className="svelte-8g6t36",D.className="radio",U.className="embed-options svelte-8g6t36",L.className="h",z.target="_blank",z.className="share-url svelte-8g6t36",z.href=e.shareUrl,W.className="inpt",E.className="ctrls",A.className="block",X.className="icon fa fa-code fa-fw",Nt.className="embed-options svelte-8g6t36",bt.className="h",O(jt,"type","text"),jt.className="input embed-code svelte-8g6t36",jt.readOnly=!0,jt.value=e.embedCode,kt.className="fa fa-copy",x(At,"click",Te),At.className="btn btn-copy",At.title="copy",Mt.className=Ut="copy-success "+(e.copy_success?"show":"")+" svelte-8g6t36",Ot.className="inpt",it.className="ctrls",Q.className="block",H(f,"margin-top","30px"),f.className=Gt=e.published?"":"inactive",zt.className="pad-top",Vt.className="chart-actions",qt.className="export-and-duplicate"},m:function(o,m){b(o,n,m),re&&re.m(n,null),h(n,i),ae.m(n,null),h(n,r),h(n,s),le.m(s,null),h(n,a),pe&&pe.m(n,null),h(n,c),fe&&fe.m(n,null),h(n,u),he&&he.m(n,null),h(n,l),be&&be.m(n,null),h(n,d),me&&me.m(n,null),h(n,p),h(n,f),h(f,g),g.innerHTML=Qt,h(f,N),h(f,A),h(A,k),h(A,C),h(A,E),h(E,L),h(L,M),M.innerHTML=Xt,h(L,S),h(L,U),h(U,D),h(D,I),I.checked=I.__value===e.shareurl_type,h(D,$),h(D,R),R.insertAdjacentHTML("afterend",Yt),h(U,F);for(var v=0;v<_e.length;v+=1)_e[v].m(U,null);h(E,q),h(E,W),h(W,z),h(z,B),h(A,J),h(we._slotted.default,V),V.innerHTML=Zt,we._mount(A,null),h(f,K),h(f,Q),h(Q,X),h(Q,Y),h(Q,it),h(it,bt),h(bt,mt),mt.innerHTML=te,h(bt,wt),h(bt,Nt);for(v=0;v<xe.length;v+=1)xe[v].m(Nt,null);h(it,Tt),h(it,Ot),h(Ot,jt),t.refs.embedInput=jt,h(Ot,Ht),h(Ot,At),h(At,kt),h(At,Ct),h(At,Et),h(Ot,Lt),h(Ot,Mt),h(Mt,St),h(Q,Dt),h(He._slotted.default,Pt),h(Pt,It),It.insertAdjacentHTML("beforebegin",ie),h(Pt,$t);for(v=0;v<je.length;v+=1)je[v].m(Pt,null);He._mount(Q,null),h(n,Rt),Ce&&Ce._mount(n,null),h(n,Ft),h(n,qt),h(qt,Wt),h(Wt,zt),zt.innerHTML=e.exportHed,h(Wt,Bt),Ee&&Ee.m(Wt,null),h(qt,Jt),h(qt,Vt);for(v=0;v<Me.length;v+=1)Me[v].m(Vt,null);h(qt,Kt),De&&(De._mount(qt,null),t.refs.action=De)},p:function(a,h){if((e=h).publishHed?re?re.p(a,e):((re=rt(t,e)).c(),re.m(n,i)):re&&(re.d(1),re=null),oe===(oe=se(e))&&ae?ae.p(a,e):(ae.d(1),(ae=oe(t,e)).c(),ae.m(n,r)),ue===(ue=ce(e))&&le?le.p(a,e):(le.d(1),(le=ue(t,e)).c(),le.m(s,null)),a.publishing&&(s.disabled=e.publishing),a.published&&o!==(o="btn-publish btn btn-primary btn-large "+(e.published?"":"btn-first-publish")+" svelte-8g6t36")&&(s.className=o),e.published?pe&&(pe.d(1),pe=null):pe||((pe=lt()).c(),pe.m(n,c)),e.needs_republish&&!e.publishing?fe||((fe=dt()).c(),fe.m(n,u)):fe&&(fe.d(1),fe=null),e.published&&!e.needs_republish&&e.progress&&e.progress.includes("done")&&!e.publishing?he||((he=pt()).c(),he.m(n,l)):he&&(he.d(1),he=null),e.publish_error?be?be.p(a,e):((be=ft(t,e)).c(),be.m(n,d)):be&&(be.d(1),be=null),e.publishing?me?me.p(a,e):((me=ht(t,e)).c(),me.m(n,p)):me&&(me.d(1),me=null),a.shareurl_type&&(I.checked=I.__value===e.shareurl_type),a.plugin_shareurls||a.shareurl_type){ve=e.plugin_shareurls;for(var b=0;b<ve.length;b+=1){var m=nt(e,ve,b);_e[b]?_e[b].p(a,m):(_e[b]=gt(t,m),_e[b].c(),_e[b].m(U,null))}for(;b<_e.length;b+=1)_e[b].d(1);_e.length=ve.length}if(a.shareUrl&&(j(B,e.shareUrl),z.href=e.shareUrl),a.embed_templates||a.embed_type){Ne=e.embed_templates;for(b=0;b<Ne.length;b+=1){var g=et(e,Ne,b);xe[b]?xe[b].p(a,g):(xe[b]=vt(t,g),xe[b].c(),xe[b].m(Nt,null))}for(;b<xe.length;b+=1)xe[b].d(1);xe.length=Ne.length}if(a.embedCode&&(jt.value=e.embedCode),a.copy_success&&Ut!==(Ut="copy-success "+(e.copy_success?"show":"")+" svelte-8g6t36")&&(Mt.className=Ut),a.embed_templates){Oe=e.embed_templates.slice(2);for(b=0;b<Oe.length;b+=1){var v=tt(e,Oe,b);je[b]?je[b].p(a,v):(je[b]=_t(t,v),je[b].c(),je[b].m(Pt,null))}for(;b<je.length;b+=1)je[b].d(1);je.length=Oe.length}if(a.published&&Gt!==(Gt=e.published?"":"inactive")&&(f.className=Gt),Ae!==(Ae=e.beforeExport)&&(Ce&&Ce.destroy(),Ae?((Ce=new Ae(ke()))._fragment.c(),Ce._mount(n,Ft)):Ce=null),a.exportHed&&(zt.innerHTML=e.exportHed),e.exportIntro?Ee?Ee.p(a,e):((Ee=yt(t,e)).c(),Ee.m(Wt,null)):Ee&&(Ee.d(1),Ee=null),a.sortedChartActions||a.active_action){Le=e.sortedChartActions;for(b=0;b<Le.length;b+=1){var _=Z(e,Le,b);Me[b]?Me[b].p(a,_):(Me[b]=xt(t,_),Me[b].c(),Me[b].m(Vt,null))}for(;b<Me.length;b+=1)Me[b].d(1);Me.length=Le.length}Se!==(Se=e.Action)&&(De&&De.destroy(),Se?((De=new Se(Ue()))._fragment.c(),De._mount(qt,null),t.refs.action=De):(De=null,t.refs.action===De&&(t.refs.action=null)))},d:function(e){e&&m(n),re&&re.d(),ae.d(),le.d(),T(s,"click",de),pe&&pe.d(),fe&&fe.d(),he&&he.d(),be&&be.d(),me&&me.d(),t._bindingGroups[0].splice(t._bindingGroups[0].indexOf(I),1),T(I,"change",ge),v(_e,e),we.destroy(),v(xe,e),t.refs.embedInput===jt&&(t.refs.embedInput=null),T(At,"click",Te),v(je,e),He.destroy(),Ce&&Ce.destroy(),Ee&&Ee.d(),v(Me,e),De&&De.destroy()}}}(this,this._state),this.root._oncreate.push((function(){Q.call(e),e.fire("update",{changed:f({},e._state),current:e._state})})),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),C(this))}return p(Tt.prototype,S),p(Tt.prototype,K),Tt.prototype._recompute=function(t,e){var n,i,r,s,o,a;(t.shareurl_type||t.$id||t.$publicUrl||t.$metadata||t.plugin_shareurls||t.published)&&this._differs(e.shareUrl,e.shareUrl=function(t){var e=t.shareurl_type,n=t.$id,i=t.$publicUrl,r=t.$metadata,s=t.plugin_shareurls;if(!t.published)return"https://www.datawrapper.de/...";if("default"===e)return i;var o="";return s.forEach((function(t){t.id===e&&(o=(o=t.url.replace(/%chart_id%/g,n)).replace(/%(.*?)%/g,(function(t,e){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;if(!e)return t;for(var i=e.split("."),r=t,s=0;s<i.length&&null!=r;s++)r=r[i[s]];return null==r?n:r}({id:n,metadata:r},e)})))})),o}(e))&&(t.shareUrl=!0),(t.chartActions||t.$actions)&&this._differs(e.sortedChartActions,e.sortedChartActions=(i=(n=e).chartActions,r=n.$actions,i.concat(r).filter((function(t){return"publish-s3"!==t.id})).sort((function(t,e){return t.order-e.order}))))&&(t.sortedChartActions=!0),(t.publishStarted||t.now)&&this._differs(e.publishWait,e.publishWait=(o=(s=e).publishStarted,a=s.now,o>0?a-o:0))&&(t.publishWait=!0)},{Publish:Tt}}));
