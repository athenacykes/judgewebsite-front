import Vue from "vue";
import Vuex from "vuex";
import home from "./common/home"; 
import setting from "./common/setting";
import user from "./common/user";
import follow from "./common/follow";


// import label from './common/label';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    home, 
    setting,
    user,follow
  }
});
export default store;
