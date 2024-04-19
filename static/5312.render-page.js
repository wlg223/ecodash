"use strict";
exports.id = 5312;
exports.ids = [5312];
exports.modules = {

/***/ 89626:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RL": () => (/* binding */ m),
/* harmony export */   "bk": () => (/* binding */ f),
/* harmony export */   "Fp": () => (/* binding */ r),
/* harmony export */   "UV": () => (/* binding */ a)
/* harmony export */ });
/* unused harmony export getSDFSymbol */
/* harmony import */ var _core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(73534);
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(53736);
/* harmony import */ var _Rect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10927);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function r(t){if(!t)return null;switch(t.type){case"CIMPointSymbol":{const n=t.symbolLayers;return n&&1===n.length?r(n[0]):null}case"CIMVectorMarker":{var n;const o=t.markerGraphics;if(!o||1!==o.length)return null;const r=o[0];if(!r)return null;const l=r.geometry;if(!l)return null;const e=r.symbol;return!e||"CIMPolygonSymbol"!==e.type&&"CIMLineSymbol"!==e.type||null!=(n=e.symbolLayers)&&n.some((t=>!!t.effects))?null:{geom:l,asFill:"CIMPolygonSymbol"===e.type}}case"sdf":return{geom:t.geom,asFill:t.asFill}}return null}function l(t){const n=t.markerGraphics;if(!n||1!==n.length)return null;const o=n[0];if(!o)return null;const r=o.symbol;return!r||"CIMPolygonSymbol"!==r.type&&"CIMLineSymbol"!==r.type?null:r}function e(t){return t?t.rings?t.rings:t.paths?t.paths:void 0!==t.xmin&&void 0!==t.ymin&&void 0!==t.xmax&&void 0!==t.ymax?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function s(t){let n=1/0,r=-1/0,l=1/0,e=-1/0;for(const o of t)for(const t of o)t[0]<n&&(n=t[0]),t[0]>r&&(r=t[0]),t[1]<l&&(l=t[1]),t[1]>e&&(e=t[1]);return new _Rect_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z(n,l,r-n,e-l)}function i(t){let n=1/0,o=-1/0,r=1/0,l=-1/0;for(const e of t)for(const t of e)t[0]<n&&(n=t[0]),t[0]>o&&(o=t[0]),t[1]<r&&(r=t[1]),t[1]>l&&(l=t[1]);return[n,r,o,l]}function f(t){return t?t.rings?i(t.rings):t.paths?i(t.paths):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .isExtent */ .YX)(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function a(t,n,o,r,l){const[e,s,i,f]=t;if(i<e||f<s)return[0,0,0];const a=i-e,m=f-s,u=128,c=1,y=Math.floor(.5*(.5*u-c)),h=(u-2*(y+c))/Math.max(a,m),x=Math.round(a*h)+2*y,M=Math.round(m*h)+2*y;let g=1;if(n){g=M/h/(n.ymax-n.ymin)}let p=0,d=0;if(r)if(l){if(n&&o&&n.ymax-n.ymin>0){const t=(n.xmax-n.xmin)/(n.ymax-n.ymin);p=r.x/(o*t),d=r.y/o}}else p=r.x,d=r.y;p=.5*(n.xmax+n.xmin)+p*(n.xmax-n.xmin),d=.5*(n.ymax+n.ymin)+d*(n.ymax-n.ymin),p-=e,d-=s,p*=h,d*=h,p+=y,d+=y;return[g,p/x-.5,-(d/M-.5)]}function m(t){const n=e(t.geom),o=s(n),r=128,l=1,i=Math.floor(.5*(.5*r-l)),f=(r-2*(i+l))/Math.max(o.width,o.height),a=Math.round(o.width*f)+2*i,m=Math.round(o.height*f)+2*i,h=[];for(const e of n)if(e&&e.length>1){const n=[];for(const r of e){let[l,e]=r;l-=o.x,e-=o.y,l*=f,e*=f,l+=i-.5,e+=i-.5,t.asFill?n.push([l,e]):n.push([Math.round(l),Math.round(e)])}if(t.asFill){const t=n.length-1;n[0][0]===n[t][0]&&n[0][1]===n[t][1]||n.push(n[0])}h.push(n)}const x=u(h,a,m,i);return t.asFill&&c(h,a,m,i,x),[y(x,i),a,m]}function u(t,n,o,r){const l=n*o,e=new Array(l),s=r*r+1;for(let i=0;i<l;++i)e[i]=s;for(const i of t){const t=i.length;for(let l=1;l<t;++l){const t=i[l-1],s=i[l];let f,a,m,u;t[0]<s[0]?(f=t[0],a=s[0]):(f=s[0],a=t[0]),t[1]<s[1]?(m=t[1],u=s[1]):(m=s[1],u=t[1]);let c=Math.floor(f)-r,y=Math.floor(a)+r,h=Math.floor(m)-r,x=Math.floor(u)+r;c<0&&(c=0),y>n&&(y=n),h<0&&(h=0),x>o&&(x=o);const M=s[0]-t[0],g=s[1]-t[1],p=M*M+g*g;for(let r=c;r<y;r++)for(let l=h;l<x;l++){let i,f,a=(r-t[0])*M+(l-t[1])*g;a<0?(i=t[0],f=t[1]):a>p?(i=s[0],f=s[1]):(a/=p,i=t[0]+a*M,f=t[1]+a*g);const m=(r-i)*(r-i)+(l-f)*(l-f),u=(o-l-1)*n+r;m<e[u]&&(e[u]=m)}}}for(let i=0;i<l;++i)e[i]=Math.sqrt(e[i]);return e}function c(t,n,o,r,l){for(const e of t){const t=e.length;for(let s=1;s<t;++s){const t=e[s-1],i=e[s];let f,a,m,u;t[0]<i[0]?(f=t[0],a=i[0]):(f=i[0],a=t[0]),t[1]<i[1]?(m=t[1],u=i[1]):(m=i[1],u=t[1]);let c=Math.floor(f),y=Math.floor(a)+1,h=Math.floor(m),x=Math.floor(u)+1;c<r&&(c=r),y>n-r&&(y=n-r),h<r&&(h=r),x>o-r&&(x=o-r);for(let e=h;e<x;++e){if(t[1]>e==i[1]>e)continue;const s=(o-e-1)*n;for(let n=c;n<y;++n)n<(i[0]-t[0])*(e-t[1])/(i[1]-t[1])+t[0]&&(l[s+n]=-l[s+n]);for(let t=r;t<c;++t)l[s+t]=-l[s+t]}}}}function y(n,o){const r=2*o,l=n.length,e=new Uint8Array(4*l);for(let s=0;s<l;++s){const o=.5-n[s]/r;(0,_core_floatRGBA_js__WEBPACK_IMPORTED_MODULE_0__/* .packFloatRGBA */ .I)(o,e,4*s)}return e}


/***/ }),

