import {createRouter, createWebHistory} from "vue-router";

const routes = [
    {
      path: '/',
      name: 'Home',
      component: ()=>import('../src/components/Home.vue')
    },
    {
      path: '/add',
      name: 'Add',
      component: ()=>import('../src/components/AddExpense.vue')
    },
  ]
  
 const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
export default router