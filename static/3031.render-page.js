"use strict";
exports.id = 3031;
exports.ids = [3031];
exports.modules = {

/***/ 86630:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ x),
/* harmony export */   "M": () => (/* binding */ n)
/* harmony export */ });
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const n={Base64:0,Hex:1,String:2,Raw:3},t=8,r=(1<<t)-1;function e(n,t){const r=(65535&n)+(65535&t);return(n>>16)+(t>>16)+(r>>16)<<16|65535&r}function o(n){const e=[];for(let o=0,u=n.length*t;o<u;o+=t)e[o>>5]|=(n.charCodeAt(o/t)&r)<<o%32;return e}function u(n){const e=[];for(let o=0,u=32*n.length;o<u;o+=t)e.push(String.fromCharCode(n[o>>5]>>>o%32&r));return e.join("")}function c(n){const t="0123456789abcdef",r=[];for(let e=0,o=4*n.length;e<o;e++)r.push(t.charAt(n[e>>2]>>e%4*8+4&15)+t.charAt(n[e>>2]>>e%4*8&15));return r.join("")}function f(n){const t="=",r="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",e=[];for(let o=0,u=4*n.length;o<u;o+=3){const u=(n[o>>2]>>o%4*8&255)<<16|(n[o+1>>2]>>(o+1)%4*8&255)<<8|n[o+2>>2]>>(o+2)%4*8&255;for(let c=0;c<4;c++)8*o+6*c>32*n.length?e.push(t):e.push(r.charAt(u>>6*(3-c)&63))}return e.join("")}function s(n,t){return n<<t|n>>>32-t}function i(n,t,r,o,u,c){return e(s(e(e(t,n),e(o,c)),u),r)}function h(n,t,r,e,o,u,c){return i(t&r|~t&e,n,t,o,u,c)}function a(n,t,r,e,o,u,c){return i(t&e|r&~e,n,t,o,u,c)}function l(n,t,r,e,o,u,c){return i(t^r^e,n,t,o,u,c)}function g(n,t,r,e,o,u,c){return i(r^(t|~e),n,t,o,u,c)}function p(n,t){n[t>>5]|=128<<t%32,n[14+(t+64>>>9<<4)]=t;let r=1732584193,o=-271733879,u=-1732584194,c=271733878;for(let f=0;f<n.length;f+=16){const t=r,s=o,i=u,p=c;r=h(r,o,u,c,n[f+0],7,-680876936),c=h(c,r,o,u,n[f+1],12,-389564586),u=h(u,c,r,o,n[f+2],17,606105819),o=h(o,u,c,r,n[f+3],22,-1044525330),r=h(r,o,u,c,n[f+4],7,-176418897),c=h(c,r,o,u,n[f+5],12,1200080426),u=h(u,c,r,o,n[f+6],17,-1473231341),o=h(o,u,c,r,n[f+7],22,-45705983),r=h(r,o,u,c,n[f+8],7,1770035416),c=h(c,r,o,u,n[f+9],12,-1958414417),u=h(u,c,r,o,n[f+10],17,-42063),o=h(o,u,c,r,n[f+11],22,-1990404162),r=h(r,o,u,c,n[f+12],7,1804603682),c=h(c,r,o,u,n[f+13],12,-40341101),u=h(u,c,r,o,n[f+14],17,-1502002290),o=h(o,u,c,r,n[f+15],22,1236535329),r=a(r,o,u,c,n[f+1],5,-165796510),c=a(c,r,o,u,n[f+6],9,-1069501632),u=a(u,c,r,o,n[f+11],14,643717713),o=a(o,u,c,r,n[f+0],20,-373897302),r=a(r,o,u,c,n[f+5],5,-701558691),c=a(c,r,o,u,n[f+10],9,38016083),u=a(u,c,r,o,n[f+15],14,-660478335),o=a(o,u,c,r,n[f+4],20,-405537848),r=a(r,o,u,c,n[f+9],5,568446438),c=a(c,r,o,u,n[f+14],9,-1019803690),u=a(u,c,r,o,n[f+3],14,-187363961),o=a(o,u,c,r,n[f+8],20,1163531501),r=a(r,o,u,c,n[f+13],5,-1444681467),c=a(c,r,o,u,n[f+2],9,-51403784),u=a(u,c,r,o,n[f+7],14,1735328473),o=a(o,u,c,r,n[f+12],20,-1926607734),r=l(r,o,u,c,n[f+5],4,-378558),c=l(c,r,o,u,n[f+8],11,-2022574463),u=l(u,c,r,o,n[f+11],16,1839030562),o=l(o,u,c,r,n[f+14],23,-35309556),r=l(r,o,u,c,n[f+1],4,-1530992060),c=l(c,r,o,u,n[f+4],11,1272893353),u=l(u,c,r,o,n[f+7],16,-155497632),o=l(o,u,c,r,n[f+10],23,-1094730640),r=l(r,o,u,c,n[f+13],4,681279174),c=l(c,r,o,u,n[f+0],11,-358537222),u=l(u,c,r,o,n[f+3],16,-722521979),o=l(o,u,c,r,n[f+6],23,76029189),r=l(r,o,u,c,n[f+9],4,-640364487),c=l(c,r,o,u,n[f+12],11,-421815835),u=l(u,c,r,o,n[f+15],16,530742520),o=l(o,u,c,r,n[f+2],23,-995338651),r=g(r,o,u,c,n[f+0],6,-198630844),c=g(c,r,o,u,n[f+7],10,1126891415),u=g(u,c,r,o,n[f+14],15,-1416354905),o=g(o,u,c,r,n[f+5],21,-57434055),r=g(r,o,u,c,n[f+12],6,1700485571),c=g(c,r,o,u,n[f+3],10,-1894986606),u=g(u,c,r,o,n[f+10],15,-1051523),o=g(o,u,c,r,n[f+1],21,-2054922799),r=g(r,o,u,c,n[f+8],6,1873313359),c=g(c,r,o,u,n[f+15],10,-30611744),u=g(u,c,r,o,n[f+6],15,-1560198380),o=g(o,u,c,r,n[f+13],21,1309151649),r=g(r,o,u,c,n[f+4],6,-145523070),c=g(c,r,o,u,n[f+11],10,-1120210379),u=g(u,c,r,o,n[f+2],15,718787259),o=g(o,u,c,r,n[f+9],21,-343485551),r=e(r,t),o=e(o,s),u=e(u,i),c=e(c,p)}return[r,o,u,c]}function x(r,e=n.Hex){const s=e||n.Base64,i=p(o(r),r.length*t);switch(s){case n.Raw:return i;case n.Hex:return c(i);case n.String:return u(i);case n.Base64:return f(i)}}


