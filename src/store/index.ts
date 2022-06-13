import { createStore } from 'vuex';

import { City } from '@/shared/interfaces/city.model';
import { Filter } from '@/shared/interfaces/filter.model';

import data from '../shared/data/cities.json';

export default createStore({
	state: {
		cities: [] as City[],
	},
	getters: {},
	mutations: {
		setCities(state, newCities: City[] = data.cities) {
			state.cities = newCities;
		},

		sortCities(state, filter: Filter) {
			state.cities.sort((a, b) => {
				const orderBy = filter.orderBy as keyof City;
				const c1 = a[orderBy];
				const c2 = b[orderBy];

				if (typeof c1 === 'string') c1.toLowerCase();
				if (typeof c2 === 'string') c2.toLowerCase();

				if (c1 < c2) return -1;
				else if (c1 > c2) return 1;
				else return 0;
			});

			if (filter.order) state.cities.reverse();
		},

		filterCities(state, phrase: string) {
			const cities: City[] = data.cities;
			state.cities = cities.filter((city: City) => city.name.includes(phrase));
		},
	},
	actions: {},
	modules: {},
});