/***/ 75312:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ q),
/* harmony export */   "c": () => (/* binding */ I)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30936);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(61681);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(95550);
/* harmony import */ var _core_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(21130);
/* harmony import */ var _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30879);
/* harmony import */ var _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95215);
/* harmony import */ var _SDFHelper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(89626);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(60789);
/* harmony import */ var _effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(29882);
/* harmony import */ var _views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(28432);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const S=_core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.symbols.cim.cimAnalyzer");function v(e){switch(e){case"Butt":return 0;case"Square":return 2;default:return 1}}function N(e){switch(e){case"Bevel":return 0;case"Miter":return 2;default:return 1}}function b(e){switch(e){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function k(e){switch(e){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function C(e){let t="",i="";if(e){const o=e.toLowerCase();-1!==o.indexOf("italic")?t="italic":-1!==o.indexOf("oblique")&&(t="oblique"),-1!==o.indexOf("bold")?i="bold":-1!==o.indexOf("light")&&(i="lighter")}return{style:t,weight:i}}function O(e){return e.underline?"underline":e.strikethrough?"line-through":"none"}function P(e,t,i,o){let r;e[t]?r=e[t]:(r={},e[t]=r),r[i]=o}function M(e){const t=e.markerPlacement;return t&&t.angleToLine?1:0}async function I(e,t,i,o,r){const a=null!=o?o:[];if(!e)return a;let l,s;const c={};if("CIMSymbolReference"!==e.type)return S.error("Expect cim type to be 'CIMSymbolReference'"),a;if(l=e.symbol,s=e.primitiveOverrides,s){const e=[];for(const i of s){const o=i.valueExpressionInfo;if(o&&t){const r=o.expression,a=(0,_support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__/* .createRendererExpression */ .Yi)(r,t.spatialReference,t.fields).then((e=>{e&&P(c,i.primitiveName,i.propertyName,e)}));e.push(a)}else null!=i.value&&P(c,i.primitiveName,i.propertyName,i.value)}e.length>0&&await Promise.all(e)}const f=[];switch(K(l,i,f),f.length>0&&await Promise.all(f),l.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":L(l,s,c,t,a,i,r)}return a}function L(e,t,i,o,r,n,a){if(!e)return;const c=e.symbolLayers;if(!c)return;const f=e.effects;let m;const p=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getSize */ .B$.getSize(e);"CIMPointSymbol"===e.type&&"Map"===e.angleAlignment&&(m=1);let u=c.length;for(;u--;){const l=c[u];if(!l||!1===l.enable)continue;let h;f&&f.length&&(h=[...f]);const y=l.effects;y&&y.length&&(f?h.push(...y):h=[...y]);const g=[];switch(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .OverrideHelper.findApplicableOverrides */ .E0.findApplicableOverrides(l,t,g),l.type){case"CIMSolidFill":w(l,h,i,g,o,r);break;case"CIMPictureFill":X(l,h,i,g,o,n,r);break;case"CIMHatchFill":z(l,h,i,g,o,r);break;case"CIMGradientFill":x(l,h,i,g,o,r);break;case"CIMSolidStroke":J(l,h,i,g,o,r,"CIMPolygonSymbol"===e.type,p);break;case"CIMPictureStroke":H(l,h,i,g,o,r,"CIMPolygonSymbol"===e.type,p);break;case"CIMGradientStroke":Y(l,h,i,g,o,r,"CIMPolygonSymbol"===e.type,p);break;case"CIMCharacterMarker":if(R(l,h,i,g,o,r))break;break;case"CIMPictureMarker":if(R(l,h,i,g,o,r))break;"CIMLineSymbol"===e.type&&(m=M(l)),A(l,h,i,g,o,n,r,m,p);break;case"CIMVectorMarker":if(R(l,h,i,g,o,r))break;"CIMLineSymbol"===e.type&&(m=M(l)),$(l,h,i,g,o,r,n,m,p,a);break;default:S.error("Cannot analyze CIM layer",l.type)}}}function w(e,t,i,o,n,a){const l=e.primitiveName,s=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(e.color),[c,f]=V(o,l),p=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+f).toString();a.push({type:"fill",templateHash:p,materialHash:c?()=>p:p,cim:e,materialOverrides:null,colorLocked:e.colorLocked,color:U(l,i,"Color",n,s,G),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:t})}function X(e,t,o,n,a,l,s){const c=e.primitiveName,f=e.tintColor?(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(e.tintColor):{r:255,g:255,b:255,a:1},[u,h]=V(n,c),y=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+h).toString(),g=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString();let d=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.scaleX);if("width"in e){const t=e.width;let o=1;const r=l.getResource(e.url);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isSome */ .pC)(r)&&(o=r.width/r.height),d/=o*(e.height/t)}s.push({type:"fill",templateHash:y,materialHash:u?()=>g:g,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:U(c,o,"TintColor",a,f,G),height:U(c,o,"Height",a,e.height),scaleX:U(c,o,"ScaleX",a,d),angle:U(c,o,"Rotation",a,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.rotation)),offsetX:U(c,o,"OffsetX",a,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetX)),offsetY:U(c,o,"OffsetY",a,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetY)),url:e.url})}function z(e,t,i,o,n,a){const l=["Rotation","OffsetX","OffsetY"],s=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===l.indexOf(t.propertyName))),c=e.primitiveName,[f,m]=V(o,c),u=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+m).toString(),h=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(`${e.separation}${JSON.stringify(e.lineSymbol)}`).toString();a.push({type:"fill",templateHash:u,materialHash:f?B(h,i,s,n):h,cim:e,materialOverrides:s,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:U(c,i,"Separation",n,e.separation),scaleX:1,angle:U(c,i,"Rotation",n,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.rotation)),offsetX:U(c,i,"OffsetX",n,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetX)),offsetY:U(c,i,"OffsetY",n,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetY))})}function x(e,t,i,o,n,a){const l=e.primitiveName,[s,c]=V(o,l),f=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+c).toString();a.push({type:"fill",templateHash:f,materialHash:s?B(f,i,o,n):f,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function J(e,t,i,o,n,a,l,s){const c=e.primitiveName,f=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(e.color),p=void 0!==e.width?e.width:4,u=v(e.capStyle),h=N(e.joinStyle),y=e.miterLimit,[g,d]=V(o,c),S=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+d).toString();let b,k;if(t&&t.length>0){const i=t[t.length-1];if("CIMGeometricEffectDashes"===i.type&&"NoConstraint"===i.lineDashEnding){const i=(t=[...e.effects]).pop();b=i.dashTemplate,k=i.scaleDash}}a.push({type:"line",templateHash:S,materialHash:g?()=>S:S,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:U(c,i,"Color",n,f,G),width:U(c,i,"Width",n,p),cap:U(c,i,"CapStyle",n,u),join:U(c,i,"JoinStyle",n,h),miterLimit:U(c,i,"MiterLimit",n,y),referenceWidth:s,zOrder:E(e.name),dashTemplate:b,scaleDash:k})}function H(e,t,i,o,n,a,l,s){const c=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),f=e.primitiveName,p=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(e.tintColor),u=void 0!==e.width?e.width:4,h=v(e.capStyle),y=N(e.joinStyle),g=e.miterLimit,[d,S]=V(o,f),b=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+S).toString();a.push({type:"line",templateHash:b,materialHash:d?()=>c:c,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:U(f,i,"TintColor",n,p,G),width:U(f,i,"Width",n,u),cap:U(f,i,"CapStyle",n,h),join:U(f,i,"JoinStyle",n,y),miterLimit:U(f,i,"MiterLimit",n,g),referenceWidth:s,zOrder:E(e.name),dashTemplate:null,scaleDash:!1,url:e.url})}function Y(e,t,i,o,n,a,l,s){const c=e.primitiveName,f=void 0!==e.width?e.width:4,m=v(e.capStyle),p=N(e.joinStyle),u=e.miterLimit,[h,y]=V(o,c),g=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+y).toString();a.push({type:"line",templateHash:g,materialHash:h?B(g,i,o,n):g,cim:e,materialOverrides:null,isOutline:l,colorLocked:e.colorLocked,effects:t,color:{r:128,g:128,b:128,a:1},width:U(c,i,"Width",n,f),cap:U(c,i,"CapStyle",n,m),join:U(c,i,"JoinStyle",n,p),miterLimit:U(c,i,"MiterLimit",n,u),referenceWidth:s,zOrder:E(e.name),dashTemplate:null,scaleDash:!1})}function R(e,t,i,o,n,a){const l=e.markerPlacement;if(!l||"CIMMarkerPlacementInsidePolygon"!==l.type)return!1;const s=l,c=["Rotation","OffsetX","OffsetY"],f=o.filter((t=>t.primitiveName!==e.primitiveName&&-1===c.indexOf(t.propertyName))),m="url"in e?e.url:null,[u,h]=V(o,s.primitiveName),y=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+h).toString();let g=s.stepY,d=null,S=1;return l.shiftOddRows&&(g*=2,d=function(e){return e?2*e:0},S=.5),a.push({type:"fill",templateHash:y,materialHash:u?B(y,i,f,n):y,cim:e,materialOverrides:f,colorLocked:e.colorLocked,effects:t,color:{r:255,g:255,b:255,a:1},height:U(s.primitiveName,i,"StepY",n,g,d),scaleX:S,angle:U(s.primitiveName,i,"GridAngle",n,s.gridAngle),offsetX:U(s.primitiveName,i,"OffsetX",n,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(s.offsetX)),offsetY:U(s.primitiveName,i,"OffsetY",n,(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(s.offsetY)),url:m}),!0}function A(e,t,o,n,a,l,s,c,f){var u;const h=e.primitiveName,y=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.size);let g=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.scaleX);const d=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.rotation),S=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetX),v=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetY),N=e.tintColor?(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(e.tintColor):{r:255,g:255,b:255,a:1},b=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(`${e.url}${JSON.stringify(e.colorSubstitutions)}`).toString(),[k,C]=V(n,h),O=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(e)+C).toString(),P=null!=(u=e.anchorPoint)?u:{x:0,y:0};if("width"in e){const t=e.width;let o=1;const r=l.getResource(e.url);(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_9__/* .isSome */ .pC)(r)&&(o=r.width/r.height),g/=o*(y/t)}s.push({type:"marker",templateHash:O,materialHash:k?()=>b:b,cim:e,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:!1,alignment:c,size:U(h,o,"Size",a,y),scaleX:U(h,o,"ScaleX",a,g),rotation:U(h,o,"Rotation",a,d),offsetX:U(h,o,"OffsetX",a,S),offsetY:U(h,o,"OffsetY",a,v),color:U(h,o,"TintColor",a,N,G),anchorPoint:{x:P.x,y:-P.y},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:e.rotateClockwise,referenceSize:f,sizeRatio:1,markerPlacement:e.markerPlacement,url:e.url})}function $(e,t,i,o,r,n,a,l,s,c){const f=e.markerGraphics;if(!f)return;let m=0;if(e.scaleSymbolsProportionally){const t=e.frame;t&&(m=t.ymax-t.ymin)}for(const p of f)if(p){const f=p.symbol;if(!f)continue;switch(f.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":j(e,t,p,o,i,r,n,a,l,s,m,c);break;case"CIMTextSymbol":F(e,t,p,i,o,r,n,l,s,m)}}}function F(e,t,i,o,n,a,c,f,g,d){const S=[];_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .OverrideHelper.findApplicableOverrides */ .E0.findApplicableOverrides(i,n,S);const v=i.geometry;if(!("x"in v)||!("y"in v))return;const N=i.symbol,P=O(N),M=C(N.fontStyleName),I=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .toKebabCase */ .mA)(N.fontFamilyName);N.font={family:I,decoration:P,...M};const L=e.frame,w=v.x-.5*(L.xmin+L.xmax),X=v.y-.5*(L.ymin+L.ymax),z=e.size/d,x=e.primitiveName,J=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(N.height)*z,H=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(N.angle),Y=((0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(N.offsetX)+w)*z,R=((0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(N.offsetY)+X)*z,A=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getFillColor */ .B$.getFillColor(N));let $=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getStrokeColor */ .B$.getStrokeColor(N)),F=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getStrokeWidth */ .B$.getStrokeWidth(N);F||($=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getFillColor */ .B$.getFillColor(N.haloSymbol)),F=N.haloSize*z);const[j,W]=V(n,x),T=JSON.stringify(e.effects)+Number(e.colorLocked)+JSON.stringify(e.anchorPoint)+e.anchorPointUnits+JSON.stringify(e.markerPlacement),D=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(i)+T+W).toString(),E=U(i.primitiveName,o,"TextString",a,i.textString,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* ._adjustTextCase */ .X3,N.textCase),{fontStyleName:G}=N,B=I+(G?"-"+G.toLowerCase():"-regular"),q=B;c.push({type:"text",templateHash:D,materialHash:j||"function"==typeof E||E.match(/\[(.*?)\]/)?(e,t,i)=>q+"-"+(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .evaluateValueOrFunction */ .hf)(E,e,t,i):q+"-"+(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(E),cim:N,materialOverrides:null,colorLocked:e.colorLocked,effects:t,alignment:f,anchorPoint:{x:e.anchorPoint?e.anchorPoint.x:0,y:e.anchorPoint?e.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==e.anchorPointUnits,fontName:B,decoration:P,weight:U(x,o,"Weight",a,M.weight),style:U(x,o,"Size",a,M.style),size:U(x,o,"Size",a,J),angle:U(x,o,"Rotation",a,H),offsetX:U(x,o,"OffsetX",a,Y),offsetY:U(x,o,"OffsetY",a,R),horizontalAlignment:b(N.horizontalAlignment),verticalAlignment:k(N.verticalAlignment),text:E,color:A,outlineColor:$,outlineSize:F,referenceSize:g,sizeRatio:1,markerPlacement:e.markerPlacement})}function j(e,t,i,o,n,a,s,u,h,y,d,S){const v=i.symbol,N=v.symbolLayers;if(!N)return;if(S)return void T(e,t,i,n,o,a,s,u,h,y,d);let b=N.length;if(_(N))return void W(e,i,N,o,n,a,s,h,y,d);const k=_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .CIMEffectHelper.applyEffects */ .j.applyEffects(v.effects,i.geometry);if(k)for(;b--;){const S=N[b];if(S&&!1!==S.enable)switch(S.type){case"CIMSolidFill":case"CIMSolidStroke":{var C;const u=_effects_CIMEffectHelper_js__WEBPACK_IMPORTED_MODULE_6__/* .CIMEffectHelper.applyEffects */ .j.applyEffects(S.effects,k),v=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .getExtent */ .bk)(u);if(!v)continue;const[N,b,O]=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .getSDFMetrics */ .UV)(v,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),P="CIMSolidFill"===S.type,M={type:"sdf",geom:u,asFill:P},I=e.primitiveName,L=null!=(C=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.size))?C:10,w=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.rotation),X=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetX),z=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetY),x=S.path,J=S.primitiveName,H=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(P?_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getFillColor */ .B$.getFillColor(S):_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getStrokeColor */ .B$.getStrokeColor(S)),Y=P?{r:0,g:0,b:0,a:0}:(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getStrokeColor */ .B$.getStrokeColor(S)),R=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getStrokeWidth */ .B$.getStrokeWidth(S);if(!P&&!R)break;let A=!1,$="";for(const e of o)e.primitiveName!==J&&e.primitiveName!==I||(void 0!==e.value?$+=`-${e.primitiveName}-${e.propertyName}-${JSON.stringify(e.value)}`:e.valueExpressionInfo&&(A=!0));const F=JSON.stringify({...e,markerGraphics:null}),j=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(M)+x).toString(),W={type:"marker",templateHash:(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(i)+JSON.stringify(S)+F+$).toString(),materialHash:A?()=>j:j,cim:M,materialOverrides:null,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:h,anchorPoint:{x:b,y:O},isAbsoluteAnchorPoint:!1,size:U(e.primitiveName,n,"Size",a,L),rotation:U(e.primitiveName,n,"Rotation",a,w),offsetX:U(e.primitiveName,n,"OffsetX",a,X),offsetY:U(e.primitiveName,n,"OffsetY",a,z),scaleX:1,frameHeight:d,rotateClockwise:e.rotateClockwise,referenceSize:y,sizeRatio:N,color:U(J,n,"Color",a,H,G),outlineColor:U(J,n,"Color",a,Y,G),outlineWidth:U(J,n,"Width",a,R),markerPlacement:e.markerPlacement,path:x};s.push(W);break}default:T(e,t,i,n,o,a,s,u,h,y,d)}}}function W(e,t,i,o,n,a,s,u,h,y){const g=t.geometry,d=i[0],S=i[1],v=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .getExtent */ .bk)(g);if(!v)return;const[N,b,k]=(0,_SDFHelper_js__WEBPACK_IMPORTED_MODULE_5__/* .getSDFMetrics */ .UV)(v,e.frame,e.size,e.anchorPoint,"Relative"!==e.anchorPointUnits),C={type:"sdf",geom:g,asFill:!0},O=e.primitiveName,P=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.size),M=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.rotation),I=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetX),L=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetY),w=S.path,X=S.primitiveName,z=d.primitiveName,x=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getFillColor */ .B$.getFillColor(S)),J=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .fromCIMColor */ .NO)(_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getStrokeColor */ .B$.getStrokeColor(d)),H=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getStrokeWidth */ .B$.getStrokeWidth(d);let Y=!1,R="";for(const r of o)r.primitiveName!==X&&r.primitiveName!==z&&r.primitiveName!==O||(void 0!==r.value?R+=`-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}`:r.valueExpressionInfo&&(Y=!0));const A=JSON.stringify({...e,markerGraphics:null}),$=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(C)+w).toString(),F={type:"marker",templateHash:(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(t)+JSON.stringify(S)+JSON.stringify(d)+A+R).toString(),materialHash:Y?()=>$:$,cim:C,materialOverrides:null,colorLocked:e.colorLocked,effects:e.effects,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:b,y:k},isAbsoluteAnchorPoint:!1,size:U(e.primitiveName,n,"Size",a,P),rotation:U(e.primitiveName,n,"Rotation",a,M),offsetX:U(e.primitiveName,n,"OffsetX",a,I),offsetY:U(e.primitiveName,n,"OffsetY",a,L),scaleX:1,frameHeight:y,rotateClockwise:e.rotateClockwise,referenceSize:h,sizeRatio:N,color:U(X,n,"Color",a,x,G),outlineColor:U(z,n,"Color",a,J,G),outlineWidth:U(z,n,"Width",a,H),markerPlacement:e.markerPlacement,path:w};s.push(F)}function T(e,t,i,n,a,s,c,f,m,u,h){const y=D(e,i);let g=[];const d=["Rotation","OffsetX","OffsetY"];g=a.filter((t=>t.primitiveName!==e.primitiveName||-1===d.indexOf(t.propertyName)));let S="";for(const o of a)void 0!==o.value&&(S+=`-${o.primitiveName}-${o.propertyName}-${JSON.stringify(o.value)}`);const[v,N,b]=_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .CIMSymbolHelper.getTextureAnchor */ .B$.getTextureAnchor(y,f),k=e.primitiveName,C=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.rotation),O=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetX),P=(0,_utils_js__WEBPACK_IMPORTED_MODULE_8__/* .getValue */ .NA)(e.offsetY),M=(0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(JSON.stringify(y)+S).toString(),I={type:"marker",templateHash:M,materialHash:0===g.length?M:B(M,n,g,s),cim:y,materialOverrides:g,colorLocked:e.colorLocked,effects:t,scaleSymbolsProportionally:e.scaleSymbolsProportionally,alignment:m,anchorPoint:{x:v,y:N},isAbsoluteAnchorPoint:!1,size:e.size,rotation:U(k,n,"Rotation",s,C),offsetX:U(k,n,"OffsetX",s,O),offsetY:U(k,n,"OffsetY",s,P),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:h,rotateClockwise:e.rotateClockwise,referenceSize:u,sizeRatio:b/(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_10__/* .pt2px */ .F2)(e.size),markerPlacement:e.markerPlacement};c.push(I)}function D(e,t){return{type:e.type,enable:!0,name:e.name,colorLocked:e.colorLocked,primitiveName:e.primitiveName,anchorPoint:e.anchorPoint,anchorPointUnits:e.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:e.rotateClockwise,rotation:0,size:e.size,billboardMode3D:e.billboardMode3D,depth3D:e.depth3D,frame:e.frame,markerGraphics:[t],scaleSymbolsProportionally:e.scaleSymbolsProportionally,respectFrame:e.respectFrame,clippingPath:e.clippingPath}}function E(e){if(e&&0===e.indexOf("Level_")){const t=parseInt(e.substr(6),10);if(NaN!==t)return t}return 0}function G(t){if(!t||0===t.length)return null;const i=new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(t).toRgba();return{r:i[0],g:i[1],b:i[2],a:i[3]}}function U(e,t,i,o,r,n,l){const s=t[e];if(s){const e=s[i];if("string"==typeof e||"number"==typeof e||e instanceof Array)return n?n.call(null,e,l):e;if(null!=e&&e instanceof _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExpression */ .mz)return(t,i,a)=>{let s=(0,_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(e,t,{$view:a},o.geometryType,i);return null!==s&&n&&(s=n.call(null,s,l)),null!==s?s:r}}return r}function B(e,t,i,o){for(const r of i){if(r.valueExpressionInfo){const e=t[r.primitiveName]&&t[r.primitiveName][r.propertyName];e instanceof _support_arcadeOnDemand_js__WEBPACK_IMPORTED_MODULE_3__/* .ArcadeExpression */ .mz&&(r.fn=(t,i,r)=>(0,_views_2d_arcade_callExpressionWithFeature_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z)(e,t,{$view:r},o.geometryType,i))}}return(t,o,n)=>{for(const e of i)e.fn&&(e.value=e.fn(t,o,n));return (0,_core_string_js__WEBPACK_IMPORTED_MODULE_2__/* .numericHash */ .hP)(e+_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .OverrideHelper.buildOverrideKey */ .E0.buildOverrideKey(i)).toString()}}function q(e,t){if(!t||0===t.length)return e;const i=JSON.parse(JSON.stringify(e));return _CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_4__/* .OverrideHelper.applyOverrides */ .E0.applyOverrides(i,t),i}function V(e,t){let i=!1,o="";for(const r of e)r.primitiveName===t&&(void 0!==r.value?o+=`-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}`:r.valueExpressionInfo&&(i=!0));return[i,o]}function K(e,t,i){if(e&&t)switch(e.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const o=e.symbolLayers;if(!o)return;for(const e of o)switch(e.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in e&&e.url&&i.push(t.fetchResource(e.url,null));break;case"CIMVectorMarker":{const o=e.markerGraphics;if(!o)continue;for(const e of o)if(e){const o=e.symbol;o&&K(o,t,i)}}}}}}const _=e=>e&&2===e.length&&e[0].enable&&e[1].enable&&"CIMSolidStroke"===e[0].type&&"CIMSolidFill"===e[1].type&&!e[0].effects&&!e[1].effects;


/***/ }),

/***/ 29882:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "j": () => (/* binding */ f)
/* harmony export */ });
/* harmony import */ var _geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(53736);
/* harmony import */ var _CIMCursor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(94843);
/* harmony import */ var _CIMEffects_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(74710);
/* harmony import */ var _CIMOperators_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1922);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=96/72;class f{static executeEffects(t,s){const r=(0,_CIMCursor_js__WEBPACK_IMPORTED_MODULE_1__/* .cloneAndDecodeGeometry */ .GP)(s),f=c;let p=new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_2__/* .SimpleGeometryCursor */ .M(r);for(const e of t){const t=(0,_CIMOperators_js__WEBPACK_IMPORTED_MODULE_3__/* .getEffectOperator */ .h)(e);t&&(p=t.execute(p,e,f,!0))}return p}static next(t){const s=t.next();return (0,_CIMCursor_js__WEBPACK_IMPORTED_MODULE_1__/* .deltaEncodeGeometry */ .wp)(s),s}static applyEffects(e,r){if(!e)return r;let c=new _CIMEffects_js__WEBPACK_IMPORTED_MODULE_2__/* .SimpleGeometryCursor */ .M(r);for(const t of e){const s=(0,_CIMOperators_js__WEBPACK_IMPORTED_MODULE_3__/* .getEffectOperator */ .h)(t);s&&(c=s.execute(c,t,1,!1))}let f,p=null;for(;f=c.next();)p?(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolyline */ .l9)(p)?(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolyline */ .l9)(f)&&p.paths.push(...f.paths):(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolygon */ .oU)(p)&&(0,_geometry_support_jsonUtils_js__WEBPACK_IMPORTED_MODULE_0__/* .isPolygon */ .oU)(f)&&p.rings.push(...f.rings):p=f;return p}}


