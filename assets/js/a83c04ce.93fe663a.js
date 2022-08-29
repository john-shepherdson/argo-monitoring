"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[296],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||c[d]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},2893:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:6,title:"Use Case  5: Third-party services exploiting EOSC Monitoring data"},o=void 0,s={unversionedId:"Guides/case5",id:"Guides/case5",title:"Use Case  5: Third-party services exploiting EOSC Monitoring data",description:"Introduction",source:"@site/docs/Guides/case5.md",sourceDirName:"Guides",slug:"/Guides/case5",permalink:"/argo-monitoring/docs/Guides/case5",draft:!1,tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,title:"Use Case  5: Third-party services exploiting EOSC Monitoring data"},sidebar:"tutorialSidebar",previous:{title:"Use Case 4: Combine Results of existing ARGO Tenants.",permalink:"/argo-monitoring/docs/Guides/case4"},next:{title:"Introduction",permalink:"/argo-monitoring/docs/intro"}},l={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Solution",id:"solution",level:2},{value:"Step 1: EOSC helpdesk",id:"step-1-eosc-helpdesk",level:3},{value:"Step 2: Start Ingesting the data.",id:"step-2-start-ingesting-the-data",level:3},{value:"Examples",id:"examples",level:2},{value:"Retrieve availability, reliability and status results of a service",id:"retrieve-availability-reliability-and-status-results-of-a-service",level:5},{value:"API call examples for A/R reports",id:"api-call-examples-for-ar-reports",level:5},{value:"API call examples for status reports",id:"api-call-examples-for-status-reports",level:5}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"This use case covers the scenario according to which the customer needs to use the results of the EOSC Monitoring Service in an external service/dashboard. "),(0,n.kt)("p",null,"The customer can access the following information via an API: "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A/R information about the service and its service components "),(0,n.kt)("li",{parentName:"ul"},"Status information about the service and its service components"),(0,n.kt)("li",{parentName:"ul"},"The topology and grouping of the service ")),(0,n.kt)("h2",{id:"solution"},"Solution"),(0,n.kt)("h3",{id:"step-1-eosc-helpdesk"},"Step 1: EOSC helpdesk"),(0,n.kt)("p",null,"\u03a4he user that wants to gain access to this type of monitoring information will get a token with read-only access to the A/R and status results. The user via the EOSC helpdesk may send his request to the monitoring team by sending:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The name of the service that wants the information "),(0,n.kt)("li",{parentName:"ul"},"An email to create the user "),(0,n.kt)("li",{parentName:"ul"},"The type of information (A/R results, status results, both) ")),(0,n.kt)("h3",{id:"step-2-start-ingesting-the-data"},"Step 2: Start Ingesting the data."),(0,n.kt)("p",null,"The monitoring team will provide the required  token and information, guidance on how to retrieve the information.  "),(0,n.kt)("h2",{id:"examples"},"Examples"),(0,n.kt)("h5",{id:"retrieve-availability-reliability-and-status-results-of-a-service"},"Retrieve availability, reliability and status results of a service"),(0,n.kt)("p",null,"In this example we are going to present how the user can get the availability,  the reliability values and the status of the AMS (Messaging Service)  (endpoint:  ",(0,n.kt)("a",{parentName:"p",href:"https://msg.argo.grnet.gr/"},"https://msg.argo.grnet.gr"),") of the Organisation GRNET. "),(0,n.kt)("p",null,"The Monitoring Service Monitoring Service is checking the services at regular intervals. It actually runs explicit tests (checks) in order to assess the status of the service. The result of the checks decides on the status of the service. In order to display status information it uses reports where it keeps all the necessary information. "),(0,n.kt)("p",null,"At the same time it produces useful conclusions about the monitoring item via the monitoring analytics engine. One very useful conclusion is to decide if the item is available for usage and if it is considered as reliable. To succeed this, availability/reliability values (hourly, daily, monthly)  are calculated. These different types of information are also encapsulated in a ",(0,n.kt)("strong",{parentName:"p"},"report"),". "),(0,n.kt)("p",null,"The EOSC monitoring service monitors the Messaging Service and it performs the following checks "),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"cert_validity_check")," : a metric that checks the validity of the certificate used by the service"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ams_check"),": a metric that checks a list of functionalities provided by the messaging service. ")),(0,n.kt)("p",null,"Based on the explanation provided above,  the information about the service follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Definition"),(0,n.kt)("th",{parentName:"tr",align:null},"Value"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"GROUP"),(0,n.kt)("td",{parentName:"tr",align:null},"GRNET"),(0,n.kt)("td",{parentName:"tr",align:null},"A collection of services")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SERVICE"),(0,n.kt)("td",{parentName:"tr",align:null},"AMS"),(0,n.kt)("td",{parentName:"tr",align:null},"The type of one of the services of the collection")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"SERVICE endpoint"),(0,n.kt)("td",{parentName:"tr",align:null},"msg.argo.grnet.gr(AMS)"),(0,n.kt)("td",{parentName:"tr",align:null},"is defined as the combination of a hostname and Service Type. (a Service Type of AMS listening on port/s <ams-port/s",">"," on the host msg.argo.grnet.gr is a service endpoint)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Grouping used in the report"),(0,n.kt)("td",{parentName:"tr",align:null},"SERVICEGROUPS"),(0,n.kt)("td",{parentName:"tr",align:null},"the way the services are organized (e.g. in groups of sites, in groups of services) in the monitoring engine")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"A/R report"),(0,n.kt)("td",{parentName:"tr",align:null},"Default"),(0,n.kt)("td",{parentName:"tr",align:null},"The place where the A/R results are provided.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Status report"),(0,n.kt)("td",{parentName:"tr",align:null},"Default"),(0,n.kt)("td",{parentName:"tr",align:null},"The place where  status results are provided.")))),(0,n.kt)("p",null,"This is the configuration that the user will have to use to use the api calls. "),(0,n.kt)("h5",{id:"api-call-examples-for-ar-reports"},"API call examples for A/R reports"),(0,n.kt)("p",null,"The api authenticates the user using the api-key within the x-api-key header. Users can specify time granularity (monthly or daily) for retrieved results and also format  using the Accept header. Depending on the form of the request the user can request a group, service or service endpoint. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Detailed documentation:"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://argoeu.github.io/api/v2/results/"},"https://argoeu.github.io/api/v3/results/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("p",null,"For the AMS the corresponding api call to get the A/R of the service group GRNET is: "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Request for A/R results for service group GRNET:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" -H "x-api-key: secret-token" https://api.argo.grnet.gr/api/v3/results/Default/SERVICEGROUPS/GRNET?start_time=2021-08-05T00:00:00Z&end_time=2021-08-05T23:59:59Z\n')),(0,n.kt)("h5",{id:"api-call-examples-for-status-reports"},"API call examples for status reports"),(0,n.kt)("p",null,"The api authenticates the user using the api-key within the x-api-key header. Users can specify time granularity (monthly or daily) for retrieved results and also format  using the Accept header. Depending on the form of the request the user can request a group, service or service endpoint. "),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Detailed documentation:"),"\n",(0,n.kt)("a",{parentName:"p",href:"https://argoeu.github.io/api/v2/status/"}),(0,n.kt)("a",{parentName:"p",href:"https://argoeu.github.io/api/v3/status/"},"https://argoeu.github.io/api/v3/status/")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Example:")),(0,n.kt)("p",null,"For the AMS the corresponding api call to get the status of the service group GRNET is: "),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Request for status results for service group GRNET:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ curl -X GET -H "Accept: application/json" -H "Content-Type: application/json" -H "x-api-key: secret-token" https://api.argo.grnet.gr/api/v3/status/Default/SERVICEGROUPS/GRNET?start_time=2021-08-05T00:00:00Z&end_time=2021-08-05T23:59:59Z \n')))}c.isMDXComponent=!0}}]);