/***/ }),

/***/ 23031:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "addAggregateFields": () => (/* binding */ X),
  "createMatcherSchema": () => (/* binding */ _),
  "createSchema": () => (/* binding */ B),
  "createSymbolSchema": () => (/* binding */ z),
  "createSymbolSchemaOptions": () => (/* binding */ I)
});

// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/ClassBreaksRenderer.js
var ClassBreaksRenderer = __webpack_require__(86004);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/DictionaryRenderer.js
var DictionaryRenderer = __webpack_require__(45510);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/DotDensityRenderer.js + 2 modules
var DotDensityRenderer = __webpack_require__(66908);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/HeatmapRenderer.js + 1 modules
var HeatmapRenderer = __webpack_require__(2802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/Renderer.js
var Renderer = __webpack_require__(22836);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/SimpleRenderer.js
var SimpleRenderer = __webpack_require__(50172);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/UniqueValueRenderer.js
var UniqueValueRenderer = __webpack_require__(25634);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/support/jsonUtils.js
var jsonUtils = __webpack_require__(72506);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var core_Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/screenUtils.js
var screenUtils = __webpack_require__(95550);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/symbols/support/jsonUtils.js + 1 modules
var support_jsonUtils = __webpack_require__(47308);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/enums.js
var enums = __webpack_require__(38716);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/Utils.js + 1 modules
var Utils = __webpack_require__(15875);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/materialKey/MaterialKey.js
var MaterialKey = __webpack_require__(89106);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/visualVariablesUtils.js
var visualVariablesUtils = __webpack_require__(41657);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/webgl/util/vvFlagUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
function vvFlagUtils_e(e){if(!e)return enums/* WGLVVFlag.NONE */.X.NONE;let r=0;for(const i of e)if("size"===i.type){const t=(0,visualVariablesUtils/* getTypeOfSizeVisualVariable */.a)(i);r|=t,"outline"===i.target&&(r|=t<<4)}else"color"===i.type?r|=enums/* WGLVVFlag.COLOR */.X.COLOR:"opacity"===i.type?r|=enums/* WGLVVFlag.OPACITY */.X.OPACITY:"rotation"===i.type&&(r|=enums/* WGLVVFlag.ROTATION */.X.ROTATION);return r}

// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/support/pixelBuffering.js
var pixelBuffering = __webpack_require__(37475);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/support/rendererUtils.js
var rendererUtils = __webpack_require__(54680);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js + 1 modules
var clusterUtils = __webpack_require__(6377);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/util.js
var util = __webpack_require__(67437);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/features/schemaUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const v=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.features.schemaUtils"),w="ValidationError",S={esriGeometryPoint:["above-right","above-center","above-left","center-center","center-left","center-right","below-center","below-left","below-right"],esriGeometryPolygon:["always-horizontal"],esriGeometryPolyline:["center-along"],esriGeometryMultipoint:null};function F(e){return (0,MaterialKey/* hydrateMaterialKey */.hF)(e)}function V(e){return e}function E(e){if("line-marker"===e.type){var t;return{type:"line-marker",color:null==(t=e.color)?void 0:t.toJSON(),placement:e.placement,style:e.style}}return (0,support_jsonUtils/* fromJSON */.i)(e.toJSON()).toJSON()}function I(e){let t=0,r=0,i=!1,n=!0,s=!0;if((0,maybe/* isSome */.pC)(e)&&(r=(0,pixelBuffering/* getPtMaxVVSize */.J)(e),"visualVariables"in e&&(t=vvFlagUtils_e(e.visualVariables||[]),i="dot-density"===e.type),!i)){const t=e.getSymbols();"backgroundFillSymbol"in e&&e.backgroundFillSymbol&&t.push(e.backgroundFillSymbol);for(const e of t)if("cim"===e.type&&(n=!1),"simple-fill"===e.type||"picture-fill"===e.type){const t=e.outline;t&&"none"!==t.style&&"solid"!==t.style&&(s=!1);const r=t&&"none"!==t.style&&"solid"!==t.style,i="simple-fill"===e.type&&"none"!==e.style&&"solid"!==e.style;("picture-fill"===e.type||i||r)&&(n=!1)}}return i&&(s=!1),{vvFlags:t,maxVVSize:r,supportsOutlineFills:s,stride:{fill:i?"dot-density":n?"simple":"default"}}}function z(e,t,r){return j(e,I(t),r)}function j(e,t,r){if(!e)return null;switch(e.type){case"simple-fill":case"picture-fill":return R(e,t,r);case"simple-marker":case"picture-marker":return N(e,t,r);case"simple-line":return T(e,t,r);case"text":return O(e,t,r);case"label":return M(e,t,r);case"cim":return{type:"cim",rendererKey:t.vvFlags,data:e.data,maxVVSize:t.maxVVSize};case"CIMSymbolReference":return{type:"cim",rendererKey:t.vvFlags,data:e,maxVVSize:t.maxVVSize};case"web-style":return{...E(e),type:"web-style",hash:e.hash(),rendererKey:t.vvFlags,maxVVSize:t.maxVVSize};default:throw new Error(`symbol not supported ${e.type}`)}}function R(e,t,r){const i=t.supportsOutlineFills,n=(0,MaterialKey/* createMaterialKey */.jj)(enums/* WGLGeometryType.FILL */.LW.FILL,{...t,isOutlinedFill:i}),l=r?F(n):n,s=e.clone(),a=s.outline;t.supportsOutlineFills||(s.outline=null);const o={materialKey:l,hash:s.hash(),isOutlinedFill:!!t.supportsOutlineFills,...E(s)};if(t.supportsOutlineFills)return o;const u=[];if(u.push(o),a){const e=(0,MaterialKey/* createMaterialKey */.jj)(enums/* WGLGeometryType.LINE */.LW.LINE,{...t,isOutline:!0}),i={materialKey:r?F(e):e,hash:a.hash(),...E(a)};u.push(i)}return{type:"composite-symbol",layers:u,hash:u.reduce(((e,t)=>t.hash+e),"")}}function T(e,t,r){const i=(0,MaterialKey/* createMaterialKey */.jj)(enums/* WGLGeometryType.LINE */.LW.LINE,t),n=r?F(i):i,l=e.clone(),s=l.marker;l.marker=null;const a=[];if(a.push({materialKey:n,hash:l.hash(),...E(l)}),s){var o;const e=(0,MaterialKey/* createMaterialKey */.jj)(enums/* WGLGeometryType.MARKER */.LW.MARKER,t),i=r?F(e):e;s.color=null!=(o=s.color)?o:l.color,a.push({materialKey:i,hash:s.hash(),lineWidth:l.width,...E(s)})}return{type:"composite-symbol",layers:a,hash:a.reduce(((e,t)=>t.hash+e),"")}}function N(e,t,r){const i=(0,MaterialKey/* createMaterialKey */.jj)(enums/* WGLGeometryType.MARKER */.LW.MARKER,t),n=r?F(i):i,l=E(e);return{materialKey:n,hash:e.hash(),...l,angle:e.angle,maxVVSize:t.maxVVSize}}function O(e,t,r){const i=(0,MaterialKey/* createMaterialKey */.jj)(enums/* WGLGeometryType.TEXT */.LW.TEXT,t),n=r?F(i):i,l=E(e);return{materialKey:n,hash:e.hash(),...l,angle:e.angle,maxVVSize:t.maxVVSize}}function k(e,r){const i=e.labelPlacement,n=S[r];if(!e.symbol)return v.warn("No ILabelClass symbol specified."),!0;if(!n)return v.error(new core_Error/* default */.Z("mapview-labeling:unsupported-geometry-type",`Unable to create labels for Feature Layer, ${r} is not supported`)),!0;if(!n.some((e=>e===i))){const t=n[0];i&&v.warn(`Found invalid label placement type ${i} for ${r}. Defaulting to ${t}`),e.labelPlacement=t}return!1}function K(e,t){const r=(0,lang/* clone */.d9)(e);return r.some((e=>k(e,t)))?[]:r}function M(e,t,r){const i=e.toJSON(),n=(0,MaterialKey/* createMaterialKey */.jj)(enums/* WGLGeometryType.LABEL */.LW.LABEL,{...t,placement:i.labelPlacement});return{materialKey:r?F(n):n,hash:e.hash(),...i,labelPlacement:i.labelPlacement}}function B(e){return (0,has/* default */.Z)("esri-2d-update-debug")&&console.debug("Created new schema",L(e,!0)),L(e)}function L(e,t=!1){try{var r,i;const n=A(e,t),l={};n.map((t=>P(l,e,t)));return{source:{definitionExpression:e.definitionExpression,fields:e.fields.map((e=>e.toJSON())),gdbVersion:e.gdbVersion,historicMoment:null==(r=e.historicMoment)?void 0:r.getTime(),outFields:e.availableFields,pixelBuffer:e.pixelBuffer,spatialReference:e.spatialReference.toJSON(),timeExtent:null==(i=e.timeExtent)?void 0:i.toJSON(),customParameters:e.customParameters},attributes:{fields:{},indexCount:0},processors:n,targets:l}}catch(n){if(n.fieldName===w)return v.error(n),null;throw n}}function P(e,r,i){switch(i.target){case"feature":return void U(e,C(r),i);case"aggregate":{if(!("featureReduction"in r))return;const n=r.featureReduction;if("selection"===n.type)throw new core_Error/* default */.Z(w,"Mapview does not support `selection` reduction type",n);return U(e,C(r),i),void D(e,n,i)}}}function J(e,t){for(const r in t){const i=t[r];if(i.target!==e.name)continue;const n=e.attributes[r];n?(n.context.mesh=n.context.mesh||i.context.mesh,n.context.storage=n.context.storage||i.context.storage):e.attributes[r]=i}return e}function C(e){var t,r,i,n,l;return[null!=(t=null==(r=(0,maybe/* unwrap */.Wg)(e.filter))?void 0:r.toJSON())?t:null,null!=(i=null==(n=(0,maybe/* unwrap */.Wg)(null==(l=(0,maybe/* unwrap */.Wg)(e.featureEffect))?void 0:l.filter))?void 0:n.toJSON())?i:null]}function U(e,t,r){return e.feature||(e.feature={name:"feature",input:"source",filters:t,attributes:{}}),J(e.feature,r.attributes.fields),e}function D(e,t,r){return e.aggregate||(e.aggregate={name:"aggregate",input:"feature",filters:null,attributes:{},params:{clusterRadius:(0,screenUtils/* pt2px */.F2)(t.clusterRadius/2),clusterPixelBuffer:64*Math.ceil((0,screenUtils/* pt2px */.F2)(t.clusterMaxSize)/64),fields:r.aggregateFields}}),J(e.aggregate,r.attributes.fields),e}function $(e,t){return t.field?q(e,{...t,type:"field",field:t.field}):t.valueExpression?q(e,{...t,type:"expression",valueExpression:t.valueExpression}):{field:null,fieldIndex:null}}function q(e,t){switch(t.type){case"expression":{const r=V(t.valueExpression);if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i}}return{fieldIndex:e.fields[r].fieldIndex}}case"label-expression":{const r=V(JSON.stringify(t.label));if(!e.fields[r]){const i=e.indexCount++;e.fields[r]={...t,name:r,fieldIndex:i}}return{fieldIndex:e.fields[r].fieldIndex}}case"field":{const r=t.field;return"aggregate"===t.target&&e.fields[r]||(e.fields[r]={...t,name:r}),{field:r}}case"statistic":return e.fields[t.name]={...t},{field:t.name}}}function A(e,t=!1){const r=new Array;let i=0;return r.push(H(e,i++,t)),r}function G(e,t,r,i,n,l=!1){const s=q(t,{type:"label-expression",target:i,context:{mesh:!0},resultType:"string",label:{labelExpression:r.labelExpression,labelExpressionInfo:r.labelExpressionInfo?{expression:r.labelExpressionInfo.expression}:null,symbol:!!r.symbol,where:r.where}}),{fieldIndex:a}=s;return{...z(r,e,l),fieldIndex:a,target:i,index:n}}function H(r,i,n=!1){const s={indexCount:0,fields:{}},a="featureReduction"in r&&r.featureReduction,o=a?"aggregate":"feature";if("sublayers"in r){const e={type:"subtype",subtypeField:r.subtypeField,renderers:{},stride:{fill:"default"}},i={type:"subtype",mapping:{},target:"feature"},a={type:"subtype",classes:{}},u={type:"symbol",target:"feature",aggregateFields:[],attributes:s,storage:i,mesh:{matcher:e,aggregateMatcher:null,labels:a,sortKey:null}},d=new Set;let f=0;for(const{renderer:c,subtypeCode:p,labelingInfo:m,labelsVisible:y}of r.sublayers){const r=_(s,o,c,n),u=Q(s,o,c),g=y&&m;if("visualVariables"in c&&c.visualVariables&&c.visualVariables.length)throw new core_Error/* default */.Z(w,"Visual variables are currently not supported for subtype layers");if("dictionary"===r.type)throw new core_Error/* default */.Z(w,"Dictionary renderer is not supported in subtype layers");if("subtype"===r.type)throw new core_Error/* default */.Z(w,"Nested subtype renderers is not supported");if((0,maybe/* isSome */.pC)(u)&&"subtype"===u.type)throw new core_Error/* default */.Z(w,"Nested subtype storage is not supported");if((0,maybe/* isSome */.pC)(u)&&"dot-density"===u.type)throw new core_Error/* default */.Z(w,"Dot density attributes are not supported in subtype layers");if(d.has(p))throw new core_Error/* default */.Z(w,"Subtype codes for sublayers must be unique");d.add(p),e.renderers[p]=r,i.mapping[p]=u,g&&(a.classes[p]=g.map((e=>G(c,s,e,"feature",f++,n))))}return u}if("heatmap"===r.renderer.type){const{blurRadius:e,fieldOffset:t,field:i}=r.renderer;return{type:"heatmap",aggregateFields:[],attributes:s,target:o,storage:null,mesh:{blurRadius:e,fieldOffset:t,field:$(s,{target:o,field:i,resultType:"numeric"}).field}}}{const i=[],l="aggregate"===o?(0,clusterUtils/* createClusterRenderer */.S1)(i,r.renderer,a,null):r.renderer;X(s,i);const u=_(s,o,l,n);let d=null;const f=Q(s,o,l),c=(0,util/* toJSONGeometryType */.oq)(r.geometryType);let p=r.labelsVisible&&r.labelingInfo||[],m=[];if(a){if("selection"===a.type)throw new core_Error/* default */.Z(w,"Mapview does not support `selection` reduction type",a);if(a.symbol){const t=new SimpleRenderer/* default */.Z({symbol:a.symbol,visualVariables:"visualVariables"in l?l.visualVariables:null});d=_(s,o,t,n)}m=a&&a.labelsVisible&&a.labelingInfo||[]}p=K(p,c),m=K(m,c);let y=0;const g=[...p.map((e=>G(l,s,e,"feature",y++,n))),...m.map((e=>G(l,s,e,"aggregate",y++,n)))],b=W(s,r.orderBy);return{type:"symbol",target:o,attributes:s,aggregateFields:i,storage:f,mesh:{matcher:u,labels:{type:"simple",classes:g},aggregateMatcher:d,sortKey:b}}}}function W(e,r){if((0,maybe/* isNone */.Wi)(r)||!r.length)return null;r.length>1&&v.warn(`Layer rendering currently only supports ordering by 1 orderByInfo, but found ${r.length}. All but the first will be discarded`);const i=r[0],n="ascending"===i.order?"asc":"desc";if(i.field)return{field:i.field,order:n};if(i.valueExpression){return{fieldIndex:q(e,{type:"expression",target:"feature",valueExpression:i.valueExpression,resultType:"numeric"}).fieldIndex,order:n}}return v.error(new core_Error/* default */.Z(w,"Expected to find a field or valueExpression for OrderByInfo",i)),null}function X(e,t){const r={mesh:!0,storage:!0};for(const i of t){const{name:t,outStatistic:n}=i,{statisticType:l,onStatisticField:s}=n;let a=null,o=null,u=null;const d="numeric",f="feature";if("onStatisticValueExpression"in n){o=q(e,{type:"expression",target:f,valueExpression:n.onStatisticValueExpression,resultType:d}).fieldIndex}else if("onStatisticNormalizationField"in n){a=q(e,{type:"field",target:f,field:s,resultType:d}).field,u=n.onStatisticNormalizationField}else{a=q(e,{type:"field",target:f,field:s,resultType:d}).field}q(e,{type:"statistic",target:"aggregate",name:t,context:r,inField:a,inNormalizationField:u,inFieldIndex:o,statisticType:l})}}function Q(e,t,r){switch(r.type){case"dot-density":return Y(e,t,r.attributes);case"simple":case"class-breaks":case"unique-value":case"dictionary":return Z(e,t,r.visualVariables);case"heatmap":return null}}function Y(e,t,r){if(!r||!r.length)return{type:"dot-density",mapping:[],target:t};return{type:"dot-density",mapping:r.map(((r,i)=>{const{field:n,fieldIndex:l}=$(e,{valueExpression:r.valueExpression,field:r.field,resultType:"numeric",target:t});return{binding:i,field:n,fieldIndex:l}})),target:t}}function Z(e,t,r){if(!r||!r.length)return{type:"visual-variable",mapping:[],target:t};const i={storage:!0},n="numeric";return{type:"visual-variable",mapping:(0,rendererUtils/* simplifyVisualVariables */.t)(r).map((r=>{var l;const s=(0,Utils/* getVVType */.nU)(r.type),{field:a,fieldIndex:o}=$(e,{target:t,valueExpression:r.valueExpression,field:r.field,context:i,resultType:n});switch(r.type){case"size":return"$view.scale"===r.valueExpression?null:{type:"size",binding:s,field:a,fieldIndex:o,normalizationField:$(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field,valueRepresentation:null!=(l=r.valueRepresentation)?l:null};case"color":return{type:"color",binding:s,field:a,fieldIndex:o,normalizationField:$(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field};case"opacity":return{type:"opacity",binding:s,field:a,fieldIndex:o,normalizationField:$(e,{target:t,field:r.normalizationField,context:i,resultType:n}).field};case"rotation":return{type:"rotation",binding:s,field:a,fieldIndex:o}}})).filter((e=>e)),target:t}}function _(e,t,r,i=!1){const n=(0,maybe/* unwrapOr */.Pt)(e,{indexCount:0,fields:{}});switch(r.type){case"simple":case"dot-density":return ee(n,r,i);case"class-breaks":return te(n,t,r,i);case"unique-value":return re(n,t,r,i);case"dictionary":return ie(n,r,i)}}function ee(e,t,r=!1){const i=t.getSymbols(),n=i.length?i[0]:null,{stride:l}=I(t);return{type:"simple",symbol:z(n,t,r),stride:l}}function te(e,t,r,i=!1){const n={mesh:!0,use:"renderer.field"},l=r.backgroundFillSymbol,{field:s,fieldIndex:a}=$(e,{target:t,field:r.field,valueExpression:r.valueExpression,resultType:"numeric",context:n}),o=r.normalizationType,u="log"===o?"esriNormalizeByLog":"percent-of-total"===o?"esriNormalizeByPercentOfTotal":"field"===o?"esriNormalizeByField":null,d=I(r),f=r.classBreakInfos.map((e=>({symbol:j(e.symbol,d,i),min:e.minValue,max:e.maxValue}))).sort(((e,t)=>e.min-t.min));return{type:"interval",attributes:e.fields,field:s,fieldIndex:a,backgroundFillSymbol:j(l,d,i),defaultSymbol:j(r.defaultSymbol,d,i),intervals:f,normalizationField:r.normalizationField,normalizationTotal:r.normalizationTotal,normalizationType:u,isMaxInclusive:r.isMaxInclusive,stride:d.stride}}function re(e,r,i,n=!1){const l=[],s=i.backgroundFillSymbol,a={target:r,context:{mesh:!0},resultType:"string"};if(i.field&&"string"!=typeof i.field)throw new core_Error/* default */.Z(w,"Expected renderer.field to be a string",i);const{field:o,fieldIndex:u}=$(e,{...a,field:i.field,valueExpression:i.valueExpression}),d=I(i);for(const t of i.uniqueValueInfos)l.push({value:""+t.value,symbol:j(t.symbol,d,n)});return{type:"map",attributes:e.fields,field:o,fieldIndex:u,field2:$(e,{...a,field:i.field2}).field,field3:$(e,{...a,field:i.field3}).field,fieldDelimiter:i.fieldDelimiter,backgroundFillSymbol:j(s,d),defaultSymbol:j(i.defaultSymbol,d),map:l,stride:d.stride}}function ie(e,t,r=!1){return{type:"dictionary",renderer:t.toJSON(),stride:{fill:"default"}}}


/***/ }),

