KISSY.add("gallery/kcharts/1.1/dashboard/dashboard-ticks",function(d){function h(){h.superclass.constructor.apply(this,arguments);this.init()}d.extend(h,d.Base,{init:function(){var k=this.get("cfg"),q,g,f,c,a=k.r1||100,e=k.r2||105,b=k.R||110,l,m;q=this.get("dashboard");var h=this.get("paper"),t=q.get("cx"),u=q.get("cy"),n,r,p=[];n="";f=k.start||0;c=k.end||2*Math.PI;q=k.n||60;g=k.m;f-=Math.PI;c-=Math.PI;c=(c-f)/q;for(var s=0;s<=q;s+=1)g&&0==s%g||(n=f+s*c,l=Math.cos(n),m=Math.sin(n),n=t+e*l,r=u+e*m,
l=t+b*l,m=u+b*m,p.push("M",n,r,"L",l,m));n=p.join(",");e=h.path(n);p={};d.mix(p,k.thinStyle,!0,["stroke-width","stroke"]);e.attr(p);if(g){e=[];for(p=0;p<=q;p+=g)n=f+p*c,l=Math.cos(n),m=Math.sin(n),n=t+a*l,r=u+a*m,l=t+b*l,m=u+b*m,e.push("M",n,r,"L",l,m);n=e.join(",");a=h.path(n);b={"stroke-width":2};d.mix(b,k.thickStyle,!0,["stroke-width","stroke"]);a.attr(b)}}});return h});
KISSY.add("gallery/kcharts/1.1/dashboard/index",function(d,h,k,q,g){function f(){f.superclass.constructor.apply(this,arguments);var a=this.get("renderTo");d.isString(a)&&(a=d.get(a));var e=this.get("width"),b=this.get("height");this.paper=c(a,e,b);this.init()}var c=h;f.ATTRS={width:{value:400},height:{value:400},cx:{value:0},cy:{value:0}};d.extend(f,d.Base,{init:function(){var a=this.get("cx")||this.get("width")/2,e=this.get("cy")||this.get("width")/2;this.set("cx",a);this.set("cy",e);this.bindEvent();
var b,a=this.get("ticks"),e=this.get("pointer");b=this.get("background");d.isObject(b)?this.drawBg(b):d.isFunction(b)&&b.call(this);d.isObject(e)?this.drawPointer(e):d.isFunction(e)&&e.call(this);d.isObject(a)?this.drawTicks(a):d.isFunction(a)&&(this.ticks=a.call(this))},bindEvent:function(){},drawBg:function(a){a.src?this.drawPictureBg(a):this.drawVectorBg(a)},drawPointer:function(a){a.src?this.drawPicturePointer(a):this.drawVectorPointer(a)},drawVectorBg:function(){},drawPictureBg:function(a){var e=
a.src,b=this.paper,l=this.get("cx"),c=this.get("cy");a=b.image(e,l-a.cx,c-a.cy,a.width,a.height);this.set("background",a);this.background=a},drawPicturePointer:function(a){var e,b,c,d;e=this.get("cx");b=this.get("cy");c=a.cx;d=a.cy;var f=this.paper;a=f.image(a.src,e-c,b-d,a.width,a.height);c=new q({pointer:a,dashboard:this,paper:f,cx:c,cy:d});this.set("pointer",c);this.pointer=c},drawVectorPointer:function(a){this.get("vectorPointer");this.pointer=new k({dashboard:this,paper:this.paper})},drawTicks:function(a){this.ticks=
new g({dashboard:this,paper:this.paper,cfg:a})},pointTo:function(a,c){this.pointer&&this.pointer.pointTo(a,c)}});return f},{requires:["../raphael/index","./pointer","./pointer-pic","./dashboard-ticks"]});
KISSY.add("gallery/kcharts/1.1/dashboard/pointer-pic",function(d,h){function k(){k.superclass.constructor.apply(this,arguments);var d=this.get("pointer");this.get("paper");var g=this.get("dashboard"),f=this.get("cy"),c=this.get("cx"),a=g.get("cx"),g=g.get("cy");this.pointer=d;this.cx=f;this.cy=c;this.paperCx=a;this.paperCy=g}d.extend(k,h,{pointTo:function(d,g){var f=["r",d,this.paperCx,this.paperCy].join();g?this.pointer.animate({transform:f},g.ms,g.easing,g.callback):this.pointer.transform(f);return this}});
return k},{requires:["./pointer"]});
KISSY.add("gallery/kcharts/1.1/dashboard/pointer",function(d){function h(){h.superclass.constructor.apply(this,arguments)}d.extend(h,d.Base,{pointTo:function(k,h){var g=this.get("paper"),f=this,c=this.get("dashboard"),a=c.get("cx"),e=c.get("cy"),b=c.get("pointer")||{},l=a+(b.cx||0),m=e+(b.cy||0);c.get("width");c.get("height");c={a:function(a){var c=["r",k-90,l,m].join();if(!f.pointer){var b=a.r||5,e=a.R||80,r,p=Math.asin(b/e);a=d.mix({fill:"#000",stroke:"#000"},a,!0,["stroke","stroke-width","fill"]);
r=m-e;p=b*Math.cos(p);b=g.path(["M",l,r,"L",l+p,m-b*b/e,"A",b,b,0,1,1,l-p,m-b*b/e,"Z"].join());b.attr(a);f.pointer=b}k&&f.pointer.animate({transform:c},h.ms,h.easing,h.callback)},b:function(){}};(c=b.theme&&b.theme.name&&c[b.theme.name]||c.a)&&c(b.theme)}});return h});