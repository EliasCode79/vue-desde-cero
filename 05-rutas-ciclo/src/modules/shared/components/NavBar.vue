<template>
	<div>
		<router-link to="/">pokemon list</router-link>
		<router-link to="/about">about</router-link>
		<router-link to="/id">pokemon por id</router-link>
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
