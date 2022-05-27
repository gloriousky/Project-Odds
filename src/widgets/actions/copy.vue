<template>
  <Tooltip :content="t('widgets.actions.copy.tooltip')">
    <a
      href="#"
      class="text-gray-600 hover:text-gray-900 cursor-pointer py-1 px-1.5 hover:bg-gray-100 rounded inline-flex justify-center"
      @click.prevent="onClick"
    >
      <svg
        class="w-3 h-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <i class="far fa-copy"></i>
      </svg>
    </a>
  </Tooltip>
  <input
    type="text"
    class="outside"
    :id="`copy-${copyText}`"
    :value="copyText"
  />
</template>
<script>
import { useStore } from "vuex";
import useI18n from "@/hooks/use-i18n";
import Tooltip from "@/widgets/tooltip";
export default {
  name: "ActionCopy",
  components: {
    Tooltip,
  },
  props: {
    copyText: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const store = useStore();
    const { t } = useI18n();

    const onClick = async () => {
      try {
        const content = document.getElementById(`copy-${props.copyText}`);

        content.select();
        document.execCommand("copy");
        store.commit("app/set/alert", {
          type: "success",
          message: t("feedback.copy.success"),
        });
      } catch (e) {
        store.commit("app/set/alert", {
          type: "danger",
          message: t("feedback.copy.failed"),
        });
      }
    };

    return {
      t,
      onClick,
    };
  },
};
</script>

<style lang="scss" scoped>
.outside {
  position: absolute;
  left: -999px;
}
</style>
