import { createApp } from 'vue'
import './style.css'
import '//at.alicdn.com/t/c/font_3999037_legbedr5rug.js'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import Components from './custom-component'                     //全局注册当前文件夹下所有自定义组件


createApp(App)
.use(router)
.use(createPinia())
.use(Components)
.mount('#app')