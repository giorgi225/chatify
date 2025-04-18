import React from "react";

import { useChatStore } from "@/store/chat.store";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { UserType } from "@/types/types";

const UserCard = ({
  id,
  email,
  firstname,
  lastname,
  length,
  index,
}: UserType & { length: number; index: number }) => {
  const { initOrLoadChat, activeChat } = useChatStore();
  return (
    <button
      type="button"
      onMouseDown={() => {
        const idMatches = activeChat?.chat_participant.some(
          (participant) => participant.userId === id
        );
        if (idMatches) {
          return;
        }

        initOrLoadChat(id);
      }}
      className={`w-full flex items-center gap-2 hover:bg-gray-100 transition-all ${
        index === 0 ? "" : index === length - 1 ? "!border-none" : ""
      } py-3 px-4 border-b border-b-foreground/10`}
    >
      <div className=" flex items-center gap-3">
        <Avatar className="shrink-0">
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
          <AvatarFallback className="uppercase">
            {firstname.charAt(0) + "." + lastname.charAt(0)}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col items-start">
          <h6 className="text-sm font-medium truncate">
            {firstname} {lastname}
          </h6>
          <span className="text-xs">{email}</span>
        </div>
      </div>
    </button>
  );
};

export default UserCard;
