<template>
  <div>
    <div class="titles">推荐商家</div>
    <div class="shop flex" v-for="(item,index) in shop" :key="index">
      <div class="shop-img">
        <img
          src="https://fuss10.elemecdn.com/0/da/f42235e6929a5cb0e7013115ce78djpeg.jpeg"
          width="60"
        />
      </div>
      <div class="shop-right flex">
        <div class="shop-title">
          <div class="shop-name">{{item.name}}</div>
          <div class="shop-sore">
            <van-rate
              size="16"
              v-model="item.rating"
              allow-half
              void-icon="star"
              void-color="#eee"
            />
          </div>
          <div class="piecewise_agent_fee">{{item.piecewise_agent_fee.tips}}</div>
        </div>
        <div class="shop-time flex">
          <div class="supports">{{item.supports[0].name}}</div>
          <div>
            <span class="supports-name">{{item.supports[1].name}}</span>
            <span class="delivery_mode">{{item.delivery_mode.text}}</span>
          </div>
          <div ><span class="distance">{{item.distance}}</span >/<span class="order_lead_time">{{item.order_lead_time}}</span></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    shop: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
@import "//at.alicdn.com/t/font_1561705_rdt8pohmbi.css";
.titles {
  width: 90%;
  margin: 10px auto;
  font-size: 20px;
  height: 20px;
  text-align: left;
  font-weight: 600;
}
.shop {
  width: 90%;
  margin: 0 auto;
  height: 90px;
}
.shop-img {
  width: 60px;
  height: 60px;
  font-size: 60px;
  color: chocolate;
}
.shop-right {
  width: 275px;
  height: 70px;

  .shop-title {
    width: 120px;
    height: 70px;
  
    text-align: left;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    .shop-name {
      margin-top: 5px;
      font-size: 18px;
      font-weight: 600;
    }
    .shop-sore {
      margin: 5px 0;
    }
    .piecewise_agent_fee {
      font-size: 14px;
      color: rgb(146, 151, 151);
    }
  }
  .shop-time {
    width: 140px;
    height: 70px;
    text-align: right;
  
    justify-content: space-around;
    flex-direction: column;
    align-items: flex-end;
    .supports-name{
      border: aquamarine 1px solid;
      color: aquamarine;
      font-size: 13px;
      border-radius: 3px;
    }
    .delivery_mode{
      margin-left: 3px;
      font-size: 13px;
      color: rgb(239, 245, 243);
      background: aquamarine;
      border-radius: 3px;
    }
    .distance{
      font-size: 12px;
      color: rgb(130, 134, 132);
    }
    .order_lead_time{
      font-size: 12px;
      color: aquamarine;
    }
  }
}
</style>