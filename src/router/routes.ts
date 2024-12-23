import {RouteRecordRaw} from "vue-router"
import clock_router from "@/views/clock/router"

const routes: Array<RouteRecordRaw> = [{
    path: "/",
    name: "default",
    redirect: "/clock"
},


    clock_router,


    {
        path: "/:pathMatch(.*)*",
        redirect: "/time/calc",
    },

]

export default routes
