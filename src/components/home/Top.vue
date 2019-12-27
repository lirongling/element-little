<template>
  <div id="hometop">
    <div class="top flex">
      <div>
        <span class="ico iconfont icon-dingwei"></span>
        <span class="city">{{this.city}}</span>
      </div>
      <div v-if="this.loginMsg!==null" class="login" @click="login">{{this.loginMsg.name}}</div>
      <div v-else class="login" @click="login">登录</div>
    </div>
    <div class="search">
      <input type="text" placeholder="搜索商家 商品" class="input" />
    </div>
    <ul class="label flex">
      <li>炸鸡</li>
      <li>炸鸡</li>
      <li>炸鸡</li>
      <li>炸鸡</li>
      <li>炸鸡</li>
      <li>炸鸡</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    city: {
      type: String,
      default: () => ""
    }
  },
  data() {
    return {
      loginMsg: null
    };
  },
  components: {},
  methods: {
    login() {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.loginMsg = JSON.parse(localStorage.getItem("user"));
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top {
  width: 95%;
  height: 30px;
  margin: 0 auto;
  padding-top: 10px;
  color: rgb(245, 245, 245);
  .icon-dingwei {
    color: rgb(237, 243, 240);
    font-size: 20px;
    line-height: 20px;
    padding-top: -10px;
  }

  .city {
    display: inline-block;
    font-size: 18px;
    line-height: 18px;
    width: 260px;
    height: 100%;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .login {
    width: 70px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    text-align: right;
  }
}
.search {
  width: 300px;
  height: 28px;
  margin: 0 auto;
  .input {
    margin-top: 10px;
    width: 290px;
    height: 25px;
    border-radius: 10px;
    text-align: center;
    outline: none;
  }
}
.label {
  margin: 22px auto;
  width: 95%;
  color: rgb(250, 245, 245);
  font-size: 14px;
}
</style>