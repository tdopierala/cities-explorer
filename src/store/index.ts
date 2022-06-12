import { createStore } from 'vuex';

import { City, citiesMock } from '@/shared/interfaces/city.model';
import { Filter } from '@/shared/interfaces/filter.model';

export default createStore({
	state: {
		cities: citiesMock as City[],
	},
	getters: {},
	mutations: {
		setCities: (state, newCities: City[]) => {
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

			if (filter.order.toLowerCase() === 'desc') state.cities.reverse();
		},
	},
	actions: {
		getCieties(context) {
			context.commit('setCities', citiesMock);
		},
	},
	modules: {},
});
