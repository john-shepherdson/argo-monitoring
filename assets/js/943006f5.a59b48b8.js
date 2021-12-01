"use strict";(self.webpackChunkargo_monitoring=self.webpackChunkargo_monitoring||[]).push([[808],{3905:function(t,n,e){e.d(n,{Zo:function(){return s},kt:function(){return I}});var a=e(7294);function r(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function l(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,a)}return e}function i(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?l(Object(e),!0).forEach((function(n){r(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):l(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function N(t,n){if(null==t)return{};var e,a,r=function(t,n){if(null==t)return{};var e,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||(r[e]=t[e]);return r}(t,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)e=l[a],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(r[e]=t[e])}return r}var o=a.createContext({}),p=function(t){var n=a.useContext(o),e=n;return t&&(e="function"==typeof t?t(n):i(i({},n),t)),e},s=function(t){var n=p(t.components);return a.createElement(o.Provider,{value:n},t.children)},u={inlineCode:"code",wrapper:function(t){var n=t.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(t,n){var e=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,s=N(t,["components","mdxType","originalType","parentName"]),m=p(e),I=r,d=m["".concat(o,".").concat(I)]||m[I]||u[I]||l;return e?a.createElement(d,i(i({ref:n},s),{},{components:e})):a.createElement(d,i({ref:n},s))}));function I(t,n){var e=arguments,r=n&&n.mdxType;if("string"==typeof t||r){var l=e.length,i=new Array(l);i[0]=m;var N={};for(var o in n)hasOwnProperty.call(n,o)&&(N[o]=n[o]);N.originalType=t,N.mdxType="string"==typeof t?t:r,i[1]=N;for(var p=2;p<l;p++)i[p]=e[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,e)}m.displayName="MDXCreateElement"},8339:function(t,n,e){e.r(n),e.d(n,{frontMatter:function(){return N},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return s},default:function(){return m}});var a=e(7462),r=e(3366),l=(e(7294),e(3905)),i=["components"],N={sidebar_position:1,title:"Operations Profile"},o=void 0,p={unversionedId:"Profiles/operations-profile",id:"Profiles/operations-profile",isDocsHomePage:!1,title:"Operations Profile",description:"Combining timelines",source:"@site/docs/Profiles/operations-profile.md",sourceDirName:"Profiles",slug:"/Profiles/operations-profile",permalink:"/argo-monitoring/docs/Profiles/operations-profile",version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"Operations Profile"},sidebar:"tutorialSidebar",previous:{title:"Terms",permalink:"/argo-monitoring/docs/Policies/Terms"},next:{title:"Aggregation Profile",permalink:"/argo-monitoring/docs/Profiles/aggregation-profile"}},s=[{value:"Combining timelines",id:"combining-timelines",children:[]},{value:"The use of operation profiles",id:"the-use-of-operation-profiles",children:[]},{value:"Default operation profile",id:"default-operation-profile",children:[]},{value:"Technical part",id:"technical-part",children:[]}],u={toc:s};function m(t){var n=t.components,N=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,N,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"combining-timelines"},"Combining timelines"),(0,l.kt)("p",null,"In many cases we need to provide results for top level items that are being monitored. For example if a database service is offered that relies on 2 different hosts, then we need to present a timeline with the status of the service offering itself during the day. To do that we need to combine appropriately the status timelines observed for the  hosts. There many ways to combine them but the usual cases are the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Service is deployed in a high availability fashion among hosts, so we need one of them to be ok for the general service offering to be working. In this case we say that the timelines are combined in an \u201cOR\u201d fashion. E.g. if host1 = OK , host2= CRITICAL the database service will be OK (see figure 1)")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Service is deployed in a distributed fashion among hosts, so all of them are needed to be in a working state so as the service to be considered in working state. In this case we say that the timelines are combined in an \u201cAND\u201d fashion. E.g. if host1 = OK, host2 = CRITICAL the service offered will be CRITICAL (see figure 2)"))),(0,l.kt)("p",null,"Figure 1: Service deployed in a high availability fashion\n",(0,l.kt)("img",{src:e(2948).Z})),(0,l.kt)("p",null,"Figure 2: Service deployed in a distributed fashion\n",(0,l.kt)("img",{src:e(8313).Z})),(0,l.kt)("h2",{id:"the-use-of-operation-profiles"},"The use of operation profiles"),(0,l.kt)("p",null,"Operations profiles are used in ARGO platform to declare ways in which the status timelines can be combined. Each operation profile is actually a configuration file in json format that consists of the following parts:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u0391 section to declare and enumerate all available statuses produced by monitoring checks. ARGO is agnostic on the names and number of statuses that can be produced by monitoring checks and they can be declared here. The default profile includes the usual array of statuses used in most monitoring systems (such as nagios) and that includes the following: OK, WARNING, CRITICAL, UNKNOWN, MISSING and DOWNTIME"),(0,l.kt)("li",{parentName:"ul"},"A section to define some default states. For example here we can define that OK state means a working state etc. "),(0,l.kt)("li",{parentName:"ul"},"A section to declare all the available ways (operations) that these statuses can be combined to produce a top result. Here we have a list of operation names mapped to truth tables that contain all the available combinations of statuses and the produced results (see table 1, table 2)")),(0,l.kt)("p",null,"Table 1 - the operations profile for AND operations is given in the following tabular:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"AND")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"OK")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"WARNING")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"UNKNOWN")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"MISSING")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"CRITICAL")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"DOWNTIME")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"MISSING"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"WARNING")),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"MISSING"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"UNKNOWN")),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"MISSING"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"MISSING")),(0,l.kt)("td",{parentName:"tr",align:null},"MISSING"),(0,l.kt)("td",{parentName:"tr",align:null},"MISSING"),(0,l.kt)("td",{parentName:"tr",align:null},"MISSING"),(0,l.kt)("td",{parentName:"tr",align:null},"MISSING"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CRITICAL")),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DOWNTIME")),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME")))),(0,l.kt)("p",null,"As can be seen the most prominent status in the case of the \u201cAND\u201d operation is the CRITICAL, while the least prominent is the \u201cOK\u201d status. "),(0,l.kt)("p",null,"Table 2 - the operations profile for \u201cOR\u201d operations is given in the following tabular:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"OR")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"OK")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"WARNING")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"UNKNOWN")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"MISSING")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"CRITICAL")),(0,l.kt)("th",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"th"},"DOWNTIME")))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"OK")),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"OK")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"WARNING")),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"UNKNOWN")),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"MISSING")),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"MISSING"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"CRITICAL")),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("strong",{parentName:"td"},"DOWNTIME")),(0,l.kt)("td",{parentName:"tr",align:null},"OK"),(0,l.kt)("td",{parentName:"tr",align:null},"WARNING"),(0,l.kt)("td",{parentName:"tr",align:null},"UNKNOWN"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME"),(0,l.kt)("td",{parentName:"tr",align:null},"CRITICAL"),(0,l.kt)("td",{parentName:"tr",align:null},"DOWNTIME")))),(0,l.kt)("p",null,"In the case of \u201cOR\u201d the most prominent status result is the \u201cOK\u201d. "),(0,l.kt)("h2",{id:"default-operation-profile"},"Default operation profile"),(0,l.kt)("p",null,"ARGO provides a default operation profile capable for being used in most monitoring requirements that includes 6 monitoring states: OK, WARNING, CRITICAL, UNKNOWN, MISSING, DOWNTIME and two available operations on combining them: OR and AND "),(0,l.kt)("p",null,"Below is the default operation profile used in JSON Format:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-json"},'{\n            "id": "profile_uuid",\n            "date": "2015-01-01",\n            "name": "profile_name",\n            "available_states": [\n                "OK",\n                "WARNING",\n                "UNKNOWN",\n                "MISSING",\n                "CRITICAL",\n                "DOWNTIME"\n            ],\n            "defaults": {\n                "down": "DOWNTIME",\n                "missing": "MISSING",\n                "unknown": "UNKNOWN"\n            },\n            "operations": [\n                {\n                    "name": "AND",\n                    "truth_table": [\n                        {\n                            "a": "OK",\n                            "b": "OK",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "WARNING",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "UNKNOWN",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "WARNING",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "UNKNOWN",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "UNKNOWN",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "CRITICAL",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "CRITICAL",\n                            "b": "DOWNTIME",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "DOWNTIME",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        }\n                    ]\n                },\n                {\n                    "name": "OR",\n                    "truth_table": [\n                        {\n                            "a": "OK",\n                            "b": "OK",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "WARNING",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "UNKNOWN",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "MISSING",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "CRITICAL",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "OK",\n                            "b": "DOWNTIME",\n                            "x": "OK"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "WARNING",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "UNKNOWN",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "MISSING",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "CRITICAL",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "WARNING",\n                            "b": "DOWNTIME",\n                            "x": "WARNING"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "UNKNOWN",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "MISSING",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "UNKNOWN",\n                            "b": "DOWNTIME",\n                            "x": "UNKNOWN"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "MISSING",\n                            "x": "MISSING"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "MISSING",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        },\n                        {\n                            "a": "CRITICAL",\n                            "b": "CRITICAL",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "CRITICAL",\n                            "b": "DOWNTIME",\n                            "x": "CRITICAL"\n                        },\n                        {\n                            "a": "DOWNTIME",\n                            "b": "DOWNTIME",\n                            "x": "DOWNTIME"\n                        }\n                    ]\n                }\n            ]\n        }\n')),(0,l.kt)("h2",{id:"technical-part"},"Technical part"),(0,l.kt)("p",null,"The connection of the Operations profiles with the other components of ARGO"),(0,l.kt)("p",null,"They are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"defined in POEM"),(0,l.kt)("li",{parentName:"ul"},"stored in ARGO Web API"),(0,l.kt)("li",{parentName:"ul"},"Used for the computations in the Analytics Engine")))}m.isMDXComponent=!0},2948:function(t,n,e){n.Z=e.p+"assets/images/service_example_ha-95ed727837b153df20a36e5e000efd0e.jpg"},8313:function(t,n,e){n.Z=e.p+"assets/images/service_example_hb-854090cf0063671e78f4493db801adfa.jpg"}}]);