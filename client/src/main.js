import { createApp } from 'vue'
import '../public/style/style.css'
// import { registerBaseComponents } from './helpers/Utils/registerGlobalComponents'

import App from './App.vue'

import './registerServiceWorker'

import router from './router'

const appRoot = createApp(App)

// registerBaseComponents(appRoot)

appRoot.config.globalProperties.debug = (msg) => console.log(`Debug: ${msg}`)

appRoot.use(router).mount('#app')
