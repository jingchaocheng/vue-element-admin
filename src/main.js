import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

//  全量加载
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css' // 样式文件
Vue.use(ElementUI)

// 按需加载
// import { Button, Message } from 'element-ui'
// Vue.component(Button.name, Button)
// Vue.prototype.$message = Message

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
