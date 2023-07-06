<template>
  <div class="box" :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll;">
    <personalData></personalData>
    <div class="myCollection">
      <div class="myCollection-title">我的收藏</div>
      <div class="myCollection-goods">
        <div class="myCollection-goods-list" v-for="(item, index) in newGoodsList" :key="item.id" >
          <div class="myCollection-goods-list-image"></div>
          <div class="myCollection-goods-list-title">{{ item.title }}</div>
          <div class="myCollection-goods-list-price">{{ "￥" + " " + item.price }}</div>
          <div class="myCollection-goods-list-star"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personalData from '@/components/personalData.vue';
import goods1 from "@/assets/image/goods4.png"
export default {
  name: "myCollection",
  components: {
    personalData
  },
  data() {
    //这里存放数据
    return {
      newGoodsList: [
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
        },
      ],
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
  position: relative;
  margin-left: 60px;
  background-color: #F5F5F5;
  height: 700px
}
.myCollection {
  float: left;
  margin-top: 130px;
  margin-left: 20px;
  width: 1250px;
  flex-shrink: 0;
  &-title {
    margin: 20px 0 10px 30px;
    color: #000;
    font-size: 18px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
  }
  &-goods {
    width: 1200px;
    margin: 0 auto;
    margin-left: 25px;
    &-list {
      float: left;
      height: 270px;
      width: 270px;
      margin-right: 30px;
      margin-bottom: 10px;
      border-radius: 10px;
      border: 1px #dfdede solid;
      &-image {
        width: 268px;
        height: 180px;
        border-radius: 10px;
        background: url("../../assets/image/goods1.png") center 0;
        border-bottom: 1px rgb(226, 221, 221) solid;
      }
      &-title {
        color: #000;
        font-size: 16px;
        font-family: Inter;
        font-weight: 600;
        margin: 10px 0 10px 10px;
      }
      &-price {
        float: left;
        margin-left: 10px;
        width: 220px;
        color: #053593;
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        letter-spacing: 0.96px;
      }
      &-star {
        float: right;
        width: 24px;
        height: 24px;
        background: url("../../assets/image/收藏1.png") no-repeat;
        scale: 1.5;
      }
    }
  }
}
</style>