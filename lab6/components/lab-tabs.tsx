"use client";

import Link from "next/link";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Go = ({ href, label }: { href: string; label: string }) => (
  <Button asChild variant="outline">
    <Link href={href}>{label}</Link>
  </Button>
);

export default function LabTabs() {
  return (
    <Tabs defaultValue="ex1" className="w-full">
      <TabsList className="flex flex-wrap h-auto">
        <TabsTrigger value="ex1">Exercise 1</TabsTrigger>
        <TabsTrigger value="ex2">Exercise 2</TabsTrigger>
        <TabsTrigger value="ex3">Exercise 3</TabsTrigger>
        <TabsTrigger value="ex4">Exercise 4</TabsTrigger>
        <TabsTrigger value="ex5">Exercise 5</TabsTrigger>
      </TabsList>

      <TabsContent value="ex1" className="mt-4">
        <Card><CardContent className="p-5 space-y-3">
          <h2 className="text-xl font-semibold">Exercise 1: Simple Routing</h2>
          <p>3 trang: Home, About, Contact.</p>
          <div className="flex flex-wrap gap-2">
            <Go href="/" label="Home" />
            <Go href="/about" label="About" />
            <Go href="/contact" label="Contact" />
          </div>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="ex2" className="mt-4">
        <Card><CardContent className="p-5 space-y-3">
          <h2 className="text-xl font-semibold">Exercise 2: Dynamic Route</h2>
          <p>/products và /products/[id]</p>
          <div className="flex flex-wrap gap-2">
            <Go href="/products" label="Products" />
            <Go href="/products/1" label="Demo /products/1" />
          </div>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="ex3" className="mt-4">
        <Card><CardContent className="p-5 space-y-3">
          <h2 className="text-xl font-semibold">Exercise 3: Protected Route</h2>
          <p>Chưa login → redirect /login. Login xong mới vào /dashboard.</p>
          <div className="flex flex-wrap gap-2">
            <Go href="/login" label="Login" />
            <Go href="/dashboard" label="Dashboard" />
          </div>
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="ex4" className="mt-4">
        <Card><CardContent className="p-5 space-y-3">
          <h2 className="text-xl font-semibold">Exercise 4: Lazy Loading</h2>
          <p>Dùng next/dynamic để tải component nặng khi vào route.</p>
          <Go href="/lazy" label="Lazy Demo" />
        </CardContent></Card>
      </TabsContent>

      <TabsContent value="ex5" className="mt-4">
        <Card><CardContent className="p-5 space-y-3">
          <h2 className="text-xl font-semibold">Exercise 5: Route Groups</h2>
          <p>(shop), (auth) để nhóm route (URL không đổi).</p>
          <div className="flex flex-wrap gap-2">
            <Go href="/cart" label="Cart" />
            <Go href="/register" label="Register" />
          </div>
        </CardContent></Card>
      </TabsContent>
    </Tabs>
  );
}
