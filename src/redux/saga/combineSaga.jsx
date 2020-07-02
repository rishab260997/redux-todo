import { addTodoRequest } from "./addTodoSaga";
import { fork, all } from "redux-saga/effects";
function* watchAllSaga() {
  {
    yield all([
      fork(addTodoRequest),
    ]);
  }
}

export default watchAllSaga;