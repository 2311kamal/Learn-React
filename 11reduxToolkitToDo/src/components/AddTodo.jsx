import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, updateTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const dispatch = useDispatch();
  const editingTodo = useSelector((state) => state.editingTodo);
  const [input, setInput] = useState("");

  useEffect(() => {
    if (editingTodo) {
      setInput(editingTodo.text);
    }
  }, [editingTodo]);

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input));
    setInput("");
  };

  const handleUpdateTodo = (e) => {
    e.preventDefault();
    dispatch(updateTodo({ id: editingTodo.id, text: input }));
    setInput("");
  };

  return (
    <form
      onSubmit={editingTodo ? handleUpdateTodo : handleAddTodo}
      className="space-x-3 mt-12"
    >
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 p-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter Your Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
        {editingTodo ? "Update" : "Add Todo"}
      </button>
    </form>
  );
}

export default AddTodo;
