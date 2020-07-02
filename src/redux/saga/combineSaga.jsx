import { addTodoRequest } from "./addTodoSaga";
import { fork, all } from "redux-saga/effects";
import {deleteTodoRequest } from "./deleteTodoSaga"; 

function* watchAllSaga() {
  {
    yield all([
      fork(addTodoRequest),
      fork(deleteTodoRequest)
    ]);
  }
}

export default watchAllSaga;