<template>
	<nav>
		<ul>
			<li><router-link to="/">Home</router-link></li>
			<li><router-link to="/about">About</router-link></li>
			<li><router-link to="/cities">Cities</router-link></li>
		</ul>
	</nav>
	<router-view />
</template>

<style lang="scss">
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}

nav {
	padding: 30px;

	ul {
		padding: 0;
		list-style: none;
		display: flex;
		align-content: center;

		a {
			font-weight: bold;
			color: #2c3e50;
			margin: 5px 10px;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
}
</style>
