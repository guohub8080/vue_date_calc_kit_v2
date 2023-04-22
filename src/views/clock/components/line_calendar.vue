<script setup lang="ts">
import time_function from "@/views/clock/logic";
import {log} from "typings/dist/support/cli";

// 这个变量相当于是变成了date-picker，默认是今天
const selected_dayjs = time_function.get_ref_dayjs()
</script>

<template>
    <a-calendar v-model:value="selected_dayjs" :fullscreen="false">
        <template v-slot:dateFullCellRender="{current}">
            <div class="date_cell">
                <div>
                    {{ current.format("DD") }}
                    {{ current.format("YYYYMMDD") === selected_dayjs.format("YYYYMMDD") ? "_" : "" }}
                </div>

                <p>
                    {{ time_function.get_lunar_calendar(current.format("YYYYMMDD")).IDayCn }}
                </p>
            </div>

        </template>
    </a-calendar>

</template>

<style scoped lang="less">
.date_cell{
    border: #304455 1px solid;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #a26464;
}
</style>
