<template>
  <Tooltip :content="content">
    <span class="cursor-pointer hover:text-gray-900" @click="onClick">
      <slot />
      <b v-show="!iconArrow" class="ml-0.5">
        <i class="fas fa-sort"></i>
      </b>
      <b v-show="iconArrow === 'asc'" class="ml-0.5">
        <i class="fas fa-sort-up"></i>
      </b>
      <b v-show="iconArrow === 'desc'" class="ml-0.5">
        <i class="fas fa-sort-down"></i>
      </b>
    </span>
  </Tooltip>
</template>
<script>
import { computed } from "vue";
import useI18n from "@/hooks/use-i18n";
import Tooltip from "@/widgets/tooltip";
export default {
  name: "ActionSort",
  components: {
    Tooltip,
  },
  props: {
    orderName: String,
    orderBy: String,
    defaultOrder: {
      type: String,
      default: "desc",
      validator(val) {
        return ["desc", "asc"].includes(val);
      },
    },
    value: String,
  },
  emits: ["changed", "update:orderName", "update:orderBy"],
  setup(props, { emit }) {
    const { t, setPrefix } = useI18n();
    setPrefix("widgets.actions.sort");

    const content = computed(() => {
      if (props.orderName === props.value) {
        return t(`$current.tooltip.${props.orderBy}`);
      } else return t("$current.tooltip");
    });

    const onClick = () => {
      let orderBy = props.defaultOrder;
      if (props.orderName === props.value) {
        orderBy = props.orderBy === "desc" ? "asc" : "desc";
      } else {
        emit("update:orderName", props.value);
      }
      emit("update:orderBy", orderBy);
      emit("changed");
    };
    const iconArrow = computed(() =>
      props.orderName === props.value ? props.orderBy : null
    );

    return { content, onClick, iconArrow };
  },
};
</script>
