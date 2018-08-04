<template>
  <div class="navBar">
     <div class="title">{{title}}</div>
     <span class="icon-arrow-back back" v-if="isShowBack" @click="$router.go(-1)"></span>
  </div>
</template>

<script>
export default {
  props:['title','isShowBack'],
  name: 'navBar'
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin';

.navBar{
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 2.2rem;
  z-index: 1;
  background-color: #fff;
  box-shadow: 0 0.2rem 0.4rem 0 rgba(138,107,118,0.15);
  span{
    @include ct;
    @include sc(0.9rem,$mfc)
    margin-left: 1rem;
  }
}

.title{
  @include center;
  @include sc(0.9rem, $mfc);
}



</style>
