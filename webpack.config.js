module.exports = {
  entry: __dirname + "/src/script.jsx",
  output: {
    path: __dirname + "/dist/assets",
    filename: "bundle.js"
  },
  devServer: {
    contentBase: "dist/assets"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)/,
        exclude: /node_modules/,
        use: "babel-loader"
      }
    ]
  }
}