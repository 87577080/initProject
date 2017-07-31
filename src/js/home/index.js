import Vue from 'vue';
import vueResource from 'vue-resource';
import Button from 'components/button/index.vue';

Vue.use(vueResource);

new Vue({
    el: '#app',
    data: {
        'h2Title': '这是vue注入的h2标题',
        'buttonText': '按钮文字'
    },
    components:{
        Button
    },
    methods: {

    },
    created(){
        this.$http.get('/ajaxHandler/test').then(data=>{
            console.info(data.data);
        });
    }
});
