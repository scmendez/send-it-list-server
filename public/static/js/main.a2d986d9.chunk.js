(this["webpackJsonpsend-it-list-client"]=this["webpackJsonpsend-it-list-client"]||[]).push([[0],{50:function(e,t,n){},51:function(e,t,n){},70:function(e,t,n){},76:function(e,t,n){},77:function(e,t,n){},82:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),a=n(19),o=n.n(a),i=(n(50),n(5)),l=n(43),j=n(10),u=n(6),b=(n(51),n(52),n(9)),d=n.n(b),h="https://send-it-list.herokuapp.com/api",O=n(90),p=n(8),m=(n(70),function(e){return Object(c.jsxs)(O.a,{bg:"light",expand:"lg",className:"nav-bar",children:[Object(c.jsx)(p.b,{to:"/home",className:"home-btn",children:"Home"}),e.loggedInClimber?Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(p.b,{to:"/edit-profile",children:"Edit Profile"}),Object(c.jsx)("button",{onClick:e.onLogout,className:"logout-btn",children:"Logout"})]}):Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)(p.b,{to:"/sign-in",children:"Sign In"}),Object(c.jsx)(p.b,{to:"/sign-up",children:"Sign Up"})]})]})}),x=function(e){return e.loggedInClimber?Object(c.jsx)(u.a,{to:"/home"}):Object(c.jsxs)("form",{onSubmit:e.onSignUp,children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Username "}),Object(c.jsx)("input",{type:"text",className:"form-control",id:"usernameInput",name:"username"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Email "}),Object(c.jsx)("input",{type:"email",className:"form-control",id:"emailInput",name:"email","aria-describedby":"emailHelp"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password "}),Object(c.jsx)("input",{type:"password",className:"form-control",id:"passwordInput",name:"password"}),Object(c.jsx)("br",{}),Object(c.jsx)("small",{id:"passwordRequirements",className:"form-text text-muted",children:"Password requirements: Minimum 8 characters, a number, a special character, an uppercase letter, and a lowercase letter."})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"})]})},f=function(e){return Object(c.jsxs)("form",{onSubmit:e.onSignIn,children:[Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Email"}),Object(c.jsx)("input",{onChange:e.onUnmount,type:"email",className:"form-control",id:"emailInput",name:"email","aria-describedby":"emailHelp"})]}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)("label",{children:"Password"}),Object(c.jsx)("input",{name:"password",type:"password",className:"form-control",id:"passwordInput"})]}),Object(c.jsx)("button",{type:"submit",className:"btn btn-primary",children:"Submit"}),e.errorMessage?Object(c.jsx)("p",{style:{color:"red"},children:e.errorMessage}):null]})},g=n(85),v=n(86),y=n(92),N=(n(76),function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),s=(n[0],n[1]);return Object(r.useEffect)((function(){d.a.get("".concat(h,"/climber"),{withCredentials:!0}).then((function(e){s(e.data)}))}),[]),e.loggedInClimber?Object(c.jsx)("div",{children:Object(c.jsxs)(g.a,{fluid:!0,children:[Object(c.jsx)(v.a,{className:"profile-photo",src:"/images/defaultProfilePhoto.png",alt:"profile pic",roundedCircle:!0}),e.loggedInClimber?Object(c.jsxs)("h2",{children:["Hello, ",e.loggedInClimber.username,"!"]}):null,Object(c.jsx)(y.a,{size:"lg",variant:"light",children:Object(c.jsx)(p.b,{to:"/current-projects",className:"proj-links",children:"Current Projects"})}),Object(c.jsx)("br",{}),Object(c.jsx)(y.a,{size:"lg",variant:"light",children:Object(c.jsx)(p.b,{to:"/future-projects",className:"proj-links",children:"Potential Projects"})}),Object(c.jsx)("br",{}),Object(c.jsx)(y.a,{size:"lg",variant:"light",children:Object(c.jsx)(p.b,{to:"/sent-projects",className:"proj-links",children:"Sent Projects"})}),Object(c.jsx)("br",{}),Object(c.jsx)(y.a,{size:"lg",variant:"light",children:Object(c.jsx)(p.b,{to:"/search-routes",className:"search-link",children:"Search routes"})})]})}):Object(c.jsx)(u.a,{to:"/sign-up"})}),S=function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),a=n[0],o=n[1];Object(r.useEffect)((function(){d.a.get("".concat(h,"/climber"),{withCredentials:!0}).then((function(e){console.log("routedbid response",e),o(e.data)}))}),[]);var i=a.username;return Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsxs)("form",{onSubmit:function(t){e.onUsernameEdit(t,a)},children:[Object(c.jsx)("label",{children:"Username: "}),Object(c.jsx)("input",{onChange:function(e){var t=JSON.parse(JSON.stringify(a));t.username=e.target.value,o(t)},type:"text",value:i,name:"username"}),Object(c.jsx)("button",{type:"submit",children:"Save username edit"})]}),Object(c.jsx)("hr",{})]})},C=n(91),w=(n(77),function(e){var t=e.myProjects;return Object(c.jsx)(s.a.Fragment,{children:t.map((function(e){return Object(c.jsx)(g.a,{className:"route-card",children:Object(c.jsxs)(C.a,{fluid:"true",children:[Object(c.jsx)(C.a.Title,{children:e.routeName}),Object(c.jsx)(C.a.Subtitle,{className:"mb-2 text-muted",children:e.routeType}),Object(c.jsxs)(C.a.Text,{children:["Personal Notes: ",e.personalNotes?Object(c.jsx)("p",{children:e.personalNotes}):Object(c.jsx)("p",{children:"No notes yet!"})]}),Object(c.jsx)(p.b,{to:"/details/".concat(e._id),children:"More info"})]})},e._id)}))})}),I=n(87),P=n(93),R=n(88),D=n(89),T=(n(78),n(15)),E=n.n(T),U=function(e){var t=e.searchedCity?Object.values(e.searchedCity):[34.0522,-118.2437];Object(r.useEffect)((function(){delete E.a.Icon.Default.prototype._getIconUrl,E.a.Icon.Default.mergeOptions({iconRetinaUrl:n(79),iconUrl:n(80),shadowUrl:n(81)})}),[]),Object(r.useEffect)((function(){return e.onUnmount}),[]);var a=e.searchedRoutesResults||[];return console.log("within searchroutes js",a),Object(c.jsxs)(s.a.Fragment,{children:[Object(c.jsx)("h1",{children:"Search Routes"}),Object(c.jsxs)("form",{onSubmit:e.onRouteSearch,children:[Object(c.jsx)("input",{type:"text",name:"location",placeholder:"Location"}),Object(c.jsxs)("select",{name:"routeType",children:[Object(c.jsx)("option",{value:"Boulder",children:"Boulder"}),Object(c.jsx)("option",{value:"Sport",children:"Sport"}),Object(c.jsx)("option",{value:"Trad",children:"Trad"})]}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]}),a.length?Object(c.jsxs)(I.a,{style:{width:"900px",height:"400px"},center:t,zoom:13,scrollWheelZoom:!1,children:[Object(c.jsx)(P.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),a.map((function(t,n){var r=[t.latitude,t.longitude],s=E.a.icon({iconUrl:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-32.png"});return Object(c.jsx)(R.a,{icon:s,position:r,children:Object(c.jsxs)(D.a,{children:[Object(c.jsx)("b",{children:"Name: "}),t.name,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Type: "}),t.type,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Rating: "}),t.rating,Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:t.url,target:"_blank",children:"More details on MountainProject"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){e.onAddRoute(t.id)},children:"Add route"})]})},t.id)}))]}):null]})},k=function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),s=n[0],a=n[1];Object(r.useEffect)((function(){var t=e.match.params.routeDbId;d.a.get("".concat(h,"/details/").concat(t),{withCredentials:!0}).then((function(e){console.log("routedbid response",e),a(e.data)}))}),[]);var o=s._id,i=s.routeName,l=s.routeType,u=s.routeRating,b=s.routePitches,O=s.routeLocation,m=s.personalNotes,x=s.dateAccomplished;return Object(c.jsxs)("div",{children:["Route Name: ",i,Object(c.jsx)("br",{}),"Route Type: ",l,Object(c.jsx)("br",{}),"Route Rating: ",u,Object(c.jsx)("br",{}),"Boulder"==l?null:Object(c.jsxs)("p",{children:["Route Pitches: ",b]}),Object(c.jsx)("br",{}),O,Object(c.jsx)("br",{}),"Personal Notes: ",m,Object(c.jsx)("br",{}),"Date Accomplished: ",x,Object(c.jsx)("br",{}),Object(c.jsx)(p.b,{to:"/edit/".concat(o),children:Object(c.jsx)("button",{children:"Edit"})}),Object(c.jsx)("button",{onClick:function(){e.onDelete(o)},children:"Delete"})]})},L=function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),s=n[0],a=n[1];Object(r.useEffect)((function(){var t=e.match.params.routeDbId;d.a.get("".concat(h,"/details/").concat(t),{withCredentials:!0}).then((function(e){console.log("routedbid response",e),a(e.data)}))}),[]);var o=s.routeName,i=s.routeType,l=s.routeRating,u=s.routePitches,b=s.routeLocation,O=s.personalNotes,p=s.dateAccomplished,m=s.listType;return Object(c.jsxs)("form",{onSubmit:function(t){e.onRouteEdit(t,s)},children:["Route Name: ",o,Object(c.jsx)("br",{}),"Route Type: ",i,Object(c.jsx)("br",{}),"Route Rating: ",l,Object(c.jsx)("br",{}),"Boulder"==i?null:Object(c.jsxs)("p",{children:["Route Pitches: ",u]}),Object(c.jsx)("br",{}),b,Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Personal Notes: "}),Object(c.jsx)("input",{name:"personalNotes",onChange:function(e){var t=JSON.parse(JSON.stringify(s));t.personalNotes=e.target.value,a(t)},type:"text",value:O}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Date Accomplished "}),Object(c.jsx)("input",{name:"dateAccomplished",type:"text",value:p}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"List "}),Object(c.jsxs)("select",{name:"listType",children:[Object(c.jsx)("option",{value:m,children:m}),Object(c.jsx)("option",{value:"current",children:"Current"}),Object(c.jsx)("option",{value:"future",children:"Future"}),Object(c.jsx)("option",{value:"sent",children:"Sent"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Edit"})]})},A=Object(u.h)((function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],s=t[1],a=Object(r.useState)(null),o=Object(j.a)(a,2),b=o[0],O=o[1],p=Object(r.useState)([]),g=Object(j.a)(p,2),v=g[0],y=g[1],C=Object(r.useState)([]),I=Object(j.a)(C,2),P=I[0],R=I[1],D=Object(r.useState)(null),T=Object(j.a)(D,2),E=T[0],A=T[1],_=Object(u.g)();Object(r.useEffect)((function(){n||d.a.get("".concat(h,"/climber"),{withCredentials:!0}).then((function(e){console.log(e.data),s(e.data)})),d.a.get("".concat(h,"/myProjects"),{withCredentials:!0}).then((function(e){y(e.data)}))}),[]);var F=function(e){e.preventDefault();var t=e.target,n=t.username,c=t.email,r=t.password;d.a.post("".concat(h,"/signup"),{username:n.value,email:c.value,password:r.value},{withCredentials:!0}).then((function(e){s(e.data),_.push("/home")}))},M=function(e){e.preventDefault();var t=e.target,n=t.email,c=t.password;d.a.post("".concat(h,"/signin"),{email:n.value,password:c.value},{withCredentials:!0}).then((function(e){s(e.data),_.push("/home")})).catch((function(e){O(e.response.data.error)}))},z=function(e,t){e.preventDefault();var n=e.target.username;d.a.patch("".concat(h,"/editUsername/").concat(t._id),{username:n.value},{withCredentials:!0}).then((function(e){s(e),_.push("/home")}))},B=function(e,t){console.log("profile photo edit")},J=function(e){e.preventDefault();var t=e.target,n=t.location,c=t.routeType;console.log(c.value),d.a.get("".concat(h,"/mapSearch/").concat(n.value),{withCredentials:!0}).then((function(e){var t=e.data.routesResponse.routes;R(t.filter((function(e){return e.type===c.value}))),A(e.data.cityLatLon),console.log("within function",P)}))},H=function(e){d.a.get("".concat(h,"/add-climbing-route/").concat(e),{withCredentials:!0}).then((function(e){y.apply(void 0,Object(l.a)(v).concat([e])),_.push("/home")}))},q=function(){R(null)},W=function(e){d.a.delete("".concat(h,"/delete/").concat(e),{withCredentials:!0}).then((function(){var t=v.filter((function(t){return t._id!==e}));y(t),_.push("/home")}))},Z=function(e,t){e.preventDefault(),console.log("routeDbId",t._id);var n=e.target,c=n.personalNotes,r=n.dateAccomplished,s=n.listType;d.a.patch("".concat(h,"/edit/").concat(t._id),{personalNotes:c.value,dateAccomplished:r.value,listType:s.value},{withCredentials:!0}).then((function(){var e=v.map((function(e){return e._id==t._id&&(e=t),e}));y(e),_.push("/home")}))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Send-It List"}),Object(c.jsx)(m,{onLogout:function(){d.a.post("".concat(h,"/logout"),{},{withCredentials:!0}).then((function(){s(null),_.push("/")}))},loggedInClimber:n}),Object(c.jsxs)(u.d,{children:[Object(c.jsx)(u.b,{path:"/sign-up",render:function(e){return Object(c.jsx)(x,Object(i.a)(Object(i.a)({onSignUp:F},e),{},{loggedInClimber:n}))}}),Object(c.jsx)(u.b,{path:"/sign-in",render:function(e){return Object(c.jsx)(f,Object(i.a)(Object(i.a)({onSignIn:M},e),{},{errorMessage:b}))}}),Object(c.jsx)(u.b,{path:"/home",render:function(){return Object(c.jsx)(N,{loggedInClimber:n})}}),Object(c.jsx)(u.b,{path:"/edit-profile",render:function(e){return Object(c.jsx)(S,Object(i.a)(Object(i.a)({},e),{},{loggedInClimber:n,onUsernameEdit:z,onProfilePhotoEdit:B}))}}),Object(c.jsx)(u.b,{path:"/current-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:v.filter((function(e){return"current"===e.listType}))}))}}),Object(c.jsx)(u.b,{path:"/future-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:v.filter((function(e){return"future"===e.listType}))}))}}),Object(c.jsx)(u.b,{path:"/sent-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:v.filter((function(e){return"sent"===e.listType}))}))}}),Object(c.jsx)(u.b,{path:"/search-routes",render:function(e){return Object(c.jsx)(U,Object(i.a)(Object(i.a)({},e),{},{onRouteSearch:J,onAddRoute:H,searchedRoutesResults:P,searchedCity:E,onUnmount:q}))}}),Object(c.jsx)(u.b,{path:"/details/:routeDbId",render:function(e){return Object(c.jsx)(k,Object(i.a)(Object(i.a)({},e),{},{onDelete:W}))}}),Object(c.jsx)(u.b,{path:"/edit/:routeDbId",render:function(e){return Object(c.jsx)(L,Object(i.a)(Object(i.a)({},e),{},{onRouteEdit:Z}))}})]})]})})),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,94)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,a=t.getTTFB;n(e),c(e),r(e),s(e),a(e)}))};o.a.render(Object(c.jsx)(p.a,{children:Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(A,{})})}),document.getElementById("root")),_()}},[[82,1,2]]]);
//# sourceMappingURL=main.a2d986d9.chunk.js.map