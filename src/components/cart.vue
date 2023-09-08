<script lang="ts">
    export default {
        name: 'CartItems'
    }
</script>

<script setup lang="ts">
	import { useRouter } from 'vue-router';
    import SvgIcons from './SvgIcons.vue';
    import card from './cards.vue';

    let rating:any = 4
    let topeRating:any = 5

    const router:any = useRouter();

    const goto:any = async () => {
        router.push({path: '/checkout'})
    }

</script>

<template>
    <div class="grid bg-white lg:content-start px-[74px] pb-[60px]">
        <div class="grid content-start">
            <div class="relative my-[61px]">
                <p class="absolute text-[120px] font-extrabold leading-[151px] text-opacity-5 -top-14 -left-2">
                    Cart List
                </p>
                <p class="text-[26px] text-primary leading-[33px] tracking-[5%]">
                    Shopping Cart
                </p>
            </div>
            <hr class="w-full mt-1" />
            <div class="mt-[50px] grid grid-cols-16">
                <div class="col-span-10 grid">
                    <card name="cart" />
                    <hr class="my-8" />
                    <card name="cart">
                        <template #image>
				            <img src="../assets/barney-cart-cameryn-two.png" alt="barney - cart item" class="w-[137px] h-[137px]" />
                        </template>
                    </card>
                    <hr class="my-8" />
                    <card name="cart">
                        <template #image>
				            <img src="../assets/barney-cart-cameryn-three.png" alt="barney - cart item" class="w-[137px] h-[137px]" />
                        </template>
                    </card>
                    <hr class="my-8" />
                    <card name="cart">
                        <template #image>
				            <img src="../assets/barney-cart-cameryn-four.png" alt="barney - cart item" class="w-[137px] h-[137px]" />
                        </template>
                    </card>
                </div>
                <div class="col-span-6 ml-[90px]">
                    <div class="bg-offwhite p-6">
                        <h5 class="font-bold text-base leading-[20px] text-primary mb-6">
                            Order Summary
                        </h5>
                        <hr class="mb-5" />
                        <p class="text-sm font-light leading-[18px] flex justify-between mb-6">
                            Quantity
                            <span class="font-semibold">
                                5 Product
                            </span>
                        </p>
                        <p class="text-sm font-light leading-[18px] flex justify-between">
                            Weight
                            <span class="font-semibold">
                                &lt;100Lbs
                            </span>
                        </p>
                        <hr class="my-5" />
                        <p class="text-sm font-light leading-[18px] flex justify-between mb-6">
                            Sub Total
                            <span class="font-semibold">
                                $140
                            </span>
                        </p>
                        <p class="text-sm font-light leading-[18px] flex justify-between mb-6">
                            Tax
                            <span class="font-semibold">
                                $5
                            </span>
                        </p>
                        <p class="text-sm font-light leading-[18px] flex justify-between mb-6">
                            Duty Fee
                            <span class="font-semibold">
                                $3
                            </span>
                        </p>
                        <p class="text-sm font-light leading-[18px] flex justify-between">
                            Shipping Fee
                            <span class="font-semibold">
                                $13
                            </span>
                        </p>
                        <hr class="my-5" />
                        <p class="text-sm font-semibold leading-[18px] flex items-center justify-between mt-[7px]">
                            Total
                            <span class="font-bold leading-[23px] tracking-[10%] text-[18px]">
                                $161
                            </span>
                        </p>
                    </div>
                    <div class="grid mt-6">
                        <button @click.prevent="goto" class="flex justify-center">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .stars {
        @apply m-0 p-0 flex space-x-3;
    }
</style>