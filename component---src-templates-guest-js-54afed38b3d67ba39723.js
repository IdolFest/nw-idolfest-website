(self.webpackChunknw_idolfest_website=self.webpackChunknw_idolfest_website||[]).push([[477],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.__esModule=!0,e.exports.default=e.exports},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.__esModule=!0,e.exports.default=e.exports},9100:function(e,t,r){var n=r(9489),o=r(7067);function u(t,r,a){return o()?(e.exports=u=Reflect.construct.bind(),e.exports.__esModule=!0,e.exports.default=e.exports):(e.exports=u=function(e,t,r){var o=[null];o.push.apply(o,t);var u=new(Function.bind.apply(e,o));return r&&n(u,r.prototype),u},e.exports.__esModule=!0,e.exports.default=e.exports),u.apply(null,arguments)}e.exports=u,e.exports.__esModule=!0,e.exports.default=e.exports},182:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.__esModule=!0,e.exports.default=e.exports},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.__esModule=!0,e.exports.default=e.exports},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.__esModule=!0,e.exports.default=e.exports},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.__esModule=!0,e.exports.default=e.exports},319:function(e,t,r){var n=r(3646),o=r(6860),u=r(3323),a=r(8206);e.exports=function(e){return n(e)||o(e)||u(e)||a()},e.exports.__esModule=!0,e.exports.default=e.exports},3323:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.__esModule=!0,e.exports.default=e.exports},1274:function(e,t,r){var n=r(1048);e.exports={MDXRenderer:n}},1048:function(e,t,r){var n=r(319),o=r(9100),u=r(182),a=r(7316),c=["scope","children"];function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),p=r(4983).mdx,f=r(3191).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,u=a(e,c),i=f(t),d=s.useMemo((function(){if(!r)return null;var e=l({React:s,mdx:p},i),t=Object.keys(e),u=t.map((function(t){return e[t]}));return o(Function,["_fn"].concat(t,[""+r])).apply(void 0,[{}].concat(n(u)))}),[r,t]);return s.createElement(d,l({},u))}},3576:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(7294),o=r(2112),u=r(8266),a=r(838),c=r(7627),i=r(9204),l=r(6900),s=r(994),p=(0,c.Z)((function(e){return{guest:{"& .social":{padding:"1em",fontSize:".5em","& a":{textDecoration:"none",boxShadow:"none","& :hover":{color:e.palette.light_pink}},"& svg":{}}},guestGrid:{flexWrap:"nowrap",alignItems:"center","@media (max-width: 678px)":{flexDirection:"column"}}}})),f=(0,o.Z)(u.Z)({paddingLeft:"1em",fontSize:"1.25em"});function d(e){var t=e.personName,r=e.guestTitle,o=e.guestSocials,c=e.children,d=e.year,m=(e.image,p());return n.createElement(u.Z,{className:m.guest},n.createElement(a.Z,{container:!0,className:m.guestGrid},n.createElement(i.Z,{personName:t,year:d,showName:!1}),n.createElement(f,null,c)),n.createElement(a.Z,{container:!0,style:{justifyContent:"center"}},o.map((function(e){var t=e.link,r=e.icon,o=e.iconLibrary,u=void 0===o?"fab":o;return n.createElement("div",{key:r},function(e){return n.createElement(a.Z,{item:!0,className:"social"},e)}((0,s.d)(t,r,null,u)))}))),n.createElement("h3",null,n.createElement(l.Z,null,r)))}},4357:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return p}});var n=r(7294),o=r(7095),u=r(5583),a=r(6273),c=r(5954),i=r(1274),l=r(3576),s=["twitch","youtube","twitter","homepage","instagram","bandcamp","spotify","facebook","tiktok","patreon"];function p(e){var t=e.data,r=(null==t?void 0:t.mdx)||{},p=(null==r?void 0:r.frontmatter)||{},f=[];return s.forEach((function(e){var t;null!==p[e]&&(null===(t=p[e])||void 0===t?void 0:t.length)>0&&("homepage"===e?f.push({link:p[e],icon:"home",iconLibrary:"fas"}):f.push({link:p[e],icon:e}))})),n.createElement(o.Z,null,n.createElement(u.Z,{title:p.title}),n.createElement(c.Z,{title:p.title}),n.createElement(a.Z,null,n.createElement(l.Z,{personName:p.name,guestTitle:p.descriptor,guestSocials:f,image:p.guestimg},n.createElement(i.MDXRenderer,null,r.body))))}}}]);
//# sourceMappingURL=component---src-templates-guest-js-54afed38b3d67ba39723.js.map