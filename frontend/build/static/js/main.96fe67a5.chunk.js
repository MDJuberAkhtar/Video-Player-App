(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{108:function(e,t,a){},110:function(e,t,a){},111:function(e,t,a){},112:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(21),o=a.n(r),s=a(9),i=a(8),c=a(13),m=a(14),u=a(16),d=a(15),p=a(20),h=a.n(p),g=(a(83),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loggedIn:localStorage.getItem("userTokenTime")},n}return Object(m.a)(a,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-info"},l.a.createElement("div",{className:"container"},l.a.createElement(s.b,{className:"navbar-brand",to:"/"},"VideoServer"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse justify-content-end",id:"navbarNavAltMarkup"},l.a.createElement("div",{className:"navbar-nav"},this.state.loggedIn?l.a.createElement(l.a.Fragment,null,l.a.createElement(s.c,{className:"nav-item nav-link",to:"/",exact:!0},"Home"),l.a.createElement(s.c,{className:"nav-item nav-link",to:"/upload"},"Upload"),l.a.createElement(s.c,{className:"nav-item nav-link",to:"/signOut"},"Sign Out")):l.a.createElement(l.a.Fragment,null,l.a.createElement(s.c,{className:"nav-item nav-link",to:"/signIn"},"Sign In"),l.a.createElement(s.c,{className:"nav-item nav-link",to:"/signUp"},"Sign Up"))))))}}]),a}(l.a.Component)),v=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;Object(c.a)(this,a),n=t.call(this,e);var l=!1;if(localStorage.getItem("userTokenTime")){var r=JSON.parse(localStorage.getItem("userTokenTime"));(new Date).getTime()-r.time>36e5&&(localStorage.removeItem("userTokenTime"),l=!0)}else l=!0;return n.state={redirect:l,videoList:[]},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;localStorage.getItem("userTokenTime")&&h.a.get("http://127.0.0.1:3333/api/videoList",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("userTokenTime")).token}}).then((function(t){e.setState({videoList:t.data})}))}},{key:"render",value:function(){if(this.state.redirect)return l.a.createElement(i.a,{to:"/signIn"});var e=this.state.videoList.map((function(e){return l.a.createElement("div",{className:"video col-xs-12 col-sm-12 col-md-3 col-lg-4",key:e._id},l.a.createElement(s.b,{to:"/video/"+e.upload_title},l.a.createElement("div",{className:"video-thumbnail"},l.a.createElement("img",{src:e.thumbnail_path,alt:"video thubmnail"}))),l.a.createElement("span",{className:"username"},l.a.createElement(s.b,{to:"/api/videos/"+e.upload_title},e.uploader_name)),l.a.createElement("span",{className:"video-title"},e.upload_title.replace(/_/g," ")))}));return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:"container mt-5"},l.a.createElement("h4",null,"Videos"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("div",{className:"streams row"},e)))}}]),a}(l.a.Component),f=a(60),b=(a(108),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={loaded:!1,videoJsOptions:null},n}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;h.a.get("http://127.0.0.1:3333/api/videoList",{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("userTokenTime")).token}}).then((function(t){t.data.map((function(t){t.upload_title===e.props.match.params.videoTitle&&e.setState({loaded:!0,videoJsOptions:{autoplay:!1,controls:!0,sources:[{src:t.video_path}]}},(function(){e.player=Object(f.a)(e.videoNode,e.state.videoJsOptions,(function(){}))}))}))}))}},{key:"componentWillUnmount",value:function(){this.player&&this.player.dispose()}},{key:"render",value:function(){var e=this;return localStorage.getItem("userTokenTime")?l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:"row",style:{width:"100vw"}},l.a.createElement("div",{className:"col-xs-12 col-sm-12 col-md-10 col-lg-8 mx-auto mt-5"},this.state.loaded?l.a.createElement("div",{"data-vjs-player":!0},l.a.createElement("video",{ref:function(t){return e.videoNode=t},className:"video-js vjs-big-play-centered"})):" Loading ... "))):l.a.createElement(i.a,{to:"/signIn"})}}]),a}(l.a.Component)),E=a(116),N=a(24),k=(a(109),a(110),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={selectedVideos:null,loaded:0},e}return Object(m.a)(a,[{key:"maxSelectFile",value:function(e){var t=e.target.files;if(t.length>1)return N.b.error("Maximum 1 file is allowed"),e.target.value=null,!1;for(var a="",n=0;n<t.length;n++)t[n].size>52428800&&(a+=t[n].name+", ");return""!==a&&(e.target.value=null,N.b.error(a+" is/are too large. Please select file size < 50Mb")),!0}},{key:"fileChangeHandler",value:function(e){var t=e.target.files;this.maxSelectFile(e)&&this.setState({selectedVideos:t,loaded:0})}},{key:"fileUploadHandler",value:function(e){for(var t=this,a=new FormData,n=0;n<this.state.selectedVideos.length;n++)a.append("file",this.state.selectedVideos[n]);h.a.post("http://127.0.0.1:3333/api/upload",a,{headers:{"Content-Type":"application/json",Authorization:"Bearer "+JSON.parse(localStorage.getItem("userTokenTime")).token}},{onUploadProgress:function(e){t.setState({loaded:e.loaded/e.total*100})}}).then((function(e){N.b.success("Upload Successful")})).catch((function(e){N.b.error("Upload Fail with status: ".concat(e.statusText))}))}},{key:"render",value:function(){return localStorage.getItem("userTokenTime")?l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"form-group"},l.a.createElement(N.a,null)),l.a.createElement("h4",null,"Upload Video"),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("form",{method:"post",name:"videoUpload",action:"/api/upload",id:"#",encType:"multipart/form-data"},l.a.createElement("div",{className:"form-group files"},l.a.createElement("label",null,"Upload Your Videos Here"),l.a.createElement("input",{type:"file",name:"file",className:"form-control",multiple:"multiple",accept:"video/*",onChange:this.fileChangeHandler.bind(this)}),l.a.createElement(E.a,{max:"100",color:"success",value:this.state.loaded,className:"mt-4 mb-1"},isNaN(Math.round(this.state.loaded,2))?0:Math.round(this.state.loaded,2),"%"),l.a.createElement("button",{type:"button",className:"btn btn-success btn-block",onClick:this.fileUploadHandler.bind(this)},"Upload Video"))))):l.a.createElement(i.a,{to:"/signIn"})}}]),a}(l.a.Component)),S=a(17),y=function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement(g,null),l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{id:"login-row",className:"row justify-content-center align-items-center"},l.a.createElement("div",{id:"login-column",className:"col-md-6 py-3"},l.a.createElement("div",{id:"login-box",className:"col-md-12"},l.a.createElement("form",{id:"login-form",className:"form",method:"post",onSubmit:e.onSubmit},e.children))))))},w=(a(51),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={email:"",password:"",token:"",redirect:!!localStorage.getItem("userTokenTime")},n.onSubmitHandler=n.onSubmitHandler.bind(Object(S.a)(n)),n.emailInputChangeHandler=n.emailInputChangeHandler.bind(Object(S.a)(n)),n.passwordInputChangeHandler=n.passwordInputChangeHandler.bind(Object(S.a)(n)),n}return Object(m.a)(a,[{key:"onSubmitHandler",value:function(){var e=this;""!==this.state.email&&""!==this.state.password&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)?h.a.post("/api/v1/users/login",{email:this.state.email,password:this.state.password}).then((function(t){e.setState({token:t.data.token});var a={token:e.state.token,time:(new Date).getTime()};localStorage.setItem("userTokenTime",JSON.stringify(a)),e.setState({redirect:!0})})).catch((function(e){console.log(e)})):alert("Please enter valid details")}},{key:"emailInputChangeHandler",value:function(e){this.setState({email:e.target.value})}},{key:"passwordInputChangeHandler",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(i.a,{to:"/"}):l.a.createElement(y,{onSubmit:this.onSubmitHandler.bind(this)},l.a.createElement("h3",{className:"text-center text-info"},"Login"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email",className:"text-info"},"Email:"),l.a.createElement("br",null),l.a.createElement("input",{id:"email",className:"form-control",type:"email",name:"email",placeholder:"example@domain.com",onChange:this.emailInputChangeHandler,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password",className:"text-info"},"Password:"),l.a.createElement("br",null),l.a.createElement("input",{id:"password",className:"form-control",type:"password",name:"password",placeholder:"********",onChange:this.passwordInputChangeHandler,required:!0})),l.a.createElement("div",{className:"d-flex justify-content-between align-items-end"},l.a.createElement("button",{onClick:this.onSubmitHandler,className:"btn btn-info btn-md",type:"button"},"Submit"),l.a.createElement(s.b,{to:"/signUp",className:"text-info"},"Sign Up here")))}}]),a}(l.a.Component)),I=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).state={firstName:"",lastName:"",email:"",password:"",redirect:!!localStorage.getItem("userTokenTime")},n.onSubmitHandler=n.onSubmitHandler.bind(Object(S.a)(n)),n.firstNameInputChangeHandler=n.firstNameInputChangeHandler.bind(Object(S.a)(n)),n.lastNameInputChangeHandler=n.lastNameInputChangeHandler.bind(Object(S.a)(n)),n.emailInputChangeHandler=n.emailInputChangeHandler.bind(Object(S.a)(n)),n.passwordInputChangeHandler=n.passwordInputChangeHandler.bind(Object(S.a)(n)),n}return Object(m.a)(a,[{key:"onSubmitHandler",value:function(e){var t=this;e.preventDefault(),""!==this.state.firstName&&""!==this.state.lastName&&""!==this.state.email&&""!==this.state.password&&/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.state.email)?h.a.post("/api/v1/users/signup",{firstName:this.state.firstName,lastName:this.state.lastName,email:this.state.email,password:this.state.password}).then((function(e){t.setState({redirect:!0})})).catch((function(e){console.log(e)})):alert("Please enter valid details")}},{key:"firstNameInputChangeHandler",value:function(e){this.setState({firstName:e.target.value})}},{key:"lastNameInputChangeHandler",value:function(e){this.setState({lastName:e.target.value})}},{key:"emailInputChangeHandler",value:function(e){this.setState({email:e.target.value})}},{key:"passwordInputChangeHandler",value:function(e){this.setState({password:e.target.value})}},{key:"render",value:function(){return this.state.redirect?l.a.createElement(i.a,{to:"/"}):l.a.createElement(y,{onSubmit:this.onSubmitHandler.bind(this)},l.a.createElement("h3",{className:"text-center text-info"},"Register"),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"first-name",className:"text-info"},"First Name:"),l.a.createElement("br",null),l.a.createElement("input",{id:"first-name",className:"form-control",type:"text",name:"firstName",placeholder:"First Name",onChange:this.firstNameInputChangeHandler,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"last-name",className:"text-info"},"Last Name:"),l.a.createElement("br",null),l.a.createElement("input",{id:"last-name",className:"form-control",type:"text",name:"lastName",placeholder:"Last Name",onChange:this.lastNameInputChangeHandler,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"email",className:"text-info"},"Email:"),l.a.createElement("br",null),l.a.createElement("input",{id:"email",className:"form-control",type:"email",name:"email",placeholder:"example@domain.com",onChange:this.emailInputChangeHandler,required:!0})),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{htmlFor:"password",className:"text-info"},"Password:"),l.a.createElement("br",null),l.a.createElement("input",{id:"password",className:"form-control",type:"password",name:"password",placeholder:"********",onChange:this.passwordInputChangeHandler,required:!0})),l.a.createElement("div",{className:"d-flex justify-content-between align-items-end"},l.a.createElement("input",{type:"submit",name:"submit",className:"btn btn-info btn-md",value:"Submit"}),l.a.createElement(s.b,{to:"/signIn",className:"text-info"},"Login here")))}}]),a}(l.a.Component),C=function(e){return localStorage.getItem("userTokenTime")&&localStorage.removeItem("userTokenTime"),l.a.createElement(i.a,{to:"/signIn"})};var O=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(i.b,{exact:!0,path:"/",component:v}),l.a.createElement(i.b,{exact:!0,path:"/video/:videoTitle",component:b}),l.a.createElement(i.b,{exact:!0,path:"/upload",component:k}),l.a.createElement(i.b,{exact:!0,path:"/signIn",component:w}),l.a.createElement(i.b,{exact:!0,path:"/signUp",component:I}),l.a.createElement(i.b,{exact:!0,path:"/signOut",component:C}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(111);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(s.a,null,l.a.createElement(O,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},51:function(e,t,a){},61:function(e,t,a){e.exports=a(112)},83:function(e,t,a){},88:function(e,t){}},[[61,1,2]]]);
//# sourceMappingURL=main.96fe67a5.chunk.js.map