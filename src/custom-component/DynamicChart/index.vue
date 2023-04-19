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

    setInterval(() => {
        let axisData = new Date().toLocaleTimeString().replace(/^\D*/, '');
        const { xAxis, series } = props.data.propValue.option

        xAxis.data.shift()
        xAxis.data.push(axisData)
        series[0].data.shift()
        series[0].data.push(Math.round(Math.random() * 10))
        myChart.setOption(props.data.propValue.option);

    }, 1000);

    window.onresize = function () {
        myChart.resize();
    };
});

watch(
    () => props.data.style,
    (newValue, oldValue) => {
        setTimeout(() => {
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