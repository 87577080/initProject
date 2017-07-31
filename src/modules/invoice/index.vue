<script>
  export default {
    name: 'invoice',
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
    <div class="box" id="invoice">
        <div class="m-invoice">
            <div class="hd">
                <h2 class="tt">我要开发票</h2>
                <a class="u-check" href="javascript:;"></a>
            </div>
            <div class="bd">
                <div class="m-fm z-hide">
                    <div class="row">
                        <label class="lab">发票抬头</label>
                        <div class="ipt">
                            <input type="text" class="u-ipt" placeholder="请输入公司名称1~30字">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>   
</template>
<style>

</style>