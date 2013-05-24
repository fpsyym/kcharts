KISSY.add("gallery/kcharts/1.0/barchart/index",function(d,o,r,p,l,e){var c=d.all,n=d.Event,b=window,m="ks-chart-",k=m+"default",f=k+"-canvas",a=m+"evtlayout",q=a+"-areas",g=a+"-bars",i="{COLOR}",j;var h=function(s){this.init(s)};d.extend(h,o,{init:function(s){var t=this;o.prototype.init.call(t,s);var v={themeCls:k,autoRender:true,colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:true},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:true},xLabels:{isShow:true,css:{}},yLabels:{isShow:true,css:{}},xAxis:{isShow:true,css:{color:"#eee"}},yAxis:{isShow:true,css:{},num:5},xGrids:{isShow:true,css:{}},yGrids:{isShow:true,css:{}},areas:{isShow:true,css:{}},bars:{isShow:true,css:{}},tip:{isShow:true,template:"",css:{},anim:{easing:"easeOut",duration:0.3},offset:{x:0,y:0},boundryDetect:true,alignX:"right",alignY:"bottom"}};t._bars={};t._finished=[];t._cfg=d.mix(v,t._cfg,e,e,true);k=t._cfg.themeCls;t.color=j=new r();if(t._cfg.colors.length>0){j.removeAllColors()}for(var u in t._cfg.colors){j.setColor(t._cfg.colors[u])}t._cfg.autoRender&&t.render(true)},drawTitle:function(){var v=this,x=v.paper,t=k+"-title",u=v._cfg,s=v._innerContainer,w=s.y*0.6;if(!v._title&&u.title.isShow&&u.title.content!=""){v._title=x.rect(0,0,v._$ctnNode.width(),w).addClass(t).css(d.mix({"line-height":w+"px"},u.title.css))}if(v._title&&u.title.content!=""){v._title.html(u.title.content)}},drawSubTitle:function(){var v=this,x=v.paper,t=k+"-subtitle",u=v._cfg,s=v._innerContainer,w=s.y*0.4;if(!v._subTitle&&u.subTitle.isShow&&u.subTitle.content!=""){v._subTitle=x.rect(0,s.y*0.6,v._$ctnNode.width(),w).addClass(t).css(d.mix({"line-height":w+"px"},u.subTitle.css))}if(v._subTitle&&u.subTitle.content!=""){v._subTitle.html(u.subTitle.content)}},drawBar:function(E,C,F,v,z,G){var I=this,s=I.paper,H=f+"-bars",u=I._innerContainer,D=I._cfg,B,E=Math.round(E),C=Math.round(C),F=Math.round(F),v=Math.round(v);if(D.anim){var t=D.anim.duration?(d.isNumber(D.anim.duration)?D.anim.duration:0.5):0.5,A=D.anim.easing?D.anim.easing:"easeOut";B=s.rect(E,u.bl.y,F,0).attr({posx:E,posy:C}).addClass(H).css(d.mix(I._cfg.bars.css,z)).animate({height:v,marginTop:C-u.y},t,A,function(){G&&G()})}else{B=s.rect(E,C,F,v).attr({posx:E,posy:C}).addClass(H).css(d.mix(I._cfg.bars.css,z))}return B},getBarsPos:function(){var F=this,A=o.prototype.obj2Array(F._barPoints).length,x=0.6,z=0.5,D=(F._pointsX[1].x-F._pointsX[0].x),B=D*x,H=B/(A+(A-1)/((1-z)/z)),E=H*(1-z)/z,t=H+E,s=F._innerContainer.bl.y,v=(D*(1-x)-D)/2;F._barsPos={};for(var w in F._points){var G=[];for(var u in F._points[w]){var C={},y=Math.abs(s-F._points[w][u].y);C.x=v+F._points[w][u].x;C.y=F._points[w][u].y;C.width=H;C.height=y;G.push(C)}v+=t;F._barsPos[w]=G}},drawBars:function(z){var t=this;for(var v in t._barsPos){var s=[],y=[];for(var u in t._barsPos[v]){var x=t._barsPos[v][u];y[u]=x;s[u]=t.drawBar(x.x,x.y,x.width,x.height,{background:j.getColor(v).DEFAULT},function(){t._finished.push(true);if(z&&t._finished.length==t._cfg.series.length){z()}}).attr({barGroup:v,barIndex:u,defaultColor:j.getColor(v).DEFAULT,hoverColor:j.getColor(v).HOVER})}var w={bars:s,posInfos:y,color:j.getColor(v)};t._bars[v]=w}return t._bars},drawGridsX:function(){var t=this,w=t._centerPoints;for(var v=0,s=w.length;v<s;v++){var u=t.drawGridX(w[v]);t._gridsX.push(u)}return t._gridsX},drawGridX:function(s,v){var u=this,z=u._innerContainer.tl.y,w=u._innerContainer.height,v=v||u._cfg.xAxis.css,x=u.htmlPaper,t=u._cfg.themeCls+"-gridsx";return x.lineY(s.x,z,w).addClass(t).css(u._cfg.xGrids.css)},drawGridY:function(s,x){var v=this,u=v._innerContainer.width,x=x||v._cfg.yGrids.css,y=v.htmlPaper,t=v._cfg.themeCls+"-gridsy";return y.lineX(s.x,s.y,u).addClass(t).css(x)},drawGridsY:function(){var u=this,t=u._innerContainer.tl.x,w=u._pointsY;for(var v=0,s=w.length;v<s;v++){u._gridsY[v]={0:u.drawGridY({x:t,y:w[v].y}),num:u.coordNum[v]}}},drawAreas:function(){var F=this,C,B=F._innerContainer.tl.y,E=F._points[0],D=E[1].x-E[0].x,v=F._innerContainer.height,t=F.htmlPaper,G=F._cfg.themeCls+"-areas",z=F._cfg.areas.css;for(var u=0,A=E.length;u<A;u++){var s=t.rect(E[u].x-D/2,B,D,v).addClass(G).css(z);F._areas.push(s)}},drawAxisX:function(){var v=this,u=v._innerContainer,y=u.bl,t=u.width,x=v.htmlPaper,s=v._cfg.themeCls+"-axisx";v._axisX=x.lineX(y.x,y.y,t).addClass(s).css(v._cfg.xAxis.css||{});return v._axisX},drawAxisY:function(){var v=this,t=v._innerContainer,u=t.tl,w=t.height,x=v.htmlPaper,s=v._cfg.themeCls+"-axisy";v._axisY=x.lineY(u.x,u.y,w).addClass(s).css(v._cfg.yAxis.css||{});return v._axisY},drawLabelsX:function(){var s=this,u=s._cfg.xAxis.text;for(var t in u){s.drawLabelX(t,u[t])}},drawLabelsY:function(){var s=this;for(var t in s._pointsY){s._labelY[t]={0:s.drawLabelY(t,s._pointsY[t].number),num:s._pointsY[t].number}}},drawLabelX:function(w,y){var u=this,x=u.htmlPaper,z=u._pointsX,s=z.length||0,v,t=u._cfg.themeCls+"-xlabels";if(w<s){v=z[w];v[0]=x.text(v.x,v.y,"<span class="+t+">"+y+"</span>","center").css(u._cfg.xLabels.css);return v[0]}},drawLabelY:function(u,w){var t=this,v=t.htmlPaper,s=t._cfg.themeCls+"-ylabels";return v.text(t._pointsY[u].x,t._pointsY[u].y,"<span class="+s+">"+w+"</span>","right","middle").css(t._cfg.yLabels.css)},renderTip:function(){var v=this,u=v._cfg,s=v._innerContainer,w=u.tip.boundryDetect?{x:s.tl.x,y:s.tl.y,width:s.width,height:s.height}:{},t=d.mix(u.tip,{rootNode:v._$ctnNode,clsName:u.themeCls,boundry:w});v.tip=new l(t);return v.tip},renderEvtLayout:function(){var J=this,F,z=J._innerContainer,E=z.tl.y,I=J._points[0],G=J._points[0]&&J._points[0][1]?I[1].x-I[0].x:J._areas[0].width(),B=z.height,K=J._multiple,u=J._evtEls._areas=[],s=J._evtEls._bars=[],t=J._evtEls.paper=new p(J._$ctnNode,{clsName:a,prependTo:false,width:z.width,height:B,left:z.tl.x,top:z.tl.y});for(var A=0,C=I&&I.length;A<C;A++){u[A]=t.rect(I[A].x-G/2,z.tl.y,G,B).addClass(q)}for(var A in J._barsPos){var H=[];for(var v in J._barsPos[A]){var D=J._barsPos[A][v];H[v]=t.rect(D.x,D.y,D.width,D.height).addClass(g).attr({barGroup:A,barIndex:v})}J._evtEls._bars.push(H)}return t},clearEvtLayout:function(){var s=this;if(s._evtEls._areas){for(var u in s._evtEls._areas){s._evtEls._areas[u].remove()}}if(s._evtEls._bars){for(var u in s._evtEls._bars){for(var t in s._evtEls._bars[u]){s._evtEls._bars[u][t].remove()}}}},render:function(t){var v=this,u=v._cfg,s=v._innerContainer,w=u.themeCls;t&&v._$ctnNode.html("");v.paper=new p(v._$ctnNode,{clsName:f,width:s.width,height:s.height,left:s.tl.x,top:s.tl.y});v._barPoints=v._points;v.getBarsPos();v.htmlPaper=new p(v._$ctnNode,{clsName:w});v.drawTitle();v.drawSubTitle();v.renderEvtLayout();u.tip.isShow&&v.renderTip();u.areas.isShow&&v.drawAreas();u.xGrids.isShow&&v.drawGridsX();u.yGrids.isShow&&v.drawGridsY();u.xAxis.isShow&&v.drawAxisX();u.yAxis.isShow&&v.drawAxisY();u.xLabels.isShow&&v.drawLabelsX();u.yLabels.isShow&&v.drawLabelsY();v.drawBars(function(){d.log("finished");v.afterRender()});v.bindEvt();d.log(v)},bindEvt:function(){var t=this,s=t._cfg;n.detach(c("."+g,t._$ctnNode),"mouseenter");n.on(c("."+g,t._$ctnNode),"mouseenter",function(x){var u=c(x.currentTarget),v=u.attr("barIndex"),w=u.attr("barGroup");s.tip.isShow&&t.tipHandler(w,v);t.barChange(w,v)});n.detach(c("."+g,t._$ctnNode),"mouseleave");n.on(c("."+g,t._$ctnNode),"mouseleave",function(y){var u=c(y.currentTarget),v=u.attr("barIndex"),x=u.attr("barGroup"),w=t._bars[x]["bars"][v];w.css({background:w.attr("defaultColor")})});n.detach(t._evtEls.paper.$paper,"mouseleave");n.on(t._evtEls.paper.$paper,"mouseleave",function(u){t.tip&&t.tip.hide();t.paperLeave()})},paperLeave:function(){var s=this;s.fire("paperLeave",s)},barChange:function(w,u){var t=this,s=t._bars[w],v=d.mix({target:s.bars[u],currentTarget:s.bars[u],barGroup:Math.round(w),barIndex:Math.round(u)},t._points[w][u]);t.fire("barChange",v)},tipHandler:function(w,u){var t=this,s=t._cfg,v=t.tip,x=v.getInstance();dataInfo=t._points[w][u]["dataInfo"]||{},$bar=t._bars[w]["bars"][u],defaultColor=$bar.attr("defaultColor");$bar.css({background:$bar.attr("hoverColor")});v.renderTemplate(t._cfg.tip.template,dataInfo);x.css(t.processAttr(s.tip.css,defaultColor));if(v.isVisable()){v.animateTo($bar.attr("posx"),$bar.attr("posy"))}else{v.moveTo($bar.attr("posx"),$bar.attr("posy"))}},animateGridsAndLabels:function(){var s=this;for(var t in s._labelY){s._labelY[t][0].remove();s._gridsY[t][0].remove()}s.drawGridsY();s.drawLabelsY()},processAttr:function(t,s){var v=d.clone(t);for(var u in v){if(v[u]&&typeof v[u]=="string"){v[u]=v[u].replace(i,s)}}return v},showBar:function(w){var u=this,s=u._innerContainer;o.prototype.recoveryData.call(u,w);u._barPoints[w]=u._points[w];u.animateGridsAndLabels();u.getBarsPos();d.log(u._barsPos);for(var x in u._bars){if(x!=w){for(var v in u._bars[x]["bars"]){if(u._barsPos[x]){var y=u._barsPos[x][v];y&&u._bars[x]["bars"][v].animate({height:y.height,width:y.width,marginTop:y.y-s.y,marginLeft:y.x-s.x},0.4,u._cfg.anim.easing,function(){});u._bars[x]["bars"][v].attr({posx:y.x,posy:y.y})}}}}var z=[],t=[];for(var v in u._barsPos[w]){var y=u._barsPos[w][v];z[v]=y;t[v]=u.drawBar(y.x,y.y,y.width,y.height,{background:j.getColor(w).DEFAULT}).attr({barGroup:w,barIndex:v,defaultColor:j.getColor(w).DEFAULT,hoverColor:j.getColor(w).HOVER})}u._bars[w]={bars:t,posInfos:z,color:j.getColor(x)};u.clearEvtLayout();u.renderEvtLayout();u.bindEvt();d.log(u)},hideBar:function(v){var t=this,s=t._innerContainer;o.prototype.removeData.call(t,v);delete t._barPoints[v];t.animateGridsAndLabels();t.getBarsPos();for(var w in t._bars[v]["bars"]){t._bars[v]["bars"][w].remove()}for(var w in t._bars){if(w!=v){for(var u in t._bars[w]["bars"]){var x=t._barsPos[w]?t._barsPos[w][u]:"";x&&t._bars[w]["bars"][u].animate({height:x.height,width:x.width,marginTop:x.y-s.y,marginLeft:x.x-s.x},0.4,t._cfg.anim.easing,function(){});t._bars[w]["bars"][u].attr({posx:x.x,posy:x.y})}}}t.clearEvtLayout();t.renderEvtLayout();t.bindEvt();d.log(t)},afterRender:function(){var s=this;s.fire("afterRender",s)},getPaper:function(){return this.paper},clear:function(){return this.paper.clear()}});return h},{requires:["../basechart/index","../tools/color/index","../tools/htmlpaper/index","../tip/index","./assets/kcharts-ui-core.css"]});