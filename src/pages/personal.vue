<template>
  <div class="personal">
     <div class="headerIcon">
       <span>
         <img src="http://imgtu.5011.net/uploads/content/20170209/4934501486627131.jpg" alt="用户头像"/>
       </span>
     </div>
     <div class="listItem" v-for='item,index in listData' @click="goRecord(index)">
       <div class="listTitle">{{item.title}}</div>
        <div class="listContainer">
          <span :class="item.icon"></span>
          <span>{{item.content}}</span>
        </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'personal',
  data(){
    return{
      listData:[{title:'用户名',icon:'icon-person-user',content:'Dennis GloryLeee'},
                {title:'个人积分',icon:'icon-person-coin',content:'500分'},
                {title:'乌托邦排名',icon:'icon-person-num',content:'第一名'},
                {title:'交易记录',icon:'icon-person-link',content:'交易记录'}]
    }
  },
  methods: {
    goRecord:function (e) {
      if (e === 3) {
        this.$router.push('/record');
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin';
.personal{
  margin: 0 1rem;
  padding: 0.45rem 0 2.5rem 0;
  .headerIcon{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 2rem 0 0.7rem 0;
    span{
      @include borderRadius(1.8rem);
      @include wh(3.6rem,3.6rem);
      overflow: hidden;
      img{
        width: 100%;
        height: auto;
      }
    }
  }
  .listItem{
    display: flex;
    flex-direction: column;
    margin-top: 1rem;
    .listTitle{
      @include sc(0.6rem, $sfc);
    }
    .listContainer{
      @include setBorder();
      @include wh(100%, 2.8rem);
      border-left: 0.15rem solid $bfc;
      display: flex;
      flex-direction: row;
      align-items: center;
      margin-top: 0.5rem;
      box-shadow: 0 0.55rem 0.7rem -0.5rem $bc;
      span:nth-of-type(1){
        @include sc(1.2rem, #d1d9da);
        margin-left: 0.85rem;
      }
      span:nth-of-type(2){
        @include sc(0.8rem, $mfc);
        margin-left: 1rem;
      }
    }

  }
}

</style>
