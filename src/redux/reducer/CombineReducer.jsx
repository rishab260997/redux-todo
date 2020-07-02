import { combineReducers } from "redux";
import addReducer from "./AddReducer";
import deleteReducer from "./DeleteReducer";
import checkedReducer from './checkedReducer';
import allTodoReducer from './AllTodoReducer';

const rootReducer = combineReducers({
  AddReducerstatus: addReducer,
  DeleteReducerStatus: deleteReducer,
  CheckedReducerStatus: checkedReducer,
  AllTodoReducerStatus: allTodoReducer
});

export default rootReducer;
