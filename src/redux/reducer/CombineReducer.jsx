import { combineReducers } from "redux";
import addReducer from "./AddReducer";
import deleteReducer from "./DeleteReducer";

const rootReducer = combineReducers({
  AddReducerstatus: addReducer,
  DeleteReducerStatus: deleteReducer,
});

export default rootReducer;
