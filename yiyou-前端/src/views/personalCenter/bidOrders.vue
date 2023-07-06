<template>
  <div class="box">
    <personalData></personalData>
  </div>
</template>

<script>
import personalData from '@/components/personalData.vue';
export default {
  name: "bidOrders",
  components: {
    personalData
  },
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
.box {
  position: relative;
  margin-left: 60px;
  background-color: #F5F5F5;
  height: 700px
}
</style>
