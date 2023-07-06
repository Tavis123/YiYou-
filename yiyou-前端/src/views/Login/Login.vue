<template>
  <div>
    <div class="left">
      <div class="logo">易游</div>
      <img src="@/assets/image/login.png" alt="">
      <div class="english">Start now <br>
        And experience your own shopping trip
      </div>
    </div>
    <div class="right">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
//import passwordLogin from "@/components/passwordLogin.vue";
export default {
  name: "login",
  data: function() {
    return {

    };
  },
  methods: {

  }
};
</script>
<style scoped lang="less">
@import "@/assets/font/font.css";
.left {
  position: absolute;
  width: 950px;
  height: 780px;
  left: 0px;
  top: 0px;
  background: #EBF5FF;
  border-radius: 0px;
  .logo {
    position: absolute;
    width: 70px;
    height: 40px;
    left: 59px;
    top: 25px;

    font-family: "zihunjingdianrunhei";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 40px;
    /* identical to box height */
    letter-spacing: 0.095em;

    color: #043492;
  }
  img {
    position: absolute;
    width: 510px;
    height: 492px;
    left: 220px;
    top: 121px;
  }
  .english {
    position: absolute;
    width: 521px;
    height: 66px;
    left: 214px;
    top: 617px;

    font-family: "zihuncaishenti_T";
    font-style: normal;
    font-weight: 600;
    font-size: 24px;
    line-height: 29px;
    text-align: center;

    color: #000000;
  }
}
.right {
  position: relative;
  height: 686px;
  margin-left: 950px;
  background-color: #fff;
}
</style>

