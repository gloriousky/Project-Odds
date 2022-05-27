<template>
  <Tooltip :content="t('widgets.actions.search.tooltip')">
    <a
      href="#"
      class="text-gray-500 hover:text-gray-900 cursor-pointer hover:bg-gray-100 rounded flex justify-center items-center w-8 h-8"
      @click.prevent="onClick"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
        />
      </svg>
    </a>
  </Tooltip>
</template>
<script>
import useI18n from "@/hooks/use-i18n";
import Tooltip from "@/widgets/tooltip";

export default {
  name: "ActionSearch",
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
