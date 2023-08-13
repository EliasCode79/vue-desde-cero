<template>
	<img v-if="image" :src="image" alt="bg" />
	<div class="bg-dark"></div>
	<div class="indecision-container">
		<input type="text" placeholder="hazme un pregunta?" v-model="question" />
		<p>recuerda terminar con un signo de interrogacion?</p>
		<div v-if="isValidQuestion">
			<h2>{{ question }}</h2>
			<h1>{{ answer === 'yes' ? 'si' : 'no!' }}</h1>
			<!-- yes: si -->
			<!-- no: no! -->
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			question: null,
			answer: null,
			image: null,
			isValidQuestion: false,
		};
	},
	methods: {
		async getAnswer() {
			this.answer = 'Pensando...';
			const { image, answer } = await fetch('https://yesno.wtf./api').then((r) => r.json());
			this.image = image;
			this.answer = answer;
		},
	},
	// los watch son observables de nuestra data, si queremos estar al tanto de nuestro data utilizamos el observable y se lo pone en la opcion de watch con un metodo q tiene el mismo nombre de nuestra data y tiene 2 argumentos(nuevo_valor, valor_antiguo).
	watch: {
		question(value, oldValue) {
			this.isValidQuestion = false;
			if (!value.includes('?')) return;
			this.isValidQuestion = true;

			//TODO: hacer un peticion https
			this.getAnswer();
		},
	},
};
</script>

<style scoped>
img,
.bg-dark {
	height: 100vh;
	left: 0px;
	max-height: 100%;
	max-width: 100%;
	position: fixed;
	top: 0px;
	width: 100vw;
}

.bg-dark {
	background-color: rgba(0, 0, 0, 0.4);
}

.indecision-container {
	position: relative;
	z-index: 99;
}

input {
	width: 250px;
	padding: 10px 15px;
	border-radius: 5px;
	border: none;
}
input:focus {
	outline: none;
}

p {
	color: white;
	font-size: 20px;
	margin-top: 0px;
}

h1,
h2 {
	color: white;
}

h2 {
	margin-top: 150px;
}
</style>
