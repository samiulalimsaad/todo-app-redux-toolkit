import React, { useState } from "react";
import { useDispatch } from "react-redux";
import CancelImage from "../../assets/images/cancel.png";
import pencilIcon from "../../assets/images/pencil.svg";
import { deleteTodoServer } from "../../redux/todos/thunk/deleteTodo";
import { updateColorServer } from "../../redux/todos/thunk/updateColor";
import { updateTodoServer } from "../../redux/todos/thunk/updateStatus";
import { updateTitleServer } from "../../redux/todos/thunk/updateTitle";

const SingleTodo = ({ todo, fromCompleted }) => {
    const { text, id, completed, color } = todo;

    const [isInput, setIsInput] = useState(false);
    const [input, setInput] = useState(text);

    const dispatch = useDispatch();

    const handleStatusChange = () => {
        dispatch(updateTodoServer(id, completed));
    };

    const handleColorChange = (color) => {
        !fromCompleted && dispatch(updateColorServer(id, color));
    };

    const handleDelete = () => {
        !fromCompleted && dispatch(deleteTodoServer(id));
    };

    const handleOnBlur = () => {
        setIsInput(false);
        setInput(text);
    };

    const handleTodoTitle = () => {
        !fromCompleted && dispatch(updateTitleServer(id, input));
        setIsInput(false);
        setInput(text);
    };

    return (
        <div className="flex justify-start items-center p-2 hover:bg-gray-100 hover:transition-all space-x-4 border-b border-gray-400/20 last:border-0">
            <div
                className={`rounded-full bg-white border-2 border-gray-400 w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2 ${
                    completed &&
                    "border-green-500 focus-within:border-green-500"
                }`}
            >
                <input
                    type="checkbox"
                    checked={completed}
                    onChange={handleStatusChange}
                    className="opacity-0 absolute rounded-full"
                />
                {completed && (
                    <svg
                        className="fill-current w-3 h-3 text-green-500 pointer-events-none"
                        viewBox="0 0 20 20"
                    >
                        <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                    </svg>
                )}
            </div>

            {isInput ? (
                <form onSubmit={handleTodoTitle} className="select-none flex-1">
                    <input
                        className="w-full select-none flex-1 outline-2 outline-indigo-400 p-2 border-2 border-indigo-400 rounded-md"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onBlur={handleOnBlur}
                    />
                </form>
            ) : (
                <>
                    <div
                        className={`select-none flex-1 ${
                            completed && "line-through"
                        }`}
                    >
                        {text}
                    </div>
                    {!fromCompleted && (
                        <div
                            className="flex-shrink-0 h-4 w-4 rounded-full ml-auto cursor-pointer"
                            onClick={() => setIsInput(true)}
                            title="click to edit task"
                        >
                            <img src={pencilIcon} alt="" />
                        </div>
                    )}
                </>
            )}

            {!fromCompleted && (
                <>
                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-green-500 border-green-500 ${
                            color === "green" && "bg-green-500"
                        }`}
                        onClick={() => handleColorChange("green")}
                    ></div>

                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer hover:bg-yellow-500 border-yellow-500  ${
                            color === "yellow" && "bg-yellow-500 "
                        }`}
                        onClick={() => handleColorChange("yellow")}
                    ></div>

                    <div
                        className={`flex-shrink-0 h-4 w-4 rounded-full border-2 ml-auto cursor-pointer border-red-500 hover:bg-red-500 ${
                            color === "red" && "bg-red-500"
                        }`}
                        onClick={() => handleColorChange("red")}
                    ></div>

                    <img
                        src={CancelImage}
                        className="flex-shrink-0 w-4 h-4 ml-2 cursor-pointer"
                        alt="Cancel"
                        onClick={handleDelete}
                    />
                </>
            )}
        </div>
    );
};

export default SingleTodo;
