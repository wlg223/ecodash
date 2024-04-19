"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[2995],{82995:function(e,t,r){r.r(t),r.d(t,{default:function(){return R}});var n=r(4942),i=r(15671),o=r(43144),a=r(87869),s=r(10173),u=r(93651),l=r(39356),h=r(83475),c=(r(33682),r(2009)),f=r(22983),y=(r(21182),r(88326),r(35166));var d=(0,o.Z)((function e(t,r,n){(0,i.Z)(this,e),this.uid=t,this.geometry=r,this.attributes=n,this.visible=!0,this.objectId=null,this.centroid=null}));var p=(0,o.Z)((function e(){(0,i.Z)(this,e),this.exceededTransferLimit=!1,this.features=[],this.fields=[],this.hasM=!1,this.hasZ=!1,this.geometryType=null,this.objectIdFieldName=null,this.globalIdFieldName=null,this.geometryProperties=null,this.geohashFieldName=null,this.spatialReference=null,this.transform=null}));(0,c.Ue)(),(0,f.Ue)();var m=r(5979);function v(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,i=function(){};return{s:i,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==r.return||r.return()}finally{if(s)throw o}}}}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function b(e,t){return t}function k(e,t,r,n){switch(r){case 0:return Z(e,t+n,0);case 1:return"lowerLeft"===e.originPosition?Z(e,t+n,1):function(e,t,r){var n=e.translate,i=e.scale;return n[r]-t*i[r]}(e,t+n,1)}}function P(e,t,r,n){return 2===r?Z(e,t,2):k(e,t,r,n)}function C(e,t,r,n){return 2===r?Z(e,t,3):k(e,t,r,n)}function w(e,t,r,n){return 3===r?Z(e,t,3):P(e,t,r,n)}function Z(e,t,r){var n=e.translate,i=e.scale;return n[r]+t*i[r]}var A=function(){function e(t){(0,i.Z)(this,e),this.options=t,this.geometryTypes=["point","multipoint","polyline","polygon"],this.previousCoordinate=[0,0],this.transform=null,this.applyTransform=b,this.lengths=[],this.currentLengthIndex=0,this.toAddInCurrentPath=0,this.vertexDimension=0,this.coordinateBuffer=null,this.coordinateBufferPtr=0,this.AttributesConstructor=function(){}}return(0,o.Z)(e,[{key:"createFeatureResult",value:function(){return new p}},{key:"finishFeatureResult",value:function(e){if(this.options.applyTransform&&(e.transform=null),this.AttributesConstructor=function(){},this.coordinateBuffer=null,this.lengths.length=0,e.hasZ){var t=(0,h.k)(e.geometryType,this.options.sourceSpatialReference,e.spatialReference);if(!(0,s.Wi)(t)){var r,n=v(e.features);try{for(n.s();!(r=n.n()).done;){t(r.value.geometry)}}catch(i){n.e(i)}finally{n.f()}}}}},{key:"createSpatialReference",value:function(){return new l.Z}},{key:"addField",value:function(e,t){e.fields.push(y.Z.fromJSON(t));var r=e.fields.map((function(e){return e.name}));this.AttributesConstructor=function(){var e,t=v(r);try{for(t.s();!(e=t.n()).done;){this[e.value]=null}}catch(n){t.e(n)}finally{t.f()}}}},{key:"addFeature",value:function(e,t){var r=this.options.maxStringAttributeLength?this.options.maxStringAttributeLength:0;if(r>0)for(var n in t.attributes){var i=t.attributes[n];"string"==typeof i&&i.length>r&&(t.attributes[n]="")}e.features.push(t)}},{key:"addQueryGeometry",value:function(e,t){var r=t.queryGeometry,n=t.queryGeometryType,i=(0,m.$g)(r.clone(),r,!1,!1,this.transform),o=(0,m.di)(i,n,!1,!1),a=null;switch(n){case"esriGeometryPoint":a="point";break;case"esriGeometryPolygon":a="polygon";break;case"esriGeometryPolyline":a="polyline";break;case"esriGeometryMultipoint":a="multipoint"}o.type=a,e.queryGeometryType=n,e.queryGeometry=o}},{key:"prepareFeatures",value:function(e){var t=this;switch(this.transform=e.transform,this.options.applyTransform&&e.transform&&(this.applyTransform=this.deriveApplyTransform(e)),this.vertexDimension=2,e.hasZ&&this.vertexDimension++,e.hasM&&this.vertexDimension++,e.geometryType){case"point":this.addCoordinate=function(e,r,n){return t.addCoordinatePoint(e,r,n)},this.createGeometry=function(e){return t.createPointGeometry(e)};break;case"polygon":this.addCoordinate=function(e,r,n){return t.addCoordinatePolygon(e,r,n)},this.createGeometry=function(e){return t.createPolygonGeometry(e)};break;case"polyline":this.addCoordinate=function(e,r,n){return t.addCoordinatePolyline(e,r,n)},this.createGeometry=function(e){return t.createPolylineGeometry(e)};break;case"multipoint":this.addCoordinate=function(e,r,n){return t.addCoordinateMultipoint(e,r,n)},this.createGeometry=function(e){return t.createMultipointGeometry(e)};break;case"mesh":case"extent":break;default:(0,a.Bg)(e.geometryType)}}},{key:"createFeature",value:function(){return this.lengths.length=0,this.currentLengthIndex=0,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0,new d((0,u.D)(),null,new this.AttributesConstructor)}},{key:"allocateCoordinates",value:function(){var e=this.lengths.reduce((function(e,t){return e+t}),0);this.coordinateBuffer=new Float64Array(e*this.vertexDimension),this.coordinateBufferPtr=0}},{key:"addLength",value:function(e,t,r){0===this.lengths.length&&(this.toAddInCurrentPath=t),this.lengths.push(t)}},{key:"createPointGeometry",value:function(e){var t={type:"point",x:0,y:0,spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM};return t.hasZ&&(t.z=0),t.hasM&&(t.m=0),t}},{key:"addCoordinatePoint",value:function(e,t,r){switch(t=this.applyTransform(this.transform,t,r,0),r){case 0:e.x=t;break;case 1:e.y=t;break;case 2:e.hasZ?e.z=t:e.m=t;break;case 3:e.m=t}}},{key:"transformPathLikeValue",value:function(e,t){var r=0;return t<=1&&(r=this.previousCoordinate[t],this.previousCoordinate[t]+=e),this.applyTransform(this.transform,e,t,r)}},{key:"addCoordinatePolyline",value:function(e,t,r){this.dehydratedAddPointsCoordinate(e.paths,t,r)}},{key:"addCoordinatePolygon",value:function(e,t,r){this.dehydratedAddPointsCoordinate(e.rings,t,r)}},{key:"addCoordinateMultipoint",value:function(e,t,r){0===r&&e.points.push([]);var n=this.transformPathLikeValue(t,r);e.points[e.points.length-1].push(n)}},{key:"createPolygonGeometry",value:function(e){return{type:"polygon",rings:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"createPolylineGeometry",value:function(e){return{type:"polyline",paths:[[]],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"createMultipointGeometry",value:function(e){return{type:"multipoint",points:[],spatialReference:e.spatialReference,hasZ:!!e.hasZ,hasM:!!e.hasM}}},{key:"dehydratedAddPointsCoordinate",value:function(e,t,r){0===r&&0==this.toAddInCurrentPath--&&(e.push([]),this.toAddInCurrentPath=this.lengths[++this.currentLengthIndex]-1,this.previousCoordinate[0]=0,this.previousCoordinate[1]=0);var n=this.transformPathLikeValue(t,r),i=e[e.length-1];0===r&&i.push(new Float64Array(this.coordinateBuffer.buffer,this.coordinateBufferPtr*Float64Array.BYTES_PER_ELEMENT,this.vertexDimension)),this.coordinateBuffer[this.coordinateBufferPtr++]=n}},{key:"deriveApplyTransform",value:function(e){var t=e.hasZ,r=e.hasM;return t&&r?w:t?P:r?C:k}}]),e}(),O=r(46021);function G(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function M(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?G(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):G(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var T=function(){function e(){(0,i.Z)(this,e)}return(0,o.Z)(e,[{key:"_parseFeatureQuery",value:function(e){var t=(0,O.C)(e.buffer,new A(e.options)),r=M(M({},t),{},{spatialReference:t.spatialReference.toJSON(),fields:t.fields?t.fields.map((function(e){return e.toJSON()})):void 0});return Promise.resolve(r)}}]),e}();function R(){return new T}}}]);
//# sourceMappingURL=2995-adc6b5871e2746e4ba4a.js.map