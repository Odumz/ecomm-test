import { defineStore } from 'pinia';
import { reactive } from 'vue';
import { api_url } from '../config';
import { fetchData, addData } from '../helper/api';

let baseUrl:string = `${api_url}/products`;

export const useProductStore = defineStore('product', () =>{
    const productPayload:any = reactive({
        category: '',
        sku: '',
        name: '',
        description: '',
        unitPrice: 0,
        imageUrl: '',
        unitsInStock: 0
    });

    const GetProducts:any = async (offset:number = 1, size:number = 10) => {
        baseUrl += `?offset=${offset}&size=${size}`
        console.log(`I have started to fetch all products with base url of ${baseUrl}`)
        const products:any = await fetchData(baseUrl);
        console.log(`the products now now is ${JSON.stringify(products)}`)

        if (products?.status == 200) {
            return products;
        } else if (products?.status == 400) {
            return products.detail
        }
    }

    const AddProduct:any = async (payload:any) => {
        const newProduct:any = await addData(baseUrl, payload);

        if (newProduct?.status == 200) {
            console.log(`the new product ${JSON.stringify(newProduct)}`)
            return newProduct;
        } else if (newProduct?.status == 400) {
            console.log(`the new product ${JSON.stringify(newProduct)}`)
            return newProduct
        }
    }

    return {
        GetProducts,
        AddProduct,
        productPayload
    }
});