/***/ 37475:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "G": () => (/* binding */ c),
/* harmony export */   "J": () => (/* binding */ m)
/* harmony export */ });
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(95550);
/* harmony import */ var _symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(95215);
/* harmony import */ var _symbols_cim_Rect_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(10927);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(14266);
/* harmony import */ var _graphics_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(62611);
/* harmony import */ var _support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(81666);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const a={"simple-marker":1,"picture-marker":1,text:0,"simple-line":0,"simple-fill":0,"picture-fill":0,cim:1,"web-style":1},o=.707;function m(t){if(!("visualVariables"in t))return 0;if(!t.hasVisualVariables("size"))return 0;const e=t.getVisualVariablesForType("size");if(!e[0])return 0;const r=e[0];if("outline"===r.target)return 0;if("stops"===r.transformationType)return r.stops.map((t=>t.size)).reduce(g,0);if("clamped-linear"===r.transformationType){let t=-1/0,e=-1/0;return t="number"==typeof r.maxSize?r.maxSize:r.maxSize.stops.map((t=>t.size)).reduce(g,0),e="number"==typeof r.minSize?r.minSize:r.minSize.stops.map((t=>t.size)).reduce(g,0),Math.max(t,e)}return"real-world-size"===r.transformationType?30:void 0}function u(t){return t.type in a}async function c(e,r,i,n,s,a){if(!e||a&&"cluster"===a.type)return 0;if("heatmap"===e.type)return Math.round(3*e.blurRadius);if("dot-density"===e.type)return 0;if("dictionary"===e.type)return"esriGeometryPoint"===r||"esriGeometryMultipoint"===r?100:200;const o=e.getSymbols(),u=m(e),c=[];for(const t of o)c.push(x(t,u,i,r,n,s));const p=await Promise.all(c);return (0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .pt2px */ .F2)(p.reduce(g,0))}const p=[0,0,0,0];function l(t,e){return null==t?e:t}function f(t,e){return null==t.outline?e:l(t.outline.width,e)}const h={sdf:!0,code:99,metrics:_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_1__/* .AVERAGE_GLYPH_MOSAIC_ITEM.metrics */ .eF.metrics,rect:new _symbols_cim_Rect_js__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z(0,0,24,24),page:0,textureBinding:2};function y(t){const e=t.text&&t.text.length;if(!e)return{glyphMosaicItems:[h]};const r=[];for(let i=0;i<e;i++)r.push({...h,code:t.text.charCodeAt(i)});return{glyphMosaicItems:r}}async function d(t,r,i,a,m,u){if("simple-marker"===t.type){const e=Math.max(l(t.size,12),r);return M(t)+e*o}if("picture-marker"===t.type){const e=Math.max(l(t.height,12),r),i=l(t.width,12)*(e/l(t.height,12))/2,n=e/2;return M(t)+Math.sqrt(i*i+n*n)}if("text"===t.type){const e=y(t);(0,_graphics_graphicsUtils_js__WEBPACK_IMPORTED_MODULE_2__/* .getTextSymbolSize */ .Q2)(p,t.toJSON(),e);const r=Math.abs(p[0]),i=Math.abs(p[1]),s=p[2],a=p[3];return Math.max(r,i)+Math.max(s,a)}if("simple-line"===t.type){const e=t,i=Math.max(l(e.width,.75),r)/2;return e.marker?Math.max(6*e.width,2*r):i}if("simple-fill"===t.type||"picture-fill"===t.type)return Math.max(f(t,0),r)/2;if("cim"===t.type){const n={geometryType:a,fields:m,spatialReference:u},o={type:"cim",rendererKey:0,data:t.data,maxVVSize:r};await (0,_support_cimSymbolUtils_js__WEBPACK_IMPORTED_MODULE_3__/* .expandSymbol */ .B3)(o,n,i);const c=_symbols_cim_CIMSymbolHelper_js__WEBPACK_IMPORTED_MODULE_0__/* .CIMSymbolHelper.getEnvelope */ .B$.getEnvelope(t.data,i);return c?Math.sqrt(c.width*c.width+c.height*c.height):0}return"web-style"===t.type?d(await t.fetchCIMSymbol(),r,i,a,m,u):0}async function x(t,e,r,i,n,s){return u(t)?Math.min(await d(t,e,r,i,n,s),75):0}function M(t){const e=l(t.xoffset,0),r=l(t.yoffset,0);return Math.sqrt(e*e+r*r)}function g(t,e){return Math.max(t,e)}


