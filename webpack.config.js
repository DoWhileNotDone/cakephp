/* eslint-disable no-undef */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");

module.exports = {
    mode: "development",
    entry: "./resources/js/main.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "webroot/js"),
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: ["vue-style-loader", "css-loader"],
            },
        ],
    },
    plugins: [new VueLoaderPlugin()],
};
