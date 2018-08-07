<template>
  <div class="markt">
     <div class="goodItem" v-for="item in items">
       <div class="goodIcon">
         <img :src="item.goodIcon" alt="商品图">
       </div>
       <div class="contentDsp">
         <div class="goodTitle">{{item.goodTitle}}</div>
         <div class="limitScore">
           <template v-for="n in 5" :class="currentClass(n)">
             <span v-if="item.limitScore > n" class="highlight">★</span>
             <span v-else class="disHiglight">★</span>
             </template>
           <span>(购买资格)</span>
         </div>
         <div class="goodPrice">{{item.goodPrice}}</div>
       </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'markt',
  data(){
    return{
      items:[{goodIcon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3534807377,442263572&fm=27&gp=0.jpg',goodTitle:'宅男杀手系列口红',limitScore:'2.1',goodPrice:'￥120'},
             {goodIcon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4161647857,1189896921&fm=27&gp=0.jpg',goodTitle:'精品挂饰',limitScore:'3.1',goodPrice:'￥110'},
             {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3813392290,988219785&fm=27&gp=0.jpg',goodTitle:'女神减肥茶',limitScore:'4.1',goodPrice:'￥10'},
             {goodIcon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3834864155,2119650618&fm=27&gp=0.jpg',goodTitle:'小恶魔儿童玩具',limitScore:'5.1',goodPrice:'￥30'},
             {goodIcon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2428135267,459453647&fm=27&gp=0.jpg',goodTitle:'精美女神钱包',limitScore:'2.1',goodPrice:'￥1100'},
             {goodIcon:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1780752605,1055958581&fm=27&gp=0.jpg',goodTitle:'玫瑰精油',limitScore:'1.1',goodPrice:'￥11000'},
             {goodIcon:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1632630935,3901414894&fm=27&gp=0.jpg',goodTitle:'儿童轮滑鞋',limitScore:'0',goodPrice:'￥88'},
             {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2191652143,3483111804&fm=27&gp=0.jpg',goodTitle:'艺术照',limitScore:'2',goodPrice:'￥99'},
             {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1418608848,2571104781&fm=27&gp=0.jpg',goodTitle:'男士皮带',limitScore:'1',goodPrice:'￥180'},
             {goodIcon:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743945145,1307703687&fm=27&gp=0.jpg',goodTitle:'女神包包',limitScore:'3',goodPrice:'￥199'},
             {goodIcon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=534409345,3066794557&fm=27&gp=0.jpg',goodTitle:'菊花精油',limitScore:'4',goodPrice:'￥299'},
             {goodIcon:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4253406840,4294018587&fm=27&gp=0.jpg',goodTitle:'神秘道具',limitScore:'5',goodPrice:'￥310'},
             {goodIcon:'http://pic14.photophoto.cn/20100127/0036036848818577_b.jpg',goodTitle:'女神大礼包',limitScore:'6',goodPrice:'￥1990'}
           ]
    }
  },
  computed: {
    currentClass: function (e) {
      console.log(e);
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin';
.markt{
  margin: 0 1rem;
  padding: 0.45rem 0 2.5rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  .goodItem{
    @include wh(8.1rem, 10.4rem);
    @include setBorder();
    margin-top: 0.55rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 0.55rem 0.7rem -0.5rem $bc;
    .goodIcon{
      @include wh(100%, 5.6rem);;
      overflow: hidden;
      img{
        display: inline-block;
        width: 100%;
        height: auto;
      }
    }
    .contentDsp{
      display: flex;
      flex-direction: column;
      justify-content: center;;
      align-items: center;
      .goodTitle{
        @include sc(0.6rem, $mfc);
        @include wh(100%, 0.8rem);
        margin-top: 0.8rem;
        line-height: 0.8rem;
        text-align: center;
        overflow: hidden;
      }
      .limitScore{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        margin-top: 0.45rem;
        span{
          font-size: 0.8rem;
          line-height: 0.7rem;
          margin: 0.012rem;
        }
        span:nth-of-type(6){
          @include sc(0.4rem, #bec4c8);
          font-weight: 800;
          margin-left: 0.25rem;
        }
        .highlight{
          color: $shc;
        }
        .disHiglight{
          color: $sdhc;
        }
      }
      .goodPrice{
        @include sc(0.8rem, $bfc);
        font-weight: 500;
      }
    }
  }
}
img{
  width: 100px;
  height: 100px;
}
</style>
