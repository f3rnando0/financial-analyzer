'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const v4 = new RegExp(/^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i);

export default function LoginPage() {
  const [code, setCode] = useState("");
  const [isDisabled, setDisabled] = useState(true);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    if (v4.test(e.currentTarget.value)) {
      setCode(e.currentTarget.value);
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  }

  return (
    <main className="w-full h-screen flex justify-center items-center">
      <div className="w-80 flex flex-col gap-4 items-center select-none">
        <span className="text-2xl font-semibold">Use your auth code to login</span>
        <div className="flex w-full items-center space-x-2">
          <Input type="text" placeholder="Code" className="secondary" onChange={handleInputChange} />
          {isDisabled ? <Button disabled type="submit">Enter</Button> : <Button type="submit">Enter</Button>}
        </div>
      </div>
    </main>
  )
}