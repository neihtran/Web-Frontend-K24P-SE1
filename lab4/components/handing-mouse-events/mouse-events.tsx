"use client";

import { useState } from "react";

export default function MouseEventsBox() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="max-w-xl mx-auto mt-10">
      <h1 className="text-2xl font-semibold mb-2">
        Exercise 3: Handling Mouse Events
      </h1>
      <p className="text-gray-600 mb-6">
        Di chuột vào box bên dưới để thay đổi màu nền
      </p>

      <div
        className={`w-64 h-64 flex items-center justify-center rounded-2xl shadow-md text-white text-lg font-semibold transition-colors 
        ${isHovered ? "bg-red-500" : "bg-blue-500"}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        Hover!
      </div>
    </div>
  );
}
