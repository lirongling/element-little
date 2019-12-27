<template>
 <div>
{{loginMsg}}
 </div>
</template>

<script>
 export default {
   data () {
     return {

     }
   },
   components: {

   },
   methods: {

   },
   mounted() {

   },
   watch: {

   },
   computed: {
 loginMsg () {
        return this.$store.state.loginMsg
      },
   }
 }
</script>

<style scoped lang='scss'>

</style>