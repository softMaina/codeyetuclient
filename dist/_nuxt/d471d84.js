(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{535:function(t,e,r){"use strict";r.r(e);r(7),r(4),r(8),r(11),r(6),r(12);var n=r(16),c=r(1),o=(r(72),r(76));function f(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var d={name:"brandspage",layout:"main",auth:!1,data:function(){return{}},created:function(){this.getBrands()},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?f(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):f(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)({brands:"offers/brands",brands_loading:"offers/brands_loading"})),methods:{getBrand:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.next=2,e.$router.push("/brandoffers");case 2:return r.next=4,e.$store.dispatch("offers/fetchBrandOffers",t);case 4:case"end":return r.stop()}}),r)})))()},getBrands:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("offers/fetchBrands");case 2:case"end":return e.stop()}}),e)})))()}}},l=d,h=r(49),O=r(51),v=r.n(O),w=r(234),m=r(71),j=r(491),y=r(188),x=r(494),_=r(43),component=Object(h.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-sheet",{attrs:{"min-height":"280"}},[r("v-row",t._l(t.brands,(function(e){return r("v-col",{key:e.brand_id,attrs:{xl:"4",lg:"4",md:"4",sm:"2",xs:"2"}},[r("v-card",{attrs:{elevation:"2"},on:{click:function(r){return r.stopPropagation(),t.getBrand(e.brand_id)}}},[r("div",{staticClass:"d-flex flex-row justify-center",staticStyle:{height:"100%"}},[r("v-img",{staticClass:"center",attrs:{height:"200",width:"200","aspect-ratio":"16/9",contain:"",src:""+t.$axios.defaults.baseURL+e.logo}})],1),t._v(" "),r("v-card-title",{staticClass:"justify-center"},[t._v("\n           "+t._s(e.title)+"\n         ")])],1)],1)})),1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:w.a,VCardTitle:m.c,VCol:j.a,VImg:y.a,VRow:x.a,VSheet:_.a})}}]);