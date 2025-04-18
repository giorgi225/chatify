"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { UseModal } from "@/hooks/useModal";

import { useSession } from "@/providers/auth.provider";

import UserCard from "@/components/cards/userCard";
import ModalLayout from "@/components/modals/modalLayout";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

import fetcher from "@/lib/fetcher";
import { setZodErrors } from "@/lib/utils";

import userSchema from "@/validations/user.schemas";

import { UserType } from "@/types/types";

const schema = userSchema.inviteFriend;
type FormType = z.infer<typeof schema>;

const InviteFriendModal = ({
  isOpen,
  onOpenChange,
  onClose,
  onOpen,
}: UseModal) => {
  const { refreshToken } = useSession();
  const [loading, setLoading] = useState(false);
  const [existedUser, setExistedUser] = useState<UserType | null>(null);
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(values: FormType) {
    if (loading) return;
    setLoading(true);
    setExistedUser(null);

    try {
      const res = await fetcher<{ user: UserType } | { email: string }>(
        "/user/invite-friend",
        {
          method: "POST",
          body: JSON.stringify(values),
        }
      );

      // errors
      if (!res.ok) {
        const { code, errors, message } = res;
        if ((code === "validation-error" || code === "conflict") && errors) {
          setZodErrors<FormType>(errors, form);
          return;
        }
        if (message === "jwt expired") {
          await refreshToken();
          await onSubmit(values);
          return;
        }
        toast.error(message);
        return;
      }

      // success
      if (res.data) {
        if ("email" in res.data) {
          toast.success(`Invitation successfully send to ${res.data.email}`);
          onOpenChange(false)
          return;
        }
        if ("user" in res.data) {
          setExistedUser(res.data.user);
          toast.success(
            "User already exists with this email you can start chat"
          );
        }
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
  return (
    <ModalLayout {...{ isOpen, onOpenChange, onOpen, onClose }}>
      <div className="flex flex-col w-full">
        <h6 className="text-center text-xl max-w-[320px] mx-auto font-black mb-8">
          Invite your friend and start chatting.
        </h6>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`${
              loading ? "pointer-events-none opacity-50" : ""
            } space-y-4`}
          >
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="example@example.com"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {existedUser && (
              <div
                className="w-full flex"
                onClick={() => {
                  onOpenChange(false);
                  setExistedUser(null);
                  form.setValue("email", "");
                }}
              >
                <UserCard {...existedUser} length={1} index={0} />
              </div>
            )}

            <Button
              loading={loading}
              disabled={loading}
              type="submit"
              className="w-full"
            >
              Send Invitation
            </Button>
          </form>
        </Form>
      </div>
    </ModalLayout>
  );
};

export default InviteFriendModal;
