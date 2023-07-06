<template>
  <div>
    <div class="left">
      <div class="text1">一站式二手游戏账号交易平台</div>
      <div class="text2">
        <p>安全、便捷、高品质的游戏账号交易</p>
        <p>专业审核确保账号的安全性和可靠性</p>
        <p>客服团队随时为您提供优质服务</p>
      </div>
      <el-button class="jump-button" type="primary" @click="jump"
        >立即使用
      </el-button>
    </div>
    <div class="right">
      <div class="right-box">
        <img src="@/assets/image/home1.png" alt="">
        <div class="right-box-smallbox"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {

    };
  },
  methods: {
    jump() {
      this.$router.push("/shoppingcentre");
    }
  },
};
</script>
<style scoped lang="less">
.left {
  position: absolute;
  width: 980px;
  height: 700px;
  left: 0px;
  top: 80px;
  background: #EBF5FF;
  border-radius: 0px;
  padding-top: 35px;
  margin: 0px auto;
  text-align: left;
  .text1 {
    position: absolute;
    width: 690px;
    height: 61px;
    left: 165px;
    top: 140px;

    font-family: "MicrosoftYaHei";
    font-style: normal;
    font-weight: 700;
    font-size: 46px;
    line-height: 61px;
    /* identical to box height */
    color: #272727;
  }
  .text2 {
    position: absolute;
    width: 580px;
    height: 53px;
    left: 165px;
    top: 225px;

    font-family: "MicrosoftYaHei";
    font-size: 28px;
    line-height: 53px;
    /* identical to box height */
    color: #272727;
  }
  ::v-deep .el-button {
    position: absolute;
    margin-top: 30px;
    height: 78px;
    left: 410px;
    top: 500px;
    width: 238px !important;
    background: #013480;
    border-radius: 50px;
    font-family: "MicrosoftYaHei";
    font-size: 32px;
    font-weight: 650;
    letter-spacing: 0.08em;
  }
}
.right {
  position: relative;
  height: 700px;
  margin-left: 980px;
  background-color: #EBF5FF;
  img {
    position: absolute;
    width: 459px;
    height: 459px;
    left: 70px;
    top: 80px;
    z-index: 100;
  }
  &-box {
    position: absolute;
    width: 600px;
    height: 700px;
    right: 0px;
    top: 0px;

    background: linear-gradient(89.33deg, rgba(221, 237, 251, 0.8) 4.51%, rgba(177, 217, 254, 0.408333) 74.62%, rgba(30, 124, 210, 0) 147.72%);
    border-radius: 0px 0px 455px 455px;
    &-smallbox {
      position: absolute;
      width: 323px;
      height: 649px;
      left: 142px;
      top: 0px;

      background: linear-gradient(88.72deg, #EBF5FF -7.97%, #B0D8FC 98.8%);
      border-radius: 0px 0px 345px 345px;
    }
  }
}
</style>
