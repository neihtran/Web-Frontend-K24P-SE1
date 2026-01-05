"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

import Exercise1 from "@/components/simple-contact/form";
import Exercise2 from "@/components/form-validation/form";
import Exercise3 from "@/components/dynamic-form-file/form";
import Exercise4 from "@/components/api-form-submission/form";
import Exercise5 from "@/components/advance-form-vadition/form";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto mt-10">
      <Tabs defaultValue="ex1" className="w-full">
        <TabsList className="grid grid-cols-5 w-full">
          <TabsTrigger value="ex1">Simple Contact</TabsTrigger>
          <TabsTrigger value="ex2">Form Validation</TabsTrigger>
          <TabsTrigger value="ex3">Dynamic Form Fields</TabsTrigger>
          <TabsTrigger value="ex4">API Submission</TabsTrigger>
          <TabsTrigger value="ex5">Advanced Validation</TabsTrigger>
        </TabsList>

        <TabsContent value="ex1">
          <Exercise1 />
        </TabsContent>

        <TabsContent value="ex2">
          <Exercise2 />
        </TabsContent>

        <TabsContent value="ex3">
          <Exercise3 />
        </TabsContent>

        <TabsContent value="ex4">
          <Exercise4 />
        </TabsContent>

        <TabsContent value="ex5">
          <Exercise5 />
        </TabsContent>
      </Tabs>
    </div>
  );
}
