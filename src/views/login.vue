<template>
    <div id="login">
        <img class="loginLog" src="../components/static/judgeLogo.png">
        <div class="login_title">欢迎回来</div>
        <div class="count_title">账号</div>
        <el-input placeholder="请输入内容" v-model="input" clearable>
        </el-input>
        <div class="count_title">密码</div>
        <el-input placeholder="请输入密码" v-model="input" show-password></el-input>
        <div class="forgot">忘记密码</div>
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
    height: 50px;
    margin-top: 50px;
}

.register {
    border-radius: 400px 400px 400px 400px;
    border: 1px solid #3494D2;
    width: 500px;
    height: 50px;
    margin-top: 30px;
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

#login {
    width: 500px;
    height: 476px;
    border-radius: 0px 0px 0px 0px;
    left: 35%;
    position: absolute;
    top: 24%;
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