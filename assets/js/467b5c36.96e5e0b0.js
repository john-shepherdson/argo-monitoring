"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[435],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),c=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=c(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(n),h=r,d=m["".concat(l,".").concat(h)]||m[h]||u[h]||o;return n?i.createElement(d,a(a({ref:t},p),{},{components:n})):i.createElement(d,a({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2738:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return p},default:function(){return m}});var i=n(7462),r=n(3366),o=(n(7294),n(3905)),a=["components"],s={sidebar_position:2,title:"Status Timelines"},l=void 0,c={unversionedId:"reports/status_timelines",id:"reports/status_timelines",isDocsHomePage:!1,title:"Status Timelines",description:"Status Timelines",source:"@site/docs/reports/status_timelines.md",sourceDirName:"reports",slug:"/reports/status_timelines",permalink:"/argo-monitoring/docs/reports/status_timelines",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"Status Timelines"},sidebar:"tutorialSidebar",previous:{title:"Status Timelines & A/R Results",permalink:"/argo-monitoring/docs/reports/timelines_&_ar"},next:{title:"A/R results",permalink:"/argo-monitoring/docs/reports/ar"}},p=[{value:"Status Timelines",id:"status-timelines",children:[{value:"Metric Level  - Monitoring a single check",id:"metric-level----monitoring-a-single-check",children:[]},{value:"Endpoint Level  - Monitoring a single host",id:"endpoint-level----monitoring-a-single-host",children:[]},{value:"Service Level  -Monitoring an entire service",id:"service-level---monitoring-an-entire-service",children:[]},{value:"Monitoring an entire group",id:"monitoring-an-entire-group",children:[]}]}],u={toc:p};function m(e){var t=e.components,s=(0,r.Z)(e,a);return(0,o.kt)("wrapper",(0,i.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"status-timelines"},"Status Timelines"),(0,o.kt)("p",null,"Status Timeline is a report of the status of the monitored item/group of items, during the monitoring time. Knowing the timeline, provides information about the condition of the monitored item  , helps to spot the most problematic metrics and decide about them. It is of major significance especially knowing when the monitored item is in a CRITICAL status , or it is in OK status "),(0,o.kt)("p",null,"The calculations of the ARGO Monitoring service apply to all levels of the topology, grouping the monitored items based on the topology\u2019s characteristics. Only items that are contained in the topology are included in the calculations, as they are defined by Topology Group, Topology Endpoint."),(0,o.kt)("h3",{id:"metric-level----monitoring-a-single-check"},"Metric Level  - Monitoring a single check"),(0,o.kt)("p",null,"The first step of calculations of the ARGO Monitoring service is concluding results in the level of the metric checks. "),(0,o.kt)("h4",{id:"example"},"Example:"),(0,o.kt)("p",null,"The metric check applies on a monitoring item with the following topology\u2019s characteristics:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'  "metric": "http.check",\n  "hostname": "host1.example.com",\n  "service_type": "Web-Site",\n  "group": "group1"\n')),(0,o.kt)("p",null,"The Metric Data records for this item could give information about the status as : "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"timestamp"),(0,o.kt)("th",{parentName:"tr",align:null},"status"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021-05-02T00:00:00Z"),(0,o.kt)("td",{parentName:"tr",align:null},"OK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021-05-02T03:00:00Z"),(0,o.kt)("td",{parentName:"tr",align:null},"OK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021-05-02T06:00:00Z"),(0,o.kt)("td",{parentName:"tr",align:null},"OK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021-05-02T09:00:00Z"),(0,o.kt)("td",{parentName:"tr",align:null},"OK")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021-05-02T12:00:00Z"),(0,o.kt)("td",{parentName:"tr",align:null},"WARNING")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021-05-02T15:00:00Z"),(0,o.kt)("td",{parentName:"tr",align:null},"WARNING")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021-05-02T18:00:00Z"),(0,o.kt)("td",{parentName:"tr",align:null},"CRITICAL")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"2021-05-02T21:00:00Z"),(0,o.kt)("td",{parentName:"tr",align:null},"OK")))),(0,o.kt)("p",null,"The timeline result would be as shown in picture: ",(0,o.kt)("img",{src:n(8482).Z})," "),(0,o.kt)("h3",{id:"endpoint-level----monitoring-a-single-host"},"Endpoint Level  - Monitoring a single host"),(0,o.kt)("p",null,"The next level of the calculations is the endpoint level, producing results for a single host. A host includes multiple metric checks , so the Metric Data are grouped by the host. But not all metric checks of the host need to be included into the calculations.\nThe ARGO Monitoring Service retrieves a Metric Profile report that defines the significant metric check.The Metric Data are filtered based on the given information and computations apply only to the metric checks defined in the Metric Profile reports.  The Argo Monitoring service will combine the timelines of the metric checks and will combine the time interval and statuses into a new timeline.  In order to combine the different statuses of a time interval and conclude into one status the ARGO Monitoring service retrieves an Operation Profile that defines all the possible status combinations. As Operation Profile includes a defined operation with a truth table of possible status combinations, the ARGO Monitoring service retrieves the operation that corresponds to the endpoint level from the Aggregation Profile"),(0,o.kt)("h4",{id:"example-1"},"Example:"),(0,o.kt)("p",null,"Here are three  metric checks for the same host: "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"metric": "http.check",         \n"hostname":"host1.example.com,\n"service_type": "Web-Site",\n"group": "group1" `\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"metric": "http.download",\n"hostname":"host1.example.com",\n"service_type":"Web-Site",\n"group": "group1"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'"metric": "http.upload",\n"hostname": "host1.example.com",\n"service_type": "Web-Site",\n"group": "group1"\n')),(0,o.kt)("p",null,"But from the metric profile report only ",(0,o.kt)("strong",{parentName:"p"},"http.download")," and ",(0,o.kt)("strong",{parentName:"p"},"http.upload")," are defined.\nAs a result the ARGO Monitoring service will filter the Metric Data and will ignore the ones of the  ",(0,o.kt)("strong",{parentName:"p"},"http.check")," metric check. The timelines of ",(0,o.kt)("strong",{parentName:"p"},"http.download")," and ",(0,o.kt)("strong",{parentName:"p"},"http.upload")," will combine with each other and produce the timeline of the endpoint ",(0,o.kt)("strong",{parentName:"p"},"host1.example.com"),", as shown in picture: ",(0,o.kt)("img",{src:n(3374).Z})," "),(0,o.kt)("h3",{id:"service-level---monitoring-an-entire-service"},"Service Level  -Monitoring an entire service"),(0,o.kt)("p",null,"The next level of the calculations is the service level, producing results for a single service. A service runs under multiple hosts, so the Metric Data are grouped by the service.  The Argo Monitoring service will combine the timelines of the hosts that run the service into a new timeline."),(0,o.kt)("p",null,"Not all services are included into the calculations. ARGO Monitoring service filters the data to retrieve explicitly these services, as they are defined in Aggregation Profiles."),(0,o.kt)("p",null,"In order to combine the different statuses of a time interval and conclude into one status, the ARGO Monitoring service retrieves from the Aggregation Profile the operation for each service and knowing this, retrieves the status combination of this operation from the Operation Profile."),(0,o.kt)("h4",{id:"example-"},"Example :"),(0,o.kt)("p",null,"The monitored service ",(0,o.kt)("strong",{parentName:"p"},"Web-Site")," operates under 3 hosts :\n",(0,o.kt)("strong",{parentName:"p"},"host1.example.com"),", ",(0,o.kt)("strong",{parentName:"p"},"host2.example.com"),", ",(0,o.kt)("strong",{parentName:"p"},"host3.example.com"),". In order to decide that the service operates successfully it should run successfully to all hosts. ARGO Monitoring Service groups the timelines by the service ",(0,o.kt)("strong",{parentName:"p"},"Web-Site")," and would create status timelines for the service by combining the individual host status timelines.  "),(0,o.kt)("p",null,"The way that the individual hosts\u2019 status timelines are combined to produce the final result for the service is described in the Aggregation Profile. The Aggregation Profile defines the ",(0,o.kt)("strong",{parentName:"p"},"AND")," or ",(0,o.kt)("strong",{parentName:"p"},"OR")," way to aggregate the individual hosts\u2019 status timelines  in order to compute the final timelines. The function ",(0,o.kt)("strong",{parentName:"p"},"AND")," , ",(0,o.kt)("strong",{parentName:"p"},"OR")," and the way they are used for the computations are defined in the Operations Profile. "),(0,o.kt)("p",null,"The timeline result would be as shown in picture: ",(0,o.kt)("img",{src:n(476).Z})," "),(0,o.kt)("h3",{id:"monitoring-an-entire-group"},"Monitoring an entire group"),(0,o.kt)("p",null,"A group might contain a number of service offerings, such as a ",(0,o.kt)("strong",{parentName:"p"},"Web-Site"),", a ",(0,o.kt)("strong",{parentName:"p"},"mysql-db"),", a ",(0,o.kt)("strong",{parentName:"p"},"NextCloud")," etc. The services\u2019 timelines can be combined and concluded into a status timeline for the group.  A group may represent a whole project or a group of services that work together to offer an operational solution to the users. This kind of grouping could also represent data infrastructures with geographical designation, such as a specific data center etc.\nThe way that these services are combined to produce the final result for the group is described in the Aggregation Profile. "),(0,o.kt)("h4",{id:"example--1"},"Example :"),(0,o.kt)("p",null,"In the previous example we described how the ARGO Monitoring Service is monitoring the service ",(0,o.kt)("strong",{parentName:"p"},"Web-Site")," . Let\u2019s assume we have the ",(0,o.kt)("strong",{parentName:"p"},"mysql-db")," service for storing data, and the ",(0,o.kt)("strong",{parentName:"p"},"NextCloud")," service for storing files. "),(0,o.kt)("p",null,"A project is using these 3 services for its users. In order for the service offering to be  operational, all of these 3 services should run without problems. In order to monitor them we put them in a group named by the project they belong to.  ARGO Monitoring Service would create status timelines for the project by combining the individual service status timelines."),(0,o.kt)("p",null,"The way that the individual service status timelines are combined to produce the final result for the group is described in the Aggregation Profile. The Aggregation Profile defines the AND or OR way to aggregate the individual service status timelines  in order to compute the final timelines. The function AND , OR and the way they are used for the computations are defined in the Operations Profile. "),(0,o.kt)("p",null,"The timeline result would be as shown in picture: ",(0,o.kt)("img",{src:n(2042).Z})))}m.isMDXComponent=!0},3374:function(e,t,n){t.Z=n.p+"assets/images/endptimelines-0e9534b1d7ca9f4eb72cd5331cb48cdb.png"},2042:function(e,t,n){t.Z=n.p+"assets/images/grouptimelines-8101bd7c7a545050d9d78c15f7833d2f.png"},8482:function(e,t,n){t.Z=n.p+"assets/images/metrictimelines-cb2441dc2f225d7e647b7f4eda292f55.png"},476:function(e,t,n){t.Z=n.p+"assets/images/servicetimelines-6590e9cd54679659718489e9cc4a90a3.png"}}]);