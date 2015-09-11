/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */
!function(e,t){"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){function n(e){var t="length"in e&&e.length,n=Z.type(e);return"function"===n||Z.isWindow(e)?!1:1===e.nodeType&&t?!0:"array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e}function r(e,t,n){if(Z.isFunction(t))return Z.grep(e,function(e,r){return!!t.call(e,r,e)!==n});if(t.nodeType)return Z.grep(e,function(e){return e===t!==n});if("string"==typeof t){if(at.test(t))return Z.filter(t,e,n);t=Z.filter(t,e)}return Z.grep(e,function(e){return U.call(t,e)>=0!==n})}function i(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}function o(e){var t=ht[e]={};return Z.each(e.match(dt)||[],function(e,n){t[n]=!0}),t}function s(){J.removeEventListener("DOMContentLoaded",s,!1),e.removeEventListener("load",s,!1),Z.ready()}function a(){Object.defineProperty(this.cache={},0,{get:function(){return{}}}),this.expando=Z.expando+a.uid++}function u(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(bt,"-$1").toLowerCase(),n=e.getAttribute(r),"string"==typeof n){try{n="true"===n?!0:"false"===n?!1:"null"===n?null:+n+""===n?+n:xt.test(n)?Z.parseJSON(n):n}catch(i){}yt.set(e,t,n)}else n=void 0;return n}function l(){return!0}function c(){return!1}function f(){try{return J.activeElement}catch(e){}}function p(e,t){return Z.nodeName(e,"table")&&Z.nodeName(11!==t.nodeType?t:t.firstChild,"tr")?e.getElementsByTagName("tbody")[0]||e.appendChild(e.ownerDocument.createElement("tbody")):e}function d(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function h(e){var t=Pt.exec(e.type);return t?e.type=t[1]:e.removeAttribute("type"),e}function g(e,t){for(var n=0,r=e.length;r>n;n++)vt.set(e[n],"globalEval",!t||vt.get(t[n],"globalEval"))}function m(e,t){var n,r,i,o,s,a,u,l;if(1===t.nodeType){if(vt.hasData(e)&&(o=vt.access(e),s=vt.set(t,o),l=o.events)){delete s.handle,s.events={};for(i in l)for(n=0,r=l[i].length;r>n;n++)Z.event.add(t,i,l[i][n])}yt.hasData(e)&&(a=yt.access(e),u=Z.extend({},a),yt.set(t,u))}}function v(e,t){var n=e.getElementsByTagName?e.getElementsByTagName(t||"*"):e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&Z.nodeName(e,t)?Z.merge([e],n):n}function y(e,t){var n=t.nodeName.toLowerCase();"input"===n&&Nt.test(e.type)?t.checked=e.checked:("input"===n||"textarea"===n)&&(t.defaultValue=e.defaultValue)}function x(t,n){var r,i=Z(n.createElement(t)).appendTo(n.body),o=e.getDefaultComputedStyle&&(r=e.getDefaultComputedStyle(i[0]))?r.display:Z.css(i[0],"display");return i.detach(),o}function b(e){var t=J,n=$t[e];return n||(n=x(e,t),"none"!==n&&n||(Wt=(Wt||Z("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),t=Wt[0].contentDocument,t.write(),t.close(),n=x(e,t),Wt.detach()),$t[e]=n),n}function w(e,t,n){var r,i,o,s,a=e.style;return n=n||_t(e),n&&(s=n.getPropertyValue(t)||n[t]),n&&(""!==s||Z.contains(e.ownerDocument,e)||(s=Z.style(e,t)),Bt.test(s)&&It.test(t)&&(r=a.width,i=a.minWidth,o=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=r,a.minWidth=i,a.maxWidth=o)),void 0!==s?s+"":s}function T(e,t){return{get:function(){return e()?void delete this.get:(this.get=t).apply(this,arguments)}}}function C(e,t){if(t in e)return t;for(var n=t[0].toUpperCase()+t.slice(1),r=t,i=Gt.length;i--;)if(t=Gt[i]+n,t in e)return t;return r}function N(e,t,n){var r=Xt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function k(e,t,n,r,i){for(var o=n===(r?"border":"content")?4:"width"===t?1:0,s=0;4>o;o+=2)"margin"===n&&(s+=Z.css(e,n+Tt[o],!0,i)),r?("content"===n&&(s-=Z.css(e,"padding"+Tt[o],!0,i)),"margin"!==n&&(s-=Z.css(e,"border"+Tt[o]+"Width",!0,i))):(s+=Z.css(e,"padding"+Tt[o],!0,i),"padding"!==n&&(s+=Z.css(e,"border"+Tt[o]+"Width",!0,i)));return s}function E(e,t,n){var r=!0,i="width"===t?e.offsetWidth:e.offsetHeight,o=_t(e),s="border-box"===Z.css(e,"boxSizing",!1,o);if(0>=i||null==i){if(i=w(e,t,o),(0>i||null==i)&&(i=e.style[t]),Bt.test(i))return i;r=s&&(Q.boxSizingReliable()||i===e.style[t]),i=parseFloat(i)||0}return i+k(e,t,n||(s?"border":"content"),r,o)+"px"}function S(e,t){for(var n,r,i,o=[],s=0,a=e.length;a>s;s++)r=e[s],r.style&&(o[s]=vt.get(r,"olddisplay"),n=r.style.display,t?(o[s]||"none"!==n||(r.style.display=""),""===r.style.display&&Ct(r)&&(o[s]=vt.access(r,"olddisplay",b(r.nodeName)))):(i=Ct(r),"none"===n&&i||vt.set(r,"olddisplay",i?n:Z.css(r,"display"))));for(s=0;a>s;s++)r=e[s],r.style&&(t&&"none"!==r.style.display&&""!==r.style.display||(r.style.display=t?o[s]||"":"none"));return e}function D(e,t,n,r,i){return new D.prototype.init(e,t,n,r,i)}function j(){return setTimeout(function(){Qt=void 0}),Qt=Z.now()}function A(e,t){var n,r=0,i={height:e};for(t=t?1:0;4>r;r+=2-t)n=Tt[r],i["margin"+n]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function L(e,t,n){for(var r,i=(nn[t]||[]).concat(nn["*"]),o=0,s=i.length;s>o;o++)if(r=i[o].call(n,t,e))return r}function q(e,t,n){var r,i,o,s,a,u,l,c,f=this,p={},d=e.style,h=e.nodeType&&Ct(e),g=vt.get(e,"fxshow");n.queue||(a=Z._queueHooks(e,"fx"),null==a.unqueued&&(a.unqueued=0,u=a.empty.fire,a.empty.fire=function(){a.unqueued||u()}),a.unqueued++,f.always(function(){f.always(function(){a.unqueued--,Z.queue(e,"fx").length||a.empty.fire()})})),1===e.nodeType&&("height"in t||"width"in t)&&(n.overflow=[d.overflow,d.overflowX,d.overflowY],l=Z.css(e,"display"),c="none"===l?vt.get(e,"olddisplay")||b(e.nodeName):l,"inline"===c&&"none"===Z.css(e,"float")&&(d.display="inline-block")),n.overflow&&(d.overflow="hidden",f.always(function(){d.overflow=n.overflow[0],d.overflowX=n.overflow[1],d.overflowY=n.overflow[2]}));for(r in t)if(i=t[r],Kt.exec(i)){if(delete t[r],o=o||"toggle"===i,i===(h?"hide":"show")){if("show"!==i||!g||void 0===g[r])continue;h=!0}p[r]=g&&g[r]||Z.style(e,r)}else l=void 0;if(Z.isEmptyObject(p))"inline"===("none"===l?b(e.nodeName):l)&&(d.display=l);else{g?"hidden"in g&&(h=g.hidden):g=vt.access(e,"fxshow",{}),o&&(g.hidden=!h),h?Z(e).show():f.done(function(){Z(e).hide()}),f.done(function(){var t;vt.remove(e,"fxshow");for(t in p)Z.style(e,t,p[t])});for(r in p)s=L(h?g[r]:0,r,f),r in g||(g[r]=s.start,h&&(s.end=s.start,s.start="width"===r||"height"===r?1:0))}}function H(e,t){var n,r,i,o,s;for(n in e)if(r=Z.camelCase(n),i=t[r],o=e[n],Z.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),s=Z.cssHooks[r],s&&"expand"in s){o=s.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function O(e,t,n){var r,i,o=0,s=tn.length,a=Z.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=Qt||j(),n=Math.max(0,l.startTime+l.duration-t),r=n/l.duration||0,o=1-r,s=0,u=l.tweens.length;u>s;s++)l.tweens[s].run(o);return a.notifyWith(e,[l,o,n]),1>o&&u?n:(a.resolveWith(e,[l]),!1)},l=a.promise({elem:e,props:Z.extend({},t),opts:Z.extend(!0,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:Qt||j(),duration:n.duration,tweens:[],createTween:function(t,n){var r=Z.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;r>n;n++)l.tweens[n].run(1);return t?a.resolveWith(e,[l,t]):a.rejectWith(e,[l,t]),this}}),c=l.props;for(H(c,l.opts.specialEasing);s>o;o++)if(r=tn[o].call(l,e,c,l.opts))return r;return Z.map(c,L,l),Z.isFunction(l.opts.start)&&l.opts.start.call(e,l),Z.fx.timer(Z.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always)}function F(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(dt)||[];if(Z.isFunction(n))for(;r=o[i++];)"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function P(e,t,n,r){function i(a){var u;return o[a]=!0,Z.each(e[a]||[],function(e,a){var l=a(t,n,r);return"string"!=typeof l||s||o[l]?s?!(u=l):void 0:(t.dataTypes.unshift(l),i(l),!1)}),u}var o={},s=e===bn;return i(t.dataTypes[0])||!o["*"]&&i("*")}function R(e,t){var n,r,i=Z.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&Z.extend(!0,e,r),e}function M(e,t,n){for(var r,i,o,s,a=e.contents,u=e.dataTypes;"*"===u[0];)u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in a)if(a[i]&&a[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}s||(s=i)}o=o||s}return o?(o!==u[0]&&u.unshift(o),n[o]):void 0}function W(e,t,n,r){var i,o,s,a,u,l={},c=e.dataTypes.slice();if(c[1])for(s in e.converters)l[s.toLowerCase()]=e.converters[s];for(o=c.shift();o;)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(s=l[u+" "+o]||l["* "+o],!s)for(i in l)if(a=i.split(" "),a[1]===o&&(s=l[u+" "+a[0]]||l["* "+a[0]])){s===!0?s=l[i]:l[i]!==!0&&(o=a[0],c.unshift(a[1]));break}if(s!==!0)if(s&&e["throws"])t=s(t);else try{t=s(t)}catch(f){return{state:"parsererror",error:s?f:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}function $(e,t,n,r){var i;if(Z.isArray(t))Z.each(t,function(t,i){n||kn.test(e)?r(e,i):$(e+"["+("object"==typeof i?t:"")+"]",i,n,r)});else if(n||"object"!==Z.type(t))r(e,t);else for(i in t)$(e+"["+i+"]",t[i],n,r)}function I(e){return Z.isWindow(e)?e:9===e.nodeType&&e.defaultView}var B=[],_=B.slice,z=B.concat,X=B.push,U=B.indexOf,V={},Y=V.toString,G=V.hasOwnProperty,Q={},J=e.document,K="2.1.4",Z=function(e,t){return new Z.fn.init(e,t)},et=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,tt=/^-ms-/,nt=/-([\da-z])/gi,rt=function(e,t){return t.toUpperCase()};Z.fn=Z.prototype={jquery:K,constructor:Z,selector:"",length:0,toArray:function(){return _.call(this)},get:function(e){return null!=e?0>e?this[e+this.length]:this[e]:_.call(this)},pushStack:function(e){var t=Z.merge(this.constructor(),e);return t.prevObject=this,t.context=this.context,t},each:function(e,t){return Z.each(this,e,t)},map:function(e){return this.pushStack(Z.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(_.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(0>e?t:0);return this.pushStack(n>=0&&t>n?[this[n]]:[])},end:function(){return this.prevObject||this.constructor(null)},push:X,sort:B.sort,splice:B.splice},Z.extend=Z.fn.extend=function(){var e,t,n,r,i,o,s=arguments[0]||{},a=1,u=arguments.length,l=!1;for("boolean"==typeof s&&(l=s,s=arguments[a]||{},a++),"object"==typeof s||Z.isFunction(s)||(s={}),a===u&&(s=this,a--);u>a;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],r=e[t],s!==r&&(l&&r&&(Z.isPlainObject(r)||(i=Z.isArray(r)))?(i?(i=!1,o=n&&Z.isArray(n)?n:[]):o=n&&Z.isPlainObject(n)?n:{},s[t]=Z.extend(l,o,r)):void 0!==r&&(s[t]=r));return s},Z.extend({expando:"jQuery"+(K+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isFunction:function(e){return"function"===Z.type(e)},isArray:Array.isArray,isWindow:function(e){return null!=e&&e===e.window},isNumeric:function(e){return!Z.isArray(e)&&e-parseFloat(e)+1>=0},isPlainObject:function(e){return"object"!==Z.type(e)||e.nodeType||Z.isWindow(e)?!1:e.constructor&&!G.call(e.constructor.prototype,"isPrototypeOf")?!1:!0},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},type:function(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?V[Y.call(e)]||"object":typeof e},globalEval:function(e){var t,n=eval;e=Z.trim(e),e&&(1===e.indexOf("use strict")?(t=J.createElement("script"),t.text=e,J.head.appendChild(t).parentNode.removeChild(t)):n(e))},camelCase:function(e){return e.replace(tt,"ms-").replace(nt,rt)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,t,r){var i,o=0,s=e.length,a=n(e);if(r){if(a)for(;s>o&&(i=t.apply(e[o],r),i!==!1);o++);else for(o in e)if(i=t.apply(e[o],r),i===!1)break}else if(a)for(;s>o&&(i=t.call(e[o],o,e[o]),i!==!1);o++);else for(o in e)if(i=t.call(e[o],o,e[o]),i===!1)break;return e},trim:function(e){return null==e?"":(e+"").replace(et,"")},makeArray:function(e,t){var r=t||[];return null!=e&&(n(Object(e))?Z.merge(r,"string"==typeof e?[e]:e):X.call(r,e)),r},inArray:function(e,t,n){return null==t?-1:U.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;n>r;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,s=e.length,a=!n;s>o;o++)r=!t(e[o],o),r!==a&&i.push(e[o]);return i},map:function(e,t,r){var i,o=0,s=e.length,a=n(e),u=[];if(a)for(;s>o;o++)i=t(e[o],o,r),null!=i&&u.push(i);else for(o in e)i=t(e[o],o,r),null!=i&&u.push(i);return z.apply([],u)},guid:1,proxy:function(e,t){var n,r,i;return"string"==typeof t&&(n=e[t],t=e,e=n),Z.isFunction(e)?(r=_.call(arguments,2),i=function(){return e.apply(t||this,r.concat(_.call(arguments)))},i.guid=e.guid=e.guid||Z.guid++,i):void 0},now:Date.now,support:Q}),Z.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(e,t){V["[object "+t+"]"]=t.toLowerCase()});var it=/*!
 * Sizzle CSS Selector Engine v2.2.0-pre
 * http://sizzlejs.com/
 *
 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2014-12-16
 */
function(e){function t(e,t,n,r){var i,o,s,a,u,l,f,d,h,g;if((t?t.ownerDocument||t:$)!==q&&L(t),t=t||q,n=n||[],a=t.nodeType,"string"!=typeof e||!e||1!==a&&9!==a&&11!==a)return n;if(!r&&O){if(11!==a&&(i=yt.exec(e)))if(s=i[1]){if(9===a){if(o=t.getElementById(s),!o||!o.parentNode)return n;if(o.id===s)return n.push(o),n}else if(t.ownerDocument&&(o=t.ownerDocument.getElementById(s))&&M(t,o)&&o.id===s)return n.push(o),n}else{if(i[2])return K.apply(n,t.getElementsByTagName(e)),n;if((s=i[3])&&w.getElementsByClassName)return K.apply(n,t.getElementsByClassName(s)),n}if(w.qsa&&(!F||!F.test(e))){if(d=f=W,h=t,g=1!==a&&e,1===a&&"object"!==t.nodeName.toLowerCase()){for(l=k(e),(f=t.getAttribute("id"))?d=f.replace(bt,"\\$&"):t.setAttribute("id",d),d="[id='"+d+"'] ",u=l.length;u--;)l[u]=d+p(l[u]);h=xt.test(e)&&c(t.parentNode)||t,g=l.join(",")}if(g)try{return K.apply(n,h.querySelectorAll(g)),n}catch(m){}finally{f||t.removeAttribute("id")}}}return S(e.replace(ut,"$1"),t,n,r)}function n(){function e(n,r){return t.push(n+" ")>T.cacheLength&&delete e[t.shift()],e[n+" "]=r}var t=[];return e}function r(e){return e[W]=!0,e}function i(e){var t=q.createElement("div");try{return!!e(t)}catch(n){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function o(e,t){for(var n=e.split("|"),r=e.length;r--;)T.attrHandle[n[r]]=t}function s(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&(~t.sourceIndex||V)-(~e.sourceIndex||V);if(r)return r;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function a(e){return function(t){var n=t.nodeName.toLowerCase();return"input"===n&&t.type===e}}function u(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function l(e){return r(function(t){return t=+t,r(function(n,r){for(var i,o=e([],n.length,t),s=o.length;s--;)n[i=o[s]]&&(n[i]=!(r[i]=n[i]))})})}function c(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}function f(){}function p(e){for(var t=0,n=e.length,r="";n>t;t++)r+=e[t].value;return r}function d(e,t,n){var r=t.dir,i=n&&"parentNode"===r,o=B++;return t.first?function(t,n,o){for(;t=t[r];)if(1===t.nodeType||i)return e(t,n,o)}:function(t,n,s){var a,u,l=[I,o];if(s){for(;t=t[r];)if((1===t.nodeType||i)&&e(t,n,s))return!0}else for(;t=t[r];)if(1===t.nodeType||i){if(u=t[W]||(t[W]={}),(a=u[r])&&a[0]===I&&a[1]===o)return l[2]=a[2];if(u[r]=l,l[2]=e(t,n,s))return!0}}}function h(e){return e.length>1?function(t,n,r){for(var i=e.length;i--;)if(!e[i](t,n,r))return!1;return!0}:e[0]}function g(e,n,r){for(var i=0,o=n.length;o>i;i++)t(e,n[i],r);return r}function m(e,t,n,r,i){for(var o,s=[],a=0,u=e.length,l=null!=t;u>a;a++)(o=e[a])&&(!n||n(o,r,i))&&(s.push(o),l&&t.push(a));return s}function v(e,t,n,i,o,s){return i&&!i[W]&&(i=v(i)),o&&!o[W]&&(o=v(o,s)),r(function(r,s,a,u){var l,c,f,p=[],d=[],h=s.length,v=r||g(t||"*",a.nodeType?[a]:a,[]),y=!e||!r&&t?v:m(v,p,e,a,u),x=n?o||(r?e:h||i)?[]:s:y;if(n&&n(y,x,a,u),i)for(l=m(x,d),i(l,[],a,u),c=l.length;c--;)(f=l[c])&&(x[d[c]]=!(y[d[c]]=f));if(r){if(o||e){if(o){for(l=[],c=x.length;c--;)(f=x[c])&&l.push(y[c]=f);o(null,x=[],l,u)}for(c=x.length;c--;)(f=x[c])&&(l=o?et(r,f):p[c])>-1&&(r[l]=!(s[l]=f))}}else x=m(x===s?x.splice(h,x.length):x),o?o(null,s,x,u):K.apply(s,x)})}function y(e){for(var t,n,r,i=e.length,o=T.relative[e[0].type],s=o||T.relative[" "],a=o?1:0,u=d(function(e){return e===t},s,!0),l=d(function(e){return et(t,e)>-1},s,!0),c=[function(e,n,r){var i=!o&&(r||n!==D)||((t=n).nodeType?u(e,n,r):l(e,n,r));return t=null,i}];i>a;a++)if(n=T.relative[e[a].type])c=[d(h(c),n)];else{if(n=T.filter[e[a].type].apply(null,e[a].matches),n[W]){for(r=++a;i>r&&!T.relative[e[r].type];r++);return v(a>1&&h(c),a>1&&p(e.slice(0,a-1).concat({value:" "===e[a-2].type?"*":""})).replace(ut,"$1"),n,r>a&&y(e.slice(a,r)),i>r&&y(e=e.slice(r)),i>r&&p(e))}c.push(n)}return h(c)}function x(e,n){var i=n.length>0,o=e.length>0,s=function(r,s,a,u,l){var c,f,p,d=0,h="0",g=r&&[],v=[],y=D,x=r||o&&T.find.TAG("*",l),b=I+=null==y?1:Math.random()||.1,w=x.length;for(l&&(D=s!==q&&s);h!==w&&null!=(c=x[h]);h++){if(o&&c){for(f=0;p=e[f++];)if(p(c,s,a)){u.push(c);break}l&&(I=b)}i&&((c=!p&&c)&&d--,r&&g.push(c))}if(d+=h,i&&h!==d){for(f=0;p=n[f++];)p(g,v,s,a);if(r){if(d>0)for(;h--;)g[h]||v[h]||(v[h]=Q.call(u));v=m(v)}K.apply(u,v),l&&!r&&v.length>0&&d+n.length>1&&t.uniqueSort(u)}return l&&(I=b,D=y),g};return i?r(s):s}var b,w,T,C,N,k,E,S,D,j,A,L,q,H,O,F,P,R,M,W="sizzle"+1*new Date,$=e.document,I=0,B=0,_=n(),z=n(),X=n(),U=function(e,t){return e===t&&(A=!0),0},V=1<<31,Y={}.hasOwnProperty,G=[],Q=G.pop,J=G.push,K=G.push,Z=G.slice,et=function(e,t){for(var n=0,r=e.length;r>n;n++)if(e[n]===t)return n;return-1},tt="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",nt="[\\x20\\t\\r\\n\\f]",rt="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",it=rt.replace("w","w#"),ot="\\["+nt+"*("+rt+")(?:"+nt+"*([*^$|!~]?=)"+nt+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+it+"))|)"+nt+"*\\]",st=":("+rt+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+ot+")*)|.*)\\)|)",at=new RegExp(nt+"+","g"),ut=new RegExp("^"+nt+"+|((?:^|[^\\\\])(?:\\\\.)*)"+nt+"+$","g"),lt=new RegExp("^"+nt+"*,"+nt+"*"),ct=new RegExp("^"+nt+"*([>+~]|"+nt+")"+nt+"*"),ft=new RegExp("="+nt+"*([^\\]'\"]*?)"+nt+"*\\]","g"),pt=new RegExp(st),dt=new RegExp("^"+it+"$"),ht={ID:new RegExp("^#("+rt+")"),CLASS:new RegExp("^\\.("+rt+")"),TAG:new RegExp("^("+rt.replace("w","w*")+")"),ATTR:new RegExp("^"+ot),PSEUDO:new RegExp("^"+st),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+nt+"*(even|odd|(([+-]|)(\\d*)n|)"+nt+"*(?:([+-]|)"+nt+"*(\\d+)|))"+nt+"*\\)|)","i"),bool:new RegExp("^(?:"+tt+")$","i"),needsContext:new RegExp("^"+nt+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+nt+"*((?:-\\d)?\\d*)"+nt+"*\\)|)(?=[^-]|$)","i")},gt=/^(?:input|select|textarea|button)$/i,mt=/^h\d$/i,vt=/^[^{]+\{\s*\[native \w/,yt=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,xt=/[+~]/,bt=/'|\\/g,wt=new RegExp("\\\\([\\da-f]{1,6}"+nt+"?|("+nt+")|.)","ig"),Tt=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:0>r?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},Ct=function(){L()};try{K.apply(G=Z.call($.childNodes),$.childNodes),G[$.childNodes.length].nodeType}catch(Nt){K={apply:G.length?function(e,t){J.apply(e,Z.call(t))}:function(e,t){for(var n=e.length,r=0;e[n++]=t[r++];);e.length=n-1}}}w=t.support={},N=t.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?"HTML"!==t.nodeName:!1},L=t.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:$;return r!==q&&9===r.nodeType&&r.documentElement?(q=r,H=r.documentElement,n=r.defaultView,n&&n!==n.top&&(n.addEventListener?n.addEventListener("unload",Ct,!1):n.attachEvent&&n.attachEvent("onunload",Ct)),O=!N(r),w.attributes=i(function(e){return e.className="i",!e.getAttribute("className")}),w.getElementsByTagName=i(function(e){return e.appendChild(r.createComment("")),!e.getElementsByTagName("*").length}),w.getElementsByClassName=vt.test(r.getElementsByClassName),w.getById=i(function(e){return H.appendChild(e).id=W,!r.getElementsByName||!r.getElementsByName(W).length}),w.getById?(T.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&O){var n=t.getElementById(e);return n&&n.parentNode?[n]:[]}},T.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){return e.getAttribute("id")===t}}):(delete T.find.ID,T.filter.ID=function(e){var t=e.replace(wt,Tt);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}}),T.find.TAG=w.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):w.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){for(;n=o[i++];)1===n.nodeType&&r.push(n);return r}return o},T.find.CLASS=w.getElementsByClassName&&function(e,t){return O?t.getElementsByClassName(e):void 0},P=[],F=[],(w.qsa=vt.test(r.querySelectorAll))&&(i(function(e){H.appendChild(e).innerHTML="<a id='"+W+"'></a><select id='"+W+"-\f]' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&F.push("[*^$]="+nt+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||F.push("\\["+nt+"*(?:value|"+tt+")"),e.querySelectorAll("[id~="+W+"-]").length||F.push("~="),e.querySelectorAll(":checked").length||F.push(":checked"),e.querySelectorAll("a#"+W+"+*").length||F.push(".#.+[+~]")}),i(function(e){var t=r.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&F.push("name"+nt+"*[*^$|!~]?="),e.querySelectorAll(":enabled").length||F.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),F.push(",.*:")})),(w.matchesSelector=vt.test(R=H.matches||H.webkitMatchesSelector||H.mozMatchesSelector||H.oMatchesSelector||H.msMatchesSelector))&&i(function(e){w.disconnectedMatch=R.call(e,"div"),R.call(e,"[s!='']:x"),P.push("!=",st)}),F=F.length&&new RegExp(F.join("|")),P=P.length&&new RegExp(P.join("|")),t=vt.test(H.compareDocumentPosition),M=t||vt.test(H.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},U=t?function(e,t){if(e===t)return A=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n?n:(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1,1&n||!w.sortDetached&&t.compareDocumentPosition(e)===n?e===r||e.ownerDocument===$&&M($,e)?-1:t===r||t.ownerDocument===$&&M($,t)?1:j?et(j,e)-et(j,t):0:4&n?-1:1)}:function(e,t){if(e===t)return A=!0,0;var n,i=0,o=e.parentNode,a=t.parentNode,u=[e],l=[t];if(!o||!a)return e===r?-1:t===r?1:o?-1:a?1:j?et(j,e)-et(j,t):0;if(o===a)return s(e,t);for(n=e;n=n.parentNode;)u.unshift(n);for(n=t;n=n.parentNode;)l.unshift(n);for(;u[i]===l[i];)i++;return i?s(u[i],l[i]):u[i]===$?-1:l[i]===$?1:0},r):q},t.matches=function(e,n){return t(e,null,null,n)},t.matchesSelector=function(e,n){if((e.ownerDocument||e)!==q&&L(e),n=n.replace(ft,"='$1']"),!(!w.matchesSelector||!O||P&&P.test(n)||F&&F.test(n)))try{var r=R.call(e,n);if(r||w.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(i){}return t(n,q,null,[e]).length>0},t.contains=function(e,t){return(e.ownerDocument||e)!==q&&L(e),M(e,t)},t.attr=function(e,t){(e.ownerDocument||e)!==q&&L(e);var n=T.attrHandle[t.toLowerCase()],r=n&&Y.call(T.attrHandle,t.toLowerCase())?n(e,t,!O):void 0;return void 0!==r?r:w.attributes||!O?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},t.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},t.uniqueSort=function(e){var t,n=[],r=0,i=0;if(A=!w.detectDuplicates,j=!w.sortStable&&e.slice(0),e.sort(U),A){for(;t=e[i++];)t===e[i]&&(r=n.push(i));for(;r--;)e.splice(n[r],1)}return j=null,e},C=t.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=C(e)}else if(3===i||4===i)return e.nodeValue}else for(;t=e[r++];)n+=C(t);return n},T=t.selectors={cacheLength:50,createPseudo:r,match:ht,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(wt,Tt),e[3]=(e[3]||e[4]||e[5]||"").replace(wt,Tt),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||t.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&t.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return ht.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&pt.test(n)&&(t=k(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(wt,Tt).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=_[e+" "];return t||(t=new RegExp("(^|"+nt+")"+e+"("+nt+"|$)"))&&_(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,n,r){return function(i){var o=t.attr(i,e);return null==o?"!="===n:n?(o+="","="===n?o===r:"!="===n?o!==r:"^="===n?r&&0===o.indexOf(r):"*="===n?r&&o.indexOf(r)>-1:"$="===n?r&&o.slice(-r.length)===r:"~="===n?(" "+o.replace(at," ")+" ").indexOf(r)>-1:"|="===n?o===r||o.slice(0,r.length+1)===r+"-":!1):!0}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),s="last"!==e.slice(-4),a="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==s?"nextSibling":"previousSibling",m=t.parentNode,v=a&&t.nodeName.toLowerCase(),y=!u&&!a;if(m){if(o){for(;g;){for(f=t;f=f[g];)if(a?f.nodeName.toLowerCase()===v:1===f.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[s?m.firstChild:m.lastChild],s&&y){for(c=m[W]||(m[W]={}),l=c[e]||[],d=l[0]===I&&l[1],p=l[0]===I&&l[2],f=d&&m.childNodes[d];f=++d&&f&&f[g]||(p=d=0)||h.pop();)if(1===f.nodeType&&++p&&f===t){c[e]=[I,d,p];break}}else if(y&&(l=(t[W]||(t[W]={}))[e])&&l[0]===I)p=l[1];else for(;(f=++d&&f&&f[g]||(p=d=0)||h.pop())&&((a?f.nodeName.toLowerCase()!==v:1!==f.nodeType)||!++p||(y&&((f[W]||(f[W]={}))[e]=[I,p]),f!==t)););return p-=i,p===r||p%r===0&&p/r>=0}}},PSEUDO:function(e,n){var i,o=T.pseudos[e]||T.setFilters[e.toLowerCase()]||t.error("unsupported pseudo: "+e);return o[W]?o(n):o.length>1?(i=[e,e,"",n],T.setFilters.hasOwnProperty(e.toLowerCase())?r(function(e,t){for(var r,i=o(e,n),s=i.length;s--;)r=et(e,i[s]),e[r]=!(t[r]=i[s])}):function(e){return o(e,0,i)}):o}},pseudos:{not:r(function(e){var t=[],n=[],i=E(e.replace(ut,"$1"));return i[W]?r(function(e,t,n,r){for(var o,s=i(e,null,r,[]),a=e.length;a--;)(o=s[a])&&(e[a]=!(t[a]=o))}):function(e,r,o){return t[0]=e,i(t,null,o,n),t[0]=null,!n.pop()}}),has:r(function(e){return function(n){return t(e,n).length>0}}),contains:r(function(e){return e=e.replace(wt,Tt),function(t){return(t.textContent||t.innerText||C(t)).indexOf(e)>-1}}),lang:r(function(e){return dt.test(e||"")||t.error("unsupported lang: "+e),e=e.replace(wt,Tt).toLowerCase(),function(t){var n;do if(n=O?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return n=n.toLowerCase(),n===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===H},focus:function(e){return e===q.activeElement&&(!q.hasFocus||q.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:function(e){return e.disabled===!1},disabled:function(e){return e.disabled===!0},checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,e.selected===!0},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.pseudos.empty(e)},header:function(e){return mt.test(e.nodeName)},input:function(e){return gt.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:l(function(){return[0]}),last:l(function(e,t){return[t-1]}),eq:l(function(e,t,n){return[0>n?n+t:n]}),even:l(function(e,t){for(var n=0;t>n;n+=2)e.push(n);return e}),odd:l(function(e,t){for(var n=1;t>n;n+=2)e.push(n);return e}),lt:l(function(e,t,n){for(var r=0>n?n+t:n;--r>=0;)e.push(r);return e}),gt:l(function(e,t,n){for(var r=0>n?n+t:n;++r<t;)e.push(r);return e})}},T.pseudos.nth=T.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.pseudos[b]=a(b);for(b in{submit:!0,reset:!0})T.pseudos[b]=u(b);return f.prototype=T.filters=T.pseudos,T.setFilters=new f,k=t.tokenize=function(e,n){var r,i,o,s,a,u,l,c=z[e+" "];if(c)return n?0:c.slice(0);for(a=e,u=[],l=T.preFilter;a;){(!r||(i=lt.exec(a)))&&(i&&(a=a.slice(i[0].length)||a),u.push(o=[])),r=!1,(i=ct.exec(a))&&(r=i.shift(),o.push({value:r,type:i[0].replace(ut," ")}),a=a.slice(r.length));for(s in T.filter)!(i=ht[s].exec(a))||l[s]&&!(i=l[s](i))||(r=i.shift(),o.push({value:r,type:s,matches:i}),a=a.slice(r.length));if(!r)break}return n?a.length:a?t.error(e):z(e,u).slice(0)},E=t.compile=function(e,t){var n,r=[],i=[],o=X[e+" "];if(!o){for(t||(t=k(e)),n=t.length;n--;)o=y(t[n]),o[W]?r.push(o):i.push(o);o=X(e,x(i,r)),o.selector=e}return o},S=t.select=function(e,t,n,r){var i,o,s,a,u,l="function"==typeof e&&e,f=!r&&k(e=l.selector||e);if(n=n||[],1===f.length){if(o=f[0]=f[0].slice(0),o.length>2&&"ID"===(s=o[0]).type&&w.getById&&9===t.nodeType&&O&&T.relative[o[1].type]){if(t=(T.find.ID(s.matches[0].replace(wt,Tt),t)||[])[0],!t)return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}for(i=ht.needsContext.test(e)?0:o.length;i--&&(s=o[i],!T.relative[a=s.type]);)if((u=T.find[a])&&(r=u(s.matches[0].replace(wt,Tt),xt.test(o[0].type)&&c(t.parentNode)||t))){if(o.splice(i,1),e=r.length&&p(o),!e)return K.apply(n,r),n;break}}return(l||E(e,f))(r,t,!O,n,xt.test(e)&&c(t.parentNode)||t),n},w.sortStable=W.split("").sort(U).join("")===W,w.detectDuplicates=!!A,L(),w.sortDetached=i(function(e){return 1&e.compareDocumentPosition(q.createElement("div"))}),i(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||o("type|href|height|width",function(e,t,n){return n?void 0:e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),w.attributes&&i(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||o("value",function(e,t,n){return n||"input"!==e.nodeName.toLowerCase()?void 0:e.defaultValue}),i(function(e){return null==e.getAttribute("disabled")})||o(tt,function(e,t,n){var r;return n?void 0:e[t]===!0?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),t}(e);Z.find=it,Z.expr=it.selectors,Z.expr[":"]=Z.expr.pseudos,Z.unique=it.uniqueSort,Z.text=it.getText,Z.isXMLDoc=it.isXML,Z.contains=it.contains;var ot=Z.expr.match.needsContext,st=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,at=/^.[^:#\[\.,]*$/;Z.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?Z.find.matchesSelector(r,e)?[r]:[]:Z.find.matches(e,Z.grep(t,function(e){return 1===e.nodeType}))},Z.fn.extend({find:function(e){var t,n=this.length,r=[],i=this;if("string"!=typeof e)return this.pushStack(Z(e).filter(function(){for(t=0;n>t;t++)if(Z.contains(i[t],this))return!0}));for(t=0;n>t;t++)Z.find(e,i[t],r);return r=this.pushStack(n>1?Z.unique(r):r),r.selector=this.selector?this.selector+" "+e:e,r},filter:function(e){return this.pushStack(r(this,e||[],!1))},not:function(e){return this.pushStack(r(this,e||[],!0))},is:function(e){return!!r(this,"string"==typeof e&&ot.test(e)?Z(e):e||[],!1).length}});var ut,lt=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,ct=Z.fn.init=function(e,t){var n,r;if(!e)return this;if("string"==typeof e){if(n="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:lt.exec(e),!n||!n[1]&&t)return!t||t.jquery?(t||ut).find(e):this.constructor(t).find(e);if(n[1]){if(t=t instanceof Z?t[0]:t,Z.merge(this,Z.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:J,!0)),st.test(n[1])&&Z.isPlainObject(t))for(n in t)Z.isFunction(this[n])?this[n](t[n]):this.attr(n,t[n]);return this}return r=J.getElementById(n[2]),r&&r.parentNode&&(this.length=1,this[0]=r),this.context=J,this.selector=e,this}return e.nodeType?(this.context=this[0]=e,this.length=1,this):Z.isFunction(e)?"undefined"!=typeof ut.ready?ut.ready(e):e(Z):(void 0!==e.selector&&(this.selector=e.selector,this.context=e.context),Z.makeArray(e,this))};ct.prototype=Z.fn,ut=Z(J);var ft=/^(?:parents|prev(?:Until|All))/,pt={children:!0,contents:!0,next:!0,prev:!0};Z.extend({dir:function(e,t,n){for(var r=[],i=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(i&&Z(e).is(n))break;r.push(e)}return r},sibling:function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}}),Z.fn.extend({has:function(e){var t=Z(e,this),n=t.length;return this.filter(function(){for(var e=0;n>e;e++)if(Z.contains(this,t[e]))return!0})},closest:function(e,t){for(var n,r=0,i=this.length,o=[],s=ot.test(e)||"string"!=typeof e?Z(e,t||this.context):0;i>r;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?s.index(n)>-1:1===n.nodeType&&Z.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?Z.unique(o):o)},index:function(e){return e?"string"==typeof e?U.call(Z(e),this[0]):U.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(Z.unique(Z.merge(this.get(),Z(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),Z.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return Z.dir(e,"parentNode")},parentsUntil:function(e,t,n){return Z.dir(e,"parentNode",n)},next:function(e){return i(e,"nextSibling")},prev:function(e){return i(e,"previousSibling")},nextAll:function(e){return Z.dir(e,"nextSibling")},prevAll:function(e){return Z.dir(e,"previousSibling")},nextUntil:function(e,t,n){return Z.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return Z.dir(e,"previousSibling",n)},siblings:function(e){return Z.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return Z.sibling(e.firstChild)},contents:function(e){return e.contentDocument||Z.merge([],e.childNodes)}},function(e,t){Z.fn[e]=function(n,r){var i=Z.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=Z.filter(r,i)),this.length>1&&(pt[e]||Z.unique(i),ft.test(e)&&i.reverse()),this.pushStack(i)}});var dt=/\S+/g,ht={};Z.Callbacks=function(e){e="string"==typeof e?ht[e]||o(e):Z.extend({},e);var t,n,r,i,s,a,u=[],l=!e.once&&[],c=function(o){for(t=e.memory&&o,n=!0,a=i||0,i=0,s=u.length,r=!0;u&&s>a;a++)if(u[a].apply(o[0],o[1])===!1&&e.stopOnFalse){t=!1;break}r=!1,u&&(l?l.length&&c(l.shift()):t?u=[]:f.disable())},f={add:function(){if(u){var n=u.length;!function o(t){Z.each(t,function(t,n){var r=Z.type(n);"function"===r?e.unique&&f.has(n)||u.push(n):n&&n.length&&"string"!==r&&o(n)})}(arguments),r?s=u.length:t&&(i=n,c(t))}return this},remove:function(){return u&&Z.each(arguments,function(e,t){for(var n;(n=Z.inArray(t,u,n))>-1;)u.splice(n,1),r&&(s>=n&&s--,a>=n&&a--)}),this},has:function(e){return e?Z.inArray(e,u)>-1:!(!u||!u.length)},empty:function(){return u=[],s=0,this},disable:function(){return u=l=t=void 0,this},disabled:function(){return!u},lock:function(){return l=void 0,t||f.disable(),this},locked:function(){return!l},fireWith:function(e,t){return!u||n&&!l||(t=t||[],t=[e,t.slice?t.slice():t],r?l.push(t):c(t)),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!n}};return f},Z.extend({Deferred:function(e){var t=[["resolve","done",Z.Callbacks("once memory"),"resolved"],["reject","fail",Z.Callbacks("once memory"),"rejected"],["notify","progress",Z.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){return i.done(arguments).fail(arguments),this},then:function(){var e=arguments;return Z.Deferred(function(n){Z.each(t,function(t,o){var s=Z.isFunction(e[t])&&e[t];i[o[1]](function(){var e=s&&s.apply(this,arguments);e&&Z.isFunction(e.promise)?e.promise().done(n.resolve).fail(n.reject).progress(n.notify):n[o[0]+"With"](this===r?n.promise():this,s?[e]:arguments)})}),e=null}).promise()},promise:function(e){return null!=e?Z.extend(e,r):r}},i={};return r.pipe=r.then,Z.each(t,function(e,o){var s=o[2],a=o[3];r[o[1]]=s.add,a&&s.add(function(){n=a},t[1^e][2].disable,t[2][2].lock),i[o[0]]=function(){return i[o[0]+"With"](this===i?r:this,arguments),this},i[o[0]+"With"]=s.fireWith}),r.promise(i),e&&e.call(i,i),i},when:function(e){var t,n,r,i=0,o=_.call(arguments),s=o.length,a=1!==s||e&&Z.isFunction(e.promise)?s:0,u=1===a?e:Z.Deferred(),l=function(e,n,r){return function(i){n[e]=this,r[e]=arguments.length>1?_.call(arguments):i,r===t?u.notifyWith(n,r):--a||u.resolveWith(n,r)}};if(s>1)for(t=new Array(s),n=new Array(s),r=new Array(s);s>i;i++)o[i]&&Z.isFunction(o[i].promise)?o[i].promise().done(l(i,r,o)).fail(u.reject).progress(l(i,n,t)):--a;return a||u.resolveWith(r,o),u.promise()}});var gt;Z.fn.ready=function(e){return Z.ready.promise().done(e),this},Z.extend({isReady:!1,readyWait:1,holdReady:function(e){e?Z.readyWait++:Z.ready(!0)},ready:function(e){(e===!0?--Z.readyWait:Z.isReady)||(Z.isReady=!0,e!==!0&&--Z.readyWait>0||(gt.resolveWith(J,[Z]),Z.fn.triggerHandler&&(Z(J).triggerHandler("ready"),Z(J).off("ready"))))}}),Z.ready.promise=function(t){return gt||(gt=Z.Deferred(),"complete"===J.readyState?setTimeout(Z.ready):(J.addEventListener("DOMContentLoaded",s,!1),e.addEventListener("load",s,!1))),gt.promise(t)},Z.ready.promise();var mt=Z.access=function(e,t,n,r,i,o,s){var a=0,u=e.length,l=null==n;if("object"===Z.type(n)){i=!0;for(a in n)Z.access(e,t,a,n[a],!0,o,s)}else if(void 0!==r&&(i=!0,Z.isFunction(r)||(s=!0),l&&(s?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(Z(e),n)})),t))for(;u>a;a++)t(e[a],n,s?r:r.call(e[a],a,t(e[a],n)));return i?e:l?t.call(e):u?t(e[0],n):o};Z.acceptData=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType},a.uid=1,a.accepts=Z.acceptData,a.prototype={key:function(e){if(!a.accepts(e))return 0;var t={},n=e[this.expando];if(!n){n=a.uid++;try{t[this.expando]={value:n},Object.defineProperties(e,t)}catch(r){t[this.expando]=n,Z.extend(e,t)}}return this.cache[n]||(this.cache[n]={}),n},set:function(e,t,n){var r,i=this.key(e),o=this.cache[i];if("string"==typeof t)o[t]=n;else if(Z.isEmptyObject(o))Z.extend(this.cache[i],t);else for(r in t)o[r]=t[r];return o},get:function(e,t){var n=this.cache[this.key(e)];return void 0===t?n:n[t]},access:function(e,t,n){var r;return void 0===t||t&&"string"==typeof t&&void 0===n?(r=this.get(e,t),void 0!==r?r:this.get(e,Z.camelCase(t))):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r,i,o=this.key(e),s=this.cache[o];if(void 0===t)this.cache[o]={};else{Z.isArray(t)?r=t.concat(t.map(Z.camelCase)):(i=Z.camelCase(t),t in s?r=[t,i]:(r=i,r=r in s?[r]:r.match(dt)||[])),n=r.length;for(;n--;)delete s[r[n]]}},hasData:function(e){return!Z.isEmptyObject(this.cache[e[this.expando]]||{})},discard:function(e){e[this.expando]&&delete this.cache[e[this.expando]]}};var vt=new a,yt=new a,xt=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,bt=/([A-Z])/g;Z.extend({hasData:function(e){return yt.hasData(e)||vt.hasData(e)},data:function(e,t,n){return yt.access(e,t,n)},removeData:function(e,t){yt.remove(e,t)},_data:function(e,t,n){return vt.access(e,t,n)},_removeData:function(e,t){vt.remove(e,t)}}),Z.fn.extend({data:function(e,t){var n,r,i,o=this[0],s=o&&o.attributes;if(void 0===e){if(this.length&&(i=yt.get(o),1===o.nodeType&&!vt.get(o,"hasDataAttrs"))){for(n=s.length;n--;)s[n]&&(r=s[n].name,0===r.indexOf("data-")&&(r=Z.camelCase(r.slice(5)),u(o,r,i[r])));vt.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){yt.set(this,e)}):mt(this,function(t){var n,r=Z.camelCase(e);if(o&&void 0===t){if(n=yt.get(o,e),void 0!==n)return n;if(n=yt.get(o,r),void 0!==n)return n;if(n=u(o,r,void 0),void 0!==n)return n}else this.each(function(){var n=yt.get(this,r);yt.set(this,r,t),-1!==e.indexOf("-")&&void 0!==n&&yt.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){yt.remove(this,e)})}}),Z.extend({queue:function(e,t,n){var r;return e?(t=(t||"fx")+"queue",r=vt.get(e,t),n&&(!r||Z.isArray(n)?r=vt.access(e,t,Z.makeArray(n)):r.push(n)),r||[]):void 0},dequeue:function(e,t){t=t||"fx";var n=Z.queue(e,t),r=n.length,i=n.shift(),o=Z._queueHooks(e,t),s=function(){Z.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,s,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return vt.get(e,n)||vt.access(e,n,{empty:Z.Callbacks("once memory").add(function(){vt.remove(e,[t+"queue",n])})})}}),Z.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?Z.queue(this[0],e):void 0===t?this:this.each(function(){var n=Z.queue(this,e,t);Z._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&Z.dequeue(this,e)})},dequeue:function(e){return this.each(function(){Z.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=Z.Deferred(),o=this,s=this.length,a=function(){--r||i.resolveWith(o,[o])};for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";s--;)n=vt.get(o[s],e+"queueHooks"),n&&n.empty&&(r++,n.empty.add(a));return a(),i.promise(t)}});var wt=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,Tt=["Top","Right","Bottom","Left"],Ct=function(e,t){return e=t||e,"none"===Z.css(e,"display")||!Z.contains(e.ownerDocument,e)},Nt=/^(?:checkbox|radio)$/i;!function(){var e=J.createDocumentFragment(),t=e.appendChild(J.createElement("div")),n=J.createElement("input");n.setAttribute("type","radio"),n.setAttribute("checked","checked"),n.setAttribute("name","t"),t.appendChild(n),Q.checkClone=t.cloneNode(!0).cloneNode(!0).lastChild.checked,t.innerHTML="<textarea>x</textarea>",Q.noCloneChecked=!!t.cloneNode(!0).lastChild.defaultValue}();var kt="undefined";Q.focusinBubbles="onfocusin"in e;var Et=/^key/,St=/^(?:mouse|pointer|contextmenu)|click/,Dt=/^(?:focusinfocus|focusoutblur)$/,jt=/^([^.]*)(?:\.(.+)|)$/;Z.event={global:{},add:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=vt.get(e);if(m)for(n.handler&&(o=n,n=o.handler,i=o.selector),n.guid||(n.guid=Z.guid++),(u=m.events)||(u=m.events={}),(s=m.handle)||(s=m.handle=function(t){return typeof Z!==kt&&Z.event.triggered!==t.type?Z.event.dispatch.apply(e,arguments):void 0}),t=(t||"").match(dt)||[""],l=t.length;l--;)a=jt.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d&&(f=Z.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=Z.event.special[d]||{},c=Z.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&Z.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||(p=u[d]=[],p.delegateCount=0,f.setup&&f.setup.call(e,r,h,s)!==!1||e.addEventListener&&e.addEventListener(d,s,!1)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),Z.event.global[d]=!0)},remove:function(e,t,n,r,i){var o,s,a,u,l,c,f,p,d,h,g,m=vt.hasData(e)&&vt.get(e);if(m&&(u=m.events)){for(t=(t||"").match(dt)||[""],l=t.length;l--;)if(a=jt.exec(t[l])||[],d=g=a[1],h=(a[2]||"").split(".").sort(),d){for(f=Z.event.special[d]||{},d=(r?f.delegateType:f.bindType)||d,p=u[d]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=o=p.length;o--;)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||a&&!a.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));s&&!p.length&&(f.teardown&&f.teardown.call(e,h,m.handle)!==!1||Z.removeEvent(e,d,m.handle),delete u[d])}else for(d in u)Z.event.remove(e,d+t[l],n,r,!0);Z.isEmptyObject(u)&&(delete m.handle,vt.remove(e,"events"))}},trigger:function(t,n,r,i){var o,s,a,u,l,c,f,p=[r||J],d=G.call(t,"type")?t.type:t,h=G.call(t,"namespace")?t.namespace.split("."):[];if(s=a=r=r||J,3!==r.nodeType&&8!==r.nodeType&&!Dt.test(d+Z.event.triggered)&&(d.indexOf(".")>=0&&(h=d.split("."),d=h.shift(),h.sort()),l=d.indexOf(":")<0&&"on"+d,t=t[Z.expando]?t:new Z.Event(d,"object"==typeof t&&t),t.isTrigger=i?2:3,t.namespace=h.join("."),t.namespace_re=t.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:Z.makeArray(n,[t]),f=Z.event.special[d]||{},i||!f.trigger||f.trigger.apply(r,n)!==!1)){if(!i&&!f.noBubble&&!Z.isWindow(r)){for(u=f.delegateType||d,Dt.test(u+d)||(s=s.parentNode);s;s=s.parentNode)p.push(s),a=s;a===(r.ownerDocument||J)&&p.push(a.defaultView||a.parentWindow||e)}for(o=0;(s=p[o++])&&!t.isPropagationStopped();)t.type=o>1?u:f.bindType||d,c=(vt.get(s,"events")||{})[t.type]&&vt.get(s,"handle"),c&&c.apply(s,n),c=l&&s[l],c&&c.apply&&Z.acceptData(s)&&(t.result=c.apply(s,n),t.result===!1&&t.preventDefault());return t.type=d,i||t.isDefaultPrevented()||f._default&&f._default.apply(p.pop(),n)!==!1||!Z.acceptData(r)||l&&Z.isFunction(r[d])&&!Z.isWindow(r)&&(a=r[l],a&&(r[l]=null),Z.event.triggered=d,r[d](),Z.event.triggered=void 0,a&&(r[l]=a)),t.result
}},dispatch:function(e){e=Z.event.fix(e);var t,n,r,i,o,s=[],a=_.call(arguments),u=(vt.get(this,"events")||{})[e.type]||[],l=Z.event.special[e.type]||{};if(a[0]=e,e.delegateTarget=this,!l.preDispatch||l.preDispatch.call(this,e)!==!1){for(s=Z.event.handlers.call(this,e,u),t=0;(i=s[t++])&&!e.isPropagationStopped();)for(e.currentTarget=i.elem,n=0;(o=i.handlers[n++])&&!e.isImmediatePropagationStopped();)(!e.namespace_re||e.namespace_re.test(o.namespace))&&(e.handleObj=o,e.data=o.data,r=((Z.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,a),void 0!==r&&(e.result=r)===!1&&(e.preventDefault(),e.stopPropagation()));return l.postDispatch&&l.postDispatch.call(this,e),e.result}},handlers:function(e,t){var n,r,i,o,s=[],a=t.delegateCount,u=e.target;if(a&&u.nodeType&&(!e.button||"click"!==e.type))for(;u!==this;u=u.parentNode||this)if(u.disabled!==!0||"click"!==e.type){for(r=[],n=0;a>n;n++)o=t[n],i=o.selector+" ",void 0===r[i]&&(r[i]=o.needsContext?Z(i,this).index(u)>=0:Z.find(i,this,null,[u]).length),r[i]&&r.push(o);r.length&&s.push({elem:u,handlers:r})}return a<t.length&&s.push({elem:this,handlers:t.slice(a)}),s},props:"altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){return null==e.which&&(e.which=null!=t.charCode?t.charCode:t.keyCode),e}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,t){var n,r,i,o=t.button;return null==e.pageX&&null!=t.clientX&&(n=e.target.ownerDocument||J,r=n.documentElement,i=n.body,e.pageX=t.clientX+(r&&r.scrollLeft||i&&i.scrollLeft||0)-(r&&r.clientLeft||i&&i.clientLeft||0),e.pageY=t.clientY+(r&&r.scrollTop||i&&i.scrollTop||0)-(r&&r.clientTop||i&&i.clientTop||0)),e.which||void 0===o||(e.which=1&o?1:2&o?3:4&o?2:0),e}},fix:function(e){if(e[Z.expando])return e;var t,n,r,i=e.type,o=e,s=this.fixHooks[i];for(s||(this.fixHooks[i]=s=St.test(i)?this.mouseHooks:Et.test(i)?this.keyHooks:{}),r=s.props?this.props.concat(s.props):this.props,e=new Z.Event(o),t=r.length;t--;)n=r[t],e[n]=o[n];return e.target||(e.target=J),3===e.target.nodeType&&(e.target=e.target.parentNode),s.filter?s.filter(e,o):e},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==f()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===f()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&Z.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(e){return Z.nodeName(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}},simulate:function(e,t,n,r){var i=Z.extend(new Z.Event,n,{type:e,isSimulated:!0,originalEvent:{}});r?Z.event.trigger(i,null,t):Z.event.dispatch.call(t,i),i.isDefaultPrevented()&&n.preventDefault()}},Z.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n,!1)},Z.Event=function(e,t){return this instanceof Z.Event?(e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&e.returnValue===!1?l:c):this.type=e,t&&Z.extend(this,t),this.timeStamp=e&&e.timeStamp||Z.now(),void(this[Z.expando]=!0)):new Z.Event(e,t)},Z.Event.prototype={isDefaultPrevented:c,isPropagationStopped:c,isImmediatePropagationStopped:c,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=l,e&&e.preventDefault&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=l,e&&e.stopPropagation&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=l,e&&e.stopImmediatePropagation&&e.stopImmediatePropagation(),this.stopPropagation()}},Z.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){Z.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return(!i||i!==r&&!Z.contains(r,i))&&(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),Q.focusinBubbles||Z.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){Z.event.simulate(t,e.target,Z.event.fix(e),!0)};Z.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=vt.access(r,t);i||r.addEventListener(e,n,!0),vt.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=vt.access(r,t)-1;i?vt.access(r,t,i):(r.removeEventListener(e,n,!0),vt.remove(r,t))}}}),Z.fn.extend({on:function(e,t,n,r,i){var o,s;if("object"==typeof e){"string"!=typeof t&&(n=n||t,t=void 0);for(s in e)this.on(s,t,n,e[s],i);return this}if(null==n&&null==r?(r=t,n=t=void 0):null==r&&("string"==typeof t?(r=n,n=void 0):(r=n,n=t,t=void 0)),r===!1)r=c;else if(!r)return this;return 1===i&&(o=r,r=function(e){return Z().off(e),o.apply(this,arguments)},r.guid=o.guid||(o.guid=Z.guid++)),this.each(function(){Z.event.add(this,e,r,n,t)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,Z(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(t===!1||"function"==typeof t)&&(n=t,t=void 0),n===!1&&(n=c),this.each(function(){Z.event.remove(this,e,n,t)})},trigger:function(e,t){return this.each(function(){Z.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];return n?Z.event.trigger(e,t,n,!0):void 0}});var At=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,Lt=/<([\w:]+)/,qt=/<|&#?\w+;/,Ht=/<(?:script|style|link)/i,Ot=/checked\s*(?:[^=]|=\s*.checked.)/i,Ft=/^$|\/(?:java|ecma)script/i,Pt=/^true\/(.*)/,Rt=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,Mt={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};Mt.optgroup=Mt.option,Mt.tbody=Mt.tfoot=Mt.colgroup=Mt.caption=Mt.thead,Mt.th=Mt.td,Z.extend({clone:function(e,t,n){var r,i,o,s,a=e.cloneNode(!0),u=Z.contains(e.ownerDocument,e);if(!(Q.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||Z.isXMLDoc(e)))for(s=v(a),o=v(e),r=0,i=o.length;i>r;r++)y(o[r],s[r]);if(t)if(n)for(o=o||v(e),s=s||v(a),r=0,i=o.length;i>r;r++)m(o[r],s[r]);else m(e,a);return s=v(a,"script"),s.length>0&&g(s,!u&&v(e,"script")),a},buildFragment:function(e,t,n,r){for(var i,o,s,a,u,l,c=t.createDocumentFragment(),f=[],p=0,d=e.length;d>p;p++)if(i=e[p],i||0===i)if("object"===Z.type(i))Z.merge(f,i.nodeType?[i]:i);else if(qt.test(i)){for(o=o||c.appendChild(t.createElement("div")),s=(Lt.exec(i)||["",""])[1].toLowerCase(),a=Mt[s]||Mt._default,o.innerHTML=a[1]+i.replace(At,"<$1></$2>")+a[2],l=a[0];l--;)o=o.lastChild;Z.merge(f,o.childNodes),o=c.firstChild,o.textContent=""}else f.push(t.createTextNode(i));for(c.textContent="",p=0;i=f[p++];)if((!r||-1===Z.inArray(i,r))&&(u=Z.contains(i.ownerDocument,i),o=v(c.appendChild(i),"script"),u&&g(o),n))for(l=0;i=o[l++];)Ft.test(i.type||"")&&n.push(i);return c},cleanData:function(e){for(var t,n,r,i,o=Z.event.special,s=0;void 0!==(n=e[s]);s++){if(Z.acceptData(n)&&(i=n[vt.expando],i&&(t=vt.cache[i]))){if(t.events)for(r in t.events)o[r]?Z.event.remove(n,r):Z.removeEvent(n,r,t.handle);vt.cache[i]&&delete vt.cache[i]}delete yt.cache[n[yt.expando]]}}}),Z.fn.extend({text:function(e){return mt(this,function(e){return void 0===e?Z.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.appendChild(e)}})},prepend:function(){return this.domManip(arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=p(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return this.domManip(arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},remove:function(e,t){for(var n,r=e?Z.filter(e,this):this,i=0;null!=(n=r[i]);i++)t||1!==n.nodeType||Z.cleanData(v(n)),n.parentNode&&(t&&Z.contains(n.ownerDocument,n)&&g(v(n,"script")),n.parentNode.removeChild(n));return this},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(Z.cleanData(v(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null==e?!1:e,t=null==t?e:t,this.map(function(){return Z.clone(this,e,t)})},html:function(e){return mt(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ht.test(e)&&!Mt[(Lt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(At,"<$1></$2>");try{for(;r>n;n++)t=this[n]||{},1===t.nodeType&&(Z.cleanData(v(t,!1)),t.innerHTML=e);t=0}catch(i){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=arguments[0];return this.domManip(arguments,function(t){e=this.parentNode,Z.cleanData(v(this)),e&&e.replaceChild(t,this)}),e&&(e.length||e.nodeType)?this:this.remove()},detach:function(e){return this.remove(e,!0)},domManip:function(e,t){e=z.apply([],e);var n,r,i,o,s,a,u=0,l=this.length,c=this,f=l-1,p=e[0],g=Z.isFunction(p);if(g||l>1&&"string"==typeof p&&!Q.checkClone&&Ot.test(p))return this.each(function(n){var r=c.eq(n);g&&(e[0]=p.call(this,n,r.html())),r.domManip(e,t)});if(l&&(n=Z.buildFragment(e,this[0].ownerDocument,!1,this),r=n.firstChild,1===n.childNodes.length&&(n=r),r)){for(i=Z.map(v(n,"script"),d),o=i.length;l>u;u++)s=n,u!==f&&(s=Z.clone(s,!0,!0),o&&Z.merge(i,v(s,"script"))),t.call(this[u],s,u);if(o)for(a=i[i.length-1].ownerDocument,Z.map(i,h),u=0;o>u;u++)s=i[u],Ft.test(s.type||"")&&!vt.access(s,"globalEval")&&Z.contains(a,s)&&(s.src?Z._evalUrl&&Z._evalUrl(s.src):Z.globalEval(s.textContent.replace(Rt,"")))}return this}}),Z.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){Z.fn[e]=function(e){for(var n,r=[],i=Z(e),o=i.length-1,s=0;o>=s;s++)n=s===o?this:this.clone(!0),Z(i[s])[t](n),X.apply(r,n.get());return this.pushStack(r)}});var Wt,$t={},It=/^margin/,Bt=new RegExp("^("+wt+")(?!px)[a-z%]+$","i"),_t=function(t){return t.ownerDocument.defaultView.opener?t.ownerDocument.defaultView.getComputedStyle(t,null):e.getComputedStyle(t,null)};!function(){function t(){s.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",s.innerHTML="",i.appendChild(o);var t=e.getComputedStyle(s,null);n="1%"!==t.top,r="4px"===t.width,i.removeChild(o)}var n,r,i=J.documentElement,o=J.createElement("div"),s=J.createElement("div");s.style&&(s.style.backgroundClip="content-box",s.cloneNode(!0).style.backgroundClip="",Q.clearCloneStyle="content-box"===s.style.backgroundClip,o.style.cssText="border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",o.appendChild(s),e.getComputedStyle&&Z.extend(Q,{pixelPosition:function(){return t(),n},boxSizingReliable:function(){return null==r&&t(),r},reliableMarginRight:function(){var t,n=s.appendChild(J.createElement("div"));return n.style.cssText=s.style.cssText="-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",n.style.marginRight=n.style.width="0",s.style.width="1px",i.appendChild(o),t=!parseFloat(e.getComputedStyle(n,null).marginRight),i.removeChild(o),s.removeChild(n),t}}))}(),Z.swap=function(e,t,n,r){var i,o,s={};for(o in t)s[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=s[o];return i};var zt=/^(none|table(?!-c[ea]).+)/,Xt=new RegExp("^("+wt+")(.*)$","i"),Ut=new RegExp("^([+-])=("+wt+")","i"),Vt={position:"absolute",visibility:"hidden",display:"block"},Yt={letterSpacing:"0",fontWeight:"400"},Gt=["Webkit","O","Moz","ms"];Z.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=w(e,"opacity");return""===n?"1":n}}}},cssNumber:{columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,s,a=Z.camelCase(t),u=e.style;return t=Z.cssProps[a]||(Z.cssProps[a]=C(u,a)),s=Z.cssHooks[t]||Z.cssHooks[a],void 0===n?s&&"get"in s&&void 0!==(i=s.get(e,!1,r))?i:u[t]:(o=typeof n,"string"===o&&(i=Ut.exec(n))&&(n=(i[1]+1)*i[2]+parseFloat(Z.css(e,t)),o="number"),null!=n&&n===n&&("number"!==o||Z.cssNumber[a]||(n+="px"),Q.clearCloneStyle||""!==n||0!==t.indexOf("background")||(u[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,r))||(u[t]=n)),void 0)}},css:function(e,t,n,r){var i,o,s,a=Z.camelCase(t);return t=Z.cssProps[a]||(Z.cssProps[a]=C(e.style,a)),s=Z.cssHooks[t]||Z.cssHooks[a],s&&"get"in s&&(i=s.get(e,!0,n)),void 0===i&&(i=w(e,t,r)),"normal"===i&&t in Yt&&(i=Yt[t]),""===n||n?(o=parseFloat(i),n===!0||Z.isNumeric(o)?o||0:i):i}}),Z.each(["height","width"],function(e,t){Z.cssHooks[t]={get:function(e,n,r){return n?zt.test(Z.css(e,"display"))&&0===e.offsetWidth?Z.swap(e,Vt,function(){return E(e,t,r)}):E(e,t,r):void 0},set:function(e,n,r){var i=r&&_t(e);return N(e,n,r?k(e,t,r,"border-box"===Z.css(e,"boxSizing",!1,i),i):0)}}}),Z.cssHooks.marginRight=T(Q.reliableMarginRight,function(e,t){return t?Z.swap(e,{display:"inline-block"},w,[e,"marginRight"]):void 0}),Z.each({margin:"",padding:"",border:"Width"},function(e,t){Z.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];4>r;r++)i[e+Tt[r]+t]=o[r]||o[r-2]||o[0];return i}},It.test(e)||(Z.cssHooks[e+t].set=N)}),Z.fn.extend({css:function(e,t){return mt(this,function(e,t,n){var r,i,o={},s=0;if(Z.isArray(t)){for(r=_t(e),i=t.length;i>s;s++)o[t[s]]=Z.css(e,t[s],!1,r);return o}return void 0!==n?Z.style(e,t,n):Z.css(e,t)},e,t,arguments.length>1)},show:function(){return S(this,!0)},hide:function(){return S(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){Ct(this)?Z(this).show():Z(this).hide()})}}),Z.Tween=D,D.prototype={constructor:D,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||"swing",this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(Z.cssNumber[n]?"":"px")},cur:function(){var e=D.propHooks[this.prop];return e&&e.get?e.get(this):D.propHooks._default.get(this)},run:function(e){var t,n=D.propHooks[this.prop];return this.pos=t=this.options.duration?Z.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):D.propHooks._default.set(this),this}},D.prototype.init.prototype=D.prototype,D.propHooks={_default:{get:function(e){var t;return null==e.elem[e.prop]||e.elem.style&&null!=e.elem.style[e.prop]?(t=Z.css(e.elem,e.prop,""),t&&"auto"!==t?t:0):e.elem[e.prop]},set:function(e){Z.fx.step[e.prop]?Z.fx.step[e.prop](e):e.elem.style&&(null!=e.elem.style[Z.cssProps[e.prop]]||Z.cssHooks[e.prop])?Z.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},D.propHooks.scrollTop=D.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},Z.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}},Z.fx=D.prototype.init,Z.fx.step={};var Qt,Jt,Kt=/^(?:toggle|show|hide)$/,Zt=new RegExp("^(?:([+-])=|)("+wt+")([a-z%]*)$","i"),en=/queueHooks$/,tn=[q],nn={"*":[function(e,t){var n=this.createTween(e,t),r=n.cur(),i=Zt.exec(t),o=i&&i[3]||(Z.cssNumber[e]?"":"px"),s=(Z.cssNumber[e]||"px"!==o&&+r)&&Zt.exec(Z.css(n.elem,e)),a=1,u=20;if(s&&s[3]!==o){o=o||s[3],i=i||[],s=+r||1;do a=a||".5",s/=a,Z.style(n.elem,e,s+o);while(a!==(a=n.cur()/r)&&1!==a&&--u)}return i&&(s=n.start=+s||+r||0,n.unit=o,n.end=i[1]?s+(i[1]+1)*i[2]:+i[2]),n}]};Z.Animation=Z.extend(O,{tweener:function(e,t){Z.isFunction(e)?(t=e,e=["*"]):e=e.split(" ");for(var n,r=0,i=e.length;i>r;r++)n=e[r],nn[n]=nn[n]||[],nn[n].unshift(t)},prefilter:function(e,t){t?tn.unshift(e):tn.push(e)}}),Z.speed=function(e,t,n){var r=e&&"object"==typeof e?Z.extend({},e):{complete:n||!n&&t||Z.isFunction(e)&&e,duration:e,easing:n&&t||t&&!Z.isFunction(t)&&t};return r.duration=Z.fx.off?0:"number"==typeof r.duration?r.duration:r.duration in Z.fx.speeds?Z.fx.speeds[r.duration]:Z.fx.speeds._default,(null==r.queue||r.queue===!0)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){Z.isFunction(r.old)&&r.old.call(this),r.queue&&Z.dequeue(this,r.queue)},r},Z.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Ct).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=Z.isEmptyObject(e),o=Z.speed(t,n,r),s=function(){var t=O(this,Z.extend({},e),o);(i||vt.get(this,"finish"))&&t.stop(!0)};return s.finish=s,i||o.queue===!1?this.each(s):this.queue(o.queue,s)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&e!==!1&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=Z.timers,s=vt.get(this);if(i)s[i]&&s[i].stop&&r(s[i]);else for(i in s)s[i]&&s[i].stop&&en.test(i)&&r(s[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&Z.dequeue(this,e)})},finish:function(e){return e!==!1&&(e=e||"fx"),this.each(function(){var t,n=vt.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=Z.timers,s=r?r.length:0;for(n.finish=!0,Z.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;s>t;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),Z.each(["toggle","show","hide"],function(e,t){var n=Z.fn[t];Z.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(A(t,!0),e,r,i)}}),Z.each({slideDown:A("show"),slideUp:A("hide"),slideToggle:A("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){Z.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),Z.timers=[],Z.fx.tick=function(){var e,t=0,n=Z.timers;for(Qt=Z.now();t<n.length;t++)e=n[t],e()||n[t]!==e||n.splice(t--,1);n.length||Z.fx.stop(),Qt=void 0},Z.fx.timer=function(e){Z.timers.push(e),e()?Z.fx.start():Z.timers.pop()},Z.fx.interval=13,Z.fx.start=function(){Jt||(Jt=setInterval(Z.fx.tick,Z.fx.interval))},Z.fx.stop=function(){clearInterval(Jt),Jt=null},Z.fx.speeds={slow:600,fast:200,_default:400},Z.fn.delay=function(e,t){return e=Z.fx?Z.fx.speeds[e]||e:e,t=t||"fx",this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},function(){var e=J.createElement("input"),t=J.createElement("select"),n=t.appendChild(J.createElement("option"));e.type="checkbox",Q.checkOn=""!==e.value,Q.optSelected=n.selected,t.disabled=!0,Q.optDisabled=!n.disabled,e=J.createElement("input"),e.value="t",e.type="radio",Q.radioValue="t"===e.value}();var rn,on,sn=Z.expr.attrHandle;Z.fn.extend({attr:function(e,t){return mt(this,Z.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){Z.removeAttr(this,e)})}}),Z.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(e&&3!==o&&8!==o&&2!==o)return typeof e.getAttribute===kt?Z.prop(e,t,n):(1===o&&Z.isXMLDoc(e)||(t=t.toLowerCase(),r=Z.attrHooks[t]||(Z.expr.match.bool.test(t)?on:rn)),void 0===n?r&&"get"in r&&null!==(i=r.get(e,t))?i:(i=Z.find.attr(e,t),null==i?void 0:i):null!==n?r&&"set"in r&&void 0!==(i=r.set(e,n,t))?i:(e.setAttribute(t,n+""),n):void Z.removeAttr(e,t))},removeAttr:function(e,t){var n,r,i=0,o=t&&t.match(dt);if(o&&1===e.nodeType)for(;n=o[i++];)r=Z.propFix[n]||n,Z.expr.match.bool.test(n)&&(e[r]=!1),e.removeAttribute(n)},attrHooks:{type:{set:function(e,t){if(!Q.radioValue&&"radio"===t&&Z.nodeName(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}}}),on={set:function(e,t,n){return t===!1?Z.removeAttr(e,n):e.setAttribute(n,n),n}},Z.each(Z.expr.match.bool.source.match(/\w+/g),function(e,t){var n=sn[t]||Z.find.attr;sn[t]=function(e,t,r){var i,o;return r||(o=sn[t],sn[t]=i,i=null!=n(e,t,r)?t.toLowerCase():null,sn[t]=o),i}});var an=/^(?:input|select|textarea|button)$/i;Z.fn.extend({prop:function(e,t){return mt(this,Z.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[Z.propFix[e]||e]})}}),Z.extend({propFix:{"for":"htmlFor","class":"className"},prop:function(e,t,n){var r,i,o,s=e.nodeType;if(e&&3!==s&&8!==s&&2!==s)return o=1!==s||!Z.isXMLDoc(e),o&&(t=Z.propFix[t]||t,i=Z.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){return e.hasAttribute("tabindex")||an.test(e.nodeName)||e.href?e.tabIndex:-1}}}}),Q.optSelected||(Z.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null}}),Z.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){Z.propFix[this.toLowerCase()]=this});var un=/[\t\r\n\f]/g;Z.fn.extend({addClass:function(e){var t,n,r,i,o,s,a="string"==typeof e&&e,u=0,l=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).addClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(dt)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(un," "):" ")){for(o=0;i=t[o++];)r.indexOf(" "+i+" ")<0&&(r+=i+" ");s=Z.trim(r),n.className!==s&&(n.className=s)}return this},removeClass:function(e){var t,n,r,i,o,s,a=0===arguments.length||"string"==typeof e&&e,u=0,l=this.length;if(Z.isFunction(e))return this.each(function(t){Z(this).removeClass(e.call(this,t,this.className))});if(a)for(t=(e||"").match(dt)||[];l>u;u++)if(n=this[u],r=1===n.nodeType&&(n.className?(" "+n.className+" ").replace(un," "):"")){for(o=0;i=t[o++];)for(;r.indexOf(" "+i+" ")>=0;)r=r.replace(" "+i+" "," ");s=e?Z.trim(r):"",n.className!==s&&(n.className=s)}return this},toggleClass:function(e,t){var n=typeof e;return"boolean"==typeof t&&"string"===n?t?this.addClass(e):this.removeClass(e):this.each(Z.isFunction(e)?function(n){Z(this).toggleClass(e.call(this,n,this.className,t),t)}:function(){if("string"===n)for(var t,r=0,i=Z(this),o=e.match(dt)||[];t=o[r++];)i.hasClass(t)?i.removeClass(t):i.addClass(t);else(n===kt||"boolean"===n)&&(this.className&&vt.set(this,"__className__",this.className),this.className=this.className||e===!1?"":vt.get(this,"__className__")||"")})},hasClass:function(e){for(var t=" "+e+" ",n=0,r=this.length;r>n;n++)if(1===this[n].nodeType&&(" "+this[n].className+" ").replace(un," ").indexOf(t)>=0)return!0;return!1}});var ln=/\r/g;Z.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=Z.isFunction(e),this.each(function(n){var i;1===this.nodeType&&(i=r?e.call(this,n,Z(this).val()):e,null==i?i="":"number"==typeof i?i+="":Z.isArray(i)&&(i=Z.map(i,function(e){return null==e?"":e+""})),t=Z.valHooks[this.type]||Z.valHooks[this.nodeName.toLowerCase()],t&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return t=Z.valHooks[i.type]||Z.valHooks[i.nodeName.toLowerCase()],t&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:(n=i.value,"string"==typeof n?n.replace(ln,""):null==n?"":n)}}}),Z.extend({valHooks:{option:{get:function(e){var t=Z.find.attr(e,"value");return null!=t?t:Z.trim(Z.text(e))}},select:{get:function(e){for(var t,n,r=e.options,i=e.selectedIndex,o="select-one"===e.type||0>i,s=o?null:[],a=o?i+1:r.length,u=0>i?a:o?i:0;a>u;u++)if(n=r[u],!(!n.selected&&u!==i||(Q.optDisabled?n.disabled:null!==n.getAttribute("disabled"))||n.parentNode.disabled&&Z.nodeName(n.parentNode,"optgroup"))){if(t=Z(n).val(),o)return t;s.push(t)}return s},set:function(e,t){for(var n,r,i=e.options,o=Z.makeArray(t),s=i.length;s--;)r=i[s],(r.selected=Z.inArray(r.value,o)>=0)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),Z.each(["radio","checkbox"],function(){Z.valHooks[this]={set:function(e,t){return Z.isArray(t)?e.checked=Z.inArray(Z(e).val(),t)>=0:void 0}},Q.checkOn||(Z.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),Z.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(e,t){Z.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),Z.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}});var cn=Z.now(),fn=/\?/;Z.parseJSON=function(e){return JSON.parse(e+"")},Z.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{n=new DOMParser,t=n.parseFromString(e,"text/xml")}catch(r){t=void 0}return(!t||t.getElementsByTagName("parsererror").length)&&Z.error("Invalid XML: "+e),t};var pn=/#.*$/,dn=/([?&])_=[^&]*/,hn=/^(.*?):[ \t]*([^\r\n]*)$/gm,gn=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,mn=/^(?:GET|HEAD)$/,vn=/^\/\//,yn=/^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,xn={},bn={},wn="*/".concat("*"),Tn=e.location.href,Cn=yn.exec(Tn.toLowerCase())||[];Z.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Tn,type:"GET",isLocal:gn.test(Cn[1]),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":wn,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":Z.parseJSON,"text xml":Z.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?R(R(e,Z.ajaxSettings),t):R(Z.ajaxSettings,e)},ajaxPrefilter:F(xn),ajaxTransport:F(bn),ajax:function(e,t){function n(e,t,n,s){var u,c,v,y,b,T=t;2!==x&&(x=2,a&&clearTimeout(a),r=void 0,o=s||"",w.readyState=e>0?4:0,u=e>=200&&300>e||304===e,n&&(y=M(f,w,n)),y=W(f,y,w,u),u?(f.ifModified&&(b=w.getResponseHeader("Last-Modified"),b&&(Z.lastModified[i]=b),b=w.getResponseHeader("etag"),b&&(Z.etag[i]=b)),204===e||"HEAD"===f.type?T="nocontent":304===e?T="notmodified":(T=y.state,c=y.data,v=y.error,u=!v)):(v=T,(e||!T)&&(T="error",0>e&&(e=0))),w.status=e,w.statusText=(t||T)+"",u?h.resolveWith(p,[c,T,w]):h.rejectWith(p,[w,T,v]),w.statusCode(m),m=void 0,l&&d.trigger(u?"ajaxSuccess":"ajaxError",[w,f,u?c:v]),g.fireWith(p,[w,T]),l&&(d.trigger("ajaxComplete",[w,f]),--Z.active||Z.event.trigger("ajaxStop")))}"object"==typeof e&&(t=e,e=void 0),t=t||{};var r,i,o,s,a,u,l,c,f=Z.ajaxSetup({},t),p=f.context||f,d=f.context&&(p.nodeType||p.jquery)?Z(p):Z.event,h=Z.Deferred(),g=Z.Callbacks("once memory"),m=f.statusCode||{},v={},y={},x=0,b="canceled",w={readyState:0,getResponseHeader:function(e){var t;if(2===x){if(!s)for(s={};t=hn.exec(o);)s[t[1].toLowerCase()]=t[2];t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return 2===x?o:null},setRequestHeader:function(e,t){var n=e.toLowerCase();return x||(e=y[n]=y[n]||e,v[e]=t),this},overrideMimeType:function(e){return x||(f.mimeType=e),this},statusCode:function(e){var t;if(e)if(2>x)for(t in e)m[t]=[m[t],e[t]];else w.always(e[w.status]);return this},abort:function(e){var t=e||b;return r&&r.abort(t),n(0,t),this}};if(h.promise(w).complete=g.add,w.success=w.done,w.error=w.fail,f.url=((e||f.url||Tn)+"").replace(pn,"").replace(vn,Cn[1]+"//"),f.type=t.method||t.type||f.method||f.type,f.dataTypes=Z.trim(f.dataType||"*").toLowerCase().match(dt)||[""],null==f.crossDomain&&(u=yn.exec(f.url.toLowerCase()),f.crossDomain=!(!u||u[1]===Cn[1]&&u[2]===Cn[2]&&(u[3]||("http:"===u[1]?"80":"443"))===(Cn[3]||("http:"===Cn[1]?"80":"443")))),f.data&&f.processData&&"string"!=typeof f.data&&(f.data=Z.param(f.data,f.traditional)),P(xn,f,t,w),2===x)return w;l=Z.event&&f.global,l&&0===Z.active++&&Z.event.trigger("ajaxStart"),f.type=f.type.toUpperCase(),f.hasContent=!mn.test(f.type),i=f.url,f.hasContent||(f.data&&(i=f.url+=(fn.test(i)?"&":"?")+f.data,delete f.data),f.cache===!1&&(f.url=dn.test(i)?i.replace(dn,"$1_="+cn++):i+(fn.test(i)?"&":"?")+"_="+cn++)),f.ifModified&&(Z.lastModified[i]&&w.setRequestHeader("If-Modified-Since",Z.lastModified[i]),Z.etag[i]&&w.setRequestHeader("If-None-Match",Z.etag[i])),(f.data&&f.hasContent&&f.contentType!==!1||t.contentType)&&w.setRequestHeader("Content-Type",f.contentType),w.setRequestHeader("Accept",f.dataTypes[0]&&f.accepts[f.dataTypes[0]]?f.accepts[f.dataTypes[0]]+("*"!==f.dataTypes[0]?", "+wn+"; q=0.01":""):f.accepts["*"]);for(c in f.headers)w.setRequestHeader(c,f.headers[c]);if(f.beforeSend&&(f.beforeSend.call(p,w,f)===!1||2===x))return w.abort();b="abort";for(c in{success:1,error:1,complete:1})w[c](f[c]);if(r=P(bn,f,t,w)){w.readyState=1,l&&d.trigger("ajaxSend",[w,f]),f.async&&f.timeout>0&&(a=setTimeout(function(){w.abort("timeout")},f.timeout));try{x=1,r.send(v,n)}catch(T){if(!(2>x))throw T;n(-1,T)}}else n(-1,"No Transport");return w},getJSON:function(e,t,n){return Z.get(e,t,n,"json")},getScript:function(e,t){return Z.get(e,void 0,t,"script")}}),Z.each(["get","post"],function(e,t){Z[t]=function(e,n,r,i){return Z.isFunction(n)&&(i=i||r,r=n,n=void 0),Z.ajax({url:e,type:t,dataType:i,data:n,success:r})}}),Z._evalUrl=function(e){return Z.ajax({url:e,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},Z.fn.extend({wrapAll:function(e){var t;return Z.isFunction(e)?this.each(function(t){Z(this).wrapAll(e.call(this,t))}):(this[0]&&(t=Z(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this)},wrapInner:function(e){return this.each(Z.isFunction(e)?function(t){Z(this).wrapInner(e.call(this,t))}:function(){var t=Z(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=Z.isFunction(e);return this.each(function(n){Z(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){Z.nodeName(this,"body")||Z(this).replaceWith(this.childNodes)}).end()}}),Z.expr.filters.hidden=function(e){return e.offsetWidth<=0&&e.offsetHeight<=0},Z.expr.filters.visible=function(e){return!Z.expr.filters.hidden(e)};var Nn=/%20/g,kn=/\[\]$/,En=/\r?\n/g,Sn=/^(?:submit|button|image|reset|file)$/i,Dn=/^(?:input|select|textarea|keygen)/i;Z.param=function(e,t){var n,r=[],i=function(e,t){t=Z.isFunction(t)?t():null==t?"":t,r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(void 0===t&&(t=Z.ajaxSettings&&Z.ajaxSettings.traditional),Z.isArray(e)||e.jquery&&!Z.isPlainObject(e))Z.each(e,function(){i(this.name,this.value)});else for(n in e)$(n,e[n],t,i);return r.join("&").replace(Nn,"+")},Z.fn.extend({serialize:function(){return Z.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=Z.prop(this,"elements");return e?Z.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!Z(this).is(":disabled")&&Dn.test(this.nodeName)&&!Sn.test(e)&&(this.checked||!Nt.test(e))}).map(function(e,t){var n=Z(this).val();return null==n?null:Z.isArray(n)?Z.map(n,function(e){return{name:t.name,value:e.replace(En,"\r\n")}}):{name:t.name,value:n.replace(En,"\r\n")}}).get()}}),Z.ajaxSettings.xhr=function(){try{return new XMLHttpRequest}catch(e){}};var jn=0,An={},Ln={0:200,1223:204},qn=Z.ajaxSettings.xhr();e.attachEvent&&e.attachEvent("onunload",function(){for(var e in An)An[e]()}),Q.cors=!!qn&&"withCredentials"in qn,Q.ajax=qn=!!qn,Z.ajaxTransport(function(e){var t;return Q.cors||qn&&!e.crossDomain?{send:function(n,r){var i,o=e.xhr(),s=++jn;if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest");for(i in n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(delete An[s],t=o.onload=o.onerror=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(Ln[o.status]||o.status,o.statusText,"string"==typeof o.responseText?{text:o.responseText}:void 0,o.getAllResponseHeaders()))
}},o.onload=t(),o.onerror=t("error"),t=An[s]=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(a){if(t)throw a}},abort:function(){t&&t()}}:void 0}),Z.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/(?:java|ecma)script/},converters:{"text script":function(e){return Z.globalEval(e),e}}}),Z.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),Z.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(r,i){t=Z("<script>").prop({async:!0,charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),J.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Hn=[],On=/(=)\?(?=&|$)|\?\?/;Z.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Hn.pop()||Z.expando+"_"+cn++;return this[e]=!0,e}}),Z.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,s,a=t.jsonp!==!1&&(On.test(t.url)?"url":"string"==typeof t.data&&!(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&On.test(t.data)&&"data");return a||"jsonp"===t.dataTypes[0]?(i=t.jsonpCallback=Z.isFunction(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,a?t[a]=t[a].replace(On,"$1"+i):t.jsonp!==!1&&(t.url+=(fn.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return s||Z.error(i+" was not called"),s[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){s=arguments},r.always(function(){e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Hn.push(i)),s&&Z.isFunction(o)&&o(s[0]),s=o=void 0}),"script"):void 0}),Z.parseHTML=function(e,t,n){if(!e||"string"!=typeof e)return null;"boolean"==typeof t&&(n=t,t=!1),t=t||J;var r=st.exec(e),i=!n&&[];return r?[t.createElement(r[1])]:(r=Z.buildFragment([e],t,i),i&&i.length&&Z(i).remove(),Z.merge([],r.childNodes))};var Fn=Z.fn.load;Z.fn.load=function(e,t,n){if("string"!=typeof e&&Fn)return Fn.apply(this,arguments);var r,i,o,s=this,a=e.indexOf(" ");return a>=0&&(r=Z.trim(e.slice(a)),e=e.slice(0,a)),Z.isFunction(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),s.length>0&&Z.ajax({url:e,type:i,dataType:"html",data:t}).done(function(e){o=arguments,s.html(r?Z("<div>").append(Z.parseHTML(e)).find(r):e)}).complete(n&&function(e,t){s.each(n,o||[e.responseText,t,e])}),this},Z.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){Z.fn[t]=function(e){return this.on(t,e)}}),Z.expr.filters.animated=function(e){return Z.grep(Z.timers,function(t){return e===t.elem}).length};var Pn=e.document.documentElement;Z.offset={setOffset:function(e,t,n){var r,i,o,s,a,u,l,c=Z.css(e,"position"),f=Z(e),p={};"static"===c&&(e.style.position="relative"),a=f.offset(),o=Z.css(e,"top"),u=Z.css(e,"left"),l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1,l?(r=f.position(),s=r.top,i=r.left):(s=parseFloat(o)||0,i=parseFloat(u)||0),Z.isFunction(t)&&(t=t.call(e,n,a)),null!=t.top&&(p.top=t.top-a.top+s),null!=t.left&&(p.left=t.left-a.left+i),"using"in t?t.using.call(e,p):f.css(p)}},Z.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){Z.offset.setOffset(this,e,t)});var t,n,r=this[0],i={top:0,left:0},o=r&&r.ownerDocument;if(o)return t=o.documentElement,Z.contains(t,r)?(typeof r.getBoundingClientRect!==kt&&(i=r.getBoundingClientRect()),n=I(o),{top:i.top+n.pageYOffset-t.clientTop,left:i.left+n.pageXOffset-t.clientLeft}):i},position:function(){if(this[0]){var e,t,n=this[0],r={top:0,left:0};return"fixed"===Z.css(n,"position")?t=n.getBoundingClientRect():(e=this.offsetParent(),t=this.offset(),Z.nodeName(e[0],"html")||(r=e.offset()),r.top+=Z.css(e[0],"borderTopWidth",!0),r.left+=Z.css(e[0],"borderLeftWidth",!0)),{top:t.top-r.top-Z.css(n,"marginTop",!0),left:t.left-r.left-Z.css(n,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent||Pn;e&&!Z.nodeName(e,"html")&&"static"===Z.css(e,"position");)e=e.offsetParent;return e||Pn})}}),Z.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,n){var r="pageYOffset"===n;Z.fn[t]=function(i){return mt(this,function(t,i,o){var s=I(t);return void 0===o?s?s[n]:t[i]:void(s?s.scrollTo(r?e.pageXOffset:o,r?o:e.pageYOffset):t[i]=o)},t,i,arguments.length,null)}}),Z.each(["top","left"],function(e,t){Z.cssHooks[t]=T(Q.pixelPosition,function(e,n){return n?(n=w(e,t),Bt.test(n)?Z(e).position()[t]+"px":n):void 0})}),Z.each({Height:"height",Width:"width"},function(e,t){Z.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){Z.fn[r]=function(r,i){var o=arguments.length&&(n||"boolean"!=typeof r),s=n||(r===!0||i===!0?"margin":"border");return mt(this,function(t,n,r){var i;return Z.isWindow(t)?t.document.documentElement["client"+e]:9===t.nodeType?(i=t.documentElement,Math.max(t.body["scroll"+e],i["scroll"+e],t.body["offset"+e],i["offset"+e],i["client"+e])):void 0===r?Z.css(t,n,s):Z.style(t,n,r,s)},t,o?r:void 0,o,null)}})}),Z.fn.size=function(){return this.length},Z.fn.andSelf=Z.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return Z});var Rn=e.jQuery,Mn=e.$;return Z.noConflict=function(t){return e.$===Z&&(e.$=Mn),t&&e.jQuery===Z&&(e.jQuery=Rn),Z},typeof t===kt&&(e.jQuery=e.$=Z),Z});
/**
 * @license
 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
 * Build: `lodash modern -o ./lodash.js`
 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <https://lodash.com/license>
 */
(function(){function n(n,t){if(n!==t){var r=null===n,e=n===b,u=n===n,i=null===t,o=t===b,f=t===t;if(n>t&&!i||!u||r&&!o&&f||e&&f)return 1;if(t>n&&!r||!f||i&&!e&&u||o&&u)return-1}return 0}function t(n,t,r){for(var e=n.length,u=r?e:-1;r?u--:++u<e;)if(t(n[u],u,n))return u;return-1}function r(n,t,r){if(t!==t)return h(n,r);for(var e=r-1,u=n.length;++e<u;)if(n[e]===t)return e;return-1}function e(n){return"function"==typeof n||!1}function u(n){return null==n?"":n+""}function i(n,t){for(var r=-1,e=n.length;++r<e&&t.indexOf(n.charAt(r))>-1;);return r}function o(n,t){for(var r=n.length;r--&&t.indexOf(n.charAt(r))>-1;);return r}function f(t,r){return n(t.criteria,r.criteria)||t.index-r.index}function a(t,r,e){for(var u=-1,i=t.criteria,o=r.criteria,f=i.length,a=e.length;++u<f;){var c=n(i[u],o[u]);if(c){if(u>=a)return c;var l=e[u];return c*("asc"===l||l===!0?1:-1)}}return t.index-r.index}function c(n){return Dt[n]}function l(n){return qt[n]}function s(n,t,r){return t?n=Kt[n]:r&&(n=Vt[n]),"\\"+n}function p(n){return"\\"+Vt[n]}function h(n,t,r){for(var e=n.length,u=t+(r?0:-1);r?u--:++u<e;){var i=n[u];if(i!==i)return u}return-1}function v(n){return!!n&&"object"==typeof n}function _(n){return 160>=n&&n>=9&&13>=n||32==n||160==n||5760==n||6158==n||n>=8192&&(8202>=n||8232==n||8233==n||8239==n||8287==n||12288==n||65279==n)}function g(n,t){for(var r=-1,e=n.length,u=-1,i=[];++r<e;)n[r]===t&&(n[r]=D,i[++u]=r);return i}function y(n,t){for(var r,e=-1,u=n.length,i=-1,o=[];++e<u;){var f=n[e],a=t?t(f,e,n):f;e&&r===a||(r=a,o[++i]=f)}return o}function d(n){for(var t=-1,r=n.length;++t<r&&_(n.charCodeAt(t)););return t}function m(n){for(var t=n.length;t--&&_(n.charCodeAt(t)););return t}function w(n){return Mt[n]}function x(_){function G(n){if(v(n)&&!Ea(n)&&!(n instanceof Dt)){if(n instanceof nt)return n;if(nf.call(n,"__chain__")&&nf.call(n,"__wrapped__"))return pu(n)}return new nt(n)}function H(){}function nt(n,t,r){this.__wrapped__=n,this.__actions__=r||[],this.__chain__=!!t}function Dt(n){this.__wrapped__=n,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=Of,this.__views__=[]}function qt(){var n=new Dt(this.__wrapped__);return n.__actions__=rr(this.__actions__),n.__dir__=this.__dir__,n.__filtered__=this.__filtered__,n.__iteratees__=rr(this.__iteratees__),n.__takeCount__=this.__takeCount__,n.__views__=rr(this.__views__),n}function Mt(){if(this.__filtered__){var n=new Dt(this);n.__dir__=-1,n.__filtered__=!0}else n=this.clone(),n.__dir__*=-1;return n}function Pt(){var n=this.__wrapped__.value(),t=this.__dir__,r=Ea(n),e=0>t,u=r?n.length:0,i=Ke(0,u,this.__views__),o=i.start,f=i.end,a=f-o,c=e?f:o-1,l=this.__iteratees__,s=l.length,p=0,h=Af(a,this.__takeCount__);if(!r||T>u||u==a&&h==a)return re(n,this.__actions__);var v=[];n:for(;a--&&h>p;){c+=t;for(var _=-1,g=n[c];++_<s;){var y=l[_],d=y.iteratee,m=y.type,w=d(g);if(m==B)g=w;else if(!w){if(m==L)continue n;break n}}v[p++]=g}return v}function Kt(){this.__data__={}}function Vt(n){return this.has(n)&&delete this.__data__[n]}function Yt(n){return"__proto__"==n?b:this.__data__[n]}function Gt(n){return"__proto__"!=n&&nf.call(this.__data__,n)}function Jt(n,t){return"__proto__"!=n&&(this.__data__[n]=t),this}function Xt(n){var t=n?n.length:0;for(this.data={hash:yf(null),set:new sf};t--;)this.push(n[t])}function Zt(n,t){var r=n.data,e="string"==typeof t||Si(t)?r.set.has(t):r.hash[t];return e?0:-1}function Ht(n){var t=this.data;"string"==typeof n||Si(n)?t.set.add(n):t.hash[n]=!0}function tr(n,t){for(var r=-1,e=n.length,u=-1,i=t.length,o=zo(e+i);++r<e;)o[r]=n[r];for(;++u<i;)o[r++]=t[u];return o}function rr(n,t){var r=-1,e=n.length;for(t||(t=zo(e));++r<e;)t[r]=n[r];return t}function er(n,t){for(var r=-1,e=n.length;++r<e&&t(n[r],r,n)!==!1;);return n}function ur(n,t){for(var r=n.length;r--&&t(n[r],r,n)!==!1;);return n}function ir(n,t){for(var r=-1,e=n.length;++r<e;)if(!t(n[r],r,n))return!1;return!0}function or(n,t,r,e){for(var u=-1,i=n.length,o=e,f=o;++u<i;){var a=n[u],c=+t(a);r(c,o)&&(o=c,f=a)}return f}function fr(n,t){for(var r=-1,e=n.length,u=-1,i=[];++r<e;){var o=n[r];t(o,r,n)&&(i[++u]=o)}return i}function ar(n,t){for(var r=-1,e=n.length,u=zo(e);++r<e;)u[r]=t(n[r],r,n);return u}function cr(n,t){for(var r=-1,e=t.length,u=n.length;++r<e;)n[u+r]=t[r];return n}function lr(n,t,r,e){var u=-1,i=n.length;for(e&&i&&(r=n[++u]);++u<i;)r=t(r,n[u],u,n);return r}function sr(n,t,r,e){var u=n.length;for(e&&u&&(r=n[--u]);u--;)r=t(r,n[u],u,n);return r}function pr(n,t){for(var r=-1,e=n.length;++r<e;)if(t(n[r],r,n))return!0;return!1}function hr(n,t){for(var r=n.length,e=0;r--;)e+=+t(n[r])||0;return e}function vr(n,t){return n===b?t:n}function _r(n,t,r,e){return n!==b&&nf.call(e,r)?n:t}function gr(n,t,r){for(var e=-1,u=za(t),i=u.length;++e<i;){var o=u[e],f=n[o],a=r(f,t[o],o,n,t);(a===a?a===f:f!==f)&&(f!==b||o in n)||(n[o]=a)}return n}function yr(n,t){return null==t?n:mr(t,za(t),n)}function dr(n,t){for(var r=-1,e=null==n,u=!e&&Xe(n),i=u?n.length:0,o=t.length,f=zo(o);++r<o;){var a=t[r];f[r]=u?Ze(a,i)?n[a]:b:e?b:n[a]}return f}function mr(n,t,r){r||(r={});for(var e=-1,u=t.length;++e<u;){var i=t[e];r[i]=n[i]}return r}function wr(n,t,r){var e=typeof n;return"function"==e?t===b?n:ie(n,t,r):null==n?Ro:"object"==e?Br(n):t===b?So(n):zr(n,t)}function xr(n,t,r,e,u,i,o){var f;if(r&&(f=u?r(n,e,u):r(n)),f!==b)return f;if(!Si(n))return n;var a=Ea(n);if(a){if(f=Ve(n),!t)return rr(n,f)}else{var c=rf.call(n),l=c==Y;if(c!=X&&c!=q&&(!l||u))return zt[c]?Ge(n,c,t):u?n:{};if(f=Ye(l?{}:n),!t)return yr(f,n)}i||(i=[]),o||(o=[]);for(var s=i.length;s--;)if(i[s]==n)return o[s];return i.push(n),o.push(f),(a?er:Ur)(n,function(e,u){f[u]=xr(e,t,r,u,n,i,o)}),f}function br(n,t,r){if("function"!=typeof n)throw new Jo(z);return pf(function(){n.apply(b,r)},t)}function Ar(n,t){var e=n?n.length:0,u=[];if(!e)return u;var i=-1,o=qe(),f=o===r,a=f&&t.length>=T?ve(t):null,c=t.length;a&&(o=Zt,f=!1,t=a);n:for(;++i<e;){var l=n[i];if(f&&l===l){for(var s=c;s--;)if(t[s]===l)continue n;u.push(l)}else o(t,l,0)<0&&u.push(l)}return u}function jr(n,t){var r=!0;return Nf(n,function(n,e,u){return r=!!t(n,e,u)}),r}function kr(n,t,r,e){var u=e,i=u;return Nf(n,function(n,o,f){var a=+t(n,o,f);(r(a,u)||a===e&&a===i)&&(u=a,i=n)}),i}function Ir(n,t,r,e){var u=n.length;for(r=null==r?0:+r||0,0>r&&(r=-r>u?0:u+r),e=e===b||e>u?u:+e||0,0>e&&(e+=u),u=r>e?0:e>>>0,r>>>=0;u>r;)n[r++]=t;return n}function Rr(n,t){var r=[];return Nf(n,function(n,e,u){t(n,e,u)&&r.push(n)}),r}function Or(n,t,r,e){var u;return r(n,function(n,r,i){return t(n,r,i)?(u=e?r:n,!1):void 0}),u}function Er(n,t,r,e){e||(e=[]);for(var u=-1,i=n.length;++u<i;){var o=n[u];v(o)&&Xe(o)&&(r||Ea(o)||ji(o))?t?Er(o,t,r,e):cr(e,o):r||(e[e.length]=o)}return e}function Cr(n,t){return Lf(n,t,Qi)}function Ur(n,t){return Lf(n,t,za)}function $r(n,t){return Bf(n,t,za)}function Sr(n,t){for(var r=-1,e=t.length,u=-1,i=[];++r<e;){var o=t[r];$i(n[o])&&(i[++u]=o)}return i}function Wr(n,t,r){if(null!=n){r!==b&&r in lu(n)&&(t=[r]);for(var e=0,u=t.length;null!=n&&u>e;)n=n[t[e++]];return e&&e==u?n:b}}function Fr(n,t,r,e,u,i){return n===t?!0:null==n||null==t||!Si(n)&&!v(t)?n!==n&&t!==t:Nr(n,t,Fr,r,e,u,i)}function Nr(n,t,r,e,u,i,o){var f=Ea(n),a=Ea(t),c=M,l=M;f||(c=rf.call(n),c==q?c=X:c!=X&&(f=qi(n))),a||(l=rf.call(t),l==q?l=X:l!=X&&(a=qi(t)));var s=c==X,p=l==X,h=c==l;if(h&&!f&&!s)return Le(n,t,c);if(!u){var v=s&&nf.call(n,"__wrapped__"),_=p&&nf.call(t,"__wrapped__");if(v||_)return r(v?n.value():n,_?t.value():t,e,u,i,o)}if(!h)return!1;i||(i=[]),o||(o=[]);for(var g=i.length;g--;)if(i[g]==n)return o[g]==t;i.push(n),o.push(t);var y=(f?Te:Be)(n,t,r,e,u,i,o);return i.pop(),o.pop(),y}function Tr(n,t,r){var e=t.length,u=e,i=!r;if(null==n)return!u;for(n=lu(n);e--;){var o=t[e];if(i&&o[2]?o[1]!==n[o[0]]:!(o[0]in n))return!1}for(;++e<u;){o=t[e];var f=o[0],a=n[f],c=o[1];if(i&&o[2]){if(a===b&&!(f in n))return!1}else{var l=r?r(a,c,f):b;if(!(l===b?Fr(c,a,r,!0):l))return!1}}return!0}function Lr(n,t){var r=-1,e=Xe(n)?zo(n.length):[];return Nf(n,function(n,u,i){e[++r]=t(n,u,i)}),e}function Br(n){var t=Me(n);if(1==t.length&&t[0][2]){var r=t[0][0],e=t[0][1];return function(n){return null==n?!1:n[r]===e&&(e!==b||r in lu(n))}}return function(n){return Tr(n,t)}}function zr(n,t){var r=Ea(n),e=Qe(n)&&ru(t),u=n+"";return n=su(n),function(i){if(null==i)return!1;var o=u;if(i=lu(i),!(!r&&e||o in i)){if(i=1==n.length?i:Wr(i,Gr(n,0,-1)),null==i)return!1;o=ku(n),i=lu(i)}return i[o]===t?t!==b||o in i:Fr(t,i[o],b,!0)}}function Dr(n,t,r,e,u){if(!Si(n))return n;var i=Xe(t)&&(Ea(t)||qi(t)),o=i?b:za(t);return er(o||t,function(f,a){if(o&&(a=f,f=t[a]),v(f))e||(e=[]),u||(u=[]),qr(n,t,a,Dr,r,e,u);else{var c=n[a],l=r?r(c,f,a,n,t):b,s=l===b;s&&(l=f),l===b&&(!i||a in n)||!s&&(l===l?l===c:c!==c)||(n[a]=l)}}),n}function qr(n,t,r,e,u,i,o){for(var f=i.length,a=t[r];f--;)if(i[f]==a)return void(n[r]=o[f]);var c=n[r],l=u?u(c,a,r,n,t):b,s=l===b;s&&(l=a,Xe(a)&&(Ea(a)||qi(a))?l=Ea(c)?c:Xe(c)?rr(c):[]:Bi(a)||ji(a)?l=ji(c)?Yi(c):Bi(c)?c:{}:s=!1),i.push(a),o.push(l),s?n[r]=e(l,a,u,i,o):(l===l?l!==c:c===c)&&(n[r]=l)}function Mr(n){return function(t){return null==t?b:t[n]}}function Pr(n){var t=n+"";return n=su(n),function(r){return Wr(r,n,t)}}function Kr(n,t){for(var r=n?t.length:0;r--;){var e=t[r];if(e!=u&&Ze(e)){var u=e;hf.call(n,e,1)}}return n}function Vr(n,t){return n+df(If()*(t-n+1))}function Yr(n,t,r,e,u){return u(n,function(n,u,i){r=e?(e=!1,n):t(r,n,u,i)}),r}function Gr(n,t,r){var e=-1,u=n.length;t=null==t?0:+t||0,0>t&&(t=-t>u?0:u+t),r=r===b||r>u?u:+r||0,0>r&&(r+=u),u=t>r?0:r-t>>>0,t>>>=0;for(var i=zo(u);++e<u;)i[e]=n[e+t];return i}function Jr(n,t){var r;return Nf(n,function(n,e,u){return r=t(n,e,u),!r}),!!r}function Xr(n,t){var r=n.length;for(n.sort(t);r--;)n[r]=n[r].value;return n}function Zr(n,t,r){var e=ze(),u=-1;t=ar(t,function(n){return e(n)});var i=Lr(n,function(n){var r=ar(t,function(t){return t(n)});return{criteria:r,index:++u,value:n}});return Xr(i,function(n,t){return a(n,t,r)})}function Hr(n,t){var r=0;return Nf(n,function(n,e,u){r+=+t(n,e,u)||0}),r}function Qr(n,t){var e=-1,u=qe(),i=n.length,o=u===r,f=o&&i>=T,a=f?ve():null,c=[];a?(u=Zt,o=!1):(f=!1,a=t?[]:c);n:for(;++e<i;){var l=n[e],s=t?t(l,e,n):l;if(o&&l===l){for(var p=a.length;p--;)if(a[p]===s)continue n;t&&a.push(s),c.push(l)}else u(a,s,0)<0&&((t||f)&&a.push(s),c.push(l))}return c}function ne(n,t){for(var r=-1,e=t.length,u=zo(e);++r<e;)u[r]=n[t[r]];return u}function te(n,t,r,e){for(var u=n.length,i=e?u:-1;(e?i--:++i<u)&&t(n[i],i,n););return r?Gr(n,e?0:i,e?i+1:u):Gr(n,e?i+1:0,e?u:i)}function re(n,t){var r=n;r instanceof Dt&&(r=r.value());for(var e=-1,u=t.length;++e<u;){var i=t[e];r=i.func.apply(i.thisArg,cr([r],i.args))}return r}function ee(n,t,r){var e=0,u=n?n.length:e;if("number"==typeof t&&t===t&&Uf>=u){for(;u>e;){var i=e+u>>>1,o=n[i];(r?t>=o:t>o)&&null!==o?e=i+1:u=i}return u}return ue(n,t,Ro,r)}function ue(n,t,r,e){t=r(t);for(var u=0,i=n?n.length:0,o=t!==t,f=null===t,a=t===b;i>u;){var c=df((u+i)/2),l=r(n[c]),s=l!==b,p=l===l;if(o)var h=p||e;else h=f?p&&s&&(e||null!=l):a?p&&(e||s):null==l?!1:e?t>=l:t>l;h?u=c+1:i=c}return Af(i,Cf)}function ie(n,t,r){if("function"!=typeof n)return Ro;if(t===b)return n;switch(r){case 1:return function(r){return n.call(t,r)};case 3:return function(r,e,u){return n.call(t,r,e,u)};case 4:return function(r,e,u,i){return n.call(t,r,e,u,i)};case 5:return function(r,e,u,i,o){return n.call(t,r,e,u,i,o)}}return function(){return n.apply(t,arguments)}}function oe(n){var t=new of(n.byteLength),r=new vf(t);return r.set(new vf(n)),t}function fe(n,t,r){for(var e=r.length,u=-1,i=bf(n.length-e,0),o=-1,f=t.length,a=zo(f+i);++o<f;)a[o]=t[o];for(;++u<e;)a[r[u]]=n[u];for(;i--;)a[o++]=n[u++];return a}function ae(n,t,r){for(var e=-1,u=r.length,i=-1,o=bf(n.length-u,0),f=-1,a=t.length,c=zo(o+a);++i<o;)c[i]=n[i];for(var l=i;++f<a;)c[l+f]=t[f];for(;++e<u;)c[l+r[e]]=n[i++];return c}function ce(n,t){return function(r,e,u){var i=t?t():{};if(e=ze(e,u,3),Ea(r))for(var o=-1,f=r.length;++o<f;){var a=r[o];n(i,a,e(a,o,r),r)}else Nf(r,function(t,r,u){n(i,t,e(t,r,u),u)});return i}}function le(n){return gi(function(t,r){var e=-1,u=null==t?0:r.length,i=u>2?r[u-2]:b,o=u>2?r[2]:b,f=u>1?r[u-1]:b;for("function"==typeof i?(i=ie(i,f,5),u-=2):(i="function"==typeof f?f:b,u-=i?1:0),o&&He(r[0],r[1],o)&&(i=3>u?b:i,u=1);++e<u;){var a=r[e];a&&n(t,a,i)}return t})}function se(n,t){return function(r,e){var u=r?qf(r):0;if(!tu(u))return n(r,e);for(var i=t?u:-1,o=lu(r);(t?i--:++i<u)&&e(o[i],i,o)!==!1;);return r}}function pe(n){return function(t,r,e){for(var u=lu(t),i=e(t),o=i.length,f=n?o:-1;n?f--:++f<o;){var a=i[f];if(r(u[a],a,u)===!1)break}return t}}function he(n,t){function r(){var u=this&&this!==Qt&&this instanceof r?e:n;return u.apply(t,arguments)}var e=ge(n);return r}function ve(n){return yf&&sf?new Xt(n):null}function _e(n){return function(t){for(var r=-1,e=jo(co(t)),u=e.length,i="";++r<u;)i=n(i,e[r],r);return i}}function ge(n){return function(){var t=arguments;switch(t.length){case 0:return new n;case 1:return new n(t[0]);case 2:return new n(t[0],t[1]);case 3:return new n(t[0],t[1],t[2]);case 4:return new n(t[0],t[1],t[2],t[3]);case 5:return new n(t[0],t[1],t[2],t[3],t[4]);case 6:return new n(t[0],t[1],t[2],t[3],t[4],t[5]);case 7:return new n(t[0],t[1],t[2],t[3],t[4],t[5],t[6])}var r=Ff(n.prototype),e=n.apply(r,t);return Si(e)?e:r}}function ye(n){function t(r,e,u){u&&He(r,e,u)&&(e=b);var i=Ne(r,n,b,b,b,b,b,e);return i.placeholder=t.placeholder,i}return t}function de(n,t){return gi(function(r){var e=r[0];return null==e?e:(r.push(t),n.apply(b,r))})}function me(n,t){return function(r,e,u){if(u&&He(r,e,u)&&(e=b),e=ze(e,u,3),1==e.length){r=Ea(r)?r:cu(r);var i=or(r,e,n,t);if(!r.length||i!==t)return i}return kr(r,e,n,t)}}function we(n,r){return function(e,u,i){if(u=ze(u,i,3),Ea(e)){var o=t(e,u,r);return o>-1?e[o]:b}return Or(e,u,n)}}function xe(n){return function(r,e,u){return r&&r.length?(e=ze(e,u,3),t(r,e,n)):-1}}function be(n){return function(t,r,e){return r=ze(r,e,3),Or(t,r,n,!0)}}function Ae(n){return function(){for(var t,r=arguments.length,e=n?r:-1,u=0,i=zo(r);n?e--:++e<r;){var o=i[u++]=arguments[e];if("function"!=typeof o)throw new Jo(z);!t&&nt.prototype.thru&&"wrapper"==De(o)&&(t=new nt([],!0))}for(e=t?-1:r;++e<r;){o=i[e];var f=De(o),a="wrapper"==f?Df(o):b;t=a&&nu(a[0])&&a[1]==(U|R|E|$)&&!a[4].length&&1==a[9]?t[De(a[0])].apply(t,a[3]):1==o.length&&nu(o)?t[f]():t.thru(o)}return function(){var n=arguments,e=n[0];if(t&&1==n.length&&Ea(e)&&e.length>=T)return t.plant(e).value();for(var u=0,o=r?i[u].apply(this,n):e;++u<r;)o=i[u].call(this,o);return o}}}function je(n,t){return function(r,e,u){return"function"==typeof e&&u===b&&Ea(r)?n(r,e):t(r,ie(e,u,3))}}function ke(n){return function(t,r,e){return("function"!=typeof r||e!==b)&&(r=ie(r,e,3)),n(t,r,Qi)}}function Ie(n){return function(t,r,e){return("function"!=typeof r||e!==b)&&(r=ie(r,e,3)),n(t,r)}}function Re(n){return function(t,r,e){var u={};return r=ze(r,e,3),Ur(t,function(t,e,i){var o=r(t,e,i);e=n?o:e,t=n?t:o,u[e]=t}),u}}function Oe(n){return function(t,r,e){return t=u(t),(n?t:"")+$e(t,r,e)+(n?"":t)}}function Ee(n){var t=gi(function(r,e){var u=g(e,t.placeholder);return Ne(r,n,b,e,u)});return t}function Ce(n,t){return function(r,e,u,i){var o=arguments.length<3;return"function"==typeof e&&i===b&&Ea(r)?n(r,e,u,o):Yr(r,ze(e,i,4),u,o,t)}}function Ue(n,t,r,e,u,i,o,f,a,c){function l(){for(var m=arguments.length,w=m,x=zo(m);w--;)x[w]=arguments[w];if(e&&(x=fe(x,e,u)),i&&(x=ae(x,i,o)),v||y){var A=l.placeholder,I=g(x,A);if(m-=I.length,c>m){var R=f?rr(f):b,O=bf(c-m,0),U=v?I:b,$=v?b:I,S=v?x:b,W=v?b:x;t|=v?E:C,t&=~(v?C:E),_||(t&=~(j|k));var F=[n,t,r,S,U,W,$,R,a,O],N=Ue.apply(b,F);return nu(n)&&Mf(N,F),N.placeholder=A,N}}var T=p?r:this,L=h?T[n]:n;return f&&(x=fu(x,f)),s&&a<x.length&&(x.length=a),this&&this!==Qt&&this instanceof l&&(L=d||ge(n)),L.apply(T,x)}var s=t&U,p=t&j,h=t&k,v=t&R,_=t&I,y=t&O,d=h?b:ge(n);return l}function $e(n,t,r){var e=n.length;if(t=+t,e>=t||!wf(t))return"";var u=t-e;return r=null==r?" ":r+"",_o(r,gf(u/r.length)).slice(0,u)}function Se(n,t,r,e){function u(){for(var t=-1,f=arguments.length,a=-1,c=e.length,l=zo(c+f);++a<c;)l[a]=e[a];for(;f--;)l[a++]=arguments[++t];var s=this&&this!==Qt&&this instanceof u?o:n;return s.apply(i?r:this,l)}var i=t&j,o=ge(n);return u}function We(n){var t=Po[n];return function(n,r){return r=r===b?0:+r||0,r?(r=cf(10,r),t(n*r)/r):t(n)}}function Fe(n){return function(t,r,e,u){var i=ze(e);return null==e&&i===wr?ee(t,r,n):ue(t,r,i(e,u,1),n)}}function Ne(n,t,r,e,u,i,o,f){var a=t&k;if(!a&&"function"!=typeof n)throw new Jo(z);var c=e?e.length:0;if(c||(t&=~(E|C),e=u=b),c-=u?u.length:0,t&C){var l=e,s=u;e=u=b}var p=a?b:Df(n),h=[n,t,r,e,u,l,s,i,o,f];if(p&&(eu(h,p),t=h[1],f=h[9]),h[9]=null==f?a?0:n.length:bf(f-c,0)||0,t==j)var v=he(h[0],h[2]);else v=t!=E&&t!=(j|E)||h[4].length?Ue.apply(b,h):Se.apply(b,h);var _=p?zf:Mf;return _(v,h)}function Te(n,t,r,e,u,i,o){var f=-1,a=n.length,c=t.length;if(a!=c&&!(u&&c>a))return!1;for(;++f<a;){var l=n[f],s=t[f],p=e?e(u?s:l,u?l:s,f):b;if(p!==b){if(p)continue;return!1}if(u){if(!pr(t,function(n){return l===n||r(l,n,e,u,i,o)}))return!1}else if(l!==s&&!r(l,s,e,u,i,o))return!1}return!0}function Le(n,t,r){switch(r){case P:case K:return+n==+t;case V:return n.name==t.name&&n.message==t.message;case J:return n!=+n?t!=+t:n==+t;case Z:case Q:return n==t+""}return!1}function Be(n,t,r,e,u,i,o){var f=za(n),a=f.length,c=za(t),l=c.length;if(a!=l&&!u)return!1;for(var s=a;s--;){var p=f[s];if(!(u?p in t:nf.call(t,p)))return!1}for(var h=u;++s<a;){p=f[s];var v=n[p],_=t[p],g=e?e(u?_:v,u?v:_,p):b;if(!(g===b?r(v,_,e,u,i,o):g))return!1;h||(h="constructor"==p)}if(!h){var y=n.constructor,d=t.constructor;if(y!=d&&"constructor"in n&&"constructor"in t&&!("function"==typeof y&&y instanceof y&&"function"==typeof d&&d instanceof d))return!1}return!0}function ze(n,t,r){var e=G.callback||ko;return e=e===ko?wr:e,r?e(n,t,r):e}function De(n){for(var t=n.name+"",r=Wf[t],e=r?r.length:0;e--;){var u=r[e],i=u.func;if(null==i||i==n)return u.name}return t}function qe(n,t,e){var u=G.indexOf||Au;return u=u===Au?r:u,n?u(n,t,e):u}function Me(n){for(var t=no(n),r=t.length;r--;)t[r][2]=ru(t[r][1]);return t}function Pe(n,t){var r=null==n?b:n[t];return Ni(r)?r:b}function Ke(n,t,r){for(var e=-1,u=r.length;++e<u;){var i=r[e],o=i.size;switch(i.type){case"drop":n+=o;break;case"dropRight":t-=o;break;case"take":t=Af(t,n+o);break;case"takeRight":n=bf(n,t-o)}}return{start:n,end:t}}function Ve(n){var t=n.length,r=new n.constructor(t);return t&&"string"==typeof n[0]&&nf.call(n,"index")&&(r.index=n.index,r.input=n.input),r}function Ye(n){var t=n.constructor;return"function"==typeof t&&t instanceof t||(t=Vo),new t}function Ge(n,t,r){var e=n.constructor;switch(t){case tt:return oe(n);case P:case K:return new e(+n);case rt:case et:case ut:case it:case ot:case ft:case at:case ct:case lt:var u=n.buffer;return new e(r?oe(u):u,n.byteOffset,n.length);case J:case Q:return new e(n);case Z:var i=new e(n.source,Et.exec(n));i.lastIndex=n.lastIndex}return i}function Je(n,t,r){null==n||Qe(t,n)||(t=su(t),n=1==t.length?n:Wr(n,Gr(t,0,-1)),t=ku(t));var e=null==n?n:n[t];return null==e?b:e.apply(n,r)}function Xe(n){return null!=n&&tu(qf(n))}function Ze(n,t){return n="number"==typeof n||$t.test(n)?+n:-1,t=null==t?$f:t,n>-1&&n%1==0&&t>n}function He(n,t,r){if(!Si(r))return!1;var e=typeof t;if("number"==e?Xe(r)&&Ze(t,r.length):"string"==e&&t in r){var u=r[t];return n===n?n===u:u!==u}return!1}function Qe(n,t){var r=typeof n;if("string"==r&&bt.test(n)||"number"==r)return!0;if(Ea(n))return!1;var e=!xt.test(n);return e||null!=t&&n in lu(t)}function nu(n){var t=De(n),r=G[t];if("function"!=typeof r||!(t in Dt.prototype))return!1;if(n===r)return!0;var e=Df(r);return!!e&&n===e[0]}function tu(n){return"number"==typeof n&&n>-1&&n%1==0&&$f>=n}function ru(n){return n===n&&!Si(n)}function eu(n,t){var r=n[1],e=t[1],u=r|e,i=U>u,o=e==U&&r==R||e==U&&r==$&&n[7].length<=t[8]||e==(U|$)&&r==R;if(!i&&!o)return n;e&j&&(n[2]=t[2],u|=r&j?0:I);var f=t[3];if(f){var a=n[3];n[3]=a?fe(a,f,t[4]):rr(f),n[4]=a?g(n[3],D):rr(t[4])}return f=t[5],f&&(a=n[5],n[5]=a?ae(a,f,t[6]):rr(f),n[6]=a?g(n[5],D):rr(t[6])),f=t[7],f&&(n[7]=rr(f)),e&U&&(n[8]=null==n[8]?t[8]:Af(n[8],t[8])),null==n[9]&&(n[9]=t[9]),n[0]=t[0],n[1]=u,n}function uu(n,t){return n===b?t:Ca(n,t,uu)}function iu(n,t){n=lu(n);for(var r=-1,e=t.length,u={};++r<e;){var i=t[r];i in n&&(u[i]=n[i])}return u}function ou(n,t){var r={};return Cr(n,function(n,e,u){t(n,e,u)&&(r[e]=n)}),r}function fu(n,t){for(var r=n.length,e=Af(t.length,r),u=rr(n);e--;){var i=t[e];n[e]=Ze(i,r)?u[i]:b}return n}function au(n){for(var t=Qi(n),r=t.length,e=r&&n.length,u=!!e&&tu(e)&&(Ea(n)||ji(n)),i=-1,o=[];++i<r;){var f=t[i];(u&&Ze(f,e)||nf.call(n,f))&&o.push(f)}return o}function cu(n){return null==n?[]:Xe(n)?Si(n)?n:Vo(n):uo(n)}function lu(n){return Si(n)?n:Vo(n)}function su(n){if(Ea(n))return n;var t=[];return u(n).replace(At,function(n,r,e,u){t.push(e?u.replace(Rt,"$1"):r||n)}),t}function pu(n){return n instanceof Dt?n.clone():new nt(n.__wrapped__,n.__chain__,rr(n.__actions__))}function hu(n,t,r){t=(r?He(n,t,r):null==t)?1:bf(df(t)||1,1);for(var e=0,u=n?n.length:0,i=-1,o=zo(gf(u/t));u>e;)o[++i]=Gr(n,e,e+=t);return o}function vu(n){for(var t=-1,r=n?n.length:0,e=-1,u=[];++t<r;){var i=n[t];i&&(u[++e]=i)}return u}function _u(n,t,r){var e=n?n.length:0;return e?((r?He(n,t,r):null==t)&&(t=1),Gr(n,0>t?0:t)):[]}function gu(n,t,r){var e=n?n.length:0;return e?((r?He(n,t,r):null==t)&&(t=1),t=e-(+t||0),Gr(n,0,0>t?0:t)):[]}function yu(n,t,r){return n&&n.length?te(n,ze(t,r,3),!0,!0):[]}function du(n,t,r){return n&&n.length?te(n,ze(t,r,3),!0):[]}function mu(n,t,r,e){var u=n?n.length:0;return u?(r&&"number"!=typeof r&&He(n,t,r)&&(r=0,e=u),Ir(n,t,r,e)):[]}function wu(n){return n?n[0]:b}function xu(n,t,r){var e=n?n.length:0;return r&&He(n,t,r)&&(t=!1),e?Er(n,t):[]}function bu(n){var t=n?n.length:0;return t?Er(n,!0):[]}function Au(n,t,e){var u=n?n.length:0;if(!u)return-1;if("number"==typeof e)e=0>e?bf(u+e,0):e;else if(e){var i=ee(n,t);return u>i&&(t===t?t===n[i]:n[i]!==n[i])?i:-1}return r(n,t,e||0)}function ju(n){return gu(n,1)}function ku(n){var t=n?n.length:0;return t?n[t-1]:b}function Iu(n,t,r){var e=n?n.length:0;if(!e)return-1;var u=e;if("number"==typeof r)u=(0>r?bf(e+r,0):Af(r||0,e-1))+1;else if(r){u=ee(n,t,!0)-1;var i=n[u];return(t===t?t===i:i!==i)?u:-1}if(t!==t)return h(n,u,!0);for(;u--;)if(n[u]===t)return u;return-1}function Ru(){var n=arguments,t=n[0];if(!t||!t.length)return t;for(var r=0,e=qe(),u=n.length;++r<u;)for(var i=0,o=n[r];(i=e(t,o,i))>-1;)hf.call(t,i,1);return t}function Ou(n,t,r){var e=[];if(!n||!n.length)return e;var u=-1,i=[],o=n.length;for(t=ze(t,r,3);++u<o;){var f=n[u];t(f,u,n)&&(e.push(f),i.push(u))}return Kr(n,i),e}function Eu(n){return _u(n,1)}function Cu(n,t,r){var e=n?n.length:0;return e?(r&&"number"!=typeof r&&He(n,t,r)&&(t=0,r=e),Gr(n,t,r)):[]}function Uu(n,t,r){var e=n?n.length:0;return e?((r?He(n,t,r):null==t)&&(t=1),Gr(n,0,0>t?0:t)):[]}function $u(n,t,r){var e=n?n.length:0;return e?((r?He(n,t,r):null==t)&&(t=1),t=e-(+t||0),Gr(n,0>t?0:t)):[]}function Su(n,t,r){return n&&n.length?te(n,ze(t,r,3),!1,!0):[]}function Wu(n,t,r){return n&&n.length?te(n,ze(t,r,3)):[]}function Fu(n,t,e,u){var i=n?n.length:0;if(!i)return[];null!=t&&"boolean"!=typeof t&&(u=e,e=He(n,t,u)?b:t,t=!1);var o=ze();return(null!=e||o!==wr)&&(e=o(e,u,3)),t&&qe()===r?y(n,e):Qr(n,e)}function Nu(n){if(!n||!n.length)return[];var t=-1,r=0;n=fr(n,function(n){return Xe(n)?(r=bf(n.length,r),!0):void 0});for(var e=zo(r);++t<r;)e[t]=ar(n,Mr(t));return e}function Tu(n,t,r){var e=n?n.length:0;if(!e)return[];var u=Nu(n);return null==t?u:(t=ie(t,r,4),ar(u,function(n){return lr(n,t,b,!0)}))}function Lu(){for(var n=-1,t=arguments.length;++n<t;){var r=arguments[n];if(Xe(r))var e=e?cr(Ar(e,r),Ar(r,e)):r}return e?Qr(e):[]}function Bu(n,t){var r=-1,e=n?n.length:0,u={};for(!e||t||Ea(n[0])||(t=[]);++r<e;){var i=n[r];t?u[i]=t[r]:i&&(u[i[0]]=i[1])}return u}function zu(n){var t=G(n);return t.__chain__=!0,t}function Du(n,t,r){return t.call(r,n),n}function qu(n,t,r){return t.call(r,n)}function Mu(){return zu(this)}function Pu(){return new nt(this.value(),this.__chain__)}function Ku(n){for(var t,r=this;r instanceof H;){var e=pu(r);t?u.__wrapped__=e:t=e;var u=e;r=r.__wrapped__}return u.__wrapped__=n,t}function Vu(){var n=this.__wrapped__,t=function(n){return n.reverse()};if(n instanceof Dt){var r=n;return this.__actions__.length&&(r=new Dt(this)),r=r.reverse(),r.__actions__.push({func:qu,args:[t],thisArg:b}),new nt(r,this.__chain__)}return this.thru(t)}function Yu(){return this.value()+""}function Gu(){return re(this.__wrapped__,this.__actions__)}function Ju(n,t,r){var e=Ea(n)?ir:jr;return r&&He(n,t,r)&&(t=b),("function"!=typeof t||r!==b)&&(t=ze(t,r,3)),e(n,t)}function Xu(n,t,r){var e=Ea(n)?fr:Rr;return t=ze(t,r,3),e(n,t)}function Zu(n,t){return ua(n,Br(t))}function Hu(n,t,r,e){var u=n?qf(n):0;return tu(u)||(n=uo(n),u=n.length),r="number"!=typeof r||e&&He(t,r,e)?0:0>r?bf(u+r,0):r||0,"string"==typeof n||!Ea(n)&&Di(n)?u>=r&&n.indexOf(t,r)>-1:!!u&&qe(n,t,r)>-1}function Qu(n,t,r){var e=Ea(n)?ar:Lr;return t=ze(t,r,3),e(n,t)}function ni(n,t){return Qu(n,So(t))}function ti(n,t,r){var e=Ea(n)?fr:Rr;return t=ze(t,r,3),e(n,function(n,r,e){return!t(n,r,e)})}function ri(n,t,r){if(r?He(n,t,r):null==t){n=cu(n);var e=n.length;return e>0?n[Vr(0,e-1)]:b}var u=-1,i=Vi(n),e=i.length,o=e-1;for(t=Af(0>t?0:+t||0,e);++u<t;){var f=Vr(u,o),a=i[f];i[f]=i[u],i[u]=a}return i.length=t,i}function ei(n){return ri(n,Of)}function ui(n){var t=n?qf(n):0;return tu(t)?t:za(n).length}function ii(n,t,r){var e=Ea(n)?pr:Jr;return r&&He(n,t,r)&&(t=b),("function"!=typeof t||r!==b)&&(t=ze(t,r,3)),e(n,t)}function oi(n,t,r){if(null==n)return[];r&&He(n,t,r)&&(t=b);var e=-1;t=ze(t,r,3);var u=Lr(n,function(n,r,u){return{criteria:t(n,r,u),index:++e,value:n}});return Xr(u,f)}function fi(n,t,r,e){return null==n?[]:(e&&He(t,r,e)&&(r=b),Ea(t)||(t=null==t?[]:[t]),Ea(r)||(r=null==r?[]:[r]),Zr(n,t,r))}function ai(n,t){return Xu(n,Br(t))}function ci(n,t){if("function"!=typeof t){if("function"!=typeof n)throw new Jo(z);var r=n;n=t,t=r}return n=wf(n=+n)?n:0,function(){return--n<1?t.apply(this,arguments):void 0}}function li(n,t,r){return r&&He(n,t,r)&&(t=b),t=n&&null==t?n.length:bf(+t||0,0),Ne(n,U,b,b,b,b,t)}function si(n,t){var r;if("function"!=typeof t){if("function"!=typeof n)throw new Jo(z);var e=n;n=t,t=e}return function(){return--n>0&&(r=t.apply(this,arguments)),1>=n&&(t=b),r}}function pi(n,t,r){function e(){h&&ff(h),c&&ff(c),_=0,c=h=v=b}function u(t,r){r&&ff(r),c=h=v=b,t&&(_=_a(),l=n.apply(p,a),h||c||(a=p=b))}function i(){var n=t-(_a()-s);0>=n||n>t?u(v,c):h=pf(i,n)}function o(){u(y,h)}function f(){if(a=arguments,s=_a(),p=this,v=y&&(h||!d),g===!1)var r=d&&!h;else{c||d||(_=s);var e=g-(s-_),u=0>=e||e>g;u?(c&&(c=ff(c)),_=s,l=n.apply(p,a)):c||(c=pf(o,e))}return u&&h?h=ff(h):h||t===g||(h=pf(i,t)),r&&(u=!0,l=n.apply(p,a)),!u||h||c||(a=p=b),l}var a,c,l,s,p,h,v,_=0,g=!1,y=!0;if("function"!=typeof n)throw new Jo(z);if(t=0>t?0:+t||0,r===!0){var d=!0;y=!1}else Si(r)&&(d=!!r.leading,g="maxWait"in r&&bf(+r.maxWait||0,t),y="trailing"in r?!!r.trailing:y);return f.cancel=e,f}function hi(n,t){if("function"!=typeof n||t&&"function"!=typeof t)throw new Jo(z);var r=function(){var e=arguments,u=t?t.apply(this,e):e[0],i=r.cache;if(i.has(u))return i.get(u);var o=n.apply(this,e);return r.cache=i.set(u,o),o};return r.cache=new hi.Cache,r}function vi(n){if("function"!=typeof n)throw new Jo(z);return function(){return!n.apply(this,arguments)}}function _i(n){return si(2,n)}function gi(n,t){if("function"!=typeof n)throw new Jo(z);return t=bf(t===b?n.length-1:+t||0,0),function(){for(var r=arguments,e=-1,u=bf(r.length-t,0),i=zo(u);++e<u;)i[e]=r[t+e];switch(t){case 0:return n.call(this,i);case 1:return n.call(this,r[0],i);case 2:return n.call(this,r[0],r[1],i)}var o=zo(t+1);for(e=-1;++e<t;)o[e]=r[e];return o[t]=i,n.apply(this,o)}}function yi(n){if("function"!=typeof n)throw new Jo(z);return function(t){return n.apply(this,t)}}function di(n,t,r){var e=!0,u=!0;if("function"!=typeof n)throw new Jo(z);return r===!1?e=!1:Si(r)&&(e="leading"in r?!!r.leading:e,u="trailing"in r?!!r.trailing:u),pi(n,t,{leading:e,maxWait:+t,trailing:u})}function mi(n,t){return t=null==t?Ro:t,Ne(t,E,b,[n],[])}function wi(n,t,r,e){return t&&"boolean"!=typeof t&&He(n,t,r)?t=!1:"function"==typeof t&&(e=r,r=t,t=!1),"function"==typeof r?xr(n,t,ie(r,e,3)):xr(n,t)}function xi(n,t,r){return"function"==typeof t?xr(n,!0,ie(t,r,3)):xr(n,!0)}function bi(n,t){return n>t}function Ai(n,t){return n>=t}function ji(n){return v(n)&&Xe(n)&&nf.call(n,"callee")&&!lf.call(n,"callee")}function ki(n){return n===!0||n===!1||v(n)&&rf.call(n)==P}function Ii(n){return v(n)&&rf.call(n)==K}function Ri(n){return!!n&&1===n.nodeType&&v(n)&&!Bi(n)}function Oi(n){return null==n?!0:Xe(n)&&(Ea(n)||Di(n)||ji(n)||v(n)&&$i(n.splice))?!n.length:!za(n).length}function Ei(n,t,r,e){r="function"==typeof r?ie(r,e,3):b;var u=r?r(n,t):b;return u===b?Fr(n,t,r):!!u}function Ci(n){return v(n)&&"string"==typeof n.message&&rf.call(n)==V}function Ui(n){return"number"==typeof n&&wf(n)}function $i(n){return Si(n)&&rf.call(n)==Y}function Si(n){var t=typeof n;return!!n&&("object"==t||"function"==t)}function Wi(n,t,r,e){return r="function"==typeof r?ie(r,e,3):b,Tr(n,Me(t),r)}function Fi(n){return Li(n)&&n!=+n}function Ni(n){return null==n?!1:$i(n)?uf.test(Qo.call(n)):v(n)&&Ut.test(n)}function Ti(n){return null===n}function Li(n){return"number"==typeof n||v(n)&&rf.call(n)==J}function Bi(n){var t;if(!v(n)||rf.call(n)!=X||ji(n)||!nf.call(n,"constructor")&&(t=n.constructor,"function"==typeof t&&!(t instanceof t)))return!1;var r;return Cr(n,function(n,t){r=t}),r===b||nf.call(n,r)}function zi(n){return Si(n)&&rf.call(n)==Z}function Di(n){return"string"==typeof n||v(n)&&rf.call(n)==Q}function qi(n){return v(n)&&tu(n.length)&&!!Bt[rf.call(n)]}function Mi(n){return n===b}function Pi(n,t){return t>n}function Ki(n,t){return t>=n}function Vi(n){var t=n?qf(n):0;return tu(t)?t?rr(n):[]:uo(n)}function Yi(n){return mr(n,Qi(n))}function Gi(n,t,r){var e=Ff(n);return r&&He(n,t,r)&&(t=b),t?yr(e,t):e}function Ji(n){return Sr(n,Qi(n))}function Xi(n,t,r){var e=null==n?b:Wr(n,su(t),t+"");return e===b?r:e}function Zi(n,t){if(null==n)return!1;var r=nf.call(n,t);if(!r&&!Qe(t)){if(t=su(t),n=1==t.length?n:Wr(n,Gr(t,0,-1)),null==n)return!1;t=ku(t),r=nf.call(n,t)}return r||tu(n.length)&&Ze(t,n.length)&&(Ea(n)||ji(n))}function Hi(n,t,r){r&&He(n,t,r)&&(t=b);for(var e=-1,u=za(n),i=u.length,o={};++e<i;){var f=u[e],a=n[f];t?nf.call(o,a)?o[a].push(f):o[a]=[f]:o[a]=f}return o}function Qi(n){if(null==n)return[];Si(n)||(n=Vo(n));var t=n.length;t=t&&tu(t)&&(Ea(n)||ji(n))&&t||0;for(var r=n.constructor,e=-1,u="function"==typeof r&&r.prototype===n,i=zo(t),o=t>0;++e<t;)i[e]=e+"";for(var f in n)o&&Ze(f,t)||"constructor"==f&&(u||!nf.call(n,f))||i.push(f);return i}function no(n){n=lu(n);for(var t=-1,r=za(n),e=r.length,u=zo(e);++t<e;){var i=r[t];u[t]=[i,n[i]]}return u}function to(n,t,r){var e=null==n?b:n[t];return e===b&&(null==n||Qe(t,n)||(t=su(t),n=1==t.length?n:Wr(n,Gr(t,0,-1)),e=null==n?b:n[ku(t)]),e=e===b?r:e),$i(e)?e.call(n):e}function ro(n,t,r){if(null==n)return n;var e=t+"";t=null!=n[e]||Qe(t,n)?[e]:su(t);for(var u=-1,i=t.length,o=i-1,f=n;null!=f&&++u<i;){var a=t[u];Si(f)&&(u==o?f[a]=r:null==f[a]&&(f[a]=Ze(t[u+1])?[]:{})),f=f[a]}return n}function eo(n,t,r,e){var u=Ea(n)||qi(n);if(t=ze(t,e,4),null==r)if(u||Si(n)){var i=n.constructor;r=u?Ea(n)?new i:[]:Ff($i(i)?i.prototype:b)}else r={};return(u?er:Ur)(n,function(n,e,u){return t(r,n,e,u)}),r}function uo(n){return ne(n,za(n))}function io(n){return ne(n,Qi(n))}function oo(n,t,r){return t=+t||0,r===b?(r=t,t=0):r=+r||0,n>=Af(t,r)&&n<bf(t,r)}function fo(n,t,r){r&&He(n,t,r)&&(t=r=b);var e=null==n,u=null==t;if(null==r&&(u&&"boolean"==typeof n?(r=n,n=1):"boolean"==typeof t&&(r=t,u=!0)),e&&u&&(t=1,u=!1),n=+n||0,u?(t=n,n=0):t=+t||0,r||n%1||t%1){var i=If();return Af(n+i*(t-n+af("1e-"+((i+"").length-1))),t)}return Vr(n,t)}function ao(n){return n=u(n),n&&n.charAt(0).toUpperCase()+n.slice(1)}function co(n){return n=u(n),n&&n.replace(St,c).replace(It,"")}function lo(n,t,r){n=u(n),t+="";var e=n.length;return r=r===b?e:Af(0>r?0:+r||0,e),r-=t.length,r>=0&&n.indexOf(t,r)==r}function so(n){return n=u(n),n&&yt.test(n)?n.replace(_t,l):n}function po(n){return n=u(n),n&&kt.test(n)?n.replace(jt,s):n||"(?:)"}function ho(n,t,r){n=u(n),t=+t;var e=n.length;if(e>=t||!wf(t))return n;var i=(t-e)/2,o=df(i),f=gf(i);return r=$e("",f,r),r.slice(0,o)+n+r}function vo(n,t,r){return(r?He(n,t,r):null==t)?t=0:t&&(t=+t),n=mo(n),kf(n,t||(Ct.test(n)?16:10))}function _o(n,t){var r="";if(n=u(n),t=+t,1>t||!n||!wf(t))return r;do t%2&&(r+=n),t=df(t/2),n+=n;while(t);return r}function go(n,t,r){return n=u(n),r=null==r?0:Af(0>r?0:+r||0,n.length),n.lastIndexOf(t,r)==r}function yo(n,t,r){var e=G.templateSettings;r&&He(n,t,r)&&(t=r=b),n=u(n),t=gr(yr({},r||t),e,_r);
var i,o,f=gr(yr({},t.imports),e.imports,_r),a=za(f),c=ne(f,a),l=0,s=t.interpolate||Wt,h="__p += '",v=Yo((t.escape||Wt).source+"|"+s.source+"|"+(s===wt?Ot:Wt).source+"|"+(t.evaluate||Wt).source+"|$","g"),_="//# sourceURL="+("sourceURL"in t?t.sourceURL:"lodash.templateSources["+ ++Lt+"]")+"\n";n.replace(v,function(t,r,e,u,f,a){return e||(e=u),h+=n.slice(l,a).replace(Ft,p),r&&(i=!0,h+="' +\n__e("+r+") +\n'"),f&&(o=!0,h+="';\n"+f+";\n__p += '"),e&&(h+="' +\n((__t = ("+e+")) == null ? '' : __t) +\n'"),l=a+t.length,t}),h+="';\n";var g=t.variable;g||(h="with (obj) {\n"+h+"\n}\n"),h=(o?h.replace(st,""):h).replace(pt,"$1").replace(ht,"$1;"),h="function("+(g||"obj")+") {\n"+(g?"":"obj || (obj = {});\n")+"var __t, __p = ''"+(i?", __e = _.escape":"")+(o?", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n":";\n")+h+"return __p\n}";var y=Za(function(){return Mo(a,_+"return "+h).apply(b,c)});if(y.source=h,Ci(y))throw y;return y}function mo(n,t,r){var e=n;return(n=u(n))?(r?He(e,t,r):null==t)?n.slice(d(n),m(n)+1):(t+="",n.slice(i(n,t),o(n,t)+1)):n}function wo(n,t,r){var e=n;return n=u(n),n?n.slice((r?He(e,t,r):null==t)?d(n):i(n,t+"")):n}function xo(n,t,r){var e=n;return n=u(n),n?(r?He(e,t,r):null==t)?n.slice(0,m(n)+1):n.slice(0,o(n,t+"")+1):n}function bo(n,t,r){r&&He(n,t,r)&&(t=b);var e=S,i=W;if(null!=t)if(Si(t)){var o="separator"in t?t.separator:o;e="length"in t?+t.length||0:e,i="omission"in t?u(t.omission):i}else e=+t||0;if(n=u(n),e>=n.length)return n;var f=e-i.length;if(1>f)return i;var a=n.slice(0,f);if(null==o)return a+i;if(zi(o)){if(n.slice(f).search(o)){var c,l,s=n.slice(0,f);for(o.global||(o=Yo(o.source,(Et.exec(o)||"")+"g")),o.lastIndex=0;c=o.exec(s);)l=c.index;a=a.slice(0,null==l?f:l)}}else if(n.indexOf(o,f)!=f){var p=a.lastIndexOf(o);p>-1&&(a=a.slice(0,p))}return a+i}function Ao(n){return n=u(n),n&&gt.test(n)?n.replace(vt,w):n}function jo(n,t,r){return r&&He(n,t,r)&&(t=b),n=u(n),n.match(t||Nt)||[]}function ko(n,t,r){return r&&He(n,t,r)&&(t=b),v(n)?Oo(n):wr(n,t)}function Io(n){return function(){return n}}function Ro(n){return n}function Oo(n){return Br(xr(n,!0))}function Eo(n,t){return zr(n,xr(t,!0))}function Co(n,t,r){if(null==r){var e=Si(t),u=e?za(t):b,i=u&&u.length?Sr(t,u):b;(i?i.length:e)||(i=!1,r=t,t=n,n=this)}i||(i=Sr(t,za(t)));var o=!0,f=-1,a=$i(n),c=i.length;r===!1?o=!1:Si(r)&&"chain"in r&&(o=r.chain);for(;++f<c;){var l=i[f],s=t[l];n[l]=s,a&&(n.prototype[l]=function(t){return function(){var r=this.__chain__;if(o||r){var e=n(this.__wrapped__),u=e.__actions__=rr(this.__actions__);return u.push({func:t,args:arguments,thisArg:n}),e.__chain__=r,e}return t.apply(n,cr([this.value()],arguments))}}(s))}return n}function Uo(){return Qt._=ef,this}function $o(){}function So(n){return Qe(n)?Mr(n):Pr(n)}function Wo(n){return function(t){return Wr(n,su(t),t+"")}}function Fo(n,t,r){r&&He(n,t,r)&&(t=r=b),n=+n||0,r=null==r?1:+r||0,null==t?(t=n,n=0):t=+t||0;for(var e=-1,u=bf(gf((t-n)/(r||1)),0),i=zo(u);++e<u;)i[e]=n,n+=r;return i}function No(n,t,r){if(n=df(n),1>n||!wf(n))return[];var e=-1,u=zo(Af(n,Ef));for(t=ie(t,r,1);++e<n;)Ef>e?u[e]=t(e):t(e);return u}function To(n){var t=++tf;return u(n)+t}function Lo(n,t){return(+n||0)+(+t||0)}function Bo(n,t,r){return r&&He(n,t,r)&&(t=b),t=ze(t,r,3),1==t.length?hr(Ea(n)?n:cu(n),t):Hr(n,t)}_=_?nr.defaults(Qt.Object(),_,nr.pick(Qt,Tt)):Qt;{var zo=_.Array,Do=_.Date,qo=_.Error,Mo=_.Function,Po=_.Math,Ko=_.Number,Vo=_.Object,Yo=_.RegExp,Go=_.String,Jo=_.TypeError,Xo=zo.prototype,Zo=Vo.prototype,Ho=Go.prototype,Qo=Mo.prototype.toString,nf=Zo.hasOwnProperty,tf=0,rf=Zo.toString,ef=Qt._,uf=Yo("^"+Qo.call(nf).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),of=_.ArrayBuffer,ff=_.clearTimeout,af=_.parseFloat,cf=Po.pow,lf=Zo.propertyIsEnumerable,sf=Pe(_,"Set"),pf=_.setTimeout,hf=Xo.splice,vf=_.Uint8Array,_f=Pe(_,"WeakMap"),gf=Po.ceil,yf=Pe(Vo,"create"),df=Po.floor,mf=Pe(zo,"isArray"),wf=_.isFinite,xf=Pe(Vo,"keys"),bf=Po.max,Af=Po.min,jf=Pe(Do,"now"),kf=_.parseInt,If=Po.random,Rf=Ko.NEGATIVE_INFINITY,Of=Ko.POSITIVE_INFINITY,Ef=4294967295,Cf=Ef-1,Uf=Ef>>>1,$f=9007199254740991,Sf=_f&&new _f,Wf={};G.support={}}G.templateSettings={escape:dt,evaluate:mt,interpolate:wt,variable:"",imports:{_:G}};var Ff=function(){function n(){}return function(t){if(Si(t)){n.prototype=t;var r=new n;n.prototype=b}return r||{}}}(),Nf=se(Ur),Tf=se($r,!0),Lf=pe(),Bf=pe(!0),zf=Sf?function(n,t){return Sf.set(n,t),n}:Ro,Df=Sf?function(n){return Sf.get(n)}:$o,qf=Mr("length"),Mf=function(){var n=0,t=0;return function(r,e){var u=_a(),i=N-(u-t);if(t=u,i>0){if(++n>=F)return r}else n=0;return zf(r,e)}}(),Pf=gi(function(n,t){return v(n)&&Xe(n)?Ar(n,Er(t,!1,!0)):[]}),Kf=xe(),Vf=xe(!0),Yf=gi(function(n){for(var t=n.length,e=t,u=zo(s),i=qe(),o=i===r,f=[];e--;){var a=n[e]=Xe(a=n[e])?a:[];u[e]=o&&a.length>=120?ve(e&&a):null}var c=n[0],l=-1,s=c?c.length:0,p=u[0];n:for(;++l<s;)if(a=c[l],(p?Zt(p,a):i(f,a,0))<0){for(var e=t;--e;){var h=u[e];if((h?Zt(h,a):i(n[e],a,0))<0)continue n}p&&p.push(a),f.push(a)}return f}),Gf=gi(function(t,r){r=Er(r);var e=dr(t,r);return Kr(t,r.sort(n)),e}),Jf=Fe(),Xf=Fe(!0),Zf=gi(function(n){return Qr(Er(n,!1,!0))}),Hf=gi(function(n,t){return Xe(n)?Ar(n,t):[]}),Qf=gi(Nu),na=gi(function(n){var t=n.length,r=t>2?n[t-2]:b,e=t>1?n[t-1]:b;return t>2&&"function"==typeof r?t-=2:(r=t>1&&"function"==typeof e?(--t,e):b,e=b),n.length=t,Tu(n,r,e)}),ta=gi(function(n){return n=Er(n),this.thru(function(t){return tr(Ea(t)?t:[lu(t)],n)})}),ra=gi(function(n,t){return dr(n,Er(t))}),ea=ce(function(n,t,r){nf.call(n,r)?++n[r]:n[r]=1}),ua=we(Nf),ia=we(Tf,!0),oa=je(er,Nf),fa=je(ur,Tf),aa=ce(function(n,t,r){nf.call(n,r)?n[r].push(t):n[r]=[t]}),ca=ce(function(n,t,r){n[r]=t}),la=gi(function(n,t,r){var e=-1,u="function"==typeof t,i=Qe(t),o=Xe(n)?zo(n.length):[];return Nf(n,function(n){var f=u?t:i&&null!=n?n[t]:b;o[++e]=f?f.apply(n,r):Je(n,t,r)}),o}),sa=ce(function(n,t,r){n[r?0:1].push(t)},function(){return[[],[]]}),pa=Ce(lr,Nf),ha=Ce(sr,Tf),va=gi(function(n,t){if(null==n)return[];var r=t[2];return r&&He(t[0],t[1],r)&&(t.length=1),Zr(n,Er(t),[])}),_a=jf||function(){return(new Do).getTime()},ga=gi(function(n,t,r){var e=j;if(r.length){var u=g(r,ga.placeholder);e|=E}return Ne(n,e,t,r,u)}),ya=gi(function(n,t){t=t.length?Er(t):Ji(n);for(var r=-1,e=t.length;++r<e;){var u=t[r];n[u]=Ne(n[u],j,n)}return n}),da=gi(function(n,t,r){var e=j|k;if(r.length){var u=g(r,da.placeholder);e|=E}return Ne(t,e,n,r,u)}),ma=ye(R),wa=ye(O),xa=gi(function(n,t){return br(n,1,t)}),ba=gi(function(n,t,r){return br(n,t,r)}),Aa=Ae(),ja=Ae(!0),ka=gi(function(n,t){if(t=Er(t),"function"!=typeof n||!ir(t,e))throw new Jo(z);var r=t.length;return gi(function(e){for(var u=Af(e.length,r);u--;)e[u]=t[u](e[u]);return n.apply(this,e)})}),Ia=Ee(E),Ra=Ee(C),Oa=gi(function(n,t){return Ne(n,$,b,b,b,Er(t))}),Ea=mf||function(n){return v(n)&&tu(n.length)&&rf.call(n)==M},Ca=le(Dr),Ua=le(function(n,t,r){return r?gr(n,t,r):yr(n,t)}),$a=de(Ua,vr),Sa=de(Ca,uu),Wa=be(Ur),Fa=be($r),Na=ke(Lf),Ta=ke(Bf),La=Ie(Ur),Ba=Ie($r),za=xf?function(n){var t=null==n?b:n.constructor;return"function"==typeof t&&t.prototype===n||"function"!=typeof n&&Xe(n)?au(n):Si(n)?xf(n):[]}:au,Da=Re(!0),qa=Re(),Ma=gi(function(n,t){if(null==n)return{};if("function"!=typeof t[0]){var t=ar(Er(t),Go);return iu(n,Ar(Qi(n),t))}var r=ie(t[0],t[1],3);return ou(n,function(n,t,e){return!r(n,t,e)})}),Pa=gi(function(n,t){return null==n?{}:"function"==typeof t[0]?ou(n,ie(t[0],t[1],3)):iu(n,Er(t))}),Ka=_e(function(n,t,r){return t=t.toLowerCase(),n+(r?t.charAt(0).toUpperCase()+t.slice(1):t)}),Va=_e(function(n,t,r){return n+(r?"-":"")+t.toLowerCase()}),Ya=Oe(),Ga=Oe(!0),Ja=_e(function(n,t,r){return n+(r?"_":"")+t.toLowerCase()}),Xa=_e(function(n,t,r){return n+(r?" ":"")+(t.charAt(0).toUpperCase()+t.slice(1))}),Za=gi(function(n,t){try{return n.apply(b,t)}catch(r){return Ci(r)?r:new qo(r)}}),Ha=gi(function(n,t){return function(r){return Je(r,n,t)}}),Qa=gi(function(n,t){return function(r){return Je(n,r,t)}}),nc=We("ceil"),tc=We("floor"),rc=me(bi,Rf),ec=me(Pi,Of),uc=We("round");return G.prototype=H.prototype,nt.prototype=Ff(H.prototype),nt.prototype.constructor=nt,Dt.prototype=Ff(H.prototype),Dt.prototype.constructor=Dt,Kt.prototype["delete"]=Vt,Kt.prototype.get=Yt,Kt.prototype.has=Gt,Kt.prototype.set=Jt,Xt.prototype.push=Ht,hi.Cache=Kt,G.after=ci,G.ary=li,G.assign=Ua,G.at=ra,G.before=si,G.bind=ga,G.bindAll=ya,G.bindKey=da,G.callback=ko,G.chain=zu,G.chunk=hu,G.compact=vu,G.constant=Io,G.countBy=ea,G.create=Gi,G.curry=ma,G.curryRight=wa,G.debounce=pi,G.defaults=$a,G.defaultsDeep=Sa,G.defer=xa,G.delay=ba,G.difference=Pf,G.drop=_u,G.dropRight=gu,G.dropRightWhile=yu,G.dropWhile=du,G.fill=mu,G.filter=Xu,G.flatten=xu,G.flattenDeep=bu,G.flow=Aa,G.flowRight=ja,G.forEach=oa,G.forEachRight=fa,G.forIn=Na,G.forInRight=Ta,G.forOwn=La,G.forOwnRight=Ba,G.functions=Ji,G.groupBy=aa,G.indexBy=ca,G.initial=ju,G.intersection=Yf,G.invert=Hi,G.invoke=la,G.keys=za,G.keysIn=Qi,G.map=Qu,G.mapKeys=Da,G.mapValues=qa,G.matches=Oo,G.matchesProperty=Eo,G.memoize=hi,G.merge=Ca,G.method=Ha,G.methodOf=Qa,G.mixin=Co,G.modArgs=ka,G.negate=vi,G.omit=Ma,G.once=_i,G.pairs=no,G.partial=Ia,G.partialRight=Ra,G.partition=sa,G.pick=Pa,G.pluck=ni,G.property=So,G.propertyOf=Wo,G.pull=Ru,G.pullAt=Gf,G.range=Fo,G.rearg=Oa,G.reject=ti,G.remove=Ou,G.rest=Eu,G.restParam=gi,G.set=ro,G.shuffle=ei,G.slice=Cu,G.sortBy=oi,G.sortByAll=va,G.sortByOrder=fi,G.spread=yi,G.take=Uu,G.takeRight=$u,G.takeRightWhile=Su,G.takeWhile=Wu,G.tap=Du,G.throttle=di,G.thru=qu,G.times=No,G.toArray=Vi,G.toPlainObject=Yi,G.transform=eo,G.union=Zf,G.uniq=Fu,G.unzip=Nu,G.unzipWith=Tu,G.values=uo,G.valuesIn=io,G.where=ai,G.without=Hf,G.wrap=mi,G.xor=Lu,G.zip=Qf,G.zipObject=Bu,G.zipWith=na,G.backflow=ja,G.collect=Qu,G.compose=ja,G.each=oa,G.eachRight=fa,G.extend=Ua,G.iteratee=ko,G.methods=Ji,G.object=Bu,G.select=Xu,G.tail=Eu,G.unique=Fu,Co(G,G),G.add=Lo,G.attempt=Za,G.camelCase=Ka,G.capitalize=ao,G.ceil=nc,G.clone=wi,G.cloneDeep=xi,G.deburr=co,G.endsWith=lo,G.escape=so,G.escapeRegExp=po,G.every=Ju,G.find=ua,G.findIndex=Kf,G.findKey=Wa,G.findLast=ia,G.findLastIndex=Vf,G.findLastKey=Fa,G.findWhere=Zu,G.first=wu,G.floor=tc,G.get=Xi,G.gt=bi,G.gte=Ai,G.has=Zi,G.identity=Ro,G.includes=Hu,G.indexOf=Au,G.inRange=oo,G.isArguments=ji,G.isArray=Ea,G.isBoolean=ki,G.isDate=Ii,G.isElement=Ri,G.isEmpty=Oi,G.isEqual=Ei,G.isError=Ci,G.isFinite=Ui,G.isFunction=$i,G.isMatch=Wi,G.isNaN=Fi,G.isNative=Ni,G.isNull=Ti,G.isNumber=Li,G.isObject=Si,G.isPlainObject=Bi,G.isRegExp=zi,G.isString=Di,G.isTypedArray=qi,G.isUndefined=Mi,G.kebabCase=Va,G.last=ku,G.lastIndexOf=Iu,G.lt=Pi,G.lte=Ki,G.max=rc,G.min=ec,G.noConflict=Uo,G.noop=$o,G.now=_a,G.pad=ho,G.padLeft=Ya,G.padRight=Ga,G.parseInt=vo,G.random=fo,G.reduce=pa,G.reduceRight=ha,G.repeat=_o,G.result=to,G.round=uc,G.runInContext=x,G.size=ui,G.snakeCase=Ja,G.some=ii,G.sortedIndex=Jf,G.sortedLastIndex=Xf,G.startCase=Xa,G.startsWith=go,G.sum=Bo,G.template=yo,G.trim=mo,G.trimLeft=wo,G.trimRight=xo,G.trunc=bo,G.unescape=Ao,G.uniqueId=To,G.words=jo,G.all=Ju,G.any=ii,G.contains=Hu,G.eq=Ei,G.detect=ua,G.foldl=pa,G.foldr=ha,G.head=wu,G.include=Hu,G.inject=pa,Co(G,function(){var n={};return Ur(G,function(t,r){G.prototype[r]||(n[r]=t)}),n}(),!1),G.sample=ri,G.prototype.sample=function(n){return this.__chain__||null!=n?this.thru(function(t){return ri(t,n)}):ri(this.value())},G.VERSION=A,er(["bind","bindKey","curry","curryRight","partial","partialRight"],function(n){G[n].placeholder=G}),er(["drop","take"],function(n,t){Dt.prototype[n]=function(r){var e=this.__filtered__;if(e&&!t)return new Dt(this);r=null==r?1:bf(df(r)||0,0);var u=this.clone();return e?u.__takeCount__=Af(u.__takeCount__,r):u.__views__.push({size:r,type:n+(u.__dir__<0?"Right":"")}),u},Dt.prototype[n+"Right"]=function(t){return this.reverse()[n](t).reverse()}}),er(["filter","map","takeWhile"],function(n,t){var r=t+1,e=r!=B;Dt.prototype[n]=function(n,t){var u=this.clone();return u.__iteratees__.push({iteratee:ze(n,t,1),type:r}),u.__filtered__=u.__filtered__||e,u}}),er(["first","last"],function(n,t){var r="take"+(t?"Right":"");Dt.prototype[n]=function(){return this[r](1).value()[0]}}),er(["initial","rest"],function(n,t){var r="drop"+(t?"":"Right");Dt.prototype[n]=function(){return this.__filtered__?new Dt(this):this[r](1)}}),er(["pluck","where"],function(n,t){var r=t?"filter":"map",e=t?Br:So;Dt.prototype[n]=function(n){return this[r](e(n))}}),Dt.prototype.compact=function(){return this.filter(Ro)},Dt.prototype.reject=function(n,t){return n=ze(n,t,1),this.filter(function(t){return!n(t)})},Dt.prototype.slice=function(n,t){n=null==n?0:+n||0;var r=this;return r.__filtered__&&(n>0||0>t)?new Dt(r):(0>n?r=r.takeRight(-n):n&&(r=r.drop(n)),t!==b&&(t=+t||0,r=0>t?r.dropRight(-t):r.take(t-n)),r)},Dt.prototype.takeRightWhile=function(n,t){return this.reverse().takeWhile(n,t).reverse()},Dt.prototype.toArray=function(){return this.take(Of)},Ur(Dt.prototype,function(n,t){var r=/^(?:filter|map|reject)|While$/.test(t),e=/^(?:first|last)$/.test(t),u=G[e?"take"+("last"==t?"Right":""):t];u&&(G.prototype[t]=function(){var t=e?[1]:arguments,i=this.__chain__,o=this.__wrapped__,f=!!this.__actions__.length,a=o instanceof Dt,c=t[0],l=a||Ea(o);l&&r&&"function"==typeof c&&1!=c.length&&(a=l=!1);var s=function(n){return e&&i?u(n,1)[0]:u.apply(b,cr([n],t))},p={func:qu,args:[s],thisArg:b},h=a&&!f;if(e&&!i)return h?(o=o.clone(),o.__actions__.push(p),n.call(o)):u.call(b,this.value())[0];if(!e&&l){o=h?o:new Dt(this);var v=n.apply(o,t);return v.__actions__.push(p),new nt(v,i)}return this.thru(s)})}),er(["join","pop","push","replace","shift","sort","splice","split","unshift"],function(n){var t=(/^(?:replace|split)$/.test(n)?Ho:Xo)[n],r=/^(?:push|sort|unshift)$/.test(n)?"tap":"thru",e=/^(?:join|pop|replace|shift)$/.test(n);G.prototype[n]=function(){var n=arguments;return e&&!this.__chain__?t.apply(this.value(),n):this[r](function(r){return t.apply(r,n)})}}),Ur(Dt.prototype,function(n,t){var r=G[t];if(r){var e=r.name+"",u=Wf[e]||(Wf[e]=[]);u.push({name:t,func:r})}}),Wf[Ue(b,k).name]=[{name:"wrapper",func:b}],Dt.prototype.clone=qt,Dt.prototype.reverse=Mt,Dt.prototype.value=Pt,G.prototype.chain=Mu,G.prototype.commit=Pu,G.prototype.concat=ta,G.prototype.plant=Ku,G.prototype.reverse=Vu,G.prototype.toString=Yu,G.prototype.run=G.prototype.toJSON=G.prototype.valueOf=G.prototype.value=Gu,G.prototype.collect=G.prototype.map,G.prototype.head=G.prototype.first,G.prototype.select=G.prototype.filter,G.prototype.tail=G.prototype.rest,G}var b,A="3.10.1",j=1,k=2,I=4,R=8,O=16,E=32,C=64,U=128,$=256,S=30,W="...",F=150,N=16,T=200,L=1,B=2,z="Expected a function",D="__lodash_placeholder__",q="[object Arguments]",M="[object Array]",P="[object Boolean]",K="[object Date]",V="[object Error]",Y="[object Function]",G="[object Map]",J="[object Number]",X="[object Object]",Z="[object RegExp]",H="[object Set]",Q="[object String]",nt="[object WeakMap]",tt="[object ArrayBuffer]",rt="[object Float32Array]",et="[object Float64Array]",ut="[object Int8Array]",it="[object Int16Array]",ot="[object Int32Array]",ft="[object Uint8Array]",at="[object Uint8ClampedArray]",ct="[object Uint16Array]",lt="[object Uint32Array]",st=/\b__p \+= '';/g,pt=/\b(__p \+=) '' \+/g,ht=/(__e\(.*?\)|\b__t\)) \+\n'';/g,vt=/&(?:amp|lt|gt|quot|#39|#96);/g,_t=/[&<>"'`]/g,gt=RegExp(vt.source),yt=RegExp(_t.source),dt=/<%-([\s\S]+?)%>/g,mt=/<%([\s\S]+?)%>/g,wt=/<%=([\s\S]+?)%>/g,xt=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,bt=/^\w*$/,At=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,jt=/^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,kt=RegExp(jt.source),It=/[\u0300-\u036f\ufe20-\ufe23]/g,Rt=/\\(\\)?/g,Ot=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Et=/\w*$/,Ct=/^0[xX]/,Ut=/^\[object .+?Constructor\]$/,$t=/^\d+$/,St=/[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,Wt=/($^)/,Ft=/['\n\r\u2028\u2029\\]/g,Nt=function(){var n="[A-Z\\xc0-\\xd6\\xd8-\\xde]",t="[a-z\\xdf-\\xf6\\xf8-\\xff]+";return RegExp(n+"+(?="+n+t+")|"+n+"?"+t+"|"+n+"+|[0-9]+","g")}(),Tt=["Array","ArrayBuffer","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Math","Number","Object","RegExp","Set","String","_","clearTimeout","isFinite","parseFloat","parseInt","setTimeout","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap"],Lt=-1,Bt={};Bt[rt]=Bt[et]=Bt[ut]=Bt[it]=Bt[ot]=Bt[ft]=Bt[at]=Bt[ct]=Bt[lt]=!0,Bt[q]=Bt[M]=Bt[tt]=Bt[P]=Bt[K]=Bt[V]=Bt[Y]=Bt[G]=Bt[J]=Bt[X]=Bt[Z]=Bt[H]=Bt[Q]=Bt[nt]=!1;var zt={};zt[q]=zt[M]=zt[tt]=zt[P]=zt[K]=zt[rt]=zt[et]=zt[ut]=zt[it]=zt[ot]=zt[J]=zt[X]=zt[Z]=zt[Q]=zt[ft]=zt[at]=zt[ct]=zt[lt]=!0,zt[V]=zt[Y]=zt[G]=zt[H]=zt[nt]=!1;var Dt={"\xc0":"A","\xc1":"A","\xc2":"A","\xc3":"A","\xc4":"A","\xc5":"A","\xe0":"a","\xe1":"a","\xe2":"a","\xe3":"a","\xe4":"a","\xe5":"a","\xc7":"C","\xe7":"c","\xd0":"D","\xf0":"d","\xc8":"E","\xc9":"E","\xca":"E","\xcb":"E","\xe8":"e","\xe9":"e","\xea":"e","\xeb":"e","\xcc":"I","\xcd":"I","\xce":"I","\xcf":"I","\xec":"i","\xed":"i","\xee":"i","\xef":"i","\xd1":"N","\xf1":"n","\xd2":"O","\xd3":"O","\xd4":"O","\xd5":"O","\xd6":"O","\xd8":"O","\xf2":"o","\xf3":"o","\xf4":"o","\xf5":"o","\xf6":"o","\xf8":"o","\xd9":"U","\xda":"U","\xdb":"U","\xdc":"U","\xf9":"u","\xfa":"u","\xfb":"u","\xfc":"u","\xdd":"Y","\xfd":"y","\xff":"y","\xc6":"Ae","\xe6":"ae","\xde":"Th","\xfe":"th","\xdf":"ss"},qt={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","`":"&#96;"},Mt={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'","&#96;":"`"},Pt={"function":!0,object:!0},Kt={0:"x30",1:"x31",2:"x32",3:"x33",4:"x34",5:"x35",6:"x36",7:"x37",8:"x38",9:"x39",A:"x41",B:"x42",C:"x43",D:"x44",E:"x45",F:"x46",a:"x61",b:"x62",c:"x63",d:"x64",e:"x65",f:"x66",n:"x6e",r:"x72",t:"x74",u:"x75",v:"x76",x:"x78"},Vt={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},Yt=Pt[typeof exports]&&exports&&!exports.nodeType&&exports,Gt=Pt[typeof module]&&module&&!module.nodeType&&module,Jt=Yt&&Gt&&"object"==typeof global&&global&&global.Object&&global,Xt=Pt[typeof self]&&self&&self.Object&&self,Zt=Pt[typeof window]&&window&&window.Object&&window,Ht=Gt&&Gt.exports===Yt&&Yt,Qt=Jt||Zt!==(this&&this.window)&&Zt||Xt||this,nr=x();"function"==typeof define&&"object"==typeof define.amd&&define.amd?(Qt._=nr,define('lodash',[],function(){return nr})):Yt&&Gt?Ht?(Gt.exports=nr)._=nr:Yt._=nr:Qt._=nr}).call(this);
!function(t){var e="object"==typeof self&&self.self==self&&self||"object"==typeof global&&global.global==global&&global;if("function"==typeof define&&define.amd)define('backbone',["underscore","jquery","exports"],function(i,n,s){e.Backbone=t(e,s,i,n)});else if("undefined"!=typeof exports){var i,n=require("underscore");try{i=require("jquery")}catch(s){}t(e,exports,n,i)}else e.Backbone=t(e,{},e._,e.jQuery||e.Zepto||e.ender||e.$)}(function(t,e,i,n){var s=t.Backbone,r=[].slice;e.VERSION="1.2.1",e.$=n,e.noConflict=function(){return t.Backbone=s,this},e.emulateHTTP=!1,e.emulateJSON=!1;var a=function(t,e,n){switch(t){case 1:return function(){return i[e](this[n])};case 2:return function(t){return i[e](this[n],t)};case 3:return function(t,s){return i[e](this[n],t,s)};case 4:return function(t,s,r){return i[e](this[n],t,s,r)};default:return function(){var t=r.call(arguments);return t.unshift(this[n]),i[e].apply(i,t)}}},o=function(t,e,n){i.each(e,function(e,s){i[s]&&(t.prototype[s]=a(e,s,n))})},h=e.Events={},u=/\s+/,c=function(t,e,n,s,r){var a,o=0;if(n&&"object"==typeof n){void 0!==s&&"context"in r&&void 0===r.context&&(r.context=s);for(a=i.keys(n);o<a.length;o++)e=t(e,a[o],n[a[o]],r)}else if(n&&u.test(n))for(a=n.split(u);o<a.length;o++)e=t(e,a[o],s,r);else e=t(e,n,s,r);return e};h.on=function(t,e,i){return l(this,t,e,i)};var l=function(t,e,i,n,s){if(t._events=c(d,t._events||{},e,i,{context:n,ctx:t,listening:s}),s){var r=t._listeners||(t._listeners={});r[s.id]=s}return t};h.listenTo=function(t,e,n){if(!t)return this;var s=t._listenId||(t._listenId=i.uniqueId("l")),r=this._listeningTo||(this._listeningTo={}),a=r[s];if(!a){var o=this._listenId||(this._listenId=i.uniqueId("l"));a=r[s]={obj:t,objId:s,id:o,listeningTo:r,count:0}}return l(t,e,n,this,a),this};var d=function(t,e,i,n){if(i){var s=t[e]||(t[e]=[]),r=n.context,a=n.ctx,o=n.listening;o&&o.count++,s.push({callback:i,context:r,ctx:r||a,listening:o})}return t};h.off=function(t,e,i){return this._events?(this._events=c(f,this._events,t,e,{context:i,listeners:this._listeners}),this):this},h.stopListening=function(t,e,n){var s=this._listeningTo;if(!s)return this;for(var r=t?[t._listenId]:i.keys(s),a=0;a<r.length;a++){var o=s[r[a]];if(!o)break;o.obj.off(e,n,this)}return i.isEmpty(s)&&(this._listeningTo=void 0),this};var f=function(t,e,n,s){if(t){var r,a=0,o=s.context,h=s.listeners;if(e||n||o){for(var u=e?[e]:i.keys(t);a<u.length;a++){e=u[a];var c=t[e];if(!c)break;for(var l=[],d=0;d<c.length;d++){var f=c[d];n&&n!==f.callback&&n!==f.callback._callback||o&&o!==f.context?l.push(f):(r=f.listening,r&&0===--r.count&&(delete h[r.id],delete r.listeningTo[r.objId]))}l.length?t[e]=l:delete t[e]}return i.size(t)?t:void 0}for(var g=i.keys(h);a<g.length;a++)r=h[g[a]],delete h[r.id],delete r.listeningTo[r.objId]}};h.once=function(t,e,n){var s=c(g,{},t,e,i.bind(this.off,this));return this.on(s,void 0,n)},h.listenToOnce=function(t,e,n){var s=c(g,{},e,n,i.bind(this.stopListening,this,t));return this.listenTo(t,s)};var g=function(t,e,n,s){if(n){var r=t[e]=i.once(function(){s(e,r),n.apply(this,arguments)});r._callback=n}return t};h.trigger=function(t){if(!this._events)return this;for(var e=Math.max(0,arguments.length-1),i=Array(e),n=0;e>n;n++)i[n]=arguments[n+1];return c(v,this._events,t,void 0,i),this};var v=function(t,e,i,n){if(t){var s=t[e],r=t.all;s&&r&&(r=r.slice()),s&&p(s,n),r&&p(r,[e].concat(n))}return t},p=function(t,e){var i,n=-1,s=t.length,r=e[0],a=e[1],o=e[2];switch(e.length){case 0:for(;++n<s;)(i=t[n]).callback.call(i.ctx);return;case 1:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r);return;case 2:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a);return;case 3:for(;++n<s;)(i=t[n]).callback.call(i.ctx,r,a,o);return;default:for(;++n<s;)(i=t[n]).callback.apply(i.ctx,e);return}};h.bind=h.on,h.unbind=h.off,i.extend(e,h);var m=e.Model=function(t,e){var n=t||{};e||(e={}),this.cid=i.uniqueId(this.cidPrefix),this.attributes={},e.collection&&(this.collection=e.collection),e.parse&&(n=this.parse(n,e)||{}),n=i.defaults({},n,i.result(this,"defaults")),this.set(n,e),this.changed={},this.initialize.apply(this,arguments)};i.extend(m.prototype,h,{changed:null,validationError:null,idAttribute:"id",cidPrefix:"c",initialize:function(){},toJSON:function(){return i.clone(this.attributes)},sync:function(){return e.sync.apply(this,arguments)},get:function(t){return this.attributes[t]},escape:function(t){return i.escape(this.get(t))},has:function(t){return null!=this.get(t)},matches:function(t){return!!i.iteratee(t,this)(this.attributes)},set:function(t,e,n){if(null==t)return this;var s;if("object"==typeof t?(s=t,n=e):(s={})[t]=e,n||(n={}),!this._validate(s,n))return!1;var r=n.unset,a=n.silent,o=[],h=this._changing;this._changing=!0,h||(this._previousAttributes=i.clone(this.attributes),this.changed={});var u=this.attributes,c=this.changed,l=this._previousAttributes;this.idAttribute in s&&(this.id=s[this.idAttribute]);for(var d in s)e=s[d],i.isEqual(u[d],e)||o.push(d),i.isEqual(l[d],e)?delete c[d]:c[d]=e,r?delete u[d]:u[d]=e;if(!a){o.length&&(this._pending=n);for(var f=0;f<o.length;f++)this.trigger("change:"+o[f],this,u[o[f]],n)}if(h)return this;if(!a)for(;this._pending;)n=this._pending,this._pending=!1,this.trigger("change",this,n);return this._pending=!1,this._changing=!1,this},unset:function(t,e){return this.set(t,void 0,i.extend({},e,{unset:!0}))},clear:function(t){var e={};for(var n in this.attributes)e[n]=void 0;return this.set(e,i.extend({},t,{unset:!0}))},hasChanged:function(t){return null==t?!i.isEmpty(this.changed):i.has(this.changed,t)},changedAttributes:function(t){if(!t)return this.hasChanged()?i.clone(this.changed):!1;var e=this._changing?this._previousAttributes:this.attributes,n={};for(var s in t){var r=t[s];i.isEqual(e[s],r)||(n[s]=r)}return i.size(n)?n:!1},previous:function(t){return null!=t&&this._previousAttributes?this._previousAttributes[t]:null},previousAttributes:function(){return i.clone(this._previousAttributes)},fetch:function(t){t=i.extend({parse:!0},t);var e=this,n=t.success;return t.success=function(i){var s=t.parse?e.parse(i,t):i;return e.set(s,t)?(n&&n.call(t.context,e,i,t),void e.trigger("sync",e,i,t)):!1},q(this,t),this.sync("read",this,t)},save:function(t,e,n){var s;null==t||"object"==typeof t?(s=t,n=e):(s={})[t]=e,n=i.extend({validate:!0,parse:!0},n);var r=n.wait;if(s&&!r){if(!this.set(s,n))return!1}else if(!this._validate(s,n))return!1;var a=this,o=n.success,h=this.attributes;n.success=function(t){a.attributes=h;var e=n.parse?a.parse(t,n):t;return r&&(e=i.extend({},s,e)),e&&!a.set(e,n)?!1:(o&&o.call(n.context,a,t,n),void a.trigger("sync",a,t,n))},q(this,n),s&&r&&(this.attributes=i.extend({},h,s));var u=this.isNew()?"create":n.patch?"patch":"update";"patch"!==u||n.attrs||(n.attrs=s);var c=this.sync(u,this,n);return this.attributes=h,c},destroy:function(t){t=t?i.clone(t):{};var e=this,n=t.success,s=t.wait,r=function(){e.stopListening(),e.trigger("destroy",e,e.collection,t)};t.success=function(i){s&&r(),n&&n.call(t.context,e,i,t),e.isNew()||e.trigger("sync",e,i,t)};var a=!1;return this.isNew()?i.defer(t.success):(q(this,t),a=this.sync("delete",this,t)),s||r(),a},url:function(){var t=i.result(this,"urlRoot")||i.result(this.collection,"url")||M();if(this.isNew())return t;var e=this.get(this.idAttribute);return t.replace(/[^\/]$/,"$&/")+encodeURIComponent(e)},parse:function(t){return t},clone:function(){return new this.constructor(this.attributes)},isNew:function(){return!this.has(this.idAttribute)},isValid:function(t){return this._validate({},i.defaults({validate:!0},t))},_validate:function(t,e){if(!e.validate||!this.validate)return!0;t=i.extend({},this.attributes,t);var n=this.validationError=this.validate(t,e)||null;return n?(this.trigger("invalid",this,n,i.extend(e,{validationError:n})),!1):!0}});var _={keys:1,values:1,pairs:1,invert:1,pick:0,omit:0,chain:1,isEmpty:1};o(m,_,"attributes");var y=e.Collection=function(t,e){e||(e={}),e.model&&(this.model=e.model),void 0!==e.comparator&&(this.comparator=e.comparator),this._reset(),this.initialize.apply(this,arguments),t&&this.reset(t,i.extend({silent:!0},e))},b={add:!0,remove:!0,merge:!0},x={add:!0,remove:!1};i.extend(y.prototype,h,{model:m,initialize:function(){},toJSON:function(t){return this.map(function(e){return e.toJSON(t)})},sync:function(){return e.sync.apply(this,arguments)},add:function(t,e){return this.set(t,i.extend({merge:!1},e,x))},remove:function(t,e){e=i.extend({},e);var n=!i.isArray(t);t=n?[t]:i.clone(t);var s=this._removeModels(t,e);return!e.silent&&s&&this.trigger("update",this,e),n?s[0]:s},set:function(t,e){e=i.defaults({},e,b),e.parse&&!this._isModel(t)&&(t=this.parse(t,e));var n=!i.isArray(t);t=n?t?[t]:[]:t.slice();var s,r,a,o,h,u=e.at;null!=u&&(u=+u),0>u&&(u+=this.length+1);for(var c=this.comparator&&null==u&&e.sort!==!1,l=i.isString(this.comparator)?this.comparator:null,d=[],f=[],g={},v=e.add,p=e.merge,m=e.remove,_=!c&&v&&m?[]:!1,y=!1,x=0;x<t.length;x++){if(a=t[x],o=this.get(a))m&&(g[o.cid]=!0),p&&a!==o&&(a=this._isModel(a)?a.attributes:a,e.parse&&(a=o.parse(a,e)),o.set(a,e),c&&!h&&o.hasChanged(l)&&(h=!0)),t[x]=o;else if(v){if(r=t[x]=this._prepareModel(a,e),!r)continue;d.push(r),this._addReference(r,e)}r=o||r,r&&(s=this.modelId(r.attributes),!_||!r.isNew()&&g[s]||(_.push(r),y=y||!this.models[x]||r.cid!==this.models[x].cid),g[s]=!0)}if(m){for(var x=0;x<this.length;x++)g[(r=this.models[x]).cid]||f.push(r);f.length&&this._removeModels(f,e)}if(d.length||y)if(c&&(h=!0),this.length+=d.length,null!=u)for(var x=0;x<d.length;x++)this.models.splice(u+x,0,d[x]);else{_&&(this.models.length=0);for(var w=_||d,x=0;x<w.length;x++)this.models.push(w[x])}if(h&&this.sort({silent:!0}),!e.silent){for(var E=null!=u?i.clone(e):e,x=0;x<d.length;x++)null!=u&&(E.index=u+x),(r=d[x]).trigger("add",r,this,E);(h||y)&&this.trigger("sort",this,e),(d.length||f.length)&&this.trigger("update",this,e)}return n?t[0]:t},reset:function(t,e){e=e?i.clone(e):{};for(var n=0;n<this.models.length;n++)this._removeReference(this.models[n],e);return e.previousModels=this.models,this._reset(),t=this.add(t,i.extend({silent:!0},e)),e.silent||this.trigger("reset",this,e),t},push:function(t,e){return this.add(t,i.extend({at:this.length},e))},pop:function(t){var e=this.at(this.length-1);return this.remove(e,t)},unshift:function(t,e){return this.add(t,i.extend({at:0},e))},shift:function(t){var e=this.at(0);return this.remove(e,t)},slice:function(){return r.apply(this.models,arguments)},get:function(t){if(null==t)return void 0;var e=this.modelId(this._isModel(t)?t.attributes:t);return this._byId[t]||this._byId[e]||this._byId[t.cid]},at:function(t){return 0>t&&(t+=this.length),this.models[t]},where:function(t,e){var n=i.matches(t);return this[e?"find":"filter"](function(t){return n(t.attributes)})},findWhere:function(t){return this.where(t,!0)},sort:function(t){if(!this.comparator)throw new Error("Cannot sort a set without a comparator");return t||(t={}),i.isString(this.comparator)||1===this.comparator.length?this.models=this.sortBy(this.comparator,this):this.models.sort(i.bind(this.comparator,this)),t.silent||this.trigger("sort",this,t),this},pluck:function(t){return i.invoke(this.models,"get",t)},fetch:function(t){t=i.extend({parse:!0},t);var e=t.success,n=this;return t.success=function(i){var s=t.reset?"reset":"set";n[s](i,t),e&&e.call(t.context,n,i,t),n.trigger("sync",n,i,t)},q(this,t),this.sync("read",this,t)},create:function(t,e){e=e?i.clone(e):{};var n=e.wait;if(t=this._prepareModel(t,e),!t)return!1;n||this.add(t,e);var s=this,r=e.success;return e.success=function(t,e,i){n&&s.add(t,i),r&&r.call(i.context,t,e,i)},t.save(null,e),t},parse:function(t){return t},clone:function(){return new this.constructor(this.models,{model:this.model,comparator:this.comparator})},modelId:function(t){return t[this.model.prototype.idAttribute||"id"]},_reset:function(){this.length=0,this.models=[],this._byId={}},_prepareModel:function(t,e){if(this._isModel(t))return t.collection||(t.collection=this),t;e=e?i.clone(e):{},e.collection=this;var n=new this.model(t,e);return n.validationError?(this.trigger("invalid",this,n.validationError,e),!1):n},_removeModels:function(t,e){for(var i=[],n=0;n<t.length;n++){var s=this.get(t[n]);if(s){var r=this.indexOf(s);this.models.splice(r,1),this.length--,e.silent||(e.index=r,s.trigger("remove",s,this,e)),i.push(s),this._removeReference(s,e)}}return i.length?i:!1},_isModel:function(t){return t instanceof m},_addReference:function(t){this._byId[t.cid]=t;var e=this.modelId(t.attributes);null!=e&&(this._byId[e]=t),t.on("all",this._onModelEvent,this)},_removeReference:function(t){delete this._byId[t.cid];var e=this.modelId(t.attributes);null!=e&&delete this._byId[e],this===t.collection&&delete t.collection,t.off("all",this._onModelEvent,this)},_onModelEvent:function(t,e,i,n){if("add"!==t&&"remove"!==t||i===this){if("destroy"===t&&this.remove(e,n),"change"===t){var s=this.modelId(e.previousAttributes()),r=this.modelId(e.attributes);s!==r&&(null!=s&&delete this._byId[s],null!=r&&(this._byId[r]=e))}this.trigger.apply(this,arguments)}}});var w={forEach:3,each:3,map:3,collect:3,reduce:4,foldl:4,inject:4,reduceRight:4,foldr:4,find:3,detect:3,filter:3,select:3,reject:3,every:3,all:3,some:3,any:3,include:2,contains:2,invoke:0,max:3,min:3,toArray:1,size:1,first:3,head:3,take:3,initial:3,rest:3,tail:3,drop:3,last:3,without:0,difference:0,indexOf:3,shuffle:1,lastIndexOf:3,isEmpty:1,chain:1,sample:3,partition:3};o(y,w,"models");var E=["groupBy","countBy","sortBy","indexBy"];i.each(E,function(t){i[t]&&(y.prototype[t]=function(e,n){var s=i.isFunction(e)?e:function(t){return t.get(e)};return i[t](this.models,s,n)})});var k=e.View=function(t){this.cid=i.uniqueId("view"),i.extend(this,i.pick(t,I)),this._ensureElement(),this.initialize.apply(this,arguments)},S=/^(\S+)\s*(.*)$/,I=["model","collection","el","id","attributes","className","tagName","events"];i.extend(k.prototype,h,{tagName:"div",$:function(t){return this.$el.find(t)},initialize:function(){},render:function(){return this},remove:function(){return this._removeElement(),this.stopListening(),this},_removeElement:function(){this.$el.remove()},setElement:function(t){return this.undelegateEvents(),this._setElement(t),this.delegateEvents(),this},_setElement:function(t){this.$el=t instanceof e.$?t:e.$(t),this.el=this.$el[0]},delegateEvents:function(t){if(t||(t=i.result(this,"events")),!t)return this;this.undelegateEvents();for(var e in t){var n=t[e];if(i.isFunction(n)||(n=this[n]),n){var s=e.match(S);this.delegate(s[1],s[2],i.bind(n,this))}}return this},delegate:function(t,e,i){return this.$el.on(t+".delegateEvents"+this.cid,e,i),this},undelegateEvents:function(){return this.$el&&this.$el.off(".delegateEvents"+this.cid),this},undelegate:function(t,e,i){return this.$el.off(t+".delegateEvents"+this.cid,e,i),this},_createElement:function(t){return document.createElement(t)},_ensureElement:function(){if(this.el)this.setElement(i.result(this,"el"));else{var t=i.extend({},i.result(this,"attributes"));this.id&&(t.id=i.result(this,"id")),this.className&&(t["class"]=i.result(this,"className")),this.setElement(this._createElement(i.result(this,"tagName"))),this._setAttributes(t)}},_setAttributes:function(t){this.$el.attr(t)}}),e.sync=function(t,n,s){var r=T[t];i.defaults(s||(s={}),{emulateHTTP:e.emulateHTTP,emulateJSON:e.emulateJSON});var a={type:r,dataType:"json"};if(s.url||(a.url=i.result(n,"url")||M()),null!=s.data||!n||"create"!==t&&"update"!==t&&"patch"!==t||(a.contentType="application/json",a.data=JSON.stringify(s.attrs||n.toJSON(s))),s.emulateJSON&&(a.contentType="application/x-www-form-urlencoded",a.data=a.data?{model:a.data}:{}),s.emulateHTTP&&("PUT"===r||"DELETE"===r||"PATCH"===r)){a.type="POST",s.emulateJSON&&(a.data._method=r);var o=s.beforeSend;s.beforeSend=function(t){return t.setRequestHeader("X-HTTP-Method-Override",r),o?o.apply(this,arguments):void 0}}"GET"===a.type||s.emulateJSON||(a.processData=!1);var h=s.error;s.error=function(t,e,i){s.textStatus=e,s.errorThrown=i,h&&h.call(s.context,t,e,i)};var u=s.xhr=e.ajax(i.extend(a,s));return n.trigger("request",n,u,s),u};var T={create:"POST",update:"PUT",patch:"PATCH","delete":"DELETE",read:"GET"};e.ajax=function(){return e.$.ajax.apply(e.$,arguments)};var P=e.Router=function(t){t||(t={}),t.routes&&(this.routes=t.routes),this._bindRoutes(),this.initialize.apply(this,arguments)},H=/\((.*?)\)/g,$=/(\(\?)?:\w+/g,A=/\*\w+/g,C=/[\-{}\[\]+?.,\\\^$|#\s]/g;i.extend(P.prototype,h,{initialize:function(){},route:function(t,n,s){i.isRegExp(t)||(t=this._routeToRegExp(t)),i.isFunction(n)&&(s=n,n=""),s||(s=this[n]);var r=this;return e.history.route(t,function(i){var a=r._extractParameters(t,i);r.execute(s,a,n)!==!1&&(r.trigger.apply(r,["route:"+n].concat(a)),r.trigger("route",n,a),e.history.trigger("route",r,n,a))}),this},execute:function(t,e){t&&t.apply(this,e)},navigate:function(t,i){return e.history.navigate(t,i),this},_bindRoutes:function(){if(this.routes){this.routes=i.result(this,"routes");for(var t,e=i.keys(this.routes);null!=(t=e.pop());)this.route(t,this.routes[t])}},_routeToRegExp:function(t){return t=t.replace(C,"\\$&").replace(H,"(?:$1)?").replace($,function(t,e){return e?t:"([^/?]+)"}).replace(A,"([^?]*?)"),new RegExp("^"+t+"(?:\\?([\\s\\S]*))?$")},_extractParameters:function(t,e){var n=t.exec(e).slice(1);return i.map(n,function(t,e){return e===n.length-1?t||null:t?decodeURIComponent(t):null})}});var N=e.History=function(){this.handlers=[],i.bindAll(this,"checkUrl"),"undefined"!=typeof window&&(this.location=window.location,this.history=window.history)},R=/^[#\/]|\s+$/g,j=/^\/+|\/+$/g,O=/#.*$/;N.started=!1,i.extend(N.prototype,h,{interval:50,atRoot:function(){var t=this.location.pathname.replace(/[^\/]$/,"$&/");return t===this.root&&!this.getSearch()},matchRoot:function(){var t=this.decodeFragment(this.location.pathname),e=t.slice(0,this.root.length-1)+"/";return e===this.root},decodeFragment:function(t){return decodeURI(t.replace(/%25/g,"%2525"))},getSearch:function(){var t=this.location.href.replace(/#.*/,"").match(/\?.+/);return t?t[0]:""},getHash:function(t){var e=(t||this).location.href.match(/#(.*)$/);return e?e[1]:""},getPath:function(){var t=this.decodeFragment(this.location.pathname+this.getSearch()).slice(this.root.length-1);return"/"===t.charAt(0)?t.slice(1):t},getFragment:function(t){return null==t&&(t=this._usePushState||!this._wantsHashChange?this.getPath():this.getHash()),t.replace(R,"")},start:function(t){if(N.started)throw new Error("Backbone.history has already been started");if(N.started=!0,this.options=i.extend({root:"/"},this.options,t),this.root=this.options.root,this._wantsHashChange=this.options.hashChange!==!1,this._hasHashChange="onhashchange"in window,this._useHashChange=this._wantsHashChange&&this._hasHashChange,this._wantsPushState=!!this.options.pushState,this._hasPushState=!(!this.history||!this.history.pushState),this._usePushState=this._wantsPushState&&this._hasPushState,this.fragment=this.getFragment(),this.root=("/"+this.root+"/").replace(j,"/"),this._wantsHashChange&&this._wantsPushState){if(!this._hasPushState&&!this.atRoot()){var e=this.root.slice(0,-1)||"/";return this.location.replace(e+"#"+this.getPath()),!0}this._hasPushState&&this.atRoot()&&this.navigate(this.getHash(),{replace:!0})}if(!this._hasHashChange&&this._wantsHashChange&&!this._usePushState){this.iframe=document.createElement("iframe"),this.iframe.src="javascript:0",this.iframe.style.display="none",this.iframe.tabIndex=-1;var n=document.body,s=n.insertBefore(this.iframe,n.firstChild).contentWindow;s.document.open(),s.document.close(),s.location.hash="#"+this.fragment}var r=window.addEventListener||function(t,e){return attachEvent("on"+t,e)};return this._usePushState?r("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe?r("hashchange",this.checkUrl,!1):this._wantsHashChange&&(this._checkUrlInterval=setInterval(this.checkUrl,this.interval)),this.options.silent?void 0:this.loadUrl()},stop:function(){var t=window.removeEventListener||function(t,e){return detachEvent("on"+t,e)};this._usePushState?t("popstate",this.checkUrl,!1):this._useHashChange&&!this.iframe&&t("hashchange",this.checkUrl,!1),this.iframe&&(document.body.removeChild(this.iframe),this.iframe=null),this._checkUrlInterval&&clearInterval(this._checkUrlInterval),N.started=!1},route:function(t,e){this.handlers.unshift({route:t,callback:e})},checkUrl:function(){var t=this.getFragment();return t===this.fragment&&this.iframe&&(t=this.getHash(this.iframe.contentWindow)),t===this.fragment?!1:(this.iframe&&this.navigate(t),void this.loadUrl())},loadUrl:function(t){return this.matchRoot()?(t=this.fragment=this.getFragment(t),i.any(this.handlers,function(e){return e.route.test(t)?(e.callback(t),!0):void 0})):!1},navigate:function(t,e){if(!N.started)return!1;e&&e!==!0||(e={trigger:!!e}),t=this.getFragment(t||"");var i=this.root;(""===t||"?"===t.charAt(0))&&(i=i.slice(0,-1)||"/");var n=i+t;if(t=this.decodeFragment(t.replace(O,"")),this.fragment!==t){if(this.fragment=t,this._usePushState)this.history[e.replace?"replaceState":"pushState"]({},document.title,n);else{if(!this._wantsHashChange)return this.location.assign(n);if(this._updateHash(this.location,t,e.replace),this.iframe&&t!==this.getHash(this.iframe.contentWindow)){var s=this.iframe.contentWindow;e.replace||(s.document.open(),s.document.close()),this._updateHash(s.location,t,e.replace)}}return e.trigger?this.loadUrl(t):void 0}},_updateHash:function(t,e,i){if(i){var n=t.href.replace(/(javascript:|#).*$/,"");t.replace(n+"#"+e)}else t.hash="#"+e}}),e.history=new N;var U=function(t,e){var n,s=this;n=t&&i.has(t,"constructor")?t.constructor:function(){return s.apply(this,arguments)},i.extend(n,s,e);var r=function(){this.constructor=n};return r.prototype=s.prototype,n.prototype=new r,t&&i.extend(n.prototype,t),n.__super__=s.prototype,n};m.extend=y.extend=P.extend=k.extend=N.extend=U;var M=function(){throw new Error('A "url" property or function must be specified')},q=function(t,e){var i=e.error;e.error=function(n){i&&i.call(e.context,t,n,e),t.trigger("error",t,n,e)}};return e});
!function(e){function t(t){return"function"==typeof l[t]&&(l[t]=l[t](e,f,m)),l[t]}function n(t,n,o){l[t]=o?n(e,f,m):n}function o(e,t){var n=!1,o=e.charAt(0).toUpperCase()+e.slice(1),r=s.length,i=t.style;if("string"==typeof i[e])n=!0;else for(;r--;)if("string"==typeof i[s[r]+o]){n=!0;break}return n}function r(e){if(e)for(;e.lastChild;)e.removeChild(e.lastChild);return e}function i(e,t){var n=typeof e[t];return"object"==n?!!e[t]:!a[n]}function c(){var e,n={};for(e in l)try{n[e]=t(e)}catch(o){n[e]="error",n[e].ERROR_MSG=o.toString()}return n}var a={"boolean":1,number:1,string:1,undefined:1},s=["Webkit","Moz","O","ms","Khtml"],f=i(e,"document")&&e.document,m=f&&i(f,"createElement")&&f.createElement("DiV"),u="object"==typeof exports&&exports,d="object"==typeof module&&module,l={};t.all=c,t.add=n,t.clearElement=r,t.cssprop=o,t.isHostType=i,t._tests=l,t.add("dom",function(e,t,n){return t&&n&&i(e,"location")&&i(t,"documentElement")&&i(t,"getElementById")&&i(t,"getElementsByName")&&i(t,"getElementsByTagName")&&i(t,"createComment")&&i(t,"createElement")&&i(t,"createTextNode")&&i(n,"appendChild")&&i(n,"insertBefore")&&i(n,"removeChild")&&i(n,"getAttribute")&&i(n,"setAttribute")&&i(n,"removeAttribute")&&i(n,"style")&&"string"==typeof n.style.cssText});try{document.execCommand("BackgroundImageCache",!1,!0)}catch(p){}"function"==typeof define&&"object"==typeof define.amd&&define.amd?define("has",[],function(){return t}):u?d&&d.exports==u?(d.exports=t).has=t:u.has=t:e.has=t}(this);
!function(e,t){"function"==typeof define&&define.amd?define('postal',["lodash"],function(n){return t(n,e)}):"object"==typeof module&&module.exports?module.exports=t(require("lodash"),this):e.postal=t(e._,e)}(this,function(e,t,n){function i(e,t){return function(){if(console.warn||console.log){var n="Warning, the "+e+" method has been deprecated. Please use "+t+" instead.";console.warn?console.warn(n):console.log(n)}return b.prototype[t].apply(this,arguments)}}function r(){for(;E.length;)l.unsubscribe(E.shift())}function c(e,t,n){return function(i,r,c){i===e&&c.splice(r,1),0===c.length&&delete n[t]}}function s(e,t,n,i,r){var c=r&&r.headers||{};return function(r){var s;f.resolver.compare(r.topic,e,c)&&(c.resolverNoCache||(s=t[n]=t[n]||[],s.push(r)),r.cacheKeys.push(n),i&&i(r))}}function o(e,t){return{channel:f.SYSTEM_CHANNEL,topic:"subscription."+e,data:{event:"subscription."+e,channel:t.channel,topic:t.topic}}}function a(t,n){return"function"==typeof t?t:t?function(i){var r=0,c=0;return e.each(t,function(e,s){r+=1,("topic"===s&&n.compare(i.topic,t.topic,{resolverNoCache:!0})||"context"===s&&t.context===i._context||i[s]===t[s])&&(c+=1)}),r===c}:function(){return!0}}var u=t.postal,h={DEFAULT_CHANNEL:"/",SYSTEM_CHANNEL:"postal",enableSystemMessages:!0,cacheKeyDelimiter:"|",autoCompactResolver:!1},l={configuration:e.extend({},h)},f=l.configuration,p=function(e,t){this.bus=t,this.channel=e||f.DEFAULT_CHANNEL};p.prototype.subscribe=function(){return this.bus.subscribe({channel:this.channel,topic:1===arguments.length?arguments[0].topic:arguments[0],callback:1===arguments.length?arguments[0].callback:arguments[1]})},p.prototype.publish=function(){var e,t={};"string"==typeof arguments[0]?(t.topic=arguments[0],t.data=arguments[1],e=arguments[2]):(t=arguments[0],e=arguments[1]),t.channel=this.channel,this.bus.publish(t,e)};var b=function(e,t,i){if(3!==arguments.length)throw new Error("You must provide a channel, topic and callback when creating a SubscriptionDefinition instance.");if(0===t.length)throw new Error("Topics cannot be empty");this.channel=e,this.topic=t,this.callback=i,this.pipeline=[],this.cacheKeys=[],this._context=n},d=function(){var t;return function(n){var i=!1;return"string"==typeof n?(i=n===t,t=n):(i=e.isEqual(n,t),t=e.extend({},n)),!i}},v=function(){var t=[];return function(n){var i=!e.any(t,function(t){return e.isEqual(n,t)});return i&&t.push(n),i}};b.prototype={"catch":function(e){var t=this.callback,n=function(){try{t.apply(this,arguments)}catch(n){e(n,arguments[0])}};return this.callback=n,this},defer:function(){return this.delay(0)},disposeAfter:function(t){if("number"!=typeof t||0>=t)throw new Error("The value provided to disposeAfter (maxCalls) must be a number greater than zero.");var n=this,i=e.after(t,e.bind(function(){n.unsubscribe()}));return n.pipeline.push(function(e,t,n){n(e,t),i()}),n},distinct:function(){return this.constraint(new v)},distinctUntilChanged:function(){return this.constraint(new d)},invokeSubscriber:function(e,t){if(!this.inactive){var n=this,i=n.pipeline,r=i.length,c=n._context,s=-1,o=!1;if(r){i=i.concat([n.callback]);var a=function u(e,t){s+=1,r>s?i[s].call(c,e,t,u):(n.callback.call(c,e,t),o=!0)};a(e,t,0)}else n.callback.call(c,e,t),o=!0;return o}},logError:function(){if(console){var e;e=console.warn?console.warn:console.log,this["catch"](e)}return this},once:function(){return this.disposeAfter(1)},subscribe:function(e){return this.callback=e,this},unsubscribe:function(){this.inactive||l.unsubscribe(this)},constraint:function(e){if("function"!=typeof e)throw new Error("Predicate constraint must be a function");return this.pipeline.push(function(t,n,i){e.call(this,t,n)&&i(t,n)}),this},constraints:function(t){var n=this;return e.each(t,function(e){n.constraint(e)}),n},context:function(e){return this._context=e,this},debounce:function(t,n){if("number"!=typeof t)throw new Error("Milliseconds must be a number");return this.pipeline.push(e.debounce(function(e,t,n){n(e,t)},t,!!n)),this},delay:function(e){if("number"!=typeof e)throw new Error("Milliseconds must be a number");var t=this;return t.pipeline.push(function(t,n,i){setTimeout(function(){i(t,n)},e)}),this},throttle:function(t){if("number"!=typeof t)throw new Error("Milliseconds must be a number");var n=function(e,t,n){n(e,t)};return this.pipeline.push(e.throttle(n,t)),this}};for(var m=["withConstraint","withConstraints","withContext","withDebounce","withDelay","withThrottle"],g=["constraint","constraints","context","debounce","delay","throttle"],y=0;6>y;y++){var w=m[y];b.prototype[w]=i(w,g[y])}var _=(f.resolver={cache:{},regex:{},enableCache:!0,compare:function(t,n,i){var r,c,s,o=n+f.cacheKeyDelimiter+t,a=this.cache[o],u=i||{},h=this.enableCache&&!u.resolverNoCache;return a===!0?a:-1===t.indexOf("#")&&-1===t.indexOf("*")?(a=n===t,h&&(this.cache[o]=a),a):((c=this.regex[t])||(r="^"+e.map(t.split("."),function(e){var t="";return s&&(t="#"!==s?"\\.\\b":"\\b"),t+="#"===e?"[\\s\\S]*":"*"===e?"[^.]+":e,s=e,t}).join("")+"$",c=this.regex[t]=new RegExp(r)),a=c.test(n),h&&(this.cache[o]=a),a)},reset:function(){this.cache={},this.regex={}},purge:function(t){var n=this,i=f.cacheKeyDelimiter,r=function(e,r){var c=r.split(i),s=c[0],o=c[1];"undefined"!=typeof t.topic&&t.topic!==s||"undefined"!=typeof t.binding&&t.binding!==o||delete n.cache[r]},c=function(e,t){var r=t.split(i);0===l.getSubscribersFor({topic:r[0]}).length&&delete n.cache[t]};if("undefined"==typeof t)this.reset();else{var s=t.compact===!0?c:r;e.each(this.cache,s)}}},0),E=[],x=0,C=e.bind(o,this,"created"),k=e.bind(o,this,"removed");if(e.extend(l,{cache:{},subscriptions:{},wireTaps:[],ChannelDefinition:p,SubscriptionDefinition:b,channel:function(e){return new p(e,this)},addWireTap:function(e){var t=this;return t.wireTaps.push(e),function(){var n=t.wireTaps.indexOf(e);-1!==n&&t.wireTaps.splice(n,1)}},noConflict:function(){if("undefined"==typeof window||"undefined"!=typeof window&&"function"==typeof define&&define.amd)throw new Error("noConflict can only be used in browser clients which aren't using AMD modules");return t.postal=u,this},getSubscribersFor:function(t){var n=[],i=this;return e.each(i.subscriptions,function(i){e.each(i,function(i){n=n.concat(e.filter(i,a(t,f.resolver)))})}),n},publish:function(t,n){++_;var i=t.channel=t.channel||f.DEFAULT_CHANNEL,c=t.topic;t.timeStamp=new Date,this.wireTaps.length&&e.each(this.wireTaps,function(e){e(t.data,t,_)});var o=i+f.cacheKeyDelimiter+c,a=this.cache[o],u=0,h=0;if(a)e.each(a,function(e){e.invokeSubscriber(t.data,t)?h++:u++});else{var l=s(c,this.cache,o,function(e){e.invokeSubscriber(t.data,t)?h++:u++},t);e.each(this.subscriptions[i],function(t){e.each(t,l)})}0===--_&&r(),n&&n({activated:h,skipped:u})},reset:function(){this.unsubscribeFor(),f.resolver.reset(),this.subscriptions={},this.cache={}},subscribe:function(t){var n,i=this.subscriptions,r=new b(t.channel||f.DEFAULT_CHANNEL,t.topic,t.callback),c=i[r.channel],o=r.channel.length;return c||(c=i[r.channel]={}),n=i[r.channel][r.topic],n||(n=i[r.channel][r.topic]=[]),n.push(r),e.each(e.keys(this.cache),function(e){e.substr(0,o)===r.channel&&s(e.split(f.cacheKeyDelimiter)[1],this.cache,e)(r)},this),f.enableSystemMessages&&this.publish(C(r)),r},unsubscribe:function(){for(var t,n,i,r,s=arguments.length,o=0;s>o;o++){if(t=arguments[o],t.inactive=!0,_)return void E.push(t);if(n=this.subscriptions[t.channel],i=n&&n[t.topic]){var a=i.length;for(r=0;a>r;){if(i[r]===t){i.splice(r,1);break}r+=1}if(0===i.length&&(delete n[t.topic],e.keys(n).length||delete this.subscriptions[t.channel]),t.cacheKeys&&t.cacheKeys.length)for(var u;u=t.cacheKeys.pop();)e.each(this.cache[u],c(t,u,this.cache));if("function"==typeof f.resolver.purge){var h=f.autoCompactResolver===!0?0:"number"==typeof f.autoCompactResolver?f.autoCompactResolver-1:!1;h>=0&&x===h?(f.resolver.purge({compact:!0}),x=0):h>=0&&h>x&&(x+=1)}}f.enableSystemMessages&&this.publish(k(t))}},unsubscribeFor:function(e){var t=[];this.subscriptions&&(t=this.getSubscribersFor(e),this.unsubscribe.apply(this,t))}}),t&&Object.prototype.hasOwnProperty.call(t,"__postalReady__")&&e.isArray(t.__postalReady__))for(;t.__postalReady__.length;)t.__postalReady__.shift().onReady(l);return l});
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define('react',[],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.React=e()}}(function(){return function e(t,n,r){function o(i,s){if(!n[i]){if(!t[i]){var u="function"==typeof require&&require;if(!s&&u)return u(i,!0);if(a)return a(i,!0);var l=new Error("Cannot find module '"+i+"'");throw l.code="MODULE_NOT_FOUND",l}var c=n[i]={exports:{}};t[i][0].call(c.exports,function(e){var n=t[i][1][e];return o(n?n:e)},c,c.exports,e,t,n,r)}return n[i].exports}for(var a="function"==typeof require&&require,i=0;i<r.length;i++)o(r[i]);return o}({1:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactWithAddons
 */
var n=e(25),r=e(31),o=e(42),a=e(34),i=e(69),s=e(98),u=e(100),l=e(127),c=e(122),p=e(170);r.addons={CSSTransitionGroup:a,LinkedStateMixin:n,PureRenderMixin:o,TransitionGroup:s,batchedUpdates:u.batchedUpdates,classSet:l,cloneWithProps:c,createFragment:i.create,update:p},r.addons.Perf=e(61),r.addons.TestUtils=e(95),t.exports=r},{100:100,122:122,127:127,170:170,25:25,31:31,34:34,42:42,61:61,69:69,95:95,98:98}],2:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusMixin
 * @typechecks static-only
 */
var n=e(134),r={componentDidMount:function(){this.props.autoFocus&&n(this.getDOMNode())}};t.exports=r},{134:134}],3:[function(e,t){/**
 * Copyright 2013-2015 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */
function n(){var e=window.opera;return"object"==typeof e&&"function"==typeof e.version&&parseInt(e.version(),10)<=12}function r(e){return(e.ctrlKey||e.altKey||e.metaKey)&&!(e.ctrlKey&&e.altKey)}function o(e){switch(e){case T.topCompositionStart:return R.compositionStart;case T.topCompositionEnd:return R.compositionEnd;case T.topCompositionUpdate:return R.compositionUpdate}}function a(e,t){return e===T.topKeyDown&&t.keyCode===b}function i(e,t){switch(e){case T.topKeyUp:return-1!==C.indexOf(t.keyCode);case T.topKeyDown:return t.keyCode!==b;case T.topKeyPress:case T.topMouseDown:case T.topBlur:return!0;default:return!1}}function s(e){var t=e.detail;return"object"==typeof t&&"data"in t?t.data:null}function u(e,t,n,r){var u,l;if(E?u=o(e):N?i(e,r)&&(u=R.compositionEnd):a(e,r)&&(u=R.compositionStart),!u)return null;x&&(N||u!==R.compositionStart?u===R.compositionEnd&&N&&(l=N.getData()):N=m.getPooled(t));var c=v.getPooled(u,n,r);if(l)c.data=l;else{var p=s(r);null!==p&&(c.data=p)}return f.accumulateTwoPhaseDispatches(c),c}function l(e,t){switch(e){case T.topCompositionEnd:return s(t);case T.topKeyPress:var n=t.which;return n!==D?null:(I=!0,M);case T.topTextInput:var r=t.data;return r===M&&I?null:r;default:return null}}function c(e,t){if(N){if(e===T.topCompositionEnd||i(e,t)){var n=N.getData();return m.release(N),N=null,n}return null}switch(e){case T.topPaste:return null;case T.topKeyPress:return t.which&&!r(t)?String.fromCharCode(t.which):null;case T.topCompositionEnd:return x?null:t.data;default:return null}}function p(e,t,n,r){var o;if(o=w?l(e,r):c(e,r),!o)return null;var a=y.getPooled(R.beforeInput,n,r);return a.data=o,f.accumulateTwoPhaseDispatches(a),a}var d=e(16),f=e(21),h=e(22),m=e(23),v=e(106),y=e(110),g=e(157),C=[9,13,27,32],b=229,E=h.canUseDOM&&"CompositionEvent"in window,_=null;h.canUseDOM&&"documentMode"in document&&(_=document.documentMode);var w=h.canUseDOM&&"TextEvent"in window&&!_&&!n(),x=h.canUseDOM&&(!E||_&&_>8&&11>=_),D=32,M=String.fromCharCode(D),T=d.topLevelTypes,R={beforeInput:{phasedRegistrationNames:{bubbled:g({onBeforeInput:null}),captured:g({onBeforeInputCapture:null})},dependencies:[T.topCompositionEnd,T.topKeyPress,T.topTextInput,T.topPaste]},compositionEnd:{phasedRegistrationNames:{bubbled:g({onCompositionEnd:null}),captured:g({onCompositionEndCapture:null})},dependencies:[T.topBlur,T.topCompositionEnd,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionStart:{phasedRegistrationNames:{bubbled:g({onCompositionStart:null}),captured:g({onCompositionStartCapture:null})},dependencies:[T.topBlur,T.topCompositionStart,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]},compositionUpdate:{phasedRegistrationNames:{bubbled:g({onCompositionUpdate:null}),captured:g({onCompositionUpdateCapture:null})},dependencies:[T.topBlur,T.topCompositionUpdate,T.topKeyDown,T.topKeyPress,T.topKeyUp,T.topMouseDown]}},I=!1,N=null,P={eventTypes:R,extractEvents:function(e,t,n,r){return[u(e,t,n,r),p(e,t,n,r)]}};t.exports=P},{106:106,110:110,157:157,16:16,21:21,22:22,23:23}],4:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSCore
 * @typechecks
 */
var n=e(150),r={addClass:function(e,t){return n(!/\s/.test(t),'CSSCore.addClass takes only a single class name. "%s" contains multiple classes.',t),t&&(e.classList?e.classList.add(t):r.hasClass(e,t)||(e.className=e.className+" "+t)),e},removeClass:function(e,t){return n(!/\s/.test(t),'CSSCore.removeClass takes only a single class name. "%s" contains multiple classes.',t),t&&(e.classList?e.classList.remove(t):r.hasClass(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,""))),e},conditionClass:function(e,t,n){return(n?r.addClass:r.removeClass)(e,t)},hasClass:function(e,t){return n(!/\s/.test(t),"CSS.hasClass takes only a single class name."),e.classList?!!t&&e.classList.contains(t):(" "+e.className+" ").indexOf(" "+t+" ")>-1}};t.exports=r},{150:150}],5:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */
function n(e,t){return e+t.charAt(0).toUpperCase()+t.substring(1)}var r={boxFlex:!0,boxFlexGroup:!0,columnCount:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,strokeDashoffset:!0,strokeOpacity:!0,strokeWidth:!0},o=["Webkit","ms","Moz","O"];Object.keys(r).forEach(function(e){o.forEach(function(t){r[n(t,e)]=r[e]})});var a={background:{backgroundImage:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundColor:!0},border:{borderWidth:!0,borderStyle:!0,borderColor:!0},borderBottom:{borderBottomWidth:!0,borderBottomStyle:!0,borderBottomColor:!0},borderLeft:{borderLeftWidth:!0,borderLeftStyle:!0,borderLeftColor:!0},borderRight:{borderRightWidth:!0,borderRightStyle:!0,borderRightColor:!0},borderTop:{borderTopWidth:!0,borderTopStyle:!0,borderTopColor:!0},font:{fontStyle:!0,fontVariant:!0,fontWeight:!0,fontSize:!0,lineHeight:!0,fontFamily:!0}},i={isUnitlessNumber:r,shorthandPropertyExpansions:a};t.exports=i},{}],6:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */
var n=e(5),r=e(22),o=e(121),a=e(128),i=e(148),s=e(159),u=e(171),l=s(function(e){return i(e)}),c="cssFloat";r.canUseDOM&&void 0===document.documentElement.style.cssFloat&&(c="styleFloat");var p=/^(?:webkit|moz|o)[A-Z]/,d=/;\s*$/,f={},h={},m=function(e){f.hasOwnProperty(e)&&f[e]||(f[e]=!0,u(!1,"Unsupported style property %s. Did you mean %s?",e,o(e)))},v=function(e){f.hasOwnProperty(e)&&f[e]||(f[e]=!0,u(!1,"Unsupported vendor-prefixed style property %s. Did you mean %s?",e,e.charAt(0).toUpperCase()+e.slice(1)))},y=function(e,t){h.hasOwnProperty(t)&&h[t]||(h[t]=!0,u(!1,'Style property values shouldn\'t contain a semicolon. Try "%s: %s" instead.',e,t.replace(d,"")))},g=function(e,t){e.indexOf("-")>-1?m(e):p.test(e)?v(e):d.test(t)&&y(e,t)},C={createMarkupForStyles:function(e){var t="";for(var n in e)if(e.hasOwnProperty(n)){var r=e[n];g(n,r),null!=r&&(t+=l(n)+":",t+=a(n,r)+";")}return t||null},setValueForStyles:function(e,t){var r=e.style;for(var o in t)if(t.hasOwnProperty(o)){g(o,t[o]);var i=a(o,t[o]);if("float"===o&&(o=c),i)r[o]=i;else{var s=n.shorthandPropertyExpansions[o];if(s)for(var u in s)r[u]="";else r[o]=""}}}};t.exports=C},{121:121,128:128,148:148,159:159,171:171,22:22,5:5}],7:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */
function n(){this._callbacks=null,this._contexts=null}var r=e(30),o=e(29),a=e(150);o(n.prototype,{enqueue:function(e,t){this._callbacks=this._callbacks||[],this._contexts=this._contexts||[],this._callbacks.push(e),this._contexts.push(t)},notifyAll:function(){var e=this._callbacks,t=this._contexts;if(e){a(e.length===t.length,"Mismatched list of contexts in callback queue"),this._callbacks=null,this._contexts=null;for(var n=0,r=e.length;r>n;n++)e[n].call(t[n]);e.length=0,t.length=0}},reset:function(){this._callbacks=null,this._contexts=null},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{150:150,29:29,30:30}],8:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */
function n(e){return"SELECT"===e.nodeName||"INPUT"===e.nodeName&&"file"===e.type}function r(e){var t=_.getPooled(T.change,I,e);C.accumulateTwoPhaseDispatches(t),E.batchedUpdates(o,t)}function o(e){g.enqueueEvents(e),g.processEventQueue()}function a(e,t){R=e,I=t,R.attachEvent("onchange",r)}function i(){R&&(R.detachEvent("onchange",r),R=null,I=null)}function s(e,t,n){return e===M.topChange?n:void 0}function u(e,t,n){e===M.topFocus?(i(),a(t,n)):e===M.topBlur&&i()}function l(e,t){R=e,I=t,N=e.value,P=Object.getOwnPropertyDescriptor(e.constructor.prototype,"value"),Object.defineProperty(R,"value",k),R.attachEvent("onpropertychange",p)}function c(){R&&(delete R.value,R.detachEvent("onpropertychange",p),R=null,I=null,N=null,P=null)}function p(e){if("value"===e.propertyName){var t=e.srcElement.value;t!==N&&(N=t,r(e))}}function d(e,t,n){return e===M.topInput?n:void 0}function f(e,t,n){e===M.topFocus?(c(),l(t,n)):e===M.topBlur&&c()}function h(e){return e!==M.topSelectionChange&&e!==M.topKeyUp&&e!==M.topKeyDown||!R||R.value===N?void 0:(N=R.value,I)}function m(e){return"INPUT"===e.nodeName&&("checkbox"===e.type||"radio"===e.type)}function v(e,t,n){return e===M.topClick?n:void 0}var y=e(16),g=e(18),C=e(21),b=e(22),E=e(100),_=e(108),w=e(151),x=e(153),D=e(157),M=y.topLevelTypes,T={change:{phasedRegistrationNames:{bubbled:D({onChange:null}),captured:D({onChangeCapture:null})},dependencies:[M.topBlur,M.topChange,M.topClick,M.topFocus,M.topInput,M.topKeyDown,M.topKeyUp,M.topSelectionChange]}},R=null,I=null,N=null,P=null,O=!1;b.canUseDOM&&(O=w("change")&&(!("documentMode"in document)||document.documentMode>8));var S=!1;b.canUseDOM&&(S=w("input")&&(!("documentMode"in document)||document.documentMode>9));var k={get:function(){return P.get.call(this)},set:function(e){N=""+e,P.set.call(this,e)}},A={eventTypes:T,extractEvents:function(e,t,r,o){var a,i;if(n(t)?O?a=s:i=u:x(t)?S?a=d:(a=h,i=f):m(t)&&(a=v),a){var l=a(e,t,r);if(l){var c=_.getPooled(T.change,l,o);return C.accumulateTwoPhaseDispatches(c),c}}i&&i(e,t,r)}};t.exports=A},{100:100,108:108,151:151,153:153,157:157,16:16,18:18,21:21,22:22}],9:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ClientReactRootIndex
 * @typechecks
 */
var n=0,r={createReactRootIndex:function(){return n++}};t.exports=r},{}],10:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */
function n(e,t,n){e.insertBefore(t,e.childNodes[n]||null)}var r=e(13),o=e(79),a=e(165),i=e(150),s={dangerouslyReplaceNodeWithMarkup:r.dangerouslyReplaceNodeWithMarkup,updateTextContent:a,processUpdates:function(e,t){for(var s,u=null,l=null,c=0;c<e.length;c++)if(s=e[c],s.type===o.MOVE_EXISTING||s.type===o.REMOVE_NODE){var p=s.fromIndex,d=s.parentNode.childNodes[p],f=s.parentID;i(d,"processUpdates(): Unable to find child %s of element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",p,f),u=u||{},u[f]=u[f]||[],u[f][p]=d,l=l||[],l.push(d)}var h=r.dangerouslyRenderMarkup(t);if(l)for(var m=0;m<l.length;m++)l[m].parentNode.removeChild(l[m]);for(var v=0;v<e.length;v++)switch(s=e[v],s.type){case o.INSERT_MARKUP:n(s.parentNode,h[s.markupIndex],s.toIndex);break;case o.MOVE_EXISTING:n(s.parentNode,u[s.parentID][s.fromIndex],s.toIndex);break;case o.TEXT_CONTENT:a(s.parentNode,s.textContent);break;case o.REMOVE_NODE:}}};t.exports=s},{13:13,150:150,165:165,79:79}],11:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 * @typechecks static-only
 */
function n(e,t){return(e&t)===t}var r=e(150),o={MUST_USE_ATTRIBUTE:1,MUST_USE_PROPERTY:2,HAS_SIDE_EFFECTS:4,HAS_BOOLEAN_VALUE:8,HAS_NUMERIC_VALUE:16,HAS_POSITIVE_NUMERIC_VALUE:48,HAS_OVERLOADED_BOOLEAN_VALUE:64,injectDOMPropertyConfig:function(e){var t=e.Properties||{},a=e.DOMAttributeNames||{},s=e.DOMPropertyNames||{},u=e.DOMMutationMethods||{};e.isCustomAttribute&&i._isCustomAttributeFunctions.push(e.isCustomAttribute);for(var l in t){r(!i.isStandardName.hasOwnProperty(l),"injectDOMPropertyConfig(...): You're trying to inject DOM property '%s' which has already been injected. You may be accidentally injecting the same DOM property config twice, or you may be injecting two configs that have conflicting property names.",l),i.isStandardName[l]=!0;var c=l.toLowerCase();if(i.getPossibleStandardName[c]=l,a.hasOwnProperty(l)){var p=a[l];i.getPossibleStandardName[p]=l,i.getAttributeName[l]=p}else i.getAttributeName[l]=c;i.getPropertyName[l]=s.hasOwnProperty(l)?s[l]:l,i.getMutationMethod[l]=u.hasOwnProperty(l)?u[l]:null;var d=t[l];i.mustUseAttribute[l]=n(d,o.MUST_USE_ATTRIBUTE),i.mustUseProperty[l]=n(d,o.MUST_USE_PROPERTY),i.hasSideEffects[l]=n(d,o.HAS_SIDE_EFFECTS),i.hasBooleanValue[l]=n(d,o.HAS_BOOLEAN_VALUE),i.hasNumericValue[l]=n(d,o.HAS_NUMERIC_VALUE),i.hasPositiveNumericValue[l]=n(d,o.HAS_POSITIVE_NUMERIC_VALUE),i.hasOverloadedBooleanValue[l]=n(d,o.HAS_OVERLOADED_BOOLEAN_VALUE),r(!i.mustUseAttribute[l]||!i.mustUseProperty[l],"DOMProperty: Cannot require using both attribute and property: %s",l),r(i.mustUseProperty[l]||!i.hasSideEffects[l],"DOMProperty: Properties that have side effects must use property: %s",l),r(!!i.hasBooleanValue[l]+!!i.hasNumericValue[l]+!!i.hasOverloadedBooleanValue[l]<=1,"DOMProperty: Value can be one of boolean, overloaded boolean, or numeric value, but not a combination: %s",l)}}},a={},i={ID_ATTRIBUTE_NAME:"data-reactid",isStandardName:{},getPossibleStandardName:{},getAttributeName:{},getPropertyName:{},getMutationMethod:{},mustUseAttribute:{},mustUseProperty:{},hasSideEffects:{},hasBooleanValue:{},hasNumericValue:{},hasPositiveNumericValue:{},hasOverloadedBooleanValue:{},_isCustomAttributeFunctions:[],isCustomAttribute:function(e){for(var t=0;t<i._isCustomAttributeFunctions.length;t++){var n=i._isCustomAttributeFunctions[t];if(n(e))return!0}return!1},getDefaultValueForProperty:function(e,t){var n,r=a[e];return r||(a[e]=r={}),t in r||(n=document.createElement(e),r[t]=n[t]),r[t]},injection:o};t.exports=i},{150:150}],12:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */
function n(e,t){return null==t||r.hasBooleanValue[e]&&!t||r.hasNumericValue[e]&&isNaN(t)||r.hasPositiveNumericValue[e]&&1>t||r.hasOverloadedBooleanValue[e]&&t===!1}var r=e(11),o=e(163),a=e(171),i={children:!0,dangerouslySetInnerHTML:!0,key:!0,ref:!0},s={},u=function(e){if(!(i.hasOwnProperty(e)&&i[e]||s.hasOwnProperty(e)&&s[e])){s[e]=!0;var t=e.toLowerCase(),n=r.isCustomAttribute(t)?t:r.getPossibleStandardName.hasOwnProperty(t)?r.getPossibleStandardName[t]:null;a(null==n,"Unknown DOM property %s. Did you mean %s?",e,n)}},l={createMarkupForID:function(e){return r.ID_ATTRIBUTE_NAME+"="+o(e)},createMarkupForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(e)&&r.isStandardName[e]){if(n(e,t))return"";var a=r.getAttributeName[e];return r.hasBooleanValue[e]||r.hasOverloadedBooleanValue[e]&&t===!0?a:a+"="+o(t)}return r.isCustomAttribute(e)?null==t?"":e+"="+o(t):(u(e),null)},setValueForProperty:function(e,t,o){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var a=r.getMutationMethod[t];if(a)a(e,o);else if(n(t,o))this.deleteValueForProperty(e,t);else if(r.mustUseAttribute[t])e.setAttribute(r.getAttributeName[t],""+o);else{var i=r.getPropertyName[t];r.hasSideEffects[t]&&""+e[i]==""+o||(e[i]=o)}}else r.isCustomAttribute(t)?null==o?e.removeAttribute(t):e.setAttribute(t,""+o):u(t)},deleteValueForProperty:function(e,t){if(r.isStandardName.hasOwnProperty(t)&&r.isStandardName[t]){var n=r.getMutationMethod[t];if(n)n(e,void 0);else if(r.mustUseAttribute[t])e.removeAttribute(r.getAttributeName[t]);else{var o=r.getPropertyName[t],a=r.getDefaultValueForProperty(e.nodeName,o);r.hasSideEffects[t]&&""+e[o]===a||(e[o]=a)}}else r.isCustomAttribute(t)?e.removeAttribute(t):u(t)}};t.exports=l},{11:11,163:163,171:171}],13:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 * @typechecks static-only
 */
function n(e){return e.substring(1,e.indexOf(" "))}var r=e(22),o=e(126),a=e(129),i=e(142),s=e(150),u=/^(<[^ \/>]+)/,l="data-danger-index",c={dangerouslyRenderMarkup:function(e){s(r.canUseDOM,"dangerouslyRenderMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use React.renderToString for server rendering.");for(var t,c={},p=0;p<e.length;p++)s(e[p],"dangerouslyRenderMarkup(...): Missing markup."),t=n(e[p]),t=i(t)?t:"*",c[t]=c[t]||[],c[t][p]=e[p];var d=[],f=0;for(t in c)if(c.hasOwnProperty(t)){var h,m=c[t];for(h in m)if(m.hasOwnProperty(h)){var v=m[h];m[h]=v.replace(u,"$1 "+l+'="'+h+'" ')}for(var y=o(m.join(""),a),g=0;g<y.length;++g){var C=y[g];C.hasAttribute&&C.hasAttribute(l)?(h=+C.getAttribute(l),C.removeAttribute(l),s(!d.hasOwnProperty(h),"Danger: Assigning to an already-occupied result index."),d[h]=C,f+=1):console.error("Danger: Discarding unexpected node:",C)}}return s(f===d.length,"Danger: Did not assign to every index of resultList."),s(d.length===e.length,"Danger: Expected markup to render %s nodes, but rendered %s.",e.length,d.length),d},dangerouslyReplaceNodeWithMarkup:function(e,t){s(r.canUseDOM,"dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a worker thread. Make sure `window` and `document` are available globally before requiring React when unit testing or use React.renderToString for server rendering."),s(t,"dangerouslyReplaceNodeWithMarkup(...): Missing markup."),s("html"!==e.tagName.toLowerCase(),"dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the <html> node. This is because browser quirks make this unreliable and/or slow. If you want to render to the root you must use server rendering. See React.renderToString().");var n=o(t,a)[0];e.parentNode.replaceChild(n,e)}};t.exports=c},{126:126,129:129,142:142,150:150,22:22}],14:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */
var n=e(157),r=[n({ResponderEventPlugin:null}),n({SimpleEventPlugin:null}),n({TapEventPlugin:null}),n({EnterLeaveEventPlugin:null}),n({ChangeEventPlugin:null}),n({SelectEventPlugin:null}),n({BeforeInputEventPlugin:null}),n({AnalyticsEventPlugin:null}),n({MobileSafariClickEventPlugin:null})];t.exports=r},{157:157}],15:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */
var n=e(16),r=e(21),o=e(112),a=e(77),i=e(157),s=n.topLevelTypes,u=a.getFirstReactDOM,l={mouseEnter:{registrationName:i({onMouseEnter:null}),dependencies:[s.topMouseOut,s.topMouseOver]},mouseLeave:{registrationName:i({onMouseLeave:null}),dependencies:[s.topMouseOut,s.topMouseOver]}},c=[null,null],p={eventTypes:l,extractEvents:function(e,t,n,i){if(e===s.topMouseOver&&(i.relatedTarget||i.fromElement))return null;if(e!==s.topMouseOut&&e!==s.topMouseOver)return null;var p;if(t.window===t)p=t;else{var d=t.ownerDocument;p=d?d.defaultView||d.parentWindow:window}var f,h;if(e===s.topMouseOut?(f=t,h=u(i.relatedTarget||i.toElement)||p):(f=p,h=t),f===h)return null;var m=f?a.getID(f):"",v=h?a.getID(h):"",y=o.getPooled(l.mouseLeave,m,i);y.type="mouseleave",y.target=f,y.relatedTarget=h;var g=o.getPooled(l.mouseEnter,v,i);return g.type="mouseenter",g.target=h,g.relatedTarget=f,r.accumulateEnterLeaveDispatches(y,g,m,v),c[0]=y,c[1]=g,c}};t.exports=p},{112:112,157:157,16:16,21:21,77:77}],16:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */
var n=e(156),r=n({bubbled:null,captured:null}),o=n({topBlur:null,topChange:null,topClick:null,topCompositionEnd:null,topCompositionStart:null,topCompositionUpdate:null,topContextMenu:null,topCopy:null,topCut:null,topDoubleClick:null,topDrag:null,topDragEnd:null,topDragEnter:null,topDragExit:null,topDragLeave:null,topDragOver:null,topDragStart:null,topDrop:null,topError:null,topFocus:null,topInput:null,topKeyDown:null,topKeyPress:null,topKeyUp:null,topLoad:null,topMouseDown:null,topMouseMove:null,topMouseOut:null,topMouseOver:null,topMouseUp:null,topPaste:null,topReset:null,topScroll:null,topSelectionChange:null,topSubmit:null,topTextInput:null,topTouchCancel:null,topTouchEnd:null,topTouchMove:null,topTouchStart:null,topWheel:null}),a={topLevelTypes:o,PropagationPhases:r};t.exports=a},{156:156}],17:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventListener
 * @typechecks
 */
var n=e(129),r={listen:function(e,t,n){return e.addEventListener?(e.addEventListener(t,n,!1),{remove:function(){e.removeEventListener(t,n,!1)}}):e.attachEvent?(e.attachEvent("on"+t,n),{remove:function(){e.detachEvent("on"+t,n)}}):void 0},capture:function(e,t,r){return e.addEventListener?(e.addEventListener(t,r,!0),{remove:function(){e.removeEventListener(t,r,!0)}}):(console.error("Attempted to listen to events during the capture phase on a browser that does not support the capture phase. Your application will not receive some events."),{remove:n})},registerDefault:function(){}};t.exports=r},{129:129}],18:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */
function n(){var e=p&&p.traverseTwoPhase&&p.traverseEnterLeave;s(e,"InstanceHandle not injected before use!")}var r=e(19),o=e(20),a=e(118),i=e(135),s=e(150),u={},l=null,c=function(e){if(e){var t=o.executeDispatch,n=r.getPluginModuleForEvent(e);n&&n.executeDispatch&&(t=n.executeDispatch),o.executeDispatchesInOrder(e,t),e.isPersistent()||e.constructor.release(e)}},p=null,d={injection:{injectMount:o.injection.injectMount,injectInstanceHandle:function(e){p=e,n()},getInstanceHandle:function(){return n(),p},injectEventPluginOrder:r.injectEventPluginOrder,injectEventPluginsByName:r.injectEventPluginsByName},eventNameDispatchConfigs:r.eventNameDispatchConfigs,registrationNameModules:r.registrationNameModules,putListener:function(e,t,n){s(!n||"function"==typeof n,"Expected %s listener to be a function, instead got type %s",t,typeof n);var r=u[t]||(u[t]={});r[e]=n},getListener:function(e,t){var n=u[t];return n&&n[e]},deleteListener:function(e,t){var n=u[t];n&&delete n[e]},deleteAllListeners:function(e){for(var t in u)delete u[t][e]},extractEvents:function(e,t,n,o){for(var i,s=r.plugins,u=0,l=s.length;l>u;u++){var c=s[u];if(c){var p=c.extractEvents(e,t,n,o);p&&(i=a(i,p))}}return i},enqueueEvents:function(e){e&&(l=a(l,e))},processEventQueue:function(){var e=l;l=null,i(e,c),s(!l,"processEventQueue(): Additional events were enqueued while processing an event queue. Support for this has not yet been implemented.")},__purge:function(){u={}},__getListenerBank:function(){return u}};t.exports=d},{118:118,135:135,150:150,19:19,20:20}],19:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */
function n(){if(i)for(var e in s){var t=s[e],n=i.indexOf(e);if(a(n>-1,"EventPluginRegistry: Cannot inject event plugins that do not exist in the plugin ordering, `%s`.",e),!u.plugins[n]){a(t.extractEvents,"EventPluginRegistry: Event plugins must implement an `extractEvents` method, but `%s` does not.",e),u.plugins[n]=t;var o=t.eventTypes;for(var l in o)a(r(o[l],t,l),"EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.",l,e)}}}function r(e,t,n){a(!u.eventNameDispatchConfigs.hasOwnProperty(n),"EventPluginHub: More than one plugin attempted to publish the same event name, `%s`.",n),u.eventNameDispatchConfigs[n]=e;var r=e.phasedRegistrationNames;if(r){for(var i in r)if(r.hasOwnProperty(i)){var s=r[i];o(s,t,n)}return!0}return e.registrationName?(o(e.registrationName,t,n),!0):!1}function o(e,t,n){a(!u.registrationNameModules[e],"EventPluginHub: More than one plugin attempted to publish the same registration name, `%s`.",e),u.registrationNameModules[e]=t,u.registrationNameDependencies[e]=t.eventTypes[n].dependencies}var a=e(150),i=null,s={},u={plugins:[],eventNameDispatchConfigs:{},registrationNameModules:{},registrationNameDependencies:{},injectEventPluginOrder:function(e){a(!i,"EventPluginRegistry: Cannot inject event plugin ordering more than once. You are likely trying to load more than one copy of React."),i=Array.prototype.slice.call(e),n()},injectEventPluginsByName:function(e){var t=!1;for(var r in e)if(e.hasOwnProperty(r)){var o=e[r];s.hasOwnProperty(r)&&s[r]===o||(a(!s[r],"EventPluginRegistry: Cannot inject two different event plugins using the same name, `%s`.",r),s[r]=o,t=!0)}t&&n()},getPluginModuleForEvent:function(e){var t=e.dispatchConfig;if(t.registrationName)return u.registrationNameModules[t.registrationName]||null;for(var n in t.phasedRegistrationNames)if(t.phasedRegistrationNames.hasOwnProperty(n)){var r=u.registrationNameModules[t.phasedRegistrationNames[n]];if(r)return r}return null},_resetEventPlugins:function(){i=null;for(var e in s)s.hasOwnProperty(e)&&delete s[e];u.plugins.length=0;var t=u.eventNameDispatchConfigs;for(var n in t)t.hasOwnProperty(n)&&delete t[n];var r=u.registrationNameModules;for(var o in r)r.hasOwnProperty(o)&&delete r[o]}};t.exports=u},{150:150}],20:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */
function n(e){return e===v.topMouseUp||e===v.topTouchEnd||e===v.topTouchCancel}function r(e){return e===v.topMouseMove||e===v.topTouchMove}function o(e){return e===v.topMouseDown||e===v.topTouchStart}function a(e,t){var n=e._dispatchListeners,r=e._dispatchIDs;if(d(e),Array.isArray(n))for(var o=0;o<n.length&&!e.isPropagationStopped();o++)t(e,n[o],r[o]);else n&&t(e,n,r)}function i(e,t,n){e.currentTarget=m.Mount.getNode(n);var r=t(e,n);return e.currentTarget=null,r}function s(e,t){a(e,t),e._dispatchListeners=null,e._dispatchIDs=null}function u(e){var t=e._dispatchListeners,n=e._dispatchIDs;if(d(e),Array.isArray(t)){for(var r=0;r<t.length&&!e.isPropagationStopped();r++)if(t[r](e,n[r]))return n[r]}else if(t&&t(e,n))return n;return null}function l(e){var t=u(e);return e._dispatchIDs=null,e._dispatchListeners=null,t}function c(e){d(e);var t=e._dispatchListeners,n=e._dispatchIDs;h(!Array.isArray(t),"executeDirectDispatch(...): Invalid `event`.");var r=t?t(e,n):null;return e._dispatchListeners=null,e._dispatchIDs=null,r}function p(e){return!!e._dispatchListeners}var d,f=e(16),h=e(150),m={Mount:null,injectMount:function(e){m.Mount=e,h(e&&e.getNode,"EventPluginUtils.injection.injectMount(...): Injected Mount module is missing getNode.")}},v=f.topLevelTypes;d=function(e){var t=e._dispatchListeners,n=e._dispatchIDs,r=Array.isArray(t),o=Array.isArray(n),a=o?n.length:n?1:0,i=r?t.length:t?1:0;h(o===r&&a===i,"EventPluginUtils: Invalid `event`.")};var y={isEndish:n,isMoveish:r,isStartish:o,executeDirectDispatch:c,executeDispatch:i,executeDispatchesInOrder:s,executeDispatchesInOrderStopAtTrue:l,hasDispatches:p,injection:m,useTouchEvents:!1};t.exports=y},{150:150,16:16}],21:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */
function n(e,t,n){var r=t.dispatchConfig.phasedRegistrationNames[n];return m(e,r)}function r(e,t,r){if(!e)throw new Error("Dispatching id must not be null");var o=t?h.bubbled:h.captured,a=n(e,r,o);a&&(r._dispatchListeners=d(r._dispatchListeners,a),r._dispatchIDs=d(r._dispatchIDs,e))}function o(e){e&&e.dispatchConfig.phasedRegistrationNames&&p.injection.getInstanceHandle().traverseTwoPhase(e.dispatchMarker,r,e)}function a(e,t,n){if(n&&n.dispatchConfig.registrationName){var r=n.dispatchConfig.registrationName,o=m(e,r);o&&(n._dispatchListeners=d(n._dispatchListeners,o),n._dispatchIDs=d(n._dispatchIDs,e))}}function i(e){e&&e.dispatchConfig.registrationName&&a(e.dispatchMarker,null,e)}function s(e){f(e,o)}function u(e,t,n,r){p.injection.getInstanceHandle().traverseEnterLeave(n,r,a,e,t)}function l(e){f(e,i)}var c=e(16),p=e(18),d=e(118),f=e(135),h=c.PropagationPhases,m=p.getListener,v={accumulateTwoPhaseDispatches:s,accumulateDirectDispatches:l,accumulateEnterLeaveDispatches:u};t.exports=v},{118:118,135:135,16:16,18:18}],22:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */
var n=!("undefined"==typeof window||!window.document||!window.document.createElement),r={canUseDOM:n,canUseWorkers:"undefined"!=typeof Worker,canUseEventListeners:n&&!(!window.addEventListener&&!window.attachEvent),canUseViewport:n&&!!window.screen,isInWorker:!n};t.exports=r},{}],23:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule FallbackCompositionState
 * @typechecks static-only
 */
function n(e){this._root=e,this._startText=this.getText(),this._fallbackText=null}var r=e(30),o=e(29),a=e(145);o(n.prototype,{getText:function(){return"value"in this._root?this._root.value:this._root[a()]},getData:function(){if(this._fallbackText)return this._fallbackText;var e,t,n=this._startText,r=n.length,o=this.getText(),a=o.length;for(e=0;r>e&&n[e]===o[e];e++);var i=r-e;for(t=1;i>=t&&n[r-t]===o[a-t];t++);var s=t>1?1-t:void 0;return this._fallbackText=o.slice(e,s),this._fallbackText}}),r.addPoolingTo(n),t.exports=n},{145:145,29:29,30:30}],24:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */
var n,r=e(11),o=e(22),a=r.injection.MUST_USE_ATTRIBUTE,i=r.injection.MUST_USE_PROPERTY,s=r.injection.HAS_BOOLEAN_VALUE,u=r.injection.HAS_SIDE_EFFECTS,l=r.injection.HAS_NUMERIC_VALUE,c=r.injection.HAS_POSITIVE_NUMERIC_VALUE,p=r.injection.HAS_OVERLOADED_BOOLEAN_VALUE;if(o.canUseDOM){var d=document.implementation;n=d&&d.hasFeature&&d.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")}var f={isCustomAttribute:RegExp.prototype.test.bind(/^(data|aria)-[a-z_][a-z\d_.\-]*$/),Properties:{accept:null,acceptCharset:null,accessKey:null,action:null,allowFullScreen:a|s,allowTransparency:a,alt:null,async:s,autoComplete:null,autoPlay:s,cellPadding:null,cellSpacing:null,charSet:a,checked:i|s,classID:a,className:n?a:i,cols:a|c,colSpan:null,content:null,contentEditable:null,contextMenu:a,controls:i|s,coords:null,crossOrigin:null,data:null,dateTime:a,defer:s,dir:null,disabled:a|s,download:p,draggable:null,encType:null,form:a,formAction:a,formEncType:a,formMethod:a,formNoValidate:s,formTarget:a,frameBorder:a,headers:null,height:a,hidden:a|s,high:null,href:null,hrefLang:null,htmlFor:null,httpEquiv:null,icon:null,id:i,label:null,lang:null,list:a,loop:i|s,low:null,manifest:a,marginHeight:null,marginWidth:null,max:null,maxLength:a,media:a,mediaGroup:null,method:null,min:null,multiple:i|s,muted:i|s,name:null,noValidate:s,open:s,optimum:null,pattern:null,placeholder:null,poster:null,preload:null,radioGroup:null,readOnly:i|s,rel:null,required:s,role:a,rows:a|c,rowSpan:null,sandbox:null,scope:null,scoped:s,scrolling:null,seamless:a|s,selected:i|s,shape:null,size:a|c,sizes:a,span:c,spellCheck:null,src:null,srcDoc:i,srcSet:a,start:l,step:null,style:null,tabIndex:null,target:null,title:null,type:null,useMap:null,value:i|u,width:a,wmode:a,autoCapitalize:null,autoCorrect:null,itemProp:a,itemScope:a|s,itemType:a,itemID:a,itemRef:a,property:null,unselectable:a},DOMAttributeNames:{acceptCharset:"accept-charset",className:"class",htmlFor:"for",httpEquiv:"http-equiv"},DOMPropertyNames:{autoCapitalize:"autocapitalize",autoComplete:"autocomplete",autoCorrect:"autocorrect",autoFocus:"autofocus",autoPlay:"autoplay",encType:"encoding",hrefLang:"hreflang",radioGroup:"radiogroup",spellCheck:"spellcheck",srcDoc:"srcdoc",srcSet:"srcset"}};t.exports=f},{11:11,22:22}],25:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedStateMixin
 * @typechecks static-only
 */
var n=e(75),r=e(94),o={linkState:function(e){return new n(this.state[e],r.createStateKeySetter(this,e))}};t.exports=o},{75:75,94:94}],26:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */
function n(e){u(null==e.props.checkedLink||null==e.props.valueLink,"Cannot provide a checkedLink and a valueLink. If you want to use checkedLink, you probably don't want to use valueLink and vice versa.")}function r(e){n(e),u(null==e.props.value&&null==e.props.onChange,"Cannot provide a valueLink and a value or onChange event. If you want to use value or onChange, you probably don't want to use valueLink.")}function o(e){n(e),u(null==e.props.checked&&null==e.props.onChange,"Cannot provide a checkedLink and a checked property or onChange event. If you want to use checked or onChange, you probably don't want to use checkedLink")}function a(e){this.props.valueLink.requestChange(e.target.value)}function i(e){this.props.checkedLink.requestChange(e.target.checked)}var s=e(86),u=e(150),l={button:!0,checkbox:!0,image:!0,hidden:!0,radio:!0,reset:!0,submit:!0},c={Mixin:{propTypes:{value:function(e,t){return!e[t]||l[e.type]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.")},checked:function(e,t){return!e[t]||e.onChange||e.readOnly||e.disabled?null:new Error("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.")},onChange:s.func}},getValue:function(e){return e.props.valueLink?(r(e),e.props.valueLink.value):e.props.value},getChecked:function(e){return e.props.checkedLink?(o(e),e.props.checkedLink.value):e.props.checked},getOnChange:function(e){return e.props.valueLink?(r(e),a):e.props.checkedLink?(o(e),i):e.props.onChange}};t.exports=c},{150:150,86:86}],27:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LocalEventTrapMixin
 */
function n(e){e.remove()}var r=e(33),o=e(118),a=e(135),i=e(150),s={trapBubbledEvent:function(e,t){i(this.isMounted(),"Must be mounted to trap events");var n=this.getDOMNode();i(n,"LocalEventTrapMixin.trapBubbledEvent(...): Requires node to be rendered.");var a=r.trapBubbledEvent(e,t,n);this._localEventListeners=o(this._localEventListeners,a)},componentWillUnmount:function(){this._localEventListeners&&a(this._localEventListeners,n)}};t.exports=s},{118:118,135:135,150:150,33:33}],28:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule MobileSafariClickEventPlugin
 * @typechecks static-only
 */
var n=e(16),r=e(129),o=n.topLevelTypes,a={eventTypes:null,extractEvents:function(e,t,n,a){if(e===o.topTouchStart){var i=a.target;i&&!i.onclick&&(i.onclick=r)}}};t.exports=a},{129:129,16:16}],29:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */
function n(e){if(null==e)throw new TypeError("Object.assign target cannot be null or undefined");for(var t=Object(e),n=Object.prototype.hasOwnProperty,r=1;r<arguments.length;r++){var o=arguments[r];if(null!=o){var a=Object(o);for(var i in a)n.call(a,i)&&(t[i]=a[i])}}return t}t.exports=n},{}],30:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */
var n=e(150),r=function(e){var t=this;if(t.instancePool.length){var n=t.instancePool.pop();return t.call(n,e),n}return new t(e)},o=function(e,t){var n=this;if(n.instancePool.length){var r=n.instancePool.pop();return n.call(r,e,t),r}return new n(e,t)},a=function(e,t,n){var r=this;if(r.instancePool.length){var o=r.instancePool.pop();return r.call(o,e,t,n),o}return new r(e,t,n)},i=function(e,t,n,r,o){var a=this;if(a.instancePool.length){var i=a.instancePool.pop();return a.call(i,e,t,n,r,o),i}return new a(e,t,n,r,o)},s=function(e){var t=this;n(e instanceof t,"Trying to release an instance into a pool of a different type."),e.destructor&&e.destructor(),t.instancePool.length<t.poolSize&&t.instancePool.push(e)},u=10,l=r,c=function(e,t){var n=e;return n.instancePool=[],n.getPooled=t||l,n.poolSize||(n.poolSize=u),n.release=s,n},p={addPoolingTo:c,oneArgumentPooler:r,twoArgumentPooler:o,threeArgumentPooler:a,fiveArgumentPooler:i};t.exports=p},{150:150}],31:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */
var n=e(20),r=e(37),o=e(39),a=e(38),i=e(44),s=e(45),u=e(63),l=e(64),c=e(46),p=e(57),d=e(60),f=e(72),h=e(77),m=e(82),v=e(86),y=e(89),g=e(92),C=e(29),b=e(132),E=e(160);d.inject();var _=u.createElement,w=u.createFactory,x=u.cloneElement;_=l.createElement,w=l.createFactory,x=l.cloneElement;var D=m.measure("React","render",h.render),M={Children:{map:r.map,forEach:r.forEach,count:r.count,only:E},Component:o,DOM:c,PropTypes:v,initializeTouchEvents:function(e){n.useTouchEvents=e},createClass:a.createClass,createElement:_,cloneElement:x,createFactory:w,createMixin:function(e){return e},constructAndRenderComponent:h.constructAndRenderComponent,constructAndRenderComponentByID:h.constructAndRenderComponentByID,findDOMNode:b,render:D,renderToString:g.renderToString,renderToStaticMarkup:g.renderToStaticMarkup,unmountComponentAtNode:h.unmountComponentAtNode,isValidElement:u.isValidElement,withContext:i.withContext,__spread:C};"undefined"!=typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject&&__REACT_DEVTOOLS_GLOBAL_HOOK__.inject({CurrentOwner:s,InstanceHandles:f,Mount:h,Reconciler:y,TextComponent:p});var T=e(22);if(T.canUseDOM&&window.top===window.self){navigator.userAgent.indexOf("Chrome")>-1&&"undefined"==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&console.debug("Download the React DevTools for a better development experience: https://fb.me/react-devtools");for(var R=[Array.isArray,Array.prototype.every,Array.prototype.forEach,Array.prototype.indexOf,Array.prototype.map,Date.now,Function.prototype.bind,Object.keys,String.prototype.split,String.prototype.trim,Object.create,Object.freeze],I=0;I<R.length;I++)if(!R[I]){console.error("One or more ES5 shim/shams expected by React are not available: https://fb.me/react-warning-polyfills");break}}M.version="0.13.3",t.exports=M},{132:132,160:160,20:20,22:22,29:29,37:37,38:38,39:39,44:44,45:45,46:46,57:57,60:60,63:63,64:64,72:72,77:77,82:82,86:86,89:89,92:92}],32:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserComponentMixin
 */
var n=e(132),r={getDOMNode:function(){return n(this)}};t.exports=r},{132:132}],33:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */
function n(e){return Object.prototype.hasOwnProperty.call(e,h)||(e[h]=d++,c[e[h]]={}),c[e[h]]}var r=e(16),o=e(18),a=e(19),i=e(67),s=e(117),u=e(29),l=e(151),c={},p=!1,d=0,f={topBlur:"blur",topChange:"change",topClick:"click",topCompositionEnd:"compositionend",topCompositionStart:"compositionstart",topCompositionUpdate:"compositionupdate",topContextMenu:"contextmenu",topCopy:"copy",topCut:"cut",topDoubleClick:"dblclick",topDrag:"drag",topDragEnd:"dragend",topDragEnter:"dragenter",topDragExit:"dragexit",topDragLeave:"dragleave",topDragOver:"dragover",topDragStart:"dragstart",topDrop:"drop",topFocus:"focus",topInput:"input",topKeyDown:"keydown",topKeyPress:"keypress",topKeyUp:"keyup",topMouseDown:"mousedown",topMouseMove:"mousemove",topMouseOut:"mouseout",topMouseOver:"mouseover",topMouseUp:"mouseup",topPaste:"paste",topScroll:"scroll",topSelectionChange:"selectionchange",topTextInput:"textInput",topTouchCancel:"touchcancel",topTouchEnd:"touchend",topTouchMove:"touchmove",topTouchStart:"touchstart",topWheel:"wheel"},h="_reactListenersID"+String(Math.random()).slice(2),m=u({},i,{ReactEventListener:null,injection:{injectReactEventListener:function(e){e.setHandleTopLevel(m.handleTopLevel),m.ReactEventListener=e}},setEnabled:function(e){m.ReactEventListener&&m.ReactEventListener.setEnabled(e)},isEnabled:function(){return!(!m.ReactEventListener||!m.ReactEventListener.isEnabled())},listenTo:function(e,t){for(var o=t,i=n(o),s=a.registrationNameDependencies[e],u=r.topLevelTypes,c=0,p=s.length;p>c;c++){var d=s[c];i.hasOwnProperty(d)&&i[d]||(d===u.topWheel?l("wheel")?m.ReactEventListener.trapBubbledEvent(u.topWheel,"wheel",o):l("mousewheel")?m.ReactEventListener.trapBubbledEvent(u.topWheel,"mousewheel",o):m.ReactEventListener.trapBubbledEvent(u.topWheel,"DOMMouseScroll",o):d===u.topScroll?l("scroll",!0)?m.ReactEventListener.trapCapturedEvent(u.topScroll,"scroll",o):m.ReactEventListener.trapBubbledEvent(u.topScroll,"scroll",m.ReactEventListener.WINDOW_HANDLE):d===u.topFocus||d===u.topBlur?(l("focus",!0)?(m.ReactEventListener.trapCapturedEvent(u.topFocus,"focus",o),m.ReactEventListener.trapCapturedEvent(u.topBlur,"blur",o)):l("focusin")&&(m.ReactEventListener.trapBubbledEvent(u.topFocus,"focusin",o),m.ReactEventListener.trapBubbledEvent(u.topBlur,"focusout",o)),i[u.topBlur]=!0,i[u.topFocus]=!0):f.hasOwnProperty(d)&&m.ReactEventListener.trapBubbledEvent(d,f[d],o),i[d]=!0)}},trapBubbledEvent:function(e,t,n){return m.ReactEventListener.trapBubbledEvent(e,t,n)},trapCapturedEvent:function(e,t,n){return m.ReactEventListener.trapCapturedEvent(e,t,n)},ensureScrollValueMonitoring:function(){if(!p){var e=s.refreshScrollValues;m.ReactEventListener.monitorScrollValue(e),p=!0}},eventNameDispatchConfigs:o.eventNameDispatchConfigs,registrationNameModules:o.registrationNameModules,putListener:o.putListener,getListener:o.getListener,deleteListener:o.deleteListener,deleteAllListeners:o.deleteAllListeners});t.exports=m},{117:117,151:151,16:16,18:18,19:19,29:29,67:67}],34:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * @providesModule ReactCSSTransitionGroup
 */
var n=e(31),r=e(29),o=n.createFactory(e(98)),a=n.createFactory(e(35)),i=n.createClass({displayName:"ReactCSSTransitionGroup",propTypes:{transitionName:n.PropTypes.string.isRequired,transitionAppear:n.PropTypes.bool,transitionEnter:n.PropTypes.bool,transitionLeave:n.PropTypes.bool},getDefaultProps:function(){return{transitionAppear:!1,transitionEnter:!0,transitionLeave:!0}},_wrapChild:function(e){return a({name:this.props.transitionName,appear:this.props.transitionAppear,enter:this.props.transitionEnter,leave:this.props.transitionLeave},e)},render:function(){return o(r({},this.props,{childFactory:this._wrapChild}))}});t.exports=i},{29:29,31:31,35:35,98:98}],35:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks
 * @providesModule ReactCSSTransitionGroupChild
 */
var n=e(31),r=e(4),o=e(97),a=e(160),i=e(171),s=17,u=5e3,l=null;l=function(){i(!1,"transition(): tried to perform an animation without an animationend or transitionend event after timeout (%sms). You should either disable this transition in JS or add a CSS animation/transition.",u)};var c=n.createClass({displayName:"ReactCSSTransitionGroupChild",transition:function(e,t){var n=this.getDOMNode(),a=this.props.name+"-"+e,i=a+"-active",s=null,c=function(e){e&&e.target!==n||(clearTimeout(s),r.removeClass(n,a),r.removeClass(n,i),o.removeEndEventListener(n,c),t&&t())};o.addEndEventListener(n,c),r.addClass(n,a),this.queueClass(i),s=setTimeout(l,u)},queueClass:function(e){this.classNameQueue.push(e),this.timeout||(this.timeout=setTimeout(this.flushClassNameQueue,s))},flushClassNameQueue:function(){this.isMounted()&&this.classNameQueue.forEach(r.addClass.bind(r,this.getDOMNode())),this.classNameQueue.length=0,this.timeout=null},componentWillMount:function(){this.classNameQueue=[]},componentWillUnmount:function(){this.timeout&&clearTimeout(this.timeout)},componentWillAppear:function(e){this.props.appear?this.transition("appear",e):e()},componentWillEnter:function(e){this.props.enter?this.transition("enter",e):e()},componentWillLeave:function(e){this.props.leave?this.transition("leave",e):e()},render:function(){return a(this.props.children)}});t.exports=c},{160:160,171:171,31:31,4:4,97:97}],36:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildReconciler
 * @typechecks static-only
 */
var n=e(89),r=e(133),o=e(149),a=e(167),i={instantiateChildren:function(e){var t=r(e);for(var n in t)if(t.hasOwnProperty(n)){var a=t[n],i=o(a,null);t[n]=i}return t},updateChildren:function(e,t,i,s){var u=r(t);if(!u&&!e)return null;var l;for(l in u)if(u.hasOwnProperty(l)){var c=e&&e[l],p=c&&c._currentElement,d=u[l];if(a(p,d))n.receiveComponent(c,d,i,s),u[l]=c;else{c&&n.unmountComponent(c,l);var f=o(d,null);u[l]=f}}for(l in e)!e.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||n.unmountComponent(e[l]);return u},unmountChildren:function(e){for(var t in e){var r=e[t];n.unmountComponent(r)}}};t.exports=i},{133:133,149:149,167:167,89:89}],37:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */
function n(e,t){this.forEachFunction=e,this.forEachContext=t}function r(e,t,n,r){var o=e;o.forEachFunction.call(o.forEachContext,t,r)}function o(e,t,o){if(null==e)return e;var a=n.getPooled(t,o);d(e,r,a),n.release(a)}function a(e,t,n){this.mapResult=e,this.mapFunction=t,this.mapContext=n}function i(e,t,n,r){var o=e,a=o.mapResult,i=!a.hasOwnProperty(n);if(f(i,"ReactChildren.map(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",n),i){var s=o.mapFunction.call(o.mapContext,t,r);a[n]=s}}function s(e,t,n){if(null==e)return e;var r={},o=a.getPooled(r,t,n);return d(e,i,o),a.release(o),p.create(r)}function u(){return null}function l(e){return d(e,u,null)}var c=e(30),p=e(69),d=e(169),f=e(171),h=c.twoArgumentPooler,m=c.threeArgumentPooler;c.addPoolingTo(n,h),c.addPoolingTo(a,m);var v={forEach:o,map:s,count:l};t.exports=v},{169:169,171:171,30:30,69:69}],38:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactClass
 */
function n(e,t,n){for(var r in t)t.hasOwnProperty(r)&&x("function"==typeof t[r],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e.displayName||"ReactClass",g[n],r)}function r(e,t){var n=R.hasOwnProperty(t)?R[t]:null;P.hasOwnProperty(t)&&E(n===M.OVERRIDE_BASE,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",t),e.hasOwnProperty(t)&&E(n===M.DEFINE_MANY||n===M.DEFINE_MANY_MERGED,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",t)}function o(e,t){if(t){E("function"!=typeof t,"ReactClass: You're attempting to use a component class as a mixin. Instead, just use a regular object."),E(!f.isValidElement(t),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var n=e.prototype;t.hasOwnProperty(D)&&I.mixins(e,t.mixins);for(var o in t)if(t.hasOwnProperty(o)&&o!==D){var a=t[o];if(r(n,o),I.hasOwnProperty(o))I[o](e,a);else{var i=R.hasOwnProperty(o),l=n.hasOwnProperty(o),c=a&&a.__reactDontBind,p="function"==typeof a,d=p&&!i&&!l&&!c;if(d)n.__reactAutoBindMap||(n.__reactAutoBindMap={}),n.__reactAutoBindMap[o]=a,n[o]=a;else if(l){var h=R[o];E(i&&(h===M.DEFINE_MANY_MERGED||h===M.DEFINE_MANY),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,o),h===M.DEFINE_MANY_MERGED?n[o]=s(n[o],a):h===M.DEFINE_MANY&&(n[o]=u(n[o],a))}else n[o]=a,"function"==typeof a&&t.displayName&&(n[o].displayName=t.displayName+"_"+o)}}}}function a(e,t){if(t)for(var n in t){var r=t[n];if(t.hasOwnProperty(n)){var o=n in I;E(!o,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in e;E(!a,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),e[n]=r}}}function i(e,t){E(e&&t&&"object"==typeof e&&"object"==typeof t,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in t)t.hasOwnProperty(n)&&(E(void 0===e[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),e[n]=t[n]);return e}function s(e,t){return function(){var n=e.apply(this,arguments),r=t.apply(this,arguments);if(null==n)return r;if(null==r)return n;var o={};return i(o,n),i(o,r),o}}function u(e,t){return function(){e.apply(this,arguments),t.apply(this,arguments)}}function l(e,t){var n=t.bind(e);n.__reactBoundContext=e,n.__reactBoundMethod=t,n.__reactBoundArguments=null;var r=e.constructor.displayName,o=n.bind;return n.bind=function(a){for(var i=[],s=1,u=arguments.length;u>s;s++)i.push(arguments[s]);if(a!==e&&null!==a)x(!1,"bind(): React component methods may only be bound to the component instance. See %s",r);else if(!i.length)return x(!1,"bind(): You are binding a component method to the component. React does this for you automatically in a high-performance way, so you can safely remove this call. See %s",r),n;var l=o.apply(n,arguments);return l.__reactBoundContext=e,l.__reactBoundMethod=t,l.__reactBoundArguments=i,l},n}function c(e){for(var t in e.__reactAutoBindMap)if(e.__reactAutoBindMap.hasOwnProperty(t)){var n=e.__reactAutoBindMap[t];e[t]=l(e,h.guard(n,e.constructor.displayName+"."+t))}}var p=e(39),d=e(45),f=e(63),h=e(66),m=e(73),v=e(74),y=e(85),g=e(84),C=e(99),b=e(29),E=e(150),_=e(156),w=e(157),x=e(171),D=w({mixins:null}),M=_({DEFINE_ONCE:null,DEFINE_MANY:null,OVERRIDE_BASE:null,DEFINE_MANY_MERGED:null}),T=[],R={mixins:M.DEFINE_MANY,statics:M.DEFINE_MANY,propTypes:M.DEFINE_MANY,contextTypes:M.DEFINE_MANY,childContextTypes:M.DEFINE_MANY,getDefaultProps:M.DEFINE_MANY_MERGED,getInitialState:M.DEFINE_MANY_MERGED,getChildContext:M.DEFINE_MANY_MERGED,render:M.DEFINE_ONCE,componentWillMount:M.DEFINE_MANY,componentDidMount:M.DEFINE_MANY,componentWillReceiveProps:M.DEFINE_MANY,shouldComponentUpdate:M.DEFINE_ONCE,componentWillUpdate:M.DEFINE_MANY,componentDidUpdate:M.DEFINE_MANY,componentWillUnmount:M.DEFINE_MANY,updateComponent:M.OVERRIDE_BASE},I={displayName:function(e,t){e.displayName=t},mixins:function(e,t){if(t)for(var n=0;n<t.length;n++)o(e,t[n])},childContextTypes:function(e,t){n(e,t,y.childContext),e.childContextTypes=b({},e.childContextTypes,t)},contextTypes:function(e,t){n(e,t,y.context),e.contextTypes=b({},e.contextTypes,t)},getDefaultProps:function(e,t){e.getDefaultProps=e.getDefaultProps?s(e.getDefaultProps,t):t},propTypes:function(e,t){n(e,t,y.prop),e.propTypes=b({},e.propTypes,t)},statics:function(e,t){a(e,t)}},N={enumerable:!1,get:function(){var e=this.displayName||this.name||"Component";return x(!1,"%s.type is deprecated. Use %s directly to access the class.",e,e),Object.defineProperty(this,"type",{value:this}),this}},P={replaceState:function(e,t){C.enqueueReplaceState(this,e),t&&C.enqueueCallback(this,t)},isMounted:function(){var e=d.current;null!==e&&(x(e._warnedAboutRefsInRender,"%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",e.getName()||"A component"),e._warnedAboutRefsInRender=!0);var t=m.get(this);return t&&t!==v.currentlyMountingInstance},setProps:function(e,t){C.enqueueSetProps(this,e),t&&C.enqueueCallback(this,t)},replaceProps:function(e,t){C.enqueueReplaceProps(this,e),t&&C.enqueueCallback(this,t)}},O=function(){};b(O.prototype,p.prototype,P);var S={createClass:function(e){var t=function(e,n){x(this instanceof t,"Something is calling a React component directly. Use a factory or JSX instead. See: https://fb.me/react-legacyfactory"),this.__reactAutoBindMap&&c(this),this.props=e,this.context=n,this.state=null;var r=this.getInitialState?this.getInitialState():null;"undefined"==typeof r&&this.getInitialState._isMockFunction&&(r=null),E("object"==typeof r&&!Array.isArray(r),"%s.getInitialState(): must return an object or null",t.displayName||"ReactCompositeComponent"),this.state=r};t.prototype=new O,t.prototype.constructor=t,T.forEach(o.bind(null,t)),o(t,e),t.getDefaultProps&&(t.defaultProps=t.getDefaultProps()),t.getDefaultProps&&(t.getDefaultProps.isReactClassApproved={}),t.prototype.getInitialState&&(t.prototype.getInitialState.isReactClassApproved={}),E(t.prototype.render,"createClass(...): Class specification must implement a `render` method."),x(!t.prototype.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",e.displayName||"A component");for(var n in R)t.prototype[n]||(t.prototype[n]=null);t.type=t;try{Object.defineProperty(t,"type",N)}catch(r){}return t},injection:{injectMixin:function(e){T.push(e)}}};t.exports=S},{150:150,156:156,157:157,171:171,29:29,39:39,45:45,63:63,66:66,73:73,74:74,84:84,85:85,99:99}],39:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */
function n(e,t){this.props=e,this.context=t}var r=e(99),o=e(150),a=e(171);n.prototype.setState=function(e,t){o("object"==typeof e||"function"==typeof e||null==e,"setState(...): takes an object of state variables to update or a function which returns an object of state variables."),a(null!=e,"setState(...): You passed an undefined or null state object; instead, use forceUpdate()."),r.enqueueSetState(this,e),t&&r.enqueueCallback(this,t)},n.prototype.forceUpdate=function(e){r.enqueueForceUpdate(this),e&&r.enqueueCallback(this,e)};var i={getDOMNode:["getDOMNode","Use React.findDOMNode(component) instead."],isMounted:["isMounted","Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],replaceProps:["replaceProps","Instead call React.render again at the top level."],replaceState:["replaceState","Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."],setProps:["setProps","Instead call React.render again at the top level."]},s=function(e,t){try{Object.defineProperty(n.prototype,e,{get:function(){return void a(!1,"%s(...) is deprecated in plain JavaScript React classes. %s",t[0],t[1])}})}catch(r){}};for(var u in i)i.hasOwnProperty(u)&&s(u,i[u]);t.exports=n},{150:150,171:171,99:99}],40:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */
var n=e(50),r=e(77),o={processChildrenUpdates:n.dangerouslyProcessChildrenUpdates,replaceNodeWithMarkupByID:n.dangerouslyReplaceNodeWithMarkupByID,unmountIDFromEnvironment:function(e){r.purgeID(e)}};t.exports=o},{50:50,77:77}],41:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentEnvironment
 */
var n=e(150),r=!1,o={unmountIDFromEnvironment:null,replaceNodeWithMarkupByID:null,processChildrenUpdates:null,injection:{injectEnvironment:function(e){n(!r,"ReactCompositeComponent: injectEnvironment() can only be called once."),o.unmountIDFromEnvironment=e.unmountIDFromEnvironment,o.replaceNodeWithMarkupByID=e.replaceNodeWithMarkupByID,o.processChildrenUpdates=e.processChildrenUpdates,r=!0}}};t.exports=o},{150:150}],42:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule ReactComponentWithPureRenderMixin
*/
var n=e(166),r={shouldComponentUpdate:function(e,t){return!n(this.props,e)||!n(this.state,t)}};t.exports=r},{166:166}],43:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */
function n(e){var t=e._currentElement._owner||null;if(t){var n=t.getName();if(n)return" Check the render method of `"+n+"`."}return""}var r=e(41),o=e(44),a=e(45),i=e(63),s=e(64),u=e(73),l=e(74),c=e(80),p=e(82),d=e(85),f=e(84),h=e(89),m=e(100),v=e(29),y=e(130),g=e(150),C=e(167),b=e(171),E=1,_={construct:function(e){this._currentElement=e,this._rootNodeID=null,this._instance=null,this._pendingElement=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._renderedComponent=null,this._context=null,this._mountOrder=0,this._isTopLevel=!1,this._pendingCallbacks=null},mountComponent:function(e,t,n){this._context=n,this._mountOrder=E++,this._rootNodeID=e;var r=this._processProps(this._currentElement.props),o=this._processContext(this._currentElement._context),a=c.getComponentClassForElement(this._currentElement),i=new a(r,o);b(null!=i.render,"%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render` in your component or you may have accidentally tried to render an element whose type is a function that isn't a React component.",a.displayName||a.name||"Component"),i.props=r,i.context=o,i.refs=y,this._instance=i,u.set(i,this),this._warnIfContextsDiffer(this._currentElement._context,n),b(!i.getInitialState||i.getInitialState.isReactClassApproved,"getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?",this.getName()||"a component"),b(!i.getDefaultProps||i.getDefaultProps.isReactClassApproved,"getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.",this.getName()||"a component"),b(!i.propTypes,"propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.",this.getName()||"a component"),b(!i.contextTypes,"contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.",this.getName()||"a component"),b("function"!=typeof i.componentShouldUpdate,"%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.",this.getName()||"A component");var s=i.state;void 0===s&&(i.state=s=null),g("object"==typeof s&&!Array.isArray(s),"%s.state: must be set to an object or null",this.getName()||"ReactCompositeComponent"),this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1;var p,d,f=l.currentlyMountingInstance;l.currentlyMountingInstance=this;try{i.componentWillMount&&(i.componentWillMount(),this._pendingStateQueue&&(i.state=this._processPendingState(i.props,i.context))),p=this._getValidatedChildContext(n),d=this._renderValidatedComponent(p)}finally{l.currentlyMountingInstance=f}this._renderedComponent=this._instantiateReactComponent(d,this._currentElement.type);var m=h.mountComponent(this._renderedComponent,e,t,this._mergeChildContext(n,p));return i.componentDidMount&&t.getReactMountReady().enqueue(i.componentDidMount,i),m},unmountComponent:function(){var e=this._instance;if(e.componentWillUnmount){var t=l.currentlyUnmountingInstance;l.currentlyUnmountingInstance=this;try{e.componentWillUnmount()}finally{l.currentlyUnmountingInstance=t}}h.unmountComponent(this._renderedComponent),this._renderedComponent=null,this._pendingStateQueue=null,this._pendingReplaceState=!1,this._pendingForceUpdate=!1,this._pendingCallbacks=null,this._pendingElement=null,this._context=null,this._rootNodeID=null,u.remove(e)},_setPropsInternal:function(e,t){var n=this._pendingElement||this._currentElement;this._pendingElement=i.cloneAndReplaceProps(n,v({},n.props,e)),m.enqueueUpdate(this,t)},_maskContext:function(e){var t=null;if("string"==typeof this._currentElement.type)return y;var n=this._currentElement.type.contextTypes;if(!n)return y;t={};for(var r in n)t[r]=e[r];return t},_processContext:function(e){var t=this._maskContext(e),n=c.getComponentClassForElement(this._currentElement);return n.contextTypes&&this._checkPropTypes(n.contextTypes,t,d.context),t},_getValidatedChildContext:function(){var e=this._instance,t=e.getChildContext&&e.getChildContext();if(t){g("object"==typeof e.constructor.childContextTypes,"%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().",this.getName()||"ReactCompositeComponent"),this._checkPropTypes(e.constructor.childContextTypes,t,d.childContext);for(var n in t)g(n in e.constructor.childContextTypes,'%s.getChildContext(): key "%s" is not defined in childContextTypes.',this.getName()||"ReactCompositeComponent",n);return t}return null},_mergeChildContext:function(e,t){return t?v({},e,t):e},_processProps:function(e){var t=c.getComponentClassForElement(this._currentElement);return t.propTypes&&this._checkPropTypes(t.propTypes,e,d.prop),e},_checkPropTypes:function(e,t,r){var o=this.getName();for(var a in e)if(e.hasOwnProperty(a)){var i;try{g("function"==typeof e[a],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",o||"React class",f[r],a),i=e[a](t,a,o,r)}catch(s){i=s}if(i instanceof Error){var u=n(this);r===d.prop?b(!1,"Failed Composite propType: %s%s",i.message,u):b(!1,"Failed Context Types: %s%s",i.message,u)}}},receiveComponent:function(e,t,n){var r=this._currentElement,o=this._context;this._pendingElement=null,this.updateComponent(t,r,e,o,n)},performUpdateIfNecessary:function(e){null!=this._pendingElement&&h.receiveComponent(this,this._pendingElement||this._currentElement,e,this._context),(null!==this._pendingStateQueue||this._pendingForceUpdate)&&(s.checkAndWarnForMutatedProps(this._currentElement),this.updateComponent(e,this._currentElement,this._currentElement,this._context,this._context))},_warnIfContextsDiffer:function(e,t){e=this._maskContext(e),t=this._maskContext(t);for(var n=Object.keys(t).sort(),r=this.getName()||"ReactCompositeComponent",o=0;o<n.length;o++){var a=n[o];b(e[a]===t[a],"owner-based and parent-based contexts differ (values: `%s` vs `%s`) for key (%s) while mounting %s (see: http://fb.me/react-context-by-parent)",e[a],t[a],a,r)}},updateComponent:function(e,t,n,r,o){var a=this._instance,i=a.context,s=a.props;t!==n&&(i=this._processContext(n._context),s=this._processProps(n.props),null!=o&&this._warnIfContextsDiffer(n._context,o),a.componentWillReceiveProps&&a.componentWillReceiveProps(s,i));var u=this._processPendingState(s,i),l=this._pendingForceUpdate||!a.shouldComponentUpdate||a.shouldComponentUpdate(s,u,i);b("undefined"!=typeof l,"%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.",this.getName()||"ReactCompositeComponent"),l?(this._pendingForceUpdate=!1,this._performComponentUpdate(n,s,u,i,e,o)):(this._currentElement=n,this._context=o,a.props=s,a.state=u,a.context=i)},_processPendingState:function(e,t){var n=this._instance,r=this._pendingStateQueue,o=this._pendingReplaceState;if(this._pendingReplaceState=!1,this._pendingStateQueue=null,!r)return n.state;if(o&&1===r.length)return r[0];for(var a=v({},o?r[0]:n.state),i=o?1:0;i<r.length;i++){var s=r[i];v(a,"function"==typeof s?s.call(n,a,e,t):s)}return a},_performComponentUpdate:function(e,t,n,r,o,a){var i=this._instance,s=i.props,u=i.state,l=i.context;i.componentWillUpdate&&i.componentWillUpdate(t,n,r),this._currentElement=e,this._context=a,i.props=t,i.state=n,i.context=r,this._updateRenderedComponent(o,a),i.componentDidUpdate&&o.getReactMountReady().enqueue(i.componentDidUpdate.bind(i,s,u,l),i)},_updateRenderedComponent:function(e,t){var n=this._renderedComponent,r=n._currentElement,o=this._getValidatedChildContext(),a=this._renderValidatedComponent(o);if(C(r,a))h.receiveComponent(n,a,e,this._mergeChildContext(t,o));else{var i=this._rootNodeID,s=n._rootNodeID;h.unmountComponent(n),this._renderedComponent=this._instantiateReactComponent(a,this._currentElement.type);var u=h.mountComponent(this._renderedComponent,i,e,this._mergeChildContext(t,o));this._replaceNodeWithMarkupByID(s,u)}},_replaceNodeWithMarkupByID:function(e,t){r.replaceNodeWithMarkupByID(e,t)},_renderValidatedComponentWithoutOwnerOrContext:function(){var e=this._instance,t=e.render();return"undefined"==typeof t&&e.render._isMockFunction&&(t=null),t},_renderValidatedComponent:function(e){var t,n=o.current;o.current=this._mergeChildContext(this._currentElement._context,e),a.current=this;try{t=this._renderValidatedComponentWithoutOwnerOrContext()}finally{o.current=n,a.current=null}return g(null===t||t===!1||i.isValidElement(t),"%s.render(): A valid ReactComponent must be returned. You may have returned undefined, an array or some other invalid object.",this.getName()||"ReactCompositeComponent"),t},attachRef:function(e,t){var n=this.getPublicInstance(),r=n.refs===y?n.refs={}:n.refs;r[e]=t.getPublicInstance()},detachRef:function(e){var t=this.getPublicInstance().refs;delete t[e]},getName:function(){var e=this._currentElement.type,t=this._instance&&this._instance.constructor;return e.displayName||t&&t.displayName||e.name||t&&t.name||null},getPublicInstance:function(){return this._instance},_instantiateReactComponent:null};p.measureMethods(_,"ReactCompositeComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent",_renderValidatedComponent:"_renderValidatedComponent"});var w={Mixin:_};t.exports=w},{100:100,130:130,150:150,167:167,171:171,29:29,41:41,44:44,45:45,63:63,64:64,73:73,74:74,80:80,82:82,84:84,85:85,89:89}],44:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactContext
 */
var n=e(29),r=e(130),o=e(171),a=!1,i={current:r,withContext:function(e,t){o(a,"withContext is deprecated and will be removed in a future version. Use a wrapper component with getChildContext instead."),a=!0;var r,s=i.current;i.current=n({},s,e);try{r=t()}finally{i.current=s}return r}};t.exports=i},{130:130,171:171,29:29}],45:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */
var n={current:null};t.exports=n},{}],46:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 * @typechecks static-only
 */
function n(e){return r.createFactory(e)}var r=(e(63),e(64)),o=e(158),a=o({a:"a",abbr:"abbr",address:"address",area:"area",article:"article",aside:"aside",audio:"audio",b:"b",base:"base",bdi:"bdi",bdo:"bdo",big:"big",blockquote:"blockquote",body:"body",br:"br",button:"button",canvas:"canvas",caption:"caption",cite:"cite",code:"code",col:"col",colgroup:"colgroup",data:"data",datalist:"datalist",dd:"dd",del:"del",details:"details",dfn:"dfn",dialog:"dialog",div:"div",dl:"dl",dt:"dt",em:"em",embed:"embed",fieldset:"fieldset",figcaption:"figcaption",figure:"figure",footer:"footer",form:"form",h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",head:"head",header:"header",hr:"hr",html:"html",i:"i",iframe:"iframe",img:"img",input:"input",ins:"ins",kbd:"kbd",keygen:"keygen",label:"label",legend:"legend",li:"li",link:"link",main:"main",map:"map",mark:"mark",menu:"menu",menuitem:"menuitem",meta:"meta",meter:"meter",nav:"nav",noscript:"noscript",object:"object",ol:"ol",optgroup:"optgroup",option:"option",output:"output",p:"p",param:"param",picture:"picture",pre:"pre",progress:"progress",q:"q",rp:"rp",rt:"rt",ruby:"ruby",s:"s",samp:"samp",script:"script",section:"section",select:"select",small:"small",source:"source",span:"span",strong:"strong",style:"style",sub:"sub",summary:"summary",sup:"sup",table:"table",tbody:"tbody",td:"td",textarea:"textarea",tfoot:"tfoot",th:"th",thead:"thead",time:"time",title:"title",tr:"tr",track:"track",u:"u",ul:"ul","var":"var",video:"video",wbr:"wbr",circle:"circle",clipPath:"clipPath",defs:"defs",ellipse:"ellipse",g:"g",line:"line",linearGradient:"linearGradient",mask:"mask",path:"path",pattern:"pattern",polygon:"polygon",polyline:"polyline",radialGradient:"radialGradient",rect:"rect",stop:"stop",svg:"svg",text:"text",tspan:"tspan"},n);t.exports=a},{158:158,63:63,64:64}],47:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */
var n=e(2),r=e(32),o=e(38),a=e(63),i=e(156),s=a.createFactory("button"),u=i({onClick:!0,onDoubleClick:!0,onMouseDown:!0,onMouseMove:!0,onMouseUp:!0,onClickCapture:!0,onDoubleClickCapture:!0,onMouseDownCapture:!0,onMouseMoveCapture:!0,onMouseUpCapture:!0}),l=o.createClass({displayName:"ReactDOMButton",tagName:"BUTTON",mixins:[n,r],render:function(){var e={};for(var t in this.props)!this.props.hasOwnProperty(t)||this.props.disabled&&u[t]||(e[t]=this.props[t]);return s(e,this.props.children)}});t.exports=l},{156:156,2:2,32:32,38:38,63:63}],48:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */
function n(e){e&&(null!=e.dangerouslySetInnerHTML&&(v(null==e.children,"Can only set one of `children` or `props.dangerouslySetInnerHTML`."),v("object"==typeof e.dangerouslySetInnerHTML&&"__html"in e.dangerouslySetInnerHTML,"`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://fb.me/react-invariant-dangerously-set-inner-html for more information.")),C(null==e.innerHTML,"Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."),C(!e.contentEditable||null==e.children,"A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."),v(null==e.style||"object"==typeof e.style,"The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX."))}function r(e,t,n,r){C("onScroll"!==t||y("scroll",!0),"This browser doesn't support the `onScroll` event");var o=p.findReactContainerForID(e);if(o){var a=o.nodeType===D?o.ownerDocument:o;E(t,a)}r.getPutListenerQueue().enqueuePutListener(e,t,n)}function o(e){N.call(I,e)||(v(R.test(e),"Invalid tag: %s",e),I[e]=!0)}function a(e){o(e),this._tag=e,this._renderedChildren=null,this._previousStyleCopy=null,this._rootNodeID=null}var i=e(6),s=e(11),u=e(12),l=e(33),c=e(40),p=e(77),d=e(78),f=e(82),h=e(29),m=e(131),v=e(150),y=e(151),g=e(157),C=e(171),b=l.deleteListener,E=l.listenTo,_=l.registrationNameModules,w={string:!0,number:!0},x=g({style:null}),D=1,M=null,T={area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0},R=/^[a-zA-Z][a-zA-Z:_\.\-\d]*$/,I={},N={}.hasOwnProperty;a.displayName="ReactDOMComponent",a.Mixin={construct:function(e){this._currentElement=e},mountComponent:function(e,t,r){this._rootNodeID=e,n(this._currentElement.props);var o=T[this._tag]?"":"</"+this._tag+">";return this._createOpenTagMarkupAndPutListeners(t)+this._createContentMarkup(t,r)+o},_createOpenTagMarkupAndPutListeners:function(e){var t=this._currentElement.props,n="<"+this._tag;for(var o in t)if(t.hasOwnProperty(o)){var a=t[o];if(null!=a)if(_.hasOwnProperty(o))r(this._rootNodeID,o,a,e);else{o===x&&(a&&(a=this._previousStyleCopy=h({},t.style)),a=i.createMarkupForStyles(a));var s=u.createMarkupForProperty(o,a);s&&(n+=" "+s)}}if(e.renderToStaticMarkup)return n+">";var l=u.createMarkupForID(this._rootNodeID);return n+" "+l+">"},_createContentMarkup:function(e,t){var n="";("listing"===this._tag||"pre"===this._tag||"textarea"===this._tag)&&(n="\n");var r=this._currentElement.props,o=r.dangerouslySetInnerHTML;if(null!=o){if(null!=o.__html)return n+o.__html}else{var a=w[typeof r.children]?r.children:null,i=null!=a?null:r.children;if(null!=a)return n+m(a);if(null!=i){var s=this.mountChildren(i,e,t);return n+s.join("")}}return n},receiveComponent:function(e,t,n){var r=this._currentElement;this._currentElement=e,this.updateComponent(t,r,e,n)},updateComponent:function(e,t,r,o){n(this._currentElement.props),this._updateDOMProperties(t.props,e),this._updateDOMChildren(t.props,e,o)},_updateDOMProperties:function(e,t){var n,o,a,i=this._currentElement.props;for(n in e)if(!i.hasOwnProperty(n)&&e.hasOwnProperty(n))if(n===x){var u=this._previousStyleCopy;for(o in u)u.hasOwnProperty(o)&&(a=a||{},a[o]="");this._previousStyleCopy=null}else _.hasOwnProperty(n)?b(this._rootNodeID,n):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.deletePropertyByID(this._rootNodeID,n);for(n in i){var l=i[n],c=n===x?this._previousStyleCopy:e[n];if(i.hasOwnProperty(n)&&l!==c)if(n===x)if(l?l=this._previousStyleCopy=h({},l):this._previousStyleCopy=null,c){for(o in c)!c.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(a=a||{},a[o]="");for(o in l)l.hasOwnProperty(o)&&c[o]!==l[o]&&(a=a||{},a[o]=l[o])}else a=l;else _.hasOwnProperty(n)?r(this._rootNodeID,n,l,t):(s.isStandardName[n]||s.isCustomAttribute(n))&&M.updatePropertyByID(this._rootNodeID,n,l)}a&&M.updateStylesByID(this._rootNodeID,a)},_updateDOMChildren:function(e,t,n){var r=this._currentElement.props,o=w[typeof e.children]?e.children:null,a=w[typeof r.children]?r.children:null,i=e.dangerouslySetInnerHTML&&e.dangerouslySetInnerHTML.__html,s=r.dangerouslySetInnerHTML&&r.dangerouslySetInnerHTML.__html,u=null!=o?null:e.children,l=null!=a?null:r.children,c=null!=o||null!=i,p=null!=a||null!=s;null!=u&&null==l?this.updateChildren(null,t,n):c&&!p&&this.updateTextContent(""),null!=a?o!==a&&this.updateTextContent(""+a):null!=s?i!==s&&M.updateInnerHTMLByID(this._rootNodeID,s):null!=l&&this.updateChildren(l,t,n)},unmountComponent:function(){this.unmountChildren(),l.deleteAllListeners(this._rootNodeID),c.unmountIDFromEnvironment(this._rootNodeID),this._rootNodeID=null}},f.measureMethods(a,"ReactDOMComponent",{mountComponent:"mountComponent",updateComponent:"updateComponent"}),h(a.prototype,a.Mixin,d.Mixin),a.injection={injectIDOperations:function(e){a.BackendIDOperations=M=e}},t.exports=a},{11:11,12:12,131:131,150:150,151:151,157:157,171:171,29:29,33:33,40:40,6:6,77:77,78:78,82:82}],49:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMForm
 */
var n=e(16),r=e(27),o=e(32),a=e(38),i=e(63),s=i.createFactory("form"),u=a.createClass({displayName:"ReactDOMForm",tagName:"FORM",mixins:[o,r],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topReset,"reset"),this.trapBubbledEvent(n.topLevelTypes.topSubmit,"submit")}});t.exports=u},{16:16,27:27,32:32,38:38,63:63}],50:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */
var n=e(6),r=e(10),o=e(12),a=e(77),i=e(82),s=e(150),u=e(164),l={dangerouslySetInnerHTML:"`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.",style:"`style` must be set using `updateStylesByID()`."},c={updatePropertyByID:function(e,t,n){var r=a.getNode(e);s(!l.hasOwnProperty(t),"updatePropertyByID(...): %s",l[t]),null!=n?o.setValueForProperty(r,t,n):o.deleteValueForProperty(r,t)},deletePropertyByID:function(e,t,n){var r=a.getNode(e);s(!l.hasOwnProperty(t),"updatePropertyByID(...): %s",l[t]),o.deleteValueForProperty(r,t,n)},updateStylesByID:function(e,t){var r=a.getNode(e);n.setValueForStyles(r,t)},updateInnerHTMLByID:function(e,t){var n=a.getNode(e);u(n,t)},updateTextContentByID:function(e,t){var n=a.getNode(e);r.updateTextContent(n,t)},dangerouslyReplaceNodeWithMarkupByID:function(e,t){var n=a.getNode(e);r.dangerouslyReplaceNodeWithMarkup(n,t)},dangerouslyProcessChildrenUpdates:function(e,t){for(var n=0;n<e.length;n++)e[n].parentNode=a.getNode(e[n].parentID);r.processUpdates(e,t)}};i.measureMethods(c,"ReactDOMIDOperations",{updatePropertyByID:"updatePropertyByID",deletePropertyByID:"deletePropertyByID",updateStylesByID:"updateStylesByID",updateInnerHTMLByID:"updateInnerHTMLByID",updateTextContentByID:"updateTextContentByID",dangerouslyReplaceNodeWithMarkupByID:"dangerouslyReplaceNodeWithMarkupByID",dangerouslyProcessChildrenUpdates:"dangerouslyProcessChildrenUpdates"}),t.exports=c},{10:10,12:12,150:150,164:164,6:6,77:77,82:82}],51:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIframe
 */
var n=e(16),r=e(27),o=e(32),a=e(38),i=e(63),s=i.createFactory("iframe"),u=a.createClass({displayName:"ReactDOMIframe",tagName:"IFRAME",mixins:[o,r],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load")}});t.exports=u},{16:16,27:27,32:32,38:38,63:63}],52:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMImg
 */
var n=e(16),r=e(27),o=e(32),a=e(38),i=e(63),s=i.createFactory("img"),u=a.createClass({displayName:"ReactDOMImg",tagName:"IMG",mixins:[o,r],render:function(){return s(this.props)},componentDidMount:function(){this.trapBubbledEvent(n.topLevelTypes.topLoad,"load"),this.trapBubbledEvent(n.topLevelTypes.topError,"error")}});t.exports=u},{16:16,27:27,32:32,38:38,63:63}],53:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */
function n(){this.isMounted()&&this.forceUpdate()}var r=e(2),o=e(12),a=e(26),i=e(32),s=e(38),u=e(63),l=e(77),c=e(100),p=e(29),d=e(150),f=u.createFactory("input"),h={},m=s.createClass({displayName:"ReactDOMInput",tagName:"INPUT",mixins:[r,a.Mixin,i],getInitialState:function(){var e=this.props.defaultValue;return{initialChecked:this.props.defaultChecked||!1,initialValue:null!=e?e:null}},render:function(){var e=p({},this.props);e.defaultChecked=null,e.defaultValue=null;var t=a.getValue(this);e.value=null!=t?t:this.state.initialValue;var n=a.getChecked(this);return e.checked=null!=n?n:this.state.initialChecked,e.onChange=this._handleChange,f(e,this.props.children)},componentDidMount:function(){var e=l.getID(this.getDOMNode());h[e]=this},componentWillUnmount:function(){var e=this.getDOMNode(),t=l.getID(e);delete h[t]},componentDidUpdate:function(){var e=this.getDOMNode();null!=this.props.checked&&o.setValueForProperty(e,"checked",this.props.checked||!1);var t=a.getValue(this);null!=t&&o.setValueForProperty(e,"value",""+t)},_handleChange:function(e){var t,r=a.getOnChange(this);r&&(t=r.call(this,e)),c.asap(n,this);var o=this.props.name;if("radio"===this.props.type&&null!=o){for(var i=this.getDOMNode(),s=i;s.parentNode;)s=s.parentNode;for(var u=s.querySelectorAll("input[name="+JSON.stringify(""+o)+'][type="radio"]'),p=0,f=u.length;f>p;p++){var m=u[p];if(m!==i&&m.form===i.form){var v=l.getID(m);d(v,"ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");var y=h[v];d(y,"ReactDOMInput: Unknown radio button ID %s.",v),c.asap(n,y)}}}return t}});t.exports=m},{100:100,12:12,150:150,2:2,26:26,29:29,32:32,38:38,63:63,77:77}],54:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */
var n=e(32),r=e(38),o=e(63),a=e(171),i=o.createFactory("option"),s=r.createClass({displayName:"ReactDOMOption",tagName:"OPTION",mixins:[n],componentWillMount:function(){a(null==this.props.selected,"Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.")},render:function(){return i(this.props,this.props.children)}});t.exports=s},{171:171,32:32,38:38,63:63}],55:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */
function n(){if(this._pendingUpdate){this._pendingUpdate=!1;var e=i.getValue(this);null!=e&&this.isMounted()&&o(this,e)}}function r(e,t){if(null==e[t])return null;if(e.multiple){if(!Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be an array if `multiple` is true.")}else if(Array.isArray(e[t]))return new Error("The `"+t+"` prop supplied to <select> must be a scalar value if `multiple` is false.")}function o(e,t){var n,r,o,a=e.getDOMNode().options;if(e.props.multiple){for(n={},r=0,o=t.length;o>r;r++)n[""+t[r]]=!0;for(r=0,o=a.length;o>r;r++){var i=n.hasOwnProperty(a[r].value);a[r].selected!==i&&(a[r].selected=i)}}else{for(n=""+t,r=0,o=a.length;o>r;r++)if(a[r].value===n)return void(a[r].selected=!0);a.length&&(a[0].selected=!0)}}var a=e(2),i=e(26),s=e(32),u=e(38),l=e(63),c=e(100),p=e(29),d=l.createFactory("select"),f=u.createClass({displayName:"ReactDOMSelect",tagName:"SELECT",mixins:[a,i.Mixin,s],propTypes:{defaultValue:r,value:r},render:function(){var e=p({},this.props);return e.onChange=this._handleChange,e.value=null,d(e,this.props.children)},componentWillMount:function(){this._pendingUpdate=!1},componentDidMount:function(){var e=i.getValue(this);null!=e?o(this,e):null!=this.props.defaultValue&&o(this,this.props.defaultValue)},componentDidUpdate:function(e){var t=i.getValue(this);null!=t?(this._pendingUpdate=!1,o(this,t)):!e.multiple!=!this.props.multiple&&(null!=this.props.defaultValue?o(this,this.props.defaultValue):o(this,this.props.multiple?[]:""))},_handleChange:function(e){var t,r=i.getOnChange(this);return r&&(t=r.call(this,e)),this._pendingUpdate=!0,c.asap(n,this),t}});t.exports=f},{100:100,2:2,26:26,29:29,32:32,38:38,63:63}],56:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */
function n(e,t,n,r){return e===n&&t===r}function r(e){var t=document.selection,n=t.createRange(),r=n.text.length,o=n.duplicate();o.moveToElementText(e),o.setEndPoint("EndToStart",n);var a=o.text.length,i=a+r;return{start:a,end:i}}function o(e){var t=window.getSelection&&window.getSelection();if(!t||0===t.rangeCount)return null;var r=t.anchorNode,o=t.anchorOffset,a=t.focusNode,i=t.focusOffset,s=t.getRangeAt(0),u=n(t.anchorNode,t.anchorOffset,t.focusNode,t.focusOffset),l=u?0:s.toString().length,c=s.cloneRange();c.selectNodeContents(e),c.setEnd(s.startContainer,s.startOffset);var p=n(c.startContainer,c.startOffset,c.endContainer,c.endOffset),d=p?0:c.toString().length,f=d+l,h=document.createRange();h.setStart(r,o),h.setEnd(a,i);var m=h.collapsed;return{start:m?f:d,end:m?d:f}}function a(e,t){var n,r,o=document.selection.createRange().duplicate();"undefined"==typeof t.end?(n=t.start,r=n):t.start>t.end?(n=t.end,r=t.start):(n=t.start,r=t.end),o.moveToElementText(e),o.moveStart("character",n),o.setEndPoint("EndToStart",o),o.moveEnd("character",r-n),o.select()}function i(e,t){if(window.getSelection){var n=window.getSelection(),r=e[l()].length,o=Math.min(t.start,r),a="undefined"==typeof t.end?o:Math.min(t.end,r);if(!n.extend&&o>a){var i=a;a=o,o=i}var s=u(e,o),c=u(e,a);if(s&&c){var p=document.createRange();p.setStart(s.node,s.offset),n.removeAllRanges(),o>a?(n.addRange(p),n.extend(c.node,c.offset)):(p.setEnd(c.node,c.offset),n.addRange(p))}}}var s=e(22),u=e(143),l=e(145),c=s.canUseDOM&&"selection"in document&&!("getSelection"in window),p={getOffsets:c?r:o,setOffsets:c?a:i};t.exports=p},{143:143,145:145,22:22}],57:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextComponent
 * @typechecks static-only
 */
var n=e(12),r=e(40),o=e(48),a=e(29),i=e(131),s=function(){};a(s.prototype,{construct:function(e){this._currentElement=e,this._stringText=""+e,this._rootNodeID=null,this._mountIndex=0},mountComponent:function(e,t){this._rootNodeID=e;var r=i(this._stringText);return t.renderToStaticMarkup?r:"<span "+n.createMarkupForID(e)+">"+r+"</span>"},receiveComponent:function(e){if(e!==this._currentElement){this._currentElement=e;var t=""+e;t!==this._stringText&&(this._stringText=t,o.BackendIDOperations.updateTextContentByID(this._rootNodeID,t))}},unmountComponent:function(){r.unmountIDFromEnvironment(this._rootNodeID)}}),t.exports=s},{12:12,131:131,29:29,40:40,48:48}],58:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */
function n(){this.isMounted()&&this.forceUpdate()}var r=e(2),o=e(12),a=e(26),i=e(32),s=e(38),u=e(63),l=e(100),c=e(29),p=e(150),d=e(171),f=u.createFactory("textarea"),h=s.createClass({displayName:"ReactDOMTextarea",tagName:"TEXTAREA",mixins:[r,a.Mixin,i],getInitialState:function(){var e=this.props.defaultValue,t=this.props.children;null!=t&&(d(!1,"Use the `defaultValue` or `value` props instead of setting children on <textarea>."),p(null==e,"If you supply `defaultValue` on a <textarea>, do not pass children."),Array.isArray(t)&&(p(t.length<=1,"<textarea> can only have at most one child."),t=t[0]),e=""+t),null==e&&(e="");var n=a.getValue(this);return{initialValue:""+(null!=n?n:e)}},render:function(){var e=c({},this.props);return p(null==e.dangerouslySetInnerHTML,"`dangerouslySetInnerHTML` does not make sense on <textarea>."),e.defaultValue=null,e.value=null,e.onChange=this._handleChange,f(e,this.state.initialValue)},componentDidUpdate:function(){var e=a.getValue(this);if(null!=e){var t=this.getDOMNode();o.setValueForProperty(t,"value",""+e)}},_handleChange:function(e){var t,r=a.getOnChange(this);return r&&(t=r.call(this,e)),l.asap(n,this),t}});t.exports=h},{100:100,12:12,150:150,171:171,2:2,26:26,29:29,32:32,38:38,63:63}],59:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */
function n(){this.reinitializeTransaction()}var r=e(100),o=e(116),a=e(29),i=e(129),s={initialize:i,close:function(){p.isBatchingUpdates=!1}},u={initialize:i,close:r.flushBatchedUpdates.bind(r)},l=[u,s];a(n.prototype,o.Mixin,{getTransactionWrappers:function(){return l}});var c=new n,p={isBatchingUpdates:!1,batchedUpdates:function(e,t,n,r,o){var a=p.isBatchingUpdates;p.isBatchingUpdates=!0,a?e(t,n,r,o):c.perform(e,null,t,n,r,o)}};t.exports=p},{100:100,116:116,129:129,29:29}],60:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */
function n(e){return f.createClass({tagName:e.toUpperCase(),render:function(){return new T(e,null,null,null,null,this.props)}})}function r(){I.EventEmitter.injectReactEventListener(R),I.EventPluginHub.injectEventPluginOrder(s),I.EventPluginHub.injectInstanceHandle(N),I.EventPluginHub.injectMount(P),I.EventPluginHub.injectEventPluginsByName({SimpleEventPlugin:A,EnterLeaveEventPlugin:u,ChangeEventPlugin:a,MobileSafariClickEventPlugin:p,SelectEventPlugin:S,BeforeInputEventPlugin:o}),I.NativeComponent.injectGenericComponentClass(v),I.NativeComponent.injectTextComponentClass(M),I.NativeComponent.injectAutoWrapper(n),I.Class.injectMixin(d),I.NativeComponent.injectComponentClasses({button:y,form:g,iframe:E,img:C,input:_,option:w,select:x,textarea:D,html:L("html"),head:L("head"),body:L("body")}),I.DOMProperty.injectDOMPropertyConfig(c),I.DOMProperty.injectDOMPropertyConfig(U),I.EmptyComponent.injectEmptyComponent("noscript"),I.Updates.injectReconcileTransaction(O),I.Updates.injectBatchingStrategy(m),I.RootIndex.injectCreateReactRootIndex(l.canUseDOM?i.createReactRootIndex:k.createReactRootIndex),I.Component.injectEnvironment(h),I.DOMComponent.injectIDOperations(b);var t=l.canUseDOM&&window.location.href||"";if(/[?&]react_perf\b/.test(t)){var r=e(61);r.start()}}var o=e(3),a=e(8),i=e(9),s=e(14),u=e(15),l=e(22),c=e(24),p=e(28),d=e(32),f=e(38),h=e(40),m=e(59),v=e(48),y=e(47),g=e(49),C=e(52),b=e(50),E=e(51),_=e(53),w=e(54),x=e(55),D=e(58),M=e(57),T=e(63),R=e(68),I=e(70),N=e(72),P=e(77),O=e(88),S=e(102),k=e(103),A=e(104),U=e(101),L=e(125);t.exports={inject:r}},{101:101,102:102,103:103,104:104,125:125,14:14,15:15,22:22,24:24,28:28,3:3,32:32,38:38,40:40,47:47,48:48,49:49,50:50,51:51,52:52,53:53,54:54,55:55,57:57,58:58,59:59,61:61,63:63,68:68,70:70,72:72,77:77,8:8,88:88,9:9}],61:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */
function n(e){return Math.floor(100*e)/100}function r(e,t,n){e[t]=(e[t]||0)+n}var o=e(11),a=e(62),i=e(77),s=e(82),u=e(162),l={_allMeasurements:[],_mountStack:[0],_injected:!1,start:function(){l._injected||s.injection.injectMeasure(l.measure),l._allMeasurements.length=0,s.enableMeasure=!0},stop:function(){s.enableMeasure=!1},getLastMeasurements:function(){return l._allMeasurements},printExclusive:function(e){e=e||l._allMeasurements;var t=a.getExclusiveSummary(e);console.table(t.map(function(e){return{"Component class name":e.componentName,"Total inclusive time (ms)":n(e.inclusive),"Exclusive mount time (ms)":n(e.exclusive),"Exclusive render time (ms)":n(e.render),"Mount time per instance (ms)":n(e.exclusive/e.count),"Render time per instance (ms)":n(e.render/e.count),Instances:e.count}}))},printInclusive:function(e){e=e||l._allMeasurements;var t=a.getInclusiveSummary(e);console.table(t.map(function(e){return{"Owner > component":e.componentName,"Inclusive time (ms)":n(e.time),Instances:e.count}})),console.log("Total time:",a.getTotalTime(e).toFixed(2)+" ms")},getMeasurementsSummaryMap:function(e){var t=a.getInclusiveSummary(e,!0);return t.map(function(e){return{"Owner > component":e.componentName,"Wasted time (ms)":e.time,Instances:e.count}})},printWasted:function(e){e=e||l._allMeasurements,console.table(l.getMeasurementsSummaryMap(e)),console.log("Total time:",a.getTotalTime(e).toFixed(2)+" ms")},printDOM:function(e){e=e||l._allMeasurements;var t=a.getDOMSummary(e);console.table(t.map(function(e){var t={};return t[o.ID_ATTRIBUTE_NAME]=e.id,t.type=e.type,t.args=JSON.stringify(e.args),t})),console.log("Total time:",a.getTotalTime(e).toFixed(2)+" ms")},_recordWrite:function(e,t,n,r){var o=l._allMeasurements[l._allMeasurements.length-1].writes;o[e]=o[e]||[],o[e].push({type:t,time:n,args:r})},measure:function(e,t,n){return function(){for(var o=[],a=0,s=arguments.length;s>a;a++)o.push(arguments[a]);var c,p,d;if("_renderNewRootComponent"===t||"flushBatchedUpdates"===t)return l._allMeasurements.push({exclusive:{},inclusive:{},render:{},counts:{},writes:{},displayNames:{},totalTime:0}),d=u(),p=n.apply(this,o),l._allMeasurements[l._allMeasurements.length-1].totalTime=u()-d,p;if("_mountImageIntoNode"===t||"ReactDOMIDOperations"===e){if(d=u(),p=n.apply(this,o),c=u()-d,"_mountImageIntoNode"===t){var f=i.getID(o[1]);l._recordWrite(f,t,c,o[0])}else"dangerouslyProcessChildrenUpdates"===t?o[0].forEach(function(e){var t={};null!==e.fromIndex&&(t.fromIndex=e.fromIndex),null!==e.toIndex&&(t.toIndex=e.toIndex),null!==e.textContent&&(t.textContent=e.textContent),null!==e.markupIndex&&(t.markup=o[1][e.markupIndex]),l._recordWrite(e.parentID,e.type,c,t)}):l._recordWrite(o[0],t,c,Array.prototype.slice.call(o,1));return p}if("ReactCompositeComponent"!==e||"mountComponent"!==t&&"updateComponent"!==t&&"_renderValidatedComponent"!==t)return n.apply(this,o);if("string"==typeof this._currentElement.type)return n.apply(this,o);var h="mountComponent"===t?o[0]:this._rootNodeID,m="_renderValidatedComponent"===t,v="mountComponent"===t,y=l._mountStack,g=l._allMeasurements[l._allMeasurements.length-1];if(m?r(g.counts,h,1):v&&y.push(0),d=u(),p=n.apply(this,o),c=u()-d,m)r(g.render,h,c);else if(v){var C=y.pop();y[y.length-1]+=c,r(g.exclusive,h,c-C),r(g.inclusive,h,c)}else r(g.inclusive,h,c);return g.displayNames[h]={current:this.getName(),owner:this._currentElement._owner?this._currentElement._owner.getName():"<root>"},p}}};t.exports=l},{11:11,162:162,62:62,77:77,82:82}],62:[function(e,t){function n(e){for(var t=0,n=0;n<e.length;n++){var r=e[n];t+=r.totalTime}return t}function r(e){for(var t=[],n=0;n<e.length;n++){var r,o=e[n];for(r in o.writes)o.writes[r].forEach(function(e){t.push({id:r,type:l[e.type]||e.type,args:e.args})})}return t}function o(e){for(var t,n={},r=0;r<e.length;r++){var o=e[r],a=s({},o.exclusive,o.inclusive);for(var i in a)t=o.displayNames[i].current,n[t]=n[t]||{componentName:t,inclusive:0,exclusive:0,render:0,count:0},o.render[i]&&(n[t].render+=o.render[i]),o.exclusive[i]&&(n[t].exclusive+=o.exclusive[i]),o.inclusive[i]&&(n[t].inclusive+=o.inclusive[i]),o.counts[i]&&(n[t].count+=o.counts[i])}var l=[];for(t in n)n[t].exclusive>=u&&l.push(n[t]);return l.sort(function(e,t){return t.exclusive-e.exclusive}),l}function a(e,t){for(var n,r={},o=0;o<e.length;o++){var a,l=e[o],c=s({},l.exclusive,l.inclusive);t&&(a=i(l));for(var p in c)if(!t||a[p]){var d=l.displayNames[p];n=d.owner+" > "+d.current,r[n]=r[n]||{componentName:n,time:0,count:0},l.inclusive[p]&&(r[n].time+=l.inclusive[p]),l.counts[p]&&(r[n].count+=l.counts[p])}}var f=[];for(n in r)r[n].time>=u&&f.push(r[n]);return f.sort(function(e,t){return t.time-e.time}),f}function i(e){var t={},n=Object.keys(e.writes),r=s({},e.exclusive,e.inclusive);for(var o in r){for(var a=!1,i=0;i<n.length;i++)if(0===n[i].indexOf(o)){a=!0;break}!a&&e.counts[o]>0&&(t[o]=!0)}return t}/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */
var s=e(29),u=1.2,l={_mountImageIntoNode:"set innerHTML",INSERT_MARKUP:"set innerHTML",MOVE_EXISTING:"move",REMOVE_NODE:"remove",TEXT_CONTENT:"set textContent",updatePropertyByID:"update attribute",deletePropertyByID:"delete attribute",updateStylesByID:"update styles",updateInnerHTMLByID:"set innerHTML",dangerouslyReplaceNodeWithMarkupByID:"replace"},c={getExclusiveSummary:o,getInclusiveSummary:a,getDOMSummary:r,getTotalTime:n};t.exports=c},{29:29}],63:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */
function n(e,t){Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:function(){return this._store?this._store[t]:null},set:function(e){s(!1,"Don't set the %s property of the React element. Instead, specify the correct value when initially creating the element.",t),this._store[t]=e}})}function r(e){try{var t={props:!0};for(var r in t)n(e,r);l=!0}catch(o){}}var o=e(44),a=e(45),i=e(29),s=e(171),u={key:!0,ref:!0},l=!1,c=function(e,t,n,r,o,a){this.type=e,this.key=t,this.ref=n,this._owner=r,this._context=o,this._store={props:a,originalProps:i({},a)};try{Object.defineProperty(this._store,"validated",{configurable:!1,enumerable:!1,writable:!0})}catch(s){}return this._store.validated=!1,l?void Object.freeze(this):void(this.props=a)};c.prototype={_isReactElement:!0},r(c.prototype),c.createElement=function(e,t,n){var r,i={},s=null,l=null;if(null!=t){l=void 0===t.ref?null:t.ref,s=void 0===t.key?null:""+t.key;for(r in t)t.hasOwnProperty(r)&&!u.hasOwnProperty(r)&&(i[r]=t[r])}var p=arguments.length-2;if(1===p)i.children=n;else if(p>1){for(var d=Array(p),f=0;p>f;f++)d[f]=arguments[f+2];i.children=d}if(e&&e.defaultProps){var h=e.defaultProps;for(r in h)"undefined"==typeof i[r]&&(i[r]=h[r])}return new c(e,s,l,a.current,o.current,i)},c.createFactory=function(e){var t=c.createElement.bind(null,e);return t.type=e,t},c.cloneAndReplaceProps=function(e,t){var n=new c(e.type,e.key,e.ref,e._owner,e._context,t);return n._store.validated=e._store.validated,n},c.cloneElement=function(e,t,n){var r,o=i({},e.props),s=e.key,l=e.ref,p=e._owner;if(null!=t){void 0!==t.ref&&(l=t.ref,p=a.current),void 0!==t.key&&(s=""+t.key);for(r in t)t.hasOwnProperty(r)&&!u.hasOwnProperty(r)&&(o[r]=t[r])}var d=arguments.length-2;if(1===d)o.children=n;else if(d>1){for(var f=Array(d),h=0;d>h;h++)f[h]=arguments[h+2];o.children=f}return new c(e.type,s,l,p,e._context,o)},c.isValidElement=function(e){var t=!(!e||!e._isReactElement);return t},t.exports=c},{171:171,29:29,44:44,45:45}],64:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */
function n(){if(g.current){var e=g.current.getName();if(e)return" Check the render method of `"+e+"`."}return""}function r(e){var t=e&&e.getPublicInstance();if(!t)return void 0;var n=t.constructor;return n?n.displayName||n.name||void 0:void 0}function o(){var e=g.current;return e&&r(e)||void 0}function a(e,t){e._store.validated||null!=e.key||(e._store.validated=!0,s('Each child in an array or iterator should have a unique "key" prop.',e,t))}function i(e,t,n){D.test(e)&&s("Child objects should have non-numeric keys so ordering is preserved.",t,n)}function s(e,t,n){var a=o(),i="string"==typeof n?n:n.displayName||n.name,s=a||i,u=w[e]||(w[e]={});if(!u.hasOwnProperty(s)){u[s]=!0;var l=a?" Check the render method of "+a+".":i?" Check the React.render call using <"+i+">.":"",c="";if(t&&t._owner&&t._owner!==g.current){var p=r(t._owner);c=" It was passed a child from "+p+"."}_(!1,e+"%s%s See https://fb.me/react-warning-keys for more information.",l,c)}}function u(e,t){if(Array.isArray(e))for(var n=0;n<e.length;n++){var r=e[n];h.isValidElement(r)&&a(r,t)}else if(h.isValidElement(e))e._store.validated=!0;else if(e){var o=b(e);if(o){if(o!==e.entries)for(var s,u=o.call(e);!(s=u.next()).done;)h.isValidElement(s.value)&&a(s.value,t)}else if("object"==typeof e){var l=m.extractIfFragment(e);for(var c in l)l.hasOwnProperty(c)&&i(c,l[c],t)}}}function l(e,t,r,o){for(var a in t)if(t.hasOwnProperty(a)){var i;try{E("function"==typeof t[a],"%s: %s type `%s` is invalid; it must be a function, usually from React.PropTypes.",e||"React class",y[o],a),i=t[a](r,a,e,o)}catch(s){i=s}if(i instanceof Error&&!(i.message in x)){x[i.message]=!0;var u=n(this);_(!1,"Failed propType: %s%s",i.message,u)}}}function c(e,t){var n=t.type,r="string"==typeof n?n:n.displayName,o=t._owner?t._owner.getPublicInstance().constructor.displayName:null,a=e+"|"+r+"|"+o;if(!M.hasOwnProperty(a)){M[a]=!0;var i="";r&&(i=" <"+r+" />");var s="";o&&(s=" The element was created by "+o+"."),_(!1,"Don't set .props.%s of the React component%s. Instead, specify the correct value when initially creating the element or use React.cloneElement to make a new element with updated props.%s",e,i,s)}}function p(e,t){return e!==e?t!==t:0===e&&0===t?1/e===1/t:e===t}function d(e){if(e._store){var t=e._store.originalProps,n=e.props;for(var r in n)n.hasOwnProperty(r)&&(t.hasOwnProperty(r)&&p(t[r],n[r])||(c(r,e),t[r]=n[r]))}}function f(e){if(null!=e.type){var t=C.getComponentClassForElement(e),n=t.displayName||t.name;t.propTypes&&l(n,t.propTypes,e.props,v.prop),"function"==typeof t.getDefaultProps&&_(t.getDefaultProps.isReactClassApproved,"getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}var h=e(63),m=e(69),v=e(85),y=e(84),g=e(45),C=e(80),b=e(141),E=e(150),_=e(171),w={},x={},D=/^\d+$/,M={},T={checkAndWarnForMutatedProps:d,createElement:function(e){_(null!=e,"React.createElement: type should not be null or undefined. It should be a string (for DOM elements) or a ReactClass (for composite components).");var t=h.createElement.apply(this,arguments);if(null==t)return t;for(var n=2;n<arguments.length;n++)u(arguments[n],e);return f(t),t},createFactory:function(e){var t=T.createElement.bind(null,e);t.type=e;try{Object.defineProperty(t,"type",{enumerable:!1,get:function(){return _(!1,"Factory.type is deprecated. Access the class directly before passing it to createFactory."),Object.defineProperty(this,"type",{value:e}),e}})}catch(n){}return t},cloneElement:function(){for(var e=h.cloneElement.apply(this,arguments),t=2;t<arguments.length;t++)u(arguments[t],e.type);return f(e),e}};t.exports=T},{141:141,150:150,171:171,45:45,63:63,69:69,80:80,84:84,85:85}],65:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */
function n(e){l[e]=!0}function r(e){delete l[e]}function o(e){return!!l[e]}var a,i=e(63),s=e(73),u=e(150),l={},c={injectEmptyComponent:function(e){a=i.createFactory(e)}},p=function(){};p.prototype.componentDidMount=function(){var e=s.get(this);e&&n(e._rootNodeID)},p.prototype.componentWillUnmount=function(){var e=s.get(this);e&&r(e._rootNodeID)},p.prototype.render=function(){return u(a,"Trying to return null from a render, but no null placeholder component was injected."),a()};var d=i.createElement(p),f={emptyElement:d,injection:c,isNullComponentID:o};t.exports=f},{150:150,63:63,73:73}],66:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */
var n={guard:function(e){return e}};t.exports=n},{}],67:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */
function n(e){r.enqueueEvents(e),r.processEventQueue()}var r=e(18),o={handleTopLevel:function(e,t,o,a){var i=r.extractEvents(e,t,o,a);n(i)}};t.exports=o},{18:18}],68:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 * @typechecks static-only
 */
function n(e){var t=c.getID(e),n=l.getReactRootIDFromNodeID(t),r=c.findReactContainerForID(n),o=c.getFirstReactDOM(r);return o}function r(e,t){this.topLevelType=e,this.nativeEvent=t,this.ancestors=[]}function o(e){for(var t=c.getFirstReactDOM(f(e.nativeEvent))||window,r=t;r;)e.ancestors.push(r),r=n(r);for(var o=0,a=e.ancestors.length;a>o;o++){t=e.ancestors[o];var i=c.getID(t)||"";m._handleTopLevel(e.topLevelType,t,i,e.nativeEvent)}}function a(e){var t=h(window);e(t)}var i=e(17),s=e(22),u=e(30),l=e(72),c=e(77),p=e(100),d=e(29),f=e(140),h=e(146);d(r.prototype,{destructor:function(){this.topLevelType=null,this.nativeEvent=null,this.ancestors.length=0}}),u.addPoolingTo(r,u.twoArgumentPooler);var m={_enabled:!0,_handleTopLevel:null,WINDOW_HANDLE:s.canUseDOM?window:null,setHandleTopLevel:function(e){m._handleTopLevel=e},setEnabled:function(e){m._enabled=!!e},isEnabled:function(){return m._enabled},trapBubbledEvent:function(e,t,n){var r=n;return r?i.listen(r,t,m.dispatchEvent.bind(null,e)):null},trapCapturedEvent:function(e,t,n){var r=n;return r?i.capture(r,t,m.dispatchEvent.bind(null,e)):null},monitorScrollValue:function(e){var t=a.bind(null,e);i.listen(window,"scroll",t)},dispatchEvent:function(e,t){if(m._enabled){var n=r.getPooled(e,t);try{p.batchedUpdates(o,n)}finally{r.release(n)}}}};t.exports=m},{100:100,140:140,146:146,17:17,22:22,29:29,30:30,72:72,77:77}],69:[function(e,t){/**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
* @providesModule ReactFragment
*/
var n=e(63),r=e(171),o="_reactFragment",a="_reactDidWarn",i=!1;try{var s=function(){return 1};Object.defineProperty({},o,{enumerable:!1,value:!0}),Object.defineProperty({},"key",{enumerable:!0,get:s}),i=!0}catch(u){}var l=function(e,t){Object.defineProperty(e,t,{enumerable:!0,get:function(){return r(this[a],"A ReactFragment is an opaque type. Accessing any of its properties is deprecated. Pass it to one of the React.Children helpers."),this[a]=!0,this[o][t]},set:function(e){r(this[a],"A ReactFragment is an immutable opaque type. Mutating its properties is deprecated."),this[a]=!0,this[o][t]=e}})},c={},p=function(e){var t="";for(var n in e)t+=n+":"+typeof e[n]+",";var r=!!c[t];return c[t]=!0,r},d={create:function(e){if("object"!=typeof e||!e||Array.isArray(e))return r(!1,"React.addons.createFragment only accepts a single object.",e),e;if(n.isValidElement(e))return r(!1,"React.addons.createFragment does not accept a ReactElement without a wrapper object."),e;if(i){var t={};Object.defineProperty(t,o,{enumerable:!1,value:e}),Object.defineProperty(t,a,{writable:!0,enumerable:!1,value:!1});for(var s in e)l(t,s);return Object.preventExtensions(t),t}return e},extract:function(e){return i?e[o]?e[o]:(r(p(e),"Any use of a keyed object should be wrapped in React.addons.createFragment(object) before being passed as a child."),e):e},extractIfFragment:function(e){if(i){if(e[o])return e[o];for(var t in e)if(e.hasOwnProperty(t)&&n.isValidElement(e[t]))return d.extract(e)}return e}};t.exports=d},{171:171,63:63}],70:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */
var n=e(11),r=e(18),o=e(41),a=e(38),i=e(65),s=e(33),u=e(80),l=e(48),c=e(82),p=e(91),d=e(100),f={Component:o.injection,Class:a.injection,DOMComponent:l.injection,DOMProperty:n.injection,EmptyComponent:i.injection,EventPluginHub:r.injection,EventEmitter:s.injection,NativeComponent:u.injection,Perf:c.injection,RootIndex:p.injection,Updates:d.injection};t.exports=f},{100:100,11:11,18:18,33:33,38:38,41:41,48:48,65:65,80:80,82:82,91:91}],71:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */
function n(e){return o(document.documentElement,e)}var r=e(56),o=e(123),a=e(134),i=e(136),s={hasSelectionCapabilities:function(e){return e&&("INPUT"===e.nodeName&&"text"===e.type||"TEXTAREA"===e.nodeName||"true"===e.contentEditable)},getSelectionInformation:function(){var e=i();return{focusedElem:e,selectionRange:s.hasSelectionCapabilities(e)?s.getSelection(e):null}},restoreSelection:function(e){var t=i(),r=e.focusedElem,o=e.selectionRange;t!==r&&n(r)&&(s.hasSelectionCapabilities(r)&&s.setSelection(r,o),a(r))},getSelection:function(e){var t;if("selectionStart"in e)t={start:e.selectionStart,end:e.selectionEnd};else if(document.selection&&"INPUT"===e.nodeName){var n=document.selection.createRange();n.parentElement()===e&&(t={start:-n.moveStart("character",-e.value.length),end:-n.moveEnd("character",-e.value.length)})}else t=r.getOffsets(e);return t||{start:0,end:0}},setSelection:function(e,t){var n=t.start,o=t.end;if("undefined"==typeof o&&(o=n),"selectionStart"in e)e.selectionStart=n,e.selectionEnd=Math.min(o,e.value.length);else if(document.selection&&"INPUT"===e.nodeName){var a=e.createTextRange();a.collapse(!0),a.moveStart("character",n),a.moveEnd("character",o-n),a.select()}else r.setOffsets(e,t)}};t.exports=s},{123:123,134:134,136:136,56:56}],72:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */
function n(e){return d+e.toString(36)}function r(e,t){return e.charAt(t)===d||t===e.length}function o(e){return""===e||e.charAt(0)===d&&e.charAt(e.length-1)!==d}function a(e,t){return 0===t.indexOf(e)&&r(t,e.length)}function i(e){return e?e.substr(0,e.lastIndexOf(d)):""}function s(e,t){if(p(o(e)&&o(t),"getNextDescendantID(%s, %s): Received an invalid React DOM ID.",e,t),p(a(e,t),"getNextDescendantID(...): React has made an invalid assumption about the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.",e,t),e===t)return e;var n,i=e.length+f;for(n=i;n<t.length&&!r(t,n);n++);return t.substr(0,n)}function u(e,t){var n=Math.min(e.length,t.length);if(0===n)return"";for(var a=0,i=0;n>=i;i++)if(r(e,i)&&r(t,i))a=i;else if(e.charAt(i)!==t.charAt(i))break;var s=e.substr(0,a);return p(o(s),"getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s",e,t,s),s}function l(e,t,n,r,o,u){e=e||"",t=t||"",p(e!==t,"traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.",e);var l=a(t,e);p(l||a(e,t),"traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do not have a parent path.",e,t);for(var c=0,d=l?i:s,f=e;;f=d(f,t)){var m;if(o&&f===e||u&&f===t||(m=n(f,l,r)),m===!1||f===t)break;p(c++<h,"traverseParentPath(%s, %s, ...): Detected an infinite loop while traversing the React DOM ID tree. This may be due to malformed IDs: %s",e,t)}}var c=e(91),p=e(150),d=".",f=d.length,h=100,m={createReactRootID:function(){return n(c.createReactRootIndex())},createReactID:function(e,t){return e+t},getReactRootIDFromNodeID:function(e){if(e&&e.charAt(0)===d&&e.length>1){var t=e.indexOf(d,1);return t>-1?e.substr(0,t):e}return null},traverseEnterLeave:function(e,t,n,r,o){var a=u(e,t);a!==e&&l(e,a,n,r,!1,!0),a!==t&&l(a,t,n,o,!0,!1)},traverseTwoPhase:function(e,t,n){e&&(l("",e,t,n,!0,!1),l(e,"",t,n,!1,!0))},traverseAncestors:function(e,t,n){l("",e,t,n,!0,!1)},_getFirstCommonAncestorID:u,_getNextDescendantID:s,isAncestorIDOf:a,SEPARATOR:d};t.exports=m},{150:150,91:91}],73:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceMap
 */
var n={remove:function(e){e._reactInternalInstance=void 0},get:function(e){return e._reactInternalInstance},has:function(e){return void 0!==e._reactInternalInstance},set:function(e,t){e._reactInternalInstance=t}};t.exports=n},{}],74:[function(e,t){/**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactLifeCycle
 */
var n={currentlyMountingInstance:null,currentlyUnmountingInstance:null};t.exports=n},{}],75:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactLink
 * @typechecks static-only
 */
function n(e,t){this.value=e,this.requestChange=t}function r(e){var t={value:"undefined"==typeof e?o.PropTypes.any.isRequired:e.isRequired,requestChange:o.PropTypes.func.isRequired};return o.PropTypes.shape(t)}var o=e(31);n.PropTypes={link:r},t.exports=n},{31:31}],76:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */
var n=e(119),r={CHECKSUM_ATTR_NAME:"data-react-checksum",addChecksumToMarkup:function(e){var t=n(e);return e.replace(">"," "+r.CHECKSUM_ATTR_NAME+'="'+t+'">')},canReuseMarkup:function(e,t){var o=t.getAttribute(r.CHECKSUM_ATTR_NAME);o=o&&parseInt(o,10);var a=n(e);return a===o}};t.exports=r},{119:119}],77:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */
function n(e,t){for(var n=Math.min(e.length,t.length),r=0;n>r;r++)if(e.charAt(r)!==t.charAt(r))return r;return e.length===t.length?-1:n}function r(e){var t=N(e);return t&&Y.getID(t)}function o(e){var t=a(e);if(t)if(F.hasOwnProperty(t)){var n=F[t];n!==e&&(O(!l(n,t),"ReactMount: Two valid but unequal nodes with the same `%s`: %s",L,t),F[t]=e)}else F[t]=e;return t}function a(e){return e&&e.getAttribute&&e.getAttribute(L)||""}function i(e,t){var n=a(e);n!==t&&delete F[n],e.setAttribute(L,t),F[t]=e}function s(e){return F.hasOwnProperty(e)&&l(F[e],e)||(F[e]=Y.findReactNodeByID(e)),F[e]}function u(e){var t=_.get(e)._rootNodeID;return b.isNullComponentID(t)?null:(F.hasOwnProperty(t)&&l(F[t],t)||(F[t]=Y.findReactNodeByID(t)),F[t])}function l(e,t){if(e){O(a(e)===t,"ReactMount: Unexpected modification of `%s`",L);var n=Y.findReactContainerForID(t);if(n&&I(n,e))return!0}return!1}function c(e){delete F[e]}function p(e){var t=F[e];return t&&l(t,e)?void(H=t):!1}function d(e){H=null,E.traverseAncestors(e,p);var t=H;return H=null,t}function f(e,t,n,r,o){var a=D.mountComponent(e,t,r,R);e._isTopLevel=!0,Y._mountImageIntoNode(a,n,o)}function h(e,t,n,r){var o=T.ReactReconcileTransaction.getPooled();o.perform(f,null,e,t,n,o,r),T.ReactReconcileTransaction.release(o)}var m=e(11),v=e(33),y=e(45),g=e(63),C=e(64),b=e(65),E=e(72),_=e(73),w=e(76),x=e(82),D=e(89),M=e(99),T=e(100),R=e(130),I=e(123),N=e(144),P=e(149),O=e(150),S=e(164),k=e(167),A=e(171),U=E.SEPARATOR,L=m.ID_ATTRIBUTE_NAME,F={},j=1,B=9,V={},W={},K={},q=[],H=null,Y={_instancesByReactRootID:V,scrollMonitor:function(e,t){t()},_updateRootComponent:function(e,t,n,o){return C.checkAndWarnForMutatedProps(t),Y.scrollMonitor(n,function(){M.enqueueElementInternal(e,t),o&&M.enqueueCallbackInternal(e,o)}),K[r(n)]=N(n),e},_registerComponent:function(e,t){O(t&&(t.nodeType===j||t.nodeType===B),"_registerComponent(...): Target container is not a DOM element."),v.ensureScrollValueMonitoring();var n=Y.registerContainer(t);return V[n]=e,n},_renderNewRootComponent:function(e,t,n){A(null==y.current,"_renderNewRootComponent(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.");var r=P(e,null),o=Y._registerComponent(r,t);return T.batchedUpdates(h,r,o,t,n),K[o]=N(t),r},render:function(e,t,n){O(g.isValidElement(e),"React.render(): Invalid component element.%s","string"==typeof e?" Instead of passing an element string, make sure to instantiate it by passing it to React.createElement.":"function"==typeof e?" Instead of passing a component class, make sure to instantiate it by passing it to React.createElement.":null!=e&&void 0!==e.props?" This may be caused by unintentionally loading two independent copies of React.":"");var o=V[r(t)];if(o){var a=o._currentElement;if(k(a,e))return Y._updateRootComponent(o,e,t,n).getPublicInstance();Y.unmountComponentAtNode(t)}var i=N(t),s=i&&Y.isRenderedByReact(i);if(!s||i.nextSibling)for(var u=i;u;){if(Y.isRenderedByReact(u)){A(!1,"render(): Target node has markup rendered by React, but there are unrelated nodes as well. This is most commonly caused by white-space inserted around server-rendered markup.");break}u=u.nextSibling}var l=s&&!o,c=Y._renderNewRootComponent(e,t,l).getPublicInstance();return n&&n.call(c),c},constructAndRenderComponent:function(e,t,n){var r=g.createElement(e,t);return Y.render(r,n)},constructAndRenderComponentByID:function(e,t,n){var r=document.getElementById(n);return O(r,'Tried to get element with id of "%s" but it is not present on the page.',n),Y.constructAndRenderComponent(e,t,r)},registerContainer:function(e){var t=r(e);return t&&(t=E.getReactRootIDFromNodeID(t)),t||(t=E.createReactRootID()),W[t]=e,t},unmountComponentAtNode:function(e){A(null==y.current,"unmountComponentAtNode(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."),O(e&&(e.nodeType===j||e.nodeType===B),"unmountComponentAtNode(...): Target container is not a DOM element.");var t=r(e),n=V[t];return n?(Y.unmountComponentFromNode(n,e),delete V[t],delete W[t],delete K[t],!0):!1},unmountComponentFromNode:function(e,t){for(D.unmountComponent(e),t.nodeType===B&&(t=t.documentElement);t.lastChild;)t.removeChild(t.lastChild)},findReactContainerForID:function(e){var t=E.getReactRootIDFromNodeID(e),n=W[t],r=K[t];if(r&&r.parentNode!==n){O(a(r)===t,"ReactMount: Root element ID differed from reactRootID.");var o=n.firstChild;o&&t===a(o)?K[t]=o:A(!1,"ReactMount: Root element has been removed from its original container. New container:",r.parentNode)}return n},findReactNodeByID:function(e){var t=Y.findReactContainerForID(e);return Y.findComponentRoot(t,e)},isRenderedByReact:function(e){if(1!==e.nodeType)return!1;var t=Y.getID(e);return t?t.charAt(0)===U:!1},getFirstReactDOM:function(e){for(var t=e;t&&t.parentNode!==t;){if(Y.isRenderedByReact(t))return t;t=t.parentNode}return null},findComponentRoot:function(e,t){var n=q,r=0,o=d(t)||e;for(n[0]=o.firstChild,n.length=1;r<n.length;){for(var a,i=n[r++];i;){var s=Y.getID(i);s?t===s?a=i:E.isAncestorIDOf(s,t)&&(n.length=r=0,n.push(i.firstChild)):n.push(i.firstChild),i=i.nextSibling}if(a)return n.length=0,a}n.length=0,O(!1,"findComponentRoot(..., %s): Unable to find element. This probably means the DOM was unexpectedly mutated (e.g., by the browser), usually due to forgetting a <tbody> when using tables, nesting tags like <form>, <p>, or <a>, or using non-SVG elements in an <svg> parent. Try inspecting the child nodes of the element with React ID `%s`.",t,Y.getID(e))},_mountImageIntoNode:function(e,t,r){if(O(t&&(t.nodeType===j||t.nodeType===B),"mountComponentIntoNode(...): Target container is not valid."),r){var o=N(t);if(w.canReuseMarkup(e,o))return;var a=o.getAttribute(w.CHECKSUM_ATTR_NAME);o.removeAttribute(w.CHECKSUM_ATTR_NAME);var i=o.outerHTML;o.setAttribute(w.CHECKSUM_ATTR_NAME,a);var s=n(e,i),u=" (client) "+e.substring(s-20,s+20)+"\n (server) "+i.substring(s-20,s+20);O(t.nodeType!==B,"You're trying to render a component to the document using server rendering but the checksum was invalid. This usually means you rendered a different component type or props on the client from the one on the server, or your render() methods are impure. React cannot handle this case due to cross-browser quirks by rendering at the document root. You should look for environment dependent code in your components and ensure the props are the same client and server side:\n%s",u),A(!1,"React attempted to reuse markup in a container but the checksum was invalid. This generally means that you are using server rendering and the markup generated on the server was not what the client was expecting. React injected new markup to compensate which works but you have lost many of the benefits of server rendering. Instead, figure out why the markup being generated is different on the client or server:\n%s",u)}O(t.nodeType!==B,"You're trying to render a component to the document but you didn't use server rendering. We can't do this without using server rendering due to cross-browser quirks. See React.renderToString() for server rendering."),S(t,e)},getReactRootID:r,getID:o,setID:i,getNode:s,getNodeFromInstance:u,purgeID:c};x.measureMethods(Y,"ReactMount",{_renderNewRootComponent:"_renderNewRootComponent",_mountImageIntoNode:"_mountImageIntoNode"}),t.exports=Y},{100:100,11:11,123:123,130:130,144:144,149:149,150:150,164:164,167:167,171:171,33:33,45:45,63:63,64:64,65:65,72:72,73:73,76:76,82:82,89:89,99:99}],78:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */
function n(e,t,n){f.push({parentID:e,parentNode:null,type:l.INSERT_MARKUP,markupIndex:h.push(t)-1,textContent:null,fromIndex:null,toIndex:n})}function r(e,t,n){f.push({parentID:e,parentNode:null,type:l.MOVE_EXISTING,markupIndex:null,textContent:null,fromIndex:t,toIndex:n})}function o(e,t){f.push({parentID:e,parentNode:null,type:l.REMOVE_NODE,markupIndex:null,textContent:null,fromIndex:t,toIndex:null})}function a(e,t){f.push({parentID:e,parentNode:null,type:l.TEXT_CONTENT,markupIndex:null,textContent:t,fromIndex:null,toIndex:null})}function i(){f.length&&(u.processChildrenUpdates(f,h),s())}function s(){f.length=0,h.length=0}var u=e(41),l=e(79),c=e(89),p=e(36),d=0,f=[],h=[],m={Mixin:{mountChildren:function(e,t,n){var r=p.instantiateChildren(e,t,n);this._renderedChildren=r;var o=[],a=0;for(var i in r)if(r.hasOwnProperty(i)){var s=r[i],u=this._rootNodeID+i,l=c.mountComponent(s,u,t,n);s._mountIndex=a,o.push(l),a++}return o},updateTextContent:function(e){d++;var t=!0;try{var n=this._renderedChildren;p.unmountChildren(n);for(var r in n)n.hasOwnProperty(r)&&this._unmountChildByName(n[r],r);this.setTextContent(e),t=!1}finally{d--,d||(t?s():i())}},updateChildren:function(e,t,n){d++;var r=!0;try{this._updateChildren(e,t,n),r=!1}finally{d--,d||(r?s():i())}},_updateChildren:function(e,t,n){var r=this._renderedChildren,o=p.updateChildren(r,e,t,n);if(this._renderedChildren=o,o||r){var a,i=0,s=0;for(a in o)if(o.hasOwnProperty(a)){var u=r&&r[a],l=o[a];u===l?(this.moveChild(u,s,i),i=Math.max(u._mountIndex,i),u._mountIndex=s):(u&&(i=Math.max(u._mountIndex,i),this._unmountChildByName(u,a)),this._mountChildByNameAtIndex(l,a,s,t,n)),s++}for(a in r)!r.hasOwnProperty(a)||o&&o.hasOwnProperty(a)||this._unmountChildByName(r[a],a)}},unmountChildren:function(){var e=this._renderedChildren;p.unmountChildren(e),this._renderedChildren=null},moveChild:function(e,t,n){e._mountIndex<n&&r(this._rootNodeID,e._mountIndex,t)},createChild:function(e,t){n(this._rootNodeID,t,e._mountIndex)},removeChild:function(e){o(this._rootNodeID,e._mountIndex)},setTextContent:function(e){a(this._rootNodeID,e)},_mountChildByNameAtIndex:function(e,t,n,r,o){var a=this._rootNodeID+t,i=c.mountComponent(e,a,r,o);e._mountIndex=n,this.createChild(e,i)},_unmountChildByName:function(e){this.removeChild(e),e._mountIndex=null}}};t.exports=m},{36:36,41:41,79:79,89:89}],79:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */
var n=e(156),r=n({INSERT_MARKUP:null,MOVE_EXISTING:null,REMOVE_NODE:null,TEXT_CONTENT:null});t.exports=r},{156:156}],80:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeComponent
 */
function n(e){if("function"==typeof e.type)return e.type;var t=e.type,n=c[t];return null==n&&(c[t]=n=u(t)),n}function r(e){return s(l,"There is no registered component for the tag %s",e.type),new l(e.type,e.props)}function o(e){return new p(e)}function a(e){return e instanceof p}var i=e(29),s=e(150),u=null,l=null,c={},p=null,d={injectGenericComponentClass:function(e){l=e},injectTextComponentClass:function(e){p=e},injectComponentClasses:function(e){i(c,e)},injectAutoWrapper:function(e){u=e}},f={getComponentClassForElement:n,createInternalComponent:r,createInstanceForText:o,isTextComponent:a,injection:d};t.exports=f},{150:150,29:29}],81:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */
var n=e(150),r={isValidOwner:function(e){return!(!e||"function"!=typeof e.attachRef||"function"!=typeof e.detachRef)},addComponentAsRefTo:function(e,t,o){n(r.isValidOwner(o),"addComponentAsRefTo(...): Only a ReactOwner can have refs. This usually means that you're trying to add a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref."),o.attachRef(t,e)},removeComponentAsRefFrom:function(e,t,o){n(r.isValidOwner(o),"removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This usually means that you're trying to remove a ref to a component that doesn't have an owner (that is, was not created inside of another component's `render` method). Try rendering this component inside of a new top-level component which will hold the ref."),o.getPublicInstance().refs[t]===e.getPublicInstance()&&o.detachRef(t)}};t.exports=r},{150:150}],82:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 * @typechecks static-only
 */
function n(e,t,n){return n}var r={enableMeasure:!1,storedMeasure:n,measureMethods:function(e,t,n){for(var o in n)n.hasOwnProperty(o)&&(e[o]=r.measure(t,n[o],e[o]))},measure:function(e,t,n){var o=null,a=function(){return r.enableMeasure?(o||(o=r.storedMeasure(e,t,n)),o.apply(this,arguments)):n.apply(this,arguments)};return a.displayName=e+"_"+t,a},injection:{injectMeasure:function(e){r.storedMeasure=e}}};t.exports=r},{}],83:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTransferer
 */
function n(e){return function(t,n,r){t[n]=t.hasOwnProperty(n)?e(t[n],r):r}}function r(e,t){for(var n in t)if(t.hasOwnProperty(n)){var r=u[n];r&&u.hasOwnProperty(n)?r(e,n,t[n]):e.hasOwnProperty(n)||(e[n]=t[n])}return e}var o=e(29),a=e(129),i=e(155),s=n(function(e,t){return o({},t,e)}),u={children:a,className:n(i),style:s},l={mergeProps:function(e,t){return r(o({},e),t)}};t.exports=l},{129:129,155:155,29:29}],84:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */
var n={};n={prop:"prop",context:"context",childContext:"child context"},t.exports=n},{}],85:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */
var n=e(156),r=n({prop:null,context:null,childContext:null});t.exports=r},{156:156}],86:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */
function n(e){function t(t,n,r,o,a){if(o=o||b,null==n[r]){var i=g[a];return t?new Error("Required "+i+" `"+r+"` was not specified in "+("`"+o+"`.")):null}return e(n,r,o,a)}var n=t.bind(null,!1);return n.isRequired=t.bind(null,!0),n}function r(e){function t(t,n,r,o){var a=t[n],i=h(a);if(i!==e){var s=g[o],u=m(a);return new Error("Invalid "+s+" `"+n+"` of type `"+u+"` "+("supplied to `"+r+"`, expected `"+e+"`."))}return null}return n(t)}function o(){return n(C.thatReturns(null))}function a(e){function t(t,n,r,o){var a=t[n];if(!Array.isArray(a)){var i=g[o],s=h(a);return new Error("Invalid "+i+" `"+n+"` of type "+("`"+s+"` supplied to `"+r+"`, expected an array."))}for(var u=0;u<a.length;u++){var l=e(a,u,r,o);if(l instanceof Error)return l}return null}return n(t)}function i(){function e(e,t,n,r){if(!v.isValidElement(e[t])){var o=g[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactElement."))}return null}return n(e)}function s(e){function t(t,n,r,o){if(!(t[n]instanceof e)){var a=g[o],i=e.name||b;return new Error("Invalid "+a+" `"+n+"` supplied to "+("`"+r+"`, expected instance of `"+i+"`."))}return null}return n(t)}function u(e){function t(t,n,r,o){for(var a=t[n],i=0;i<e.length;i++)if(a===e[i])return null;var s=g[o],u=JSON.stringify(e);return new Error("Invalid "+s+" `"+n+"` of value `"+a+"` "+("supplied to `"+r+"`, expected one of "+u+"."))}return n(t)}function l(e){function t(t,n,r,o){var a=t[n],i=h(a);if("object"!==i){var s=g[o];return new Error("Invalid "+s+" `"+n+"` of type "+("`"+i+"` supplied to `"+r+"`, expected an object."))}for(var u in a)if(a.hasOwnProperty(u)){var l=e(a,u,r,o);if(l instanceof Error)return l}return null}return n(t)}function c(e){function t(t,n,r,o){for(var a=0;a<e.length;a++){var i=e[a];if(null==i(t,n,r,o))return null}var s=g[o];return new Error("Invalid "+s+" `"+n+"` supplied to "+("`"+r+"`."))}return n(t)}function p(){function e(e,t,n,r){if(!f(e[t])){var o=g[r];return new Error("Invalid "+o+" `"+t+"` supplied to "+("`"+n+"`, expected a ReactNode."))}return null}return n(e)}function d(e){function t(t,n,r,o){var a=t[n],i=h(a);if("object"!==i){var s=g[o];return new Error("Invalid "+s+" `"+n+"` of type `"+i+"` "+("supplied to `"+r+"`, expected `object`."))}for(var u in e){var l=e[u];if(l){var c=l(a,u,r,o);if(c)return c}}return null}return n(t)}function f(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(f);if(null===e||v.isValidElement(e))return!0;e=y.extractIfFragment(e);for(var t in e)if(!f(e[t]))return!1;return!0;default:return!1}}function h(e){var t=typeof e;return Array.isArray(e)?"array":e instanceof RegExp?"object":t}function m(e){var t=h(e);if("object"===t){if(e instanceof Date)return"date";if(e instanceof RegExp)return"regexp"}return t}var v=e(63),y=e(69),g=e(84),C=e(129),b="<<anonymous>>",E=i(),_=p(),w={array:r("array"),bool:r("boolean"),func:r("function"),number:r("number"),object:r("object"),string:r("string"),any:o(),arrayOf:a,element:E,instanceOf:s,node:_,objectOf:l,oneOf:u,oneOfType:c,shape:d};t.exports=w},{129:129,63:63,69:69,84:84}],87:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPutListenerQueue
 */
function n(){this.listenersToPut=[]}var r=e(30),o=e(33),a=e(29);a(n.prototype,{enqueuePutListener:function(e,t,n){this.listenersToPut.push({rootNodeID:e,propKey:t,propValue:n})},putListeners:function(){for(var e=0;e<this.listenersToPut.length;e++){var t=this.listenersToPut[e];o.putListener(t.rootNodeID,t.propKey,t.propValue)}},reset:function(){this.listenersToPut.length=0},destructor:function(){this.reset()}}),r.addPoolingTo(n),t.exports=n},{29:29,30:30,33:33}],88:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */
function n(){this.reinitializeTransaction(),this.renderToStaticMarkup=!1,this.reactMountReady=r.getPooled(null),this.putListenerQueue=s.getPooled()}var r=e(7),o=e(30),a=e(33),i=e(71),s=e(87),u=e(116),l=e(29),c={initialize:i.getSelectionInformation,close:i.restoreSelection},p={initialize:function(){var e=a.isEnabled();return a.setEnabled(!1),e},close:function(e){a.setEnabled(e)}},d={initialize:function(){this.reactMountReady.reset()},close:function(){this.reactMountReady.notifyAll()}},f={initialize:function(){this.putListenerQueue.reset()},close:function(){this.putListenerQueue.putListeners()}},h=[f,c,p,d],m={getTransactionWrappers:function(){return h},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){r.release(this.reactMountReady),this.reactMountReady=null,s.release(this.putListenerQueue),this.putListenerQueue=null}};l(n.prototype,u.Mixin,m),o.addPoolingTo(n),t.exports=n},{116:116,29:29,30:30,33:33,7:7,71:71,87:87}],89:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconciler
 */
function n(){r.attachRefs(this,this._currentElement)}var r=e(90),o=e(64),a={mountComponent:function(e,t,r,a){var i=e.mountComponent(t,r,a);return o.checkAndWarnForMutatedProps(e._currentElement),r.getReactMountReady().enqueue(n,e),i},unmountComponent:function(e){r.detachRefs(e,e._currentElement),e.unmountComponent()},receiveComponent:function(e,t,a,i){var s=e._currentElement;if(t!==s||null==t._owner){o.checkAndWarnForMutatedProps(t);var u=r.shouldUpdateRefs(s,t);u&&r.detachRefs(e,s),e.receiveComponent(t,a,i),u&&a.getReactMountReady().enqueue(n,e)}},performUpdateIfNecessary:function(e,t){e.performUpdateIfNecessary(t)}};t.exports=a},{64:64,90:90}],90:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRef
 */
function n(e,t,n){"function"==typeof e?e(t.getPublicInstance()):o.addComponentAsRefTo(t,e,n)}function r(e,t,n){"function"==typeof e?e(null):o.removeComponentAsRefFrom(t,e,n)}var o=e(81),a={};a.attachRefs=function(e,t){var r=t.ref;null!=r&&n(r,e,t._owner)},a.shouldUpdateRefs=function(e,t){return t._owner!==e._owner||t.ref!==e.ref},a.detachRefs=function(e,t){var n=t.ref;null!=n&&r(n,e,t._owner)},t.exports=a},{81:81}],91:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */
var n={injectCreateReactRootIndex:function(e){r.createReactRootIndex=e}},r={createReactRootIndex:null,injection:n};t.exports=r},{}],92:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */
function n(e){c(o.isValidElement(e),"renderToString(): You must pass a valid ReactElement.");var t;try{var n=a.createReactRootID();return t=s.getPooled(!1),t.perform(function(){var r=l(e,null),o=r.mountComponent(n,t,u);return i.addChecksumToMarkup(o)},null)}finally{s.release(t)}}function r(e){c(o.isValidElement(e),"renderToStaticMarkup(): You must pass a valid ReactElement.");var t;try{var n=a.createReactRootID();return t=s.getPooled(!0),t.perform(function(){var r=l(e,null);return r.mountComponent(n,t,u)},null)}finally{s.release(t)}}var o=e(63),a=e(72),i=e(76),s=e(93),u=e(130),l=e(149),c=e(150);t.exports={renderToString:n,renderToStaticMarkup:r}},{130:130,149:149,150:150,63:63,72:72,76:76,93:93}],93:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */
function n(e){this.reinitializeTransaction(),this.renderToStaticMarkup=e,this.reactMountReady=o.getPooled(null),this.putListenerQueue=a.getPooled()}var r=e(30),o=e(7),a=e(87),i=e(116),s=e(29),u=e(129),l={initialize:function(){this.reactMountReady.reset()},close:u},c={initialize:function(){this.putListenerQueue.reset()},close:u},p=[c,l],d={getTransactionWrappers:function(){return p},getReactMountReady:function(){return this.reactMountReady},getPutListenerQueue:function(){return this.putListenerQueue},destructor:function(){o.release(this.reactMountReady),this.reactMountReady=null,a.release(this.putListenerQueue),this.putListenerQueue=null}};s(n.prototype,i.Mixin,d),r.addPoolingTo(n),t.exports=n},{116:116,129:129,29:29,30:30,7:7,87:87}],94:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactStateSetters
 */
function n(e,t){var n={};return function(r){n[t]=r,e.setState(n)}}var r={createStateSetter:function(e,t){return function(n,r,o,a,i,s){var u=t.call(e,n,r,o,a,i,s);u&&e.setState(u)}},createStateKeySetter:function(e,t){var r=e.__keySetters||(e.__keySetters={});return r[t]||(r[t]=n(e,t))}};r.Mixin={createStateSetter:function(e){return r.createStateSetter(this,e)},createStateKeySetter:function(e){return r.createStateKeySetter(this,e)}},t.exports=r},{}],95:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTestUtils
 */
function n(){}function r(e){return function(t,r){var o;_.isDOMComponent(t)?o=t.getDOMNode():t.tagName&&(o=t);var a=new n;a.target=o;var i=new g(d.eventNameDispatchConfigs[e],v.getID(o),a);C(i,r),u.accumulateTwoPhaseDispatches(i),y.batchedUpdates(function(){s.enqueueEvents(i),s.processEventQueue()})}}function o(){_.Simulate={};var e;for(e in d.eventNameDispatchConfigs)_.Simulate[e]=r(e)}function a(e){return function(t,r){var o=new n(e);C(o,r),_.isDOMComponent(t)?_.simulateNativeEventOnDOMComponent(e,t,o):t.tagName&&_.simulateNativeEventOnNode(e,t,o)}}var i=e(16),s=e(18),u=e(21),l=e(31),c=e(63),p=e(65),d=e(33),f=e(43),h=e(72),m=e(73),v=e(77),y=e(100),g=e(108),C=e(29),b=e(130),E=i.topLevelTypes,_={renderIntoDocument:function(e){var t=document.createElement("div");return l.render(e,t)},isElement:function(e){return c.isValidElement(e)},isElementOfType:function(e,t){return c.isValidElement(e)&&e.type===t},isDOMComponent:function(e){return!!(e&&e.tagName&&e.getDOMNode)},isDOMComponentElement:function(e){return!!(e&&c.isValidElement(e)&&e.tagName)},isCompositeComponent:function(e){return"function"==typeof e.render&&"function"==typeof e.setState},isCompositeComponentWithType:function(e,t){return!(!_.isCompositeComponent(e)||e.constructor!==t)},isCompositeComponentElement:function(e){if(!c.isValidElement(e))return!1;var t=e.type.prototype;return"function"==typeof t.render&&"function"==typeof t.setState},isCompositeComponentElementWithType:function(e,t){return!(!_.isCompositeComponentElement(e)||e.constructor!==t)},getRenderedChildOfCompositeComponent:function(e){if(!_.isCompositeComponent(e))return null;var t=m.get(e);return t._renderedComponent.getPublicInstance()},findAllInRenderedTree:function(e,t){if(!e)return[];var n=t(e)?[e]:[];if(_.isDOMComponent(e)){var r,o=m.get(e),a=o._renderedComponent._renderedChildren;for(r in a)a.hasOwnProperty(r)&&a[r].getPublicInstance&&(n=n.concat(_.findAllInRenderedTree(a[r].getPublicInstance(),t)))}else _.isCompositeComponent(e)&&(n=n.concat(_.findAllInRenderedTree(_.getRenderedChildOfCompositeComponent(e),t)));return n},scryRenderedDOMComponentsWithClass:function(e,t){return _.findAllInRenderedTree(e,function(e){var n=e.props.className;return _.isDOMComponent(e)&&n&&-1!==(" "+n+" ").indexOf(" "+t+" ")})},findRenderedDOMComponentWithClass:function(e,t){var n=_.scryRenderedDOMComponentsWithClass(e,t);if(1!==n.length)throw new Error("Did not find exactly one match (found: "+n.length+") for class:"+t);return n[0]},scryRenderedDOMComponentsWithTag:function(e,t){return _.findAllInRenderedTree(e,function(e){return _.isDOMComponent(e)&&e.tagName===t.toUpperCase()})},findRenderedDOMComponentWithTag:function(e,t){var n=_.scryRenderedDOMComponentsWithTag(e,t);if(1!==n.length)throw new Error("Did not find exactly one match for tag:"+t);return n[0]},scryRenderedComponentsWithType:function(e,t){return _.findAllInRenderedTree(e,function(e){return _.isCompositeComponentWithType(e,t)})},findRenderedComponentWithType:function(e,t){var n=_.scryRenderedComponentsWithType(e,t);if(1!==n.length)throw new Error("Did not find exactly one match for componentType:"+t);return n[0]},mockComponent:function(e,t){return t=t||e.mockTagName||"div",e.prototype.render.mockImplementation(function(){return l.createElement(t,null,this.props.children)}),this},simulateNativeEventOnNode:function(e,t,n){n.target=t,d.ReactEventListener.dispatchEvent(e,n)},simulateNativeEventOnDOMComponent:function(e,t,n){_.simulateNativeEventOnNode(e,t.getDOMNode(),n)},nativeTouchData:function(e,t){return{touches:[{pageX:e,pageY:t}]}},createRenderer:function(){return new w},Simulate:null,SimulateNative:{}},w=function(){this._instance=null};w.prototype.getRenderOutput=function(){return this._instance&&this._instance._renderedComponent&&this._instance._renderedComponent._renderedOutput||null};var x=function(e){this._renderedOutput=e,this._currentElement=null===e||e===!1?p.emptyElement:e};x.prototype={mountComponent:function(){},receiveComponent:function(e){this._renderedOutput=e,this._currentElement=null===e||e===!1?p.emptyElement:e},unmountComponent:function(){}};var D=function(){};C(D.prototype,f.Mixin,{_instantiateReactComponent:function(e){return new x(e)},_replaceNodeWithMarkupByID:function(){},_renderValidatedComponent:f.Mixin._renderValidatedComponentWithoutOwnerOrContext}),w.prototype.render=function(e,t){t||(t=b);var n=y.ReactReconcileTransaction.getPooled();this._render(e,n,t),y.ReactReconcileTransaction.release(n)},w.prototype.unmount=function(){this._instance&&this._instance.unmountComponent()},w.prototype._render=function(e,t,n){if(this._instance)this._instance.receiveComponent(e,t,n);else{var r=h.createReactRootID(),o=new D(e.type);o.construct(e),o.mountComponent(r,t,n),this._instance=o}};var M=s.injection.injectEventPluginOrder;s.injection.injectEventPluginOrder=function(){M.apply(this,arguments),o()};var T=s.injection.injectEventPluginsByName;s.injection.injectEventPluginsByName=function(){T.apply(this,arguments),o()},o();var R;for(R in E){var I=0===R.indexOf("top")?R.charAt(3).toLowerCase()+R.substr(4):R;_.SimulateNative[I]=a(R)}t.exports=_},{100:100,108:108,130:130,16:16,18:18,21:21,29:29,31:31,33:33,43:43,63:63,65:65,72:72,73:73,77:77}],96:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactTransitionChildMapping
 */
var n=e(37),r=e(69),o={getChildMapping:function(e){return e?r.extract(n.map(e,function(e){return e})):e},mergeChildMappings:function(e,t){function n(n){return t.hasOwnProperty(n)?t[n]:e[n]}e=e||{},t=t||{};var r={},o=[];for(var a in e)t.hasOwnProperty(a)?o.length&&(r[a]=o,o=[]):o.push(a);var i,s={};for(var u in t){if(r.hasOwnProperty(u))for(i=0;i<r[u].length;i++){var l=r[u][i];s[r[u][i]]=n(l)}s[u]=n(u)}for(i=0;i<o.length;i++)s[o[i]]=n(o[i]);return s}};t.exports=o},{37:37,69:69}],97:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTransitionEvents
 */
function n(){var e=document.createElement("div"),t=e.style;"AnimationEvent"in window||delete i.animationend.animation,"TransitionEvent"in window||delete i.transitionend.transition;for(var n in i){var r=i[n];for(var o in r)if(o in t){s.push(r[o]);break}}}function r(e,t,n){e.addEventListener(t,n,!1)}function o(e,t,n){e.removeEventListener(t,n,!1)}var a=e(22),i={transitionend:{transition:"transitionend",WebkitTransition:"webkitTransitionEnd",MozTransition:"mozTransitionEnd",OTransition:"oTransitionEnd",msTransition:"MSTransitionEnd"},animationend:{animation:"animationend",WebkitAnimation:"webkitAnimationEnd",MozAnimation:"mozAnimationEnd",OAnimation:"oAnimationEnd",msAnimation:"MSAnimationEnd"}},s=[];a.canUseDOM&&n();var u={addEndEventListener:function(e,t){return 0===s.length?void window.setTimeout(t,0):void s.forEach(function(n){r(e,n,t)})},removeEndEventListener:function(e,t){0!==s.length&&s.forEach(function(n){o(e,n,t)})}};t.exports=u},{22:22}],98:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTransitionGroup
 */
var n=e(31),r=e(96),o=e(29),a=e(122),i=e(129),s=n.createClass({displayName:"ReactTransitionGroup",propTypes:{component:n.PropTypes.any,childFactory:n.PropTypes.func},getDefaultProps:function(){return{component:"span",childFactory:i.thatReturnsArgument}},getInitialState:function(){return{children:r.getChildMapping(this.props.children)}},componentWillMount:function(){this.currentlyTransitioningKeys={},this.keysToEnter=[],this.keysToLeave=[]},componentDidMount:function(){var e=this.state.children;for(var t in e)e[t]&&this.performAppear(t)},componentWillReceiveProps:function(e){var t=r.getChildMapping(e.children),n=this.state.children;this.setState({children:r.mergeChildMappings(n,t)});var o;for(o in t){var a=n&&n.hasOwnProperty(o);!t[o]||a||this.currentlyTransitioningKeys[o]||this.keysToEnter.push(o)}for(o in n){var i=t&&t.hasOwnProperty(o);!n[o]||i||this.currentlyTransitioningKeys[o]||this.keysToLeave.push(o)}},componentDidUpdate:function(){var e=this.keysToEnter;this.keysToEnter=[],e.forEach(this.performEnter);var t=this.keysToLeave;this.keysToLeave=[],t.forEach(this.performLeave)},performAppear:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillAppear?t.componentWillAppear(this._handleDoneAppearing.bind(this,e)):this._handleDoneAppearing(e)},_handleDoneAppearing:function(e){var t=this.refs[e];t.componentDidAppear&&t.componentDidAppear(),delete this.currentlyTransitioningKeys[e];var n=r.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performEnter:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillEnter?t.componentWillEnter(this._handleDoneEntering.bind(this,e)):this._handleDoneEntering(e)},_handleDoneEntering:function(e){var t=this.refs[e];t.componentDidEnter&&t.componentDidEnter(),delete this.currentlyTransitioningKeys[e];var n=r.getChildMapping(this.props.children);n&&n.hasOwnProperty(e)||this.performLeave(e)},performLeave:function(e){this.currentlyTransitioningKeys[e]=!0;var t=this.refs[e];t.componentWillLeave?t.componentWillLeave(this._handleDoneLeaving.bind(this,e)):this._handleDoneLeaving(e)},_handleDoneLeaving:function(e){var t=this.refs[e];t.componentDidLeave&&t.componentDidLeave(),delete this.currentlyTransitioningKeys[e];var n=r.getChildMapping(this.props.children);if(n&&n.hasOwnProperty(e))this.performEnter(e);else{var a=o({},this.state.children);delete a[e],this.setState({children:a})}},render:function(){var e=[];for(var t in this.state.children){var r=this.state.children[t];r&&e.push(a(this.props.childFactory(r),{ref:t,key:t}))}return n.createElement(this.props.component,this.props,e)}});t.exports=s},{122:122,129:129,29:29,31:31,96:96}],99:[function(e,t){/**
 * Copyright 2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdateQueue
 */
function n(e){e!==o.currentlyMountingInstance&&u.enqueueUpdate(e)}function r(e,t){c(null==a.current,"%s(...): Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state.",t);var n=s.get(e);return n?n===o.currentlyUnmountingInstance?null:n:(p(!t,"%s(...): Can only update a mounted or mounting component. This usually means you called %s() on an unmounted component. This is a no-op.",t,t),null)}var o=e(74),a=e(45),i=e(63),s=e(73),u=e(100),l=e(29),c=e(150),p=e(171),d={enqueueCallback:function(e,t){c("function"==typeof t,"enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable.");var a=r(e);return a&&a!==o.currentlyMountingInstance?(a._pendingCallbacks?a._pendingCallbacks.push(t):a._pendingCallbacks=[t],void n(a)):null},enqueueCallbackInternal:function(e,t){c("function"==typeof t,"enqueueCallback(...): You called `setProps`, `replaceProps`, `setState`, `replaceState`, or `forceUpdate` with a callback that isn't callable."),e._pendingCallbacks?e._pendingCallbacks.push(t):e._pendingCallbacks=[t],n(e)},enqueueForceUpdate:function(e){var t=r(e,"forceUpdate");t&&(t._pendingForceUpdate=!0,n(t))},enqueueReplaceState:function(e,t){var o=r(e,"replaceState");o&&(o._pendingStateQueue=[t],o._pendingReplaceState=!0,n(o))},enqueueSetState:function(e,t){var o=r(e,"setState");if(o){var a=o._pendingStateQueue||(o._pendingStateQueue=[]);a.push(t),n(o)}},enqueueSetProps:function(e,t){var o=r(e,"setProps");if(o){c(o._isTopLevel,"setProps(...): You called `setProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created.");var a=o._pendingElement||o._currentElement,s=l({},a.props,t);o._pendingElement=i.cloneAndReplaceProps(a,s),n(o)}},enqueueReplaceProps:function(e,t){var o=r(e,"replaceProps");if(o){c(o._isTopLevel,"replaceProps(...): You called `replaceProps` on a component with a parent. This is an anti-pattern since props will get reactively updated when rendered. Instead, change the owner's `render` method to pass the correct value as props to the component where it is created.");var a=o._pendingElement||o._currentElement;o._pendingElement=i.cloneAndReplaceProps(a,t),n(o)}},enqueueElementInternal:function(e,t){e._pendingElement=t,n(e)}};t.exports=d},{100:100,150:150,171:171,29:29,45:45,63:63,73:73,74:74}],100:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */
function n(){v(T.ReactReconcileTransaction&&E,"ReactUpdates: must inject a reconcile transaction class and batching strategy")}function r(){this.reinitializeTransaction(),this.dirtyComponentsLength=null,this.callbackQueue=l.getPooled(),this.reconcileTransaction=T.ReactReconcileTransaction.getPooled()}function o(e,t,r,o,a){n(),E.batchedUpdates(e,t,r,o,a)}function a(e,t){return e._mountOrder-t._mountOrder}function i(e){var t=e.dirtyComponentsLength;v(t===g.length,"Expected flush transaction's stored dirty-components length (%s) to match dirty-components array length (%s).",t,g.length),g.sort(a);for(var n=0;t>n;n++){var r=g[n],o=r._pendingCallbacks;if(r._pendingCallbacks=null,f.performUpdateIfNecessary(r,e.reconcileTransaction),o)for(var i=0;i<o.length;i++)e.callbackQueue.enqueue(o[i],r.getPublicInstance())}}function s(e){return n(),y(null==p.current,"enqueueUpdate(): Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate."),E.isBatchingUpdates?void g.push(e):void E.batchedUpdates(s,e)}function u(e,t){v(E.isBatchingUpdates,"ReactUpdates.asap: Can't enqueue an asap callback in a context whereupdates are not being batched."),C.enqueue(e,t),b=!0}var l=e(7),c=e(30),p=e(45),d=e(82),f=e(89),h=e(116),m=e(29),v=e(150),y=e(171),g=[],C=l.getPooled(),b=!1,E=null,_={initialize:function(){this.dirtyComponentsLength=g.length},close:function(){this.dirtyComponentsLength!==g.length?(g.splice(0,this.dirtyComponentsLength),D()):g.length=0}},w={initialize:function(){this.callbackQueue.reset()},close:function(){this.callbackQueue.notifyAll()}},x=[_,w];m(r.prototype,h.Mixin,{getTransactionWrappers:function(){return x},destructor:function(){this.dirtyComponentsLength=null,l.release(this.callbackQueue),this.callbackQueue=null,T.ReactReconcileTransaction.release(this.reconcileTransaction),this.reconcileTransaction=null},perform:function(e,t,n){return h.Mixin.perform.call(this,this.reconcileTransaction.perform,this.reconcileTransaction,e,t,n)}}),c.addPoolingTo(r);var D=function(){for(;g.length||b;){if(g.length){var e=r.getPooled();e.perform(i,null,e),r.release(e)}if(b){b=!1;var t=C;C=l.getPooled(),t.notifyAll(),l.release(t)}}};D=d.measure("ReactUpdates","flushBatchedUpdates",D);var M={injectReconcileTransaction:function(e){v(e,"ReactUpdates: must provide a reconcile transaction class"),T.ReactReconcileTransaction=e},injectBatchingStrategy:function(e){v(e,"ReactUpdates: must provide a batching strategy"),v("function"==typeof e.batchedUpdates,"ReactUpdates: must provide a batchedUpdates() function"),v("boolean"==typeof e.isBatchingUpdates,"ReactUpdates: must provide an isBatchingUpdates boolean attribute"),E=e}},T={ReactReconcileTransaction:null,batchedUpdates:o,enqueueUpdate:s,flushBatchedUpdates:D,injection:M,asap:u};t.exports=T},{116:116,150:150,171:171,29:29,30:30,45:45,7:7,82:82,89:89}],101:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */
var n=e(11),r=n.injection.MUST_USE_ATTRIBUTE,o={Properties:{clipPath:r,cx:r,cy:r,d:r,dx:r,dy:r,fill:r,fillOpacity:r,fontFamily:r,fontSize:r,fx:r,fy:r,gradientTransform:r,gradientUnits:r,markerEnd:r,markerMid:r,markerStart:r,offset:r,opacity:r,patternContentUnits:r,patternUnits:r,points:r,preserveAspectRatio:r,r:r,rx:r,ry:r,spreadMethod:r,stopColor:r,stopOpacity:r,stroke:r,strokeDasharray:r,strokeLinecap:r,strokeOpacity:r,strokeWidth:r,textAnchor:r,transform:r,version:r,viewBox:r,x1:r,x2:r,x:r,y1:r,y2:r,y:r},DOMAttributeNames:{clipPath:"clip-path",fillOpacity:"fill-opacity",fontFamily:"font-family",fontSize:"font-size",gradientTransform:"gradientTransform",gradientUnits:"gradientUnits",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",patternContentUnits:"patternContentUnits",patternUnits:"patternUnits",preserveAspectRatio:"preserveAspectRatio",spreadMethod:"spreadMethod",stopColor:"stop-color",stopOpacity:"stop-opacity",strokeDasharray:"stroke-dasharray",strokeLinecap:"stroke-linecap",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",textAnchor:"text-anchor",viewBox:"viewBox"}};t.exports=o},{11:11}],102:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */
function n(e){if("selectionStart"in e&&i.hasSelectionCapabilities(e))return{start:e.selectionStart,end:e.selectionEnd};if(window.getSelection){var t=window.getSelection();return{anchorNode:t.anchorNode,anchorOffset:t.anchorOffset,focusNode:t.focusNode,focusOffset:t.focusOffset}}if(document.selection){var n=document.selection.createRange();return{parentElement:n.parentElement(),text:n.text,top:n.boundingTop,left:n.boundingLeft}}}function r(e){if(y||null==h||h!==u())return null;var t=n(h);if(!v||!p(v,t)){v=t;var r=s.getPooled(f.select,m,e);return r.type="select",r.target=h,a.accumulateTwoPhaseDispatches(r),r}}var o=e(16),a=e(21),i=e(71),s=e(108),u=e(136),l=e(153),c=e(157),p=e(166),d=o.topLevelTypes,f={select:{phasedRegistrationNames:{bubbled:c({onSelect:null}),captured:c({onSelectCapture:null})},dependencies:[d.topBlur,d.topContextMenu,d.topFocus,d.topKeyDown,d.topMouseDown,d.topMouseUp,d.topSelectionChange]}},h=null,m=null,v=null,y=!1,g={eventTypes:f,extractEvents:function(e,t,n,o){switch(e){case d.topFocus:(l(t)||"true"===t.contentEditable)&&(h=t,m=n,v=null);break;case d.topBlur:h=null,m=null,v=null;break;case d.topMouseDown:y=!0;break;case d.topContextMenu:case d.topMouseUp:return y=!1,r(o);case d.topSelectionChange:case d.topKeyDown:case d.topKeyUp:return r(o)}}};t.exports=g},{108:108,136:136,153:153,157:157,16:16,166:166,21:21,71:71}],103:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ServerReactRootIndex
 * @typechecks
 */
var n=Math.pow(2,53),r={createReactRootIndex:function(){return Math.ceil(Math.random()*n)}};t.exports=r},{}],104:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */
var n=e(16),r=e(20),o=e(21),a=e(105),i=e(108),s=e(109),u=e(111),l=e(112),c=e(107),p=e(113),d=e(114),f=e(115),h=e(137),m=e(150),v=e(157),y=e(171),g=n.topLevelTypes,C={blur:{phasedRegistrationNames:{bubbled:v({onBlur:!0}),captured:v({onBlurCapture:!0})}},click:{phasedRegistrationNames:{bubbled:v({onClick:!0}),captured:v({onClickCapture:!0})}},contextMenu:{phasedRegistrationNames:{bubbled:v({onContextMenu:!0}),captured:v({onContextMenuCapture:!0})}},copy:{phasedRegistrationNames:{bubbled:v({onCopy:!0}),captured:v({onCopyCapture:!0})}},cut:{phasedRegistrationNames:{bubbled:v({onCut:!0}),captured:v({onCutCapture:!0})}},doubleClick:{phasedRegistrationNames:{bubbled:v({onDoubleClick:!0}),captured:v({onDoubleClickCapture:!0})}},drag:{phasedRegistrationNames:{bubbled:v({onDrag:!0}),captured:v({onDragCapture:!0})}},dragEnd:{phasedRegistrationNames:{bubbled:v({onDragEnd:!0}),captured:v({onDragEndCapture:!0})}},dragEnter:{phasedRegistrationNames:{bubbled:v({onDragEnter:!0}),captured:v({onDragEnterCapture:!0})}},dragExit:{phasedRegistrationNames:{bubbled:v({onDragExit:!0}),captured:v({onDragExitCapture:!0})}},dragLeave:{phasedRegistrationNames:{bubbled:v({onDragLeave:!0}),captured:v({onDragLeaveCapture:!0})}},dragOver:{phasedRegistrationNames:{bubbled:v({onDragOver:!0}),captured:v({onDragOverCapture:!0})}},dragStart:{phasedRegistrationNames:{bubbled:v({onDragStart:!0}),captured:v({onDragStartCapture:!0})}},drop:{phasedRegistrationNames:{bubbled:v({onDrop:!0}),captured:v({onDropCapture:!0})}},focus:{phasedRegistrationNames:{bubbled:v({onFocus:!0}),captured:v({onFocusCapture:!0})}},input:{phasedRegistrationNames:{bubbled:v({onInput:!0}),captured:v({onInputCapture:!0})}},keyDown:{phasedRegistrationNames:{bubbled:v({onKeyDown:!0}),captured:v({onKeyDownCapture:!0})}},keyPress:{phasedRegistrationNames:{bubbled:v({onKeyPress:!0}),captured:v({onKeyPressCapture:!0})}},keyUp:{phasedRegistrationNames:{bubbled:v({onKeyUp:!0}),captured:v({onKeyUpCapture:!0})}},load:{phasedRegistrationNames:{bubbled:v({onLoad:!0}),captured:v({onLoadCapture:!0})}},error:{phasedRegistrationNames:{bubbled:v({onError:!0}),captured:v({onErrorCapture:!0})}},mouseDown:{phasedRegistrationNames:{bubbled:v({onMouseDown:!0}),captured:v({onMouseDownCapture:!0})}},mouseMove:{phasedRegistrationNames:{bubbled:v({onMouseMove:!0}),captured:v({onMouseMoveCapture:!0})}},mouseOut:{phasedRegistrationNames:{bubbled:v({onMouseOut:!0}),captured:v({onMouseOutCapture:!0})}},mouseOver:{phasedRegistrationNames:{bubbled:v({onMouseOver:!0}),captured:v({onMouseOverCapture:!0})}},mouseUp:{phasedRegistrationNames:{bubbled:v({onMouseUp:!0}),captured:v({onMouseUpCapture:!0})}},paste:{phasedRegistrationNames:{bubbled:v({onPaste:!0}),captured:v({onPasteCapture:!0})}},reset:{phasedRegistrationNames:{bubbled:v({onReset:!0}),captured:v({onResetCapture:!0})}},scroll:{phasedRegistrationNames:{bubbled:v({onScroll:!0}),captured:v({onScrollCapture:!0})}},submit:{phasedRegistrationNames:{bubbled:v({onSubmit:!0}),captured:v({onSubmitCapture:!0})}},touchCancel:{phasedRegistrationNames:{bubbled:v({onTouchCancel:!0}),captured:v({onTouchCancelCapture:!0})}},touchEnd:{phasedRegistrationNames:{bubbled:v({onTouchEnd:!0}),captured:v({onTouchEndCapture:!0})}},touchMove:{phasedRegistrationNames:{bubbled:v({onTouchMove:!0}),captured:v({onTouchMoveCapture:!0})}},touchStart:{phasedRegistrationNames:{bubbled:v({onTouchStart:!0}),captured:v({onTouchStartCapture:!0})}},wheel:{phasedRegistrationNames:{bubbled:v({onWheel:!0}),captured:v({onWheelCapture:!0})}}},b={topBlur:C.blur,topClick:C.click,topContextMenu:C.contextMenu,topCopy:C.copy,topCut:C.cut,topDoubleClick:C.doubleClick,topDrag:C.drag,topDragEnd:C.dragEnd,topDragEnter:C.dragEnter,topDragExit:C.dragExit,topDragLeave:C.dragLeave,topDragOver:C.dragOver,topDragStart:C.dragStart,topDrop:C.drop,topError:C.error,topFocus:C.focus,topInput:C.input,topKeyDown:C.keyDown,topKeyPress:C.keyPress,topKeyUp:C.keyUp,topLoad:C.load,topMouseDown:C.mouseDown,topMouseMove:C.mouseMove,topMouseOut:C.mouseOut,topMouseOver:C.mouseOver,topMouseUp:C.mouseUp,topPaste:C.paste,topReset:C.reset,topScroll:C.scroll,topSubmit:C.submit,topTouchCancel:C.touchCancel,topTouchEnd:C.touchEnd,topTouchMove:C.touchMove,topTouchStart:C.touchStart,topWheel:C.wheel};for(var E in b)b[E].dependencies=[E];var _={eventTypes:C,executeDispatch:function(e,t,n){var o=r.executeDispatch(e,t,n);y("boolean"!=typeof o,"Returning `false` from an event handler is deprecated and will be ignored in a future release. Instead, manually call e.stopPropagation() or e.preventDefault(), as appropriate."),o===!1&&(e.stopPropagation(),e.preventDefault())},extractEvents:function(e,t,n,r){var v=b[e];if(!v)return null;var y;switch(e){case g.topInput:case g.topLoad:case g.topError:case g.topReset:case g.topSubmit:y=i;break;case g.topKeyPress:if(0===h(r))return null;case g.topKeyDown:case g.topKeyUp:y=u;break;case g.topBlur:case g.topFocus:y=s;break;case g.topClick:if(2===r.button)return null;case g.topContextMenu:case g.topDoubleClick:case g.topMouseDown:case g.topMouseMove:case g.topMouseOut:case g.topMouseOver:case g.topMouseUp:y=l;break;case g.topDrag:case g.topDragEnd:case g.topDragEnter:case g.topDragExit:case g.topDragLeave:case g.topDragOver:case g.topDragStart:case g.topDrop:y=c;break;case g.topTouchCancel:case g.topTouchEnd:case g.topTouchMove:case g.topTouchStart:y=p;break;case g.topScroll:y=d;break;case g.topWheel:y=f;break;case g.topCopy:case g.topCut:case g.topPaste:y=a}m(y,"SimpleEventPlugin: Unhandled event type, `%s`.",e);var C=y.getPooled(v,n,r);return o.accumulateTwoPhaseDispatches(C),C}};t.exports=_},{105:105,107:107,108:108,109:109,111:111,112:112,113:113,114:114,115:115,137:137,150:150,157:157,16:16,171:171,20:20,21:21}],105:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(108),o={clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}};r.augmentClass(n,o),t.exports=n},{108:108}],106:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(108),o={data:null};r.augmentClass(n,o),t.exports=n},{108:108}],107:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(112),o={dataTransfer:null};r.augmentClass(n,o),t.exports=n},{112:112}],108:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */
function n(e,t,n){this.dispatchConfig=e,this.dispatchMarker=t,this.nativeEvent=n;var r=this.constructor.Interface;for(var o in r)if(r.hasOwnProperty(o)){var i=r[o];this[o]=i?i(n):n[o]}var s=null!=n.defaultPrevented?n.defaultPrevented:n.returnValue===!1;this.isDefaultPrevented=s?a.thatReturnsTrue:a.thatReturnsFalse,this.isPropagationStopped=a.thatReturnsFalse}var r=e(30),o=e(29),a=e(129),i=e(140),s={type:null,target:i,currentTarget:a.thatReturnsNull,eventPhase:null,bubbles:null,cancelable:null,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:null,isTrusted:null};o(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e.preventDefault?e.preventDefault():e.returnValue=!1,this.isDefaultPrevented=a.thatReturnsTrue},stopPropagation:function(){var e=this.nativeEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0,this.isPropagationStopped=a.thatReturnsTrue},persist:function(){this.isPersistent=a.thatReturnsTrue},isPersistent:a.thatReturnsFalse,destructor:function(){var e=this.constructor.Interface;for(var t in e)this[t]=null;this.dispatchConfig=null,this.dispatchMarker=null,this.nativeEvent=null}}),n.Interface=s,n.augmentClass=function(e,t){var n=this,a=Object.create(n.prototype);o(a,e.prototype),e.prototype=a,e.prototype.constructor=e,e.Interface=o({},n.Interface,t),e.augmentClass=n.augmentClass,r.addPoolingTo(e,r.threeArgumentPooler)},r.addPoolingTo(n,r.threeArgumentPooler),t.exports=n},{129:129,140:140,29:29,30:30}],109:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(114),o={relatedTarget:null};r.augmentClass(n,o),t.exports=n},{114:114}],110:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(108),o={data:null};r.augmentClass(n,o),t.exports=n},{108:108}],111:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(114),o=e(137),a=e(138),i=e(139),s={key:a,location:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,repeat:null,locale:null,getModifierState:i,charCode:function(e){return"keypress"===e.type?o(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?o(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}};r.augmentClass(n,s),t.exports=n},{114:114,137:137,138:138,139:139}],112:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(114),o=e(117),a=e(139),i={screenX:null,screenY:null,clientX:null,clientY:null,ctrlKey:null,shiftKey:null,altKey:null,metaKey:null,getModifierState:a,button:function(e){var t=e.button;return"which"in e?t:2===t?2:4===t?1:0},buttons:null,relatedTarget:function(e){return e.relatedTarget||(e.fromElement===e.srcElement?e.toElement:e.fromElement)},pageX:function(e){return"pageX"in e?e.pageX:e.clientX+o.currentScrollLeft},pageY:function(e){return"pageY"in e?e.pageY:e.clientY+o.currentScrollTop}};r.augmentClass(n,i),t.exports=n},{114:114,117:117,139:139}],113:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(114),o=e(139),a={touches:null,targetTouches:null,changedTouches:null,altKey:null,metaKey:null,ctrlKey:null,shiftKey:null,getModifierState:o};r.augmentClass(n,a),t.exports=n},{114:114,139:139}],114:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(108),o=e(140),a={view:function(e){if(e.view)return e.view;var t=o(e);if(null!=t&&t.window===t)return t;var n=t.ownerDocument;return n?n.defaultView||n.parentWindow:window},detail:function(e){return e.detail||0}};r.augmentClass(n,a),t.exports=n},{108:108,140:140}],115:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 * @typechecks static-only
 */
function n(e,t,n){r.call(this,e,t,n)}var r=e(112),o={deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:null,deltaMode:null};r.augmentClass(n,o),t.exports=n},{112:112}],116:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */
var n=e(150),r={reinitializeTransaction:function(){this.transactionWrappers=this.getTransactionWrappers(),this.wrapperInitData?this.wrapperInitData.length=0:this.wrapperInitData=[],this._isInTransaction=!1},_isInTransaction:!1,getTransactionWrappers:null,isInTransaction:function(){return!!this._isInTransaction},perform:function(e,t,r,o,a,i,s,u){n(!this.isInTransaction(),"Transaction.perform(...): Cannot initialize a transaction when there is already an outstanding transaction.");var l,c;try{this._isInTransaction=!0,l=!0,this.initializeAll(0),c=e.call(t,r,o,a,i,s,u),l=!1}finally{try{if(l)try{this.closeAll(0)}catch(p){}else this.closeAll(0)}finally{this._isInTransaction=!1}}return c},initializeAll:function(e){for(var t=this.transactionWrappers,n=e;n<t.length;n++){var r=t[n];try{this.wrapperInitData[n]=o.OBSERVED_ERROR,this.wrapperInitData[n]=r.initialize?r.initialize.call(this):null}finally{if(this.wrapperInitData[n]===o.OBSERVED_ERROR)try{this.initializeAll(n+1)}catch(a){}}}},closeAll:function(e){n(this.isInTransaction(),"Transaction.closeAll(): Cannot close transaction when none are open.");for(var t=this.transactionWrappers,r=e;r<t.length;r++){var a,i=t[r],s=this.wrapperInitData[r];try{a=!0,s!==o.OBSERVED_ERROR&&i.close&&i.close.call(this,s),a=!1}finally{if(a)try{this.closeAll(r+1)}catch(u){}}}this.wrapperInitData.length=0}},o={Mixin:r,OBSERVED_ERROR:{}};t.exports=o},{150:150}],117:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */
var n={currentScrollLeft:0,currentScrollTop:0,refreshScrollValues:function(e){n.currentScrollLeft=e.x,n.currentScrollTop=e.y}};t.exports=n},{}],118:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */
function n(e,t){if(r(null!=t,"accumulateInto(...): Accumulated items must not be null or undefined."),null==e)return t;var n=Array.isArray(e),o=Array.isArray(t);return n&&o?(e.push.apply(e,t),e):n?(e.push(t),e):o?[e].concat(t):[e,t]}var r=e(150);t.exports=n},{150:150}],119:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 */
function n(e){for(var t=1,n=0,o=0;o<e.length;o++)t=(t+e.charCodeAt(o))%r,n=(n+t)%r;return t|n<<16}var r=65521;t.exports=n},{}],120:[function(e,t){function n(e){return e.replace(r,function(e,t){return t.toUpperCase()})}/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelize
 * @typechecks
 */
var r=/-(.)/g;t.exports=n},{}],121:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelizeStyleName
 * @typechecks
 */
function n(e){return r(e.replace(o,"ms-"))}var r=e(120),o=/^-ms-/;t.exports=n},{120:120}],122:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule cloneWithProps
 */
function n(e,t){i(!e.ref,"You are calling cloneWithProps() on a child with a ref. This is dangerous because you're creating a new child which will not be added as a ref to its parent.");var n=o.mergeProps(t,e.props);return!n.hasOwnProperty(s)&&e.props.hasOwnProperty(s)&&(n.children=e.props.children),r.createElement(e.type,n)}var r=e(63),o=e(83),a=e(157),i=e(171),s=a({children:null});t.exports=n},{157:157,171:171,63:63,83:83}],123:[function(e,t){function n(e,t){return e&&t?e===t?!0:r(e)?!1:r(t)?n(e,t.parentNode):e.contains?e.contains(t):e.compareDocumentPosition?!!(16&e.compareDocumentPosition(t)):!1:!1}/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule containsNode
 * @typechecks
 */
var r=e(154);t.exports=n},{154:154}],124:[function(e,t){function n(e){return!!e&&("object"==typeof e||"function"==typeof e)&&"length"in e&&!("setInterval"in e)&&"number"!=typeof e.nodeType&&(Array.isArray(e)||"callee"in e||"item"in e)}function r(e){return n(e)?Array.isArray(e)?e.slice():o(e):[e]}/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createArrayFromMixed
 * @typechecks
 */
var o=e(168);t.exports=r},{168:168}],125:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createFullPageComponent
 * @typechecks
 */
function n(e){var t=o.createFactory(e),n=r.createClass({tagName:e.toUpperCase(),displayName:"ReactFullPageComponent"+e,componentWillUnmount:function(){a(!1,"%s tried to unmount. Because of cross-browser quirks it is impossible to unmount some top-level components (eg <html>, <head>, and <body>) reliably and efficiently. To fix this, have a single top-level component that never unmounts render these elements.",this.constructor.displayName)},render:function(){return t(this.props)}});return n}var r=e(38),o=e(63),a=e(150);t.exports=n},{150:150,38:38,63:63}],126:[function(e,t){function n(e){var t=e.match(l);return t&&t[1].toLowerCase()}function r(e,t){var r=u;s(!!u,"createNodesFromMarkup dummy not initialized");var o=n(e),l=o&&i(o);if(l){r.innerHTML=l[1]+e+l[2];for(var c=l[0];c--;)r=r.lastChild}else r.innerHTML=e;var p=r.getElementsByTagName("script");p.length&&(s(t,"createNodesFromMarkup(...): Unexpected <script> element rendered."),a(p).forEach(t));for(var d=a(r.childNodes);r.lastChild;)r.removeChild(r.lastChild);return d}/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createNodesFromMarkup
 * @typechecks
 */
var o=e(22),a=e(124),i=e(142),s=e(150),u=o.canUseDOM?document.createElement("div"):null,l=/^\s*<(\w+)/;t.exports=r},{124:124,142:142,150:150,22:22}],127:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule cx
 */
function n(e){return r(o,"React.addons.classSet will be deprecated in a future version. See http://fb.me/react-addons-classset"),o=!0,"object"==typeof e?Object.keys(e).filter(function(t){return e[t]}).join(" "):Array.prototype.join.call(arguments," ")}var r=e(171),o=!1;t.exports=n},{171:171}],128:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 * @typechecks static-only
 */
function n(e,t){var n=null==t||"boolean"==typeof t||""===t;if(n)return"";var r=isNaN(t);return r||0===t||o.hasOwnProperty(e)&&o[e]?""+t:("string"==typeof t&&(t=t.trim()),t+"px")}var r=e(5),o=r.isUnitlessNumber;t.exports=n},{5:5}],129:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */
function n(e){return function(){return e}}function r(){}r.thatReturns=n,r.thatReturnsFalse=n(!1),r.thatReturnsTrue=n(!0),r.thatReturnsNull=n(null),r.thatReturnsThis=function(){return this},r.thatReturnsArgument=function(e){return e},t.exports=r},{}],130:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyObject
 */
var n={};Object.freeze(n),t.exports=n},{}],131:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule escapeTextContentForBrowser
 */
function n(e){return o[e]}function r(e){return(""+e).replace(a,n)}var o={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#x27;"},a=/[&><"']/g;t.exports=r},{}],132:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule findDOMNode
 * @typechecks static-only
 */
function n(e){var t=r.current;return null!==t&&(u(t._warnedAboutRefsInRender,"%s is accessing getDOMNode or findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.",t.getName()||"A component"),t._warnedAboutRefsInRender=!0),null==e?null:s(e)?e:o.has(e)?a.getNodeFromInstance(e):(i(null==e.render||"function"!=typeof e.render,"Component (with keys: %s) contains `render` method but is not mounted in the DOM",Object.keys(e)),void i(!1,"Element appears to be neither ReactComponent nor DOMNode (keys: %s)",Object.keys(e)))}var r=e(45),o=e(73),a=e(77),i=e(150),s=e(152),u=e(171);t.exports=n},{150:150,152:152,171:171,45:45,73:73,77:77}],133:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 */
function n(e,t,n){var r=e,o=!r.hasOwnProperty(n);a(o,"flattenChildren(...): Encountered two children with the same key, `%s`. Child keys must be unique; when two children share a key, only the first child will be used.",n),o&&null!=t&&(r[n]=t)}function r(e){if(null==e)return e;var t={};return o(e,n,t),t}var o=e(169),a=e(171);t.exports=r},{169:169,171:171}],134:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule focusNode
 */
function n(e){try{e.focus()}catch(t){}}t.exports=n},{}],135:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */
var n=function(e,t,n){Array.isArray(e)?e.forEach(t,n):e&&t.call(n,e)};t.exports=n},{}],136:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getActiveElement
 * @typechecks
 */
function n(){try{return document.activeElement||document.body}catch(e){return document.body}}t.exports=n},{}],137:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 * @typechecks static-only
 */
function n(e){var t,n=e.keyCode;return"charCode"in e?(t=e.charCode,0===t&&13===n&&(t=13)):t=n,t>=32||13===t?t:0}t.exports=n},{}],138:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 * @typechecks static-only
 */
function n(e){if(e.key){var t=o[e.key]||e.key;if("Unidentified"!==t)return t}if("keypress"===e.type){var n=r(e);return 13===n?"Enter":String.fromCharCode(n)}return"keydown"===e.type||"keyup"===e.type?a[e.keyCode]||"Unidentified":""}var r=e(137),o={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},a={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"};t.exports=n},{137:137}],139:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 * @typechecks static-only
 */
function n(e){var t=this,n=t.nativeEvent;if(n.getModifierState)return n.getModifierState(e);var r=o[e];return r?!!n[r]:!1}function r(){return n}var o={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};t.exports=r},{}],140:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 * @typechecks static-only
 */
function n(e){var t=e.target||e.srcElement||window;return 3===t.nodeType?t.parentNode:t}t.exports=n},{}],141:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getIteratorFn
 * @typechecks static-only
 */
function n(e){var t=e&&(r&&e[r]||e[o]);return"function"==typeof t?t:void 0}var r="function"==typeof Symbol&&Symbol.iterator,o="@@iterator";t.exports=n},{}],142:[function(e,t){function n(e){return o(!!a,"Markup wrapping node not initialized"),p.hasOwnProperty(e)||(e="*"),i.hasOwnProperty(e)||(a.innerHTML="*"===e?"<link />":"<"+e+"></"+e+">",i[e]=!a.firstChild),i[e]?p[e]:null}/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getMarkupWrap
 */
var r=e(22),o=e(150),a=r.canUseDOM?document.createElement("div"):null,i={circle:!0,clipPath:!0,defs:!0,ellipse:!0,g:!0,line:!0,linearGradient:!0,path:!0,polygon:!0,polyline:!0,radialGradient:!0,rect:!0,stop:!0,text:!0},s=[1,'<select multiple="true">',"</select>"],u=[1,"<table>","</table>"],l=[3,"<table><tbody><tr>","</tr></tbody></table>"],c=[1,"<svg>","</svg>"],p={"*":[1,"?<div>","</div>"],area:[1,"<map>","</map>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],legend:[1,"<fieldset>","</fieldset>"],param:[1,"<object>","</object>"],tr:[2,"<table><tbody>","</tbody></table>"],optgroup:s,option:s,caption:u,colgroup:u,tbody:u,tfoot:u,thead:u,td:l,th:l,circle:c,clipPath:c,defs:c,ellipse:c,g:c,line:c,linearGradient:c,path:c,polygon:c,polyline:c,radialGradient:c,rect:c,stop:c,text:c};t.exports=n},{150:150,22:22}],143:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */
function n(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r(e){for(;e;){if(e.nextSibling)return e.nextSibling;e=e.parentNode}}function o(e,t){for(var o=n(e),a=0,i=0;o;){if(3===o.nodeType){if(i=a+o.textContent.length,t>=a&&i>=t)return{node:o,offset:t-a};a=i}o=n(r(o))}}t.exports=o},{}],144:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getReactRootElementInContainer
 */
function n(e){return e?e.nodeType===r?e.documentElement:e.firstChild:null}var r=9;t.exports=n},{}],145:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */
function n(){return!o&&r.canUseDOM&&(o="textContent"in document.documentElement?"textContent":"innerText"),o}var r=e(22),o=null;t.exports=n},{22:22}],146:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getUnboundedScrollPosition
 * @typechecks
 */
function n(e){return e===window?{x:window.pageXOffset||document.documentElement.scrollLeft,y:window.pageYOffset||document.documentElement.scrollTop}:{x:e.scrollLeft,y:e.scrollTop}}t.exports=n},{}],147:[function(e,t){function n(e){return e.replace(r,"-$1").toLowerCase()}/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenate
 * @typechecks
 */
var r=/([A-Z])/g;t.exports=n},{}],148:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenateStyleName
 * @typechecks
 */
function n(e){return r(e).replace(o,"-ms-")}var r=e(147),o=/^ms-/;t.exports=n},{147:147}],149:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 * @typechecks static-only
 */
function n(e){return"function"==typeof e&&"undefined"!=typeof e.prototype&&"function"==typeof e.prototype.mountComponent&&"function"==typeof e.prototype.receiveComponent}function r(e,t){var r;if((null===e||e===!1)&&(e=a.emptyElement),"object"==typeof e){var o=e;l(o&&("function"==typeof o.type||"string"==typeof o.type),"Only functions or strings can be mounted as React components."),r=t===o.type&&"string"==typeof o.type?i.createInternalComponent(o):n(o.type)?new o.type(o):new c}else"string"==typeof e||"number"==typeof e?r=i.createInstanceForText(e):u(!1,"Encountered invalid React node of type %s",typeof e);return l("function"==typeof r.construct&&"function"==typeof r.mountComponent&&"function"==typeof r.receiveComponent&&"function"==typeof r.unmountComponent,"Only React Components can be mounted."),r.construct(e),r._mountIndex=0,r._mountImage=null,r._isOwnerNecessary=!1,r._warnedAboutRefsInRender=!1,Object.preventExtensions&&Object.preventExtensions(r),r}var o=e(43),a=e(65),i=e(80),s=e(29),u=e(150),l=e(171),c=function(){};s(c.prototype,o.Mixin,{_instantiateReactComponent:r}),t.exports=r},{150:150,171:171,29:29,43:43,65:65,80:80}],150:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */
var n=function(e,t,n,r,o,a,i,s){if(void 0===t)throw new Error("invariant requires an error message argument");if(!e){var u;if(void 0===t)u=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[n,r,o,a,i,s],c=0;u=new Error("Invariant Violation: "+t.replace(/%s/g,function(){return l[c++]}))}throw u.framesToPop=1,u}};t.exports=n},{}],151:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */
function n(e,t){if(!o.canUseDOM||t&&!("addEventListener"in document))return!1;var n="on"+e,a=n in document;if(!a){var i=document.createElement("div");i.setAttribute(n,"return;"),a="function"==typeof i[n]}return!a&&r&&"wheel"===e&&(a=document.implementation.hasFeature("Events.wheel","3.0")),a}var r,o=e(22);o.canUseDOM&&(r=document.implementation&&document.implementation.hasFeature&&document.implementation.hasFeature("","")!==!0),t.exports=n},{22:22}],152:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isNode
 * @typechecks
 */
function n(e){return!(!e||!("function"==typeof Node?e instanceof Node:"object"==typeof e&&"number"==typeof e.nodeType&&"string"==typeof e.nodeName))}t.exports=n},{}],153:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 */
function n(e){return e&&("INPUT"===e.nodeName&&r[e.type]||"TEXTAREA"===e.nodeName)}var r={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};t.exports=n},{}],154:[function(e,t){function n(e){return r(e)&&3==e.nodeType}/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextNode
 * @typechecks
 */
var r=e(152);t.exports=n},{152:152}],155:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule joinClasses
 * @typechecks static-only
 */
function n(e){e||(e="");var t,n=arguments.length;if(n>1)for(var r=1;n>r;r++)t=arguments[r],t&&(e=(e?e+" ":"")+t);return e}t.exports=n},{}],156:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyMirror
 * @typechecks static-only
 */
var n=e(150),r=function(e){var t,r={};n(e instanceof Object&&!Array.isArray(e),"keyMirror(...): Argument must be an object.");for(t in e)e.hasOwnProperty(t)&&(r[t]=t);return r};t.exports=r},{150:150}],157:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 */
var n=function(e){var t;for(t in e)if(e.hasOwnProperty(t))return t;return null};t.exports=n},{}],158:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule mapObject
 */
function n(e,t,n){if(!e)return null;var o={};for(var a in e)r.call(e,a)&&(o[a]=t.call(n,e[a],a,e));return o}var r=Object.prototype.hasOwnProperty;t.exports=n},{}],159:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule memoizeStringOnly
 * @typechecks static-only
 */
function n(e){var t={};return function(n){return t.hasOwnProperty(n)||(t[n]=e.call(this,n)),t[n]}}t.exports=n},{}],160:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */
function n(e){return o(r.isValidElement(e),"onlyChild must be passed a children with exactly one child."),e}var r=e(63),o=e(150);t.exports=n},{150:150,63:63}],161:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performance
 * @typechecks
 */
var n,r=e(22);r.canUseDOM&&(n=window.performance||window.msPerformance||window.webkitPerformance),t.exports=n||{}},{22:22}],162:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performanceNow
 * @typechecks
 */
var n=e(161);n&&n.now||(n=Date);var r=n.now.bind(n);t.exports=r},{161:161}],163:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule quoteAttributeValueForBrowser
 */
function n(e){return'"'+r(e)+'"'}var r=e(131);t.exports=n},{131:131}],164:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */
var n=e(22),r=/^[ \r\n\t\f]/,o=/<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/,a=function(e,t){e.innerHTML=t};if("undefined"!=typeof MSApp&&MSApp.execUnsafeLocalFunction&&(a=function(e,t){MSApp.execUnsafeLocalFunction(function(){e.innerHTML=t})}),n.canUseDOM){var i=document.createElement("div");i.innerHTML=" ",""===i.innerHTML&&(a=function(e,t){if(e.parentNode&&e.parentNode.replaceChild(e,e),r.test(t)||"<"===t[0]&&o.test(t)){e.innerHTML="\ufeff"+t;var n=e.firstChild;1===n.data.length?e.removeChild(n):n.deleteData(0,1)}else e.innerHTML=t})}t.exports=a},{22:22}],165:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setTextContent
 */
var n=e(22),r=e(131),o=e(164),a=function(e,t){e.textContent=t};n.canUseDOM&&("textContent"in document.documentElement||(a=function(e,t){o(e,r(t))})),t.exports=a},{131:131,164:164,22:22}],166:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 */
function n(e,t){if(e===t)return!0;var n;for(n in e)if(e.hasOwnProperty(n)&&(!t.hasOwnProperty(n)||e[n]!==t[n]))return!1;for(n in t)if(t.hasOwnProperty(n)&&!e.hasOwnProperty(n))return!1;return!0}t.exports=n},{}],167:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 * @typechecks static-only
 */
function n(e,t){if(null!=e&&null!=t){var n=typeof e,o=typeof t;if("string"===n||"number"===n)return"string"===o||"number"===o;if("object"===o&&e.type===t.type&&e.key===t.key){var a=e._owner===t._owner,i=null,s=null,u=null;return a||(null!=e._owner&&null!=e._owner.getPublicInstance()&&null!=e._owner.getPublicInstance().constructor&&(i=e._owner.getPublicInstance().constructor.displayName),null!=t._owner&&null!=t._owner.getPublicInstance()&&null!=t._owner.getPublicInstance().constructor&&(s=t._owner.getPublicInstance().constructor.displayName),null!=t.type&&null!=t.type.displayName&&(u=t.type.displayName),null!=t.type&&"string"==typeof t.type&&(u=t.type),("string"!=typeof t.type||"input"===t.type||"textarea"===t.type)&&(null!=e._owner&&e._owner._isOwnerNecessary===!1||null!=t._owner&&t._owner._isOwnerNecessary===!1)&&(null!=e._owner&&(e._owner._isOwnerNecessary=!0),null!=t._owner&&(t._owner._isOwnerNecessary=!0),r(!1,"<%s /> is being rendered by both %s and %s using the same key (%s) in the same place. Currently, this means that they don't preserve state. This behavior should be very rare so we're considering deprecating it. Please contact the React team and explain your use case so that we can take that into consideration.",u||"Unknown Component",i||"[Unknown]",s||"[Unknown]",e.key))),a}}return!1}var r=e(171);t.exports=n},{171:171}],168:[function(e,t){function n(e){var t=e.length;if(r(!Array.isArray(e)&&("object"==typeof e||"function"==typeof e),"toArray: Array-like object expected"),r("number"==typeof t,"toArray: Object needs a length property"),r(0===t||t-1 in e,"toArray: Object should have keys for indices"),e.hasOwnProperty)try{return Array.prototype.slice.call(e)}catch(n){}for(var o=Array(t),a=0;t>a;a++)o[a]=e[a];return o}/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule toArray
 * @typechecks
 */
var r=e(150);t.exports=n},{150:150}],169:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */
function n(e){return v[e]}function r(e,t){return e&&null!=e.key?a(e.key):t.toString(36)}function o(e){return(""+e).replace(y,n)}function a(e){return"$"+o(e)}function i(e,t,n,o,s){var c=typeof e;if(("undefined"===c||"boolean"===c)&&(e=null),null===e||"string"===c||"number"===c||u.isValidElement(e))return o(s,e,""===t?h+r(e,0):t,n),1;var v,y,C,b=0;if(Array.isArray(e))for(var E=0;E<e.length;E++)v=e[E],y=(""!==t?t+m:h)+r(v,E),C=n+b,b+=i(v,y,C,o,s);else{var _=p(e);if(_){var w,x=_.call(e);if(_!==e.entries)for(var D=0;!(w=x.next()).done;)v=w.value,y=(""!==t?t+m:h)+r(v,D++),C=n+b,b+=i(v,y,C,o,s);else for(f(g,"Using Maps as children is not yet fully supported. It is an experimental feature that might be removed. Convert it to a sequence / iterable of keyed ReactElements instead."),g=!0;!(w=x.next()).done;){var M=w.value;M&&(v=M[1],y=(""!==t?t+m:h)+a(M[0])+m+r(v,0),C=n+b,b+=i(v,y,C,o,s))}}else if("object"===c){d(1!==e.nodeType,"traverseAllChildren(...): Encountered an invalid child; DOM elements are not valid children of React components.");var T=l.extract(e);for(var R in T)T.hasOwnProperty(R)&&(v=T[R],y=(""!==t?t+m:h)+a(R)+m+r(v,0),C=n+b,b+=i(v,y,C,o,s))}}return b}function s(e,t,n){return null==e?0:i(e,"",0,t,n)}var u=e(63),l=e(69),c=e(72),p=e(141),d=e(150),f=e(171),h=c.SEPARATOR,m=":",v={"=":"=0",".":"=1",":":"=2"},y=/[=.:]/g,g=!1;t.exports=s},{141:141,150:150,171:171,63:63,69:69,72:72}],170:[function(e,t){/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule update
 */
function n(e){return Array.isArray(e)?e.concat():e&&"object"==typeof e?a(new e.constructor,e):e}function r(e,t,n){s(Array.isArray(e),"update(): expected target of %s to be an array; got %s.",n,e);var r=t[n];s(Array.isArray(r),"update(): expected spec of %s to be an array; got %s. Did you forget to wrap your parameter in an array?",n,r)}function o(e,t){if(s("object"==typeof t,"update(): You provided a key path to update() that did not contain one of %s. Did you forget to include {%s: ...}?",m.join(", "),d),u.call(t,d))return s(1===Object.keys(t).length,"Cannot have more than one key in an object with %s",d),t[d];var i=n(e);if(u.call(t,f)){var y=t[f];s(y&&"object"==typeof y,"update(): %s expects a spec of type 'object'; got %s",f,y),s(i&&"object"==typeof i,"update(): %s expects a target of type 'object'; got %s",f,i),a(i,t[f])}u.call(t,l)&&(r(e,t,l),t[l].forEach(function(e){i.push(e)})),u.call(t,c)&&(r(e,t,c),t[c].forEach(function(e){i.unshift(e)})),u.call(t,p)&&(s(Array.isArray(e),"Expected %s target to be an array; got %s",p,e),s(Array.isArray(t[p]),"update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",p,t[p]),t[p].forEach(function(e){s(Array.isArray(e),"update(): expected spec of %s to be an array of arrays; got %s. Did you forget to wrap your parameters in an array?",p,t[p]),i.splice.apply(i,e)})),u.call(t,h)&&(s("function"==typeof t[h],"update(): expected spec of %s to be a function; got %s.",h,t[h]),i=t[h](i));for(var g in t)v.hasOwnProperty(g)&&v[g]||(i[g]=o(e[g],t[g]));return i}var a=e(29),i=e(157),s=e(150),u={}.hasOwnProperty,l=i({$push:null}),c=i({$unshift:null}),p=i({$splice:null}),d=i({$set:null}),f=i({$merge:null}),h=i({$apply:null}),m=[l,c,p,d,f,h],v={};m.forEach(function(e){v[e]=!0}),t.exports=o},{150:150,157:157,29:29}],171:[function(e,t){/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */
var n=e(129),r=n;r=function(e,t){for(var n=[],r=2,o=arguments.length;o>r;r++)n.push(arguments[r]);if(void 0===t)throw new Error("`warning(condition, format, ...args)` requires a warning message argument");if(t.length<10||/^[s\W]*$/.test(t))throw new Error("The warning format should be able to uniquely identify this warning. Please, use a more descriptive format than: "+t);if(0!==t.indexOf("Failed Composite propType: ")&&!e){var a=0,i="Warning: "+t.replace(/%s/g,function(){return n[a++]});console.warn(i);try{throw new Error(i)}catch(s){}}},t.exports=r},{129:129}]},{},[1])(1)});
/* ========================================================================
 * Bootstrap: tooltip.js v3.3.5
 * http://getbootstrap.com/javascript/#tooltip
 * Inspired by the original jQuery.tipsy by Jason Frame
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TOOLTIP PUBLIC CLASS DEFINITION
  // ===============================

  var Tooltip = function (element, options) {
    this.type       = null
    this.options    = null
    this.enabled    = null
    this.timeout    = null
    this.hoverState = null
    this.$element   = null
    this.inState    = null

    this.init('tooltip', element, options)
  }

  Tooltip.VERSION  = '3.3.5'

  Tooltip.TRANSITION_DURATION = 150

  Tooltip.DEFAULTS = {
    animation: true,
    placement: 'top',
    selector: false,
    template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
    trigger: 'hover focus',
    title: '',
    delay: 0,
    html: false,
    container: false,
    viewport: {
      selector: 'body',
      padding: 0
    }
  }

  Tooltip.prototype.init = function (type, element, options) {
    this.enabled   = true
    this.type      = type
    this.$element  = $(element)
    this.options   = this.getOptions(options)
    this.$viewport = this.options.viewport && $($.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : (this.options.viewport.selector || this.options.viewport))
    this.inState   = { click: false, hover: false, focus: false }

    if (this.$element[0] instanceof document.constructor && !this.options.selector) {
      throw new Error('`selector` option must be specified when initializing ' + this.type + ' on the window.document object!')
    }

    var triggers = this.options.trigger.split(' ')

    for (var i = triggers.length; i--;) {
      var trigger = triggers[i]

      if (trigger == 'click') {
        this.$element.on('click.' + this.type, this.options.selector, $.proxy(this.toggle, this))
      } else if (trigger != 'manual') {
        var eventIn  = trigger == 'hover' ? 'mouseenter' : 'focusin'
        var eventOut = trigger == 'hover' ? 'mouseleave' : 'focusout'

        this.$element.on(eventIn  + '.' + this.type, this.options.selector, $.proxy(this.enter, this))
        this.$element.on(eventOut + '.' + this.type, this.options.selector, $.proxy(this.leave, this))
      }
    }

    this.options.selector ?
      (this._options = $.extend({}, this.options, { trigger: 'manual', selector: '' })) :
      this.fixTitle()
  }

  Tooltip.prototype.getDefaults = function () {
    return Tooltip.DEFAULTS
  }

  Tooltip.prototype.getOptions = function (options) {
    options = $.extend({}, this.getDefaults(), this.$element.data(), options)

    if (options.delay && typeof options.delay == 'number') {
      options.delay = {
        show: options.delay,
        hide: options.delay
      }
    }

    return options
  }

  Tooltip.prototype.getDelegateOptions = function () {
    var options  = {}
    var defaults = this.getDefaults()

    this._options && $.each(this._options, function (key, value) {
      if (defaults[key] != value) options[key] = value
    })

    return options
  }

  Tooltip.prototype.enter = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusin' ? 'focus' : 'hover'] = true
    }

    if (self.tip().hasClass('in') || self.hoverState == 'in') {
      self.hoverState = 'in'
      return
    }

    clearTimeout(self.timeout)

    self.hoverState = 'in'

    if (!self.options.delay || !self.options.delay.show) return self.show()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'in') self.show()
    }, self.options.delay.show)
  }

  Tooltip.prototype.isInStateTrue = function () {
    for (var key in this.inState) {
      if (this.inState[key]) return true
    }

    return false
  }

  Tooltip.prototype.leave = function (obj) {
    var self = obj instanceof this.constructor ?
      obj : $(obj.currentTarget).data('bs.' + this.type)

    if (!self) {
      self = new this.constructor(obj.currentTarget, this.getDelegateOptions())
      $(obj.currentTarget).data('bs.' + this.type, self)
    }

    if (obj instanceof $.Event) {
      self.inState[obj.type == 'focusout' ? 'focus' : 'hover'] = false
    }

    if (self.isInStateTrue()) return

    clearTimeout(self.timeout)

    self.hoverState = 'out'

    if (!self.options.delay || !self.options.delay.hide) return self.hide()

    self.timeout = setTimeout(function () {
      if (self.hoverState == 'out') self.hide()
    }, self.options.delay.hide)
  }

  Tooltip.prototype.show = function () {
    var e = $.Event('show.bs.' + this.type)

    if (this.hasContent() && this.enabled) {
      this.$element.trigger(e)

      var inDom = $.contains(this.$element[0].ownerDocument.documentElement, this.$element[0])
      if (e.isDefaultPrevented() || !inDom) return
      var that = this

      var $tip = this.tip()

      var tipId = this.getUID(this.type)

      this.setContent()
      $tip.attr('id', tipId)
      this.$element.attr('aria-describedby', tipId)

      if (this.options.animation) $tip.addClass('fade')

      var placement = typeof this.options.placement == 'function' ?
        this.options.placement.call(this, $tip[0], this.$element[0]) :
        this.options.placement

      var autoToken = /\s?auto?\s?/i
      var autoPlace = autoToken.test(placement)
      if (autoPlace) placement = placement.replace(autoToken, '') || 'top'

      $tip
        .detach()
        .css({ top: 0, left: 0, display: 'block' })
        .addClass(placement)
        .data('bs.' + this.type, this)

      this.options.container ? $tip.appendTo(this.options.container) : $tip.insertAfter(this.$element)
      this.$element.trigger('inserted.bs.' + this.type)

      var pos          = this.getPosition()
      var actualWidth  = $tip[0].offsetWidth
      var actualHeight = $tip[0].offsetHeight

      if (autoPlace) {
        var orgPlacement = placement
        var viewportDim = this.getPosition(this.$viewport)

        placement = placement == 'bottom' && pos.bottom + actualHeight > viewportDim.bottom ? 'top'    :
                    placement == 'top'    && pos.top    - actualHeight < viewportDim.top    ? 'bottom' :
                    placement == 'right'  && pos.right  + actualWidth  > viewportDim.width  ? 'left'   :
                    placement == 'left'   && pos.left   - actualWidth  < viewportDim.left   ? 'right'  :
                    placement

        $tip
          .removeClass(orgPlacement)
          .addClass(placement)
      }

      var calculatedOffset = this.getCalculatedOffset(placement, pos, actualWidth, actualHeight)

      this.applyPlacement(calculatedOffset, placement)

      var complete = function () {
        var prevHoverState = that.hoverState
        that.$element.trigger('shown.bs.' + that.type)
        that.hoverState = null

        if (prevHoverState == 'out') that.leave(that)
      }

      $.support.transition && this.$tip.hasClass('fade') ?
        $tip
          .one('bsTransitionEnd', complete)
          .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
        complete()
    }
  }

  Tooltip.prototype.applyPlacement = function (offset, placement) {
    var $tip   = this.tip()
    var width  = $tip[0].offsetWidth
    var height = $tip[0].offsetHeight

    // manually read margins because getBoundingClientRect includes difference
    var marginTop = parseInt($tip.css('margin-top'), 10)
    var marginLeft = parseInt($tip.css('margin-left'), 10)

    // we must check for NaN for ie 8/9
    if (isNaN(marginTop))  marginTop  = 0
    if (isNaN(marginLeft)) marginLeft = 0

    offset.top  += marginTop
    offset.left += marginLeft

    // $.fn.offset doesn't round pixel values
    // so we use setOffset directly with our own function B-0
    $.offset.setOffset($tip[0], $.extend({
      using: function (props) {
        $tip.css({
          top: Math.round(props.top),
          left: Math.round(props.left)
        })
      }
    }, offset), 0)

    $tip.addClass('in')

    // check to see if placing tip in new offset caused the tip to resize itself
    var actualWidth  = $tip[0].offsetWidth
    var actualHeight = $tip[0].offsetHeight

    if (placement == 'top' && actualHeight != height) {
      offset.top = offset.top + height - actualHeight
    }

    var delta = this.getViewportAdjustedDelta(placement, offset, actualWidth, actualHeight)

    if (delta.left) offset.left += delta.left
    else offset.top += delta.top

    var isVertical          = /top|bottom/.test(placement)
    var arrowDelta          = isVertical ? delta.left * 2 - width + actualWidth : delta.top * 2 - height + actualHeight
    var arrowOffsetPosition = isVertical ? 'offsetWidth' : 'offsetHeight'

    $tip.offset(offset)
    this.replaceArrow(arrowDelta, $tip[0][arrowOffsetPosition], isVertical)
  }

  Tooltip.prototype.replaceArrow = function (delta, dimension, isVertical) {
    this.arrow()
      .css(isVertical ? 'left' : 'top', 50 * (1 - delta / dimension) + '%')
      .css(isVertical ? 'top' : 'left', '')
  }

  Tooltip.prototype.setContent = function () {
    var $tip  = this.tip()
    var title = this.getTitle()

    $tip.find('.tooltip-inner')[this.options.html ? 'html' : 'text'](title)
    $tip.removeClass('fade in top bottom left right')
  }

  Tooltip.prototype.hide = function (callback) {
    var that = this
    var $tip = $(this.$tip)
    var e    = $.Event('hide.bs.' + this.type)

    function complete() {
      if (that.hoverState != 'in') $tip.detach()
      that.$element
        .removeAttr('aria-describedby')
        .trigger('hidden.bs.' + that.type)
      callback && callback()
    }

    this.$element.trigger(e)

    if (e.isDefaultPrevented()) return

    $tip.removeClass('in')

    $.support.transition && $tip.hasClass('fade') ?
      $tip
        .one('bsTransitionEnd', complete)
        .emulateTransitionEnd(Tooltip.TRANSITION_DURATION) :
      complete()

    this.hoverState = null

    return this
  }

  Tooltip.prototype.fixTitle = function () {
    var $e = this.$element
    if ($e.attr('title') || typeof $e.attr('data-original-title') != 'string') {
      $e.attr('data-original-title', $e.attr('title') || '').attr('title', '')
    }
  }

  Tooltip.prototype.hasContent = function () {
    return this.getTitle()
  }

  Tooltip.prototype.getPosition = function ($element) {
    $element   = $element || this.$element

    var el     = $element[0]
    var isBody = el.tagName == 'BODY'

    var elRect    = el.getBoundingClientRect()
    if (elRect.width == null) {
      // width and height are missing in IE8, so compute them manually; see https://github.com/twbs/bootstrap/issues/14093
      elRect = $.extend({}, elRect, { width: elRect.right - elRect.left, height: elRect.bottom - elRect.top })
    }
    var elOffset  = isBody ? { top: 0, left: 0 } : $element.offset()
    var scroll    = { scroll: isBody ? document.documentElement.scrollTop || document.body.scrollTop : $element.scrollTop() }
    var outerDims = isBody ? { width: $(window).width(), height: $(window).height() } : null

    return $.extend({}, elRect, scroll, outerDims, elOffset)
  }

  Tooltip.prototype.getCalculatedOffset = function (placement, pos, actualWidth, actualHeight) {
    return placement == 'bottom' ? { top: pos.top + pos.height,   left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'top'    ? { top: pos.top - actualHeight, left: pos.left + pos.width / 2 - actualWidth / 2 } :
           placement == 'left'   ? { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left - actualWidth } :
        /* placement == 'right' */ { top: pos.top + pos.height / 2 - actualHeight / 2, left: pos.left + pos.width }

  }

  Tooltip.prototype.getViewportAdjustedDelta = function (placement, pos, actualWidth, actualHeight) {
    var delta = { top: 0, left: 0 }
    if (!this.$viewport) return delta

    var viewportPadding = this.options.viewport && this.options.viewport.padding || 0
    var viewportDimensions = this.getPosition(this.$viewport)

    if (/right|left/.test(placement)) {
      var topEdgeOffset    = pos.top - viewportPadding - viewportDimensions.scroll
      var bottomEdgeOffset = pos.top + viewportPadding - viewportDimensions.scroll + actualHeight
      if (topEdgeOffset < viewportDimensions.top) { // top overflow
        delta.top = viewportDimensions.top - topEdgeOffset
      } else if (bottomEdgeOffset > viewportDimensions.top + viewportDimensions.height) { // bottom overflow
        delta.top = viewportDimensions.top + viewportDimensions.height - bottomEdgeOffset
      }
    } else {
      var leftEdgeOffset  = pos.left - viewportPadding
      var rightEdgeOffset = pos.left + viewportPadding + actualWidth
      if (leftEdgeOffset < viewportDimensions.left) { // left overflow
        delta.left = viewportDimensions.left - leftEdgeOffset
      } else if (rightEdgeOffset > viewportDimensions.right) { // right overflow
        delta.left = viewportDimensions.left + viewportDimensions.width - rightEdgeOffset
      }
    }

    return delta
  }

  Tooltip.prototype.getTitle = function () {
    var title
    var $e = this.$element
    var o  = this.options

    title = $e.attr('data-original-title')
      || (typeof o.title == 'function' ? o.title.call($e[0]) :  o.title)

    return title
  }

  Tooltip.prototype.getUID = function (prefix) {
    do prefix += ~~(Math.random() * 1000000)
    while (document.getElementById(prefix))
    return prefix
  }

  Tooltip.prototype.tip = function () {
    if (!this.$tip) {
      this.$tip = $(this.options.template)
      if (this.$tip.length != 1) {
        throw new Error(this.type + ' `template` option must consist of exactly 1 top-level element!')
      }
    }
    return this.$tip
  }

  Tooltip.prototype.arrow = function () {
    return (this.$arrow = this.$arrow || this.tip().find('.tooltip-arrow'))
  }

  Tooltip.prototype.enable = function () {
    this.enabled = true
  }

  Tooltip.prototype.disable = function () {
    this.enabled = false
  }

  Tooltip.prototype.toggleEnabled = function () {
    this.enabled = !this.enabled
  }

  Tooltip.prototype.toggle = function (e) {
    var self = this
    if (e) {
      self = $(e.currentTarget).data('bs.' + this.type)
      if (!self) {
        self = new this.constructor(e.currentTarget, this.getDelegateOptions())
        $(e.currentTarget).data('bs.' + this.type, self)
      }
    }

    if (e) {
      self.inState.click = !self.inState.click
      if (self.isInStateTrue()) self.enter(self)
      else self.leave(self)
    } else {
      self.tip().hasClass('in') ? self.leave(self) : self.enter(self)
    }
  }

  Tooltip.prototype.destroy = function () {
    var that = this
    clearTimeout(this.timeout)
    this.hide(function () {
      that.$element.off('.' + that.type).removeData('bs.' + that.type)
      if (that.$tip) {
        that.$tip.detach()
      }
      that.$tip = null
      that.$arrow = null
      that.$viewport = null
    })
  }


  // TOOLTIP PLUGIN DEFINITION
  // =========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.tooltip')
      var options = typeof option == 'object' && option

      if (!data && /destroy|hide/.test(option)) return
      if (!data) $this.data('bs.tooltip', (data = new Tooltip(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tooltip

  $.fn.tooltip             = Plugin
  $.fn.tooltip.Constructor = Tooltip


  // TOOLTIP NO CONFLICT
  // ===================

  $.fn.tooltip.noConflict = function () {
    $.fn.tooltip = old
    return this
  }

}(jQuery);

define("bootstrap/tooltip", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.$.fn.tooltip;
    };
}(this)));

Array.prototype.reduce||(Array.prototype.reduce=function(t){if(null==this)throw new TypeError("Array.prototype.reduce called on null or undefined");if("function"!=typeof t)throw new TypeError(t+" is not a function");var e,a=Object(this),r=a.length>>>0,n=0;if(2==arguments.length)e=arguments[1];else{for(;r>n&&!(n in a);)n++;if(n>=r)throw new TypeError("Reduce of empty array with no initial value");e=a[n++]}for(;r>n;n++)n in a&&(e=t(e,a[n],n,a));return e}),Function.prototype.bind||(Function.prototype.bind=function(t){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var e=Array.prototype.slice.call(arguments,1),a=this,r=function(){},n=function(){return a.apply(this instanceof r?this:t,e.concat(Array.prototype.slice.call(arguments)))};return r.prototype=this.prototype,n.prototype=new r,n}),function(t){"object"==typeof exports?module.exports=t(require("jquery"),require("bootstrap/tooltip")):"function"==typeof define&&define.amd?define('utilities/form_validation',["jquery","bootstrap/tooltip"],t):"undefined"!=typeof jQuery&&"undefined"!=typeof $.fn.tooltip?window.FormValidation=t(jQuery):console.log("Could not load required dependencies for Form Validation (jquery & bootstrap/tooltip)")}(function(t){var e={tests:[],use_tooltips:!1,setup:function(e){var a=!1;"undefined"==typeof e?(e=t("form"),a=!0):e instanceof t||(e=t(e)),t(e).off("submit.formvalidation").on("submit.formvalidation",this.validate.bind(this)),t(e).find("*[type=submit]").off("click.formvalidation").on("click.formvalidation",this.validate.bind(this)),t(e).find("input,select,textarea").on("invalid.formvalidation",function(t){return t.stopPropagation(),!1}),t("*[formnovalidate]").off("click.formvalidation"),a&&t("form[novalidate]").off("submit.formvalidation").find("*[type=submit]").off("click.formvalidation")},clear:function(e){"undefined"==typeof e?(e=t("form"),handle_novalidate=!0):e instanceof t||(e=t(e)),t(e).off("submit.formvalidation"),t(e).find("*[type=submit]").off("click.formvalidation"),t(e).find("input,select,textarea").off("invald.formvalidation"),t("form[novalidate]").off("submit.formvalidation")},setup_input:function(e){return e instanceof t||(e=t(e)),e},attach_error:function(e,a){e=this.setup_input(e),e.parent().addClass("has-error has-feedback"),e.after(t('<span class="fa fa-times form-control-feedback"></span>"')),"tooltip"==e.closest("form").attr("data-validation-method")||1==this.use_tooltips?e.tooltip({title:a,placement:"bottom"}):("undefined"!=typeof e.attr("data-error-msg")?a=e.attr("data-error-msg"):"function"==typeof a&&(a=a(e)),e.after(t('<div class="error-msg">'+a+"</div>")))},remove_error:function(t){t=this.setup_input(t),t.parent().removeClass("has-error has-feedback"),t.parent().find(".form-control-feedback").remove(),"tooltip"==t.closest("form").attr("data-validation-method")?t.tooltip("destroy"):t.parent().find(".error-msg").remove()},has_error:function(t){return t=this.setup_input(t),t.parent().hasClass("has-error")},clear_errors:function(t){var e;t=this.setup_input(t),e=t.is("form")?t:t.is("input")||t.is("select")||t.is("textarea")?t.closest("form"):t.find("form"),this.remove_error(e.find("input, textarea, select"))},validate:function(e){var a,r=!0;return"FORM"!==e.target.nodeName&&(e.target=e.target.form),a=t(e.target),a.find("input, textarea, select").each(function(e,n){var o=!0,i="";n=t(n),"button"!==n.attr("type")&&(o=this.tests.reduce(function(t,e){return"boolean"!=typeof t&&(t=!0),t&&e.match(n)&&(e.test(n,a)||(t=!1,i=e.msg)),t&&this.has_error(n)&&this.remove_error(n),t}.bind(this),!0),o===!1?(r=!1,this.has_error(n)||this.attach_error(n,i)):this.has_error(n)&&this.remove_error(n))}.bind(this)),(r||r&&"data-nosubmit"==a.attr("data-nosubmit"))&&a.trigger("success.validation"),r&&"data-nosubmit"!=a.attr("data-nosubmit")||(e.preventDefault(),e.stopPropagation(),r=!1),r},addTest:function(){var t=void 0;return 1==arguments.length&&"object"==typeof arguments[0]?t=arguments[0]:arguments.length>=3&&"function"==typeof arguments[0]&&"function"==typeof arguments[1]&&"string"==typeof arguments[2]&&(t={match:arguments[0],test:arguments[1],msg:arguments[2]},arguments.length>4&&(t.name=arguments[3])),"undefined"!=typeof t&&"match"in t&&"test"in t?(this.tests.push(t),this):(console.log("Invalid test added to addTest()",arguments),this)},removeTest:function(t){var e=_.findIndex(this.tests,_.bind(function(t){return t.name==this}),t);return e>=0&&e<this.test.length&&tests.splice(e,1),this}};return e.addTest({name:"required",match:function(t){return"required"==t.attr("required")},test:function(t){return""!=t.val()},msg:"This element is required."}),e.addTest({name:"email",match:function(t){return"email"==t.attr("type")},test:function(t){return t.val().match(/^[a-zA-Z0-9.!#$%&'*+-\/=?\^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)},msg:"Please enter a valid email address."}),e.addTest({name:"url",match:function(t){return"url"==t.attr("type")},test:function(t){return t.val().match(/[a-z][\-\.+a-z]*:\/\//i)},msg:"Please enter a valid url."}),e.addTest({name:"color",match:function(t){return"color"==t.attr("type")},test:function(t){return t.val().match(/(\#[0-9A-Fa-f]{6}|\#[0-9A-Fa-f]{3})/)},msg:"Please enter a valid color (#000 OR #000000)."}),e.addTest({name:"max",match:function(t){return void 0!==t.attr("max")},test:function(t){return parseInt(t.val())<=parseInt(t.attr("max"))},msg:"Please enter a value less than the max."}),e.addTest({name:"min",match:function(t){return void 0!==t.attr("min")},test:function(t){return parseInt(t.val())>=parseInt(t.attr("min"))},msg:"Please enter a value greater than the min."}),e.addTest({name:"maxLength",match:function(t){return void 0!==t.attr("maxLength")},test:function(t){return t.get(0).validity.valid},msg:"Entered string is too long."}),e.addTest({name:"minLength",match:function(t){return void 0!==t.attr("minLength")},test:function(t){return t.get(0).validity.valid},msg:"Entered string is too shot."}),e.addTest({name:"pattern",match:function(t){return void 0!==t.attr("pattern")},test:function(t){return t.match(new RegExp(t.val()))},msg:"Enter a value matching the required pattern."}),e.addTest({name:"match",match:function(t){return void 0!==t.attr("data-match")},test:function(e,a){var r=t(a).find(e.attr("data-match"));return e.val()==r.val()},msg:"Entered value does not match."}),e.addTest({name:"number",match:function(t){return"number"==t.attr("type")},test:function(t){return void 0!==t.attr("min")||void 0!==t.attr("max")?!0:/^[0-9](\.[0-9]+)+$/.test(t.val())},msg:"Please enter a valid number"}),e.addTest({name:"date",match:function(t){return"date"==t.attr("type")},test:function(t){return void 0!==t.attr("pattern")?!0:t.val().match(/[0-9]{4}\/[0-9]{2}\/[0-9]{2}/)},msg:"Please enter a valid date (YYYY-MM-DD)"}),e.addTest({name:"tel",match:function(t){return"tel"==t.attr("type")},test:function(t){if(void 0!==t.attr("pattern"))return!0;var e,a="US";if(void 0!==t.attr("country")&&(a=t.attr("country")),"function"==typeof PhoneNumberUtil)return PhoneNumberUtil(t.val(),a);switch(a){case"US":e=/^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]1|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/;break;case"AE":e=/^[Z]$/;break;case"BG":e=/^[Z]$/;break;case"BR":e=/^[Z]$/;break;case"CN":e=/^[Z]$/;break;case"CZ":e=/^[Z]$/;break;case"DK":e=/^((\(?\+45\)?)?)(\s?\d{2}\s?\d{2}\s?\d{2}\s?\d{2})$/;break;case"FR":e=/^0[1-6]{1}(([0-9]{2}){4})|((\s[0-9]{2}){4})|((-[0-9]{2}){4})$/;break;case"DE":e=/^[Z]$/;break;case"IN":e=/^0{0,1}[1-9]{1}[0-9]{2}[\s]{0,1}[\-]{0,1}[\s]{0,1}[1-9]{1}[0-9]{6}$/;break;case"MA":e=/^[Z]$/;break;case"NL":e=/(^\+[0-9]{2}|^\+[0-9]{2}\(0\)|^\(\+[0-9]{2}\)\(0\)|^00[0-9]{2}|^0)([0-9]{9}$|[0-9\-\s]{10}$)/;break;case"PK":e=/^[Z]$/;break;case"RO":e=/^[Z]$/;break;case"RU":e=/((8|\+7)-?)?\(?\d{3}\)?-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}-?\d{1}/;break;case"SK":e=/^[Z]$/;break;case"ES":e=/^[0-9]{2,3}-? ?[0-9]{6,7}$/;break;case"TH":e=/^[Z]$/;break;case"GB":e=/^(((\+44\s?\d{4}|\(?0\d{4}\)?)\s?\d{3}\s?\d{3})|((\+44\s?\d{3}|\(?0\d{3}\)?)\s?\d{3}\s?\d{4})|((\+44\s?\d{2}|\(?0\d{2}\)?)\s?\d{4}\s?\d{4}))(\s?\#(\d{4}|\d{3}))?$/;break;case"AU":e=/^\({0,1}((0|\+61)(2|4|3|7|8)){0,1}\){0,1}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{2}(\ |-){0,1}[0-9]{1}(\ |-){0,1}[0-9]{3}$/;break;case"VE":e=/^[Z]$/}return e.test(t.val())},msg:"Please enter a valid telephone number."}),e});
/* ========================================================================
 * Bootstrap: alert.js v3.3.5
 * http://getbootstrap.com/javascript/#alerts
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // ALERT CLASS DEFINITION
  // ======================

  var dismiss = '[data-dismiss="alert"]'
  var Alert   = function (el) {
    $(el).on('click', dismiss, this.close)
  }

  Alert.VERSION = '3.3.5'

  Alert.TRANSITION_DURATION = 150

  Alert.prototype.close = function (e) {
    var $this    = $(this)
    var selector = $this.attr('data-target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    var $parent = $(selector)

    if (e) e.preventDefault()

    if (!$parent.length) {
      $parent = $this.closest('.alert')
    }

    $parent.trigger(e = $.Event('close.bs.alert'))

    if (e.isDefaultPrevented()) return

    $parent.removeClass('in')

    function removeElement() {
      // detach from parent, fire event then clean up data
      $parent.detach().trigger('closed.bs.alert').remove()
    }

    $.support.transition && $parent.hasClass('fade') ?
      $parent
        .one('bsTransitionEnd', removeElement)
        .emulateTransitionEnd(Alert.TRANSITION_DURATION) :
      removeElement()
  }


  // ALERT PLUGIN DEFINITION
  // =======================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.alert')

      if (!data) $this.data('bs.alert', (data = new Alert(this)))
      if (typeof option == 'string') data[option].call($this)
    })
  }

  var old = $.fn.alert

  $.fn.alert             = Plugin
  $.fn.alert.Constructor = Alert


  // ALERT NO CONFLICT
  // =================

  $.fn.alert.noConflict = function () {
    $.fn.alert = old
    return this
  }


  // ALERT DATA-API
  // ==============

  $(document).on('click.bs.alert.data-api', dismiss, Alert.prototype.close)

}(jQuery);

define("bootstrap/alert", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.$.fn.alert;
    };
}(this)));

define('utilities/alert_manager',["jquery","lodash","bootstrap/alert"],function(t,e){var a={show_alert:function(a){for(a="String"==typeof a?{message:a}:a,a=e.defaults(a,{type:"info",message:"",target:t("body"),timeout:5e3,dismissable:!0,id:null,clear_callback:function(){}}),!a.target instanceof t&&(a.target=t(a.target));"block"!=a.target.css("display");)a.target=a.target.parent();t(e.template('<div class="om-alert alert alert-<%=alert.type%> <% if(alert.dismissable){%>alert-dismissible<%}%>" role="alert"><% if(alert.dismissable){%><button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button><%}%><%=alert.message%></div>')({alert:a})).on("clear.alert",a.clear_callback).attr("id",a.id).insertBefore(a.target),null!==a.timeout&&window.setTimeout(e.bind(function(){this.clear_alerts()},this),a.timeout)},clear_alerts:function(a){a="Object"!=typeof a?{}:a,a=e.defaults(a,{now:!1,target:"body",id:void 0}),a.id?("#"!==a.id[0]&&(a.id="#"+a.id),a.target=t(a.id)):a.target=t(a.target).find(".alert.om-alert"),a.now?(a.target.trigger("clear.alert"),a.target.remove()):a.target.fadeTo(500,0).slideUp(500,function(){t(this).trigger("clear.alert"),t(this).remove()})},clear_alert:function(t,e){this.clear_alerts({id:t,now:e})}};return a});
!function(e,r){"function"==typeof define&&define.amd?define('postal.request-response',["lodash","postal"],function(o,t){return r(o,t,e)}):"object"==typeof module&&module.exports?module.exports=function(e){return r(require("lodash"),e,this)}:e.postal=r(e._,e.postal,e)}(this,function(e,r){var o="postal.request-response";r.configuration.promise={createDeferred:function(){throw new Error("You need to provide an implementation for postal.configuration.promise.createDeferred that returns a deferred/promise instance.")},getPromise:function(){throw new Error("You need to provide an implementation for postal.configuration.promise.getPromise that returns a promise safe for consuming APIs to use.")},fulfill:"resolve",fail:"reject"};var t=function(){for(var e={},r=[],o=0;256>o;o++)r[o]=(16>o?"0":"")+o.toString(16);return e.create=function(){var e=4294967295*Math.random()|0,o=4294967295*Math.random()|0,t=4294967295*Math.random()|0,n=4294967295*Math.random()|0;return r[255&e]+r[e>>8&255]+r[e>>16&255]+r[e>>24&255]+"-"+r[255&o]+r[o>>8&255]+"-"+r[o>>16&15|64]+r[o>>24&255]+"-"+r[63&t|128]+r[t>>8&255]+"-"+r[t>>16&255]+r[t>>24&255]+r[255&n]+r[n>>8&255]+r[n>>16&255]+r[n>>24&255]},e}();r.ChannelDefinition.prototype.request=function(e){var n,i=e.envelope?e.envelope:{topic:e.topic,data:e.data,headers:e.headers},a=t.create(),s=e.replyTopic||a,u=e.replyChannel||o,l=r.configuration.promise.createDeferred();i.headers=i.headers||{},i.headers.replyable=!0,i.headers.requestId=a,i.headers.replyTopic=s,i.headers.replyChannel=u;r.subscribe({channel:u,topic:s,callback:function(e,o){o.headers&&o.headers.isError?l[r.configuration.promise.fail](e):l[r.configuration.promise.fulfill](e)}}).once();return e.timeout&&(n=setTimeout(function(){l[r.configuration.promise.fail](new Error("Timeout limit exceeded for request."))},e.timeout)),this.publish(i),r.configuration.promise.getPromise(l)};var n=r.publish;return r.publish=function(e){e.headers&&e.headers.replyable&&(e.reply=function(o,t){r.publish({channel:e.headers.replyChannel,topic:e.headers.replyTopic,headers:{isReply:!0,isError:!!o,requestId:e.headers.requestId,resolverNoCache:!0},data:o||t})}),n.call(this,e)},r});
define('mixins/login-dependent/LoginDependentMixin',["lodash","react","postal","postal.request-response"],function(t,n,e){var i={getInitialState:function(){return e.configuration.promise.createDeferred=function(){return new $.Deferred},e.configuration.promise.getPromise=function(t){return t.promise()},e.channel("login").subscribe("change",t.bind(function(t){this.isMounted()&&this.setState({loginStatus:t.loginStatus,loginUser:t.loginUser})},this)),{loginStatus:!1,loginUser:null}},componentDidMount:function(){e.channel("login").request({topic:"authenticated?"}).then(t.bind(function(t){this.setState({loginStatus:t.loginStatus})},this))}};return i});
define('components/login/login_link',["jquery","lodash","react","postal","mixins/login-dependent/LoginDependentMixin","postal.request-response"],function(e,n,t,i,a){var o=t.createClass({displayName:"LoginLink",mixins:[t.addons.PureRenderMixin,a],clickLogin:function(e){e.stopPropagation(),e.preventDefault(),i.channel("login").publish("show-modal",{})},clickLogout:function(e){e.stopPropagation(),e.preventDefault(),i.channel("login").publish("logout-request",{})},render:function(){return t.createElement("ul",{id:"LoginButtons",className:"nav navbar-nav navbar-right"},t.createElement(r,{loginStatus:this.state.loginStatus}),t.createElement(s,{onClick:this.state.loginStatus?this.clickLogout:this.clickLogin},this.state.loginStatus?"Logout":"Login"))}}),s=t.createClass({displayName:"LoginButton",mixins:[t.addons.PureRenderMixin],render:function(){return t.createElement("li",null,t.createElement("a",{href:"#",id:"LoginLink",onClick:this.props.onClick},this.props.children))}}),r=t.createClass({displayName:"DashboardLink",mixins:[t.addons.PureRenderMixin],render:function(){return t.createElement("li",null,this.props.loginStatus?t.createElement("a",{href:"#/anthologies"},"Anthology Dashboard"):"")}});return o});
/* ========================================================================
 * Bootstrap: tab.js v3.3.5
 * http://getbootstrap.com/javascript/#tabs
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // TAB CLASS DEFINITION
  // ====================

  var Tab = function (element) {
    // jscs:disable requireDollarBeforejQueryAssignment
    this.element = $(element)
    // jscs:enable requireDollarBeforejQueryAssignment
  }

  Tab.VERSION = '3.3.5'

  Tab.TRANSITION_DURATION = 150

  Tab.prototype.show = function () {
    var $this    = this.element
    var $ul      = $this.closest('ul:not(.dropdown-menu)')
    var selector = $this.data('target')

    if (!selector) {
      selector = $this.attr('href')
      selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '') // strip for ie7
    }

    if ($this.parent('li').hasClass('active')) return

    var $previous = $ul.find('.active:last a')
    var hideEvent = $.Event('hide.bs.tab', {
      relatedTarget: $this[0]
    })
    var showEvent = $.Event('show.bs.tab', {
      relatedTarget: $previous[0]
    })

    $previous.trigger(hideEvent)
    $this.trigger(showEvent)

    if (showEvent.isDefaultPrevented() || hideEvent.isDefaultPrevented()) return

    var $target = $(selector)

    this.activate($this.closest('li'), $ul)
    this.activate($target, $target.parent(), function () {
      $previous.trigger({
        type: 'hidden.bs.tab',
        relatedTarget: $this[0]
      })
      $this.trigger({
        type: 'shown.bs.tab',
        relatedTarget: $previous[0]
      })
    })
  }

  Tab.prototype.activate = function (element, container, callback) {
    var $active    = container.find('> .active')
    var transition = callback
      && $.support.transition
      && ($active.length && $active.hasClass('fade') || !!container.find('> .fade').length)

    function next() {
      $active
        .removeClass('active')
        .find('> .dropdown-menu > .active')
          .removeClass('active')
        .end()
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', false)

      element
        .addClass('active')
        .find('[data-toggle="tab"]')
          .attr('aria-expanded', true)

      if (transition) {
        element[0].offsetWidth // reflow for transition
        element.addClass('in')
      } else {
        element.removeClass('fade')
      }

      if (element.parent('.dropdown-menu').length) {
        element
          .closest('li.dropdown')
            .addClass('active')
          .end()
          .find('[data-toggle="tab"]')
            .attr('aria-expanded', true)
      }

      callback && callback()
    }

    $active.length && transition ?
      $active
        .one('bsTransitionEnd', next)
        .emulateTransitionEnd(Tab.TRANSITION_DURATION) :
      next()

    $active.removeClass('in')
  }


  // TAB PLUGIN DEFINITION
  // =====================

  function Plugin(option) {
    return this.each(function () {
      var $this = $(this)
      var data  = $this.data('bs.tab')

      if (!data) $this.data('bs.tab', (data = new Tab(this)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.tab

  $.fn.tab             = Plugin
  $.fn.tab.Constructor = Tab


  // TAB NO CONFLICT
  // ===============

  $.fn.tab.noConflict = function () {
    $.fn.tab = old
    return this
  }


  // TAB DATA-API
  // ============

  var clickHandler = function (e) {
    e.preventDefault()
    Plugin.call($(this), 'show')
  }

  $(document)
    .on('click.bs.tab.data-api', '[data-toggle="tab"]', clickHandler)
    .on('click.bs.tab.data-api', '[data-toggle="pill"]', clickHandler)

}(jQuery);

define("bootstrap/tab", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.$.fn.tab;
    };
}(this)));

define('components/login/login_form',["jquery","lodash","react","postal","utilities/form_validation","bootstrap/tab"],function(e,t,a,r,n){var o=a.createClass({displayName:"LoginFormContainer",getDefaultProps:function(){return{modal:!1,"static":!1}},componentDidUpdate:function(){this.hookupForm()},hookupForm:function(){n.setup(e(this.getDOMNode()).find(".active form")),e(this.getDOMNode()).modal("handleUpdate")},componentDidMount:function(){this.hookupForm(),e(this.getDOMNode()).find('a[data-toggle="tab"]').on("show.bs.tab",t.bind(function(){n.clear_errors(e(this.getDOMNode()).find(".active form")),this.hookupForm()},this))},handleSubmit:function(e){e.preventDefault(),r.channel("login").publish("submit",{event:e})},render:function(){return a.createElement("div",{className:"login-form"},a.createElement("ul",{className:"nav nav-tabs"},a.createElement("li",{className:"active"},a.createElement("a",{"data-toggle":"tab",href:".login-tab"},"Login")),a.createElement("li",null,a.createElement("a",{"data-toggle":"tab",href:".create-account-tab"},"Create Account"))),a.createElement("div",{className:"tab-content panel panel-default login-form-body","data-title":"Please Login"},a.createElement("div",{className:"tab-pane active panel-body login-tab"},a.createElement(s,{modal:this.props.modal,"static":this.props["static"],onSubmit:this.handleSubmit})),a.createElement("div",{className:"tab-pane panel-body create-account-tab","data-title":"Create Account"},a.createElement(m,{modal:this.props.modal,"static":this.props["static"],onSubmit:this.handleSubmit}))))}}),s=a.createClass({displayName:"LoginForm",mixins:[a.addons.PureRenderMixin],getDefaultProps:function(){return{modal:!1,"static":!1,onSubmit:function(){}}},render:function(){return a.createElement("form",{onSubmit:this.props.onSubmit,id:"LoginForm",className:"new_user",action:"/users/sign_in",acceptCharset:"UTF-8","data-remote":"true",method:"post"},a.createElement("input",{name:"utf8",type:"hidden",value:"&#x2713;"}),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"control-label",htmlFor:"user_email"},"Email"),a.createElement("input",{placeholder:"Your Email Address",className:"form-control",required:"required",type:"email",name:"user[email]",id:"user_email"})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"control-label",htmlFor:"user_password"},"Password"),a.createElement("input",{placeholder:"Password",className:"form-control",required:"required",type:"password",name:"user[password]",id:"user_password"})),a.createElement("div",{className:"remember form-group"},a.createElement("input",{name:"user[remember_me]",type:"hidden",value:"0"}),a.createElement("input",{type:"checkbox",value:"1",name:"user[remember_me]",id:"user_remember_me"}),a.createElement("label",{htmlFor:"user_remember_me"},"Remember me")),a.createElement("div",{className:"form-group form-group-submit text-right"},a.createElement("input",{type:"submit",value:"Sign in",className:"btn btn-primary"}),a.createElement(l,{modal:this.props.modal,"static":this.props["static"]})))}}),m=a.createClass({displayName:"LoginCreateForm",mixins:[a.addons.PureRenderMixin],getDefaultProps:function(){return{modal:!1,"static":!1,onSubmit:function(){}}},render:function(){return a.createElement("form",{onSubmit:this.props.onSubmit,id:"CreateAccountForm",action:"/users",acceptCharset:"UTF-8","data-remote":"true",method:"post"},a.createElement("input",{name:"utf8",type:"hidden",value:"&#x2713;"}),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"control-label",htmlFor:"user_email"},"Email"),a.createElement("input",{placeholder:"Your Email Address",className:"form-control",required:"required",type:"email",name:"user[email]",id:"user_email"})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"control-label",htmlFor:"user_password"},"Password"),a.createElement("input",{placeholder:"Password",className:"form-control",required:"required","data-match":"#user_password_confirmation",minLength:"8",type:"password",name:"user[password]",id:"user_password"})),a.createElement("div",{className:"form-group"},a.createElement("label",{className:"control-label",htmlFor:"user_password2"},"Confirm Password"),a.createElement("input",{placeholder:"Confirm Password",className:"form-control",required:"required","data-match":"#user_password",minLength:"8",type:"password",name:"user[password_confirmation]",id:"user_password_confirmation"})),a.createElement("div",{className:"form-group form-group-submit text-right"},a.createElement("input",{type:"submit",value:"Create Account",className:"btn btn-primary"}),a.createElement(l,{modal:this.props.modal,"static":this.props["static"]})))}}),l=a.createClass({displayName:"LoginFormCancelButton",mixins:[a.addons.PureRenderMixin],getDefaultProps:function(){return{modal:!1,"static":!1}},render:function(){return content=a.createElement("span",null),this.props.modal&&!this.props["static"]&&a.createElement("button",{className:"btn btn-default","data-dismiss":"modal"},"Cancel"),content}});return o});
/* ========================================================================
 * Bootstrap: modal.js v3.3.5
 * http://getbootstrap.com/javascript/#modals
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // MODAL CLASS DEFINITION
  // ======================

  var Modal = function (element, options) {
    this.options             = options
    this.$body               = $(document.body)
    this.$element            = $(element)
    this.$dialog             = this.$element.find('.modal-dialog')
    this.$backdrop           = null
    this.isShown             = null
    this.originalBodyPad     = null
    this.scrollbarWidth      = 0
    this.ignoreBackdropClick = false

    if (this.options.remote) {
      this.$element
        .find('.modal-content')
        .load(this.options.remote, $.proxy(function () {
          this.$element.trigger('loaded.bs.modal')
        }, this))
    }
  }

  Modal.VERSION  = '3.3.5'

  Modal.TRANSITION_DURATION = 300
  Modal.BACKDROP_TRANSITION_DURATION = 150

  Modal.DEFAULTS = {
    backdrop: true,
    keyboard: true,
    show: true
  }

  Modal.prototype.toggle = function (_relatedTarget) {
    return this.isShown ? this.hide() : this.show(_relatedTarget)
  }

  Modal.prototype.show = function (_relatedTarget) {
    var that = this
    var e    = $.Event('show.bs.modal', { relatedTarget: _relatedTarget })

    this.$element.trigger(e)

    if (this.isShown || e.isDefaultPrevented()) return

    this.isShown = true

    this.checkScrollbar()
    this.setScrollbar()
    this.$body.addClass('modal-open')

    this.escape()
    this.resize()

    this.$element.on('click.dismiss.bs.modal', '[data-dismiss="modal"]', $.proxy(this.hide, this))

    this.$dialog.on('mousedown.dismiss.bs.modal', function () {
      that.$element.one('mouseup.dismiss.bs.modal', function (e) {
        if ($(e.target).is(that.$element)) that.ignoreBackdropClick = true
      })
    })

    this.backdrop(function () {
      var transition = $.support.transition && that.$element.hasClass('fade')

      if (!that.$element.parent().length) {
        that.$element.appendTo(that.$body) // don't move modals dom position
      }

      that.$element
        .show()
        .scrollTop(0)

      that.adjustDialog()

      if (transition) {
        that.$element[0].offsetWidth // force reflow
      }

      that.$element.addClass('in')

      that.enforceFocus()

      var e = $.Event('shown.bs.modal', { relatedTarget: _relatedTarget })

      transition ?
        that.$dialog // wait for modal to slide in
          .one('bsTransitionEnd', function () {
            that.$element.trigger('focus').trigger(e)
          })
          .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
        that.$element.trigger('focus').trigger(e)
    })
  }

  Modal.prototype.hide = function (e) {
    if (e) e.preventDefault()

    e = $.Event('hide.bs.modal')

    this.$element.trigger(e)

    if (!this.isShown || e.isDefaultPrevented()) return

    this.isShown = false

    this.escape()
    this.resize()

    $(document).off('focusin.bs.modal')

    this.$element
      .removeClass('in')
      .off('click.dismiss.bs.modal')
      .off('mouseup.dismiss.bs.modal')

    this.$dialog.off('mousedown.dismiss.bs.modal')

    $.support.transition && this.$element.hasClass('fade') ?
      this.$element
        .one('bsTransitionEnd', $.proxy(this.hideModal, this))
        .emulateTransitionEnd(Modal.TRANSITION_DURATION) :
      this.hideModal()
  }

  Modal.prototype.enforceFocus = function () {
    $(document)
      .off('focusin.bs.modal') // guard against infinite focus loop
      .on('focusin.bs.modal', $.proxy(function (e) {
        if (this.$element[0] !== e.target && !this.$element.has(e.target).length) {
          this.$element.trigger('focus')
        }
      }, this))
  }

  Modal.prototype.escape = function () {
    if (this.isShown && this.options.keyboard) {
      this.$element.on('keydown.dismiss.bs.modal', $.proxy(function (e) {
        e.which == 27 && this.hide()
      }, this))
    } else if (!this.isShown) {
      this.$element.off('keydown.dismiss.bs.modal')
    }
  }

  Modal.prototype.resize = function () {
    if (this.isShown) {
      $(window).on('resize.bs.modal', $.proxy(this.handleUpdate, this))
    } else {
      $(window).off('resize.bs.modal')
    }
  }

  Modal.prototype.hideModal = function () {
    var that = this
    this.$element.hide()
    this.backdrop(function () {
      that.$body.removeClass('modal-open')
      that.resetAdjustments()
      that.resetScrollbar()
      that.$element.trigger('hidden.bs.modal')
    })
  }

  Modal.prototype.removeBackdrop = function () {
    this.$backdrop && this.$backdrop.remove()
    this.$backdrop = null
  }

  Modal.prototype.backdrop = function (callback) {
    var that = this
    var animate = this.$element.hasClass('fade') ? 'fade' : ''

    if (this.isShown && this.options.backdrop) {
      var doAnimate = $.support.transition && animate

      this.$backdrop = $(document.createElement('div'))
        .addClass('modal-backdrop ' + animate)
        .appendTo(this.$body)

      this.$element.on('click.dismiss.bs.modal', $.proxy(function (e) {
        if (this.ignoreBackdropClick) {
          this.ignoreBackdropClick = false
          return
        }
        if (e.target !== e.currentTarget) return
        this.options.backdrop == 'static'
          ? this.$element[0].focus()
          : this.hide()
      }, this))

      if (doAnimate) this.$backdrop[0].offsetWidth // force reflow

      this.$backdrop.addClass('in')

      if (!callback) return

      doAnimate ?
        this.$backdrop
          .one('bsTransitionEnd', callback)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callback()

    } else if (!this.isShown && this.$backdrop) {
      this.$backdrop.removeClass('in')

      var callbackRemove = function () {
        that.removeBackdrop()
        callback && callback()
      }
      $.support.transition && this.$element.hasClass('fade') ?
        this.$backdrop
          .one('bsTransitionEnd', callbackRemove)
          .emulateTransitionEnd(Modal.BACKDROP_TRANSITION_DURATION) :
        callbackRemove()

    } else if (callback) {
      callback()
    }
  }

  // these following methods are used to handle overflowing modals

  Modal.prototype.handleUpdate = function () {
    this.adjustDialog()
  }

  Modal.prototype.adjustDialog = function () {
    var modalIsOverflowing = this.$element[0].scrollHeight > document.documentElement.clientHeight

    this.$element.css({
      paddingLeft:  !this.bodyIsOverflowing && modalIsOverflowing ? this.scrollbarWidth : '',
      paddingRight: this.bodyIsOverflowing && !modalIsOverflowing ? this.scrollbarWidth : ''
    })
  }

  Modal.prototype.resetAdjustments = function () {
    this.$element.css({
      paddingLeft: '',
      paddingRight: ''
    })
  }

  Modal.prototype.checkScrollbar = function () {
    var fullWindowWidth = window.innerWidth
    if (!fullWindowWidth) { // workaround for missing window.innerWidth in IE8
      var documentElementRect = document.documentElement.getBoundingClientRect()
      fullWindowWidth = documentElementRect.right - Math.abs(documentElementRect.left)
    }
    this.bodyIsOverflowing = document.body.clientWidth < fullWindowWidth
    this.scrollbarWidth = this.measureScrollbar()
  }

  Modal.prototype.setScrollbar = function () {
    var bodyPad = parseInt((this.$body.css('padding-right') || 0), 10)
    this.originalBodyPad = document.body.style.paddingRight || ''
    if (this.bodyIsOverflowing) this.$body.css('padding-right', bodyPad + this.scrollbarWidth)
  }

  Modal.prototype.resetScrollbar = function () {
    this.$body.css('padding-right', this.originalBodyPad)
  }

  Modal.prototype.measureScrollbar = function () { // thx walsh
    var scrollDiv = document.createElement('div')
    scrollDiv.className = 'modal-scrollbar-measure'
    this.$body.append(scrollDiv)
    var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth
    this.$body[0].removeChild(scrollDiv)
    return scrollbarWidth
  }


  // MODAL PLUGIN DEFINITION
  // =======================

  function Plugin(option, _relatedTarget) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.modal')
      var options = $.extend({}, Modal.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data) $this.data('bs.modal', (data = new Modal(this, options)))
      if (typeof option == 'string') data[option](_relatedTarget)
      else if (options.show) data.show(_relatedTarget)
    })
  }

  var old = $.fn.modal

  $.fn.modal             = Plugin
  $.fn.modal.Constructor = Modal


  // MODAL NO CONFLICT
  // =================

  $.fn.modal.noConflict = function () {
    $.fn.modal = old
    return this
  }


  // MODAL DATA-API
  // ==============

  $(document).on('click.bs.modal.data-api', '[data-toggle="modal"]', function (e) {
    var $this   = $(this)
    var href    = $this.attr('href')
    var $target = $($this.attr('data-target') || (href && href.replace(/.*(?=#[^\s]+$)/, ''))) // strip for ie7
    var option  = $target.data('bs.modal') ? 'toggle' : $.extend({ remote: !/#/.test(href) && href }, $target.data(), $this.data())

    if ($this.is('a')) e.preventDefault()

    $target.one('show.bs.modal', function (showEvent) {
      if (showEvent.isDefaultPrevented()) return // only register focus restorer if modal will actually get shown
      $target.one('hidden.bs.modal', function () {
        $this.is(':visible') && $this.trigger('focus')
      })
    })
    Plugin.call($target, option, this)
  })

}(jQuery);

define("bootstrap/modal", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.$.fn.modal;
    };
}(this)));

define('components/utilities/modal',["react","postal","jquery","lodash","bootstrap/modal"],function(e,t,o,a){var s=e.createClass({displayName:"Modal",getDefaultProps:function(){return{title:"",onHide:null,onShow:null,"static":!1,children:void 0}},showModal:function(){o(this.getDOMNode()).modal("show")},hideModal:function(){o(this.getDOMNode()).modal("hide")},componentDidMount:function(){o(this.getDOMNode()).on("hide.bs.modal",a.bind(function(e){e.target=this.getDOMNode(),"function"==typeof this.props.onHide?this.props.onHide.apply(e):!1},this)),o(this.getDOMNode()).on("show.bs.modal",a.bind(function(e){e.target=this.getDOMNode(),"function"==typeof this.props.onShow?this.props.onShow.apply(e):!1},this))},render:function(){var t=this.props["static"]?"":e.createElement("button",{"aria-label":"Close",className:"close","data-dismiss":"modal",type:"button"},e.createElement("span",{"aria-hidden":!0},"\xd7"));return e.createElement("div",{className:"modal fade","data-keyboard":this.props["static"],"data-backdrop":this.props["static"]?"static":!1},e.createElement("div",{className:"modal-dialog"},e.createElement("div",{className:"modal-content"},e.createElement("div",{className:"modal-header"},t,e.createElement("h4",{className:"modal-title"},this.props.title)),e.createElement("div",{className:"modal-body"},"undefined"!=typeof this.props.children?this.props.children:""))))}});return s});
define('components/login/login_modal',["jquery","lodash","react","postal","components/login/login_form","components/utilities/modal","utilities/form_validation"],function(e,t,o,i,n,a,s){var r=o.createClass({displayName:"LoginModal",mixins:[o.addons.PureRenderMixin],getInitialState:function(){return{tab:"login-tab"}},componentDidMount:function(){i.channel("login").subscribe("show-modal",t.bind(function(){this.refs.LoginModal.showModal()},this)),i.channel("login").subscribe("submitted",t.bind(function(){this.removeModal()},this)),e(this.refs.LoginModal.getDOMNode()).on("hide.bs.modal",t.bind(this.cleanModal,this)),e(this.refs.LoginModal.getDOMNode()).find('a[data-toggle="tab"]').on("show.bs.tab",t.bind(function(t){console.log(t),this.setState({tab:e(t.target).attr("id")})},this))},changeModalTab:function(t){"LoginModal"==t.modal&&s.clear_errors(e(this.refs.LoginModal.getDOMNode()).find(".active form"))},cleanModal:function(){e(this.refs.LoginModal.getDOMNode()).find(".login-tab").tab("show"),e(this.refs.LoginModal.getDOMNode()).find("input[type!=submit]").val(""),s.clear_errors(e(this.refs.LoginModal.getDOMNode()).find(".active form"))},removeModal:function(){this.refs.LoginModal.hideModal()},render:function(){var e;switch(this.state.tab){case"login-tab":e="Please Login";break;case"create-user-tab":e="Create Account";break;default:e="Error"}return o.createElement(a,{ref:"LoginModal",title:e},o.createElement(n,{ref:"LoginForm",modal:!0,"static":!1}))}});return r});
define('components/login/login_page',["react","postal","components/login/login_form","mixins/login-dependent/LoginDependentMixin","utilities/alert_manager"],function(e,n,t,i,r){var o=e.createClass({displayName:"LoginPage",mixins:[e.addons.PureRenderMixin],getDefaultProps:function(){return{message:""}},componentDidMount:function(){r.show_alert({type:"danger",message:this.props.message,target:$(this.refs.LoginForm.getDOMNode()),timeout:null,dismissable:!1})},render:function(){return e.createElement("div",{className:"row"},e.createElement("div",{className:"col-md-6 center-block"},e.createElement(t,{ref:"LoginForm"})))}});return o});
define('utilities/login_manager',["jquery","lodash","backbone","postal","react","utilities/form_validation","utilities/alert_manager","components/login/login_link","components/login/login_modal","components/login/login_page","bootstrap/tab","bootstrap/modal","postal.request-response"],function(e,n,t,i,s,o,a,r,u,l){var c=t.Model.extend({idAttribute:"id",defaults:{email:null,authentication_token:null}}),d=t.Model.extend({initialize:function(){var o={};o["route:ready"]=i.channel("route").subscribe("ready",n.bind(function(){t.original_sync=t.sync,t.sync=function(e,i,s){return n.defaults(s||(s={}),{headers:{}}),window.session_user.has("email")&&window.session_user.get("email")&&(s.headers["X-API-EMAIL"]=window.session_user.get("email"),s.headers["X-API-TOKEN"]=window.session_user.get("authentication_token")),t.original_sync(e,i,s)},i.unsubscribe(o["route:ready"])},this)),window.session_user=new c,"not_logged_in"!=this.getCookie("API-USER")&&(window.session_user.set("email",decodeURIComponent(this.getCookie("API-USER"))),window.session_user.set("authentication_token",decodeURIComponent(this.getCookie("API-TOKEN")))),s.render(s.createElement(r),e("#LoginButtonsContainer").get(0)),e("body").append(e('<div id="LoginModal"></div>')),s.render(s.createElement(u),e("#LoginModal").get(0)),i.channel("route").subscribe("ready",n.bind(function(){e(".login-form form").on("ajax:success",n.bind(this.login_form_submission_success,this)),e(".login-form form").on("ajax:error",n.bind(this.login_form_submission_error,this))},this)),i.channel("login").subscribe("submit",n.bind(this.postal_subscription_responders.login,this)),i.channel("login").subscribe("authenticated?",n.bind(this.postal_subscription_responders.is_authenticated,this)),i.channel("login").subscribe("can-user-edit?",n.bind(this.postal_subscription_responders.can_user_edit,this)),i.channel("login").subscribe("logout-request",n.bind(this.postal_subscription_responders.logout_request,this)),this.authenticate()},postal_subscription_responders:{is_authenticated:function(e,n){n.reply(null,this.login_postal_message())},can_user_edit:function(e,n){n.reply(null,{user_can_edit:e.object_owner.email==this.current_user()})},logout_request:function(){this.logout()},login:function(n){var t,i,n,s=n.event,o=e(s.target);t=o.attr("method"),i=o.attr("action"),n=o.serializeArray(),e.ajax(i,{method:t,data:n,dataType:"json",headers:{"X-API-EMAIL":window.session_user.get("email"),"X-API-TOKEN":window.session_user.get("authentication_token")}}).done(function(e,n,t){o.trigger("ajax:success",[e,n,t])}).fail(function(e,n,t){o.trigger("ajax:errors",[t,n,e])})}},login_postal_message:function(){return{loginStatus:this.authenticated(),loginUser:this.current_user()}},authenticate:function(){i.channel("login").publish("change",this.login_postal_message())},authenticated:function(){return"undefined"!=typeof window.session_user.get("email")},current_user:function(){return this.authenticated()?window.session_user.get("email"):null},login_form_submission_success:function(t,s){t.stopPropagation(),("LoginForm"==e(t.target).attr("id")||"CreateAccountForm"==e(t.target).attr("id"))&&(window.session_user=new c({email:s.email,authentication_token:s.authentication_token}),i.channel("login").publish("change",this.login_postal_message()),a.show_alert({target:e(t.target),type:"success",timeout:300,message:"Logged In Succesfully, Welcome Back!",clear_callback:n.bind(function(){i.channel("login").publish("submitted")},this)}))},login_form_submission_error:function(t,s,o,r){t.stopPropagation(),a.show_alert({target:e(t.target),type:"danger",timeout:null,message:"XHR Error: "+r,clear_callback:n.bind(function(){i.channel("login").publish("submitted")},this)})},logout:function(){e.ajax("/users/sign_out",{method:"delete",headers:{"X-API-EMAIL":window.session_user.get("email"),"X-API-TOKEN":window.session_user.get("authentication_token")},dataType:"json"}).done(n.bind(function(){window.session_user=new c,i.channel("login").publish("change",this.login_postal_message())},this))},getCookie:function(e){for(var n=e+"=",t=document.cookie.split(";"),i=0;i<t.length;i++){for(var s=t[i];" "==s.charAt(0);)s=s.substring(1,s.length);if(0==s.indexOf(n))return s.substring(n.length,s.length)}return null},show_login_page:function(){s.render(s.createElement(l,{message:"Unauthorized Route. Please Login To Continue."}),e("#app").get(0)),i.channel("route").publish("ready")}});return d});
/*!
 * jQuery UI Effects 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/effects-core/
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define( 'jquery-ui/effect',[ "jquery" ], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

var dataSpace = "ui-effects-",

	// Create a local jQuery because jQuery Color relies on it and the
	// global may not exist with AMD and a custom build (#10199)
	jQuery = $;

$.effects = {
	effect: {}
};

/*!
 * jQuery Color Animations v2.1.2
 * https://github.com/jquery/jquery-color
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * Date: Wed Jan 16 08:47:09 2013 -0600
 */
(function( jQuery, undefined ) {

	var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor",

	// plusequals test for += 100 -= 100
	rplusequals = /^([\-+])=\s*(\d+\.?\d*)/,
	// a set of RE's that can match strings and generate color tuples.
	stringParsers = [ {
			re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ],
					execResult[ 3 ],
					execResult[ 4 ]
				];
			}
		}, {
			re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			parse: function( execResult ) {
				return [
					execResult[ 1 ] * 2.55,
					execResult[ 2 ] * 2.55,
					execResult[ 3 ] * 2.55,
					execResult[ 4 ]
				];
			}
		}, {
			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ], 16 )
				];
			}
		}, {
			// this regex ignores A-F because it's compared against an already lowercased string
			re: /#([a-f0-9])([a-f0-9])([a-f0-9])/,
			parse: function( execResult ) {
				return [
					parseInt( execResult[ 1 ] + execResult[ 1 ], 16 ),
					parseInt( execResult[ 2 ] + execResult[ 2 ], 16 ),
					parseInt( execResult[ 3 ] + execResult[ 3 ], 16 )
				];
			}
		}, {
			re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
			space: "hsla",
			parse: function( execResult ) {
				return [
					execResult[ 1 ],
					execResult[ 2 ] / 100,
					execResult[ 3 ] / 100,
					execResult[ 4 ]
				];
			}
		} ],

	// jQuery.Color( )
	color = jQuery.Color = function( color, green, blue, alpha ) {
		return new jQuery.Color.fn.parse( color, green, blue, alpha );
	},
	spaces = {
		rgba: {
			props: {
				red: {
					idx: 0,
					type: "byte"
				},
				green: {
					idx: 1,
					type: "byte"
				},
				blue: {
					idx: 2,
					type: "byte"
				}
			}
		},

		hsla: {
			props: {
				hue: {
					idx: 0,
					type: "degrees"
				},
				saturation: {
					idx: 1,
					type: "percent"
				},
				lightness: {
					idx: 2,
					type: "percent"
				}
			}
		}
	},
	propTypes = {
		"byte": {
			floor: true,
			max: 255
		},
		"percent": {
			max: 1
		},
		"degrees": {
			mod: 360,
			floor: true
		}
	},
	support = color.support = {},

	// element for support tests
	supportElem = jQuery( "<p>" )[ 0 ],

	// colors = jQuery.Color.names
	colors,

	// local aliases of functions called often
	each = jQuery.each;

// determine rgba support immediately
supportElem.style.cssText = "background-color:rgba(1,1,1,.5)";
support.rgba = supportElem.style.backgroundColor.indexOf( "rgba" ) > -1;

// define cache name and alpha properties
// for rgba and hsla spaces
each( spaces, function( spaceName, space ) {
	space.cache = "_" + spaceName;
	space.props.alpha = {
		idx: 3,
		type: "percent",
		def: 1
	};
});

function clamp( value, prop, allowEmpty ) {
	var type = propTypes[ prop.type ] || {};

	if ( value == null ) {
		return (allowEmpty || !prop.def) ? null : prop.def;
	}

	// ~~ is an short way of doing floor for positive numbers
	value = type.floor ? ~~value : parseFloat( value );

	// IE will pass in empty strings as value for alpha,
	// which will hit this case
	if ( isNaN( value ) ) {
		return prop.def;
	}

	if ( type.mod ) {
		// we add mod before modding to make sure that negatives values
		// get converted properly: -10 -> 350
		return (value + type.mod) % type.mod;
	}

	// for now all property types without mod have min and max
	return 0 > value ? 0 : type.max < value ? type.max : value;
}

function stringParse( string ) {
	var inst = color(),
		rgba = inst._rgba = [];

	string = string.toLowerCase();

	each( stringParsers, function( i, parser ) {
		var parsed,
			match = parser.re.exec( string ),
			values = match && parser.parse( match ),
			spaceName = parser.space || "rgba";

		if ( values ) {
			parsed = inst[ spaceName ]( values );

			// if this was an rgba parse the assignment might happen twice
			// oh well....
			inst[ spaces[ spaceName ].cache ] = parsed[ spaces[ spaceName ].cache ];
			rgba = inst._rgba = parsed._rgba;

			// exit each( stringParsers ) here because we matched
			return false;
		}
	});

	// Found a stringParser that handled it
	if ( rgba.length ) {

		// if this came from a parsed string, force "transparent" when alpha is 0
		// chrome, (and maybe others) return "transparent" as rgba(0,0,0,0)
		if ( rgba.join() === "0,0,0,0" ) {
			jQuery.extend( rgba, colors.transparent );
		}
		return inst;
	}

	// named colors
	return colors[ string ];
}

color.fn = jQuery.extend( color.prototype, {
	parse: function( red, green, blue, alpha ) {
		if ( red === undefined ) {
			this._rgba = [ null, null, null, null ];
			return this;
		}
		if ( red.jquery || red.nodeType ) {
			red = jQuery( red ).css( green );
			green = undefined;
		}

		var inst = this,
			type = jQuery.type( red ),
			rgba = this._rgba = [];

		// more than 1 argument specified - assume ( red, green, blue, alpha )
		if ( green !== undefined ) {
			red = [ red, green, blue, alpha ];
			type = "array";
		}

		if ( type === "string" ) {
			return this.parse( stringParse( red ) || colors._default );
		}

		if ( type === "array" ) {
			each( spaces.rgba.props, function( key, prop ) {
				rgba[ prop.idx ] = clamp( red[ prop.idx ], prop );
			});
			return this;
		}

		if ( type === "object" ) {
			if ( red instanceof color ) {
				each( spaces, function( spaceName, space ) {
					if ( red[ space.cache ] ) {
						inst[ space.cache ] = red[ space.cache ].slice();
					}
				});
			} else {
				each( spaces, function( spaceName, space ) {
					var cache = space.cache;
					each( space.props, function( key, prop ) {

						// if the cache doesn't exist, and we know how to convert
						if ( !inst[ cache ] && space.to ) {

							// if the value was null, we don't need to copy it
							// if the key was alpha, we don't need to copy it either
							if ( key === "alpha" || red[ key ] == null ) {
								return;
							}
							inst[ cache ] = space.to( inst._rgba );
						}

						// this is the only case where we allow nulls for ALL properties.
						// call clamp with alwaysAllowEmpty
						inst[ cache ][ prop.idx ] = clamp( red[ key ], prop, true );
					});

					// everything defined but alpha?
					if ( inst[ cache ] && jQuery.inArray( null, inst[ cache ].slice( 0, 3 ) ) < 0 ) {
						// use the default of 1
						inst[ cache ][ 3 ] = 1;
						if ( space.from ) {
							inst._rgba = space.from( inst[ cache ] );
						}
					}
				});
			}
			return this;
		}
	},
	is: function( compare ) {
		var is = color( compare ),
			same = true,
			inst = this;

		each( spaces, function( _, space ) {
			var localCache,
				isCache = is[ space.cache ];
			if (isCache) {
				localCache = inst[ space.cache ] || space.to && space.to( inst._rgba ) || [];
				each( space.props, function( _, prop ) {
					if ( isCache[ prop.idx ] != null ) {
						same = ( isCache[ prop.idx ] === localCache[ prop.idx ] );
						return same;
					}
				});
			}
			return same;
		});
		return same;
	},
	_space: function() {
		var used = [],
			inst = this;
		each( spaces, function( spaceName, space ) {
			if ( inst[ space.cache ] ) {
				used.push( spaceName );
			}
		});
		return used.pop();
	},
	transition: function( other, distance ) {
		var end = color( other ),
			spaceName = end._space(),
			space = spaces[ spaceName ],
			startColor = this.alpha() === 0 ? color( "transparent" ) : this,
			start = startColor[ space.cache ] || space.to( startColor._rgba ),
			result = start.slice();

		end = end[ space.cache ];
		each( space.props, function( key, prop ) {
			var index = prop.idx,
				startValue = start[ index ],
				endValue = end[ index ],
				type = propTypes[ prop.type ] || {};

			// if null, don't override start value
			if ( endValue === null ) {
				return;
			}
			// if null - use end
			if ( startValue === null ) {
				result[ index ] = endValue;
			} else {
				if ( type.mod ) {
					if ( endValue - startValue > type.mod / 2 ) {
						startValue += type.mod;
					} else if ( startValue - endValue > type.mod / 2 ) {
						startValue -= type.mod;
					}
				}
				result[ index ] = clamp( ( endValue - startValue ) * distance + startValue, prop );
			}
		});
		return this[ spaceName ]( result );
	},
	blend: function( opaque ) {
		// if we are already opaque - return ourself
		if ( this._rgba[ 3 ] === 1 ) {
			return this;
		}

		var rgb = this._rgba.slice(),
			a = rgb.pop(),
			blend = color( opaque )._rgba;

		return color( jQuery.map( rgb, function( v, i ) {
			return ( 1 - a ) * blend[ i ] + a * v;
		}));
	},
	toRgbaString: function() {
		var prefix = "rgba(",
			rgba = jQuery.map( this._rgba, function( v, i ) {
				return v == null ? ( i > 2 ? 1 : 0 ) : v;
			});

		if ( rgba[ 3 ] === 1 ) {
			rgba.pop();
			prefix = "rgb(";
		}

		return prefix + rgba.join() + ")";
	},
	toHslaString: function() {
		var prefix = "hsla(",
			hsla = jQuery.map( this.hsla(), function( v, i ) {
				if ( v == null ) {
					v = i > 2 ? 1 : 0;
				}

				// catch 1 and 2
				if ( i && i < 3 ) {
					v = Math.round( v * 100 ) + "%";
				}
				return v;
			});

		if ( hsla[ 3 ] === 1 ) {
			hsla.pop();
			prefix = "hsl(";
		}
		return prefix + hsla.join() + ")";
	},
	toHexString: function( includeAlpha ) {
		var rgba = this._rgba.slice(),
			alpha = rgba.pop();

		if ( includeAlpha ) {
			rgba.push( ~~( alpha * 255 ) );
		}

		return "#" + jQuery.map( rgba, function( v ) {

			// default to 0 when nulls exist
			v = ( v || 0 ).toString( 16 );
			return v.length === 1 ? "0" + v : v;
		}).join("");
	},
	toString: function() {
		return this._rgba[ 3 ] === 0 ? "transparent" : this.toRgbaString();
	}
});
color.fn.parse.prototype = color.fn;

// hsla conversions adapted from:
// https://code.google.com/p/maashaack/source/browse/packages/graphics/trunk/src/graphics/colors/HUE2RGB.as?r=5021

function hue2rgb( p, q, h ) {
	h = ( h + 1 ) % 1;
	if ( h * 6 < 1 ) {
		return p + ( q - p ) * h * 6;
	}
	if ( h * 2 < 1) {
		return q;
	}
	if ( h * 3 < 2 ) {
		return p + ( q - p ) * ( ( 2 / 3 ) - h ) * 6;
	}
	return p;
}

spaces.hsla.to = function( rgba ) {
	if ( rgba[ 0 ] == null || rgba[ 1 ] == null || rgba[ 2 ] == null ) {
		return [ null, null, null, rgba[ 3 ] ];
	}
	var r = rgba[ 0 ] / 255,
		g = rgba[ 1 ] / 255,
		b = rgba[ 2 ] / 255,
		a = rgba[ 3 ],
		max = Math.max( r, g, b ),
		min = Math.min( r, g, b ),
		diff = max - min,
		add = max + min,
		l = add * 0.5,
		h, s;

	if ( min === max ) {
		h = 0;
	} else if ( r === max ) {
		h = ( 60 * ( g - b ) / diff ) + 360;
	} else if ( g === max ) {
		h = ( 60 * ( b - r ) / diff ) + 120;
	} else {
		h = ( 60 * ( r - g ) / diff ) + 240;
	}

	// chroma (diff) == 0 means greyscale which, by definition, saturation = 0%
	// otherwise, saturation is based on the ratio of chroma (diff) to lightness (add)
	if ( diff === 0 ) {
		s = 0;
	} else if ( l <= 0.5 ) {
		s = diff / add;
	} else {
		s = diff / ( 2 - add );
	}
	return [ Math.round(h) % 360, s, l, a == null ? 1 : a ];
};

spaces.hsla.from = function( hsla ) {
	if ( hsla[ 0 ] == null || hsla[ 1 ] == null || hsla[ 2 ] == null ) {
		return [ null, null, null, hsla[ 3 ] ];
	}
	var h = hsla[ 0 ] / 360,
		s = hsla[ 1 ],
		l = hsla[ 2 ],
		a = hsla[ 3 ],
		q = l <= 0.5 ? l * ( 1 + s ) : l + s - l * s,
		p = 2 * l - q;

	return [
		Math.round( hue2rgb( p, q, h + ( 1 / 3 ) ) * 255 ),
		Math.round( hue2rgb( p, q, h ) * 255 ),
		Math.round( hue2rgb( p, q, h - ( 1 / 3 ) ) * 255 ),
		a
	];
};

each( spaces, function( spaceName, space ) {
	var props = space.props,
		cache = space.cache,
		to = space.to,
		from = space.from;

	// makes rgba() and hsla()
	color.fn[ spaceName ] = function( value ) {

		// generate a cache for this space if it doesn't exist
		if ( to && !this[ cache ] ) {
			this[ cache ] = to( this._rgba );
		}
		if ( value === undefined ) {
			return this[ cache ].slice();
		}

		var ret,
			type = jQuery.type( value ),
			arr = ( type === "array" || type === "object" ) ? value : arguments,
			local = this[ cache ].slice();

		each( props, function( key, prop ) {
			var val = arr[ type === "object" ? key : prop.idx ];
			if ( val == null ) {
				val = local[ prop.idx ];
			}
			local[ prop.idx ] = clamp( val, prop );
		});

		if ( from ) {
			ret = color( from( local ) );
			ret[ cache ] = local;
			return ret;
		} else {
			return color( local );
		}
	};

	// makes red() green() blue() alpha() hue() saturation() lightness()
	each( props, function( key, prop ) {
		// alpha is included in more than one space
		if ( color.fn[ key ] ) {
			return;
		}
		color.fn[ key ] = function( value ) {
			var vtype = jQuery.type( value ),
				fn = ( key === "alpha" ? ( this._hsla ? "hsla" : "rgba" ) : spaceName ),
				local = this[ fn ](),
				cur = local[ prop.idx ],
				match;

			if ( vtype === "undefined" ) {
				return cur;
			}

			if ( vtype === "function" ) {
				value = value.call( this, cur );
				vtype = jQuery.type( value );
			}
			if ( value == null && prop.empty ) {
				return this;
			}
			if ( vtype === "string" ) {
				match = rplusequals.exec( value );
				if ( match ) {
					value = cur + parseFloat( match[ 2 ] ) * ( match[ 1 ] === "+" ? 1 : -1 );
				}
			}
			local[ prop.idx ] = value;
			return this[ fn ]( local );
		};
	});
});

// add cssHook and .fx.step function for each named hook.
// accept a space separated string of properties
color.hook = function( hook ) {
	var hooks = hook.split( " " );
	each( hooks, function( i, hook ) {
		jQuery.cssHooks[ hook ] = {
			set: function( elem, value ) {
				var parsed, curElem,
					backgroundColor = "";

				if ( value !== "transparent" && ( jQuery.type( value ) !== "string" || ( parsed = stringParse( value ) ) ) ) {
					value = color( parsed || value );
					if ( !support.rgba && value._rgba[ 3 ] !== 1 ) {
						curElem = hook === "backgroundColor" ? elem.parentNode : elem;
						while (
							(backgroundColor === "" || backgroundColor === "transparent") &&
							curElem && curElem.style
						) {
							try {
								backgroundColor = jQuery.css( curElem, "backgroundColor" );
								curElem = curElem.parentNode;
							} catch ( e ) {
							}
						}

						value = value.blend( backgroundColor && backgroundColor !== "transparent" ?
							backgroundColor :
							"_default" );
					}

					value = value.toRgbaString();
				}
				try {
					elem.style[ hook ] = value;
				} catch ( e ) {
					// wrapped to prevent IE from throwing errors on "invalid" values like 'auto' or 'inherit'
				}
			}
		};
		jQuery.fx.step[ hook ] = function( fx ) {
			if ( !fx.colorInit ) {
				fx.start = color( fx.elem, hook );
				fx.end = color( fx.end );
				fx.colorInit = true;
			}
			jQuery.cssHooks[ hook ].set( fx.elem, fx.start.transition( fx.end, fx.pos ) );
		};
	});

};

color.hook( stepHooks );

jQuery.cssHooks.borderColor = {
	expand: function( value ) {
		var expanded = {};

		each( [ "Top", "Right", "Bottom", "Left" ], function( i, part ) {
			expanded[ "border" + part + "Color" ] = value;
		});
		return expanded;
	}
};

// Basic color names only.
// Usage of any of the other color names requires adding yourself or including
// jquery.color.svg-names.js.
colors = jQuery.Color.names = {
	// 4.1. Basic color keywords
	aqua: "#00ffff",
	black: "#000000",
	blue: "#0000ff",
	fuchsia: "#ff00ff",
	gray: "#808080",
	green: "#008000",
	lime: "#00ff00",
	maroon: "#800000",
	navy: "#000080",
	olive: "#808000",
	purple: "#800080",
	red: "#ff0000",
	silver: "#c0c0c0",
	teal: "#008080",
	white: "#ffffff",
	yellow: "#ffff00",

	// 4.2.3. "transparent" color keyword
	transparent: [ null, null, null, 0 ],

	_default: "#ffffff"
};

})( jQuery );

/******************************************************************************/
/****************************** CLASS ANIMATIONS ******************************/
/******************************************************************************/
(function() {

var classAnimationActions = [ "add", "remove", "toggle" ],
	shorthandStyles = {
		border: 1,
		borderBottom: 1,
		borderColor: 1,
		borderLeft: 1,
		borderRight: 1,
		borderTop: 1,
		borderWidth: 1,
		margin: 1,
		padding: 1
	};

$.each([ "borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle" ], function( _, prop ) {
	$.fx.step[ prop ] = function( fx ) {
		if ( fx.end !== "none" && !fx.setAttr || fx.pos === 1 && !fx.setAttr ) {
			jQuery.style( fx.elem, prop, fx.end );
			fx.setAttr = true;
		}
	};
});

function getElementStyles( elem ) {
	var key, len,
		style = elem.ownerDocument.defaultView ?
			elem.ownerDocument.defaultView.getComputedStyle( elem, null ) :
			elem.currentStyle,
		styles = {};

	if ( style && style.length && style[ 0 ] && style[ style[ 0 ] ] ) {
		len = style.length;
		while ( len-- ) {
			key = style[ len ];
			if ( typeof style[ key ] === "string" ) {
				styles[ $.camelCase( key ) ] = style[ key ];
			}
		}
	// support: Opera, IE <9
	} else {
		for ( key in style ) {
			if ( typeof style[ key ] === "string" ) {
				styles[ key ] = style[ key ];
			}
		}
	}

	return styles;
}

function styleDifference( oldStyle, newStyle ) {
	var diff = {},
		name, value;

	for ( name in newStyle ) {
		value = newStyle[ name ];
		if ( oldStyle[ name ] !== value ) {
			if ( !shorthandStyles[ name ] ) {
				if ( $.fx.step[ name ] || !isNaN( parseFloat( value ) ) ) {
					diff[ name ] = value;
				}
			}
		}
	}

	return diff;
}

// support: jQuery <1.8
if ( !$.fn.addBack ) {
	$.fn.addBack = function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	};
}

$.effects.animateClass = function( value, duration, easing, callback ) {
	var o = $.speed( duration, easing, callback );

	return this.queue( function() {
		var animated = $( this ),
			baseClass = animated.attr( "class" ) || "",
			applyClassChange,
			allAnimations = o.children ? animated.find( "*" ).addBack() : animated;

		// map the animated objects to store the original styles.
		allAnimations = allAnimations.map(function() {
			var el = $( this );
			return {
				el: el,
				start: getElementStyles( this )
			};
		});

		// apply class change
		applyClassChange = function() {
			$.each( classAnimationActions, function(i, action) {
				if ( value[ action ] ) {
					animated[ action + "Class" ]( value[ action ] );
				}
			});
		};
		applyClassChange();

		// map all animated objects again - calculate new styles and diff
		allAnimations = allAnimations.map(function() {
			this.end = getElementStyles( this.el[ 0 ] );
			this.diff = styleDifference( this.start, this.end );
			return this;
		});

		// apply original class
		animated.attr( "class", baseClass );

		// map all animated objects again - this time collecting a promise
		allAnimations = allAnimations.map(function() {
			var styleInfo = this,
				dfd = $.Deferred(),
				opts = $.extend({}, o, {
					queue: false,
					complete: function() {
						dfd.resolve( styleInfo );
					}
				});

			this.el.animate( this.diff, opts );
			return dfd.promise();
		});

		// once all animations have completed:
		$.when.apply( $, allAnimations.get() ).done(function() {

			// set the final class
			applyClassChange();

			// for each animated element,
			// clear all css properties that were animated
			$.each( arguments, function() {
				var el = this.el;
				$.each( this.diff, function(key) {
					el.css( key, "" );
				});
			});

			// this is guarnteed to be there if you use jQuery.speed()
			// it also handles dequeuing the next anim...
			o.complete.call( animated[ 0 ] );
		});
	});
};

$.fn.extend({
	addClass: (function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return speed ?
				$.effects.animateClass.call( this,
					{ add: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	})( $.fn.addClass ),

	removeClass: (function( orig ) {
		return function( classNames, speed, easing, callback ) {
			return arguments.length > 1 ?
				$.effects.animateClass.call( this,
					{ remove: classNames }, speed, easing, callback ) :
				orig.apply( this, arguments );
		};
	})( $.fn.removeClass ),

	toggleClass: (function( orig ) {
		return function( classNames, force, speed, easing, callback ) {
			if ( typeof force === "boolean" || force === undefined ) {
				if ( !speed ) {
					// without speed parameter
					return orig.apply( this, arguments );
				} else {
					return $.effects.animateClass.call( this,
						(force ? { add: classNames } : { remove: classNames }),
						speed, easing, callback );
				}
			} else {
				// without force parameter
				return $.effects.animateClass.call( this,
					{ toggle: classNames }, force, speed, easing );
			}
		};
	})( $.fn.toggleClass ),

	switchClass: function( remove, add, speed, easing, callback) {
		return $.effects.animateClass.call( this, {
			add: add,
			remove: remove
		}, speed, easing, callback );
	}
});

})();

/******************************************************************************/
/*********************************** EFFECTS **********************************/
/******************************************************************************/

(function() {

$.extend( $.effects, {
	version: "1.11.4",

	// Saves a set of properties in a data storage
	save: function( element, set ) {
		for ( var i = 0; i < set.length; i++ ) {
			if ( set[ i ] !== null ) {
				element.data( dataSpace + set[ i ], element[ 0 ].style[ set[ i ] ] );
			}
		}
	},

	// Restores a set of previously saved properties from a data storage
	restore: function( element, set ) {
		var val, i;
		for ( i = 0; i < set.length; i++ ) {
			if ( set[ i ] !== null ) {
				val = element.data( dataSpace + set[ i ] );
				// support: jQuery 1.6.2
				// http://bugs.jquery.com/ticket/9917
				// jQuery 1.6.2 incorrectly returns undefined for any falsy value.
				// We can't differentiate between "" and 0 here, so we just assume
				// empty string since it's likely to be a more common value...
				if ( val === undefined ) {
					val = "";
				}
				element.css( set[ i ], val );
			}
		}
	},

	setMode: function( el, mode ) {
		if (mode === "toggle") {
			mode = el.is( ":hidden" ) ? "show" : "hide";
		}
		return mode;
	},

	// Translates a [top,left] array into a baseline value
	// this should be a little more flexible in the future to handle a string & hash
	getBaseline: function( origin, original ) {
		var y, x;
		switch ( origin[ 0 ] ) {
			case "top": y = 0; break;
			case "middle": y = 0.5; break;
			case "bottom": y = 1; break;
			default: y = origin[ 0 ] / original.height;
		}
		switch ( origin[ 1 ] ) {
			case "left": x = 0; break;
			case "center": x = 0.5; break;
			case "right": x = 1; break;
			default: x = origin[ 1 ] / original.width;
		}
		return {
			x: x,
			y: y
		};
	},

	// Wraps the element around a wrapper that copies position properties
	createWrapper: function( element ) {

		// if the element is already wrapped, return it
		if ( element.parent().is( ".ui-effects-wrapper" )) {
			return element.parent();
		}

		// wrap the element
		var props = {
				width: element.outerWidth(true),
				height: element.outerHeight(true),
				"float": element.css( "float" )
			},
			wrapper = $( "<div></div>" )
				.addClass( "ui-effects-wrapper" )
				.css({
					fontSize: "100%",
					background: "transparent",
					border: "none",
					margin: 0,
					padding: 0
				}),
			// Store the size in case width/height are defined in % - Fixes #5245
			size = {
				width: element.width(),
				height: element.height()
			},
			active = document.activeElement;

		// support: Firefox
		// Firefox incorrectly exposes anonymous content
		// https://bugzilla.mozilla.org/show_bug.cgi?id=561664
		try {
			active.id;
		} catch ( e ) {
			active = document.body;
		}

		element.wrap( wrapper );

		// Fixes #7595 - Elements lose focus when wrapped.
		if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
			$( active ).focus();
		}

		wrapper = element.parent(); //Hotfix for jQuery 1.4 since some change in wrap() seems to actually lose the reference to the wrapped element

		// transfer positioning properties to the wrapper
		if ( element.css( "position" ) === "static" ) {
			wrapper.css({ position: "relative" });
			element.css({ position: "relative" });
		} else {
			$.extend( props, {
				position: element.css( "position" ),
				zIndex: element.css( "z-index" )
			});
			$.each([ "top", "left", "bottom", "right" ], function(i, pos) {
				props[ pos ] = element.css( pos );
				if ( isNaN( parseInt( props[ pos ], 10 ) ) ) {
					props[ pos ] = "auto";
				}
			});
			element.css({
				position: "relative",
				top: 0,
				left: 0,
				right: "auto",
				bottom: "auto"
			});
		}
		element.css(size);

		return wrapper.css( props ).show();
	},

	removeWrapper: function( element ) {
		var active = document.activeElement;

		if ( element.parent().is( ".ui-effects-wrapper" ) ) {
			element.parent().replaceWith( element );

			// Fixes #7595 - Elements lose focus when wrapped.
			if ( element[ 0 ] === active || $.contains( element[ 0 ], active ) ) {
				$( active ).focus();
			}
		}

		return element;
	},

	setTransition: function( element, list, factor, value ) {
		value = value || {};
		$.each( list, function( i, x ) {
			var unit = element.cssUnit( x );
			if ( unit[ 0 ] > 0 ) {
				value[ x ] = unit[ 0 ] * factor + unit[ 1 ];
			}
		});
		return value;
	}
});

// return an effect options object for the given parameters:
function _normalizeArguments( effect, options, speed, callback ) {

	// allow passing all options as the first parameter
	if ( $.isPlainObject( effect ) ) {
		options = effect;
		effect = effect.effect;
	}

	// convert to an object
	effect = { effect: effect };

	// catch (effect, null, ...)
	if ( options == null ) {
		options = {};
	}

	// catch (effect, callback)
	if ( $.isFunction( options ) ) {
		callback = options;
		speed = null;
		options = {};
	}

	// catch (effect, speed, ?)
	if ( typeof options === "number" || $.fx.speeds[ options ] ) {
		callback = speed;
		speed = options;
		options = {};
	}

	// catch (effect, options, callback)
	if ( $.isFunction( speed ) ) {
		callback = speed;
		speed = null;
	}

	// add options to effect
	if ( options ) {
		$.extend( effect, options );
	}

	speed = speed || options.duration;
	effect.duration = $.fx.off ? 0 :
		typeof speed === "number" ? speed :
		speed in $.fx.speeds ? $.fx.speeds[ speed ] :
		$.fx.speeds._default;

	effect.complete = callback || options.complete;

	return effect;
}

function standardAnimationOption( option ) {
	// Valid standard speeds (nothing, number, named speed)
	if ( !option || typeof option === "number" || $.fx.speeds[ option ] ) {
		return true;
	}

	// Invalid strings - treat as "normal" speed
	if ( typeof option === "string" && !$.effects.effect[ option ] ) {
		return true;
	}

	// Complete callback
	if ( $.isFunction( option ) ) {
		return true;
	}

	// Options hash (but not naming an effect)
	if ( typeof option === "object" && !option.effect ) {
		return true;
	}

	// Didn't match any standard API
	return false;
}

$.fn.extend({
	effect: function( /* effect, options, speed, callback */ ) {
		var args = _normalizeArguments.apply( this, arguments ),
			mode = args.mode,
			queue = args.queue,
			effectMethod = $.effects.effect[ args.effect ];

		if ( $.fx.off || !effectMethod ) {
			// delegate to the original method (e.g., .show()) if possible
			if ( mode ) {
				return this[ mode ]( args.duration, args.complete );
			} else {
				return this.each( function() {
					if ( args.complete ) {
						args.complete.call( this );
					}
				});
			}
		}

		function run( next ) {
			var elem = $( this ),
				complete = args.complete,
				mode = args.mode;

			function done() {
				if ( $.isFunction( complete ) ) {
					complete.call( elem[0] );
				}
				if ( $.isFunction( next ) ) {
					next();
				}
			}

			// If the element already has the correct final state, delegate to
			// the core methods so the internal tracking of "olddisplay" works.
			if ( elem.is( ":hidden" ) ? mode === "hide" : mode === "show" ) {
				elem[ mode ]();
				done();
			} else {
				effectMethod.call( elem[0], args, done );
			}
		}

		return queue === false ? this.each( run ) : this.queue( queue || "fx", run );
	},

	show: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "show";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.show ),

	hide: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "hide";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.hide ),

	toggle: (function( orig ) {
		return function( option ) {
			if ( standardAnimationOption( option ) || typeof option === "boolean" ) {
				return orig.apply( this, arguments );
			} else {
				var args = _normalizeArguments.apply( this, arguments );
				args.mode = "toggle";
				return this.effect.call( this, args );
			}
		};
	})( $.fn.toggle ),

	// helper functions
	cssUnit: function(key) {
		var style = this.css( key ),
			val = [];

		$.each( [ "em", "px", "%", "pt" ], function( i, unit ) {
			if ( style.indexOf( unit ) > 0 ) {
				val = [ parseFloat( style ), unit ];
			}
		});
		return val;
	}
});

})();

/******************************************************************************/
/*********************************** EASING ***********************************/
/******************************************************************************/

(function() {

// based on easing equations from Robert Penner (http://www.robertpenner.com/easing)

var baseEasings = {};

$.each( [ "Quad", "Cubic", "Quart", "Quint", "Expo" ], function( i, name ) {
	baseEasings[ name ] = function( p ) {
		return Math.pow( p, i + 2 );
	};
});

$.extend( baseEasings, {
	Sine: function( p ) {
		return 1 - Math.cos( p * Math.PI / 2 );
	},
	Circ: function( p ) {
		return 1 - Math.sqrt( 1 - p * p );
	},
	Elastic: function( p ) {
		return p === 0 || p === 1 ? p :
			-Math.pow( 2, 8 * (p - 1) ) * Math.sin( ( (p - 1) * 80 - 7.5 ) * Math.PI / 15 );
	},
	Back: function( p ) {
		return p * p * ( 3 * p - 2 );
	},
	Bounce: function( p ) {
		var pow2,
			bounce = 4;

		while ( p < ( ( pow2 = Math.pow( 2, --bounce ) ) - 1 ) / 11 ) {}
		return 1 / Math.pow( 4, 3 - bounce ) - 7.5625 * Math.pow( ( pow2 * 3 - 2 ) / 22 - p, 2 );
	}
});

$.each( baseEasings, function( name, easeIn ) {
	$.easing[ "easeIn" + name ] = easeIn;
	$.easing[ "easeOut" + name ] = function( p ) {
		return 1 - easeIn( 1 - p );
	};
	$.easing[ "easeInOut" + name ] = function( p ) {
		return p < 0.5 ?
			easeIn( p * 2 ) / 2 :
			1 - easeIn( p * -2 + 2 ) / 2;
	};
});

})();

return $.effects;

}));

/*!
 * jQuery UI Effects Blind 1.11.4
 * http://jqueryui.com
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/blind-effect/
 */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define('jquery-ui/effect-blind',[
			"jquery",
			"./effect"
		], factory );
	} else {

		// Browser globals
		factory( jQuery );
	}
}(function( $ ) {

return $.effects.effect.blind = function( o, done ) {
	// Create element
	var el = $( this ),
		rvertical = /up|down|vertical/,
		rpositivemotion = /up|left|vertical|horizontal/,
		props = [ "position", "top", "bottom", "left", "right", "height", "width" ],
		mode = $.effects.setMode( el, o.mode || "hide" ),
		direction = o.direction || "up",
		vertical = rvertical.test( direction ),
		ref = vertical ? "height" : "width",
		ref2 = vertical ? "top" : "left",
		motion = rpositivemotion.test( direction ),
		animation = {},
		show = mode === "show",
		wrapper, distance, margin;

	// if already wrapped, the wrapper's properties are my property. #6245
	if ( el.parent().is( ".ui-effects-wrapper" ) ) {
		$.effects.save( el.parent(), props );
	} else {
		$.effects.save( el, props );
	}
	el.show();
	wrapper = $.effects.createWrapper( el ).css({
		overflow: "hidden"
	});

	distance = wrapper[ ref ]();
	margin = parseFloat( wrapper.css( ref2 ) ) || 0;

	animation[ ref ] = show ? distance : 0;
	if ( !motion ) {
		el
			.css( vertical ? "bottom" : "right", 0 )
			.css( vertical ? "top" : "left", "auto" )
			.css({ position: "absolute" });

		animation[ ref2 ] = show ? margin : distance + margin;
	}

	// start at 0 if we are showing
	if ( show ) {
		wrapper.css( ref, 0 );
		if ( !motion ) {
			wrapper.css( ref2, margin + distance );
		}
	}

	// Animate
	wrapper.animate( animation, {
		duration: o.duration,
		easing: o.easing,
		queue: false,
		complete: function() {
			if ( mode === "hide" ) {
				el.hide();
			}
			$.effects.restore( el, props );
			$.effects.removeWrapper( el );
			done();
		}
	});
};

}));

/*!
 * Router.js
 */
define('router',["jquery","underscore","backbone","postal","react","utilities/login_manager","utilities/form_validation","jquery-ui/effect-blind"],function(e,t,n,r,o,i,u){var s=n.Router.extend({routeReady:function(){e("body").addClass("loaded"),e("#loading .fa-spin").removeClass("fa-spin"),e("#loading").hide("blind",{},500),u.setup()},initialize:function(n){n||(n={}),this.context=n.context,this.current_route="",this.current_route={route_name:null,route_function:null,route_params:null},this.protected_routes=this.context.protected_routes,r.channel("route").subscribe("ready",t.bind(function(){this.routeReady()},this)),r.channel("route").subscribe("route?",t.bind(function(e,n){n.reply(null,{route:this.current_route.route_name,"protected":t.has(this.protected_routes,this.current_route.route_name)})},this)),r.channel("route").subscribe("refire",t.bind(function(){"function"==typeof this.current_route.route_function&&this.current_route.route_function(this.context,this.current_route.route_params)},this)),r.channel("login").subscribe("change",t.bind(function(e){t.has(this.protected_routes,this.current_route.route_name)&&(e.loginStatus?r.channel("route").publish("refire"):this.login_manager.show_login_page())},this)),r.channel("route").subscribe("change",t.bind(function(n){if(o.unmountComponentAtNode(e("#app").get(0)),e("#app").html("").append('<h1 class="state-loading text-center">Loading</h1>'),e("body").attr("class","loaded").addClass(n.route),this.current_route.route_name=t.findLastKey(this.routes,function(e){return e==n.route}),t.has(this.protected_routes,this.current_route.route_name)&&!this.login_manager.authenticated())this.login_manager.show_login_page();else{var r="undefined"==typeof window.manifest?"":window.manifest.assets["routes/"+n.route+".js"].replace(/\.js$/,"");"undefined"!=typeof window.manifest&&t.has(window.manifest.assets,"routes/"+n.route+"_wo_citeproc.js")&&require.defined("citeproc/citeproc")&&!require.defined("routes/"+n.route)&&(r=window.manifest.assets["routes/"+n.route+"_wo_citeproc.js"].replace(/\.js$/,"")),require([r],t.bind(function(){require(["routes/"+n.route],t.bind(function(e){e(this.context,n.params),this.current_route.route_function=e,this.current_route.route_params=n.params},this))},this))}},this)),t.each(this.routes,function(e,t){""!=t&&this.on("route:"+e,function(t){r.channel("route").publish("change",{params:t,route:e})})},this),this.login_manager=new i}});return s});
!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define('jsyaml',[],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.jsyaml=e()}}(function(){return function e(t,n,i){function r(a,s){if(!n[a]){if(!t[a]){var u="function"==typeof require&&require;if(!s&&u)return u(a,!0);if(o)return o(a,!0);var c=new Error("Cannot find module '"+a+"'");throw c.code="MODULE_NOT_FOUND",c}var l=n[a]={exports:{}};t[a][0].call(l.exports,function(e){var n=t[a][1][e];return r(n?n:e)},l,l.exports,e,t,n,i)}return n[a].exports}for(var o="function"==typeof require&&require,a=0;a<i.length;a++)r(i[a]);return r}({1:[function(e,t){"use strict";function n(e){return function(){throw new Error("Function "+e+" is deprecated and cannot be used.")}}var i=e("./js-yaml/loader"),r=e("./js-yaml/dumper");t.exports.Type=e("./js-yaml/type"),t.exports.Schema=e("./js-yaml/schema"),t.exports.FAILSAFE_SCHEMA=e("./js-yaml/schema/failsafe"),t.exports.JSON_SCHEMA=e("./js-yaml/schema/json"),t.exports.CORE_SCHEMA=e("./js-yaml/schema/core"),t.exports.DEFAULT_SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),t.exports.DEFAULT_FULL_SCHEMA=e("./js-yaml/schema/default_full"),t.exports.load=i.load,t.exports.loadAll=i.loadAll,t.exports.safeLoad=i.safeLoad,t.exports.safeLoadAll=i.safeLoadAll,t.exports.dump=r.dump,t.exports.safeDump=r.safeDump,t.exports.YAMLException=e("./js-yaml/exception"),t.exports.MINIMAL_SCHEMA=e("./js-yaml/schema/failsafe"),t.exports.SAFE_SCHEMA=e("./js-yaml/schema/default_safe"),t.exports.DEFAULT_SCHEMA=e("./js-yaml/schema/default_full"),t.exports.scan=n("scan"),t.exports.parse=n("parse"),t.exports.compose=n("compose"),t.exports.addConstructor=n("addConstructor")},{"./js-yaml/dumper":3,"./js-yaml/exception":4,"./js-yaml/loader":5,"./js-yaml/schema":7,"./js-yaml/schema/core":8,"./js-yaml/schema/default_full":9,"./js-yaml/schema/default_safe":10,"./js-yaml/schema/failsafe":11,"./js-yaml/schema/json":12,"./js-yaml/type":13}],2:[function(e,t){"use strict";function n(e){return"undefined"==typeof e||null===e}function i(e){return"object"==typeof e&&null!==e}function r(e){return Array.isArray(e)?e:n(e)?[]:[e]}function o(e,t){var n,i,r,o;if(t)for(o=Object.keys(t),n=0,i=o.length;i>n;n+=1)r=o[n],e[r]=t[r];return e}function a(e,t){var n,i="";for(n=0;t>n;n+=1)i+=e;return i}function s(e){return 0===e&&Number.NEGATIVE_INFINITY===1/e}t.exports.isNothing=n,t.exports.isObject=i,t.exports.toArray=r,t.exports.repeat=a,t.exports.isNegativeZero=s,t.exports.extend=o},{}],3:[function(e,t){"use strict";function n(e,t){var n,i,r,o,a,s,u;if(null===t)return{};for(n={},i=Object.keys(t),r=0,o=i.length;o>r;r+=1)a=i[r],s=String(t[a]),"!!"===a.slice(0,2)&&(a="tag:yaml.org,2002:"+a.slice(2)),u=e.compiledTypeMap[a],u&&E.call(u.styleAliases,s)&&(s=u.styleAliases[s]),n[a]=s;return n}function i(e){var t,n,i;if(t=e.toString(16).toUpperCase(),255>=e)n="x",i=2;else if(65535>=e)n="u",i=4;else{if(!(4294967295>=e))throw new j("code point within a string may not be greater than 0xFFFFFFFF");n="U",i=8}return"\\"+n+k.repeat("0",i-t.length)+t}function r(e){this.schema=e.schema||I,this.indent=Math.max(1,e.indent||2),this.skipInvalid=e.skipInvalid||!1,this.flowLevel=k.isNothing(e.flowLevel)?-1:e.flowLevel,this.styleMap=n(this.schema,e.styles||null),this.sortKeys=e.sortKeys||!1,this.implicitTypes=this.schema.compiledImplicit,this.explicitTypes=this.schema.compiledExplicit,this.tag=null,this.result="",this.duplicates=[],this.usedDuplicates=null}function o(e,t){for(var n,i=k.repeat(" ",t),r=0,o=-1,a="",s=e.length;s>r;)o=e.indexOf("\n",r),-1===o?(n=e.slice(r),r=s):(n=e.slice(r,o+1),r=o+1),n.length&&"\n"!==n&&(a+=i),a+=n;return a}function a(e,t){return"\n"+k.repeat(" ",e.indent*t)}function s(e,t){var n,i,r;for(n=0,i=e.implicitTypes.length;i>n;n+=1)if(r=e.implicitTypes[n],r.resolve(t))return!0;return!1}function u(e){this.source=e,this.result="",this.checkpoint=0}function c(e,t,n){var i,r,a,c,p,d,m,g,y,x,v,A,b,w,C,k,j,I,S,O,E;if(0===t.length)return void(e.dump="''");if(-1!==et.indexOf(t))return void(e.dump="'"+t+"'");for(i=!0,r=t.length?t.charCodeAt(0):0,a=_===r||_===t.charCodeAt(t.length-1),(B===r||H===r||G===r||Z===r)&&(i=!1),a?(i=!1,c=!1,p=!1):(c=!0,p=!0),d=!0,m=new u(t),g=!1,y=0,x=0,v=e.indent*n,A=80,40>v?A-=v:A=40,w=0;w<t.length;w++){if(b=t.charCodeAt(w),i){if(f(b))continue;i=!1}d&&b===q&&(d=!1),C=X[b],k=h(b),(C||k)&&(b!==N&&b!==L&&b!==q?(c=!1,p=!1):b===N&&(g=!0,d=!1,w>0&&(j=t.charCodeAt(w-1),j===_&&(p=!1,c=!1)),c&&(I=w-y,y=w,I>x&&(x=I))),b!==L&&(d=!1),m.takeUpTo(w),m.escapeChar())}if(i&&s(e,t)&&(i=!1),S="",(c||p)&&(O=0,t.charCodeAt(t.length-1)===N&&(O+=1,t.charCodeAt(t.length-2)===N&&(O+=1)),0===O?S="-":2===O&&(S="+")),p&&A>x&&(c=!1),g||(p=!1),i)e.dump=t;else if(d)e.dump="'"+t+"'";else if(c)E=l(t,A),e.dump=">"+S+"\n"+o(E,v);else if(p)S||(t=t.replace(/\n$/,"")),e.dump="|"+S+"\n"+o(t,v);else{if(!m)throw new Error("Failed to dump scalar value");m.finish(),e.dump='"'+m.result+'"'}}function l(e,t){var n,i="",r=0,o=e.length,a=/\n+$/.exec(e);for(a&&(o=a.index+1);o>r;)n=e.indexOf("\n",r),n>o||-1===n?(i&&(i+="\n\n"),i+=p(e.slice(r,o),t),r=o):(i&&(i+="\n\n"),i+=p(e.slice(r,n),t),r=n+1);return a&&"\n"!==a[0]&&(i+=a[0]),i}function p(e,t){if(""===e)return e;for(var n,i,r,o=/[^\s] [^\s]/g,a="",s=0,u=0,c=o.exec(e);c;)n=c.index,n-u>t&&(i=s!==u?s:n,a&&(a+="\n"),r=e.slice(u,i),a+=r,u=i+1),s=n+1,c=o.exec(e);return a&&(a+="\n"),a+=u!==s&&e.length-u>t?e.slice(u,s)+"\n"+e.slice(s+1):e.slice(u)}function f(e){return F!==e&&N!==e&&T!==e&&$!==e&&V!==e&&W!==e&&J!==e&&Q!==e&&D!==e&&Y!==e&&P!==e&&M!==e&&z!==e&&R!==e&&q!==e&&L!==e&&U!==e&&K!==e&&!X[e]&&!h(e)}function h(e){return!(e>=32&&126>=e||133===e||e>=160&&55295>=e||e>=57344&&65533>=e||e>=65536&&1114111>=e)}function d(e,t,n){var i,r,o="",a=e.tag;for(i=0,r=n.length;r>i;i+=1)v(e,t,n[i],!1,!1)&&(0!==i&&(o+=", "),o+=e.dump);e.tag=a,e.dump="["+o+"]"}function m(e,t,n,i){var r,o,s="",u=e.tag;for(r=0,o=n.length;o>r;r+=1)v(e,t+1,n[r],!0,!0)&&(i&&0===r||(s+=a(e,t)),s+="- "+e.dump);e.tag=u,e.dump=s||"[]"}function g(e,t,n){var i,r,o,a,s,u="",c=e.tag,l=Object.keys(n);for(i=0,r=l.length;r>i;i+=1)s="",0!==i&&(s+=", "),o=l[i],a=n[o],v(e,t,o,!1,!1)&&(e.dump.length>1024&&(s+="? "),s+=e.dump+": ",v(e,t,a,!1,!1)&&(s+=e.dump,u+=s));e.tag=c,e.dump="{"+u+"}"}function y(e,t,n,i){var r,o,s,u,c,l,p="",f=e.tag,h=Object.keys(n);if(e.sortKeys===!0)h.sort();else if("function"==typeof e.sortKeys)h.sort(e.sortKeys);else if(e.sortKeys)throw new j("sortKeys must be a boolean or a function");for(r=0,o=h.length;o>r;r+=1)l="",i&&0===r||(l+=a(e,t)),s=h[r],u=n[s],v(e,t+1,s,!0,!0)&&(c=null!==e.tag&&"?"!==e.tag||e.dump&&e.dump.length>1024,c&&(l+=e.dump&&N===e.dump.charCodeAt(0)?"?":"? "),l+=e.dump,c&&(l+=a(e,t)),v(e,t+1,u,!0,c)&&(l+=e.dump&&N===e.dump.charCodeAt(0)?":":": ",l+=e.dump,p+=l));e.tag=f,e.dump=p||"{}"}function x(e,t,n){var i,r,o,a,s,u;for(r=n?e.explicitTypes:e.implicitTypes,o=0,a=r.length;a>o;o+=1)if(s=r[o],(s.instanceOf||s.predicate)&&(!s.instanceOf||"object"==typeof t&&t instanceof s.instanceOf)&&(!s.predicate||s.predicate(t))){if(e.tag=n?s.tag:"?",s.represent){if(u=e.styleMap[s.tag]||s.defaultStyle,"[object Function]"===O.call(s.represent))i=s.represent(t,u);else{if(!E.call(s.represent,u))throw new j("!<"+s.tag+'> tag resolver accepts not "'+u+'" style');i=s.represent[u](t,u)}e.dump=i}return!0}return!1}function v(e,t,n,i,r){e.tag=null,e.dump=n,x(e,n,!1)||x(e,n,!0);var o=O.call(e.dump);i&&(i=0>e.flowLevel||e.flowLevel>t),(null!==e.tag&&"?"!==e.tag||2!==e.indent&&t>0)&&(r=!1);var a,s,u="[object Object]"===o||"[object Array]"===o;if(u&&(a=e.duplicates.indexOf(n),s=-1!==a),s&&e.usedDuplicates[a])e.dump="*ref_"+a;else{if(u&&s&&!e.usedDuplicates[a]&&(e.usedDuplicates[a]=!0),"[object Object]"===o)i&&0!==Object.keys(e.dump).length?(y(e,t,e.dump,r),s&&(e.dump="&ref_"+a+(0===t?"\n":"")+e.dump)):(g(e,t,e.dump),s&&(e.dump="&ref_"+a+" "+e.dump));else if("[object Array]"===o)i&&0!==e.dump.length?(m(e,t,e.dump,r),s&&(e.dump="&ref_"+a+(0===t?"\n":"")+e.dump)):(d(e,t,e.dump),s&&(e.dump="&ref_"+a+" "+e.dump));else{if("[object String]"!==o){if(e.skipInvalid)return!1;throw new j("unacceptable kind of an object to dump "+o)}"?"!==e.tag&&c(e,e.dump,t)}null!==e.tag&&"?"!==e.tag&&(e.dump="!<"+e.tag+"> "+e.dump)}return!0}function A(e,t){var n,i,r=[],o=[];for(b(e,r,o),n=0,i=o.length;i>n;n+=1)t.duplicates.push(r[o[n]]);t.usedDuplicates=new Array(i)}function b(e,t,n){{var i,r,o;O.call(e)}if(null!==e&&"object"==typeof e)if(r=t.indexOf(e),-1!==r)-1===n.indexOf(r)&&n.push(r);else if(t.push(e),Array.isArray(e))for(r=0,o=e.length;o>r;r+=1)b(e[r],t,n);else for(i=Object.keys(e),r=0,o=i.length;o>r;r+=1)b(e[i[r]],t,n)}function w(e,t){t=t||{};var n=new r(t);return A(e,n),v(n,0,e,!0,!0)?n.dump+"\n":""}function C(e,t){return w(e,k.extend({schema:S},t))}var k=e("./common"),j=e("./exception"),I=e("./schema/default_full"),S=e("./schema/default_safe"),O=Object.prototype.toString,E=Object.prototype.hasOwnProperty,F=9,N=10,T=13,_=32,M=33,L=34,D=35,U=37,Y=38,q=39,P=42,$=44,B=45,K=58,R=62,H=63,G=64,V=91,W=93,Z=96,J=123,z=124,Q=125,X={};X[0]="\\0",X[7]="\\a",X[8]="\\b",X[9]="\\t",X[10]="\\n",X[11]="\\v",X[12]="\\f",X[13]="\\r",X[27]="\\e",X[34]='\\"',X[92]="\\\\",X[133]="\\N",X[160]="\\_",X[8232]="\\L",X[8233]="\\P";var et=["y","Y","yes","Yes","YES","on","On","ON","n","N","no","No","NO","off","Off","OFF"];u.prototype.takeUpTo=function(e){var t;if(e<this.checkpoint)throw t=new Error("position should be > checkpoint"),t.position=e,t.checkpoint=this.checkpoint,t;return this.result+=this.source.slice(this.checkpoint,e),this.checkpoint=e,this},u.prototype.escapeChar=function(){var e,t;return e=this.source.charCodeAt(this.checkpoint),t=X[e]||i(e),this.result+=t,this.checkpoint+=1,this},u.prototype.finish=function(){this.source.length>this.checkpoint&&this.takeUpTo(this.source.length)},t.exports.dump=w,t.exports.safeDump=C},{"./common":2,"./exception":4,"./schema/default_full":9,"./schema/default_safe":10}],4:[function(e,t){"use strict";function n(e,t){this.name="YAMLException",this.reason=e,this.mark=t,this.message=this.toString(!1)}n.prototype.toString=function(e){var t;return t="JS-YAML: "+(this.reason||"(unknown reason)"),!e&&this.mark&&(t+=" "+this.mark.toString()),t},t.exports=n},{}],5:[function(e,t){"use strict";function n(e){return 10===e||13===e}function i(e){return 9===e||32===e}function r(e){return 9===e||32===e||10===e||13===e}function o(e){return 44===e||91===e||93===e||123===e||125===e}function a(e){var t;return e>=48&&57>=e?e-48:(t=32|e,t>=97&&102>=t?t-97+10:-1)}function s(e){return 120===e?2:117===e?4:85===e?8:0}function u(e){return e>=48&&57>=e?e-48:-1}function c(e){return 48===e?"\x00":97===e?"":98===e?"\b":116===e?"	":9===e?"	":110===e?"\n":118===e?"":102===e?"\f":114===e?"\r":101===e?"":32===e?" ":34===e?'"':47===e?"/":92===e?"\\":78===e?"\x85":95===e?"\xa0":76===e?"\u2028":80===e?"\u2029":""}function l(e){return 65535>=e?String.fromCharCode(e):String.fromCharCode((e-65536>>10)+55296,(e-65536&1023)+56320)}function p(e,t){this.input=e,this.filename=t.filename||null,this.schema=t.schema||K,this.onWarning=t.onWarning||null,this.legacy=t.legacy||!1,this.implicitTypes=this.schema.compiledImplicit,this.typeMap=this.schema.compiledTypeMap,this.length=e.length,this.position=0,this.line=0,this.lineStart=0,this.lineIndent=0,this.documents=[]}function f(e,t){return new P(t,new $(e.filename,e.input,e.position,e.line,e.position-e.lineStart))}function h(e,t){throw f(e,t)}function d(e,t){var n=f(e,t);if(!e.onWarning)throw n;e.onWarning.call(null,n)}function m(e,t,n,i){var r,o,a,s;if(n>t){if(s=e.input.slice(t,n),i)for(r=0,o=s.length;o>r;r+=1)a=s.charCodeAt(r),9===a||a>=32&&1114111>=a||h(e,"expected valid JSON character");e.result+=s}}function g(e,t,n){var i,r,o,a;for(q.isObject(n)||h(e,"cannot merge mappings; the provided source object is unacceptable"),i=Object.keys(n),o=0,a=i.length;a>o;o+=1)r=i[o],R.call(t,r)||(t[r]=n[r])}function y(e,t,n,i,r){var o,a;if(i=String(i),null===t&&(t={}),"tag:yaml.org,2002:merge"===n)if(Array.isArray(r))for(o=0,a=r.length;a>o;o+=1)g(e,t,r[o]);else g(e,t,r);else t[i]=r;return t}function x(e){var t;t=e.input.charCodeAt(e.position),10===t?e.position++:13===t?(e.position++,10===e.input.charCodeAt(e.position)&&e.position++):h(e,"a line break is expected"),e.line+=1,e.lineStart=e.position}function v(e,t,r){for(var o=0,a=e.input.charCodeAt(e.position);0!==a;){for(;i(a);)a=e.input.charCodeAt(++e.position);if(t&&35===a)do a=e.input.charCodeAt(++e.position);while(10!==a&&13!==a&&0!==a);if(!n(a))break;for(x(e),a=e.input.charCodeAt(e.position),o++,e.lineIndent=0;32===a;)e.lineIndent++,a=e.input.charCodeAt(++e.position)}return-1!==r&&0!==o&&e.lineIndent<r&&d(e,"deficient indentation"),o}function A(e){var t,n=e.position;return t=e.input.charCodeAt(n),45!==t&&46!==t||e.input.charCodeAt(n+1)!==t||e.input.charCodeAt(n+2)!==t||(n+=3,t=e.input.charCodeAt(n),0!==t&&!r(t))?!1:!0}function b(e,t){1===t?e.result+=" ":t>1&&(e.result+=q.repeat("\n",t-1))}function w(e,t,a){var s,u,c,l,p,f,h,d,g,y=e.kind,x=e.result;if(g=e.input.charCodeAt(e.position),r(g)||o(g)||35===g||38===g||42===g||33===g||124===g||62===g||39===g||34===g||37===g||64===g||96===g)return!1;if((63===g||45===g)&&(u=e.input.charCodeAt(e.position+1),r(u)||a&&o(u)))return!1;for(e.kind="scalar",e.result="",c=l=e.position,p=!1;0!==g;){if(58===g){if(u=e.input.charCodeAt(e.position+1),r(u)||a&&o(u))break}else if(35===g){if(s=e.input.charCodeAt(e.position-1),r(s))break}else{if(e.position===e.lineStart&&A(e)||a&&o(g))break;if(n(g)){if(f=e.line,h=e.lineStart,d=e.lineIndent,v(e,!1,-1),e.lineIndent>=t){p=!0,g=e.input.charCodeAt(e.position);continue}e.position=l,e.line=f,e.lineStart=h,e.lineIndent=d;break}}p&&(m(e,c,l,!1),b(e,e.line-f),c=l=e.position,p=!1),i(g)||(l=e.position+1),g=e.input.charCodeAt(++e.position)}return m(e,c,l,!1),e.result?!0:(e.kind=y,e.result=x,!1)}function C(e,t){var i,r,o;if(i=e.input.charCodeAt(e.position),39!==i)return!1;for(e.kind="scalar",e.result="",e.position++,r=o=e.position;0!==(i=e.input.charCodeAt(e.position));)if(39===i){if(m(e,r,e.position,!0),i=e.input.charCodeAt(++e.position),39!==i)return!0;r=o=e.position,e.position++}else n(i)?(m(e,r,o,!0),b(e,v(e,!1,t)),r=o=e.position):e.position===e.lineStart&&A(e)?h(e,"unexpected end of the document within a single quoted scalar"):(e.position++,o=e.position);h(e,"unexpected end of the stream within a single quoted scalar")}function k(e,t){var i,r,o,u,c,p;if(p=e.input.charCodeAt(e.position),34!==p)return!1;for(e.kind="scalar",e.result="",e.position++,i=r=e.position;0!==(p=e.input.charCodeAt(e.position));){if(34===p)return m(e,i,e.position,!0),e.position++,!0;if(92===p){if(m(e,i,e.position,!0),p=e.input.charCodeAt(++e.position),n(p))v(e,!1,t);else if(256>p&&it[p])e.result+=rt[p],e.position++;else if((c=s(p))>0){for(o=c,u=0;o>0;o--)p=e.input.charCodeAt(++e.position),(c=a(p))>=0?u=(u<<4)+c:h(e,"expected hexadecimal character");e.result+=l(u),e.position++}else h(e,"unknown escape sequence");i=r=e.position}else n(p)?(m(e,i,r,!0),b(e,v(e,!1,t)),i=r=e.position):e.position===e.lineStart&&A(e)?h(e,"unexpected end of the document within a double quoted scalar"):(e.position++,r=e.position)}h(e,"unexpected end of the stream within a double quoted scalar")}function j(e,t){var n,i,o,a,s,u,c,l,p,f,d,m=!0,g=e.tag,x=e.anchor;if(d=e.input.charCodeAt(e.position),91===d)a=93,c=!1,i=[];else{if(123!==d)return!1;a=125,c=!0,i={}}for(null!==e.anchor&&(e.anchorMap[e.anchor]=i),d=e.input.charCodeAt(++e.position);0!==d;){if(v(e,!0,t),d=e.input.charCodeAt(e.position),d===a)return e.position++,e.tag=g,e.anchor=x,e.kind=c?"mapping":"sequence",e.result=i,!0;m||h(e,"missed comma between flow collection entries"),p=l=f=null,s=u=!1,63===d&&(o=e.input.charCodeAt(e.position+1),r(o)&&(s=u=!0,e.position++,v(e,!0,t))),n=e.line,T(e,t,H,!1,!0),p=e.tag,l=e.result,v(e,!0,t),d=e.input.charCodeAt(e.position),!u&&e.line!==n||58!==d||(s=!0,d=e.input.charCodeAt(++e.position),v(e,!0,t),T(e,t,H,!1,!0),f=e.result),c?y(e,i,p,l,f):i.push(s?y(e,null,p,l,f):l),v(e,!0,t),d=e.input.charCodeAt(e.position),44===d?(m=!0,d=e.input.charCodeAt(++e.position)):m=!1}h(e,"unexpected end of the stream within a flow collection")}function I(e,t){var r,o,a,s,c=Z,l=!1,p=t,f=0,d=!1;if(s=e.input.charCodeAt(e.position),124===s)o=!1;else{if(62!==s)return!1;o=!0}for(e.kind="scalar",e.result="";0!==s;)if(s=e.input.charCodeAt(++e.position),43===s||45===s)Z===c?c=43===s?z:J:h(e,"repeat of a chomping mode identifier");else{if(!((a=u(s))>=0))break;0===a?h(e,"bad explicit indentation width of a block scalar; it cannot be less than one"):l?h(e,"repeat of an indentation width identifier"):(p=t+a-1,l=!0)}if(i(s)){do s=e.input.charCodeAt(++e.position);while(i(s));if(35===s)do s=e.input.charCodeAt(++e.position);while(!n(s)&&0!==s)}for(;0!==s;){for(x(e),e.lineIndent=0,s=e.input.charCodeAt(e.position);(!l||e.lineIndent<p)&&32===s;)e.lineIndent++,s=e.input.charCodeAt(++e.position);if(!l&&e.lineIndent>p&&(p=e.lineIndent),n(s))f++;else{if(e.lineIndent<p){c===z?e.result+=q.repeat("\n",f):c===Z&&l&&(e.result+="\n");break}for(o?i(s)?(d=!0,e.result+=q.repeat("\n",f+1)):d?(d=!1,e.result+=q.repeat("\n",f+1)):0===f?l&&(e.result+=" "):e.result+=q.repeat("\n",f):l&&(e.result+=q.repeat("\n",f+1)),l=!0,f=0,r=e.position;!n(s)&&0!==s;)s=e.input.charCodeAt(++e.position);m(e,r,e.position,!1)}}return!0}function S(e,t){var n,i,o,a=e.tag,s=e.anchor,u=[],c=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=u),o=e.input.charCodeAt(e.position);0!==o&&45===o&&(i=e.input.charCodeAt(e.position+1),r(i));)if(c=!0,e.position++,v(e,!0,-1)&&e.lineIndent<=t)u.push(null),o=e.input.charCodeAt(e.position);else if(n=e.line,T(e,t,V,!1,!0),u.push(e.result),v(e,!0,-1),o=e.input.charCodeAt(e.position),(e.line===n||e.lineIndent>t)&&0!==o)h(e,"bad indentation of a sequence entry");else if(e.lineIndent<t)break;return c?(e.tag=a,e.anchor=s,e.kind="sequence",e.result=u,!0):!1}function O(e,t,n){var o,a,s,u,c=e.tag,l=e.anchor,p={},f=null,d=null,m=null,g=!1,x=!1;for(null!==e.anchor&&(e.anchorMap[e.anchor]=p),u=e.input.charCodeAt(e.position);0!==u;){if(o=e.input.charCodeAt(e.position+1),s=e.line,63!==u&&58!==u||!r(o)){if(!T(e,n,G,!1,!0))break;if(e.line===s){for(u=e.input.charCodeAt(e.position);i(u);)u=e.input.charCodeAt(++e.position);if(58===u)u=e.input.charCodeAt(++e.position),r(u)||h(e,"a whitespace character is expected after the key-value separator within a block mapping"),g&&(y(e,p,f,d,null),f=d=m=null),x=!0,g=!1,a=!1,f=e.tag,d=e.result;else{if(!x)return e.tag=c,e.anchor=l,!0;h(e,"can not read an implicit mapping pair; a colon is missed")}}else{if(!x)return e.tag=c,e.anchor=l,!0;h(e,"can not read a block mapping entry; a multiline key may not be an implicit key")}}else 63===u?(g&&(y(e,p,f,d,null),f=d=m=null),x=!0,g=!0,a=!0):g?(g=!1,a=!0):h(e,"incomplete explicit mapping pair; a key node is missed"),e.position+=1,u=o;if((e.line===s||e.lineIndent>t)&&(T(e,t,W,!0,a)&&(g?d=e.result:m=e.result),g||(y(e,p,f,d,m),f=d=m=null),v(e,!0,-1),u=e.input.charCodeAt(e.position)),e.lineIndent>t&&0!==u)h(e,"bad indentation of a mapping entry");else if(e.lineIndent<t)break}return g&&y(e,p,f,d,null),x&&(e.tag=c,e.anchor=l,e.kind="mapping",e.result=p),x}function E(e){var t,n,i,o,a=!1,s=!1;if(o=e.input.charCodeAt(e.position),33!==o)return!1;if(null!==e.tag&&h(e,"duplication of a tag property"),o=e.input.charCodeAt(++e.position),60===o?(a=!0,o=e.input.charCodeAt(++e.position)):33===o?(s=!0,n="!!",o=e.input.charCodeAt(++e.position)):n="!",t=e.position,a){do o=e.input.charCodeAt(++e.position);while(0!==o&&62!==o);e.position<e.length?(i=e.input.slice(t,e.position),o=e.input.charCodeAt(++e.position)):h(e,"unexpected end of the stream within a verbatim tag")}else{for(;0!==o&&!r(o);)33===o&&(s?h(e,"tag suffix cannot contain exclamation marks"):(n=e.input.slice(t-1,e.position+1),tt.test(n)||h(e,"named tag handle cannot contain such characters"),s=!0,t=e.position+1)),o=e.input.charCodeAt(++e.position);i=e.input.slice(t,e.position),et.test(i)&&h(e,"tag suffix cannot contain flow indicator characters")}return i&&!nt.test(i)&&h(e,"tag name cannot contain such characters: "+i),a?e.tag=i:R.call(e.tagMap,n)?e.tag=e.tagMap[n]+i:"!"===n?e.tag="!"+i:"!!"===n?e.tag="tag:yaml.org,2002:"+i:h(e,'undeclared tag handle "'+n+'"'),!0}function F(e){var t,n;if(n=e.input.charCodeAt(e.position),38!==n)return!1;for(null!==e.anchor&&h(e,"duplication of an anchor property"),n=e.input.charCodeAt(++e.position),t=e.position;0!==n&&!r(n)&&!o(n);)n=e.input.charCodeAt(++e.position);return e.position===t&&h(e,"name of an anchor node must contain at least one character"),e.anchor=e.input.slice(t,e.position),!0}function N(e){{var t,n,i;e.length,e.input}if(i=e.input.charCodeAt(e.position),42!==i)return!1;for(i=e.input.charCodeAt(++e.position),t=e.position;0!==i&&!r(i)&&!o(i);)i=e.input.charCodeAt(++e.position);return e.position===t&&h(e,"name of an alias node must contain at least one character"),n=e.input.slice(t,e.position),e.anchorMap.hasOwnProperty(n)||h(e,'unidentified alias "'+n+'"'),e.result=e.anchorMap[n],v(e,!0,-1),!0}function T(e,t,n,i,r){var o,a,s,u,c,l,p,f,m=1,g=!1,y=!1;if(e.tag=null,e.anchor=null,e.kind=null,e.result=null,o=a=s=W===n||V===n,i&&v(e,!0,-1)&&(g=!0,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)),1===m)for(;E(e)||F(e);)v(e,!0,-1)?(g=!0,s=o,e.lineIndent>t?m=1:e.lineIndent===t?m=0:e.lineIndent<t&&(m=-1)):s=!1;if(s&&(s=g||r),(1===m||W===n)&&(p=H===n||G===n?t:t+1,f=e.position-e.lineStart,1===m?s&&(S(e,f)||O(e,f,p))||j(e,p)?y=!0:(a&&I(e,p)||C(e,p)||k(e,p)?y=!0:N(e)?(y=!0,(null!==e.tag||null!==e.anchor)&&h(e,"alias node should not have any properties")):w(e,p,H===n)&&(y=!0,null===e.tag&&(e.tag="?")),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):0===m&&(y=s&&S(e,f))),null!==e.tag&&"!"!==e.tag)if("?"===e.tag){for(u=0,c=e.implicitTypes.length;c>u;u+=1)if(l=e.implicitTypes[u],l.resolve(e.result)){e.result=l.construct(e.result),e.tag=l.tag,null!==e.anchor&&(e.anchorMap[e.anchor]=e.result);break}}else R.call(e.typeMap,e.tag)?(l=e.typeMap[e.tag],null!==e.result&&l.kind!==e.kind&&h(e,"unacceptable node kind for !<"+e.tag+'> tag; it should be "'+l.kind+'", not "'+e.kind+'"'),l.resolve(e.result)?(e.result=l.construct(e.result),null!==e.anchor&&(e.anchorMap[e.anchor]=e.result)):h(e,"cannot resolve a node with !<"+e.tag+"> explicit tag")):d(e,"unknown tag !<"+e.tag+">");return null!==e.tag||null!==e.anchor||y}function _(e){var t,o,a,s,u=e.position,c=!1;for(e.version=null,e.checkLineBreaks=e.legacy,e.tagMap={},e.anchorMap={};0!==(s=e.input.charCodeAt(e.position))&&(v(e,!0,-1),s=e.input.charCodeAt(e.position),!(e.lineIndent>0||37!==s));){for(c=!0,s=e.input.charCodeAt(++e.position),t=e.position;0!==s&&!r(s);)s=e.input.charCodeAt(++e.position);for(o=e.input.slice(t,e.position),a=[],o.length<1&&h(e,"directive name must not be less than one character in length");0!==s;){for(;i(s);)s=e.input.charCodeAt(++e.position);if(35===s){do s=e.input.charCodeAt(++e.position);while(0!==s&&!n(s));break}if(n(s))break;for(t=e.position;0!==s&&!r(s);)s=e.input.charCodeAt(++e.position);a.push(e.input.slice(t,e.position))}0!==s&&x(e),R.call(at,o)?at[o](e,o,a):d(e,'unknown document directive "'+o+'"')}return v(e,!0,-1),0===e.lineIndent&&45===e.input.charCodeAt(e.position)&&45===e.input.charCodeAt(e.position+1)&&45===e.input.charCodeAt(e.position+2)?(e.position+=3,v(e,!0,-1)):c&&h(e,"directives end mark is expected"),T(e,e.lineIndent-1,W,!1,!0),v(e,!0,-1),e.checkLineBreaks&&X.test(e.input.slice(u,e.position))&&d(e,"non-ASCII line breaks are interpreted as content"),e.documents.push(e.result),e.position===e.lineStart&&A(e)?void(46===e.input.charCodeAt(e.position)&&(e.position+=3,v(e,!0,-1))):void(e.position<e.length-1&&h(e,"end of the stream or a document separator is expected"))}function M(e,t){e=String(e),t=t||{},0!==e.length&&(10!==e.charCodeAt(e.length-1)&&13!==e.charCodeAt(e.length-1)&&(e+="\n"),65279===e.charCodeAt(0)&&(e=e.slice(1)));var n=new p(e,t);for(Q.test(n.input)&&h(n,"the stream contains non-printable characters"),n.input+="\x00";32===n.input.charCodeAt(n.position);)n.lineIndent+=1,n.position+=1;for(;n.position<n.length-1;)_(n);return n.documents}function L(e,t,n){var i,r,o=M(e,n);for(i=0,r=o.length;r>i;i+=1)t(o[i])}function D(e,t){var n=M(e,t);if(0===n.length)return void 0;if(1===n.length)return n[0];throw new P("expected a single document in the stream, but found more")}function U(e,t,n){L(e,t,q.extend({schema:B},n))}function Y(e,t){return D(e,q.extend({schema:B},t))}for(var q=e("./common"),P=e("./exception"),$=e("./mark"),B=e("./schema/default_safe"),K=e("./schema/default_full"),R=Object.prototype.hasOwnProperty,H=1,G=2,V=3,W=4,Z=1,J=2,z=3,Q=/[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x84\x86-\x9F\uFFFE\uFFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,X=/[\x85\u2028\u2029]/,et=/[,\[\]\{\}]/,tt=/^(?:!|!!|![a-z\-]+!)$/i,nt=/^(?:!|[^,\[\]\{\}])(?:%[0-9a-f]{2}|[0-9a-z\-#;\/\?:@&=\+\$,_\.!~\*'\(\)\[\]])*$/i,it=new Array(256),rt=new Array(256),ot=0;256>ot;ot++)it[ot]=c(ot)?1:0,rt[ot]=c(ot);var at={YAML:function(e,t,n){var i,r,o;null!==e.version&&h(e,"duplication of %YAML directive"),1!==n.length&&h(e,"YAML directive accepts exactly one argument"),i=/^([0-9]+)\.([0-9]+)$/.exec(n[0]),null===i&&h(e,"ill-formed argument of the YAML directive"),r=parseInt(i[1],10),o=parseInt(i[2],10),1!==r&&h(e,"unacceptable YAML version of the document"),e.version=n[0],e.checkLineBreaks=2>o,1!==o&&2!==o&&d(e,"unsupported YAML version of the document")},TAG:function(e,t,n){var i,r;2!==n.length&&h(e,"TAG directive accepts exactly two arguments"),i=n[0],r=n[1],tt.test(i)||h(e,"ill-formed tag handle (first argument) of the TAG directive"),R.call(e.tagMap,i)&&h(e,'there is a previously declared suffix for "'+i+'" tag handle'),nt.test(r)||h(e,"ill-formed tag prefix (second argument) of the TAG directive"),e.tagMap[i]=r}};t.exports.loadAll=L,t.exports.load=D,t.exports.safeLoadAll=U,t.exports.safeLoad=Y},{"./common":2,"./exception":4,"./mark":6,"./schema/default_full":9,"./schema/default_safe":10}],6:[function(e,t){"use strict";function n(e,t,n,i,r){this.name=e,this.buffer=t,this.position=n,this.line=i,this.column=r}var i=e("./common");n.prototype.getSnippet=function(e,t){var n,r,o,a,s;if(!this.buffer)return null;for(e=e||4,t=t||75,n="",r=this.position;r>0&&-1==="\x00\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(r-1));)if(r-=1,this.position-r>t/2-1){n=" ... ",r+=5;break}for(o="",a=this.position;a<this.buffer.length&&-1==="\x00\r\n\x85\u2028\u2029".indexOf(this.buffer.charAt(a));)if(a+=1,a-this.position>t/2-1){o=" ... ",a-=5;break}return s=this.buffer.slice(r,a),i.repeat(" ",e)+n+s+o+"\n"+i.repeat(" ",e+this.position-r+n.length)+"^"},n.prototype.toString=function(e){var t,n="";return this.name&&(n+='in "'+this.name+'" '),n+="at line "+(this.line+1)+", column "+(this.column+1),e||(t=this.getSnippet(),t&&(n+=":\n"+t)),n},t.exports=n},{"./common":2}],7:[function(e,t){"use strict";function n(e,t,i){var r=[];return e.include.forEach(function(e){i=n(e,t,i)}),e[t].forEach(function(e){i.forEach(function(t,n){t.tag===e.tag&&r.push(n)}),i.push(e)}),i.filter(function(e,t){return-1===r.indexOf(t)})}function i(){function e(e){i[e.tag]=e}var t,n,i={};for(t=0,n=arguments.length;n>t;t+=1)arguments[t].forEach(e);return i}function r(e){this.include=e.include||[],this.implicit=e.implicit||[],this.explicit=e.explicit||[],this.implicit.forEach(function(e){if(e.loadKind&&"scalar"!==e.loadKind)throw new a("There is a non-scalar type in the implicit list of a schema. Implicit resolving of such types is not supported.")}),this.compiledImplicit=n(this,"implicit",[]),this.compiledExplicit=n(this,"explicit",[]),this.compiledTypeMap=i(this.compiledImplicit,this.compiledExplicit)}var o=e("./common"),a=e("./exception"),s=e("./type");r.DEFAULT=null,r.create=function(){var e,t;switch(arguments.length){case 1:e=r.DEFAULT,t=arguments[0];break;case 2:e=arguments[0],t=arguments[1];break;default:throw new a("Wrong number of arguments for Schema.create function")}if(e=o.toArray(e),t=o.toArray(t),!e.every(function(e){return e instanceof r}))throw new a("Specified list of super schemas (or a single Schema object) contains a non-Schema object.");if(!t.every(function(e){return e instanceof s}))throw new a("Specified list of YAML types (or a single Type object) contains a non-Type object.");return new r({include:e,explicit:t})},t.exports=r},{"./common":2,"./exception":4,"./type":13}],8:[function(e,t){"use strict";var n=e("../schema");t.exports=new n({include:[e("./json")]})},{"../schema":7,"./json":12}],9:[function(e,t){"use strict";var n=e("../schema");t.exports=n.DEFAULT=new n({include:[e("./default_safe")],explicit:[e("../type/js/undefined"),e("../type/js/regexp"),e("../type/js/function")]})},{"../schema":7,"../type/js/function":18,"../type/js/regexp":19,"../type/js/undefined":20,"./default_safe":10}],10:[function(e,t){"use strict";var n=e("../schema");t.exports=new n({include:[e("./core")],implicit:[e("../type/timestamp"),e("../type/merge")],explicit:[e("../type/binary"),e("../type/omap"),e("../type/pairs"),e("../type/set")]})},{"../schema":7,"../type/binary":14,"../type/merge":22,"../type/omap":24,"../type/pairs":25,"../type/set":27,"../type/timestamp":29,"./core":8}],11:[function(e,t){"use strict";var n=e("../schema");t.exports=new n({explicit:[e("../type/str"),e("../type/seq"),e("../type/map")]})},{"../schema":7,"../type/map":21,"../type/seq":26,"../type/str":28}],12:[function(e,t){"use strict";var n=e("../schema");t.exports=new n({include:[e("./failsafe")],implicit:[e("../type/null"),e("../type/bool"),e("../type/int"),e("../type/float")]})},{"../schema":7,"../type/bool":15,"../type/float":16,"../type/int":17,"../type/null":23,"./failsafe":11}],13:[function(e,t){"use strict";function n(e){var t={};return null!==e&&Object.keys(e).forEach(function(n){e[n].forEach(function(e){t[String(e)]=n})}),t}function i(e,t){if(t=t||{},Object.keys(t).forEach(function(t){if(-1===o.indexOf(t))throw new r('Unknown option "'+t+'" is met in definition of "'+e+'" YAML type.')}),this.tag=e,this.kind=t.kind||null,this.resolve=t.resolve||function(){return!0},this.construct=t.construct||function(e){return e},this.instanceOf=t.instanceOf||null,this.predicate=t.predicate||null,this.represent=t.represent||null,this.defaultStyle=t.defaultStyle||null,this.styleAliases=n(t.styleAliases||null),-1===a.indexOf(this.kind))throw new r('Unknown kind "'+this.kind+'" is specified for "'+e+'" YAML type.')}var r=e("./exception"),o=["kind","resolve","construct","instanceOf","predicate","represent","defaultStyle","styleAliases"],a=["scalar","sequence","mapping"];t.exports=i},{"./exception":4}],14:[function(e,t){"use strict";function n(e){if(null===e)return!1;var t,n,i=0,r=e.length,o=u;for(n=0;r>n;n++)if(t=o.indexOf(e.charAt(n)),!(t>64)){if(0>t)return!1;i+=6}return i%8===0}function i(e){var t,n,i=e.replace(/[\r\n=]/g,""),r=i.length,o=u,s=0,c=[];for(t=0;r>t;t++)t%4===0&&t&&(c.push(s>>16&255),c.push(s>>8&255),c.push(255&s)),s=s<<6|o.indexOf(i.charAt(t));return n=r%4*6,0===n?(c.push(s>>16&255),c.push(s>>8&255),c.push(255&s)):18===n?(c.push(s>>10&255),c.push(s>>2&255)):12===n&&c.push(s>>4&255),a?new a(c):c}function r(e){var t,n,i="",r=0,o=e.length,a=u;for(t=0;o>t;t++)t%3===0&&t&&(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]),r=(r<<8)+e[t];return n=o%3,0===n?(i+=a[r>>18&63],i+=a[r>>12&63],i+=a[r>>6&63],i+=a[63&r]):2===n?(i+=a[r>>10&63],i+=a[r>>4&63],i+=a[r<<2&63],i+=a[64]):1===n&&(i+=a[r>>2&63],i+=a[r<<4&63],i+=a[64],i+=a[64]),i}function o(e){return a&&a.isBuffer(e)}var a=e("buffer").Buffer,s=e("../type"),u="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=\n\r";t.exports=new s("tag:yaml.org,2002:binary",{kind:"scalar",resolve:n,construct:i,predicate:o,represent:r})},{"../type":13,buffer:30}],15:[function(e,t){"use strict";function n(e){if(null===e)return!1;var t=e.length;return 4===t&&("true"===e||"True"===e||"TRUE"===e)||5===t&&("false"===e||"False"===e||"FALSE"===e)}function i(e){return"true"===e||"True"===e||"TRUE"===e}function r(e){return"[object Boolean]"===Object.prototype.toString.call(e)}var o=e("../type");t.exports=new o("tag:yaml.org,2002:bool",{kind:"scalar",resolve:n,construct:i,predicate:r,represent:{lowercase:function(e){return e?"true":"false"},uppercase:function(e){return e?"TRUE":"FALSE"},camelcase:function(e){return e?"True":"False"}},defaultStyle:"lowercase"})},{"../type":13}],16:[function(e,t){"use strict";function n(e){if(null===e)return!1;return u.test(e)?!0:!1}function i(e){var t,n,i,r;return t=e.replace(/_/g,"").toLowerCase(),n="-"===t[0]?-1:1,r=[],0<="+-".indexOf(t[0])&&(t=t.slice(1)),".inf"===t?1===n?Number.POSITIVE_INFINITY:Number.NEGATIVE_INFINITY:".nan"===t?0/0:0<=t.indexOf(":")?(t.split(":").forEach(function(e){r.unshift(parseFloat(e,10))
}),t=0,i=1,r.forEach(function(e){t+=e*i,i*=60}),n*t):n*parseFloat(t,10)}function r(e,t){if(isNaN(e))switch(t){case"lowercase":return".nan";case"uppercase":return".NAN";case"camelcase":return".NaN"}else if(Number.POSITIVE_INFINITY===e)switch(t){case"lowercase":return".inf";case"uppercase":return".INF";case"camelcase":return".Inf"}else if(Number.NEGATIVE_INFINITY===e)switch(t){case"lowercase":return"-.inf";case"uppercase":return"-.INF";case"camelcase":return"-.Inf"}else if(a.isNegativeZero(e))return"-0.0";return e.toString(10)}function o(e){return"[object Number]"===Object.prototype.toString.call(e)&&(0!==e%1||a.isNegativeZero(e))}var a=e("../common"),s=e("../type"),u=new RegExp("^(?:[-+]?(?:[0-9][0-9_]*)\\.[0-9_]*(?:[eE][-+][0-9]+)?|\\.[0-9_]+(?:[eE][-+][0-9]+)?|[-+]?[0-9][0-9_]*(?::[0-5]?[0-9])+\\.[0-9_]*|[-+]?\\.(?:inf|Inf|INF)|\\.(?:nan|NaN|NAN))$");t.exports=new s("tag:yaml.org,2002:float",{kind:"scalar",resolve:n,construct:i,predicate:o,represent:r,defaultStyle:"lowercase"})},{"../common":2,"../type":13}],17:[function(e,t){"use strict";function n(e){return e>=48&&57>=e||e>=65&&70>=e||e>=97&&102>=e}function i(e){return e>=48&&55>=e}function r(e){return e>=48&&57>=e}function o(e){if(null===e)return!1;var t,o=e.length,a=0,s=!1;if(!o)return!1;if(t=e[a],("-"===t||"+"===t)&&(t=e[++a]),"0"===t){if(a+1===o)return!0;if(t=e[++a],"b"===t){for(a++;o>a;a++)if(t=e[a],"_"!==t){if("0"!==t&&"1"!==t)return!1;s=!0}return s}if("x"===t){for(a++;o>a;a++)if(t=e[a],"_"!==t){if(!n(e.charCodeAt(a)))return!1;s=!0}return s}for(;o>a;a++)if(t=e[a],"_"!==t){if(!i(e.charCodeAt(a)))return!1;s=!0}return s}for(;o>a;a++)if(t=e[a],"_"!==t){if(":"===t)break;if(!r(e.charCodeAt(a)))return!1;s=!0}return s?":"!==t?!0:/^(:[0-5]?[0-9])+$/.test(e.slice(a)):!1}function a(e){var t,n,i=e,r=1,o=[];return-1!==i.indexOf("_")&&(i=i.replace(/_/g,"")),t=i[0],("-"===t||"+"===t)&&("-"===t&&(r=-1),i=i.slice(1),t=i[0]),"0"===i?0:"0"===t?"b"===i[1]?r*parseInt(i.slice(2),2):"x"===i[1]?r*parseInt(i,16):r*parseInt(i,8):-1!==i.indexOf(":")?(i.split(":").forEach(function(e){o.unshift(parseInt(e,10))}),i=0,n=1,o.forEach(function(e){i+=e*n,n*=60}),r*i):r*parseInt(i,10)}function s(e){return"[object Number]"===Object.prototype.toString.call(e)&&0===e%1&&!u.isNegativeZero(e)}var u=e("../common"),c=e("../type");t.exports=new c("tag:yaml.org,2002:int",{kind:"scalar",resolve:o,construct:a,predicate:s,represent:{binary:function(e){return"0b"+e.toString(2)},octal:function(e){return"0"+e.toString(8)},decimal:function(e){return e.toString(10)},hexadecimal:function(e){return"0x"+e.toString(16).toUpperCase()}},defaultStyle:"decimal",styleAliases:{binary:[2,"bin"],octal:[8,"oct"],decimal:[10,"dec"],hexadecimal:[16,"hex"]}})},{"../common":2,"../type":13}],18:[function(e,t){"use strict";function n(e){if(null===e)return!1;try{var t="("+e+")",n=a.parse(t,{range:!0});return"Program"!==n.type||1!==n.body.length||"ExpressionStatement"!==n.body[0].type||"FunctionExpression"!==n.body[0].expression.type?!1:!0}catch(i){return!1}}function i(e){var t,n="("+e+")",i=a.parse(n,{range:!0}),r=[];if("Program"!==i.type||1!==i.body.length||"ExpressionStatement"!==i.body[0].type||"FunctionExpression"!==i.body[0].expression.type)throw new Error("Failed to resolve function");return i.body[0].expression.params.forEach(function(e){r.push(e.name)}),t=i.body[0].expression.body.range,new Function(r,n.slice(t[0]+1,t[1]-1))}function r(e){return e.toString()}function o(e){return"[object Function]"===Object.prototype.toString.call(e)}var a;try{a=e("esprima")}catch(s){"undefined"!=typeof window&&(a=window.esprima)}var u=e("../../type");t.exports=new u("tag:yaml.org,2002:js/function",{kind:"scalar",resolve:n,construct:i,predicate:o,represent:r})},{"../../type":13,esprima:"esprima"}],19:[function(e,t){"use strict";function n(e){if(null===e)return!1;if(0===e.length)return!1;var t=e,n=/\/([gim]*)$/.exec(e),i="";if("/"===t[0]){if(n&&(i=n[1]),i.length>3)return!1;if("/"!==t[t.length-i.length-1])return!1;t=t.slice(1,t.length-i.length-1)}try{{new RegExp(t,i)}return!0}catch(r){return!1}}function i(e){var t=e,n=/\/([gim]*)$/.exec(e),i="";return"/"===t[0]&&(n&&(i=n[1]),t=t.slice(1,t.length-i.length-1)),new RegExp(t,i)}function r(e){var t="/"+e.source+"/";return e.global&&(t+="g"),e.multiline&&(t+="m"),e.ignoreCase&&(t+="i"),t}function o(e){return"[object RegExp]"===Object.prototype.toString.call(e)}var a=e("../../type");t.exports=new a("tag:yaml.org,2002:js/regexp",{kind:"scalar",resolve:n,construct:i,predicate:o,represent:r})},{"../../type":13}],20:[function(e,t){"use strict";function n(){return!0}function i(){return void 0}function r(){return""}function o(e){return"undefined"==typeof e}var a=e("../../type");t.exports=new a("tag:yaml.org,2002:js/undefined",{kind:"scalar",resolve:n,construct:i,predicate:o,represent:r})},{"../../type":13}],21:[function(e,t){"use strict";var n=e("../type");t.exports=new n("tag:yaml.org,2002:map",{kind:"mapping",construct:function(e){return null!==e?e:{}}})},{"../type":13}],22:[function(e,t){"use strict";function n(e){return"<<"===e||null===e}var i=e("../type");t.exports=new i("tag:yaml.org,2002:merge",{kind:"scalar",resolve:n})},{"../type":13}],23:[function(e,t){"use strict";function n(e){if(null===e)return!0;var t=e.length;return 1===t&&"~"===e||4===t&&("null"===e||"Null"===e||"NULL"===e)}function i(){return null}function r(e){return null===e}var o=e("../type");t.exports=new o("tag:yaml.org,2002:null",{kind:"scalar",resolve:n,construct:i,predicate:r,represent:{canonical:function(){return"~"},lowercase:function(){return"null"},uppercase:function(){return"NULL"},camelcase:function(){return"Null"}},defaultStyle:"lowercase"})},{"../type":13}],24:[function(e,t){"use strict";function n(e){if(null===e)return!0;var t,n,i,r,s,u=[],c=e;for(t=0,n=c.length;n>t;t+=1){if(i=c[t],s=!1,"[object Object]"!==a.call(i))return!1;for(r in i)if(o.call(i,r)){if(s)return!1;s=!0}if(!s)return!1;if(-1!==u.indexOf(r))return!1;u.push(r)}return!0}function i(e){return null!==e?e:[]}var r=e("../type"),o=Object.prototype.hasOwnProperty,a=Object.prototype.toString;t.exports=new r("tag:yaml.org,2002:omap",{kind:"sequence",resolve:n,construct:i})},{"../type":13}],25:[function(e,t){"use strict";function n(e){if(null===e)return!0;var t,n,i,r,a,s=e;for(a=new Array(s.length),t=0,n=s.length;n>t;t+=1){if(i=s[t],"[object Object]"!==o.call(i))return!1;if(r=Object.keys(i),1!==r.length)return!1;a[t]=[r[0],i[r[0]]]}return!0}function i(e){if(null===e)return[];var t,n,i,r,o,a=e;for(o=new Array(a.length),t=0,n=a.length;n>t;t+=1)i=a[t],r=Object.keys(i),o[t]=[r[0],i[r[0]]];return o}var r=e("../type"),o=Object.prototype.toString;t.exports=new r("tag:yaml.org,2002:pairs",{kind:"sequence",resolve:n,construct:i})},{"../type":13}],26:[function(e,t){"use strict";var n=e("../type");t.exports=new n("tag:yaml.org,2002:seq",{kind:"sequence",construct:function(e){return null!==e?e:[]}})},{"../type":13}],27:[function(e,t){"use strict";function n(e){if(null===e)return!0;var t,n=e;for(t in n)if(o.call(n,t)&&null!==n[t])return!1;return!0}function i(e){return null!==e?e:{}}var r=e("../type"),o=Object.prototype.hasOwnProperty;t.exports=new r("tag:yaml.org,2002:set",{kind:"mapping",resolve:n,construct:i})},{"../type":13}],28:[function(e,t){"use strict";var n=e("../type");t.exports=new n("tag:yaml.org,2002:str",{kind:"scalar",construct:function(e){return null!==e?e:""}})},{"../type":13}],29:[function(e,t){"use strict";function n(e){if(null===e)return!1;var t;return t=a.exec(e),null===t?!1:!0}function i(e){var t,n,i,r,o,s,u,c,l,p,f=0,h=null;if(t=a.exec(e),null===t)throw new Error("Date resolve error");if(n=+t[1],i=+t[2]-1,r=+t[3],!t[4])return new Date(Date.UTC(n,i,r));if(o=+t[4],s=+t[5],u=+t[6],t[7]){for(f=t[7].slice(0,3);f.length<3;)f+="0";f=+f}return t[9]&&(c=+t[10],l=+(t[11]||0),h=6e4*(60*c+l),"-"===t[9]&&(h=-h)),p=new Date(Date.UTC(n,i,r,o,s,u,f)),h&&p.setTime(p.getTime()-h),p}function r(e){return e.toISOString()}var o=e("../type"),a=new RegExp("^([0-9][0-9][0-9][0-9])-([0-9][0-9]?)-([0-9][0-9]?)(?:(?:[Tt]|[ \\t]+)([0-9][0-9]?):([0-9][0-9]):([0-9][0-9])(?:\\.([0-9]*))?(?:[ \\t]*(Z|([-+])([0-9][0-9]?)(?::([0-9][0-9]))?))?)?$");t.exports=new o("tag:yaml.org,2002:timestamp",{kind:"scalar",resolve:n,construct:i,instanceOf:Date,represent:r})},{"../type":13}],30:[function(){},{}],"/":[function(e,t){"use strict";var n=e("./lib/js-yaml.js");t.exports=n},{"./lib/js-yaml.js":1}]},{},[])("/")});
var Lorem;!function(){Lorem=function(){this.type=null,this.query=null,this.data=null},Lorem.IMAGE=1,Lorem.TEXT=2,Lorem.TYPE={PARAGRAPH:1,SENTENCE:2,WORD:3},Lorem.WORDS=["lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","ut","aliquam,","purus","sit","amet","luctus","venenatis,","lectus","magna","fringilla","urna,","porttitor","rhoncus","dolor","purus","non","enim","praesent","elementum","facilisis","leo,","vel","fringilla","est","ullamcorper","eget","nulla","facilisi","etiam","dignissim","diam","quis","enim","lobortis","scelerisque","fermentum","dui","faucibus","in","ornare","quam","viverra","orci","sagittis","eu","volutpat","odio","facilisis","mauris","sit","amet","massa","vitae","tortor","condimentum","lacinia","quis","vel","eros","donec","ac","odio","tempor","orci","dapibus","ultrices","in","iaculis","nunc","sed","augue","lacus,","viverra","vitae","congue","eu,","consequat","ac","felis","donec","et","odio","pellentesque","diam","volutpat","commodo","sed","egestas","egestas","fringilla","phasellus","faucibus","scelerisque","eleifend","donec","pretium","vulputate","sapien","nec","sagittis","aliquam","malesuada","bibendum","arcu","vitae","elementum","curabitur","vitae","nunc","sed","velit","dignissim","sodales","ut","eu","sem","integer","vitae","justo","eget","magna","fermentum","iaculis","eu","non","diam","phasellus","vestibulum","lorem","sed","risus","ultricies","tristique","nulla","aliquet","enim","tortor,","at","auctor","urna","nunc","id","cursus","metus","aliquam","eleifend","mi","in","nulla","posuere","sollicitudin","aliquam","ultrices","sagittis","orci,","a","scelerisque","purus","semper","eget","duis","at","tellus","at","urna","condimentum","mattis","pellentesque","id","nibh","tortor,","id","aliquet","lectus","proin","nibh","nisl,","condimentum","id","venenatis","a,","condimentum","vitae","sapien","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","sed","tempus,","urna","et","pharetra","pharetra,","massa","massa","ultricies","mi,","quis","hendrerit","dolor","magna","eget","est","lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","integer","eget","aliquet","nibh","praesent","tristique","magna","sit","amet","purus","gravida","quis","blandit","turpis","cursus","in","hac","habitasse","platea","dictumst","quisque","sagittis,","purus","sit","amet","volutpat","consequat,","mauris","nunc","congue","nisi,","vitae","suscipit","tellus","mauris","a","diam","maecenas","sed","enim","ut","sem","viverra","aliquet","eget","sit","amet","tellus","cras","adipiscing","enim","eu","turpis","egestas","pretium","aenean","pharetra,","magna","ac","placerat","vestibulum,","lectus","mauris","ultrices","eros,","in","cursus","turpis","massa","tincidunt","dui","ut","ornare","lectus","sit","amet","est","placerat","in","egestas","erat","imperdiet","sed","euismod","nisi","porta","lorem","mollis","aliquam","ut","porttitor","leo","a","diam","sollicitudin","tempor","id","eu","nisl","nunc","mi","ipsum,","faucibus","vitae","aliquet","nec,","ullamcorper","sit","amet","risus","nullam","eget","felis","eget","nunc","lobortis","mattis","aliquam","faucibus","purus","in","massa","tempor","nec","feugiat","nisl","pretium","fusce","id","velit","ut","tortor","pretium","viverra","suspendisse","potenti","nullam","ac","tortor","vitae","purus","faucibus","ornare","suspendisse","sed","nisi","lacus,","sed","viverra","tellus","in","hac","habitasse","platea","dictumst","vestibulum","rhoncus","est","pellentesque","elit","ullamcorper","dignissim","cras","tincidunt","lobortis","feugiat","vivamus","at","augue","eget","arcu","dictum","varius","duis","at","consectetur","lorem","donec","massa","sapien,","faucibus","et","molestie","ac,","feugiat","sed","lectus","vestibulum","mattis","ullamcorper","velit","sed","ullamcorper","morbi","tincidunt","ornare","massa,","eget","egestas","purus","viverra","accumsan","in","nisl","nisi,","scelerisque","eu","ultrices","vitae,","auctor","eu","augue","ut","lectus","arcu,","bibendum","at","varius","vel,","pharetra","vel","turpis","nunc","eget","lorem","dolor,","sed","viverra","ipsum","nunc","aliquet","bibendum","enim,","facilisis","gravida","neque","convallis","a","cras","semper","auctor","neque,","vitae","tempus","quam","pellentesque","nec","nam","aliquam","sem","et","tortor","consequat","id","porta","nibh","venenatis","cras","sed","felis","eget","velit","aliquet","sagittis","id","consectetur","purus","ut","faucibus","pulvinar","elementum","integer","enim","neque,","volutpat","ac","tincidunt","vitae,","semper","quis","lectus","nulla","at","volutpat","diam","ut","venenatis","tellus","in","metus","vulputate","eu","scelerisque","felis","imperdiet","proin","fermentum","leo","vel","orci","porta","non","pulvinar","neque","laoreet","suspendisse","interdum","consectetur","libero,","id","faucibus","nisl","tincidunt","eget","nullam","non","nisi","est,","sit","amet","facilisis","magna","etiam","tempor,","orci","eu","lobortis","elementum,","nibh","tellus","molestie","nunc,","non","blandit","massa","enim","nec","dui","nunc","mattis","enim","ut","tellus","elementum","sagittis","vitae","et","leo","duis","ut","diam","quam","nulla","porttitor","massa","id","neque","aliquam","vestibulum","morbi","blandit","cursus","risus,","at","ultrices","mi","tempus","imperdiet","nulla","malesuada","pellentesque","elit","eget","gravida","cum","sociis","natoque","penatibus","et","magnis","dis","parturient","montes,","nascetur","ridiculus","mus","mauris","vitae","ultricies","leo","integer","malesuada","nunc","vel","risus","commodo","viverra","maecenas","accumsan,","lacus","vel","facilisis","volutpat,","est","velit","egestas","dui,","id","ornare","arcu","odio","ut","sem","nulla","pharetra","diam","sit","amet","nisl","suscipit","adipiscing","bibendum","est","ultricies","integer","quis","auctor","elit","sed","vulputate","mi","sit","amet","mauris","commodo","quis","imperdiet","massa","tincidunt","nunc","pulvinar","sapien","et","ligula","ullamcorper","malesuada","proin","libero","nunc,","consequat","interdum","varius","sit","amet,","mattis","vulputate","enim","nulla","aliquet","porttitor","lacus,","luctus","accumsan","tortor","posuere","ac","ut","consequat","semper","viverra","nam","libero","justo,","laoreet","sit","amet","cursus","sit","amet,","dictum","sit","amet","justo","donec","enim","diam,","vulputate","ut","pharetra","sit","amet,","aliquam","id","diam","maecenas","ultricies","mi","eget","mauris","pharetra","et","ultrices","neque","ornare","aenean","euismod","elementum","nisi,","quis","eleifend","quam","adipiscing","vitae","proin","sagittis,","nisl","rhoncus","mattis","rhoncus,","urna","neque","viverra","justo,","nec","ultrices","dui","sapien","eget","mi","proin","sed","libero","enim,","sed","faucibus","turpis","in","eu","mi","bibendum","neque","egestas","congue","quisque","egestas","diam","in","arcu","cursus","euismod","quis","viverra","nibh","cras","pulvinar","mattis","nunc,","sed","blandit","libero","volutpat","sed","cras","ornare","arcu","dui","vivamus","arcu","felis,","bibendum","ut","tristique","et,","egestas","quis","ipsum","suspendisse","ultrices","gravida","dictum","fusce","ut","placerat","orci","nulla","pellentesque","dignissim","enim,","sit","amet","venenatis","urna","cursus","eget","nunc","scelerisque","viverra","mauris,","in","aliquam","sem","fringilla","ut","morbi","tincidunt","augue","interdum","velit","euismod","in","pellentesque","massa","placerat","duis","ultricies","lacus","sed","turpis","tincidunt","id","aliquet","risus","feugiat","in","ante","metus,","dictum","at","tempor","commodo,","ullamcorper","a","lacus","vestibulum","sed","arcu","non","odio","euismod","lacinia","at","quis","risus","sed","vulputate","odio","ut","enim","blandit","volutpat","maecenas","volutpat","blandit","aliquam","etiam","erat","velit,","scelerisque","in","dictum","non,","consectetur","a","erat","nam","at","lectus","urna","duis","convallis","convallis","tellus,","id","interdum","velit","laoreet","id","donec","ultrices","tincidunt","arcu,","non","sodales","neque","sodales","ut","etiam","sit","amet","nisl","purus,","in","mollis","nunc","sed","id","semper","risus","in","hendrerit","gravida","rutrum","quisque","non","tellus","orci,","ac","auctor","augue","mauris","augue","neque,","gravida","in","fermentum","et,","sollicitudin","ac","orci","phasellus","egestas","tellus","rutrum","tellus","pellentesque","eu","tincidunt","tortor","aliquam","nulla","facilisi","cras","fermentum,","odio","eu","feugiat","pretium,","nibh","ipsum","consequat","nisl,","vel","pretium","lectus","quam","id","leo","in","vitae","turpis","massa","sed","elementum","tempus","egestas","sed","sed","risus","pretium","quam","vulputate","dignissim","suspendisse","in","est","ante","in","nibh","mauris,","cursus","mattis","molestie","a,","iaculis","at","erat","pellentesque","adipiscing","commodo","elit,","at","imperdiet","dui","accumsan","sit","amet","nulla","facilisi","morbi","tempus","iaculis","urna,","id","volutpat","lacus","laoreet","non","curabitur","gravida","arcu","ac","tortor","dignissim","convallis","aenean","et","tortor","at","risus","viverra","adipiscing","at","in","tellus","integer","feugiat","scelerisque","varius","morbi","enim","nunc,","faucibus","a","pellentesque","sit","amet,","porttitor","eget","dolor","morbi","non","arcu","risus,","quis","varius","quam","quisque","id","diam","vel","quam","elementum","pulvinar","etiam","non","quam","lacus","suspendisse","faucibus","interdum","posuere","lorem","ipsum","dolor","sit","amet,","consectetur","adipiscing","elit","duis","tristique","sollicitudin","nibh","sit","amet","commodo","nulla","facilisi","nullam","vehicula","ipsum","a","arcu","cursus","vitae","congue","mauris","rhoncus","aenean","vel","elit","scelerisque","mauris","pellentesque","pulvinar","pellentesque","habitant","morbi","tristique","senectus","et","netus","et","malesuada","fames","ac","turpis","egestas","maecenas","pharetra","convallis","posuere","morbi","leo","urna,","molestie","at","elementum","eu,","facilisis","sed","odio","morbi","quis","commodo","odio","aenean","sed","adipiscing","diam","donec","adipiscing","tristique","risus","nec","feugiat","in","fermentum","posuere","urna","nec","tincidunt","praesent","semper","feugiat","nibh","sed","pulvinar","proin","gravida","hendrerit","lectus","a","molestie"],Lorem.prototype.randomInt=function(e,i){return Math.floor(Math.random()*(i-e+1))+e},Lorem.prototype.createText=function(e,i){switch(i){case Lorem.TYPE.PARAGRAPH:for(var t=new Array,s=0;e>s;s++){var u=this.randomInt(10,20),a=this.createText(u,Lorem.TYPE.SENTENCE);t.push("<p>"+a+"</p>")}return t.join("\n");case Lorem.TYPE.SENTENCE:for(var r=new Array,s=0;e>s;s++){var n=this.randomInt(5,10),l=this.createText(n,Lorem.TYPE.WORD).split(" ");l[0]=l[0].substr(0,1).toUpperCase()+l[0].substr(1);var m=l.join(" ");r.push(m)}return(r.join(". ")+".").replace(/(\.\,|\,\.)/g,".");case Lorem.TYPE.WORD:var o=this.randomInt(0,Lorem.WORDS.length-e-1);return Lorem.WORDS.slice(o,o+e).join(" ").replace(/\.|\,/g,"")}},Lorem.prototype.createLorem=function(e){var i,t=new Array;if(/\d+-\d+[psw]/.test(this.query)){var s=this.query.replace(/[a-z]/,"").split("-");i=Math.floor(Math.random()*parseInt(s[1]))+parseInt(s[0])}else i=parseInt(this.query);if(/\d+p/.test(this.query))var u=Lorem.TYPE.PARAGRAPH;else if(/\d+s/.test(this.query))var u=Lorem.TYPE.SENTENCE;else if(/\d+w/.test(this.query))var u=Lorem.TYPE.WORD;if(t.push(this.createText(i,u)),t=t.join(" "),e)if(this.type==Lorem.TEXT)e.innerHTML+=t;else if(this.type==Lorem.IMAGE){var a="",r=this.query.split(" ");"gray"==r[0]&&(a+="/g",r[0]=""),e.getAttribute("width")&&(a+="/"+e.getAttribute("width")),e.getAttribute("height")&&(a+="/"+e.getAttribute("height")),a+="/"+r.join(" ").replace(/(^\s+|\s+$)/,""),e.src="http://lorempixum.com"+a.replace(/\/\//,"/")}return null==e?t:void 0},"undefined"!=typeof jQuery&&!function(e){e.fn.lorem=function(){e(this).each(function(){var i=new Lorem;i.type=e(this).is("img")?Lorem.IMAGE:Lorem.TEXT,i.query=e(this).data("lorem"),i.createLorem(this)})},e(document).ready(function(){e("[data-lorem]").lorem()})}(jQuery)}();
define("lorem", (function (global) {
    return function () {
        var ret, fn;
        return ret || global.Lorem;
    };
}(this)));

!function(e){function n(){var e=arguments[0],t=n.cache;return t[e]&&t.hasOwnProperty(e)||(t[e]=n.parse(e)),n.format.call(null,t[e],arguments)}function t(e){return Object.prototype.toString.call(e).slice(8,-1).toLowerCase()}function r(e,n){return Array(n+1).join(e)}var s={not_string:/[^s]/,number:/[diefg]/,json:/[j]/,not_json:/[^j]/,text:/^[^\x25]+/,modulo:/^\x25{2}/,placeholder:/^\x25(?:([1-9]\d*)\$|\(([^\)]+)\))?(\+)?(0|'[^$])?(-)?(\d+)?(?:\.(\d+))?([b-gijosuxX])/,key:/^([a-z_][a-z_\d]*)/i,key_access:/^\.([a-z_][a-z_\d]*)/i,index_access:/^\[(\d+)\]/,sign:/^[\+\-]/};n.format=function(e,o){var a,i,l,c,f,p,u,g=1,d=e.length,h="",x=[],b=!0,y="";for(i=0;d>i;i++)if(h=t(e[i]),"string"===h)x[x.length]=e[i];else if("array"===h){if(c=e[i],c[2])for(a=o[g],l=0;l<c[2].length;l++){if(!a.hasOwnProperty(c[2][l]))throw new Error(n("[sprintf] property '%s' does not exist",c[2][l]));a=a[c[2][l]]}else a=c[1]?o[c[1]]:o[g++];if("function"==t(a)&&(a=a()),s.not_string.test(c[8])&&s.not_json.test(c[8])&&"number"!=t(a)&&isNaN(a))throw new TypeError(n("[sprintf] expecting number but found %s",t(a)));switch(s.number.test(c[8])&&(b=a>=0),c[8]){case"b":a=a.toString(2);break;case"c":a=String.fromCharCode(a);break;case"d":case"i":a=parseInt(a,10);break;case"j":a=JSON.stringify(a,null,c[6]?parseInt(c[6]):0);break;case"e":a=c[7]?a.toExponential(c[7]):a.toExponential();break;case"f":a=c[7]?parseFloat(a).toFixed(c[7]):parseFloat(a);break;case"g":a=c[7]?parseFloat(a).toPrecision(c[7]):parseFloat(a);break;case"o":a=a.toString(8);break;case"s":a=(a=String(a))&&c[7]?a.substring(0,c[7]):a;break;case"u":a>>>=0;break;case"x":a=a.toString(16);break;case"X":a=a.toString(16).toUpperCase()}s.json.test(c[8])?x[x.length]=a:(!s.number.test(c[8])||b&&!c[3]?y="":(y=b?"+":"-",a=a.toString().replace(s.sign,"")),p=c[4]?"0"===c[4]?"0":c[4].charAt(1):" ",u=c[6]-(y+a).length,f=c[6]&&u>0?r(p,u):"",x[x.length]=c[5]?y+a+f:"0"===p?y+f+a:f+y+a)}return x.join("")},n.cache={},n.parse=function(e){for(var n=e,t=[],r=[],o=0;n;){if(null!==(t=s.text.exec(n)))r[r.length]=t[0];else if(null!==(t=s.modulo.exec(n)))r[r.length]="%";else{if(null===(t=s.placeholder.exec(n)))throw new SyntaxError("[sprintf] unexpected placeholder");if(t[2]){o|=1;var a=[],i=t[2],l=[];if(null===(l=s.key.exec(i)))throw new SyntaxError("[sprintf] failed to parse named argument key");for(a[a.length]=l[1];""!==(i=i.substring(l[0].length));)if(null!==(l=s.key_access.exec(i)))a[a.length]=l[1];else{if(null===(l=s.index_access.exec(i)))throw new SyntaxError("[sprintf] failed to parse named argument key");a[a.length]=l[1]}t[2]=a}else o|=2;if(3===o)throw new Error("[sprintf] mixing positional and named placeholders is not (yet) supported");r[r.length]=t}n=n.substring(t[0].length)}return r};var o=function(e,t,r){return r=(t||[]).slice(0),r.splice(0,0,e),n.apply(null,r)};"undefined"!=typeof exports?(exports.sprintf=n,exports.vsprintf=o):(e.sprintf=n,e.vsprintf=o,"function"==typeof define&&define.amd&&define('sprintf-vendor',[],function(){return{sprintf:n,vsprintf:o}}))}("undefined"==typeof window?this:window);
define('sprintf',["sprintf-vendor"],function(n){return n.sprintf});
!function(e){"object"==typeof exports?module.exports=e(require("backbone")):"function"==typeof define&&define.amd?define('models/metadata/object',["backbone"],e):"undefined"!=typeof Backbone&&(window.MetadataObject=e(Backbone))}(function(e){var t=e.Model.extend({defaults:{string:"",original:""},to_s:function(){return this.attributes.string},raw:function(){return this.attributes.original},initialize:function(){}});return t});
!function(t){"object"==typeof exports?module.exports=t(require("underscore"),require("backbone"),require("sprintf")):"function"==typeof define&&define.amd?define('models/metadata/author',["underscore","backbone","sprintf","models/metadata/object"],t):"undefined"!=typeof _&&"undefined"!=typeof Backbone&&"undefined"!=typeof sprintf&&"undefined"!=typeof MetadataObject&&(window.MetadataAuthor=t(_,Backbone,sprintf,MetadataObject))}(function(t,i,e,a){var n=a.extend({defaults:{orignal:""},initialize:function(t){t||(t=this.defaults.orignal),this.attributes.original=t},to_s:function(i){var a="";return"string"==typeof this.attributes.original?a=this.attributes.original:"object"==typeof this.attributes.original&&(this.attributes.original instanceof Array?(a=i?e("%s %s",this.attributes.original[0].given,this.attributes.original[0].family):e("%s, %s",author[0].family,author[0].given),this.attributes.original.length>1&&(this.attributes.original.length>2&&(a+=", "+t.range(1,this.attributes.original.length-1).map(function(t){e("%s %s",this.attributes.original[t].given,this.attributes.original[t].family)}).join(",")),a+=e(", and %s %s",t.last(this.attributes.original).given,t.last(this.attributes.original).family))):a="family"in author&&"given"in this.attributes.original?i?e("%s %s",this.attributes.original.given,this.attributes.original.family):e("%s, %s",author.family,author.given):"Error Parsing Author"),a}});return n});
!function(n){"object"==typeof exports?module.exports=n():"function"==typeof define&&define.amd?define('writedown',[],n):window.Writedown=n()}(function(){function n(n,t){for(var e=0;e<n.length;e++)t(n[e])}function t(t,e){var r=[];return n(e,function(n){r.push(t(n))}),r}function e(t,e,r){return n(r,function(n){e=t(e,n)}),e}function r(n){for(var t=0;"#"==n.charAt(0);)n=n.slice(1),t++;return{type:0==t?"p":"h"+t,content:u(n)}}function u(n){function r(t){var e=n.indexOf(t);return-1==e?n.length:e}function u(t){var e=n.indexOf(t,1);if(-1==e)throw new Error("Mangler et "+t+"-tegn");var r=n.slice(t.length,e);return n=n.slice(e+t.length),r}function i(){var u=e(Math.min,n.length,t(r,["_","*","**","`","[","]","![","(",")"])),i=n.slice(0,u);return n=n.slice(u),i}for(var l=[];""!=n;)if("*"==n.charAt(0)&&"*"!=n.charAt(1))l.push(s(a(u("*"))));else if("_"==n.charAt(0)&&"_"!=n.charAt(1))l.push(s(a(u("_"))));else if("*"==n.charAt(0)&&"*"==n.charAt(1))l.push(s(f(u("**"))));else if("`"==n.charAt(0))l.push(s(h(u("`"))));else if("["==n.charAt(0)){var p=u("]"),v=u(")");l.push(s(c(p,v)))}else if("!"==n.charAt(0)&&"["==n.charAt(1)){var g=u("]").slice(1),A=u(")");l.push(s(o(A,g)))}else l.push(i());return l.join("")}function i(n,t,e){return{name:n,attributes:e,content:t}}function c(n,t){return i("a",[n],{href:t})}function o(n,t){return i("img",[],{src:n,alt:t})}function f(n){return i("strong",[n],{})}function a(n){return i("em",[n],{})}function h(n){return i("pre",[i("code",[n])])}function s(t){function e(n){var t=[];if(n)for(var e in n)t.push(" "+e+'="'+n[e]+'"');return t.join("")}function r(t){"string"==typeof t?u.push(t):t.content&&0!=t.content.length?(u.push("<"+t.name+e(t.attributes)+">"),n(t.content,r),u.push("</"+t.name+">")):u.push("<"+t.name+e(t.attributes)+"/>")}var u=[];return r(t),u.join("")}function l(n){for(var e=t(r,n.split("\n\n")),u="",c=0;c<e.length;c++)u+=s(i(e[c].type,e[c].content))+"\n";return 1==e.length?u.replace(/^\<p\>/,"").replace(/\<\/p\>\s+/,""):u}return{html:function(n){return l(n)}}});
!function(t){"object"==typeof exports?module.exports=t(require("backbone")):"function"==typeof define&&define.amd?define('models/metadata/title',["backbone","writedown","models/metadata/object"],t):"undefined"!=typeof Backbone&&"undefined"!=typeof MetadataObject&&(window.MetadataTitle=t(Backbone,Writedown,MetadataObject))}(function(t,e,i){var n=i.extend({initialize:function(t){t||(t=this.defaults.original),this.attributes.original=t,this.attributes.string="string"==typeof t?e.html(this.attributes.original):"Error Parsing Title"}});return n});
!function(t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define('citeproc/xmldom',[],t):"undefined"!=typeof _&&(window.CSL_CHROME=t())}(function(){if("undefined"==typeof t)var t;var e=["font-style","font-variant","font-weight","text-decoration","text-case"],n=function(){"undefined"==typeof DOMParser||t?(t=!0,DOMParser=function(){},DOMParser.prototype.parseFromString=function(t,e){if("undefined"!=typeof ActiveXObject){var n=new ActiveXObject("MSXML.DomDocument");return n.async=!1,n.loadXML(t),n}if("undefined"!=typeof XMLHttpRequest){var n=new XMLHttpRequest;return e||(e="text/xml"),n.open("GET","data:"+e+";charset=utf-8,"+encodeURIComponent(t),!1),n.overrideMimeType&&n.overrideMimeType(e),n.send(null),n.responseXML}},this.hasAttributes=function(t){var e;return e=t.attributes&&t.attributes.length?!0:!1}):this.hasAttributes=function(t){var e;return e=t.attributes&&t.attributes.length?!0:!1},this.importNode=function(t,e){if("undefined"==typeof t.importNode)var n=this._importNode(t,e,!0);else var n=t.importNode(e,!0);return n},this._importNode=function(t,e,n){switch(e.nodeType){case 1:var r=t.createElement(e.nodeName);if(e.attributes&&e.attributes.length>0)for(var i=0,o=e.attributes.length;o>i;)r.setAttribute(e.attributes[i].nodeName,e.getAttribute(e.attributes[i++].nodeName));if(n&&e.childNodes&&e.childNodes.length>0)for(var i=0,o=e.childNodes.length;o>i;)r.appendChild(this._importNode(t,e.childNodes[i++],n));return r;case 3:case 4:case 8:}},this.parser=new DOMParser;var e='<docco><institution institution-parts="long" delimiter=", " substitute-use-first="1" use-last="1"><institution-part name="long"/></institution></docco>',n=this.parser.parseFromString(e,"text/xml"),r=n.getElementsByTagName("institution");this.institution=r.item(0);var i=n.getElementsByTagName("institution-part");this.institutionpart=i.item(0),this.ns="http://purl.org/net/xbiblio/csl"};return n.prototype.clean=function(t){return t=t.replace(/<\?[^?]+\?>/g,""),t=t.replace(/<![^>]+>/g,""),t=t.replace(/^\s+/,""),t=t.replace(/\s+$/,""),t=t.replace(/^\n*/,"")},n.prototype.getStyleId=function(t){var e="",n=t.getElementsByTagName("id");return n&&n.length&&(n=n.item(0)),n&&(e=n.textContent),e||(e=n.innerText),e||(e=n.innerHTML),e},n.prototype.children=function(t){var e,n,r,i;if(t){for(i=[],e=t.childNodes,n=0,r=e.length;r>n;n+=1)"#text"!=e[n].nodeName&&i.push(e[n]);return i}return[]},n.prototype.nodename=function(t){var e=t.nodeName;return e},n.prototype.attributes=function(t){var e,n,r,i,o;if(e=new Object,t&&this.hasAttributes(t))for(n=t.attributes,i=0,o=n.length;o>i;i+=1)r=n[i],e["@"+r.name]=r.value;return e},n.prototype.content=function(t){var e;return e="undefined"!=typeof t.textContent?t.textContent:"undefined"!=typeof t.innerText?t.innerText:t.txt},n.prototype.namespace={xml:"http://www.w3.org/XML/1998/namespace"},n.prototype.numberofnodes=function(t){return t?t.length:0},n.prototype.getAttributeName=function(t){var e=t.name;return e},n.prototype.getAttributeValue=function(t,e,n){var r="";return n&&(e=n+":"+e),t&&this.hasAttributes(t)&&t.getAttribute(e)&&(r=t.getAttribute(e)),r},n.prototype.getNodeValue=function(t,e){var n="";if(e){var r=t.getElementsByTagName(e);r.length>0&&(n="undefined"!=typeof r[0].textContent?r[0].textContent:"undefined"!=typeof r[0].innerText?r[0].innerText:r[0].text)}else n=t;return n&&n.childNodes&&(0==n.childNodes.length||1==n.childNodes.length&&"#text"==n.firstChild.nodeName)&&(n="undefined"!=typeof n.textContent?n.textContent:"undefined"!=typeof n.innerText?n.innerText:n.text),n},n.prototype.setAttributeOnNodeIdentifiedByNameAttribute=function(t,e,n,r,i){var o,a,s,u;for("@"===r.slice(0,1)&&(r=r.slice(1)),s=t.getElementsByTagName(e),o=0,a=s.length;a>o;o+=1)u=s[o],u.getAttribute("name")==n&&u.setAttribute(r,i)},n.prototype.deleteNodeByNameAttribute=function(t,e){var n,r,i,o;for(o=t.childNodes,n=0,r=o.length;r>n;n+=1)i=o[n],i&&i.nodeType!=i.TEXT_NODE&&this.hasAttributes(i)&&i.getAttribute("name")==e&&t.removeChild(o[n])},n.prototype.deleteAttribute=function(t,e){t.removeAttribute(e)},n.prototype.setAttribute=function(t,e,n){return t.ownerDocument||(t=t.firstChild),["function","unknown"].indexOf(typeof t.setAttribute)>-1&&t.setAttribute(e,n),!1},n.prototype.nodeCopy=function(t){var e=t.cloneNode(!0);return e},n.prototype.getNodesByName=function(t,e,n){var r,i,o,a,s;for(r=[],i=t.getElementsByTagName(e),a=0,s=i.length;s>a;a+=1)o=i.item(a),(!n||this.hasAttributes(o)&&o.getAttribute("name")==n)&&r.push(o);return r},n.prototype.nodeNameIs=function(t,e){return e==t.nodeName?!0:!1},n.prototype.makeXml=function(t){t||(t="<docco><bogus/></docco>"),t=t.replace(/\s*<\?[^>]*\?>\s*\n*/g,"");var e=this.parser.parseFromString(t,"application/xml");return e.firstChild},n.prototype.insertChildNodeAfter=function(t,e,n,r){var i;return i=this.importNode(e.ownerDocument,r),t.replaceChild(i,e),t},n.prototype.insertPublisherAndPlace=function(t){for(var e=t.getElementsByTagName("group"),n=0,r=e.length;r>n;n+=1){for(var i=e.item(n),o=[],a=0,s=i.childNodes.length;s>a;a+=1)1!==i.childNodes.item(a).nodeType&&o.push(a);if(i.childNodes.length-o.length===2){for(var u=[],a=0,s=2;s>a;a+=1)if(!(o.indexOf(a)>-1)){for(var d=i.childNodes.item(a),p=[],l=0,f=d.childNodes.length;f>l;l+=1)1!==d.childNodes.item(l).nodeType&&p.push(l);if(d.childNodes.length-p.length===0&&(u.push(d.getAttribute("variable")),d.getAttribute("suffix")||d.getAttribute("prefix"))){u=[];break}}u.indexOf("publisher")>-1&&u.indexOf("publisher-place")>-1&&i.setAttribute("has-publisher-and-publisher-place",!0)}}},n.prototype.addMissingNameNodes=function(t){for(var e=t.getElementsByTagName("names"),n=0,r=e.length;r>n;n+=1){var i=e.item(n),o=i.getElementsByTagName("name");if((!o||0===o.length)&&"substitute"!==i.parentNode.tagName.toLowerCase()){var a=i.ownerDocument,s=a.createElement("name");i.appendChild(s)}}},n.prototype.addInstitutionNodes=function(t){var n,r,i,o,a,s,u,d;for(n=t.getElementsByTagName("names"),u=0,d=n.length;d>u;u+=1)if(r=n.item(u),a=r.getElementsByTagName("name"),0!=a.length&&(i=r.getElementsByTagName("institution"),0==i.length)){o=this.importNode(t.ownerDocument,this.institution),theinstitutionpart=o.getElementsByTagName("institution-part").item(0),s=a.item(0),r.insertBefore(o,s.nextSibling);for(var p=0,l=e.length;l>p;p+=1){var f=e[p],m=s.getAttribute(f);m&&theinstitutionpart.setAttribute(f,m)}for(var c=s.getElementsByTagName("name-part"),p=0,l=c.length;l>p;p+=1)if("family"===c[p].getAttribute("name"))for(var h=0,g=e.length;g>h;h+=1){var f=e[h],m=c[p].getAttribute(f);m&&theinstitutionpart.setAttribute(f,m)}}},n.prototype.flagDateMacros=function(t){var e,n,r,i;for(nodes=t.getElementsByTagName("macro"),e=0,n=nodes.length;n>e;e+=1)r=nodes.item(e),i=r.getElementsByTagName("date"),i.length&&r.setAttribute("macro-has-date","true")},n});
/*
 * Copyright (c) 2009, 2010 and 2011 Frank G. Bennett, Jr. All Rights
 * Reserved.
 *
 * The contents of this file are subject to the Common Public
 * Attribution License Version 1.0 (the “License”); you may not use
 * this file except in compliance with the License. You may obtain a
 * copy of the License at:
 *
 * http://bitbucket.org/fbennett/citeproc-js/src/tip/LICENSE.
 *
 * The License is based on the Mozilla Public License Version 1.1 but
 * Sections 14 and 15 have been added to cover use of software over a
 * computer network and provide for limited attribution for the
 * Original Developer. In addition, Exhibit A has been modified to be
 * consistent with Exhibit B.
 *
 * Software distributed under the License is distributed on an “AS IS”
 * basis, WITHOUT WARRANTY OF ANY KIND, either express or implied. See
 * the License for the specific language governing rights and limitations
 * under the License.
 *
 * The Original Code is the citation formatting software known as
 * "citeproc-js" (an implementation of the Citation Style Language
 * [CSL]), including the original test fixtures and software located
 * under the ./std subdirectory of the distribution archive.
 *
 * The Original Developer is not the Initial Developer and is
 * __________. If left blank, the Original Developer is the Initial
 * Developer.
 *
 * The Initial Developer of the Original Code is Frank G. Bennett,
 * Jr. All portions of the code written by Frank G. Bennett, Jr. are
 * Copyright (c) 2009, 2010 and 2011 Frank G. Bennett, Jr. All Rights Reserved.
 *
 * Alternatively, the contents of this file may be used under the
 * terms of the GNU Affero General Public License (the [AGPLv3]
 * License), in which case the provisions of [AGPLv3] License are
 * applicable instead of those above. If you wish to allow use of your
 * version of this file only under the terms of the [AGPLv3] License
 * and not to allow others to use your version of this file under the
 * CPAL, indicate your decision by deleting the provisions above and
 * replace them with the notice and other provisions required by the
 * [AGPLv3] License. If you do not delete the provisions above, a
 * recipient may use your version of this file under either the CPAL
 * or the [AGPLv3] License.”
 */
!function(t){"object"==typeof exports?module.exports=t(require("xmldom")):"function"==typeof define&&define.amd?define('citeproc/citeproc',["citeproc/xmldom"],t):"undefined"!=typeof _&&"undefined"!=typeof CSL_CHROME&&(window.CSL=t(CSL_CHROME))}(function(t){Array.indexOf||(Array.prototype.indexOf=function(t){var e,s;for(e=0,s=this.length;s>e;e+=1)if(this[e]===t)return e;return-1});var e={PROCESSOR_VERSION:"1.0.552",CONDITION_LEVEL_TOP:1,CONDITION_LEVEL_BOTTOM:2,PLAIN_HYPHEN_REGEX:/(?:[^\\]-|\u2013)/,LOCATOR_LABELS_REGEXP:new RegExp("^((art|ch|Ch|subch|col|fig|l|n|no|op|p|pp|para|subpara|pt|r|sec|subsec|Sec|sv|sch|tit|vrs|vol)\\.)\\s+(.*)"),STATUTE_SUBDIV_GROUPED_REGEX:/((?:^| )(?:art|ch|Ch|subch|p|pp|para|subpara|pt|r|sec|subsec|Sec|sch|tit)\.)/g,STATUTE_SUBDIV_PLAIN_REGEX:/(?:(?:^| )(?:art|ch|Ch|subch|p|pp|para|subpara|pt|r|sec|subsec|Sec|sch|tit)\.)/,STATUTE_SUBDIV_STRINGS:{"art.":"article","bk.":"book","ch.":"chapter","Ch.":"Chapter","subch.":"subchapter","p.":"page","pp.":"page","para.":"paragraph","subpara.":"subparagraph","pt.":"part","r.":"rule","sec.":"section","subsec.":"subsection","Sec.":"Section","sch.":"schedule","tit.":"title","col.":"column","fig.":"figure","fol.":"folio","l.":"line","n.":"note","no.":"issue","op.":"opus","sv.":"sub-verbo","vrs.":"verse","vol.":"volume"},STATUTE_SUBDIV_STRINGS_REVERSE:{article:"art.",book:"bk.",chapter:"ch.",Chapter:"Ch.",subchapter:"subch.",page:"p.",paragraph:"para.",subparagraph:"subpara.",part:"pt.",rule:"r.",section:"sec.",subsection:"subsec.",Section:"Sec.",schedule:"sch.",title:"tit.",column:"col.",figure:"fig.",folio:"fol.",line:"l.",note:"n.",issue:"no.",opus:"op.","sub-verbo":"sv.","sub verbo":"sv.",verse:"vrs.",volume:"vol."},LOCATOR_LABELS_MAP:{art:"article",bk:"book",ch:"chapter",Ch:"Chapter",subch:"subchapter",col:"column",fig:"figure",fol:"folio",l:"line",n:"note",no:"issue",op:"opus",p:"page",pp:"page",para:"paragraph",subpara:"subparagraph",pt:"part",r:"rule",sec:"section",subsec:"subsection",Sec:"Section",sv:"sub-verbo",sch:"schedule",tit:"title",vrs:"verse",vol:"volume"},NestedBraces:[["(","["],[")","]"]],checkNestedBraceOpen:new RegExp(".*\\("),checkNestedBraceClose:new RegExp(".*\\)"),LangPrefsMap:{title:"titles","title-short":"titles","container-title":"journals","collection-title":"journals",publisher:"publishers",authority:"publishers","publisher-place":"places","event-place":"places",number:"number",edition:"number",issue:"number",volume:"number"},AbbreviationSegments:function(){this["container-title"]={},this["collection-title"]={},this["institution-entire"]={},this["institution-part"]={},this.nickname={},this.number={},this.title={},this.place={},this.hereinafter={},this.classic={},this["container-phrase"]={},this["title-phrase"]={}},GENDERS:["masculine","feminine"],ERROR_NO_RENDERED_FORM:1,PREVIEW:"Just for laughs.",ASSUME_ALL_ITEMS_REGISTERED:2,START:0,END:1,SINGLETON:2,SEEN:6,SUCCESSOR:3,SUCCESSOR_OF_SUCCESSOR:4,SUPPRESS:5,SINGULAR:0,PLURAL:1,LITERAL:!0,BEFORE:1,AFTER:2,DESCENDING:1,ASCENDING:2,ONLY_FIRST:1,ALWAYS:2,ONLY_LAST:3,FINISH:1,POSITION_FIRST:0,POSITION_SUBSEQUENT:1,POSITION_IBID:2,POSITION_IBID_WITH_LOCATOR:3,MARK_TRAILING_NAMES:!0,POSITION_TEST_VARS:["position","first-reference-note-number","near-note"],AREAS:["citation","citation_sort","bibliography","bibliography_sort"],MULTI_FIELDS:["event","publisher","publisher-place","event-place","title","container-title","collection-title","authority","edition","genre","title-short","medium","jurisdiction","archive","archive-place"],CITE_FIELDS:["first-reference-note-number","locator","locator-revision"],MINIMAL_NAME_FIELDS:["literal","family"],SWAPPING_PUNCTUATION:[".","!","?",":",","],TERMINAL_PUNCTUATION:[":",".",";","!","?"," "],NONE:0,NUMERIC:1,POSITION:2,COLLAPSE_VALUES:["citation-number","year","year-suffix"],DATE_PARTS:["year","month","day"],DATE_PARTS_ALL:["year","month","day","season"],DATE_PARTS_INTERNAL:["year","month","day","year_end","month_end","day_end"],NAME_PARTS:["family","given","dropping-particle","non-dropping-particle","suffix","literal"],DECORABLE_NAME_PARTS:["given","family","suffix"],DISAMBIGUATE_OPTIONS:["disambiguate-add-names","disambiguate-add-givenname","disambiguate-add-year-suffix"],GIVENNAME_DISAMBIGUATION_RULES:["all-names","all-names-with-initials","primary-name","primary-name-with-initials","by-cite"],NAME_ATTRIBUTES:["and","delimiter-precedes-last","delimiter-precedes-et-al","initialize-with","initialize","name-as-sort-order","sort-separator","et-al-min","et-al-use-first","et-al-subsequent-min","et-al-subsequent-use-first","form","prefix","suffix","delimiter"],PARALLEL_MATCH_VARS:["container-title"],PARALLEL_TYPES:["bill","gazette","regulation","legislation","legal_case","treaty","article-magazine","article-journal"],PARALLEL_COLLAPSING_MID_VARSET:["volume","issue","container-title","section","collection-number"],LOOSE:0,STRICT:1,TOLERANT:2,PREFIX_PUNCTUATION:/[.;:]\s*$/,SUFFIX_PUNCTUATION:/^\s*[.;:,\(\)]/,NUMBER_REGEXP:/(?:^\d+|\d+$)/,NAME_INITIAL_REGEXP:/^([A-Z\u0590-\u05ff\u0080-\u017f\u0400-\u042f\u0600-\u06ff\u0370\u0372\u0376\u0386\u0388-\u03ab\u03e2\u03e4\u03e6\u03e8\u03ea\u03ec\u03ee\u03f4\u03f7\u03fd-\u03ff])([a-zA-Z\u0080-\u017f\u0400-\u052f\u0600-\u06ff\u0370-\u03ff\u1f00-\u1fff]*|)/,ROMANESQUE_REGEXP:/[-0-9a-zA-Z\u0590-\u05d4\u05d6-\u05ff\u0080-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]/,ROMANESQUE_NOT_REGEXP:/[^a-zA-Z\u0590-\u05ff\u0080-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]/g,STARTSWITH_ROMANESQUE_REGEXP:/^[&a-zA-Z\u0590-\u05d4\u05d6-\u05ff\u0080-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]/,ENDSWITH_ROMANESQUE_REGEXP:/[.;:&a-zA-Z\u0590-\u05d4\u05d6-\u05ff\u0080-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]$/,ALL_ROMANESQUE_REGEXP:/^[a-zA-Z\u0590-\u05ff\u0080-\u017f\u0400-\u052f\u0370-\u03ff\u1f00-\u1fff\u0600-\u06ff\u200c\u200d\u200e\u0218\u0219\u021a\u021b\u202a-\u202e]+$/,VIETNAMESE_SPECIALS:/[\u00c0-\u00c3\u00c8-\u00ca\u00cc\u00cd\u00d2-\u00d5\u00d9\u00da\u00dd\u00e0-\u00e3\u00e8-\u00ea\u00ec\u00ed\u00f2-\u00f5\u00f9\u00fa\u00fd\u0101\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01a0\u01a1\u01af\u01b0\u1ea0-\u1ef9]/,VIETNAMESE_NAMES:/^(?:(?:[.AaBbCcDdEeGgHhIiKkLlMmNnOoPpQqRrSsTtUuVvXxYy \u00c0-\u00c3\u00c8-\u00ca\u00cc\u00cd\u00d2-\u00d5\u00d9\u00da\u00dd\u00e0-\u00e3\u00e8-\u00ea\u00ec\u00ed\u00f2-\u00f5\u00f9\u00fa\u00fd\u0101\u0103\u0110\u0111\u0128\u0129\u0168\u0169\u01a0\u01a1\u01af\u01b0\u1ea0-\u1ef9]{2,6})(\s+|$))+$/,NOTE_FIELDS_REGEXP:/\{:(?:[\-_a-z]+|[A-Z]+):[^\}]+\}/g,NOTE_FIELD_REGEXP:/\{:([\-_a-z]+|[A-Z]+):\s*([^\}]+)\}/,DISPLAY_CLASSES:["block","left-margin","right-inline","indent"],NAME_VARIABLES:["author","editor","translator","contributor","collection-editor","composer","container-author","director","editorial-director","interviewer","original-author","recipient"],NUMERIC_VARIABLES:["call-number","chapter-number","collection-number","edition","page","issue","locator","number","number-of-pages","number-of-volumes","volume","citation-number"],DATE_VARIABLES:["locator-date","issued","event-date","accessed","container","original-date","publication-date","original-date","available-date","submitted"],TAG_ESCAPE:function(t){var e,s,i,r,a;for(e=t.match(/((?:\"|\')|(?:(?:<span\s+class=\"no(?:case|decor)\">).*?(?:<\/span>|<\/?(?:i|sc|b)>)))/g),s=t.split(/(?:(?:\"|\')|(?:(?:<span\s+class=\"no(?:case|decor)\">).*?(?:<\/span>|<\/?(?:i|sc|b)>)))/g),a=[s[0]],r=1,i=s.length;i>r;r+=1)a.push(e[r-1]),a.push(s[r]);return s=a.slice()},TAG_USEALL:function(t){var e,s,i,r;for(e=[""],s=t.indexOf("<"),i=t.indexOf(">");s>-1&&i>-1;)r=s>i?s+1:i+1,i>s&&-1===t.slice(s+1,i).indexOf("<")?(e[e.length-1]+=t.slice(0,s),e.push(t.slice(s,i+1)),e.push(""),t=t.slice(r)):(e[e.length-1]+=t.slice(0,i+1),t=t.slice(r)),s=t.indexOf("<"),i=t.indexOf(">");return e[e.length-1]+=t,e},SKIP_WORDS:["about","above","across","afore","after","against","along","alongside","amid","amidst","among","amongst","anenst","apropos","apud","around","as","aside","astride","at","athwart","atop","barring","before","behind","below","beneath","beside","besides","between","beyond","but","by","circa","despite","down","during","except","for","forenenst","from","given","in","inside","into","lest","like","modulo","near","next","notwithstanding","of","off","on","onto","out","over","per","plus","pro","qua","sans","since","than","through"," thru","throughout","thruout","till","to","toward","towards","under","underneath","until","unto","up","upon","versus","vs.","v.","vs","v","via","vis-\xe0-vis","with","within","without","according to","ahead of","apart from","as for","as of","as per","as regards","aside from","back to","because of","close to","due to","except for","far from","inside of","instead of","near to","next to","on to","out from","out of","outside of","prior to","pursuant to","rather than","regardless of","such as","that of","up to","where as","or","yet","so","for","and","nor","a","an","the","de","d'","von","van","c","et","ca"],FORMAT_KEY_SEQUENCE:["@strip-periods","@font-style","@font-variant","@font-weight","@text-decoration","@vertical-align","@quotes"],INSTITUTION_KEYS:["font-style","font-variant","font-weight","text-decoration","text-case"],SUFFIX_CHARS:"a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z",ROMAN_NUMERALS:[["","i","ii","iii","iv","v","vi","vii","viii","ix"],["","x","xx","xxx","xl","l","lx","lxx","lxxx","xc"],["","c","cc","ccc","cd","d","dc","dcc","dccc","cm"],["","m","mm","mmm","mmmm","mmmmm"]],CREATORS:["author","editor","contributor","translator","recipient","interviewer","composer","original-author","container-author","collection-editor"],LANGS:{"af-ZA":"Afrikaans","ar-AR":"Arabic","bg-BG":"Bulgarian","ca-AD":"Catalan","cs-CZ":"Czech","da-DK":"Danish","de-AT":"Austrian","de-CH":"German (CH)","de-DE":"German (DE)","el-GR":"Greek","en-GB":"English (GB)","en-US":"English (US)","es-ES":"Spanish","et-EE":"Estonian",eu:"European","fa-IR":"Persian","fi-FI":"Finnish","fr-CA":"French (CA)","fr-FR":"French (FR)","he-IL":"Hebrew","hr-HR":"Croatian","hu-HU":"Hungarian","is-IS":"Icelandic","it-IT":"Italian","ja-JP":"Japanese","km-KH":"Khmer","ko-KR":"Korean","lt-LT":"Lithuanian","lv-LV":"Latvian","mn-MN":"Mongolian","nb-NO":"Norwegian (Bokm\xe5l)","nl-NL":"Dutch","nn-NO":"Norwegian (Nynorsk)","pl-PL":"Polish","pt-BR":"Portuguese (BR)","pt-PT":"Portuguese (PT)","ro-RO":"Romanian","ru-RU":"Russian","sk-SK":"Slovak","sl-SI":"Slovenian","sr-RS":"Serbian","sv-SE":"Swedish","th-TH":"Thai","tr-TR":"Turkish","uk-UA":"Ukranian","vi-VN":"Vietnamese","zh-CN":"Chinese (CN)","zh-TW":"Chinese (TW)"},LANG_BASES:{af:"af_ZA",ar:"ar_AR",bg:"bg_BG",ca:"ca_AD",cs:"cs_CZ",da:"da_DK",de:"de_DE",el:"el_GR",en:"en_US",es:"es_ES",et:"et_EE",eu:"eu",fa:"fa_IR",fi:"fi_FI",fr:"fr_FR",he:"he_IL",hu:"hu_HU",is:"is_IS",it:"it_IT",ja:"ja_JP",km:"km_KH",ko:"ko_KR",lt:"lt_LT",mn:"mn_MN",nb:"nb_NO",nl:"nl_NL",nn:"nn-NO",pl:"pl_PL",pt:"pt_PT",ro:"ro_RO",ru:"ru_RU",sk:"sk_SK",sl:"sl_SI",sr:"sr_RS",sv:"sv_SE",th:"th_TH",tr:"tr_TR",uk:"uk_UA",vi:"vi_VN",zh:"zh_CN"},SUPERSCRIPTS:{"\xaa":"a","\xb2":"2","\xb3":"3","\xb9":"1","\xba":"o","\u02b0":"h","\u02b1":"\u0266","\u02b2":"j","\u02b3":"r","\u02b4":"\u0279","\u02b5":"\u027b","\u02b6":"\u0281","\u02b7":"w","\u02b8":"y","\u02e0":"\u0263","\u02e1":"l","\u02e2":"s","\u02e3":"x","\u02e4":"\u0295","\u1d2c":"A","\u1d2d":"\xc6","\u1d2e":"B","\u1d30":"D","\u1d31":"E","\u1d32":"\u018e","\u1d33":"G","\u1d34":"H","\u1d35":"I","\u1d36":"J","\u1d37":"K","\u1d38":"L","\u1d39":"M","\u1d3a":"N","\u1d3c":"O","\u1d3d":"\u0222","\u1d3e":"P","\u1d3f":"R","\u1d40":"T","\u1d41":"U","\u1d42":"W","\u1d43":"a","\u1d44":"\u0250","\u1d45":"\u0251","\u1d46":"\u1d02","\u1d47":"b","\u1d48":"d","\u1d49":"e","\u1d4a":"\u0259","\u1d4b":"\u025b","\u1d4c":"\u025c","\u1d4d":"g","\u1d4f":"k","\u1d50":"m","\u1d51":"\u014b","\u1d52":"o","\u1d53":"\u0254","\u1d54":"\u1d16","\u1d55":"\u1d17","\u1d56":"p","\u1d57":"t","\u1d58":"u","\u1d59":"\u1d1d","\u1d5a":"\u026f","\u1d5b":"v","\u1d5c":"\u1d25","\u1d5d":"\u03b2","\u1d5e":"\u03b3","\u1d5f":"\u03b4","\u1d60":"\u03c6","\u1d61":"\u03c7","\u2070":"0","\u2071":"i","\u2074":"4","\u2075":"5","\u2076":"6","\u2077":"7","\u2078":"8","\u2079":"9","\u207a":"+","\u207b":"\u2212","\u207c":"=","\u207d":"(","\u207e":")","\u207f":"n","\u2120":"SM","\u2122":"TM","\u3192":"\u4e00","\u3193":"\u4e8c","\u3194":"\u4e09","\u3195":"\u56db","\u3196":"\u4e0a","\u3197":"\u4e2d","\u3198":"\u4e0b","\u3199":"\u7532","\u319a":"\u4e59","\u319b":"\u4e19","\u319c":"\u4e01","\u319d":"\u5929","\u319e":"\u5730","\u319f":"\u4eba","\u02c0":"\u0294","\u02c1":"\u0295","\u06e5":"\u0648","\u06e6":"\u064a"},SUPERSCRIPTS_REGEXP:new RegExp("[\xaa\xb2\xb3\xb9\xba\u02b0\u02b1\u02b2\u02b3\u02b4\u02b5\u02b6\u02b7\u02b8\u02e0\u02e1\u02e2\u02e3\u02e4\u1d2c\u1d2d\u1d2e\u1d30\u1d31\u1d32\u1d33\u1d34\u1d35\u1d36\u1d37\u1d38\u1d39\u1d3a\u1d3c\u1d3d\u1d3e\u1d3f\u1d40\u1d41\u1d42\u1d43\u1d44\u1d45\u1d46\u1d47\u1d48\u1d49\u1d4a\u1d4b\u1d4c\u1d4d\u1d4f\u1d50\u1d51\u1d52\u1d53\u1d54\u1d55\u1d56\u1d57\u1d58\u1d59\u1d5a\u1d5b\u1d5c\u1d5d\u1d5e\u1d5f\u1d60\u1d61\u2070\u2071\u2074\u2075\u2076\u2077\u2078\u2079\u207a\u207b\u207c\u207d\u207e\u207f\u2120\u2122\u3192\u3193\u3194\u3195\u3196\u3197\u3198\u3199\u319a\u319b\u319c\u319d\u319e\u319f\u02c0\u02c1\u06e5\u06e6]","g"),locale:{},locale_opts:{},locale_dates:{}};if("undefined"!=typeof require&&"undefined"!=typeof module&&"exports"in module){var s=!0,r=require("./csl_nodejs_jsdom").CSL_NODEJS_JSDOM;exports.CSL=e}e.TERMINAL_PUNCTUATION_REGEXP=new RegExp("^(["+e.TERMINAL_PUNCTUATION.slice(0,-1).join("")+"])(.*)"),e.CLOSURES=new RegExp(".*[\\]\\)]"),"object"==typeof console&&"function"==typeof console.log?(e.debug=function(t){console.log("CSL: "+t)},e.error=function(t){console.log("CSL error: "+t)}):(e.debug=function(){},e.error=function(t){throw"CSL error: "+t});var a;return a="undefined"!=typeof s?r:"undefined"!=typeof CSL_E4X?CSL_E4X:"undefined"!=typeof CSL_JSON?CSL_JSON:t,e.System={},e.System.Xml={Parsing:a},e.getSortCompare=function(t){if(e.stringCompare)return e.stringCompare;var s,i={sensitivity:"base",ignorePunctuation:!0,numeric:!0};t||(t="en-US"),s=function(e,s){return e.toLocaleLowerCase().localeCompare(s.toLocaleLowerCase(),t,i)};var r=function(t){return t.replace(/^[\[\]\'\"]*/g,"")},a=function(){return s("[x","x")?function(t,e){return s(r(t),r(e))}:!1},n=a(),o=function(t,e){return n?n(t,e):s(t,e)};return o},e.ambigConfigDiff=function(t,e){var s,i,r,a;if(t.names.length!==e.names.length)return 1;for(s=0,i=t.names.length;i>s;s+=1){if(t.names[s]!==e.names[s])return 1;for(r=0,a=t.givens[s];a>r;r+=1)if(t.givens[s][r]!==e.givens[s][r])return 1}return t.disambiguate!=e.disambiguate?1:t.year_suffix!==e.year_suffix?1:0},e.cloneAmbigConfig=function(t,e){var s,i,r,a,n,o={};for(o.names=[],o.givens=[],o.year_suffix=!1,o.disambiguate=!1,s=0,i=t.names.length;i>s;s+=1)n=t.names[s],o.names[s]=n;for(s=0,i=t.givens.length;i>s;s+=1){for(n=[],r=0,a=t.givens[s].length;a>r;r+=1)n.push(t.givens[s][r]);o.givens.push(n)}return e?(o.year_suffix=e.year_suffix,o.disambiguate=e.disambiguate):(o.year_suffix=t.year_suffix,o.disambiguate=t.disambiguate),o},e.getAmbigConfig=function(){var t,s;return t=this.tmp.disambig_request,t||(t=this.tmp.disambig_settings),s=e.cloneAmbigConfig(t)},e.getMaxVals=function(){return this.tmp.names_max.mystack.slice()},e.getMinVal=function(){return this.tmp["et-al-min"]},e.tokenExec=function(t,e,s){var i,r,a,n,o,l;l=!1,i=t.next,r=!1;var u=function(e){return e?(this.tmp.jump.replace("succeed"),t.succeed):(this.tmp.jump.replace("fail"),t.fail)};for(t.test&&(i=u.call(this,t.test(e,s))),o=t.execs.length,n=0;o>n;n+=1)a=t.execs[n],r=a.call(t,this,e,s),r&&(i=r);return i},e.expandMacro=function(t){var s,i,r,a;if(s=t.postponed_macro,this.build.macro_stack.indexOf(s)>-1)throw'CSL processor error: call to macro "'+s+'" would cause an infinite loop';this.build.macro_stack.push(s);var n=!1,o=!1;if(i=this.sys.xml.getNodesByName(this.cslXml,"macro",s),i.length&&(o=this.sys.xml.getAttributeValue(i[0],"cslid"),n=this.sys.xml.getAttributeValue(i[0],"macro-has-date")),n&&(a=function(t){t.tmp.extension&&(t.tmp["doing-macro-with-date"]=!0)},t.execs.push(a)),t.tokentype=e.START,t.cslid=o,e.Node.group.build.call(t,this,this[this.build.area].tokens,!0),!this.sys.xml.getNodeValue(i))throw'CSL style error: undefined macro "'+s+'"';var l=e.makeBuilder(this);l(i[0]),r=new e.Token("group",e.END),t.decorations&&(r.decorations=t.decorations.slice()),n&&(a=function(t){t.tmp.extension&&(t.tmp["doing-macro-with-date"]=!1)},r.execs.push(a)),e.Node.group.build.call(r,this,this[this.build.area].tokens,!0),this.build.macro_stack.pop()},e.XmlToToken=function(t,s){var i,r,a,n,o,l,u,h;if(i=t.sys.xml.nodename(this),!t.build.skip||t.build.skip===i){if(!i)return r=t.sys.xml.content(this),void(r&&(t.build.text=r));if(!e.Node[t.sys.xml.nodename(this)])throw'Undefined node name "'+i+'".';if(a=[],n=t.sys.xml.attributes(this),o=e.setDecorations.call(this,t,n),l=new e.Token(i,s),s!==e.END||"if"===i||"else-if"===i||"layout"===i){for(u in n)if(n.hasOwnProperty(u)){if(s===e.END&&"@language"!==u&&"@locale"!==u)continue;if(n.hasOwnProperty(u))if(e.Attributes[u])try{e.Attributes[u].call(l,t,""+n[u])}catch(p){throw e.error(p),"CSL processor error, "+u+" attribute: "+p}else e.debug('warning: undefined attribute "'+u+'" in style')}l.decorations=o}else s===e.END&&n["@variable"]&&(l.hasVariable=!0);h=t[t.build.area].tokens,e.Node[i].build.call(l,t,h)}},e.DateParser=function(){var t,s,i,r,a,n,o,l,u,h,p,c,f,m,g,d,b,_,y,v,x,I,S,O,A;for(t=[["\u660e\u6cbb",1867],["\u5927\u6b63",1911],["\u662d\u548c",1925],["\u5e73\u6210",1988]],s={},S=t.length,o=0;S>o;o+=1)l=t[o][0],u=t[o][1],s[l]=u;for(O=[],o=0;S>o;o+=1)u=t[o][0],O.push(u);for(O=O.join("|"),i="(?:"+O+")(?:[0-9]+)",i=new RegExp(i),A="(?:"+O+")(?:[0-9]+)",A=new RegExp(A,"g"),a=/(\u6708|\u5E74)/g,r=/\u65E5/,n=/\u301c/g,h="(?:[?0-9]{1,2}%%NUMD%%){0,2}[?0-9]{4}(?![0-9])",p="[?0-9]{4}(?:%%NUMD%%[?0-9]{1,2}){0,2}(?![0-9])",c="[?0-9]{1,3}",f="[%%DATED%%]",m="[?~]",g="[a-zA-Z]+",d="("+p+"|"+h+"|"+c+"|"+f+"|"+m+"|"+g+")",b=new RegExp(d.replace(/%%NUMD%%/g,"-").replace(/%%DATED%%/g,"-")),_=new RegExp(d.replace(/%%NUMD%%/g,"-").replace(/%%DATED%%/g,"/")),y=new RegExp(d.replace(/%%NUMD%%/g,"/").replace(/%%DATED%%/g,"-")),v=[],x=[],S=v.length,o=0;S>o;o+=1)I=new RegExp(v[o]+".*"),x.push(I);this.mstrings="january february march april may june july august september october november december spring summer fall winter spring summer",this.mstrings=this.mstrings.split(" "),this.setOrderDayMonth=function(){this.monthguess=1,this.dayguess=0},this.setOrderMonthDay=function(){this.monthguess=0,this.dayguess=1},this.setOrderMonthDay(),this.resetMonths=function(){var t,e,s,i;for(this.msets=[],t=0,e=this.mstrings.length;e>t;t+=1)this.msets.push([this.mstrings[t]]);for(this.mabbrevs=[],t=0,e=this.msets.length;e>t;t+=1)for(this.mabbrevs.push([]),s=0,i=this.msets[t].length;i>s;s+=1)this.mabbrevs[t].push(this.msets[t][0].slice(0,3));for(this.mrexes=[],t=0,e=this.mabbrevs.length;e>t;t+=1)this.mrexes.push(new RegExp("(?:"+this.mabbrevs[t].join("|")+")"))},this.resetMonths(),this.addMonths=function(t){var s,i,r,a,n,o,l,u;if("string"==typeof t&&(t=t.split(/\s+/)),12!==t.length&&16!==t.length)return void e.debug("month [+season] list of "+t.length+", expected 12 or 16. Ignoring.");for(s=0,i=t.length;i>s;s+=1){var h=!1,p=!1,c=3,f={};for(r=0,a=this.mabbrevs.length;a>r;r+=1){if(f[r]={},r===s){for(n=0,o=this.mabbrevs[s].length;o>n;n+=1)if(this.mabbrevs[s][n]===t[s].slice(0,this.mabbrevs[s][n].length)){p=!0;break}}else for(n=0,o=this.mabbrevs[r].length;o>n;n+=1)if(h=this.mabbrevs[r][n].length,this.mabbrevs[r][n]===t[s].slice(0,h)){for(;this.msets[r][n].slice(0,h)===t[s].slice(0,h);){if(h>t[s].length||h>this.msets[r][n].length){e.debug("unable to disambiguate month string in date parser: "+t[s]);break}h+=1}c=h,f[r][n]=h}for(l in f)if(f.hasOwnProperty(l))for(u in f[l])f[l].hasOwnProperty(u)&&(h=f[l][u],l=parseInt(l,10),u=parseInt(u,10),this.mabbrevs[l][u]=this.msets[l][u].slice(0,h))}p||(this.msets[s].push(t[s]),this.mabbrevs[s].push(t[s].slice(0,c)))}for(this.mrexes=[],s=0,i=this.mabbrevs.length;i>s;s+=1)this.mrexes.push(new RegExp("(?:"+this.mabbrevs[s].join("|")+")"))},this.parse=function(t){var l,u,h,p,c,f,m,g,d,v,I,O,T,E,k,N,R,w,C,L,P,U,D,B,j,q,F,M,G,V;if(t&&(t=""+t,t=t.replace(/\s*[0-9]{2}:[0-9]{2}(?::[0-9]+)/,""),c=t.match(a))){if(t=t.replace(/\s+/,"","g"),t=t.replace(r,"","g"),t=t.replace(a,"-","g"),t=t.replace(n,"/","g"),t=t.replace("-/","/","g"),t=t.replace(/-$/,"","g"),D=t.split(i),h=[],U=t.match(A)){var z=[];for(o=0,S=U.length;S>o;o+=1)z=z.concat(U[o].match(/([^0-9]+)([0-9]+)/).slice(1));for(o=0,S=D.length;S>o;o+=1)h.push(D[o]),o!==S-1&&(B=2*o,h.push(z[B]),h.push(z[B+1]))}else h=D;for(p=h.length,o=1;p>o;o+=3)h[o+1]=s[h[o]]+parseInt(h[o+1],10),h[o]="";t=h.join(""),t=t.replace(/\s*-\s*$/,"").replace(/\s*-\s*\//,"/"),t=t.replace(/\.\s*$/,""),t=t.replace(/\.(?! )/,""),l=t.indexOf("/"),u=t.indexOf("-")}if(t=t.replace(/([A-Za-z])\./g,"$1"),f="",m="",g={},'"'===t.slice(0,1)&&'"'===t.slice(-1))return g.literal=t.slice(1,-1),g;for(l>-1&&u>-1?(d=t.split("/"),d.length>3?(v="-",I="/",h=t.split(y)):(v="/",I="-",h=t.split(_))):(t=t.replace("/","-"),v="-",I="-",h=t.split(b)),O=[],S=h.length,o=0;S>o;o+=1)C=h[o],c=C.match(/^\s*([\-\/]|[a-zA-Z]+|[\-~?0-9]+)\s*$/),c&&O.push(c[1]);for(T=O.indexOf(v),E=[],k=!1,T>-1?(E.push([0,T]),E.push([T+1,O.length]),k=!0):E.push([0,O.length]),N="",j=0,q=E.length;q>j;j+=1){for(L=E[j],R=O.slice(L[0],L[1]),F=0,M=R.length;M>F;F+=1)if(P=R[F],P.indexOf(I)>-1)this.parseNumericDate(g,I,N,P);else if(P.match(/[0-9]{4}/))g["year"+N]=P.replace(/^0*/,"");else{for(w=!1,G=0,V=this.mrexes.length;V>G;G+=1){if(P.toLocaleLowerCase().match(this.mrexes[G])){g["month"+N]=""+(parseInt(G,10)+1),w=!0;break}w||(P.match(/^[0-9]+$/)&&(f=parseInt(P,10)),P.toLocaleLowerCase().match(/^bc/)&&f?(g["year"+N]=""+-1*f,f=""):P.toLocaleLowerCase().match(/^ad/)&&f&&(g["year"+N]=""+f,f=""))}for(w=!1,G=0,V=x.length;V>G;G+=1)if(P.toLocaleLowerCase().match(x[G])){g["season"+N]=""+(parseInt(G,10)+1),w=!0;break}w||("~"===P||"?"===P||"c"===P||P.match(/^cir/)?g.circa="1":!P.toLocaleLowerCase().match(/(?:mic|tri|hil|eas)/)||g["season"+N]||(m=P))}f&&(g["day"+N]=f,f=""),m&&!g["season"+N]&&(g["season"+N]=m,m=""),N="_end"}if(k)for(F=0,M=e.DATE_PARTS_ALL.length;M>F;F+=1)C=e.DATE_PARTS_ALL[F],g[C]&&!g[C+"_end"]?g[C+"_end"]=g[C]:!g[C]&&g[C+"_end"]&&(g[C]=g[C+"_end"]);return g.year||(g={literal:t}),this.use_array&&this.toArray(g),g},this.returnAsArray=function(){this.use_array=!0},this.returnAsKeys=function(){this.use_array=!1},this.toArray=function(t){var e,s,i;t["date-parts"]=[],t["date-parts"].push([]);var r=0;for(e=0,s=3;s>e&&(i=["year","month","day"][e],t[i]);e+=1)r+=1,t["date-parts"][0].push(t[i]),delete t[i];for(t["date-parts"].push([]),e=0,s=r;s>e&&(i=["year_end","month_end","day_end"][e],t[i]);e+=1)t["date-parts"][1].push(t[i]),delete t[i];t["date-parts"][0].length!==t["date-parts"][1].length&&t["date-parts"].pop()},this.parseNumericDate=function(t,e,s,i){var r,a,n;for(r=i.split(e),a=0,n=r.length;n>a;a+=1)if(4===r[a].length){t["year"+s]=r[a].replace(/^0*/,""),r=a?r.slice(0,a):r.slice(1);break}for(a=0,n=r.length;n>a;a+=1)r[a]=parseInt(r[a],10);1===r.length||2===r.length&&!r[1]?t["month"+s]=""+r[0]:2===r.length&&(r[this.monthguess]>12?(t["month"+s]=""+r[this.dayguess],t["day"+s]=""+r[this.monthguess]):(t["month"+s]=""+r[this.monthguess],t["day"+s]=""+r[this.dayguess]))}},e.Engine=function(t,s,i,r){function a(t){var t=t.slice(),e=new RegExp("((?:[?!:]*\\s+|-|^)(?:"+t.join("|")+")(?=[!?:]*\\s+|-|$))");return e}var n,o;this.processor_version=e.PROCESSOR_VERSION,this.csl_version="1.0",this.sys=t,t.variableWrapper&&(e.VARIABLE_WRAPPER_PREPUNCT_REX=new RegExp("^(["+[" "].concat(e.SWAPPING_PUNCTUATION).join("")+"]*)(.*)")),this.sys.xml=new e.System.Xml.Parsing,"undefined"==typeof CSL_JSON&&"string"!=typeof s&&(s=""),e.getAbbreviation&&(this.sys.getAbbreviation=e.getAbbreviation),this.sys.stringCompare&&(e.stringCompare=this.sys.stringCompare),this.sys.AbbreviationSegments=e.AbbreviationSegments,this.parallel=new e.Parallel(this),this.transform=new e.Transform(this),this.setParseNames=function(t){this.opt["parse-names"]=t},this.opt=new e.Engine.Opt,this.tmp=new e.Engine.Tmp,this.build=new e.Engine.Build,this.fun=new e.Engine.Fun(this),this.configure=new e.Engine.Configure,this.citation_sort=new e.Engine.CitationSort,this.bibliography_sort=new e.Engine.BibliographySort,this.citation=new e.Engine.Citation(this),this.bibliography=new e.Engine.Bibliography,this.output=new e.Output.Queue(this),this.dateput=new e.Output.Queue(this),this.cslXml=this.sys.xml.makeXml(s),(this.opt.development_extensions.csl_reverse_lookup_support||this.sys.csl_reverse_lookup_support)&&(this.build.cslNodeId=0,this.setCslNodeIds=function(t,e){var s=this.sys.xml.children(t);this.sys.xml.setAttribute(t,"cslid",this.build.cslNodeId),this.opt.nodenames.push(e),this.build.cslNodeId+=1;for(var i=0,r=this.sys.xml.numberofnodes(s);r>i;i+=1)e=this.sys.xml.nodename(s[i]),e&&this.setCslNodeIds(s[i],e)},this.setCslNodeIds(this.cslXml,"style")),this.sys.xml.addMissingNameNodes(this.cslXml),this.sys.xml.addInstitutionNodes(this.cslXml),this.sys.xml.insertPublisherAndPlace(this.cslXml),this.sys.xml.flagDateMacros(this.cslXml),n=this.sys.xml.attributes(this.cslXml),"undefined"==typeof n["@sort-separator"]&&this.sys.xml.setAttribute(this.cslXml,"sort-separator",", "),this.opt["initialize-with-hyphen"]=!0,this.setStyleAttributes(),this.opt.xclass=t.xml.getAttributeValue(this.cslXml,"class"),this.opt["class"]=this.opt.xclass,this.opt.styleID=this.sys.xml.getStyleId(this.cslXml),this.opt.styleName=this.sys.xml.getStyleId(this.cslXml,!0),e.getSuppressJurisdictions&&(this.opt.suppressJurisdictions=e.getSuppressJurisdictions(this.opt.styleID)),"1.1m"===this.opt.version.slice(0,4)&&(this.opt.development_extensions.static_statute_locator=!0,this.opt.development_extensions.handle_parallel_articles=!0,this.opt.development_extensions.main_title_from_short_title=!0,this.opt.development_extensions.strict_page_numbers=!0,this.opt.development_extensions.rtl_support=!0,this.opt.development_extensions.expect_and_symbol_form=!0,this.opt.development_extensions.require_explicit_legal_case_title_short=!0),i&&(i=i.replace("_","-")),this.opt["default-locale"][0]&&(this.opt["default-locale"][0]=this.opt["default-locale"][0].replace("_","-")),i&&r&&(this.opt["default-locale"]=[i]),i&&!r&&this.opt["default-locale"][0]&&(i=this.opt["default-locale"][0]),0===this.opt["default-locale"].length&&(i||(i="en-US"),this.opt["default-locale"].push("en-US")),i||(i=this.opt["default-locale"][0]),o=e.localeResolve(i),this.opt.lang=o.best,this.opt["default-locale"][0]=o.best,this.locale={},this.opt["default-locale-sort"]||(this.opt["default-locale-sort"]=this.opt["default-locale"][0]),this.localeConfigure(o),this.locale[this.opt.lang].opts["skip-words-regexp"]=a(this.locale[this.opt.lang].opts["skip-words"]),this.output.adjust=new e.Output.Queue.adjust(this.getOpt("punctuation-in-quote")),this.registry=new e.Registry(this),this.buildTokenLists("citation"),this.buildTokenLists("bibliography"),this.configureTokenLists(),this.disambiguate=new e.Disambiguation(this),this.splice_delimiter=!1,this.fun.dateparser=new e.DateParser,this.fun.flipflopper=new e.Util.FlipFlopper(this),this.setCloseQuotesArray(),this.fun.ordinalizer.init(this),this.fun.long_ordinalizer.init(this),this.fun.page_mangler=e.Util.PageRangeMangler.getFunction(this,"page"),this.fun.year_mangler=e.Util.PageRangeMangler.getFunction(this,"year"),this.setOutputFormat("html")},e.Engine.prototype.setCloseQuotesArray=function(){var t;t=[],t.push(this.getTerm("close-quote")),t.push(this.getTerm("close-inner-quote")),t.push('"'),t.push("'"),this.opt.close_quotes_array=t},e.makeBuilder=function(t){function s(s){e.XmlToToken.call(s,t,e.START)}function i(s){e.XmlToToken.call(s,t,e.END)}function r(s){e.XmlToToken.call(s,t,e.SINGLETON)}function a(n){var o;if(t.sys.xml.numberofnodes(t.sys.xml.children(n))){o=n,s(o);for(var l=0;l<t.sys.xml.numberofnodes(t.sys.xml.children(o));l+=1)n=t.sys.xml.children(o)[l],null!==t.sys.xml.nodename(n)&&("date"===t.sys.xml.nodename(n)&&(e.Util.fixDateNode.call(t,o,l,n),n=t.sys.xml.children(o)[l]),a(n,s,i,r));i(o)}else r(n)}return a},e.Engine.prototype.buildTokenLists=function(t){var s,i=e.makeBuilder(this);if(s=this.sys.xml.getNodesByName(this.cslXml,t),this.sys.xml.getNodeValue(s)){this.build.area=t;var r=s[0];i(r)}},e.Engine.prototype.setStyleAttributes=function(){var t,s,i;t={};var r=this.cslXml,a=this.cslXml.tagName?(""+this.cslXml.tagName).toLowerCase():"";if("style"!==a&&"cslstyle"!==a&&this.cslXml.getElementsByTagName)var r=this.cslXml.getElementsByTagName("style")[0];t.name=this.sys.xml.nodename(r),s=this.sys.xml.attributes(r);for(i in s)s.hasOwnProperty(i)&&e.Attributes[i].call(t,this,s[i])},e.Engine.prototype.getTerm=function(t,s,i,r,a,n){t&&t.match(/[A-Z]/)&&t===t.toUpperCase()&&(e.debug("Warning: term key is in uppercase form: "+t),t=t.toLowerCase());var o;o=n?this.opt["default-locale"][0]:this.opt.lang;var l=e.Engine.getField(e.LOOSE,this.locale[o].terms,t,s,i,r);if(l||"range-delimiter"!==t||(l="\u2013"),"undefined"==typeof l){if(a===e.STRICT)throw'Error in getTerm: term "'+t+'" does not exist.';a===e.TOLERANT&&(l="")}return l&&(this.tmp.cite_renders_content=!0),l},e.Engine.prototype.getDate=function(t,e){var s;return s=e?this.opt["default-locale"]:this.opt.lang,this.locale[s].dates[t]?this.locale[s].dates[t]:!1},e.Engine.prototype.getOpt=function(t){return"undefined"!=typeof this.locale[this.opt.lang].opts[t]?this.locale[this.opt.lang].opts[t]:!1},e.Engine.prototype.getVariable=function(t,s,i,r){return e.Engine.getField(e.LOOSE,t,s,i,r)},e.Engine.prototype.getDateNum=function(t,e){return"undefined"==typeof t?0:t[e]},e.Engine.getField=function(t,s,i,r,a,n){var o,l,u,h,p,c;if(o="","undefined"==typeof s[i]){if(t===e.STRICT)throw'Error in getField: term "'+i+'" does not exist.';return void 0}for(c=n&&s[i][n]?s[i][n]:s[i],l=[],"symbol"===r?l=["symbol","short"]:"verb-short"===r?l=["verb-short","verb"]:"long"!==r&&(l=[r]),l=l.concat(["long"]),p=l.length,h=0;p>h;h+=1)if(u=l[h],"string"==typeof c||"number"==typeof c)o=c;else if("undefined"!=typeof c[u]){o="string"==typeof c[u]||"number"==typeof c[u]?c[u]:"number"==typeof a?c[u][a]:c[u][0];break}return o},e.Engine.prototype.configureTokenLists=function(){var t,s,i,r,a,n,o,l,u,h,p;for(t=["year","month","day"],u=e.AREAS.length,i=0;u>i;i+=1)for(s=e.AREAS[i],h=this[s].tokens.length-1,o=h;o>-1;o+=-1){if(r=this[s].tokens[o],"date"===r.name&&e.END===r.tokentype&&(a=[]),"date-part"===r.name&&r.strings.name)for(p=t.length,l=0;p>l;l+=1)n=t[l],n===r.strings.name&&a.push(r.strings.name);"date"===r.name&&e.START===r.tokentype&&(a.reverse(),r.dateparts=a),r.next=o+1,r.name&&e.Node[r.name].configure&&e.Node[r.name].configure.call(r,this,o)}return this.version=e.version,this.state},e.Engine.prototype.retrieveItems=function(t){var e;e=[];for(var s=0,i=t.length;i>s;s+=1)e.push(this.retrieveItem(""+t[s]));return e},e.ITERATION=0,e.Engine.prototype.retrieveItem=function(t){var s,i,r,a,n;if(this.opt.development_extensions.normalize_lang_keys_to_lowercase&&"boolean"==typeof this.opt.development_extensions.normalize_lang_keys_to_lowercase){for(var o=0,l=this.opt["default-locale"].length;l>o;o+=1)this.opt["default-locale"][o]=this.opt["default-locale"][o].toLowerCase();for(var o=0,l=this.opt["locale-translit"].length;l>o;o+=1)this.opt["locale-translit"][o]=this.opt["locale-translit"][o].toLowerCase();for(var o=0,l=this.opt["locale-translat"].length;l>o;o+=1)this.opt["locale-translat"][o]=this.opt["locale-translat"][o].toLowerCase();this.opt.development_extensions.normalize_lang_keys_to_lowercase=100}if(e.ITERATION+=1,s=this.sys.retrieveItem(""+t),this.opt.development_extensions.normalize_lang_keys_to_lowercase){if(s.multi){if(s.multi._keys)for(var u in s.multi._keys)for(var h in s.multi._keys[u])h!==h.toLowerCase()&&(s.multi._keys[u][h.toLowerCase()]=s.multi._keys[u][h],delete s.multi._keys[u][h]);if(s.multi.main)for(var u in s.multi.main)s.multi.main[u]=s.multi.main[u].toLowerCase()}for(var o=0,l=e.CREATORS.length;o>l;o+=1){var p=e.CREATORS[o];if(s[p]&&s[p].multi)for(var c=0,f=s[p].length;f>c;c+=1){var m=s[p][c];if(m.multi){if(m.multi._key)for(var h in m.multi._key)h!==h.toLowerCase()&&(m.multi._key[h.toLowerCase()]=m.multi._key[h],delete m.multi._key[h]);m.multi.main&&(m.multi.main=m.multi.main.toLowerCase())}}}}if(s.page){s["page-first"]=s.page;var g=""+s.page;i=g.split(/\s*(?:&|,|-|\u2013)\s*/),"\\"!==i[0].slice(-1)&&(s["page-first"]=i[0])
}if(this.opt.development_extensions.field_hack&&s.note&&(i=s.note.match(e.NOTE_FIELDS_REGEXP))){for(r=0,a=i.length;a>r;r+=1){if(n=i[r].match(e.NOTE_FIELD_REGEXP),!s[n[1]]&&e.DATE_VARIABLES.indexOf(n[1])>-1)s[n[1]]={raw:n[2]};else if(!s[n[1]]&&e.NAME_VARIABLES.indexOf(n[1])>-1){s[n[1]]||(s[n[1]]=[]);var d=n[2].split(/\s*\|\|\s*/);1===d.length?s[n[1]].push({family:d[0],isInstitution:!0}):2===d.length&&s[n[1]].push({family:d[0],given:d[1]})}else s[n[1]]&&"type"!==n[1]||(s[n[1]]=n[2].replace(/^\s+/,"").replace(/\s+$/,""));s.note.replace(e.NOTE_FIELD_REGEXP,"")}}for(var o=1,l=e.DATE_VARIABLES.length;l>o;o+=1){var b=s[e.DATE_VARIABLES[o]];b&&(this.opt.development_extensions.raw_date_parsing&&b.raw&&(b=this.fun.dateparser.parse(b.raw)),s[e.DATE_VARIABLES[o]]=this.dateParseArray(b))}if(this.opt.development_extensions.static_statute_locator&&s.type&&["bill","gazette","legislation","treaty"].indexOf(s.type)>-1){var _,y=["type","title","jurisdiction","genre","volume","container-title"],v=[];for(o=0,l=y.length;l>o;o+=1)_=y[o],s[_]&&v.push(s[_]);for(y=["original-date","issued"],o=0,y.length;l>o;o+=1)if(_=y[o],s[_]&&s[_].year){var x=s[_].year;v.push(x);break}s.legislation_id=v.join("::")}if(s["title-short"]||(s["title-short"]=s.shortTitle),this.opt.development_extensions.main_title_from_short_title&&(s["title-main"]=s.title,s["title-sub"]=!1,s.title&&s["title-short"])){var I=s["title-short"];if(offset=I.length,s.title.slice(0,offset)===I&&s.title.slice(offset).match(/^\s*:/)){if(s["title-main"]=s.title.slice(0,offset).replace(/\s+$/,""),s["title-sub"]=s.title.slice(offset).replace(/^\s*:\s*/,""),this.opt.development_extensions.uppercase_subtitles&&s["title-sub"])for(var S=s["title-sub"],o=0,l=S.length;l>o;o++)if(S.charAt(o).toLowerCase()!==S.charAt(o).toUpperCase()){s["title-sub"]=S.slice(0,o)+S.charAt(o).toUpperCase()+S.slice(o+1);break}var O=offset+s.title.length-s["title-main"].length-s["title-sub"].length;s.title=s.title.slice(0,O)+s["title-sub"]}}var A=["legal_case","legislation","gazette","regulation"].indexOf(s.type)>-1;if(!A&&s.title&&this.sys.getAbbreviation){var T=!1;s.jurisdiction||(T=!0);var E=this.transform.loadAbbreviation(s.jurisdiction,"title",s.title,s.type,!0);this.transform.abbrevs[E].title&&this.transform.abbrevs[E].title[s.title]&&(s["title-short"]=this.transform.abbrevs[E].title[s.title])}if(s["container-title-short"]=s.journalAbbreviation,s["container-title"]&&this.sys.getAbbreviation){var E=this.transform.loadAbbreviation(s.jurisdiction,"container-title",s["container-title"]);this.transform.abbrevs[E]["container-title"]&&this.transform.abbrevs[E]["container-title"][s["container-title"]]&&(s["container-title-short"]=this.transform.abbrevs[E]["container-title"][s["container-title"]])}return s},e.Engine.prototype.setOpt=function(t,e,s){"style"===t.name||"cslstyle"===t.name?this.opt[e]=s:["citation","bibliography"].indexOf(t.name)>-1?this[t.name].opt[e]=s:-1===["name-form","name-delimiter","names-delimiter"].indexOf(e)&&(t.strings[e]=s)},e.Engine.prototype.fixOpt=function(t,e,s){["citation","bibliography"].indexOf(t.name)>-1&&(this[t.name].opt[e]||"undefined"==typeof this.opt[e]||(this[t.name].opt[e]=this.opt[e])),("name"===t.name||"names"===t.name)&&"undefined"==typeof t.strings[s]&&"undefined"!=typeof this[this.build.root].opt[e]&&(t.strings[s]=this[this.build.root].opt[e])},e.Engine.prototype.remapSectionVariable=function(t){for(var s=0,i=t.length;i>s;s+=1){var r=t[s][0],a=t[s][1],n=!1;if(["bill","gazette","legislation","treaty"].indexOf(r.type)>-1){a.force_pluralism=0,a.label||(a.label="page");var o=["section","","",""];if(this.opt.development_extensions.static_statute_locator&&r.section?(l=r.section.replace(/^\s+/,"").replace(/\s+$/,"").split(/\s+/),e.STATUTE_SUBDIV_STRINGS[l[0]]?(o[0]=" "+l[0]+" ",o[1]=l.slice(1).join(" ")):(o[0]=" sec. ",o[1]=l.slice(0).join(" "))):this.opt.development_extensions.clobber_locator_if_no_statute_section&&(a.locator=void 0,a.label=void 0),a.locator){var l=a.locator.replace(/^\s+/,"").replace(/\s+$/,"").split(/\s+/);e.STATUTE_SUBDIV_STRINGS[l[0]]?(o[2]=" "+l[0]+" ",o[3]=l.slice(1).join(" ")):a.label?(o[2]=" "+e.STATUTE_SUBDIV_STRINGS_REVERSE[a.label]+" ",o[3]=l.slice(0).join(" ")):o[3]=l.join(" "),o[3]&&"&"===o[3].slice(0,1)&&(o[3]=" "+o[3])}if(o[2]||(o[2]=o[0]),o[3]){if(o[3].match(/^[^0-9a-zA-Z]/)){var u=o[3].split(/\s+/);o[0]===o[2]&&u[1]&&!e.STATUTE_SUBDIV_STRINGS[u[1].replace(/\s+/,"").replace(/\s+/,"")]&&(a.force_pluralism=1),o[2]=""}}else o[2]="";o[1]||(o[0]="");var n=o.join("");if(n=n.replace(/^\s+/,"").replace(/\s+$/,""))if(l=n.split(/\s+/),e.STATUTE_SUBDIV_STRINGS[l[0]]){for(var h=l.length-2;h>0;h+=-2)l[h]===l[0]&&(a.force_pluralism=1,l=l.slice(0,h).concat(l.slice(h+1)));a.label=e.STATUTE_SUBDIV_STRINGS[l[0]],a.locator=l.slice(1).join(" "),0===a.force_pluralism&&delete a.force_pluralism}else a.locator=l.slice(0).join(" ")}}},e.Engine.prototype.setNumberLabels=function(t){if(t.number&&["bill","gazette","legislation","treaty"].indexOf(t.type)>-1&&this.opt.development_extensions.static_statute_locator&&!this.tmp.shadow_numbers.number){this.tmp.shadow_numbers.number={},this.tmp.shadow_numbers.number.values=[],this.tmp.shadow_numbers.number.plural=0,this.tmp.shadow_numbers.number.numeric=!1,this.tmp.shadow_numbers.number.label=!1;var s=""+t.number;s=s.replace("\\","","g");var i=s.split(/\s/)[0],r=e.STATUTE_SUBDIV_STRINGS[i];if(r){var a=s.match(e.STATUTE_SUBDIV_GROUPED_REGEX),n=s.split(e.STATUTE_SUBDIV_PLAIN_REGEX);if(n.length>1){for(var o=[],l=1,u=n.length;u>l;l+=1){var h=a[l-1].replace(/^\s*/,"");o.push(h.replace("sec.","Sec.").replace("ch.","Ch.")),o.push(n[l].replace(/\s*$/,"").replace(/^\s*/,""))}s=o.join(" ")}else s=n[0];this.tmp.shadow_numbers.number.values.push(["Blob",s,!1]),this.tmp.shadow_numbers.number.numeric=!1}else this.tmp.shadow_numbers.number.values.push(["Blob",s,!1]),this.tmp.shadow_numbers.number.numeric=!0}},e.substituteOne=function(t){return function(e,s){return s?t.replace("%%STRING%%",s):""}},e.substituteTwo=function(t){return function(e){var s=t.replace("%%PARAM%%",e);return function(t,e){return e?s.replace("%%STRING%%",e):""}}},e.Mode=function(t){var s,i,r,a,n,o;s={},i=e.Output.Formats[t];for(r in i)if("@"===r.slice(0,1)){if(a=!1,n=i[r],o=r.split("/"),"string"==typeof n&&n.indexOf("%%STRING%%")>-1)a=n.indexOf("%%PARAM%%")>-1?e.substituteTwo(n):e.substituteOne(n);else if("boolean"!=typeof n||n){if("function"!=typeof n)throw"CSL.Compiler: Bad "+t+" config entry for "+r+": "+n;a=n}else a=e.Output.Formatters.passthrough;1===o.length?s[o[0]]=a:2===o.length&&(s[o[0]]||(s[o[0]]={}),s[o[0]][o[1]]=a)}else s[r]=i[r];return s},e.setDecorations=function(t,s){var i,r,a;i=[];for(a in e.FORMAT_KEY_SEQUENCE)r=e.FORMAT_KEY_SEQUENCE[a],s[r]&&(i.push([r,s[r]]),delete s[r]);return i},e.Engine.prototype.normalDecorIsOrphan=function(t,e){if("normal"===e[1]){var s,i=!1;s="citation"===this.tmp.area?[this.citation.opt.layout_decorations].concat(t.alldecor):t.alldecor;for(var r=s.length-1;r>-1;r+=-1)for(var a=s[r].length-1;a>-1;a+=-1)s[r][a][0]===e[0]&&"normal"!==s[r][a][1]&&(i=!0);if(!i)return!0}return!1},e.Engine.prototype.getCitationLabel=function(t){var s="",i=this.getTrigraphParams(),r=i[0],a=this.getTerm("reference","short",0);"undefined"==typeof a&&(a="reference"),a=a.replace(".",""),a=a.slice(0,1).toUpperCase()+a.slice(1);for(var n=0,o=e.CREATORS.length;o>n;n+=1){var l=e.CREATORS[n];if(t[l]){var u=t[l];r=u.length>i.length?i[i.length-1]:i[u.length-1];for(var h=0,p=u.length;p>h&&h!==r.authors.length;h+=1){var c=this.nameOutput.getName(u[h],"locale-translit",!0),f=c.name;f&&f.family?(a=f.family,a=a.replace(/^([ \'\u2019a-z]+\s+)/,"")):f&&f.literal&&(a=f.literal);var m=a.toLowerCase().match(/^(a\s+|the\s+|an\s+)/);if(m&&(a=a.slice(m[1].length)),a=a.replace(e.ROMANESQUE_NOT_REGEXP,"","g"),!a)break;a=a.slice(0,r.authors[h]),a.length>1?a=a.slice(0,1).toUpperCase()+a.slice(1).toLowerCase():1===a.length&&(a=a.toUpperCase()),s+=a}break}}var g="0000";return t.issued&&t.issued.year&&(g=""+t.issued.year),g=g.slice(-1*r.year),s+=g},e.Engine.prototype.getTrigraphParams=function(){var t=[],e=this.opt.trigraph.split(":");if(!this.opt.trigraph||"A"!==this.opt.trigraph.slice(0,1))throw"Bad trigraph definition: "+this.opt.trigraph;for(var s=0,i=e.length;i>s;s+=1){for(var r=e[s],a={authors:[],year:0},n=0,o=r.length;o>n;n+=1)switch(r.slice(n,n+1)){case"A":a.authors.push(1);break;case"a":a.authors[a.authors.length-1]+=1;break;case"0":a.year+=1;break;default:throw"Invalid character in trigraph definition: "+this.opt.trigraph}t.push(a)}return t},e.Engine.prototype.setOutputFormat=function(t){this.opt.mode=t,this.fun.decorate=e.Mode(t),this.output[t]||(this.output[t]={},this.output[t].tmp={})},e.Engine.prototype.getSortFunc=function(){return function(t,e){return t=t.split("-"),e=e.split("-"),t.length<e.length?1:t.length>e.length?-1:(t=t.slice(-1)[0],e=e.slice(-1)[0],t.length<e.length?1:t.length>e.length?-1:0)}},e.Engine.prototype.setLangTagsForCslSort=function(t){var e,s;if(t)for(this.opt["locale-sort"]=[],e=0,s=t.length;s>e;e+=1)this.opt["locale-sort"].push(t[e]);this.opt["locale-sort"].sort(this.getSortFunc())},e.Engine.prototype.setLangTagsForCslTransliteration=function(t){var e,s;if(this.opt["locale-translit"]=[],t)for(e=0,s=t.length;s>e;e+=1)this.opt["locale-translit"].push(t[e]);this.opt["locale-translit"].sort(this.getSortFunc())},e.Engine.prototype.setLangTagsForCslTranslation=function(t){var e,s;if(this.opt["locale-translat"]=[],t)for(e=0,s=t.length;s>e;e+=1)this.opt["locale-translat"].push(t[e]);this.opt["locale-translat"].sort(this.getSortFunc())},e.Engine.prototype.setLangPrefsForCites=function(t,e){var s=this.opt["cite-lang-prefs"];e||(e=function(t){return t.toLowerCase()});for(var i=["Persons","Institutions","Titles","Journals","Publishers","Places"],r=0,a=i.length;a>r;r+=1){var n=e(i[r]),o=i[r].toLowerCase();if(t[n]){for(var l=[];t[n].length>1;)l.push(t[n].pop());var u={orig:1,translit:2,translat:3};for(2===l.length&&u[l[0]]<u[l[1]]&&l.reverse();l.length;)t[n].push(l.pop());for(var h=s[o];h.length;)h.pop();for(var p=0,c=t[n].length;c>p;p+=1)h.push(t[n][p])}}},e.Engine.prototype.setLangPrefsForCiteAffixes=function(t){if(t&&48===t.length){for(var e,s=this.opt.citeAffixes,i=0,r=["persons","institutions","titles","journals","publishers","places"],a=["translit","orig","translit","translat"],n=0,o=r.length;o>n;n+=1)for(var l=0,u=a.length;u>l;l+=1)e="",i%8===4?s[r[n]]["locale-"+a[l]].prefix||s[r[n]]["locale-"+a[l]].suffix||(e=t[i]?t[i]:"",s[r[n]]["locale-"+a[l]].prefix=e,e=t[i]?t[i+1]:"",s[r[n]]["locale-"+a[l]].suffix=e):(e=t[i]?t[i]:"",s[r[n]]["locale-"+a[l]].prefix=e,e=t[i]?t[i+1]:"",s[r[n]]["locale-"+a[l]].suffix=e),i+=2;this.opt.citeAffixes=s}},e.Engine.prototype.setAutoVietnameseNamesOption=function(t){this.opt["auto-vietnamese-names"]=t?!0:!1},e.Engine.prototype.setAbbreviations=function(t){this.sys.setAbbreviations&&this.sys.setAbbreviations(t)},e.Engine.prototype.setSuppressTrailingPunctuation=function(t){this.citation.opt.suppressTrailingPunctuation=!!t},e.Output={},e.Output.Queue=function(t){this.levelname=["top"],this.state=t,this.queue=[],this.empty=new e.Token("empty");var s={};s.empty=this.empty,this.formats=new e.Stack(s),this.current=new e.Stack(this.queue)},e.Output.Queue.prototype.pop=function(){var t=this.current.value();return t.length?t.pop():t.blobs.pop()},e.Output.Queue.prototype.getToken=function(t){var e=this.formats.value()[t];return e},e.Output.Queue.prototype.mergeTokenStrings=function(t,s){var i,r,a,n;if(i=this.formats.value()[t],r=this.formats.value()[s],a=i,r){i||(i=new e.Token(t,e.SINGLETON),i.decorations=[]),a=new e.Token(t,e.SINGLETON),n="";for(n in i.strings)i.strings.hasOwnProperty(n)&&(a.strings[n]=i.strings[n]);for(n in r.strings)r.strings.hasOwnProperty(n)&&(a.strings[n]=r.strings[n]);a.decorations=i.decorations.concat(r.decorations)}return a},e.Output.Queue.prototype.addToken=function(t,s,i){var r,a;if(r=new e.Token("output"),"string"==typeof i&&(i=this.formats.value()[i]),i&&i.strings){for(a in i.strings)i.strings.hasOwnProperty(a)&&(r.strings[a]=i.strings[a]);r.decorations=i.decorations}"string"==typeof s&&(r.strings.delimiter=s),this.formats.value()[t]=r},e.Output.Queue.prototype.pushFormats=function(t){t||(t={}),t.empty=this.empty,this.formats.push(t)},e.Output.Queue.prototype.popFormats=function(){this.formats.pop()},e.Output.Queue.prototype.startTag=function(t,e){var s={};this.state.tmp["doing-macro-with-date"]&&this.state.tmp.extension&&(e=this.empty,t="empty"),s[t]=e,this.pushFormats(s),this.openLevel(t)},e.Output.Queue.prototype.endTag=function(){this.closeLevel(),this.popFormats()},e.Output.Queue.prototype.openLevel=function(t){var s,i;if("object"==typeof t)s=new e.Blob(void 0,t);else if("undefined"==typeof t)s=new e.Blob(void 0,this.formats.value().empty,"empty");else{if(!this.formats.value()||!this.formats.value()[t])throw'CSL processor error: call to nonexistent format token "'+t+'"';s=new e.Blob(void 0,this.formats.value()[t],t)}this.nestedBraces&&(s.strings.prefix=s.strings.prefix.replace(this.nestedBraces[0][0],this.nestedBraces[0][1]),s.strings.prefix=s.strings.prefix.replace(this.nestedBraces[1][0],this.nestedBraces[1][1]),s.strings.suffix=s.strings.suffix.replace(this.nestedBraces[0][0],this.nestedBraces[0][1]),s.strings.suffix=s.strings.suffix.replace(this.nestedBraces[1][0],this.nestedBraces[1][1])),i=this.current.value(),i.push(s),this.current.push(s)},e.Output.Queue.prototype.closeLevel=function(t){t&&t!==this.current.value().levelname&&e.error("Level mismatch error:  wanted "+t+" but found "+this.current.value().levelname),this.current.pop()},e.Output.Queue.prototype.append=function(t,s,i,r,a){var n,o,l,u=!0;if(i&&(r=!0),this.state.tmp["doing-macro-with-date"]&&!i){if("macro-with-date"!==s)return!1;"macro-with-date"===s&&(s="empty")}if("undefined"==typeof t)return!1;if("number"==typeof t&&(t=""+t),!i&&this.state.tmp.element_trace&&"suppress-me"===this.state.tmp.element_trace.value())return!1;if(o=!1,s?"literal"===s?(n=!0,u=!1):n="string"==typeof s?this.formats.value()[s]:s:n=this.formats.value().empty,!n)throw"CSL processor error: unknown format token name: "+s;if(n.strings&&"undefined"==typeof n.strings.delimiter&&(n.strings.delimiter=""),"string"==typeof t&&t.length&&(t=t.replace(/ ([:;?!\u00bb])/g,"\u202f$1").replace(/\u00ab /g,"\xab\u202f"),this.last_char_rendered=t.slice(-1),t=t.replace(/\s+'/g,"  '").replace(/^'/g," '"),r?i&&(this.state.tmp.term_predecessor_name=!0):this.state.tmp.term_predecessor=!0),o=new e.Blob(t,n),this.nestedBraces&&(o.strings.prefix=o.strings.prefix.replace(this.nestedBraces[0][0],this.nestedBraces[0][1]),o.strings.prefix=o.strings.prefix.replace(this.nestedBraces[1][0],this.nestedBraces[1][1]),o.strings.suffix=o.strings.suffix.replace(this.nestedBraces[0][0],this.nestedBraces[0][1]),o.strings.suffix=o.strings.suffix.replace(this.nestedBraces[1][0],this.nestedBraces[1][1])),l=this.current.value(),"undefined"==typeof l&&0===this.current.mystack.length&&(this.current.mystack.push([]),l=this.current.value()),"string"==typeof o.blobs&&(r?i&&(this.state.tmp.term_predecessor_name=!0):this.state.tmp.term_predecessor=!0),i||this.state.parallel.AppendBlobPointer(l),"string"==typeof t){l.push(o),o.strings["text-case"]&&(o.blobs=e.Output.Formatters[o.strings["text-case"]](this.state,t)),this.state.tmp.strip_periods&&!a&&(o.blobs=o.blobs.replace(/\.([^a-z]|$)/g,"$1"));for(var h=o.decorations.length-1;h>-1;h+=-1)"@quotes"===o.decorations[h][0]&&"true"===o.decorations[h][1]&&(o.punctuation_in_quote=this.state.getOpt("punctuation-in-quote")),o.blobs.match(e.ROMANESQUE_REGEXP)||"@font-style"===o.decorations[h][0]&&(o.decorations=o.decorations.slice(0,h).concat(o.decorations.slice(h+1)));this.state.fun.flipflopper.init(t,o),this.state.fun.flipflopper.processTags()}else l.push(u?o:t);return!0},e.Output.Queue.prototype.string=function(t,s,i){var r,a,n,o,l,u=e.getSafeEscape(this.state),h=s.slice(),p=[];if(0===h.length)return p;var c="";i?c=i.strings.delimiter:(t.tmp.count_offset_characters=!1,t.tmp.offset_characters=0),i&&i.new_locale&&(i.old_locale=t.opt.lang,t.opt.lang=i.new_locale);var f,m,g,d;for(r=0,a=h.length;a>r;r+=1){if(f=h[r],f.strings.first_blob&&(t.tmp.count_offset_characters=f.strings.first_blob),"string"==typeof f.blobs){if("number"==typeof f.num)p.push(f);else if(f.blobs){l=u(f.blobs);var b=l.length;if(!t.tmp.suppress_decorations)for(n=0,o=f.decorations.length;o>n;n+=1)d=f.decorations[n],"@showid"!==d[0]&&(t.normalDecorIsOrphan(f,d)||(l=t.fun.decorate[d[0]][d[1]].call(f,t,l,d[2])));if(l&&l.length){if(l=u(f.strings.prefix,t.tmp.nestedBraces)+l+u(f.strings.suffix,t.tmp.nestedBraces),(t.opt.development_extensions.csl_reverse_lookup_support||t.sys.csl_reverse_lookup_support)&&!t.tmp.suppress_decorations)for(n=0,o=f.decorations.length;o>n;n+=1)d=f.decorations[n],"@showid"===d[0]&&(l=t.fun.decorate[d[0]][d[1]].call(f,t,l,d[2]));p.push(l),t.tmp.count_offset_characters&&(t.tmp.offset_characters+=b+f.strings.suffix.length+f.strings.prefix.length)}}}else if(f.blobs.length){var _=t.output.string(t,f.blobs,f);p=p.concat(_)}f.strings.first_blob&&(t.registry.registry[f.strings.first_blob].offset=t.tmp.offset_characters,t.tmp.count_offset_characters=!1)}for(r=0,a=p.length-1;a>r;r+=1)"number"!=typeof p[r].num||"number"!=typeof p[r+1].num||p[r+1].UGLY_DELIMITER_SUPPRESS_HACK||(p[r].strings.suffix=p[r].strings.suffix+(c?c:""),p[r+1].successor_prefix="",p[r+1].UGLY_DELIMITER_SUPPRESS_HACK=!0);var y=0;for(r=0,a=p.length;a>r;r+=1)"string"==typeof p[r]&&(y=parseInt(r,10)+1,r<p.length-1&&"object"==typeof p[r+1]&&(c&&!p[r+1].UGLY_DELIMITER_SUPPRESS_HACK&&(p[r]+=u(c)),p[r+1].UGLY_DELIMITER_SUPPRESS_HACK=!0));i&&(i.decorations.length||i.strings.suffix||i.strings.prefix)&&(y=p.length);var v=t.output.renderBlobs(p.slice(0,y),c,!0,i);if(v&&i&&(i.decorations.length||i.strings.suffix||i.strings.prefix)){if(!t.tmp.suppress_decorations)for(r=0,a=i.decorations.length;a>r;r+=1)d=i.decorations[r],["@cite","@bibliography","@display","@showid"].indexOf(d[0])>-1||t.normalDecorIsOrphan(f,d)||"string"==typeof v&&(v=t.fun.decorate[d[0]][d[1]].call(i,t,v,d[2]));if(l=v,m=i.strings.suffix,l&&l.length&&(g=i.strings.prefix,l=u(g,t.tmp.nestedBraces)+l+u(m,t.tmp.nestedBraces),t.tmp.count_offset_characters&&(t.tmp.offset_characters+=g.length+m.length)),v=l,!t.tmp.suppress_decorations)for(r=0,a=i.decorations.length;a>r;r+=1)d=i.decorations[r],-1!==["@cite","@bibliography","@display","@showid"].indexOf(d[0])&&"string"==typeof v&&(v=t.fun.decorate[d[0]][d[1]].call(i,t,v,d[2]))}var x=p.slice(y,p.length);return!x.length&&v?p=[v]:x.length&&!v?p=x:v&&x.length&&(p=[v].concat(x)),"undefined"==typeof i?(this.queue=[],this.current.mystack=[],this.current.mystack.push(this.queue),t.tmp.suppress_decorations&&(p=t.output.renderBlobs(p,void 0,!0))):"boolean"==typeof i&&(p=t.output.renderBlobs(p,void 0,!0)),i&&i.new_locale&&(t.opt.lang=i.old_locale),p},e.Output.Queue.prototype.clearlevel=function(){var t,e,s;for(t=this.current.value(),s=t.blobs.length,e=0;s>e;e+=1)t.blobs.pop()},e.Output.Queue.prototype.renderBlobs=function(t,s,i,r){var a,n,o,l,u,h,p,c,f,m,g,d;if(d=e.getSafeEscape(this.state),s||(s=""),a=this.state,n="",o=[],l="",p=t.length,"citation"===this.state.tmp.area&&!this.state.tmp.just_looking&&1===p&&"object"==typeof t[0]&&r)return t[0].strings.prefix=r.strings.prefix+t[0].strings.prefix,t[0].strings.suffix=t[0].strings.suffix+r.strings.suffix,t[0].decorations=t[0].decorations.concat(r.decorations),t[0].params=r.params,t[0];var b=!0;for(h=0;p>h;h+=1)t[h].checkNext?(t[h].checkNext(t[h+1],b),b=!1):b=!0;var _=!0;for(h=t.length-1;h>0;h+=-1)t[h].checkLast?_&&t[h].checkLast(t[h-1])&&(_=!1):_=!0;for(p=t.length,h=0;p>h;h+=1)if(u=t[h],n&&(l=s),"string"==typeof u)n+=d(l),n+=u,a.tmp.count_offset_characters&&(a.tmp.offset_characters+=l.length);else if(u.status!==e.SUPPRESS){m=u.formatter.format(u.num,u.gender);var y=m.replace(/<[^>]*>/g,"").length;this.append(m,"empty",!0);var v=this.pop(),x=a.tmp.count_offset_characters;if(m=this.string(a,[v],!1),a.tmp.count_offset_characters=x,u.strings["text-case"]&&(m=e.Output.Formatters[u.strings["text-case"]](this.state,m)),m&&this.state.tmp.strip_periods&&(m=m.replace(/\.([^a-z]|$)/g,"$1")),!a.tmp.suppress_decorations)for(f=u.decorations.length,c=0;f>c;c+=1)g=u.decorations[c],a.normalDecorIsOrphan(u,g)||(m=a.fun.decorate[g[0]][g[1]].call(u,a,m,g[2]));m=d(u.strings.prefix)+m+d(u.strings.suffix);var I="";u.status===e.END?I=d(u.range_prefix):u.status===e.SUCCESSOR?I=d(u.successor_prefix):u.status===e.START?I="":u.status===e.SEEN&&(I=d(u.splice_prefix)),n+=I,n+=m,a.tmp.count_offset_characters&&(a.tmp.offset_characters+=I.length+u.strings.prefix.length+y+u.strings.suffix.length)}return n},e.Output.Queue.purgeEmptyBlobs=function(t){if("object"==typeof t&&"object"==typeof t.blobs&&t.blobs.length)for(var s=t.blobs.length-1;s>-1;s--){e.Output.Queue.purgeEmptyBlobs(t.blobs[s]);var i=t.blobs[s];if(!i||!i.blobs||!i.blobs.length){for(var r=[];t.blobs.length-1>s;)r.push(t.blobs.pop());for(t.blobs.pop();r.length;)t.blobs.push(r.pop())}}},e.Output.Queue.adjust=function(t){function e(t){return"number"==typeof t.num||t.blobs&&1===t.blobs.length&&"number"==typeof t.blobs[0].num}function s(t){return"number"==typeof t.num?!0:t.blobs&&"object"==typeof t.blobs?s(t.blobs[t.blobs.length-1])?!0:void 0:!1}function i(t,e){var s=!1,i=["@font-style","@font-variant","@font-weight","@text-decoration","@vertical-align"];if(e&&i.push("@quotes"),t.decorations)for(var r=0,a=t.decorations.length;a>r;r++)if(i.indexOf(t.decorations[r][0])>-1){s=!0;break}return s}function r(t){if(t.decorations)for(var e=0,s=t.decorations.length;s>e;e++)if("@quotes"===t.decorations[e][0])return!0;return"object"!=typeof t.blobs?!1:r(t.blobs[t.blobs.length-1])?!0:!1}function a(t,e){var s=e.strings.suffix.slice(-1);s||"string"!=typeof e.blobs||(s=e.blobs.slice(-1));var i=I[t][s];return i&&1===i.length?!0:"object"!=typeof e.blobs?!1:a(t,e.blobs[e.blobs.length-1])?!0:!1}function n(t,e){if(!y[e])return!1;if("string"==typeof t.blobs)return t.blobs.slice(-1)===e?!0:!1;var s=t.blobs[t.blobs.length-1];if(s){var i=s.strings.suffix.slice(-1);return i?s.strings.suffix.slice(-1)==e?!0:!1:n(s,e)}return!1}function o(t,e,s,i,r){function a(){SecondStrings[i]=SecondStrings[i].slice(1)}function n(){FirstStrings[e]=FirstStrings[e].slice(0,-1)}function o(t){SecondStrings[i]=t+SecondStrings[i]}function l(t){FirstStrings[e]+=t}function u(){return I[m]}function h(){return d[f]}function p(){var t=d[f][m];"string"==typeof t?(n(),a(),o(t)):(o(f),n())}function c(){var t=I[m][f];"string"==typeof t?(n(),a(),l(t)):(l(m),a())}FirstStrings="blobs"===e?t:t.strings,SecondStrings="blobs"===i?s:s.strings;var f=FirstStrings[e].slice(-1),m=SecondStrings[i].slice(0,1),g=r?n:a,b=r?h:u,_=r?p:c,y=f===m;y?g():b()&&_()}function l(t){if(t.blobs&&"string"==typeof t.blobs)return void(y[t.strings.suffix.slice(0,1)]&&t.strings.suffix.slice(0,1)===t.blobs.slice(-1)&&(t.strings.suffix=t.strings.suffix.slice(1)));if("object"==typeof t&&"object"==typeof t.blobs&&t.blobs.length)for(var e=i(t,!0),s=t.blobs.length-1;s>-1;s--){{s===t.blobs.length-1}this.upward(t.blobs[s]);var r=t.strings,a=t.blobs[s].strings;if(0===s){" "===r.prefix.slice(-1)&&" "===a.prefix.slice(0,1)&&(a.prefix=a.prefix.slice(1));var n=a.prefix.slice(0,1);e||!v[n]||r.prefix||(r.prefix+=n,a.prefix=a.prefix.slice(1))}if(s===t.blobs.length-1){var n=a.suffix.slice(-1);!e&&[" "].indexOf(n)>-1&&(r.suffix.slice(0,1)!==n&&(r.suffix=n+r.suffix),a.suffix=a.suffix.slice(0,-1))}r.delimiter&&s>0&&v[r.delimiter.slice(-1)]&&r.delimiter.slice(-1)===a.prefix.slice(0,1)&&(a.prefix=a.prefix.slice(1))}}function u(t){if("object"==typeof t&&"object"==typeof t.blobs&&t.blobs.length)for(var e=t.blobs.length-1;e>-1;e--)if(this.leftward(t.blobs[e]),e<t.blobs.length-1&&!t.strings.delimiter){var s=t.blobs[e],r=s.strings.suffix.slice(-1),a=t.blobs[e+1],n=a.strings.prefix.slice(0,1),l=i(s)||i(a),u="number"==typeof r||"number"==typeof n;if(!l&&!u&&y[n]&&!u){var h=n===s.strings.suffix.slice(-1),p=!s.strings.suffix&&"string"==typeof s.blobs&&s.blobs.slice(-1)===n;h||p?a.strings.prefix=a.strings.prefix.slice(1):o(s,"suffix",a,"prefix")}}}function h(t){if(t.blobs&&"string"==typeof t.blobs)return void(y[t.strings.suffix.slice(0,1)]&&t.strings.suffix.slice(0,1)===t.blobs.slice(-1)&&(t.strings.suffix=t.strings.suffix.slice(1)));if("object"==typeof t&&"object"==typeof t.blobs&&t.blobs.length){for(var l=t.strings,u=!1,h=0,p=t.blobs.length;p>h;h++)if(e(t.blobs[h])){u=!0;break}if(!u&&l.delimiter&&y[l.delimiter.slice(0,1)]){for(var c=l.delimiter.slice(0,1),h=t.blobs.length-2;h>-1;h--){var f=t.blobs[h].strings;f.suffix.slice(-1)!==c&&(f.suffix+=c)}l.delimiter=l.delimiter.slice(1)}for(var h=(i(t,!0),e(t),t.blobs.length-1);h>-1;h--){var m=t.blobs[h],f=t.blobs[h].strings,g=i(m,!0),d=e(m);if(h===t.blobs.length-1){var b=l.suffix.slice(0,1),_=r(m);!_&&y[b]&&(_=a(b,m)),_&&y[b]&&(s(m)||("string"==typeof m.blobs?o(m,"blobs",t,"suffix"):o(m,"suffix",t,"suffix"),"."===l.suffix.slice(0,1)&&(f.suffix+=l.suffix.slice(0,1),l.suffix=l.suffix.slice(1)))),"\xa0"===f.suffix.slice(-1)&&" "===l.suffix.slice(0,1)&&(l.suffix=l.suffix.slice(1)),v[f.suffix.slice(0,1)]&&("string"==typeof m.blobs&&m.blobs.slice(-1)===f.suffix.slice(0,1)&&(f.suffix=f.suffix.slice(1)),f.suffix.slice(-1)===l.suffix.slice(0,1)&&(l.suffix=l.suffix.slice(0,-1))),n(t,t.strings.suffix.slice(0,1))&&(t.strings.suffix=t.strings.suffix.slice(1))}else if(l.delimiter)v[l.delimiter.slice(0,1)]&&l.delimiter.slice(0,1)===f.suffix.slice(-1)&&(t.blobs[h].strings.suffix=t.blobs[h].strings.suffix.slice(0,-1));else{var x=t.blobs[h+1].strings;e(m)||g||!v[f.suffix.slice(-1)]||f.suffix.slice(-1)!==x.prefix.slice(0,1)||(x.prefix=x.prefix.slice(1))}d||g||!y[f.suffix.slice(0,1)]||"string"!=typeof m.blobs||o(m,"blobs",m,"suffix"),this.downward(t.blobs[h])}}}function p(t){var e=t.strings.suffix.slice(0,1);if("string"==typeof t.blobs)for(;b[e];)o(t,"blobs",t,"suffix"),e=t.strings.suffix.slice(0,1);else for(;b[e];)o(t.blobs[t.blobs.length-1],"suffix",t,"suffix"),e=t.strings.suffix.slice(0,1)}function c(t){if("string"==typeof t.blobs)for(var e=t.blobs.slice(-1);_[e];)o(t,"blobs",t,"suffix",!0),e=t.blobs.slice(-1);else for(var e=t.blobs[t.blobs.length-1].strings.suffix.slice(-1);_[e];)o(t.blobs[t.blobs.length-1],"suffix",t,"suffix",!0),e=t.blobs[t.blobs.length-1].strings.suffix.slice(-1)}function f(e){if("object"==typeof e&&"object"==typeof e.blobs&&e.blobs.length){for(var s,i=0,r=e.blobs.length;r>i;i++){for(var a=e.blobs[i],n=!1,o=0,l=a.decorations.length;l>o;o++){var u=a.decorations[o];"@quotes"===u[0]&&(n=!0)}n&&(t?p(a):c(a)),s=this.fix(e.blobs[i]),a.blobs&&"string"==typeof a.blobs&&(s=a.blobs.slice(-1))}return s}}var m={";":!0,":":!0},g={".":!0,"!":!0,"?":!0};this.upward=l,this.leftward=u,this.downward=h,this.fix=f;var d={"!":{".":"!","?":"!?",":":"!",",":"!,",";":"!;"},"?":{"!":"?!",".":"?",":":"?",",":"?,",";":"?;"},".":{"!":".!","?":".?",":":".:",",":".,",";":".;"},":":{"!":"!","?":"?",".":":",",":":,",";":":;"},",":{"!":",!","?":",?",":":",:",".":",.",";":",;"},";":{"!":"!","?":"?",":":";",",":";,",".":";"}},b={},_={},y={},v={};for(var x in d)y[x]=!0,v[x]=!0,m[x]||(b[x]=!0),g[x]||(_[x]=!0);v[" "]=!0,v["\xa0"]=!0;var I={};for(var x in d)for(var S in d[x])I[S]||(I[S]={}),I[S][x]=d[x][S]},e.Engine.Opt=function(){this.has_disambiguate=!1,this.mode="html",this.dates={},this["locale-sort"]=[],this["locale-translit"]=[],this["locale-translat"]=[],this.citeAffixes={persons:{"locale-orig":{prefix:"",suffix:""},"locale-translit":{prefix:"",suffix:""},"locale-translat":{prefix:"",suffix:""}},institutions:{"locale-orig":{prefix:"",suffix:""},"locale-translit":{prefix:"",suffix:""},"locale-translat":{prefix:"",suffix:""}},titles:{"locale-orig":{prefix:"",suffix:""},"locale-translit":{prefix:"",suffix:""},"locale-translat":{prefix:"",suffix:""}},journals:{"locale-orig":{prefix:"",suffix:""},"locale-translit":{prefix:"",suffix:""},"locale-translat":{prefix:"",suffix:""}},publishers:{"locale-orig":{prefix:"",suffix:""},"locale-translit":{prefix:"",suffix:""},"locale-translat":{prefix:"",suffix:""}},places:{"locale-orig":{prefix:"",suffix:""},"locale-translit":{prefix:"",suffix:""},"locale-translat":{prefix:"",suffix:""}}},this["default-locale"]=[],this.update_mode=e.NONE,this.bib_mode=e.NONE,this.sort_citations=!1,this["et-al-min"]=0,this["et-al-use-first"]=1,this["et-al-use-last"]=!1,this["et-al-subsequent-min"]=!1,this["et-al-subsequent-use-first"]=!1,this["demote-non-dropping-particle"]="display-and-sort",this["parse-names"]=!0,this.citation_number_slug=!1,this.trigraph="Aaaa00:AaAa00:AaAA00:AAAA00",this.nodenames=[],this.gender={},this["cite-lang-prefs"]={persons:["orig"],institutions:["orig"],titles:["orig","translat"],journals:["translit"],publishers:["orig"],places:["orig"],number:["translat"]},this.has_layout_locale=!1,this.development_extensions={},this.development_extensions.field_hack=!0,this.development_extensions.locator_date_and_revision=!0,this.development_extensions.locator_parsing_for_plurals=!0,this.development_extensions.locator_label_parse=!0,this.development_extensions.raw_date_parsing=!0,this.development_extensions.clean_up_csl_flaws=!0,this.development_extensions.flip_parentheses_to_braces=!0,this.development_extensions.jurisdiction_subfield=!0,this.development_extensions.static_statute_locator=!1,this.development_extensions.csl_reverse_lookup_support=!1,this.development_extensions.clobber_locator_if_no_statute_section=!1,this.development_extensions.wrap_url_and_doi=!1,this.development_extensions.allow_force_lowercase=!1,this.development_extensions.handle_parallel_articles=!1,this.development_extensions.thin_non_breaking_space_html_hack=!1,this.development_extensions.apply_citation_wrapper=!1,this.development_extensions.main_title_from_short_title=!1,this.development_extensions.uppercase_subtitles=!1,this.development_extensions.normalize_lang_keys_to_lowercase=!1,this.development_extensions.strict_text_case_locales=!1,this.development_extensions.rtl_support=!1,this.development_extensions.strict_page_numbers=!1,this.development_extensions.expect_and_symbol_form=!1,this.development_extensions.require_explicit_legal_case_title_short=!1},e.Engine.Tmp=function(){this.names_max=new e.Stack,this.names_base=new e.Stack,this.givens_base=new e.Stack,this.value=[],this.namepart_decorations={},this.namepart_type=!1,this.area="citation",this.root="citation",this.extension="",this.can_substitute=new e.Stack(0,e.LITERAL),this.element_rendered_ok=!1,this.element_trace=new e.Stack("style"),this.nameset_counter=0,this.group_context=new e.Stack([!1,!1,!1],e.LITERAL),this.term_predecessor=!1,this.jump=new e.Stack(0,e.LITERAL),this.decorations=new e.Stack,this.tokenstore_stack=new e.Stack,this.last_suffix_used="",this.last_names_used=[],this.last_years_used=[],this.years_used=[],this.names_used=[],this.taintedItemIDs={},this.taintedCitationIDs={},this.initialize_with=new e.Stack,this.disambig_request=!1,this["name-as-sort-order"]=!1,this.suppress_decorations=!1,this.disambig_settings=new e.AmbigConfig,this.bib_sort_keys=[],this.prefix=new e.Stack("",e.LITERAL),this.suffix=new e.Stack("",e.LITERAL),this.delimiter=new e.Stack("",e.LITERAL),this.cite_locales=[],this.cite_affixes={citation:!1,bibliography:!1,citation_sort:!1,bibliography_sort:!1},this.strip_periods=0,this.shadow_numbers={}},e.Engine.Fun=function(t){this.match=new e.Util.Match,this.suffixator=new e.Util.Suffixator(e.SUFFIX_CHARS),this.romanizer=new e.Util.Romanizer,this.ordinalizer=new e.Util.Ordinalizer(t),this.long_ordinalizer=new e.Util.LongOrdinalizer},e.Engine.Build=function(){this["alternate-term"]=!1,this.in_bibliography=!1,this.in_style=!1,this.skip=!1,this.postponed_macro=!1,this.layout_flag=!1,this.name=!1,this.form=!1,this.term=!1,this.macro={},this.macro_stack=[],this.text=!1,this.lang=!1,this.area="citation",this.root="citation",this.extension="",this.substitute_level=new e.Stack(0,e.LITERAL),this.names_level=0,this.render_nesting_level=0,this.render_seen=!1},e.Engine.Configure=function(){this.fail=[],this.succeed=[]},e.Engine.Citation=function(t){this.opt={},this.tokens=[],this.srt=new e.Registry.Comparifier(t,"citation_sort"),this.opt.collapse=[],this.opt["disambiguate-add-names"]=!1,this.opt["disambiguate-add-givenname"]=!1,this.opt["disambiguate-add-year-suffix"]=!1,this.opt["givenname-disambiguation-rule"]="by-cite",this.opt["near-note-distance"]=5,this.opt.topdecor=[],this.opt.layout_decorations=[],this.opt.layout_prefix="",this.opt.layout_suffix="",this.opt.layout_delimiter="",this.opt.sort_locales=[],this.opt.max_number_of_names=0,this.root="citation"},e.Engine.Bibliography=function(){this.opt={},this.tokens=[],this.opt.collapse=[],this.opt.topdecor=[],this.opt.layout_decorations=[],this.opt.layout_prefix="",this.opt.layout_suffix="",this.opt.layout_delimiter="",this.opt["line-spacing"]=1,this.opt["entry-spacing"]=1,this.opt.sort_locales=[],this.opt.max_number_of_names=0,this.root="bibliography"
},e.Engine.BibliographySort=function(){this.tokens=[],this.opt={},this.opt.sort_directions=[],this.keys=[],this.opt.topdecor=[],this.root="bibliography"},e.Engine.CitationSort=function(){this.tokens=[],this.opt={},this.opt.sort_directions=[],this.keys=[],this.opt.topdecor=[],this.root="citation"},e.Engine.prototype.previewCitationCluster=function(t,s,i,r){var a=this.opt.mode;this.setOutputFormat(r);var n=this.processCitationCluster(t,s,i,e.PREVIEW);return this.setOutputFormat(a),n[1]},e.Engine.prototype.appendCitationCluster=function(t){for(var e=[],s=this.registry.citationreg.citationByIndex.length,i=0;s>i;i+=1){var r=this.registry.citationreg.citationByIndex[i];e.push([""+r.citationID,r.properties.noteIndex])}return this.processCitationCluster(t,e,[])[1]},e.Engine.prototype.processCitationCluster=function(t,s,i,r){var a,n,o,l,u,h,p,c,f,m,g,d,b,_,y,v;this.debug=!1,this.tmp.citation_errors=[];var x={bibchange:!1};this.setCitationId(t);var I,S,O;if(r===e.PREVIEW){I=this.registry.citationreg.citationByIndex.slice(),S=this.registry.reflist.slice();var A=s.concat([[""+t.citationID,t.properties.noteIndex]]).concat(i),T={},E=[];for(n=0,o=A.length;o>n;n+=1)for(a=this.registry.citationreg.citationById[A[n][0]],l=0,u=a.citationItems.length;u>l;l+=1)T[a.citationItems[l].id]=!0,E.push(""+a.citationItems[l].id);for(O={},n=0,o=S.length;o>n;n+=1)if(!T[S[n].id]){var k=this.registry.registry[S[n].id].ambig,N=this.registry.ambigcites[k];if(N)for(l=0,u=N.length;u>l;l+=1)O[N[l]]=e.cloneAmbigConfig(this.registry.registry[N[l]].disambig)}}this.tmp.taintedCitationIDs={};var R=[],w={};for(n=0,o=t.citationItems.length;o>n;n+=1){d={};for(m in t.citationItems[n])d[m]=t.citationItems[n][m];if(g=this.retrieveItem(""+d.id),g.id&&this.transform.loadAbbreviation("default","hereinafter",g.id),this.remapSectionVariable([[g,d]]),this.opt.development_extensions.locator_date_and_revision&&d.locator){d.locator=""+d.locator;var C=d.locator.indexOf("|");if(C>-1){var L=d.locator;d.locator=L.slice(0,C),L=L.slice(C+1),y=L.match(/^([0-9]{4}-[0-9]{2}-[0-9]{2}).*/),y&&(d["locator-date"]=this.fun.dateparser.parse(y[1]),L=L.slice(y[1].length)),d["locator-revision"]=L.replace(/^\s+/,"").replace(/\s+$/,"")}}this.opt.development_extensions.locator_label_parse&&(!d.locator||-1!==["bill","gazette","legislation","treaty"].indexOf(g.type)||d.label&&"page"!==d.label||(y=e.LOCATOR_LABELS_REGEXP.exec(d.locator),y&&(d.label=e.LOCATOR_LABELS_MAP[y[2]],d.locator=y[3])));var P=[g,d];R.push(P),t.citationItems[n].item=g}t.sortedItems=R;var U=[];for(n=0,o=s.length;o>n;n+=1)a=s[n],this.registry.citationreg.citationById[a[0]].properties.noteIndex=a[1],U.push(this.registry.citationreg.citationById[a[0]]);for(U.push(t),n=0,o=i.length;o>n;n+=1)a=i[n],this.registry.citationreg.citationById[a[0]].properties.noteIndex=a[1],U.push(this.registry.citationreg.citationById[a[0]]);this.registry.citationreg.citationByIndex=U,this.registry.citationreg.citationsByItemId={},this.opt.update_mode===e.POSITION&&(_=[],b=[],v={});var D=[];for(n=0,o=U.length;o>n;n+=1){for(U[n].properties.index=n,l=0,u=U[n].sortedItems.length;u>l;l+=1)d=U[n].sortedItems[l],this.registry.citationreg.citationsByItemId[d[1].id]||(this.registry.citationreg.citationsByItemId[d[1].id]=[],D.push(""+d[1].id)),-1===this.registry.citationreg.citationsByItemId[d[1].id].indexOf(U[n])&&this.registry.citationreg.citationsByItemId[d[1].id].push(U[n]);this.opt.update_mode===e.POSITION&&(U[n].properties.noteIndex?b.push(U[n]):(U[n].properties.noteIndex=0,_.push(U[n])))}if(r!==e.ASSUME_ALL_ITEMS_REGISTERED&&this.updateItems(D),!this.opt.citation_number_sort&&R&&R.length>1&&this.citation_sort.tokens.length>0){for(n=0,o=R.length;o>n;n+=1)R[n][1].sortkeys=e.getSortKeys.call(this,R[n][0],"citation_sort");if(this.opt.grouped_sort&&!t.properties.unsorted){for(n=0,o=R.length;o>n;n+=1){var B=R[n][1].sortkeys;this.tmp.authorstring_request=!0;var j=this.registry.registry[R[n][0].id].disambig;this.tmp.authorstring_request=!0,e.getAmbiguousCite.call(this,R[n][0],j);var q=this.registry.authorstrings[R[n][0].id];this.tmp.authorstring_request=!1,R[n][1].sortkeys=[q].concat(B)}R.sort(this.citation.srt.compareCompositeKeys);var F=!1,M=!1,G=!1;for(n=0,o=R.length;o>n;n+=1)R[n][1].sortkeys[0]!==F&&(G=R[n][1].sortkeys[0],M=R[n][1].sortkeys[1]),R[n][1].sortkeys[0]=""+M+n,F=G}t.properties.unsorted||R.sort(this.citation.srt.compareCompositeKeys)}var V;if(this.opt.update_mode===e.POSITION)for(n=0;2>n;n+=1){V=[_,b][n];var z={},X={};for(l=0,u=V.length;u>l;l+=1){var H=V[l];for(V[l].properties.noteIndex||(V[l].properties.noteIndex=0),V[l].properties.noteIndex=parseInt(V[l].properties.noteIndex,10),l>0&&V[l-1].properties.noteIndex>V[l].properties.noteIndex&&(v={},z={},X={}),h=0,p=H.sortedItems.length;p>h;h+=1)this.registry.registry[H.sortedItems[h][1].id].parallel||(v[H.properties.noteIndex]?v[H.properties.noteIndex]+=1:v[H.properties.noteIndex]=1);for(h=0,p=V[l].sortedItems.length;p>h;h+=1){d=V[l].sortedItems[h];var $=d[0].id,Q=d[1].locator,W=d[1].label;d[0].legislation_id&&($=d[0].legislation_id);var K;if(h>0&&(K=H.sortedItems[h-1][0].legislation_id?H.sortedItems[h-1][0].legislation_id:H.sortedItems[h-1][1].id),r!==e.PREVIEW||H.citationID==t.citationID){var Z={};if(Z.position=d[1].position,Z["first-reference-note-number"]=d[1]["first-reference-note-number"],Z["near-note"]=d[1]["near-note"],d[1]["first-reference-note-number"]=0,d[1]["near-note"]=!1,this.registry.citationreg.citationsByItemId[$]&&"note"===this.opt.xclass&&this.opt.has_disambiguate){var Y=this.registry.registry[$]["citation-count"],J=this.registry.citationreg.citationsByItemId[$].length;if(this.registry.registry[$]["citation-count"]=this.registry.citationreg.citationsByItemId[$].length,"number"==typeof Y){var te=2>Y,ee=2>J;if(te!==ee)for(var se=0,ie=this.registry.citationreg.citationsByItemId[$].length;ie>se;se++)w[this.registry.registry[$].ambig]=!0,this.tmp.taintedCitationIDs[this.registry.citationreg.citationsByItemId[$][se].citationID]=!0}else for(var se=0,ie=this.registry.citationreg.citationsByItemId[$].length;ie>se;se++)w[this.registry.registry[$].ambig]=!0,this.tmp.taintedCitationIDs[this.registry.citationreg.citationsByItemId[$][se].citationID]=!0}var re;if("undefined"==typeof z[$])z[$]=H.properties.noteIndex,this.registry.registry[$]&&(this.registry.registry[$]["first-reference-note-number"]=H.properties.noteIndex),X[$]=H.properties.noteIndex,d[1].position=e.POSITION_FIRST;else{var ae=!1,ne=!1;if(l>0&&(re=V[l-1].sortedItems.slice(-1)[0][1].id,V[l-1].sortedItems[0].slice(-1)[0].legislation_id&&(re=V[l-1].sortedItems[0].slice(-1)[0].legislation_id)),l>0&&0===parseInt(h,10)&&V[l-1].properties.noteIndex!==V[l].properties.noteIndex){var oe=V[l-1].sortedItems,le=!1,ue=V[l-1].sortedItems[0][0].id;for(V[l-1].sortedItems[0][0].legislation_id&&(ue=V[l-1].sortedItems[0][0].legislation_id),(ue==$&&V[l-1].properties.noteIndex>=V[l].properties.noteIndex-1||V[l-1].sortedItems[0][1].id==this.registry.registry[d[1].id].parallel)&&(1===v[V[l-1].properties.noteIndex]||0===V[l-1].properties.noteIndex)&&(le=!0),c=0,f=oe.slice(1).length;f>c;c+=1){var he=oe.slice(1)[c];this.registry.registry[he[1].id].parallel&&this.registry.registry[he[1].id].parallel!=this.registry.registry[he[1].id]||(le=!1)}le?ae=!0:ne=!0}else h>0&&K==$?ae=!0:0===h&&V[l-1].properties.noteIndex==V[l].properties.noteIndex&&V[l-1].sortedItems.length&&re==$?ae=!0:ne=!0;var pe,ce,fe,me,ge;if(ae&&(pe=h>0?H.sortedItems[h-1][1]:V[l-1].sortedItems[0][1],pe.locator?(fe=pe.label?pe.label:"",ce=""+pe.locator+fe):ce=pe.locator,Q?(ge=W?W:"",me=""+Q+ge):me=Q),ae&&ce&&!me&&(ae=!1,ne=!0),ae&&(!ce&&me?d[1].position=e.POSITION_IBID_WITH_LOCATOR:ce||me?ce&&me===ce?d[1].position=e.POSITION_IBID:ce&&me&&me!==ce?d[1].position=e.POSITION_IBID_WITH_LOCATOR:(ae=!1,ne=!0):d[1].position=e.POSITION_IBID),ne&&(d[1].position=e.POSITION_SUBSEQUENT),(ne||ae)&&z[$]!=H.properties.noteIndex&&(d[1]["first-reference-note-number"]=z[$],this.registry.registry[$])){var de=this.registry.citationreg.citationsByItemId[$][0].properties.noteIndex,be=H.properties.noteIndex;this.registry.registry[$]["first-reference-note-number"]=de>be?be:de}}if(H.properties.noteIndex){var _e=parseInt(H.properties.noteIndex,10)-parseInt(X[$],10);d[1].position!==e.POSITION_FIRST&&_e<=this.citation.opt["near-note-distance"]&&(d[1]["near-note"]=!0),X[$]=H.properties.noteIndex}if(H.citationID!=t.citationID)for(c=0,f=e.POSITION_TEST_VARS.length;f>c;c+=1){var ye=e.POSITION_TEST_VARS[c];d[1][ye]!==Z[ye]&&("first-reference-note-number"===ye&&(w[this.registry.registry[$].ambig]=!0),this.tmp.taintedCitationIDs[H.citationID]=!0,"first-reference-note-number"===ye&&(this.tmp.taintedItemIDs[$]=!0))}this.sys.variableWrapper&&(d[1].index=H.properties.index,d[1].noteIndex=H.properties.noteIndex)}else"undefined"==typeof z[d[1].id]?(z[$]=H.properties.noteIndex,X[$]=H.properties.noteIndex):X[$]=H.properties.noteIndex}}}if(this.opt.citation_number_sort&&R&&R.length>1&&this.citation_sort.tokens.length>0){for(n=0,o=R.length;o>n;n+=1)R[n][1].sortkeys=e.getSortKeys.call(this,R[n][0],"citation_sort");t.properties.unsorted||R.sort(this.citation.srt.compareCompositeKeys)}for(m in this.tmp.taintedItemIDs)if(this.tmp.taintedItemIDs.hasOwnProperty(m)&&(V=this.registry.citationreg.citationsByItemId[m]))for(n=0,o=V.length;o>n;n+=1)this.tmp.taintedCitationIDs[V[n].citationID]=!0;var ve=[];if(r===e.PREVIEW){try{ve=this.process_CitationCluster.call(this,t.sortedItems,t.citationID)}catch(xe){e.error("Error running CSL processor for preview: "+xe)}for(this.registry.citationreg.citationByIndex=I,this.registry.citationreg.citationById={},n=0,o=I.length;o>n;n+=1)this.registry.citationreg.citationById[I[n].citationID]=I[n];var Ie=[];for(n=0,o=S.length;o>n;n+=1)Ie.push(""+S[n].id);this.updateItems(Ie);for(m in O)O.hasOwnProperty(m)&&(this.registry.registry[m].disambig=O[m])}else{for(var Se in w)this.disambiguate.run(Se,t);var Oe;for(m in this.tmp.taintedCitationIDs)if(m!=t.citationID){var Ae=this.registry.citationreg.citationById[m];this.tmp.citation_pos=Ae.properties.index,this.tmp.citation_note_index=Ae.properties.noteIndex,this.tmp.citation_id=""+Ae.citationID,Oe=[],Oe.push(Ae.properties.index),Oe.push(this.process_CitationCluster.call(this,Ae.sortedItems,Ae.citationID)),ve.push(Oe)}this.tmp.taintedItemIDs={},this.tmp.taintedCitationIDs={},this.tmp.citation_pos=t.properties.index,this.tmp.citation_note_index=t.properties.noteIndex,this.tmp.citation_id=""+t.citationID,Oe=[],Oe.push(s.length),Oe.push(this.process_CitationCluster.call(this,R,t.citationID)),ve.push(Oe),ve.sort(function(t,e){return t[0]>e[0]?1:t[0]<e[0]?-1:0})}return x.citation_errors=this.tmp.citation_errors.slice(),[x,ve]},e.Engine.prototype.process_CitationCluster=function(t,s){var i;return this.parallel.StartCitation(t),i=e.getCitationCluster.call(this,t,s)},e.Engine.prototype.makeCitationCluster=function(t){var s,i,r,a,n,o,l;for(s=[],n=t.length,a=0;n>a;a+=1){o={};for(var u in t[a])o[u]=t[a][u];if(l=this.retrieveItem(""+o.id),this.opt.development_extensions.locator_label_parse&&o.locator&&-1===["bill","gazette","legislation","treaty"].indexOf(l.type)&&(!o.label||"page"===o.label)){var h=e.LOCATOR_LABELS_REGEXP.exec(o.locator);h&&(o.label=e.LOCATOR_LABELS_MAP[h[2]],o.locator=h[3])}i=[l,o],s.push(i)}if(this.remapSectionVariable(s),s&&s.length>1&&this.citation_sort.tokens.length>0){for(n=s.length,a=0;n>a;a+=1)s[a][1].sortkeys=e.getSortKeys.call(this,s[a][0],"citation_sort");s.sort(this.citation.srt.compareCompositeKeys)}return this.tmp.citation_errors=[],this.parallel.StartCitation(s),r=e.getCitationCluster.call(this,s)},e.getAmbiguousCite=function(t,s,i){var r,a,n=this.tmp.group_context.value().slice();this.tmp.disambig_request=s?s:!1;var o={position:1};this.registry.registry[t.id]&&this.registry.citationreg.citationsByItemId&&this.registry.citationreg.citationsByItemId[t.id]&&this.registry.citationreg.citationsByItemId[t.id].length&&i&&"by-cite"===this.citation.opt["givenname-disambiguation-rule"]&&(o["first-reference-note-number"]=this.registry.registry[t.id]["first-reference-note-number"]),this.tmp.area="citation",r=this.parallel.use_parallels,this.parallel.use_parallels=!1,this.tmp.suppress_decorations=!0,this.tmp.just_looking=!0,e.getCite.call(this,t,o);for(var l=0,u=this.output.queue.length;u>l;l+=1)e.Output.Queue.purgeEmptyBlobs(this.output.queue[l]);if(this.opt.development_extensions.clean_up_csl_flaws)for(var h=0,p=this.output.queue.length;p>h;h+=1)this.output.adjust.upward(this.output.queue[h]),this.output.adjust.leftward(this.output.queue[h]),this.output.adjust.downward(this.output.queue[h]),this.output.adjust.fix(this.output.queue[h]);return a=this.output.string(this,this.output.queue),this.tmp.just_looking=!1,this.tmp.suppress_decorations=!1,this.parallel.use_parallels=r,this.tmp.group_context.replace(n,"literal"),a},e.getSpliceDelimiter=function(t,s){if(t&&!this.tmp.have_collapsed&&"string"==typeof this.citation.opt["after-collapse-delimiter"])this.tmp.splice_delimiter=this.citation.opt["after-collapse-delimiter"];else if(this.tmp.have_collapsed&&"in-text"===this.opt.xclass&&this.opt.update_mode!==e.NUMERIC)this.tmp.splice_delimiter=", ";else if(this.tmp.use_cite_group_delimiter)this.tmp.splice_delimiter=this.citation.opt.cite_group_delimiter;else if(this.tmp.cite_locales[s-1]){var i=this.tmp.cite_affixes[this.tmp.area][this.tmp.cite_locales[s-1]];i&&i.delimiter&&(this.tmp.splice_delimiter=i.delimiter)}return this.tmp.splice_delimiter||(this.tmp.splice_delimiter=""),this.tmp.splice_delimiter},e.getCitationCluster=function(t,s){var i,r,a,n,o,l,u,h,p,c,f,m,g,d,b,_,y,v,x;this.tmp.last_primary_names_string=!1,this.tmp.nestedBraces=!1,v=e.getSafeEscape(this),this.tmp.area="citation",i="",r=[],this.tmp.last_suffix_used="",this.tmp.last_names_used=[],this.tmp.last_years_used=[],this.tmp.backref_index=[],this.tmp.cite_locales=[];var I=!1;if("note"===this.opt.xclass&&this.citation.opt.suppressTrailingPunctuation&&(I=!0),s&&this.registry.citationreg.citationById[s].properties["suppress-trailing-punctuation"]&&(I=!0),"note"===this.opt.xclass){for(var S=[],O=!1,A=!1,T=!1,E=[],k=0,N=t.length;N>k;k+=1){var R=t[k][0].type,w=t[k][0].title,C=t[k][1].position,L=t[k][0].id;w&&"legal_case"===R&&L!==T&&C&&((w!==O||0===S.length)&&(E=[],S.push(E)),E.push(t[k][1])),O=w,A=C,T=L}for(k=0,N=S.length;N>k;k+=1)if(E=S[k],!(E.length<2)){var P=E.slice(-1)[0].locator;if(P)for(var U=0,D=E.length-1;D>U;U+=1)E[U].locator&&(P=!1);P&&(E[0].locator=P,delete E.slice(-1)[0].locator,E[0].label=E.slice(-1)[0].label,E.slice(-1)[0].label&&delete E.slice(-1)[0].label)}}for(a=[],n=t.length,o=0;n>o;o+=1){if(g=t[o][0],l=t[o][1],u=this.tmp.have_collapsed,h={},o>0?e.getCite.call(this,g,l,""+t[o-1][0].id):(this.tmp.term_predecessor=!1,e.getCite.call(this,g,l)),this.tmp.cite_renders_content||(x={citationID:""+this.tmp.citation_id,index:this.tmp.citation_pos,noteIndex:this.tmp.citation_note_index,itemID:""+g.id,citationItems_pos:o,error_code:e.ERROR_NO_RENDERED_FORM},this.tmp.citation_errors.push(x)),o===t.length-1&&this.parallel.ComposeSet(),h.splice_delimiter=e.getSpliceDelimiter.call(this,u,o),l&&l["author-only"]&&(this.tmp.suppress_decorations=!0),o>0){y=t[o-1][1];var B=y.suffix&&"."===y.suffix.slice(-1),j=!y.suffix&&l.prefix&&"."===l.prefix.slice(0,1);if(B||j){var q=h.splice_delimiter.indexOf(" ");h.splice_delimiter=q>-1&&!j?h.splice_delimiter.slice(q):""}}h.suppress_decorations=this.tmp.suppress_decorations,h.have_collapsed=this.tmp.have_collapsed,a.push(h)}this.tmp.has_purged_parallel=!1,this.parallel.PruneOutputQueue(this),p=0,m=this.output.queue.slice();var F=({strings:{suffix:this.citation.opt.layout_suffix,delimiter:this.citation.opt.layout_delimiter}},this.citation.opt.layout_suffix),M=this.tmp.cite_locales[this.tmp.cite_locales.length-1];M&&this.tmp.cite_affixes[this.tmp.area][M]&&this.tmp.cite_affixes[this.tmp.area][M].suffix&&(F=this.tmp.cite_affixes[this.tmp.area][M].suffix),e.TERMINAL_PUNCTUATION.slice(0,-1).indexOf(F.slice(0,1))>-1&&(F=F.slice(0,1));var G=this.citation.opt.layout_delimiter;G||(G=""),e.TERMINAL_PUNCTUATION.slice(0,-1).indexOf(G.slice(0,1))>-1&&(G=G.slice(0,1));for(var V=F,k=0,N=this.output.queue.length;N>k;k+=1)e.Output.Queue.purgeEmptyBlobs(this.output.queue[k]);if(!this.tmp.suppress_decorations&&this.output.queue.length&&(this.opt.development_extensions.apply_citation_wrapper&&this.sys.wrapCitationEntry&&!this.tmp.just_looking&&"citation"===this.tmp.area||(I||(this.output.queue[this.output.queue.length-1].strings.suffix=V),this.output.queue[0].strings.prefix=this.citation.opt.layout_prefix)),this.opt.development_extensions.clean_up_csl_flaws)for(var U=0,D=this.output.queue.length;D>U;U+=1)this.output.adjust.upward(this.output.queue[U]),this.output.adjust.leftward(this.output.queue[U]),this.output.adjust.downward(this.output.queue[U]),this.tmp.last_chr=this.output.adjust.fix(this.output.queue[U]);for(o=0,n=m.length;n>o;o+=1){if(this.output.queue=[m[o]],this.tmp.suppress_decorations=a[o].suppress_decorations,this.tmp.splice_delimiter=a[o].splice_delimiter,m[o].parallel_delimiter&&(this.tmp.splice_delimiter=m[o].parallel_delimiter),this.tmp.have_collapsed=a[o].have_collapsed,c=this.output.string(this,this.output.queue),this.tmp.suppress_decorations=!1,"string"==typeof c)return this.tmp.suppress_decorations=!1,c;if("object"==typeof c&&0===c.length&&!l["suppress-author"])if(this.tmp.has_purged_parallel)c.push("");else{var z="[CSL STYLE ERROR: reference with no printed form.]",X=0===o?v(this.citation.opt.layout_prefix):"",H=o===m.length-1?v(this.citation.opt.layout_suffix):"";c.push(X+z+H)}if(r.length&&"string"==typeof c[0]){c.reverse();var $=c.pop();$&&","===$.slice(0,1)?r.push($):"string"==typeof r.slice(-1)[0]&&","===r.slice(-1)[0].slice(-1)?r.push(" "+$):$&&r.push(v(this.tmp.splice_delimiter)+$)}else c.reverse(),f=c.pop(),"undefined"!=typeof f&&(r.length&&"string"==typeof r[r.length-1]&&(r[r.length-1]+=f.successor_prefix),r.push(f));for(d=c.length,b=0;d>b;b+=1)_=c[b],"string"!=typeof _?(f=c.pop(),"undefined"!=typeof f&&r.push(f)):r.push(v(this.tmp.splice_delimiter)+_);0!==r.length||t[o][1]["suppress-author"]||(p+=1)}if(i+=this.output.renderBlobs(r),i&&(this.output.nestedBraces=!1,!this.tmp.suppress_decorations))for(n=this.citation.opt.layout_decorations.length,o=0;n>o;o+=1)h=this.citation.opt.layout_decorations[o],"normal"!==h[1]&&(i=this.fun.decorate[h[0]][h[1]](this,i));return this.tmp.suppress_decorations=!1,i},e.getCite=function(t,s,i){var r,a;for(this.tmp.cite_renders_content=!1,this.parallel.StartCite(t,s,i),e.citeStart.call(this,t,s),r=0,this.nameOutput=new e.NameOutput(this,t,s);r<this[this.tmp.area].tokens.length;)r=e.tokenExec.call(this,this[this.tmp.area].tokens[r],t,s);return e.citeEnd.call(this,t,s),this.parallel.CloseCite(this),this.tmp.cite_renders_content||this.tmp.just_looking||"bibliography"===this.tmp.area&&(a={index:this.tmp.bibliography_pos,itemID:""+t.id,error_code:e.ERROR_NO_RENDERED_FORM},this.tmp.bibliography_errors.push(a)),""+t.id},e.citeStart=function(t,s){if(this.tmp.disambiguate_count=0,this.tmp.disambiguate_maxMax=0,this.tmp.same_author_as_previous_cite=!1,this.tmp.subsequent_author_substitute_ok=this.tmp.suppress_decorations?!1:!0,this.tmp.lastchr="",this.tmp.have_collapsed="citation"===this.tmp.area&&this.citation.opt.collapse&&this.citation.opt.collapse.length?!0:!1,this.tmp.render_seen=!1,this.tmp.disambig_request&&!this.tmp.disambig_override?this.tmp.disambig_settings=this.tmp.disambig_request:this.registry.registry[t.id]&&!this.tmp.disambig_override?(this.tmp.disambig_request=this.registry.registry[t.id].disambig,this.tmp.disambig_settings=this.registry.registry[t.id].disambig):this.tmp.disambig_settings=new e.AmbigConfig,"citation"!==this.tmp.area&&this.registry.registry[t.id]&&(this.tmp.disambig_restore=e.cloneAmbigConfig(this.registry.registry[t.id].disambig),"bibliography"===this.tmp.area&&this.tmp.disambig_settings&&this.tmp.disambig_override&&(this.opt["disambiguate-add-names"]&&(this.tmp.disambig_settings.names=this.registry.registry[t.id].disambig.names.slice(),this.tmp.disambig_request.names=this.registry.registry[t.id].disambig.names.slice()),this.opt["disambiguate-add-givenname"]))){this.tmp.disambig_request=this.tmp.disambig_settings,this.tmp.disambig_settings.givens=this.registry.registry[t.id].disambig.givens.slice(),this.tmp.disambig_request.givens=this.registry.registry[t.id].disambig.givens.slice();for(var i=0,r=this.tmp.disambig_settings.givens.length;r>i;i+=1)this.tmp.disambig_settings.givens[i]=this.registry.registry[t.id].disambig.givens[i].slice();for(var i=0,r=this.tmp.disambig_request.givens.length;r>i;i+=1)this.tmp.disambig_request.givens[i]=this.registry.registry[t.id].disambig.givens[i].slice()}if(this.tmp.names_used=[],this.tmp.nameset_counter=0,this.tmp.years_used=[],this.tmp.names_max.clear(),this.tmp.splice_delimiter=this[this.tmp.area].opt.layout_delimiter,this.bibliography_sort.keys=[],this.citation_sort.keys=[],this.tmp.has_done_year_suffix=!1,this.tmp.last_cite_locale=!1,!this.tmp.just_looking&&s&&!s.position&&this.registry.registry[t.id]&&(this.tmp.disambig_restore=e.cloneAmbigConfig(this.registry.registry[t.id].disambig)),this.tmp.shadow_numbers={},this.setNumberLabels(t),this.tmp.first_name_string=!1,this.opt.development_extensions.flip_parentheses_to_braces&&s&&s.prefix){var a=e.checkNestedBraceOpen.exec(s.prefix),n=e.checkNestedBraceClose.exec(s.prefix);a?this.output.nestedBraces=n?n[0].length<a[0].length?e.NestedBraces:!1:e.NestedBraces:n&&(this.output.nestedBraces=!1)}},e.citeEnd=function(t,s){if(this.tmp.disambig_restore){this.registry.registry[t.id].disambig.names=this.tmp.disambig_restore.names.slice(),this.registry.registry[t.id].disambig.givens=this.tmp.disambig_restore.givens.slice();for(var i=0,r=this.registry.registry[t.id].disambig.givens.length;r>i;i+=1)this.registry.registry[t.id].disambig.givens[i]=this.tmp.disambig_restore.givens[i].slice()}if(this.tmp.disambig_restore=!1,this.tmp.last_suffix_used=s&&s.suffix?s.suffix:"",this.tmp.last_years_used=this.tmp.years_used.slice(),this.tmp.last_names_used=this.tmp.names_used.slice(),this.tmp.cut_var=!1,this.tmp.disambig_request=!1,this.tmp.cite_locales.push(this.tmp.last_cite_locale),this.tmp.issued_date&&this.tmp.renders_collection_number){for(var a=[],i=this.tmp.issued_date.list.length-1;i>this.tmp.issued_date.pos;i+=-1)a.push(this.tmp.issued_date.list.pop());for(this.tmp.issued_date.list.pop(),i=a.length-1;i>-1;i+=-1)this.tmp.issued_date.list.push(a.pop());this.parallel.use_parallels&&(this.parallel.cite.issued=!1)}if(this.tmp.issued_date=!1,this.tmp.renders_collection_number=!1,this.opt.development_extensions.flip_parentheses_to_braces&&s&&s.suffix){var n=e.checkNestedBraceOpen.exec(s.suffix),o=e.checkNestedBraceClose.exec(s.suffix);o?this.output.nestedBraces=n?n[0].length<o[0].length?!1:e.NestedBraces:!1:n&&(this.output.nestedBraces=e.NestedBraces)}},e.Engine.prototype.makeBibliography=function(t){var s,i,r,a,n,o,l,u,h;if(s=!1,!this.bibliography.tokens.length)return!1;"string"==typeof t&&(this.opt.citation_number_slug=t,t=!1),i=e.getBibliographyEntries.call(this,t),u=i[0],h=i[1];var p=i[2];for(r={maxoffset:0,entryspacing:this.bibliography.opt["entry-spacing"],linespacing:this.bibliography.opt["line-spacing"],"second-field-align":!1,entry_ids:u,bibliography_errors:this.tmp.bibliography_errors.slice(),done:p},this.bibliography.opt["second-field-align"]&&(r["second-field-align"]=this.bibliography.opt["second-field-align"]),a=0,o=this.registry.reflist.length,l=0;o>l;l+=1)n=this.registry.reflist[l],n.offset>r.maxoffset&&(r.maxoffset=n.offset);return this.bibliography.opt.hangingindent&&(r.hangingindent=this.bibliography.opt.hangingindent),r.bibstart=this.fun.decorate.bibstart,r.bibend=this.fun.decorate.bibend,this.opt.citation_number_slug=!1,[r,h]},e.getBibliographyEntries=function(t){function s(t,e){return t===e?!0:!1}function i(t,e){for(m=e.length,g=0;m>g;g+=1)if(s(t,e[g]))return!0;return!1}function r(t,e){return"none"!==t&&t||e?"string"==typeof e?s(t,e):e?i(t,e):!1:!0}var a,n,o,l,u,h,p,c,f,m,g,d,b,_,y,v,x,I,S,O,A,T,E,k;a=[],T=[],this.tmp.area="bibliography",this.tmp.last_rendered_name=!1,this.tmp.bibliography_errors=[],this.tmp.bibliography_pos=0,n=t&&t.page_start&&t.page_length?this.registry.getSortedIds():this.retrieveItems(this.registry.getSortedIds()),this.tmp.disambig_override=!0,I={};var N;if(t&&t.page_start&&t.page_length&&(N=0,t.page_start!==!0))for(y=0,v=n.length;v>y&&(I[n[y]]=!0,t.page_start!=n[y]);y+=1);var R=[];for(y=0,v=n.length;v>y;y+=1){if(t&&t.page_start&&t.page_length){if(I[n[y]])continue;if(c=this.retrieveItem(n[y]),N===t.page_length)break}else if(c=n[y],I[c.id])continue;if(t){if(o=!0,t.include){for(o=!1,E=0,k=t.include.length;k>E;E+=1)if(f=t.include[E],r(f.value,c[f.field])){o=!0;break}}else if(t.exclude){for(l=!1,E=0,k=t.exclude.length;k>E;E+=1)if(f=t.exclude[E],r(f.value,c[f.field])){l=!0;break}l&&(o=!1)}else if(t.select){for(o=!1,u=!0,E=0,k=t.select.length;k>E;E+=1)f=t.select[E],r(f.value,c[f.field])||(u=!1);u&&(o=!0)}if(t.quash){for(u=!0,E=0,k=t.quash.length;k>E;E+=1)f=t.quash[E],r(f.value,c[f.field])||(u=!1);u&&(o=!1)}if(!o)continue}if(h=new e.Token("group",e.START),h.decorations=[["@bibliography","entry"]].concat(this.bibliography.opt.layout_decorations),this.output.startTag("bib_entry",h),c.system_id&&this.sys.embedBibliographyEntry?this.output.current.value().item_id=c.system_id:this.output.current.value().system_id=c.id,S=[[{id:""+c.id},c]],b=[],!this.registry.registry[c.id].master||t&&t.page_start&&t.page_length)this.registry.registry[c.id].siblings||(this.parallel.StartCitation(S),this.tmp.term_predecessor=!1,b.push(""+e.getCite.call(this,c)),t&&t.page_start&&t.page_length&&(N+=1));else{for(_=!0,this.parallel.StartCitation(S),this.output.queue[0].strings.delimiter=", ",this.tmp.term_predecessor=!1,b.push(""+e.getCite.call(this,c)),I[c.id]=!0,x=this.registry.registry[c.id].siblings,E=0,k=x.length;k>E;E+=1){var w=this.registry.registry[c.id].siblings[E];O=this.retrieveItem(w),b.push(""+e.getCite.call(this,O)),I[O.id]=!0}this.parallel.ComposeSet(),this.parallel.PruneOutputQueue()}if(T.push(""),this.tmp.bibliography_pos+=1,R.push(b),this.output.endTag("bib_entry"),this.output.queue[0].blobs.length&&this.output.queue[0].blobs[0].blobs.length){for(_||!this.output.queue[0].blobs[0].blobs[0].strings?(d=this.output.queue[0].blobs,_=!1):d=this.output.queue[0].blobs[0].blobs,E=d.length-1;E>-1;E+=-1)if(d[E].blobs&&0!==d[E].blobs.length){var C,L=this.tmp.cite_locales[this.tmp.cite_locales.length-1];C=this.tmp.cite_affixes[this.tmp.area][L]?this.tmp.cite_affixes[this.tmp.area][L].suffix:this.bibliography.opt.layout_suffix,A=C.slice(0,1),A&&d[E].strings.suffix.slice(-1)===A&&(d[E].strings.suffix=d[E].strings.suffix.slice(0,-1)),d[E].strings.suffix+=C;break}d[0].strings.prefix=this.bibliography.opt.layout_prefix+d[0].strings.prefix}for(var E=0,k=this.output.queue.length;k>E;E+=1)e.Output.Queue.purgeEmptyBlobs(this.output.queue[E]);for(var E=0,k=this.output.queue.length;k>E;E+=1)this.output.adjust.upward(this.output.queue[E]),this.output.adjust.leftward(this.output.queue[E]),this.output.adjust.downward(this.output.queue[E],!0),this.output.adjust.fix(this.output.queue[E]);p=this.output.string(this,this.output.queue)[0],p||(p="\n[CSL STYLE ERROR: reference with no printed form.]\n"),a.push(p)}var P=!1;if(t&&t.page_start&&t.page_length){var U=n.slice(-1)[0],D=R.slice(-1)[0];U&&D&&U!=D||(P=!0)}return this.tmp.disambig_override=!1,[R,a,P]},e.Engine.prototype.setCitationId=function(t,e){var s,i,r;if(s=!1,!t.citationID||e){for(i=Math.floor(1e14*Math.random());;){if(r=0,!this.registry.citationreg.citationById[i]){t.citationID=i.toString(32);break}r=!r&&5e13>i?1:-1,i+=1===r?1:-1}s=""+i}return this.registry.citationreg.citationById[t.citationID]=t,s},e.Engine.prototype.rebuildProcessorState=function(t,s,i){t||(t=[]),s||(s="html");for(var r={},a=[],n=0,o=t.length;o>n;n+=1)for(var l=0,u=t[n].citationItems.length;u>l;l+=1){var h=""+t[n].citationItems[l].id;r[h]||a.push(h),r[h]=!0}this.updateItems(a);var p=[],c=[],f=[],m=this.opt.mode;this.setOutputFormat(s);for(var n=0,o=t.length;o>n;n+=1){var g=this.processCitationCluster(t[n],p,c,e.ASSUME_ALL_ITEMS_REGISTERED);p.push([t[n].citationID,t[n].properties.noteIndex]);for(var l=0,u=g[1].length;u>l;l+=1){var d=g[1][l][0];f[d]=[p[d][0],p[d][1],g[1][l][1]]}}return this.updateUncitedItems(i),this.setOutputFormat(m),f},e.Engine.prototype.restoreProcessorState=function(t){var s,i,r,a,n,o,l,u,h,p;u=[],h=[],t||(t=[]);var c=[],f={};for(s=0,i=t.length;i>s;s+=1)f[t[s].citationID]&&this.setCitationId(t[s],!0),f[t[s].citationID]=!0,c.push(t[s].properties.index);var m=t.slice();for(m.sort(function(t,e){return t.properties.index<e.properties.index?-1:t.properties.index>e.properties.index?1:0}),s=0,i=m.length;i>s;s+=1)m[s].properties.index=s;for(s=0,i=m.length;i>s;s+=1){for(p=[],r=0,a=m[s].citationItems.length;a>r;r+=1)n=m[s].citationItems[r],"undefined"==typeof n.sortkeys&&(n.sortkeys=[]),o=this.retrieveItem(""+n.id),l=[o,n],p.push(l),m[s].citationItems[r].item=o,h.push(""+n.id);m[s].properties.unsorted||p.sort(this.citation.srt.compareCompositeKeys),m[s].sortedItems=p,this.registry.citationreg.citationById[m[s].citationID]=m[s]}for(this.updateItems(h),s=0,i=t.length;i>s;s+=1)u.push([""+t[s].citationID,t[s].properties.noteIndex]);var g=[];return t&&t.length?g=this.processCitationCluster(t[0],[],u.slice(1)):(this.registry=new e.Registry(this),this.tmp=new e.Engine.Tmp,this.disambiguate=new e.Disambiguation(this)),g},e.Engine.prototype.updateItems=function(t,e,s){var i=this.tmp.area;if(this.registry.init(t),s)for(var r in this.registry.ambigcites)this.registry.ambigsTouched[r]=!0;return this.registry.dodeletes(this.registry.myhash),this.registry.doinserts(this.registry.mylist),this.registry.dorefreshes(),this.registry.rebuildlist(),this.registry.setsortkeys(),this.registry.setdisambigs(),e||this.registry.sorttokens(),this.registry.renumber(),this.tmp.area=i,this.registry.getSortedIds()},e.Engine.prototype.updateUncitedItems=function(t,e){if(t||(t=[]),"object"==typeof t)if("undefined"==typeof t.length){var s=t;t=[];for(var i in s)t.push(i)}else if("number"==typeof t.length)for(var s={},r=0,a=t.length;a>r;r+=1)s[t[r]]=!0;return this.registry.init(t,!0),this.registry.dopurge(s),this.registry.doinserts(this.registry.mylist),this.registry.dorefreshes(),this.registry.rebuildlist(),this.registry.setsortkeys(),this.registry.setdisambigs(),e||this.registry.sorttokens(),this.registry.renumber(),this.registry.getSortedIds()},e.localeResolve=function(t,s){var i,r;return s||(s="en-US"),t||(t=s),i={},r=t.split(/[\-_]/),i.base=e.LANG_BASES[r[0]],"undefined"==typeof i.base?(e.debug("Warning: unknown locale "+t+", setting fallback to "+s),{base:s,best:t,bare:r[0]}):(1===r.length&&(i.generic=!0),i.best=1===r.length||"x"===r[1]?i.base.replace("_","-"):r.slice(0,2).join("-"),i.base=i.base.replace("_","-"),i.bare=r[0],i)},e.Engine.prototype.localeConfigure=function(t,e){var s;if(this.opt.development_extensions.normalize_lang_keys_to_lowercase&&(t.best=t.best.toLowerCase(),t.bare=t.bare.toLowerCase(),t.base=t.base.toLowerCase()),(!e||!this.locale[t.best])&&(s=this.sys.xml.makeXml(this.sys.retrieveLocale("en-US")),this.localeSet(s,"en-US",t.best),"en-US"!==t.best&&(t.base!==t.best&&(s=this.sys.xml.makeXml(this.sys.retrieveLocale(t.base)),this.localeSet(s,t.base,t.best)),s=this.sys.xml.makeXml(this.sys.retrieveLocale(t.best)),this.localeSet(s,t.best,t.best)),this.localeSet(this.cslXml,"",t.best),this.localeSet(this.cslXml,t.bare,t.best),t.base!==t.best&&this.localeSet(this.cslXml,t.base,t.best),this.localeSet(this.cslXml,t.best,t.best),"undefined"==typeof this.locale[t.best].terms["page-range-delimiter"]&&(this.locale[t.best].terms["page-range-delimiter"]=["fr","pt"].indexOf(t.best.slice(0,2).toLowerCase())>-1?"-":"\u2013"),"undefined"==typeof this.locale[t.best].terms["year-range-delimiter"]&&(this.locale[t.best].terms["year-range-delimiter"]="\u2013"),"undefined"==typeof this.locale[t.best].terms["citation-range-delimiter"]&&(this.locale[t.best].terms["citation-range-delimiter"]="\u2013"),this.opt.development_extensions.normalize_lang_keys_to_lowercase)){for(var i=["default-locale","locale-sort","locale-translit","locale-translat"],r=0,a=i.length;a>r;r+=1)for(var n=0,o=this.opt[i[r]].length;o>n;n+=1)this.opt[i[r]][n]=this.opt[i[r]][n].toLowerCase();this.opt.lang=this.opt.lang.toLowerCase()}},e.Engine.prototype.localeSet=function(t,s,i){var r,a,n,o,l,u,h,p,c,f,m,g,d,b,_,y;if(s=s.replace("_","-"),i=i.replace("_","-"),this.opt.development_extensions.normalize_lang_keys_to_lowercase&&(s=s.toLowerCase(),i=i.toLowerCase()),this.locale[i]||(this.locale[i]={},this.locale[i].terms={},this.locale[i].opts={},this.locale[i].opts["skip-words"]=e.SKIP_WORDS,this.locale[i].opts["leading-noise-words"]||(this.locale[i].opts["leading-noise-words"]=[]),this.locale[i].dates={},this.locale[i].ord={"1.0.1":!1,keys:{}},this.locale[i]["noun-genders"]={}),a=this.sys.xml.makeXml(),this.sys.xml.nodeNameIs(t,"locale"))a=t;
else for(n=this.sys.xml.getNodesByName(t,"locale"),l=0,g=this.sys.xml.numberofnodes(n);g>l;l+=1)if(r=n[l],this.sys.xml.getAttributeValue(r,"lang","xml")===s){a=r;break}for(n=this.sys.xml.getNodesByName(a,"type"),_=0,y=this.sys.xml.numberofnodes(n);y>_;_+=1){var v=n[_],x=this.sys.xml.getAttributeValue(v,"name"),I=this.sys.xml.getAttributeValue(v,"gender");this.opt.gender[x]=I}var S=this.sys.xml.getNodesByName(a,"term","ordinal").length;if(S){for(var O in this.locale[i].ord.keys)delete this.locale[i].terms[O];this.locale[i].ord={"1.0.1":!1,keys:{}}}n=this.sys.xml.getNodesByName(a,"term");var A={"last-digit":{},"last-two-digits":{},"whole-number":{}},T=!1,E={};for(l=0,g=this.sys.xml.numberofnodes(n);g>l;l+=1){if(u=n[l],p=this.sys.xml.getAttributeValue(u,"name"),"sub verbo"===p&&(p="sub-verbo"),"ordinal"===p.slice(0,7)){{this.sys.xml.getNodeValue(u)}if("ordinal"===p)T=!0;else{var k=this.sys.xml.getAttributeValue(u,"match"),N=p.slice(8),d=this.sys.xml.getAttributeValue(u,"gender-form");d||(d="neuter"),k||(k="last-two-digits","0"===N.slice(0,1)&&(k="last-digit")),"0"===N.slice(0,1)&&(N=N.slice(1)),A[k][N]||(A[k][N]={}),A[k][N][d]=p}this.locale[i].ord.keys[p]=!0}"undefined"==typeof this.locale[i].terms[p]&&(this.locale[i].terms[p]={}),h="long",d=!1,this.sys.xml.getAttributeValue(u,"form")&&(h=this.sys.xml.getAttributeValue(u,"form")),this.sys.xml.getAttributeValue(u,"gender-form")&&(d=this.sys.xml.getAttributeValue(u,"gender-form")),this.sys.xml.getAttributeValue(u,"gender")&&(this.locale[i]["noun-genders"][p]=this.sys.xml.getAttributeValue(u,"gender")),d?(this.locale[i].terms[p][d]={},this.locale[i].terms[p][d][h]=[],b=this.locale[i].terms[p][d],E[p]=!0):(this.locale[i].terms[p][h]=[],b=this.locale[i].terms[p]),this.sys.xml.numberofnodes(this.sys.xml.getNodesByName(u,"multiple"))?(b[h][0]=this.sys.xml.getNodeValue(u,"single"),b[h][1]=this.sys.xml.getNodeValue(u,"multiple")):b[h]=this.sys.xml.getNodeValue(u)}if(T){for(var R in E){var w={},C=0;for(var L in this.locale[i].terms[R])["masculine","feminine"].indexOf(L)>-1?w[L]=this.locale[i].terms[R][L]:C+=1;if(!C)if(w.feminine)for(var L in w.feminine)this.locale[i].terms[R][L]=w.feminine[L];else if(w.masculine)for(var L in w.masculine)this.locale[i].terms[R][L]=w.masculine[L]}this.locale[i].ord["1.0.1"]=A}for(p in this.locale[i].terms)for(_=0,y=2;y>_;_+=1)if(d=e.GENDERS[_],this.locale[i].terms[p][d])for(h in this.locale[i].terms[p])this.locale[i].terms[p][d][h]||(this.locale[i].terms[p][d][h]=this.locale[i].terms[p][h]);for(n=this.sys.xml.getNodesByName(a,"style-options"),l=0,g=this.sys.xml.numberofnodes(n);g>l;l+=1){c=n[l],o=this.sys.xml.attributes(c);for(m in o)if(o.hasOwnProperty(m))if("@punctuation-in-quote"===m||"@limit-day-ordinals-to-day-1"===m)this.locale[i].opts[m.slice(1)]="true"===o[m]?!0:!1;else if("@skip-words"===m){var P=o[m].split(/\s*,\s*/);this.locale[i].opts[m.slice(1)]=P}else if("@leading-noise-words"===m&&s===i){var U=o[m].split(/\s*,\s*/);this.locale[i].opts["leading-noise-words"]=U}else if("@name-as-sort-order"===m){this.locale[i].opts["name-as-sort-order"]={};for(var D=o[m].split(/\s+/),_=0,y=D.length;y>_;_+=1)this.locale[i].opts["name-as-sort-order"][D[_]]=!0}else if("@name-as-reverse-order"===m){this.locale[i].opts["name-as-reverse-order"]={};for(var D=o[m].split(/\s+/),_=0,y=D.length;y>_;_+=1)this.locale[i].opts["name-as-reverse-order"][D[_]]=!0}else if("@name-never-short"===m){this.locale[i].opts["name-never-short"]={};for(var D=o[m].split(/\s+/),_=0,y=D.length;y>_;_+=1)this.locale[i].opts["name-never-short"][D[_]]=!0}}for(n=this.sys.xml.getNodesByName(a,"date"),l=0,g=this.sys.xml.numberofnodes(n);g>l;l+=1)f=n[l],this.locale[i].dates[this.sys.xml.getAttributeValue(f,"form")]=f},e.Node={},e.Node.bibliography={build:function(t,s){this.tokentype===e.START&&(t.build.area="bibliography",t.build.root="bibliography",t.fixOpt(this,"names-delimiter","delimiter"),t.fixOpt(this,"name-delimiter","delimiter"),t.fixOpt(this,"name-form","form"),t.fixOpt(this,"and","and"),t.fixOpt(this,"delimiter-precedes-last","delimiter-precedes-last"),t.fixOpt(this,"delimiter-precedes-et-al","delimiter-precedes-et-al"),t.fixOpt(this,"initialize-with","initialize-with"),t.fixOpt(this,"initialize","initialize"),t.fixOpt(this,"name-as-sort-order","name-as-sort-order"),t.fixOpt(this,"sort-separator","sort-separator"),t.fixOpt(this,"and","and"),t.fixOpt(this,"et-al-min","et-al-min"),t.fixOpt(this,"et-al-use-first","et-al-use-first"),t.fixOpt(this,"et-al-use-last","et-al-use-last"),t.fixOpt(this,"et-al-subsequent-min","et-al-subsequent-min"),t.fixOpt(this,"et-al-subsequent-use-first","et-al-subsequent-use-first")),s.push(this)}},e.Node.choose={build:function(t,s){var i;this.tokentype===e.START&&(i=function(t){t.tmp.jump.push(void 0,e.LITERAL)}),this.tokentype===e.END&&(i=function(t){t.tmp.jump.pop()}),this.execs.push(i),s.push(this)},configure:function(t,s){this.tokentype===e.END?(t.configure.fail.push(s),t.configure.succeed.push(s)):(t.configure.fail.pop(),t.configure.succeed.pop())}},e.Node.citation={build:function(t){if(this.tokentype===e.START&&(t.fixOpt(this,"names-delimiter","delimiter"),t.fixOpt(this,"name-delimiter","delimiter"),t.fixOpt(this,"name-form","form"),t.fixOpt(this,"and","and"),t.fixOpt(this,"delimiter-precedes-last","delimiter-precedes-last"),t.fixOpt(this,"delimiter-precedes-et-al","delimiter-precedes-et-al"),t.fixOpt(this,"initialize-with","initialize-with"),t.fixOpt(this,"initialize","initialize"),t.fixOpt(this,"name-as-sort-order","name-as-sort-order"),t.fixOpt(this,"sort-separator","sort-separator"),t.fixOpt(this,"and","and"),t.fixOpt(this,"et-al-min","et-al-min"),t.fixOpt(this,"et-al-use-first","et-al-use-first"),t.fixOpt(this,"et-al-use-last","et-al-use-last"),t.fixOpt(this,"et-al-subsequent-min","et-al-subsequent-min"),t.fixOpt(this,"et-al-subsequent-use-first","et-al-subsequent-use-first"),t.build.area="citation"),this.tokentype===e.END){if(t.opt.grouped_sort="in-text"===t.opt.xclass&&t.citation.opt.collapse&&t.citation.opt.collapse.length||t.citation.opt.cite_group_delimiter&&t.citation.opt.cite_group_delimiter.length&&t.opt.update_mode!==e.POSITION&&t.opt.update_mode!==e.NUMERIC,t.opt.grouped_sort&&t.citation_sort.opt.sort_directions.length){var s=t.citation_sort.opt.sort_directions[0].slice();t.citation_sort.opt.sort_directions=[s].concat(t.citation_sort.opt.sort_directions)}t.citation.srt=new e.Registry.Comparifier(t,"citation_sort")}}},e.Node["#comment"]={build:function(){}},e.Node.date={build:function(t,s){var i,r,a,n,o,l,u,h,p,c;(this.tokentype===e.START||this.tokentype===e.SINGLETON)&&(t.build.date_parts=[],t.build.date_variables=this.variables,t.build.extension||e.Util.substituteStart.call(this,t,s),i=t.build.extension?e.dateMacroAsSortKey:function(t,e,s){var i;if(t.tmp.element_rendered_ok=!1,t.tmp.donesies=[],t.tmp.dateparts=[],i=[],!this.variables.length||t.tmp.just_looking&&"issued"!==this.variables[0])t.tmp.date_object=!1;else{for(t.parallel.StartVariable(this.variables[0]),r=e[this.variables[0]],"undefined"==typeof r&&(r={"date-parts":[[0]]},t.opt.development_extensions.locator_date_and_revision&&s&&"locator-date"===this.variables[0]&&s["locator-date"]&&(r=s["locator-date"])),t.tmp.date_object=r,a=this.dateparts.length,n=0;a>n;n+=1)o=this.dateparts[n],"undefined"!=typeof t.tmp.date_object[o+"_end"]?i.push(o):"month"===o&&"undefined"!=typeof t.tmp.date_object.season_end&&i.push(o);for(l=[],u=["year","month","day"],a=u.length,n=0;a>n;n+=1)i.indexOf(u[n])>-1&&l.push(u[n]);for(i=l.slice(),h=2,a=i.length,n=0;a>n;n+=1)if(o=i[n],p=t.tmp.date_object[o],c=t.tmp.date_object[o+"_end"],p!==c){h=n;break}t.tmp.date_collapse_at=i.slice(h)}},this.execs.push(i),i=function(t,e){if(t.output.startTag("date",this),"issued"===this.variables[0]&&"legal_case"===e.type&&!t.tmp.extension&&""+e["collection-number"]==""+t.tmp.date_object.year&&1===this.dateparts.length&&"year"===this.dateparts[0])for(var s in t.tmp.date_object)if(t.tmp.date_object.hasOwnProperty(s)&&"year"===s.slice(0,4)){t.tmp.issued_date={};var i=t.output.current.mystack.slice(-2)[0].blobs;t.tmp.issued_date.list=i,t.tmp.issued_date.pos=i.length-1}},this.execs.push(i)),t.build.extension||this.tokentype!==e.END&&this.tokentype!==e.SINGLETON||(i=function(t){t.output.endTag(),t.parallel.CloseVariable("date")},this.execs.push(i)),s.push(this),(this.tokentype===e.END||this.tokentype===e.SINGLETON)&&(t.build.extension||e.Util.substituteEnd.call(this,t,s))}},e.Node["date-part"]={build:function(t,s){var i,r,a,n,o,l,u,h,p,c,f,m,g,d,b,_,y,v,x,I,S,O,A,T;this.strings.form||(this.strings.form="long"),t.build.date_parts.push(this.strings.name);var E=t.build.date_variables[0];i=function(t,s){if(t.tmp.date_object){if(n=!0,o="",l="",t.tmp.donesies.push(this.strings.name),t.tmp.date_object.literal&&"year"===this.strings.name&&(t.parallel.AppendToVariable(t.tmp.date_object.literal),t.output.append(t.tmp.date_object.literal,this)),t.tmp.date_object&&(o=t.tmp.date_object[this.strings.name],l=t.tmp.date_object[this.strings.name+"_end"]),"year"!==this.strings.name||0!==o||t.tmp.suppress_decorations||(o=!1),u=!t.tmp.suppress_decorations,h=t.tmp.have_collapsed,p="year-suffix"===t[t.tmp.area].opt.collapse||"year-suffix-ranged"===t[t.tmp.area].opt.collapse,c=t.opt["disambiguate-add-year-suffix"],u&&c&&p&&(t.tmp.years_used.push(o),f=t.tmp.last_years_used.length>=t.tmp.years_used.length,f&&h&&t.tmp.last_years_used[t.tmp.years_used.length-1]===o&&(o=!1)),"undefined"!=typeof o){m=!1,g=!1,d=!1,b=!1,"year"===this.strings.name&&(parseInt(o,10)<500&&parseInt(o,10)>0&&(g=t.getTerm("ad")),parseInt(o,10)<0&&(m=t.getTerm("bc"),o=-1*parseInt(o,10)),l&&(parseInt(l,10)<500&&parseInt(l,10)>0&&(b=t.getTerm("ad")),parseInt(l,10)<0&&(d=t.getTerm("bc"),l=-1*parseInt(l,10)))),t.parallel.AppendToVariable(o);for(var i=""+t.tmp.date_object.month;i.length<2;)i="0"+i;i="month-"+i;var k=t.locale[t.opt.lang]["noun-genders"][i];if(this.strings.form){var N=this.strings.form;if("day"===this.strings.name&&"ordinal"===N&&t.locale[t.opt.lang].opts["limit-day-ordinals-to-day-1"]&&""+o!="1"&&(N="numeric"),o=e.Util.Dates[this.strings.name][N](t,o,k,"accessed"===E),"month"===this.strings.name)if(t.tmp.strip_periods)o=o.replace(/\./g,"");else for(A=0,T=this.decorations.length;T>A;A+=1)if("@strip-periods"===this.decorations[A][0]&&"true"===this.decorations[A][1]){o=o.replace(/\./g,"");break}if(l)if(l=e.Util.Dates[this.strings.name][N](t,l,k,"accessed"===E,"_end"),t.tmp.strip_periods)l=l.replace(/\./g,"");else for(A=0,T=this.decorations.length;T>A;A+=1)if("@strip-periods"===this.decorations[A][0]&&"true"===this.decorations[A][1]){l=l.replace(/\./g,"");break}}if(t.output.openLevel("empty"),t.tmp.date_collapse_at.length){for(_=!0,a=t.tmp.date_collapse_at.length,r=0;a>r;r+=1)if(O=t.tmp.date_collapse_at[r],-1===t.tmp.donesies.indexOf(O)){_=!1;break}if(_){if(""+l!="0"){if(0===t.dateput.queue.length&&(n=!0),t.opt["year-range-format"]&&"expanded"!==t.opt["year-range-format"]&&!t.tmp.date_object.day&&!t.tmp.date_object.month&&!t.tmp.date_object.season&&"year"===this.strings.name&&o&&l){l=t.fun.year_mangler(o+"-"+l,!0);var R=t.getTerm("year-range-delimiter");l=l.slice(l.indexOf(R)+1)}t.dateput.append(l,this),n&&(t.dateput.current.value()[0].strings.prefix="")}t.output.append(o,this),y=t.output.current.value(),y.blobs[y.blobs.length-1].strings.suffix="",t.output.append(t.getTerm("year-range-delimiter"),"empty"),v=t.dateput.current.value(),y.blobs=y.blobs.concat(v),t.dateput.string(t,t.dateput.queue),t.tmp.date_collapse_at=[]}else t.output.append(o,this),t.tmp.date_collapse_at.indexOf(this.strings.name)>-1&&""+l!="0"&&(0===t.dateput.queue.length&&(n=!0),t.dateput.openLevel("empty"),t.dateput.append(l,this),n&&(t.dateput.current.value().blobs[0].strings.prefix=""),m&&t.dateput.append(m),g&&t.dateput.append(g),t.dateput.closeLevel())}else t.output.append(o,this);m&&t.output.append(m),g&&t.output.append(g),t.output.closeLevel()}else"month"===this.strings.name&&t.tmp.date_object.season&&(o=""+t.tmp.date_object.season,o&&o.match(/^[1-4]$/)?(t.tmp.group_context.replace([!1,!1,!0]),t.output.append(t.getTerm("season-0"+o),this)):o&&t.output.append(o,this));t.tmp.value=[],!o&&!t.tmp.have_collapsed||t.opt.has_year_suffix||"year"!==this.strings.name||t.tmp.just_looking||t.registry.registry[s.id]&&t.registry.registry[s.id].disambig.year_suffix!==!1&&!t.tmp.has_done_year_suffix&&(t.tmp.has_done_year_suffix=!0,I=parseInt(t.registry.registry[s.id].disambig.year_suffix,10),x=new e.NumericBlob(I,this,s.id),this.successor_prefix=t[t.build.area].opt.layout_delimiter,this.splice_prefix=t[t.build.area].opt.layout_delimiter,S=new e.Util.Suffixator(e.SUFFIX_CHARS),x.setFormatter(S),"year-suffix-ranged"===t[t.tmp.area].opt.collapse&&(x.range_prefix=t.getTerm("citation-range-delimiter")),x.successor_prefix=t[t.tmp.area].opt["year-suffix-delimiter"]?t[t.tmp.area].opt["year-suffix-delimiter"]:t[t.tmp.area].opt.layout_delimiter,x.UGLY_DELIMITER_SUPPRESS_HACK=!0,t.output.append(x,"literal"))}},this.execs.push(i),s.push(this)}},e.Node["else-if"]={build:function(t,s){e.Conditions.TopNode.call(this,t,s),s.push(this)},configure:function(t,s){e.Conditions.Configure.call(this,t,s)}},e.Node["else"]={build:function(t,e){e.push(this)},configure:function(t,s){this.tokentype===e.START&&(t.configure.fail[t.configure.fail.length-1]=s)}},e.Node["et-al"]={build:function(t,e){if("citation"===t.build.area||"bibliography"===t.build.area){var s=function(t){t.tmp.etal_node=this,"string"==typeof this.strings.term&&(t.tmp.etal_term=this.strings.term)};this.execs.push(s)}e.push(this)}},e.Node.group={build:function(t,s){var i,r;this.tokentype===e.START?(e.Util.substituteStart.call(this,t,s),t.build.substitute_level.value()&&t.build.substitute_level.replace(t.build.substitute_level.value()+1),i=function(t){t.output.startTag("group",this),t.tmp.group_context.mystack.length&&(t.output.current.value().parent=t.tmp.group_context.value()[4]);var s=t.tmp.group_context.value()[5];!s&&this.strings.label_form_override&&(s=this.strings.label_form_override),t.tmp.group_context.push([!1,!1,!1,!1,t.output.current.value(),s,this.strings.set_parallel_condition],e.LITERAL),this.strings.oops&&(t.tmp.group_context.value()[3]=this.strings.oops)},r=[],r.push(i),this.execs=r.concat(this.execs),this.strings["has-publisher-and-publisher-place"]&&(t.build["publisher-special"]=!0,i=function(t,s){if(this.strings["subgroup-delimiter"]&&s.publisher&&s["publisher-place"]){var i=s.publisher.split(/;\s*/),r=s["publisher-place"].split(/;\s*/);i.length>1&&i.length===r.length&&(t.publisherOutput=new e.PublisherOutput(t,this),t.publisherOutput["publisher-list"]=i,t.publisherOutput["publisher-place-list"]=r)}},this.execs.push(i))):(t.build["publisher-special"]&&(t.build["publisher-special"]=!1,"string"==typeof t[t.build.root].opt["name-delimiter"]&&(i=function(t){t.publisherOutput&&(t.publisherOutput.render(),t.publisherOutput=!1)},this.execs.push(i))),i=function(t,e){var s=t.tmp.group_context.pop();t.output.endTag();t.tmp.group_context.value();if(s[1]&&(t.tmp.group_context.value()[1]=!0),s[2]||s[0]&&!s[1]){t.tmp.group_context.value()[2]=!0;var i=t.output.current.value().blobs,r=t.output.current.value().blobs.length-1;if(!t.tmp.just_looking&&"undefined"!=typeof s[6]){var a={blobs:i,conditions:s[6],id:e.id,pos:r};t.parallel.parallel_conditional_blobs_list.push(a)}}else t.output.current.value().blobs&&t.output.current.value().blobs.pop(),t.tmp.group_context.value()[3]&&(t.output.current.mystack[t.output.current.mystack.length-2].strings.delimiter=t.tmp.group_context.value()[3])},this.execs.push(i)),s.push(this),this.tokentype===e.END&&(t.build.substitute_level.value()&&t.build.substitute_level.replace(t.build.substitute_level.value()-1),e.Util.substituteEnd.call(this,t,s))}},e.Node["if"]={build:function(t,s){e.Conditions.TopNode.call(this,t,s),s.push(this)},configure:function(t,s){e.Conditions.Configure.call(this,t,s)}},e.Node.conditions={build:function(t){this.tokentype===e.START&&t.tmp.conditions.addMatch(this.match),this.tokentype===e.END&&t.tmp.conditions.matchCombine()}},e.Node.condition={build:function(t){if(this.tokentype===e.SINGLETON){var s=t.fun.match[this.match](this,t,this.tests);t.tmp.conditions.addTest(s)}}},e.Conditions={},e.Conditions.TopNode=function(t){var s;(this.tokentype===e.START||this.tokentype===e.SINGLETON)&&(this.locale&&(t.opt.lang=this.locale),this.tests&&this.tests.length?this.test=t.fun.match[this.match](this,t,this.tests):t.tmp.conditions=new e.Conditions.Engine(t,this)),(this.tokentype===e.END||this.tokentype===e.SINGLETON)&&(s=function(t){this.locale_default&&(t.output.current.value().old_locale=this.locale_default,t.output.closeLevel("empty"),t.opt.lang=this.locale_default);var e=this[t.tmp.jump.value()];return e},this.execs.push(s),this.locale_default&&(t.opt.lang=this.locale_default))},e.Conditions.Configure=function(t,s){this.tokentype===e.START?(this.fail=t.configure.fail.slice(-1)[0],this.succeed=this.next,t.configure.fail[t.configure.fail.length-1]=s):this.tokentype===e.SINGLETON?(this.fail=this.next,this.succeed=t.configure.succeed.slice(-1)[0],t.configure.fail[t.configure.fail.length-1]=s):(this.succeed=t.configure.succeed.slice(-1)[0],this.fail=this.next)},e.Conditions.Engine=function(t,e){this.token=e,this.state=t},e.Conditions.Engine.prototype.addTest=function(t){this.token.tests.push(t)},e.Conditions.Engine.prototype.addMatch=function(t){this.token.match=t},e.Conditions.Engine.prototype.matchCombine=function(){this.token.test=this.state.fun.match[this.token.match](this.token,this.state,this.token.tests)},e.Node.info={build:function(t){t.build.skip=this.tokentype===e.START?"info":!1}},e.Node.institution={build:function(t,s){if([e.SINGLETON,e.START].indexOf(this.tokentype)>-1){var i=function(t){"string"!=typeof t.build.name_delimiter||this.strings.delimiter||(this.strings.delimiter=t.tmp.name_delimiter);"text"===this.strings.and?this.and_term=t.getTerm("and","long",0):"symbol"===this.strings.and?this.and_term=t.opt.development_extensions.expect_and_symbol_form?t.getTerm("and","symbol",0):"&":"none"===this.strings.and&&(this.and_term=this.strings.delimiter),"undefined"==typeof this.and_term&&t.tmp.and_term&&(this.and_term=t.getTerm("and","long",0)),e.STARTSWITH_ROMANESQUE_REGEXP.test(this.and_term)?(this.and_prefix_single=" ",this.and_prefix_multiple=", ","string"==typeof this.strings.delimiter&&(this.and_prefix_multiple=this.strings.delimiter),this.and_suffix=" "):(this.and_prefix_single="",this.and_prefix_multiple="",this.and_suffix=""),"always"===this.strings["delimiter-precedes-last"]?this.and_prefix_single=this.strings.delimiter:"never"===this.strings["delimiter-precedes-last"]&&this.and_prefix_multiple&&(this.and_prefix_multiple=" "),this.and={},"undefined"!=typeof this.and_term?(t.output.append(this.and_term,"empty",!0),this.and.single=t.output.pop(),this.and.single.strings.prefix=this.and_prefix_single,this.and.single.strings.suffix=this.and_suffix,t.output.append(this.and_term,"empty",!0),this.and.multiple=t.output.pop(),this.and.multiple.strings.prefix=this.and_prefix_multiple,this.and.multiple.strings.suffix=this.and_suffix):"undefined"!==this.strings.delimiter&&(this.and.single=new e.Blob(this.strings.delimiter),this.and.single.strings.prefix="",this.and.single.strings.suffix="",this.and.multiple=new e.Blob(this.strings.delimiter),this.and.multiple.strings.prefix="",this.and.multiple.strings.suffix=""),t.nameOutput.institution=this};this.execs.push(i)}s.push(this)},configure:function(t){[e.SINGLETON,e.START].indexOf(this.tokentype)>-1&&(t.build.has_institution=!0)}},e.Node["institution-part"]={build:function(t,e){var s;"long"===this.strings.name?s=this.strings["if-short"]?function(t){t.nameOutput.institutionpart["long-with-short"]=this}:function(t){t.nameOutput.institutionpart["long"]=this}:"short"===this.strings.name&&(s=function(t){t.nameOutput.institutionpart["short"]=this}),this.execs.push(s),e.push(this)}},e.Node.key={build:function(t,s){var i,r=new e.Token("key",e.START);r.strings["et-al-min"]=this.strings["et-al-min"],r.strings["et-al-use-first"]=this.strings["et-al-use-first"],r.strings["et-al-use-last"]=this.strings["et-al-use-last"],i=function(t){t.tmp.done_vars=[]},r.execs.push(i),t.opt.citation_number_sort_direction=this.strings.sort_direction,i=function(t){t.output.openLevel("empty")},r.execs.push(i);var a=[];if(this.strings.sort_direction===e.DESCENDING?(a.push(1),a.push(-1)):(a.push(-1),a.push(1)),t[t.build.area].opt.sort_directions.push(a),e.DATE_VARIABLES.indexOf(this.variables[0])>-1&&(t.build.date_key=!0),i=function(t){t.tmp.sort_key_flag=!0,this.strings["et-al-min"]&&(t.tmp["et-al-min"]=this.strings["et-al-min"]),this.strings["et-al-use-first"]&&(t.tmp["et-al-use-first"]=this.strings["et-al-use-first"]),"boolean"==typeof this.strings["et-al-use-last"]&&(t.tmp["et-al-use-last"]=this.strings["et-al-use-last"])},r.execs.push(i),s.push(r),this.variables.length){var n=this.variables[0];if("citation-number"===n&&("citation_sort"===t.build.area&&(t.opt.citation_number_sort=!0),"bibliography_sort"===t.build.area&&(t.opt.citation_number_sort_used=!0)),e.CREATORS.indexOf(n)>-1){var o=new e.Token("names",e.START);o.tokentype=e.START,o.variables=this.variables,e.Node.names.build.call(o,t,s);var l=new e.Token("name",e.SINGLETON);l.tokentype=e.SINGLETON,l.strings["name-as-sort-order"]="all",l.strings["sort-separator"]=" ",l.strings["et-al-use-last"]=this.strings["et-al-use-last"],l.strings["et-al-min"]=this.strings["et-al-min"],l.strings["et-al-use-first"]=this.strings["et-al-use-first"],e.Node.name.build.call(l,t,s);var u=new e.Token("institution",e.SINGLETON);u.tokentype=e.SINGLETON,e.Node.institution.build.call(u,t,s);var h=new e.Token("names",e.END);h.tokentype=e.END,e.Node.names.build.call(h,t,s)}else{var p=new e.Token("text",e.SINGLETON);if(p.dateparts=this.dateparts,e.NUMERIC_VARIABLES.indexOf(n)>-1)i=function(t,s){var i;i=!1,i="citation-number"===n?t.registry.registry[s.id].seq.toString():s[n],i&&(i=e.Util.padding(i)),t.output.append(i,this)};else if("citation-label"===n)i=function(t,e){var s=t.getCitationLabel(e);t.output.append(s,this)};else if(e.DATE_VARIABLES.indexOf(n)>-1)i=e.dateAsSortKey,p.variables=this.variables;else if("title"===n){var c="title",f=!1,m=!1,g=!0;i=t.transform.getOutputFunction(this.variables,c,f,m,g)}else i=function(t,e){var s=e[n];t.output.append(s,"empty")};p.execs.push(i),s.push(p)}}else{var d=new e.Token("text",e.SINGLETON);d.postponed_macro=this.postponed_macro,e.expandMacro.call(t,d)}var b=new e.Token("key",e.END);i=function(t){var e=t.output.string(t,t.output.queue);t.sys.normalizeUnicode&&(e=t.sys.normalizeUnicode(e)),""===e&&(e=void 0),("string"!=typeof e||t.tmp.empty_date)&&(e=void 0,t.tmp.empty_date=!1),t[t.tmp.area].keys.push(e),t.tmp.value=[]},b.execs.push(i),t.build.date_key&&("citation_sort"===t.build.area&&(t[t.build.area].opt.sort_directions.push([-1,1]),i=function(t,s){var i=t.registry.registry[s.id].disambig.year_suffix;i||(i=0);var r=e.Util.padding(""+i);t[t.tmp.area].keys.push(r)},b.execs.push(i)),t.build.date_key=!1),i=function(t){t.tmp["et-al-min"]=void 0,t.tmp["et-al-use-first"]=void 0,t.tmp["et-al-use-last"]=void 0,t.tmp.sort_key_flag=!1},b.execs.push(i),s.push(b)}},e.Node.label={build:function(t,s){if(this.strings.term){this.strings.form||(this.strings.form="long");var i=function(t,s,i){var r=e.evaluateLabel(this,t,s,i);i&&"locator"===this.strings.term&&(t.parallel.StartVariable("label"),t.parallel.AppendToVariable(i.label),i.section_form_override=this.strings.form),t.output.append(r,this),i&&"locator"===this.strings.term&&t.parallel.CloseVariable()};this.execs.push(i)}else{var r=t.build.names_variables.slice(-1)[0];t.build.name_label||(t.build.name_label={});for(var a=0,n=r.length;n>a;a+=1)t.build.name_label[r[a]]||(t.build.name_label[r[a]]={});if(t.build.name_flag)for(var a=0,n=r.length;n>a;a+=1)t.build.name_label[r[a]].after=this;else for(var a=0,n=r.length;n>a;a+=1)t.build.name_label[r[a]].before=this}s.push(this)}},e.Node.layout={build:function(t,s){var i,r,a,n;this.tokentype===e.START&&(i=function(t,s,i){t.opt.development_extensions.apply_citation_wrapper&&t.sys.wrapCitationEntry&&!t.tmp.just_looking&&s.system_id&&"citation"===t.tmp.area&&(cite_entry=new e.Token("group",e.START),cite_entry.decorations=[["@cite","entry"]],t.output.startTag("cite_entry",cite_entry),t.output.current.value().item_id=s.system_id,i&&(t.output.current.value().locator_txt=i.locator_txt,t.output.current.value().suffix_txt=i.suffix_txt))},this.execs.push(i)),this.tokentype!==e.START||t.tmp.cite_affixes[t.build.area]||(i=function(t,e){t.tmp.done_vars=[],!t.tmp.just_looking&&t.registry.registry[e.id].parallel&&t.tmp.done_vars.push("first-reference-note-number"),t.tmp.rendered_name=!1,t.tmp.name_node={}},this.execs.push(i),i=function(t){t.tmp.sort_key_flag=!1},this.execs.push(i),i=function(t){t.tmp.nameset_counter=0},this.execs.push(i),i=function(t,s){var i="empty";t.opt.development_extensions.rtl_support&&["ar","he","fa","ur","yi","ps","syr"].indexOf(s.language)>-1&&(i=new e.Token,i.strings.prefix="\u202b",i.strings.suffix="\u202c"),t.output.openLevel(i)},this.execs.push(i),s.push(this),"citation"===t.build.area&&(r=new e.Token("text",e.SINGLETON),i=function(t,s,i){var r;if(i&&i.prefix){r="";var a=i.prefix.replace(/<[^>]+>/g,"").replace(/["'\u201d\u2019\u00bb\u202f\u00a0 ]+$/g,""),n=a.slice(-1);a.match(e.ENDSWITH_ROMANESQUE_REGEXP)?r=" ":e.TERMINAL_PUNCTUATION.slice(0,-1).indexOf(n)>-1?r=" ":n.match(/[\)\],0-9]/)&&(r=" ");var o=!1;e.TERMINAL_PUNCTUATION.slice(0,-1).indexOf(n)>-1&&i.prefix.indexOf(" ")>-1&&(t.tmp.term_predecessor=!1,o=!0),prefix=(i.prefix+r).replace(/\s+/g," "),t.output.append(prefix,this,!1,o)}},r.execs.push(i),s.push(r)));var o;if(this.locale_raw&&(o=new e.Token("dummy",e.START),o.locale=this.locale_raw,o.strings.delimiter=this.strings.delimiter,o.strings.suffix=this.strings.suffix,t.tmp.cite_affixes[t.build.area]||(t.tmp.cite_affixes[t.build.area]={})),this.tokentype===e.START&&(t.build.layout_flag=!0,this.locale_raw||(t[t.tmp.area].opt.topdecor=[this.decorations],t[t.tmp.area+"_sort"].opt.topdecor=[this.decorations],t[t.build.area].opt.layout_prefix=this.strings.prefix,t[t.build.area].opt.layout_suffix=this.strings.suffix,t[t.build.area].opt.layout_delimiter=this.strings.delimiter,t[t.build.area].opt.layout_decorations=this.decorations,t.tmp.cite_affixes[t.build.area]&&(n=new e.Token("else",e.START),e.Node["else"].build.call(n,t,s))),this.locale_raw)){if(t.build.layout_locale_flag)o.name="else-if",e.Attributes["@locale-internal"].call(o,t,this.locale_raw),e.Node["else-if"].build.call(o,t,s);else{var l=new e.Token("choose",e.START);e.Node.choose.build.call(l,t,s),o.name="if",e.Attributes["@locale-internal"].call(o,t,this.locale_raw),e.Node["if"].build.call(o,t,s)}t.tmp.cite_affixes[t.build.area][o.locale]={},t.tmp.cite_affixes[t.build.area][o.locale].delimiter=this.strings.delimiter,t.tmp.cite_affixes[t.build.area][o.locale].suffix=this.strings.suffix}this.tokentype===e.END&&(this.locale_raw&&(t.build.layout_locale_flag?(o.name="else-if",o.tokentype=e.END,e.Attributes["@locale-internal"].call(o,t,this.locale_raw),e.Node["else-if"].build.call(o,t,s)):(o.name="if",o.tokentype=e.END,e.Attributes["@locale-internal"].call(o,t,this.locale_raw),e.Node["if"].build.call(o,t,s),t.build.layout_locale_flag=!0)),this.locale_raw||(t.tmp.cite_affixes[t.build.area]&&t.build.layout_locale_flag&&(n=new e.Token("else",e.END),e.Node["else"].build.call(n,t,s),n=new e.Token("choose",e.END),e.Node.choose.build.call(n,t,s)),t.build_layout_locale_flag=!0,"citation"===t.build.area&&(a=new e.Token("text",e.SINGLETON),i=function(t,s,i){var r;i&&i.suffix&&(r="",(i.suffix.match(e.STARTSWITH_ROMANESQUE_REGEXP)||["[","("].indexOf(i.suffix.slice(0,1))>-1)&&(r=" "),t.output.append(r+i.suffix,this))},a.execs.push(i),s.push(a)),i=function(t){"bibliography"===t.tmp.area&&t.bibliography.opt["second-field-align"]&&t.output.endTag(),t.output.closeLevel()},this.execs.push(i),i=function(t,e){t.opt.development_extensions.apply_citation_wrapper&&t.sys.wrapCitationEntry&&!t.tmp.just_looking&&e.system_id&&"citation"===t.tmp.area&&t.output.endTag()},this.execs.push(i),s.push(this),t.build.layout_flag=!1,t.build.layout_locale_flag=!1))}},e.Node.macro={build:function(){}},e.NameOutput=function(t,e,s){this.debug=!1,this.state=t,this.Item=e,this.item=s,this.nameset_base=0,this.etal_spec={},this._first_creator_variable=!1,this._please_chop=!1},e.NameOutput.prototype.init=function(t){this.state.tmp.term_predecessor&&(this.state.tmp.subsequent_author_substitute_ok=!1),this.nameset_offset&&(this.nameset_base=this.nameset_base+this.nameset_offset),this.nameset_offset=0,this.names=t,this.variables=t.variables,this.state.tmp.value=[],this.state.tmp.rendered_name=[],this.state.tmp.label_blob=!1,this.state.tmp.etal_node=!1,this.state.tmp.etal_term=!1;for(var e=0,s=this.variables.length;s>e;e+=1)this.Item[this.variables[e]]&&this.Item[this.variables[e]].length&&(this.state.tmp.value=this.state.tmp.value.concat(this.Item[this.variables[e]]));this["et-al"]=void 0,this["with"]=void 0,this.name=void 0,this.institutionpart={},this.state.tmp.group_context.value()[1]=!0,!this.state.tmp.value.length},e.NameOutput.prototype.reinit=function(t){if(this.state.tmp.can_substitute.value()){this.nameset_offset=0,this.variables=t.variables;var s=this.state.tmp.value.slice();this.state.tmp.value=[];for(var i=0,r=this.variables.length;r>i;i+=1)this.Item[this.variables[i]]&&this.Item[this.variables[i]].length&&(this.state.tmp.value=this.state.tmp.value.concat(this.Item[this.variables[i]]));this.state.tmp.value.length&&this.state.tmp.can_substitute.replace(!1,e.LITERAL),this.state.tmp.value=s}},e.NameOutput.prototype.outputNames=function(){var t,s,i=this.variables;if(this.institution.and&&(this.institution.and.single.blobs&&this.institution.and.single.blobs.length||(this.institution.and.single.blobs=this.name.and.single.blobs),this.institution.and.multiple.blobs&&this.institution.and.multiple.blobs.length||(this.institution.and.multiple.blobs=this.name.and.multiple.blobs)),this.variable_offset={},this.family)for(this.family_decor=e.Util.cloneToken(this.family),this.family_decor.strings.prefix="",this.family_decor.strings.suffix="",t=0,s=this.family.execs.length;s>t;t+=1)this.family.execs[t].call(this.family_decor,this.state,this.Item);else this.family_decor=!1;if(this.given)for(this.given_decor=e.Util.cloneToken(this.given),this.given_decor.strings.prefix="",this.given_decor.strings.suffix="",t=0,s=this.given.execs.length;s>t;t+=1)this.given.execs[t].call(this.given_decor,this.state,this.Item);else this.given_decor=!1;if(this.getEtAlConfig(),this.divideAndTransliterateNames(),this.truncatePersonalNameLists(),this.disambigNames(),this.constrainNames(),"count"===this.name.strings.form)return void((this.state.tmp.extension||0!=this.names_count)&&(this.state.output.append(this.names_count,"empty"),this.state.tmp.group_context.value()[2]=!0));this.setEtAlParameters(),this.setCommonTerm(),this.state.tmp.name_node={},this.state.tmp.name_node.children=[],this.renderAllNames();var r=[];for(t=0,s=i.length;s>t;t+=1){for(var a=i[t],n=[],o=!1,l=0,u=this.institutions[a].length;u>l;l+=1)n.push(this.joinPersonsAndInstitutions([this.persons[a][l],this.institutions[a][l]]));if(this.institutions[a].length){var h=this.nameset_base+this.variable_offset[a];this.freeters[a].length&&(h+=1),o=this.joinInstitutionSets(n,h)}var p=this.joinFreetersAndInstitutionSets([this.freeters[a],o]);if(p&&("_sort"!==this.state.tmp.area.slice(-5)&&(p=this._applyLabels(p,a)),r.push(p)),this.common_term)break}for(this.state.output.openLevel("empty"),this.state.output.current.value().strings.delimiter=this.names.strings.delimiter,t=0,s=r.length;s>t;t+=1)this.state.output.append(r[t],"literal",!0);this.state.output.closeLevel("empty");var c=this.state.output.pop();if(this.state.output.append(c,this.names),this.state.tmp.term_predecessor_name&&(this.state.tmp.term_predecessor=!0),this.state.tmp.name_node.top=this.state.output.current.value(),"authority"!==i[0]){var f=[],m=this.Item[i[0]];if(m)for(var t=0,s=m.length;s>t;t+=1)substring=e.Util.Names.getRawName(m[t]),substring&&f.push(substring);f=f.join(", "),f&&(this.state.tmp.name_node.string=f)}if(this.state.tmp.name_node.string&&!this.state.tmp.first_name_string&&(this.state.tmp.first_name_string=this.state.tmp.name_node.string),"classic"===this.Item.type){var g=[];this.state.tmp.first_name_string&&g.push(this.state.tmp.first_name_string),this.Item.title&&g.push(this.Item.title),g=g.join(", "),g&&this.state.sys.getAbbreviation&&(this.state.transform.loadAbbreviation("default","classic",g),this.state.transform.abbrevs["default"].classic[g]&&(this.state.tmp.done_vars.push("title"),this.state.output.append(this.state.transform.abbrevs["default"].classic[g],"empty",!0),c=this.state.output.pop(),this.state.tmp.name_node.top.blobs.pop(),this.state.tmp.name_node.top.blobs.push(c)))
}this._collapseAuthor(),this.variables=[]},e.NameOutput.prototype._applyLabels=function(t,e){var s;if(!this.label||!this.label[e])return t;var i=0,r=this.freeters_count[e]+this.institutions_count[e];if(r>1)i=1;else{for(var a=0,n=this.persons[e].length;n>a;a+=1)r+=this.persons_count[e][a];r>1&&(i=1)}return this.label[e].before&&("number"==typeof this.label[e].before.strings.plural&&(i=this.label[e].before.strings.plural),s=this._buildLabel(e,i,"before",e),this.state.output.openLevel("empty"),this.state.output.append(s,this.label[e].before,!0),this.state.output.append(t,"literal",!0),this.state.output.closeLevel("empty"),t=this.state.output.pop()),this.label[e].after&&("number"==typeof this.label[e].after.strings.plural&&(i=this.label[e].after.strings.plural),s=this._buildLabel(e,i,"after",e),this.state.output.openLevel("empty"),this.state.output.append(t,"literal",!0),this.state.output.append(s,this.label[e].after,!0),this.state.tmp.label_blob=this.state.output.pop(),this.state.output.append(this.state.tmp.label_blob,"literal",!0),this.state.output.closeLevel("empty"),t=this.state.output.pop()),t},e.NameOutput.prototype._buildLabel=function(t,s,i,r){this.common_term&&(t=this.common_term);var a=!1,n=this.label[r][i];return n&&(a=e.castLabel(this.state,n,t,s,e.TOLERANT)),a},e.NameOutput.prototype._collapseAuthor=function(){var t,e,s;0===this.nameset_base&&this.Item[this.variables[0]]&&!this._first_creator_variable&&(this._first_creator_variable=this.variables[0]),(this.item&&this.item["suppress-author"]&&this._first_creator_variable==this.variables[0]||this.state[this.state.tmp.area].opt.collapse&&this.state[this.state.tmp.area].opt.collapse.length||this.state[this.state.tmp.area].opt.cite_group_delimiter&&this.state[this.state.tmp.area].opt.cite_group_delimiter.length)&&(this.state.tmp.authorstring_request?(e="",t=this.state.tmp.name_node.top.blobs.slice(-1)[0].blobs,s=this.state.tmp.offset_characters,t&&(e=this.state.output.string(this.state,t,!1)),this.state.tmp.offset_characters=s,this.state.registry.authorstrings[this.Item.id]=e):this.state.tmp.just_looking||this.state.tmp.suppress_decorations||!(this.item["suppress-author"]||this.state[this.state.tmp.area].opt.collapse&&this.state[this.state.tmp.area].opt.collapse.length||this.state[this.state.tmp.area].opt.cite_group_delimiter&&this.state[this.state.tmp.area].opt.cite_group_delimiter)||(e="",t=this.state.tmp.name_node.top.blobs.slice(-1)[0].blobs,s=this.state.tmp.offset_characters,t&&(e=this.state.output.string(this.state,t,!1)),e===this.state.tmp.last_primary_names_string?((this.item["suppress-author"]||this.state[this.state.tmp.area].opt.collapse&&this.state[this.state.tmp.area].opt.collapse.length)&&(this.state.tmp.name_node.top.blobs.pop(),this.state.tmp.name_node.children=[],this.state.tmp.offset_characters=s),this.state[this.state.tmp.area].opt.cite_group_delimiter&&this.state[this.state.tmp.area].opt.cite_group_delimiter&&(this.state.tmp.use_cite_group_delimiter=!0)):(this.state.tmp.last_primary_names_string=e,this.variables.indexOf(this._first_creator_variable)>-1&&this.item&&this.item["suppress-author"]&&"legal_case"!==this.Item.type&&(this.state.tmp.name_node.top.blobs.pop(),this.state.tmp.name_node.children=[],this.state.tmp.offset_characters=s,this.state.tmp.term_predecessor=!1),this.state.tmp.have_collapsed=!1,this.state[this.state.tmp.area].opt.cite_group_delimiter&&this.state[this.state.tmp.area].opt.cite_group_delimiter&&(this.state.tmp.use_cite_group_delimiter=!1))))},e.NameOutput.prototype.isPerson=function(t){return t.literal||!t.given&&t.family&&t.isInstitution?!1:!0},e.NameOutput.prototype.truncatePersonalNameLists=function(){var t,e,s,i,r,a,n;this.freeters_count={},this.persons_count={},this.institutions_count={};for(t in this.freeters)this.freeters.hasOwnProperty(t)&&(this.freeters_count[t]=this.freeters[t].length,this.freeters[t]=this._truncateNameList(this.freeters,t));for(t in this.persons)if(this.persons.hasOwnProperty(t))for(this.institutions_count[t]=this.institutions[t].length,this._truncateNameList(this.institutions,t),this.persons[t]=this.persons[t].slice(0,this.institutions[t].length),this.persons_count[t]=[],i=0,r=this.persons[t].length;r>i;i+=1)this.persons_count[t][i]=this.persons[t][i].length,this.persons[t][i]=this._truncateNameList(this.persons,t,i);if(a=1!==this.etal_min||1!==this.etal_use_first||this.state.tmp.extension||this.state.tmp.just_looking?!1:t,a||this._please_chop)for(e=0,s=this.variables.length;s>e;e+=1){for(t=this.variables[e],this.freeters[t].length&&(this._please_chop===t?(this.freeters[t]=this.freeters[t].slice(1),this.freeters_count[t]+=-1,this._please_chop=!1):a&&!this._please_chop&&(this.freeters[t]=this.freeters[t].slice(0,1),this.freeters_count[t]=1,this.institutions[t]=[],this.persons[t]=[],this._please_chop=a)),e=0,s=this.persons[t].length;s>e;e+=1)if(this.persons[t][e].length){if(this._please_chop===t){this.persons[t][e]=this.persons[t][e].slice(1),this.persons_count[t][e]+=-1,this._please_chop=!1;break}if(a&&!this._please_chop){this.freeters[t]=this.persons[t][e].slice(0,1),this.freeters_count[t]=1,this.institutions[t]=[],this.persons[t]=[],n=[],this._please_chop=a;break}}this.institutions[t].length&&(this._please_chop===t?(this.institutions[t]=this.institutions[t].slice(1),this.institutions_count[t]+=-1,this._please_chop=!1):a&&!this._please_chop&&(this.institutions[t]=this.institutions[t].slice(0,1),this.institutions_count[t]=1,n=[],this._please_chop=a))}for(e=0,s=this.variables.length;s>e;e+=1)for(this.institutions[t].length&&(this.nameset_offset+=1),e=0,s=this.persons[t].length;s>e;e+=1)this.persons[t][e].length&&(this.nameset_offset+=1)},e.NameOutput.prototype._truncateNameList=function(t,e,s){var i;return i="undefined"==typeof s?t[e]:t[e][s],this.state[this.state[this.state.tmp.area].root].opt.max_number_of_names&&i.length>50&&i.length>this.state[this.state[this.state.tmp.area].root].opt.max_number_of_names+2&&(i=i.slice(0,this.state[this.state[this.state.tmp.area].root].opt.max_number_of_names+2)),i},e.NameOutput.prototype.divideAndTransliterateNames=function(){var t,e,s,i,r=this.Item,a=this.variables;for(this.varnames=a.slice(),this.freeters={},this.persons={},this.institutions={},t=0,e=a.length;e>t;t+=1){var n=a[t];this.variable_offset[n]=this.nameset_offset;var o=this._normalizeVariableValue(r,n);if(this.name.strings["suppress-min"]&&o.length>=this.name.strings["suppress-min"]&&(o=[]),this.name.strings["suppress-max"]&&o.length<=this.name.strings["suppress-max"]&&(o=[]),this._getFreeters(n,o),this._getPersonsAndInstitutions(n,o),0===this.name.strings["suppress-min"])for(this.freeters[n]=[],s=0,i=this.persons[n].length;i>s;s+=1)this.persons[n][s]=[];else if(0===this.institution.strings["suppress-min"]){for(this.institutions[n]=[],this.freeters[n]=this.freeters[n].concat(this.persons[n]),s=0,i=this.persons[n].length;i>s;s+=1)for(var l=0,u=this.persons[n][s].length;u>l;l+=1)this.freeters[n].push(this.persons[n][s][l]);this.persons[n]=[]}}},e.NameOutput.prototype._normalizeVariableValue=function(t,e){var s;return s="string"==typeof t[e]?[{literal:t[e]}]:t[e]?t[e].slice():[]},e.NameOutput.prototype._getFreeters=function(t,e){this.freeters[t]=[];for(var s=e.length-1;s>-1&&this.isPerson(e[s]);s+=-1){var i=this._checkNickname(e.pop());i&&this.freeters[t].push(i)}this.freeters[t].reverse(),this.freeters[t].length&&(this.nameset_offset+=1)},e.NameOutput.prototype._getPersonsAndInstitutions=function(t,e){this.persons[t]=[],this.institutions[t]=[];for(var s=[],i=!1,r=!0,a=e.length-1;a>-1;a+=-1)if(this.isPerson(e[a])){var n=this._checkNickname(e[a]);n&&s.push(n)}else i=!0,this.institutions[t].push(e[a]),r||(s.reverse(),this.persons[t].push(s),s=[]),r=!1;i&&(s.reverse(),this.persons[t].push(s),this.persons[t].reverse(),this.institutions[t].reverse())},e.NameOutput.prototype._clearValues=function(t){for(var e=t.length-1;e>-1;e+=-1)t.pop()},e.NameOutput.prototype._checkNickname=function(t){if(["interview","personal_communication"].indexOf(this.Item.type)>-1){var s="";if(s=e.Util.Names.getRawName(t),s&&this.state.sys.getAbbreviation&&(!this.item||!this.item["suppress-author"])){this.state.transform.loadAbbreviation("default","nickname",s);var i=this.state.transform.abbrevs["default"].nickname[s];i&&(t="!here>>>"===i?!1:{family:i,given:""})}}return t},e.NameOutput.prototype.joinPersons=function(t,e,s){var i;return i="undefined"==typeof s?1===this.etal_spec[e].freeters?this._joinEtAl(t,"name"):2===this.etal_spec[e].freeters?this._joinEllipsis(t,"name"):this.state.tmp.sort_key_flag?this._join(t," "):this._joinAnd(t,"name"):1===this.etal_spec[e].persons[s]?this._joinEtAl(t,"name"):2===this.etal_spec[e].persons[s]?this._joinEllipsis(t,"name"):this.state.tmp.sort_key_flag?this._join(t," "):this._joinAnd(t,"name")},e.NameOutput.prototype.joinInstitutionSets=function(t,e){var s;return s=1===this.etal_spec[e].institutions?this._joinEtAl(t,"institution"):2===this.etal_spec[e].institutions?this._joinEllipsis(t,"institution"):this._joinAnd(t,"institution")},e.NameOutput.prototype.joinPersonsAndInstitutions=function(t){return this._join(t,this.name.strings.delimiter)},e.NameOutput.prototype.joinFreetersAndInstitutionSets=function(t){var e=this._join(t,"[never here]",this["with"].single,this["with"].multiple);return e},e.NameOutput.prototype._joinEtAl=function(t,e){var s=this._join(t,this.name.strings.delimiter);return this.state.output.openLevel(this._getToken(e)),this.state.output.current.value().strings.delimiter="",this.state.output.append(s,"literal",!0),t.length>1?this.state.output.append(this["et-al"].multiple,"literal",!0):1===t.length&&this.state.output.append(this["et-al"].single,"literal",!0),this.state.output.closeLevel(),this.state.output.pop()},e.NameOutput.prototype._joinEllipsis=function(t,e){return this._join(t,this.name.strings.delimiter,this.name.ellipsis.single,this.name.ellipsis.multiple,e)},e.NameOutput.prototype._joinAnd=function(t,e){return this._join(t,this[e].strings.delimiter,this[e].and.single,this[e].and.multiple,e)},e.NameOutput.prototype._join=function(t,s,i,r,a){var n,o;if(!t)return!1;for(n=t.length-1;n>-1;n+=-1)t[n]&&0!==t[n].length&&t[n].blobs.length||(t=t.slice(0,n).concat(t.slice(n+1)));if(!t.length)return!1;if(i&&2===t.length)i&&(i=new e.Blob(i.blobs,i)),t=[t[0],i,t[1]];else{var l;for(l=r?2:1,n=0,o=t.length-l;o>n;n+=1)t[n].strings.suffix+=s;if(t.length>1){var u=t.pop();r?(r=new e.Blob(r.blobs,r),t.push(r)):(i&&(i=new e.Blob(i.blobs,i)),t.push(i)),t.push(u)}}for(this.state.output.openLevel(this._getToken(a)),i&&r&&(this.state.output.current.value().strings.delimiter=""),n=0,o=t.length;o>n;n+=1)this.state.output.append(t[n],!1,!0);return this.state.output.closeLevel(),this.state.output.pop()},e.NameOutput.prototype._getToken=function(t){var s=this[t];if("institution"===t){var i=new e.Token;return i}return s},e.NameOutput.prototype.setCommonTerm=function(){var t=this.variables,e=t.slice();if(e.sort(),this.common_term=e.join(""),!this.common_term)return!1;var s=!1;if(this.label&&this.label[this.variables[0]]&&(this.label[this.variables[0]].before?s=this.state.getTerm(this.common_term,this.label[this.variables[0]].before.strings.form,0):this.label[this.variables[0]].after&&(s=this.state.getTerm(this.common_term,this.label[this.variables[0]].after.strings.form,0))),!this.state.locale[this.state.opt.lang].terms[this.common_term]||!s||this.variables.length<2)return void(this.common_term=!1);for(var i=0,r=0,a=this.variables.length-1;a>r;r+=1){var n=this.variables[r],o=this.variables[r+1];if(this.freeters[n].length||this.freeters[o].length){if(this.etal_spec[n].freeters!==this.etal_spec[o].freeters||!this._compareNamesets(this.freeters[n],this.freeters[o]))return void(this.common_term=!1);i+=1}if(this.persons[n].length!==this.persons[o].length)return void(this.common_term=!1);for(var l=0,u=this.persons[n].length;u>l;l+=1)if(this.etal_spec[n].persons[l]!==this.etal_spec[o].persons[l]||!this._compareNamesets(this.persons[n][l],this.persons[o][l]))return void(this.common_term=!1)}},e.NameOutput.prototype._compareNamesets=function(t,s){if(t.length!==s.length)return!1;for(var i=0,r=s.length;r>i;i+=1)for(var a=(s[i],0),n=e.NAME_PARTS.length;n>a;a+=1){var o=e.NAME_PARTS[a];if(!t[i]||t[i][o]!=s[i][o])return!1}return!0},e.NameOutput.prototype.constrainNames=function(){this.names_count=0;for(var t,e=0,s=this.variables.length;s>e;e+=1){var i=this.variables[e];t=this.nameset_base+e,this.freeters[i].length&&(this.state.tmp.names_max.push(this.freeters[i].length,"literal"),this._imposeNameConstraints(this.freeters,this.freeters_count,i,t),this.names_count+=this.freeters[i].length),this.institutions[i].length&&(this.state.tmp.names_max.push(this.institutions[i].length,"literal"),this._imposeNameConstraints(this.institutions,this.institutions_count,i,t),this.persons[i]=this.persons[i].slice(0,this.institutions[i].length),this.names_count+=this.institutions[i].length);for(var r=0,a=this.persons[i].length;a>r;r+=1)this.persons[i][r].length&&(this.state.tmp.names_max.push(this.persons[i][r].length,"literal"),this._imposeNameConstraints(this.persons[i],this.persons_count[i],r,t),this.names_count+=this.persons[i][r].length)}},e.NameOutput.prototype._imposeNameConstraints=function(t,e,s,i){var r=t[s],a=this.state.tmp["et-al-min"];this.state.tmp.suppress_decorations?this.state.tmp.disambig_request&&this.state.tmp.disambig_request.names[i]?a=this.state.tmp.disambig_request.names[i]:e[s]>=this.etal_min&&(a=this.etal_use_first):(this.state.tmp.disambig_request&&this.state.tmp.disambig_request.names[i]>this.etal_use_first?a=e[s]<this.etal_min?e[s]:this.state.tmp.disambig_request.names[i]:e[s]>=this.etal_min&&(a=this.etal_use_first),this.etal_use_last&&a>this.etal_min-2&&(a=this.etal_min-2));var n=this.etal_min>=this.etal_use_first,o=e[s]>a;a>e[s]&&(a=r.length),n&&o&&(t[s]=this.etal_use_last?r.slice(0,a).concat(r.slice(-1)):r.slice(0,a)),this.state.tmp.disambig_settings.names[i]=t[s].length,this.state.disambiguate.padBase(this.state.tmp.disambig_settings)},e.NameOutput.prototype.disambigNames=function(){for(var t,e=0,s=this.variables.length;s>e;e+=1){var i=this.variables[e];if(t=this.nameset_base+e,this.freeters[i].length&&this._runDisambigNames(this.freeters[i],t),this.institutions[i].length){"undefined"==typeof this.state.tmp.disambig_settings.givens[t]&&(this.state.tmp.disambig_settings.givens[t]=[]);for(var r=0,a=this.institutions[i].length;a>r;r+=1)"undefined"==typeof this.state.tmp.disambig_settings.givens[t][r]&&this.state.tmp.disambig_settings.givens[t].push(2)}for(var r=0,a=this.persons[i].length;a>r;r+=1)this.persons[i][r].length&&this._runDisambigNames(this.persons[i][r],t)}},e.NameOutput.prototype._runDisambigNames=function(t,s){var i,r,a,n,o,l,u;for(o=0,l=t.length;l>o;o+=1)if(t[o].given||t[o].family){if(a=this.name.strings["initialize-with"],this.state.registry.namereg.addname(""+this.Item.id,t[o],o),i=this.state.tmp.disambig_settings.givens[s],"undefined"==typeof i)for(var h=0,p=s+1;p>h;h+=1)this.state.tmp.disambig_settings.givens[h]||(this.state.tmp.disambig_settings.givens[h]=[]);if(i=this.state.tmp.disambig_settings.givens[s][o],"undefined"==typeof i&&(r=this.name.strings.form,n=this.state.registry.namereg.evalname(""+this.Item.id,t[o],o,0,r,a),this.state.tmp.disambig_settings.givens[s].push(n)),r=this.name.strings.form,u=this.state.registry.namereg.evalname(""+this.Item.id,t[o],o,0,r,a),this.state.tmp.disambig_request){var c=this.state.tmp.disambig_settings.givens[s][o];1!==c||"by-cite"!==this.state.citation.opt["givenname-disambiguation-rule"]||"undefined"!=typeof this.name.strings["initialize-with"]&&"undefined"!=typeof t[o].given||(c=2),n=c,this.state.opt["disambiguate-add-givenname"]&&t[o].given&&(n=this.state.registry.namereg.evalname(""+this.Item.id,t[o],o,n,this.name.strings.form,this.name.strings["initialize-with"]))}else n=u;!this.state.tmp.just_looking&&this.item&&this.item.position===e.POSITION_FIRST&&u>n&&(n=u),this.state.tmp.sort_key_flag||(this.state.tmp.disambig_settings.givens[s][o]=n,"string"!=typeof a||"undefined"!=typeof this.name.strings.initialize&&!0!==this.name.strings.initialize||(this.state.tmp.disambig_settings.use_initials=!0))}},e.NameOutput.prototype.getEtAlConfig=function(){var t=this.item;this["et-al"]={},this.state.output.append(this.etal_term,this.etal_style,!0),this["et-al"].single=this.state.output.pop(),this["et-al"].single.strings.suffix=this.etal_suffix,this["et-al"].single.strings.prefix=this.etal_prefix_single,this.state.output.append(this.etal_term,this.etal_style,!0),this["et-al"].multiple=this.state.output.pop(),this["et-al"].multiple.strings.suffix=this.etal_suffix,this["et-al"].multiple.strings.prefix=this.etal_prefix_multiple,"undefined"==typeof t&&(t={}),t.position?(this.etal_min=this.name.strings["et-al-subsequent-min"]?this.name.strings["et-al-subsequent-min"]:this.name.strings["et-al-min"],this.etal_use_first=this.name.strings["et-al-subsequent-use-first"]?this.name.strings["et-al-subsequent-use-first"]:this.name.strings["et-al-use-first"]):(this.etal_min=this.state.tmp["et-al-min"]?this.state.tmp["et-al-min"]:this.name.strings["et-al-min"],this.etal_use_first=this.state.tmp["et-al-use-first"]?this.state.tmp["et-al-use-first"]:this.name.strings["et-al-use-first"],this.etal_use_last="boolean"==typeof this.state.tmp["et-al-use-last"]?this.state.tmp["et-al-use-last"]:this.name.strings["et-al-use-last"]),this.state.tmp["et-al-min"]||(this.state.tmp["et-al-min"]=this.etal_min)},e.NameOutput.prototype.setEtAlParameters=function(){var t,e,s,i;for(t=0,e=this.variables.length;e>t;t+=1){var r=this.variables[t];for("undefined"==typeof this.etal_spec[r]&&(this.etal_spec[r]={freeters:0,institutions:0,persons:[]}),this.etal_spec[this.nameset_base+t]=this.etal_spec[r],this.freeters[r].length&&this._setEtAlParameter("freeters",r),s=0,i=this.persons[r].length;i>s;s+=1)"undefined"==typeof this.etal_spec[r][s]&&(this.etal_spec[r].persons[s]=0),this._setEtAlParameter("persons",r,s);this.institutions[r].length&&this._setEtAlParameter("institutions",r)}},e.NameOutput.prototype._setEtAlParameter=function(t,e,s){var i,r;"persons"===t?(i=this.persons[e][s],r=this.persons_count[e][s]):(i=this[t][e],r=this[t+"_count"][e]),i.length<r&&!this.state.tmp.sort_key_flag?this.etal_use_last?"persons"===t?this.etal_spec[e].persons[s]=2:this.etal_spec[e][t]=2:"persons"===t?this.etal_spec[e].persons[s]=1:this.etal_spec[e][t]=1:"persons"===t?this.etal_spec[e].persons[s]=0:this.etal_spec[e][t]=0},e.NameOutput.prototype.renderAllNames=function(){for(var t,e=0,s=this.variables.length;s>e;e+=1){var i=this.variables[e];t=this.nameset_base+e,this.freeters[i].length&&(this.freeters[i]=this._renderPersonalNames(this.freeters[i],t));for(var r=0,a=this.institutions[i].length;a>r;r+=1)this.persons[i][r]=this._renderPersonalNames(this.persons[i][r],t,r)}this.renderInstitutionNames()},e.NameOutput.prototype.renderInstitutionNames=function(){for(var t=0,e=this.variables.length;e>t;t+=1)for(var s=this.variables[t],i=0,r=this.institutions[s].length;r>i;i+=1){var a,n,o,l,u,i,r,h,p=this.institutions[s][i];if(h=this.state.tmp.extension?["sort"]:p.isInstitution?this.state.opt["cite-lang-prefs"].institutions:this.state.opt["cite-lang-prefs"].persons,slot={primary:"locale-orig",secondary:!1,tertiary:!1},h)for(var c=["primary","secondary","tertiary"],f=0,m=c.length;m>f&&!(h.length-1<f);f+=1)h[f]&&(slot[c[f]]="locale-"+h[f]);else slot.primary="locale-translat";"bibliography"===this.state.tmp.area||"citation"===this.state.tmp.area&&"note"===this.state.opt.xclass&&this.item&&!this.item.position||(slot.secondary=!1,slot.tertiary=!1);var g;this.setRenderedName(p),g=this.getName(p,slot.primary,!0);var d=g.name,b=g.usedOrig;switch(d&&(d=this.fixupInstitution(d,s,i)),secondary=!1,slot.secondary&&(g=this.getName(p,slot.secondary,!1,b),secondary=g.name,b=g.usedOrig,secondary&&(secondary=this.fixupInstitution(secondary,s,i))),tertiary=!1,slot.tertiary&&(g=this.getName(p,slot.tertiary,!1,b),tertiary=g.name,tertiary&&(tertiary=this.fixupInstitution(tertiary,s,i))),this.institution.strings["institution-parts"]){case"short":d["short"].length?(l=this._getShortStyle(),a=[this._renderOneInstitutionPart(d["short"],l)]):(u=this._getLongStyle(d,s,i),a=[this._renderOneInstitutionPart(d["long"],u)]);break;case"short-long":u=this._getLongStyle(d,s,i),l=this._getShortStyle(),n=this._renderOneInstitutionPart(d["short"],l),o=this._composeOneInstitutionPart([d,secondary,tertiary],slot,u),a=[n,o];break;case"long-short":u=this._getLongStyle(d,s,i),l=this._getShortStyle(),n=this._renderOneInstitutionPart(d["short"],l),o=this._composeOneInstitutionPart([d,secondary,tertiary],slot,u,!0),a=[o,n];break;default:u=this._getLongStyle(d,s,i),a=[this._composeOneInstitutionPart([d,secondary,tertiary],slot,u)]}this.institutions[s][i]=this._join(a,"")}},e.NameOutput.prototype._composeOneInstitutionPart=function(t,s,i){var r=!1,a=!1,n=!1;t[0]&&(r=this._renderOneInstitutionPart(t[0]["long"],i)),t[1]&&(a=this._renderOneInstitutionPart(t[1]["long"],i)),t[2]&&(n=this._renderOneInstitutionPart(t[2]["long"],i));var o;return a||n?(this.state.output.openLevel("empty"),this.state.output.append(r),secondary_tok=e.Util.cloneToken(i),s.secondary&&(secondary_tok.strings.prefix=this.state.opt.citeAffixes.institutions[s.secondary].prefix,secondary_tok.strings.suffix=this.state.opt.citeAffixes.institutions[s.secondary].suffix,secondary_tok.strings.prefix||(secondary_tok.strings.prefix=" ")),this.state.output.append(a,secondary_tok),tertiary_tok=e.Util.cloneToken(i),s.tertiary&&(tertiary_tok.strings.prefix=this.state.opt.citeAffixes.institutions[s.tertiary].prefix,tertiary_tok.strings.suffix=this.state.opt.citeAffixes.institutions[s.tertiary].suffix,tertiary_tok.strings.prefix||(tertiary_tok.strings.prefix=" ")),this.state.output.append(n,tertiary_tok),this.state.output.closeLevel(),o=this.state.output.pop()):o=r,o},e.NameOutput.prototype._renderOneInstitutionPart=function(t,s){for(var i=0,r=t.length;r>i;i+=1)if(t[i]){var a=t[i];if(this.state.tmp.strip_periods)a=a.replace(/\./g,"");else for(var n=0,o=s.decorations.length;o>n;n+=1)if("@strip-periods"===s.decorations[n][0]&&"true"===s.decorations[n][1]){a=a.replace(/\./g,"");break}this.state.tmp.group_context.value()[2]=!0,this.state.tmp.can_substitute.replace(!1,e.LITERAL),"!here>>>"===a?t[i]=!1:(this.state.output.append(a,s,!0),t[i]=this.state.output.pop())}return"undefined"==typeof this.institution.strings["part-separator"]&&(this.institution.strings["part-separator"]=this.name.strings.delimiter),this._join(t,this.institution.strings["part-separator"])},e.NameOutput.prototype._renderPersonalNames=function(t,s,i){var r=!1;if(t.length){for(var a=[],n=0,o=t.length;o>n;n+=1){var r,l,u=t[n];if(l=this.state.tmp.extension?["sort"]:u.isInstitution?this.state.opt["cite-lang-prefs"].institutions:this.state.opt["cite-lang-prefs"].persons,slot={primary:"locale-orig",secondary:!1,tertiary:!1},l)for(var h=["primary","secondary","tertiary"],p=0,c=h.length;c>p&&!(l.length-1<p);p+=1)slot[h[p]]="locale-"+l[p];else slot.primary="locale-translat";(this.state.tmp.sort_key_flag||"bibliography"!==this.state.tmp.area&&("citation"!==this.state.tmp.area||"note"!==this.state.opt.xclass||!this.item||this.item.position))&&(slot.secondary=!1,slot.tertiary=!1),this.setRenderedName(u);var f=this.getName(u,slot.primary,!0),m=this._renderOnePersonalName(f.name,s,n,i);secondary=!1,slot.secondary&&(f=this.getName(u,slot.secondary,!1,f.usedOrig),f.name&&(secondary=this._renderOnePersonalName(f.name,s,n,i))),tertiary=!1,slot.tertiary&&(f=this.getName(u,slot.tertiary,!1,f.usedOrig),f.name&&(tertiary=this._renderOnePersonalName(f.name,s,n,i)));var g;secondary||tertiary?(this.state.output.openLevel("empty"),this.state.output.append(m),secondary_tok=new e.Token,slot.secondary&&(secondary_tok.strings.prefix=this.state.opt.citeAffixes.persons[slot.secondary].prefix,secondary_tok.strings.suffix=this.state.opt.citeAffixes.persons[slot.secondary].suffix,secondary_tok.strings.prefix||(secondary_tok.strings.prefix=" ")),this.state.output.append(secondary,secondary_tok),tertiary_tok=new e.Token,slot.tertiary&&(tertiary_tok.strings.prefix=this.state.opt.citeAffixes.persons[slot.tertiary].prefix,tertiary_tok.strings.suffix=this.state.opt.citeAffixes.persons[slot.tertiary].suffix,tertiary_tok.strings.prefix||(tertiary_tok.strings.prefix=" ")),this.state.output.append(tertiary,tertiary_tok),this.state.output.closeLevel(),g=this.state.output.pop()):g=m,a.push(g)}r=this.joinPersons(a,s,i)}return r},e.NameOutput.prototype._isRomanesque=function(t){var s=2;if(t.family.replace('"',"","g").match(e.ROMANESQUE_REGEXP)||(s=0),!s&&t.given&&t.given.match(e.STARTSWITH_ROMANESQUE_REGEXP)&&(s=1),2==s){if(t.multi&&t.multi.main)var i=t.multi.main.slice(0,2);else this.Item.language&&(i=this.Item.language.slice(0,2));["ja","zh"].indexOf(i)>-1&&(s=1)}return s},e.NameOutput.prototype._renderOnePersonalName=function(t,s,i,r){var a=t,n=this._droppingParticle(a,s,r),o=this._familyName(a),l=this._nonDroppingParticle(a),u=this._givenName(a,s,i),h=this._nameSuffix(a);this._isShort(s,i)&&!a["full-form-always"]&&(n=!1,u=!1,h=!1);var p=this.name.strings["sort-separator"];p||(p="");var c;c=a["comma-suffix"]?", ":" ";var f,m,g,d,b=this._isRomanesque(a),_=l&&"-"===l.blobs.slice(-1);return 0===b?f=this._join([l,o,u],""):1===b||a["static-ordering"]?f=this._join([l,o,u]," "):a["reverse-ordering"]?f=this._join([u,l,o]," "):this.state.tmp.sort_key_flag?"never"===this.state.opt["demote-non-dropping-particle"]?(g=this._join([l,o,n]," "),m=this._join([g,u]," "),f=this._join([m,h]," ")):(d=this._join([u,n,l]," "),m=this._join([o,d]," "),f=this._join([m,h]," ")):"all"===this.name.strings["name-as-sort-order"]||"first"===this.name.strings["name-as-sort-order"]&&0===i&&(0===r||"undefined"==typeof r)?(["Lord","Lady"].indexOf(a.given)>-1&&(p=", "),["always","display-and-sort"].indexOf(this.state.opt["demote-non-dropping-particle"])>-1&&!_?(d=this._join([u,n],a["comma-dropping-particle"]+" "),d=this._join([d,l]," "),d&&this.given&&(d.strings.prefix=this.given.strings.prefix,d.strings.suffix=this.given.strings.suffix),o&&this.family&&(o.strings.prefix=this.family.strings.prefix,o.strings.suffix=this.family.strings.suffix),m=this._join([o,d],p),f=this._join([m,h],p)):("bibliography"===this.state.tmp.area&&!this.state.tmp.term_predecessor&&l&&(_||(l.blobs=e.Output.Formatters["capitalize-first"](this.state,l.blobs))),g=_?this._join([l,o],""):this._join([l,o]," "),g&&this.family&&(g.strings.prefix=this.family.strings.prefix,g.strings.suffix=this.family.strings.suffix),d=this._join([u,n],a["comma-dropping-particle"]+" "),d&&this.given&&(d.strings.prefix=this.given.strings.prefix,d.strings.suffix=this.given.strings.suffix),m=this._join([g,d],p),f=this._join([m,h],p))):(a["dropping-particle"]&&a.family&&!a["non-dropping-particle"]&&["'","\u02bc","\u2019"].indexOf(a["dropping-particle"].slice(-1))>-1&&(o=this._join([n,o],""),n=!1),this.state.tmp.term_predecessor||u||"bibliography"!==this.state.tmp.area||(!n&&l?_||(l.blobs=e.Output.Formatters["capitalize-first"](this.state,l.blobs)):n&&(n.blobs=e.Output.Formatters["capitalize-first"](this.state,n.blobs))),_?(d=this._join([l,o],""),d=this._join([n,d]," ")):d=this._join([n,l,o]," "),d=this._join([d,h],c),d&&this.family&&(d.strings.prefix=this.family.strings.prefix,d.strings.suffix=this.family.strings.suffix),u&&this.given&&(u.strings.prefix=this.given.strings.prefix,u.strings.suffix=this.given.strings.suffix),d.strings.prefix&&(a["comma-dropping-particle"]=""),f=this._join([u,d],a["comma-dropping-particle"]+" ")),this.state.tmp.group_context.value()[2]=!0,this.state.tmp.can_substitute.replace(!1,e.LITERAL),this.state.tmp.term_predecessor=!0,this.state.tmp.name_node.children.push(f),f},e.NameOutput.prototype._isShort=function(t,e){return 0===this.state.tmp.disambig_settings.givens[t][e]?!0:!1},e.NameOutput.prototype._normalizeNameInput=function(t){var e={literal:t.literal,family:t.family,isInstitution:t.isInstitution,given:t.given,suffix:t.suffix,"comma-suffix":t["comma-suffix"],"non-dropping-particle":t["non-dropping-particle"],"dropping-particle":t["dropping-particle"],"static-ordering":t["static-ordering"],"reverse-ordering":t["reverse-ordering"],"full-form-always":t["full-form-always"],"parse-names":t["parse-names"],"comma-dropping-particle":"",block_initialize:t.block_initialize,multi:t.multi};return this._parseName(e),e},e.NameOutput.prototype._stripPeriods=function(t,e){var s=this[t+"_decor"];if(e)if(this.state.tmp.strip_periods)e=e.replace(/\./g,"");else if(s)for(var i=0,r=s.decorations.length;r>i;i+=1)if("@strip-periods"===s.decorations[i][0]&&"true"===s.decorations[i][1]){e=e.replace(/\./g,"");break}return e},e.NameOutput.prototype._nonDroppingParticle=function(t){var e=t["non-dropping-particle"];e&&this.state.tmp.sort_key_flag&&(e=e.replace(/[\'\u2019]/,""));var s=this._stripPeriods("family",e);return this.state.output.append(s,this.family_decor,!0)?this.state.output.pop():!1},e.NameOutput.prototype._droppingParticle=function(t,e,s){var i=t["dropping-particle"];i&&this.state.tmp.sort_key_flag&&(i=i.replace(/[\'\u2019]/,""));var r=this._stripPeriods("given",i);if(t["dropping-particle"]&&t["dropping-particle"].match(/^et.?al[^a-z]$/))this.name.strings["et-al-use-last"]?"undefined"==typeof s?this.etal_spec[e].freeters=2:this.etal_spec[e].persons=2:"undefined"==typeof s?this.etal_spec[e].freeters=1:this.etal_spec[e].persons=1,t["comma-dropping-particle"]="";else if(this.state.output.append(r,this.given_decor,!0))return this.state.output.pop();return!1},e.NameOutput.prototype._familyName=function(t){var e=this._stripPeriods("family",t.family);return this.state.output.append(e,this.family_decor,!0)?this.state.output.pop():!1},e.NameOutput.prototype._givenName=function(t,s,i){if(this.name.strings.initialize===!1)t.family&&t.given&&this.name.strings.initialize===!1&&(t.given=e.Util.Names.initializeWith(this.state,t.given,this.name.strings["initialize-with"],!0)),t.given=e.Util.Names.unInitialize(this.state,t.given);else if(t.family&&1===this.state.tmp.disambig_settings.givens[s][i]&&!t.block_initialize){var r=this.name.strings["initialize-with"];t.given=e.Util.Names.initializeWith(this.state,t.given,r)}else t.given=e.Util.Names.unInitialize(this.state,t.given);var a=this._stripPeriods("given",t.given),n=this.state.output.append(a,this.given_decor,!0);return n?(ret=this.state.output.pop(),ret):!1},e.NameOutput.prototype._nameSuffix=function(t){var s=t.suffix;"string"==typeof this.name.strings["initialize-with"]&&(s=e.Util.Names.initializeWith(this.state,t.suffix,this.name.strings["initialize-with"],!0)),s=this._stripPeriods("family",s);var i="";s&&"."===s.slice(-1)&&(s=s.slice(0,-1),i=".");var r=this.state.output.append(s,"empty",!0);return r?(ret=this.state.output.pop(),ret.strings.suffix=i+ret.strings.suffix,ret):!1},e.NameOutput.prototype._getLongStyle=function(t){var s;return s=t["short"].length&&this.institutionpart["long-with-short"]?this.institutionpart["long-with-short"]:this.institutionpart["long"],s||(s=new e.Token),s},e.NameOutput.prototype._getShortStyle=function(){var t;return t=this.institutionpart["short"]?this.institutionpart["short"]:new e.Token},e.NameOutput.prototype._parseName=function(t){var e,s;if(!t["parse-names"]&&"undefined"!=typeof t["parse-names"])return t;t.family&&!t.given&&t.isInstitution&&(t.literal=t.family,t.family=void 0,t.isInstitution=void 0);var i;if(t.family&&'"'===t.family.slice(0,1)&&'"'===t.family.slice(-1)||!t["parse-names"]&&"undefined"!=typeof t["parse-names"]?(t.family=t.family.slice(1,-1),i=!0,t["parse-names"]=0):i=!1,!t["non-dropping-particle"]&&t.family&&!i&&t.given&&(e=t.family.match(/^((?:[\'\u2019a-z][ \'\u2019a-z]*[-\s\'\u2019]+|[ABDVL][^ ][-\s]+[a-z]*\s*|[ABDVL][^ ][^ ][-\s]+[a-z]*\s*))/),e&&(t.family=t.family.slice(e[1].length),t["non-dropping-particle"]=e[1].replace(/\s+$/,"").replace("'","\u2019"))),!t.suffix&&t.given&&(e=t.given.match(/(\s*,!*\s*)/))){s=t.given.indexOf(e[1]);var r=t.given.slice(s+e[1].length),a=t.given.slice(s,s+e[1].length).replace(/\s*/g,"");r.length<=3?(2===a.length&&(t["comma-suffix"]=!0),t.suffix=r):!t["dropping-particle"]&&t.given&&(t["dropping-particle"]=r,t["comma-dropping-particle"]=","),t.given=t.given.slice(0,s)}!t["dropping-particle"]&&t.given&&(e=t.given.match(/(\s+)([a-z][ \'\u2019a-z]*)$/),e&&(t.given=t.given.slice(0,-1*(e[1].length+e[2].length)),t["dropping-particle"]=e[2]))},e.NameOutput.prototype.getName=function(t,e,s,r){if(r&&"locale-orig"===e)return{name:!1,usedOrig:r};t.family||(t.family=""),t.given||(t.given="");var a={};a["static-ordering"]=this.getStaticOrder(t);var n=!0;if("locale-orig"!==e&&(n=!1,t.multi)){var o=this.state.opt[e];for(i=0,ilen=o.length;i<ilen;i+=1)if(l=o[i],t.multi._key[l]){n=!0,t=t.multi._key[l],a=this.getNameParams(l),a.transliterated=!0;
break}}if(!n){var l=!1;t.multi&&t.multi.main?l=t.multi.main:this.Item.language&&(l=this.Item.language),l&&(a=this.getNameParams(l))}if(!s&&!n)return{name:!1,usedOrig:r};t.family||(t.family=""),t.given||(t.given=""),t={family:t.family,given:t.given,"non-dropping-particle":t["non-dropping-particle"],"dropping-particle":t["dropping-particle"],suffix:t.suffix,"static-ordering":a["static-ordering"],"reverse-ordering":a["reverse-ordering"],"full-form-always":a["full-form-always"],"parse-names":t["parse-names"],"comma-suffix":t["comma-suffix"],"comma-dropping-particle":t["comma-dropping-particle"],transliterated:a.transliterated,block_initialize:a["block-initialize"],literal:t.literal,isInstitution:t.isInstitution,multi:t.multi},!t.literal&&!t.given&&t.family&&t.isInstitution&&(t.literal=t.family),t.literal&&(delete t.family,delete t.given),t=this._normalizeNameInput(t);var u;return u=r?r:!n,{name:t,usedOrig:u}},e.NameOutput.prototype.getNameParams=function(t){var s={},i=e.localeResolve(this.Item.language,this.state.opt["default-locale"][0]),r=this.state.locale[i.best]?i.best:this.state.opt["default-locale"][0],a=this.state.locale[r].opts["name-as-sort-order"],n=this.state.locale[r].opts["name-as-reverse-order"],o=this.state.locale[r].opts["name-never-short"],l=t.split("-")[0];return a&&a[l]&&(s["static-ordering"]=!0,s["reverse-ordering"]=!1),n&&n[l]&&(s["reverse-ordering"]=!0,s["static-ordering"]=!1),o&&o[l]&&(s["full-form-always"]=!0),s["static-ordering"]&&(s["block-initialize"]=!0),s},e.NameOutput.prototype.setRenderedName=function(t){if("bibliography"===this.state.tmp.area){for(var s="",i=0,r=e.NAME_PARTS.length;r>i;i+=1)t[e.NAME_PARTS[i]]&&(s+=t[e.NAME_PARTS[i]]);this.state.tmp.rendered_name.push(s)}},e.NameOutput.prototype.fixupInstitution=function(t,e,s){this.state.sys.getHumanForm&&"legal_case"===this.Item.type&&"authority"===e&&(t.literal=this.state.sys.getHumanForm(this.Item.jurisdiction,t.literal)),t=this._splitInstitution(t,e,s),this.institution.strings["reverse-order"]&&t["long"].reverse();var i=t["long"],r=i.slice();if(this.state.sys.getAbbreviation)for(var a=this.Item.jurisdiction,n=0,o=i.length;o>n;n+=1)a=this.state.transform.loadAbbreviation(a,"institution-part",i[n]),this.state.transform.abbrevs[a]["institution-part"][i[n]]&&(r[n]=this.state.transform.abbrevs[a]["institution-part"][i[n]]);return t["short"]=r,t},e.NameOutput.prototype.getStaticOrder=function(t,s){var i=!1;return!s&&t["static-ordering"]?i=!0:0===this._isRomanesque(t)?i=!0:(!t.multi||!t.multi.main)&&this.Item.language&&["vi","hu"].indexOf(this.Item.language)>-1?i=!0:t.multi&&t.multi.main&&["vi","hu"].indexOf(t.multi.main.slice(0,2))>-1?i=!0:this.state.opt["auto-vietnamese-names"]&&e.VIETNAMESE_NAMES.exec(t.family+" "+t.given)&&e.VIETNAMESE_SPECIALS.exec(t.family+t.given)&&(i=!0),i},e.NameOutput.prototype._splitInstitution=function(t,e,s){var i={},r=t.literal.replace(/\s*\|\s*/g,"|");if(r=r.split("|"),"short"===this.institution.strings.form&&this.state.sys.getAbbreviation)for(var a=this.Item.jurisdiction,n=r.length;n>0;n+=-1){var o=r.slice(0,n).join("|");if(a=this.state.transform.loadAbbreviation(a,"institution-entire",o),this.state.transform.abbrevs[a]["institution-entire"][o]){var l=this.state.transform.abbrevs[a]["institution-entire"][o];l=this.state.transform.quashCheck(l);var u=l.split(/>>[0-9]{4}>>/),h=l.match(/>>([0-9]{4})>>/);if(l=u.pop(),u.length>0&&this.Item["original-date"]&&this.Item["original-date"].year)for(var p=h.length-1;p>0&&!(parseInt(this.Item["original-date"].year,10)>=parseInt(h[p],10));p+=-1)l=u.pop();l=l.replace(/\s*\|\s*/g,"|"),r=[l]}}return r.reverse(),i["long"]=this._trimInstitution(r,e,s),i},e.NameOutput.prototype._trimInstitution=function(t,e){var s=!1,i=!1,r=!1,a=t.slice();return this.institution&&("undefined"!=typeof this.institution.strings["use-first"]&&(s=this.institution.strings["use-first"]),"undefined"!=typeof this.institution.strings["stop-last"]&&(a=a.slice(0,this.institution.strings["stop-last"]),t=t.slice(0,this.institution.strings["stop-last"])),"undefined"!=typeof this.institution.strings["use-last"]&&(i=this.institution.strings["use-last"])),!1===s&&(0===this.persons[e].length&&(s=this.institution.strings["substitute-use-first"]),s||(s=0)),!1===i&&(i=s?0:t.length),s>t.length-i&&(s=t.length-i),r&&(i=0),t=t.slice(0,s),a=a.slice(s),i&&(i>a.length&&(i=a.length),i&&(t=t.concat(a.slice(a.length-i)))),t},e.PublisherOutput=function(t,e){this.state=t,this.group_tok=e,this.varlist=[]},e.PublisherOutput.prototype.render=function(){this.clearVars(),this.composeAndBlob(),this.composeElements(),this.composePublishers(),this.joinPublishers()},e.PublisherOutput.prototype.composeAndBlob=function(){this.and_blob={};var t=!1;"text"===this.group_tok.strings.and?t=this.state.getTerm("and"):"symbol"===this.group_tok.strings.and&&(t="&");var s=new e.Token;s.strings.suffix=" ",s.strings.prefix=" ",this.state.output.append(t,s,!0);var i=this.state.output.pop();s.strings.prefix=this.group_tok.strings["subgroup-delimiter"],this.state.output.append(t,s,!0);var r=this.state.output.pop();this.and_blob.single=!1,this.and_blob.multiple=!1,t&&("always"===this.group_tok.strings["subgroup-delimiter-precedes-last"]?this.and_blob.single=r:"never"===this.group_tok.strings["subgroup-delimiter-precedes-last"]?(this.and_blob.single=i,this.and_blob.multiple=i):(this.and_blob.single=i,this.and_blob.multiple=r))},e.PublisherOutput.prototype.composeElements=function(){for(var t=0,e=2;e>t;t+=1)for(var s=["publisher","publisher-place"][t],i=0,r=this["publisher-list"].length;r>i;i+=1){var a=this[s+"-list"][i],n=this[s+"-token"];this.state.output.append(a,n,!0),this[s+"-list"][i]=this.state.output.pop()}},e.PublisherOutput.prototype.composePublishers=function(){for(var t,e=0,s=this["publisher-list"].length;s>e;e+=1){t=[this[this.varlist[0]+"-list"][e],this[this.varlist[1]+"-list"][e]],this["publisher-list"][e]=this._join(t,this.group_tok.strings.delimiter)}},e.PublisherOutput.prototype.joinPublishers=function(){var t=this["publisher-list"],e=(this.name_delimiter,this._join(t,this.group_tok.strings["subgroup-delimiter"],this.and_blob.single,this.and_blob.multiple,this.group_tok));this.state.output.append(e,"literal")},e.PublisherOutput.prototype._join=e.NameOutput.prototype._join,e.PublisherOutput.prototype._getToken=e.NameOutput.prototype._getToken,e.PublisherOutput.prototype.clearVars=function(){this.state.tmp["publisher-list"]=!1,this.state.tmp["publisher-place-list"]=!1,this.state.tmp["publisher-group-token"]=!1,this.state.tmp["publisher-token"]=!1,this.state.tmp["publisher-place-token"]=!1},e.evaluateLabel=function(t,s,i,r){var a;"locator"===t.strings.term?(r&&r.label&&(a="sub verbo"===r.label?"sub-verbo":r.label),a||(a="page")):a=t.strings.term;var n=t.strings.plural;return r&&"number"==typeof r.force_pluralism?n=r.force_pluralism:"number"!=typeof n&&("locator"===t.strings.term?r&&r.locator&&(s.opt.development_extensions.locator_parsing_for_plurals?(s.tmp.shadow_numbers.locator||s.processNumber(!1,r,"locator",i.type),n=s.tmp.shadow_numbers.locator.plural):n=e.evaluateStringPluralism(r.locator)):["page","page-first"].indexOf(t.variables[0])>-1?(s.processNumber(!1,i,a,i.type),n=s.tmp.shadow_numbers[a].plural,a=s.tmp.shadow_numbers[a].label):(s.tmp.shadow_numbers[a]||s.processNumber(!1,i,a,i.type),n=s.tmp.shadow_numbers[a].plural),t.decorations&&(s.opt.development_extensions.csl_reverse_lookup_support||s.sys.csl_reverse_lookup_support)&&(t.decorations.reverse(),t.decorations.push(["@showid","true",t.cslid]),t.decorations.reverse())),e.castLabel(s,t,a,n,e.TOLERANT)},e.evaluateStringPluralism=function(t){if(t){var e=t.match(/(?:[0-9],\s*[0-9]|\s+and\s+|&|([0-9]+)\s*[\-\u2013]\s*([0-9]+))/);if(e&&(!e[1]||parseInt(e[1],10)<parseInt(e[2],10)))return 1}return 0},e.castLabel=function(t,e,s,i,r){var a=e.strings.form;t.tmp.group_context.value()[5]&&(a=t.tmp.group_context.value()[5]);var n=t.getTerm(s,a,i,!1,r);if(t.tmp.strip_periods)n=n.replace(/\./g,"");else for(var o=0,l=e.decorations.length;l>o;o+=1)if("@strip-periods"===e.decorations[o][0]&&"true"===e.decorations[o][1]){n=n.replace(/\./g,"");break}return n},e.Node.name={build:function(t,s){var i;[e.SINGLETON,e.START].indexOf(this.tokentype)>-1&&(t.fixOpt(this,"name-delimiter","name_delimiter"),t.fixOpt(this,"name-form","form"),t.fixOpt(this,"and","and"),t.fixOpt(this,"delimiter-precedes-last","delimiter-precedes-last"),t.fixOpt(this,"delimiter-precedes-et-al","delimiter-precedes-et-al"),t.fixOpt(this,"initialize-with","initialize-with"),t.fixOpt(this,"initialize","initialize"),t.fixOpt(this,"name-as-sort-order","name-as-sort-order"),t.fixOpt(this,"sort-separator","sort-separator"),t.fixOpt(this,"and","and"),t.fixOpt(this,"et-al-min","et-al-min"),t.fixOpt(this,"et-al-use-first","et-al-use-first"),t.fixOpt(this,"et-al-use-last","et-al-use-last"),t.fixOpt(this,"et-al-subsequent-min","et-al-subsequent-min"),t.fixOpt(this,"et-al-subsequent-use-first","et-al-subsequent-use-first"),this.strings["et-al-subsequent-min"]&&this.strings["et-al-subsequent-min"]!==this.strings["et-al-min"]&&(t.opt.update_mode=e.POSITION),this.strings["et-al-subsequent-use-first"]&&this.strings["et-al-subsequent-use-first"]!==this.strings["et-al-use-first"]&&(t.opt.update_mode=e.POSITION),this.strings.delimiter="undefined"==typeof this.strings.name_delimiter?", ":this.strings.name_delimiter,this.strings["et-al-use-last"]&&(this.ellipsis_term="\u2026",this.ellipsis_prefix_single=" ",this.ellipsis_prefix_multiple=this.strings.delimiter,this.ellipsis_suffix=" "),i=function(t){t.tmp.etal_term="et-al",t.tmp.name_delimiter=this.strings.delimiter,t.tmp["delimiter-precedes-et-al"]=this.strings["delimiter-precedes-et-al"],"text"===this.strings.and?this.and_term=t.getTerm("and","long",0):"symbol"===this.strings.and&&(this.and_term=t.opt.development_extensions.expect_and_symbol_form?t.getTerm("and","symbol",0):"&"),t.tmp.and_term=this.and_term,e.STARTSWITH_ROMANESQUE_REGEXP.test(this.and_term)?(this.and_prefix_single=" ",this.and_prefix_multiple=", ","string"==typeof this.strings.delimiter&&(this.and_prefix_multiple=this.strings.delimiter),this.and_suffix=" ",t.build.name_delimiter=this.strings.delimiter):(this.and_prefix_single="",this.and_prefix_multiple="",this.and_suffix=""),"always"===this.strings["delimiter-precedes-last"]?this.and_prefix_single=this.strings.delimiter:"never"===this.strings["delimiter-precedes-last"]?this.and_prefix_multiple&&(this.and_prefix_multiple=" "):"after-inverted-name"===this.strings["delimiter-precedes-last"]&&(this.and_prefix_single&&(this.and_prefix_single=this.strings.delimiter),this.and_prefix_multiple&&(this.and_prefix_multiple=" ")),this.and={},this.strings.and?(t.output.append(this.and_term,"empty",!0),this.and.single=t.output.pop(),this.and.single.strings.prefix=this.and_prefix_single,this.and.single.strings.suffix=this.and_suffix,t.output.append(this.and_term,"empty",!0),this.and.multiple=t.output.pop(),this.and.multiple.strings.prefix=this.and_prefix_multiple,this.and.multiple.strings.suffix=this.and_suffix):this.strings.delimiter&&(this.and.single=new e.Blob(this.strings.delimiter),this.and.single.strings.prefix="",this.and.single.strings.suffix="",this.and.multiple=new e.Blob(this.strings.delimiter),this.and.multiple.strings.prefix="",this.and.multiple.strings.suffix=""),this.ellipsis={},this.strings["et-al-use-last"]&&(this.ellipsis.single=new e.Blob(this.ellipsis_term),this.ellipsis.single.strings.prefix=this.ellipsis_prefix_single,this.ellipsis.single.strings.suffix=this.ellipsis_suffix,this.ellipsis.multiple=new e.Blob(this.ellipsis_term),this.ellipsis.multiple.strings.prefix=this.ellipsis_prefix_multiple,this.ellipsis.multiple.strings.suffix=this.ellipsis_suffix),"undefined"==typeof t.tmp["et-al-min"]&&(t.tmp["et-al-min"]=this.strings["et-al-min"]),"undefined"==typeof t.tmp["et-al-use-first"]&&(t.tmp["et-al-use-first"]=this.strings["et-al-use-first"]),"undefined"==typeof t.tmp["et-al-use-last"]&&(t.tmp["et-al-use-last"]=this.strings["et-al-use-last"]),t.nameOutput.name=this},t.build.name_flag=!0,this.execs.push(i)),s.push(this)}},e.Node["name-part"]={build:function(t){t.build[this.strings.name]=this}},e.Node.names={build:function(t,s){var i;if((this.tokentype===e.START||this.tokentype===e.SINGLETON)&&(e.Util.substituteStart.call(this,t,s),t.build.substitute_level.push(1),t.fixOpt(this,"names-delimiter","delimiter")),this.tokentype===e.SINGLETON){t.build.names_variables.push(this.variables);for(var r=0,a=this.variables.length;a>r;r+=1)t.build.name_label[this.variables[r]]=t.build.name_label[t.build.names_variables.slice(0)[0]];i=function(t){t.nameOutput.reinit(this)},this.execs.push(i)}if(this.tokentype===e.START&&(t.build.names_flag=!0,t.build.names_level+=1,1===t.build.names_level&&(t.build.names_variables=[],t.build.name_label={}),t.build.names_variables.push(this.variables),i=function(t){t.tmp.can_substitute.push(!0),t.parallel.StartVariable("names",this.variables[0]),t.nameOutput.init(this)},this.execs.push(i)),this.tokentype===e.END){for(var r=0,a=3;a>r;r+=1){var n=["family","given","et-al"][r];this[n]=t.build[n],1===t.build.names_level&&(t.build[n]=void 0)}this.label=t.build.name_label,1===t.build.names_level&&(t.build.name_label={}),t.build.names_level+=-1,t.build.names_variables.pop();var o="with",l="",u="";e.STARTSWITH_ROMANESQUE_REGEXP.test(o)&&(l=" ",u=" "),this["with"]={},this["with"].single=new e.Blob(o),this["with"].single.strings.suffix=u,this["with"].multiple=new e.Blob(o),this["with"].multiple.strings.suffix=u,"always"===this.strings["delimiter-precedes-last"]?(this["with"].single.strings.prefix=this.strings.delimiter,this["with"].multiple.strings.prefix=this.strings.delimiter):"contextual"===this.strings["delimiter-precedes-last"]?(this["with"].single.strings.prefix=l,this["with"].multiple.strings.prefix=this.strings.delimiter):"after-inverted-name"===this.strings["delimiter-precedes-last"]?(this["with"].single.strings.prefix=this.strings.delimiter,this["with"].multiple.strings.prefix=l):(this["with"].single.strings.prefix=l,this["with"].multiple.strings.prefix=l),i=function(t){this.etal_style=t.tmp.etal_node?t.tmp.etal_node:"empty",this.etal_term=t.getTerm(t.tmp.etal_term,"long",0),e.STARTSWITH_ROMANESQUE_REGEXP.test(this.etal_term)?(this.etal_prefix_single=" ",this.etal_prefix_multiple=t.tmp.name_delimiter,"always"===t.tmp["delimiter-precedes-et-al"]?this.etal_prefix_single=t.tmp.name_delimiter:"never"===t.tmp["delimiter-precedes-et-al"]?this.etal_prefix_multiple=" ":"after-inverted-name"===t.tmp["delimiter-precedes-et-al"]&&(this.etal_prefix_single=t.tmp.name_delimiter,this.etal_prefix_multiple=" "),this.etal_suffix=""):(this.etal_prefix_single="",this.etal_prefix_multiple="",this.etal_suffix="");for(var s=0,i=3;i>s;s+=1){var r=["family","given"][s];t.nameOutput[r]=this[r]}t.nameOutput["with"]=this["with"],t.nameOutput.label=this.label,t.nameOutput.etal_style=this.etal_style,t.nameOutput.etal_term=this.etal_term,t.nameOutput.etal_prefix_single=this.etal_prefix_single,t.nameOutput.etal_prefix_multiple=this.etal_prefix_multiple,t.nameOutput.etal_suffix=this.etal_suffix,t.nameOutput.outputNames(),t.tmp["et-al-use-first"]=void 0,t.tmp["et-al-min"]=void 0,t.tmp["et-al-use-last"]=void 0},this.execs.push(i),i=function(t){t.tmp.can_substitute.pop()||t.tmp.can_substitute.replace(!1,e.LITERAL),t.parallel.CloseVariable("names"),1===t.tmp.can_substitute.mystack.length&&(t.tmp.can_block_substitute=!1)},this.execs.push(i),t.build.name_flag=!1}s.push(this),(this.tokentype===e.END||this.tokentype===e.SINGLETON)&&(t.build.substitute_level.pop(),e.Util.substituteEnd.call(this,t,s))}},e.Node.number={build:function(t,s){var i;e.Util.substituteStart.call(this,t,s),"roman"===this.strings.form?this.formatter=t.fun.romanizer:"ordinal"===this.strings.form?this.formatter=t.fun.ordinalizer:"long-ordinal"===this.strings.form&&(this.formatter=t.fun.long_ordinalizer),"undefined"==typeof this.successor_prefix&&(this.successor_prefix=t[t.build.area].opt.layout_delimiter),"undefined"==typeof this.splice_prefix&&(this.splice_prefix=t[t.build.area].opt.layout_delimiter),i=function(t,s,i){var r,a,n,o;if(0!==this.variables.length){if("undefined"==typeof i)var i={};var l,u;if(l=this.variables[0],"locator"!==l||!t.tmp.just_looking){t.parallel.StartVariable(this.variables[0]),t.parallel.AppendToVariable("locator"===this.variables[0]?s.section:s[this.variables[0]]);var h=new RegExp("(?:&|, | and |"+t.getTerm("page-range-delimiter")+")");"collection-number"===l&&"legal_case"===s.type&&(t.tmp.renders_collection_number=!0);var p=s[this.variables[0]],c="long";if(this.strings.label_form_override&&(c=this.strings.label_form_override),"locator"===l&&i.locator)if(i.locator=i.locator.replace(/([^\\])\s*-\s*/,"$1"+t.getTerm("page-range-delimiter")),u=i.locator.match(e.STATUTE_SUBDIV_GROUPED_REGEX)){for(o=i.locator.split(e.STATUTE_SUBDIV_PLAIN_REGEX),r=0,a=o.length;a>r;r+=1)o[r]=t.fun.page_mangler(o[r]);for(n=[o[0]],!this.strings.label_form_override&&t.tmp.group_context.value()[5]&&(c=t.tmp.group_context.value()[5]),r=1,a=o.length;a>r;r+=1){var f=0;o[r].match(h)&&(f=1);var m=e.STATUTE_SUBDIV_STRINGS[u[r-1].replace(/^\s*/,"")],g=c;i.section_label_count>r&&i.section_form_override&&(g=i.section_form_override),n.push(t.getTerm(m,g,f)),n.push(o[r].replace(/^\s*/,""))}p=n.join(" "),p=p.replace(/\\/,"","g"),t.output.append(p,this)}else p=t.fun.page_mangler(i.locator),p=p.replace(/\\/,"","g"),t.output.append(p,this);else{var d=this;(!t.tmp.shadow_numbers[l]||t.tmp.shadow_numbers[l].values.length&&t.tmp.shadow_numbers[l].values[0][2]===!1)&&("locator"===l?t.processNumber(d,i,l,s.type):t.processNumber(d,s,l,s.type));var b,_=t.tmp.shadow_numbers[l].values,y="",v="page";if(["bill","gazette","legislation","legal_case","treaty"].indexOf(s.type)>-1&&"collection-number"===l&&(v="year"),("number"===l&&["bill","gazette","legislation","treaty"].indexOf(s.type)>-1||t.opt[v+"-range-format"])&&!this.strings.prefix&&!this.strings.suffix&&!this.strings.form)for(r=0,a=_.length;a>r;r+=1)y+=_[r][1];if(y&&!y.match(/^[\-.\u20130-9]+$/)){if("number"===l&&["bill","gazette","legislation","treaty"].indexOf(s.type)>-1){var x=y.split(/\s/)[0];if(x&&(n=[],u=y.match(e.STATUTE_SUBDIV_GROUPED_REGEX))){for(o=y.split(e.STATUTE_SUBDIV_PLAIN_REGEX),r=1,a=o.length;a>r;r+=1)n.push(t.getTerm(e.STATUTE_SUBDIV_STRINGS[u[r-1].replace(/^\s+/,"")],this.strings.label_form_override)),n.push(o[r].replace(/^\s+/,""));y=n.join(" ")}}t.output.append(y,this)}else if(_.length){for(t.output.openLevel("empty"),r=0,a=_.length;a>r;r+=1)b=new e[_[r][0]](_[r][1],_[r][2],s.id),r>0&&(b.strings.prefix=b.strings.prefix.replace(/^\s*/,"")),r<_.length-1&&(b.strings.suffix=b.strings.suffix.replace(/\s*$/,"")),"undefined"==typeof b.gender&&(b.gender=t.locale[t.opt.lang]["noun-genders"][l]),t.output.append(b,"literal",!1,!1,!0);t.output.closeLevel("empty")}}"locator"===l&&t.tmp.done_vars.push("locator"),t.parallel.CloseVariable("number")}}},this.execs.push(i),s.push(this),e.Util.substituteEnd.call(this,t,s)}},e.Node.sort={build:function(t,s){if(s=t[t.build.root+"_sort"].tokens,this.tokentype===e.START){"citation"===t.build.area&&(t.parallel.use_parallels=!1,t.opt.sort_citations=!0),t.build.area=t.build.root+"_sort",t.build.extension="_sort";var i=function(t,s){if(t.opt.has_layout_locale){for(var i,r=e.localeResolve(s.language,t.opt["default-locale"][0]),a=t[t.tmp.area.slice(0,-5)].opt.sort_locales,n=0,o=a.length;o>n&&(i=a[n][r.bare],i||(i=a[n][r.best]),!i);n+=1);i||(i=t.opt["default-locale"][0]),t.tmp.lang_sort_hold=t.opt.lang,t.opt.lang=i}};this.execs.push(i)}if(this.tokentype===e.END){t.build.area=t.build.root,t.build.extension="";var i=function(t){t.opt.has_layout_locale&&(t.opt.lang=t.tmp.lang_sort_hold,delete t.tmp.lang_sort_hold)};this.execs.push(i)}s.push(this)}},e.Node.substitute={build:function(t,s){var i;this.tokentype===e.START&&(i=function(t){t.tmp.can_block_substitute=!0,t.tmp.value.length&&t.tmp.can_substitute.replace(!1,e.LITERAL)},this.execs.push(i)),s.push(this)}},e.Node.text={build:function(t,s){var i,r,a,n,o,l,u,h,p,c,f,m,g,d,b;if(this.postponed_macro)return e.expandMacro.call(t,this);if(e.Util.substituteStart.call(this,t,s),this.variables_real||(this.variables_real=[]),this.variables||(this.variables=[]),r="long",a=0,this.strings.form&&(r=this.strings.form),this.strings.plural&&(a=this.strings.plural),"citation-number"===this.variables_real[0]||"year-suffix"===this.variables_real[0]||"citation-label"===this.variables_real[0])"citation-number"===this.variables_real[0]?("citation"===t.build.root&&(t.opt.update_mode=e.NUMERIC),"bibliography"===t.build.root&&(t.opt.bib_mode=e.NUMERIC),"bibliography_sort"===t.build.area&&(t.opt.citation_number_sort_used=!0),"citation-number"===t[t.tmp.area].opt.collapse&&(this.range_prefix=t.getTerm("citation-range-delimiter")),this.successor_prefix=t[t.build.area].opt.layout_delimiter,this.splice_prefix=t[t.build.area].opt.layout_delimiter,i=function(t,s,i){if(n=""+s.id,!t.tmp.just_looking){if(i&&i["author-only"]){t.tmp.element_trace.replace("do-not-suppress-me");var r=t.getTerm("reference","long","singular");"undefined"==typeof r&&(r="reference"),m=e.Output.Formatters["capitalize-first"](t,r),t.output.append(m+" "),t.tmp.last_element_trace=!0}i&&i["suppress-author"]&&(t.tmp.last_element_trace&&t.tmp.element_trace.replace("suppress-me"),t.tmp.last_element_trace=!1),o=t.registry.registry[n].seq,t.opt.citation_number_slug?t.output.append(t.opt.citation_number_slug,this):(l=new e.NumericBlob(o,this,s.id),t.output.append(l,"literal"))}},this.execs.push(i)):"year-suffix"===this.variables_real[0]?(t.opt.has_year_suffix=!0,"year-suffix-ranged"===t[t.tmp.area].opt.collapse&&(this.range_prefix=t.getTerm("citation-range-delimiter")),this.successor_prefix=t[t.build.area].opt.layout_delimiter,t[t.tmp.area].opt["year-suffix-delimiter"]&&(this.successor_prefix=t[t.build.area].opt["year-suffix-delimiter"]),i=function(t,s){if(t.registry.registry[s.id]&&t.registry.registry[s.id].disambig.year_suffix!==!1&&!t.tmp.just_looking){for(o=parseInt(t.registry.registry[s.id].disambig.year_suffix,10),l=new e.NumericBlob(o,this,s.id),u=new e.Util.Suffixator(e.SUFFIX_CHARS),l.setFormatter(u),t.output.append(l,"literal"),h=!1,g=t.tmp.group_context.mystack.length,d=0;g>d;d+=1)if(b=t.tmp.group_context.mystack[d],!b[2]&&(b[1]||!b[1]&&!b[0])){h=!0;break}p=t[t.tmp.area].opt["year-suffix-delimiter"],h&&p&&!t.tmp.sort_key_flag&&(t.tmp.splice_delimiter=t[t.tmp.area].opt["year-suffix-delimiter"])}},this.execs.push(i)):"citation-label"===this.variables_real[0]&&(t.opt.has_year_suffix=!0,i=function(t,e){c=e["citation-label"],c||(c=t.getCitationLabel(e)),t.tmp.just_looking||(f="",t.registry.registry[e.id]&&t.registry.registry[e.id].disambig.year_suffix!==!1&&(o=parseInt(t.registry.registry[e.id].disambig.year_suffix,10),f=t.fun.suffixator.format(o)),c+=f),t.output.append(c,this)},this.execs.push(i));else if(this.strings.term)i=function(t,s){var i=t.opt.gender[s.type],n=this.strings.term;n=t.getTerm(n,r,a,i,!1,"accessed"===n);var o;if(""!==n&&(b=t.tmp.group_context.value(),b[0]=!0,t.tmp.group_context.replace(b)),o=t.tmp.term_predecessor||"in-text"===t.opt["class"]&&"citation"===t.tmp.area?n:e.Output.Formatters["capitalize-first"](t,n),t.tmp.strip_periods)o=o.replace(/\./g,"");else for(var l=0,u=this.decorations.length;u>l;l+=1)if("@strip-periods"===this.decorations[l][0]&&"true"===this.decorations[l][1]){o=o.replace(/\./g,"");break}t.output.append(o,this)},this.execs.push(i),t.build.term=!1,t.build.form=!1,t.build.plural=!1;else if(this.variables_real.length){if(i=function(t,e){var s=this.variables[0];"title"!==s||"short"!==r&&!e["title-short"]||(s="title-short"),t.parallel.StartVariable(s),t.parallel.AppendToVariable(e[s],s)},this.execs.push(i),e.MULTI_FIELDS.indexOf(this.variables_real[0])>-1){var _=this.variables[0],y=!1,v=!1,x=!1;"short"===r?"container-title"===this.variables_real[0]?v="journalAbbreviation":"title"===this.variables_real[0]&&(v="title-short"):_=!1,t.build.extension?x=!0:(x=!0,y=!0),i=t.transform.getOutputFunction(this.variables,_,y,v,x)}else i=e.CITE_FIELDS.indexOf(this.variables_real[0])>-1?function(t,e,s){if(s&&s[this.variables[0]]){var i=""+s[this.variables[0]];i=i.replace(/([^\\])--*/g,"$1"+t.getTerm("page-range-delimiter")),i=i.replace(/\\-/g,"-"),t.output.append(i,this,!1,!1,!0),"locator-revision"===this.variables[0]&&t.tmp.done_vars.push("locator-revision")}}:"page-first"===this.variables_real[0]?function(t,e){var s;s=t.getVariable(e,"page-first",r),s&&(s=s.replace("\\",""),t.output.append(s,this,!1,!1,!0))}:"page"===this.variables_real[0]?function(t,e){var s=t.getVariable(e,"page",r);s&&(s=""+s,s=s.replace(/([^\\])--*/g,"$1"+t.getTerm("page-range-delimiter")),s=s.replace(/\\-/g,"-"),s=t.fun.page_mangler(s),t.output.append(s,this,!1,!1,!0))}:"volume"===this.variables_real[0]?function(t,e){if(this.variables[0]){var s=t.getVariable(e,this.variables[0],r);s&&t.output.append(s,this)}}:["URL","DOI"].indexOf(this.variables_real[0])>-1?function(t,e){var s;this.variables[0]&&(s=t.getVariable(e,this.variables[0],r),s&&(t.opt.development_extensions.wrap_url_and_doi?this.decorations.length&&this.decorations[0][0]==="@"+this.variables[0]||(this.decorations=[["@"+this.variables[0],"true"]].concat(this.decorations)):this.decorations.length&&this.decorations[0][0]==="@"+this.variables[0]&&(this.decorations=this.decorations.slice(1)),t.output.append(s,this,!1,!1,!0)))}:"section"===this.variables_real[0]?function(t,e){var s;s=t.getVariable(e,this.variables[0],r),s&&t.output.append(s,this)}:"hereinafter"===this.variables_real[0]?function(t,e){var s=t.transform.abbrevs["default"].hereinafter[e.id];s&&(t.output.append(s,this),t.tmp.group_context.value()[2]=!0)}:function(t,e){var s;this.variables[0]&&(s=t.getVariable(e,this.variables[0],r),s&&(s=""+s,s=s.replace("\\","","g"),t.output.append(s,this)))};this.execs.push(i),i=function(t){t.parallel.CloseVariable("text")},this.execs.push(i)}else this.strings.value&&(i=function(t){var e;e=t.tmp.group_context.value(),e[0]=!0,t.tmp.group_context.replace(e),t.output.append(this.strings.value,this)},this.execs.push(i));s.push(this),e.Util.substituteEnd.call(this,t,s)}},e.Attributes={},e.Attributes["@genre"]=function(t,e){e=e.replace("-"," ");var s=function(t){return e===t.genre?!0:!1};this.tests.push(s)},e.Attributes["@disambiguate"]=function(t,e){if("true"===e){t.opt.has_disambiguate=!0;var s=function(){return t.tmp.disambiguate_maxMax+=1,t.tmp.disambig_settings.disambiguate&&t.tmp.disambiguate_count<t.tmp.disambig_settings.disambiguate?(t.tmp.disambiguate_count+=1,!0):!1};this.tests.push(s)}else if("check-ambiguity-and-backreference"===e){var s=function(e){return t.registry.registry[e.id].disambig.disambiguate&&t.registry.registry[e.id]["citation-count"]>1?!0:!1};this.tests.push(s)}},e.Attributes["@is-numeric"]=function(t,s){for(var i=s.split(/\s+/),r=function(s){return function(i,r){var a=i;if(["locator","locator-revision"].indexOf(s)>-1&&(a=r),"undefined"==typeof a)return!1;if(e.NUMERIC_VARIABLES.indexOf(s)>-1){if(t.tmp.shadow_numbers[s]||t.processNumber(!1,a,s,i.type),a[s]&&t.tmp.shadow_numbers[s].numeric)return!0}else if(["title","locator-revision","version"].indexOf(s)>-1&&a[s]&&a[s].slice(-1)===""+parseInt(a[s].slice(-1),10))return!0;return!1}},a=0;a<i.length;a+=1)this.tests.push(r(i[a]))},e.Attributes["@is-uncertain-date"]=function(t,e){for(var s=e.split(/\s+/),i=function(t){return function(e){return e[t]&&e[t].circa?!0:!1}},r=0,a=s.length;a>r;r+=1)this.tests.push(i(s[r]))},e.Attributes["@locator"]=function(t,e){var s=e.replace("sub verbo","sub-verbo");s=s.split(/\s+/);for(var i=function(t){return function(e,s){var i;return i="undefined"!=typeof s&&s.label?"sub verbo"===s.label?"sub-verbo":s.label:"page",t===i?!0:!1}},r=0,a=s.length;a>r;r+=1)this.tests.push(i(s[r]))},e.Attributes["@position"]=function(t,s){var i;t.opt.update_mode=e.POSITION,t.parallel.use_parallels=!0;for(var r=s.split(/\s+/),a=function(e){return function(s,i){if("bibliography"===t.tmp.area)return!1;if(i&&"undefined"==typeof i.position&&(i.position=0),i&&"number"==typeof i.position){if(0===i.position&&0===e)return!0;if(e>0&&i.position>=e)return!0}else if(0===e)return!0;return!1}},n=0,o=r.length;o>n;n+=1){var i=r[n];"first"===i?i=e.POSITION_FIRST:"subsequent"===i?i=e.POSITION_SUBSEQUENT:"ibid"===i?i=e.POSITION_IBID:"ibid-with-locator"===i&&(i=e.POSITION_IBID_WITH_LOCATOR),this.tests.push("near-note"===i?function(t,s){return s&&s.position>=e.POSITION_SUBSEQUENT&&s["near-note"]?!0:!1}:a(i))}},e.Attributes["@type"]=function(t,e){for(var s=e.split(/\s+/),i=function(t){return function(e){var s=e.type===t;return s?!0:!1}},r=[],a=0,n=s.length;n>a;a+=1)r.push(i(s[a]));this.tests.push(t.fun.match.any(this,t,r))},e.Attributes["@variable"]=function(t,s){var i;if(this.variables=s.split(/\s+/),this.variables_real=this.variables.slice(),"label"===this.name&&this.variables[0])this.strings.term=this.variables[0];else if(["names","date","text","number"].indexOf(this.name)>-1)i=function(t,e,s){variables=this.variables_real.slice();for(var i=this.variables.length-1;i>-1;i+=-1)this.variables.pop();for(len=variables.length,pos=0;pos<len;pos+=1)-1!==t.tmp.done_vars.indexOf(variables[pos])||s&&"legal_case"===e.type&&s["suppress-author"]&&"title"===variables[pos]||this.variables.push(variables[pos]),t.tmp.can_block_substitute&&t.tmp.done_vars.push(variables[pos])},this.execs.push(i),i=function(t,s,i){for(output=!1,len=this.variables.length,pos=0;pos<len;pos+=1){if(variable=this.variables[pos],"authority"===variable&&"string"==typeof s[variable]&&"names"===this.name){var r={family:s[variable],isInstitution:!0,multi:{_key:{}}};if(s.multi&&s.multi._keys&&s.multi._keys[variable])for(var a in s.multi._keys[variable])creatorChild={family:s.multi._keys[variable][a],isInstitution:!0},r.multi._key[a]=creatorChild;s[variable]=[r]}if("short"!==this.strings.form||s[variable]||("title"===variable?variable="title-short":"container-title"===variable&&(variable="journalAbbreviation")),"year-suffix"===variable){output=!0;break}if(e.DATE_VARIABLES.indexOf(variable)>-1){if(t.opt.development_extensions.locator_date_and_revision&&"locator-date"===variable){output=!0;break}if(s[variable]){for(var n in s[variable])if((-1!==this.dateparts.indexOf(n)||"literal"===n)&&s[variable][n]){output=!0;break}if(output)break}}else{if("locator"===variable){i&&i.locator&&(output=!0);break}if("locator-revision"===variable){i&&i["locator-revision"]&&(output=!0);break}if(["citation-number","citation-label"].indexOf(variable)>-1){output=!0;break}if("first-reference-note-number"===variable){i&&i["first-reference-note-number"]&&(output=!0);break}if("hereinafter"===variable){t.transform.abbrevs["default"].hereinafter[s.id]&&t.sys.getAbbreviation&&s.id&&(output=!0);break}if("object"==typeof s[variable]){s[variable].length;break}if("string"==typeof s[variable]&&s[variable]){output=!0;break}if("number"==typeof s[variable]){output=!0;break}}if(output)break}flag=t.tmp.group_context.value(),output?(("citation-number"!==variable||"bibliography"!==t.tmp.area)&&(t.tmp.cite_renders_content=!0),flag[2]=!0,t.tmp.group_context.replace(flag),t.tmp.can_substitute.value()&&"bibliography"===t.tmp.area&&"string"==typeof s[variable]&&t.tmp.rendered_name.push(s[variable]),t.tmp.can_substitute.replace(!1,e.LITERAL)):flag[1]=!0},this.execs.push(i);else if(["if","else-if","condition"].indexOf(this.name)>-1)for(var r=function(e){return function(s,i){var r=s;if(i&&["locator","locator-revision","first-reference-note-number","locator-date"].indexOf(e)>-1&&(r=i),"hereinafter"===e&&t.sys.getAbbreviation&&r.id){if(t.transform.abbrevs["default"].hereinafter[r.id])return!0}else if(r[e]){if("number"==typeof r[e]||"string"==typeof r[e])return!0;if("object"==typeof r[e])for(key in r[e])if(r[e][key])return!0}return!1}},a=0,n=this.variables.length;n>a;a+=1)this.tests.push(r(this.variables[a]))},e.Attributes["@page"]=function(t,e){var s=e.replace("sub verbo","sub-verbo");s=s.split(/\s+/);for(var i=function(e){return function(s){var i;return t.processNumber(!1,s,"page",s.type),i=t.tmp.shadow_numbers.page.label?"sub verbo"===t.tmp.shadow_numbers.page.label?"sub-verbo":t.tmp.shadow_numbers.page.label:"page",e===i?!0:!1}},r=0,a=s.length;a>r;r+=1)this.tests.push(i(s[r]))},e.Attributes["@jurisdiction"]=function(t,e){for(var s=e.split(/\s+/),i=0,r=s.length;r>i;i+=1)s[i]=s[i].split(";");for(var a=function(t){return function(e){if(!e.jurisdiction)return!1;for(var s=e.jurisdiction.split(";"),i=0,r=s.length;r>i;i+=1)s[i]=s[i].split(";");for(i=t.length;i>0;i+=-1){var a=t.slice(0,i).join(";"),n=s.slice(0,i).join(";");if(a!==n)return!1}return!0}},i=0,r=s.length;r>i;i+=1){var n=s[i].slice();this.tests.push(a(n))}},e.Attributes["@context"]=function(t,e){var s=function(){var s=t.tmp.area.slice(0,e.length);
return s===e?!0:!1};this.tests.push(s)},e.Attributes["@has-year-only"]=function(t,e){for(var s=e.split(/\s+/),i=function(t){return function(e){var s=e[t];return!s||s.month||s.season?!1:!0}},r=0,a=s.length;a>r;r+=1)this.tests.push(i(s[r]))},e.Attributes["@has-to-month-or-season"]=function(t,e){for(var s=e.split(/\s+/),i=function(t){return function(e){var s=e[t];return!s||!s.month&&!s.season||s.day?!1:!0}},r=0,a=s.length;a>r;r+=1)this.tests.push(i(s[r]))},e.Attributes["@has-day"]=function(t,e){for(var s=e.split(/\s+/),i=function(t){return function(e){var s=e[t];return s&&s.day?!0:!1}},r=0,a=s.length;a>r;r+=1)this.tests.push(i(s[r]))},e.Attributes["@subjurisdictions"]=function(t,e){var s=parseInt(e,10),i=function(t){var e=0;return t.jurisdiction&&(e=t.jurisdiction.split(";").length),e&&(e+=-1),e>=s?!0:!1};this.tests.push(i)},e.Attributes["@is-plural"]=function(t,e){var s=function(t){var s=t[e];if(s&&s.length){for(var i=0,r=0,a=!1,n=0,o=s.length;o>n;n+=1)s[n].isInstitution&&(s[n].literal||s[n].family&&!s[n].given)?(r+=1,a=!1):(i+=1,a=!0);if(i>1)return!0;if(r>1)return!0;if(r&&a)return!0}return!1};this.tests.push(s)},e.Attributes["@locale"]=function(t,s){var i,r,a,n,o,l,u=t.opt["default-locale"][0];if("layout"===this.name){if(this.locale_raw=s,this.tokentype===e.START){var h=s.split(/\s+/),p={},c=e.localeResolve(h[0],u);c.generic?p[c.generic]=c.best:p[c.best]=c.best;for(var o=1,l=h.length;l>o;o+=1){var f=e.localeResolve(h[o],u);f.generic?p[f.generic]=c.best:p[f.best]=c.best}t[t.build.area].opt.sort_locales.push(p)}t.opt.has_layout_locale=!0}else{n=s.split(/\s+/);var m=[];for(o=0,l=n.length;l>o;o+=1)a=n[o],r=e.localeResolve(a,u),2===n[o].length&&m.push(r.bare),t.localeConfigure(r,!0),n[o]=r;var g=n.slice(),d=function(t,s,r){return function(a){var n;i=[],n=!1;var u,h=!1;for(u=a.language?a.language:s,h=e.localeResolve(u,s),o=0,l=t.length;l>o;o+=1)if(h.best===t[o].best){n=!0;break}return!n&&r.indexOf(h.bare)>-1&&(n=!0),n}};this.tests.push(d(g,u,m))}},e.Attributes["@locale-internal"]=function(t,s){var i,r,a,n,o,l;for(n=s.split(/\s+/),this.locale_bares=[],o=0,l=n.length;l>o;o+=1)a=n[o],r=e.localeResolve(a,t.opt["default-locale"][0]),2===n[o].length&&this.locale_bares.push(r.bare),t.localeConfigure(r),n[o]=r;this.locale_default=t.opt["default-locale"][0],this.locale=n[0].best,this.locale_list=n.slice();var u=function(s){return function(r){var n;i=[],n=!1;var u=!1;if(r.language&&(a=r.language,u=e.localeResolve(a,t.opt["default-locale"][0]),u.best===t.opt["default-locale"][0]&&(u=!1)),u){for(o=0,l=s.locale_list.length;l>o;o+=1)if(u.best===s.locale_list[o].best){t.opt.lang=s.locale,t.tmp.last_cite_locale=s.locale,t.output.openLevel("empty"),t.output.current.value().new_locale=s.locale,n=!0;break}!n&&s.locale_bares.indexOf(u.bare)>-1&&(t.opt.lang=s.locale,t.tmp.last_cite_locale=s.locale,t.output.openLevel("empty"),t.output.current.value().new_locale=s.locale,n=!0)}return n}},h=this;this.tests.push(u(h))},e.Attributes["@is-parallel"]=function(t,e){for(var s=e.split(" "),i=0,r=s.length;r>i;i+=1)"true"===s[i]?s[i]=!0:"false"===s[i]&&(s[i]=!1);this.strings.set_parallel_condition=s},e.Attributes["@gender"]=function(t,e){this.gender=e},e.Attributes["@cslid"]=function(t,e){this.cslid=parseInt(e,10)},e.Attributes["@label-form"]=function(t,e){this.strings.label_form_override=e},e.Attributes["@part-separator"]=function(t,e){this.strings["part-separator"]=e},e.Attributes["@leading-noise-words"]=function(t,e){this["leading-noise-words"]=e},e.Attributes["@name-never-short"]=function(t,e){this["name-never-short"]=e},e.Attributes["@class"]=function(t,e){t.opt["class"]=e},e.Attributes["@version"]=function(t,e){t.opt.version=e},e.Attributes["@value"]=function(t,e){this.strings.value=e},e.Attributes["@name"]=function(t,e){this.strings.name=e},e.Attributes["@form"]=function(t,e){this.strings.form=e},e.Attributes["@date-parts"]=function(t,e){this.strings["date-parts"]=e},e.Attributes["@range-delimiter"]=function(t,e){this.strings["range-delimiter"]=e},e.Attributes["@macro"]=function(t,e){this.postponed_macro=e},e.Attributes["@term"]=function(t,e){this.strings.term="sub verbo"===e?"sub-verbo":e},e.Attributes["@xmlns"]=function(){},e.Attributes["@lang"]=function(t,e){e&&(t.build.lang=e)},e.Attributes["@lingo"]=function(){},e.Attributes["@macro-has-date"]=function(){this["macro-has-date"]=!0},e.Attributes["@suffix"]=function(t,e){this.strings.suffix=e},e.Attributes["@prefix"]=function(t,e){this.strings.prefix=e},e.Attributes["@delimiter"]=function(t,e){"name"==this.name?this.strings.name_delimiter=e:this.strings.delimiter=e},e.Attributes["@match"]=function(t,e){this.match=e},e.Attributes["@names-min"]=function(t,e){var s=parseInt(e,10);t[t.tmp.area].opt.max_number_of_names<s&&(t[t.tmp.area].opt.max_number_of_names=s),this.strings["et-al-min"]=s},e.Attributes["@names-use-first"]=function(t,e){this.strings["et-al-use-first"]=parseInt(e,10)},e.Attributes["@names-use-last"]=function(t,e){this.strings["et-al-use-last"]="true"===e?!0:!1},e.Attributes["@sort"]=function(t,s){"descending"===s&&(this.strings.sort_direction=e.DESCENDING)},e.Attributes["@plural"]=function(t,e){"always"===e||"true"===e?this.strings.plural=1:"never"===e||"false"===e?this.strings.plural=0:"contextual"===e&&(this.strings.plural=!1)},e.Attributes["@number"]=function(t,e){var s,i=e.replace("sub verbo","sub-verbo");i=i.split(/\s+/),["if","else-if"].indexOf(this.name)>-1&&(s=function(t,e){var s,r=[];t.processNumber(!1,e,"number",e.type),s=t.tmp.shadow_numbers.number.label?"sub verbo"===t.tmp.shadow_numbers.number.label?"sub-verbo":t.tmp.shadow_numbers.number.label:"number";for(var a=0,n=i.length;n>a;a+=1)r.push(i[a]===s?!0:!1);return r},this.tests.push(s))},e.Attributes["@has-publisher-and-publisher-place"]=function(){this.strings["has-publisher-and-publisher-place"]=!0},e.Attributes["@publisher-delimiter-precedes-last"]=function(t,e){this.strings["publisher-delimiter-precedes-last"]=e},e.Attributes["@publisher-delimiter"]=function(t,e){this.strings["publisher-delimiter"]=e},e.Attributes["@publisher-and"]=function(t,e){this.strings["publisher-and"]=e},e.Attributes["@newdate"]=function(){},e.Attributes["@givenname-disambiguation-rule"]=function(t,s){e.GIVENNAME_DISAMBIGUATION_RULES.indexOf(s)>-1&&(t.citation.opt["givenname-disambiguation-rule"]=s)},e.Attributes["@collapse"]=function(t,e){e&&(t[this.name].opt.collapse=e)},e.Attributes["@cite-group-delimiter"]=function(t,e){e&&(t[t.tmp.area].opt.cite_group_delimiter=e)},e.Attributes["@names-delimiter"]=function(t,e){t.setOpt(this,"names-delimiter",e)},e.Attributes["@name-form"]=function(t,e){t.setOpt(this,"name-form",e)},e.Attributes["@subgroup-delimiter"]=function(t,e){this.strings["subgroup-delimiter"]=e},e.Attributes["@subgroup-delimiter-precedes-last"]=function(t,e){this.strings["subgroup-delimiter-precedes-last"]=e},e.Attributes["@name-delimiter"]=function(t,e){t.setOpt(this,"name-delimiter",e)},e.Attributes["@et-al-min"]=function(t,e){var s=parseInt(e,10);t[t.tmp.area].opt.max_number_of_names<s&&(t[t.tmp.area].opt.max_number_of_names=s),t.setOpt(this,"et-al-min",s)},e.Attributes["@et-al-use-first"]=function(t,e){t.setOpt(this,"et-al-use-first",parseInt(e,10))},e.Attributes["@et-al-use-last"]=function(t,e){"true"===e?t.setOpt(this,"et-al-use-last",!0):t.setOpt(this,"et-al-use-last",!1)},e.Attributes["@et-al-subsequent-min"]=function(t,e){var s=parseInt(e,10);t[t.tmp.area].opt.max_number_of_names<s&&(t[t.tmp.area].opt.max_number_of_names=s),t.setOpt(this,"et-al-subsequent-min",s)},e.Attributes["@et-al-subsequent-use-first"]=function(t,e){t.setOpt(this,"et-al-subsequent-use-first",parseInt(e,10))},e.Attributes["@suppress-min"]=function(t,e){this.strings["suppress-min"]=parseInt(e,10)},e.Attributes["@suppress-max"]=function(t,e){this.strings["suppress-max"]=parseInt(e,10)},e.Attributes["@and"]=function(t,e){t.setOpt(this,"and",e)},e.Attributes["@delimiter-precedes-last"]=function(t,e){t.setOpt(this,"delimiter-precedes-last",e)},e.Attributes["@delimiter-precedes-et-al"]=function(t,e){t.setOpt(this,"delimiter-precedes-et-al",e)},e.Attributes["@initialize-with"]=function(t,e){t.setOpt(this,"initialize-with",e)},e.Attributes["@initialize"]=function(t,e){"false"===e&&t.setOpt(this,"initialize",!1)},e.Attributes["@name-as-reverse-order"]=function(t,e){this["name-as-reverse-order"]=e},e.Attributes["@name-as-sort-order"]=function(t,e){"style-options"===this.name?this["name-as-sort-order"]=e:t.setOpt(this,"name-as-sort-order",e)},e.Attributes["@sort-separator"]=function(t,e){t.setOpt(this,"sort-separator",e)},e.Attributes["@year-suffix-delimiter"]=function(t,e){t[this.name].opt["year-suffix-delimiter"]=e},e.Attributes["@after-collapse-delimiter"]=function(t,e){t[this.name].opt["after-collapse-delimiter"]=e},e.Attributes["@subsequent-author-substitute"]=function(t,e){t[this.name].opt["subsequent-author-substitute"]=e},e.Attributes["@subsequent-author-substitute-rule"]=function(t,e){t[this.name].opt["subsequent-author-substitute-rule"]=e},e.Attributes["@disambiguate-add-names"]=function(t,e){"true"===e&&(t.opt["disambiguate-add-names"]=!0)},e.Attributes["@disambiguate-add-givenname"]=function(t,e){"true"===e&&(t.opt["disambiguate-add-givenname"]=!0)},e.Attributes["@disambiguate-add-year-suffix"]=function(t,e){"true"===e&&"numeric"!==t.opt.xclass&&(t.opt["disambiguate-add-year-suffix"]=!0)},e.Attributes["@second-field-align"]=function(t,e){("flush"===e||"margin"===e)&&(t[this.name].opt["second-field-align"]=e)},e.Attributes["@hanging-indent"]=function(t,e){"true"===e&&(t[this.name].opt.hangingindent=2)},e.Attributes["@line-spacing"]=function(t,e){e&&e.match(/^[.0-9]+$/)&&(t[this.name].opt["line-spacing"]=parseFloat(e,10))},e.Attributes["@entry-spacing"]=function(t,e){e&&e.match(/^[.0-9]+$/)&&(t[this.name].opt["entry-spacing"]=parseFloat(e,10))},e.Attributes["@near-note-distance"]=function(t,e){t[this.name].opt["near-note-distance"]=parseInt(e,10)},e.Attributes["@text-case"]=function(t,e){var s=function(t,s){if("normal"===e)this.text_case_normal=!0;else if(this.strings["text-case"]=e,"title"===e){{t.opt["default-locale"][0].slice(0,2)}s.jurisdiction&&(this.strings["text-case"]="passthrough")}};this.execs.push(s)},e.Attributes["@page-range-format"]=function(t,e){t.opt["page-range-format"]=e},e.Attributes["@year-range-format"]=function(t,e){t.opt["year-range-format"]=e},e.Attributes["@default-locale"]=function(t,e){var s,i,r,a,n;if(a=e.match(/-x-(sort|translit|translat)-/g))for(r=0,i=a.length;i>r;r+=1)a[r]=a[r].replace(/^-x-/,"").replace(/-$/,"");for(s=e.split(/-x-(?:sort|translit|translat)-/),n=[s[0]],r=1,i=s.length;i>r;r+=1)n.push(a[r-1]),n.push(s[r]);for(s=n.slice(),i=s.length,r=1;i>r;r+=2)t.opt["locale-"+s[r]].push(s[r+1].replace(/^\s*/g,"").replace(/\s*$/g,""));t.opt["default-locale"]=s.length?s.slice(0,1):["en"]},e.Attributes["@default-locale-sort"]=function(t,e){t.opt["default-locale-sort"]=e},e.Attributes["@demote-non-dropping-particle"]=function(t,e){t.opt["demote-non-dropping-particle"]=e},e.Attributes["@initialize-with-hyphen"]=function(t,e){"false"===e&&(t.opt["initialize-with-hyphen"]=!1)},e.Attributes["@institution-parts"]=function(t,e){this.strings["institution-parts"]=e},e.Attributes["@if-short"]=function(t,e){"true"===e&&(this.strings["if-short"]=!0)},e.Attributes["@substitute-use-first"]=function(t,e){this.strings["substitute-use-first"]=parseInt(e,10)},e.Attributes["@use-first"]=function(t,e){this.strings["use-first"]=parseInt(e,10)},e.Attributes["@stop-last"]=function(t,e){this.strings["stop-last"]=-1*parseInt(e,10)},e.Attributes["@oops"]=function(t,e){this.strings.oops=e},e.Attributes["@use-last"]=function(t,e){this.strings["use-last"]=parseInt(e,10)},e.Attributes["@reverse-order"]=function(t,e){"true"===e&&(this.strings["reverse-order"]=!0)},e.Attributes["@display"]=function(t,e){this.strings.cls=e},e.Stack=function(t,e){this.mystack=[],(e||t)&&this.mystack.push(t)},e.Stack.prototype.push=function(t,e){this.mystack.push(e||t?t:"")},e.Stack.prototype.clear=function(){this.mystack=[]},e.Stack.prototype.replace=function(t,e){if(0===this.mystack.length)throw"Internal CSL processor error: attempt to replace nonexistent stack item with "+t;this.mystack[this.mystack.length-1]=e||t?t:""},e.Stack.prototype.pop=function(){return this.mystack.pop()},e.Stack.prototype.value=function(){return this.mystack.slice(-1)[0]},e.Stack.prototype.length=function(){return this.mystack.length},e.Parallel=function(t){this.state=t,this.sets=new e.Stack([]),this.try_cite=!0,this.use_parallels=!1,this.midVars=["section","volume","container-title","collection-number","issue","page-first","page","number"],this.ignoreVarsLawGeneral=["first-reference-note-number","locator","label","page-first","page","genre"],this.ignoreVarsLawProceduralHistory=["issued","first-reference-note-number","locator","label","page-first","page","genre","jurisdiction"],this.ignoreVarsOrders=["first-reference-note-number"],this.ignoreVarsOther=["first-reference-note-number","locator","label","section","page-first","page"]},e.Parallel.prototype.isMid=function(t){return this.midVars.indexOf(t)>-1},e.Parallel.prototype.StartCitation=function(t,e){this.parallel_conditional_blobs_list=[],this.use_parallels&&(this.sortedItems=t,this.sortedItemsPos=-1,this.sets.clear(),this.sets.push([]),this.in_series=!0,this.delim_counter=0,this.delim_pointers=[],this.out=e?e:this.state.output.queue,this.master_was_neutral_cite=!0)},e.Parallel.prototype.StartCite=function(t,s,i){var r,a,n,o,l,u,h,p;if(this.use_parallels){this.sets.value().length&&this.sets.value()[0].itemId==t.id&&this.ComposeSet(),this.sortedItemsPos+=1,s&&(r=s.position),this.try_cite=!0;for(var c=!1,f=0,m=e.PARALLEL_MATCH_VARS.length;m>f;f+=1)if(t[e.PARALLEL_MATCH_VARS[f]]){c=!0;break}var g=!0,d=this.sets.value().slice(-1)[0];if(d&&d.Item){var b=d.Item.jurisdiction?d.Item.jurisdiction.split(";")[0]:"",_=t.jurisdiction?t.jurisdiction.split(";")[0]:"";d.Item.title!==t.title?g=!1:b!==_?g=!1:d.Item.type!==t.type?g=!1:["article-journal","article-magazine"].indexOf(t.type)>-1&&(this.state.opt.development_extensions.handle_parallel_articles&&d.Item["container-title"]===t["container-title"]||(g=!1))}if(g&&c&&-1!==e.PARALLEL_TYPES.indexOf(t.type)||(this.try_cite=!0,this.in_series&&(this.in_series=!1)),this.cite={},this.cite.front=[],this.cite.mid=[],this.cite.back=[],this.cite.front_collapse={},this.cite.back_forceme=[],this.cite.position=r,this.cite.Item=t,this.cite.itemId=""+t.id,this.cite.prevItemID=""+i,this.target="front",["treaty"].indexOf(t.type)>-1)this.ignoreVars=this.ignoreVarsOrders;else if(["article-journal","article-magazine"].indexOf(t.type)>-1)this.ignoreVars=this.ignoreVarsOther;else if(s&&s.prefix){this.ignoreVars=this.ignoreVarsLawProceduralHistory,this.cite.useProceduralHistory=!0;var y=this.sets.value()[this.sets.value().length-1];if(y&&y.back)for(var f=y.back.length-1;f>-1;f+=-1)y.back[f]&&y[y.back[f]]&&delete y[y.back[f]]}else this.ignoreVars=this.ignoreVarsLawGeneral;if(this.sortedItems&&this.sortedItemsPos>0&&this.sortedItemsPos<this.sortedItems.length){if(o=this.sortedItems[this.sortedItemsPos][1],u=""+this.sortedItems[this.sortedItemsPos-1][1].id,l=this.state.registry.registry[u].parallel,h=!1,l==o.id){for(a=this.sortedItemsPos-1,n=a;n>-1;n+=-1)if(this.sortedItems[n][1].id==t.id){h=this.sortedItems[n][1].locator;break}p=this.sortedItems[this.sortedItemsPos][1].locator,o.position=!h&&p?e.POSITION_IBID_WITH_LOCATOR:p===h?e.POSITION_IBID:e.POSITION_IBID_WITH_LOCATOR}}else{if(!this.state.registry.registry[t.id])return this.try_cite=!1,void(this.force_collapse=!1);this.state.registry.registry[t.id].parallel=!1}this.force_collapse=!1,this.state.registry.registry[t.id].parallel&&(this.force_collapse=!0)}},e.Parallel.prototype.StartVariable=function(t,s){if(this.use_parallels&&(this.try_cite||this.force_collapse)){if(this.variable="names"===t?t+":"+this.target:t,this.ignoreVars.indexOf(t)>-1)return;"container-title"===t&&0===this.sets.value().length&&(this.master_was_neutral_cite=!1),this.data={},this.data.value="",this.data.blobs=[];var i=this.isMid(t);"authority"===s&&"names:front"===this.variable?(this.try_cite=!0,this.in_series=!1):"front"===this.target&&i?this.target="mid":"mid"===this.target&&!i&&this.cite.Item.title&&"names"!==t?this.target="back":"back"===this.target&&i&&(this.try_cite=!0,this.in_series=!1),"number"===t?this.cite.front.push(this.variable):e.PARALLEL_COLLAPSING_MID_VARSET.indexOf(t)>-1?["article-journal","article-magazine"].indexOf(this.cite.Item.type)>-1?this.cite.mid.push(this.variable):this.cite.front.push(this.variable):this.cite[this.target].push(this.variable)}},e.Parallel.prototype.AppendBlobPointer=function(t){if(this.use_parallels){if(this.ignoreVars.indexOf(this.variable)>-1)return;if(this.use_parallels&&(this.force_collapse||this.try_cite)){if(["article-journal","article-magazine"].indexOf(this.cite.Item.type)>-1){if(["volume","page","page-first","issue"].indexOf(this.variable)>-1)return;if("container-title"===this.variable&&this.cite.mid.length>1)return}this.variable&&(this.try_cite||this.force_collapse)&&t&&t.blobs&&(this.cite.useProceduralHistory&&"back"===this.target||this.data.blobs.push([t,t.blobs.length]))}}},e.Parallel.prototype.AppendToVariable=function(t){if(this.use_parallels){if(this.ignoreVars.indexOf(this.variable)>-1)return;if(this.try_cite||this.force_collapse){this.data.value+="::"+t}}},e.Parallel.prototype.CloseVariable=function(){if(this.use_parallels){if(this.ignoreVars.indexOf(this.variable)>-1)return;if((this.try_cite||this.force_collapse)&&(this.cite[this.variable]=this.data,this.sets.value().length>0)){var t=this.sets.value()[this.sets.value().length-1];"front"===this.target&&"issued"===this.variable&&this.data.value&&this.master_was_neutral_cite&&(this.target="mid"),"front"===this.target?!t[this.variable]&&!this.data.value||t[this.variable]&&this.data.value===t[this.variable].value||"issued"!==this.variable&&(this.in_series=!1):"mid"===this.target?e.PARALLEL_COLLAPSING_MID_VARSET.indexOf(this.variable)>-1&&(this.cite.front_collapse[this.variable]=t[this.variable]&&t[this.variable].value===this.data.value?!0:!1):"back"===this.target&&t[this.variable]&&this.data.value!==t[this.variable].value&&-1===this.sets.value().slice(-1)[0].back_forceme.indexOf(this.variable)&&(this.in_series=!1)}this.variable=!1}},e.Parallel.prototype.CloseCite=function(){var t,e,s,i,r,a,n;if(this.use_parallels&&(this.force_collapse||this.try_cite)){if(i=!1,this.cite.front_collapse["container-title"]||(i=!0),this.cite.front_collapse.volume===!1&&(i=!0),this.cite.front_collapse["collection-number"]===!1&&(i=!0),this.cite.front_collapse.section===!1&&(i=!0),i&&(this.cite.use_journal_info=!0,n=this.cite.front.indexOf("section"),n>-1&&(this.cite.front=this.cite.front.slice(0,n).concat(this.cite.front.slice(n+1))),r=this.cite.front.indexOf("volume"),r>-1&&(this.cite.front=this.cite.front.slice(0,r).concat(this.cite.front.slice(r+1))),a=this.cite.front.indexOf("container-title"),a>-1&&(this.cite.front=this.cite.front.slice(0,a).concat(this.cite.front.slice(a+1))),collection_number_pos=this.cite.front.indexOf("collection-number"),collection_number_pos>-1&&(this.cite.front=this.cite.front.slice(0,collection_number_pos).concat(this.cite.front.slice(collection_number_pos+1)))),this.in_series||this.force_collapse||this.ComposeSet(!0),0===this.sets.value().length){for(has_date=!1,e=0,s=this.cite.back.length;s>e;e+=1)if(t=this.cite.back[e],"issued"===t&&this.cite.issued&&this.cite.issued.value){has_date=!0;break}has_date||this.cite.back_forceme.push("issued")}else{var o=this.cite.front.indexOf("issued");if((-1===o||this.master_was_neutral_cite)&&(this.cite.back_forceme=this.sets.value().slice(-1)[0].back_forceme),o>-1){var l=this.sets.value()[this.sets.value().length-1];l.issued||(this.cite.front=this.cite.front.slice(0,o).concat(this.cite.front.slice(o+1)))}this.master_was_neutral_cite&&this.cite.mid.indexOf("names:mid")>-1&&this.cite.front.push("names:mid")}this.sets.value().push(this.cite)}},e.Parallel.prototype.ComposeSet=function(){var t,s,i;if(this.use_parallels&&(this.force_collapse||this.try_cite)){var r=this.sets.value().length;if(1===this.sets.value().length)this.in_series||(this.sets.value().pop(),this.delim_counter+=1);else{for(i=this.sets.value().length,s=0;i>s;s+=1)t=this.sets.value()[s],0===s?this.delim_counter+=1:(this.delim_pointers.push(!t.Item.title&&t.use_journal_info?!1:this.delim_counter),this.delim_counter+=1),e.POSITION_FIRST===t.position&&(0===s?(this.state.registry.registry[t.itemId].master=!0,this.state.registry.registry[t.itemId].siblings=[],this.state.registry.registry[t.itemId].parallel=!1):t.prevItemID&&(this.state.registry.registry[t.itemId].parallel=this.state.registry.registry[t.prevItemID].parallel?this.state.registry.registry[t.prevItemID].parallel:t.prevItemID,this.state.registry.registry[t.itemId].siblings=this.state.registry.registry[t.prevItemID].siblings,this.state.registry.registry[t.itemId].siblings||(this.state.registry.registry[t.itemId].siblings=[],e.debug("WARNING: adding missing siblings array to registry object")),this.state.registry.registry[t.itemId].siblings.push(t.itemId)));this.sets.push([])}this.purgeGroupsIfParallel(2>r?!1:!0),this.in_series=!0}},e.Parallel.prototype.PruneOutputQueue=function(){var t,e,s,i,r,a;if(this.use_parallels)for(t=this.sets.mystack.length,e=0;t>e;e+=1)if(s=this.sets.mystack[e],s.length>1)for(r=s.length,i=0;r>i;i+=1)a=s[i],0===i?this.purgeVariableBlobs(a,a.back):i===s.length-1?this.purgeVariableBlobs(a,a.front.concat(a.back_forceme)):this.purgeVariableBlobs(a,a.front.concat(a.back))},e.Parallel.prototype.purgeVariableBlobs=function(t,e){var s,i,r,a,n,o,l;if(this.use_parallels){for(l=this.state.output.current.value(),"undefined"==typeof l.length&&(l=l.blobs),i=0,s=this.delim_pointers.length;s>i;i+=1)o=this.delim_pointers[i],o!==!1&&(l[o].parallel_delimiter=", ");for(s=e.length-1,i=s;i>-1;i+=-1)if(r=e[i],t[r])for(n=t[r].blobs.length-1,o=n;o>-1;o+=-1)a=t[r].blobs[o],a[0].blobs=a[0].blobs.slice(0,a[1]).concat(a[0].blobs.slice(a[1]+1)),this.state.tmp.has_purged_parallel=!0,a[0]&&a[0].strings&&"string"==typeof a[0].strings.oops&&a[0].parent&&a[0].parent&&(a[0].parent.parent.strings.delimiter=a[0].strings.oops)}},e.Parallel.prototype.purgeGroupsIfParallel=function(t){for(var e=this.parallel_conditional_blobs_list.length-1;e>-1;e+=-1){for(var s=this.parallel_conditional_blobs_list[e],i=!0,r=0,a=s.conditions.length;a>r;r+=1)if(!s.conditions[r]!=!!t&&("master"!==s.conditions[r]||this.state.registry.registry[s.id].master)&&("servant"!==s.conditions[r]||this.state.registry.registry[s.id].parallel)){var i=!1;break}if(i){for(var n=[];s.blobs.length>s.pos;)n.push(s.blobs.pop());for(n.length&&n.pop();n.length;)s.blobs.push(n.pop())}this.parallel_conditional_blobs_list.pop()}},e.Util={},e.Util.Match=function(){this.any=function(t,e,s){return function(t,e){for(var i=0,r=s.length;r>i;i+=1)if(result=s[i](t,e),result)return!0;return!1}},this.none=function(t,e,s){return function(t,e){for(var i=0,r=s.length;r>i;i+=1)if(result=s[i](t,e),result)return!1;return!0}},this.all=function(t,e,s){return function(t,e){for(var i=0,r=s.length;r>i;i+=1)if(result=s[i](t,e),!result)return!1;return!0}},this[void 0]=this.all,this.nand=function(t,e,s){return function(t,e){for(var i=0,r=s.length;r>i;i+=1)if(result=s[i](t,e),!result)return!0;return!1}}},e.Transform=function(t){function s(t,s,i,r,a,n){var o;if(!a)return r;var l=a,u=!1;if(["title","title-short"].indexOf(l)>-1&&!s.jurisdiction&&(u=!0),e.NUMERIC_VARIABLES.indexOf(a)>-1&&(a="number"),["publisher-place","event-place","jurisdiction","archive-place"].indexOf(a)>-1&&(a="place"),["publisher","authority"].indexOf(a)>-1&&(a="institution-part"),["genre","event","medium","title-short"].indexOf(a)>-1&&(a="title"),["archive"].indexOf(a)>-1&&(a="collection-title"),"jurisdiction"===l&&t.sys.getHumanForm&&r&&(r=t.sys.getHumanForm(r)),o="",t.sys.getAbbreviation){var h=t.transform.loadAbbreviation(s.jurisdiction,a,r,s.type,u);t.transform.abbrevs[h][a]&&r&&t.sys.getAbbreviation&&t.transform.abbrevs[h][a][r]&&(o=t.transform.abbrevs[h][a][r].replace("{stet}",r))}return o||t.opt.development_extensions.require_explicit_legal_case_title_short&&"legal_case"===s.type||!i||!s[i]||!n||(o=s[i]),o||(o=r),o&&o.match(/^\!(?:[^>]+,)*here(?:,[^>]+)*>>>/)&&(o="jurisdiction"===l&&["treaty","patent"].indexOf(s.type)>-1?o.replace(/^\![^>]*>>>\s*/,""):!1),o}function i(e,s){var i,r=t.opt["default-locale"][0].slice(0,2);return i=new RegExp(t.opt.development_extensions.strict_text_case_locales?"^([a-zA-Z]{2})(?:$|-.*| .*)":"^([a-zA-Z]{2})(?:$|-.*|.*)"),e.language&&(m=(""+e.language).match(i),r=m?m[1]:"tlh"),e.multi&&e.multi&&e.multi.main&&e.multi.main[s]&&(r=e.multi.main[s]),(!t.opt.development_extensions.strict_text_case_locales||t.opt.development_extensions.normalize_lang_keys_to_lowercase)&&(r=r.toLowerCase()),r}function r(e,s,r,a,n){var o,l,u,h;if(!e[s])return{name:"",usedOrig:n};if(u={name:"",usedOrig:n,locale:i(e,s)},h=t.opt[r],"locale-orig"===r)return u=n?{name:"",usedOrig:n}:{name:e[s],usedOrig:!1,locale:i(e,s)};if(a&&("undefined"==typeof h||0===h.length))return{name:e[s],usedOrig:!0,locale:i(e,s)};for(var p=0,c=h.length;c>p;p+=1){if(o=h[p],l=o.split(/[\-_]/)[0],o&&e.multi&&e.multi._keys[s]&&e.multi._keys[s][o]){u.name=e.multi._keys[s][o],u.locale=l;break}if(l&&e.multi&&e.multi._keys[s]&&e.multi._keys[s][l]){u.name=e.multi._keys[s][l],u.locale=l;break}}return!u.name&&a&&(u={name:e[s],usedOrig:!0,locale:i(e,s)}),u}function a(e,s,i,r,a){if(e||(e="default"),!i)return t.transform.abbrevs[e]||(t.transform.abbrevs[e]=new t.sys.AbbreviationSegments),e;if(t.sys.getAbbreviation){var n=["default"];if("default"!==e)for(var o=e.split(/\s*;\s*/),l=0,u=o.length;u>l;l+=1)n.push(o.slice(0,l+1).join(";"));for(var l=n.length-1;l>-1;l+=-1)if(t.transform.abbrevs[n[l]]||(t.transform.abbrevs[n[l]]=new t.sys.AbbreviationSegments),t.transform.abbrevs[n[l]][s][i]||t.sys.getAbbreviation(t.opt.styleID,t.transform.abbrevs,n[l],s,i,r,a),t.transform.abbrevs[n[l]][s][i]){l<n.length&&(t.transform.abbrevs[e][s][i]=t.transform.abbrevs[n[l]][s][i]);break}}return e}function n(e,i,r,a){var n=e.variables[0];if(t.publisherOutput&&r){if(-1===["publisher","publisher-place"].indexOf(n))return!1;t.publisherOutput[n+"-token"]=e,t.publisherOutput.varlist.push(n);var o=r.split(/;\s*/);o.length===t.publisherOutput[n+"-list"].length&&(t.publisherOutput[n+"-list"]=o);for(var l=0,u=o.length;u>l;l+=1)o[l]=s(t,i,!1,o[l],a,!0);return t.tmp[n+"-token"]=e,!0}return!1}function o(i,a,o,u){var h,p=e.LangPrefsMap[i[0]];return h=p?t.opt["cite-lang-prefs"][p]:!1,function(t,o,c){var f,m,g,d,b,_,y;if(!i[0]||!o[i[0]]&&!o[u])return null;if(t.opt.suppressJurisdictions&&"jurisdiction"===i[0]&&t.opt.suppressJurisdictions[o.jurisdiction]&&["legal_case","gazette","regulation","legislation"].indexOf(o.type)>-1)return null;var v={primary:!1,secondary:!1,tertiary:!1};if("_sort"===t.tmp.area.slice(-5))v.primary="locale-sort";else if(h)for(var x=["primary","secondary","tertiary"],I=0,S=x.length;S>I&&!(h.length-1<I);I+=1)h[I]&&(v[x[I]]="locale-"+h[I]);else v.primary="locale-orig";if("bibliography"===t.tmp.area||"citation"===t.tmp.area&&"note"===t.opt.xclass&&c&&!c.position||(v.secondary=!1,v.tertiary=!1),t.tmp["publisher-list"])return"publisher"===i[0]?t.tmp["publisher-token"]=this:"publisher-place"===i[0]&&(t.tmp["publisher-place-token"]=this),null;var O=r(o,i[0],v.primary,!0);f=O.name,m=O.locale;var A=O.usedOrig;if(n(this,o,f,a))return null;g=!1,b=!1,v.secondary&&(O=r(o,i[0],v.secondary,!1,O.usedOrig),g=O.name,d=O.locale),v.tertiary&&(O=r(o,i[0],v.tertiary,!1,O.usedOrig),b=O.name,_=O.locale),a&&(f=s(t,o,u,f,a,!0),f&&(f=l(f)),g=s(t,o,!1,g,a,!0),b=s(t,o,!1,b,a,!0));var T,E=e.Util.cloneToken(this),y=e.Util.cloneToken(this);if("locale-translit"===v.primary&&(T=t.opt.citeAffixes[p][v.primary].prefix),"<i>"===T&&"title"===i[0]&&!A){for(var k=!1,I=0,S=y.decorations.length;S>I;I+=1)"@font-style"===y.decorations[I][0]&&"italic"===y.decorations[I][1]&&(k=!0);k||y.decorations.push(["@font-style","italic"])}if("en"!==m&&"title"===y.strings["text-case"]&&(y.strings["text-case"]="passthrough"),"title"===i[0]&&(f=e.demoteNoiseWords(t,f,this["leading-noise-words"])),g||b){if(t.output.openLevel("empty"),y.strings.suffix=y.strings.suffix.replace(/[ .,]+$/,""),t.output.append(f,y),g){secondary_tok=e.Util.cloneToken(E),secondary_tok.strings.prefix=t.opt.citeAffixes[p][v.secondary].prefix,secondary_tok.strings.suffix=t.opt.citeAffixes[p][v.secondary].suffix,secondary_tok.strings.prefix||(secondary_tok.strings.prefix=" ");for(var I=secondary_tok.decorations.length-1;I>-1;I+=-1)["@quotes/true","@font-style/italic","@font-style/oblique","@font-weight/bold"].indexOf(secondary_tok.decorations[I].join("/"))>-1&&(secondary_tok.decorations=secondary_tok.decorations.slice(0,I).concat(secondary_tok.decorations.slice(I+1)));"en"!==d&&"title"===secondary_tok.strings["text-case"]&&(secondary_tok.strings["text-case"]="passthrough"),t.output.append(g,secondary_tok);var N=t.output.current.value(),R=t.output.current.value().blobs.length-1;t.parallel.use_parallels&&(t.parallel.cite.front.push(i[0]+":secondary"),t.parallel.cite[i[0]+":secondary"]={blobs:[[N,R]]})}if(b){tertiary_tok=e.Util.cloneToken(E),tertiary_tok.strings.prefix=t.opt.citeAffixes[p][v.tertiary].prefix,tertiary_tok.strings.suffix=t.opt.citeAffixes[p][v.tertiary].suffix,tertiary_tok.strings.prefix||(tertiary_tok.strings.prefix=" ");for(var I=tertiary_tok.decorations.length-1;I>-1;I+=-1)["@quotes/true","@font-style/italic","@font-style/oblique","@font-weight/bold"].indexOf(tertiary_tok.decorations[I].join("/"))>-1&&(tertiary_tok.decorations=tertiary_tok.decorations.slice(0,I).concat(tertiary_tok.decorations.slice(I+1)));"en"!==_&&"title"===tertiary_tok.strings["text-case"]&&(tertiary_tok.strings["text-case"]="passthrough"),t.output.append(b,tertiary_tok);var N=t.output.current.value(),R=t.output.current.value().blobs.length-1;t.parallel.use_parallels&&(t.parallel.cite.front.push(i[0]+":tertiary"),t.parallel.cite[i[0]+":tertiary"]={blobs:[[N,R]]})}t.output.closeLevel()}else t.output.append(f,y);return null}}function l(e){var s=e.match(/^!([-,_a-z]+)>>>/);if(s){var i=s[1].split(",");e=e.slice(s[0].length);for(var r=0,a=i.length;a>r;r+=1)-1===t.tmp.done_vars.indexOf(i[r])&&t.tmp.done_vars.push(i[r])}return e}this.abbrevs={},this.abbrevs["default"]=new t.sys.AbbreviationSegments,this.getTextSubField=r,this.loadAbbreviation=a,this.getOutputFunction=o,this.quashCheck=l},e.Token=function(t,e){this.name=t,this.strings={},this.strings.delimiter=void 0,this.strings.prefix="",this.strings.suffix="",this.decorations=[],this.variables=[],this.execs=[],this.tokentype=e,this.evaluator=!1,this.tests=[],this.rawtests=[],this.succeed=!1,this.fail=!1,this.next=!1},e.Util.cloneToken=function(t){var s,i,r,a;if("string"==typeof t)return t;s=new e.Token(t.name,t.tokentype);for(i in t.strings)t.strings.hasOwnProperty(i)&&(s.strings[i]=t.strings[i]);if(t.decorations)for(s.decorations=[],r=0,a=t.decorations.length;a>r;r+=1)s.decorations.push(t.decorations[r].slice());return t.variables&&(s.variables=t.variables.slice()),t.execs&&(s.execs=t.execs.slice(),s.tests=t.tests.slice(),s.rawtests=t.tests.slice()),s},e.AmbigConfig=function(){this.maxvals=[],this.minval=1,this.names=[],this.givens=[],this.year_suffix=!1,this.disambiguate=0},e.Blob=function(t,e,s){var i,r,a;if(this.levelname=s,e){this.strings={prefix:"",suffix:""};for(a in e.strings)e.strings.hasOwnProperty(a)&&(this.strings[a]=e.strings[a]);for(this.decorations=[],i=void 0===e.decorations?0:e.decorations.length,r=0;i>r;r+=1)this.decorations.push(e.decorations[r].slice())}else this.strings={},this.strings.prefix="",this.strings.suffix="",this.strings.delimiter="",this.decorations=[];this.blobs="string"==typeof t?t:t?[t]:[],this.alldecor=[this.decorations]},e.Blob.prototype.push=function(t){if("string"==typeof this.blobs)throw"Attempt to push blob onto string object";!1!==t&&(t.alldecor=t.alldecor.concat(this.alldecor),this.blobs.push(t))},e.NumericBlob=function(t,s,i){this.id=i,this.alldecor=[],this.num=t,this.blobs=t.toString(),this.status=e.START,this.strings={},s?(this.gender=s.gender,this.decorations=s.decorations,this.strings.prefix=s.strings.prefix,this.strings.suffix=s.strings.suffix,this.strings["text-case"]=s.strings["text-case"],this.successor_prefix=s.successor_prefix,this.range_prefix=s.range_prefix,this.splice_prefix=s.splice_prefix,this.formatter=s.formatter,this.formatter||(this.formatter=new e.Output.DefaultFormatter),this.formatter&&(this.type=this.formatter.format(1))):(this.decorations=[],this.strings.prefix="",this.strings.suffix="",this.successor_prefix="",this.range_prefix="",this.splice_prefix="",this.formatter=new e.Output.DefaultFormatter)},e.NumericBlob.prototype.setFormatter=function(t){this.formatter=t,this.type=this.formatter.format(1)
},e.Output.DefaultFormatter=function(){},e.Output.DefaultFormatter.prototype.format=function(t){return t.toString()},e.NumericBlob.prototype.checkNext=function(t,s){s?(this.status=e.START,"object"==typeof t&&(t.status=t.num===this.num+1?e.SUCCESSOR:e.SEEN)):t&&t.num&&this.type===t.type&&t.num===this.num+1?this.status===e.START||this.status===e.SEEN?t.status=e.SUCCESSOR:(this.status===e.SUCCESSOR||this.status===e.SUCCESSOR_OF_SUCCESSOR)&&(this.range_prefix?(t.status=e.SUCCESSOR_OF_SUCCESSOR,this.status=e.SUPPRESS):t.status=e.SUCCESSOR):(this.status===e.SUCCESSOR_OF_SUCCESSOR&&(this.status=e.END),"object"==typeof t&&(t.status=e.SEEN))},e.NumericBlob.prototype.checkLast=function(t){return this.status===e.SEEN||t.num!==this.num-1&&this.status===e.SUCCESSOR?(this.status=e.SUCCESSOR,!0):!1},e.Util.fixDateNode=function(t,e,s){var i,r,a,n,o,l,u,h,p,c,f,m,g,d;this.build.date_key=!0,i=this.sys.xml.getAttributeValue(s,"form");var b;if(b="accessed"===this.sys.xml.getAttributeValue(s,"variable")?this.opt["default-locale"][0]:this.sys.xml.getAttributeValue(s,"lingo"),!this.getDate(i))return t;var _=this.sys.xml.getAttributeValue(s,"date-parts");r=this.sys.xml.getAttributeValue(s,"variable"),h=this.sys.xml.getAttributeValue(s,"prefix"),p=this.sys.xml.getAttributeValue(s,"suffix"),g=this.sys.xml.getAttributeValue(s,"display"),d=this.sys.xml.getAttributeValue(s,"cslid"),a=this.sys.xml.nodeCopy(this.getDate(i,"accessed"===r)),this.sys.xml.setAttribute(a,"lingo",this.opt.lang),this.sys.xml.setAttribute(a,"form",i),this.sys.xml.setAttribute(a,"date-parts",_),this.sys.xml.setAttribute(a,"cslid",d),this.sys.xml.setAttribute(a,"variable",r),h&&this.sys.xml.setAttribute(a,"prefix",h),p&&this.sys.xml.setAttribute(a,"suffix",p),g&&this.sys.xml.setAttribute(a,"display",g),c=this.sys.xml.children(s);for(f in c)if(n=c[f],"date-part"===this.sys.xml.nodename(n)){o=this.sys.xml.getAttributeValue(n,"name"),m=this.sys.xml.attributes(n);for(l in m)if(m.hasOwnProperty(l)){if("@name"===l)continue;if(b&&b!==this.opt.lang&&["@suffix","@prefix","@form"].indexOf(l)>-1)continue;u=m[l],this.sys.xml.setAttributeOnNodeIdentifiedByNameAttribute(a,"date-part",o,l,u)}}return"year"===this.sys.xml.getAttributeValue(s,"date-parts")?(this.sys.xml.deleteNodeByNameAttribute(a,"month"),this.sys.xml.deleteNodeByNameAttribute(a,"day")):"year-month"===this.sys.xml.getAttributeValue(s,"date-parts")&&this.sys.xml.deleteNodeByNameAttribute(a,"day"),this.sys.xml.insertChildNodeAfter(t,s,e,a)},e.dateMacroAsSortKey=function(t,s){e.dateAsSortKey.call(this,t,s,!0)},e.dateAsSortKey=function(t,s,i){var r,a,n,o,l,u,h,p,c=this.variables[0],f="empty";for(i&&(f="macro-with-date"),r=s[c],"undefined"==typeof r&&(r={"date-parts":[[0]]},r.year||(t.tmp.empty_date=!0)),"undefined"==typeof this.dateparts&&(this.dateparts=["year","month","day"]),r.raw?r=t.fun.dateparser.parse(r.raw):r["date-parts"]&&(r=t.dateParseArray(r)),"undefined"==typeof r&&(r={}),h=0,p=e.DATE_PARTS_INTERNAL.length;p>h;h+=1)a=e.DATE_PARTS_INTERNAL[h],n=0,o=a,"_end"===o.slice(-4)&&(o=o.slice(0,-4)),r[a]&&this.dateparts.indexOf(o)>-1&&(n=r[a]),"year"===a.slice(0,4)?(l=e.Util.Dates[o].numeric(t,n),u="Y","-"===l[0]&&(u="X",l=l.slice(1),l=9999-parseInt(l,10)),t.output.append(e.Util.Dates[a.slice(0,4)].numeric(t,u+l),f)):(n=e.Util.Dates[o]["numeric-leading-zeros"](t,n),n||(n="00"),t.output.append(n,f))},e.Engine.prototype.dateParseArray=function(t){var s,i,r,a;s={};for(i in t)if("date-parts"===i){r=t["date-parts"],r.length>1&&r[0].length!==r[1].length&&e.error("CSL data error: element mismatch in date range input."),a=["","_end"];for(var n=0,o=r.length;o>n;n+=1)for(var l=0,u=e.DATE_PARTS.length;u>l;l+=1)s[e.DATE_PARTS[l]+a[n]]="undefined"==typeof r[n][l]?r[n][l]:parseInt(r[n][l],10)}else t.hasOwnProperty(i)&&("literal"===i&&"object"==typeof t.literal&&"string"==typeof t.literal.part?(e.debug("Warning: fixing up weird literal date value"),s.literal=t.literal.part):s[i]=t[i]);return s},e.Util.Names={},e.Util.Names.compareNamesets=e.NameOutput.prototype._compareNamesets,e.Util.Names.unInitialize=function(t,s){var i,r,a,n,o;if(!s)return"";for(a=s.split(/(?:\-|\s+)/),n=s.match(/(\-|\s+)/g),o="",i=0,r=a.length;r>i;i+=1)e.ALL_ROMANESQUE_REGEXP.exec(a[i].slice(0,-1))&&a[i]&&a[i]!==a[i].toUpperCase()&&(a[i]=a[i].slice(0,1)+a[i].slice(1,2).toLowerCase()+a[i].slice(2)),o+=a[i],r-1>i&&(o+=n[i]);return o},e.Util.Names.initializeWith=function(t,s,i,r){var a,n,o,l,u,h,p;if(!s)return"";if(["Lord","Lady"].indexOf(s)>-1||!s.match(e.STARTSWITH_ROMANESQUE_REGEXP)&&!i.match("%s"))return s;i||(i="");var c=s;if(t.opt["initialize-with-hyphen"]===!1&&(c=c.replace(/\-/g," ")),c=c.replace(/\s*\-\s*/g,"-").replace(/\s+/g," "),c=c.replace(/-([a-z])/g,"\u2013$1"),u=c.match(/[\-\s]+/g),h=c.split(/[\-\s]+/),0===h.length)c=u;else for(c=[h[0]],a=1,n=h.length;n>a;a+=1)c.push(u[a-1]),c.push(h[a]);for(h=c,a=h.length-1;a>-1;a+=-1)if(h[a]&&h[a].slice(0,-1).indexOf(".")>-1){var f=h.slice(a+1),m=h[a].slice(0,-1).split(".");for(h=h.slice(0,a),o=0,l=m.length;l>o;o+=1)h.push(m[o]+"."),o<m.length-1&&h.push(" ");h=h.concat(f)}return p=r?e.Util.Names.doNormalize(t,h,i):e.Util.Names.doInitialize(t,h,i),p=p.replace(/\u2013([a-z])/g,"-$1")},e.Util.Names.doNormalize=function(t,s,i){var r,a,n=[];for(r=0,a=s.length;a>r;r+=1)s[r].length>1&&"."===s[r].slice(-1)?(s[r]=s[r].slice(0,-1),n.push(!0)):n.push(1===s[r].length&&s[r].toUpperCase()===s[r]?!0:!1);for(r=0,a=s.length;a>r;r+=2)n[r]&&(r<s.length-2&&(s[r+1]="",(!i||i.slice(-1)&&" "!==i.slice(-1))&&s[r].length&&s[r].match(e.ALL_ROMANESQUE_REGEXP)&&(s[r].length>1||s[r+2].length>1)&&(s[r+1]=" "),s[r]=s[r]+i),r===s.length-1&&(s[r]=s[r]+i));return s.join("").replace(/\s+$/,"")},e.Util.Names.doInitialize=function(t,s,i){var r,a,n,o,l,u,h;for(r=0,a=s.length;a>r;r+=2)if(h=s[r])if(n=h.match(e.NAME_INITIAL_REGEXP),!n&&!h.match(e.STARTSWITH_ROMANESQUE_REGEXP)&&h.length>1&&i.match("%s")&&(n=h.match(/(.)(.*)/)),n&&n[1]===n[1].toUpperCase()){var p="";if(n[2]){var c="";for(u=n[2].split(""),o=0,l=u.length;l>o;o+=1){var f=u[o];if(f!==f.toUpperCase())break;c+=f}c.length<n[2].length&&(p=c.toLocaleLowerCase())}s[r]=n[1].toLocaleUpperCase()+p,a-1>r?i.match("%s")?s[r]=i.replace("%s",s[r]):s[r+1]=s[r+1].indexOf("-")>-1?i+s[r+1]:i:i.match("%s")?s[r]=i.replace("%s",s[r]):s.push(i)}else h.match(e.ROMANESQUE_REGEXP)&&(s[r]=" "+h);var m=s.join("");return m=m.replace(/\s+$/,"").replace(/\s*\-\s*/g,"-").replace(/\s+/g," ")},e.Util.Names.getRawName=function(t){var e=[];return t.given&&e.push(t.given),t.family&&e.push(t.family),e.join(" ")},e.Util.Dates={},e.Util.Dates.year={},e.Util.Dates.year["long"]=function(t,e){return e||(e="boolean"==typeof e?"":0),e.toString()},e.Util.Dates.year.imperial=function(t,e,s){e||(e="boolean"==typeof e?"":0),s=s?"_end":"";var i=t.tmp.date_object["month"+s];for(i=i?""+i:"1";i.length<2;)i="0"+i;var r=t.tmp.date_object["day"+s];for(r=r?""+r:"1";r.length<2;)r="0"+r;var a,n,o=parseInt(e+i+r,10);return o>=18680908&&19120730>o?(a="\u660e\u6cbb",n=1867):o>=19120730&&19261225>o?(a="\u5927\u6b63",n=1911):o>=19261225&&19890108>o?(a="\u662d\u548c",n=1925):o>=19890108&&(a="\u5e73\u6210",n=1988),a&&n&&(t.transform.abbrevs["default"].number[a]||t.transform.loadAbbreviation("default","number",a),t.transform.abbrevs["default"].number[a]&&(a=t.transform.abbrevs["default"].number[a]),year=a+(e-n)),year},e.Util.Dates.year["short"]=function(t,e){return e=e.toString(),e&&4===e.length?e.substr(2):void 0},e.Util.Dates.year.numeric=function(t,e){var s,i;for(e=""+e,s=e.match(/([0-9]*)$/),s?(i=e.slice(0,-1*s[1].length),e=s[1]):(i=e,e="");e.length<4;)e="0"+e;return i+e},e.Util.Dates.normalizeMonth=function(t,e){var s;if(t||(t=0),t=""+t,t.match(/^[0-9]+$/)||(t=0),t=parseInt(t,10),e){var i={stub:"month-",num:t};i.num<1||i.num>20?i.num=0:i.num>16?(i.stub="season-",i.num=i.num-16):i.num>12&&(i.stub="season-",i.num=i.num-12),s=i}else(1>t||t>12)&&(t=0),s=t;return s},e.Util.Dates.month={},e.Util.Dates.month.numeric=function(t,s){var s=e.Util.Dates.normalizeMonth(s);return s||(s=""),s},e.Util.Dates.month["numeric-leading-zeros"]=function(t,s){var s=e.Util.Dates.normalizeMonth(s);if(s)for(s=""+s;s.length<2;)s="0"+s;else s="";return s},e.Util.Dates.month["long"]=function(t,s,i,r){var a=e.Util.Dates.normalizeMonth(s,!0),s=a.num;if(s){for(s=""+s;s.length<2;)s="0"+s;s=t.getTerm(a.stub+s,"long",0,0,!1,r)}else s="";return s},e.Util.Dates.month["short"]=function(t,s,i,r){var a=e.Util.Dates.normalizeMonth(s,!0),s=a.num;if(s){for(s=""+s;s.length<2;)s="0"+s;s=t.getTerm(a.stub+s,"short",0,0,!1,r)}else s="";return s},e.Util.Dates.day={},e.Util.Dates.day.numeric=function(t,e){return e.toString()},e.Util.Dates.day["long"]=e.Util.Dates.day.numeric,e.Util.Dates.day["numeric-leading-zeros"]=function(t,e){for(e||(e=0),e=e.toString();e.length<2;)e="0"+e;return e.toString()},e.Util.Dates.day.ordinal=function(t,e,s){return t.fun.ordinalizer.format(e,s)},e.Util.Sort={},e.Util.Sort.strip_prepositions=function(t){var e;return"string"==typeof t&&(e=t.toLocaleLowerCase(),e=t.match(/^((a|an|the)\s+)/)),e&&(t=t.substr(e[1].length)),t},e.Util.substituteStart=function(t,s){var i,r,a,n,o,l,u;n=function(t){for(var e=0,s=this.decorations.length;s>e;e+=1)if("@strip-periods"===this.decorations[e][0]&&"true"===this.decorations[e][1]){t.tmp.strip_periods+=1;break}},this.execs.push(n),this.decorations&&(t.opt.development_extensions.csl_reverse_lookup_support||t.sys.csl_reverse_lookup_support)&&(this.decorations.reverse(),this.decorations.push(["@showid","true",this.cslid]),this.decorations.reverse()),u=["number","date","names"],("text"===this.name&&!this.postponed_macro||u.indexOf(this.name)>-1)&&(i=function(t,e,s){"author"===t.tmp.element_trace.value()||"names"===this.name?s&&s["author-only"]?t.tmp.element_trace.push("do-not-suppress-me"):s&&s["suppress-author"]:s&&s["author-only"]?t.tmp.element_trace.push("suppress-me"):s&&s["suppress-author"]&&t.tmp.element_trace.push("do-not-suppress-me")},this.execs.push(i)),r=this.strings.cls,this.strings.cls=!1,0===t.build.render_nesting_level&&("bibliography"===t.build.area&&t.bibliography.opt["second-field-align"]?(a=new e.Token("group",e.START),a.decorations=[["@display","left-margin"]],n=function(t,e){t.tmp.render_seen||(a.strings.first_blob=e.id,t.output.startTag("bib_first",a))},a.execs.push(n),s.push(a)):e.DISPLAY_CLASSES.indexOf(r)>-1&&(a=new e.Token("group",e.START),a.decorations=[["@display",r]],n=function(t,e){a.strings.first_blob=e.id,t.output.startTag("bib_first",a)},a.execs.push(n),s.push(a)),t.build.cls=r),t.build.render_nesting_level+=1,1===t.build.substitute_level.value()&&(o=new e.Token("choose",e.START),e.Node.choose.build.call(o,t,s),l=new e.Token("if",e.START),n=function(){return t.tmp.can_substitute.value()?!0:!1},l.tests.push(n),l.test=t.fun.match.any(this,t,l.tests),s.push(l)),t.sys.variableWrapper&&this.variables_real&&this.variables_real.length&&(n=function(t,s,i){if(!t.tmp.just_looking&&!t.tmp.suppress_decorations){variable_entry=new e.Token("text",e.START),variable_entry.decorations=[["@showid","true"]],t.output.startTag("variable_entry",variable_entry);var r=null;i&&(r=i.position),r||(r=0);var a=["first","subsequent","ibid","ibid-with-locator"],n=0;i&&i.noteIndex&&(n=i.noteIndex);var o=0;i&&i["first-reference-note-number"]&&(o=i["first-reference-note-number"]);var l=0;i&&i["citation-number"]&&(l=i["citation-number"]);var u=0;i&&i.index&&(u=i.index);var h={itemData:s,variableNames:this.variables,context:t.tmp.area,xclass:t.opt.xclass,position:a[r],"note-number":n,"first-reference-note-number":o,"citation-number":l,index:u,mode:t.opt.mode};t.output.current.value().params=h}},this.execs.push(n))},e.Util.substituteEnd=function(t,s){var i,r,a,n,o,l,u,h,p;t.sys.variableWrapper&&(this.hasVariable||this.variables_real&&this.variables_real.length)&&(i=function(t){t.tmp.just_looking||t.tmp.suppress_decorations||t.output.endTag("variable_entry")},this.execs.push(i)),i=function(t){for(var e=0,s=this.decorations.length;s>e;e+=1)if("@strip-periods"===this.decorations[e][0]&&"true"===this.decorations[e][1]){t.tmp.strip_periods+=-1;break}},this.execs.push(i),t.build.render_nesting_level+=-1,0===t.build.render_nesting_level&&(t.build.cls?(i=function(t){t.output.endTag("bib_first")},this.execs.push(i),t.build.cls=!1):"bibliography"===t.build.area&&t.bibliography.opt["second-field-align"]&&(r=new e.Token("group",e.END),i=function(t){t.tmp.render_seen||t.output.endTag()},r.execs.push(i),s.push(r),a=new e.Token("group",e.START),a.decorations=[["@display","right-inline"]],i=function(t){t.tmp.render_seen||(t.tmp.render_seen=!0,t.output.startTag("bib_other",a))},a.execs.push(i),s.push(a))),1===t.build.substitute_level.value()&&(n=new e.Token("if",e.END),s.push(n),o=new e.Token("choose",e.END),e.Node.choose.build.call(o,t,s)),l="names"===this.name&&0===t.build.substitute_level.value(),u="string"==typeof t[t.build.area].opt["subsequent-author-substitute"];var c=t[t.build.area].opt["subsequent-author-substitute-rule"];l&&u&&(h=new e.Token("text",e.SINGLETON),i=function(t){var s,i,r=!t.tmp.suppress_decorations;if(r&&"bibliography"===t.tmp.area&&t.tmp.subsequent_author_substitute_ok&&t.tmp.rendered_name)if("partial-each"===c||"partial-first"===c){var a=!0,n=[];for(s=0,i=t.tmp.name_node.children.length;i>s;s+=1){var o=t.tmp.rendered_name[s];a&&t.tmp.last_rendered_name&&t.tmp.last_rendered_name.length>s-1&&o&&!o.localeCompare(t.tmp.last_rendered_name[s])?(p=new e.Blob(t[t.tmp.area].opt["subsequent-author-substitute"]),t.tmp.name_node.children[s].blobs=[p],"partial-first"===c&&(a=!1)):a=!1,n.push(o)}t.tmp.last_rendered_name=n}else if("complete-each"===c){var n=t.tmp.rendered_name.join(",");if(n){if(!n.localeCompare(t.tmp.last_rendered_name))for(s=0,i=t.tmp.name_node.children.length;i>s;s+=1)p=new e.Blob(t[t.tmp.area].opt["subsequent-author-substitute"]),t.tmp.name_node.children[s].blobs=[p];t.tmp.last_rendered_name=n}}else{var n=t.tmp.rendered_name.join(",");n&&(n.localeCompare(t.tmp.last_rendered_name)||(p=new e.Blob(t[t.tmp.area].opt["subsequent-author-substitute"]),t.tmp.name_node.top.blobs=t.tmp.label_blob?[p,t.tmp.label_blob]:[p]),t.tmp.last_rendered_name=n)}},h.execs.push(i),s.push(h)),("text"===this.name&&!this.postponed_macro||["number","date","names"].indexOf(this.name)>-1)&&(i=function(t){t.tmp.element_trace.pop()},this.execs.push(i))},e.Util.padding=function(t){var e=t.match(/\s*(-{0,1}[0-9]+)/);if(e)for(t=parseInt(e[1],10),0>t&&(t=1e20+t),t=""+t;t.length<20;)t="0"+t;return t},e.Util.LongOrdinalizer=function(){},e.Util.LongOrdinalizer.prototype.init=function(t){this.state=t},e.Util.LongOrdinalizer.prototype.format=function(t,s){10>t&&(t="0"+t);var i=e.Engine.getField(e.LOOSE,this.state.locale[this.state.opt.lang].terms,"long-ordinal-"+t,"long",0,s);return i||(i=this.state.fun.ordinalizer.format(t,s)),this.state.tmp.cite_renders_content=!0,i},e.Util.Ordinalizer=function(t){this.state=t,this.suffixes={}},e.Util.Ordinalizer.prototype.init=function(){if(!this.suffixes[this.state.opt.lang]){this.suffixes[this.state.opt.lang]={};for(var t=0,e=3;e>t;t+=1){var s=[void 0,"masculine","feminine"][t];this.suffixes[this.state.opt.lang][s]=[];for(var i=1;5>i;i+=1){var r=this.state.getTerm("ordinal-0"+i,"long",!1,s);if("undefined"==typeof r){delete this.suffixes[this.state.opt.lang][s];break}this.suffixes[this.state.opt.lang][s].push(r)}}}},e.Util.Ordinalizer.prototype.format=function(t,e){var s;t=parseInt(t,10),s=""+t;var i="",r=[];if(e&&r.push(e),r.push("neuter"),this.state.locale[this.state.opt.lang].ord["1.0.1"]){i=this.state.getTerm("ordinal",!1,0,e);for(var a,n=0,o=r.length;o>n;n+=1){a=r[n];var l=this.state.locale[this.state.opt.lang].ord["1.0.1"];if(l["whole-number"][s]&&l["whole-number"][s][a]?i=this.state.getTerm(this.state.locale[this.state.opt.lang].ord["1.0.1"]["whole-number"][s][a],!1,0,e):l["last-two-digits"][s.slice(s.length-2)]&&l["last-two-digits"][s.slice(s.length-2)][a]?i=this.state.getTerm(this.state.locale[this.state.opt.lang].ord["1.0.1"]["last-two-digits"][s.slice(s.length-2)][a],!1,0,e):l["last-digit"][s.slice(s.length-1)]&&l["last-digit"][s.slice(s.length-1)][a]&&(i=this.state.getTerm(this.state.locale[this.state.opt.lang].ord["1.0.1"]["last-digit"][s.slice(s.length-1)][a],!1,0,e)),i)break}}else e||(e=void 0),this.state.fun.ordinalizer.init(),i=t/10%10===1||t>10&&20>t?this.suffixes[this.state.opt.lang][e][3]:t%10===1&&t%100!==11?this.suffixes[this.state.opt.lang][e][0]:t%10===2&&t%100!==12?this.suffixes[this.state.opt.lang][e][1]:t%10===3&&t%100!==13?this.suffixes[this.state.opt.lang][e][2]:this.suffixes[this.state.opt.lang][e][3];return s=s+=i},e.Util.Romanizer=function(){},e.Util.Romanizer.prototype.format=function(t){var s,i,r,a,n;if(s="",6e3>t)for(a=t.toString().split(""),a.reverse(),i=0,r=0,n=a.length,i=0;n>i;i+=1)r=parseInt(a[i],10),s=e.ROMAN_NUMERALS[i][r]+s;return s},e.Util.Suffixator=function(t){t||(t=e.SUFFIX_CHARS),this.slist=t.split(",")},e.Util.Suffixator.prototype.format=function(t){var e;t+=1;var s="";do e=t%26===0?26:t%26,s=this.slist[e-1]+s,t=(t-e)/26;while(0!==t);return s},e.Engine.prototype.processNumber=function(t,s,i,r){var a,n,o,l,u,h;if(this.tmp.shadow_numbers[i]){if(this.tmp.shadow_numbers[i].numeric)for(var o=0,l=this.tmp.shadow_numbers[i].values.length;l>o;o+=2)this.tmp.shadow_numbers[i].values[o][2]=t}else if(this.tmp.shadow_numbers[i]={},this.tmp.shadow_numbers[i].values=[],this.tmp.shadow_numbers[i].plural=0,this.tmp.shadow_numbers[i].numeric=!1,this.tmp.shadow_numbers[i].label=!1,s){var p=e.LangPrefsMap[i];if(p){var c=this.opt["cite-lang-prefs"][p][0];a=this.transform.getTextSubField(s,i,"locale-"+c,!0),a=a.name}else a=s[i];if(a&&this.sys.getAbbreviation){a=(""+a).replace(/^\"/,"").replace(/\"$/,"");var f=this.transform.loadAbbreviation(s.jurisdiction,"number",a);this.transform.abbrevs[f].number[a]?a=this.transform.abbrevs[f].number[a]:"undefined"!=typeof this.transform.abbrevs[f].number[a]&&delete this.transform.abbrevs[f].number[a]}if("undefined"!=typeof a){if("number"==typeof a&&(a=""+a),this.tmp.shadow_numbers[i].label=i,'"'===a.slice(0,1)&&'"'===a.slice(-1)&&(a=a.slice(1,-1)),a&&["number-of-volumes","number-of-pages"].indexOf(i)>-1){var n=a.match(/[^0-9]*([0-9]+).*/);n&&(this.tmp.shadow_numbers[i].numeric=!0,"1"!==n[1]&&(this.tmp.shadow_numbers[i].plural=1))}"locator"===i&&["bill","gazette","legislation","treaty"].indexOf(r)>-1&&(a=a.split(e.STATUTE_SUBDIV_PLAIN_REGEX)[0]);var m="page";if(["bill","gazette","legislation","legal_case","treaty"].indexOf(r)>-1&&"collection-number"===i&&(m="year"),["page","page-first"].indexOf(i)>-1){var n=a.split(" ")[0].match(e.STATUTE_SUBDIV_GROUPED_REGEX);if(n){this.opt.development_extensions.static_statute_locator&&(this.tmp.shadow_numbers[i].label=e.STATUTE_SUBDIV_STRINGS[n[0]]);var g=a.match(/[^ ]+\s+(.*)/);g&&(a=g[1])}}for(var d=a.split(/(?:,\s+|\s*\\*[\-\u2013]+\s*|\s*&\s*)/),n=a.match(/(,\s+|\s*\\*[\-\u2013]+\s*|\s*&\s*)/g),b=[],o=0,l=d.length-1;l>o;o+=1)b.push(d[o]),b.push(n[o]);b.push(d[d.length-1]);for(var _=0,y=!0,o=0,l=b.length;l>o;o+=1){var v=o%2===0;if(v){if(b[o]){if(b[o].match(/(?:[0-9]|[xivcmlXIVCML])/))if(b[o-1]&&b[o-1].match(/^\s*\\*[\-\u2013]+\s*$/)){var x=this.tmp.shadow_numbers[i].values.slice(-1);if(-1==x[0][1].indexOf("\\")){if(b[o-2]&&(""+b[o-2]).match(/(:?[a-zA-Z]*[0-9]+$|^[ivxlcmIVXLCM]+$)/)&&b[o].match(/(?:^[a-zA-Z]*[0-9]+|^[ivxlcmIVXLCM]+$)/)){var I=this.tmp.shadow_numbers[i].values.slice(-2);if(x[0][1]=this.getTerm(m+"-range-delimiter"),this.opt[m+"-range-format"]){var S=this.fun[m+"_mangler"](I[0][1]+"-"+b[o]);S=S.split(this.getTerm(m+"-range-delimiter")),b[o]=S[1]}_+=1}x[0][1].indexOf("--")>-1&&(x[0][1]=x[0][1].replace(/--*/,"\u2013"))}else x[0][1]=x[0][1].replace(/\\/,"","g")}else-1===b[o].indexOf(" ")&&(_+=1);for(var O=b[o].split(/\s+/),u=0,h=O.length;h>u;u+=1)this.opt.development_extensions.strict_page_numbers&&"page"===i&&!O[u].match(/^-*[0-9]/)?y=!1:O[u].match(/[-0-9]/)||(y=!1);if(b[o].match(/^[1-9][0-9]*$/))b[o]=parseInt(b[o],10),t&&"undefined"==typeof t.gender&&(t.gender=this.locale[this.opt.lang]["noun-genders"][i],t.gender||(t.gender="")),this.tmp.shadow_numbers[i].values.push(["NumericBlob",b[o],t]);else{var A=b[o];this.tmp.shadow_numbers[i].values.push(["Blob",A,t])}}}else b[o]&&this.tmp.shadow_numbers[i].values.push(["Blob",b[o],void 0])}this.tmp.shadow_numbers[i].numeric=this.opt.development_extensions.strict_page_numbers&&"page"===i?-1===a.indexOf(" ")&&a.match(/^-*[0-9]/)?!0:y:-1===a.indexOf(" ")&&a.match(/[0-9]/)?!0:y,this.tmp.shadow_numbers[i].numeric||this.transform.loadAbbreviation(s.jurisdiction,"number",a),_>1&&(this.tmp.shadow_numbers[i].plural=1),1===s.force_pluralism?this.tmp.shadow_numbers[i].plural=1:0===s.force_pluralism&&(this.tmp.shadow_numbers[i].plural=0)}}},e.Util.PageRangeMangler={},e.Util.PageRangeMangler.getFunction=function(t,e){var s,i,r,a,n,o,l,u,h,p,c,f,m,g,d,b,_,y=t.getTerm(e+"-range-delimiter");s=/([a-zA-Z]*)([0-9]+)\s*(?:\u2013|-)\s*([a-zA-Z]*)([0-9]+)/,a=function(s){for(r=s.length,i=1;r>i;i+=2)"object"==typeof s[i]&&(s[i]=s[i].join(""));var a=s.join("");return a=a.replace(/([^\\])\-/g,"$1"+t.getTerm(e+"-range-delimiter"))},n=function(t){var e,s,a,n="\\s+\\-\\s+",o="-"===y?"":y,l=new RegExp("([^\\\\])[-"+o+"\\u2013]","g");t=t.replace(l,"$1 - ").replace(/\s+-\s+/g," - ");var u=new RegExp("([a-zA-Z]*[0-9]+"+n+"[a-zA-Z]*[0-9]+)","g"),h=new RegExp("[a-zA-Z]*[0-9]+"+n+"[a-zA-Z]*[0-9]+");if(e=t.match(u),s=t.split(h),0===s.length)a=e;else for(a=[s[0]],i=1,r=s.length;r>i;i+=1)a.push(e[i-1].replace(/\s*\-\s*/,"-","g")),a.push(s[i]);return a},o=function(t){for(t=""+t,p=n(t),r=p.length,i=1;r>i;i+=2)c=p[i].match(s),c&&(c[3]&&c[1]!==c[3]||(c[4].length<c[2].length&&(c[4]=c[2].slice(0,c[2].length-c[4].length)+c[4]),parseInt(c[2],10)<parseInt(c[4],10)&&(c[3]=y+c[1],p[i]=c.slice(1)))),"string"==typeof p[i]&&(p[i]=p[i].replace("-",y,"g"));return p},l=function(t,e,s){r=t.length;for(var i=1,n=t.length;n>i;i+=2)t[i][3]=u(t[i][1],t[i][3],e,s),t[i][2].slice(1)===t[i][0]&&(t[i][2]=y);return a(t)},u=function(t,e,s,i){if(s||(s=0),f=(""+t).split(""),m=(""+e).split(""),g=m.slice(),g.reverse(),f.length===m.length)for(var r=0,a=f.length;a>r;r+=1){if(!(f[r]===m[r]&&g.length>s)){if(s&&i&&3===g.length){var n=f.slice(0,r);n.reverse(),g=g.concat(n)}break}g.pop()}return g.reverse(),g.join("")},h=function(t){for(r=t.length,i=1;r>i;i+=2)"object"==typeof t[i]&&(c=t[i],d=parseInt(c[1],10),b=parseInt(c[3],10),d>100&&d%100&&parseInt(d/100,10)===parseInt(b/100,10)?c[3]=""+b%100:d>=1e4&&(c[3]=""+b%1e3)),c[2].slice(1)===c[0]&&(c[2]=y);return a(t)};var v=function(t,e,s,i){var r;t=""+t;var a=o(t),r=e(a,s,i);return r};return t.opt[e+"-range-format"]?"expanded"===t.opt[e+"-range-format"]?_=function(t){return v(t,a)}:"minimal"===t.opt[e+"-range-format"]?_=function(t){return v(t,l)}:"minimal-two"===t.opt[e+"-range-format"]?_=function(t,e){return v(t,l,2,e)}:"chicago"===t.opt[e+"-range-format"]&&(_=function(t){return v(t,h)}):_=function(t){return t},_},e.Util.FlipFlopper=function(t){var e,s,i,r,a,n,o,l,u,h,p,c,f,m,g,d,b,_;for(this.state=t,this.blob=!1,this.quotechars=['"',"'"],e=[["<i>","</i>","italics","@font-style",["italic","normal","normal"],!0],["<b>","</b>","bold","@font-weight",["bold","normal","normal"],!0],["<sup>","</sup>","superscript","@vertical-align",["sup","sup","baseline"],!0],["<sub>","</sub>","subscript","@vertical-align",["sub","sub","baseline"],!0],["<sc>","</sc>","smallcaps","@font-variant",["small-caps","small-caps","normal"],!0],['<span style="font-variant:small-caps;">',"</span>","smallcaps","@font-variant",["small-caps","normal","normal"],!0],['<span class="nocase">',"</span>","passthrough","@passthrough",["true","true","true"],!0],['<span class="nodecor">',"</span>","passthrough","@passthrough",["true","true","true"],!0],['"','"',"quotes","@quotes",["true","inner","true"],"'"],[" '","'","quotes","@quotes",["inner","true","true"],'"']],s=0;2>s;s+=1){r=["-","-inner-"][s],a=[];var y=t.getTerm("open"+r+"quote");a.push(y),this.quotechars.push(y);var v=t.getTerm("close"+r+"quote");a.push(v),this.quotechars.push(v),a.push("quotes"),a.push("@quotes"),a.push("-"===r?["true","inner"]:["inner","true"]),a.push(!0),a.push("-"===r?t.getTerm("close-inner-quote"):t.getTerm("close-quote")),e.push(a)}for(n=function(t){for(o=[],i=t.length,s=0;i>s;s+=1)l=t[s],-1===o.indexOf(l[0])&&(u="",["(",")","[","]"].indexOf(l[0])>-1&&(u="\\"),o.push(u+l[0])),-1===o.indexOf(l[1])&&(u="",["(",")","[","]"].indexOf(l[1])>-1&&(u="\\"),o.push(u+l[1]));return o},b=n(e),_=[],s=0,i=b.length;i>s;s+=1)b[s]&&_.push(b[s]);b=_.slice(),this.allTagsRexMatch=new RegExp("("+b.join("|")+")","g"),this.allTagsRexSplit=new RegExp("(?:"+b.join("|")+")"),h=function(t){for(p={},c={},f={},m={},g={},i=t.length,s=0;i>s;s+=1)p[t[s][1]]=!0,c[t[s][1]]=t[s][5],f[t[s][0]]=t[s][1],m[t[s][0]]=[t[s][3],t[s][4]],g[t[s][3]]=[t[s][3],[t[s][4][2],t[s][1]]];return[p,c,f,m,g]},d=h(e),this.closeTagsHash=d[0],this.flipTagsHash=d[1],this.openToCloseHash=d[2],this.openToDecorations=d[3],this.okReverseHash=d[4]},e.Util.FlipFlopper.prototype.init=function(t,s){this.txt_esc=e.getSafeEscape(this.state),s?(this.blob=s,this.strs=this.getSplitStrings(this.blob.blobs),this.blob.blobs=[]):(this.strs=this.getSplitStrings(t),this.blob=new e.Blob),this.blobstack=new e.Stack(this.blob)},e.Util.FlipFlopper.prototype._normalizeString=function(t){var e,s;if(t=t.replace(/\s+'\s+/g," \u2019 "),t.indexOf(this.quotechars[0])>-1)for(e=0,s=2;s>e;e+=1)this.quotechars[e+2]&&(t=t.replace(this.quotechars[e+2],this.quotechars[0]));if(t.indexOf(this.quotechars[1])>-1)for(e=0,s=2;s>e;e+=1)this.quotechars[e+4]&&(t=0===e?t.replace(this.quotechars[e+4]," "+this.quotechars[1]):t.replace(this.quotechars[e+4],this.quotechars[1]));return t},e.Util.FlipFlopper.prototype.getSplitStrings=function(t){var e,s,i,r,a,n,o,l,u,h,p,c,f,m,g,d,b,_,y,v,x,I,S,O,A,T,E,k,N;for(t=this._normalizeString(t),k=t.match(this.allTagsRexMatch),e=t.split(this.allTagsRexSplit),N=[e[0]],s=1,i=e.length;i>s;s+=1)N.push(k[s-1]),N.push(e[s]);for(e=N.slice(),i=e.length-2,s=i;s>0;s+=-2)"\\"===e[s-1].slice(e[s-1].length-1)&&(r=e[s-1].slice(0,e[s-1].length-1)+e[s]+e[s+1],a=e.slice(0,s-1),n=e.slice(s+2),a.push(r),e=a.concat(n));for(o=[],l=[],u=[],h=[],p=[],O=e.length-1,c=1;O>c;c+=2)if(d=e[c],this.closeTagsHash[d]&&(o.reverse(),f=this.openToCloseHash[d],m=o.indexOf(d),g=u.indexOf(d),o.reverse(),!f||m>-1&&(g>m||-1===g))){for(b=!1,A=o.length-1,_=A;_>-1;_+=-1){if(b=!0,y=o[_],d===y){o.pop(),l.pop(),u.pop(),h.pop();break}p.push(c)}b||p.push(c)}else this.openToCloseHash[d]&&(o.push(this.openToCloseHash[d]),l.push(d),u.push(this.flipTagsHash[d]),h.push(c));for(T=o.length-1,v=T;v>-1;v+=-1)o.pop(),u.pop(),l.pop(),p.push(h.pop());for(p.sort(function(t,e){return e>t?1:t>e?-1:0}),i=p.length,s=0;i>s;s+=1)E=p[s],a=e.slice(0,E-1),n=e.slice(E+2),x=e[E],x.length&&"<"!==x[0]&&this.openToDecorations[x]&&-1===this.quotechars.indexOf(x.replace(/\s+/g,""))&&(S=this.openToDecorations[x],x=this.state.fun.decorate[S[0]][S[1][0]](this.state)),I=e[E-1]+x+e[E+1],a.push(I),e=a.concat(n);for(i=e.length,s=0;i>s;s+=2)e[s]=e[s].replace("'","\u2019","g"),e[s]=e[s].replace("  \u2019"," \u2019","g");return e},e.Util.FlipFlopper.prototype.processTags=function(){var t,s,i,r,a,n,o,l,u,h,p,c,f,m,g,d,b,_,y,v,x,I,S,O;if(t=[],s=[],i=[],r=[],a="",1===this.strs.length)this.blob.blobs=this.strs[0];else if(this.strs.length>2){for(x=this.strs.length-1,n=1;x>n;n+=2)if(o=this.strs[n],l=this.strs[n-1],l&&(u=new e.Blob(l),h=this.blobstack.value(),h.push(u)),this.closeTagsHash[o]&&(t.reverse(),p=this.openToCloseHash[o],c=t.indexOf(o),f=i.indexOf(o),t.reverse(),!p||c>-1&&(f>c||-1===f))){for(I=t.length,m=I;m>-1;m+=-1)if(g=t[m],o===g){t.pop(),s.pop(),i.pop(),r.pop(),this.blobstack.pop();break}}else if(this.openToCloseHash[o]){if(t.push(this.openToCloseHash[o]),s.push(o),i.push(this.flipTagsHash[o]),h=this.blobstack.value(),d=new e.Blob,h.push(d),b=this.addFlipFlop(d,this.openToDecorations[o]),'<span class="nodecor">'===o)for(_=this.state[this.state.tmp.area].opt.topdecor.concat(this.blob.alldecor).concat([[["@quotes","inner"]]]),I=_.length,m=0;I>m;m+=1)for(y=_[m],O=y.length,S=0;O>S;S+=1)v=y[S],["@font-style","@font-weight","@font-variant"].indexOf(v[0])>-1&&(b=this.addFlipFlop(d,this.okReverseHash[v[0]]));r.push(this.state.fun.decorate[b[0]][b[1]](this.state)),this.blobstack.push(d)}this.strs.length>2&&(a=this.strs[this.strs.length-1],a&&(h=this.blobstack.value(),u=new e.Blob(a),h.push(u)))}return this.blob},e.Util.FlipFlopper.prototype.addFlipFlop=function(t,e){var s,i,r,a,n,o,l,u,h,p;for(i=0,r=this.state[this.state.tmp.area].opt.topdecor.concat(t.alldecor).concat([[["@quotes","inner"]]]),a=r.length,s=0;a>s;s+=1){for(n=r[s],o=!1,p=n.length-1,u=p;u>-1;u+=-1)if(l=n[u],l[0]===e[0]){l[1]===e[1][0]&&(i=1),o=!0;break}if(o)break}return h=[e[0],e[1][i]],t.decorations.reverse(),t.decorations.push(h),t.decorations.reverse(),h},e.Output.Formatters={},e.getSafeEscape=function(t){if(["bibliography","citation"].indexOf(t.tmp.area)>-1){var s=[];return t.opt.development_extensions.thin_non_breaking_space_html_hack&&"html"===t.opt.mode&&s.push(function(t){return t.replace(/\u202f/g,'<span style="white-space:nowrap">&thinsp;</span>')}),s.length?function(i){for(var r=0,a=s.length;a>r;r+=1)i=s[r](i);return e.Output.Formats[t.opt.mode].text_escape(i)}:e.Output.Formats[t.opt.mode].text_escape}return function(t){return t}},e.Output.Formatters.passthrough=function(t,e){return e},e.Output.Formatters.lowercase=function(t,s){var i=e.Output.Formatters.doppelString(s,e.TAG_USEALL);return i.string=i.string.toLowerCase(),e.Output.Formatters.undoppelString(i)},e.Output.Formatters.uppercase=function(t,s){var i=e.Output.Formatters.doppelString(s,e.TAG_USEALL);return i.string=i.string.toUpperCase(),e.Output.Formatters.undoppelString(i)},e.Output.Formatters["capitalize-first"]=function(t,s){var i=e.Output.Formatters.doppelString(s,e.TAG_ESCAPE);return i.string.length?(i.string=i.string.slice(0,1).toUpperCase()+i.string.substr(1),e.Output.Formatters.undoppelString(i)):""},e.Output.Formatters.sentence=function(t,s){var i=e.Output.Formatters.doppelString(s,e.TAG_ESCAPE);return i.string=i.string.slice(0,1).toUpperCase()+i.string.substr(1).toLowerCase(),e.Output.Formatters.undoppelString(i)},e.Output.Formatters["capitalize-all"]=function(t,s){for(var i=e.Output.Formatters.doppelString(s,e.TAG_ESCAPE),r=i.string.split(" "),a=0,n=r.length;n>a;a+=1)r[a].length>1?r[a]=t.opt.development_extensions.allow_force_lowercase?r[a].slice(0,1).toUpperCase()+r[a].substr(1).toLowerCase():r[a].slice(0,1).toUpperCase()+r[a].substr(1):1===r[a].length&&(r[a]=r[a].toUpperCase());return i.string=r.join(" "),e.Output.Formatters.undoppelString(i)},e.Output.Formatters.title=function(t,s){function i(t){var e=t.match(/([:?!]+\s+|-|^)(.)(.*)/);return e?e[1]+e[2].toUpperCase()+e[3]:t}{var r,a,n,o,l;t.locale[t.opt.lang].opts["skip-words"]}if(!s)return"";var u=e.Output.Formatters.doppelString(s,e.TAG_ESCAPE),r=u.string,l=r.split(t.locale[t.opt.lang].opts["skip-words-regexp"]);for(h=1,p=l.length;p>h;h+=2)l[h].match(/^[:?!]/)&&(l[h]=i(l[h]));l[0]||(l[1]=i(l[1])),l.length>2&&!l[l.length-1]&&(l[l.length-2]=i(l[l.length-2]));for(var h=0,p=l.length;p>h;h+=2){for(var a=l[h].split(/([:?!]*\s+|-)/),c=0,f=a.length;f>c;c+=2)if(0!==a[c].length){if(n=a[c].toUpperCase(),o=a[c].toLowerCase(),a[c].match(/[0-9]/))continue;a[c]===o&&(a[c]=i(a[c]))}l[h]=a.join("")}u.string=l.join("");var m=e.Output.Formatters.undoppelString(u);return m},e.Output.Formatters.doppelString=function(t,e){var s;s={},s.array=e(t),s.string="";for(var i=0,r=s.array.length;r>i;i+=2)s.string+=s.array[i];return s},e.Output.Formatters.undoppelString=function(t){var e;e="";for(var s=0,i=t.array.length;i>s;s+=1)s%2?e+=t.array[s]:(e+=t.string.slice(0,t.array[s].length),t.string=t.string.slice(t.array[s].length));return e},e.Output.Formatters.serializeItemAsRdf=function(){return""},e.Output.Formatters.serializeItemAsRdfA=function(){return""},e.demoteNoiseWords=function(t,e,s){var i=t.locale[t.opt.lang].opts["leading-noise-words"];if(e&&s){e=e.split(/\s+/),e.reverse();for(var r=[],a=e.length-1;a>-1&&i.indexOf(e[a].toLowerCase())>-1;a+=-1)r.push(e.pop());e.reverse();var n=e.join(" "),o=r.join(" ");"drop"!==s&&o?"demote"===s&&(e=[n,o].join(", ")):e=n}return e},e.Output.Formats=function(){},e.Output.Formats.prototype.html={text_escape:function(t){return t||(t=""),t.replace(/&/g,"&#38;").replace(/</g,"&#60;").replace(/>/g,"&#62;").replace("  ","&#160; ","g").replace(e.SUPERSCRIPTS_REGEXP,function(t){return"<sup>"+e.SUPERSCRIPTS[t]+"</sup>"})},bibstart:'<div class="csl-bib-body">\n',bibend:"</div>","@font-style/italic":"<i>%%STRING%%</i>","@font-style/oblique":"<em>%%STRING%%</em>","@font-style/normal":'<span style="font-style:normal;">%%STRING%%</span>',"@font-variant/small-caps":'<span style="font-variant:small-caps;">%%STRING%%</span>',"@passthrough/true":e.Output.Formatters.passthrough,"@font-variant/normal":'<span style="font-variant:normal;">%%STRING%%</span>',"@font-weight/bold":"<b>%%STRING%%</b>","@font-weight/normal":'<span style="font-weight:normal;">%%STRING%%</span>',"@font-weight/light":!1,"@text-decoration/none":'<span style="text-decoration:none;">%%STRING%%</span>',"@text-decoration/underline":'<span style="text-decoration:underline;">%%STRING%%</span>',"@vertical-align/sup":"<sup>%%STRING%%</sup>","@vertical-align/sub":"<sub>%%STRING%%</sub>","@vertical-align/baseline":'<span style="baseline">%%STRING%%</span>',"@strip-periods/true":e.Output.Formatters.passthrough,"@strip-periods/false":e.Output.Formatters.passthrough,"@quotes/true":function(t,e){return"undefined"==typeof e?t.getTerm("open-quote"):t.getTerm("open-quote")+e+t.getTerm("close-quote")
},"@quotes/inner":function(t,e){return"undefined"==typeof e?"\u2019":t.getTerm("open-inner-quote")+e+t.getTerm("close-inner-quote")},"@quotes/false":!1,"@cite/entry":function(t,e){return t.sys.wrapCitationEntry(e,this.item_id,this.locator_txt,this.suffix_txt)},"@bibliography/entry":function(t,e){var s="";return t.sys.embedBibliographyEntry&&(s=t.sys.embedBibliographyEntry(this.item_id)+"\n"),'  <div class="csl-entry">'+e+"</div>\n"+s},"@display/block":function(t,e){return'\n\n    <div class="csl-block">'+e+"</div>\n"},"@display/left-margin":function(t,e){return'\n    <div class="csl-left-margin">'+e+"</div>"},"@display/right-inline":function(t,e){return'<div class="csl-right-inline">'+e+"</div>\n  "},"@display/indent":function(t,e){return'<div class="csl-indent">'+e+"</div>\n  "},"@showid/true":function(t,s,i){if(t.tmp.just_looking||t.tmp.suppress_decorations)return s;if(i)return'<span class="'+t.opt.nodenames[i]+'" cslid="'+i+'">'+s+"</span>";if("string"==typeof s){var r="";if(s){var a=s.match(e.VARIABLE_WRAPPER_PREPUNCT_REX);r=a[1],s=a[2]}var n="";return s&&e.SWAPPING_PUNCTUATION.indexOf(s.slice(-1))>-1&&(n=s.slice(-1),s=s.slice(0,-1)),t.sys.variableWrapper(this.params,r,s,n)}return s},"@URL/true":function(t,e){return'<a href="'+e+'">'+e+"</a>"},"@DOI/true":function(t,e){return'<a href="http://dx.doi.org/'+e+'">'+e+"</a>"}},e.Output.Formats.prototype.text={text_escape:function(t){return t||(t=""),t},bibstart:"",bibend:"","@font-style/italic":!1,"@font-style/oblique":!1,"@font-style/normal":!1,"@font-variant/small-caps":!1,"@passthrough/true":e.Output.Formatters.passthrough,"@font-variant/normal":!1,"@font-weight/bold":!1,"@font-weight/normal":!1,"@font-weight/light":!1,"@text-decoration/none":!1,"@text-decoration/underline":!1,"@vertical-align/baseline":!1,"@vertical-align/sup":!1,"@vertical-align/sub":!1,"@strip-periods/true":e.Output.Formatters.passthrough,"@strip-periods/false":e.Output.Formatters.passthrough,"@quotes/true":function(t,e){return"undefined"==typeof e?t.getTerm("open-quote"):t.getTerm("open-quote")+e+t.getTerm("close-quote")},"@quotes/inner":function(t,e){return"undefined"==typeof e?"\u2019":t.getTerm("open-inner-quote")+e+t.getTerm("close-inner-quote")},"@quotes/false":!1,"@cite/entry":function(t,e){return t.sys.wrapCitationEntry(e,this.item_id,this.locator_txt,this.suffix_txt)},"@bibliography/entry":function(t,e){return e+"\n"},"@display/block":function(t,e){return"\n"+e},"@display/left-margin":function(t,e){return e},"@display/right-inline":function(t,e){return e},"@display/indent":function(t,e){return"\n    "+e},"@showid/true":function(t,e){return e},"@URL/true":function(t,e){return e},"@DOI/true":function(t,e){return e}},e.Output.Formats.prototype.rtf={text_escape:function(t){return t||(t=""),t.replace(/([\\{}])/g,"\\$1","g").replace(e.SUPERSCRIPTS_REGEXP,function(t){return"\\super "+e.SUPERSCRIPTS[t]+"\\nosupersub{}"}).replace(/[\u007F-\uFFFF]/g,function(t){return"\\uc0\\u"+t.charCodeAt(0).toString()+"{}"}).replace("	","\\tab{}","g")},"@passthrough/true":e.Output.Formatters.passthrough,"@font-style/italic":"\\i %%STRING%%\\i0{}","@font-style/normal":"\\i0{}%%STRING%%\\i{}","@font-style/oblique":"\\i %%STRING%%\\i0{}","@font-variant/small-caps":"\\scaps %%STRING%%\\scaps0{}","@font-variant/normal":"\\scaps0{}%%STRING%%\\scaps{}","@font-weight/bold":"\\b %%STRING%%\\b0{}","@font-weight/normal":"\\b0{}%%STRING%%\\b{}","@font-weight/light":!1,"@text-decoration/none":!1,"@text-decoration/underline":"\\ul %%STRING%%\\ul0{}","@vertical-align/baseline":!1,"@vertical-align/sup":"\\super %%STRING%%\\nosupersub{}","@vertical-align/sub":"\\sub %%STRING%%\\nosupersub{}","@strip-periods/true":e.Output.Formatters.passthrough,"@strip-periods/false":e.Output.Formatters.passthrough,"@quotes/true":function(t,s){return"undefined"==typeof s?e.Output.Formats.rtf.text_escape(t.getTerm("open-quote")):e.Output.Formats.rtf.text_escape(t.getTerm("open-quote"))+s+e.Output.Formats.rtf.text_escape(t.getTerm("close-quote"))},"@quotes/inner":function(t,s){return"undefined"==typeof s?e.Output.Formats.rtf.text_escape("\u2019"):e.Output.Formats.rtf.text_escape(t.getTerm("open-inner-quote"))+s+e.Output.Formats.rtf.text_escape(t.getTerm("close-inner-quote"))},"@quotes/false":!1,bibstart:"{\\rtf ",bibend:"}","@display/block":"\\line{}%%STRING%%\\line\r\n","@cite/entry":function(t,e){return e},"@cite/entry":function(t,e){return t.sys.wrapCitationEntry(e,this.item_id,this.locator_txt,this.suffix_txt)},"@bibliography/entry":function(t,e){return e},"@display/left-margin":function(t,e){return e+"\\tab "},"@display/right-inline":function(t,e){return e+"\\line\r\n"},"@display/indent":function(t,e){return"\n\\tab "+e+"\\line\r\n"},"@showid/true":function(t,s){if(t.tmp.just_looking||t.tmp.suppress_decorations)return s;var i="";if(s){var r=s.match(e.VARIABLE_WRAPPER_PREPUNCT_REX);i=r[1],s=r[2]}var a="";return s&&e.SWAPPING_PUNCTUATION.indexOf(s.slice(-1))>-1&&(a=s.slice(-1),s=s.slice(0,-1)),t.sys.variableWrapper(this.params,i,s,a)},"@URL/true":function(t,e){return e},"@DOI/true":function(t,e){return e}},e.Output.Formats=new e.Output.Formats,e.Registry=function(t){var s,i,r;this.debug=!1,this.state=t,this.registry={},this.reflist=[],this.namereg=new e.Registry.NameReg(t),this.citationreg=new e.Registry.CitationReg(t),this.authorstrings={},this.mylist=[],this.myhash={},this.deletes=[],this.inserts=[],this.uncited={},this.refreshes={},this.akeys={},this.oldseq={},this.return_data={},this.ambigcites={},this.ambigresets={},this.sorter=new e.Registry.Comparifier(t,"bibliography_sort"),this.getSortedIds=function(){for(s=[],i=0,r=this.reflist.length;r>i;i+=1)s.push(""+this.reflist[i].id);return s},this.getSortedRegistryItems=function(){for(s=[],i=0,r=this.reflist.length;r>i;i+=1)s.push(this.reflist[i]);return s}},e.Registry.prototype.init=function(t,e){var s,i;if(this.oldseq={},e){this.uncited={};for(var s=0,i=t.length;i>s;s+=1)this.myhash[t[s]]||this.mylist.push(""+t[s]),this.uncited[t[s]]=!0,this.myhash[t[s]]=!0}else{for(var r in this.uncited)t.push(r);var a={};for(s=t.length-1;s>-1;s+=-1)a[t[s]]?t=t.slice(0,s).concat(t.slice(s+1)):a[t[s]]=!0;this.mylist=[];for(var s=0,i=t.length;i>s;s+=1)this.mylist.push(""+t[s]);this.myhash=a}this.refreshes={},this.touched={},this.ambigsTouched={},this.ambigresets={}},e.Registry.prototype.dopurge=function(t){for(var e=this.mylist.length-1;e>-1;e+=-1)this.citationreg.citationsByItemId&&(this.citationreg.citationsByItemId[this.mylist[e]]||t[this.mylist[e]]||(delete this.myhash[this.mylist[e]],this.mylist=this.mylist.slice(0,e).concat(this.mylist.slice(e+1))));this.dodeletes(this.myhash)},e.Registry.prototype.dodeletes=function(t){var e,s,i,r,a,n,o,l,u;"string"==typeof t&&(t={},t[t]=!0);for(s in this.registry)if(!t[s]){if(this.uncited[s])continue;e=this.namereg.delitems(s);for(o in e)this.refreshes[o]=!0;for(i=this.registry[s].ambig,l=this.ambigcites[i].indexOf(s),l>-1&&(n=this.ambigcites[i].slice(),this.ambigcites[i]=n.slice(0,l).concat(n.slice(l+1,n.length)),this.ambigresets[i]=this.ambigcites[i].length),a=this.ambigcites[i].length,r=0;a>r;r+=1)u=""+this.ambigcites[i][r],this.refreshes[u]=!0;if(this.registry[s].siblings)if(1==this.registry[s].siblings.length){var h=this.registry[s].siblings[0];this.registry[h].master=!0,this.registry[h].siblings.pop(),this.registry[h].parallel=!1}else if(this.registry[s].siblings.length>1){var p=[s];if(this.registry[s].master){var c=this.registry[s].siblings[0],f=this.registry[c];f.master=!0,f.parallel=!1,p.push(c);for(var m=0,g=this.registry[s].siblings.length;g>m;m+=1)this.registry[this.registry[s].siblings[m]].parallel=c}for(var d=[],m=this.registry[s].siblings.length-1;m>-1;m+=-1){var b=this.registry[s].siblings.pop();-1===p.indexOf(b)&&d.push(b)}for(var m=d.length-1;m>-1;m+=-1)this.registry[s].siblings.push(d[m])}delete this.registry[s],this.return_data.bibchange=!0}},e.Registry.prototype.doinserts=function(t){var s,i,r,a,n,o,l;for("string"==typeof t&&(t=[t]),o=0,l=t.length;l>o;o+=1)s=t[o],this.registry[s]||(i=this.state.retrieveItem(s),r=e.getAmbiguousCite.call(this.state,i),this.ambigsTouched[r]=!0,i.legislation_id||(this.akeys[r]=!0),a={id:""+s,seq:0,offset:0,sortkeys:!1,ambig:!1,rendered:!1,disambig:!1,ref:i},this.registry[s]=a,this.citationreg.citationsByItemId&&this.citationreg.citationsByItemId[s]&&(this.registry[s]["first-reference-note-number"]=this.citationreg.citationsByItemId[s][0].properties.noteIndex),n=e.getAmbigConfig.call(this.state),this.registerAmbigToken(r,s,n),this.touched[s]=!0,this.return_data.bibchange=!0)},e.Registry.prototype.rebuildlist=function(){var t,s,i;for(this.reflist=[],this.state.opt.citation_number_sort_direction===e.DESCENDING&&this.state.opt.citation_number_sort_used,t=this.mylist.length,s=0;t>s;s+=1)i=this.mylist[s],this.reflist.push(this.registry[i]),this.oldseq[i]=this.registry[i].seq,this.registry[i].seq=s+1;this.state.opt.citation_number_sort_direction===e.DESCENDING&&this.state.opt.citation_number_sort_used},e.Registry.prototype.dorefreshes=function(){var t,s,i,r,a;for(t in this.refreshes)if(s=this.registry[t]){s.sortkeys=void 0,i=this.state.retrieveItem(t);var r=s.ambig;"undefined"==typeof r&&(this.state.tmp.disambig_settings=!1,r=e.getAmbiguousCite.call(this.state,i),a=e.getAmbigConfig.call(this.state),this.registerAmbigToken(r,t,a));for(var n in this.ambigresets)if(1===this.ambigresets[n]){var o=this.ambigcites[r][0],i=this.state.retrieveItem(o);this.registry[o].disambig=new e.AmbigConfig,this.state.tmp.disambig_settings=!1;var r=e.getAmbiguousCite.call(this.state,i),a=e.getAmbigConfig.call(this.state);this.registerAmbigToken(r,o,a)}this.state.tmp.taintedItemIDs[t]=!0,this.ambigsTouched[r]=!0,i.legislation_id||(this.akeys[r]=!0),this.touched[t]=!0}},e.Registry.prototype.setdisambigs=function(){var t;this.leftovers=[];for(t in this.ambigsTouched)this.state.disambiguate.run(t);this.ambigsTouched={},this.akeys={}},e.Registry.prototype.renumber=function(){var t,s,i;for(this.state.opt.citation_number_sort_direction===e.DESCENDING&&this.state.opt.citation_number_sort_used,t=this.reflist.length,s=0;t>s;s+=1)i=this.reflist[s],i.seq=s+1,this.state.opt.update_mode===e.NUMERIC&&i.seq!=this.oldseq[i.id]&&(this.state.tmp.taintedItemIDs[i.id]=!0),this.state.opt.bib_mode===e.NUMERIC&&i.seq!=this.oldseq[i.id]&&(this.return_data.bibchange=!0);this.state.opt.citation_number_sort_direction===e.DESCENDING&&this.state.opt.citation_number_sort_used&&this.reflist.reverse()},e.Registry.prototype.setsortkeys=function(){for(var t,s=0,i=this.mylist.length;i>s;s+=1){var t=this.mylist[s];(this.touched[t]||this.state.tmp.taintedItemIDs[t]||!this.registry[t].sortkeys)&&(this.registry[t].sortkeys=e.getSortKeys.call(this.state,this.state.retrieveItem(t),"bibliography_sort"))}},e.Registry.prototype.sorttokens=function(){this.reflist.sort(this.sorter.compareKeys)},e.Registry.Comparifier=function(t,s){var i,r,a,n,o=e.getSortCompare(t.opt["default-locale-sort"]);i=t[s].opt.sort_directions,this.compareKeys=function(t,e){for(r=t.sortkeys?t.sortkeys.length:0,a=0;r>a;a+=1){var s=0;if(s=t.sortkeys[a]===e.sortkeys[a]?0:"undefined"==typeof t.sortkeys[a]?i[a][1]:"undefined"==typeof e.sortkeys[a]?i[a][0]:o(t.sortkeys[a],e.sortkeys[a]),s>0)return i[a][1];if(0>s)return i[a][0]}return t.seq>e.seq?1:t.seq<e.seq?-1:0},n=this.compareKeys,this.compareCompositeKeys=function(t,e){return n(t[1],e[1])}},e.Registry.prototype.compareRegistryTokens=function(t,e){return t.seq>e.seq?1:t.seq<e.seq?-1:0},e.Registry.prototype.registerAmbigToken=function(t,s,i){if(this.registry[s]&&this.registry[s].disambig&&this.registry[s].disambig.names)for(var r=0,a=i.names.length;a>r;r+=1){var n=i.names[r],o=this.registry[s].disambig.names[r];if(n!==o)this.state.tmp.taintedItemIDs[s]=!0;else if(i.givens[r])for(var l=0,u=i.givens[r].length;u>l;l+=1){var h=i.givens[r][l],p=this.registry[s].disambig.givens[r][l];h!==p&&(this.state.tmp.taintedItemIDs[s]=!0)}}this.ambigcites[t]||(this.ambigcites[t]=[]),-1===this.ambigcites[t].indexOf(""+s)&&this.ambigcites[t].push(""+s),this.registry[s].ambig=t;this.registry[s].disambig=e.cloneAmbigConfig(i)},e.getSortKeys=function(t,s){var i,r,a,n,o,l;for(i=this.tmp.area,r=this.tmp.extension,a=e.Util.Sort.strip_prepositions,this.tmp.area=s,this.tmp.extension="_sort",this.tmp.disambig_override=!0,this.tmp.disambig_request=!1,n=this.parallel.use_parallels,this.parallel.use_parallels=!1,this.tmp.suppress_decorations=!0,e.getCite.call(this,t),this.tmp.suppress_decorations=!1,this.parallel.use_parallels=n,this.tmp.disambig_override=!1,o=this[s].keys.length,l=0;o>l;l+=1)this[s].keys[l]=a(this[s].keys[l]);return this.tmp.area=i,this.tmp.extension=r,this[s].keys},e.Registry.NameReg=function(t){var s,i,r,a,n,o,l,u,h,p,c,f,m,g,d,b;this.state=t,this.namereg={},this.nameind={},this.nameindpkeys={},this.itemkeyreg={},u=function(t){return t||(t=""),t.replace("."," ","g").replace(/\s+/g," ").replace(/\s+$/,"")},h=function(t,a,n){s=u(n.family),r=u(n.given);var o=r.match(/[,\!]* ([^,]+)$/);o&&o[1]===o[1].toLowerCase()&&(r=r.replace(/[,\!]* [^,]+$/,"")),i=e.Util.Names.initializeWith(t,r,"%s"),"by-cite"===t.citation.opt["givenname-disambiguation-rule"]&&(s=""+a+s)},p=function(e,r,o,l,u,p){var c;if("bibliography"===t.tmp.area.slice(0,12)&&!u)return"string"==typeof p?1:2;var f=t.nameOutput.getName(r,"locale-translit",!0);r=f.name,h(this.state,""+e,r),c=2,a=t.opt["disambiguate-add-givenname"],n=t.citation.opt["givenname-disambiguation-rule"];var m=n;return"by-cite"===n&&(n="all-names"),"short"===u?c=0:"string"==typeof p&&(c=1),"undefined"==typeof this.namereg[s]||"undefined"==typeof this.namereg[s].ikey[i]?c:"by-cite"===m&&l>=c?l:a?"string"==typeof n&&"primary-name"===n.slice(0,12)&&o>0?c:(n&&"all-names"!==n&&"primary-name"!==n?("all-names-with-initials"===n||"primary-name-with-initials"===n)&&(c=this.namereg[s].count>1?1:0):(this.namereg[s].count>1&&(c=1),(this.namereg[s].ikey&&this.namereg[s].ikey[i].count>1||this.namereg[s].count>1&&"string"!=typeof p)&&(c=2)),t.registry.registry[e]?c:"short"==u?0:"string"==typeof p?1:void 0):c},c=function(e){var a,n,u,h,p;for(("string"==typeof e||"number"==typeof e)&&(e=[""+e]),o={},n=e.length,a=0;n>a;a+=1)if(h=""+e[a],this.nameind[h]){for(p in this.nameind[h])if(this.nameind[h].hasOwnProperty(p)){if(m=p.split("::"),s=m[0],i=m[1],r=m[2],"undefined"==typeof this.namereg[s])continue;if(l=this.namereg[s].items,r&&this.namereg[s].ikey[i]&&this.namereg[s].ikey[i].skey[r]&&(g=this.namereg[s].ikey[i].skey[r].items,u=g.indexOf(""+h),u>-1&&(this.namereg[s].ikey[i].skey[r].items=g.slice(0,u).concat(g.slice([u+1]))),0===this.namereg[s].ikey[i].skey[r].items.length&&(delete this.namereg[s].ikey[i].skey[r],this.namereg[s].ikey[i].count+=-1,this.namereg[s].ikey[i].count<2)))for(d=0,b=this.namereg[s].ikey[i].items.length;b>d;d+=1)t.tmp.taintedItemIDs[this.namereg[s].ikey[i].items[d]]=!0;if(i&&this.namereg[s].ikey[i]&&(u=this.namereg[s].ikey[i].items.indexOf(""+h),u>-1&&(l=this.namereg[s].ikey[i].items.slice(),this.namereg[s].ikey[i].items=l.slice(0,u).concat(l.slice([u+1]))),0===this.namereg[s].ikey[i].items.length&&(delete this.namereg[s].ikey[i],this.namereg[s].count+=-1,this.namereg[s].count<2)))for(d=0,b=this.namereg[s].items.length;b>d;d+=1)t.tmp.taintedItemIDs[this.namereg[s].items[d]]=!0;s&&(u=this.namereg[s].items.indexOf(""+h),u>-1&&(l=this.namereg[s].items.slice(),this.namereg[s].items=l.slice(0,u).concat(l.slice([u+1],l.length))),this.namereg[s].items.length<2&&delete this.namereg[s]),delete this.nameind[h][p]}delete this.nameind[h],delete this.nameindpkeys[h]}return o},f=function(e,a,n){var o,l,u=t.nameOutput.getName(a,"locale-translit",!0);if(a=u.name,!t.citation.opt["givenname-disambiguation-rule"]||"primary-"!==t.citation.opt["givenname-disambiguation-rule"].slice(0,8)||0===n){if(h(this.state,""+e,a),s&&("undefined"==typeof this.namereg[s]?(this.namereg[s]={},this.namereg[s].count=0,this.namereg[s].ikey={},this.namereg[s].items=[e]):-1===this.namereg[s].items.indexOf(e)&&this.namereg[s].items.push(e)),s&&i)if("undefined"==typeof this.namereg[s].ikey[i]){if(this.namereg[s].ikey[i]={},this.namereg[s].ikey[i].count=0,this.namereg[s].ikey[i].skey={},this.namereg[s].ikey[i].items=[e],this.namereg[s].count+=1,2===this.namereg[s].count)for(o=0,l=this.namereg[s].items.length;l>o;o+=1)t.tmp.taintedItemIDs[this.namereg[s].items[o]]=!0}else-1===this.namereg[s].ikey[i].items.indexOf(e)&&this.namereg[s].ikey[i].items.push(e);if(s&&i&&r)if("undefined"==typeof this.namereg[s].ikey[i].skey[r]){if(this.namereg[s].ikey[i].skey[r]={},this.namereg[s].ikey[i].skey[r].items=[e],this.namereg[s].ikey[i].count+=1,2===this.namereg[s].ikey[i].count)for(o=0,l=this.namereg[s].ikey[i].items.length;l>o;o+=1)t.tmp.taintedItemIDs[this.namereg[s].ikey[i].items[o]]=!0}else-1===this.namereg[s].ikey[i].skey[r].items.indexOf(e)&&this.namereg[s].ikey[i].skey[r].items.push(e);"undefined"==typeof this.nameind[e]&&(this.nameind[e]={},this.nameindpkeys[e]={}),s&&(this.nameind[e][s+"::"+i+"::"+r]=!0,this.nameindpkeys[e][s]=this.namereg[s])}},this.addname=f,this.delitems=c,this.evalname=p},e.Registry.CitationReg=function(){this.citationById={},this.citationByIndex=[]},e.Disambiguation=function(t){this.state=t,this.sys=this.state.sys,this.registry=t.registry.registry,this.ambigcites=t.registry.ambigcites,this.configModes(),this.debug=!1},e.Disambiguation.prototype.run=function(t){this.modes.length&&(this.akey=t,this.initVars(t)&&this.runDisambig())},e.Disambiguation.prototype.runDisambig=function(){var t;for(this.initGivens=!0;this.lists.length;){for(this.gnameset=0,this.gname=0,this.clashes=[1,0];this.lists[0][1].length;){this.listpos=0,this.base||(this.base=this.lists[0][0]);t=this.incrementDisambig(),this.scanItems(this.lists[0]),this.evalScan(t)}this.lists=this.lists.slice(1)}},e.Disambiguation.prototype.scanItems=function(t){var s,i,r;this.Item=t[1][0],this.ItemCite=e.getAmbiguousCite.call(this.state,this.Item,this.base,!0),this.scanlist=t[1],this.partners=[],this.partners.push(this.Item),this.nonpartners=[];var a=0;for(s=1,i=t[1].length;i>s;s+=1){r=t[1][s];var n=e.getAmbiguousCite.call(this.state,r,this.base,!0);this.ItemCite===n?(a+=1,this.partners.push(r)):this.nonpartners.push(r)}this.clashes[0]=this.clashes[1],this.clashes[1]=a},e.Disambiguation.prototype.evalScan=function(t){this[this.modes[this.modeindex]](t),t&&(this.modeindex<this.modes.length-1?this.modeindex+=1:this.lists[this.listpos+1]=[this.base,[]])},e.Disambiguation.prototype.disNames=function(t){var e,s;if(0===this.clashes[1]&&1===this.nonpartners.length)this.captureStepToBase(),this.state.registry.registerAmbigToken(this.akey,""+this.nonpartners[0].id,this.betterbase),this.state.registry.registerAmbigToken(this.akey,""+this.partners[0].id,this.betterbase),this.lists[this.listpos]=[this.betterbase,[]];else if(0===this.clashes[1])this.captureStepToBase(),this.state.registry.registerAmbigToken(this.akey,""+this.partners[0].id,this.betterbase),this.lists[this.listpos]=[this.betterbase,this.nonpartners],this.nonpartners.length&&(this.initGivens=!0);else if(1===this.nonpartners.length)this.captureStepToBase(),this.state.registry.registerAmbigToken(this.akey,""+this.nonpartners[0].id,this.betterbase),this.lists[this.listpos]=[this.betterbase,this.partners];else if(this.clashes[1]<this.clashes[0])this.captureStepToBase(),this.lists[this.listpos]=[this.betterbase,this.partners],this.lists.push([this.betterbase,this.nonpartners]);else if(t&&(this.lists[this.listpos]=[this.betterbase,this.nonpartners],this.lists.push([this.betterbase,this.partners]),this.modeindex===this.modes.length-1)){for(e=0,s=this.partners.length;s>e;e+=1)this.state.registry.registerAmbigToken(this.akey,""+this.partners[e].id,this.betterbase);this.lists[this.listpos]=[this.betterbase,[]]}},e.Disambiguation.prototype.disExtraText=function(){var t=!1;if(0===this.clashes[1]&&this.nonpartners.length<2&&(t=!0),t||this.base.disambiguate&&this.state.tmp.disambiguate_count===this.state.tmp.disambiguate_maxMax){if(t||this.state.tmp.disambiguate_count===this.state.tmp.disambiguate_maxMax)if(t||this.modeindex===this.modes.length-1){for(var e=this.lists[this.listpos][0],s=0,i=this.lists[this.listpos][1].length;i>s;s+=1)this.state.tmp.taintedItemIDs[this.lists[this.listpos][1][s].id]=!0,this.state.registry.registerAmbigToken(this.akey,""+this.lists[this.listpos][1][s].id,e);this.lists[this.listpos]=[this.betterbase,[]]}else{this.modeindex=this.modes.length-1;var e=this.lists[this.listpos][0];e.disambiguate=!0;for(var s=0,i=this.lists[this.listpos][1].length;i>s;s+=1)this.state.tmp.taintedItemIDs[this.lists[this.listpos][1][s].id]=!0,this.state.registry.registerAmbigToken(this.akey,""+this.lists[this.listpos][1][s].id,e)}}else if(this.modeindex=0,this.base.disambiguate=this.state.tmp.disambiguate_count,this.betterbase.disambiguate=this.state.tmp.disambiguate_count,this.base.disambiguate)this.disNames();else{this.initGivens=!0,this.base.disambiguate=1;for(var s=0,i=this.lists[this.listpos][1].length;i>s;s+=1)this.state.tmp.taintedItemIDs[this.lists[this.listpos][1][s].id]=!0}},e.Disambiguation.prototype.disYears=function(){var t,s,i,r;i=[];var a=this.lists[this.listpos][0];if(this.clashes[1])for(var n=0,o=this.state.registry.mylist.length;o>n;n+=1)for(var l=this.state.registry.mylist[n],u=0,h=this.lists[this.listpos][1].length;h>u;u+=1){var r=this.lists[this.listpos][1][u];if(r.id==l){i.push(this.registry[r.id]);break}}for(i.sort(this.state.registry.sorter.compareKeys),t=0,s=i.length;s>t;t+=1){a.year_suffix=""+t;var p=this.state.registry.registry[i[t].id].disambig;this.state.registry.registerAmbigToken(this.akey,""+i[t].id,a),e.ambigConfigDiff(p,a)&&(this.state.tmp.taintedItemIDs[i[t].id]=!0)}this.lists[this.listpos]=[this.betterbase,[]]},e.Disambiguation.prototype.incrementDisambig=function(){if(this.initGivens)return this.initGivens=!1,!1;var t=!1,e=!0;if("disNames"===this.modes[this.modeindex]){e=!1,"number"!=typeof this.givensMax&&(e=!0);var s=!1;if("number"!=typeof this.namesMax&&(s=!0),"number"==typeof this.givensMax&&(this.base.givens.length&&this.base.givens[this.gnameset][this.gname]<this.givensMax?this.base.givens[this.gnameset][this.gname]+=1:e=!0),"number"==typeof this.namesMax&&e&&(this.state.opt["disambiguate-add-names"]?(s=!1,this.gname<this.namesMax?(this.base.names[this.gnameset]+=1,this.gname+=1):s=!0):s=!0),"number"==typeof this.namesetsMax&&s)if(this.gnameset<this.namesetsMax)this.gnameset+=1,this.base.names[this.gnameset]=1,this.gname=0;else;"number"==typeof this.namesetsMax&&-1!==this.namesetsMax&&this.gnameset!==this.namesetsMax||this.state.opt["disambiguate-add-names"]&&"number"==typeof this.namesMax&&this.gname!==this.namesMax||"number"==typeof this.givensMax&&"undefined"!=typeof this.base.givens[this.gnameset]&&"undefined"!=typeof this.base.givens[this.gnameset][this.gname]&&this.base.givens[this.gnameset][this.gname]!==this.givensMax||(t=!0)}else"disExtraText"===this.modes[this.modeindex]&&(this.base.disambiguate+=1,this.betterbase.disambiguate+=1);return t},e.Disambiguation.prototype.initVars=function(t){var s,i,r,a,n;if(this.lists=[],this.base=!1,this.betterbase=!1,this.akey=t,this.maxNamesByItemId={},a=[],r=this.ambigcites[t],!r||!r.length)return!1;var o=this.state.retrieveItem(""+r[0]);if(this.getCiteData(o),this.base=e.getAmbigConfig.call(this.state),r&&r.length>1){for(a.push([this.maxNamesByItemId[o.id],o]),s=1,i=r.length;i>s;s+=1)o=this.state.retrieveItem(""+r[s]),this.getCiteData(o,this.base),a.push([this.maxNamesByItemId[o.id],o]);for(a.sort(function(t,e){return t[0]>e[0]?1:t[0]<e[0]?-1:t[1].id>e[1].id?1:t[1].id<e[1].id?-1:0}),n=[],s=0,i=a.length;i>s;s+=1)n.push(a[s][1]);this.lists.push([this.base,n]),this.Item=this.lists[0][1][0]}else this.Item=this.state.retrieveItem(""+r[0]);this.modeindex=0;var s,i;return this.namesMax=this.maxNamesByItemId[this.Item.id][0],this.padBase(this.base),this.padBase(this.betterbase),this.base.year_suffix=!1,this.base.disambiguate=!1,this.betterbase.year_suffix=!1,this.betterbase.disambiguate=!1,"by-cite"===this.state.citation.opt["givenname-disambiguation-rule"]&&this.state.opt["disambiguate-add-givenname"]&&(this.givensMax=2),!0},e.Disambiguation.prototype.padBase=function(t){for(var e=0,s=t.names.length;s>e;e+=1){t.givens[e]||(t.givens[e]=[]);for(var i=0,r=t.names[e];r>i;i+=1)t.givens[e][i]||(t.givens[e][i]=0)}},e.Disambiguation.prototype.configModes=function(){var t,e;this.modes=[],t=this.state.opt["disambiguate-add-givenname"],e=this.state.citation.opt["givenname-disambiguation-rule"],(this.state.opt["disambiguate-add-names"]||t&&"by-cite"===e)&&this.modes.push("disNames"),this.state.opt.has_disambiguate&&this.modes.push("disExtraText"),this.state.opt["disambiguate-add-year-suffix"]&&this.modes.push("disYears")},e.Disambiguation.prototype.getCiteData=function(t,s){if(!this.maxNamesByItemId[t.id]){e.getAmbiguousCite.call(this.state,t,s),s=e.getAmbigConfig.call(this.state),this.maxNamesByItemId[t.id]=e.getMaxVals.call(this.state),this.state.registry.registry[t.id].disambig.givens=this.state.tmp.disambig_settings.givens.slice();for(var i=0,r=this.state.registry.registry[t.id].disambig.givens.length;r>i;i+=1)this.state.registry.registry[t.id].disambig.givens[i]=this.state.tmp.disambig_settings.givens[i].slice();this.namesetsMax=this.state.registry.registry[t.id].disambig.names.length-1,this.base||(this.base=s,this.betterbase=e.cloneAmbigConfig(s)),s.names.length<this.base.names.length&&(this.base=s);for(var i=0,r=s.names.length;r>i;i+=1)s.names[i]>this.base.names[i]&&(this.base.givens[i]=s.givens[i].slice(),this.base.names[i]=s.names[i],this.betterbase.names=this.base.names.slice(),this.betterbase.givens=this.base.givens.slice(),this.padBase(this.base),this.padBase(this.betterbase));this.betterbase.givens=this.base.givens.slice();for(var a=0,n=this.base.givens.length;n>a;a+=1)this.betterbase.givens[a]=this.base.givens[a].slice()}},e.Disambiguation.prototype.captureStepToBase=function(){"by-cite"===this.state.citation.opt["givenname-disambiguation-rule"]&&this.base.givens&&this.base.givens.length&&"undefined"!=typeof this.base.givens[this.gnameset][this.gname]&&(this.betterbase.givens[this.gnameset][this.gname]=this.base.givens[this.gnameset][this.gname]),this.betterbase.names[this.gnameset]=this.base.names[this.gnameset]},e});
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define('citeproc/locale',[],e):window.locale=e()}(function(){var e={"en-US":'<locale xml:lang="en" xmlns="http://purl.org/net/xbiblio/csl">  <style-options punctuation-in-quote="true"/>  <date form="text">    <date-part name="month" suffix=" "/>    <date-part name="day" suffix=", "/>    <date-part name="year"/>  </date>  <date form="numeric">    <date-part name="year"/>    <date-part name="month" form="numeric" prefix="-" range-delimiter="/"/>    <date-part name="day" prefix="-" range-delimiter="/"/>  </date>  <terms>    <term name="document-number-label">No.</term>    <term name="document-number-authority-suffix">Doc.</term>    <term name="un-sales-number-label">U.N. Sales No.</term>    <term name="collection-number-label">No.</term>    <term name="open-quote">\u201c</term>    <term name="close-quote">\u201d</term>    <term name="open-inner-quote">\u2018</term>    <term name="close-inner-quote">\u2019</term>    <term name="ordinal-01">st</term>    <term name="ordinal-02">nd</term>    <term name="ordinal-03">rd</term>    <term name="ordinal-04">th</term>    <term name="long-ordinal-01">first</term>    <term name="long-ordinal-02">second</term>    <term name="long-ordinal-03">third</term>    <term name="long-ordinal-04">fourth</term>    <term name="long-ordinal-05">fifth</term>    <term name="long-ordinal-06">sixth</term>    <term name="long-ordinal-07">seventh</term>    <term name="long-ordinal-08">eighth</term>    <term name="long-ordinal-09">ninth</term>    <term name="long-ordinal-10">tenth</term>    <term name="at">at</term>    <term name="in">in</term>    <term name="ibid">ibid</term>    <term name="accessed">accessed</term>    <term name="retrieved">retrieved</term>    <term name="from">from</term>    <term name="forthcoming">forthcoming</term>    <term name="references">      <single>reference</single>      <multiple>references</multiple>    </term>    <term name="references" form="short">      <single>ref</single>      <multiple>refs</multiple>    </term>    <term name="no date">n.d.</term>    <term name="and">and</term>    <term name="et-al">et al.</term>    <term name="interview">interview</term>    <term name="letter">letter</term>    <term name="anonymous">anonymous</term>    <term name="anonymous" form="short">anon.</term>    <term name="and others">and others</term>    <term name="in press">in press</term>    <term name="online">online</term>    <term name="cited">cited</term>    <term name="internet">internet</term>    <term name="presented at">presented at the</term>    <term name="ad">AD</term>    <term name="bc">BC</term>    <term name="season-01">Spring</term>    <term name="season-02">Summer</term>    <term name="season-03">Autumn</term>    <term name="season-04">Winter</term>    <term name="with">with</term>        <!-- CATEGORIES -->    <term name="anthropology">anthropology</term>    <term name="astronomy">astronomy</term>    <term name="biology">biology</term>    <term name="botany">botany</term>    <term name="chemistry">chemistry</term>    <term name="engineering">engineering</term>    <term name="generic-base">generic base</term>    <term name="geography">geography</term>    <term name="geology">geology</term>    <term name="history">history</term>    <term name="humanities">humanities</term>    <term name="literature">literature</term>    <term name="math">math</term>    <term name="medicine">medicine</term>    <term name="philosophy">philosophy</term>    <term name="physics">physics</term>    <term name="psychology">psychology</term>    <term name="sociology">sociology</term>    <term name="science">science</term>    <term name="political_science">political science</term>    <term name="social_science">social science</term>    <term name="theology">theology</term>    <term name="zoology">zoology</term>        <!-- LONG LOCATOR FORMS -->    <term name="book">      <single>book</single>      <multiple>books</multiple>    </term>    <term name="chapter">      <single>chapter</single>      <multiple>chapters</multiple>    </term>    <term name="column">      <single>column</single>      <multiple>columns</multiple>    </term>    <term name="figure">      <single>figure</single>      <multiple>figures</multiple>    </term>    <term name="folio">      <single>folio</single>      <multiple>folios</multiple>    </term>    <term name="issue">      <single>number</single>      <multiple>numbers</multiple>    </term>    <term name="line">      <single>line</single>      <multiple>lines</multiple>    </term>    <term name="note">      <single>note</single>      <multiple>notes</multiple>    </term>    <term name="opus">      <single>opus</single>      <multiple>opera</multiple>    </term>    <term name="page">      <single>page</single>      <multiple>pages</multiple>    </term>    <term name="paragraph">      <single>paragraph</single>      <multiple>paragraph</multiple>    </term>    <term name="part">      <single>part</single>      <multiple>parts</multiple>    </term>    <term name="section">      <single>section</single>      <multiple>sections</multiple>    </term>    <term name="volume">      <single>volume</single>      <multiple>volumes</multiple>    </term>    <term name="edition">      <single>edition</single>      <multiple>editions</multiple>    </term>    <term name="verse">      <single>verse</single>      <multiple>verses</multiple>    </term>    <term name="sub verbo">      <single>sub verbo</single>      <multiple>s.vv</multiple>    </term>        <!-- SHORT LOCATOR FORMS -->    <term name="book" form="short">bk.</term>    <term name="chapter" form="short">chap.</term>    <term name="column" form="short">col.</term>    <term name="figure" form="short">fig.</term>    <term name="folio" form="short">f.</term>    <term name="issue" form="short">no.</term>    <term name="opus" form="short">op.</term>    <term name="page" form="short">      <single>p.</single>      <multiple>pp.</multiple>    </term>    <term name="paragraph" form="short">para.</term>    <term name="part" form="short">pt.</term>    <term name="section" form="short">sec.</term>    <term name="sub verbo" form="short">      <single>s.v.</single>      <multiple>s.vv.</multiple>    </term>    <term name="verse" form="short">      <single>v.</single>      <multiple>vv.</multiple>    </term>    <term name="volume" form="short">    	<single>vol.</single>    	<multiple>vols.</multiple>    </term>    <term name="edition">edition</term>    <term name="edition" form="short">ed.</term>        <!-- SYMBOL LOCATOR FORMS -->    <term name="paragraph" form="symbol">      <single>\xb6</single>      <multiple>\xb6\xb6</multiple>    </term>    <term name="section" form="symbol">      <single>\xa7</single>      <multiple>\xa7\xa7</multiple>    </term>        <!-- LONG ROLE FORMS -->    <term name="author">      <single></single>      <multiple></multiple>    </term>    <term name="editor">      <single>editor</single>      <multiple>editors</multiple>    </term>    <term name="translator">      <single>translator</single>      <multiple>translators</multiple>    </term>        <!-- SHORT ROLE FORMS -->    <term name="author" form="short">      <single></single>      <multiple></multiple>    </term>    <term name="editor" form="short">      <single>ed.</single>      <multiple>eds.</multiple>    </term>    <term name="translator" form="short">      <single>tran.</single>      <multiple>trans.</multiple>    </term>        <!-- VERB ROLE FORMS -->    <term name="editor" form="verb">edited by</term>    <term name="translator" form="verb">translated by</term>    <term name="recipient" form="verb">to</term>    <term name="interviewer" form="verb">interview by</term>        <!-- SHORT VERB ROLE FORMS -->    <term name="editor" form="verb-short">ed.</term>    <term name="translator" form="verb-short">trans.</term>        <!-- LONG MONTH FORMS -->    <term name="month-01">January</term>    <term name="month-02">February</term>    <term name="month-03">March</term>    <term name="month-04">April</term>    <term name="month-05">May</term>    <term name="month-06">June</term>    <term name="month-07">July</term>    <term name="month-08">August</term>    <term name="month-09">September</term>    <term name="month-10">October</term>    <term name="month-11">November</term>    <term name="month-12">December</term>        <!-- SHORT MONTH FORMS -->    <term name="month-01" form="short">Jan.</term>    <term name="month-02" form="short">Feb.</term>    <term name="month-03" form="short">Mar.</term>    <term name="month-04" form="short">Apr.</term>	<term name="month-05" form="short">May</term>    <term name="month-06" form="short">Jun.</term>    <term name="month-07" form="short">Jul.</term>    <term name="month-08" form="short">Aug.</term>    <term name="month-09" form="short">Sep.</term>    <term name="month-10" form="short">Oct.</term>    <term name="month-11" form="short">Nov.</term>    <term name="month-12" form="short">Dec.</term>  </terms></locale>'};return e});
!function(t){"object"==typeof exports?module.exports=t():"function"==typeof define&&define.amd?define('citeproc/sys',["citeproc/locale"],t):window.Sys=t()}(function(t){var e=function(t,e){this.abbreviations=t||{},this.abbrevsname="default",this.bibdata=e||{}};return e.prototype.retrieveItem=function(t){return this.bibdata[t]},e.prototype.retrieveLocale=function(e){return t[e]},e.prototype.getAbbreviation=function(t,e,i,n,o){try{e["default"][n][o]=this.abbreviations[this.abbrevsname][n][o]?this.abbreviations[this.abbrevsname][n][o]:""}catch(r){}},e.prototype.setAbbreviations=function(t){this.abbrevsname=t},e});
!function(e){"object"==typeof exports?module.exports=e():"function"==typeof define&&define.amd?define('citeproc/csl',[],e):window.citationstyles=e()}(function(){var e={"modern-language-association":'<?xml version="1.0" encoding="utf-8"?><style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="never">  <info>    <title>Modern Language Association 7th edition</title>    <title-short>MLA</title-short>    <id>http://www.zotero.org/styles/modern-language-association</id>    <link href="http://www.zotero.org/styles/modern-language-association" rel="self"/>    <link href="http://owl.english.purdue.edu/owl/section/2/11/" rel="documentation"/>    <author>      <name>Ilouise S. Bradford</name>      <email>isbradford@gmail.com</email>    </author>    <contributor>      <name>Sarah Ficke</name>      <email>sficke@email.unc.edu</email>    </contributor>    <contributor>      <name>Sebastian Karcher</name>      <email>karcher@u.northwestern.edu</email>    </contributor>    <contributor>      <name>Christian Werthschulte</name>      <email>Christian.Werthschulte@rub.de</email>    </contributor>    <contributor>      <name>Simon Kornblith</name>      <email>simon@simonster.com</email>    </contributor>    <contributor>      <name>James Johnston</name>      <email>thejamesjohnston@gmail.com</email>    </contributor>    <category citation-format="author"/>    <category field="generic-base"/>    <summary>This style adheres to the MLA 7th edition handbook and contains modifications to these types of sources: e-mail, forum posts, interviews, manuscripts, maps, presentations, TV broadcasts, and web pages.</summary>    <updated>2014-07-06T20:05:10+00:00</updated>    <rights license="http://creativecommons.org/licenses/by-sa/3.0/">This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License</rights>  </info>  <locale xml:lang="en">    <terms>      <term name="month-01" form="short">Jan.</term>      <term name="month-02" form="short">Feb.</term>      <term name="month-03" form="short">Mar.</term>      <term name="month-04" form="short">Apr.</term>      <term name="month-05" form="short">May</term>      <term name="month-06" form="short">June</term>      <term name="month-07" form="short">July</term>      <term name="month-08" form="short">Aug.</term>      <term name="month-09" form="short">Sept.</term>      <term name="month-10" form="short">Oct.</term>      <term name="month-11" form="short">Nov.</term>      <term name="month-12" form="short">Dec.</term>      <term name="volume" form="short">        <single>Vol.</single>        <multiple>vols</multiple>      </term>      <term name="edition" form="short">ed</term>      <term name="editor" form="verb-short">ed.</term>      <term name="translator" form="verb-short">trans.</term>      <term name="translator" form="short">trans.</term>    </terms>  </locale>  <macro name="editor-translator">    <names variable="editor translator" delimiter=". ">      <label form="verb-short" text-case="capitalize-first" suffix=" "/>      <name and="text" delimiter=", "/>    </names>  </macro>  <macro name="author">    <names variable="author">      <name name-as-sort-order="first" and="text" sort-separator=", " delimiter=", " delimiter-precedes-last="always"/>      <label form="short" prefix=", "/>      <substitute>        <names variable="editor"/>        <names variable="translator"/>        <text macro="title"/>      </substitute>    </names>  </macro>  <macro name="author-short">    <names variable="author">      <name form="short" and="text" delimiter=", " initialize-with=". "/>      <substitute>        <names variable="editor"/>        <names variable="translator"/>        <text macro="title-short"/>      </substitute>    </names>  </macro>  <macro name="access">    <group delimiter=" ">      <date variable="accessed">        <date-part name="day" suffix=" "/>        <date-part name="month" form="short" suffix=" "/>        <date-part name="year"/>      </date>    </group>  </macro>  <macro name="issued-full-date">    <choose>      <if variable="issued">        <date variable="issued">          <date-part name="day" suffix=" "/>          <date-part name="month" form="short" suffix=" " strip-periods="false"/>          <date-part name="year"/>        </date>      </if>      <else>        <text term="no date" form="short"/>      </else>    </choose>  </macro>  <macro name="medium">    <choose>      <if type="motion_picture">        <choose>          <if variable="medium">            <text variable="medium" prefix=" "/>          </if>          <else>            <text value="Film" prefix=" "/>          </else>        </choose>      </if>      <else-if type="broadcast">        <choose>          <if variable="medium">            <text variable="medium" prefix=" "/>          </if>          <else>            <text value="Television" prefix=" "/>          </else>        </choose>      </else-if>      <else-if type="manuscript">        <text value=""/>      </else-if>      <else-if type="personal_communication" match="any">        <text value="" prefix=" "/>      </else-if>      <else-if type="speech" match="any">        <text value=""/>      </else-if>      <else-if type="interview">        <text variable="medium" prefix=" "/>      </else-if>      <else-if type="song">        <choose>          <if variable="medium">            <text variable="medium" prefix=" "/>          </if>          <else>            <text value="Audio Recording" prefix=" "/>          </else>        </choose>      </else-if>      <else>        <choose>          <if variable="URL DOI" match="any">            <text variable="source" prefix=" " suffix="." font-style="italic"/>            <group>              <text value="Web." prefix=" "/>            </group>            <text prefix=" " suffix="." macro="access"/>          </if>          <else>            <text value="Print" prefix=" "/>          </else>        </choose>      </else>    </choose>  </macro>  <macro name="title">    <choose>      <if type="bill book graphic legal_case legislation manuscript motion_picture report song" match="any">        <text variable="title" font-style="italic" text-case="title"/>      </if>      <else-if type="interview personal_communication" match="any">        <text variable="title" text-case="title" quotes="false"/>      </else-if>      <else>        <text variable="title" text-case="title" quotes="true"/>      </else>    </choose>  </macro>  <macro name="title-short">    <choose>      <if type="bill book graphic legal_case legislation manuscript motion_picture report song" match="any">        <text variable="title" text-case="title" form="short" font-style="italic"/>      </if>      <else>        <text variable="title" text-case="title" form="short" quotes="true"/>      </else>    </choose>  </macro>  <macro name="pages">    <choose>      <if variable="page">        <text variable="page"/>      </if>      <else-if type="personal_communication interview" match="any">        <text value=""/>      </else-if>      <else>        <text value="n. pag"/>      </else>    </choose>  </macro>  <macro name="edition">    <choose>      <if is-numeric="edition">        <group delimiter=" ">          <number variable="edition" form="ordinal"/>          <text term="edition" form="short"/>        </group>      </if>      <else>        <text variable="edition"/>      </else>    </choose>  </macro>  <macro name="volume">    <choose>      <if is-numeric="volume">        <group delimiter=" ">          <text term="volume" form="short" strip-periods="false"/>          <number variable="volume"/>        </group>      </if>      <else>        <text variable="volume"/>      </else>    </choose>  </macro>  <macro name="number-of-volumes-only">    <choose>      <if variable="volume" match="none">        <choose>          <if is-numeric="number-of-volumes">            <group delimiter=" ">              <number variable="number-of-volumes"/>              <text term="volume" form="short" plural="true" strip-periods="true"/>            </group>          </if>          <else>            <text variable="number-of-volumes"/>          </else>        </choose>      </if>    </choose>  </macro>  <macro name="number-of-volumes-optional">    <choose>      <if variable="volume">        <choose>          <if is-numeric="number-of-volumes">            <group delimiter=" ">              <number variable="number-of-volumes"/>              <text term="volume" form="short" plural="true" strip-periods="true"/>            </group>          </if>          <else>            <text variable="number-of-volumes"/>          </else>        </choose>      </if>    </choose>  </macro>  <macro name="collection-title">    <text variable="collection-title" text-case="title" prefix=" "/>  </macro>  <macro name="collection-number">    <text variable="collection-number" prefix=" " suffix="."/>  </macro>  <macro name="publisher">    <choose>      <if variable="publisher">        <text variable="publisher"/>      </if>      <else>        <text value="N.p."/>      </else>    </choose>  </macro>  <macro name="publisher-year">    <group delimiter=", ">      <group delimiter=": ">        <text variable="publisher-place"/>        <text macro="publisher"/>      </group>      <date variable="issued">        <date-part name="year"/>      </date>    </group>  </macro>  <citation et-al-min="4" et-al-use-first="1" disambiguate-add-names="true" disambiguate-add-givenname="true">    <layout prefix="(" suffix=")" delimiter="; ">      <group delimiter=" ">        <choose>          <if variable="author editor translator" match="any">            <group delimiter=", ">              <text macro="author-short"/>              <choose>                <if disambiguate="true">                  <text macro="title-short"/>                </if>              </choose>            </group>          </if>          <else>            <text macro="title-short"/>          </else>        </choose>        <text variable="locator"/>      </group>    </layout>  </citation>  <bibliography hanging-indent="true" et-al-min="4" et-al-use-first="1" line-spacing="2" entry-spacing="0" subsequent-author-substitute="---">    <sort>      <key macro="author"/>      <key variable="title"/>    </sort>    <layout suffix=".">      <text macro="author" suffix="."/>      <text macro="title" prefix=" " suffix="."/>      <choose>        <if type="bill book graphic legal_case legislation motion_picture report song" match="any">          <text macro="editor-translator" prefix=" " suffix="."/>          <text macro="edition" prefix=" " suffix="."/>          <text macro="volume" prefix=" " suffix="."/>          <text macro="number-of-volumes-only" prefix=" " suffix="."/>          <text macro="publisher-year" prefix=" " suffix="."/>        </if>        <else-if type="chapter paper-conference" match="any">          <group>            <text variable="container-title" text-case="title" font-style="italic" prefix=" " suffix="."/>            <text macro="editor-translator" prefix=" " suffix="."/>            <text macro="edition" prefix=" " suffix="."/>            <text macro="volume" prefix=" " suffix="."/>            <text macro="number-of-volumes-only" prefix=" " suffix="."/>            <text macro="publisher-year" prefix=" " suffix="."/>          </group>          <text variable="page" prefix=" " suffix="."/>        </else-if>        <else-if type="thesis">          <text variable="genre" prefix=" " suffix="."/>          <group delimiter=", ">            <text macro="publisher" prefix=" "/>            <date variable="issued" prefix=" " suffix=".">              <date-part name="year"/>            </date>          </group>          <text variable="archive_location" prefix=" " suffix="."/>        </else-if>        <else-if type="manuscript">          <date variable="issued" prefix=" " suffix=".">            <date-part name="year"/>          </date>          <text variable="genre" prefix=" " suffix="."/>          <text variable="archive_location" prefix=" " suffix="."/>          <text variable="publisher-place" prefix=" "/>        </else-if>        <else-if type="personal_communication">          <date variable="issued" prefix=" " suffix=".">            <date-part name="day" suffix=" "/>            <date-part name="month" form="short" suffix=" "/>            <date-part name="year"/>          </date>          <choose>            <if variable="genre">              <text prefix=" " suffix="." variable="genre"/>            </if>            <else>              <text prefix=" " suffix="." value="E-mail"/>            </else>          </choose>        </else-if>        <else-if type="map">          <text variable="genre" prefix=" " suffix="."/>          <text variable="publisher-place" prefix=" " suffix=":"/>          <text macro="publisher" prefix=" "/>          <date variable="issued" prefix=" " suffix=",">            <date-part name="year"/>          </date>        </else-if>        <else-if type="speech">          <text variable="event" prefix=" " suffix="."/>          <text variable="publisher-place" prefix=" " suffix="."/>          <date variable="issued" prefix=" " suffix=".">            <date-part name="year"/>          </date>          <text variable="genre" prefix=" " suffix="."/>        </else-if>        <else-if type="webpage post-weblog" match="any">          <text variable="genre" prefix=" " suffix="."/>          <text variable="container-title" font-style="italic" prefix=" " suffix="."/>          <group delimiter=", " prefix=" ">            <text macro="publisher"/>            <text macro="issued-full-date" suffix="."/>          </group>        </else-if>        <else-if type="broadcast">          <text variable="container-title" font-style="italic" prefix=" " suffix="."/>          <text macro="publisher" prefix=" " suffix=","/>          <date variable="issued" prefix=" " suffix=".">            <date-part name="day" suffix=" "/>            <date-part name="month" form="short" suffix=" " strip-periods="false"/>            <date-part name="year"/>          </date>        </else-if>        <else>          <group prefix=" " suffix="." delimiter=": ">            <group delimiter=" ">              <text macro="editor-translator" suffix="."/>              <text variable="container-title" font-style="italic"/>              <choose>                <if type="article-journal">                  <group delimiter=" ">                    <group delimiter=".">                      <text variable="volume"/>                      <text variable="issue"/>                    </group>                    <date variable="issued" prefix="(" suffix="):">                      <date-part name="year"/>                    </date>                  </group>                  <text macro="pages" prefix=" "/>                </if>                <else>                  <group>                    <date variable="issued">                      <date-part name="day" suffix=" "/>                      <date-part name="month" form="short" suffix=" " strip-periods="false"/>                      <date-part name="year"/>                    </date>                    <choose>                      <if variable="URL DOI" match="any">                        <text variable="page" prefix=": "/>                      </if>                      <else>                        <text macro="pages" prefix=": "/>                      </else>                    </choose>                  </group>                </else>              </choose>            </group>          </group>        </else>      </choose>      <text macro="medium" suffix="."/>      <text macro="number-of-volumes-optional" suffix="." prefix=" "/>      <text macro="collection-title"/>      <text macro="collection-number"/>    </layout>  </bibliography></style>',"chicago-author-date":'<style       xmlns="http://purl.org/net/xbiblio/csl"      class="in-text"   default-locale="en-US-x-sort-ja-alalc97-x-sec-en" version="1.0">  <!-- BOGUS COMMENT -->  <info>    <title>Chicago Manual of Style (Author-Date format)</title>    <id>http://www.zotero.org/styles/chicago-author-date</id>    <link href="http://www.zotero.org/styles/chicago-author-date" />    <author>      <name>Julian Onions</name>      <email>julian.onions@gmail.com</email>    </author>    <category term="author-date" />    <category term="generic-base" />    <updated />    <summary>The author-date variant of the Chicago style</summary>    <link href="http://www.chicagomanualofstyle.org/tools_citationguide.html" rel="documentation" />  </info> <macro name="secondary-contributors">    <choose>      <if match="none" type="chapter">        <group delimiter=". ">          <choose>            <if variable="author">              <names variable="editor">                <label form="verb-short" prefix=" " suffix=". " text-case="capitalize-first" />                <name and="text" delimiter=", " />              </names>            </if>          </choose>          <choose>            <if match="any" variable="author editor">              <names variable="translator">                <label form="verb-short" prefix=" " suffix=". " text-case="capitalize-first" />                <name and="text" delimiter=", " />              </names>            </if>          </choose>        </group>      </if>    </choose>  </macro>  <macro name="container-contributors">    <choose>      <if type="chapter">        <group delimiter=", " prefix=",">          <choose>            <if variable="author">              <names variable="editor">                <label form="verb-short" prefix=" " suffix=". " text-case="lowercase" />                <name and="text" delimiter=", " />              </names>            </if>          </choose>          <choose>            <if match="any" variable="author editor">              <names variable="translator">                <label form="verb-short" prefix=" " suffix=". " text-case="lowercase" />                <name and="text" delimiter=", " />              </names>            </if>          </choose>        </group>      </if>    </choose>  </macro>  <macro name="anon">    <choose>      <if match="none" variable="author editor translator">        <text form="short" term="anonymous" text-case="capitalize-first" />      </if>    </choose>  </macro>  <macro name="editor">    <names variable="editor">      <name and="text" delimiter=", " delimiter-precedes-last="always" name-as-sort-order="first" sort-separator=", " />      <label form="short" prefix=", " suffix="." />    </names>  </macro>  <macro name="translator">    <names variable="translator">      <name and="text" delimiter=", " delimiter-precedes-last="always" name-as-sort-order="first" sort-separator=", " />      <label form="verb-short" prefix=", " suffix="." />    </names>  </macro>  <macro name="recipient">    <choose>      <if type="personal_communication">        <choose>          <if variable="genre">            <text text-case="capitalize-first" variable="genre" />          </if>          <else>            <text term="letter" text-case="capitalize-first" />          </else>        </choose>      </if>    </choose>    <names delimiter=", " variable="recipient">      <label form="verb" prefix=" " suffix=" " text-case="lowercase" />      <name and="text" delimiter=", " />    </names>  </macro>  <macro name="contributors">    <names variable="author">      <name and="text" delimiter=", " delimiter-precedes-last="always" name-as-sort-order="first" sort-separator=", " />      <label form="verb-short" prefix=", " suffix="." text-case="lowercase" />      <substitute>        <text macro="editor" />        <text macro="translator" />      </substitute>    </names>    <text macro="anon" />    <text macro="recipient" />  </macro>  <macro name="contributors-short">    <names variable="author">      <name and="text" delimiter=", " form="short" />      <substitute>        <names variable="editor" />        <names variable="translator" />      </substitute>    </names>    <text macro="anon" />  </macro>  <macro name="interviewer">    <names delimiter=", " variable="interviewer">      <label form="verb" prefix=" " suffix=" " text-case="capitalize-first" />      <name and="text" delimiter=", " />    </names>  </macro>  <macro name="archive">    <group delimiter=". ">      <text text-case="capitalize-first" variable="archive_location" />      <text variable="archive" />      <text variable="archive-place" />    </group>  </macro>  <macro name="access">    <group delimiter=". ">      <choose>        <if match="any" type="graphic report">          <text macro="archive" />        </if>        <else-if match="none" type="book thesis chapter article-journal article-newspaper article-magazine">          <text macro="archive" />        </else-if>      </choose>      <text prefix="doi:" variable="DOI" />      <text variable="URL" />    </group>  </macro>  <macro name="title">    <choose>      <if match="none" variable="title">        <choose>          <if match="none" type="personal_communication">            <text text-case="capitalize-first" variable="genre" />          </if>        </choose>      </if>      <else-if type="book">        <text font-style="italic" variable="title" />      </else-if>      <else>        <text variable="title" />      </else>    </choose>  </macro>  <macro name="edition">    <choose>      <if match="any" type="book chapter">        <choose>          <if is-numeric="edition">            <group delimiter=" ">              <number form="ordinal" variable="edition" />              <text form="short" suffix="." term="edition" />            </group>          </if>          <else>            <text suffix="." variable="edition" />          </else>        </choose>      </if>    </choose>  </macro>  <macro name="locators">    <choose>      <if type="article-journal">        <text prefix=" " variable="volume" />        <text prefix=", no. " variable="issue" />      </if>      <else-if type="book">        <group delimiter=". " prefix=". ">          <group>            <text form="short" suffix=". " term="volume" text-case="capitalize-first" />            <number form="numeric" variable="volume" />          </group>          <group>            <number form="numeric" variable="number-of-volumes" />            <text form="short" plural="true" prefix=" " suffix="." term="volume" />          </group>        </group>      </else-if>    </choose>  </macro>  <macro name="locators-chapter">    <choose>      <if type="chapter">        <group prefix=", ">          <text suffix=":" variable="volume" />          <text variable="page" />        </group>      </if>    </choose>  </macro>  <macro name="locators-article">    <choose>      <if type="article-newspaper">        <group delimiter=", " prefix=", ">          <group>            <text suffix=" " variable="edition" />            <text prefix=" " term="edition" />          </group>          <group>            <text form="short" suffix=". " term="section" />            <text variable="section" />          </group>        </group>      </if>      <else-if type="article-journal">        <text prefix=": " variable="page" />      </else-if>    </choose>  </macro>  <macro name="point-locators">    <group>      <choose>        <if locator="page" match="none">          <label form="short" strip-periods="false" suffix=" " variable="locator" />        </if>      </choose>      <text variable="locator" />    </group>  </macro>  <macro name="container-prefix">    <text term="in" text-case="capitalize-first" />  </macro>  <macro name="container-title">    <choose>      <if type="chapter">        <text macro="container-prefix" suffix=" " />      </if>    </choose>    <text font-style="italic" variable="container-title" form="short"/>  </macro>  <macro name="publisher">    <group delimiter=": ">      <text variable="publisher-place" />      <text variable="publisher" />    </group>  </macro>  <macro name="date">    <date variable="issued" form="text" date-parts="year"><date-part name="year"/></date>  </macro>  <macro name="day-month">    <date variable="issued">      <date-part name="month" />      <date-part name="day" prefix=" " />    </date>  </macro>  <macro name="collection-title">    <text variable="collection-title" />    <text prefix=" " variable="collection-number" />  </macro>  <macro name="event">    <group>      <text suffix=" " term="presented at" />      <text variable="event" />    </group>  </macro>  <macro name="description">    <group delimiter=". ">      <text macro="interviewer" />      <text text-case="capitalize-first" variable="medium" />    </group>    <choose>      <if match="none" variable="title"> </if>      <else-if type="thesis"> </else-if>      <else>        <text prefix=". " text-case="capitalize-first" variable="genre" />      </else>    </choose>  </macro>  <macro name="issue">    <choose>      <if type="article-journal">        <text macro="day-month" prefix=" (" suffix=")" />      </if>      <else-if type="speech">        <group delimiter=", " prefix=" ">          <text macro="event" />          <text macro="day-month" />          <text variable="event-place" />        </group>      </else-if>      <else-if match="any" type="article-newspaper article-magazine">        <text macro="day-month" prefix=", " />      </else-if>      <else>        <group delimiter=", " prefix=". ">          <choose>            <if type="thesis">              <text text-case="capitalize-first" variable="genre" />            </if>          </choose>          <text macro="publisher" />          <text macro="day-month" />        </group>      </else>    </choose>  </macro>  <citation          disambiguate-add-givenname="true"         disambiguate-add-names="true"         disambiguate-add-year-suffix="true"         et-al-min="4"         et-al-subsequent-min="4"         et-al-subsequent-use-first="1"         et-al-use-first="1">    <layout text-decoration="underline" delimiter="; " prefix="(" suffix=")">      <group delimiter=", ">        <group delimiter=" ">          <text macro="contributors-short" />          <text macro="date" />        </group>        <text macro="point-locators" />      </group>    </layout>  </citation>  <bibliography          entry-spacing="0"         et-al-min="11"         et-al-use-first="7"         hanging-indent="true"         subsequent-author-substitute="---">    <sort>      <key macro="contributors" />      <key macro="date" />    </sort>    <layout suffix=".">      <text macro="contributors" suffix=". " />      <text macro="date" suffix=". " />      <text macro="title" />      <text macro="description"/>      <text macro="secondary-contributors" prefix=". " />      <text macro="container-title" prefix=". "/>      <text macro="container-contributors" />      <text macro="locators-chapter" />      <text macro="edition" prefix=". " />      <text macro="locators" />      <text macro="collection-title" prefix=". " />      <text macro="issue" />      <text macro="locators-article" />      <text macro="access" prefix=". " />    </layout>  </bibliography></style>',ieee:'<style        xmlns="http://purl.org/net/xbiblio/csl"       class="in-text">   <info>     <title>IEEE</title>     <id>http://www.zotero.org/styles/ieee</id>     <link href="http://www.zotero.org/styles/ieee" />     <author>       <name>Michael Berkowitz</name>       <email>mberkowi@gmu.edu</email>     </author>     <contributor>       <name>Julian Onions</name>       <email>julian.onions@gmail.com</email>     </contributor>     <contributor>       <name>Rintze Zelle</name>       <uri>http://forums.zotero.org/account/831/</uri>     </contributor>     <category term="engineering" />     <category term="generic-base" />     <category term="numeric" />     <updated />     <link href="http://www.ieee.org/portal/cms_docs_iportals/iportals/publications/authors/transjnl/stylemanual.pdf" rel="documentation" />   </info>   <macro name="author">     <names variable="author">       <name and="text" delimiter=", " initialize-with="."/>       <label form="short" prefix=", " suffix="." text-case="lowercase" />       <substitute>         <names variable="editor" />         <names variable="translator" />       </substitute>     </names>   </macro>   <macro name="editor">     <names variable="editor">       <name and="text" delimiter=", " initialize-with="." name-as-sort-order="all" />       <label form="short" prefix=", " suffix="." text-case="lowercase" />     </names>   </macro>   <macro name="title">     <choose>       <if type="book">         <text font-style="italic" variable="title" />       </if>       <else>         <text quotes="true" variable="title" />       </else>     </choose>   </macro>   <macro name="publisher">     <text prefix=" " suffix=": " variable="publisher-place" />     <text suffix=", " variable="publisher" />     <date variable="issued">       <date-part name="year" />     </date>   </macro>   <macro name="access">     <text variable="URL" />   </macro>   <macro name="page">     <group>       <label form="short" suffix=". " variable="page" />       <text variable="page" />     </group>   </macro>   <citation           collapse="citation-number"          et-al-min="3"          et-al-use-first="1">     <sort>       <key variable="citation-number" />     </sort>     <layout delimiter="," prefix="[" suffix="]">       <text variable="citation-number" />     </layout>   </citation>   <bibliography           entry-spacing="0"          second-field-align="flush">     <layout suffix=".">       <text prefix="[" suffix="]" variable="citation-number" />       <text macro="author" prefix=" " suffix=", " />       <choose>         <if type="book">           <group delimiter=", ">             <text macro="title" />             <text macro="publisher" />           </group>         </if>         <else-if type="chapter">           <group delimiter=", ">             <text macro="title" />             <text font-style="italic" variable="container-title" form="short"/>             <text macro="editor" />             <text macro="publisher" />             <text macro="page" />           </group>         </else-if>         <else-if type="patent">           <text macro="title" suffix=", " />           <text prefix="U.S. Patent " variable="number" />           <date prefix=", " variable="issued">             <date-part name="month" suffix=" " />             <date-part name="day" suffix=", " />             <date-part name="year" />           </date>         </else-if>         <else-if type="thesis">           <group delimiter=", ">             <text macro="title" />             <text variable="genre" />             <text variable="publisher" />             <date variable="issued">               <date-part name="year" />             </date>           </group>         </else-if>         <else>           <group delimiter=", ">             <text macro="title" />             <text font-style="italic" variable="container-title" form="short"/>             <text prefix=" vol. " variable="volume" />             <date variable="issued">               <date-part form="short" name="month" suffix=". " />               <date-part name="year" />             </date>             <text macro="page" />           </group>         </else>       </choose>     </layout>   </bibliography> </style>',"springer-author-date":'<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" default-locale="en-US" version="1.0" demote-non-dropping-particle="sort-only">  <info>    <title>Springer Author Date</title>    <id>http://www.zotero.org/styles/springer-author-date</id>    <link href="http://www.zotero.org/styles/springer-author-date" rel="self"/>    <link href="www.springer.com/cda/content/document/cda_downloaddocument/instruct-authors-e.pdf" rel="documentation"/>    <author>      <name>Jens Allmer</name>      <email>jens@allmer.de</email>      <uri>http://jens.allmer.de</uri>    </author>    <contributor>      <name>Sebastian Karcher</name>    </contributor>    <category citation-format="author-date"/>    <category field="generic-base"/>    <updated>2008-10-29T21:01:24+00:00</updated>    <summary>Springer Author Date Style for the disciplines Medicine, Biomedicine, Life Sciences, Chemistry, Geosciences, Computer Science, Engineering, Economics</summary>    <rights>This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License: http://creativecommons.org/licenses/by-sa/3.0/</rights>  </info>  <macro name="author-short">    <names variable="author">      <name form="short" and="text"/>      <substitute>        <names variable="editor"/>        <names variable="translator"/>      </substitute>    </names>  </macro>  <macro name="author">    <names variable="author">      <name sort-separator=" " initialize-with="" name-as-sort-order="all" delimiter=", " delimiter-precedes-last="always"/>      <!--<et-al strip-periods="true"/> -->      <substitute>        <names variable="editor"/>        <names variable="translator"/>      </substitute>    </names>  </macro>  <macro name="editor">    <text term="in" text-case="capitalize-first" suffix=": "/>    <names variable="editor">      <name sort-separator=" " initialize-with="" name-as-sort-order="all" delimiter=", " delimiter-precedes-last="always"/>      <label form="short" strip-periods="true" prefix=" (" suffix=")"/>    </names>  </macro>  <macro name="edition">    <choose>      <if is-numeric="edition">        <group delimiter=" ">          <number variable="edition" form="ordinal"/>          <text term="edition" form="short" strip-periods="true"/>        </group>      </if>      <else>        <text variable="edition"/>      </else>    </choose>  </macro>  <macro name="year">    <date variable="issued">      <date-part name="year"/>    </date>  </macro>  <macro name="title">    <choose>      <if type="book">        <group delimiter=", " suffix=". ">          <text variable="title"/>          <text macro="edition"/>        </group>      </if>      <else>        <text variable="title" suffix=". "/>      </else>    </choose>  </macro>  <macro name="year-parenth">    <date prefix="(" suffix=")" variable="issued">      <date-part name="year"/>    </date>  </macro>  <citation et-al-min="3" et-al-use-first="1" disambiguate-add-year-suffix="true">    <sort>      <key macro="author"/>      <key variable="issued" sort="descending"/>    </sort>    <layout prefix="(" suffix=")" delimiter="; ">      <group delimiter=" ">        <text macro="author-short"/>        <text macro="year"/>      </group>    </layout>  </citation>  <bibliography et-al-min="5" et-al-use-first="3" hanging-indent="true">    <sort>      <key macro="author"/>      <key variable="author" sort="ascending"/>    </sort>    <layout>      <group delimiter=" ">        <text macro="author"/>        <text macro="year-parenth"/>        <text macro="title"/>      </group>      <choose>        <if variable="page">          <choose>            <!--    Book chapter		 Brown B, Aaron M (2001) The politics of nature.		 In: Smith J (ed) The rise of modern genomics, 3rd edn.		 Wiley, New York, pp 230-257 -->            <if type="chapter paper-conference" match="any">              <text macro="editor"/>              <group prefix=" " delimiter=", " suffix=". ">                <text variable="container-title" form="short"/>                <text macro="edition"/>              </group>              <text variable="publisher" suffix=", "/>              <text variable="publisher-place" suffix=", "/>              <group delimiter=" ">                <label variable="page" form="short" strip-periods="true"/>                <text variable="page"/>              </group>            </if>            <else>              <!--    Journal article		   Gamelin FX, Baquet G, Berthoin S, Thevenet D, Nourry C, Nottin S, Bosquet L (2009)		   Effect of high intensity intermittent training on heart rate variability in prepubescent children.		   Eur J Appl Physiol 105:731-738. doi: 10.1007/s00421-008-0955-8		   Ideally, the names of all authors should be provided, but the usage of "et al"		   in long author lists will also be accepted:		   Smith J, Jones M Jr, Houghton L et al (1999)		   Future of health insurance. N Engl J Med 965:325-329   -->              <group delimiter="">                <text variable="container-title" suffix=" " form="short" strip-periods="true"/>                <text variable="volume" suffix=":"/>                <text variable="page" suffix="."/>                <text prefix=" doi: " variable="DOI"/>              </group>            </else>          </choose>        </if>        <else-if variable="DOI">          <!--    Article by DOI	       Slifka MK, Whitton JL (2000) Clinical implications of dysregulated cytokine production.	       J Mol Med. doi:10.1007/s001090000086     -->          <group delimiter=". ">            <text variable="container-title" form="short" strip-periods="true"/>            <text prefix="doi: " variable="DOI"/>          </group>        </else-if>        <else-if type="bill book graphic legal_case motion_picture report song" match="any">          <!--    Book	       South J, Blass B (2001) The future of modern genomics. Blackwell, London    -->          <group delimiter=", ">            <text variable="publisher"/>            <text variable="publisher-place"/>          </group>        </else-if>        <else-if type="webpage">          <!--    Online document	       Doe J (1999) Title of subordinate document. In: The dictionary of substances and their effects.	       Royal Society of Chemistry. Available via DIALOG.	       http://www.rsc.org/dose/title of subordinate document. Accessed 15 Jan 1999	       Unfortunately, "Royal Society of Chemistry. Available via DIALOG." cannot seem to be mapped here -->          <group delimiter="">            <text prefix="In: " variable="container-title" suffix=". " form="short"/>            <text variable="URL" suffix=". "/>            <date variable="accessed">              <date-part prefix="Accessed " name="day" suffix=" "/>              <date-part name="month" form="short" suffix=" " strip-periods="true"/>              <date-part name="year"/>            </date>          </group>        </else-if>        <else-if type="thesis">          <!--    Dissertation	       Trent JW (1975) Experimental acute renal failure. Dissertation, University of California       -->          <group delimiter=", ">            <text variable="genre"/>            <text variable="publisher"/>          </group>        </else-if>        <else>          <!--    None of the provided formats need to add manually (some data provided) -->          <group delimiter="">            <text variable="container-title" form="short" suffix=" "/>            <text variable="volume" suffix=":"/>            <text variable="page" suffix="."/>          </group>        </else>      </choose>    </layout>  </bibliography></style>',"iso690-author-date-en":'<style xmlns="http://purl.org/net/xbiblio/csl" class="in-text" version="1.0" demote-non-dropping-particle="never" default-locale="en-US">  <info>    <title>ISO-690 (author-date, English)</title>    <id>http://www.zotero.org/styles/iso690-author-date-en</id>    <link href="http://www.zotero.org/styles/iso690-author-date-en" rel="self"/>    <author>      <name>Laure Mellifluo</name>      <email>laure.mellifluo@hesge.ch</email>    </author>    <author>      <name>Raphael Grolimund</name>      <email>raphael.grolimund@epfl.ch</email>    </author>    <author>      <name>Michel Hardegger</name>      <email>michel.hardegger@hesge.ch</email>    </author>    <category citation-format="author-date"/>    <category field="generic-base"/>    <updated>2011-11-01T13:00:00+01:00</updated>    <summary>Style based on ISO 690:2010(E), V1</summary>    <rights>This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 License: http://creativecommons.org/licenses/by-sa/3.0/</rights>  </info>  <locale>    <terms>      <term name="anonymous">Anon.</term>      <term name="no date">[no date]</term>      <term name="in">in</term>      <term name="online">online</term>      <term name="accessed">accessed</term>      <term name="retrieved">Available</term>      <term name="from">from</term>      <term name="page" form="short">        <single>p.</single>        <multiple>pp.</multiple>      </term>    </terms>  </locale>  <macro name="author">    <names variable="author">      <name and="text" name-as-sort-order="all" sort-separator=", " delimiter=", " delimiter-precedes-last="never">        <name-part name="family" text-case="uppercase"/>        <name-part name="given"/>      </name>    </names>  </macro>  <macro name="editor">    <names variable="editor">      <name and="text" name-as-sort-order="all" sort-separator=", " delimiter=", " delimiter-precedes-last="never">        <name-part name="family" text-case="uppercase"/>        <name-part name="given"/>      </name>      <label prefix=" (" form="short" suffix=".)"/>    </names>  </macro>  <macro name="translator">    <names variable="translator">      <name and="text" name-as-sort-order="all" sort-separator=", " delimiter=", " delimiter-precedes-last="never">        <name-part name="family" text-case="uppercase"/>        <name-part name="given"/>      </name>      <label prefix=" (" form="short" suffix=".)"/>    </names>  </macro>  <macro name="responsability">    <choose>      <if variable="author editor translator" match="any">        <choose>          <if variable="author">            <text macro="author"/>          </if>          <else-if variable="editor">            <text macro="editor"/>          </else-if>          <else>            <text macro="translator"/>          </else>        </choose>      </if>      <else>        <text term="anonymous" text-case="uppercase"/>      </else>    </choose>  </macro>  <macro name="author-citation">    <choose>      <if variable="author editor translator" match="any">        <names variable="author">          <name form="short"/>          <substitute>            <names variable="editor"/>            <names variable="translator"/>          </substitute>        </names>      </if>      <else>        <text term="anonymous" text-case="uppercase"/>      </else>    </choose>  </macro>  <macro name="container-author">    <names variable="container-author">      <name and="text" name-as-sort-order="all" sort-separator=", " delimiter=", " delimiter-precedes-last="never">        <name-part name="family" text-case="uppercase"/>        <name-part name="given"/>      </name>    </names>  </macro>  <macro name="container-responsability">    <choose>      <if variable="container-author editor translator" match="any">        <choose>          <if variable="container-author">            <text macro="container-author"/>          </if>          <else-if variable="editor">            <text macro="editor"/>          </else-if>          <else>            <text macro="translator"/>          </else>        </choose>      </if>      <else>        <text term="anonymous" text-case="uppercase"/>      </else>    </choose>  </macro>  <macro name="year-date">    <choose>      <if variable="issued">        <date variable="issued">          <date-part name="year" form="long" suffix=""/>        </date>      </if>      <else>        <text term="no date"/>      </else>    </choose>  </macro>  <macro name="title">    <choose>      <if type="book thesis map motion_picture song manuscript" match="any">        <text variable="title" font-style="italic"/>      </if>      <else-if type="paper-conference speech chapter article-journal article-magazine article-newspaper post-weblog post webpage broadcast" match="any">        <text variable="title" suffix=". "/>        <text term="in" text-case="capitalize-first" suffix=": "/>        <choose>          <if variable="container-author editor translator" match="any">            <text macro="container-responsability"/>            <choose>              <if variable="container-title event" match="any">                <text value=", "/>              </if>            </choose>          </if>        </choose>        <choose>          <if variable="container-title">            <text variable="container-title" font-style="italic"/>          </if>          <else>            <text variable="event" font-style="italic"/>          </else>        </choose>      </else-if>      <else-if type="report">        <text variable="number" suffix=": "/>        <text variable="title" font-style="italic"/>      </else-if>      <else-if type="patent">        <text variable="title"/>      </else-if>      <else>        <text variable="title" font-style="italic"/>      </else>    </choose>    <choose>      <if variable="URL">        <text term="online" prefix=" [" suffix="]"/>      </if>    </choose>  </macro>  <macro name="number">    <text variable="number"/>  </macro>  <macro name="medium">    <text variable="medium"/>  </macro>  <macro name="genre">    <choose>      <if type="map">        <choose>          <if variable="genre">            <text variable="genre" prefix="[" suffix="]"/>          </if>          <else>            <text value="map" prefix="[" suffix="]"/>          </else>        </choose>      </if>      <else>        <text variable="genre"/>      </else>    </choose>  </macro>  <macro name="date">    <choose>      <if variable="issued">        <date variable="issued">          <date-part name="day" suffix=" "/>          <date-part name="month" suffix=" "/>          <date-part name="year"/>        </date>      </if>    </choose>  </macro>  <macro name="edition">    <text variable="edition" form="long"/>  </macro>  <macro name="publisher-place">    <choose>      <if type="patent manuscript article-newspaper broadcast motion_picture song" match="any">        <choose>          <if variable="publisher-place">            <text variable="publisher-place"/>          </if>        </choose>      </if>      <else>        <choose>          <if variable="publisher-place">            <text variable="publisher-place"/>          </if>          <else>            <text value="s.l." text-case="capitalize-first"/>          </else>        </choose>      </else>    </choose>  </macro>  <macro name="issue">    <group delimiter=", ">      <text variable="volume" prefix="Vol. "/>      <text variable="issue" prefix="no. "/>      <text variable="page" prefix="pp. "/>    </group>  </macro>  <macro name="publisher">    <choose>      <if type="broadcast motion_picture song report" match="any">        <choose>          <if variable="publisher">            <text variable="publisher"/>          </if>        </choose>      </if>      <else>        <choose>          <if variable="publisher">            <text variable="publisher"/>          </if>          <else>            <text value="s.n."/>          </else>        </choose>      </else>    </choose>  </macro>  <macro name="accessed">    <choose>      <if variable="URL">        <group prefix=" [" suffix="]">          <text term="accessed" text-case="capitalize-first"/>          <date variable="accessed">            <date-part name="day" prefix=" "/>            <date-part name="month" prefix=" "/>            <date-part name="year" prefix=" "/>          </date>        </group>      </if>    </choose>  </macro>  <macro name="collection">    <group delimiter=", ">      <text variable="collection-title"/>      <text variable="collection-number"/>    </group>  </macro>  <macro name="page">    <choose>      <if type="book thesis manuscript" match="any">        <text variable="number-of-pages" suffix=" p"/>      </if>      <else-if type="chapter paper-conference article-newspaper" match="any">        <text variable="page" prefix="pp. "/>      </else-if>      <else-if type="report patent" match="any">        <text variable="page" suffix=" p"/>      </else-if>    </choose>  </macro>  <macro name="isbn">    <text variable="ISBN" prefix="ISBN "/>  </macro>  <macro name="doi">    <text variable="DOI" prefix="DOI "/>  </macro>  <macro name="url">    <choose>      <if variable="URL">        <group>          <text term="retrieved" suffix=" " text-case="capitalize-first"/>          <text term="from" suffix=": "/>          <text variable="URL"/>        </group>      </if>    </choose>  </macro>  <macro name="archive">    <text variable="archive"/>    <choose>      <if variable="archive_location">        <text value=": "/>      </if>    </choose>  </macro>  <macro name="archive_location">    <choose>      <if variable="archive_location">        <text variable="archive_location"/>      </if>      <else>        <text variable="call-number"/>      </else>    </choose>  </macro>  <macro name="abstract">    <text variable="abstract"/>  </macro>  <macro name="note">    <text variable="note"/>  </macro>  <citation disambiguate-add-year-suffix="true" disambiguate-add-names="true" disambiguate-add-givenname="true" collapse="year" year-suffix-delimiter=", " after-collapse-delimiter="; ">    <layout prefix="(" suffix=")" delimiter="; ">      <group delimiter=", ">        <group delimiter=" ">          <text macro="author-citation"/>          <text macro="year-date"/>        </group>        <text variable="locator"/>      </group>    </layout>  </citation>  <bibliography>    <sort>      <key macro="responsability"/>      <key macro="year-date"/>      <key macro="title"/>    </sort>    <layout>      <choose>        <if type="book map" match="any">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="genre" suffix=". "/>            <text macro="edition" suffix=". "/>            <text macro="publisher-place" suffix=": "/>            <text macro="publisher" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="collection" suffix=". "/>            <text macro="isbn" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </if>        <else-if type="article-journal article-magazine" match="any">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="edition" suffix=". "/>            <text macro="date" suffix=". "/>            <text macro="issue" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="doi" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="article-newspaper">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="edition" suffix=". "/>            <text macro="publisher-place" suffix=", "/>            <text macro="date" suffix=". "/>            <text macro="page" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="chapter entry entry-dictionary entry-encyclopedia" match="any">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" font-style="normal" suffix=". "/>            <text macro="edition" suffix=". "/>            <text macro="publisher-place" suffix=": "/>            <text macro="publisher" suffix=". "/>            <text macro="collection" suffix=". "/>            <text macro="page" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="isbn" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="speech">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="genre" suffix=". "/>            <text macro="publisher-place" suffix=". "/>            <text macro="date" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="page" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="paper-conference">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="genre" suffix=". "/>            <text macro="publisher-place" suffix=": "/>            <text macro="publisher" suffix=". "/>            <text macro="date" suffix=". "/>            <text macro="page" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="thesis">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="genre" suffix=". "/>            <text macro="publisher-place" suffix=": "/>            <text macro="publisher" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="post-weblog post webpage" match="any">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="date" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="broadcast motion_picture song" match="any">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="medium" suffix=". "/>            <text macro="publisher-place" suffix=": "/>            <text macro="publisher" suffix=". "/>            <text macro="date" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="collection" suffix=". "/>            <text macro="isbn" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="report">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="genre" suffix=". "/>            <text macro="edition" suffix=". "/>            <text macro="publisher-place" suffix=". "/>            <text macro="publisher" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="collection" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="manuscript">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="genre" suffix=". "/>            <text macro="edition" suffix=". "/>            <text macro="publisher-place" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="collection" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else-if type="patent">          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="number" suffix=". "/>            <text macro="date" suffix=". "/>            <text macro="publisher-place" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="collection" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else-if>        <else>          <group display="block">            <text macro="responsability" suffix=", "/>            <text macro="year-date" suffix=". "/>            <text macro="title" suffix=". "/>            <text macro="medium" suffix=". "/>            <text macro="genre" suffix=". "/>            <text macro="date" suffix=". "/>            <text macro="edition" suffix=". "/>            <text macro="publisher-place" suffix=": "/>            <text macro="publisher" suffix=". "/>            <text macro="accessed" suffix=". "/>            <text macro="collection" suffix=". "/>            <text macro="page" suffix=". "/>            <text macro="isbn" suffix=". "/>            <text macro="url" suffix=". "/>          </group>        </else>      </choose>      <group display="block">        <group display="block">          <text macro="archive"/>          <text macro="archive_location"/>        </group>      </group>      <group display="block">        <text macro="abstract" display="block"/>      </group>      <group display="block">        <text macro="note" display="block"/>      </group>    </layout>  </bibliography></style>'};
return e});
!function(t){"object"==typeof exports?module.exports=t(require("underscore"),require("backbone"),require("citeproc"),require("citeproc/sys")):"function"==typeof define&&define.amd?define('models/metadata/citation',["underscore","backbone","citeproc/citeproc","citeproc/sys","citeproc/csl","writedown","models/metadata/object"],t):"undefined"!=typeof _&&"undefined"!=typeof Backbone&&"undefined"!=typeof CSL&&"undefined"!=typeof Sys&&"undefined"!=typeof MetadataObject&&(window.MetadataCitation=t(_,Backbone,CSL,Sys,citationstyles,Writedown,MetadataObject))}(function(t,i,e,a,n,r,s){var o=s.extend({defaults:{original:{}},initialize:function(i,s,o){var u,d,c,l;i||(i=this.defaults.citation),s||(s=""),o||(o=""),"object"==typeof i&&i instanceof Array&&(i=i[0]),this.attributes.original=i,this.attributes.original.author=s,this.attributes.original.title=o,l=t.clone(this.attributes.original,!0),l.id="citation","year"in this.attributes.original?(l.issued={},l.issued.year=this.attributes.original.year,"month"in this.attributes.original&&(l.issued.month=this.attributes.original.month,"day"in this.attributes.original&&(l.issued.day=this.attributes.original.day))):"date"in this.attributes.original&&(l.issued={"date-parts":t.map(this.attributes.original.date.split("-"),function(t){return parseInt(t)})}),l.title=r.html(l.title),"pages"in this.attributes.original&&(l.page=this.attributes.original.pages),d=new a({"default":{}},{citation:l}),u=new e.Engine(d,n["modern-language-association"]),u.setAbbreviations("default"),u.updateItems(["citation"]),c=u.makeBibliography(),this.attributes.string=c&&c.length&&c[1].length?c[1].join(""):"Error Processing Citation"}});return o});
!function(t){"object"==typeof exports?module.exports=t(require("underscore"),require("backbone"),require("models/metadata/author"),require("models/metadata/title"),require("models/metadata/citation")):"function"==typeof define&&define.amd?define('models/metadata',["underscore","backbone","jsyaml","models/metadata/author","models/metadata/title","models/metadata/citation"],t):"undefined"!=typeof _&&"undefined"!=typeof Backbone&&"undefined"!=typeof jsyaml&&"undefined"!=typeof MetadataAuthor&&"undefined"!=typeof MetadataTitle&&"undefined"!=typeof MetadataCitation&&(window.Metadata=t(_,Backbone,jsyaml,MetadataAuthor,MetadataTitle,MetadataCitation))}(function(t,e,a,i,n,o){var d=e.Model.extend({defaults:{metadata:{}},initialize:function(t){t||(t={}),this.updateMetadata(t)},updateMetadata:function(t){"string"==typeof t&&(t=a.safeLoad(t)),"undefined"==typeof t&&(t={}),"title"in t&&(t.title=new n(t.title)),"author"in t&&(t.author=new i(t.author)),"citation"in t&&(t.citation=new o(t.citation,t.author.raw(),t.title.raw())),this.attributes.metadata=t},toYaml:function(){var e=this.get("metadata"),i={};return t.each(t.keys(e),function(t){var a=e[t];i[t]="undefined"!=typeof a.raw?a.raw():a}),a.safeDump(i)},to_s:function(){var t=this.get("metadata"),e="";return"citation"in t?e=t.citation.to_s().replace(/\&\#60\;(\/{0,1})(em|strong|b|i|img|blockquote|a)(.*?)\&\#62\;/g,"<$1$2$3>"):"title"in t&&"author"in t&&(e=t.title.to_s()+" by "+t.author.to_s()),e},get:function(t){var e=this.attributes[t];return t in this.attributes.metadata&&(e=this.attributes.metadata[t]),e}});return d});
define('models/document',["lodash","backbone","lorem","models/metadata"],function(t,a,e,i){var s=a.Model.extend({urlRoot:"/documents",idAttribute:"id",defaults:{metadata:""},get:function(t){var a=this.attributes[t];if("metadata"==t&&("metadata_json"in this.attributes?a=this.attributes.metadata_json:(a=new i(a),this.attributes.metadata_json=a,this.trigger("change change:metadata"))),"text"==t){var s=new e;s.type=e.TEXT,s.query="4-6p",a=s.createLorem()}return a},set:function(t,e,s){var n;return null==t?this:("object"==typeof t?(n=t,s=e):(n={})[t]=e,"metadata"in n&&(e=n.metadata,"metadata_json"in this.attributes||(this.attributes.metadata_json=new i),this.attributes.metadata_json.updateMetadata(e),this.attributes.metadata=this.attributes.metadata_json.toYaml(),delete n.metadata,this.trigger("change change:metadata")),a.Model.prototype.set.call(this,n,s))},save:function(e,i){return i||(i={}),e||(e=t.clone(this.attributes)),delete e.metadata_json,i.data=JSON.stringify(e),a.Model.prototype.save.apply(this,e,i)},initialize:function(){}});return s});
!function(e){"object"==typeof exports?module.exports=e(require("backbone"),require("models/document")):"function"==typeof define&&define.amd?define('collections/document_collection',["backbone","models/document"],e):"undefined"!=typeof Backbone&&"undefined"!=typeof Document&&(window.DocumentCollection=e(Backbone,Document))}(function(e,n){var o=e.Collection.extend({url:"/documents",model:n,initialize:function(){this.listenTo(this,"update",function(){this.trigger("reset")})}});return o});
define('models/anthology',["lodash","backbone","postal","jsyaml","models/document","collections/document_collection"],function(t,e,n,o,c,s){var u=e.Model.extend({urlRoot:"/anthologies",idAttribute:"id",defaults:{title:"",toc:"[]",documents:[],_has_documents:!1},get:function(e){var o=this.attributes[e];if("documents"===e&&!this.attributes._has_documents){if(o=new s,0==this.attributes.documents.length){var u=JSON.parse(this.attributes.toc);t.each(u,function(){o.push(new c)}),t.each(u,function(t){n.channel("cache").request({topic:"document?"}).then(function(e){"undefined"==typeof e.document?(document=new c({id:t}),document.fetch().then(function(){o.push(document)})):o.push(document)})})}else t.each(this.attributes.documents,function(t){o.push(new c(t))});this.attributes._has_documents=!0,this.attributes.documents=o}return o},set:function(t,n,c){var s;return null==t?this:("object"==typeof t?(s=t,c=n):(s={})[t]=n,"toc"in s&&(this.attributes.toc="String"==typeof s.toc?o.safeLoad(s.toc):s.toc,delete s.toc,this.trigger("change change:toc")),e.Model.prototype.set.call(this,s,c))}});return u});
!function(e){"object"==typeof exports?module.exports=e(require("backbone"),require("models/anthology")):"function"==typeof define&&define.amd?define('collections/anthology_collection',["backbone","models/anthology"],e):"undefined"!=typeof Backbone&&"undefined"!=typeof Anthology&&(window.AnthologyCollection=e(Backbone,Anthology))}(function(e,o){var n=e.Collection.extend({url:"/anthologies",model:o,initialize:function(){this.listenTo(this,"update",function(){this.trigger("reset")})}});return n});
/* ========================================================================
 * Bootstrap: transition.js v3.3.5
 * http://getbootstrap.com/javascript/#transitions
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // CSS TRANSITION SUPPORT (Shoutout: http://www.modernizr.com/)
  // ============================================================

  function transitionEnd() {
    var el = document.createElement('bootstrap')

    var transEndEventNames = {
      WebkitTransition : 'webkitTransitionEnd',
      MozTransition    : 'transitionend',
      OTransition      : 'oTransitionEnd otransitionend',
      transition       : 'transitionend'
    }

    for (var name in transEndEventNames) {
      if (el.style[name] !== undefined) {
        return { end: transEndEventNames[name] }
      }
    }

    return false // explicit for ie8 (  ._.)
  }

  // http://blog.alexmaccaw.com/css-transitions
  $.fn.emulateTransitionEnd = function (duration) {
    var called = false
    var $el = this
    $(this).one('bsTransitionEnd', function () { called = true })
    var callback = function () { if (!called) $($el).trigger($.support.transition.end) }
    setTimeout(callback, duration)
    return this
  }

  $(function () {
    $.support.transition = transitionEnd()

    if (!$.support.transition) return

    $.event.special.bsTransitionEnd = {
      bindType: $.support.transition.end,
      delegateType: $.support.transition.end,
      handle: function (e) {
        if ($(e.target).is(this)) return e.handleObj.handler.apply(this, arguments)
      }
    }
  })

}(jQuery);

define("bootstrap/transition", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.$.fn.transition;
    };
}(this)));

/* ========================================================================
 * Bootstrap: collapse.js v3.3.5
 * http://getbootstrap.com/javascript/#collapse
 * ========================================================================
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * ======================================================================== */


+function ($) {
  'use strict';

  // COLLAPSE PUBLIC CLASS DEFINITION
  // ================================

  var Collapse = function (element, options) {
    this.$element      = $(element)
    this.options       = $.extend({}, Collapse.DEFAULTS, options)
    this.$trigger      = $('[data-toggle="collapse"][href="#' + element.id + '"],' +
                           '[data-toggle="collapse"][data-target="#' + element.id + '"]')
    this.transitioning = null

    if (this.options.parent) {
      this.$parent = this.getParent()
    } else {
      this.addAriaAndCollapsedClass(this.$element, this.$trigger)
    }

    if (this.options.toggle) this.toggle()
  }

  Collapse.VERSION  = '3.3.5'

  Collapse.TRANSITION_DURATION = 350

  Collapse.DEFAULTS = {
    toggle: true
  }

  Collapse.prototype.dimension = function () {
    var hasWidth = this.$element.hasClass('width')
    return hasWidth ? 'width' : 'height'
  }

  Collapse.prototype.show = function () {
    if (this.transitioning || this.$element.hasClass('in')) return

    var activesData
    var actives = this.$parent && this.$parent.children('.panel').children('.in, .collapsing')

    if (actives && actives.length) {
      activesData = actives.data('bs.collapse')
      if (activesData && activesData.transitioning) return
    }

    var startEvent = $.Event('show.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    if (actives && actives.length) {
      Plugin.call(actives, 'hide')
      activesData || actives.data('bs.collapse', null)
    }

    var dimension = this.dimension()

    this.$element
      .removeClass('collapse')
      .addClass('collapsing')[dimension](0)
      .attr('aria-expanded', true)

    this.$trigger
      .removeClass('collapsed')
      .attr('aria-expanded', true)

    this.transitioning = 1

    var complete = function () {
      this.$element
        .removeClass('collapsing')
        .addClass('collapse in')[dimension]('')
      this.transitioning = 0
      this.$element
        .trigger('shown.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    var scrollSize = $.camelCase(['scroll', dimension].join('-'))

    this.$element
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)[dimension](this.$element[0][scrollSize])
  }

  Collapse.prototype.hide = function () {
    if (this.transitioning || !this.$element.hasClass('in')) return

    var startEvent = $.Event('hide.bs.collapse')
    this.$element.trigger(startEvent)
    if (startEvent.isDefaultPrevented()) return

    var dimension = this.dimension()

    this.$element[dimension](this.$element[dimension]())[0].offsetHeight

    this.$element
      .addClass('collapsing')
      .removeClass('collapse in')
      .attr('aria-expanded', false)

    this.$trigger
      .addClass('collapsed')
      .attr('aria-expanded', false)

    this.transitioning = 1

    var complete = function () {
      this.transitioning = 0
      this.$element
        .removeClass('collapsing')
        .addClass('collapse')
        .trigger('hidden.bs.collapse')
    }

    if (!$.support.transition) return complete.call(this)

    this.$element
      [dimension](0)
      .one('bsTransitionEnd', $.proxy(complete, this))
      .emulateTransitionEnd(Collapse.TRANSITION_DURATION)
  }

  Collapse.prototype.toggle = function () {
    this[this.$element.hasClass('in') ? 'hide' : 'show']()
  }

  Collapse.prototype.getParent = function () {
    return $(this.options.parent)
      .find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]')
      .each($.proxy(function (i, element) {
        var $element = $(element)
        this.addAriaAndCollapsedClass(getTargetFromTrigger($element), $element)
      }, this))
      .end()
  }

  Collapse.prototype.addAriaAndCollapsedClass = function ($element, $trigger) {
    var isOpen = $element.hasClass('in')

    $element.attr('aria-expanded', isOpen)
    $trigger
      .toggleClass('collapsed', !isOpen)
      .attr('aria-expanded', isOpen)
  }

  function getTargetFromTrigger($trigger) {
    var href
    var target = $trigger.attr('data-target')
      || (href = $trigger.attr('href')) && href.replace(/.*(?=#[^\s]+$)/, '') // strip for ie7

    return $(target)
  }


  // COLLAPSE PLUGIN DEFINITION
  // ==========================

  function Plugin(option) {
    return this.each(function () {
      var $this   = $(this)
      var data    = $this.data('bs.collapse')
      var options = $.extend({}, Collapse.DEFAULTS, $this.data(), typeof option == 'object' && option)

      if (!data && options.toggle && /show|hide/.test(option)) options.toggle = false
      if (!data) $this.data('bs.collapse', (data = new Collapse(this, options)))
      if (typeof option == 'string') data[option]()
    })
  }

  var old = $.fn.collapse

  $.fn.collapse             = Plugin
  $.fn.collapse.Constructor = Collapse


  // COLLAPSE NO CONFLICT
  // ====================

  $.fn.collapse.noConflict = function () {
    $.fn.collapse = old
    return this
  }


  // COLLAPSE DATA-API
  // =================

  $(document).on('click.bs.collapse.data-api', '[data-toggle="collapse"]', function (e) {
    var $this   = $(this)

    if (!$this.attr('data-target')) e.preventDefault()

    var $target = getTargetFromTrigger($this)
    var data    = $target.data('bs.collapse')
    var option  = data ? 'toggle' : $this.data()

    Plugin.call($target, option)
  })

}(jQuery);

define("bootstrap/collapse", ["jquery"], (function (global) {
    return function () {
        var ret, fn;
        return ret || global.$.fn.collapse;
    };
}(this)));

define('app',["jquery","lodash","backbone","has","router","react","postal","models/anthology","collections/anthology_collection","bootstrap/transition","bootstrap/collapse","postal.request-response"],function(n,o,t,e,c,l,s,r,u){var i=function(){var l=!1,i={};i.routes={"":"documents",documents:"documents","document/:id":"document","anthology/:id":"anthology"},i.protected_routes={anthologies:"anthologies"},i.clearAppCanvas=function(){n("#app").html("")},i.currentAnthology=null,s.channel("cache").subscribe("document?",function(n,o){var t=void 0;"undefined"!=typeof i.documentList&&(t=i.documentList.get(n.id)),o.reply(null,{document:t})}),s.channel("login").subscribe("change",function(n){!n.loginStatus&&o.has(i,"anthologyList")&&(i.anthologyList=null,i.currentAnthology=null),s.channel("component").publish("anthology:logged-out")}),s.channel("component").subscribe("anthology:list",function(n,t){o.has(i,"anthologyList")?t.reply(null,{anthologyList:i.anthologyList}):(i.anthologyList=new u,i.anthologyList.fetch().then(function(){t.reply(null,{anthologyList:i.anthologyList})}))}),s.channel("component").subscribe("anthology:edit",function(n){i.currentAnthology=new r({id:n.id}),i.currentAnthology.fetch().then(function(){s.channel("component").publish("anthology:edit-contents",{anthology:i.currentAnthology})})}),s.channel("component").subscribe("anthology:done-editing",function(){i.currentAnthology=null}),s.channel("component").subscribe("anthology:current-anthology?",function(n,o){o.reply(null,{anthology:i.currentAnthology})}),n(document).ready(function(){i.router=new c({routes:o.merge(i.routes,i.protected_routes),context:i}),o.each(["xs","sm","md","lg"],function(o){e.add("screen-"+o,function(){var t;return t="block"===n('<div class="visible-'+o+'-block"></div>').appendTo("body").css("display"),n("body > .visible-"+o+"-block").remove(),t})}),e.add("screen-xs-up",function(){return!0}),e.add("screen-sm-up",function(){return e("screen-sm")||e("screen-md")||e("screen-lg")}),e.add("screen-md-up",function(){return e("screen-md")||e("screen-lg")}),e.add("screen-lg-up",function(){return e("screen-lg")}),window.development&&l&&require(["postal.diagnostics"],function(n){new n({name:"console",writer:function(n){console.log(n)}})}),t.history.start()})};return{start:i}});
var requirejs_configuration={baseUrl:"assets",paths:{app:"app","collections/anthology_collection":"collections/anthology_collection","collections/document_collection":"collections/document_collection","collections/metadata_collection":"collections/metadata_collection","mixins/login-dependent/LoginDependentMixin":"mixins/login-dependent/LoginDependentMixin","mixins/protected-route/ProtectedRouteMixin":"mixins/protected-route/ProtectedRouteMixin","models/anthology":"models/anthology","models/document":"models/document","models/document_file":"models/document_file","models/metadata/author":"models/metadata/author","models/metadata/citation":"models/metadata/citation","models/metadata/object":"models/metadata/object","models/metadata/title":"models/metadata/title","models/metadata":"models/metadata",polyfill:"polyfill",router:"router","routes/anthologies":"routes/anthologies","routes/anthology":"routes/anthology","routes/document":"routes/document","routes/documents":"routes/documents","routes/generic":"routes/generic","utilities/alert_manager":"utilities/alert_manager","utilities/form_validation":"utilities/form_validation","utilities/google/phonenumberutil.min":"utilities/google/phonenumberutil.min","utilities/login_manager":"utilities/login_manager","vendor/citeproc-amd/citeproc":"vendor/citeproc-amd/citeproc","vendor/citeproc-amd/csl":"vendor/citeproc-amd/csl","vendor/citeproc-amd/locale":"vendor/citeproc-amd/locale","vendor/citeproc-amd/sys":"vendor/citeproc-amd/sys","vendor/citeproc-amd/xmldom":"vendor/citeproc-amd/xmldom","vendor/has/has":"vendor/has/has","vendor/sprintf-amd/sprintf-shim":"vendor/sprintf-amd/sprintf-shim","vendor/writedown/writedown":"vendor/writedown/writedown","views/document_file/document_file_view":"views/document_file/document_file_view","components/anthology/anthologies":"components/anthology/anthologies","components/anthology/anthology":"components/anthology/anthology","components/anthology/current_anthology":"components/anthology/current_anthology","components/document/document":"components/document/document","components/document/documents":"components/document/documents","components/document/short_view":"components/document/short_view","components/login/login_form":"components/login/login_form","components/login/login_link":"components/login/login_link","components/login/login_modal":"components/login/login_modal","components/login/login_page":"components/login/login_page","components/sidebar/routes/anthologies":"components/sidebar/routes/anthologies","components/sidebar/routes/documents":"components/sidebar/routes/documents","components/sidebar/sidebar":"components/sidebar/sidebar","components/utilities/modal":"components/utilities/modal",backbone:"backbone",jquery:"dist/jquery",jsyaml:"dist/js-yaml",lodash:"lodash",lorem:"lorem","sprintf-vendor":"src/sprintf",react:"react-with-addons",postal:"lib/postal","postal.diagnostics":"lib/postal.diagnostics","postal.request-response":"lib/postal.request-response",text:"lib/text",json:"src/json",citeproc:"vendor/citeproc-amd",bootstrap:"assets/javascripts/bootstrap",sprintf:"vendor/sprintf-amd/sprintf-shim",writedown:"vendor/writedown/writedown","jquery-ui":"ui/",has:"vendor/has/has"},shim:{"jquery-ui":{deps:["jquery"],exports:"$"},jst:{exports:"JST"},lorem:{exports:"Lorem"},sprintf:{exports:"sprintf"},"bootstrap/affix":{deps:["jquery"],exports:"$.fn.affix"},"bootstrap/alert":{deps:["jquery"],exports:"$.fn.alert"},"bootstrap/button":{deps:["jquery"],exports:"$.fn.button"},"bootstrap/carousel":{deps:["jquery"],exports:"$.fn.carousel"},"bootstrap/collapse":{deps:["jquery"],exports:"$.fn.collapse"},"bootstrap/dropdown":{deps:["jquery"],exports:"$.fn.dropdown"},"bootstrap/modal":{deps:["jquery"],exports:"$.fn.modal"},"bootstrap/popover":{deps:["jquery"],exports:"$.fn.popover"},"bootstrap/scrollspy":{deps:["jquery"],exports:"$.fn.scrollspy"},"bootstrap/tab":{deps:["jquery"],exports:"$.fn.tab"},"bootstrap/tooltip":{deps:["jquery"],exports:"$.fn.tooltip"},"bootstrap/transition":{deps:["jquery"],exports:"$.fn.transition"}},map:{"*":{underscore:"lodash"}}};requirejs.config(requirejs_configuration);var manifest=window.development?"":"json!/assets/manifest.json";require(["app",manifest],function(e,a){window.manifest=window.development?void 0:a,e.start()});
define("main", function(){});

/**
 * @license RequireJS text 2.0.5 Copyright (c) 2010-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/requirejs/text for details
 */
define('text',["module"],function(e){"use strict";var n,r,t=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],i=/^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im,o=/<body[^>]*>\s*([\s\S]+)\s*<\/body>/im,a="undefined"!=typeof location&&location.href,s=a&&location.protocol&&location.protocol.replace(/\:/,""),u=a&&location.hostname,f=a&&(location.port||void 0),c=[],d=e.config&&e.config()||{};return n={version:"2.0.5",strip:function(e){if(e){e=e.replace(i,"");var n=e.match(o);n&&(e=n[1])}else e="";return e},jsEscape:function(e){return e.replace(/(['\\])/g,"\\$1").replace(/[\f]/g,"\\f").replace(/[\b]/g,"\\b").replace(/[\n]/g,"\\n").replace(/[\t]/g,"\\t").replace(/[\r]/g,"\\r").replace(/[\u2028]/g,"\\u2028").replace(/[\u2029]/g,"\\u2029")},createXhr:d.createXhr||function(){var e,n,r;if("undefined"!=typeof XMLHttpRequest)return new XMLHttpRequest;if("undefined"!=typeof ActiveXObject)for(n=0;3>n;n+=1){r=t[n];try{e=new ActiveXObject(r)}catch(i){}if(e){t=[r];break}}return e},parseName:function(e){var n,r,t,i=!1,o=e.indexOf("."),a=0===e.indexOf("./")||0===e.indexOf("../");return-1!==o&&(!a||o>1)?(n=e.substring(0,o),r=e.substring(o+1,e.length)):n=e,t=r||n,o=t.indexOf("!"),-1!==o&&(i="strip"===t.substring(o+1),t=t.substring(0,o),r?r=t:n=t),{moduleName:n,ext:r,strip:i}},xdRegExp:/^((\w+)\:)?\/\/([^\/\\]+)/,useXhr:function(e,r,t,i){var o,a,s,u=n.xdRegExp.exec(e);return u?(o=u[2],a=u[3],a=a.split(":"),s=a[1],a=a[0],!(o&&o!==r||a&&a.toLowerCase()!==t.toLowerCase()||(s||a)&&s!==i)):!0},finishLoad:function(e,r,t,i){t=r?n.strip(t):t,d.isBuild&&(c[e]=t),i(t)},load:function(e,r,t,i){if(i.isBuild&&!i.inlineText)return void t();d.isBuild=i.isBuild;var o=n.parseName(e),c=o.moduleName+(o.ext?"."+o.ext:""),l=r.toUrl(c),p=d.useXhr||n.useXhr;!a||p(l,s,u,f)?n.get(l,function(r){n.finishLoad(e,o.strip,r,t)},function(e){t.error&&t.error(e)})://!strip part to avoid file system issues.
r([c],function(e){n.finishLoad(o.moduleName+"."+o.ext,o.strip,e,t)})},write:function(e,r,t){if(c.hasOwnProperty(r)){var i=n.jsEscape(c[r]);t.asModule(e+"!"+r,"define(function () { return '"+i+"';});\n")}},writeFile:function(e,r,t,i,o){var a=n.parseName(r),s=a.ext?"."+a.ext:"",u=a.moduleName+s,f=t.toUrl(a.moduleName+s)+".js";n.load(u,t,function(){var r=function(e){return i(f,e)};r.asModule=function(e,n){return i.asModule(e,f,n)},n.write(e,u,r,o)},o)}},"node"===d.env||!d.env&&"undefined"!=typeof process&&process.versions&&process.versions.node?(r=require.nodeRequire("fs"),n.get=function(e,n){var t=r.readFileSync(e,"utf8");0===t.indexOf("\ufeff")&&(t=t.substring(1)),n(t)}):"xhr"===d.env||!d.env&&n.createXhr()?n.get=function(e,r,t,i){var o,a=n.createXhr();if(a.open("GET",e,!0),i)for(o in i)i.hasOwnProperty(o)&&a.setRequestHeader(o.toLowerCase(),i[o]);d.onXhr&&d.onXhr(a,e),a.onreadystatechange=function(){var n,i;4===a.readyState&&(n=a.status,n>399&&600>n?(i=new Error(e+" HTTP status: "+n),i.xhr=a,t(i)):r(a.responseText))},a.send(null)}:("rhino"===d.env||!d.env&&"undefined"!=typeof Packages&&"undefined"!=typeof java)&&(n.get=function(e,n){var r,t,i="utf-8",o=new java.io.File(e),a=java.lang.System.getProperty("line.separator"),s=new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),i)),u="";try{for(r=new java.lang.StringBuffer,t=s.readLine(),t&&t.length()&&65279===t.charAt(0)&&(t=t.substring(1)),r.append(t);null!==(t=s.readLine());)r.append(a),r.append(t);u=String(r.toString())}finally{s.close()}n(u)}),n});
define('json',["text"],function(text){function cacheBust(n){return n=n.replace(CACHE_BUST_FLAG,""),n+=n.indexOf("?")<0?"?":"&",n+CACHE_BUST_QUERY_PARAM+"="+Math.round(2147483647*Math.random())}var CACHE_BUST_QUERY_PARAM="bust",CACHE_BUST_FLAG="!bust",jsonParse="undefined"!=typeof JSON&&"function"==typeof JSON.parse?JSON.parse:function(val){return eval("("+val+")")},buildMap={};return{load:function(n,e,t,i){i.isBuild&&(i.inlineJSON===!1||-1!==n.indexOf(CACHE_BUST_QUERY_PARAM+"="))||0===e.toUrl(n).indexOf("empty:")?t(null):text.get(e.toUrl(n),function(e){i.isBuild?(buildMap[n]=e,t(e)):t(jsonParse(e))},t.error,{accept:"application/json"})},normalize:function(n,e){return-1!==n.indexOf(CACHE_BUST_FLAG)&&(n=cacheBust(n)),e(n)},write:function(n,e,t){if(e in buildMap){var i=buildMap[e];t('define("'+n+"!"+e+'", function(){ return '+i+";});\n")}}}});
