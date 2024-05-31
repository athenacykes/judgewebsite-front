<template>
  <div id="home">
    <SidebarComponent />
    
    <SettingComponent id="main" />
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SidebarComponent from "../components/SidebarComponent";
import SettingComponent from "../components/Setting/SettingComponent";

export default {
  name: "Home",
  data() {
    return {
      setting: "设置"
    };
  },
  computed: {
    // ...mapGetters([
    //   'get_home_index',
    // ])
  },
  components: {
    SidebarComponent,
    SettingComponent
  },
  mounted() {
    // this.$store.commit('set_home_index', 'main');
  }
};
</script>
<style scoped>
#home {
  height: 100%;
  width: 100%;
  display: flex;
}
#header {
  float: left;
  width: calc(100% - 180px);
  height: 60px;
  border-bottom: 1px solid #e6e3e3;
  margin-left: 10px;
}
#head_button {
  float: left;
  margin-top: 20px;
  height: 40px;
}
/deep/#head_button span {
  width: 120px;
}
#main {
  float: left;
  width: calc(100% - 150px);
  /* height: calc(100% - 100px); */
}
</style>
