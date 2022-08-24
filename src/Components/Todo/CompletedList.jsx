import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../Header";
import SingleTodo from "./SingleTodo";

const CompletedTodoList = () => {
    const todos = useSelector((state) => state.todos);
    const filter = useSelector((state) => state.filter);
    const dispatch = useDispatch();

    return (
        <>
            <Header fromCompleted />
            <div className="mt-2 text-gray-700 text-sm max-h-[300px] overflow-y-auto">
                {todos
                    .filter((todo) => todo.completed)
                    .map((todo) => (
                        <SingleTodo key={todo.id} todo={todo} fromCompleted />
                    ))}
            </div>
        </>
    );
};

export default CompletedTodoList;
