# WordPress starter theme with Vue.js integrated.
This theme pretty much includes only a way to compile your assets with Vue code. 
It's meant for you to learn Vue inside WordPress, or to create your own theme.
It includes an example component. 
I'm using Gulp+Webpack to compile the assets. Gulp handles the CSS and running Webpack, while Webpack handles JS. 

Clone the theme, run ```npm install``` and start playing. 

## commands
1. ``` gulp ``` Will compile, start BrowserSync and watch for any changes.
2. ``` gulp production ``` Will compile and minify assets. 

Make sure to modify the BrowserSync proxy link inside the gulpfile.js. 

## Vue devtools
Download it [here](https://github.com/vuejs/vue-devtools#vue-devtools)
