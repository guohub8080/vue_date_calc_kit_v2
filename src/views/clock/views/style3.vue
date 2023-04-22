<script setup lang="ts">
import {computed, onMounted, reactive, ref, watch} from "vue";

import ClockFace from "../components/Clock.vue"
import time_function from "../logic"
import {default_theme} from "@/views/clock/logic/theme";
import MiniCalendar from "@/views/clock/components/MiniCalendara.vue";
import Datetime from "@/views/clock/components/DateTime.vue";
//
const now = time_function.ref_dynamic_now
watch(now, () => {
    if (now.value.getHours() === 0 && now.value.getMinutes() === 0 && now.value.getSeconds() === 1) {
        location.reload()
    }
})



</script>

<template>
    <!--  {{ today_lunar }}-->
    <!--    <button @click="handle_a()">点击</button>-->
    <div class="viewport">
<!--        <div class="mini_calendar">-->
<!--            <MiniCalendar></MiniCalendar>-->
<!--        </div>-->

<!--        <div class="left_bottom">-->
<!--            <Datetime></Datetime>-->

<!--        </div>-->
        <div class="clock_frame">
            <div class="clock_face">
                <ClockFace></ClockFace>
            </div>
        </div>
    </div>

</template>

<style scoped lang="less">


.viewport {
    width: calc(100vw);
    height: calc(100vh);
    display: block;
    position: absolute;
    background-color: v-bind("default_theme.full_background_color");
    z-index: 0;

    background: linear-gradient(-45deg,
    v-bind("default_theme.background_color1"),
    v-bind("default_theme.background_color2"),
    v-bind("default_theme.background_color3"),
    v-bind("default_theme.background_color4"));
    //background: linear-gradient(-45deg, #ffffff, #e0e0e0, #b4b4b4, #cbcbcb);
    background-size: 400% 400%;
    animation: gradient 10s ease infinite;


    @keyframes gradient {
        0% {
            background-position: 0% 50%;
        }
        50% {
            background-position: 100% 50%;
        }
        100% {
            background-position: 0% 50%;
        }
    }

    .mini_calendar {
        position: absolute;
        top: 10%;
        left: 7rem;
    }

    .left_bottom {
        position: absolute;
        z-index: 1000;
        top: 50%;
        left: 7rem;
    }
}

.clock_frame {
    position: absolute;
    z-index: 800;
    width: calc(100vw);
    height: calc(100vh);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    //background-color: #d36b6b;
    //left: 50%;
    .clock_face {
        width: v-bind("default_theme.clock_width_rem");
        //background-color: #fff;
        display: flex;
        justify-content: center;
        align-items: center;
    }

}
</style>
