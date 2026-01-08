"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import Exercise1 from "@/components/simple-contact/form";
import Exercise2 from "@/components/form-validation/form";
import ThemeToggle from "@/components/theme-toggle/toggle";


export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Tabs defaultValue="page1" className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="page1">Simple Contact</TabsTrigger>
          <TabsTrigger value="page2">Form Validation</TabsTrigger>
        </TabsList>

        <TabsContent value="page1">
          <Exercise1 />
        </TabsContent>

        <TabsContent value="page2">
          <Exercise2 />
        </TabsContent>
      </Tabs>
      <ThemeToggle />
    </div>
  );
}
