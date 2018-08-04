<template>
  <div class="home">
    <markt v-if="isMarkt"></markt>
    <personal v-if="!isMarkt"></personal>
    <tab-bar v-on:select-tabbar="changeContent"></tab-bar>
  </div>
</template>

<script>
import {getStore, setStore, removeStore} from'../config/mUtils'
import tabBar from '../components/tabBar'
import markt from './markt'
import personal from './personal'
export default {
  name: 'home',
  data(){
    return {
      isMarkt:true,
      marktData:''
    }
  },
  components: {
    tabBar,
    markt,
    personal
  },
  beforeCreate(){
    // 验证用户是否登录，如果没有登录跳转到登录页面
    if (getStore('userToken') == null) {
      this.$router.push('/login');
    }
    // 获取首页的数据
  },
  mounted(){
    this.$parent.$data.isShowBack = false;
    this.$parent.$data.navTitle = '首页';
  },
  methods:{
    changeContent:function (e) {
      if (1 === e) {
        // 个人中心
        this.$data.isMarkt = false;
        this.$parent.$data.navTitle = '个人中心';
      }else {
        // 首页
        this.$data.isMarkt = true;
        this.$parent.$data.navTitle = '首页';
      }
    }
  }
}
</script>

<style lang="scss" scoped>



</style>
