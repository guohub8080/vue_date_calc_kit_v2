<script setup lang="ts">
import {computed, onBeforeMount, reactive, ref, watch} from "vue";
import DayView from "../components/DayView.vue";
import {onKeyUp} from "@vueuse/core";
import router from "@/router";
import ClockFace from "../components/Clock.vue"
import time_function from "../logic"
import {default_theme} from "@/views/clock/logic/theme";
import {log} from "typings/dist/support/cli";

import {ImagePreviewGroup, message} from "ant-design-vue";

const reset_selected_day = () => {
  page_select_day.value = time_function.get_dayjs()
}

const const_today = time_function.get_dayjs()
const page_select_day = time_function.get_ref_dayjs()
onBeforeMount(() => {
  document.body.setAttribute("style", "background-color:#eeeeee")
  console.log("作者：方块郭")
  console.log("联系方式：guo2018@88.com")
})
onKeyUp("t", () => reset_selected_day())

watch(page_select_day, (value, oldValue, onCleanup) => {
  // console.log(value.format("YYYYMMDD"))
  page_info.value.certain_forward_day_L2 = value
  page_info.value.today_target_day_L3 = value
  page_info.value.certain_base_day_L4 = value
  page_info.value.certain_target_day_L4 = value
})
const page_info = ref({
  modal_visible: false,
  // 这是第一行的配置数据
  today_forward_num_L1: 1,
  today_forward_unit_L1: "day",
  is_today_forward_L1: 1,
  // 第二行的配置数据
  certain_forward_day_L2: page_select_day.value,
  certain_day_forward_num_L2: 1,
  is_certain_day_forward_L2: 1,
  certain_day_forward_unit_L2: "day",
  // 第三行的数据
  today_target_day_L3: page_select_day.value,
  // 第四行的数据
  certain_base_day_L4: page_select_day.value,
  certain_target_day_L4: page_select_day.value,
  // 历史数据
  calc_history: []
})

const remove_history_item = (history_index: number) => {
  page_info.value.calc_history.splice(history_index, 1)

}
const do_calc = (calc_type: number) => {
  // 如果是从第一个管道过来计算的
  if (calc_type === 1) {
    if (page_info.value.today_forward_num_L1 === 0) {
      message.info("我一下就看出来了这是当天，就不用计算了吧 (๑•̀ㅂ•́)و✧", 5)
      return;
    }
    (page_info.value.calc_history as any).unshift(
        time_function.get_target_dayjs_by_calc(
            const_today,
            page_info.value.today_forward_num_L1,
            page_info.value.today_forward_unit_L1,
            Boolean(page_info.value.is_today_forward_L1))
    )
  }
  if (calc_type === 2) {
    if (page_info.value.certain_day_forward_num_L2 === 0) {
      message.info("亲，同一天还需要计算吗⎛ -᷄ ᴥ -᷅ ⎞", 5)
      return;
    }
    (page_info.value.calc_history as any).unshift(
        time_function.get_target_dayjs_by_calc(
            page_info.value.certain_forward_day_L2,
            page_info.value.certain_day_forward_num_L2,
            page_info.value.certain_day_forward_unit_L2,
            Boolean(page_info.value.is_certain_day_forward_L2))
    )
  }
  if (calc_type === 3) {
    const days_gap_result = time_function.get_days_gap_by_calc(const_today, page_info.value.today_target_day_L3)
    if (days_gap_result.gap_days === 0) {
      message.info("这好像是同一天吧( ´◔ ‸◔`)", 5)
      return;
    }
    (page_info.value.calc_history as any).unshift(days_gap_result)
  }
  if (calc_type === 4) {
    const days_gap_result = time_function.get_days_gap_by_calc(
        page_info.value.certain_base_day_L4, page_info.value.certain_target_day_L4)
    if (days_gap_result.gap_days === 0) {
      message.info("悄悄告诉你，这是同一天´•ᴥ•`", 5)
      return;
    }
    (page_info.value.calc_history as any).unshift(days_gap_result)

  }
  message.success("计算成功")
  page_info.value.modal_visible = false
}

const open_modal = () => {
  // console.log("g")
  page_info.value.modal_visible = true

}
</script>

