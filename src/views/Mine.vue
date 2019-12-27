<template>
  <div> 
    <div class="mine1">
<div class="contior">
      <div class="top flex">
        <div class="top-left iconfont icon-fanhui flex"></div>
        <div class="top-center" flex>我的</div>
        <div class="top-right" flex></div>
      </div>
      <div class="user flex">
        <div>
          <img
            src="https://fuss10.elemecdn.com/b/7f/432619fb21a40b05cd25d11eca02djpeg.jpeg"
            alt
            width="50"
          />
        </div>
        <div class="user-right">
          <div class="username">{{this.loginMsg.name}}</div>
          <div class="userphone">{{phone}}</div>
        </div>
      </div>
      <div class="wealth flex">
        <div class="balance flex">
          <div class="balance-money">
            <span class="wealth-num">0.00</span>元
          </div>
          <div class="balance-title">余额</div>
        </div>
        <div class="split"></div>
        <div class="discount flex">
          <div class="balance-money">
            <span class="wealth-num1">3</span>个
          </div>
          <div class="balance-title">优惠</div>
        </div>
        <div class="split"></div>
        <div class="integral flex">
          <div class="balance-money">
            <span class="wealth-num2">6250</span>元
          </div>
          <div class="balance-title">积分</div>
        </div>
      </div>
      <div class="menu">
        <div class="order iconfont icon-dingdan">
          <span>我的订单</span>
        </div>
        <div class="split1"></div>
        <div class="shop iconfont icon-shangcheng">
          <span>积分商城</span>
        </div>
        <div class="split1"></div>
        <div class="member iconfont icon-huiyuan-">
          <span>饿了么会员</span>
        </div>
      </div>
        <div class="menu">
        <div class="order iconfont icon-dingdan">
          <span>我的订单</span>
        </div>
        <div class="split1"></div>
        <div class="shop iconfont icon-shangcheng">
          <span>积分商城</span>
        </div>
        <div class="split1"></div>
        <div class="member iconfont icon-huiyuan-">
          <span>饿了么会员</span>
        </div>
      </div>
    </div>
    </div>
    
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginMsg: "",
      phone: null
    };
  },
  components: {},
  methods: {},
  mounted() {
    this.loginMsg = JSON.parse(localStorage.getItem("user"));
    this.phone =
      String(this.loginMsg.phone).substring(0, 3) +
      "*****" +
      String(this.loginMsg.phone).substring(8);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.mine{
  background: #F4F4F4!important;
}
.top > div {
  flex: 1;

  height: 100%;
}
.contior {
  width: 100%;
  height: 150px;
  background: #0097ff;
}
.mine1{
  background: #F4F4F4!important;
}
.top {
  width: 95%;
  height: 30px;
  margin: 0 auto;
  .top-left {
    color: white;
  }
  .top-center {
    line-height: 30px;
    font-size: 20px;
    color: white;
    font-weight: 600;
  }
}
.user {
  width: 95%;
  height: 60px;
  margin: 0 auto;
  margin-top: 40px;
  justify-content: flex-start;
  .user-right {
    margin-left: 20px;
    text-align: left;
    color: white;
    .username {
      font-size: 24px;
    }
    .userphone {
      margin-top: 5px;
      font-size: 16px;
    }
  }
}

.wealth {
  width: 96%;
  height: 80px;
  margin: 0 auto;
  justify-content: space-around;
  margin-top: 22px;
  .balance,
  .discount,
  .integral {
    width: 100px;
    height: 80px;

    flex-direction: column;
    justify-content: center;
  }
  .split {
    height: 90%;
    width: 1px;
    background: rgb(157, 158, 158);
  }
  .wealth-num {
    font-size: 28px;
    color: burlywood;
  }
  .wealth-num1 {
    font-size: 28px;
    color: rgb(202, 127, 29);
  }
  .wealth-num2 {
    font-size: 28px;
    color: rgb(48, 115, 179);
  }

  .balance-title {
    font-size: 14px;
    color: rgb(138, 137, 137);
  }
}
.menu {
  text-align: left;
  width: 100%;
  margin-top: 20px;
  background: rgb(238, 240, 238);
  padding: 10px 0;
}
.menu > div {
  width: 90%;
  margin: 12px auto;
  font-size: 22px;
  color: rgb(184, 119, 33);
}
.menu > div > span {
  color: #000;
  margin-left: 10px;
  font-size: 18px;
  line-height: 22px;
}
.split1{
  width: 90%;
  height: 1px;
  background: rgb(158, 158, 157);
  margin: 0 auto;
}
</style>