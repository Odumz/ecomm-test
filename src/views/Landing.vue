<script lang="ts">
    export default {
        name: 'Products',
    }
</script>

<script setup lang="ts">
import cards from '../components/cards.vue';
import pagination from '../components/pagination.vue';

</script>

<template>
  <div class="grid px-5 sm:px-10 lg:px-[95px] xl:px-[135px]">
    <div class="flex justify-between gap-11">
      <div class="products mb-[100px]">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5 gap-y-9 justify-items-center mb-11">
          <cards name="product">
            <template #productImage>
              <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed ranglan sweatshirt" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
            </template>
            <template #productName>
              Brushed Raglan Sweatshirt
            </template>
            <template #productCategory>
              Long Dress
            </template>
            <template #productPrice>
              $195.00
            </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Bomber
              </template>
              <template #productCategory>
                  Jacket
              </template>
              <template #productPrice>
                  $225.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Flex Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $175.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed ranglan sweatshirt" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Raglan Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $195.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Bomber
              </template>
              <template #productCategory>
                  Jacket
              </template>
              <template #productPrice>
                  $225.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Flex Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $175.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed ranglan sweatshirt" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Raglan Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $195.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Bomber
              </template>
              <template #productCategory>
                  Jacket
              </template>
              <template #productPrice>
                  $225.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Flex Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $175.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed ranglan sweatshirt" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Raglan Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $195.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Bomber
              </template>
              <template #productCategory>
                  Jacket
              </template>
              <template #productPrice>
                  $225.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Flex Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $175.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed ranglan sweatshirt" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Raglan Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $195.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Bomber
              </template>
              <template #productCategory>
                  Jacket
              </template>
              <template #productPrice>
                  $225.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Flex Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $175.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed ranglan sweatshirt" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Raglan Sweatshirt
              </template>
              <template #productCategory>
                  Long Dress
              </template>
              <template #productPrice>
                  $195.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                  <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                  Brushed Bomber
              </template>
              <template #productCategory>
                Jacket
              </template>
              <template #productPrice>
                $225.00
              </template>
          </cards>
          <cards name="product">
              <template #productImage>
                <img src="https://res.cloudinary.com/odumz/image/upload/v1624959118/samples/ecommerce/accessories-bag.jpg" alt=" brushed bomber" class="h-[394px] w-[370px] xl:w-full xl:h-full" />
              </template>
              <template #productName>
                Flex Sweatshirt
              </template>
              <template #productCategory>
                Long Dress
              </template>
              <template #productPrice>
                $175.00
              </template>
          </cards>
        </div>
        <pagination />
      </div>
    </div>
  </div>
</template>