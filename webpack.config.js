const webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");
var BrowserSyncPlugin = require('browser-sync-webpack-plugin');
//webpackDevMiddleware = require("webpack-dev-middleware");

const config = {
    entry: {
        bundle: [
            //'dev':path.resolve('webpack-dev-server.js'),
            path.resolve(__dirname, 'precompile/build.js'),
            'webpack/hot/dev-server'
            //'webpack-hot-middleware/client'

        ]
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: '[name].js',
        publicPath: "http://localhost/"
    },
    resolve: {
        modulesDirectories: ["web_modules", "node_modules", "bower_components", "js"]
    },
    watch: true,
    module: {
        loaders: [
            { test: /\.css$/, loader: "style-loader!css-loader" },
            //{ test: /\.coffee$/, loader: "coffee-loader" },
            { test: /\.less$/, loader: "style-loader!css-loader!less-loader" }
            //{test: /\.scss$/, loaders: ["style", "css", "sass"]}
            //{ test: /\.pug$/, loader: "pug-loader" }
            //{ test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192'}
        ]
    },
    plugins: [
        new webpack.ResolverPlugin(
            new webpack.ResolverPlugin.DirectoryDescriptionFilePlugin(".bower.json", ["main"])
        ),
        // new ExtractTextPlugin("./css/styles.css", {
        //     allChunks: true
        // }),
        new webpack.HotModuleReplacementPlugin(),
        // activates HMR
        new webpack.NoErrorsPlugin(),
        new BrowserSyncPlugin(
            // BrowserSync options 
            {
                // browse to http://localhost:3000/ during development 
                host: 'localhost',
                port: 3100,
                // proxy the Webpack Dev Server endpoint 
                // (which should be serving on http://localhost:3100/) 
                // through BrowserSync 
                proxy: 'http://localhost:3000/'
            },
            // plugin options 
            {
                // prevent BrowserSync from reloading the page 
                // and let Webpack Dev Server take care of this 
                reload: false
            }
        )

    ],
};

module.exports = config;
