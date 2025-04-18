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

type FormType = z.infer<typeof authSchema.login>;
const schema = authSchema.login;

const LoginForm = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const form = useForm<FormType>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: FormType) {
    if (loading) return;
    setLoading(true);

    let isRedirecting = false;
    try {
      const res = await fetcher<UserType>("/auth/login", {
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

        if (code === "verify-email" || code === "too-many-requests") {
          isRedirecting = true;
          router.push(`/auth/verify-email?email=${values.email}`);
        }

        toast.error(message);
        return;
      }

      // success
      isRedirecting = true;
      const { message } = res;
      toast.success(message);
      router.push(`/`);
    } catch (error) {
      console.error(error);
      toast.error(`Something went wrong while login`);
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
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
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
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <div className="flex items-center justify-between">
                    <FormLabel>Password</FormLabel>
                    <Link
                      href={`/auth/forgot-password`}
                      className="underline underline-offset-4 text-sm font-normal"
                    >
                      Forgot password?
                    </Link>
                  </div>
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
                Login
              </Button>
              <Button type="button" variant="outline" className="w-full">
                Login with Google
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link
                href="/auth/register"
                className="underline underline-offset-4"
              >
                Sign Up
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
