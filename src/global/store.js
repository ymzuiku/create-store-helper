import * as sagas from 'src/actions/sagas';
import { Map } from 'immutable';
import { createStoreWithSaga, autoLocalStorage } from 'src/purefunctions/index.lib';

const store = createStoreWithSaga(sagas);

// 初始化 state
const initState = Map({ user: {} });
store.dispatch({ type: 'init-state', reducer: () => initState });

// 监听本地对象
autoLocalStorage(store, 'test-a', ['aaa']);

export default store;
