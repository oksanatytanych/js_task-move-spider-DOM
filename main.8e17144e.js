parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";document.addEventListener("click",function(t){var e=document.querySelector(".spider"),n=document.querySelector(".wall");if(n.contains(t.target)){var i=e.getBoundingClientRect().width/2,c=e.getBoundingClientRect().height/2,l=t.clientX-n.offsetLeft-n.clientLeft-i,o=t.clientY-n.offsetTop-n.clientTop-c;l<0&&(l=0),l>n.clientWidth-2*i&&(l=n.clientWidth-2*i),o<0&&(o=0),o>n.clientHeight-2*c&&(o=n.clientHeight-2*c),e.setAttribute("style","transform: translate3d(".concat(l,"px, ").concat(o,"px, 0);"))}});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.8e17144e.js.map