# 项目动作(状态)管理

此文件夹用来存放整个项目的动作及数据处理，每个动作结束进行数据处理

actions: 用来存放所有 actions，actions是纯函数，所有有副作用的action都应该放在sagas中
sagas: 用来存放所有有副作用的actions（saga）

## 约定
此文件夹的代码需要保证单元测试覆盖率

## 依赖规则
此文件夹只能引入以下文件夹的内容：

  - purefunctions 纯函数
  - configs 配置文件夹

## 内部文件夹规则
此文件内不允许再有文件夹

命名规范如：
```
actions/
  actions.js
  actionOfUser.js
  actionOfOrderCreate.js
  actionOfOrderPlace.js
  actionOfProducts.js
  sagas.js
  sagasOfUserUpdate.js
  sagasOfUserLoader.js
  sagasOfOrderCreate.js
  ...
```

而不是：
```
actions/
  actions.js
  userActions.js
  orderCreateActions.js
  orderPlaceActions.js
  productsActions.js
  sagas.js
  userUpdateSaga.js
  userLoaderSaga.js
  orderCreateSaga.js
  ...
```