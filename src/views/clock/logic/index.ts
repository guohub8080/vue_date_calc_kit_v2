import dayjs from "dayjs";
import {computed, createTextVNode, onMounted, ref} from "vue";
import {Dayjs} from "dayjs";
import isoWeeksInYear from 'dayjs/plugin/isoWeeksInYear';
import isLeapYear from 'dayjs/plugin/isLeapYear';
import dayOfYear from "dayjs/plugin/dayOfYear"
import weekOfYear from "dayjs/plugin/weekOfYear"
import updateLocale from "dayjs/plugin/updateLocale"
import {now, useDateFormat, useNow} from "@vueuse/core";
// @ts-ignore
import calendar from "./canlendar-converter";

// 返回一个 number 来表示 Day.js 的日期是年中第几周。
dayjs.extend(weekOfYear);
// 返回一个 number 来得到依据 ISO week 标准一年中有几周，此功能依赖 IsLeapYear 插件，才能正常运行
dayjs.extend(isoWeeksInYear);
dayjs.extend(isLeapYear);
dayjs.extend(dayOfYear);
dayjs.extend(updateLocale)
dayjs.locale("zh-cn")
dayjs.updateLocale("zh-cn", {weekStart: 7})

// 得到ref格式的今天
const get_ref_dayjs = (input_day_string?: string) => {
    if (Boolean(input_day_string)) {
        return ref<Dayjs>(dayjs(input_day_string))
    }
    return ref<Dayjs>(dayjs())
}

const get_dayjs = (input_day_string?: string | Dayjs) => {
    if (Boolean(input_day_string)) {
        if (typeof input_day_string === "string") {
            return dayjs(input_day_string as string)
        }
        if (typeof input_day_string === "object") {
            if (input_day_string instanceof dayjs) {
                return input_day_string
            }
        }
    }
    return dayjs()
}

// 获取一年有多少天
const get_days_in_year = (input_day_string?: string | Dayjs,) => {
    let day_obj = get_dayjs(input_day_string)
    const next_year = get_dayjs(`${day_obj.year() + 1}-1-1`).dayOfYear(0)
    // console.log(next_year.format("YYYYMMDD"))
    return next_year.dayOfYear()
}

// 获取一年的一开始的星期是从几号开始
const get_first_sunday_in_year = (input_day_string?: string | Dayjs,) => {
    let day_obj = get_dayjs(input_day_string)
    let first_day_of_year = get_dayjs(`${day_obj.year()}-1-1`)
    if (first_day_of_year.day() === 0) {
        return first_day_of_year
    }
    while (first_day_of_year.day() !== 0) {
        first_day_of_year = first_day_of_year.add(1, "day")
    }
    return first_day_of_year
}
const get_week_of_year = (input_day_string?: string | Dayjs, first_week_need_complete = false) => {
    let today = dayjs()
    if (Boolean(input_day_string)) {
        today = dayjs(input_day_string)
    }
    if (first_week_need_complete) {
        // 在dayjs里面，1表示第1天，0表示昨天
        const first_full_week_day_start = today.dayOfYear(1)
        // 如果第一年的第一天就是第一周，那么没什么好说的，直接返回
        if (first_full_week_day_start.week() === 1) {
            return today.week()
        }
        // 如果第一年的第一天不是第一周，通常是上一年的延续，所以需要找出来到哪里才是这一周的实际开始
        let first_full_week_day_end = first_full_week_day_start
        // 如果第一天在本周就大于1，那么证明是不完整的一周
        while (first_full_week_day_end.week() > 1) {
            first_full_week_day_end = first_full_week_day_end.add(1, "day")
        }
        // console.log(first_full_week_day_start.format(), first_full_week_day_end.format())
        const diff_day = today.diff(first_full_week_day_end)
        if (diff_day < 0) {
            return 1
        }
        return today.week() + 1
    }
    return today.week()
}


// 获取一天在本周的周几
const get_day_in_week = (input_day_string?: string | Dayjs, week_day_prefix = "周", use_arabic_num = false) => {
    const day_obj = get_dayjs(input_day_string)
    const date_weekday_map = ["日", "一", "二", "三", "四", "五", "六"]
    if (use_arabic_num) {
        const arabic_array = [7, 1, 2, 3, 4, 5, 6]
        return week_day_prefix + arabic_array[day_obj.day()]
    }
    return week_day_prefix + date_weekday_map[day_obj.day()]
}

// 获取一天在本月的比值
const get_day_of_month_percent = (input_day_string?: string | Dayjs) => {
    const day_obj = get_dayjs(input_day_string)
    const month_days = day_obj.daysInMonth()
    return day_obj.date() / month_days
}

