"use client";

import { useState, KeyboardEvent } from "react";

export default function KeyboardEvents() {
  const [input, setInput] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && input.trim() !== "") {
      setItems((prev) => [...prev, input.trim()]);
      setInput("");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-2">
        Exercise 4: Handling Keyboard Events
      </h1>
      <p className="text-gray-600 mb-4">
        Nhập text và nhấn Enter để thêm vào danh sách
      </p>

      <input
        type="text"
        className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Nhập text và nhấn Enter..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />

      <div className="bg-white border border-gray-200 rounded-lg divide-y">
        {items.length === 0 && (
          <div className="px-4 py-2 text-gray-400 italic">
            Chưa có item nào
          </div>
        )}
        {items.map((item, index) => (
          <div key={index} className="px-4 py-2">
            {index + 1}. {item}
          </div>
        ))}
      </div>
    </div>
  );
}
