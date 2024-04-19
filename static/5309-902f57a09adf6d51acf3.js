"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[5309],{5309:function(e,t,r){r.r(t),r.d(t,{default:function(){return X}});var n,l=r(15861),o=r(93433),i=r(4942),u=r(15671),a=r(43144),s=r(11752),y=r(60136),c=r(6215),f=r(61120),p=r(87757),b=r.n(p),v=r(83195),h=(r(58168),r(20410)),d=r(59823),_=r(10173),g=r(80347),m=r(37566),w=r(98840),C=r(89636),k=(r(43079),r(33682),r(64003)),S=r(9634),O=r(30732),Z=r(61979),j=r(39356),E=r(65673),x=r(83350),R=r(74915),L=r(3781),P=r(15665),F=r(29780),M=r(44946),I=r(92332),A=r(54279),N=r(86523),T=r(53315),K=r(83241),H=r(36049),B=r(80632),D=r(59007);function J(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,f.Z)(e);if(t){var l=(0,f.Z)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var z=n=function(e){(0,y.Z)(r,e);var t=J(r);function r(){var e;return(0,u.Z)(this,r),(e=t.apply(this,arguments))._sublayersHandles=null,e.description=null,e.id=null,e.networkLink=null,e.title=null,e.sourceJSON=null,e.fullExtent=null,e}return(0,a.Z)(r,[{key:"initialize",value:function(){var e=this;(0,K.N1)(this,"networkLink").then((function(){return(0,K.LR)(e,"visible")})).then((function(){return e.load()}))}},{key:"load",value:function(e){var t=this;if(this.networkLink&&!this.networkLink.viewFormat){var r=(0,_.pC)(e)?e.signal:null,l=this._fetchService(this._get("networkLink").href,r).then((function(e){var r=(0,B.lm)(e.sublayers);t.fullExtent=D.Z.fromJSON(r),t.sourceJSON=e;var l=(0,k.se)(h.Z.ofType(n),(0,B.j5)(n,e));t.sublayers?t.sublayers.addMany(l):t.sublayers=l,t.layer.emit("sublayer-update"),t.layer&&t.layer.notifyChange("visibleSublayers")}));return this.addResolvingPromise(l),Promise.resolve(this)}}},{key:"sublayers",set:function(e){var t=this,r=this._get("sublayers");r&&(r.forEach((function(e){e.parent=null,e.layer=null})),this._sublayersHandles.forEach((function(e){return e.remove()})),this._sublayersHandles=null),e&&(e.forEach((function(e){e.parent=t,e.layer=t.layer})),this._sublayersHandles=[e.on("after-add",(function(e){var r=e.item;r.parent=t,r.layer=t.layer})),e.on("after-remove",(function(e){var t=e.item;t.parent=null,t.layer=null}))]),this._set("sublayers",e)}},{key:"castSublayers",value:function(e){return(0,k.se)(h.Z.ofType(n),e)}},{key:"visible",get:function(){return this._get("visible")},set:function(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}},{key:"readVisible",value:function(e,t){return!!t.visibility}},{key:"layer",set:function(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach((function(t){return t.layer=e}))}},{key:"_fetchService",value:function(e,t){return(0,B.CS)(e,this.layer.outSpatialReference,this.layer.refreshInterval,t).then((function(e){return(0,B.Cw)(e.data)}))}}]),r}(I.Z.EventedMixin((0,A.eC)(N.Z)));(0,v._)([(0,C.Cb)()],z.prototype,"description",void 0),(0,v._)([(0,C.Cb)()],z.prototype,"id",void 0),(0,v._)([(0,C.Cb)({readOnly:!0,value:null})],z.prototype,"networkLink",void 0),(0,v._)([(0,C.Cb)({json:{write:{allowNull:!0}}})],z.prototype,"parent",void 0),(0,v._)([(0,C.Cb)({value:null,json:{write:{allowNull:!0}}})],z.prototype,"sublayers",null),(0,v._)([(0,H.p)("sublayers")],z.prototype,"castSublayers",null),(0,v._)([(0,C.Cb)({value:null,json:{read:{source:"name",reader:function(e){return(0,T.Cb)(e)}}}})],z.prototype,"title",void 0),(0,v._)([(0,C.Cb)({value:!0})],z.prototype,"visible",null),(0,v._)([(0,S.r)("visible",["visibility"])],z.prototype,"readVisible",null),(0,v._)([(0,C.Cb)()],z.prototype,"sourceJSON",void 0),(0,v._)([(0,C.Cb)({value:null})],z.prototype,"layer",null),(0,v._)([(0,C.Cb)({type:D.Z})],z.prototype,"fullExtent",void 0);var W=z=n=(0,v._)([(0,O.j)("esri.layers.support.KMLSublayer")],z);function Q(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return V(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,l=function(){};return{s:l,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,i=!0,u=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){u=!0,o=e},f:function(){try{i||null==r.return||r.return()}finally{if(u)throw o}}}}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function q(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function G(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,f.Z)(e);if(t){var l=(0,f.Z)(this).constructor;r=Reflect.construct(n,arguments,l)}else r=n.apply(this,arguments);return(0,c.Z)(this,r)}}var U=["kml","xml"],$=function(e){(0,y.Z)(n,e);var t,r=G(n);function n(){var e;(0,u.Z)(this,n);for(var t=arguments.length,l=new Array(t),o=0;o<t;o++)l[o]=arguments[o];return(e=r.call.apply(r,[this].concat(l)))._visibleFolders=[],e.allSublayers=new d.Z({getCollections:function(){return[e.sublayers]},getChildrenFunction:function(e){return e.sublayers}}),e.outSpatialReference=j.Z.WGS84,e.path=null,e.legendEnabled=!1,e.operationalLayerType="KML",e.sublayers=null,e.type="kml",e.url=null,e}return(0,a.Z)(n,[{key:"initialize",value:function(){var e=this;this.watch("sublayers",(function(t,r){r&&r.forEach((function(e){e.parent=null,e.layer=null})),t&&t.forEach((function(t){t.parent=e,t.layer=e}))}),!0),this.on("sublayer-update",(function(){return e.notifyChange("fullExtent")}))}},{key:"normalizeCtorArgs",value:function(e,t){return"string"==typeof e?function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?q(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):q(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({url:e},t):e}},{key:"readSublayersFromItemOrWebMap",value:function(e,t){this._visibleFolders=t.visibleFolders}},{key:"readSublayers",value:function(e,t,r){return(0,B.j5)(W,t,r,this._visibleFolders)}},{key:"writeSublayers",value:function(e,t){for(var r=[],n=e.toArray();n.length;){var l=n[0];l.networkLink||(l.visible&&r.push(l.id),l.sublayers&&n.push.apply(n,(0,o.Z)(l.sublayers.toArray()))),n.shift()}t.visibleFolders=r}},{key:"title",get:function(){var e=this._get("title");return e&&"defaults"!==this.originOf("title")?e:this.url?(0,w.vt)(this.url,U)||"KML":e||""},set:function(e){this._set("title",e)}},{key:"visibleSublayers",get:function(){var e=this.sublayers,t=[];return e&&e.forEach((function e(r){r.visible&&(t.push(r),r.sublayers&&r.sublayers.forEach(e))})),t}},{key:"fullExtent",get:function(){return this._recomputeFullExtent()}},{key:"load",value:function(e){var t=this,r=(0,_.pC)(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"]},e).catch(m.r9).then((function(){return t._fetchService(r)}))),Promise.resolve(this)}},{key:"destroy",value:function(){(0,s.Z)((0,f.Z)(n.prototype),"destroy",this).call(this),this.allSublayers.destroy()}},{key:"_fetchService",value:(t=(0,l.Z)(b().mark((function e(t){var r,n,l=this;return b().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.resolve().then((function(){return l.resourceInfo?{ssl:!1,data:l.resourceInfo}:(0,B.CS)(l.url,l.outSpatialReference,l.refreshInterval,t)}));case 2:r=e.sent,(n=(0,B.Cw)(r.data))&&this.read(n,{origin:"service"});case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_recomputeFullExtent",value:function(){var e=null;(0,_.pC)(this.extent)&&(e=this.extent.clone());return function t(r){if(r.sublayers){var n,l=Q(r.sublayers.items);try{for(l.s();!(n=l.n()).done;){var o=n.value;t(o),o.visible&&o.fullExtent&&((0,_.pC)(e)?e.union(o.fullExtent):e=o.fullExtent.clone())}}catch(i){l.e(i)}finally{l.f()}}}(this),e}}]),n}((0,x.h)((0,P.Q)((0,F.M)((0,R.q)((0,L.I)((0,g.R)(E.Z)))))));(0,v._)([(0,C.Cb)({readOnly:!0})],$.prototype,"allSublayers",void 0),(0,v._)([(0,C.Cb)({type:j.Z})],$.prototype,"outSpatialReference",void 0),(0,v._)([(0,C.Cb)({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],$.prototype,"path",void 0),(0,v._)([(0,C.Cb)({readOnly:!0,json:{read:!1,write:!1}})],$.prototype,"legendEnabled",void 0),(0,v._)([(0,C.Cb)({type:["show","hide","hide-children"]})],$.prototype,"listMode",void 0),(0,v._)([(0,C.Cb)({type:["KML"]})],$.prototype,"operationalLayerType",void 0),(0,v._)([(0,C.Cb)({})],$.prototype,"resourceInfo",void 0),(0,v._)([(0,C.Cb)({type:h.Z.ofType(W),json:{write:{ignoreOrigin:!0}}})],$.prototype,"sublayers",void 0),(0,v._)([(0,S.r)(["web-map","portal-item"],"sublayers",["visibleFolders"])],$.prototype,"readSublayersFromItemOrWebMap",null),(0,v._)([(0,S.r)("service","sublayers",["sublayers"])],$.prototype,"readSublayers",null),(0,v._)([(0,Z.c)("sublayers")],$.prototype,"writeSublayers",null),(0,v._)([(0,C.Cb)({readOnly:!0,json:{read:!1}})],$.prototype,"type",void 0),(0,v._)([(0,C.Cb)({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],$.prototype,"title",null),(0,v._)([(0,C.Cb)(M.HQ)],$.prototype,"url",void 0),(0,v._)([(0,C.Cb)({readOnly:!0})],$.prototype,"visibleSublayers",null),(0,v._)([(0,C.Cb)({type:D.Z})],$.prototype,"extent",void 0),(0,v._)([(0,C.Cb)()],$.prototype,"fullExtent",null);var X=$=(0,v._)([(0,O.j)("esri.layers.KMLLayer")],$)}}]);
//# sourceMappingURL=5309-902f57a09adf6d51acf3.js.map