<script lang="ts">
	export default {
		name: 'Cards',
	}
</script>

<script setup lang="ts">
    import SvgIcon from './SvgIcons.vue';
	import { useRouter } from 'vue-router';
    import { toRefs } from 'vue'
    const props:any = defineProps({
        name: {
            type: String,
        },
    })
    const { name } = toRefs(props)

	const router:any = useRouter();

	const goto:any = async () => {
		router.push({path: '/product/details'})
	}
</script>

<template>
	<div v-if="name == 'product'" class="grid" @click="goto">
		<div class="grid mb-4">
			<slot name="productImage">
				<img src="../assets/sambain_brushed_ranglan_sweatshirt.png" alt=" brushed ranglan sweatshirt" class="h-[296px] w-[278px] xl:w-full xl:h-full" />
			</slot>
		</div>
		<div class="text">
			<h6 class="mb-2">
				<slot name="productName">
					Sweatpants
				</slot>
			</h6>
			<p class="mb-4 text-xs">
				<slot name="productCategory">
					Sweater
				</slot>
			</p>
			<p class="text-base leading-[20px] font-semibold text-primary">
				<slot name="productPrice">
					$475.00
				</slot>
			</p>
		</div>
	</div>
	<div v-else-if="name == 'cart'" class="flex gap-6 justify-between">
		<div class="flex gap-6">
			<div>
				<slot name="image">
					<img src="../assets/barney-cart-cameryn.png" alt="barney - cart item" class="w-[137px] h-[137px]" />
				</slot>
			</div>
			<div class="grid content-start mr-12">
				<h5 class="font-light text-xl leading-[25px] mb-2">
					Cameryn Sash Tie Dress
				</h5>
				<p class="text-grey text-[13px] font-semibold leading-[16px] mb-3">
					Dress
				</p>
				<div class="flex justify-between">
					<p class="text-[13px] font-semibold leading-[22px]">
						Delivery Estimation
					</p>
					<p class="text-sm leading-[18px]">
						Size: <span class="font-semibold">S</span>
					</p>
				</div>
				<p class="text-[#FFC700] text-sm font-semibold mb-3 leading-[22px]">
					5 Working Days
				</p>
				<p class="text-base text-primary font-bold leading-[20px] tracking-[10%]">
					$35.8
				</p>
			</div>
		</div>
		<div class="grid justify-items-end content-start">
			<SvgIcon name="trash" class="text-grey mb-[88px]" />
			<div>
				<p class="flex text-base font-semibold gap-[11px] items-center">
					<span class="bg-offwhite border rounded-full px-3 py-1">-</span>
					1
					<span class="bg-white border-[2px] border-primary rounded-full px-3 py-1">+</span>
				</p>
			</div>
		</div>
	</div>
</template>