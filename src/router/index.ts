import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/HomePage.vue'
import AboutPage from '../views/AboutPage.vue'
import TestimonialsPage from '../views/TestimonialPage.vue'
import ContactPage from '../views/ContactPage.vue'
import ProjectsPage from '../views/ProjectPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/about', component: AboutPage },
  { path: '/testimonials', component: TestimonialsPage },
  { path: '/contact', component: ContactPage },
  { path: '/projects', component: ProjectsPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
