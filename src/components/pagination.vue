<script lang="ts">
    export default {
        name: 'pagination'
    }
</script>

<script setup lang="ts">
    import SvgIcon from './SvgIcons.vue'
</script>

<template>
    <div class="flex items-center gap-x-2 justify-between">
        <div class="flex items-center justify-center px-4 py-3 text-sm rounded-full border hover:bg-primary hover:text-white">
            <SvgIcon name="chevron-left" />
        </div>
        <div class="flex items-center justify-center gap-x-2">
            <div class="flex items-center justify-center px-4 py-3 text-sm rounded-full border hover:bg-primary hover:text-white">
                1
            </div>
            <div class="flex items-center justify-center px-4 py-3 text-sm rounded-full border hover:bg-primary hover:text-white">
                2
            </div>
            <div class="flex items-center justify-center px-4 py-3 text-sm rounded-full border hover:bg-primary hover:text-white">
                ...
            </div>
            <div class="flex items-center justify-center px-4 py-3 text-sm rounded-full border hover:bg-primary hover:text-white">
                16
            </div>
        </div>
        <div class="flex items-center justify-center px-4 py-3 text-sm rounded-full border hover:bg-primary hover:text-white">
            <SvgIcon name="chevron-right" />
        </div>
    </div>
</template>