"use client";

import { UUID } from "crypto";

import { zodResolver } from "@hookform/resolvers/zod";
import { Loader, Send } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { useChatStore } from "@/store/chat.store";

import { useSession } from "@/providers/auth.provider";

import { Form, FormField } from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import fetcher from "@/lib/fetcher";
import { getSocket } from "@/lib/socket";

import { formatTimestamp } from "@/utils/date.utils";

import chatSchema from "@/validations/chat.schema";

import { ChatParticipantType, MessageType, UserType } from "@/types/types";

const Chat = () => {
  const { user } = useSession();
  const { activeChat, chatLoading, isTyping } = useChatStore();
  const scrollContainer = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (scrollContainer.current) {
      // scroll to bottom
      scrollContainer.current.scrollTop = scrollContainer.current.scrollHeight;
    }
  }, [scrollContainer, activeChat, isTyping]);

  if (!user || chatLoading) {
    return (
      <div className="flex items-center justify-center flex-1">
        <Loader className="animate-spin size-10 text-muted-foreground" />
      </div>
    );
  }

  if (!activeChat) {
    return (
      <div className="flex flex-col items-center justify-center text-muted-foreground flex-1">
        <p className="font-bold text-lg text-foreground">No active chat yet.</p>
        <p className="text-center max-w-[280px]">
          Start a conversation by searching for a user or inviting a friend who
          hasn’t joined yet.
        </p>
      </div>
    );
  }

  const senderParticipant = activeChat.chat_participant.find(
    (participant) => participant.userId !== user.id
  ) as ChatParticipantType;

  const senderInitials = `${senderParticipant.user.firstname.charAt(
    0
  )}.${senderParticipant.user.lastname.charAt(0)}`;
  const senderFullname = `${senderParticipant.user.firstname} ${senderParticipant.user.lastname}`;

  return (
    <div className="w-full flex-1 flex flex-col bg-gray-100 overflow-hidden">
      <div className="h-20 bg-white border-b flex items-center justify-between px-4">
        <div className=" flex items-center gap-3">
          {user.profilePic ? (
            <Image
              className="size-10 rounded-full"
              src={user.profilePic}
              alt={user.firstname}
              width={400}
              height={400}
              quality={100}
              priority={true}
            />
          ) : (
            <div className="size-10 flex items-center justify-center uppercase rounded-full bg-foreground/5">
              {senderInitials}
            </div>
          )}
          <div className="flex flex-col">
            <h6 className="text-base font-medium truncate">{senderFullname}</h6>
            <span className="text-sm">Last seen 5m ago</span>
          </div>
        </div>{" "}
        <Input
          type="text"
          placeholder="Search in chat"
          className="w-full max-w-[200px] p-4 rounded-lg bg-foreground/5 border border-foreground/5 hover:border-foreground/10 focus:border-foreground/30 transition-all"
        />
      </div>

      <div
        className="flex-1 px-5 py-8 flex flex-col overflow-auto"
        ref={scrollContainer}
      >
        <Messages />
        {isTyping && (
          <div className="p-4 rounded-xl w-max flex items-end gap-1 rounded-bl-none bg-white mt-4">
            <div className="dots-loader"></div>
          </div>
        )}
      </div>

      <MessageInput receiverId={senderParticipant.userId} />
    </div>
  );
};

export default Chat;

const schema = chatSchema.sendMessage;
type ChatFormType = z.infer<typeof schema>;
const MessageInput = ({ receiverId }: { receiverId: UUID }) => {
  const { refreshToken } = useSession();
  const { activeChat } = useChatStore();
  const [loading, setLoading] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const typingTimeout = useRef<NodeJS.Timeout | null>(null);

  const form = useForm<ChatFormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      message: "",
      chatId: activeChat?.id ?? "",
    },
  });

  async function onSubmit(values: ChatFormType) {
    if (loading) return;
    setLoading(true);
    try {
      const res = await fetcher<{ message: MessageType }>(
        "/chat/send-message",
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      );
      // errors
      if (!res.ok) {
        if (res.message === "jwt expired") {
          await refreshToken();
          await onSubmit(values);
          return;
        }
        toast.error(res.message);
        return;
      }

      // success
      form.setValue("message", "");
      const socket = getSocket();
      if (socket) {
        socket.emit("send-message", {
          ...values,
          otherUserId: receiverId,
        });
      }
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong while login`);
      return;
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 600);
    }
  }

  const handleInput = () => {
    const el = textareaRef.current;
    if (!el) return;
    el.style.height = "auto"; // reset height
    el.style.height = `${el.scrollHeight}px`; // set to scroll height

    const socket = getSocket();
    if (socket && activeChat) {
      socket.emit("typing", { chatId: activeChat.id, receiverId });

      if (typingTimeout.current) {
        clearTimeout(typingTimeout.current);
      }

      typingTimeout.current = setTimeout(() => {
        socket.emit("stop-typing", { chatId: activeChat.id, receiverId });
      }, 1500);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      form.handleSubmit(onSubmit)();
    }
  };
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative bg-white flex items-center"
      >
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <>
              <textarea
                {...field}
                ref={(el) => {
                  textareaRef.current = el;
                  field.ref(el);
                }}
                onInput={handleInput}
                onKeyDown={handleKeyDown}
                placeholder="Write message here..."
                rows={2}
                className="w-full resize-none overflow-hidden max-h-[120px] text-sm px-4 pr-16 outline-none py-4 border border-foreground/10 border-r-0 transition-all"
              />
              <button
                type="submit"
                className="h-full px-6 absolute right-0 text-foreground/60 hover:text-blue-600"
              >
                <Send />
              </button>
            </>
          )}
        />
      </form>
    </Form>
  );
};

const Messages = () => {
  const { user } = useSession();
  const { activeChat } = useChatStore();

  if (!user || !activeChat || activeChat.message.length === 0) {
    return <div>No Chat history yet</div>;
  }

  const messages = activeChat.message;

  return (
    <>
      <div className="flex-1"></div>
      <div className="block space-y-2">
        {messages.map((message) => (
          <Message key={message.id} user={user} {...message} />
        ))}
      </div>
    </>
  );
};

const Message = ({
  user,
  senderId,
  message,
  createdAt,
}: MessageType & { user: UserType }) => {
  const isSelf = senderId === user.id;
  return (
    <div
      className={`${
        isSelf ? "ml-auto justify-end" : ""
      } w-full max-w-[60%] flex`}
    >
      <div className={`${isSelf ? "items-end" : ""} flex flex-col gap-1`}>
        <div
          className={`${
            isSelf
              ? "bg-[#272727] text-white rounded-2xl rounded-br-none"
              : "bg-white rounded-2xl rounded-bl-none"
          } group relative flex items-center gap-1 p-4`}
        >
          <div className="text-sm">{message}</div>
          <span
            className={`${
              isSelf ? "right-[calc(100%+10px)]" : "left-[calc(100%+10px)]"
            } absolute opacity-0 group-hover:opacity-100 delay-100 text-nowrap px-2 py-1 bg-foreground text-neutral-50 text-xs rounded-xl transition-all`}
          >
            {formatTimestamp(createdAt)}
          </span>
        </div>
      </div>
    </div>
  );
};
