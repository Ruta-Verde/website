# Ruta Verde Website Dev Branch

Development frontend for Ruta Verde built in [react.js](https://reactjs.org). The source here is being served at [dev.ruta-verde.org](https://dev.ruta-verde.org).

Please create your own branch and submit a pull-request to submit changes. \
**Changes to this branch will be picked up and deployed automatically.**

## Project setup

1. Install [npm](https://www.npmjs.com/get-npm) on your machine. This may require additional software (node.js, choco, etc).

npm is what we use as a package manager and for compiling/serving the website the environment on your local machine.

2. Use yarn to install the [vuecli](https://cli.vuejs.org).

```
yarn global add @vue/cli
```

3. Install [git](https://git-scm.com/downloads), setup access and clone the dev branch.

```
git clone -b dev git@github.com:Ruta-Verde/website.git [folder]
```

4. Navigate to the project directory and create your own branch for development.

```
cd [folder]
git branch -b [my-branch]
```

5. Install all the project dependencies via yarn.

```
yarn install
```

6. Run the site locally with `yarn serve`.

### Compiles, serves and hot-reloads for development

```
yarn serve
```

### Build for prod

```
yarn build
```

### Lints and fixes files

```
yarn lint
```

### Run your unit tests

```
yarn test:unit
```

### Run your end-to-end tests

```
yarn test:e2e
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).
