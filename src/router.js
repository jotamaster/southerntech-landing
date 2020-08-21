import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);
const routes = [
  {
    path: "/views",
    component: () => import("./views"), //webpackChunkName app
    redirect: "/landingv1",
    children: [
      {
        path: "/landing",
        component: () => import("./views/landingEleven.vue")
      },
      
    ]
  },
  {
    path: "/",
    redirect: "/landing",
    component: () => import("./views/landingEleven.vue")
    
  },
  {
    path:"/ejemplo/:id",
    component: ()=> import ("./views/landingEleven.vue")
  }
];

export default new Router({
  mode: "history",
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash
      };
    }
    return {x: 0, y: 200};
  },
  base: process.env.BASE_URL,
  routes
 
});
