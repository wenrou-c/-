<template>
    <ChartAttr></ChartAttr>
    <el-form label-width="80px">
        <el-form-item label="文本信息">
            <el-input v-model="currentComponent.propValue" />
        </el-form-item>
    </el-form>
</template>

<script setup>
import { useStore } from '../../store';
import { storeToRefs } from 'pinia';
import ChartAttr from '../common/ChartAttr.vue';


//获取画布组件列表数据
const store = useStore()
const { currentComponent } = storeToRefs(store)

</script>

<style lang="scss" scoped>
.el-form {
    margin-top: 20px;
}
</style>