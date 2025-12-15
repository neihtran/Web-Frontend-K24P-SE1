"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

// Import component con
import SimpleButton from "@/components/simple-butter-click/simple-butten";
import InputHandling from "@/components/handing-input-changes/input-handing";
import MouseEventsBox from "@/components/handing-mouse-events/mouse-events";
import KeyboardEvents from "@/components/handing-keyboard-events/keyboard";
import Counter from "@/components/counter/counter";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 flex justify-center p-10">
      <div className="w-full max-w-3xl">
        <Tabs defaultValue="simple">
          {/* TAB BUTTONS */}
          <TabsList className="grid grid-cols-5 w-full">
            <TabsTrigger value="simple">Simple Button</TabsTrigger>
            <TabsTrigger value="input">Input Handling</TabsTrigger>
            <TabsTrigger value="mouse">Mouse Events</TabsTrigger>
            <TabsTrigger value="keyboard">Keyboard Events</TabsTrigger>
            <TabsTrigger value="counter">Counter</TabsTrigger>
          </TabsList>

          {/* TAB 1 */}
          <TabsContent value="simple">
            <SimpleButton />
          </TabsContent>

          {/* TAB 2 */}
          <TabsContent value="input">
            <InputHandling />
          </TabsContent>

          {/* TAB 3 */}
          <TabsContent value="mouse">
            <MouseEventsBox />
          </TabsContent>

          {/* TAB 4 */}
          <TabsContent value="keyboard">
            <KeyboardEvents />
          </TabsContent>

          {/* TAB 5 */}
          <TabsContent value="counter">
            <Counter />
          </TabsContent>
        </Tabs>
      </div>
    </main>
  );
}
