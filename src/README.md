# 目录划分规范

依照类别组织法进行划分目录, 而不是根据场景进行划分

具体划分规则编写在各自文件夹中

## 目录划分原则

```
actions/
    actionOf.js
    UserActions.js
components/
    Header.js
    Sidebar.js
    Command.js
    User.js
    UserProfile.js
    UserAvatar.js
containers/
    App.js
    Command.js
    User.js
reducers/
    index.js
    command.js
    user.js
routes.js
index.js
rootReducer.js
```

其中所有项目初始化相关的代码直接编写在 Initialize.js 文件夹当中