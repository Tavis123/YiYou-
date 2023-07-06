<template>
  <div class="box" :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll;">
    <personalData></personalData>
    <div class="post" @click="postGoods">+</div>
    <div class="postGoods" @click="postGoods">新建发布</div>
    <div class="newThisMonth">
      <div class="newThisMonth-title">本月上新</div>
      <div class="newThisMonth-goods">
        <div class="newThisMonth-goods-list" v-for="(item, index) in newGoodsList" :key="item.id" >
          <div class="newThisMonth-goods-list-image"></div>
          <div class="newThisMonth-goods-list-title">{{ item.title }}</div>
          <div class="newThisMonth-goods-list-detail">商品详情：
            <div class="newThisMonth-goods-list-detail-word">{{ item.detail }}</div>
          </div>
          <div class="newThisMonth-goods-list-price">价格设置：
            <div class="newThisMonth-goods-list-price-num">{{ "￥" + " " + item.price }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import personalData from '@/components/personalData.vue';
import goods1 from "@/assets/image/goods4.png"
export default {
  name: "myPosting",
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
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
        },
        {
          image: goods1,
          price: "43.00",
          title: "王者荣耀游戏账号",
          detail: "版本：倔强青铜|秩序白银|荣耀黄金|尊贵铂金|永恒钻石|至尊星耀|最强王者|荣耀王者；全套教程|远程安装"
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
  methods: {
    postGoods() {
      this.$router.push("/personalcenter/postgoods");
    }
  },
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
.post {
  position: absolute;
  cursor: pointer;
  left: 1060px;
  top: 60px;
  background: url("../../assets/image/Ellipse 50.jpg") no-repeat;
  background-size: 100% 100%;
  background-attachment: fixed;
  width: 45px;
  height: 45px;
  scale: 1;
  color: #F7FBFF;
  font-size: 24px;
  text-align: center;
  font-family: "MicrosoftYaHei";
  font-weight: 700;
  line-height: 41px;
}
.postGoods {
  position: absolute;
  cursor: pointer;
  left: 1120px;
  top: 67px;
  color: #043492;
  font-size: 20px;
  font-family: "MicrosoftYaHei";
  font-weight: 700;
}
.newThisMonth {
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
      height: 330px;
      width: 270px;
      margin-right: 30px;
      margin-bottom: 10px;
      border-radius: 10px;
      border: 1px #dfdede solid;
      &-image {
        width: 268px;
        height: 140px;
        border-radius: 10px;
        background: url("../../assets/image/goods1.png") center 0;
        border-bottom: 1px rgb(226, 221, 221) solid;
      }
      &-title {
        color: #000;
        font-size: 16px;
        font-family: Inter;
        font-weight: 600;
        margin: 5px 0 5px 10px;
      }
      &-detail {
        margin-left: 10px;
        margin-bottom: 5px;
        color: #053593;
        font-size: 13px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 0.96px;
        &-word {
          color: #9D9D9D;
          font-size: 12px;
          letter-spacing: 0.96px;
          display: flex;
          font-weight: 400;
          flex-direction: column;
          flex-shrink: 0;
        }
      }
      &-price {
        margin-left: 10px;
        color: #053593;
        font-size: 14px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 0.96px;
        &-num {
          display: inline;
          color: #053593;
          font-size: 16px;
          font-weight: 400;
          letter-spacing: 0.96px;
        }
      }
    }
  }
}
</style>
