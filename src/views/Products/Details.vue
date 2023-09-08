<script lang="ts">
    export default {
        name: 'ProductDetails'
    }
</script>

<script setup lang="ts">
    import ProductDetails from '../../components/productDetails.vue';
    import detailsBody from '../../components/productDetailsbody.vue';
</script>

<template>
    <div class="px-5 sm:px-10 lg:px-[95px] xl:px-[135px] pt-8 bg-offwhite pb-[100px]">
        <ProductDetails />
        <detailsBody />
    </div>
</template>