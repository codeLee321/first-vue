<template>
  <div class="tabBar">
    <span :class="{activeItem:isActiveItem}" @click="selectTabbar(0)">首页</span>
    <span :class="{activeItem:!isActiveItem}" @click="selectTabbar(1)">个人</span>
  </div>
</template>

<script>
export default {
  name: 'tabBar',
  data(){
    return{
      isActiveItem:true
    }
  },
  methods:{
    selectTabbar:function (e) {
      if (1 === e) {
        // 个人中心
        this.$data.isActiveItem = false;
      }else {
        // 首页
        this.$data.isActiveItem = true;
      }
      this.$emit('select-tabbar',e);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin';
.tabBar{
  @include wh(100%,2.4rem);
  position: fixed;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span{
    @include wh(8.2rem, 2.4rem);
    @include sc(0.8rem ,$mfc);
    text-align: center;
    line-height: 2.4rem;
  }
  .activeItem{
    background-color: $bfc;
    color: #fff;
    box-shadow: 0.025rem 0.25rem -0.15rem rgba(117, 155, 250, 0.37);
    @include borderRadius(1.2rem);
  }
}
</style>
