<template>
    <div id="canvas" @drop="drop" @dragover="allowDrop">
        <div class="component" v-for="(item, index) in componentData" :key="index"
            @mousedown="handleMouseDown(index, $event)" @mouseup="deselectCurComponent">
            <component :is="item.component" :data="item" :style="stylesAddUnits(item.style)"></component>
        </div>
    </div>
</template>

<script setup>
import { useStore } from '../../store';
import { storeToRefs } from 'pinia';


//获取画布组件列表数据
const store = useStore()
const { componentData } = storeToRefs(store)
const { setCurrentComponent } = store

//接收组件栏传过来索引添加相应数据并定位
function allowDrop(event) {
    event.preventDefault();
}
function drop(event) {
    event.preventDefault();
    const obj = JSON.parse(event.dataTransfer.getData("component"));
    const { data } = obj
    data.style.top = event.offsetY - obj.y
    data.style.left = event.offsetX - obj.x
    componentData.value.push(data)
}

//组件在画布中移动
function handleMouseDown(index, event) {
    event.stopPropagation()

    setCurrentComponent(index)

    const startY = event.clientY
    const startX = event.clientX
    const { top, left } = componentData.value[index].style
    const moveDiv = (moveEvent) => {
        const currentY = moveEvent.clientY
        const currentX = moveEvent.clientX
        componentData.value[index].style.top = top + (currentY - startY)
        componentData.value[index].style.left = left + (currentX - startX)
    }
    const up = () => {
        // console.log('鼠标松开');
        document.removeEventListener('mousemove', moveDiv)
        document.removeEventListener('mouseup', up)
    }
    document.addEventListener('mousemove', moveDiv)
    document.addEventListener('mouseup', up)
}


function stylesAddUnits(style) {
    const filter = ['width', 'height', 'top', 'left', 'rotate', 'fontSize', 'borderWidth', 'borderRadius', 'lineHeight', 'padding']
    const result = {}
    Object.keys(style).forEach(key => {
        if (key !== 'rotate') {
            if (style[key] !== '') {
                result[key] = style[key]

                if (filter.includes(key)) {
                    result[key] += 'px'
                }
            }
        } else {
            result.transform = key + '(' + style[key] + 'deg)'
        }
    })

    return result
}


</script>

<style lang="scss" scoped>
#canvas {
    width: 100%;
    height: 100%;
    background-color: #e9e9eb;
    border-radius: 10px;
    overflow: hidden;
    position: relative;

    .component {
        position: absolute;
    }
}
</style>