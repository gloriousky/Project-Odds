<template>
  <Tooltip :content="t('widgets.actions.clear.tooltip')">
    <a
      href="#"
      class="text-gray-500 hover:text-gray-900 cursor-pointer hover:bg-gray-100 rounded flex justify-center items-center w-8 h-8 text-xl"
      @click.prevent="onClick"
    >
      <i class="fas fa-eraser"></i>
    </a>
  </Tooltip>
</template>
<script>
import useI18n from "@/hooks/use-i18n";
import Tooltip from "@/widgets/tooltip";

export default {
  name: "ActionClear",
  emits: ["click"],
  components: {
    Tooltip,
  },
  setup(_, { emit }) {
    const { t } = useI18n();

    const onClick = async () => {
      emit("click");
    };

    return {
      t,
      onClick,
    };
  },
};
</script>
