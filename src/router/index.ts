import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/auth/LoginView.vue'
import RegisterView from "@/views/auth/RegisterView.vue";
import DashboardView from "@/views/DashboardView.vue";
import PerfilView from "@/views/PerfilView.vue";
import GroupsView from "@/views/GroupsView.vue";
import ChallengesView from "@/views/ChallengesView.vue";
import ScoreView from "@/views/ScoreView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
      {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/registrate',
      name: 'register',
      component: RegisterView
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: DashboardView,
      meta: { requiresAuth: true }
    },
    {
      path: '/perfil',
      name: 'perfil',
      component: PerfilView,
      meta: { requiresAuth: true }
    },
    {
      path: '/grupos',
      name: 'grupos',
      component: GroupsView,
      meta: { requiresAuth: true }
    },
    {
      path: '/desafios',
      name: 'challenges',
      component: ChallengesView,
      meta: { requiresAuth: true }
    },
    {
      path: '/tablero-de-puntuacion',
      name: 'score',
      component: ScoreView,
      meta: { requiresAuth: true }
    },


    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    // Verifica si el usuario está autenticado (por ejemplo, si existe un valor en localStorage)
    const userAuthenticated = localStorage.getItem('token');

    if (!userAuthenticated) {
      // Si no está autenticado, redirige al usuario a la página de inicio de sesión
      next({ name: 'login' });
    } else {
      // Si está autenticado, permite la navegación
      next();
    }
  } else {
    // Si la ruta no requiere autenticación, permite la navegación
    next();
  }
});

export default router
