# Steps to initialize the project

## Create a new project

```sh
npm install -g @vue/cli
```

```sh
vue create vue3-tech
cd vue3-tech
```

## Add PWA service worker

```sh
vue create vue3-tech && cd vue3-tech
```

## Install dependencies

```sh
npm install -D tailwindcss postcss autoprefixer @tailwindcss/forms @tailwindcss/typography
npx tailwindcss init -p
```

## Add config package.json

```json
"scripts": {
    "serve": "vue-cli-service serve && tailwindcss build -i ./src/css/app.css -o ./public/css/app.css",
    "build": "vue-cli-service build && tailwindcss build -i ./src/css/app.css -o ./public/css/app.css --minify",
    "lint": "vue-cli-service lint"
}
```

## Install & build

```sh
npm install && npm run build
```
