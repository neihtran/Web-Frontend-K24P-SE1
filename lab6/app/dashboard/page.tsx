"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/auth-provider";

export default function Dashboard() {
  const { loggedIn } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loggedIn) router.push("/auth/login");
  }, [loggedIn, router]);

  return (
    <h1 className="text-2xl font-bold text-center mt-10">
      Dashboard (Protected)
    </h1>
  );
}
