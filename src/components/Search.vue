<script lang="ts">
export default {
  name: 'Search',
}
</script>

<script setup lang="ts">
import { ref } from 'vue';
import SvgIcons from './SvgIcons.vue';

let searchText:any = ref('');

// const filter:any = async () => {
//   const search:any = searchText.value.toLowerCase();
//   const students:any = document.getElementById('students');
//   const rows:any = students.getElementsByTagName('tr');

//   for (let i:any = 0; i < rows.length; i++) {
//     const firstCol:any = rows[i].getElementsByTagName('td')[1];
//     const secondCol:any = rows[i].getElementsByTagName('td')[2];
//     const thirdCol:any = rows[i].getElementsByTagName('td')[3];
//     const fourthCol:any = rows[i].getElementsByTagName('td')[4];

//     if (
//       firstCol.innerText.toLowerCase().indexOf(search) > -1 ||
//       secondCol.innerText.toLowerCase().indexOf(search) > -1 ||
//       thirdCol.innerText.toLowerCase().indexOf(search) > -1 ||
//       fourthCol.innerText.toLowerCase().indexOf(search) > -1
//     ) {
//       rows[i].style.display = '';
//     } else {
//       rows[i].style.display = 'none';
//     }

//     // if (firstCol) {
//     //   const lang = firstCol.innerText
//     //   const sLang = secondCol.innerText
//     //   const tLang = thirdCol.innerText
//     //   const fLang = fourthCol.innerText
//     //   rows[i].style.display = ((lang.toUpperCase().indexOf(search) > -1) || (sLang.toUpperCase().indexOf(search) > -1) || (tLang.indexOf(search) > -1) || (fLang.toUpperCase().indexOf(search) > -1)) ? '' : 'none'
//     // }
//   }
// }

const close:any = async () => {
  searchText.value = ''
}
</script>

<template>
  <div class="flex items-center">
    <div class="bg-[#F1F1F133] border xl:w-[308px] px-4 p-2 flex mr-4 rounded-lg">
      <slot name="input">
        <span class="w-auto text-opacity-30 flex justify-end items-center text-grey p2">
            <SvgIcons name="search"  />
            <!-- <SvgIcons name="search" @click="filter"  /> -->
        </span>
        <input class="rounded placeholder:opacity-50 text-sm p-[6px] bg-[#F1F1F133] focus:outline-none" @keyup.esc="close" v-model="searchText" type="text" placeholder="What you looking for">
      </slot>
    </div>
  </div>
</template>

