import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import BlogDetailsView from '@/views/BlogDetailsView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ProjectDetailsView from '@/views/ProjectDetailsView.vue'
import NotFoundView from '@/views/NotFoundView.vue'


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog.html',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/blog-details.html',
    name: 'blog-details',
    component: BlogDetailsView
  },
  {
    path: '/project.html',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/project-details.html',
    name: 'project-details',
    component: ProjectDetailsView
  },
  {
    path: '/:CatchAll(.*)',
    name: '404',
    component: NotFoundView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router