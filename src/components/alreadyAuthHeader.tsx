import { Bell, LogOut, Menu } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "./ui/button";

export default function AlreadyAuthHeader() {
  return (
    <header className="border-b p-10">
      <div className="flex flex-row justify-between">
        <div className="hidden flex-row items-center gap-5 md:flex">
          <Link href={"/"}>
            <span className="text-xl font-semibold hover:cursor-pointer">
              Overview
            </span>
          </Link>
          <Link href={"/transactions"}>
            <span className="text-xl font-semibold text-zinc-400 hover:cursor-pointer hover:brightness-125">
              Transactions
            </span>
          </Link>
          <Link href={"/settings"}>
            <span className="text-xl font-semibold text-zinc-400 hover:cursor-pointer hover:brightness-125">
              Settings
            </span>
          </Link>
        </div>
        <div className="flex md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center justify-center p-2"
              >
                <Menu size={25} />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Menu</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href={"/"}>
                  <DropdownMenuItem>Overview</DropdownMenuItem>
                </Link>
                <Link href={"/transactions"}>
                  <DropdownMenuItem>Transactions</DropdownMenuItem>
                </Link>
                <Link href={"/settings"}>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="flex flex-row items-center justify-center gap-4">
          <div>
            <Bell className="hover:cursor-pointer" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="hover:cursor-pointer">
                <AvatarImage />
                <AvatarFallback>FN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuLabel>Fernando</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <Link href={"/settings"}>
                  <DropdownMenuItem className="flex flex-row gap-2">
                    <LogOut size={15} />
                    Logout
                  </DropdownMenuItem>
                </Link>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}
