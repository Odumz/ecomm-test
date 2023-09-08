<script lang="ts">
    export default {
  components: { breadcrumb },
        name: 'ProductDetails'
    }
</script>

<script setup lang="ts">
    import ProductDetails from '../../components/productDetails.vue';
    import detailsBody from '../../components/productDetailsbody.vue';
    import breadcrumb from '../../components/breadcrumb.vue';

    const name:any = localStorage.getItem('LS_FROM_NAME');
    const url:any = localStorage.getItem('LS_FROM_PATH');
</script>

<template>
    <div class="px-5 sm:px-10 lg:px-[95px] xl:px-[135px] pt-8 bg-offwhite pb-[100px]">
        <breadcrumb class="mb-8" :name="name" :url="url" currentPageName="Product Details" />
        <ProductDetails />
        <detailsBody />
    </div>
</template>