<template>
  <div class="box">
    <div class="personalData">
      <div class="personalData-avatar">
        <el-avatar :size="82" :src="avatarUrl"></el-avatar>
        <el-link type="primary" @click="editAvatar" class="personalData-avatar-edit"
          >修改头像
        </el-link>
      </div>
      <div class="personalData-userName">
        吃萝卜的卷心菜
      </div>
      <div class="personalData-authentication">
        已手机认证
      </div>
    </div>
    <div class="editForm">
      <el-form 
        class="editForm-container"
        label-position="right"
        label-width="170px"
        :model="editForm"
        :rules="editRules"
        ref="editForm"
        :hide-required-asterisk="true"
      >
        <el-link type="primary" @click="edit" class="editForm-edit" v-if="showButton"
          >编辑信息
        </el-link>
        <el-button class="editForm-button" type="primary" @click="saveEdit" v-else
          >保存修改
        </el-button>
        <el-form-item class="name" label="用户名" prop="userName">
          <el-col :span="22">
            <el-input
              class="name-input"
              type="text"
              v-model="editForm.userName"
              :disabled="isInput"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item class="nickname" label="昵称" prop="nickName">
          <el-col :span="22">
            <el-input
              class="nickName-input"
              type="text"
              v-model="editForm.nickName"
              :disabled="isInput"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item class="realAuthentication" label="实名认证" prop="realAuthentication">
          <el-col :span="22">
            <el-input
              class="realAuthentication-input"
              type="text"
              v-model="editForm.realAuthentication"
              :disabled="isInput"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item class="email" label="绑定邮箱" prop="userEmail">
          <el-col :span="22">
            <el-input
              class="email-input"
              type="text"
              v-model="editForm.userEmail"
              :disabled="isInput"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item class="phone" label="绑定电话" prop="userPhone">
          <el-col :span="22">
            <el-input
              class="phone-input"
              type="text"
              v-model.number="editForm.userPhone"
              :disabled="isInput"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item class="code" label="验证码" prop="code">
          <el-col :span="22">
            <el-input
              class="code-input"
              type="text"
              v-model.number="editForm.code"
              :disabled="isInput"
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
        <el-form-item class="password" label="新密码" prop="password">
          <el-col :span="22">
            <el-input
              class="password-input"
              type="password"
              v-model="editForm.password"
              :disabled="isInput"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-form-item>
        <el-form-item class="rePassword" label="请再次输入密码" prop="rePassword">
          <el-col :span="22">
            <el-input
              class="rePassword-input"
              type="password"
              v-model="editForm.rePassword"
              :disabled="isInput"
              autocomplete="off"
            ></el-input>
          </el-col>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import avatarurl from "@/assets/image/avatar.png"
export default {
  name: "editPersonalData",
  data() {
    var checkEmail = (rule, value, cb) => {
      //验证邮箱的正则表达式
      const regEmail = /^([a-zA-Z]|[0-9])(\w|-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
      if (regEmail.test(value)) {
        //合法的邮箱
        return cb();
      }
      cb(new Error("请输入合法的邮箱"));
    };
    var validatePass2 = (rule, value, cb) => {
      if (value === "") {
        cb(new Error("请再次输入密码"))
      } else if (value !== this.editForm.password) {
         cb(new Error('两次输入密码不一致!'))
      } else {
        return cb();
      }
    }
    return {
      avatarUrl: avatarurl,
      btnText: "获取手机验证码",
      disabled: true,
      isInput: true,
      editForm: {
        userName: "ss",
        nickName: "",
        userEmail: "",
        userPhone: "",
        realAuthentication: "",
        code: "",
        password: "",
        rePassword: ""
      },
      editRules: {
        userPhone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { pattern: /^\d{11}$/, message: "请输入11个数字", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入短信验证码", trigger: "blur" },
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
        ],
        rePassword: [
          { required: true, validator: validatePass2, trigger: "blur" }
        ],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        nickName: [
          { required: true, message: "请输入昵称", trigger: "blur" },
        ],
        userEmail:[
          { required: true, trigger: "blur", validator: checkEmail }
        ],
        realAuthentication: [
          { required: true, message: "请输入真实姓名", trigger: "blur" },
        ],
      },
      showButton: true
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    editAvatar() {

    },
    edit() {
      this.showButton = false;
      this.disabled = false;
      this.isInput = false;
      var input__inner = document.getElementsByClassName("el-input__inner");
      for(var i = 0; i < input__inner.length; i++) {
        input__inner[i].style.color = "#053593";
      }
      var button_inner = document.getElementsByClassName("bind_code_gain");
      button_inner[0].style.color = "#053593";
    },
    bindforgetSendCode() {

    },
    saveEdit() {
      this.showButton = true;
      this.disabled = true;
      this.isInput = true;
      var input__inner = document.getElementsByClassName("el-input__inner");
      console.log(input__inner);
      for(var i = 0; i < input__inner.length; i++) {
        input__inner[i].style.color = "#C1C1C1";
      }
      var button_inner = document.getElementsByClassName("bind_code_gain");
      button_inner[0].style.color = "#C1C1C1";
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
};
</script>
<style scoped lang="less">
.box {
  position: relative;
  margin-left: 70px;
  background-color: #F5F5F5;
  height: 700px
}
.personalData {
  position: absolute;
  width: 600px;
  height: 130px;
  background-color: #F5F5F5;
  &-avatar {
    float: left;
    height: 82px;
    margin: 18px auto;
    &-edit {
      position: absolute;
      left: 15px;
      top: 105px;
      color: #2B68C2;
      font-family: "MicrosoftYaHei";
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
    }
  }
  &-userName {
    position: absolute;
    width: 190px;
    height: 32px;
    left: 110px;
    top: 25px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    /* identical to box height */
    color: #053593;
  }
  &-authentication {
    position: absolute;
    width: 93px;
    height: 25px;
    left: 110px;
    top: 72px;

    background: #043492;
    border-radius: 12px;
    font-family: "MicrosoftYaHei";
    font-style: normal;
    font-weight: 700;
    font-size: 10px;
    text-align: center;
    line-height: 25px;
    color: #FFFFFF;
  }
}
.el-link.is-underline:hover:after {
  border-bottom: none;
  color: #053593;
}
.editForm {
  position: absolute;
  top: 130px;
  height: 570px;
  width: 1100px;
  padding-left: 20px;
  padding-top: 25px;
  &-edit {
    position: absolute;
    top: -10px;
    right: 75px;
    font-family: "MicrosoftYaHei";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    color: #2B68C2;
  }
  &-button {
    position: absolute;
    top: -30px;
    right: 75px;
    width: 104px;
    height: 38px;
    background: #043492;
    border-radius: 19px;
  }
}
::v-deep .el-form-item__label {
  font-family: "MicrosoftYaHei";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  color: #000000;
  padding-right: 36px;
}
::v-deep .el-input.is-disabled .el-input__inner {
  background: #EBF5FF;
}
::v-deep .el-input__inner {
  background: #EBF5FF;
  height: 40px;
  border-radius: 20px;
  color: #C1C1C1;
  padding-left: 39px;
  font-size: 16px;
}
.bind_code_gain {
  position: absolute;
  top: calc(50% - 10px);
  right: 100px;
  font-size: 16px;
  font-family: "MicrosoftYaHei";
  line-height: 18px !important;
  cursor: pointer;
  padding: 0 !important;
  background-color: #EBF5FF;
  border: none !important;
  font-weight: 400;

  color: #C1C1C1;
}
</style>
