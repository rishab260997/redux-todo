import * as constant from "../actionType/actionType";

const initialState = {
  id: null,
  todo: "",
  completed: false,
  dates: "",
};

export function todoReducer(todoList = initialState, action) {
    console.log(action.type,todoList,"ppppppppppppp"); 
  // if (action.type === constant.ADD_TODO) {
  //   return [
  //     ...todoList,
  //     {
  //       id: action.id,
  //       todo: action.todo,
  //       completed: action.completed,
  //       dates: action.dates,
  //     },
  //   ];
  // }
}
export default todoReducer;