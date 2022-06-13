<template>
	<navigation-view></navigation-view>
	<div class="container">
		<main>
			<router-view />
		</main>
	</div>
</template>

<script lang="ts">
import NavigationView from './views/NavigationView.vue';

import { defineComponent } from 'vue';

export default defineComponent({
	components: { NavigationView },
	name: 'App',
});
</script>

<style lang="scss">
#app {
	font-family: 'Open Sans', sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	color: #2c3e50;
}
</style>
