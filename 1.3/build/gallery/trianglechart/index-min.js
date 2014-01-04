/*! kcharts - v1.3 - 2014-01-04 9:39:16 PM
* Copyright (c) 2014 数据可视化小组; Licensed  */
KISSY.add("gallery/kcharts/1.3/gallery/trianglechart/theme",function(){var t={"ks-chart-default":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-analytiks":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}},"ks-chart-rainbow":{title:{content:"",css:{"text-align":"center","font-size":"16px","font-weight":"bold",color:"#666"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px",color:"#666"},isShow:!0},xGrids:{css:{color:"#eee"}},yGrids:{css:{color:"#eee"}},yAxis:{css:{color:"#ccc"}},xAxis:{css:{color:"#ccc"}},xLabels:{css:{color:"#666","font-size":"12px"}},yLabels:{css:{color:"#666","font-size":"12px"}},tip:{css:{border:"1px solid {COLOR}"}}}};return t}),KISSY.add("gallery/kcharts/1.3/gallery/trianglechart/index",function(t,l,e,r,i,n,s,a,o){var c,h=t.all,x=(t.Event,"ks-chart-"),y=x+"default",u="{COLOR}",f=function(t){this.init(t)};return t.extend(f,e,{init:function(l){var i,s,a=this;if(a.chartType="trianglechart",e.prototype.init.call(a,l),a._$ctnNode[0]){var h={themeCls:y,autoRender:!0,colors:[],title:{content:"",css:{"text-align":"center","font-size":"16px"},isShow:!0},subTitle:{content:"",css:{"text-align":"center","font-size":"12px"},isShow:!0},xLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},yLabels:{isShow:!0,css:{color:"#666","font-size":"12px","white-space":"nowrap",position:"absolute"}},xAxis:{isShow:!0,css:{color:"#eee",zIndex:10},min:0},yAxis:{isShow:!0,css:{zIndex:10},num:5,min:0},xGrids:{isShow:!0,css:{}},yGrids:{isShow:!0,css:{}},areas:{isShow:!0,css:{}},triangles:{isShow:!0,css:{background:u,border:"1px solid #fff"}},legend:{isShow:!1},tip:{isShow:!0,template:"",css:{},anim:{easing:"easeOut",duration:.3},offset:{x:0,y:0},boundryDetect:!0,alignX:"right",alignY:"bottom"}};a._triangles={},a._finished=[],y=a._cfg.themeCls||h.themeCls,a._cfg=t.mix(t.mix(h,r[y],o,o,!0),a._cfg,o,o,!0),a.color=c=new n({themeCls:y}),s=a._points[0],i=Math.round(s&&s[0]&&s[1]&&s[1].x-s[0].x||a.getInnerContainer().width),i&&a.set("area-width",i),a._cfg.colors.length>0&&c.removeAllColors();for(var x in a._cfg.colors)c.setColor(a._cfg.colors[x]);a._cfg.autoRender&&a.render(!0)}},drawTitle:function(){var l=this,e=l.htmlPaper,r=y+"-title",i=l._cfg,n=l._innerContainer,s=.6*n.y;!l._title&&i.title.isShow&&""!=i.title.content&&(l._title=e.rect(0,0,l._$ctnNode.width(),s).addClass(r).css(t.mix({"line-height":s+"px"},i.title.css))),l._title&&""!=i.title.content&&l._title.html(i.title.content)},drawSubTitle:function(){var l=this,e=l.htmlPaper,r=y+"-subtitle",i=l._cfg,n=l._innerContainer,s=.4*n.y;!l._subTitle&&i.subTitle.isShow&&""!=i.subTitle.content&&(l._subTitle=e.rect(0,.6*n.y,l._$ctnNode.width(),s).addClass(r).css(t.mix({"line-height":s+"px"},i.subTitle.css))),l._subTitle&&""!=i.subTitle.content&&l._subTitle.html(i.subTitle.content)},getTrianglePos:function(){var t,l=this,e=l._cfg.triangles.ratio||1,r=l.get("area-width")*e,i=l._innerContainer;l._trianglePos={};for(var n in l._points[0])t=l._points[0][n],l._trianglePos[n]=[t.x,t.y,t.x-r/2,i.bl.y,t.x/1+r/2,i.bl.y]},drawTriangles:function(){var t,l=this,e=(l._cfg,l.paper);l._innerContainer;for(var r in l._trianglePos)t=l._trianglePos[r],e.path(["M",t[0]+",",t[1],"L",t[2]+",",t[3]+",",t[4]+",",t[5]+"Z"].join("")).attr({fill:l.color.getColor(r).DEFAULT})},drawAxisX:function(){var t=this,l=t._innerContainer,e=l.bl,r=l.width,i=t.htmlPaper,n=t._cfg.themeCls+"-axisx";return t._axisX=i.lineX(e.x,e.y,r).addClass(n).css(t._cfg.xAxis.css||{}),t._axisX},drawAxisY:function(){var t=this,l=t._innerContainer,e=l.tl,r=l.height,i=t.htmlPaper,n=t._cfg.themeCls+"-axisy";return t._axisY=i.lineY(e.x,e.y,r).addClass(n).css(t._cfg.yAxis.css||{}),t._axisY},drawLabelsX:function(){var t=this,l=t._cfg,e="y"==l.zoomType?!0:!1;if(e)for(var r in t._pointsX)t._labelX[r]={0:t.drawLabelX(r,t._pointsX[r].number)};else for(var r in t._cfg.xAxis.text)t._labelX[r]={0:t.drawLabelX(r,t._cfg.xAxis.text[r])}},drawLabelsY:function(){var t=this,l=t._cfg,e="x"==l.zoomType?!1:!0;if(e)for(var r in t._cfg.yAxis.text)t._labelY[r]={0:t.drawLabelY(r,t._cfg.yAxis.text[r])};else for(var r in t._pointsY)t._labelY[r]={0:t.drawLabelY(r,t._pointsY[r].number),num:t._pointsY[r].number}},drawLabelX:function(e,r){var i,n=this,s=n.htmlPaper,a=n._pointsX,c=n._innerContainer,h=a.length||0,x=n._cfg.themeCls+"-xlabels",y="{{data}}",u="";return h>e?(y=n._cfg.xLabels.template||y,u=t.isFunction(y)?y(e,r):l(y).render({data:r}),i=a[e],i[0]=s.text(i.x,c.bl.y,"<span class="+x+">"+u+"</span>","center").children().css(n._cfg.xLabels.css),i[0]):o},drawLabelY:function(e,r){var i=this,n=i.htmlPaper,s=i._innerContainer,a=i._cfg.themeCls+"-ylabels",o="{{data}}",c="";return o=i._cfg.yLabels.template||o,c=t.isFunction(o)?o(e,r):l(o).render({data:r}),c&&n.text(s.tl.x,i._pointsY[e].y,"<span class="+a+">"+c+"</span>","right","middle").children().css(i._cfg.yLabels.css)},renderLegend:function(){var l=this,e=l._cfg.legend,r=e.container&&h(e.container)[0]?h(e.container):l._$ctnNode,i=l._innerContainer,n=l.color._colors,s=n.length,o=l._cfg,c=l._cfg.series,x=t.map(c,function(t,l){l%=s;var e={},r=n[l];return e.text=t.text,e.DEFAULT=r.DEFAULT,e.HOVER=r.HOVER,e}),y=t.merge({interval:20,iconright:5,showicon:!0},o.legend.globalConfig);return l.legend=new a({container:r,bbox:{width:i.width,height:i.height,left:i.x,top:i.y},align:o.legend.align||"bc",offset:o.legend.offset||(/t/g.test(o.legend.align)?[0,0]:[0,20]),globalConfig:y,config:x}),l.legend.on("click",function(t){var l=t.index,e=(t.text,t.icon,t.el);1!=e.hide?(this.hideBar(l),e.hide=1,e.disable()):(this.showBar(l),e.hide=0,e.enable())},this),l.legend},render:function(l){var e=this,r=e._cfg;e._innerContainer,r.themeCls,l&&e._$ctnNode.html(""),e.paper=i(e._$ctnNode[0],r.width,r.height),e._clonePoints=e._points,e.getTrianglePos(),e.htmlPaper=new s(e._$ctnNode),e.drawTitle(),e.drawSubTitle(),r.xAxis.isShow&&e.drawAxisX(),r.yAxis.isShow&&e.drawAxisY(),r.xLabels.isShow&&e.drawLabelsX(),r.yLabels.isShow&&e.drawLabelsY(),e.getTrianglePos(),e.drawTriangles(function(){t.log("finished"),e.afterRender()}),e.bindEvt(),t.log(e)},renderLegend:function(){var l=this,e=l._cfg.legend,r=e.container&&h(e.container)[0]?h(e.container):l._$ctnNode,i=l._stocks,n=l._innerContainer,s=l.color._colors,o=s.length,c=l._cfg,x=l._cfg.series,y=t.map(x,function(t,l){l%=o;var e={},r=s[l];e.text=t.text,e.DEFAULT=r.DEFAULT,e.HOVER=r.HOVER;var n=i[l].type;return e.icontype="line"+n,e.iconsize=[1,1],e}),u=t.merge({interval:20,iconright:5,showicon:!0},c.legend.globalConfig);return l.legend=new a({container:r,paper:l.paper,bbox:{width:n.width,height:n.height,left:n.x,top:n.y},align:c.legend.align||"bc",offset:c.legend.offset||[0,30],globalConfig:u,config:y}),l.legend.on("click",function(t){var l=t.index,e=(t.text,t.icon,t.el);1!=e.hide?(this.hideLine(l),e.hide=1,e.disable()):(this.showLine(l),e.hide=0,e.enable())},this),l.legend},bindEvt:function(){var t=this;t._cfg},paperLeave:function(){var t=this;t.fire("paperLeave",t)},barChange:function(l,e){var r=this,i=r._bars[l],n=t.mix({target:i.bars[e],currentTarget:i.bars[e],barGroup:Math.round(l),barIndex:Math.round(e)},r._points[l][e]);r.fire("barChange",n)},animateGridsAndLabels:function(){var t=this;for(var l in t._labelY)t._labelY[l]&&t._labelY[l][0]&&t._labelY[l][0].remove(),t._gridsY[l]&&t._gridsY[l][0]&&t._gridsY[l][0].remove();t.drawGridsY(),t.drawLabelsY()},processAttr:function(l,e){var r=t.clone(l);for(var i in r)r[i]&&"string"==typeof r[i]&&(r[i]=r[i].replace(u,e));return r},afterRender:function(){var t=this;t.fire("afterRender",t)},getRaphaelPaper:function(){return this.paper},getHtmlPaper:function(){return this.htmlPaper},clear:function(){return this.paper.clear()}}),f},{requires:["gallery/template/1.0/index","gallery/kcharts/1.3/basechart/index","./theme","gallery/kcharts/1.3/raphael/index","gallery/kcharts/1.3/tools/color/index","gallery/kcharts/1.3/tools/htmlpaper/index","gallery/kcharts/1.3/legend/index","gallery/kcharts/1.3/tools/touch/index","gallery/kcharts/1.3/tip/index"]});