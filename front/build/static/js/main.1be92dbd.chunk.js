(this.webpackJsonpfront=this.webpackJsonpfront||[]).push([[0],{32:function(e,t,c){},36:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},56:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c.n(s),a=c(37),i=c.n(a),r=(c(43),c(12)),l=c(13),d=c(19),j=c(18),o=(c(32),c.p+"static/media/Dog_23.e8a279f4.png"),b=c(7),h=(c(44),c(1)),O=function(e){var t=e.open,c=e.close,s=e.title;return Object(h.jsx)("div",{className:t?"openModal modal":"modal",children:t?Object(h.jsxs)("section",{children:[Object(h.jsxs)("header",{children:[s,Object(h.jsxs)("button",{className:"close",onClick:c,children:[" ","\xd7"," "]})]}),Object(h.jsx)("main",{children:e.children}),Object(h.jsx)("footer",{children:Object(h.jsxs)("button",{className:"close",onClick:c,children:[" ","\ub2eb\uae30"," "]})})]}):null})},x=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).state={show:!1,setShow:!1},s}return Object(l.a)(c,[{key:"handleShow",value:function(){this.setState({setShow:!0})}},{key:"handleClose",value:function(){this.setState({setShow:!1})}},{key:"render",value:function(){return console.log("Header render"),Object(h.jsxs)("div",{class:"main-nav",children:[Object(h.jsx)("p",{class:"main-logo",children:Object(h.jsx)(b.b,{to:"/",children:"J2KB"})}),Object(h.jsx)("span",{className:"flexgrowBlank"}),Object(h.jsx)("span",{class:"main-nav menu",children:Object(h.jsx)(b.b,{to:"/about",children:"J2KB?"})}),Object(h.jsx)("span",{class:"main-nav menu",children:Object(h.jsx)(b.b,{to:"/board",children:"Board"})}),Object(h.jsx)("span",{class:"main-nav menu",children:Object(h.jsx)(b.b,{to:"/til",children:"TIL"})}),Object(h.jsx)("span",{class:"main-nav menu",children:Object(h.jsxs)(n.a.Fragment,{children:[Object(h.jsx)("a",{onClick:this.handleShow.bind(this),children:"\ub85c\uadf8\uc778"}),Object(h.jsx)(O,{open:this.state.setShow,close:this.handleClose.bind(this),title:"login",children:Object(h.jsx)("div",{className:"signIn_wrapper",children:Object(h.jsx)("div",{className:"signIn_box",children:Object(h.jsx)("div",{className:"signIn_id",children:Object(h.jsxs)("form",{action:"",children:[Object(h.jsxs)("div",{className:"signIn_email",children:["E-mail : ",Object(h.jsx)("input",{type:"text"})]}),Object(h.jsxs)("div",{className:"signIn_pw",children:["PW: ",Object(h.jsx)("input",{type:"password"})]}),Object(h.jsx)("button",{value:"login",children:"\ub85c\uadf8\uc778"})]})})})})})]})}),Object(h.jsx)("span",{class:"main-nav menu",children:Object(h.jsx)(b.b,{to:"/regist",children:"regist"})}),Object(h.jsx)("span",{class:"main-nav menu",children:Object(h.jsx)(b.b,{to:"/attendance",children:"Attendance"})}),Object(h.jsx)("span",{class:"main-nav menu",children:"\ud658\uc601\ud569\ub2c8\ub2e4!"}),Object(h.jsx)("img",{src:o,alt:"logged",class:"profile"})]})}}]),c}(s.Component),u=c(20),m=c(21),p=c(8);var v=function(e){console.log("Content render");var t=Object(p.f)();return Object(h.jsxs)("div",{class:"wrapper",children:[Object(h.jsxs)("div",{class:"main-board",children:[Object(h.jsx)("div",{class:"board-title",children:Object(h.jsxs)("h1",{children:["\ucd5c\uc2e0\uae00",Object(h.jsx)(b.b,{to:"/boardInput",className:"addContent",children:Object(h.jsx)(u.a,{icon:m.a})})]})}),Object(h.jsx)("div",{class:"board-content",children:e.data.map((function(e,t){return Object(h.jsx)("div",{class:"content",children:Object(h.jsx)("div",{class:"subtitle",children:e.title})},e.id)}))})]}),Object(h.jsxs)("div",{class:"main-til",children:[Object(h.jsx)("div",{class:"til-title",children:Object(h.jsxs)("h1",{children:["\ucd5c\uc2e0TIL",Object(h.jsx)("a",{href:"/",className:"addContent",children:Object(h.jsx)(u.a,{icon:m.a})})]})}),Object(h.jsx)("div",{class:"til-content",children:e.data.map((function(c,s){return Object(h.jsx)("div",{class:"content",children:Object(h.jsx)("div",{class:"subtitle",onClick:function(){t.push("/til/"+e.id)},children:c.title})},c.id)}))})]}),Object(h.jsxs)("div",{class:"main-summary",children:[Object(h.jsx)("div",{class:"summary-title",children:Object(h.jsxs)("h1",{children:["Summary",Object(h.jsx)("a",{href:"/",className:"addContent",children:Object(h.jsx)(u.a,{icon:m.a})})]})}),Object(h.jsxs)("div",{class:"summary-content",children:[Object(h.jsx)("div",{class:"content",children:Object(h.jsx)("p",{class:"subtitle",children:"\uacf5\uc9c0\uc0ac\ud56d"})}),Object(h.jsx)("div",{class:"content",children:Object(h.jsx)("p",{class:"subtitle",children:"\uc624\ub298\uc758 TIL\uc218"})}),Object(h.jsx)("div",{class:"content",children:Object(h.jsx)("p",{class:"subtitle",children:"\ud68c\uc6d0\uc218"})})]})]})]})},f=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){return Object(r.a)(this,c),t.apply(this,arguments)}return Object(l.a)(c,[{key:"render",value:function(){return console.log("Footer render"),Object(h.jsx)("div",{class:"footer",children:Object(h.jsx)("p",{children:"By Blooming!"})})}}]),c}(s.Component),N=(c(34),c(59),c(54),c(61)),g=c(62),_=c(63);var w=function(){return Object(h.jsxs)("div",{className:"wrapper",children:[Object(h.jsx)("div",{className:"regist-title",style:{display:"inline-block"},children:Object(h.jsx)("h1",{children:"\ud68c\uc6d0\uac00\uc785"})}),Object(h.jsx)("div",{className:"wrapper-content",style:{backgroundColor:"rgba(255, 255, 255, 0.7)",borderRadius:"7px",height:"53em",width:"70%",margin:"auto",marginTop:"80px"},children:Object(h.jsx)(N.a,{children:Object(h.jsxs)(g.a,{className:"justify-content-md-center mt-5",action:"/signup",method:"POST",children:[Object(h.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(g.a.Label,{children:Object(h.jsx)("h2",{children:"E-mail"})}),Object(h.jsx)(g.a.Control,{type:"email",name:"email",placeholder:"Enter email",size:"lg"}),Object(h.jsx)(g.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(g.a.Label,{children:Object(h.jsx)("h2",{children:"\uc774\ub984"})}),Object(h.jsx)(g.a.Control,{type:"text",placeholder:"\uc774\ub984\uc744 \uc785\ub825\ud558\uc138\uc694",size:"lg",name:"name"}),Object(h.jsx)(g.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)(g.a.Group,{controlId:"formBasicEmail",children:[Object(h.jsx)(g.a.Label,{children:Object(h.jsx)("h2",{children:"ID"})}),Object(h.jsx)(g.a.Control,{type:"text",placeholder:"ID\ub97c \uc785\ub825\ud558\uc138\uc694",size:"lg",name:"id"}),Object(h.jsx)(g.a.Text,{className:"text-muted",children:"We'll never share your email with anyone else."})]}),Object(h.jsxs)(g.a.Group,{controlId:"formBasicPassword",children:[Object(h.jsx)(g.a.Label,{children:Object(h.jsx)("h2",{children:"\ube44\ubc00\ubc88\ud638"})}),Object(h.jsx)(g.a.Control,{type:"password",placeholder:"\ube44\ubc00\ubc88\ud638\ub97c \uc785\ub825\ud558\uc138\uc694",size:"lg",name:"password"})]}),Object(h.jsx)(_.a,{variant:"primary",type:"submit",children:"Submit"})]})})})]})},y=c(11),C=c(15);c(36);var I=function(e){return Object(s.useEffect)((function(){return function(){e._show(!0)}})),Object(h.jsx)("div",{className:"boardDetail_wrapper",children:Object(h.jsxs)("div",{className:"detail_info",children:[Object(h.jsx)("div",{className:"detail_title",children:Object(h.jsx)("h2",{children:"\uc81c\ubaa9 :"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"detail_name",children:Object(h.jsx)("h2",{children:"\uc791\uc131\uc790 : \uc791\uc131\uc790"})}),Object(h.jsx)("div",{className:"detail_desc",children:Object(h.jsx)("h2",{children:"\ub0b4\uc6a9 :"})})]})})};function k(e){return Object(h.jsx)(b.b,{to:"/til/"+e.data[e.i].id,children:Object(h.jsxs)("div",{className:"board_contents",onClick:function(){return e._show(!1)},children:[Object(h.jsx)("span",{className:"board_num",children:e.data[e.i].id}),Object(h.jsx)("p",{className:"contents_title",children:e.data[e.i].title})]},e.i)})}var S=function(e){var t=[],c=Object(s.useState)(!0),n=Object(C.a)(c,2),a=n[0],i=n[1];return t=Object(y.a)(e.data),Object(s.useEffect)((function(){return Object(h.jsx)(k,{})}),[a]),Object(h.jsx)("div",{class:"board-wrapper",children:Object(h.jsxs)("div",{className:"board_box",children:[Object(h.jsxs)("div",{className:"board_top",children:[Object(h.jsx)("div",{className:"board_title",children:Object(h.jsx)("h1",{children:"TIL"})}),Object(h.jsx)(b.b,{to:"/boardInput",className:"board_inputBtn",children:Object(h.jsx)(u.a,{icon:m.a})})]}),Object(h.jsx)("div",{className:"board_content",children:Object(h.jsx)("div",{className:"board_container",children:a?t.map((function(e,c){return Object(h.jsx)(k,{_show:i,data:t,i:c})})):Object(h.jsx)(p.a,{path:"/til/:id",children:Object(h.jsx)(I,{_show:i})})})})]})})};c(56);var B=function(e){console.log("Boardshow render");var t=Object(p.g)().topics_id,c=e.data.find((function(e){return e.id==t}));return Object(s.useEffect)((function(){return function(){e._show(!0)}})),Object(h.jsx)("div",{className:"boardDetail_wrapper",children:Object(h.jsxs)("div",{className:"detail_info",children:[Object(h.jsx)("div",{className:"detail_title",children:Object(h.jsxs)("h2",{children:["\uc81c\ubaa9 : ",c.title]})}),Object(h.jsx)("hr",{}),Object(h.jsx)("div",{className:"detail_name",children:Object(h.jsx)("h2",{children:"\uc791\uc131\uc790 : \uc791\uc131\uc790"})}),Object(h.jsx)("div",{className:"detail_desc",children:Object(h.jsxs)("h2",{children:["\ub0b4\uc6a9 : ",c.desc]})})]})})};var A=function(e){console.log("Board render");for(var t=[],c=e.data.length-1,n=1,a=Object(s.useState)(!0),i=Object(C.a)(a,2),r=i[0],l=i[1];c>=0;)t.push(Object(h.jsx)(b.b,{to:"/board/"+e.data[c].id,children:Object(h.jsxs)("div",{className:"board_contents",onClick:function(){return l(!1)},children:[Object(h.jsx)("span",{className:"board_num",children:n}),Object(h.jsx)("p",{className:"contents_title",children:e.data[c].title})]},e.data[c].id)})),c--,n++;return Object(s.useEffect)((function(){return console.log("useEffect board"),{boardContents:t}}),[r]),Object(h.jsx)("div",{class:"board-wrapper",children:Object(h.jsxs)("div",{className:"board_box",children:[Object(h.jsxs)("div",{className:"board_top",children:[Object(h.jsx)("div",{className:"board_title",children:Object(h.jsx)("h1",{children:"\uac8c\uc2dc\ud310"})}),Object(h.jsx)(b.b,{to:"/boardInput",className:"board_inputBtn",children:Object(h.jsx)(u.a,{icon:m.a})})]}),r?Object(h.jsx)("div",{className:"board_content",children:Object(h.jsx)("div",{className:"board_container",children:t})}):Object(h.jsx)(p.a,{path:"/board/:topics_id",children:Object(h.jsx)(B,{data:e.data,_show:l})})]})})},L=(c(57),function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(){var e;Object(r.a)(this,c);for(var s=arguments.length,n=new Array(s),a=0;a<s;a++)n[a]=arguments[a];return(e=t.call.apply(t,[this].concat(n))).go=function(){e.props.history.goBack()},e}return Object(l.a)(c,[{key:"render",value:function(e){return console.log("Board render"),Object(h.jsxs)("div",{class:"addArticle-wrapper",children:[Object(h.jsx)("div",{className:"addArticle_title",children:Object(h.jsx)("h1",{children:"\uae00\uc4f0\uae30"})}),Object(h.jsx)("div",{className:"addArticle_container",children:Object(h.jsx)("div",{className:"addArticle_form",children:Object(h.jsxs)("form",{action:"/",method:"post",onSubmit:function(e){e.preventDefault(),this.props.onSubmit(e.target.title.value,e.target.desc.value),alert("goood")}.bind(this),children:[Object(h.jsxs)("div",{className:"addArticle_title",children:[Object(h.jsx)("h2",{children:"\uc81c\ubaa9"}),Object(h.jsx)("input",{type:"text",name:"title"})]}),Object(h.jsxs)("div",{className:"addArticle_category",children:[Object(h.jsx)("h2",{children:"\ubd84\ub958"}),Object(h.jsxs)("select",{children:[Object(h.jsx)("option",{value:"article",children:"article"}),Object(h.jsx)("option",{value:"til",children:"til"})]})]}),Object(h.jsxs)("div",{className:"addArticle_contents",children:[Object(h.jsx)("h2",{children:"\ub0b4\uc6a9"}),Object(h.jsx)("textarea",{name:"desc",id:"",cols:"30",rows:"10"})]}),Object(h.jsx)("div",{className:"addArticle_submit",children:Object(h.jsx)("button",{onClick:this.go,children:"submit"})})]})})})]})}}]),c}(s.Component)),E=Object(p.h)(L),T=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).setUserInfo=function(e,t,c){s.setState({userID:e,weeks:t,attendList:c})},s.state={userId:0,totalweeks:11,attendList:[1,1,0,1,0]},s}return Object(l.a)(c,[{key:"render",value:function(){var e=this;console.log("Content attendance render");for(var t=[],c=0;c<this.state.totalweeks;++c)t.push({weekIdx:c,attendance:this.state.attendList[c]});console.log(t);var s=t.map((function(t,c){return Object(h.jsxs)("div",{className:"AttendTable",children:[Object(h.jsxs)("div",{className:"WeekIdx",children:[t.weekIdx+1," \uc8fc\ucc28"]}),Object(h.jsx)("div",{className:1===e.state.attendList[c]?"present":0===e.state.attendList[c]?"absent":"Undefined",children:(s=t.attendance,0===s?"\uacb0\uc11d \ud83d\ude22":s&&"\ucd9c\uc11d \ud83d\ude0a")})]},c);var s}));return Object(h.jsxs)("div",{className:"wrapperAttend",children:[Object(h.jsx)("div",{className:"NavAttend",children:Object(h.jsxs)("ol",{children:[Object(h.jsx)("li",{children:" \ucd9c\uc11d\ubd80 "}),Object(h.jsx)("li",{children:" \uc8fc\uac04\ubaa9\ud45c "})]})}),Object(h.jsx)("div",{className:"MainAttend",children:s})]})}}]),c}(s.Component),D=function(e){Object(d.a)(c,e);var t=Object(j.a)(c);function c(e){var s;return Object(r.a)(this,c),(s=t.call(this,e)).max_content_id=3,s.state={selected_content_id:1,contents:[{id:1,title:"\ucee4\ud53c\ub9db\uc9d1",desc:"\uc0bc\uccad\ub3d9\uc778\uac00?"},{id:2,title:"\ud504\ub85c\uc81d\ud2b8 \ud558\uc2e4\ubd84 !",desc:"\uc0bc\uccad\ub3d9\uc778\uac00?"},{id:3,title:"\ubb50\ud558\uc9c0!",desc:"\uc74c...?"}]},s}return Object(l.a)(c,[{key:"getReadContents",value:function(){var e=0,t=[];for(e=0;e<this.state.contents.length;e++)t.push(this.state.contents[e]);return t}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(x,{}),Object(h.jsxs)(p.c,{children:[Object(h.jsx)(p.a,{exact:!0,path:"/",children:Object(h.jsx)(v,{data:this.getReadContents()})}),Object(h.jsx)(p.a,{path:"/about",children:Object(h.jsx)(S,{})}),Object(h.jsx)(p.a,{path:"/board",children:Object(h.jsx)(A,{data:this.getReadContents()})}),Object(h.jsx)(p.a,{path:"/boardInput",children:Object(h.jsx)(E,{onSubmit:function(e,t){this.max_content_id+=1;var c=Array.from(this.state.contents);c.push({id:this.max_content_id,title:e,desc:t}),this.setState({contents:c})}.bind(this)})}),Object(h.jsx)(p.a,{path:"/til",children:Object(h.jsx)(S,{data:this.getReadContents()})}),Object(h.jsx)(p.a,{path:"/login",children:Object(h.jsx)(S,{})}),Object(h.jsx)(p.a,{path:"/regist",children:Object(h.jsx)(w,{})}),Object(h.jsx)(p.a,{path:"/attendance",children:Object(h.jsx)(T,{})}),Object(h.jsx)(p.a,{path:"/boardInput"}),Object(h.jsx)(p.a,{path:"/",children:"404 error"})]}),Object(h.jsx)(f,{})]})}}]),c}(s.Component),F=Object(p.h)(D),P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,64)).then((function(t){var c=t.getCLS,s=t.getFID,n=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),s(e),n(e),a(e),i(e)}))};i.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(b.a,{children:Object(h.jsx)(F,{})})}),document.getElementById("root")),P()}},[[58,1,2]]]);
//# sourceMappingURL=main.1be92dbd.chunk.js.map