"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[46],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=i.createContext({}),p=function(e){var t=i.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},g=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),g=p(r),m=o,d=g["".concat(l,".").concat(m)]||g[m]||u[m]||n;return r?i.createElement(d,a(a({ref:t},c),{},{components:r})):i.createElement(d,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,a=new Array(n);a[0]=g;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var p=2;p<n;p++)a[p]=r[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,r)}g.displayName="MDXCreateElement"},6390:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>n,metadata:()=>s,toc:()=>p});var i=r(7462),o=(r(7294),r(3905));const n={sidebar_position:1,title:"Monitoring guide for Service Providers"},a=void 0,s={unversionedId:"Monitoring/SP_guide",id:"Monitoring/SP_guide",title:"Monitoring guide for Service Providers",description:"Overview",source:"@site/docs/Monitoring/SP_guide.md",sourceDirName:"Monitoring",slug:"/Monitoring/SP_guide",permalink:"/argo-monitoring/docs/Monitoring/SP_guide",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Monitoring guide for Service Providers"},sidebar:"tutorialSidebar",previous:{title:"Monitoring",permalink:"/argo-monitoring/docs/category/monitoring"},next:{title:"Guidelines for monitoring probes",permalink:"/argo-monitoring/docs/Monitoring/guidelines"}},l={},p=[{value:"Overview",id:"overview",level:2},{value:"Topology",id:"topology",level:2},{value:"Topology information",id:"topology-information",level:3},{value:"Metrics &amp; probes",id:"metrics--probes",level:2},{value:"Service probe",id:"service-probe",level:3},{value:"Setting up service monitoring",id:"setting-up-service-monitoring",level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,i.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ARGO Monitoring service provides a flexible and scalable framework for monitoring status, availability and reliability of a wide range of services provided by infrastructures with medium to high complexity. ARGO generates reports using customer defined profiles (e.g. for SLA management, operations, etc.). During the report generation, ARGO takes into account custom factors such as the importance of a specific service endpoint and scheduled or unscheduled downtimes."),(0,o.kt)("h2",{id:"topology"},"Topology"),(0,o.kt)("p",null,"Topology database is actually a central registry for e-Infrastructure topology. "),(0,o.kt)("h3",{id:"topology-information"},"Topology information"),(0,o.kt)("p",null,"Monitoring service relies on topology database to provide the following information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"monitored service(s)"),","),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"service types")," they are running (e.g. wiki),"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"service endpoints")," of the service (e.g. endpoint),"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"way they are organized")," (e.g. in groups of sites, in groups of services),"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"service actors")," (owners, admins, contact points).")),(0,o.kt)("h2",{id:"metrics--probes"},"Metrics & probes"),(0,o.kt)("p",null,"A metric is a procedure that checks specific functionality of a given service, i.e. a single measurement. For example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://poem.argo.grnet.gr/ui/public_metrictemplates/org.nagios.WebCheck"},"org.nagios.WebCheck"),": checks the http if it responds;"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://poem.argo.grnet.gr/ui/public_metrictemplates/eu.egi.CertValidity"},"eu.egi.CertValidity"),": checks the validity of a certificate.")),(0,o.kt)("h3",{id:"service-probe"},"Service probe"),(0,o.kt)("p",null,"Probe is piece of code which implements single or multiple tests. All the probes intended to be used for monitoring must comply with the ",(0,o.kt)("a",{parentName:"p",href:"/argo-monitoring/docs/Monitoring/guidelines"},"guidelines for monitoring probes"),"."),(0,o.kt)("p",null,"The owners of the service are the ones that ",(0,o.kt)("strong",{parentName:"p"},"know exactly how the service is working"),". The service development team with the support of the monitoring team is responsible to implement the probe that checks and at the same time mimics the actual end user behaviour without requiring special privileges or special configurations."),(0,o.kt)("p",null,"Before you start implementing your probe, please check in the ",(0,o.kt)("a",{parentName:"p",href:"https://poem.argo.grnet.gr/ui/public_probes"},"POEM library")," if appropriate probe is already used for monitoring services."),(0,o.kt)("h2",{id:"setting-up-service-monitoring"},"Setting up service monitoring"),(0,o.kt)("p",null,(0,o.kt)("img",{src:r(5130).Z,width:"1565",height:"1832"})))}u.isMDXComponent=!0},5130:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/flowchart-cd8414acd3acdd48a1b98299bb09675e.png"}}]);