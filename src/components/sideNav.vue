<script lang="ts">
	export default {
	name: 'sideNavigation',
	}
</script>

<script setup lang="ts">
    import SvgIcon from './SvgIcons.vue';
    import Search from './Search.vue';
    import vue3starRatings from 'vue3-star-ratings'

    let rating:any = 4.5;
    let ratingb:any = 4.0;
    let ratingbtext:any = '4.0';
    let ratingc:any = 3.0;
    let ratingctext:any = '3.0';
</script>

<template>
    <div class="grid">
        <div class="locale flex items-center mb-6">
            <div class="product-title flex items-center">
                <p class="flex w-[252px] justify-between product-title items-center font-semibold">
                    Product Category
                    <span class="ml[6px]">
                        <SvgIcon name="chevron-down" />
                    </span>
                </p>
            </div>
        </div>
        <div class="menu grid items-center justify-between mb-8">
            <!-- <div class="logo flex items-center">
                <img src="../assets/sambain_logo.png" alt="sambain logo" class="w-[111px] h-[23px]" >
            </div> -->
            <div class="menu-items items-center grid gap-x-10">
                <div class="menu w-[252px] gap-[14px] grid items-center">
                    <p class="flex justify-between cursor-pointer productCat-title active items-center">
                        T Shirts
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        Sweater
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        Jackets
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        Dress
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        Pants
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        Coats
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        Underwear
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        Shoes
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="locale flex items-center mb-6">
            <div class="product-title flex items-center">
                <p class="flex w-[252px] justify-between product-title items-center font-semibold">
                    Product price
                    <span class="ml[6px]">
                        <SvgIcon name="chevron-down" />
                    </span>
                </p>
            </div>
        </div>
        <div class="menu flex items-center w-[252px] gap-x-[15px] justify-between mb-8">
            <ul class="flex gap-x-[15px]">
                <li>
                    <input type="radio" id="size-extra-small" name="size" value="size-extra-small" class="hidden peer" required>
                    <label for="size-extra-small" class="inline-flex line-through border items-center justify-center w-full rounded-2xl py-[7px] px-4 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-primary peer-checked:text-white peer-checked:border hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        N
                    </label>
                </li>
                <li>
                    <input type="radio" id="size-small" name="size" value="size-small" class="hidden peer" required>
                    <label for="size-small" class="inline-flex line-through border items-center justify-center w-full rounded-2xl py-[7px] px-4 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-primary peer-checked:text-white peer-checked:border hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        NN
                    </label>
                </li>
                <li>
                    <input type="radio" id="size-medium" name="size" value="size-medium" class="hidden peer" required>
                    <label for="size-medium" class="inline-flex line-through border items-center justify-center w-full rounded-2xl py-[7px] px-4 text-gray-500 cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:bg-primary peer-checked:text-white peer-checked:border hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
                        NNN
                    </label>
                </li>
            </ul>
        </div>
        <div class="locale flex items-center mb-6">
            <div class="product-title flex items-center">
                <p class="flex w-[252px] justify-between product-title items-center font-semibold">
                    Product Condition
                    <span class="ml[6px]">
                        <SvgIcon name="chevron-down" />
                    </span>
                </p>
            </div>
        </div>
        <div class="menu grid items-center justify-between mb-8">
            <!-- <div class="logo flex items-center">
                <img src="../assets/sambain_logo.png" alt="sambain logo" class="w-[111px] h-[23px]" >
            </div> -->
            <div class="menu-items items-center grid gap-x-10">
                <div class="menu w-[252px] gap-[14px] grid items-center">
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        <span class="flex items-center gap-x-6">
                            <input type="checkbox" name="new" class="accent-primary transform scale-150" />
                            New Product
                        </span>
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        <span class="flex items-center gap-x-6">
                            <input type="checkbox" name="secondhand" class="accent-primary transform scale-150" />
                            Second-hand
                        </span>
                        <span class="ml[6px]">
                            <SvgIcon name="chevron-right" />
                        </span>
                    </p>
                </div>
            </div>
        </div>
        <div class="locale flex items-center mb-6">
            <div class="product-title flex items-center">
                <p class="flex w-[252px] justify-between product-title items-center font-semibold">
                    Product Rate
                    <span class="ml[6px]">
                        <SvgIcon name="chevron-down" />
                    </span>
                </p>
            </div>
        </div>
        <div class="menu grid items-center justify-between mb-8">
            <!-- <div class="logo flex items-center">
                <img src="../assets/sambain_logo.png" alt="sambain logo" class="w-[111px] h-[23px]" >
            </div> -->
            <div class="menu-items items-center grid gap-x-10">
                <div class="menu w-[252px] gap-[14px] grid items-center">
                    <p class="flex productCat-title items-center gap-x-6">
                        <input type="checkbox" name="new" class="accent-primary transform scale-150" />
                        <vue3-star-ratings
                            class="stars"
                            v-model="rating"
                            :disableClick="true"
                            inactiveColor="#A8B4D6"

                            :starSize="20"
                            :showControl="false"
                            starColor="#FFC700"
                        />
                        {{ rating }}
                    </p>
                    <p class="flex productCat-title items-center gap-x-6">
                        <input type="checkbox" name="new" class="accent-primary transform scale-150" />
                        <vue3-star-ratings
                            class="stars"
                            v-model="ratingb"
                            :disableClick="true"
                            inactiveColor="#A8B4D6"

                            :starSize="20"
                            :showControl="false"
                            starColor="#FFC700"
                        />
                        {{ ratingbtext }}
                    </p>
                    <p class="flex productCat-title items-center gap-x-6">
                        <input type="checkbox" name="new" class="accent-primary transform scale-150" />
                        <vue3-star-ratings
                            class="stars"
                            v-model="ratingc"
                            :disableClick="true"
                            inactiveColor="#A8B4D6"

                            :starSize="20"
                            :showControl="false"
                            starColor="#FFC700"
                        />
                        {{ ratingctext }}
                    </p>
                </div>
            </div>
        </div>
        <div class="locale flex items-center mb-6">
            <div class="product-title flex items-center">
                <p class="flex w-[252px] justify-between product-title items-center font-semibold">
                    Courier List
                    <span class="ml[6px]">
                        <SvgIcon name="chevron-down" />
                    </span>
                </p>
            </div>
        </div>
        <div class="menu grid items-center justify-between mb-8">
            <!-- <div class="logo flex items-center">
                <img src="../assets/sambain_logo.png" alt="sambain logo" class="w-[111px] h-[23px]" >
            </div> -->
            <div class="menu-items items-center grid gap-x-10">
                <div class="menu w-[252px] gap-[14px] grid items-center">
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        <span class="flex items-center gap-x-6">
                            <input type="checkbox" name="new" class="accent-primary transform scale-150" />
                            Jumia Express
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        <span class="flex items-center gap-x-6">
                            <input type="checkbox" name="secondhand" class="accent-primary transform scale-150" />
                            Konga
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        <span class="flex items-center gap-x-6">
                            <input type="checkbox" name="new" class="accent-primary transform scale-150" />
                            Kwik
                        </span>
                    </p>
                    <p class="flex justify-between cursor-pointer productCat-title items-center">
                        <span class="flex items-center gap-x-6">
                            <input type="checkbox" name="secondhand" class="accent-primary transform scale-150" />
                            Gokada
                        </span>
                    </p>
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

    .active {
        @apply bg-primary text-white text-[15px];
    }

    .stars {
        @apply m-0 p-0 flex space-x-3;
    }
</style>