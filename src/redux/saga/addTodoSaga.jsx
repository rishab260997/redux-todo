import { takeLatest, takeEvery } from 'redux-saga/effects'
import * as constant from '../actionType/actionType'
import {
  call,
  put
} from 'redux-saga/effects';


function* addTodo(action) {
  let data = action.payload;
  console.log(data,"gggggggggggg")
    yield put(addTodo({
      text: data.text,
      completed : data.completed,
      duedat: data.duedats
    })
    )
}

function* mySaga() {
  yield takeLatest(constant.ADD_TODO, addTodo);
  // yield takeLatest(constant.DELETE_TODO, getCandidateWithSaga);
  // yield takeLatest(constant.CHECK_TODO, getReviewedByPageBySaga);
  // yield takeLatest(constant.ALL_TODO, dashboardData);
  // yield takeLatest(constant.COMPLETE_TODO, dashboardData);
  // yield takeLatest(constant.ACTIVE_TODO, dashboardData);
  // yield takeLatest(constant.ASC_TODO, dashboardData);
  // yield takeLatest(constant.DSC_TODO, dashboardData);
}

export default mySaga;