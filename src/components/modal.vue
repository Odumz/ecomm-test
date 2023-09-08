<script lang="ts">
export default {
  name: 'ModalDialog',
};
</script>

<script setup lang="ts">
import { ref, watch, toRefs } from 'vue';

const props = defineProps({
  show: {
    type: Boolean,
    default: false,
  },
  className: {
    type: String,
    default: ''
  },
  containerClassName: {
    type: String,
    default: ''
  },
  showCancelButton: {
    type: Boolean,
    default: false
  }
});

const { show, className, containerClassName, showCancelButton } = toRefs(props);
const showModal = ref(false);
const modal = ref(null);

const emits = defineEmits(['close'])

const close:any = () => {
  emits('close')
}

watch(
  () => props.show,
  show => {
    showModal.value = show;
  },
);

</script>

<template>
    <teleport to="body">
        <transition
            enter-active-class="transition ease-out duration-200 transform"
            enter-from-class="opacity-0"
            enter-to-class="opacity-100"
            leave-active-class="transition ease-in duration-200 transform"
            leave-from-class="opacity-100"
            leave-to-class="opacity-0"
        >
            <div
                ref="modal-backdrop"
                class="fixed z-10 inset-0 overflow-y-auto bg-rezumii-black-100 bg-opacity-20"
                v-show="showModal"
            >
              <svg v-if="showCancelButton" @click="close" class="cursor-pointer text-red-800 relative top-[20vh] -right-[93vw]" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M13.2138 12L19.3661 4.66641C19.4692 4.54453 19.3825 4.35938 19.2231 4.35938H17.3528C17.2427 4.35938 17.1372 4.40859 17.0645 4.49297L11.9903 10.5422L6.91611 4.49297C6.84579 4.40859 6.74032 4.35938 6.62782 4.35938H4.75751C4.59814 4.35938 4.51142 4.54453 4.61454 4.66641L10.7669 12L4.61454 19.3336C4.59144 19.3608 4.57662 19.394 4.57184 19.4293C4.56706 19.4647 4.57252 19.5006 4.58757 19.533C4.60263 19.5653 4.62664 19.5926 4.65676 19.6117C4.68689 19.6308 4.72185 19.6408 4.75751 19.6406H6.62782C6.73798 19.6406 6.84345 19.5914 6.91611 19.507L11.9903 13.4578L17.0645 19.507C17.1349 19.5914 17.2403 19.6406 17.3528 19.6406H19.2231C19.3825 19.6406 19.4692 19.4555 19.3661 19.3336L13.2138 12Z" fill="currentColor"/>
              </svg>
                <div
                class="flex items-center h-full pr-1 pt-1 text-center"
                :class="[containerClassName]"
                >
                    <transition
                        enter-active-class="transition ease-out duration-300 transform"
                        enter-from-class="opacity-0 translate-y-10 scale-95"
                        enter-to-class="opacity-100 translate-y-0 scale-100"
                        leave-active-class="ease-in duration-200"
                        leave-from-class="opacity-100 translate-y-0 scale-100"
                        leave-to-class="opacity-0 translate-y-10 translate-y-0 scale-95"
                    >
                        <div
                        class="relative bg-white rounded-lg h-full overflow-y-auto text-left overflow-hidden shadow-md p-8"
                        :class="[className]"
                        role="dialog"
                        ref="modal"
                        aria-modal="true"
                        v-show="showModal"
                        aria-labelledby="modal-headline"
                        >
                        <!-- add dynamic close button -->
                            <slot>I'm empty inside {{ show }}</slot>
                        </div>
                    </transition>
                </div>
            </div>
        </transition>
    </teleport>
</template>