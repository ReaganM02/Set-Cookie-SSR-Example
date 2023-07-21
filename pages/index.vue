<script lang="ts" setup>
definePageMeta({
    middleware: 'auth'
})
const { data: cookie } = await useFetch('/api/get-cookie')
</script>
<template>
    <div>
        {{ cookie }}
    </div>
</template>
<style scoped lang="css"></style>
