# Cities Explorer

Cities Explorer is a demo application that allows you to sort and filter a list of cities taken from a JSON file.

[cities-explorer.netlify.app](https://cities-explorer.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/c6e995c8-7e2d-45b4-bd3e-8863dae25552/deploy-status)](https://app.netlify.com/sites/cities-explorer/deploys)

## Basic assumptions

- filtering by city name
- sorting by city name (descending and ascending)
- automatic loading of city list from JSON file
- extracting the filter form to a separate component
- extracting the list of cities with sorting to a separate component

## Used technologies and libraries

Vue.js v3.x, Vue Router, Vuex, Bootstrap v5.1, Fontawesome, TypeScript, Sass, Eslint, Babel

## Launching the project

### Cloning repository:

```
git clone https://github.com/tdopierala/cities-explorer.git
```

### Project install:

```
npm install
```

### Compiles and hot-reloads for development:

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run unit tests (in development)

```
npm run test:unit
```

### Lints and fixes files

```
npm run lint
```

## TODO

- adding automated testing
- downloading city list from external rest api
- adding a new functionality of viewing details about selected cities
- added new functionality of marking cities as favourites and saving their state in local storage
- ...

## Copyright and license
Code and documentation copyright 2011–2022 the [Tomasz Dopierala](https://github.com/tdopierala).
Code released under the [Apache License 2.0](https://github.com/tdopierala/cities-explorer/blob/master/LICENSE).
