"use client";

import React, { useState, ChangeEvent, KeyboardEvent } from "react";
import TodoItem, { Todo } from "./todo-item";

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [newTodo, setNewTodo] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };

  const handleAddTodo = () => {
    const text = newTodo.trim();
    if (!text) return;

    const todo: Todo = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTodos((prev) => [todo, ...prev]);
    setNewTodo("");
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleAddTodo();
    }
  };

  const handleToggleTodo = (id: number) => {
    setTodos((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const handleDeleteTodo = (id: number) => {
    setTodos((prev) => prev.filter((t) => t.id !== id));
  };

  const handleClearCompleted = () => {
    setTodos((prev) => prev.filter((t) => !t.completed));
  };

  const remainingCount = todos.filter((t) => !t.completed).length;

  return (
    <div className="todo-app">
      <div className="todo-card">
        <h1 className="todo-title">Todo List</h1>

        {/* Input + button */}
        <div className="todo-input-row">
          <input
            className="todo-input"
            type="text"
            placeholder="Add a task here..."
            value={newTodo}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
          />
          <button className="todo-add-btn" onClick={handleAddTodo}>
            +
          </button>
        </div>

        {/* Danh sách todos */}
        <ul className="todo-list">
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={handleToggleTodo}
              onDelete={handleDeleteTodo}
            />
          ))}
        </ul>

        {/* Footer: số task còn lại + nút clear */}
        <div className="todo-footer">
          <span>
            {remainingCount} task{remainingCount !== 1 ? "s" : ""} remaining
          </span>
          <button
            className="todo-clear-btn"
            onClick={handleClearCompleted}
            disabled={todos.every((t) => !t.completed)}
          >
            Clear completed
          </button>
        </div>
      </div>
    </div>
  );
}
