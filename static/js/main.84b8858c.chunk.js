(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{163:function(e,t,n){},173:function(e,t){},179:function(e,t){},196:function(e,t,n){},204:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"updateLanguage",function(){return J}),n.d(a,"updateTheme",function(){return $}),n.d(a,"updateSlogan",function(){return Q}),n.d(a,"updateInterval",function(){return Z}),n.d(a,"updateFontSize",function(){return Y}),n.d(a,"updateFontAlign",function(){return ee});var r=n(0),i=n.n(r),o=n(30),l=n.n(o),c=(n(81),n(4)),s=n(5),u=n(7),d=n(6),m=n(8),p=n(49),g=n(20),h=n(26),f=n(10),v=n(33),b=n.n(v),y=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).index=0,n.state={displayText:""},n.updateIndex=function(){var e=n.props.slogan;void 0===e?n.setState({displayText:""}):(n.index>=e.length&&(n.index=0),n.setState({displayText:e[n.index]}),n.index++)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.updateIndex(),this.timer=setInterval(this.updateIndex,1e3*this.props.interval)}},{key:"componentWillUnmount",value:function(){void 0!==this.timer&&clearInterval(this.timer)}},{key:"render",value:function(){for(var e=this.state.displayText?this.state.displayText.split("|"):[],t=[],n=0,a=0;a<e.length;a++)t.push(i.a.createElement(b.a,{key:n++,renderers:{paragraph:"span"},allowedTypes:["root","paragraph","emphasis","strong","delete","link","linkReference","text"],source:e[a]}));return i.a.createElement("div",{style:{userSelect:"none",textAlign:this.props.textAlign,fontSize:this.props.fontSize,color:this.props.fontColor}},t)}}]),t}(r.Component);y.defaultProps={fontSize:64,fontColor:"#000",textAlign:"left",slogan:[],interval:2};var E=y,x=(n(163),n(12)),w={primary:"#fff",primaryDark:"#fff",background:"#fff",accent:"#000",textPrimary:"#000",textSecondary:"#757575"},k={primary:"#fefefe",primaryDark:"#f5f5f5",background:"#F5F5F5",accent:"#000",textPrimary:"#212121",textSecondary:"#9E9E9E"},O={primary:"#323639",primaryDark:"#282c2f",background:"#303030",accent:"#fff",textPrimary:"#fafafa",textSecondary:"#d6d6d6"},j={primary:"#1c2226",primaryDark:"#1b2024",background:"#000",accent:"#fff",textPrimary:"#fff",textSecondary:"#a0a0a1"},S={primary:"#333639",primaryDark:"#292c2f",background:"#202124",accent:"#fff",textPrimary:"#f1f3f4",textSecondary:"#9ba0a5"};function C(e){if(void 0===e)return k;switch(e.toLowerCase()){case"light":return k;case"dark":return O;case"white":return w;case"black":return j;case"chrome-dark":return S;default:return k}}var A=n(1),I=n(21),T=n(9);function z(){var e=Object(f.a)(["\n  padding: 0;\n  margin: 0;\n"]);return z=function(){return e},e}function D(){var e=Object(f.a)(["\n  box-sizing: border-box;\n  height: 64px;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  padding: 48px 16px;\n"]);return D=function(){return e},e}var P=T.a.div(D()),N=T.a.h1(z()),_=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.leftExtra,a=e.rightExtra;return i.a.createElement("header",{style:Object(I.a)({width:"100%"},this.props.style)},i.a.createElement(P,null,void 0===n?void 0:i.a.createElement("div",{style:{marginRight:16}},n),i.a.createElement(N,null,t),i.a.createElement("div",{style:{flex:1}}),void 0===a?void 0:i.a.createElement("div",{style:{marginLeft:16}},a)))}}]),t}(r.Component),L=n(66),M=n.n(L),W=n(22);function U(){var e=Object(f.a)(["\n  justify-content: center;\n  align-items: center;\n  height: 100vh;\n  \n  @media (max-width: 768px) {\n    padding-top: 0;\n    padding-left: 0;\n    padding-right: 0;\n  }\n"]);return U=function(){return e},e}var R=T.a.div(U()),H=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={idle:!1},n.getSlogan=function(){var e="";if(void 0===n.props.slogan||null==n.props.slogan||0===n.props.slogan.trim().length){var t=Object(A.d)({defaultSlogan:{id:"slogan.default"}});e=n.props.intl.formatMessage(t.defaultSlogan)}else e=n.props.slogan;return e.split("\n").filter(function(e){return void 0!==e&&null!=e}).map(function(e){return e.trim()}).filter(function(e){return e.length>0})},n.mouseCountdown=void 0,n.handleMouseMove=function(){n.state.idle&&n.setState({idle:!1}),void 0!==n.mouseCountdown&&(window.clearTimeout(n.mouseCountdown),n.mouseCountdown=void 0),n.mouseCountdown=window.setTimeout(function(){return n.setState({idle:!0})},2e3)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillUnmount",value:function(){void 0!==this.mouseCountdown&&(window.clearTimeout(this.mouseCountdown),this.mouseCountdown=void 0)}},{key:"render",value:function(){var e=C(this.props.theme),t=i.a.createElement(g.b,{to:"/settings"},i.a.createElement("h1",null,i.a.createElement(W.e,{style:{color:e.textSecondary,cursor:"pointer",display:"flex",alignItems:"center",justifyContent:"center"}})));return i.a.createElement(R,{style:{background:e.background,cursor:this.state.idle?"none":"default"},onMouseMove:this.handleMouseMove},i.a.createElement(M.a,{transitionLeaveTimeout:500,transitionEnterTimeout:300,transitionName:"fade"},this.state.idle?void 0:i.a.createElement(_,{style:{position:"absolute",top:0},rightExtra:t})),i.a.createElement("main",{style:{boxSizing:"border-box",height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}},i.a.createElement(E,{textAlign:"center",fontColor:e.textPrimary,fontSize:72,slogan:this.getSlogan()})))}}]),t}(r.Component),F=Object(x.b)(function(e){return{language:e.settings.language,theme:new URLSearchParams(window.location.search).get("theme")||e.settings.theme,slogan:e.settings.slogan}})(Object(A.e)(H)),V=(n(196),"UPDATE_LANGUAGE"),B="UPDATE_THEME",G="UPDATE_SLOGAN",X="UPDATE_INTERVAL",K="UPDATE_FONT_SIZE",q="UPDATE_FONT_ALIGN",J=function(e){return{type:V,language:e}},$=function(e){return{type:B,theme:e}},Q=function(e){return{type:G,slogan:e}},Z=function(e){return{type:X,interval:e}},Y=function(e){return{type:K,fontSize:e}},ee=function(e){return{type:q,fontAlign:e}};function te(e,t){var n;if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(e))return 3===(n=e.substring(1).split("")).length&&(n=[n[0],n[0],n[1],n[1],n[2],n[2]]),"rgba("+[(n="0x"+n.join(""))>>16&255,n>>8&255,255&n].join(",")+","+(void 0!==t?t:1)+")";throw new Error("Bad Hex")}var ne=n(34),ae=n(36),re=n.n(ae);function ie(){var e=Object(f.a)(["\n  padding: 16px 0;\n  font-weight: bold;\n  font-size: 1.5rem;\n"]);return ie=function(){return e},e}var oe=T.a.div(ie()),le=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.titleId,a=e.children;return void 0!==n?i.a.createElement("div",null,i.a.createElement(A.a,{id:n},function(e){return i.a.createElement(oe,null,e)}),i.a.createElement("div",null,a)):i.a.createElement("div",null,i.a.createElement(oe,null,t),i.a.createElement("div",null,a))}}]),t}(r.Component);function ce(){var e=Object(f.a)(["\n  padding: 16px 0;\n  margin-bottom: 16px;\n  border: 0 solid;\n  border-bottom-width: 1px;\n"]);return ce=function(){return e},e}var se=T.a.div(ce()),ue=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.titleId,a=e.actionView,r=i.a.createElement("div",{style:{display:"flex"}},i.a.createElement("div",{style:{flex:1}},n?i.a.createElement(A.a,{id:n}):i.a.createElement("span",null,t)),i.a.createElement("div",{style:{flex:2}},i.a.createElement("div",null,a)));return i.a.createElement(se,{style:{borderColor:te(C(this.props.theme).textSecondary,.2)}},r,this.props.children)}}]),t}(r.Component),de=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onSelect=function(e){n.props.updateLanguage(e.target.value)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=C(this.props.theme);return i.a.createElement(le,{titleId:"settings.language"},i.a.createElement(ue,null,i.a.createElement("select",{className:"setting-select",style:{backgroundColor:e.primary,color:e.textPrimary},value:this.props.language,onChange:this.onSelect},i.a.createElement(A.a,{id:"settings.language.default"},function(e){return i.a.createElement("option",{value:""},e)}),i.a.createElement("option",{value:"zh-Hans"},"\u7b80\u4f53\u4e2d\u6587"),i.a.createElement("option",{value:"zh-Hant"},"\u6b63\u9ad4\u4e2d\u6587"),i.a.createElement("option",{value:"en-US"},"English"))))}}]),t}(r.Component),me=n(68),pe=n.n(me),ge=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={text:"",showSyntax:!1,fontSize:72,interval:2},n.messages=Object(A.d)({saveSuccess:{id:"action.save.success"}}),n.setSlogan=function(){if(void 0===n.props.slogan||null==n.props.slogan||0===n.props.slogan.trim().length){var e=Object(A.d)({defaultSlogan:{id:"slogan.default"}}),t=n.props.intl;n.setState({text:t.formatMessage(e.defaultSlogan)})}else n.setState({text:n.props.slogan})},n.updateTextareaSize=function(){var e=n.refs.textarea;pe()(e)},n.onTextChange=function(e){var t=e.target.value;void 0===t?n.setState({text:""}):n.setState({text:t})},n.onIntervalChange=function(e){var t=e.target.value;if(void 0!==t){for(var a=0,r=0;r<t.length;r++)t[r]>="0"&&t[r]<="9"&&(a=10*a+(t[r]-"0"));n.props.updateInterval(a)}},n.onSave=function(){n.props.updateSlogan(n.state.text),alert(n.props.intl.formatMessage(n.messages.saveSuccess)),n.setSlogan()},n.onReset=function(){n.props.updateSlogan(""),n.setSlogan()},n.validateNumberInput=function(e){var t,n=e||window.event;"paste"===n.type?t=n.clipboardData.getData("text/plain"):(t=n.keyCode||n.which,t=String.fromCharCode(t));/[0-9]|\./.test(t)||(n.returnValue=!1,n.preventDefault&&n.preventDefault())},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.setSlogan(),this.setState({interval:this.props.interval})}},{key:"render",value:function(){var e=this,t=C(this.props.theme);window.requestAnimationFrame(function(){return e.updateTextareaSize()});var n=i.a.createElement(le,{titleId:"settings.slogan.custom"},i.a.createElement(ue,null,i.a.createElement("div",null,i.a.createElement("textarea",{onChange:this.onTextChange,value:this.state.text,ref:"textarea",onKeyUp:this.updateTextareaSize,className:"slogan-textarea",spellCheck:"false",style:{backgroundColor:t.primary,color:t.textPrimary}}),i.a.createElement("div",{style:{paddingRight:16,paddingLeft:16,userSelect:"none",color:t.textSecondary,fontSize:"0.8rem"}},i.a.createElement("div",{onClick:function(){return e.setState({showSyntax:!e.state.showSyntax})},style:{display:"flex",alignItems:"center"}},i.a.createElement(A.a,{id:"settings.slogan.syntax"}),this.state.showSyntax?i.a.createElement(W.b,{style:{verticalAlign:"middle",marginLeft:4,fontSize:"1rem"}}):i.a.createElement(W.a,{style:{verticalAlign:"middle",marginLeft:4,fontSize:"1rem"}})),this.state.showSyntax?i.a.createElement("div",null,i.a.createElement(A.a,{id:"settings.slogan.syntax.summary"},function(e){return i.a.createElement(b.a,{renderers:{paragraph:"div"},source:e})})):void 0)),i.a.createElement("div",{style:{width:"100%",display:"flex",flexDirection:"row"}},i.a.createElement("div",{style:{flex:1}}),i.a.createElement("div",{className:"button-bar"},i.a.createElement("button",{onClick:this.onReset,style:{backgroundColor:t.primary,color:t.textPrimary}},i.a.createElement(A.a,{id:"action.reset"})),i.a.createElement("button",{onClick:this.onSave,style:{backgroundColor:t.primary,color:t.textPrimary}},i.a.createElement(A.a,{id:"action.save"}))))));i.a.createElement(le,{title:"\u5176\u4ed6\u8bbe\u7f6e"},i.a.createElement(ue,{title:"\u65f6\u95f4\u95f4\u9694",iconName:"stopwatch",actionView:i.a.createElement("div",null,i.a.createElement("input",{className:"setting-input",value:this.props.interval,onKeyPress:this.validateNumberInput,style:{borderColor:t.textSecondary,color:t.textPrimary,backgroundColor:t.primary,width:"3rem",textAlign:"center",marginRight:8},onChange:this.onIntervalChange}),i.a.createElement("span",null,"\u79d2"))}),i.a.createElement(ue,{title:"\u5b57\u4f53\u5927\u5c0f",iconName:"font"}),i.a.createElement(ue,{title:"\u6587\u672c\u5bf9\u9f50",iconName:"align-center",actionView:i.a.createElement("div",null,i.a.createElement("div",{style:{display:"inline-block"}},i.a.createElement("input",{type:"radio",id:"left",value:"left"}),i.a.createElement("span",null,"Left")),i.a.createElement("div",{style:{display:"inline-block"}},i.a.createElement("input",{type:"radio",id:"center",value:"center"}),i.a.createElement("span",null,"Center")),i.a.createElement("div",{style:{display:"inline-block"}},i.a.createElement("input",{type:"radio",id:"right",value:"right"}),i.a.createElement("span",null,"Right")))})),i.a.createElement(le,{title:"\u6548\u679c\u9884\u89c8"},i.a.createElement(ue,null,i.a.createElement("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",width:"100%",minHeight:5*this.state.fontSize}},i.a.createElement(E,{textAlign:"center",fontColor:t.textPrimary,fontSize:this.state.fontSize,interval:this.state.interval,slogan:this.state.text.split("\n")}))));return i.a.createElement("div",null,n)}}]),t}(r.Component);function he(){var e=Object(f.a)(["\n  height: 2px;\n  margin-top: 2px;\n  border-width: 0;\n  border-radius: 2px;\n"]);return he=function(){return e},e}function fe(){var e=Object(f.a)(["\n  margin: 8px;\n  display: inline-block;\n  border: 1px solid;\n  border-radius: 8px;\n  padding: 16px 16px 14px;\n  user-select: none;\n  cursor: pointer;\n  font-size: 1rem;\n"]);return fe=function(){return e},e}var ve=T.a.div(fe()),be=T.a.div(he()),ye=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).onThemeSelect=function(e){n.props.updateTheme(e)},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.theme,a=t.updateTheme;void 0===n&&a("light");var r=C(n),o=function(t){var a=t.titleId,o=t.value;return i.a.createElement(ve,{onClick:function(){return e.onThemeSelect(o)},style:{borderColor:te(r.textSecondary,.2),color:C(o).textPrimary,backgroundColor:C(o).background}},i.a.createElement(A.a,{id:a}),i.a.createElement(be,{style:{backgroundColor:o===n?r.accent:"transparent"}}))};return i.a.createElement("div",null,i.a.createElement(A.a,{id:"settings.appearance.theme"},function(e){return i.a.createElement(le,{title:e},i.a.createElement(ue,null,i.a.createElement("div",{style:{width:"100%"}},i.a.createElement(o,{value:"white",titleId:"settings.appearance.theme.white"}),i.a.createElement(o,{value:"light",titleId:"settings.appearance.theme.light"}),i.a.createElement(o,{value:"dark",titleId:"settings.appearance.theme.dark"}),i.a.createElement(o,{value:"black",titleId:"settings.appearance.theme.black"}),i.a.createElement(o,{value:"chrome-dark",titleId:"settings.appearance.theme.chrome-dark"}))))}))}}]),t}(r.Component),Ee=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(u.a)(this,Object(d.a)(t).call(this,e))).state={deferredPrompt:void 0},n.onAddPwa=function(){n.setState.deferredPrompt.prompt(),n.setState.deferredPrompt.userChoice.then(function(e){"accepted"===e.outcome?console.log("User accepted the A2HS prompt"):console.log("User dismissed the A2HS prompt")})},window.addEventListener("beforeinstallprompt",function(e){e.preventDefault(),n.setState({deferredPrompt:e})}),n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return i.a.createElement(A.a,{id:"settings.application"},function(t){return i.a.createElement(le,{title:t},i.a.createElement(ue,{title:"PWA",actionView:i.a.createElement("button",{onClick:e.onAddPwa},"\u6dfb\u52a0")}),i.a.createElement(ue,null,i.a.createElement("div",{style:{display:"flex",flexDirection:"row"}},i.a.createElement("div",null,"Chrome \u6269\u5c55"),i.a.createElement("div",null,i.a.createElement("a",null,"Download")))))})}}]),t}(r.Component),xe=n(69),we=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=C(this.props.theme),t=i.a.createElement(A.a,{id:"settings.about"},function(t){return i.a.createElement(le,{title:t},i.a.createElement(ue,null,i.a.createElement("div",null,i.a.createElement("span",{role:"img","aria-label":"logo"},"\ud83d\udcbc")," Version ",xe.version)),i.a.createElement(ue,null,i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/sorcererXW/iloveworks",target:"_blank",style:{fontWeight:"600",color:e.accent}},"Github"))),i.a.createElement(ue,null,i.a.createElement("div",null,i.a.createElement("a",{href:"https://github.com/sorcererXW/iloveworks/releases",target:"_blank",style:{fontWeight:"600",color:e.accent}},i.a.createElement(A.a,{id:"settings.about.release_note"})))))});return i.a.createElement("div",null,t)}}]),t}(r.Component);function ke(){var e=Object(f.a)(["\n  width: 100%;\n  padding: 0 16px;\n  display: flex;\n  box-sizing: border-box;\n  flex-direction: column;\n"]);return ke=function(){return e},e}function Oe(){var e=Object(f.a)(["\n  text-decoration: none;\n  padding: 8px 32px 8px 16px;\n  margin-bottom: 16px;\n  margin-right: 8px;\n  font-size: 1rem;\n  white-space: pre;\n  font-weight: 500;\n  \n  :hover {\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  \n  @media (max-width: 768px) {\n    padding: 8px 16px 8px 16px;\n    margin-right: 8px;\n  }\n"]);return Oe=function(){return e},e}function je(){var e=Object(f.a)(["\n  padding: 16px;\n  border: 0 solid;\n  border-right-width: 1px;\n  height: 100%;\n  min-height: 100%;\n  display: flex;\n  flex-direction: column;\n  \n  .selected {\n    border-radius: 8px;\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n  \n  @media (max-width: 768px) {\n    box-sizing: border-box;\n    border-right-width: 0;\n    flex-direction: row;\n    width: 100%;\n    height: auto;\n    overflow: auto;\n\n    ::-webkit-scrollbar {\n        width: 0 !important;\n    }\n  }\n"]);return je=function(){return e},e}function Se(){var e=Object(f.a)(["\n  min-height: 100vh;\n  box-sizing: border-box;\n"]);return Se=function(){return e},e}var Ce=function(e){return i.a.createElement(re.a,Object.assign({},e,{maxWidth:425}))},Ae=function(e){return i.a.createElement(re.a,Object.assign({},e,{minWidth:426,maxWidth:768}))},Ie=function(e){return i.a.createElement(re.a,Object.assign({},e,{minWidth:769}))},Te=T.a.div(Se()),ze=T.a.div(je()),De=T.a.div(Oe()),Pe=T.a.div(ke()),Ne=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).state={showMenu:!0},n}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.match,a=C(t.theme),r=i.a.createElement(A.a,{id:"settings"},function(e){return i.a.createElement(ne.Helmet,null,i.a.createElement("title",null,e))}),o=i.a.createElement(Pe,null,i.a.createElement(h.d,null,i.a.createElement(h.b,{exact:!0,path:"".concat(n.url,"/slogan"),component:Object(x.b)(_e,Le)(Object(A.e)(ge))}),i.a.createElement(h.b,{exact:!0,path:"".concat(n.url,"/language"),component:Object(x.b)(_e,Le)(de)}),i.a.createElement(h.b,{exact:!0,path:"".concat(n.url,"/appearance"),component:Object(x.b)(_e,Le)(ye)}),i.a.createElement(h.b,{exact:!0,path:"".concat(n.url,"/application"),component:Object(x.b)(_e,Le)(Ee)}),i.a.createElement(h.b,{exact:!0,path:"".concat(n.url,"/about"),component:Object(x.b)(_e,Le)(we)}),i.a.createElement(h.b,{render:function(){return i.a.createElement(h.a,{to:"".concat(n.url,"/appearance")})}}))),l=["appearance","slogan","language","about"],c=i.a.createElement(g.b,{to:"/"},i.a.createElement(W.c,{style:{color:a.textPrimary,fontSize:"2em",verticalAlign:"middle"}})),s=i.a.createElement(W.d,{style:{color:a.textPrimary,fontSize:"2em",verticalAlign:"middle"},onClick:function(){return e.setState({showMenu:!e.state.showMenu})}});return i.a.createElement(Te,{style:{backgroundColor:a.background,color:a.textPrimary}},r,i.a.createElement(A.a,{id:"settings"},function(e){return[i.a.createElement(Ie,{key:0},i.a.createElement(_,{title:e,rightExtra:c})),i.a.createElement(Ae,{key:1},i.a.createElement(_,{title:e,leftExtra:c})),i.a.createElement(Ce,{key:2},i.a.createElement(_,{title:e,leftExtra:c,rightExtra:s}))]}),i.a.createElement(Ie,null,i.a.createElement("main",{style:{height:"100%",display:"flex",flexDirection:"row"}},i.a.createElement(ze,{style:{borderColor:te(a.textSecondary,.2)}},l.map(function(e,t){return i.a.createElement(g.c,{key:t,activeClassName:"selected",activeStyle:{color:a.textPrimary},style:{color:a.textSecondary},to:"".concat(n.url,"/").concat(e)},i.a.createElement(De,null,i.a.createElement(A.a,{id:"settings.".concat(e)})))})),o)),i.a.createElement(Ae,null,i.a.createElement("main",{style:{width:"100%",display:"flex",flexDirection:"column"}},i.a.createElement(ze,{style:{borderColor:te(a.textSecondary,.2)}},l.map(function(e,t){return i.a.createElement(g.c,{key:t,activeClassName:"selected",activeStyle:{color:a.textPrimary},style:{color:a.textSecondary},to:"".concat(n.url,"/").concat(e)},i.a.createElement(De,null,i.a.createElement(A.a,{id:"settings.".concat(e)})))})),o)),i.a.createElement(Ce,null,i.a.createElement("main",{style:{width:"100%",display:"flex",flexDirection:"column"}},this.state.showMenu?i.a.createElement(ze,{style:{borderColor:te(a.textSecondary,.2),width:"100%",display:"flex",flexDirection:"column"}},l.map(function(e,t){return i.a.createElement(g.c,{key:t,activeClassName:"selected",activeStyle:{color:a.textPrimary},style:{color:a.textSecondary},to:"".concat(n.url,"/").concat(e)},i.a.createElement(De,null,i.a.createElement(A.a,{id:"settings.".concat(e)})))})):void 0,o)))}}]),t}(r.Component),_e=function(e){return{language:e.settings.language,theme:e.settings.theme,slogan:e.settings.slogan,interval:e.settings.interval}},Le=function(e){return{updateLanguage:function(t){return e(J(t))},updateTheme:function(t){return e($(t))},updateSlogan:function(t){return e(Q(t))},updateInterval:function(t){return e(Z(t))}}},Me=Object(x.b)(_e,Le)(Ne),We={appName:"\u6211\u7231\u5de5\u4f5c","slogan.default":"**\u4f18\u79c0**|\u662f\u4e00\u79cd\u4e60\u60ef\n**\u4f18\u79c0**|\u662f\u4e0e\u751f\u4ff1\u6765\u7684\u5929\u8d4b\n**\u6211\u7231\u5de5\u4f5c**\n\u5de5\u4f5c\u4f7f\u6211\u5feb\u4e50\n\u6211\u5f9c\u5f89\u5728\u5de5\u4f5c\u7684\u6d77\u6d0b\u91cc\n\u4e0a\u53f8\u53eb\u6211\u5403\u996d|\u6211\u5145\u8033\u4e0d\u95fb\n\u540c\u4e8b\u558a\u6211\u559d\u6c34|\u6211\u65e0\u52a8\u4e8e\u8877\n\u8001\u677f\u558a\u6211\u7761\u89c9|\u6211\u767e\u822c\u63a8\u8f9e","action.ok":"\u597d\u7684","action.save":"\u4fdd\u5b58","action.save.success":"\u4fdd\u5b58\u6210\u529f","action.cancel":"\u53d6\u6d88","action.reset":"\u91cd\u7f6e",settings:"\u8bbe\u7f6e","settings.application":"\u5e94\u7528\u7a0b\u5e8f","settings.appearance":"\u754c\u9762","settings.language":"\u8bed\u8a00","settings.language.default":"\u8ddf\u968f\u7cfb\u7edf","settings.about":"\u5173\u4e8e","settings.slogan":"\u6807\u8bed","settings.slogan.syntax":"\u8bed\u6cd5\u8bf4\u660e","settings.slogan.syntax.summary":"\u4e00\u884c\u8bed\u53e5\u4e3a\u4e00\u6bb5\uff0c\u4f7f\u7528 | \u8fdb\u884c\u6bb5\u5185\u5206\u884c\n\n\u53e6\u5916\u652f\u6301\u4f7f\u7528\u90e8\u5206\u7b80\u5355\u7684 Markdown \u8bed\u6cd5\uff1a\n\n`**\u52a0\u7c97**` \u21e8 **\u52a0\u7c97**\n\n`*\u659c\u4f53*` \u21e8 *\u659c\u4f53*\n\n`~~\u5220\u9664~~` \u21e8 ~~\u5220\u9664~~","settings.slogan.custom":"\u81ea\u5b9a\u4e49\u6807\u8bed","settings.slogan.interval":"\u65f6\u95f4\u95f4\u9694","settings.about.release_note":"\u66f4\u65b0\u65e5\u5fd7","settings.appearance.theme":"\u4e3b\u9898","settings.appearance.theme.white":"\u767d \u8272","settings.appearance.theme.black":"\u9ed1 \u8272","settings.appearance.theme.light":"\u4eae \u8272","settings.appearance.theme.dark":"\u6697 \u8272","settings.appearance.theme.chrome-dark":"Chrome(\u6697)"},Ue={appName:"\u6211\u611b\u5de5\u4f5c","slogan.default":"**\u512a\u79c0**|\u662f\u4e00\u7a2e\u7fd2\u6163\n**\u512a\u79c0**|\u662f\u8207\u751f\u4ff1\u4f86\u7684\u5929\u8ce6\n**\u6211\u611b\u5de5\u4f5c**\n\u5de5\u4f5c\u4f7f\u6211\u5feb\u6a02\n\u6211\u5f9c\u5f89\u5728\u5de5\u4f5c\u7684\u6d77\u6d0b\u88e1\n\u4e0a\u53f8\u53eb\u6211\u5403\u98ef|\u6211\u5145\u8033\u4e0d\u805e\n\u540c\u4e8b\u558a\u6211\u559d\u6c34|\u6211\u7121\u52d5\u65bc\u8877\n\u8001\u95c6\u558a\u6211\u7761\u89ba|\u6211\u767e\u822c\u63a8\u8fad","action.ok":"\u597d\u7684","action.save":"\u4fdd\u5b58","action.save.success":"\u4fdd\u5b58\u6210\u529f","action.cancel":"\u53d6\u6d88","action.reset":"\u91cd\u7f6e",settings:"\u8a2d\u7f6e","settings.application":"\u61c9\u7528\u7a0b\u5e8f","settings.appearance":"\u754c\u9762","settings.language":"\u8a9e\u8a00","settings.language.default":"\u8ddf\u96a8\u7cfb\u7d71","settings.about":"\u95dc\u65bc","settings.slogan":"\u6a19\u8a9e","settings.slogan.syntax":"\u8a9e\u6cd5\u8aaa\u660e","settings.slogan.syntax.summary":"\u4e00\u884c\u8a9e\u53e5\u70ba\u4e00\u6bb5\uff0c\u4f7f\u7528 | \u9032\u884c\u6bb5\u5167\u5206\u884c\n\n\u53e6\u5916\u652f\u6301\u4f7f\u7528\u90e8\u5206\u7c21\u55ae\u7684 Markdown \u8a9e\u6cd5\uff1a\n\n`**\u52a0\u7c97**` \u21e8 **\u52a0\u7c97**\n\n`*\u659c\u9ad4*` \u21e8 *\u659c\u9ad4*\n\n`~~\u522a\u9664~~` \u21e8 ~~\u522a\u9664~~","settings.slogan.custom":"\u81ea\u5b9a\u7fa9\u6a19\u8a9e","settings.slogan.interval":"\u6642\u9593\u9593\u9694","settings.about.release_note":"\u66f4\u65b0\u65e5\u8a8c","settings.appearance.theme":"\u4e3b\u984c","settings.appearance.theme.white":"\u767d \u8272","settings.appearance.theme.black":"\u9ed1 \u8272","settings.appearance.theme.light":"\u4eae \u8272","settings.appearance.theme.dark":"\u6697 \u8272","settings.appearance.theme.chrome-dark":"Chrome(\u6697)"},Re={appName:"I \u2764 Works","slogan.default":"**Excellent**| is a habit\n**Excellent**| is a gift\n**I love working**\nWorking makes me happy\nI am in the ocean of work\nBoss told me to have lunch | I turn a deaf ear\nColleagues call me to drink | I am indifferent\nManager call me to sleep | I refuse strongly","action.ok":"OK","action.save":"Save","action.save.success":"Saved successfully","action.cancel":"Cancel","action.reset":"Reset",settings:"Settings","settings.application":"Application","settings.appearance":"Appearance","settings.language":"Language","settings.language.default":"Default","settings.about":"About","settings.slogan":"Slogan","settings.slogan.syntax":"Syntax description","settings.slogan.syntax.summary":"One line statement is a paragraph, use '|' to perform line break \n\nAnd you can use some basic Markdown inline syntax: \n\n`**Bold**` \u21e8 **Bold**\n\n`*Italic*` \u21e8 *Italic*\n\n`~~Delete~~` \u21e8 ~~Delete~~","settings.slogan.custom":"Custom slogan","settings.slogan.interval":"Interval","settings.about.release_note":"Release Notes","settings.appearance.theme":"Theme","settings.appearance.theme.white":"White","settings.appearance.theme.black":"Black","settings.appearance.theme.light":"Light","settings.appearance.theme.dark":"Dark","settings.appearance.theme.chrome-dark":"Chrome Dark"};function He(){for(var e={},t=arguments.length,n=new Array(t),a=0;a<t;a++)n[a]=arguments[a];for(var r=0,i=n;r<i.length;r++){var o=i[r];for(var l in o)e[l+""]=o[l+""]}return e}function Fe(e){var t={};switch(void 0!==e&&null!=e&&e.length>0?e:navigator.userLanguage||navigator.language){case"zh-Hans":case"zh-CN":t=We;break;case"zh-HK":case"zh-TW":case"zh-MO":case"zh-SG":case"zh-Hant":t=He(We,Ue);break;default:t=Re}return He(Re,t)}var Ve=n(70),Be=n.n(Ve),Ge=n(71),Xe=n.n(Ge);Object(A.c)([].concat(Object(p.a)(Xe.a),Object(p.a)(Be.a)));var Ke=function(e){function t(){return Object(c.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=C(this.props.theme),t=i.a.createElement(A.a,{id:"appName"},function(t){return i.a.createElement(ne.Helmet,null,i.a.createElement("meta",{charSet:"utf-8"}),i.a.createElement("title",null,t),i.a.createElement("meta",{name:"theme-color",content:e.background}))}),n=i.a.createElement(g.a,null,i.a.createElement(h.d,null,i.a.createElement(h.b,{exact:!0,path:"/",component:F}),i.a.createElement(h.b,{path:"/settings",component:Me}),i.a.createElement(h.b,{render:function(){return i.a.createElement(h.a,{to:"/"})}})));return i.a.createElement(A.b,{locale:navigator.language,messages:Fe(this.props.language)},i.a.createElement("div",null,t,n))}}]),t}(r.Component),qe=Object(x.b)(function(e){return{language:e.settings.language,theme:e.settings.theme}},null)(Ke),Je=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function $e(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}var Qe=n(15),Ze=n(72),Ye=n.n(Ze),et=n(35),tt=n(73),nt=n.n(tt),at={};var rt=Object(Qe.c)({settings:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:at,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return Object(I.a)({},e,{language:t.language});case B:return Object(I.a)({},e,{theme:t.theme});case G:return Object(I.a)({},e,{slogan:t.slogan});case K:return Object(I.a)({},e,{fontSize:t.fontSize});case q:return Object(I.a)({},e,{fontAlign:t.fontAlign});case X:return Object(I.a)({},e,{interval:t.interval});default:return e}}}),it=[Ye.a],ot=Qe.a.apply(void 0,it)(Qe.d),lt=window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__({actionCreators:a}),ct={key:"root",storage:nt.a},st=Object(et.a)(ct,rt),ut={};var dt=n(74),mt=ot(st,ut,lt);l.a.render(i.a.createElement(x.a,{store:mt},i.a.createElement(dt.a,{persistor:Object(et.b)(mt)},i.a.createElement(qe,null))),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("","/service-worker.js");Je?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):$e(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):$e(e)})}}()},63:function(e,t){},69:function(e){e.exports={name:"iloveworks",homepage:"https://sorcererxw.github.io/",version:"0.1.3",private:!0,dependencies:{autosize:"^4.0.2",fbjs:"^1.0.0",intl:"^1.2.5","prop-types":"^15.6.2","query-string":"^6.5.0",react:"^16.4.1","react-addons-css-transition-group":"^15.6.2","react-dom":"^16.4.2","react-helmet":"^5.2.0","react-icons":"^3.0.4","react-intl":"^2.4.0","react-intl-redux":"^2.0.1","react-markdown":"^4.0.8","react-redux":"^7.0.3","react-responsive":"^6.1.2","react-router-dom":"^5.0.0","react-scripts":"^3.0.1",redux:"^4.0.0","redux-logger":"^3.0.6","redux-persist":"^5.10.0","styled-components":"^4.2.1"},devDependencies:{"gh-pages":"^2.0.1","redux-devtools":"^3.4.1"},scripts:{start:"react-scripts start",build:"react-scripts build",test:"react-scripts test --env=jsdom",eject:"react-scripts eject",predeploy:"npm run build",deploy:"gh-pages -d build"},browserslist:{production:[">0.2%","not dead","not op_mini all"],development:["last 1 chrome version","last 1 firefox version","last 1 safari version"]}}},76:function(e,t,n){e.exports=n(204)},81:function(e,t,n){}},[[76,1,2]]]);
//# sourceMappingURL=main.84b8858c.chunk.js.map