<template>
    <div class="absolute top-12"></div>
</template>
<script type="module">
import { ref, onMounted } from 'vue'
export default {
    setup() {
        const msg = ref(1)
        onMounted(() => {
            console.log(msg.value)

            console.log(div.value) // <div>
        })
        return {
            msg,
        }
    },
}
</script>