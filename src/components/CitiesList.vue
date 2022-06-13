<template>
	<table>
		<thead>
			<tr>
				<th>l.p.</th>
				<th>
					id
					<a href="#" @click.prevent="sortBy('id')">
						<i v-if="filter.orderBy === 'id' && filter.order" class="fa-solid fa-arrow-down-9-1"></i>
						<i v-else-if="filter.orderBy === 'id' && !filter.order" class="fa-solid fa-arrow-up-1-9"></i>
						<i v-else class="fa-solid fa-arrow-down-wide-short"></i>
					</a>
				</th>
				<th>
					name
					<a href="#" @click.prevent="sortBy('name')">
						<i v-if="filter.orderBy === 'name' && filter.order" class="fa-solid fa-arrow-down-z-a"></i>
						<i v-else-if="filter.orderBy === 'name' && !filter.order" class="fa-solid fa-arrow-up-a-z"></i>
						<i v-else class="fa-solid fa-arrow-down-wide-short"></i>
					</a>
				</th>
				<th>voivodship</th>
				<th>
					population
					<a href="#" @click.prevent="sortBy('population')">
						<i v-if="filter.orderBy === 'population' && filter.order" class="fa-solid fa-arrow-down-9-1"></i>
						<i v-else-if="filter.orderBy === 'population' && !filter.order" class="fa-solid fa-arrow-up-1-9"></i>
						<i v-else class="fa-solid fa-arrow-down-wide-short"></i>
					</a>
				</th>
				<th>
					area
					<a href="#" @click.prevent="sortBy('area')">
						<i v-if="filter.orderBy === 'area' && filter.order" class="fa-solid fa-arrow-down-9-1"></i>
						<i v-else-if="filter.orderBy === 'area' && !filter.order" class="fa-solid fa-arrow-up-1-9"></i>
						<i v-else class="fa-solid fa-arrow-down-wide-short"></i>
					</a>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(city, index) in cities" :key="city">
				<th>{{ index + 1 }}</th>
				<td>{{ city.id }}</td>
				<td>{{ city.name }}</td>
				<td>{{ city.voivodship }}</td>
				<td>{{ city.population }}</td>
				<td>{{ city.area }}</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import { Filter, filterDefault } from '@/shared/interfaces/filter.model';
import { defineComponent } from 'vue';
// import { City } from '@/shared/interfaces/city.model';

export default defineComponent({
	name: 'CitiesList',

	props: {
		cities: Object,
	},

	data() {
		return {
			helloWorld: 'some text',
			count: 0,
			filter: filterDefault as Filter,
		};
	},

	methods: {
		increment() {
			this.count++;
		},
		sortBy(orderBy: string) {
			console.log('sort()', orderBy, this.filter.orderBy, this.filter.order);
			this.filter = { orderBy: orderBy, order: !this.filter.order };
			this.$emit('onSortCities', this.filter);
		},
	},
});
</script>
