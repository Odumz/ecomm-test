import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api_url } from '../config';
import { addData } from '../helper/api';

let baseUrl:string = `${api_url}/orders`;

export const useOrderStore = defineStore('order', () =>{
    const orderPayload:any = reactive({
        totalQuantity: 0,
        totalPrice: 0,
        customerFirstName: '',
        customerLastName: '',
        customerEmail: '',
        orderItems: [
            {
                unitPrice: 0,
                quantity: 0,
                productId: 0
            }
        ],
        shippingAddress: {
            street: '',
            city: '',
            state: '',
            country: ''
        },
        billingAddress: {
            street: '',
            city: '',
            state: '',
            country: ''
        }
    });

    const CreateOrder:any = async (payload:{}) => {
        const orderData:any = await addData(baseUrl, payload);

        if (orderData?.status == 200) {
            return orderData;
        } else if (orderData?.status == 400) {
            return orderData;
        }
    }

    return {
        CreateOrder,
        orderPayload,
    }
});