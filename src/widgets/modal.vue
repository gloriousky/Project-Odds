<template>
  <teleport to="body">
    <div
      v-if="isShow"
      class="overflow-y-auto overflow-x-hidden fixed z-50 inset-0"
    >
      <div
        class="relative px-3 w-full h-auto mt-16 mx-auto animate__animated animate__fadeInUp animate__faster"
        :class="{
          'max-w-md': size === 'xs',
          'max-w-lg': size === 'sm',
          'max-w-4xl': size === 'md',
          'max-w-7xl': size === 'lg',
        }"
      >
        <div class="relative bg-white rounded-lg shadow">
          <div
            class="flex justify-between items-center px-5 py-3 rounded-t border-b"
          >
            <h3 class="text-xl font-medium text-gray-900">
              <slot name="title"></slot>
            </h3>
            <button
              type="button"
              class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
              @click="onClose"
            >
              <svg
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div class="px-5 py-3">
            <slot name="body"></slot>
          </div>
          <div
            class="flex items-center px-5 py-3 space-x-1 rounded-b border-t border-gray-200"
            :class="{ hidden: hideFooter }"
          >
            <slot name="footer" @close="onClose"></slot>
          </div>
        </div>
      </div>
    </div>
    <transition
      name="fade"
      enter-active-class="animate__animated animate__fadeIn animate__faster"
      leave-active-class="animate__animated animate__fadeOut animate__faster"
    >
      <div
        v-if="isShow"
        class="bg-gray-900 bg-opacity-50 fixed inset-0 z-40"
      ></div>
    </transition>
  </teleport>
</template>

<script>
import { watch, ref, onMounted } from "vue";

export default {
  emits: [
    "update:show",
    "beforeShow",
    "afterShown",
    "beforeHide",
    "afterHidden",
  ],
  name: "modal",
  props: {
    show: {
      type: Boolean,
      default: false,
    },
    hideFooter: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      default: "md",
      validator(val) {
        return ["xs", "sm", "md", "lg"].includes(val);
      },
    },
  },
  setup(props, { emit }) {
    const onClose = () => {
      emit("update:show", false);
    };
    const isShow = ref();
    const duration = 600;
    const onShowUpdated = (flag) => {
      if (flag) {
        // eslint-disable-next-line vue/custom-event-name-casing
        emit("beforeShow");
        isShow.value = true;
        setTimeout(() => {
          // eslint-disable-next-line vue/custom-event-name-casing
          emit("afterShown");
        }, duration);
      } else {
        // eslint-disable-next-line vue/custom-event-name-casing
        emit("beforeHide");
        isShow.value = false;
        setTimeout(() => {
          // eslint-disable-next-line vue/custom-event-name-casing
          emit("afterHidden");
        }, duration);
      }
    };

    onMounted(() => {
      if (props.show) onShowUpdated(props.show);
    });
    watch(() => props.show, onShowUpdated);

    return {
      isShow,
      duration,
      onClose,
    };
  },
};
</script>
<style lang="css" scoped>
@keyframes fadeInUp {
  0% {
    -webkit-transform: translate3d(0, 15%, 0);
    transform: translate3d(0, 15%, 0);
    opacity: 0.5;
  }
  to {
    -webkit-transform: translateZ(0);
    transform: translateZ(0);
    opacity: 1;
  }
}
.animate__fadeInUp {
  -webkit-animation-name: fadeinup;
  animation-name: fadeInUp;
}
</style>
