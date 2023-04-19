<template>
    <el-tabs tab-position="left" class="demo-tabs">
        <el-tab-pane v-for="(item, index) in MenuList" :key="index">
            <template #label>
                <span class="custom-tabs-label">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#${item.icon}`"></use>
                    </svg>
                    <span>{{ item.label }}</span>
                </span>
            </template>
            <ul @dragstart="dragStart">
                <li :draggable="true" v-for="(component, index2) in item.components" :key="index2" :data-component="JSON.stringify(component)">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="`#${component.icon}`"></use>
                    </svg>
                    <div class="label">{{ component.label }}</div>
                </li>
            </ul>
        </el-tab-pane>
    </el-tabs>
</template>

<script setup>
import componentList from '../custom-component/componentList';
import { reactive } from 'vue';


const MenuList = reactive([{
    label: '基础',
    icon: 'icon-MBEfenggeduosetubiao-zujian',
    name: 'foundationComponents',
    components: componentList[0]
}, {
    label: '传感',
    icon: 'icon-chuanganqi',
    name: 'sensorComponents',
    components: componentList[1]
}, {
    label: '控制',
    icon: 'icon-shebei-gaogongshuaikongzhiqi',
    name: 'controlComponents',
    components: componentList[2]
}, {
    label: '安防',
    icon: 'icon-zhihuianfang',
    name: 'securityComponents',
    components: componentList[3]
}, {
    label: '监控',
    icon: 'icon-shexiangtou',
    name: 'cameraControls',
    components: componentList[4]
},])


function dragStart(event) {
    // console.log( event.target.dataset.index);
    const obj = {
        x: event.offsetX,
        y: event.offsetY,
        data: JSON.parse(event.target.dataset.component)
    }
    event.dataTransfer.setData("component", JSON.stringify(obj));
}

</script>

<style lang="scss" scoped>
.demo-tabs {
    width: 100%;
    height: 100%;

    :deep(.is-left) {
        margin-right: 0;
    }

    .custom-tabs-label {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        .icon {
            font-size: 32px;
            color: black;
        }
        .el-icon {
            font-size: 24px;
            margin: 5px;
            
        }

        span {
            padding: 5px 0;
            font-size: 14px;
            font-weight: bold;
        }
    }

    :deep(.el-tabs__content) {
        // padding: 32px;
        margin: 0;
        color: red;
        font-size: 16px;
        // font-weight: 600;

        ul {
            list-style: none;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-evenly;

            li {
                width: 80px;
                height: 80px;
                margin: 10px 0;
                border: 2px dashed gray;
                border-radius: 10px;
                display: flex;
                flex-direction: column;
                justify-content: space-evenly;
                align-items: center;

                .icon {
                    font-size: 40px;
                }

                .label {
                    font-size: 12px;
                    color: gray;
                }
            }

            &:after {
                content: '';
                width: 80px;
            }
        }
    }
}

.el-tabs--right .el-tabs__content,
.el-tabs--left .el-tabs__content {
    height: 100%;
}

:deep(.el-tabs__item.is-left) {
    // height: 100%;
    margin: 20px 0;
}
</style>