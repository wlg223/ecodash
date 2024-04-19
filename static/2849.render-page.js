"use strict";
exports.id = 2849;
exports.ids = [2849];
exports.modules = {

/***/ 34344:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ t),
/* harmony export */   "c": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony exports b, f, m */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){return[1,0,0,0,1,0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3],e[4],e[5],e[6],e[7],e[8]]}function r(e,n,r,t,a,o,c,u,f){return[e,n,r,t,a,o,c,u,f]}function t(e,n){return new Float64Array(e,n,9)}const a=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t});


/***/ }),

/***/ 10663:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ w),
/* harmony export */   "g": () => (/* binding */ P),
/* harmony export */   "j": () => (/* binding */ N),
/* harmony export */   "k": () => (/* binding */ C),
/* harmony export */   "m": () => (/* binding */ v),
/* harmony export */   "s": () => (/* binding */ I)
/* harmony export */ });
/* unused harmony exports A, B, C, D, E, F, G, a, b, d, e, f, h, i, l, n, o, p, q, r, t, u, v, w, x, y, z */
/* harmony import */ var _mat3f64_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(34344);
/* harmony import */ var _quatf64_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(61044);
/* harmony import */ var _vec3f64_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8909);
/* harmony import */ var _common_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(93011);
/* harmony import */ var _vec3_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6766);
/* harmony import */ var _vec4_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(88589);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function A(t){return t[0]=0,t[1]=0,t[2]=0,t[3]=1,t}function I(t,s,a){a*=.5;const n=Math.sin(a);return t[0]=n*s[0],t[1]=n*s[1],t[2]=n*s[2],t[3]=Math.cos(a),t}function P(t,s){const a=2*Math.acos(s[3]),n=Math.sin(a/2);return n>_common_js__WEBPACK_IMPORTED_MODULE_3__.E?(t[0]=s[0]/n,t[1]=s[1]/n,t[2]=s[2]/n):(t[0]=1,t[1]=0,t[2]=0),a}function v(t,s,a){const n=s[0],o=s[1],r=s[2],c=s[3],e=a[0],u=a[1],i=a[2],h=a[3];return t[0]=n*h+c*e+o*i-r*u,t[1]=o*h+c*u+r*e-n*i,t[2]=r*h+c*i+n*u-o*e,t[3]=c*h-n*e-o*u-r*i,t}function b(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+c*e,t[1]=o*u+r*e,t[2]=r*u-o*e,t[3]=c*u-n*e,t}function y(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u-r*e,t[1]=o*u+c*e,t[2]=r*u+n*e,t[3]=c*u-o*e,t}function E(t,s,a){a*=.5;const n=s[0],o=s[1],r=s[2],c=s[3],e=Math.sin(a),u=Math.cos(a);return t[0]=n*u+o*e,t[1]=o*u-n*e,t[2]=r*u+c*e,t[3]=c*u-r*e,t}function _(t,s){const a=s[0],n=s[1],o=s[2];return t[0]=a,t[1]=n,t[2]=o,t[3]=Math.sqrt(Math.abs(1-a*a-n*n-o*o)),t}function z(t,s,a,n){const r=s[0],c=s[1],e=s[2],u=s[3];let i,h,M,f,l,m=a[0],p=a[1],q=a[2],d=a[3];return h=r*m+c*p+e*q+u*d,h<0&&(h=-h,m=-m,p=-p,q=-q,d=-d),1-h>_common_js__WEBPACK_IMPORTED_MODULE_3__.E?(i=Math.acos(h),M=Math.sin(i),f=Math.sin((1-n)*i)/M,l=Math.sin(n*i)/M):(f=1-n,l=n),t[0]=f*r+l*m,t[1]=f*c+l*p,t[2]=f*e+l*q,t[3]=f*u+l*d,t}function L(t){const s=(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.R)(),a=(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.R)(),n=(0,_common_js__WEBPACK_IMPORTED_MODULE_3__.R)(),o=Math.sqrt(1-s),c=Math.sqrt(s);return t[0]=o*Math.sin(2*Math.PI*a),t[1]=o*Math.cos(2*Math.PI*a),t[2]=c*Math.sin(2*Math.PI*n),t[3]=c*Math.cos(2*Math.PI*n),t}function k(t,s){const a=s[0],n=s[1],o=s[2],r=s[3],c=a*a+n*n+o*o+r*r,e=c?1/c:0;return t[0]=-a*e,t[1]=-n*e,t[2]=-o*e,t[3]=r*e,t}function w(t,s){return t[0]=-s[0],t[1]=-s[1],t[2]=-s[2],t[3]=s[3],t}function B(t,s){const a=s[0]+s[4]+s[8];let n;if(a>0)n=Math.sqrt(a+1),t[3]=.5*n,n=.5/n,t[0]=(s[5]-s[7])*n,t[1]=(s[6]-s[2])*n,t[2]=(s[1]-s[3])*n;else{let a=0;s[4]>s[0]&&(a=1),s[8]>s[3*a+a]&&(a=2);const o=(a+1)%3,r=(a+2)%3;n=Math.sqrt(s[3*a+a]-s[3*o+o]-s[3*r+r]+1),t[a]=.5*n,n=.5/n,t[3]=(s[3*o+r]-s[3*r+o])*n,t[o]=(s[3*o+a]+s[3*a+o])*n,t[r]=(s[3*r+a]+s[3*a+r])*n}return t}function C(t,s,a,n){const o=.5*Math.PI/180;s*=o,a*=o,n*=o;const r=Math.sin(s),c=Math.cos(s),e=Math.sin(a),u=Math.cos(a),i=Math.sin(n),h=Math.cos(n);return t[0]=r*u*h-c*e*i,t[1]=c*e*h+r*u*i,t[2]=c*u*i-r*e*h,t[3]=c*u*h+r*e*i,t}function D(t){return"quat("+t[0]+", "+t[1]+", "+t[2]+", "+t[3]+")"}const F=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.c,G=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.s,O=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.a,R=v,T=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.b,W=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.d,X=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.l,Y=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.e,Z=Y,H=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.f,J=H,K=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.n,N=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.g,Q=_vec4_js__WEBPACK_IMPORTED_MODULE_5__.h;function S(t,s,a){const n=(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.d)(s,a);return n<-.999999?((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(U,V,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.u)(U)<1e-6&&(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(U,$,s),(0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.n)(U,U),I(t,U,Math.PI),t):n>.999999?(t[0]=0,t[1]=0,t[2]=0,t[3]=1,t):((0,_vec3_js__WEBPACK_IMPORTED_MODULE_4__.c)(U,s,a),t[0]=U[0],t[1]=U[1],t[2]=U[2],t[3]=1+n,K(t,t))}const U=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.c)(),V=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(1,0,0),$=(0,_vec3f64_js__WEBPACK_IMPORTED_MODULE_2__.f)(0,1,0);function tt(t,s,a,n,o,r){return z(st,s,o,r),z(at,a,n,r),z(t,st,at,2*r*(1-r)),t}const st=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)(),at=(0,_quatf64_js__WEBPACK_IMPORTED_MODULE_1__.a)();function nt(t,s,a,n){const o=ot;return o[0]=a[0],o[3]=a[1],o[6]=a[2],o[1]=n[0],o[4]=n[1],o[7]=n[2],o[2]=-s[0],o[5]=-s[1],o[8]=-s[2],K(t,B(t,o))}const ot=(0,_mat3f64_js__WEBPACK_IMPORTED_MODULE_0__.c)(),rt=Object.freeze({__proto__:null,identity:A,setAxisAngle:I,getAxisAngle:P,multiply:v,rotateX:b,rotateY:y,rotateZ:E,calculateW:_,slerp:z,random:L,invert:k,conjugate:w,fromMat3:B,fromEuler:C,str:D,copy:F,set:G,add:O,mul:R,scale:T,dot:W,lerp:X,length:Y,len:Z,squaredLength:H,sqrLen:J,normalize:K,exactEquals:N,equals:Q,rotationTo:S,sqlerp:tt,setAxes:nt});


