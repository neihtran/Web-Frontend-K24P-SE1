"use client";
import { Provider, useSelector } from "react-redux";
import { store, RootState } from "@/lib/store";
import { useEffect } from "react";

function ThemeHandler({ children }: { children: React.ReactNode }) {
  const isDarkMode = useSelector((state: RootState) => state.theme.isDarkMode);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDarkMode]);

  return <>{children}</>;
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <ThemeHandler>{children}</ThemeHandler>
    </Provider>
  );
}
