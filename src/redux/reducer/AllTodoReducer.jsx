import * as constant from '../actionType/actionType';

function allTodoReducer (todoList = [], action) {
    console.log(action.payload, "88888888888888888888");
 if(action.type === constant.ALL_TODO){
     return  action.payload.todoItem.filter((val) => val);
 }else{
     return todoList
 }
}

export default allTodoReducer;