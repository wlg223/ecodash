"use strict";
exports.id = 216;
exports.ids = [216];
exports.modules = {

/***/ 40216:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "loadGLTFMesh": () => (/* binding */ K)
/* harmony export */ });
/* harmony import */ var _Color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30936);
/* harmony import */ var _request_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(66341);
/* harmony import */ var _core_MapUtils_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(86114);
/* harmony import */ var _core_maybe_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(61681);
/* harmony import */ var _chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1662);
/* harmony import */ var _chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34344);
/* harmony import */ var _chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(8909);
/* harmony import */ var _chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1983);
/* harmony import */ var _MeshComponent_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(77727);
/* harmony import */ var _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(1680);
/* harmony import */ var _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(33206);
/* harmony import */ var _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(124);
/* harmony import */ var _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(81936);
/* harmony import */ var _chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86717);
/* harmony import */ var _chunks_vec42_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(56999);
/* harmony import */ var _buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(79);
/* harmony import */ var _georeference_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(91780);
/* harmony import */ var _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(91420);
/* harmony import */ var _views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(20016);
/* harmony import */ var _views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(1731);
/* harmony import */ var _views_3d_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(58196);
/* harmony import */ var _views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(14634);
/* harmony import */ var _chunks_vec33_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(14789);
/* harmony import */ var _chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(32101);
/* harmony import */ var _chunks_vec22_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(385);
/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
async function K(t,e,r){const o=new _views_3d_glTF_DefaultLoadingContext_js__WEBPACK_IMPORTED_MODULE_15__/* .DefaultLoadingContext */ .C(P(r)),n=(await (0,_views_3d_glTF_loader_js__WEBPACK_IMPORTED_MODULE_16__/* .load */ .z)(o,e,r,!0)).model,i=n.lods.shift(),a=new Map,c=new Map;n.textures.forEach(((t,e)=>a.set(e,W(t)))),n.materials.forEach(((t,e)=>c.set(e,X(t,a))));const l=J(i);for(const s of l.parts)Y(l,s,c);const{position:u,normal:f,tangent:m,color:p,texCoord0:g}=l.vertexAttributes,x={position:u.typedBuffer,normal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(f)?f.typedBuffer:null,tangent:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(m)?m.typedBuffer:null,uv:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(g)?g.typedBuffer:null,color:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(p)?p.typedBuffer:null},h=(0,_georeference_js__WEBPACK_IMPORTED_MODULE_14__/* .georeferenceByTransform */ .w1)(x,t,r);return{transform:h.transform,components:l.components,spatialReference:t.spatialReference,vertexAttributes:new _MeshVertexAttributes_js__WEBPACK_IMPORTED_MODULE_9__/* ["default"] */ .ZP({position:h.vertexAttributes.position,normal:h.vertexAttributes.normal,tangent:h.vertexAttributes.tangent,color:x.color,uv:x.uv})}}function P(t){return null!=t&&t.resolveFile?{busy:!1,request:async(r,o,n)=>{const i=t.resolveFile(r),a="image"===o?"image":"binary"===o?"array-buffer":"json";return(await (0,_request_js__WEBPACK_IMPORTED_MODULE_1__["default"])(i,{responseType:a,signal:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(n)?n.signal:null})).data}}:null}function Q(t,e){if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isNone */ .Wi)(t))return"-";const o=t.typedBuffer;return`${(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_23__/* .getOrCreateMapValue */ .s1)(e,o.buffer,(()=>e.size))}/${o.byteOffset}/${o.byteLength}`}function H(t){return (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(t)?t.toString():"-"}function J(t){let e=0;const o={color:!1,tangent:!1,normal:!1,texCoord0:!1},n=new Map,s=new Map,i=[];for(const a of t.parts){const{attributes:{position:t,normal:c,color:l,tangent:u,texCoord0:f}}=a,m=`\n      ${Q(t,n)}/\n      ${Q(c,n)}/\n      ${Q(l,n)}/\n      ${Q(u,n)}/\n      ${Q(f,n)}/\n      ${H(a.transform)}\n    `;let p=!1;const d=(0,_core_MapUtils_js__WEBPACK_IMPORTED_MODULE_23__/* .getOrCreateMapValue */ .s1)(s,m,(()=>(p=!0,{start:e,length:t.count})));p&&(e+=t.count),c&&(o.normal=!0),l&&(o.color=!0),u&&(o.tangent=!0),f&&(o.texCoord0=!0),i.push({gltf:a,writeVertices:p,region:d})}return{vertexAttributes:{position:(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3f64 */ .fP,e),normal:o.normal?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3f */ .ct,e):null,tangent:o.tangent?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4f */ .ek,e):null,color:o.color?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4u8 */ .mc,e):null,texCoord0:o.texCoord0?(0,_buffer_utils_js__WEBPACK_IMPORTED_MODULE_13__/* .createBuffer */ .gS)(_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec2f */ .Eu,e):null},parts:i,components:[]}}function W(t){return new _MeshTexture_js__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z({data:t.data,wrap:rt(t.parameters.wrap)})}function X(e,r){const s=new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(st(e.color,e.opacity)),i=e.emissiveFactor?new _Color_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z(it(e.emissiveFactor)):null;return new _MeshMaterialMetallicRoughness_js__WEBPACK_IMPORTED_MODULE_7__/* ["default"] */ .Z({color:s,colorTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureColor,(t=>r.get(t)))),normalTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureNormal,(t=>r.get(t)))),emissiveColor:i,emissiveTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureEmissive,(t=>r.get(t)))),occlusionTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureOcclusion,(t=>r.get(t)))),alphaMode:et(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .unwrap */ .Wg)((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .applySome */ .yw)(e.textureMetallicRoughness,(t=>r.get(t))))})}function Y(t,e,r){e.writeVertices&&Z(t,e);const o=e.gltf,n=tt(o.indices||o.attributes.position.count,o.primitiveType),s=e.region.start;if(s)for(let i=0;i<n.length;i++)n[i]+=s;t.components.push(new _MeshComponent_js__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z({faces:n,material:r.get(o.material),trustSourceNormals:!0}))}function Z(t,e){const{position:r,normal:o,tangent:n,color:i,texCoord0:l}=t.vertexAttributes,u=e.region.start,{attributes:f,transform:m}=e.gltf,p=f.position.count;if((0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__.t)(r.slice(u,p),f.position,m),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(f.normal)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(o)){const t=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),m);(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__.a)(o.slice(u,p),f.normal,t)}else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(o)&&(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_19__.f)(o,0,0,1,{dstIndex:u,count:p});if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(f.tangent)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(n)){const t=(0,_chunks_mat3_js__WEBPACK_IMPORTED_MODULE_2__.a)((0,_chunks_mat3f64_js__WEBPACK_IMPORTED_MODULE_3__.c)(),m);(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_12__.t)(n.slice(u,p),f.tangent,t)}else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(n)&&(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__.f)(n,0,0,1,1,{dstIndex:u,count:p});if((0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(f.texCoord0)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(l)?(0,_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_21__.n)(l.slice(u,p),f.texCoord0):(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(l)&&(0,_chunks_vec22_js__WEBPACK_IMPORTED_MODULE_21__.f)(l,0,0,{dstIndex:u,count:p}),(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(f.color)&&(0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(i)){const t=f.color,e=i.slice(u,p);if(4===t.elementCount)t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4f */ .ek?(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_12__.s)(e,t,255):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4u8 */ .mc?(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__.c)(e,t):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec4u16 */ .v6&&(0,_chunks_vec42_js__WEBPACK_IMPORTED_MODULE_12__.a)(e,t,8);else{(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__.f)(e,255,255,255,255);const r=_buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3u8.fromTypedArray */ .ne.fromTypedArray(e.typedBuffer,e.typedBufferStride);t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3f */ .ct?(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__.s)(r,t,255):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3u8 */ .ne?(0,_chunks_vec33_js__WEBPACK_IMPORTED_MODULE_19__.c)(r,t):t instanceof _buffer_BufferView_js__WEBPACK_IMPORTED_MODULE_10__/* .BufferViewVec3u16 */ .mw&&(0,_chunks_vec32_js__WEBPACK_IMPORTED_MODULE_11__.b)(r,t,8)}}else (0,_core_maybe_js__WEBPACK_IMPORTED_MODULE_22__/* .isSome */ .pC)(i)&&(0,_chunks_vec43_js__WEBPACK_IMPORTED_MODULE_20__.f)(i.slice(u,p),255,255,255,255)}function tt(t,e){switch(e){case 4:return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .trianglesToTriangles */ .nh)(t,_views_3d_webgl_engine_lib_geometryDataUtils_js__WEBPACK_IMPORTED_MODULE_18__/* .generateIndexArray */ .DX);case 5:return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .triangleStripToTriangles */ .DA)(t);case 6:return (0,_views_3d_glTF_internal_indexUtils_js__WEBPACK_IMPORTED_MODULE_17__/* .triangleFanToTriangles */ .jX)(t)}}function et(t){switch(t){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function rt(t){return{horizontal:ot(t.s),vertical:ot(t.t)}}function ot(t){switch(t){case 33071:return"clamp";case 33648:return"mirror";case 10497:return"repeat"}}function nt(t){return t**(1/_views_3d_webgl_engine_materials_DefaultMaterial_COLOR_GAMMA_js__WEBPACK_IMPORTED_MODULE_24__/* .COLOR_GAMMA */ .K)*255}function st(t,e){return (0,_chunks_vec4f64_js__WEBPACK_IMPORTED_MODULE_5__.f)(nt(t[0]),nt(t[1]),nt(t[2]),e)}function it(t){return (0,_chunks_vec3f64_js__WEBPACK_IMPORTED_MODULE_4__.f)(nt(t[0]),nt(t[1]),nt(t[2]))}


/***/ })

};
;
//# sourceMappingURL=216.render-page.js.map