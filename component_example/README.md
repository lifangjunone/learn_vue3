# component_example

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### 组件之间的通信
- 父子组件之间的通信
  - 父 -> 子: 通过 props 属性
    - 在开发父组件有一些数据，需要子组件来进行展示，这个时候就可以通过 props 来完成父子组件之间的通信
    - 什么是 props:
      - Props 是你给组件注册的一些自定义的 attribute
      - 父组件给 attribute 赋值，子组件通过 attribute 获取值
    - type 
      - String
      - Number
      - Boolean
      - Array
      - Object
      - Date
      - Function
      - Synbol
  - 子 -> 父: 通过 $emit 触发事件
- 非父子组之间的通信