// 获取一天在周年的比值
const get_day_of_year_percent = (input_day_string?: string | Dayjs) => {
    const day_obj = get_dayjs(input_day_string)
    const year_days = day_obj.endOf("year").dayOfYear()
    // console.log(year_days,day_obj.date(),day_obj.date() / year_days)
    return day_obj.dayOfYear() / year_days
}

const dayjs_formatted = (dayjs_obj?: Dayjs, format_string = 'YYYY-MM-DD HH:mm:ss') => {
//     标识	    示例	                描述
//     YY	    18	                年，两位数
//     YYYY	    2018	            年，四位数
//     M	    1-12	            月，从1开始
//     MM	    01-12	            月，两位数
//     MMM	    Jan-Dec	            月，英文缩写
//     MMMM	    January-December	月，英文全称
//     D	    1-31	            日
//     DD	    01-31	            日，两位数
//     d	    0-6	                一周中的一天，星期天是 0
//     dd	    Su-Sa           	最简写的星期几
//     ddd	    Sun-Sat	            简写的星期几
//     dddd	    Sunday-Saturday	    星期几，英文全称
//     H	    0-23	            小时
//     HH	    00-23	            小时，两位数
//     h	    1-12	            小时, 12 小时制
//     hh	    01-12	            小时, 12 小时制, 两位数
//     m	    0-59	            分钟
//     mm	    00-59	            分钟，两位数
//     s	    0-59            	秒
//     ss	    00-59	            秒，两位数
//     S	    0-9	                毫秒（十），一位数
//     SS	    00-99	            毫秒（百），两位数
//     SSS	    000-999         	毫秒，三位数
//     Z	    -05:00          	UTC 的偏移量，±HH:mm
//     ZZ	    -0500	            UTC 的偏移量，±HHmm
//     A	    AM / PM	            上/下午，大写
//     a	    am / pm	            上/下午，小写
//     Do	    1st... 31st	        月份的日期与序号
//     ...	    ...	                其他格式 ( 依赖 AdvancedFormat 插件 )
    if (Boolean(dayjs_obj)) {
        return dayjs_obj?.format(format_string)
    }
    return get_dayjs().format(format_string)
}

// 计算日期差
const days_gap = (base_date: Dayjs, target_date: Dayjs) => {
    try {
        const base_f_d = dayjs(base_date.format("YYYY-MM-DD"))
        const target_f_d = dayjs(target_date.format("YYYY-MM-DD"))
        const result = base_f_d.diff(target_f_d, "day") * -1
        if (isNaN(result)) {
            return "#"
        } else {
            return result
        }
    } catch (err) {
        return "#"
    }
}

const ref_dynamic_now = useNow()

// 将日期进行格式化的函数
const dynamic_date_formatted = (format_string?: string) => {
    if (Boolean(format_string)) {
        return useDateFormat(ref_dynamic_now, format_string as string)
    }
    return useDateFormat(ref_dynamic_now, "YYYY年M月D日")
}


// 将时间进行格式化的函数
const dynamic_time_formatted = (format_string?: string) => {
    if (Boolean(format_string)) {
        return useDateFormat(ref_dynamic_now, format_string as string)
    }
    return useDateFormat(ref_dynamic_now, "HH:mm:ss")
}


// 将日期时间进行格式化的函数
const dynamic_date_time_formatted = (format_string?: string) => {
    // Format	Output	            Description
    // YY	    18	                Two-digit year
    // YYYY	    2018	            Four-digit year
    // M	    1-12	            The month, beginning at 1
    // MM	    01-12	            The month, 2-digits
    // MMM	    Jan-Dec	            The abbreviated month name
    // MMMM	    January-December	The full month name
    // D	    1-31	            The day of the month
    // DD	    01-31	            The day of the month, 2-digits
    // H	    0-23	            The hour
    // HH	    00-23	            The hour, 2-digits
    // h	    1-12	            The hour, 12-hour clock
    // hh	    01-12	            The hour, 12-hour clock, 2-digits
    // m	    0-59	            The minute
    // mm	    00-59	            The minute, 2-digits
    // s	    0-59	            The second
    // ss	    00-59	            The second, 2-digits
    // SSS  	000-999	            The millisecond, 3-digits
    // A	    AM PM	            The meridiem
    // AA	    A.M. P.M.	        The meridiem, periods
    // a	    am pm	            The meridiem, lowercase
    // aa	    a.m. p.m.	        The meridiem, lowercase and periods
    // d	    0-6	                The day of the week, with Sunday as 0
    // dd	    S-S	                The min name of the day of the week
    // ddd	    Sun-Sat	            The short name of the day of the week
    // dddd 	Sunday-Saturday	    The name of the day of the week
    if (Boolean(format_string)) {
        return useDateFormat(ref_dynamic_now, format_string as string)
    }
    return useDateFormat(ref_dynamic_now, "YYYY年M月D日 HH:mm:ss")
}

