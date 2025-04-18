"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
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

import authSchema from "@/validations/auth.schema";

import { UserType } from "@/types/types";

type FormType = z.infer<typeof authSchema.register>;
const schema = authSchema.register;

type Props = {
  invitation?: { email: string; inviter: UserType; token: string };
};

const RegisterForm = ({ invitation }: Props) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstname: "",
      lastname: "",
      ...(invitation ? { email: invitation.email } : { email: "" }),
      password: "",
      password_confirmation: "",
      ...(invitation && { token: invitation.token }),
    },
  });

  async function onSubmit(values: FormType) {
    if (loading) return;
    setLoading(true);

    let isRedirecting = false;

    try {
      const res = await fetcher<UserType>("/auth/register", {
        method: "POST",
        body: JSON.stringify(values),
      });

      // errors
      if (!res.ok) {
        const { code, errors, message } = res;

        if ((code === "validation-error" || code === "conflict") && errors) {
          setZodErrors<FormType>(errors, form);
          return;
        }

        toast.error(message);
        return;
      }

      // success
      isRedirecting = true;
      const { message } = res;
      toast.success(message);

      if (invitation) {
        router.push("/");
      }else {
        router.push(`/auth/verify-email?email=${values.email}`);
      }
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong while register`);
      return;
    } finally {
      if (!isRedirecting) {
        setTimeout(() => {
          setLoading(false);
        }, 600);
      }
    }
  }

  return (
    <Card>
      <CardHeader>
        {invitation && <div className="text-sm px-4 py-1 rounded-full mx-auto mb-1 bg-yellow-600/10 text-foreground/60 w-max">Invited by <span className="text-yellow-600">{invitation.inviter.firstname} {invitation.inviter.lastname}</span></div>}
        <CardTitle className="text-2xl">Create an account</CardTitle>
        <CardDescription>
          Create account and start chatting with your friends.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className={`${
              loading ? "pointer-events-none opacity-50" : ""
            } space-y-8`}
          >
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Firstname</FormLabel>
                  <FormControl>
                    <Input placeholder="John" {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lastname"
              render={({ field }) => (
                <FormItem className="w-full">
                  <FormLabel>Lastname</FormLabel>
                  <FormControl>
                    <Input placeholder="Doe" {...field} disabled={loading} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                      disabled={loading || !!invitation}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password_confirmation"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirm password</FormLabel>
                  <FormControl>
                    <Input
                      type="password"
                      placeholder="********"
                      {...field}
                      disabled={loading}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="flex flex-col gap-3">
              <Button
                loading={loading}
                disabled={loading}
                type="submit"
                className="w-full"
              >
                Register
              </Button>
              <Button type="button" variant="outline" className="w-full">
                Register with Google
              </Button>
            </div>

            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/auth/login" className="underline underline-offset-4">
                Sign in
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RegisterForm;
