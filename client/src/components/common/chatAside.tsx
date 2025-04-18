"use client";
import { AddCircleIcon } from "hugeicons-react";
import { Loader } from "lucide-react";
import { useEffect } from "react";

import { useChatStore } from "@/store/chat.store";

import { useSession } from "@/providers/auth.provider";

import ChatCard from "../cards/ChatCard";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

const ChatAside = () => {
  const { user } = useSession();
  const { chats, loading, fetchChats } = useChatStore();

  useEffect(() => {
    if (user && fetchChats) {
      fetchChats();
    }
  }, [user, fetchChats]);

  if (!user) return null;

  return (
    <div className="flex flex-1 flex-col overflow-hidden">
      {chats.length > 0 && (
        <div className="p-4 flex flex-col items-start gap-3">
          <h6 className="text-base font-medium">Messages</h6>
          <Input
            type="text"
            placeholder="Search messages"
            className="w-full p-4 rounded-lg bg-foreground/5 border border-foreground/5 hover:border-foreground/10 focus:border-foreground/30 transition-all"
          />
        </div>
      )}

      {loading ? (
        <div className="p-8 flex flex-col items-center">
          <Loader className="size-6 animate-spin" />
        </div>
      ) : chats.length > 0 ? (
        <div className="w-full flex flex-col flex-1 h-full overflow-auto">
          <div className="flex flex-1 h-full flex-col divide-y divide-foreground/5">
            {chats.map((chat) => (
              <ChatCard key={chat.id} {...chat} />
            ))}
          </div>
        </div>
      ) : (
        <div className="p-8 flex flex-col items-center m-auto">
          <h6 className="text-base font-medium">No Chat Available Yet</h6>
          <p className="text-center text-sm">
            Start a conversation by searching for a user or inviting a friend
            who hasn’t joined yet.
          </p>
          <Button className="bg-blue-400 hover:bg-blue-500 active:opacity-80 text-foreground rounded-lg mt-6">
            <AddCircleIcon />
            Invite a Friend
          </Button>
        </div>
      )}
    </div>
  );
};

export default ChatAside;
