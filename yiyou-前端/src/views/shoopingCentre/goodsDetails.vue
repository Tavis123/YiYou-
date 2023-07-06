<template>
  <div>
    <div class="head">
      <img src="../../assets/image/糖果 1.png" alt="" class="head-avatar">
      <div class="head-name">{{ "糖格格的游戏屋" }}</div>
      <div class="head-assessment">
        <div class="head-assessment-scores">商品描述 {{4.6}}</div>
        <div class="head-assessment-scores">信用评分 {{4.6}}</div>
        <div class="head-assessment-scores">卖家服务 {{4.6}}</div>
      </div>
      <div class="head-search">
        <el-input
          style="width:180px;line-height: 80px;margin-right: 39px;margin-left:30px;"
          placeholder="搜索商品"
          prefix-icon="el-icon-search"
          size="medium"
          v-model="searchInput">
        </el-input>
        <div class="head-yiyou">搜易游</div>
        <div class="head-store">搜本店</div>
      </div>
    </div>
    <div class="body">
      <div class="body-main">
        <div class="body-main-left">
          <img src="" alt="" class="body-main-left-top">
          <img src="../../assets/image/Rectangle 79.png" alt="" class="body-main-left-bottom">
          <img src="../../assets/image/Rectangle 80.png" alt="" class="body-main-left-bottom">
          <img src="../../assets/image/Rectangle 80.png" alt="" class="body-main-left-bottom">
        </div>
        <div class="body-main-right">
          <div class="body-main-right-title">{{ "王者荣耀游戏账号" }}</div>
          <span class="body-main-right-collect">收藏</span>
          <span class="body-main-right-share">分享</span>
          <span class="body-main-right-monthSales">月销 {{ "10" }}</span>
          <div class="body-main-right-card">
            <div class="body-main-right-card-seller">
              <div class="body-main-right-card-seller-title">卖家</div>
              <div class="body-main-right-card-seller-img"></div>
              <div class="body-main-right-card-seller-content">已实名</div>
              <div class="body-main-right-card-seller-img"></div>
              <div class="body-main-right-card-seller-content">已缴纳保证金</div>
            </div>
            <div class="body-main-right-card-guarantee">
              <div class="body-main-right-card-guarantee-title">保障</div>
              <div class="body-main-right-card-guarantee-img"></div>
              <div class="body-main-right-card-guarantee-content">永久包赔，100%赔付</div>
            </div>
          </div>
          <div class="body-main-right-price">￥ {{ "43.00" }}</div>
          <div class="body-main-right-details">{{ "介绍" }}</div>
          <div class="body-main-right-shoppingCar">加入购物车</div>
          <div class="body-main-right-buyNow">立即购买</div>
        </div>
      </div>
      <div class="body-aside">
        <div class="body-aside-title">{{ "糖格格的游戏屋" }}</div>
        <div class="body-aside-avatar">
          <el-avatar :size="78" :src="avatarUrl"></el-avatar>
        </div>
        <div class="body-aside-status">{{ "在线" }}</div>
        <div class="body-aside-card1">
          <p class="body-aside-card1-content">卖家信誉：{{ "4.6" }}</p>
          <p class="body-aside-card1-content">卖家服务：{{ "4.6" }}</p>
          <p class="body-aside-card1-content">商品质量：{{ "4.6" }}</p>
          <div style="width:200px;height:90px;border-bottom:1px #AFC8FA solid;margin:0 auto">
            <img src="../../assets/image/信封,信息,消息 1.png" class="body-aside-card1-img">
            <span class="body-aside-card1-link">联系卖家</span>
          </div>
        </div>
        <div class="body-aside-card2">
          <p class="body-aside-card2-feedback">我要反馈</p>
          <p class="body-aside-card2-report">我要举报</p>
          <p class="body-aside-card2-mycar">我的购物车</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarurl from "@/assets/image/Ellipse66.png";
