<template>
  <div class="register">
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
      <div class="passwdItem">
        <div class="leftItem">
          <span class="icon-login-password"></span>
          <span>密码</span>
        </div>
        <div class="rightItem">
          <input type="password" name="passwd" placeholder="请再次输入密码">
        </div>
      </div>
      <div class="btnItem">
        <span>注册</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin';
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
    margin-bottom: 0.5rem;
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
    margin-top: 3rem;
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
