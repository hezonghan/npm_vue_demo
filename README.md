# npm_vue_demo

This is a simple demo for creating vue project using npm (rather than directly introduce `vue.min.js`), and using the "single-file component (SFC)" style.

Each step in the following (git commands are omitted) corresponds to one commit of the git repo, so you can see the changes after each step.



### install `vue`+`webpack` environment

Run:

```
npm init

```

and input the information.



Run:

```
npm install --save  vue@3.2.37
npm install --save-dev  webpack@5.73.0  webpack-cli@4.10.0  vue-loader@17.0.0  vue-template-compiler@2.7.4

```



### create src files

The source files `index.html`, `main.js`, `app_1.vue` are prepared in SFC style.



### create `webpack.config.js` file

The file configures the webpack.



### webpack

Run (for Windows):

```
.\node_modules\.bin\webpack
```

to pack the sources, and get a bundle file.



### launch

A simple way to build a server to launch the app is using python's server. Run:

```
python -m http.server 8888
```

Then the app can be visited by a browser at

```
http://localhost:8888/
```

