import { updateTodoTitle } from "../actions";

export const updateTitleServer = (todoId, text) => async (dispatch) => {
    const res = await fetch(`http://localhost:4000/todos/${todoId}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({ text }),
    });
    const todo = await res.json();

    dispatch(updateTodoTitle(todo.id, todo.text));
};
