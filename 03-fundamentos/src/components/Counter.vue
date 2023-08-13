<template>
	<h2>{{ customTitle }}</h2>
	<p>{{ contador }} <sup>2</sup> = {{ cuadradoComputada }}</p>
	<div>
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
	</div>
</template>

<script>
export default {
	props: {
		title: String,
		start: {
			default: 1,
			type: Number,
			// required: true,  // con esto hacemos de q si o si envie este props
			// esta es un funcion para validar este props, nosostros definimos la validacion.
			validator(value) {
				return value > 0;
			},
		},
	},
	name: 'Counter', // este counter es para identificar en la devoper tools de chrome, cuando importadmos desde otro file lo llamamos normalmente por el nombre del archivo

	data() {
		return {
			contador: this.start,
		};
	},
	methods: {
		cuadrado() {
			console.log('fun de cuadrado se ejecuto');
			return this.contador * this.contador;
		},
		increment() {
			this.contador++;
		},
		decrement() {
			this.contador--;
		},
	},
	// la opcion de computed hace q el valor se guarde en cache y este no esta realizando el calculo cada vez q se utiliza
	// En el caso de realizar un operacion(llamada de un funcion), y este se esta utilizando en varias partes es mejor hacer la funcion en 'computed'.
	computed: {
		cuadradoComputada() {
			return this.contador * this.contador;
		},
		customTitle() {
			return this.title || 'Counter de computed';
		},
	},
};
</script>

<style></style>
