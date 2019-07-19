import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'

Vue.use(router)

/* 配置路由 */
export default new router({
  routes:[{
    path:'/hello',
    component:HelloWorld
  }]
})

