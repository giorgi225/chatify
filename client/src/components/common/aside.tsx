"use client";
import { CallIncoming03Icon, Chatting01Icon } from "hugeicons-react";

import ChatAside from "@/components/common/chatAside";
import { Button } from "@/components/ui/button";

const AsideMenu = () => {
  return (
    <div className="gap-4 flex flex-col items-center py-6 min-w-[70px] w-[70px] bg-foreground/5 border-r border-foreground/10">
      <Button
        size={`icon`}
        variant={`outline`}
        className={`hover:bg-background rounded-xl duration-300 active:scale-90`}
      >
        <Chatting01Icon className="size-5" />
      </Button>
      <Button
        size={`icon`}
        variant={`ghost`}
        className={`hover:bg-background rounded-xl duration-300 active:scale-90`}
      >
        <CallIncoming03Icon className="size-5" />
      </Button>
    </div>
  );
};


const Aside = () => {
  return (
    <div className="flex-1 flex shrink-0 max-w-[380px] border-r border-foreground/10 bg-background">
      <AsideMenu />
      <ChatAside />
    </div>
  );
};

export default Aside;
