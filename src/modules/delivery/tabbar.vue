<template>
    <div class="nav">
        <a class="itm" v-if="deliveryTypes.includes(4)"
           v-bind:class="{ 'z-sel' : delivery.deliveryType == 4}"
           v-on:click="changeDeliveryType(4)"
           href="javascript:;">
            <i class="icon icon-qrcode"></i>
            <span class="txt">二维码<br>电子票</span>
        </a>
        <a class="itm" v-if="deliveryTypes.includes(3)"
           v-bind:class="{ 'z-sel' : delivery.deliveryType == 3}"
           v-on:click="changeDeliveryType(3)"
           href="javascript:;">
            <i class="icon icon-idcard"></i>
            <span class="txt">身份证<br>电子票</span>
        </a>
        <a class="itm" v-if="deliveryTypes.includes(1)"
           v-bind:class="{ 'z-sel' : delivery.deliveryType == 1}"
           v-on:click="changeDeliveryType(1)"
           href="javascript:;">
            <i class="icon icon-express"></i>
            <span class="txt">快递</span>
        </a>
        <a class="itm" v-if="deliveryTypes.includes(2)"
           v-bind:class="{ 'z-sel' : delivery.deliveryType == 2}"
           v-on:click="changeDeliveryType(2)"
           href="javascript:;">
            <i class="icon icon-self"></i>
            <span class="txt">上门自取</span>
        </a>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    import mutationTypes from '../../store/mutationTypes';

    export default {
        name: 'deliveryTabbar',
        computed: mapState([
            'deliveryTypes',
            'delivery'
        ]),
        methods: {
            changeDeliveryType(deliveryType){
                this.$store.commit(mutationTypes.CHANGE_DELIVERY_TYPE,deliveryType);
            }
        }
    }

</script>
