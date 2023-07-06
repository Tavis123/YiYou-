<template>
  <div class="personalData">
    <div class="personalData-userName">
      吃萝卜的卷心菜
    </div>
    <div class="personalData-authentication">
      已手机认证
    </div>
  </div>
</template>
<script>
export default {
  name: "personalData",
  data() {
    //这里存放数据
    return {};
  },
  props: {
    // userName: {
    //   type: String,
    //   required: true
    // }
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
};
</script>
<style scoped lang="less">
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
</style>
