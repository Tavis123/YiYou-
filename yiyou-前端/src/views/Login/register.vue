<template>
  <div>
    <el-form 
      class="register-container"
      :model="registerForm"
      label-position="top"
      :rules="registerRules"
      ref="registerForm"
      :hide-required-asterisk="true"
    >
      <h1 class="title">用户注册</h1>
      <el-form-item class="account" label="手机号" prop="userId">
        <el-col :span="24">
          <el-input
            class="account-input"
            type="text"
            placeholder="用户账号"
            v-model.number="registerForm.userId"
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
            v-model="registerForm.userCode"
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
      <el-form-item class="password" label="设置密码" prop="userPassword">
        <el-col :span="24">
          <el-input
            class="password-input"
            type="password"
            placeholder="用户密码"
            v-model.number="registerForm.userPassword"
            autocomplete="off"
          ></el-input>
        </el-col>
      </el-form-item>
      <el-form-item class="register">
        <el-button class="register-button" type="primary" @click="doRegister" style="width: 100%;"
          >完成</el-button
        >
      </el-form-item>
      <el-row style="text-align: center;margin-top: -10px;">
        <el-link type="primary" @click="toLogin" class="goLogin"
          >已有账号？点击此处登录
        </el-link>
      </el-row>
    </el-form>
  </div>
</template>

<script>
import request from "@/utils/request.js";
export default {
  name: "register",
  data() {
    return {
      registerForm: {
        userId: "",
        userCode: "",
        userPassword: ""
      },
      checked: false,
      btnText: "发送验证码",
      disabled: false,
      registerRules: {
        userId: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { pattern: /^\d{11}$/, message: "请输入11个数字", trigger: "blur" }
        ],
        userCode: [
          { required: true, message: "请输入短信验证码", trigger: "blur" },
        ],
        userPassword: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ]
      }
    };
  },
  methods: {
    async doRegister() {
      if (this.form.userPassword !== this.form.userPassword1) {
        this.$message({
          message: "两次输入的密码不一致",
          type: "error"
        });
        return false;
      }
      let params = {
        userId: this.form.userId,
        userName: this.form.userName,
        userPassword: this.form.userPassword1,
        userContactInformation: this.form.userContactInformation.toString(),
        userRight: this.form.userRight,
        email: this.form.userEmail
      };
      await request
        .post("/user/enroll", params)
        .then(res => {
          if (res.data.code == 1) {
            this.$message({
              message: res.data.msg,
              type: "success"
            });
            this.$router.push("/user");
          } else {
            this.$message({
              message: res.data.msg,
              type: "error"
            });
          }
        })
        .catch(err => {
          this.$message({
            message: "注册失败 " + err,
            type: "error"
          });
        });
    },
    toLogin() {
      this.$router.push("/login");
    },
  },
};
</script>
<style scoped lang="less">
.register-container {
  padding-top: 100px;
  margin: 0px auto;
  width: 500px;
  text-align: left;
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
  font-size: 20px;
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
.register {
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
.goLogin {
  position: absolute;
  width: 210px;
  height: 21px;
  left: 152px;
  top: 0px;

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
