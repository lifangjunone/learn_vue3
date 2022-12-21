## webpack usage vue3
### vue3 install command
```shell
npm install vue@next
npm install clean-webpack-plugin -D
npm install html-webpack-plugin -D
npm install copy-webpack-plugin -D
npm install vue-loader@next -D
npm install @vue/compiler-sfc -D
npm install webpack-dev-server -D
npm install axios
npm install webpack-merge -D
```

## DevServer
+ 目前我们开发的代码，为了运行需要有两个操作
  + 操作一： npm run  build 编译相关的代码
  + 操作二： 通过 live server 或者直接通过浏览器，打开 index.html 代码，查看效果
+ 这个过程经常操作会影响我们的开发效率，我们希望可以做到，当文件发生变化时，可以自动的完成 编译 和展示
+ 为了完成自动编译， webpack 提供了几种可选的方式
  + webpack watch mode
  + webpack-dev-server
  + webpack-dev-middleware

## webpack watch
+ webpack 给我们提供了 watch 模式
  + 在该模式下， webpack 以来图中的所有文件，只要有一个发生了更新，那么代码将重新编译
  + 我们不需要手动去运行 npm run build 指令了
+ 如何开启 watch 
  + 方式一： 在导出的配置中，添加 watch：true
  + 方式二： 在启动 webpack的命令中，添加 --watch 的标识

## webpack-dev-server
+ 上面的方式可以监听到文件的变化，但是事实上它本身是没有自动刷新浏览器的功能的
  + 当然，目前我们可以在 VScode中使用 live-server 来完成这样的功能
  + 但是， 我们希望不在使用 live-server的情况下， 可以具备 live reloading 实时重新加载的功能

## Proxy

 