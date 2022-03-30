<template>
    <div class="w-full box-border mx-auto">
        <Header></Header>
        <router-view></router-view>
    </div>
</template>
<script>
import Header from './components/header.vue'
export default {
    name: 'App',
    components: {
        Header,
    },
}
</script>