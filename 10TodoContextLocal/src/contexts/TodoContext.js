import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    { id: 1, completed: false, todo: "Learn React" },
    { id: 2, completed: false, todo: "Learn Firebase" },
    { id: 3, completed: false, todo: "Learn GraphQL" },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
