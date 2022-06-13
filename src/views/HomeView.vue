<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<article>
					<p class="logo"><i class="fa-solid fa-city"></i></p>

					<h1>Welcome to Cities Explorer</h1>

					<p class="subtitle">An app created to explore knowledge about famous cities</p>

					<p>Want to learn more about the app? Check out the <router-link to="/about">About page</router-link>.</p>

					<p>If you want to go straight to exploration, go to the <router-link to="/explore">Explore page</router-link>.</p>
				</article>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'HomeView',
});
</script>

<style lang="scss" scoped>
article {
	text-align: center;
	line-height: 2rem;

	h1 {
		font-size: 4rem;
		margin: 1em 0;
	}

	p {
		font-size: 1.5rem;
		margin: 1em;
	}

	.subtitle {
		font-size: 2rem;
	}

	a {
		color: #42b983;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.logo {
		font-size: 5rem;
		color: #42b983;
	}
}
</style>
