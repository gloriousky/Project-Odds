<template>
  <div
    ref="scrollEl"
    class="overflow-x-hidden overflow-y-auto"
    :style="`height: ${virtualConfig.outerHeight}px`"
  >
    <div :style="style">
      <div
        v-for="(item, idx) in displayList"
        :key="`item--${idx}`"
        :style="`height: ${virtualConfig.unitHeight}px`"
      >
        <slot :item="item"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import { ref, reactive, onMounted, onBeforeUnmount, computed } from "vue";
import { slice, max, min } from "ramda";

export default {
  name: "VirtualList",
  props: {
    /** 顯示筆數 */
    displayCount: {
      type: Number,
      required: true,
    },
    /** 單位高度 */
    unitHeight: Number,
    /** 原始列表 */
    initList: Array,
    /**  */
    activeIndex: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const scrollEl = ref();
    const virtualConfig = reactive({
      outerHeight: computed(
        () => min(props.initList.length, props.displayCount) * props.unitHeight
      ) /** 總資料陣列 */,
      originList: computed(() => props.initList) /** 總資料陣列 */,
      totalCount: computed(() => props.initList.length) /** 總資料陣列筆數 */,
      displayCount: computed(() => props.displayCount) /** 選單顯示筆數 */,
      unitHeight: computed(() => props.unitHeight) /** 每個資料的高 */,
      displayLoadNums: 1 /** 占位數量，藏在顯示筆數的前後，滾動的時候才不會空白的 */,
      displayIndex: 0, // 目前顯示資料位置
    });

    const displayIndexStart = computed(() =>
      max(0, virtualConfig.displayIndex - virtualConfig.displayLoadNums)
    );
    const displayIndexEnd = computed(() =>
      min(
        virtualConfig.totalCount,
        displayIndexStart.value +
          virtualConfig.displayCount +
          virtualConfig.displayLoadNums
      )
    );

    const style = computed(() =>
      [
        `padding-top: ${displayIndexStart.value * virtualConfig.unitHeight}px`,
        `padding-bottom: ${
          (virtualConfig.totalCount - displayIndexEnd.value) *
          virtualConfig.unitHeight
        }px`,
      ].join(";")
    );

    const displayList = computed(() =>
      slice(
        displayIndexStart.value,
        displayIndexEnd.value,
        virtualConfig.originList
      )
    );

    onMounted(() => {
      scrollEl.value.addEventListener("scroll", listenScroll);
      virtualConfig.displayIndex = props.activeIndex;
      setTimeout(() => {
        scrollEl.value.scrollTop = props.activeIndex * virtualConfig.unitHeight;
      }, 0);
    });

    onBeforeUnmount(() => {
      scrollEl.value.removeEventListener("scroll", listenScroll);
    });

    const listenScroll = function (e) {
      virtualConfig.displayIndex = Math.ceil(
        e.target.scrollTop / virtualConfig.unitHeight
      );
    };

    return {
      scrollEl,
      virtualConfig,
      displayList,
      style,
    };
  },
};
</script>
