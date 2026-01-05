"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  const [username, setUsername] = useState("emilys");
  const [password, setPassword] = useState("emilyspass");
  const [error, setError] = useState("");
  const router = useRouter();

  const login = async () => {
    try {
      const res = await axios.post("https://dummyjson.com/auth/login", {
        username,
        password,
      });

      localStorage.setItem("token", res.data.accessToken);

      router.push("/dashboard");
    } catch {
      setError("Login failed");
    }
  };

  return (
    <div className="flex justify-center mt-20">
      <Card className="p-6 w-[400px] space-y-4">
        <h2 className="text-xl font-bold">Login</h2>

        <Input value={username} onChange={e => setUsername(e.target.value)} />
        <Input type="password" value={password} onChange={e => setPassword(e.target.value)} />

        {error && <p className="text-red-500">{error}</p>}

        <Button onClick={login}>Login</Button>
      </Card>
    </div>
  );
}
