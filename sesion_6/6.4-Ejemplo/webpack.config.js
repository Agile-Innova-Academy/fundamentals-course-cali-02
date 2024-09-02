const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"), //carpeta de salida
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/, // archivos que tipo .js
        use: { loader: "babel-loader" },
        exclude: /node_modules/, //No va usar los archivos que estendentro de node_modules
      },
      {
        test: /\.json$/, // archivos que tipo .json
        type: "json",
      },
    ], // use babel para transpilar
  },
  mode: "production", //Modo de desarrollo ó 'production'
};
