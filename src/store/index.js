import { defineStore } from 'pinia'


export const useStore = defineStore('store', {
  // 为了完整类型推理，推荐使用箭头函数
  state: () => {
    return {
      componentData: [],                                        //当前画布组件数据列表
      currentComponent: null,                                   //当前选中的画布组件
      currentComponentIndex: null,                              //当前选中的画布组件索引
    }
  },
  actions: {
    setCurrentComponent(index) {
        this.currentComponent = this.componentData[index]
        this.currentComponentIndex = index
    },
  }
})