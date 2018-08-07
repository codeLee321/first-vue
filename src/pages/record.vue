<template>
  <div class="record">
     <div class="tipsItem">蓝色标志为卖出，红色标志为买入</div>
     <div class="listItem" v-for='item in listData'>
       <div class="goodIcon">
         <img :src="item.goodIcon" alt=""/>
       </div>
       <div class="goodContent">
         <div class="title">{{item.goodTitle}}</div>
         <div class="desp">{{item.desp}}</div>
       </div>
       <div class="score">
         <span :class="item.action? 'actClass':'ngtClass'">{{item.action?'+':'-'}}{{item.score}}</span>
       </div>

     </div>
  </div>
</template>

<script>
export default {
  name: 'record',
  data(){
    return{
      listData:[{goodIcon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3534807377,442263572&fm=27&gp=0.jpg',goodTitle:'宅男杀手系列口红',action:1,score:'0.1',desp:'Dennis GloryLee 完成交易，增加积分0.1'},
                {goodIcon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4161647857,1189896921&fm=27&gp=0.jpg',goodTitle:'精品挂饰',action:1,score:'0.5',desp:'Dennis GloryLee 免费共享商品使用权，使用周期1个月，增加积分0.5 Dennis GloryLee 免费共享商品使用权，使用周期1个月，增加积分0.5'},
                {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3813392290,988219785&fm=27&gp=0.jpg',goodTitle:'女神减肥茶',action:1,score:'0.5',desp:'Dennis GloryLee 免费共享商品使用权，使用周期1个月，增加积分0.5'},
                {goodIcon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3834864155,2119650618&fm=27&gp=0.jpg',goodTitle:'小恶魔儿童玩具',action:0,score:'0.5',desp:'Dennis GloryLee 在免费使用他人商品时损坏该商品，扣除积分1.5'},
                {goodIcon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2428135267,459453647&fm=27&gp=0.jpg',goodTitle:'精美女神钱包',action:1,score:'0.1',desp:'Dennis GloryLee 完成交易，增加积分0.1'},
                {goodIcon:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1780752605,1055958581&fm=27&gp=0.jpg',goodTitle:'玫瑰精油',action:1,score:'0.1',desp:'Dennis GloryLee 完成交易，增加积分0.1'},
                {goodIcon:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1632630935,3901414894&fm=27&gp=0.jpg',goodTitle:'儿童轮滑鞋',action:1,score:'0.1',desp:'Dennis GloryLee 完成交易，增加积分0.1'},
                {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2191652143,3483111804&fm=27&gp=0.jpg',goodTitle:'艺术照',action:0,score:'1.0',desp:'Dennis GloryLee 出售的商品与描述不符，扣除积分1.0'},
                {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1418608848,2571104781&fm=27&gp=0.jpg',goodTitle:'男士皮带',action:1,score:'1.5',desp:'Dennis GloryLee 向该平台捐赠20本书籍支援灾区学生，增加积分2.5'},
                {goodIcon:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743945145,1307703687&fm=27&gp=0.jpg',goodTitle:'女神包包',action:1,score:'0.1',desp:'Dennis GloryLee 完成交易，增加积分0.1'},
                {goodIcon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=534409345,3066794557&fm=27&gp=0.jpg',goodTitle:'菊花精油',action:0,score:'0.5',desp:'Dennis GloryLee 被实名举报在交易过程中出现临时加价行为，扣除积分0.5'},
                {goodIcon:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4253406840,4294018587&fm=27&gp=0.jpg',goodTitle:'神秘道具',action:1,score:'0.5',desp:'Dennis GloryLee 免费共享商品使用权，使用周期1个月，增加积分0.5'},
                {goodIcon:'http://pic14.photophoto.cn/20100127/0036036848818577_b.jpg',goodTitle:'女神大礼包',action:1,score:'0.5',desp:'Dennis GloryLee 免费共享商品使用权，使用周期1个月，增加积分0.5'}]
    }
  },
  mounted(){
    this.$parent.$data.isShowBack = true;
    this.$parent.$data.navTitle = '交易记录';
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin';
.record{
  margin: 0 1rem;
  padding: 0.45rem 0 2.5rem 0;
  .tipsItem{
    @include sc(0.6rem, $sfc);
    margin:2rem 0 0.5rem 0;
  }
  .listItem{
    @include setBorder();
    display: flex;;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    box-shadow: 0 0.55rem 0.7rem -0.5rem $bc;
    margin-bottom: 1.1rem;
    .goodIcon{
      margin: 0.6rem 0.8rem 0 0.6rem;
      img{
        @include wh(3rem, 3rem);
        @include borderRadius($br5);
      }
    }
    .goodContent{
      display: flex;
      flex-direction: column;
      width: 9.5rem;
      margin: 0.5rem 0 0.6rem 0;
      .title{
        @include sc(0.7rem, $mfc);

      }
      .desp{
        @include sc(0.5rem, $sfc);
        margin-top: 0.5rem;
      }
    }
    .score{
      margin: 0.6rem 0.8rem 0 0;
      span{
        @include wh(1.9rem, 1.9rem);
        @include borderRadius($br5);
        display: inline-block;
        text-align: center;
        line-height: 1.8rem;
      }
      .actClass{
        color: $bfc;
        background-color: rgba(111, 148, 255, 0.1);
      }
      .ngtClass{
        color: #ec3063;
        background-color: rgba(237, 100, 141, 0.1);
      }

    }
  }
}
</style>
