<template src="./index.html"></template>
<script>
    export default {
        data() {
            return {
                message: 'Hello Vue!',
                maskToggle: false, //通用遮罩
                couponPolicyToggle: false, //优惠政策
                couponToggle: false
            }
        },
        methods: {
            couponPolicyToggleFN: function () {
                console.log('couponPolicyToggleFN');
                this.couponPolicyToggle = !this.couponPolicyToggle;
                this.maskToggle = !this.maskToggle;
            },
            couponToggleFN(){
                console.log('couponToggleFN');
                this.couponToggle = !this.couponToggle;
                this.maskToggle = !this.maskToggle;
            },
            maskToggleFN(){
                this.maskToggle = !this.maskToggle;
                this.couponToggle = false;
                this.couponPolicyToggle = false;
            }
        }
    };
</script>
