!function(e){var t={};function n(r){if(t[r])return t[r].exports;var u=t[r]={i:r,l:!1,exports:{}};return e[r].call(u.exports,u,u.exports,n),u.l=!0,u.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:r})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){"use strict";n.r(t);var r=(e,t)=>e+t,u=(e,t)=>e-t,d=(e,t)=>e*t,l=(e,t)=>0===t?"Cannot divide by zero":e/t;n(5);function m(e,t){return""===e||""===t?"Please fill all fields":!!function(e,t){return!isNaN(e)&&!isNaN(t)}(e,t)||"Please enter numbers"}function a(e){document.getElementById("result")&&(n=document.getElementById("result")).parentNode.removeChild(n);const t=document.getElementById("root");var n;(n=document.createElement("div")).setAttribute("id","result");var r=document.createElement("h2");r.innerText="Result";var u=document.createElement("div");u.className="number"!=typeof e?"message message-error":"message message-success",u.innerText=e,n.appendChild(r),n.appendChild(u),t.appendChild(n)}(()=>{const e=document.getElementById("root");var t=document.createElement("h1");t.innerText="Calculator";var n=document.createElement("div");n.setAttribute("id","numbers");var r=document.createElement("input");r.setAttribute("type","text"),r.setAttribute("id","number1"),r.setAttribute("name","number1"),r.setAttribute("placeholder","Enter 1 number");var u=document.createElement("input");u.setAttribute("type","text"),u.setAttribute("id","number2"),u.setAttribute("name","number2"),u.setAttribute("placeholder","Enter 2 number"),n.appendChild(r),n.appendChild(u);var d=document.createElement("div");d.setAttribute("id","buttons");var l=document.createElement("button");l.innerText="+",l.setAttribute("id","add");var m=document.createElement("button");m.innerText="-",m.setAttribute("id","subtract");var a=document.createElement("button");a.innerText="×",a.setAttribute("id","multiply");var i=document.createElement("button");i.innerText="÷",i.setAttribute("id","divide"),d.appendChild(l),d.appendChild(m),d.appendChild(a),d.appendChild(i),e.appendChild(t),e.appendChild(n),e.appendChild(d)})(),document.getElementById("add").addEventListener("click",()=>{var e=document.getElementById("number1").value,t=document.getElementById("number2").value,n=m(e,t);return a(!0!==n?n:r(+e,+t))}),document.getElementById("subtract").addEventListener("click",()=>{var e=document.getElementById("number1").value,t=document.getElementById("number2").value,n=m(e,t);return a(!0!==n?n:u(+e,+t))}),document.getElementById("subtract").addEventListener("click",()=>{var e=document.getElementById("number1").value,t=document.getElementById("number2").value,n=m(e,t);return a(!0!==n?n:u(+e,+t))}),document.getElementById("multiply").addEventListener("click",()=>{var e=document.getElementById("number1").value,t=document.getElementById("number2").value,n=m(e,t);return a(!0!==n?n:d(+e,+t))}),document.getElementById("divide").addEventListener("click",()=>{var e=document.getElementById("number1").value,t=document.getElementById("number2").value,n=m(e,t);return a(!0!==n?n:l(+e,+t))})},5:function(e,t){}});