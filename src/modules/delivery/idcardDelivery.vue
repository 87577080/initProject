<template>
    <div class="itm"
         v-if="deliveryTypes.includes(3)"
         v-bind:class="{ 'z-show': delivery.deliveryType == 3 }">
        <div class="m-fm">
            <div class="row">
                <label class="lab">收货人</label>
                <div class="ipt">
                    <input type="text" class="u-ipt" placeholder="请输入收货人姓名">
                </div>
            </div>
            <div class="row">
                <label class="lab">手机号</label>
                <div class="ipt">
                    <input type="text" class="u-ipt" placeholder="请输入常用手机号">
                </div>
            </div>
            <div class="row">
                <label class="lab">身份证</label>
                <div class="ipt">
                    <input type="text" class="u-ipt" placeholder="请输入二代身份证号">
                </div>
            </div>
        </div>
        <p class="tips">提示：支付成功后，凭身份证到演出地点取票</p>
    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: 'idcardDelivery',
        computed: mapState([
            'delivery',
            'deliveryTypes'
        ])
    }

</script>
