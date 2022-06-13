<template>
	<form @submit.prevent>
		<input @input="filterCity" class="form-control" type="text" id="searchCity" name="searchCity" placeholder="Search city" />
	</form>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'CitiesSearch',

	methods: {
		filterCity($event: Event) {
			const target = $event.target as HTMLInputElement;
			this.$emit('onFilterCities', target.value);
		},
	},
});
</script>

<style lang="scss">
form {
	margin: 30px 0;
}
</style>
