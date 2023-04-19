<template>
    <button id="btn">
        {{ props.data.propValue }}
    </button>
    <!-- aaa -->
</template>

<script setup>

const props = defineProps(['data'])

</script>

<style lang="scss" scoped>
 #btn {
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: white;
 }
</style>