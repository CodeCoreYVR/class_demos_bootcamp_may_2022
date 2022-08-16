const HTMLWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  mode: "development",
  // For a single entry
  // entry: "./src/a.js"
  // For multiple entry files bundled into a single file, use an array
  // entry: ["./src/index.js", "./src/b.js"]
  // To create multiple bundle from separate entry files
  entry: {
    main: "./src/index.js",
    chunkA: "./src/a.js",
    chunkB: "./src/b.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    // filename: "chunk.js"
    filename: "[name].js"
  },
  module: {
    rules: [
      {
        loader: "file-loader",
        test: /\.(png|jpg|gif|webp|svg)$/,
        options: {
          outputPath: "images/",
          name: "[name].[ext]"
        }
      },
      {
        test: /\.css$/,
        use: [
          {loader: "style-loader"},
          {loader: "css-loader"}
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Webpack Demo", // <title></title>
      chunks: ["main"]
    })
  ]
}