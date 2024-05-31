<!--
 * @Descripttion: 
 * @version: 
 * @Author: lichun
 * @Date: 2020-09-25 14:45:30
 * @LastEditors: lichun
 * @LastEditTime: 2022-10-20 08:17:56
-->
<template>
  <div id="app">
    <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" />
  </div>
</template>

<script>
export default {
  name: "App",
  mounted() {},
  created() {
    // this.$globalVariable.setid(this.$cookie.get("url"));
    // console.log(this.$cookie.get("url"));
    // this.$globalVariable.setid(this.$cookie.get("url"));
  }
};
</script>

<style>
@font-face {
  font-family: "siyuan";
  src: url("../static/font/siyuanheitiR.ttf");
}
#app {
  font-family: "siyuan";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
::-webkit-scrollbar {
  display: none;
}
</style>
