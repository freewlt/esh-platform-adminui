// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './utils/store/store'
import router from './router/index'
import axios from './utils/index'
import ElementUI from 'element-ui'
import '../static/theme/index.css'
import myCharts from 'echarts'

Vue.use(ElementUI)
Vue.use(myCharts)

Vue.config.productionTip = true

/* eslint-disable no-new */
new Vue({
  store,
  router,
  axios,
  render: h => h(App)
}).$mount('#app')
