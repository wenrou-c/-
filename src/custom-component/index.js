
//全局注册当前文件夹下所有自定义组件
const components = import.meta.globEager('./*/index.vue')
const attrs = import.meta.globEager('./*/Attr.vue')
export default {
    install(app) {
        Object.keys(components).forEach(key => {
            let component = components[key].default
            let name = key.split('/')[1];
            app.component(name, component)
        })

        Object.keys(attrs).forEach(key => {
            let attr = attrs[key].default
            let name = key.split('/')[1] + 'Attr';
            app.component(name, attr)
        })
    },
};