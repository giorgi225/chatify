import React from "react";

import { useChatStore } from "@/store/chat.store";

import { useSession } from "@/providers/auth.provider";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import { formatTimestamp } from "@/utils/date.utils";

import { ChatParticipantType, ChatType } from "@/types/types";



const ChatCard = ({ id, chat_participant, message }: ChatType) => {
  const { user } = useSession();
  const { activeChat, initOrLoadChat, onlineUserIds } = useChatStore();
  if (!user) return;

  const senderParticipant = chat_participant.find(
    (participant) => participant.userId !== user.id
  ) as ChatParticipantType;

  const senderInitials = `${senderParticipant.user.firstname.charAt(
    0
  )}.${senderParticipant.user.lastname.charAt(0)}`;
  const senderFullname = `${senderParticipant.user.firstname} ${senderParticipant.user.lastname}`;

  const lastMessage = message[0];
  const isOnline = onlineUserIds.includes(senderParticipant.userId);

  return (
    <div
      role="button"
      aria-label="load-chat"
      onClick={() => {
        const idMatches = activeChat?.chat_participant.some(
          (participant) => participant.userId === senderParticipant.userId
        );
        if (idMatches) {
          return;
        }
        initOrLoadChat(senderParticipant.userId);
      }}
      className={`${
        activeChat?.id === id ? "!bg-gray-200" : ""
      } select-none cursor-pointer flex items-center gap-3 py-3 px-4 hover:bg-gray-100 transition-all`}
    >
      <div className="relative rounded-full">
        <Avatar className=" shrink-0">
          {/* <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" /> */}
          <AvatarFallback className="uppercase">
            {senderInitials}
          </AvatarFallback>
        </Avatar>
        {isOnline && (
          <div
            className={`absolute bottom-[2.5px] right-[2.5px] w-2 h-2 rounded-full bg-green-600`}
          ></div>
        )}
      </div>
      <div className="flex flex-col flex-1 overflow-hidden">
        <div className="flex-1 flex items-center justify-center gap-3">
          <h6 className="text-base font-medium truncate">{senderFullname}</h6>
          <span className="text-xs ml-auto text-nowrap">
            {lastMessage?.message ? formatTimestamp(lastMessage.createdAt) : ""}
          </span>
        </div>
        <p className="text-start text-[13px] line-clamp-1 text-foreground/70 font-medium">
          {lastMessage?.message ?? ""}
        </p>
      </div>
    </div>
  );
};

export default ChatCard;
