import Vue from 'vue'
import router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloZqq from '../components/HelloZqq'

Vue.use(router)

/* 配置路由 */
export default new router({
  routes:[{
    path:'/helloworld',
    component:HelloWorld
  },
  {
    path:'/hellozqq',
    component:HelloZqq
  }]
})

