webpackJsonp([1],{"1uuo":function(e,t){},NHnr:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=r("7+uW"),n=r("zL8q"),o=r.n(n),l=(r("tvR6"),{render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]});var s=r("VU/8")({name:"App"},l,!1,function(e){r("s347")},null,null).exports,i=r("/ocq"),u={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"hello"},[r("h1",[e._v(e._s(e.msg))]),e._v(" "),r("h2",[e._v("Essential Links")]),e._v(" "),e._m(0),e._v(" "),r("h2",[e._v("Ecosystem")]),e._v(" "),e._m(1)])},staticRenderFns:[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ul",[r("li",[r("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[e._v("\n        Core Docs\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[e._v("\n        Forum\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[e._v("\n        Community Chat\n      ")])]),e._v(" "),r("li",[r("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[e._v("\n        Twitter\n      ")])]),e._v(" "),r("br"),e._v(" "),r("li",[r("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[e._v("\n        Docs for This Template\n      ")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[t("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[this._v("\n        vue-router\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[this._v("\n        vuex\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[this._v("\n        vue-loader\n      ")])]),this._v(" "),t("li",[t("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[this._v("\n        awesome-vue\n      ")])])])}]};r("VU/8")({name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},u,!1,function(e){r("1uuo")},"data-v-d8ec41bc",null).exports;var c=r("//Fk"),m=r.n(c),v=r("mtWM"),p=0,d=r.n(v).a.create({timeout:3e5});d.interceptors.request.use(function(e){return e},function(e){return m.a.reject(e)}),d.interceptors.response.use(function(e){return e.data.code&&e.data.code,e.data},function(e){return 0==p&&(p+=1),setTimeout(function(){p=0},1e3),console.log(e),401!=e.response.status&&n.Message.error(e.message),401==e.response.status&&localStorage.setItem("bwex::isLogin",!1),m.a.reject(e)});var _=function(e,t){!function(e){var t=e.url,r=e.data,a=e.success,n=e.error;d({method:"get",url:t,params:r}).then(function(e){a&&a(e),n&&n(e)})}({url:e,data:t.data,success:t.success})},f={data:function(){return{fullscreenLoading:!1,form:{MinerIDS:"",API:""},SumWinBlocks:0,SumPower:0,SumTotalPower:0,SumTotalRewards:0,SumTotalMinerCount:0,tableData:[]}},methods:{onSubmit:function(){var e=this;if(this.form.MinerIDS){this.fullscreenLoading=!0,e.tableData=[],e.SumWinBlocks=0,e.SumPower=0,e.SumTotalPower=0,e.SumTotalRewards=0,e.SumTotalMinerCount=0;var t=this.form.MinerIDS.split(",");t.forEach(function(r){""!=r&&0==r.toLowerCase().indexOf("f")&&function(r){_("/api/miner",{data:{id:r},success:function(a){console.log(a);var n=a.miner.WinBlocks,o=a.miner.Worker,l=a.miner.Owner,s=a.miner.Coinbase,i=(a.miner.OwnerAddress,a.miner.MinerPower.RawBytePower),u=a.miner.MinerPower.QualityAdjPower,c=(a.miner.TotalPower.RawBytePower,a.miner.TotalPower.QualityAdjPower),m=a.miner.TotalRewards,v=i/1024/1024/1024,p=u/1024/1024/1024,d=" GB",_=" GB";v<1&&(v=i/1024/1024,d=" MB"),p<1&&(p=u/1024/1024,_=" MB");var f=parseFloat(u/c*100).toFixed(4)+"%";e.SumPower+=parseFloat(u),e.SumTotalPower=parseFloat(c),e.SumTotalRewards+=parseFloat(m),e.SumWinBlocks+=parseInt(n),e.SumTotalMinerCount+=1,e.SumTotalMinerCount>=t.length-5&&(e.fullscreenLoading=!1),e.tableData.push({MinerID:r,Owner:l,Worker:o,Coinbase:s,MinerPower_QualityAdjPower:p.toFixed(2)+_,MinerPower_RawBytePower:v.toFixed(2)+d,MinerPower_Percent:f,WinBlocks:n,TotalRewards:m+" EPK"})}})}(r)})}else n.Message.error("请输入MinerIDS,多个用,隔开，建议每次查询不超过50个")}}},w={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("el-form",{ref:"form",attrs:{model:e.form,"label-width":"80px"}},[e._e(),e._v(" "),r("el-form-item",{attrs:{label:"MinerIDS"}},[r("el-input",{attrs:{type:"textarea",autosize:{minRows:2,maxRows:4},placeholder:"MinerID,多个用,隔开，建议每次查询不超过50个"},model:{value:e.form.MinerIDS,callback:function(t){e.$set(e.form,"MinerIDS",t)},expression:"form.MinerIDS"}})],1),e._v(" "),r("el-form-item",[r("el-button",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:e.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],attrs:{type:"primary"},on:{click:e.onSubmit}},[e._v("立即查询")])],1)],1),e._v(" "),r("h3",[e._v("\n    总出块数："+e._s(e.SumWinBlocks)+"，全网有效总算力："+e._s((e.SumTotalPower/1024/1024/1024/1024).toFixed(2))+"\n    Ti，矿工有效总算力："+e._s((e.SumPower/1024/1024/1024).toFixed(2))+"\n    GB，算力总占比："+e._s(0==e.SumTotalPower?0:(e.SumPower/e.SumTotalPower*100).toFixed(2))+"%，矿工数："+e._s(e.SumTotalMinerCount)+"，总奖励："+e._s(e.SumTotalRewards)+" EPK\n  ")]),e._v(" "),r("el-table",{staticStyle:{width:"100%"},attrs:{data:e.tableData,height:"600",border:""}},[r("el-table-column",{attrs:{prop:"MinerID",label:"矿工账号",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"Owner",label:"Owner",width:"180"}}),e._v(" "),r("el-table-column",{attrs:{prop:"Worker",label:"Worker"}}),e._v(" "),r("el-table-column",{attrs:{prop:"Coinbase",label:"Coinbase"}}),e._v(" "),r("el-table-column",{attrs:{prop:"MinerPower_QualityAdjPower",label:"矿工有效算力"}}),e._v(" "),r("el-table-column",{attrs:{prop:"MinerPower_RawBytePower",label:"矿工原值算力"}}),e._v(" "),r("el-table-column",{attrs:{prop:"MinerPower_Percent",label:"算力占比"}}),e._v(" "),r("el-table-column",{attrs:{prop:"WinBlocks",label:"总出快数"}}),e._v(" "),r("el-table-column",{attrs:{prop:"TotalRewards",label:"总奖励"}})],1)],1)},staticRenderFns:[]},h=r("VU/8")(f,w,!1,null,null,null).exports;a.default.use(i.a);var b=new i.a({routes:[{path:"/",name:"Index",component:h}]});a.default.config.productionTip=!1,a.default.use(o.a),new a.default({el:"#app",router:b,components:{App:s},template:"<App/>"})},s347:function(e,t){},tvR6:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.f1782d993f6bacdeed42.js.map