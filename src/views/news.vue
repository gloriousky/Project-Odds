<template>
    <div class="absolute top-12">
        <button @click="getList">{{msg}}</button>
    </div>
</template>
<script setup>
    const msg = 'News'
    function getList () {
        console.log('getList')
    }
</script>