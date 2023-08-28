<template>
	<h3>Pokemon page</h3>
	<!-- <h3>id: {{ id }}</h3> -->
	<div v-if="pokemon">
		<p>{{ pokemon.name }}</p>
		<img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
	</div>
</template>
<script>
export default {
	props: {
		id: {
			type: Number,
			required: true,
		},
	},

	data() {
		return {
			pokemon: null,
		};
	},

	created() {
		// console.log(this.$route);
		// console.log(this.getPokemon);
		this.getPokemon();
	},

	methods: {
		async getPokemon() {
			try {
				const pokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${this.id}`).then((r) => r.json());
				console.log(pokemon);
				this.pokemon = pokemon;
			} catch (error) {
				// console.log(error); // si el endpoint esta caido redireccionamos con la siguiente linea de codigo a otra pagina.
				this.$router.push('/about');
				console.log('No hay nada q hacer aqui');
			}
		},
	},

	watch: {
		id() {
			this.getPokemon();
		},
	},
};
</script>
