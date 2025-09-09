const path = require("path");

module.exports = {
    // context: path.resolve(__dirname, "dist"),
    entry: "./src/index.js",
    output:{
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    devServer: {
        hot: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
    }
}