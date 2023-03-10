import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard, authSettled } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage'),
    beforeEnter: authSettled

  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {
    path: '/profile',
    name: 'Profile',
    component: loadPage('ProfilePage'),
  },
  {
    path: '/playlist',
    // NOTE need this vvv once we hve playlist IDs
    // path: '/playlist/:playlistId',
    name: 'PlaylistPage',
    component: loadPage('PlaylistPage'),
  },
  {
    path: '/create',
    name: 'CreatePlaylist',
    component: loadPage('CreatePage'),
    // beforeEnter: authGuard
  },
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
