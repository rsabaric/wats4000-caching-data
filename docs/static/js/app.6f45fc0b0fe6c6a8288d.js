webpackJsonp([1],{"+Jdk":function(e,t){},"6A3X":function(e,t){},ACb1:function(e,t){},FCfs:function(e,t){},NHnr:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=a("7+uW"),r={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("h1",[this._v("Weather Service")]),this._v(" "),t("router-view")],1)},staticRenderFns:[]};var n=a("VU/8")({name:"app"},r,!1,function(e){a("StZP")},null,null).exports,i=a("/ocq"),o=a("//Fk"),c=a.n(o),h=a("mtWM"),u=a.n(h).a.create({baseURL:"//api.openweathermap.org/data/2.5/"});u.interceptors.request.use(function(e){return e.params.APPID="340fee47ad4e10770597cdc17327d3a4",e.params.units="imperial",e},function(e){return c.a.reject(e)});var m={name:"WeatherSummary",data:function(){return{}},props:{weatherData:Array}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",e._l(e.weatherData,function(t){return a("div",{staticClass:"weatherSummary"},[a("img",{attrs:{src:"http://openweathermap.org/img/w/"+t.icon+".png",alt:t.main}}),e._v(" "),a("br"),e._v(" "),a("b",[e._v(e._s(t.main))])])}))},staticRenderFns:[]};var l=a("VU/8")(m,v,!1,function(e){a("XcBt")},"data-v-3e5c9823",null).exports,d={name:"WeatherData",data:function(){return{}},props:{weatherData:Object}},_={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("dl",[e.weatherData.temp!=e.weatherData.temp_min?a("dt",[e._v("Current Temp")]):e._e(),e._v(" "),e.weatherData.temp!=e.weatherData.temp_min?a("dd",[e._v(e._s(e.weatherData.temp)+"°F")]):e._e(),e._v(" "),a("dt",[e._v("Humidity")]),e._v(" "),a("dd",[e._v(e._s(e.weatherData.humidity)+"%")]),e._v(" "),a("dt",[e._v("High")]),e._v(" "),a("dd",[e._v(e._s(e.weatherData.temp_max)+"°F")]),e._v(" "),a("dt",[e._v("Low")]),e._v(" "),a("dd",[e._v(e._s(e.weatherData.temp_min)+"°F")])])},staticRenderFns:[]};var f=a("VU/8")(d,_,!1,function(e){a("+Jdk")},"data-v-000802cb",null).exports,p={render:function(){this.$createElement;this._self._c;return this._m(0)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("h2",[this._v("Loading...")]),this._v(" "),t("div",{staticClass:"sk-folding-cube"},[t("div",{staticClass:"sk-cube1 sk-cube"}),this._v(" "),t("div",{staticClass:"sk-cube2 sk-cube"}),this._v(" "),t("div",{staticClass:"sk-cube4 sk-cube"}),this._v(" "),t("div",{staticClass:"sk-cube3 sk-cube"})])])}]};var g=a("VU/8")({name:"CubeSpinner"},p,!1,function(e){a("wamj")},"data-v-fe181480",null).exports;a("6A3X");var w={name:"MessageContainer",props:{message:Object},data:function(){return{showMessage:!0}},methods:{close:function(){this.showMessage=!1}},created:function(){setTimeout(this.close,5e3)}},y={render:function(){var e=this.$createElement,t=this._self._c||e;return t("transition",{attrs:{name:"fade",appear:"",tag:"div"}},[t("li",{directives:[{name:"show",rawName:"v-show",value:this.showMessage,expression:"showMessage"}],class:[this.message.type,"message"]},[this._v("\n    "+this._s(this.message.text)+"\n    "),t("button",{on:{click:this.close}},[this._v("close")])])])},staticRenderFns:[]};var C=a("VU/8")(w,y,!1,function(e){a("OHUE")},"data-v-5aa0fb24",null).exports;a("6A3X");var D={name:"MessageContainer",props:{messages:Array},components:{"message-item":C}},b={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"message-container"},[this.messages.length>0?t("ul",this._l(this.messages,function(e,a){return t("message-item",{key:a,attrs:{message:e}})})):this._e()])},staticRenderFns:[]};var $=a("VU/8")(D,b,!1,function(e){a("ACb1")},"data-v-6b86195a",null).exports,k={name:"FavoriteCities",data:function(){return{}},props:{favoriteCities:Array,homeCity:Object},methods:{removeCity:function(e){var t=this.favoriteCities.indexOf(e);this.favoriteCities.splice(t,1),this.$ls.set("favoriteCities",this.favoriteCities)},addHome:function(e){this.homeCity=e,this.$ls.set("homeCity",this.homeCity),console.log("ddd")}}},F={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ul",{staticClass:"favorite-cities"},[e._m(0),e._v(" "),e.homeCity?e._e():a("li",[e._v("No Home City Set")]),e._v(" "),a("li",[e._v(e._s(e.homeCity.name))]),e._v(" "),e._m(1),e._v(" "),e.favoriteCities.length<1?a("li",[e._v("No favorites cities to display.")]):e._e(),e._v(" "),e._l(e.favoriteCities,function(t){return a("li",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.id}}}},[e._v(e._s(t.name))]),e._v(" "),a("button",{staticClass:"remove",on:{click:function(a){e.removeCity(t)}}},[e._v("Remove")]),a("button",{staticClass:"home",on:{click:function(a){e.addHome(t),e.$emit("added-Home")}}},[e._v("Set as Home")])],1)})],2)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("h2",[this._v("Home City")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("h2",[this._v("Favorite Cities")])])}]};var H={name:"CitySearch",components:{"weather-summary":l,"weather-data":f,"load-spinner":g,"message-container":$,"favorite-cities":a("VU/8")(k,F,!1,function(e){a("lIU0")},"data-v-112b7b3a",null).exports},data:function(){return{results:null,query:"",showLoading:!1,messages:[],favorites:[],home:""}},created:function(){this.$ls.get("favoriteCities")&&(this.favorites=this.$ls.get("favoriteCities"),this.home=this.$ls.get("homeCity"))},methods:{saveCity:function(e){this.favorites.push(e),this.$ls.set("favoriteCities",this.favorites)},addHome:function(e){this.home=e,this.$ls.set("homeCity",this.home),console.log("added home")},newHome:function(e){this.home=this.$ls.get("homeCity"),console.log("new home added")},getCities:function(){var e=this;this.results=null,this.showLoading=!0;var t="citySearch_"+this.query;this.$ls.get(t)?(console.log("valid cache detected for "+t),this.results=this.$ls.get(t),this.showLoading=!1):(console.log("no cache detected for "+t),u.get("find",{params:{q:this.query}}).then(function(a){e.results=a.data,e.showLoading=!1,e.$ls.set(t,e.results,9e5)}).catch(function(t){e.messages.push({type:"error",text:t.message}),e.showLoading=!1}))}}},L={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("favorite-cities",{attrs:{favoriteCities:e.favorites,homeCity:e.home},on:{"added-Home":e.newHome}}),e._v(" "),e.home?a("ul",{staticClass:"cities"},[a("li",{staticClass:"home"},[a("h2",[e._v("Home:")]),e._v(" "),a("h2",[e._v(e._s(e.home.name)+", "+e._s(e.home.sys.country))]),e._v(" "),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.home.id}}}},[e._v("View Current Weather")])],1)])]):e._e(),e._v(" "),a("h2",[e._v("City Search")]),e._v(" "),a("message-container",{attrs:{messages:e.messages}}),e._v(" "),a("form",{on:{submit:function(t){return t.preventDefault(),e.getCities(t)}}},[a("p",[e._v("Enter city name: "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.query,expression:"query"}],attrs:{type:"text",placeholder:"Paris, TX"},domProps:{value:e.query},on:{input:function(t){t.target.composing||(e.query=t.target.value)}}}),e._v(" "),a("button",{attrs:{type:"submit"}},[e._v("Go")])])]),e._v(" "),e.showLoading?a("load-spinner"):e._e(),e._v(" "),e.results&&e.results.list.length>0?a("ul",{staticClass:"cities"},e._l(e.results.list,function(t){return a("li",[a("h2",[e._v(e._s(t.name)+", "+e._s(t.sys.country))]),e._v(" "),a("p",[a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:t.id}}}},[e._v("View Current Weather")])],1),e._v(" "),a("weather-summary",{attrs:{weatherData:t.weather}}),e._v(" "),a("weather-data",{attrs:{weatherData:t.main}}),e._v(" "),a("p",[a("button",{staticClass:"save",on:{click:function(a){e.saveCity(t)}}},[e._v("Save City to Favorites")])]),e._v(" "),a("p",[a("button",{staticClass:"save",on:{click:function(a){e.addHome(t),e.saveCity(t)}}},[e._v("Set City as Home")])])],1)})):e._e()],1)},staticRenderFns:[]};var x=a("VU/8")(H,L,!1,function(e){a("fRjj")},"data-v-a0e81556",null).exports,I={name:"CurrentWeather",components:{"weather-summary":l,"weather-data":f,"load-spinner":g,"message-container":$},data:function(){return{weatherData:null,messages:[],query:"",showLoading:!1}},created:function(){var e=this;this.showLoading=!0;var t="currentWeather_"+this.$route.params.cityId;this.$ls.get(t)?(console.log("valid cache detected for "+t),this.weatherData=this.$ls.get(t),this.showLoading=!1):(console.log("no cache detected for "+t),u.get("weather",{params:{id:this.$route.params.cityId}}).then(function(a){e.showLoading=!1,e.weatherData=a.data,e.$ls.set(t,e.weatherData,9e5)}).catch(function(t){e.showLoading=!1,e.messages.push({type:"error",text:t.message})}))}},E={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.name)+", "+e._s(e.weatherData.sys.country))]):e._e()]),e._v(" "),a("message-container",{attrs:{messages:e.messages}}),e._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"Forecast",params:{cityId:e.$route.params.cityId}}}},[e._v("View 5-Day Forecast")])],1),e._v(" "),e.showLoading?a("load-spinner"):e._e(),e._v(" "),e.weatherData?a("div",[a("weather-summary",{attrs:{weatherData:e.weatherData.weather}}),e._v(" "),a("weather-data",{attrs:{weatherData:e.weatherData.main}})],1):e._e()],1)},staticRenderFns:[]};var W=a("VU/8")(I,E,!1,function(e){a("FCfs")},"data-v-fd622756",null).exports,S=a("bOdI"),U=a.n(S),A={name:"Forecast",components:{"weather-summary":l,"weather-data":f,"message-container":$,"load-spinner":g},data:function(){return U()({weatherData:null,messages:[],query:"",showLoading:!1},"messages",[])},created:function(){var e=this;this.showLoading=!0;var t="forecast_"+this.$route.params.cityId;this.$ls.get(t)?(console.log("valid cache detected for "+t),this.weatherData=this.$ls.get(t),this.showLoading=!1):(console.log("no valid cache detected for "+t),u.get("forecast",{params:{id:this.$route.params.cityId}}).then(function(a){e.showLoading=!1,e.weatherData=a.data,e.$ls.set(t,e.weatherData,9e5)}).catch(function(t){e.showLoading=!1,e.messages.push({type:"error",text:t.message})}))},filters:{formatDate:function(e){var t=new Date(1e3*e),a=t.getDate(),s=t.getMonth(),r=t.getHours();return 12===r?r="Noon":0===r?r="Midnight":r>12?r=r-12+"PM":r<12&&(r+="AM"),["January","February","March","April","May","June","July","August","September","October","November","December"][s]+" "+a+" @ "+r}}},M={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("h2",[e._v("Five Day Hourly Forecast "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()]),e._v(" "),a("message-container",{attrs:{messages:e.messages}}),e._v(" "),a("p",[a("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" |\n    "),a("router-link",{attrs:{to:{name:"CurrentWeather",params:{cityId:e.$route.params.cityId}}}},[e._v("Current Weather "),e.weatherData?a("span",[e._v(" for "+e._s(e.weatherData.city.name)+", "+e._s(e.weatherData.city.country))]):e._e()])],1),e._v(" "),e.weatherData?a("ul",{staticClass:"forecast"},[a("transition-group",{attrs:{name:"fade",tag:"div",appear:""}},e._l(e.weatherData.list,function(t){return a("li",{key:t.dt},[a("h3",[e._v(e._s(e._f("formatDate")(t.dt)))]),e._v(" "),a("weather-summary",{attrs:{weatherData:t.weather}}),e._v(" "),a("weather-data",{attrs:{weatherData:t.main}})],1)}))],1):e._e(),e._v(" "),e.showLoading?a("load-spinner"):e._e()],1)},staticRenderFns:[]};var R=a("VU/8")(A,M,!1,function(e){a("y1cn")},"data-v-6f1ae176",null).exports;s.a.use(i.a);var V=new i.a({routes:[{path:"/",name:"CitySearch",component:x},{path:"/:cityId/current",name:"CurrentWeather",component:W},{path:"/:cityId/forecast",name:"Forecast",component:R}]}),q=a("yXtV"),j=a.n(q);s.a.use(j.a,{namespace:"weather__"}),s.a.config.productionTip=!1,new s.a({el:"#app",router:V,template:"<App/>",components:{App:n}})},OHUE:function(e,t){},StZP:function(e,t){},XcBt:function(e,t){},fRjj:function(e,t){},lIU0:function(e,t){},wamj:function(e,t){},y1cn:function(e,t){}},["NHnr"]);
//# sourceMappingURL=app.6f45fc0b0fe6c6a8288d.js.map