<template>
  <div class="nav"></div>
  <div class="container">
    <div class="left">
      <a-calendar v-model:value="page_select_day" :fullscreen="false"/>
    </div>
    <div class="right" @dblclick="reset_selected_day()">
      <DayView :base_day="page_select_day"></DayView>
    </div>
    <a-popover placement="left">
      <template #content>
        <div style="width: 36rem;display: flex">
          <div style="width: 17rem">
            <div>
              页面加载成功后显示日期选择器，可在此查看任意一天的具体信息。双击选择器或者按下键盘的
              <span style="font-weight: 700">T</span>
              键以跳转到今天。
            </div>
            <div>
              点击“开始计算”，弹出计算框，根据提示选择即可。为方便计算，当日期选择器的日期改变时，计算框的某些日期会跟随同步。
            </div>
            <div style="margin-top: 1.3rem">作者：方块郭</div>
            <div>
              联系作者：guo2018#88.com（#替换@）
            </div>

          </div>
          <div style="width: 17rem;border-left: #adadad 1px dashed;margin-left: 1rem;padding-left: 1rem">
            <div>
              本项目是日期计算器
              （<a href="https://guohub8080.github.io/vue_date_calc_kit/">GitHub Page</a>）
              的升级版，使用方法一致。
            </div>
            <div>该版本升级内容为界面美化、优化逻辑和算法及新增桌面时钟功能。
            </div>
            <div>
              桌面时钟目前有四个风格：
            </div>
            <div>
              <a @click="router.replace('/time/style1')">1.迷你日历、数字时间和模拟时钟</a>
              <br>
              <a @click="router.replace('/time/style2')">2.仅显示数字时间</a> <br>
              <a @click="router.replace('/time/style3')">3.仅显示模拟时钟</a> <br>
              <a @click="router.replace('/time/style4')">4.数字时间和模拟时钟</a> <br>
            </div>
          </div>
        </div>
      </template>
      <template #title>
        <span>用法说明</span>
      </template>
      <div class="qaa">
        ?
      </div>
    </a-popover>

  </div>
  <div class="start">
        <span>

        日期计算器
        </span>
    <a @click="open_modal()"> 开始计算</a>
    <a-modal v-model:visible="page_info.modal_visible"
             :maskStyle="{backgroundColor:'rgba(5,5,5,0.84)'}"
             title="你可以这样问我..." :footer="null"
             @ok="" width="46rem">
      <div class="query_table">
        <!--                第一行-->
        <div class="line">
          <div class="cell1">1</div>
          <div class="cell2">
            从今天 ( {{ const_today.format("YYYY年M月D日") }}-{{
              time_function.get_day_in_week(const_today)
            }} ) 起算，
            <span>
                               <a-input-group compact>
                            <a-input-number v-model:value="page_info.today_forward_num_L1" style="width:5rem"/>
                            <a-select v-model:value="page_info.today_forward_unit_L1">
                                <a-select-option value="day">天</a-select-option>
                                <a-select-option value="week">周</a-select-option>
                                <a-select-option value="month">月</a-select-option>
                            </a-select>
                                   <a-select v-model:value="page_info.is_today_forward_L1">
                                <a-select-option :value="1">之后</a-select-option>
                                <a-select-option :value="0">之前</a-select-option>
                            </a-select>
                        </a-input-group>
                        </span>
            是哪一天？
          </div>

          <div class="cell3" @click="do_calc(1)">查看结果</div>
        </div>
        <!--                第二行-->
        <div class="line">
          <div class="cell1">2</div>
          <div class="cell2">
            从
            <a-date-picker
                :allowClear="false"
                v-model:value="page_info.certain_forward_day_L2">
            </a-date-picker>
            ( {{ time_function.get_day_in_week(page_info.certain_forward_day_L2) }} )
            起算，
            <span>
                               <a-input-group compact>
                            <a-input-number v-model:value="page_info.certain_day_forward_num_L2" style="width:5rem"/>
                            <a-select v-model:value="page_info.certain_day_forward_unit_L2">
                                <a-select-option value="day">天</a-select-option>
                                <a-select-option value="week">周</a-select-option>
                                <a-select-option value="month">月</a-select-option>
                            </a-select>
                                   <a-select v-model:value="page_info.is_certain_day_forward_L2">
                                <a-select-option :value="1">之后</a-select-option>
                                <a-select-option :value="0">之前</a-select-option>
                            </a-select>
                        </a-input-group>
                        </span>
            是哪一天？
          </div>

          <div class="cell3" @click="do_calc(2)">查看结果</div>
        </div>
        <!--                第三行-->
        <div class="line">
          <div class="cell1">3</div>
          <div class="cell2">
            今天 ( {{ const_today.format("YYYY年M月D日") }}-{{ time_function.get_day_in_week(const_today) }}
            ) 和
            <a-date-picker :allowClear="false" v-model:value="page_info.today_target_day_L3"/>
            ( {{ time_function.get_day_in_week(page_info.today_target_day_L3) }} )
            之间隔多久？
          </div>

          <div class="cell3" @click="do_calc(3)">查看结果</div>
        </div>
        <!--                第四行-->
        <div class="line">
          <div class="cell1">4</div>
          <div class="cell2">
            <a-date-picker :allowClear="false" v-model:value="page_info.certain_base_day_L4"/>
            ( {{ time_function.get_day_in_week(page_info.certain_base_day_L4) }} )
            和
            <a-date-picker :allowClear="false" v-model:value="page_info.certain_target_day_L4"/>
            ( {{ time_function.get_day_in_week(page_info.certain_target_day_L4) }} )
            之间隔多久？
          </div>

          <div class="cell3" @click="do_calc(4)">查看结果</div>
        </div>
      </div>


    </a-modal>

  </div>
  <div class="history">
    <div v-for="(each_history,index) in page_info.calc_history"
         key="index"
         class="each_history_item">
      <!--            循环，如果div是正向计算-->
      <div v-if="each_history.type==='get_target_day'">
        <span>从</span>
        <a-popover>
          <template #content>
            <DayView :base_day="each_history?.start_day"></DayView>
          </template>
          <template #title>
          </template>
          <span v-if="each_history.start_day_is_today" class="day_pop_window">
                        今天
                        ( {{ time_function.get_day_in_week(each_history?.start_day) }} )
                    </span>
          <span v-if="!each_history.start_day_is_today" class="day_pop_window">
                    {{ each_history?.start_day.format("YYYY年M月D日") }}
                        ( {{ time_function.get_day_in_week(each_history?.start_day) }} )
                </span>
        </a-popover>

        <span>起算</span>，
        <span>{{ Math.abs(each_history?.gap_num) }}</span>
        <span>{{ each_history?.gap_unit_cn }}</span>
        <span>{{ each_history?.is_forward ? "之后" : "之前" }}是</span>
        <a-popover>
          <template #content>
            <DayView :base_day="each_history?.target_day"></DayView>
          </template>
          <template #title>
          </template>
          <span class="day_pop_window" v-if="!each_history?.target_day_is_today">
                        {{ each_history?.target_day?.format("YYYY年M月D日") }}
                        ( {{ time_function.get_day_in_week(each_history?.target_day) }} )
                    </span><span class="day_pop_window" v-if="each_history?.target_day_is_today">
                        今天
                    ( {{ time_function.get_day_in_week(each_history?.target_day) }} )
                    </span>
        </a-popover>
      </div>
      <!--            循环，如果div是反向计算-->
      <div v-if="each_history.type==='get_days_gap'">
        <span>从</span>
        <a-popover>
          <template #content>
            <DayView :base_day="each_history.start_day"></DayView>
          </template>
          <template #title>
          </template>
          <span v-if="each_history.start_day_is_today" class="day_pop_window">
                        今天
                    ( {{ time_function.get_day_in_week(each_history?.start_day) }} )
                    </span>
          <span v-if="!each_history.start_day_is_today" class="day_pop_window">
                    {{ each_history?.start_day.format("YYYY年M月D日") }}
                        ( {{ time_function.get_day_in_week(each_history?.start_day) }} )
                </span>
        </a-popover>
        <span :class="each_history?.is_forward?'early':'later'">
                    {{ each_history?.is_forward ? "早" : "晚" }}
                </span>

        <span>到</span>
        <a-popover>
          <template #content>
            <DayView :base_day="each_history.target_day"></DayView>
          </template>
          <template #title>
          </template>
          <span v-if="each_history.target_day_is_today" class="day_pop_window">
                        今天
                        ( {{ time_function.get_day_in_week(each_history?.target_day) }} )
                    </span>
          <span v-if="!each_history.target_day_is_today" class="day_pop_window">
                    {{ each_history?.target_day.format("YYYY年M月D日") }}
                        ( {{ time_function.get_day_in_week(each_history?.target_day) }} )
                </span>
        </a-popover>
        <span :class="!each_history?.is_forward?'early':'later'">
                    {{ !(each_history?.is_forward) ? "早" : "晚" }}
                </span>
        <span>中间经过了</span>
        <span>{{ each_history?.gap_days }}天</span>
      </div>

      <div class="clear" @click="remove_history_item(index)">—</div>

    </div>

  </div>

