// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import{isPrimitive as r}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import{primitives as s}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string-array@v0.0.8-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";function i(i,n){var o,d,m;if("object"!=typeof i||null===i)throw new TypeError(e("0lC3X",i));if(o={},r(n))return t(i,n)&&(o[n]=i[n]),o;if(s(n)){for(m=0;m<n.length;m++)d=n[m],t(i,d)&&(o[d]=i[d]);return o}throw new TypeError(e("0lCCV",n))}export{i as default};
//# sourceMappingURL=index.mjs.map