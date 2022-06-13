import { createStore } from 'vuex';

import { City } from '@/shared/interfaces/city.model';
import { SortParams } from '@/shared/interfaces/sortParams.model';

import data from '../shared/data/cities.json';

export default createStore({
	state: {
		cities: [] as City[],
	},
	getters: {
		getCities: state => state.cities,
	},
	mutations: {
		setCities(state, newCities: City[] = data.cities) {
			state.cities = newCities;
		},

		sortCities(state, params: SortParams) {
			state.cities.sort((a, b) => {
				const orderBy = params.orderBy as keyof City;
				const c1 = a[orderBy];
				const c2 = b[orderBy];

				if (typeof c1 === 'string') c1.toLowerCase();
				if (typeof c2 === 'string') c2.toLowerCase();

				if (c1 < c2) return -1;
				else if (c1 > c2) return 1;
				else return 0;
			});

			if (params.order) state.cities.reverse();
		},

		filterCities(state, phrase: string) {
			const cities: City[] = data.cities;
			state.cities = cities.filter((city: City) => city.name.toLowerCase().includes(phrase));
		},
	},
	actions: {},
	modules: {},
});
