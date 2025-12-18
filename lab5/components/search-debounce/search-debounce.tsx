"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export default function SearchDebounceTab() {
  const [keyword, setKeyword] = useState("");
  const [result, setResult] = useState<string[]>([]);
  const timerRef = useRef<number | null>(null);

  const doSearch = useCallback((q: string) => {
    console.log("Search triggered for:", q);

    if (!q.trim()) {
      setResult([]);
      return;
    }

    // Fake results (demo)
    setResult([
      `Kết quả 1 cho "${q}"`,
      `Kết quả 2 cho "${q}"`,
      `Kết quả 3 cho "${q}"`,
    ]);
  }, []);

  // Debounce 500ms
  useEffect(() => {
    if (timerRef.current) window.clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      doSearch(keyword);
    }, 500);

    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [keyword, doSearch]);

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-semibold">Exercise 5: Debouncing Search with useCallback</h1>
      <p className="text-slate-600">
        Nhập từ khóa để tìm kiếm. Search chỉ chạy sau khi bạn ngừng gõ <b>500ms</b>.
      </p>

      <div className="max-w-2xl">
        <div className="relative">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full px-4 py-3 pr-10 rounded-xl border focus:outline-none focus:ring-2"
            placeholder="Nhập từ khóa tìm kiếm..."
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400">🔍</div>
        </div>

        <div className="mt-6 space-y-3">
          {result.length === 0 ? (
            <p className="text-slate-400 text-center">Nhập từ khóa để xem kết quả tìm kiếm</p>
          ) : (
            result.map((r, i) => (
              <div key={i} className="p-4 rounded-2xl border bg-white shadow-sm">
                <div className="font-semibold">{r}</div>
                <div className="text-slate-500 text-sm">Mô tả chi tiết cho kết quả tìm kiếm {i + 1}</div>
              </div>
            ))
          )}
        </div>

        <p className="text-slate-500 mt-6">Mở Console để xem khi nào hàm tìm kiếm được gọi</p>
      </div>
    </div>
  );
}
