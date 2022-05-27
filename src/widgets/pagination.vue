<template>
  <div class="flex justify-between">
    <ul class="flex space-x-1">
      <li
        class="border rounded-lg border-gray-200 flex justify-center items-center w-10 h-10"
        :class="[
          isFirstDisabled
            ? 'text-gray-300 bg-gray-100 cursor-not-allowed'
            : 'text-gray-800 cursor-pointer hover:bg-gray-100',
        ]"
        @click.prevent="onFirstClick"
      >
        «
      </li>
      <li
        v-for="num in pageNums"
        :key="num"
        class="pagination__item"
        :class="[page === num && 'pagination__item--active']"
        @click.prevent="onPageClick(num)"
      >
        {{ num }}
      </li>
      <li
        class="border rounded-lg border-gray-200 flex justify-center items-center w-10 h-10"
        :class="[
          isLastDisabled
            ? 'text-gray-300 bg-gray-100 cursor-not-allowed'
            : 'text-gray-800 cursor-pointer hover:bg-gray-100',
        ]"
        @click.prevent="onLastClick"
      >
        »
      </li>
    </ul>
    <div class="w-28">
      <Select
        :modelValue="perpage"
        @update:modelValue="onPerPegeChanged"
        :options="[
          {
            value: 20,
            children: t('widgets.pagination.perpage', { count: 20 }),
          },
          {
            value: 50,
            children: t('widgets.pagination.perpage', { count: 50 }),
          },
          {
            value: 100,
            children: t('widgets.pagination.perpage', { count: 100 }),
          },
        ]"
      >
      </Select>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";
import { times, inc, add, max } from "ramda";
import useI18n from "@/hooks/use-i18n";
import Select from "@/widgets/select";

export default {
  name: "Pagination",
  emits: ["changed", "update:page", "update:perpage"],
  props: {
    total: Number,
    page: Number,
    perpage: Number,
  },
  components: {
    Select,
  },
  setup(props, { emit }) {
    const { t } = useI18n();
    const totalPages = computed(() =>
      max(Math.ceil(props.total / props.perpage), 1)
    );
    const page = computed(() => {
      if (props.page < 1) return 1;
      if (props.page > totalPages.value) return totalPages.value;
      return props.page;
    });

    const isFirstDisabled = computed(() => page.value <= 1);
    const isLastDisabled = computed(() => page.value >= totalPages.value);

    const onFirstClick = () => {
      if (isFirstDisabled.value) return false;
      onPageChanged(1);
    };
    const onLastClick = () => {
      if (isLastDisabled.value) return false;
      onPageChanged(totalPages.value);
    };
    const onPageClick = (page) => {
      if (props.page === page) return false;
      onPageChanged(page);
    };
    const onPageChanged = (page) => {
      emit("update:page", page);
      emit("changed");
    };
    const onPerPegeChanged = (perpage) => {
      emit("update:perpage", +perpage);
      onPageChanged(1);
    };

    const pageNums = computed(() => {
      if (totalPages.value <= 5) return times(inc, totalPages.value);

      const startNum = Math.max(page.value - 2, 1);
      const endNum = Math.min(page.value + 2, totalPages.value);

      return times(add(startNum), endNum - startNum + 1);
    });

    return {
      t,
      isFirstDisabled,
      isLastDisabled,
      onFirstClick,
      onLastClick,
      onPageClick,
      onPerPegeChanged,
      pageNums,
    };
  },
};
</script>
