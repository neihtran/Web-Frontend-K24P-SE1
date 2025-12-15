"use client";

import { Input } from "@/components/ui/input";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

export default function Exercise2InputHandling() {
  const [inputValue, setInputValue] = useState("example text");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Exercise 2: Handling Input Changes
        </CardTitle>
        <CardDescription>
          Nhập text vào ô input bên dưới để xem kết quả thay đổi
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Input
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Nhập text..."
        />
        <p>
          Giá trị hiện tại: <span className="font-bold">{inputValue}</span>
        </p>
      </CardContent>
    </>
  );
}