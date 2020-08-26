import * as constant from '../actionType/actionType';

function filterTodoReducer (todoList = [], action) {
 if(action.type === constant.ALL_TODO){
     return  action.payload.todoItem.filter((val) => val);
 }else{
     return todoList
 }
}

export default filterTodoReducer;