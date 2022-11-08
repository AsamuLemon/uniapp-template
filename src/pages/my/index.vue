<template>
  <div>
    我的
  </div>
</template>
<script lang='ts' setup>
// import axios from 'utils/axios'
// import { ref } from 'vue'
import { onLoad,onShow } from '@dcloudio/uni-app'
 
onLoad(()=>{
    console.log('我的加载了')
})
onShow(()=>{
    console.log(111)
})

</script>
<style lang='scss' scoped>
 
</style>
