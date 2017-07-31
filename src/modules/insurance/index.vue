<script>
  export default {
    name: 'insurance',
    data() {
      return {
        activeStyle: '',
        type: ''
      }
    },
    vuex: {
      getters: {
       
      },
      actions: {   

      }
    }   
  }
</script>    
<template> 
    <div class="box" id="insurance">
    <div class="hd">
        <h2 class="tt">安心订票保险（20元）</h2>
        <a class="u-check" href="javascript:;"></a>
    </div>
    <div class="mb10">
        <p class="mb5 m_f14 m_caaa">因自身原因未能观看演出可申请理赔哦！</p>
        <a href="#" class="m_c108 m_f14">(查看保险服务说明)</a>
    </div>


    
    <!-- 安心保险提示 begin -->
    <div class="m-layer m-layer-code z-hide">
        <div class="hd">
            <h2 class="tt1">勾选保险须填写真实姓名</h2>
        </div>
        <div class="bd m-addsuccess">
            <a class="u-btn u-btn-c2 u-btn-lg" href="javascript:;">我知道了</a>
        </div>
    </div>
    <!-- 安心保险提示 end -->

</div>
</template>
<style>

</style>