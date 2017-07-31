<script>
 import {mapGetters,mapActions} from 'vuex'
  export default {
    name: 'details',
    computed:mapGetters([

    ]),
    data() {
      return {
        postalToggle:false,
        type:''
      }
    },
    methods:{  
        postalToggleFN:function(){
            this.postalToggle = !this.postalToggle; 
        }
    },
    vuex:{
      getters: {
        orderInfo: ({ index }) => index.orderInfo
      },
      actions: {   

      }
    }   
  }
</script>    
<template> 
     <!-- 支付信息 start -->
     <div class="box" id="details">      
         <div class="m-payinfo">  
             <div class="hd">   
                 <h2 class="tt">蔡依林2015世界巡回演唱会-北京站</h2>
             </div>
             <div class="bd">   
                 <div class="info">   
                     <div class="itm">  
                         <div class="txt">时间：2015.09.21</div>
                         <div class="txt" v-text="$store.state.orderInfo.test">场馆：工人体育场</div>     
                     </div>
                     <div class="itm">
                         <div class="price" @click.stop="postalToggleFN()"><span class="rmb"><strong class="cny">&yen;1680</strong>元</span>(3张)
                         </div>
                     </div>     
                 </div>     
             </div>
         </div>   
   
        
      <!-- 遮罩层 start -->       
     <div class="m-mask" v-show="postalToggle" @click.stop="postalToggleFN()"></div>      
     <!-- 遮罩层 end -->      
    
     <!-- 票品列表弹层 start -->   
     <div class="m-layer m-layer-tktlst m-tktlst" v-show="postalToggle">   
         <div class="hd">  
             <span class="col col-1">序号</span>   
             <span class="col col-2">区域</span>       
             <span class="col col-3">座位</span>   
             <span class="col col-4">价格</span>
         </div>
         <div class="bd">   
             <div class="box">    
                 <ul class="lst">
                     <li class="itm" v-for="(item,index) in $store.state.orderInfo.itemInfos">
                         <span class="col col-1">{{index}}</span>
                         <span class="col col-2">{{item.standName}}</span>
                         <span class="col col-3">{{item.rowNo}}</span>
                         <span class="col col-4">{{item.price}}元</span>
                     </li>
                 </ul>
             </div>
         </div>
         <div class="ft">
             <a class="u-btn u-btn-c2 u-btn-lg" href="javascript:;">提交支付</a>
         </div>
     </div>      
     
 </div>
</template>
<style>

</style>