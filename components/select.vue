<template>
  <Dropdown
    placement="left"
    :menu-height="virtual ? 'auto' : 'fixed'"
    @dropdown="onDropdown"
  >
    <template #trigger="{ isOpen, onOpen }">
      <div
        class="form-control flex justify-between items-center"
        :readonly="readonly"
        :class="{
          'form-control--focus': isOpen,
          'form-control__head': alignType === 'head',
          'form-control__tail': alignType === 'tail',
        }"
        @click="() => (readonly ? false : onOpen())"
      >
        <template v-if="actives.length > 0">
          <div v-if="isMultiple" class="flex gap-1 flex-wrap">
            <span
              v-for="tag in actives"
              :key="`tag-${tag.value}`"
              class="dropdown__content__body__tag cursor-pointer hover:bg-gray-300"
              @click.stop="tag.$onClick"
            >
              {{ tag.children }}
              <svg
                class="w-4 h-4 ml-1"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </span>
          </div>
          <span
            v-else
            class="flex-auto w-10/12 overflow-hidden overflow-ellipsis"
          >
            {{ actives[0].children }}
          </span>
        </template>
        <span
          v-else
          class="flex-auto w-11/12 overflow-hidden overflow-ellipsis"
        >
          {{ placeholder }}
        </span>
        <b
          v-if="isOpen"
          class="cursor-pointer flex-grow-0 flex-shrink-0 w-auto"
        >
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M5 15l7-7 7 7"
            ></path>
          </svg>
        </b>
        <b v-else class="flex-grow-0 flex-shrink-0 w-auto">
          <svg
            class="w-3 h-3"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M19 9l-7 7-7-7"
            ></path>
          </svg>
        </b>
      </div>
    </template>
    <template #content>
      <div :style="`width: ${contentWidth}px`">
        <div v-if="input" class="py-2 px-3 bg-white sticky top-0">
          <input
            type="text"
            v-model="keyword"
            :placeholder="inputPlaceholder"
            class="form-control"
          />
        </div>
        <div v-if="display.length === 0" class="dropdown__content__header">
          <span class="block text-sm text-gray-400">Empty.</span>
        </div>
        <div
          v-else-if="virtual"
          class="dropdown__content__body dropdown__content__body--virtual"
        >
          <VirtualList
            :init-list="display"
            v-bind="{
              displayCount: 10,
              unitHeight: 30,
              activeIndex: actives[0]?.$index ?? 0,
              ...virtual,
            }"
          >
            <template v-slot="{ item }">
              <template v-if="hasTemplate">
                <slot
                  :item="item"
                  :active="item.$active"
                  @click="item.$onClick"
                ></slot>
              </template>
              <template v-else>
                <a
                  href="#"
                  class="dropdown__content__body__item"
                  :class="{
                    'dropdown__content__body__item--active': item.$active,
                    'dropdown__content__body__item--disabled': item.disabled,
                  }"
                  @click.prevent="item.$onClick"
                  >{{ item.children }}</a
                >
              </template>
            </template>
          </VirtualList>
        </div>
        <ul v-else class="dropdown__content__body">
          <template v-if="hasTemplate">
            <slot
              v-for="item in display"
              :key="`item--${item.value}`"
              :item="item"
              :active="item.$active"
              @click="item.$onClick"
            ></slot>
          </template>
          <li v-else v-for="item in display" :key="`item--${item.value}`">
            <a
              href="#"
              class="dropdown__content__body__item"
              :class="{
                'dropdown__content__body__item--active': item.$active,
                'dropdown__content__body__item--disabled': item.disabled,
              }"
              @click.prevent="item.$onClick"
            >
              {{ item.children }}
            </a>
          </li>
        </ul>
      </div>
    </template>
  </Dropdown>
</template>
<script>
import { computed, ref, watch } from "vue";
import Dropdown from "@/widgets/dropdown";
import VirtualList from "@/widgets/virtual-list";
import {
  map,
  propEq,
  filter,
  reject,
  equals,
  includes,
  toLower,
  addIndex,
} from "ramda";

