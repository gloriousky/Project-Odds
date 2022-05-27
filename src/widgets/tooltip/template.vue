<template>
  <div
    ref="template"
    :class="['tooltip', `tooltip--${position.direction}`]"
    :style="style"
  >
    <div
      class="tooltip__arrow"
      :class="`tooltip__arrow--${position.arrow}`"
    ></div>
    <div class="tooltip__inner">
      <slot />
    </div>
  </div>
</template>

<script>
import { ref, computed, inject } from "vue";

export default {
  name: "TooltipTemplate",

  setup() {
    const template = ref();
    const trigger = inject("TRIGGER");
    const position = inject("POSITION");
    const style = computed(() => {
      if (!template.value) return "";

      const { x, y, width, height } = trigger.value.getBoundingClientRect();
      const actualWidth = template.value.offsetWidth;
      const actualHeight = template.value.offsetHeight;

      let offsetLeft = 0,
        offsetTop = 0;
      switch (position.value.direction) {
        case "right":
          offsetLeft = x + window.pageXOffset + width;
          offsetTop = y + window.pageYOffset - actualHeight / 2 + height / 2;
          break;
        case "left":
          offsetLeft = x + window.pageXOffset - actualWidth;
          offsetTop = y + window.pageYOffset - actualHeight / 2 + height / 2;
          break;
        case "bottom":
          offsetLeft = x + window.pageXOffset - actualWidth / 2 + width / 2;
          offsetTop = y + window.pageYOffset + height;
          break;
        case "top":
          offsetLeft = x + window.pageXOffset - actualWidth / 2 + width / 2;
          offsetTop = y + window.pageYOffset - actualHeight;
          break;
      }

      return `transform: translate3d(${offsetLeft}px,${offsetTop}px,0)`;
    });

    return {
      template,
      style,
      position,
    };
  },
};
</script>

<style lang="scss">
.tooltip {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 50;

  &__inner {
    padding: 0.5rem 0.75rem;
    color: #fff;
    font-weight: 500;
    font-size: 0.875rem;
    font-style: normal;
    line-height: 1.25rem;
    letter-spacing: normal;
    text-align: center;
    word-wrap: break-word;
    word-break: normal;
    word-spacing: normal;
    background-color: rgb(17 24 39);
    border-radius: 0.5rem;
    line-break: auto;
  }

  &__arrow {
    position: absolute;
    display: block;
    width: 0.8rem;
    height: 0.4rem;
    &::before {
      position: absolute;
      border-color: transparent;
      border-style: solid;
      content: "";
    }
  }
}

.tooltip--top {
  padding: 0.4rem 0;
  & .tooltip__arrow {
    bottom: 0;
    &--start {
      left: 0.5rem;
    }
    &--center {
      left: calc(50% - 0.4rem);
    }
    &--end {
      right: 0.5rem;
    }
    &::before {
      top: 0;
      border-width: 0.4rem 0.4rem 0;
      border-top-color: rgb(17 24 39);
    }
  }
}

.tooltip--right {
  padding: 0 0.4rem;
  & .tooltip__arrow {
    left: 0;
    width: 0.4rem;
    height: 0.8rem;
    &--start {
      top: 0.4rem;
    }
    &--center {
      top: calc(50% - 0.4rem);
    }
    &--end {
      bottom: 0.4rem;
    }
    &::before {
      right: 0;
      border-width: 0.4rem 0.4rem 0.4rem 0;
      border-right-color: rgb(17 24 39);
    }
  }
}

.tooltip--bottom {
  padding: 0.4rem 0;
  & .tooltip__arrow {
    top: 0;
    &--start {
      left: 0.5rem;
    }
    &--center {
      left: calc(50% - 0.4rem);
    }
    &--end {
      right: 0.5rem;
    }

    &::before {
      bottom: 0;
      border-width: 0 0.4rem 0.4rem;
      border-bottom-color: rgb(17 24 39);
    }
  }
}

.tooltip--left {
  padding: 0 0.4rem;
  & .tooltip__arrow {
    right: 0;
    width: 0.4rem;
    height: 0.8rem;
    &--start {
      top: 0.4rem;
    }
    &--center {
      top: calc(50% - 0.4rem);
    }
    &--end {
      bottom: 0.4rem;
    }
    &::before {
      left: 0;
      border-width: 0.4rem 0 0.4rem 0.4rem;
      border-left-color: rgb(17 24 39);
    }
  }
}
</style>
