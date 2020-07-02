import { addTodoRequest } from "./addTodoSaga";
import { fork, all } from "redux-saga/effects";
import {deleteTodoRequest } from "./deleteTodoSaga"; 
import { checkTodoRequest } from './checkedSaga';
import { allTodoRequest } from './allTodoSaga';

function* watchAllSaga() {
  {
    yield all([
      fork(addTodoRequest),
      fork(deleteTodoRequest),
      fork(checkTodoRequest),
      fork(allTodoRequest)
    ]);
  }
}

export default watchAllSaga;