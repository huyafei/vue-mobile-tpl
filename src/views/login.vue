<template>
  <div class="">
    <van-button type="primary" @click="routerRedirect()"
      >未登录跳转
    </van-button>
    <van-button type="primary" @click="login()">登录跳转 </van-button>
    <van-search v-model="value" placeholder="请输入搜索关键词" />

    <p class="wz">
      徐志摩曾说过：“一生中至少该有一次，为了某个人而忘记了自己，不求结果，不求同行，不求曾经拥有，甚至不求你爱我，只求在我最美的年华里，遇见你。”我不知道自己是何等的幸运能在茫茫人海中与你相遇？我也不知道你的出现是恩赐还是劫？但总归要说声“谢谢你，谢谢你曾来过……”，还记得初相识时你那拘谨的样子，话不是很多只是坐在那里听我不停地说着各种不着边际的话。可能因为紧张我也不知道自己想要表达什么？只知道乱七八糟的在说，而你只是静静地听着，偶尔插一两句。想想自己也不知道一个慢热甚至在不熟的人面前不苟言笑的我那天怎么会那么多话？后来才知道那就是你给的莫名的熟悉感和包容吧！
    </p>
  </div>
</template>
<script>
export default {
  name: "Login",
  components: {},
  mixins: [],
  props: {},
  data() {
    return {
      value: ""
    };
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
    login() {
      this.$cookies.set("token", "123");
      const { query } = this.$route;
      this.$router.replace(query.redirect || "/home");
    }
  }
};
</script>
<style scoped lang="less">
.wz {
  font-size: 16px;
  color: @cl-blue;
}
</style>
