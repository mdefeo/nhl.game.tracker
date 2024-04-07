(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[590],{3622:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/standings",function(){return l(5319)}])},7971:function(e,a,l){"use strict";l.d(a,{L:function(){return t}});let t=async e=>{try{let a=await fetch("/api/proxy?url=".concat(e));if(!a.ok)throw Error("Failed to fetch data");return await a.json()}catch(e){throw console.error("Error fetching data:",e),e}}},5319:function(e,a,l){"use strict";l.r(a),l.d(a,{default:function(){return d}});var t=l(5893),r=l(7294),s=l(1664),n=l.n(s),o=l(7971),c=e=>{let{columnName:a,label:l,sortColumn:r,sortOrder:s,handleSort:n}=e;return(0,t.jsxs)("th",{className:"py-7 px-6 text-left w-1/8",onClick:()=>{n({column:a,order:r===a&&"asc"===s?"desc":"asc"})},children:[l," ",r===a&&(0,t.jsx)("span",{style:{fontSize:"10px",marginLeft:"4px"},children:"asc"===s?"▲":"▼"})]})},i=()=>{let[e,a]=(0,r.useState)([]),[l,s]=(0,r.useState)("All"),[i,d]=(0,r.useState)("All"),[m,u]=(0,r.useState)([]),[h,p]=(0,r.useState)([]),[x,f]=(0,r.useState)(null),[N,j]=(0,r.useState)("asc");(0,r.useEffect)(()=>{(async()=>{try{let e=await (0,o.L)("https://api-web.nhle.com/v1/standings/now");a(e.standings);let l=["All",...new Set(e.standings.map(e=>e.conferenceName))];u(l);let t=["All",...new Set(e.standings.map(e=>e.divisionName))];p(t)}catch(e){console.error("Error fetching data:",e)}})()},[]);let w=e=>{s(e),d("All")},b=a=>{d(a);let l=e.find(e=>e.divisionName===a);l&&s(l.conferenceName)},g=e=>{let{column:a,order:l}=e;f(a),j(l)},v=e.slice().sort((e,a)=>{if(null===x)return 0;{let l=e[x],t=a[x];if("number"==typeof l&&"number"==typeof t)return"asc"===N?l-t:t-l;{let e=String(l),a=String(t);return"asc"===N?e.localeCompare(a):a.localeCompare(e)}}}).filter(e=>{let a="All"===l||e.conferenceName===l,t="All"===i||e.divisionName===i;return a&&t});return(0,t.jsxs)("div",{className:"overflow-x-auto",children:[(0,t.jsx)("div",{className:"flex justify-center space-x-4 mb-4",children:(0,t.jsxs)("div",{className:"flex items-center",children:[(0,t.jsx)("label",{htmlFor:"selectConference",className:"px-4",children:"Conference:"}),(0,t.jsx)("select",{value:l,onChange:e=>w(e.target.value),className:"border border-gray-300 px-4 py-2 rounded",id:"selectConference",children:m.map((e,a)=>(0,t.jsx)("option",{value:e,children:e},a))}),(0,t.jsx)("label",{htmlFor:"selectDivision",className:"px-4",children:"Division:"}),(0,t.jsx)("select",{value:i,onChange:e=>b(e.target.value),className:"border border-gray-300 px-4 py-2 rounded",id:"selectDivision",children:"All"===l?h.map((e,a)=>(0,t.jsx)("option",{value:e,children:e},a)):["All",...Array.from(new Set(e.filter(e=>e.conferenceName===l).map(e=>e.divisionName)))].map((e,a)=>(0,t.jsx)("option",{value:e,children:e},a))})]})}),(0,t.jsxs)("table",{className:"w-full border-collapse table-fixed table-zebra table-pin-rows table-pin-cols",children:[(0,t.jsx)("thead",{className:"bg-neutral",children:(0,t.jsxs)("tr",{children:[(0,t.jsx)(c,{columnName:"teamName",label:"Team",sortColumn:x,sortOrder:N,handleSort:g}),(0,t.jsx)(c,{columnName:"gamesPlayed",label:"GP",sortColumn:x,sortOrder:N,handleSort:g}),(0,t.jsx)(c,{columnName:"points",label:"PTS",sortColumn:x,sortOrder:N,handleSort:g}),(0,t.jsx)(c,{columnName:"goalFor",label:"GF",sortColumn:x,sortOrder:N,handleSort:g}),(0,t.jsx)(c,{columnName:"goalAgainst",label:"GA",sortColumn:x,sortOrder:N,handleSort:g}),(0,t.jsx)(c,{columnName:"goalDifferential",label:"DIFF",sortColumn:x,sortOrder:N,handleSort:g})]})}),(0,t.jsx)("tbody",{className:"text-sm text-left",children:v.map((e,a)=>{let l=e.teamName.default;return(0,t.jsxs)("tr",{className:"border-b border-gray-200 hover:bg-gray-800",children:[(0,t.jsx)("td",{className:"py-3 px-6 whitespace-nowrap",children:(0,t.jsx)(n(),{href:"/teams/".concat(e.id),children:l})}),(0,t.jsx)("td",{className:"p-6 whitespace-nowrap",children:e.gamesPlayed}),(0,t.jsx)("td",{className:"p-6 whitespace-nowrap",children:e.points}),(0,t.jsx)("td",{className:"p-6 whitespace-nowrap",children:e.goalFor}),(0,t.jsx)("td",{className:"p-6 whitespace-nowrap",children:e.goalAgainst}),(0,t.jsx)("td",{className:"p-6 whitespace-nowrap",children:e.goalDifferential})]},a)})})]})]})},d=()=>(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{children:"Standings"}),(0,t.jsx)(i,{})]})}},function(e){e.O(0,[888,774,179],function(){return e(e.s=3622)}),_N_E=e.O()}]);