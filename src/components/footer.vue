<script lang="ts">
	export default {
	name: 'Footer',
	}
</script>

<script setup lang="ts">
import SvgIcon from './SvgIcons.vue'
</script>

<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 px-5 sm:px-10 lg:px-[95px] xl:px-[135px] content-start mt-[53px] mb-[58px]">
        <div class="grid col-span-1 xl:col-span-2">
            <img src="../assets/sambain_logo.png" alt=" logo" class="w-[111px] h-[18px] mb-[22px]">
            <p class="text-xs leading-[18px] mb-10 w-3/5">
                Collection of African labels that offers a thoughtfully curated high quality everyday essentials made.
            </p>
            <div class="flex gap-[10px]">
                <span class="flex items-center justify-center bg-light-grey text-primary-accent rounded-lg py-[9px] px-[8px]">
                    <SvgIcon name="twitter" />
                </span>
                <span class="flex items-center justify-center bg-light-grey text-primary-accent rounded-lg py-[9px] px-[8px]">
                    <SvgIcon name="facebook" />
                </span>
                <span class="flex items-center justify-center bg-light-grey text-primary-accent rounded-lg py-[9px] px-[8px]">
                    <SvgIcon name="linkedin" />
                </span>
            </div>
        </div>
        <div class="grid text-primary-accent content-start">
            <h6 class="leading-[19px] tracking-[2%] font-bold text-primary-accent mb-5">
                Company
            </h6>
            <router-link to="" class="mb-[10px]">
                About
            </router-link>
            <router-link to="" class="mb-[10px]">
                Terms of Use
            </router-link>
            <router-link to="" class="mb-[10px]">
                Privacy Policy
            </router-link>
            <router-link to="" class="mb-[10px]">
                How it works
            </router-link>
        </div>
        <div class="grid text-primary-accent content-start">
            <h6 class="text-[15px] leading-[19px] tracking-[2%] font-bold text-primary-accent mb-5">
                Support
            </h6>
            <router-link to="" class="mb-[10px]">
                Support Center
            </router-link>
            <router-link to="" class="mb-[10px]">
                24h Service
            </router-link>
            <router-link to="" class="mb-[10px]">
                Quick Chat
            </router-link>
        </div>
        <div class="grid text-primary-accent content-start">
            <h6 class="text-[15px] leading-[19px] tracking-[2%] font-bold text-primary-accent mb-5">
                Contact
            </h6>
            <router-link to="" class="mb-[10px]">
                WhatsApp
            </router-link>
            <router-link to="" class="mb-[10px]">
                Support 24
            </router-link>
            <router-link to="" class="mb-[10px]">
                Contact Us
            </router-link>
        </div>
    </div>
    <div class="copy">
        <hr class="mb-6" />
        <p class="mb-6 px-5 sm:px-10 lg:px-[95px] xl:px-[135px] text-xs">
            Copyright © 2021 Bain Market
        </p>
    </div>
</template>

<style scoped>
    .locale {
        @apply text-xs ;
    }
</style>