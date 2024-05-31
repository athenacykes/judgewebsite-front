<template>
  <div id="sidebar">
    <img class="userhead" src="./static/judgeLogo.png" />
    <p id="username">
      {{ get_username }}
    </p>
    <div id="user_button">
      <div class="small_pic" @click="goto('/main')">
        <img class="small_pic_home" title="主页" src="./static/home.png"></img>
        <div class="titleName"> 主页</div>
      </div>
      <div class="small_pic" @click="goto('/home')">
        <img class="small_pic_home" title="裁判社区" src="./static/discuss.png"></img>
        <div class="titleName"> 裁判社区</div>
      </div>
      <div class="small_pic" @click="goto('/analysis')">
        <img class="small_pic_home" title="寻找裁判" src="./static/find.png"></img>
        <div class="titleName"> 寻找裁判</div>
      </div>
      <div class="small_pic" @click="goto('/user')">
        <img class="small_pic_home" title="比赛申请" src="./static/application.png"></img>
        <div class="titleName"> 比赛申请</div>
      </div>
      <div class="small_pic">
        <img class="small_pic_home" title="消息" src="./static/message.png"></img>
        <div class="titleName"> 消息</div>
      </div>
    </div>
    <div class="portrait"  @click="goto('/setting')">
      <img style="float:left" src="./static/Small.png">
      <div class="portrait_block">
        <div class="portrait_id">jimmy</div>
        <div style="display: flex;">
          <img src='./static/portrait_icon.png'>
          <div class="portrait_title">认证裁判</div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["get_username", "get_user_head", "get_home_index"])
  },
  methods: {
    goto(p) {
      this.$router.push({ path: p });
      if (p == "/home") {
        this.$store.commit("set_home_index", "main");
      }
      if (p == "/user") {
        this.$store.commit("set_user_index", "main");
      }
    }
  }
};
</script>
<style scoped>
#sidebar {
  width: 300px;
  height: 845px;
  background: #DFE9F4;
  border-radius: 29px 29px 29px 29px;
  margin-top: 32px;
  margin-left: 120px;
}

.userhead {
  border-radius: 30px;
  width: 60px;
  height: 60px;
  float: left;
  margin-left: 20px;
  margin-top: 30px;

}

#username {
  float: left;
  text-align: center;
  width: 80%;
  margin-left: 10%;
  word-wrap: break-word;
  margin-top: 20px;
  font-size: 14px;
  color: white;
}

#user_button {
  /* position: fixed; */
  float: left;
  top: 137px;
  height: 450px;
  width: 300px;
  display: grid;
}

.small_pic {
  /* width: 40px; */
  height: 40px;
  float: left;
  text-align: center;
  margin: 25px 30px 25px 30px;
  cursor: pointer;
}

.small_pic i {
  font-size: 40px;
  color: white;
}

.small_pic_home {
  /* position: absolute; */
  left: 3.75%;
  right: 3.74%;
  top: 7.4%;
  bottom: 8.22%;
  margin-left: 24px;
  position: relative;
  left: 0px;
  float: left;

}

.titleName {
  margin-top: 10px;
  margin-left: 80px;
  /* width: 38px; */
  height: 23px;
  font-family: Inter, Inter;
  font-weight: bold;
  font-size: 19px;
  color: #0F1419;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.portrait {
  width: 272px;
  height: 49px;
  border-radius: 0px 0px 0px 0px;
  position: absolute;
  bottom: 12%;
  margin-left: 14px;
  display: flex;
  margin-left: 20px;
}

.portrait_block {
  float: left;
  margin-left: 13px;
}

.portrait_id {
  font-family: Roboto, Roboto;
  font-weight: 500;
  font-size: 16px;
  color: #0F1419;
  line-height: 26px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.portrait_title {
  font-family: Roboto, Roboto;
  font-weight: 500;
  font-size: 12px;
  color: #8F97A6;
  line-height: 18px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top: 4px
}
</style>
