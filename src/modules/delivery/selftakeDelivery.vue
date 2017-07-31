<template>
    <div class="itm"
         v-if="deliveryTypes.includes(2)"
         v-bind:class="{ 'z-show': delivery.deliveryType == 2 }">
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
        <p class="tips">取票地址：北京市东城区东中街32号7层（东环广场街心花园对面），营业时间：工作日9：00-20：00，周末及节假日9：00-18：00</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'selftakeDelivery',
        computed: mapState([
            'delivery',
            'deliveryTypes'
        ])
    }
</script>
