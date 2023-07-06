<template>
  <div class="header">
    <h1 class="logo">
      易游
    </h1>
    <ul class="navbar">
      <router-link to="/home/homepage" exact v-slot="{ href, navigate, isActive }" custom>
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">首页</a>
        </li>
      </router-link>
      <router-link to="/shoppingcentre" v-slot="{ href, navigate, isActive }" custom>
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">商城</a>
        </li>
      </router-link>
      <router-link to="/personalcenter" v-slot="{ href, navigate, isActive }" custom>
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">个人中心</a>
        </li>
      </router-link>
      <router-link to="/contactus" v-slot="{ href, navigate, isActive }" custom>
        <li class="navbar-item" :class="{ active: isActive }">
          <a :href="href" @click="navigate">联系我们</a>
        </li>
      </router-link>
    </ul>
    <div class="user">
      <div class="login" v-if="!state">
        <router-link to="/login">
          <span class="login__text">登录</span>
        </router-link>
      </div>

      <div class="avatar" v-else>
        <el-avatar :size="54" :src="avatarUrl"></el-avatar>
      </div>
    </div>
  </div>
</template>
<script>
import avatarurl from "@/assets/image/avatar.png"
export default {
  name: "Header",
  data() {
    return {
      loginId: localStorage.getItem("loginId"),
      state: false,
      avatarUrl: avatarurl
    };
  },
  created() {
    this.reviseState();
  },
  beforeUpdate() {
    this.reviseState();
  },
  methods: {
    reviseState() {
      if (localStorage.getItem("isLogin")) {
        this.state = true;
      }
    },
    handleLogout() {
      localStorage.removeItem("isLogin");
      // 1. 清空 token
      localStorage.removeItem("satoken");
      localStorage.removeItem("loginId");
      localStorage.removeItem("tag");
      // 2. 跳转到主页面
      this.$router.push("/");
      this.state = false;
    },
  }
};
</script>
<style lang="less" scoped>
.header {
  position: relative;
  display: flex;
  height: 80px;
  align-items: center;
  padding: 10px 70px;
  min-width: 900px;
  background-color: #E2F0FD;
  &.main-color {
    background-color: rgba(255, 255, 255, 0);
    .navbar-item {
      &:hover {
        color: #053593;
      }
    }
    .login-text {
      color: #3370ff;
      padding: 5px;
    }
  }
}
.logo {
  width: 300px;
  height: 100%;
  line-height: 57px;
  color: #053593;
}
.navbar {
  margin-left: auto;
  margin-right: 20px;
  display: flex;
  &-item {
    padding: 24px 0px;
    margin: 0 75px;
    font-size: 22px;
    width: 90px;
    height: 80px;
    text-align: center;
    &.active {
      border-bottom: 4px solid;
      color: #053593;
    }
  }
}
.user {
  margin-left: 40px;
  margin-right: 15px;
  position: relative;
  width: 85px;
  height: 50px;
  line-height: 50px;
  font-size: 22px;
  color: #fff;
  .login {
    border-radius: 18px;
    background-color: #053593;
    padding: 0px 15px;
    text-align: center;
  }
}
.avatar {
  height: 60px;
}
</style>
