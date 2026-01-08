"use client";

import { Button } from "@/components/ui/button";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "@/store/theme-slice";
import { RootState } from "@/store";
import { useEffect } from "react";

export default function ThemeToggle() {
  const dispatch = useDispatch();
  const theme = useSelector((state: RootState) => state.theme.theme);

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <Button onClick={() => dispatch(toggleTheme())}>
      Current: {theme} — Click to toggle
    </Button>
  );
}
