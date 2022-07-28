<template>
  <router-view/>
</template>
<script lang="ts">
import {provide, nextTick, defineComponent, reactive, toRefs} from "vue";

export default defineComponent({
  setup(){
    const data  = reactive({
      isRouterAlive:true
    });
    const reload = () => {
      data.isRouterAlive = false;
      nextTick(() => {
        data.isRouterAlive = true
      })
    }
    provide("reload", reload);
    return{
      ...toRefs(data)
    }
  },
})
</script>
<style lang="less">

</style>