/***/ }),

/***/ 28432:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ s)
/* harmony export */ });
/* harmony import */ var _core_Error_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(70375);
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13802);
/* harmony import */ var _geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7505);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function s(e,t,o,n,a){const s=e.referencesGeometry()&&a?u(t,n,a):t,i=e.repurposeFeature(s);try{return e.evaluate({...o,$feature:i})}catch(c){return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.views.2d.support.arcadeOnDemand").warn("Feature arcade evaluation failed:",c),null}}const i=new Map;function u(e,r,t){const{transform:o,hasZ:n,hasM:a}=t;i.has(r)||i.set(r,c(r));const s=i.get(r)(e.geometry,o,n,a);return{...e,geometry:s}}function c(s){const i={};switch(s){case"esriGeometryPoint":return(e,r,t,o)=>(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .unquantizePoint */ .U1)(r,i,e,t,o);case"esriGeometryPolygon":return(e,r,t,o)=>(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .unquantizePolygon */ .Ie)(r,i,e,t,o);case"esriGeometryPolyline":return(e,r,t,n)=>(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .unquantizePolyline */ .G6)(r,i,e,t,n);case"esriGeometryMultipoint":return(e,r,o,n)=>(0,_geometry_support_quantizationUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .unquantizeMultipoint */ .J9)(r,i,e,o,n);default:return _core_Logger_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getLogger */ .Z.getLogger("esri.views.2d.support.arcadeOnDemand").error(new _core_Error_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z("mapview-arcade",`Unable to handle geometryType: ${s}`)),e=>e}}


/***/ })

};
;
//# sourceMappingURL=5312.render-page.js.map