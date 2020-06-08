{
  mode: 'development',
  resolve: {
    modules: [
      'node_modules'
    ]
  },
  plugins: [],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          'kotlin-source-map-loader'
        ],
        enforce: 'pre'
      }
    ]
  },
  entry: {
    main: [
      '/Users/daniloherrera/IdeaProjects/KotlinForBrowser/build/js/packages/KotlinForBrowser/kotlin/KotlinForBrowser.js'
    ]
  },
  output: {
    path: '/Users/daniloherrera/IdeaProjects/KotlinForBrowser/build/distributions',
    filename: [Function: filename],
    library: 'KotlinForBrowser',
    libraryTarget: 'umd'
  },
  devtool: 'eval-source-map',
  devServer: {
    inline: true,
    lazy: false,
    noInfo: true,
    open: true,
    overlay: false,
    port: 8080,
    contentBase: [
      '/Users/daniloherrera/IdeaProjects/KotlinForBrowser/build/processedResources/Js/main'
    ]
  }
}