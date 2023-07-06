<template>
  <div :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll;">
    <div class="box">
      <personalData style="position:relative"></personalData>
    </div>
    <div class="head">
      <div class="head-title">标签</div>
      <el-input
        style="width:217px;line-height: 80px;margin-right: 60px;"
        placeholder=""
        prefix-icon="el-icon-search"
        size="medium"
        v-model="lableInput">
      </el-input>
      <div class="head-title">排序</div>
      <el-select v-model="siftValue" clearable placeholder="">
        <el-option
          v-for="item in siftOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="head-title">类型</div>
      <el-select v-model="typeValue" clearable placeholder="">
        <el-option
          v-for="item in typeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
      <div class="head-title">时间</div>
      <el-select v-model="timeValue" clearable placeholder="" style="margin-right:0">
        <el-option
          v-for="item in timeOptions"
          :key="item.value"
          :label="item.label"
          :value="item.value">
        </el-option>
      </el-select>
    </div>
    <div class="main">
      <div class="main-card" v-for="(item, index) in orderList" :key="item.id">
        <div class="main-card-title">
          <el-checkbox v-model="item.checked" class="main-card-title-check"></el-checkbox>
          <div class="main-card-title-time">{{ item.time }}</div>
          <div class="main-card-title-id">订单号：{{ item.id }}</div>
          <div class="main-card-title-shop">{{ item.shop }}</div>
          <img src="../../assets/image/信封,信息,消息 1.png" alt="" class="main-card-title-contact">
          <div class="main-card-title-contact" style="margin:0;">联系我们</div>
        </div>
        <div class="main-card-content">
          <img src="../../assets/image/Rectangle 80.png" alt="" class="main-card-content-img">
          <div class="main-card-content-name">{{ item.name }}</div>
          <div class="main-card-content-price">原金额:￥ {{ item.price }}</div>
          <div class="main-card-content-count">数量:{{ item.count }}</div>
          <div class="main-card-content-realPrice">实付金额:￥ {{ item.realPrice }}</div>
          <div class="main-card-content-ul">
            <p class="main-card-content-ul-li">订单详情</p>
            <p class="main-card-content-ul-li">投诉商家</p>
            <p class="main-card-content-ul-li">我要反馈</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personalData from '@/components/personalData.vue';
export default {
  name: "Purchased",
  components: {
    personalData
  },
  data() {
    return {
      orderList: [
        {
          time: "2023-06-18",
          id: "1234567896",
          shop: "糖格格的游戏屋",
          name: "王者荣耀账号售卖",
          details: "大撒大撒大撒大撒法的撒反对给",
          image: "",
          price: "43.00",
          realPrice: "43.00",
          count: "1",
          checked: "false"
        },
        {
          time: "2023-06-18",
          id: "1234567899",
          shop: "糖格格的游戏屋",
          name: "王者荣耀账号售卖",
          details: "大撒大撒大撒大撒法的撒反对给",
          image: "",
          price: "43.00",
          realPrice: "43.00",
          count: "1",
          checked: "false"
        },
        {
          time: "2023-06-18",
          id: "1234567898",
          shop: "糖格格的游戏屋",
          name: "王者荣耀账号售卖",
          details: "大撒大撒大撒大撒法的撒反对给",
          image: "",
          price: "43.00",
          realPrice: "43.00",
          count: "1",
          checked: "false"
        }
      ],
      siftOptions: [

      ],
      siftValue: "",
      typeValue: "",
      typeOptions: [

      ],
      timeOptions: [

      ],
      timeValue: "",
      lableInput: "",
      timeLineHeight: "",
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  mounted() {
    this.timeLineHeight = document.documentElement.clientHeight - 80;
    window.onresize = () => {
      this.timeLineHeight = document.documentElement.clientHeight - 80;
    };
  },
};
</script>
<style scoped lang="less">
.box {
  float: left;
  height: 130px;
  margin-left: 60px;
  background-color: #F5F5F5;
}
.head {
  float: left;
  margin-left: 60px;
  width: 1300px;
  height: 80px;
  &-title {
    float: left;
    color: #000;
    font-size: 16px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    margin-right: 12px;
    height: 80px;
    line-height: 80px;
  }
  ::v-deep .el-input {
    float: left;
  }
  ::v-deep .el-input__inner {
    border-radius: 10px;
    background-color: #E2F0FD;
  }
  ::v-deep .el-select {
    float: left;
    line-height: 80px;
    margin-right: 60px;
  }
}
.main {
  float: left;
  margin-left: 60px;
  width: 1300px;
  &-card{
    float: left;
    width: 1250px;
    height: 180px;
    margin-bottom: 10px;
    &-title {
      width: 100%;
      height: 45px;
      background-color: #E2F0FD;
      &-check {
        float: left;
        line-height: 45px;
        margin-left: 20px;
      }
      ::v-deep .el-checkbox__inner {
        border-radius: 3px;
        transform : scale(1.2);
        border: 1px solid #000;
      }
      &-time {
        float: left;
        color: #000;
        font-size: 16px;
        font-weight: 700;
        margin: 0 70px;
        margin-left: 40px;
        line-height: 45px;
      }
      &-id {
        float: left;
        width: 350px;
        color: #000;
        font-size: 16px;
        font-weight: 500;
        line-height: 45px;
        margin-right: 80px;
      }
      &-shop {
        float: left;
        width: 350px;
        color: #000;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        line-height: 45px;
        letter-spacing: 1.28px;
      }
      &-contact {
        float: left;
        margin: 12px 0;
        line-height: 45px;
        margin-left: 84px;
        margin-right: 20px;
      }
    }
    &-content {
      width: 100%;
      height: 135px;
      &-img {
        float: left;
        width: 100px;
        height: 100px;
        margin: 16.5px 40px;
        margin-right: 70px;
        border-radius: 12px;
      }
      &-name {
        float: left;
        width: 280px;
        color: #000;
        font-size: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: 500;
        height: 135px;
        line-height: 135px;
      }
      &-price {
        float: left;
        width: 200px;
        color: #000;
        font-size: 18px;
        font-family: "MicrosoftYaHei";
        letter-spacing: 1.28px;
        height: 135px;
        line-height: 135px;
      }
      &-realPrice {
        float: left;
        width: 220px;
        margin-left: 40px;
        color: #000;
        font-size: 18px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        height: 135px;
        line-height: 135px;
        letter-spacing: 1.28px;
      }
      &-count {
        float: left;
        width: 80px;
        width: 85px;
        margin-left: 40px;
        color: #000;
        font-size: 18px;
        font-family: "MicrosoftYaHei";
        font-weight: 500;
        height: 135px;
        line-height: 135px;
        letter-spacing: 1.28px;
      }
      &-ul {
        float: left;
        height: 135px;
        margin-left: 35px;
        width: 130px;
        &-li {
          cursor: pointer;
          text-align: center;
          color: #000;
          font-size: 16px;
          font-family: "MicrosoftYaHei";
          font-weight: 500;
          letter-spacing: 1.28px;
        }
      }
    }
  }
}

</style>
