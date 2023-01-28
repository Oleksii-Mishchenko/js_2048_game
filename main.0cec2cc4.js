parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function n(n){if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(n=t(n))){var r=0,e=function(){};return{s:e,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:e}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i,u=!0,a=!1;return{s:function(){o=n[Symbol.iterator]()},n:function(){var n=o.next();return u=n.done,n},e:function(n){a=!0,i=n},f:function(){try{u||null==o.return||o.return()}finally{if(a)throw i}}}}function t(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}var e=document.querySelectorAll(".field-row"),o=document.querySelector(".controls"),i=document.querySelector(".game-score"),u=document.querySelector(".start"),a=document.querySelector(".message-start"),c=document.querySelector(".message-win"),s=document.querySelector(".message-lose");o.insertAdjacentHTML("beforeend",'\n  <button class="button restart hidden">Restart</button>\n');var f=document.querySelector(".restart"),l={isRunning:!1,isWon:!1,isLost:!1,score:0,rowsQty:e.length,colsQty:e[0].children.length,matrix:[]},m={moveRight:function(n){n.forEach(function(n){n.forEach(function(t,r){0===t&&(n.splice(r,1),n.unshift(0))});for(var t=n.length-1;t>=0;t--)if(n[t]>0&&n[t]===n[t-1]){var r=2*n[t];n.splice(t-1,2,r),n.unshift(0),l.score+=r}})},moveLeft:function(n){n.forEach(function(n){for(var t=n.length-1;t>=0;t--)0===n[t]&&(n.splice(t,1),n.push(0));for(var r=0;r<n.length;r++)if(n[r]>0&&n[r]===n[r+1]){var e=2*n[r];n.splice(r,2,e),n.push(0),l.score+=e}})},moveUp:function(n){var t=p(n);this.moveLeft(t);var r=p(t);l.matrix=r},moveDown:function(n){var t=p(n);this.moveRight(t);var r=p(t);l.matrix=r}},v={moveLeft:function(n){for(var t=0;t<n.length;t++)for(var r=n[t],e=0;e<r.length;e++){if(0!==r[e]&&r[e]===r[e+1])return!0;var o=!1;if(0===r[e])o=r.slice(e).some(function(n){return n>0});if(o)return!0}return!1},moveRight:function(n){for(var t=0;t<n.length;t++)for(var r=n[t],e=r.length;e>=0;e--){if(0!==r[e]&&r[e]===r[e-1])return!0;var o=!1;if(0===r[e])o=r.slice(0,e).some(function(n){return n>0});if(o)return!0}return!1},moveUp:function(n){var t=p(n);return this.moveLeft(t)},moveDown:function(n){var t=p(n);return this.moveRight(t)}};function h(){for(var n=[],t=0;t<l.rowsQty;t++){n.push([]);for(var r=0;r<l.colsQty;r++)n[t][r]=0}l.matrix=n}function d(){for(var n=function(n){l.matrix[n].forEach(function(t,r){var o=e[n].children[r];o.className="field-cell",o.textContent="",0!==t&&(o.classList.add("field-cell--"+t),o.textContent=t)})},t=0;t<l.matrix.length;t++)n(t);i.textContent=l.score}function g(){for(var n=Math.random()>.1?2:4;;){var t=Math.floor(4*Math.random()),r=Math.floor(4*Math.random());if(0===l.matrix[t][r]){l.matrix[t][r]=n;break}}}function y(n,t){n.classList.toggle("hidden",t)}function p(n){for(var t=[],r=0;r<n.length;r++){t.push([]);for(var e=0;e<n[r].length;e++)t[r].push(n[e][r])}return t}function R(t){var r,e=n(t);try{for(e.s();!(r=e.n()).done;){if(r.value.some(function(n){return 2048===n}))return!0}}catch(o){e.e(o)}finally{e.f()}return!1}function x(){l.isWon=!0,l.isRunning=!1,y(c,!l.isWon),y(f,!l.isRunning),y(u,l.isRunning)}function L(n){return![v.moveLeft(n),v.moveRight(n),v.moveUp(n),v.moveDown(n)].some(function(n){return!0===n})}function b(){l.isRunning=!1,l.isLost=!0,y(s,!l.isLost)}u.addEventListener("click",function(){l.isRunning=!0,l.isWon=!1,l.score=0,y(u,l.isRunning),y(f,!l.isRunning),y(a,l.isRunning),y(c,l.isRunning),h(),g(),g(),d()}),f.addEventListener("click",function(){l.isRunning=!0,l.isLost=!1,l.score=0,y(s,!l.isLost),h(),g(),g(),d()}),document.addEventListener("keydown",function(n){var t=n.key;if(t.startsWith("Arrow")&&l.isRunning){n.preventDefault();var r=t.replace("Arrow","move");v[r](l.matrix)&&(m[r](l.matrix),g(),d(),R(l.matrix)&&x(),L(l.matrix)&&b())}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.0cec2cc4.js.map