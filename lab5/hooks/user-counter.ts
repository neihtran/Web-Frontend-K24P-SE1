import { useCallback, useState } from "react";

type UseCounterOptions = {
  initial?: number;
  min?: number;
  max?: number;
};

export function useCounter(options: UseCounterOptions = {}) {
  const { initial = 0, min = -10, max = 10 } = options;

  const clamp = (v: number) => Math.min(max, Math.max(min, v));
  const [count, setCount] = useState<number>(() => clamp(initial));

  const inc = useCallback(() => {
    setCount((c) => clamp(c + 1));
  }, [min, max]);

  const dec = useCallback(() => {
    setCount((c) => clamp(c - 1));
  }, [min, max]);

  const reset = useCallback(() => {
    setCount(clamp(initial));
  }, [initial, min, max]);

  return { count, inc, dec, reset, min, max };
}
