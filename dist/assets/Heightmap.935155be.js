import{i as Qs,e as Js,g as el,m as tl,A as rl,M as Mn,c as il,n as nl,a as jn,B as cr,b as Cn,k as Fo,d as dr,p as va,u as pa,f as al,h as Xi,s as ol,j as sl,l as ll,o as te,q as ul,r as hl,t as cl,v as fl,w as dl,x as _a,y as bi,z as ma,C as vl,T as pl,_ as _l,D as At,E as Uo,R as Ln,F as ml,G as gl,H as Ho,I as yl,J as xl,K as Tl,L as El,N as Yr,O as zo,P as Vo,Q as Sl,S as We,U as bl,V as $r,W as ko,X as xt,Y as $e,Z as Go,$ as Yi,a0 as $i,a1 as Zt,a2 as ji,a3 as Al,a4 as ft,a5 as wl,a6 as Ir,a7 as qn,a8 as Ml,a9 as Cl,aa as Ll,ab as yr,ac as Rl,ad as Zn,ae as Wo,af as Xo,ag as Pl,ah as Fi,ai as Dl,aj as Yo,ak as $o,al as It,am as Ai,an as Nl,ao as Rn,ap as ga,aq as Pn,ar as Il,as as jo,at as Ol,au as qi,av as Zi,aw as Bl,ax as Fl,ay as Ul,az as ya,aA as Hl,aB as zl,aC as Or,aD as Vl,aE as kl,aF as Gl,aG as Wl,aH as Xl,aI as Yl,aJ as Gr,aK as $l,aL as Dn,aM as qo,aN as Zo,aO as Ko,aP as Qo,aQ as jl,aR as ql,aS as jr,aT as xa,aU as Zl,aV as Kl,aW as Ql,aX as Jl,aY as eu,aZ as tu,a_ as qr,a$ as ru,b0 as iu,b1 as nu,b2 as au,b3 as ou,b4 as su,b5 as lu,b6 as uu,b7 as hu,b8 as cu,b9 as fu,ba as du,bb as vu,bc as pu,bd as _u,be as Dt,bf as lt,bg as Re,bh as Ee,bi as _t,bj as ut,bk as mu,bl as gu,bm as Zr,bn as er,bo as yu,bp as xu,bq as Tu,br as Kr,bs as Ta,bt as Qr,bu as Jr,bv as Eu}from"./index.36499aee.js";var Su={isDimensionStacked:Qs,enableDataStack:Js,getStackedDimension:el};function bu(e,t){var r=t;t instanceof Mn||(r=new Mn(t));var i=il(r);return i.setExtent(e[0],e[1]),nl(i,r),i}function Au(e){tl(e,rl)}function wu(e){if(e){for(var t=[],r=0;r<e.length;r++)t.push(e[r].slice());return t}}function Mu(e,t){var r=e.label,i=t&&t.getTextGuideLine();return{dataIndex:e.dataIndex,dataType:e.dataType,seriesIndex:e.seriesModel.seriesIndex,text:e.label.style.text,rect:e.hostRect,labelRect:e.rect,align:r.style.align,verticalAlign:r.style.verticalAlign,labelLinePoints:wu(i&&i.shape.points)}}var Ea=["align","verticalAlign","width","height","fontSize"],et=new pl,Ki=jn(),Cu=jn();function ei(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];t[n]!=null&&(e[n]=t[n])}}var ti=["x","y","rotation"],Lu=function(){function e(){this._labelList=[],this._chartViewList=[]}return e.prototype.clearLabels=function(){this._labelList=[],this._chartViewList=[]},e.prototype._addLabel=function(t,r,i,n,a){var o=n.style,s=n.__hostTarget,l=s.textConfig||{},u=n.getComputedTransform(),h=n.getBoundingRect().plain();cr.applyTransform(h,h,u),u?et.setLocalTransform(u):(et.x=et.y=et.rotation=et.originX=et.originY=0,et.scaleX=et.scaleY=1);var c=n.__hostTarget,d;if(c){d=c.getBoundingRect().plain();var f=c.getComputedTransform();cr.applyTransform(d,d,f)}var v=d&&c.getTextGuideLine();this._labelList.push({label:n,labelLine:v,seriesModel:i,dataIndex:t,dataType:r,layoutOption:a,computedLayoutOption:null,rect:h,hostRect:d,priority:d?d.width*d.height:0,defaultAttr:{ignore:n.ignore,labelGuideIgnore:v&&v.ignore,x:et.x,y:et.y,scaleX:et.scaleX,scaleY:et.scaleY,rotation:et.rotation,style:{x:o.x,y:o.y,align:o.align,verticalAlign:o.verticalAlign,width:o.width,height:o.height,fontSize:o.fontSize},cursor:n.cursor,attachedPos:l.position,attachedRot:l.rotation}})},e.prototype.addLabelsOfSeries=function(t){var r=this;this._chartViewList.push(t);var i=t.__model,n=i.get("labelLayout");!(Cn(n)||Fo(n).length)||t.group.traverse(function(a){if(a.ignore)return!0;var o=a.getTextContent(),s=dr(a);o&&!o.disableLabelLayout&&r._addLabel(s.dataIndex,s.dataType,i,o,n)})},e.prototype.updateLayoutConfig=function(t){var r=t.getWidth(),i=t.getHeight();function n(g,x){return function(){pa(g,x)}}for(var a=0;a<this._labelList.length;a++){var o=this._labelList[a],s=o.label,l=s.__hostTarget,u=o.defaultAttr,h=void 0;Cn(o.layoutOption)?h=o.layoutOption(Mu(o,l)):h=o.layoutOption,h=h||{},o.computedLayoutOption=h;var c=Math.PI/180;l&&l.setTextConfig({local:!1,position:h.x!=null||h.y!=null?null:u.attachedPos,rotation:h.rotate!=null?h.rotate*c:u.attachedRot,offset:[h.dx||0,h.dy||0]});var d=!1;if(h.x!=null?(s.x=va(h.x,r),s.setStyle("x",0),d=!0):(s.x=u.x,s.setStyle("x",u.style.x)),h.y!=null?(s.y=va(h.y,i),s.setStyle("y",0),d=!0):(s.y=u.y,s.setStyle("y",u.style.y)),h.labelLinePoints){var f=l.getTextGuideLine();f&&(f.setShape({points:h.labelLinePoints}),d=!1)}var v=Ki(s);v.needsUpdateLabelLine=d,s.rotation=h.rotate!=null?h.rotate*c:u.rotation,s.scaleX=u.scaleX,s.scaleY=u.scaleY;for(var p=0;p<Ea.length;p++){var _=Ea[p];s.setStyle(_,h[_]!=null?h[_]:u.style[_])}if(h.draggable){if(s.draggable=!0,s.cursor="move",l){var m=o.seriesModel;if(o.dataIndex!=null){var y=o.seriesModel.getData(o.dataType);m=y.getItemModel(o.dataIndex)}s.on("drag",n(l,m.getModel("labelLine")))}}else s.off("drag"),s.cursor=u.cursor}},e.prototype.layout=function(t){var r=t.getWidth(),i=t.getHeight(),n=al(this._labelList),a=Xi(n,function(l){return l.layoutOption.moveOverlap==="shiftX"}),o=Xi(n,function(l){return l.layoutOption.moveOverlap==="shiftY"});ol(a,0,r),sl(o,0,i);var s=Xi(n,function(l){return l.layoutOption.hideOverlap});ll(s)},e.prototype.processLabelsOverall=function(){var t=this;te(this._chartViewList,function(r){var i=r.__model,n=r.ignoreLabelLineUpdate,a=i.isAnimationEnabled();r.group.traverse(function(o){if(o.ignore&&!o.forceLabelAnimation)return!0;var s=!n,l=o.getTextContent();!s&&l&&(s=Ki(l).needsUpdateLabelLine),s&&t._updateLabelLine(o,i),a&&t._animateLabels(o,i)})})},e.prototype._updateLabelLine=function(t,r){var i=t.getTextContent(),n=dr(t),a=n.dataIndex;if(i&&a!=null){var o=r.getData(n.dataType),s=o.getItemModel(a),l={},u=o.getItemVisual(a,"style"),h=o.getVisual("drawType");l.stroke=u[h];var c=s.getModel("labelLine");ul(t,hl(s),l),pa(t,c)}},e.prototype._animateLabels=function(t,r){var i=t.getTextContent(),n=t.getTextGuideLine();if(i&&(t.forceLabelAnimation||!i.ignore&&!i.invisible&&!t.disableLabelAnimation&&!cl(t))){var a=Ki(i),o=a.oldLayout,s=dr(t),l=s.dataIndex,u={x:i.x,y:i.y,rotation:i.rotation},h=r.getData(s.dataType);if(o){i.attr(o);var d=t.prevStates;d&&(bi(d,"select")>=0&&i.attr(a.oldLayoutSelect),bi(d,"emphasis")>=0&&i.attr(a.oldLayoutEmphasis)),ma(i,u,r,l)}else if(i.attr(u),!fl(i).valueAnimation){var c=dl(i.style.opacity,1);i.style.opacity=0,_a(i,{style:{opacity:c}},r,l)}if(a.oldLayout=u,i.states.select){var f=a.oldLayoutSelect={};ei(f,u,ti),ei(f,i.states.select,ti)}if(i.states.emphasis){var v=a.oldLayoutEmphasis={};ei(v,u,ti),ei(v,i.states.emphasis,ti)}vl(i,l,h,r,r)}if(n&&!n.ignore&&!n.invisible){var a=Cu(n),o=a.oldLayout,p={points:n.shape.points};o?(n.attr({shape:o}),ma(n,{shape:p},r)):(n.setShape(p),n.style.strokePercent=0,_a(n,{style:{strokePercent:1}},r)),a.oldLayout=p}},e}(),Ru=Lu,Qi=jn();function Pu(e){e.registerUpdateLifecycle("series:beforeupdate",function(t,r,i){var n=Qi(r).labelManager;n||(n=Qi(r).labelManager=new Ru),n.clearLabels()}),e.registerUpdateLifecycle("series:layoutlabels",function(t,r,i){var n=Qi(r).labelManager;i.updatedSeries.forEach(function(a){n.addLabelsOfSeries(r.getViewOfSeriesModel(a))}),n.updateLayoutConfig(r),n.layout(r),n.processLabelsOverall()})}function Sa(e,t,r){var i=gl.createCanvas(),n=t.getWidth(),a=t.getHeight(),o=i.style;return o&&(o.position="absolute",o.left="0",o.top="0",o.width=n+"px",o.height=a+"px",i.setAttribute("data-zr-dom-id",e)),i.width=n*r,i.height=a*r,i}var Du=function(e){_l(t,e);function t(r,i,n){var a=e.call(this)||this;a.motionBlur=!1,a.lastFrameAlpha=.7,a.dpr=1,a.virtual=!1,a.config={},a.incremental=!1,a.zlevel=0,a.maxRepaintRectCount=5,a.__dirty=!0,a.__firstTimePaint=!0,a.__used=!1,a.__drawIndex=0,a.__startIndex=0,a.__endIndex=0,a.__prevStartIndex=null,a.__prevEndIndex=null;var o;n=n||Ho,typeof r=="string"?o=Sa(r,i,n):At(r)&&(o=r,r=o.id),a.id=r,a.dom=o;var s=o.style;return s&&(Uo(o),o.onselectstart=function(){return!1},s.padding="0",s.margin="0",s.borderWidth="0"),a.painter=i,a.dpr=n,a}return t.prototype.getElementCount=function(){return this.__endIndex-this.__startIndex},t.prototype.afterBrush=function(){this.__prevStartIndex=this.__startIndex,this.__prevEndIndex=this.__endIndex},t.prototype.initContext=function(){this.ctx=this.dom.getContext("2d"),this.ctx.dpr=this.dpr},t.prototype.setUnpainted=function(){this.__firstTimePaint=!0},t.prototype.createBackBuffer=function(){var r=this.dpr;this.domBack=Sa("back-"+this.id,this.painter,r),this.ctxBack=this.domBack.getContext("2d"),r!==1&&this.ctxBack.scale(r,r)},t.prototype.createRepaintRects=function(r,i,n,a){if(this.__firstTimePaint)return this.__firstTimePaint=!1,null;var o=[],s=this.maxRepaintRectCount,l=!1,u=new cr(0,0,0,0);function h(y){if(!(!y.isFinite()||y.isZero()))if(o.length===0){var g=new cr(0,0,0,0);g.copy(y),o.push(g)}else{for(var x=!1,E=1/0,S=0,w=0;w<o.length;++w){var b=o[w];if(b.intersect(y)){var C=new cr(0,0,0,0);C.copy(b),C.union(y),o[w]=C,x=!0;break}else if(l){u.copy(y),u.union(b);var O=y.width*y.height,M=b.width*b.height,B=u.width*u.height,F=B-O-M;F<E&&(E=F,S=w)}}if(l&&(o[S].union(y),x=!0),!x){var g=new cr(0,0,0,0);g.copy(y),o.push(g)}l||(l=o.length>=s)}}for(var c=this.__startIndex;c<this.__endIndex;++c){var d=r[c];if(d){var f=d.shouldBePainted(n,a,!0,!0),v=d.__isRendered&&(d.__dirty&Ln||!f)?d.getPrevPaintRect():null;v&&h(v);var p=f&&(d.__dirty&Ln||!d.__isRendered)?d.getPaintRect():null;p&&h(p)}}for(var c=this.__prevStartIndex;c<this.__prevEndIndex;++c){var d=i[c],f=d.shouldBePainted(n,a,!0,!0);if(d&&(!f||!d.__zr)&&d.__isRendered){var v=d.getPrevPaintRect();v&&h(v)}}var _;do{_=!1;for(var c=0;c<o.length;){if(o[c].isZero()){o.splice(c,1);continue}for(var m=c+1;m<o.length;)o[c].intersect(o[m])?(_=!0,o[c].union(o[m]),o.splice(m,1)):m++;c++}}while(_);return this._paintRects=o,o},t.prototype.debugGetPaintRects=function(){return(this._paintRects||[]).slice()},t.prototype.resize=function(r,i){var n=this.dpr,a=this.dom,o=a.style,s=this.domBack;o&&(o.width=r+"px",o.height=i+"px"),a.width=r*n,a.height=i*n,s&&(s.width=r*n,s.height=i*n,n!==1&&this.ctxBack.scale(n,n))},t.prototype.clear=function(r,i,n){var a=this.dom,o=this.ctx,s=a.width,l=a.height;i=i||this.clearColor;var u=this.motionBlur&&!r,h=this.lastFrameAlpha,c=this.dpr,d=this;u&&(this.domBack||this.createBackBuffer(),this.ctxBack.globalCompositeOperation="copy",this.ctxBack.drawImage(a,0,0,s/c,l/c));var f=this.domBack;function v(p,_,m,y){if(o.clearRect(p,_,m,y),i&&i!=="transparent"){var g=void 0;yl(i)?(g=i.__canvasGradient||xl(o,i,{x:0,y:0,width:m,height:y}),i.__canvasGradient=g):Tl(i)&&(g=El(o,i,{dirty:function(){d.setUnpainted(),d.__painter.refresh()}})),o.save(),o.fillStyle=g||i,o.fillRect(p,_,m,y),o.restore()}u&&(o.save(),o.globalAlpha=h,o.drawImage(f,p,_,m,y),o.restore())}!n||u?v(0,0,s,l):n.length&&te(n,function(p){v(p.x*c,p.y*c,p.width*c,p.height*c)})},t}(ml),Ji=Du,ba=1e5,Ft=314159,ri=.01,Nu=.001;function Iu(e){return e?e.__builtin__?!0:!(typeof e.resize!="function"||typeof e.refresh!="function"):!1}function Ou(e,t){var r=document.createElement("div");return r.style.cssText=["position:relative","width:"+e+"px","height:"+t+"px","padding:0","margin:0","border-width:0"].join(";")+";",r}var Bu=function(){function e(t,r,i,n){this.type="canvas",this._zlevelList=[],this._prevDisplayList=[],this._layers={},this._layerConfig={},this._needsManuallyCompositing=!1,this.type="canvas";var a=!t.nodeName||t.nodeName.toUpperCase()==="CANVAS";this._opts=i=ko({},i||{}),this.dpr=i.devicePixelRatio||Ho,this._singleCanvas=a,this.root=t;var o=t.style;o&&(Uo(t),t.innerHTML=""),this.storage=r;var s=this._zlevelList;this._prevDisplayList=[];var l=this._layers;if(a){var h=t,c=h.width,d=h.height;i.width!=null&&(c=i.width),i.height!=null&&(d=i.height),this.dpr=i.devicePixelRatio||1,h.width=c*this.dpr,h.height=d*this.dpr,this._width=c,this._height=d;var f=new Ji(h,this,this.dpr);f.__builtin__=!0,f.initContext(),l[Ft]=f,f.zlevel=Ft,s.push(Ft),this._domRoot=t}else{this._width=$r(t,0,i),this._height=$r(t,1,i);var u=this._domRoot=Ou(this._width,this._height);t.appendChild(u)}}return e.prototype.getType=function(){return"canvas"},e.prototype.isSingleCanvas=function(){return this._singleCanvas},e.prototype.getViewportRoot=function(){return this._domRoot},e.prototype.getViewportRootOffset=function(){var t=this.getViewportRoot();if(t)return{offsetLeft:t.offsetLeft||0,offsetTop:t.offsetTop||0}},e.prototype.refresh=function(t){var r=this.storage.getDisplayList(!0),i=this._prevDisplayList,n=this._zlevelList;this._redrawId=Math.random(),this._paintList(r,i,t,this._redrawId);for(var a=0;a<n.length;a++){var o=n[a],s=this._layers[o];if(!s.__builtin__&&s.refresh){var l=a===0?this._backgroundColor:null;s.refresh(l)}}return this._opts.useDirtyRect&&(this._prevDisplayList=r.slice()),this},e.prototype.refreshHover=function(){this._paintHoverList(this.storage.getDisplayList(!1))},e.prototype._paintHoverList=function(t){var r=t.length,i=this._hoverlayer;if(i&&i.clear(),!!r){for(var n={inHover:!0,viewWidth:this._width,viewHeight:this._height},a,o=0;o<r;o++){var s=t[o];s.__inHover&&(i||(i=this._hoverlayer=this.getLayer(ba)),a||(a=i.ctx,a.save()),Yr(a,s,n,o===r-1))}a&&a.restore()}},e.prototype.getHoverLayer=function(){return this.getLayer(ba)},e.prototype.paintOne=function(t,r){zo(t,r)},e.prototype._paintList=function(t,r,i,n){if(this._redrawId===n){i=i||!1,this._updateLayerStatus(t);var a=this._doPaintList(t,r,i),o=a.finished,s=a.needsRefreshHover;if(this._needsManuallyCompositing&&this._compositeManually(),s&&this._paintHoverList(t),o)this.eachLayer(function(u){u.afterBrush&&u.afterBrush()});else{var l=this;Vo(function(){l._paintList(t,r,i,n)})}}},e.prototype._compositeManually=function(){var t=this.getLayer(Ft).ctx,r=this._domRoot.width,i=this._domRoot.height;t.clearRect(0,0,r,i),this.eachBuiltinLayer(function(n){n.virtual&&t.drawImage(n.dom,0,0,r,i)})},e.prototype._doPaintList=function(t,r,i){for(var n=this,a=[],o=this._opts.useDirtyRect,s=0;s<this._zlevelList.length;s++){var l=this._zlevelList[s],u=this._layers[l];u.__builtin__&&u!==this._hoverlayer&&(u.__dirty||i)&&a.push(u)}for(var h=!0,c=!1,d=function(p){var _=a[p],m=_.ctx,y=o&&_.createRepaintRects(t,r,f._width,f._height),g=i?_.__startIndex:_.__drawIndex,x=!i&&_.incremental&&Date.now,E=x&&Date.now(),S=_.zlevel===f._zlevelList[0]?f._backgroundColor:null;if(_.__startIndex===_.__endIndex)_.clear(!1,S,y);else if(g===_.__startIndex){var w=t[g];(!w.incremental||!w.notClear||i)&&_.clear(!1,S,y)}g===-1&&(console.error("For some unknown reason. drawIndex is -1"),g=_.__startIndex);var b,C=function(F){var R={inHover:!1,allClipped:!1,prevEl:null,viewWidth:n._width,viewHeight:n._height};for(b=g;b<_.__endIndex;b++){var H=t[b];if(H.__inHover&&(c=!0),n._doPaintEl(H,_,o,F,R,b===_.__endIndex-1),x){var U=Date.now()-E;if(U>15)break}}R.prevElClipPaths&&m.restore()};if(y)if(y.length===0)b=_.__endIndex;else for(var O=f.dpr,M=0;M<y.length;++M){var B=y[M];m.save(),m.beginPath(),m.rect(B.x*O,B.y*O,B.width*O,B.height*O),m.clip(),C(B),m.restore()}else m.save(),C(),m.restore();_.__drawIndex=b,_.__drawIndex<_.__endIndex&&(h=!1)},f=this,v=0;v<a.length;v++)d(v);return Sl.wxa&&te(this._layers,function(p){p&&p.ctx&&p.ctx.draw&&p.ctx.draw()}),{finished:h,needsRefreshHover:c}},e.prototype._doPaintEl=function(t,r,i,n,a,o){var s=r.ctx;if(i){var l=t.getPaintRect();(!n||l&&l.intersect(n))&&(Yr(s,t,a,o),t.setPrevPaintRect(l))}else Yr(s,t,a,o)},e.prototype.getLayer=function(t,r){this._singleCanvas&&!this._needsManuallyCompositing&&(t=Ft);var i=this._layers[t];return i||(i=new Ji("zr_"+t,this,this.dpr),i.zlevel=t,i.__builtin__=!0,this._layerConfig[t]?We(i,this._layerConfig[t],!0):this._layerConfig[t-ri]&&We(i,this._layerConfig[t-ri],!0),r&&(i.virtual=r),this.insertLayer(t,i),i.initContext()),i},e.prototype.insertLayer=function(t,r){var i=this._layers,n=this._zlevelList,a=n.length,o=this._domRoot,s=null,l=-1;if(!i[t]&&!!Iu(r)){if(a>0&&t>n[0]){for(l=0;l<a-1&&!(n[l]<t&&n[l+1]>t);l++);s=i[n[l]]}if(n.splice(l+1,0,t),i[t]=r,!r.virtual)if(s){var u=s.dom;u.nextSibling?o.insertBefore(r.dom,u.nextSibling):o.appendChild(r.dom)}else o.firstChild?o.insertBefore(r.dom,o.firstChild):o.appendChild(r.dom);r.__painter=this}},e.prototype.eachLayer=function(t,r){for(var i=this._zlevelList,n=0;n<i.length;n++){var a=i[n];t.call(r,this._layers[a],a)}},e.prototype.eachBuiltinLayer=function(t,r){for(var i=this._zlevelList,n=0;n<i.length;n++){var a=i[n],o=this._layers[a];o.__builtin__&&t.call(r,o,a)}},e.prototype.eachOtherLayer=function(t,r){for(var i=this._zlevelList,n=0;n<i.length;n++){var a=i[n],o=this._layers[a];o.__builtin__||t.call(r,o,a)}},e.prototype.getLayers=function(){return this._layers},e.prototype._updateLayerStatus=function(t){this.eachBuiltinLayer(function(c,d){c.__dirty=c.__used=!1});function r(c){a&&(a.__endIndex!==c&&(a.__dirty=!0),a.__endIndex=c)}if(this._singleCanvas)for(var i=1;i<t.length;i++){var n=t[i];if(n.zlevel!==t[i-1].zlevel||n.incremental){this._needsManuallyCompositing=!0;break}}var a=null,o=0,s,l;for(l=0;l<t.length;l++){var n=t[l],u=n.zlevel,h=void 0;s!==u&&(s=u,o=0),n.incremental?(h=this.getLayer(u+Nu,this._needsManuallyCompositing),h.incremental=!0,o=1):h=this.getLayer(u+(o>0?ri:0),this._needsManuallyCompositing),h.__builtin__||bl("ZLevel "+u+" has been used by unkown layer "+h.id),h!==a&&(h.__used=!0,h.__startIndex!==l&&(h.__dirty=!0),h.__startIndex=l,h.incremental?h.__drawIndex=-1:h.__drawIndex=l,r(l),a=h),n.__dirty&Ln&&!n.__inHover&&(h.__dirty=!0,h.incremental&&h.__drawIndex<0&&(h.__drawIndex=l))}r(l),this.eachBuiltinLayer(function(c,d){!c.__used&&c.getElementCount()>0&&(c.__dirty=!0,c.__startIndex=c.__endIndex=c.__drawIndex=0),c.__dirty&&c.__drawIndex<0&&(c.__drawIndex=c.__startIndex)})},e.prototype.clear=function(){return this.eachBuiltinLayer(this._clearLayer),this},e.prototype._clearLayer=function(t){t.clear()},e.prototype.setBackgroundColor=function(t){this._backgroundColor=t,te(this._layers,function(r){r.setUnpainted()})},e.prototype.configLayer=function(t,r){if(r){var i=this._layerConfig;i[t]?We(i[t],r,!0):i[t]=r;for(var n=0;n<this._zlevelList.length;n++){var a=this._zlevelList[n];if(a===t||a===t+ri){var o=this._layers[a];We(o,i[t],!0)}}}},e.prototype.delLayer=function(t){var r=this._layers,i=this._zlevelList,n=r[t];!n||(n.dom.parentNode.removeChild(n.dom),delete r[t],i.splice(bi(i,t),1))},e.prototype.resize=function(t,r){if(this._domRoot.style){var i=this._domRoot;i.style.display="none";var n=this._opts,a=this.root;if(t!=null&&(n.width=t),r!=null&&(n.height=r),t=$r(a,0,n),r=$r(a,1,n),i.style.display="",this._width!==t||r!==this._height){i.style.width=t+"px",i.style.height=r+"px";for(var o in this._layers)this._layers.hasOwnProperty(o)&&this._layers[o].resize(t,r);this.refresh(!0)}this._width=t,this._height=r}else{if(t==null||r==null)return;this._width=t,this._height=r,this.getLayer(Ft).resize(t,r)}return this},e.prototype.clearLayer=function(t){var r=this._layers[t];r&&r.clear()},e.prototype.dispose=function(){this.root.innerHTML="",this.root=this.storage=this._domRoot=this._layers=null},e.prototype.getRenderedCanvas=function(t){if(t=t||{},this._singleCanvas&&!this._compositeManually)return this._layers[Ft].dom;var r=new Ji("image",this,t.pixelRatio||this.dpr);r.initContext(),r.clear(!1,t.backgroundColor||this._backgroundColor);var i=r.ctx;if(t.pixelRatio<=this.dpr){this.refresh();var n=r.dom.width,a=r.dom.height;this.eachLayer(function(c){c.__builtin__?i.drawImage(c.dom,0,0,n,a):c.renderToCanvas&&(i.save(),c.renderToCanvas(i),i.restore())})}else for(var o={inHover:!1,viewWidth:this._width,viewHeight:this._height},s=this.storage.getDisplayList(!0),l=0,u=s.length;l<u;l++){var h=s[l];Yr(i,h,o,l===u-1)}return r.dom},e.prototype.getWidth=function(){return this._width},e.prototype.getHeight=function(){return this._height},e}(),Fu=Bu;function Jo(e){e.registerPainter("canvas",Fu)}var Br=te,Uu=At,wi=-1,Kn=function(){function e(t){var r=t.mappingMethod,i=t.type,n=this.option=ft(t);this.type=i,this.mappingMethod=r,this._normalizeData=Vu[r];var a=e.visualHandlers[i];this.applyVisual=a.applyVisual,this.getColorMapper=a.getColorMapper,this._normalizedToVisual=a._normalizedToVisual[r],r==="piecewise"?(en(n),Hu(n)):r==="category"?n.categories?zu(n):en(n,!0):(wl(r!=="linear"||n.dataExtent),en(n))}return e.prototype.mapValueToVisual=function(t){var r=this._normalizeData(t);return this._normalizedToVisual(r,t)},e.prototype.getNormalizer=function(){return xt(this._normalizeData,this)},e.listVisualTypes=function(){return Fo(e.visualHandlers)},e.isValidType=function(t){return e.visualHandlers.hasOwnProperty(t)},e.eachVisual=function(t,r,i){At(t)?te(t,r,i):r.call(i,t)},e.mapVisual=function(t,r,i){var n,a=$e(t)?[]:At(t)?{}:(n=!0,null);return e.eachVisual(t,function(o,s){var l=r.call(i,o,s);n?a=l:a[s]=l}),a},e.retrieveVisuals=function(t){var r={},i;return t&&Br(e.visualHandlers,function(n,a){t.hasOwnProperty(a)&&(r[a]=t[a],i=!0)}),i?r:null},e.prepareVisualTypes=function(t){if($e(t))t=t.slice();else if(Uu(t)){var r=[];Br(t,function(i,n){r.push(n)}),t=r}else return[];return t.sort(function(i,n){return n==="color"&&i!=="color"&&i.indexOf("color")===0?1:-1}),t},e.dependsOn=function(t,r){return r==="color"?!!(t&&t.indexOf(r)===0):t===r},e.findPieceIndex=function(t,r,i){for(var n,a=1/0,o=0,s=r.length;o<s;o++){var l=r[o].value;if(l!=null){if(l===t||Go(l)&&l===t+"")return o;i&&d(l,o)}}for(var o=0,s=r.length;o<s;o++){var u=r[o],h=u.interval,c=u.close;if(h){if(h[0]===-1/0){if(ni(c[1],t,h[1]))return o}else if(h[1]===1/0){if(ni(c[0],h[0],t))return o}else if(ni(c[0],h[0],t)&&ni(c[1],t,h[1]))return o;i&&d(h[0],o),i&&d(h[1],o)}}if(i)return t===1/0?r.length-1:t===-1/0?0:n;function d(f,v){var p=Math.abs(f-t);p<a&&(a=p,n=v)}},e.visualHandlers={color:{applyVisual:Er("color"),getColorMapper:function(){var t=this.option;return xt(t.mappingMethod==="category"?function(r,i){return!i&&(r=this._normalizeData(r)),Lr.call(this,r)}:function(r,i,n){var a=!!n;return!i&&(r=this._normalizeData(r)),n=Yi(r,t.parsedVisual,n),a?n:$i(n,"rgba")},this)},_normalizedToVisual:{linear:function(t){return $i(Yi(t,this.option.parsedVisual),"rgba")},category:Lr,piecewise:function(t,r){var i=In.call(this,r);return i==null&&(i=$i(Yi(t,this.option.parsedVisual),"rgba")),i},fixed:Xt}},colorHue:ii(function(t,r){return ji(t,r)}),colorSaturation:ii(function(t,r){return ji(t,null,r)}),colorLightness:ii(function(t,r){return ji(t,null,null,r)}),colorAlpha:ii(function(t,r){return Al(t,r)}),decal:{applyVisual:Er("decal"),_normalizedToVisual:{linear:null,category:Lr,piecewise:null,fixed:null}},opacity:{applyVisual:Er("opacity"),_normalizedToVisual:Nn([0,1])},liftZ:{applyVisual:Er("liftZ"),_normalizedToVisual:{linear:Xt,category:Xt,piecewise:Xt,fixed:Xt}},symbol:{applyVisual:function(t,r,i){var n=this.mapValueToVisual(t);i("symbol",n)},_normalizedToVisual:{linear:Aa,category:Lr,piecewise:function(t,r){var i=In.call(this,r);return i==null&&(i=Aa.call(this,t)),i},fixed:Xt}},symbolSize:{applyVisual:Er("symbolSize"),_normalizedToVisual:Nn([0,1])}},e}();function Hu(e){var t=e.pieceList;e.hasSpecialVisual=!1,te(t,function(r,i){r.originIndex=i,r.visual!=null&&(e.hasSpecialVisual=!0)})}function zu(e){var t=e.categories,r=e.categoryMap={},i=e.visual;if(Br(t,function(o,s){r[o]=s}),!$e(i)){var n=[];At(i)?Br(i,function(o,s){var l=r[s];n[l!=null?l:wi]=o}):n[wi]=i,i=es(e,n)}for(var a=t.length-1;a>=0;a--)i[a]==null&&(delete r[t[a]],t.pop())}function en(e,t){var r=e.visual,i=[];At(r)?Br(r,function(a){i.push(a)}):r!=null&&i.push(r);var n={color:1,symbol:1};!t&&i.length===1&&!n.hasOwnProperty(e.type)&&(i[1]=i[0]),es(e,i)}function ii(e){return{applyVisual:function(t,r,i){var n=this.mapValueToVisual(t);i("color",e(r("color"),n))},_normalizedToVisual:Nn([0,1])}}function Aa(e){var t=this.option.visual;return t[Math.round(Zt(e,[0,1],[0,t.length-1],!0))]||{}}function Er(e){return function(t,r,i){i(e,this.mapValueToVisual(t))}}function Lr(e){var t=this.option.visual;return t[this.option.loop&&e!==wi?e%t.length:e]}function Xt(){return this.option.visual[0]}function Nn(e){return{linear:function(t){return Zt(t,e,this.option.visual,!0)},category:Lr,piecewise:function(t,r){var i=In.call(this,r);return i==null&&(i=Zt(t,e,this.option.visual,!0)),i},fixed:Xt}}function In(e){var t=this.option,r=t.pieceList;if(t.hasSpecialVisual){var i=Kn.findPieceIndex(e,r),n=r[i];if(n&&n.visual)return n.visual[this.type]}}function es(e,t){return e.visual=t,e.type==="color"&&(e.parsedVisual=Ir(t,function(r){return qn(r)})),t}var Vu={linear:function(e){return Zt(e,this.option.dataExtent,[0,1],!0)},piecewise:function(e){var t=this.option.pieceList,r=Kn.findPieceIndex(e,t,!0);if(r!=null)return Zt(r,[0,t.length-1],[0,1],!0)},category:function(e){var t=this.option.categories?this.option.categoryMap[e]:e;return t==null?wi:t},fixed:Ml};function ni(e,t,r){return e?t<=r:t<r}var qe=Kn;function ku(e,t,r,i,n,a){e=e||0;var o=r[1]-r[0];if(n!=null&&(n=tr(n,[0,o])),a!=null&&(a=Math.max(a,n!=null?n:0)),i==="all"){var s=Math.abs(t[1]-t[0]);s=tr(s,[0,o]),n=a=tr(s,[n,a]),i=0}t[0]=tr(t[0],r),t[1]=tr(t[1],r);var l=tn(t,i);t[i]+=e;var u=n||0,h=r.slice();l.sign<0?h[0]+=u:h[1]-=u,t[i]=tr(t[i],h);var c;return c=tn(t,i),n!=null&&(c.sign!==l.sign||c.span<n)&&(t[1-i]=t[i]+l.sign*n),c=tn(t,i),a!=null&&c.span>a&&(t[1-i]=t[i]+c.sign*a),t}function tn(e,t){var r=e[t]-e[1-t];return{span:Math.abs(r),sign:r>0?-1:r<0?1:t?-1:1}}function tr(e,t){return Math.min(t[1]!=null?t[1]:1/0,Math.max(t[0]!=null?t[0]:-1/0,e))}var wa=te;function Ma(e){if(e){for(var t in e)if(e.hasOwnProperty(t))return!0}}function Ca(e,t,r){var i={};return wa(t,function(a){var o=i[a]=n();wa(e[a],function(s,l){if(!!qe.isValidType(l)){var u={type:l,visual:s};r&&r(u,a),o[l]=new qe(u),l==="opacity"&&(u=ft(u),u.type="colorAlpha",o.__hidden.__alphaForOpacity=new qe(u))}})}),i;function n(){var a=function(){};a.prototype.__hidden=a.prototype;var o=new a;return o}}function Gu(e,t,r){var i;te(r,function(n){t.hasOwnProperty(n)&&Ma(t[n])&&(i=!0)}),i&&te(r,function(n){t.hasOwnProperty(n)&&Ma(t[n])?e[n]=ft(t[n]):delete e[n]})}function Wu(e,t,r,i){var n={};return te(e,function(a){var o=qe.prepareVisualTypes(t[a]);n[a]=o}),{progress:function(o,s){var l;i!=null&&(l=s.getDimensionIndex(i));function u(E){return Cl(s,c,E)}function h(E,S){Ll(s,c,E,S)}for(var c,d=s.getStore();(c=o.next())!=null;){var f=s.getRawDataItem(c);if(!(f&&f.visualMap===!1))for(var v=i!=null?d.get(l,c):c,p=r(v),_=t[p],m=n[p],y=0,g=m.length;y<g;y++){var x=m[y];_[x]&&_[x].applyVisual(v,u,h)}}}}}var Xu={get:function(e,t,r){var i=ft((Yu[e]||{})[t]);return r&&$e(i)?i[i.length-1]:i}},Yu={color:{active:["#006edd","#e0ffff"],inactive:["rgba(0,0,0,0)"]},colorHue:{active:[0,360],inactive:[0,0]},colorSaturation:{active:[.3,1],inactive:[0,0]},colorLightness:{active:[.9,.5],inactive:[0,0]},colorAlpha:{active:[.3,1],inactive:[0,0]},opacity:{active:[.3,1],inactive:[0,0]},symbol:{active:["circle","roundRect","diamond"],inactive:["none"]},symbolSize:{active:[10,50],inactive:[0,0]}},ts=Xu,La=qe.mapVisual,$u=qe.eachVisual,ju=$e,Ra=te,qu=Wo,Zu=Zt,Ku=function(e){yr(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.stateList=["inRange","outOfRange"],r.replacableOptionKeys=["inRange","outOfRange","target","controller","color"],r.layoutMode={type:"box",ignoreSize:!0},r.dataBound=[-1/0,1/0],r.targetVisuals={},r.controllerVisuals={},r}return t.prototype.init=function(r,i,n){this.mergeDefaultAndTheme(r,n)},t.prototype.optionUpdated=function(r,i){var n=this.option;!i&&Gu(n,r,this.replacableOptionKeys),this.textStyleModel=this.getModel("textStyle"),this.resetItemSize(),this.completeVisualOption()},t.prototype.resetVisual=function(r){var i=this.stateList;r=xt(r,this),this.controllerVisuals=Ca(this.option.controller,i,r),this.targetVisuals=Ca(this.option.target,i,r)},t.prototype.getItemSymbol=function(){return null},t.prototype.getTargetSeriesIndices=function(){var r=this.option.seriesIndex,i=[];return r==null||r==="all"?this.ecModel.eachSeries(function(n,a){i.push(a)}):i=Rl(r),i},t.prototype.eachTargetSeries=function(r,i){te(this.getTargetSeriesIndices(),function(n){var a=this.ecModel.getSeriesByIndex(n);a&&r.call(i,a)},this)},t.prototype.isTargetSeries=function(r){var i=!1;return this.eachTargetSeries(function(n){n===r&&(i=!0)}),i},t.prototype.formatValueText=function(r,i,n){var a=this.option,o=a.precision,s=this.dataBound,l=a.formatter,u;n=n||["<",">"],$e(r)&&(r=r.slice(),u=!0);var h=i?r:u?[c(r[0]),c(r[1])]:c(r);if(Go(l))return l.replace("{value}",u?h[0]:h).replace("{value2}",u?h[1]:h);if(Cn(l))return u?l(r[0],r[1]):l(r);if(u)return r[0]===s[0]?n[0]+" "+h[1]:r[1]===s[1]?n[1]+" "+h[0]:h[0]+" - "+h[1];return h;function c(d){return d===s[0]?"min":d===s[1]?"max":(+d).toFixed(Math.min(o,20))}},t.prototype.resetExtent=function(){var r=this.option,i=qu([r.min,r.max]);this._dataExtent=i},t.prototype.getDataDimensionIndex=function(r){var i=this.option.dimension;if(i!=null)return r.getDimensionIndex(i);for(var n=r.dimensions,a=n.length-1;a>=0;a--){var o=n[a],s=r.getDimensionInfo(o);if(!s.isCalculationCoord)return s.storeDimIndex}},t.prototype.getExtent=function(){return this._dataExtent.slice()},t.prototype.completeVisualOption=function(){var r=this.ecModel,i=this.option,n={inRange:i.inRange,outOfRange:i.outOfRange},a=i.target||(i.target={}),o=i.controller||(i.controller={});We(a,n),We(o,n);var s=this.isCategory();l.call(this,a),l.call(this,o),u.call(this,a,"inRange","outOfRange"),h.call(this,o);function l(c){ju(i.color)&&!c.inRange&&(c.inRange={color:i.color.slice().reverse()}),c.inRange=c.inRange||{color:r.get("gradientColor")}}function u(c,d,f){var v=c[d],p=c[f];v&&!p&&(p=c[f]={},Ra(v,function(_,m){if(!!qe.isValidType(m)){var y=ts.get(m,"inactive",s);y!=null&&(p[m]=y,m==="color"&&!p.hasOwnProperty("opacity")&&!p.hasOwnProperty("colorAlpha")&&(p.opacity=[0,0]))}}))}function h(c){var d=(c.inRange||{}).symbol||(c.outOfRange||{}).symbol,f=(c.inRange||{}).symbolSize||(c.outOfRange||{}).symbolSize,v=this.get("inactiveColor"),p=this.getItemSymbol(),_=p||"roundRect";Ra(this.stateList,function(m){var y=this.itemSize,g=c[m];g||(g=c[m]={color:s?v:[v]}),g.symbol==null&&(g.symbol=d&&ft(d)||(s?_:[_])),g.symbolSize==null&&(g.symbolSize=f&&ft(f)||(s?y[0]:[y[0],y[0]])),g.symbol=La(g.symbol,function(S){return S==="none"?_:S});var x=g.symbolSize;if(x!=null){var E=-1/0;$u(x,function(S){S>E&&(E=S)}),g.symbolSize=La(x,function(S){return Zu(S,[0,E],[0,y[0]],!0)})}},this)}},t.prototype.resetItemSize=function(){this.itemSize=[parseFloat(this.get("itemWidth")),parseFloat(this.get("itemHeight"))]},t.prototype.isCategory=function(){return!!this.option.categories},t.prototype.setSelected=function(r){},t.prototype.getSelected=function(){return null},t.prototype.getValueState=function(r){return null},t.prototype.getVisualMeta=function(r){return null},t.type="visualMap",t.dependencies=["series"],t.defaultOption={show:!0,z:4,seriesIndex:"all",min:0,max:200,left:0,right:null,top:null,bottom:0,itemWidth:null,itemHeight:null,inverse:!1,orient:"vertical",backgroundColor:"rgba(0,0,0,0)",borderColor:"#ccc",contentColor:"#5793f3",inactiveColor:"#aaa",borderWidth:0,padding:5,textGap:10,precision:0,textStyle:{color:"#333"}},t}(Zn),Mi=Ku,Pa=[20,140],Qu=function(e){yr(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r}return t.prototype.optionUpdated=function(r,i){e.prototype.optionUpdated.apply(this,arguments),this.resetExtent(),this.resetVisual(function(n){n.mappingMethod="linear",n.dataExtent=this.getExtent()}),this._resetRange()},t.prototype.resetItemSize=function(){e.prototype.resetItemSize.apply(this,arguments);var r=this.itemSize;(r[0]==null||isNaN(r[0]))&&(r[0]=Pa[0]),(r[1]==null||isNaN(r[1]))&&(r[1]=Pa[1])},t.prototype._resetRange=function(){var r=this.getExtent(),i=this.option.range;!i||i.auto?(r.auto=1,this.option.range=r):$e(i)&&(i[0]>i[1]&&i.reverse(),i[0]=Math.max(i[0],r[0]),i[1]=Math.min(i[1],r[1]))},t.prototype.completeVisualOption=function(){e.prototype.completeVisualOption.apply(this,arguments),te(this.stateList,function(r){var i=this.option.controller[r].symbolSize;i&&i[0]!==i[1]&&(i[0]=i[1]/3)},this)},t.prototype.setSelected=function(r){this.option.range=r.slice(),this._resetRange()},t.prototype.getSelected=function(){var r=this.getExtent(),i=Wo((this.get("range")||[]).slice());return i[0]>r[1]&&(i[0]=r[1]),i[1]>r[1]&&(i[1]=r[1]),i[0]<r[0]&&(i[0]=r[0]),i[1]<r[0]&&(i[1]=r[0]),i},t.prototype.getValueState=function(r){var i=this.option.range,n=this.getExtent();return(i[0]<=n[0]||i[0]<=r)&&(i[1]>=n[1]||r<=i[1])?"inRange":"outOfRange"},t.prototype.findTargetDataIndices=function(r){var i=[];return this.eachTargetSeries(function(n){var a=[],o=n.getData();o.each(this.getDataDimensionIndex(o),function(s,l){r[0]<=s&&s<=r[1]&&a.push(l)},this),i.push({seriesId:n.id,dataIndex:a})},this),i},t.prototype.getVisualMeta=function(r){var i=Da(this,"outOfRange",this.getExtent()),n=Da(this,"inRange",this.option.range.slice()),a=[];function o(f,v){a.push({value:f,color:r(f,v)})}for(var s=0,l=0,u=n.length,h=i.length;l<h&&(!n.length||i[l]<=n[0]);l++)i[l]<n[s]&&o(i[l],"outOfRange");for(var c=1;s<u;s++,c=0)c&&a.length&&o(n[s],"outOfRange"),o(n[s],"inRange");for(var c=1;l<h;l++)(!n.length||n[n.length-1]<i[l])&&(c&&(a.length&&o(a[a.length-1].value,"outOfRange"),c=0),o(i[l],"outOfRange"));var d=a.length;return{stops:a,outerColors:[d?a[0].color:"transparent",d?a[d-1].color:"transparent"]}},t.type="visualMap.continuous",t.defaultOption=Xo(Mi.defaultOption,{align:"auto",calculable:!1,hoverLink:!0,realtime:!0,handleIcon:"path://M-11.39,9.77h0a3.5,3.5,0,0,1-3.5,3.5h-22a3.5,3.5,0,0,1-3.5-3.5h0a3.5,3.5,0,0,1,3.5-3.5h22A3.5,3.5,0,0,1-11.39,9.77Z",handleSize:"120%",handleStyle:{borderColor:"#fff",borderWidth:1},indicatorIcon:"circle",indicatorSize:"50%",indicatorStyle:{borderColor:"#fff",borderWidth:2,shadowBlur:2,shadowOffsetX:1,shadowOffsetY:1,shadowColor:"rgba(0,0,0,0.2)"}}),t}(Mi);function Da(e,t,r){if(r[0]===r[1])return r.slice();for(var i=200,n=(r[1]-r[0])/i,a=r[0],o=[],s=0;s<=i&&a<r[1];s++)o.push(a),a+=n;return o.push(r[1]),o}var Ju=Qu,eh=function(e){yr(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r.autoPositionValues={left:1,right:1,top:1,bottom:1},r}return t.prototype.init=function(r,i){this.ecModel=r,this.api=i},t.prototype.render=function(r,i,n,a){if(this.visualMapModel=r,r.get("show")===!1){this.group.removeAll();return}this.doRender(r,i,n,a)},t.prototype.renderBackground=function(r){var i=this.visualMapModel,n=Pl(i.get("padding")||0),a=r.getBoundingRect();r.add(new Fi({z2:-1,silent:!0,shape:{x:a.x-n[3],y:a.y-n[0],width:a.width+n[3]+n[1],height:a.height+n[0]+n[2]},style:{fill:i.get("backgroundColor"),stroke:i.get("borderColor"),lineWidth:i.get("borderWidth")}}))},t.prototype.getControllerVisual=function(r,i,n){n=n||{};var a=n.forceState,o=this.visualMapModel,s={};if(i==="color"){var l=o.get("contentColor");s.color=l}function u(f){return s[f]}function h(f,v){s[f]=v}var c=o.controllerVisuals[a||o.getValueState(r)],d=qe.prepareVisualTypes(c);return te(d,function(f){var v=c[f];n.convertOpacityToAlpha&&f==="opacity"&&(f="colorAlpha",v=c.__alphaForOpacity),qe.dependsOn(f,i)&&v&&v.applyVisual(r,u,h)}),s[i]},t.prototype.positionGroup=function(r){var i=this.visualMapModel,n=this.api;Dl(r,i.getBoxLayoutParams(),{width:n.getWidth(),height:n.getHeight()})},t.prototype.doRender=function(r,i,n,a){},t.type="visualMap",t}(Yo),rs=eh,Na=[["left","right","width"],["top","bottom","height"]];function is(e,t,r){var i=e.option,n=i.align;if(n!=null&&n!=="auto")return n;for(var a={width:t.getWidth(),height:t.getHeight()},o=i.orient==="horizontal"?1:0,s=Na[o],l=[0,null,10],u={},h=0;h<3;h++)u[Na[1-o][h]]=l[h],u[s[h]]=h===2?r[0]:i[s[h]];var c=[["x","width",3],["y","height",0]][o],d=$o(u,a,i.padding);return s[(d.margin[c[2]]||0)+d[c[0]]+d[c[1]]*.5<a[c[1]]*.5?0:1]}function _i(e,t){return te(e||[],function(r){r.dataIndex!=null&&(r.dataIndexInside=r.dataIndex,r.dataIndex=null),r.highlightKey="visualMap"+(t?t.componentIndex:"")}),e}var mt=Zt,th=te,Ia=Math.min,rn=Math.max,rh=12,ih=6,nh=function(e){yr(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r._shapes={},r._dataInterval=[],r._handleEnds=[],r._hoverLinkDataIndices=[],r}return t.prototype.doRender=function(r,i,n,a){this._api=n,(!a||a.type!=="selectDataRange"||a.from!==this.uid)&&this._buildView()},t.prototype._buildView=function(){this.group.removeAll();var r=this.visualMapModel,i=this.group;this._orient=r.get("orient"),this._useHandle=r.get("calculable"),this._resetInterval(),this._renderBar(i);var n=r.get("text");this._renderEndsText(i,n,0),this._renderEndsText(i,n,1),this._updateView(!0),this.renderBackground(i),this._updateView(),this._enableHoverLinkToSeries(),this._enableHoverLinkFromSeries(),this.positionGroup(i)},t.prototype._renderEndsText=function(r,i,n){if(!!i){var a=i[1-n];a=a!=null?a+"":"";var o=this.visualMapModel,s=o.get("textGap"),l=o.itemSize,u=this._shapes.mainGroup,h=this._applyTransform([l[0]/2,n===0?-s:l[1]+s],u),c=this._applyTransform(n===0?"bottom":"top",u),d=this._orient,f=this.visualMapModel.textStyleModel;this.group.add(new It({style:{x:h[0],y:h[1],verticalAlign:d==="horizontal"?"middle":c,align:d==="horizontal"?c:"center",text:a,font:f.getFont(),fill:f.getTextColor()}}))}},t.prototype._renderBar=function(r){var i=this.visualMapModel,n=this._shapes,a=i.itemSize,o=this._orient,s=this._useHandle,l=is(i,this.api,a),u=n.mainGroup=this._createBarGroup(l),h=new Ai;u.add(h),h.add(n.outOfRange=Oa()),h.add(n.inRange=Oa(null,s?Fa(this._orient):null,xt(this._dragHandle,this,"all",!1),xt(this._dragHandle,this,"all",!0))),h.setClipPath(new Fi({shape:{x:0,y:0,width:a[0],height:a[1],r:3}}));var c=i.textStyleModel.getTextRect("\u56FD"),d=rn(c.width,c.height);s&&(n.handleThumbs=[],n.handleLabels=[],n.handleLabelPoints=[],this._createHandle(i,u,0,a,d,o),this._createHandle(i,u,1,a,d,o)),this._createIndicator(i,u,a,d,o),r.add(u)},t.prototype._createHandle=function(r,i,n,a,o,s){var l=xt(this._dragHandle,this,n,!1),u=xt(this._dragHandle,this,n,!0),h=ga(r.get("handleSize"),a[0]),c=Pn(r.get("handleIcon"),-h/2,-h/2,h,h,null,!0),d=Fa(this._orient);c.attr({cursor:d,draggable:!0,drift:l,ondragend:u,onmousemove:function(m){Rn(m.event)}}),c.x=a[0]/2,c.useStyle(r.getModel("handleStyle").getItemStyle()),c.setStyle({strokeNoScale:!0,strokeFirst:!0}),c.style.lineWidth*=2,c.ensureState("emphasis").style=r.getModel(["emphasis","handleStyle"]).getItemStyle(),Il(c,!0),i.add(c);var f=this.visualMapModel.textStyleModel,v=new It({cursor:d,draggable:!0,drift:l,onmousemove:function(m){Rn(m.event)},ondragend:u,style:{x:0,y:0,text:"",font:f.getFont(),fill:f.getTextColor()}});v.ensureState("blur").style={opacity:.1},v.stateTransition={duration:200},this.group.add(v);var p=[h,0],_=this._shapes;_.handleThumbs[n]=c,_.handleLabelPoints[n]=p,_.handleLabels[n]=v},t.prototype._createIndicator=function(r,i,n,a,o){var s=ga(r.get("indicatorSize"),n[0]),l=Pn(r.get("indicatorIcon"),-s/2,-s/2,s,s,null,!0);l.attr({cursor:"move",invisible:!0,silent:!0,x:n[0]/2});var u=r.getModel("indicatorStyle").getItemStyle();if(l instanceof jo){var h=l.style;l.useStyle(ko({image:h.image,x:h.x,y:h.y,width:h.width,height:h.height},u))}else l.useStyle(u);i.add(l);var c=this.visualMapModel.textStyleModel,d=new It({silent:!0,invisible:!0,style:{x:0,y:0,text:"",font:c.getFont(),fill:c.getTextColor()}});this.group.add(d);var f=[(o==="horizontal"?a/2:ih)+n[0]/2,0],v=this._shapes;v.indicator=l,v.indicatorLabel=d,v.indicatorLabelPoint=f,this._firstShowIndicator=!0},t.prototype._dragHandle=function(r,i,n,a){if(!!this._useHandle){if(this._dragging=!i,!i){var o=this._applyTransform([n,a],this._shapes.mainGroup,!0);this._updateInterval(r,o[1]),this._hideIndicator(),this._updateView()}i===!this.visualMapModel.get("realtime")&&this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:this._dataInterval.slice()}),i?!this._hovering&&this._clearHoverLinkToSeries():Ba(this.visualMapModel)&&this._doHoverLinkToSeries(this._handleEnds[r],!1)}},t.prototype._resetInterval=function(){var r=this.visualMapModel,i=this._dataInterval=r.getSelected(),n=r.getExtent(),a=[0,r.itemSize[1]];this._handleEnds=[mt(i[0],n,a,!0),mt(i[1],n,a,!0)]},t.prototype._updateInterval=function(r,i){i=i||0;var n=this.visualMapModel,a=this._handleEnds,o=[0,n.itemSize[1]];ku(i,a,o,r,0);var s=n.getExtent();this._dataInterval=[mt(a[0],o,s,!0),mt(a[1],o,s,!0)]},t.prototype._updateView=function(r){var i=this.visualMapModel,n=i.getExtent(),a=this._shapes,o=[0,i.itemSize[1]],s=r?o:this._handleEnds,l=this._createBarVisual(this._dataInterval,n,s,"inRange"),u=this._createBarVisual(n,n,o,"outOfRange");a.inRange.setStyle({fill:l.barColor}).setShape("points",l.barPoints),a.outOfRange.setStyle({fill:u.barColor}).setShape("points",u.barPoints),this._updateHandle(s,l)},t.prototype._createBarVisual=function(r,i,n,a){var o={forceState:a,convertOpacityToAlpha:!0},s=this._makeColorGradient(r,o),l=[this.getControllerVisual(r[0],"symbolSize",o),this.getControllerVisual(r[1],"symbolSize",o)],u=this._createBarPoints(n,l);return{barColor:new Ol(0,0,0,1,s),barPoints:u,handlesColor:[s[0].color,s[s.length-1].color]}},t.prototype._makeColorGradient=function(r,i){var n=100,a=[],o=(r[1]-r[0])/n;a.push({color:this.getControllerVisual(r[0],"color",i),offset:0});for(var s=1;s<n;s++){var l=r[0]+o*s;if(l>r[1])break;a.push({color:this.getControllerVisual(l,"color",i),offset:s/n})}return a.push({color:this.getControllerVisual(r[1],"color",i),offset:1}),a},t.prototype._createBarPoints=function(r,i){var n=this.visualMapModel.itemSize;return[[n[0]-i[0],r[0]],[n[0],r[0]],[n[0],r[1]],[n[0]-i[1],r[1]]]},t.prototype._createBarGroup=function(r){var i=this._orient,n=this.visualMapModel.get("inverse");return new Ai(i==="horizontal"&&!n?{scaleX:r==="bottom"?1:-1,rotation:Math.PI/2}:i==="horizontal"&&n?{scaleX:r==="bottom"?-1:1,rotation:-Math.PI/2}:i==="vertical"&&!n?{scaleX:r==="left"?1:-1,scaleY:-1}:{scaleX:r==="left"?1:-1})},t.prototype._updateHandle=function(r,i){if(!!this._useHandle){var n=this._shapes,a=this.visualMapModel,o=n.handleThumbs,s=n.handleLabels,l=a.itemSize,u=a.getExtent();th([0,1],function(h){var c=o[h];c.setStyle("fill",i.handlesColor[h]),c.y=r[h];var d=mt(r[h],[0,l[1]],u,!0),f=this.getControllerVisual(d,"symbolSize");c.scaleX=c.scaleY=f/l[0],c.x=l[0]-f/2;var v=qi(n.handleLabelPoints[h],Zi(c,this.group));s[h].setStyle({x:v[0],y:v[1],text:a.formatValueText(this._dataInterval[h]),verticalAlign:"middle",align:this._orient==="vertical"?this._applyTransform("left",n.mainGroup):"center"})},this)}},t.prototype._showIndicator=function(r,i,n,a){var o=this.visualMapModel,s=o.getExtent(),l=o.itemSize,u=[0,l[1]],h=this._shapes,c=h.indicator;if(!!c){c.attr("invisible",!1);var d={convertOpacityToAlpha:!0},f=this.getControllerVisual(r,"color",d),v=this.getControllerVisual(r,"symbolSize"),p=mt(r,s,u,!0),_=l[0]-v/2,m={x:c.x,y:c.y};c.y=p,c.x=_;var y=qi(h.indicatorLabelPoint,Zi(c,this.group)),g=h.indicatorLabel;g.attr("invisible",!1);var x=this._applyTransform("left",h.mainGroup),E=this._orient,S=E==="horizontal";g.setStyle({text:(n||"")+o.formatValueText(i),verticalAlign:S?x:"middle",align:S?"center":x});var w={x:_,y:p,style:{fill:f}},b={style:{x:y[0],y:y[1]}};if(o.ecModel.isAnimationEnabled()&&!this._firstShowIndicator){var C={duration:100,easing:"cubicInOut",additive:!0};c.x=m.x,c.y=m.y,c.animateTo(w,C),g.animateTo(b,C)}else c.attr(w),g.attr(b);this._firstShowIndicator=!1;var O=this._shapes.handleLabels;if(O)for(var M=0;M<O.length;M++)this._api.enterBlur(O[M])}},t.prototype._enableHoverLinkToSeries=function(){var r=this;this._shapes.mainGroup.on("mousemove",function(i){if(r._hovering=!0,!r._dragging){var n=r.visualMapModel.itemSize,a=r._applyTransform([i.offsetX,i.offsetY],r._shapes.mainGroup,!0,!0);a[1]=Ia(rn(0,a[1]),n[1]),r._doHoverLinkToSeries(a[1],0<=a[0]&&a[0]<=n[0])}}).on("mouseout",function(){r._hovering=!1,!r._dragging&&r._clearHoverLinkToSeries()})},t.prototype._enableHoverLinkFromSeries=function(){var r=this.api.getZr();this.visualMapModel.option.hoverLink?(r.on("mouseover",this._hoverLinkFromSeriesMouseOver,this),r.on("mouseout",this._hideIndicator,this)):this._clearHoverLinkFromSeries()},t.prototype._doHoverLinkToSeries=function(r,i){var n=this.visualMapModel,a=n.itemSize;if(!!n.option.hoverLink){var o=[0,a[1]],s=n.getExtent();r=Ia(rn(o[0],r),o[1]);var l=ah(n,s,o),u=[r-l,r+l],h=mt(r,o,s,!0),c=[mt(u[0],o,s,!0),mt(u[1],o,s,!0)];u[0]<o[0]&&(c[0]=-1/0),u[1]>o[1]&&(c[1]=1/0),i&&(c[0]===-1/0?this._showIndicator(h,c[1],"< ",l):c[1]===1/0?this._showIndicator(h,c[0],"> ",l):this._showIndicator(h,h,"\u2248 ",l));var d=this._hoverLinkDataIndices,f=[];(i||Ba(n))&&(f=this._hoverLinkDataIndices=n.findTargetDataIndices(c));var v=Bl(d,f);this._dispatchHighDown("downplay",_i(v[0],n)),this._dispatchHighDown("highlight",_i(v[1],n))}},t.prototype._hoverLinkFromSeriesMouseOver=function(r){var i=r.target,n=this.visualMapModel;if(!(!i||dr(i).dataIndex==null)){var a=dr(i),o=this.ecModel.getSeriesByIndex(a.seriesIndex);if(!!n.isTargetSeries(o)){var s=o.getData(a.dataType),l=s.getStore().get(n.getDataDimensionIndex(s),a.dataIndex);isNaN(l)||this._showIndicator(l,l)}}},t.prototype._hideIndicator=function(){var r=this._shapes;r.indicator&&r.indicator.attr("invisible",!0),r.indicatorLabel&&r.indicatorLabel.attr("invisible",!0);var i=this._shapes.handleLabels;if(i)for(var n=0;n<i.length;n++)this._api.leaveBlur(i[n])},t.prototype._clearHoverLinkToSeries=function(){this._hideIndicator();var r=this._hoverLinkDataIndices;this._dispatchHighDown("downplay",_i(r,this.visualMapModel)),r.length=0},t.prototype._clearHoverLinkFromSeries=function(){this._hideIndicator();var r=this.api.getZr();r.off("mouseover",this._hoverLinkFromSeriesMouseOver),r.off("mouseout",this._hideIndicator)},t.prototype._applyTransform=function(r,i,n,a){var o=Zi(i,a?null:this.group);return $e(r)?qi(r,o,n):Fl(r,o,n)},t.prototype._dispatchHighDown=function(r,i){i&&i.length&&this.api.dispatchAction({type:r,batch:i})},t.prototype.dispose=function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},t.prototype.remove=function(){this._clearHoverLinkFromSeries(),this._clearHoverLinkToSeries()},t.type="visualMap.continuous",t}(rs);function Oa(e,t,r,i){return new Nl({shape:{points:e},draggable:!!r,cursor:t,drift:r,onmousemove:function(n){Rn(n.event)},ondragend:i})}function ah(e,t,r){var i=rh/2,n=e.get("hoverLinkDataSize");return n&&(i=mt(n,t,r,!0)/2),i}function Ba(e){var t=e.get("hoverLinkOnHandle");return!!(t==null?e.get("realtime"):t)}function Fa(e){return e==="vertical"?"ns-resize":"ew-resize"}var oh=nh,sh={type:"selectDataRange",event:"dataRangeSelected",update:"update"},lh=function(e,t){t.eachComponent({mainType:"visualMap",query:e},function(r){r.setSelected(e.selected)})},uh=[{createOnAllSeries:!0,reset:function(e,t){var r=[];return t.eachComponent("visualMap",function(i){var n=e.pipelineContext;!i.isTargetSeries(e)||n&&n.large||r.push(Wu(i.stateList,i.targetVisuals,xt(i.getValueState,i),i.getDataDimensionIndex(e.getData())))}),r}},{createOnAllSeries:!0,reset:function(e,t){var r=e.getData(),i=[];t.eachComponent("visualMap",function(n){if(n.isTargetSeries(e)){var a=n.getVisualMeta(xt(hh,null,e,n))||{stops:[],outerColors:[]},o=n.getDataDimensionIndex(r);o>=0&&(a.dimension=o,i.push(a))}}),e.getData().setVisual("visualMeta",i)}}];function hh(e,t,r,i){for(var n=t.targetVisuals[i],a=qe.prepareVisualTypes(n),o={color:Ul(e.getData(),"color")},s=0,l=a.length;s<l;s++){var u=a[s],h=n[u==="opacity"?"__alphaForOpacity":u];h&&h.applyVisual(r,c,d)}return o.color;function c(f){return o[f]}function d(f,v){o[f]=v}}var Ua=te;function ch(e){var t=e&&e.visualMap;$e(t)||(t=t?[t]:[]),Ua(t,function(r){if(!!r){rr(r,"splitList")&&!rr(r,"pieces")&&(r.pieces=r.splitList,delete r.splitList);var i=r.pieces;i&&$e(i)&&Ua(i,function(n){At(n)&&(rr(n,"start")&&!rr(n,"min")&&(n.min=n.start),rr(n,"end")&&!rr(n,"max")&&(n.max=n.end))})}})}function rr(e,t){return e&&e.hasOwnProperty&&e.hasOwnProperty(t)}var Ha=!1;function ns(e){Ha||(Ha=!0,e.registerSubTypeDefaulter("visualMap",function(t){return!t.categories&&(!(t.pieces?t.pieces.length>0:t.splitNumber>0)||t.calculable)?"continuous":"piecewise"}),e.registerAction(sh,lh),te(uh,function(t){e.registerVisual(e.PRIORITY.VISUAL.COMPONENT,t)}),e.registerPreprocessor(ch))}function fh(e){e.registerComponentModel(Ju),e.registerComponentView(oh),ns(e)}var dh=function(e){yr(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r._pieceList=[],r}return t.prototype.optionUpdated=function(r,i){e.prototype.optionUpdated.apply(this,arguments),this.resetExtent();var n=this._mode=this._determineMode();this._pieceList=[],vh[this._mode].call(this,this._pieceList),this._resetSelected(r,i);var a=this.option.categories;this.resetVisual(function(o,s){n==="categories"?(o.mappingMethod="category",o.categories=ft(a)):(o.dataExtent=this.getExtent(),o.mappingMethod="piecewise",o.pieceList=Ir(this._pieceList,function(l){return l=ft(l),s!=="inRange"&&(l.visual=null),l}))})},t.prototype.completeVisualOption=function(){var r=this.option,i={},n=qe.listVisualTypes(),a=this.isCategory();te(r.pieces,function(s){te(n,function(l){s.hasOwnProperty(l)&&(i[l]=1)})}),te(i,function(s,l){var u=!1;te(this.stateList,function(h){u=u||o(r,h,l)||o(r.target,h,l)},this),!u&&te(this.stateList,function(h){(r[h]||(r[h]={}))[l]=ts.get(l,h==="inRange"?"active":"inactive",a)})},this);function o(s,l,u){return s&&s[l]&&s[l].hasOwnProperty(u)}e.prototype.completeVisualOption.apply(this,arguments)},t.prototype._resetSelected=function(r,i){var n=this.option,a=this._pieceList,o=(i?n:r).selected||{};if(n.selected=o,te(a,function(l,u){var h=this.getSelectedMapKey(l);o.hasOwnProperty(h)||(o[h]=!0)},this),n.selectedMode==="single"){var s=!1;te(a,function(l,u){var h=this.getSelectedMapKey(l);o[h]&&(s?o[h]=!1:s=!0)},this)}},t.prototype.getItemSymbol=function(){return this.get("itemSymbol")},t.prototype.getSelectedMapKey=function(r){return this._mode==="categories"?r.value+"":r.index+""},t.prototype.getPieceList=function(){return this._pieceList},t.prototype._determineMode=function(){var r=this.option;return r.pieces&&r.pieces.length>0?"pieces":this.option.categories?"categories":"splitNumber"},t.prototype.setSelected=function(r){this.option.selected=ft(r)},t.prototype.getValueState=function(r){var i=qe.findPieceIndex(r,this._pieceList);return i!=null&&this.option.selected[this.getSelectedMapKey(this._pieceList[i])]?"inRange":"outOfRange"},t.prototype.findTargetDataIndices=function(r){var i=[],n=this._pieceList;return this.eachTargetSeries(function(a){var o=[],s=a.getData();s.each(this.getDataDimensionIndex(s),function(l,u){var h=qe.findPieceIndex(l,n);h===r&&o.push(u)},this),i.push({seriesId:a.id,dataIndex:o})},this),i},t.prototype.getRepresentValue=function(r){var i;if(this.isCategory())i=r.value;else if(r.value!=null)i=r.value;else{var n=r.interval||[];i=n[0]===-1/0&&n[1]===1/0?0:(n[0]+n[1])/2}return i},t.prototype.getVisualMeta=function(r){if(this.isCategory())return;var i=[],n=["",""],a=this;function o(h,c){var d=a.getRepresentValue({interval:h});c||(c=a.getValueState(d));var f=r(d,c);h[0]===-1/0?n[0]=f:h[1]===1/0?n[1]=f:i.push({value:h[0],color:f},{value:h[1],color:f})}var s=this._pieceList.slice();if(!s.length)s.push({interval:[-1/0,1/0]});else{var l=s[0].interval[0];l!==-1/0&&s.unshift({interval:[-1/0,l]}),l=s[s.length-1].interval[1],l!==1/0&&s.push({interval:[l,1/0]})}var u=-1/0;return te(s,function(h){var c=h.interval;c&&(c[0]>u&&o([u,c[0]],"outOfRange"),o(c.slice()),u=c[1])},this),{stops:i,outerColors:n}},t.type="visualMap.piecewise",t.defaultOption=Xo(Mi.defaultOption,{selected:null,minOpen:!1,maxOpen:!1,align:"auto",itemWidth:20,itemHeight:14,itemSymbol:"roundRect",pieces:null,categories:null,splitNumber:5,selectedMode:"multiple",itemGap:10,hoverLink:!0}),t}(Mi),vh={splitNumber:function(e){var t=this.option,r=Math.min(t.precision,20),i=this.getExtent(),n=t.splitNumber;n=Math.max(parseInt(n,10),1),t.splitNumber=n;for(var a=(i[1]-i[0])/n;+a.toFixed(r)!==a&&r<5;)r++;t.precision=r,a=+a.toFixed(r),t.minOpen&&e.push({interval:[-1/0,i[0]],close:[0,0]});for(var o=0,s=i[0];o<n;s+=a,o++){var l=o===n-1?i[1]:s+a;e.push({interval:[s,l],close:[1,1]})}t.maxOpen&&e.push({interval:[i[1],1/0],close:[0,0]}),ya(e),te(e,function(u,h){u.index=h,u.text=this.formatValueText(u.interval)},this)},categories:function(e){var t=this.option;te(t.categories,function(r){e.push({text:this.formatValueText(r,!0),value:r})},this),za(t,e)},pieces:function(e){var t=this.option;te(t.pieces,function(r,i){At(r)||(r={value:r});var n={text:"",index:i};if(r.label!=null&&(n.text=r.label),r.hasOwnProperty("value")){var a=n.value=r.value;n.interval=[a,a],n.close=[1,1]}else{for(var o=n.interval=[],s=n.close=[0,0],l=[1,0,1],u=[-1/0,1/0],h=[],c=0;c<2;c++){for(var d=[["gte","gt","min"],["lte","lt","max"]][c],f=0;f<3&&o[c]==null;f++)o[c]=r[d[f]],s[c]=l[f],h[c]=f===2;o[c]==null&&(o[c]=u[c])}h[0]&&o[1]===1/0&&(s[0]=0),h[1]&&o[0]===-1/0&&(s[1]=0),o[0]===o[1]&&s[0]&&s[1]&&(n.value=o[0])}n.visual=qe.retrieveVisuals(r),e.push(n)},this),za(t,e),ya(e),te(e,function(r){var i=r.close,n=[["<","\u2264"][i[1]],[">","\u2265"][i[0]]];r.text=r.text||this.formatValueText(r.value!=null?r.value:r.interval,!1,n)},this)}};function za(e,t){var r=e.inverse;(e.orient==="vertical"?!r:r)&&t.reverse()}var ph=dh,_h=function(e){yr(t,e);function t(){var r=e!==null&&e.apply(this,arguments)||this;return r.type=t.type,r}return t.prototype.doRender=function(){var r=this.group;r.removeAll();var i=this.visualMapModel,n=i.get("textGap"),a=i.textStyleModel,o=a.getFont(),s=a.getTextColor(),l=this._getItemAlign(),u=i.itemSize,h=this._getViewData(),c=h.endsText,d=Hl(i.get("showLabel",!0),!c);c&&this._renderEndsText(r,c[0],u,d,l),te(h.viewPieceList,function(f){var v=f.piece,p=new Ai;p.onclick=xt(this._onItemClick,this,v),this._enableHoverLink(p,f.indexInModelPieceList);var _=i.getRepresentValue(v);if(this._createItemSymbol(p,_,[0,0,u[0],u[1]]),d){var m=this.visualMapModel.getValueState(_);p.add(new It({style:{x:l==="right"?-n:u[0]+n,y:u[1]/2,text:v.text,verticalAlign:"middle",align:l,font:o,fill:s,opacity:m==="outOfRange"?.5:1}}))}r.add(p)},this),c&&this._renderEndsText(r,c[1],u,d,l),zl(i.get("orient"),r,i.get("itemGap")),this.renderBackground(r),this.positionGroup(r)},t.prototype._enableHoverLink=function(r,i){var n=this;r.on("mouseover",function(){return a("highlight")}).on("mouseout",function(){return a("downplay")});var a=function(o){var s=n.visualMapModel;s.option.hoverLink&&n.api.dispatchAction({type:o,batch:_i(s.findTargetDataIndices(i),s)})}},t.prototype._getItemAlign=function(){var r=this.visualMapModel,i=r.option;if(i.orient==="vertical")return is(r,this.api,r.itemSize);var n=i.align;return(!n||n==="auto")&&(n="left"),n},t.prototype._renderEndsText=function(r,i,n,a,o){if(!!i){var s=new Ai,l=this.visualMapModel.textStyleModel;s.add(new It({style:{x:a?o==="right"?n[0]:0:n[0]/2,y:n[1]/2,verticalAlign:"middle",align:a?o:"center",text:i,font:l.getFont(),fill:l.getTextColor()}})),r.add(s)}},t.prototype._getViewData=function(){var r=this.visualMapModel,i=Ir(r.getPieceList(),function(s,l){return{piece:s,indexInModelPieceList:l}}),n=r.get("text"),a=r.get("orient"),o=r.get("inverse");return(a==="horizontal"?o:!o)?i.reverse():n&&(n=n.slice().reverse()),{viewPieceList:i,endsText:n}},t.prototype._createItemSymbol=function(r,i,n){r.add(Pn(this.getControllerVisual(i,"symbol"),n[0],n[1],n[2],n[3],this.getControllerVisual(i,"color")))},t.prototype._onItemClick=function(r){var i=this.visualMapModel,n=i.option,a=ft(n.selected),o=i.getSelectedMapKey(r);n.selectedMode==="single"?(a[o]=!0,te(a,function(s,l){a[l]=l===o})):a[o]=!a[o],this.api.dispatchAction({type:"selectDataRange",from:this.uid,visualMapId:this.visualMapModel.id,selected:a})},t.type="visualMap.piecewise",t}(rs),mh=_h;function gh(e){e.registerComponentModel(ph),e.registerComponentView(mh),ns(e)}function yh(e){Or(fh),Or(gh)}Or([Jo,Vl]);Or(Pu);function Va(e,t,r){typeof t=="object"&&(r=t,t=null);var i=this,n;if(!(e instanceof Function)){n=[];for(var a in e)e.hasOwnProperty(a)&&n.push(a)}var o=function(l){if(i.apply(this,arguments),e instanceof Function?ka(this,e.call(this,l)):xh(this,e,n),this.constructor===o)for(var u=o.__initializers__,h=0;h<u.length;h++)u[h].apply(this,arguments)};o.__super__=i,i.__initializers__?o.__initializers__=i.__initializers__.slice():o.__initializers__=[],t&&o.__initializers__.push(t);var s=function(){};return s.prototype=i.prototype,o.prototype=new s,o.prototype.constructor=o,ka(o.prototype,r),o.extend=i.extend,o.derive=i.extend,o}function ka(e,t){if(!!t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])}function xh(e,t,r){for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}}var Th={extend:Va,derive:Va};function Eh(e,t){this.action=e,this.context=t}var Sh={trigger:function(e){if(!!this.hasOwnProperty("__handlers__")&&!!this.__handlers__.hasOwnProperty(e)){var t=this.__handlers__[e],r=t.length,i=-1,n=arguments;switch(n.length){case 1:for(;++i<r;)t[i].action.call(t[i].context);return;case 2:for(;++i<r;)t[i].action.call(t[i].context,n[1]);return;case 3:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2]);return;case 4:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3]);return;case 5:for(;++i<r;)t[i].action.call(t[i].context,n[1],n[2],n[3],n[4]);return;default:for(;++i<r;)t[i].action.apply(t[i].context,Array.prototype.slice.call(n,1));return}}},on:function(e,t,r){if(!(!e||!t)){var i=this.__handlers__||(this.__handlers__={});if(!i[e])i[e]=[];else if(this.has(e,t))return;var n=new Eh(t,r||this);return i[e].push(n),this}},once:function(e,t,r){if(!e||!t)return;var i=this;function n(){i.off(e,n),t.apply(this,arguments)}return this.on(e,n,r)},before:function(e,t,r){if(!(!e||!t))return e="before"+e,this.on(e,t,r)},after:function(e,t,r){if(!(!e||!t))return e="after"+e,this.on(e,t,r)},success:function(e,t){return this.once("success",e,t)},error:function(e,t){return this.once("error",e,t)},off:function(e,t){var r=this.__handlers__||(this.__handlers__={});if(!t){r[e]=[];return}if(r[e]){for(var i=r[e],n=[],a=0;a<i.length;a++)t&&i[a].action!==t&&n.push(i[a]);r[e]=n}return this},has:function(e,t){var r=this.__handlers__;if(!r||!r[e])return!1;for(var i=r[e],n=0;n<i.length;n++)if(i[n].action===t)return!0}},Qn=Sh,bh=0,Ah=Array.prototype,wh=Ah.forEach,Rr={genGUID:function(){return++bh},relative2absolute:function(e,t){if(!t||e.match(/^\//))return e;for(var r=e.split("/"),i=t.split("/"),n=r[0];n==="."||n==="..";)n===".."&&i.pop(),r.shift(),n=r[0];return i.join("/")+"/"+r.join("/")},extend:function(e,t){if(t)for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r]);return e},defaults:function(e,t){if(t)for(var r in t)e[r]===void 0&&(e[r]=t[r]);return e},extendWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]=t[n]}return e},defaultsWithPropList:function(e,t,r){if(t)for(var i=0;i<r.length;i++){var n=r[i];e[n]==null&&(e[n]=t[n])}return e},each:function(e,t,r){if(!!(e&&t))if(e.forEach&&e.forEach===wh)e.forEach(t,r);else if(e.length===+e.length)for(var i=0,n=e.length;i<n;i++)t.call(r,e[i],i,e);else for(var a in e)e.hasOwnProperty(a)&&t.call(r,e[a],a,e)},isObject:function(e){return e===Object(e)},isArray:function(e){return Array.isArray(e)},isArrayLike:function(e){return e?e.length===+e.length:!1},clone:function(e){if(Rr.isObject(e)){if(Rr.isArray(e))return e.slice();if(Rr.isArrayLike(e)){for(var t=new e.constructor(e.length),r=0;r<e.length;r++)t[r]=e[r];return t}else return Rr.extend({},e)}else return e}},Ie=Rr,Ui=function(){this.__uid__=Ie.genGUID()};Ui.__initializers__=[function(e){Ie.extend(this,e)}];Ie.extend(Ui,Th);Ie.extend(Ui.prototype,Qn);var Qe=Ui,Ga=["OES_texture_float","OES_texture_half_float","OES_texture_float_linear","OES_texture_half_float_linear","OES_standard_derivatives","OES_vertex_array_object","OES_element_index_uint","WEBGL_compressed_texture_s3tc","WEBGL_depth_texture","EXT_texture_filter_anisotropic","EXT_shader_texture_lod","WEBGL_draw_buffers","EXT_frag_depth","EXT_sRGB","ANGLE_instanced_arrays"],Wa=["MAX_TEXTURE_SIZE","MAX_CUBE_MAP_TEXTURE_SIZE"];function Mh(e){for(var t={},r={},i=0;i<Ga.length;i++){var n=Ga[i];o(n)}for(var i=0;i<Wa.length;i++){var a=Wa[i];r[a]=e.getParameter(e[a])}this.getExtension=function(s){return s in t||o(s),t[s]},this.getParameter=function(s){return r[s]};function o(s){if(e.getExtension){var l=e.getExtension(s);l||(l=e.getExtension("MOZ_"+s)),l||(l=e.getExtension("WEBKIT_"+s)),t[s]=l}}}var A={DEPTH_BUFFER_BIT:256,STENCIL_BUFFER_BIT:1024,COLOR_BUFFER_BIT:16384,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,ZERO:0,ONE:1,SRC_COLOR:768,ONE_MINUS_SRC_COLOR:769,SRC_ALPHA:770,ONE_MINUS_SRC_ALPHA:771,DST_ALPHA:772,ONE_MINUS_DST_ALPHA:773,DST_COLOR:774,ONE_MINUS_DST_COLOR:775,SRC_ALPHA_SATURATE:776,FUNC_ADD:32774,BLEND_EQUATION:32777,BLEND_EQUATION_RGB:32777,BLEND_EQUATION_ALPHA:34877,FUNC_SUBTRACT:32778,FUNC_REVERSE_SUBTRACT:32779,BLEND_DST_RGB:32968,BLEND_SRC_RGB:32969,BLEND_DST_ALPHA:32970,BLEND_SRC_ALPHA:32971,CONSTANT_COLOR:32769,ONE_MINUS_CONSTANT_COLOR:32770,CONSTANT_ALPHA:32771,ONE_MINUS_CONSTANT_ALPHA:32772,BLEND_COLOR:32773,ARRAY_BUFFER:34962,ELEMENT_ARRAY_BUFFER:34963,ARRAY_BUFFER_BINDING:34964,ELEMENT_ARRAY_BUFFER_BINDING:34965,STREAM_DRAW:35040,STATIC_DRAW:35044,DYNAMIC_DRAW:35048,BUFFER_SIZE:34660,BUFFER_USAGE:34661,CURRENT_VERTEX_ATTRIB:34342,FRONT:1028,BACK:1029,FRONT_AND_BACK:1032,CULL_FACE:2884,BLEND:3042,DITHER:3024,STENCIL_TEST:2960,DEPTH_TEST:2929,SCISSOR_TEST:3089,POLYGON_OFFSET_FILL:32823,SAMPLE_ALPHA_TO_COVERAGE:32926,SAMPLE_COVERAGE:32928,NO_ERROR:0,INVALID_ENUM:1280,INVALID_VALUE:1281,INVALID_OPERATION:1282,OUT_OF_MEMORY:1285,CW:2304,CCW:2305,LINE_WIDTH:2849,ALIASED_POINT_SIZE_RANGE:33901,ALIASED_LINE_WIDTH_RANGE:33902,CULL_FACE_MODE:2885,FRONT_FACE:2886,DEPTH_RANGE:2928,DEPTH_WRITEMASK:2930,DEPTH_CLEAR_VALUE:2931,DEPTH_FUNC:2932,STENCIL_CLEAR_VALUE:2961,STENCIL_FUNC:2962,STENCIL_FAIL:2964,STENCIL_PASS_DEPTH_FAIL:2965,STENCIL_PASS_DEPTH_PASS:2966,STENCIL_REF:2967,STENCIL_VALUE_MASK:2963,STENCIL_WRITEMASK:2968,STENCIL_BACK_FUNC:34816,STENCIL_BACK_FAIL:34817,STENCIL_BACK_PASS_DEPTH_FAIL:34818,STENCIL_BACK_PASS_DEPTH_PASS:34819,STENCIL_BACK_REF:36003,STENCIL_BACK_VALUE_MASK:36004,STENCIL_BACK_WRITEMASK:36005,VIEWPORT:2978,SCISSOR_BOX:3088,COLOR_CLEAR_VALUE:3106,COLOR_WRITEMASK:3107,UNPACK_ALIGNMENT:3317,PACK_ALIGNMENT:3333,MAX_TEXTURE_SIZE:3379,MAX_VIEWPORT_DIMS:3386,SUBPIXEL_BITS:3408,RED_BITS:3410,GREEN_BITS:3411,BLUE_BITS:3412,ALPHA_BITS:3413,DEPTH_BITS:3414,STENCIL_BITS:3415,POLYGON_OFFSET_UNITS:10752,POLYGON_OFFSET_FACTOR:32824,TEXTURE_BINDING_2D:32873,SAMPLE_BUFFERS:32936,SAMPLES:32937,SAMPLE_COVERAGE_VALUE:32938,SAMPLE_COVERAGE_INVERT:32939,COMPRESSED_TEXTURE_FORMATS:34467,DONT_CARE:4352,FASTEST:4353,NICEST:4354,GENERATE_MIPMAP_HINT:33170,BYTE:5120,UNSIGNED_BYTE:5121,SHORT:5122,UNSIGNED_SHORT:5123,INT:5124,UNSIGNED_INT:5125,FLOAT:5126,DEPTH_COMPONENT:6402,ALPHA:6406,RGB:6407,RGBA:6408,LUMINANCE:6409,LUMINANCE_ALPHA:6410,UNSIGNED_SHORT_4_4_4_4:32819,UNSIGNED_SHORT_5_5_5_1:32820,UNSIGNED_SHORT_5_6_5:33635,FRAGMENT_SHADER:35632,VERTEX_SHADER:35633,MAX_VERTEX_ATTRIBS:34921,MAX_VERTEX_UNIFORM_VECTORS:36347,MAX_VARYING_VECTORS:36348,MAX_COMBINED_TEXTURE_IMAGE_UNITS:35661,MAX_VERTEX_TEXTURE_IMAGE_UNITS:35660,MAX_TEXTURE_IMAGE_UNITS:34930,MAX_FRAGMENT_UNIFORM_VECTORS:36349,SHADER_TYPE:35663,DELETE_STATUS:35712,LINK_STATUS:35714,VALIDATE_STATUS:35715,ATTACHED_SHADERS:35717,ACTIVE_UNIFORMS:35718,ACTIVE_ATTRIBUTES:35721,SHADING_LANGUAGE_VERSION:35724,CURRENT_PROGRAM:35725,NEVER:512,LESS:513,EQUAL:514,LEQUAL:515,GREATER:516,NOTEQUAL:517,GEQUAL:518,ALWAYS:519,KEEP:7680,REPLACE:7681,INCR:7682,DECR:7683,INVERT:5386,INCR_WRAP:34055,DECR_WRAP:34056,VENDOR:7936,RENDERER:7937,VERSION:7938,NEAREST:9728,LINEAR:9729,NEAREST_MIPMAP_NEAREST:9984,LINEAR_MIPMAP_NEAREST:9985,NEAREST_MIPMAP_LINEAR:9986,LINEAR_MIPMAP_LINEAR:9987,TEXTURE_MAG_FILTER:10240,TEXTURE_MIN_FILTER:10241,TEXTURE_WRAP_S:10242,TEXTURE_WRAP_T:10243,TEXTURE_2D:3553,TEXTURE:5890,TEXTURE_CUBE_MAP:34067,TEXTURE_BINDING_CUBE_MAP:34068,TEXTURE_CUBE_MAP_POSITIVE_X:34069,TEXTURE_CUBE_MAP_NEGATIVE_X:34070,TEXTURE_CUBE_MAP_POSITIVE_Y:34071,TEXTURE_CUBE_MAP_NEGATIVE_Y:34072,TEXTURE_CUBE_MAP_POSITIVE_Z:34073,TEXTURE_CUBE_MAP_NEGATIVE_Z:34074,MAX_CUBE_MAP_TEXTURE_SIZE:34076,TEXTURE0:33984,TEXTURE1:33985,TEXTURE2:33986,TEXTURE3:33987,TEXTURE4:33988,TEXTURE5:33989,TEXTURE6:33990,TEXTURE7:33991,TEXTURE8:33992,TEXTURE9:33993,TEXTURE10:33994,TEXTURE11:33995,TEXTURE12:33996,TEXTURE13:33997,TEXTURE14:33998,TEXTURE15:33999,TEXTURE16:34e3,TEXTURE17:34001,TEXTURE18:34002,TEXTURE19:34003,TEXTURE20:34004,TEXTURE21:34005,TEXTURE22:34006,TEXTURE23:34007,TEXTURE24:34008,TEXTURE25:34009,TEXTURE26:34010,TEXTURE27:34011,TEXTURE28:34012,TEXTURE29:34013,TEXTURE30:34014,TEXTURE31:34015,ACTIVE_TEXTURE:34016,REPEAT:10497,CLAMP_TO_EDGE:33071,MIRRORED_REPEAT:33648,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,INT_VEC2:35667,INT_VEC3:35668,INT_VEC4:35669,BOOL:35670,BOOL_VEC2:35671,BOOL_VEC3:35672,BOOL_VEC4:35673,FLOAT_MAT2:35674,FLOAT_MAT3:35675,FLOAT_MAT4:35676,SAMPLER_2D:35678,SAMPLER_CUBE:35680,VERTEX_ATTRIB_ARRAY_ENABLED:34338,VERTEX_ATTRIB_ARRAY_SIZE:34339,VERTEX_ATTRIB_ARRAY_STRIDE:34340,VERTEX_ATTRIB_ARRAY_TYPE:34341,VERTEX_ATTRIB_ARRAY_NORMALIZED:34922,VERTEX_ATTRIB_ARRAY_POINTER:34373,VERTEX_ATTRIB_ARRAY_BUFFER_BINDING:34975,COMPILE_STATUS:35713,LOW_FLOAT:36336,MEDIUM_FLOAT:36337,HIGH_FLOAT:36338,LOW_INT:36339,MEDIUM_INT:36340,HIGH_INT:36341,FRAMEBUFFER:36160,RENDERBUFFER:36161,RGBA4:32854,RGB5_A1:32855,RGB565:36194,DEPTH_COMPONENT16:33189,STENCIL_INDEX:6401,STENCIL_INDEX8:36168,DEPTH_STENCIL:34041,RENDERBUFFER_WIDTH:36162,RENDERBUFFER_HEIGHT:36163,RENDERBUFFER_INTERNAL_FORMAT:36164,RENDERBUFFER_RED_SIZE:36176,RENDERBUFFER_GREEN_SIZE:36177,RENDERBUFFER_BLUE_SIZE:36178,RENDERBUFFER_ALPHA_SIZE:36179,RENDERBUFFER_DEPTH_SIZE:36180,RENDERBUFFER_STENCIL_SIZE:36181,FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE:36048,FRAMEBUFFER_ATTACHMENT_OBJECT_NAME:36049,FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL:36050,FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE:36051,COLOR_ATTACHMENT0:36064,DEPTH_ATTACHMENT:36096,STENCIL_ATTACHMENT:36128,DEPTH_STENCIL_ATTACHMENT:33306,NONE:0,FRAMEBUFFER_COMPLETE:36053,FRAMEBUFFER_INCOMPLETE_ATTACHMENT:36054,FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:36055,FRAMEBUFFER_INCOMPLETE_DIMENSIONS:36057,FRAMEBUFFER_UNSUPPORTED:36061,FRAMEBUFFER_BINDING:36006,RENDERBUFFER_BINDING:36007,MAX_RENDERBUFFER_SIZE:34024,INVALID_FRAMEBUFFER_OPERATION:1286,UNPACK_FLIP_Y_WEBGL:37440,UNPACK_PREMULTIPLY_ALPHA_WEBGL:37441,CONTEXT_LOST_WEBGL:37442,UNPACK_COLORSPACE_CONVERSION_WEBGL:37443,BROWSER_DEFAULT_WEBGL:37444};function Ch(e){var t=new XMLHttpRequest;t.open("get",e.url),t.responseType=e.responseType||"text",e.onprogress&&(t.onprogress=function(r){if(r.lengthComputable){var i=r.loaded/r.total;e.onprogress(i,r.loaded,r.total)}else e.onprogress(null)}),t.onload=function(r){t.status>=400?e.onerror&&e.onerror():e.onload&&e.onload(t.response)},e.onerror&&(t.onerror=e.onerror),t.send(null)}var Lh={get:Ch},nn,je={};je.supportWebGL=function(){if(nn==null)try{var e=document.createElement("canvas"),t=e.getContext("webgl")||e.getContext("experimental-webgl");if(!t)throw new Error}catch{nn=!1}return nn};je.Int8Array=typeof Int8Array>"u"?Array:Int8Array;je.Uint8Array=typeof Uint8Array>"u"?Array:Uint8Array;je.Uint16Array=typeof Uint16Array>"u"?Array:Uint16Array;je.Uint32Array=typeof Uint32Array>"u"?Array:Uint32Array;je.Int16Array=typeof Int16Array>"u"?Array:Int16Array;je.Float32Array=typeof Float32Array>"u"?Array:Float32Array;je.Float64Array=typeof Float64Array>"u"?Array:Float64Array;var Yt={};typeof window<"u"?Yt=window:typeof global<"u"&&(Yt=global);je.requestAnimationFrame=Yt.requestAnimationFrame||Yt.msRequestAnimationFrame||Yt.mozRequestAnimationFrame||Yt.webkitRequestAnimationFrame||function(e){setTimeout(e,16)};je.createCanvas=function(){return document.createElement("canvas")};je.createImage=function(){return new Yt.Image};je.request={get:Lh.get};je.addEventListener=function(e,t,r,i){e.addEventListener(t,r,i)};je.removeEventListener=function(e,t,r){e.removeEventListener(t,r)};var we=je,De=function(){this.head=null,this.tail=null,this._length=0};De.prototype.insert=function(e){var t=new De.Entry(e);return this.insertEntry(t),t};De.prototype.insertAt=function(e,t){if(!(e<0)){for(var r=this.head,i=0;r&&i!=e;)r=r.next,i++;if(r){var n=new De.Entry(t),a=r.prev;a?(a.next=n,n.prev=a):this.head=n,n.next=r,r.prev=n}else this.insert(t)}};De.prototype.insertBeforeEntry=function(e,t){var r=new De.Entry(e),i=t.prev;i?(i.next=r,r.prev=i):this.head=r,r.next=t,t.prev=r,this._length++};De.prototype.insertEntry=function(e){this.head?(this.tail.next=e,e.prev=this.tail,this.tail=e):this.head=this.tail=e,this._length++};De.prototype.remove=function(e){var t=e.prev,r=e.next;t?t.next=r:this.head=r,r?r.prev=t:this.tail=t,e.next=e.prev=null,this._length--};De.prototype.removeAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;if(t)return this.remove(t),t.value}};De.prototype.getHead=function(){if(this.head)return this.head.value};De.prototype.getTail=function(){if(this.tail)return this.tail.value};De.prototype.getAt=function(e){if(!(e<0)){for(var t=this.head,r=0;t&&r!=e;)t=t.next,r++;return t.value}};De.prototype.indexOf=function(e){for(var t=this.head,r=0;t;){if(t.value===e)return r;t=t.next,r++}};De.prototype.length=function(){return this._length};De.prototype.isEmpty=function(){return this._length===0};De.prototype.forEach=function(e,t){for(var r=this.head,i=0,n=typeof t<"u";r;)n?e.call(t,r.value,i):e(r.value,i),r=r.next,i++};De.prototype.clear=function(){this.tail=this.head=null,this._length=0};De.Entry=function(e){this.value=e,this.next=null,this.prev=null};var Rh=De,xr=function(e){this._list=new Rh,this._map={},this._maxSize=e||10};xr.prototype.setMaxSize=function(e){this._maxSize=e};xr.prototype.put=function(e,t){if(!this._map.hasOwnProperty(e)){var r=this._list.length();if(r>=this._maxSize&&r>0){var i=this._list.head;this._list.remove(i),delete this._map[i.key]}var n=this._list.insert(t);n.key=e,this._map[e]=n}};xr.prototype.get=function(e){var t=this._map[e];if(this._map.hasOwnProperty(e))return t!==this._list.tail&&(this._list.remove(t),this._list.insertEntry(t)),t.value};xr.prototype.remove=function(e){var t=this._map[e];typeof t<"u"&&(delete this._map[e],this._list.remove(t))};xr.prototype.clear=function(){this._list.clear(),this._map={}};var as=xr,me={},Xa={transparent:[0,0,0,0],aliceblue:[240,248,255,1],antiquewhite:[250,235,215,1],aqua:[0,255,255,1],aquamarine:[127,255,212,1],azure:[240,255,255,1],beige:[245,245,220,1],bisque:[255,228,196,1],black:[0,0,0,1],blanchedalmond:[255,235,205,1],blue:[0,0,255,1],blueviolet:[138,43,226,1],brown:[165,42,42,1],burlywood:[222,184,135,1],cadetblue:[95,158,160,1],chartreuse:[127,255,0,1],chocolate:[210,105,30,1],coral:[255,127,80,1],cornflowerblue:[100,149,237,1],cornsilk:[255,248,220,1],crimson:[220,20,60,1],cyan:[0,255,255,1],darkblue:[0,0,139,1],darkcyan:[0,139,139,1],darkgoldenrod:[184,134,11,1],darkgray:[169,169,169,1],darkgreen:[0,100,0,1],darkgrey:[169,169,169,1],darkkhaki:[189,183,107,1],darkmagenta:[139,0,139,1],darkolivegreen:[85,107,47,1],darkorange:[255,140,0,1],darkorchid:[153,50,204,1],darkred:[139,0,0,1],darksalmon:[233,150,122,1],darkseagreen:[143,188,143,1],darkslateblue:[72,61,139,1],darkslategray:[47,79,79,1],darkslategrey:[47,79,79,1],darkturquoise:[0,206,209,1],darkviolet:[148,0,211,1],deeppink:[255,20,147,1],deepskyblue:[0,191,255,1],dimgray:[105,105,105,1],dimgrey:[105,105,105,1],dodgerblue:[30,144,255,1],firebrick:[178,34,34,1],floralwhite:[255,250,240,1],forestgreen:[34,139,34,1],fuchsia:[255,0,255,1],gainsboro:[220,220,220,1],ghostwhite:[248,248,255,1],gold:[255,215,0,1],goldenrod:[218,165,32,1],gray:[128,128,128,1],green:[0,128,0,1],greenyellow:[173,255,47,1],grey:[128,128,128,1],honeydew:[240,255,240,1],hotpink:[255,105,180,1],indianred:[205,92,92,1],indigo:[75,0,130,1],ivory:[255,255,240,1],khaki:[240,230,140,1],lavender:[230,230,250,1],lavenderblush:[255,240,245,1],lawngreen:[124,252,0,1],lemonchiffon:[255,250,205,1],lightblue:[173,216,230,1],lightcoral:[240,128,128,1],lightcyan:[224,255,255,1],lightgoldenrodyellow:[250,250,210,1],lightgray:[211,211,211,1],lightgreen:[144,238,144,1],lightgrey:[211,211,211,1],lightpink:[255,182,193,1],lightsalmon:[255,160,122,1],lightseagreen:[32,178,170,1],lightskyblue:[135,206,250,1],lightslategray:[119,136,153,1],lightslategrey:[119,136,153,1],lightsteelblue:[176,196,222,1],lightyellow:[255,255,224,1],lime:[0,255,0,1],limegreen:[50,205,50,1],linen:[250,240,230,1],magenta:[255,0,255,1],maroon:[128,0,0,1],mediumaquamarine:[102,205,170,1],mediumblue:[0,0,205,1],mediumorchid:[186,85,211,1],mediumpurple:[147,112,219,1],mediumseagreen:[60,179,113,1],mediumslateblue:[123,104,238,1],mediumspringgreen:[0,250,154,1],mediumturquoise:[72,209,204,1],mediumvioletred:[199,21,133,1],midnightblue:[25,25,112,1],mintcream:[245,255,250,1],mistyrose:[255,228,225,1],moccasin:[255,228,181,1],navajowhite:[255,222,173,1],navy:[0,0,128,1],oldlace:[253,245,230,1],olive:[128,128,0,1],olivedrab:[107,142,35,1],orange:[255,165,0,1],orangered:[255,69,0,1],orchid:[218,112,214,1],palegoldenrod:[238,232,170,1],palegreen:[152,251,152,1],paleturquoise:[175,238,238,1],palevioletred:[219,112,147,1],papayawhip:[255,239,213,1],peachpuff:[255,218,185,1],peru:[205,133,63,1],pink:[255,192,203,1],plum:[221,160,221,1],powderblue:[176,224,230,1],purple:[128,0,128,1],red:[255,0,0,1],rosybrown:[188,143,143,1],royalblue:[65,105,225,1],saddlebrown:[139,69,19,1],salmon:[250,128,114,1],sandybrown:[244,164,96,1],seagreen:[46,139,87,1],seashell:[255,245,238,1],sienna:[160,82,45,1],silver:[192,192,192,1],skyblue:[135,206,235,1],slateblue:[106,90,205,1],slategray:[112,128,144,1],slategrey:[112,128,144,1],snow:[255,250,250,1],springgreen:[0,255,127,1],steelblue:[70,130,180,1],tan:[210,180,140,1],teal:[0,128,128,1],thistle:[216,191,216,1],tomato:[255,99,71,1],turquoise:[64,224,208,1],violet:[238,130,238,1],wheat:[245,222,179,1],white:[255,255,255,1],whitesmoke:[245,245,245,1],yellow:[255,255,0,1],yellowgreen:[154,205,50,1]};function dt(e){return e=Math.round(e),e<0?0:e>255?255:e}function Ph(e){return e=Math.round(e),e<0?0:e>360?360:e}function Fr(e){return e<0?0:e>1?1:e}function an(e){return e.length&&e.charAt(e.length-1)==="%"?dt(parseFloat(e)/100*255):dt(parseInt(e,10))}function pr(e){return e.length&&e.charAt(e.length-1)==="%"?Fr(parseFloat(e)/100):Fr(parseFloat(e))}function on(e,t,r){return r<0?r+=1:r>1&&(r-=1),r*6<1?e+(t-e)*r*6:r*2<1?t:r*3<2?e+(t-e)*(2/3-r)*6:e}function Nt(e,t,r){return e+(t-e)*r}function ct(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e}function On(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e}var os=new as(20),ai=null;function ir(e,t){ai&&On(ai,t),ai=os.put(e,ai||t.slice())}me.parse=function(e,t){if(!!e){t=t||[];var r=os.get(e);if(r)return On(t,r);e=e+"";var i=e.replace(/ /g,"").toLowerCase();if(i in Xa)return On(t,Xa[i]),ir(e,t),t;if(i.charAt(0)==="#"){if(i.length===4){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=4095)){ct(t,0,0,0,1);return}return ct(t,(n&3840)>>4|(n&3840)>>8,n&240|(n&240)>>4,n&15|(n&15)<<4,1),ir(e,t),t}else if(i.length===7){var n=parseInt(i.substr(1),16);if(!(n>=0&&n<=16777215)){ct(t,0,0,0,1);return}return ct(t,(n&16711680)>>16,(n&65280)>>8,n&255,1),ir(e,t),t}return}var a=i.indexOf("("),o=i.indexOf(")");if(a!==-1&&o+1===i.length){var s=i.substr(0,a),l=i.substr(a+1,o-(a+1)).split(","),u=1;switch(s){case"rgba":if(l.length!==4){ct(t,0,0,0,1);return}u=pr(l.pop());case"rgb":if(l.length!==3){ct(t,0,0,0,1);return}return ct(t,an(l[0]),an(l[1]),an(l[2]),u),ir(e,t),t;case"hsla":if(l.length!==4){ct(t,0,0,0,1);return}return l[3]=pr(l[3]),Bn(l,t),ir(e,t),t;case"hsl":if(l.length!==3){ct(t,0,0,0,1);return}return Bn(l,t),ir(e,t),t;default:return}}ct(t,0,0,0,1)}};me.parseToFloat=function(e,t){if(t=me.parse(e,t),!!t)return t[0]/=255,t[1]/=255,t[2]/=255,t};function Bn(e,t){var r=(parseFloat(e[0])%360+360)%360/360,i=pr(e[1]),n=pr(e[2]),a=n<=.5?n*(i+1):n+i-n*i,o=n*2-a;return t=t||[],ct(t,dt(on(o,a,r+1/3)*255),dt(on(o,a,r)*255),dt(on(o,a,r-1/3)*255),1),e.length===4&&(t[3]=e[3]),t}function Dh(e){if(!!e){var t=e[0]/255,r=e[1]/255,i=e[2]/255,n=Math.min(t,r,i),a=Math.max(t,r,i),o=a-n,s=(a+n)/2,l,u;if(o===0)l=0,u=0;else{s<.5?u=o/(a+n):u=o/(2-a-n);var h=((a-t)/6+o/2)/o,c=((a-r)/6+o/2)/o,d=((a-i)/6+o/2)/o;t===a?l=d-c:r===a?l=1/3+h-d:i===a&&(l=2/3+c-h),l<0&&(l+=1),l>1&&(l-=1)}var f=[l*360,u,s];return e[3]!=null&&f.push(e[3]),f}}me.lift=function(e,t){var r=me.parse(e);if(r){for(var i=0;i<3;i++)t<0?r[i]=r[i]*(1-t)|0:r[i]=(255-r[i])*t+r[i]|0;return me.stringify(r,r.length===4?"rgba":"rgb")}};me.toHex=function(e){var t=me.parse(e);if(t)return((1<<24)+(t[0]<<16)+(t[1]<<8)+ +t[2]).toString(16).slice(1)};me.fastLerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){r=r||[];var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=t[n],s=t[a],l=i-n;return r[0]=dt(Nt(o[0],s[0],l)),r[1]=dt(Nt(o[1],s[1],l)),r[2]=dt(Nt(o[2],s[2],l)),r[3]=Fr(Nt(o[3],s[3],l)),r}};me.fastMapToColor=me.fastLerp;me.lerp=function(e,t,r){if(!(!(t&&t.length)||!(e>=0&&e<=1))){var i=e*(t.length-1),n=Math.floor(i),a=Math.ceil(i),o=me.parse(t[n]),s=me.parse(t[a]),l=i-n,u=me.stringify([dt(Nt(o[0],s[0],l)),dt(Nt(o[1],s[1],l)),dt(Nt(o[2],s[2],l)),Fr(Nt(o[3],s[3],l))],"rgba");return r?{color:u,leftIndex:n,rightIndex:a,value:i}:u}};me.mapToColor=me.lerp;me.modifyHSL=function(e,t,r,i){if(e=me.parse(e),e)return e=Dh(e),t!=null&&(e[0]=Ph(t)),r!=null&&(e[1]=pr(r)),i!=null&&(e[2]=pr(i)),me.stringify(Bn(e),"rgba")};me.modifyAlpha=function(e,t){if(e=me.parse(e),e&&t!=null)return e[3]=Fr(t),me.stringify(e,"rgba")};me.stringify=function(e,t){if(!(!e||!e.length)){var r=e[0]+","+e[1]+","+e[2];return(t==="rgba"||t==="hsva"||t==="hsla")&&(r+=","+e[3]),t+"("+r+")"}};var Nh=me,Ih=Nh.parseToFloat,sn={};function Ya(e){var t=Object.keys(e);t.sort();for(var r=[],i=0;i<t.length;i++){var n=t[i],a=e[n];a===null?r.push(n):r.push(n+" "+a.toString())}return r.join(`
`)}function Oh(e,t,r){r.sort();for(var i=[],n=0;n<r.length;n++){var a=r[n];i.push(a)}var o=Ya(e)+`
`+Ya(t)+`
`+i.join(`
`);if(sn[o])return sn[o];var s=Ie.genGUID();return sn[o]=s,s}var Bh=Qe.extend(function(){return{name:"",depthTest:!0,depthMask:!0,transparent:!1,blend:null,autoUpdateTextureStatus:!0,uniforms:{},vertexDefines:{},fragmentDefines:{},_textureStatus:{},_enabledUniforms:null}},function(){this.name||(this.name="MATERIAL_"+this.__uid__),this.shader&&this.attachShader(this.shader,!0)},{precision:"highp",setUniform:function(e,t){t===void 0&&console.warn('Uniform value "'+e+'" is undefined');var r=this.uniforms[e];r&&(typeof t=="string"&&(t=Ih(t)||t),r.value=t,this.autoUpdateTextureStatus&&r.type==="t"&&(t?this.enableTexture(e):this.disableTexture(e)))},setUniforms:function(e){for(var t in e){var r=e[t];this.setUniform(t,r)}},isUniformEnabled:function(e){return this._enabledUniforms.indexOf(e)>=0},getEnabledUniforms:function(){return this._enabledUniforms},getTextureUniforms:function(){return this._textureUniforms},set:function(e,t){if(typeof e=="object")for(var r in e){var i=e[r];this.setUniform(r,i)}else this.setUniform(e,t)},get:function(e){var t=this.uniforms[e];if(t)return t.value},attachShader:function(e,t){var r=this.uniforms;this.uniforms=e.createUniforms(),this.shader=e;var i=this.uniforms;this._enabledUniforms=Object.keys(i),this._enabledUniforms.sort(),this._textureUniforms=this._enabledUniforms.filter(function(u){var h=this.uniforms[u].type;return h==="t"||h==="tv"},this);var n=this.vertexDefines,a=this.fragmentDefines;if(this.vertexDefines=Ie.clone(e.vertexDefines),this.fragmentDefines=Ie.clone(e.fragmentDefines),t){for(var o in r)i[o]&&(i[o].value=r[o].value);Ie.defaults(this.vertexDefines,n),Ie.defaults(this.fragmentDefines,a)}var s={};for(var l in e.textures)s[l]={shaderType:e.textures[l].shaderType,type:e.textures[l].type,enabled:t&&this._textureStatus[l]?this._textureStatus[l].enabled:!1};this._textureStatus=s,this._programKey=""},clone:function(){var e=new this.constructor({name:this.name,shader:this.shader});for(var t in this.uniforms)e.uniforms[t].value=this.uniforms[t].value;return e.depthTest=this.depthTest,e.depthMask=this.depthMask,e.transparent=this.transparent,e.blend=this.blend,e.vertexDefines=Ie.clone(this.vertexDefines),e.fragmentDefines=Ie.clone(this.fragmentDefines),e.enableTexture(this.getEnabledTextures()),e.precision=this.precision,e},define:function(e,t,r){var i=this.vertexDefines,n=this.fragmentDefines;e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<3&&(r=t,t=e,e="both"),r=r!=null?r:null,(e==="vertex"||e==="both")&&i[t]!==r&&(i[t]=r,this._programKey=""),(e==="fragment"||e==="both")&&n[t]!==r&&(n[t]=r,e!=="both"&&(this._programKey=""))},undefine:function(e,t){e!=="vertex"&&e!=="fragment"&&e!=="both"&&arguments.length<2&&(t=e,e="both"),(e==="vertex"||e==="both")&&this.isDefined("vertex",t)&&(delete this.vertexDefines[t],this._programKey=""),(e==="fragment"||e==="both")&&this.isDefined("fragment",t)&&(delete this.fragmentDefines[t],e!=="both"&&(this._programKey=""))},isDefined:function(e,t){switch(e){case"vertex":return this.vertexDefines[t]!==void 0;case"fragment":return this.fragmentDefines[t]!==void 0}},getDefine:function(e,t){switch(e){case"vertex":return this.vertexDefines[t];case"fragment":return this.fragmentDefines[t]}},enableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.enableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=r.enabled;i||(r.enabled=!0,this._programKey="")}},enableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!0;this._programKey=""},disableTexture:function(e){if(Array.isArray(e)){for(var t=0;t<e.length;t++)this.disableTexture(e[t]);return}var r=this._textureStatus[e];if(r){var i=!r.enabled;i||(r.enabled=!1,this._programKey="")}},disableTexturesAll:function(){var e=this._textureStatus;for(var t in e)e[t].enabled=!1;this._programKey=""},isTextureEnabled:function(e){var t=this._textureStatus;return!!t[e]&&t[e].enabled},getEnabledTextures:function(){var e=[],t=this._textureStatus;for(var r in t)t[r].enabled&&e.push(r);return e},dirtyDefines:function(){this._programKey=""},getProgramKey:function(){return this._programKey||(this._programKey=Oh(this.vertexDefines,this.fragmentDefines,this.getEnabledTextures())),this._programKey}}),Mt=Bh,mi=1e-6,Oe=Array,fr=Math.random,Z={};Z.create=function(){var e=new Oe(2);return e[0]=0,e[1]=0,e};Z.clone=function(e){var t=new Oe(2);return t[0]=e[0],t[1]=e[1],t};Z.fromValues=function(e,t){var r=new Oe(2);return r[0]=e,r[1]=t,r};Z.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e};Z.set=function(e,t,r){return e[0]=t,e[1]=r,e};Z.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e};Z.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e};Z.sub=Z.subtract;Z.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e};Z.mul=Z.multiply;Z.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e};Z.div=Z.divide;Z.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e};Z.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e};Z.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e};Z.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e};Z.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return Math.sqrt(r*r+i*i)};Z.dist=Z.distance;Z.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1];return r*r+i*i};Z.sqrDist=Z.squaredDistance;Z.length=function(e){var t=e[0],r=e[1];return Math.sqrt(t*t+r*r)};Z.len=Z.length;Z.squaredLength=function(e){var t=e[0],r=e[1];return t*t+r*r};Z.sqrLen=Z.squaredLength;Z.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e};Z.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e};Z.normalize=function(e,t){var r=t[0],i=t[1],n=r*r+i*i;return n>0&&(n=1/Math.sqrt(n),e[0]=t[0]*n,e[1]=t[1]*n),e};Z.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]};Z.cross=function(e,t,r){var i=t[0]*r[1]-t[1]*r[0];return e[0]=e[1]=0,e[2]=i,e};Z.lerp=function(e,t,r,i){var n=t[0],a=t[1];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e};Z.random=function(e,t){t=t||1;var r=GLMAT_RANDOM()*2*Math.PI;return e[0]=Math.cos(r)*t,e[1]=Math.sin(r)*t,e};Z.transformMat2=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n,e[1]=r[1]*i+r[3]*n,e};Z.transformMat2d=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[2]*n+r[4],e[1]=r[1]*i+r[3]*n+r[5],e};Z.transformMat3=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[3]*n+r[6],e[1]=r[1]*i+r[4]*n+r[7],e};Z.transformMat4=function(e,t,r){var i=t[0],n=t[1];return e[0]=r[0]*i+r[4]*n+r[12],e[1]=r[1]*i+r[5]*n+r[13],e};Z.forEach=function(){var e=Z.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=2),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],a(e,e,o),t[s]=e[0],t[s+1]=e[1];return t}}();var z=Z,Q=function(e,t){e=e||0,t=t||0,this.array=z.fromValues(e,t),this._dirty=!0};Q.prototype={constructor:Q,add:function(e){return z.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t){return this.array[0]=e,this.array[1]=t,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this._dirty=!0,this},clone:function(){return new Q(this.x,this.y)},copy:function(e){return z.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return z.cross(e.array,this.array,t.array),e._dirty=!0,this},dist:function(e){return z.dist(this.array,e.array)},distance:function(e){return z.distance(this.array,e.array)},div:function(e){return z.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return z.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return z.dot(this.array,e.array)},len:function(){return z.len(this.array)},length:function(){return z.length(this.array)},lerp:function(e,t,r){return z.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return z.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return z.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return z.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return z.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return z.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return z.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return z.random(this.array,e),this._dirty=!0,this},scale:function(e){return z.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return z.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return z.sqrDist(this.array,e.array)},squaredDistance:function(e){return z.squaredDistance(this.array,e.array)},sqrLen:function(){return z.sqrLen(this.array)},squaredLength:function(){return z.squaredLength(this.array)},sub:function(e){return z.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return z.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat2:function(e){return z.transformMat2(this.array,this.array,e.array),this._dirty=!0,this},transformMat2d:function(e){return z.transformMat2d(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return z.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return z.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};if(Object.defineProperty){var $a=Q.prototype;Object.defineProperty($a,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Object.defineProperty($a,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}})}Q.add=function(e,t,r){return z.add(e.array,t.array,r.array),e._dirty=!0,e};Q.set=function(e,t,r){return z.set(e.array,t,r),e._dirty=!0,e};Q.copy=function(e,t){return z.copy(e.array,t.array),e._dirty=!0,e};Q.cross=function(e,t,r){return z.cross(e.array,t.array,r.array),e._dirty=!0,e};Q.dist=function(e,t){return z.distance(e.array,t.array)};Q.distance=Q.dist;Q.div=function(e,t,r){return z.divide(e.array,t.array,r.array),e._dirty=!0,e};Q.divide=Q.div;Q.dot=function(e,t){return z.dot(e.array,t.array)};Q.len=function(e){return z.length(e.array)};Q.lerp=function(e,t,r,i){return z.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};Q.min=function(e,t,r){return z.min(e.array,t.array,r.array),e._dirty=!0,e};Q.max=function(e,t,r){return z.max(e.array,t.array,r.array),e._dirty=!0,e};Q.mul=function(e,t,r){return z.multiply(e.array,t.array,r.array),e._dirty=!0,e};Q.multiply=Q.mul;Q.negate=function(e,t){return z.negate(e.array,t.array),e._dirty=!0,e};Q.normalize=function(e,t){return z.normalize(e.array,t.array),e._dirty=!0,e};Q.random=function(e,t){return z.random(e.array,t),e._dirty=!0,e};Q.scale=function(e,t,r){return z.scale(e.array,t.array,r),e._dirty=!0,e};Q.scaleAndAdd=function(e,t,r,i){return z.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};Q.sqrDist=function(e,t){return z.sqrDist(e.array,t.array)};Q.squaredDistance=Q.sqrDist;Q.sqrLen=function(e){return z.sqrLen(e.array)};Q.squaredLength=Q.sqrLen;Q.sub=function(e,t,r){return z.subtract(e.array,t.array,r.array),e._dirty=!0,e};Q.subtract=Q.sub;Q.transformMat2=function(e,t,r){return z.transformMat2(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat2d=function(e,t,r){return z.transformMat2d(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat3=function(e,t,r){return z.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};Q.transformMat4=function(e,t,r){return z.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};var tt=Q,ja=1,qa=2,ln=3,Za={};function Fh(e){for(var t=e.split(`
`),r=0,i=t.length;r<i;r++)t[r]=r+1+": "+t[r];return t.join(`
`)}function Ka(e,t,r){if(!e.getShaderParameter(t,e.COMPILE_STATUS))return[e.getShaderInfoLog(t),Fh(r)].join(`
`)}var Qa=new we.Float32Array(16),Uh=Qe.extend({uniformSemantics:{},attributes:{}},function(){this._locations={},this._textureSlot=0,this._program=null},{bind:function(e){this._textureSlot=0,e.gl.useProgram(this._program)},hasUniform:function(e){var t=this._locations[e];return t!=null},useTextureSlot:function(e,t,r){t&&(e.gl.activeTexture(e.gl.TEXTURE0+r),t.isRenderable()?t.bind(e):t.unbind(e))},currentTextureSlot:function(){return this._textureSlot},resetTextureSlot:function(e){this._textureSlot=e||0},takeCurrentTextureSlot:function(e,t){var r=this._textureSlot;return this.useTextureSlot(e,t,r),this._textureSlot++,r},setUniform:function(e,t,r,i){var n=this._locations,a=n[r];if(a==null)return!1;switch(t){case"m4":if(!(i instanceof Float32Array)){for(var o=0;o<i.length;o++)Qa[o]=i[o];i=Qa}e.uniformMatrix4fv(a,!1,i);break;case"2i":e.uniform2i(a,i[0],i[1]);break;case"2f":e.uniform2f(a,i[0],i[1]);break;case"3i":e.uniform3i(a,i[0],i[1],i[2]);break;case"3f":e.uniform3f(a,i[0],i[1],i[2]);break;case"4i":e.uniform4i(a,i[0],i[1],i[2],i[3]);break;case"4f":e.uniform4f(a,i[0],i[1],i[2],i[3]);break;case"1i":e.uniform1i(a,i);break;case"1f":e.uniform1f(a,i);break;case"1fv":e.uniform1fv(a,i);break;case"1iv":e.uniform1iv(a,i);break;case"2iv":e.uniform2iv(a,i);break;case"2fv":e.uniform2fv(a,i);break;case"3iv":e.uniform3iv(a,i);break;case"3fv":e.uniform3fv(a,i);break;case"4iv":e.uniform4iv(a,i);break;case"4fv":e.uniform4fv(a,i);break;case"m2":case"m2v":e.uniformMatrix2fv(a,!1,i);break;case"m3":case"m3v":e.uniformMatrix3fv(a,!1,i);break;case"m4v":if(Array.isArray(i)&&Array.isArray(i[0])){for(var s=new we.Float32Array(i.length*16),l=0,o=0;o<i.length;o++)for(var u=i[o],h=0;h<16;h++)s[l++]=u[h];e.uniformMatrix4fv(a,!1,s)}else e.uniformMatrix4fv(a,!1,i);break}return!0},setUniformOfSemantic:function(e,t,r){var i=this.uniformSemantics[t];return i?this.setUniform(e,i.type,i.symbol,r):!1},enableAttributes:function(e,t,r){var i=e.gl,n=this._program,a=this._locations,o;r?o=r.__enabledAttributeList:o=Za[e.__uid__],o||(r?o=r.__enabledAttributeList=[]:o=Za[e.__uid__]=[]);for(var s=[],l=0;l<t.length;l++){var u=t[l];if(!this.attributes[u]){s[l]=-1;continue}var h=a[u];if(h==null){if(h=i.getAttribLocation(n,u),h===-1){s[l]=-1;continue}a[u]=h}s[l]=h,o[h]?o[h]=qa:o[h]=ja}for(var l=0;l<o.length;l++)switch(o[l]){case ja:i.enableVertexAttribArray(l),o[l]=ln;break;case qa:o[l]=ln;break;case ln:i.disableVertexAttribArray(l),o[l]=0;break}return s},getAttribLocation:function(e,t){var r=this._locations,i=r[t];return i==null&&(i=e.getAttribLocation(this._program,t),r[t]=i),i},buildProgram:function(e,t,r,i){var n=e.createShader(e.VERTEX_SHADER),a=e.createProgram();e.shaderSource(n,r),e.compileShader(n);var o=e.createShader(e.FRAGMENT_SHADER);e.shaderSource(o,i),e.compileShader(o);var s=Ka(e,n,r);if(s||(s=Ka(e,o,i),s))return s;if(e.attachShader(a,n),e.attachShader(a,o),t.attributeSemantics.POSITION)e.bindAttribLocation(a,0,t.attributeSemantics.POSITION.symbol);else{var l=Object.keys(this.attributes);e.bindAttribLocation(a,0,l[0])}if(e.linkProgram(a),e.deleteShader(n),e.deleteShader(o),this._program=a,this.vertexCode=r,this.fragmentCode=i,!e.getProgramParameter(a,e.LINK_STATUS))return`Could not link program
`+e.getProgramInfoLog(a);for(var u=0;u<t.uniforms.length;u++){var h=t.uniforms[u];this._locations[h]=e.getUniformLocation(a,h)}}}),Hh=Uh,zh=/for\s*?\(int\s*?_idx_\s*\=\s*([\w-]+)\;\s*_idx_\s*<\s*([\w-]+);\s*_idx_\s*\+\+\s*\)\s*\{\{([\s\S]+?)(?=\}\})\}\}/g;function Ja(e,t,r){function i(o,s,l,u){var h="";isNaN(s)&&(s in t?s=t[s]:s=n[s]),isNaN(l)&&(l in t?l=t[l]:l=n[l]);for(var c=parseInt(s);c<parseInt(l);c++)h+="{"+u.replace(/float\s*\(\s*_idx_\s*\)/g,c.toFixed(1)).replace(/_idx_/g,c)+"}";return h}var n={};for(var a in r)n[a+"_COUNT"]=r[a];return e.replace(zh,i)}function un(e,t,r){var i=[];if(t)for(var n in t){var a=t[n];a>0&&i.push("#define "+n.toUpperCase()+"_COUNT "+a)}if(r)for(var o=0;o<r.length;o++){var s=r[o];i.push("#define "+s.toUpperCase()+"_ENABLED")}for(var s in e){var l=e[s];l===null?i.push("#define "+s):i.push("#define "+s+" "+l.toString())}return i.join(`
`)}function Vh(e){for(var t=[],r=0;r<e.length;r++)t.push("#extension GL_"+e[r]+" : enable");return t.join(`
`)}function kh(e){return["precision",e,"float"].join(" ")+`;
`+["precision",e,"int"].join(" ")+`;
`+["precision",e,"sampler2D"].join(" ")+`;
`}function ss(e){this._renderer=e,this._cache={}}ss.prototype.getProgram=function(e,t,r){var i=this._cache,n=e.isSkinnedMesh&&e.isSkinnedMesh(),a=e.isInstancedMesh&&e.isInstancedMesh(),o="s"+t.shader.shaderID+"m"+t.getProgramKey();r&&(o+="se"+r.getProgramKey(e.lightGroup)),n&&(o+=",sk"+e.joints.length),a&&(o+=",is");var x=i[o];if(x)return x;var s=r?r.getLightsNumbers(e.lightGroup):{},l=this._renderer,u=l.gl,h=t.getEnabledTextures(),c="";if(n){var d={SKINNING:null,JOINT_COUNT:e.joints.length};e.joints.length>l.getMaxJointNumber()&&(d.USE_SKIN_MATRICES_TEXTURE=null),c+=`
`+un(d)+`
`}a&&(c+=`
#define INSTANCING
`);var f=c+un(t.vertexDefines,s,h),v=c+un(t.fragmentDefines,s,h),p=f+`
`+t.shader.vertex,_=["OES_standard_derivatives","EXT_shader_texture_lod"].filter(function(S){return l.getGLExtension(S)!=null});_.indexOf("EXT_shader_texture_lod")>=0&&(v+=`
#define SUPPORT_TEXTURE_LOD`),_.indexOf("OES_standard_derivatives")>=0&&(v+=`
#define SUPPORT_STANDARD_DERIVATIVES`);var m=Vh(_)+`
`+kh(t.precision)+`
`+v+`
`+t.shader.fragment,y=Ja(p,t.vertexDefines,s),g=Ja(m,t.fragmentDefines,s),x=new Hh;x.uniformSemantics=t.shader.uniformSemantics,x.attributes=t.shader.attributes;var E=x.buildProgram(u,t.shader,y,g);return x.__error=E,i[o]=x,x};var eo=/uniform\s+(bool|float|int|vec2|vec3|vec4|ivec2|ivec3|ivec4|mat2|mat3|mat4|sampler2D|samplerCube)\s+([\s\S]*?);/g,Gh=/attribute\s+(float|int|vec2|vec3|vec4)\s+([\s\S]*?);/g,to=/#define\s+(\w+)?(\s+[\d-.]+)?\s*;?\s*\n/g,Wh={bool:"1i",int:"1i",sampler2D:"t",samplerCube:"t",float:"1f",vec2:"2f",vec3:"3f",vec4:"4f",ivec2:"2i",ivec3:"3i",ivec4:"4i",mat2:"m2",mat3:"m3",mat4:"m4"};function St(e){for(var t=[],r=0;r<e;r++)t[r]=0;return t}var ro={bool:function(){return!0},int:function(){return 0},float:function(){return 0},sampler2D:function(){return null},samplerCube:function(){return null},vec2:function(){return St(2)},vec3:function(){return St(3)},vec4:function(){return St(4)},ivec2:function(){return St(2)},ivec3:function(){return St(3)},ivec4:function(){return St(4)},mat2:function(){return St(4)},mat3:function(){return St(9)},mat4:function(){return St(16)},array:function(){return[]}},Fn=["POSITION","NORMAL","BINORMAL","TANGENT","TEXCOORD","TEXCOORD_0","TEXCOORD_1","COLOR","JOINT","WEIGHT"],ls=["SKIN_MATRIX","VIEWPORT_SIZE","VIEWPORT","DEVICEPIXELRATIO","WINDOW_SIZE","NEAR","FAR","TIME"],us=["WORLD","VIEW","PROJECTION","WORLDVIEW","VIEWPROJECTION","WORLDVIEWPROJECTION","WORLDINVERSE","VIEWINVERSE","PROJECTIONINVERSE","WORLDVIEWINVERSE","VIEWPROJECTIONINVERSE","WORLDVIEWPROJECTIONINVERSE","WORLDTRANSPOSE","VIEWTRANSPOSE","PROJECTIONTRANSPOSE","WORLDVIEWTRANSPOSE","VIEWPROJECTIONTRANSPOSE","WORLDVIEWPROJECTIONTRANSPOSE","WORLDINVERSETRANSPOSE","VIEWINVERSETRANSPOSE","PROJECTIONINVERSETRANSPOSE","WORLDVIEWINVERSETRANSPOSE","VIEWPROJECTIONINVERSETRANSPOSE","WORLDVIEWPROJECTIONINVERSETRANSPOSE"],Xh={vec4:4,vec3:3,vec2:2,float:1},hn={},hs={};function Yh(e,t){var r="vertex:"+e+"fragment:"+t;if(hn[r])return hn[r];var i=Ie.genGUID();return hn[r]=i,hs[i]={vertex:e,fragment:t},i}function io(e){return e.replace(/[ \t]*\/\/.*\n/g,"").replace(/[ \t]*\/\*[\s\S]*?\*\//g,"")}function nr(){console.error("Wrong uniform/attributes syntax")}function no(e,t){for(var r=/[,=\(\):]/,i=t.replace(/:\s*\[\s*(.*)\s*\]/g,"="+e+"($1)").replace(/\s+/g,"").split(/(?=[,=\(\):])/g),n=[],a=0;a<i.length;a++)i[a].match(r)?n.push(i[a].charAt(0),i[a].slice(1)):n.push(i[a]);i=n;var o=0,s=1,l=2,u=3,h=4,c=5,d=o,f={},v=null,p;_(i[0]);function _(g){g||nr();var x=g.match(/\[(.*?)\]/);p=g.replace(/\[(.*?)\]/,""),f[p]={},x&&(f[p].isArray=!0,f[p].arraySize=x[1])}for(var a=1;a<i.length;a++){var m=i[a];if(!!m){if(m==="="){if(d!==o&&d!==u){nr();break}d=s;continue}else if(m===":"){d=h;continue}else if(m===","){if(d===l){if(!(v instanceof Array)){nr();break}v.push(+i[++a])}else d=c;continue}else if(m===")"){f[p].value=new we.Float32Array(v),v=null,d=c;continue}else if(m==="("){if(d!==l){nr();break}if(!(v instanceof Array)){nr();break}v.push(+i[++a]);continue}else if(m.indexOf("vec")>=0){if(d!==s&&d!==h){nr();break}d=l,v=[];continue}else if(d===s){e==="bool"?f[p].value=m==="true":f[p].value=parseFloat(m),v=null;continue}else if(d===h){var y=m;Fn.indexOf(y)>=0||ls.indexOf(y)>=0||us.indexOf(y)>=0?f[p].semantic=y:y==="ignore"||y==="unconfigurable"?f[p].ignore=!0:e==="bool"?f[p].value=y==="true":f[p].value=parseFloat(y);continue}_(m),d=o}}return f}function P(e,t){typeof e=="object"&&(t=e.fragment,e=e.vertex),e=io(e),t=io(t),this._shaderID=Yh(e,t),this._vertexCode=P.parseImport(e),this._fragmentCode=P.parseImport(t),this.attributeSemantics={},this.matrixSemantics={},this.uniformSemantics={},this.matrixSemanticKeys=[],this.uniformTemplates={},this.attributes={},this.textures={},this.vertexDefines={},this.fragmentDefines={},this._parseAttributes(),this._parseUniforms(),this._parseDefines()}P.prototype={constructor:P,createUniforms:function(){var e={};for(var t in this.uniformTemplates){var r=this.uniformTemplates[t];e[t]={type:r.type,value:r.value()}}return e},_parseImport:function(){this._vertexCode=P.parseImport(this.vertex),this._fragmentCode=P.parseImport(this.fragment)},_addSemanticUniform:function(e,t,r){if(Fn.indexOf(r)>=0)this.attributeSemantics[r]={symbol:e,type:t};else if(us.indexOf(r)>=0){var i=!1,n=r;r.match(/TRANSPOSE$/)&&(i=!0,n=r.slice(0,-9)),this.matrixSemantics[r]={symbol:e,type:t,isTranspose:i,semanticNoTranspose:n}}else ls.indexOf(r)>=0&&(this.uniformSemantics[r]={symbol:e,type:t})},_addMaterialUniform:function(e,t,r,i,n,a){a[e]={type:r,value:n?ro.array:i||ro[t],semantic:null}},_parseUniforms:function(){var e={},t=this,r="vertex";this._uniformList=[],this._vertexCode=this._vertexCode.replace(eo,n),r="fragment",this._fragmentCode=this._fragmentCode.replace(eo,n),t.matrixSemanticKeys=Object.keys(this.matrixSemantics);function i(a){return a!=null?function(){return a}:null}function n(a,o,s){var l=no(o,s),u=[];for(var h in l){var c=l[h],d=c.semantic,f=h,v=Wh[o],p=i(l[h].value);l[h].isArray&&(f+="["+l[h].arraySize+"]",v+="v"),u.push(f),t._uniformList.push(h),c.ignore||((o==="sampler2D"||o==="samplerCube")&&(t.textures[h]={shaderType:r,type:o}),d?t._addSemanticUniform(h,v,d):t._addMaterialUniform(h,o,v,p,l[h].isArray,e))}return u.length>0?"uniform "+o+" "+u.join(",")+`;
`:""}this.uniformTemplates=e},_parseAttributes:function(){var e={},t=this;this._vertexCode=this._vertexCode.replace(Gh,r);function r(i,n,a){var o=no(n,a),s=Xh[n]||1,l=[];for(var u in o){var h=o[u].semantic;if(e[u]={type:"float",size:s,semantic:h||null},h){if(Fn.indexOf(h)<0)throw new Error('Unkown semantic "'+h+'"');t.attributeSemantics[h]={symbol:u,type:n}}l.push(u)}return"attribute "+n+" "+l.join(",")+`;
`}this.attributes=e},_parseDefines:function(){var e=this,t="vertex";this._vertexCode=this._vertexCode.replace(to,r),t="fragment",this._fragmentCode=this._fragmentCode.replace(to,r);function r(i,n,a){var o=t==="vertex"?e.vertexDefines:e.fragmentDefines;return o[n]||(a==="false"?o[n]=!1:a==="true"?o[n]=!0:o[n]=a?isNaN(parseFloat(a))?a.trim():parseFloat(a):null),""}},clone:function(){var e=hs[this._shaderID],t=new P(e.vertex,e.fragment);return t}};Object.defineProperty&&(Object.defineProperty(P.prototype,"shaderID",{get:function(){return this._shaderID}}),Object.defineProperty(P.prototype,"vertex",{get:function(){return this._vertexCode}}),Object.defineProperty(P.prototype,"fragment",{get:function(){return this._fragmentCode}}),Object.defineProperty(P.prototype,"uniforms",{get:function(){return this._uniformList}}));var $h=/(@import)\s*([0-9a-zA-Z_\-\.]*)/g;P.parseImport=function(e){return e=e.replace($h,function(n,r,i){var n=P.source(i);return n?P.parseImport(n):(console.error('Shader chunk "'+i+'" not existed in library'),"")}),e};var jh=/(@export)\s*([0-9a-zA-Z_\-\.]*)\s*\n([\s\S]*?)@end/g;P.import=function(e){e.replace(jh,function(t,r,i,a){var a=a.replace(/(^[\s\t\xa0\u3000]+)|([\u3000\xa0\s\t]+\x24)/g,"");if(a){for(var o=i.split("."),s=P.codes,l=0,u;l<o.length-1;)u=o[l++],s[u]||(s[u]={}),s=s[u];u=o[l],s[u]=a}return a})};P.codes={};P.source=function(e){for(var t=e.split("."),r=P.codes,i=0;r&&i<t.length;){var n=t[i++];r=r[n]}return typeof r!="string"?(console.error('Shader "'+e+'" not existed in library'),""):r};var cs=`@export clay.prez.vertex
uniform mat4 WVP : WORLDVIEWPROJECTION;
attribute vec3 pos : POSITION;
attribute vec2 uv : TEXCOORD_0;
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec2 v_Texcoord;
void main()
{
 vec4 P = vec4(pos, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = WVP * P;
 v_Texcoord = uv * uvRepeat + uvOffset;
}
@end
@export clay.prez.fragment
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
varying vec2 v_Texcoord;
void main()
{
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
 gl_FragColor = vec4(0.0,0.0,0.0,1.0);
}
@end`,ue={};ue.create=function(){var e=new Oe(16);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.clone=function(e){var t=new Oe(16);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t[9]=e[9],t[10]=e[10],t[11]=e[11],t[12]=e[12],t[13]=e[13],t[14]=e[14],t[15]=e[15],t};ue.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ue.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=1,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=1,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[3],a=t[6],o=t[7],s=t[11];e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=r,e[6]=t[9],e[7]=t[13],e[8]=i,e[9]=a,e[11]=t[14],e[12]=n,e[13]=o,e[14]=s}else e[0]=t[0],e[1]=t[4],e[2]=t[8],e[3]=t[12],e[4]=t[1],e[5]=t[5],e[6]=t[9],e[7]=t[13],e[8]=t[2],e[9]=t[6],e[10]=t[10],e[11]=t[14],e[12]=t[3],e[13]=t[7],e[14]=t[11],e[15]=t[15];return e};ue.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],p=t[13],_=t[14],m=t[15],y=r*s-i*o,g=r*l-n*o,x=r*u-a*o,E=i*l-n*s,S=i*u-a*s,w=n*u-a*l,b=h*p-c*v,C=h*_-d*v,O=h*m-f*v,M=c*_-d*p,B=c*m-f*p,F=d*m-f*_,R=y*F-g*B+x*M+E*O-S*C+w*b;return R?(R=1/R,e[0]=(s*F-l*B+u*M)*R,e[1]=(n*B-i*F-a*M)*R,e[2]=(p*w-_*S+m*E)*R,e[3]=(d*S-c*w-f*E)*R,e[4]=(l*O-o*F-u*C)*R,e[5]=(r*F-n*O+a*C)*R,e[6]=(_*x-v*w-m*g)*R,e[7]=(h*w-d*x+f*g)*R,e[8]=(o*B-s*O+u*b)*R,e[9]=(i*O-r*B-a*b)*R,e[10]=(v*S-p*x+m*y)*R,e[11]=(c*x-h*S-f*y)*R,e[12]=(s*C-o*M-l*b)*R,e[13]=(r*M-i*C+n*b)*R,e[14]=(p*g-v*E-_*y)*R,e[15]=(h*E-c*g+d*y)*R,e):null};ue.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],p=t[13],_=t[14],m=t[15];return e[0]=s*(d*m-f*_)-c*(l*m-u*_)+p*(l*f-u*d),e[1]=-(i*(d*m-f*_)-c*(n*m-a*_)+p*(n*f-a*d)),e[2]=i*(l*m-u*_)-s*(n*m-a*_)+p*(n*u-a*l),e[3]=-(i*(l*f-u*d)-s*(n*f-a*d)+c*(n*u-a*l)),e[4]=-(o*(d*m-f*_)-h*(l*m-u*_)+v*(l*f-u*d)),e[5]=r*(d*m-f*_)-h*(n*m-a*_)+v*(n*f-a*d),e[6]=-(r*(l*m-u*_)-o*(n*m-a*_)+v*(n*u-a*l)),e[7]=r*(l*f-u*d)-o*(n*f-a*d)+h*(n*u-a*l),e[8]=o*(c*m-f*p)-h*(s*m-u*p)+v*(s*f-u*c),e[9]=-(r*(c*m-f*p)-h*(i*m-a*p)+v*(i*f-a*c)),e[10]=r*(s*m-u*p)-o*(i*m-a*p)+v*(i*u-a*s),e[11]=-(r*(s*f-u*c)-o*(i*f-a*c)+h*(i*u-a*s)),e[12]=-(o*(c*_-d*p)-h*(s*_-l*p)+v*(s*d-l*c)),e[13]=r*(c*_-d*p)-h*(i*_-n*p)+v*(i*d-n*c),e[14]=-(r*(s*_-l*p)-o*(i*_-n*p)+v*(i*l-n*s)),e[15]=r*(s*d-l*c)-o*(i*d-n*c)+h*(i*l-n*s),e};ue.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8],h=e[9],c=e[10],d=e[11],f=e[12],v=e[13],p=e[14],_=e[15],m=t*o-r*a,y=t*s-i*a,g=t*l-n*a,x=r*s-i*o,E=r*l-n*o,S=i*l-n*s,w=u*v-h*f,b=u*p-c*f,C=u*_-d*f,O=h*p-c*v,M=h*_-d*v,B=c*_-d*p;return m*B-y*M+g*O+x*C-E*b+S*w};ue.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=t[9],f=t[10],v=t[11],p=t[12],_=t[13],m=t[14],y=t[15],g=r[0],x=r[1],E=r[2],S=r[3];return e[0]=g*i+x*s+E*c+S*p,e[1]=g*n+x*l+E*d+S*_,e[2]=g*a+x*u+E*f+S*m,e[3]=g*o+x*h+E*v+S*y,g=r[4],x=r[5],E=r[6],S=r[7],e[4]=g*i+x*s+E*c+S*p,e[5]=g*n+x*l+E*d+S*_,e[6]=g*a+x*u+E*f+S*m,e[7]=g*o+x*h+E*v+S*y,g=r[8],x=r[9],E=r[10],S=r[11],e[8]=g*i+x*s+E*c+S*p,e[9]=g*n+x*l+E*d+S*_,e[10]=g*a+x*u+E*f+S*m,e[11]=g*o+x*h+E*v+S*y,g=r[12],x=r[13],E=r[14],S=r[15],e[12]=g*i+x*s+E*c+S*p,e[13]=g*n+x*l+E*d+S*_,e[14]=g*a+x*u+E*f+S*m,e[15]=g*o+x*h+E*v+S*y,e};ue.multiplyAffine=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[4],s=t[5],l=t[6],u=t[8],h=t[9],c=t[10],d=t[12],f=t[13],v=t[14],p=r[0],_=r[1],m=r[2];return e[0]=p*i+_*o+m*u,e[1]=p*n+_*s+m*h,e[2]=p*a+_*l+m*c,p=r[4],_=r[5],m=r[6],e[4]=p*i+_*o+m*u,e[5]=p*n+_*s+m*h,e[6]=p*a+_*l+m*c,p=r[8],_=r[9],m=r[10],e[8]=p*i+_*o+m*u,e[9]=p*n+_*s+m*h,e[10]=p*a+_*l+m*c,p=r[12],_=r[13],m=r[14],e[12]=p*i+_*o+m*u+d,e[13]=p*n+_*s+m*h+f,e[14]=p*a+_*l+m*c+v,e};ue.mul=ue.multiply;ue.mulAffine=ue.multiplyAffine;ue.translate=function(e,t,r){var i=r[0],n=r[1],a=r[2],o,s,l,u,h,c,d,f,v,p,_,m;return t===e?(e[12]=t[0]*i+t[4]*n+t[8]*a+t[12],e[13]=t[1]*i+t[5]*n+t[9]*a+t[13],e[14]=t[2]*i+t[6]*n+t[10]*a+t[14],e[15]=t[3]*i+t[7]*n+t[11]*a+t[15]):(o=t[0],s=t[1],l=t[2],u=t[3],h=t[4],c=t[5],d=t[6],f=t[7],v=t[8],p=t[9],_=t[10],m=t[11],e[0]=o,e[1]=s,e[2]=l,e[3]=u,e[4]=h,e[5]=c,e[6]=d,e[7]=f,e[8]=v,e[9]=p,e[10]=_,e[11]=m,e[12]=o*i+h*n+v*a+t[12],e[13]=s*i+c*n+p*a+t[13],e[14]=l*i+d*n+_*a+t[14],e[15]=u*i+f*n+m*a+t[15]),e};ue.scale=function(e,t,r){var i=r[0],n=r[1],a=r[2];return e[0]=t[0]*i,e[1]=t[1]*i,e[2]=t[2]*i,e[3]=t[3]*i,e[4]=t[4]*n,e[5]=t[5]*n,e[6]=t[6]*n,e[7]=t[7]*n,e[8]=t[8]*a,e[9]=t[9]*a,e[10]=t[10]*a,e[11]=t[11]*a,e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15],e};ue.rotate=function(e,t,r,i){var n=i[0],a=i[1],o=i[2],s=Math.sqrt(n*n+a*a+o*o),l,u,h,c,d,f,v,p,_,m,y,g,x,E,S,w,b,C,O,M,B,F,R,H;return Math.abs(s)<mi?null:(s=1/s,n*=s,a*=s,o*=s,l=Math.sin(r),u=Math.cos(r),h=1-u,c=t[0],d=t[1],f=t[2],v=t[3],p=t[4],_=t[5],m=t[6],y=t[7],g=t[8],x=t[9],E=t[10],S=t[11],w=n*n*h+u,b=a*n*h+o*l,C=o*n*h-a*l,O=n*a*h-o*l,M=a*a*h+u,B=o*a*h+n*l,F=n*o*h+a*l,R=a*o*h-n*l,H=o*o*h+u,e[0]=c*w+p*b+g*C,e[1]=d*w+_*b+x*C,e[2]=f*w+m*b+E*C,e[3]=v*w+y*b+S*C,e[4]=c*O+p*M+g*B,e[5]=d*O+_*M+x*B,e[6]=f*O+m*M+E*B,e[7]=v*O+y*M+S*B,e[8]=c*F+p*R+g*H,e[9]=d*F+_*R+x*H,e[10]=f*F+m*R+E*H,e[11]=v*F+y*R+S*H,t!==e&&(e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e)};ue.rotateX=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[4],o=t[5],s=t[6],l=t[7],u=t[8],h=t[9],c=t[10],d=t[11];return t!==e&&(e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[4]=a*n+u*i,e[5]=o*n+h*i,e[6]=s*n+c*i,e[7]=l*n+d*i,e[8]=u*n-a*i,e[9]=h*n-o*i,e[10]=c*n-s*i,e[11]=d*n-l*i,e};ue.rotateY=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[8],h=t[9],c=t[10],d=t[11];return t!==e&&(e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n-u*i,e[1]=o*n-h*i,e[2]=s*n-c*i,e[3]=l*n-d*i,e[8]=a*i+u*n,e[9]=o*i+h*n,e[10]=s*i+c*n,e[11]=l*i+d*n,e};ue.rotateZ=function(e,t,r){var i=Math.sin(r),n=Math.cos(r),a=t[0],o=t[1],s=t[2],l=t[3],u=t[4],h=t[5],c=t[6],d=t[7];return t!==e&&(e[8]=t[8],e[9]=t[9],e[10]=t[10],e[11]=t[11],e[12]=t[12],e[13]=t[13],e[14]=t[14],e[15]=t[15]),e[0]=a*n+u*i,e[1]=o*n+h*i,e[2]=s*n+c*i,e[3]=l*n+d*i,e[4]=u*n-a*i,e[5]=h*n-o*i,e[6]=c*n-s*i,e[7]=d*n-l*i,e};ue.fromRotationTranslation=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=i+i,l=n+n,u=a+a,h=i*s,c=i*l,d=i*u,f=n*l,v=n*u,p=a*u,_=o*s,m=o*l,y=o*u;return e[0]=1-(f+p),e[1]=c+y,e[2]=d-m,e[3]=0,e[4]=c-y,e[5]=1-(h+p),e[6]=v+_,e[7]=0,e[8]=d+m,e[9]=v-_,e[10]=1-(h+f),e[11]=0,e[12]=r[0],e[13]=r[1],e[14]=r[2],e[15]=1,e};ue.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,h=i*o,c=i*s,d=n*o,f=n*s,v=n*l,p=a*o,_=a*s,m=a*l;return e[0]=1-c-v,e[1]=h+m,e[2]=d-_,e[3]=0,e[4]=h-m,e[5]=1-u-v,e[6]=f+p,e[7]=0,e[8]=d+_,e[9]=f-p,e[10]=1-u-c,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,e};ue.frustum=function(e,t,r,i,n,a,o){var s=1/(r-t),l=1/(n-i),u=1/(a-o);return e[0]=a*2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a*2*l,e[6]=0,e[7]=0,e[8]=(r+t)*s,e[9]=(n+i)*l,e[10]=(o+a)*u,e[11]=-1,e[12]=0,e[13]=0,e[14]=o*a*2*u,e[15]=0,e};ue.perspective=function(e,t,r,i,n){var a=1/Math.tan(t/2),o=1/(i-n);return e[0]=a/r,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=a,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=(n+i)*o,e[11]=-1,e[12]=0,e[13]=0,e[14]=2*n*i*o,e[15]=0,e};ue.ortho=function(e,t,r,i,n,a,o){var s=1/(t-r),l=1/(i-n),u=1/(a-o);return e[0]=-2*s,e[1]=0,e[2]=0,e[3]=0,e[4]=0,e[5]=-2*l,e[6]=0,e[7]=0,e[8]=0,e[9]=0,e[10]=2*u,e[11]=0,e[12]=(t+r)*s,e[13]=(n+i)*l,e[14]=(o+a)*u,e[15]=1,e};ue.lookAt=function(e,t,r,i){var n,a,o,s,l,u,h,c,d,f,v=t[0],p=t[1],_=t[2],m=i[0],y=i[1],g=i[2],x=r[0],E=r[1],S=r[2];return Math.abs(v-x)<mi&&Math.abs(p-E)<mi&&Math.abs(_-S)<mi?ue.identity(e):(h=v-x,c=p-E,d=_-S,f=1/Math.sqrt(h*h+c*c+d*d),h*=f,c*=f,d*=f,n=y*d-g*c,a=g*h-m*d,o=m*c-y*h,f=Math.sqrt(n*n+a*a+o*o),f?(f=1/f,n*=f,a*=f,o*=f):(n=0,a=0,o=0),s=c*o-d*a,l=d*n-h*o,u=h*a-c*n,f=Math.sqrt(s*s+l*l+u*u),f?(f=1/f,s*=f,l*=f,u*=f):(s=0,l=0,u=0),e[0]=n,e[1]=s,e[2]=h,e[3]=0,e[4]=a,e[5]=l,e[6]=c,e[7]=0,e[8]=o,e[9]=u,e[10]=d,e[11]=0,e[12]=-(n*v+a*p+o*_),e[13]=-(s*v+l*p+u*_),e[14]=-(h*v+c*p+d*_),e[15]=1,e)};ue.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2)+Math.pow(e[9],2)+Math.pow(e[10],2)+Math.pow(e[11],2)+Math.pow(e[12],2)+Math.pow(e[13],2)+Math.pow(e[14],2)+Math.pow(e[15],2))};var L=ue,X={};X.create=function(){var e=new Oe(3);return e[0]=0,e[1]=0,e[2]=0,e};X.clone=function(e){var t=new Oe(3);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t};X.fromValues=function(e,t,r){var i=new Oe(3);return i[0]=e,i[1]=t,i[2]=r,i};X.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e};X.set=function(e,t,r,i){return e[0]=t,e[1]=r,e[2]=i,e};X.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e};X.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e};X.sub=X.subtract;X.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e};X.mul=X.multiply;X.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e};X.div=X.divide;X.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e};X.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e};X.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e};X.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e};X.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return Math.sqrt(r*r+i*i+n*n)};X.dist=X.distance;X.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2];return r*r+i*i+n*n};X.sqrDist=X.squaredDistance;X.length=function(e){var t=e[0],r=e[1],i=e[2];return Math.sqrt(t*t+r*r+i*i)};X.len=X.length;X.squaredLength=function(e){var t=e[0],r=e[1],i=e[2];return t*t+r*r+i*i};X.sqrLen=X.squaredLength;X.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e};X.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e};X.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=r*r+i*i+n*n;return a>0&&(a=1/Math.sqrt(a),e[0]=t[0]*a,e[1]=t[1]*a,e[2]=t[2]*a),e};X.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]};X.cross=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2];return e[0]=n*l-a*s,e[1]=a*o-i*l,e[2]=i*s-n*o,e};X.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e};X.random=function(e,t){t=t||1;var r=fr()*2*Math.PI,i=fr()*2-1,n=Math.sqrt(1-i*i)*t;return e[0]=Math.cos(r)*n,e[1]=Math.sin(r)*n,e[2]=i*t,e};X.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[3]*i+r[7]*n+r[11]*a+r[15];return o=o||1,e[0]=(r[0]*i+r[4]*n+r[8]*a+r[12])/o,e[1]=(r[1]*i+r[5]*n+r[9]*a+r[13])/o,e[2]=(r[2]*i+r[6]*n+r[10]*a+r[14])/o,e};X.transformMat3=function(e,t,r){var i=t[0],n=t[1],a=t[2];return e[0]=i*r[0]+n*r[3]+a*r[6],e[1]=i*r[1]+n*r[4]+a*r[7],e[2]=i*r[2]+n*r[5]+a*r[8],e};X.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*a-l*n,c=u*n+l*i-o*a,d=u*a+o*n-s*i,f=-o*i-s*n-l*a;return e[0]=h*u+f*-o+c*-l-d*-s,e[1]=c*u+f*-s+d*-o-h*-l,e[2]=d*u+f*-l+h*-s-c*-o,e};X.rotateX=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0],a[1]=n[1]*Math.cos(i)-n[2]*Math.sin(i),a[2]=n[1]*Math.sin(i)+n[2]*Math.cos(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.rotateY=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[2]*Math.sin(i)+n[0]*Math.cos(i),a[1]=n[1],a[2]=n[2]*Math.cos(i)-n[0]*Math.sin(i),e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.rotateZ=function(e,t,r,i){var n=[],a=[];return n[0]=t[0]-r[0],n[1]=t[1]-r[1],n[2]=t[2]-r[2],a[0]=n[0]*Math.cos(i)-n[1]*Math.sin(i),a[1]=n[0]*Math.sin(i)+n[1]*Math.cos(i),a[2]=n[2],e[0]=a[0]+r[0],e[1]=a[1]+r[1],e[2]=a[2]+r[2],e};X.forEach=function(){var e=X.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=3),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2];return t}}();X.angle=function(e,t){var r=X.fromValues(e[0],e[1],e[2]),i=X.fromValues(t[0],t[1],t[2]);X.normalize(r,r),X.normalize(i,i);var n=X.dot(r,i);return n>1?0:Math.acos(n)};var T=X;P.import(cs);var ve=L.create,ao={};function oo(e){return e.material}function qh(e,t,r){return t.uniforms[r].value}function Zh(e,t,r,i){return r!==i}function Kh(e){return!0}function so(){}var lo={float:A.FLOAT,byte:A.BYTE,ubyte:A.UNSIGNED_BYTE,short:A.SHORT,ushort:A.UNSIGNED_SHORT};function Qh(e,t,r){this.availableAttributes=e,this.availableAttributeSymbols=t,this.indicesBuffer=r,this.vao=null}function Jh(e){var t,r;this.bind=function(i){t||(t=we.createCanvas(),t.width=t.height=1,t.getContext("2d"));var n=i.gl,a=!r;a&&(r=n.createTexture()),n.bindTexture(n.TEXTURE_2D,r),a&&n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,t)},this.unbind=function(i){i.gl.bindTexture(i.gl.TEXTURE_2D,null)},this.isRenderable=function(){return!0}}var Ot=Qe.extend(function(){return{canvas:null,_width:100,_height:100,devicePixelRatio:typeof window<"u"&&window.devicePixelRatio||1,clearColor:[0,0,0,0],clearBit:17664,alpha:!0,depth:!0,stencil:!1,antialias:!0,premultipliedAlpha:!0,preserveDrawingBuffer:!1,throwError:!0,gl:null,viewport:{},maxJointNumber:20,__currentFrameBuffer:null,_viewportStack:[],_clearStack:[],_sceneRendering:null}},function(){this.canvas||(this.canvas=we.createCanvas());var e=this.canvas;try{var t={alpha:this.alpha,depth:this.depth,stencil:this.stencil,antialias:this.antialias,premultipliedAlpha:this.premultipliedAlpha,preserveDrawingBuffer:this.preserveDrawingBuffer};if(this.gl=e.getContext("webgl",t)||e.getContext("experimental-webgl",t),!this.gl)throw new Error;this._glinfo=new Mh(this.gl),this.gl.targetRenderer&&console.error("Already created a renderer"),this.gl.targetRenderer=this,this.resize()}catch(r){throw"Error creating WebGL Context "+r}this._programMgr=new ss(this),this._placeholderTexture=new Jh},{resize:function(e,t){var r=this.canvas,i=this.devicePixelRatio;e!=null?(r.style&&(r.style.width=e+"px",r.style.height=t+"px"),r.width=e*i,r.height=t*i,this._width=e,this._height=t):(this._width=r.width/i,this._height=r.height/i),this.setViewport(0,0,this._width,this._height)},getWidth:function(){return this._width},getHeight:function(){return this._height},getViewportAspect:function(){var e=this.viewport;return e.width/e.height},setDevicePixelRatio:function(e){this.devicePixelRatio=e,this.resize(this._width,this._height)},getDevicePixelRatio:function(){return this.devicePixelRatio},getGLExtension:function(e){return this._glinfo.getExtension(e)},getGLParameter:function(e){return this._glinfo.getParameter(e)},setViewport:function(e,t,r,i,n){if(typeof e=="object"){var a=e;e=a.x,t=a.y,r=a.width,i=a.height,n=a.devicePixelRatio}n=n||this.devicePixelRatio,this.gl.viewport(e*n,t*n,r*n,i*n),this.viewport={x:e,y:t,width:r,height:i,devicePixelRatio:n}},saveViewport:function(){this._viewportStack.push(this.viewport)},restoreViewport:function(){this._viewportStack.length>0&&this.setViewport(this._viewportStack.pop())},saveClear:function(){this._clearStack.push({clearBit:this.clearBit,clearColor:this.clearColor})},restoreClear:function(){if(this._clearStack.length>0){var e=this._clearStack.pop();this.clearColor=e.clearColor,this.clearBit=e.clearBit}},bindSceneRendering:function(e){this._sceneRendering=e},render:function(e,t,r,i){var n=this.gl,a=this.clearColor;if(this.clearBit){n.colorMask(!0,!0,!0,!0),n.depthMask(!0);var o=this.viewport,s=!1,l=o.devicePixelRatio;(o.width!==this._width||o.height!==this._height||l&&l!==this.devicePixelRatio||o.x||o.y)&&(s=!0,n.enable(n.SCISSOR_TEST),n.scissor(o.x*l,o.y*l,o.width*l,o.height*l)),n.clearColor(a[0],a[1],a[2],a[3]),n.clear(this.clearBit),s&&n.disable(n.SCISSOR_TEST)}if(r||e.update(!1),e.updateLights(),t=t||e.getMainCamera(),!t){console.error("Can't find camera in the scene.");return}t.update();var u=e.updateRenderList(t,!0);this._sceneRendering=e;var h=u.opaque,c=u.transparent,d=e.material;e.trigger("beforerender",this,e,t,u),i?(this.renderPreZ(h,e,t),n.depthFunc(n.LEQUAL)):n.depthFunc(n.LESS);for(var f=ve(),v=T.create(),p=0;p<c.length;p++){var _=c[p];L.multiplyAffine(f,t.viewMatrix.array,_.worldTransform.array),T.transformMat4(v,_.position.array,f),_.__depth=v[2]}this.renderPass(h,t,{getMaterial:function(m){return d||m.material},sortCompare:this.opaqueSortCompare}),this.renderPass(c,t,{getMaterial:function(m){return d||m.material},sortCompare:this.transparentSortCompare}),e.trigger("afterrender",this,e,t,u),this._sceneRendering=null},getProgram:function(e,t,r){return t=t||e.material,this._programMgr.getProgram(e,t,r)},validateProgram:function(e){if(e.__error){var t=e.__error;if(ao[e.__uid__])return;if(ao[e.__uid__]=!0,this.throwError)throw new Error(t);this.trigger("error",t)}},updatePrograms:function(e,t,r){var i=r&&r.getMaterial||oo;t=t||null;for(var n=0;n<e.length;n++){var a=e[n],o=i.call(this,a);if(n>0){var s=e[n-1],l=s.joints?s.joints.length:0,u=a.joints?a.joints.length:0;if(u===l&&a.material===s.material&&a.lightGroup===s.lightGroup){a.__program=s.__program;continue}}var h=this._programMgr.getProgram(a,o,t);this.validateProgram(h),a.__program=h}},renderPass:function(e,t,r){this.trigger("beforerenderpass",this,e,t,r),r=r||{},r.getMaterial=r.getMaterial||oo,r.getUniform=r.getUniform||qh,r.isMaterialChanged=r.isMaterialChanged||Zh,r.beforeRender=r.beforeRender||so,r.afterRender=r.afterRender||so;var i=r.ifRender||Kh;this.updatePrograms(e,this._sceneRendering,r),r.sortCompare&&e.sort(r.sortCompare);var n=this.viewport,a=n.devicePixelRatio,o=[n.x*a,n.y*a,n.width*a,n.height*a],s=this.devicePixelRatio,l=this.__currentFrameBuffer?[this.__currentFrameBuffer.getTextureWidth(),this.__currentFrameBuffer.getTextureHeight()]:[this._width*s,this._height*s],u=[o[2],o[3]],h=Date.now();t?(L.copy(de.VIEW,t.viewMatrix.array),L.copy(de.PROJECTION,t.projectionMatrix.array),L.copy(de.VIEWINVERSE,t.worldTransform.array)):(L.identity(de.VIEW),L.identity(de.PROJECTION),L.identity(de.VIEWINVERSE)),L.multiply(de.VIEWPROJECTION,de.PROJECTION,de.VIEW),L.invert(de.PROJECTIONINVERSE,de.PROJECTION),L.invert(de.VIEWPROJECTIONINVERSE,de.VIEWPROJECTION);for(var c=this.gl,d=this._sceneRendering,f,v,p,_,m,y,g,x,E,S,w,b,C=null,O=0;O<e.length;O++){var M=e[O],B=M.worldTransform!=null,F;if(!!i(M)){B&&(F=M.isSkinnedMesh&&M.isSkinnedMesh()?M.offsetMatrix?M.offsetMatrix.array:de.IDENTITY:M.worldTransform.array);var R=M.geometry,H=r.getMaterial.call(this,M),U=M.__program,q=H.shader,I=R.__uid__+"-"+U.__uid__,fe=I!==S;S=I,fe&&C&&C.bindVertexArrayOES(null),B&&(L.copy(de.WORLD,F),L.multiply(de.WORLDVIEWPROJECTION,de.VIEWPROJECTION,F),L.multiplyAffine(de.WORLDVIEW,de.VIEW,F),(q.matrixSemantics.WORLDINVERSE||q.matrixSemantics.WORLDINVERSETRANSPOSE)&&L.invert(de.WORLDINVERSE,F),(q.matrixSemantics.WORLDVIEWINVERSE||q.matrixSemantics.WORLDVIEWINVERSETRANSPOSE)&&L.invert(de.WORLDVIEWINVERSE,de.WORLDVIEW),(q.matrixSemantics.WORLDVIEWPROJECTIONINVERSE||q.matrixSemantics.WORLDVIEWPROJECTIONINVERSETRANSPOSE)&&L.invert(de.WORLDVIEWPROJECTIONINVERSE,de.WORLDVIEWPROJECTION)),M.beforeRender&&M.beforeRender(this),r.beforeRender.call(this,M,H,f);var k=U!==v;k?(U.bind(this),U.setUniformOfSemantic(c,"VIEWPORT",o),U.setUniformOfSemantic(c,"WINDOW_SIZE",l),t&&(U.setUniformOfSemantic(c,"NEAR",t.near),U.setUniformOfSemantic(c,"FAR",t.far)),U.setUniformOfSemantic(c,"DEVICEPIXELRATIO",a),U.setUniformOfSemantic(c,"TIME",h),U.setUniformOfSemantic(c,"VIEWPORT_SIZE",u),d&&d.setLightUniforms(U,M.lightGroup,this)):U=v,(k||r.isMaterialChanged(M,p,H,f))&&(H.depthTest!==_&&(H.depthTest?c.enable(c.DEPTH_TEST):c.disable(c.DEPTH_TEST),_=H.depthTest),H.depthMask!==m&&(c.depthMask(H.depthMask),m=H.depthMask),H.transparent!==E&&(H.transparent?c.enable(c.BLEND):c.disable(c.BLEND),E=H.transparent),H.transparent&&(H.blend?H.blend(c):(c.blendEquationSeparate(c.FUNC_ADD,c.FUNC_ADD),c.blendFuncSeparate(c.SRC_ALPHA,c.ONE_MINUS_SRC_ALPHA,c.ONE,c.ONE_MINUS_SRC_ALPHA))),b=this._bindMaterial(M,H,U,p||null,f||null,v||null,r.getUniform),f=H);var xe=q.matrixSemanticKeys;if(B)for(var oe=0;oe<xe.length;oe++){var pe=xe[oe],_e=q.matrixSemantics[pe],Be=de[pe];if(_e.isTranspose){var Fe=de[_e.semanticNoTranspose];L.transpose(Be,Fe)}U.setUniform(c,_e.type,_e.symbol,Be)}M.cullFace!==g&&(g=M.cullFace,c.cullFace(g)),M.frontFace!==x&&(x=M.frontFace,c.frontFace(x)),M.culling!==y&&(y=M.culling,y?c.enable(c.CULL_FACE):c.disable(c.CULL_FACE)),this._updateSkeleton(M,U,b),fe&&(w=this._bindVAO(C,q,R,U)),this._renderObject(M,w,U),r.afterRender(this,M),M.afterRender&&M.afterRender(this),v=U,p=M}}this.trigger("afterrenderpass",this,e,t,r)},getMaxJointNumber:function(){return this.maxJointNumber},_updateSkeleton:function(e,t,r){var i=this.gl,n=e.skeleton;if(n)if(n.update(),e.joints.length>this.getMaxJointNumber()){var a=n.getSubSkinMatricesTexture(e.__uid__,e.joints);t.useTextureSlot(this,a,r),t.setUniform(i,"1i","skinMatricesTexture",r),t.setUniform(i,"1f","skinMatricesTextureSize",a.width)}else{var o=n.getSubSkinMatrices(e.__uid__,e.joints);t.setUniformOfSemantic(i,"SKIN_MATRIX",o)}},_renderObject:function(e,t,r){var i=this.gl,n=e.geometry,a=e.mode;a==null&&(a=4);var o=null,s=e.isInstancedMesh&&e.isInstancedMesh();if(s&&(o=this.getGLExtension("ANGLE_instanced_arrays"),!o)){console.warn("Device not support ANGLE_instanced_arrays extension");return}var l;if(s&&(l=this._bindInstancedAttributes(e,r,o)),t.indicesBuffer){var u=this.getGLExtension("OES_element_index_uint"),h=u&&n.indices instanceof Uint32Array,c=h?i.UNSIGNED_INT:i.UNSIGNED_SHORT;s?o.drawElementsInstancedANGLE(a,t.indicesBuffer.count,c,0,e.getInstanceCount()):i.drawElements(a,t.indicesBuffer.count,c,0)}else s?o.drawArraysInstancedANGLE(a,0,n.vertexCount,e.getInstanceCount()):i.drawArrays(a,0,n.vertexCount);if(s)for(var d=0;d<l.length;d++)i.disableVertexAttribArray(l[d])},_bindInstancedAttributes:function(e,t,r){for(var i=this.gl,n=e.getInstancedAttributesBuffers(this),a=[],o=0;o<n.length;o++){var s=n[o],l=t.getAttribLocation(i,s.symbol);if(!(l<0)){var u=lo[s.type]||i.FLOAT;i.enableVertexAttribArray(l),i.bindBuffer(i.ARRAY_BUFFER,s.buffer),i.vertexAttribPointer(l,s.size,u,!1,0,0),r.vertexAttribDivisorANGLE(l,s.divisor),a.push(l)}}return a},_bindMaterial:function(e,t,r,i,n,a,o){for(var s=this.gl,l=a===r,u=r.currentTextureSlot(),h=t.getEnabledUniforms(),c=t.getTextureUniforms(),d=this._placeholderTexture,f=0;f<c.length;f++){var v=c[f],p=o(e,t,v),_=t.uniforms[v].type;if(_==="t"&&p)p.__slot=-1;else if(_==="tv")for(var m=0;m<p.length;m++)p[m]&&(p[m].__slot=-1)}d.__slot=-1;for(var f=0;f<h.length;f++){var v=h[f],y=t.uniforms[v],p=o(e,t,v),_=y.type,g=_==="t";if(g&&(!p||!p.isRenderable())&&(p=d),n&&l){var x=o(i,n,v);if(g&&(!x||!x.isRenderable())&&(x=d),x===p){if(g)r.takeCurrentTextureSlot(this,null);else if(_==="tv"&&p)for(var m=0;m<p.length;m++)r.takeCurrentTextureSlot(this,null);continue}}if(p!=null)if(g)if(p.__slot<0){var E=r.currentTextureSlot(),S=r.setUniform(s,"1i",v,E);S&&(r.takeCurrentTextureSlot(this,p),p.__slot=E)}else r.setUniform(s,"1i",v,p.__slot);else if(Array.isArray(p)){if(p.length===0)continue;if(_==="tv"){if(!r.hasUniform(v))continue;for(var w=[],m=0;m<p.length;m++){var b=p[m];if(b.__slot<0){var E=r.currentTextureSlot();w.push(E),r.takeCurrentTextureSlot(this,b),b.__slot=E}else w.push(b.__slot)}r.setUniform(s,"1iv",v,w)}else r.setUniform(s,y.type,v,p)}else r.setUniform(s,y.type,v,p)}var C=r.currentTextureSlot();return r.resetTextureSlot(u),C},_bindVAO:function(e,t,r,i){var n=!r.dynamic,a=this.gl,o=this.__uid__+"-"+i.__uid__,s=r.__vaoCache[o];if(!s){var l=r.getBufferChunks(this);if(!l||!l.length)return;for(var u=l[0],h=u.attributeBuffers,x=u.indicesBuffer,g=[],c=[],d=0;d<h.length;d++){var f=h[d],v=f.name,p=f.semantic,_;if(p){var m=t.attributeSemantics[p];_=m&&m.symbol}else _=v;_&&i.attributes[_]&&(g.push(f),c.push(_))}s=new Qh(g,c,x),n&&(r.__vaoCache[o]=s)}var y=!0;e&&n&&(s.vao==null?s.vao=e.createVertexArrayOES():y=!1,e.bindVertexArrayOES(s.vao));var g=s.availableAttributes,x=s.indicesBuffer;if(y){for(var E=i.enableAttributes(this,s.availableAttributeSymbols,e&&n&&s),d=0;d<g.length;d++){var S=E[d];if(S!==-1){var f=g[d],w=f.buffer,b=f.size,C=lo[f.type]||a.FLOAT;a.bindBuffer(a.ARRAY_BUFFER,w),a.vertexAttribPointer(S,b,C,!1,0,0)}}r.isUseIndices()&&a.bindBuffer(a.ELEMENT_ARRAY_BUFFER,x.buffer)}return s},renderPreZ:function(e,t,r){var i=this.gl,n=this._prezMaterial||new Mt({shader:new P(P.source("clay.prez.vertex"),P.source("clay.prez.fragment"))});this._prezMaterial=n,i.colorMask(!1,!1,!1,!1),i.depthMask(!0),this.renderPass(e,r,{ifRender:function(a){return!a.ignorePreZ},isMaterialChanged:function(a,o){var s=a.material,l=o.material;return s.get("diffuseMap")!==l.get("diffuseMap")||(s.get("alphaCutoff")||0)!==(l.get("alphaCutoff")||0)},getUniform:function(a,o,s){if(s==="alphaMap")return a.material.get("diffuseMap");if(s==="alphaCutoff"){if(a.material.isDefined("fragment","ALPHA_TEST")&&a.material.get("diffuseMap")){var l=a.material.get("alphaCutoff");return l||0}return 0}else return s==="uvRepeat"?a.material.get("uvRepeat"):s==="uvOffset"?a.material.get("uvOffset"):o.get(s)},getMaterial:function(){return n},sort:this.opaqueSortCompare}),i.colorMask(!0,!0,!0,!0),i.depthMask(!0)},disposeScene:function(e){this.disposeNode(e,!0,!0),e.dispose()},disposeNode:function(e,t,r){e.getParent()&&e.getParent().remove(e);var i={};e.traverse(function(n){var a=n.material;if(n.geometry&&t&&n.geometry.dispose(this),r&&a&&!i[a.__uid__]){for(var o=a.getTextureUniforms(),s=0;s<o.length;s++){var l=o[s],u=a.uniforms[l].value,h=a.uniforms[l].type;if(!!u){if(h==="t")u.dispose&&u.dispose(this);else if(h==="tv")for(var c=0;c<u.length;c++)u[c]&&u[c].dispose&&u[c].dispose(this)}}i[a.__uid__]=!0}n.dispose&&n.dispose(this)},this)},disposeGeometry:function(e){e.dispose(this)},disposeTexture:function(e){e.dispose(this)},disposeFrameBuffer:function(e){e.dispose(this)},dispose:function(){},screenToNDC:function(e,t,r){r||(r=new tt),t=this._height-t;var i=this.viewport,n=r.array;return n[0]=(e-i.x)/i.width,n[0]=n[0]*2-1,n[1]=(t-i.y)/i.height,n[1]=n[1]*2-1,r}});Ot.opaqueSortCompare=Ot.prototype.opaqueSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.renderOrder-t.renderOrder};Ot.transparentSortCompare=Ot.prototype.transparentSortCompare=function(e,t){return e.renderOrder===t.renderOrder?e.__depth===t.__depth?e.__program===t.__program?e.material===t.material?e.geometry.__uid__-t.geometry.__uid__:e.material.__uid__-t.material.__uid__:e.__program&&t.__program?e.__program.__uid__-t.__program.__uid__:0:e.__depth-t.__depth:e.renderOrder-t.renderOrder};var de={IDENTITY:ve(),WORLD:ve(),VIEW:ve(),PROJECTION:ve(),WORLDVIEW:ve(),VIEWPROJECTION:ve(),WORLDVIEWPROJECTION:ve(),WORLDINVERSE:ve(),VIEWINVERSE:ve(),PROJECTIONINVERSE:ve(),WORLDVIEWINVERSE:ve(),VIEWPROJECTIONINVERSE:ve(),WORLDVIEWPROJECTIONINVERSE:ve(),WORLDTRANSPOSE:ve(),VIEWTRANSPOSE:ve(),PROJECTIONTRANSPOSE:ve(),WORLDVIEWTRANSPOSE:ve(),VIEWPROJECTIONTRANSPOSE:ve(),WORLDVIEWPROJECTIONTRANSPOSE:ve(),WORLDINVERSETRANSPOSE:ve(),VIEWINVERSETRANSPOSE:ve(),PROJECTIONINVERSETRANSPOSE:ve(),WORLDVIEWINVERSETRANSPOSE:ve(),VIEWPROJECTIONINVERSETRANSPOSE:ve(),WORLDVIEWPROJECTIONINVERSETRANSPOSE:ve()};Ot.COLOR_BUFFER_BIT=A.COLOR_BUFFER_BIT;Ot.DEPTH_BUFFER_BIT=A.DEPTH_BUFFER_BIT;Ot.STENCIL_BUFFER_BIT=A.STENCIL_BUFFER_BIT;var Nr=Ot,W=function(e,t,r){e=e||0,t=t||0,r=r||0,this.array=T.fromValues(e,t,r),this._dirty=!0};W.prototype={constructor:W,add:function(e){return T.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this._dirty=!0,this},clone:function(){return new W(this.x,this.y,this.z)},copy:function(e){return T.copy(this.array,e.array),this._dirty=!0,this},cross:function(e,t){return T.cross(this.array,e.array,t.array),this._dirty=!0,this},dist:function(e){return T.dist(this.array,e.array)},distance:function(e){return T.distance(this.array,e.array)},div:function(e){return T.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return T.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return T.dot(this.array,e.array)},len:function(){return T.len(this.array)},length:function(){return T.length(this.array)},lerp:function(e,t,r){return T.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return T.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return T.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return T.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return T.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return T.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return T.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return T.random(this.array,e),this._dirty=!0,this},scale:function(e){return T.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return T.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return T.sqrDist(this.array,e.array)},squaredDistance:function(e){return T.squaredDistance(this.array,e.array)},sqrLen:function(){return T.sqrLen(this.array)},squaredLength:function(){return T.squaredLength(this.array)},sub:function(e){return T.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return T.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat3:function(e){return T.transformMat3(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return T.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return T.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},applyProjection:function(e){var t=this.array;if(e=e.array,e[15]===0){var r=-1/t[2];t[0]=e[0]*t[0]*r,t[1]=e[5]*t[1]*r,t[2]=(e[10]*t[2]+e[14])*r}else t[0]=e[0]*t[0]+e[12],t[1]=e[5]*t[1]+e[13],t[2]=e[10]*t[2]+e[14];return this._dirty=!0,this},eulerFromQuat:function(e,t){W.eulerFromQuat(this,e,t)},eulerFromMat3:function(e,t){W.eulerFromMat3(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var oi=Object.defineProperty;if(oi){var cn=W.prototype;oi(cn,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),oi(cn,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),oi(cn,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}})}W.add=function(e,t,r){return T.add(e.array,t.array,r.array),e._dirty=!0,e};W.set=function(e,t,r,i){T.set(e.array,t,r,i),e._dirty=!0};W.copy=function(e,t){return T.copy(e.array,t.array),e._dirty=!0,e};W.cross=function(e,t,r){return T.cross(e.array,t.array,r.array),e._dirty=!0,e};W.dist=function(e,t){return T.distance(e.array,t.array)};W.distance=W.dist;W.div=function(e,t,r){return T.divide(e.array,t.array,r.array),e._dirty=!0,e};W.divide=W.div;W.dot=function(e,t){return T.dot(e.array,t.array)};W.len=function(e){return T.length(e.array)};W.lerp=function(e,t,r,i){return T.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};W.min=function(e,t,r){return T.min(e.array,t.array,r.array),e._dirty=!0,e};W.max=function(e,t,r){return T.max(e.array,t.array,r.array),e._dirty=!0,e};W.mul=function(e,t,r){return T.multiply(e.array,t.array,r.array),e._dirty=!0,e};W.multiply=W.mul;W.negate=function(e,t){return T.negate(e.array,t.array),e._dirty=!0,e};W.normalize=function(e,t){return T.normalize(e.array,t.array),e._dirty=!0,e};W.random=function(e,t){return T.random(e.array,t),e._dirty=!0,e};W.scale=function(e,t,r){return T.scale(e.array,t.array,r),e._dirty=!0,e};W.scaleAndAdd=function(e,t,r,i){return T.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};W.sqrDist=function(e,t){return T.sqrDist(e.array,t.array)};W.squaredDistance=W.sqrDist;W.sqrLen=function(e){return T.sqrLen(e.array)};W.squaredLength=W.sqrLen;W.sub=function(e,t,r){return T.subtract(e.array,t.array,r.array),e._dirty=!0,e};W.subtract=W.sub;W.transformMat3=function(e,t,r){return T.transformMat3(e.array,t.array,r.array),e._dirty=!0,e};W.transformMat4=function(e,t,r){return T.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};W.transformQuat=function(e,t,r){return T.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};function nt(e,t,r){return e<t?t:e>r?r:e}var le=Math.atan2,at=Math.asin,ar=Math.abs;W.eulerFromQuat=function(e,t,d){e._dirty=!0,t=t.array;var i=e.array,n=t[0],a=t[1],o=t[2],s=t[3],l=n*n,u=a*a,h=o*o,c=s*s,d=(d||"XYZ").toUpperCase();switch(d){case"XYZ":i[0]=le(2*(n*s-a*o),c-l-u+h),i[1]=at(nt(2*(n*o+a*s),-1,1)),i[2]=le(2*(o*s-n*a),c+l-u-h);break;case"YXZ":i[0]=at(nt(2*(n*s-a*o),-1,1)),i[1]=le(2*(n*o+a*s),c-l-u+h),i[2]=le(2*(n*a+o*s),c-l+u-h);break;case"ZXY":i[0]=at(nt(2*(n*s+a*o),-1,1)),i[1]=le(2*(a*s-o*n),c-l-u+h),i[2]=le(2*(o*s-n*a),c-l+u-h);break;case"ZYX":i[0]=le(2*(n*s+o*a),c-l-u+h),i[1]=at(nt(2*(a*s-n*o),-1,1)),i[2]=le(2*(n*a+o*s),c+l-u-h);break;case"YZX":i[0]=le(2*(n*s-o*a),c-l+u-h),i[1]=le(2*(a*s-n*o),c+l-u-h),i[2]=at(nt(2*(n*a+o*s),-1,1));break;case"XZY":i[0]=le(2*(n*s+a*o),c-l+u-h),i[1]=le(2*(n*o+a*s),c+l-u-h),i[2]=at(nt(2*(o*s-n*a),-1,1));break;default:console.warn("Unkown order: "+d)}return e};W.eulerFromMat3=function(e,t,v){var i=t.array,n=i[0],a=i[3],o=i[6],s=i[1],l=i[4],u=i[7],h=i[2],c=i[5],d=i[8],f=e.array,v=(v||"XYZ").toUpperCase();switch(v){case"XYZ":f[1]=at(nt(o,-1,1)),ar(o)<.99999?(f[0]=le(-u,d),f[2]=le(-a,n)):(f[0]=le(c,l),f[2]=0);break;case"YXZ":f[0]=at(-nt(u,-1,1)),ar(u)<.99999?(f[1]=le(o,d),f[2]=le(s,l)):(f[1]=le(-h,n),f[2]=0);break;case"ZXY":f[0]=at(nt(c,-1,1)),ar(c)<.99999?(f[1]=le(-h,d),f[2]=le(-a,l)):(f[1]=0,f[2]=le(s,n));break;case"ZYX":f[1]=at(-nt(h,-1,1)),ar(h)<.99999?(f[0]=le(c,d),f[2]=le(s,n)):(f[0]=0,f[2]=le(-a,l));break;case"YZX":f[2]=at(nt(s,-1,1)),ar(s)<.99999?(f[0]=le(-u,l),f[1]=le(-h,n)):(f[0]=0,f[1]=le(o,d));break;case"XZY":f[2]=at(-nt(a,-1,1)),ar(a)<.99999?(f[0]=le(c,l),f[1]=le(o,n)):(f[0]=le(-u,d),f[1]=0);break;default:console.warn("Unkown order: "+v)}return e._dirty=!0,e};Object.defineProperties(W,{POSITIVE_X:{get:function(){return new W(1,0,0)}},NEGATIVE_X:{get:function(){return new W(-1,0,0)}},POSITIVE_Y:{get:function(){return new W(0,1,0)}},NEGATIVE_Y:{get:function(){return new W(0,-1,0)}},POSITIVE_Z:{get:function(){return new W(0,0,1)}},NEGATIVE_Z:{get:function(){return new W(0,0,-1)}},UP:{get:function(){return new W(0,1,0)}},ZERO:{get:function(){return new W}}});var D=W,fn=1e-5,gi=function(e,t){this.origin=e||new D,this.direction=t||new D};gi.prototype={constructor:gi,intersectPlane:function(e,t){var r=e.normal.array,i=e.distance,n=this.origin.array,a=this.direction.array,o=T.dot(r,a);if(o===0)return null;t||(t=new D);var s=(T.dot(r,n)-i)/o;return T.scaleAndAdd(t.array,n,a,-s),t._dirty=!0,t},mirrorAgainstPlane:function(e){var t=T.dot(e.normal.array,this.direction.array);T.scaleAndAdd(this.direction.array,this.direction.array,e.normal.array,-t*2),this.direction._dirty=!0},distanceToPoint:function(){var e=T.create();return function(t){T.sub(e,t,this.origin.array);var r=T.dot(e,this.direction.array);if(r<0)return T.distance(this.origin.array,t);var i=T.lenSquared(e);return Math.sqrt(i-r*r)}}(),intersectSphere:function(){var e=T.create();return function(t,r,i){var n=this.origin.array,a=this.direction.array;t=t.array,T.sub(e,t,n);var o=T.dot(e,a),s=T.squaredLength(e),l=s-o*o,u=r*r;if(!(l>u)){var h=Math.sqrt(u-l),c=o-h,d=o+h;return i||(i=new D),c<0?d<0?null:(T.scaleAndAdd(i.array,n,a,d),i):(T.scaleAndAdd(i.array,n,a,c),i)}}}(),intersectBoundingBox:function(e,t){var r=this.direction.array,i=this.origin.array,n=e.min.array,a=e.max.array,o=1/r[0],s=1/r[1],l=1/r[2],u,h,c,d,f,v;if(o>=0?(u=(n[0]-i[0])*o,h=(a[0]-i[0])*o):(h=(n[0]-i[0])*o,u=(a[0]-i[0])*o),s>=0?(c=(n[1]-i[1])*s,d=(a[1]-i[1])*s):(d=(n[1]-i[1])*s,c=(a[1]-i[1])*s),u>d||c>h||((c>u||u!==u)&&(u=c),(d<h||h!==h)&&(h=d),l>=0?(f=(n[2]-i[2])*l,v=(a[2]-i[2])*l):(v=(n[2]-i[2])*l,f=(a[2]-i[2])*l),u>v||f>h)||((f>u||u!==u)&&(u=f),(v<h||h!==h)&&(h=v),h<0))return null;var p=u>=0?u:h;return t||(t=new D),T.scaleAndAdd(t.array,i,r,p),t},intersectTriangle:function(){var e=T.create(),t=T.create(),r=T.create(),i=T.create();return function(n,a,o,s,l,u){var h=this.direction.array,c=this.origin.array;n=n.array,a=a.array,o=o.array,T.sub(e,a,n),T.sub(t,o,n),T.cross(i,t,h);var d=T.dot(e,i);if(s){if(d>-fn)return null}else if(d>-fn&&d<fn)return null;T.sub(r,c,n);var f=T.dot(i,r)/d;if(f<0||f>1)return null;T.cross(i,e,r);var v=T.dot(h,i)/d;if(v<0||v>1||f+v>1)return null;T.cross(i,e,t);var p=-T.dot(r,i)/d;return p<0?null:(l||(l=new D),u&&D.set(u,1-f-v,f,v),T.scaleAndAdd(l.array,c,h,p),l)}}(),applyTransform:function(e){D.add(this.direction,this.direction,this.origin),D.transformMat4(this.origin,this.origin,e),D.transformMat4(this.direction,this.direction,e),D.sub(this.direction,this.direction,this.origin),D.normalize(this.direction,this.direction)},copy:function(e){D.copy(this.origin,e.origin),D.copy(this.direction,e.direction)},clone:function(){var e=new gi;return e.copy(this),e}};var Ci=gi,K={};K.create=function(){var e=new Oe(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=0,e};K.clone=function(e){var t=new Oe(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};K.fromValues=function(e,t,r,i){var n=new Oe(4);return n[0]=e,n[1]=t,n[2]=r,n[3]=i,n};K.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};K.set=function(e,t,r,i,n){return e[0]=t,e[1]=r,e[2]=i,e[3]=n,e};K.add=function(e,t,r){return e[0]=t[0]+r[0],e[1]=t[1]+r[1],e[2]=t[2]+r[2],e[3]=t[3]+r[3],e};K.subtract=function(e,t,r){return e[0]=t[0]-r[0],e[1]=t[1]-r[1],e[2]=t[2]-r[2],e[3]=t[3]-r[3],e};K.sub=K.subtract;K.multiply=function(e,t,r){return e[0]=t[0]*r[0],e[1]=t[1]*r[1],e[2]=t[2]*r[2],e[3]=t[3]*r[3],e};K.mul=K.multiply;K.divide=function(e,t,r){return e[0]=t[0]/r[0],e[1]=t[1]/r[1],e[2]=t[2]/r[2],e[3]=t[3]/r[3],e};K.div=K.divide;K.min=function(e,t,r){return e[0]=Math.min(t[0],r[0]),e[1]=Math.min(t[1],r[1]),e[2]=Math.min(t[2],r[2]),e[3]=Math.min(t[3],r[3]),e};K.max=function(e,t,r){return e[0]=Math.max(t[0],r[0]),e[1]=Math.max(t[1],r[1]),e[2]=Math.max(t[2],r[2]),e[3]=Math.max(t[3],r[3]),e};K.scale=function(e,t,r){return e[0]=t[0]*r,e[1]=t[1]*r,e[2]=t[2]*r,e[3]=t[3]*r,e};K.scaleAndAdd=function(e,t,r,i){return e[0]=t[0]+r[0]*i,e[1]=t[1]+r[1]*i,e[2]=t[2]+r[2]*i,e[3]=t[3]+r[3]*i,e};K.distance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return Math.sqrt(r*r+i*i+n*n+a*a)};K.dist=K.distance;K.squaredDistance=function(e,t){var r=t[0]-e[0],i=t[1]-e[1],n=t[2]-e[2],a=t[3]-e[3];return r*r+i*i+n*n+a*a};K.sqrDist=K.squaredDistance;K.length=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return Math.sqrt(t*t+r*r+i*i+n*n)};K.len=K.length;K.squaredLength=function(e){var t=e[0],r=e[1],i=e[2],n=e[3];return t*t+r*r+i*i+n*n};K.sqrLen=K.squaredLength;K.negate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=-t[3],e};K.inverse=function(e,t){return e[0]=1/t[0],e[1]=1/t[1],e[2]=1/t[2],e[3]=1/t[3],e};K.normalize=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a;return o>0&&(o=1/Math.sqrt(o),e[0]=t[0]*o,e[1]=t[1]*o,e[2]=t[2]*o,e[3]=t[3]*o),e};K.dot=function(e,t){return e[0]*t[0]+e[1]*t[1]+e[2]*t[2]+e[3]*t[3]};K.lerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3];return e[0]=n+i*(r[0]-n),e[1]=a+i*(r[1]-a),e[2]=o+i*(r[2]-o),e[3]=s+i*(r[3]-s),e};K.random=function(e,t){return t=t||1,e[0]=fr(),e[1]=fr(),e[2]=fr(),e[3]=fr(),K.normalize(e,e),K.scale(e,e,t),e};K.transformMat4=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3];return e[0]=r[0]*i+r[4]*n+r[8]*a+r[12]*o,e[1]=r[1]*i+r[5]*n+r[9]*a+r[13]*o,e[2]=r[2]*i+r[6]*n+r[10]*a+r[14]*o,e[3]=r[3]*i+r[7]*n+r[11]*a+r[15]*o,e};K.transformQuat=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=r[0],s=r[1],l=r[2],u=r[3],h=u*i+s*a-l*n,c=u*n+l*i-o*a,d=u*a+o*n-s*i,f=-o*i-s*n-l*a;return e[0]=h*u+f*-o+c*-l-d*-s,e[1]=c*u+f*-s+d*-o-h*-l,e[2]=d*u+f*-l+h*-s-c*-o,e};K.forEach=function(){var e=K.create();return function(t,r,i,n,a,o){var s,l;for(r||(r=4),i||(i=0),n?l=Math.min(n*r+i,t.length):l=t.length,s=i;s<l;s+=r)e[0]=t[s],e[1]=t[s+1],e[2]=t[s+2],e[3]=t[s+3],a(e,e,o),t[s]=e[0],t[s+1]=e[1],t[s+2]=e[2],t[s+3]=e[3];return t}}();var N=K,Ce={};Ce.create=function(){var e=new Oe(9);return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Ce.fromMat4=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[4],e[4]=t[5],e[5]=t[6],e[6]=t[8],e[7]=t[9],e[8]=t[10],e};Ce.clone=function(e){var t=new Oe(9);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t[6]=e[6],t[7]=e[7],t[8]=e[8],t};Ce.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Ce.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=0,e[4]=1,e[5]=0,e[6]=0,e[7]=0,e[8]=1,e};Ce.transpose=function(e,t){if(e===t){var r=t[1],i=t[2],n=t[5];e[1]=t[3],e[2]=t[6],e[3]=r,e[5]=t[7],e[6]=i,e[7]=n}else e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8];return e};Ce.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=h*o-s*u,d=-h*a+s*l,f=u*a-o*l,v=r*c+i*d+n*f;return v?(v=1/v,e[0]=c*v,e[1]=(-h*i+n*u)*v,e[2]=(s*i-n*o)*v,e[3]=d*v,e[4]=(h*r-n*l)*v,e[5]=(-s*r+n*a)*v,e[6]=f*v,e[7]=(-u*r+i*l)*v,e[8]=(o*r-i*a)*v,e):null};Ce.adjoint=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8];return e[0]=o*h-s*u,e[1]=n*u-i*h,e[2]=i*s-n*o,e[3]=s*l-a*h,e[4]=r*h-n*l,e[5]=n*a-r*s,e[6]=a*u-o*l,e[7]=i*l-r*u,e[8]=r*o-i*a,e};Ce.determinant=function(e){var t=e[0],r=e[1],i=e[2],n=e[3],a=e[4],o=e[5],s=e[6],l=e[7],u=e[8];return t*(u*a-o*l)+r*(-u*n+o*s)+i*(l*n-a*s)};Ce.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=r[0],f=r[1],v=r[2],p=r[3],_=r[4],m=r[5],y=r[6],g=r[7],x=r[8];return e[0]=d*i+f*o+v*u,e[1]=d*n+f*s+v*h,e[2]=d*a+f*l+v*c,e[3]=p*i+_*o+m*u,e[4]=p*n+_*s+m*h,e[5]=p*a+_*l+m*c,e[6]=y*i+g*o+x*u,e[7]=y*n+g*s+x*h,e[8]=y*a+g*l+x*c,e};Ce.mul=Ce.multiply;Ce.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=r[0],f=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=s,e[5]=l,e[6]=d*i+f*o+u,e[7]=d*n+f*s+h,e[8]=d*a+f*l+c,e};Ce.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=t[6],h=t[7],c=t[8],d=Math.sin(r),f=Math.cos(r);return e[0]=f*i+d*o,e[1]=f*n+d*s,e[2]=f*a+d*l,e[3]=f*o-d*i,e[4]=f*s-d*n,e[5]=f*l-d*a,e[6]=u,e[7]=h,e[8]=c,e};Ce.scale=function(e,t,r){var i=r[0],n=r[1];return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=n*t[3],e[4]=n*t[4],e[5]=n*t[5],e[6]=t[6],e[7]=t[7],e[8]=t[8],e};Ce.fromMat2d=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=0,e[3]=t[2],e[4]=t[3],e[5]=0,e[6]=t[4],e[7]=t[5],e[8]=1,e};Ce.fromQuat=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r+r,s=i+i,l=n+n,u=r*o,h=i*o,c=i*s,d=n*o,f=n*s,v=n*l,p=a*o,_=a*s,m=a*l;return e[0]=1-c-v,e[3]=h-m,e[6]=d+_,e[1]=h+m,e[4]=1-u-v,e[7]=f-p,e[2]=d-_,e[5]=f+p,e[8]=1-u-c,e};Ce.normalFromMat4=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=t[6],u=t[7],h=t[8],c=t[9],d=t[10],f=t[11],v=t[12],p=t[13],_=t[14],m=t[15],y=r*s-i*o,g=r*l-n*o,x=r*u-a*o,E=i*l-n*s,S=i*u-a*s,w=n*u-a*l,b=h*p-c*v,C=h*_-d*v,O=h*m-f*v,M=c*_-d*p,B=c*m-f*p,F=d*m-f*_,R=y*F-g*B+x*M+E*O-S*C+w*b;return R?(R=1/R,e[0]=(s*F-l*B+u*M)*R,e[1]=(l*O-o*F-u*C)*R,e[2]=(o*B-s*O+u*b)*R,e[3]=(n*B-i*F-a*M)*R,e[4]=(r*F-n*O+a*C)*R,e[5]=(i*O-r*B-a*b)*R,e[6]=(p*w-_*S+m*E)*R,e[7]=(_*x-v*w-m*g)*R,e[8]=(v*S-p*x+m*y)*R,e):null};Ce.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+Math.pow(e[6],2)+Math.pow(e[7],2)+Math.pow(e[8],2))};var ee=Ce,ne={};ne.create=function(){var e=new Oe(4);return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ne.rotationTo=function(){var e=T.create(),t=T.fromValues(1,0,0),r=T.fromValues(0,1,0);return function(i,n,a){var o=T.dot(n,a);return o<-.999999?(T.cross(e,t,n),T.length(e)<1e-6&&T.cross(e,r,n),T.normalize(e,e),ne.setAxisAngle(i,e,Math.PI),i):o>.999999?(i[0]=0,i[1]=0,i[2]=0,i[3]=1,i):(T.cross(e,n,a),i[0]=e[0],i[1]=e[1],i[2]=e[2],i[3]=1+o,ne.normalize(i,i))}}();ne.setAxes=function(){var e=ee.create();return function(t,r,i,n){return e[0]=i[0],e[3]=i[1],e[6]=i[2],e[1]=n[0],e[4]=n[1],e[7]=n[2],e[2]=-r[0],e[5]=-r[1],e[8]=-r[2],ne.normalize(t,ne.fromMat3(t,e))}}();ne.clone=N.clone;ne.fromValues=N.fromValues;ne.copy=N.copy;ne.set=N.set;ne.identity=function(e){return e[0]=0,e[1]=0,e[2]=0,e[3]=1,e};ne.setAxisAngle=function(e,t,r){r=r*.5;var i=Math.sin(r);return e[0]=i*t[0],e[1]=i*t[1],e[2]=i*t[2],e[3]=Math.cos(r),e};ne.add=N.add;ne.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*h+o*s+n*u-a*l,e[1]=n*h+o*l+a*s-i*u,e[2]=a*h+o*u+i*l-n*s,e[3]=o*h-i*s-n*l-a*u,e};ne.mul=ne.multiply;ne.scale=N.scale;ne.rotateX=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+o*s,e[1]=n*l+a*s,e[2]=a*l-n*s,e[3]=o*l-i*s,e};ne.rotateY=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l-a*s,e[1]=n*l+o*s,e[2]=a*l+i*s,e[3]=o*l-n*s,e};ne.rotateZ=function(e,t,r){r*=.5;var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+n*s,e[1]=n*l-i*s,e[2]=a*l+o*s,e[3]=o*l-a*s,e};ne.calculateW=function(e,t){var r=t[0],i=t[1],n=t[2];return e[0]=r,e[1]=i,e[2]=n,e[3]=Math.sqrt(Math.abs(1-r*r-i*i-n*n)),e};ne.dot=N.dot;ne.lerp=N.lerp;ne.slerp=function(e,t,r,i){var n=t[0],a=t[1],o=t[2],s=t[3],l=r[0],u=r[1],h=r[2],c=r[3],d,f,v,p,_;return f=n*l+a*u+o*h+s*c,f<0&&(f=-f,l=-l,u=-u,h=-h,c=-c),1-f>1e-6?(d=Math.acos(f),v=Math.sin(d),p=Math.sin((1-i)*d)/v,_=Math.sin(i*d)/v):(p=1-i,_=i),e[0]=p*n+_*l,e[1]=p*a+_*u,e[2]=p*o+_*h,e[3]=p*s+_*c,e};ne.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*r+i*i+n*n+a*a,s=o?1/o:0;return e[0]=-r*s,e[1]=-i*s,e[2]=-n*s,e[3]=a*s,e};ne.conjugate=function(e,t){return e[0]=-t[0],e[1]=-t[1],e[2]=-t[2],e[3]=t[3],e};ne.length=N.length;ne.len=ne.length;ne.squaredLength=N.squaredLength;ne.sqrLen=ne.squaredLength;ne.normalize=N.normalize;ne.fromMat3=function(e,t){var r=t[0]+t[4]+t[8],i;if(r>0)i=Math.sqrt(r+1),e[3]=.5*i,i=.5/i,e[0]=(t[5]-t[7])*i,e[1]=(t[6]-t[2])*i,e[2]=(t[1]-t[3])*i;else{var n=0;t[4]>t[0]&&(n=1),t[8]>t[n*3+n]&&(n=2);var a=(n+1)%3,o=(n+2)%3;i=Math.sqrt(t[n*3+n]-t[a*3+a]-t[o*3+o]+1),e[n]=.5*i,i=.5/i,e[3]=(t[a*3+o]-t[o*3+a])*i,e[a]=(t[a*3+n]+t[n*3+a])*i,e[o]=(t[o*3+n]+t[n*3+o])*i}return e};var $=ne,ce=function(){this._axisX=new D,this._axisY=new D,this._axisZ=new D,this.array=L.create(),this._dirty=!0};ce.prototype={constructor:ce,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return L.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new ce().copy(this)},copy:function(e){return L.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return L.determinant(this.array)},fromQuat:function(e){return L.fromQuat(this.array,e.array),this._dirty=!0,this},fromRotationTranslation:function(e,t){return L.fromRotationTranslation(this.array,e.array,t.array),this._dirty=!0,this},fromMat2d:function(e){return ce.fromMat2d(this,e),this},frustum:function(e,t,r,i,n,a){return L.frustum(this.array,e,t,r,i,n,a),this._dirty=!0,this},identity:function(){return L.identity(this.array),this._dirty=!0,this},invert:function(){return L.invert(this.array,this.array),this._dirty=!0,this},lookAt:function(e,t,r){return L.lookAt(this.array,e.array,t.array,r.array),this._dirty=!0,this},mul:function(e){return L.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return L.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return L.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return L.multiply(this.array,e.array,this.array),this._dirty=!0,this},ortho:function(e,t,r,i,n,a){return L.ortho(this.array,e,t,r,i,n,a),this._dirty=!0,this},perspective:function(e,t,r,i){return L.perspective(this.array,e,t,r,i),this._dirty=!0,this},rotate:function(e,t){return L.rotate(this.array,this.array,e,t.array),this._dirty=!0,this},rotateX:function(e){return L.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return L.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return L.rotateZ(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return L.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return L.translate(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return L.transpose(this.array,this.array),this._dirty=!0,this},decomposeMatrix:function(){var e=T.create(),t=T.create(),r=T.create(),i=ee.create();return function(n,a,o){var s=this.array;T.set(e,s[0],s[1],s[2]),T.set(t,s[4],s[5],s[6]),T.set(r,s[8],s[9],s[10]);var l=T.length(e),u=T.length(t),h=T.length(r),c=this.determinant();c<0&&(l=-l),n&&n.set(l,u,h),o.set(s[12],s[13],s[14]),ee.fromMat4(i,s),i[0]/=l,i[1]/=l,i[2]/=l,i[3]/=u,i[4]/=u,i[5]/=u,i[6]/=h,i[7]/=h,i[8]/=h,$.fromMat3(a.array,i),$.normalize(a.array,a.array),a._dirty=!0,o._dirty=!0}}(),toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var si=Object.defineProperty;if(si){var dn=ce.prototype;si(dn,"z",{get:function(){var e=this.array;return this._axisZ.set(e[8],e[9],e[10]),this._axisZ},set:function(e){var t=this.array;e=e.array,t[8]=e[0],t[9]=e[1],t[10]=e[2],this._dirty=!0}}),si(dn,"y",{get:function(){var e=this.array;return this._axisY.set(e[4],e[5],e[6]),this._axisY},set:function(e){var t=this.array;e=e.array,t[4]=e[0],t[5]=e[1],t[6]=e[2],this._dirty=!0}}),si(dn,"x",{get:function(){var e=this.array;return this._axisX.set(e[0],e[1],e[2]),this._axisX},set:function(e){var t=this.array;e=e.array,t[0]=e[0],t[1]=e[1],t[2]=e[2],this._dirty=!0}})}ce.adjoint=function(e,t){return L.adjoint(e.array,t.array),e._dirty=!0,e};ce.copy=function(e,t){return L.copy(e.array,t.array),e._dirty=!0,e};ce.determinant=function(e){return L.determinant(e.array)};ce.identity=function(e){return L.identity(e.array),e._dirty=!0,e};ce.ortho=function(e,t,r,i,n,a,o){return L.ortho(e.array,t,r,i,n,a,o),e._dirty=!0,e};ce.perspective=function(e,t,r,i,n){return L.perspective(e.array,t,r,i,n),e._dirty=!0,e};ce.lookAt=function(e,t,r,i){return L.lookAt(e.array,t.array,r.array,i.array),e._dirty=!0,e};ce.invert=function(e,t){return L.invert(e.array,t.array),e._dirty=!0,e};ce.mul=function(e,t,r){return L.mul(e.array,t.array,r.array),e._dirty=!0,e};ce.multiply=ce.mul;ce.fromQuat=function(e,t){return L.fromQuat(e.array,t.array),e._dirty=!0,e};ce.fromRotationTranslation=function(e,t,r){return L.fromRotationTranslation(e.array,t.array,r.array),e._dirty=!0,e};ce.fromMat2d=function(i,r){i._dirty=!0;var r=r.array,i=i.array;return i[0]=r[0],i[4]=r[2],i[12]=r[4],i[1]=r[1],i[5]=r[3],i[13]=r[5],i};ce.rotate=function(e,t,r,i){return L.rotate(e.array,t.array,r,i.array),e._dirty=!0,e};ce.rotateX=function(e,t,r){return L.rotateX(e.array,t.array,r),e._dirty=!0,e};ce.rotateY=function(e,t,r){return L.rotateY(e.array,t.array,r),e._dirty=!0,e};ce.rotateZ=function(e,t,r){return L.rotateZ(e.array,t.array,r),e._dirty=!0,e};ce.scale=function(e,t,r){return L.scale(e.array,t.array,r.array),e._dirty=!0,e};ce.transpose=function(e,t){return L.transpose(e.array,t.array),e._dirty=!0,e};ce.translate=function(e,t,r){return L.translate(e.array,t.array,r.array),e._dirty=!0,e};var V=ce,se=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i===void 0?1:i,this.array=$.fromValues(e,t,r,i),this._dirty=!0};se.prototype={constructor:se,add:function(e){return $.add(this.array,this.array,e.array),this._dirty=!0,this},calculateW:function(){return $.calculateW(this.array,this.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new se(this.x,this.y,this.z,this.w)},conjugate:function(){return $.conjugate(this.array,this.array),this._dirty=!0,this},copy:function(e){return $.copy(this.array,e.array),this._dirty=!0,this},dot:function(e){return $.dot(this.array,e.array)},fromMat3:function(e){return $.fromMat3(this.array,e.array),this._dirty=!0,this},fromMat4:function(){var e=ee.create();return function(t){return ee.fromMat4(e,t.array),ee.transpose(e,e),$.fromMat3(this.array,e),this._dirty=!0,this}}(),identity:function(){return $.identity(this.array),this._dirty=!0,this},invert:function(){return $.invert(this.array,this.array),this._dirty=!0,this},len:function(){return $.len(this.array)},length:function(){return $.length(this.array)},lerp:function(e,t,r){return $.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},mul:function(e){return $.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return $.multiply(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return $.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return $.multiply(this.array,e.array,this.array),this._dirty=!0,this},normalize:function(){return $.normalize(this.array,this.array),this._dirty=!0,this},rotateX:function(e){return $.rotateX(this.array,this.array,e),this._dirty=!0,this},rotateY:function(e){return $.rotateY(this.array,this.array,e),this._dirty=!0,this},rotateZ:function(e){return $.rotateZ(this.array,this.array,e),this._dirty=!0,this},rotationTo:function(e,t){return $.rotationTo(this.array,e.array,t.array),this._dirty=!0,this},setAxes:function(e,t,r){return $.setAxes(this.array,e.array,t.array,r.array),this._dirty=!0,this},setAxisAngle:function(e,t){return $.setAxisAngle(this.array,e.array,t),this._dirty=!0,this},slerp:function(e,t,r){return $.slerp(this.array,e.array,t.array,r),this._dirty=!0,this},sqrLen:function(){return $.sqrLen(this.array)},squaredLength:function(){return $.squaredLength(this.array)},fromEuler:function(e,t){return se.fromEuler(this,e,t)},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Sr=Object.defineProperty;if(Sr){var li=se.prototype;Sr(li,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Sr(li,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Sr(li,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Sr(li,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}se.add=function(e,t,r){return $.add(e.array,t.array,r.array),e._dirty=!0,e};se.set=function(e,t,r,i,n){$.set(e.array,t,r,i,n),e._dirty=!0};se.copy=function(e,t){return $.copy(e.array,t.array),e._dirty=!0,e};se.calculateW=function(e,t){return $.calculateW(e.array,t.array),e._dirty=!0,e};se.conjugate=function(e,t){return $.conjugate(e.array,t.array),e._dirty=!0,e};se.identity=function(e){return $.identity(e.array),e._dirty=!0,e};se.invert=function(e,t){return $.invert(e.array,t.array),e._dirty=!0,e};se.dot=function(e,t){return $.dot(e.array,t.array)};se.len=function(e){return $.length(e.array)};se.lerp=function(e,t,r,i){return $.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};se.slerp=function(e,t,r,i){return $.slerp(e.array,t.array,r.array,i),e._dirty=!0,e};se.mul=function(e,t,r){return $.multiply(e.array,t.array,r.array),e._dirty=!0,e};se.multiply=se.mul;se.rotateX=function(e,t,r){return $.rotateX(e.array,t.array,r),e._dirty=!0,e};se.rotateY=function(e,t,r){return $.rotateY(e.array,t.array,r),e._dirty=!0,e};se.rotateZ=function(e,t,r){return $.rotateZ(e.array,t.array,r),e._dirty=!0,e};se.setAxisAngle=function(e,t,r){return $.setAxisAngle(e.array,t.array,r),e._dirty=!0,e};se.normalize=function(e,t){return $.normalize(e.array,t.array),e._dirty=!0,e};se.sqrLen=function(e){return $.sqrLen(e.array)};se.squaredLength=se.sqrLen;se.fromMat3=function(e,t){return $.fromMat3(e.array,t.array),e._dirty=!0,e};se.setAxes=function(e,t,r,i){return $.setAxes(e.array,t.array,r.array,i.array),e._dirty=!0,e};se.rotationTo=function(e,t,r){return $.rotationTo(e.array,t.array,r.array),e._dirty=!0,e};se.fromEuler=function(e,t,h){e._dirty=!0,t=t.array;var i=e.array,n=Math.cos(t[0]/2),a=Math.cos(t[1]/2),o=Math.cos(t[2]/2),s=Math.sin(t[0]/2),l=Math.sin(t[1]/2),u=Math.sin(t[2]/2),h=(h||"XYZ").toUpperCase();switch(h){case"XYZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"YXZ":i[0]=s*a*o+n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"ZXY":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o-s*l*u;break;case"ZYX":i[0]=s*a*o-n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o+s*l*u;break;case"YZX":i[0]=s*a*o+n*l*u,i[1]=n*l*o+s*a*u,i[2]=n*a*u-s*l*o,i[3]=n*a*o-s*l*u;break;case"XZY":i[0]=s*a*o-n*l*u,i[1]=n*l*o-s*a*u,i[2]=n*a*u+s*l*o,i[3]=n*a*o+s*l*u;break}};var fs=se,Rt=T.set,ui=T.copy,yi=function(e,t){this.min=e||new D(1/0,1/0,1/0),this.max=t||new D(-1/0,-1/0,-1/0),this.vertices=null};yi.prototype={constructor:yi,updateFromVertices:function(e){if(e.length>0){var t=this.min,r=this.max,i=t.array,n=r.array;ui(i,e[0]),ui(n,e[0]);for(var a=1;a<e.length;a++){var o=e[a];o[0]<i[0]&&(i[0]=o[0]),o[1]<i[1]&&(i[1]=o[1]),o[2]<i[2]&&(i[2]=o[2]),o[0]>n[0]&&(n[0]=o[0]),o[1]>n[1]&&(n[1]=o[1]),o[2]>n[2]&&(n[2]=o[2])}t._dirty=!0,r._dirty=!0}},union:function(e){var t=this.min,r=this.max;return T.min(t.array,t.array,e.min.array),T.max(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersection:function(e){var t=this.min,r=this.max;return T.max(t.array,t.array,e.min.array),T.min(r.array,r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},intersectBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return!(t[0]>n[0]||t[1]>n[1]||t[2]>n[2]||r[0]<i[0]||r[1]<i[1]||r[2]<i[2])},containBoundingBox:function(e){var t=this.min.array,r=this.max.array,i=e.min.array,n=e.max.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=n[0]&&r[1]>=n[1]&&r[2]>=n[2]},containPoint:function(e){var t=this.min.array,r=this.max.array,i=e.array;return t[0]<=i[0]&&t[1]<=i[1]&&t[2]<=i[2]&&r[0]>=i[0]&&r[1]>=i[1]&&r[2]>=i[2]},isFinite:function(){var e=this.min.array,t=this.max.array;return isFinite(e[0])&&isFinite(e[1])&&isFinite(e[2])&&isFinite(t[0])&&isFinite(t[1])&&isFinite(t[2])},applyTransform:function(e){this.transformFrom(this,e)},transformFrom:function(){var e=T.create(),t=T.create(),r=T.create(),i=T.create(),n=T.create(),a=T.create();return function(o,s){var l=o.min.array,u=o.max.array,h=s.array;return e[0]=h[0]*l[0],e[1]=h[1]*l[0],e[2]=h[2]*l[0],t[0]=h[0]*u[0],t[1]=h[1]*u[0],t[2]=h[2]*u[0],r[0]=h[4]*l[1],r[1]=h[5]*l[1],r[2]=h[6]*l[1],i[0]=h[4]*u[1],i[1]=h[5]*u[1],i[2]=h[6]*u[1],n[0]=h[8]*l[2],n[1]=h[9]*l[2],n[2]=h[10]*l[2],a[0]=h[8]*u[2],a[1]=h[9]*u[2],a[2]=h[10]*u[2],l=this.min.array,u=this.max.array,l[0]=Math.min(e[0],t[0])+Math.min(r[0],i[0])+Math.min(n[0],a[0])+h[12],l[1]=Math.min(e[1],t[1])+Math.min(r[1],i[1])+Math.min(n[1],a[1])+h[13],l[2]=Math.min(e[2],t[2])+Math.min(r[2],i[2])+Math.min(n[2],a[2])+h[14],u[0]=Math.max(e[0],t[0])+Math.max(r[0],i[0])+Math.max(n[0],a[0])+h[12],u[1]=Math.max(e[1],t[1])+Math.max(r[1],i[1])+Math.max(n[1],a[1])+h[13],u[2]=Math.max(e[2],t[2])+Math.max(r[2],i[2])+Math.max(n[2],a[2])+h[14],this.min._dirty=!0,this.max._dirty=!0,this}}(),applyProjection:function(e){var t=this.min.array,r=this.max.array,i=e.array,n=t[0],a=t[1],o=t[2],s=r[0],l=r[1],u=t[2],h=r[0],c=r[1],d=r[2];if(i[15]===1)t[0]=i[0]*n+i[12],t[1]=i[5]*a+i[13],r[2]=i[10]*o+i[14],r[0]=i[0]*h+i[12],r[1]=i[5]*c+i[13],t[2]=i[10]*d+i[14];else{var f=-1/o;t[0]=i[0]*n*f,t[1]=i[5]*a*f,r[2]=(i[10]*o+i[14])*f,f=-1/u,r[0]=i[0]*s*f,r[1]=i[5]*l*f,f=-1/d,t[2]=(i[10]*d+i[14])*f}return this.min._dirty=!0,this.max._dirty=!0,this},updateVertices:function(){var e=this.vertices;if(!e){e=[];for(var t=0;t<8;t++)e[t]=T.fromValues(0,0,0);this.vertices=e}var r=this.min.array,i=this.max.array;return Rt(e[0],r[0],r[1],r[2]),Rt(e[1],r[0],i[1],r[2]),Rt(e[2],i[0],r[1],r[2]),Rt(e[3],i[0],i[1],r[2]),Rt(e[4],r[0],r[1],i[2]),Rt(e[5],r[0],i[1],i[2]),Rt(e[6],i[0],r[1],i[2]),Rt(e[7],i[0],i[1],i[2]),this},copy:function(e){var t=this.min,r=this.max;return ui(t.array,e.min.array),ui(r.array,e.max.array),t._dirty=!0,r._dirty=!0,this},clone:function(){var e=new yi;return e.copy(this),e}};var Ge=yi,ec=0,tc=Qe.extend({name:"",position:null,rotation:null,scale:null,worldTransform:null,localTransform:null,autoUpdateLocalTransform:!0,_parent:null,_scene:null,_needsUpdateWorldTransform:!0,_inIterating:!1,__depth:0},function(){this.name||(this.name=(this.type||"NODE")+"_"+ec++),this.position||(this.position=new D),this.rotation||(this.rotation=new fs),this.scale||(this.scale=new D(1,1,1)),this.worldTransform=new V,this.localTransform=new V,this._children=[]},{target:null,invisible:!1,isSkinnedMesh:function(){return!1},isRenderable:function(){return!1},setName:function(e){var t=this._scene;if(t){var r=t._nodeRepository;delete r[this.name],r[e]=this}this.name=e},add:function(e){var t=e._parent;if(t!==this){t&&t.remove(e),e._parent=this,this._children.push(e);var r=this._scene;r&&r!==e.scene&&e.traverse(this._addSelfToScene,this),e._needsUpdateWorldTransform=!0}},remove:function(e){var t=this._children,r=t.indexOf(e);r<0||(t.splice(r,1),e._parent=null,this._scene&&e.traverse(this._removeSelfFromScene,this))},removeAll:function(){for(var e=this._children,t=0;t<e.length;t++)e[t]._parent=null,this._scene&&e[t].traverse(this._removeSelfFromScene,this);this._children=[]},getScene:function(){return this._scene},getParent:function(){return this._parent},_removeSelfFromScene:function(e){e._scene.removeFromScene(e),e._scene=null},_addSelfToScene:function(e){this._scene.addToScene(e),e._scene=this._scene},isAncestor:function(e){for(var t=e._parent;t;){if(t===this)return!0;t=t._parent}return!1},children:function(){return this._children.slice()},childAt:function(e){return this._children[e]},getChildByName:function(e){for(var t=this._children,r=0;r<t.length;r++)if(t[r].name===e)return t[r]},getDescendantByName:function(e){for(var t=this._children,r=0;r<t.length;r++){var i=t[r];if(i.name===e)return i;var n=i.getDescendantByName(e);if(n)return n}},queryNode:function(e){if(!!e){for(var t=e.split("/"),r=this,i=0;i<t.length;i++){var n=t[i];if(!!n){for(var a=!1,o=r._children,s=0;s<o.length;s++){var l=o[s];if(l.name===n){r=l,a=!0;break}}if(!a)return}}return r}},getPath:function(e){if(!this._parent)return"/";for(var t=this._parent,r=this.name;t._parent&&(r=t.name+"/"+r,t._parent!=e);)t=t._parent;return!t._parent&&e?null:r},traverse:function(e,t){e.call(t,this);for(var r=this._children,i=0,n=r.length;i<n;i++)r[i].traverse(e,t)},eachChild:function(e,t){for(var r=this._children,i=0,n=r.length;i<n;i++){var a=r[i];e.call(t,a,i)}},setLocalTransform:function(e){L.copy(this.localTransform.array,e.array),this.decomposeLocalTransform()},decomposeLocalTransform:function(e){var t=e?null:this.scale;this.localTransform.decomposeMatrix(t,this.rotation,this.position)},setWorldTransform:function(e){L.copy(this.worldTransform.array,e.array),this.decomposeWorldTransform()},decomposeWorldTransform:function(){var e=L.create();return function(t){var r=this.localTransform,i=this.worldTransform;this._parent?(L.invert(e,this._parent.worldTransform.array),L.multiply(r.array,e,i.array)):L.copy(r.array,i.array);var n=t?null:this.scale;r.decomposeMatrix(n,this.rotation,this.position)}}(),transformNeedsUpdate:function(){return this.position._dirty||this.rotation._dirty||this.scale._dirty},updateLocalTransform:function(){var e=this.position,t=this.rotation,r=this.scale;if(this.transformNeedsUpdate()){var i=this.localTransform.array;L.fromRotationTranslation(i,t.array,e.array),L.scale(i,i,r.array),t._dirty=!1,r._dirty=!1,e._dirty=!1,this._needsUpdateWorldTransform=!0}},_updateWorldTransformTopDown:function(){var e=this.localTransform.array,t=this.worldTransform.array;this._parent?L.multiplyAffine(t,this._parent.worldTransform.array,e):L.copy(t,e)},updateWorldTransform:function(){for(var e=this;e&&e.getParent()&&e.getParent().transformNeedsUpdate();)e=e.getParent();e.update()},update:function(e){this.autoUpdateLocalTransform?this.updateLocalTransform():e=!0,(e||this._needsUpdateWorldTransform)&&(this._updateWorldTransformTopDown(),e=!0,this._needsUpdateWorldTransform=!1);for(var t=this._children,r=0,i=t.length;r<i;r++)t[r].update(e)},getBoundingBox:function(){function e(n){return!n.invisible&&n.geometry}var t=new Ge,r=new V,i=new V;return function(n,a){return a=a||new Ge,this._parent?V.invert(i,this._parent.worldTransform):V.identity(i),this.traverse(function(o){o.geometry&&o.geometry.boundingBox&&(t.copy(o.geometry.boundingBox),V.multiply(r,i,o.worldTransform),t.applyTransform(r),a.union(t))},this,e),a}}(),getWorldPosition:function(e){this.transformNeedsUpdate()&&this.updateWorldTransform();var t=this.worldTransform.array;if(e){var r=e.array;return r[0]=t[12],r[1]=t[13],r[2]=t[14],e}else return new D(t[12],t[13],t[14])},clone:function(){var e=new this.constructor,t=this._children;e.setName(this.name),e.position.copy(this.position),e.rotation.copy(this.rotation),e.scale.copy(this.scale);for(var r=0;r<t.length;r++)e.add(t[r].clone());return e},rotateAround:function(){var e=new D,t=new V;return function(r,i,n){e.copy(this.position).subtract(r);var a=this.localTransform;a.identity(),a.translate(r),a.rotate(n,i),t.fromRotationTranslation(this.rotation,e),a.multiply(t),a.scale(this.scale),this.decomposeLocalTransform(),this._needsUpdateWorldTransform=!0}}(),lookAt:function(){var e=new V;return function(t,r){e.lookAt(this.position,t,r||this.localTransform.y).invert(),this.setLocalTransform(e),this.target=t}}()}),Tt=tc,rt=Tt.extend({material:null,geometry:null,mode:A.TRIANGLES,_renderInfo:null},{__program:null,lightGroup:0,renderOrder:0,culling:!0,cullFace:A.BACK,frontFace:A.CCW,frustumCulling:!0,receiveShadow:!0,castShadow:!0,ignorePicking:!1,ignorePreZ:!1,ignoreGBuffer:!1,isRenderable:function(){return this.geometry&&this.material&&this.material.shader&&!this.invisible&&this.geometry.vertexCount>0},beforeRender:function(e){},afterRender:function(e,t){},getBoundingBox:function(e,t){return t=Tt.prototype.getBoundingBox.call(this,e,t),this.geometry&&this.geometry.boundingBox&&t.union(this.geometry.boundingBox),t},clone:function(){var e=["castShadow","receiveShadow","mode","culling","cullFace","frontFace","frustumCulling","renderOrder","lineWidth","ignorePicking","ignorePreZ","ignoreGBuffer"];return function(){var t=Tt.prototype.clone.call(this);t.geometry=this.geometry,t.material=this.material;for(var r=0;r<e.length;r++){var i=e[r];t[i]!==this[i]&&(t[i]=this[i])}return t}}()});rt.POINTS=A.POINTS;rt.LINES=A.LINES;rt.LINE_LOOP=A.LINE_LOOP;rt.LINE_STRIP=A.LINE_STRIP;rt.TRIANGLES=A.TRIANGLES;rt.TRIANGLE_STRIP=A.TRIANGLE_STRIP;rt.TRIANGLE_FAN=A.TRIANGLE_FAN;rt.BACK=A.BACK;rt.FRONT=A.FRONT;rt.FRONT_AND_BACK=A.FRONT_AND_BACK;rt.CW=A.CW;rt.CCW=A.CCW;var Un=rt,Jn=Qe.extend({scene:null,camera:null,renderer:null},function(){this._ray=new Ci,this._ndc=new tt},{pick:function(e,t,r){var i=this.pickAll(e,t,[],r);return i[0]||null},pickAll:function(e,t,r,i){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),r=r||[],this._intersectNode(this.scene,r,i||!1),r.sort(this._intersectionCompareFunc),r},_intersectNode:function(e,t,r){e instanceof Un&&e.isRenderable()&&(!e.ignorePicking||r)&&(e.mode===A.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var i=0;i<e._children.length;i++)this._intersectNode(e._children[i],t,r)},_intersectRenderable:function(){var e=new D,t=new D,r=new D,i=new Ci,n=new V;return function(a,o){var s=a.isSkinnedMesh();i.copy(this._ray),V.invert(n,a.worldTransform),s||i.applyTransform(n);var l=a.geometry,u=s?a.skeleton.boundingBox:l.boundingBox;if(!(u&&!i.intersectBoundingBox(u))){if(l.pick){l.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(l.pickByRay){l.pickByRay(i,a,o);return}var h=a.cullFace===A.BACK&&a.frontFace===A.CCW||a.cullFace===A.FRONT&&a.frontFace===A.CW,c,d=l.indices,f=l.attributes.position,v=l.attributes.weight,p=l.attributes.joint,_,m=[];if(!(!f||!f.value||!d)){if(s){_=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var y=0;y<a.joints.length;y++){m[y]=m[y]||[];for(var g=0;g<16;g++)m[y][g]=_[y*16+g]}var x=[],E=[],S=[],w=[],b=[],C=l.attributes.skinnedPosition;(!C||!C.value)&&(l.createAttribute("skinnedPosition","f",3),C=l.attributes.skinnedPosition,C.init(l.vertexCount));for(var y=0;y<l.vertexCount;y++){f.get(y,x),v.get(y,E),p.get(y,S),E[3]=1-E[0]-E[1]-E[2],T.set(w,0,0,0);for(var g=0;g<4;g++)S[g]>=0&&E[g]>1e-4&&(T.transformMat4(b,x,m[S[g]]),T.scaleAndAdd(w,w,b,E[g]));C.set(y,w)}}for(var y=0;y<d.length;y+=3){var O=d[y],M=d[y+1],B=d[y+2],F=s?l.attributes.skinnedPosition:f;if(F.get(O,e.array),F.get(M,t.array),F.get(B,r.array),h?c=i.intersectTriangle(e,t,r,a.culling):c=i.intersectTriangle(e,r,t,a.culling),c){var R=new D;s?D.copy(R,c):D.transformMat4(R,c,a.worldTransform),o.push(new Jn.Intersection(c,R,a,[O,M,B],y/3,D.dist(R,this._ray.origin)))}}}}}}(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});Jn.Intersection=function(e,t,r,i,n,a){this.point=e,this.pointWorld=t,this.target=r,this.triangle=i,this.triangleIndex=n,this.distance=a};var rc=Jn,br="__dt__",Li=function(){this._contextId=0,this._caches=[],this._context={}};Li.prototype={use:function(e,t){var r=this._caches;r[e]||(r[e]={},t&&(r[e]=t())),this._contextId=e,this._context=r[e]},put:function(e,t){this._context[e]=t},get:function(e){return this._context[e]},dirty:function(e){e=e||"";var t=br+e;this.put(t,!0)},dirtyAll:function(e){e=e||"";for(var t=br+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!0)},fresh:function(e){e=e||"";var t=br+e;this.put(t,!1)},freshAll:function(e){e=e||"";for(var t=br+e,r=this._caches,i=0;i<r.length;i++)r[i]&&(r[i][t]=!1)},isDirty:function(e){e=e||"";var t=br+e,r=this._context;return!r.hasOwnProperty(t)||r[t]===!0},deleteContext:function(e){delete this._caches[e],this._context={}},delete:function(e){delete this._context[e]},clearAll:function(){this._caches={}},getContext:function(){return this._context},eachContext:function(e,t){var r=Object.keys(this._caches);r.forEach(function(i){e&&e.call(t,i)})},miss:function(e){return!this._context.hasOwnProperty(e)}};Li.prototype.constructor=Li;var ea=Li,re=Qe.extend({width:512,height:512,type:A.UNSIGNED_BYTE,format:A.RGBA,wrapS:A.REPEAT,wrapT:A.REPEAT,minFilter:A.LINEAR_MIPMAP_LINEAR,magFilter:A.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,sRGB:!0,unpackAlignment:4,premultiplyAlpha:!1,dynamic:!1,NPOT:!1,__used:0},function(){this._cache=new ea},{getWebGLTexture:function(e){var t=e.gl,r=this._cache;return r.use(e.__uid__),r.miss("webgl_texture")&&r.put("webgl_texture",t.createTexture()),this.dynamic?this.update(e):r.isDirty()&&(this.update(e),r.fresh()),r.get("webgl_texture")},bind:function(){},unbind:function(){},dirty:function(){this._cache&&this._cache.dirtyAll()},update:function(e){},updateCommon:function(e){var t=e.gl;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,this.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,this.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,this.unpackAlignment),this.format===A.DEPTH_COMPONENT&&(this.useMipmap=!1);var r=e.getGLExtension("EXT_sRGB");this.format===re.SRGB&&!r&&(this.format=re.RGB),this.format===re.SRGB_ALPHA&&!r&&(this.format=re.RGBA),this.NPOT=!this.isPowerOfTwo()},getAvailableWrapS:function(){return this.NPOT?A.CLAMP_TO_EDGE:this.wrapS},getAvailableWrapT:function(){return this.NPOT?A.CLAMP_TO_EDGE:this.wrapT},getAvailableMinFilter:function(){var e=this.minFilter;return this.NPOT||!this.useMipmap?e===A.NEAREST_MIPMAP_NEAREST||e===A.NEAREST_MIPMAP_LINEAR?A.NEAREST:e===A.LINEAR_MIPMAP_LINEAR||e===A.LINEAR_MIPMAP_NEAREST?A.LINEAR:e:e},getAvailableMagFilter:function(){return this.magFilter},nextHighestPowerOfTwo:function(e){--e;for(var t=1;t<32;t<<=1)e=e|e>>t;return e+1},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("webgl_texture");r&&e.gl.deleteTexture(r),t.deleteContext(e.__uid__)},isRenderable:function(){},isPowerOfTwo:function(){}});Object.defineProperty(re.prototype,"width",{get:function(){return this._width},set:function(e){this._width=e}});Object.defineProperty(re.prototype,"height",{get:function(){return this._height},set:function(e){this._height=e}});re.BYTE=A.BYTE;re.UNSIGNED_BYTE=A.UNSIGNED_BYTE;re.SHORT=A.SHORT;re.UNSIGNED_SHORT=A.UNSIGNED_SHORT;re.INT=A.INT;re.UNSIGNED_INT=A.UNSIGNED_INT;re.FLOAT=A.FLOAT;re.HALF_FLOAT=36193;re.UNSIGNED_INT_24_8_WEBGL=34042;re.DEPTH_COMPONENT=A.DEPTH_COMPONENT;re.DEPTH_STENCIL=A.DEPTH_STENCIL;re.ALPHA=A.ALPHA;re.RGB=A.RGB;re.RGBA=A.RGBA;re.LUMINANCE=A.LUMINANCE;re.LUMINANCE_ALPHA=A.LUMINANCE_ALPHA;re.SRGB=35904;re.SRGB_ALPHA=35906;re.COMPRESSED_RGB_S3TC_DXT1_EXT=33776;re.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777;re.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778;re.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779;re.NEAREST=A.NEAREST;re.LINEAR=A.LINEAR;re.NEAREST_MIPMAP_NEAREST=A.NEAREST_MIPMAP_NEAREST;re.LINEAR_MIPMAP_NEAREST=A.LINEAR_MIPMAP_NEAREST;re.NEAREST_MIPMAP_LINEAR=A.NEAREST_MIPMAP_LINEAR;re.LINEAR_MIPMAP_LINEAR=A.LINEAR_MIPMAP_LINEAR;re.REPEAT=A.REPEAT;re.CLAMP_TO_EDGE=A.CLAMP_TO_EDGE;re.MIRRORED_REPEAT=A.MIRRORED_REPEAT;var j=re,it=Un.extend({skeleton:null,joints:null},function(){this.joints||(this.joints=[])},{offsetMatrix:null,isInstancedMesh:function(){return!1},isSkinnedMesh:function(){return!!(this.skeleton&&this.joints&&this.joints.length>0)},clone:function(){var e=Un.prototype.clone.call(this);return e.skeleton=this.skeleton,this.joints&&(e.joints=this.joints.slice()),e}});it.POINTS=A.POINTS;it.LINES=A.LINES;it.LINE_LOOP=A.LINE_LOOP;it.LINE_STRIP=A.LINE_STRIP;it.TRIANGLES=A.TRIANGLES;it.TRIANGLE_STRIP=A.TRIANGLE_STRIP;it.TRIANGLE_FAN=A.TRIANGLE_FAN;it.BACK=A.BACK;it.FRONT=A.FRONT;it.FRONT_AND_BACK=A.FRONT_AND_BACK;it.CW=A.CW;it.CCW=A.CCW;var ta=it,Hi={};Hi.isPowerOfTwo=function(e){return(e&e-1)===0};Hi.nextPowerOfTwo=function(e){return e--,e|=e>>1,e|=e>>2,e|=e>>4,e|=e>>8,e|=e>>16,e++,e};Hi.nearestPowerOfTwo=function(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))};var ds=Hi,uo=ds.isPowerOfTwo;function ho(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function ic(e,t){var r=ho(e.width),i=ho(e.height);t=t||document.createElement("canvas"),t.width=r,t.height=i;var n=t.getContext("2d");return n.drawImage(e.image,0,0,r,i),t}var ra=j.extend(function(){return{image:null,pixels:null,mipmaps:[],convertToPOT:!1}},{textureType:"texture2D",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type,n=!!(this.convertToPOT&&!this.mipmaps.length&&this.image&&(this.wrapS===j.REPEAT||this.wrapT===j.REPEAT)&&this.NPOT);t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,n?this.wrapS:this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,n?this.wrapT:this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,n?this.magFilter:this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,n?this.minFilter:this.getAvailableMinFilter());var a=e.getGLExtension("EXT_texture_filter_anisotropic");if(a&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_2D,a.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var o=e.getGLExtension("OES_texture_half_float");o||(i=A.FLOAT)}if(this.mipmaps.length)for(var s=this.width,l=this.height,u=0;u<this.mipmaps.length;u++){var h=this.mipmaps[u];this._updateTextureData(t,h,u,s,l,r,i,!1),s/=2,l/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i,n),this.useMipmap&&(!this.NPOT||n)&&t.generateMipmap(t.TEXTURE_2D);t.bindTexture(t.TEXTURE_2D,null)},_updateTextureData:function(e,t,r,i,n,a,o,s){if(t.image){var l=t.image;s&&(this._potCanvas=ic(this,this._potCanvas),l=this._potCanvas),e.texImage2D(e.TEXTURE_2D,r,a,a,o,l)}else a<=j.COMPRESSED_RGBA_S3TC_DXT5_EXT&&a>=j.COMPRESSED_RGB_S3TC_DXT1_EXT?e.compressedTexImage2D(e.TEXTURE_2D,r,a,i,n,0,t.pixels):e.texImage2D(e.TEXTURE_2D,r,a,i,n,0,a,o,t.pixels)},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_2D,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_2D))},isPowerOfTwo:function(){return uo(this.width)&&uo(this.height)},isRenderable:function(){return this.image?this.image.width>0&&this.image.height>0:!!(this.width&&this.height)},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_2D,null)},load:function(e,t){var r=we.createImage();t&&(r.crossOrigin=t);var i=this;return r.onload=function(){i.dirty(),i.trigger("success",i)},r.onerror=function(){i.trigger("error",i)},r.src=e,this.image=r,this}});Object.defineProperty(ra.prototype,"width",{get:function(){return this.image?this.image.width:this._width},set:function(e){this.image?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(ra.prototype,"height",{get:function(){return this.image?this.image.height:this._height},set:function(e){this.image?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});var ae=ra;function vs(e){return{byte:we.Int8Array,ubyte:we.Uint8Array,short:we.Int16Array,ushort:we.Uint16Array}[e]||we.Float32Array}function vn(e){return"attr_"+e}function _r(e,t,r,i){switch(this.name=e,this.type=t,this.size=r,this.semantic=i||"",this.value=null,r){case 1:this.get=function(n){return this.value[n]},this.set=function(n,a){this.value[n]=a},this.copy=function(n,a){this.value[n]=this.value[n]};break;case 2:this.get=function(n,a){var o=this.value;return a[0]=o[n*2],a[1]=o[n*2+1],a},this.set=function(n,a){var o=this.value;o[n*2]=a[0],o[n*2+1]=a[1]},this.copy=function(n,a){var o=this.value;a*=2,n*=2,o[n]=o[a],o[n+1]=o[a+1]};break;case 3:this.get=function(n,a){var o=n*3,s=this.value;return a[0]=s[o],a[1]=s[o+1],a[2]=s[o+2],a},this.set=function(n,a){var o=n*3,s=this.value;s[o]=a[0],s[o+1]=a[1],s[o+2]=a[2]},this.copy=function(n,a){var o=this.value;a*=3,n*=3,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2]};break;case 4:this.get=function(n,a){var o=this.value,s=n*4;return a[0]=o[s],a[1]=o[s+1],a[2]=o[s+2],a[3]=o[s+3],a},this.set=function(n,a){var o=this.value,s=n*4;o[s]=a[0],o[s+1]=a[1],o[s+2]=a[2],o[s+3]=a[3]},this.copy=function(n,a){var o=this.value;a*=4,n*=4,o[n]=o[a],o[n+1]=o[a+1],o[n+2]=o[a+2],o[n+3]=o[a+3]}}}_r.prototype.init=function(e){if(!this.value||this.value.length!==e*this.size){var t=vs(this.type);this.value=new t(e*this.size)}};_r.prototype.fromArray=function(e){var t=vs(this.type),r;if(e[0]&&e[0].length){var i=0,n=this.size;r=new t(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)r[i++]=e[a][o]}else r=new t(e);this.value=r};_r.prototype.clone=function(e){var t=new _r(this.name,this.type,this.size,this.semantic);return e&&console.warn("todo"),t};function ps(e,t,r,i,n){this.name=e,this.type=t,this.buffer=r,this.size=i,this.semantic=n,this.symbol="",this.needsRemove=!1}function _s(e){this.buffer=e,this.count=0}var wt=Qe.extend(function(){return{attributes:{},indices:null,dynamic:!0,_enabledAttributes:null,__used:0}},function(){this._cache=new ea,this._attributeList=Object.keys(this.attributes),this.__vaoCache={}},{mainAttribute:"",pick:null,pickByRay:null,dirty:function(){for(var e=this.getEnabledAttributes(),t=0;t<e.length;t++)this.dirtyAttribute(e[t]);this.dirtyIndices(),this._enabledAttributes=null,this._cache.dirty("any")},dirtyIndices:function(){this._cache.dirtyAll("indices")},dirtyAttribute:function(e){this._cache.dirtyAll(vn(e)),this._cache.dirtyAll("attributes")},getTriangleIndices:function(e,t){if(e<this.triangleCount&&e>=0){t||(t=[]);var r=this.indices;return t[0]=r[e*3],t[1]=r[e*3+1],t[2]=r[e*3+2],t}},setTriangleIndices:function(e,t){var r=this.indices;r[e*3]=t[0],r[e*3+1]=t[1],r[e*3+2]=t[2]},isUseIndices:function(){return!!this.indices},initIndicesFromArray:function(e){var t,r=this.vertexCount>65535?we.Uint32Array:we.Uint16Array;if(e[0]&&e[0].length){var i=0,n=3;t=new r(e.length*n);for(var a=0;a<e.length;a++)for(var o=0;o<n;o++)t[i++]=e[a][o]}else t=new r(e);this.indices=t},createAttribute:function(e,t,r,i){var n=new _r(e,t,r,i);return this.attributes[e]&&this.removeAttribute(e),this.attributes[e]=n,this._attributeList.push(e),n},removeAttribute:function(e){var t=this._attributeList,r=t.indexOf(e);return r>=0?(t.splice(r,1),delete this.attributes[e],!0):!1},getAttribute:function(e){return this.attributes[e]},getEnabledAttributes:function(){var e=this._enabledAttributes,t=this._attributeList;if(e)return e;for(var r=[],i=this.vertexCount,n=0;n<t.length;n++){var a=t[n],o=this.attributes[a];o.value&&o.value.length===i*o.size&&r.push(a)}return this._enabledAttributes=r,r},getBufferChunks:function(e){var t=this._cache;t.use(e.__uid__);var r=t.isDirty("attributes"),i=t.isDirty("indices");if(r||i){this._updateBuffer(e.gl,r,i);for(var n=this.getEnabledAttributes(),a=0;a<n.length;a++)t.fresh(vn(n[a]));t.fresh("attributes"),t.fresh("indices")}return t.fresh("any"),t.get("chunks")},_updateBuffer:function(e,t,r){var i=this._cache,n=i.get("chunks"),a=!1;n||(n=[],n[0]={attributeBuffers:[],indicesBuffer:null},i.put("chunks",n),a=!0);var o=n[0],s=o.attributeBuffers,l=o.indicesBuffer;if(t||a){var u=this.getEnabledAttributes(),h={};if(!a)for(var c=0;c<s.length;c++)h[s[c].name]=s[c];for(var d=0;d<u.length;d++){var f=u[d],v=this.attributes[f],p;a||(p=h[f]);var _;p?_=p.buffer:_=e.createBuffer(),i.isDirty(vn(f))&&(e.bindBuffer(e.ARRAY_BUFFER,_),e.bufferData(e.ARRAY_BUFFER,v.value,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW)),s[d]=new ps(f,v.type,_,v.size,v.semantic)}for(var c=d;c<s.length;c++)e.deleteBuffer(s[c].buffer);s.length=d}this.isUseIndices()&&(r||a)&&(l||(l=new _s(e.createBuffer()),o.indicesBuffer=l),l.count=this.indices.length,e.bindBuffer(e.ELEMENT_ARRAY_BUFFER,l.buffer),e.bufferData(e.ELEMENT_ARRAY_BUFFER,this.indices,this.dynamic?e.DYNAMIC_DRAW:e.STATIC_DRAW))},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Object.defineProperty&&(Object.defineProperty(wt.prototype,"vertexCount",{enumerable:!1,get:function(){var e=this.attributes[this.mainAttribute];return e||(e=this.attributes[this._attributeList[0]]),!e||!e.value?0:e.value.length/e.size}}),Object.defineProperty(wt.prototype,"triangleCount",{enumerable:!1,get:function(){var e=this.indices;return e?e.length/3:0}}));wt.STATIC_DRAW=A.STATIC_DRAW;wt.DYNAMIC_DRAW=A.DYNAMIC_DRAW;wt.STREAM_DRAW=A.STREAM_DRAW;wt.AttributeBuffer=ps;wt.IndicesBuffer=_s;wt.Attribute=_r;var Kt=wt,ke=T.create,or=T.add,Ut=T.set,gt=Kt.Attribute,Qt=Kt.extend(function(){return{attributes:{position:new gt("position","float",3,"POSITION"),texcoord0:new gt("texcoord0","float",2,"TEXCOORD_0"),texcoord1:new gt("texcoord1","float",2,"TEXCOORD_1"),normal:new gt("normal","float",3,"NORMAL"),tangent:new gt("tangent","float",4,"TANGENT"),color:new gt("color","float",4,"COLOR"),weight:new gt("weight","float",3,"WEIGHT"),joint:new gt("joint","float",4,"JOINT"),barycentric:new gt("barycentric","float",3,null)},boundingBox:null}},{mainAttribute:"position",updateBoundingBox:function(){var e=this.boundingBox;e||(e=this.boundingBox=new Ge);var t=this.attributes.position.value;if(t&&t.length){var r=e.min,i=e.max,n=r.array,a=i.array;T.set(n,t[0],t[1],t[2]),T.set(a,t[0],t[1],t[2]);for(var o=3;o<t.length;){var s=t[o++],l=t[o++],u=t[o++];s<n[0]&&(n[0]=s),l<n[1]&&(n[1]=l),u<n[2]&&(n[2]=u),s>a[0]&&(a[0]=s),l>a[1]&&(a[1]=l),u>a[2]&&(a[2]=u)}r._dirty=!0,i._dirty=!0}},generateVertexNormals:function(){if(!!this.vertexCount){var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value;if(!i||i.length!==r.length)i=t.normal.value=new we.Float32Array(r.length);else for(var n=0;n<i.length;n++)i[n]=0;for(var a=ke(),o=ke(),s=ke(),l=ke(),u=ke(),h=ke(),c=e?e.length:this.vertexCount,d,f,v,p=0;p<c;){e?(d=e[p++],f=e[p++],v=e[p++]):(d=p++,f=p++,v=p++),Ut(a,r[d*3],r[d*3+1],r[d*3+2]),Ut(o,r[f*3],r[f*3+1],r[f*3+2]),Ut(s,r[v*3],r[v*3+1],r[v*3+2]),T.sub(l,a,o),T.sub(u,o,s),T.cross(h,l,u);for(var n=0;n<3;n++)i[d*3+n]=i[d*3+n]+h[n],i[f*3+n]=i[f*3+n]+h[n],i[v*3+n]=i[v*3+n]+h[n]}for(var n=0;n<i.length;)Ut(h,i[n],i[n+1],i[n+2]),T.normalize(h,h),i[n++]=h[0],i[n++]=h[1],i[n++]=h[2];this.dirty()}},generateFaceNormals:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.indices,t=this.attributes,r=t.position.value,i=t.normal.value,n=ke(),a=ke(),o=ke(),s=ke(),l=ke(),u=ke();i||(i=t.normal.value=new Float32Array(r.length));for(var h=e?e.length:this.vertexCount,c,d,f,v=0;v<h;){e?(c=e[v++],d=e[v++],f=e[v++]):(c=v++,d=v++,f=v++),Ut(n,r[c*3],r[c*3+1],r[c*3+2]),Ut(a,r[d*3],r[d*3+1],r[d*3+2]),Ut(o,r[f*3],r[f*3+1],r[f*3+2]),T.sub(s,n,a),T.sub(l,a,o),T.cross(u,s,l),T.normalize(u,u);for(var p=0;p<3;p++)i[c*3+p]=u[p],i[d*3+p]=u[p],i[f*3+p]=u[p]}this.dirty()}},generateTangents:function(){if(!!this.vertexCount){var e=this.vertexCount,t=this.attributes;t.tangent.value||(t.tangent.value=new Float32Array(e*4));var r=t.texcoord0.value,i=t.position.value,n=t.tangent.value,a=t.normal.value;if(!r){console.warn("Geometry without texcoords can't generate tangents.");return}for(var o=[],s=[],l=0;l<e;l++)o[l]=[0,0,0],s[l]=[0,0,0];for(var u=[0,0,0],h=[0,0,0],c=this.indices,d=c?c.length:this.vertexCount,f,v,p,l=0;l<d;){c?(f=c[l++],v=c[l++],p=c[l++]):(f=l++,v=l++,p=l++);var _=r[f*2],m=r[v*2],y=r[p*2],g=r[f*2+1],x=r[v*2+1],E=r[p*2+1],S=i[f*3],w=i[v*3],b=i[p*3],C=i[f*3+1],O=i[v*3+1],M=i[p*3+1],B=i[f*3+2],F=i[v*3+2],R=i[p*3+2],H=w-S,U=b-S,q=O-C,I=M-C,fe=F-B,k=R-B,xe=m-_,oe=y-_,pe=x-g,_e=E-g,Be=1/(xe*_e-pe*oe);u[0]=(_e*H-pe*U)*Be,u[1]=(_e*q-pe*I)*Be,u[2]=(_e*fe-pe*k)*Be,h[0]=(xe*U-oe*H)*Be,h[1]=(xe*I-oe*q)*Be,h[2]=(xe*k-oe*fe)*Be,or(o[f],o[f],u),or(o[v],o[v],u),or(o[p],o[p],u),or(s[f],s[f],h),or(s[v],s[v],h),or(s[p],s[p],h)}for(var Fe=ke(),Le=ke(),Ve=ke(),l=0;l<e;l++){Ve[0]=a[l*3],Ve[1]=a[l*3+1],Ve[2]=a[l*3+2];var Je=o[l];T.scale(Fe,Ve,T.dot(Ve,Je)),T.sub(Fe,Je,Fe),T.normalize(Fe,Fe),T.cross(Le,Ve,Je),n[l*4]=Fe[0],n[l*4+1]=Fe[1],n[l*4+2]=Fe[2],n[l*4+3]=T.dot(Le,s[l])<0?-1:1}this.dirty()}},isUniqueVertex:function(){return this.isUseIndices()?this.vertexCount===this.indices.length:!0},generateUniqueVertex:function(){if(!(!this.vertexCount||!this.indices)){this.indices.length>65535&&(this.indices=new we.Uint32Array(this.indices));for(var e=this.attributes,t=this.indices,r=this.getEnabledAttributes(),i={},n=0;n<r.length;n++){var a=r[n];i[a]=e[a].value,e[a].init(this.indices.length)}for(var o=0,s=0;s<t.length;s++){for(var l=t[s],n=0;n<r.length;n++)for(var a=r[n],u=e[a].value,h=e[a].size,c=0;c<h;c++)u[o*h+c]=i[a][l*h+c];t[s]=o,o++}this.dirty()}},generateBarycentric:function(){if(!!this.vertexCount){this.isUniqueVertex()||this.generateUniqueVertex();var e=this.attributes,t=e.barycentric.value,r=this.indices;if(!(t&&t.length===r.length*3)){t=e.barycentric.value=new Float32Array(r.length*3);for(var i=0;i<(r?r.length:this.vertexCount/3);)for(var n=0;n<3;n++){var a=r?r[i++]:i*3+n;t[a*3+n]=1}this.dirty()}}},applyTransform:function(e){var t=this.attributes,r=t.position.value,i=t.normal.value,n=t.tangent.value;e=e.array;var a=L.create();L.invert(a,e),L.transpose(a,a);var o=T.transformMat4,s=T.forEach;s(r,3,0,null,o,e),i&&s(i,3,0,null,o,a),n&&s(n,4,0,null,o,a),this.boundingBox&&this.updateBoundingBox()},dispose:function(e){var t=this._cache;t.use(e.__uid__);var r=t.get("chunks");if(r)for(var i=0;i<r.length;i++){for(var n=r[i],a=0;a<n.attributeBuffers.length;a++){var o=n.attributeBuffers[a];e.gl.deleteBuffer(o.buffer)}n.indicesBuffer&&e.gl.deleteBuffer(n.indicesBuffer.buffer)}if(this.__vaoCache){var s=e.getGLExtension("OES_vertex_array_object");for(var l in this.__vaoCache){var u=this.__vaoCache[l].vao;u&&s.deleteVertexArrayOES(u)}}this.__vaoCache={},t.deleteContext(e.__uid__)}});Qt.STATIC_DRAW=Kt.STATIC_DRAW;Qt.DYNAMIC_DRAW=Kt.DYNAMIC_DRAW;Qt.STREAM_DRAW=Kt.STREAM_DRAW;Qt.AttributeBuffer=Kt.AttributeBuffer;Qt.IndicesBuffer=Kt.IndicesBuffer;Qt.Attribute=gt;var be=Qt,nc=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`,ht="uniform vec3 ",Ar="uniform float ",sr="@export clay.header.",lr="@end",Ne=":unconfigurable;",ac=[sr+"directional_light",ht+"directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]"+Ne,ht+"directionalLightColor[DIRECTIONAL_LIGHT_COUNT]"+Ne,lr,sr+"ambient_light",ht+"ambientLightColor[AMBIENT_LIGHT_COUNT]"+Ne,lr,sr+"ambient_sh_light",ht+"ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]"+Ne,ht+"ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]"+Ne,nc,lr,sr+"ambient_cubemap_light",ht+"ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ne,"uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ne,"uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]"+Ne,lr,sr+"point_light",ht+"pointLightPosition[POINT_LIGHT_COUNT]"+Ne,Ar+"pointLightRange[POINT_LIGHT_COUNT]"+Ne,ht+"pointLightColor[POINT_LIGHT_COUNT]"+Ne,lr,sr+"spot_light",ht+"spotLightPosition[SPOT_LIGHT_COUNT]"+Ne,ht+"spotLightDirection[SPOT_LIGHT_COUNT]"+Ne,Ar+"spotLightRange[SPOT_LIGHT_COUNT]"+Ne,Ar+"spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]"+Ne,Ar+"spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]"+Ne,Ar+"spotLightFalloffFactor[SPOT_LIGHT_COUNT]"+Ne,ht+"spotLightColor[SPOT_LIGHT_COUNT]"+Ne,lr].join(`
`);P.import(ac);var oc=Tt.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:"",clone:function(){var e=Tt.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),vt=oc,xi=function(e,t){this.normal=e||new D(0,1,0),this.distance=t||0};xi.prototype={constructor:xi,distanceToPoint:function(e){return T.dot(e.array,this.normal.array)-this.distance},projectPoint:function(e,t){t||(t=new D);var r=this.distanceToPoint(e);return T.scaleAndAdd(t.array,e.array,this.normal.array,-r),t._dirty=!0,t},normalize:function(){var e=1/T.len(this.normal.array);T.scale(this.normal.array,e),this.distance*=e},intersectFrustum:function(e){for(var t=e.vertices,r=this.normal.array,i=T.dot(t[0].array,r)>this.distance,n=1;n<8;n++)if(T.dot(t[n].array,r)>this.distance!=i)return!0},intersectLine:function(){var e=T.create();return function(t,r,i){var n=this.distanceToPoint(t),a=this.distanceToPoint(r);if(n>0&&a>0||n<0&&a<0)return null;var o=this.normal.array,s=this.distance,l=t.array;T.sub(e,r.array,t.array),T.normalize(e,e);var u=T.dot(o,e);if(u===0)return null;i||(i=new D);var h=(T.dot(o,l)-s)/u;return T.scaleAndAdd(i.array,l,e,-h),i._dirty=!0,i}}(),applyTransform:function(){var e=L.create(),t=N.create(),r=N.create();return r[3]=1,function(i){i=i.array,T.scale(r,this.normal.array,this.distance),N.transformMat4(r,r,i),this.distance=T.dot(r,this.normal.array),L.invert(e,i),L.transpose(e,e),t[3]=0,T.copy(t,this.normal.array),N.transformMat4(t,t,e),T.copy(this.normal.array,t)}}(),copy:function(e){T.copy(this.normal.array,e.normal.array),this.normal._dirty=!0,this.distance=e.distance},clone:function(){var e=new xi;return e.copy(this),e}};var ms=xi,Se=T.set,co=T.copy,fo=T.transformMat4,pn=Math.min,_n=Math.max,gs=function(){this.planes=[];for(var e=0;e<6;e++)this.planes.push(new ms);this.boundingBox=new Ge,this.vertices=[];for(var e=0;e<8;e++)this.vertices[e]=T.fromValues(0,0,0)};gs.prototype={setFromProjection:function(e){var t=this.planes,r=e.array,i=r[0],n=r[1],a=r[2],o=r[3],s=r[4],l=r[5],u=r[6],h=r[7],c=r[8],d=r[9],f=r[10],v=r[11],p=r[12],_=r[13],m=r[14],y=r[15];Se(t[0].normal.array,o-i,h-s,v-c),t[0].distance=-(y-p),t[0].normalize(),Se(t[1].normal.array,o+i,h+s,v+c),t[1].distance=-(y+p),t[1].normalize(),Se(t[2].normal.array,o+n,h+l,v+d),t[2].distance=-(y+_),t[2].normalize(),Se(t[3].normal.array,o-n,h-l,v-d),t[3].distance=-(y-_),t[3].normalize(),Se(t[4].normal.array,o-a,h-u,v-f),t[4].distance=-(y-m),t[4].normalize(),Se(t[5].normal.array,o+a,h+u,v+f),t[5].distance=-(y+m),t[5].normalize();var g=this.boundingBox,x=this.vertices;if(y===0){var E=l/i,S=-m/(f-1),w=-m/(f+1),b=-w/l,C=-S/l;g.min.set(-b*E,-b,w),g.max.set(b*E,b,S),Se(x[0],-b*E,-b,w),Se(x[1],-b*E,b,w),Se(x[2],b*E,-b,w),Se(x[3],b*E,b,w),Se(x[4],-C*E,-C,S),Se(x[5],-C*E,C,S),Se(x[6],C*E,-C,S),Se(x[7],C*E,C,S)}else{var O=(-1-p)/i,M=(1-p)/i,B=(1-_)/l,F=(-1-_)/l,R=(-1-m)/f,H=(1-m)/f;g.min.set(Math.min(O,M),Math.min(F,B),Math.min(H,R)),g.max.set(Math.max(M,O),Math.max(B,F),Math.max(R,H));var U=g.min.array,q=g.max.array;Se(x[0],U[0],U[1],U[2]),Se(x[1],U[0],q[1],U[2]),Se(x[2],q[0],U[1],U[2]),Se(x[3],q[0],q[1],U[2]),Se(x[4],U[0],U[1],q[2]),Se(x[5],U[0],q[1],q[2]),Se(x[6],q[0],U[1],q[2]),Se(x[7],q[0],q[1],q[2])}},getTransformedBoundingBox:function(){var e=T.create();return function(t,r){var i=this.vertices,n=r.array,a=t.min,o=t.max,s=a.array,l=o.array,u=i[0];fo(e,u,n),co(s,e),co(l,e);for(var h=1;h<8;h++)u=i[h],fo(e,u,n),s[0]=pn(e[0],s[0]),s[1]=pn(e[1],s[1]),s[2]=pn(e[2],s[2]),l[0]=_n(e[0],l[0]),l[1]=_n(e[1],l[1]),l[2]=_n(e[2],l[2]);return a._dirty=!0,o._dirty=!0,t}}()};var ia=gs,sc=Tt.extend(function(){return{projectionMatrix:new V,invProjectionMatrix:new V,viewMatrix:new V,frustum:new ia}},function(){this.update(!0)},{update:function(e){Tt.prototype.update.call(this,e),V.invert(this.viewMatrix,this.worldTransform),this.updateProjectionMatrix(),V.invert(this.invProjectionMatrix,this.projectionMatrix),this.frustum.setFromProjection(this.projectionMatrix)},setViewMatrix:function(e){V.copy(this.viewMatrix,e),V.invert(this.worldTransform,e),this.decomposeWorldTransform()},decomposeProjectionMatrix:function(){},setProjectionMatrix:function(e){V.copy(this.projectionMatrix,e),V.invert(this.invProjectionMatrix,e),this.decomposeProjectionMatrix()},updateProjectionMatrix:function(){},castRay:function(){var e=N.create();return function(t,r){var i=r!==void 0?r:new Ci,n=t.array[0],a=t.array[1];return N.set(e,n,a,-1,1),N.transformMat4(e,e,this.invProjectionMatrix.array),N.transformMat4(e,e,this.worldTransform.array),T.scale(i.origin.array,e,1/e[3]),N.set(e,n,a,1,1),N.transformMat4(e,e,this.invProjectionMatrix.array),N.transformMat4(e,e,this.worldTransform.array),T.scale(e,e,1/e[3]),T.sub(i.direction.array,e,i.origin.array),T.normalize(i.direction.array,i.direction.array),i.direction._dirty=!0,i.origin._dirty=!0,i}}()}),mr=sc,lc=L.create(),vo=L.create(),mn={};function uc(e){var t=[],r=Object.keys(e);r.sort();for(var i=0;i<r.length;i++){var n=r[i];t.push(n+" "+e[n])}var a=t.join(`
`);if(mn[a])return mn[a];var o=Ie.genGUID();return mn[a]=o,o}function zi(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}zi.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0};zi.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e};zi.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var hc=Tt.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new Ge,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new as(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof mr?(this._cameraList.length>0&&console.warn("Found multiple camera in one scene. Use the fist one."),this._cameraList.push(e)):e instanceof vt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof mr?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof vt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},r=0;r<e.length;r++){var i=e[r];if(!i.invisible){var n=i.group;t[n]||(t[n]={}),t[n][i.type]=t[n][i.type]||0,t[n][i.type]++}}this._lightNumber=t;for(var a in t)this._lightProgramKeys[a]=uc(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),r={};function i(n,a){r[n.__uid__]=a;for(var o=0;o<n._children.length;o++){var s=n._children[o],l=a._children[o];i(s,l)}}return i(e,t),t.traverse(function(n){n.skeleton&&(n.skeleton=n.skeleton.clone(r)),n.material&&(n.material=n.material.clone())}),t},updateRenderList:function(e,t){var r=e.__uid__,i=this._renderLists.get(r);i||(i=new zi,this._renderLists.put(r,i)),i.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var n=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,n,i,t),i.endCount(),i},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,r,i,n){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?lc:o.worldTransform.array,l=o.geometry;L.multiplyAffine(vo,t.viewMatrix.array,s),(n&&!l.boundingBox||!this.isFrustumCulled(o,t,vo))&&i.add(o,o.material.transparent||r)}o._children.length>0&&this._doUpdateRenderList(o,t,r,i,n)}},isFrustumCulled:function(){var e=new Ge,t=new V;return function(r,i,n){var a=r.boundingBox;if(a||(r.skeleton&&r.skeleton.boundingBox?a=r.skeleton.boundingBox:a=r.geometry.boundingBox),!a)return!1;if(t.array=n,e.transformFrom(a,t),r.castShadow&&this.viewBoundingBoxLastFrame.union(e),r.frustumCulling){if(!e.intersectBoundingBox(i.frustum.boundingBox))return!0;t.array=i.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}}(),_updateLightUniforms:function(){var e=this.lights;e.sort(cc);var t=this._lightUniforms;for(var r in t)for(var i in t[r])t[r][i].value.length=0;for(var n=0;n<e.length;n++){var a=e[n];if(!a.invisible){var r=a.group;for(var i in a.uniformTemplates){var o=a.uniformTemplates[i],s=o.value(a);if(s!=null){t[r]||(t[r]={}),t[r][i]||(t[r][i]={type:"",value:[]});var l=t[r][i];switch(l.type=o.type+"v",o.type){case"1i":case"1f":case"t":l.value.push(s);break;case"2f":case"3f":case"4f":for(var u=0;u<s.length;u++)l.value.push(s[u]);break;default:console.error("Unkown light uniform type "+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,r=this._lightNumber;for(var i in r[e])if(!t[e]||r[e][i]!==t[e][i])return!0;for(var i in t[e])if(!r[e]||r[e][i]!==t[e][i])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:function(){function e(t,r,i){for(var n in t){var a=t[n];if(a.type==="tv"){if(!r.hasUniform(n))continue;for(var o=[],s=0;s<a.value.length;s++){var l=a.value[s],u=r.takeCurrentTextureSlot(i,l);o.push(u)}r.setUniform(i.gl,"1iv",n,o)}else r.setUniform(i.gl,a.type,n,a.value)}}return function(t,r,i){e(this._lightUniforms[r],t,i),e(this.shadowUniforms,t,i)}}(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function cc(e,t){if(t.castShadow&&!e.castShadow)return!0}var Bt=hc,hi=ds.isPowerOfTwo,fc=["px","nx","py","ny","pz","nz"],na=j.extend(function(){return{image:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},pixels:{px:null,nx:null,py:null,ny:null,pz:null,nz:null},mipmaps:[]}},{textureType:"textureCube",update:function(e){var t=e.gl;t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),this.updateCommon(e);var r=this.format,i=this.type;t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_S,this.getAvailableWrapS()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_WRAP_T,this.getAvailableWrapT()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAG_FILTER,this.getAvailableMagFilter()),t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MIN_FILTER,this.getAvailableMinFilter());var n=e.getGLExtension("EXT_texture_filter_anisotropic");if(n&&this.anisotropic>1&&t.texParameterf(t.TEXTURE_CUBE_MAP,n.TEXTURE_MAX_ANISOTROPY_EXT,this.anisotropic),i===36193){var a=e.getGLExtension("OES_texture_half_float");a||(i=A.FLOAT)}if(this.mipmaps.length)for(var o=this.width,s=this.height,l=0;l<this.mipmaps.length;l++){var u=this.mipmaps[l];this._updateTextureData(t,u,l,o,s,r,i),o/=2,s/=2}else this._updateTextureData(t,this,0,this.width,this.height,r,i),!this.NPOT&&this.useMipmap&&t.generateMipmap(t.TEXTURE_CUBE_MAP);t.bindTexture(t.TEXTURE_CUBE_MAP,null)},_updateTextureData:function(e,t,r,i,n,a,o){for(var s=0;s<6;s++){var l=fc[s],u=t.image&&t.image[l];u?e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,a,o,u):e.texImage2D(e.TEXTURE_CUBE_MAP_POSITIVE_X+s,r,a,i,n,0,a,o,t.pixels&&t.pixels[l])}},generateMipmap:function(e){var t=e.gl;this.useMipmap&&!this.NPOT&&(t.bindTexture(t.TEXTURE_CUBE_MAP,this._cache.get("webgl_texture")),t.generateMipmap(t.TEXTURE_CUBE_MAP))},bind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,this.getWebGLTexture(e))},unbind:function(e){e.gl.bindTexture(e.gl.TEXTURE_CUBE_MAP,null)},isPowerOfTwo:function(){return this.image.px?hi(this.image.px.width)&&hi(this.image.px.height):hi(this.width)&&hi(this.height)},isRenderable:function(){return this.image.px?ur(this.image.px)&&ur(this.image.nx)&&ur(this.image.py)&&ur(this.image.ny)&&ur(this.image.pz)&&ur(this.image.nz):!!(this.width&&this.height)},load:function(e,t){var r=0,i=this;return Ie.each(e,function(n,a){var o=we.createImage();t&&(o.crossOrigin=t),o.onload=function(){r--,r===0&&(i.dirty(),i.trigger("success",i))},o.onerror=function(){r--},r++,o.src=n,i.image[a]=o}),this}});Object.defineProperty(na.prototype,"width",{get:function(){return this.image&&this.image.px?this.image.px.width:this._width},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set width"):(this._width!==e&&this.dirty(),this._width=e)}});Object.defineProperty(na.prototype,"height",{get:function(){return this.image&&this.image.px?this.image.px.height:this._height},set:function(e){this.image&&this.image.px?console.warn("Texture from image can't set height"):(this._height!==e&&this.dirty(),this._height=e)}});function ur(e){return e.width>0&&e.height>0}var Ur=na,dc=mr.extend({fov:50,aspect:1,near:.1,far:2e3},{updateProjectionMatrix:function(){var e=this.fov/180*Math.PI;this.projectionMatrix.perspective(e,this.aspect,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array,t=Math.atan(1/e[5])*2;this.fov=t/Math.PI*180,this.aspect=e[5]/e[0],this.near=e[14]/(e[10]-1),this.far=e[14]/(e[10]+1)},clone:function(){var e=mr.prototype.clone.call(this);return e.fov=this.fov,e.aspect=this.aspect,e.near=this.near,e.far=this.far,e}}),Pe=dc,ci="framebuffer",bt="renderbuffer",po=bt+"_width",_o=bt+"_height",gn=bt+"_attached",yn="depthtexture_attached",Ht=A.FRAMEBUFFER,wr=A.RENDERBUFFER,Pr=A.DEPTH_ATTACHMENT,ys=A.COLOR_ATTACHMENT0,Wr=Qe.extend({depthBuffer:!0,viewport:null,_width:0,_height:0,_textures:null,_boundRenderer:null},function(){this._cache=new ea,this._textures={}},{getTextureWidth:function(){return this._width},getTextureHeight:function(){return this._height},bind:function(e){if(e.__currentFrameBuffer){if(e.__currentFrameBuffer===this)return;console.warn("Renderer already bound with another framebuffer. Unbind it first")}e.__currentFrameBuffer=this;var t=e.gl;t.bindFramebuffer(Ht,this._getFrameBufferGL(e)),this._boundRenderer=e;var r=this._cache;r.put("viewport",e.viewport);var i=!1,n,a;for(var o in this._textures){i=!0;var s=this._textures[o];s&&(n=s.texture.width,a=s.texture.height,this._doAttach(e,s.texture,o,s.target))}this._width=n,this._height=a,!i&&this.depthBuffer&&console.error("Must attach texture before bind, or renderbuffer may have incorrect width and height."),this.viewport?e.setViewport(this.viewport):e.setViewport(0,0,n,a,1);var l=r.get("attached_textures");if(l){for(var o in l)if(!this._textures[o]){var u=l[o];this._doDetach(t,o,u)}}if(!r.get(yn)&&this.depthBuffer){r.miss(bt)&&r.put(bt,t.createRenderbuffer());var h=r.get(bt);(n!==r.get(po)||a!==r.get(_o))&&(t.bindRenderbuffer(wr,h),t.renderbufferStorage(wr,t.DEPTH_COMPONENT16,n,a),r.put(po,n),r.put(_o,a),t.bindRenderbuffer(wr,null)),r.get(gn)||(t.framebufferRenderbuffer(Ht,Pr,wr,h),r.put(gn,!0))}},unbind:function(e){e.__currentFrameBuffer=null;var t=e.gl;t.bindFramebuffer(Ht,null),this._boundRenderer=null,this._cache.use(e.__uid__);var r=this._cache.get("viewport");r&&e.setViewport(r),this.updateMipmap(e)},updateMipmap:function(e){var t=e.gl;for(var r in this._textures){var i=this._textures[r];if(i){var n=i.texture;if(!n.NPOT&&n.useMipmap&&n.minFilter===j.LINEAR_MIPMAP_LINEAR){var a=n.textureType==="textureCube"?A.TEXTURE_CUBE_MAP:A.TEXTURE_2D;t.bindTexture(a,n.getWebGLTexture(e)),t.generateMipmap(a),t.bindTexture(a,null)}}}},checkStatus:function(e){return e.checkFramebufferStatus(Ht)},_getFrameBufferGL:function(e){var t=this._cache;return t.use(e.__uid__),t.miss(ci)&&t.put(ci,e.gl.createFramebuffer()),t.get(ci)},attach:function(e,t,r){if(!e.width)throw new Error("The texture attached to color buffer is not a valid.");t=t||ys,r=r||A.TEXTURE_2D;var i=this._boundRenderer,n=i&&i.gl,a;if(n){var o=this._cache;o.use(i.__uid__),a=o.get("attached_textures")}var s=this._textures[t];if(!(s&&s.target===r&&s.texture===e&&a&&a[t]!=null)){var l=!0;i&&(l=this._doAttach(i,e,t,r),this.viewport||i.setViewport(0,0,e.width,e.height,1)),l&&(this._textures[t]=this._textures[t]||{},this._textures[t].texture=e,this._textures[t].target=r)}},_doAttach:function(e,t,r,i){var n=e.gl,a=t.getWebGLTexture(e),o=this._cache.get("attached_textures");if(o&&o[r]){var s=o[r];if(s.texture===t&&s.target===i)return}r=+r;var l=!0;if(r===Pr||r===A.DEPTH_STENCIL_ATTACHMENT){var u=e.getGLExtension("WEBGL_depth_texture");if(u||(console.error("Depth texture is not supported by the browser"),l=!1),t.format!==A.DEPTH_COMPONENT&&t.format!==A.DEPTH_STENCIL&&(console.error("The texture attached to depth buffer is not a valid."),l=!1),l){var h=this._cache.get(bt);h&&(n.framebufferRenderbuffer(Ht,Pr,wr,null),n.deleteRenderbuffer(h),this._cache.put(bt,!1)),this._cache.put(gn,!1),this._cache.put(yn,!0)}}return n.framebufferTexture2D(Ht,r,i,a,0),o||(o={},this._cache.put("attached_textures",o)),o[r]=o[r]||{},o[r].texture=t,o[r].target=i,l},_doDetach:function(e,t,r){e.framebufferTexture2D(Ht,t,r,null,0);var i=this._cache.get("attached_textures");i&&i[t]&&(i[t]=null),(t===Pr||t===A.DEPTH_STENCIL_ATTACHMENT)&&this._cache.put(yn,!1)},detach:function(e,t){if(this._textures[e]=null,this._boundRenderer){var r=this._cache;r.use(this._boundRenderer.__uid__),this._doDetach(this._boundRenderer.gl,e,t)}},dispose:function(e){var t=e.gl,r=this._cache;r.use(e.__uid__);var i=r.get(bt);i&&t.deleteRenderbuffer(i);var n=r.get(ci);n&&t.deleteFramebuffer(n),r.deleteContext(e.__uid__),this._textures={}}});Wr.DEPTH_ATTACHMENT=Pr;Wr.COLOR_ATTACHMENT0=ys;Wr.STENCIL_ATTACHMENT=A.STENCIL_ATTACHMENT;Wr.DEPTH_STENCIL_ATTACHMENT=A.DEPTH_STENCIL_ATTACHMENT;var He=Wr,vc=["px","nx","py","ny","pz","nz"],pc=Qe.extend(function(){var e={position:new D,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new Pe({fov:90}),nx:new Pe({fov:90}),py:new Pe({fov:90}),ny:new Pe({fov:90}),pz:new Pe({fov:90}),nz:new Pe({fov:90})};return t.px.lookAt(D.POSITIVE_X,D.NEGATIVE_Y),t.nx.lookAt(D.NEGATIVE_X,D.NEGATIVE_Y),t.py.lookAt(D.POSITIVE_Y,D.POSITIVE_Z),t.ny.lookAt(D.NEGATIVE_Y,D.NEGATIVE_Z),t.pz.lookAt(D.POSITIVE_Z,D.NEGATIVE_Y),t.nz.lookAt(D.NEGATIVE_Z,D.NEGATIVE_Y),e._frameBuffer=new He,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,r){var i=e.gl;r||t.update();for(var n=this.texture.width,a=2*Math.atan(n/(n-.5))/Math.PI*180,o=0;o<6;o++){var s=vc[o],l=this._cameras[s];if(D.copy(l.position,this.position),l.far=this.far,l.near=this.near,l.fov=a,this.shadowMapPass){l.update();var u=t.getBoundingBox();u.applyTransform(l.viewMatrix),t.viewBoundingBoxLastFrame.copy(u),this.shadowMapPass.render(e,t,l,!0)}this._frameBuffer.attach(this.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,l,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),aa=pc,_c=be.extend({dynamic:!1,widthSegments:1,heightSegments:1},function(){this.build()},{build:function(){for(var e=this.heightSegments,t=this.widthSegments,r=this.attributes,i=[],n=[],a=[],o=[],s=0;s<=e;s++)for(var l=s/e,u=0;u<=t;u++){var h=u/t;if(i.push([2*h-1,2*l-1,0]),n&&n.push([h,l]),a&&a.push([0,0,1]),u<t&&s<e){var c=u+s*(t+1);o.push([c,c+1,c+t+1]),o.push([c+t+1,c+1,c+t+2])}}r.position.fromArray(i),r.texcoord0.fromArray(n),r.normal.fromArray(a),this.initIndicesFromArray(o),this.boundingBox=new Ge,this.boundingBox.min.set(-1,-1,0),this.boundingBox.max.set(1,1,0)}}),oa=_c,ye=new V,mc=be.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:hr("px",this.depthSegments,this.heightSegments),nx:hr("nx",this.depthSegments,this.heightSegments),py:hr("py",this.widthSegments,this.depthSegments),ny:hr("ny",this.widthSegments,this.depthSegments),pz:hr("pz",this.widthSegments,this.heightSegments),nz:hr("nz",this.widthSegments,this.heightSegments)},t=["position","texcoord0","normal"],r=0,i=0;for(var n in e)r+=e[n].vertexCount,i+=e[n].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(r);this.indices=new we.Uint16Array(i);var o=0,s=0;for(var n in e){for(var l=e[n],a=0;a<t.length;a++)for(var u=t[a],h=l.attributes[u].value,c=l.attributes[u].size,d=u==="normal",f=0;f<h.length;f++){var v=h[f];this.inside&&d&&(v=-v),this.attributes[u].value[f+c*s]=v}for(var p=l.indices.length,f=0;f<l.indices.length;f++)this.indices[f+o]=s+l.indices[this.inside?p-f-1:f];o+=l.indices.length,s+=l.vertexCount}this.boundingBox=new Ge,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function hr(e,t,r){ye.identity();var i=new oa({widthSegments:t,heightSegments:r});switch(e){case"px":V.translate(ye,ye,D.POSITIVE_X),V.rotateY(ye,ye,Math.PI/2);break;case"nx":V.translate(ye,ye,D.NEGATIVE_X),V.rotateY(ye,ye,-Math.PI/2);break;case"py":V.translate(ye,ye,D.POSITIVE_Y),V.rotateX(ye,ye,-Math.PI/2);break;case"ny":V.translate(ye,ye,D.NEGATIVE_Y),V.rotateX(ye,ye,Math.PI/2);break;case"pz":V.translate(ye,ye,D.POSITIVE_Z);break;case"nz":V.translate(ye,ye,D.NEGATIVE_Z),V.rotateY(ye,ye,Math.PI);break}return i.applyTransform(ye),i}var xs=mc,gc=`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`;P.import(gc);var yc=ta.extend(function(){var e=new P({vertex:P.source("clay.skybox.vertex"),fragment:P.source("clay.skybox.fragment")}),t=new Mt({shader:e,depthMask:!1});return{scene:null,geometry:new xs,material:t,environmentMap:null,culling:!1,_dummyCamera:new Pe}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on("beforerender",this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off("beforerender",this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType==="texture2D"?(this.material.define("EQUIRECTANGULAR"),e.minFilter=j.LINEAR):this.material.undefine("EQUIRECTANGULAR"),this.material.set("environmentMap",e)},getEnvironmentMap:function(){return this.material.get("environmentMap")},_beforeRenderScene:function(e,t,r){this.renderSkybox(e,r)},renderSkybox:function(e,t){var r=this._dummyCamera;r.aspect=e.getViewportAspect(),r.fov=t.fov||50,r.updateProjectionMatrix(),V.invert(r.invProjectionMatrix,r.projectionMatrix),r.worldTransform.copy(t.worldTransform),r.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get("lod")>0?this.material.define("fragment","LOD"):this.material.undefine("fragment","LOD"),e.renderPass([this],r)}}),Hr=yc,xc=542327876,Tc=131072,Ec=512,Sc=4;function sa(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var bc=31,Ac=sa("DXT1"),wc=sa("DXT3"),Mc=sa("DXT5"),Cc=0,Lc=1,Rc=2,Pc=3,Dc=4,Nc=7,Ic=20,Oc=21,Bc=28,Fc={parse:function(e,t){var r=new Int32Array(e,0,bc);if(r[Cc]!==xc||!r(Ic)&Sc)return null;var i=r(Oc),n=r[Dc],a=r[Pc],o=r[Bc]&Ec,s=r[Rc]&Tc,l,u;switch(i){case Ac:l=8,u=j.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case wc:l=16,u=j.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Mc:l=16,u=j.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var h=r[Lc]+4,c=o?6:1,d=1;s&&(d=Math.max(1,r[Nc]));for(var f=[],v=0;v<c;v++){var p=n,_=a;f[v]=new ae({width:p,height:_,format:u});for(var m=[],y=0;y<d;y++){var g=Math.max(4,p)/4*Math.max(4,_)/4*l,x=new Uint8Array(e,h,g);h+=g,p*=.5,_*=.5,m[y]=x}f[v].pixels=m[0],s&&(f[v].mipmaps=m)}if(t)t.width=f[0].width,t.height=f[0].height,t.format=f[0].format,t.pixels=f[0].pixels,t.mipmaps=f[0].mipmaps;else return f[0]}},Uc=Fc,Ti=String.fromCharCode,Hc=8,zc=32767;function Vc(e,t,r,i){if(e[3]>0){var n=Math.pow(2,e[3]-128-8+i);t[r+0]=e[0]*n,t[r+1]=e[1]*n,t[r+2]=e[2]*n}else t[r+0]=0,t[r+1]=0,t[r+2]=0;return t[r+3]=1,t}function kc(e,t,r){for(var i="",n=t;n<r;n++)i+=Ti(e[n]);return i}function Gc(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function mo(e,t,r,i){for(var n=0,a=0,o=i;o>0;)if(e[a][0]=t[r++],e[a][1]=t[r++],e[a][2]=t[r++],e[a][3]=t[r++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<n>>>0;s>0;s--)Gc(e[a-1],e[a]),a++,o--;n+=8}else a++,o--,n=0;return r}function Wc(e,t,r,i){if(i<Hc|i>zc)return mo(e,t,r,i);var n=t[r++];if(n!=2)return mo(e,t,r-1,i);if(e[0][1]=t[r++],e[0][2]=t[r++],n=t[r++],(e[0][2]<<8>>>0|n)>>>0!==i)return null;for(var n=0;n<4;n++)for(var a=0;a<i;){var o=t[r++];if(o>128){o=(o&127)>>>0;for(var s=t[r++];o--;)e[a++][n]=s}else for(;o--;)e[a++][n]=t[r++]}return r}var Xc={parseRGBE:function(e,t,r){r==null&&(r=0);var i=new Uint8Array(e),n=i.length;if(kc(i,0,2)==="#?"){for(var a=2;a<n&&!(Ti(i[a])===`
`&&Ti(i[a+1])===`
`);a++);if(!(a>=n)){a+=2;for(var o="";a<n;a++){var s=Ti(i[a]);if(s===`
`)break;o+=s}var l=o.split(" "),u=parseInt(l[1]),h=parseInt(l[3]);if(!(!h||!u)){for(var c=a+1,d=[],f=0;f<h;f++){d[f]=[];for(var v=0;v<4;v++)d[f][v]=0}for(var p=new Float32Array(h*u*4),_=0,m=0;m<u;m++){var c=Wc(d,i,c,h);if(!c)return null;for(var f=0;f<h;f++)Vc(d[f],p,_,r),_+=4}return t||(t=new ae),t.width=h,t.height=u,t.pixels=p,t.type=j.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},Yc=Xc,Ei={loadTexture:function(e,t,r,i){var n;if(typeof t=="function"?(r=t,i=r,t={}):t=t||{},typeof e=="string"){if(e.match(/.hdr$/)||t.fileType==="hdr")return n=new ae({width:0,height:0,sRGB:!1}),Ei._fetchTexture(e,function(a){Yc.parseRGBE(a,n,t.exposure),n.dirty(),r&&r(n)},i),n;e.match(/.dds$/)||t.fileType==="dds"?(n=new ae({width:0,height:0}),Ei._fetchTexture(e,function(a){Uc.parse(a,n),n.dirty(),r&&r(n)},i)):(n=new ae,n.load(e),n.success(r),n.error(i))}else typeof e=="object"&&typeof e.px<"u"&&(n=new Ur,n.load(e),n.success(r),n.error(i));return n},loadPanorama:function(e,t,r,i,n,a){var o=this;typeof i=="function"?(n=i,a=n,i={}):i=i||{},Ei.loadTexture(t,i,function(s){s.flipY=i.flipY||!1,o.panoramaToCubeMap(e,s,r,i),s.dispose(e),n&&n(r)},a)},panoramaToCubeMap:function(e,t,r,i){var n=new aa,a=new Hr({scene:new Bt});return a.setEnvironmentMap(t),i=i||{},i.encodeRGBM&&a.material.define("fragment","RGBM_ENCODE"),r.sRGB=t.sRGB,n.texture=r,n.render(e,a.scene),n.texture=null,n.dispose(e),r},heightToNormal:function(e,t){var r=document.createElement("canvas"),i=r.width=e.width,n=r.height=e.height,a=r.getContext("2d");a.drawImage(e,0,0,i,n),t=t||!1;for(var o=a.getImageData(0,0,i,n),s=a.createImageData(i,n),l=0;l<o.data.length;l+=4){if(t){var u=o.data[l],h=o.data[l+1],c=o.data[l+2],d=Math.abs(u-h)+Math.abs(h-c);if(d>20)return console.warn("Given image is not a height map"),e}var f,v,p,_;l%(i*4)===0?(f=o.data[l],p=o.data[l+4]):l%(i*4)===(i-1)*4?(f=o.data[l-4],p=o.data[l]):(f=o.data[l-4],p=o.data[l+4]),l<i*4?(v=o.data[l],_=o.data[l+i*4]):l>i*(n-1)*4?(v=o.data[l-i*4],_=o.data[l]):(v=o.data[l-i*4],_=o.data[l+i*4]),s.data[l]=f-p+127,s.data[l+1]=v-_+127,s.data[l+2]=255,s.data[l+3]=255}return a.putImageData(s,0,0),r},isHeightImage:function(e,t,r){if(!e||!e.width||!e.height)return!1;var i=document.createElement("canvas"),n=i.getContext("2d"),a=t||32;r=r||20,i.width=i.height=a,n.drawImage(e,0,0,a,a);for(var o=n.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var l=o.data[s],u=o.data[s+1],h=o.data[s+2],c=Math.abs(l-u)+Math.abs(u-h);if(c>r)return!1}return!0},_fetchTexture:function(e,t,r){we.request.get({url:e,responseType:"arraybuffer",onload:t,onerror:r})},createChessboard:function(e,t,r,i){e=e||512,t=t||64,r=r||"black",i=i||"white";var n=Math.ceil(e/t),a=document.createElement("canvas");a.width=e,a.height=e;var o=a.getContext("2d");o.fillStyle=i,o.fillRect(0,0,e,e),o.fillStyle=r;for(var s=0;s<n;s++)for(var l=0;l<n;l++){var u=l%2?s%2:s%2-1;u&&o.fillRect(s*t,l*t,t,t)}var h=new ae({image:a,anisotropic:8});return h},createBlank:function(e){var t=document.createElement("canvas");t.width=1,t.height=1;var r=t.getContext("2d");r.fillStyle=e,r.fillRect(0,0,1,1);var i=new ae({image:t});return i}},jt=Ei,Hn=["mousedown","mouseup","mousemove","mouseover","mouseout","click","dblclick","contextmenu"];function zn(e){return"_on"+e}var Vn=function(e){var t=this;this._texture=new ae({anisotropic:32,flipY:!1,surface:this,dispose:function(r){t.dispose(),ae.prototype.dispose.call(this,r)}}),Hn.forEach(function(r){this[zn(r)]=function(i){!i.triangle||this._meshes.forEach(function(n){this.dispatchEvent(r,n,i.triangle,i.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};Vn.prototype={constructor:Vn,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error("ECharts must init on canvas if it is used as texture."),t=document.createElement("canvas");else{var r=this,i=e.getZr(),n=i.__oldRefreshImmediately||i.refreshImmediately;i.refreshImmediately=function(){n.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},i.__oldRefreshImmediately=n}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new D,t=new D,r=new D,i=new tt,n=new tt,a=new tt,o=new tt,s=new D;return function(l,u,h,c){var d=u.geometry,f=d.attributes.position,v=d.attributes.texcoord0,p=D.dot,_=D.cross;f.get(h[0],e.array),f.get(h[1],t.array),f.get(h[2],r.array),v.get(h[0],i.array),v.get(h[1],n.array),v.get(h[2],a.array),_(s,t,r);var m=p(e,s),y=p(c,s)/m;_(s,r,e);var g=p(c,s)/m;_(s,e,t);var x=p(c,s)/m;tt.scale(o,i,y),tt.scaleAndAdd(o,o,n,g),tt.scaleAndAdd(o,o,a,x);var E=o.x*this._chart.getWidth(),S=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(l,{zrX:E,zrY:S})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(Hn.forEach(function(t){e.on(t,this[zn(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),Hn.forEach(function(r){e.off(r,this[zn(r)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var $c=Vn,jc=mr.extend({left:-1,right:1,near:-1,far:1,top:1,bottom:-1},{updateProjectionMatrix:function(){this.projectionMatrix.ortho(this.left,this.right,this.bottom,this.top,this.near,this.far)},decomposeProjectionMatrix:function(){var e=this.projectionMatrix.array;this.left=(-1-e[12])/e[0],this.right=(1-e[12])/e[0],this.top=(1-e[13])/e[5],this.bottom=(-1-e[13])/e[5],this.near=-(-1-e[14])/e[10],this.far=-(1-e[14])/e[10]},clone:function(){var e=mr.prototype.clone.call(this);return e.left=this.left,e.right=this.right,e.near=this.near,e.far=this.far,e.top=this.top,e.bottom=this.bottom,e}}),zr=jc,qc=`
@export clay.compositor.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
varying vec2 v_Texcoord;
void main()
{
 v_Texcoord = texcoord;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end`;P.import(qc);var Zc=new oa,go=new ta({geometry:Zc,frustumCulling:!1}),Kc=new zr,Qc=Qe.extend(function(){return{fragment:"",outputs:null,material:null,blendWithPrevious:!1,clearColor:!1,clearDepth:!0}},function(){var e=new P(P.source("clay.compositor.vertex"),this.fragment),t=new Mt({shader:e});t.enableTexturesAll(),this.material=t},{setUniform:function(e,t){this.material.setUniform(e,t)},getUniform:function(e){var t=this.material.uniforms[e];if(t)return t.value},attachOutput:function(e,t){this.outputs||(this.outputs={}),t=t||A.COLOR_ATTACHMENT0,this.outputs[t]=e},detachOutput:function(e){for(var t in this.outputs)this.outputs[t]===e&&(this.outputs[t]=null)},bind:function(e,t){if(this.outputs)for(var r in this.outputs){var i=this.outputs[r];i&&t.attach(i,r)}t&&t.bind(e)},unbind:function(e,t){t.unbind(e)},render:function(e,t){var r=e.gl;if(t){this.bind(e,t);var i=e.getGLExtension("EXT_draw_buffers");if(i&&this.outputs){var n=[];for(var a in this.outputs)a=+a,a>=r.COLOR_ATTACHMENT0&&a<=r.COLOR_ATTACHMENT0+8&&n.push(a);i.drawBuffersEXT(n)}}this.trigger("beforerender",this,e);var o=this.clearDepth?r.DEPTH_BUFFER_BIT:0;if(r.depthMask(!0),this.clearColor){o=o|r.COLOR_BUFFER_BIT,r.colorMask(!0,!0,!0,!0);var s=this.clearColor;Array.isArray(s)&&r.clearColor(s[0],s[1],s[2],s[3])}r.clear(o),this.blendWithPrevious?(r.enable(r.BLEND),this.material.transparent=!0):(r.disable(r.BLEND),this.material.transparent=!1),this.renderQuad(e),this.trigger("afterrender",this,e),t&&this.unbind(e,t)},renderQuad:function(e){go.material=this.material,e.renderPass([go],Kc)},dispose:function(e){}}),Xe=Qc,Jc=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,ef=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`,qt={},xn=["px","nx","py","ny","pz","nz"];qt.prefilterEnvironmentMap=function(e,t,r,i,n){(!n||!i)&&(i=qt.generateNormalDistribution(),n=qt.integrateBRDF(e,i)),r=r||{};var a=r.width||64,o=r.height||64,s=r.type||t.type,l=new Ur({width:a,height:o,type:s,flipY:!1,mipmaps:[]});l.isPowerOfTwo()||console.warn("Width and height must be power of two to enable mipmap.");var u=Math.min(a,o),h=Math.log(u)/Math.log(2)+1,c=new Mt({shader:new P({vertex:P.source("clay.skybox.vertex"),fragment:ef})});c.set("normalDistribution",i),r.encodeRGBM&&c.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&c.define("fragment","RGBM_DECODE");var d=new Bt,f;if(t.textureType==="texture2D"){var v=new Ur({width:a,height:o,type:s===j.FLOAT?j.HALF_FLOAT:s});jt.panoramaToCubeMap(e,t,v,{encodeRGBM:r.decodeRGBM}),t=v}f=new Hr({scene:d,material:c}),f.material.set("environmentMap",t);var p=new aa({texture:l});r.encodeRGBM&&(s=l.type=j.UNSIGNED_BYTE);for(var _=new ae({width:a,height:o,type:s}),m=new He({depthBuffer:!1}),y=we[s===j.UNSIGNED_BYTE?"Uint8Array":"Float32Array"],g=0;g<h;g++){l.mipmaps[g]={pixels:{}},f.material.set("roughness",g/(h-1));for(var x=_.width,E=2*Math.atan(x/(x-.5))/Math.PI*180,S=0;S<xn.length;S++){var w=new y(_.width*_.height*4);m.attach(_),m.bind(e);var b=p.getCamera(xn[S]);b.fov=E,e.render(d,b),e.gl.readPixels(0,0,_.width,_.height,j.RGBA,s,w),m.unbind(e),l.mipmaps[g].pixels[xn[S]]=w}_.width/=2,_.height/=2,_.dirty()}return m.dispose(e),_.dispose(e),f.dispose(e),i.dispose(e),{environmentMap:l,brdfLookup:n,normalDistribution:i,maxMipmapLevel:h}};qt.integrateBRDF=function(e,t){t=t||qt.generateNormalDistribution();var r=new He({depthBuffer:!1}),i=new Xe({fragment:Jc}),n=new ae({width:512,height:256,type:j.HALF_FLOAT,wrapS:j.CLAMP_TO_EDGE,wrapT:j.CLAMP_TO_EDGE,minFilter:j.NEAREST,magFilter:j.NEAREST,useMipmap:!1});return i.setUniform("normalDistribution",t),i.setUniform("viewportSize",[512,256]),i.attachOutput(n),i.render(e,r),r.dispose(e),n};qt.generateNormalDistribution=function(r,i){for(var r=r||256,i=i||1024,n=new ae({width:r,height:i,type:j.FLOAT,minFilter:j.NEAREST,magFilter:j.NEAREST,wrapS:j.CLAMP_TO_EDGE,wrapT:j.CLAMP_TO_EDGE,useMipmap:!1}),a=new Float32Array(i*r*4),o=[],s=0;s<r;s++){for(var l=s/r,u=l*l,h=0;h<i;h++){var c=(h<<16|h>>>16)>>>0;c=((c&1431655765)<<1|(c&2863311530)>>>1)>>>0,c=((c&858993459)<<2|(c&3435973836)>>>2)>>>0,c=((c&252645135)<<4|(c&4042322160)>>>4)>>>0,c=(((c&16711935)<<8|(c&4278255360)>>>8)>>>0)/4294967296;var d=Math.sqrt((1-c)/(1+(u*u-1)*c));o[h]=d}for(var h=0;h<i;h++){var f=(h*r+s)*4,d=o[h],v=Math.sqrt(1-d*d),p=h/i,_=2*Math.PI*p;a[f]=v*Math.cos(_),a[f+1]=d,a[f+2]=v*Math.sin(_),a[f+3]=1}}return n.pixels=a,n};var Si=qt,tf=vt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:"AMBIENT_CUBEMAP_LIGHT",prefilter:function(e,t){if(!e.getGLExtension("EXT_shader_texture_lod")){console.warn("Device not support textureCubeLodEXT");return}this._brdfLookup||(this._normalDistribution=Si.generateNormalDistribution(),this._brdfLookup=Si.integrateBRDF(e,this._normalDistribution));var r=this.cubemap;if(!r.__prefiltered){var i=Si.prefilterEnvironmentMap(e,r,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=i.environmentMap,this.cubemap.__prefiltered=!0,r.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientCubemapLightCubemap:{type:"t",value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:"t",value:function(e){return e._brdfLookup}}}}),rf=tf,nf=vt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new we.Float32Array(9*3)},{type:"AMBIENT_SH_LIGHT",uniformTemplates:{ambientSHLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}},ambientSHLightCoefficients:{type:"3f",value:function(e){for(var t=e._coefficientsTmpArr,r=0;r<e.coefficients.length;r++)t[r]=e.coefficients[r];return t}}}}),af=nf,Ts={},$t=["px","nx","py","ny","pz","nz"];function of(e,t){var r=e[0],i=e[1],n=e[2];return t===0?1:t===1?r:t===2?i:t===3?n:t===4?r*n:t===5?i*n:t===6?r*i:t===7?3*n*n-1:r*r-i*i}var sf={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function lf(e,t,r,i){for(var n=new we.Float32Array(27),a=T.create(),o=T.create(),s=T.create(),l=0;l<9;l++){for(var u=T.create(),h=0;h<$t.length;h++){for(var c=t[$t[h]],d=T.create(),f=0,v=0,p=sf[$t[h]],_=0;_<i;_++)for(var m=0;m<r;m++){a[0]=m/(r-1)*2-1,a[1]=_/(i-1)*2-1,a[2]=-1,T.normalize(a,a),s[0]=a[p[0]]*p[3],s[1]=a[p[1]]*p[4],s[2]=a[p[2]]*p[5],o[0]=c[v++]/255,o[1]=c[v++]/255,o[2]=c[v++]/255;var y=c[v++]/255*8.12;o[0]*=y,o[1]*=y,o[2]*=y,T.scaleAndAdd(d,d,o,of(s,l)*-a[2]),f+=-a[2]}T.scaleAndAdd(u,u,d,1/f)}n[l*3]=u[0]/6,n[l*3+1]=u[1]/6,n[l*3+2]=u[2]/6}return n}Ts.projectEnvironmentMap=function(e,t,r){r=r||{},r.lod=r.lod||0;var i,n=new Bt,a=64;t.textureType==="texture2D"?i=new Hr({scene:n,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,i=new Hr({scene:n,environmentMap:t}));var o=Math.ceil(a/Math.pow(2,r.lod)),s=Math.ceil(a/Math.pow(2,r.lod)),l=new ae({width:o,height:s}),u=new He;i.material.define("fragment","RGBM_ENCODE"),r.decodeRGBM&&i.material.define("fragment","RGBM_DECODE"),i.material.set("lod",r.lod);for(var h=new aa({texture:l}),c={},d=0;d<$t.length;d++){c[$t[d]]=new Uint8Array(o*s*4);var f=h.getCamera($t[d]);f.fov=90,u.attach(l),u.bind(e),e.render(n,f),e.gl.readPixels(0,0,o,s,j.RGBA,j.UNSIGNED_BYTE,c[$t[d]]),u.unbind(e)}return i.dispose(e),u.dispose(e),l.dispose(e),lf(e,c,o,s)};var uf=Ts,hf={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return $e(t.dataIndex)?Ir(t.dataIndex,function(r){return e.indexOfRawIndex(r)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return $e(t.name)?Ir(t.name,function(r){return e.indexOfName(r)}):e.indexOfName(t.name)}},ot=hf,cf=be.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,r=this.attributes.position,i=this.attributes.texcoord0,n=this.attributes.normal,a=(t+1)*(e+1);r.init(a),i.init(a),n.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),l,u,h,c,d,f,v,g=this.radius,p=this.phiStart,_=this.phiLength,m=this.thetaStart,y=this.thetaLength,g=this.radius,x=[],E=[],S=0,w=1/g;for(v=0;v<=e;v++)for(f=0;f<=t;f++)c=f/t,d=v/e,l=-g*Math.cos(p+c*_)*Math.sin(m+d*y),u=g*Math.cos(m+d*y),h=g*Math.sin(p+c*_)*Math.sin(m+d*y),x[0]=l,x[1]=u,x[2]=h,E[0]=c,E[1]=d,r.set(S,x),i.set(S,E),x[0]*=w,x[1]*=w,x[2]*=w,n.set(S,x),S++;var b,C,O,M,B=t+1,F=0;for(v=0;v<e;v++)for(f=0;f<t;f++)C=v*B+f,b=v*B+f+1,M=(v+1)*B+f+1,O=(v+1)*B+f,s[F++]=b,s[F++]=C,s[F++]=M,s[F++]=C,s[F++]=O,s[F++]=M;this.boundingBox=new Ge,this.boundingBox.max.set(g,g,g),this.boundingBox.min.set(-g,-g,-g)}}),ff=cf,df=vt.extend({castShadow:!1},{type:"AMBIENT_LIGHT",uniformTemplates:{ambientLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}}}),vf=df,pf=vt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:"DIRECTIONAL_LIGHT",uniformTemplates:{directionalLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new D,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=vt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),_f=pf,mf=vt.extend({range:100,castShadow:!1},{type:"POINT_LIGHT",uniformTemplates:{pointLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:"1f",value:function(e){return e.range}},pointLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=vt.prototype.clone.call(this);return e.range=this.range,e}}),gf=mf,yf=vt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:"SPOT_LIGHT",uniformTemplates:{spotLightPosition:{type:"3f",value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:"1f",value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:"1f",value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:"1f",value:function(e){return e.falloffFactor}},spotLightDirection:{type:"3f",value:function(e){return e.__dir=e.__dir||new D,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:"3f",value:function(e){var t=e.color,r=e.intensity;return[t[0]*r,t[1]*r,t[2]*r]}}},clone:function(){var e=vt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),xf=yf,ie=function(e,t,r,i){e=e||0,t=t||0,r=r||0,i=i||0,this.array=N.fromValues(e,t,r,i),this._dirty=!0};ie.prototype={constructor:ie,add:function(e){return N.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,r,i){return this.array[0]=e,this.array[1]=t,this.array[2]=r,this.array[3]=i,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new ie(this.x,this.y,this.z,this.w)},copy:function(e){return N.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return N.dist(this.array,e.array)},distance:function(e){return N.distance(this.array,e.array)},div:function(e){return N.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return N.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return N.dot(this.array,e.array)},len:function(){return N.len(this.array)},length:function(){return N.length(this.array)},lerp:function(e,t,r){return N.lerp(this.array,e.array,t.array,r),this._dirty=!0,this},min:function(e){return N.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return N.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return N.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return N.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return N.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return N.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return N.random(this.array,e),this._dirty=!0,this},scale:function(e){return N.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return N.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return N.sqrDist(this.array,e.array)},squaredDistance:function(e){return N.squaredDistance(this.array,e.array)},sqrLen:function(){return N.sqrLen(this.array)},squaredLength:function(){return N.squaredLength(this.array)},sub:function(e){return N.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return N.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return N.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return N.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};var Mr=Object.defineProperty;if(Mr){var fi=ie.prototype;Mr(fi,"x",{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Mr(fi,"y",{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Mr(fi,"z",{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Mr(fi,"w",{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}ie.add=function(e,t,r){return N.add(e.array,t.array,r.array),e._dirty=!0,e};ie.set=function(e,t,r,i,n){N.set(e.array,t,r,i,n),e._dirty=!0};ie.copy=function(e,t){return N.copy(e.array,t.array),e._dirty=!0,e};ie.dist=function(e,t){return N.distance(e.array,t.array)};ie.distance=ie.dist;ie.div=function(e,t,r){return N.divide(e.array,t.array,r.array),e._dirty=!0,e};ie.divide=ie.div;ie.dot=function(e,t){return N.dot(e.array,t.array)};ie.len=function(e){return N.length(e.array)};ie.lerp=function(e,t,r,i){return N.lerp(e.array,t.array,r.array,i),e._dirty=!0,e};ie.min=function(e,t,r){return N.min(e.array,t.array,r.array),e._dirty=!0,e};ie.max=function(e,t,r){return N.max(e.array,t.array,r.array),e._dirty=!0,e};ie.mul=function(e,t,r){return N.multiply(e.array,t.array,r.array),e._dirty=!0,e};ie.multiply=ie.mul;ie.negate=function(e,t){return N.negate(e.array,t.array),e._dirty=!0,e};ie.normalize=function(e,t){return N.normalize(e.array,t.array),e._dirty=!0,e};ie.random=function(e,t){return N.random(e.array,t),e._dirty=!0,e};ie.scale=function(e,t,r){return N.scale(e.array,t.array,r),e._dirty=!0,e};ie.scaleAndAdd=function(e,t,r,i){return N.scaleAndAdd(e.array,t.array,r.array,i),e._dirty=!0,e};ie.sqrDist=function(e,t){return N.sqrDist(e.array,t.array)};ie.squaredDistance=ie.sqrDist;ie.sqrLen=function(e){return N.sqrLen(e.array)};ie.squaredLength=ie.sqrLen;ie.sub=function(e,t,r){return N.subtract(e.array,t.array,r.array),e._dirty=!0,e};ie.subtract=ie.sub;ie.transformMat4=function(e,t,r){return N.transformMat4(e.array,t.array,r.array),e._dirty=!0,e};ie.transformQuat=function(e,t,r){return N.transformQuat(e.array,t.array,r.array),e._dirty=!0,e};var Tf=ie,ze={};ze.create=function(){var e=new Oe(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};ze.clone=function(e){var t=new Oe(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t};ze.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e};ze.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e};ze.transpose=function(e,t){if(e===t){var r=t[1];e[1]=t[2],e[2]=r}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e};ze.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=r*a-n*i;return o?(o=1/o,e[0]=a*o,e[1]=-i*o,e[2]=-n*o,e[3]=r*o,e):null};ze.adjoint=function(e,t){var r=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=r,e};ze.determinant=function(e){return e[0]*e[3]-e[2]*e[1]};ze.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1],u=r[2],h=r[3];return e[0]=i*s+a*l,e[1]=n*s+o*l,e[2]=i*u+a*h,e[3]=n*u+o*h,e};ze.mul=ze.multiply;ze.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=Math.sin(r),l=Math.cos(r);return e[0]=i*l+a*s,e[1]=n*l+o*s,e[2]=i*-s+a*l,e[3]=n*-s+o*l,e};ze.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=r[0],l=r[1];return e[0]=i*s,e[1]=n*s,e[2]=a*l,e[3]=o*l,e};ze.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2))};ze.LDU=function(e,t,r,i){return e[2]=i[2]/i[0],r[0]=i[0],r[1]=i[1],r[3]=i[3]-e[2]*r[1],[e,t,r]};var Te=ze,Ye=function(){this.array=Te.create(),this._dirty=!0};Ye.prototype={constructor:Ye,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ye().copy(this)},copy:function(e){return Te.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return Te.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return Te.determinant(this.array)},identity:function(){return Te.identity(this.array),this._dirty=!0,this},invert:function(){return Te.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Te.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Te.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Te.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Te.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Te.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Te.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return Te.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ye.adjoint=function(e,t){return Te.adjoint(e.array,t.array),e._dirty=!0,e};Ye.copy=function(e,t){return Te.copy(e.array,t.array),e._dirty=!0,e};Ye.determinant=function(e){return Te.determinant(e.array)};Ye.identity=function(e){return Te.identity(e.array),e._dirty=!0,e};Ye.invert=function(e,t){return Te.invert(e.array,t.array),e._dirty=!0,e};Ye.mul=function(e,t,r){return Te.mul(e.array,t.array,r.array),e._dirty=!0,e};Ye.multiply=Ye.mul;Ye.rotate=function(e,t,r){return Te.rotate(e.array,t.array,r),e._dirty=!0,e};Ye.scale=function(e,t,r){return Te.scale(e.array,t.array,r.array),e._dirty=!0,e};Ye.transpose=function(e,t){return Te.transpose(e.array,t.array),e._dirty=!0,e};var Ef=Ye,Ke={};Ke.create=function(){var e=new Oe(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};Ke.clone=function(e){var t=new Oe(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t};Ke.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e};Ke.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e};Ke.invert=function(e,t){var r=t[0],i=t[1],n=t[2],a=t[3],o=t[4],s=t[5],l=r*a-i*n;return l?(l=1/l,e[0]=a*l,e[1]=-i*l,e[2]=-n*l,e[3]=r*l,e[4]=(n*s-a*o)*l,e[5]=(i*o-r*s)*l,e):null};Ke.determinant=function(e){return e[0]*e[3]-e[1]*e[2]};Ke.multiply=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1],c=r[2],d=r[3],f=r[4],v=r[5];return e[0]=i*u+a*h,e[1]=n*u+o*h,e[2]=i*c+a*d,e[3]=n*c+o*d,e[4]=i*f+a*v+s,e[5]=n*f+o*v+l,e};Ke.mul=Ke.multiply;Ke.rotate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=Math.sin(r),h=Math.cos(r);return e[0]=i*h+a*u,e[1]=n*h+o*u,e[2]=i*-u+a*h,e[3]=n*-u+o*h,e[4]=s,e[5]=l,e};Ke.scale=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i*u,e[1]=n*u,e[2]=a*h,e[3]=o*h,e[4]=s,e[5]=l,e};Ke.translate=function(e,t,r){var i=t[0],n=t[1],a=t[2],o=t[3],s=t[4],l=t[5],u=r[0],h=r[1];return e[0]=i,e[1]=n,e[2]=a,e[3]=o,e[4]=i*u+a*h+s,e[5]=n*u+o*h+l,e};Ke.frob=function(e){return Math.sqrt(Math.pow(e[0],2)+Math.pow(e[1],2)+Math.pow(e[2],2)+Math.pow(e[3],2)+Math.pow(e[4],2)+Math.pow(e[5],2)+1)};var Ae=Ke,Ze=function(){this.array=Ae.create(),this._dirty=!0};Ze.prototype={constructor:Ze,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new Ze().copy(this)},copy:function(e){return Ae.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return Ae.determinant(this.array)},identity:function(){return Ae.identity(this.array),this._dirty=!0,this},invert:function(){return Ae.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return Ae.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return Ae.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return Ae.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return Ae.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return Ae.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return Ae.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return Ae.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Ze.copy=function(e,t){return Ae.copy(e.array,t.array),e._dirty=!0,e};Ze.determinant=function(e){return Ae.determinant(e.array)};Ze.identity=function(e){return Ae.identity(e.array),e._dirty=!0,e};Ze.invert=function(e,t){return Ae.invert(e.array,t.array),e._dirty=!0,e};Ze.mul=function(e,t,r){return Ae.mul(e.array,t.array,r.array),e._dirty=!0,e};Ze.multiply=Ze.mul;Ze.rotate=function(e,t,r){return Ae.rotate(e.array,t.array,r),e._dirty=!0,e};Ze.scale=function(e,t,r){return Ae.scale(e.array,t.array,r.array),e._dirty=!0,e};Ze.translate=function(e,t,r){return Ae.translate(e.array,t.array,r.array),e._dirty=!0,e};var Sf=Ze,Me=function(){this.array=ee.create(),this._dirty=!0};Me.prototype={constructor:Me,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return ee.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new Me().copy(this)},copy:function(e){return ee.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return ee.determinant(this.array)},fromMat2d:function(e){return ee.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return ee.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return ee.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return ee.identity(this.array),this._dirty=!0,this},invert:function(){return ee.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return ee.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return ee.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return ee.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return ee.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return ee.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return ee.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return ee.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return ee.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return ee.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return"["+Array.prototype.join.call(this.array,",")+"]"},toArray:function(){return Array.prototype.slice.call(this.array)}};Me.adjoint=function(e,t){return ee.adjoint(e.array,t.array),e._dirty=!0,e};Me.copy=function(e,t){return ee.copy(e.array,t.array),e._dirty=!0,e};Me.determinant=function(e){return ee.determinant(e.array)};Me.identity=function(e){return ee.identity(e.array),e._dirty=!0,e};Me.invert=function(e,t){return ee.invert(e.array,t.array),e};Me.mul=function(e,t,r){return ee.mul(e.array,t.array,r.array),e._dirty=!0,e};Me.multiply=Me.mul;Me.fromMat2d=function(e,t){return ee.fromMat2d(e.array,t.array),e._dirty=!0,e};Me.fromMat4=function(e,t){return ee.fromMat4(e.array,t.array),e._dirty=!0,e};Me.fromQuat=function(e,t){return ee.fromQuat(e.array,t.array),e._dirty=!0,e};Me.normalFromMat4=function(e,t){return ee.normalFromMat4(e.array,t.array),e._dirty=!0,e};Me.rotate=function(e,t,r){return ee.rotate(e.array,t.array,r),e._dirty=!0,e};Me.scale=function(e,t,r){return ee.scale(e.array,t.array,r.array),e._dirty=!0,e};Me.transpose=function(e,t){return ee.transpose(e.array,t.array),e._dirty=!0,e};Me.translate=function(e,t,r){return ee.translate(e.array,t.array,r.array),e._dirty=!0,e};var bf=Me,Af={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var r=this,i;if(e){for(var n=e.split("."),a=r,o=0,s=n.length;o<s;o++)!a||(a=a[n[o]]);a&&(i=a)}else i=r;if(i==null)throw new Error("Target "+e+" not exists");var l=this._animators,u=new kl(i,t),h=this;return u.during(function(){h.__zr&&h.__zr.refresh()}).done(function(){var c=l.indexOf(u);c>=0&&l.splice(c,1)}),l.push(u),this.__zr&&this.__zr.animation.addAnimator(u),u},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,r=t.length,i=0;i<r;i++)t[i].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}},wf=Af,Mf=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`,Cf=`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`,Lf=`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`,Rf=`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Pf=`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Df=`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`,Nf=`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`;Object.assign(Tt.prototype,wf);P.import(Mf);P.import(cs);P.import(Cf);P.import(Lf);P.import(Rf);P.import(Pf);P.import(Df);P.import(Nf);function If(e){return!e||e==="none"}function Es(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function Of(e){return e.getZr&&e.setOption}var Bf=Bt.prototype.addToScene,Ff=Bt.prototype.removeFromScene;Bt.prototype.addToScene=function(e){if(Bf.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(r){r.__zr=t,r.addAnimatorsToZr&&r.addAnimatorsToZr(t)})}};Bt.prototype.removeFromScene=function(e){Ff.call(this,e),e.traverse(function(t){var r=t.__zr;t.__zr=null,r&&t.removeAnimatorsFromZr&&t.removeAnimatorsFromZr(r)})};Mt.prototype.setTextureImage=function(e,t,r,i){if(!!this.shader){var n=r.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),If(t)||(o=Y.loadTexture(t,r,i,function(s){a.enableTexture(e),n&&n.refresh()}),a.set(e,o)),o}};var Y={};Y.Renderer=Nr;Y.Node=Tt;Y.Mesh=ta;Y.Shader=P;Y.Material=Mt;Y.Texture=j;Y.Texture2D=ae;Y.Geometry=be;Y.SphereGeometry=ff;Y.PlaneGeometry=oa;Y.CubeGeometry=xs;Y.AmbientLight=vf;Y.DirectionalLight=_f;Y.PointLight=gf;Y.SpotLight=xf;Y.PerspectiveCamera=Pe;Y.OrthographicCamera=zr;Y.Vector2=tt;Y.Vector3=D;Y.Vector4=Tf;Y.Quaternion=fs;Y.Matrix2=Ef;Y.Matrix2d=Sf;Y.Matrix3=bf;Y.Matrix4=V;Y.Plane=ms;Y.Ray=Ci;Y.BoundingBox=Ge;Y.Frustum=ia;var di=null;function Uf(){return di!==null||(di=jt.createBlank("rgba(255,255,255,0)").image),di}function yo(e){return Math.pow(2,Math.round(Math.log(e)/Math.LN2))}function xo(e){if((e.wrapS===j.REPEAT||e.wrapT===j.REPEAT)&&e.image){var t=yo(e.width),r=yo(e.height);if(t!==e.width||r!==e.height){var i=document.createElement("canvas");i.width=t,i.height=r;var n=i.getContext("2d");n.drawImage(e.image,0,0,t,r),e.image=i}}}Y.loadTexture=function(e,t,r,i){typeof r=="function"&&(i=r,r={}),r=r||{};for(var n=Object.keys(r).sort(),a="",o=0;o<n.length;o++)a+=n[o]+"_"+r[n[o]]+"_";var s=t.__textureCache=t.__textureCache||new Gl(20);if(Of(e)){var l=e.__textureid__,u=s.get(a+l);if(u)u.texture.surface.setECharts(e),i&&i(u.texture);else{var h=new $c(e);h.onupdate=function(){t.getZr().refresh()},u={texture:h.getTexture()};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_ec__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),i&&i(u.texture)}return u.texture}else if(Es(e)){var l=e.__textureid__,u=s.get(a+l);if(!u){u={texture:new Y.Texture2D({image:e})};for(var o=0;o<n.length;o++)u.texture[n[o]]=r[n[o]];l=e.__textureid__||"__ecgl_image__"+u.texture.__uid__,e.__textureid__=l,s.put(a+l,u),xo(u.texture),i&&i(u.texture)}return u.texture}else{var u=s.get(a+e);if(u)u.callbacks?u.callbacks.push(i):i&&i(u.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){u={callbacks:[i]};var c=jt.loadTexture(e,{exposure:r.exposure,fileType:"hdr"},function(){c.dirty(),u.callbacks.forEach(function(v){v&&v(c)}),u.callbacks=null});u.texture=c,s.put(a+e,u)}else{for(var c=new Y.Texture2D({image:new Image}),o=0;o<n.length;o++)c[n[o]]=r[n[o]];u={texture:c,callbacks:[i]};var d=c.image;d.onload=function(){c.image=d,xo(c),c.dirty(),u.callbacks.forEach(function(p){p&&p(c)}),u.callbacks=null},d.crossOrigin="Anonymous",d.src=e,c.image=Uf(),s.put(a+e,u)}return u.texture}};Y.createAmbientCubemap=function(e,t,r,i){e=e||{};var n=e.texture,a=ot.firstNotNull(e.exposure,1),o=new rf({intensity:ot.firstNotNull(e.specularIntensity,1)}),s=new af({intensity:ot.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=Y.loadTexture(n,r,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=uf.projectEnvironmentMap(t,o.cubemap,{lod:1}),i&&i()}),{specular:o,diffuse:s}};Y.createBlankTexture=jt.createBlank;Y.isImage=Es;Y.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)};Y.parseColor=function(e,t){return e instanceof Array?(t||(t=[]),t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=qn(e||"#000",t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)};Y.directionFromAlphaBeta=function(e,t){var r=e/180*Math.PI+Math.PI/2,i=-t/180*Math.PI+Math.PI/2,n=[],a=Math.sin(r);return n[0]=a*Math.cos(i),n[1]=-Math.cos(r),n[2]=a*Math.sin(i),n};Y.getShadowResolution=function(e){var t=1024;switch(e){case"low":t=512;break;case"medium":break;case"high":t=2048;break;case"ultra":t=4096;break}return t};Y.COMMON_SHADERS=["lambert","color","realistic","hatching","shadow"];Y.createShader=function(e){e==="ecgl.shadow"&&(e="ecgl.displayShadow");var t=P.source(e+".vertex"),r=P.source(e+".fragment");t||console.error("Vertex shader of '%s' not exits",e),r||console.error("Fragment shader of '%s' not exits",e);var i=new P(t,r);return i.name=e,i};Y.createMaterial=function(e,t){t instanceof Array||(t=[t]);var r=Y.createShader(e),i=new Mt({shader:r});return t.forEach(function(n){typeof n=="string"&&i.define(n)}),i};Y.setMaterialFromModel=function(e,t,r,i){t.autoUpdateTextureStatus=!1;var n=r.getModel(e+"Material"),a=n.get("detailTexture"),o=ot.firstNotNull(n.get("textureTiling"),1),s=ot.firstNotNull(n.get("textureOffset"),0);typeof o=="number"&&(o=[o,o]),typeof s=="number"&&(s=[s,s]);var l=o[0]>1||o[1]>1?Y.Texture.REPEAT:Y.Texture.CLAMP_TO_EDGE,u={anisotropic:8,wrapS:l,wrapT:l};if(e==="realistic"){var h=n.get("roughness"),c=n.get("metalness");c!=null?isNaN(c)&&(t.setTextureImage("metalnessMap",c,i,u),c=ot.firstNotNull(n.get("metalnessAdjust"),.5)):c=0,h!=null?isNaN(h)&&(t.setTextureImage("roughnessMap",h,i,u),h=ot.firstNotNull(n.get("roughnessAdjust"),.5)):h=.5;var d=n.get("normalTexture");t.setTextureImage("detailMap",a,i,u),t.setTextureImage("normalMap",d,i,u),t.set({roughness:h,metalness:c,detailUvRepeat:o,detailUvOffset:s})}else if(e==="lambert")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="color")t.setTextureImage("detailMap",a,i,u),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e==="hatching"){var f=n.get("hatchingTextures")||[];f.length<6;for(var v=0;v<6;v++)t.setTextureImage("hatch"+(v+1),f[v],i,{anisotropic:8,wrapS:Y.Texture.REPEAT,wrapT:Y.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}};Y.updateVertexAnimation=function(e,t,r,i){var n=i.get("animation"),a=i.get("animationDurationUpdate"),o=i.get("animationEasingUpdate"),s=r.shadowDepthMaterial;if(n&&t&&a>0&&t.geometry.vertexCount===r.geometry.vertexCount){r.material.define("vertex","VERTEX_ANIMATION"),r.ignorePreZ=!0,s&&s.define("vertex","VERTEX_ANIMATION");for(var l=0;l<e.length;l++)r.geometry.attributes[e[l][0]].value=t.geometry.attributes[e[l][1]].value;r.geometry.dirty(),r.__percent=0,r.material.set("percent",0),r.stopAnimation(),r.animate().when(a,{__percent:1}).during(function(){r.material.set("percent",r.__percent),s&&s.set("percent",r.__percent)}).done(function(){r.ignorePreZ=!1,r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")}).start(o)}else r.material.undefine("vertex","VERTEX_ANIMATION"),s&&s.undefine("vertex","VERTEX_ANIMATION")};var G=Y,he=function(e,t){this.id=e,this.zr=t;try{this.renderer=new Nr({clearBit:0,devicePixelRatio:t.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(t.painter.getWidth(),t.painter.getHeight())}catch(i){this.renderer=null,this.dom=document.createElement("div"),this.dom.style.cssText="position:absolute; left: 0; top: 0; right: 0; bottom: 0;",this.dom.className="ecgl-nowebgl",this.dom.innerHTML="Sorry, your browser does not support WebGL",console.error(i);return}this.onglobalout=this.onglobalout.bind(this),t.on("globalout",this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position="absolute",r.left="0",r.top="0",this.views=[],this._picking=new rc({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new Fi({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};he.prototype.setUnpainted=function(){};he.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var r=this.zr;e.scene.traverse(function(i){i.__zr=r,i.addAnimatorsToZr&&i.addAnimatorsToZr(r)})}};function Ss(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}he.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(Ss,this),e.layer=null,this._viewsToDispose.push(e))}};he.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(Ss,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0};he.prototype.resize=function(e,t){var r=this.renderer;r.resize(e,t)};he.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)};he.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)};he.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)};he.prototype.needsRefresh=function(){this.zr.refresh()};he.prototype.refresh=function(e){this._backgroundColor=e?G.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()};he.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)};he.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()};he.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Hf=1;he.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var r=!1,i=0;i<this.views.length;i++)r=this.views[i].needsAccumulate()||r;if(!r)return;function n(a){if(!(!t._accumulatingId||a!==t._accumulatingId)){for(var o=!0,s=0;s<t.views.length;s++)o=t.views[s].isAccumulateFinished()&&r;o||(t._doRender(!0),e?n(a):Vo(function(){n(a)}))}}this._accumulatingId=Hf++,e?n(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){n(t._accumulatingId)},50)};he.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Ri(this._textureList),Ri(this._geometriesList));for(var r=0;r<this.views.length;r++)zf(this.views[r].scene,e,t);this._textureList&&(Pi(this.renderer,this._textureList),Pi(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Ri(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Pi(e,t){for(var r=0;r<t.length;r++)t[r].__used__||t[r].dispose(e)}function vi(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function zf(e,t,r){var i,n;e.traverse(function(o){if(o.isRenderable()){var s=o.geometry,l=o.material;if(l!==i)for(var u=l.getTextureUniforms(),h=0;h<u.length;h++){var c=u[h],d=l.uniforms[c].value;if(!!d){if(d instanceof j)vi(d,t);else if(d instanceof Array)for(var f=0;f<d.length;f++)d[f]instanceof j&&vi(d[f],t)}}s!==n&&vi(s,r),i=l,n=s}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&vi(e.lights[a].cubemap,t)}he.prototype.dispose=function(){this._disposed||(this._stopAccumulating(),this._textureList&&(Ri(this._textureList),Ri(this._geometriesList),Pi(this.renderer,this._textureList),Pi(this.renderer,this._geometriesList)),this.zr.off("globalout",this.onglobalout),this._disposed=!0)};he.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mousedown",e,t),this._dispatchDataEvent("mousedown",e,t)),this._downX=e.offsetX,this._downY=e.offsetY}};he.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),r=t&&t.target,i=this._hovered;this._hovered=t,i&&r!==i.target&&(i.relatedTarget=r,this._dispatchEvent("mouseout",e,i),this.zr.setCursorStyle("default")),this._dispatchEvent("mousemove",e,t),t&&(this.zr.setCursorStyle("pointer"),(!i||r!==i.target)&&this._dispatchEvent("mouseover",e,t)),this._dispatchDataEvent("mousemove",e,t)}};he.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent("mouseup",e,t),this._dispatchDataEvent("mouseup",e,t)),this._upX=e.offsetX,this._upY=e.offsetY}};he.prototype.onclick=he.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,r=this._upY-this._downY;if(!(Math.sqrt(t*t+r*r)>20)){e=e.event;var i=this.pickObject(e.offsetX,e.offsetY);i&&(this._dispatchEvent(e.type,e,i),this._dispatchDataEvent(e.type,e,i));var n=this._clickToSetFocusPoint(e);if(n){var a=n.view.setDOFFocusOnPoint(n.distance);a&&this.zr.refresh()}}}};he.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,r=t.viewport,i=this.views.length-1;i>=0;i--){var n=this.views[i];if(n.hasDOF()&&n.containPoint(e.offsetX,e.offsetY)){this._picking.scene=n.scene,this._picking.camera=n.camera,t.viewport=n.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=n,a}}t.viewport=r};he.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent("mouseout",e,{target:t.target})};he.prototype.pickObject=function(e,t){for(var r=[],i=this.renderer,n=i.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,i.viewport=o.viewport,this._picking.pickAll(e,t,r))}return i.viewport=n,r.sort(function(s,l){return s.distance-l.distance}),r[0]};he.prototype._dispatchEvent=function(e,t,r){r||(r={});var i=r.target;for(r.cancelBubble=!1,r.event=t,r.type=e,r.offsetX=t.offsetX,r.offsetY=t.offsetY;i&&(i.trigger(e,r),i=i.getParent(),!r.cancelBubble););this._dispatchToView(e,r)};he.prototype._dispatchDataEvent=function(e,t,r){var i=r&&r.target,n=i&&i.dataIndex,a=i&&i.seriesIndex,o=i&&i.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};const h=dr(l);e==="mousemove"&&(n!=null?n!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(h.dataIndex=this._lastDataIndex,h.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0):o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(h.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,"mouseout",t)),s=!0),this._lastEventData=o,this._lastDataIndex=n,this._lastSeriesIndex=a),h.eventData=o,h.dataIndex=n,h.seriesIndex=a,(o!=null||parseInt(n,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,"mouseover",t))};he.prototype._dispatchToView=function(e,t){for(var r=0;r<this.views.length;r++)this.views[r].containPoint(t.offsetX,t.offsetY)&&this.views[r].trigger(e,t)};Object.assign(he.prototype,Qn);var bs=he,Vf=["bar3D","line3D","map3D","scatter3D","surface","lines3D","scatterGL","scatter3D"];function Dr(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var r=e[t].normal,i=e[t].emphasis;r&&(e[t]=r),i&&(e.emphasis=e.emphasis||{},e.emphasis[t]=i)}}function kf(e){Dr(e,"itemStyle"),Dr(e,"lineStyle"),Dr(e,"areaStyle"),Dr(e,"label")}function pi(e){!e||(e instanceof Array||(e=[e]),te(e,function(t){if(t.axisLabel){var r=t.axisLabel;Object.assign(r,r.textStyle),r.textStyle=null}}))}function Gf(e){te(e.series,function(t){bi(Vf,t.type)>=0&&(kf(t),t.coordinateSystem==="mapbox"&&(t.coordinateSystem="mapbox3D",e.mapbox3D=e.mapbox))}),pi(e.xAxis3D),pi(e.yAxis3D),pi(e.zAxis3D),pi(e.grid3D),Dr(e.geo3D)}function As(e){this._layers={},this._zr=e}As.prototype.update=function(e,t){var r=this,i=t.getZr();if(!i.getWidth()||!i.getHeight()){console.warn("Dom has no width or height");return}function n(s){i.setSleepAfterStill(0);var l;s.coordinateSystem&&s.coordinateSystem.model,l=s.get("zlevel");var u=r._layers,h=u[l];if(!h){if(h=u[l]=new bs("gl-"+l,i),i.painter.isSingleCanvas()){h.virtual=!0;var c=new jo({z:1e4,style:{image:h.renderer.canvas},silent:!0});h.__hostImage=c,i.add(c)}i.painter.insertLayer(l,h)}return h.__hostImage&&h.__hostImage.setStyle({width:h.renderer.getWidth(),height:h.renderer.getHeight()}),h}function a(s,l){s&&s.traverse(function(u){u.isRenderable&&u.isRenderable()&&(u.ignorePicking=u.$ignorePicking!=null?u.$ignorePicking:l)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(s,l){if(s!=="series"){var u=t.getViewOfComponentModel(l),h=l.coordinateSystem;if(u.__ecgl__){var c;if(h){if(!h.viewGL){console.error("Can't find viewGL in coordinateSystem of component "+l.id);return}c=h.viewGL}else{if(!l.viewGL){console.error("Can't find viewGL of component "+l.id);return}c=h.viewGL}var c=h.viewGL,d=n(l);d.addView(c),u.afterRender&&u.afterRender(l,e,t,d),a(u.groupGL,l.get("silent"))}}}),e.eachSeries(function(s){var l=t.getViewOfSeriesModel(s),u=s.coordinateSystem;if(l.__ecgl__){if(u&&!u.viewGL&&!l.viewGL){console.error("Can't find viewGL of series "+l.id);return}var h=u&&u.viewGL||l.viewGL,c=n(s);c.addView(h),l.afterRender&&l.afterRender(s,e,t,c),a(l.groupGL,s.get("silent"))}})};Wl(function(e){var t=e.getZr(),r=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer=="function"&&this.eachOtherLayer(function(i){i instanceof bs&&i.dispose()}),r.call(this)},t.painter.getRenderedCanvas=function(i){if(i=i||{},this._singleCanvas)return this._layers[0].dom;var n=document.createElement("canvas"),a=i.pixelRatio||this.dpr;n.width=this.getWidth()*a,n.height=this.getHeight()*a;var o=n.getContext("2d");o.dpr=a,o.clearRect(0,0,n.width,n.height),i.backgroundColor&&(o.fillStyle=i.backgroundColor,o.fillRect(0,0,n.width,n.height));var s=this.storage.getDisplayList(!0),l={},u,h=this;function c(p,_){var m=h._zlevelList;p==null&&(p=-1/0);for(var y,g=0;g<m.length;g++){var x=m[g],E=h._layers[x];if(!E.__builtin__&&x>p&&x<_){y=E;break}}y&&y.renderToCanvas&&(o.save(),y.renderToCanvas(o),o.restore())}for(var d={ctx:o},f=0;f<s.length;f++){var v=s[f];v.zlevel!==u&&(c(u,v.zlevel),u=v.zlevel),this._doPaintEl(v,d,!0,null,l)}return c(u,1/0),n}});Xl(function(e,t){var r=t.getZr(),i=r.__egl=r.__egl||new As(r);i.update(e,t)});Yl(Gf);var Wf={defaultOption:{viewControl:{projection:"perspective",autoRotate:!1,autoRotateDirection:"cw",autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e=e||{},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},Xf={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:"medium"},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:"medium",intensity:1},screenSpaceReflection:{enable:!1,quality:"medium",maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:""},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:"auto"}}},Yf={defaultOption:{light:{main:{shadow:!1,shadowQuality:"high",color:"#fff",intensity:1,alpha:0,beta:0},ambient:{color:"#fff",intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}},Vi=Zn.extend({type:"grid3D",dependencies:["xAxis3D","yAxis3D","zAxis3D"],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:"100%",height:"100%",environment:"auto",boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:"rgba(0, 0, 0, 0.8)",width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:"#fff",backgroundColor:"rgba(0,0,0,0.5)",padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:"#333",width:2,type:"solid"}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:["#ccc"],width:1,type:"solid"}},splitArea:{show:!1,areaStyle:{color:["rgba(250,250,250,0.3)","rgba(200,200,200,0.3)"]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});We(Vi.prototype,Wf);We(Vi.prototype,Xf);We(Vi.prototype,Yf);var $f=Vi,Cr=ot.firstNotNull,To={left:0,middle:1,right:2};function Eo(e){return e instanceof Array||(e=[e,e]),e}var ws=Qe.extend(function(){return{zr:null,viewGL:null,_center:new D,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:"cw",autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:"middle",rotateMouseButton:"left",_mode:"rotate",_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new tt,_panVelocity:new tt,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){["_mouseDownHandler","_mouseWheelHandler","_mouseMoveHandler","_mouseUpHandler","_pinchHandler","_contextMenuHandler","_update"].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on("mousedown",this._mouseDownHandler),e.on("globalout",this._mouseUpHandler),e.on("mousewheel",this._mouseWheelHandler),e.on("pinch",this._pinchHandler),e.animation.on("frame",this._update),e.dom.addEventListener("contextmenu",this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off("mousedown",this._mouseDownHandler),e.off("mousemove",this._mouseMoveHandler),e.off("mouseup",this._mouseUpHandler),e.off("mousewheel",this._mouseWheelHandler),e.off("pinch",this._pinchHandler),e.off("globalout",this._mouseUpHandler),e.dom.removeEventListener("contextmenu",this._contextMenuHandler),e.animation.off("frame",this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t=t||{};var r=t.baseDistance||0,i=t.baseOrthoSize||1,n=e.get("projection");n!=="perspective"&&n!=="orthographic"&&n!=="isometric"&&(n="perspective"),this._projection=n,this.viewGL.setProjection(n);var a=e.get("distance")+r,o=e.get("orthographicSize")+i;[["damping",.8],["autoRotate",!1],["autoRotateAfterStill",3],["autoRotateDirection","cw"],["autoRotateSpeed",10],["minDistance",30],["maxDistance",400],["minOrthographicSize",30],["maxOrthographicSize",300],["minAlpha",-90],["maxAlpha",90],["minBeta",-1/0],["maxBeta",1/0],["rotateSensitivity",1],["zoomSensitivity",1],["panSensitivity",1],["panMouseButton","left"],["rotateMouseButton","middle"]].forEach(function(d){this[d[0]]=Cr(e.get(d[0]),d[1])},this),this.minDistance+=r,this.maxDistance+=r,this.minOrthographicSize+=i,this.maxOrthographicSize+=i;var s=e.ecModel,l={};["animation","animationDurationUpdate","animationEasingUpdate"].forEach(function(d){l[d]=Cr(e.get(d),s&&s.get(d))});var u=Cr(t.alpha,e.get("alpha"))||0,h=Cr(t.beta,e.get("beta"))||0,c=Cr(t.center,e.get("center"))||[0,0,0];l.animation&&l.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:u,beta:h,center:c,distance:a,orthographicSize:o,easing:l.animationEasingUpdate,duration:l.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(u),this.setBeta(h),this.setCenter(c),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,r=this,i={},n={};return e.distance!=null&&(i.distance=this.getDistance(),n.distance=e.distance),e.orthographicSize!=null&&(i.orthographicSize=this.getOrthographicSize(),n.orthographicSize=e.orthographicSize),e.alpha!=null&&(i.alpha=this.getAlpha(),n.alpha=e.alpha),e.beta!=null&&(i.beta=this.getBeta(),n.beta=e.beta),e.center!=null&&(i.center=this.getCenter(),n.center=e.center),this._addAnimator(t.animation.animate(i).when(e.duration||1e3,n).during(function(){i.alpha!=null&&r.setAlpha(i.alpha),i.beta!=null&&r.setBeta(i.beta),i.distance!=null&&r.setDistance(i.distance),i.center!=null&&r.setCenter(i.center),i.orthographicSize!=null&&r.setOrthographicSize(i.orthographicSize),r._needsUpdate=!0})).start(e.easing||"linear")},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection==="cw"?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger("update"),this._needsUpdate=!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,Math.pow(this.damping,e/16))},_updateDistanceOrSize:function(e){this._projection==="perspective"?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=Math.pow(this.damping,e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),r=this._orthoSize,i=r/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-i/2,t.right=i/2,t.top=r/2,t.bottom=-r/2},_updatePan:function(e){var t=this._panVelocity,r=this._distance,i=this.getCamera(),n=i.worldTransform.y,a=i.worldTransform.x;this._center.scaleAndAdd(a,-t.x*r/200).scaleAndAdd(n,-t.y*r/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new D,r=this._theta+Math.PI/2,i=this._phi+Math.PI/2,n=Math.sin(r);t.x=n*Math.cos(i),t.y=-Math.cos(r),t.z=n*Math.sin(i),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var r=e.len();r=r*t,r<1e-4&&(r=0),e.normalize().scale(r)},_decomposeTransform:function(){if(!!this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),r=Math.atan2(e.x,e.z);this._theta=t,this._phi=-r,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,r=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,r)||(this.zr.on("mousemove",this._mouseMoveHandler),this.zr.on("mouseup",this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode="rotate"):e.event.button===To[this.rotateMouseButton]?this._mode="rotate":e.event.button===To[this.panMouseButton]?this._mode="pan":this._mode="",this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=Eo(this.panSensitivity),r=Eo(this.rotateSensitivity);this._mode==="rotate"?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*r[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*r[1]):this._mode==="pan"&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode="")},_zoomHandler:function(e,t){if(t!==0){var r=e.offsetX,i=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(r,i))){var n;this._projection==="perspective"?n=Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):n=Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5),this._zoomSpeed=(t>0?-1:1)*n*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode==="rotate"&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off("mousemove",this._mouseMoveHandler),this.zr.off("mouseup",this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton==="right"||this.panMouseButton==="right"},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var r=t.indexOf(e);r>=0&&t.splice(r,1)}),e}});Object.defineProperty(ws.prototype,"autoRotate",{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});var jf=ws,la={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var r in t)e||!t[r].value?t[r].value=[]:t[r].value=Array.prototype.slice.call(t[r].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},ki={vec2:z,vec3:T,vec4:N,mat2:Te,mat2d:Ae,mat3:ee,mat4:L,quat:$},Tn=ki.vec3,So=[[0,0],[1,1]],Ms=be.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new be.Attribute("position","float",3,"POSITION"),positionPrev:new be.Attribute("positionPrev","float",3),positionNext:new be.Attribute("positionNext","float",3),prevPositionPrev:new be.Attribute("prevPositionPrev","float",3),prevPosition:new be.Attribute("prevPosition","float",3),prevPositionNext:new be.Attribute("prevPositionNext","float",3),offset:new be.Attribute("offset","float",1),color:new be.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,r,i){var n=Tn.dist(e,t)+Tn.dist(r,t)+Tn.dist(i,r),a=1/(n+1)*this.segmentScale;return a},getCubicCurveVertexCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,r,i){var n=this._getCubicCurveApproxStep(e,t,r,i),a=Math.ceil(1/n);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(So)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(So)},getPolylineVertexCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t;if(typeof e=="number")t=e;else{var r=typeof e[0]!="number";t=r?e.length:e.length/3}return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,r,i,n,a){a==null&&(a=1);for(var o=e[0],s=e[1],l=e[2],u=t[0],h=t[1],c=t[2],d=r[0],f=r[1],v=r[2],p=i[0],_=i[1],m=i[2],y=this._getCubicCurveApproxStep(e,t,r,i),g=y*y,x=g*y,E=3*y,S=3*g,w=6*g,b=6*x,C=o-u*2+d,O=s-h*2+f,M=l-c*2+v,B=(u-d)*3-o+p,F=(h-f)*3-s+_,R=(c-v)*3-l+m,H=o,U=s,q=l,I=(u-o)*E+C*S+B*x,fe=(h-s)*E+O*S+F*x,k=(c-l)*E+M*S+R*x,xe=C*w+B*b,oe=O*w+F*b,pe=M*w+R*b,_e=B*b,Be=F*b,Fe=R*b,Le=0,Ve=0,Je=Math.ceil(1/y),Ue=new Float32Array((Je+1)*3),Ue=[],st=0,Ve=0;Ve<Je+1;Ve++)Ue[st++]=H,Ue[st++]=U,Ue[st++]=q,H+=I,U+=fe,q+=k,I+=xe,fe+=oe,k+=pe,xe+=_e,oe+=Be,pe+=Fe,Le+=y,Le>1&&(H=I>0?Math.min(H,p):Math.max(H,p),U=fe>0?Math.min(U,_):Math.max(U,_),q=k>0?Math.min(q,m):Math.max(q,m));return this.addPolyline(Ue,n,a)},addLine:function(e,t,r,i){return this.addPolyline([e,t],r,i)},addPolyline:function(e,t,r,i,n){if(!!e.length){var a=typeof e[0]!="number";if(n==null&&(n=a?e.length:e.length/3),!(n<2)){i==null&&(i=0),r==null&&(r=1),this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!="number",o=a?typeof t[0]!="number":t.length/4===n,s=this.attributes.position,l=this.attributes.positionPrev,u=this.attributes.positionNext,h=this.attributes.color,c=this.attributes.offset,d=this.indices,f=this._vertexOffset,v,p;r=Math.max(r,.01);for(var _=i;_<n;_++){if(a)v=e[_],o?p=t[_]:p=t;else{var m=_*3;if(v=v||[],v[0]=e[m],v[1]=e[m+1],v[2]=e[m+2],o){var y=_*4;p=p||[],p[0]=t[y],p[1]=t[y+1],p[2]=t[y+2],p[3]=t[y+3]}else p=t}if(this.useNativeLine?_>1&&(s.copy(f,f-1),h.copy(f,f-1),f++):(_<n-1&&(l.set(f+2,v),l.set(f+3,v)),_>0&&(u.set(f-2,v),u.set(f-1,v)),s.set(f,v),s.set(f+1,v),h.set(f,p),h.set(f+1,p),c.set(f,r/2),c.set(f+1,-r/2),f+=2),this.useNativeLine)h.set(f,p),s.set(f,v),f++;else if(_>0){var g=this._triangleOffset*3,d=this.indices;d[g]=f-4,d[g+1]=f-3,d[g+2]=f-2,d[g+3]=f-3,d[g+4]=f-1,d[g+5]=f-2,this._triangleOffset+=2}}if(!this.useNativeLine){var x=this._vertexOffset,E=this._vertexOffset+n*2;l.copy(x,x+2),l.copy(x+1,x+3),u.copy(E-1,E-3),u.copy(E-2,E-4)}return this._vertexOffset=f,this._vertexOffset}}},setItemColor:function(e,t){for(var r=this._itemVertexOffsets[e],i=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,n=r;n<i;n++)this.attributes.color.set(n,t);this.dirty("color")},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});Gr(Ms.prototype,la);var ua=Ms;function Di(e,t,r,i,n,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=i,this.height=n,this.offsetX=t,this.offsetY=r,this.dpr=o,this.gap=a}Di.prototype={constructor:Di,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,r){var i=e.getBoundingRect();t==null&&(t=i.width),r==null&&(r=i.height),t*=this.dpr,r*=this.dpr,this._fitElement(e,t,r);var n=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,l=this.gap;if(n+t+l>o&&(n=this._x=0,a+=this._rowHeight+l,this._y=a,this._rowHeight=0),this._x+=t+l,this._rowHeight=Math.max(this._rowHeight,r),a+r+l>s)return null;e.x+=this.offsetX*this.dpr+n,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var u=[this.offsetX/this.width,this.offsetY/this.height],h=[[n/o+u[0],a/s+u[1]],[(n+t)/o+u[0],(a+r)/s+u[1]]];return h},_fitElement:function(e,t,r){var i=e.getBoundingRect(),n=t/i.width,a=r/i.height;e.x=-i.x*n,e.y=-i.y*a,e.scaleX=n,e.scaleY=a,e.update()}};function kn(e){e=e||{},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement("canvas");t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new ae({image:t,flipY:!1});var r=this;this._zr=$l(t);var i=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){i.call(this),r._texture.dirty(),r.onupdate&&r.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new Di(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}kn.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes,r=t.length,i=r*this._nodeWidth%e,n=Math.floor(r*this._nodeWidth/e)*this._nodeHeight;if(!(n>=e)){var a=(i+this._nodeWidth)*this._dpr,o=(n+this._nodeHeight)*this._dpr;try{this._zr.resize({width:a,height:o})}catch{this._canvas.width=a,this._canvas.height=o}var s=new Di(this._zr,i,n,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(s),s}},add:function(e,t,r){if(this._coords[e.id])return this._coords[e.id];var i=this._getCurrentNode().add(e,t,r);if(!i){var n=this._expand();if(!n)return;i=n.add(e,t,r)}return this._coords[e.id]=i,i},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function Gn(){}Gn.prototype={constructor:Gn,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new G.DirectionalLight({shadowBias:.005}),this.ambientLight=new G.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,r=this.ambientLight,i=e.getModel("light"),n=i.getModel("main"),a=i.getModel("ambient");t.intensity=n.get("intensity"),r.intensity=a.get("intensity"),t.color=G.parseColor(n.get("color")).slice(0,3),r.color=G.parseColor(a.get("color")).slice(0,3);var o=n.get("alpha")||0,s=n.get("beta")||0;t.position.setArray(G.directionFromAlphaBeta(o,s)),t.lookAt(G.Vector3.ZERO),t.castShadow=n.get("shadow"),t.shadowResolution=G.getShadowResolution(n.get("shadowQuality"))},updateAmbientCubemap:function(e,t,r){var i=t.getModel("light.ambientCubemap"),n=i.get("texture");if(n){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[n];if(!a){var o=this;a=this._cubemapLightsCache[n]=G.createAmbientCubemap(i.option,e,r,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),r.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),this._currentCubemapLights=null)},updateSkybox:function(e,t,r){var i=t.get("environment"),n=this;function a(){return n._skybox=n._skybox||new Hr,n._skybox}var o=a();if(i&&i!=="none")if(i==="auto")if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var s=this._currentCubemapLights.specular.cubemap;o.setEnvironmentMap(s),this._scene&&o.attachScene(this._scene),o.material.set("lod",3)}else this._skybox&&this._skybox.detachScene();else if(typeof i=="object"&&i.colorStops||typeof i=="string"&&qn(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new G.Texture2D({anisotropic:8,flipY:!1});o.setEnvironmentMap(l);var u=l.image=document.createElement("canvas");u.width=u.height=16;var h=u.getContext("2d"),c=new Fi({shape:{x:0,y:0,width:16,height:16},style:{fill:i}});zo(h,c),o.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=G.loadTexture(i,r,{anisotropic:8,flipY:!1});o.setEnvironmentMap(l),o.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=t.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&i!=="auto"&&!(i.match&&i.match(/.hdr$/))){var f=d.viewGL.isLinearSpace()?"define":"undefine";this._skybox.material[f]("fragment","SRGB_DECODE")}else this._skybox.material.undefine("fragment","SRGB_DECODE")}};var zt=ki.vec3,Cs=be.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new be.Attribute("position","float",3,"POSITION"),normal:new be.Attribute("normal","float",3,"NORMAL"),color:new be.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,r=this.getQuadVertexCount()*e,i=this.getQuadTriangleCount()*e;this.vertexCount!==r&&(t.position.init(r),t.normal.init(r),t.color.init(r)),this.triangleCount!==i&&(this.indices=r>65535?new Uint32Array(i*3):new Uint16Array(i*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=zt.create(),t=zt.create(),r=zt.create(),i=[0,3,1,3,2,1];return function(n,a){var o=this.attributes.position,s=this.attributes.normal,l=this.attributes.color;zt.sub(e,n[1],n[0]),zt.sub(t,n[2],n[1]),zt.cross(r,e,t),zt.normalize(r,r);for(var u=0;u<4;u++)o.set(this._vertexOffset+u,n[u]),l.set(this._vertexOffset+u,a),s.set(this._vertexOffset+u,r);for(var h=this._faceOffset*3,u=0;u<6;u++)this.indices[h+u]=i[u]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});Gr(Cs.prototype,la);var qf=Cs,Wn=ot.firstNotNull,Zf={x:0,y:2,z:1};function Kf(e,t,r,i){var n=[0,0,0],a=i<0?r.getExtentMin():r.getExtentMax();n[Zf[r.dim]]=a,e.position.setArray(n),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),r.dim==="x"?(e.rotation.rotateY(i*Math.PI/2),t.normal.x=-i):r.dim==="z"?(e.rotation.rotateX(-i*Math.PI/2),t.normal.y=-i):(i>0&&e.rotation.rotateY(Math.PI),t.normal.z=-i)}function Gi(e,t,r){this.rootNode=new G.Node;var i=new G.Mesh({geometry:new ua({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),n=new G.Mesh({geometry:new qf,material:r,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(n),this.rootNode.add(i),this.faceInfo=e,this.plane=new G.Plane,this.linesMesh=i,this.quadsMesh=n}Gi.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=[i.getAxis(this.faceInfo[0]),i.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,n,e,r),this._udpateSplitAreas(o,n,e,r),a.convertToTypedArray(),o.convertToTypedArray();var s=i.getAxis(this.faceInfo[2]);Kf(this.rootNode,this.plane,s,this.faceInfo[3])};Gi.prototype._updateSplitLines=function(e,t,r,i){var n=i.getDevicePixelRatio();t.forEach(function(a,o){var s=a.model,l=t[1-o].getExtent();if(!a.scale.isBlank()){var u=s.getModel("splitLine",r.getModel("splitLine"));if(u.get("show")){var h=u.getModel("lineStyle"),c=h.get("color"),d=Wn(h.get("opacity"),1),f=Wn(h.get("width"),1);c=$e(c)?c:[c];for(var v=a.getTicksCoords({tickModel:u}),p=0,_=0;_<v.length;_++){var m=v[_].coord,y=G.parseColor(c[p%c.length]);y[3]*=d;var g=[0,0,0],x=[0,0,0];g[o]=x[o]=m,g[1-o]=l[0],x[1-o]=l[1],e.addLine(g,x,y,f*n),p++}}}})};Gi.prototype._udpateSplitAreas=function(e,t,r,i){t.forEach(function(n,a){var o=n.model,s=t[1-a].getExtent();if(!n.scale.isBlank()){var l=o.getModel("splitArea",r.getModel("splitArea"));if(l.get("show")){var u=l.getModel("areaStyle"),h=u.get("color"),c=Wn(u.get("opacity"),1);h=$e(h)?h:[h];for(var d=n.getTicksCoords({tickModel:l,clamp:!0}),f=0,v=[0,0,0],p=[0,0,0],_=0;_<d.length;_++){var m=d[_].coord,y=[0,0,0],g=[0,0,0];if(y[a]=g[a]=m,y[1-a]=s[0],g[1-a]=s[1],_===0){v=y,p=g;continue}var x=G.parseColor(h[f%h.length]);x[3]*=c,e.addQuad([v,y,g,p],x),v=y,p=g,f++}}}})};var bo=[0,1,2,0,2,3],Ls=be.extend(function(){return{attributes:{position:new be.Attribute("position","float",3,"POSITION"),texcoord:new be.Attribute("texcoord","float",2,"TEXCOORD_0"),offset:new be.Attribute("offset","float",2),color:new be.Attribute("color","float",4,"COLOR")}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,r=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==r&&(this.indices=t>65535?new Uint32Array(r*3):new Uint16Array(r*3))},setSpriteAlign:function(e,t,r,i,n){r==null&&(r="left"),i==null&&(i="top");var a,o,s,l;switch(n=n||0,r){case"left":a=n,s=t[0]+n;break;case"center":case"middle":a=-t[0]/2,s=t[0]/2;break;case"right":a=-t[0]-n,s=-n;break}switch(i){case"bottom":o=n,l=t[1]+n;break;case"middle":o=-t[1]/2,l=t[1]/2;break;case"top":o=-t[1]-n,l=-n;break}var u=e*4,h=this.attributes.offset;h.set(u,[a,l]),h.set(u+1,[s,l]),h.set(u+2,[s,o]),h.set(u+3,[a,o])},addSprite:function(e,t,r,i,n,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,r,i,n,a);for(var s=0;s<bo.length;s++)this.indices[this._faceOffset*3+s]=bo[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,r,i,n,a,o){for(var s=e*4,l=this.attributes,u=0;u<4;u++)l.position.set(s+u,t);var h=l.texcoord;h.set(s,[i[0][0],i[0][1]]),h.set(s+1,[i[1][0],i[0][1]]),h.set(s+2,[i[1][0],i[1][1]]),h.set(s+3,[i[0][0],i[1][1]]),this.setSpriteAlign(e,r,n,a,o)}});Gr(Ls.prototype,la);var Qf=Ls,Jf=`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`;G.Shader.import(Jf);var Rs=G.Mesh.extend(function(){var e=new Qf({dynamic:!0}),t=new G.Material({shader:G.createShader("ecgl.labels"),transparent:!0,depthMask:!1});return{geometry:e,material:t,culling:!1,castShadow:!1,ignorePicking:!0}}),Vt=ot.firstNotNull,kt={x:0,y:2,z:1};function ha(e,t){var r=new G.Mesh({geometry:new ua({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),i=new Rs;i.material.depthMask=!1;var n=new G.Node;n.add(r),n.add(i),this.rootNode=n,this.dim=e,this.linesMesh=r,this.labelsMesh=i,this.axisLineCoords=null,this.labelElements=[]}var En={x:"y",y:"x",z:"y"};ha.prototype.update=function(e,t,r){var i=e.coordinateSystem,n=i.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=n.model,l=n.getExtent(),M=r.getDevicePixelRatio(),u=s.getModel("axisLine",e.getModel("axisLine")),h=s.getModel("axisTick",e.getModel("axisTick")),c=s.getModel("axisLabel",e.getModel("axisLabel")),d=u.get("lineStyle.color");if(u.get("show")){var f=u.getModel("lineStyle"),v=[0,0,0],p=[0,0,0],_=kt[n.dim];v[_]=l[0],p[_]=l[1],this.axisLineCoords=[v,p];var m=G.parseColor(d),y=Vt(f.get("width"),1),g=Vt(f.get("opacity"),1);m[3]*=g,a.addLine(v,p,m,y*M)}if(h.get("show")){var x=h.getModel("lineStyle"),E=G.parseColor(Vt(x.get("color"),d)),y=Vt(x.get("width"),1);E[3]*=Vt(x.get("opacity"),1);for(var S=n.getTicksCoords(),w=h.get("length"),b=0;b<S.length;b++){var C=S[b].coord,v=[0,0,0],p=[0,0,0],_=kt[n.dim],O=kt[En[n.dim]];v[_]=p[_]=C,p[O]=w,a.addLine(v,p,E,y*M)}}this.labelElements=[];var M=r.getDevicePixelRatio();if(c.get("show"))for(var S=n.getTicksCoords(),B=s.get("data"),F=c.get("margin"),R=n.getViewLabels(),b=0;b<R.length;b++){var H=R[b].tickValue,U=R[b].formattedLabel,q=R[b].rawLabel,C=n.dataToCoord(H),I=[0,0,0],_=kt[n.dim],O=kt[En[n.dim]];I[_]=I[_]=C,I[O]=F;var fe=c;B&&B[H]&&B[H].textStyle&&(fe=new Mn(B[H].textStyle,c,s.ecModel));var k=Vt(fe.get("color"),d),xe=new It({style:Dn(fe,{text:U,fill:typeof k=="function"?k(n.type==="category"?q:n.type==="value"?H+"":H,b):k,verticalAlign:"top",align:"left"})}),oe=t.add(xe),pe=xe.getBoundingRect();o.addSprite(I,[pe.width*M,pe.height*M],oe),this.labelElements.push(xe)}if(s.get("name")){var _e=s.getModel("nameTextStyle"),I=[0,0,0],_=kt[n.dim],O=kt[En[n.dim]],Be=Vt(_e.get("color"),d),Fe=_e.get("borderColor"),y=_e.get("borderWidth");I[_]=I[_]=(l[0]+l[1])/2,I[O]=s.get("nameGap");var xe=new It({style:Dn(_e,{text:s.get("name"),fill:Be,stroke:Fe,lineWidth:y})}),oe=t.add(xe),pe=xe.getBoundingRect();o.addSprite(I,[pe.width*M,pe.height*M],oe),xe.__idx=this.labelElements.length,this.nameLabelElement=xe}this.labelsMesh.material.set("textureAtlas",t.getTexture()),this.labelsMesh.material.set("uvScale",t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()};ha.prototype.setSpriteAlign=function(e,t,r){for(var i=r.getDevicePixelRatio(),n=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a],s=o.getBoundingRect();n.setSpriteAlign(a,[s.width*i,s.height*i],e,t)}var l=this.nameLabelElement;if(l){var s=l.getBoundingRect();n.setSpriteAlign(l.__idx,[s.width*i,s.height*i],e,t),n.dirty()}this.textAlign=e,this.textVerticalAlign=t};var ed=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`,Ao=ot.firstNotNull;G.Shader.import(ed);var Gt={x:0,y:2,z:1},td=Yo.extend({type:"grid3D",__ecgl__:!0,init:function(e,t){var r=[["y","z","x",-1,"left"],["y","z","x",1,"right"],["x","y","z",-1,"bottom"],["x","y","z",1,"top"],["x","z","y",-1,"far"],["x","z","y",1,"near"]],i=["x","y","z"],n=new G.Material({shader:G.createShader("ecgl.color"),depthMask:!1,transparent:!0}),a=new G.Material({shader:G.createShader("ecgl.meshLines3D"),depthMask:!1,transparent:!0});n.define("fragment","DOUBLE_SIDED"),n.define("both","VERTEX_COLOR"),this.groupGL=new G.Node,this._control=new jf({zr:t.getZr()}),this._control.init(),this._faces=r.map(function(s){var l=new Gi(s,a,n);return this.groupGL.add(l.rootNode),l},this),this._axes=i.map(function(s){var l=new ha(s,a);return this.groupGL.add(l.rootNode),l},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new kn({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new G.Mesh({geometry:new ua({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new kn({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new Rs({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set("textureAtlas",this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new G.Node,this._sceneHelper=new Gn,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,r){this._model=e,this._api=r;var i=e.coordinateSystem;i.viewGL.add(this._lightRoot),e.get("show")?i.viewGL.add(this.groupGL):i.viewGL.remove(this.groupGL);var n=this._control;n.setViewGL(i.viewGL);var a=e.getModel("viewControl");n.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),n.off("update"),e.get("show")&&(this._faces.forEach(function(o){o.update(e,t,r)},this),this._axes.forEach(function(o){o.update(e,this._axisLabelSurface,r)},this)),n.on("update",this._onCameraChange.bind(this,e,r),this),this._sceneHelper.setScene(i.viewGL.scene),this._sceneHelper.updateLight(e),i.viewGL.setPostEffect(e.getModel("postEffect"),r),i.viewGL.setTemporalSuperSampling(e.getModel("temporalSuperSampling")),this._initMouseHandler(e)},afterRender:function(e,t,r,i){var n=i.renderer;this._sceneHelper.updateAmbientCubemap(n,e,r),this._sceneHelper.updateSkybox(n,e,r)},showAxisPointer:function(e,t,r,i){this._doShowAxisPointer(),this._updateAxisPointer(i.value)},hideAxisPointer:function(e,t,r,i){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem,r=t.viewGL;e.get("show")&&e.get("axisPointer.show")?r.on("mousemove",this._updateAxisPointerOnMousePosition,this):r.off("mousemove",this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model,r=t.coordinateSystem,i=r.viewGL,n=i.castRay(e.offsetX,e.offsetY,new G.Ray),a,o=0;o<this._faces.length;o++){var s=this._faces[o];if(!s.rootNode.invisible){s.plane.normal.dot(i.camera.worldTransform.z)<0&&s.plane.normal.negate();var l=n.intersectPlane(s.plane);if(!!l){var u=r.getAxis(s.faceInfo[0]),h=r.getAxis(s.faceInfo[1]),c=Gt[s.faceInfo[0]],d=Gt[s.faceInfo[1]];u.contain(l.array[c])&&h.contain(l.array[d])&&(a=l)}}}if(a){var f=r.pointToData(a.array,[],!0);this._updateAxisPointer(f),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get("show")&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var r=this._control;t.dispatchAction({type:"grid3DChangeCamera",alpha:r.getAlpha(),beta:r.getBeta(),distance:r.getDistance(),center:r.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new G.Vector3;e.update();for(var r=0;r<this._faces.length/2;r++){for(var i=[],n=0;n<2;n++){var a=this._faces[r*2+n];a.rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),i[n]=t.z}var o=i[0]>i[1]?0:1,s=this._faces[r*2+o],l=this._faces[r*2+1-o];s.rootNode.invisible=!0,l.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis("x"),r=e.getAxis("y"),i=e.getAxis("z"),n=i.getExtentMax(),a=i.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),l=r.getExtentMax(),u=r.getExtentMin(),h=this._axes[0].rootNode,c=this._axes[1].rootNode,d=this._axes[2].rootNode,f=this._faces,v=f[4].rootNode.invisible?u:l,p=f[2].rootNode.invisible?n:a,_=f[0].rootNode.invisible?o:s,m=f[2].rootNode.invisible?n:a,y=f[0].rootNode.invisible?s:o,g=f[4].rootNode.invisible?u:l;h.rotation.identity(),c.rotation.identity(),d.rotation.identity(),f[4].rootNode.invisible&&(this._axes[0].flipped=!0,h.rotation.rotateX(Math.PI)),f[0].rootNode.invisible&&(this._axes[1].flipped=!0,c.rotation.rotateZ(Math.PI)),f[4].rootNode.invisible&&(this._axes[2].flipped=!0,d.rotation.rotateY(Math.PI)),h.position.set(0,p,v),c.position.set(_,m,0),d.position.set(y,0,g),h.update(),c.update(),d.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new G.Vector4,new G.Vector4],r=new G.Vector4;this.groupGL.getWorldPosition(r),r.w=1,r.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),r.x/=r.w,r.y/=r.w,this._axes.forEach(function(i){var n=i.axisLineCoords;i.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(n[a]),t[a].w=1,t[a].transformMat4(i.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,l=(t[1].x+t[0].x)/2,u=(t[1].y+t[0].y)/2,h,c;Math.abs(s/o)<.5?(h="center",c=u>r.y?"bottom":"top"):(c="middle",h=l>r.x?"left":"right"),i.setSpriteAlign(h,c,this._api)},this)},_doShowAxisPointer:function(){!this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,r=t.dataToPoint(e),i=this._axisPointerLineMesh,n=i.geometry,a=this._model.getModel("axisPointer"),o=this._api.getDevicePixelRatio();n.convertToDynamicArray(!0);function s(b){return ot.firstNotNull(b.model.get("axisPointer.show"),a.get("show"))}function l(b){var C=b.model.getModel("axisPointer",a),O=C.getModel("lineStyle"),M=G.parseColor(O.get("color")),B=Ao(O.get("width"),1),F=Ao(O.get("opacity"),1);return M[3]*=F,{color:M,lineWidth:B}}for(var u=0;u<this._faces.length;u++){var h=this._faces[u];if(!h.rootNode.invisible){for(var c=h.faceInfo,d=c[3]<0?t.getAxis(c[2]).getExtentMin():t.getAxis(c[2]).getExtentMax(),f=Gt[c[2]],v=0;v<2;v++){var p=c[v],_=c[1-v],m=t.getAxis(p),y=t.getAxis(_);if(!!s(m)){var g=[0,0,0],x=[0,0,0],E=Gt[p],S=Gt[_];g[E]=x[E]=r[E],g[f]=x[f]=d,g[S]=y.getExtentMin(),x[S]=y.getExtentMax();var w=l(m);n.addLine(g,x,w.color,w.lineWidth*o)}}if(s(t.getAxis(c[2]))){var g=r.slice(),x=r.slice();x[f]=d;var w=l(t.getAxis(c[2]));n.addLine(g,x,w.color,w.lineWidth*o)}}}n.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,r=this._axisPointerLabelsMesh,i=this._axisPointerLabelsSurface,n=t.coordinateSystem,a=t.getModel("axisPointer");r.geometry.convertToDynamicArray(!0),i.clear();var o={x:"y",y:"x",z:"y"};this._axes.forEach(function(s,l){var u=n.getAxis(s.dim),h=u.model,c=h.getModel("axisPointer",a),d=c.getModel("label"),f=c.get("lineStyle.color");if(!(!d.get("show")||!c.get("show"))){var v=e[l],p=d.get("formatter"),_=u.scale.getLabel({value:v});if(p!=null)_=p(_,e);else if(u.scale.type==="interval"||u.scale.type==="log"){var m=qo(u.scale.getTicks()[0]);_=v.toFixed(m+2)}var y=d.get("color"),g=new It({style:Dn(d,{text:_,fill:y||f,align:"left",verticalAlign:"top"})}),x=i.add(g),E=g.getBoundingRect(),S=this._api.getDevicePixelRatio(),w=s.rootNode.position.toArray(),b=Gt[o[s.dim]];w[b]+=(s.flipped?-1:1)*d.get("margin"),w[Gt[s.dim]]=u.dataToCoord(e[l]),r.geometry.addSprite(w,[E.width*S,E.height*S],x,s.textAlign,s.textVerticalAlign)}},this),i.getZr().refreshImmediately(),r.material.set("uvScale",i.getCoordsScale()),r.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function Vr(e){Zo.call(this,e),this.type="cartesian3D",this.dimensions=["x","y","z"],this.size=[0,0,0]}Vr.prototype={constructor:Vr,model:null,containPoint:function(e){return this.getAxis("x").contain(e[0])&&this.getAxis("y").contain(e[2])&&this.getAxis("z").contain(e[1])},containData:function(e){return this.getAxis("x").containData(e[0])&&this.getAxis("y").containData(e[1])&&this.getAxis("z").containData(e[2])},dataToPoint:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").dataToCoord(e[0],r),t[2]=this.getAxis("y").dataToCoord(e[1],r),t[1]=this.getAxis("z").dataToCoord(e[2],r),t},pointToData:function(e,t,r){return t=t||[],t[0]=this.getAxis("x").coordToData(e[0],r),t[1]=this.getAxis("y").coordToData(e[2],r),t[2]=this.getAxis("z").coordToData(e[1],r),t}};Ko(Vr,Zo);function Ni(e,t,r){Qo.call(this,e,t,r)}Ni.prototype={constructor:Ni,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}};Ko(Ni,Qo);var Xn=function(){this._pool={},this._allocatedTextures=[]};Xn.prototype={constructor:Xn,get:function(e){var t=wo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];if(!r.length){var i=new ae(e);return this._allocatedTextures.push(i),i}return r.pop()},put:function(e){var t=wo(e);this._pool.hasOwnProperty(t)||(this._pool[t]=[]);var r=this._pool[t];r.push(e)},clear:function(e){for(var t=0;t<this._allocatedTextures.length;t++)this._allocatedTextures[t].dispose(e);this._pool={},this._allocatedTextures=[]}};var Ps={width:512,height:512,type:A.UNSIGNED_BYTE,format:A.RGBA,wrapS:A.CLAMP_TO_EDGE,wrapT:A.CLAMP_TO_EDGE,minFilter:A.LINEAR_MIPMAP_LINEAR,magFilter:A.LINEAR,useMipmap:!0,anisotropic:1,flipY:!0,unpackAlignment:4,premultiplyAlpha:!1},Sn=Object.keys(Ps);function wo(e){Ie.defaultsWithPropList(e,Ps,Sn),rd(e);for(var t="",r=0;r<Sn.length;r++){var i=Sn[r],n=e[i].toString();t+=n}return t}function rd(e){var t=id(e.width,e.height);e.format===A.DEPTH_COMPONENT&&(e.useMipmap=!1),(!t||!e.useMipmap)&&(e.minFilter==A.NEAREST_MIPMAP_NEAREST||e.minFilter==A.NEAREST_MIPMAP_LINEAR?e.minFilter=A.NEAREST:(e.minFilter==A.LINEAR_MIPMAP_LINEAR||e.minFilter==A.LINEAR_MIPMAP_NEAREST)&&(e.minFilter=A.LINEAR)),t||(e.wrapS=A.CLAMP_TO_EDGE,e.wrapT=A.CLAMP_TO_EDGE)}function id(e,t){return(e&e-1)===0&&(t&t-1)===0}var Ds=Xn,nd=`@export clay.sm.depth.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
uniform vec2 uvRepeat = vec2(1.0, 1.0);
uniform vec2 uvOffset = vec2(0.0, 0.0);
@import clay.chunk.skinning_header
@import clay.chunk.instancing_header
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
void main(){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 v_ViewPosition = worldViewProjection * P;
 gl_Position = v_ViewPosition;
 v_Texcoord = texcoord * uvRepeat + uvOffset;
}
@end
@export clay.sm.depth.fragment
varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;
uniform float bias : 0.001;
uniform float slopeScale : 1.0;
uniform sampler2D alphaMap;
uniform float alphaCutoff: 0.0;
@import clay.util.encode_float
void main(){
 float depth = v_ViewPosition.z / v_ViewPosition.w;
 if (alphaCutoff > 0.0) {
 if (texture2D(alphaMap, v_Texcoord).a <= alphaCutoff) {
 discard;
 }
 }
#ifdef USE_VSM
 depth = depth * 0.5 + 0.5;
 float moment1 = depth;
 float moment2 = depth * depth;
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 moment2 += 0.25*(dx*dx+dy*dy);
 #endif
 gl_FragColor = vec4(moment1, moment2, 0.0, 1.0);
#else
 #ifdef SUPPORT_STANDARD_DERIVATIVES
 float dx = dFdx(depth);
 float dy = dFdy(depth);
 depth += sqrt(dx*dx + dy*dy) * slopeScale + bias;
 #else
 depth += bias;
 #endif
 gl_FragColor = encodeFloat(depth * 0.5 + 0.5);
#endif
}
@end
@export clay.sm.debug_depth
uniform sampler2D depthMap;
varying vec2 v_Texcoord;
@import clay.util.decode_float
void main() {
 vec4 tex = texture2D(depthMap, v_Texcoord);
#ifdef USE_VSM
 gl_FragColor = vec4(tex.rgb, 1.0);
#else
 float depth = decodeFloat(tex);
 gl_FragColor = vec4(depth, depth, depth, 1.0);
#endif
}
@end
@export clay.sm.distance.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 world : WORLD;
attribute vec3 position : POSITION;
@import clay.chunk.skinning_header
varying vec3 v_WorldPosition;
void main (){
 vec4 P = vec4(position, 1.0);
#ifdef SKINNING
 @import clay.chunk.skin_matrix
 P = skinMatrixWS * P;
#endif
#ifdef INSTANCING
 @import clay.chunk.instancing_matrix
 P = instanceMat * P;
#endif
 gl_Position = worldViewProjection * P;
 v_WorldPosition = (world * P).xyz;
}
@end
@export clay.sm.distance.fragment
uniform vec3 lightPosition;
uniform float range : 100;
varying vec3 v_WorldPosition;
@import clay.util.encode_float
void main(){
 float dist = distance(lightPosition, v_WorldPosition);
#ifdef USE_VSM
 gl_FragColor = vec4(dist, dist * dist, 0.0, 0.0);
#else
 dist = dist / range;
 gl_FragColor = encodeFloat(dist);
#endif
}
@end
@export clay.plugin.shadow_map_common
@import clay.util.decode_float
float tapShadowMap(sampler2D map, vec2 uv, float z){
 vec4 tex = texture2D(map, uv);
 return step(z, decodeFloat(tex) * 2.0 - 1.0);
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize, vec2 scale) {
 float shadowContrib = tapShadowMap(map, uv, z);
 vec2 offset = vec2(1.0 / textureSize) * scale;
#ifdef PCF_KERNEL_SIZE
 for (int _idx_ = 0; _idx_ < PCF_KERNEL_SIZE; _idx_++) {{
 shadowContrib += tapShadowMap(map, uv + offset * pcfKernel[_idx_], z);
 }}
 return shadowContrib / float(PCF_KERNEL_SIZE + 1);
#else
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, 0.0), z);
 shadowContrib += tapShadowMap(map, uv+vec2(-offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(offset.x, -offset.y), z);
 shadowContrib += tapShadowMap(map, uv+vec2(0.0, -offset.y), z);
 return shadowContrib / 9.0;
#endif
}
float pcf(sampler2D map, vec2 uv, float z, float textureSize) {
 return pcf(map, uv, z, textureSize, vec2(1.0));
}
float chebyshevUpperBound(vec2 moments, float z){
 float p = 0.0;
 z = z * 0.5 + 0.5;
 if (z <= moments.x) {
 p = 1.0;
 }
 float variance = moments.y - moments.x * moments.x;
 variance = max(variance, 0.0000001);
 float mD = moments.x - z;
 float pMax = variance / (variance + mD * mD);
 pMax = clamp((pMax-0.4)/(1.0-0.4), 0.0, 1.0);
 return max(p, pMax);
}
float computeShadowContrib(
 sampler2D map, mat4 lightVPM, vec3 position, float textureSize, vec2 scale, vec2 offset
) {
 vec4 posInLightSpace = lightVPM * vec4(position, 1.0);
 posInLightSpace.xyz /= posInLightSpace.w;
 float z = posInLightSpace.z;
 if(all(greaterThan(posInLightSpace.xyz, vec3(-0.99, -0.99, -1.0))) &&
 all(lessThan(posInLightSpace.xyz, vec3(0.99, 0.99, 1.0)))){
 vec2 uv = (posInLightSpace.xy+1.0) / 2.0;
 #ifdef USE_VSM
 vec2 moments = texture2D(map, uv * scale + offset).xy;
 return chebyshevUpperBound(moments, z);
 #else
 return pcf(map, uv * scale + offset, z, textureSize, scale);
 #endif
 }
 return 1.0;
}
float computeShadowContrib(sampler2D map, mat4 lightVPM, vec3 position, float textureSize) {
 return computeShadowContrib(map, lightVPM, position, textureSize, vec2(1.0), vec2(0.0));
}
float computeShadowContribOmni(samplerCube map, vec3 direction, float range)
{
 float dist = length(direction);
 vec4 shadowTex = textureCube(map, direction);
#ifdef USE_VSM
 vec2 moments = shadowTex.xy;
 float variance = moments.y - moments.x * moments.x;
 float mD = moments.x - dist;
 float p = variance / (variance + mD * mD);
 if(moments.x + 0.001 < dist){
 return clamp(p, 0.0, 1.0);
 }else{
 return 1.0;
 }
#else
 return step(dist, (decodeFloat(shadowTex) + 0.0002) * range);
#endif
}
@end
@export clay.plugin.compute_shadow_map
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT) || defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT) || defined(POINT_LIGHT_SHADOWMAP_COUNT)
#ifdef SPOT_LIGHT_SHADOWMAP_COUNT
uniform sampler2D spotLightShadowMaps[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 spotLightMatrices[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float spotLightShadowMapSizes[SPOT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#ifdef DIRECTIONAL_LIGHT_SHADOWMAP_COUNT
#if defined(SHADOW_CASCADE)
uniform sampler2D directionalLightShadowMaps[1]:unconfigurable;
uniform mat4 directionalLightMatrices[SHADOW_CASCADE]:unconfigurable;
uniform float directionalLightShadowMapSizes[1]:unconfigurable;
uniform float shadowCascadeClipsNear[SHADOW_CASCADE]:unconfigurable;
uniform float shadowCascadeClipsFar[SHADOW_CASCADE]:unconfigurable;
#else
uniform sampler2D directionalLightShadowMaps[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform mat4 directionalLightMatrices[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
uniform float directionalLightShadowMapSizes[DIRECTIONAL_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
#endif
#ifdef POINT_LIGHT_SHADOWMAP_COUNT
uniform samplerCube pointLightShadowMaps[POINT_LIGHT_SHADOWMAP_COUNT]:unconfigurable;
#endif
uniform bool shadowEnabled : true;
#ifdef PCF_KERNEL_SIZE
uniform vec2 pcfKernel[PCF_KERNEL_SIZE];
#endif
@import clay.plugin.shadow_map_common
#if defined(SPOT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfSpotLights(vec3 position, inout float shadowContribs[SPOT_LIGHT_COUNT] ) {
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < SPOT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 spotLightShadowMaps[_idx_], spotLightMatrices[_idx_], position,
 spotLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = SPOT_LIGHT_SHADOWMAP_COUNT; _idx_ < SPOT_LIGHT_COUNT; _idx_++){{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
#ifdef SHADOW_CASCADE
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float depth = (2.0 * gl_FragCoord.z - gl_DepthRange.near - gl_DepthRange.far)
 / (gl_DepthRange.far - gl_DepthRange.near);
 float shadowContrib;
 shadowContribs[0] = 1.0;
 for (int _idx_ = 0; _idx_ < SHADOW_CASCADE; _idx_++) {{
 if (
 depth >= shadowCascadeClipsNear[_idx_] &&
 depth <= shadowCascadeClipsFar[_idx_]
 ) {
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[0], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[0],
 vec2(1.0 / float(SHADOW_CASCADE), 1.0),
 vec2(float(_idx_) / float(SHADOW_CASCADE), 0.0)
 );
 shadowContribs[0] = shadowContrib;
 }
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#else
void computeShadowOfDirectionalLights(vec3 position, inout float shadowContribs[DIRECTIONAL_LIGHT_COUNT]){
 float shadowContrib;
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 shadowContrib = computeShadowContrib(
 directionalLightShadowMaps[_idx_], directionalLightMatrices[_idx_], position,
 directionalLightShadowMapSizes[_idx_]
 );
 shadowContribs[_idx_] = shadowContrib;
 }}
 for(int _idx_ = DIRECTIONAL_LIGHT_SHADOWMAP_COUNT; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
#if defined(POINT_LIGHT_SHADOWMAP_COUNT)
void computeShadowOfPointLights(vec3 position, inout float shadowContribs[POINT_LIGHT_COUNT] ){
 vec3 lightPosition;
 vec3 direction;
 for(int _idx_ = 0; _idx_ < POINT_LIGHT_SHADOWMAP_COUNT; _idx_++) {{
 lightPosition = pointLightPosition[_idx_];
 direction = position - lightPosition;
 shadowContribs[_idx_] = computeShadowContribOmni(pointLightShadowMaps[_idx_], direction, pointLightRange[_idx_]);
 }}
 for(int _idx_ = POINT_LIGHT_SHADOWMAP_COUNT; _idx_ < POINT_LIGHT_COUNT; _idx_++) {{
 shadowContribs[_idx_] = 1.0;
 }}
}
#endif
#endif
@end`,Pt=["px","nx","py","ny","pz","nz"];P.import(nd);function bn(e,t,r){if(r==="alphaMap")return e.material.get("diffuseMap");if(r==="alphaCutoff"){if(e.material.isDefined("fragment","ALPHA_TEST")&&e.material.get("diffuseMap")){var i=e.material.get("alphaCutoff");return i||0}return 0}else return r==="uvRepeat"?e.material.get("uvRepeat"):r==="uvOffset"?e.material.get("uvOffset"):t.get(r)}function Mo(e,t){var r=e.material,i=t.material;return r.get("diffuseMap")!==i.get("diffuseMap")||(r.get("alphaCutoff")||0)!==(i.get("alphaCutoff")||0)}var yt=Qe.extend(function(){return{softShadow:yt.PCF,shadowBlur:1,lightFrustumBias:"auto",kernelPCF:new Float32Array([1,0,1,1,-1,1,0,1,-1,0,-1,-1,1,-1,0,-1]),precision:"highp",_lastRenderNotCastShadow:!1,_frameBuffer:new He,_textures:{},_shadowMapNumber:{POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},_depthMaterials:{},_distanceMaterials:{},_receivers:[],_lightsCastShadow:[],_lightCameras:{},_lightMaterials:{},_texturePool:new Ds}},function(){this._gaussianPassH=new Xe({fragment:P.source("clay.compositor.gaussian_blur")}),this._gaussianPassV=new Xe({fragment:P.source("clay.compositor.gaussian_blur")}),this._gaussianPassH.setUniform("blurSize",this.shadowBlur),this._gaussianPassH.setUniform("blurDir",0),this._gaussianPassV.setUniform("blurSize",this.shadowBlur),this._gaussianPassV.setUniform("blurDir",1),this._outputDepthPass=new Xe({fragment:P.source("clay.sm.debug_depth")})},{render:function(e,t,r,i){r||(r=t.getMainCamera()),this.trigger("beforerender",this,e,t,r),this._renderShadowPass(e,t,r,i),this.trigger("afterrender",this,e,t,r)},renderDebug:function(e,t){e.saveClear();var r=e.viewport,i=0,n=0,a=t||r.width/4,o=a;this.softShadow===yt.VSM?this._outputDepthPass.material.define("fragment","USE_VSM"):this._outputDepthPass.material.undefine("fragment","USE_VSM");for(var s in this._textures){var l=this._textures[s];e.setViewport(i,n,a*l.width/l.height,o),this._outputDepthPass.setUniform("depthMap",l),this._outputDepthPass.render(e),i+=a*l.width/l.height}e.setViewport(r),e.restoreClear()},_updateReceivers:function(e,t){if(t.receiveShadow?(this._receivers.push(t),t.material.set("shadowEnabled",1),t.material.set("pcfKernel",this.kernelPCF)):t.material.set("shadowEnabled",0),this.softShadow===yt.VSM)t.material.define("fragment","USE_VSM"),t.material.undefine("fragment","PCF_KERNEL_SIZE");else{t.material.undefine("fragment","USE_VSM");var r=this.kernelPCF;r&&r.length?t.material.define("fragment","PCF_KERNEL_SIZE",r.length/2):t.material.undefine("fragment","PCF_KERNEL_SIZE")}},_update:function(e,t){var r=this;t.traverse(function(a){a.isRenderable()&&r._updateReceivers(e,a)});for(var i=0;i<t.lights.length;i++){var n=t.lights[i];n.castShadow&&!n.invisible&&this._lightsCastShadow.push(n)}},_renderShadowPass:function(e,t,r,i){for(var n in this._shadowMapNumber)this._shadowMapNumber[n]=0;this._lightsCastShadow.length=0,this._receivers.length=0;var a=e.gl;if(i||t.update(),r&&r.update(),t.updateLights(),this._update(e,t),!this._lightsCastShadow.length&&this._lastRenderNotCastShadow)return;this._lastRenderNotCastShadow=this._lightsCastShadow===0,a.enable(a.DEPTH_TEST),a.depthMask(!0),a.disable(a.BLEND),a.clearColor(1,1,1,1);for(var o=[],s=[],l=[],u=[],h=[],c=[],d,f=0;f<this._lightsCastShadow.length;f++){var v=this._lightsCastShadow[f];if(v.type==="DIRECTIONAL_LIGHT"){if(d){console.warn("Only one direectional light supported with shadow cascade");continue}if(v.shadowCascade>4){console.warn("Support at most 4 cascade");continue}v.shadowCascade>1&&(d=v),this.renderDirectionalLightShadow(e,t,r,v,h,u,l)}else v.type==="SPOT_LIGHT"?this.renderSpotLightShadow(e,t,v,s,o):v.type==="POINT_LIGHT"&&this.renderPointLightShadow(e,t,v,c);this._shadowMapNumber[v.type]++}for(var p in this._shadowMapNumber)for(var _=this._shadowMapNumber[p],m=p+"_SHADOWMAP_COUNT",f=0;f<this._receivers.length;f++){var y=this._receivers[f],g=y.material;g.fragmentDefines[m]!==_&&(_>0?g.define("fragment",m,_):g.isDefined("fragment",m)&&g.undefine("fragment",m))}for(var f=0;f<this._receivers.length;f++){var y=this._receivers[f],g=y.material;d?g.define("fragment","SHADOW_CASCADE",d.shadowCascade):g.undefine("fragment","SHADOW_CASCADE")}var x=t.shadowUniforms;function E(O){return O.height}if(l.length>0){var S=l.map(E);if(x.directionalLightShadowMaps={value:l,type:"tv"},x.directionalLightMatrices={value:u,type:"m4v"},x.directionalLightShadowMapSizes={value:S,type:"1fv"},d){var w=h.slice(),b=h.slice();w.pop(),b.shift(),w.reverse(),b.reverse(),u.reverse(),x.shadowCascadeClipsNear={value:w,type:"1fv"},x.shadowCascadeClipsFar={value:b,type:"1fv"}}}if(o.length>0){var C=o.map(E),x=t.shadowUniforms;x.spotLightShadowMaps={value:o,type:"tv"},x.spotLightMatrices={value:s,type:"m4v"},x.spotLightShadowMapSizes={value:C,type:"1fv"}}c.length>0&&(x.pointLightShadowMaps={value:c,type:"tv"})},renderDirectionalLightShadow:function(){var e=new ia,t=new V,r=new Ge,i=new V,n=new V,a=new V,o=new V;return function(s,l,u,h,c,d,f){var v=this._getDepthMaterial(h),p={getMaterial:function(pe){return pe.shadowDepthMaterial||v},isMaterialChanged:Mo,getUniform:bn,ifRender:function(pe){return pe.castShadow},sortCompare:Nr.opaqueSortCompare};if(!l.viewBoundingBoxLastFrame.isFinite()){var _=l.getBoundingBox();l.viewBoundingBoxLastFrame.copy(_).applyTransform(u.viewMatrix)}var m=Math.min(-l.viewBoundingBoxLastFrame.min.z,u.far),y=Math.max(-l.viewBoundingBoxLastFrame.max.z,u.near),g=this._getDirectionalLightCamera(h,l,u),x=a.array;o.copy(g.projectionMatrix),L.invert(n.array,g.worldTransform.array),L.multiply(n.array,n.array,u.worldTransform.array),L.multiply(x,o.array,n.array);for(var E=[],S=u instanceof Pe,w=(u.near+u.far)/(u.near-u.far),b=2*u.near*u.far/(u.near-u.far),C=0;C<=h.shadowCascade;C++){var O=y*Math.pow(m/y,C/h.shadowCascade),M=y+(m-y)*C/h.shadowCascade,B=O*h.cascadeSplitLogFactor+M*(1-h.cascadeSplitLogFactor);E.push(B),c.push(-(-B*w+b)/-B)}var F=this._getTexture(h,h.shadowCascade);f.push(F);var R=s.viewport,H=s.gl;this._frameBuffer.attach(F),this._frameBuffer.bind(s),H.clear(H.COLOR_BUFFER_BIT|H.DEPTH_BUFFER_BIT);for(var C=0;C<h.shadowCascade;C++){var U=E[C],q=E[C+1];S?L.perspective(t.array,u.fov/180*Math.PI,u.aspect,U,q):L.ortho(t.array,u.left,u.right,u.bottom,u.top,U,q),e.setFromProjection(t),e.getTransformedBoundingBox(r,n),r.applyProjection(o);var I=r.min.array,fe=r.max.array;I[0]=Math.max(I[0],-1),I[1]=Math.max(I[1],-1),fe[0]=Math.min(fe[0],1),fe[1]=Math.min(fe[1],1),i.ortho(I[0],fe[0],I[1],fe[1],1,-1),g.projectionMatrix.multiplyLeft(i);var k=h.shadowResolution||512;s.setViewport((h.shadowCascade-C-1)*k,0,k,k,1);var xe=l.updateRenderList(g);s.renderPass(xe.opaque,g,p),this.softShadow===yt.VSM&&this._gaussianFilter(s,F,F.width);var oe=new V;oe.copy(g.viewMatrix).multiplyLeft(g.projectionMatrix),d.push(oe.array),g.projectionMatrix.copy(o)}this._frameBuffer.unbind(s),s.setViewport(R)}}(),renderSpotLightShadow:function(e,t,r,i,n){var a=this._getTexture(r),o=this._getSpotLightCamera(r),s=e.gl;this._frameBuffer.attach(a),this._frameBuffer.bind(e),s.clear(s.COLOR_BUFFER_BIT|s.DEPTH_BUFFER_BIT);var l=this._getDepthMaterial(r),u={getMaterial:function(d){return d.shadowDepthMaterial||l},isMaterialChanged:Mo,getUniform:bn,ifRender:function(d){return d.castShadow},sortCompare:Nr.opaqueSortCompare},h=t.updateRenderList(o);e.renderPass(h.opaque,o,u),this._frameBuffer.unbind(e),this.softShadow===yt.VSM&&this._gaussianFilter(e,a,a.width);var c=new V;c.copy(o.worldTransform).invert().multiplyLeft(o.projectionMatrix),n.push(a),i.push(c.array)},renderPointLightShadow:function(e,t,r,i){var n=this._getTexture(r),a=e.gl;i.push(n);var o=this._getDepthMaterial(r),s={getMaterial:function(y){return y.shadowDepthMaterial||o},getUniform:bn,sortCompare:Nr.opaqueSortCompare},l={px:[],py:[],pz:[],nx:[],ny:[],nz:[]},u=new Ge,h=r.getWorldPosition().array,c=new Ge,d=r.range;c.min.setArray(h),c.max.setArray(h);var f=new D(d,d,d);c.max.add(f),c.min.sub(f);var v={px:!1,py:!1,pz:!1,nx:!1,ny:!1,nz:!1};t.traverse(function(y){if(y.isRenderable()&&y.castShadow){var g=y.geometry;if(!g.boundingBox){for(var x=0;x<Pt.length;x++)l[Pt[x]].push(y);return}if(u.transformFrom(g.boundingBox,y.worldTransform),!u.intersectBoundingBox(c))return;u.updateVertices();for(var x=0;x<Pt.length;x++)v[Pt[x]]=!1;for(var x=0;x<8;x++){var E=u.vertices[x],S=E[0]-h[0],w=E[1]-h[1],b=E[2]-h[2],C=Math.abs(S),O=Math.abs(w),M=Math.abs(b);C>O?C>M?v[S>0?"px":"nx"]=!0:v[b>0?"pz":"nz"]=!0:O>M?v[w>0?"py":"ny"]=!0:v[b>0?"pz":"nz"]=!0}for(var x=0;x<Pt.length;x++)v[Pt[x]]&&l[Pt[x]].push(y)}});for(var p=0;p<6;p++){var _=Pt[p],m=this._getPointLightCamera(r,_);this._frameBuffer.attach(n,a.COLOR_ATTACHMENT0,a.TEXTURE_CUBE_MAP_POSITIVE_X+p),this._frameBuffer.bind(e),a.clear(a.COLOR_BUFFER_BIT|a.DEPTH_BUFFER_BIT),e.renderPass(l[_],m,s)}this._frameBuffer.unbind(e)},_getDepthMaterial:function(e){var t=this._lightMaterials[e.__uid__],r=e.type==="POINT_LIGHT";if(!t){var i=r?"clay.sm.distance.":"clay.sm.depth.";t=new Mt({precision:this.precision,shader:new P(P.source(i+"vertex"),P.source(i+"fragment"))}),this._lightMaterials[e.__uid__]=t}return e.shadowSlopeScale!=null&&t.setUniform("slopeScale",e.shadowSlopeScale),e.shadowBias!=null&&t.setUniform("bias",e.shadowBias),this.softShadow===yt.VSM?t.define("fragment","USE_VSM"):t.undefine("fragment","USE_VSM"),r&&(t.set("lightPosition",e.getWorldPosition().array),t.set("range",e.range)),t},_gaussianFilter:function(e,t,r){var i={width:r,height:r,type:j.FLOAT},n=this._texturePool.get(i);this._frameBuffer.attach(n),this._frameBuffer.bind(e),this._gaussianPassH.setUniform("texture",t),this._gaussianPassH.setUniform("textureWidth",r),this._gaussianPassH.render(e),this._frameBuffer.attach(t),this._gaussianPassV.setUniform("texture",n),this._gaussianPassV.setUniform("textureHeight",r),this._gaussianPassV.render(e),this._frameBuffer.unbind(e),this._texturePool.put(n)},_getTexture:function(e,t){var r=e.__uid__,i=this._textures[r],n=e.shadowResolution||512;return t=t||1,i||(e.type==="POINT_LIGHT"?i=new Ur:i=new ae,i.width=n*t,i.height=n,this.softShadow===yt.VSM?(i.type=j.FLOAT,i.anisotropic=4):(i.minFilter=A.NEAREST,i.magFilter=A.NEAREST,i.useMipmap=!1),this._textures[r]=i),i},_getPointLightCamera:function(e,t){this._lightCameras.point||(this._lightCameras.point={px:new Pe,nx:new Pe,py:new Pe,ny:new Pe,pz:new Pe,nz:new Pe});var r=this._lightCameras.point[t];switch(r.far=e.range,r.fov=90,r.position.set(0,0,0),t){case"px":r.lookAt(D.POSITIVE_X,D.NEGATIVE_Y);break;case"nx":r.lookAt(D.NEGATIVE_X,D.NEGATIVE_Y);break;case"py":r.lookAt(D.POSITIVE_Y,D.POSITIVE_Z);break;case"ny":r.lookAt(D.NEGATIVE_Y,D.NEGATIVE_Z);break;case"pz":r.lookAt(D.POSITIVE_Z,D.NEGATIVE_Y);break;case"nz":r.lookAt(D.NEGATIVE_Z,D.NEGATIVE_Y);break}return e.getWorldPosition(r.position),r.update(),r},_getDirectionalLightCamera:function(){var e=new V,t=new Ge,r=new Ge;return function(i,n,a){this._lightCameras.directional||(this._lightCameras.directional=new zr);var o=this._lightCameras.directional;t.copy(n.viewBoundingBoxLastFrame),t.intersection(a.frustum.boundingBox),o.position.copy(t.min).add(t.max).scale(.5).transformMat4(a.worldTransform),o.rotation.copy(i.rotation),o.scale.copy(i.scale),o.updateWorldTransform(),V.invert(e,o.worldTransform),V.multiply(e,e,a.worldTransform),r.copy(t).applyTransform(e);var s=r.min.array,l=r.max.array;return o.position.set((s[0]+l[0])/2,(s[1]+l[1])/2,l[2]).transformMat4(o.worldTransform),o.near=0,o.far=-s[2]+l[2],isNaN(this.lightFrustumBias)?o.far*=4:o.far+=this.lightFrustumBias,o.left=s[0],o.right=l[0],o.top=l[1],o.bottom=s[1],o.update(!0),o}}(),_getSpotLightCamera:function(e){this._lightCameras.spot||(this._lightCameras.spot=new Pe);var t=this._lightCameras.spot;return t.fov=e.penumbraAngle*2,t.far=e.range,t.worldTransform.copy(e.worldTransform),t.updateProjectionMatrix(),L.invert(t.viewMatrix.array,t.worldTransform.array),t},dispose:function(e){var t=e.gl||e;this._frameBuffer&&this._frameBuffer.dispose(t);for(var r in this._textures)this._textures[r].dispose(t);this._texturePool.clear(e.gl),this._depthMaterials={},this._distanceMaterials={},this._textures={},this._lightCameras={},this._shadowMapNumber={POINT_LIGHT:0,DIRECTIONAL_LIGHT:0,SPOT_LIGHT:0},this._meshMaterials={};for(var i=0;i<this._receivers.length;i++){var n=this._receivers[i];if(n.material){var a=n.material;a.undefine("fragment","POINT_LIGHT_SHADOW_COUNT"),a.undefine("fragment","DIRECTIONAL_LIGHT_SHADOW_COUNT"),a.undefine("fragment","AMBIENT_LIGHT_SHADOW_COUNT"),a.set("shadowEnabled",0)}}this._receivers=[],this._lightsCastShadow=[]}});yt.VSM=1;yt.PCF=2;var ad=yt,od=Qe.extend(function(){return{name:"",inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return i.width instanceof Function?o=i.width.call(this,t):o=i.width,i.height instanceof Function?s=i.height.call(this,t):s=i.height,(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),n.width=o,n.height=s,n},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var r=this.outputs[t];if(!!r)return this._rendered?r.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(r.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},link:function(e,t,r){this.inputLinks[e]={node:t,pin:r},t.outputLinks[r]||(t.outputLinks[r]=[]),t.outputLinks[r].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){this._rendering=!0;for(var t in this.inputLinks){var r=this.inputLinks[t];r.node.updateReference(r.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){this._rendered=!1;for(var e in this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)if(this._outputReferences[e]>0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}}}),kr=od,sd=Qe.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e=="string"&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(!!t.inputs){for(var r in t.inputs)if(!!t.inputs[r]){if(t.pass&&!t.pass.material.isUniformEnabled(r)){console.warn("Pin "+t.name+"."+r+" not used.");continue}var i=t.inputs[r],n=this.findPin(i);n?t.link(r,n.node,n.pin):console.warn(typeof i=="string"?"Node "+i+" not exist":"Pin of "+i.node+"."+i.pin+" not exist")}}}},findPin:function(e){var t;if((typeof e=="string"||e instanceof kr)&&(e={node:e}),typeof e.node=="string")for(var r=0;r<this.nodes.length;r++){var i=this.nodes[r];i.name===e.node&&(t=i)}else t=e.node;if(t){var n=e.pin;if(n||t.outputs&&(n=Object.keys(t.outputs)[0]),t.outputs[n])return{node:t,pin:n}}}}),Co=sd,ld=Co.extend(function(){return{_outputs:[],_texturePool:new Ds,_frameBuffer:new He({depthBuffer:!1})}},{addNode:function(e){Co.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var r=0;r<this.nodes.length;r++)this.nodes[r].outputs||this._outputs.push(this.nodes[r])}for(var r=0;r<this.nodes.length;r++)this.nodes[r].beforeFrame();for(var r=0;r<this._outputs.length;r++)this._outputs[r].updateReference();for(var r=0;r<this._outputs.length;r++)this._outputs[r].render(e,t);for(var r=0;r<this.nodes.length;r++)this.nodes[r].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),ud=ld,hd=kr.extend({name:"scene",scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new He},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger("beforerender");var r;if(!this.outputs)r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var i=this.frameBuffer;for(var n in this.outputs){var a=this.updateParameter(n,e),o=this.outputs[n],s=this._compositor.allocateTexture(a);this._outputTextures[n]=s;var l=o.attachment||t.COLOR_ATTACHMENT0;typeof l=="string"&&(l=t[l]),i.attach(s,l)}i.bind(e);var u=e.getGLExtension("EXT_draw_buffers");if(u){var h=[];for(var l in this.outputs)l=parseInt(l),l>=t.COLOR_ATTACHMENT0&&l<=t.COLOR_ATTACHMENT0+8&&h.push(l);u.drawBuffersEXT(h)}e.saveClear(),e.clearBit=A.DEPTH_BUFFER_BIT|A.COLOR_BUFFER_BIT,r=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),i.unbind(e)}this.trigger("afterrender",r),this._rendering=!1,this._rendered=!0}}),cd=hd,fd=kr.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),dd=fd,vd=kr.extend(function(){return{name:"",inputs:{},outputs:null,shader:"",inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new Xe({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger("beforerender",e),this._rendering=!0;var r=e.gl;for(var i in this.inputLinks){var n=this.inputLinks[i],a=n.node.getOutput(e,n.pin);this.pass.setUniform(i,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var l=this.updateParameter(s,e);isNaN(l.width)&&this.updateParameter(s,e);var u=this.outputs[s],h=this._compositor.allocateTexture(l);this._outputTextures[s]=h;var c=u.attachment||r.COLOR_ATTACHMENT0;typeof c=="string"&&(c=r[c]),o[c]=h}this._compositor.getFrameBuffer().bind(e);for(var c in o)this._compositor.getFrameBuffer().attach(o[c],c);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var i in this.inputLinks){var n=this.inputLinks[i];n.node.removeReference(n.pin)}this._rendering=!1,this._rendered=!0,this.trigger("afterrender",e)},updateParameter:function(e,t){var r=this.outputs[e],i=r.parameters,n=r._parametersCopy;if(n||(n=r._parametersCopy={}),i)for(var a in i)a!=="width"&&a!=="height"&&(n[a]=i[a]);var o,s;return typeof i.width=="function"?o=i.width.call(this,t):o=i.width,typeof i.height=="function"?s=i.height.call(this,t):s=i.height,o=Math.ceil(o),s=Math.ceil(s),(n.width!==o||n.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),n.width=o,n.height=s,n},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define("fragment",e,t)},undefine:function(e){this.pass.material.undefine("fragment",e)},removeReference:function(e){if(this._outputReferences[e]--,this._outputReferences[e]===0){var t=this.outputs[e];t.keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e])}},clear:function(){kr.prototype.clear.call(this),this.pass.material.disableTexturesAll()}}),pd=vd,_d=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,Ns=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,md=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,Is=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,gd=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,Os=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Bs=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Fs=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Us=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,Hs=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,yd=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,zs=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,Vs=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function xd(e){e.import(_d),e.import(Ns),e.import(md),e.import(Is),e.import(gd),e.import(Os),e.import(Bs),e.import(Fs),e.import(Us),e.import(Hs),e.import(yd),e.import(zs),e.import(Vs)}xd(P);var Td=/^#source\((.*?)\)/;function Ed(e,t){var r=new ud;t=t||{};var i={textures:{},parameters:{}},n=function(s,l){for(var u=0;u<e.nodes.length;u++){var h=e.nodes[u],c=Sd(h,i,t);c&&r.addNode(c)}};for(var a in e.parameters){var o=e.parameters[a];i.parameters[a]=ca(o)}return wd(e,i,t,function(s){i.textures=s,n()}),r}function Sd(e,t,r){var i=e.type||"filter",n,a,o;if(i==="filter"){var s=e.shader.trim(),l=Td.exec(s);if(l?n=P.source(l[1].trim()):s.charAt(0)==="#"&&(n=t.shaders[s.substr(1)]),n||(n=s),!n)return}if(e.inputs){a={};for(var u in e.inputs)typeof e.inputs[u]=="string"?a[u]=e.inputs[u]:a[u]={node:e.inputs[u].node,pin:e.inputs[u].pin}}if(e.outputs){o={};for(var u in e.outputs){var h=e.outputs[u];o[u]={},h.attachment!=null&&(o[u].attachment=h.attachment),h.keepLastFrame!=null&&(o[u].keepLastFrame=h.keepLastFrame),h.outputLastFrame!=null&&(o[u].outputLastFrame=h.outputLastFrame),h.parameters&&(o[u].parameters=ca(h.parameters))}}var c;if(i==="scene"?c=new cd({name:e.name,scene:r.scene,camera:r.camera,outputs:o}):i==="texture"?c=new dd({name:e.name,outputs:o}):c=new pd({name:e.name,shader:n,inputs:a,outputs:o}),c){if(e.parameters)for(var u in e.parameters){var d=e.parameters[u];typeof d=="string"?(d=d.trim(),d.charAt(0)==="#"?d=t.textures[d.substr(1)]:c.on("beforerender",Md(u,ks(d)))):typeof d=="function"&&c.on("beforerender",d),c.setParameter(u,d)}if(e.defines&&c.pass)for(var u in e.defines){var d=e.defines[u];c.pass.material.define("fragment",u,d)}}return c}function bd(e,t){return e}function Ad(e,t){return t}function ca(e){var t={};if(!e)return t;["type","minFilter","magFilter","wrapS","wrapT","flipY","useMipmap"].forEach(function(i){var n=e[i];n!=null&&(typeof n=="string"&&(n=j[n]),t[i]=n)});var r=e.scale||1;return["width","height"].forEach(function(i){if(e[i]!=null){var n=e[i];typeof n=="string"?(n=n.trim(),t[i]=Cd(i,ks(n),r)):t[i]=n}}),t.width||(t.width=bd),t.height||(t.height=Ad),e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function wd(e,t,r,i){if(!e.textures){i({});return}var n={},a=0,o=!1,s=r.textureRootPath;Ie.each(e.textures,function(l,u){var h,c=l.path,d=ca(l.parameters);if(Array.isArray(c)&&c.length===6)s&&(c=c.map(function(f){return Ie.relative2absolute(f,s)})),h=new Ur(d);else if(typeof c=="string")s&&(c=Ie.relative2absolute(c,s)),h=new ae(d);else return;h.load(c),a++,h.once("success",function(){n[u]=h,a--,a===0&&(i(n),o=!0)})}),a===0&&!o&&i(n)}function Md(e,t){return function(r){var i=r.getDevicePixelRatio(),n=r.getWidth(),a=r.getHeight(),o=t(n,a,i);this.setParameter(e,o)}}function Cd(e,t,r){return r=r||1,function(i){var n=i.getDevicePixelRatio(),a=i.getWidth()*r,o=i.getHeight()*r;return t(a,o,n)}}function ks(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var r=new Function("width","height","dpr","return "+t[1]);return r(1,1),r}catch{throw new Error("Invalid expression.")}}function gr(e,t){for(var r=0,i=1/t,n=e;n>0;)r=r+i*(n%t),n=Math.floor(n/t),i=i/t;return r}var Ld=`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`;P.import(Ld);function Gs(e){for(var t=new Uint8Array(e*e*4),r=0,i=new D,n=0;n<e;n++)for(var a=0;a<e;a++)i.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[r++]=(i.x*.5+.5)*255,t[r++]=(i.y*.5+.5)*255,t[r++]=0,t[r++]=255;return t}function Lo(e){return new ae({pixels:Gs(e),wrapS:j.REPEAT,wrapT:j.REPEAT,width:e,height:e})}function Rd(e,t,r){var i=new Float32Array(e*3);t=t||0;for(var n=0;n<e;n++){var a=gr(n+t,2)*(r?1:2)*Math.PI,o=gr(n+t,3)*Math.PI,s=Math.random(),l=Math.cos(a)*Math.sin(o)*s,u=Math.cos(o)*s,h=Math.sin(a)*Math.sin(o)*s;i[n*3]=l,i[n*3+1]=u,i[n*3+2]=h}return i}function Ct(e){e=e||{},this._ssaoPass=new Xe({fragment:P.source("ecgl.ssao.estimate")}),this._blurPass=new Xe({fragment:P.source("ecgl.ssao.blur")}),this._framebuffer=new He({depthBuffer:!1}),this._ssaoTexture=new ae,this._blurTexture=new ae,this._blurTexture2=new ae,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter("radius",e.radius),e.power!=null&&this.setParameter("power",e.power),this._normalTex||(this._ssaoPass.material.disableTexture("normalTex"),this._blurPass.material.disableTexture("normalTex")),this._depthTex||this._blurPass.material.disableTexture("depthTex"),this._blurPass.material.setUniform("normalTex",this._normalTex),this._blurPass.material.setUniform("depthTex",this._depthTex)}Ct.prototype.setDepthTexture=function(e){this._depthTex=e};Ct.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?"enableTexture":"disableTexture"]("normalTex"),this.setKernelSize(this._kernelSize)};Ct.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform("kernel",this._kernels[r%this._kernels.length]),a.setUniform("depthTex",this._depthTex),this._normalTex!=null&&a.setUniform("normalTex",this._normalTex),a.setUniform("depthTexSize",[this._depthTex.width,this._depthTex.height]);var s=new V;V.transpose(s,t.worldTransform),a.setUniform("projection",t.projectionMatrix.array),a.setUniform("projectionInv",t.invProjectionMatrix.array),a.setUniform("viewInverseTranspose",s.array);var l=this._ssaoTexture,u=this._blurTexture,h=this._blurTexture2;l.width=i/2,l.height=n/2,u.width=i,u.height=n,h.width=i,h.height=n,this._framebuffer.attach(l),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform("textureSize",[i/2,n/2]),o.setUniform("projection",t.projectionMatrix.array),this._framebuffer.attach(u),o.setUniform("direction",0),o.setUniform("ssaoTexture",l),o.render(e),this._framebuffer.attach(h),o.setUniform("textureSize",[i,n]),o.setUniform("direction",1),o.setUniform("ssaoTexture",u),o.render(e),this._framebuffer.unbind(e);var c=e.clearColor;e.gl.clearColor(c[0],c[1],c[2],c[3])};Ct.prototype.getTargetTexture=function(){return this._blurTexture2};Ct.prototype.setParameter=function(e,t){e==="noiseTexSize"?this.setNoiseSize(t):e==="kernelSize"?this.setKernelSize(t):e==="intensity"?this._ssaoPass.material.set("intensity",t):this._ssaoPass.setUniform(e,t)};Ct.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define("fragment","KERNEL_SIZE",e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=Rd(e,t*e,!!this._normalTex)};Ct.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform("noiseTex");t?(t.data=Gs(e),t.width=t.height=e,t.dirty()):(t=Lo(e),this._ssaoPass.setUniform("noiseTex",Lo(e))),this._ssaoPass.setUniform("noiseTexSize",[e,e])};Ct.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)};var Pd=`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`;P.import(Pd);function Lt(e){e=e||{},this._ssrPass=new Xe({fragment:P.source("ecgl.ssr.main"),clearColor:[0,0,0,0]}),this._blurPass1=new Xe({fragment:P.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blurPass2=new Xe({fragment:P.source("ecgl.ssr.blur"),clearColor:[0,0,0,0]}),this._blendPass=new Xe({fragment:P.source("clay.compositor.blend")}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture(["texture1","texture2"]),this._ssrPass.setUniform("gBufferTexture1",e.normalTexture),this._ssrPass.setUniform("gBufferTexture2",e.depthTexture),this._blurPass1.setUniform("gBufferTexture1",e.normalTexture),this._blurPass1.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.setUniform("gBufferTexture1",e.normalTexture),this._blurPass2.setUniform("gBufferTexture2",e.depthTexture),this._blurPass2.material.define("fragment","VERTICAL"),this._blurPass2.material.define("fragment","BLEND"),this._ssrTexture=new ae({type:j.HALF_FLOAT}),this._texture2=new ae({type:j.HALF_FLOAT}),this._texture3=new ae({type:j.HALF_FLOAT}),this._prevTexture=new ae({type:j.HALF_FLOAT}),this._currentTexture=new ae({type:j.HALF_FLOAT}),this._frameBuffer=new He({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define("fragment","SAMPLE_PER_FRAME",this._samplePerFrame),this._ssrPass.material.define("fragment","TOTAL_SAMPLES",this._totalSamples),this._downScale=1}Lt.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set("specularCubemap",e),this._ssrPass.material.set("specularIntensity",t);var r=e&&t;this._ssrPass.material[r?"enableTexture":"disableTexture"]("specularCubemap")};Lt.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,l=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=n/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=l.width=n,s.height=l.height=a;var u=this._frameBuffer,h=this._ssrPass,c=this._blurPass1,d=this._blurPass2,f=this._blendPass,v=new V,p=new V;V.transpose(v,t.worldTransform),V.transpose(p,t.viewMatrix),h.setUniform("sourceTexture",r),h.setUniform("projection",t.projectionMatrix.array),h.setUniform("projectionInv",t.invProjectionMatrix.array),h.setUniform("toViewSpace",v.array),h.setUniform("toWorldSpace",p.array),h.setUniform("nearZ",t.near);var _=i/this._totalSamples*this._samplePerFrame;if(h.setUniform("jitterOffset",_),h.setUniform("sampleOffset",i*this._samplePerFrame),c.setUniform("textureSize",[o.width,o.height]),d.setUniform("textureSize",[n,a]),d.setUniform("sourceTexture",r),c.setUniform("projection",t.projectionMatrix.array),d.setUniform("projection",t.projectionMatrix.array),u.attach(o),u.bind(e),h.render(e),this._physicallyCorrect&&(u.attach(this._currentTexture),f.setUniform("texture1",this._prevTexture),f.setUniform("texture2",o),f.material.set({weight1:i>=1?.95:0,weight2:i>=1?.05:1}),f.render(e)),u.attach(s),c.setUniform("texture",this._physicallyCorrect?this._currentTexture:o),c.render(e),u.attach(l),d.setUniform("texture",s),d.render(e),u.unbind(e),this._physicallyCorrect){var m=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=m}};Lt.prototype.getTargetTexture=function(){return this._texture3};Lt.prototype.setParameter=function(e,t){e==="maxIteration"?this._ssrPass.material.define("fragment","MAX_ITERATION",t):this._ssrPass.setUniform(e,t)};Lt.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||(this._normalDistribution=Si.generateNormalDistribution(64,this._totalSamples)),this._ssrPass.material.define("fragment","PHYSICALLY_CORRECT"),this._ssrPass.material.set("normalDistribution",this._normalDistribution),this._ssrPass.material.set("normalDistributionSize",[64,this._totalSamples])):this._ssrPass.material.undefine("fragment","PHYSICALLY_CORRECT"),this._physicallyCorrect=e};Lt.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture("ssaoTex"),t.material.set("ssaoTex",e)):t.material.disableTexture("ssaoTex")};Lt.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0};Lt.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};var Ro=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925],Dd=`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`;P.import(Dd);function An(e,t,r,i,n){var a=e.gl;t.setUniform(a,"1i",r,n),a.activeTexture(a.TEXTURE0+n),i.isRenderable()?i.bind(e):i.unbind(e)}function Nd(e,t,r,i,n){var a,o,s,l,u=e.gl;return function(h,c,d){if(!(l&&l.material===h.material)){var f=h.material,v=h.__program,p=f.get("roughness");p==null&&(p=1);var _=f.get("normalMap")||t,m=f.get("roughnessMap"),y=f.get("bumpMap"),g=f.get("uvRepeat"),x=f.get("uvOffset"),E=f.get("detailUvRepeat"),S=f.get("detailUvOffset"),w=!!y&&f.isTextureEnabled("bumpMap"),b=!!m&&f.isTextureEnabled("roughnessMap"),C=f.isDefined("fragment","DOUBLE_SIDED");y=y||r,m=m||i,d!==c?(c.set("normalMap",_),c.set("bumpMap",y),c.set("roughnessMap",m),c.set("useBumpMap",w),c.set("useRoughnessMap",b),c.set("doubleSide",C),g!=null&&c.set("uvRepeat",g),x!=null&&c.set("uvOffset",x),E!=null&&c.set("detailUvRepeat",E),S!=null&&c.set("detailUvOffset",S),c.set("roughness",p)):(v.setUniform(u,"1f","roughness",p),a!==_&&An(e,v,"normalMap",_,0),o!==y&&y&&An(e,v,"bumpMap",y,1),s!==m&&m&&An(e,v,"roughnessMap",m,2),g!=null&&v.setUniform(u,"2f","uvRepeat",g),x!=null&&v.setUniform(u,"2f","uvOffset",x),E!=null&&v.setUniform(u,"2f","detailUvRepeat",E),S!=null&&v.setUniform(u,"2f","detailUvOffset",S),v.setUniform(u,"1i","useBumpMap",+w),v.setUniform(u,"1i","useRoughnessMap",+b),v.setUniform(u,"1i","doubleSide",+C)),a=_,o=y,s=m,l=h}}}function Tr(e){this._depthTex=new ae({format:j.DEPTH_COMPONENT,type:j.UNSIGNED_INT}),this._normalTex=new ae({type:j.HALF_FLOAT}),this._framebuffer=new He,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,He.DEPTH_ATTACHMENT),this._normalMaterial=new Mt({shader:new P(P.source("ecgl.normal.vertex"),P.source("ecgl.normal.fragment"))}),this._normalMaterial.enableTexture(["normalMap","bumpMap","roughnessMap"]),this._defaultNormalMap=jt.createBlank("#000"),this._defaultBumpMap=jt.createBlank("#000"),this._defaultRoughessMap=jt.createBlank("#000"),this._debugPass=new Xe({fragment:P.source("clay.compositor.output")}),this._debugPass.setUniform("texture",this._normalTex),this._debugPass.material.undefine("fragment","OUTPUT_ALPHA")}Tr.prototype.getDepthTexture=function(){return this._depthTex};Tr.prototype.getNormalTexture=function(){return this._normalTex};Tr.prototype.update=function(e,t,r){var i=e.getWidth(),n=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=i,a.height=n,o.width=i,o.height=n;var l=t.getRenderList(r).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(l,r,{getMaterial:function(){return s},ifRender:function(u){return u.renderNormal},beforeRender:Nd(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)};Tr.prototype.renderDebug=function(e){this._debugPass.render(e)};Tr.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function Xr(e){e=e||{},this._edgePass=new Xe({fragment:P.source("ecgl.edge")}),this._edgePass.setUniform("normalTexture",e.normalTexture),this._edgePass.setUniform("depthTexture",e.depthTexture),this._targetTexture=new ae({type:j.HALF_FLOAT}),this._frameBuffer=new He,this._frameBuffer.attach(this._targetTexture)}Xr.prototype.update=function(e,t,r,i){var n=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=n,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform("projectionInv",t.invProjectionMatrix.array),this._edgePass.setUniform("textureSize",[n,a]),this._edgePass.setUniform("texture",r),this._edgePass.render(e),s.unbind(e)};Xr.prototype.getTargetTexture=function(){return this._targetTexture};Xr.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)};Xr.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};var Id={type:"compositor",nodes:[{name:"source",type:"texture",outputs:{color:{}}},{name:"source_half",shader:"#source(clay.compositor.downsample)",inputs:{texture:"source"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bright",shader:"#source(clay.compositor.bright)",inputs:{texture:"source_half"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{threshold:2,scale:4,textureSize:"expr([width * 1.0 / 2, height / 2])"}},{name:"bright_downsample_4",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 2, height / 2] )"}},{name:"bright_downsample_8",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 4, height / 4] )"}},{name:"bright_downsample_16",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 8, height / 8] )"}},{name:"bright_downsample_32",shader:"#source(clay.compositor.downsample)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 32)",height:"expr(height * 1.0 / 32)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0 / 16, height / 16] )"}},{name:"bright_upsample_16_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_32"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 32, height / 32] )"}},{name:"bright_upsample_16_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_16_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 16)",height:"expr(height * 1.0 / 16)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_16"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 16, height * 1.0 / 16] )"}},{name:"bright_upsample_8_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_8_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_8_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_8_blur_v",texture2:"bright_upsample_16_blur_v"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 8)",height:"expr(height * 1.0 / 8)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_4_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_8"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 8, height * 1.0 / 8] )"}},{name:"bright_upsample_4_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_4_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_4_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_4_blur_v",texture2:"bright_upsample_8_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 4)",height:"expr(height * 1.0 / 4)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_2_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_downsample_4"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 4, height * 1.0 / 4] )"}},{name:"bright_upsample_2_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_2_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_2_blend",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_2_blur_v",texture2:"bright_upsample_4_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0 / 2)",height:"expr(height * 1.0 / 2)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"bright_upsample_full_blur_h",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:0,textureSize:"expr( [width * 1.0 / 2, height * 1.0 / 2] )"}},{name:"bright_upsample_full_blur_v",shader:"#source(clay.compositor.gaussian_blur)",inputs:{texture:"bright_upsample_full_blur_h"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{blurSize:1,blurDir:1,textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"bloom_composite",shader:"#source(clay.compositor.blend)",inputs:{texture1:"bright_upsample_full_blur_v",texture2:"bright_upsample_2_blend"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{weight1:.3,weight2:.7}},{name:"coc",shader:"#source(ecgl.dof.coc)",outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{focalDist:50,focalRange:30}},{name:"dof_far_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"}},{name:"dof_near_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"source",coc:"coc"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_NEARFIELD:null}},{name:"dof_coc_blur",shader:"#source(ecgl.dof.diskBlur)",inputs:{texture:"coc"},outputs:{color:{parameters:{minFilter:"NEAREST",magFilter:"NEAREST",width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},parameters:{textureSize:"expr( [width * 1.0, height * 1.0] )"},defines:{BLUR_COC:null}},{name:"dof_composite",shader:"#source(ecgl.dof.composite)",inputs:{original:"source",blurred:"dof_far_blur",nearfield:"dof_near_blur",coc:"coc",nearcoc:"dof_coc_blur"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)",type:"HALF_FLOAT"}}}},{name:"composite",shader:"#source(clay.compositor.hdr.composite)",inputs:{texture:"source",bloom:"bloom_composite"},outputs:{color:{parameters:{width:"expr(width * 1.0)",height:"expr(height * 1.0)"}}},defines:{}},{name:"FXAA",shader:"#source(clay.compositor.fxaa)",inputs:{texture:"composite"}}]},Od=`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`,Bd=`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`;P.import(Ns);P.import(Is);P.import(Os);P.import(Bs);P.import(Fs);P.import(Us);P.import(Hs);P.import(zs);P.import(Vs);P.import(Od);P.import(Bd);function Ws(e,t){return{color:{parameters:{width:e,height:t}}}}var fa=["composite","FXAA"];function J(){this._width,this._height,this._dpr,this._sourceTexture=new ae({type:j.HALF_FLOAT}),this._depthTexture=new ae({format:j.DEPTH_COMPONENT,type:j.UNSIGNED_INT}),this._framebuffer=new He,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,He.DEPTH_ATTACHMENT),this._normalPass=new Tr,this._compositor=Ed(Id);var e=this._compositor.getNodeByName("source");e.texture=this._sourceTexture;var t=this._compositor.getNodeByName("coc");this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName("composite"),this._fxaaNode=this._compositor.getNodeByName("FXAA"),this._dofBlurNodes=["dof_far_blur","dof_near_blur","dof_coc_blur"].map(function(i){return this._compositor.getNodeByName(i)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array(0),this._finalNodesChain=fa.map(function(i){return this._compositor.getNodeByName(i)},this);var r={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new Ct(r),this._ssrPass=new Lt(r),this._edgePass=new Xr(r)}J.prototype.resize=function(i,n,r){r=r||1;var i=i*r,n=n*r,a=this._sourceTexture,o=this._depthTexture;a.width=i,a.height=n,o.width=i,o.height=n;var s={getWidth:function(){return i},getHeight:function(){return n},getDevicePixelRatio:function(){return r}};function l(u,h){if(typeof u[h]=="function"){var c=u[h].__original||u[h];u[h]=function(d){return c.call(this,s)},u[h].__original=c}}this._compositor.nodes.forEach(function(u){for(var h in u.outputs){var c=u.outputs[h].parameters;c&&(l(c,"width"),l(c,"height"))}for(var d in u.parameters)l(u.parameters,d)}),this._width=i,this._height=n,this._dpr=r};J.prototype.getWidth=function(){return this._width};J.prototype.getHeight=function(){return this._height};J.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR};J.prototype._getPrevNode=function(e){for(var t=fa.indexOf(e.name)-1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t-=1,r=this._finalNodesChain[t];return r};J.prototype._getNextNode=function(e){for(var t=fa.indexOf(e.name)+1,r=this._finalNodesChain[t];r&&!this._compositor.getNodeByName(r.name);)t+=1,r=this._finalNodesChain[t];return r};J.prototype._addChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(e.inputs.texture=t.name,r?(e.outputs=Ws(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))};J.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),r=this._getNextNode(e);!t||(r?(t.outputs=Ws(this.getWidth.bind(this),this.getHeight.bind(this)),r.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))};J.prototype.updateNormal=function(e,t,r,i){this._ifRenderNormalPass()&&this._normalPass.update(e,t,r)};J.prototype.updateSSAO=function(e,t,r,i){this._ssaoPass.update(e,r,i)};J.prototype.enableSSAO=function(){this._enableSSAO=!0};J.prototype.disableSSAO=function(){this._enableSSAO=!1};J.prototype.enableSSR=function(){this._enableSSR=!0};J.prototype.disableSSR=function(){this._enableSSR=!1};J.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()};J.prototype.getSourceFrameBuffer=function(){return this._framebuffer};J.prototype.getSourceTexture=function(){return this._sourceTexture};J.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)};J.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)};J.prototype.enableBloom=function(){this._compositeNode.inputs.bloom="bloom_composite",this._compositor.dirty()};J.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()};J.prototype.enableDOF=function(){this._compositeNode.inputs.texture="dof_composite",this._compositor.dirty()};J.prototype.disableDOF=function(){this._compositeNode.inputs.texture="source",this._compositor.dirty()};J.prototype.enableColorCorrection=function(){this._compositeNode.define("COLOR_CORRECTION"),this._enableColorCorrection=!0};J.prototype.disableColorCorrection=function(){this._compositeNode.undefine("COLOR_CORRECTION"),this._enableColorCorrection=!1};J.prototype.enableEdge=function(){this._enableEdge=!0};J.prototype.disableEdge=function(){this._enableEdge=!1};J.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter("bloomIntensity",e)};J.prototype.setSSAOParameter=function(e,t){switch(e){case"quality":var r={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter("kernelSize",r);break;case"radius":this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter("bias",t/200);break;case"intensity":this._ssaoPass.setParameter(e,t);break}};J.prototype.setDOFParameter=function(e,t){switch(e){case"focalDistance":case"focalRange":case"fstop":this._cocNode.setParameter(e,t);break;case"blurRadius":for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].setParameter("blurRadius",t);break;case"quality":var i={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=i;for(var r=0;r<this._dofBlurNodes.length;r++)this._dofBlurNodes[r].pass.material.define("POISSON_KERNEL_SIZE",i);this._dofBlurKernel=new Float32Array(i*2);break}};J.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case"quality":var r={low:10,medium:15,high:30,ultra:80}[t]||20,i={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter("maxIteration",r),this._ssrPass.setParameter("pixelStride",i);break;case"maxRoughness":this._ssrPass.setParameter("minGlossiness",Math.max(Math.min(1-t,1),0));break;case"physical":this.setPhysicallyCorrectSSR(t);break;default:console.warn("Unkown SSR parameter "+e)}};J.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)};J.prototype.setEdgeColor=function(e){var t=G.parseColor(e);this._edgePass.setParameter("edgeColor",t)};J.prototype.setExposure=function(e){this._compositeNode.setParameter("exposure",Math.pow(2,e))};J.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage("lut",this._enableColorCorrection?e:"none",t,{minFilter:G.Texture.NEAREST,magFilter:G.Texture.NEAREST,flipY:!1})};J.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)};J.prototype.isSSREnabled=function(){return this._enableSSR};J.prototype.composite=function(e,t,r,i,n){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,r,a,n),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,r,a,n),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter("depth",this._depthTexture);for(var s=this._dofBlurKernel,l=this._dofBlurKernelSize,u=Math.floor(Ro.length/2/l),h=n%u,c=0;c<l*2;c++)s[c]=Ro[c+h*l*2];for(var c=0;c<this._dofBlurNodes.length;c++)this._dofBlurNodes[c].setParameter("percent",n/30),this._dofBlurNodes[c].setParameter("poissonKernel",s);this._cocNode.setParameter("zNear",r.near),this._cocNode.setParameter("zFar",r.far),this._compositor.render(e,i)};J.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Yn(e){for(var t=[],r=0;r<30;r++)t.push([gr(r,2),gr(r,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new ae,this._sourceFb=new He,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new ae,this._outputTex=new ae;var i=this._blendPass=new Xe({fragment:P.source("clay.compositor.blend")});i.material.disableTexturesAll(),i.material.enableTexture(["texture1","texture2"]),this._blendFb=new He({depthBuffer:!1}),this._outputPass=new Xe({fragment:P.source("clay.compositor.output"),blendWithPrevious:!0}),this._outputPass.material.define("fragment","OUTPUT_ALPHA"),this._outputPass.material.blend=function(n){n.blendEquationSeparate(n.FUNC_ADD,n.FUNC_ADD),n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA)}}Yn.prototype={constructor:Yn,jitterProjection:function(e,t){var r=e.viewport,i=r.devicePixelRatio||e.getDevicePixelRatio(),n=r.width*i,a=r.height*i,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new V;s.array[12]=(o[0]*2-1)/n,s.array[13]=(o[1]*2-1)/a,V.mul(t.projectionMatrix,s,t.projectionMatrix),V.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,r){var i=this._blendPass;this._frame===0?(i.setUniform("weight1",0),i.setUniform("weight2",1)):(i.setUniform("weight1",.9),i.setUniform("weight2",.1)),i.setUniform("texture1",this._prevFrameTex),i.setUniform("texture2",t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),i.render(e),this._blendFb.unbind(e),r||(this._outputPass.setUniform("texture",this._outputTex),this._outputPass.render(e));var n=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=n,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function ge(e){e=e||"perspective",this.layer=null,this.scene=new Bt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new J,this._temporalSS=new Yn,this._shadowMapPass=new ad;for(var t=[],r=0,i=0;i<30;i++){for(var n=[],a=0;a<6;a++)n.push(gr(r,2)*4-2),n.push(gr(r,3)*4-2),r++;t.push(n)}this._pcfKernels=t,this.scene.on("beforerender",function(o,s,l){this.needsTemporalSS()&&this._temporalSS.jitterProjection(o,l)},this)}ge.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e==="perspective"?this.camera instanceof Pe||(this.camera=new Pe,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof zr||(this.camera=new zr,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3};ge.prototype.setViewport=function(e,t,r,i,n){this.camera instanceof Pe&&(this.camera.aspect=r/i),n=n||1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=r,this.viewport.height=i,this.viewport.devicePixelRatio=n,this._compositor.resize(r*n,i*n),this._temporalSS.resize(r*n,i*n)};ge.prototype.containPoint=function(e,t){var r=this.viewport,i=this.layer.renderer.getHeight();return t=i-t,e>=r.x&&t>=r.y&&e<=r.x+r.width&&t<=r.y+r.height};var Po=new tt;ge.prototype.castRay=function(e,t,r){var i=this.layer.renderer,n=i.viewport;return i.viewport=this.viewport,i.screenToNDC(e,t,Po),this.camera.castRay(Po,r),i.viewport=n,r};ge.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var r=e.transparent[t],i=r.geometry;i.needsSortVerticesProgressively&&i.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),i.needsSortTrianglesProgressively&&i.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()};ge.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++};ge.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively};ge.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e==="auto"&&(e=this._enablePostEffect),e};ge.prototype.hasDOF=function(){return this._enableDOF};ge.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30};ge.prototype._doRender=function(e,t,r){var i=this.scene,n=this.camera;r=r||0,this._updateTransparent(e,i,n,r),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,i,n,!0)),this._updateShadowPCFKernel(r);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n),this._compositor.updateNormal(e,i,n,this._temporalSS.getFrame())),this._updateSSAO(e,i,n,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(i,n,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,i,n,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,i,n,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(i,n,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(i,n,!0,!0)};ge.prototype._updateTransparent=function(e,t,r,i){for(var n=new D,a=new V,o=r.getWorldPosition(),s=t.getRenderList(r).transparent,l=0;l<s.length;l++){var u=s[l],h=u.geometry;V.invert(a,u.worldTransform),D.transformMat4(n,o,a),h.needsSortTriangles&&h.needsSortTriangles()&&h.doSortTriangles(n,i),h.needsSortVertices&&h.needsSortVertices()&&h.doSortVertices(n,i)}};ge.prototype._updateSSAO=function(e,t,r){var i=this._enableSSAO&&this._enablePostEffect;i&&this._compositor.updateSSAO(e,t,r,this._temporalSS.getFrame());for(var n=t.getRenderList(r),a=0;a<n.opaque.length;a++){var o=n.opaque[a];o.renderNormal&&o.material[i?"enableTexture":"disableTexture"]("ssaoMap"),i&&o.material.set("ssaoMap",this._compositor.getSSAOTexture())}};ge.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],r=this.scene.getRenderList(this.camera),i=r.opaque,n=0;n<i.length;n++)i[n].receiveShadow&&(i[n].material.set("pcfKernel",t),i[n].material.define("fragment","PCF_KERNEL_SIZE",t.length/2))};ge.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)};ge.prototype.setPostEffect=function(e,t){var r=this._compositor;this._enablePostEffect=e.get("enable");var i=e.getModel("bloom"),n=e.getModel("edge"),a=e.getModel("DOF",e.getModel("depthOfField")),o=e.getModel("SSAO",e.getModel("screenSpaceAmbientOcclusion")),s=e.getModel("SSR",e.getModel("screenSpaceReflection")),l=e.getModel("FXAA"),u=e.getModel("colorCorrection");i.get("enable")?r.enableBloom():r.disableBloom(),a.get("enable")?r.enableDOF():r.disableDOF(),s.get("enable")?r.enableSSR():r.disableSSR(),u.get("enable")?r.enableColorCorrection():r.disableColorCorrection(),n.get("enable")?r.enableEdge():r.disableEdge(),l.get("enable")?r.enableFXAA():r.disableFXAA(),this._enableDOF=a.get("enable"),this._enableSSAO=o.get("enable"),this._enableSSAO?r.enableSSAO():r.disableSSAO(),r.setBloomIntensity(i.get("intensity")),r.setEdgeColor(n.get("color")),r.setColorLookupTexture(u.get("lookupTexture"),t),r.setExposure(u.get("exposure")),["radius","quality","intensity"].forEach(function(h){r.setSSAOParameter(h,o.get(h))}),["quality","maxRoughness","physical"].forEach(function(h){r.setSSRParameter(h,s.get(h))}),["quality","focalDistance","focalRange","blurRadius","fstop"].forEach(function(h){r.setDOFParameter(h,a.get(h))}),["brightness","contrast","saturation"].forEach(function(h){r.setColorCorrection(h,u.get(h))})};ge.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter("focalDistance",e),!0)};ge.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get("enable")};ge.prototype.isLinearSpace=function(){return this._enablePostEffect};ge.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),r=0;r<t.length;r++)e.add(t[r]);e!==this.scene&&this.scene.add(e),this.rootNode=e}};ge.prototype.add=function(e){this.rootNode.add(e)};ge.prototype.remove=function(e){this.rootNode.remove(e)};ge.prototype.removeAll=function(e){this.rootNode.removeAll(e)};Object.assign(ge.prototype,Qn);function Fd(e,t){var r=e.getBoxLayoutParams(),i=$o(r,{width:t.getWidth(),height:t.getHeight()});i.y=t.getHeight()-i.y-i.height,this.viewGL.setViewport(i.x,i.y,i.width,i.height,t.getDevicePixelRatio());var n=e.get("boxWidth"),a=e.get("boxHeight"),o=e.get("boxDepth");this.getAxis("x").setExtent(-n/2,n/2),this.getAxis("y").setExtent(o/2,-o/2),this.getAxis("z").setExtent(-a/2,a/2),this.size=[n,a,o]}function Ud(e,t){var r={};function i(n,a){r[n]=r[n]||[1/0,-1/0],r[n][0]=Math.min(a[0],r[n][0]),r[n][1]=Math.max(a[1],r[n][1])}e.eachSeries(function(n){if(n.coordinateSystem===this){var a=n.getData();["x","y","z"].forEach(function(o){a.mapDimensionsAll(o,!0).forEach(function(s){i(o,a.getDataExtent(s,!0))})})}},this),["xAxis3D","yAxis3D","zAxis3D"].forEach(function(n){e.eachComponent(n,function(a){var o=n.charAt(0),s=a.getReferringComponents("grid3D").models[0],l=s.coordinateSystem;if(l===this){var u=l.getAxis(o);if(!u){var h=bu(r[o]||[1/0,-1/0],a);u=new Ni(o,h),u.type=a.get("type");var c=u.type==="category";u.onBand=c&&a.get("boundaryGap"),u.inverse=a.get("inverse"),a.axis=u,u.model=a,u.getLabelModel=function(){return a.getModel("axisLabel",s.getModel("axisLabel"))},u.getTickModel=function(){return a.getModel("axisTick",s.getModel("axisTick"))},l.addAxis(u)}}},this)},this),this.resize(this.model,t)}var Hd={dimensions:Vr.prototype.dimensions,create:function(e,t){var r=[];e.eachComponent("grid3D",function(a){a.__viewGL=a.__viewGL||new ge;var o=new Vr;o.model=a,o.viewGL=a.__viewGL,a.coordinateSystem=o,r.push(o),o.resize=Fd,o.update=Ud});var i=["xAxis3D","yAxis3D","zAxis3D"];function n(a,o){return i.map(function(s){var l=a.getReferringComponents(s).models[0];return l==null&&(l=o.getComponent(s)),l})}return e.eachSeries(function(a){if(a.get("coordinateSystem")==="cartesian3D"){var o=a.getReferringComponents("grid3D").models[0];if(o==null){var s=n(a,e),o=s[0].getCoordSysModel();s.forEach(function(h){h.getCoordSysModel()})}var l=o.coordinateSystem;a.coordinateSystem=l}}),r}},zd=Hd,Xs=Zn.extend({type:"cartesian3DAxis",axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:"grid3D",index:this.option.gridIndex,id:this.option.gridId})[0]}});Au(Xs);var Vd=Xs,Ys={show:!0,grid3DIndex:0,inverse:!1,name:"",nameLocation:"middle",nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},kd=We({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:"auto"},axisLabel:{interval:"auto"},axisPointer:{label:{show:!1}}},Ys),da=We({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},Ys),Gd=Gr({scale:!0,min:"dataMin",max:"dataMax"},da),$s=Gr({logBase:10},da);$s.scale=!0;var Wd={categoryAxis3D:kd,valueAxis3D:da,timeAxis3D:Gd,logAxis3D:$s},Xd=["value","category","time","log"];function Yd(e,t,r,i,n){Xd.forEach(function(a){var o=r.extend({type:t+"Axis3D."+a,__ordinalMeta:null,mergeDefaultAndTheme:function(s,l){var u=l.getTheme();We(s,u.get(a+"Axis3D")),We(s,this.getDefaultOption()),s.type=i(t,s)},optionUpdated:function(){var s=this.option;s.type==="category"&&(this.__ordinalMeta=jl.createByAxisModel(this))},getCategories:function(){if(this.option.type==="category")return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:We(ft(Wd[a+"Axis3D"]),n||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+"Axis3D",ql(i,t))}function $d(e,t){return t.type||(t.data?"category":"value")}function jd(e){e.registerComponentModel($f),e.registerComponentView(td),e.registerCoordinateSystem("grid3D",zd),["x","y","z"].forEach(function(t){Yd(e,t,Vd,$d,{name:t.toUpperCase()});const r=e.ComponentView.extend({type:t+"Axis3D"});e.registerComponentView(r)}),e.registerAction({type:"grid3DChangeCamera",event:"grid3dcamerachanged",update:"series:updateCamera"},function(t,r){r.eachComponent({mainType:"grid3D",query:t},function(i){i.setView(t)})}),e.registerAction({type:"grid3DShowAxisPointer",event:"grid3dshowaxispointer",update:"grid3D:showAxisPointer"},function(t,r){}),e.registerAction({type:"grid3DHideAxisPointer",event:"grid3dhideaxispointer",update:"grid3D:hideAxisPointer"},function(t,r){})}var qd={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:"#fff"}}};function wn(e,t,r){var i=e[t];e[t]=e[r],e[r]=i}function js(e,t,r,i,n){var a=r,o=e[t];wn(e,t,i);for(var s=r;s<i;s++)n(e[s],o)<0&&(wn(e,s,a),a++);return wn(e,i,a),a}function Ii(e,t,r,i){if(r<i){var n=Math.floor((r+i)/2),a=js(e,n,r,i,t);Ii(e,t,r,a-1),Ii(e,t,a+1,i)}}function Oi(){this._parts=[]}Oi.prototype.step=function(e,t,r){var i=e.length;if(r===0){this._parts=[],this._sorted=!1;var n=Math.floor(i/2);this._parts.push({pivot:n,left:0,right:i-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=js(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var l=a[o].left,u=a[o].pivot-1;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u});var l=a[o].pivot+1,u=a[o].right;u>l&&s.push({pivot:Math.floor((u+l)/2),left:l,right:u})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var h=a.length-1-this._currentSortPartIdx;if(Ii(e,t,a[h].left,a[h].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}};Oi.sort=Ii;var vr=ki.vec3,Do=vr.create(),No=vr.create(),Io=vr.create(),Zd={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var r=this.indices;if(t===0){var i=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new r.constructor(r.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var n=0,a,o=0;o<r.length;){i.get(r[o++],Do),i.get(r[o++],No),i.get(r[o++],Io);var s=vr.sqrDist(Do,e),l=vr.sqrDist(No,e),u=vr.sqrDist(Io,e),h=Math.min(s,l);h=Math.min(h,u),o===3?(a=h,h=0):h=h-a,this._triangleZList[n++]=h}}for(var c=this._sortedTriangleIndices,o=0;o<c.length;o++)c[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var d=this._indicesTmp,f=this._triangleZListTmp,v=this._triangleZList,o=0;o<this.triangleCount;o++){var p=c[o]*3,_=o*3;d[_++]=r[p++],d[_++]=r[p++],d[_]=r[p],f[o]=v[c[o]]}var m=this._indicesTmp;this._indicesTmp=this.indices,this.indices=m;var m=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=m,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;function i(n,a){return t[a]-t[n]}e?Array.prototype.sort.call(r,i):Oi.sort(r,i,0,r.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,r=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Oi,this._quickSort.step(r,function(i,n){return t[n]-t[i]},e)}};function $n(e,t){const r=e.getItemVisual(t,"style");if(r){const i=e.getVisual("drawType");return r[i]}}function Oo(e,t){const r=e.getItemVisual(t,"style");return r&&r.opacity}function Kd(e,t){var r=[];return te(e.dimensions,function(i){var n=e.getDimensionInfo(i),a=n.otherDims,o=a[t];o!=null&&o!==!1&&(r[o]=n.name)}),r}function Qd(e,t,r){function i(c){var d=!0,f=[],v=Kd(n,"tooltip");v.length?te(v,function(_){p(n.get(_,t),_)}):te(c,p);function p(_,m){var y=n.getDimensionInfo(m);if(!(!y||y.otherDims.tooltip===!1)){var g=y.type,x="- "+(y.tooltipName||y.name)+": "+(g==="ordinal"?_+"":g==="time"?r?"":Kl("yyyy/MM/dd hh:mm:ss",_):xa(_));x&&f.push(jr(x))}}return(d?"<br/>":"")+f.join(d?"<br/>":", ")}var n=e.getData(),a=e.getRawValue(t),o=$e(a)?i(a):jr(xa(a)),s=n.getName(t),l=$n(n,t);At(l)&&l.colorStops&&(l=(l.colorStops[0]||{}).color),l=l||"transparent";var u=Zl(l),h=e.name;return h==="\0-"&&(h=""),h=h?jr(h)+(r?": ":"<br/>"):"",r?u+h+o:h+u+(s?jr(s)+": "+o:o)}function Jd(e,t,r){r=r||e.getSource();var i=t||Ql(e.get("coordinateSystem"))||["x","y","z"],n=Jl(r,{dimensionsDefine:r.dimensionsDefine||e.get("dimensions"),encodeDefine:r.encodeDefine||e.get("encode"),coordDimensions:i.map(function(s){var l=e.getReferringComponents(s+"Axis3D").models[0];return{type:l&&l.get("type")==="category"?"ordinal":"float",name:s}})});e.get("coordinateSystem")==="cartesian3D"&&n.forEach(function(s){if(i.indexOf(s.coordDim)>=0){var l=e.getReferringComponents(s.coordDim+"Axis3D").models[0];l&&l.get("type")==="category"&&(s.ordinalMeta=l.getOrdinalMeta())}});var a=Su.enableDataStack(e,n,{byIndex:!0,stackedCoordDimension:"z"}),o=new eu(n,e);return o.setCalculationInfo(a),o.initData(r),o}var qs=tu.extend({type:"series.surface",dependencies:["globe","grid3D","geo3D"],visualStyleAccessPath:"itemStyle",formatTooltip:function(e){return Qd(this,e)},getInitialData:function(e,t){var r=e.data;function i(q){return!(isNaN(q.min)||isNaN(q.max)||isNaN(q.step))}function n(q){var I=qo;return Math.max(I(q.min),I(q.max),I(q.step))+1}if(!r)if(e.parametric){var x=e.parametricEquation||{},E=x.u||{},S=x.v||{};["u","v"].forEach(function(I){i(x[I])}),["x","y","z"].forEach(function(I){x[I]});var w=Math.floor((E.max+E.step-E.min)/E.step),b=Math.floor((S.max+S.step-S.min)/S.step);r=new Float32Array(w*b*5);for(var C=n(E),O=n(S),d=0,f=0;f<b;f++)for(var v=0;v<w;v++){var M=v*E.step+E.min,B=f*S.step+S.min,F=qr(Math.min(M,E.max),C),R=qr(Math.min(B,S.max),O),p=x.x(F,R),_=x.y(F,R),g=x.z(F,R);r[d++]=p,r[d++]=_,r[d++]=g,r[d++]=F,r[d++]=R}}else{var a=e.equation||{},o=a.x||{},s=a.y||{};if(["x","y"].forEach(function(q){i(a[q])}),typeof a.z!="function")return;var l=Math.floor((o.max+o.step-o.min)/o.step),u=Math.floor((s.max+s.step-s.min)/s.step);r=new Float32Array(l*u*3);for(var h=n(o),c=n(s),d=0,f=0;f<u;f++)for(var v=0;v<l;v++){var p=v*o.step+o.min,_=f*s.step+s.min,m=qr(Math.min(p,o.max),h),y=qr(Math.min(_,s.max),c),g=a.z(m,y);r[d++]=m,r[d++]=y,r[d++]=g}}var H=["x","y","z"];e.parametric&&H.push("u","v");var U=Jd(this,H,r);return U},defaultOption:{coordinateSystem:"cartesian3D",zlevel:-10,grid3DIndex:0,shading:"lambert",parametric:!1,wireframe:{show:!0,lineStyle:{color:"rgba(0,0,0,0.5)",width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});We(qs.prototype,qd);var ev=qs,Wt=ki.vec3;function tv(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}var rv=ru.extend({type:"surface",__ecgl__:!0,init:function(e,t){this.groupGL=new G.Node},render:function(e,t,r){var i=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=i,this._surfaceMesh||(this._surfaceMesh=this._createSurfaceMesh()),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var n=e.coordinateSystem,a=e.get("shading"),o=e.getData(),s="ecgl."+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=G.createMaterial(s,["VERTEX_COLOR","DOUBLE_SIDED"])),G.setMaterialFromModel(a,this._surfaceMesh.material,e,r),n&&n.viewGL){n.viewGL.add(this.groupGL);var l=n.viewGL.isLinearSpace()?"define":"undefine";this._surfaceMesh.material[l]("fragment","SRGB_DECODE")}var u=e.get("parametric"),h=e.get("dataShape");h||(h=this._getDataShape(o,u));var c=e.getModel("wireframe"),d=c.get("lineStyle.width"),f=c.get("show")&&d>0;this._updateSurfaceMesh(this._surfaceMesh,e,h,f);var v=this._surfaceMesh.material;f?(v.define("WIREFRAME_QUAD"),v.set("wireframeLineWidth",d),v.set("wireframeLineColor",G.parseColor(c.get("lineStyle.color")))):v.undefine("WIREFRAME_QUAD"),this._initHandler(e,r),this._updateAnimation(e)},_updateAnimation:function(e){G.updateVertexAnimation([["prevPosition","position"],["prevNormal","normal"]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new G.Mesh({geometry:new G.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new G.Material({shader:new G.Shader(G.Shader.source("ecgl.sm.depth.vertex"),G.Shader.source("ecgl.sm.depth.fragment"))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute("barycentric","float",4),e.geometry.createAttribute("prevPosition","float",3),e.geometry.createAttribute("prevNormal","float",3),Object.assign(e.geometry,Zd),e},_initHandler:function(e,t){var r=e.getData(),i=this._surfaceMesh,n=e.coordinateSystem;function a(s,l){for(var u=1/0,h=-1,c=[],d=0;d<s.length;d++){i.geometry.attributes.position.get(s[d],c);var f=Wt.dist(l.array,c);f<u&&(u=f,h=s[d])}return h}i.seriesIndex=e.seriesIndex;var o=-1;i.off("mousemove"),i.off("mouseout"),i.on("mousemove",function(s){var l=a(s.triangle,s.point);if(l>=0){var u=[];i.geometry.attributes.position.get(l,u);for(var h=n.pointToData(u),c=1/0,d=-1,f=[],v=0;v<r.count();v++){f[0]=r.get("x",v),f[1]=r.get("y",v),f[2]=r.get("z",v);var p=Wt.squaredDistance(f,h);p<c&&(d=v,c=p)}d!==o&&t.dispatchAction({type:"grid3DShowAxisPointer",value:h}),o=d,i.dataIndex=d}else i.dataIndex=-1},this),i.on("mouseout",function(s){o=-1,i.dataIndex=-1,t.dispatchAction({type:"grid3DHideAxisPointer"})},this)},_updateSurfaceMesh:function(e,t,r,i){var n=e.geometry,a=t.getData(),o=a.getLayout("points"),s=0;a.each(function(pt){a.hasValue(pt)||s++});var l=s||i,u=n.attributes.position,h=n.attributes.normal,c=n.attributes.texcoord0,d=n.attributes.barycentric,f=n.attributes.color,v=r[0],p=r[1],_=t.get("shading"),m=_!=="color";if(l){var y=(v-1)*(p-1)*4;u.init(y),i&&d.init(y)}else u.value=new Float32Array(o);f.init(n.vertexCount),c.init(n.vertexCount);var g=[0,3,1,1,3,2],x=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],E=n.indices=new(n.vertexCount>65535?Uint32Array:Uint16Array)((v-1)*(p-1)*6),S=function(pt,Jt,Et){Et[1]=pt*p+Jt,Et[0]=pt*p+Jt+1,Et[3]=(pt+1)*p+Jt+1,Et[2]=(pt+1)*p+Jt},w=!1;if(l){var b=[],C=[],O=0;m?h.init(n.vertexCount):h.value=null;for(var M=[[],[],[]],B=[],F=[],R=Wt.create(),H=function(pt,Jt,Et){var Wi=Jt*3;return Et[0]=pt[Wi],Et[1]=pt[Wi+1],Et[2]=pt[Wi+2],Et},U=new Float32Array(o.length),q=new Float32Array(o.length/3*4),I=0;I<a.count();I++)if(a.hasValue(I)){var Ue=G.parseColor($n(a,I)),fe=Oo(a,I);fe!=null&&(Ue[3]*=fe),Ue[3]<.99&&(w=!0);for(var k=0;k<4;k++)q[I*4+k]=Ue[k]}for(var xe=[1e7,1e7,1e7],I=0;I<v-1;I++)for(var oe=0;oe<p-1;oe++){var pe=I*(p-1)+oe,_e=pe*4;S(I,oe,b);for(var Be=!1,k=0;k<4;k++)H(o,b[k],C),tv(C)&&(Be=!0);for(var k=0;k<4;k++)Be?u.set(_e+k,xe):(H(o,b[k],C),u.set(_e+k,C)),i&&d.set(_e+k,x[k]);for(var k=0;k<6;k++)E[O++]=g[k]+_e;if(m&&!Be)for(var k=0;k<2;k++){for(var Fe=k*3,Le=0;Le<3;Le++){var Ve=b[g[Fe]+Le];H(o,Ve,M[Le])}Wt.sub(B,M[0],M[1]),Wt.sub(F,M[1],M[2]),Wt.cross(R,B,F);for(var Le=0;Le<3;Le++){var Je=b[g[Fe]+Le]*3;U[Je]=U[Je]+R[0],U[Je+1]=U[Je+1]+R[1],U[Je+2]=U[Je+2]+R[2]}}}if(m)for(var I=0;I<U.length/3;I++)H(U,I,R),Wt.normalize(R,R),U[I*3]=R[0],U[I*3+1]=R[1],U[I*3+2]=R[2];for(var Ue=[],st=[],I=0;I<v-1;I++)for(var oe=0;oe<p-1;oe++){var pe=I*(p-1)+oe,_e=pe*4;S(I,oe,b);for(var k=0;k<4;k++){for(var Le=0;Le<4;Le++)Ue[Le]=q[b[k]*4+Le];f.set(_e+k,Ue),m&&(H(U,b[k],R),h.set(_e+k,R));var Ve=b[k];st[0]=Ve%p/(p-1),st[1]=Math.floor(Ve/p)/(v-1),c.set(_e+k,st)}pe++}}else{for(var st=[],I=0;I<a.count();I++){st[0]=I%p/(p-1),st[1]=Math.floor(I/p)/(v-1);var Ue=G.parseColor($n(a,I)),fe=Oo(a,I);fe!=null&&(Ue[3]*=fe),Ue[3]<.99&&(w=!0),f.set(I,Ue),c.set(I,st)}for(var b=[],Ks=0,I=0;I<v-1;I++)for(var oe=0;oe<p-1;oe++){S(I,oe,b);for(var k=0;k<6;k++)E[Ks++]=b[g[k]]}m?n.generateVertexNormals():h.value=null}e.material.get("normalMap")&&n.generateTangents(),n.updateBoundingBox(),n.dirty(),e.material.transparent=w,e.material.depthMask=!w},_getDataShape:function(e,t){for(var r=-1/0,i=0,n=0,a=!1,o=t?"u":"x",s=e.count(),l=0;l<s;l++){var u=e.get(o,l);u<r&&(n=0,i++),r=u,n++}if((!i||n===1)&&(a=!0),!a)return[i+1,n];for(var h=Math.floor(Math.sqrt(s));h>0;){if(Math.floor(s/h)===s/h)return[h,s/h];h--}return h=Math.floor(Math.sqrt(s)),[h,h]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function iv(e){e.registerChartView(rv),e.registerSeriesModel(ev),e.registerLayout(function(t,r){t.eachSeriesByType("surface",function(i){var n=i.coordinateSystem;!n||n.type;var a=i.getData(),o=new Float32Array(3*a.count()),s=[NaN,NaN,NaN];if(n&&n.type==="cartesian3D"){var l=n.dimensions,u=l.map(function(h){return i.coordDimToDataDim(h)[0]});a.each(u,function(h,c,d,f){var v;a.hasValue(f)?v=n.dataToPoint([h,c,d]):v=s,o[f*3]=v[0],o[f*3+1]=v[1],o[f*3+2]=v[2]})}a.setLayout("points",o)})})}var nv=Object.defineProperty,av=Object.getOwnPropertyDescriptor,Zs=(e,t,r,i)=>{for(var n=i>1?void 0:i?av(t,r):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(n=(i?o(t,r,n):o(n))||n);return i&&n&&nv(t,r,n),n};Or([Jo,yh,jd,iv]);let Bi=class extends iu(nu,au){constructor(){super(...arguments);this.mdiGrid=ou,this.mdiHome=su,this.mdiInformation=lu,this.mdiStackOverflow=uu,this.mdiLockOutline=hu,this.mdiCloseThick=cu,this.mdiPencil=fu,this.mdiDelete=du,this.mdiProgressUpload=vu,this.renameDialog=!1,this.removeDialogProfile="",this.removeDialog=!1,this.saveConfigDialog=!1,this.calibrateDialog={boolShow:!1,name:"default"},this.newName="",this.oldName="",this.isInvalidName=!0,this.renameInputRules=[e=>!!e||this.$t("Heightmap.InvalidNameEmpty"),e=>e!=="default"||this.$t("Heightmap.InvalidNameReserved"),e=>!this.existsProfileName(e)||this.$t("Heightmap.InvalidNameAlreadyExists")],this.heightmapScale=.5,this.probedOpacity=1,this.meshOpacity=1,this.flatOpacity=.5,this.colorAxisName="rgba(255,255,255,0.5)",this.colorAxisLabel="rgba(255,255,255,0.5)",this.colorAxisLine="rgba(255,255,255,0.2)",this.colorAxisTick="rgba(255,255,255,0.2)",this.colorSplitLine="rgba(255,255,255,0.2)",this.colorAxisPointer="rgba(255,255,255,0.8)",this.colorVisualMap="rgba(255,255,255,0.8)",this.fontSizeVisualMap=14}get chartOptions(){return{tooltip:{backgroundColor:"rgba(0,0,0,0.9)",borderWidth:0,textStyle:{color:"#fff",fontSize:"14px"},padding:15,formatter:this.tooltipFormatter},darkMode:!0,animation:!1,legend:{show:!1,selected:this.selected},visualMap:{show:!0,min:this.visualMapRange[0],max:this.visualMapRange[1],calculable:!0,dimension:2,inRange:{color:["#313695","#4575b4","#74add1","#abd9e9","#e0f3f8","#ffffbf","#fee090","#fdae61","#f46d43","#d73027","#a50026"]},seriesIndex:this.visualMapSeriesIndex,left:this.isMobile?10:30,top:20,bottom:0,itemWidth:this.isMobile?10:30,itemHeight:350,precision:3,textStyle:{color:this.colorVisualMap,fontSize:this.fontSizeVisualMap}},xAxis3D:{type:"value",nameTextStyle:{color:this.colorAxisName},min:this.rangeX[0],max:this.rangeX[1],minInterval:1},yAxis3D:{type:"value",nameTextStyle:{color:this.colorAxisName},min:this.rangeY[0],max:this.rangeY[1]},zAxis3D:{type:"value",min:this.heightmapScale*-1,max:this.heightmapScale,nameTextStyle:{color:this.colorAxisName},axisPointer:{label:{formatter:function(e){return e=parseFloat(e),e.toFixed(2)}}}},grid3D:{axisLabel:{textStyle:{color:this.colorAxisLabel}},axisLine:{lineStyle:{color:this.colorAxisLine}},axisTick:{lineStyle:{color:this.colorAxisTick}},splitLine:{lineStyle:{color:this.colorSplitLine}},axisPointer:{lineStyle:{color:this.colorAxisPointer},label:{textStyle:{color:this.colorAxisPointer}}}},series:this.series}}get chart(){var e,t;return(t=(e=this.$refs.heightmap)==null?void 0:e.chart)!=null?t:null}get profiles(){return this.$store.getters["printer/getBedMeshProfiles"]}get bed_mesh(){var e;return(e=this.$store.state.printer.bed_mesh)!=null?e:null}get currentProfileName(){var e,t;return(t=(e=this.bed_mesh)==null?void 0:e.profile_name)!=null?t:""}get currentProfile(){return this.profiles.find(e=>e.name===this.currentProfileName)}bed_meshChanged(){var e;(e=this.chart)==null||e.setOption(this.chartOptions)}get showProbed(){var e;return(e=this.$store.state.gui.view.heightmap.probed)!=null?e:!0}set showProbed(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.probed",value:e})}get showMesh(){var e;return(e=this.$store.state.gui.view.heightmap.mesh)!=null?e:!0}set showMesh(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.mesh",value:e})}get showFlat(){var e;return(e=this.$store.state.gui.view.heightmap.flat)!=null?e:!0}set showFlat(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.flat",value:e})}get wireframe(){var e;return(e=this.$store.state.gui.view.heightmap.wireframe)!=null?e:!0}set wireframe(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.wireframe",value:e})}get scale(){var e;return(e=this.$store.state.gui.view.heightmap.scale)!=null?e:!0}set scale(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.scale",value:e})}get scaleVisualMap(){var e;return(e=this.$store.state.gui.view.heightmap.scaleVisualMap)!=null?e:!1}set scaleVisualMap(e){this.$store.dispatch("gui/saveSetting",{name:"view.heightmap.scaleVisualMap",value:e})}get rangeX(){var r,i,n,a;const e=(r=this.$store.state.printer.toolhead)==null?void 0:r.axis_minimum,t=(i=this.$store.state.printer.toolhead)==null?void 0:i.axis_maximum;return[(n=e[0])!=null?n:0,(a=t[0])!=null?a:0]}get rangeY(){var r,i,n,a,o,s;const e=(i=(r=this.$store.state.printer.toolhead)==null?void 0:r.axis_minimum)!=null?i:[0,0],t=(a=(n=this.$store.state.printer.toolhead)==null?void 0:n.axis_maximum)!=null?a:[0,0];return[(o=e[1])!=null?o:0,(s=t[1])!=null?s:0]}get heightmapLimit(){let e=0,t=0;if(this.bed_mesh){const r=[];if(this.showProbed)for(const i of this.bed_mesh.probed_matrix)for(const n of i)r.push(n);if(this.showMesh)for(const i of this.bed_mesh.mesh_matrix)for(const n of i)r.push(n);e=Math.min(e,...r),t=Math.max(t,...r)}return[e,t]}get probedHeightmapLimit(){let e=0,t=0;return this.currentProfile&&(e=this.currentProfile.min,t=this.currentProfile.max),[e,t]}get heightmapRangeLimit(){const[e,t]=this.heightmapLimit,r=Math.round(Math.max(Math.abs(e),Math.abs(t))*10)/10,i=Math.max(r,1);return[r,i]}get selected(){return{probed:this.showProbed,mesh:this.showMesh,flat:this.showFlat}}get series(){const e=[];return this.bed_mesh&&(e.push(this.seriesProbed),e.push(this.seriesMesh),e.push(this.seriesFlat)),e}get seriesProbed(){const e={type:"surface",name:"probed",data:[],itemStyle:{opacity:this.probedOpacity},wireframe:{show:this.wireframe}};if(this.bed_mesh){const t=this.bed_mesh.probed_matrix[0].length,r=this.bed_mesh.probed_matrix.length,i=this.bed_mesh.mesh_min[0],n=this.bed_mesh.mesh_max[0],a=this.bed_mesh.mesh_min[1],o=this.bed_mesh.mesh_max[1],s=(n-i)/(t-1),l=(o-a)/(r-1),u=[];let h=0;this.bed_mesh.probed_matrix.forEach(c=>{let d=0;c.forEach(f=>{u.push([i+s*d,a+l*h,f]),d++}),h++}),e.data=u,e.dataShape=[r,t]}return e}get seriesMesh(){const e={type:"surface",name:"mesh",data:[],itemStyle:{opacity:this.meshOpacity},wireframe:{show:this.wireframe}};if(this.bed_mesh){const t=this.bed_mesh.mesh_matrix[0].length,r=this.bed_mesh.mesh_matrix.length,i=this.bed_mesh.mesh_min[0],n=this.bed_mesh.mesh_max[0],a=this.bed_mesh.mesh_min[1],o=this.bed_mesh.mesh_max[1],s=(n-i)/(t-1),l=(o-a)/(r-1),u=[];let h=0;this.bed_mesh.mesh_matrix.forEach(c=>{let d=0;c.forEach(f=>{u.push([i+s*d,a+l*h,f]),d++}),h++}),e.data=u,e.dataShape=[r,t]}return e}get seriesFlat(){var r,i;const e={type:"surface",name:"flat",data:[],itemStyle:{color:[1,1,1,1],opacity:this.flatOpacity},wireframe:{show:this.wireframe}},t=(i=(r=this.$store.state.printer.configfile)==null?void 0:r.settings)==null?void 0:i.bed_mesh;if(t){let n=[1,1];t.probe_count&&typeof t.probe_count=="string"?n=t.probe_count.split(","):t.probe_count?n=t.probe_count:t.round_probe_count&&(n=[t.round_probe_count,t.round_probe_count]);let a=[],o=[];t.mesh_min&&t.mesh_max?(a=typeof t.mesh_min=="string"?t.mesh_min.split(","):t.mesh_min,o=typeof t.mesh_max=="string"?t.mesh_max.split(","):t.mesh_max):(a=[t.mesh_radius*-1,t.mesh_radius*-1],o=[t.mesh_radius,t.mesh_radius]);const s=n[0],l=n[1],u=parseFloat(a[0]),h=parseFloat(o[0]),c=parseFloat(a[1]),d=parseFloat(o[1]),f=(h-u)/(s-1),v=(d-c)/(l-1),p=[];for(let _=0;_<l;_++)for(let m=0;m<s;m++)p.push([u+f*m,c+v*_,0]);e.data=p,e.dataShape=[l,s]}return e}get visualMapRange(){return this.scaleVisualMap?this.heightmapLimit:[-.1,.1]}get visualMapSeriesIndex(){const e=[];return this.showProbed?e.push(0):this.showMesh&&e.push(1),e}get bedMeshMaxPoint(){if(this.bed_mesh.profile_name==="")return{row:0,col:0,positionX:0,positionY:0,value:0};const[,e]=this.probedHeightmapLimit;let t=0,r=0;this.bed_mesh.probed_matrix.forEach((a,o)=>{Math.max(...a)===e&&(t=o+1,r=a.findIndex(s=>s===e)+1)});const i=Math.round((this.bed_mesh.mesh_min[0]+(this.bed_mesh.mesh_max[0]-this.bed_mesh.mesh_min[0])/this.bed_mesh.probed_matrix[0].length*(r-1))*10)/10,n=Math.round((this.bed_mesh.mesh_min[1]+(this.bed_mesh.mesh_max[1]-this.bed_mesh.mesh_min[1])/this.bed_mesh.probed_matrix.length*(t-1))*10)/10;return{row:t,col:r,positionX:i,positionY:n,value:e}}get bedMeshMinPoint(){if(this.bed_mesh.profile_name==="")return{row:0,col:0,positionX:0,positionY:0,value:0};const[e]=this.probedHeightmapLimit;let t=0,r=0;this.bed_mesh.probed_matrix.forEach((a,o)=>{Math.min(...a)===e&&(t=o+1,r=a.findIndex(s=>s===e)+1)});const i=Math.round((this.bed_mesh.mesh_min[0]+(this.bed_mesh.mesh_max[0]-this.bed_mesh.mesh_min[0])/this.bed_mesh.probed_matrix[0].length*(r-1))*10)/10,n=Math.round((this.bed_mesh.mesh_min[1]+(this.bed_mesh.mesh_max[1]-this.bed_mesh.mesh_min[1])/this.bed_mesh.probed_matrix.length*(t-1))*10)/10;return{row:t,col:r,positionX:i,positionY:n,value:e}}get meshLoaded(){return this.bed_mesh!==null?this.bed_mesh.profile_name!=="":!1}tooltipFormatter(e){const t=[];return t.push("<b>"+e.seriesName+"</b>"),Object.keys(e.encode).sort().forEach(r=>{t.push("<b>"+r.toUpperCase()+"</b>: "+e.data[e.encode[r][0]].toFixed(r==="z"?3:1)+" mm")}),t.join("<br />")}loadProfile(e){const t='BED_MESH_PROFILE LOAD="'+e+'"';this.$store.dispatch("server/addEvent",{message:t,type:"command"}),this.$socket.emit("printer.gcode.script",{script:t},{loading:"bedMeshLoad_"+e})}openRenameProfile(){var e,t;this.newName=(t=(e=this.bed_mesh)==null?void 0:e.profile_name)!=null?t:"",this.oldName=this.bed_mesh.profile_name,this.renameDialog=!0,setTimeout(()=>{var r;(r=this.$refs.inputDialogRenameHeightmapName)==null||r.focus()},200)}existsProfileName(e){return this.profiles.findIndex(t=>t.name===e)>=0}renameProfile(){this.renameDialog=!1;const e='BED_MESH_PROFILE SAVE="'+this.newName+'"',t='BED_MESH_PROFILE REMOVE="'+this.oldName+'"';this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$store.dispatch("server/addEvent",{message:t,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"bedMeshRename"}),this.$socket.emit("printer.gcode.script",{script:t},{loading:"bedMeshRename"}),this.newName="",this.oldName=""}openRemoveProfile(e){this.removeDialogProfile=e,this.removeDialog=!0}removeProfile(){this.removeDialog=!1;const e='BED_MESH_PROFILE REMOVE="'+this.removeDialogProfile+'"';this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{action:"printer/removeBedMeshProfile",actionPayload:{name:this.removeDialogProfile},loading:"bedMeshRename_"+this.removeDialogProfile}),this.removeDialogProfile="",this.saveConfigDialog=!0}homePrinter(){const e="G28";this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"homeAll"})}clearBedMesh(){const e="BED_MESH_CLEAR";this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"bedMeshClear"})}openCalibrateMesh(){this.calibrateDialog.name="default",this.calibrateDialog.boolShow=!0,setTimeout(()=>{var e;(e=this.$refs.inputFieldCalibrateBedMeshName)==null||e.focus()},200)}calibrateMesh(){this.calibrateDialog.boolShow=!1;const e='BED_MESH_CALIBRATE PROFILE="'+this.calibrateDialog.name+'"';this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"bedMeshCalibrate"})}saveConfig(){const e="SAVE_CONFIG";this.$store.dispatch("server/addEvent",{message:e,type:"command"}),this.$socket.emit("printer.gcode.script",{script:e},{loading:"topbarSaveConfig"}),this.saveConfigDialog=!1}beforeDestroy(){typeof window>"u"||this.chart&&this.chart.dispose()}};Zs([pu("bed_mesh",{deep:!0})],Bi.prototype,"bed_meshChanged",1);Bi=Zs([_u({components:{Panel:Dt}})],Bi);var ov=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.klipperReadyForGui?r(lt,[r(Re,{staticClass:"col-12 col-md-8 pb-0"},[r(Dt,{attrs:{"card-class":"heightmap-map-panel",title:e.$t("Heightmap.Heightmap").toString(),icon:e.mdiGrid},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Ee,{staticClass:"d-none d-sm-flex",attrs:{icon:"",tile:"",disabled:e.printerIsPrinting,color:e.homedAxes.includes("xyz")?"primary":"warning",loading:e.loadings.includes("homeAll"),title:e.$t("Heightmap.TitleHomeAll"),ripple:!0},on:{click:e.homePrinter}},[r(_t,[e._v(e._s(e.mdiHome))])],1),e.meshLoaded?r(Ee,{staticClass:"d-none d-sm-flex",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshClear"),title:e.$t("Heightmap.TitleClear")},on:{click:e.clearBedMesh}},[e._v(" "+e._s(e.$t("Heightmap.Clear"))+" ")]):e._e(),r(Ee,{staticClass:"d-none d-sm-flex",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshCalibrate"),disabled:e.printerIsPrinting,title:e.$t("Heightmap.TitleCalibrate")},on:{click:e.openCalibrateMesh}},[e._v(" "+e._s(e.$t("Heightmap.Calibrate"))+" ")])]},proxy:!0}],null,!1,2015509893)},[r(ut,{staticClass:"d-sm-none text-center pb-0"},[r(mu,{staticClass:"v-btn-toggle",attrs:{tile:"",name:"controllers"}},[r(Ee,{staticClass:"px-2 minwidth-0",attrs:{text:"",small:"",disabled:e.printerIsPrinting,color:e.homedAxes.includes("xyz")?"primary":"warning",loading:e.loadings.includes("homeAll"),title:e.$t("Heightmap.TitleHomeAll")},on:{click:e.homePrinter}},[r(_t,{attrs:{color:e.homedAxes.includes("xyz")?"primary":"warning",small:""}},[e._v(" "+e._s(e.mdiHome)+" ")])],1),e.bed_mesh?r(Ee,{staticClass:"px-2 minwidth-0",attrs:{text:"",small:"",color:"primary",loading:e.loadings.includes("bedMeshClear"),title:e.$t("Heightmap.TitleClear")},on:{click:e.clearBedMesh}},[e._v(" "+e._s(e.$t("Heightmap.Clear"))+" ")]):e._e(),r(Ee,{staticClass:"px-2 minwidth-0",attrs:{text:"",small:"",color:"primary",loading:e.loadings.includes("bedMeshCalibrate"),disabled:e.printerIsPrinting,title:e.$t("Heightmap.TitleCalibrate")},on:{click:e.openCalibrateMesh}},[e._v(" "+e._s(e.$t("Heightmap.Calibrate"))+" ")])],1)],1),e.meshLoaded?[r(ut,{staticClass:"py-0 px-0"},[r(lt,[r(Re,{},[r("e-chart",{ref:"heightmap",staticStyle:{height:"400px",width:"100%",overflow:"hidden"},attrs:{option:e.chartOptions,"init-options":{renderer:"canvas"}}})],1)],1),r(lt,[r(Re,{staticClass:"col-12 col-sm-auto pt-0 pb-0 pl-lg-6 d-flex justify-center justify-sm-start"},[r(gu,{staticClass:"mt-0 ml-5",attrs:{label:e.$t("Heightmap.ScaleGradient")},model:{value:e.scaleVisualMap,callback:function(i){e.scaleVisualMap=i},expression:"scaleVisualMap"}})],1),r(Re,{staticClass:"d-flex justify-center pt-0 pb-6 pb-lg-3"},[r(Zr,{staticClass:"mx-3 mt-0",attrs:{label:e.$t("Heightmap.Probed"),"hide-details":""},model:{value:e.showProbed,callback:function(i){e.showProbed=i},expression:"showProbed"}}),r(Zr,{staticClass:"mx-3 mt-0",attrs:{label:e.$t("Heightmap.Mesh"),"hide-details":""},model:{value:e.showMesh,callback:function(i){e.showMesh=i},expression:"showMesh"}}),r(Zr,{staticClass:"mx-3 mt-0",attrs:{label:e.$t("Heightmap.Flat"),"hide-details":""},model:{value:e.showFlat,callback:function(i){e.showFlat=i},expression:"showFlat"}}),r(Zr,{staticClass:"mx-3 mt-0",attrs:{label:e.$t("Heightmap.Wireframe"),"hide-details":""},model:{value:e.wireframe,callback:function(i){e.wireframe=i},expression:"wireframe"}})],1)],1)],1),r(er),r(ut,{staticClass:"pt-0 pb-3"},[r(lt,[r(Re,[r(yu,{staticClass:"mt-4",attrs:{label:e.$t("Heightmap.ScaleZMax"),min:e.heightmapRangeLimit[0],max:e.heightmapRangeLimit[1],step:.1,ticks:"always","hide-details":""},model:{value:e.heightmapScale,callback:function(i){e.heightmapScale=i},expression:"heightmapScale"}})],1)],1)],1)]:[r(ut,{staticClass:"text-center py-3 font-italic"},[e._v(" "+e._s(e.$t("Heightmap.NoBedMeshHasBeenLoadedYet"))+" ")])]],2)],1),r(Re,{staticClass:"col-12 col-md-4"},[e.currentProfile?r(Dt,{staticClass:"mt-0",attrs:{title:e.$t("Heightmap.CurrentMesh.Headline").toString(),"card-class":"heightmap-current-mesh-panel",icon:e.mdiInformation,collapsible:!0}},[r(ut,{staticClass:"py-3 px-0"},[r(lt,{staticClass:"px-3"},[r(Re,[e._v(e._s(e.$t("Heightmap.CurrentMesh.Name")))]),r(Re,{staticClass:"text-right"},[r("span",{staticClass:"currentMeshName font-weight-bold",on:{click:function(i){return e.openRenameProfile()}}},[r(_t,{attrs:{left:"",small:"",color:"primary"}},[e._v(e._s(e.mdiPencil))]),e._v(" "+e._s(e.currentProfileName)+" ")],1)])],1),r(er,{staticClass:"my-3"}),"data"in e.currentProfile?r(lt,{staticClass:"px-3"},[r(Re,[e._v(e._s(e.$t("Heightmap.CurrentMesh.Size")))]),r(Re,{staticClass:"text-right"},[e._v(" "+e._s(e.currentProfile.data.x_count)+"x"+e._s(e.currentProfile.data.y_count)+" ")])],1):e._e(),r(er,{staticClass:"my-3"}),r(lt,{staticClass:"px-3"},[r(Re,[e._v(" "+e._s(e.$t("Heightmap.CurrentMesh.Max"))+" ["+e._s(e.bedMeshMaxPoint.positionX)+", "+e._s(e.bedMeshMaxPoint.positionY)+"] ")]),r(Re,{staticClass:"text-right"},[e._v(e._s(e.currentProfile.max.toFixed(3))+" mm")])],1),r(er,{staticClass:"my-3"}),r(lt,{staticClass:"px-3"},[r(Re,[e._v(" "+e._s(e.$t("Heightmap.CurrentMesh.Min"))+" ["+e._s(e.bedMeshMinPoint.positionX)+", "+e._s(e.bedMeshMinPoint.positionY)+"] ")]),r(Re,{staticClass:"text-right"},[e._v(e._s(e.currentProfile.min.toFixed(3))+" mm")])],1),r(er,{staticClass:"my-3"}),r(lt,{staticClass:"px-3"},[r(Re,[e._v(e._s(e.$t("Heightmap.CurrentMesh.Variance")))]),r(Re,{staticClass:"text-right"},[e._v(e._s(e.currentProfile.variance.toFixed(3))+" mm")])],1)],1)],1):e._e(),r(Dt,{staticClass:"mt-6 mt-md-0",attrs:{title:e.$t("Heightmap.Profiles").toString(),"card-class":"heightmap-profiles-panel",icon:e.mdiStackOverflow,collapsible:!0}},[e.profiles.length?r(ut,{staticClass:"px-0 py-3"},[e._l(e.profiles,function(i,n){return[n?r(er,{key:"deliver_"+n,staticClass:"my-3"}):e._e(),r(lt,{key:n,staticClass:"rowProfile"},[r(Re,{staticClass:"pl-6 py-0 colName"},[r("span",{class:i.is_active?"current":"",staticStyle:{cursor:"pointer"},on:{click:function(a){i.is_active?e.openRenameProfile():e.loadProfile(i.name)}}},[e._v(" "+e._s(i.name)+" ")])]),r(Re,{staticClass:"text-center py-0 colVariance"},[r(xu,{attrs:{top:"",color:"rgba(0,0,0,0.8)"},scopedSlots:e._u([{key:"activator",fn:function(a){var o=a.on,s=a.attrs;return[r("small",e._g(e._b({},"small",s,!1),o),[e._v(" "+e._s(i.variance.toFixed(3))+" ")])]}}],null,!0)},[r("span",[e._v(" max: "+e._s(i.max)+" "),r("br"),e._v(" min: "+e._s(i.min)+" ")])])],1),r(Re,{staticClass:"py-0 colActions"},[i.is_active?r(Ee,{staticClass:"px-2 minwidth-0",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshLoad_"+i.name)},on:{click:e.openRenameProfile}},[r(_t,[e._v(e._s(e.mdiPencil))])],1):r(Ee,{staticClass:"px-2 minwidth-0",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshLoad_"+i.name)},on:{click:function(a){return e.loadProfile(i.name)}}},[r(_t,[e._v(e._s(e.mdiProgressUpload))])],1),r(Ee,{staticClass:"px-2 minwidth-0",attrs:{text:"",tile:"",loading:e.loadings.includes("bedMeshRemove_"+i.name),title:e.$t("Heightmap.DeleteBedMeshProfile")},on:{click:function(a){return e.openRemoveProfile(i.name)}}},[r(_t,[e._v(e._s(e.mdiDelete))])],1)],1)],1)]})],2):r(ut,[r("p",{staticClass:"mb-0"},[e._v(e._s(e.$t("Heightmap.NoProfile")))])])],1)],1)],1):r(lt,[r(Tu,{staticClass:"mx-auto mt-6",attrs:{dense:"",text:"",type:"warning",elevation:"2","max-width":"500",icon:e.mdiLockOutline}},[e._v(" "+e._s(e.$t("Heightmap.ErrorKlipperNotReady"))+" ")])],1),r(Kr,{attrs:{persistent:"","max-width":400},on:{keydown:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"]))return null;e.renameDialog=!1}},model:{value:e.renameDialog,callback:function(i){e.renameDialog=i},expression:"renameDialog"}},[r(Dt,{attrs:{title:e.$t("Heightmap.RenameBedMeshProfile").toString(),icon:e.mdiGrid,"card-class":"heightmap-rename-dialog","margin-bottom":!1},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Ee,{attrs:{icon:"",tile:""},on:{click:function(i){e.renameDialog=!1}}},[r(_t,[e._v(e._s(e.mdiCloseThick))])],1)]},proxy:!0}])},[r(ut,[r(Ta,{ref:"inputDialogRenameHeightmapName",attrs:{label:e.$t("Heightmap.Name"),required:"",rules:e.renameInputRules},on:{"update:error":function(i){e.isInvalidName=!e.isInvalidName},keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.renameProfile.apply(null,arguments)}},model:{value:e.newName,callback:function(i){e.newName=i},expression:"newName"}})],1),r(Qr,[r(Jr),r(Ee,{attrs:{text:""},on:{click:function(i){e.renameDialog=!1}}},[e._v(e._s(e.$t("Heightmap.Abort")))]),r(Ee,{attrs:{disabled:e.isInvalidName,color:"primary",text:""},on:{click:e.renameProfile}},[e._v(" "+e._s(e.$t("Heightmap.Rename"))+" ")])],1)],1)],1),r(Kr,{attrs:{persistent:"","max-width":400},on:{keydown:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"]))return null;e.calibrateDialog.boolShow=!1}},model:{value:e.calibrateDialog.boolShow,callback:function(i){e.$set(e.calibrateDialog,"boolShow",i)},expression:"calibrateDialog.boolShow"}},[r(Dt,{attrs:{title:e.$t("Heightmap.BedMeshCalibrate").toString(),icon:e.mdiGrid,"card-class":"heightmap-calibrate-dialog","margin-bottom":!1},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Ee,{attrs:{icon:"",tile:""},on:{click:function(i){e.calibrateDialog.boolShow=!1}}},[r(_t,[e._v(e._s(e.mdiCloseThick))])],1)]},proxy:!0}])},[r(ut,[r(Ta,{ref:"inputFieldCalibrateBedMeshName",attrs:{label:e.$t("Heightmap.Name"),required:""},on:{keyup:function(i){return!i.type.indexOf("key")&&e._k(i.keyCode,"enter",13,i.key,"Enter")?null:e.calibrateMesh.apply(null,arguments)}},model:{value:e.calibrateDialog.name,callback:function(i){e.$set(e.calibrateDialog,"name",i)},expression:"calibrateDialog.name"}})],1),r(Qr,[r(Jr),r(Ee,{attrs:{text:""},on:{click:function(i){e.calibrateDialog.boolShow=!1}}},[e._v(e._s(e.$t("Heightmap.Abort")))]),r(Ee,{attrs:{color:"primary",text:""},on:{click:e.calibrateMesh}},[e._v(e._s(e.$t("Heightmap.Calibrate")))])],1)],1)],1),r(Kr,{attrs:{persistent:"","max-width":400},on:{keydown:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"]))return null;e.removeDialog=!1}},model:{value:e.removeDialog,callback:function(i){e.removeDialog=i},expression:"removeDialog"}},[r(Dt,{attrs:{title:e.$t("Heightmap.BedMeshRemove").toString(),icon:e.mdiGrid,"card-class":"heightmap-remove-dialog","margin-bottom":!1},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Ee,{attrs:{icon:"",tile:""},on:{click:function(i){e.removeDialog=!1}}},[r(_t,[e._v(e._s(e.mdiCloseThick))])],1)]},proxy:!0}])},[r(ut,[r("p",{staticClass:"mb-0"},[e._v(e._s(e.$t("Heightmap.DoYouReallyWantToDelete",{name:e.removeDialogProfile})))])]),r(Qr,[r(Jr),r(Ee,{attrs:{text:""},on:{click:function(i){e.removeDialog=!1}}},[e._v(e._s(e.$t("Heightmap.Abort")))]),r(Ee,{attrs:{color:"error",text:""},on:{click:e.removeProfile}},[e._v(e._s(e.$t("Heightmap.Remove")))])],1)],1)],1),r(Kr,{attrs:{persistent:"","max-width":400},on:{keydown:function(i){if(!i.type.indexOf("key")&&e._k(i.keyCode,"esc",27,i.key,["Esc","Escape"]))return null;e.saveConfigDialog=!1}},model:{value:e.saveConfigDialog,callback:function(i){e.saveConfigDialog=i},expression:"saveConfigDialog"}},[r(Dt,{attrs:{title:e.$t("Heightmap.SAVE_CONFIG").toString(),icon:e.mdiGrid,"card-class":"heightmap-remove-save-dialog","margin-bottom":!1},scopedSlots:e._u([{key:"buttons",fn:function(){return[r(Ee,{attrs:{icon:"",tile:""},on:{click:function(i){e.saveConfigDialog=!1}}},[r(_t,[e._v(e._s(e.mdiCloseThick))])],1)]},proxy:!0}])},[r(ut,[r("p",{staticClass:"mb-0"},[e._v(e._s(e.$t("Heightmap.RemoveSaveDescription")))])]),r(Qr,[r(Jr),e.printerIsPrinting?[r(Ee,{attrs:{text:""},on:{click:function(i){e.saveConfigDialog=!1}}},[e._v(e._s(e.$t("Heightmap.Ok")))])]:[r(Ee,{attrs:{color:"primary",text:""},on:{click:e.saveConfig}},[e._v(" "+e._s(e.$t("Heightmap.SAVE_CONFIG"))+" ")]),r(Ee,{attrs:{text:""},on:{click:function(i){e.saveConfigDialog=!1}}},[e._v(e._s(e.$t("Heightmap.Later")))])]],2)],1)],1)],1)},sv=[];const Bo={};var lv=Eu(Bi,ov,sv,!1,uv,"610020fc",null,null);function uv(e){for(let t in Bo)this[t]=Bo[t]}var cv=function(){return lv.exports}();export{cv as default};
