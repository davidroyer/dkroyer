webpackJsonp([1],{143:function(t,e,n){function r(t){n(167)}var o=n(17)(n(149),n(160),r,null,null);t.exports=o.exports},149:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n(159),o=n.n(r);e.default={components:{Logo:o.a}}},150:function(t,e,n){e=t.exports=n(25)(!0),e.push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{*/:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}","",{version:3,sources:["/Users/droyer/Playground-2017/dkroyer/pages/index.vue"],names:[],mappings:"AACA,WAEE,iBAAkB,AAClB,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,wBAAyB,AACrB,qBAAsB,AAClB,uBAAwB,AAChC,yBAA0B,AACtB,sBAAuB,AACnB,mBAAoB,AAC5B,iBAAmB,CACpB,AACD,QAEoJ,QACnI,AACf,gBAAiB,AACjB,gBAAiB,AACjB,cAAe,AACf,kBAAoB,CACrB,AACD,UAEE,gBAAiB,AACjB,eAAgB,AAChB,cAAe,AACf,iBAAkB,AAClB,mBAAqB,CACtB,AACD,OAEE,gBAAkB,CACnB",file:"index.vue",sourcesContent:['\n.container\n{\n  min-height: 100vh;\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  text-align: center;\n}\n.title\n{\n  /*font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */*/\n  display: block;\n  font-weight: 300;\n  font-size: 100px;\n  color: #35495e;\n  letter-spacing: 1px;\n}\n.subtitle\n{\n  font-weight: 300;\n  font-size: 42px;\n  color: #526488;\n  word-spacing: 5px;\n  padding-bottom: 15px;\n}\n.links\n{\n  padding-top: 15px;\n}\n'],sourceRoot:""}])},151:function(t,e,n){e=t.exports=n(25)(!0),e.push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear forwards 1s;animation:turn 2s linear forwards 1s;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear forwards 3.5s;animation:goright .5s linear forwards 3.5s}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear forwards 3s;animation:godown .5s linear forwards 3s;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}","",{version:3,sources:["/Users/droyer/Playground-2017/dkroyer/components/Logo.vue"],names:[],mappings:"AACA,eAAe,qBAAqB,6CAA6C,qCAAqC,kCAAkC,0BAA0B,kBAAkB,gBAAgB,aAAa,WAAW,CAC3O,AACD,UAAU,kBAAkB,MAAM,OAAO,QAAQ,QAAQ,CACxD,AACD,eAAe,oCAAoC,qCAAqC,iCAAiC,CACxH,AACD,eAAe,SAAS,AAA0G,qCAAqC,sCAAsC,iCAAiC,CAC7O,AACD,gCAFwB,UAAU,mDAAoD,0CAA4C,CAGjI,AADD,iBAAiB,SAAS,AAA0G,mCAAmC,oCAAoC,iCAAiC,CAC3O,AACD,gBAAgB,UAAU,UAAU,gDAAiD,wCAAyC,mCAAmC,oCAAoC,6BAA6B,CACjO,AACD,wBACA,GAAK,gCAAgC,uBAAuB,CAC3D,CACA,AACD,gBACA,GAAK,gCAAgC,uBAAuB,CAC3D,CACA,AACD,0BACA,GAAK,SAAS,CACb,CACA,AACD,kBACA,GAAK,SAAS,CACb,CACA,AACD,2BACA,GAAK,SAAS,CACb,CACA,AACD,mBACA,GAAK,SAAS,CACb,CACA",file:"Logo.vue",sourcesContent:["\n.VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear forwards 1s;animation:turn 2s linear forwards 1s;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px\n}\n.Triangle{position:absolute;top:0;left:0;width:0;height:0\n}\n.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41B883\n}\n.Triangle--two{top:30px;left:35px;-webkit-animation:goright 0.5s linear forwards 3.5s;animation:goright 0.5s linear forwards 3.5s;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3B8070\n}\n.Triangle--three{top:60px;left:35px;-webkit-animation:goright 0.5s linear forwards 3.5s;animation:goright 0.5s linear forwards 3.5s;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495E\n}\n.Triangle--four{top:120px;left:70px;-webkit-animation:godown 0.5s linear forwards 3s;animation:godown 0.5s linear forwards 3s;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff\n}\n@-webkit-keyframes turn{\n100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n}\n@keyframes turn{\n100%{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)\n}\n}\n@-webkit-keyframes godown{\n100%{top:180px\n}\n}\n@keyframes godown{\n100%{top:180px\n}\n}\n@-webkit-keyframes goright{\n100%{left:70px\n}\n}\n@keyframes goright{\n100%{left:70px\n}\n}\n"],sourceRoot:""}])},159:function(t,e,n){function r(t){n(168)}var o=n(17)(null,n(161),r,null,null);t.exports=o.exports},160:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("div",[n("logo"),n("h1",{staticClass:"title"},[t._v("\n      NUXT\n    ")]),n("h2",{staticClass:"subtitle"},[t._v("\n      Universal Vue.js Application\n    ")]),t._m(0)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"links"},[n("a",{staticClass:"button--green",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("Documentation")]),n("a",{staticClass:"button--grey",attrs:{href:"https://github.com/nuxt/nuxt.js",target:"_blank"}},[t._v("GitHub")])])}]}},161:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"VueToNuxtLogo"},[n("div",{staticClass:"Triangle Triangle--two"}),n("div",{staticClass:"Triangle Triangle--one"}),n("div",{staticClass:"Triangle Triangle--three"}),n("div",{staticClass:"Triangle Triangle--four"})])}]}},167:function(t,e,n){var r=n(150);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(26)("2f9385ed",r,!0)},168:function(t,e,n){var r=n(151);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);n(26)("6ff54c27",r,!0)}});