import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import firebase from '@/firebase.js';
import store from '@/store.js';
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: { 
       needsAuth: true, 
       },
  },
  {
    path: '/login',
    name: 'login',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path:'/signup',
    name:'signup',
    component:()=>import(/* webpackChunkName: "signup" */ '../views/SignUp.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  console.log('Bio sam na', from.name, 'idem na', to.name, 'a korisnik je', store.currentUser);
  const authenticated = store.currentUser !== null;
  if (!authenticated && to.meta.needsAuth) {
  next('login');
  } else {
  next();
  }
 });
 export default router;