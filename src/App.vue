<template>
  <div id="app">
    <nav-bar :title="navTitle" :isShowBack="isShowBack"></nav-bar>
    <div class="contentx">
      <transition name="router-fade" mode="out-in">
  			<keep-alive>
  			    <router-view v-if="$route.meta.keepAlive"></router-view>
  			</keep-alive>
    	</transition>
      <transition name="router-fade" mode="out-in">
  			<router-view v-if="!$route.meta.keepAlive"></router-view>
  		</transition>
    </div>


  </div>
</template>

<script>
import navBar from './components/navBar'
export default {
  name: 'App',
  data(){
    return{
            navTitle: '首页',   // 导航标题
            isShowBack: false, // 是否显示返回箭头
        }
  },
  components:{
    navBar
  },
  methods:{
    goBack:function () {
      this.$router.go(-1);
    }
  }
}
</script>

<style lang="scss">
  @import './styles/common';
  @import './styles/style.css';

  .contentx{
    width: 100%;
    margin-top: 2.25rem;
  }
  .router-fade-enter-active, .router-fade-leave-active {
	  	transition: opacity .3s;
	}
	.router-fade-enter, .router-fade-leave-active {
	  	opacity: 0;
	}

</style>
