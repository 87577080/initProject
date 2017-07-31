<template>
    <div class="itm"
         v-if="deliveryTypes.includes(4)"
         v-bind:class="{ 'z-show': delivery.deliveryType == 4 }">
        <div class="m-fm">
            <div class="row">
                <label class="lab">收货人</label>
                <div class="ipt">
                    <input type="text" v-model="delivery.trader.userName" class="u-ipt" placeholder="请输入收货人姓名">
                </div>
            </div>
            <div class="row">
                <label class="lab">手机号</label>
                <div class="ipt">
                    <input type="text" v-model="delivery.trader.mobilePhone" class="u-ipt" placeholder="请输入常用手机号">
                </div>
            </div>
        </div>
        <p class="tips">提示：购买成功后，大麦将会把一个ID和密码发送到您的手机，凭短信到演出地点换取纸质票</p>
    </div>
</template>

<script>
    import {mapState} from 'vuex';

    export default {
        name: 'qrcodeDelivery',
        computed: mapState([
            'delivery',
            'deliveryTypes'
        ])
    }

</script>
