<template>
  <div id="home">
    <SidebarComponent />
    <div id="header">
      <div id="head_button">
        <el-radio-group v-model="user">
          <el-radio-button label="我的收藏"></el-radio-button>
          <el-radio-button label="关注列表"></el-radio-button>
          <el-radio-button label="消息"></el-radio-button>
          <el-radio-button label="需求反馈"></el-radio-button>
          <el-radio-button label="历史记录"></el-radio-button>
        </el-radio-group>
      </div>
    </div>
    <div class="main">
      <router-view v-show="get_home_index == 'main'"/>
      <ContentComponent
        v-if="user == '我的收藏' && get_home_index == 'content'"
        id="main_show_content"
      />
      <ContentComponent
        v-if="user == '历史记录' && get_home_index == 'content'"
        id="main_show_content"
      />
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import SidebarComponent from "../components/SidebarComponent";
import StarComponent from "../components/User/StarComponent";
import MessageComponent from "../components/User/MessageComponent"; 
import ContentComponent from "../components/HomePage/ContentComponent"; 
import HistoryComponent from "../components/User/HistoryComponent";
import FollowComponent from "../components/User/FollowComponent";

export default {
  name: "Home",
  data() {
    return {
      user: "我的收藏"
    };
  },
  computed: {
    ...mapGetters(["get_home_index"])
  },
  components: {
    SidebarComponent,
    StarComponent,
    MessageComponent, 
    ContentComponent,
    HistoryComponent,
    FollowComponent
  },
  watch: {

    user: function(val) {
      let userRouterValue = {
        "我的收藏" : "user",
        "关注列表" : "FollowComponent",
        "消息" : "MessageComponent", 
        "历史记录" : "HistoryComponent",
      }
      this.$router.push(`./${userRouterValue[this.user]}`)
    }
  },
  mounted(){
    let userRouterValue = {
        "user":"我的收藏",
        "FollowComponent":"关注列表",
        "MessageComponent":"消息", 
        "HistoryComponent":"历史记录",
      }
    var routeName = this.$router.currentRoute.name || 'user';
    this.user = userRouterValue[routeName];
  },
  created() {
    this.$store.commit("set_home_index", "main");
    this.$store.commit("set_user_index", this.user);
  }
};
</script>
<style scoped>
#home {
  height: 100%;
  width: 100%;
}
#header {
  float: left;
  width: calc(100% - 180px);
  height: 60px;
  border-bottom: 1px solid #e6e3e3;
}
#head_button {
  float: left;
  margin-top: 20px;
  height: 40px;
}
/deep/#head_button span {
  width: 120px;
}
.main {
  float: left;
  width: calc(100% - 150px);
  height: calc(100% - 70px);
  overflow-y: scroll;
}
</style>
