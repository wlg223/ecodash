"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[3095],{23095:function(e,r,t){t.r(r),t.d(r,{default:function(){return C}});var n=t(15861),a=t(15671),i=t(43144),o=t(60136),l=t(6215),s=t(61120),u=t(87757),c=t.n(u),p=(t(84944),t(33792),t(83195)),f=t(60125),y=t(20410),h=t(83241),v=(t(75571),t(64003),t(43079),t(33682),t(97182),t(30732)),d=t(57171),m=t(93505),g=t(79228),w=t(17396),b=t(75679),S=t(74649),_=t(43798);function V(e,r){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,r){if(!e)return;if("string"==typeof e)return k(e,r);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return k(e,r)}(e))||r&&e&&"number"==typeof e.length){t&&(e=t);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return o=e.done,e},e:function(e){l=!0,i=e},f:function(){try{o||null==t.return||t.return()}finally{if(l)throw i}}}}function k(e,r){(null==r||r>e.length)&&(r=e.length);for(var t=0,n=new Array(r);t<r;t++)n[t]=e[t];return n}function Z(e){var r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var t,n=(0,s.Z)(e);if(r){var a=(0,s.Z)(this).constructor;t=Reflect.construct(n,arguments,a)}else t=n.apply(this,arguments);return(0,l.Z)(this,t)}}var T=function(e){(0,o.Z)(l,e);var r,t=Z(l);function l(){var e;return(0,a.Z)(this,l),(e=t.apply(this,arguments))._graphicsViewMap={},e._popupTemplates=new Map,e.graphicsViews=[],e}return(0,i.Z)(l,[{key:"hitTest",value:(r=(0,n.Z)(c().mark((function e(r,t){var n,a=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(this.graphicsViews.length){e.next=2;break}return e.abrupt("return",null);case 2:return n=this.graphicsViews.reverse().map((function(e){return e.hitTest(r)})),e.next=5,Promise.all(n);case 5:return e.abrupt("return",e.sent.flat().filter((function(e,r){return e&&(e.popupTemplate=a._popupTemplates.get(a.graphicsViews[r]),e.layer=a.layer,e.sourceLayer=a.layer),!!e})));case 6:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"update",value:function(e){if(this.graphicsViews){var r,t=V(this.graphicsViews);try{for(t.s();!(r=t.n()).done;){r.value.processUpdate(e)}}catch(n){t.e(n)}finally{t.f()}}}},{key:"attach",value:function(){var e=this;this.handles.add([(0,h.S1)(this.layer,"featureCollections",(function(r){e._clear();var t,n=V(r);try{for(n.s();!(t=n.n()).done;){var a=t.value,i=a.popupInfo,o=a.featureSet,l=a.layerDefinition,s=g.default.fromJSON(o),u=new y.Z(s.features),c=l.drawingInfo,p=i?f.Z.fromJSON(i):null,h=(0,m.i)(c.renderer),v=new S.Z({requestUpdateCallback:function(){return e.requestUpdate()},view:e.view,graphics:u,renderer:h,container:new b.Z(e.view.featuresTilingScheme)});e._graphicsViewMap[s.geometryType]=v,e._popupTemplates.set(v,p),"polygon"!==s.geometryType||e.layer.polygonSymbol?"polyline"!==s.geometryType||e.layer.lineSymbol?"point"!==s.geometryType||e.layer.pointSymbol||(e.layer.pointSymbol=h.symbol):e.layer.lineSymbol=h.symbol:e.layer.polygonSymbol=h.symbol,e.graphicsViews.push(v),e.container.addChild(v.container)}}catch(d){n.e(d)}finally{n.f()}})),(0,h.S1)(this.layer,"polygonSymbol",(function(r){e._graphicsViewMap.polygon.renderer=new d.Z({symbol:r})})),(0,h.S1)(this.layer,"lineSymbol",(function(r){e._graphicsViewMap.polyline.renderer=new d.Z({symbol:r})})),(0,h.S1)(this.layer,"pointSymbol",(function(r){e._graphicsViewMap.point.renderer=new d.Z({symbol:r})}))],"georsslayerview")}},{key:"detach",value:function(){this.handles.remove("georsslayerview"),this._clear()}},{key:"moveStart",value:function(){}},{key:"moveEnd",value:function(){}},{key:"viewChange",value:function(){var e,r=V(this.graphicsViews);try{for(r.s();!(e=r.n()).done;){e.value.viewChange()}}catch(t){r.e(t)}finally{r.f()}}},{key:"_clear",value:function(){this.container.removeAllChildren();var e,r=V(this.graphicsViews);try{for(r.s();!(e=r.n()).done;){e.value.destroy()}}catch(t){r.e(t)}finally{r.f()}this._graphicsViewMap={},this._popupTemplates.clear(),this.graphicsViews.length=0}}]),l}((0,w.y)(_.Z)),C=T=(0,p._)([(0,v.j)("esri.views.2d.layers.GeoRSSLayerView2D")],T)}}]);
//# sourceMappingURL=3095-9c9ace2e9b1188c09597.js.map