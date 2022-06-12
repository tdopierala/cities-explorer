<template>
	<table>
		<thead>
			<tr>
				<th>L.P.</th>
				<th>id</th>
				<th>name</th>
				<th>voivodship</th>
				<th>population</th>
				<th>area</th>
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
		};
	},

	methods: {
		increment() {
			this.count++;
		},
	},
});
</script>
