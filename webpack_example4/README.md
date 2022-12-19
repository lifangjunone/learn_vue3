## babel 使用
+ 转化 es6 语法到es5语法
+ 开发中，我们想要使用 ES6+ 的语法，想要使用TypeScript， 开发React 项目，他们都是离不开`Babel`的
+ 所以学习Babel对于我们理解代码从编写到线上的转变过程至关重要

### babel 到底是什么呢
+ babel 是一个工具链，主要用于就浏览器或者环境中将ECMAScript2015+代码转换为向后兼容版本的JavaScript
+ 包括：语法转换，源代码转化等

### babel 的底层原理
+ babel 是如何做到将我们的一段代码（ES6, Typescript, Reach)转成另外一段代码（ES5）的呢？
  + 从一种源代码（原生语言）转换成另一种源代码（目标语言）这是什么的工作呢？
  + 就是编译器，事实上我们可以将 babel看成就是一个编译器
  + babel 编译器的作用就是将我们的源代码，转换成浏览器可以直接识别的另外一段源代码
+ babel 也拥有编译器的工作流程：
  + 解析阶段（parsing）
  + 转换阶段（transformation）
  + 生成阶段（Code generation）

### babel 命令行使用
+ babel 本身可以作为一个独立的工具，和postcss一样，不和webpack等构建工具配置来单独使用
+ 如果我们希望在命令行尝试使用babel，需要安装如下的库
  + @babel/core: babel的核心代码，必须安装
  + @babel/cli: 可以让我们在命令行使用babel

### babel 安装
```shell 
npm install @babel/core @babel/cli  -D
npm install babel-loader -D
```
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
## 