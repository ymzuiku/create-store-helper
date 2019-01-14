/**
 * 修改用户 vip
 * @param  {boolean} isVip
 */
export function actionOfUserChangeVip(isVip) {
  return {
    type: 'actionOfUserAddVip',
    reducer(state) {
      return state.setIn(['user', 'vip'], isVip);
    },
  };
}

/**
 * 用户登陆后修改用户状态
 * @param  {object} userData
 */
export function actionOfUserLogin(userData) {
  return {
    type: 'actionOfUserAddVip',
    reducer(state) {
      return state.update('user', v => ({ ...v, ...userData }));
    },
  };
}

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
