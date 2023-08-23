import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		component: import(
			/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage'
		) /** con esto hacemos q se los componentes se llamen cuando entre en su ruta, asi repartimos la carga de datos, a esto se le llama lazyload */,
	},
	{
		path: '/about',
		component: () => import(/* webpackChunkName: "AboutPageweb" */ '../modules/pokemon/pages/AboutPage'),
	},
	{
		path: '/id',
		component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
	},
	{
		path: '/:pathMatch(.*)*',
		component: import(/* webpackChunkName: "NoPageFound" */ '../modules/shared/pages/NoPageFound'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
