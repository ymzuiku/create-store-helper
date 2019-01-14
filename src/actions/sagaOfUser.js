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
