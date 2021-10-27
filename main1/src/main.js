import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { registerMicroApps, start } from 'qiankun'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
registerMicroApps(
    [
        {
            name: 'sub-react',
            entry: '//localhost:3000',
            container: '#main-container',
            activeRule: '/sub-react'
        },
        {
            name: 'sub-vue',
            entry: '//localhost:8082',
            container: '#main-container',
            activeRule: '/sub-vue'
        }
    ],
    {
        beforeLoad: [
            (app) => {
                console.log('[LifeCycle] before load %c%s', 'color: green;', app.name)
            }
        ],
        beforeMount: [
            (app) => {
                console.log('[LifeCycle] before mount %c%s', 'color: green;', app.name)
            }
        ],
        afterUnmount: [
            (app) => {
                console.log('[LifeCycle] after unmount %c%s', 'color: green;', app.name)
            }
        ]
    }
)

start({ experimentalStyleIsolation: true })
