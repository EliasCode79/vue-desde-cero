<template>
	<img class="fade-in" alt="Vue logo" src="./assets/logo.png" />
	<!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
	<PokemonPages />
</template>

<script>
import PokemonPages from './pages/PokemonPages';

export default {
	name: 'App',
	components: {
		PokemonPages,
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
