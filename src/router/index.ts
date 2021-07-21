import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NotFound from '../components/NotFound.vue'
import NoAuth from '../components/NoAuth.vue'

declare module 'vue-router' {
  interface RouteMeta {
    name?: string
    icon?: string
    transition?: string
  }
}

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../components/OtherTr.vue'),
    meta: {
      name: '123qd',
      icon: 'aswerwe'
    }
  },
  {
    path: '/hhh/:id',
    component: () => import('../components/OtherTr.vue'),
    meta: {
      name: '123qd',
      icon: 'aswerwe',
      transition: 'fade'
    }
  },
  {
    path: '/userprofile',
    name: 'userprofile',
    component: () => import('../components/OtherTr.vue'),
    meta: {
      name: '123qd',
      icon: 'aswerwe'
    }
  },
  {
    path: '/users',
    component: () => import('../components/UsersLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('../components/User.vue'),
        alias: ['list', '/person']
      },
      {
        path: ':id',
        redirect: to => {
          return { name: 'userprofile', query: { id: to.params.id } }
        }
      }
    ]
  },
  {
    path: '/emmm/:id',
    name: 'emmm',
    component: () => import('../components/Emmm.vue'),
    meta: {
      name: '123qd',
      icon: 'aswerwe',
      transition: 'fade'
    },
    props: true
  },
  // {
  //   path: '/users/:id',
  //   component: UsersByIdLayout,
  //   children: [
  //     // 为这 3 个 URL 呈现 UserDetails
  //     // - /users/24
  //     // - /users/24/profile
  //     // - /24
  //     { path: 'profile', component: UserDetails, alias: ['/:id', ''] },
  //   ],
  // },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  { path: '/noAuth:pathMatch(.*)', name: 'NoAuth', component: NoAuth },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
