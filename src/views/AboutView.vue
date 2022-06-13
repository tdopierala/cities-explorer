<template>
	<div class="container">
		<div class="row">
			<div class="col">
				<article>
					<h1>About Cities Explorer</h1>

					<section class="lead">
						<p>Cities Explorer is a demo application that allows you to sort and filter a list of cities taken from a JSON file.</p>
					</section>

					<section>
						<h3>Basic assumptions:</h3>
						<ul>
							<li>filtering by city name</li>
							<li>sorting by city name (descending and ascending)</li>
							<li>automatic loading of city list from JSON file</li>
							<li>extracting the filter form to a separate component</li>
							<li>extracting the list of cities with sorting to a separate component</li>
						</ul>
					</section>

					<section>
						<h3>Użyte technologie i biblioteki</h3>
						<p>
							<span class="badge bg-success">Vue.js v3.x</span>
							<span class="badge bg-secondary">Vue Router</span>
							<span class="badge bg-info text-dark">Vuex</span>
							<span class="badge bg-primary">Bootstrap v5.1</span>
							<span class="badge bg-warning text-dark">Fontawesome</span>
							<span class="badge bg-primary">TypeScript</span>
							<span class="badge bg-danger">Sass</span>
							<span class="badge bg-info text-dark">Eslint</span>
							<span class="badge bg-secondary">Babel</span>
						</p>
					</section>

					<section>
						<h3>Uruchomienie projektu</h3>
						<h4>Project setup:</h4>
						<p><code>npm install</code></p>
						<h4>Compiles and hot-reloads for development:</h4>
						<p><code>npm run serve</code></p>
						<h4>Compiles and minifies for production</h4>
						<p><code>npm run build</code></p>
						<h4>Run unit tests (in development)</h4>
						<p><code>npm run test:unit</code></p>
						<h4>Lints and fixes files</h4>
						<p><code>npm run lint</code></p>
					</section>

					<section>
						<h3>TODO</h3>
						<ul>
							<li>adding automated testing</li>
							<li>downloading city list from external rest api</li>
							<li>adding a new functionality of viewing details about selected cities</li>
							<li>added new functionality of marking cities as favourites and saving their state in local storage</li>
							<li>...</li>
						</ul>
					</section>
				</article>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
article {
	line-height: 1.7em;

	h1 {
		font-size: 3rem;
		font-weight: bold;
	}

	h3 {
		font-size: 1.6rem;
		font-weight: bold;
	}

	h4 {
		font-size: 1rem;
		font-weight: bold;
	}

	section {
		margin: 30px 0;
	}

	.lead {
		font-size: 1.5rem;
	}

	.badge {
		margin: 0 2px;
	}
}
</style>
