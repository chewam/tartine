module.exports = {
    entry: "./public/javascripts/main.js",
    output: {
        filename: "bundle.js",
        path: __dirname + "/public/javascripts"
    },
    module: {
        loaders: [{
            test: /vendor\/.+\.(jsx|js)$/,
            loader: 'imports?jQuery=jquery,$=jquery,this=>window'
        // }, {
        //     test: /\.css$/,
        //     loader: "style!css"
        }]
    }
};
