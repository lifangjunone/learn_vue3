const {merge} = require("webpack-merge")

const commonConfig = require("./webpack.comm.config")


module.exports = merge(commonConfig, {
    mode: "development",
    devtool: "source-map",
    devServer : { 
        static: "./pubilc",
        hot: true,
        host: "127.0.0.1",
        port: 7900,
        // open: true,
        compress: true,
        proxy: {
            "/api": {
            target: "https://www.baidu.com",
            pathRewrite: {
                "^/api": ''
            },
            secure: false,
            changeOrigin: true,
      }
    }
  },
})