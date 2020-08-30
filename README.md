# Ruta Verde Website Dev Branch
Development frontend for Ruta Verde. The source here is being served at [dev.ruta-verde.org](https://dev.ruta-verde.org). 

Changes to this branch will be picked up and deployed automatically.

## Project setup

1. Instal [git](https://git-scm.com/downloads), setup access and clone the dev branch.

```
git clone -b dev git@github.com:Ruta-Verde/website.git [folder]
```

2. Next install [yarn](https://classic.yarnpkg.com/en/docs/install) on your machine. This may require additional software (node.js, choco, etc).


3. Navigate to the project directory and install all the dependencies via yarn.

```
yarn install
```

### Compiles, serves and hot-reloads for development
```
yarn serve
```

### Run your unit tests
```
yarn test:unit
```

### Run your end-to-end tests
```
yarn test:e2e
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
