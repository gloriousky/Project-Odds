<template>
  <div class="absolute top-12">
      <input type="number" v-model.number="msg">
      <br>
      {{ msg }}
      <br>
      {{ msg2 }}
      <div ref="div">TA</div>
  </div>
</template>
<script type="module">
import { ref,computed,onMounted } from 'vue'
export default {
  setup() {
      const msg = ref(1)
      const msg2 = computed(()=>{
          return msg.value * 2
      })
      const div = ref()
      onMounted(() => {
        console.log(msg.value)
        console.log(div.value) // <div>
        })
    return {
        msg,
        msg2,
        div
    };
  },
};
</script>