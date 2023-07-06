<template>
  <div
    v-on="$listeners"
    class="bbutton"
    :class="[`bbutton-${size}`, { 'bbutton-loading': loading }]"
  >
    <span>
      <i class="el-icon-loading" v-if="loading"></i>
      <slot>bbutton</slot>
    </span>
  </div>
</template>
<script>
export default {
  name: "bbutton",
  props: {
    loading: {
      type: Boolean
    },
    size: {
      type: String,
      default: "medium",
      validator(value) {
        return ["small", "medium", "large"].includes(value);
      }
    }
  }
};
</script>
<style lang="less" scoped>
.bbutton {
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: @main-color;
  color: #fff;
  overflow: hidden;
  border-radius: 23px;
  position: relative;
  cursor: pointer;
  .el-icon-loading {
    margin-right: 5px;
  }
  &-loading {
    pointer-events: none;
  }
  &:hover :after,
  &-loading:after {
    content: "";
    position: absolute;
    background-color: rgba(255, 255, 255, 0.3);
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
  &-small {
    height: 26px;
  }
  &-large {
    height: 50px;
  }
}
</style>
