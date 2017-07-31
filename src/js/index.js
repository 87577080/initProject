import Vue from 'vue';
import vueResource from 'vue-resource';

//样式
import '../dmui/dmui.less';
import '../assets/less/pages/trade.less';
import deliveryAPP from 'modules/delivery/index.vue';  //配送方式
import detailsAPP from 'modules/details/index.vue';  //详情
import insuranceAPP from 'modules/insurance/index.vue';  //保险
import invoiceAPP from 'modules/invoice/index.vue';  //开发票
import payApp from 'modules/pay/index.vue';     //支付
import privilegeApp from 'modules/privilege/index.vue';   //优惠
import settlementApp from 'modules/settlement/index.vue';  //结算

import store from '../store/index';

new Vue({
    el: '#app',
    store,
    components: {
        'delivery-app': deliveryAPP,
        'details-app': detailsAPP,
        'insurance-app': insuranceAPP,
        'invoice-app': invoiceAPP,
        'pay-app': payApp,
        'privilege-app': privilegeApp,
        'settlement-app': settlementApp
    },
    created(){

    }
});




