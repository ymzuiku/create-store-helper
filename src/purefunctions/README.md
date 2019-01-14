# 纯函数（工具方法）

用来存放纯函数， 纯函数满足以下两个条件：
  - 返回结果只依赖于它的参数
  - 执行过程没有副作用

## 依赖规则
此文件内不允许引入其他文件夹内的内容
并且确保纯函数直接没有引用，即任何一个文件都可以被拷贝至其他项目进行执行

## 内部文件夹规则
此文件内不允许再有文件夹

- 内部文件一律使用驼峰命名，不要使用下划线和中横线
- 一个文件夹尽量只做(暴露)一件事情，这样就可以在文件名上识别该文件的目的
- 文件名尽量是动词+名词

命名规范如：

```
checkStringIsPassword.js
checkStringIsEmail.js
getDeviceInfo.js
createStoreFromReduxSaga.js
```

而不是：

```
stringChecker.js
deviceHelper.js
create-store-redux-sage.js
```