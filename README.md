# create store helper

store.js

```js
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
```

action.js

```js
/**
 * 设置用户的照片集
 * @param  {Array} photos
 */
export function actionOfSetUserPhotos(photos) {
  return {
    type: 'actionOfLoadPhotos',
    reducer(state) {
      state = state.setIn(['user', 'photosError'], false);
      return state.setIn(['user', 'photos'], photos);
    },
  };
}

/** 设置用户的照片集 */
export function actionOfSetUserPhotosError() {
  return {
    type: 'actionOfLoadPhotos',
    reducer(state) {
      return state.updateIn(['user', 'photosError'], true);
    },
  };
}

```

saga.js

```js
import axios from 'axios';
import * as actions from 'src/actions/actions';

/** 获取照片信息 */
export function sagaOfUserGetPhotos() {
  return {
    type: 'sagaOfUserGetPhotos',
    saga({ call, put }) {
      return function*() {
        try {
          const res = yield call(axios.get, ['https://pixabay.com/api/?key=8089180-a586bdfbeea5884bd5e24a138']);
          if (res && res.data) {
            yield put(actions.actionOfSetUserPhotos(res.data));
          }
        } catch (error) {
          // yield put({ type: types.errorFetchFainl, payload: error });
          yield put(actions.actionOfSetUserPhotosError());
        }
      };
    },
  };
}
```