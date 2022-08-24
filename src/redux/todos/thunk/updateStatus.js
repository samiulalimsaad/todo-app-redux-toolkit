import { BASE_URL } from "../../../utils";
import { ToggledTodo } from "../actions";

export const updateTodoServer = (todoId, currentStatus) => async (dispatch) => {
    const res = await fetch(`${BASE_URL}/${todoId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ completed: !currentStatus }),
    });
    const todo = await res.json();

    dispatch(ToggledTodo(todo.id));
};
