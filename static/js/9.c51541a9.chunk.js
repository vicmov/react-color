(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[9],{103:function(e,t,r){"use strict";var a=r(2),i=r.n(a),n=r(4),o=r.n(n),s=r(0),c=r.n(s),l=r(10),d=r(7),u=r(19),b=r(36),p=r(38),h=r(1),f=["prefixCls","className","style","color","colors","onChange"],g=["#D9E3F0","#F47373","#697689","#37D67A","#2CCCE4","#555555","#dce775","#ff8a65","#ba68c8"],j=c.a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-block":r,n=e.className,s=e.style,c=e.color,j=e.colors,m=void 0===j?g:j,v=e.onChange,x=o()(e,f),O="string"===typeof c&&Object(l.a)(c)?Object(d.b)(c):c,w=c?Object(d.f)(O):"",y=function(e,t){"string"===typeof e&&Object(l.a)(e)&&/(3|6)/.test(String(e.length))&&v&&v(Object(d.a)(Object(d.b)(e)))};return Object(h.jsxs)("div",i()({ref:t,className:[a,n].filter(Boolean).join(" "),style:i()({width:170,borderRadius:6,background:"rgb(255, 255, 255)",boxShadow:"rgb(0 0 0 / 10%) 0 1px",position:"relative"},s)},x,{children:[Object(h.jsx)("div",{style:{width:0,height:0,borderStyle:"solid",borderWidth:"0 10px 10px",borderColor:"transparent transparent "+w,position:"absolute",top:-10,left:"50%",marginLeft:-10}}),Object(h.jsx)("div",{title:w,style:{backgroundColor:""+w,color:Object(u.a)(w),height:110,fontSize:18,borderRadius:"6px 6px 0 0",display:"flex",alignItems:"center",justifyContent:"center"},children:w.toLocaleUpperCase()}),Object(h.jsx)(p.a,{colors:m,color:w,style:{paddingLeft:10,paddingTop:10},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:4,height:22,width:22}},onChange:function(e){v&&v(Object(d.a)(e))}}),Object(h.jsx)(b.a,{value:w.toLocaleUpperCase(),onChange:function(e,t){return y(t)},onBlur:function(e){var t=e.target.value;e.target.value=t.slice(0,6),y(t.slice(0,6))},inputStyle:{height:22,outline:0,borderRadius:3,color:"#666",padding:"0 7px"},style:{padding:10,paddingTop:0,borderRadius:"0 0 6px 6px"}})]}))}));j.displayName="Block",t.a=j},19:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(7),i=function(e){if(!e)return"#fff";var t=Object(a.a)(e);return(299*t.rgb.r+587*t.rgb.g+114*t.rgb.b)/1e3>=128?"#000":"#fff"}},34:function(e,t,r){"use strict";r.d(t,"a",(function(){return p}));var a=r(31),i=r(30),n=r(32),o=r(33),s=r(0),c=r(37),l=r(35),d=r.n(l),u=r(1),b=function(e){var t=e.editorUrl;return t?Object(u.jsx)("a",{className:d.a.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(t),children:"Edit this page"}):null},p=function(e){Object(n.a)(r,e);var t=Object(o.a)(r);function r(e){var i;return Object(a.a)(this,r),(i=t.call(this,e)).editorUrl=void 0,i.getMdStr=void 0,i.example=void 0,i.state={mdStr:""},i}return Object(i.a)(r,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(t){e.setState({mdStr:t.default||t})}))}},{key:"render",value:function(){return Object(u.jsxs)("div",{className:d.a.warpper,children:[Object(u.jsxs)("div",{className:d.a.markdown,children:[Object(u.jsx)(b,{editorUrl:this.editorUrl}),this.example&&Object(u.jsx)("div",{className:d.a.example,children:this.example}),Object(u.jsx)(c.a,{source:this.state.mdStr.replace(/([\s\S]*)<!--dividing-->/,""),style:{padding:"20px 26px",minHeight:120}}),Object(u.jsx)(b,{editorUrl:this.editorUrl})]}),Object(u.jsxs)("div",{className:d.a.footer,children:[Object(u.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),Object(u.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),Object(u.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:Object(u.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),Object(u.jsxs)("p",{children:["Copyright \xa9 2021"," ",Object(u.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),r}(s.Component)},35:function(e,t,r){e.exports={markdown:"Markdown_markdown__2igKS",editor:"Markdown_editor___Td2W",warpper:"Markdown_warpper__1Ekz5",example:"Markdown_example__3LCkn",footer:"Markdown_footer__2D6Vq"}},36:function(e,t,r){"use strict";var a=r(3),i=r(2),n=r.n(i),o=r(4),s=r.n(o),c=r(0),l=r.n(c),d=r(1),u=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],b=l.a.forwardRef((function(e,t){var r=e.prefixCls,i=void 0===r?"w-color-editable-input":r,o=e.placement,l=void 0===o?"bottom":o,b=e.label,p=e.value,h=e.className,f=e.style,g=e.labelStyle,j=e.inputStyle,m=e.onChange,v=e.onBlur,x=s()(e,u),O=Object(c.useState)(p),w=Object(a.a)(O,2),y=w[0],k=w[1],C=Object(c.useRef)(!1);Object(c.useEffect)((function(){e.value!==y&&(C.current||k(e.value))}),[e.value]);var _={};return"bottom"===l&&(_.flexDirection="column"),"top"===l&&(_.flexDirection="column-reverse"),"left"===l&&(_.flexDirection="row-reverse"),Object(d.jsxs)("div",{className:[i,h||""].filter(Boolean).join(" "),style:n()({position:"relative",alignItems:"center",display:"flex",fontSize:11},_,f),children:[Object(d.jsx)("input",n()({ref:t,value:y,onChange:function(e,t){var r=t||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(r)&&m&&m(e,r);var a=function(e){return Number(String(e).replace(/%/g,""))}(r);isNaN(a)||m&&m(e,a),k(r)},onBlur:function(t){C.current=!1,k(e.value),v&&v(t)},autoComplete:"off",onFocus:function(){return C.current=!0}},x,{style:n()({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},j)})),b&&Object(d.jsx)("span",{style:n()({color:"rgb(153, 153, 153)",textTransform:"capitalize"},g),children:b})]})}));b.displayName="EditableInput",t.a=b},38:function(e,t,r){"use strict";var a=r(2),i=r.n(a),n=r(4),o=r.n(n),s=r(0),c=r.n(s),l=r(7),d=r(1),u=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],b=c.a.forwardRef((function(e,t){var r=e.prefixCls,a=void 0===r?"w-color-swatch":r,n=e.className,s=e.color,b=e.colors,p=void 0===b?[]:b,h=e.style,f=e.rectProps,g=void 0===f?{}:f,j=e.onChange,m=e.addonAfter,v=e.addonBefore,x=e.rectRender,O=o()(e,u),w=i()({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),y=function(e){j&&j(Object(l.b)(e))};return Object(d.jsxs)("div",i()({ref:t},O,{className:[a,n||""].filter(Boolean).join(" "),style:i()({display:"flex",flexWrap:"wrap",position:"relative"},h),children:[v&&c.a.isValidElement(v)&&v,p&&Array.isArray(p)&&p.map((function(e,t){var r="",a="";"string"===typeof e&&(r=e,a=e),"object"===typeof e&&e.color&&(r=e.title||e.color,a=e.color);var n=s&&s.toLocaleLowerCase()===a.toLocaleLowerCase();if(x)return x({key:t,title:r,color:a,checked:!!n,style:i()({},w,{background:a}),onClick:function(){return y(a)}});var o=g.children&&c.a.isValidElement(g.children)?c.a.cloneElement(g.children,{color:a,checked:n}):null;return Object(d.jsx)("div",i()({tabIndex:0,title:r,onClick:function(){return y(a)}},g,{children:o,style:i()({},w,{background:a})}),t)})),m&&c.a.isValidElement(m)&&m]}))}));b.displayName="Swatch",t.a=b},471:function(e,t,r){"use strict";r.r(t),r.d(t,"default",(function(){return h}));var a=r(30),i=r(31),n=r(32),o=r(33),s=r(5),c=r(0),l=r(103),d=r(34),u=r(6),b=r(1);function p(){var e=Object(c.useContext)(u.a),t=e.hsva,r=e.dispatch;return Object(b.jsx)("div",{style:{width:300},children:Object(b.jsx)(l.a,{color:t,onChange:function(e){r({hsva:Object(s.a)(Object(s.a)({},t),e.hsva)})}})})}var h=function(e){Object(n.a)(s,e);var t=Object(o.a)(s);function s(){var e;Object(i.a)(this,s);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(e=t.call.apply(t,[this].concat(n))).editorUrl="/packages/color-block/README.md",e.getMdStr=function(){return r.e(29).then(r.bind(null,438))},e.example=Object(b.jsx)(p,{}),e}return Object(a.a)(s)}(d.a)}}]);
//# sourceMappingURL=9.c51541a9.chunk.js.map