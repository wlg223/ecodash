"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[1608],{31608:function(e,t,r){r.r(t),r.d(t,{default:function(){return W}});var n=r(15861),a=r(15671),o=r(43144),i=r(60136),l=r(6215),s=r(61120),u=r(87757),c=r.n(u),p=r(83195),y=r(51916),d=r(33300),g=r(16924),f=r(10173),b=r(80347),h=r(89636),v=(r(43079),r(33682),r(64003),r(30732)),m=r(39356),w=r(4942),M=r(59007),_=r(22983),Z=r(65673),k=r(83350),j=r(15665),O=r(29780),R=r(22176);function C(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function P(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?C(Object(r),!0).forEach((function(t){(0,w.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):C(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function S(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var a=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var B={id:"0/0/0",level:0,row:0,col:0,extent:null},x=function(e){(0,i.Z)(r,e);var t=S(r);function r(){var e;return(0,a.Z)(this,r),(e=t.apply(this,arguments)).tileInfo=R.Z.create({spatialReference:m.Z.WebMercator,size:256}),e.type="base-tile",e.fullExtent=new M.Z(-20037508.342787,-20037508.34278,20037508.34278,20037508.342787,m.Z.WebMercator),e.spatialReference=m.Z.WebMercator,e}return(0,o.Z)(r,[{key:"getTileBounds",value:function(e,t,r,n){var a=n||(0,_.Ue)();return B.level=e,B.row=t,B.col=r,B.extent=a,this.tileInfo.updateTileInfo(B),B.extent=null,a}},{key:"fetchTile",value:function(e,t,r){var n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{},a=n.signal,o=this.getTileUrl(e,t,r),i={responseType:"image",signal:a,query:P({},this.refreshParameters)};return(0,y.default)(o,i).then((function(e){return e.data}))}},{key:"getTileUrl",value:function(){throw new d.Z("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}}]),r}((0,k.h)((0,O.M)((0,j.Q)(Z.Z))));(0,p._)([(0,h.Cb)({type:R.Z})],x.prototype,"tileInfo",void 0),(0,p._)([(0,h.Cb)({type:["show","hide"]})],x.prototype,"listMode",void 0),(0,p._)([(0,h.Cb)({readOnly:!0,value:"base-tile"})],x.prototype,"type",void 0),(0,p._)([(0,h.Cb)({nonNullable:!0})],x.prototype,"fullExtent",void 0),(0,p._)([(0,h.Cb)()],x.prototype,"spatialReference",void 0);var T=x=(0,p._)([(0,v.j)("esri.layers.BaseTileLayer")],x),U=r(74915);function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,s.Z)(e);if(t){var a=(0,s.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var I=new g.Xn({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),L=function(e){(0,i.Z)(l,e);var t,r=D(l);function l(e){var t;return(0,a.Z)(this,l),(t=r.call(this,e)).type="bing-maps",t.tileInfo=new R.Z({size:[256,256],dpi:96,origin:{x:-20037508.342787,y:20037508.342787,spatialReference:m.Z.WebMercator},spatialReference:m.Z.WebMercator,lods:[{level:1,resolution:78271.5169639999,scale:295828763.795777},{level:2,resolution:39135.7584820001,scale:147914381.897889},{level:3,resolution:19567.8792409999,scale:73957190.948944},{level:4,resolution:9783.93962049996,scale:36978595.474472},{level:5,resolution:4891.96981024998,scale:18489297.737236},{level:6,resolution:2445.98490512499,scale:9244648.868618},{level:7,resolution:1222.99245256249,scale:4622324.434309},{level:8,resolution:611.49622628138,scale:2311162.217155},{level:9,resolution:305.748113140558,scale:1155581.108577},{level:10,resolution:152.874056570411,scale:577790.554289},{level:11,resolution:76.4370282850732,scale:288895.277144},{level:12,resolution:38.2185141425366,scale:144447.638572},{level:13,resolution:19.1092570712683,scale:72223.819286},{level:14,resolution:9.55462853563415,scale:36111.909643},{level:15,resolution:4.77731426794937,scale:18055.954822},{level:16,resolution:2.38865713397468,scale:9027.977411},{level:17,resolution:1.19432856685505,scale:4513.988705},{level:18,resolution:.597164283559817,scale:2256.994353},{level:19,resolution:.298582141647617,scale:1128.497176},{level:20,resolution:.1492910708238085,scale:564.248588}]}),t.key=null,t.style="road",t.culture="en-US",t.region=null,t.portalUrl=null,t.hasAttributionData=!0,t}return(0,o.Z)(l,[{key:"bingMetadata",get:function(){return this._get("bingMetadata")},set:function(e){this._set("bingMetadata",e)}},{key:"copyright",get:function(){return(0,f.pC)(this.bingMetadata)?this.bingMetadata.copyright:null}},{key:"operationalLayerType",get:function(){return I.toJSON(this.style)}},{key:"bingLogo",get:function(){return(0,f.pC)(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}},{key:"load",value:function(e){var t=this;return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then((function(){return t._getMetadata()}))):this.addResolvingPromise(Promise.reject(new d.Z("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}},{key:"getTileUrl",value:function(e,t,r){if(!this.loaded||(0,f.Wi)(this.bingMetadata))return null;var n=this.bingMetadata.resourceSets[0].resources[0],a=n.imageUrlSubdomains[t%n.imageUrlSubdomains.length],o=this._getQuadKey(e,t,r);return n.imageUrl.replace("{subdomain}",a).replace("{quadkey}",o)}},{key:"fetchAttributionData",value:(t=(0,n.Z)(c().mark((function e(){var t=this;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",this.load().then((function(){return(0,f.Wi)(t.bingMetadata)?null:{contributors:t.bingMetadata.resourceSets[0].resources[0].imageryProviders.map((function(e){return{attribution:e.attribution,coverageAreas:e.coverageAreas.map((function(e){return{zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}}))}}))}})));case 1:case"end":return e.stop()}}),e,this)}))),function(){return t.apply(this,arguments)})},{key:"_getMetadata",value:function(){var e=this,t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return(0,y.default)("".concat("https://dev.virtualearth.net","/REST/v1/Imagery/Metadata/").concat(t),{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then((function(t){var r=t.data;if(200!==r.statusCode)throw new d.Z("bingmapslayer:getmetadata",r.statusDescription);if(e.bingMetadata=r,0===e.bingMetadata.resourceSets.length)throw new d.Z("bingmapslayer:getmetadata","no bing resourcesets");if(0===e.bingMetadata.resourceSets[0].resources.length)throw new d.Z("bingmapslayer:getmetadata","no bing resources")})).catch((function(e){throw new d.Z("bingmapslayer:getmetadata",e.message)}))}},{key:"_getPortalBingKey",value:function(){var e=this;return(0,y.default)(this.portalUrl,{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then((function(t){if(!t.data.bingKey)throw new d.Z("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");e.key=t.data.bingKey})).catch((function(e){throw new d.Z("bingmapslayer:getportalbingkey",e.message)}))}},{key:"_getQuadKey",value:function(e,t,r){for(var n="",a=e;a>0;a--){var o=0,i=1<<a-1;0!=(r&i)&&(o+=1),0!=(t&i)&&(o+=2),n+=o.toString()}return n}}]),l}((0,k.h)((0,U.q)((0,b.R)(T))));(0,p._)([(0,h.Cb)({json:{read:!1,write:!1},value:null})],L.prototype,"bingMetadata",null),(0,p._)([(0,h.Cb)({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],L.prototype,"type",void 0),(0,p._)([(0,h.Cb)({type:R.Z})],L.prototype,"tileInfo",void 0),(0,p._)([(0,h.Cb)({type:String,readOnly:!0,json:{read:!1,write:!1}})],L.prototype,"copyright",null),(0,p._)([(0,h.Cb)({type:String,json:{write:!1,read:!1}})],L.prototype,"key",void 0),(0,p._)([(0,h.Cb)({type:I.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:I.read}}})],L.prototype,"style",void 0),(0,p._)([(0,h.Cb)({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],L.prototype,"operationalLayerType",null),(0,p._)([(0,h.Cb)({type:String,json:{write:!1,read:!1}})],L.prototype,"culture",void 0),(0,p._)([(0,h.Cb)({type:String,json:{write:!1,read:!1}})],L.prototype,"region",void 0),(0,p._)([(0,h.Cb)({type:String,json:{write:!0,read:!0}})],L.prototype,"portalUrl",void 0),(0,p._)([(0,h.Cb)({type:Boolean,json:{write:!1,read:!1}})],L.prototype,"hasAttributionData",void 0),(0,p._)([(0,h.Cb)({type:String,readOnly:!0})],L.prototype,"bingLogo",null);var W=L=(0,p._)([(0,v.j)("esri.layers.BingMapsLayer")],L)}}]);
//# sourceMappingURL=1608-1edeae1e81c500a56ffb.js.map