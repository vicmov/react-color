(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[349],{363:function(e){function r(e){var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}r.keys=function(){return[]},r.resolve=r,r.id=363,e.exports=r},2664:function(e,r,t){"use strict";t.d(r,{Z:function(){return y}});var n=t(2951),o=t(1976),a=t(7591),i=t(3415),s=t(1473),l=(t(6991),{markdown:"Markdown_markdown__pdFcg",editor:"Markdown_editor__ktea2",warpper:"Markdown_warpper__j-FaN",example:"Markdown_example__q3W5x",footer:"Markdown_footer__ShQo5"}),c=t(189),u=t(3782),d=t(4638),p=t(7963),f=t(2094),h=t(5142),g=t(9286),v=["inline","node"],x=["data-meta"];function b(e){return(0,g.jsx)(d.Z,{disableCopy:!0,source:e.source,style:{padding:"20px 26px",minHeight:120},components:{code:function(r){var t,n=r.inline,o=r.node,a=(0,u.Z)(r,v),i=a,s=i["data-meta"],l=(0,u.Z)(i,x);if(n||!(0,h.pN)(s))return(0,g.jsx)("code",(0,c.Z)({},a));var d=null===(t=o.position)||void 0===t?void 0:t.start.line,b=(0,h.Mx)(s)||String(d),m=e.components["".concat(b)];if(b&&"function"===typeof m){var y=(0,f.U)(o.children),j=(0,h.aE)(s);return(0,g.jsx)(p.Z,{toolbar:j.title||"Example Display",code:(0,g.jsx)("code",(0,c.Z)({},l)),text:y,children:(0,g.jsx)(m,{})})}return(0,g.jsx)("code",(0,c.Z)({},l))}}})}var m=function(e){var r=e.editorUrl;return r?(0,g.jsx)("a",{className:l.editor,target:"_blank",rel:"noreferrer",href:"https://github.com/uiwjs/react-color/edit/main".concat(r),children:"Edit this page"}):null},y=function(e){(0,a.Z)(t,e);var r=(0,i.Z)(t);function t(e){var o;return(0,n.Z)(this,t),(o=r.call(this,e)).editorUrl=void 0,o.getMdStr=void 0,o.example=void 0,o.state={mdStr:""},o}return(0,o.Z)(t,[{key:"componentDidMount",value:function(){var e=this;this.getMdStr&&this.getMdStr().then((function(r){e.setState({mdStr:r.default.source,mdObj:r.default})}))}},{key:"render",value:function(){var e=this.state.mdObj||{},r=e.source,t=e.components,n=e.data;return(0,g.jsxs)("div",{className:[l.warpper,"wmde-markdown-var"].join(" "),children:[(0,g.jsx)("dark-mode",{light:"Dark",dark:"Light"}),(0,g.jsxs)("div",{className:l.markdown,children:[(0,g.jsx)(m,{editorUrl:this.editorUrl}),this.example&&(0,g.jsx)("div",{className:l.example,children:this.example}),(0,g.jsx)(b,{source:r||"",components:t||{},data:n||{}}),(0,g.jsx)(m,{editorUrl:this.editorUrl})]}),(0,g.jsxs)("div",{className:l.footer,children:[(0,g.jsx)("a",{href:"https://uiwjs.github.io/npm-unpkg/#/pkg/@uiw/react-color/file/README.md",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/badge/Open%20in-unpkg-blue",alt:"Open in unpkg"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/issues",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/issues/uiwjs/react-color",alt:"Github Issues"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/stargazers",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/stars/uiwjs/react-color.svg",alt:"Github Stars"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color/releases",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/github/release/uiwjs/react-color.svg",alt:"Github Release"})}),(0,g.jsx)("a",{href:"https://github.com/uiwjs/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/dub/l/vibe-d.svg",alt:"License MIT"})}),(0,g.jsx)("a",{href:"https://www.npmjs.com/package/@uiw/react-color",target:"__blank",children:(0,g.jsx)("img",{src:"https://img.shields.io/npm/v/@uiw/react-color.svg",alt:"npm"})}),(0,g.jsxs)("p",{children:["Copyright \xa9 2021"," ",(0,g.jsx)("a",{href:"https://github.com/uiwjs",target:"__blank",children:"uiwjs"}),". All rights reserved."]})]})]})}}]),t}(s.Component)},2532:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return h}});var n=t(1976),o=t(2951),a=t(7591),i=t(3415),s=t(189),l=t(1473),c=t(1775),u=t(2664),d=t(7664),p=t(9286);function f(){var e=(0,l.useContext)(d._y),r=e.hsva,t=e.dispatch;return(0,p.jsx)("div",{style:{width:256},children:(0,p.jsx)(c.Z,{color:r,onChange:function(e){t({hsva:(0,s.Z)((0,s.Z)({},r),e.hsva)})}})})}var h=function(e){(0,a.Z)(s,e);var r=(0,i.Z)(s);function s(){var e;(0,o.Z)(this,s);for(var n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];return(e=r.call.apply(r,[this].concat(a))).editorUrl="/packages/color-sketch/README.md",e.getMdStr=function(){return t.e(820).then(t.bind(t,6820))},e.example=(0,p.jsx)(f,{}),e}return(0,n.Z)(s)}(u.Z)},3145:function(e,r,t){"use strict";function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:function(){return u}});var o=t(1473),a=t(6629),i=t(6433),s=t(9286),l=["prefixCls","hsva","placement","rProps","gProps","bProps","aProps","className","style","onChange"],c=o.forwardRef((function(e,r){var t=e.prefixCls,o=void 0===t?"w-color-editable-input-rgba":t,c=e.hsva,u=e.placement,d=void 0===u?"bottom":u,p=e.rProps,f=void 0===p?{}:p,h=e.gProps,g=void 0===h?{}:h,v=e.bProps,x=void 0===v?{}:v,b=e.aProps,m=void 0===b?{}:b,y=e.className,j=e.style,w=e.onChange,k=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,l),C=c?(0,i.hsvaToRgba)(c):{};function N(e){var r=Number(e.target.value);r&&r>255&&(e.target.value="255"),r&&r<0&&(e.target.value="0")}var Z=function(e,r,t){"number"===typeof e&&("a"===r&&(e<0&&(e=0),e>100&&(e=100),w&&w((0,i.color)((0,i.rgbaToHsva)(n({},C,{a:e/100}))))),e>255&&(e=255,t.target.value="255"),e<0&&(e=0,t.target.value="0"),"r"===r&&w&&w((0,i.color)((0,i.rgbaToHsva)(n({},C,{r:e})))),"g"===r&&w&&w((0,i.color)((0,i.rgbaToHsva)(n({},C,{g:e})))),"b"===r&&w&&w((0,i.color)((0,i.rgbaToHsva)(n({},C,{b:e})))))};return(0,s.jsxs)("div",n({ref:r,className:[o,y||""].filter(Boolean).join(" ")},k,{style:n({fontSize:11,display:"flex"},j),children:[(0,s.jsx)(a.Z,n({label:"R",value:C.r||0,onBlur:N,placement:d,onChange:function(e,r){return Z(r,"r",e)}},f,{style:n({},f.style)})),(0,s.jsx)(a.Z,n({label:"G",value:C.g||0,onBlur:N,placement:d,onChange:function(e,r){return Z(r,"g",e)}},g,{style:n({marginLeft:5},f.style)})),(0,s.jsx)(a.Z,n({label:"B",value:C.b||0,onBlur:N,placement:d,onChange:function(e,r){return Z(r,"b",e)}},x,{style:n({marginLeft:5},x.style)})),m&&(0,s.jsx)(a.Z,n({label:"A",value:C.a?parseInt(String(100*C.a),10):0,onBlur:N,placement:d,onChange:function(e,r){return Z(r,"a",e)}},m,{style:n({marginLeft:5},m.style)}))]}))}));c.displayName="EditableInputRGBA";var u=c},6629:function(e,r,t){"use strict";t.d(r,{Z:function(){return c}});var n=t(1026);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}var a=t(1473),i=t(9286),s=["prefixCls","placement","label","value","className","style","labelStyle","inputStyle","onChange","onBlur"],l=a.forwardRef((function(e,r){var t=e.prefixCls,l=void 0===t?"w-color-editable-input":t,c=e.placement,u=void 0===c?"bottom":c,d=e.label,p=e.value,f=e.className,h=e.style,g=e.labelStyle,v=e.inputStyle,x=e.onChange,b=e.onBlur,m=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,s),y=(0,a.useState)(p),j=(0,n.Z)(y,2),w=j[0],k=j[1],C=(0,a.useRef)(!1);(0,a.useEffect)((function(){e.value!==w&&(C.current||k(e.value))}),[e.value]);var N={};return"bottom"===u&&(N.flexDirection="column"),"top"===u&&(N.flexDirection="column-reverse"),"left"===u&&(N.flexDirection="row-reverse"),(0,i.jsxs)("div",{className:[l,f||""].filter(Boolean).join(" "),style:o({position:"relative",alignItems:"center",display:"flex",fontSize:11},N,h),children:[(0,i.jsx)("input",o({ref:r,value:w,onChange:function(e,r){var t=r||e.target.value;/^#?([A-Fa-f0-9]{3,4}){1,2}$/.test(t)&&x&&x(e,t);var n=function(e){return Number(String(e).replace(/%/g,""))}(t);isNaN(n)||x&&x(e,n),k(t)},onBlur:function(r){C.current=!1,k(e.value),b&&b(r)},autoComplete:"off",onFocus:function(){return C.current=!0}},m,{style:o({width:"100%",paddingTop:2,paddingBottom:2,paddingLeft:3,paddingRight:3,fontSize:11,boxSizing:"border-box",border:"none",boxShadow:"rgb(204 204 204) 0px 0px 0px 1px inset"},v)})),d&&(0,i.jsx)("span",{style:o({color:"rgb(153, 153, 153)",textTransform:"capitalize"},g),children:d})]})}));l.displayName="EditableInput";var c=l},317:function(e,r,t){"use strict";function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:function(){return c}});var o=t(1473),a=t(1083),i=t(9286),s=["prefixCls","className","hue","onChange","direction"],l=o.forwardRef((function(e,r){var t=e.prefixCls,o=void 0===t?"w-color-hue":t,l=e.className,c=e.hue,u=void 0===c?0:c,d=e.onChange,p=e.direction,f=void 0===p?"horizontal":p,h=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,s);return(0,i.jsx)(a.default,n({ref:r,className:o+" "+(l||"")},h,{direction:f,background:"linear-gradient(to "+("horizontal"===f?"right":"bottom")+", rgb(255, 0, 0) 0%, rgb(255, 255, 0) 17%, rgb(0, 255, 0) 33%, rgb(0, 255, 255) 50%, rgb(0, 0, 255) 67%, rgb(255, 0, 255) 83%, rgb(255, 0, 0) 100%)",hsva:{h:u,s:100,v:100,a:u/360},onChange:function(e,r){d&&d({h:"horizontal"===f?360*r.left:360*r.top})}}))}));l.displayName="Hue";var c=l},3147:function(e,r,t){"use strict";function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:function(){return d}});var o=t(1473),a=t(6433),i=t(1189),s=t(9286),l=function(e){var r=e.className,t=e.color,n=e.left,a=e.top,i=e.prefixCls,l={position:"absolute",top:a,left:n};return(0,o.useMemo)((function(){return(0,s.jsx)("div",{className:i+"-pointer "+(r||""),style:l,children:(0,s.jsx)("div",{className:i+"-fill",style:{width:6,height:6,transform:"translate(-3px, -3px)",boxShadow:"rgb(255 255 255) 0px 0px 0px 1.5px, rgb(0 0 0 / 30%) 0px 0px 1px 1px inset, rgb(0 0 0 / 40%) 0px 0px 1px 2px",borderRadius:"50%",backgroundColor:t}})})}),[a,n,t,r,i])},c=["prefixCls","radius","pointer","className","style","hsva","onChange"],u=o.forwardRef((function(e,r){var t=e.prefixCls,u=void 0===t?"w-color-saturation":t,d=e.radius,p=void 0===d?0:d,f=e.pointer,h=e.className,g=e.style,v=e.hsva,x=e.onChange,b=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,c),m=n({width:200,height:200,borderRadius:p},g,{position:"relative"}),y=function(e,r){x&&x({h:v.h,s:100*e.left,v:100*(1-e.top),a:v.a})},j={top:100-v.v+"%",left:v.s+"%",color:(0,a.hsvaToHslaString)(v)};return(0,s.jsx)(i.ZP,n({className:[u,h||""].filter(Boolean).join(" ")},b,{style:n({position:"absolute",inset:0,cursor:"crosshair",backgroundImage:"linear-gradient(0deg, #000, transparent), linear-gradient(90deg, #fff, hsl("+v.h+", 100%, 50%))"},m),ref:r,onMove:y,onDown:y,children:o.createElement(f||l,n({prefixCls:u},j))}))}));u.displayName="Saturation";var d=u},1775:function(e,r,t){"use strict";t.d(r,{Z:function(){return m}});var n=t(1026);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},o.apply(this,arguments)}var a=t(1473),i=t(3147),s=t(1083),l=t(6629),c=t(3145),u=t(317),d=t(6433),p=t(6651),f=t(4571),h=t(9286),g=["prefixCls","className","onChange","width","presetColors","color","editableDisable","style"],v=["#D0021B","#F5A623","#f8e61b","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF"],x=function(e){return(0,h.jsx)("div",{style:{boxShadow:"rgb(0 0 0 / 60%) 0px 0px 2px",width:4,top:1,bottom:1,left:e.left,borderRadius:1,position:"absolute",backgroundColor:"#fff"}})},b=a.forwardRef((function(e,r){var t=e.prefixCls,b=void 0===t?"w-color-sketch":t,m=e.className,y=e.onChange,j=e.width,w=void 0===j?218:j,k=e.presetColors,C=void 0===k?v:k,N=e.color,Z=e.editableDisable,O=void 0===Z||Z,S=e.style,_=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,g),R=(0,a.useState)({h:209,s:36,v:90,a:1}),B=(0,n.Z)(R,2),E=B[0],P=B[1];(0,a.useEffect)((function(){"string"===typeof N&&(0,p.Ff)(N)&&P((0,d.hexToHsva)(N)),"object"===typeof N&&P(N)}),[N]);var T=(0,a.useCallback)((function(e){P(e),y&&y((0,d.color)(e))}),[E]);return(0,h.jsxs)("div",o({},_,{className:b+" "+(m||""),ref:r,style:o({background:"rgb(255, 255, 255)",borderRadius:4,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px, rgb(0 0 0 / 15%) 0px 8px 16px",width:w},S),children:[(0,h.jsxs)("div",{style:{padding:"10px 10px 8px"},children:[(0,h.jsx)(i.Z,{hsva:E,style:{width:"auto",height:150},onChange:function(e){return T(o({},E,e,{a:E.a}))}}),(0,h.jsxs)("div",{style:{display:"flex",marginTop:4},children:[(0,h.jsxs)("div",{style:{flex:1},children:[(0,h.jsx)(u.Z,{width:"auto",height:10,hue:E.h,pointer:x,innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){return T(o({},E,e))}}),(0,h.jsx)(s.default,{width:"auto",height:10,hsva:E,pointer:x,style:{marginTop:4},innerProps:{style:{marginLeft:1,marginRight:5}},onChange:function(e){T(o({},E,{a:e.a}))}})]}),(0,h.jsx)(s.default,{width:24,height:24,hsva:E,radius:2,style:{marginLeft:4},bgProps:{style:{background:"transparent"}},innerProps:{style:{borderRadius:2,background:(0,d.hsvaToRgbaString)(E),boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset, rgb(0 0 0 / 25%) 0px 0px 4px inset"}},pointer:function(){return(0,h.jsx)(a.Fragment,{})}})]})]}),O&&(0,h.jsxs)("div",{style:{display:"flex",margin:"0 10px 3px 10px"},children:[(0,h.jsx)(l.Z,{label:"Hex",value:(0,d.hsvaToHex)(E).replace(/^#/,"").toLocaleUpperCase(),onChange:function(e,r){var t;"string"===typeof(t=r)&&(0,p.Ff)(t)&&/(3|6)/.test(String(t.length))&&T((0,d.hexToHsva)(t))},style:{minWidth:58}}),(0,h.jsx)(c.Z,{hsva:E,style:{marginLeft:6},onChange:function(e){return T(e.hsva)}})]}),C&&C.length>0&&(0,h.jsx)(f.Z,{style:{borderTop:"1px solid rgb(238, 238, 238)",paddingTop:10,paddingLeft:10},colors:C,color:(0,d.hsvaToHex)(E),onChange:function(e){return T(e)},rectProps:{style:{marginRight:10,marginBottom:10,borderRadius:3,boxShadow:"rgb(0 0 0 / 15%) 0px 0px 0px 1px inset"}}})]}))}));b.displayName="Sketch";var m=b},4571:function(e,r,t){"use strict";function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e},n.apply(this,arguments)}t.d(r,{Z:function(){return c}});var o=t(1473),a=t(6433),i=t(9286),s=["prefixCls","className","color","colors","style","rectProps","onChange","addonAfter","addonBefore","rectRender"],l=o.forwardRef((function(e,r){var t=e.prefixCls,l=void 0===t?"w-color-swatch":t,c=e.className,u=e.color,d=e.colors,p=void 0===d?[]:d,f=e.style,h=e.rectProps,g=void 0===h?{}:h,v=e.onChange,x=e.addonAfter,b=e.addonBefore,m=e.rectRender,y=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,s),j=n({background:"rgb(144, 19, 254)",height:15,width:15,marginRight:5,marginBottom:5,cursor:"pointer",position:"relative",outline:"none",borderRadius:2},g.style),w=function(e){v&&v((0,a.hexToHsva)(e))};return(0,i.jsxs)("div",n({ref:r},y,{className:[l,c||""].filter(Boolean).join(" "),style:n({display:"flex",flexWrap:"wrap",position:"relative"},f),children:[b&&o.isValidElement(b)&&b,p&&Array.isArray(p)&&p.map((function(e,r){var t="",a="";"string"===typeof e&&(t=e,a=e),"object"===typeof e&&e.color&&(t=e.title||e.color,a=e.color);var s=u&&u.toLocaleLowerCase()===a.toLocaleLowerCase();if(m)return m({key:r,title:t,color:a,checked:!!s,style:n({},j,{background:a}),onClick:function(){return w(a)}});var l=g.children&&o.isValidElement(g.children)?o.cloneElement(g.children,{color:a,checked:s}):null;return(0,i.jsx)("div",n({tabIndex:0,title:t,onClick:function(){return w(a)}},g,{children:l,style:n({},j,{background:a})}),r)})),x&&o.isValidElement(x)&&x]}))}));l.displayName="Swatch";var c=l}}]);
//# sourceMappingURL=349.16b09b4e.chunk.js.map