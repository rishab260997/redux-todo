import { takeLatest, takeEvery } from 'redux-saga/effects'
import * as constant from '../actionType/actionType'
import {call,put} from 'redux-saga/effects';
import {addTodos} from '../action/index'


export function* AddTodoSaga(action) {
  let data = action.payload;
  console.log(data,"gggggggggggg")
    // yield put(addTodos({
    //   text: data.todo,
    //   completed : data.completed,
    //   date: data.dates,
    //   id: data.id
    // })
    // )
    if (data === 0) {
      yield put(addTodos({ response: data }));
    } 
}

export function* addTodoRequest() {
  yield takeLatest(constant.ADD_TODO, AddTodoSaga);
}



// export default mySaga;