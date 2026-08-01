"use strict";var u=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var v=u(function(k,o){
function L(e,r,a,i,s,h){var t,n;if(e<=0)return i;for(t=h,n=0;n<e;n++)i[t]<r&&(i[t]=a),t+=s;return i}o.exports=L
});var q=u(function(w,l){
var T=require('@stdlib/strided-base-stride2offset/dist'),j=v();function m(e,r,a,i,s){return j(e,r,a,i,s,T(e,s))}l.exports=m
});var p=u(function(z,c){
var x=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=q(),R=v();x(d,"ndarray",R);c.exports=d
});var _=require("path").join,E=require('@stdlib/utils-try-require/dist'),O=require('@stdlib/assert-is-error/dist'),b=p(),f,y=E(_(__dirname,"./native.js"));O(y)?f=b:f=y;module.exports=f;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
