<template>
  <div class="">
    <van-button type="default">默认按钮</van-button>
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <br />
    <div id="echars" style="width: 500px;height: 500px;"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters, mapActions, mapMutations } from "vuex";
export default {
  name: "HomeIndex",
  components: {},
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
        },
        yAxis: {
          type: "value"
        },
        series: [
          {
            data: [820, 932, 901, 934, 1290, 1330, 1320],
            type: "line"
          }
        ]
      }
    };
  },
  computed: {
    ...mapActions({
      setUserInfo: "user/SET_USERINFO"
    }),
    ...mapMutations(["user/getUserInfo"])
  },
  mounted() {
    let myChart = this.$echarts.init(document.getElementById("echars"));
    myChart.setOption(this.option, true);
  }
};
</script>
<style scoped lang="less"></style>
