## Computed
### 计算属性的缓存
+ 计算属性会基于他们的依赖关系进行缓存；
+ 在数据不发生变化时，计算属性是不需要重新计算的；
+ 当数据发生变化时，计算属性才会进行重新计算；
### 计算属性的get和set方法
```javascript 
{
    fullName: {
        get: function() {
            return this.firstName + " " + this.lastName
        },
        set: function(newValue) {
            const names = newValue.split(" ")
            this.firstName = names[0]
            this.lastName = names[1]
        }
    }
}
```