export default {
  name: "goodsDetails",
  props: ["id"],
  components: {},
  data() {
    return {
      searchInput: "",
      avatarUrl: avatarurl
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  created() {

  },
  mounted() {},
};
</script>
<style scoped lang="less">
.head {
  height: 60px;
  width: 1350px;
  margin: 20px auto;
  background-color: #E2F0FD;
  border-radius: 10px;
  &-avatar {
    float: left;
    width: 30px;
    height: 30px;
    margin: 18px 10px 12px;
  }
  &-name {
    float: left;
    color: #000;
    font-size: 18px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    letter-spacing: 1.28px;
    height: 60px;
    line-height: 60px;
  }
  &-assessment {
    float: left;
    width: 500px;
    margin-left: 50px;
    &-scores {
      float: left;
      margin-right: 38px;
      height: 60px;
      line-height: 60px;
      color: #000;
      font-size: 18px;
      font-family: "MicrosoftYaHei";
      letter-spacing: 1.28px;
    }
    &-scores:nth-child(3) {
      margin-right: 0;
    }
  }
  &-search {
    float: right;
    height: 60px;
    line-height: 60px;
    width: 500px;
    ::v-deep .el-input {
      float: left;
      width: 180px;
      line-height: 63px !important;
      margin-right: 40px;
      margin-left: 80px !important;
    }
    ::v-deep .el-input__inner {
      border-radius: 25px !important;
      padding-left: 40px;
      height: 50px;
      color: #B4B4B4;
      font-size: 18px;
      font-family: "MicrosoftYaHei";
      letter-spacing: 1.28px;
      background: #FFF;
    }
    ::v-deep .el-input__inner:focus {
      border-color: rgb(175, 171, 171);
    }
  }
  &-yiyou {
    float: left;
    color: #053593;
    font-size: 18px;
    font-family: "MicrosoftYaHei";
    letter-spacing: 1.28px;
  }
  &-store {
    float: left;
    margin-left: 70px;
    color: #053593;
    font-size: 18px;
    font-family: "MicrosoftYaHei";
    letter-spacing: 1.28px;
  }
}
.body {
  height: 590px;
  width: 1350px;
  margin: 24px auto;
  margin-bottom: 0;
  &-main {
    float: left;
    height: 590px;
    width: 1050px;
    &-left {
      float: left;
      width: 400px;
      height: 590px;
      &-top {
        width: 360px;
        height: 420px;
        margin: 0 20px;
        margin-top: 10px;
        border-radius: 15px;
        background-color: blanchedalmond;
      }
      &-bottom {
        float: left;
        margin: 0 17px;
        margin-top: 30px;
        width: 99px;
        height: 93px;
        border-radius: 12px;
        background-color: red;
      }
    }
    &-right {
      float: left;
      width: 650px;
      height: 590px;
      &-title {
        float: left;
        color: #000;
        margin: 10px 0px 10px 50px;
        width: 400px;
        font-size: 24px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 1.92px;
      }
      &-share {
        float: left;
        color: #043492;
        cursor: pointer;
        font-size: 16px;
        margin-left: 80px;
        font-family: "MicrosoftYaHei";
        letter-spacing: 0.96px;
        height: 51px;
        line-height: 51px;
      }
      &-collect {
        float: left;
        color: #043492;
        cursor: pointer;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        letter-spacing: 0.96px;
        height: 51px;
        line-height: 51px;
      }
      &-monthSales {
        float: left;
        color: #B3B3B3;
        font-size: 14px;
        margin-left: 50px;
        font-family: "MicrosoftYaHei";
        letter-spacing: 0.96px;
      }
      &-card {
        float: left;
        width: 620px;
        height: 90px;
        margin-left: 15px;
        &-seller ,&-guarantee {
          width: 100%;
          height: 45px;
          line-height: 45px;
          &-title {
            color: #979797;
            font-size: 16px;
            margin-left: 50px;
            font-family: "MicrosoftYaHei";
            letter-spacing: 1.04px;
            float: left;
          }
          &-img {
            margin-left: 30px;
            margin-right: 8px;
            float: left;
            margin-top: 17px;
            width: 12px;
            height: 12px;
            background: url("../../assets/image/打勾 1.png") no-repeat;
            scale: 1.4;
          }
          &-content {
            float: left;
            color: #000;
            font-size: 14px;
            font-family: "MicrosoftYaHei";
            letter-spacing: 0.96px;
          }
        }
      }
      &-price {
        float: left;
        margin-left: 50px;
        margin-top: 5px;
        display: flex;
        height: 30px;
        flex-direction: column;
        flex-shrink: 0;
        color: #E88C11;
        font-size: 22px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 1.28px;
      }
      &-details {
        float: left;
        height: 280px;
        margin: 20px 50px;
        width: 550px;
      }
      &-shoppingCar {
        float: left;
        cursor: pointer;
        width: 126px;
        height: 36px;
        line-height: 36px;
        margin-left: 175px;
        border-radius: 16.5px 0px 0px 16.5px;
        background: #E2F0FD;
        text-align: center;
        color: #092E75;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 1.2px;
      }
      &-buyNow {
        float: left;
        cursor: pointer;
        width: 126px;
        height: 36px;
        line-height: 36px;
        color: #FFF;
        font-size: 16px;
        text-align: center;
        font-weight: 700;
        letter-spacing: 1.2px;
        font-family: "MicrosoftYaHei";
        border-radius: 0px 16.5px 16.5px 0px;
        background: #043492;
      }
    }
  }
  &-aside {
    float: right;
    height: 590px;
    width: 300px;
    &-title {
      color: #000;
      font-size: 18px;
      font-family: "MicrosoftYaHei";
      letter-spacing: 1.28px;
      margin: 23px auto;
      text-align: center;
    }
    &-avatar {
      margin: 0 auto;
      text-align: center;
    }
    &-status {
      color: #053593;
      font-size: 15px;
      margin: 0 auto;
      margin-top: 17px;
      width: 200px;
      font-family: "MicrosoftYaHei";
      text-align: center;
      font-weight: 700;
      letter-spacing: 1.04px;
      padding-bottom: 20px;
      border-bottom: 1px #AFC8FA solid;
    }
    &-card1 {
      text-align: center;
      &-content {
        margin-top: 24px;
        font-family: "MicrosoftYaHei";
        letter-spacing: 1.12px;
      }
      &-img {
        float: left;
        cursor: pointer;
        width: 21px;
        height: 21px;
        margin-top: 40px;
        margin-left: 45px;
      }
      &-link {
        float: left;
        cursor: pointer;
        margin-top: 40px;
        margin-left: 30px;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        letter-spacing: 1.12px;
      }
    }
    &-card2 {
      text-align: center;
      font-family: "MicrosoftYaHei";
      font-weight: 700;
      letter-spacing: 1.12px;
      &-feedback {
        margin-top: 20px;
        cursor: pointer;
      }
      &-report {
        margin-top: 20px;
        cursor: pointer;
      }
      &-mycar {
        margin-top: 20px;
        cursor: pointer;
      }
    }
  }
}
::v-deep .el-icon-search {
  scale: 1.5;
}
</style>