</template>

<style scoped lang="less">

//导航
.nav {
  width: 100%;
  background-color: #3393ff;
  position: absolute;
  z-index: -100000;
  height: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("@assets/calc_banner.svg");
  background-position: center;
  background-size: cover;
  overflow: hidden;
  box-shadow: 1px 2px 39px -1px rgba(0, 0, 0, 0.2);

}

//一开始主页面的样式
.container {
  margin: 0 auto;
  width: 40rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5rem;


  .left {
    width: 18rem;
    height: 21.5rem;
    border-radius: 0.5rem 0 0 0.5rem;
    border: #cccccc 1px solid;
    border-right: none;
    overflow: hidden;
    padding: 1rem;
    background-color: #ffffff;
    box-shadow: 1px 2px 39px -1px rgba(0, 0, 0, 0.2);

  }


  .right {
    box-shadow: 1px 2px 39px -1px rgba(0, 0, 0, 0.2);

    position: relative;
    overflow: hidden;
    height: 21.5rem;
    border-radius: 0 0.5rem 0.5rem 0;
    border: #cccccc 1px solid;
    border-left: none;
    background-color: #ffffff;

  }
}

.qaa {
  position: absolute;
  width: 1.6rem;
  height: 1.6rem;
  z-index: 100;
  background-color: #5382ee;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  color: #ffffff;
  cursor: pointer;
  font-family: mi-sans-limitted;
  margin-left: 42rem;
  margin-top: 19.5rem;
  border-radius: 100%;
  box-shadow: 1px 2px 39px -1px rgba(0, 0, 0, 0.2);
}

