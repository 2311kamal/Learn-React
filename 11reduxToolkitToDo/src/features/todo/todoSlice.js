import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [{ id: 1, text: "Buy milk" }],
  editingTodo: "", // New property for tracking the todo being edited
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ id: nanoid(), text: action.payload });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action) => {
      const { id, text } = action.payload;
      const todo = state.todos.find((todo) => todo.id === id);
      if (todo) {
        todo.text = text;
      }
      state.editingTodo = null; // Clear editing state after update
    },
    setEditingTodo: (state, action) => {
      state.editingTodo = action.payload; // Set the todo to be edited
    },
  },
});

export const { addTodo, removeTodo, updateTodo, setEditingTodo } =
  todoSlice.actions;
export default todoSlice.reducer;
