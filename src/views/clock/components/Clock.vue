<script setup lang="ts">
import {default_theme} from "@/views/clock/logic/theme";
import time_function from "../logic"
import {computed, onMounted, onUpdated, ref, watch} from "vue";

import {Decimal} from 'decimal.js';

const time_base = ref({
    second: 0,
    minute: 0,
    hour: 0,
    second_rotate: 0,
    minute_rotate: new Decimal(0),
    hour_rotate: 0
})

const now = time_function.ref_dynamic_now

const rotate_degree_deg = computed(() => {
    return {
        second: time_base.value.second_rotate + "deg",
        hour: time_base.value.hour_rotate + "deg",
        minute: time_base.value.minute_rotate.toNumber() + "deg"
    }
})
onMounted(() => {
    time_base.value.second = now.value.getSeconds()
    time_base.value.hour = now.value.getHours()
    time_base.value.minute = now.value.getMinutes()
    time_base.value.second_rotate = (now.value.getSeconds() + 1) * 6
    time_base.value.minute_rotate = new Decimal(now.value.getMinutes() * 6).add(
        new Decimal(time_base.value.second * 0.1))
    time_base.value.hour_rotate = now.value.getHours() * 30 + now.value.getMinutes() * 0.5
})
watch(now, (value, oldValue, onCleanup) => {
        // 当每秒改变
        if (value.getSeconds() !== oldValue.getSeconds()) {
            time_base.value.second += 1
            time_base.value.second_rotate += 6
            time_base.value.minute_rotate = time_base.value.minute_rotate.add(new Decimal(0.1))

            // console.log("time:", now.value.toTimeString().slice(0, 8), "time_base:", {...rotate_degree_deg.value})
        }

        // 当每分钟改变
        if (value.getMinutes() !== oldValue.getMinutes()) {
            time_base.value.minute += 1
            time_base.value.hour_rotate += 0.5
            // 秒针转一圈了，需要及时校正是否存在浮点差异，以确保指针精准
            let minute_rotate_should_be: Decimal;
            minute_rotate_should_be = new Decimal(time_base.value.minute * 6);
            time_base.value.minute_rotate = minute_rotate_should_be
            // time_base.value.minute_rotate += 6
        }
        // 当每小时改变
        if (value.getHours() !== oldValue.getHours()) {
            time_base.value.hour += 1
            // 分针转一圈了，需要及时校正是否存在浮点差异，以确保指针精准
            let hour_rotate_should_be: number;
            hour_rotate_should_be = time_base.value.hour * 30;
            time_base.value.hour_rotate = hour_rotate_should_be
        }
    }
)


</script>

<template>
    <div class="clock">
        <img class="clock_component face" src="../svg/clock_face_light.svg" alt="">
        <img class="clock_component minute" src="../svg/minute_light.svg" alt="">
        <img class="clock_component hour" src="../svg/hour_light.svg" alt="">
        <img class="clock_component second" src="../svg/second_light.svg" alt="">
    </div>
</template>

<style scoped lang="less">
@clock_width: v-bind("default_theme.clock_width_rem");
@second_rotate: v-bind("rotate_degree_deg.second");
@hour_rotate: v-bind("rotate_degree_deg.hour");
@minute_rotate: v-bind("rotate_degree_deg.minute");
.clock {
  width: @clock_width;
  height: @clock_width;
  border-radius: 100%;
  box-shadow: 3px 7px 64px -18px rgba(0, 0, 0, 0.3);
  //margin-top: -20rem;
  user-select: none;
  display: block;
  overflow: hidden;
  //background-color: #48b080;


  .clock_component {
    display: block;
    position: absolute;
    width: @clock_width;
    user-select: none;
    //transform: rotate(5deg);
  }

  .second {
    transform: rotate(@second_rotate);
    transition: transform linear 1s;
    z-index: 100;
    user-select: none;
  }

  .face {
    z-index: 0;
    user-select: none;
  }

  .minute {
    z-index: 50;
    transform: rotate(@minute_rotate);
    transition: transform linear 1s;
    user-select: none;
  }

  .hour {
    z-index: 10;
    transform: rotate(@hour_rotate);
    transition: transform linear 1s;
    user-select: none;
  }


}
</style>
