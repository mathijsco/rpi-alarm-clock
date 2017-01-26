var path = require('path');

module.exports = {
    context: path.join(__dirname, "src"),

    entry: { main: "./main" },
    devtool: "source-map",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js"
    },

    resolve: {
        extensions: [".ts"]
    },

    module: {
        loaders: [
            { test: /\.ts$/, loader: "ts-loader" }
        ]
    }
};