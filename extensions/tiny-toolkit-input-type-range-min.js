(function(a){if(!a["Toolkit"])return;var b=function(b){var c=create("div");if(b.id)c.id=b.id;if(b.get("class"))c.set("class",b.get("class"));if(b.get("style"))c.set("style",b.get("style"));var d={type:"range",min:b.min||"0",max:b.max||"100",step:b.step||"1",value:b.value||"0"};c.set(d);c.classes().add("tiny-toolkit-input-type-range");var e=create("span").classes().add("tiny-toolkit-input-type-range-slider");var f=false;var g=function(a,b,c){var d=c.clientX,e=a.position().left,f=a.position().right-b.position().width;if(e<=d&&d<=f){d-=e;var g=parseFloat(a.get("min")),h=parseFloat(a.get("max")),i=d/(f-e),j=""+(g+i*(h-g));b.css("left",parseInt(1e3*(j-g)/(h-g))/10+"%");a.set("value",j);if(a.onchange){a.onchange({value:j})}}};if(b.onchange){c.onchange=b.onchange}c.add(e);c.listen("mousemove",function(a){if(f){g(c,e,a)}});c.listen("click",function(a){g(c,e,a)});e.onselectstart=function(){return false};e.onmousedown=function(){return false};e.listen("mousedown",function(a){f=true});a.document.listen("mouseup",function(a){f=false});if(d.value!=="0"){var h=parseFloat(d.min),i=parseFloat(d.max),j=parseFloat(d.value);e.css("left",100*(j-h)/(i-h)+"%")}return c};var c=function(a){var c=a["set"];a["set"]=function(d,e){if(d!=="type"||e!=="range"){return c(d,e)}var f=a.parent();if(f){f.replace(a,b(a))}}};var d=function(a){if(a.nodeName.toLowerCase==="input"){c(a);if(a.get("type")==="range"){return a.set("type","range")}}else{e(a)}return a};var e=function(c){var d=c||a;d.find("input[type=range]").foreach(function(a){if(a.parent()){a.parent().replace(a,b(a))}})};a["Toolkit"].addUpdate(function(a){return d(a)});document.listenOnce("DOMContentLoaded",e)}(window));