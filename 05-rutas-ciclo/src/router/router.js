import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		redirect: '/home',
	},
	{
		path: '/home',
		component: () =>
			import(
				/* webpackChunkName: "ListPage" */ '../modules/pokemon/pages/ListPage'
			) /** con esto hacemos q se los componentes se llamen cuando entre en su ruta, asi repartimos la carga de datos, a esto se le llama lazyload */,
		name: 'home,',
	},
	{
		path: '/about',
		component: () => import(/* webpackChunkName: "AboutPageweb" */ '../modules/pokemon/pages/AboutPage'),
		name: 'about',
	},
	{
		path: '/pokemonid/:id',
		name: 'pokemon-id',
		component: () => import(/* webpackChunkName: "PokemonPage" */ '../modules/pokemon/pages/PokemonPage'),
		props: (route) => {
			// console.log(route);
			// lo q retornemos (return objeto) sera un property si esta declarada en el componente como props y si no esta sera un attributo
			const id = Number(route.params.id); // la url siempre es un string en este caso sabemos q necesitamos un numbero y lo parseamos a numero
			return isNaN(id) ? { id: 1 } : { id }; // en casa de q no sea un numero le decimos q el id es 1 y si es un numero q mande ese numero  a la props.
		},
	},
	{
		path: '/:pathMatch(.*)*',
		component: () => import(/* webpackChunkName: "NoPageFound" */ '../modules/shared/pages/NoPageFound'),
	},
];

const router = createRouter({
	history: createWebHashHistory(),
	routes,
});

export default router;
