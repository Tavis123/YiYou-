<template>
  <div :style="{'max-height': this.timeLineHeight + 'px' }"
    style="overflow-y:scroll;">
    <div class="personalData">
      <div class="personalData-userName">
        吃萝卜的卷心菜
      </div>
      <div class="personalData-authentication">
        已手机认证
      </div>
      <div class="personalData-realName">
        已实名认证
      </div>
      <div class="personalData-paySecurityDeposit">
        已缴纳保证金
      </div>
    </div>
    <div class="box1">
      <div class="box1-title">我的粉丝</div>
      <div class="box1-num">1023</div>
      <div class="box1-avatar">
        <el-avatar :size="46" :src="avatarUrl1" class="box1-avatar-pi1"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl2" class="box1-avatar-pi2"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl3" class="box1-avatar-pi3"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl4" class="box1-avatar-pi4"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl5" class="box1-avatar-pi5"></el-avatar>
      </div>
    </div>
    <div class="box2">
      <div class="box2-title">订阅店铺</div>
      <div class="box2-num">880</div>
      <div class="box2-avatar">
        <el-avatar :size="46" :src="avatarUrl1" class="box1-avatar-pi1"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl2" class="box1-avatar-pi2"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl3" class="box1-avatar-pi3"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl4" class="box1-avatar-pi4"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl5" class="box1-avatar-pi5"></el-avatar>
      </div>
    </div>
    <div class="box3">
      <div class="box3-title">热门买家</div>
      <div class="box3-num">666</div>
      <div class="box3-avatar">
        <el-avatar :size="46" :src="avatarUrl1" class="box1-avatar-pi1"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl2" class="box1-avatar-pi2"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl3" class="box1-avatar-pi3"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl4" class="box1-avatar-pi4"></el-avatar>
        <el-avatar :size="46" :src="avatarUrl5" class="box1-avatar-pi5"></el-avatar>
      </div>
    </div>
    <div class="newEveryDay">
      <div class="newEveryDay-title">每日上新</div>
      <div class="newEveryDay-goods">
        <div class="newEveryDay-goods-list" v-for="(item, index) in newGoodsList" :key="item.id" >
          <div class="newEveryDay-goods-list-image">{{ item.image }}</div>
          <div class="newEveryDay-goods-list-title">{{ item.title }}</div>
          <div class="newEveryDay-goods-list-price">{{ "￥" + " " + item.price }}</div>
          <div class="newEveryDay-goods-list-loveImage"></div>
          <div class="newEveryDay-goods-list-love">{{ item.love + "人" }}</div>
        </div>
      </div>
    </div>
    <div class="selectedBoutiques">
      <div class="selectedBoutiques-title">优选精品</div>
      <div class="selectedBoutiques-goods">
        <div class="selectedBoutiques-goods-list" v-for="(item, index) in newGoodsList" :key="item.id" >
          <div class="selectedBoutiques-goods-list-image"></div>
          <div class="selectedBoutiques-goods-list-title">{{ item.title }}</div>
          <div class="selectedBoutiques-goods-list-price">{{ "￥" + " " + item.price }}</div>
          <div class="selectedBoutiques-goods-list-loveImage"></div>
          <div class="selectedBoutiques-goods-list-love">{{ item.love + "人" }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import avatarurl1 from "@/assets/image/Ellipse 46.png"
import avatarurl2 from "@/assets/image/Ellipse 47.png"
import avatarurl3 from "@/assets/image/Ellipse 48.png"
import avatarurl4 from "@/assets/image/Ellipse 49.png"
import avatarurl5 from "@/assets/image/Group 55.png"
import goods1 from "@/assets/image/goods1.png"
export default {
  name: "storeManagement",
  data() {
    //这里存放数据
    return {
      avatarUrl1: avatarurl1,
      avatarUrl2: avatarurl2,
      avatarUrl3: avatarurl3,
      avatarUrl4: avatarurl4,
      avatarUrl5: avatarurl5,
      timeLineHeight: "",
      newGoodsList: [
        {
          iamge: goods1,
          title: "蛋仔派对游戏账号",
          price: "44.00",
          love: 131
        },
        {
          iamge: goods1,
          title: "蛋仔派对游戏账号",
          price: "44.00",
          love: 131
        },
        {
          iamge: goods1,
          title: "蛋仔派对游戏账号",
          price: "44.00",
          love: 131
        },
        {
          iamge: goods1,
          title: "蛋仔派对游戏账号",
          price: "44.00",
          love: 131
        },
        {
          iamge: goods1,
          title: "蛋仔派对游戏账号",
          price: "44.00",
          love: 131
        },
        {
          iamge: goods1,
          title: "蛋仔派对游戏账号",
          price: "44.00",
          love: 131
        },
        {
          iamge: goods1,
          title: "蛋仔派对游戏账号",
          price: "44.00",
          love: 131
        },
        {
          iamge: goods1,
          title: "蛋仔派对游戏账号",
          price: "44.00",
          love: 131
        }
      ]
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
.personalData {
  position: relative;
  width: 600px;
  height: 130px;
  background-color: #F5F5F5;
  margin-left: 60px;
  &-userName {
    position: absolute;
    width: 190px;
    height: 32px;
    left: 0px;
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
    left: 0px;
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
  &-realName {
    position: absolute;
    width: 93px;
    height: 25px;
    left: 105px;
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
  &-paySecurityDeposit {
    position: absolute;
    width: 100px;
    height: 25px;
    left: 210px;
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
.box1 {
  float: left;
  margin-top: 10px;
  margin-left: 60px;
  width: 350px;
  height: 130px;
  flex-shrink: 0;
  border-radius: 17px;
  background: #d3e5f7;
  &-title {
    color: #000;
    font-size: 24px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    margin: 16px 0 12px 45px;
  }
  &-num {
    float: left;
    margin-left: 45px;
    color: #000;
    font-size: 36px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
  }
  &-avatar {
    position: relative;
    height: 46px;
    width: 130px;
    left: 205px;
    &-pi5 {
      position: absolute;
      right: 0;
      z-index: 60;
    }
    &-pi4 {
      position: absolute;
      right: 20px;
      z-index: 70;
    }
    &-pi3 {
      position: absolute;
      right: 40px;
      z-index: 80;
    }
    &-pi2 {
      position: absolute;
      right: 60px;
      z-index: 90;
    }
    &-pi1 {
      position: absolute;
      right: 80px;
      z-index: 100;
    }
  }
}
.box2 {
  float: left;
  margin-top: 10px;
  margin-left: 102px;
  width: 350px;
  height: 130px;
  flex-shrink: 0;
  border-radius: 17px;
  background: #d3e5f7;
  &-title {
    color: #000;
    font-size: 24px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    margin: 16px 0 12px 45px;
  }
  &-num {
    float: left;
    margin-left: 45px;
    color: #000;
    font-size: 36px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
  }
  &-avatar {
    position: relative;
    height: 46px;
    width: 130px;
    left: 205px;
    &-pi5 {
      position: absolute;
      right: 0;
      z-index: 60;
    }
    &-pi4 {
      position: absolute;
      right: 20px;
      z-index: 70;
    }
    &-pi3 {
      position: absolute;
      right: 40px;
      z-index: 80;
    }
    &-pi2 {
      position: absolute;
      right: 60px;
      z-index: 90;
    }
    &-pi1 {
      position: absolute;
      right: 80px;
      z-index: 100;
    }
  }
}
.box3 {
  float: left;
  margin-top: 10px;
  margin-left: 102px;
  width: 350px;
  height: 130px;
  flex-shrink: 0;
  border-radius: 17px;
  background: #d3e5f7;
  &-title {
    color: #000;
    font-size: 24px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    margin: 16px 0 12px 45px;
  }
  &-num {
    float: left;
    margin-left: 45px;
    color: #000;
    font-size: 36px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
  }
  &-avatar {
    position: relative;
    height: 46px;
    width: 130px;
    left: 205px;
    &-pi5 {
      position: absolute;
      right: 0;
      z-index: 60;
    }
    &-pi4 {
      position: absolute;
      right: 20px;
      z-index: 70;
    }
    &-pi3 {
      position: absolute;
      right: 40px;
      z-index: 80;
    }
    &-pi2 {
      position: absolute;
      right: 60px;
      z-index: 90;
    }
    &-pi1 {
      position: absolute;
      right: 80px;
      z-index: 100;
    }
  }
}
.newEveryDay {
  float: left;
  margin-top: 20px;
  margin-left: 60px;
  width: 1260px;
  height: 270px;
  flex-shrink: 0;
  background-color: #d3e5f7;
  border-radius: 15px;
  &-title {
    color: #000;
    font-size: 24px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    margin: 16px 0 20px 45px;
  }
  &-goods {
    width: 1170px;
    height: 197px;
    margin-left: 45px;
    overflow-x: auto;
    display:flex;
    justify-content:space-between;
    overflow-y: hidden;
    &-list {
      float: left;
      margin-right: 40px;
      width: 190px;
      height: 197px;
      flex-shrink: 0;
      border-radius: 10px;
      background: #E9EAEB;
      &-image {
        width: 190px;
        height: 120px;
        flex-shrink: 0;
        background: url("../../assets/image/goods1.png") no-repeat center 0;
        border-bottom: 1px rgb(226, 221, 221) solid;
      }
      &-title {
        margin-left: 16px;
        color: #000;
        font-size: 18px;
        font-family: Inter;
        font-weight: 600;
      }
      &-price {
        margin-left: 16px;
        color: #F95803;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 0.96px;
      }
      &-love {
        float: right;
        color: #000;
        font-size: 10px;
        font-family: Microsoft YaHei;
        font-weight: 700;
        letter-spacing: 0.48px;
      }
      &-loveImage {
        float: right;
        margin-right: 15px;
        margin-top: 3.5px;
        scale: 1.5;
        height: 10px;
        width: 10px;
        background: url("../../assets/image/love.png") no-repeat center 0;
      }
    }
  }
}
.selectedBoutiques {
  float: left;
  margin-top: 20px;
  margin-left: 60px;
  width: 1260px;
  height: 270px;
  flex-shrink: 0;
  background-color: #d3e5f7;
  border-radius: 15px;
  &-title {
    color: #000;
    font-size: 24px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    margin: 16px 0 12px 45px;
  }
    &-goods {
    width: 1170px;
    height: 197px;
    margin-left: 45px;
    overflow-x: auto;
    display:flex;
    justify-content:space-between;
    overflow-y: hidden;
    &-list {
      float: left;
      margin-right: 40px;
      width: 190px;
      height: 197px;
      flex-shrink: 0;
      border-radius: 10px;
      background: #E9EAEB;
      &-image {
        width: 190px;
        height: 120px;
        flex-shrink: 0;
        background: url("../../assets/image/goods1.png") no-repeat center 0;
        border-bottom: 1px rgb(226, 221, 221) solid;
      }
      &-title {
        margin-left: 16px;
        color: #000;
        font-size: 18px;
        font-family: Inter;
        font-weight: 600;
      }
      &-price {
        margin-left: 16px;
        color: #F95803;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 0.96px;
      }
      &-love {
        float: right;
        color: #000;
        font-size: 10px;
        font-family: Microsoft YaHei;
        font-weight: 700;
        letter-spacing: 0.48px;
      }
      &-loveImage {
        float: right;
        margin-right: 15px;
        margin-top: 3.5px;
        scale: 1.5;
        height: 10px;
        width: 10px;
        background: url("../../assets/image/love.png") no-repeat center 0;
      }
    }
  }
}
</style>
