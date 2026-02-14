import { createRouter, createWebHistory } from 'vue-router'

const BaseRoutes = [
  {
    path: '/',
    redirect: { path: '/home' },
  },
  {
    name: 'home',
    path: '/home',
    meta: {
      title: 'home',
      isNav: true,
    },
    component: () => import('@/views/home/home.vue'),
  },
  {
    name: 'equipment',
    path: '/equipment',
    meta: {
      title: 'equipment',
      isNav: true,
    },
    component: () => import('@/views/equipment/equipment.vue'),
  },
  {
    name: 'mutant',
    path: '/mutant',
    meta: {
      title: 'mutant',
      isNav: true,
    },
    component: () => import('@/views/mutant/mutant.vue'),
  },
  {
    name: 'human',
    path: '/human',
    meta: {
      title: 'human',
      isNav: true,
    },
    component: () => import('@/views/human/human.vue'),
  },
  {
    name: 'map',
    path: '/map',
    meta: {
      title: 'map',
      isNav: true,
    },
    component: () => import('@/views/map/map.vue'),
  },
  {
    name: 'info',
    path: '/info',
    meta: {
      title: 'info',
      isNav: true,
    },
    component: () => import('@/views/info/info.vue'),
  },
  {
    name: 'privacy',
    path: '/privacy',
    meta: {
      title: 'privacy',
      isNav: false,
    },
    component: () => import('@/views/privacy/privacy.vue'),
  },
  {
    name: 'testServer',
    path: '/testServer',
    meta: {
      title: 'testServer',
      isNav: false,
    },
    component: () => import('@/views/testServer/testServer.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: BaseRoutes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    else {
      return { top: 0, left: 0 }
    }
  }
})

export default router

export {
  BaseRoutes
}
