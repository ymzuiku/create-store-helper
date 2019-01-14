import {Store} from 'redux'

export function createStoreWithSaga(sagas:object, isUseReduxTool:boolean):Store;
export function createStoreWithThunk(isUseReduxTool:boolean):Store;
export function autoLocalStorage(store:Store, localName:string, needSaveKeys:Array<string|Array<string>>):void;
export const storage;