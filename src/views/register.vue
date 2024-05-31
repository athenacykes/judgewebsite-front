<template>
    <div id="register_main">
        <img class="loginLog" src="../components/static/judgeLogo.png">
        <div class="login_title">加入裁判社区</div>
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

        <div class="count_title">账号</div>
        <el-input placeholder="请输入内容" v-model="input" clearable>
        </el-input>
        <div style="display: flex;">
            <div>
                <div class="count_title" style="width: 50%;">姓氏</div>
                <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
            </div>
            <div style="margin-left: 10%;">
                <div class="count_title" style="width: 50%;">名字</div>
                <el-input placeholder="请输入内容" v-model="input" clearable></el-input>
            </div>
        </div>
        <div class="count_title">邮箱</div>
        <el-input placeholder="请输入邮箱" v-model="input" clearable/>
        <div class="count_title">密码</div>
        <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
        <div class="count_title">确认秘密</div>
        <el-input placeholder="请再次输入密码" v-model="input" show-password></el-input> 
        <div class="loginin">
            <div class="login_text">登陆</div>
        </div>
        <div class="register">
            <div class="register_text">注册</div>
        </div>
    </div>

</template>
<script>
import { mapGetters } from "vuex";

export default {
    name: "Home",
    data() {
        return {
            setting: "设置"
        };
    },
    computed: {
    },
    mounted() {
        // this.$store.commit('set_home_index', 'main');
    }
};
</script>
<style scoped>
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

.avatar {
    width: 178px;
    height: 178px;
    display: block;
}

.register_text {
    font-family: Roboto, Roboto;
    font-weight: 500;
    font-size: 16px;
    color: #3494D2;
    line-height: 26px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    padding-top: 9px;
    text-align: center;
}

.login_text {
    font-family: Roboto, Roboto;
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
    line-height: 26px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    padding-top: 9px;
    text-align: center;
}

.loginin {
    background: #3494D2;
    border-radius: 400px 400px 400px 400px;
    width: 500px;
    height: 40px;
    margin-top: 20px;
}

.register {
    border-radius: 400px 400px 400px 400px;
    border: 1px solid #3494D2;
    width: 500px;
    height: 40px;
    margin-top: 20px;
}

.forgot {
    font-family: Roboto, Roboto;
    font-weight: 400;
    font-size: 14px;
    color: #3494D2;
    line-height: 22px;
    text-align: left;
    font-style: normal;
    text-transform: none;
    float: right;
    margin-top: 4px;
}

#register_main {
    width: 500px;
    /* height: 476px; */
    border-radius: 0px 0px 0px 0px;
    left: 35%;
    position: absolute;
    top: 6%;
    height: 130px;
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
    margin-top: 7px;
}

.login_title {
    font-family: Roboto, Roboto;
    font-weight: 600;
    font-size: 28px;
    color: #384953;
    line-height: 36px;
    text-align: center;
    font-style: normal;
    text-transform: none;
    margin-bottom: 15px;
}

.loginLog {
    width: 101px;
    margin-bottom: 20px;
}

/deep/.el-input__inner {
    background: #ECF0F4;
    border-radius: 8px 8px 8px 8px;
}

/deep/ .el-input--suffix .el-input__inner {
    background: #ECF0F4;
    border-radius: 8px 8px 8px 8px;
}
</style>