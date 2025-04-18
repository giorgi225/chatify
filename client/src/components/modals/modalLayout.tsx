import { ReactNode } from "react";

import { UseModal } from "@/hooks/useModal";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type Props = UseModal & { children: ReactNode };

const ModalLayout = ({ isOpen, onOpenChange, children }: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger className="hidden" asChild>{``}</DialogTrigger>

      <DialogContent
        className={`w-full px-4 pt-12 pb-6 bg-white shadow-md sm:rounded-2xl border-none`}
      >
        <DialogHeader className="hidden">
          <DialogTitle>{`title`}</DialogTitle>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ModalLayout;
