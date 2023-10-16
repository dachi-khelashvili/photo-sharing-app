import { all } from 'redux-saga/effects';
import { todosSaga } from './todos.saga';

export function* appSaga() {
  yield all([todosSaga()]);
}
