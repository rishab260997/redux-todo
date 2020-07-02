import { applyMiddleware, createStore } from "redux";
import watchAllSaga from "./saga/combineSaga";
import createSagaMiddleware from "redux-saga";
import rootReducer from "./reducer/CombineReducer";
const sagaMiddleware = createSagaMiddleware();
const middleWare = [];


middleWare.push(sagaMiddleware);
const store = createStore(
  rootReducer,
  applyMiddleware(...middleWare)
  // applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(watchAllSaga);

export default store;