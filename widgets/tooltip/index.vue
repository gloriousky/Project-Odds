<template>
  <component
    ref="trigger"
    :is="tag"
    @mouseenter="mouseEnterHandler"
    @mouseleave="mouseLeaveHandler"
  >
    <slot></slot>
    <teleport to="body">
      <TooltipTemplate v-if="templateRender">
        {{ content }}
      </TooltipTemplate>
    </teleport>
  </component>
</template>

<script>
import { ref, computed, provide } from "vue";
import { split, indexOf } from "ramda";
import TooltipTemplate from "./template";

export default {
  name: "Tooltip",
  components: { TooltipTemplate },
  props: {
    content: {
      type: String,
      required: true,
    },

    tag: {
      type: String,
      default: "span",
    },

    /**
     * Tooltip position, relative to the trigger element
     */
    placement: {
      type: String,
      default: "top",
      validator: function (value) {
        return (
          indexOf(value)([
            "top",
            "bottom",
            "left",
            "right",
            "top-start",
            "top-end",
            "bottom-start",
            "bottom-end",
            "left-start",
            "left-end",
            "right-start",
            "right-end",
          ]) > -1
        );
      },
    },
  },
  setup(props) {
    const trigger = ref();
    const templateRender = ref(false);
    const position = computed(() => {
      const [direction, arrow = "center"] = split("-", props.placement);
      return {
        direction,
        arrow,
      };
    });

    const mouseEnterHandler = () => {
      templateRender.value = true;
    };

    const mouseLeaveHandler = () => {
      templateRender.value = false;
    };

    provide("TRIGGER", trigger);
    provide("POSITION", position);

    return {
      trigger,
      templateRender,
      position,
      mouseEnterHandler,
      mouseLeaveHandler,
    };
  },
};
</script>
