<template>
  <div class="">
    <van-button type="primary" @click="routerRedirect()">未登录跳转 </van-button>
    <van-button type="primary" @click="login()">登录跳转 </van-button>
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
  methods: {
    routerRedirect() {
      const { query } = this.$route;
      this.$router.replace(query.redirect || "/home");
    },
    login(){
      this.$cookies.set("token",'123')
      const { query } = this.$route;
      this.$router.replace(query.redirect || "/home");
    }

  }
};
</script>
<style scoped lang="less"></style>