/***/ }),

/***/ 61044:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ a),
/* harmony export */   "a": () => (/* binding */ e),
/* harmony export */   "b": () => (/* binding */ n),
/* harmony export */   "c": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports f, q */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function e(){return[0,0,0,1]}function n(e){return[e[0],e[1],e[2],e[3]]}function r(e,n,r,t){return[e,n,r,t]}function t(e,n){return new Float64Array(e,n,4)}const a=e(),o=Object.freeze({__proto__:null,create:e,clone:n,fromValues:r,createView:t,IDENTITY:a});


/***/ }),

/***/ 79912:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ n),
/* harmony export */   "f": () => (/* binding */ t)
/* harmony export */ });
/* unused harmony exports O, U, Z, a, b, d, e, g, h, o, u, v, z */
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){return new Float32Array(3)}function r(n){const r=new Float32Array(3);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r}function t(n,r,t){const e=new Float32Array(3);return e[0]=n,e[1]=r,e[2]=t,e}function e(n,r){return new Float32Array(n,r,3)}function a(){return n()}function o(){return t(1,1,1)}function u(){return t(1,0,0)}function s(){return t(0,1,0)}function c(){return t(0,0,1)}const i=a(),f=o(),l=u(),_=s(),w=c(),y=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:e,zeros:a,ones:o,unitX:u,unitY:s,unitZ:c,ZEROS:i,ONES:f,UNIT_X:l,UNIT_Y:_,UNIT_Z:w});


/***/ }),

/***/ 99723:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ d)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(46999);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(24794);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(30936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorClassBreakInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var a;let p=a=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new a({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:(0,lang/* clone */.d9)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],p.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],p.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],p.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],p.prototype,"maxValue",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Color/* default */.Z,json:{type:[ensureType/* Integer */.z8],write:!0}})],p.prototype,"color",void 0),p=a=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.ColorClassBreakInfo")],p);const c=p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let PointCloudClassBreaksRenderer_a=l=class extends PointCloudRenderer/* default */.Z{constructor(e){super(e),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new l({...this.cloneProperties(),field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:(0,lang/* clone */.d9)(this.colorClassBreakInfos),legendOptions:(0,lang/* clone */.d9)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],PointCloudClassBreaksRenderer_a.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!0},type:String})],PointCloudClassBreaksRenderer_a.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:LegendOptions/* default */.Z,json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"legendOptions",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PointCloudRenderer/* default.fieldTransformTypeKebabDict.apiValues */.Z.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default.fieldTransformTypeKebabDict.jsonValues */.Z.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default.fieldTransformTypeKebabDict.read */.Z.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default.fieldTransformTypeKebabDict.write */.Z.fieldTransformTypeKebabDict.write}})],PointCloudClassBreaksRenderer_a.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[c],json:{write:!0}})],PointCloudClassBreaksRenderer_a.prototype,"colorClassBreakInfos",void 0),PointCloudClassBreaksRenderer_a=l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.PointCloudClassBreaksRenderer")],PointCloudClassBreaksRenderer_a);const d=PointCloudClassBreaksRenderer_a;


/***/ }),

