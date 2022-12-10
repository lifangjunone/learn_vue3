## watch 监听器
+ 开发中我们在data返回的对象中定义了数据，这个数据通过差值语法等方式绑定到template中；
+ 当数据发生变化时，template会自动进行更新显示最新的数据；
+ 但是在某些情况下，我们希望在代码逻辑中监听某个数据的变化，这个时候就需要用到监听器watch来完成了；

## 示例
+ 数据本身监听（只能做监听数据本身的改变，不能监听数据内部发生改变的监听）
```javascript
// 默认情况下我们的监听器只会针对监听的数据本身的改变做监听，数据内部发生的改变是不能被监听的
info(newInfo, oldInfo) {
    console.log("新值：", newInfo, "旧值：", oldInfo);
}
```
+ 深度监听（监听数据本身，并且监听数据内部发生变化是也能进行监听）
```javascript
info: {
    handler(newInfo, oldInfo) {
        console.log("新值：",newInfo, "旧值：", oldInfo);
    },
    deep: true
}
```
+ 立即执行（第一次不管数据有没有变化都会执行一次）
```javascript
info: {
    handler(newInfo, oldInfo) {
        console.log("新值：",newInfo, "旧值：", oldInfo);
    },
    immediate: true // 立即执行
}
```