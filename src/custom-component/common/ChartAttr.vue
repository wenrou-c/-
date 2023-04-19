<template>
    <el-collapse v-model="activeNames" @change="handleChange">
        <el-collapse-item title="通用样式" name="1">
            <el-form :model="currentComponent" label-width="80px">
                <el-form-item label="坐标X轴">
                    <el-input v-model="currentComponent.style.left" />
                </el-form-item>
                <el-form-item label="坐标Y轴">
                    <el-input v-model="currentComponent.style.top" />
                </el-form-item>
                <el-form-item label="宽度">
                    <el-input v-model="currentComponent.style.width" />
                </el-form-item>
                <el-form-item label="高度">
                    <el-input v-model="currentComponent.style.height" />
                </el-form-item>
                <el-form-item label="内边距">
                    <el-input v-model="currentComponent.style.padding" />
                </el-form-item>
                <el-form-item label="旋转角度">
                    <el-input v-model="currentComponent.style.rotate" />
                </el-form-item>
                <el-form-item label="边框半径">
                    <el-input v-model="currentComponent.style.borderRadius" />
                </el-form-item>
                <el-form-item label="透明度">
                    <el-input v-model="currentComponent.style.opacity" />
                </el-form-item>
                <el-form-item label="背景颜色">
                    <el-color-picker v-model="currentComponent.style.backgroundColor" show-alpha
                        :predefine="predefineColors" />
                </el-form-item>

                <template v-if="currentComponent.component == 'DashboardChart'">
                    <el-form-item label="渐变色">
                        <el-color-picker
                            v-model="currentComponent.propValue.option.series[0].itemStyle.color.colorStops[0].color"
                            show-alpha :predefine="predefineColors" /> -
                        <el-color-picker
                            v-model="currentComponent.propValue.option.series[0].itemStyle.color.colorStops[1].color"
                            show-alpha :predefine="predefineColors" />
                    </el-form-item>
                    <el-form-item label="数据颜色">
                        <el-color-picker v-model="currentComponent.propValue.option.title[1].textStyle.rich.a.color"
                            show-alpha :predefine="predefineColors" />
                    </el-form-item>
                    <el-form-item label="标题颜色">
                        <el-color-picker v-model="currentComponent.propValue.option.title[2].textStyle.color" show-alpha
                            :predefine="predefineColors" />
                    </el-form-item>
                    <el-form-item label="标题">
                        <el-input v-model="currentComponent.propValue.option.title[2].text" />
                    </el-form-item>
                </template>

                <template v-else>
                    <el-form-item label="数据颜色">
                        <el-color-picker v-model="currentComponent.propValue.option.series[0].itemStyle.color" show-alpha
                            :predefine="predefineColors" />
                    </el-form-item>
                    <el-form-item label="标题">
                        <el-input v-model="currentComponent.propValue.option.title.text" />
                    </el-form-item>
                </template>
            </el-form>
        </el-collapse-item>
    </el-collapse>
</template>

<script setup>
import { ref } from 'vue';
import { useStore } from '../../store';
import { storeToRefs } from 'pinia';

const activeNames = ref(['1'])

const handleChange = (val) => {
    console.log(currentComponent)
}

//获取画布组件列表数据
const store = useStore()
const { currentComponent } = storeToRefs(store)

const predefineColors = ref([
    '#ff4500',
    '#ff8c00',
    '#ffd700',
    '#90ee90',
    '#00ced1',
    '#1e90ff',
    '#c71585',
    'rgba(255, 69, 0, 0.68)',
    'rgb(255, 120, 0)',
    'hsv(51, 100, 98)',
    'hsva(120, 40, 94, 0.5)',
    'hsl(181, 100%, 37%)',
    'hsla(209, 100%, 56%, 0.73)',
    '#c7158577',
])

</script>

<style lang="scss" scoped>
:deep(.el-collapse-item__content) {
    padding-bottom: 0;
    font-size: var(--el-collapse-content-font-size);
    color: var(--el-collapse-content-text-color);
    line-height: 1.7692307692;
}
</style>