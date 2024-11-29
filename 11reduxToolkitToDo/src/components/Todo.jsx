import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, setEditingTodo } from "../features/todo/todoSlice";

function Todo() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="bg-gray-500 text-center text-white font-bold py-2 my-2">
        Todos
      </h2>
      <ul className="">
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="bg-gray-700 text-white my-2 text-center py-2"
          >
            <span className="bg-black py-2 rounded-lg px-2 ">{todo.text}</span>
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-indigo-300 ml-12 rounded-lg px-2 py-1"
            >
              Delete
            </button>
            <button
              onClick={() => dispatch(setEditingTodo(todo))}
              className="bg-indigo-300 ml-12 rounded-lg px-2 py-1"
            >
              Edit
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
