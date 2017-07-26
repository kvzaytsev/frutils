const path = require('path');

module.exports = {
    entry: "./src/index.js",
    
    output: {
      library: "frutils",
      libraryTarget: "umd",
      path: path.resolve(__dirname, "dist"),
      filename: "frutils.js"
    },

    module: {
        rules: [
            {
              test: /\.js$/,
              exclude: /(node_modules)/,
              loader: "babel-loader", // Do not use "use" here
              options: {}
            }
        ]
    }
};