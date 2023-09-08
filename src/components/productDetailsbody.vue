<script lang="ts">
    export default {
        name: 'productDetailBody'
    }
</script>

<script setup lang="ts">

    let rating:any = 4
    let topeRating:any = 5

</script>

<template>
    <div class="grid bg-white lg:content-start px-[74px] pb-[60px]">
        <div class="grid content-start">
            <div class="relative my-[63px]">
                <p class="absolute text-[120px] font-extrabold leading-[151px] text-opacity-5 -top-14 -left-2">
                    Overview
                </p>
                <p class="text-[26px] leading-[33px] tracking-[5%]">
                    Product Information
                </p>
            </div>
            <hr class="w-full mt-1" />
            <div class="mt-[50px] grid grid-cols-10">
                <div class="col-span-4">
                    <p class="text-[15px] font-bold tracking-[5%] text-grey leading-[19px]">
                        DESCRIPTION:
                    </p>
                </div>
                <div class="col-span-6">
                    <ul class="text-primary font-light text-sm tracking-[5%] text-justify leading-[26px] pl-3">
                        <li class="list-disc">
                            Made with high-quality, lightweight and breathable fabric
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-[50px] grid grid-cols-10">
                <div class="col-span-4">
                    <p class="text-[15px] font-bold tracking-[5%] text-grey leading-[19px]">
                        UNITS LEFT:
                    </p>
                </div>
                <div class="col-span-6">
                    <p>
                        {{  }} 8
                    </p>
                </div>
            </div>
            <div class="mt-[50px] grid grid-cols-10">
                <div class="col-span-4">
                    <p class="text-[15px] font-bold tracking-[5%] text-grey leading-[19px]">
                        SHIPPING:
                    </p>
                </div>
                <div class="col-span-6">
                    <ul class="text-primary font-light text-sm tracking-[5%] text-justify leading-[26px]">
                        <li>
                            Free shipping on orders over $75, otherwise $5 standard shipping fee
                        </li>
                    </ul>
                </div>
            </div>
            <div class="mt-[50px] grid grid-cols-10">
                <div class="col-span-4">
                    <p class="text-[15px] font-bold tracking-[5%] text-grey leading-[19px]">
                        RETURNS:
                    </p>
                </div>
                <div class="col-span-6">
                    <ul class="text-primary font-light text-sm tracking-[5%] text-justify leading-[26px]">
                        <li>
                            Free returns within 30 days, provided the product is in its original condition
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="grid content-start mt-11">
            <div class="relative mt-[63px] mb-4">
                <p class="absolute text-[120px] font-extrabold leading-[151px] text-opacity-5 -top-14 -left-2">
                    Reviews
                </p>
                <p class="text-[26px] leading-[33px] tracking-[5%]">
                    Product Reviews
                </p>
            </div>
            <div class="mb-[27px] flex items-center gap-x-[175px]">
                <div>
                    <vue3-star-ratings
                        class="stars"
                        v-model="rating"
                        :disableClick="true"
                        inactiveColor="#A8B4D6"

                        :starSize="20"
                        :showControl="false"
                        starColor="#FFC700"
                    />
                </div>
                <div class="flex items-center">
                    <p class="text-sm leading-[18px]">
                        1.340 Transaction
                        <span class="mx-3">
                            |
                        </span>
                        912 Reviews
                    </p>

                </div>
            </div>
            <hr class="w-full mt-1" />
            <div class="mt-[50px] mb-8 grid grid-cols-10 content-start">
                <div class="col-span-4 grid content-start">
                    <p class="text-lg leading-[23px] mb-4">
                        Tope Runkewe
                    </p>
                    <div class="mb-[18px]">
                        <vue3-star-ratings
                            class="stars"
                            v-model="topeRating"
                            :disableClick="true"
                            inactiveColor="#A8B4D6"

                            :starSize="20"
                            :showControl="false"
                            starColor="#FFC700"
                        />
                    </div>
                    <p class="text-xs leading-5 text-grey">
                        January 22, 2021
                    </p>
                </div>
                <div class="col-span-6 grid content-start">
                    <h6 class="mb-4">
                        High quality product
                    </h6>
                    <p class="text-primary font-light text-sm leading-[26px] mb-5">
                        absolutely love this dress! The fabric is so soft and comfortable, and the fit is perfect. I can dress it up or down, and I've received so many compliments every time I wear it. I highly recommend this dress to anyone looking for a versatile and stylish addition to their wardrobe.
                    </p>
                    <div class="flex gap-x-[14px] items-center">
                        <img class="w-[60px] h-[65px]" src="../assets/barney-pdt-details-img-four.png" alt="barney - product details image" />
                        <img class="w-[60px] h-[65px]" src="../assets/barney-pdt-details-img-two.png" alt="barney - product details image" />
                        <img class="w-[60px] h-[65px]" src="../assets/barney-pdt-details-img-three.png" alt="barney - product details image" />
                    </div>
                </div>
            </div>
            <hr class="w-full" />
            <div class="mt-[50px] mb-10 grid grid-cols-10 content-start">
                <div class="col-span-4 grid content-start">
                    <p class="text-lg leading-[23px] mb-4">
                        Bisi Alfred
                    </p>
                    <div class="mb-[18px]">
                        <vue3-star-ratings
                            class="stars"
                            v-model="topeRating"
                            :disableClick="true"
                            inactiveColor="#A8B4D6"

                            :starSize="20"
                            :showControl="false"
                            starColor="#FFC700"
                        />
                    </div>
                    <p class="text-xs leading-5 text-grey">
                        May 1, 2020
                    </p>
                </div>
                <div class="col-span-6 grid content-start">
                    <h6 class="mb-4">
                        Quite satisfied with the service
                    </h6>
                    <p class="text-primary font-light text-sm leading-[26px] mb-5">
                        I was looking for a casual dress to wear on the weekends and this one definitely exceeded my expectations. The colors are vibrant and the quality is excellent. I love the adjustable straps, it makes the dress fit me just right. I'm so happy with my purchase and I'll definitely be back for more
                    </p>
                    <div class="flex gap-x-[14px] items-center">
                        <img class="w-[60px] h-[65px]" src="../assets/barney-pdt-details-img-one.png" alt="barney - product details image" />
                        <img class="w-[60px] h-[65px]" src="../assets/barney-pdt-details-img-three.png" alt="barney - product details image" />
                    </div>
                </div>
            </div>
            <div class="flex items-center justify-center">
                <button class="bg-offwhite shadow-sm text-primary rounded-lg px-[76px] border hover:bg-primary hover:text-offwhite transition-all duration-300">
                    See More Reviews
                </button>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .stars {
        @apply m-0 p-0 flex space-x-3;
    }
</style>