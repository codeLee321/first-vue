<template>
  <div class="markt">
     <div class="goodItem" v-for="item in items">
       <div class="goodIcon">
         <img :src="item.goodIcon" alt="商品图">
       </div>
       <div class="goodTitle">{{item.goodTitle}}</div>
       <div class="limitScore">
         <span v-for="n in 5" class="(item.score>n? highlight:disHiglight">★</span>
         <span>(购买资格)</span>
       </div>
       <div class="goodPrice">{{item.goodPrice}}</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'markt',
  data(){
    return{
      items:[{goodIcon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3534807377,442263572&fm=27&gp=0.jpg',goodTitle:'test1',limitScore:'2.1',goodPrice:'￥120'},
             {goodIcon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=4161647857,1189896921&fm=27&gp=0.jpg',goodTitle:'test2',limitScore:'3.1',goodPrice:'￥110'},
             {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3813392290,988219785&fm=27&gp=0.jpg',goodTitle:'test3',limitScore:'4.1',goodPrice:'￥10'},
             {goodIcon:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3834864155,2119650618&fm=27&gp=0.jpg',goodTitle:'test4',limitScore:'5.1',goodPrice:'￥30'},
             {goodIcon:'https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2428135267,459453647&fm=27&gp=0.jpg',goodTitle:'test5',limitScore:'2.1',goodPrice:'￥1100'},
             {goodIcon:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1780752605,1055958581&fm=27&gp=0.jpg',goodTitle:'test6',limitScore:'1.1',goodPrice:'￥11000'},
             {goodIcon:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1632630935,3901414894&fm=27&gp=0.jpg',goodTitle:'test7',limitScore:'0',goodPrice:'￥88'},
             {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2191652143,3483111804&fm=27&gp=0.jpg',goodTitle:'test8',limitScore:'2',goodPrice:'￥99'},
             {goodIcon:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=1418608848,2571104781&fm=27&gp=0.jpg',goodTitle:'test9',limitScore:'1',goodPrice:'￥180'},
             {goodIcon:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1743945145,1307703687&fm=27&gp=0.jpg',goodTitle:'test10',limitScore:'3',goodPrice:'￥199'},
             {goodIcon:'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=534409345,3066794557&fm=27&gp=0.jpg',goodTitle:'test11',limitScore:'4',goodPrice:'￥299'},
             {goodIcon:'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4253406840,4294018587&fm=27&gp=0.jpg',goodTitle:'test12',limitScore:'5',goodPrice:'￥310'},
             {goodIcon:'http://pic14.photophoto.cn/20100127/0036036848818577_b.jpg',goodTitle:'test13',limitScore:'6',goodPrice:'￥1990'}
           ]
    }
  }
}
</script>

<style lang="scss" scoped>
.markt{
  margin: 0 1rem;
}
img{
  width: 100px;
  height: 100px;
}
</style>
