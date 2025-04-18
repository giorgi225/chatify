"use client";
import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import {
  AddCircleIcon,
  Logout03Icon,
  Notification03Icon,
} from "hugeicons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

import { useModal } from "@/hooks/useModal";

import { useSession } from "@/providers/auth.provider";

import SearchInput from "@/components/common/searchInput";
import InviteFriendModal from "@/components/modals/InviteFriendModal";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, logout } = useSession();
  const inviteFriendModal = useModal();

  if (!user) return null;

  return (
    <>
      <header className="flex w-full min-h-[71px] items-center justify-between bg-background px-6 border-b border-foreground/10">
        <Link href={`/`} className="flex items-center">
          <Image
            src={`/logo.jpg`}
            alt="logo"
            width={80}
            height={80}
            className="w-full max-w-[70px]"
          />
        </Link>

        <div className="flex items-center flex-1 justify-end gap-2">
          <Button
            onClick={inviteFriendModal.onOpen}
            className="bg-blue-400 hover:bg-blue-500 active:opacity-80 text-foreground rounded-lg"
          >
            <AddCircleIcon />
            Invite a Friend
          </Button>
          <SearchInput />
          <Button size={`icon`} variant={`ghost`} className="rounded-xl">
            <Notification03Icon className="size-5" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar className="">
                {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
                <AvatarFallback className="uppercase">
                  {user.firstname.charAt(0) + "." + user.lastname.charAt(0)}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <button
                  onClick={async () => {
                    await logout();
                  }}
                  className="w-full px-4 py-2 text-sm font-medium flex items-center gap-1 hover:text-red-600"
                >
                  <Logout03Icon className="size-5" />
                  <span>Logout</span>
                </button>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      <InviteFriendModal {...inviteFriendModal} />
    </>
  );
};

export default Header;
