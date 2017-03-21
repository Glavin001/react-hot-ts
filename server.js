var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');
var path = require("path");

new WebpackDevServer(webpack(config), {
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: { colors: true },
    noInfo: false,
    quiet: false,
}).listen(3000, "localhost", (err) => {
    if (err) {
        console.log(err)
    }
    console.log("Listening at http://localhost:3000/");
})