/***/ }),

/***/ 54680:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ s),
/* harmony export */   "t": () => (/* binding */ a)
/* harmony export */ });
/* harmony import */ var _core_Logger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(13802);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(95550);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=8,t=o-2,r=_core_Logger_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"].getLogger */ .Z.getLogger("esri.renderers.visualVariables.support.utils"),s=e=>{if(!("visualVariables"in e)||!e.visualVariables||!e.visualVariables.length)return e;const l=e.clone(),o=l.visualVariables.map((e=>n(e)?i(e):e));return l.visualVariables=o,l};function a(e){return e.map((e=>n(e)?i(e.clone()):e))}function n(e){return("size"===e.type||"color"===e.type||"opacity"===e.type)&&null!=e.stops}function i(e){return e.stops=b(e.type,e.stops),e}function u(e,l,o){return(1-o)*e+o*l}function c(e,o){const[r,...s]=o,a=s.pop(),n=s[0].value,i=s[s.length-1].value,c=(i-n)/t,p=[];for(let t=n;t<i;t+=c){let r=0;for(;t>=s[r].value;)r++;const a=s[r],n=o[r-1],i=t-n.value,c=a.value===n.value?1:i/(a.value-n.value);if("color"===e){const e=s[r],l=o[r-1],a=e.color.clone();a.r=u(l.color.r,a.r,c),a.g=u(l.color.g,a.g,c),a.b=u(l.color.b,a.b,c),a.a=u(l.color.a,a.a,c),p.push({value:t,color:a,label:e.label})}else if("size"===e){const e=s[r],a=o[r-1],n=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toPt */ .t_)(e.size),i=u((0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_1__/* .toPt */ .t_)(a.size),n,c);p.push({value:t,size:i,label:e.label})}else{const e=s[r],l=u(o[r-1].opacity,e.opacity,c);p.push({value:t,opacity:l,label:e.label})}}return[r,...p,a]}function p(e){const[l,...o]=e,r=o.pop();for(;o.length>t;){let e=0,l=0;for(let t=1;t<o.length;t++){const r=o[t-1],s=o[t],a=Math.abs(s.value-r.value);a>l&&(l=a,e=t)}o.splice(e,1)}return[l,...o,r]}function b(e,l){return l.length<=o?l:(r.warn(`Found ${l.length} Visual Variable stops, but MapView only supports ${o}. Displayed stops will be simplified.`),l.length>2*o?c(e,l):p(l))}