export default {
  name: "WidgetSelect",
  props: {
    modelValue: {},
    placeholder: String,
    input: {
      type: Boolean,
      default: false,
    },
    inputPlaceholder: String,
    readonly: {
      type: Boolean,
      default: false,
    },
    options: Array,

    /** 對齊位置 */
    alignType: {
      type: String,
      default: "normal",
      validator: function (value) {
        return value === "normal" || value == "head" || value == "tail";
      },
    },

    /** 虛擬內容，用於資料量大時候 */
    virtual: {
      type: [Boolean, Object],
      default: false,
    },
  },
  emits: ["update:modelValue", "changed"],
  components: {
    Dropdown,
    VirtualList,
  },
  setup(props, { emit, slots }) {
    /** dropdown 元件 */
    const dropdownRef = ref();

    /** 關鍵字 */
    const keyword = ref("");

    /** 內容寬度 */
    const contentWidth = ref(0);

    /** 檢查是不是有 slot(children) 有的話視為自訂內容 */
    const hasTemplate = computed(() => !!slots.default);

    /** 由綁定的型別去識別單選還是多選 */
    const isMultiple = computed(() => Array.isArray(props.modelValue));

    /**
     * 對 props.option 做處理
     * 寫入一些需要用到的參數
     *
     * @params {Number} $index 索引值
     * @params {Boolean} $active 已選擇資料
     * @params {Function} $onClick 點擊行為
     */
    const optionsComputed = computed(() => {
      const _checkIsActive = (value) => {
        if (isMultiple.value) {
          /** 多選檢查陣列 */
          return includes(value, props.modelValue);
        } else {
          /** 單選就比對內容 */
          return value === props.modelValue;
        }
      };

      return addIndex(map)((option, idx) => {
        const item = {
          ...option,
          $index: idx,
          $active: _checkIsActive(option.value),
        };

        return {
          ...item,
          $onClick: () => {
            onChanged({ item });
          },
        };
      }, props.options);
    });

    /**
     * 有輸入關鍵字的話，對 optionsComputed 做篩選
     * 查詢內容都轉成小寫比對
     */
    const display = computed(() => {
      if (keyword.value === "") return optionsComputed.value;
      const matcher = new RegExp(toLower(keyword.value));
      return filter(
        (child) => matcher.test(toLower(child.children)),
        optionsComputed.value
      );
    });

    /**
     * 把 optionsComputed 裡面 $active 為 true 的資料篩選出來
     * 會顯示在 trigger
     */
    const actives = computed(() =>
      filter(propEq("$active", true), optionsComputed.value)
    );

    /**
     * Dropdown onMounted 時會被呼叫
     * 內容寬度設定為 trigger 寬度
     *
     * @param {Dropdown} dropdown
     */
    const onDropdown = (dropdown) => {
      dropdownRef.value = dropdown;
      contentWidth.value = dropdown.trigger.getBoundingClientRect().width;
    };

    /** 下拉選單項目的點擊事件 */
    const onChanged = ({ item }) => {
      if (item.disabled) return false;

      const val = item.value;

      if (isMultiple.value) {
        let nextValue;
        /** 判斷當前狀態 */
        if (item.$active) {
          /* 多選的時候，如果點擊已選擇的項目，要取消選擇 */
          nextValue = reject(equals(val), props.modelValue);
        } else {
          nextValue = [...props.modelValue, val];
        }
        emit("update:modelValue", nextValue);
      } else {
        emit("update:modelValue", val);
        /** 單選，點擊項目就關閉彈窗 */
        dropdownRef.value.onClose();
      }
      emit("changed");
    };

    /** 監聽下拉視窗開啟狀態 */
    watch(
      () => dropdownRef.value?.isOpen ?? null,
      (isOpen) => {
        if (isOpen === false) {
          /** 關閉時清空關鍵字內容 */
          keyword.value = "";
        }
      }
    );

    return {
      onDropdown,
      hasTemplate,
      isMultiple,
      display,
      actives,
      keyword,
      contentWidth,
    };
  },
};
</script>

<style lang="scss" scoped>
.form-control.form-control__head {
  border-radius: 0;
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}
.form-control.form-control__tail {
  border-left-width: 0;
  border-radius: 0;
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}
</style>
