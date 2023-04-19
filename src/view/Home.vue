<template>
    <div class="common-layout">
        <el-container>
            <el-header>
                智云物联组态平台
            </el-header>
            <el-container>
                <el-aside>
                    <Menu></Menu>
                </el-aside>
                <el-main>
                    <Main></Main>
                </el-main>
                <el-aside>
                    <FormulaBar></FormulaBar>
                </el-aside>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Main from '../components/Main/Index.vue';
import Menu from '../components/Menu.vue';
import FormulaBar from '../components/FormulaBar.vue';
</script>

<style lang="scss" scoped>
.el-container {
    .el-container {
        height: calc(100vh - 60px);
        overflow-y: auto;
    }
}

.el-header {
    display: flex;
    // justify-content: center;
    align-items: center;
    background-color: #e9e9eb;
    font-size: 32px;
    font-weight: bold;
}

.el-aside {
    // background-color: red;
    width: 300px;
    border-right: 1px solid gray;

}

.el-main {
    background-color: gray;
}
</style>