/***/ }),

/***/ 62611:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y1": () => (/* binding */ u),
/* harmony export */   "I_": () => (/* binding */ c),
/* harmony export */   "Q2": () => (/* binding */ x),
/* harmony export */   "eT": () => (/* binding */ y),
/* harmony export */   "Zu": () => (/* binding */ g),
/* harmony export */   "yA": () => (/* binding */ h),
/* harmony export */   "ab": () => (/* binding */ p),
/* harmony export */   "XA": () => (/* binding */ d)
/* harmony export */ });
/* harmony import */ var _core_BidiText_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(89060);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(61681);
/* harmony import */ var _core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(95550);
/* harmony import */ var _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(89542);
/* harmony import */ var _geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(24568);
/* harmony import */ var _geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(25266);
/* harmony import */ var _engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(31090);
/* harmony import */ var _engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(14266);
/* harmony import */ var _engine_webgl_mesh_templates_shapingUtils_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(83264);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const c=512,u=50;function g(e,t){if(!t.isWrappable)return null;const[n,i]=(0,_geometry_support_normalizeUtilsCommon_js__WEBPACK_IMPORTED_MODULE_3__/* .getSpatialReferenceMinMaxX */ .uS)(t);return e[2]>i?[(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .Ue)([e[0],e[1],i,e[3]]),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .Ue)([n,e[1],n+e[2]-i,e[3]])]:e[0]<n?[(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .Ue)([n,e[1],e[2],e[3]]),(0,_geometry_support_aaBoundingRect_js__WEBPACK_IMPORTED_MODULE_2__/* .create */ .Ue)([i-(n-e[0]),e[1],i,e[3]])]:null}function p(e){return"text"===e||"esriTS"===e}function h(e){return"simple-marker"===e||"picture-marker"===e||"esriSMS"===e||"esriPMS"===e}function y(e){switch((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_7__/* .unwrap */ .Wg)(e.geometry).type){case"point":case"multipoint":return 0;case"polyline":return 1;case"polygon":case"extent":return 2}return 0}function x(t,i,r){var o,c,u;if(!r||0===r.glyphMosaicItems.length)return t;const g=(0,_core_BidiText_js__WEBPACK_IMPORTED_MODULE_0__/* .bidiText */ .E)(i.text)[1],p=r.glyphMosaicItems,h=(0,_engine_webgl_mesh_templates_shapingUtils_js__WEBPACK_IMPORTED_MODULE_6__/* .shapeGlyphs */ .Nr)(p,g,{scale:(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .pt2px */ .F2)(i.font.size)/_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_5__/* .GLYPH_SIZE */ .Ex,angle:null!=(o=i.angle)?o:0,xOffset:null!=(c=i.xoffset)?c:0,yOffset:null!=(u=i.yoffset)?u:0,hAlign:(0,_engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getXAnchorDirection */ .kH)(i.horizontalAlignment||"center"),vAlign:(0,_engine_webgl_alignmentUtils_js__WEBPACK_IMPORTED_MODULE_4__/* .getYAnchorDirection */ .b7)(i.verticalAlignment||"baseline"),maxLineWidth:Math.max(32,Math.min(i.lineWidth||512,512)),lineHeight:_engine_webgl_definitions_js__WEBPACK_IMPORTED_MODULE_5__/* .MAGIC_LABEL_LINE_HEIGHT */ .xm*Math.max(.25,Math.min(i.lineHeight||1,4)),decoration:i.font.decoration||"none",isCIM:!1}).bounds;return t[0]=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .pt2px */ .F2)(h.x-h.halfWidth),t[1]=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .pt2px */ .F2)(h.y-h.halfHeight),t[2]=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .pt2px */ .F2)(h.width),t[3]=(0,_core_screenUtils_js__WEBPACK_IMPORTED_MODULE_8__/* .pt2px */ .F2)(h.height),t}function d(e){if(!e)return null;const{xmin:t,ymin:n,xmax:r,ymax:o,spatialReference:s}=e;return new _geometry_Polygon_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({rings:[[[t,n],[t,o],[r,o],[r,n],[t,n]]],spatialReference:s})}


