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
          type: "asset/resource",
          parser: {
            dataUrlCondition: {
                maxSize: 100*1024
            }
          },
          generator: {
            filename: "images/[name]_[hash:8][ext]"
          }
        //   use:{ 
        //     loader: "file-loader", 
        //     options: {
        //         outputPath: "images",
        //         name: "[name]-[hash:6].[ext]",
        //         esModule: false,
        //     },
        //   },
        //   type: "javascript/auto"
        }
      ],
  },
}