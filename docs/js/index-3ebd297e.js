import{l as E,k as c0,m as r0,q as n0,u as g,j as w,s as u0,w as U,v as d,x as s0}from"./index-4cdfd756.js";var R={exports:{}};(function(e,t){(function(b,f){e.exports=f()})(E,function(){return function(b,f){f.prototype.isoWeeksInYear=function(){var a=this.isLeapYear(),c=this.endOf("y").day();return c===4||a&&c===5?53:52}}})})(R);var o0=R.exports,K={exports:{}};(function(e,t){(function(b,f){e.exports=f()})(E,function(){return function(b,f){f.prototype.isLeapYear=function(){return this.$y%4==0&&this.$y%100!=0||this.$y%400==0}}})})(K);var d0=K.exports,q={exports:{}};(function(e,t){(function(b,f){e.exports=f()})(E,function(){return function(b,f,a){f.prototype.dayOfYear=function(c){var n=Math.round((a(this).startOf("day")-a(this).startOf("year"))/864e5)+1;return c==null?n:this.add(c-n,"day")}}})})(q);var i0=q.exports,V={exports:{}};(function(e,t){(function(b,f){e.exports=f()})(E,function(){return function(b,f,a){a.updateLocale=function(c,n){var r=a.Ls[c];if(r)return(n?Object.keys(n):[]).forEach(function(u){r[u]=n[u]}),r}}})})(V);var l0=V.exports,B;const p=typeof window!="undefined",x0=e=>typeof e=="string",F=()=>{};p&&((B=window==null?void 0:window.navigator)==null?void 0:B.userAgent)&&/iP(ad|hone|od)/.test(window.navigator.userAgent);function M(e){return r0()?(n0(e),!0):!1}const h0=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,y0=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,p0=(e,t)=>{const b=e.getFullYear(),f=e.getMonth(),a=e.getDate(),c=e.getHours(),n=e.getMinutes(),r=e.getSeconds(),u=e.getMilliseconds(),s=e.getDay(),o={YY:String(b).slice(-2),YYYY:b,M:f+1,MM:`${f+1}`.padStart(2,"0"),D:String(a),DD:`${a}`.padStart(2,"0"),H:String(c),HH:`${c}`.padStart(2,"0"),h:`${c%12||12}`.padStart(1,"0"),hh:`${c%12||12}`.padStart(2,"0"),m:String(n),mm:`${n}`.padStart(2,"0"),s:String(r),ss:`${r}`.padStart(2,"0"),SSS:`${u}`.padStart(3,"0"),d:s};return t.replace(y0,(y,h)=>h||o[y])},_0=e=>{if(e===null)return new Date(NaN);if(e===void 0)return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){const t=e.match(h0);if(t){const b=t[2]-1||0,f=(t[7]||"0").substring(0,3);return new Date(t[1],b,t[3]||1,t[4]||0,t[5]||0,t[6]||0,f)}}return new Date(e)};function Y(e,t="HH:mm:ss"){return c0(()=>p0(_0(g(e)),g(t)))}function m0(e,t=1e3,b={}){const{immediate:f=!0,immediateCallback:a=!1}=b;let c=null;const n=w(!1);function r(){c&&(clearInterval(c),c=null)}function u(){n.value=!1,r()}function s(){g(t)<=0||(n.value=!0,a&&e(),r(),c=setInterval(e,g(t)))}if(f&&p&&s(),u0(t)){const o=U(t,()=>{n.value&&p&&s()});M(o)}return M(u),{isActive:n,pause:u,resume:s}}function D0(e){var t;const b=g(e);return(t=b==null?void 0:b.$el)!=null?t:b}const T=p?window:void 0;p&&window.document;p&&window.navigator;p&&window.location;function Y0(...e){let t,b,f,a;if(x0(e[0])?([b,f,a]=e,t=T):[t,b,f,a]=e,!t)return F;let c=F;const n=U(()=>D0(t),u=>{c(),u&&(u.addEventListener(b,f,a),c=()=>{u.removeEventListener(b,f,a),c=F})},{immediate:!0,flush:"post"}),r=()=>{n(),c()};return M(r),r}var v0=Object.defineProperty,g0=Object.defineProperties,w0=Object.getOwnPropertyDescriptors,G=Object.getOwnPropertySymbols,M0=Object.prototype.hasOwnProperty,E0=Object.prototype.propertyIsEnumerable,L=(e,t,b)=>t in e?v0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:b}):e[t]=b,O0=(e,t)=>{for(var b in t||(t={}))M0.call(t,b)&&L(e,b,t[b]);if(G)for(var b of G(t))E0.call(t,b)&&L(e,b,t[b]);return e},S0=(e,t)=>g0(e,w0(t));const $0=e=>typeof e=="function"?e:typeof e=="string"?t=>t.key===e:Array.isArray(e)?t=>e.includes(t.key):e?()=>!0:()=>!1;function C0(e,t,b={}){const{target:f=T,eventName:a="keydown",passive:c=!1}=b,n=$0(e);return Y0(f,a,u=>{n(u)&&t(u)},c)}function xe(e,t,b={}){return C0(e,t,S0(O0({},b),{eventName:"keyup"}))}const I=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},A="__vueuse_ssr_handlers__";I[A]=I[A]||{};I[A];function F0(e,t={}){const{immediate:b=!0,window:f=T}=t,a=w(!1);let c=null;function n(){!a.value||!f||(e(),c=f.requestAnimationFrame(n))}function r(){!a.value&&f&&(a.value=!0,n())}function u(){a.value=!1,c!=null&&f&&(f.cancelAnimationFrame(c),c=null)}return b&&r(),M(u),{isActive:a,pause:u,resume:r}}var I0=Object.defineProperty,W=Object.getOwnPropertySymbols,A0=Object.prototype.hasOwnProperty,T0=Object.prototype.propertyIsEnumerable,Z=(e,t,b)=>t in e?I0(e,t,{enumerable:!0,configurable:!0,writable:!0,value:b}):e[t]=b,P0=(e,t)=>{for(var b in t||(t={}))A0.call(t,b)&&Z(e,b,t[b]);if(W)for(var b of W(t))T0.call(t,b)&&Z(e,b,t[b]);return e};function k0(e={}){const{controls:t=!1,interval:b="requestAnimationFrame"}=e,f=w(new Date),a=()=>f.value=new Date,c=b==="requestAnimationFrame"?F0(a,{immediate:!0}):m0(a,b,{immediate:!0});return t?P0({now:f},c):f}var z;(function(e){e.UP="UP",e.RIGHT="RIGHT",e.DOWN="DOWN",e.LEFT="LEFT",e.NONE="NONE"})(z||(z={}));const j0=[19416,19168,42352,21717,53856,55632,91476,22176,39632,21970,19168,42422,42192,53840,119381,46400,54944,44450,38320,84343,18800,42160,46261,27216,27968,109396,11104,38256,21234,18800,25958,54432,59984,92821,23248,11104,100067,37600,116951,51536,54432,120998,46416,22176,107956,9680,37584,53938,43344,46423,27808,46416,86869,19872,42416,83315,21168,43432,59728,27296,44710,43856,19296,43748,42352,21088,62051,55632,23383,22176,38608,19925,19152,42192,54484,53840,54616,46400,46752,103846,38320,18864,43380,42160,45690,27216,27968,44870,43872,38256,19189,18800,25776,29859,59984,27480,23232,43872,38613,37600,51552,55636,54432,55888,30034,22176,43959,9680,37584,51893,43344,46240,47780,44368,21977,19360,42416,86390,21168,43312,31060,27296,44368,23378,19296,42726,42208,53856,60005,54576,23200,30371,38608,19195,19152,42192,118966,53840,54560,56645,46496,22224,21938,18864,42359,42160,43600,111189,27936,44448,84835,37744,18936,18800,25776,92326,59984,27424,108228,43744,37600,53987,51552,54615,54432,55888,23893,22176,42704,21972,21200,43448,43344,46240,46758,44368,21920,43940,42416,21168,45683,26928,29495,27296,44368,84821,19296,42352,21732,53600,59752,54560,55968,92838,22224,19168,43476,41680,53584,62034,54560],N0=[31,28,31,30,31,30,31,31,30,31,30,31],H0=["\u7532","\u4E59","\u4E19","\u4E01","\u620A","\u5DF1","\u5E9A","\u8F9B","\u58EC","\u7678"],B0=["\u5B50","\u4E11","\u5BC5","\u536F","\u8FB0","\u5DF3","\u5348","\u672A","\u7533","\u9149","\u620C","\u4EA5"],G0=["\u9F20","\u725B","\u864E","\u5154","\u9F99","\u86C7","\u9A6C","\u7F8A","\u7334","\u9E21","\u72D7","\u732A"],L0={"1-1":{title:"\u5143\u65E6\u8282"},"2-14":{title:"\u60C5\u4EBA\u8282"},"5-1":{title:"\u52B3\u52A8\u8282"},"5-4":{title:"\u9752\u5E74\u8282"},"6-1":{title:"\u513F\u7AE5\u8282"},"9-10":{title:"\u6559\u5E08\u8282"},"10-1":{title:"\u56FD\u5E86\u8282"},"12-25":{title:"\u5723\u8BDE\u8282"},"3-8":{title:"\u5987\u5973\u8282"},"3-12":{title:"\u690D\u6811\u8282"},"4-1":{title:"\u611A\u4EBA\u8282"},"5-12":{title:"\u62A4\u58EB\u8282"},"7-1":{title:"\u5EFA\u515A\u8282"},"8-1":{title:"\u5EFA\u519B\u8282"},"12-24":{title:"\u5E73\u5B89\u591C"}},W0={"12-30":{title:"\u9664\u5915"},"1-1":{title:"\u6625\u8282"},"1-15":{title:"\u5143\u5BB5\u8282"},"2-2":{title:"\u9F99\u62AC\u5934"},"5-5":{title:"\u7AEF\u5348\u8282"},"7-7":{title:"\u4E03\u5915\u8282"},"7-15":{title:"\u4E2D\u5143\u8282"},"8-15":{title:"\u4E2D\u79CB\u8282"},"9-9":{title:"\u91CD\u9633\u8282"},"10-1":{title:"\u5BD2\u8863\u8282"},"10-15":{title:"\u4E0B\u5143\u8282"},"12-8":{title:"\u814A\u516B\u8282"},"12-23":{title:"\u5317\u65B9\u5C0F\u5E74"},"12-24":{title:"\u5357\u65B9\u5C0F\u5E74"}},Z0=["\u5C0F\u5BD2","\u5927\u5BD2","\u7ACB\u6625","\u96E8\u6C34","\u60CA\u86F0","\u6625\u5206","\u6E05\u660E","\u8C37\u96E8","\u7ACB\u590F","\u5C0F\u6EE1","\u8292\u79CD","\u590F\u81F3","\u5C0F\u6691","\u5927\u6691","\u7ACB\u79CB","\u5904\u6691","\u767D\u9732","\u79CB\u5206","\u5BD2\u9732","\u971C\u964D","\u7ACB\u51AC","\u5C0F\u96EA","\u5927\u96EA","\u51AC\u81F3"],z0=["9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd0b06bdb0722c965ce1cfcc920f","b027097bd097c36b0b6fc9274c91aa","9778397bd19801ec9210c965cc920e","97b6b97bd19801ec95f8c965cc920f","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd197c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bd09801d98082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec95f8c965cc920e","97bcf97c3598082c95f8e1cfcc920f","97bd097bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c3598082c95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf97c359801ec95f8c965cc920f","97bd097bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd19801ec9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b97bd19801ec95f8c965cc920f","97bd07f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c91aa","97b6b97bd19801ec9210c965cc920e","97bd07f1487f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c965cc920e","97bcf7f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b97bd19801ec9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b97bd197c36c9210c9274c920e","97bcf7f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","9778397bd097c36c9210c9274c920e","97b6b7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c36b0b6fc9210c8dc2","9778397bd097c36b0b70c9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9274c91aa","97b6b7f0e47f531b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c91aa","97b6b7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","9778397bd097c36b0b6fc9210c8dc2","977837f0e37f149b0723b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f5307f595b0b0bc920fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f595b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc9210c8dc2","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd097c35b0b6fc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0b0bb0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14998082b0723b06bd","7f07e7f0e37f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e397bd07f595b0b0bc920fb0722","977837f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f595b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e37f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f1487f531b0b0bb0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e47f149b0723b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14998082b0723b06bd","7f07e7f0e37f14998083b0787b0721","7f0e27f0e47f531b0723b0b6fb0722","7f0e37f0e366aa89801eb072297c35","7ec967f0e37f14898082b0723b02d5","7f07e7f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66aa89801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b0721","7f07e7f0e47f531b0723b0b6fb0722","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b0723b02d5","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e36665b66a449801e9808297c35","665f67f0e37f14898082b072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e26665b66a449801e9808297c35","665f67f0e37f1489801eb072297c35","7ec967f0e37f14998082b0787b06bd","7f07e7f0e47f531b0723b0b6fb0721","7f0e27f1487f531b0b0bb0b6fb0722"],U0=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341"],R0=["\u521D","\u5341","\u5EFF","\u5345"],K0=["\u6B63","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D","\u4E03","\u516B","\u4E5D","\u5341","\u51AC","\u814A"],q0={lunarInfo:j0,solarMonth:N0,Gan:H0,Zhi:B0,Animals:G0,festival:L0,lFestival:W0,solarTerm:Z0,sTermInfo:z0,nStr1:U0,nStr2:R0,nStr3:K0,getFestival(){return this.festival},getLunarFestival(){return this.lFestival},setFestival(e={}){this.festival=e},setLunarFestival(e={}){this.lFestival=e},lYearDays:function(e){let t,b=348;for(t=32768;t>8;t>>=1)b+=this.lunarInfo[e-1900]&t?1:0;return b+this.leapDays(e)},leapMonth:function(e){return this.lunarInfo[e-1900]&15},leapDays:function(e){return this.leapMonth(e)?this.lunarInfo[e-1900]&65536?30:29:0},monthDays:function(e,t){return t>12||t<1?-1:this.lunarInfo[e-1900]&65536>>t?30:29},solarDays:function(e,t){if(t>12||t<1)return-1;const b=t-1;return b===1?e%4===0&&e%100!==0||e%400===0?29:28:this.solarMonth[b]},toGanZhiYear:function(e){var t=(e-3)%10,b=(e-3)%12;return t===0&&(t=10),b===0&&(b=12),this.Gan[t-1]+this.Zhi[b-1]},toAstro:function(e,t){const b="\u6469\u7FAF\u6C34\u74F6\u53CC\u9C7C\u767D\u7F8A\u91D1\u725B\u53CC\u5B50\u5DE8\u87F9\u72EE\u5B50\u5904\u5973\u5929\u79E4\u5929\u874E\u5C04\u624B\u6469\u7FAF",f=[20,19,21,21,21,22,23,23,23,23,22,22];return b.substr(e*2-(t<f[e-1]?2:0),2)+"\u5EA7"},toGanZhi:function(e){return this.Gan[e%10]+this.Zhi[e%12]},getTerm:function(e,t){if(e<1900||e>2100||t<1||t>24)return-1;const b=this.sTermInfo[e-1900],f=[];for(let a=0;a<b.length;a+=5){const c=parseInt("0x"+b.substr(a,5)).toString();f.push(c[0],c.substr(1,2),c[3],c.substr(4,2))}return parseInt(f[t-1])},toChinaMonth:function(e){if(e>12||e<1)return-1;let t=this.nStr3[e-1];return t+="\u6708",t},toChinaDay:function(e){let t;switch(e){case 10:t="\u521D\u5341";break;case 20:t="\u4E8C\u5341";break;case 30:t="\u4E09\u5341";break;default:t=this.nStr2[Math.floor(e/10)],t+=this.nStr1[e%10]}return t},getAnimal:function(e){return this.Animals[(e-4)%12]},solar2lunar:function(e,t,b){let f=parseInt(e),a=parseInt(t),c=parseInt(b);if(f<1900||f>2100||f===1900&&a===1&&c<31)return-1;let n;f?n=new Date(f,parseInt(a)-1,c):n=new Date;let r,u=0,s=0;f=n.getFullYear(),a=n.getMonth()+1,c=n.getDate();let o=(Date.UTC(n.getFullYear(),n.getMonth(),n.getDate())-Date.UTC(1900,0,31))/864e5;for(r=1900;r<2101&&o>0;r++)s=this.lYearDays(r),o-=s;o<0&&(o+=s,r--);let y=new Date,h=!1;y.getFullYear()===f&&y.getMonth()+1===a&&y.getDate()===c&&(h=!0);let m=n.getDay(),O=this.nStr1[m];m===0&&(m=7);const l=r;u=this.leapMonth(r);let x=!1;for(r=1;r<13&&o>0;r++)u>0&&r===u+1&&x===!1?(--r,x=!0,s=this.leapDays(l)):s=this.monthDays(l,r),x===!0&&r===u+1&&(x=!1),o-=s;o===0&&u>0&&r===u+1&&(x?x=!1:(x=!0,--r)),o<0&&(o+=s,--r);const D=r,v=o+1,X=a-1,J=this.toGanZhiYear(l),P=this.getTerm(f,a*2-1),Q=this.getTerm(f,a*2);let k=this.toGanZhi((f-1900)*12+a+11);c>=P&&(k=this.toGanZhi((f-1900)*12+a+12));let S=!1,$=null;P===c&&(S=!0,$=this.solarTerm[a*2-2]),Q===c&&(S=!0,$=this.solarTerm[a*2-1]);const e0=Date.UTC(f,X,1,0,0,0,0)/864e5+25567+10,t0=this.toGanZhi(e0+c-1),b0=this.toAstro(a,c),f0=f+"-"+a+"-"+c,a0=l+"-"+D+"-"+v,j=this.festival,N=this.lFestival,H=a+"-"+c;let C=D+"-"+v;return D===12&&v===29&&this.monthDays(l,D)===29&&(C="12-30"),{date:f0,lunarDate:a0,festival:j[H]?j[H].title:null,lunarFestival:N[C]?N[C].title:null,lYear:l,lMonth:D,lDay:v,Animal:this.getAnimal(l),IMonthCn:(x?"\u95F0":"")+this.toChinaMonth(D),IDayCn:this.toChinaDay(v),cYear:f,cMonth:a,cDay:c,gzYear:J,gzMonth:k,gzDay:t0,isToday:h,isLeap:x,nWeek:m,ncWeek:"\u661F\u671F"+O,isTerm:S,Term:$,astro:b0}},lunar2solar:function(e,t,b,f){e=parseInt(e),t=parseInt(t),b=parseInt(b),f=!!f;const a=this.leapMonth(e);if(this.leapDays(e),f&&a!==t||e===2100&&t===12&&b>1||e===1900&&t===1&&b<31)return-1;const c=this.monthDays(e,t);let n=c;if(f&&(n=this.leapDays(e,t)),e<1900||e>2100||b>n)return-1;let r=0,u;for(u=1900;u<e;u++)r+=this.lYearDays(u);let s=0,o=!1;for(u=1;u<t;u++)s=this.leapMonth(e),o||s<=u&&s>0&&(r+=this.leapDays(e),o=!0),r+=this.monthDays(e,u);f&&(r+=c);const y=Date.UTC(1900,1,30,0,0,0),h=new Date((r+b-31)*864e5+y),m=h.getUTCFullYear(),O=h.getUTCMonth()+1,l=h.getUTCDate();return this.solar2lunar(m,O,l)}};d.extend(s0);d.extend(o0);d.extend(d0);d.extend(i0);d.extend(l0);d.locale("zh-cn");d.updateLocale("zh-cn",{weekStart:7});const V0=e=>Boolean(e)?w(d(e)):w(d()),i=e=>{if(Boolean(e)){if(typeof e=="string")return d(e);if(typeof e=="object"&&e instanceof d)return e}return d()},X0=e=>{let t=i(e);return i(`${t.year()+1}-1-1`).dayOfYear(0).dayOfYear()},J0=e=>{let t=i(e),b=i(`${t.year()}-1-1`);if(b.day()===0)return b;for(;b.day()!==0;)b=b.add(1,"day");return b},Q0=(e,t=!1)=>{let b=d();if(Boolean(e)&&(b=d(e)),t){const f=b.dayOfYear(1);if(f.week()===1)return b.week();let a=f;for(;a.week()>1;)a=a.add(1,"day");return b.diff(a)<0?1:b.week()+1}return b.week()},ee=(e,t="\u5468",b=!1)=>{const f=i(e),a=["\u65E5","\u4E00","\u4E8C","\u4E09","\u56DB","\u4E94","\u516D"];return b?t+[7,1,2,3,4,5,6][f.day()]:t+a[f.day()]},te=e=>{const t=i(e),b=t.daysInMonth();return t.date()/b},be=e=>{const t=i(e),b=t.endOf("year").dayOfYear();return t.dayOfYear()/b},fe=(e,t="YYYY-MM-DD HH:mm:ss")=>Boolean(e)?e==null?void 0:e.format(t):i().format(t),ae=(e,t)=>{try{const b=d(e.format("YYYY-MM-DD")),f=d(t.format("YYYY-MM-DD")),a=b.diff(f,"day")*-1;return isNaN(a)?"#":a}catch{return"#"}},_=k0(),ce=e=>Boolean(e)?Y(_,e):Y(_,"YYYY\u5E74M\u6708D\u65E5"),re=e=>Boolean(e)?Y(_,e):Y(_,"HH:mm:ss"),ne=e=>Boolean(e)?Y(_,e):Y(_,"YYYY\u5E74M\u6708D\u65E5 HH:mm:ss"),ue=e=>{const t=i(e);return q0.solar2lunar(t.year(),t.month()+1,t.date())},se=e=>{const t=i(e);return t.hour()<=1?"\u6DF1\u591C":t.hour()<=4?"\u51CC\u6668":t.hour()<=6?"\u65E9\u4E0A":t.hour()<=9?"\u4E0A\u5348":t.hour()<=13?"\u4E2D\u5348":t.hour()<=16?"\u4E0B\u5348":t.hour()<=19?"\u508D\u665A":t.hour()<=22?"\u665A\u4E0A":"\u6DF1\u591C"},oe=e=>e==="day"?"\u5929":e==="week"?"\u5468":e==="month"?"\u6708":e==="year"?"\u5E74":"",de=(e,t,b,f=!0)=>{const a=oe(b);if(t===0)return{type:"get_target_day",start_day:e,start_day_is_today:!0,gap_num:0,calc_unit:b,is_forward:!0,target_day:e,target_day_is_today:!0,gap_unit_cn:a};let c;f?c=e.add(t,b):c=e.add(t*-1,b);const n=i();let r=!1;n.format("YYYYMMDD")===e.format("YYYYMMDD")&&(r=!0);let u=!1;n.format("YYYYMMDD")===c.format("YYYYMMDD")&&(u=!0);let s=!1;return e.isBefore(c)&&(s=!0),{type:"get_target_day",start_day:e,start_day_is_today:r,gap_num:t,calc_unit:b,is_forward:s,target_day:c,target_day_is_today:u,gap_unit_cn:a}},ie=(e,t)=>{const b=i(),f=t.diff(e,"day");let a=!1;e.format("YYYYMMDD")===b.format("YYYYMMDD")&&(a=!0);let c=!1;if(t.format("YYYYMMDD")===b.format("YYYYMMDD")&&(c=!0),f===0)return{type:"get_days_gap",start_day:e,start_day_is_today:a,gap_days:0,is_forward:!1,target_day:e,target_day_is_today:c};let n=!1;return f>0&&(n=!0),{type:"get_days_gap",start_day:e,start_day_is_today:a,gap_days:Math.abs(f),is_forward:n,target_day:t,target_day_is_today:c}};var he={ref_dynamic_now:_,get_ref_dayjs:V0,get_day_of_year_percent:be,dayjs_formatted:fe,dynamic_date_time_formatted:ne,dynamic_date_formatted:ce,dynamic_time_formatted:re,get_day_of_month_percent:te,get_week_of_year:Q0,get_target_dayjs_by_calc:de,days_gap:ae,get_dayjs:i,get_day_in_week:ee,get_lunar_calendar:ue,get_ampm:se,get_days_in_year:X0,get_first_sunday_in_year:J0,get_days_gap_by_calc:ie};export{xe as o,he as t};
