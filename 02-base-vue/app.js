const quotes = [
	{
		quote: 'The night is darkest just before the dawn. And I promise you, the dawn is coming.',
		author: 'Harvey Dent, The Dark Knight',
	},
	{ quote: 'I believe what doesn’t kill you simply makes you, stranger.', author: 'The Joker, The Dark Knight' },
	{
		quote: 'Your anger gives you great power. But if you let it, it will destroy you… As it almost did me',
		author: 'Henri Ducard, Batman Begins',
	},
	{
		quote: 'You either die a hero or live long enough to see yourself become the villain.',
		author: 'Harvey Dent, The Dark Knight',
	},
	{ quote: 'If you’re good at something, never do it for free.', author: 'The Joker, The Dark Knight' },
	{ quote: 'Yes, father. I shall become a bat.', author: 'Bruce Wayne/Batman, Batman: Year One' },
];

// este es un compomente con opcion API
const app = Vue.createApp({
	// la data crea un objeto reactivo
	data() {
		return {
			quotes, // quotes: quotes,
			newQuote: 'Hola mundo',
		};
	},
	// metodos q necesitemos
	methods: {
		addQuote(event) {
			this.quotes.unshift({ quote: this.newQuote });
			// console.log(this.newQuote);
			// console.log(event);
			// if (event.key === 'Enter') {
			// 	this.quotes.unshift({
			// 		quote: this.newQuote,
			// 	});
			// 	console.log('quote guardado');
			// }
		},
	},
});

// monte esta aplicacion(componente) en un elemento html
app.mount('#myApp');
