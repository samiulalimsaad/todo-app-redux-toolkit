import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTodos } from "../../redux/todos/thunk/fetchTodos";
import SingleTodo from "./SingleTodo";

const InCompletedTodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTodos);
    }, []);

    const filterByColors = (todo) => {
        if (filter.colors.length > 0) {
            return filter.colors.includes(todo?.color);
        }
        return true;
    };

    return (
        <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
            {todos
                .filter((todo) => !todo.completed)
                .filter(filterByColors)
                .map((todo) => (
                    <SingleTodo key={todo.id} todo={todo} />
                ))}
        </div>
    );
};

export default InCompletedTodoList;
