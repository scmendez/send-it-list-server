(this["webpackJsonpsend-it-list-client"]=this["webpackJsonpsend-it-list-client"]||[]).push([[0],{52:function(e,t,n){},54:function(e,t,n){},72:function(e,t,n){},78:function(e,t,n){},80:function(e,t,n){},81:function(e,t,n){},82:function(e,t,n){},83:function(e,t,n){},85:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),o=n.n(r),s=n(19),a=n.n(s),i=(n(52),n(6)),l=n(45),j=n(9),b=n(7),u=(n(53),n(54),n(10)),d=n.n(u),h="https://send-it-list.herokuapp.com/api",O=n(99),m=n(8),p=(n(72),function(e){return Object(c.jsx)(O.a,{expand:"true",className:"nav-bar",children:e.loggedInClimber?Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)(m.b,{to:"/home",className:"btn home",children:"Home"}),Object(c.jsx)(m.b,{to:"/edit-profile",className:"btn edit-profile",children:"Edit Profile"}),Object(c.jsx)("button",{onClick:e.onLogout,className:"btn logout",children:"Logout"})]}):Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)(m.b,{to:"/sign-in",className:"btn sign-in",children:"Sign In"}),Object(c.jsx)(m.b,{to:"/sign-up",className:"btn sign-up",children:"Sign Up"})]})})}),x=n(100),f=n(102),g=(n(78),function(e){return e.loggedInClimber?Object(c.jsx)(b.a,{to:"/home"}):Object(c.jsxs)(x.a,{onSubmit:e.onSignUp,className:"form-styling sign-up-form",children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)(x.a.Control,{type:"text",className:"form-control",id:"usernameInput",name:"username",placeholder:"Username"})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)(x.a.Control,{type:"email",className:"form-control",id:"emailInput",name:"email","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(c.jsxs)("div",{className:"form-group",children:[Object(c.jsx)(x.a.Control,{type:"password",className:"form-control",id:"passwordInput",name:"password",placeholder:"Password"}),Object(c.jsx)("br",{}),Object(c.jsx)(x.a.Text,{id:"passwordRequirements",className:"form-text password-req",children:"Password requirements: Minimum 8 characters, a number, a special character, an uppercase letter, and a lowercase letter."})]}),Object(c.jsx)(f.a,{type:"submit",className:"btn btn-primary",children:"Submit"})]})}),v=(n(80),function(e){return e.loggedInClimber?Object(c.jsx)(b.a,{to:"/home"}):Object(c.jsxs)(x.a,{onSubmit:e.onSignIn,className:"form-styling sign-in-form",children:[Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)(x.a.Control,{onChange:e.onUnmount,type:"email",className:"form-control",id:"emailInput",name:"email","aria-describedby":"emailHelp",placeholder:"Email"})}),Object(c.jsx)("div",{className:"form-group",children:Object(c.jsx)(x.a.Control,{name:"password",type:"password",className:"form-control",id:"passwordInput",placeholder:"Password"})}),Object(c.jsx)(f.a,{type:"submit",className:"btn btn-primary",children:"Submit"}),e.errorMessage?Object(c.jsx)("p",{style:{color:"red"},children:e.errorMessage}):null]})}),N=n(94),y=n(95),C=(n(81),function(e){var t=Object(r.useState)(e.loggedInClimber?e.loggedInClimber:null),n=Object(j.a)(t,2),o=n[0],s=n[1];return console.log("propsloggedinclimber",o),Object(r.useEffect)((function(){var t=e.loggedInClimber?e.loggedInClimber._id:null;t&&d.a.get("".concat(h,"/climberInfo/").concat(t),{withCredentials:!0}).then((function(e){console.log("axios climber esponse",e.data),s(e.data)}))}),[]),Object(r.useEffect)((function(){var t=o;console.log("CDU",t),e.loggedInClimber&&!t&&s(e.loggedInClimber)})),o?Object(c.jsx)("div",{children:Object(c.jsxs)(N.a,{fluid:!0,className:"link-container",children:[Object(c.jsx)(y.a,{className:"profile-photo",src:"/images/defaultProfilePhoto.png",alt:"profile pic",roundedCircle:!0}),o?Object(c.jsxs)("h2",{children:["Hello, ",o.username,"!"]}):null,Object(c.jsx)(m.b,{to:"/current-projects",className:"proj-links",children:"Current Projects"}),Object(c.jsx)("br",{}),Object(c.jsx)(m.b,{to:"/future-projects",className:"proj-links",children:"Potential Projects"}),Object(c.jsx)("br",{}),Object(c.jsx)(m.b,{to:"/sent-projects",className:"proj-links",children:"Sent Projects"}),Object(c.jsx)("br",{}),Object(c.jsx)(m.b,{to:"/search-routes",className:"search-link",children:"Search routes"})]})}):Object(c.jsx)(b.a,{to:"/sign-up"})}),S=(n(82),function(e){var t=Object(r.useState)(e.loggedInClimber),n=Object(j.a)(t,2),s=n[0],a=n[1];console.log("props",e.loggedInClimber),Object(r.useEffect)((function(){var t=e.loggedInClimber?e.loggedInClimber._id:null;console.log("climber",t),t&&d.a.get("".concat(h,"/climberInfo/").concat(t),{withCredentials:!0}).then((function(e){console.log("axios climber esponse",e.data),a(e.data)}))}),[]),Object(r.useEffect)((function(){var t=s;console.log("CDU",t),e.loggedInClimber&&!t&&a(e.loggedInClimber)}));if(!s)return null;console.log("SANDRA HERE",s);var i=s.username;return Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsxs)(x.a,{onSubmit:function(t){e.onUsernameEdit(t,s)},className:"edit-username-form",children:[Object(c.jsx)("label",{className:"username-label",children:"Username: "}),Object(c.jsx)("input",{onChange:function(e){var t=JSON.parse(JSON.stringify(s));t.username=e.target.value,a(t)},type:"text",value:i,name:"username"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",className:"save-username-btn",children:"Save edit"})]}),Object(c.jsx)("hr",{})]})}),I=n(101),w=(n(83),function(e){var t=e.myProjects;return t.length?Object(c.jsx)("h2",{children:"No projects yet!"}):Object(c.jsx)(o.a.Fragment,{children:t.map((function(e){return Object(c.jsx)(N.a,{className:"route-card",children:Object(c.jsxs)(I.a,{fluid:"true",className:"card-info",children:[Object(c.jsx)(I.a.Img,{variant:"top",src:e.routeImg,className:"card-img"}),Object(c.jsx)(I.a.Title,{children:e.routeName}),Object(c.jsx)(I.a.Subtitle,{className:"mb-2 text-muted",children:e.routeType}),Object(c.jsxs)(I.a.Text,{children:[Object(c.jsx)("b",{children:"Personal Notes: "})," ",e.personalNotes?Object(c.jsx)("p",{children:e.personalNotes}):Object(c.jsx)("p",{children:"No notes yet!"})]}),Object(c.jsx)(m.b,{to:"/details/".concat(e._id),className:"more-info-link",children:"More info"})]})},e._id)}))})}),R=n(96),P=n(103),T=n(97),D=n(98),E=(n(84),n(16)),U=n.n(E),k=(n(85),function(e){var t=e.searchedCity?Object.values(e.searchedCity):[34.0522,-118.2437];Object(r.useEffect)((function(){delete U.a.Icon.Default.prototype._getIconUrl,U.a.Icon.Default.mergeOptions({iconRetinaUrl:n(86),iconUrl:n(87),shadowUrl:n(88)})}),[]),Object(r.useEffect)((function(){return e.onUnmount}),[]);var s=e.searchedRoutesResults||[];return console.log("within searchroutes js",s),Object(c.jsxs)(o.a.Fragment,{children:[Object(c.jsx)("h1",{children:"Search Routes"}),Object(c.jsxs)("form",{onSubmit:e.onRouteSearch,children:[Object(c.jsx)("input",{type:"text",name:"location",placeholder:"Location"}),Object(c.jsxs)("select",{name:"routeType",className:"route-type-btn",children:[Object(c.jsx)("option",{value:"Boulder",children:"Boulder"}),Object(c.jsx)("option",{value:"Sport",children:"Sport"}),Object(c.jsx)("option",{value:"Trad",children:"Trad"})]}),Object(c.jsx)("button",{type:"submit",children:"Submit"})]}),s.length?Object(c.jsxs)(R.a,{style:{width:"900px",height:"400px"},center:t,zoom:13,scrollWheelZoom:!1,children:[Object(c.jsx)(P.a,{attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"}),s.map((function(t,n){var r=[t.latitude,t.longitude],o=U.a.icon({iconUrl:"https://cdn0.iconfinder.com/data/icons/small-n-flat/24/678111-map-marker-32.png"});return Object(c.jsx)(T.a,{icon:o,position:r,children:Object(c.jsxs)(D.a,{children:[Object(c.jsx)("b",{children:"Name: "}),t.name,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Type: "}),t.type,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Rating: "}),t.rating,Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:t.url,target:"_blank",children:"More details on MountainProject"}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{onClick:function(){e.onAddRoute(t.id)},children:"Add route"})]})},t.id)}))]}):null]})}),L=(n(89),function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),o=n[0],s=n[1],a=Object(r.useState)([]),i=Object(j.a)(a,2);i[0],i[1];Object(r.useEffect)((function(){var t=e.match.params.routeDbId;d.a.get("".concat(h,"/details/").concat(t),{withCredentials:!0}).then((function(e){console.log("routedbid response",e),s(e.data),console.log(o)}))}),[]);var l=o._id,b=o.routeName,u=o.routeType,O=o.routeRating,p=o.routePitches,x=o.routeLocation,f=o.personalNotes,g=(o.dateAccomplished,o.routeURL);return Object(c.jsxs)("div",{className:"route-details",children:[Object(c.jsx)("b",{children:"Route Name: "}),b,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Route Type: "}),u,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Route Rating: "}),O,Object(c.jsx)("br",{}),"Boulder"==u?null:Object(c.jsxs)("p",{children:["Route Pitches: ",p]}),Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Location: "}),x,Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Personal Notes: "}),f,Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)(m.b,{to:"/edit/".concat(l),children:Object(c.jsx)("button",{children:"Edit"})}),Object(c.jsx)("button",{onClick:function(){e.onDelete(l)},children:"Delete"}),Object(c.jsx)("br",{}),Object(c.jsx)("a",{href:g,target:"_blank",children:"Mtn Proj details"})]})}),_=(n(90),function(e){var t=Object(r.useState)({}),n=Object(j.a)(t,2),o=n[0],s=n[1];Object(r.useEffect)((function(){var t=e.match.params.routeDbId;d.a.get("".concat(h,"/details/").concat(t),{withCredentials:!0}).then((function(e){console.log("routedbid response",e),s(e.data)}))}),[]);var a=o.routeName,i=o.routeType,l=o.routeRating,b=o.routePitches,u=o.routeLocation,O=o.personalNotes,m=(o.dateAccomplished,o.listType);return Object(c.jsxs)("form",{onSubmit:function(t){e.onRouteEdit(t,o)},className:"route-details",children:[Object(c.jsx)("b",{children:"Route Name: "}),a,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Route Type: "}),i,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Route Rating: "}),l,Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Type: "}),"Boulder"==i?null:Object(c.jsxs)("p",{children:["Route Pitches: ",b]}),Object(c.jsx)("br",{}),Object(c.jsx)("b",{children:"Location: "}),u,Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"Personal Notes "}),Object(c.jsx)("input",{name:"personalNotes",onChange:function(e){var t=JSON.parse(JSON.stringify(o));t.personalNotes=e.target.value,s(t)},type:"text",value:O}),Object(c.jsx)("br",{}),Object(c.jsx)("label",{children:"List "}),Object(c.jsxs)("select",{name:"listType",children:[Object(c.jsx)("option",{value:m,children:m}),Object(c.jsx)("option",{value:"current",children:"Current"}),Object(c.jsx)("option",{value:"future",children:"Future"}),Object(c.jsx)("option",{value:"sent",children:"Sent"})]}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{type:"submit",children:"Edit"})]})}),F=Object(b.h)((function(){var e=Object(r.useState)(null),t=Object(j.a)(e,2),n=t[0],o=t[1],s=Object(r.useState)(null),a=Object(j.a)(s,2),u=a[0],O=a[1],m=Object(r.useState)([]),x=Object(j.a)(m,2),f=x[0],N=x[1],y=Object(r.useState)([]),I=Object(j.a)(y,2),R=I[0],P=I[1],T=Object(r.useState)(null),D=Object(j.a)(T,2),E=D[0],U=D[1],F=Object(b.g)();Object(r.useEffect)((function(){n||d.a.get("".concat(h,"/climber"),{withCredentials:!0}).then((function(e){console.log("Check here",e.data),o(e.data)})),d.a.get("".concat(h,"/myProjects"),{withCredentials:!0}).then((function(e){N(e.data)}))}),[]);var M=function(e){e.preventDefault();var t=e.target,n=t.username,c=t.email,r=t.password;d.a.post("".concat(h,"/signup"),{username:n.value,email:c.value,password:r.value},{withCredentials:!0}).then((function(e){o(e.data),F.push("/home")}))},A=function(e){e.preventDefault();var t=e.target,n=t.email,c=t.password;d.a.post("".concat(h,"/signin"),{email:n.value,password:c.value},{withCredentials:!0}).then((function(e){o(e.data),F.push("/home")})).catch((function(e){O(e.response.data.error)}))},B=function(e,t){e.preventDefault();var n=e.target.username;d.a.patch("".concat(h,"/editUsername/").concat(t._id),{username:n.value},{withCredentials:!0}).then((function(e){o(e.data),F.push("/home")}))},J=function(e,t){console.log("profile photo edit")},H=function(e){e.preventDefault();var t=e.target,n=t.location,c=t.routeType;console.log(c.value),d.a.get("".concat(h,"/mapSearch/").concat(n.value),{withCredentials:!0}).then((function(e){var t=e.data.routesResponse.routes;P(t.filter((function(e){return e.type===c.value}))),U(e.data.cityLatLon),console.log("within function",R)}))},q=function(e){d.a.get("".concat(h,"/add-climbing-route/").concat(e),{withCredentials:!0}).then((function(e){N([].concat(Object(l.a)(f),[e.data])),F.push("/home")}))},z=function(){P(null)},W=function(e){d.a.delete("".concat(h,"/delete/").concat(e),{withCredentials:!0}).then((function(){var t=f.filter((function(t){return t._id!==e}));N(t),F.push("/home")}))},Z=function(e,t){e.preventDefault(),console.log("routeDbId",t._id);var n=e.target,c=n.personalNotes,r=(n.dateAccomplished,n.listType);d.a.patch("".concat(h,"/edit/").concat(t._id),{personalNotes:c.value,listType:r.value},{withCredentials:!0}).then((function(){var e=f.map((function(e){return e._id==t._id&&(e=t),e}));N(e),F.push("/home")}))};return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsx)("h1",{children:"Send-It List"}),Object(c.jsx)(p,{onLogout:function(){d.a.post("".concat(h,"/logout"),{},{withCredentials:!0}).then((function(){o(null),F.push("/")}))},loggedInClimber:n}),Object(c.jsxs)(b.d,{children:[Object(c.jsx)(b.b,{exact:!0,path:"/",render:function(e){return Object(c.jsx)(C,Object(i.a)(Object(i.a)({},e),{},{loggedInClimber:n}))}}),Object(c.jsx)(b.b,{path:"/sign-up",render:function(e){return Object(c.jsx)(g,Object(i.a)(Object(i.a)({onSignUp:M},e),{},{loggedInClimber:n}))}}),Object(c.jsx)(b.b,{path:"/sign-in",render:function(e){return Object(c.jsx)(v,Object(i.a)(Object(i.a)({onSignIn:A},e),{},{errorMessage:u}))}}),Object(c.jsx)(b.b,{path:"/home",render:function(){return Object(c.jsx)(C,{loggedInClimber:n})}}),Object(c.jsx)(b.b,{path:"/edit-profile",render:function(e){return Object(c.jsx)(S,Object(i.a)(Object(i.a)({},e),{},{loggedInClimber:n,onUsernameEdit:B,onProfilePhotoEdit:J}))}}),Object(c.jsx)(b.b,{path:"/current-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:f.filter((function(e){return"current"===e.listType}))}))}}),Object(c.jsx)(b.b,{path:"/future-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:f.filter((function(e){return"future"===e.listType}))}))}}),Object(c.jsx)(b.b,{path:"/sent-projects",render:function(e){return Object(c.jsx)(w,Object(i.a)(Object(i.a)({},e),{},{onDelete:W,myProjects:f.filter((function(e){return"sent"===e.listType}))}))}}),Object(c.jsx)(b.b,{path:"/search-routes",render:function(e){return Object(c.jsx)(k,Object(i.a)(Object(i.a)({},e),{},{onRouteSearch:H,onAddRoute:q,searchedRoutesResults:R,searchedCity:E,onUnmount:z}))}}),Object(c.jsx)(b.b,{path:"/details/:routeDbId",render:function(e){return Object(c.jsx)(L,Object(i.a)(Object(i.a)({},e),{},{onDelete:W}))}}),Object(c.jsx)(b.b,{path:"/edit/:routeDbId",render:function(e){return Object(c.jsx)(_,Object(i.a)(Object(i.a)({},e),{},{onRouteEdit:Z}))}})]})]})})),M=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,104)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),c(e),r(e),o(e),s(e)}))};a.a.render(Object(c.jsx)(m.a,{children:Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(F,{})})}),document.getElementById("root")),M()}},[[91,1,2]]]);
//# sourceMappingURL=main.795816e0.chunk.js.map