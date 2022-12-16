## Webpack 基础打包
#### 打包流程
```shell
npm init -y   # 初始化package.json 文件
npm install webpack webpack-cli -D   # 安装打包工具
npx webpack   # 使用当前项目下的webpck进行打包
npx webpack --entry ./src/main.js --output-path ./build
```