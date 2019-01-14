# 展示组件

用来存放和redux无关的组件

## 约定

此项目每个组件需要编写 .d.ts 文件，每个组件都需要编写 PropTypes 及注释

如果是有状态的组件，组件在以下几个生命周期不可以去使用 window 和 document 对象的属性，目的是为了未来如果做 React 静态化 或者做 SSR 时不会遇到生命周期的问题：
  - constructor
  - UNSAFE_componentWillMount
  - render

## 依赖规则
展示组件内只能引用以下两个文件夹的东西：

  - purefunctions 纯函数
  - components 其他展示组件

## 内部文件夹规则
此项目内部不可再分文件夹，组件需要逐步被抽离至组件库

因为组件库的增大可能会有多种Button、Menu、Table，所以命名规范参考 UIKit 或 css 的 BEM 如：
```
components/
  LvtButton.d.ts
  LvtButton.js
  LvtButtonGroup.d.ts
  LvtButtonGroup.js
  LvtMenu/
    LvtMenu.d.ts
    LvtMenu.js
    LvtMenuItem.js
    LvtMenuItemHover.js
  LvtTable/
    LvtTable.d.ts
    LvtTable.js
    LvtTableHeader.js
    LvtTableFooter.js
    LvtTableLeft.js
    LvtTableRight.js
    LvtTableBody.js
  HBMenu/
    HBMenu.d.ts
    HBMenu.js
    HBMenuItem.js
    HBMenuItemHover.js
  ...
```

而不是：
```
components/
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

### HOC

高阶组件由 with 开头进行命名如：

```
components/
  withHover.js
  withAutoResize.js
```

### Hooks

组件推荐使用 Hooks 进行编写，use函数请遵循 react 生命周期的顺序生命

Hooks 现阶段虽然还属于 alpha 版本，但是已经经过社区近 3 个月的使用，稳定性完全没有问题，预计年后1-2个月就会发布正式版

Hooks 的缺点主要时 Hooks 的单元测试的生态还不够完善

Hooks 现阶段的缺点：
  - 由于组件是函数 Enzyme 无法获取到组建的实例化对象
  - styled-components 的 jest 插件还无法读取 Hooks对象中的 styled-components 样式快照
  - 在渲染中会重新声明组件内的函数，此处相对于类有一些不必要的性能消耗

Hooks 优点：
  - 官方承诺 100％ 向后兼容。挂钩不包含任何重大更改
  - Hooks 可以重用组件之间的状态逻辑
  - Hooks 避免了声明类及 bind 函数的大量开销，可以很方便的编写较小的组件
  - Hooks 配合 useMemo 可以更方便的控制一些精细的组件更新
  - Hooks 可以少写很多模版代码
  - Hooks 是一个函数，其 props 属性可以被 IDE 很容易的读取，从而带来比 class 对象更好的代码提示

