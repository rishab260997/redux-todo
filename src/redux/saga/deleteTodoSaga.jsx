import { takeLatest } from 'redux-saga/effects'
import * as constant from '../actionType/actionType'
import {put} from 'redux-saga/effects';
import {deleteTodos} from '../action/index'


export function* DeleteTodoSaga(action) {
  let data = action;
    if (data === 0) {
      yield put(deleteTodos({ response: data }));
    } 
}

export function* deleteTodoRequest() {
  yield takeLatest(constant.DELETE_TODO, DeleteTodoSaga);
}



