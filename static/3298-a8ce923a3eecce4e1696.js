"use strict";(self.webpackChunkenergy_and_water_dashboard=self.webpackChunkenergy_and_water_dashboard||[]).push([[3298],{73298:function(e,a,t){t.r(a),t.d(a,{previewSymbol2D:function(){return y}});var n=t(4942),l=t(30004),r=t(33300),i=t(8792),o=t(86590),s=t(31310),c=t(11209);function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function m(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){(0,n.Z)(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}var p="picture-fill",h=120,d=document.createElement("canvas");function f(e,a){var t=d.getContext("2d"),n=[];return a&&(a.weight&&n.push(a.weight),a.size&&n.push(a.size+"px"),a.family&&n.push(a.family)),t.font=n.join(" "),t.measureText(e).width}function v(e){if(0===e.length)return 0;if(e.length>2){var a=(0,i.Wz)(1),t=parseFloat(e);switch(e.slice(-2)){case"px":return t;case"pt":return t*a;case"in":return 72*t*a;case"pc":return 12*t*a;case"mm":return 2.8346456692913384*t*a;case"cm":return 28.346456692913385*t*a}}return parseFloat(e)}function y(e,a){var t,n,u=null!=(null==a?void 0:a.size)?(0,i.F2)(a.size):null,d=null!=(null==a?void 0:a.maxSize)?(0,i.F2)(a.maxSize):null,y=null!=(null==a?void 0:a.opacity)?a.opacity:null,b=null!=(null==a?void 0:a.rotation)?a.rotation:"angle"in e?e.angle:null,w=(0,o._M)(e),g=(0,o.mx)(e);if(w&&!g){var M="type"in w?null:new l.Z(w);"#ffffff"===(M?M.toHex():null)&&(g={color:"#bdc3c7",width:.75})}var k={shape:null,fill:null,stroke:g,offset:[0,0]};null!=(t=g)&&t.width&&(g.width=Math.min(g.width,80));var O=(null==(n=g)?void 0:n.width)||0,x=null!=u&&(null==(null==a?void 0:a.scale)||(null==a?void 0:a.scale)),j=0,L=0,z=!1;switch(e.type){case"simple-marker":var F=e.style,P=Math.min(null!=u?u:(0,i.F2)(e.size),d||h);switch(j=P,L=P,F){case"circle":k.shape={type:"circle",cx:0,cy:0,r:.5*P},x||(j+=O,L+=O);break;case"cross":k.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[j,.5*L]},{command:"M",values:[.5*j,0]},{command:"L",values:[.5*j,L]}]};break;case"diamond":k.shape={type:"path",path:[{command:"M",values:[0,.5*L]},{command:"L",values:[.5*j,0]},{command:"L",values:[j,.5*L]},{command:"L",values:[.5*j,L]},{command:"Z",values:[]}]},x||(j+=O,L+=O);break;case"square":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,0]},{command:"L",values:[j,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},x||(j+=O,L+=O),b&&(z=!0);break;case"triangle":k.shape={type:"path",path:[{command:"M",values:[.5*j,0]},{command:"L",values:[j,L]},{command:"L",values:[0,L]},{command:"Z",values:[]}]},x||(j+=O,L+=O),b&&(z=!0);break;case"x":k.shape={type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[j,L]},{command:"M",values:[j,0]},{command:"L",values:[0,L]}]},b&&(z=!0);break;case"path":k.shape={type:"path",path:e.path||""},x||(j+=O,L+=O),b&&(z=!0),x=!0}break;case"simple-line":var C=Math.min(null!=u?u:O,d||80),S=C>22?2*C:40;g.width=C,j=S,L=C,k.shape={type:"path",path:[{command:"M",values:[0,L]},{command:"L",values:[j,L]}]};break;case p:case"simple-fill":j=Math.min(null!=u?u:22,d||h)+O,L=j,x=!0,k.shape="object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.isSquareFill?s.JZ.squareFill[0]:s.JZ.fill[0];break;case"picture-marker":var Z=(0,i.F2)(e.width),_=(0,i.F2)(e.height),D=null!=u?u:Math.max(Z,_),E=Z/_;Z=E<=1?Math.ceil(D*E):D,_=E<=1?D:Math.ceil(D/E),j=Math.min(Z,d||h),L=Math.min(_,d||h),k.shape={type:"image",x:-Math.round(j/2),y:-Math.round(L/2),width:j,height:L,src:e.url||""},b&&(z=!0);break;case"text":var q=e,H=q.text||"Aa",J=q.font,T=Math.min(null!=u?u:(0,i.F2)(J.size),d||h),V=f(H,{weight:J.weight,size:T,family:J.family}),A=/[\uE600-\uE6FF]/.test(H);j=A?T:V,L=T;var R=.25*v((J?T:0).toString());A&&(R+=5),k.shape={type:"text",text:H,x:0,y:R,align:"middle",decoration:J&&J.decoration,rotated:q.rotated,kerning:q.kerning},k.font=J&&{size:T,style:J.style,decoration:J.decoration,weight:J.weight,family:J.family}}if(!k.shape)return Promise.reject(new r.Z("symbolPreview: renderPreviewHTML2D","symbol not supported."));var W=w,B=e.color,G=null;return W&&"pattern"===W.type&&B&&e.type!==p?G=(0,o.Od)(W.src,B.toCss(!0)).then((function(e){return W.src=e,k.fill=W,k})):(k.fill=w,G=Promise.resolve(k)),G.then((function(e){var t=[[e]];if("object"==typeof(null==a?void 0:a.symbolConfig)&&null!=a&&a.symbolConfig.applyColorModulation){var n=.6*j;t.unshift([m(m({},e),{},{offset:[-n,0],fill:(0,s.dc)(w,-.3)})]),t.push([m(m({},e),{},{offset:[n,0],fill:(0,s.dc)(w,.3)})]),j+=2*n}return(0,c.w)(t,[j,L],{node:a&&a.node,scale:x,opacity:y,rotation:b,useRotationSize:z,effectView:null==a?void 0:a.effectView})}))}}}]);
//# sourceMappingURL=3298-a8ce923a3eecce4e1696.js.map