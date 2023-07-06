<template>
  <div class="box">
    <div class="personalData">
      <div class="personalData-userName">
        吃萝卜的卷心菜
      </div>
      <el-link type="primary" @click="editPersonalData" class="personalData-edit"
        >编辑个人资料
      </el-link>
      <div class="personalData-authentication">
        已手机认证
      </div>
    </div>
    <div class="account">
      <div class="deposit">
        <div class="deposit-text">保证金账户（元）</div>
        <div class="deposit-number">0.00</div>
        <el-link type="primary" @click="depositView" class="deposit-view"
          >查看已开通服务
        </el-link>
      </div>
      <div class="indemnity">
        <div class="indemnity-text">赔付金（元）</div>
        <div class="indemnity-number">0.00</div>
        <el-link type="primary" @click="indemnityView" class="indemnity-view"
          >查看已开通服务
        </el-link>
      </div>
    </div>
    <div class="orders">
      <div class="orders-buyer">
        <div class="orders-buyer-box">
          <p class="orders-buyer-box-text">我是买家</p>
          <el-link type="primary" @click="buyerOrderView" class="orders-buyer-box-link"
            >查看全部订单
          </el-link>
        </div>
        <div class="orders-buyer-table">
          <el-table
            :data="buyer"
            height="185"
            border
            style="width: 100%"
            :header-cell-style="{ background:'#E2F0FD', padding: '7px 0', color: '#013480'}"
            >
            <el-table-column
              prop="goodsImage"
              label="商品图片"
              width="120"
              >
              <template slot-scope="scope">
                <img :src="scope.row.goodsImage" width="60" height="60" alt=""/>
              </template>
            </el-table-column>
            <el-table-column
              prop="goodsName"
              label="商品名称"
              width="320"
              >
            </el-table-column>
            <el-table-column
              prop="transactionAmount"
              label="交易金额"
              width="180"
              >
            </el-table-column>
            <el-table-column
              prop="transactionTime"
              label="交易时间"
              width="200"
              >
            </el-table-column>
            <el-table-column
              prop="orderNumber"
              label="订单号"
              width="220"
              >
            </el-table-column>
            <el-table-column
              label="操作"
              >
              <el-link type="primary" @click="operate" class="orders-buyer-table-link"
                >联系我们
              </el-link>
            </el-table-column>
          </el-table>
        </div>
      </div>
      <div class="orders-seller">
        <div class="orders-seller-box">
          <p class="orders-seller-box-text">我是卖家</p>
          <el-link type="primary" @click="sellerOrderView" class="orders-seller-box-link"
            >查看全部订单
          </el-link>
        </div>
        <div class="orders-seller-table">
          <el-table
            :data="seller"
            height="185"
            border
            style="width: 100%"
            :header-cell-style="{ background:'#E2F0FD', padding: '7px 0', color: '#013480'}"
            >
            <el-table-column
              prop="goodsImage"
              label="商品图片"
              width="120"
              >
              <template slot-scope="scope">
                <img :src="scope.row.goodsImage" width="60" height="60" alt=""/>
              </template>
            </el-table-column>
            <el-table-column
              prop="goodsName"
              label="商品名称"
              width="320"
              >
            </el-table-column>
            <el-table-column
              prop="pricing"
              label="定价"
              width="180"
              >
            </el-table-column>
            <el-table-column
              prop="stock"
              label="库存"
              width="150"
              >
            </el-table-column>
            <el-table-column
              prop="sales"
              label="销量"
              width="150"
              >
            </el-table-column>
            <el-table-column
              prop="goodsStatus"
              label="商品状态"
              width="150"
              >
            </el-table-column>
            <el-table-column
              label="操作"
              >
              <el-link type="primary" @click="operate" class="orders-seller-table-link"
                >操作
              </el-link>
            </el-table-column>
          </el-table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "personalHomepage",
  data() {
    return {
      seller: [
        {
          goodsImage: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          goodsName: "王者荣耀账号xxxb",
          pricing: "￥23.00",
          stock: "12",
          sales: "4",
          goodsStatus: "销售中"
        },
        {
          goodsImage: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          goodsName: "王者荣耀账号xxxb",
          pricing: "￥23.00",
          stock: "12",
          sales: "4",
          goodsStatus: "销售中"
        },
        {
          goodsImage: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          goodsName: "王者荣耀账号xxxb",
          pricing: "￥23.00",
          stock: "12",
          sales: "4",
          goodsStatus: "销售中"
        }
      ],
      buyer: [
        {
          goodsImage: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          goodsName: "奥比岛账号xxxb",
          transactionAmount: "￥23.00",
          transactionTime: "2022/03/04",
          orderNumber: "23000023490209"
        },
        {
          goodsImage: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          goodsName: "奥比岛账号xxxb",
          transactionAmount: "￥23.00",
          transactionTime: "2022/03/04",
          orderNumber: "23000023490209"
        },
        {
          goodsImage: "https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png",
          goodsName: "奥比岛账号xxxb",
          transactionAmount: "￥23.00",
          transactionTime: "2022/03/04",
          orderNumber: "23000023490209"
        }
      ]
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    editPersonalData() {
      this.$router.push("/personalcenter/editpersonaldata")
    },
    depositView() {

    },
    indemnityView() {
      
    },
    buyerOrderView() {

    },
    sellerOrderView() {

    },
    operate() {

    }
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
};
</script>
<style scoped lang="less">
.box {
  margin-left: 70px;
}
.personalData {
  position: absolute;
  width: 600px;
  height: 100px;
  background-color: #F5F5F5;
  &-userName {
    position: absolute;
    width: 190px;
    height: 32px;
    left: 10px;
    top: 15px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 26px;
    line-height: 32px;
    /* identical to box height */
    color: #053593;
  }
  ::v-deep &-edit {
    position: absolute;
    width: 110px;
    height: 16px;
    left: 408px;
    top: 25px;

    font-family: "MicrosoftYaHei";
    font-weight: 400;
    font-size: 18px;
    line-height: 16px;
    /* identical to box height */
    color: #2B68C2;
  }
  &-authentication {
    position: absolute;
    width: 95px;
    height: 25px;
    left: 10px;
    top: 62px;

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
.account {
  margin-left: 10px;
  position: absolute;
  top: 100px;
  width: 700px;
  height: 100px;
  background-color: #F5F5F5;
}
.deposit {
  float: left;
  margin-top: 5px;
  width: 300px;
  border-right: 2px solid #E2F0FD;
  &-text {
    margin-bottom: 10px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 24px;
    color: #000000;
  }
  &-number {
    font-family: "MicrosoftYaHei";
    font-weight: 400;
    font-size: 22px;
    color: #000000;
  }
  &-view {
    width: 100px;
    height: 18px;
    font-family: "MicrosoftYaHei";
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */
    color: #2B68C2;
  }
}
.indemnity {
  float: right;
  margin-top: 5px;
  width: 300px;
  &-text {
    margin-bottom: 10px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 24px;
    color: #000000;
  }
  &-number {
    font-family: "MicrosoftYaHei";
    font-weight: 400;
    font-size: 22px;
    color: #000000;
  }
  &-view {
    width: 100px;
    height: 18px;
    font-family: "MicrosoftYaHei";
    font-weight: 400;
    font-size: 14px;
    line-height: 16px;
    /* identical to box height */
    color: #2B68C2;
  }
}
.el-link.is-underline:hover:after {
  border-bottom: none;
  color: #053593;
}
.orders {
  position: absolute;
  top: 200px;
  background-color: #F5F5F5;
  width: 1240px;
  height: 500px;
  border-top: 2px solid #E2F0FD;
  &-buyer {
    box-sizing: border-box;
    margin-top: 8px;
    margin-left: 6px;
    width: 1240px;
    height: 241px;
    border: 3px solid #E2F0FD;
    &-box {
      height: 50px;
      background-color: #F5F5F5;
      &-text {
        float: left;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 30px;
        width: 100px;
        font-family: "MicrosoftYaHei";
        font-size: 24px;
        line-height: 50px;
        /* identical to box height */
        color: #000000;
      }
      &-link {
        float: right;
        width: 115px;
        font-family: "MicrosoftYaHei";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 50px;
        color: #2B68C2;
      }
    }
  }
  &-seller {
    box-sizing: border-box;
    margin-top: 8px;
    margin-left: 6px;
    width: 1240px;
    height: 241px;
    border: 3px solid #E2F0FD;
    &-box {
      height: 50px;
      &-text {
        float: left;
        margin-top: 0;
        margin-bottom: 0;
        margin-left: 30px;
        width: 100px;
        font-family: "MicrosoftYaHei";
        font-size: 24px;
        line-height: 50px;
        /* identical to box height */
        color: #000000;
        background-color: #F5F5F5;
      }
      &-link {
        float: right;
        width: 115px;
        font-family: "MicrosoftYaHei";
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 50px;
        color: #2B68C2;
      }
    }
  }
}
::v-deep .el-table {
  padding: auto 1px;
  text-align: center
}
::v-deep .el-table img {
  margin-top: 3px;
}
::v-deep .el-table__cell {
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  padding: 4px 0;
  color: #000000;
}
</style>
