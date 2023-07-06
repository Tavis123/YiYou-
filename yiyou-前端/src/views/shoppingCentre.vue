<template>
  <div>
    <transition appear>
      <router-view :key="$route.path"></router-view>
    </transition>
  </div>
</template>

<script>
export default {
  name: "shoppingCentre",
  data() {
    //这里存放数据
    return {};
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {},
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
