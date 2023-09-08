<script lang="ts">
    export default {
        name: 'Products',
    }
</script>

<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import breadcrumb from '../../components/breadcrumb.vue'
import { useRoute } from 'vue-router';
import Navigation from '../../components/sideNav.vue'

const routeName:any = computed(() => {
    return useRoute().name
})

const bread_crumb:any = computed(() => {
    // console.log('sddsd', routeName)
    return routeName.value == 'AllProducts' ? 'All Products' : routeName.value == 'FemaleProducts' ? 'Female Products' : routeName.value == 'MaleProducts' ? 'Male Products' : routeName.value == 'KidsProducts' ? 'Kids Products' : 'Popular Products'
})
</script>

<template>
    <div class="grid px-5 sm:px-10 lg:px-[95px] xl:px-[135px]">
        <breadcrumb class="my-8" :name="bread_crumb" />
        <div class="flex justify-between gap-11">
            <!-- {{ routeName }} -->
            <div class="w-1/5 min-h-screen">
                <Navigation class="" />
            </div>
            <div class="main w-4/5 overflow-x-hidden">
                <!-- <TopNavigation class="fixed z-10" /> -->
                <router-view />
            </div>
        </div>
    </div>
    <!-- <breadcrumb class="bg-offwhite" />
    <home /> -->
</template>