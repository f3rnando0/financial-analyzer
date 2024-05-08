import { Bell, Menu } from "lucide-react"
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "./ui/button";

export default function AlreadyAuthHeader() {
  return (
    <header className="p-10 border-b">
      <div className="flex flex-row justify-between">
        <div className="hidden md:flex flex-row gap-5 items-center">
          <Link href={'/'}>
            <span className="hover:cursor-pointer text-xl font-semibold">Overview</span>
          </Link>
          <Link href={'/transactions'}>
            <span className="hover:cursor-pointer text-xl text-zinc-400 font-semibold hover:brightness-125">Transactions</span>
          </Link>
          <Link href={'/settings'}>
            <span className="hover:cursor-pointer text-xl text-zinc-400 font-semibold hover:brightness-125">Settings</span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="p-2 flex justify-center items-center"><Menu size={25} /></Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href={"/"}><DropdownMenuItem>Overview</DropdownMenuItem></Link>
                <Link href={"/transactions"}><DropdownMenuItem>Transactions</DropdownMenuItem></Link>
                <Link href={"/settings"}><DropdownMenuItem>Settings</DropdownMenuItem></Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-row gap-4 justify-center items-center">
          <div>
            <Bell className="hover:cursor-pointer" />
          </div>
          <Avatar className="hover:cursor-pointer">
            <AvatarImage />
            <AvatarFallback>FN</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </header>
  )
}