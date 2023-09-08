<script lang="ts">
  import { defineComponent, Ref, ref, reactive } from 'vue';

  export default defineComponent({
    name: 'AddProduct',
  })
</script>


<script setup lang="ts">
  import { useProductStore } from '../store/product.store';
  import { stringCheck, numberCheck, urlCheck } from '../utils/validator';
  import Spinner from './spinner.vue';
  import Swal from 'sweetalert2'

  const productStore:any = useProductStore();

  const emits = defineEmits(['close', 'displayAlert'])

  const closeModal:any = () => {
    emits('close')
  }

  const productInfo:any = productStore.productPayload

  const isLoading:Ref<boolean> = ref(false);
  const isDisabled:Ref<boolean> = ref(true);

  const hasError:any = reactive({
    name: false,
    sku: false,
    category: false,
    unitPrice: false,
    description: false,
    imageUrl: false,
    unitsInStock: false,
  })

  const hasErrorMsg:any = reactive({
    name: '',
    sku: '',
    category: '',
    unitPrice: '',
    description: '',
    imageUrl: '',
    unitsInStock: '',
  })

  const hasContent:any = () => {
    if (!productInfo?.name || !productInfo?.sku || !productInfo?.category || !productInfo?.unitPrice) {
      isDisabled.value = true;
      console.log(`Has content: ${isDisabled.value}`)
    } else {
      isDisabled.value = false;
      console.log(`Has content: ${isDisabled.value}`)
    }
  }

  const checkError:any = {
    name: async (value:string) => {
      const check:any = await stringCheck(value, 'Product name')
      hasError.name = check.hasError;
      hasErrorMsg.name = check.message;
      hasError.name ? isDisabled.value = true : hasContent();
    },
    sku: async (value:string) => {
      const check:any = await stringCheck(value, 'SKU', 8)
      hasError.sku = check.hasError;
      hasErrorMsg.sku = check.message;
      hasError.sku ? isDisabled.value = true : hasContent();
    },
    category: async (value:string) => {
      const check:any = await stringCheck(value, 'Category')
      hasError.category = check.hasError;
      hasErrorMsg.category = check.message;
      hasError.category ? isDisabled.value = true : hasContent();
    },
    unitPrice: async (value:string) => {
      const check:any = await numberCheck(value, 'Unit price')
      hasError.unitPrice = check.hasError;
      hasErrorMsg.unitPrice = check.message;
      hasError.unitPrice ? isDisabled.value = true : hasContent();
    },
    description: async (value:string) => {
      console.log('i don start to dey check o')
      const check:any = await stringCheck(value, 'Product description', 50)
      hasError.description = check.hasError;
      hasErrorMsg.description = check.message;
      hasError.description ? isDisabled.value = true : hasContent();
    },
    imageUrl: async (value:string) => {
      console.log('i don start to dey check o')
      const check:any = await urlCheck(value)
      hasError.imageUrl = check.hasError;
      hasErrorMsg.imageUrl = check.message;
      hasError.imageUrl ? isDisabled.value = true : hasContent();
    },
    unitsInStock: async (value:string) => {
      const check:any = await numberCheck(value, 'Quantity')
      hasError.unitsInStock = check.hasError;
      hasErrorMsg.unitsInStock = check.message;
      hasError.unitsInStock ? isDisabled.value = true : hasContent();
    }
  }

  const submit:any = async () => {
    isLoading.value = true;
    console.log(`submit this data ${JSON.stringify(productInfo)}`)

    const response:any = await productStore.AddProduct(productInfo)

    console.log(`response in form is ${JSON.stringify(response)}`)
    if (response?.status > 399) {
      Swal.fire({
        title: 'Error!',
        text: response,
        icon: 'error',
        confirmButtonText: 'Close'
      })
      setTimeout(() => {
          isLoading.value = false;
      }, 3000);
    } else if (response?.status == 200) {
      Swal.fire({
        title: 'Success!',
        text: response,
        icon: 'success',
        confirmButtonText: 'Close'
      })
      isLoading.value = false;
    }
  }
</script>

