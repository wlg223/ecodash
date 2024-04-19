"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[1701],{11701:function(e,t,r){r.r(t),r.d(t,{default:function(){return ie}});var n=r(15861),o=r(15671),i=r(43144),a=r(97326),s=r(11752),u=r(60136),l=r(6215),p=r(61120),c=r(87757),d=r.n(c),y=r(83195),f=(r(58168),r(60125)),v=(r(33428),r(98335),r(98021),r(26014),r(61137),r(57171),r(21577),r(93505),r(38552)),h=r(80347),m=r(89636),g=(r(43079),r(33682),r(64003),r(30732)),b=r(88326),C=r(65673),_=r(29439),S=r(33300),w=r(86523),x=r(10173),I=r(7814),k=r(79228),R=r(39356);function Z(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function F(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.Z)(e);if(t){var o=(0,p.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var j=function(e){(0,u.Z)(a,e);var t,r=F(a);function a(){var e;return(0,o.Z)(this,a),(e=r.apply(this,arguments)).featureDefinition=null,e.type="ogc-feature",e}return(0,i.Z)(a,[{key:"load",value:function(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}},{key:"getFeatureDefinition",value:function(){var e=this.featureDefinition,t=e.collection,r=e.layerDefinition,n=e.spatialReference,o=e.supportedCrs,i=this.layer,a=i.apiKey;return{capabilities:i.capabilities,collection:t,layerDefinition:r,queryParameters:{apiKey:a,customParameters:i.customParameters},spatialReference:n,supportedCrs:o}}},{key:"queryExtent",value:function(e){return null}},{key:"queryFeatureCount",value:function(e){return null}},{key:"queryFeatures",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return this.queryFeaturesJSON(e,t).then((function(e){return k.default.fromJSON(e)}))}},{key:"queryFeaturesJSON",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=this.getFeatureDefinition();return this.load(t).then((function(){return(0,I.yN)(r,e,t)}))}},{key:"queryObjectIds",value:function(e){return null}},{key:"supportsSpatialReference",value:function(e){return!(!e.isWGS84&&!e.isWebMercator&&!this.featureDefinition.supportedCrs[e.wkid])}},{key:"_conformsToType",value:function(e,t){var r,n=new RegExp("^".concat(t,"$"),"i");return null!=(r=e.conformsTo.some((function(e){return n.test(e)})))&&r}},{key:"_getCapabilities",value:function(e,t){var r,n,o,i,a,s,u,l=(0,x.pC)(t)?null==(r=t.components)?void 0:r.parameters:null;return{attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAttachments:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:null!=(n=null!=(o=null==l||null==(i=l.limit)||null==(a=i.schema)?void 0:a.maximum)?o:null==l||null==(s=l.limitFeatures)||null==(u=s.schema)?void 0:u.maximum)?n:5e3,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}},{key:"_getExtent",value:function(e){var t,r=null==(t=e.extent)?void 0:t.spatial;if(!r)return null;var n=r.bbox[0],o=4===n.length,i=n[0],a=n[1],s=o?void 0:n[2];return{xmin:i,ymin:a,xmax:o?n[2]:n[3],ymax:o?n[3]:n[4],zmin:s,zmax:o?void 0:n[5],spatialReference:R.Z.WGS84.toJSON()}}},{key:"_getStorageSpatialReference",value:function(e){var t,r=null!=(t=e.storageCrs)?t:I.$9,n=(0,I.d)(r);return(0,x.Wi)(n)?R.Z.WGS84:new R.Z({wkid:n})}},{key:"_getSupportedSpatialReferences",value:function(e,t){var r,n="#/crs",o=null!=(r=e.crs)?r:[I.$9],i=o.includes(n)?o.filter((function(e){return e!==n})).concat(t.crs):o,a=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return i.filter((function(e){return!a.test(e)}))}},{key:"_loadOGCServices",value:(t=(0,n.Z)(d().mark((function e(t,r){var n,o,i,a,s,u,l,p,c,y,f,v,h,m,g,C,w,k,R,O,F,j,D,T,P,E,A,q,G,B;return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=(0,x.pC)(r)?r.signal:null,o=t.apiKey,i=t.collectionId,a=t.customParameters,s=t.fields,u=t.geometryType,l=t.hasZ,p=t.objectIdField,c=t.timeInfo,y=t.url,f={fields:null==s?void 0:s.map((function(e){return e.toJSON()})),geometryType:b.P$.toJSON(u),hasZ:l,objectIdField:p,timeInfo:null==c?void 0:c.toJSON()},v={apiKey:o,customParameters:a,signal:n},e.next=14,(0,I.gp)(y,v);case 14:return h=e.sent,e.next=17,Promise.all([(0,I.G4)(h,v),(0,I.j)(h,v)]);case 17:if(m=e.sent,g=(0,_.Z)(m,2),C=g[0],w=g[1],this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson")){e.next=23;break}throw new S.Z("ogc-feature-layer:no-geojson-support","Server does not support geojson");case 23:if(k=w.collections.find((function(e){return e.id===i})),k){e.next=26;break}throw new S.Z("ogc-feature-layer:collection-not-found","Server does not contain the named collection");case 26:if(!this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")){e.next=32;break}return e.next=29,(0,I.eS)(h,v);case 29:e.t0=e.sent,e.next=33;break;case 32:e.t0=null;case 33:return R=e.t0,e.next=36,(0,I.w9)(k,f,v);case 36:O=e.sent,F=this._getCapabilities(O.hasZ,R),j=this._getExtent(k),D=this._getStorageSpatialReference(k).toJSON(),T=this._getSupportedSpatialReferences(k,w),P=new RegExp("^".concat(I.Lu),"i"),E={},A=Z(T);try{for(A.s();!(q=A.n()).done;)G=q.value,B=(0,I.d)(G),(0,x.pC)(B)&&(E[B]||(E[B]=G.replace(P,"")))}catch(d){A.e(d)}finally{A.f()}O.extent=j,this.featureDefinition={capabilities:F,collection:k,layerDefinition:O,queryParameters:{},spatialReference:D,supportedCrs:E};case 46:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})}]),a}(w.Z);(0,y._)([(0,m.Cb)()],j.prototype,"featureDefinition",void 0),(0,y._)([(0,m.Cb)({constructOnly:!0})],j.prototype,"layer",void 0),(0,y._)([(0,m.Cb)()],j.prototype,"type",void 0);var D=j=(0,y._)([(0,g.j)("esri.layers.graphics.sources.OGCFeatureSource")],j),T=r(25258),P=r(83350),E=r(39987),A=r(53797),q=r(74915),G=r(92894),B=r(3781),M=r(15665),N=r(29780),Q=r(38313),L=r(44946),U=r(20631),z=r(69121),J=r(35166),V=r(15003),W=r(43749),$=r(22462),H=r(27909),K=r(56100),Y=r(97879),X=r(59007);function ee(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return te(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return te(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,i=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw i}}}}function te(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function re(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,p.Z)(e);if(t){var o=(0,p.Z)(this).constructor;r=Reflect.construct(n,arguments,o)}else r=n.apply(this,arguments);return(0,l.Z)(this,r)}}var ne=(0,V.v)(),oe=function(e){(0,u.Z)(l,e);var t,r=re(l);function l(e){var t;return(0,o.Z)(this,l),(t=r.call(this,e)).collectionId=null,t.copyright=null,t.definitionExpression=null,t.description=null,t.displayField=null,t.elevationInfo=null,t.featureReduction=null,t.fields=null,t.fieldsIndex=null,t.fullExtent=null,t.geometryType=null,t.hasZ=void 0,t.labelingInfo=null,t.labelsVisible=!0,t.legendEnabled=!0,t.objectIdField=null,t.operationalLayerType="OGCFeatureLayer",t.popupEnabled=!0,t.popupTemplate=null,t.screenSizePerspectiveEnabled=!0,t.source=new D({layer:(0,a.Z)(t)}),t.spatialReference=null,t.title=null,t.type="ogc-feature",t.typeIdField=null,t.types=null,t.url=null,t}return(0,i.Z)(l,[{key:"destroy",value:function(){var e;null==(e=this.source)||e.destroy()}},{key:"load",value:function(e){var t=this;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then((function(){return t._fetchService(e)}))),this.when()}},{key:"defaultPopupTemplate",get:function(){return this.createPopupTemplate()}},{key:"isTable",get:function(){return this.loaded&&null==this.geometryType}},{key:"renderer",set:function(e){(0,W.YN)(e,this.fieldsIndex),this._set("renderer",e)}},{key:"on",value:function(e,t){return(0,s.Z)((0,p.Z)(l.prototype),"on",this).call(this,e,t)}},{key:"createPopupTemplate",value:function(e){return(0,Y.eZ)(this,e)}},{key:"createQuery",value:function(){return new K.Z}},{key:"getField",value:function(e){return this.fieldsIndex.get(e)}},{key:"getFieldDomain",value:function(e,t){var r,n,o=this,i=!1,a=null==t||null==(r=t.feature)?void 0:r.attributes,s=this.typeIdField&&(null==a?void 0:a[this.typeIdField]);return null!=s&&this.types&&(i=this.types.some((function(t){var r,i;return t.id==s&&("inherited"===(null==(i=n=null==(r=t.domains)?void 0:r[e])?void 0:i.type)&&(n=o._getLayerDomain(e)),!0)}))),i||n||(n=this._getLayerDomain(e)),n}},{key:"queryFeatures",value:function(e,t){var r=this;return this.load().then((function(){return r.source.queryFeatures(K.Z.from(e)||r.createQuery(),t)})).then((function(e){var t;return null==e||null==(t=e.features)||t.forEach((function(e){e.layer=e.sourceLayer=r})),e}))}},{key:"_fetchService",value:(t=(0,n.Z)(d().mark((function e(t){return d().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.source.load(t);case 2:this.read(this.source.featureDefinition,{origin:"service"}),(0,W.YN)(this.renderer,this.fieldsIndex),(0,W.UF)(this.timeInfo,this.fieldsIndex);case 5:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_getLayerDomain",value:function(e){if(!this.fields)return null;var t,r=ee(this.fields);try{for(r.s();!(t=r.n()).done;){var n=t.value;if(n.name===e&&n.domain)return n.domain}}catch(o){r.e(o)}finally{r.f()}return null}}]),l}((0,T.V)((0,E.N)((0,A.b)((0,P.h)((0,G.c)((0,Q.n)((0,N.M)((0,q.q)((0,B.I)((0,M.Q)((0,h.R)(C.Z))))))))))));(0,y._)([(0,m.Cb)({readOnly:!0,json:{origins:{service:{read:!0}}}})],oe.prototype,"capabilities",void 0),(0,y._)([(0,m.Cb)({type:String,json:{write:!0}})],oe.prototype,"collectionId",void 0),(0,y._)([(0,m.Cb)({type:String})],oe.prototype,"copyright",void 0),(0,y._)([(0,m.Cb)({readOnly:!0})],oe.prototype,"defaultPopupTemplate",null),(0,y._)([(0,m.Cb)({type:String})],oe.prototype,"definitionExpression",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],oe.prototype,"description",void 0),(0,y._)([(0,m.Cb)({type:String})],oe.prototype,"displayField",void 0),(0,y._)([(0,m.Cb)(L.PV)],oe.prototype,"elevationInfo",void 0),(0,y._)([(0,m.Cb)(U.d)],oe.prototype,"featureReduction",void 0),(0,y._)([(0,m.Cb)({type:[J.Z],json:{origins:{service:{name:"layerDefinition.fields"}}}})],oe.prototype,"fields",void 0),(0,y._)([(0,m.Cb)(ne.fieldsIndex)],oe.prototype,"fieldsIndex",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:X.Z,json:{origins:{service:{name:"layerDefinition.extent"}}}})],oe.prototype,"fullExtent",void 0),(0,y._)([(0,m.Cb)({type:b.Mk.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:b.Mk.read}}}}})],oe.prototype,"geometryType",void 0),(0,y._)([(0,m.Cb)({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],oe.prototype,"hasZ",void 0),(0,y._)([(0,m.Cb)({type:Boolean,readOnly:!0})],oe.prototype,"isTable",null),(0,y._)([(0,m.Cb)({type:[$.Z],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:H.r},write:!0}}}})],oe.prototype,"labelingInfo",void 0),(0,y._)([(0,m.Cb)(L.iR)],oe.prototype,"labelsVisible",void 0),(0,y._)([(0,m.Cb)(L.rn)],oe.prototype,"legendEnabled",void 0),(0,y._)([(0,m.Cb)({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],oe.prototype,"objectIdField",void 0),(0,y._)([(0,m.Cb)({type:["OGCFeatureLayer"]})],oe.prototype,"operationalLayerType",void 0),(0,y._)([(0,m.Cb)(L.C_)],oe.prototype,"popupEnabled",void 0),(0,y._)([(0,m.Cb)({type:f.Z,json:{name:"popupInfo",write:!0}})],oe.prototype,"popupTemplate",void 0),(0,y._)([(0,m.Cb)({types:v.A,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:v.o,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],oe.prototype,"renderer",null),(0,y._)([(0,m.Cb)(L.YI)],oe.prototype,"screenSizePerspectiveEnabled",void 0),(0,y._)([(0,m.Cb)({readOnly:!0})],oe.prototype,"source",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,type:R.Z,json:{origins:{service:{read:!0}}}})],oe.prototype,"spatialReference",void 0),(0,y._)([(0,m.Cb)({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],oe.prototype,"title",void 0),(0,y._)([(0,m.Cb)({readOnly:!0,json:{read:!1}})],oe.prototype,"type",void 0),(0,y._)([(0,m.Cb)({type:String,readOnly:!0})],oe.prototype,"typeIdField",void 0),(0,y._)([(0,m.Cb)({type:[z.Z]})],oe.prototype,"types",void 0),(0,y._)([(0,m.Cb)(L.HQ)],oe.prototype,"url",void 0);var ie=oe=(0,y._)([(0,g.j)("esri.layers.OGCFeatureLayer")],oe)}}]);
//# sourceMappingURL=1701-84ac19f59107acd5f952.js.map