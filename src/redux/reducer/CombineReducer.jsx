import { combineReducers } from "redux";
import addReducer from "./AddReducer";
import filterTodoReducer from './FilterTodoReducer';

const rootReducer = combineReducers({
  AddReducerstatus: addReducer,
  FilterTodoReducerStatus: filterTodoReducer,
  // CheckedReducerStatus: checkedReducer,
  // AllTodoReducerStatus: allTodoReducer
});

export default rootReducer;
