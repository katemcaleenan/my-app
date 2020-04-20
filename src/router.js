import Vue from 'vue'
import Router from 'vue-router'
import EventCreate from './views/EventCreate.vue'
import EventList from './views/EventList.vue'
import EventShow from './views/EventShow.vue'
import MyProject from './views/MyProject.vue'
import GunShow from './views/GunShow.vue'
import GunList from './views/GunList.vue'
import Vueflix from './views/Vueflix.vue'
import MovieDetails from './components/MovieDetails.vue'
import MovieTrailer from './components/MovieTrailer.vue'
import NewReleases from './components/NewReleases.vue'
import NProgress from 'nprogress'
import store from '@/store/store'
import NotFound from './views/NotFound.vue'
import NetworkIssue from './views/NetworkIssue.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventList,
      props: true
    },
    {
      path: '/vueflix',
      name: 'vueflix',
      component: Vueflix
    },
    {
      path: '/my-project',
      name: 'my-project',
      component: MyProject
    },
    {
      path: '/vueflix/:id',
      name: 'vueflix-movie',
      component: MovieDetails
    },
    {
      path: '/vueflix/newreleases',
      name: 'vueflix-release',
      component: NewReleases
    },
    {
      path: '/vueflix/:id/trailer',
      name: 'vueflix-trailer',
      component: MovieTrailer
    },
    {
      path: '/event/create',
      name: 'event-create',
      component: EventCreate
    },
    {
      path: '/event/guns',
      name: 'guns',
      component: GunShow
    },
    {
      path: '/event/gun-list',
      name: 'gun-list',
      component: GunList
    },
    {
      path: '/event/:id',
      name: 'event-show',
      component: EventShow,
      props: true,
      beforeEnter(routeTo, routeFrom, next) {
        store
          .dispatch('event/fetchEvent', routeTo.params.id)
          .then(event => {
            routeTo.params.event = event
            next()
          })
          .catch(error => {
            if (error.response && error.response.status == 404) {
              next({ name: '404', params: { resource: 'event' } })
            } else {
              next({ name: 'network-issue' })
            }
          })
      }
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
