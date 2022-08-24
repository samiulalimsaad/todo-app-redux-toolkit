import { BASE_URL } from "../../../utils";
import { loadTodo } from "../actions";

export const fetchTodos = async (dispatch) => {
    const res = await fetch(BASE_URL);
    const todos = await res.json();

    dispatch(loadTodo(todos));
};
