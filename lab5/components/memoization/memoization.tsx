"use client";

import { useMemo, useState } from "react";

export default function MemoizationTab() {
  const [hover, setHover] = useState(false);

  const boxStyle = useMemo(() => {
    console.log("Tính toán lại style box...");
    return {
      backgroundColor: hover ? "#ef4444" : "#e2e8f0",
      color: hover ? "white" : "#0f172a",
    } as React.CSSProperties;
  }, [hover]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Exercise 3: Implementing Memoization with UseMemo</h1>
      <p className="text-slate-600">
        Di chuột vào box bên dưới để thay đổi màu nền. Style của box được tính bằng <b>useMemo</b>.
      </p>

      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="w-72 h-72 rounded-2xl shadow flex items-center justify-center select-none transition"
        style={boxStyle}
      >
        <div className="text-xl font-bold">{hover ? "Hover Active!" : "Hover me"}</div>
      </div>

      <p className="text-slate-500">Mở console để xem khi nào style được tính toán lại</p>
    </div>
  );
}
