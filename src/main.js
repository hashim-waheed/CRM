import './assets/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './stores/auth/register.js' 
import axios from 'axios'

const app = createApp(App)
app.config.globalProperties.$axios = axios.create({
    baseURL: 'http://192.168.88.14:8000/api/',
    headers: {
      'Content-Type': 'application/json',
    },
  });

app.use(store)
app.use(router)

app.mount('#app')
