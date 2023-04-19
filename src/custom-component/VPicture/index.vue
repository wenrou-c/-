<template>
    <img :src="defaultImg" alt="" :draggable="false">
    <!-- <img src="../../assets/image/03.jpg" alt=""> -->
    <!-- <p>888</p> -->
</template>

<script setup>
import defaultImg from '/src/assets/image/03.jpg'

const props = defineProps(['data'])

</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}
</style>