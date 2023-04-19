<template>
    <div ref="chart"></div>
</template>

<script setup>
import * as echarts from "echarts";
import { ref, onMounted, watch } from "vue";


const props = defineProps(['data'])

const chart = ref();
let myChart = null
onMounted(() => {
    myChart = echarts.init(chart.value);
    myChart.setOption(props.data.propValue.option);
    window.onresize = function () {
        myChart.resize();
    };
});

watch(
    () => props.data,
    (newValue, oldValue) => {
        setTimeout(() => {
            myChart.setOption(props.data.propValue.option);
            myChart.resize();
        }, 100);
    },
    { deep: true }
)

</script>

<style lang="scss" scoped>
img {
    width: 100%;
    height: 100%;
}
</style>