
import Vue from 'vue'
import VueRouter from 'vue-router'
import Today from '../component/today.vue'
import Note from '../component/note.vue'
import Setting from '../component/setting.vue'
import Statis from '../component/statis.vue'
import Tags from '../component/tags.vue'
import About from '../component/about.vue'
import Alarm from '../component/alarm.vue'

Vue.use(VueRouter)

let router = new VueRouter({
    routes: [
      {
        path: '/',
        component: Today
      },
      {
        path: '/note',
        component: Note
      }, 
      {
        path: '/setting',
        component: Setting,
      },
      {
        path: '/statis',
        component: Statis
      },
      {
        path: '/setting/tags',
        component: Tags,
      },
      {
        path: '/setting/about',
        component: About,
      },
      {
        path: '/setting/alarm',
        component: Alarm
      }
    ]
})

export default router