<template>
  <div id="comm">
    <div>
      <router-view></router-view>
    </div>
    <div class="bottom flex">
      <div :class="{'nav': num == 1}" class="take-out flex" @click="jump(1,'/')">
        <div class="iconfont icon-waimai-"></div>
        <div>外卖</div>
      </div>
      <div :class="{'nav': num == 2}" class="order flex" @click="jump(2,'/order')">
        <div class="iconfont icon-weibiaoti-"></div>
        <div>订单</div>
      </div>
      <div :class="{'nav': num == 3}" class="mine flex" @click="jump(3,'/mine')">
        <div class="iconfont icon-weibiaoti-1"></div>
        <div>我的</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "comm",
  data() {
    return {
      num: 1
    };
  },
  components: {},
  methods: {
    jump(index, path) {
      if (this.$route.path !== path) {
        this.num = index;
        this.$router.push(path);
      }
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.nav {
  color: rgb(194, 12, 12);
}
.bottom > div {
  width: 60px;
  height: 100%;
  flex-direction: column;
  justify-content: center;
}
.take-out > div:nth-child(2),
.order > div:nth-child(2),
.mine > div:nth-child(2) {
  font-size: 14px;
}
.bottom {
  box-shadow: 0 -2px 2px rgb(230, 230, 235);
  width: 100%;
  height: 50px;
  position: fixed;
  bottom: 0;
  justify-content: space-around;
  background: white;
  .iconfont {
    font-size: 25px;
    margin-bottom: 5px;
  }
}
</style>