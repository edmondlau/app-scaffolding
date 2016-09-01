var path = require("path");
var webpack = require("webpack");

module.exports = {
    entry: [
        "./app/app.jsx",
        "webpack-dev-server/client?http://localhost:8080"
    ],
    output: {
        publicPath: "/",
        filename: "main.js"
    },
    debug: true,
    devtool: "source-map",
    module: {
        loaders: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: "babel",
                query: {
                    presets: [
                        "es2015",
                        "babel-preset-react"
                    ]
                }
            },
            {
                test: /\.js$/,
                include: path.join(__dirname, "src"),
                loader: "babel-loader",
                query: {
                    presets: ["es2015"]
                }
            },
            {
                test: /\.less$/,
                loader: "style!css!autoprefixer!less"
            },
        ]
    },
    devServer: {
        contentBase: "./app"
    }
};
