<template>
  <div>
    <div ref="trigger">
      <slot name="trigger" :is-open="isOpen" @open="onOpen" />
    </div>
    <teleport to="body">
      <div
        v-if="isOpen"
        ref="content"
        class="fixed top-0 left-0 text-base list-none bg-white rounded shadow overflow-y-auto z-60 opacity-100"
        :style="style"
      >
        <slot name="content" :is-open="isOpen" @close="onClose" />
      </div>
    </teleport>
    <teleport to="body">
      <div v-if="isOpen" class="fixed inset-0 z-50" @click.stop="onClose"></div>
    </teleport>
  </div>
</template>

<script>
import { ref, reactive, onMounted, watch, computed } from "vue";

export default {
  name: "Dropdown",
  props: {
    placement: {
      type: String,
      default: "left",
      validator: function (value) {
        return value === "left" || value == "right";
      },
    },
    menuHeight: {
      type: String,
      default: "auto",
      validator: function (value) {
        return value === "auto" || value == "fixed";
      },
    },
  },
  emits: ["dropdown", "open", "close"],
  setup(props, { emit }) {
    const trigger = ref();
    const content = ref();
    const options = reactive({
      placement: props.placement,
      menuHeight: props.menuHeight,
    });
    const isOpen = ref(false);

    const style = computed(() => {
      if (!content.value) return "";

      let returnStyle = "";
      const { x, y, width, height } = trigger.value.getBoundingClientRect();
      const offsetHeight = content.value.offsetHeight;
      const offsetWidth = content.value.offsetWidth;

      let posX, posY, maxH;
      const remainH = window.innerHeight - y - height;

      if (options.placement === "left") {
        posX = x;
      } else {
        posX = x + width - offsetWidth;
      }

      if (options.menuHeight === "auto") {
        // auto
        maxH = remainH <= y ? y * 0.9 : remainH * 0.9;
      } else {
        // fixed
        maxH = 200;
        // auto 不寫入限高
        returnStyle += `max-height:${maxH}px;`;
      }
      if (remainH <= y) {
        posY = y - Math.min(offsetHeight, maxH);
      } else {
        posY = y + height;
      }

      returnStyle += `transform: translate3d(${posX}px, ${posY}px, 0px);`;

      return returnStyle;
    });

    onMounted(() => {
      emit(
        "dropdown",
        reactive({
          trigger,
          isOpen,
          onOpen,
          onClose,
        })
      );
    });

    watch(isOpen, (flag) => {
      if (flag) {
        document.body.classList.add("overflow-hidden");
        emit("open");
      } else {
        document.body.classList.remove("overflow-hidden");
        emit("close");
      }
    });

    const onOpen = () => {
      isOpen.value = true;
    };

    const onClose = () => {
      isOpen.value = false;
    };

    return {
      trigger,
      content,
      style,
      isOpen,
      onOpen,
      onClose,
      options,
    };
  },
};
</script>
