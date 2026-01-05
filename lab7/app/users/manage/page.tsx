"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function ManageUsers() {
  const [users, setUsers] = useState<any[]>([]);
  const [name, setName] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data));
  }, []);

  const addUser = async () => {
    const res = await axios.post(
      "https://jsonplaceholder.typicode.com/users",
      { name }
    );

    setUsers([res.data, ...users]);
    setName("");
  };

  const deleteUser = async (id: number) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    setUsers(users.filter(u => u.id !== id));
  };

  return (
    <div className="p-10 space-y-4">
      <Card className="p-4 flex gap-2">
        <Input value={name} onChange={e => setName(e.target.value)} placeholder="User name" />
        <Button onClick={addUser}>Add</Button>
      </Card>

      <Card className="p-4">
        <ul className="space-y-2">
          {users.map(u => (
            <li key={u.id} className="flex justify-between">
              {u.name}
              <Button variant="destructive" onClick={() => deleteUser(u.id)}>Delete</Button>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
