import {createApp} from 'vue'
import App from './App.vue'
import Antd from 'ant-design-vue';
import router from './router'
import 'ant-design-vue/dist/antd.css';

const app:any = createApp(App)
app.use(router)
app.use(Antd)
app.mount('#app')


