"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[8992],{88992:function(e,t,r){r.r(t),r.d(t,{default:function(){return G}});var n=r(4942),a=r(93433),u=r(15671),s=r(43144),i=r(60136),o=r(6215),c=r(61120),l=r(15861),d=r(87757),p=r.n(d),h=r(83195),f=(r(58168),r(9340)),y=r(51916),v=r(27615),m=r(33300),b=r(33682),g=r(16924),k=r(86523),x=r(10173),R=r(34582),F=r(37566),w=r(98840),_=r(89636),O=(r(43079),r(64003),r(30732)),I=r(59007),q=r(73376),S=r(47e3),E=r(22469),Z=r(31737),A=r(33155),T=r(39356);function j(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function J(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?j(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):j(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function N(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return C(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return C(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,s=!0,i=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return s=e.done,e},e:function(e){i=!0,u=e},f:function(){try{s||null==r.return||r.return()}finally{if(i)throw u}}}}function C(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function D(e){var t=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var r,n=(0,c.Z)(e);if(t){var a=(0,c.Z)(this).constructor;r=Reflect.construct(n,arguments,a)}else r=n.apply(this,arguments);return(0,o.Z)(this,r)}}var P=new g.Xn({originalAndCurrentFeatures:"original-and-current-features",none:"none"});function U(e){return Q.apply(this,arguments)}function Q(){return(Q=(0,l.Z)(p().mark((function e(t){var r;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("string"!=typeof t){e.next=3;break}return r=(0,w.sJ)(t),e.abrupt("return",r||{data:t});case 3:return e.abrupt("return",new Promise((function(e,r){var n=new FileReader;n.readAsDataURL(t),n.onload=function(){return e((0,w.sJ)(n.result))},n.onerror=function(e){return r(e)}})));case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=new Set(["Feature Layer","Table"]),M=function(e){(0,i.Z)(B,e);var t,r,n,o,c,d,h,g,k,w,_,O,j,C,Q,M,G,z,V=D(B);function B(){var e;return(0,u.Z)(this,B),(e=V.apply(this,arguments)).type="feature-layer",e.refresh=(0,F.Ds)((0,l.Z)(p().mark((function t(){var r,n,a,u;return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.load();case 2:if(null!=(a=null==(r=e.sourceJSON.editingInfo)?void 0:r.lastEditDate)){t.next=5;break}return t.abrupt("return",{dataChanged:!0,updates:{}});case 5:return t.prev=5,t.next=8,e._fetchService(null);case 8:t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(5),t.abrupt("return",{dataChanged:!0,updates:{}});case 13:return u=a!==(null==(n=e.sourceJSON.editingInfo)?void 0:n.lastEditDate),t.abrupt("return",{dataChanged:u,updates:u?{editingInfo:e.sourceJSON.editingInfo,extent:e.sourceJSON.extent}:null});case 15:case"end":return t.stop()}}),t,null,[[5,10]])})))),e}return(0,s.Z)(B,[{key:"load",value:function(e){var t=(0,x.pC)(e)?e.signal:null;return this.addResolvingPromise(this._fetchService(this.layer.sourceJSON,t)),Promise.resolve(this)}},{key:"queryTask",get:function(){var e=this.layer,t=e.capabilities.query.supportsFormatPBF,r=e.parsedUrl,n=e.dynamicDataSource,a=e.infoFor3D,u=e.gdbVersion,s=e.spatialReference,i=e.fieldsIndex,o=(0,b.Z)("featurelayer-pbf")&&t&&(0,x.Wi)(a)?"pbf":"json";return new A.Z({url:r.path,format:o,fieldsIndex:i,infoFor3D:a,dynamicDataSource:n,gdbVersion:u,sourceSpatialReference:s})}},{key:"addAttachment",value:(z=(0,l.Z)(p().mark((function e(t,r){var n,a,u,s,i;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/addAttachment",u=this._getLayerRequestOptions(),s=this._getFormDataForAttachment(r,u.query),e.prev=3,e.next=6,(0,y.default)(a,{body:s});case 6:return i=e.sent,e.abrupt("return",this._createFeatureEditResult(i.data.addAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(n,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(e,t){return z.apply(this,arguments)})},{key:"updateAttachment",value:(G=(0,l.Z)(p().mark((function e(t,r,n){var a,u,s,i,o;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return a=t.attributes[this.layer.objectIdField],u=this.layer.parsedUrl.path+"/"+a+"/updateAttachment",s=this._getLayerRequestOptions({query:{attachmentId:r}}),i=this._getFormDataForAttachment(n,s.query),e.prev=3,e.next=6,(0,y.default)(u,{body:i});case 6:return o=e.sent,e.abrupt("return",this._createFeatureEditResult(o.data.updateAttachmentResult));case 10:throw e.prev=10,e.t0=e.catch(3),this._createAttachmentErrorResult(a,e.t0);case 13:case"end":return e.stop()}}),e,this,[[3,10]])}))),function(e,t,r){return G.apply(this,arguments)})},{key:"applyEdits",value:(M=(0,l.Z)(p().mark((function e(t,r){var n,u,s,i,o,c,l,d,h,f,v,m,b,g,k,x,R;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:n=t.addFeatures.map(this._serializeFeature,this),u=t.updateFeatures.map(this._serializeFeature,this),s=this._getFeatureIds(t.deleteFeatures,null==r?void 0:r.globalIdUsed),(0,E.P)(n,u,this.layer.spatialReference),i=[],o=[],c=(0,a.Z)(t.deleteAttachments),l=N(t.addAttachments),e.prev=6,l.s();case 8:if((d=l.n()).done){e.next=17;break}return h=d.value,e.t0=i,e.next=13,this._serializeAttachment(h);case 13:e.t1=e.sent,e.t0.push.call(e.t0,e.t1);case 15:e.next=8;break;case 17:e.next=22;break;case 19:e.prev=19,e.t2=e.catch(6),l.e(e.t2);case 22:return e.prev=22,l.f(),e.finish(22);case 25:f=N(t.updateAttachments),e.prev=26,f.s();case 28:if((v=f.n()).done){e.next=37;break}return m=v.value,e.t3=o,e.next=33,this._serializeAttachment(m);case 33:e.t4=e.sent,e.t3.push.call(e.t3,e.t4);case 35:e.next=28;break;case 37:e.next=42;break;case 39:e.prev=39,e.t5=e.catch(26),f.e(e.t5);case 42:return e.prev=42,f.f(),e.finish(42);case 45:return b=i.length||o.length||c.length?{adds:i,updates:o,deletes:c}:null,g={gdbVersion:(null==r?void 0:r.gdbVersion)||this.layer.gdbVersion,rollbackOnFailure:null==r?void 0:r.rollbackOnFailureEnabled,useGlobalIds:null==r?void 0:r.globalIdUsed,returnEditMoment:null==r?void 0:r.returnEditMoment,usePreviousEditMoment:null==r?void 0:r.usePreviousEditMoment,sessionId:null==r?void 0:r.sessionId},null!=r&&r.returnServiceEditsOption?(g.edits=JSON.stringify([{id:this.layer.layerId,adds:n,updates:u,deletes:s,attachments:b}]),g.returnServiceEditsOption=P.toJSON(null==r?void 0:r.returnServiceEditsOption),g.returnServiceEditsInSourceSR=null==r?void 0:r.returnServiceEditsInSourceSR):(g.adds=n.length?JSON.stringify(n):null,g.updates=u.length?JSON.stringify(u):null,g.deletes=s.length?null!=r&&r.globalIdUsed?JSON.stringify(s):s.join(","):null,g.attachments=b&&JSON.stringify(b)),k=this._getLayerRequestOptions({method:"post",query:g}),x=null!=r&&r.returnServiceEditsOption?this.layer.url:this.layer.parsedUrl.path,e.next=51,(0,y.default)(x+"/applyEdits",k);case 51:return R=e.sent,e.abrupt("return",this._createEditsResult(R));case 53:case"end":return e.stop()}}),e,this,[[6,19,22,25],[26,39,42,45]])}))),function(e,t){return M.apply(this,arguments)})},{key:"deleteAttachments",value:(Q=(0,l.Z)(p().mark((function e(t,r){var n,a;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return n=t.attributes[this.layer.objectIdField],a=this.layer.parsedUrl.path+"/"+n+"/deleteAttachments",e.prev=3,e.next=6,(0,y.default)(a,this._getLayerRequestOptions({query:{attachmentIds:r.join(",")},method:"post"}));case 6:return e.abrupt("return",e.sent.data.deleteAttachmentResults.map(this._createFeatureEditResult));case 9:throw e.prev=9,e.t0=e.catch(3),this._createAttachmentErrorResult(n,e.t0);case 12:case"end":return e.stop()}}),e,this,[[3,9]])}))),function(e,t){return Q.apply(this,arguments)})},{key:"fetchRecomputedExtents",value:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=t.signal;return this.load({signal:r}).then((0,l.Z)(p().mark((function r(){var n,a,u,s,i,o,c,l,d,h,f;return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n=e._getLayerRequestOptions(J(J({},t),{},{query:{returnUpdates:!0}})),a=e.layer,u=a.layerId,s=a.url,r.next=6,(0,y.default)("".concat(s,"/").concat(u),n);case 6:return i=r.sent,o=i.data,c=o.id,l=o.extent,d=o.fullExtent,h=o.timeExtent,f=l||d,r.abrupt("return",{id:c,fullExtent:f&&I.Z.fromJSON(f),timeExtent:h&&v.Z.fromJSON({start:h[0],end:h[1]})});case 14:case"end":return r.stop()}}),r)}))))}},{key:"queryAttachments",value:(C=(0,l.Z)(p().mark((function e(t){var r,n,a,u,s,i,o,c,l,d,h=arguments;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=h.length>1&&void 0!==h[1]?h[1]:{},n=this.layer.parsedUrl,a=n.path,e.next=4,this.load();case 4:if(u=this._getLayerRequestOptions(r),this.layer.get("capabilities.operations.supportsQueryAttachments")){e.next=10;break}s=t.objectIds,i=[],o=N(s);try{for(o.s();!(c=o.n()).done;)l=c.value,d=a+"/"+l+"/attachments",i.push((0,y.default)(d,u))}catch(p){o.e(p)}finally{o.f()}return e.abrupt("return",Promise.all(i).then((function(e){return s.map((function(t,r){return{parentObjectId:t,attachmentInfos:e[r].data.attachmentInfos}}))})).then((function(e){return(0,Z.O)(e,a)})));case 10:return e.abrupt("return",this.queryTask.executeAttachmentQuery(t,u));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return C.apply(this,arguments)})},{key:"queryFeatures",value:(j=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.execute(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return j.apply(this,arguments)})},{key:"queryFeaturesJSON",value:(O=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeJSON(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return O.apply(this,arguments)})},{key:"queryObjectIds",value:(_=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForIds(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return _.apply(this,arguments)})},{key:"queryFeatureCount",value:(w=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForCount(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return w.apply(this,arguments)})},{key:"queryExtent",value:(k=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForExtent(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return k.apply(this,arguments)})},{key:"queryRelatedFeatures",value:(g=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQuery(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return g.apply(this,arguments)})},{key:"queryRelatedFeaturesCount",value:(h=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeRelationshipQueryForCount(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return h.apply(this,arguments)})},{key:"queryTopFeatures",value:(d=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeTopFeaturesQuery(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return d.apply(this,arguments)})},{key:"queryTopObjectIds",value:(c=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopIds(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return c.apply(this,arguments)})},{key:"queryTopExtents",value:(o=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopExtents(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return o.apply(this,arguments)})},{key:"queryTopCount",value:(n=(0,l.Z)(p().mark((function e(t,r){return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.load();case 2:return e.abrupt("return",this.queryTask.executeForTopCount(t,J(J({},r),{},{query:this._createRequestQueryOptions(r)})));case 3:case"end":return e.stop()}}),e,this)}))),function(e,t){return n.apply(this,arguments)})},{key:"_createRequestQueryOptions",value:function(e){var t=J(J({},this.layer.customParameters),{},{token:this.layer.apiKey},null==e?void 0:e.query);return this.layer.datesInUnknownTimezone&&(t.timeReferenceUnknownClient=!0),t}},{key:"_fetchService",value:(r=(0,l.Z)(p().mark((function e(t,r){var n,a,u;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=6;break}return e.next=3,(0,y.default)(this.layer.parsedUrl.path,this._getLayerRequestOptions({query:(0,b.Z)("featurelayer-advanced-symbols")?{returnAdvancedSymbols:!0}:{},signal:r}));case 3:n=e.sent,a=n.data,t=a;case 6:if(this.sourceJSON=this._patchServiceJSON(t),u=t.type,L.has(u)){e.next=10;break}throw new m.Z("feature-layer-source:unsupported-type",'Source type "'.concat(u,'" is not supported'));case 10:case"end":return e.stop()}}),e,this)}))),function(e,t){return r.apply(this,arguments)})},{key:"_patchServiceJSON",value:function(e){var t;if("Table"!==e.type&&e.geometryType&&(null==e||null==(t=e.drawingInfo)||!t.renderer)&&!e.defaultSymbol){var r=(0,S.bU)(e.geometryType).renderer;(0,R.RB)("drawingInfo.renderer",r,e)}return"esriGeometryMultiPatch"===e.geometryType&&e.infoFor3D&&(e.geometryType="mesh"),e}},{key:"_serializeFeature",value:function(e){var t=e.geometry,r=e.attributes;return(0,x.Wi)(t)?{attributes:r}:"mesh"===t.type||"extent"===t.type?null:{geometry:t.toJSON(),attributes:r}}},{key:"_serializeAttachment",value:(t=(0,l.Z)(p().mark((function e(t){var r,n,a,u,s,i,o,c,l;return p().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.feature,n=t.attachment,a=n.globalId,u=n.name,s=n.contentType,i=n.data,o=n.uploadId,c={globalId:a,parentGlobalId:null,contentType:null,name:null,uploadId:null,data:null},r&&(c.parentGlobalId="attributes"in r?r.attributes&&r.attributes[this.layer.globalIdField]:r.globalId),!o){e.next=5;break}c.uploadId=o,e.next=10;break;case 5:if(!i){e.next=10;break}return e.next=8,U(i);case 8:l=e.sent,c.contentType=l.mediaType,c.data=l.data,i instanceof File&&(c.name=i.name);case 10:return e.abrupt("return",(u&&(c.name=u),s&&(c.contentType=s),c));case 11:case"end":return e.stop()}}),e,this)}))),function(e){return t.apply(this,arguments)})},{key:"_getFeatureIds",value:function(e,t){var r=e[0];return r?this._canUseGlobalIds(t,e)?this._getGlobalIdsFromFeatureIdentifier(e):"objectId"in r?this._getObjectIdsFromFeatureIdentifier(e):this._getIdsFromFeatures(e):[]}},{key:"_getIdsFromFeatures",value:function(e){var t=this.layer.objectIdField;return e.map((function(e){return e.attributes&&e.attributes[t]}))}},{key:"_canUseGlobalIds",value:function(e,t){return e&&"globalId"in t[0]}},{key:"_getObjectIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.objectId}))}},{key:"_getGlobalIdsFromFeatureIdentifier",value:function(e){return e.map((function(e){return e.globalId}))}},{key:"_createEditsResult",value:function(e){var t,r=this,n=e.data,a=this.layer.layerId,u=[],s=null;if(Array.isArray(n)){var i,o=N(n);try{for(o.s();!(i=o.n()).done;){var c=i.value;u.push({id:c.id,editedFeatures:c.editedFeatures}),c.id===a&&(s={addResults:c.addResults,updateResults:c.updateResults,deleteResults:c.deleteResults,attachments:c.attachments,editMoment:c.editMoment})}}catch(y){o.e(y)}finally{o.f()}}else s=n;var l=null==(t=s)?void 0:t.attachments,d={addFeatureResults:s.addResults?s.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:s.updateResults?s.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:s.deleteResults?s.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:l&&l.addResults?l.addResults.map(this._createFeatureEditResult,this):[],updateAttachmentResults:l&&l.updateResults?l.updateResults.map(this._createFeatureEditResult,this):[],deleteAttachmentResults:l&&l.deleteResults?l.deleteResults.map(this._createFeatureEditResult,this):[]};if(s.editMoment&&(d.editMoment=s.editMoment),u.length>0){d.editedFeatureResults=[];var p,h=N(u);try{var f=function(){var e=p.value,t=e.editedFeatures,n=t.adds,a=t.updates,u=t.deletes,s=t.spatialReference,i=s?new T.Z(s):null;d.editedFeatureResults.push({layerId:e.id,editedFeatures:{adds:(null==n?void 0:n.map((function(e){return r._createEditedFeature(e,i)})))||[],updates:(null==a?void 0:a.map((function(e){return{original:r._createEditedFeature(e[0],i),current:r._createEditedFeature(e[1],i)}})))||[],deletes:(null==u?void 0:u.map((function(e){return r._createEditedFeature(e,i)})))||[],spatialReference:i}})};for(h.s();!(p=h.n()).done;)f()}catch(y){h.e(y)}finally{h.f()}}return d}},{key:"_createEditedFeature",value:function(e,t){return new f.Z({attributes:e.attributes,geometry:(0,q.im)(J(J({},e.geometry),{},{spatialReference:t}))})}},{key:"_createFeatureEditResult",value:function(e){var t=!0===e.success?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new m.Z("feature-layer-source:edit-failure",t.description,{code:t.code}):null}}},{key:"_createAttachmentErrorResult",value:function(e,t){var r=t.details.messages&&t.details.messages[0]||t.message,n=t.details.httpStatus||t.details.messageCode;return{objectId:e,globalId:null,error:new m.Z("feature-layer-source:attachment-failure",r,{code:n})}}},{key:"_getFormDataForAttachment",value:function(e,t){var r=e instanceof FormData?e:e&&e.elements?new FormData(e):null;if(r)for(var n in t){var a=t[n];null!=a&&(r.set?r.set(n,a):r.append(n,a))}return r}},{key:"_getLayerRequestOptions",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=this.layer,r=t.parsedUrl,n=t.gdbVersion,a=t.dynamicDataSource;return J(J({},e),{},{query:J(J({gdbVersion:n,layer:a?JSON.stringify({source:a}):void 0},r.query),{},{f:"json"},this._createRequestQueryOptions(e)),responseType:"json"})}}]),B}(k.Z);(0,h._)([(0,_.Cb)()],M.prototype,"type",void 0),(0,h._)([(0,_.Cb)({constructOnly:!0})],M.prototype,"layer",void 0),(0,h._)([(0,_.Cb)({readOnly:!0})],M.prototype,"queryTask",null);var G=M=(0,h._)([(0,O.j)("esri.layers.graphics.sources.FeatureLayerSource")],M)}}]);
//# sourceMappingURL=8992-8ba186ab7514f54067c2.js.map