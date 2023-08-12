// console.log(Vue);
const app = Vue.createApp({
	// template: `
	// 	<h1>hola desde template</h1>
	// 	<p>Desde app.js</p>
	// `,
	data() {
		return {
			quote: 'Soy spdierman',
			autor: 'peter parker',
		};
	},
	methods: {
		cambiarAutor() {
			this.autor = 'elias franco';
			this.cambiandoFrase();
			console.log('cambiando autor');
		},
		cambiandoFrase() {
			this.quote = 'abuelita soy tu nieto';
		},
	},
});

app.mount('#myApp');
