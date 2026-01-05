"use client";

import { useCounter } from "@/hooks/user-counter";
import { Button } from "../ui/button";

export default function CounterTab() {
  const { count, inc, dec, reset, min, max } = useCounter({
    initial: 0,
    min: -10,
    max: 10,
  });

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Exercise 1: Creating and Using a Counter Hook</h1>
      <p className="text-slate-600">Sử dụng custom hook <b>useCounter</b> để quản lý state của counter</p>

      <div className="flex items-center gap-4 flex-wrap">
        <Button
          onClick={dec}
          className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow"
        >
          — Giảm
        </Button>

        <div className="min-w-16 text-center text-4xl font-bold">{count}</div>

        <Button
          onClick={inc}
          className="px-6 py-3 rounded-xl bg-blue-500 text-white font-semibold shadow"
        >
          + Tăng
        </Button>

        <Button
          onClick={reset}
          className="px-6 py-3 rounded-xl border bg-black font-semibold shadow-sm"
        >
          ⟳ Reset
        </Button>
      </div>

      <p className="text-slate-500">Giới hạn: {min} đến {max}</p>
    </div>
  );
}
