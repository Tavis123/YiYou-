<template>
  <div>
    <div class="avatar">
      <el-avatar :size="63" :src="avatarUrl" @click="goEdit"></el-avatar>
      <span class="userName" @click="goEdit">userName</span>
    </div>
    <el-menu
      router
      :default-active="activeIndex"
      class="el-menu-vertical-demo"
      background-color="#F5F5F5"
      text-color="black"
      active-text-color="#043492"
    >
      <div class="isBuyer">
        <p class="isBuyer-text">我是买家</p>
        <el-menu-item index="/personalcenter/purchased">
          <span slot="title">已购买的商品</span>
        </el-menu-item>
        <el-menu-item index="/personalcenter/bidOrders">
          <span slot="title">出价订单</span>
        </el-menu-item>
        <el-menu-item index="/personalcenter/mycollection">
          <span slot="title">我的收藏</span>
        </el-menu-item>
        <el-menu-item index="/personalcenter/shippingaddress">
          <span slot="title">收货地址</span>
        </el-menu-item>
      </div>
      <div class="isSeller">
        <p class="isSeller-text">我是卖家</p>
        <el-menu-item index="/personalcenter/sold">
          <span slot="title">已售出的商品</span>
        </el-menu-item>
        <el-menu-item index="/personalcenter/storemanagement">
          <span slot="title">店铺管理</span>
        </el-menu-item>
        <el-menu-item index="/personalcenter/myposting">
          <span slot="title">我的发布</span>
        </el-menu-item>
      </div>
      <div class="myMessage">
        <p class="myMessage-text">我的消息</p>
        <el-menu-item index="/personalcenter/mymessage">
          <span slot="title">消息箱</span>
        </el-menu-item>
        <el-menu-item index="/personalcenter/contactcustomerservice">
          <span slot="title">联系客服</span>
        </el-menu-item>
      </div>
    </el-menu>
  </div>
</template>

<script>
import avatarurl from "@/assets/image/avatar.png"
export default {
  name: "asiderByPersonal",
  data() {
    return {
      avatarUrl: avatarurl,
      activeIndex: this.$route.path
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  methods: {
    goEdit() {
      this.$router.push("/personalcenter/editpersonaldata");
    }
  },
};
</script>
<style scoped lang="less">
.avatar {
  position: relative;
  width: 188px;
  height: 140px;
  background-color: #F5F5F5;
  border-bottom: 2px solid #E2F0FD;
  border-right: 1px solid #E2F0FD;
  ::v-deep .el-avatar {
    position: absolute;
    bottom: 53px;
    left: 58px;
  }
  .userName {
    position: absolute;
    bottom: 21px;
    left: 50px;
    padding-top: 10px;
    cursor: pointer;
  }
}
.isBuyer {
  position: relative;
  width: 188px;
  height: 232px;
  border-bottom: 2px solid #E2F0FD;
  border-right: 1px solid #E2F0FD;
  &-text {
    margin: 0 auto;
    height: 50px;
    line-height: 50px;
    text-align: center;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 20px;
  }
}
.isSeller {
  position: relative;
  width: 188px;
  height: 190px;
  border-bottom: 2px solid #E2F0FD;
  border-right: 1px solid #E2F0FD;
  &-text {
    margin: 0 auto;
    height: 54px;
    line-height: 54px;
    text-align: center;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 20px;
  }
}
.myMessage {
  position: relative;
  width: 188px;
  height: 138px;
  border-right: 1px solid #E2F0FD;
  &-text {
    margin: 0 auto;
    height: 48px;
    line-height: 48px;
    text-align: center;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 20px;
  }
}
::v-deep .el-menu-item {
  height: 45px;
  line-height: 45px;
  text-align: center;
  background-color: #EBF5FF;
  span {
    font-family: "MicrosoftYaHei";
    font-size: 16px;
    line-height: 21px;
  }
}
::v-deep .el-menu-item.is-active {
  font-weight: 700;
  color: #043492;
}
::v-deep .el-menu-item:hover{  
  outline: 0 !important;  
  background-color: #E2F0FD !important;  
}
</style>
