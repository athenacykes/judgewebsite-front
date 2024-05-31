<template>
  <div id="content_main">
    <div class="backContent">
      <img style="float:left" src="../static/back.png">
    </div>
    <div class="content">
      <div class="content_title">{{ content.title }}</div>
      <div class="content_block">
        <span style="margin-left: 2%;margin-right: 0.7%;" class="fontSmall">来源</span>
        <div class="content_name">吉米</div>
        <img class="dot" src="../static/Dot.png">
        <div class="fontSmall">发布时间</div>
        <div class="content_time" style="margin-left: 0.7%;">{{ content.time }}</div>
        <img class="dot" src="../static/Dot.png">
        <div class="fontSmall">修改时间</div>
        <div class="content_time" style="margin-left: 0.7%;">{{ content.updatetime }}</div>
      </div>
      <div class="content_main">
        <el-scrollbar ref="scrollMenuRef" class="scrollMenuBox">
          <p v-for="i in titleTotal" :key="i">标题{{ i }}</p>
        </el-scrollbar>
      </div>

      <div class="persona">
        <div class="portrait">
          <img style="float:left" src="../static/Small.png">
          <div class="portrait_block">
            <div class="portrait_id">jimmy</div>
            <div style="display: flex;">
              <img src='../static/portrait_icon.png'>
              <div class="portrait_title" style=" margin-top:4px">认证裁判</div>
            </div>

          </div>
        </div>
        <div class="portrait_title">
          <span style="">发帖数</span>
          <span class="portrait_number">213</span>
        </div>
        <div class="portrait_title" style="    margin-top: 8px;">
          <span style="">注册日期</span>
          <span>2024-5-16</span>
        </div>
        <div class="contact">
          <img class="post_icon" src="../static/contact.png" />
          <div class="contact_text">联系</div>
        </div>
      </div>

      <div class="content_bottom">
        <img class="content_icon" src="../static/custom.png">
        <div style="margin-top: 1%; margin-left: 1%;">3</div>
        <div class="post">
          <img class="post_icon" src="../static/message-edit.png" />
          <div class="post_title">回贴</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import { map, each } from "lodash";
export default {
  data() {
    return {
      titleTotal: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
      content: {
        title: "炉内植入20240528",
        from: "3",
        time: "2020528",
        updatetime: "2020528",
        img: "5",
        content: "6",
        id: "",
        item_name: "7",
        star: "8",
        thumb: "9",
        href: "10",

      },
    };
  },
  computed: {

  },
  watch: {

  },
  created() {
  },

  mounted() { },
  methods: {

  }
};
</script>
<style scoped>
.contact {
  width: 100px;
  height: 44px;
  border-radius: 400px 400px 400px 400px;
  border: 1px solid #3B8BC5;
  margin-left: 4%;
  margin-top: 3%;
  display: flex;
}

.portrait_number {
  font-family: Roboto, Roboto;
  font-weight: 600;
  font-size: 14px;
  color: #3B8BC5;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;

}

.persona {
  width: 256px;
  height: 187px;
  background: #ECF0F4;
  border-radius: 12px 12px 12px 12px;
  position: absolute;
  top: 13%;
  right: 19%;
}

.portrait {
  width: 272px;
  height: 49px;
  border-radius: 0px 0px 0px 0px;
  bottom: 12%;
  margin-left: 14px;
  display: flex;
  margin-left: 20px;
  margin-top: 15px;
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
  margin-top: 18px;
  margin-left: 10px;
}

.content_icon {
  width: 20px;
  height: 20px;
  margin-left: 2%;
  margin-top: 1%;
}

.content_bottom {
  display: flex;
}

.post {
  width: 90px;
  height: 42px;
  background: #3494D2;
  border-radius: 400px 400px 400px 400px;
  display: flex;
  float: right;
  margin-left: 2%;
}

.post_title {
  width: 28px;
  height: 22px;
  font-family: Roboto, Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #FFFFFF;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top: 12px;
  float: left
}

.contact_text {
  font-family: Roboto, Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #3B8BC5;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top: 12px;
  float: left
}

.post_icon {
  /* position: absolute; */
  /* left: 16px;
  top: 10px; */
  margin-top: 10px;
  width: 23px;
  height: 23px;
  margin-left: 17px;
  margin-right: 5px;
}

.content_bottom {
  display: flex;
}

.content_main {
  width: 70%;
  display: flex
}

.content_time {
  font-family: Roboto, Roboto;
  font-weight: 400;
  font-size: 14px;
  color: #8F97A6;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.content_name {
  font-family: Roboto, Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #3B8BC5;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.fontSmall {
  font-family: Roboto, Roboto;
  font-weight: 500;
  font-size: 14px;
  color: #616161;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.backContent {
  height: 4%;
  width: 60%;
  margin-top: 1.2%;
  margin-left: 1%;
}

.content {
  height: 85%;
  margin-top: 3%;
  margin-left: 3%;
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #E8E8E8;
}

.content_title {
  font-family: Roboto, Roboto;
  font-weight: 600;
  font-size: 28px;
  color: #384953;
  line-height: 36px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-top: 3%;
  margin-left: 2%;

}

.content_block {
  display: flex;
  margin-top: 1.5%;
}

.dot {
  width: 6px;
  height: 6px;
  /* background: #8F97A6; */
  /* border-radius: 0px 0px 0px 0px; */
  margin-top: 7px;
  margin-left: 26px;
  margin-right: 3px;
}

/*el-scrollbar 必须指定高度*/
.scrollMenuBox {
  width: 100%;
  /* height: 5%; */
  height: 650px;
}

/* /deep/ .el-scrollbar__wrap {
    overflow-y: hidden;
} */
/* 隐藏Element UI的滚动条 */
/deep/ .el-scrollbar__bar {
  display: none;
}

/* 如果你只想要隐藏垂直或水平滚动条，可以分别使用以下CSS */
/deep/ .el-scrollbar__bar.is-vertical {
  display: none;
}

/deep/ .el-scrollbar__bar.is-horizontal {
  display: none;
}
</style>