<template>
  <div>
    <div class="right">
      <div class="right-title">人气热卖</div>
      <div class="right-card">
        <div class="right-card-list" v-for="(item, index) in hotSaleList" :key="item.id">
          <div class="right-card-list-image"></div>
          <div class="right-card-list-title">{{ item.title }}</div>
          <div class="right-card-list-price">￥ {{ item.price }}</div>
          <div class="right-card-list-loveImage"></div>
          <div class="right-card-list-love">{{ item.love }}人</div>
        </div>
      </div>
    </div>
    <div class="left">
      <div class="left-head">
        <div class="left-head-title">标签</div>
        <el-input
          style="width:217px;line-height: 80px;margin-right: 176px;"
          placeholder=""
          prefix-icon="el-icon-search"
          size="medium"
          v-model="lableInput">
        </el-input>
        <div class="left-head-title">类型</div>
        <el-select v-model="typeValue" clearable placeholder="请选择">
          <el-option
            v-for="item in typeOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
        <div class="left-head-title">筛选</div>
        <el-select v-model="siftValue" clearable placeholder="请选择" style="margin-right:0">
          <el-option
            v-for="item in siftOptions"
            :key="item.value"
            :label="item.label"
            :value="item.value">
          </el-option>
        </el-select>
      </div>
      <div class="left-body" :style="{'max-height': this.timeLineHeight + 'px' }"
        style="overflow-y:scroll;">
        <div class="left-body-list" v-for="(item, index) in goodsList" :key="item.id" @click="goDetails(index)">
          <img src="../../assets/image/miyuansu_58a6cf0bc1950eb6f1dd25c5a6a4b2a7_cqlfyaxopp 1.png" alt="" class="left-body-list-image" />
          <div class="left-body-list-title">{{ item.title }}</div>
          <div class="left-body-list-price">￥ {{ item.price }}</div>
          <div class="left-body-list-loveImage"></div>
          <div class="left-body-list-love">{{ item.love }}人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import request from "@/utils/goods.js";
export default {
  name: "shoppingCentreHomepage",
  components: {},
  data() {
    //这里存放数据
    return {
      hotSaleList: [
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        }
      ],
      goodsList: [
      {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        },
        {
          title: "王者荣耀人气热卖",
          price: "43.00",
          love: "233",
          image: "",
        }
      ],
      timeLineHeight: "",
      lableInput: "",
      typeOptions: [

      ],
      typeValue: "",
      siftOptions: [
        {
          lable: 1,
          value: "按价格升序"
        },
        {
          lable: 2,
          value: "按价格降序"
        },
        {
          lable: 3,
          value: "销售量"
        }
      ],
      siftValue: ""
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    goDetails(index) {
      this.$router.push("/shoppingcentre/goodsdetails/" + this.goodsList[index].id);
    },
    async getGoodsList() {
      const loading = this.$loading();
      var formDate = new FormData();
      formDate.append("keyWord", "");
      formDate.append("lowPrice", 0 );
      formDate.append("highPrice", 99999);
      await request.post("selectAll", formDate)
      .then(res => {
        if (res.data.code === 200) {
          loading.close();
          this.$message({
            message: "获取列表成功",
            type: "success"
          });
          this.loading = false;
          this.goodsList = res.data.data;
        } else {
          loading.close();
          this.$message({
            message: res.data.message,
            type: "error"
          });
        }
      })
      .catch(err => {
        loading.close();
        this.$message({
          message: "获取列表失败 " + err,
          type: "error"
        });
      });
    }
  },
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {
    this.timeLineHeight = document.documentElement.clientHeight - 160;
    window.onresize = () => {
      this.timeLineHeight = document.documentElement.clientHeight - 160;
    };
  },
};
</script>
<style scoped lang="less">
.right {
  float: right;
  width: 300px;
  height: 700px;
  border-left: 1px rgb(204, 204, 204) solid;
  &-title {
    margin: 30px auto;
    text-align: center;
    color: #000;
    font-size: 18px;
    font-family: Inter;
    font-weight: 600;
  }
  &-card {
    height: 616px;
    width: 100%;
    overflow: auto;
    &-list {
      margin: 0 auto;
      width: 99%;
      height: 284px;
      flex-shrink: 0;
      border-radius: 8px;
      border: 1px solid #E2F0FD;
      &-image {
        background: url("../../assets/image/miyuansu_58a6cf0bc1950eb6f1dd25c5a6a4b2a7_cqlfyaxopp 1 (1).png") no-repeat center;
        height: 180px;
        background-color: #F0E8DB;
        border-radius: 6px 6px 0px 0px;
      }
      &-title {
        display: flex;
        margin: 10px 0;
        margin-left: 15px;
        height: 24px;
        flex-direction: column;
        flex-shrink: 0;
        color: #000;
        font-size: 18px;
        font-family: Inter;
        font-weight: 600;
      }
      &-price {
        margin-left: 15px;
        margin-top: 23px;
        display: flex;
        height: 22px;
        flex-direction: column;
        flex-shrink: 0;
        color: #F95803;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 1.12px;
      }
      &-love {
        float: right;
        display: flex;
        height: 10px;
        flex-direction: column;
        flex-shrink: 0;
        color: #000;
        font-size: 14px;
        font-family: Microsoft YaHei;
        font-weight: 700;
        letter-spacing: 0.8px;
      }
      &-loveImage {
        float: right;
        margin-right: 15px;
        margin-left: 5px;
        margin-top: 5.5px;
        scale: 1.8;
        height: 10px;
        width: 10px;
        background: url("../../assets/image/love.png") no-repeat center 0;
      }
    }
  }
}
.left {
  float: left;
  width: 1200px;
  margin: 0 50px;
  height: 60px;
  &-head {
    height: 80px;
    width: 100%;
    padding: 0 30px;
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
    ::v-deep .el-select {
      float: left;
      line-height: 80px;
      margin-right: 176px;
    }
  }
  &-body {
    width: 100%;
    &-list {
      float: left;
      width: 240px;
      height: 205px;
      flex-shrink: 0;
      border-radius: 8px;
      border: 1px solid #E2F0FD;
      margin: 0 30px;
      &-image {
        width: 100%;
        height: 120px;
        border-radius: 8px 8px 0px 0px;
        background: #E9EAEB;
        flex-shrink: 0;
        object-fit: scale-down;
      }
      &-title {
        display: flex;
        margin: 3px 0;
        margin-left: 10px;
        height: 24px;
        flex-direction: column;
        flex-shrink: 0;
        color: #000;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        font-weight: 600;
      }
      &-price {
        margin-left: 10px;
        margin-top: 2px;
        display: flex;
        height: 22px;
        flex-direction: column;
        flex-shrink: 0;
        color: #F95803;
        font-size: 16px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        letter-spacing: 1.12px;
      }
      &-love {
        float: right;
        display: flex;
        height: 10px;
        flex-direction: column;
        flex-shrink: 0;
        color: #000;
        font-size: 12px;
        font-family: Microsoft YaHei;
        font-weight: 700;
        letter-spacing: 0.8px;
      }
      &-loveImage {
        float: right;
        margin-right: 15px;
        margin-left: 5px;
        margin-top: 4.5px;
        scale: 1.8;
        height: 10px;
        width: 10px;
        background: url("../../assets/image/love.png") no-repeat center 0;
      }
    }
    &-list:nth-child(4n) ~ &-list{
      margin-top: 10px;
    }
  }
}
::-webkit-scrollbar {
  display: none;
}
</style>
