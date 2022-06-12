<template>
	<div>
		<h1>{{ componentName }}</h1>

		<button @click="sortCities({ order: 'asc', orderBy: 'id' })">Id Asc</button>
		<button @click="sortCities({ order: 'desc', orderBy: 'id' })">Id Desc</button>

		<button @click="sortCities({ order: 'asc', orderBy: 'name' })">Name Asc</button>
		<button @click="sortCities({ order: 'desc', orderBy: 'name' })">Name Desc</button>

		<button @click="sortCities({ order: 'asc', orderBy: 'population' })">Population Asc</button>
		<button @click="sortCities({ order: 'desc', orderBy: 'population' })">Population Desc</button>

		<button @click="sortCities({ order: 'asc', orderBy: 'area' })">Area Asc</button>
		<button @click="sortCities({ order: 'desc', orderBy: 'area' })">Area Desc</button>

		<cities-list :cities="cities"></cities-list>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
// import { mapActions } from 'vuex';

import CitiesList from './CitiesList.vue';

export default defineComponent({
	components: { CitiesList },
	name: 'CitiesContainer',

	data() {
		return {
			componentName: 'CitiesContainer',
			count: 0,
		};
	},

	computed: {
		cities() {
			return this.$store.state.cities;
		},
	},

	methods: {
		// ...mapActions(['getCieties']),
		increment() {
			this.count++;
		},

		sortCities(filter = { order: 'asc', orderBy: 'name' }) {
			this.$store.commit('sortCities', filter);
		},
	},
});
</script>

<style>
table {
	width: 1000px;
	margin: 0 auto;
}
</style>
