<script setup lang="ts">
const font_url = new URL('./font/misans-medium-limitted.ttf', import.meta.url).href;

// 动态注入样式
const style = document.createElement('style');
style.innerHTML = `
  @font-face {
    font-family: "mi-sans-limitted"; /* Project id 2878519 */
    src: url("${font_url}") format('truetype');
  }
`;
document.head.appendChild(style);
</script>

<template>
  <router-view></router-view>
</template>

<style scoped lang="less">
/* scoped style, no need to reference font_url here */
</style>
