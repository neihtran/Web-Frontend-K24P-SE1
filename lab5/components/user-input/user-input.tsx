"use client";

import { useState } from "react";
import { Button } from "../ui/button";

export default function UserInputTab() {
  const [value, setValue] = useState("HaiNL");

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Exercise 2: Managing User Input with a State Hook</h1>
      <p className="text-slate-600">Sử dụng <b>useState</b> để quản lý giá trị input</p>

      <div className="flex gap-3 items-center max-w-xl">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
          placeholder="Nhập gì đó..."
        />
        <Button
          onClick={() => alert(`Giá trị hiện tại: ${value}`)}
          className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow"
        >
          Hiển thị
        </Button>
      </div>
    </div>
  );
}
