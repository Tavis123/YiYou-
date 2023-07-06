<template>
  <div class="box">
    <div class="left">
      <div class="left-title">在线客服</div>
    </div>
    <div class="right">
      <div class="right-title">帮助中心</div>
      <div class="right-frequentlyAskedQuestions">常见问题
        <ul>
          <li>如何注册一个账号？</li>
          <li>如何购买或出售游戏账号？</li>
          <li>如何确保交易的安全性？</li>
          <li>如何修改账号信息？</li>
          <li>我的账号被盗了，怎么办？</li>
          <li>交易完成后，我何时可以收到付款？</li>
          <li>付款后没收到货？</li>
          <li>商品与描述不符？</li>
          <li>如何验证账号的真实性和完整性？</li>
          <li>我可以取消或退款交易吗？</li>
          <li>我如何更改我的交易方式？</li>
          <li>我可以取消或退款交易吗？</li>
        </ul>
      </div>
      <div class="right-form">提交反馈表单</div>
      <div class="right-safe" @click="goSafeGuide">账号安全指南</div>
      <div class="right-workTime">客服工作时间</div>
      <div class="right-time">
        <div class="right-time-1">早上</div>
        <div class="right-time-2">8：30 - 11：30</div>
        <div class="right-time-3">下午</div>
        <div class="right-time-4">14：00 - 18：00</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "contactCustomerService",
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goSafeGuide() {
      this.$router.push("/personalcenter/contactcustomerservice/safeguide");
    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
};
</script>
<style scoped lang="less">
.box {
  position: relative;
  margin-left: 60px;
  background-color: #F5F5F5;
  height: 700px
}
.left {
  float: left;
  height: 700px;
  width: 1020px;
  background-color: red;
  &-title {
    margin: 25px 50px 0px 60px;
    padding-bottom: 20px;
    color: #000;
    font-size: 24px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    border-bottom: 1px rgb(231, 225, 225) solid;
  }
}
.right {
  float: right;
  height: 700px;
  width: 330px;
  &-title {
    margin: 30px auto 25px;
    text-align: center;
    color: #000;
    font-size: 24px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
  }
  &-frequentlyAskedQuestions {
    color: #6B6A6A;
    font-size: 16px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    margin-left: 45px;
    ul {
      margin-top: 15px;
      li {
        margin-bottom: 7px;
        color: #BEBEBE;
        font-size: 14px;
        font-family: "MicrosoftYaHei";
      }
    }
  }
  &-safe {
    margin-left: 45px;
    margin-bottom: 15px;
    color: #6B6A6A;
    font-size: 16px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
  }
  &-form {
    margin-left: 45px;
    margin-top: 10px;
    margin-bottom: 15px;
    color: #6B6A6A;
    font-size: 16px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
  }
  &-workTime {
    margin-left: 45px;
    margin-bottom: 15px;
    color: #6B6A6A;
    font-size: 16px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
  }
  &-time {
    width: 330px;
    height: 140px;
    flex-shrink: 0;
    color: #053593;
    font-size: 14px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    &-1{
      text-align: center;
      margin-top: 10px;
      margin-bottom: 15px;
    }
    &-2{
      text-align: center;
      margin-bottom: 15px;
    }
    &-3{
      text-align: center;
      margin-bottom: 15px;
    }
    &-4{
      text-align: center;
      margin-bottom: 15px;
    }
  }
}
</style>
