"use strict";(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[149],{5587:function(e,n,t){t.d(n,{Z:function(){return s}});var i=t(7294);const a=i.createContext({}),o=!0;function l(e){let{baseColor:n,highlightColor:t,width:i,height:a,borderRadius:l,circle:s,direction:r,duration:c,enableAnimation:d=o}=e;const p={};return"rtl"===r&&(p["--animation-direction"]="reverse"),"number"==typeof c&&(p["--animation-duration"]=`${c}s`),d||(p["--pseudo-element-display"]="none"),"string"!=typeof i&&"number"!=typeof i||(p.width=i),"string"!=typeof a&&"number"!=typeof a||(p.height=a),"string"!=typeof l&&"number"!=typeof l||(p.borderRadius=l),s&&(p.borderRadius="50%"),void 0!==n&&(p["--base-color"]=n),void 0!==t&&(p["--highlight-color"]=t),p}function s(e){let{count:n=1,wrapper:t,className:s,containerClassName:r,containerTestId:c,circle:d=!1,style:p,...u}=e;var m,h,g;const v=i.useContext(a),f={...u};for(const[i,a]of Object.entries(u))void 0===a&&delete f[i];const b={...v,...f,circle:d},x={...p,...l(b)};let y="react-loading-skeleton";s&&(y+=` ${s}`);const w=null!==(m=b.inline)&&void 0!==m&&m,j=[],A=Math.ceil(n);for(let a=0;a<A;a++){let e=x;if(A>n&&a===A-1){const t=null!==(h=e.width)&&void 0!==h?h:"100%",i=n%1,a="number"==typeof t?t*i:`calc(${t} * ${i})`;e={...e,width:a}}const t=i.createElement("span",{className:y,style:e,key:a},"‌");w?j.push(t):j.push(i.createElement(i.Fragment,{key:a},t,i.createElement("br",null)))}return i.createElement("span",{className:r,"data-testid":c,"aria-live":"polite","aria-busy":null!==(g=b.enableAnimation)&&void 0!==g?g:o},t?j.map(((e,n)=>i.createElement(t,{key:n},e))):j)}},4706:function(e,n,t){t.d(n,{o:function(){return l}});var i=t(7294),a=t(686),o=t(7177);const l=e=>{const n=i.useContext(o.Z);return{getOne:t=>(0,a.useQuery)(["applications",t],(()=>null==n?void 0:n.Applications.getOne(t)),{initialData:()=>{var n;return null===(n=e.getQueryData("applications"))||void 0===n?void 0:n.find((e=>e.id===t))},onError:e=>{throw new Error(e.message)},enabled:!!t}),getAll:e=>(0,a.useQuery)(["applications",e],(()=>null==n?void 0:n.Applications.getAll(e)),{onError:e=>{throw new Error(e.message)}})}}},5631:function(e,n,t){t.r(n),t.d(n,{default:function(){return v}});var i=t(7294),a=t(1800),o=t(1973),l=t(5983),s=t(5019),r=t(1370),c=t(686),d=t(4706),p=t(5587),u=t(2283),m=t(2840),h=t(5893);const g=()=>{var e,n,t;const[g,v]=i.useContext(l.oh),{t:f}=(0,s.$)(),b=new c.QueryClient,x=(0,d.o)(b).getAll({...g});return(0,h.jsxs)(o.W2,{layoutClassName:"ApplicationsTemplate-module--container--2be0f",children:[(0,h.jsx)("div",{className:"ApplicationsTemplate-module--header--15411",children:(0,h.jsxs)("div",{children:[(0,h.jsx)(a.X6,{level:2,className:"ApplicationsTemplate-module--title--2d10c",children:f("Applications")}),(0,h.jsxs)(a.nv,{className:"ApplicationsTemplate-module--description--e2fbb",children:["Totaal oplossing op basis van een set componenten. Het gaat om werkende software die een oplossing biedt voor een bepaalde"," ",(0,h.jsx)("span",{children:(0,h.jsxs)(a.rU,{target:"_new",href:"https://www.gemmaonline.nl/index.php/GEMMA_Bedrijfsfuncties",children:[(0,h.jsx)(a.JO,{children:(0,h.jsx)(u.Z,{})})," ","bedrijfsfunctie"]})}),"."]})]})}),x.isSuccess&&(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("div",{className:"ApplicationsTemplate-module--ComponentsGrid--a2045",children:null===(e=x.data)||void 0===e||null===(n=e.results)||void 0===n?void 0:n.map((e=>{var n,t;return(0,h.jsx)(r.w,{title:{label:e.name,href:`/applications/${e.id}`},description:e.shortDescription,tags:{organization:null==e||null===(n=e.embedded)||void 0===n||null===(t=n.owner)||void 0===t?void 0:t.fullName,githubLink:null==e?void 0:e.demoUrl}},e.id)}))}),(0,h.jsx)(m.R,{pages:x.data.pages,currentPage:x.data.page,setPage:e=>v({...g,applicationsCurrentPage:e}),pageRangeDisplayed:2,containerClassName:"ApplicationsTemplate-module--paginationContainer--c29fa"})]}),!(null!==(t=x.data)&&void 0!==t&&t.results)&&!x.isLoading&&"Geen resultaten gevonden",x.isLoading&&(0,h.jsx)(p.Z,{height:"200px"})]})};var v=e=>(0,h.jsx)(g,{})}}]);
//# sourceMappingURL=component---src-pages-applications-applications-page-tsx-a76370b05504ead6e237.js.map