import {ref} from "vue";
import {defineStore} from "pinia";
import time_function from "../logic"

export default defineStore('date_time', () => {
    const page_select_dayjs = time_function.get_ref_dayjs()
    return {
        page_select_dayjs
    }
})