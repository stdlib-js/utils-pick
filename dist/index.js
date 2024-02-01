"use strict";var o=function(i,r){return function(){return r||i((r={exports:{}}).exports,r),r.exports}};var v=o(function(l,s){
var f=require('@stdlib/assert-is-string/dist').isPrimitive,m=require('@stdlib/assert-is-string-array/dist').primitives,n=require('@stdlib/assert-has-own-property/dist'),u=require('@stdlib/error-tools-fmtprodmsg/dist');function g(i,r){var e,t,a;if(typeof i!="object"||i===null)throw new TypeError(u('1Wh3L',i));if(e={},f(r))return n(i,r)&&(e[r]=i[r]),e;if(m(r)){for(a=0;a<r.length;a++)t=r[a],n(i,t)&&(e[t]=i[t]);return e}throw new TypeError(u('1WhBg',r))}s.exports=g
});var p=v();module.exports=p;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
