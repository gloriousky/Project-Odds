<template>
  <component
    :is="tag"
    @click.prevent="clickHandler"
    :disabled="isDisabled"
    :class="[
      'button',
      `button--${size}`,
      `button--${type}`,
      { 'w-full': full, 'button--disabled': isDisabled },
    ]"
  >
    <div
      v-if="isLoading"
      class="mx-1 my-0.5 loading-spinner animate-spin"
    ></div>
    <slot v-else />
  </component>
</template>

<script>
import { ref, computed } from "vue";
import { includes } from "ramda";

export default {
  name: "WidgetButton",
  props: {
    type: {
      type: String,
      default: "primary",
      validator(val) {
        return includes(val, [
          "primary",
          "cyan",
          "teal",
          "pink",
          "rose",
          "default",
          "dark",
          "light",
          "green",
          "red",
          "yellow",
          "orange",
          "purple",
          "teal",
          "pink",
          "rose",
        ]);
      },
    },
    tag: {
      type: String,
      default: "button",
    },
    size: {
      type: String,
      default: "md",
      validator(val) {
        return includes(val, ["xs", "sm", "md", "lg"]);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    full: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    onClick: {
      type: Function,
      required: true,
    },
    async: {
      type: Boolean,
      default: false,
    },
  },
  emits: ["click"],
  setup(props, { emit }) {
    const isLoading = ref(props.loading);

    const clickHandler = async () => {
      if (props.disabled || isLoading.value) return;

      if (props.async) {
        isLoading.value = true;
        await new Promise((resolve) => {
          emit("click", resolve);
        });
        // eslint-disable-next-line require-atomic-updates
        isLoading.value = false;
        return;
      }

      emit("click", () => {
        throw Error("如果需要使用回調請添加async屬性");
      });
    };

    const isDisabled = computed(() => props.disabled || isLoading.value);

    return {
      isDisabled,
      clickHandler,
      isLoading,
    };
  },
};
</script>
<style lang="scss" scoped>
.loading-spinner {
  position: relative;
  border: 2px solid transparent;
  border-top-color: #fff;
  border-left-color: #fff;
  border-radius: 100%;

  .button--xs & {
    width: 0.8rem;
    height: 0.8rem;
  }
  .button--sm & {
    width: 1rem;
    height: 1rem;
  }
  .button--md & {
    width: 1.1rem;
    height: 1.1rem;
  }
  .button--lg & {
    width: 1.2rem;
    height: 1.2rem;
  }
}
</style>
