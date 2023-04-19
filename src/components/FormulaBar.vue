<template>
    <el-tabs v-if="currentComponent" v-model="activeName" class="demo-tabs">
        <el-tab-pane label="属性" name="first">
            <component :is="currentComponent.component + 'Attr'"></component>
        </el-tab-pane>
        <el-tab-pane label="数据" name="second">Config</el-tab-pane>
        <el-tab-pane label="事件" name="third">Role</el-tab-pane>
    </el-tabs>

    <div v-else>暂未选择</div>
</template>

<script setup>
import { useStore } from '../store';
import { storeToRefs } from 'pinia';
import { ref } from 'vue';



const activeName = ref('first')

//获取画布组件列表数据
const store = useStore()
const { currentComponent } = storeToRefs(store)

</script>

<style lang="scss" scoped>
.demo-tabs {
    :deep(.el-tabs__header) {
        margin: 0;
    }

    :deep(.el-tabs__nav) {
        width: 100%;
        display: flex;
        justify-content: space-evenly;
    }
    :deep(.el-tabs__content) {
        padding: 0 20px;
    }
}
</style>