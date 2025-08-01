import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import PortfolioView from '../views/PortfolioView.vue';
import ProjectDetailView from '../views/ProjectDetailView.vue';
import ContactView from '../views/ContactView.vue'; 

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView,
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView,
    },
    {
      
      path: '/portfolio/:projectNameSlug', 
      name: 'project-detail',
      component: ProjectDetailView,
      props: true, 
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;