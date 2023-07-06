<template>
  <div class="left">
    <div class="text1">您的反馈已收到，感谢您的支持！</div>
    <div class="text2">祝您生活愉快！</div>
  </div>
</template>

<script>
export default {
  name: "afterContactUs",
  data() {
    return {

    };
  },
  methods: {},
};
</script>
<style scoped>
.left {
  position: absolute;
  width: 980px;
  height: 700px;
  left: 0px;
  top: 80px;
  background: #EBF5FF;
  border-radius: 0px;
  padding-top: 35px;
  margin: 0px auto;
  text-align: left;
}
.text1 {
  position: absolute;
  width: 690px;
  height: 61px;
  left: 80px;
  top: 200px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 700;
  font-size: 46px;
  line-height: 61px;
  /* identical to box height */
  color: #013480;
}
.text2 {
  position: absolute;
  width: 280px;
  height: 53px;
  left: 80px;
  top: 310px;

  font-family: 'Microsoft YaHei';
  font-style: normal;
  font-weight: 400;
  font-size: 40px;
  line-height: 53px;
  /* identical to box height */
  color: #013480;
}
</style>
