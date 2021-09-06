// VUE.JS 2
// import Vue from 'vue'
// import App from './App.vue'
// import store from './store'
// import router from './routes'
//
// Vue.config.productionTip = false
//
// new Vue({
//   store,
//   router,
//   render: h => h(App)
// }).$mount('#app')

import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routes'

createApp(App)
    .use(router)
    .use(store)
    .mount('#app')
