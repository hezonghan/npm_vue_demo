
const path = require('path');

// const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const VueLoaderPlugin = require('vue-loader/lib/plugin-webpack5');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
    entry: "./main.js",
    output: {
        path: path.resolve(__dirname),  // , 'dist'),
        filename: 'main_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    // mode: 'production'
    mode: 'development'
}
