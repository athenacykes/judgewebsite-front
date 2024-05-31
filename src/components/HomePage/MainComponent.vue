<template>
  <div id="main_main" v-loading.fullscreen.lock="loading"> 
    <Main id="content" @loading="get_loading"  />
   

 
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { map, each, sortBy, reverse } from "lodash";
import Main from "../MainContent";

export default {
  data() {
    return { 
      loading: false
    };
  },
  computed: {
    ...mapGetters([])
  },
  components: { 
    Main
  },

  mounted() {},
  methods: {
    get_loading(data) {
      // this.loading = data;
    },
    
  }
};
</script>
<style scoped>
#main_main {
  height: 100%;
  width: 100%;
  overflow-y: scroll;
}
#content {
  width: 78%;
  float: left;
  border-right: #e6e3e3 1px solid;
  padding-bottom: 30px;
  padding-top: 10px;
} 
</style>
