<script setup lang="ts">

import time_function from "@/views/clock/logic";
import {ref} from "vue";
import {default_theme} from "@/views/clock/logic/theme";

const today_lunar = ref(time_function.get_lunar_calendar())
</script>

<template>
    <div class="date_time_frame">
        <div class="date">
                <span>
                    {{ time_function.dynamic_date_formatted('YYYY.M.D').value }}
                </span>
            <span class="day_in_week">
                  {{ time_function.get_day_in_week() }}
              </span>
        </div>
        <div class="lunar">
                <span class="main">
                    {{ (today_lunar as any)?.gzYear }}年{{
                    (today_lunar as any)?.IMonthCn
                    }}{{ (today_lunar as any)?.IDayCn }}
                </span>
            <span class="star">
                    {{ (today_lunar as any)?.festival }}
                     {{ (today_lunar as any)?.festival && (today_lunar as any)?.Term ? "·" : "" }}
                    {{ (today_lunar as any).Term }}
                    {{ (today_lunar as any)?.lunarFestival && (today_lunar as any)?.Term ? "·" : "" }}
                    {{ (today_lunar as any)?.lunarFestival }}
                </span>

        </div>
        <div class="time">
                 <span>
               {{ time_function.dynamic_date_time_formatted('hh:mm:ss').value }}
           </span>
            <span class="ampm">
                {{ time_function.get_ampm() }}
            </span>
        </div>

    </div>
</template>

<style scoped lang="less">
@font-face {
  font-family: "mi-sans-limitted"; /* Project id 2878519 */
  src: url('misans-medium-limitted.ttf') format('truetype');
}

.date_time_frame {
  font-family: "mi-sans-limitted", serif;
  font-size: 6rem;
  //position: absolute;
  z-index: 1000;
  user-select: none;
  //top: 50%;
  //left: 7rem;
  text-align: left;
  color: v-bind("default_theme.font_color");

  .lunar {
    font-size: 1.5rem;
    padding-left: 0.5rem;
    margin-top: 1rem;
    width: 27rem;
    border-left: #cb4040 10px solid;
    background-color: #eeeeee;
    -webkit-box-shadow: 3px 7px 64px -18px rgba(0, 0, 0, 0.82);
    -moz-box-shadow: 3px 7px 64px -18px rgba(0, 0, 0, 0.82);
    box-shadow: 3px 7px 64px -18px rgba(0, 0, 0, 0.82);

    .star {
      margin-left: 2rem;
      font-weight: 600;
      color: #258cc2;
      font-family: "苹方", "苹方 中等", "微软雅黑", "Helvetica Neue", "Arial",
      "Hiragino Sans GB", " STHeiti", "Microsoft YaHei", "WenQuanYi Micro Hei", "SimSun, Song", sans-serif;
    }
  }

  .date {
    font-size: 2.5rem;
    //margin-left: 1rem;
    color: #304455;
    //background-color: #cb4040;

    span:first-child {
      padding-left: 1rem;
      display: inline-block;
      //width: 17rem;
      //background-color: #5abbb8;
    }

    .day_in_week {
      margin-left: 1.8rem;
    }
  }


  .time {
    .ampm {
      font-size: 2.5rem;
      margin-left: 1rem;
    }
  }


}
</style>
