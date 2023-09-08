<script lang="ts">
    import { Ref, ref } from 'vue'
	export default {
	name: 'Header',
	}
</script>

<script setup lang="ts">
    import SvgIcon from './SvgIcons.vue';
    import Search from './Search.vue';
    import modal from '../components/modal.vue';
    import AddProduct from '../components/addProduct.vue';

    const showAddProduct:Ref<boolean> = ref(false);

    const emits = defineEmits(['close']);

    const hideModal:any = () => {
        showAddProduct.value = false;
        emits('close')
    }
</script>

<template>
    <div class="grid px-5 sm:px-10 lg:px-[95px] xl:px-[135px]">
        <div class="locale flex items-center justify-between my-[10px]">
            <div class="location flex items-center">
                <p class="flex items-center font-semibold">
                    My location
                    <span class="mx-[6px] text-lg">
                        <SvgIcon name="location" />
                    </span>
                    Lagos, Nigeria
                </p>
            </div>
            <div class="lang flex items-center">
                <p class="flex items-center">
                    English
                    <span class="ml-[6px]">
                        <SvgIcon name="chevron-down" />
                    </span>
                </p>
            </div>
        </div>
        <div class="menu flex items-center justify-between lg:h-[66px]">
            <div class="logo flex items-center">
                <router-link to="/">
                    Ecomms
                </router-link>
            </div>
            <div class="menu-items items-center flex gap-x-10">
                <div class="search flex items-center">
                    <Search />
                </div>
            </div>
            <div class="user flex items-center gap-x-[18px]">
                <div class="user flex items-center gap-x-4">
                    <div class="grid">
                        <p class="flex justify-end">
                            Hello
                        </p>
                        <p class="flex justify-end text-sm font-bold leading-[18px]">
                            Estonia U.
                        </p>
                    </div>
                    <div class="img">
                        <img src="../assets/profile1.png" alt="user profile image" class="w-9 h-9 rounded-full border-2 border-white" />
                    </div>
                </div>
                <div class="add-product_btn">
                    <button class="btn btn-secondary_green btn_edit" @click.prevent="showAddProduct = true">
                        Add Product
                    </button>
                    <modal :show="showAddProduct" @close="hideModal" className="w-3/4 right-0" containerClassName="justify-end">
                        <AddProduct @close="hideModal" />
                    </modal>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .locale {
        @apply text-xs leading-[15px];
    }

    .menu {
        @apply text-[13px] leading-4;
    }
</style>