<template>
  <div class="">
    <van-button
      type="primary"
      @click="
        () => {
          $router.push('/home');
        }
      "
      >跳转</van-button
    >
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {};
  },
  computed: {},
  watch: {},
  beforeCreate() {},
  created() {},
  beforeMount() {},
  mounted() {},
  beforeUpdate() {},
  updated() {},
  //keep-alive 组件激活时调用
  activated() {},
  //keep-alive 组件停用时调用。
  deactivated() {},
  //销毁之前
  beforeDestroy() {},
  //销毁后
  destroyed() {},
  methods: {}
};
</script>
<style scoped lang="less"></style>
