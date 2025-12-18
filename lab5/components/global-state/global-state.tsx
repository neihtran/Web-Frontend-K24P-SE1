"use client";

import { useMemo, useState } from "react";
import { Button } from "../ui/button";

export default function SumCalculationTab() {
  const [items, setItems] = useState<number[]>([]);
  const [input, setInput] = useState("");

  const total = useMemo(() => {
    console.log("Đang tính toán lại tổng...");
    return items.reduce((sum, n) => sum + n, 0);
  }, [items]);

  const addItem = () => {
    const n = Number(input);
    if (Number.isNaN(n) || input.trim() === "") return;
    setItems((prev) => [...prev, n]);
    setInput("");
  };

  const removeItem = (idx: number) => {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  };

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Exercise 4: Sum Calculation with useMemo</h1>
      <p className="text-slate-600">
        Nhập số và nhấn Enter để thêm vào danh sách. Tổng được memo để tránh tính lại không cần thiết.
      </p>

      <div className="flex gap-3 items-center max-w-xl">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addItem()}
          className="w-full px-4 py-3 rounded-xl border focus:outline-none focus:ring-2"
          placeholder="Nhập số..."
        />
        <Button
          onClick={addItem}
          className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow"
        >
          Thêm
        </Button>
      </div>

      <div className="max-w-xl rounded-2xl border bg-white shadow-sm overflow-hidden">
        {items.map((n, idx) => (
          <div key={idx} className="flex items-center justify-between px-4 py-3 border-b last:border-b-0">
            <span>Số {n}</span>
            <Button
              onClick={() => removeItem(idx)}
              className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow"
            >
              Xóa
            </Button>
          </div>
        ))}
      </div>

      <div className="max-w-xl p-4 rounded-2xl bg-slate-50 border">
        <div className="text-lg font-bold">Tổng: {total}</div>
        <div className="text-slate-500 text-sm">(Mở console để xem khi nào tổng được tính toán lại)</div>
      </div>
    </div>
  );
}
