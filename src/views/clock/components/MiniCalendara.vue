<script setup lang="ts">
import time_function from "@/views/clock/logic";
import {log} from "typings/dist/support/cli";
import dayjs from "dayjs";
import {onMounted} from "vue";
// 这个变量相当于是变成了date-picker，默认是今天
const ref_dayjs = time_function.get_ref_dayjs()

const get_day_in_mini_calendar = (day_order: number) => {
    // if (day_order >= ref_dayjs.value.day()) {
    //     return ref_dayjs.value.add(day_order - ref_dayjs.value.day(), "day").date()
    // }
    return ref_dayjs.value.add(day_order - ref_dayjs.value.day(), "day").date()
}

const get_lunar_in_mini_calendar = (day_order: number) => {
    const day_obj = ref_dayjs.value.add(day_order - ref_dayjs.value.day(), "day")
    const lunar_obj = time_function.get_lunar_calendar(day_obj)
    // console.log(lunar_obj)
    // return lunar_obj
    if ((lunar_obj as any)?.Term) {
        return (lunar_obj as any)?.Term
    }
    if (Boolean((lunar_obj as any)?.lunarFestival)) {
        return (lunar_obj as any)?.lunarFestival
    }
    if ((lunar_obj as any)?.lDay === 1) {
        return (lunar_obj as any)?.IMonthCn
    }
    return (lunar_obj as any)?.IDayCn
}

onMounted(() => {
    time_function.get_dayjs(ref_dayjs.value)
})
</script>

<template>
    <table>
        <tr class="title">
            <td>日</td>
            <td>一</td>
            <td>二</td>
            <td>三</td>
            <td>四</td>
            <td>五</td>
            <td>六</td>
        </tr>
        <tr>
            <td v-for="day_in_week in [0,1,2,3,4,5,6]">
                <div class="date_frame" :class="day_in_week===ref_dayjs.day()?'today':''">
                    <div class="date">
                        {{ get_day_in_mini_calendar(day_in_week) }}
                    </div>
                    <div class="lunar">
                        {{ get_lunar_in_mini_calendar(day_in_week) }}
                    </div>
                </div>
            </td>
        </tr>
    </table>
</template>

<style scoped lang="less">
table {
  margin: 0 auto;
  user-select: none;
  border-radius: 0.5rem;
  overflow: hidden;
  border: #d9d9d9 1px solid;
  background-color: #FAFAFA;

  tr {
        padding:0;;
      margin:0;
  }

  td {
    width: 3.3rem;
    padding: 0;
  }

  .title {
    color: #37474F;
  }

  tr:first-child {
    height: 1.8rem;

    td {

      border: #d9d9d9 1px solid;
    }
  }

  tr:last-child {


    td {
      border: #d9d9d9 1px solid;
      padding: 0;
    }
  }

  .date_frame {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    user-select: none;

    .date {
      font-size: 1.2rem;
      font-weight: 700;
      padding-top: 0.3rem;
      height: 2rem;
    }

    .lunar {
      //height: 2rem;
      font-size: 0.8rem;
      word-break: break-all;
      padding-left: 0.5rem;
      padding-right: 0.5rem;
      padding-bottom: 0.5rem;
      //overflow: scroll;
    }
  }

  .today {
    background-color: #FFE082;
  }
}
</style>
