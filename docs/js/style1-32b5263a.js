import{d as v,a as y,b as _,e as t,F as g,f as h,o as i,n as C,u as s,t as m,w as k,g as l,h as x}from"./index-fc648fd2.js";import{C as D}from"./Clock-3811d8b5.js";import{t as r}from"./index-9abb0f96.js";import{d}from"./theme-78375249.js";import{_ as f}from"./plugin-vue_export-helper-893979e1.js";import{D as E}from"./DateTime-3ac0e8d4.js";const M={class:"date"},B={class:"lunar"},F=v({__name:"MiniCalendara",setup(p){const a=r.get_ref_dayjs(),c=n=>a.value.add(n-a.value.day(),"day").date(),u=n=>{const o=a.value.add(n-a.value.day(),"day"),e=r.get_lunar_calendar(o);return e!=null&&e.Term?e==null?void 0:e.Term:Boolean(e==null?void 0:e.lunarFestival)?e==null?void 0:e.lunarFestival:(e==null?void 0:e.lDay)===1?e==null?void 0:e.IMonthCn:e==null?void 0:e.IDayCn};return y(()=>{r.get_dayjs(a.value)}),(n,o)=>(i(),_("table",null,[o[0]||(o[0]=t("tr",{class:"title"},[t("td",null,"\u65E5"),t("td",null,"\u4E00"),t("td",null,"\u4E8C"),t("td",null,"\u4E09"),t("td",null,"\u56DB"),t("td",null,"\u4E94"),t("td",null,"\u516D")],-1)),t("tr",null,[(i(),_(g,null,h([0,1,2,3,4,5,6],e=>t("td",null,[t("div",{class:C(["date_frame",e===s(a).day()?"today":""])},[t("div",M,m(c(e)),1),t("div",B,m(u(e)),1)],2)])),64))])]))}});var w=f(F,[["__scopeId","data-v-a3995d30"]]);const I={class:"viewport"},V={class:"mini_calendar"},$={class:"left_bottom"},N={class:"clock_frame"},S={class:"clock_face"},T=v({__name:"style1",setup(p){x(c=>({"24bbed90":s(d).full_background_color,"2333ecd5":s(d).background_color1,"2333ecd6":s(d).background_color2,"2333ecd7":s(d).background_color3,"2333ecd8":s(d).background_color4,"46a4dca6":s(d).clock_width_rem}));const a=r.ref_dynamic_now;return k(a,()=>{a.value.getHours()===1&&a.value.getMinutes()===0&&a.value.getSeconds()===1&&location.reload()}),(c,u)=>(i(),_("div",I,[t("div",V,[l(w)]),t("div",$,[l(E)]),t("div",N,[t("div",S,[l(D)])])]))}});var J=f(T,[["__scopeId","data-v-cf4691b6"]]);export{J as default};
