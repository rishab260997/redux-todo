import { takeLatest, put } from "redux-saga/effects";
import * as constant from "../actionType/actionType";
import { checkTodos } from "../action/index";

export function* checkedTodoSaga(action) {
  let data = action;
  if (data === 0) {
    yield put(checkTodos({ response: data }));
  }
}

export function* checkTodoRequest() {
  yield takeLatest(constant.CHECK_TODO, checkedTodoSaga);
}
