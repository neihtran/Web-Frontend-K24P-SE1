"use client";

import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React, { useState } from "react";

const MAX_VALUE = 10;
const MIN_VALUE = 0;
const DEFAULT_VALUE = 5;

export default function Exercise5Counter() {
  const [counter, setCounter] = useState(DEFAULT_VALUE);

  const handleDecrement = () => {
    setCounter((prev) => (prev > MIN_VALUE ? prev - 1 : prev));
  };

  const handleIncrement = () => {
    setCounter((prev) => (prev < MAX_VALUE ? prev + 1 : prev));
  };

  const isMin = counter === MIN_VALUE;
  const isMax = counter === MAX_VALUE;

  return (
    <>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">
          Exercise 5: Counter
        </CardTitle>
        <CardDescription>
          Sử dụng các button để tăng/giảm giá trị counter
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center space-x-4">
        <Button
          onClick={handleDecrement}
          disabled={isMin}
          className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
        >
          — Giảm
        </Button>
        <div className="text-4xl font-semibold w-12 text-center">{counter}</div>
        <Button
          onClick={handleIncrement}
          disabled={isMax}
          className="bg-blue-500 hover:bg-blue-600 disabled:opacity-50"
        >
          + Tăng
        </Button>
      </CardContent>
    </>
  );
}