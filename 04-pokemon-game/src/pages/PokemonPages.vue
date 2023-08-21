<template>
	<h1 v-if="!pokemon">Espere por favor...</h1>
	<div v-else>
		<h1>Quien es este pokemon..?</h1>

		<PokemonPictures :pokemonId="pokemon.id" :showPokemon="showPokemon" />
		<PokemonOptions :pokemons="pokemonArr" @emitir="checkAnswer" />

		<template v-if="showAnswer">
			<h2 class="fade-in">{{ message }}</h2>
			<button @click="newGame">Nuevo Juego</button>
		</template>
	</div>
</template>

<script>
import PokemonPictures from '@/components/PokemonPictures';
import PokemonOptions from '@/components/PokemonOptions';
import getPokemonOptions from '@/helpers/getPokemonOptions';

// getPokemonOptions();

export default {
	components: {
		PokemonOptions,
		PokemonPictures,
	},
	data() {
		return {
			pokemonArr: [],
			pokemon: null,
			showPokemon: false,
			showAnswer: false,
			message: '',
		};
	},
	methods: {
		async mixPokemonArray() {
			this.pokemonArr = await getPokemonOptions();
			const rndInt = Math.floor(Math.random() * 4);
			this.pokemon = this.pokemonArr[rndInt];
		},

		checkAnswer(selectId) {
			this.showPokemon = true;
			this.showAnswer = true;
			if (selectId === this.pokemon.id) {
				this.message = `Correcto, ${this.pokemon.name}`;
			} else {
				this.message = `Opps... era ${this.pokemon.name}`;
			}
		},

		newGame() {
			this.showPokemon = false;
			this.showAnswer = false;
			this.pokemonArr = [];
			this.pokemon = null;
			this.mixPokemonArray();
			this.message = '';
		},
	},

	mounted() {
		this.mixPokemonArray();
	},
};
</script>
