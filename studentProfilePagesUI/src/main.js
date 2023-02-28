import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/main.css'

createApp(App).use(router).mount('#app')
