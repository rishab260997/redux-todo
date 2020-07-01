import { applyMiddleware, createStore } from "redux";
import todoReducer from "./reducer/reducer";
import mySaga from "./saga/addTodoSaga";
import createSagaMiddleware from "redux-saga";
const sagaMiddleware = createSagaMiddleware();
const middleWare = [];


middleWare.push(sagaMiddleware);
const store = createStore(
    todoReducer,
  applyMiddleware(...middleWare)
  // applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(mySaga);

export default store;