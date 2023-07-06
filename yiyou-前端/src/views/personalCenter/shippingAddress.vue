<template>
  <div class="box">
    <div class="personalData">
      <div class="personalData-userName">
        吃萝卜的卷心菜
      </div>
      <div class="personalData-authentication">
        已手机认证
      </div>
    </div>
    <div class="adress">
      <div class="adress-text">收货地址</div>
      <el-link type="primary" @click="addressMore" class="adress-more" v-if="boolLength"
          >查看更多
      </el-link>
      <div class="adress-list">
        <div class="adress-list-card" v-for="(item, index) in addressList" :key="item.id">
          <div class="adress-list-card-nickName">{{ item.nickName }}</div>
          <div class="adress-list-card-phone">{{ item.phone }}</div>
          <div class="adress-list-card-address">{{ item.address }}</div>
          <div class="adress-list-card-edit" @click="editAddress(item)"></div>
          <i class="el-icon-delete" style="color:#2B68C2; font-size:28px" @click="iconDelete(index, item)"></i>
        </div>
      </div>
      <el-dialog title="收货地址" :visible.sync="dialogTableVisible">
        <el-table :data="addressListMore" stripe>
          <el-table-column property="nickName" label="用户名" width="200"></el-table-column>
          <el-table-column property="phone" label="手机号码" width="150"></el-table-column>
          <el-table-column property="address" label="地址" width="450"></el-table-column>
          <el-table-column label="操作">
            <template slot-scope="scope">
              <el-button
                size="mini"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
              <el-button
                size="mini"
                type="danger"
                @click="handleDelete(scope.$index, scope.row)">删除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-dialog>
      <el-dialog title="收货地址" :visible.sync="innerdialogFormVisible">
        <el-form :model="editAddressForm" class="editAddressForm">
          <el-form-item label="用户名" :label-width="formLabelWidth">
            <el-input v-model="editAddressForm.userName" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="手机号码" :label-width="formLabelWidth">
            <el-input v-model="editAddressForm.userPhone" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="详细地址" :label-width="formLabelWidth">
            <el-input v-model="editAddressForm.userAddress" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="innerdialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="confirmHandleEdit">确 定</el-button>
        </div>
      </el-dialog>
    </div>
    <div class="addressFrom">
      <div class="addressFrom-text">新建地址</div>
      <div class="addressFrom-edit">
        <el-form 
          class="addressFrom-edit-container"
          label-position="right"
          label-width="120px"
          :model="editForm"
          :rules="editRules"
          ref="editForm"
          :hide-required-asterisk="true"
        >
          <el-form-item class="name" label="收货人" prop="userName">
            <el-col :span="22">
              <el-input
                class="name-input"
                type="text"
                v-model="editForm.userName"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item class="phone" label="手机号码" prop="userPhone">
            <el-col :span="22">
              <el-input
                class="phone-input"
                type="text"
                v-model="editForm.userPhone"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item class="region" label="地区" prop="userRegion">
            <el-col :span="22">
              <el-input
                class="region-input"
                type="text"
                v-model="editForm.userRegion"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
          <el-form-item class="address" label="详细地址" prop="userAddress">
            <el-col :span="22">
              <el-input
                class="address-input"
                type="text"
                v-model="editForm.userAddress"
                autocomplete="off"
              ></el-input>
            </el-col>
          </el-form-item>
        </el-form>
        <el-checkbox v-model="isDefaultAddress">设置为默认地址</el-checkbox>
        <el-button class="newAddress-button" type="primary" @click="newAddress"
          >新建地址
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shippingAddress",
  data() {
    return {
      addressList: [
        {
          nickName: "吃旺仔牛奶糖",
          phone: "15860920666",
          address: "福建省 福州市 闽侯县 上街镇学园路2号福州大学旗山校区生活一区"
        },
        {
          nickName: "不吃香菜",
          phone: "15860920666",
          address: "福建省 福州市 闽侯县 上街镇学园路2号福州大学旗山校区生活一区"
        }
      ],
      addressListMore: [
        {
          nickName: "吃旺仔牛奶糖",
          phone: "15860920666",
          address: "福建省 福州市 闽侯县 上街镇学园路2号福州大学旗山校区生活一区"
        },
        {
          nickName: "不吃香菜",
          phone: "15860920666",
          address: "福建省 福州市 闽侯县 上街镇学园路2号福州大学旗山校区生活一区"
        }
      ],
      editForm: {
        userName: "",
        userPhone: "",
        userRegion: "",
        userAddress: ""
      },
      editAddressForm: {
        userName: "",
        userPhone: "",
        userAddress: ""
      },
      editRules: {
        userPhone: [
          { required: true, message: "请输入手机号码", trigger: "blur" },
          { pattern: /^\d{11}$/, message: "请输入11个数字", trigger: "blur" }
        ],
        userName: [
          { required: true, message: "请输入用户名", trigger: "blur" },
        ],
        userAddress: [
          { required: true, message: "请输入详细地址", trigger: "blur" },
        ],
        userRegion: [
          { required: true, message: "请输入地区", trigger: "blur" },
        ],
      },
      formLabelWidth: "120px",
      isDefaultAddress: false,
      boolLength: "true",
      dialogTableVisible: false,
      innerdialogFormVisible: false
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {
    editAddress(row) {
      this.innerdialogFormVisible = true;
      console.log(row);
      this.editAddressForm.userAddress = row.address;
      this.editAddressForm.userName = row.nickName;
      this.editAddressForm.userPhone = row.phone;
    },
    iconDelete(index, row) {
      console.log(row);
      this.addressList.splice(index, 1);  //这时要把this.addressListMore 的第一个移进来
    },
    newAddress() {

    },
    addressMore() {
      this.dialogTableVisible = true;
    },
    handleEdit(index, row) {
      console.log(row);
      this.innerdialogFormVisible = true;
      this.editAddressForm.userAddress = row.address;
      this.editAddressForm.userName = row.nickName;
      this.editAddressForm.userPhone = row.phone;
    },
    handleDelete(index, row) {
      console.log(row);
      this.addressListMore.splice(index, 1);
    },
    confirmHandleEdit() {
      this.innerdialogFormVisible = false;
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
.personalData {
  position: absolute;
  width: 600px;
  height: 130px;
  background-color: #F5F5F5;
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
}
.adress {
  position: absolute;
  top: 130px;
  width: 1250px;
  height: 250px;
  &-text {
    width: 80px;
    height: 26px;

    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 20px;
    line-height: 26px;
    color: #000000;
    margin-bottom: 8px;
  }
  &-list {
    height: 216px;
    width: 1250px;
    &-card {
      position: relative;
      width: 1250px;
      height: 90px;
      margin-bottom: 15px;
      background: #EBF5FF;
      border-radius: 15px;
      &-nickName {
        float: left;
        width: 180px;
        height: 90px;
        margin-left: 100px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        font-size: 16px;
        line-height: 90px;
        text-align: left;
        color: #000000;
      }
      &-phone {
        float: left;
        width: 120px;
        height: 90px;
        margin-left: 20px;
        font-family: "MicrosoftYaHei";
        font-weight: 700;
        font-size: 16px;
        line-height: 90px;
        text-align: center;
        color: #000000;
      }
      &-address {
        float: left;
        width: 650px;
        height: 90px;
        margin-left: 38px;
        font-family: "MicrosoftYaHei";
        font-weight: 400;
        font-size: 16px;
        line-height: 90px;
        text-align: left;
        color: #000000;
      }
      &-edit {
        float: left;
        width: 30px;
        height: 30px;
        margin: 30px auto;
        background-image: url("@/assets/image/edit.png");
        cursor: pointer;
      }
      .el-icon-delete {
        float: left;
        width: 30px;
        height: 30px;
        margin: 30px auto;
        margin-left: 30px;
        cursor: pointer;
      }
    }
  }
}
.addressFrom {
  position: absolute;
  top: 380px;
  width: 1250px;
  height: 320px;
  &-text {
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    font-size: 20px;
    line-height: 21px;
    color: #000000;
  }
  &-edit {
    height: 280px;
    border-radius: 18px;
    background-color: #EBF5FF;
    &-container{
      margin-top: 10px;
      padding-top: 10px;
    }
    .el-checkbox {
      margin-left: 70px;
      font-family: "MicrosoftYaHei";
      font-weight: 500;
      font-size: 18px;
      color: #000000;
    }
    ::v-deep .el-input__inner {
      background: #FFFFFF;
      border-radius: 8px;
      border: none;
    }
  }
  ::v-deep .el-button {
    position: absolute;
    right: 10px;
    bottom: 10px;
    width: 170px;
    height: 45px;
    background: #043492;
    border-radius: 12px;
    font-weight: 700;
    font-size: 16px;
    text-align: center;
    font-family: "MicrosoftYaHei";
    color: #FFFFFF;
  }
}
::v-deep .el-form-item {
  margin-bottom: 17px;
}
::v-deep .el-form-item__label {
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  font-size: 16px;
  height: 40px;
  line-height: 40px;
  color: #000000;
}
::v-deep .el-checkbox__label {
  padding-left: 20px;
}
::v-deep .el-checkbox__inner {
  border-radius: 50%;
}
::v-deep .el-link {
  position: absolute;
  right: 0;
  top: 10px;
  color: #2B68C2;
}
.el-link.is-underline:hover:after {
  border-bottom: none;
}
::v-deep .el-dialog {
  width: 1000px;
}
::v-deep .el-table {
  text-align: center;
}
::v-deep .el-table__cell {
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  padding: 4px 0;
  color: #000000;
}
.el-button--primary {
  background: #043492;
}
.editAddressForm {
  ::v-deep .el-input__inner {
    border-radius: 10px;
    background-color: #E2F0FD;
  }
}
</style>
