<template>
  <div>
    <aside class="left">
      <Asider></Asider>
    </aside>
    <main class="right">
      <transition appear>
        <router-view :key="$route.path"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Asider from "@/components/asiderByPersonal.vue"
export default {
  name: "personalCenter",
  data() {
    return {
      
    };
  },
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {

  },
  components: {
    Asider
  }
};
</script>
<style scoped lang="less">
.left {
  position: absolute;
  width: 190px;
  height: 700px;
  left: 0px;
  top: 80px;
  background: #F5F5F5;
  border-right: 2px solid #EBF5FF;
}
.right {
  position: relative;
  margin-left: 190px;
  height: 700px;
  background: #F5F5F5;
}
</style>
