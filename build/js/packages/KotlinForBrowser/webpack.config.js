var config = {
  mode: 'development',
  resolve: {
    modules: [
      "node_modules"
    ]
  },
  plugins: [],
  module: {
    rules: []
  }
};

// entry
config.entry = {
    main: ["/Users/daniloherrera/IdeaProjects/KotlinForBrowser/build/js/packages/KotlinForBrowser/kotlin/KotlinForBrowser.js"]
};

config.output = {
    path: "/Users/daniloherrera/IdeaProjects/KotlinForBrowser/build/distributions",
    filename: (chunkData) => {
        return chunkData.chunk.name === 'main'
            ? "KotlinForBrowser.js"
            : "KotlinForBrowser-[name].js";
    },
    library: "KotlinForBrowser",
    libraryTarget: "umd",
};

// source maps
config.module.rules.push({
        test: /\.js$/,
        use: ["kotlin-source-map-loader"],
        enforce: "pre"
});
config.devtool = 'eval-source-map';

// dev server
config.devServer = {
  "inline": true,
  "lazy": false,
  "noInfo": true,
  "open": true,
  "overlay": false,
  "port": 8080,
  "contentBase": [
    "/Users/daniloherrera/IdeaProjects/KotlinForBrowser/build/processedResources/Js/main"
  ]
};

// save evaluated config file
var util = require('util');
var fs = require("fs");
var evaluatedConfig = util.inspect(config, {showHidden: false, depth: null, compact: false});
fs.writeFile("/Users/daniloherrera/IdeaProjects/KotlinForBrowser/build/reports/webpack/KotlinForBrowser/webpack.config.evaluated.js", evaluatedConfig, function (err) {});

module.exports = config
