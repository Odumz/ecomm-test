<script lang="ts">
    export default {
        name: 'Checkout'
    }
</script>

<script setup lang="ts">
    import checkout from '../components/checkout.vue';
</script>

<template>
    <div class="px-5 sm:px-10 lg:px-[95px] xl:px-[135px] pt-8 bg-offwhite pb-[100px]">
        <checkout />
    </div>
</template>