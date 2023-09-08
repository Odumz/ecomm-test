<script lang="ts">
    export default {
        name: 'checkoutform'
    }
</script>

<script setup lang="ts">
    import SvgIcons from './SvgIcons.vue';
    import card from './cards.vue';
    import multistepcontent from './multistepcontent.vue';
</script>

<template>
    <div class="grid bg-white lg:content-start px-[74px] pb-[60px]">
        <div class="grid content-start">
            <div class="relative my-[61px]">
                <p class="absolute text-[120px] font-extrabold leading-[151px] text-opacity-5 -top-14 -left-2">
                    Checkout
                </p>
                <p class="text-[26px] text-primary leading-[33px] tracking-[5%]">
                    Checkout Process
                </p>
            </div>
            <hr class="w-full mt-1" />
            <div class="mt-[50px] grid">
                <multistepcontent />
            </div>
        </div>
    </div>
</template>

<style scoped>
    .stars {
        @apply m-0 p-0 flex space-x-3;
    }
</style>