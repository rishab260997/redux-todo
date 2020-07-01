import { createAction } from "redux-actions";
import * as constant from "../actionType/actionType";

export const addTodos = createAction(constant.ADD_TODO);
export const deleteTodos = createAction(constant.DELETE_TODO);
export const checkTodos = createAction(constant.CHECK_TODO);
export const allTodos = createAction(constant.ALL_TODO);
export const completeTodos = createAction(constant.COMPLETE_TODO);
export const ascTodos = createAction(constant.ASC_TODO);
export const dscTodos = createAction(constant.DSC_TODO);
