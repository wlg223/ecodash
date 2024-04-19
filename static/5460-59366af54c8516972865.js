"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[5460],{75460:function(e,t,r){r.r(t),r.d(t,{previewCIMSymbol:function(){return T}});var a,i,n=r(15861),o=r(87757),s=r.n(o),l=r(8792),c=r(15671),h=r(43144),u=r(30004),m=r(51916),f=r(37566),y=r(53315),g=r(73376),p=r(9437),d=r(98865),v=r(86228),M=r(68867),C=r(31698),w=r(39385),I=r(6056);function x(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(!e)return;if("string"==typeof e)return k(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return k(e,t)}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var a=0,i=function(){};return{s:i,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,n=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw n}}}}function k(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}(i=a||(a={})).Legend="legend",i.Preview="preview";var b=function(e,t,r){if(e&&e.targetSize){var a;if(r){var i=Math.max(r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin);a=e.targetSize/(0,l.F2)(i)}else a=e.targetSize/t.referenceSize;return a}return e&&e.scaleFactor?e.scaleFactor:1},z={fill:{legend:{frame:{xmax:15,xmin:0,ymax:15,ymin:0},geometry:{rings:[[[0,15],[15,7.5],[15,0],[0,0],[0,15]]]},canvasPaths:{rings:[[[0,15],[0,0],[15,7.5],[15,15],[0,15]]]}},preview:{frame:{xmax:100,xmin:0,ymax:100,ymin:0},geometry:{rings:[[[0,100],[100,100],[100,0],[0,0],[0,100]]]},canvasPaths:{rings:[[[0,100],[0,0],[100,0],[100,100],[0,100]]]}}},stroke:{legend:{frame:{xmax:24,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[12,0],[24,0]]]},canvasPaths:{paths:[[[0,2],[12,2],[24,2]]]}},preview:{frame:{xmax:100,xmin:0,ymax:2,ymin:-2},geometry:{paths:[[[0,0],[50,0],[100,0]]]},canvasPaths:{paths:[[[0,2],[50,2],[100,2]]]}}}},P=function(){function e(t,r){(0,c.Z)(this,e),this._spatialReference=t,this._avoidSDF=r,this._resourceCache=new Map,this._pictureMarkerCache=new Map,this._textRasterizer=new M.d,this._cimResourceManager=new d.Z,this._rasterizer=new v.Z(this._cimResourceManager)}var t,r,i;return(0,h.Z)(e,[{key:"rasterizeCIMSymbolAsync",value:(i=(0,n.Z)(s().mark((function e(t,r,a,i,n,o,l,c){var h;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=i||(r?null!=r.centroid?"esriGeometryPolygon":(0,g.Ji)(r.geometry):null)||S(t),e.next=3,this.analyzeCIMSymbol(t,r?_(r.attributes):null,a,i,c);case 3:return h=e.sent,e.abrupt("return",this.rasterizeCIMSymbol(h,r,i,n,o,l));case 5:case"end":return e.stop()}}),e,this)}))),function(e,t,r,a,n,o,s,l){return i.apply(this,arguments)})},{key:"analyzeCIMSymbol",value:(r=(0,n.Z)(s().mark((function e(t,r,a,i,n){var o,l,c,h,u,m;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=[],l=r?{geometryType:i,spatialReference:this._spatialReference,fields:r}:null,e.next=3,(0,p.c)(t.data,l,this._cimResourceManager,o,this._avoidSDF);case 3:for((0,f.k_)(n),h=0,u=o;h<u.length;h++)"CIMPictureMarker"!==(m=u[h]).cim.type&&"CIMPictureFill"!==m.cim.type&&"CIMPictureStroke"!==m.cim.type||(c||(c=[]),c.push(this.fetchPictureMarkerResource(m,n))),a&&"text"===m.type&&"string"==typeof m.text&&m.text.indexOf("[")>-1&&(m.text=(0,C.Qs)(a,m.text,m.cim.textCase));if(e.t0=c,!e.t0){e.next=9;break}return e.next=9,Promise.all(c);case 9:return e.abrupt("return",o);case 10:case"end":return e.stop()}}),e,this)}))),function(e,t,a,i,n){return r.apply(this,arguments)})},{key:"fetchPictureMarkerResource",value:(t=(0,n.Z)(s().mark((function e(t,r){var a,i;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=t.materialHash,this._pictureMarkerCache.get(a)){e.next=6;break}return e.next=4,(0,m.default)(t.cim.url,{responseType:"image",signal:r&&r.signal});case 4:i=e.sent.data,this._pictureMarkerCache.set(a,i);case 6:case"end":return e.stop()}}),e,this)}))),function(e,r){return t.apply(this,arguments)})},{key:"rasterizeCIMSymbol",value:function(e,t,r,a,i,n){var o,s=[],l=x(e);try{for(l.s();!(o=l.n()).done;){var c=o.value;a&&"function"==typeof a.scaleFactor&&(a.scaleFactor=a.scaleFactor(t,i,n));var h=this._getRasterizedResource(c,t,r,a,i,n);if(h){var u=0,m=h.anchorX||0,f=h.anchorY||0,y=!1,g=0,p=0;if("esriGeometryPoint"===r){var d=b(a,c,null);if(g=(0,C.hf)(c.offsetX,t,i,n)*d||0,p=(0,C.hf)(c.offsetY,t,i,n)*d||0,"marker"===c.type)u=(0,C.hf)(c.rotation,t,i,n)||0,y=!!c.rotateClockwise&&c.rotateClockwise;else if("text"===c.type){if(u=(0,C.hf)(c.angle,t,i,n)||0,void 0!==c.horizontalAlignment)switch(c.horizontalAlignment){case"left":m=-.5;break;case"right":m=.5;break;default:m=0}if(void 0!==c.verticalAlignment)switch(c.verticalAlignment){case"top":f=.5;break;case"bottom":f=-.5;break;case"baseline":f=-.25;break;default:f=0}}}null!=h&&s.push({angle:u,rotateClockWise:y,anchorX:m,anchorY:f,offsetX:g,offsetY:p,rasterizedResource:h})}}}catch(v){l.e(v)}finally{l.f()}return this.getSymbolImage(s)}},{key:"getSymbolImage",value:function(e){for(var t=document.createElement("canvas"),r=t.getContext("2d"),a=0,i=0,n=0,o=0,s=[],c=0;c<e.length;c++){var h=e[c],u=h.rasterizedResource;if(u){var m=u.size,f=h.offsetX,y=h.offsetY,g=h.anchorX,p=h.anchorY,d=h.rotateClockWise||!1,v=h.angle,M=(0,l.F2)(f)-m[0]*(.5+g),C=(0,l.F2)(y)-m[1]*(.5+p),w=M+m[0],x=C+m[1];if(v){d&&(v=-v);var k=Math.sin(v*Math.PI/180),b=Math.cos(v*Math.PI/180),z=M*b-C*k,P=M*k+C*b,_=M*b-x*k,S=M*k+x*b,F=w*b-x*k,R=w*k+x*b,D=w*b-C*k,A=w*k+C*b;M=Math.min(z,_,F,D),C=Math.min(P,S,R,A),w=Math.max(z,_,F,D),x=Math.max(P,S,R,A)}a=M<a?M:a,i=C<i?C:i,n=w>n?w:n,o=x>o?x:o;var T=r.createImageData(u.size[0],u.size[1]);T.data.set(new Uint8ClampedArray(u.image.buffer));var X={offsetX:f,offsetY:y,rotateClockwise:d,angle:v,rasterizedImage:T,anchorX:g,anchorY:p};s.push(X)}}t.width=n-a,t.height=o-i;for(var Y=-a,O=o,G=0;G<s.length;G++){var L=s[G],V=this._imageDataToCanvas(L.rasterizedImage),Z=L.rasterizedImage.width,H=L.rasterizedImage.height,U=Y-Z*(.5+L.anchorX),W=O-H*(.5-L.anchorY);if(L.angle){var E=(360-L.angle)*Math.PI/180;r.save(),r.translate((0,l.F2)(L.offsetX),-(0,l.F2)(L.offsetY)),r.translate(Y,O),r.rotate(E),r.translate(-Y,-O),r.drawImage(V,U,W),r.restore()}else r.drawImage(V,U+(0,l.F2)(L.offsetX),W-(0,l.F2)(L.offsetY))}var J=new I.Z({x:Y/t.width-.5,y:O/t.height-.5});return{imageData:0!==t.width&&0!==t.height?r.getImageData(0,0,t.width,t.height):r.createImageData(1,1),anchorPosition:J}}},{key:"_imageDataToCanvas",value:function(e){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var t=this._imageDataCanvas,r=t.getContext("2d");return t.width=e.width,t.height=e.height,r.putImageData(e,0,0),t}},{key:"_imageTo32Array",value:function(e,t,r,a){this._imageDataCanvas||(this._imageDataCanvas=document.createElement("canvas"));var i=this._imageDataCanvas,n=i.getContext("2d");if(i.width=t,i.height=r,n.drawImage(e,0,0,t,r),a){n.save();var o=new u.Z(a);n.fillStyle=o.toHex(),n.globalCompositeOperation="multiply",n.fillRect(0,0,t,r),n.globalCompositeOperation="destination-atop",n.drawImage(e,0,0,t,r),n.restore()}return new Uint32Array(n.getImageData(0,0,t,r).data.buffer)}},{key:"_getRasterizedResource",value:function(e,t,r,i,n,o){var s,l,c,h,u=null,m=null;if("esriGeometryPolyline"===r||"esriGeometryPolygon"===r){var f=i&&i.style?i.style:a.Legend,g="esriGeometryPolyline"===r?z.stroke[f]:z.fill[f];if("line"===e.type){var p;if("CIMSolidStroke"!==e.cim.type){if("CIMPictureStroke"===e.cim.type){var d=(0,C.hf)(e.width,t,n,o),v=(0,C.hf)(e.color,t,n,o),M=this._getPictureResource(e,d,v),I=M.image,x=M.width,k=M.height;return this._rasterizePictureResource(e,I,x,k,g,d)}return null}s=(p=F(e,t,n,o)).analyzedCIM,c=p.hash,l=this._embedCIMLayerInVectorMarker(s,g)}else if("marker"===e.type){if("CIMPictureMarker"===e.cim.type)return null;if("CIMVectorMarker"!==e.cim.type)return null;e.cim.offsetX=(0,C.hf)(e.offsetX,t,n,o),e.cim.offsetY=(0,C.hf)(e.offsetY,t,n,o),e.cim.rotation=(0,C.hf)(e.rotation,t,n,o),e.cim.markerPlacement=e.markerPlacement,s=F(e,t,n,o).analyzedCIM,c=(0,y.hP)(JSON.stringify(s)).toString(),l=this._embedCIMLayerInVectorMarker(s,g),u=(0,C.hf)(e.size,t,n,o),m=e.path}else{if("text"===e.type)return null;if("fill"===e.type){var P;if("CIMHatchFill"===e.cim.type||"CIMVectorMarker"===e.cim.type||"CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var _,S,R,D=e.cim.size||e.cim.height;if("CIMPictureMarker"===e.cim.type||"CIMPictureFill"===e.cim.type){var A=this._getPictureResource(e,D,(0,C.hf)(e.color,t,n,o));_=A.image,S=A.width,R=A.height}else{var T=F(e,t,n,o);s=T.analyzedCIM,c=T.hash;var X=this._rasterizer.rasterizeJSONResource({cim:s,type:e.type,url:e.url,mosaicHash:c,size:D,path:m},1,this._avoidSDF);_=X.image,S=X.size[0],R=X.size[1]}return this._rasterizePictureResource(e,_,S,R,g,null)}if("CIMSolidFill"!==e.cim.type)return null;s=(P=F(e,t,n,o)).analyzedCIM,c=P.hash,l=this._embedCIMLayerInVectorMarker(s,g)}}}else{if("text"===e.type)return h=this._rasterizeTextResource(e,t,i,n,o);var Y=F(e,t,n,o);s=Y.analyzedCIM,c=Y.hash;var O=b(i,e,null);if("CIMPictureMarker"===e.cim.type){var G=(0,C.hf)(e.size,t,n,o)*O,L=this._getPictureResource(e,G,(0,C.hf)(e.color,t,n,o));return h={image:L.image,size:[L.width,L.height],sdf:!1,simplePattern:!1,anchorX:e.anchorPoint?e.anchorPoint.x:0,anchorY:e.anchorPoint?e.anchorPoint.y:0}}(0,w.FW)(s,O,{preserveOutlineWidth:!1}),l=s}c+=r,i&&(c+=JSON.stringify(i));var V=this._resourceCache;return V.has(c)?V.get(c):(h=this._rasterizer.rasterizeJSONResource({cim:l,type:e.type,url:e.url,mosaicHash:c,size:u,path:m},window.devicePixelRatio||1,this._avoidSDF),V.set(c,h),h)}},{key:"_rasterizeTextResource",value:function(e,t,r,a,i){var n=b(r,e,null),o=(0,C.hf)(e.text,t,a,i);if(!o||0===o.length)return null;var s=(0,C.hf)(e.fontName,t,a,i),l=(0,C.hf)(e.style,t,a,i),c=(0,C.hf)(e.weight,t,a,i),h=(0,C.hf)(e.decoration,t,a,i),u=(0,C.hf)(e.size,t,a,i)*n,m=(0,C.hf)(e.horizontalAlignment,t,a,i),f=(0,C.hf)(e.verticalAlignment,t,a,i),y=(0,C.nn)((0,C.hf)(e.color,t,a,i)),g=(0,C.nn)((0,C.hf)(e.outlineColor,t,a,i)),p={color:y,size:u,horizontalAlignment:m,verticalAlignment:f,font:{family:s,style:l,weight:c,decoration:h},halo:{size:(0,C.hf)(e.outlineSize,t,a,i)||0,color:g,style:l},pixelRatio:1,premultiplyColors:!this._avoidSDF};return this._textRasterizer.rasterizeText(o,p)}},{key:"_rasterizePictureResource",value:function(e,t,r,a,i,n){var o=document.createElement("canvas"),s=o.getContext("2d");o.height=(0,l.F2)(Math.max(i.frame.ymax-i.frame.ymin,n)),o.width=(0,l.F2)(i.frame.xmax-i.frame.xmin);var c=s.createImageData(r,a);c.data.set(new Uint8ClampedArray(t.buffer));var h=this._imageDataToCanvas(c),u=s.createPattern(h,"repeat"),m=Math.cos((-e.cim.rotation||0)*Math.PI/180),f=Math.sin((-e.cim.rotation||0)*Math.PI/180);u.setTransform({m11:m,m12:f,m21:-f,m22:m,m41:(0,l.F2)(e.cim.offsetX)||0,m42:(0,l.F2)(e.cim.offsetY)||0});var y,p,d,v=i.canvasPaths;(0,g.oU)(v)?(y=v.rings,s.fillStyle=u,p=s.fill,d=["evenodd"]):(0,g.l9)(v)&&(y=v.paths,s.strokeStyle=u,s.lineWidth=n,p=s.stroke,y[0][0][1]=o.height/2,y[0][1][1]=o.height/2),s.beginPath();var M,C=x(y);try{for(C.s();!(M=C.n()).done;){var w=M.value,I=w?w.length:0;if(I>1){var k=w[0];s.moveTo((0,l.F2)(k[0]),(0,l.F2)(k[1]));for(var b=1;b<I;++b)k=w[b],s.lineTo((0,l.F2)(k[0]),(0,l.F2)(k[1]));s.closePath()}}}catch(_){C.e(_)}finally{C.f()}p.apply(s,d);var z=s.getImageData(0,0,o.width,o.height),P=new Uint8Array(z.data);return{size:[o.width,o.height],image:new Uint32Array(P.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}},{key:"_getPictureResource",value:function(e,t,r){var a=this._pictureMarkerCache.get(e.materialHash);if(!a)return null;var i=a.height/a.width,n=t?i>1?(0,l.F2)(t):(0,l.F2)(t)/i:a.width,o=t?i>1?(0,l.F2)(t)*i:(0,l.F2)(t):a.height;return{image:this._imageTo32Array(a,n,o,r),width:n,height:o}}},{key:"_embedCIMLayerInVectorMarker",value:function(e,t){var r=(0,g.oU)(t.geometry)?"CIMPolygonSymbol":"CIMLineSymbol",a=t.frame;return{type:"CIMVectorMarker",frame:a,size:a.ymax-a.ymin,markerGraphics:[{type:"CIMMarkerGraphic",geometry:t.geometry,symbol:{type:r,symbolLayers:[e]}}]}}}]),e}();function _(e){return(e?Object.keys(e):[]).map((function(t){return{name:t,alias:t,type:"string"==typeof e[t]?"esriFieldTypeString":"esriFieldTypeDouble"}}))}function S(e){if(!(e&&e.data&&e.data.symbol))return null;switch(e.data.symbol.type){case"CIMPointSymbol":case"CIMTextSymbol":return"esriGeometryPoint";case"CIMLineSymbol":return"esriGeometryPolyline";case"CIMPolygonSymbol":return"esriGeometryPolygon";default:return null}}function F(e,t,r,a){var i,n;return"function"==typeof e.materialHash?(i=(0,e.materialHash)(t,r,a),n=(0,p.S)(e.cim,e.materialOverrides)):(i=e.materialHash,n=e.cim),{analyzedCIM:n,hash:i}}var R=r(11209),D=new P(null,!0),A=120;function T(e){return X.apply(this,arguments)}function X(){return X=(0,n.Z)(s().mark((function e(t){var r,a,i,n,o,c,h,u,m,f,y,g,p,d,v,M,C,I,x,k,b,z=arguments;return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=z.length>1&&void 0!==z[1]?z[1]:{},a=r.size,i=r.maxSize,n=r.node,o=r.opacity,c=r.cimOptions||r,h=c.feature,u=c.fieldMap,m=c.geometryType,f=c.style,y=(0,w.kW)(t),(g=Math.min(null!=a?a:y,null!=i?i:(0,l.Wz)(A)))!==y&&(t=t.clone(),(0,w.PI)(t,g,{preserveOutlineWidth:!0})),p=3,t&&t.data&&t.data.symbol&&"CIMPointSymbol"!==t.data.symbol.type&&(p=1),e.next=7,D.rasterizeCIMSymbolAsync(t,h,u,m,{scaleFactor:p,style:f});case 7:return d=e.sent,(v=document.createElement("canvas")).width=d.imageData.width,v.height=d.imageData.height,v.getContext("2d").putImageData(d.imageData,0,0),M=v.width/p,C=v.height/p,null==a||null!=(null==r?void 0:r.scale)&&!(null==r?void 0:r.scale)||(M=(I=M/C)<=1?Math.ceil(g*I):g,C=I<=1?g:Math.ceil(g/I)),(x=new Image(M,C)).src=v.toDataURL(),null!=o&&(x.style.opacity="".concat(o)),k=x,null!=r.effectView&&(b={shape:{type:"image",x:0,y:0,width:M,height:C,src:x.src},fill:null,stroke:null,offset:[0,0]},k=(0,R.w)([[b]],[M,C],{effectView:r.effectView})),e.abrupt("return",(n&&n.appendChild(k),k));case 18:case"end":return e.stop()}}),e)}))),X.apply(this,arguments)}}}]);
//# sourceMappingURL=5460-59366af54c8516972865.js.map