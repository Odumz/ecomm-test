<script lang="ts">
    export default {
        name: 'productDetailHero'
    }
</script>

<script setup lang="ts">
    import SvgIcons from './SvgIcons.vue';
</script>

<template>
    <div class="grid lg:flex lg:justifybetween lg:content-start">
        <div class="flex gap-6 mr-[88px] lg:flex-col">
            <img class="w-[134px] h-[143px]" src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt="barney - product details image" />
            <img class="w-[134px] h-[143px]" src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt="barney - product details image" />
            <img class="w-[134px] h-[143px]" src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt="barney - product details image" />
        </div>
        <div class="mr-[31px]">
            <img class="w-[578px] object-cover h-[603px]" src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt="barney - product details image" />
        </div>
        <div class="grid content-start">
            <div class="flex items-center gap-5 text-grey mb-[50px] justify-start">
                <div class="border rounded-full bg-white flex items-center justify-center p-3 hover:bg-primary hover:text-white transition-all duration-300">
                    <SvgIcons name="link" />
                </div>
                <div class="border bg-white rounded-full flex items-center justify-center p-3 hover:bg-primary hover:text-white transition-all duration-300">
                    <SvgIcons name="share" />
                    <span class="ml-1">Share</span>
                </div>
            </div>
            <div class="relative mb-[90px]">
                <p class="absolute text-[120px] font-extrabold leading-[151px] text-opacity-5 -top-14 -left-2">
                    Dress
                </p>
                <p class="text-[26px] leading-[33px] tracking-[5%]">
                    Cameryn Sash Tie Dress
                </p>
            </div>
            <div class="grid relative mb-10">
                <p class="mb-4 text-xl font-semibold">
                    SKU
                </p>
                <p>
                    {{  }}87tg878tg7
                </p>
            </div>
            <div class="flex gap-6 items-center">
                <button class="flex gap-2">
                    <SvgIcons name="cart" />
                    Add to Cart
                </button>
                <p class="font-bold text-2xl tracking-[10%] leading-[30px] text-primary">
                    <span class="line-through">N</span>{{  }}5450.00
                </p>
            </div>
        </div>
    </div>
</template>