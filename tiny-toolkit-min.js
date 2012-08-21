/** toolkit.js = see non-min version for header **/ (function(a,b,c){var d=function(a){var b=new XMLHttpRequest;b.open("GET",a,false);b.send(null);return b.responseText.replace(/>[\s\r\n]+</g,"><")};var e=function(a){return function(b){return b!==a&&b!==null}}();var f={};var g=function(a,b,c){if(!f[b]){f[b]=d(b+".tpl.html")}var e=f[b],g;for(prop in c){if(Object.hasOwnProperty(c,prop))continue;g=c[prop];e=e.replace(new RegExp("{{"+prop+"}}","g"),g)}return e};var h=function(a){if(!e(a))return;var c=function(a,b,c){if(!e(a[b])){a[b]=c}};c(a,"find",function(b){return j(a,b)});c(a,"template",function(b,c){var d=g(a,b,c);a.html(d);return a});c(a,"css",function(c,d){if(typeof c==="object"){for(p in c){if(Object.hasOwnProperty(c,p))continue;a.css(p,c[p])}return a}if(e(d)){a.style[c]=d;return a}return b.defaultView.getComputedStyle(a,null).getPropertyValue(c)||a.style[c]});c(a,"position",function(){return a.getBoundingClientRect()});c(a,"classes",function(){return{add:function(b){a.classList.add(b);return a},remove:function(b){a.classList.remove(b);return a},toggle:function(b){a.classList.toggle(b);return a}}});c(a,"show",function(b,c){a.style.display=b?c?c:"block":"none";return a});c(a,"toggle",function(){a.show(a.style.display==="none");return a});c(a,"html",function(b){if(e(b)){a.innerHTML=b;return a}return a.innerHTML});c(a,"parent",function(){return h(a.parentNode)});c(a,"add",function(){for(var b=0,c=arguments.length;b<c;b++){if(e(arguments[b])){a.appendChild(arguments[b])}}return a});c(a,"remove",function(b){if(!b){a.parentNode.removeChild(a);return}if(parseInt(b)==b){a.removeChild(a.children[b])}else{a.removeChild(b)}return a});c(a,"clear",function(){while(a.children.length>0){a.remove(a.get(0))}return a});c(a,"get",function(b){if(b==parseInt(b)){return h(a.children[b])}return a.getAttribute(b)});c(a,"set",function(b,c){if(!c){for(prop in b){if(!Object.hasOwnProperty(b,prop)){a.setAttribute(prop,b[prop])}}}else{a.setAttribute(b,c)}return a});c(a,"listenOnce",function(b,c,d){var e=function(){a.removeEventListener(b,e,d|false);c.call(arguments)};a.addEventListener(b,e,d|false);return a});c(a,"listen",function(b,c,d){a.addEventListener(b,c,d|false);return a});return a};var i=function(a){a["css"]=function(b,c){for(var d=0,e=a.length;d<e;d++){a[d].css(b,c)}return a};a["show"]=function(b,c){for(var d=0,e=a.length;d<e;d++){a[d].show(b,c)}return a};a["toggle"]=function(){for(var b=0,c=a.length;b<c;b++){a[b].toggle()}return a};a["remove"]=function(){for(var b=0,c=a.length;b<c;b++){a[b].remove()}return[]};a["listen"]=function(){for(var b=0,c=a.length;b<c;b++){a[b]["listen"].apply(null,arguments)}return a};a["listenOnce"]=function(){for(var b=0,c=a.length;b<c;b++){a[b]["listenOnce"].apply(null,arguments)}return a};a.foreach=function(b){for(var c=0,d=a.length;c<d;c++){b(a[c])}return a};a["classes"]=function(){if(!a.__classes){a.__classes={add:function(b){for(var c=0,d=a.length;c<d;c++){a[c].classes().add(b)}return a},remove:function(b){for(var c=0,d=a.length;c<d;c++){a[c].classes().remove(b)}return a}}}return a.__classes};return a};var j=function(a,b){var c=a.querySelectorAll(b),d=[];if(c.length==0)return;if(c.length==1){return h(c[0])}for(var e=0,f=c.length;e<f;e++){d[e]=h(c[e])}return i(d)};h(b).listenOnce("DOMContentLoaded",function(){h(c)});a["extend"]=h;a["create"]=function(a){return h(b.createElement(a))};a["find"]=function(a){return j(b,a)};a["template"]=function(a,b){return h(create("div").template(a,b).children[0])}})(window,document,document.body)