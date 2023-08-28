<template>
	<h3>Pokemon page</h3>
	<h3>id: {{ id }}</h3>
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
		return {};
	},

	// created() {
	// 	console.log(this.$route);
	// },
};
</script>
