<template>
  <div>
    <div id="main_setting_main">
      <div class="title">个人资料</div>
      <div class="mainContent">
        <div class="setting_block">
          <div style="width: 100%;height: 178px;display: grid;">
            <div style="float:left;text-align: left;" class="count_title">头像</div>
            <div style="float:left">
              <el-upload class="avatar-uploader" action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false" :on-success="handleAvatarSuccess" :before-upload="beforeAvatarUpload">
                <img v-if="imageUrl" :src="imageUrl" class="avatar">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>
          </div>
        </div>
        <div class="line"></div>
        <div class="setting_block_flex">
          <img src="../static/user-square.png">
          <div class="mid_font" style="    margin-left: 1.5%;">个人信息</div>
        </div>
        <div class="setting_block_flex">
          <div class="input_block" style="margin-left: 0%;">
            <div class="count_title" style="width: 50%;">
              姓氏
              <img class="importent" src="../static/point.png">
            </div>
            <el-input placeholder="姓" v-model="input" clearable></el-input>
          </div>
          <div class="input_block">
            <div class="count_title" style="width: 50%;">
              名字
              <img class="importent" src="../static/point.png">
            </div>
            <el-input placeholder="名" v-model="input" clearable></el-input>
          </div>
          <div class="input_block">
            <div class="count_title" style="width: 50%;">称呼
              <img class="importent" src="../static/point.png">
            </div>
            <el-input placeholder="称呼" v-model="input" clearable></el-input>
          </div>
        </div>
        <div class="setting_block">
          <div class="count_title" style="width: 50%;">
            简介/介绍文本
          </div>
          <el-input type="textarea" :rows="3" maxlength="100" placeholder="请输入内容" v-model="textarea">
          </el-input>
        </div>
        <div class="line"></div>
        <div class="setting_block_flex">
          <img class="addresicon" src="../static/personalcard.png">
          <div class="count_title">个人信息</div>
        </div>
        <div class="setting_block">
          <div class="count_title" style="width: 50%;">
            街道
          </div>
          <el-input class="lineinput" placeholder="街道" v-model="input" clearable></el-input>
        </div>
        <div class="setting_block">
          <div class="count_title" style="width: 50%;">
            电话号码
          </div>
          <el-input class="lineinput" placeholder="电话号码" v-model="input" clearable></el-input>
        </div>
        <div class="setting_block">
          <div class="count_title" style="width: 50%;">
            个人微信
          </div>
          <el-input class="lineinput" placeholder="个人微信" v-model="input" clearable></el-input>
        </div>
        <div class="line"></div>
        <div class="setting_block_flex">
          <img class="addresicon" src="../static/lock.png">
          <div class="count_title">地址详情</div>
        </div>
        <div class="setting_block_flex">
          <div class="input_block" style="margin-left: 0%;width: 38%;">
            <div class="count_title" style="width: 50%;">
              电子邮件地址
              <img class="importent" src="../static/point.png">
            </div>
            <el-input placeholder="电子邮件地址" st v-model="input" clearable></el-input>
          </div>
          <div style="width: 38%;" class="input_block">
            <div class="count_title" style="width: 50%;">
              用户名
              <img class="importent" src="../static/point.png">
            </div>
            <el-input placeholder="用户名" v-model="input" clearable></el-input>
          </div>
        </div>
        <div class="setting_block">
          <div class="count_title" style="width: 50%;">
            新密码
          </div>
          <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
        </div>
        <div class="setting_block">
          <div class="count_title" style="width: 50%;">
            重复密码
          </div>
          <el-input placeholder="请再次输入密码" v-model="input" show-password></el-input>
        </div>
        <div class="line"></div>
        <div class="setting_block_flex">
          <img class="addresicon" src="../static/message.png">
          <div class="count_title">通知</div>
        </div>
        <div class="setting_block">
          <el-checkbox-group v-model="choice" :min="0" :max="2">
            <el-checkbox v-for="kind in choiceOptions" :label="kind" :key="kind">{{ kind }}</el-checkbox>
          </el-checkbox-group>
        </div>
        <div class="line"></div>

        <div class="save"> <el-button type="primary" round>保存</el-button></div>

      </div>
    </div>
  </div>
</template>
<script>
import { map } from "lodash";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      choice: [],
      choiceOptions: ['接受私信通知', '接受邮件通知']
    };
  },
  computed: {
  },
  created() {

  },
  mounted() { },
  methods: {

  }
};
</script>
<style scoped>
.save{
  text-align: right;    margin-right: 50px;
    margin-bottom: 20px;
}
.setting_block_flex {
  display: flex;
  margin-left: 2%;
}

.lineinput {
  width: 95%;
  float: left;
}

.importent {
  width: 7px;
  height: 7px;
  margin-top: 5px;
  margin-left: 4px;
}

.addresicon {
  width: 24px;
  height: 24px;
  margin-top: 11px;
  margin-right: 10px
}

/deep/.el-input__inner {
  background: #ECF0F4;
  border-radius: 8px 8px 8px 8px;

}

/deep/ .el-input--suffix .el-input__inner {
  background: #ECF0F4;
  border-radius: 8px 8px 8px 8px;
}

/deep/ .el-textarea {
  width: 887px;
  height: 106px;
  border-radius: 8px 8px 8px 8px;
  margin-left: -5%;
}

/deep/ .el-checkbox:last-of-type {
  margin-right: 0;
}

/deep/ .el-textarea__inner {
  width: 887px;
  height: 106px;
  background: #ECF0F4;
  border-radius: 8px 8px 8px 8px;
}

/deep/ .el-checkbox:last-of-type {
  margin-right: 28px;
}

.input_block {
  margin-left: 4%;
  width: 28%;
  /* display: flex; */
}

.line {
  width: 887px;
  height: 0px;
  border: 1px solid #E8E8E8;
  margin-left: 3%;
  margin-bottom: 2%;
  margin-top: 3%;
}

.setting_block {
  display: flow-root;
  margin-left: 2%;
}

.mid_font {
  font-family: Roboto, Roboto;
  font-weight: 600;
  font-size: 20px;
  color: #384953;
  line-height: 28px;
  text-align: left;
  font-style: normal;
  text-transform: none;
}

.avatar {
  width: 178px;
  height: 178px;
  display: block;
}

.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #E8E8E8;
}

.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}

.avatar-uploader {
  float: left;
}

.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 108px;
  height: 108px;
  line-height: 108px;
  text-align: center;
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #E8E8E8;
}

.count_title {
  font-family: Roboto, Roboto;
  font-weight: 600;
  font-size: 14px;
  color: #384953;
  line-height: 22px;
  text-align: left;
  font-style: normal;
  text-transform: none;
  margin-bottom: 4px;
  margin-top: 16px;
  display: flex;
}

.title {
  font-family: Roboto, Roboto;
  font-weight: 600;
  font-size: 28px;
  color: #384953;
  line-height: 36px;
  text-align: left;
  font-style: normal;
  text-transform: none;

}

#main_setting_main {
  margin-top: 2%;
  margin-left: 1%;
}

.mainContent {
  border-radius: 16px 16px 16px 16px;
  border: 1px solid #E8E8E8;
  width: 65%;
  margin-top: 1%;
}
</style>