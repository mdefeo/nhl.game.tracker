(()=>{var e={};e.id=820,e.ids=[820,660],e.modules={1323:(e,t)=>{"use strict";Object.defineProperty(t,"l",{enumerable:!0,get:function(){return function e(t,r){return r in t?t[r]:"then"in t&&"function"==typeof t.then?t.then(t=>e(t,r)):"function"==typeof t&&"default"===r?t:void 0}}})},2676:e=>{e.exports={style:{fontFamily:"'__Inter_aaf875', '__Inter_Fallback_aaf875'",fontStyle:"normal"},className:"__className_aaf875"}},6968:(e,t,r)=>{"use strict";r.r(t),r.d(t,{config:()=>f,default:()=>d,getServerSideProps:()=>p,getStaticPaths:()=>c,getStaticProps:()=>u,reportWebVitals:()=>h,routeModule:()=>j,unstable_getServerProps:()=>v,unstable_getServerSideProps:()=>b,unstable_getStaticParams:()=>g,unstable_getStaticPaths:()=>x,unstable_getStaticProps:()=>m});var n=r(7093),l=r(5244),s=r(1323),a=r(8942),o=r(5827),i=r(1542);let d=(0,s.l)(i,"default"),u=(0,s.l)(i,"getStaticProps"),c=(0,s.l)(i,"getStaticPaths"),p=(0,s.l)(i,"getServerSideProps"),f=(0,s.l)(i,"config"),h=(0,s.l)(i,"reportWebVitals"),m=(0,s.l)(i,"unstable_getStaticProps"),x=(0,s.l)(i,"unstable_getStaticPaths"),g=(0,s.l)(i,"unstable_getStaticParams"),v=(0,s.l)(i,"unstable_getServerProps"),b=(0,s.l)(i,"unstable_getServerSideProps"),j=new n.PagesRouteModule({definition:{kind:l.x.PAGES,page:"/_error",pathname:"/_error",bundlePath:"",filename:""},components:{App:o.default,Document:a.default},userland:i})},1542:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return u}});let n=r(167),l=r(997),s=n._(r(6689)),a=n._(r(4412)),o={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function i(e){let{res:t,err:r}=e;return{statusCode:t&&t.statusCode?t.statusCode:r?r.statusCode:404}}let d={error:{fontFamily:'system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{lineHeight:"48px"},h1:{display:"inline-block",margin:"0 20px 0 0",paddingRight:23,fontSize:24,fontWeight:500,verticalAlign:"top"},h2:{fontSize:14,fontWeight:400,lineHeight:"28px"},wrap:{display:"inline-block"}};class u extends s.default.Component{render(){let{statusCode:e,withDarkMode:t=!0}=this.props,r=this.props.title||o[e]||"An unexpected error has occurred";return(0,l.jsxs)("div",{style:d.error,children:[(0,l.jsx)(a.default,{children:(0,l.jsx)("title",{children:e?e+": "+r:"Application error: a client-side exception has occurred"})}),(0,l.jsxs)("div",{style:d.desc,children:[(0,l.jsx)("style",{dangerouslySetInnerHTML:{__html:"body{color:#000;background:#fff;margin:0}.next-error-h1{border-right:1px solid rgba(0,0,0,.3)}"+(t?"@media (prefers-color-scheme:dark){body{color:#fff;background:#000}.next-error-h1{border-right:1px solid rgba(255,255,255,.3)}}":"")}}),e?(0,l.jsx)("h1",{className:"next-error-h1",style:d.h1,children:e}):null,(0,l.jsx)("div",{style:d.wrap,children:(0,l.jsxs)("h2",{style:d.h2,children:[this.props.title||e?r:(0,l.jsx)(l.Fragment,{children:"Application error: a client-side exception has occurred (see the browser console for more information)"}),"."]})})]})]})}}u.displayName="ErrorPage",u.getInitialProps=i,u.origGetInitialProps=i,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},1326:(e,t)=>{"use strict";function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},2983:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{noSSR:function(){return o},default:function(){return i}});let n=r(167),l=r(997);r(6689);let s=n._(r(4830));function a(e){return{default:(null==e?void 0:e.default)||e}}function o(e,t){delete t.webpack,delete t.modules;let r=t.loading;return()=>(0,l.jsx)(r,{error:null,isLoading:!0,pastDelay:!1,timedOut:!1})}function i(e,t){let r=s.default,n={loading:e=>{let{error:t,isLoading:r,pastDelay:n}=e;return null}};e instanceof Promise?n.loader=()=>e:"function"==typeof e?n.loader=e:"object"==typeof e&&(n={...n,...e});let l=(n={...n,...t}).loader;return(n.loadableGenerated&&(n={...n,...n.loadableGenerated},delete n.loadableGenerated),"boolean"!=typeof n.ssr||n.ssr)?r({...n,loader:()=>null!=l?l().then(a):Promise.resolve(a(()=>null))}):(delete n.webpack,delete n.modules,o(r,n))}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4412:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{defaultHead:function(){return c},default:function(){return m}});let n=r(167),l=r(8760),s=r(997),a=l._(r(6689)),o=n._(r(6440)),i=r(8039),d=r(1988),u=r(1326);function c(e){void 0===e&&(e=!1);let t=[(0,s.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,s.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===a.default.Fragment?e.concat(a.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(6367);let f=["name","httpEquiv","charSet","itemProp"];function h(e,t){let{inAmpMode:r}=t;return e.reduce(p,[]).reverse().concat(c(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return l=>{let s=!0,a=!1;if(l.key&&"number"!=typeof l.key&&l.key.indexOf("$")>0){a=!0;let t=l.key.slice(l.key.indexOf("$")+1);e.has(t)?s=!1:e.add(t)}switch(l.type){case"title":case"base":t.has(l.type)?s=!1:t.add(l.type);break;case"meta":for(let e=0,t=f.length;e<t;e++){let t=f[e];if(l.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?s=!1:r.add(t);else{let e=l.props[t],r=n[t]||new Set;("name"!==t||!a)&&r.has(e)?s=!1:(r.add(e),n[t]=r)}}}}return s}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,a.default.cloneElement(e,t)}return a.default.cloneElement(e,{key:n})})}let m=function(e){let{children:t}=e,r=(0,a.useContext)(i.AmpStateContext),n=(0,a.useContext)(d.HeadManagerContext);return(0,s.jsx)(o.default,{reduceComponentsToState:h,headManager:n,inAmpMode:(0,u.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6440:(e,t,r)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(6689),l=()=>{},s=()=>{};function a(e){var t;let{headManager:r,reduceComponentsToState:a}=e;function o(){if(r&&r.mountedInstances){let t=n.Children.toArray(Array.from(r.mountedInstances).filter(Boolean));r.updateHead(a(t,e))}}return null==r||null==(t=r.mountedInstances)||t.add(e.children),o(),l(()=>{var t;return null==r||null==(t=r.mountedInstances)||t.add(e.children),()=>{var t;null==r||null==(t=r.mountedInstances)||t.delete(e.children)}}),l(()=>(r&&(r._pendingUpdate=o),()=>{r&&(r._pendingUpdate=o)})),s(()=>(r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null),()=>{r&&r._pendingUpdate&&(r._pendingUpdate(),r._pendingUpdate=null)})),null}},6367:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return r}});let r=e=>{}},5827:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>c});var n=r(997);r(6689);var l=r(2676),s=r.n(l),a=r(5152);let o=r.n(a)()(()=>Promise.all([r.e(748),r.e(743),r.e(163),r.e(718)]).then(r.bind(r,8718)),{loadableGenerated:{modules:["../app/components/NavBar.tsx -> @/app/components/NavBarClientSide"]},ssr:!1}),i=()=>n.jsx(o,{});r(7762);let d=({})=>(0,n.jsxs)("footer",{className:"footer p-10 mt-10 bg-base-300 text-base-content",children:[(0,n.jsxs)("nav",{children:[n.jsx("h6",{className:"footer-title",children:"Services"}),n.jsx("a",{className:"link link-hover",children:"Branding"}),n.jsx("a",{className:"link link-hover",children:"Design"}),n.jsx("a",{className:"link link-hover",children:"Marketing"}),n.jsx("a",{className:"link link-hover",children:"Advertisement"})]}),(0,n.jsxs)("nav",{children:[n.jsx("h6",{className:"footer-title",children:"Company"}),n.jsx("a",{className:"link link-hover",children:"About us"}),n.jsx("a",{className:"link link-hover",children:"Contact"}),n.jsx("a",{className:"link link-hover",children:"Jobs"}),n.jsx("a",{className:"link link-hover",children:"Press kit"})]}),(0,n.jsxs)("nav",{children:[n.jsx("h6",{className:"footer-title",children:"Social"}),(0,n.jsxs)("div",{className:"grid grid-flow-col gap-4",children:[n.jsx("a",{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:n.jsx("path",{d:"M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"})})}),n.jsx("a",{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:n.jsx("path",{d:"M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"})})}),n.jsx("a",{children:n.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",className:"fill-current",children:n.jsx("path",{d:"M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"})})})]})]})]}),u=({metadata:e={},children:t})=>("string"==typeof e.title&&e.title,(0,n.jsxs)("div",{className:`${s().className} container m-auto pb-20`,children:[n.jsx(i,{}),t,n.jsx(d,{})]})),c=({Component:e,pageProps:t})=>n.jsx(u,{children:n.jsx(e,{...t})})},8942:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>o});var n=r(997),l=r(6859),s=r.n(l);class a extends s(){render(){return(0,n.jsxs)(l.Html,{lang:"en",children:[n.jsx(l.Head,{children:n.jsx("meta",{charSet:"UTF-8"})}),(0,n.jsxs)("body",{children:[n.jsx(l.Main,{}),n.jsx(l.NextScript,{})]})]})}}let o=a},7762:()=>{},5244:(e,t)=>{"use strict";var r;Object.defineProperty(t,"x",{enumerable:!0,get:function(){return r}}),function(e){e.PAGES="PAGES",e.PAGES_API="PAGES_API",e.APP_PAGE="APP_PAGE",e.APP_ROUTE="APP_ROUTE"}(r||(r={}))},8039:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.AmpContext},1988:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.HeadManagerContext},4830:(e,t,r)=>{"use strict";e.exports=r(7093).vendored.contexts.Loadable},5152:(e,t,r)=>{e.exports=r(2983)},2785:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},6689:e=>{"use strict";e.exports=require("react")},6405:e=>{"use strict";e.exports=require("react-dom")},997:e=>{"use strict";e.exports=require("react/jsx-runtime")},7147:e=>{"use strict";e.exports=require("fs")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},9796:e=>{"use strict";e.exports=require("zlib")},8760:(e,t)=>{"use strict";function r(e){if("function"!=typeof WeakMap)return null;var t=new WeakMap,n=new WeakMap;return(r=function(e){return e?n:t})(e)}t._=t._interop_require_wildcard=function(e,t){if(!t&&e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var n=r(t);if(n&&n.has(e))return n.get(e);var l={},s=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if("default"!==a&&Object.prototype.hasOwnProperty.call(e,a)){var o=s?Object.getOwnPropertyDescriptor(e,a):null;o&&(o.get||o.set)?Object.defineProperty(l,a,o):l[a]=e[a]}return l.default=e,n&&n.set(e,l),l}}};var t=require("../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),n=t.X(0,[748,859],()=>r(6968));module.exports=n})();