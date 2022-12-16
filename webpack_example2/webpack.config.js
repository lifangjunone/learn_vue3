const path = require('path')

module.exports = {
    entry: "./src/main.js",
    output: {
      path: path.resolve(__dirname, "./build"),
      filename: "bundle.js"
    },
    module: {
      rules: [
        { 
          test: /\.css$/, 
          use: [
            { loader: 'style-loader' },
            { loader: 'css-loader' }
          ],
        },
        {
          test: /\.(jpg|png|gif|svg|jpeg)$/,
          use:{ 
            loader: "file-loader", 
            options: {
              esModule: false,
            },
          },
          type: "javascript/auto"
        }
      ],
  },
}