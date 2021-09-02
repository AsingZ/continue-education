import { createApp } from 'vue'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router'
import store from "./store"
import installAxios from './plugins/axios'

const app = createApp(App)
installAxios(app)
app.use(ElementPlus)
app.use(router)
app.use(store)
app.mount('#app')