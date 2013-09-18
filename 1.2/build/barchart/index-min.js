/*! kcharts - v1.2 - 2013-09-18 11:39:26 AM
* Copyright (c) 2013 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.2/barchart/theme",function(){var e={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return e}),KISSY.add("gallery/kcharts/1.2/barchart/index",function(e,t,r,a,i,n,s,o,c){var l,d=e.all,f=e.Event,h="ks-chart-",p=h+"default",_=p+"-canvas",g=h+"evtlayout",u=g+"-bars",b="{COLOR}",x=function(e){var t=this;t._cfg=e,t.init()};return e.extend(x,r,{init:function(){var t=this;if(t.chartType="barchart",r.prototype.init.call(t,t._cfg),t._$ctnNode[0]){var i={themeCls:p,autoRender:!0,colors:[],stackable:!1,title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{color:"#eee",zIndex:10},min:0},yAxis:{isShow:!0,css:{zIndex:10},num:5,min:0},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!0,css:{}},bars:{isShow:!0,css:{background:b,border:"1px solid #fff"},barsRatio:.6,barRatio:.5},legend:{isShow:!1},tip:{isShow:!0,template:"",css:{},anim:{easing:"easeOut",duration:.3},offset:{x:0,y:0},boundryDetect:!0,alignX:"right",alignY:"bottom"}};t._bars={},t._finished=[],p=t._cfg.themeCls||i.themeCls,t._cfg=e.mix(e.mix(i,s[p],o,o,!0),t._cfg,o,o,!0),t.color=l=new a({themeCls:p}),t._cfg.colors.length>0&&l.removeAllColors();for(var n in t._cfg.colors)l.setColor(t._cfg.colors[n]);t._cfg.autoRender&&t.render(!0)}},drawTitle:function(){var t=this,r=t.htmlPaper,a=p+"-title",i=t._cfg,n=t._innerContainer,s=.6*n.y;i.title.isShow&&""!=i.title.content&&(t._title=r.rect(0,0,t._$ctnNode.width(),s).addClass(a).css(e.mix({"line-height":s+"px"},i.title.css)).html(i.title.content))},drawSubTitle:function(){var t=this,r=t.htmlPaper,a=p+"-subtitle",i=t._cfg,n=t._innerContainer,s=.4*n.y;i.subTitle.isShow&&""!=i.subTitle.content&&(t._subTitle=r.rect(0,.6*n.y,t._$ctnNode.width(),s).addClass(a).css(e.mix({"line-height":s+"px"},i.subTitle.css)).html(i.subTitle.content))},drawBar:function(t,a,i){var n,s=this,o=s._cfg,c=s.paper,l=_+"-bars",d=s._innerContainer,f=s.color.getColor(t).DEFAULT,h=s.processAttr(o.bars.css,f),p="x"==o.zoomType?!1:!0,g=s._barsPos[t][a],u=(g.x-0).toFixed(2),b=(g.y-0).toFixed(2),x=(g.width-0).toFixed(2),m=(g.height-0).toFixed(2);if(o.anim){var v=o.anim.duration?e.isNumber(o.anim.duration)?o.anim.duration:.5:.5,w=o.anim.easing?o.anim.easing:"easeOut";if(p){var y=r.prototype.data2GrapicData.call(s,0,!0,!1);n=c.rect(y,b,0,m).attr({posx:u,posy:b}).addClass(l).css(h).animate({width:x,marginLeft:u-d.x},v,w,function(){i&&i()})}else{var C=r.prototype.data2GrapicData.call(s,0,!1,!0);n=c.rect(u,C,x,0).attr({posx:u,posy:b}).addClass(l).css(h).animate({height:m,marginTop:b-d.y},v,w,function(){i&&i()})}}else n=c.rect(u,b,x,m).attr({posx:u,posy:b}).addClass(l).css(h),i&&i();return n},getBarsPos:function(){var e=this,t=e._cfg.zoomType,a=e._cfg.stackable,i=e._innerContainer,n="y"==t,s=a?1:r.prototype.obj2Array(e._clonePoints).length,o=e._cfg.bars.barsRatio,c=e._cfg.bars.barRatio,l=n?e._pointsY.length>1?e._pointsY[1].y-e._pointsY[0].y:i.height:e._pointsX.length>1?e._pointsX[1].x-e._pointsX[0].x:i.width,d=l*o,f=c>=1?0:(1-c)/c,h=d/(s+(s-1)*f),p=h*(1-c)/c,_=a?0:h+p,g=(e._innerContainer.bl.y,e._innerContainer.bl.x),u=(l*(1-o)-l)/2,b=[];e._barsPos={};for(var x in e._points){var m=[];if(n){var v=r.prototype.data2GrapicData.call(e,0,!0,!1);for(var w in e._points[x]){var y={},C=e._points[x][w].x,L=Math.abs(C-v);y.y=u+e._points[x][w].y,a?(y.x=g+(b[w]||0),b[w]=b[w]?b[w]+L:L):y.x=C>v?C-L:v-L,y.width=L,y.height=h,m.push(y)}}else{var A=r.prototype.data2GrapicData.call(e,0,!1,!0);for(var w in e._points[x]){var y={},Y=e._points[x][w].y,X=Math.abs(A-Y);y.x=u+e._points[x][w].x,a?(y.y=Y-(b[w]||0),b[w]=b[w]?b[w]+X:X):y.y=Y>A?A:Y,y.width=h,y.height=X,m.push(y)}}u+=_,e._barsPos[x]=m}},drawBars:function(e){var t=this;t._cfg;for(var r in t._barsPos){var a=[],i=[];for(var n in t._barsPos[r]){var s=t._barsPos[r][n];i[n]=s,a[n]=t.drawBar(r,n,function(){t._finished.push(!0),e&&t._finished.length==t._cfg.series.length&&e()}).attr({barGroup:r,barIndex:n,defaultColor:l.getColor(r).DEFAULT,hoverColor:l.getColor(r).HOVER})}var o={bars:a,posInfos:i,color:l.getColor(r)};t._bars[r]=o}return t._bars},drawGridsX:function(){var e,t=this,r=t._points[0];if(t._gridsX=[],"x"==t._cfg.zoomType){e=function(){var e=r.length,t=[];if(e>1){var a=(r[1].x-r[0].x)/2;t.push({x:r[0].x-a});for(var i in r)t.push({x:r[i].x- -a})}return t}();for(var a=0,i=e.length;i>a;a++)t._gridsX.push(t.drawGridX(e[a]))}else for(var a in t._pointsX)t._gridsX.push(t.drawGridX(t._pointsX[a]));return t._gridsX},drawGridX:function(e,t){var r=this,a=r._innerContainer.tl.y,i=r._innerContainer.height,t=t||r._cfg.xAxis.css,n=r.htmlPaper,s=r._cfg.themeCls+"-gridsx";return n.lineY(e.x,a,i).addClass(s).css(r._cfg.xGrids.css)},drawGridY:function(e,t){var r=this,a=r._innerContainer.width,t=t||r._cfg.yGrids.css,i=r.htmlPaper,n=r._cfg.themeCls+"-gridsy";return i.lineX(e.x,e.y,a).addClass(n).css(t)},drawGridsY:function(){var e=this,t=e._innerContainer.tl.x,r="x"==e._cfg.zoomType?!1:!0;e._gridsY=[];for(var a=0,i=e._pointsY.length;i>a;a++)e._gridsY[a]={0:e.drawGridY({x:t,y:e._pointsY[a].y}),num:r?e.coordNumX[a]:e.coordNum[a]}},drawAxisX:function(){var e=this,t=e._innerContainer,r=t.bl,a=t.width,i=e.htmlPaper,n=e._cfg.themeCls+"-axisx";return e._axisX=i.lineX(r.x,r.y,a).addClass(n).css(e._cfg.xAxis.css||{}),e._axisX},drawAxisY:function(){var e=this,t=e._innerContainer,r=t.tl,a=t.height,i=e.htmlPaper,n=e._cfg.themeCls+"-axisy";return e._axisY=i.lineY(r.x,r.y,a).addClass(n).css(e._cfg.yAxis.css||{}),e._axisY},drawLabelsX:function(){var e=this,t=e._cfg,r="y"==t.zoomType?!0:!1;if(r)for(var a in e._pointsX)e._labelX[a]={0:e.drawLabelX(a,e._pointsX[a].number)};else for(var a in e._cfg.xAxis.text)e._labelX[a]={0:e.drawLabelX(a,e._cfg.xAxis.text[a])}},drawLabelsY:function(){var e=this,t=e._cfg,r="x"==t.zoomType?!1:!0;if(r)for(var a in e._cfg.yAxis.text)e._labelY[a]={0:e.drawLabelY(a,e._cfg.yAxis.text[a])};else for(var a in e._pointsY)e._labelY[a]={0:e.drawLabelY(a,e._pointsY[a].number),num:e._pointsY[a].number}},drawLabelX:function(r,a){var i,n=this,s=n.htmlPaper,c=n._pointsX,l=c.length||0,d=n._cfg.themeCls+"-xlabels",f="{{data}}",h="";return l>r?(f=n._cfg.xLabels.template||f,h=e.isFunction(f)?f(r,a):t(f).render({data:a}),i=c[r],i[0]=s.text(i.x,i.y,"<span class="+d+">"+h+"</span>","center").children().css(n._cfg.xLabels.css),i[0]):o},drawLabelY:function(r,a){var i=this,n=i.htmlPaper,s=i._cfg.themeCls+"-ylabels",o="{{data}}",c="";return o=i._cfg.yLabels.template||o,c=e.isFunction(o)?o(r,a):t(o).render({data:a}),c&&n.text(i._pointsY[r].x,i._pointsY[r].y,"<span class="+s+">"+c+"</span>","right","middle").children().css(i._cfg.yLabels.css)},renderTip:function(){var t=this,r=t._cfg,a=t._innerContainer,i=r.tip.boundryDetect?{x:a.tl.x,y:a.tl.y,width:a.width,height:a.height}:{},n=e.mix(r.tip,{rootNode:t._$ctnNode,clsName:r.themeCls,boundry:i});return t.tip=new c(n),t.tip},renderEvtLayout:function(){var e,t=this,r=t._innerContainer,a=(r.tl.y,t._points[0],r.height);t._multiple,t._evtEls._bars=[],e=t._evtEls.paper?t._evtEls.paper:t._evtEls.paper=new i(t._$ctnNode,{clsName:g,prependTo:!1,width:r.width,height:a,left:r.tl.x,top:r.tl.y,css:{"z-index":20,background:"#fff",filter:"alpha(opacity =1)","-moz-opacity":.01,"-khtml-opacity":.01,opacity:.01}});for(var n in t._barsPos){var s=[];for(var o in t._barsPos[n]){var c=t._barsPos[n][o];s[o]=e.rect(c.x,c.y,c.width,c.height).addClass(u).attr({barGroup:n,barIndex:o})}t._evtEls._bars.push(s)}return e},clearEvtLayout:function(){var e=this;if(e._evtEls._bars)for(var t in e._evtEls._bars)for(var r in e._evtEls._bars[t])e._evtEls._bars[t][r].remove()},renderLegend:function(){var t=this,r=t._cfg.legend,a=r.container&&d(r.container)[0]?d(r.container):t._$ctnNode,i=t._innerContainer,s=t.color._colors,o=s.length,c=t._cfg,l=t._cfg.series,f=e.map(l,function(e,t){t%=o;var r={},a=s[t];return r.text=e.text,r.DEFAULT=a.DEFAULT,r.HOVER=a.HOVER,r}),h=e.merge({interval:20,iconright:5,showicon:!0},c.legend.globalConfig);return t.legend=new n({container:a,bbox:{width:i.width,height:i.height,left:i.x,top:i.y},align:c.legend.align||"bc",offset:c.legend.offset||(/t/g.test(c.legend.align)?[0,0]:[0,20]),globalConfig:h,config:f}),t.legend.on("click",function(e){var t=e.index,r=(e.text,e.icon,e.el);1!=r.hide?(this.hideBar(t),r.hide=1,r.disable()):(this.showBar(t),r.hide=0,r.enable())},this),t.legend},render:function(t){var r=this,a=r._cfg,n=r._innerContainer,s=a.themeCls;t&&r._$ctnNode.html(""),r.paper=new i(r._$ctnNode,{clsName:_,width:n.width,height:n.height,left:n.tl.x,top:n.tl.y}),r._clonePoints=r._points,r.getBarsPos(),r.htmlPaper=new i(r._$ctnNode,{clsName:s}),r.drawTitle(),r.drawSubTitle(),r.renderEvtLayout(),a.tip.isShow&&r.renderTip(),a.xGrids.isShow&&r.drawGridsX(),a.yGrids.isShow&&r.drawGridsY(),a.xAxis.isShow&&r.drawAxisX(),a.yAxis.isShow&&r.drawAxisY(),a.xLabels.isShow&&r.drawLabelsX(),a.yLabels.isShow&&r.drawLabelsY(),a.legend.isShow&&r.renderLegend(),r.drawBars(function(){r.afterRender(),r.fix2Resize()}),r.bindEvt(),e.log(r)},bindEvt:function(){var e=this,t=e._cfg;f.detach(d("."+u,e._$ctnNode),"mouseenter"),f.on(d("."+u,e._$ctnNode),"mouseenter",function(r){var a=d(r.currentTarget),i=a.attr("barIndex"),n=a.attr("barGroup");t.tip.isShow&&e.tipHandler(n,i),e.barChange(n,i)}),f.detach(d("."+u,e._$ctnNode),"mouseleave"),f.on(d("."+u,e._$ctnNode),"mouseleave",function(t){var r=d(t.currentTarget),a=r.attr("barIndex"),i=r.attr("barGroup"),n=e._bars[i].bars[a];n.css({background:n.attr("defaultColor")})}),f.detach(e._evtEls.paper.$paper,"mouseleave"),f.on(e._evtEls.paper.$paper,"mouseleave",function(){e.tip&&e.tip.hide(),e.paperLeave()})},paperLeave:function(){var e=this;e.fire("paperLeave",e)},barChange:function(t,r){var a=this,i=a._bars[t],n=e.mix({target:i.bars[r],currentTarget:i.bars[r],barGroup:Math.round(t),barIndex:Math.round(r)},a._points[t][r]);a.fire("barChange",n)},tipHandler:function(t,r){var a=this,i=a._cfg,n=a.tip,s="y"==i.zoomType?!0:!1,o=(n.getInstance(),a._bars[t].bars[r]),c=o.attr("defaultColor"),l=a._cfg.tip.template,d=s?o.attr("posx")- -o.width()- -a._innerContainer.x:o.attr("posx"),f=o.attr("posy"),h=e.merge(a._points[t][r].dataInfo,i.series[t]);delete h.data,a._points[t][r].dataInfo,o.css({background:o.attr("hoverColor")}),l&&(n.fire("setcontent",{data:h}),n.fire("move",{x:d,y:f,style:a.processAttr(i.tip.css,c)}))},animateGridsAndLabels:function(){var e=this,t=e._cfg.zoomType;if("y"==t){for(var r in e._labelX)e._labelX[r]&&e._labelX[r][0]&&d(e._labelX[r][0]).remove(),e._gridsX[r]&&e._gridsX[r][0]&&d(e._gridsX[r][0]).remove();e.drawGridsX(),e.drawLabelsX()}else if("x"==t){for(var r in e._labelY)e._labelY[r]&&e._labelY[r][0]&&e._labelY[r][0].remove(),e._gridsY[r]&&e._gridsY[r][0]&&e._gridsY[r][0].remove();e.drawGridsY(),e.drawLabelsY()}},processAttr:function(t,r){var a=e.clone(t);for(var i in a)a[i]&&"string"==typeof a[i]&&(a[i]=a[i].replace(b,r));return a},showBar:function(t){var a=this,i=a._innerContainer;r.prototype.recoveryData.call(a,t),a._clonePoints[t]=a._points[t],a.animateGridsAndLabels(),a.getBarsPos();for(var n in a._bars)if(n!=t)for(var s in a._bars[n].bars)if(a._barsPos[n]){var o=a._barsPos[n][s];o&&a._bars[n].bars[s].stop().animate({height:o.height,width:o.width,marginTop:o.y-i.y,marginLeft:o.x-i.x},.4,"easeOut",function(){}),a._bars[n].bars[s].attr({posx:o.x,posy:o.y})}var c=[],d=[];for(var s in a._barsPos[t]){var o=a._barsPos[t][s];c[s]=o,d[s]=a.drawBar(t,s).attr({barGroup:t,barIndex:s,defaultColor:l.getColor(t).DEFAULT,hoverColor:l.getColor(t).HOVER})}a._bars[t]={bars:d,posInfos:c,color:l.getColor(n)},a.clearEvtLayout(),a.renderEvtLayout(),a.bindEvt(),e.log(a)},fix2Resize:function(){var t=this;t._$ctnNode,t._cfg.anim="";var r=e.buffer(function(){t.init()},200);!t.__isFix2Resize&&t.on("resize",function(){t.__isFix2Resize=1,r()})},hideBar:function(t){var a=this,i=a._innerContainer;r.prototype.removeData.call(a,t),delete a._clonePoints[t],a.animateGridsAndLabels(),a.getBarsPos();for(var n in a._bars[t].bars)a._bars[t].bars[n].remove();for(var n in a._bars)if(n!=t)for(var s in a._bars[n].bars){var o=a._barsPos[n]?a._barsPos[n][s]:"";o&&a._bars[n].bars[s].stop().animate({height:o.height,width:o.width,marginTop:o.y-i.y,marginLeft:o.x-i.x},.4,"easeOut",function(){}),a._bars[n].bars[s].attr({posx:o.x,posy:o.y})}a.clearEvtLayout(),a.renderEvtLayout(),a.bindEvt(),e.log(a)},afterRender:function(){var e=this;e.fire("afterRender",e)},getPaper:function(){return this.paper},clear:function(){return this.paper.clear()}}),x},{requires:["gallery/template/1.0/index","gallery/kcharts/1.2/basechart/index","gallery/kcharts/1.2//tools/color/index","gallery/kcharts/1.2//tools/htmlpaper/index","gallery/kcharts/1.2//legend/index","./theme","gallery/kcharts/1.2//tools/touch/index","gallery/kcharts/1.2//tip/index"]});