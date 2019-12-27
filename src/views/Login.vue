<template>
  <div>
    <div class="users">
     
        <van-field class="inputs" v-model="username" label="用户名" placeholder="请输入用户名" />
        <van-field class="inputs" v-model="phone" label="手机号" placeholder="请输入手机号" />

    </div>
    <div class="login">
      <van-button type="primary" @click="login">登录</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      phone: "",
      loginMsg:''
    };
  },
  components: {},
  methods: {
    login(){
      this.loginMsg={name:this.username,phone:this.phone}
       localStorage.setItem('user', JSON.stringify({name:this.username,phone:this.phone}))
       this.$router.push('/');
       this.$store.state.loginMsg={name:this.username,phone:this.phone};
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.users {
  margin-top: 100px;
}
.inputs {
  justify-content: center;
  display: flex;
  margin-top: 20px;
}
.login {
  margin-top: 100px;
}
</style>