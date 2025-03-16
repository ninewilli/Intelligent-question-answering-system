import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '/src/css/pace.min.css'
import 'font-awesome/css/font-awesome.min.css';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'//同一个图标的其他系列
 
library.add(fas,far)
 
createApp(App).use(router).mount('#app')
