<template>
  <div>
    <div class="flex">
      <div class="contior">
        <van-swipe :autoplay="0" indicator-color="white" class="contior1">
          <van-swipe-item v-for="(item,index) in classify" :key="index">
            <div class="flex">
              <div v-for="(item0,indexs) in item" :key="indexs" class="flex">
                <div class="classify-item">
                  <img :src="urlImg+item0.image_url" alt width="50" />
                  <div>{{item0.title}}</div>
                </div>
              </div>
            </div>
          </van-swipe-item>
        </van-swipe>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classify: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {
    
      urlImg: "https://fuss10.elemecdn.com"
    };
  },
  components: {},
  methods: {
    onChange(index) {
      Toast("当前 Swipe 索引：" + index);
    },
    // getData() {
    //   this.$axios
    //     .req("v2/index_entry")
    //     .then(res => {
    //       for (let i = 0; i < res.length; i += 8) {
    //         this.classify.push(res.slice(i, i + 8));
    //       }
    //     })
    //     .catch(err => {
    //       console.log(err);
    //     });
    // }
  },
  mounted() {
    // this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.contior {
  width: 100%;
  height: 160px;

  .contior1 {
    width: 100%;
    height: 160px;

    .classify-item {
      width: 80px;
      height: 80px;
    }
  }
}
</style>