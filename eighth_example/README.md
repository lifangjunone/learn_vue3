## 拷贝
### 浅拷贝
```javascript
const info = {
    name: "lifangjun",
    age: 18,
    hobby: {
        "sing",
        "dance"
    }
}
const shallowCopy = Object.assign({}, info)
```
### 深拷贝
```javascript
const info = {
    name: "lifangjun",
    age: 18,
    hobby: {
        "sing",
        "dance"
    }j
}
const deepCopy = JSON.parse(JSON.stringify(info))
```