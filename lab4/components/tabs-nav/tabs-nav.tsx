"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Simple Button" },
  { href: "/input-handling", label: "Input Handling" },
  { href: "/mouse-events", label: "Mouse Events" },
  { href: "/keyboard", label: "Keyboard Events" },
  { href: "/counter", label: "Counter" },
];

export default function TabsNav() {
  const pathname = usePathname();

  return (
    <nav className="border-b border-gray-200 bg-white">
      <div className="max-w-4xl mx-auto flex gap-6 px-4">
        {tabs.map((tab) => {
          const active =
            (tab.href === "/" && pathname === "/") || pathname === tab.href;

          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`py-3 text-sm font-medium border-b-2 -mb-px transition 
                ${
                  active
                    ? "border-blue-500 text-blue-600"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
            >
              {tab.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
