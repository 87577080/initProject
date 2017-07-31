<template src="./index.html"></template>

<script>
    import {mapState} from 'vuex';
    import mutationTypes from '../../store/mutationTypes';

    import tabbar from './tabbar.vue';
    import qrcodeDelivery from './qrcodeDelivery.vue';
    import idcardDelivery from './idcardDelivery.vue';
    import expressDelivery from './expressDelivery.vue';
    import selftakeDelivery from './selftakeDelivery.vue';

    export default {
        name: 'delivery',
        components:{
            tabbar,
            'qrcode-delivery': qrcodeDelivery,
            'idcard-delivery': idcardDelivery,
            'express-delivery': expressDelivery,
            'selftake-delivery': selftakeDelivery
        },
        computed: mapState([
            'deliveryTypes',
            'delivery'
        ])
    }
</script>
