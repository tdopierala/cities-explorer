<template>
	<table class="table table-striped table-hover">
		<thead>
			<tr>
				<th>l.p.</th>
				<th class="right">
					id
					<a href="#" @click.prevent="sortBy('id')" :class="sortParams.orderBy === 'id' ? 'active' : ''">
						<i v-if="sortParams.orderBy === 'id' && sortParams.order" class="fa-solid fa-arrow-down-9-1"></i>
						<i v-else-if="sortParams.orderBy === 'id' && !sortParams.order" class="fa-solid fa-arrow-up-1-9"></i>
						<i v-else class="fa-solid fa-arrow-down-wide-short"></i>
					</a>
				</th>
				<th class="left">
					name
					<a href="#" @click.prevent="sortBy('name')" :class="sortParams.orderBy === 'name' ? 'active' : ''">
						<i v-if="sortParams.orderBy === 'name' && sortParams.order" class="fa-solid fa-arrow-down-z-a"></i>
						<i v-else-if="sortParams.orderBy === 'name' && !sortParams.order" class="fa-solid fa-arrow-up-a-z"></i>
						<i v-else class="fa-solid fa-arrow-down-wide-short"></i>
					</a>
				</th>
				<th class="left">voivodship</th>
				<th class="right">
					population
					<a href="#" @click.prevent="sortBy('population')" :class="sortParams.orderBy === 'population' ? 'active' : ''">
						<i v-if="sortParams.orderBy === 'population' && sortParams.order" class="fa-solid fa-arrow-down-9-1"></i>
						<i v-else-if="sortParams.orderBy === 'population' && !sortParams.order" class="fa-solid fa-arrow-up-1-9"></i>
						<i v-else class="fa-solid fa-arrow-down-wide-short"></i>
					</a>
				</th>
				<th class="right">
					area
					<a href="#" @click.prevent="sortBy('area')" :class="sortParams.orderBy === 'area' ? 'active' : ''">
						<i v-if="sortParams.orderBy === 'area' && sortParams.order" class="fa-solid fa-arrow-down-9-1"></i>
						<i v-else-if="sortParams.orderBy === 'area' && !sortParams.order" class="fa-solid fa-arrow-up-1-9"></i>
						<i v-else class="fa-solid fa-arrow-down-wide-short"></i>
					</a>
				</th>
			</tr>
		</thead>
		<tbody>
			<tr v-for="(city, index) in cities" :key="city">
				<th>{{ index + 1 }}</th>
				<td class="right">{{ city.id }}</td>
				<td class="left">{{ city.name }}</td>
				<td class="left">{{ city.voivodship }}</td>
				<td class="right">{{ city.population.toLocaleString().replaceAll(',', ' ') }}</td>
				<td class="right">{{ parseFloat(city.area).toFixed(2) }} km<sup>2</sup></td>
			</tr>
			<tr v-if="cities.length === 0">
				<td colspan="6">
					<h3>Sorry! No more cities found. <i class="fa-solid fa-face-frown"></i></h3>
				</td>
			</tr>
		</tbody>
	</table>
</template>

<script lang="ts">
import { SortParams, paramsDefault } from '@/shared/interfaces/sortParams.model';
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CitiesList',

	props: {
		cities: Array,
	},

	data() {
		return {
			sortParams: paramsDefault as SortParams,
		};
	},

	methods: {
		sortBy(orderBy: string) {
			this.sortParams = { orderBy: orderBy, order: !this.sortParams.order };
			this.$emit('onSortCities', this.sortParams);
		},
	},
});
</script>

<style lang="scss" scoped>
table {
	a {
		color: #333;
	}

	a:hover {
		color: #333;
	}

	a.active {
		color: red;
	}

	.right {
		text-align: right;
	}

	.left {
		text-align: left;
	}

	h3 {
		margin: 10px 0;
		text-align: center;
	}
}
</style>
