"use client";
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ScreenA from "@/components/screen-a";
import ScreenB from "@/components/screen-b";

export default function Home() {
  const [activeTab, setActiveTab] = useState("a");

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6 bg-background text-foreground transition-colors duration-300">
      <div className="w-full max-w-md space-y-6">
        <div className="text-center space-y-2">
          <h1 className="text-3xl font-extrabold tracking-tight">
            Lab 9: Redux Auth
          </h1>
          <p className="text-muted-foreground text-sm">
            Quản lý Theme và Auth tập trung
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-4">
            <TabsTrigger value="a">Đăng nhập</TabsTrigger>
            <TabsTrigger value="b">Hồ sơ</TabsTrigger>
          </TabsList>

          <TabsContent value="a">
            <ScreenA setActiveTab={setActiveTab} />
          </TabsContent>

          <TabsContent value="b">
            <ScreenB setActiveTab={setActiveTab} />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