/***/ 46999:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ PointCloudRenderer_a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/jsonMap.js
var jsonMap = __webpack_require__(25709);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/arrayUtils.js
var arrayUtils = __webpack_require__(7753);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorModulation.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var s;let i=s=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new s({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],i.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"minValue",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],i.prototype,"maxValue",void 0),i=s=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.ColorModulation")],i);const p=i;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const PointSizeAlgorithm_p=new jsonMap/* JSONMap */.Xn({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let PointSizeAlgorithm_i=class extends JSONSupport/* JSONSupport */.wq{};(0,tslib_es6._)([(0,property/* property */.Cb)({type:PointSizeAlgorithm_p.apiValues,readOnly:!0,nonNullable:!0,json:{type:PointSizeAlgorithm_p.jsonValues,read:!1,write:PointSizeAlgorithm_p.write}})],PointSizeAlgorithm_i.prototype,"type",void 0),PointSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.PointSizeAlgorithm")],PointSizeAlgorithm_i);const a=PointSizeAlgorithm_i;

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeFixedSizeAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var PointSizeFixedSizeAlgorithm_i;let PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=class extends a{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new PointSizeFixedSizeAlgorithm_i({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudFixedSizeAlgorithm:"fixed-size"})],PointSizeFixedSizeAlgorithm_p.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,nonNullable:!0,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"size",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Boolean,json:{write:!0}})],PointSizeFixedSizeAlgorithm_p.prototype,"useRealWorldSymbolSizes",void 0),PointSizeFixedSizeAlgorithm_p=PointSizeFixedSizeAlgorithm_i=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],PointSizeFixedSizeAlgorithm_p);const l=PointSizeFixedSizeAlgorithm_p;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/PointSizeSplatAlgorithm.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var PointSizeSplatAlgorithm_p;let c=PointSizeSplatAlgorithm_p=class extends a{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new PointSizeSplatAlgorithm_p({scaleFactor:this.scaleFactor})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudSplatAlgorithm:"splat"})],c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Number,value:1,nonNullable:!0,json:{write:!0}})],c.prototype,"scaleFactor",void 0),c=PointSizeSplatAlgorithm_p=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],c);const PointSizeSplatAlgorithm_a=c;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/pointSizeAlgorithmTypeUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const e={key:"type",base:a,typeMap:{"fixed-size":l,splat:PointSizeSplatAlgorithm_a}};

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const u=(0,jsonMap/* strict */.wY)()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let PointCloudRenderer_c=class extends JSONSupport/* JSONSupport */.wq{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:(0,lang/* clone */.d9)(this.pointSizeAlgorithm),colorModulation:(0,lang/* clone */.d9)(this.colorModulation),pointsPerInch:(0,lang/* clone */.d9)(this.pointsPerInch)}}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:u.apiValues,readOnly:!0,nonNullable:!0,json:{type:u.jsonValues,read:!1,write:u.write}})],PointCloudRenderer_c.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({types:e,json:{write:!0}})],PointCloudRenderer_c.prototype,"pointSizeAlgorithm",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:p,json:{write:!0}})],PointCloudRenderer_c.prototype,"colorModulation",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!0},nonNullable:!0,type:Number})],PointCloudRenderer_c.prototype,"pointsPerInch",void 0),PointCloudRenderer_c=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.PointCloudRenderer")],PointCloudRenderer_c),function(o){o.fieldTransformTypeKebabDict=new jsonMap/* JSONMap */.Xn({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(PointCloudRenderer_c||(PointCloudRenderer_c={}));const PointCloudRenderer_a=PointCloudRenderer_c;


/***/ }),

/***/ 5947:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(36663);
/* harmony import */ var _core_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(67134);
/* harmony import */ var _core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81977);
/* harmony import */ var _core_accessorSupport_ensureType_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7283);
/* harmony import */ var _core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(79438);
/* harmony import */ var _core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(40266);
/* harmony import */ var _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(46999);
/* harmony import */ var _support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(24794);
/* harmony import */ var _visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(68844);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let d=l=class extends _PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z{constructor(e){super(e),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new l({...this.cloneProperties(),field:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this.field),fieldTransformType:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this.fieldTransformType),stops:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this.stops),legendOptions:(0,_core_lang_js__WEBPACK_IMPORTED_MODULE_0__/* .clone */ .d9)(this.legendOptions)})}};(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_enumeration_js__WEBPACK_IMPORTED_MODULE_3__/* .enumeration */ .J)({pointCloudStretchRenderer:"point-cloud-stretch"})],d.prototype,"type",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({json:{write:!0},type:String})],d.prototype,"field",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:_support_LegendOptions_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z,json:{write:!0}})],d.prototype,"legendOptions",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fieldTransformTypeKebabDict.apiValues */ .Z.fieldTransformTypeKebabDict.apiValues,json:{type:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fieldTransformTypeKebabDict.jsonValues */ .Z.fieldTransformTypeKebabDict.jsonValues,read:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fieldTransformTypeKebabDict.read */ .Z.fieldTransformTypeKebabDict.read,write:_PointCloudRenderer_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"].fieldTransformTypeKebabDict.write */ .Z.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_property_js__WEBPACK_IMPORTED_MODULE_1__/* .property */ .Cb)({type:[_visualVariables_support_ColorStop_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z],json:{write:!0}})],d.prototype,"stops",void 0),d=l=(0,_chunks_tslib_es6_js__WEBPACK_IMPORTED_MODULE_8__._)([(0,_core_accessorSupport_decorators_subclass_js__WEBPACK_IMPORTED_MODULE_4__/* .subclass */ .j)("esri.renderers.PointCloudStretchRenderer")],d);const a=d;


/***/ }),

