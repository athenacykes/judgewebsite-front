<template>
  <div id="home">
    <div style="height: 100%;float: left;position: absolute;left: 0px;">

      <SidebarComponent />
    </div> 
    <SearchComponent />
    <div id="main">
      <MainComponent v-show="get_home_index === 'main'" />
      <ContentComponent v-if="get_home_index === 'content'" /> 
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SidebarComponent from "../components/SidebarComponent";
import SearchComponent from "../components/SearchComponent";
import MainComponent from "../components/HomePage/MainComponent";
import ContentComponent from "../components/HomePage/ContentComponent"; 

export default {
  name: "Home",
  data() {
    return {
      get_home_index:'main'
    };
  },
  // computed: {
  //   ...mapGetters(["get_home_index"])
  // },
  components: {
    SidebarComponent,
    SearchComponent,
    MainComponent,
    ContentComponent, 
  },
  mounted() {

  },
  watch: {

  }
};
</script>
<style scoped>
#home {
  height: 100%;
}

#main {
  position: fixed;
  left: 6%;
  top: 18%;
  width: 60%;
   margin-left: 20%;
}
</style>
