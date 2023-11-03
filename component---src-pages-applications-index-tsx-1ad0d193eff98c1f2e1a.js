"use strict";(self.webpackChunkskeleton_pip=self.webpackChunkskeleton_pip||[]).push([[733,149],{15:function(e,t,n){n.d(t,{Z:function(){return g}});var i=n(7294),a=n(5697),r=n.n(a),o={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"},l=Object.defineProperty,s=Object.defineProperties,c=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))d.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))p.call(t,n)&&m(e,n,t[n]);return e},g=(e,t,n)=>{const a=(0,i.forwardRef)(((t,a)=>{var r,l=t,{color:m="currentColor",size:g=24,stroke:h=2,children:v}=l,b=((e,t)=>{var n={};for(var i in e)d.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&u)for(var i of u(e))t.indexOf(i)<0&&p.call(e,i)&&(n[i]=e[i]);return n})(l,["color","size","stroke","children"]);return(0,i.createElement)("svg",f((r=f({ref:a},o),s(r,c({width:g,height:g,stroke:m,strokeWidth:h,className:`tabler-icon tabler-icon-${e}`}))),b),[...n.map((e=>{let[t,n]=e;return(0,i.createElement)(t,n)})),...v||[]])}));return a.propTypes={color:r().string,size:r().oneOfType([r().string,r().number]),stroke:r().oneOfType([r().string,r().number])},a.displayName=`${t}`,a}},6505:function(e,t,n){n.d(t,{Z:function(){return i}});var i=(0,n(15).Z)("arrow-right","IconArrowRight",[["path",{d:"M5 12l14 0",key:"svg-0"}],["path",{d:"M13 18l6 -6",key:"svg-1"}],["path",{d:"M13 6l6 6",key:"svg-2"}]])},5587:function(e,t,n){n.d(t,{Z:function(){return l}});var i=n(7294);const a=i.createContext({}),r=!0;function o(e){let{baseColor:t,highlightColor:n,width:i,height:a,borderRadius:o,circle:l,direction:s,duration:c,enableAnimation:u=r}=e;const d={};return"rtl"===s&&(d["--animation-direction"]="reverse"),"number"==typeof c&&(d["--animation-duration"]=`${c}s`),u||(d["--pseudo-element-display"]="none"),"string"!=typeof i&&"number"!=typeof i||(d.width=i),"string"!=typeof a&&"number"!=typeof a||(d.height=a),"string"!=typeof o&&"number"!=typeof o||(d.borderRadius=o),l&&(d.borderRadius="50%"),void 0!==t&&(d["--base-color"]=t),void 0!==n&&(d["--highlight-color"]=n),d}function l(e){let{count:t=1,wrapper:n,className:l,containerClassName:s,containerTestId:c,circle:u=!1,style:d,...p}=e;var m,f,g;const h=i.useContext(a),v={...p};for(const[i,a]of Object.entries(p))void 0===a&&delete v[i];const b={...h,...v,circle:u},y={...d,...o(b)};let x="react-loading-skeleton";l&&(x+=` ${l}`);const j=null!==(m=b.inline)&&void 0!==m&&m,w=[],k=Math.ceil(t);for(let a=0;a<k;a++){let e=y;if(k>t&&a===k-1){const n=null!==(f=e.width)&&void 0!==f?f:"100%",i=t%1,a="number"==typeof n?n*i:`calc(${n} * ${i})`;e={...e,width:a}}const n=i.createElement("span",{className:x,style:e,key:a},"‌");j?w.push(n):w.push(i.createElement(i.Fragment,{key:a},n,i.createElement("br",null)))}return i.createElement("span",{className:s,"data-testid":c,"aria-live":"polite","aria-busy":null!==(g=b.enableAnimation)&&void 0!==g?g:r},n?w.map(((e,t)=>i.createElement(n,{key:t},e))):w)}},1370:function(e,t,n){n.d(t,{w:function(){return p}});var i=n(1800),a=n(5019),r=n(6505),o=n(7606),l=n(3168),s=n(3701),c=n(734),u=n(1562),d=n(5893);const p=e=>{let{title:t,description:n,tags:p}=e;const{t:m}=(0,a.$)();return(0,d.jsxs)(c.UK,{className:"ApplicationCard-module--container--af780",onClick:()=>(0,u.c4)(t.href),children:[(0,d.jsx)(c.Ol,{className:"ApplicationCard-module--cardHeader--4aa85",children:(0,d.jsx)(c.wP,{children:(0,d.jsxs)(i.rU,{className:"ApplicationCard-module--titleLink--5e3d5",onClick:()=>(0,u.c4)(t.href),children:[(0,d.jsx)(i.JO,{children:(0,d.jsx)(r.Z,{})}),t.label]})})}),(0,d.jsx)(i.nv,{className:"ApplicationCard-module--description--e916e",children:n}),(0,d.jsxs)("div",{className:"ApplicationCard-module--tags--3a901",children:[p.organization&&(0,d.jsxs)(i.Ou,{"data-tooltip-id":s.TOOLTIP_ID,"data-tooltip-content":"Organisatie",children:[(0,d.jsx)(o.G,{icon:l.wp6}),p.organization]}),p.githubLink&&(0,d.jsxs)(i.Ou,{"data-tooltip-id":s.TOOLTIP_ID,"data-tooltip-content":"Demo",onClick:e=>{e.stopPropagation(),open(p.githubLink)},children:[(0,d.jsx)(o.G,{icon:l.py1}),m("Demo")]})]})]})}},2997:function(e,t,n){n.d(t,{k:function(){return u}});var i=n(7294),a=n(5505),r=n(8177),o=n(734),l=n(1634),s=n(5019),c=n(5893);const u=e=>{let{queryLimitName:t,layoutClassName:n}=e;const{watch:u,register:p,control:m,setValue:f,formState:{errors:g}}=(0,r.cI)(),{queryLimit:h,setQueryLimit:v}=(0,l.TL)(),{t:b}=(0,s.$)(),y=u("limit"),x=h[t];return i.useEffect((()=>{if(!y)return;if(parseInt(y.value)===x)return;const e=d.find((e=>e.value===y.value));e&&v({...h,[t]:parseInt(e.value)})}),[y]),i.useEffect((()=>{f("limit",d.find((e=>e.value===(void 0!==x&&x.toString()))))}),[]),(0,c.jsxs)("div",{className:(0,a.Z)("PaginationLimitSelect-module--container--4b5a5",n&&n),children:[(0,c.jsxs)("span",{children:[b("Results per page"),":"]}),(0,c.jsx)(o.Nh,{ariaLabel:b("Select result limit"),register:p,errors:g,control:m,defaultValue:l.mr,name:"limit",options:d,menuPlacement:"auto",placeholder:b("Limit")})]})},d=[{label:"6",value:"6"},{label:"8",value:"8"},{label:"10",value:"10"},{label:"16",value:"16"},{label:"20",value:"20"},{label:"40",value:"40"},{label:"60",value:"60"},{label:"100",value:"100"}]},4706:function(e,t,n){n.d(t,{o:function(){return o}});var i=n(7294),a=n(686),r=n(7177);const o=e=>{const t=i.useContext(r.Z);return{getOne:n=>(0,a.useQuery)(["applications",n],(()=>null==t?void 0:t.Applications.getOne(n)),{initialData:()=>{var t;return null===(t=e.getQueryData("applications"))||void 0===t?void 0:t.find((e=>e.id===n))},onError:e=>{throw new Error(e.message)},enabled:!!n}),getAll:(e,n,i)=>(0,a.useQuery)(["applications",e,n,i],(()=>null==t?void 0:t.Applications.getAll(n,i)),{onError:e=>{throw new Error(e.message)}}),getCount:()=>(0,a.useQuery)(["applications_count"],(()=>null==t?void 0:t.Applications.getCount()),{onError:e=>{throw new Error(e.message)},refetchOnWindowFocus:!1,refetchOnReconnect:!1,retry:!1,staleTime:6e5})}}},5631:function(e,t,n){n.r(t),n.d(t,{default:function(){return y}});var i=n(7294),a=n(1800),r=n(734),o=n(5983),l=n(5019),s=n(1370),c=n(686),u=n(4706),d=n(5587),p=n(9201),m=n(2997),f=n(1634),g=n(7606),h=n(3168),v=n(5893);const b=()=>{var e,t,n;const{t:b}=(0,l.$)(),{filters:y}=(0,o.P)(),{queryLimit:x}=(0,f.TL)(),{pagination:j,setPagination:w}=(0,p.E)(),k=new c.QueryClient,C=(0,u.o)(k),N=C.getAll({...y},j.applicationCurrentPage,x.applicationsQueryLimit),O=C.getCount();return i.useEffect((()=>{w({...j,applicationCurrentPage:1})}),[x.applicationsQueryLimit]),(0,v.jsxs)(r.W2,{layoutClassName:"ApplicationsTemplate-module--container--2be0f",children:[(0,v.jsx)("div",{className:"ApplicationsTemplate-module--header--15411",children:(0,v.jsxs)("div",{children:[(0,v.jsxs)(a.X6,{level:2,className:"ApplicationsTemplate-module--title--2d10c",children:[b("Applications")," ",O.data>=0&&`(${O.data})`]}),(0,v.jsxs)(a.nv,{className:"ApplicationsTemplate-module--description--e2fbb",children:["Totaal oplossing op basis van een set componenten. Het gaat om werkende software die een oplossing biedt voor een bepaalde"," ",(0,v.jsx)("span",{children:(0,v.jsxs)(a.rU,{className:"ApplicationsTemplate-module--inlineTextLink--feaef",target:"_new",href:"https://www.gemmaonline.nl/index.php/GEMMA_Bedrijfsfuncties",children:[(0,v.jsx)(a.JO,{children:(0,v.jsx)(g.G,{icon:h.gJF})}),b("Business function")]})}),"."]})]})}),N.isSuccess&&0!==N.data.total&&(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)("div",{className:"ApplicationsTemplate-module--ComponentsGrid--a2045",children:null===(e=N.data)||void 0===e||null===(t=e.results)||void 0===t?void 0:t.map((e=>{var t,n;return(0,v.jsx)(s.w,{title:{label:e.name,href:`/applications/${e.id}`},description:e.shortDescription,tags:{organization:null==e||null===(t=e.embedded)||void 0===t||null===(n=t.owner)||void 0===n?void 0:n.fullName,githubLink:null==e?void 0:e.demoUrl}},e.id)}))}),(0,v.jsxs)("div",{className:"ApplicationsTemplate-module--pagination--6741f",children:[(0,v.jsx)(r.tl,{layoutClassName:"ApplicationsTemplate-module--paginationContainer--c29fa",totalPages:N.data.pages,currentPage:N.data.page,setCurrentPage:e=>w({...j,applicationCurrentPage:e}),ariaLabels:{nextPage:b("Next page"),previousPage:b("Previous page"),page:b("Page")}}),(0,v.jsx)(m.k,{queryLimitName:"applicationsQueryLimit"})]})]}),!(null!==(n=N.data)&&void 0!==n&&n.results)&&!N.isLoading&&b("No results found"),N.isSuccess&&0===N.data.total&&b("No results available"),N.isLoading&&(0,v.jsx)(d.Z,{height:"200px"})]})};var y=e=>(0,v.jsx)(b,{})},7072:function(e,t,n){n.r(t);var i=n(5631);t.default=i.default}}]);
//# sourceMappingURL=component---src-pages-applications-index-tsx-1ad0d193eff98c1f2e1a.js.map