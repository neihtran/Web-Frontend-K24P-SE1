"use client";

import React from "react";

export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
};

export default function TodoItem({ todo, onToggle, onDelete }: TodoItemProps) {
  return (
    <li className="todo-item">
      <label className="todo-left">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
        />
        <span className={todo.completed ? "todo-text completed" : "todo-text"}>
          {todo.text}
        </span>
      </label>

      <button
        className="todo-delete-btn"
        onClick={() => onDelete(todo.id)}
        aria-label="Delete todo"
      >
        ×
      </button>
    </li>
  );
}
