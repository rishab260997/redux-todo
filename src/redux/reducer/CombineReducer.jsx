import { combineReducers } from "redux";
import addReducer from "./AddReducer";

const rootReducer = combineReducers({
    AddReducerstatus: addReducer,
});

export default rootReducer;