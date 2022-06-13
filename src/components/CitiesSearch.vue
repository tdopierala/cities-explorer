<template>
	<form>
		<label for="searchCity">Find</label>
		<input type="text" id="searchCity" name="searchCity" @input="filterCity" />
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CitiesSearch',

	data() {
		return {};
	},

	methods: {
		filterCity($event: Event) {
			const target = $event.target as HTMLInputElement;
			console.log(target.value);
			this.$emit('onFilterCities', target.value);
		},
	},
});
</script>
