<template>
    <div class="itm"
         v-if="deliveryTypes.includes(1)"
         v-bind:class="{ 'z-show': delivery.deliveryType == 1 }">
        <div class="express">
            <div class="row">
                <span class="name">收货人：李刚的</span>
                <span class="phone">15989878956</span>
            </div>
            <div class="row">
                <span class="addr">北京市朝阳区北苑路红军营南路天朗园奥城3333号17楼216室</span>
            </div>
        </div>
        <div class="m-fm">
            <div class="row">
                <label class="lab">身份证</label>
                <div class="ipt">
                    <input type="text" class="u-ipt" placeholder="请输入二代身份证号">
                </div>
            </div>
        </div>

    </div>
</template>
<script>
    import {mapState} from 'vuex';

    export default {
        name: 'expresslivery',
        computed: mapState([
            'delivery',
            'deliveryTypes'
        ])
    }

</script>
