<script setup lang="ts">
import time_function from "@/views/clock/logic";
import {computed, Ref} from "vue";
import {Dayjs} from "dayjs";

const props = defineProps<{
    base_day: Dayjs
}>()


const week_day = computed(() => time_function.get_day_in_week(props.base_day))
const today_lunar = computed(() => time_function.get_lunar_calendar(props.base_day))
const lunar_string = computed(() => {
    return (today_lunar.value as any)?.gzYear + "年" + (today_lunar.value as any)?.IMonthCn + (today_lunar.value as any)?.IDayCn
})

const festival = computed(() => {
    if (Boolean((today_lunar.value as any).festival)) {
        return (today_lunar.value as any).festival
    }
    if (Boolean((today_lunar.value as any).lunarFestival)) {
        return (today_lunar.value as any).lunarFestival
    }
    return "暂无"
})

const term = computed(() => {
    if ((today_lunar.value as any).isTerm) {
        return (today_lunar.value as any).Term + "（当天）"
    }
    let day_obj = time_function.get_dayjs((today_lunar.value as any).date)
    let lunar_obj = time_function.get_lunar_calendar(day_obj)
    // console.log(lunar_obj)
    while (!Boolean((lunar_obj as any).isTerm)) {
        day_obj = day_obj.add(-1, "day")
        lunar_obj = time_function.get_lunar_calendar(day_obj)
    }
    return (lunar_obj as any).Term + "（期间）"
})

const day_info = computed(() => {
    const day_num = props.base_day.dayOfYear()
    const day_in_year_percent = time_function.get_day_of_year_percent(props.base_day)
    const day_in_month_num = props.base_day.daysInMonth()
    const day_in_month_percent = time_function.get_day_of_month_percent(props.base_day)
    const is_leap_year = props.base_day.isLeapYear()
    const days_num_of_year = time_function.get_days_in_year(props.base_day)
    const lunar_month = (today_lunar.value as any)?.gzMonth
    const lunar_day = (today_lunar.value as any)?.gzDay
    const week_order = time_function.get_week_of_year(props.base_day)
    const full_week = props.base_day.isoWeeksInYear()
    const week_percent = week_order + " / " + full_week
    const first_sunday = time_function.get_first_sunday_in_year(props.base_day)
    return {
        day_num, day_in_year_percent: (day_in_year_percent * 100).toFixed(1) + "%",
        day_in_month_num, is_leap_year: is_leap_year ? "是" : "否", days_num_of_year,
        day_in_month_percent: (day_in_month_percent * 100).toFixed(1) + "%",
        lunar_month, lunar_day, week_percent, first_sunday: first_sunday.format("M月D日")
    }
})

const is_today = computed(() => {
    const today = time_function.get_dayjs()
    if (today.format("YYYYMMDD") === props.base_day.format("YYYYMMDD")) {
        return true
    }
    return false
})
</script>

<template>
    <div class="day_view">
        <!--            第一个div：日期-->
        <div>
                <span>
                    {{ base_day.format("YYYY年M月D日") }}
                </span>
        </div>
        <!--            第二个div：农历和星期-->
        <div>
            <span>{{ week_day }} </span>
            <span>{{ lunar_string }} </span>
        </div>
        <!--            第三个div：分割线-->
        <div></div>
        <!--            第四个div：属相、星座-->
        <div>

        </div>
        <table>
            <tr>
                <td>
                    <span class="attribute">生肖年</span>
                    <span class="value">{{ (today_lunar as any)?.Animal }}</span>
                </td>
                <td>
                    <span class="attribute">星座</span>
                    <span class="value">{{ (today_lunar as any)?.astro }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="attribute">农历月</span>
                    <span class="value">{{ day_info.lunar_month }}</span>
                </td>
                <td>
                    <span class="attribute">农历日</span>
                    <span class="value">{{ day_info.lunar_day }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="attribute">节日</span>
                    <span class="value">{{ festival }}</span>
                </td>
                <td>
                    <span class="attribute">节气</span>
                    <span class="value">{{ term }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="attribute">周数</span>
                    <span class="value">{{ day_info.week_percent }}</span>
                </td>
                <td>
                    <span class="attribute">首周开始</span>
                    <span class="value">{{ day_info.first_sunday }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="attribute">本年总天数</span>
                    <span class="value">{{ day_info.days_num_of_year }}</span>
                </td>
                <td>
                    <span class="attribute">是否闰年</span>
                    <span class="value">{{ day_info.is_leap_year }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="attribute">本年第几天</span>
                    <span class="value">{{ day_info.day_num }}</span>
                </td>
                <td>
                    <span class="attribute">本年进度</span>
                    <span class="value">{{ day_info.day_in_year_percent }}</span>
                </td>
            </tr>
            <tr>
                <td>
                    <span class="attribute">本月总天数</span>
                    <span class="value">{{ day_info.day_in_month_num }}</span>
                </td>
                <td>
                    <span class="attribute">本月进度</span>
                    <span class="value">{{ day_info.day_in_month_percent }}</span>
                </td>
            </tr>


        </table>
        <div class="today" v-show="is_today">今</div>
    </div>
</template>

<style scoped lang="less">
@font-face {
  font-family: "mi-sans-limitted"; /* Project id 2878519 */
  src: url('misans-medium-limitted.ttf') format('truetype');
}

.today {
  filter: opacity(0.7);
  position: absolute;
  font-weight: 700;
  font-family: mi-sans-limitted;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  background-color: #ced1fb;
  padding: 0.1rem;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  margin-top: -18.7rem;
  margin-left: 15.2rem;
  color: #2a03f5;
}

.day_view {
  width: 20rem;
  text-align: left;
  padding: 1.5rem;
  height: 21.5rem;
  //background-color: #eeeeee;
  //第一个div：日期
  div:nth-child(1) {
    font-size: 1.8rem;
    font-family: mi-sans-limitted;

    span:first-child {
      display: inline-block;
      width: 15rem;
    }
  }

  //第二个div：农历和星期
  div:nth-child(2) {
    font-size: 1.1rem;
    //margin-top: 0.5rem;

    span:first-child {
      width: 4rem;
      display: inline-block;
    }
  }

  //第三个div：分割线
  div:nth-child(3) {
    width: 100%;
    border-bottom: #2c3e50 1px dashed;
    height: 1.5rem;
    margin-bottom: 1rem;
  }

  table {
    width: 100%;

    td {
      //border: #304455 1px solid;
      width: 50%;
      height: 1.5rem;

    }

    span {
    }

    span.attribute {
      margin-right: 0.5rem;
      color: #01579B;
      font-weight: 700;

      border-bottom: #a6d3ff 3px solid;
      //background-color: #dcdcdc;
      //padding-left: 0.3rem;
      //padding-right: 0.3rem;
      //  padding-top: 0.1rem;
      //  padding-bottom: 0.1rem;
      //border-radius: 0.25rem;
      display: inline-block;
    }

    span.value {
    }
  }

}
</style>
