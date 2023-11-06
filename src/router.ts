import { createRouter, createWebHistory } from 'vue-router';

import Home from './views/Home.vue';
import CharacterDetails from './views/CharacterDetails.vue';
import SearchPage from './views/SearchPage.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/character/:id', component: CharacterDetails },
  { path: '/search', component: SearchPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
