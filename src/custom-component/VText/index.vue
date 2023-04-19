<template>
    <div id="vtext" :contenteditable="true" @input="changeValue">
        {{ props.data.propValue }}
    </div>
    <!-- aaa -->
</template>

<script setup>

const props = defineProps(['data'])

const changeValue = (e) => {
    props.data.propValue = e.target.innerHTML
}

</script>

<style lang="scss" scoped>
#vtext {
    width: 100%;
    height: 100%;
    border-style: solid;
    &:focus-visible {
        // outline: -webkit-focus-ring-color auto 1px;
        outline: none;
    }
}
</style>