const get_lunar_calendar = (input_day_string?: string | Dayjs) => {
    const day_obj = get_dayjs(input_day_string)
    // console.log(day_obj.year(), day_obj.month(), day_obj.day())
    return calendar.solar2lunar(day_obj.year(), day_obj.month() + 1, day_obj.date())
}


const get_ampm = (input_day_time_string?: string) => {
    const day_obj = get_dayjs(input_day_time_string)
    // 注意，hour函数输出的值是0-23之间的数字
    if (day_obj.hour() <= 1) {
        return "深夜"
    }
    if (day_obj.hour() <= 4) {
        return "凌晨"
    }
    if (day_obj.hour() <= 6) {
        return "早上"
    }
    if (day_obj.hour() <= 9) {
        return "上午"
    }
    if (day_obj.hour() <= 13) {
        return "中午"
    }
    if (day_obj.hour() <= 16) {
        return "下午"
    }
    if (day_obj.hour() <= 19) {
        return "傍晚"
    }
    if (day_obj.hour() <= 22) {
        return "晚上"
    }
    return "深夜"
}

// 给定一个日期，计算日期差
const unit2unit_cn = (gap_unit: string) => {
    if (gap_unit === "day") {
        return "天"
    }
    if (gap_unit === "week") {
        return "周"
    }
    if (gap_unit === "month") {
        return "月"
    }
    if (gap_unit === "year") {
        return "年"
    }
    return ""
}
const get_target_dayjs_by_calc = (base_day: Dayjs, gap_num: number,
                                  gap_unit: string,
                                  is_forward_input = true) => {
    const gap_unit_cn = unit2unit_cn(gap_unit)
    if (gap_num === 0) {
        return {
            type: "get_target_day",
            start_day: base_day,
            start_day_is_today: true,
            gap_num: 0,
            calc_unit: gap_unit,
            is_forward: true,
            target_day: base_day,
            target_day_is_today: true,
            gap_unit_cn
        }
    }

    let target_day: Dayjs
    if (is_forward_input) {
        target_day = base_day.add(gap_num, gap_unit as any)
    } else {
        target_day = base_day.add(gap_num * (-1), gap_unit as any)
    }
    // 算一下起始日期是否是今天
    const today_dayjs = get_dayjs()
    let start_day_is_today = false
    if (today_dayjs.format("YYYYMMDD") === base_day.format("YYYYMMDD")) {
        start_day_is_today = true
    }
    // 算一下目标日期是否是今天
    let target_day_is_today = false
    if (today_dayjs.format("YYYYMMDD") === target_day.format("YYYYMMDD")) {
        target_day_is_today = true
    }
    // 算一下是之前还是之后
    let is_forward = false
    if (base_day.isBefore(target_day)) {
        is_forward = true
    }
    return {
        type: "get_target_day",
        start_day: base_day,
        start_day_is_today,
        gap_num,
        calc_unit: gap_unit,
        is_forward,
        target_day: target_day,
        target_day_is_today,
        gap_unit_cn
    }
}


// 给定两个日期，计算天数差
const get_days_gap_by_calc = (start_day: Dayjs, target_day: Dayjs) => {
    const const_today = get_dayjs()
    const gap_days = target_day.diff(start_day, "day")

    let start_day_is_today = false
    if (start_day.format("YYYYMMDD") === const_today.format("YYYYMMDD")) {
        start_day_is_today = true
    }
    let target_day_is_today = false
    if (target_day.format("YYYYMMDD") === const_today.format("YYYYMMDD")) {
        target_day_is_today = true
    }
    if (gap_days === 0) {
        return {
            type: "get_days_gap",
            start_day: start_day,
            start_day_is_today,
            gap_days: 0,
            is_forward: false,
            target_day: start_day,
            target_day_is_today
        }
    }
    let is_forward = false
    if (gap_days > 0) {
        is_forward = true
    }
    return {
        type: "get_days_gap",
        start_day: start_day,
        start_day_is_today,
        gap_days: Math.abs(gap_days),
        is_forward,
        target_day: target_day,
        target_day_is_today
    }
}
export default {
    ref_dynamic_now, get_ref_dayjs,
    get_day_of_year_percent,
    dayjs_formatted,
    dynamic_date_time_formatted,
    dynamic_date_formatted,
    dynamic_time_formatted,
    get_day_of_month_percent,
    get_week_of_year,
    get_target_dayjs_by_calc,
    days_gap, get_dayjs,
    get_day_in_week, get_lunar_calendar,
    get_ampm, get_days_in_year,
    get_first_sunday_in_year, get_days_gap_by_calc,
}