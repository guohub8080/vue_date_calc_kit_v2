import {RouteRecordRaw} from "vue-router";


export default <RouteRecordRaw>{
    path: "/time",
    name: "time",
    redirect: "/time/calc",
    component: () => import("@/views/clock/index.vue"),
    meta: {title: "桌面时钟"},
    children: [
        {
            path: "style1",
            component: () => import("@/views/clock/views/style1.vue"),
        }, {
            path: "style2",
            component: () => import("@/views/clock/views/style2.vue"),
        }, {
            path: "style3",
            component: () => import("@/views/clock/views/style3.vue"),
        }, {
            path: "style4",
            component: () => import("@/views/clock/views/style4.vue"),
        },{
            path: "calc",
            component: () => import("@/views/clock/views/date_calc.vue"),
        },{
            path: "/:pathMatch(.*)*",
            redirect: "/time/calc"
        },

    ]
}
