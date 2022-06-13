<template>
	<div class="row">
		<div class="col">
			<h1>Cities Explorer</h1>
		</div>
	</div>
	<div class="row">
		<div class="col-8 offset-2">
			<cities-search @onFilterCities="onFilterCities"></cities-search>
		</div>
	</div>
	<div class="row">
		<div class="col">
			<cities-list :cities="cities" @onSortCities="onSortCities"></cities-list>
		</div>
	</div>
</template>

<script lang="ts">
import { SortParams, paramsDefault } from '@/shared/interfaces/sortParams.model';
import { defineComponent } from 'vue';

import CitiesList from './CitiesList.vue';
import CitiesSearch from './CitiesSearch.vue';

export default defineComponent({
	components: { CitiesList, CitiesSearch },
	name: 'CitiesContainer',

	computed: {
		cities() {
			return this.$store.getters.getCities;
		},
	},

	methods: {
		sortCities(params: SortParams = paramsDefault) {
			this.$store.commit('sortCities', params);
		},

		onSortCities(params: SortParams) {
			this.$store.commit('sortCities', params);
		},

		onFilterCities(phrase: string) {
			this.$store.commit('filterCities', phrase);
		},
	},

	mounted() {
		this.$store.commit('setCities');
	},
});
</script>

<style lang="scss" scoped>
h1 {
	text-align: center;
}
</style>