<template>
  <div class="relative grid content-start">
    <div class="header">
      <svg @click="closeModal" class="cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M13.2138 12L19.3661 4.66641C19.4692 4.54453 19.3825 4.35938 19.2231 4.35938H17.3528C17.2427 4.35938 17.1372 4.40859 17.0645 4.49297L11.9903 10.5422L6.91611 4.49297C6.84579 4.40859 6.74032 4.35938 6.62782 4.35938H4.75751C4.59814 4.35938 4.51142 4.54453 4.61454 4.66641L10.7669 12L4.61454 19.3336C4.59144 19.3608 4.57662 19.394 4.57184 19.4293C4.56706 19.4647 4.57252 19.5006 4.58757 19.533C4.60263 19.5653 4.62664 19.5926 4.65676 19.6117C4.68689 19.6308 4.72185 19.6408 4.75751 19.6406H6.62782C6.73798 19.6406 6.84345 19.5914 6.91611 19.507L11.9903 13.4578L17.0645 19.507C17.1349 19.5914 17.2403 19.6406 17.3528 19.6406H19.2231C19.3825 19.6406 19.4692 19.4555 19.3661 19.3336L13.2138 12Z" fill="currentColor"/>
      </svg>
      <p class="text-2xl font-bold">
        Add new product
      </p>
    </div>
    <div class="body">
      <div class="form">
        <div class="grid grid-cols-1 xl:grid-cols-2 gap-x-11 my-14">
          <div class="grid">
            <label for="name" class="form-label">
              Product Name
            </label>
            <div class="relative input mb-11">
              <input type="text" name="name" v-model="productInfo.name" @blur.prevent="checkError.name(productInfo.name)" @keyup.prevent="checkError.name(productInfo.name)" placeholder="Enter product name" class="input-field" :class="[hasError.name ? 'border-red-500' : 'border-[#D9D9D9]']" />
              <p class="error">
                {{ hasErrorMsg.name }}
              </p>
            </div>
          </div>
          <div class="grid">
            <label for="category" class="form-label">
              Category
            </label>
            <div class="relative input mb-11">
              <input type="text" name="category" v-model="productInfo.category" @blur.prevent="checkError.category(productInfo.category)" @keyup.prevent="checkError.category(productInfo.category)" placeholder="Enter category" class="input-field" :class="[hasError.category ? 'border-red-500' : 'border-[#D9D9D9]']" />
              <p class="error">
                {{ hasErrorMsg.category }}
              </p>
            </div>
          </div>
          <div class="grid">
            <label for="imageUrl" class="form-label">
              Image URL
            </label>
            <div class="relative input mb-11">
              <input type="text" name="imageUrl" v-model="productInfo.imageUrl" @blur.prevent="checkError.imageUrl(productInfo.imageUrl)" @keyup.prevent="checkError.imageUrl(productInfo.imageUrl)" placeholder="Enter product image url" class="input-field" :class="[hasError.imageUrl ? 'border-red-500' : 'border-[#D9D9D9]']" />
              <p class="error">
                {{ hasErrorMsg.imageUrl }}
              </p>
            </div>
          </div>
          <div class="grid">
            <label for="sku" class="form-label">
              SKU
            </label>
            <div class="relative input mb-11">
              <input type="text" name="sku" v-model="productInfo.sku" @blur.prevent="checkError.sku(productInfo.sku)" @keyup.prevent="checkError.sku(productInfo.sku)" placeholder="Enter last name" class="input-field" :class="[hasError.sku ? 'border-red-500' : 'border-[#D9D9D9]']" />
              <p class="error">
                {{ hasErrorMsg.sku }}
              </p>
            </div>
          </div>
          <div class="grid">
            <label for="unitPrice" class="form-label">
              Unit Price
            </label>
            <div class="relative input mb-11">
              <input type="text" name="unitPrice" v-model="productInfo.unitPrice" @blur.prevent="checkError.unitPrice(productInfo.unitPrice)" @keyup.prevent="checkError.unitPrice(productInfo.unitPrice)" placeholder="Enter product unit price" class="input-field" :class="[hasError.unitPrice ? 'border-red-500' : 'border-[#D9D9D9]']" />
              <p class="error">
                {{ hasErrorMsg.unitPrice }}
              </p>
            </div>
          </div>
          <div class="grid">
            <label for="unitsInStock" class="form-label">
              Units in stock
            </label>
            <div class="relative input mb-11">
              <input type="text" name="unitsInStock" v-model="productInfo.unitsInStock" @blur.prevent="checkError.unitsInStock(productInfo.unitsInStock)" @keyup.prevent="checkError.unitsInStock(productInfo.unitsInStock)" placeholder="Enter last name" class="input-field" :class="[hasError.unitsInStock ? 'border-red-500' : 'border-[#D9D9D9]']" />
              <p class="error">
                {{ hasErrorMsg.unitsInStock }}
              </p>
            </div>
          </div>
          <div class="grid col-span-2">
            <label for="description" class="form-label">
              Description
            </label>
            <div class="relative input mb-1 text-rezumii-shade-600">
              <textarea placeholder="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sapien, ac adipiscing adipiscing ultricies cras leo. Aliquam ac volutpat massa nunc, cras in consequat." v-model="productInfo.description" @blur.prevent="checkError.description(productInfo.description)" @keyup.prevent="checkError.description(productInfo.description)" class="input-field placeholder:opacity-30" :class="[hasError.description ? 'border-red-500' : 'border-[#D9D9D9]']" rows="5" cols="55" maxlength="700" required></textarea>

              <p class="error textarea-error">
                {{ hasErrorMsg.description }}
              </p>
            </div>
            <p v-if="productInfo?.description && productInfo?.description?.length == 0" class="flex items-center text-grey text-xs font-medium italic">
                  <SvgIcons class="transform scale-50" name="exclamation" />
                  0 - 700 characters
              </p>
              <p v-else class="flex items-center text-grey text-xs font-medium italic">
                  {{ 700 - productInfo?.description?.length }} left
              </p>
          </div>
        </div>
      </div>
      <div class="button">
        <button @click.prevent="submit" :disabled="isDisabled || isLoading" class="save-button btn btn-primary" :class="[isLoading ? 'cursor-not-allowed' : '', isDisabled ? 'opacity-70' : '']">
          Add Product
          <span>
            <Spinner :class="[isLoading ? '' : 'hidden']" />
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .header {
    @apply shadow-md text-black flex items-center gap-8 py-8 px-6 -mx-8 font-medium text-2xl;
  }

  .body {
    @apply grid py-14 px-11 content-start;
  }

  .imageUrl {
    @apply relative justify-self-center;
  }

  .button {
    @apply flex justify-end;
  }

  .save-button {
    @apply w-[284px] flex justify-center items-center gap-4 py-5 text-xl mt-14;
  }

  .textarea-error{
    @apply top-[183px];
  }

  .imageUrl-error{
    @apply top-[83px];
  }
</style>