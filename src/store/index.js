import { createStore } from 'vuex'

export const store = createStore({
    state () {
        return {
          count: 0
        }
      },
      mutations: {
        increment (state) {
          state.count++
        }
      },
      actions: {
        // 傳入一個 Store instance
        increment (context) {
          // 呼叫 mutations.increment
          context.commit('increment');
        }
      },
})