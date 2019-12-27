<template>
  <div>
    <div class="top1">
      <Top :city="city"></Top>
    </div>
    <div class="classify">
      <Classify :classify="classify"></Classify>
    </div>
    <div class="spilt"></div>
    <div class="recommend">
      <Recommend :shop=shop></Recommend>
    </div>
  </div>
</template>

<script>
import Top from "../components/home/Top";
import Classify from "../components/home/Classify";
import Recommend from "../components/home/Recommend";
export default {
  data() {
    return {
      loginMsg: null,
      city: "",
      classify: [],
      shop:[],
    };
  },
  components: {
    Top,
    Classify,
    Recommend
  },
  methods: {
    getData() {
      this.$axios
        .req("v1/cities?type=guess")
        .then(res => {
          let a = `v2/pois/${res.latitude},${res.longitude}`;
          this.$axios
            .req(`/shopping/restaurants?latitude=${res.latitude}&longitude=${res.longitude}`)
            .then(res => {
              this.shop = res;
        
            })
            .catch(err => {
              console.log(err);
            });
          this.$axios
            .req(a)
            .then(res => {
              this.city = res.address;
            })
            .catch(err => {
              console.log(err);
            });
        })
        .catch(err => {
          console.log(err);
        });
      this.$axios
        .req("v2/index_entry")
        .then(res => {
          for (let i = 0; i < res.length; i += 8) {
            this.classify.push(res.slice(i, i + 8));
          }
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top1 {
  width: 100%;
  height: 110px;
  background: rgb(11, 94, 143);
}
.classify {
  width: 100%;
  height: 160px;
}
.spilt {
  width: 100%;
  height: 10px;
  background: aliceblue;
}
.recommend{
  margin-bottom: 40px;
}
</style>