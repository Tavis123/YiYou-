<template>
  <div class="box">
    <personalData></personalData>
    <div class="post" @click="postGoods">√</div>
    <div class="postGoods" @click="postGoods">完成发布</div>
    <div class="bbox">
      <div class="bbox-title">商品基本信息</div>
      <el-form 
        ref="form"
        :model="form"
        label-width="110px"
        label-position="right"
        :rules="rules"
        style="margin-top: 25px;"
        :hide-required-asterisk=true
      >
        <el-form-item label="商品名称" style="position: relative;"  prop="name">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="商品简介" prop="details">
          <el-input v-model="form.details" :rows="6" type="textarea"></el-input>
        </el-form-item>
        <el-form-item label="商品价格" prop="price">
          <el-input v-model.number="form.price"></el-input>
        </el-form-item>
        <el-form-item label="商品库存" prop="number">
          <el-input v-model.number="form.number"></el-input>
        </el-form-item>
        <el-form-item label="联系方式" prop="contactImformation">
          <el-input v-model="form.contactImformation"></el-input>
        </el-form-item>
        <el-form-item label="商品图片" style="position: absolute; top: 184px; left: 650px;" prop="image">
          <el-upload
            class="upload-demo"
            ref="upload"
            drag
            :auto-upload="false"
            action="https://"
            :on-success="handleSuccess"
            :on-change="handleChange"
            :on-remove="handleRemove"
            :limit="4"
            :file-list="fileList"
            multiple>
            <i class="el-icon-upload"></i>
            <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
            <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过2MB</div>
          </el-upload>
        </el-form-item>
      </el-form>
      <div class="chengnuo">我承诺已阅读并同意《关于易游游戏账号审核认定交易的协议》</div>
    </div>
  </div>
</template>

<script>
import personalData from '@/components/personalData.vue';
export default {
  name: "postGoods",
  components: {
    personalData
  },
  data() {
    return {
      form: {
        name: "",
        details: "",
        price: "",
        contactImformation: "",
        number: 1,
        image: []
      },
      fileList: [],
      rules: {
        name: [{ required: true, trigger: "blur", message: "请输入商品名称" }],
        contactImformation: [
          {
            required: true,
            trigger: "blur",
            message: "请输入手机号"
          },
          {
            validator(rule, value, callback) {
              if (!/^\d{11}$/.test(value)) {
                callback(new Error("请输入合法的手机号"));
              }
              callback();
            },
            trigger: "blur"
          }
        ],
        price: [
          { required: true, trigger: "blur", message: "请输入商品价格" },
          {
            pattern: /^[1-9]\d*$/,
            type: "number",
            message: "价格必须为数字值"
          }
        ],
        number: [
          { required: true, message: "库存不能为空" },
          {
            pattern: /^[1-9]\d*$/,
            type: "number",
            message: "库存必须为数字值"
          }
        ],
        account: [{ required: true, trigger: "blur", message: "请输入交易账号" }],
        details: [
          { required: true, trigger: "blur", message: "请输入商品简介" }
        ]
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    async postGoods() {
      this.$refs[this.form].validate(valid => {
        if (valid) {
          this.formDate.append("commodityName", this.form.name);
          this.formDate.append("detail", this.form.details);
          this.formDate.append("commodityPrice", this.form.price);
          this.formDate.append("commodityAmount", this.form.number);
          this.formDate.append("telephoneNumb", this.form.contactImformation);
          this.formDate.append("publisherId", localStorage.getItem("loginId"));
          this.formDate.append("isPass", 0);
          // 获取图片
          this.$refs.upload.submit();
          const loading = this.$loading();
          this.$axios({
            url: "http://localhost:8999/Commodity/addCommodity",
            method: "post",
            data: this.formDate
          })
            .then(res => {
              if (res.status == 200) {
                loading.close();
                this.$message({
                  message: "发布成功",
                  type: "success"
                });
                this.resetForm("form");
                this.form.image = "";
                this.$router.push("/personalcenter/myposting");
              } else {
                loading.close();
                this.$message({
                  message: "发布失败",
                  type: "error"
                });
              }
            })
            .catch(err => {
              loading.close();
              this.$message({
                message: err.message,
                type: "error"
              });
            });
        } else {
          alert("请填写完整商品信息");
          return false;
        }
      })
    },
    handleSuccess(res, file) {
      // this.myData= file;
      this.$refs.upload.clearFiles(); //上传成功之后清除历史记录
      this.handleInitTableData();  //初始化表格数据
    },
    handleInitTableData() {

    },
    handleChange(file, fileList) {
      const index = this.fileList.findIndex((item) => {
        return item.uid === file.uid
      })
      let imgSize = Number(file.size / 1024 / 1024 );
      if (imgSize > 1) {
        this.$msgbox({
          message: "图片大小不能超过2MB，请重新上传",
          type: "warning",
        });
        this.fileList.splice(index, 1);
        return;
      } 
      this.fileList.push(file);
      this.form.image.push(file);
    },
    handleRemove(file, fileList) {
      const index = this.fileList.findIndex((item) => {
        return item.uid === file.uid
      });
      this.form.image.splice(index, 1);
      this.fileList.splice(index, 1);
    },
  },
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（可以访问DOM元素）
  mounted() {},
};
</script>
<style scoped lang="less">
.box {
  position: relative;
  margin-left: 60px;
  background-color: #F5F5F5;
  height: 700px;
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
  line-height: 43px;
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
.bbox {
  float: left;
  margin-top: 130px;
  margin-left: 50px;
  height: 560px;
  width: 1100px;
  // background-color: red;
  &-title {
    color: #000;
    font-size: 22px;
    font-family: "MicrosoftYaHei";
    font-weight: 700;
    line-height: normal;
  }
}
.chengnuo {
  display: flex;
  position: relative;
  top: -50px;
  left: 635px;
  width: 500px;
  height: 16px;
  flex-direction: column;
  color: #6F6E6E;
  font-size: 16px;
  font-family: "MicrosoftYaHei";
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 1.54px;
}
.el-input {
  width: 390px;
}
::v-deep .el-input__inner {
  font-size: 15px;
  color: #000;
  border: 1px #043492 solid;
  border-radius: 7px;
}
::v-deep .el-form-item__label {
  color: #000;
  font-size: 20px;
  font-family: "MicrosoftYaHei";
  font-weight: 700;
  line-height: 40px;
}
::v-deep .el-textarea__inner {
  width: 39.5%;
  font-size: 16px;
  color: #000;
  border: 1px #043492 solid;
  border-radius: 10px;
  resize: none;
}
::v-deep .el-upload-dragger {
  border: 1px #043492 solid;
  border-radius: 8px;
}
</style>
