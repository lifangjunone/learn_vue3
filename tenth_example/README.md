## v-model 的基本使用
- 表单提交是开发中非常常见的功能，也是和用户交互的重要手段；
  - 比如用户在登录，注册时需要提交账号和密码；
  - 比如用户在检索，创建，更新信息时，需要提交一些数据；
- 这些都要求我们可以在代码逻辑中获取到用户提交的数据，我们通常会使用 `v-model` 指令来完成；
  - v-model 指令可以在表单 input， textarea 以及 select 元素上创建双向数据绑定；
  - 它会根据控件类型自动选取正确的方法来更新元素；
  - 尽管有些神奇，但 v-model 本质上不过是语法糖，他负责监听用户的输入事件来更新数据，并在某种极端场景下进行一些特殊处理

## v-model 的原理
+ v-model的原理其实是背后有两个操作
  + v-bind 绑定value属性的值
  + v-on 绑定input事件监听到函数中，函数会获取最新的值赋值到绑定的属性中
+ 
    ```javascript
    <input v-model="searchText"/>
    等价于
    <input :value="searchText" @input="searchText=$event.target.value"/>
    ```