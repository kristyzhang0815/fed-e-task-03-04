const c1 = () => import(/* webpackChunkName: "page--src--templates--post-vue" */ "/Users/maning/Documents/github/fed-e-task-03-04/src/templates/Post.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--trend-vue" */ "/Users/maning/Documents/github/fed-e-task-03-04/src/pages/Trend.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--social-vue" */ "/Users/maning/Documents/github/fed-e-task-03-04/src/pages/Social.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--open-source-vue" */ "/Users/maning/Documents/github/fed-e-task-03-04/src/pages/OpenSource.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/maning/Documents/github/fed-e-task-03-04/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/maning/Documents/github/fed-e-task-03-04/src/pages/Index.vue")

export default [
  {
    path: "/blog/:id/",
    component: c1
  },
  {
    path: "/trend/",
    component: c2
  },
  {
    path: "/social/",
    component: c3
  },
  {
    path: "/open-source/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/:page(\\d+)?/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
