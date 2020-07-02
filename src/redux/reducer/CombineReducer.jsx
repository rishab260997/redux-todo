import { combineReducers } from "redux";
import addReducer from "./AddReducer";
import deleteReducer from "./DeleteReducer";
import checkedReducer from './checkedReducer';

const rootReducer = combineReducers({
  AddReducerstatus: addReducer,
  DeleteReducerStatus: deleteReducer,
  CheckedReducerStatus: checkedReducer
});

export default rootReducer;
