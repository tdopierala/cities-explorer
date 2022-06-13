<template>
	<div>
		<h1>{{ componentName }}</h1>

		<cities-search @onFilterCities="onFilterCities"></cities-search>

		<cities-list :cities="cities" @onSortCities="onSortCities"></cities-list>
	</div>
</template>

<script lang="ts">
import { Filter, filterDefault } from '@/shared/interfaces/filter.model';
import { defineComponent } from 'vue';
// import { mapActions } from 'vuex';

import CitiesList from './CitiesList.vue';
import CitiesSearch from './CitiesSearch.vue';

export default defineComponent({
	components: { CitiesList, CitiesSearch },
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
		increment() {
			this.count++;
		},

		sortCities(filter: Filter = filterDefault) {
			this.$store.commit('sortCities', filter);
		},

		onSortCities(filter: Filter) {
			console.log('onSortCities()');
			this.$store.commit('sortCities', filter);
		},

		onFilterCities(filter: string) {
			console.log('onFilterCities()', filter);
			this.$store.commit('filterCities', filter);
		},
	},

	mounted() {
		this.$store.commit('setCities');
	},
});
</script>

<style>
table {
	width: 1000px;
	margin: 0 auto;
}
</style>
