import { BASE_URL } from "../../../utils";
import { DeleteTodo } from "../actions";

export const deleteTodoServer = (todoId) => async (dispatch) => {
    const res = await fetch(`${BASE_URL}/${todoId}`, {
        method: "DELETE",
    });
    const todo = await res.json();
    console.log({ todo });
    dispatch(DeleteTodo(todo.id));
};
