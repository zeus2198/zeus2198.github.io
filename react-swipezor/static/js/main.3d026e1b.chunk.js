(this.webpackJsonpdemo=this.webpackJsonpdemo||[]).push([[0],{26:function(e,t,n){e.exports=n(65)},31:function(e,t,n){},33:function(e,t,n){},5:function(e,t,n){e.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=8)}([function(e,t){e.exports=n(0)},function(e,t,n){e.exports=n(3)()},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n,r,a,o=e[1]||"",c=e[3];if(!c)return o;if(t&&"function"==typeof btoa){var i=(n=c,r=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),"/*# ".concat(a," */")),l=c.sources.map((function(e){return"/*# sourceURL=".concat(c.sourceRoot||"").concat(e," */")}));return[o].concat(l).concat([i]).join("\n")}return[o].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var a={};if(r)for(var o=0;o<this.length;o++){var c=this[o][0];null!=c&&(a[c]=!0)}for(var i=0;i<e.length;i++){var l=[].concat(e[i]);r&&a[l[0]]||(n&&(l[2]?l[2]="".concat(n," and ").concat(l[2]):l[2]=n),t.push(l))}},t}},function(e,t,n){"use strict";var r=n(4);function a(){}function o(){}o.resetWarningCache=a,e.exports=function(){function e(e,t,n,a,o,c){if(c!==r){var i=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw i.name="Invariant Violation",i}}function t(){return e}e.isRequired=e;var n={array:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:o,resetWarningCache:a};return n.PropTypes=n,n}},function(e,t,n){"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(e,t,n){var r=n(6),a=n(7);"string"==typeof(a=a.__esModule?a.default:a)&&(a=[[e.i,a,""]]);r(a,{insert:"head",singleton:!1}),e.exports=a.locals||{}},function(e,t,n){"use strict";var r,a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),o=[];function c(e){for(var t=-1,n=0;n<o.length;n++)if(o[n].identifier===e){t=n;break}return t}function i(e,t){for(var n={},r=[],a=0;a<e.length;a++){var i=e[a],l=t.base?i[0]+t.base:i[0],s=n[l]||0,u="".concat(l," ").concat(s);n[l]=s+1;var p=c(u),m={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(o[p].references++,o[p].updater(m)):o.push({identifier:u,updater:v(m,t),references:1}),r.push(u)}return r}function l(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var c=a(e.insert||"head");if(!c)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");c.appendChild(t)}return t}var s,u=(s=[],function(e,t){return s[e]=t,s.filter(Boolean).join("\n")});function p(e,t,n,r){var a=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=u(t,a);else{var o=document.createTextNode(a),c=e.childNodes;c[t]&&e.removeChild(c[t]),c.length?e.insertBefore(o,c[t]):e.appendChild(o)}}function m(e,t,n){var r=n.css,a=n.media,o=n.sourceMap;if(a?e.setAttribute("media",a):e.removeAttribute("media"),o&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(o))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var f=null,d=0;function v(e,t){var n,r,a;if(t.singleton){var o=d++;n=f||(f=l(t)),r=p.bind(null,n,o,!1),a=p.bind(null,n,o,!0)}else n=l(t),r=m.bind(null,n,t),a=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else a()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=(void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r));var n=i(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var a=c(n[r]);o[a].references--}for(var l=i(e,t),s=0;s<n.length;s++){var u=c(n[s]);0===o[u].references&&(o[u].updater(),o.splice(u,1))}n=l}}}},function(e,t,n){"use strict";n.r(t);var r=n(2),a=n.n(r)()(!1);a.push([e.i,".swipezor-but * {\r\n  box-sizing: border-box;\r\n}\r\n.swipezor-but {\r\n  border: 2px solid #444;\r\n  min-width: 200px;\r\n  padding: 11px;\r\n  position: relative;\r\n  overflow: hidden;\r\n  color: #000;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  cursor: default;\r\n  user-select: none;\r\n  /* box-sizing: border-box; */\r\n}\r\n.swipezor-but * {\r\n  pointer-events: none;\r\n  user-select: none;\r\n}\r\n.swipezor-but .swipezor-overlay {\r\n  position: absolute;\r\n  left: 0;\r\n  top: 0;\r\n  z-index: 1;\r\n  height: 100%;\r\n  width: 2rem;\r\n  background: #444;\r\n  transition: width 0.2s ease-out;\r\n  will-change: width;\r\n  overflow: hidden;\r\n  pointer-events: none;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n}\r\n.swipezor-but .swipezor-overlay .swipezor-overlay-wrapper {\r\n  position: relative;\r\n  height: 100%;\r\n  width: 100%;\r\n}\r\n.swipezor-but .swipezor-overlay .swipezor-caret-wrapper {  \r\n  position: absolute;\r\n  max-width: 45px;\r\n  width: 40px;\r\n  min-width: 0;\r\n  right: 0;\r\n  top: 50%;\r\n  height: 100%;\r\n  transform: translateY(-50%);\r\n  background: #444;\r\n  z-index: 2;\r\n  display: flex;\r\n  align-items: center;\r\n  padding: 10px;\r\n  justify-content: center;\r\n}\r\n.swipezor-but .swipezor-overlay .swipezor-overlay-txt {\r\n  position: absolute;\r\n  width: 100%;\r\n  left: 0;\r\n  top: 0;\r\n  height: 100%;\r\n  color: #fff;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  white-space: nowrap;\r\n}\r\n",""]),t.default=a},function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),c=n.n(o);function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var l={preventDefaultTouchmoveEvent:!1,delta:10,rotationAngle:0,trackMouse:!1,trackTouch:!0},s={xy:[0,0],swiping:!1,eventData:void 0,start:void 0};function u(e,t){if(0===t)return e;var n=Math.PI/180*t;return[e[0]*Math.cos(n)+e[1]*Math.sin(n),e[1]*Math.cos(n)-e[0]*Math.sin(n)]}function p(e,t){var n=function(t){t.touches&&t.touches.length>1||e((function(e,n){n.trackMouse&&(document.addEventListener("mousemove",r),document.addEventListener("mouseup",c));var a=t.touches?t.touches[0]:t,o=u([a.clientX,a.clientY],n.rotationAngle);return i({},e,s,{eventData:{initial:[].concat(o),first:!0},xy:o,start:t.timeStamp||0})}))},r=function(t){e((function(e,n){if(!e.xy[0]||!e.xy[1]||t.touches&&t.touches.length>1)return e;var r=t.touches?t.touches[0]:t,a=u([r.clientX,r.clientY],n.rotationAngle),o=a[0],c=a[1],l=e.xy[0]-o,s=e.xy[1]-c,p=Math.abs(l),m=Math.abs(s),f=(t.timeStamp||0)-e.start,d=Math.sqrt(p*p+m*m)/(f||1);if(p<n.delta&&m<n.delta&&!e.swiping)return e;var v=function(e,t,n,r){return e>t?n>0?"Left":"Right":r>0?"Up":"Down"}(p,m,l,s),h=i({},e.eventData,{event:t,absX:p,absY:m,deltaX:l,deltaY:s,velocity:d,dir:v});n.onSwiping&&n.onSwiping(h);var y=!1;return(n.onSwiping||n.onSwiped||n["onSwiped"+v])&&(y=!0),y&&n.preventDefaultTouchmoveEvent&&n.trackTouch&&t.cancelable&&t.preventDefault(),i({},e,{eventData:i({},h,{first:!1}),swiping:!0})}))},a=function(t){e((function(e,n){var r;return e.swiping&&(r=i({},e.eventData,{event:t}),n.onSwiped&&n.onSwiped(r),n["onSwiped"+r.dir]&&n["onSwiped"+r.dir](r)),i({},e,s,{eventData:r})}))},o=function(){document.removeEventListener("mousemove",r),document.removeEventListener("mouseup",c)},c=function(e){o(),a(e)},l=function(e){if(e&&e.addEventListener){var t=[["touchstart",n],["touchmove",r],["touchend",a]];return t.forEach((function(t){var n=t[0],r=t[1];return e.addEventListener(n,r)})),function(){return t.forEach((function(t){var n=t[0],r=t[1];return e.removeEventListener(n,r)}))}}},p={ref:function(t){null!==t&&e((function(e,n){if(e.el===t)return e;var r={};return e.el&&e.el!==t&&e.cleanUpTouch&&(e.cleanUpTouch(),r.cleanUpTouch=null),n.trackTouch&&t&&(r.cleanUpTouch=l(t)),i({},e,{el:t},r)}))}};return t.trackMouse&&(p.onMouseDown=n),[p,l]}function m(e,t,n){var r={};return!t.trackTouch&&e.cleanUpTouch?(e.cleanUpTouch(),r.cleanUpTouch=null):t.trackTouch&&!e.cleanUpTouch&&e.el&&(r.cleanUpTouch=n(e.el)),i({},e,r)}var f=function(e){var t,n;function r(t){var n;return(n=e.call(this,t)||this)._set=function(e){n.transientState=e(n.transientState,n.props)},n.transientState=i({},s,{type:"class"}),n}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.className,n=e.style,r=e.nodeName,o=void 0===r?"div":r,c=e.innerRef,l=e.children,s=e.trackMouse,u=p(this._set,{trackMouse:s}),f=u[0],d=u[1];this.transientState=m(this.transientState,this.props,d);var v=c?function(e){return c(e),f.ref(e)}:f.ref;return a.a.createElement(o,i({},f,{className:t,style:n,ref:v}),l)},r}(a.a.PureComponent);function d(){return(d=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,a=!1,o=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){a=!0,o=e}finally{try{r||null==i.return||i.return()}finally{if(a)throw o}}return n}}(e,t)||function(e,t){if(e){if("string"==typeof e)return h(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?h(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function y(e){return e.getBoundingClientRect().left+window.scrollX}f.propTypes={onSwiped:c.a.func,onSwiping:c.a.func,onSwipedUp:c.a.func,onSwipedRight:c.a.func,onSwipedDown:c.a.func,onSwipedLeft:c.a.func,delta:c.a.number,preventDefaultTouchmoveEvent:c.a.bool,nodeName:c.a.string,trackMouse:c.a.bool,trackTouch:c.a.bool,innerRef:c.a.func,rotationAngle:c.a.number},f.defaultProps=l,n(5),t.default=function(e){var t=e.mainText,n=e.overlayText,o=e.onSwipeDone,c=e.reset,u=e.classList,f=void 0===u?"":u,h=e.overlayClassList,b=void 0===h?"":h,w=e.caretClassList,g=void 0===w?"":w,E=e.delta,A=void 0===E?10:E,S=e.minSwipeWidth,x=void 0===S?.6:S,M=e.minSwipeVelocity,N=void 0===M?.6:M,T=e.caret,I=void 0===T?null:T,j=v(Object(r.useState)(40),2),C=j[0],z=j[1],O=v(Object(r.useState)(!1),2),D=O[0],R=O[1],k=Object(r.useRef)();Object(r.useEffect)((function(){c&&(R(!1),z(40))}),[c]);var L=function(e){var t=e.trackMouse,n=a.a.useRef(i({},s,{type:"hook"})),r=a.a.useRef();r.current=i({},l,e);var o=a.a.useMemo((function(){return p((function(e){return n.current=e(n.current,r.current)}),{trackMouse:t})}),[t]),c=o[0],u=o[1];return n.current=m(n.current,r.current,u),c}({onSwipedRight:function(e){if(!D){var t=k.current.offsetWidth;if(e.velocity>N)z(t),R(!0),setTimeout((function(){return o()}),100);else{var n=y(k.current);Math.abs(e.initial[0]-n)<=100&&("touchend"===e.event.type?e.event.changedTouches[0].clientX-n:e.event.offsetX)>x*t?(z(t),R(!0),setTimeout((function(){return o()}),100)):z(40)}}},onSwiping:function(e){if(!D){var t=y(k.current);Math.abs(e.initial[0]-t)<=100&&(e.event.type&&"touchmove"===e.event.type?z(e.event.touches[0].clientX-t):z(e.event.offsetX))}},delta:A,trackMouse:!0,preventDefaultTouchmoveEvent:!0,innerRef:function(e){return console.log("AAAAA",e)}});return a.a.createElement("div",d({className:"swipezor-but ".concat(f)},L,{ref:function(e){L.ref(e),k.current=e}}),a.a.createElement("div",{className:"swipezor-overlay ".concat(b),style:{width:C}},a.a.createElement("div",{className:"swipezor-overlay-wrapper"},a.a.createElement("div",{className:"swipezor-caret-wrapper ".concat(g)},I||a.a.createElement("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAACXBIWXMAAA/XAAAP1wHWM14/AAAF7GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIwLTA2LTE4VDE1OjA5OjI1KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMC0wOS0xMlQxMzo0MzozNCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMC0wOS0xMlQxMzo0MzozNCswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4NGI0NDc4Zi1mZGEzLWQyNDAtYjAwYi1iYjBhN2ExMmRjM2YiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZmMyOWVhZjMtNGFkMC0yZjRiLThjNGUtNzAwNmJhNmY2MDFmIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZmMyOWVhZjMtNGFkMC0yZjRiLThjNGUtNzAwNmJhNmY2MDFmIj4gPHhtcE1NOkhpc3Rvcnk+IDxyZGY6U2VxPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0iY3JlYXRlZCIgc3RFdnQ6aW5zdGFuY2VJRD0ieG1wLmlpZDpmYzI5ZWFmMy00YWQwLTJmNGItOGM0ZS03MDA2YmE2ZjYwMWYiIHN0RXZ0OndoZW49IjIwMjAtMDYtMThUMTU6MDk6MjUrMDU6MzAiIHN0RXZ0OnNvZnR3YXJlQWdlbnQ9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIvPiA8cmRmOmxpIHN0RXZ0OmFjdGlvbj0ic2F2ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6ODRiNDQ3OGYtZmRhMy1kMjQwLWIwMGItYmIwYTdhMTJkYzNmIiBzdEV2dDp3aGVuPSIyMDIwLTA5LTEyVDEzOjQzOjM0KzA1OjMwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHN0RXZ0OmNoYW5nZWQ9Ii8iLz4gPC9yZGY6U2VxPiA8L3htcE1NOkhpc3Rvcnk+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+zQS2rgAAAg9JREFUeNrtm71OAkEUhamUGBo7O9Te17CQxkIbnUZ9Dq0EG+19Aan1KfQBjAZLqIVEJRYWn41EJGZ/Zu7unZ2dm0yy0Jx7vmRh98ydBtCo82pEABFABBABRAB/1zpwAnSBU2AXaJXY1Lz+WdH6i19sA7fAG781BK6BjRLMJ+lvFg3gkuT6AvYKNK+iP7vokb0OCzDfzaFvpAFskb8kIdjoG0kAfexKCsKNpb6RAjDCviQgDB30jQSAKW7lAqEFfDrqG1cAE9zLFsKSkL5xAXCPTNlCkNI3tgCOkCsbCJL6BsvngIEyhIEWhNnFGvCqCEFa32DxKNxWhtDWgFB0E95DKKMJryEkvZPXAkJaMBE8hCzpjGQTB75ByBpRBQshT04XJIS8YaVkEzsWYamkfscmFpduYlVb3za2lmqip6x/4ZLdjwUaeHLQl4Dw7BInNYFHxwY+gBVL/WUB/fcqA2hqAvDhFhhr3QJS4pX8EZQ0X7m/QWnznSo9CEmbN8rmcz0KB2s+6+twsOazBCJBm0+LxII3T8KMkKZ51VC0VuYXAdTOPAtbY5rm1bfGXhTNq2+OHiubV98ef1A078WAxETRvBcjMlMtcTwZkhppiePJmFxf0bwXg5Kqo6p4MCqrOqz8s8619Oc/XKUI+zAuvy+t+9+BhTtKPLCARwcmfDwyU7h+PDQVAUQAEUAEUOf1DWnacUliejyLAAAAAElFTkSuQmCC",alt:"caret",style:{maxWidth:"100%"}})),a.a.createElement("div",{className:"swipezor-overlay-txt"},n))),t)}}])},65:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(1),c=n.n(o),i=(n(31),n(25)),l=n(5),s=n.n(l),u=n(69),p=n(22),m=n(24),f=n(2),d=n(3);n(32),n(33);u.a.registerLanguage("jsx",p.a),u.a.registerLanguage("css",m.a);var v=function(){var e=a.a.useState(0),t=Object(i.a)(e,2),n=t[0],r=t[1];return a.a.createElement("div",{className:"App"},a.a.createElement(d.a,{autoClose:3e3,pauseOnHover:!1,position:"bottom-center"}),a.a.createElement("a",{href:"https://github.com/zeus2198/react-swipezor",className:"github-corner","aria-label":"View source on GitHub"},a.a.createElement("svg",{width:"80",height:"80",viewBox:"0 0 250 250",style:{fill:"#151513",color:"#fff",position:"fixed",top:0,border:0,right:0},"aria-hidden":"true"},a.a.createElement("path",{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}),a.a.createElement("path",{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor",style:{transformOrigin:"130px 106px"},class:"octo-arm"}),a.a.createElement("path",{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor",class:"octo-body"}))),a.a.createElement("div",{className:"wrapper"},a.a.createElement("center",null,a.a.createElement("h1",{style:{fontFamily:"monospace"}},"react-swipezor")),a.a.createElement("div",{className:"content-wrapper"},a.a.createElement("div",{className:"col heading centered"},"basic usage"),a.a.createElement("div",{className:"col centered"},a.a.createElement("div",{className:"button-wrapper"},a.a.createElement(s.a,{mainText:"Swipe me",overlayText:"S I K E",reset:n,onSwipeDone:function(){Object(d.b)("Done!",{type:"info"}),console.log("Done!")}}),a.a.createElement("br",null),a.a.createElement("center",null,a.a.createElement("button",{onClick:function(){return r((function(e){return e+1}))}},"Reset")))),a.a.createElement("div",{className:"col"},a.a.createElement(u.a,{language:"jsx",style:f.a},'import SwipeButton from \'react-swipezor\';\n\nconst [reset, setReset] = useState(0);\n\n<SwipeButton \n  mainText="Swipe me" \n  overlayText="S I K E" \n  onSwipeDone={function () {\n    console.log("Done!");\n  }} \n  reset={reset}\n/>\n\n<button onClick={() => {\n  setReset(counter => counter + 1)\n}}\n>\n  Reset\n</button>\n')),a.a.createElement("div",{className:"col heading centered"},"custom colors"),a.a.createElement("div",{className:"col centered"},a.a.createElement("div",{className:"button-wrapper"},a.a.createElement(s.a,{mainText:"Swipe me",reset:n,overlayText:"S I K E",classList:"my-class",caretClassList:"my-caret-class",overlayClassList:"my-overlay-class",onSwipeDone:function(){Object(d.b)("Done!",{type:"info"}),console.log("Done!")}}),a.a.createElement("br",null),a.a.createElement("center",null,a.a.createElement("button",{onClick:function(){return r((function(e){return e+1}))}},"Reset")))),a.a.createElement("div",{className:"col"},a.a.createElement(u.a,{language:"css",style:f.a},".my-class {\n  border-color:red !important;\n}\n.my-caret-class {\n  background:dodgerblue !important;\n}\n.my-overlay-class {\n  background:green !important;\n}"),a.a.createElement(u.a,{language:"jsx",style:f.a},'<SwipeButton \n  mainText="Swipe me" \n  overlayText="S I K E"\n  classList="my-class"\n  caretClassList="my-caret-class"\n  overlayClassList="my-overlay-class"\n  onSwipeDone={function () {\n    console.log("Done!");\n  }} \n/>')),a.a.createElement("div",{className:"col heading centered"},"size"),a.a.createElement("div",{className:"col centered"},a.a.createElement("div",{style:{width:"200px"}},a.a.createElement(s.a,{mainText:"Swipe me",overlayText:"S I K E",reset:n,onSwipeDone:function(){Object(d.b)("Done!",{type:"info"}),console.log("Done!")}}),a.a.createElement("br",null),a.a.createElement("center",null,a.a.createElement("button",{onClick:function(){return r((function(e){return e+1}))}},"Reset")))),a.a.createElement("div",{className:"col"},a.a.createElement(u.a,{language:"jsx",style:f.a},"<div style={{width:'200px'}}>\n  <SwipeButton \n  ...\n  />\n</div>")),a.a.createElement("div",{className:"col heading centered"},"custom elements as text"),a.a.createElement("div",{className:"col centered"},a.a.createElement("div",{className:"button-wrapper"},a.a.createElement(s.a,{mainText:a.a.createElement("span",null,"Sw",a.a.createElement("b",{style:{color:"red",fontSize:"19px"}},"ipe")," me"),overlayText:a.a.createElement("span",null,"S I ",a.a.createElement("b",{style:{color:"cyan",fontSize:"19px"}},"K E")),reset:n,onSwipeDone:function(){Object(d.b)("Done!",{type:"info"}),console.log("Done!")}}),a.a.createElement("br",null),a.a.createElement("center",null,a.a.createElement("button",{onClick:function(){return r((function(e){return e+1}))}},"Reset")))),a.a.createElement("div",{className:"col"},a.a.createElement(u.a,{language:"jsx",style:f.a},"<SwipeButton \n  mainText={<span>Sw<b style={{ color: 'red', fontSize: '19px' }}>ipe</b> me</span>}\n  overlayText={<span>S I <b style={{ color: 'cyan', fontSize: '19px' }}>K E</b></span>}\n  ...\n/>")),a.a.createElement("div",{className:"col heading centered"},"custom caret"),a.a.createElement("div",{className:"col centered"},a.a.createElement("div",{className:"button-wrapper"},a.a.createElement(s.a,{mainText:"Swipe me",overlayText:"S I K E",reset:n,caret:a.a.createElement("img",{src:"./caret.png"}),onSwipeDone:function(){Object(d.b)("Done!",{type:"info"}),console.log("Done!")}}),a.a.createElement("br",null),a.a.createElement("center",null,a.a.createElement("button",{onClick:function(){return r((function(e){return e+1}))}},"Reset")))),a.a.createElement("div",{className:"col"},a.a.createElement(u.a,{language:"jsx",style:f.a},'<SwipeButton\n  caret={<img src="./caret.png" />}\n  ...\n/>')))))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(v,null)),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.3d026e1b.chunk.js.map