/***/ }),

/***/ 6377:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "aV": () => (/* binding */ f),
  "S1": () => (/* binding */ c),
  "os": () => (/* binding */ d),
  "yR": () => (/* binding */ m)
});

// UNUSED EXPORTS: hasClusterCountVV

// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Error.js
var Error = __webpack_require__(70375);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/has.js
var has = __webpack_require__(39994);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/Logger.js
var Logger = __webpack_require__(13802);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/maybe.js
var maybe = __webpack_require__(61681);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/MD5.js
var MD5 = __webpack_require__(86630);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/visualVariables/SizeVariable.js + 1 modules
var SizeVariable = __webpack_require__(82638);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/visualVariables/support/SizeStop.js
var SizeStop = __webpack_require__(98872);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/chunks/tslib.es6.js
var tslib_es6 = __webpack_require__(36663);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/lang.js
var lang = __webpack_require__(67134);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/property.js
var property = __webpack_require__(81977);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/ensureType.js
var ensureType = __webpack_require__(7283);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/subclass.js
var subclass = __webpack_require__(40266);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/core/accessorSupport/decorators/writer.js
var writer = __webpack_require__(39835);
// EXTERNAL MODULE: ./node_modules/@arcgis/core/renderers/visualVariables/support/sizeVariableUtils.js
var sizeVariableUtils = __webpack_require__(67272);
;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/engine/LevelDependentSizeVariable.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
var l;let n=l=class extends SizeVariable/* default */.Z{writeLevels(e,s,i){for(const t in e){const e=this.levels[t];return void(s.stops=e)}}clone(){return new l({axis:this.axis,field:this.field,valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,maxDataValue:this.maxDataValue,maxSize:(0,sizeVariableUtils/* isSizeVariable */.iY)(this.maxSize)?this.maxSize.clone():this.maxSize,minDataValue:this.minDataValue,minSize:(0,sizeVariableUtils/* isSizeVariable */.iY)(this.minSize)?this.minSize.clone():this.minSize,normalizationField:this.normalizationField,stops:this.stops&&this.stops.map((e=>e.clone())),target:this.target,useSymbolValue:this.useSymbolValue,valueRepresentation:this.valueRepresentation,valueUnit:this.valueUnit,legendOptions:this.legendOptions&&this.legendOptions.clone(),levels:(0,lang/* clone */.d9)(this.levels)})}};(0,tslib_es6._)([(0,property/* property */.Cb)()],n.prototype,"levels",void 0),(0,tslib_es6._)([(0,writer/* writer */.c)("levels")],n.prototype,"writeLevels",null),n=l=(0,tslib_es6._)([(0,subclass/* subclass */.j)("esri.views.2d.engine.LevelDependentSizeVariable")],n);

