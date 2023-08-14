<template>
	<h1>Quien es este pokemon</h1>

	<!-- TODO imagen aqui -->
	<PokemonPictures />
	<!-- TODO	opciones -->
	<PokemonOptions />
</template>

<script>
import PokemonPictures from '@/components/PokemonPictures';
import PokemonOptions from '@/components/PokemonOptions';

export default {
	components: {
		PokemonOptions,
		PokemonPictures,
	},
};
</script>
