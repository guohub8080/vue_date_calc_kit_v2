<script setup lang="ts">
import {computed, reactive, ref, watch} from "vue";
const font_url = new URL('./font/misans-medium-limitted.ttf', import.meta.url)
</script>

<template>
    <router-view></router-view>
</template>


<style scoped lang="less">
@font-face {
  font-family: "mi-sans-limitted"; /* Project id 2878519 */
  src: url(v-bind(font_url)) format('truetype');
}
</style>