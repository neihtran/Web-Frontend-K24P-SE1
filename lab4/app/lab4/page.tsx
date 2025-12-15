"use client";

import React from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Exercise1SimpleButton from "@/components/handing-input-changes/input-handing";
import Exercise2InputHandling from "@/components/handing-keyboard-events/keyboard";
import Exercise3MouseEvents from "@/components/handing-mouse-events/mouse-events";
import Exercise4KeyboardEvents from "@/components/simple-butter-click/simple-butten";
import Exercise5Counter from "@/components/counter/counter";

export default function Page() {
  return (
    <div className="flex w-full justify-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <Tabs defaultValue="simple-button">
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="simple-button">Simple Button</TabsTrigger>
            <TabsTrigger value="input-handling">Input Handling</TabsTrigger>
            <TabsTrigger value="mouse-events">Mouse Events</TabsTrigger>
            <TabsTrigger value="keyboard-events">Keyboard Events</TabsTrigger>
            <TabsTrigger value="counter">Counter</TabsTrigger>
          </TabsList>

          {/*Simple Button*/}
          <TabsContent value="simple-button" className="mt-4">
            <Card className="shadow-lg">
              <Exercise1SimpleButton />
            </Card>
          </TabsContent>

          {/*Input Handling*/}
          <TabsContent value="input-handling" className="mt-4">
            <Card className="shadow-lg">
              <Exercise2InputHandling />
            </Card>
          </TabsContent>

          {/*Mouse Events*/}
          <TabsContent value="mouse-events" className="mt-4">
            <Card className="shadow-lg">
              <Exercise3MouseEvents />
            </Card>
          </TabsContent>

          {/*Keyboard Events*/}
          <TabsContent value="keyboard-events" className="mt-4">
            <Card className="shadow-lg">
              <Exercise4KeyboardEvents />
            </Card>
          </TabsContent>

          {/*Counter*/}
          <TabsContent value="counter" className="mt-4">
            <Card className="shadow-lg">
              <Exercise5Counter />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}