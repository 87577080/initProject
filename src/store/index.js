import vue from 'vue';
import vuex from 'vuex';
import mutationTypes from './mutationTypes';

vue.use(vuex);

export default new vuex.Store({

    state: {
        delivery: {
            deliveryType: 1,
            trader: {
                "address": "杏石口路136号",
                "addressId": 1041,
                "cityId": 852,
                "cityName": "北京市",
                "countyId": 853,
                "countyName": "东城区",
                "defaultStatus": 2,
                "districtId": 281104,
                "districtName": "东城区 全境",
                "email": "",
                "idCard": "",
                "idType": 0,
                "mobilePhone": "183****5461",
                "postcode": "",
                "prefix": "86",
                "provinceId": 851,
                "provinceName": "北京",
                "tel": "",
                "userCode": 45563011,
                "userName": "**丹"
            }
        },
        //1、快递，2、上门自取，3、身份证电子票，4、二维码电子票
        deliveryTypes: [1, 2, 3, 4],
        consignee: [
            {
                "address": "杏石口路136号",
                "addressId": 1041,
                "cityId": 852,
                "cityName": "北京市",
                "countyId": 853,
                "countyName": "东城区",
                "defaultStatus": 2,
                "districtId": 281104,
                "districtName": "东城区 全境",
                "email": "",
                "idCard": "",
                "idType": 0,
                "mobilePhone": "183****5461",
                "postcode": "",
                "prefix": "86",
                "provinceId": 851,
                "provinceName": "北京",
                "tel": "",
                "userCode": 45563011,
                "userName": "**丹"
            }
        ],
        //计算后的城市id
        computedCityId: 852,
        //订单信息，渲染标题和列表
        orderInfo: {
            "itemInfos": [ //订单详情
                {
                    "floorName": "M空间",
                    "id": "373314986",
                    "price": 10,
                    "rowNo": "11",
                    "seatNo": "29",
                    "standName": "M空间（原五棵松体育馆训练馆）"
                },
                {
                    "floorName": "M空间",
                    "id": "373315076",
                    "price": 10,
                    "rowNo": "8",
                    "seatNo": "32",
                    "standName": "M空间（原五棵松体育馆训练馆）"
                },
                {
                    "floorName": "M空间",
                    "id": "373315261",
                    "price": 10,
                    "rowNo": "7",
                    "seatNo": "38",
                    "standName": "M空间（原五棵松体育馆训练馆）"
                }]
        }
    },
    mutations: {
        [mutationTypes.CHANGE_DELIVERY_TYPE](state, deliveryType){
            state.delivery.deliveryType = deliveryType;
        }
    }
});
