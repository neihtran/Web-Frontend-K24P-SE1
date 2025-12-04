"use client";

import LoginCard from "@/components/login/LoginCard";
import { LoginValues } from "@/components/login/types";

export default function LoginPage() {
  const handleLogin = (values: LoginValues) => {
    console.log("Login values:", values);
    alert(`Login with: ${values.email}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <LoginCard onSubmit={handleLogin} />
    </div>
  );
}