;// CONCATENATED MODULE: ./node_modules/@arcgis/core/views/2d/layers/support/clusterUtils.js
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=Logger/* default.getLogger */.Z.getLogger("esri.views.2d.layers.support.clusterUtils");has/* default.add */.Z.add("esri-cluster-arcade-enabled",!0);const u=(0,has/* default */.Z)("esri-cluster-arcade-enabled"),c=(e,i,t,s)=>{const a=i.clone();if(!m(a))return a;if(t.fields)for(const r of t.fields)x(e,r);if("visualVariables"in a){const i=(a.visualVariables||[]).filter((e=>"$view.scale"!==e.valueExpression)),n=d(i);i.forEach((i=>{"rotation"===i.type?i.field?i.field=y(e,i.field,"avg_angle"):i.valueExpression&&(i.field=S(e,i.valueExpression,"avg_angle"),i.valueExpression=null):i.normalizationField?(i.field=y(e,i.field,"norm",i.normalizationField),i.normalizationField=null):i.field?i.field=y(e,i.field,"avg"):(i.field=S(e,i.valueExpression,"avg"),i.valueExpression=null)})),(0,maybe/* isNone */.Wi)(n)&&!p(i)&&(i.push(f(t,s)),a.dynamicClusterSize=!0),a.visualVariables=i}switch(a.type){case"simple":break;case"unique-value":a.field?a.field=y(e,a.field,"mode"):a.valueExpression&&(a.field=S(e,a.valueExpression,"mode"),a.valueExpression=null);break;case"class-breaks":a.normalizationField?(a.field=y(e,a.field,"norm",a.normalizationField),a.normalizationField=null):a.field?a.field=y(e,a.field,"avg"):(a.field=S(e,a.valueExpression,"avg"),a.valueExpression=null)}return a},d=e=>{for(const i of e)if("size"===i.type)return i;return null},p=e=>{for(const i of e)if("cluster_count"===i.field)return!0;return!1},f=(e,i)=>{const t=[new SizeStop/* default */.Z({value:0,size:0}),new SizeStop/* default */.Z({value:1})];if((0,maybe/* isNone */.Wi)(i))return new SizeVariable/* default */.Z({field:"cluster_count",stops:[...t,new SizeStop/* default */.Z({value:2,size:0})]});const s=Object.keys(i).reduce(((r,s)=>({...r,[s]:[...t,new SizeStop/* default */.Z({value:Math.max(2,i[s].minValue),size:e.clusterMinSize}),new SizeStop/* default */.Z({value:Math.max(3,i[s].maxValue),size:e.clusterMaxSize})]})),{});return new n({field:"cluster_count",levels:s})},m=i=>{const t=t=>o.error(new Error/* default */.Z("Unsupported-renderer",t,{renderer:i}));if("unique-value"===i.type){if(i.field2||i.field3)return t("FeatureReductionCluster does not support multi-field UniqueValueRenderers"),!1}else if("class-breaks"===i.type){if(i.normalizationField){const e=i.normalizationType;if("field"!==e)return t(`FeatureReductionCluster does not support a normalizationType of ${e}`),!1}}else if("simple"!==i.type)return t(`FeatureReductionCluster does not support renderers of type ${i.type}`),!1;if(!u){if("valueExpression"in i&&i.valueExpression)return t("FeatureReductionCluster does not currently support renderer.valueExpression. Support will be added in a future release"),!1;if(("visualVariables"in i&&i.visualVariables||[]).some((e=>!(!("valueExpression"in e)||!e.valueExpression))))return t("FeatureReductionCluster does not currently support visualVariables with a valueExpression. Support will be added in a future release"),!1}return!0};function v(e,i,t){switch(e){case"avg":case"avg_angle":return`cluster_avg_${i}`;case"mode":return`cluster_type_${i}`;case"norm":{const e=t,r="field",a=i.toLowerCase()+",norm:"+r+","+e.toLowerCase();return"cluster_avg_"+(0,MD5/* createMD5Hash */.F)(a)}}}function x(i,t){const{name:r,outStatistic:a}=t,{onStatisticField:n,onStatisticValueExpression:l,statisticType:u}=a;if(l){const e=(0,MD5/* createMD5Hash */.F)(l.toLowerCase());i.push({name:r,outStatistic:{onStatisticField:e,onStatisticValueExpression:l,statisticType:u}})}else n?i.push({name:r,outStatistic:{onStatisticField:n,statisticType:u}}):o.error(new Error/* default */.Z("mapview-unsupported-field","Unable to handle field",{field:t}))}function S(e,i,t){const r=(0,MD5/* createMD5Hash */.F)(i),a="mode"===t?`cluster_type_${r}`:`cluster_avg_${r}`;return e.some((e=>e.name===a))||e.push({name:a,outStatistic:{onStatisticField:r,onStatisticValueExpression:i,statisticType:t}}),a}function y(e,i,t,r){if("cluster_count"===i||e.some((e=>e.name===i)))return i;const s=v(t,i,r);return e.some((e=>e.name===s))||("norm"===t?e.push({name:s,outStatistic:{onStatisticField:i,onStatisticNormalizationField:r,statisticType:t}}):e.push({name:s,outStatistic:{onStatisticField:i,statisticType:t}})),s}


