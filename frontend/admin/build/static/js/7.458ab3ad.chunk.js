(this.webpackJsonpdemo3=this.webpackJsonpdemo3||[]).push([[7],{1043:function(e,t,a){"use strict";var n=a(64),r=a.n(n);var i=a(333);a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"c",(function(){return d}));var c=i.b.actions,l=function(e,t){return function(a){return a(c.startCall({callType:i.a.list})),t?function(e,t){return r.a.post("".concat("api/specifications","find/").concat(t),{queryParams:e})}(e,t).then((function(e){var t=e.data,n=t.totalCount,r=t.entities;a(c.specificationsFetched({totalCount:n,entities:r}))})).catch((function(e){e.clientMessage="Can't find specifications",a(c.catchError({error:e,callType:i.a.list}))})):a(c.specificationsFetched({totalCount:0,entities:null}))}},o=function(e){return function(t){return e?(t(c.startCall({callType:i.a.action})),(a=e,r.a.get("".concat("api/specifications","/").concat(a))).then((function(e){var a=e.data;t(c.specificationFetched({specificationForEdit:a}))})).catch((function(e){e.clientMessage="Can't find specification",t(c.catchError({error:e,callType:i.a.action}))}))):t(c.specificationFetched({specificationForEdit:void 0}));var a}},s=function(e){return function(t){return t(c.startCall({callType:i.a.action})),(a=e,r.a.delete("".concat("api/specifications","/").concat(a))).then((function(a){t(c.specificationDeleted({id:e}))})).catch((function(e){e.clientMessage="Can't delete specification",t(c.catchError({error:e,callType:i.a.action}))}));var a}},u=function(e){return function(t){return t(c.startCall({callType:i.a.action})),(a=e,r.a.post("api/specifications",{specification:a})).then((function(e){var a=e.data.specification;t(c.specificationCreated({specification:a}))})).catch((function(e){e.clientMessage="Can't create specification",t(c.catchError({error:e,callType:i.a.action}))}));var a}},m=function(e){return function(t){return t(c.startCall({callType:i.a.action})),function(e){return r.a.put("".concat("api/specifications","/").concat(e.id),{specification:e})}(e).then((function(){t(c.specificationUpdated({specification:e}))})).catch((function(e){e.clientMessage="Can't update specification",t(c.catchError({error:e,callType:i.a.action}))}))}},d=function(e){return function(t){return t(c.startCall({callType:i.a.action})),function(e){return r.a.post("".concat("api/specifications","/deleteSpecifications"),{ids:e})}(e).then((function(){t(c.specificationsDeleted({ids:e}))})).catch((function(e){e.clientMessage="Can't delete specifications",t(c.catchError({error:e,callType:i.a.action}))}))}}},1044:function(e,t,a){"use strict";var n=a(64),r=a.n(n);var i=a(332);a.d(t,"e",(function(){return l})),a.d(t,"d",(function(){return o})),a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return u})),a.d(t,"f",(function(){return m})),a.d(t,"c",(function(){return d}));var c=i.b.actions,l=function(e,t){return function(a){return a(c.startCall({callType:i.a.list})),t?function(e,t){return r.a.post("".concat("api/remarks","find/").concat(t),{queryParams:e})}(e,t).then((function(e){var t=e.data,n=t.totalCount,r=t.entities;a(c.remarksFetched({totalCount:n,entities:r}))})).catch((function(e){e.clientMessage="Can't find remarks",a(c.catchError({error:e,callType:i.a.list}))})):a(c.remarksFetched({totalCount:0,entities:null}))}},o=function(e){return function(t){return e?(t(c.startCall({callType:i.a.action})),(a=e,r.a.get("".concat("api/remarks","/").concat(a))).then((function(e){var a=e.data;t(c.remarkFetched({remarkForEdit:a}))})).catch((function(e){e.clientMessage="Can't find remark",t(c.catchError({error:e,callType:i.a.action}))}))):t(c.remarkFetched({remarkForEdit:void 0}));var a}},s=function(e){return function(t){return t(c.startCall({callType:i.a.action})),(a=e,r.a.delete("".concat("api/remarks","/").concat(a))).then((function(a){t(c.remarkDeleted({id:e}))})).catch((function(e){e.clientMessage="Can't delete remark",t(c.catchError({error:e,callType:i.a.action}))}));var a}},u=function(e){return function(t){return t(c.startCall({callType:i.a.action})),(a=e,r.a.post("api/remarks",{remark:a})).then((function(e){var a=e.data.remark;t(c.remarkCreated({remark:a}))})).catch((function(e){e.clientMessage="Can't create remark",t(c.catchError({error:e,callType:i.a.action}))}));var a}},m=function(e){return function(t){return t(c.startCall({callType:i.a.action})),function(e){return r.a.put("".concat("api/remarks","/").concat(e.id),{remark:e})}(e).then((function(){t(c.remarkUpdated({remark:e}))})).catch((function(e){e.clientMessage="Can't update remark",t(c.catchError({error:e,callType:i.a.action}))}))}},d=function(e){return function(t){return t(c.startCall({callType:i.a.action})),function(e){return r.a.post("".concat("api/remarks","/deleteRemarks"),{ids:e})}(e).then((function(){console.log("delete return"),t(c.remarksDeleted({ids:e}))})).catch((function(e){e.clientMessage="Can't delete remarks",t(c.catchError({error:e,callType:i.a.action}))}))}}},1117:function(e,t,a){"use strict";var n=a(22),r=a(2),i=a(0),c=(a(8),a(17)),l=a(57),o=[0,1,2,3,4,5,6,7,8,9,10],s=["auto",!0,1,2,3,4,5,6,7,8,9,10,11,12];function u(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return"".concat(a/t).concat(String(e).replace(String(a),"")||"px")}var m=i.forwardRef((function(e,t){var a=e.alignContent,l=void 0===a?"stretch":a,o=e.alignItems,s=void 0===o?"stretch":o,u=e.classes,m=e.className,d=e.component,f=void 0===d?"div":d,p=e.container,E=void 0!==p&&p,b=e.direction,g=void 0===b?"row":b,v=e.item,y=void 0!==v&&v,h=e.justify,q=void 0===h?"flex-start":h,C=e.lg,N=void 0!==C&&C,j=e.md,x=void 0!==j&&j,O=e.sm,w=void 0!==O&&O,k=e.spacing,_=void 0===k?0:k,S=e.wrap,P=void 0===S?"wrap":S,D=e.xl,F=void 0!==D&&D,T=e.xs,L=void 0!==T&&T,M=e.zeroMinWidth,I=void 0!==M&&M,z=Object(n.a)(e,["alignContent","alignItems","classes","className","component","container","direction","item","justify","lg","md","sm","spacing","wrap","xl","xs","zeroMinWidth"]),B=Object(c.a)(u.root,m,E&&[u.container,0!==_&&u["spacing-xs-".concat(String(_))]],y&&u.item,I&&u.zeroMinWidth,"row"!==g&&u["direction-xs-".concat(String(g))],"wrap"!==P&&u["wrap-xs-".concat(String(P))],"stretch"!==s&&u["align-items-xs-".concat(String(s))],"stretch"!==l&&u["align-content-xs-".concat(String(l))],"flex-start"!==q&&u["justify-xs-".concat(String(q))],!1!==L&&u["grid-xs-".concat(String(L))],!1!==w&&u["grid-sm-".concat(String(w))],!1!==x&&u["grid-md-".concat(String(x))],!1!==N&&u["grid-lg-".concat(String(N))],!1!==F&&u["grid-xl-".concat(String(F))]);return i.createElement(f,Object(r.a)({className:B,ref:t},z))})),d=Object(l.a)((function(e){return Object(r.a)(Object(r.a)({root:{},container:{boxSizing:"border-box",display:"flex",flexWrap:"wrap",width:"100%"},item:{boxSizing:"border-box",margin:"0"},zeroMinWidth:{minWidth:0},"direction-xs-column":{flexDirection:"column"},"direction-xs-column-reverse":{flexDirection:"column-reverse"},"direction-xs-row-reverse":{flexDirection:"row-reverse"},"wrap-xs-nowrap":{flexWrap:"nowrap"},"wrap-xs-wrap-reverse":{flexWrap:"wrap-reverse"},"align-items-xs-center":{alignItems:"center"},"align-items-xs-flex-start":{alignItems:"flex-start"},"align-items-xs-flex-end":{alignItems:"flex-end"},"align-items-xs-baseline":{alignItems:"baseline"},"align-content-xs-center":{alignContent:"center"},"align-content-xs-flex-start":{alignContent:"flex-start"},"align-content-xs-flex-end":{alignContent:"flex-end"},"align-content-xs-space-between":{alignContent:"space-between"},"align-content-xs-space-around":{alignContent:"space-around"},"justify-xs-center":{justifyContent:"center"},"justify-xs-flex-end":{justifyContent:"flex-end"},"justify-xs-space-between":{justifyContent:"space-between"},"justify-xs-space-around":{justifyContent:"space-around"},"justify-xs-space-evenly":{justifyContent:"space-evenly"}},function(e,t){var a={};return o.forEach((function(n){var r=e.spacing(n);0!==r&&(a["spacing-".concat(t,"-").concat(n)]={margin:"-".concat(u(r,2)),width:"calc(100% + ".concat(u(r),")"),"& > $item":{padding:u(r,2)}})})),a}(e,"xs")),e.breakpoints.keys.reduce((function(t,a){return function(e,t,a){var n={};s.forEach((function(e){var t="grid-".concat(a,"-").concat(e);if(!0!==e)if("auto"!==e){var r="".concat(Math.round(e/12*1e8)/1e6,"%");n[t]={flexBasis:r,flexGrow:0,maxWidth:r}}else n[t]={flexBasis:"auto",flexGrow:0,maxWidth:"none"};else n[t]={flexBasis:0,flexGrow:1,maxWidth:"100%"}})),"xs"===a?Object(r.a)(e,n):e[t.breakpoints.up(a)]=n}(t,e,a),t}),{}))}),{name:"MuiGrid"})(m);t.a=d},1233:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(132),c=a(29),l=a(152);function o(){var e=Object(c.e)((function(e){return{isLoading:e.enquiries.listLoading}}),c.c).isLoading;return Object(n.useEffect)((function(){}),[e]),r.a.createElement(l.g,{isLoading:e,text:"Loading ..."})}var s=a(1216),u=a(30),m=a(64),d=a.n(m),f=a(11),p=f.b+"enquiry";var E=a(418),b=E.b.actions,g=function(e){return function(t){return t(b.startCall({callType:E.a.list})),function(e){var t=e.pageNumber,a=e.filter;return d.a.get(p,{params:Object(u.a)(Object(u.a)({},a),{},{page:t})})}(e).then((function(e){var a=e.data,n=a.count,r=a.results,i=a.next,c=null;i&&(c=new URL(i).searchParams.get("page"));t(b.enquiriesFetched({count:n,results:r,pageNumber:c}))})).catch((function(e){return e.clientMessage="Can't find enquiries",t(b.catchError({error:e,callType:E.a.list}))}))}},v=function(e){return function(t){return e?(t(b.startCall({callType:E.a.action})),(a=e,d.a.get("".concat(p,"/").concat(a))).then((function(e){var a=Object(u.a)(Object(u.a)({},e.data),{},{supplier:e.data.supplier?e.data.supplier.id:"",enquiry_manufacturer:e.data.enquiry_manufacturer?e.data.enquiry_manufacturer.id:"",enquiry_category:e.data.enquiry_category?e.data.enquiry_category.id:""});t(b.enquiryFetched({enquiryForEdit:a}))})).catch((function(e){return e.clientMessage="Can't find enquiry",t(b.catchError({error:e,callType:E.a.action}))}))):t(b.enquiryFetched({enquiryForEdit:void 0}));var a}},y=function(e){return function(t){return t(b.startCall({callType:E.a.action})),(a=e,d.a.delete("".concat(p,"/").concat(a))).then((function(a){t(b.enquiryDeleted({id:e}))})).catch((function(e){return e.clientMessage="Can't delete enquiry",t(b.catchError({error:e,callType:E.a.action}))}));var a}},h=function(e){return function(t){return t(b.startCall({callType:E.a.action})),(a=e,d.a.post(p+"/",Object(u.a)({},a))).then((function(e){var a=e.data;t(b.enquiryCreated({enquiry:a}))})).catch((function(e){return e.clientMessage="Can't create enquiry",t(b.catchError({error:e,callType:E.a.action}))}));var a}},q=function(e){return function(t){return t(b.startCall({callType:E.a.action})),console.log("proudct",e),function(e){return d.a.put("".concat(p,"/").concat(e.id,"/"),Object(u.a)({},e))}(e).then((function(){t(b.enquiryUpdated({enquiry:e}))})).catch((function(e){return e.clientMessage="Can't update enquiry",t(b.catchError({error:e,callType:E.a.action}))}))}},C=function(e,t){return function(a){return a(b.startCall({callType:E.a.action})),function(e,t){return d.a.post("".concat(p,"/updateStatusForEnquiries"),{ids:e,status:t})}(e,t).then((function(){a(b.enquiriesStatusUpdated({ids:e,status:t}))})).catch((function(e){return e.clientMessage="Can't update enquiries status",a(b.catchError({error:e,callType:E.a.action}))}))}},N=function(e){return function(t){return t(b.startCall({callType:E.a.action})),function(e){return d.a.post("".concat(p,"/delete-all/"),{ids:e})}(e).then((function(){t(b.enquiriesDeleted({ids:e}))})).catch((function(e){return e.clientMessage="Can't delete enquiries",t(b.catchError({error:e,callType:E.a.action}))}))}},j=a(13),x=a(71),O=["danger","success","warning",""],w=["CANCELLED","FULFILLED","IN PROGRESS"],k=["NE","NS","SV","AR","FN","US","RP"],_=["YES","NO"],S=["CM","BOX","KG"],P=[{dataField:"id",order:"asc"}],D=[{text:"10",value:10},{text:"25",value:25},{text:"50",value:50}],F={filter:{model:"",manufacture:"",VINCode:""},sortOrder:"asc",sortField:"VINCode",pageNumber:1,pageSize:10},T=Object(n.createContext)();function L(){return Object(n.useContext)(T)}T.Consumer;function M(e){var t=e.enquiriesUIEvents,a=e.children,i=Object(n.useState)(F),c=Object(j.a)(i,2),l=c[0],o=c[1],s=Object(n.useState)([]),u=Object(j.a)(s,2),m=u[0],d=u[1],f=Object(n.useCallback)((function(e){o((function(t){return Object(x.isFunction)(e)&&(e=e(t)),Object(x.isEqual)(t,e)?t:e}))}),[]),p={queryParams:l,setQueryParamsBase:o,ids:m,setIds:d,setQueryParams:f,newEnquiryButtonClick:t.newEnquiryButtonClick,openViewEnquiryPage:t.openViewEnquiryPage,openEditEnquiryPage:t.openEditEnquiryPage,openDeleteEnquiryDialog:t.openDeleteEnquiryDialog,openDeleteEnquiriesDialog:t.openDeleteEnquiriesDialog,openFetchEnquiriesDialog:t.openFetchEnquiriesDialog,openUpdateEnquiriesStatusDialog:t.openUpdateEnquiriesStatusDialog};return r.a.createElement(T.Provider,{value:p},a)}function I(e){var t=e.id,a=e.show,i=e.onHide,o=L(),u=Object(n.useMemo)((function(){return{setIds:o.setIds,queryParams:o.queryParams}}),[o]),m=Object(c.d)(),d=Object(c.e)((function(e){return{isLoading:e.enquiries.actionsLoading}}),c.c).isLoading;Object(n.useEffect)((function(){t||i()}),[t]),Object(n.useEffect)((function(){}),[d,m]);return r.a.createElement(s.a,{show:a,onHide:i,"aria-labelledby":"example-modal-sizes-title-lg"},d&&r.a.createElement(l.h,{variant:"query"}),r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,{id:"example-modal-sizes-title-lg"},"Enquiry Delete")),r.a.createElement(s.a.Body,null,!d&&r.a.createElement("span",null,"Are you sure to permanently delete this enquiry?"),d&&r.a.createElement("span",null,"Enquiry is deleting...")),r.a.createElement(s.a.Footer,null,r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:i,className:"btn btn-light btn-elevate"},"Cancel"),r.a.createElement(r.a.Fragment,null," "),r.a.createElement("button",{type:"button",onClick:function(){m(y(t)).then((function(){m(g(u.queryParams)),u.setIds([]),i()}))},className:"btn btn-danger btn-elevate"},"Delete"))))}function z(e){var t=e.show,a=e.onHide,i=L(),o=Object(n.useMemo)((function(){return{ids:i.ids,setIds:i.setIds,queryParams:i.queryParams}}),[i]),u=Object(c.d)(),m=Object(c.e)((function(e){return{isLoading:e.enquiries.actionsLoading}}),c.c).isLoading;Object(n.useEffect)((function(){}),[m,u]),Object(n.useEffect)((function(){o.ids&&0!==o.ids.length||a()}),[o.ids]);return r.a.createElement(s.a,{show:t,onHide:a,"aria-labelledby":"example-modal-sizes-title-lg"},m&&r.a.createElement(l.h,null),r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,{id:"example-modal-sizes-title-lg"},"Enquiries Delete")),r.a.createElement(s.a.Body,null,!m&&r.a.createElement("span",null,"Are you sure to permanently delete selected enquiries?"),m&&r.a.createElement("span",null,"Enquiries are deleting...")),r.a.createElement(s.a.Footer,null,r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:a,className:"btn btn-light btn-elevate"},"Cancel"),r.a.createElement(r.a.Fragment,null," "),r.a.createElement("button",{type:"button",onClick:function(){u(N(o.ids)).then((function(){u(g(o.queryParams)).then((function(){o.setIds([]),a()}))}))},className:"btn btn-danger btn-elevate"},"Delete"))))}var B=function(e,t){var a=[];return t.forEach((function(t){var n=e.find((function(e){return e.id===t}));n&&a.push(n)})),a};function U(e){var t=e.show,a=e.onHide,i=L(),l=Object(n.useMemo)((function(){return{ids:i.ids,queryParams:i.queryParams}}),[i]),o=Object(c.e)((function(e){return{enquiries:B(e.enquiries.entities,l.ids)}}),c.c).enquiries;return Object(n.useEffect)((function(){l.ids&&0!==l.ids.length||a()}),[l.ids]),r.a.createElement(s.a,{show:t,onHide:a,"aria-labelledby":"example-modal-sizes-title-lg"},r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,{id:"example-modal-sizes-title-lg"},"Fetch selected elements")),r.a.createElement(s.a.Body,null,r.a.createElement("div",{className:"list-timeline list-timeline-skin-light padding-30"},r.a.createElement("div",{className:"list-timeline-items"},o.map((function(e){return r.a.createElement("div",{className:"list-timeline-item mb-3",key:e.id},r.a.createElement("span",{className:"list-timeline-text"},r.a.createElement("span",{className:"label label-lg label-light-".concat(O[e.status]," label-inline"),style:{width:"60px"}},"ID: ",e.id)," ",r.a.createElement("span",{className:"ml-5"},e.manufacture,", ",e.model)))}))))),r.a.createElement(s.a.Footer,null,r.a.createElement("div",null,r.a.createElement("button",{type:"button",onClick:a,className:"btn btn-light btn-elevate"},"Cancel"),r.a.createElement(r.a.Fragment,null," "),r.a.createElement("button",{type:"button",onClick:a,className:"btn btn-info btn-elevate"},"Ok"))))}var V=function(e,t){var a=[];return t.forEach((function(t){var n=e.find((function(e){return e.id===t}));n&&a.push(n)})),a};function H(e){var t=e.show,a=e.onHide,i=L(),l=Object(n.useMemo)((function(){return{ids:i.ids,setIds:i.setIds,queryParams:i.queryParams}}),[i]),o=Object(c.e)((function(e){return{enquiries:V(e.enquiries.entities,l.ids),isLoading:e.enquiries.actionsLoading}}),c.c),u=o.enquiries,m=o.isLoading;Object(n.useEffect)((function(){(l.ids||0===l.ids.length)&&a()}),[l.ids]);var d=Object(n.useState)(0),f=Object(j.a)(d,2),p=f[0],E=f[1],b=Object(c.d)();return r.a.createElement(s.a,{show:t,onHide:a,"aria-labelledby":"example-modal-sizes-title-lg"},r.a.createElement(s.a.Header,{closeButton:!0},r.a.createElement(s.a.Title,{id:"example-modal-sizes-title-lg"},"Status has been updated for selected enquiries")),r.a.createElement(s.a.Body,{className:"overlay overlay-block cursor-default"},m&&r.a.createElement("div",{className:"overlay-layer bg-transparent"},r.a.createElement("div",{className:"spinner spinner-lg spinner-warning"})),r.a.createElement("div",{className:"list-timeline list-timeline-skin-light padding-30"},r.a.createElement("div",{className:"list-timeline-items"},u.map((function(e){return r.a.createElement("div",{className:"list-timeline-item mb-3",key:e.id},r.a.createElement("span",{className:"list-timeline-text"},r.a.createElement("span",{className:"label label-lg label-light-".concat(O[e.status]," label-inline"),style:{width:"60px"}},"ID: ",e.id)," ",r.a.createElement("span",{className:"ml-5"},e.manufacture,", ",e.model)))}))))),r.a.createElement(s.a.Footer,{className:"form"},r.a.createElement("div",{className:"form-group"},r.a.createElement("select",{className:"form-control ".concat(O[p]),value:p,onChange:function(e){return E(+e.target.value)}},r.a.createElement("option",{value:"0"},"Selling"),r.a.createElement("option",{value:"1"},"Sold"))),r.a.createElement("div",{className:"form-group"},r.a.createElement("button",{type:"button",onClick:a,className:"btn btn-light btn-elevate"},"Cancel"),r.a.createElement(r.a.Fragment,null," "),r.a.createElement("button",{type:"button",onClick:function(){b(C(l.ids,p)).then((function(){b(g(l.queryParams)).then((function(){l.setIds([]),a()}))}))},className:"btn btn-info btn-elevate"},"Update Status"))))}var R=a(51);function A(e){e.listLoading;var t=L(),a=Object(n.useMemo)((function(){return{setQueryParams:t.setQueryParams,queryParams:t.queryParams}}),[t]),i=function(e){var t=function(e,t){var a=t.searchText,n=t.status,r=Object(u.a)({},e),i={};return i.search=a,i.status=n||void 0,r.filter=i,r}(a.queryParams,e);Object(x.isEqual)(t,a.queryParams)||(t.pageNumber=1,a.setQueryParams(t))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.c,{initialValues:{searchText:"",status:""},onSubmit:function(e){i(e)}},(function(e){var t=e.values,a=e.handleSubmit,n=e.handleBlur,i=(e.handleChange,e.setFieldValue);return r.a.createElement("form",{onSubmit:a,className:"form form-label-right"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("input",{type:"text",className:"form-control",name:"searchText",placeholder:"Search",onBlur:n,value:t.searchText,onChange:function(e){i("searchText",e.target.value),a()}}),r.a.createElement("small",{className:"form-text text-muted"},r.a.createElement("b",null,"Search")," in all fields")),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("select",{className:"form-control",name:"status",placeholder:"Filter by Status",onChange:function(e){i("status",e.target.value),a()},onBlur:n,value:t.status},r.a.createElement("option",{value:""},"All"),r.a.createElement("option",{value:"FULFILLED"},"FULFILLED"),r.a.createElement("option",{value:"IN PROGRESS"},"IN PROGRESS"),r.a.createElement("option",{value:"CANCELLED"},"CANCELLED")),r.a.createElement("small",{className:"form-text text-muted"},r.a.createElement("b",null,"Filter")," by Status"))))})))}var Q=a(1046),W=a.n(Q),G=a(331),J=a.n(G),K=a(7),X=function(e,t){return r.a.createElement("span",{className:"label label-lg label-light-".concat(O["CANCELLED"==t.status?0:"FULFILLED"==t.status?1:2]," label-inline")},t.status)},Y=a(1035),$=a(1024),Z=a(12),ee=a.n(Z),te=function(e,t,a,n){var i=n.openViewEnquiryPage,c=n.openDeleteEnquiryDialog;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Y.a,{overlay:r.a.createElement($.a,{id:"inquiries-view-tooltip"},"View Inquiry")},r.a.createElement("a",{className:"btn btn-icon btn-light btn-hover-info btn-sm",onClick:function(){return i(t.id)}},r.a.createElement("span",{className:"svg-icon svg-icon-md svg-icon-info"},r.a.createElement("i",{className:"text-info fa fa-eye"}))))," ",r.a.createElement(Y.a,{overlay:r.a.createElement($.a,{id:"enquiries-delete-tooltip"},"Delete enquiry")},r.a.createElement("a",{className:"btn btn-icon btn-light btn-hover-danger btn-sm",onClick:function(){return c(t.id)}},r.a.createElement("span",{className:"svg-icon svg-icon-md svg-icon-danger"},r.a.createElement(ee.a,{src:Object(K.h)("/static/media/svg/icons/General/Trash.svg")})))))},ae=function(e,t){return r.a.createElement(r.a.Fragment,null,Object(f.e)(t.created_at))},ne=function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("a",{href:"mailto:"+t.email_address},t.email_address))};function re(){var e=L(),t=Object(n.useMemo)((function(){return{ids:e.ids,setIds:e.setIds,queryParams:e.queryParams,setQueryParams:e.setQueryParams,openViewEnquiryPage:e.openViewEnquiryPage,openDeleteEnquiryDialog:e.openDeleteEnquiryDialog}}),[e]),a=Object(c.e)((function(e){return{currentState:e.enquiries}}),c.c).currentState,i=a.totalCount,o=a.entities,s=a.listLoading,m=a.pageNumber,d=Object(c.d)();Object(n.useEffect)((function(){t.setIds([]),d(g(t.queryParams))}),[t.queryParams,d]);var f=[{dataField:"email_address",text:"Email",sort:!0,sortCaret:K.g,formatter:ne},{dataField:"phone_number",text:"Phone Number",sort:!0,sortCaret:K.g},{dataField:"status",text:"Status",sort:!0,sortCaret:K.g,formatter:X},{dataField:"part_number.part_number",text:"Part Number",sort:!0,sortCaret:K.g},{dataField:"company.company_name",text:"Company",sort:!0,sortCaret:K.g},{dataField:"country.name",text:"Country",sort:!0,sortCaret:K.g},{dataField:"created_at",text:"Date",sort:!0,sortCaret:K.g,formatter:ae},{dataField:"action",text:"Actions",formatter:te,formatExtraData:{openViewEnquiryPage:t.openViewEnquiryPage,openDeleteEnquiryDialog:t.openDeleteEnquiryDialog},classes:"text-right pr-0",headerClasses:"text-right pr-3",style:{minWidth:"100px"}}],p={custom:!0,totalSize:i,sizePerPageList:D,sizePerPage:t.queryParams.pageSize,page:m,onPageChange:function(e,a){console.log("enquiriesUIProps.queryParams",t.queryParams),t.setQueryParams(Object(u.a)(Object(u.a)({},t.queryParams),{},{pageNumber:m})),console.log("page",e),console.log("sizePerPage",a)},onSizePerPageChange:function(e,t){console.log("page",e),console.log("sizePerPage",t)}};return r.a.createElement(r.a.Fragment,null,r.a.createElement(G.PaginationProvider,{pagination:J()(p)},(function(e){var a=e.paginationProps,n=e.paginationTableProps;return r.a.createElement(l.i,{isLoading:s,paginationProps:a},r.a.createElement(W.a,Object.assign({wrapperClasses:"table-responsive",classes:"table table-head-custom table-vertical-center overflow-hidden",bootstrap4:!0,bordered:!1,remote:!0,keyField:"id",data:o,columns:f,defaultSorted:P,onTableChange:Object(K.c)(t.setQueryParams),selectRow:Object(K.f)({entities:o,ids:t.ids,setIds:t.setIds})},n),r.a.createElement(K.b,{entities:o}),r.a.createElement(K.a,{entities:o})))})))}function ie(){var e=L(),t=Object(n.useMemo)((function(){return{ids:e.ids,setIds:e.setIds,openDeleteEnquiriesDialog:e.openDeleteEnquiriesDialog,openFetchEnquiriesDialog:e.openFetchEnquiriesDialog,openUpdateEnquiriesStatusDialog:e.openUpdateEnquiriesStatusDialog}}),[e]);return r.a.createElement("div",{className:"form"},r.a.createElement("div",{className:"row align-items-center form-group-actions margin-top-20 margin-bottom-20"},r.a.createElement("div",{className:"col-xl-12"},r.a.createElement("div",{className:"form-group form-group-inline"},r.a.createElement("div",{className:"form-label form-label-no-wrap"},r.a.createElement("label",{className:"-font-bold font-danger-"},r.a.createElement("span",null,"Selected records count: ",r.a.createElement("b",null,t.ids.length)))),r.a.createElement("div",null,r.a.createElement("button",{type:"button",className:"btn btn-danger font-weight-bolder font-size-sm",onClick:t.openDeleteEnquiriesDialog},r.a.createElement("i",{className:"fa fa-trash"})," Delete All"))))))}function ce(){var e=L(),t=Object(n.useMemo)((function(){return{ids:e.ids,queryParams:e.queryParams,setQueryParams:e.setQueryParams,newEnquiryButtonClick:e.newEnquiryButtonClick,openDeleteEnquiriesDialog:e.openDeleteEnquiriesDialog,openEditEnquiryPage:e.openEditEnquiryPage,openViewEnquiryPage:e.openViewEnquiryPage,openUpdateEnquiriesStatusDialog:e.openUpdateEnquiriesStatusDialog,openFetchEnquiriesDialog:e.openFetchEnquiriesDialog}}),[e]);return r.a.createElement(l.a,null,r.a.createElement(l.c,{title:"Orders"}),r.a.createElement(l.b,null,r.a.createElement(A,null),t.ids.length>0&&r.a.createElement(r.a.Fragment,null,r.a.createElement(ie,null)),r.a.createElement(re,null)))}function le(e){var t=e.history,a={newEnquiryButtonClick:function(){t.push("/".concat(f.a,"/orders/new"))},openEditEnquiryPage:function(e){t.push("/".concat(f.a,"/orders/").concat(e,"/edit"))},openViewEnquiryPage:function(e){t.push("/".concat(f.a,"/orders/").concat(e,"/view"))},openDeleteEnquiryDialog:function(e){t.push("/".concat(f.a,"/orders/").concat(e,"/delete"))},openDeleteEnquiriesDialog:function(){t.push("/".concat(f.a,"/orders/deleteEnquiries"))},openFetchEnquiriesDialog:function(){t.push("/".concat(f.a,"/orders/fetch"))},openUpdateEnquiriesStatusDialog:function(){t.push("/"+f.a+"/orders/updateStatus")}};return r.a.createElement(M,{enquiriesUIEvents:a},r.a.createElement(o,null),r.a.createElement(i.b,{path:"/"+f.a+"/orders/deleteEnquiries"},(function(e){var t=e.history,a=e.match;return r.a.createElement(z,{show:null!=a,onHide:function(){t.push("/"+f.a+"/orders")}})})),r.a.createElement(i.b,{path:"/"+f.a+"/orders/:id/delete"},(function(e){var t=e.history,a=e.match;return r.a.createElement(I,{show:null!=a,id:a&&a.params.id,onHide:function(){t.push("/"+f.a+"/orders")}})})),r.a.createElement(i.b,{path:"/"+f.a+"/orders/fetch"},(function(e){var t=e.history,a=e.match;return r.a.createElement(U,{show:null!=a,onHide:function(){t.push("/"+f.a+"/orders")}})})),r.a.createElement(i.b,{path:"/"+f.a+"/orders/updateStatus"},(function(e){var t=e.history,a=e.match;return r.a.createElement(H,{show:null!=a,onHide:function(){t.push("/"+f.a+"/orders")}})})),r.a.createElement(ce,null))}var oe=a(62),se=a(45),ue=a(28),me=a(1050),de=a(1051),fe=Object(de.b)(me.a),pe=ue.d().shape({part_number:ue.f().min(2,"Minimum 2 symbols").max(50,"Maximum 50 symbols").required("Part number is required"),alt_part_number:ue.f().min(2,"Minimum 2 symbols").max(50,"Maximum 50 symbols").required("Alt part number is required")});function Ee(e){var t=e.enquiry,a=e.btnRef,i=e.saveEnquiry,c=Object(n.useState)([]),o=Object(j.a)(c,2),s=o[0],u=o[1],m=Object(n.useState)([]),d=Object(j.a)(m,2),p=d[0],E=d[1],b=Object(n.useState)([]),g=Object(j.a)(b,2),v=g[0],y=g[1],h=Object(n.useState)(!1),q=Object(j.a)(h,2),C=q[0],N=q[1];function x(e){Object(f.i)("enquiry-category",{name:e}).then((function(e){u([].concat(Object(se.a)(s),[{label:e.name,value:e.id}]))}))}function O(e){Object(f.i)("manufacturer",{name:e}).then((function(e){u([].concat(Object(se.a)(p),[{label:e.name,value:e.id}]))}))}return Object(n.useEffect)((function(){Object(f.i)("oas-models",{models:{Manufacturer:{},Supplier:{},EnquiryCategory:{}}}).then((function(e){var t=function(t){e.data[t].map((function(a,n){e.data[t][n].label=a.name?a.name:a.company_name,e.data[t][n].value=a.id}))};for(var a in e.data)t(a);u(e.data.EnquiryCategory),E(e.data.Manufacturer),y(e.data.Supplier),N(!0)}))}),[]),r.a.createElement(r.a.Fragment,null,r.a.createElement(R.c,{enableReinitialize:!0,initialValues:t,validationSchema:pe,onSubmit:function(e){i(e)}},(function(e){var t=e.handleSubmit;return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.b,{className:"form form-label-right"},r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(R.a,{name:"part_number",component:l.f,placeholder:"e.g AB123",label:"Part Number"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(R.a,{name:"alt_part_number",component:l.f,placeholder:"e.g AB123",label:"Alternative Part Number"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("label",null,"Select Category"),r.a.createElement(fe,{debounceTimeout:C?0:f.c,name:"enquiry_category",onCreateOption:x,isClearable:!0,loadOptions:function(e,t){return Object(f.g)(e,t,s,C)}}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("label",null,"Select Manufacturer"),r.a.createElement(fe,{debounceTimeout:C?0:f.c,isClearable:!0,name:"enquiry_manufacturer",onCreateOption:O,loadOptions:function(e,t){return Object(f.g)(e,t,p,C)}})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement("label",null,"Select Supplier"),r.a.createElement(de.a,{debounceTimeout:C?0:f.c,isClearable:!0,name:"supplier",loadOptions:function(e,t){return Object(f.g)(e,t,v,C)}})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(l.j,{name:"condition",label:"Condition"},k.map((function(e,t){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(R.a,{name:"quantity",component:l.f,placeholder:"Default 0",label:"Quantity"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(R.a,{name:"tag_date",component:l.f,placeholder:"",label:"Tag Date"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(R.a,{name:"turn_around_time",component:l.f,placeholder:"",label:"Turn around time"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(l.j,{name:"hazmat",label:"Hazmat"},_.map((function(e,t){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(R.a,{name:"certification",component:l.f,placeholder:"",label:"Certification"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(l.j,{name:"unit_of_measure",label:"Unit of measure"},S.map((function(e,t){return r.a.createElement("option",{key:e,value:e},e)}))))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(R.a,{name:"unit_price",component:l.f,placeholder:"",label:"Unit price"})),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(l.j,{name:"hot_sale_item",label:"Hot sale item"},_.map((function(e,t){return r.a.createElement("option",{key:e,value:e},e)})))),r.a.createElement("div",{className:"col-lg-4"},r.a.createElement(l.j,{name:"status",label:"Status"},w.map((function(e,t){return r.a.createElement("option",{key:e,value:t},e)}))))),r.a.createElement("div",{className:"form-group"},r.a.createElement("label",null,"Description"),r.a.createElement(R.a,{name:"description",as:"textarea",className:"form-control"})),r.a.createElement("button",{type:"submit",style:{display:"none"},ref:a,onSubmit:function(){return t()}})))})))}var be=Object(n.createContext)();be.Consumer;a(1043);ue.d().shape({value:ue.f().min(2,"Minimum 2 symbols").max(50,"Maximum 50 symbols").required("Value is required"),specId:ue.c().required("Specification type is required")});var ge=a(19),ve=Object(n.createContext)();ve.Consumer;a(1044);ue.d().shape({text:ue.f().min(2,"Minimum 2 symbols").max(50,"Maximum 50 symbols").required("Text is required"),type:ue.c().required("Type is required"),dueDate:ue.b().nullable(!1).required("Due date is required")});var ye=a(1240),he=a(1029),qe=a(1239),Ce=a(1227),Ne=a(275),je=a(1228),xe=a(17),Oe=a(1223),we=a(1224),ke=a(1225),_e=a(1226),Se=a(1229),Pe=(Oe.a,we.a,ke.a,_e.a,Object(Ce.a)((function(e){return{success:{backgroundColor:Ne.a[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.main},warning:{backgroundColor:je.a[700]},icon:{fontSize:20},iconVariant:{opacity:.9,marginRight:e.spacing(1)},message:{display:"flex",alignItems:"center"}}})));function De(e){var t=Pe(),a=e.className,n=e.message,i=e.onClose,c=e.variant,l=Object(oe.a)(e,["className","message","onClose","variant"]);return r.a.createElement(ye.a,Object.assign({className:Object(xe.a)(t[c],a),"aria-describedby":"client-snackbar",message:r.a.createElement("span",{id:"client-snackbar",className:t.message},n),action:[r.a.createElement(he.a,{key:"close","aria-label":"close",color:"inherit",onClick:i},r.a.createElement(Se.a,{className:t.icon}))]},l))}var Fe={id:void 0,condition:"",enquiry_manufacturer:"",supplier:"",enquiry_category:"",part_number:"",alt_part_number:"",description:"",tag_date:"2021-12-12",status:0,hazmat:"",unit_price:0,unit_of_measure:"",quantity:0,turn_around_time:"",hot_sale_item:"",certification:""};function Te(e){var t=e.history,a=e.match.params.id,i=Object(ge.k)(),o=Object(n.useState)("basic"),s=Object(j.a)(o,2),u=(s[0],s[1],Object(n.useState)("")),m=Object(j.a)(u,2),d=m[0],p=m[1],E=Object(n.useState)(""),b=Object(j.a)(E,2),g=b[0],y=b[1],C=Object(n.useState)("success"),N=Object(j.a)(C,2),x=N[0],O=N[1],w=Object(n.useState)(!1),k=Object(j.a)(w,2),_=k[0],S=k[1],P=Object(c.d)(),D=Object(c.e)((function(e){return{actionsLoading:e.enquiries.actionsLoading,enquiryForEdit:e.enquiries.enquiryForEdit}}),c.c),F=D.actionsLoading,T=D.enquiryForEdit;Object(n.useEffect)((function(){P(v(a))}),[a,P]),Object(n.useEffect)((function(){var e=a?"":"New Enquiry";T&&a&&(e="Edit enquiry - ".concat(T.part_number)),p(e),i.setTitle(e)}),[T,a]);var L=Object(n.useRef)(),M=function(){t.push("/".concat(f.a,"/orders"))},I=function(e,t){S(!1)};return r.a.createElement(l.a,null,F&&r.a.createElement(l.h,null),r.a.createElement(l.c,{title:d},r.a.createElement(l.d,null,r.a.createElement("button",{type:"button",onClick:M,className:"btn btn-light"},r.a.createElement("i",{className:"fa fa-arrow-left"}),"Back"),"  ",r.a.createElement("button",{className:"btn btn-light ml-2"},r.a.createElement("i",{className:"fa fa-redo"}),"Reset"),"  ",r.a.createElement("button",{type:"submit",className:"btn btn-info ml-2",onClick:function(){L&&L.current&&L.current.click()}},"Save"))),r.a.createElement(l.b,null,r.a.createElement("div",{className:"mt-5"},r.a.createElement(Ee,{actionsLoading:F,enquiry:T||Fe,btnRef:L,saveEnquiry:function(e){console.log("values",e),a?P(q(e)).then((function(e){e?(S(!0),y("Can't update order"),O("error")):M()})):P(h(e)).then((function(e){e?(S(!0),y("Can't create order"),O("error")):M()}))}}),r.a.createElement(qe.a,{anchorOrigin:{vertical:"top",horizontal:"right"},open:_,autoHideDuration:3e3,onClose:I},r.a.createElement(De,{onClose:I,variant:x,message:g})))))}var Le=a(1117);function Me(e){var t,a,i=e.history,o=e.match.params.id,s=Object(ge.k)(),u=Object(n.useState)("basic"),m=Object(j.a)(u,2),d=(m[0],m[1],Object(n.useState)("")),p=Object(j.a)(d,2),E=p[0],b=p[1],g=Object(c.d)(),y=Object(c.e)((function(e){return{actionsLoading:e.enquiries.actionsLoading,enquiry:e.enquiries.enquiryForEdit}}),c.c),h=y.actionsLoading,q=y.enquiry;Object(n.useEffect)((function(){g(v(o))}),[o,g]),Object(n.useEffect)((function(){var e,t=o?"":"View Enquiry";q&&o&&(t="View enquiry - ".concat((null===q||void 0===q?void 0:q.email_address)||(null===q||void 0===q||null===(e=q.part_number)||void 0===e?void 0:e.part_number)));b(t),s.setTitle(t)}),[q,o]);return console.log(q&&q.part_number),r.a.createElement(l.a,null,h&&r.a.createElement(l.h,null),r.a.createElement(l.c,{title:E},r.a.createElement(l.d,null,r.a.createElement("button",{type:"button",onClick:function(){i.push("/".concat(f.a,"/orders"))},className:"btn btn-light"},r.a.createElement("i",{className:"fa fa-arrow-left"}),"Back"))),r.a.createElement(l.b,null,r.a.createElement("div",{className:"mt-5"},r.a.createElement(Le.a,{container:!0,spacing:3},r.a.createElement(Le.a,{item:!0,xs:12,md:9},r.a.createElement("div",{className:"kt_section__detail"},r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement("div",{className:"kt_detail__item_title"},"Email Address"),r.a.createElement("div",null,(null===q||void 0===q?void 0:q.email_address)?q.email_address:"---")),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement("div",{className:"kt_detail__item_title"},"Company"),r.a.createElement("div",null,(null===q||void 0===q||null===(t=q.company)||void 0===t?void 0:t.company_name)?q.company.company_name:"---"))),r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement("div",{className:"kt_detail__item_title"},"Country"),r.a.createElement("div",null,(null===q||void 0===q||null===(a=q.country)||void 0===a?void 0:a.name)?q.country.name:"---")),r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement("div",{className:"kt_detail__item_title"},"Phone Number"),r.a.createElement("div",null,(null===q||void 0===q?void 0:q.phone_number)?q.phone_number:"---"))),r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col-md-6 col-12"},r.a.createElement("div",{className:"kt_detail__item_title"}," Inquiry Date"),r.a.createElement("div",null,Object(f.e)(null===q||void 0===q?void 0:q.created_at))))," ",r.a.createElement("hr",null),r.a.createElement("div",{className:"row mb-4"},r.a.createElement("div",{className:"col-md-6 col-12"},q&&q.part_number.map((function(e){return console.log(q),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"kt_detail__item_title"},"Part Number"),r.a.createElement("div",null,(null===e||void 0===e?void 0:e.part_number)?null===e||void 0===e?void 0:e.part_number:"---"))}))))))))))}function Ie(){return r.a.createElement(n.Suspense,{fallback:r.a.createElement(ge.c,null)},r.a.createElement(i.d,null,r.a.createElement(ge.a,{path:"/"+f.a+"/orders/new",component:Te}),r.a.createElement(ge.a,{path:"/"+f.a+"/orders/:id/edit",component:Te}),r.a.createElement(ge.a,{path:"/"+f.a+"/orders/:id/view",component:Me}),r.a.createElement(ge.a,{path:"/"+f.a+"/orders",component:le})))}a.d(t,"default",(function(){return Ie}))}}]);
//# sourceMappingURL=7.458ab3ad.chunk.js.map