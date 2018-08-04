<template>
  <div class="login">
     <div class="welItem">Welcome!</div>
     <div class="selectItem">
       <span :class="{activeItem:selectLogin}" @click="changeAction(0)">登录</span>
       <span :class="{activeItem:!selectLogin}" @click="changeAction(1)">注册</span>
     </div>
     <transition name="router-fade" mode="out-in">
     <template v-if="selectLogin">
       <div class="contentItem">
         <div class="tipsItem">帐号&amp密码</div>
         <div class="accountItem">
           <div class="leftItem">
             <span class="icon-login-user"></span>
             <span>帐号</span>
           </div>
           <div class="rightItem">
             <input type="text" name="account" placeholder="请输入帐号">
           </div>
         </div>
         <div class="passwdItem">
           <div class="leftItem">
             <span class="icon-login-password"></span>
             <span>密码</span>
           </div>
           <div class="rightItem">
             <input type="password" name="passwd" placeholder="请输入密码">
           </div>
         </div>
         <div class="btnItem">
           <span>登录</span>
         </div>
       </div>
     </template>
     <template v-if="!selectLogin">
       <register></register>
     </template>
   </transition>
  </div>
</template>

<script>
import {setStore} from'../config/mUtils'
import register from './register'
export default {
  name: 'login',
  data(){
    return{
      selectLogin:true
    }
  },
  components:{
    register
  },
  mounted(){
    this.$parent.$data.isShowBack = true;
    this.$parent.$data.navTitle = '登录';
    setStore('userToken','123456789');
  },
  methods:{
    changeAction:function (e) {
      if (1===e) {
        // 去注册
        this.$data.selectLogin = false;
        this.$parent.$data.navTitle = '注册';
      }else {
        // 去登录
        this.$data.selectLogin = true;
        this.$parent.$data.navTitle = '登录';
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin';
.login{
  margin: 0 1rem;
  display: flex;
  flex-direction: column;
  .welItem{
    margin-top: 4rem;
    margin-bottom: 1rem;
    @include sc(1.2rem,$mfc);
  }
  .selectItem{
    margin-bottom: 2.2rem;
    box-shadow: 0 0.55rem 0.7rem -0.5rem $bc;
    @include wh(100%,2.4rem);
    @include setBorder();
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    span{
      @include wh(3.2rem, 1.6rem);
      @include sc(0.6rem, $mfc);
      text-align: center;
      line-height: 1.6rem;
    }
    .activeItem{
      background-color: $bfc;
      color: #fff;
      box-shadow: 0.025rem 0.25rem -0.15rem rgba(117, 155, 250, 0.37);
      @include borderRadius($br5);
    }
  }
}
.contentItem{
  display: flex;
  flex-direction: column;
  .tipsItem{
    @include sc(0.8rem, $mfc);
    @include wh(100%,0.8rem);
    line-height: 0.8rem;
    margin-bottom: 0.85rem;
  }
  .accountItem{
    margin-bottom: 0.5rem;
    box-shadow: 0 0.55rem 0.7rem -0.5rem $bc;
    @include wh(100%,3.5rem);
    @include setBorder();
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    .leftItem{
      @include wh(2.9rem, 3.4rem);
      border-right: 0.05rem solid $bc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(111,148,255,0.06);
      span:nth-of-type(1){
        @include wh(1.2rem, 1.2rem);
        @include sc(1.2rem, $bfc);
      }
      span:nth-of-type(2){
        @include sc(0.5rem, $bfc);
      }
    }
    .rightItem{
      flex: 1;
      padding-left: 1rem;
      input{
        @include wh(100%,3.4rem);
      }
    }
  }
  .passwdItem{
    margin-bottom: 3rem;
    box-shadow: 0 0.55rem 0.7rem -0.5rem $bc;
    @include wh(100%,3.5rem);
    @include setBorder();
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    .leftItem{
      @include wh(2.9rem, 3.4rem);
      border-right: 0.05rem solid $bc;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: rgba(111,148,255,0.06);
      span:nth-of-type(1){
        @include wh(1.2rem, 1.2rem);
        @include sc(1.2rem, $bfc);
      }
      span:nth-of-type(2){
        @include sc(0.5rem, $bfc);
      }
    }
    .rightItem{
      flex: 1;
      padding-left: 1rem;
      input{
        @include wh(100%,3.4rem);
      }
    }
  }
  .btnItem{
    @include wh(100%,2.3rem);
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    span{
      @include wh(7rem,2.3rem);
      @include borderRadius($br5);
      @include sc(0.8rem, #fff);
      text-align: center;
      line-height: 2.3rem;
      background-color: $bfc;
      box-shadow: 0.025rem 0.25rem -0.15rem rgba(117, 155, 250, 0.37);
    }
  }
}


</style>
