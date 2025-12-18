"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";

import CounterTab from "@/components/counter-hook/user-counter";
import UserInputTab from "@/components/user-input/user-input";
import MemoizationTab from "@/components/memoization/memoization";
import SearchDebounceTab from "@/components/search-debounce/search-debounce";
import GlobalStateTab from "@/components/global-state/global-state";

export default function Page() {
  return (
    <div className="flex w-full justify-center p-4 sm:p-8">
      <div className="w-full max-w-5xl">
        <Tabs defaultValue="counter-hook" className="w-full">
          <TabsList className="grid w-full grid-cols-5 h-auto">
            <TabsTrigger value="counter-hook">Counter Hook</TabsTrigger>
            <TabsTrigger value="user-input">User Input</TabsTrigger>
            <TabsTrigger value="memoization">Memoization</TabsTrigger>
            <TabsTrigger value="search-debounce">Search Debounce</TabsTrigger>
            <TabsTrigger value="global-state">Global State</TabsTrigger>
          </TabsList>

          <TabsContent value="counter-hook">
            <Card className="p-6">
              <CounterTab />
            </Card>
          </TabsContent>

          <TabsContent value="user-input">
            <Card className="p-6">
              <UserInputTab />
            </Card>
          </TabsContent>

          <TabsContent value="memoization">
            <Card className="p-6">
              <MemoizationTab />
            </Card>
          </TabsContent>

          <TabsContent value="search-debounce">
            <Card className="p-6">
              <SearchDebounceTab />
            </Card>
          </TabsContent>

          <TabsContent value="global-state">
            <Card className="p-6">
              <GlobalStateTab />
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
