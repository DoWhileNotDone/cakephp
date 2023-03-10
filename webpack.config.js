/* eslint-disable no-undef */
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

//Tailwind / Post css

module.exports = {
    mode: "development",
    entry: "./resources/js/main.js",
    output: {
        filename: "js/main.js",
        path: path.resolve(__dirname, "webroot"),
        assetModuleFilename: "assets/[hash][ext][query]",
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: "vue-loader",
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                ],
            },
            {
                test: /\.(woff2|eot|woff|svg|ttf)$/i,
                type: "asset/resource",
            },
        ],
    },
    plugins: [
        new VueLoaderPlugin(),
        new MiniCssExtractPlugin({ filename: "css/main.css" }),
    ],
};
