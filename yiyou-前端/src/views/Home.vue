<template>
  <div>
    <header>
      <Header></Header>
    </header>
    <main>
      <transition appear>
        <router-view :key="$route.path"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import Header from "@/components/header.vue"
export default {
  name: "Home",
  data() {
    return {
      
    };
  },
  //监听属性 类似于data概念
  computed: {},
  watch: {

  },
  methods: {

  },
  components: {
    Header
  }
};
</script>
<style scoped>

</style>
