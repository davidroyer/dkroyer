webpackJsonp([0],{140:function(e,n,o){function t(e){o(167)}var A=o(17)(o(146),o(161),t,null,null);e.exports=A.exports},144:function(e,n){},145:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default={data:function(){return{links:[{href:"/",title:"Home"},{href:"/about",title:"About"},{href:"/contact",title:"Contact"}]}}}},146:function(e,n,o){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var t=o(157),A=o.n(t),r=o(156),i=o.n(r);n.default={components:{AppHeader:A.a,AppFooter:i.a}}},153:function(e,n,o){n=e.exports=o(25)(!0),n.push([e.i,"html{font-size:16px;word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}.button--green{display:inline-block;border-radius:4px;border:1px solid #3b8070;color:#3b8070;text-decoration:none;padding:10px 30px}.button--green:hover{color:#fff;background-color:#3b8070}.button--grey{display:inline-block;border-radius:4px;border:1px solid #35495e;color:#35495e;text-decoration:none;padding:10px 30px;margin-left:15px}.button--grey:hover{color:#fff;background-color:#35495e}","",{version:3,sources:["/Users/droyer/Playground-2017/dkroyer/layouts/default.vue"],names:[],mappings:"AACA,KAGE,eAAgB,AAChB,iBAAkB,AAClB,0BAA2B,AAC3B,8BAA+B,AAC/B,kCAAmC,AACnC,kCAAoC,CAGrC,AACD,sBAHE,8BAA+B,AACvB,qBAAuB,CAOhC,AALD,iBAIE,QAAU,CACX,AACD,eAEE,qBAAsB,AACtB,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,iBAAmB,CACpB,AACD,qBAEE,WAAY,AACZ,wBAA0B,CAC3B,AACD,cAEE,qBAAsB,AACtB,kBAAmB,AACnB,yBAA0B,AAC1B,cAAe,AACf,qBAAsB,AACtB,kBAAmB,AACnB,gBAAkB,CACnB,AACD,oBAEE,WAAY,AACZ,wBAA0B,CAC3B",file:"default.vue",sourcesContent:['\nhtml\n{\n  /*font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;*/\n  font-size: 16px;\n  word-spacing: 1px;\n  -ms-text-size-adjust: 100%;\n  -webkit-text-size-adjust: 100%;\n  -moz-osx-font-smoothing: grayscale;\n  -webkit-font-smoothing: antialiased;\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n}\n*, *:before, *:after\n{\n  -webkit-box-sizing: border-box;\n          box-sizing: border-box;\n  margin: 0;\n}\n.button--green\n{\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid #3b8070;\n  color: #3b8070;\n  text-decoration: none;\n  padding: 10px 30px;\n}\n.button--green:hover\n{\n  color: #fff;\n  background-color: #3b8070;\n}\n.button--grey\n{\n  display: inline-block;\n  border-radius: 4px;\n  border: 1px solid #35495e;\n  color: #35495e;\n  text-decoration: none;\n  padding: 10px 30px;\n  margin-left: 15px;\n}\n.button--grey:hover\n{\n  color: #fff;\n  background-color: #35495e;\n}\n'],sourceRoot:""}])},154:function(e,n,o){n=e.exports=o(25)(!0),n.push([e.i,"header{background:#35495e;text-align:center;padding:1em}.header{background:#40526b;color:#fff;position:fixed;top:0;left:0;width:100%;height:80px;z-index:60;-webkit-box-shadow:0 2px 5px 0 rgba(40,31,31,.56),0 2px 10px 0 rgba(32,32,32,.52);box-shadow:0 2px 5px 0 rgba(40,31,31,.56),0 2px 10px 0 rgba(32,32,32,.52);padding:.5em 1em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.header .logo{max-height:100%}h1{color:#fff;margin:0;font-weight:400}nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}nav li{list-style-type:none;margin:.25em}nav li a{color:#d7d7d7;font-weight:500;font-size:1.15em;padding:.5em 1em;text-decoration:none}nav li a.nuxt-link-active{color:#41b883}nav li a:hover{text-decoration:underline}","",{version:3,sources:["/Users/droyer/Playground-2017/dkroyer/components/Header.vue"],names:[],mappings:"AACA,OAAO,mBAAmB,kBAAkB,WAAW,CACtD,AACD,QAAQ,mBAAmB,WAAY,eAAe,MAAM,OAAO,WAAW,YAAY,WAAW,kFAAoF,0EAA4E,iBAAiB,oBAAoB,oBAAoB,aAAa,yBAAyB,sBAAsB,8BAA8B,yBAAyB,sBAAsB,kBAAkB,CACxd,AACD,cAAc,eAAe,CAC5B,AACD,GAAG,WAAY,SAAS,eAAe,CACtC,AACD,IAAI,oBAAoB,oBAAoB,aAAa,wBAAwB,qBAAqB,sBAAsB,CAC3H,AACD,OAAO,qBAAqB,YAAY,CACvC,AACD,SAAS,cAAc,gBAAgB,iBAAiB,iBAAiB,oBAAoB,CAC5F,AACD,0BAA0B,aAAa,CACtC,AACD,eAAe,yBAAyB,CACvC",file:"Header.vue",sourcesContent:["\nheader{background:#35495e;text-align:center;padding:1em\n}\n.header{background:#40526b;color:white;position:fixed;top:0;left:0;width:100%;height:80px;z-index:60;-webkit-box-shadow:0 2px 5px 0 rgba(40,31,31,0.56),0 2px 10px 0 rgba(32,32,32,0.52);box-shadow:0 2px 5px 0 rgba(40,31,31,0.56),0 2px 10px 0 rgba(32,32,32,0.52);padding:.5em 1em;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-ms-flex-align:center;align-items:center\n}\n.header .logo{max-height:100%\n}\nh1{color:white;margin:0;font-weight:400\n}\nnav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\nnav li{list-style-type:none;margin:.25em\n}\nnav li a{color:#d7d7d7;font-weight:500;font-size:1.15em;padding:.5em 1em;text-decoration:none\n}\nnav li a.nuxt-link-active{color:#41B883\n}\nnav li a:hover{text-decoration:underline\n}\n"],sourceRoot:""}])},155:function(e,n,o){n=e.exports=o(25)(!0),n.push([e.i,".footer{background:#40526b}.footer .logo{margin-bottom:1em}.footer .flexWrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center}.footer .flexWrapper .flexColumn{color:#fff;margin:1em;-webkit-box-flex:30%;-ms-flex:30%;flex:30%}.footer a{color:#01d4a7}","",{version:3,sources:["/Users/droyer/Playground-2017/dkroyer/components/Footer.vue"],names:[],mappings:"AACA,QAAQ,kBAAkB,CACzB,AACD,cAAc,iBAAiB,CAC9B,AACD,qBAAqB,oBAAoB,oBAAoB,aAAa,wBAAwB,qBAAqB,sBAAsB,CAC5I,AACD,iCAAiC,WAAY,WAAW,qBAAqB,aAAa,QAAQ,CACjG,AACD,UAAU,aAAa,CACtB",file:"Footer.vue",sourcesContent:["\n.footer{background:#40526b\n}\n.footer .logo{margin-bottom:1em\n}\n.footer .flexWrapper{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center\n}\n.footer .flexWrapper .flexColumn{color:white;margin:1em;-webkit-box-flex:30%;-ms-flex:30%;flex:30%\n}\n.footer a{color:#01D4A7\n}\n"],sourceRoot:""}])},156:function(e,n,o){function t(e){o(169)}var A=o(17)(o(144),o(163),t,null,null);e.exports=A.exports},157:function(e,n,o){function t(e){o(168)}var A=o(17)(o(145),o(162),t,null,null);e.exports=A.exports},161:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("div",[o("app-header"),o("nuxt",{staticClass:"test"}),o("app-footer")],1)},staticRenderFns:[]}},162:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("header",{staticClass:"header"},[o("nav",e._l(e.links,function(n,t){return o("li",[o("nuxt-link",{attrs:{exact:"",to:n.href}},[e._v(e._s(n.title))])],1)}))])},staticRenderFns:[]}},163:function(e,n){e.exports={render:function(){var e=this,n=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,n=e.$createElement,o=e._self._c||n;return o("footer",{staticClass:"footer"},[o("div",[e._v("\n      Footer Here\n    ")])])}]}},167:function(e,n,o){var t=o(153);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o(26)("ffd893e0",t,!0)},168:function(e,n,o){var t=o(154);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o(26)("325395a2",t,!0)},169:function(e,n,o){var t=o(155);"string"==typeof t&&(t=[[e.i,t,""]]),t.locals&&(e.exports=t.locals);o(26)("16539213",t,!0)}});