/***/ 60948:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ a)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/enumeration.js
var enumeration = __webpack_require__(79438);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudRenderer.js + 5 modules
var PointCloudRenderer = __webpack_require__(46999);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/LegendOptions.js
var LegendOptions = __webpack_require__(24794);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/Color.js
var Color = __webpack_require__(30936);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/JSONSupport.js
var JSONSupport = __webpack_require__(49004);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/support/pointCloud/ColorUniqueValueInfo.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let c=l=class extends JSONSupport/* JSONSupport */.wq{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new l({description:this.description,label:this.label,values:(0,lang/* clone */.d9)(this.values),color:(0,lang/* clone */.d9)(this.color)})}};(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"description",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:String,json:{write:!0}})],c.prototype,"label",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[String],json:{write:!0}})],c.prototype,"values",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:Color/* default */.Z,json:{type:[ensureType/* Integer */.z8],write:!0}})],c.prototype,"color",void 0),c=l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],c);const n=c;

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var PointCloudUniqueValueRenderer_l;let u=PointCloudUniqueValueRenderer_l=class extends PointCloudRenderer/* default */.Z{constructor(e){super(e),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new PointCloudUniqueValueRenderer_l({...this.cloneProperties(),field:(0,lang/* clone */.d9)(this.field),fieldTransformType:(0,lang/* clone */.d9)(this.fieldTransformType),colorUniqueValueInfos:(0,lang/* clone */.d9)(this.colorUniqueValueInfos),legendOptions:(0,lang/* clone */.d9)(this.legendOptions)})}};(0,tslib_es6._)([(0,enumeration/* enumeration */.J)({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],u.prototype,"type",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({json:{write:!0},type:String})],u.prototype,"field",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:PointCloudRenderer/* default.fieldTransformTypeKebabDict.apiValues */.Z.fieldTransformTypeKebabDict.apiValues,json:{type:PointCloudRenderer/* default.fieldTransformTypeKebabDict.jsonValues */.Z.fieldTransformTypeKebabDict.jsonValues,read:PointCloudRenderer/* default.fieldTransformTypeKebabDict.read */.Z.fieldTransformTypeKebabDict.read,write:PointCloudRenderer/* default.fieldTransformTypeKebabDict.write */.Z.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:[n],json:{write:!0}})],u.prototype,"colorUniqueValueInfos",void 0),(0,tslib_es6._)([(0,property/* property */.Cb)({type:LegendOptions/* default */.Z,json:{write:!0}})],u.prototype,"legendOptions",void 0),u=PointCloudUniqueValueRenderer_l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.renderers.PointCloudUniqueValueRenderer")],u);const a=u;


/***/ }),

