import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import CitiesContainer from '@/components/CitiesContainer.vue';

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'home',
		component: () => import('../views/HomeView.vue'),
	},
	{
		path: '/about',
		name: 'about',
		component: () => import('../views/AboutView.vue'),
	},
	{
		path: '/explore',
		name: 'explore',
		component: CitiesContainer,
	},
];

const router = createRouter({
	history: createWebHistory(process.env.BASE_URL),
	routes,
});

export default router;
