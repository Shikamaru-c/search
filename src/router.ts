import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/search',
      name: 'search',
      redirect: '/search/music',
      alias: '/',
      component: () => import(/* webpackChunkName: "search" */ './views/Search.vue'),
      children: [
        {
          path: 'music',
          name: 'music',
          component: () => import(/* webpackChunkName: "settings-music" */ './components/SettingsMusic/index.vue'),
        },
        {
          path: 'shop',
          name: 'shop',
          component: () => import(/* webpackChunkName: "settings-shop" */ './components/SettingsShop/index.vue'),
        },
      ],
    },
    {
      path: '/music-player',
      name: 'music-player',
      component: () => import(/* webpackChunkName: "music-player" */ './views/MusicPlayer.vue'),
    },
  ],
})