/***/ 42849:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ PointCloudWorker_h)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/typedArrayUtil.js
var typedArrayUtil = __webpack_require__(86098);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/quat.js
var quat = __webpack_require__(10663);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/chunks/quatf32.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function n(){const n=new Float32Array(4);return n[3]=1,n}function r(n){const r=new Float32Array(4);return r[0]=n[0],r[1]=n[1],r[2]=n[2],r[3]=n[3],r}function t(n,r,t,e){const a=new Float32Array(4);return a[0]=n,a[1]=r,a[2]=t,a[3]=e,a}function e(n,r){return new Float32Array(n,r,4)}const a=Object.freeze({__proto__:null,create:n,clone:r,fromValues:t,createView:e});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3.js
var vec3 = __webpack_require__(6766);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/vec3f32.js
var vec3f32 = __webpack_require__(79912);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/projection.js + 2 modules
var projection = __webpack_require__(76117);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/geometry/SpatialReference.js
var SpatialReference = __webpack_require__(14685);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudClassBreaksRenderer.js + 1 modules
var PointCloudClassBreaksRenderer = __webpack_require__(99723);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudStretchRenderer.js
var PointCloudStretchRenderer = __webpack_require__(5947);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/PointCloudUniqueValueRenderer.js + 1 modules
var PointCloudUniqueValueRenderer = __webpack_require__(60948);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/layers/i3s/LEPCC.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const LEPCC_t=!0,o={identifierOffset:0,identifierLength:10,versionOffset:10,checksumOffset:12,byteCount:16};function LEPCC_r(e,r,n){return{identifier:String.fromCharCode.apply(null,new Uint8Array(e,n+o.identifierOffset,o.identifierLength)),version:r.getUint16(n+o.versionOffset,LEPCC_t),checksum:r.getUint32(n+o.checksumOffset,LEPCC_t)}}const LEPCC_n={sizeLo:0,sizeHi:4,minX:8,minY:16,minZ:24,maxX:32,maxY:40,maxZ:48,errorX:56,errorY:64,errorZ:72,count:80,reserved:84,byteCount:88};function i(e,o){return{sizeLo:e.getUint32(o+LEPCC_n.sizeLo,LEPCC_t),sizeHi:e.getUint32(o+LEPCC_n.sizeHi,LEPCC_t),minX:e.getFloat64(o+LEPCC_n.minX,LEPCC_t),minY:e.getFloat64(o+LEPCC_n.minY,LEPCC_t),minZ:e.getFloat64(o+LEPCC_n.minZ,LEPCC_t),maxX:e.getFloat64(o+LEPCC_n.maxX,LEPCC_t),maxY:e.getFloat64(o+LEPCC_n.maxY,LEPCC_t),maxZ:e.getFloat64(o+LEPCC_n.maxZ,LEPCC_t),errorX:e.getFloat64(o+LEPCC_n.errorX,LEPCC_t),errorY:e.getFloat64(o+LEPCC_n.errorY,LEPCC_t),errorZ:e.getFloat64(o+LEPCC_n.errorZ,LEPCC_t),count:e.getUint32(o+LEPCC_n.count,LEPCC_t),reserved:e.getUint32(o+LEPCC_n.reserved,LEPCC_t)}}function c(t){const c=new DataView(t,0);let d=0;const{identifier:l,version:a}=LEPCC_r(t,c,d);if(d+=o.byteCount,"LEPCC     "!==l)throw new core_Error/* default */.Z("lepcc-decode-error","Bad identifier");if(a>1)throw new core_Error/* default */.Z("lepcc-decode-error","Unknown version");const u=i(c,d);d+=LEPCC_n.byteCount;if(u.sizeHi*2**32+u.sizeLo!==t.byteLength)throw new core_Error/* default */.Z("lepcc-decode-error","Bad size");const f=new Float64Array(3*u.count),h=[],w=[],g=[],p=[];if(d=s(t,d,h),d=s(t,d,w),d=s(t,d,g),d=s(t,d,p),d!==t.byteLength)throw new core_Error/* default */.Z("lepcc-decode-error","Bad length");let m=0,U=0;for(let e=0;e<h.length;e++){U+=h[e];let t=0;for(let o=0;o<w[e];o++){t+=g[m];const e=p[m];f[3*m]=Math.min(u.maxX,u.minX+2*u.errorX*t),f[3*m+1]=Math.min(u.maxY,u.minY+2*u.errorY*U),f[3*m+2]=Math.min(u.maxZ,u.minZ+2*u.errorZ*e),m++}}return{errorX:u.errorX,errorY:u.errorY,errorZ:u.errorZ,result:f}}function s(e,t,o){const r=[];t=d(e,t,r);const n=[];for(let i=0;i<r.length;i++){n.length=0,t=d(e,t,n);for(let e=0;e<n.length;e++)o.push(n[e]+r[i])}return t}function d(o,r,n){const i=new DataView(o,r),c=i.getUint8(0),s=31&c,d=!!(32&c),l=(192&c)>>6;let a=0;if(0===l)a=i.getUint32(1,LEPCC_t),r+=5;else if(1===l)a=i.getUint16(1,LEPCC_t),r+=3;else{if(2!==l)throw new core_Error/* default */.Z("lepcc-decode-error","Bad count type");a=i.getUint8(1),r+=2}if(d)throw new core_Error/* default */.Z("lepcc-decode-error","LUT not implemented");const u=Math.ceil(a*s/8),f=new Uint8Array(o,r,u);let h=0,w=0,g=0;const p=-1>>>32-s;for(let e=0;e<a;e++){for(;w<s;)h|=f[g]<<w,w+=8,g+=1;n[e]=h&p,h>>>=s,w-=s,w+s>32&&(h|=f[g-1]>>8-w)}return r+g}const l={sizeLo:0,sizeHi:4,count:8,colorMapCount:12,lookupMethod:14,compressionMethod:15,byteCount:16};function LEPCC_a(e,o){return{sizeLo:e.getUint32(o+l.sizeLo,LEPCC_t),sizeHi:e.getUint32(o+l.sizeHi,LEPCC_t),count:e.getUint32(o+l.count,LEPCC_t),colorMapCount:e.getUint16(o+l.colorMapCount,LEPCC_t),lookupMethod:e.getUint8(o+l.lookupMethod),compressionMethod:e.getUint8(o+l.compressionMethod)}}function LEPCC_u(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=LEPCC_r(t,n,i);if(i+=o.byteCount,"ClusterRGB"!==c)throw new core_Error/* default */.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new core_Error/* default */.Z("lepcc-decode-error","Unknown version");const d=LEPCC_a(n,i);i+=l.byteCount;if(d.sizeHi*2**32+d.sizeLo!==t.byteLength)throw new core_Error/* default */.Z("lepcc-decode-error","Bad size");if((2===d.lookupMethod||1===d.lookupMethod)&&0===d.compressionMethod){if(3*d.colorMapCount+d.count+i!==t.byteLength||d.colorMapCount>256)throw new core_Error/* default */.Z("lepcc-decode-error","Bad count");const o=new Uint8Array(t,i,3*d.colorMapCount),r=new Uint8Array(t,i+3*d.colorMapCount,d.count),n=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++){const t=r[e];n[3*e]=o[3*t],n[3*e+1]=o[3*t+1],n[3*e+2]=o[3*t+2]}return n}if(0===d.lookupMethod&&0===d.compressionMethod){if(3*d.count+i!==t.byteLength||0!==d.colorMapCount)throw new core_Error/* default */.Z("lepcc-decode-error","Bad count");return new Uint8Array(t,i).slice()}if(d.lookupMethod<=2&&1===d.compressionMethod){if(i+3!==t.byteLength||1!==d.colorMapCount)throw new core_Error/* default */.Z("lepcc-decode-error","Bad count");const o=n.getUint8(i),r=n.getUint8(i+1),c=n.getUint8(i+2),s=new Uint8Array(3*d.count);for(let e=0;e<d.count;e++)s[3*e]=o,s[3*e+1]=r,s[3*e+2]=c;return s}throw new core_Error/* default */.Z("lepcc-decode-error","Bad method "+d.lookupMethod+","+d.compressionMethod)}const f={sizeLo:0,sizeHi:4,count:8,scaleFactor:12,bitsPerPoint:14,reserved:15,byteCount:16};function h(e,o){return{sizeLo:e.getUint32(o+f.sizeLo,LEPCC_t),sizeHi:e.getUint32(o+f.sizeHi,LEPCC_t),count:e.getUint32(o+f.count,LEPCC_t),scaleFactor:e.getUint16(o+f.scaleFactor,LEPCC_t),bitsPerPoint:e.getUint8(o+f.bitsPerPoint),reserved:e.getUint8(o+f.reserved)}}function w(t){const n=new DataView(t,0);let i=0;const{identifier:c,version:s}=LEPCC_r(t,n,i);if(i+=o.byteCount,"Intensity "!==c)throw new core_Error/* default */.Z("lepcc-decode-error","Bad identifier");if(s>1)throw new core_Error/* default */.Z("lepcc-decode-error","Unknown version");const l=h(n,i);i+=f.byteCount;if(l.sizeHi*2**32+l.sizeLo!==t.byteLength)throw new core_Error/* default */.Z("lepcc-decode-error","Bad size");const a=new Uint16Array(l.count);if(8===l.bitsPerPoint){if(l.count+i!==t.byteLength)throw new core_Error/* default */.Z("lepcc-decode-error","Bad size");const o=new Uint8Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else if(16===l.bitsPerPoint){if(2*l.count+i!==t.byteLength)throw new core_Error/* default */.Z("lepcc-decode-error","Bad size");const o=new Uint16Array(t,i,l.count);for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}else{const o=[];if(d(t,i,o)!==t.byteLength)throw new core_Error/* default */.Z("lepcc-decode-error","Bad size");for(let e=0;e<l.count;e++)a[e]=o[e]*l.scaleFactor}return a}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/layers/i3s/I3SBinaryReader.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const I3SBinaryReader_i=Logger/* default.getLogger */.Z.getLogger("esri.views.3d.layers.i3s.I3SBinaryReader");function u(t,n,r){let o="",i=0;for(;i<r;){const u=t[n+i];if(u<128)o+=String.fromCharCode(u),i++;else if(u>=192&&u<224){if(i+1>=r)throw new core_Error/* default */.Z("utf8-decode-error","UTF-8 Decode failed. Two byte character was truncated.");const a=(31&u)<<6|63&t[n+i+1];o+=String.fromCharCode(a),i+=2}else if(u>=224&&u<240){if(i+2>=r)throw new core_Error/* default */.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(15&u)<<12|(63&t[n+i+1])<<6|63&t[n+i+2];o+=String.fromCharCode(a),i+=3}else{if(!(u>=240&&u<248))throw new core_Error/* default */.Z("utf8-decode-error","UTF-8 Decode failed. Invalid multi byte sequence.");{if(i+3>=r)throw new core_Error/* default */.Z("utf8-decode-error","UTF-8 Decode failed. Multi byte character was truncated.");const a=(7&u)<<18|(63&t[n+i+1])<<12|(63&t[n+i+2])<<6|63&t[n+i+3];if(a>=65536){const e=55296+(a-65536>>10),t=56320+(1023&a);o+=String.fromCharCode(e,t)}else o+=String.fromCharCode(a);i+=4}}}return o}function I3SBinaryReader_a(e,t){const n={byteOffset:0,byteCount:0,fields:Object.create(null)};let r=0;for(let o=0;o<t.length;o++){const i=t[o],u=i.valueType||i.type,a=I[u];n.fields[i.property]=a(e,r),r+=m[u].BYTES_PER_ELEMENT}return n.byteCount=r,n}function I3SBinaryReader_s(t,n,r){const o=[];let i,a,s=0;for(a=0;a<t;a+=1){if(i=n[a],i>0){if(o.push(u(r,s,i-1)),0!==r[s+i-1])throw new core_Error/* default */.Z("string-array-error","Invalid string array: missing null termination.")}else o.push(null);s+=i}return o}function I3SBinaryReader_c(e,t){return new(0,m[t.valueType])(e,t.byteOffset,t.count*t.valuesPerElement)}function I3SBinaryReader_f(e,t){return new Uint8Array(e,t.byteOffset,t.byteCount)}function I3SBinaryReader_l(n,r,o){const i=null!=r.header?I3SBinaryReader_a(n,r.header):{byteOffset:0,byteCount:0,fields:{count:o}},u={header:i,byteOffset:i.byteCount,byteCount:0,entries:Object.create(null)};let s=i.byteCount;for(let a=0;a<r.ordering.length;a++){const n=r.ordering[a],o=(0,lang/* clone */.d9)(r[n]);if(o.count=i.fields.count,"String"===o.valueType){if(o.byteOffset=s,o.byteCount=i.fields[n+"ByteCount"],"UTF-8"!==o.encoding)throw new core_Error/* default */.Z("unsupported-encoding","Unsupported String encoding.",{encoding:o.encoding})}else{if(!I3SBinaryReader_h(o.valueType))throw new core_Error/* default */.Z("unsupported-value-type","Unsupported binary valueType",{valueType:o.valueType});{const e=A(o.valueType);s+=s%e!=0?e-s%e:0,o.byteOffset=s,o.byteCount=e*o.valuesPerElement*o.count}}s+=o.byteCount,u.entries[n]=o}return u.byteCount=s-u.byteOffset,u}function b(t,n,r){if(n!==t&&I3SBinaryReader_i.error(`Invalid ${r} buffer size\n expected: ${t}, actual: ${n})`),n<t)throw new core_Error/* default */.Z("buffer-too-small","Binary buffer is too small",{expectedSize:t,actualSize:n})}function I3SBinaryReader_d(e){return{isDraco:!1,isLegacy:!1,color:null!=e.color,normal:null!=e.normal,uv0:null!=e.uv0,uvRegion:null!=e.uvRegion,featureIndex:null!=e.faceRange&&null!=e.featureId}}function y(e,t){const n=I3SBinaryReader_a(e,t&&t.header);let r=n.byteCount;const o={isDraco:!1,header:n,byteOffset:n.byteCount,byteCount:0,vertexAttributes:{}},i=n.fields,u=null!=i.vertexCount?i.vertexCount:i.count;for(const a of t.ordering){if(!t.vertexAttributes[a])continue;const e={...t.vertexAttributes[a],byteOffset:r,count:u},n=p[a]?p[a]:"_"+a;o.vertexAttributes[n]=e,r+=A(e.valueType)*e.valuesPerElement*u}const s=i.faceCount;if(t.faces&&s){o.faces={};for(const e of t.ordering){if(!t.faces[e])continue;const n={...t.faces[e],byteOffset:r,count:s};o.faces[e]=n,r+=A(n.valueType)*n.valuesPerElement*s}}const c=i.featureCount;if(t.featureAttributes&&t.featureAttributeOrder&&c){o.featureAttributes={};for(const e of t.featureAttributeOrder){if(!t.featureAttributes[e])continue;const n={...t.featureAttributes[e],byteOffset:r,count:c};o.featureAttributes[e]=n;r+=("UInt64"===n.valueType?8:A(n.valueType))*n.valuesPerElement*c}}return b(r,e.byteLength,"geometry"),o.byteCount=r-o.byteOffset,o}function g(e,t){return!(!e||!e.compressedAttributes||"draco"!==e.compressedAttributes.encoding)?v(e.compressedAttributes.attributes):e?I3SBinaryReader_d(e):I3SBinaryReader_w(t)}function I3SBinaryReader_w(e){const t={isDraco:!1,isLegacy:!0,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e.ordering)if(e.vertexAttributes[n])switch(n){case"position":break;case"normal":t.normal=!0;break;case"color":t.color=!0;break;case"uv0":t.uv0=!0;break;case"region":t.uvRegion=!0}return e.featureAttributes&&e.featureAttributeOrder&&(t.featureIndex=!0),t}function v(e){const t={isDraco:!0,isLegacy:!1,color:!1,normal:!1,uv0:!1,uvRegion:!1,featureIndex:!1};for(const n of e)switch(n){case"position":break;case"normal":t.normal=!0;break;case"uv0":t.uv0=!0;break;case"color":t.color=!0;break;case"uv-region":t.uvRegion=!0;break;case"feature-index":t.featureIndex=!0}return t}const p={position:"position",normal:"normal",color:"color",uv0:"uv0",region:"uvRegion"};function C(t,n,u){if("lepcc-rgb"===t.encoding)return LEPCC_u(n);if("lepcc-intensity"===t.encoding)return w(n);if(null!=t.encoding&&""!==t.encoding)throw new core_Error/* default */.Z("unknown-attribute-storage-info-encoding","Unknown Attribute Storage Info Encoding");t["attributeByteCounts "]&&!t.attributeByteCounts&&(I3SBinaryReader_i.warn("Warning: Trailing space in 'attributeByteCounts '."),t.attributeByteCounts=t["attributeByteCounts "]),"ObjectIds"===t.ordering[0]&&t.hasOwnProperty("objectIds")&&(I3SBinaryReader_i.warn("Warning: Case error in objectIds"),t.ordering[0]="objectIds");const a=I3SBinaryReader_l(n,t,u);b(a.byteOffset+a.byteCount,n.byteLength,"attribute");const d=a.entries.attributeValues||a.entries.objectIds;if(d){if("String"===d.valueType){const e=a.entries.attributeByteCounts,t=I3SBinaryReader_c(n,e),r=I3SBinaryReader_f(n,d);return I3SBinaryReader_s(e.count,t,r)}return I3SBinaryReader_c(n,d)}throw new core_Error/* default */.Z("bad-attribute-storage-info","Bad attributeStorageInfo specification.")}const m={Float32:Float32Array,Float64:Float64Array,UInt8:Uint8Array,Int8:Int8Array,UInt16:Uint16Array,Int16:Int16Array,UInt32:Uint32Array,Int32:Int32Array},I={Float32:(e,t)=>new DataView(e,0).getFloat32(t,!0),Float64:(e,t)=>new DataView(e,0).getFloat64(t,!0),UInt8:(e,t)=>new DataView(e,0).getUint8(t),Int8:(e,t)=>new DataView(e,0).getInt8(t),UInt16:(e,t)=>new DataView(e,0).getUint16(t,!0),Int16:(e,t)=>new DataView(e,0).getInt16(t,!0),UInt32:(e,t)=>new DataView(e,0).getUint32(t,!0),Int32:(e,t)=>new DataView(e,0).getInt32(t,!0)};function I3SBinaryReader_h(e){return m.hasOwnProperty(e)}function A(e){return I3SBinaryReader_h(e)?m[e].BYTES_PER_ELEMENT:0}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/layers/i3s/PointCloudWorkerUtil.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function PointCloudWorkerUtil_u(e,o,l,i){const{rendererJSON:s,isRGBRenderer:f}=e;let u=null,c=null;if(o&&f)u=o;else if(o&&"pointCloudUniqueValueRenderer"===s.type){c=PointCloudUniqueValueRenderer/* default.fromJSON */.Z.fromJSON(s);const e=c.colorUniqueValueInfos;u=new Uint8Array(3*i);const r=PointCloudWorkerUtil_p(c.fieldTransformType);for(let t=0;t<i;t++){const n=(r?r(o[t]):o[t])+"";for(let o=0;o<e.length;o++)if(e[o].values.indexOf(n)>=0){u[3*t]=e[o].color.r,u[3*t+1]=e[o].color.g,u[3*t+2]=e[o].color.b;break}}}else if(o&&"pointCloudStretchRenderer"===s.type){c=PointCloudStretchRenderer/* default.fromJSON */.Z.fromJSON(s);const e=c.stops;u=new Uint8Array(3*i);const r=PointCloudWorkerUtil_p(c.fieldTransformType);for(let t=0;t<i;t++){const n=r?r(o[t]):o[t],l=e.length-1;if(n<e[0].value)u[3*t]=e[0].color.r,u[3*t+1]=e[0].color.g,u[3*t+2]=e[0].color.b;else if(n>=e[l].value)u[3*t]=e[l].color.r,u[3*t+1]=e[l].color.g,u[3*t+2]=e[l].color.b;else for(let o=1;o<e.length;o++)if(n<e[o].value){const r=(n-e[o-1].value)/(e[o].value-e[o-1].value);u[3*t]=e[o].color.r*r+e[o-1].color.r*(1-r),u[3*t+1]=e[o].color.g*r+e[o-1].color.g*(1-r),u[3*t+2]=e[o].color.b*r+e[o-1].color.b*(1-r);break}}}else if(o&&"pointCloudClassBreaksRenderer"===s.type){c=PointCloudClassBreaksRenderer/* default.fromJSON */.Z.fromJSON(s);const e=c.colorClassBreakInfos;u=new Uint8Array(3*i);const t=PointCloudWorkerUtil_p(c.fieldTransformType);for(let r=0;r<i;r++){const n=t?t(o[r]):o[r];for(let o=0;o<e.length;o++)if(n>=e[o].minValue&&n<=e[o].maxValue){u[3*r]=e[o].color.r,u[3*r+1]=e[o].color.g,u[3*r+2]=e[o].color.b;break}}}else{u=new Uint8Array(3*i);for(let e=0;e<u.length;e++)u[e]=255}if(l&&c&&c.colorModulation){const e=c.colorModulation.minValue,o=c.colorModulation.maxValue,r=.3;for(let t=0;t<i;t++){const n=l[t],i=n>=o?1:n<=e?r:r+(1-r)*(n-e)/(o-e);u[3*t]=i*u[3*t],u[3*t+1]=i*u[3*t+1],u[3*t+2]=i*u[3*t+2]}}return u}function PointCloudWorkerUtil_c(o,r){if(null==o.encoding||""===o.encoding){const t=y(r,o);if((0,maybe/* isNone */.Wi)(t.vertexAttributes.position))return;const n=I3SBinaryReader_c(r,t.vertexAttributes.position),s=t.header.fields,f=[s.offsetX,s.offsetY,s.offsetZ],u=[s.scaleX,s.scaleY,s.scaleZ],c=n.length/3,a=new Float64Array(3*c);for(let e=0;e<c;e++)a[3*e]=n[3*e]*u[0]+f[0],a[3*e+1]=n[3*e+1]*u[1]+f[1],a[3*e+2]=n[3*e+2]*u[2]+f[2];return a}if("lepcc-xyz"===o.encoding)return c(r).result}function PointCloudWorkerUtil_a(e,r,t){return (0,maybe/* isSome */.pC)(e)&&e.attributeInfo.useElevation?PointCloudWorkerUtil_d(r,t):(0,maybe/* isSome */.pC)(e)?C(e.attributeInfo.storageInfo,e.buffer,t):null}function PointCloudWorkerUtil_d(e,o){const r=new Float64Array(o);for(let t=0;t<o;t++)r[t]=e[3*t+2];return r}function PointCloudWorkerUtil_m(e,o,r,t,n){const l=e.length/3;let i=0;for(let s=0;s<l;s++){let l=!0;for(let e=0;e<t.length&&l;e++){const{filterJSON:o}=t[e],r=n[e].values[s];switch(o.type){case"pointCloudValueFilter":{const e="exclude"===o.mode;-1!==o.values.indexOf(r)===e&&(l=!1);break}case"pointCloudBitfieldFilter":{const e=PointCloudWorkerUtil_b(o.requiredSetBits),t=PointCloudWorkerUtil_b(o.requiredClearBits);(r&e)===e&&0==(r&t)||(l=!1);break}case"pointCloudReturnFilter":{const e=15&r,t=r>>>4&15,n=t>1,i=1===e,s=e===t;let f=!1;for(const r of o.includedReturns)if("last"===r&&s||"firstOfMany"===r&&i&&n||"lastOfMany"===r&&s&&n||"single"===r&&!n){f=!0;break}f||(l=!1);break}}}l&&(r[i]=s,e[3*i]=e[3*s],e[3*i+1]=e[3*s+1],e[3*i+2]=e[3*s+2],o[3*i]=o[3*s],o[3*i+1]=o[3*s+1],o[3*i+2]=o[3*s+2],i++)}return i}function PointCloudWorkerUtil_p(e){return null==e||"none"===e?null:"low-four-bit"===e?e=>15&e:"high-four-bit"===e?e=>(240&e)>>4:"absolute-value"===e?e=>Math.abs(e):"modulo-ten"===e?e=>e%10:null}function PointCloudWorkerUtil_b(e){let o=0;for(const r of e||[])o|=1<<r;return o}

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/3d/layers/PointCloudWorker.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
class PointCloudWorker_p{transform(e){const a=this._transform(e),o=[a.points.buffer,a.rgb.buffer];(0,maybe/* isSome */.pC)(a.pointIdFilterMap)&&o.push(a.pointIdFilterMap.buffer);for(const t of a.attributes)"buffer"in t.values&&(0,typedArrayUtil/* isArrayBuffer */.eP)(t.values.buffer)&&t.values.buffer!==a.rgb.buffer&&o.push(t.values.buffer);return Promise.resolve({result:a,transferList:o})}_transform(r){const e=PointCloudWorkerUtil_c(r.schema,r.geometryBuffer);let a=e.length/3,o=null;const f=[],s=PointCloudWorkerUtil_a(r.primaryAttributeData,e,a);(0,maybe/* isSome */.pC)(r.primaryAttributeData)&&s&&f.push({attributeInfo:r.primaryAttributeData.attributeInfo,values:s});const i=PointCloudWorkerUtil_a(r.modulationAttributeData,e,a);(0,maybe/* isSome */.pC)(r.modulationAttributeData)&&i&&f.push({attributeInfo:r.modulationAttributeData.attributeInfo,values:i});let p=PointCloudWorkerUtil_u(r.rendererInfo,s,i,a);if(r.filterInfo&&r.filterInfo.length>0&&(0,maybe/* isSome */.pC)(r.filterAttributesData)){const t=r.filterAttributesData.map((t=>{const r=PointCloudWorkerUtil_a(t,e,a),o={attributeInfo:t.attributeInfo,values:r};return f.push(o),o}));o=new Uint32Array(a),a=PointCloudWorkerUtil_m(e,p,o,r.filterInfo,t)}for(const t of r.userAttributesData){const r=PointCloudWorkerUtil_a(t,e,a);f.push({attributeInfo:t.attributeInfo,values:r})}3*a<p.length&&(p=new Uint8Array(p.buffer.slice(0,3*a))),this._applyElevationOffsetInPlace(e,a,r.elevationOffset);const c=this._transformCoordinates(e,a,r.obb,SpatialReference/* default.fromJSON */.Z.fromJSON(r.inSR),SpatialReference/* default.fromJSON */.Z.fromJSON(r.outSR));return{obb:r.obb,points:c,rgb:p,attributes:f,pointIdFilterMap:o}}_transformCoordinates(t,r,a,n,u){if(!(0,projection/* projectBuffer */.CM)(t,n,0,t,u,0,r))throw Error("Can't reproject");const l=(0,vec3f32.f)(a.center[0],a.center[1],a.center[2]),b=(0,vec3f32.c)(),m=(0,vec3f32.c)();(0,quat.c)(PointCloudWorker_c,a.quaternion);const p=new Float32Array(3*r);for(let e=0;e<r;e++)b[0]=t[3*e]-l[0],b[1]=t[3*e+1]-l[1],b[2]=t[3*e+2]-l[2],(0,vec3.q)(m,b,PointCloudWorker_c),a.halfSize[0]=Math.max(a.halfSize[0],Math.abs(m[0])),a.halfSize[1]=Math.max(a.halfSize[1],Math.abs(m[1])),a.halfSize[2]=Math.max(a.halfSize[2],Math.abs(m[2])),p[3*e]=b[0],p[3*e+1]=b[1],p[3*e+2]=b[2];return p}_applyElevationOffsetInPlace(t,r,e){if(0!==e)for(let a=0;a<r;a++)t[3*a+2]+=e}}const PointCloudWorker_c=n();function PointCloudWorker_h(){return new PointCloudWorker_p}


/***/ })

};
;
//# sourceMappingURL=2849.render-page.js.map