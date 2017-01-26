var path = require('path');
var nodeExternals = require('webpack-node-externals');

module.exports = {
    context: path.join(__dirname, "src"),
    entry: { main: "./main" },

    target: "node",
    externals: [nodeExternals()],
    devtool: "source-map",

    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },

    resolve: {
        root: [
            path.resolve("."),
            path.resolve("./src")
        ],
        extensions: ["", ".ts", ".js"]
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};