<template>
	<div>
		<router-link :to="{ name: 'home' }">pokemon list</router-link>
		<router-link :to="{ name: 'pokemon-id', params: { id: 89 } }">pokemon por id</router-link>
		<router-link :to="{ name: 'about' }">about</router-link>
	</div>
</template>

<style scoped>
div {
	padding: 0 30px;
}

div a {
	font-weight: bold;
	margin: 0 10px;
	color: #2c3e50;
}

a.router-link-active {
	color: #3bca51;
}
</style>
