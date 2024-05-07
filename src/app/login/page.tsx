'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function LoginPage() {
  const [code, setCode] = useState("");

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    setCode(e.currentTarget.value);
  }

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="w-80 flex flex-col gap-4 items-center select-none">
        <span className="text-2xl">Use your auth code to login</span>
        <div className="flex w-full items-center space-x-2">
          <Input type="text" placeholder="Code" className="secondary" onChange={handleInputChange} />
          <Button type="submit">Enter</Button>
        </div>
      </div>
    </main>
  )
}