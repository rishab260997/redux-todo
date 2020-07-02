import {takeLatest, put } from 'redux-saga/effects';
import {allTodos} from '../action/index';
import * as constant from '../actionType/actionType';

export function* allTodoSaga(data){
  if(data === 0){
      yield put(allTodos({ response: data }));
  } 
}

export function* allTodoRequest(){
    yield takeLatest(constant.ALL_TODO, allTodoSaga)
}