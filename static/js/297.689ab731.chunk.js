(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[297],{363:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=363,e.exports=t},2664:function(e,t,r){"use strict";r.d(t,{Z:function(){return _}});var i=r(2951),o=r(1976),s=r(7591),n=r(9616),a=r(1473),l=(r(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),c=r(189),d=r(3782),h=r(8072),u=r(4403),p=r(6327),m=r(5142),g=r(9286),f=["inline","node"],x=["data-meta"],j=u.ZP.Preview,v=u.ZP.Code,b=u.ZP.Toolbar;function w(e){return(0,g.jsx)(h.Z,{disableCopy:!0,source:e.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(t){var r,i=t.inline,o=t.node,s=(0,d.Z)(t,f),n=s,a=n["data-meta"],l=(0,d.Z)(n,x);if(i||!(0,m.pN)(a))return(0,g.jsx)("code",(0,c.Z)({},s));var h=null===(r=o.position)||void 0===r?void 0:r.start.line,w=(0,m.Mx)(a)||String(h),k=e.components["".concat(w)];if(w&&"function"===typeof k){var _=(0,p.U)(o.children),Z=(0,m.aE)(a);return(0,g.jsxs)(u.ZP,{children:[(0,g.jsx)(j,{children:(0,g.jsx)(k,{})}),(0,g.jsx)(b,{text:_,children:Z.title||"Example Display"}),(0,g.jsx)(v,{children:(0,g.jsx)("code",(0,c.Z)({},l))})]})}return(0,g.jsx)("code",(0,c.Z)({},l))}}})}var k=function(e){var t=e.editorUrl;return t?(0,g.jsx)("a",{className:l.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},_=function(e){(0,s.Z)(r,e);var t=(0,n.Z)(r);function r(e){var o;return(0,i.Z)(this,r),(o=t.call(this,e)).editorUrl=void 0,o.getMdStr=void 0,o.example=void 0,o.state={mdStr:""},o}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default.source,mdObj:t.default})}))}},{key:"render",value:function(){var e=this.state.mdObj||{},t=e.source,r=e.components,i=e.data;return(0,g.jsxs)("div",{className:[l.warpper,"wmde-markdown-var"].join(" "),children:[(0,g.jsx)("dark-mode",{permanent:!0,light:"Dark",dark:"Light"}),(0,g.jsxs)("div",{className:l.markdown,children:[(0,g.jsx)(k,{editorUrl:this.editorUrl}),this.example&&(0,g.jsxs)("div",{className:l.example,children:[(0,g.jsx)("h3",{children:"Example"}),this.example]}),(0,g.jsx)(w,{source:t||"",components:r||{},data:i||{}}),(0,g.jsx)(k,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:l.footer,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(a.Component)},3394:function(e,t,r){"use strict";r.r(t),r.d(t,{Component:function(){return m}});var i=r(1976),o=r(2951),s=r(7591),n=r(9616),a=r(189),l=r(1473),c=r(4714),d=r(2664),h=r(7664),u=r(9286);function p(){var e=(0,l.useContext)(h._y),t=e.hsva,r=e.dispatch;return(0,u.jsx)("div",{style:{width:256},children:(0,u.jsx)(c.Z,{color:t,onChange:function(e){r({hsva:(0,a.Z)((0,a.Z)({},t),e.hsva)})}})})}var m=function(e){(0,s.Z)(a,e);var t=(0,n.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=t.call.apply(t,[this].concat(s))).editorUrl="/packages/color-material/README.md",e.getMdStr=function(){return r.e(477).then(r.bind(r,2477))},e.example=(0,u.jsx)(p,{}),e}return(0,i.Z)(a)}(d.Z)},4714:function(e,t,r){"use strict";var i=r(5773),o=r(808),s=r(1473),n=r(6651),a=r(6433),l=r(353),c=r(7302),d=r(9286),h=["prefixCls","className","style","color","onChange"],u={boxShadow:"initial",borderWidth:"0 0 1px 0",borderBottomColor:"#eee",borderBottomStyle:"solid",height:30,outline:0,fontSize:15,padding:0},p=s.forwardRef((function(e,t){var r=e.prefixCls,s=void 0===r?"w-color-material":r,p=e.className,m=e.style,g=e.color,f=e.onChange,x=(0,o.Z)(e,h),j="string"===typeof g&&(0,n.Ff)(g)?(0,a.hexToHsva)(g):g,v=g?(0,a.hsvaToHex)(j).replace(/^#/,""):"",b=function(e){f&&f((0,a.color)(e))},w=function(e,t){"string"===typeof e&&(0,n.Ff)(e)&&/(3|6)/.test(String(e.length))&&f&&f((0,a.color)((0,a.hexToHsva)(e)))};return(0,d.jsxs)("div",(0,i.Z)({ref:t,className:[s,p||""].filter(Boolean).join(" "),style:(0,i.Z)({padding:16,width:98,fontFamily:"Roboto",backgroundColor:"#fff"},m)},x,{children:[(0,d.jsx)(l.Z,{label:"Hex",value:v.toLocaleUpperCase(),onChange:function(e,t){return w(t)},onBlur:function(e){var t=e.target.value;e.target.value=t.slice(0,6),w(t.slice(0,6))},inputStyle:{outline:0,border:0,height:30,fontSize:15,padding:0,boxShadow:"initial",borderWidth:"0 0 2px 0",borderBottomColor:v?"#"+v:"#eee",borderBottomStyle:"solid"},style:{flexDirection:"column-reverse",alignItems:"flex-start"}}),(0,d.jsx)(c.Z,{hsva:j,placement:"top",style:{marginTop:11},rProps:{style:{alignItems:"flex-start"},inputStyle:(0,i.Z)({},u)},gProps:{style:{alignItems:"flex-start"},inputStyle:(0,i.Z)({},u)},bProps:{style:{alignItems:"flex-start"},inputStyle:(0,i.Z)({},u)},aProps:!1,onChange:function(e){return b(e.hsva)}})]}))}));p.displayName="Material",t.Z=p}}]);
//# sourceMappingURL=297.689ab731.chunk.js.map