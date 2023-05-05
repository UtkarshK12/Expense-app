import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App  from './App.vue'
import './style.css'
import router from './index'
import { FontAwesomeIcon } from '../node_modules/@fortawesome/vue-fontawesome'
import { library } from '../node_modules/@fortawesome/fontawesome-svg-core'
import { faUser, faFolder,faYenSign } from '../node_modules/@fortawesome/free-solid-svg-icons'

library.add(faUser,faFolder, faYenSign)
const pinia = createPinia()
const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

app.use(pinia)
app.use(router).mount('#app')