//开始计算的样式
.start {
  margin: 0 auto;
  font-size: 1rem;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;

  span {
    //width: 16rem;
    display: inline-block;
    //background-color: #d06f6f;
  }

  //开始计算这个按钮
  a {
    margin-left: 2rem;
    display: inline-block;
    padding-left: 1rem;
    padding-right: 1rem;
    padding-top: 0.3rem;
    padding-bottom: 0.3rem;
    border: #d5d5d5 1px solid;
    user-select: none;
    border-radius: 0.4rem;
    background-color: #f6f6f6;
    transition: all 0.2s;

    &:active {
      color: #113d52;
      background-color: #d2d2d2;
      transition: all 0.2s;
      transform: scale(0.9);
    }

    //width: 6rem;
    //background-color: #387c85;
  }


}

//计算的模态样式
.query_table {
  width: 46rem;
  display: flex;
  //background-color: #eeb4b4;
  justify-content: flex-start;
  flex-direction: column;


  .line {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    .cell1 {
      font-size: 0.9rem;
      text-align: center;
      background-color: #03A9F4;
      color: #fafafa;
      border-radius: 0.3rem;
      width: 1.5rem;
      //font-weight: 700;
      font-family: mi-sans-limitted;
      margin-right: 0.5rem;
    }

    .cell2 {
      span {
        display: inline-block;
        line-height: 2rem;
      }
    }

    .cell3 {
      //background-color: #4ba6ee;
      color: #4ba6ee;
      border-bottom: #4ba6ee 1px solid;
      width: 4rem;
      //border: #c5c5c5 1px solid;
      padding: 0.2rem;
      //border-radius: 0.3rem;
      display: inline-block;
      text-align: center;
      transition: all 0.2s;
      cursor: pointer;

      &:active {
        transform: scale(0.9);
        transition: all 0.2s;
      }
    }
  }

}

//历史记录
.history {
  margin: 0 auto;
  //background-color: #c79292;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div.each_history_item {
    margin-bottom: 1.2rem;
    display: flex;
    justify-content: center;
    background-color: #ffffff;
    border: #d7d7d7 1px solid;
    width: 37.8rem;
    padding: 0.5rem;
    border-radius: 0.2rem;

    .clear {
      position: absolute;
      font-family: mi-sans-limitted;
      font-weight: 700;
      margin-left: 42rem;
      color: #ffffff;
      width: 1.5rem;
      height: 1.5rem;
      line-height: 1.5rem;
      border-radius: 100%;
      font-size: 1rem;
      background-color: #bdbdbd;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        background-color: #cb4040;
        transform: scale(1.2);
        transition: all 0.2s;
      }

      &:active {
        transform: scale(0.9);
        transition: all 0.2s;
      }
    }

    .day_pop_window {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
      //background-color: #ffedbf;
      border-bottom: #ffc232 2px dashed;
      font-weight: 700;
      transition: all 0.2s;
      cursor: pointer;

      &:hover {
        padding: 0.3rem;
        padding-left: 0.5rem;
        padding-right: 0.5rem;
        border-radius: 0.3rem;
        background-color: #ffc232;
        transition: all 0.2s;
      }
    }

    .early, .later {
      padding: 0.2rem;
      padding-left: 0.3rem;
      padding-right: 0.3rem;
      font-family: mi-sans-limitted;
      margin-right: 0.5rem;
      margin-left: -0.3rem;
      //background-color: #a47b7b;
      border-radius: 0.2rem;
      color: #ffffff;
    }

    .early {
      background-color: #66BB6A;
    }

    .later {
      background-color: #2196F3;
    }
  }
}
</style>
