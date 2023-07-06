<template>
  <div id="app">
    <main>
      <transition appear>
        <router-view :key="$route.path"></router-view>
      </transition>
    </main>
  </div>
</template>
<script>
export default {
  name: "App",
  data() {
    return {

    };
  },
  computed: {

  },
  created() {
    
  },
  mounted() {
    
  },
  beforeUpdate() {
    
  },
  watch: {
    
  },
  methods: {
    
  },
  components: {
  }
};
</script>
<style lang="less">
html{
  margin-right: calc(100% - 100vw);
  overflow-x: hidden;
}
html::-webkit-scrollbar{
    display: none;
}
</style>
