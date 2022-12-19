## babel 使用
+ 转化 es6 语法到es5语法
+ 开发中，我们想要使用 ES6+ 的语法，想要使用TypeScript， 开发React 项目，他们都是离不开`Babel`的
+ 所以学习Babel对于我们理解代码从编写到线上的转变过程至关重要

### babel 到底是什么呢
+ babel 是一个工具链，主要
##### babel command
```shell
npx babel demo.js --out-dir dist
npx babel demo.js --out-file  test.js
```
##### babel 转化插件
+ @babel/plugin-transform-arrow-functions  # 转化Es6箭头函数到Es5
  + npm install @babel/plugin-transform-arrow-functions -D
+ @babel/plugin-transform-block-scoping  # 转化Es6块级作用域转换
  + npm install @babel/plugin-transform-block-scoping -D

##### babel 插件使用
```shell
npx babel demo.js --out-file test.js --plugins=@babel/plugin-transform-arrow-functions,@babel/plugin-transform-block-scoping
```

##### babel 的预设 preset
+ npm install @babel/preset-env -D

##### babel preset 预设使用
```shell
npx babel demo.js --out-file test.js --presets=@babel/preset-env
```