/***/ }),

/***/ 67437:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JV": () => (/* binding */ r),
/* harmony export */   "oq": () => (/* binding */ e)
/* harmony export */ });
/* unused harmony export analyzeRings */
/* harmony import */ var _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(25709);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
const o=new _core_jsonMap_js__WEBPACK_IMPORTED_MODULE_0__/* .JSONMap */ .Xn({esriGeometryPoint:"point",esriGeometryMultipoint:"multipoint",esriGeometryPolyline:"polyline",esriGeometryPolygon:"polygon",esriGeometryMultiPatch:"multipatch",mesh:"mesh"});function e(t){return o.toJSON(t)}function n(t,o,e){const n=[],r=[];let l=0,i=0;for(const s of t){const t=i;let u=s[0][0],c=s[0][1];n[i++]=u,n[i++]=c;let p=0;for(let o=1;o<s.length;++o){const t=u,e=c;u=s[o][0],c=s[o][1],p+=c*t-u*e,n[i++]=u,n[i++]=c}o(p/2),p>0?(t-l>0&&(e(l,t,n,r),l=t),r.length=0):p<0&&t-l>0?r.push(.5*(t-l)):i=t}i-l>0&&e(l,i,n,r)}function r(t){const{bandCount:o,attributeTable:e,colormap:n,pixelType:r}=t.rasterInfo;return 1===o&&(null!=e||null!=n||"u8"===r||"s8"===r)}


/***/ })

};
;
//# sourceMappingURL=3031.render-page.js.map