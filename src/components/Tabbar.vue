<template>
  <van-tabbar v-model="active" active-color="#1989fa">
    <van-tabbar-item icon="home-o" to="/home/index">首页</van-tabbar-item>
    <van-tabbar-item icon="flag-o" to="/classify/index">分类</van-tabbar-item>
    <van-tabbar-item icon="friends-o" to="/cart/index">购物车</van-tabbar-item>
    <van-tabbar-item icon="user-o" to="/my/index">我的</van-tabbar-item>
  </van-tabbar>
</template>
<script>
export default {
  name: "Tabbar",
  components: {},
  props: {},
  data() {
    return {
      active: 0
    };
  },
  //计算属性
  computed: {},
  watch: {},
  created() {},
  mounted() {
    this.getSelectItemBarName();
  },
  //keep-alive 组件激活时调用
  activated() {},
  //keep-alive 组件停用时调用。
  deactivated() {},
  //方法
  methods: {
    getSelectItemBarName() {
      let activeName = this.$route.name;
      console.log(activeName);
      if (activeName === "HomeIndex") {
        this.active = 0;
      } else if (activeName === "ClassifyIndex") {
        this.active = 1;
      } else if (activeName === "CartIndex") {
        this.active = 2;
      } else if (activeName === "MyIndex") {
        this.active = 3;
      }
    }
  }
};
</script>
<style scoped lang="less"></style>
