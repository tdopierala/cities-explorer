<template>
	<header>
		<div class="container">
			<nav>
				<h1>
					<router-link to="/"><i class="fa-solid fa-city"></i> CE</router-link>
				</h1>
				<ul>
					<li><router-link to="/">Home</router-link></li>
					<li><router-link to="/about">About</router-link></li>
					<li><router-link to="/explore">Explore</router-link></li>
				</ul>
			</nav>
		</div>
	</header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
	name: 'NavigationView',
});
</script>

<style lang="scss">
header {
	background-color: #2c3e50;
	color: #fff;
	margin-bottom: 30px;

	nav {
		display: flex;
		align-items: center;
		justify-content: space-between;

		h1 {
			font-size: 2rem;
			margin: 0;
			background-color: #42b983;

			a {
				display: block;
				padding: 7px 20px;
			}
		}

		a,
		a:hover {
			color: #fff;
			text-decoration: none;
		}

		ul {
			padding: 0;
			margin: 0;
			list-style: none;
			display: flex;
			align-content: center;

			li {
				a {
					display: block;
					padding: 15px 20px;
					background-color: #42b983;
					font-weight: bold;
					/* padding-bottom: 10px;
					border-bottom: #42b983 5px solid; */

					&.router-link-exact-active {
						/* color: #2c3e50; */
						background-color: #2aac71;
					}
				}

				a:hover {
					background-color: #2c3e50;
					color: #42b983;
				}
			}
		}
	}
}
</style>
