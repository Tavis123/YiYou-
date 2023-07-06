<template>
  <div>
    <el-form 
      class="login-container"
      :model="loginForm"
      label-position="top"
      :rules="loginRules"
      ref="loginForm"
      :hide-required-asterisk="true"
    >
      <h1 class="title">用户登录</h1>
      <el-link type="primary" @click="toPasswordLogin" class="passwordLogin"
        >使用密码登录
      </el-link>
      <el-form-item class="account" label="手机号" prop="userId">
        <el-col :span="24">
          <el-input
            class="account-input"
            type="text"
            placeholder="用户账号"
            v-model.number="loginForm.userId"
            autocomplete="off"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item class="code" label="验证码" prop="userCode">
        <el-col :span="24">
          <el-input
            class="code-input"
            type="text"
            placeholder="验证码"
            v-model="loginForm.userCode"
            autocomplete="off"
          ></el-input>
        </el-col>
        <el-button
          @click.native.prevent="bindforgetSendCode"
          class="bind_code_gain"
          :disabled="disabled"
          >{{ btnText }}</el-button
        >
      </el-form-item>
      <el-form-item class="login">
        <el-button class="login-button" type="primary" @click="doLogin" style="width: 100%;"
          >登录</el-button
        >
      </el-form-item>
      <el-row style="text-align: center;margin-top: -10px;">
        <el-checkbox size="medium" v-model="checked" class="saveSettings">保存登陆设置</el-checkbox>
      </el-row>
      <el-row style="text-align: center;margin-top: -10px;">
        <el-link type="primary" @click="toRegister" class="goRegister"
          >还没有账号？点击此处注册
        </el-link>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import qs from "qs";
import request from "@/utils/request.js";
export default {
  name: "codeLogin",
  data() {
    return {
      loginForm: {
        userId: "",
        userCode: ""
      },
      checked: false,
      btnText: "发送验证码",
      disabled: false,
      loginRules: {
        userId: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { pattern: /^\d{11}$/, message: "请输入11个数字", trigger: "blur" }
        ],
        userCode: [
          { required: true, message: "请输入短信验证码", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    async doLogin() {
      let userId = this.userId;
      let userCode = this.userCode;
      let params = {
        userId: userId,
        userCode: userCode
      };
      let str = qs.stringify(params);
      await request
        .post("/user/login", str)
        .then(res => {
          console.log(res);
          if (res.data.code == 200) {
            localStorage.setItem("tag", res.data.data.tag.toString());
            localStorage.setItem("satoken", res.data.data.tokenValue);
            localStorage.setItem("loginId", res.data.data.loginId);
            localStorage.setItem("isLogin", true);
            this.$message({
              message: "登陆成功",
              type: "success"
            });
            if (res.data.data.tag === "0") {
              this.$router.push({
                path: "/"
              });
            } else {
              this.$router.push("/admin");
            }
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          this.$message({
            message: "登陆失败 " + err,
            type: "error"
          });
        });
    },
    toRegister() {
      this.$router.push("/register");
    },
    toPasswordLogin() {
      this.$router.push("/passwordlogin");
    },
    bindforgetSendCode() {

    }
  },
};
</script>
<style scoped lang="less">
.login-container {
  padding-top: 100px;
  margin: 0px auto;
  width: 500px;
  text-align: left;
}
.passwordLogin {
  position: absolute;
  width: 140px;
  height: 26px;
  left: 437px;
  top: 196px;
  font-family: "MicrosoftYaHei" !important;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;

  color: #2B68C2 !important;
}
.title {
  margin: 0px auto 50px auto;
  text-align: center;
  color: black;
  font-family: "MicrosoftYaHei" !important;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  letter-spacing: 0.08em;
}
.account {
  height: 100px;
}
.code {
  height: 100px;
  margin-top: 10px;
}
.bind_code_gain {
  position: absolute;
  top: calc(50% - 10px);
  right: 20px;
  font-family: "MicrosoftYaHei";
  line-height: 18px;
  cursor: pointer;
  padding: 0 !important;
  background-color: #F7F4F4 !important;
  border: none !important;
  font-weight: 400;
  font-size: 20px;

  color: #2B68C2;
}
.login {
  margin-top: 50px;
  height: 100px;
  &-button {
    position: relative;
    height: 60px;
    background-color: #04338F;
    border-radius: 10px;
    font-size: 20px;
    font-weight: 600;
    letter-spacing: 0.08em;
  }
}
::v-deep .el-link--inner {
  font-family: "MicrosoftYaHei" !important;
}
.el-link {
  color: #2B68C2;
}
.el-link.is-underline:hover:after {
  border-bottom: none;
}
.saveSettings {
  float: left;
  font-size: 18px !important;
}
.goRegister {
  position: absolute;
  width: 210px;
  height: 21px;
  left: 152px;
  top: 60px;

  font-family: "MicrosoftYaHei";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 21px;

  color: #3E68BB !important;
}
::v-deep .el-checkbox__label {
  font-size: 18px;
}
::v-deep .el-checkbox__input{
  transform: scale(1.5);
  margin-bottom: 3px;
}
::v-deep .el-form-item__label {
  padding-bottom: 12px;
  font-family: "MicrosoftYaHei" !important;
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 26px;
}
::v-deep .el-input__inner {
  width: 500px;
  height: 63px;
  background: #F7F4F4;
  font-size: 20px;
  border-radius: 9px;
}
</style>
